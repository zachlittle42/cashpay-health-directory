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

export type PerfCategorySlug =
  | 'cgm'
  | 'longevity-rx'
  | 'peptides'
  | 'supplements'
  | 'recovery-tech';

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
  peptides: {
    slug: 'peptides',
    name: 'Peptide Therapy',
    shortLabel: 'Peptides',
    icon: '🧫',
    description:
      'How to access peptides like BPC-157 and TB-500 the legitimate way — through clinician supervision — and the honest regulatory reality of the gray market.',
    intro:
      'Peptides such as BPC-157, TB-500, and the GHK-Cu skin peptide are heavily marketed for recovery, healing, and anti-aging — but the regulatory picture is messy and matters a lot. Most of these are NOT FDA-approved drugs. Some can be prescribed off-label through a licensed clinician and a compounding pharmacy; many others are sold online as "research chemicals, not for human consumption," which is an unregulated gray market with real quality and legal risk. This page focuses on the legitimate, clinician-supervised paths and explains what to watch out for — it is education, not a recommendation to buy unapproved compounds.',
    directAnswer:
      'Peptides are best accessed through a licensed clinician, not bought as "research chemicals." A handful of peptides can be prescribed off-label via telehealth longevity or hormone clinics (with labs and supervision), typically costing about $100–$400+ per month including the compounded medication. Most peptides are NOT FDA-approved, and in 2023 the FDA restricted compounding of several popular ones (including BPC-157). Gray-market "research" peptides are unregulated and carry quality, dosing, and legal risk. Talk to a qualified clinician before considering any peptide.',
    priceRange: '$100–$400+/mo (supervised)',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'Are peptides like BPC-157 legal and FDA-approved?',
        answer:
          'Most performance and recovery peptides — including BPC-157 and TB-500 — are not FDA-approved drugs. In 2023 the FDA placed several popular peptides into a category that effectively restricts pharmacy compounding of them, citing safety data gaps. Some peptides can still be prescribed off-label by a licensed clinician in specific cases, but the "research chemicals, not for human consumption" products sold online are unapproved and unregulated. This is a legally and medically gray area — work with a clinician.',
      },
      {
        question: 'How can I get peptides safely?',
        answer:
          'The legitimate route is a licensed clinician (often via a telehealth hormone, longevity, or sports-medicine practice) who evaluates you, orders labs, and — where appropriate and legal — prescribes a compounded peptide from a vetted pharmacy with proper dosing and monitoring. Avoid unregulated vendors selling "research only" vials, which have documented problems with purity, dosing, and contamination.',
      },
      {
        question: 'How much does clinician-supervised peptide therapy cost?',
        answer:
          'Supervised peptide programs typically run about $100–$400+ per month once you include the clinician/membership fee, the compounded medication, and required lab work. Exact cost depends on the peptide, dose, and provider. Prices are estimates — confirm with the provider.',
      },
      {
        question: 'Do peptides actually work?',
        answer:
          'Evidence varies widely by peptide and is mostly preliminary or animal-based for the popular recovery peptides; robust human clinical trials are limited. We make no efficacy claims. Some peptides have legitimate FDA-approved medical uses in specific conditions, but their use for general recovery, longevity, or performance is unproven. Discuss realistic expectations and risks with a qualified clinician.',
      },
    ],
  },
  supplements: {
    slug: 'supplements',
    name: 'Longevity Supplements',
    shortLabel: 'Supplements',
    icon: '💊',
    description:
      'Evidence-aware comparison of the most popular longevity and healthspan supplements — NAD+ precursors, urolithin A, omega-3, creatine — and the brands worth trusting.',
    intro:
      'The longevity supplement aisle is crowded, lightly regulated, and full of bold claims. This page cuts through it by focusing on the compounds with the most research behind them (omega-3, creatine, NAD+ precursors like NR/NMN, urolithin A) and the brands that invest in third-party testing and transparency. Supplements are not FDA-approved to treat or prevent disease, quality varies enormously between brands, and "more" is not better — so we flag what the evidence actually supports and point you to reputable products.',
    directAnswer:
      'Most longevity supplements cost about $20–$60 per month, though premium NAD+ precursors and urolithin A products run $40–$100+. The best-supported options for healthy adults are creatine and omega-3 (well-studied, cheap), followed by NAD+ precursors (NR/NMN) and urolithin A (Mitopure), which show promise but have more limited human evidence. Brands like Thorne, Momentous, Tru Niagen, and Timeline emphasize third-party testing. Supplements are not FDA-approved to treat disease — talk to a clinician, especially if you take medications.',
    priceRange: '$20–$100+/mo',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'Which longevity supplements are actually backed by evidence?',
        answer:
          'Creatine and omega-3 (EPA/DHA) have the strongest, broadest human evidence and are inexpensive. NAD+ precursors (nicotinamide riboside / NMN) and urolithin A (Mitopure) show promising results in early human studies for cellular and muscle health but need more long-term data. Many other "anti-aging" supplements rest on animal or in-vitro data only. We make no disease claims — match the spend to the evidence.',
      },
      {
        question: 'Are supplement brands regulated for quality?',
        answer:
          'Supplements are regulated as foods, not drugs, so the FDA does not approve them for safety or efficacy before sale, and quality varies a lot between brands. Look for third-party testing seals (NSF, NSF Certified for Sport, USP, Informed Sport), published certificates of analysis, and transparent dosing. Brands like Thorne, Momentous, Pure Encapsulations, and Tru Niagen are known for testing rigor.',
      },
      {
        question: 'How much should longevity supplements cost?',
        answer:
          'Foundational supplements (creatine, omega-3, vitamin D) cost roughly $10–$30/month combined. Branded NAD+ precursors (Tru Niagen) and urolithin A (Timeline Mitopure) are pricier at ~$40–$100+/month. Prices are estimates — buy from the brand or an authorized retailer to avoid counterfeits.',
      },
      {
        question: 'Should I talk to a doctor before taking supplements?',
        answer:
          'Yes, especially if you take prescription medications, are pregnant or nursing, or have a medical condition. Even "natural" supplements can interact with drugs (for example, omega-3 with blood thinners). A clinician can also help you prioritize based on your bloodwork rather than marketing.',
      },
    ],
  },
  'recovery-tech': {
    slug: 'recovery-tech',
    name: 'Recovery & Performance Tech',
    shortLabel: 'Recovery Tech',
    icon: '🔴',
    description:
      'Compare the recovery and performance hardware people buy for sleep, recovery, and longevity — wearables, red light, sauna, cold plunge, and percussion.',
    intro:
      'Recovery technology has gone mainstream: wearables that score your sleep and strain, red-light panels, infrared saunas and sauna blankets, cold plunges, and percussive massage. These are one-time (often pricey) purchases rather than subscriptions, so the question is usually "which is worth it for my goal?" This page compares the major categories on price and what they actually do, with an honest note on where the evidence is solid versus emerging.',
    directAnswer:
      'Recovery tech ranges from about $200 for a recovery wearable or massage gun to $5,000+ for a plumbed cold plunge or full infrared sauna. Wearables (Oura, Whoop) have the strongest evidence for actionable sleep and recovery insight; massage guns and compression help perceived recovery; red light, sauna, and cold exposure have growing but still-mixed evidence. Match the spend to your goal — these are wellness devices, not medical treatments. Prices are estimates that vary by model and sales.',
    priceRange: '$200–$5,000+ one-time',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'What recovery technology is actually worth buying?',
        answer:
          'For most people, a recovery wearable (Oura or Whoop) delivers the most actionable value by quantifying sleep and recovery so you can adjust training and habits. Massage guns and compression boots reliably improve how recovered you feel. Red light, sauna, and cold plunge have enthusiastic followings and growing evidence, but results are more variable — buy those for goals you value, not as guaranteed performance boosters.',
      },
      {
        question: 'How much does recovery tech cost?',
        answer:
          'Roughly: recovery wearables $200–$350 (Whoop is subscription-based, Oura is a device plus membership); massage guns $150–$600; sauna blankets $500–$700; red-light panels $300–$2,000 depending on size; cold plunges $500 (tubs) to $5,000+ (chillers/plumbed units); full infrared saunas $2,000–$8,000+. Prices are estimates and move with frequent sales.',
      },
      {
        question: 'Are saunas and cold plunges backed by science?',
        answer:
          'Regular sauna use has reasonably good observational evidence linking it to cardiovascular and longevity benefits, while cold exposure has more limited and mixed evidence (clearer for mood/alertness and perceived recovery than for performance). Both are generally safe for healthy adults but carry risks for some conditions (heart disease, pregnancy) — check with a clinician before starting.',
      },
      {
        question: 'Do I need a wearable if I already track workouts?',
        answer:
          'Not necessarily. Dedicated recovery wearables add value mainly through sleep staging, heart-rate variability, and a daily readiness score that a basic fitness tracker may not provide. If you already get reliable sleep and HRV data you act on, a separate recovery ring or band is optional.',
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

  // --- Peptide Therapy (clinician-supervised paths) -----------------------
  {
    slug: 'agelessrx-peptides',
    name: 'AgelessRx (Peptides)',
    brand: 'AgelessRx',
    category: 'peptides',
    tagline: 'Telehealth practice that prescribes select peptides',
    description:
      'AgelessRx is a longevity-focused telehealth practice that, where clinically appropriate and legal, prescribes certain peptides alongside its other longevity medications — with online evaluation, labs, and clinician oversight rather than gray-market vials.',
    priceDisplay: '~$100–$300/mo + meds',
    priceNote: 'Consultation/membership plus compounded medication and labs. Estimate — verify on site.',
    fdaStatus: 'Off-label Rx · clinician-supervised',
    prescriptionRequired: true,
    bestFor: 'A supervised, lab-backed alternative to gray-market peptides',
    keyFeatures: ['Licensed clinician evaluation', 'Vetted compounding pharmacy', 'Lab ordering & monitoring', 'Part of a broader longevity menu'],
    pros: ['Real medical oversight, not a research-chemical vendor', 'Labs and follow-up included', 'Transparent telehealth process'],
    cons: ['Peptide availability shifts with FDA/compounding rules', 'Off-label — benefits unproven', 'State availability varies'],
    url: 'https://agelessrx.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'marek-health-peptides',
    name: 'Marek Health',
    brand: 'Marek Health',
    category: 'peptides',
    tagline: 'Hormone/optimization telehealth with clinician oversight',
    description:
      'Marek Health is a hormone-optimization and longevity telehealth platform built around extensive lab testing and provider supervision. Where appropriate, peptides are handled within a monitored, lab-driven protocol rather than sold as standalone unregulated products.',
    priceDisplay: '~$100–$350/mo + meds',
    priceNote: 'Provider/coaching fees plus medication and labs. Estimate — verify on site.',
    fdaStatus: 'Off-label Rx · clinician-supervised',
    prescriptionRequired: true,
    bestFor: 'Lab-heavy optimization users who want supervision',
    keyFeatures: ['Comprehensive lab panels', 'Provider-guided protocols', 'Hormone + peptide context', 'Ongoing monitoring'],
    pros: ['Strong lab/monitoring culture', 'Experienced optimization providers', 'Holistic context, not just one peptide'],
    cons: ['Lab-first model adds upfront cost', 'Off-label — benefits unproven', 'Peptide options depend on regulations'],
    url: 'https://marekhealth.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Longevity Supplements ----------------------------------------------
  {
    slug: 'tru-niagen',
    name: 'Tru Niagen (NR)',
    brand: 'ChromaDex',
    category: 'supplements',
    tagline: 'Best-studied NAD+ precursor (nicotinamide riboside)',
    description:
      'Tru Niagen delivers nicotinamide riboside (NR), the NAD+ precursor with the most published human safety and pharmacokinetic data. It’s the go-to branded NR product for people prioritizing NAD+ support with research-backed ingredients.',
    priceDisplay: '~$40/mo',
    priceNote: 'Lower per month on subscription. Estimate — verify on site.',
    fdaStatus: 'Supplement · not FDA-approved to treat disease',
    prescriptionRequired: false,
    bestFor: 'Research-backed NAD+ support',
    keyFeatures: ['Patented NR (Niagen)', 'Multiple human safety studies', 'GMP / third-party tested', 'Subscription options'],
    pros: ['Most-studied NAD+ precursor brand', 'Strong safety record', 'Consistent quality control'],
    cons: ['Longevity benefit in humans still emerging', 'Pricier than generic niacin', 'Daily-use cost adds up'],
    url: 'https://www.truniagen.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'timeline-mitopure',
    name: 'Timeline Mitopure (Urolithin A)',
    brand: 'Timeline',
    category: 'supplements',
    tagline: 'Clinically studied urolithin A for mitochondria & muscle',
    description:
      'Mitopure is a purified, dosed form of urolithin A — a compound shown in human trials to support mitochondrial function and muscle strength/endurance. Timeline is the company behind most of the published urolithin A research.',
    priceDisplay: '~$60–$90/mo',
    priceNote: 'Cheaper on subscription / larger packs. Estimate — verify on site.',
    fdaStatus: 'Supplement · not FDA-approved to treat disease',
    prescriptionRequired: false,
    bestFor: 'Mitochondrial & muscle-aging support with human data',
    keyFeatures: ['Standardized urolithin A dose', 'Backed by human clinical trials', 'Capsules, powder, and topicals', 'Third-party tested'],
    pros: ['Among the better-studied longevity compounds', 'Consistent, verified dosing', 'Multiple delivery formats'],
    cons: ['Premium price', 'Benefits are modest, not dramatic', 'Best results need consistent daily use'],
    url: 'https://www.timeline.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'momentous',
    name: 'Momentous Essentials',
    brand: 'Momentous',
    category: 'supplements',
    tagline: 'NSF-certified foundations: creatine, omega-3, protein',
    description:
      'Momentous focuses on the evidence-backed foundations — creatine monohydrate, omega-3, vitamin D, and protein — with NSF Certified for Sport testing trusted by pro and collegiate athletes. A clean way to cover the basics that actually move the needle.',
    priceDisplay: '~$20–$45/mo',
    priceNote: 'Per product; bundles available. Estimate — verify on site.',
    fdaStatus: 'Supplement · not FDA-approved to treat disease',
    prescriptionRequired: false,
    bestFor: 'Evidence-first foundations with athlete-grade testing',
    keyFeatures: ['NSF Certified for Sport', 'Creatine, omega-3, vitamin D, protein', 'Trusted by pro teams', 'Transparent sourcing'],
    pros: ['Focus on what’s actually proven', 'Highest-tier third-party testing', 'Clean formulations'],
    cons: ['Premium vs. generic creatine/fish oil', 'Not a one-pill longevity solution', 'Costs add up across products'],
    url: 'https://www.livemomentous.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'thorne',
    name: 'Thorne',
    brand: 'Thorne',
    category: 'supplements',
    tagline: 'Broad, rigorously tested longevity & health range',
    description:
      'Thorne offers a wide catalog spanning NAD+ precursors, basics, and targeted formulas, with a strong reputation for quality control and clean ingredients. A good one-stop brand when you want range plus testing rigor.',
    priceDisplay: '~$20–$60/mo',
    priceNote: 'Varies by product. Estimate — verify on site.',
    fdaStatus: 'Supplement · not FDA-approved to treat disease',
    prescriptionRequired: false,
    bestFor: 'A trusted all-rounder catalog',
    keyFeatures: ['Wide product range', 'Strong QC reputation', 'Some NSF-certified products', 'Clinician-favored brand'],
    pros: ['Breadth plus quality', 'Clean, well-formulated products', 'Widely available'],
    cons: ['Range can be overwhelming', 'Premium pricing', 'Quality varies across the catalog'],
    url: 'https://www.thorne.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Recovery & Performance Tech ----------------------------------------
  {
    slug: 'oura-ring',
    name: 'Oura Ring',
    brand: 'Oura',
    category: 'recovery-tech',
    tagline: 'Sleep & recovery tracking in a ring',
    description:
      'The Oura Ring tracks sleep stages, heart-rate variability, temperature, and a daily Readiness score from your finger — comfortable enough to wear 24/7. It’s the leading wearable for people who care most about sleep and recovery insight.',
    priceDisplay: '~$299 + ~$6/mo',
    priceNote: 'Device plus membership for full insights. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Sleep- and recovery-focused tracking',
    keyFeatures: ['Sleep staging & HRV', 'Daily Readiness score', 'Temperature trends', 'Long battery, discreet form'],
    pros: ['Best-in-class sleep tracking', 'Comfortable 24/7 wear', 'Actionable daily guidance'],
    cons: ['Requires a subscription', 'Less workout-focused than a watch', 'Ring sizing is fixed once bought'],
    url: 'https://ouraring.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'whoop',
    name: 'WHOOP',
    brand: 'WHOOP',
    category: 'recovery-tech',
    tagline: 'Strain & recovery band for serious training',
    description:
      'WHOOP is a screenless band that quantifies daily strain, recovery, and sleep, with a coaching app aimed at athletes optimizing training load. It’s subscription-based, with the hardware included in the membership.',
    priceDisplay: '~$199+/yr (incl. band)',
    priceNote: 'Membership includes the band; cheaper on longer plans. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Athletes optimizing training load',
    keyFeatures: ['Strain & recovery scores', 'Sleep coaching', 'HRV-based readiness', 'Hardware included in membership'],
    pros: ['Excellent for training-load management', 'No upfront hardware cost', 'Strong coaching app'],
    cons: ['Ongoing subscription required', 'No screen / passive only', 'Overkill for casual users'],
    url: 'https://www.whoop.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'joovv',
    name: 'Joovv Red Light',
    brand: 'Joovv',
    category: 'recovery-tech',
    tagline: 'Premium red / near-infrared light panels',
    description:
      'Joovv makes well-built red and near-infrared light panels used for skin, recovery, and circadian support. It’s the premium name in home red-light therapy, with modular panels you can scale up.',
    priceDisplay: '~$600–$2,000+',
    priceNote: 'Varies by panel size. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Home red-light therapy enthusiasts',
    keyFeatures: ['Red + near-infrared wavelengths', 'Modular, scalable panels', 'Build quality & support', 'App-controlled options'],
    pros: ['Strong build and brand support', 'Scalable coverage', 'Backed by some clinical research'],
    cons: ['Expensive vs. budget panels', 'Evidence is wavelength/dose dependent', 'Consistent daily use required'],
    url: 'https://joovv.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'plunge',
    name: 'Plunge Cold Plunge',
    brand: 'Plunge',
    category: 'recovery-tech',
    tagline: 'Self-contained cold plunge with chiller',
    description:
      'Plunge makes self-contained cold plunge tubs with built-in chillers and filtration, so you get consistent cold water on demand without ice. It’s a leading option for home cold exposure.',
    priceDisplay: '~$2,000–$5,000+',
    priceNote: 'Varies by model; tubs without chillers cost less. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Committed home cold-exposure users',
    keyFeatures: ['Built-in chiller & filtration', 'Consistent set temperature', 'No ice required', 'Indoor/outdoor models'],
    pros: ['Convenient, repeatable cold exposure', 'Good filtration/maintenance', 'Solid build'],
    cons: ['High upfront cost', 'Cold-exposure evidence is mixed', 'Footprint + running cost'],
    url: 'https://plunge.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'higherdose-sauna-blanket',
    name: 'HigherDOSE Infrared Sauna Blanket',
    brand: 'HigherDOSE',
    category: 'recovery-tech',
    tagline: 'Affordable at-home infrared sauna',
    description:
      'The HigherDOSE infrared sauna blanket delivers a sweat session at home for a fraction of a built-in sauna’s cost and footprint. It’s the popular entry point into home infrared heat therapy.',
    priceDisplay: '~$500–$700',
    priceNote: 'Frequent sales. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Sauna benefits without a built-in unit',
    keyFeatures: ['Infrared heat', 'Portable, foldable', 'Far cheaper than a cabin sauna', 'Easy setup'],
    pros: ['Accessible price & footprint', 'Convenient at-home sweat', 'No installation'],
    cons: ['Less immersive than a real sauna', 'Single-person, lie-down only', 'Cleaning/upkeep needed'],
    url: 'https://higherdose.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'theragun',
    name: 'Therabody Theragun',
    brand: 'Therabody',
    category: 'recovery-tech',
    tagline: 'Percussive massage for muscle recovery',
    description:
      'Theragun popularized percussive therapy — a handheld device that pummels muscles to ease soreness and improve perceived recovery. A low-cost, high-utility staple of most recovery setups.',
    priceDisplay: '~$150–$600',
    priceNote: 'Varies by model. Estimate — verify on site.',
    fdaStatus: 'Consumer wellness device',
    prescriptionRequired: false,
    bestFor: 'Everyday soreness & warm-up/recovery',
    keyFeatures: ['Percussive massage', 'Multiple attachments', 'Quiet motor (premium models)', 'App-guided routines'],
    pros: ['Cheap, useful, easy to use', 'Reliable for perceived recovery', 'Portable'],
    cons: ['Benefits mostly symptomatic/perceived', 'Premium models are pricey', 'Not a substitute for mobility work'],
    url: 'https://www.therabody.com',
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
