# Article images

Hero/card images for articles. Optional — an article with no image falls back
to its `heroColor` gradient, so nothing breaks if this folder is empty.

## Specs
- **Aspect ratio:** 16:9 landscape
- **Size:** ~1600×900 px (minimum 1200×675)
- **Format:** WebP (preferred) or JPG
- **Weight:** under ~300 KB each (performance matters on a recovering site)
- **Composition:** keep the subject centered — cards crop to a wider strip
  (~2.5:1) and the featured card crops a near-square left panel.

## How to reference from code
On disk the file lives here (`public/article-images/…`), but in code the URL
drops the `public/` prefix:

```
{
  slug: "how-glp1-medications-work",
  image: "/article-images/how-glp1-medications-work.webp",
  imageAlt: "GLP-1 injection pen beside a measuring tape",   // SEO + a11y; describe the image
  ...
}
```

Naming convention: use the article `slug` as the filename so it's easy to match.

`imageAlt` is important for SEO (Google Images + page context) and accessibility.
It falls back to the article title if omitted, but a short, descriptive,
keyword-relevant alt is strongly preferred.

## Generating images (automated)

Every article should ship with a hero image. Images are generated on-brand via
OpenAI (`gpt-image-2`) and auto-wired into the seeds:

```
# one article
NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt \
  node scripts/gen-article-images.mjs --slug <slug> --wire

# next N articles missing an image (also wires them in)
NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt \
  node scripts/gen-article-images.mjs --count 5 --wire

# preview what's missing, generate nothing
node scripts/gen-article-images.mjs --dry --count 5
```

- House style + per-slug scene/alt live in `scripts/article-image-specs.mjs`.
  **When you add a new article, add its slug there** (scene + alt), then run the
  generator so it goes live with an image.
- `scripts/daily-article-images.sh` runs the batch + a build check; a daily
  scheduled task runs it to clear the backlog (5/day), then no-ops once every
  article has an image.
- Requires a valid OpenAI secret key (`sk-...`) saved for `api.openai.com` on
  the environment.
