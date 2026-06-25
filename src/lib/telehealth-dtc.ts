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
    relatedLinks: [
      {
        href: '/guides/online-ed-treatment',
        icon: '📖',
        title: 'How to Get ED Treatment Online',
        desc: 'The FDA-approved options, how telehealth works, costs, and safety',
      },
    ],
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
    relatedLinks: [
      {
        href: '/guides/tretinoin-online',
        icon: '📖',
        title: 'Tretinoin Online: How to Get It',
        desc: 'Why it is prescription-only, what to expect, and how online derm works',
      },
    ],
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
    relatedLinks: [
      {
        href: '/guides/online-menopause-treatment',
        icon: '📖',
        title: 'Online Menopause & HRT: Guide',
        desc: 'Symptoms, hormone vs non-hormonal options, safety, and how online care works',
      },
    ],
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
    relatedLinks: [
      {
        href: '/guides/betterhelp-vs-talkspace',
        icon: '📖',
        title: 'BetterHelp vs Talkspace vs Brightside',
        desc: 'Therapy vs psychiatry, insurance, format, and pricing compared',
      },
    ],
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
  {"slug": "brightside-health", "name": "Brightside Health", "brand": "Brightside Health", "category": "mental-health", "tagline": "Anxiety and depression management", "description": "Telehealth provider focused on anxiety, depression, and related conditions, combining psychiatry, medication management, and therapy under one subscription. Available in all 50 states and accepts major insurance plus self-pay.", "priceDisplay": "$95/mo psychiatry; $349/mo combined", "prescriptionRequired": true, "bestFor": "Anxiety and depression management, Want psychiatry plus therapy", "keyFeatures": ["Psychiatry and medication management", "Individual therapy", "Combined psychiatry plus therapy", "Anxiety and depression care", "Crisis/suicide prevention program"], "pros": ["Affordable self-pay psychiatry ($95/mo)", "All 50 states", "Accepts some Medicare and Medicaid", "Combined medication plus therapy plans"], "cons": ["Focused on anxiety/depression (narrower scope)", "Medication cost is separate", "Therapy-only plan is expensive", "Not a fit for complex/controlled-substance needs"], "url": "https://www.brightside.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Self-pay: psychiatry-only $95/month, therapy-only $299/month (4 sessions), psychiatry plus therapy $349/month. Additional therapy sessions ~$59 each. Medication billed separately. HSA/FSA accepted; in-network with many insurers including some Medicare/Medicaid."},
  {"slug": "cerebral", "name": "Cerebral", "brand": "Cerebral", "category": "mental-health", "tagline": "Budget medication management", "description": "Online mental health platform offering medication management, therapy, and combined plans for conditions like anxiety, depression, and insomnia. Subscription model with separate medication costs through its own pharmacy.", "priceDisplay": "$180/3 mo (medication plan)", "prescriptionRequired": true, "bestFor": "Budget medication management, Common conditions (anxiety, depression, insomnia)", "keyFeatures": ["Medication management", "Individual therapy", "Combined medication plus therapy", "Anxiety, depression, and insomnia care", "Unlimited care-team messaging"], "pros": ["Low-cost medication plan (~$60/mo)", "In-house pharmacy can reduce drug cost", "Therapy and combined plans available", "FSA/HSA accepted"], "cons": ["Not available in every state", "Medication cost separate from plan", "Past regulatory/compliance scrutiny", "Limited controlled-substance prescribing"], "url": "https://cerebral.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Medication plan $180 every 3 months (about $60/month), medication billed separately. Therapy $175/session or $795/3 months. Medication plus therapy $365/month or $885/3 months. FSA/HSA accepted; insured copay averages ~$30."},
  {"slug": "mindbloom", "name": "Mindbloom", "brand": "Mindbloom", "category": "mental-health", "tagline": "Treatment-resistant depression", "description": "At-home ketamine therapy provider for depression and anxiety, delivering clinician-prescribed sublingual or injectable ketamine with guide coaching and integration support. Programs are sold in multi-session packages.", "priceDisplay": "$165-215/session", "prescriptionRequired": true, "bestFor": "Treatment-resistant depression, Anxiety", "keyFeatures": ["At-home ketamine therapy", "Clinician consultations", "Guide coaching and integration", "Sublingual or injectable ketamine", "Group integration circles"], "pros": ["Most established at-home ketamine brand", "Includes coaching and integration", "Cheaper than in-person IV clinics", "Superbills for possible reimbursement"], "cons": ["Expensive upfront (multi-session packages)", "No insurance accepted", "Controlled substance, at-home safety considerations", "Not available in every state"], "url": "https://www.mindbloom.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "New-client packages: 6 sessions $1,290 ($215/session), 12 sessions $2,220 ($185/session), 18 sessions $2,970 ($165/session). Returning clients as low as $129/session. Does not accept insurance; superbills provided for possible out-of-network reimbursement; HSA/FSA may apply."},
  {"slug": "joyous", "name": "Joyous", "brand": "Joyous", "category": "mental-health", "tagline": "Budget ketamine option", "description": "Very-low-dose (microdose) oral ketamine program for depression and anxiety, designed so patients stay fully coherent rather than experiencing high-dose psychedelic sessions. Flat monthly subscription with daily check-ins.", "priceDisplay": "$129/month", "prescriptionRequired": true, "bestFor": "Budget ketamine option, Want microdose, not high-dose sessions", "keyFeatures": ["Low-dose oral ketamine treatment", "Provider consultations and check-ins", "Personalized dosage plans", "Medication delivery", "Care and nurse team access"], "pros": ["Cheapest ketamine option ($129/mo flat)", "No high-dose psychedelic experience", "Daily monitoring and care team", "HSA/FSA accepted"], "cons": ["Only 29 states", "Microdose evidence base is thinner", "No insurance accepted", "Controlled substance, self-administered at home"], "url": "https://www.joyous.team", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "$129/month with a 3-month commitment, or $159/month flexible (no commitment). Includes medication, provider appointments, and care-team access. Insurance not accepted; HSA/FSA funds accepted."},
  {"slug": "rula", "name": "Rula", "brand": "Rula", "category": "mental-health", "tagline": "Want to use insurance", "description": "Therapy and psychiatry marketplace (formerly Path) connecting you with licensed providers in all 50 states, with a strong focus on using your insurance for low copays. Transparent self-pay cash rates for the uninsured.", "priceDisplay": "$150/session (cash therapy)", "prescriptionRequired": true, "bestFor": "Want to use insurance, Prefer per-session over subscription", "keyFeatures": ["Individual therapy", "Couples and family therapy", "Psychiatry and medication management", "In-network insurance billing", "Provider matching"], "pros": ["All 50 states", "100+ insurance plans accepted", "Transparent cash rates", "No subscription fee (pay per session)"], "cons": ["Cash therapy ($150) pricier than subscription platforms", "Best value requires in-network insurance", "Provider availability varies by state", "Less hand-holding than concierge models"], "url": "https://www.rula.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Self-pay: $150/session individual therapy, $165/session couples/family. Psychiatry self-pay: $225 initial 60-min intake, $175 per 30-min follow-up. In-network average copay ~$15. HSA/FSA accepted; interest-free payment plans on request."},
  {"slug": "grow-therapy", "name": "Grow Therapy", "brand": "Grow Therapy", "category": "mental-health", "tagline": "Want to filter by cash price", "description": "Nationwide therapy and psychiatry marketplace that helps you find providers who accept your insurance or offer transparent cash-pay rates. Pay-per-session model with no subscription fee.", "priceDisplay": "$75-200/session (self-pay)", "prescriptionRequired": true, "bestFor": "Want to filter by cash price, Want to use insurance", "keyFeatures": ["Individual therapy", "Couples therapy", "Psychiatry and medication management", "In-network insurance billing", "Sliding-scale and self-pay matching"], "pros": ["All 50 states", "Filter providers by cash-pay rate", "Accepts many insurance plans", "No subscription fee"], "cons": ["Prices vary widely by provider", "Quality depends on individual therapist", "Self-pay can exceed $200/session", "Marketplace, not a managed program"], "url": "https://growtherapy.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Therapists set their own rates; self-pay typically $75-200/session, prescribers $80-250+. No subscription fee — pay per session. Sliding-scale options available. HSA/FSA accepted; accepts many insurance plans."},
  {"slug": "alma", "name": "Alma", "brand": "Alma", "category": "mental-health", "tagline": "Want to choose a specific therapist", "description": "Therapist-matching platform with 20,000+ providers across all 50 states, offering free 15-minute consultations before you commit. Helps you use insurance or pay out of pocket, including sliding-scale options.", "priceDisplay": "$130-380/session (self-pay)", "prescriptionRequired": false, "bestFor": "Want to choose a specific therapist, Free consultation before committing", "keyFeatures": ["Therapist directory and matching", "Individual therapy", "Couples therapy", "Free 15-minute consultations", "In-network insurance billing"], "pros": ["20,000+ providers, all 50 states", "Free 15-minute consultations", "In-network with major carriers", "Sliding-scale and HSA/FSA/EAP options"], "cons": ["Self-pay rates run high ($130-380)", "Directory, not a managed program", "No published flat self-pay price", "Provider quality varies"], "url": "https://helloalma.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Out-of-pocket session cost ranges $130-380 depending on provider; many offer sliding scales for out-of-network care. In-network with major carriers (Aetna, BCBS, Cigna, Oxford, UnitedHealthcare). HSA/FSA and EAP accepted."},
  {"slug": "sesame", "name": "Sesame", "brand": "Sesame", "category": "mental-health", "tagline": "Pay-as-you-go visits", "description": "Cash-pay telehealth marketplace where providers set transparent, upfront prices for therapy, psychiatry, and medication refills. Does not bill insurance, keeping per-visit prices low. Costco partnership offers member rates.", "priceDisplay": "$79/visit (mental health)", "prescriptionRequired": true, "bestFor": "Pay-as-you-go visits, Transparent upfront pricing", "keyFeatures": ["Online therapy", "Couples therapy", "Psychiatry consultations", "Medication refills", "In-person and virtual visits"], "pros": ["Upfront cash prices, no surprises", "Medication visits as low as $29", "No subscription required", "Costco member pricing"], "cons": ["Does not bill insurance", "Provider quality varies", "Not a continuous managed program", "Prices set per provider"], "url": "https://sesamecare.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Provider-set cash prices; mental health visits commonly start around $79, with medication management visits as low as $29. Mental Health Rx subscription $79/month for ongoing access. Does not accept insurance. Optional Sesame Plus membership ($10.99/mo or $99/yr) for further discounts."},
  {"slug": "hims-hers-mental-health", "name": "Hims / Hers Mental Health", "brand": "Hims / Hers Mental Health", "category": "mental-health", "tagline": "Anxiety and depression medication", "description": "Direct-to-consumer telehealth platform offering online psychiatry and medication management for anxiety and depression, with optional add-on therapy. Cash-pay, no insurance required, available nationwide.", "priceDisplay": "From $49/month", "prescriptionRequired": true, "bestFor": "Anxiety and depression medication, Want a recognizable brand", "keyFeatures": ["Online psychiatry", "Medication management", "Anxiety and depression treatment", "Add-on counseling/therapy", "Provider consultations"], "pros": ["Inexpensive entry price (from $49/mo)", "Recognizable, well-funded brand", "Nationwide", "Optional therapy add-on"], "cons": ["No controlled substances prescribed", "Does not treat ADHD, bipolar, schizophrenia, or OCD", "Medication and therapy priced separately", "Narrow condition scope"], "url": "https://www.hims.com/mental-health", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Mental health care starts around $49/month (often billed ~$147 every 3 months); medication management around $85/month, optional counseling ~$99/session. No insurance required. Does not prescribe controlled substances; does not treat ADHD, bipolar, schizophrenia, or OCD."},
  {"slug": "klarity-health", "name": "Klarity Health", "brand": "Klarity Health", "category": "mental-health", "tagline": "ADHD diagnosis and treatment", "description": "Healthcare marketplace connecting you with 2,000+ independent licensed providers for online psychiatry, ADHD, anxiety, depression, and therapy across all 50 states. Both cash-pay and insurance accepted, with provider-set pricing.", "priceDisplay": "Self-pay from $49", "prescriptionRequired": true, "bestFor": "ADHD diagnosis and treatment, Same-day access", "keyFeatures": ["Online psychiatry", "ADHD diagnosis and treatment", "Anxiety and depression care", "Therapy", "Medication management"], "pros": ["All 50 states, 2,000+ providers", "Strong ADHD focus", "Same-day appointments", "Cash-pay and insurance options"], "cons": ["Pricing and insurance vary by provider", "Marketplace, not a managed program", "Quality depends on individual clinician", "Controlled-substance prescribing varies by provider"], "url": "https://www.helloklarity.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Provider-set pricing; self-pay starts around $49, with some 60-min therapy sessions ~$129. Accepts major insurance and cash-pay; no subscription fee. HSA/FSA accepted. Klarity is a marketplace and does not bill insurance directly for all providers."},
  {"slug": "nurx", "name": "Nurx", "brand": "Nurx", "category": "skincare", "tagline": "People with commercial insurance", "description": "Telehealth platform with a dermatology line covering acne, anti-aging, melasma, rosacea, and eyelash growth, prescribed by its medical team after an online consult. One consultation fee covers a full year of care, and Nurx can bill insurance for medications or offer transparent cash pricing.", "priceDisplay": "$40/yr consult + from $15/mo meds", "prescriptionRequired": true, "bestFor": "People with commercial insurance, Hormonal acne (spironolactone)", "keyFeatures": ["Acne treatment (topical & oral)", "Anti-aging / wrinkle treatment", "Melasma & dark spot treatment", "Rosacea treatment", "Eyelash growth"], "pros": ["One $40 fee covers a full year of care", "Bills commercial insurance for medications", "Offers oral prescriptions, not just topicals", "Transparent cash pricing if uninsured"], "cons": ["Excludes Medicare, Medicaid, and Tricare", "Not available in every state", "$3 monthly support fee on order months"], "url": "https://www.nurx.com/skincare-treatments/", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "$40 medical consultation covers one year of care. Cash medication pricing from $25/mo for topicals and $15-30/mo for orals; as low as $0-15/mo with insurance. A flat $3 monthly support fee applies in months an order is processed. Does not accept Medicare, Medicaid, or Tricare."},
  {"slug": "dermatica", "name": "Dermatica", "brand": "Dermatica", "category": "skincare", "tagline": "Hyperpigmentation & melasma", "description": "Prescription skincare subscription, originally UK-based and now operating in the US, where a dermatology team builds a custom formula from actives like tretinoin, azelaic acid, and hydroquinone. Covers acne, hyperpigmentation, melasma, rosacea, and aging, with free dermatology check-ins included in the plan.", "priceDisplay": "$29.95/mo", "prescriptionRequired": true, "bestFor": "Hyperpigmentation & melasma, People who want included derm check-ins", "keyFeatures": ["Custom prescription formula", "Acne treatment", "Hyperpigmentation & melasma", "Anti-aging", "Rosacea"], "pros": ["Free first month behind a $4.99 prescribing fee", "Free dermatology check-ins included", "Strong formulation team", "Treats a broad range of concerns"], "cons": ["Higher entry price than Curology", "Bottles ship on a ~56-day cycle, not monthly", "Async model, no live visit"], "url": "https://www.dermatica.com", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "Standard plan $29.95/mo (one bottle every ~56 days, two bottles per cycle). 12-month plan lowers the effective rate to about $22.42 per bottle. New users start with a $4.99 prescribing fee for the first month."},
  {"slug": "honeydew", "name": "Honeydew", "brand": "Honeydew", "category": "skincare", "tagline": "Severe or treatment-resistant acne", "description": "Online dermatology membership focused on acne, including hard-to-get treatments like full- and low-dose Accutane (isotretinoin), with board-certified dermatologists and unlimited follow-ups. The membership covers provider access, iPledge coordination, and lab coordination; medications are billed separately and can run through insurance.", "priceDisplay": "from $25/mo", "prescriptionRequired": true, "bestFor": "Severe or treatment-resistant acne, Accutane / isotretinoin candidates", "keyFeatures": ["Acne treatment", "Full & low-dose Accutane (isotretinoin)", "Spironolactone", "Tretinoin", "Custom compounds"], "pros": ["Prescribes Accutane online with iPledge handling", "Board-certified dermatologists", "Unlimited follow-ups included", "Capped cash pricing on isotretinoin"], "cons": ["Acne-focused, not for general anti-aging", "Medication cost is separate from membership", "Accutane requires ongoing lab monitoring"], "url": "https://www.honeydew.com", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "Membership from $25/mo on an annual plan; Accutane track from $50/mo. Membership covers provider access and coordination only; medications are prescribed to outside pharmacies and billed separately (cash isotretinoin capped at ~$30/box, low-dose; as low as $0 with insurance)."},
  {"slug": "hims-hers", "name": "Hims & Hers", "brand": "Hims & Hers", "category": "skincare", "tagline": "Routine acne & anti-aging", "description": "National telehealth company whose skincare line pairs you with a licensed provider who prescribes a custom topical cream (tretinoin plus actives like azelaic acid and niacinamide) for acne and anti-aging. Care is asynchronous, prescriptions ship from partner pharmacies, and the service is available in all 50 states plus DC.", "priceDisplay": "from $29/mo", "prescriptionRequired": true, "bestFor": "Routine acne & anti-aging, People who want a single brand for multiple needs", "keyFeatures": ["Custom prescription acne cream", "Custom anti-aging cream", "OTC serums & wrinkle creams", "Async provider consult", "Discreet pharmacy delivery"], "pros": ["Available in all 50 states plus DC and PR", "Large licensed provider network", "Competitive $29 starting price", "Discreet pharmacy delivery"], "cons": ["Async only, no live derm visit", "Generalist brand, not a derm specialist", "Final price climbs with formulation"], "url": "https://www.hims.com/skin-care", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "Custom acne cream and anti-aging cream start at $29 each; final price varies with the prescribed formulation. OTC items (vitamin C serum, wrinkle cream) priced separately."},
  {"slug": "agency", "name": "Agency", "brand": "Agency", "category": "skincare", "tagline": "Anti-aging & fine lines", "description": "Custom prescription skincare service (also branded withAgency) focused on anti-aging and hyperpigmentation, where a licensed dermatology provider (NP, PA, MD, or DO) formulates a personalized cream from actives like tretinoin, azelaic acid, and tranexamic acid. Formulas ship on a recurring schedule with free cancellation.", "priceDisplay": "$40/mo", "prescriptionRequired": true, "bestFor": "Anti-aging & fine lines, Hyperpigmentation / dark spots", "keyFeatures": ["Custom anti-aging Future Formula", "Dark Spot / hyperpigmentation Formula", "Custom Eye Formula", "OTC cleanser & moisturizer", "Provider-formulated actives (tretinoin, tranexamic acid, niacinamide)"], "pros": ["Specialized anti-aging and pigmentation formulas", "Dedicated custom eye cream", "Licensed providers (NP/PA/MD/DO) per state", "50% off first month, free cancellation"], "cons": ["Pricier than acne-first competitors", "Billed every 2 months, not monthly", "Less suited to active acne"], "url": "https://withagency.com", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "Future Formula $80 billed every 2 months (about $40/mo, shipping included). Eye/Dark Spot Formula about $35/mo. Bundle of two formulas about $65/mo. First month 50% off for new subscribers."},
  {"slug": "skymd", "name": "SkyMD", "brand": "SkyMD", "category": "skincare", "tagline": "Needing a diagnosis, not just a cream", "description": "Virtual dermatology clinic where board-certified dermatologists review photo uploads and secure chat to diagnose and prescribe for a wide range of skin conditions, typically responding in under 24 hours. SkyMD treats patients in all 50 states, accepts major insurance, and also offers urgent care, pediatrics, and behavioral health.", "priceDisplay": "Cash visit fee or insurance copay", "prescriptionRequired": true, "bestFor": "Needing a diagnosis, not just a cream, People who want to use insurance", "keyFeatures": ["General dermatology consults", "Photo-based diagnosis", "Prescription treatment", "Cosmetic consultations", "Urgent care"], "pros": ["Board-certified dermatologists across all 50 states", "Treats a wide range of skin conditions", "Sub-24-hour response", "Accepts major insurance"], "cons": ["No published flat cash price", "Visit-based, not a subscription", "Cash cost depends on the encounter"], "url": "https://www.skymd.com", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "SkyMD accepts major health insurance carriers and offers self-pay visits; the company does not publish a single flat price on its homepage, and cost depends on insurance versus cash pay. Verify the current visit fee at checkout."},
  {"slug": "mdacne", "name": "MDacne", "brand": "MDacne", "category": "skincare", "tagline": "Mild acne", "description": "Dermatologist-formulated acne app that uses an AI selfie analysis to build a personalized over-the-counter treatment kit (cleanser, treatment cream, moisturizer) with unlimited in-app dermatologist chat support. It is a customized OTC system rather than a prescription service, with progress tracking inside the app.", "priceDisplay": "$29.95/mo", "prescriptionRequired": true, "bestFor": "Mild acne, Teens and prescription-averse users", "keyFeatures": ["AI selfie skin analysis", "Custom OTC acne kit (cleanser, treatment, moisturizer)", "In-app dermatologist chat", "Progress tracking", "Formulation fine-tuning"], "pros": ["Free 1-month trial (shipping only)", "AI progress tracking in-app", "Dermatologist-formulated kits", "No prescription or consult barrier"], "cons": ["OTC only, no prescription medications", "No physician diagnosis or oversight of disease", "Not for moderate-to-severe acne"], "url": "https://www.mdacne.com", "referralType": "direct_link", "lastVerified": "2026-06-25", "priceNote": "Monthly subscription $29.95/mo; quarterly $59.95/quarter. Free 1-month trial for the cost of shipping (from $9). Defaults to a bi-monthly refill cadence after the trial."},
  {"slug": "hims-mens-health", "name": "Hims", "brand": "Hims", "category": "mens-health", "tagline": "One platform for multiple concerns", "description": "Hims is the most recognizable men's telehealth brand, treating erectile dysfunction, hair loss, testosterone support, weight loss, and mental health entirely online. One subscription bundles the provider visit, medication, and ongoing messaging, with no insurance accepted (FSA/HSA via reimbursement).", "priceDisplay": "ED from $2/dose, hair from $20/mo", "prescriptionRequired": true, "bestFor": "One platform for multiple concerns, Mainstream, well-funded brand", "keyFeatures": ["Erectile dysfunction (sildenafil, tadalafil, chewables)", "Hair loss (finasteride, minoxidil, bundles)", "Testosterone support", "Premature ejaculation", "Weight loss / GLP-1"], "pros": ["Broadest men's-health menu", "Recognizable, established brand", "Strong app and fast shipping", "Bundled visit + meds + messaging"], "cons": ["Headline prices are loss-leaders", "No insurance accepted", "Costs climb with bundles and renewals", "Longest-commitment pricing for best rates"], "url": "https://www.hims.com/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Headline ED 'from $2/dose' and hair 'from $20/mo' apply to the cheapest single generic on the longest commitment. Hair Kit bundles run $44-49/mo billed quarterly; Complete bundles $50-70/mo. Testosterone support packaged at $99/mo on a 10-month plan ($990 upfront). Typical multi-product cost $40-100/mo."},
  {"slug": "roman-mens-health", "name": "Ro (Roman)", "brand": "Ro (Roman)", "category": "mens-health", "tagline": "Free consultation and fast shipping", "description": "Ro, which powers the Roman men's-health brand, treats erectile dysfunction, premature ejaculation, hair loss, and testosterone support with free online evaluations and free 2-day shipping. It is a large, established direct-to-consumer telehealth company serving patients nationwide.", "priceDisplay": "Up to 95% off with generics", "prescriptionRequired": true, "bestFor": "Free consultation and fast shipping, Generic ED value", "keyFeatures": ["Erectile dysfunction (sildenafil, tadalafil, brand Viagra/Cialis)", "Premature ejaculation", "Hair loss (finasteride, minoxidil)", "Testosterone support", "Genital herpes / cold sores"], "pros": ["Free online evaluation", "Free 2-day discreet shipping", "3M+ members treated", "Both generic and brand-name ED"], "cons": ["No insurance accepted", "Some products compounded (not FDA-approved)", "Brand-name meds expensive", "Per-tablet pricing varies by med"], "url": "https://ro.co/erectile-dysfunction/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Free online evaluation and unlimited follow-ups. Generic ED priced per tablet; brand-name options available at higher cost. Some products (Ro Sparks, Daily Rise Gummies) are compounded and not FDA-approved. No insurance accepted; documentation provided for possible reimbursement."},
  {"slug": "rex-md", "name": "Rex MD", "brand": "Rex MD", "category": "mens-health", "tagline": "All-50-state availability", "description": "Rex MD bills itself as the authority in men's telehealth, treating erectile dysfunction, hair loss, weight management, testosterone, sleep, premature ejaculation, and more across all 50 states. A free online visit is included with the first monthly order.", "priceDisplay": "ED from $2/dose; finasteride ~$18/mo", "prescriptionRequired": true, "bestFor": "All-50-state availability, Aggressive generic ED pricing", "keyFeatures": ["Erectile dysfunction (generic and brand)", "Hair loss (finasteride)", "Weight management / GLP-1", "Testosterone therapy", "Sleep / insomnia"], "pros": ["Available in all 50 states", "Generic ED from $2/dose", "Free visit with first order", "Broad condition menu"], "cons": ["No insurance accepted", "Best prices need longer commitments", "Hair-loss pricing not shown upfront", "Costs add across multiple conditions"], "url": "https://rexmd.com/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Generic ED treatments advertised as low as $2/dose; ED subscription plans start around $36/mo. Finasteride for hair loss as low as ~$18/mo. Free online visit with the first monthly order. No insurance accepted."},
  {"slug": "hone-health-mens", "name": "Hone Health", "brand": "Hone Health", "category": "mens-health", "tagline": "Data-driven optimization", "description": "Hone Health is a telehealth clinic built around recurring biomarker testing and physician-guided men's optimization, spanning testosterone therapy, erectile dysfunction, weight loss, hair loss, and longevity. Care starts with a 50+ biomarker blood test and continues through membership tiers.", "priceDisplay": "$135-155/mo membership + $65 lab", "prescriptionRequired": true, "bestFor": "Data-driven optimization, Recurring biomarker monitoring", "keyFeatures": ["Testosterone replacement (injection, cream, troche)", "Erectile dysfunction (tadalafil)", "Weight loss medications", "Hair loss (finasteride, minoxidil)", "Longevity (NAD+, sermorelin)"], "pros": ["50+ biomarker testing in membership", "Physician-guided ongoing care", "Multiple TRT formats (injection, cream, troche)", "Low $65 entry lab test"], "cons": ["Membership separate from medication cost", "Total monthly cost can exceed $170-190", "Premium tier needed for metabolic care", "No insurance accepted directly"], "url": "https://honehealth.com/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Initial advanced biomarker test and physician consult $65. Plus membership $135/mo (hormone-focused); Premium $155/mo (adds metabolic/weight management). Medications billed separately (e.g., testosterone vial ~$40-100/mo). No insurance accepted, but Hone files claims on your behalf."},
  {"slug": "maximus-mens-health", "name": "Maximus", "brand": "Maximus", "category": "mens-health", "tagline": "Fertility preservation", "description": "Maximus is a men's optimization telehealth service best known for enclomiphene-based testosterone protocols that raise the body's own production while preserving fertility, alongside ED, weight-loss, and hair-loss offerings. It charges no membership fee and sells each protocol a-la-carte with at-home labs and physician oversight.", "priceDisplay": "Testosterone from $99.99/mo; ED from $44.99/mo", "prescriptionRequired": true, "bestFor": "Fertility preservation, Younger men with intact HPG axis", "keyFeatures": ["Enclomiphene (King Protocol)", "Injectable and oral testosterone protocols", "ED prescriptions (sildenafil, tadalafil, vardenafil)", "Weight loss / GLP-1", "Hair loss"], "pros": ["Enclomiphene preserves fertility", "No membership fee (a-la-carte)", "At-home labs and physician oversight", "ED, weight, and hair add-ons"], "cons": ["Enclomiphene not for everyone (depends on HPG response)", "Not available in AK or DC", "Best price requires 12-month commitment", "Labs in months 1-2 are an added cost"], "url": "https://www.maximustribe.com/testosterone", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Testosterone protocols start at $99.99/mo (King Protocol enclomiphene $199.99/mo, dropping to ~$99.99/mo on an annual plan). ED prescriptions from $44.99/mo. At-home testosterone test $99.99 with free shipping; enclomiphene requires labs in months 1 and 2. No membership fee; a-la-carte pricing."},
  {"slug": "rugiet", "name": "Rugiet", "brand": "Rugiet", "category": "mens-health", "tagline": "Fast-acting sublingual ED", "description": "Rugiet is a men's performance-medicine telehealth platform known for its sublingual 3-in-1 ED troche (Rugiet Ready) plus chewable and standard ED formats, alongside hair loss, weight loss, low testosterone, and sleep. Prescriptions are filled by US pharmacies after a board-certified physician review.", "priceDisplay": "ED from ~$1.95-10/dose", "prescriptionRequired": true, "bestFor": "Fast-acting sublingual ED, Multi-ingredient combination formats", "keyFeatures": ["Rugiet Ready (3-in-1 sublingual: sildenafil + tadalafil + apomorphine)", "Rugiet Boost (chewable tadalafil + DHEA)", "Rugiet Go Long (tadalafil + paroxetine for PE)", "Hair regrowth (Grower)", "Weight loss"], "pros": ["Sublingual ~15-min onset", "3-in-1 and 2-in-1 combination options", "Board-certified physician review", "Covers ED, hair, weight, testosterone"], "cons": ["ED troches are compounded", "Per-pack adds consult and shipping fees", "Pricier per dose than basic generics", "No insurance accepted"], "url": "https://www.rugiet.com/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Rugiet Ready ~$10/dose; Boost from ~$2.70/dose; Go Long from ~$1.95/dose. Rugiet Ready packs (6 doses) run $80-140 by strength, plus a $20 doctor consultation and $10 shipping on per-pack orders; 30- and 90-day plans include free consult and shipping with discounts. ED troches are compounded."},
  {"slug": "lemonaid-mens-health", "name": "Lemonaid Health", "brand": "Lemonaid Health", "category": "mens-health", "tagline": "Transparent flat-fee pricing", "description": "Lemonaid Health is a San Francisco-based national telehealth company with a medical team licensed in all 50 states, offering men's services for erectile dysfunction, premature ejaculation, and hair loss. Care runs on a flat-fee consult plus prescription model without insurance hassles.", "priceDisplay": "$25 consult + $30/mo ED meds", "prescriptionRequired": true, "bestFor": "Transparent flat-fee pricing, All-50-state coverage", "keyFeatures": ["Erectile dysfunction (sildenafil, tadalafil, Cialis)", "Premature ejaculation", "Hair loss (finasteride, 2-in-1 topical)", "Online medical consultation"], "pros": ["Licensed in all 50 states", "Transparent $25 consult model", "Generic ED ~$30/mo supply", "Free discreet 2-3 day shipping"], "cons": ["Narrower men's menu than Hims/Ro", "No testosterone offering", "No insurance accepted", "Per-visit consult fee on top of meds"], "url": "https://www.lemonaidhealth.com/", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "ED: $25 medical consultation, then ~$30 for a month-long supply if appropriate (plans from ~$2/day). Hair loss first 3-month supply from ~$30; 2-in-1 topical from ~$65. Free discreet shipping in 2-3 business days. Operates outside traditional insurance."},
  {"slug": "strut-health-mens", "name": "Strut Health", "brand": "Strut Health", "category": "mens-health", "tagline": "Combination ED + low-T treatment", "description": "Strut Health is a US-licensed telehealth platform offering personalized, often compounded men's sexual-health treatments, including standard sildenafil and tadalafil plus multi-ingredient formulas and Strut Mojo (enclomiphene + tadalafil for low-T and ED together). Care is delivered online with US-licensed doctors.", "priceDisplay": "Generics from $30/mo; combos $49-79/mo", "prescriptionRequired": true, "bestFor": "Combination ED + low-T treatment, Personalized compounded formulas", "keyFeatures": ["Sildenafil", "Tadalafil", "Super Strut (4-in-1 dissolvable tablet)", "Strut Mojo (enclomiphene + tadalafil)", "ParoxetineMax (4-in-1 for PE)"], "pros": ["Strut Mojo combines enclomiphene + tadalafil", "Both generic and compounded options", "US-licensed doctors", "Multiple multi-in-1 formulas"], "cons": ["Many products are compounded (not FDA-approved)", "Insurance status not published", "Narrower brand awareness than Hims/Ro", "Sexual-health and skin/hair focus only"], "url": "https://www.struthealth.com/mens-sexual-health", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Sildenafil from $30/mo; tadalafil from $30 for 10 doses; Super Strut (4-in-1) from $79/mo for 10 tablets; Strut Mojo (enclomiphene + tadalafil) $79/mo for a 30-day supply; ParoxetineMax (4-in-1) from $49/mo. Mix of standard and compounded medications. No insurance information published."},
  {"slug": "hers-womens-health", "name": "Hers", "brand": "Hers", "category": "womens-health", "tagline": "One brand for multiple women's-health needs", "description": "Hers is the women's telehealth brand of NYSE-listed Hims & Hers, offering birth control, sexual health, and a 2025-launched perimenopause and menopause specialty entirely online. Licensed providers review an async intake and prescribe FDA-approved and compounded options shipped to your door.", "priceDisplay": "Birth control from $12/mo", "prescriptionRequired": true, "bestFor": "One brand for multiple women's-health needs, Low-cost birth control", "keyFeatures": ["Birth control (pill, patch, ring)", "Perimenopause and menopause HRT", "Estradiol pills and patches", "Estradiol vaginal cream", "Oral progesterone"], "pros": ["Birth control from $12/month", "Async intake, no appointment scheduling", "Free shipping to all 50 states", "Backed by public-company scale (Hims & Hers)"], "cons": ["Does not accept insurance", "HSA/FSA reportedly not accepted", "Menopause specialty not in all states", "Async model means limited live provider time"], "url": "https://www.forhers.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Birth control starts at $12/month. Menopause oral medications start at $79/month and patches from $134/month on a 12-month plan. Consultations run $28-$80 depending on service. Does not accept insurance; all out-of-pocket."},
  {"slug": "alloy-womens-health", "name": "Alloy", "brand": "Alloy", "category": "womens-health", "tagline": "FDA-approved HRT (no compounds)", "description": "Alloy is a cash-pay menopause telehealth platform whose clinicians hold Menopause Society Certified Practitioner credentials and prescribe FDA-approved finished HRT rather than compounds. Treatments span estradiol pills, patches, gel, and vaginal cream plus progesterone and testosterone.", "priceDisplay": "Estradiol patch $74.99/mo", "prescriptionRequired": true, "bestFor": "FDA-approved HRT (no compounds), Certified menopause practitioners", "keyFeatures": ["Menopause and perimenopause HRT", "Estradiol pill", "Estradiol patch", "Estradiol gel", "Estradiol vaginal cream"], "pros": ["Menopause Society Certified Practitioners", "FDA-approved finished HRT", "Estradiol patch from $74.99/month", "Free 3-month supply shipping"], "cons": ["Does not accept insurance", "Consultation fee to start (~$50)", "Menopause-focused (narrower than full women's health)", "Med cost on top of consult"], "url": "https://www.myalloy.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Cash-pay, no insurance. Consultation around $49.95 to start. Estradiol patch $74.99/month; combined patch plus progesterone runs about $75/month. Some HRT options start near $39.99/month. 3-month supplies ship free. HSA/FSA eligible."},
  {"slug": "wisp-sexual-health", "name": "Wisp", "brand": "Wisp", "category": "womens-health", "tagline": "Recurring UTI/BV/yeast needs", "description": "Wisp is a sexual and reproductive women's-health telehealth service treating UTIs, BV, yeast infections, birth control, STIs, herpes, and emergency contraception, with care available in all 50 states. Its Wisp Care membership offers unlimited sexual and reproductive consults for a flat monthly fee.", "priceDisplay": "Wisp Care $10/mo", "prescriptionRequired": true, "bestFor": "Recurring UTI/BV/yeast needs, Fast same-day sexual health care", "keyFeatures": ["UTI treatment", "Bacterial vaginosis", "Yeast infection", "Vaginal dryness", "Birth control"], "pros": ["Wisp Care unlimited consults at $10/month", "Most prescriptions sent within hours", "All 50 states", "Free medication delivery"], "cons": ["Cash-pay model (no insurance billing)", "Some states require a video consult", "One-time consults add up without membership", "Async-first for routine needs"], "url": "https://www.hellowisp.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Wisp Care membership $10/month for unlimited sexual and reproductive consultations. Sexual health one-time consult from $69; STI/STD one-time consult $39. Medications delivered free; first month of medication free for new users."},
  {"slug": "nurx-womens-health", "name": "Nurx", "brand": "Nurx", "category": "womens-health", "tagline": "Want insurance accepted", "description": "Nurx is a women's-health telehealth platform (part of Thirty Madison) covering birth control, emergency contraception, UTI, BV, yeast, menopause, and at-home STI testing, and it accepts most private insurance. Birth control includes 50+ options with out-of-pocket pills starting at $15/month.", "priceDisplay": "Birth control from $15/mo", "prescriptionRequired": true, "bestFor": "Want insurance accepted, Broad sexual/reproductive needs", "keyFeatures": ["Birth control (50+ types)", "Emergency contraception", "UTI treatment", "Bacterial vaginosis", "Yeast infection"], "pros": ["Accepts most private insurance", "Birth control from $15/month out-of-pocket", "50+ contraception options", "At-home STI testing"], "cons": ["Per-service consult fees (UTI $65)", "Services not offered in every state", "STI kits expensive without insurance", "Monthly $3 support fee on orders"], "url": "https://www.nurx.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Birth control consultation $28 (includes a year of messaging) plus a $3/month support fee; out-of-pocket pills from $15/month. UTI consultation $65. At-home STI kits $150-$220 without insurance plus a $14.50 service fee. Accepts most private insurance."},
  {"slug": "winona-menopause", "name": "Winona", "brand": "Winona", "category": "womens-health", "tagline": "All-in HRT pricing", "description": "Winona is a telehealth platform for perimenopause and menopause offering bioidentical HRT in body cream, vaginal, oral, and patch formats with unlimited follow-ups and 24/7 doctor messaging included. Pricing is medication-only with no separate membership or consultation fee.", "priceDisplay": "From $89/mo", "prescriptionRequired": true, "bestFor": "All-in HRT pricing, Bioidentical hormone preference", "keyFeatures": ["Perimenopause and menopause HRT", "Bioidentical estrogen body cream", "Vaginal estrogen", "Oral hormone therapy", "Hormone patches"], "pros": ["No separate consult or membership fee", "Unlimited follow-ups and 24/7 messaging included", "Multiple formats (cream, vaginal, oral, patch)", "Free shipping"], "cons": ["Does not accept insurance directly", "Higher-end formulations reach $238/month", "Menopause-focused only", "Some treatments compounded"], "url": "https://bywinona.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Medication-only pricing with no separate consult or membership fee; estrogen body cream with progesterone is the popular option at $89/month. Most women pay roughly $89-$238/month depending on formulation. Does not accept insurance but is HSA/FSA eligible."},
  {"slug": "gennev", "name": "Gennev", "brand": "Gennev", "category": "womens-health", "tagline": "Doctor-plus-dietitian menopause care", "description": "Gennev is a virtual menopause clinic offering video visits with menopause-specialist doctors and registered dietitians in all 50 states, and it accepts insurance through carriers like Aetna, Anthem, Cigna, and UnitedHealthcare. It prescribes FDA-approved hormonal and non-hormonal medications alongside nutrition coaching.", "priceDisplay": "$250 self-pay initial visit", "prescriptionRequired": true, "bestFor": "Doctor-plus-dietitian menopause care, Insurance-covered video visits", "keyFeatures": ["Menopause and perimenopause care", "FDA-approved HRT", "Non-hormonal medication options", "Registered dietitian visits", "Nutrition and metabolic coaching"], "pros": ["Accepts multiple major insurers", "All 50 states and all zip codes", "Menopause-specialist physicians", "Registered dietitian visits available"], "cons": ["Self-pay initial visit is $250", "Medication priced separately", "Follow-ups also carry a fee", "Insurance cost depends on plan"], "url": "https://gennev.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Self-pay: $250 initial doctor visit, $199 follow-up; RDN/dietitian $199 initial, $119 follow-up. Accepts insurance through Aetna, Anthem, Cigna, UnitedHealthcare and others, in which case cost depends on deductible and copay."},
  {"slug": "pandia-health", "name": "Pandia Health", "brand": "Pandia Health", "category": "womens-health", "tagline": "Insurance-covered birth control", "description": "Pandia Health is a doctor-founded, women-led telehealth service for birth control and menopause hormone therapy with free delivery and a flat consultation fee. It accepts most insurance for medication (including some Medicaid plans) but bills the telehealth consult as cash-pay.", "priceDisplay": "$35 consult (with delivery)", "prescriptionRequired": true, "bestFor": "Insurance-covered birth control, Free delivery", "keyFeatures": ["Birth control (pill, patch, ring)", "Emergency contraception", "Menopause hormone therapy", "Combination pills, patches, vaginal treatments", "Perimenopause care"], "pros": ["Flat $35 consult with delivery", "Accepts most insurance (incl. some Medicaid)", "Free USPS shipping", "12-month prescriptions"], "cons": ["Only 14 states", "Consultation is cash-pay only", "Parental consent required for minors in some states", "Pickup option costs more ($70)"], "url": "https://www.pandiahealth.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Online consultation $35 if Pandia delivers your medication, or $70 if you pick up at a pharmacy. Birth control prescription valid 12 months. Out-of-pocket pills from $15/month; $0 copay common with insurance. Free USPS shipping. Consultation is cash/credit only."},
  {"slug": "twentyeight-health", "name": "Twentyeight Health", "brand": "Twentyeight Health", "category": "womens-health", "tagline": "Medicaid and underserved patients", "description": "Twentyeight Health is a sexual and reproductive women's-health platform (which acquired SimpleHealth) focused on accessible, inclusive care for underserved patients, accepting almost every commercial insurance and Medicaid plan. Services span birth control, emergency contraception, UTI, BV, yeast, and prenatal vitamins.", "priceDisplay": "Birth control from $16/mo", "prescriptionRequired": true, "bestFor": "Medicaid and underserved patients, Insurance-covered reproductive care", "keyFeatures": ["Birth control (pill, patch, ring, shot)", "Emergency contraception", "UTI treatment", "Bacterial vaginosis", "Yeast infection"], "pros": ["Accepts Medicaid and nearly all commercial insurance", "Birth control from $16/month out-of-pocket", "Broad reproductive services", "Acquired SimpleHealth (larger base)"], "cons": ["Coverage and services vary by state", "Membership extra for unlimited messaging", "Not a menopause/HRT specialist", "State-by-state availability limits"], "url": "https://www.twentyeighthealth.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "Out-of-pocket birth control from $16/month; $0 with most insurance. Optional Complete Care membership $19.99/month adds unlimited messaging, free shipping, and annual renewal. Accepts almost every commercial insurance and Medicaid plan."},
  {"slug": "allara-health", "name": "Allara Health", "brand": "Allara Health", "category": "womens-health", "tagline": "PCOS and complex hormonal conditions", "description": "Allara Health is a virtual women's-health clinic for complex hormonal and metabolic conditions such as PCOS, endometriosis, thyroid disorders, PMDD, and menopause, pairing each patient with a medical provider and a registered dietitian. It accepts insurance and offers a cash-pay option, operating in 45+ states plus D.C.", "priceDisplay": "$149 diagnostic plan", "prescriptionRequired": false, "bestFor": "PCOS and complex hormonal conditions, Provider plus dietitian care team", "keyFeatures": ["PCOS care", "Insulin resistance", "Endometriosis", "Hashimoto's and hypothyroidism", "Primary ovarian insufficiency"], "pros": ["Treats complex conditions (PCOS, endometriosis, thyroid, PMDD)", "Dedicated provider plus registered dietitian", "Accepts insurance with self-pay option", "45+ states plus D.C."], "cons": ["Not in all 50 states", "Best value requires in-network insurance", "Not for simple one-off prescriptions", "Membership cost beyond diagnostic plan not published"], "url": "https://www.allarahealth.com", "referralType": "affiliate_link", "lastVerified": "2026-06-25", "priceNote": "One-time Diagnostic Plan $149 to assess hormonal/metabolic imbalance. Accepts insurance (in-network can be lower or no cost) and offers an affordable self-pay membership when out of network. Each patient gets one medical provider and one registered dietitian."},
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
