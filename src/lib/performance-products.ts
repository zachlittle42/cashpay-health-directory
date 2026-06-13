// Longevity & Performance e-commerce data.
//
// This powers the direct-to-consumer "buy online" side of VitalityScout —
// products and telehealth programs people purchase to support longevity,
// metabolic health, and human performance (as opposed to in-person clinics).
//
// Pricing is approximate and changes often; every price string is an estimate
// the reader should confirm on the brand's site. Nothing here is medical
// advice, and we make no efficacy claims — categories that involve prescription
// or off-label use set `requiresMedicalDisclaimer` so the page renders the
// regulatory/medical notice.

export type PerfCategorySlug = 'cgm' | 'longevity-rx';

export interface PerfProduct {
  slug: string;
  name: string;
  brand: string;
  category: PerfCategorySlug;
  /** One-line positioning shown under the name. */
  tagline: string;
  description: string;
  /** Display price, e.g. "$99/mo". Always an estimate to verify. */
  priceDisplay: string;
  priceNote?: string;
  /** Regulatory status where relevant, e.g. "OTC · FDA-cleared (2024)". */
  fdaStatus?: string;
  prescriptionRequired: boolean;
  bestFor: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  /** Outbound link (affiliate-ready). */
  url: string;
  referralType: 'affiliate_link' | 'direct_link';
  featured?: boolean;
  lastVerified: string;
}

export interface PerfCategory {
  slug: PerfCategorySlug;
  name: string;
  /** Short menu/card label. */
  shortLabel: string;
  icon: string;
  description: string;
  /** Longer intro paragraph for the hero. */
  intro: string;
  /** AEO direct-answer lead, grounded in the product data below. */
  directAnswer: string;
  priceRange: string;
  faqs: { question: string; answer: string }[];
  /** Render the medical/regulatory disclaimer (Rx, off-label, etc.). */
  requiresMedicalDisclaimer: boolean;
}

