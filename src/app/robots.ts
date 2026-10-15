import type { MetadataRoute } from "next";

const SITE_URL = "https://www.toptrt.io";

// Content pages are open to everyone, including AI answer engines (GEO): we
// WANT our TRT comparisons and guides cited in ChatGPT, Claude, Perplexity,
// Gemini and AI Overviews. The `*` rule already allows them, but we name the
// major AI crawlers explicitly so the intent is unambiguous and survives any
// future tightening of the catch-all rule. Only /admin and /api stay closed.
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Claude-User",
  "Claude-SearchBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini / AI Overviews training opt-in)
  "Google-Extended",
  // Apple Intelligence
  "Applebot-Extended",
  // Others
  "CCBot",
  "Amazonbot",
  "cohere-ai",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "Bytespider",
  "YouBot",
  "Diffbot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin", "/api/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
