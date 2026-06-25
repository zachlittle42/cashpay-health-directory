import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Health Guides: Lab Testing, GLP-1, Hair Transplants & More',
  description: 'Expert guides on cash-pay health services. Learn about GLP-1 weight loss, at-home lab testing, medical tourism, and more.',
};

const guides = [
  // Category + procedure expansion (2026-06-25): imaging, mental health, derm, sleep, allergy, surgery + depth
  {
    slug: 'mri-cost-without-insurance',
    title: 'MRI Cost Without Insurance (2026): Cash-Pay Price Guide',
    description:
      'What an MRI costs without insurance in 2026 — cash-pay prices by body part, why the same scan varies 5-10x, freestanding imaging centers (RadiologyAssist, Green Imaging, SimonMed) vs hospitals, and how to find the lowest self-pay rate.',
    category: 'Imaging',
    readTime: '11 min',
    icon: '🧲',
  },
  {
    slug: 'ct-scan-cost-without-insurance',
    title: 'CT Scan Cost Without Insurance (2026): Cash-Pay Prices',
    description:
      'CT scan cost without insurance in 2026 by body part — head, chest, abdomen — plus imaging center vs hospital pricing, contrast costs, cash-pay programs, and how to save.',
    category: 'Imaging',
    readTime: '11 min',
    icon: '🩻',
  },
  {
    slug: 'full-body-mri-scan-cost',
    title: 'Full Body MRI Scan Cost (2026): Prenuvo, Ezra, SimonMed',
    description:
      'Full body MRI scan cost in 2026 — Prenuvo ($2,499), Ezra/Function ($999) and SimonMed ($899) cash prices compared, what each scans, the evidence and controversy, and whether it is worth it.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '🧲',
  },
  {
    slug: 'ultrasound-cost-without-insurance',
    title: 'Ultrasound Cost Without Insurance (2026): Cash Prices by Type',
    description:
      'Ultrasound cost without insurance by type (abdominal, pelvic, transvaginal, thyroid, OB), where to get one affordably, and self-pay vs insurance.',
    category: 'Imaging',
    readTime: '10 min',
    icon: '🩻',
  },
  {
    slug: 'online-therapy-cost',
    title: 'Online Therapy Cost Without Insurance (2026 Guide)',
    description:
      'What online therapy costs without insurance in 2026 — BetterHelp (~$70-$100/wk), Talkspace (~$99/wk), Brightside ($95-$349/mo) & Open Path ($40-$70/session) on per-session vs subscription pricing, plus HSA/FSA and how to find affordable care.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '🧠',
  },
  {
    slug: 'ketamine-therapy-cost',
    title: 'Ketamine Therapy Cost (2026): At-Home vs Clinic & Spravato',
    description:
      'Ketamine therapy cost for depression in 2026 — at-home (Mindbloom from ~$165/session, Joyous from ~$129/mo) vs in-clinic IV ($400-$700/session) and FDA-approved Spravato, what each includes, the evidence, and safety.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '🧠',
  },
  {
    slug: 'online-psychiatry-cost',
    title: 'Online Psychiatry Cost Without Insurance (2026 Guide)',
    description:
      'What online psychiatry / medication management costs without insurance — Brightside ~$95/mo, Hims/Hers from ~$49/mo, Cerebral ~$60/mo, per-visit options, and how it compares to therapy and an in-person psychiatrist.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🧠',
  },
  {
    slug: 'online-dermatology-cost',
    title: 'Online Dermatology Cost (2026): Curology, Nurx & More',
    description:
      'Online dermatology cost in 2026 compared across Curology, Nurx, Hers/Hims & DermatologistOnCall — the three pricing models (subscription, consult + meds, pay-per-visit), cost by condition (acne, anti-aging, rosacea), and what is included vs an in-person visit.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🧴',
  },
  {
    slug: 'botox-vs-fillers-cost',
    title: 'Botox vs Fillers Cost (2026): Per Unit vs Syringe',
    description:
      'Botox vs dermal fillers cost compared — per-unit vs per-syringe pricing, how long each lasts, what each treats, and how to save safely at a med spa.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '💉',
  },
  {
    slug: 'lasik-cost-usa',
    title: 'LASIK Cost Without Insurance USA (2026): Per-Eye Prices',
    description:
      'LASIK cost without insurance in the US — the ~$2,250/eye national average, what a flat fee includes, LASIK vs PRK vs SMILE vs ICL, financing & HSA/FSA, and how to vet a surgeon.',
    category: 'Cost Guide',
    readTime: '12 min',
    icon: '👁️',
  },
  {
    slug: 'cataract-surgery-cost',
    title: 'Cataract Surgery Cost Without Insurance (2026 Guide)',
    description:
      'Cataract surgery cost without insurance in 2026 — standard vs premium lens prices per eye, surgery center vs hospital facility fees, plus what Medicare covers.',
    category: 'Vision',
    readTime: '11 min',
    icon: '👁️',
  },
  {
    slug: 'cash-pay-surgery-guide',
    title: 'Cash Pay Surgery Cost: How Transparent Pricing Works',
    description:
      'How cash-pay surgery works — bundled, all-inclusive prices (the Surgery Center of Oklahoma model), why they can beat insurance billing, real posted prices, and how to find a transparent surgery center.',
    category: 'Surgery',
    readTime: '11 min',
    icon: '🏥',
  },
  {
    slug: 'knee-replacement-cost-usa',
    title: 'Knee Replacement Cost Without Insurance (USA 2026)',
    description:
      'Total knee replacement cost without insurance in the US — cash surgery centers (~$15K-$25K) vs hospitals (~$30K-$50K+), what bundled pricing includes, and US vs abroad.',
    category: 'Orthopedic',
    readTime: '11 min',
    icon: '🦵',
  },
  {
    slug: 'sleep-study-cost',
    title: 'Sleep Study Cost Without Insurance (2026): Lab vs Home',
    description:
      'Sleep study cost without insurance in 2026 — in-lab polysomnography ($1,000-$10,000) vs home sleep apnea tests ($149-$500). Accuracy, real providers (Lofta and Sleep Doctor / WatchPAT One, Dumbo Health), and how to save.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '😴',
  },
  {
    slug: 'allergy-testing-cost',
    title: 'Allergy Testing Cost Without Insurance (2026): Skin vs Blood',
    description:
      'Allergy testing cost without insurance in 2026 — skin-prick vs blood (IgE) vs at-home kits compared, what each detects, real provider prices (Everlywell $149, Quest $189, Labcorp $199), and accuracy.',
    category: 'Labs',
    readTime: '11 min',
    icon: '🤧',
  },
  {
    slug: 'iv-therapy-cost',
    title: 'IV Therapy Cost (2026): Drip Prices by Type & Clinic',
    description:
      'IV therapy cost in 2026: Myers cocktail, NAD+, hydration & immunity drip prices, mobile vs clinic, membership savings, and is IV therapy worth it.',
    category: 'Cost Guide',
    readTime: '12 min',
    icon: '💧',
  },
  {
    slug: 'epigenetic-age-test-cost',
    title: 'Biological Age Test Cost (2026): TruDiagnostic vs Elysium',
    description:
      'Biological / epigenetic age test cost compared — TruDiagnostic TruAge (~$499), Elysium Index (~$499), GlycanAge (~$499-549) & Tally Health (~$249): what each measures, accuracy, and whether it is worth buying.',
    category: 'Longevity',
    readTime: '11 min',
    icon: '🧬',
  },
  {
    slug: 'hormone-pellet-therapy-cost',
    title: 'Hormone Pellet Therapy Cost (2026): Pellets vs Injections',
    description:
      'Per-insertion and annual hormone pellet therapy cost for women (~$300-$500) and men (~$650-$750), how pellets compare to injections and creams, how long they last, and FDA vs compounded.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '💊',
  },
  {
    slug: 'iui-cost',
    title: 'IUI Cost Without Insurance (2026): Per-Cycle Price Guide',
    description:
      'IUI cost without insurance in 2026 — typical $500-$4,000 per cycle, plus medication, donor sperm, monitoring, success rates by age, and IUI vs IVF cost.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🤰',
  },
  {
    slug: 'egg-freezing-cost-usa',
    title: 'Egg Freezing Cost USA (2026): Cycle, Meds & Storage',
    description:
      'What egg freezing costs in the US — $12,000-$20,000 all-in per cycle: procedure, medications & storage, plus clinic vs startup (Cofertility, Kindbody) pricing and US vs abroad.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '🥚',
  },
  {
    slug: 'dental-implant-cost-usa',
    title: 'Dental Implant Cost Without Insurance (USA, 2026)',
    description:
      'US dental implant cost without insurance: single tooth $3,000-$5,000, All-on-4 $20,000-$38,000 per arch. What drives price, financing, and US vs abroad.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '🦷',
  },
  {
    slug: 'root-canal-cost-without-insurance',
    title: 'Root Canal Cost Without Insurance (2026): By Tooth',
    description:
      'Root canal cost without insurance in 2026 — by tooth (front/premolar/molar), with vs without a crown, plus dental schools, the Careington 500 savings plan, HSA/FSA, and CareCredit to lower the bill.',
    category: 'Dental',
    readTime: '10 min',
    icon: '🦷',
  },
  // Cross-country procedure comparisons (2026-06-25)
  {
    slug: 'hair-transplant-cost-by-country',
    title: 'Hair Transplant Cost by Country (2026): 5 vs the US',
    description:
      'Hair transplant cost by country — FUE/DHI prices in Turkey, Mexico, India, Thailand & Hungary vs the US, what each package includes, savings, and the accreditation (ABHRS/ISHRS, JCI, NABH) to verify before you book.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '💇',
  },
  {
    slug: 'gastric-sleeve-cost-by-country',
    title: 'Gastric Sleeve Cost by Country (2026): US vs Mexico, Turkey',
    description:
      'Gastric sleeve cost by country — all-inclusive sleeve gastrectomy prices in Mexico, Turkey & India vs the US, what each package includes, savings, accreditation, and how to choose.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '⚖️',
  },
  {
    slug: 'rhinoplasty-cost-by-country',
    title: 'Rhinoplasty Cost by Country (2026): US vs Turkey & More',
    description:
      'Rhinoplasty (nose job) cost by country — typical 2026 prices in Turkey, Mexico, South Korea & Thailand vs the US, package inclusions, accreditation & how to choose.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '👃',
  },
  {
    slug: 'bbl-cost-by-country',
    title: 'BBL Cost by Country (2026): US vs 4 Top Markets',
    description:
      'BBL cost by country — Brazilian butt lift prices in Colombia, Mexico, Turkey & Brazil vs the US, what each package includes, savings, the accreditation to verify, and BBL safety.',
    category: 'Comparison',
    readTime: '14 min',
    icon: '🍑',
  },
  {
    slug: 'breast-augmentation-cost-by-country',
    title: 'Breast Augmentation Cost by Country (2026): 4 vs US',
    description:
      'Breast augmentation cost by country — Mexico, Colombia, Turkey & Thailand vs the US: typical prices, what each package includes, savings, accreditation, and how to choose.',
    category: 'Comparison',
    readTime: '14 min',
    icon: '🌍',
  },
  {
    slug: 'tummy-tuck-cost-by-country',
    title: 'Tummy Tuck Cost by Country (2026): US vs Mexico & More',
    description:
      'Tummy tuck cost by country: abdominoplasty prices in Mexico, Colombia & Turkey vs the US — what each package includes, the savings, accreditation to verify, and how to choose.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '💲',
  },
  {
    slug: 'veneers-cost-by-country',
    title: 'Veneers Cost by Country: US vs Mexico, Turkey & More',
    description:
      'Per-tooth porcelain veneer prices in Mexico, Turkey, Costa Rica & Hungary vs the US — what each smile package includes, accreditation signals, savings, and how to choose.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '😁',
  },
  {
    slug: 'full-mouth-dental-implants-cost-by-country',
    title: 'Full Mouth Dental Implants Cost by Country (2026)',
    description:
      'Full mouth dental implants abroad: choosing All-on-4 vs All-on-6 and reading a per-arch package quote in Mexico, Costa Rica, Colombia, Hungary & Turkey, with price context, safety/accreditation, and how to choose.',
    category: 'Comparison',
    readTime: '14 min',
    icon: '🦷',
  },
  {
    slug: 'ivf-cost-by-country',
    title: 'IVF Cost by Country (2026): US vs Mexico, Spain & More',
    description:
      'IVF cost by country in 2026 — per-cycle prices in Mexico, Spain, Czech Republic, Greece & India vs the US, what each cycle includes, the donor-egg laws, and how to choose.',
    category: 'Medical Tourism',
    readTime: '13 min',
    icon: '🌍',
  },
  {
    slug: 'knee-replacement-cost-by-country',
    title: 'Knee Replacement Cost by Country: US vs India & More',
    description:
      'Total knee replacement cost by country — India, Mexico, Thailand & Costa Rica vs the US — package prices, what each includes, JCI accreditation, savings, and how to choose.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '🦵',
  },
  {
    slug: 'heart-bypass-cost-by-country',
    title: 'Heart Bypass Cost by Country: US vs India, Thailand & Mexico',
    description:
      'Heart bypass (CABG) cost by country — India, Thailand & Mexico vs the US. Estimated per-procedure prices, what each package includes, JCI accreditation, savings, and how to choose a cardiac center abroad.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '❤️',
  },
  {
    slug: 'lasik-cost-by-country',
    title: 'LASIK Cost by Country (2026): US vs Mexico, Turkey & More',
    description:
      'LASIK cost by country compared across Mexico, Turkey, India & Thailand vs the US — per-eye and both-eyes prices, what each package includes, safety/accreditation, and how to choose.',
    category: 'Comparison',
    readTime: '13 min',
    icon: '👁️',
  },
  // International expansion (2026-06-25): new-destination + cross-country comparison guides
  {
    slug: 'malaysia-medical-tourism-guide',
    title: 'Malaysia Medical Tourism: Cost, Hospitals & Safety Guide',
    description:
      'Cardiac, fertility/IVF, dental, and orthopedic costs in Malaysia vs the US, JCI/MSQH hospitals in Kuala Lumpur & Penang (Prince Court, Sunway, Gleneagles), the 90-day visa-free entry + MDAC, and how to vet a hospital before you book.',
    category: 'Medical Tourism',
    readTime: '15 min',
    icon: '🇲🇾',
  },
  {
    slug: 'singapore-medical-tourism-guide',
    title: 'Singapore Medical Tourism Cost: Premium Care Guide',
    description:
      'Why complex cardiac, oncology, transplant & spinal care costs more in Singapore than other Asian hubs — JCI hospitals (Mount Elizabeth, Gleneagles, Raffles, NCCS proton therapy), cost vs the US, the visa, and who it fits.',
    category: 'Medical Tourism',
    readTime: '15 min',
    icon: '🇸🇬',
  },
  {
    slug: 'poland-medical-tourism-guide',
    title: 'Poland Medical Tourism: Dental & Cosmetic Cost Guide',
    description:
      'Dental implant, veneer, crown & cosmetic-surgery costs in Poland vs the US/UK, the EU patient protections that set it apart, clinics in Krakow, Warsaw & Wroclaw, and how to vet a clinic before you book.',
    category: 'Medical Tourism',
    readTime: '14 min',
    icon: '🇵🇱',
  },
  {
    slug: 'philippines-medical-tourism-guide',
    title: 'Philippines Medical Tourism Cost: Dental & Cosmetic Guide',
    description:
      'Dental and cosmetic costs in the Philippines vs the US, English-speaking JCI-accredited hospitals (St. Luke’s, Makati Medical Center, Asian Hospital, The Medical City), travel logistics, and how to vet a clinic before you book.',
    category: 'Medical Tourism',
    readTime: '15 min',
    icon: '🇵🇭',
  },
  {
    slug: 'vietnam-medical-tourism-guide',
    title: 'Vietnam Medical Tourism Cost: Dental & Cosmetic Guide',
    description:
      'Vietnam medical tourism costs — dental implants, veneers & cosmetic surgery vs the US, JCI-accredited hospitals (FV, Vinmec), the 90-day e-visa, safety, and how to vet a clinic before you book.',
    category: 'Medical Tourism',
    readTime: '14 min',
    icon: '🇻🇳',
  },
  {
    slug: 'argentina-medical-tourism-guide',
    title: 'Argentina Medical Tourism Cost: Buenos Aires Guide',
    description:
      'Cosmetic surgery and dental costs in Buenos Aires vs the US, JCI-accredited hospitals (Hospital Italiano, Hospital Alemán, Hospital Universitario Austral), the 90-day entry rule, and how to vet a clinic before you book.',
    category: 'Medical Tourism',
    readTime: '13 min',
    icon: '🇦🇷',
  },
  {
    slug: 'dental-implants-abroad-cost-comparison',
    title: 'Dental Implants Abroad: Cost Comparison by Country (2026)',
    description:
      'Dental implants abroad cost comparison across Mexico, Costa Rica, Colombia, Turkey, Hungary & Poland vs the US — per-implant and full-arch (All-on-4) prices, what each package includes, and how to choose.',
    category: 'Medical Tourism',
    readTime: '14 min',
    icon: '🦷',
  },
  {
    slug: 'plastic-surgery-abroad-cost-comparison',
    title: 'Plastic Surgery Abroad Cost Comparison (2026): 6 Countries',
    description:
      'Plastic surgery abroad cost comparison across Mexico, Colombia, Brazil, Turkey, Thailand & South Korea vs the US — by procedure, what is included, safety, and how to choose.',
    category: 'Comparison',
    readTime: '15 min',
    icon: '🌍',
  },
  // GSC gap-fill batch 3b (2026-06-25): remaining 8 impression-earning gaps
  {
    slug: 'medical-tourism-packages',
    title: 'Medical Tourism Packages: What All-Inclusive Covers & Costs',
    description:
      'How all-inclusive medical vacation packages work — what is bundled (procedure, hospital, hotel, transfers, aftercare), what is NOT, package prices by procedure/destination (Turkey, Mexico, Thailand), and how to vet an operator vs booking direct.',
    category: 'Medical Tourism',
    readTime: '12 min',
    icon: '📦',
  },
  {
    slug: 'best-glp1-weight-loss-programs',
    title: 'Best GLP-1 Weight Loss Programs Compared (2026)',
    description:
      'The best GLP-1 weight loss programs in 2026 compared — Hims, Ro, Calibrate, Found, WeightWatchers Clinic & Henry Meds (plus NovoCare & LillyDirect direct-pay) — on medications offered, coaching, monthly cost with and without insurance, and who each is best for.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '💊',
  },
  {
    slug: 'ro-body-weight-loss-cost',
    title: 'Ro Body Weight Loss Cost (2026): Membership + GLP-1',
    description:
      'What Ro Body costs in 2026 — membership $39 first month then $149/mo (or ~$74 prepaid), what is included, whether medication is included (it is not), and Ro GLP-1 prices for Wegovy, Zepbound & Ozempic with vs without insurance.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '💊',
  },
  {
    slug: 'cheapest-ivf-in-europe',
    title: 'Cheapest IVF in Europe (2026): Country Cost Compare',
    description:
      'The cheapest IVF in Europe in 2026 compared across five countries — Czech Republic, Poland, North Cyprus, Greece and Spain — own-egg and donor-egg cycle prices, what is included, the eligibility law that decides where you can be treated, and success-rate context.',
    category: 'Medical Tourism',
    readTime: '12 min',
    icon: '🇪🇺',
  },
  {
    slug: 'are-dexa-scans-worth-it',
    title: 'Are DEXA Scans Worth It? 2026 Value & Reviews Guide',
    description:
      'Are DEXA scans worth it in 2026? What a body-comp DEXA tells you, how accurate it is (1-2% margin), who benefits, the real cost ($40-$300), what "DEXA Plus" tiers add, and what reviewers report.',
    category: 'Local Services',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'best-at-home-lab-tests',
    title: 'Best At-Home Lab Tests (2026): Top Picks by Use Case',
    description:
      'The best at-home lab tests in 2026 by use case — general wellness (Function Health), hormones & thyroid (LetsGetChecked), metabolic (Everlywell HbA1c), and STI (myLAB Box) — with accuracy vs a venous draw, cash-pay cost estimates, and how to pick.',
    category: 'Labs',
    readTime: '11 min',
    icon: '🧪',
  },
  {
    slug: 'turkey-hair-transplant-clinics',
    title: 'Turkey Hair Transplant Clinics Compared (2026): Prices',
    description:
      'The most-searched Turkey hair transplant clinics compared in 2026 — Vera Clinic (~$2,900-$5,900), Cosmedica (from €2,550), Estepera/Este (~$1,800-$6,000), Smile Hair, Dr. Serkan Aygin, ASMED and Vinci — techniques, package pricing, what is included, and how to vet a clinic.',
    category: 'Medical Tourism',
    readTime: '12 min',
    icon: '💇',
  },
  {
    slug: 'all-inclusive-bariatric-surgery-abroad',
    title: 'All-Inclusive Bariatric Surgery Abroad: What’s Bundled (2026)',
    description:
      'All-inclusive gastric sleeve & bypass packages abroad in 2026 — Mexico (~$4,295-$7,000) vs Turkey (~$3,200-$6,000). What the package actually bundles (surgery, hospital, hotel, aftercare), what it excludes, accreditation, and how to vet a program.',
    category: 'Medical Tourism',
    readTime: '13 min',
    icon: '🧳',
  },
  // GSC gap-fill batch (2026-06-25): pages for queries we already earn impressions for
  {
    slug: 'regenexx-vs-bioxcellerator',
    title: 'Regenexx vs BioXcellerator: Stem Cell Models Compared',
    description:
      'Regenexx (US, same-day autologous bone marrow) vs BioXcellerator (Medellín, Colombia, lab-expanded umbilical-cord MSCs) — approach, cells, conditions, cost, legality, evidence, and safety.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '🆚',
  },
  {
    slug: 'cirs-telehealth-treatment',
    title: 'CIRS Telehealth Treatment: Affordable Online Mold Plans (2026)',
    description: 'How affordable online CIRS (mold illness) programs work — what an under-$300/month plan should include (lab panels, teleconsults, home-delivered prescriptions), typical costs, and how to choose a legitimate one.',
    category: 'Telehealth',
    readTime: '12 min',
    icon: '🍄',
  },
  {
    slug: 'cheapest-glp1-without-insurance',
    title: 'Cheapest GLP-1 Without Insurance (2026): Price Compare',
    description: 'The cheapest GLP-1 without insurance in 2026 across BOTH semaglutide and tirzepatide — NovoCare oral pill from ~$149/mo, LillyDirect Zepbound vials from ~$299/mo, telehealth, compounded options and their legal status, plus a full provider price comparison.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '💊',
  },
  {
    slug: 'best-longevity-clinics',
    title: 'Best Longevity Clinics & Anti-Aging Companies (2026)',
    description:
      'The best longevity and anti-aging companies in 2026 compared — Fountain Life, Human Longevity, Lifeforce, Function Health & Hone Health — real membership prices ($149-$25,000+), what each includes, and an honest evidence-vs-hype read.',
    category: 'Longevity',
    readTime: '12 min',
    icon: '🧬',
  },
  // Batch 2 cost-transparency expansion (2026-06-24): 17 DEXA city guides, GLP-1 cost, at-home labs, DEXA explainers, med-tourism companions, brand guides
  {
    slug: 'dexa-scan-cost-san-francisco',
    title: 'DEXA Scan Cost in San Francisco (2026): Bay Area Prices',
    description: 'What a body-composition DEXA scan costs in San Francisco in 2026 — mobile units from ~$40, UCSF research scans $100-200, Cow Hollow studios $119-179 — plus real SF Bay Area providers and how to save.',
    category: 'Local Services',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-san-diego',
    title: 'DEXA Scan Cost in San Diego (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in San Diego in 2026 — from ~$45 BodySpec mobile vans to $210 La Jolla studio scans. Four real, verified providers, what drives the price, and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-orange-county',
    title: 'DEXA Scan Cost in Orange County (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across Orange County in 2026 — BodySpec mobile vans from ~$39, DexaFit Irvine $119-179 — plus real OC providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-houston',
    title: 'DEXA Scan Cost in Houston (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Houston in 2026 — $39.95 BodySpec mobile vans up to ~$200 concierge studios. Six real, verified Houston clinics, what drives the price, and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-austin',
    title: 'DEXA Scan Cost in Austin (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Austin in 2026 — BodySpec from $45, studios $65-99, franchise up to $150 — plus six real Austin providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-dallas',
    title: 'DEXA Scan Cost in Dallas (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across Dallas-Fort Worth in 2026 — $99 DexaFit specials, $149-150 studios, $235 Fitnescity — plus real DFW providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-chicago',
    title: 'DEXA Scan Cost in Chicago (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Chicago in 2026 — BodySpec from $39.95, studios $75-150, Hologic clinics $150 — plus real Chicago providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-phoenix',
    title: 'DEXA Scan Cost in Phoenix (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across metro Phoenix in 2026 — from ~$75 Scottsdale studios to $180 platform bookings. Six real, verified Valley clinics, what drives the price, and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-seattle',
    title: 'DEXA Scan Cost in Seattle (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Seattle in 2026 — BodySpec from $39, Nomad Fit Lab $59.95, DexaFit $150, Fitnescity to $195 — plus real local providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-las-vegas',
    title: 'DEXA Scan Cost in Las Vegas (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Las Vegas in 2026 — DexaFit $139, cash-pay performance studios $40-150, accredited SDMI imaging $90-200 — plus real LV providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-miami',
    title: 'DEXA Scan Cost in Miami (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Miami in 2026 — independent clinics ~$100-150, Fitnescity $260, UM BOD POD from ~$35 — plus real Miami providers and why there is no $40 mobile van here yet.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-denver',
    title: 'DEXA Scan Cost in Denver (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Denver in 2026 — from $39.95 BodySpec to $235 Fitnescity, with $75 Live Lean Rx and $85 Body Fat USA in between. Five real, verified Denver-metro clinics, what drives the price, and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-washington-dc',
    title: 'DEXA Scan Cost in Washington, DC (2026 Price Guide)',
    description: 'What a body-composition DEXA scan costs in Washington, DC in 2026 — $150-$255, the physician-order rule, and real DC clinics (Composition ID, GWU, Fitnescity). BodySpec vans are waitlist-only here.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-nashville',
    title: 'DEXA Scan Cost in Nashville (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs in Nashville in 2026 — $39.95 BodySpec (waitlist) to $215 Fitnescity, with independent labs at $150-159 — plus the Tennessee physician-order rule and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-raleigh',
    title: 'DEXA Scan Cost in Raleigh (2026): Prices by Provider',
    description: 'What a body-composition scan costs in Raleigh in 2026 — InBody from $30, mobile DEXA from ~$40, and true full-body DEXA at $230 in nearby Cary. Real local clinics and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-boston',
    title: 'DEXA Scan Cost in Boston (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across the Boston metro in 2026 — BodySpec mobile vans from $39.95, Brookline & Cambridge studios $40-180 — plus four real verified clinics, the price spread, and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-atlanta',
    title: 'DEXA Scan Cost in Atlanta (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across metro Atlanta in 2026 — $75 studios in Sandy Springs and Buckhead, DexaFit at $40-150 — plus real providers and how to save.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'wegovy-vs-ozempic',
    title: 'Wegovy vs Ozempic: Cost, Dosing & Results (2026)',
    description:
      'Wegovy vs Ozempic — same drug (semaglutide), different FDA uses. Compare cost ($349-$499 cash), doses, weight-loss results, and side effects in 2026.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⚖️',
  },
  {
    slug: 'mounjaro-vs-ozempic',
    title: 'Mounjaro vs Ozempic: Efficacy, Cost & Side Effects (2026)',
    description:
      'Mounjaro (tirzepatide) vs Ozempic (semaglutide) compared — dual GIP/GLP-1 vs GLP-1 mechanism, head-to-head SURMOUNT-5 & SURPASS-2 trial efficacy, ~$1,069 vs ~$998 list price, shared side effects, and how to access each.',
    category: 'Comparison',
    readTime: '11 min',
    icon: '⚖️',
  },
  {
    slug: 'ozempic-alternatives',
    title: 'Ozempic Alternatives in 2026: Real Options & Costs',
    description: 'The real Ozempic alternatives in 2026 — Wegovy, Zepbound, the new oral semaglutide pill, compounded GLP-1s, and non-GLP-1 pills like Qsymia and Contrave — with current cash prices and what the evidence shows.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '💊',
  },
  {
    slug: 'cheapest-way-to-get-semaglutide',
    title: 'Cheapest Way to Get Semaglutide Without Insurance (2026)',
    description: 'The cheapest legitimate ways to get semaglutide without insurance in 2026 — NovoCare self-pay from $149-$349/mo, the oral pill, telehealth, and why cheap compounding mostly ended.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '💊',
  },
  {
    slug: 'glp1-and-muscle-loss',
    title: 'GLP-1 and Muscle Loss: How Much & How to Protect Lean Mass',
    description:
      'How much muscle you lose on a GLP-1 (semaglutide ~40% of weight lost in STEP 1, tirzepatide ~26% in SURMOUNT-1), why it happens, and how protein (1.2-1.6 g/kg/day), resistance training, and DEXA scans protect lean mass.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '💪',
  },
  {
    slug: 'at-home-thyroid-test',
    title: 'At-Home Thyroid Test: TSH, T3, T4 & Antibodies (2026)',
    description: 'What at-home thyroid tests measure (TSH, T3, T4, TPO/Tg antibodies), how accurate finger-prick kits are, what they cost ($75-$149), and top options.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🦋',
  },
  {
    slug: 'at-home-testosterone-test',
    title: 'At-Home Testosterone Test: Accuracy, Cost & When to Confirm',
    description:
      'How at-home testosterone tests work, how accurate finger-prick kits are vs a lab draw, what they cost, and when to confirm a low result with a clinician.',
    category: 'Labs',
    readTime: '11 min',
    icon: '🧪',
  },
  {
    slug: 'at-home-hormone-test',
    title: 'At-Home Hormone Test: Cortisol, Estrogen, Testosterone',
    description: 'At-home hormone tests for cortisol, estrogen, progesterone & testosterone — what to test, how accurate saliva vs blood is, when to collect, and 2026 cash prices ($89-$249).',
    category: 'Labs',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'are-at-home-blood-tests-accurate',
    title: 'Are At-Home Blood Tests Accurate? 2026 Evidence Guide',
    description:
      'How accurate at-home blood tests are vs a venous draw, what hurts finger-prick accuracy, which markers are reliable (HbA1c, vitamin D) vs not (potassium, hormones), and when to confirm at a lab.',
    category: 'Labs',
    readTime: '10 min',
    icon: '🩸',
  },
  {
    slug: 'how-to-read-blood-test-results',
    title: 'How to Read Blood Test Results: CBC, CMP, A1c Guide',
    description:
      'How to read blood test results — what CBC, CMP, lipid, A1c, and thyroid markers mean, the typical reference ranges, what high/low flags suggest, and the right next steps.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🩸',
  },
  {
    slug: 'cheapest-dexa-scan',
    title: 'Cheapest DEXA Scan (2026): How to Pay Under $50',
    description: 'The cheapest ways to get a body-composition DEXA scan in 2026 — mobile vans, memberships (~$40/scan), multi-scan packages, and university labs — plus what to watch for before booking the lowest price.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '💰',
  },
  {
    slug: 'how-to-read-dexa-results',
    title: 'How to Read DEXA Scan Results: Body Comp & Bone',
    description:
      'How to read a DEXA report — body-fat %, lean mass, visceral fat (VAT), android/gynoid ratio, and the T-score vs Z-score on the bone-density page, with the real reference ranges to look for.',
    category: 'Local Services',
    readTime: '11 min',
    icon: '📊',
  },
  {
    slug: 'how-often-should-you-get-a-dexa-scan',
    title: 'How Often Should You Get a DEXA Scan? (2026 Guide)',
    description:
      'How often to get a DEXA scan: every 8-12 weeks for active body recomposition, twice a year for maintenance — plus the radiation math behind a safe scanning cadence.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'vo2-max-test-cost',
    title: 'VO2 Max Test Cost (2026): Prices, Where & Is It Worth It',
    description:
      'What a VO2 max test costs in 2026 — $99-$175 at fitness studios, $300-$600+ for a clinical CPET. Where to get one and whether it is worth it.',
    category: 'Local Services',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'rmr-test-cost',
    title: 'RMR Test Cost (2026): Resting Metabolic Rate Prices',
    description:
      'What a resting metabolic rate (RMR) test costs in 2026 — typically $50-$179 cash-pay (UC Davis $85, Fitnescity from $110, DexaScan $129, DexaFit ~$179) — how the indirect-calorimetry breath test works, and how the result sets your calorie target.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '🔥',
  },
  {
    slug: 'is-stem-cell-therapy-in-mexico-safe',
    title: 'Is Stem Cell Therapy in Mexico Safe? Risks & Red Flags (2026)',
    description:
      'Is stem cell therapy in Mexico safe? How COFEPRIS regulation actually works, the documented infection risks (CDC-traced 2022 outbreak), the red flags, and how to vet a clinic before you travel.',
    category: 'Medical Tourism',
    readTime: '12 min',
    icon: '🛡️',
  },
  {
    slug: 'is-plastic-surgery-in-turkey-safe',
    title: 'Is Plastic Surgery in Turkey Safe? Risks & How to Vet',
    description:
      'Is plastic surgery in Turkey safe? What JCI accreditation really means, the real clinical and medical-tourism risks, the red flags, and a surgeon-vetting checklist before you book.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '🛡️',
  },
  {
    slug: 'hair-transplant-turkey-cost',
    title: 'Hair Transplant Turkey Cost (2026): FUE vs DHI Prices',
    description:
      'What a hair transplant in Turkey costs in 2026 — FUE vs DHI per-graft and all-inclusive package prices ($2,000-$6,500), what packages include, how it compares to the US, and how to vet a clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💇',
  },
  {
    slug: 'bodyspec-dexa-scan-cost',
    title: 'BodySpec DEXA Scan Cost (2026): Prices & Membership',
    description:
      'What a BodySpec DEXA scan costs in 2026 — one-time scans from ~$40 (baseline ~$59.95), $39.95/mo & $49.95/qtr memberships, the mobile-van model, what is included, and how it compares to hospital, DexaFit, InBody & Bod Pod.',
    category: 'Comparison',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexafit-cost',
    title: 'DexaFit Cost (2026): DEXA, VO2 Max, RMR & Bundles',
    description:
      'What DexaFit charges in 2026 — DEXA scans, VO2 max, and RMR tests plus 2-/3-service bundles by location ($119-$575), and how DexaFit pricing compares to BodySpec.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'everlywell-review',
    title: 'Everlywell Review (2026): Cost, Accuracy & Alternatives',
    description: 'A cost-focused Everlywell review — real 2026 test prices ($49-$299), the $39/mo Everlywell+ membership, CLIA-certified lab accuracy, pros and cons, and cheaper alternatives.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'function-health-review',
    title: 'Function Health Review (2026): Cost, Biomarkers & Alternatives',
    description: 'Function Health review — the ~$365/year 100+ biomarker membership: what you get, pricing, accuracy via Quest, HSA/FSA eligibility, and how it compares to SuperPower and InsideTracker.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🧬',
  },
  {
    slug: 'marek-health-review',
    title: 'Marek Health Review (2026): Cost, Labs & Who It Is For',
    description:
      'An independent review of Marek Health, the cash-pay hormone-optimization and lab-testing platform — $250 intake, $150-$1,950 panels, ~$2,500-$5,400/yr all-in TRT, and who it actually fits.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧪',
  },
  // Batch 1 cost-transparency cluster (2026-06-23): DEXA, medical tourism, at-home labs
  {
    slug: 'blood-test-without-a-doctor',
    title: 'Blood Test Without a Doctor: Order Labs Yourself',
    description: 'How to get a blood test without a doctor in the US: how self-order (direct-access) labs work, what they cost ($30-850), which states restrict it, and what to test.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🩸',
  },
  {
    slug: 'cheapest-blood-test-panels',
    title: 'Cheapest Blood Test Panels (2026): Prices Compared',
    description: 'The cheapest blood test panels you can buy without a doctor — Ulta Lab Tests, Labcorp OnDemand, Quest Health, SuperPower & Function Health pricing compared by panel type, with cash-pay and HSA/FSA tips.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '💉',
  },
  {
    slug: 'dexa-scan-cost-los-angeles',
    title: 'DEXA Scan Cost in Los Angeles (2026): Prices by Provider',
    description: 'What a body-composition DEXA scan costs across LA in 2026 — mobile vans from ~$39, studios $99-179, hospital $150-400 — plus real LA providers and how to save.',
    category: 'Local Services',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'dexa-scan-cost-new-york',
    title: 'DEXA Scan Cost in New York City (2026 Price Guide)',
    description: 'What a body-composition DEXA scan costs in NYC in 2026 — from $39.95 BodySpec mobile vans to $255 studio packages. Six real, verified New York clinics, what drives the price, and how to book.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '📊',
  },
  {
    slug: 'dexa-vs-inbody-vs-bodpod',
    title: 'DEXA vs InBody vs Bod Pod: Body Composition Test Guide',
    description:
      'Compare the three common body composition tests — DEXA, InBody (BIA), and Bod Pod (air displacement) — on accuracy, cost ($45-179), radiation, and what each actually measures.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'egg-freezing-abroad-cost',
    title: 'Egg Freezing Abroad Cost (2026): Prices vs the US',
    description: 'What egg freezing (oocyte cryopreservation) costs abroad vs the US — Spain, Czech Republic, Greece & North Cyprus per-cycle pricing, what is included, the eligibility laws that decide where you can later use your eggs, and how to choose a clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '🥚',
  },
  {
    slug: 'gastric-bypass-turkey-cost',
    title: 'Gastric Bypass Turkey Cost (2026): Prices vs the US',
    description:
      'What Roux-en-Y gastric bypass costs in Turkey vs the US — ~$4,000-$7,200 all-inclusive Istanbul packages vs $15,000-$26,000 self-pay, what is included, JCI-accredited hospitals, risks, and how to vet a surgeon before you travel.',
    category: 'Medical Tourism',
    readTime: '12 min',
    icon: '💲',
  },
  {
    slug: 'india-medical-tourism-guide',
    title: 'India Medical Tourism: Cost, Hospitals & Safety Guide',
    description: 'Cardiac, orthopedic, oncology, and IVF costs in India vs the US, JCI/NABH-accredited hospitals (Apollo, Fortis, Max, Narayana Health), the e-Medical Visa, and how to vet a clinic before you book.',
    category: 'Medical Tourism',
    readTime: '16 min',
    icon: '🇮🇳',
  },
  {
    slug: 'is-dexa-scan-hsa-fsa-eligible',
    title: 'Is a DEXA Scan HSA/FSA Eligible? Rules & Costs (2026)',
    description: 'Yes — usually. A DEXA scan is HSA/FSA/HRA eligible when it is medical care (e.g., osteoporosis screening). When you need a Letter of Medical Necessity, what it costs, and how to pay.',
    category: 'Local Services',
    readTime: '9 min',
    icon: '💳',
  },
  {
    slug: 'quest-vs-labcorp-pricing',
    title: 'Quest Diagnostics vs Labcorp Prices: Self-Pay Cost Guide',
    description: 'Quest (questhealth.com) vs Labcorp (OnDemand) self-pay lab pricing compared—starting costs, panels, locations, turnaround, and how to decide which is cheaper for your test.',
    category: 'Comparison',
    readTime: '9 min',
    icon: '🧪',
  },
  {
    slug: 'rhinoplasty-turkey-cost',
    title: 'Rhinoplasty Turkey Cost (2026): Istanbul Prices vs the US',
    description: 'What a nose job costs in Turkey vs the US — primary, ultrasonic, ethnic, and revision rhinoplasty estimates, what all-inclusive Istanbul packages include, and how to vet an accredited surgeon safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'tijuana-medical-tourism-guide',
    title: 'Tijuana Medical Tourism: Dental, Bariatric & Stem Cell',
    description: 'Mexico\'s busiest medical hub, 20 minutes from San Diego. Dental, bariatric, and stem cell care — cost estimates vs the US, border-crossing logistics, and how to vet a clinic.',
    category: 'Destination Guide',
    readTime: '14 min',
    icon: '🇲🇽',
  },
  // Deepening cycle 2 — supporting guides for new money pages (2026-06)
  {
    slug: 'oura-vs-whoop',
    title: 'Oura Ring vs WHOOP: 2026 Comparison',
    description: 'Recovery wearables compared — ring vs band, sleep vs training-load tracking, price models, and which fits your goals. Both are consumer wellness devices, not medical devices.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⌚',
  },
  {
    slug: 'tretinoin-online',
    title: 'Tretinoin Online: How to Get It in 2026',
    description: 'How online dermatology services prescribe tretinoin for acne and anti-aging — why it is prescription-only, what to expect, costs, and how Curology, Apostrophe, and Musely compare.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧴',
  },
  {
    slug: 'online-ed-treatment',
    title: 'How to Get ED Treatment Online (2026 Guide)',
    description: 'The FDA-approved ED medications, how telehealth treatment works, what Hims, Ro, and BlueChew offer, costs, and safety — including when ED can signal an underlying issue.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧔',
  },
  {
    slug: 'best-nad-supplement',
    title: 'NMN vs NR: Best NAD+ Supplement in 2026?',
    description: 'The two main NAD+ precursors compared on evidence, regulatory status, and cost — plus how to evaluate brands and where stronger-evidence basics fit in.',
    category: 'Longevity',
    readTime: '11 min',
    icon: '💊',
  },
  {
    slug: 'laser-hair-removal-cost',
    title: 'How Much Does Laser Hair Removal Cost? (2026)',
    description: 'Per-session vs package pricing by body area, why it takes a series of treatments, pricing models (including unlimited plans), and what affects the total cost.',
    category: 'Procedure Guide',
    readTime: '9 min',
    icon: '⚡',
  },
  // Longevity, performance & wellness expansion (2026-06)
  {
    slug: 'cgm-without-diabetes',
    title: 'Continuous Glucose Monitor Without Diabetes (2026)',
    description: 'How healthy people use OTC continuous glucose monitors (Stelo, Lingo, Levels) to see how food, exercise, and sleep move their glucose — what you learn, accuracy caveats, and costs.',
    category: 'Longevity',
    readTime: '10 min',
    icon: '📈',
  },
  {
    slug: 'rapamycin-for-longevity',
    title: 'Rapamycin for Longevity: Access, Cost & Evidence (2026)',
    description: 'The honest guide to rapamycin for longevity — why researchers are interested, the unproven off-label reality (not FDA-approved for aging), how telehealth access works, costs, and risks.',
    category: 'Longevity',
    readTime: '11 min',
    icon: '⏳',
  },
  {
    slug: 'online-menopause-treatment',
    title: 'Online Menopause Treatment & HRT: 2026 Guide',
    description: 'Perimenopause and menopause symptoms, hormone vs non-hormonal options, the modern safety picture of HRT, how telehealth menopause care works, and what it costs.',
    category: 'Telehealth',
    readTime: '11 min',
    icon: '🌸',
  },
  {
    slug: 'betterhelp-vs-talkspace',
    title: 'BetterHelp vs Talkspace vs Brightside (2026)',
    description: 'Online therapy and psychiatry compared — medication vs therapy-only, insurance coverage, format, and pricing — to help you pick the right platform.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🧠',
  },
  {
    slug: 'botox-cost-guide',
    title: 'How Much Does Botox Cost? 2026 Price Guide',
    description: 'Per-unit vs per-area Botox pricing, how many units common areas take, what affects the price, how long results last, and how to save safely at a reputable med spa.',
    category: 'Procedure Guide',
    readTime: '9 min',
    icon: '💉',
  },
  // Medical Tourism expansion (2026-06)
  {
    slug: 'thailand-cosmetic-surgery-cost',
    title: 'Cosmetic Surgery Thailand Cost (2026): Prices vs the US',
    description: 'Rhinoplasty, breast augmentation, facelift, liposuction, and tummy tuck costs in Thailand (Bangkok & Phuket) vs the US — what is included, why it is 50-70% cheaper, and how to choose an accredited clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'brazil-plastic-surgery-cost',
    title: 'Brazil Plastic Surgery Cost in 2026: BBL, Lipo & Tummy Tuck',
    description: 'BBL, liposuction, tummy tuck, breast augmentation, and mommy makeover costs in Brazil vs the US — what is included, why it is cheaper, and how to choose a clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'hungary-dental-cost',
    title: 'Hungary Dental Cost (2026): Implants, All-on-4 & Crowns',
    description: 'What dental implants, All-on-4, and crowns cost in Hungary vs the US — procedure by procedure across Budapest and the Austrian-border clinics, plus what is included, why it is 50-70% cheaper, and how to vet an accredited clinic.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '🦷',
  },
  {
    slug: 'colombia-plastic-surgery-cost',
    title: 'Colombia Plastic Surgery Cost 2026: BBL, Lipo & Breast vs US',
    description: 'What plastic surgery costs in Colombia vs the US, procedure by procedure — BBL, liposuction, breast augmentation, tummy tuck — across Medellín, Bogotá, Cali & Cartagena, plus what is included and how to vet an accredited surgeon.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'costa-rica-cosmetic-surgery-cost',
    title: 'Costa Rica Cosmetic Surgery Cost (2026): Prices vs the US',
    description: 'What plastic surgery costs in Costa Rica vs the US, procedure by procedure — breast augmentation, tummy tuck, liposuction, mommy makeover, facelift, BBL — plus what is included and how to vet an accredited clinic.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'korea-plastic-surgery-cost',
    title: 'South Korea Plastic Surgery Cost (2026): Procedure Price Guide',
    description: 'What plastic surgery costs in South Korea vs the US, procedure by procedure — rhinoplasty, double eyelid, V-line, breast, facelift — plus what is included and how to vet an accredited clinic.',
    category: 'Medical Tourism',
    readTime: '10 min',
    icon: '💲',
  },
  {
    slug: 'panama-dental-cost',
    title: 'Panama Dental Cost 2026: Implants & Crowns vs US Prices',
    description: 'Implants and crowns in Panama City cost 50-70% less than the US — procedure-by-procedure pricing, what is included, and how to vet a clinic safely.',
    category: 'Medical Tourism',
    readTime: '10 min',
    icon: '🦷',
  },
  {
    slug: 'spain-ivf-cost',
    title: 'Spain IVF Cost in 2026: US vs Spain Price Comparison',
    description: 'What IVF and egg donation actually cost in Spain vs the US, procedure by procedure, plus what is included, why it is cheaper, and how to vet a clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'czech-ivf-cost',
    title: 'IVF Czech Republic Cost (2026): Prices vs US & Savings',
    description: 'What IVF and egg donation cost in the Czech Republic vs the US — own-egg and donor-egg cycles, what is included, why it is 60-80% cheaper, and how to choose a Prague clinic safely.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💲',
  },
  {
    slug: 'stem-cell-therapy-cost',
    title: 'Stem Cell Therapy Cost in 2026: US vs Mexico, Panama & Abroad',
    description: 'What stem cell therapy actually costs in the US vs Mexico and Panama, by condition, plus how to vet clinics and avoid overpaying.',
    category: 'Medical Tourism',
    readTime: '11 min',
    icon: '💉',
  },
  {
    slug: 'stem-cell-knees-mexico',
    title: 'Stem Cell Therapy for Knees Abroad: Cost, Mexico & What to Know (2026)',
    description: 'Knee stem cell therapy costs, what the evidence actually shows, and how US vs Mexico options compare for osteoarthritis.',
    category: 'Medical Tourism',
    readTime: '10 min',
    icon: '🦵',
  },
  {
    slug: 'los-algodones-reviews',
    title: 'Los Algodones Dentist Reviews: Is It Safe? (2026 Trust Guide)',
    description: 'How to vet "Molar City" dentists in Los Algodones, Mexico — credentials, real review sources, pricing, and red flags before you book.',
    category: 'Medical Tourism',
    readTime: '9 min',
    icon: '🦷',
  },
  // NEW: High-Priority SEO Content (Tier 1)
  {
    slug: 'compounded-semaglutide',
    title: 'Compounded Semaglutide: What You Need to Know in 2025',
    description: 'FDA status, legal changes, safety concerns, costs vs brand-name, and what alternatives exist now that the shortage has ended.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '⚠️',
  },
  {
    slug: 'trt-testosterone-therapy',
    title: 'TRT Guide: Complete Testosterone Replacement Therapy Explained',
    description: 'Symptoms of low T, treatment options, costs ($150-250/mo), benefits, risks, and how to get started with online TRT clinics.',
    category: 'Telehealth',
    readTime: '15 min',
    icon: '💪',
  },
  {
    slug: 'hims-vs-ro-vs-calibrate',
    title: 'Hims vs Ro vs Calibrate: GLP-1 Weight Loss Comparison',
    description: 'Side-by-side comparison of the three most popular telehealth weight loss programs—pricing, medications, coaching, and which is best for you.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '⚖️',
  },
  {
    slug: 'all-on-4-dental-implants-mexico',
    title: 'All-on-4 Dental Implants in Mexico: Complete Guide',
    description: 'Save 60-70% on full-arch implants. Costs ($8K-12K vs $20K+ in US), top clinics in Tijuana & Cancun, and trip planning.',
    category: 'Dental Tourism',
    readTime: '12 min',
    icon: '🦷',
  },
  {
    slug: 'hair-transplant-grafts-guide',
    title: 'How Many Hair Grafts Do I Need?',
    description: 'Norwood scale explained, graft estimates by hair loss stage, density calculations, and cost per graft by country.',
    category: 'Hair Transplant',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'best-online-trt-clinics',
    title: 'Best Online TRT Clinics Compared (2025)',
    description: 'Fountain TRT vs Marek Health vs TRT Nation: pricing, services, and which clinic is best for your needs.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🏆',
  },
  // NEW: Tier 2 SEO Content
  {
    slug: 'fue-vs-dhi',
    title: 'FUE vs DHI Hair Transplant: Complete Comparison',
    description: 'Detailed comparison of FUE and DHI hair transplant techniques—costs, recovery, results, and which method is best for your hair loss pattern.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '💇',
  },
  {
    slug: 'hair-transplant-recovery-timeline',
    title: 'Hair Transplant Recovery Timeline: Day-by-Day Guide',
    description: 'Complete recovery timeline from day 1 to month 18—what to expect, healing stages, when to return to work, exercise, and see final results.',
    category: 'Recovery Guide',
    readTime: '15 min',
    icon: '📅',
  },
  {
    slug: 'bbl-surgery-mexico',
    title: 'BBL Surgery in Mexico: Safety & Cost Guide',
    description: 'Brazilian Butt Lift in Mexico: costs ($3,500-7,000), safety data, mortality rates, choosing surgeons, and critical safety information.',
    category: 'Procedure Guide',
    readTime: '15 min',
    icon: '🍑',
  },
  {
    slug: 'bodyspec-vs-dexafit',
    title: 'BodySpec vs DexaFit: DEXA Scan Comparison',
    description: 'Compare the two leading body composition scanning services—pricing ($40-60 vs $119-179), locations, reports, and which is best for you.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '📊',
  },
  {
    slug: 'nad-therapy-guide',
    title: 'NAD+ Therapy: IV Infusions & Evidence Guide',
    description: 'Complete NAD+ therapy guide covering IV infusions, oral supplements, costs ($250-2,000), and what the science actually says.',
    category: 'Longevity',
    readTime: '15 min',
    icon: '🧬',
  },
  {
    slug: 'los-algodones-dental-guide',
    title: 'Los Algodones Dental Guide: Molar City',
    description: '350+ dental clinics, 50-70% savings. Complete guide to "Molar City"—choosing a dentist, border crossing, and trip planning.',
    category: 'Destination Guide',
    readTime: '18 min',
    icon: '🦷',
  },
  {
    slug: 'everlywell-vs-letsgetchecked',
    title: 'Everlywell vs LetsGetChecked Comparison',
    description: 'At-home lab test comparison—pricing, test selection, accuracy, turnaround time, and which service is best for different needs.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'peptide-therapy-guide',
    title: 'Peptide Therapy: BPC-157, TB-500 & More',
    description: 'Complete peptide guide covering BPC-157, TB-500, growth hormone secretagogues. FDA regulations, costs, and what science says.',
    category: 'Longevity',
    readTime: '18 min',
    icon: '💉',
  },
  {
    slug: 'mommy-makeover-mexico',
    title: 'Mommy Makeover in Mexico: Complete Guide',
    description: 'Mommy makeover surgery in Mexico: costs ($5,500-14,000 vs $20K+ in US), procedures, choosing a surgeon, and recovery planning.',
    category: 'Procedure Guide',
    readTime: '16 min',
    icon: '👶',
  },
  // Longevity & Stem Cell Guides
  {
    slug: 'mexico-stem-cell-guide',
    title: 'Stem Cell Therapy in Mexico: Complete Guide',
    description: 'Clinics in Tijuana, Los Cabos, Puerto Vallarta & Cancun. Costs from $3,750, what to expect, safety considerations, and regulatory disclaimers.',
    category: 'Longevity',
    readTime: '20 min',
    icon: '🇲🇽',
  },
  {
    slug: 'panama-stem-cell-guide',
    title: 'Panama Stem Cell Therapy: Golden Cells Guide',
    description: 'Stem Cell Institute, Golden Cells (umbilical cord MSCs), NFL athlete testimonials. Premium destination at $25,000-60,000.',
    category: 'Longevity',
    readTime: '20 min',
    icon: '🇵🇦',
  },
  {
    slug: 'colombia-stem-cell-guide',
    title: 'Colombia Stem Cell Therapy: BioXcellerator Guide',
    description: 'Medellin\'s all-inclusive stem cell packages. BioXcellerator, 300M+ cells, 40-60% savings vs Panama.',
    category: 'Longevity',
    readTime: '18 min',
    icon: '🇨🇴',
  },
  {
    slug: 'cayman-islands-stem-cell-guide',
    title: 'Cayman Islands Stem Cells: Expanded Cells Guide',
    description: 'DVC Stem, Regenexx-C. Only destination with expanded stem cells AND strict US/UK-level regulation.',
    category: 'Longevity',
    readTime: '16 min',
    icon: '🇰🇾',
  },
  {
    slug: 'dubai-longevity-guide',
    title: 'Dubai Longevity & Stem Cell Guide',
    description: 'AEON Clinic at Atlantis The Royal, Victor Longevity. Luxury regenerative medicine in the desert.',
    category: 'Longevity',
    readTime: '15 min',
    icon: '🇦🇪',
  },
  // Procedure-Specific Guides (High-intent)
  {
    slug: 'mexico-dental-guide',
    title: 'Mexico Dental Guide: Tijuana, Los Algodones, Cancun',
    description: 'Complete guide to dental work in Mexico. Implants from $750, All-on-4 from $7,500. Compare destinations, find safe clinics.',
    category: 'Procedure Guide',
    readTime: '16 min',
    icon: '🦷',
  },
  {
    slug: 'plastic-surgery-korea-guide',
    title: 'Plastic Surgery in Korea: Gangnam Clinics Guide',
    description: 'Why Seoul is the world capital of cosmetic surgery. Rhinoplasty, double eyelid, V-line. Top clinics, costs, recovery.',
    category: 'Procedure Guide',
    readTime: '18 min',
    icon: '✨',
  },
  {
    slug: 'hair-transplant-turkey-guide',
    title: 'Hair Transplant in Turkey: Complete Guide',
    description: 'FUE vs DHI techniques, choosing a safe clinic, costs, and what to expect from Istanbul.',
    category: 'Procedure Guide',
    readTime: '15 min',
    icon: '💇',
  },
  {
    slug: 'gastric-sleeve-mexico-safety',
    title: 'Gastric Sleeve in Mexico: Safety Guide',
    description: 'Is bariatric surgery in Tijuana safe? Safety data, choosing a surgeon, and what to expect.',
    category: 'Procedure Guide',
    readTime: '12 min',
    icon: '⚖️',
  },
  {
    slug: 'glp1-weight-loss-complete-guide',
    title: 'GLP-1 for Weight Loss: Complete Guide',
    description: 'Everything about semaglutide and tirzepatide—how they work, results, side effects, and costs.',
    category: 'Telehealth',
    readTime: '12 min',
    icon: '💊',
  },
  // Comparison Guides
  {
    slug: 'us-vs-mexico-stem-cells',
    title: 'US vs Mexico Stem Cell Therapy',
    description: 'Cost, legality, and safety comparison. FDA regulations vs COFEPRIS, and which approach is right for you.',
    category: 'Comparison',
    readTime: '15 min',
    icon: '🆚',
  },
  {
    slug: 'panama-vs-cayman-stem-cells',
    title: 'Panama vs Cayman Islands Stem Cells',
    description: 'Premium destination comparison: Golden Cells vs expanded autologous, single trip vs two-trip process.',
    category: 'Comparison',
    readTime: '14 min',
    icon: '🔄',
  },
  {
    slug: 'mexico-vs-costa-rica-dental',
    title: 'Mexico vs Costa Rica for Dental Work',
    description: 'Which country is better for your dental work? Price comparison, quality, convenience, and recommendations.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '⚖️',
  },
  {
    slug: 'spain-vs-czech-ivf',
    title: 'Spain vs Czech Republic for IVF',
    description: 'Europe\'s top IVF destinations compared. Success rates, donor availability, costs, and which to choose.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⚖️',
  },
  {
    slug: 'turkey-vs-mexico-medical-tourism',
    title: 'Turkey vs Mexico: Medical Tourism Compared',
    description: 'The world\'s two biggest medical tourism destinations. Which is better for your procedure?',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⚖️',
  },
  // Destination Trip Planners
  {
    slug: 'mexico-medical-tourism-planner',
    title: 'Mexico Medical Tourism: Trip Planner',
    description: 'Complete planning guide: border crossing, Tijuana vs Los Algodones, packing list, and trip timeline.',
    category: 'Trip Planning',
    readTime: '15 min',
    icon: '🇲🇽',
  },
  {
    slug: 'turkey-hair-transplant-trip-planner',
    title: 'Turkey Hair Transplant: Trip Planner',
    description: 'Your 7-day Istanbul itinerary: flights, hotels, what to pack, and recovery timeline.',
    category: 'Trip Planning',
    readTime: '14 min',
    icon: '🇹🇷',
  },
  {
    slug: 'thailand-medical-tourism-guide',
    title: 'Thailand Medical Tourism: Complete Guide',
    description: 'Bangkok\'s JCI-accredited hospitals, costs, trip planning. Bumrungrad, Samitivej, BNH reviews.',
    category: 'Trip Planning',
    readTime: '18 min',
    icon: '🇹🇭',
  },
  {
    slug: 'costa-rica-dental-guide',
    title: 'Costa Rica Dental Tourism Guide',
    description: 'US-trained dentists, premium implants, 50-70% savings. San Jose clinics and trip planning.',
    category: 'Trip Planning',
    readTime: '14 min',
    icon: '🇨🇷',
  },
  {
    slug: 'spain-fertility-ivf-guide',
    title: 'Spain IVF & Fertility Tourism Guide',
    description: 'Europe\'s #1 fertility destination. Donor egg success rates 55-60%, clinic comparisons, costs.',
    category: 'Trip Planning',
    readTime: '16 min',
    icon: '🇪🇸',
  },
  // Practical & Reference
  {
    slug: 'at-home-lab-testing-guide',
    title: 'At-Home Lab Testing Guide',
    description: 'How at-home blood tests work, accuracy vs doctor labs, and what biomarkers to track.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'dexa-scan-guide',
    title: 'DEXA Scan: Complete Guide',
    description: 'What DEXA measures, why it beats BMI, costs, and how to use it to track real fitness progress.',
    category: 'Local Services',
    readTime: '8 min',
    icon: '📊',
  },
  {
    slug: 'medical-travel-insurance-guide',
    title: 'Medical Travel Insurance Guide',
    description: 'What standard travel insurance covers vs doesn\'t, medical tourism-specific insurance, and what you actually need.',
    category: 'Trip Planning',
    readTime: '10 min',
    icon: '🛡️',
  },
  {
    slug: 'us-healthcare-by-region',
    title: 'US Healthcare by Region',
    description: 'Comprehensive guide to top hospitals and health systems across California, Texas, Florida, New York, Arizona, and Colorado.',
    category: 'Research',
    readTime: '20 min',
    icon: '🏥',
  },
];

