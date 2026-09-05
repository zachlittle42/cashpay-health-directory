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
        blurb: 'How telehealth ED visits work, generic vs brand, and typical monthly cost.',
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
