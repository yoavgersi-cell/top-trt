import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Award, BookOpen, Search, BarChart3 } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Top TRT - Our Mission, Team & Review Methodology",
  description:
    "Learn how toptrt.io independently ranks and reviews online testosterone replacement therapy (TRT) providers. Our editorial methodology, review process, medical advisory approach, and commitment to unbiased comparisons.",
  alternates: {
    canonical: "https://www.toptrt.io/about",
  },
};

export default async function AboutPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const teamSchema = experts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "toptrt.io",
    url: "https://www.toptrt.io",
    employee: experts.map((e) => ({
      "@type": "Person",
      name: e.credentials ? `${e.name}, ${e.credentials}` : e.name,
      jobTitle: e.role,
      description: e.bio,
    })),
  } : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {teamSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />}
      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            About Top TRT
          </h1>
          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-gray-500">
            We help men make informed decisions about testosterone replacement therapy
            by independently comparing telehealth clinics on pricing, medical support,
            and treatment quality.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our Mission</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            The online TRT market has grown rapidly, with a growing number of telehealth clinics
            now offering at-home or lab blood testing, clinician evaluation, and testosterone
            treatment - injections, gels and creams, or pellets - arranged online. For men with
            clinically low testosterone, this creates a confusing landscape of options with varying
            pricing, lab and monitoring protocols, medical oversight, and support levels.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            Top TRT exists to simplify this decision. We independently research,
            compare, and review every major clinic so you can find the right fit for your
            needs, budget, and privacy - without spending hours doing the research yourself.
          </p>
        </section>

        {/* What we do - icons grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-[22px] font-bold text-[#191919]">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: "Research Providers", desc: "We evaluate every major telehealth TRT clinic on pricing, lab and monitoring protocols, treatment options, medical oversight, and patient experience." },
              { icon: BarChart3, title: "Compare Side by Side", desc: "Our comparison tools let you see exactly how clinics differ on the factors that matter most to you." },
              { icon: BookOpen, title: "Educate Patients", desc: "Our articles and guides help you understand TRT, the signs of low testosterone, costs, and what to expect from care." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#111111]/5">
                  <Icon className="h-5 w-5 text-[#111111]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-[15px] font-bold text-[#191919]">{title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial team */}
        <ExpertTeam experts={experts} />

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How We Rank Providers</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our rankings are based on a weighted evaluation across six core categories.
            We update our assessments regularly as clinics change their pricing, services,
            and treatment offerings.
          </p>
          <div className="space-y-4">
            {[
              { category: "Medical Credibility", weight: "25%", desc: "Licensed clinician oversight, quality of the initial evaluation, and ongoing monitoring of testosterone, hematocrit and PSA." },
              { category: "Treatment Access", weight: "20%", desc: "Range of TRT options offered (injections, gels and creams, pellets), dosing flexibility, and pharmacy quality." },
              { category: "Pricing & Value", weight: "20%", desc: "Total cost including treatment, lab work, consultations, and delivery. Transparency of pricing and absence of hidden fees." },
              { category: "Patient Experience", weight: "15%", desc: "Enrollment and lab-testing process, discretion, user interface quality, customer support responsiveness, and delivery reliability." },
              { category: "Clinical Support", weight: "10%", desc: "Availability of follow-up consultations, dose adjustments, side-effect management, and ongoing lab monitoring." },
              { category: "Flexibility", weight: "10%", desc: "Contract terms, cancellation policy, ability to pause or switch treatments, and HSA/FSA acceptance." },
            ].map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#111111] px-2.5 py-1 text-[12px] font-bold text-white">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-[1.75] text-gray-600">
            Want the full picture? Read our detailed{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#111111] hover:underline">
              ranking &amp; review methodology
            </Link>{" "}
            - the factors we score, where our data comes from, and how we pick winners.
          </p>
        </section>

        {/* Editorial standards */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial Standards</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independence.</strong> Our editorial team operates
              independently. Provider rankings and reviews are determined by our evaluation criteria,
              not by commercial relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparency.</strong> We clearly disclose that some
              providers compensate us through affiliate partnerships. This may affect how providers are
              displayed but does not influence our ratings or review content.
            </p>
            <p>
              <strong className="text-[#191919]">Evidence-based.</strong> Our medical content references
              published clinical research, FDA information, and established medical guidelines when
              discussing TRT, its benefits, and its risks.
            </p>
            <p>
              <strong className="text-[#191919]">Regular updates.</strong> We continuously review and
              update our rankings, reviews, and articles as providers change their offerings, new clinical
              data emerges, and the market evolves.
            </p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Users className="h-8 w-8 shrink-0 text-[#111111]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">12,000+</p>
                <p className="text-[12px] text-gray-500">Men compared TRT clinics this month</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Award className="h-8 w-8 shrink-0 text-[#111111]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">4</p>
                <p className="text-[12px] text-gray-500">Clinics independently reviewed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-[#111111]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6+</p>
                <p className="text-[12px] text-gray-500">Expert articles and guides published</p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Medical Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              Top TRT is not a medical provider and does not prescribe medications.
              The information on this site is for general information and comparison purposes only and
              should not replace professional medical advice. Testosterone replacement therapy is a
              prescription treatment for clinically diagnosed low testosterone that requires blood
              testing, evaluation, and ongoing supervision by a licensed clinician. TRT is not an
              enhancement product for men with normal testosterone levels. Always consult with a
              qualified clinician before starting treatment. Individual results vary. Side effects
              may occur.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">Ready to compare providers?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[44px] items-center justify-center rounded-lg bg-[#111111] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#000000]"
            >
              Compare Providers
            </Link>
            <Link
              href="/find-your-match"
              className="inline-flex h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[14px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Take the Quiz
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