// ---------------------------------------------------------------------------
// CATEGORY METADATA
// ---------------------------------------------------------------------------
export const PERF_CATEGORIES: Record<PerfCategorySlug, PerfCategory> = {
  cgm: {
    slug: 'cgm',
    name: 'Continuous Glucose Monitors (CGM)',
    shortLabel: 'Glucose Monitors',
    icon: '📈',
    description:
      'Over-the-counter and prescription continuous glucose monitors and CGM-based metabolic programs you can buy online without diabetes.',
    intro:
      'Continuous glucose monitors (CGMs) are small wearable sensors that read your blood sugar around the clock and stream it to an app. Once limited to people with diabetes, the FDA cleared the first over-the-counter CGMs in 2024 — so anyone can now buy one to see how meals, exercise, sleep, and stress move their glucose. This page compares the main consumer options on price, who they fit, and what you actually get.',
    directAnswer:
      'A consumer CGM costs roughly $49–$199 per month without insurance. Over-the-counter sensors like Dexcom Stelo (~$99/mo) and Abbott Lingo (~$49–$89/mo) are sold directly to anyone 18+, while software-plus-coaching programs like Levels (~$199/yr membership on top of sensors) and Nutrisense (~$199–$399/mo with a dietitian) layer analysis and guidance on the same hardware. Prescription medical CGMs (Dexcom G7, FreeStyle Libre 3) are cheaper per sensor but require a clinician. Prices are estimates — confirm on each brand’s site.',
    priceRange: '$49–$399/mo',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'How much does a continuous glucose monitor cost without insurance?',
        answer:
          'Over-the-counter CGMs run about $49–$99 per month: Abbott Lingo is roughly $49–$89/mo depending on plan and Dexcom Stelo is about $99/mo (or ~$89/mo on subscription). Software-and-coaching programs cost more — Levels adds a ~$199/year membership on top of sensors, and Nutrisense runs ~$199–$399/mo with dietitian support. Prescription CGMs can be cheaper per sensor but require a doctor. Prices are estimates; confirm with the provider.',
      },
      {
        question: 'Can I get a CGM without diabetes?',
        answer:
          'Yes. As of 2024 the FDA cleared the first over-the-counter CGMs (Dexcom Stelo and Abbott Lingo) for adults 18+ who are not on insulin, so you can buy one online without a prescription or a diabetes diagnosis. Software programs like Levels and Nutrisense are also sold to the general public for metabolic-health and performance tracking.',
      },
      {
        question: 'Which CGM is best for metabolic health and performance?',
        answer:
          'For most healthy adults wanting insight without a prescription, an OTC sensor (Stelo or Lingo) is the simplest start. If you want food logging, scores, and structured guidance, a software program like Levels (pairs with Stelo/Libre) or Nutrisense (includes a dietitian) adds analysis on top. Athletes fueling for endurance often prefer real-time numbers, where Dexcom-based options shine. The "best" choice depends on whether you want raw data or coached interpretation.',
      },
      {
        question: 'How long does a CGM sensor last?',
        answer:
          'Most consumer CGM sensors are worn on the back of the upper arm and last about 14–15 days each before you replace them. Monthly pricing generally assumes two sensors per month. Stelo and Lingo sensors last ~15 days; FreeStyle Libre 3 lasts ~14 days; Dexcom G7 lasts ~10 days plus a grace period.',
      },
      {
        question: 'Are over-the-counter CGMs accurate?',
        answer:
          'OTC CGMs use the same sensor technology as their medical counterparts and are generally accurate for tracking trends and responses to food and activity. They are not intended for insulin dosing or to diagnose diabetes, and readings can lag finger-stick blood values by several minutes. If you have or suspect a medical condition, work with a clinician rather than self-managing from CGM data.',
      },
    ],
  },
  'longevity-rx': {
    slug: 'longevity-rx',
    name: 'Longevity Medications Online',
    shortLabel: 'Longevity Rx',
    icon: '⏳',
    description:
      'Telehealth programs that prescribe longevity-oriented medications — rapamycin, metformin, low-dose naltrexone, and NAD+ — online, where appropriate and legal.',
    intro:
      'A growing set of telehealth clinics will evaluate you online and, where clinically appropriate, prescribe medications studied for healthspan and metabolic aging — most commonly low-dose naltrexone (LDN), metformin, rapamycin, and NAD+ injections. Important context up front: none of these drugs is FDA-approved for "longevity" or "anti-aging." They are prescribed off-label, the long-term human evidence is still emerging, and they require a licensed clinician’s judgment. This page compares the main online providers and what each covers so you can have an informed conversation with a doctor.',
    directAnswer:
      'Online longevity-medication programs typically cost about $30–$150 per month plus the medication and any required labs. Providers like AgelessRx and Healthspan offer telehealth evaluation and, where appropriate, off-label prescriptions for low-dose naltrexone, metformin, rapamycin, or NAD+. None of these drugs is FDA-approved for longevity or anti-aging — they are prescribed off-label and require a licensed clinician. Prices are estimates; confirm with the provider and talk to your own doctor first.',
    priceRange: '$30–$150/mo + meds',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'Can you get rapamycin or metformin for longevity online?',
        answer:
          'Some telehealth clinics (for example AgelessRx and Healthspan) will evaluate you online and, if a licensed clinician judges it appropriate, prescribe medications like metformin, low-dose naltrexone, or rapamycin off-label. These drugs are FDA-approved for other uses (diabetes, etc.) but not for longevity or anti-aging, so prescribing is at the clinician’s discretion and usually requires lab work and ongoing monitoring.',
      },
      {
        question: 'How much do online longevity medications cost?',
        answer:
          'Membership or consultation fees typically run about $30–$150 per month depending on the provider and program, plus the cost of the medication itself and any required lab testing. Generic metformin and naltrexone are inexpensive; rapamycin and NAD+ injections cost more. Prices are estimates — confirm current pricing directly with the provider.',
      },
      {
        question: 'Are longevity medications FDA-approved and safe?',
        answer:
          'No drug is FDA-approved specifically for longevity or anti-aging. Metformin, naltrexone, and rapamycin are approved for other conditions and prescribed off-label here, which is legal but means the longevity benefit is unproven and the long-term risk/benefit in healthy people is still being studied. All carry potential side effects and interactions. Only take them under the supervision of a licensed clinician who knows your full history.',
      },
      {
        question: 'Do I need lab work before starting?',
        answer:
          'Reputable programs require baseline bloodwork (and periodic follow-up labs) before and during treatment with medications like rapamycin or metformin, both to confirm it’s appropriate and to monitor for side effects. Be cautious of any service that prescribes these drugs with no labs and no real clinician evaluation.',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------------------------
export const PERF_PRODUCTS: PerfProduct[] = [
  // --- Continuous Glucose Monitors ----------------------------------------
  {
    slug: 'dexcom-stelo',
    name: 'Dexcom Stelo',
    brand: 'Dexcom',
    category: 'cgm',
    tagline: 'First FDA-cleared OTC glucose biosensor',
    description:
      'Stelo is Dexcom’s over-the-counter glucose biosensor — the first CGM the FDA cleared for sale without a prescription (2024). It’s aimed at adults not on insulin who want to see how food, exercise, and sleep affect their glucose, with a clean app and 15-day sensors.',
    priceDisplay: '~$99/mo',
    priceNote: 'About $89/mo on subscription; ~$99 for a one-time 2-sensor box.',
    fdaStatus: 'OTC · FDA-cleared (2024)',
    prescriptionRequired: false,
    bestFor: 'A trusted, no-prescription start from the leading CGM maker',
    keyFeatures: ['No prescription needed', '15-day sensors', 'Glucose trends & spike alerts', 'Dexcom app ecosystem'],
    pros: ['From Dexcom, the established CGM leader', 'Simple OTC purchase, no doctor', 'Clear app with daily insights'],
    cons: ['No real-time high/low urgent alerts like medical Dexcom', 'Not for people on insulin', 'Software is lighter than coaching programs'],
    url: 'https://www.stelo.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'abbott-lingo',
    name: 'Abbott Lingo',
    brand: 'Abbott',
    category: 'cgm',
    tagline: 'Lowest-cost OTC CGM with a coaching app',
    description:
      'Lingo is Abbott’s over-the-counter biosensor (built on FreeStyle Libre technology) with a coaching app that turns glucose into a "Lingo Count" to help you spot and reduce spikes. Often the cheapest entry point into consumer CGM.',
    priceDisplay: '~$49–$89/mo',
    priceNote: 'Cheapest on longer plans (e.g. ~$49/mo on a 6-month plan); ~$89/mo for 2 weeks of sensors month-to-month.',
    fdaStatus: 'OTC · FDA-cleared (2024)',
    prescriptionRequired: false,
    bestFor: 'Budget-conscious beginners who want built-in coaching',
    keyFeatures: ['No prescription needed', '15-day sensors', 'Lingo Count spike coaching', 'Built on FreeStyle Libre sensor'],
    pros: ['Often the lowest monthly price', 'Coaching/score baked into the app', 'Backed by Abbott’s Libre platform'],
    cons: ['Best price requires a multi-month commitment', 'Not for people on insulin', 'Coaching is automated, not a human dietitian'],
    url: 'https://www.hellolingo.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'levels',
    name: 'Levels',
    brand: 'Levels Health',
    category: 'cgm',
    tagline: 'Metabolic software layer with food logging & scores',
    description:
      'Levels is a software membership that pairs with a CGM sensor (it now supports OTC sensors like Stelo as well as prescription Libre) to score your meals, log food, and surface patterns. It’s the analysis layer for people who want structured metabolic insight, not just raw numbers.',
    priceDisplay: '~$199/yr + sensors',
    priceNote: 'Membership ~$199/year for the app; sensors purchased separately (or bundled).',
    fdaStatus: 'Software · pairs with FDA-cleared sensors',
    prescriptionRequired: false,
    bestFor: 'Data-driven people who want food scores and trends',
    keyFeatures: ['Meal scores & food logging', 'Pairs with OTC or Rx sensors', 'Trends, zone time, and insights', 'Integrations (Apple Health, etc.)'],
    pros: ['Best-in-class metabolic software & UX', 'Turns glucose into actionable food feedback', 'Works with multiple sensor types'],
    cons: ['Membership is on top of sensor cost', 'No live human coach included', 'Most value if you actively log meals'],
    url: 'https://www.levelshealth.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'nutrisense',
    name: 'Nutrisense',
    brand: 'Nutrisense',
    category: 'cgm',
    tagline: 'CGM program with a registered dietitian',
    description:
      'Nutrisense bundles CGM sensors with its app and access to a registered dietitian who helps you interpret your data and adjust your nutrition. It’s the most "coached" of the consumer options — closer to a guided program than a gadget.',
    priceDisplay: '~$199–$399/mo',
    priceNote: 'Lower per month on longer plans; includes sensors and dietitian access.',
    fdaStatus: 'Program · uses FDA-cleared sensors',
    prescriptionRequired: false,
    bestFor: 'People who want a human expert, not just an app',
    keyFeatures: ['Registered dietitian support', 'Sensors included', 'Personalized nutrition guidance', 'Macro & glucose tracking'],
    pros: ['Real dietitian interpretation', 'Good for accountability & habit change', 'All-in-one (hardware + human + app)'],
    cons: ['Most expensive consumer option', 'Overkill if you just want raw data', 'Best value requires a longer commitment'],
    url: 'https://www.nutrisense.io',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'dexcom-g7',
    name: 'Dexcom G7',
    brand: 'Dexcom',
    category: 'cgm',
    tagline: 'Prescription medical CGM with real-time alerts',
    description:
      'The G7 is Dexcom’s prescription medical CGM with real-time readings every few minutes and customizable high/low alerts. It requires a clinician but is the reference-grade option for those who qualify or want medical-tier data and accuracy.',
    priceDisplay: '~$60–$100/mo cash',
    priceNote: 'Cash price varies widely; far cheaper with insurance when medically indicated. Requires a prescription.',
    fdaStatus: 'Rx · FDA-approved medical device',
    prescriptionRequired: true,
    bestFor: 'Those who qualify medically or want real-time alerts',
    keyFeatures: ['Real-time readings & alerts', '~10-day sensors', 'Medical-grade accuracy', 'Share with clinician/caregivers'],
    pros: ['Reference-grade accuracy & alerts', 'Often cheaper per sensor than OTC', 'Insurance-covered when indicated'],
    cons: ['Requires a prescription', 'Not aimed at casual metabolic tracking', 'Cash price without insurance can be high'],
    url: 'https://www.dexcom.com/g7-cgm-system',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Longevity Medications Online ---------------------------------------
  {
    slug: 'agelessrx',
    name: 'AgelessRx',
    brand: 'AgelessRx',
    category: 'longevity-rx',
    tagline: 'Telehealth longevity pharmacy (LDN, metformin, rapamycin)',
    description:
      'AgelessRx is an online longevity-focused medical practice that evaluates patients and, where appropriate, prescribes off-label medications including low-dose naltrexone (LDN), metformin, rapamycin, and NAD+. It pioneered the consumer telehealth model for these drugs and runs its own research initiatives.',
    priceDisplay: '~$45–$150/mo + meds',
    priceNote: 'Consultation/membership plus medication and any required labs. Estimate — verify on site.',
    fdaStatus: 'Off-label Rx · not FDA-approved for longevity',
    prescriptionRequired: true,
    bestFor: 'The broadest menu of longevity prescriptions online',
    keyFeatures: ['LDN, metformin, rapamycin, NAD+', 'Online clinician evaluation', 'Lab ordering & monitoring', 'US-licensed prescribers'],
    pros: ['Widest range of longevity medications', 'Established in this niche with research arm', 'Handles labs and follow-up'],
    cons: ['Off-label use — benefits unproven', 'Costs add up with meds + labs', 'Not available in every state'],
    url: 'https://agelessrx.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'healthspan',
    name: 'Healthspan',
    brand: 'Healthspan',
    category: 'longevity-rx',
    tagline: 'Clinician-led rapamycin & metabolic longevity program',
    description:
      'Healthspan is a telehealth practice focused on evidence-informed longevity medicine, offering clinician oversight for medications such as rapamycin and metformin alongside metabolic and hormone optimization. It emphasizes physician involvement and protocol-based care.',
    priceDisplay: '~$50–$130/mo + meds',
    priceNote: 'Membership plus medication and labs. Estimate — verify on site.',
    fdaStatus: 'Off-label Rx · not FDA-approved for longevity',
    prescriptionRequired: true,
    bestFor: 'Those who want a physician-led, protocol-driven approach',
    keyFeatures: ['Rapamycin & metabolic protocols', 'Physician oversight', 'Lab-guided dosing', 'Educational resources'],
    pros: ['Strong clinical/physician emphasis', 'Protocol-based, lab-guided care', 'Good educational content'],
    cons: ['Off-label use — benefits unproven', 'Membership + meds + labs add up', 'State availability varies'],
    url: 'https://gethealthspan.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
export function getPerfCategory(slug: PerfCategorySlug): PerfCategory {
  return PERF_CATEGORIES[slug];
}

export function getPerfProductsByCategory(slug: PerfCategorySlug): PerfProduct[] {
  // Featured first, then keep authoring order.
  return PERF_PRODUCTS.filter((p) => p.category === slug).sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
}

export function getAllPerfCategories(): PerfCategory[] {
  return Object.values(PERF_CATEGORIES);
}
