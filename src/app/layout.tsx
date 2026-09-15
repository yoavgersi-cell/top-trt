import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.toptrt.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Top TRT - Compare the Best Online TRT Clinics & Prices",
    template: "%s | Top TRT",
  },
  description:
    "Compare the best online testosterone replacement therapy (TRT) clinics of 2026 - licensed telehealth providers ranked by testing, treatment options, price and ongoing support.",
  keywords: [
    "TRT",
    "testosterone replacement therapy",
    "online TRT",
    "best TRT clinic",
    "TRT telehealth",
    "low testosterone treatment",
    "testosterone therapy online",
    "TRT providers",
  ],
  openGraph: {
    title: "Top TRT - Compare the Best Online TRT Clinics & Prices",
    description:
      "Independent, side-by-side comparisons of top online testosterone replacement therapy (TRT) providers - ranked on testing, treatment, price and support.",
    type: "website",
    siteName: "Top TRT",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Top TRT - Compare the Best Online TRT Clinics & Prices",
    description:
      "Independent, side-by-side comparisons of top online testosterone replacement therapy (TRT) providers.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Top TRT",
              url: SITE_URL,
              areaServed: { "@type": "Country", name: "United States" },
              description:
                "Independent guides and provider comparisons for online testosterone replacement therapy (TRT) - expert reviews, pricing research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Top TRT",
              url: SITE_URL,
              description:
                "Compare trusted online testosterone replacement therapy (TRT) providers side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
