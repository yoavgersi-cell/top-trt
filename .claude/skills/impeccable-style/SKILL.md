---
name: impeccable-style
description: >-
  Produce and edit toptrt.io content in the house "Impeccable Style" - deep,
  honest, answer-first TRT content with strong SEO/GEO/AEO structure, data
  tables, internal linking, and CTR-optimized meta titles/descriptions. Use
  whenever writing or updating an article/pillar, a provider review, a landing
  page, or any SERP title/meta description for this site.
---

# Impeccable Style — toptrt.io content playbook

The repeatable method for producing content that Google/Bing and AI engines
trust and rank, and that reads like a knowledgeable human wrote it. This site
is YMYL (health): accuracy and honesty are non-negotiable.

## 1. Brand voice (sound human, not AI)
- **Answer-first.** Every section opens with a **bold lead sentence** that
  directly answers the heading, then explains. Front-load the payoff.
- **Question-headed sections** for AEO/GEO (headings end in "?"). The site
  auto-builds FAQPage schema from any section heading ending in "?" (needs >=2).
- Vary sentence length (burstiness). Use plain, confident, specific language.
- **Banned AI tells:** delve, testament, tapestry, game-changer, "in
  conclusion", furthermore, moreover, "it is worth noting", "dive deep",
  "navigate the landscape", "unlock", formulaic "Final Verdict & Next Steps".
- Honest and balanced: give the real trade-offs, say "it depends", tell the
  reader when something is NOT for them. Never hype.

## 2. Pillar article format
- **Length:** deep pillars target ~12,500 words (unless asked otherwise).
- **~35-40 sections**, most question-headed; a few statement-headed sections
  hold the data tables (so FAQPage answers stay clean prose — the FAQ builder
  strips HTML from the body of "?" sections).
- **2-3 data tables** (`<table><thead>...<tbody>...`) with real, sourced
  numbers. Put every figure as an attributed, hedged value — never invent
  stats or prices. Tables scroll inside their box on mobile (globals.css).
- **keyTakeaways:** 3-4 scannable takeaways, last one a YMYL/clinician-directed
  disclaimer.
- Close with an "honest bottom line" section + an italic medical disclaimer
  `<p><em>...not medical advice...</em></p>`.
- 8-15 contextual internal links across the cluster (guide, cost, safety,
  fertility, reviews, comparison, methodology). hrefs use escaped quotes:
  `<a href=\"/articles/trt-guide\">`.
- Verify facts with web search before writing; attribute sources inline
  (PubMed/NIH/FDA/MedlinePlus, major reviews). Hedge early/observational data.

## 3. Where content lives (integration)
- Articles: `ArticleData` objects in `src/lib/seeds/trt-articles.ts`
  (shape: slug, title, description, category, readTime, publishedAt,
  updatedAt, heroColor, author, keyTakeaways[], sections[{heading, body}]).
- After adding an article, wire it into ALL of: `public/llms.txt`,
  `src/components/footer.tsx` (Guides column), and
  `src/components/popular-guides.tsx`. It auto-appears in `sitemap.xml`.
- Reviews/landing/battles/config live in `src/lib/seeds/trt.ts`.
- To put the ranked top-3 providers block in a buyer-guide article, add the
  slug to `TRT_TOP_PROVIDERS_SLUGS` in
  `src/components/pages/article-page.tsx` (renders the rich `TopProvidersBlock`
  after the intro; the lighter default top-3 is auto-suppressed for that slug).

## 4. Meta titles & descriptions (CTR-optimized, within limits)
- **Hard limits (display length, decode HTML entities when measuring):**
  title <= 60 chars (the `%s | Top TRT` template adds 10, so title text <= 50);
  meta description <= 160 chars. Keep every title & description UNIQUE.
- **Write for CTR** so the snippet out-clicks higher-ranked results: curiosity
  gaps, fear->relief, contrarian hooks, benefit framing, power words
  (actually/honest/legit/truth/skip/stop), specificity, and a clear CTA
  ("See the top 3", "See the ranking"). Stay honest — no fabricated urgency,
  numbers, or medical overpromises (Google demotes clickbait that mismatches).
- **Keep the visible H1/subheading full; shorten only the SERP copy** via the
  override maps (meta-only, don't touch on-page text):
  - `ARTICLE_SEO_OVERRIDES` in `src/components/pages/article-page.tsx`
    (`{ title?, description? }` by slug).
  - `REVIEW_SEO_OVERRIDES` in `src/components/pages/review-page.tsx`.
  - Landing: `seoTitle`/`seoDescription` in `trt.ts`.
  - Templated titles: review/battle title templates (in their page
    components), state meta description (state page).

## 5. Build & verify loop (always run before commit)
```bash
# node_modules may be wiped on container restart:
test -x node_modules/.bin/next || npm install
npm run build                               # must exit 0
npm run start -- -p 4333 >/dev/null 2>&1 &  # then curl to verify
```
Verify the new/edited page:
- HTTP 200; `sitemap.xml` includes it.
- FAQPage question count = number of "?" headings (`"@type":"Question"`).
- Tables render; mobile horizontal overflow = 0px (Chromium at 390px,
  `--no-sandbox`); og:image present.
- No duplicate titles/descriptions; title <=60 and desc <=160 (decoded).
Reusable audit scripts can be rebuilt as needed (crawl sitemap, parse <head>,
check internal links/status, measure decoded title/desc length).

## 6. Rules that never bend
- Never fabricate statistics, prices, studies, or reviews. Attribute + hedge.
- TRT is prescription-only, clinician-directed; frame accordingly.
- Don't publish star-rating structured data for self-serving scores; show
  review figures as on-page customer feedback only.
- Affiliate links must carry `rel="sponsored nofollow noopener noreferrer"`.
- Canonical host is `www.toptrt.io`; keep one H1 per page.

## 7. Commit
Develop on the designated branch, commit with a clear message, push. End
commit messages with the attribution lines the session specifies.
