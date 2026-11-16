#!/usr/bin/env node
// Generate on-brand 16:9 hero images for TRT articles via OpenAI gpt-image-1,
// crop to 1600x900, encode to webp (<300KB), and write to public/article-images/<slug>.webp.
//
// The OpenAI API key is injected by the session network proxy into requests to
// api.openai.com, so we send a placeholder Authorization header (never a real key).
//
// Usage:
//   node scripts/gen-article-images.mjs --slug trt-and-estrogen   # one slug (sample)
//   node scripts/gen-article-images.mjs --count 5                 # next 5 articles missing an image
//   node scripts/gen-article-images.mjs --count 5 --dry           # list what it WOULD generate
import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_SPECS, HOUSE_STYLE } from "./article-image-specs.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "article-images");
const SEEDS = path.join(ROOT, "src", "lib", "seeds", "trt-articles.ts");

function parseArgs() {
  const a = process.argv.slice(2);
  const o = { count: 0, slug: null, dry: false };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "--count") o.count = parseInt(a[++i], 10);
    else if (a[i] === "--slug") o.slug = a[++i];
    else if (a[i] === "--dry") o.dry = true;
  }
  return o;
}

async function fileExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function allSlugs() {
  const src = await readFile(SEEDS, "utf8");
  return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
}

async function generateOne(slug) {
  const spec = IMAGE_SPECS[slug];
  if (!spec) throw new Error(`No image spec for slug "${slug}" - add one to scripts/article-image-specs.mjs`);
  const prompt = `${HOUSE_STYLE}\n\nScene: ${spec.scene}`;

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Placeholder - the proxy overwrites this with the real saved key.
      Authorization: "Bearer proxy-injected",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1536x1024",
      quality: "medium",
      n: 1,
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`OpenAI ${res.status}: ${txt.slice(0, 500)}`);
  }
  const json = await res.json();
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error(`No image data returned for ${slug}`);
  const raw = Buffer.from(b64, "base64");

  // Center-crop to 16:9 and encode webp under ~300KB.
  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  let q = 82;
  let buf;
  for (; q >= 55; q -= 7) {
    buf = await sharp(raw)
      .resize(1600, 900, { fit: "cover", position: "attention" })
      .webp({ quality: q })
      .toBuffer();
    if (buf.length <= 300 * 1024) break;
  }
  await writeFile(outPath, buf);
  return { slug, path: outPath, bytes: buf.length, quality: q, alt: spec.alt };
}

async function main() {
  const o = parseArgs();
  let targets = [];
  if (o.slug) {
    targets = [o.slug];
  } else {
    const slugs = await allSlugs();
    for (const s of slugs) {
      if (!(await fileExists(path.join(OUT_DIR, `${s}.webp`)))) targets.push(s);
      if (targets.length >= (o.count || 5)) break;
    }
  }
  if (o.dry) {
    console.log("Would generate:", targets.join(", ") || "(none - all articles have images)");
    return;
  }
  if (!targets.length) { console.log("Nothing to do - every article already has an image."); return; }

  const results = [];
  for (const slug of targets) {
    process.stdout.write(`Generating ${slug} ... `);
    try {
      const r = await generateOne(slug);
      console.log(`ok (${(r.bytes / 1024).toFixed(0)}KB q${r.quality})`);
      results.push(r);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    }
  }
  console.log("\n--- wiring (slug -> image + alt) ---");
  for (const r of results) {
    console.log(JSON.stringify({ slug: r.slug, image: `/article-images/${r.slug}.webp`, imageAlt: r.alt }));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
