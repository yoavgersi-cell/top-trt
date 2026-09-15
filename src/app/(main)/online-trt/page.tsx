import type { Metadata } from "next";
import Link from "next/link";
import { STATES } from "@/lib/states";

export const revalidate = 60;

const SITE_URL = "https://www.toptrt.io";

export const metadata: Metadata = {
  title: { absolute: "Online TRT by State (2026) | Top TRT" },
  description:
    "Get TRT online in your state. Compare licensed telehealth clinics with at-home lab testing, a clinician's review and discreet, statewide delivery - pick your state to see options.",
  alternates: { canonical: `${SITE_URL}/online-trt` },
  openGraph: {
    title: "Online TRT by State (2026)",
    description: "Compare licensed online testosterone replacement therapy (TRT) clinics that serve your state.",
    url: `${SITE_URL}/online-trt`,
    type: "website",
  },
};

export default function OnlineTrtIndex() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-[#191919]">Online TRT by State</h1>
      <p className="mb-4 max-w-2xl text-[16px] leading-[1.7] text-gray-700">
        Testosterone replacement therapy is available online in all 50 states through licensed telehealth
        clinics - starting with lab testing to confirm your levels, a licensed clinician&apos;s review, and, if
        appropriate, treatment with ongoing monitoring. Because telehealth is licensed state by state, choose
        your state below to see the providers that serve your area.
      </p>
      <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-gray-600">
        Prefer to jump straight in? See our{" "}
        <Link href="/" className="font-semibold text-[#111111] hover:underline">full clinic comparison</Link>{" "}
        or read our guide to{" "}
        <Link href="/articles/how-to-get-trt-online" className="font-semibold text-[#111111] hover:underline">
          getting TRT online
        </Link>.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
        {STATES.map((s) => (
          <Link
            key={s.slug}
            href={`/online-trt/${s.slug}`}
            className="block rounded-md px-3 py-2 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#111111]"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
