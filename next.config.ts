import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "**.blob.vercel-storage.com",
      },
    ],
  },
  // Duplicate-comparison consolidation (e.g. /embody-vs-altrx → /altrx-vs-embody)
  // is handled in the proxy (see SLUG_ALIASES in src/proxy.ts) so the alias
  // collapses in a single 301 instead of chaining with the migration redirect.

  // Canonical-host consolidation: every canonical, og:url and sitemap entry
  // uses the www host, so force the bare apex (toptrt.io) to www.toptrt.io.
  // AI/search engines were observed citing the non-www form; this permanent
  // redirect keeps link equity and citations on the single canonical host.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "toptrt.io" }],
        destination: "https://www.toptrt.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