export default function GuidesIndex() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health & Wellness Guides
          </h1>
          <p className="text-xl text-gray-600">
            Evidence-based guides to help you make informed decisions about cash-pay health services.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{guide.icon}</span>
                <span className="text-xs text-gray-500">{guide.readTime}</span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-medium text-blue-600">{guide.category}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                {guide.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3">
                {guide.description}
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Read guide →
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-3">More Guides Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            We&apos;re researching and writing guides on:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              India Cardiac Surgery
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              Rhinoplasty in Korea
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              HRT for Women Guide
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              Germany Cancer Treatment
            </span>
          </div>
        </div>
      </section>

      {/* Why Trust Our Guides */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Trust Our Guides?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl mb-3">
                📚
              </div>
              <h3 className="font-semibold">Research-Backed</h3>
              <p className="mt-2 text-sm text-gray-600">
                Every guide cites peer-reviewed studies, clinical trials, and verified medical sources.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl mb-3">
                💬
              </div>
              <h3 className="font-semibold">Plain English</h3>
              <p className="mt-2 text-sm text-gray-600">
                No medical jargon walls. We explain complex topics in language anyone can understand.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl mb-3">
                ⚖️
              </div>
              <h3 className="font-semibold">Honest Tradeoffs</h3>
              <p className="mt-2 text-sm text-gray-600">
                We present pros AND cons. No hype, no hidden agendas—just honest information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centurion Coach Promo */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-gradient-to-r from-cyan-500 to-sky-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Free iOS App
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Track Your Health Journey with Centurion Coach
              </h3>
              <p className="text-cyan-100 mb-6">
                Done researching? Put your plan into action. Track nutrition, supplements, labs, and progress all in one place with AI-powered coaching.
              </p>
              <Link
                href="/centurioncoach"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="text-6xl md:text-8xl">🏛️</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
