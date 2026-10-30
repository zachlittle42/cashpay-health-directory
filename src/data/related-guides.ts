export type RelatedGuideItem = {
  href: string;
  label: string;
  blurb?: string;
};

export type GuideCluster = {
  id: string;
  hub?: RelatedGuideItem;
  guides: RelatedGuideItem[];
};

function normalizePath(path: string): string {
  const stripped = path.split('#')[0].split('?')[0].trim();
  if (stripped.length > 1 && stripped.endsWith('/')) {
    return stripped.slice(0, -1);
  }
  return stripped || '/';
}

function pathOf(item: RelatedGuideItem): string {
  return normalizePath(item.href);
}

function uniqueItems(
  items: RelatedGuideItem[],
  excludePath: string,
  limit: number,
): RelatedGuideItem[] {
  const seen = new Set<string>();
  const out: RelatedGuideItem[] = [];
  for (const item of items) {
    const key = pathOf(item);
    if (key === excludePath || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Topic clusters for internal discovery. Every href is a live App Router path.
 * More-specific clusters are listed first so spoke pages resolve to their
 * primary cluster when a path also appears on a broader hub (e.g. /telehealth).
 */
export const GUIDE_CLUSTERS: GuideCluster[] = [
  {
    id: 'ed',
    hub: {
      href: '/mens-health',
      label: "Men's health hub",
      blurb: 'Compare online ED and hair-loss clinics on one page.',
    },
    guides: [
      {
        href: '/guides/online-ed-treatment',
        label: 'Online ED treatment',
        blurb: 'Compare provider prices, prescription routes, fees and renewal terms.',
      },
      {
        href: '/guides/hair-loss-treatment-cost',
        label: 'Hair-loss treatment cost',
        blurb: 'Finasteride, minoxidil and telehealth hair-loss plan prices compared.',
      },
      {
        href: '/guides/hims-vs-ro-cost',
        label: 'Hims vs Ro cost',
        blurb: 'ED generics and GLP-1 membership prices, side by side.',
      },
      {
        href: '/guides/bluechew-cost',
        label: 'BlueChew cost',
        blurb: 'SIL and TAD prices by tablet count, shipping and renewal checks.',
      },
      {
        href: '/guides/sildenafil-cost-without-insurance',
        label: 'Sildenafil cost without insurance',
        blurb: 'Separate the cash pharmacy fill, shipping and clinician visit.',
      },
    ],
  },
  {
    id: 'trt',
    hub: {
      href: '/mens-health',
      label: "Men's health hub",
      blurb: 'ED, hair loss, and the same telehealth brands in one compare grid.',
    },
    guides: [
      {
        href: '/guides/best-online-trt-clinics',
        label: 'Best online TRT clinics',
        blurb: 'Membership vs all-in quotes from clinics that publish a number.',
      },
      {
        href: '/guides/trt-cost',
        label: 'TRT cost',
        blurb: 'Verified monthly testosterone-therapy prices and what they include.',
      },
      {
        href: '/guides/trt-testosterone-therapy',
        label: 'TRT testosterone therapy guide',
        blurb: 'Who testosterone replacement is for and the safety picture.',
      },
      {
        href: '/trt',
        label: 'TRT hub',
        blurb: 'Online testosterone clinics compared side by side.',
      },
    ],
  },
  {
    id: 'weight-glp1',
    hub: {
      href: '/glp1',
      label: 'GLP-1 programs hub',
      blurb: 'Compare cash-pay semaglutide and tirzepatide programs.',
    },
    guides: [
      {
        href: '/guides/ro-body-weight-loss-cost',
        label: 'Ro Body weight-loss cost',
        blurb: 'Membership plus medication — what Ro Body actually costs per month.',
      },
      {
        href: '/guides/hims-vs-ro-cost',
        label: 'Hims vs Ro cost',
        blurb: 'Hims vs Ro membership and meds — ED plans plus GLP-1 membership.',
      },
      {
        href: '/guides/noom-vs-weightwatchers-cost',
        label: 'Noom vs WeightWatchers cost',
        blurb: 'App-only vs Med+ vs Noom Med, and when a GLP-1 clinic is cheaper.',
      },
      {
        href: '/guides/best-glp1-weight-loss-programs',
        label: 'Best GLP-1 weight-loss programs',
        blurb: 'Programs compared on price, telehealth, and ongoing support.',
      },
      {
        href: '/guides/cheapest-glp1-without-insurance',
        label: 'Cheapest GLP-1 without insurance',
        blurb: 'Lowest cash-pay paths to semaglutide and tirzepatide.',
      },
      {
        href: '/guides/glp1-weight-loss-complete-guide',
        label: 'GLP-1 weight-loss complete guide',
        blurb: 'How GLP-1s work, typical results, and side effects.',
      },
      {
        href: '/guides/hims-vs-ro-vs-calibrate',
        label: 'Hims vs Ro vs Calibrate',
        blurb: 'Three telehealth weight-loss brands compared on price and extras.',
      },
      {
        href: '/guides/cheapest-way-to-get-semaglutide',
        label: 'Cheapest way to get semaglutide',
        blurb: 'Cash-pay options ranked by what you actually pay.',
      },
      {
        href: '/guides/wegovy-vs-ozempic',
        label: 'Wegovy vs Ozempic',
        blurb: 'How the two semaglutide brands compare on cost and use.',
      },
    ],
  },
  {
    id: 'labs',
    hub: {
      href: '/labs',
      label: 'Cash-pay labs hub',
      blurb: 'Function, SuperPower, Quest, and Labcorp side by side.',
    },
    guides: [
      {
        href: '/guides/function-vs-superpower-cost',
        label: 'Function vs Superpower cost',
        blurb: 'Annual lab memberships compared — $365 vs $349 and what each includes.',
      },
      {
        href: '/guides/std-testing-cost',
        label: 'STD testing cost',
        blurb: 'At-home kits, self-order lab panels and free or low-cost testing options.',
      },
      {
        href: '/guides/quest-vs-labcorp-pricing',
        label: 'Quest vs Labcorp pricing',
        blurb: 'Published self-pay line items from the two major labs.',
      },
      {
        href: '/guides/cheapest-blood-test-panels',
        label: 'Cheapest blood test panels',
        blurb: 'Lowest cash-pay panels and where to order them.',
      },
      {
        href: '/guides/function-health-review',
        label: 'Function Health review',
        blurb: 'The 100+ biomarker membership, tested and priced.',
      },
      {
        href: '/guides/blood-test-without-a-doctor',
        label: 'Blood test without a doctor',
        blurb: 'How self-order labs work and what they cost.',
      },
      {
        href: '/guides/allergy-testing-cost',
        label: 'Allergy testing cost',
        blurb: 'Skin-prick vs IgE blood panels and cash-pay kit prices.',
      },
      {
        href: '/guides/best-at-home-lab-tests',
        label: 'Best at-home lab tests',
        blurb: 'Top kits compared on panels, price, and turnaround.',
      },
      {
        href: '/guides/at-home-lab-testing-guide',
        label: 'At-home lab testing guide',
        blurb: 'How it works, accuracy, and what to test.',
      },
      {
        href: '/guides/are-at-home-blood-tests-accurate',
        label: 'Are at-home blood tests accurate?',
        blurb: 'What the evidence says on reliability and limits.',
      },
    ],
  },
  {
    id: 'therapy',
    hub: {
      href: '/mental-health',
      label: 'Online therapy & psychiatry',
      blurb: 'BetterHelp, Talkspace, and Brightside compared on price and format.',
    },
    guides: [
      {
        href: '/guides/online-therapy-cost',
        label: 'Online therapy cost',
        blurb: 'Weekly vs monthly plans and sliding-scale options without insurance.',
      },
      {
        href: '/guides/betterhelp-vs-talkspace',
        label: 'BetterHelp vs Talkspace',
        blurb: 'Therapy vs psychiatry, insurance, and published pricing.',
      },
    ],
  },
  {
    id: 'cgm',
    hub: {
      href: '/cgm',
      label: 'CGM hub',
      blurb: 'Over-the-counter continuous glucose monitors compared.',
    },
    guides: [
      {
        href: '/guides/cgm-without-diabetes',
        label: 'CGM without diabetes',
        blurb: 'Stelo, Lingo, Levels, and Nutrisense — what you actually pay.',
      },
    ],
  },
  {
    id: 'telehealth',
    hub: {
      href: '/telehealth',
      label: 'Telehealth hub',
      blurb: 'Cash-pay virtual care: labs, GLP-1, TRT, and visits.',
    },
    guides: [
      {
        href: '/guides/cash-pay-telehealth-visits',
        label: 'Cash-pay telehealth visits',
        blurb: 'What a virtual doctor costs versus $120–$350 urgent care.',
      },
      {
        href: '/guides/sesame-vs-mdlive-teladoc-cost',
        label: 'Sesame vs MDLive vs Teladoc cost',
        blurb: 'Cash visit prices: marketplace listings versus $89 self-pay brands.',
      },
      {
        href: '/guides/online-ed-treatment',
        label: 'Online ED treatment',
        blurb: 'Generic sildenafil and tadalafil through telehealth.',
      },
      {
        href: '/guides/online-therapy-cost',
        label: 'Online therapy cost',
        blurb: 'Self-pay therapy and psychiatry platforms compared.',
      },
      {
        href: '/guides/betterhelp-vs-talkspace',
        label: 'BetterHelp vs Talkspace',
        blurb: 'Which online therapy platform fits your budget.',
      },
      {
        href: '/guides/best-online-trt-clinics',
        label: 'Best online TRT clinics',
        blurb: 'Telehealth testosterone clinics that publish prices.',
      },
      {
        href: '/guides/cgm-without-diabetes',
        label: 'CGM without diabetes',
        blurb: 'OTC glucose monitors you can buy without a diabetes diagnosis.',
      },
      {
        href: '/guides/online-menopause-treatment',
        label: 'Online menopause treatment',
        blurb: 'HRT telehealth: symptoms, options, and how online care works.',
      },
      {
        href: '/guides/urgent-care-cost-without-insurance',
        label: 'Urgent care cost without insurance',
        blurb: 'Cash-pay walk-in prices versus a video visit.',
      },
    ],
  },
  {
    id: 'turkey',
    hub: {
      href: '/destinations/turkey',
      label: 'Turkey medical tourism guide',
      blurb: 'Costs, licensing, safety record and trip planning in one place.',
    },
    guides: [
      { href: '/guides/hair-transplant-turkey-cost', label: 'Hair transplant Turkey cost', blurb: 'FUE and DHI package prices by graft count versus US surgery.' },
      { href: '/guides/turkey-hair-transplant-clinics', label: 'Turkey hair transplant clinics compared', blurb: 'Published prices, techniques and credentials side by side.' },
      { href: '/guides/hair-transplant-turkey-guide', label: 'Hair transplant in Turkey: complete guide', blurb: 'Techniques, what to expect and a vetting checklist.' },
      { href: '/guides/fue-hair-transplant-istanbul-cost', label: 'FUE Istanbul cost', blurb: 'Per-graft and package math for Istanbul.' },
      { href: '/guides/turkey-dental-cost', label: 'Turkey dental cost', blurb: 'Implants, All-on-4, crowns and veneers in Istanbul and Antalya.' },
      { href: '/guides/rhinoplasty-turkey-cost', label: 'Rhinoplasty Turkey cost', blurb: 'Istanbul nose-surgery prices and inclusions.' },
      { href: '/guides/gastric-bypass-turkey-cost', label: 'Gastric bypass Turkey cost', blurb: 'Bariatric packages and the longer stay they need.' },
      { href: '/guides/how-to-verify-turkey-clinic-license', label: 'How to verify a Turkish clinic', blurb: 'Check the Ministry of Health authorization step by step.' },
      { href: '/guides/is-plastic-surgery-in-turkey-safe', label: 'Is plastic surgery in Turkey safe?', blurb: 'What the complication reports show and how to lower risk.' },
      { href: '/guides/turkey-hair-transplant-trip-planner', label: 'Turkey hair transplant trip planner', blurb: 'Day-by-day Istanbul timeline, packing and budget.' },
      { href: '/guides/turkey-vs-mexico-medical-tourism', label: 'Turkey vs Mexico', blurb: 'Which destination wins for hair, dental and bariatric.' },
    ],
  },
  {
    id: 'south-korea',
    hub: {
      href: '/destinations/south-korea',
      label: 'South Korea medical tourism guide',
      blurb: 'Costs, the foreign-patient registration system, safety and planning.',
    },
    guides: [
      { href: '/guides/korea-plastic-surgery-cost', label: 'Korea plastic surgery cost', blurb: 'Rhinoplasty, eyelid, contouring and breast prices versus the US.' },
      { href: '/guides/plastic-surgery-korea-guide', label: 'Plastic surgery in Korea: Gangnam guide', blurb: 'How Gangnam clinics work, consultations and recovery.' },
      { href: '/guides/korea-dermatology-cost', label: 'Korea dermatology and skin treatment cost', blurb: 'Laser, Ultherapy, skin boosters and clinic packages.' },
      { href: '/guides/korea-health-screening-cost', label: 'Korea health screening cost', blurb: 'Comprehensive check-up packages at major hospitals.' },
      { href: '/guides/how-to-verify-korea-clinic', label: 'How to verify a Korean clinic', blurb: 'Foreign-patient registration lookup, ghost doctors and the CCTV law.' },
      { href: '/guides/rhinoplasty-cost-by-country', label: 'Rhinoplasty cost by country', blurb: 'Korea against Turkey, Mexico and the US.' },
      { href: '/guides/plastic-surgery-abroad-cost-comparison', label: 'Plastic surgery abroad compared', blurb: 'Korea, Thailand, Colombia, Brazil and Turkey.' },
    ],
  },
  {
    id: 'tourism',
    hub: {
      href: '/medical-tourism',
      label: 'Medical tourism hub',
      blurb: 'Destinations and US-vs-abroad prices for hair, dental, IVF, and surgery.',
    },
    guides: [
      {
        href: '/guides/cash-pay-healthcare-map',
        label: 'Cash-pay healthcare map',
        blurb: 'Where labs, telehealth, imaging, and surgery sit on one map.',
      },
      {
        href: '/guides/donor-egg-ivf-abroad',
        label: 'Donor-egg IVF abroad',
        blurb: 'Czech and Greek itemized donor-cycle prices versus the US.',
      },
      {
        href: '/guides/turkey-dental-cost',
        label: 'Turkey dental cost',
        blurb: 'Implants, All-on-4, and veneers in Istanbul versus Mexico.',
      },
      {
        href: '/guides/hair-transplant-turkey-guide',
        label: 'Hair transplant Turkey guide',
        blurb: 'FUE vs DHI, choosing clinics, and a safety checklist.',
      },
      {
        href: '/guides/hair-transplant-turkey-cost',
        label: 'Hair transplant Turkey cost',
        blurb: 'Typical FUE package prices and what quotes leave out.',
      },
      {
        href: '/guides/mexico-medical-tourism-planner',
        label: 'Mexico medical tourism planner',
        blurb: 'Border crossing, packing, and a realistic trip timeline.',
      },
      {
        href: '/guides/dental-implants-abroad-cost-comparison',
        label: 'Dental implants abroad',
        blurb: 'Single-implant and All-on-4 prices by country.',
      },
      {
        href: '/guides/egg-freezing-abroad-cost',
        label: 'Egg freezing abroad',
        blurb: 'Cycle prices and travel add-ons versus US clinics.',
      },
    ],
  },
  {
    id: 'imaging',
    hub: {
      href: '/imaging',
      label: 'Cash-pay imaging hub',
      blurb: 'MRI and other self-pay imaging options compared.',
    },
    guides: [
      {
        href: '/guides/full-body-mri-scan-cost',
        label: 'Full-body MRI scan cost',
        blurb: 'Prenuvo, Ezra, and SimonMed screening MRI prices.',
      },
      {
        href: '/guides/mammogram-cost',
        label: 'Mammogram cost',
        blurb: 'Screening vs diagnostic, 2D vs 3D, and free screening programs.',
      },
      {
        href: '/guides/mri-cost-without-insurance',
        label: 'MRI cost without insurance',
        blurb: 'Cash prices by body part at freestanding imaging centers.',
      },
      {
        href: '/guides/ct-scan-cost-without-insurance',
        label: 'CT scan cost without insurance',
        blurb: 'Self-pay CT prices and how to avoid hospital facility fees.',
      },
      {
        href: '/guides/ultrasound-cost-without-insurance',
        label: 'Ultrasound cost without insurance',
        blurb: 'Typical cash-pay ultrasound ranges by exam type.',
      },
    ],
  },
  // Added 2026-10-18 with the national cash-pay cost-guide batch. Listed after
  // the established clusters so existing spokes keep resolving to their
  // primary cluster; these also give previously unclustered guides (LASIK,
  // colonoscopy, US dental, sleep study, VO2 max) hub and sibling links.
  {
    id: 'womens',
    hub: {
      href: '/womens-health',
      label: "Women's health hub",
      blurb: 'Compare online menopause, HRT and birth-control options.',
    },
    guides: [
      {
        href: '/guides/birth-control-cost',
        label: 'Birth control cost',
        blurb: 'Opill, online prescribers, generic pills, IUDs and implants by cash price.',
      },
      {
        href: '/guides/online-menopause-treatment',
        label: 'Online menopause treatment',
        blurb: 'How online menopause and HRT care works and what it costs.',
      },
    ],
  },
  {
    id: 'primary-care',
    hub: {
      href: '/primary_care',
      label: "Primary care hub",
      blurb: 'Cash-pay primary care, memberships and telehealth visits.',
    },
    guides: [
      {
        href: '/guides/direct-primary-care-cost',
        label: 'Direct primary care cost',
        blurb: 'DPC monthly fees by age, concierge vs app memberships, and 2026 HSA rules.',
      },
      {
        href: '/guides/urgent-care-cost-without-insurance',
        label: 'Urgent care cost',
        blurb: 'Self-pay urgent care visit prices and what drives the bill.',
      },
      {
        href: '/guides/cash-pay-telehealth-visits',
        label: 'Cash-pay telehealth visits',
        blurb: 'What a self-pay virtual visit costs across major services.',
      },
      {
        href: '/guides/sesame-vs-mdlive-teladoc-cost',
        label: 'Sesame vs MDLive vs Teladoc',
        blurb: 'Visit prices and memberships compared.',
      },
    ],
  },
  {
    id: 'dental-care',
    hub: {
      href: '/dental',
      label: "Dental hub",
      blurb: 'Compare US and abroad dental prices.',
    },
    guides: [
      {
        href: '/guides/invisalign-cost',
        label: 'Invisalign cost',
        blurb: 'Invisalign vs clear-aligner brands vs braces, by cash price.',
      },
      {
        href: '/guides/dental-implant-cost-usa',
        label: 'Dental implant cost (USA)',
        blurb: 'Single-implant and full-mouth cash prices in the US.',
      },
      {
        href: '/guides/root-canal-cost-without-insurance',
        label: 'Root canal cost',
        blurb: 'Self-pay root canal prices by tooth type.',
      },
      {
        href: '/guides/veneers-cost-by-country',
        label: 'Veneers cost by country',
        blurb: 'US vs Mexico, Turkey and other destinations.',
      },
      {
        href: '/guides/mexico-dental-implant-prices',
        label: 'Mexico dental implant prices',
        blurb: 'Verified clinic prices in Cancun and Los Algodones.',
      },
    ],
  },
  {
    id: 'cash-procedures',
    hub: {
      href: '/surgery',
      label: "Cash-pay surgery hub",
      blurb: 'Bundled self-pay prices for common outpatient procedures.',
    },
    guides: [
      {
        href: '/guides/vasectomy-cost',
        label: 'Vasectomy cost',
        blurb: 'Cash and bundled vasectomy prices, what is included, and follow-up testing.',
      },
      {
        href: '/guides/colonoscopy-cost-without-insurance',
        label: 'Colonoscopy cost',
        blurb: 'Self-pay colonoscopy prices and what the bundle covers.',
      },
      {
        href: '/guides/lasik-cost-usa',
        label: 'LASIK cost (USA)',
        blurb: 'Per-eye LASIK prices without insurance.',
      },
    ],
  },
  {
    id: 'local-care',
    hub: {
      href: '/local-clinics',
      label: "Local clinics hub",
      blurb: 'Cash-pay services you visit in person.',
    },
    guides: [
      {
        href: '/guides/physical-therapy-cost',
        label: 'Physical therapy cost',
        blurb: 'Per-visit cash rates, direct access, and how to compare PT clinics.',
      },
      {
        href: '/guides/hearing-aids-cost',
        label: 'Hearing aids cost',
        blurb: 'OTC vs prescription hearing aids, Costco, and what each includes.',
      },
      {
        href: '/guides/sleep-study-cost',
        label: 'Sleep study cost',
        blurb: 'Lab vs home sleep test cash prices.',
      },
      {
        href: '/guides/vo2-max-test-cost',
        label: 'VO2 max test cost',
        blurb: 'Where to test and what it costs.',
      },
    ],
  },
];

/**
 * Related guides for a live path.
 * - Spoke page: up to `limit` siblings, then the cluster hub (excluded if self).
 * - Hub page: up to `limit` spoke guides from every cluster that uses this hub.
 */
export function getRelatedGuides(
  currentPath: string,
  limit = 5,
): RelatedGuideItem[] {
  const path = normalizePath(currentPath);
  const matching = GUIDE_CLUSTERS.filter(
    (cluster) =>
      (cluster.hub && pathOf(cluster.hub) === path) ||
      cluster.guides.some((guide) => pathOf(guide) === path),
  );

  if (matching.length === 0) return [];

  const hubClusters = matching.filter(
    (cluster) => cluster.hub && pathOf(cluster.hub) === path,
  );

  if (hubClusters.length > 0) {
    return uniqueItems(
      hubClusters.flatMap((cluster) => cluster.guides),
      path,
      limit,
    );
  }

  const cluster = matching[0];
  const siblings = cluster.guides.filter((guide) => pathOf(guide) !== path);
  const picked = siblings.slice(0, limit);
  if (
    cluster.hub &&
    pathOf(cluster.hub) !== path &&
    !picked.some((item) => pathOf(item) === pathOf(cluster.hub!))
  ) {
    picked.push(cluster.hub);
  }
  return picked;
}
