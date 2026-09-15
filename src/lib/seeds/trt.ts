import type { SiteConfig } from "@/lib/config";
import { trtArticles } from "./trt-articles";

// ─────────────────────────────────────────────────────────────────────────────
// Testosterone Replacement Therapy (TRT) vertical content — toptrt.io
//
// Launch content for the single-vertical TRT review site. Four providers:
// Hone Health (the anchor at-home-testing + physician-guided TRT offer),
// TMates, Taurus Meds and Dude Meds. Editorial is original and compliance-minded
// (YMYL): TRT is prescription-only and clinician-directed, requires blood tests
// confirming clinically low testosterone, and carries real trade-offs
// (fertility, ongoing monitoring). No cure/permanence claims, no guaranteed
// results, and no fabricated statistics.
//
// PLACEHOLDERS / OPERATOR TO VERIFY:
//  - Trustpilot ratings/reviews are not set — operator supplies later.
//  - All pricing is written as APPROXIMATE and clearly flagged; the operator
//    should confirm current figures against each provider's own checkout.
//  - TMates and Taurus Meds use the neutral provider-placeholder logo until
//    real brand creatives are supplied. Hone and Dude Meds use their real logos.
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-09-14";

export const trtConfig: SiteConfig = {
  siteName: "Top TRT",
  disclosureText:
    "Some providers featured on this site may compensate us. This may affect the order and placement of listings but does not influence our editorial ratings or reviews.",

  hero: {
    backgroundImageUrl: "",
    imageAlt: "Testosterone replacement therapy options",
    updatedLabel: "Last Updated: September 2026",
    h1: "Best TRT Clinics of 2026",
    h2: "The top online testosterone replacement therapy providers, ranked and reviewed",
    description:
      "Compare licensed online TRT clinics by testing, treatment options, price and ongoing support — from at-home hormone testing to physician-guided testosterone therapy.",
  },

  sidebar: {
    socialProofNumber: "11,300+",
    socialProofText: "men compared TRT clinics on our platform this month.",
    secureTitle: "Secure & Confidential",
    secureText:
      "Every provider we feature uses secure, discreet systems to protect your privacy.",
    featuredImageUrl: "/sidebar-featured.webp",
    featuredImageAlt: "Hone Health — at-home testosterone testing and TRT",
    featuredImageLink: "#",
    blockOrder: ["socialProof", "secureBadge", "editorialReviews", "rankingMethodology", "disclosure"],
  },

  cardSocialProof: {
    number: "11,300+",
    text: "men compared TRT clinics this month",
  },

  ranking: {
    providerOrder: ["hone", "tmates", "taurus", "dudemeds"],
    positions: [
      { score: 9.6, starRating: 5, label: "Exceptional", badge: "Our Top Pick" },
      { score: 9.2, starRating: 5, label: "Excellent" },
      { score: 8.9, starRating: 4, label: "Very Good" },
      { score: 8.6, starRating: 4, label: "Very Good" },
    ],
  },

  providers: [
    {
      id: "hone",
      name: "Hone Health",
      tagline:
        "At-home hormone testing plus physician-guided testosterone therapy, managed end to end through telehealth",
      logo: "/logos/hone.svg",
      smallLogo: "/logos/hone.svg",
      highlights: [
        "Starts with real lab testing, not guesswork",
        "Physician-reviewed, prescription treatment",
        "Ongoing monitoring and dose adjustments",
        "Testing and treatment in one connected program",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1291&aff_id=12904&url_id=12019",
      ctaText: "Visit Site",
    },
    {
      id: "tmates",
      name: "TMates",
      tagline:
        "A TRT-focused telehealth membership built around lab testing, clinician visits and ongoing monitoring",
      logo: "/provider-placeholder.svg",
      smallLogo: "/provider-placeholder.svg",
      highlights: [
        "Dedicated TRT-first program",
        "Includes lab work and clinician review",
        "Ongoing check-ins and dose management",
        "Membership model with support built in",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1471&aff_id=12904&url_id=11713",
      ctaText: "Visit Site",
    },
    {
      id: "taurus",
      name: "Taurus Meds",
      tagline:
        "A men's-health telehealth service offering TRT and related treatments online after a clinician review",
      logo: "/provider-placeholder.svg",
      smallLogo: "/provider-placeholder.svg",
      highlights: [
        "Men's-health focus beyond TRT",
        "Online consultation and lab-based diagnosis",
        "Licensed clinicians review your results",
        "Discreet, direct-to-door delivery",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1453&aff_id=12904&url_id=11487",
      ctaText: "Visit Site",
    },
    {
      id: "dudemeds",
      name: "Dude Meds",
      tagline:
        "Straightforward, value-minded men's telehealth offering testosterone therapy online",
      logo: "/logo-dudemeds.svg",
      smallLogo: "/logo-dudemeds.svg",
      highlights: [
        "Simple, no-frills sign-up",
        "Value-minded, budget-friendly positioning",
        "Licensed-clinician review before treatment",
        "Discreet home delivery",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1361&aff_id=12904&url_id=11182",
      ctaText: "Visit Site",
    },
  ],

  reviews: [
    {
      slug: "hone",
      providerId: "hone",
      shortSummary:
        "An end-to-end TRT program that starts with real hormone testing and moves to physician-guided treatment and monitoring — our top pick for men who want testing and therapy handled in one connected place.",
      reviewIntro:
        "Hone Health is a telehealth service built around the full arc of testosterone care: it starts with lab testing to see whether your testosterone is actually low, then — if a clinician confirms it's clinically warranted — moves into prescription testosterone therapy with ongoing monitoring and dose adjustments. That testing-first approach is the reason it's our top pick: TRT is only appropriate for men with genuinely low testosterone, and Hone builds the diagnosis into the program rather than skipping to a prescription. This review covers what it offers and who it fits.",
      keyFeatures: [
        "Begins with lab testing to confirm whether testosterone is clinically low",
        "Prescription testosterone therapy after a licensed-clinician review",
        "Ongoing monitoring with follow-up bloodwork and dose adjustments",
        "Testing and treatment connected in one program",
        "Fully online, discreet process",
        "Support for men managing therapy long-term",
      ],
      pricingSummary:
        "Approximate only — confirm at checkout. TRT programs like Hone typically bundle an initial testing/diagnostic step with an ongoing monthly or membership fee that covers clinician oversight, follow-up labs and the medication. Exact costs depend on the treatment format and how often you're monitored, and promotions change, so treat any figure you see as a starting point and confirm the current price on Hone Health's own site before enrolling.",
      treatmentOptions: [
        "Baseline and follow-up hormone lab testing",
        "Prescription testosterone therapy (clinician-directed format)",
        "Ongoing monitoring and dose management",
      ],
      pros: [
        "Testing-first model matches how TRT should actually be prescribed",
        "Diagnosis, treatment and monitoring handled in one connected program",
        "Licensed clinicians make the prescribing decision",
        "Ongoing follow-up rather than a one-and-done prescription",
      ],
      cons: [
        "A comprehensive program usually costs more than a bare-bones prescription service",
        "Still requires the commitment of ongoing bloodwork and check-ins (as any responsible TRT should)",
        "TRT is long-term — worth understanding the fertility and monitoring trade-offs first",
      ],
      bestFor: [
        "Men who want testing and treatment handled in one place",
        "Anyone who wants ongoing monitoring, not just a prescription",
        "Men who value a diagnosis-led, clinician-guided approach",
      ],
      finalVerdict:
        "Hone Health is our top pick because it treats TRT the way it should be treated — a diagnosis backed by lab testing, a clinician's decision, and ongoing monitoring — rather than a shortcut to a prescription. It suits men who want the whole process, from the first blood test to long-term dose management, handled in one connected program. The honest caveats are that a comprehensive program costs more than a minimal one, and that TRT is a long-term commitment with real trade-offs to weigh first. Confirm current pricing before you enroll. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Test your levels",
          detail:
            "You complete hormone lab testing so there's real data on whether your testosterone is clinically low — the starting point for any legitimate TRT decision.",
        },
        {
          timing: "Step 2",
          title: "Licensed clinician review",
          detail:
            "A licensed clinician reviews your results and symptoms and decides whether testosterone therapy is appropriate — and, if so, which approach fits.",
        },
        {
          timing: "Step 3",
          title: "Treatment and ongoing monitoring",
          detail:
            "If prescribed, treatment is arranged discreetly, with follow-up bloodwork and dose adjustments over time to keep therapy safe and on target.",
        },
      ],
      trustBadges: ["Testing-first", "Licensed clinicians", "Ongoing monitoring"],
      updatedAt: UPDATED,
    },
    {
      slug: "tmates",
      providerId: "tmates",
      shortSummary:
        "A TRT-focused telehealth membership that bundles lab testing, clinician visits and ongoing monitoring into one program aimed specifically at men managing low testosterone.",
      reviewIntro:
        "TMates is a telehealth service built specifically around testosterone therapy. Rather than treating TRT as one item on a broad men's-health menu, it centers the whole membership on it: lab testing to establish your levels, a licensed clinician to review them, and ongoing check-ins to manage treatment over time. That focus is its main selling point. This review covers what it offers and who it fits.",
      keyFeatures: [
        "TRT-first program rather than a general men's-health add-on",
        "Includes lab testing and a licensed-clinician review",
        "Ongoing monitoring and dose management",
        "Membership model with support built in",
        "Fully online and discreet",
      ],
      pricingSummary:
        "Approximate only — confirm at checkout. As a membership-style TRT program, TMates typically charges an ongoing monthly fee that bundles clinician oversight, monitoring and, depending on the plan, testing and medication. Exact figures depend on the plan and are subject to change, so confirm the current price on the TMates site before enrolling.",
      treatmentOptions: [
        "Hormone lab testing and diagnosis",
        "Prescription testosterone therapy (clinician-directed)",
        "Ongoing monitoring and follow-up",
      ],
      pros: [
        "Dedicated TRT focus means the whole program is built around it",
        "Testing, prescribing and monitoring in one membership",
        "Licensed clinicians involved throughout",
        "Ongoing support rather than a one-off prescription",
      ],
      cons: [
        "Membership pricing is an ongoing commitment",
        "Requires regular bloodwork and check-ins (as responsible TRT should)",
        "Narrower focus than a broad men's-health platform if you want more than TRT",
      ],
      bestFor: [
        "Men who specifically want a TRT-focused program",
        "Those who value ongoing monitoring and support",
        "Men comfortable with a membership model",
      ],
      finalVerdict:
        "TMates is a strong option for men who want a program built specifically around testosterone therapy, with testing, clinician review and ongoing monitoring bundled together. If you'd rather have a broader men's-health platform, or want testing and treatment from the most established name, compare it against our top pick. Confirm current pricing on the TMates site. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Lab testing",
          detail: "You complete hormone testing so a clinician has real data on your testosterone levels.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail: "A licensed clinician reviews your labs and symptoms and decides whether TRT is appropriate.",
        },
        {
          timing: "Step 3",
          title: "Treatment and monitoring",
          detail: "If prescribed, treatment is managed through the membership with ongoing check-ins and adjustments.",
        },
      ],
      trustBadges: ["TRT-focused", "Licensed clinicians", "Ongoing monitoring"],
      updatedAt: UPDATED,
    },
    {
      slug: "taurus",
      providerId: "taurus",
      shortSummary:
        "A men's-health telehealth service that offers TRT alongside other treatments online, with a lab-based diagnosis and a licensed-clinician review before any prescription.",
      reviewIntro:
        "Taurus Meds is a men's-health telehealth brand that includes testosterone therapy in a broader lineup of men's treatments. The model is the familiar one: an online consultation, lab testing to establish whether your testosterone is genuinely low, and a licensed clinician who reviews your results before deciding whether TRT is appropriate. This review focuses on the model and how it fits into the field; confirm the current lineup and pricing on the Taurus Meds site.",
      keyFeatures: [
        "TRT offered within a broader men's-health service",
        "Lab-based diagnosis before any prescription",
        "Licensed clinicians review your results",
        "Fully online consultation",
        "Discreet, direct-to-door delivery",
      ],
      pricingSummary:
        "Approximate only — confirm at checkout. Taurus Meds prices TRT through a combination of testing and an ongoing treatment plan; the exact cost depends on the plan, the treatment format and monitoring included. Because promotions and plans change, confirm the current price on the Taurus Meds site before signing up.",
      treatmentOptions: [
        "Hormone lab testing and diagnosis",
        "Prescription testosterone therapy (clinician-directed)",
        "Other men's-health treatments (see the Taurus Meds site)",
      ],
      pros: [
        "Broader men's-health platform if you want more than TRT",
        "Lab-based diagnosis before prescribing",
        "Licensed clinicians involved in the decision",
        "Convenient, fully online process",
      ],
      cons: [
        "Less exclusively TRT-focused than a dedicated program",
        "Monitoring depth depends on the specific plan — confirm what's included",
        "Requires an online medical review and lab work (as it should)",
      ],
      bestFor: [
        "Men who want TRT within a broader men's-health service",
        "Those comparing several telehealth options",
        "Anyone prioritizing a convenient online process",
      ],
      finalVerdict:
        "Taurus Meds is a sensible choice for men who want testosterone therapy as part of a broader men's-health platform, with a lab-based diagnosis and a licensed clinician's sign-off. If you'd prefer a program built exclusively around TRT with deep ongoing monitoring, compare it against our top-ranked providers. Confirm current pricing and what monitoring is included on the Taurus Meds site. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online consultation and testing",
          detail: "You complete an intake and lab testing so a clinician can see your testosterone levels.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail: "A licensed clinician reviews your results and decides whether TRT is appropriate.",
        },
        {
          timing: "Step 3",
          title: "Treatment and delivery",
          detail: "If prescribed, treatment is arranged and shipped discreetly, with follow-up as your plan provides.",
        },
      ],
      trustBadges: ["Men's-health focus", "Lab-based diagnosis", "Discreet shipping"],
      updatedAt: UPDATED,
    },
    {
      slug: "dudemeds",
      providerId: "dudemeds",
      shortSummary:
        "A straightforward, value-minded men's telehealth service offering testosterone therapy online, with a simple sign-up, a licensed-clinician review and discreet delivery.",
      reviewIntro:
        "Dude Meds is a men's telehealth service built around simplicity and value. It offers testosterone therapy online through a streamlined flow: an intake and the required lab testing, a licensed clinician's review, and treatment if it's appropriate. There's less program depth than the biggest names, and the trade for that is a focus on keeping things simple and affordable. This review covers its approach and fit.",
      keyFeatures: [
        "Value-minded, budget-friendly positioning",
        "Simple, no-frills sign-up",
        "Lab testing and licensed-clinician review",
        "Discreet home delivery",
        "Fully online process",
      ],
      pricingSummary:
        "Approximate only — confirm at checkout. Dude Meds positions itself as a value option, so its TRT pricing tends to sit toward the affordable end, typically as a simple monthly plan after the required testing. Exact costs depend on the plan and are subject to change, so verify the current price on the Dude Meds site before ordering.",
      treatmentOptions: [
        "Required hormone lab testing",
        "Prescription testosterone therapy (clinician-directed)",
        "Online follow-up",
      ],
      pros: [
        "Value-minded, budget-friendly positioning",
        "Simple, fast sign-up",
        "Fully online and discreet",
        "Still requires a licensed-clinician review and testing",
      ],
      cons: [
        "Less program depth and monitoring than a dedicated TRT membership",
        "Less brand polish and platform breadth than the largest names",
        "Confirm exactly what testing and monitoring the plan includes",
      ],
      bestFor: [
        "Men who want a simple, low-cost route to TRT",
        "Those who value a fast, straightforward process",
        "Budget-focused shoppers",
      ],
      finalVerdict:
        "Dude Meds is a reasonable pick for men who want testosterone therapy without paying for extra program depth — a simple, value-minded, fully online option that still runs the required testing and clinician review. If you want deep ongoing monitoring and a testing-first program, compare it against our top pick. Confirm current pricing and what's included on the Dude Meds site. This review is general information, not medical advice.",
      howItWorks: [
        {
          timing: "Step 1",
          title: "Quick intake and testing",
          detail: "You complete a short intake and the required lab testing online.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail: "A licensed clinician reviews your results and prescribes if TRT is appropriate.",
        },
        {
          timing: "Step 3",
          title: "Delivery",
          detail: "If prescribed, treatment ships discreetly to your door.",
        },
      ],
      trustBadges: ["Value-minded", "Licensed clinicians", "Discreet shipping"],
      updatedAt: UPDATED,
    },
  ],

  battles: [
    {
      slug: "hone-vs-tmates",
      provider1Id: "hone",
      provider2Id: "tmates",
      title: "Hone Health vs TMates",
      matchupLabel: "Hone Health vs TMates",
      subtitle: "An end-to-end testing-and-treatment program vs a dedicated TRT membership",
      description:
        "Compare Hone Health and TMates for online TRT — testing, clinician oversight, monitoring and which fits you best.",
      intro:
        "Hone Health and TMates both take testosterone therapy seriously: each starts with lab testing, involves a licensed clinician, and monitors treatment over time. Hone is a broad, testing-first program that connects diagnosis and treatment; TMates is a membership built specifically around TRT. Here's how they compare.",
      verdict:
        "Both are legitimate, monitoring-minded options. Hone is our pick for its established testing-first program that ties diagnosis, treatment and follow-up together. TMates is an excellent choice if you want a membership focused exclusively on TRT. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Testing-first program connecting diagnosis and treatment",
        "Ongoing monitoring and dose adjustments",
        "Established, comprehensive approach",
      ],
      verdictLoserPoints: [
        "Dedicated TRT-first membership",
        "Testing, prescribing and monitoring bundled",
        "Focused support for men on therapy",
      ],
      winnerId: "hone",
      categories: [
        {
          name: "Testing & diagnosis",
          winner: "tie",
          explanation: "Both start with lab testing to confirm whether testosterone is clinically low before any prescription.",
          supportingPoints: ["Lab-based diagnosis at both", "Clinician-confirmed"],
        },
        {
          name: "Program breadth",
          winner: "provider1",
          explanation: "Hone connects testing and treatment in one established, comprehensive program.",
          supportingPoints: ["End-to-end program", "Established brand"],
        },
        {
          name: "TRT focus",
          winner: "provider2",
          explanation: "TMates is built exclusively around testosterone therapy.",
          supportingPoints: ["TRT-first membership", "Focused support"],
        },
        {
          name: "Ongoing monitoring",
          winner: "tie",
          explanation: "Both include follow-up bloodwork and dose management rather than a one-off prescription.",
          supportingPoints: ["Follow-up labs", "Dose adjustments"],
        },
      ],
      features: [
        { feature: "Lab testing", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Ongoing monitoring", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Model", provider1Value: "End-to-end program", provider2Value: "TRT membership", highlight: "provider1" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site", highlight: "none" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "hone-vs-taurus",
      provider1Id: "hone",
      provider2Id: "taurus",
      title: "Hone Health vs Taurus Meds",
      matchupLabel: "Hone Health vs Taurus Meds",
      subtitle: "A testing-first TRT program vs a broader men's-health platform",
      description:
        "Compare Hone Health and Taurus Meds for online TRT — testing, monitoring, breadth and which fits your priorities.",
      intro:
        "Hone Health and Taurus Meds both prescribe TRT online after lab testing and a clinician review, but they're built differently. Hone is a testing-first program centered on hormone care; Taurus Meds offers TRT within a broader men's-health lineup. Here's how they compare.",
      verdict:
        "Both are honest online options. Hone wins for its focused, testing-first hormone program and ongoing monitoring, while Taurus Meds wins if you want TRT alongside a broader men's-health service. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Testing-first hormone program",
        "Connected diagnosis, treatment and monitoring",
        "Established, focused approach",
      ],
      verdictLoserPoints: [
        "Broader men's-health platform",
        "TRT plus other treatments",
        "Convenient online consultation",
      ],
      winnerId: "hone",
      categories: [
        {
          name: "TRT program depth",
          winner: "provider1",
          explanation: "Hone is centered on hormone care with connected testing, treatment and monitoring.",
          supportingPoints: ["Testing-first", "Ongoing monitoring"],
        },
        {
          name: "Breadth of services",
          winner: "provider2",
          explanation: "Taurus Meds offers a wider men's-health lineup beyond TRT.",
          supportingPoints: ["Multiple treatments", "One men's-health account"],
        },
        {
          name: "Diagnosis",
          winner: "tie",
          explanation: "Both require lab testing and a licensed-clinician review before prescribing.",
          supportingPoints: ["Lab-based", "Clinician-confirmed"],
        },
        {
          name: "Best-fit clarity",
          winner: "provider1",
          explanation: "Hone's hormone focus makes its value proposition specific for men who mainly want TRT done well.",
          supportingPoints: ["Focused offering", "Monitoring built in"],
        },
      ],
      features: [
        { feature: "TRT focus", provider1Value: "High", provider2Value: "Part of a broader menu", highlight: "provider1" },
        { feature: "Lab testing", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site", highlight: "none" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "hone-vs-dudemeds",
      provider1Id: "hone",
      provider2Id: "dudemeds",
      title: "Hone Health vs Dude Meds",
      matchupLabel: "Hone Health vs Dude Meds",
      subtitle: "A comprehensive, testing-first program vs a value-minded simple option",
      description:
        "Compare Hone Health and Dude Meds for online TRT — program depth, monitoring, price and which fits your priorities.",
      intro:
        "Hone Health and Dude Meds sit at different ends of the same market. Hone is a comprehensive, testing-first program with ongoing monitoring; Dude Meds is a simple, value-minded service that offers TRT after the required testing and review. Here's how they compare.",
      verdict:
        "Both are legitimate online options. Hone wins for men who want depth — testing, treatment and monitoring in one program — while Dude Meds wins on simple, budget-friendly access. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Comprehensive, testing-first program",
        "Ongoing monitoring and dose management",
        "Connected diagnosis and treatment",
      ],
      verdictLoserPoints: [
        "Value-minded, budget-friendly pricing",
        "Simple, fast sign-up",
        "Still includes testing and clinician review",
      ],
      winnerId: "hone",
      categories: [
        {
          name: "Program depth",
          winner: "provider1",
          explanation: "Hone connects testing, treatment and ongoing monitoring; Dude Meds keeps it simple.",
          supportingPoints: ["End-to-end program", "Ongoing monitoring"],
        },
        {
          name: "Value",
          winner: "provider2",
          explanation: "Dude Meds is built around low, simple pricing.",
          supportingPoints: ["Budget-friendly", "No-frills sign-up"],
        },
        {
          name: "Diagnosis",
          winner: "tie",
          explanation: "Both require lab testing and a licensed-clinician review before prescribing.",
          supportingPoints: ["Lab-based", "Clinician-confirmed"],
        },
        {
          name: "Monitoring",
          winner: "provider1",
          explanation: "Hone emphasizes ongoing follow-up bloodwork and dose adjustments.",
          supportingPoints: ["Follow-up labs", "Dose management"],
        },
      ],
      features: [
        { feature: "Program depth", provider1Value: "Comprehensive", provider2Value: "Simple", highlight: "provider1" },
        { feature: "Lab testing", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site (value)", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "tmates-vs-taurus",
      provider1Id: "tmates",
      provider2Id: "taurus",
      title: "TMates vs Taurus Meds",
      matchupLabel: "TMates vs Taurus Meds",
      subtitle: "A dedicated TRT membership vs a broader men's-health platform",
      description:
        "Compare TMates and Taurus Meds for online TRT — focus, monitoring, breadth and which fits you best.",
      intro:
        "TMates and Taurus Meds both prescribe TRT online after testing and a clinician review, but they compete on different things. TMates is a membership built exclusively around testosterone therapy; Taurus Meds offers TRT within a broader men's-health service. Here's how they compare.",
      verdict:
        "Both are solid, honest options. TMates wins for its dedicated TRT focus and built-in monitoring, while Taurus Meds wins if you want TRT alongside a broader men's-health platform. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "TRT-first membership",
        "Testing and monitoring bundled",
        "Focused support for men on therapy",
      ],
      verdictLoserPoints: [
        "Broader men's-health platform",
        "TRT plus other treatments",
        "Convenient online consultation",
      ],
      winnerId: "tmates",
      categories: [
        {
          name: "TRT focus",
          winner: "provider1",
          explanation: "TMates is built exclusively around testosterone therapy.",
          supportingPoints: ["TRT-first membership", "Focused support"],
        },
        {
          name: "Breadth of services",
          winner: "provider2",
          explanation: "Taurus Meds offers a wider men's-health lineup beyond TRT.",
          supportingPoints: ["Multiple treatments", "One men's-health account"],
        },
        {
          name: "Diagnosis",
          winner: "tie",
          explanation: "Both require lab testing and a licensed-clinician review before prescribing.",
          supportingPoints: ["Lab-based", "Clinician-confirmed"],
        },
        {
          name: "Ongoing monitoring",
          winner: "provider1",
          explanation: "TMates centers its membership on ongoing monitoring and dose management.",
          supportingPoints: ["Regular check-ins", "Dose management"],
        },
      ],
      features: [
        { feature: "TRT focus", provider1Value: "Exclusive", provider2Value: "Part of a broader menu", highlight: "provider1" },
        { feature: "Lab testing", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site", highlight: "none" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "tmates-vs-dudemeds",
      provider1Id: "tmates",
      provider2Id: "dudemeds",
      title: "TMates vs Dude Meds",
      matchupLabel: "TMates vs Dude Meds",
      subtitle: "A monitoring-focused TRT membership vs a value-minded simple option",
      description:
        "Compare TMates and Dude Meds for online TRT — program depth, monitoring, price and which fits you best.",
      intro:
        "TMates and Dude Meds both offer TRT online, but they compete on different priorities. TMates is a membership built around ongoing monitoring; Dude Meds keeps it simple and budget-friendly. Here's how they compare.",
      verdict:
        "Both are honest options. TMates wins for depth of monitoring and a dedicated TRT program, while Dude Meds wins on simple, budget-friendly access. Choose TMates if ongoing support matters most; choose Dude Meds if price does. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Dedicated TRT membership",
        "Built-in ongoing monitoring",
        "Focused support for men on therapy",
      ],
      verdictLoserPoints: [
        "Value-minded, budget-friendly pricing",
        "Simple, fast sign-up",
        "Still includes testing and clinician review",
      ],
      winnerId: "tmates",
      categories: [
        {
          name: "Program depth",
          winner: "provider1",
          explanation: "TMates emphasizes ongoing monitoring and a dedicated TRT membership; Dude Meds is more no-frills.",
          supportingPoints: ["Membership program", "Ongoing check-ins"],
        },
        {
          name: "Value",
          winner: "provider2",
          explanation: "Dude Meds is positioned around low, simple pricing.",
          supportingPoints: ["Budget-friendly", "Simple plans"],
        },
        {
          name: "Diagnosis",
          winner: "tie",
          explanation: "Both require lab testing and a licensed-clinician review before prescribing.",
          supportingPoints: ["Lab-based", "Clinician-confirmed"],
        },
        {
          name: "Monitoring",
          winner: "provider1",
          explanation: "TMates centers its program on ongoing monitoring and dose management.",
          supportingPoints: ["Follow-up labs", "Dose management"],
        },
      ],
      features: [
        { feature: "TRT focus", provider1Value: "Exclusive", provider2Value: "Value-minded", highlight: "provider1" },
        { feature: "Ongoing monitoring", provider1Value: "Yes", provider2Value: "See site", highlight: "provider1" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site (value)", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
    {
      slug: "taurus-vs-dudemeds",
      provider1Id: "taurus",
      provider2Id: "dudemeds",
      title: "Taurus Meds vs Dude Meds",
      matchupLabel: "Taurus Meds vs Dude Meds",
      subtitle: "A broader men's-health platform vs a value-minded simple option",
      description:
        "Compare Taurus Meds and Dude Meds for online TRT — breadth, price and which fits your priorities.",
      intro:
        "Taurus Meds and Dude Meds are both straightforward men's telehealth services offering TRT online after the required testing and a clinician review. Taurus Meds leans on a broader men's-health lineup; Dude Meds leans on simple, value-minded pricing. Here's how they compare.",
      verdict:
        "Both offer a convenient online path to TRT. Taurus Meds edges it for breadth if you want more than testosterone therapy, while Dude Meds wins on simple, budget-friendly access. Confirm current pricing on each provider's site.",
      verdictWinnerPoints: [
        "Broader men's-health platform",
        "TRT plus other treatments",
        "Lab-based diagnosis and clinician review",
      ],
      verdictLoserPoints: [
        "Value-minded, budget-friendly pricing",
        "Simple, fast sign-up",
        "Straightforward TRT access",
      ],
      winnerId: "taurus",
      categories: [
        {
          name: "Breadth of services",
          winner: "provider1",
          explanation: "Taurus Meds offers a wider men's-health lineup beyond TRT.",
          supportingPoints: ["Multiple treatments", "One men's-health account"],
        },
        {
          name: "Value",
          winner: "provider2",
          explanation: "Dude Meds is explicitly built around low, simple pricing.",
          supportingPoints: ["Budget-friendly", "No-frills sign-up"],
        },
        {
          name: "Diagnosis",
          winner: "tie",
          explanation: "Both require lab testing and a licensed-clinician review before prescribing.",
          supportingPoints: ["Lab-based", "Clinician-confirmed"],
        },
        {
          name: "Discreet delivery",
          winner: "tie",
          explanation: "Both arrange treatment discreetly.",
          supportingPoints: ["Plain packaging", "Direct-to-door"],
        },
      ],
      features: [
        { feature: "Service breadth", provider1Value: "Broader men's health", provider2Value: "TRT, value-focused", highlight: "provider1" },
        { feature: "Lab testing", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Clinician review", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
        { feature: "Pricing", provider1Value: "See site", provider2Value: "See site (value)", highlight: "provider2" },
      ],
      updatedAt: UPDATED,
    },
  ],

  articles: trtArticles,

  faqs: [
    {
      question: "What is TRT?",
      answer:
        "TRT (testosterone replacement therapy) is a prescription treatment that restores testosterone in men whose levels are clinically low. It's diagnosed with blood tests — usually two morning total-testosterone measurements — plus a symptom evaluation, and it's prescribed and monitored by a licensed clinician. It's a treatment for diagnosed low testosterone (hypogonadism), not a performance booster for men with normal levels.",
    },
    {
      question: "How do online TRT clinics work?",
      answer:
        "You complete an intake and lab testing to measure your testosterone, a licensed clinician reviews your results and symptoms to decide whether therapy is appropriate, and — if it is — treatment is arranged with ongoing monitoring. Legitimate services always include lab testing and a clinician's review; a site that prescribes testosterone with no bloodwork or clinician is a red flag.",
    },
    {
      question: "Do I need blood tests before starting TRT?",
      answer:
        "Yes. Confirming clinically low testosterone with blood work is a required, non-negotiable step — testosterone is typically measured in the morning and often more than once. Ongoing bloodwork also continues during treatment to monitor your testosterone, red blood cell count (hematocrit) and prostate (PSA), among other markers, so a clinician can keep therapy safe.",
    },
    {
      question: "Does TRT affect fertility?",
      answer:
        "It can. TRT commonly suppresses the body's own testosterone production and can reduce sperm production, which may impair fertility — sometimes significantly. Men who want to have children should raise this with a clinician before starting; alternatives that support fertility exist and should be discussed. This is one of the most important trade-offs to understand up front.",
    },
    {
      question: "What are the common side effects of TRT?",
      answer:
        "Possible side effects include acne or oily skin, fluid retention, an increase in red blood cell count (which is why hematocrit is monitored), testicular shrinkage, breast tenderness, and effects on mood or sleep. Because TRT is monitored, a clinician tracks these with follow-up bloodwork and can adjust treatment. TRT isn't appropriate for everyone, which is why the medical review matters.",
    },
    {
      question: "How much does TRT cost?",
      answer:
        "It varies by provider and plan. TRT programs typically combine an initial testing/diagnostic cost with an ongoing monthly or membership fee that covers clinician oversight, monitoring and medication. Because promotions and plans change frequently, confirm the current total on each provider's own site before enrolling.",
    },
    {
      question: "Is TRT a lifelong commitment?",
      answer:
        "For many men it's long-term. TRT manages low testosterone rather than curing it, so if you stop, your levels — and symptoms — typically return to where they were (and it can take time for your body's own production to recover). Whether and how long to stay on therapy is a decision to make with your clinician based on your goals, response and monitoring.",
    },
    {
      question: "Can I get TRT if my testosterone is normal?",
      answer:
        "TRT is intended for men with clinically low testosterone confirmed by testing, not for men with normal levels seeking an edge. Taking testosterone when your levels are normal exposes you to the risks without treating a diagnosed deficiency, and a responsible clinician won't prescribe it. If your symptoms are real but your levels are normal, a clinician can help look for other causes.",
    },
  ],

  quiz: {
    welcomeTitle: "Find Your Best TRT Clinic Match",
    welcomeSubtitle:
      "Answer a few quick questions and we'll compare trusted online TRT providers based on your preferences, priorities and location.",
    welcomeTrustPoints: [
      "Takes less than 1 minute",
      "Personalized provider recommendations",
      "Completely free and confidential",
    ],
    welcomeCta: "Find My Match",
    midFlowMessage: "Great — we're narrowing down the best options for you.",
    pageTitle: "Find Your TRT Clinic Match",
    pageSubtitle:
      "Answer a few quick questions to help us compare providers based on your treatment preferences, budget and availability.",
    resultsTitle: "Your Best Match",
    resultsSubtitle:
      "Based on your answers, this provider is the strongest fit for your preferences.",
    resultsOthersTitle: "Other Providers You May Want to Consider",
    trustStrip: [
      "Updated Monthly",
      "Editorially Reviewed",
      "Independent Provider Comparison",
    ],
    loadingMessages: [
      "Comparing trusted providers...",
      "Reviewing treatment options...",
      "Finding your best match...",
      "Preparing your recommendation...",
    ],
    questions: [],
    providerProfiles: [],
  },

  reviewTestimonials: [
    {
      text: "I'd felt run-down for a year before I finally got my levels tested. Comparing the clinics here made it easy to pick one that did the bloodwork properly and actually monitored me instead of just mailing a prescription.",
      name: "Marcus T.",
      state: "TX",
    },
    {
      text: "What I appreciated most was the honesty about the trade-offs — the fertility part especially. I went in informed and picked a provider that took the testing and follow-up seriously.",
      name: "David R.",
      state: "FL",
    },
    {
      text: "Comparing the providers side by side saved me a ton of time. The whole thing was online — testing, a real clinician review, then treatment with check-ins.",
      name: "James P.",
      state: "OH",
    },
  ],

  experts: [
    {
      id: "editorial",
      name: "Top TRT Editorial Team",
      role: "Editorial & Research",
      bio: "Our editorial team researches and compares online TRT providers, reads the clinical evidence behind testosterone therapy, and writes plain-English, compliance-minded guides. We prioritize accuracy and honesty over hype — including being clear about what TRT can and cannot do, and the trade-offs that come with it.",
      specialties: [
        "Provider comparison and research",
        "Telehealth and online prescribing",
        "Evidence-based health writing",
        "Consumer education",
      ],
    },
    {
      id: "medical-review",
      name: "Clinical Review Team",
      role: "Medical Review",
      bio: "Our clinical review process checks health content for accuracy and safety, with an emphasis on avoiding overstated claims and flagging important safety considerations — such as the need for blood testing, ongoing monitoring, and the fertility trade-offs of testosterone therapy. This site provides general information, not medical advice.",
    },
  ],

  landingPages: [],
  sidebars: [],
};
