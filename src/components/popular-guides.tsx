import Link from "next/link";

// Curated internal-links module. Its job is twofold: give readers a useful
// jumping-off point, and pass link equity from a high-authority page (the
// homepage) to the money/pillar/landing pages that need it, using descriptive,
// keyword-relevant anchor text. Grouped so it reads as navigation, not a dump.
const GROUPS: { title: string; links: { label: string; href: string; blurb: string }[] }[] = [
  {
    title: "Essential TRT guides",
    links: [
      { label: "The Complete Guide to TRT", href: "/articles/trt-guide", blurb: "What TRT is, who it's for, benefits, risks and how to start - the full pillar." },
      { label: "Is TRT Safe?", href: "/articles/is-trt-safe", blurb: "What the TRAVERSE trial and the 2025 FDA label change really mean for safety." },
      { label: "TRT Results Timeline", href: "/articles/trt-results-timeline", blurb: "What to expect week by week and month by month once you start." },
      { label: "Testosterone Levels by Age", href: "/articles/testosterone-levels-by-age", blurb: "Normal ranges, how levels change with age, and what counts as low." },
      { label: "Enclomiphene: the TRT alternative", href: "/articles/enclomiphene", blurb: "The treatment that raises your own testosterone while preserving fertility." },
    ],
  },
  {
    title: "Getting started & cost",
    links: [
      { label: "How to Get TRT Online", href: "/articles/how-to-get-trt-online", blurb: "The full step-by-step process, from labs to treatment at your door." },
      { label: "The Easiest Way to Get TRT Online", href: "/articles/easiest-way-to-get-trt-online", blurb: "The lowest-friction path, and the common hold-ups to avoid." },
      { label: "How Much Does TRT Cost?", href: "/articles/trt-cost", blurb: "What to add up for a fair, all-in price comparison between clinics." },
      { label: "Cheapest Online TRT Clinics", href: "/cheapest-online-trt", blurb: "The best-value clinics, ranked - without cutting testing or oversight." },
      { label: "Online TRT by State", href: "/online-trt", blurb: "Which licensed clinics serve your state." },
    ],
  },
  {
    title: "Best TRT for you",
    links: [
      { label: "Best TRT for Beginners", href: "/best-trt-for-beginners", blurb: "Where to start if it's your first time considering testosterone therapy." },
      { label: "Best TRT for Fertility", href: "/best-trt-for-fertility", blurb: "Clinics that take the fertility trade-off seriously, plus alternatives." },
      { label: "Best At-Home TRT", href: "/best-at-home-trt", blurb: "Test, treat and monitor entirely from home with a clinician in the loop." },
      { label: "Best Hone Health Alternatives", href: "/hone-health-alternatives", blurb: "Top competing clinics if Hone isn't the right fit for you." },
      { label: "All Provider Reviews", href: "/reviews", blurb: "In-depth reviews of every online TRT clinic we cover." },
    ],
  },
];

export function PopularGuides() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10">
      <h2 className="mb-1 text-[22px] font-bold text-[#191919] sm:text-[26px]">Popular TRT guides &amp; tools</h2>
      <p className="mb-6 max-w-[640px] text-[15px] leading-relaxed text-gray-500">
        Everything you need to understand testosterone replacement therapy and choose the right clinic - from the
        complete guide to cost, safety and the best options for your situation.
      </p>
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#8A6413]">{group.title}</h3>
            <ul className="space-y-3">
              {group.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group block">
                    <span className="text-[14.5px] font-semibold text-[#191919] group-hover:text-[#8A6413] group-hover:underline">
                      {l.label}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] leading-snug text-gray-500">{l.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
