import type { SectionConfig } from '@/components/SectionPage';

// Top-level section pages for the 8 nav groups. Prices are sourced from real
// repo data (provider pricingDisplay, category cost callouts, guide cost data,
// CATEGORIES.typicalSavings) — see the 2026-06-27 research pass. No invented figures.
type FullConfig = SectionConfig & { metaTitle: string; metaDescription: string };

export const SECTION_PAGES: Record<string, FullConfig> = {
  'test-diagnose': {
    id: 'test-diagnose',
    slug: '/test-diagnose',
    eyebrow: 'Test & Diagnose',
    title: 'Test and track your health',
    intro: 'Cash-pay body composition, blood, glucose, and recovery testing with real advertised prices — baseline and retest without insurance or a referral.',
    accent: 'blue',
    heroStat: { value: '$40–150', label: 'cash-pay DEXA body-composition scan, no insurance' },
    priceProof: [
      { label: 'DEXA body-composition scan', value: '$40–150', anchor: 'BodySpec ~$40–45/scan vs $150–300+ at a hospital' },
      { label: 'VO2 max test', value: '$99–175', anchor: 'vs $300–600+ for a clinical CPET' },
      { label: 'At-home blood panels', value: '$50–850', anchor: 'same labs as hospitals — no doctor visit first' },
      { label: 'Consumer CGM', value: '$49–399/mo', anchor: 'OTC sensors from ~$49/mo' },
    ],
    featured: {
      title: 'Are DEXA scans worth it?',
      desc: 'A DEXA scan reads fat, lean mass, visceral fat, and bone density to within ~1–2% — far more precise than BMI. We break down the $40–300 price spread and when it pays off.',
      href: '/guides/are-dexa-scans-worth-it',
      cta: 'See the cost breakdown',
    },
    guides: [
      { title: 'VO2 Max Test Cost: Studio vs Clinical CPET', href: '/guides/vo2-max-test-cost' },
      { title: 'At-Home Lab Testing Guide', href: '/guides/at-home-lab-testing-guide' },
      { title: 'CGM Without Diabetes: What It Costs', href: '/guides/cgm-without-diabetes' },
    ],
    metaTitle: 'Test & Diagnose: Cash-Pay DEXA, Labs & Body Testing',
    metaDescription: 'Compare cash-pay diagnostic testing — DEXA scans ($40–150), VO2 max, at-home blood panels, and CGMs — with real prices and no insurance or referral required.',
  },

  'lose-weight': {
    id: 'lose-weight',
    slug: '/lose-weight',
    eyebrow: 'Lose Weight',
    title: 'Lose weight without the markup',
    intro: 'Every cash-pay route to weight loss in one place — telehealth GLP-1 programs, manufacturer self-pay pricing, and bariatric surgery at home or abroad — with real, sourced prices.',
    accent: 'emerald',
    heroStat: { value: 'from ~$149/mo', label: 'lowest cash price for an FDA-approved GLP-1 (oral semaglutide)' },
    priceProof: [
      { label: 'FDA-approved GLP-1 (cash floor)', value: 'from ~$149/mo', anchor: 'vs ~$1,000–1,350/mo retail' },
      { label: 'Telehealth GLP-1 program', value: '$99–299/mo', anchor: 'vs ~$1,000–1,800/mo brand uninsured' },
      { label: 'Injectable tirzepatide (Zepbound)', value: 'from ~$299/mo', anchor: 'cheapest FDA-approved injection' },
      { label: 'Gastric sleeve abroad', value: '~$2,800–7,500', anchor: '60–80% off the ~$19,000 US average' },
    ],
    featured: {
      title: 'GLP-1 programs, compared',
      desc: 'Side-by-side cash-pay GLP-1 providers — manufacturer self-pay storefronts from ~$149/mo and telehealth programs from $99–299/mo, all without insurance.',
      href: '/glp1',
      cta: 'Compare GLP-1 programs',
    },
    guides: [
      { title: 'Best GLP-1 Weight-Loss Programs', href: '/guides/best-glp1-weight-loss-programs' },
      { title: 'Cheapest GLP-1 Without Insurance', href: '/guides/cheapest-glp1-without-insurance' },
      { title: 'Gastric Sleeve Cost by Country', href: '/guides/gastric-sleeve-cost-by-country' },
    ],
    metaTitle: 'Lose Weight: Cash-Pay GLP-1 & Bariatric Pricing Compared',
    metaDescription: 'Compare cash-pay weight-loss options — GLP-1 programs from ~$149/mo vs $1,000+/mo brand, plus bariatric surgery at 60–80% off — with real, sourced prices.',
  },

  'balance-hormones': {
    id: 'balance-hormones',
    slug: '/balance-hormones',
    eyebrow: 'Balance Hormones',
    title: 'Balance your hormones',
    intro: 'Cash-pay TRT, HRT, menopause care, peptides, and fertility — with real per-month and per-cycle pricing so you can compare clinics before you book.',
    accent: 'violet',
    heroStat: { value: '$99–250/mo', label: 'all-in online TRT clinic' },
    priceProof: [
      { label: 'Online TRT clinic (all-in)', value: '$99–250/mo', anchor: 'vs $400–600/mo brand AndroGel' },
      { label: 'Online ED & hair loss (men)', value: '$10–90/mo', anchor: 'generic finasteride / sildenafil shipped' },
      { label: 'Online menopause / HRT', value: '~$20–70/mo', anchor: 'generic estradiol often inexpensive' },
      { label: 'Egg freezing, one cycle', value: '$12,000–20,000', anchor: 'low-cost clinic ~$6,994 + meds' },
    ],
    featured: {
      title: 'The complete TRT guide',
      desc: 'Symptoms, level thresholds, every delivery method, and what each access route really costs — online clinics at $150–250/mo all-in vs $30–60/mo generic injections or $400–600/mo brand gel.',
      href: '/guides/trt-testosterone-therapy',
      cta: 'Read the TRT guide',
    },
    guides: [
      { title: 'Best Online TRT Clinics Compared', href: '/guides/best-online-trt-clinics' },
      { title: 'Online Menopause Treatment & HRT', href: '/guides/online-menopause-treatment' },
      { title: 'Egg Freezing Cost in the USA', href: '/guides/egg-freezing-cost-usa' },
    ],
    metaTitle: 'Balance Hormones: Cash-Pay TRT, HRT & Fertility Pricing',
    metaDescription: 'Compare cash-pay hormone care — online TRT from $99–250/mo, menopause/HRT, peptides, and fertility — with real per-month and per-cycle prices.',
  },

  'live-longer': {
    id: 'live-longer',
    slug: '/live-longer',
    eyebrow: 'Live Longer & Perform',
    title: 'Invest in a longer healthspan',
    intro: 'Compare longevity clinics, online longevity medications, evidence-backed supplements, and regenerative stem-cell options on real cash-pay price — not marketing.',
    accent: 'amber',
    heroStat: { value: '$200–500/yr', label: 'longevity biomarker membership — the entry point' },
    priceProof: [
      { label: 'Longevity biomarker membership', value: '$200–500/yr', anchor: 'vs $8,000–25,000+/yr full-diagnostic clinic' },
      { label: 'Online longevity Rx', value: '$30–150/mo + meds', anchor: 'rapamycin, metformin, NAD+' },
      { label: 'Longevity supplements', value: '$20–100+/mo', anchor: 'Tru Niagen ~$40/mo' },
      { label: 'Stem cell therapy (Mexico)', value: '$5,000–35,000', anchor: '50–70% off US' },
    ],
    featured: {
      title: 'Best longevity clinics: cost-transparency roundup',
      desc: 'Real membership pricing across the ladder: biomarker memberships (~$200–500/yr) up to full-diagnostic imaging clinics ($8,000–25,000+/yr), with an honest evidence-vs-hype read.',
      href: '/guides/best-longevity-clinics',
      cta: 'Compare longevity clinics',
    },
    guides: [
      { title: 'Rapamycin for Longevity', href: '/guides/rapamycin-for-longevity' },
      { title: 'NMN vs NR: Best NAD+ Supplement', href: '/guides/best-nad-supplement' },
      { title: 'US vs Mexico Stem Cells', href: '/guides/us-vs-mexico-stem-cells' },
    ],
    metaTitle: 'Live Longer & Perform: Longevity Clinic & Rx Pricing',
    metaDescription: 'Compare longevity options on real price — biomarker memberships from $200–500/yr, online rapamycin/NAD+ Rx, supplements, and stem-cell therapy.',
  },

  'look-better': {
    id: 'look-better',
    slug: '/look-better',
    eyebrow: 'Look Better',
    title: 'Aesthetics, priced in the open',
    intro: 'Injectables, Rx skincare, hair restoration, cosmetic surgery, and dental — with cash rates and abroad options compared side by side.',
    accent: 'rose',
    heroStat: { value: '$10–20', label: 'Botox per unit, cash price' },
    priceProof: [
      { label: 'Hair transplant (Turkey FUE)', value: '$1,800–5,900', anchor: 'all-inclusive vs $10,000–20,000 in US' },
      { label: 'Dental implant abroad', value: '$750–1,200', anchor: 'per implant vs $3,000–5,000 in US' },
      { label: 'Online dermatology Rx', value: '$25–95', anchor: 'per visit vs $150–400 in-person' },
      { label: 'Plastic surgery abroad', value: '40–60% off', anchor: 'vs US price' },
    ],
    featured: {
      title: 'Hair transplant clinics, compared',
      desc: 'Turkey and Mexico FUE/FUT clinics with all-inclusive packages, graft pricing, and named-surgeon options — typical savings of 50–75% against US restoration costs.',
      href: '/hair_transplant',
      cta: 'Compare hair transplant clinics',
    },
    guides: [
      { title: 'How Much Does Botox Cost? 2026 Guide', href: '/guides/botox-cost-guide' },
      { title: 'Hair Transplant Cost by Country', href: '/guides/hair-transplant-cost-by-country' },
      { title: 'Online Dermatology Cost (2026)', href: '/guides/online-dermatology-cost' },
    ],
    metaTitle: 'Look Better: Cash-Pay Aesthetics, Hair & Dental Pricing',
    metaDescription: 'Compare cash-pay aesthetics — Botox from $10–20/unit, hair transplants $1,800–5,900 abroad, dental implants, and skincare Rx — with real prices.',
  },

  'treat-see-doctor': {
    id: 'treat-see-doctor',
    slug: '/treat-see-doctor',
    eyebrow: 'Treat & See a Doctor',
    title: 'See a doctor without the surprise bill',
    intro: 'See a doctor, get a script, or book a procedure at a published cash price — no insurance and no surprise bill required.',
    accent: 'sky',
    heroStat: { value: 'from $19/visit', label: 'cash-pay online doctor visit' },
    priceProof: [
      { label: 'Online doctor / urgent care', value: '$19–89/visit', anchor: 'vs ~$170+ uninsured in-person' },
      { label: 'Home sleep apnea test', value: '$99–299', anchor: 'vs $500–3,000 in-lab study' },
      { label: 'Sublingual allergy therapy', value: '$99/mo', anchor: '~62% cheaper than shots over a course' },
      { label: 'Cash-pay bundled surgery', value: '$3,875–7,205', anchor: '40–60% off network-paid claims' },
    ],
    featured: {
      title: 'Telehealth & online Rx, compared',
      desc: 'Compare cash-pay virtual doctor, urgent care, and online prescription platforms by visit price and what they treat — from $19/visit vs ~$170+ for an uninsured in-person visit.',
      href: '/telehealth',
      cta: 'Compare online doctor visits',
    },
    guides: [
      { title: 'Online Therapy Cost Without Insurance', href: '/guides/online-therapy-cost' },
      { title: 'Sleep Study Cost: Home vs In-Lab', href: '/guides/sleep-study-cost' },
      { title: 'Cash-Pay Surgery Guide', href: '/guides/cash-pay-surgery-guide' },
    ],
    metaTitle: 'Treat & See a Doctor: Cash-Pay Telehealth & Surgery Pricing',
    metaDescription: 'Compare cash-pay care — online doctor visits from $19, home sleep tests, allergy therapy, and bundled surgery at 40–60% off — with real published prices.',
  },
};
