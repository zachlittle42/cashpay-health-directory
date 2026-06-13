// Direct-to-consumer telehealth money pages: men's health, skincare, women's
// health (menopause/HRT), and online mental health. Same data shape as the
// Longevity & Performance pillar (see compare-types.ts) so they share the
// generic CompareCategoryPage renderer.
//
// Pricing is approximate and changes often — every figure is an estimate to
// confirm on the provider's site. Nothing here is medical advice; categories
// involving prescriptions set requiresMedicalDisclaimer.

import type { CompareCategory, CompareProduct } from './compare-types';

export type DtcCategorySlug =
  | 'mens-health'
  | 'skincare'
  | 'womens-health'
  | 'mental-health';

// ---------------------------------------------------------------------------
// CATEGORY METADATA
// ---------------------------------------------------------------------------
export const DTC_CATEGORIES: Record<DtcCategorySlug, CompareCategory> = {
  'mens-health': {
    slug: 'mens-health',
    name: "Men's Health Telehealth (ED & Hair Loss)",
    shortLabel: "Men's Health",
    icon: '🧔',
    description:
      'Compare online clinics that treat erectile dysfunction and hair loss with FDA-approved generics shipped to your door — Hims, Ro, BlueChew, and Keeps.',
    intro:
      "Erectile dysfunction and male-pattern hair loss are the two services that built direct-to-consumer men's health. Both are treated with well-established, FDA-approved generic medications (sildenafil/tadalafil for ED; finasteride/minoxidil for hair), and telehealth makes them cheap, private, and shipped to your door after an online evaluation. This page compares the main platforms on price, what they treat, and who they fit — so you can skip the markup and the awkward visit.",
    directAnswer:
      'Online ED treatment typically costs about $20–$90 per month and online hair-loss treatment about $10–$40 per month, using FDA-approved generics like sildenafil/tadalafil (ED) and finasteride/minoxidil (hair). Broad platforms like Hims and Ro treat both plus other concerns; BlueChew specializes in chewable ED tablets; Keeps focuses on hair loss. All require a quick online evaluation by a licensed clinician. Prices are estimates — confirm on each provider’s site.',
    priceRange: '$10–$90/mo',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'How much does online ED treatment cost without insurance?',
        answer:
          'Generic sildenafil or tadalafil through telehealth typically runs about $20–$90 per month depending on the dose, quantity, and platform — far less than brand-name Viagra or Cialis. Chewable or subscription options vary. You pay a transparent cash price after a licensed clinician reviews your online intake. Prices are estimates; confirm with the provider.',
      },
      {
        question: 'Do I need a prescription, and is it legit?',
        answer:
          'Yes — ED and finasteride are prescription medications, so a licensed clinician reviews your health questionnaire (and sometimes a video visit) before prescribing. Reputable platforms partner with US-licensed pharmacies. Minoxidil for hair is available over the counter. Avoid any site that ships prescription ED drugs with no medical evaluation.',
      },
      {
        question: 'Hims vs Ro vs BlueChew — what’s the difference?',
        answer:
          'Hims and Ro are broad men’s-health platforms that treat ED, hair loss, and other concerns with a polished app and bundling. BlueChew specializes in chewable ED tablets (sildenafil, tadalafil, vardenafil) on a subscription. Keeps focuses specifically on hair loss and is often the cheapest for finasteride/minoxidil. The best pick depends on whether you want one service or a bundle.',
      },
      {
        question: 'Does finasteride for hair loss have side effects?',
        answer:
          'Finasteride is FDA-approved for male-pattern hair loss and works for many men, but a minority report sexual side effects, and it’s not appropriate for everyone. That’s why a clinician evaluation is required. Discuss risks and alternatives (like topical finasteride or minoxidil alone) with the prescribing provider.',
      },
    ],
  },
  skincare: {
    slug: 'skincare',
    name: 'Prescription Skincare Online',
    shortLabel: 'Skincare',
    icon: '🧴',
    description:
      'Compare online dermatology services that prescribe tretinoin and custom formulas for acne, anti-aging, and melasma — Curology, Apostrophe, Musely, and Hers.',
    intro:
      'Prescription-strength skincare — especially tretinoin (retinoic acid), the gold-standard ingredient for acne and anti-aging — used to require a dermatologist visit. Now several telehealth services connect you with a licensed provider who can prescribe custom tretinoin-based formulas online and ship them monthly. This page compares the leading options on price, what they treat, and how personalized the formulas are.',
    directAnswer:
      'Online prescription skincare typically costs about $20–$50 per month for a custom tretinoin-based formula. Curology offers a personalized cream combining tretinoin with ingredients like niacinamide or clindamycin; Apostrophe is dermatology-provider-backed; Musely targets concerns like melasma and anti-aging; and Hers bundles skincare with broader women’s telehealth. A licensed clinician reviews your photos and intake before prescribing. Prices are estimates — confirm with the provider.',
    priceRange: '$20–$50/mo',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'How much does prescription skincare cost online?',
        answer:
          'Custom prescription formulas (typically tretinoin-based) run about $20–$50 per month including the medication and provider oversight — usually cheaper than a dermatologist visit plus a branded retinoid. Prices vary by platform and plan; confirm with the provider.',
      },
      {
        question: 'Can I get tretinoin without seeing a dermatologist in person?',
        answer:
          'Yes. Tretinoin is prescription-only, but telehealth dermatology services let a licensed clinician evaluate photos and your skin history online and prescribe a custom formula if appropriate. It’s legitimate when a real licensed provider reviews your case and a US pharmacy fills it.',
      },
      {
        question: 'Is online tretinoin safe and effective?',
        answer:
          'Tretinoin is one of the most evidence-backed skincare ingredients for acne and signs of aging, but it can cause irritation, dryness, and sun sensitivity, and it’s not recommended during pregnancy. A clinician adjusts strength and ingredients to your skin. Results take weeks to months of consistent nightly use.',
      },
      {
        question: 'Curology vs Apostrophe vs Musely?',
        answer:
          'Curology is the best-known custom-formula service with a low entry price. Apostrophe emphasizes dermatology-provider involvement and a broader formulary. Musely (The FaceRx) is known for targeted treatments like melasma and anti-aging "night cream." The right choice depends on your specific concern and how much personalization you want.',
      },
    ],
  },
  'womens-health': {
    slug: 'womens-health',
    name: 'Menopause & HRT Telehealth',
    shortLabel: "Women's Health",
    icon: '🌸',
    description:
      'Compare online clinics for menopause and hormone replacement therapy (HRT) — Midi Health, Evernow, Alloy, and Hers — with clinician evaluation and prescriptions by mail.',
    intro:
      'Perimenopause and menopause are finally getting dedicated telehealth care. A new wave of clinics connects women with menopause-trained clinicians who can prescribe FDA-approved hormone therapy (estradiol, progesterone) and non-hormonal options, plus treat related symptoms — all online, with medications shipped or sent to a local pharmacy. This page compares the leading services on price, insurance, and scope.',
    directAnswer:
      'Online menopause/HRT care typically costs about $20–$70 per month in membership or visit fees, plus the medication (FDA-approved estradiol and progesterone are often inexpensive generics). Midi Health is clinician-led and accepts many insurance plans; Evernow and Alloy are menopause-focused direct-to-consumer services; and Hers offers menopause care within a broader women’s-health platform. A licensed clinician evaluates you before prescribing. Prices are estimates — confirm with the provider.',
    priceRange: '$20–$70/mo + meds',
    requiresMedicalDisclaimer: true,
    faqs: [
      {
        question: 'How much does online HRT for menopause cost?',
        answer:
          'Membership or visit fees typically run about $20–$70 per month, plus the cost of the hormones themselves — generic estradiol and progesterone are often inexpensive. Some services (like Midi) bill insurance, which can lower out-of-pocket costs. Prices are estimates; confirm with the provider.',
      },
      {
        question: 'Is hormone replacement therapy safe?',
        answer:
          'For many healthy women under 60 or within 10 years of menopause, FDA-approved hormone therapy is considered a safe and effective option for symptoms like hot flashes — but the risk/benefit depends on your personal and family history, and it isn’t right for everyone. A menopause-trained clinician should individualize the decision. This page is informational, not medical advice.',
      },
      {
        question: 'Midi vs Evernow vs Alloy?',
        answer:
          'Midi Health is clinician-led, treats a broad range of midlife symptoms, and accepts many insurance plans. Evernow and Alloy are menopause-focused direct-to-consumer services with streamlined HRT prescribing and mailed medications. The best fit depends on whether you want to use insurance and how comprehensive you need the care to be.',
      },
      {
        question: 'Can I get HRT online without an in-person exam?',
        answer:
          'Often yes — menopause hormone therapy can typically be started after a thorough online evaluation of your symptoms and history with a licensed clinician, though some situations call for labs or in-person follow-up. Reputable services screen for contraindications before prescribing.',
      },
    ],
  },
  'mental-health': {
    slug: 'mental-health',
    name: 'Online Therapy & Psychiatry',
    shortLabel: 'Mental Health',
    icon: '🧠',
    description:
      'Compare online therapy and psychiatry platforms — BetterHelp, Talkspace, Brightside, and Hers — on price, whether they prescribe medication, and insurance.',
    intro:
      'Online mental-health care has made therapy and psychiatry far more accessible: you can message or video-chat with a licensed therapist, and on some platforms a psychiatric provider can evaluate you and prescribe medication — all from home. This page compares the major services on cost, whether they offer medication management, and whether they take insurance, so you can match a platform to what you actually need.',
    directAnswer:
      'Online therapy typically costs about $65–$100 per week (often billed monthly, ~$260–$400/mo), while platforms that add psychiatry and medication management run roughly $95–$350 per month. BetterHelp and Talkspace focus on therapy (Talkspace also offers psychiatry and takes insurance); Brightside specializes in depression/anxiety with therapy plus medication; and Hers offers therapy and psychiatry within a broader platform. Prices are estimates — confirm with the provider.',
    priceRange: '$65–$100/wk or $95–$350/mo',
    requiresMedicalDisclaimer: true,
    safetyNotice:
      'If you are in crisis or thinking about harming yourself, call or text 988 (the Suicide & Crisis Lifeline) in the US, available 24/7, or go to your nearest emergency room. Online therapy and psychiatry services are not for emergencies.',
    faqs: [
      {
        question: 'How much does online therapy cost without insurance?',
        answer:
          'Subscription therapy platforms typically cost about $65–$100 per week, usually billed every 4 weeks (roughly $260–$400/month), for messaging plus live sessions. Platforms that add psychiatry and medication management run about $95–$350/month. Some services accept insurance, which can substantially reduce cost. Prices are estimates; confirm with the provider.',
      },
      {
        question: 'Which online services can prescribe medication?',
        answer:
          'Therapy-only platforms like BetterHelp do not prescribe medication. Talkspace, Brightside, and Hers offer psychiatry with medication management where appropriate, via licensed psychiatric providers. Note that prescribing of controlled substances (for example, certain ADHD or anxiety medications) is restricted online and varies by platform and state.',
      },
      {
        question: 'BetterHelp vs Talkspace vs Brightside?',
        answer:
          'BetterHelp is the largest therapy-only network with flexible matching. Talkspace offers therapy plus psychiatry and is widely covered by insurance and some employers. Brightside specializes in depression and anxiety with a structured therapy-plus-medication model. The right choice depends on whether you need medication, want to use insurance, and prefer messaging or live sessions.',
      },
      {
        question: 'Is online therapy as effective as in-person?',
        answer:
          'For many common concerns like anxiety and depression, research suggests teletherapy can be comparably effective to in-person care and improves access. It may be less suitable for severe or complex conditions that need higher levels of care. If symptoms are severe, talk to a clinician about the right level of treatment.',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------------------------
export const DTC_PRODUCTS: CompareProduct[] = [
  // --- Men's Health (ED & Hair Loss) --------------------------------------
  {
    slug: 'hims',
    name: 'Hims',
    brand: 'Hims & Hers',
    category: 'mens-health',
    tagline: 'Broad men’s-health platform: ED, hair & more',
    description:
      'Hims is the best-known men’s telehealth brand, treating ED (generic sildenafil/tadalafil), hair loss (finasteride/minoxidil), and other concerns through a polished app with bundling and subscriptions.',
    priceDisplay: '~$20–$90/mo',
    priceNote: 'Varies by treatment, dose, and quantity. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved generics',
    prescriptionRequired: true,
    bestFor: 'One platform for ED, hair, and more',
    keyFeatures: ['ED & hair loss treatments', 'Generic sildenafil/tadalafil', 'Finasteride/minoxidil', 'Polished app & bundles'],
    pros: ['Wide range of services', 'Strong UX and subscriptions', 'Transparent cash pricing'],
    cons: ['Bundles can cost more than single generics', 'Subscription auto-renews', 'Upsells across categories'],
    url: 'https://www.hims.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'ro',
    name: 'Ro (Roman)',
    brand: 'Ro',
    category: 'mens-health',
    tagline: 'Full-service men’s telehealth with pharmacy',
    description:
      'Ro (originally Roman) is a comprehensive men’s-health platform covering ED, hair loss, and broader care, with its own pharmacy network and a strong clinical reputation.',
    priceDisplay: '~$20–$90/mo',
    priceNote: 'Varies by treatment and plan. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved generics',
    prescriptionRequired: true,
    bestFor: 'Comprehensive care with integrated pharmacy',
    keyFeatures: ['ED & hair treatments', 'Own pharmacy network', 'Broad telehealth menu', 'Clinician support'],
    pros: ['Established, clinically credible', 'Integrated pharmacy logistics', 'Covers many conditions'],
    cons: ['Pricing similar to peers, not cheapest', 'Subscription model', 'Broad focus vs. specialists'],
    url: 'https://ro.co',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'bluechew',
    name: 'BlueChew',
    brand: 'BlueChew',
    category: 'mens-health',
    tagline: 'Chewable ED tablets by subscription',
    description:
      'BlueChew specializes in chewable ED tablets (sildenafil, tadalafil, and vardenafil) delivered on a monthly subscription after an online evaluation — a convenient, discreet ED-only option.',
    priceDisplay: '~$20–$90/mo',
    priceNote: 'Tiered by tablet count. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved generics (chewable)',
    prescriptionRequired: true,
    bestFor: 'ED-focused users who prefer chewables',
    keyFeatures: ['Chewable sildenafil/tadalafil/vardenafil', 'Monthly subscription', 'Discreet shipping', 'Online evaluation'],
    pros: ['Convenient chewable format', 'Flexible plan tiers', 'ED specialist focus'],
    cons: ['ED only — no hair or other care', 'Subscription auto-renews', 'Not cheaper than generics elsewhere'],
    url: 'https://bluechew.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'keeps',
    name: 'Keeps',
    brand: 'Keeps',
    category: 'mens-health',
    tagline: 'Affordable, hair-loss-focused telehealth',
    description:
      'Keeps focuses specifically on male hair loss, prescribing finasteride and minoxidil (oral and topical) at some of the lowest subscription prices, with photo-based progress tracking.',
    priceDisplay: '~$10–$35/mo',
    priceNote: 'Finasteride/minoxidil plans. Estimate — verify on site.',
    fdaStatus: 'Rx + OTC · FDA-approved',
    prescriptionRequired: true,
    bestFor: 'Lowest-cost hair-loss treatment',
    keyFeatures: ['Finasteride & minoxidil', 'Hair-loss specialty', 'Low subscription pricing', 'Progress tracking'],
    pros: ['Often the cheapest for hair', 'Focused expertise', 'Simple plans'],
    cons: ['Hair loss only', 'No ED or broader care', 'Results require months of consistency'],
    url: 'https://www.keeps.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Prescription Skincare ----------------------------------------------
  {
    slug: 'curology',
    name: 'Curology',
    brand: 'Curology',
    category: 'skincare',
    tagline: 'Custom prescription formula at a low entry price',
    description:
      'Curology pairs you with a licensed provider who prescribes a personalized cream — typically combining tretinoin with ingredients like niacinamide or clindamycin — for acne and anti-aging, shipped monthly.',
    priceDisplay: '~$20–$40/mo',
    priceNote: 'Includes custom formula + provider oversight. Estimate — verify on site.',
    fdaStatus: 'Rx · compounded prescription',
    prescriptionRequired: true,
    bestFor: 'Custom tretinoin formulas on a budget',
    keyFeatures: ['Personalized Rx formula', 'Tretinoin + actives', 'Provider messaging', 'Monthly delivery'],
    pros: ['Low entry price', 'Genuinely personalized', 'Easy provider contact'],
    cons: ['Subscription auto-renews', 'Formula tweaks take time', 'Not a replacement for complex derm care'],
    url: 'https://curology.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'apostrophe',
    name: 'Apostrophe',
    brand: 'Apostrophe',
    category: 'skincare',
    tagline: 'Dermatology-provider-backed prescription skincare',
    description:
      'Apostrophe connects you with dermatology providers who prescribe tretinoin and other prescription treatments for acne, anti-aging, and rosacea, with a broad formulary and oral options.',
    priceDisplay: '~$25–$50/mo',
    priceNote: 'Visit fee may apply; plus medication. Estimate — verify on site.',
    fdaStatus: 'Rx · prescription',
    prescriptionRequired: true,
    bestFor: 'Provider-led care with a broad formulary',
    keyFeatures: ['Dermatology providers', 'Topical & oral options', 'Acne, aging, rosacea', 'Photo-based visits'],
    pros: ['Strong provider involvement', 'Wider treatment options', 'Good for multiple concerns'],
    cons: ['Can cost more than Curology', 'Separate visit fee model', 'Med cost on top'],
    url: 'https://www.apostrophe.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'musely',
    name: 'Musely (The FaceRx)',
    brand: 'Musely',
    category: 'skincare',
    tagline: 'Targeted Rx for melasma & anti-aging',
    description:
      'Musely’s FaceRx prescribes custom prescription "night creams" targeting concerns like melasma, hyperpigmentation, and anti-aging, formulated by licensed providers and shipped to you.',
    priceDisplay: '~$30–$50/mo',
    priceNote: 'Varies by formula and plan. Estimate — verify on site.',
    fdaStatus: 'Rx · compounded prescription',
    prescriptionRequired: true,
    bestFor: 'Melasma and pigmentation concerns',
    keyFeatures: ['Targeted Rx night creams', 'Melasma & anti-aging focus', 'Custom formulations', 'Provider review'],
    pros: ['Strong for pigmentation issues', 'Potent custom formulas', 'Specific problem-solving'],
    cons: ['Potent formulas need careful use', 'Pricier per month', 'Subscription model'],
    url: 'https://www.musely.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Menopause & HRT -----------------------------------------------------
  {
    slug: 'midi-health',
    name: 'Midi Health',
    brand: 'Midi Health',
    category: 'womens-health',
    tagline: 'Clinician-led midlife care that takes insurance',
    description:
      'Midi Health offers virtual care with menopause-trained clinicians for perimenopause and menopause — including FDA-approved hormone therapy and non-hormonal options — and accepts many insurance plans.',
    priceDisplay: 'Insurance or ~$0–$75/visit',
    priceNote: 'Often billed to insurance; cash rates vary. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved hormones',
    prescriptionRequired: true,
    bestFor: 'Comprehensive, insurance-friendly menopause care',
    keyFeatures: ['Menopause-trained clinicians', 'HRT & non-hormonal options', 'Accepts many insurers', 'Labs & follow-up'],
    pros: ['Broad, individualized care', 'Insurance accepted', 'Clinician continuity'],
    cons: ['Insurance handling adds steps', 'Availability varies by state/plan', 'Not a quick one-click model'],
    url: 'https://www.joinmidi.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'alloy',
    name: 'Alloy',
    brand: 'Alloy',
    category: 'womens-health',
    tagline: 'Direct-to-consumer menopause HRT, mailed',
    description:
      'Alloy is a menopause-focused DTC service that prescribes FDA-approved hormone therapy after an online evaluation and ships medications to your door, with menopause-specialist clinicians.',
    priceDisplay: '~$25–$50/mo + meds',
    priceNote: 'Membership/visit plus medication. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved hormones',
    prescriptionRequired: true,
    bestFor: 'Streamlined, mailed HRT',
    keyFeatures: ['Menopause-specialist clinicians', 'FDA-approved HRT', 'Mailed medications', 'Ongoing messaging'],
    pros: ['Fast, convenient HRT access', 'Menopause focus', 'Direct shipping'],
    cons: ['Cash-pay (no insurance)', 'Med cost on top', 'Narrower than full primary care'],
    url: 'https://www.myalloy.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'evernow',
    name: 'Evernow',
    brand: 'Evernow',
    category: 'womens-health',
    tagline: 'Menopause telehealth with treatment matching',
    description:
      'Evernow provides menopause-focused telehealth, evaluating symptoms online and prescribing hormonal and non-hormonal treatments matched to your needs, with mailed medications and clinician messaging.',
    priceDisplay: '~$30–$70/mo',
    priceNote: 'Subscription; medication may be extra. Estimate — verify on site.',
    fdaStatus: 'Rx · FDA-approved options',
    prescriptionRequired: true,
    bestFor: 'Guided menopause treatment matching',
    keyFeatures: ['Symptom-based matching', 'Hormonal & non-hormonal Rx', 'Mailed medications', 'Clinician messaging'],
    pros: ['Tailored treatment matching', 'Menopause specialization', 'Convenient delivery'],
    cons: ['Cash-pay subscription', 'Med cost may be separate', 'State availability varies'],
    url: 'https://www.evernow.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },

  // --- Online Therapy & Psychiatry ----------------------------------------
  {
    slug: 'betterhelp',
    name: 'BetterHelp',
    brand: 'BetterHelp',
    category: 'mental-health',
    tagline: 'Largest online therapy network (no medication)',
    description:
      'BetterHelp is the largest online therapy platform, matching you with a licensed therapist for messaging plus weekly live video, phone, or chat sessions. It’s therapy only — no psychiatry or medication.',
    priceDisplay: '~$65–$100/wk',
    priceNote: 'Billed every 4 weeks; financial aid available. Estimate — verify on site.',
    fdaStatus: 'Therapy service · not medication',
    prescriptionRequired: false,
    bestFor: 'Flexible talk therapy at scale',
    keyFeatures: ['Licensed therapists', 'Messaging + live sessions', 'Easy therapist switching', 'Financial aid options'],
    pros: ['Huge therapist network', 'Flexible communication modes', 'Quick to start'],
    cons: ['No medication/psychiatry', 'Generally not insurance-billed', 'Weekly cost adds up'],
    url: 'https://www.betterhelp.com',
    referralType: 'direct_link',
    featured: true,
    lastVerified: '2026-06-13',
  },
  {
    slug: 'talkspace',
    name: 'Talkspace',
    brand: 'Talkspace',
    category: 'mental-health',
    tagline: 'Therapy + psychiatry, widely insured',
    description:
      'Talkspace offers both therapy and psychiatry (with medication management) and is covered by many insurance plans and employers, making it a strong pick when you want medication options or insurance billing.',
    priceDisplay: 'Insurance or ~$70–$100/wk',
    priceNote: 'Psychiatry priced separately; often insurance-covered. Estimate — verify on site.',
    fdaStatus: 'Therapy + psychiatry service',
    prescriptionRequired: false,
    bestFor: 'Insurance coverage and/or medication options',
    keyFeatures: ['Therapy & psychiatry', 'Accepts many insurers', 'Messaging + live sessions', 'Medication management'],
    pros: ['Wide insurance coverage', 'Adds psychiatry/meds', 'Employer partnerships'],
    cons: ['Psychiatry costs extra', 'Messaging-heavy by default', 'Plan tiers can confuse'],
    url: 'https://www.talkspace.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
  {
    slug: 'brightside',
    name: 'Brightside Health',
    brand: 'Brightside',
    category: 'mental-health',
    tagline: 'Structured therapy + medication for anxiety & depression',
    description:
      'Brightside specializes in depression and anxiety with a structured, measurement-based model offering therapy, psychiatry, and medication management, plus crisis-care programs. It accepts insurance in many states.',
    priceDisplay: '~$95–$350/mo',
    priceNote: 'Therapy, medication, or combined plans; insurance in many states. Estimate — verify on site.',
    fdaStatus: 'Therapy + psychiatry service',
    prescriptionRequired: true,
    bestFor: 'Depression/anxiety needing meds + therapy',
    keyFeatures: ['Therapy + psychiatry', 'Measurement-based care', 'Medication management', 'Insurance in many states'],
    pros: ['Evidence-based, structured', 'Combined therapy + meds', 'Focused on anxiety/depression'],
    cons: ['Narrower condition focus', 'Combined plans cost more', 'Controlled-substance limits apply'],
    url: 'https://www.brightside.com',
    referralType: 'direct_link',
    lastVerified: '2026-06-13',
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
export function getDtcCategory(slug: DtcCategorySlug): CompareCategory {
  return DTC_CATEGORIES[slug];
}

export function getDtcProductsByCategory(slug: DtcCategorySlug): CompareProduct[] {
  return DTC_PRODUCTS.filter((p) => p.category === slug).sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );
}

export function getAllDtcCategories(): CompareCategory[] {
  return Object.values(DTC_CATEGORIES);
}
