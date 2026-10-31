import type { JourneyStage } from './types';

// The reader's six questions, in the order a first-time medical traveller asks
// them. Each stage lists the pages that answer it; the hub answers every stage
// in-page and links out to the deeper guides. Every spoke renders a rail that
// shows where it sits and what to read next.
// RULE: every href is a live App Router path (tests/destination-journeys.test.mjs).

export interface DestinationJourney {
  slug: string;
  displayName: string;
  flag: string;
  hubHref: string;
  stages: JourneyStage[];
}

export const TURKEY_JOURNEY: DestinationJourney = {
  slug: 'turkey',
  displayName: 'Turkey',
  flag: '🇹🇷',
  hubHref: '/destinations/turkey',
  stages: [
    {
      id: 'treatments',
      label: 'What people go for',
      question: 'Which treatments is Turkey actually good for, and is mine one of them?',
      links: [
        { href: '/destinations/turkey#treatments', label: 'Treatments people travel to Turkey for', blurb: 'Hair, dental, rhinoplasty, bariatric and eye surgery, with the official volumes.' },
        { href: '/guides/fue-vs-dhi', label: 'FUE vs DHI', blurb: 'The two techniques every Istanbul quote is written in.' },
        { href: '/guides/hair-transplant-grafts-guide', label: 'How many grafts do I need?', blurb: 'Norwood-scale graft estimates that anchor any quote.' },
      ],
    },
    {
      id: 'clinics',
      label: 'The clinics',
      question: 'Which clinics are licensed, name their surgeon and publish prices?',
      links: [
        { href: '/destinations/turkey#clinics', label: 'Clinics and hospital groups, with what is documented', blurb: 'Licensing, named surgeons, published prices and booking channels.' },
        { href: '/destinations/turkey/directory', label: 'Every Ministry-authorized facility, by province', blurb: 'The full government list, searchable by name, district and licence type.' },
        { href: '/guides/turkey-hair-transplant-clinics', label: 'Turkey hair transplant clinics compared', blurb: 'Published package prices, techniques and credentials side by side.' },
        { href: '/guides/how-to-verify-turkey-clinic-license', label: 'How to verify a Turkish clinic', blurb: 'Check the Ministry of Health health-tourism authorization step by step.' },
        { href: '/hair_transplant', label: 'Hair transplant provider profiles', blurb: 'Researched clinics with price displays.' },
        { href: '/dental', label: 'Dental provider profiles', blurb: 'Turkish dental groups alongside Mexico, Hungary and Costa Rica.' },
        { href: '/plastic_surgery', label: 'Plastic surgery provider profiles', blurb: 'Researched surgeons and groups abroad.' },
      ],
    },
    {
      id: 'prices',
      label: 'Prices',
      question: 'What will it cost, all in, versus staying home?',
      links: [
        { href: '/destinations/turkey#prices', label: 'Turkey vs US price table', blurb: 'Every major procedure with sources and typical stay.' },
        { href: '/guides/hair-transplant-turkey-cost', label: 'Hair transplant Turkey cost', blurb: 'FUE and DHI package prices by graft count versus US surgery.' },
        { href: '/guides/fue-hair-transplant-istanbul-cost', label: 'FUE Istanbul cost', blurb: 'Per-graft and package math for Istanbul specifically.' },
        { href: '/guides/turkey-dental-cost', label: 'Turkey dental cost', blurb: 'Implants, All-on-4, crowns and veneers in Istanbul and Antalya.' },
        { href: '/guides/rhinoplasty-turkey-cost', label: 'Rhinoplasty Turkey cost', blurb: 'Istanbul nose-surgery prices, inclusions and revision math.' },
        { href: '/guides/gastric-bypass-turkey-cost', label: 'Gastric bypass Turkey cost', blurb: 'Bariatric package prices and the longer stay they require.' },
        { href: '/guides/hair-transplant-cost-by-country', label: 'Hair transplant cost by country', blurb: 'Turkey against India, Mexico, Thailand and the US.' },
        { href: '/guides/veneers-cost-by-country', label: 'Veneers cost by country', blurb: 'Turkey against Mexico, Costa Rica and Hungary.' },
        { href: '/guides/rhinoplasty-cost-by-country', label: 'Rhinoplasty cost by country', blurb: 'Turkey against Korea, Mexico and the US.' },
        { href: '/guides/turkey-vs-mexico-medical-tourism', label: 'Turkey vs Mexico', blurb: 'Which destination wins for hair, dental and bariatric.' },
      ],
    },
    {
      id: 'expect',
      label: 'What to expect',
      question: 'What does the process look like, what results are realistic, and what goes wrong?',
      links: [
        { href: '/destinations/turkey#expect', label: 'Process, results and the safety record', blurb: 'Day by day, what final results look like, and the documented risks.' },
        { href: '/guides/hair-transplant-turkey-guide', label: 'Hair transplant in Turkey: complete guide', blurb: 'The full experience from consultation to month 12.' },
        { href: '/guides/hair-transplant-recovery-timeline', label: 'Hair transplant recovery timeline', blurb: 'Shock loss, regrowth and when the result is final.' },
        { href: '/guides/is-plastic-surgery-in-turkey-safe', label: 'Is plastic surgery in Turkey safe?', blurb: 'What the complication reports actually show.' },
      ],
    },
    {
      id: 'travel',
      label: 'Travel & logistics',
      question: 'Entry rules, flights, where to stay, how long, and when you can fly home.',
      links: [
        { href: '/destinations/turkey#travel', label: 'Travel and logistics for Americans', blurb: 'Visa-free entry, flight times, Istanbul districts, payment and timing.' },
        { href: '/guides/turkey-hair-transplant-trip-planner', label: 'Turkey hair transplant trip planner', blurb: 'Day-by-day Istanbul timeline, packing and budget.' },
        { href: '/guides/medical-travel-insurance-guide', label: 'Medical travel insurance', blurb: 'What complication cover exists and what it excludes.' },
        { href: '/guides/paying-for-medical-tourism', label: 'Paying for medical tourism', blurb: 'Deposits, cards, currency and financing.' },
      ],
    },
    {
      id: 'book',
      label: 'How to book',
      question: 'How do I actually get a consultation, a quote and a date, safely?',
      links: [
        { href: '/destinations/turkey#book', label: 'How to book, step by step', blurb: 'From first message to confirmed date, with what to get in writing.' },
      ],
    },
  ],
};

export const SOUTH_KOREA_JOURNEY: DestinationJourney = {
  slug: 'south-korea',
  displayName: 'South Korea',
  flag: '🇰🇷',
  hubHref: '/destinations/south-korea',
  stages: [
    {
      id: 'treatments',
      label: 'What people go for',
      question: 'Which treatments is Korea actually good for, and is mine one of them?',
      links: [
        { href: '/destinations/south-korea#treatments', label: 'Treatments people travel to Korea for', blurb: 'Dermatology, facial plastic surgery, health screening and dental, with the official volumes.' },
        { href: '/guides/plastic-surgery-korea-guide', label: 'Plastic surgery in Korea: Gangnam guide', blurb: 'The procedures Gangnam is known for and how clinics work.' },
      ],
    },
    {
      id: 'clinics',
      label: 'The clinics',
      question: 'Which clinics are registered, name their surgeon and publish prices?',
      links: [
        { href: '/destinations/south-korea#clinics', label: 'Clinics and hospitals, with what is documented', blurb: 'Registration, accreditation, named surgeons, published prices and booking channels.' },
        { href: '/destinations/south-korea/directory', label: 'Every registered institution, by region', blurb: 'The full Medical Korea list, searchable by name, district and institution type.' },
        { href: '/guides/how-to-verify-korea-clinic', label: 'How to verify a Korean clinic', blurb: 'The registry lookup, named-surgeon consent and the camera law.' },
        { href: '/plastic_surgery', label: 'Plastic surgery provider profiles', blurb: 'Researched clinics with price displays.' },
        { href: '/dental', label: 'Dental provider profiles', blurb: 'Seoul dental hospitals alongside other destinations.' },
      ],
    },
    {
      id: 'prices',
      label: 'Prices',
      question: 'What will it cost, all in, versus staying home?',
      links: [
        { href: '/destinations/south-korea#prices', label: 'Korea vs US price table', blurb: 'Every major procedure with sources and typical stay.' },
        { href: '/guides/korea-plastic-surgery-cost', label: 'Korea plastic surgery cost', blurb: 'Rhinoplasty, eyelid, facial contouring and breast prices versus the US.' },
        { href: '/guides/korea-dermatology-cost', label: 'Korea dermatology and skin treatment cost', blurb: 'Published Seoul clinic menus for lasers, Ultherapy, Rejuran and skin boosters.' },
        { href: '/guides/korea-health-screening-cost', label: 'Korea health screening cost', blurb: 'Published check-up packages at major hospitals and screening centers.' },
        { href: '/guides/rhinoplasty-cost-by-country', label: 'Rhinoplasty cost by country', blurb: 'Korea against Turkey, Mexico and the US.' },
        { href: '/guides/plastic-surgery-abroad-cost-comparison', label: 'Plastic surgery abroad compared', blurb: 'Korea, Thailand, Colombia, Brazil and Turkey.' },
        { href: '/guides/veneers-cost-by-country', label: 'Veneers cost by country', blurb: 'Where Korean cosmetic dentistry sits on price.' },
      ],
    },
    {
      id: 'expect',
      label: 'What to expect',
      question: 'What does the process look like, what results are realistic, and what goes wrong?',
      links: [
        { href: '/destinations/south-korea#expect', label: 'Process, results and the safety record', blurb: 'Consultation to final result, and the documented risks at clinic level.' },
        { href: '/guides/thailand-cosmetic-surgery-cost', label: 'Thailand cosmetic surgery cost', blurb: 'The main regional alternative if Korea does not fit.' },
      ],
    },
    {
      id: 'travel',
      label: 'Travel & logistics',
      question: 'Entry rules, flights, where to stay, how long, and when you can fly home.',
      links: [
        { href: '/destinations/south-korea#travel', label: 'Travel and logistics for Americans', blurb: 'Visa-free entry, K-ETA waiver, flight times, Gangnam districts and timing.' },
        { href: '/guides/medical-travel-insurance-guide', label: 'Medical travel insurance', blurb: 'What complication cover exists and what it excludes.' },
        { href: '/guides/paying-for-medical-tourism', label: 'Paying for medical tourism', blurb: 'Deposits, cards, currency and financing.' },
        { href: '/guides/can-you-use-hsa-fsa-for-medical-care-abroad', label: 'HSA/FSA for care abroad', blurb: 'What the IRS rules allow for treatment outside the US.' },
      ],
    },
    {
      id: 'book',
      label: 'How to book',
      question: 'How do I actually get a consultation, a quote and a date, safely?',
      links: [
        { href: '/destinations/south-korea#book', label: 'How to book, step by step', blurb: 'From first message to confirmed date, with what to get in writing.' },
      ],
    },
  ],
};

export const MEXICO_JOURNEY: DestinationJourney = {
  slug: 'mexico',
  displayName: 'Mexico',
  flag: '🇲🇽',
  hubHref: '/destinations/mexico',
  stages: [
    {
      id: 'treatments',
      label: 'What people go for',
      question: 'Which treatments is Mexico actually good for, and is mine one of them?',
      links: [
        { href: '/destinations/mexico#treatments', label: 'Treatments people cross the border for', blurb: 'Dental, bariatric, plastic surgery, pharmacy and the regulated-but-unproven stem cell market, by city.' },
        { href: '/guides/tijuana-medical-tourism-guide', label: 'Tijuana medical tourism guide', blurb: 'Dental, bariatric and stem cell options twenty minutes from San Diego.' },
        { href: '/guides/los-algodones-dental-guide', label: 'Los Algodones dental guide', blurb: 'The border town with hundreds of dental clinics, walkable from Yuma.' },
        { href: '/guides/gastric-sleeve-mexico-vs-glp1-program', label: 'Gastric sleeve in Mexico vs a GLP-1 program', blurb: 'The verified math before you decide on surgery at all.' },
        { href: '/guides/is-stem-cell-therapy-in-mexico-safe', label: 'Is stem cell therapy in Mexico safe?', blurb: 'What COFEPRIS permits, what the FDA says, and the red flags.' },
      ],
    },
    {
      id: 'clinics',
      label: 'The clinics',
      question: 'Which clinics are licensed, name a board-certified surgeon and operate in a certified hospital?',
      links: [
        { href: '/destinations/mexico#clinics', label: 'Clinics and hospitals, with what is documented', blurb: 'COFEPRIS licence, Consejo de Salubridad General certification, named surgeons with cédula, published prices and booking channels.' },
        { href: '/destinations/mexico/directory', label: 'Every registered private hospital and clinic, by state', blurb: 'The federal CLUES catalogue, searchable by name, city and facility type, with the few CSG-certified hospitals flagged.' },
        { href: '/guides/los-algodones-reviews', label: 'Los Algodones dentist reviews: is it safe?', blurb: 'How to read reviews and credentials in Molar City.' },
        { href: '/bariatric', label: 'Bariatric provider profiles', blurb: 'Researched Mexican surgeons and programs with price displays.' },
        { href: '/dental', label: 'Dental provider profiles', blurb: 'Los Algodones, Tijuana and Cancún clinics alongside other destinations.' },
        { href: '/plastic_surgery', label: 'Plastic surgery provider profiles', blurb: 'Researched surgeons and groups abroad.' },
        { href: '/stem-cells/mexico', label: 'Stem cell clinics in Mexico', blurb: 'Regulatory status, costs and the questions to ask.' },
      ],
    },
    {
      id: 'prices',
      label: 'Prices',
      question: 'What will it cost, all in, versus staying home?',
      links: [
        { href: '/destinations/mexico#prices', label: 'Mexico vs US price table', blurb: 'Every major procedure with sources, city and typical stay.' },
        { href: '/guides/gastric-sleeve-tijuana-cost', label: 'Gastric sleeve Tijuana cost', blurb: 'Package prices versus US self-pay, with what the package includes.' },
        { href: '/guides/mexico-bariatric-surgery-prices', label: 'Mexico bariatric surgery prices', blurb: 'Verified sleeve and bypass costs by surgeon and city.' },
        { href: '/guides/mexico-dental-implant-prices', label: 'Mexico dental implant prices', blurb: 'Verified Cancún and Los Algodones implant costs.' },
        { href: '/guides/all-on-4-los-algodones-cost', label: 'All-on-4 Los Algodones cost', blurb: 'Full-arch prices versus US cash prices.' },
        { href: '/guides/all-on-4-dental-implants-mexico', label: 'All-on-4 in Mexico: complete guide', blurb: 'What a full-arch package covers and what it leaves out.' },
        { href: '/guides/mexico-dental-guide', label: 'Mexico dental guide', blurb: 'Tijuana, Los Algodones and Cancún costs compared.' },
        { href: '/guides/mexico-stem-cell-guide', label: 'Stem cell therapy in Mexico: costs and clinics', blurb: 'What clinics charge and what the money buys.' },
        { href: '/guides/stem-cell-knees-mexico', label: 'Stem cells for knees abroad', blurb: 'Cost and evidence for the most-marketed use.' },
        { href: '/guides/mexico-vs-costa-rica-dental', label: 'Mexico vs Costa Rica for dental work', blurb: 'Price, travel and quality trade-offs.' },
        { href: '/guides/turkey-vs-mexico-medical-tourism', label: 'Turkey vs Mexico', blurb: 'Which destination wins for hair, dental and bariatric.' },
        { href: '/guides/us-vs-mexico-stem-cells', label: 'US vs Mexico stem cell therapy', blurb: 'Cost, legality and safety side by side.' },
      ],
    },
    {
      id: 'expect',
      label: 'What to expect',
      question: 'What does the process look like, what results are realistic, and what goes wrong?',
      links: [
        { href: '/destinations/mexico#expect', label: 'Process, results and the safety record', blurb: 'Day by day, realistic outcomes, and the documented incidents.' },
        { href: '/guides/gastric-sleeve-mexico-safety', label: 'Gastric sleeve in Mexico: safety guide', blurb: 'Complication data, hospital standards and what to expect.' },
        { href: '/guides/bbl-surgery-mexico', label: 'BBL surgery in Mexico: safety and cost', blurb: 'The highest-risk cosmetic procedure and how to lower the risk.' },
        { href: '/guides/mommy-makeover-mexico', label: 'Mommy makeover in Mexico', blurb: 'Combined procedures, recovery time and cost.' },
      ],
    },
    {
      id: 'travel',
      label: 'Travel & logistics',
      question: 'Border crossing, flights, where to stay, how long, and when you can travel home.',
      links: [
        { href: '/destinations/mexico#travel', label: 'Travel and logistics for Americans', blurb: 'Walking across, the CBX bridge, FMM rules, paying, and when you can fly.' },
        { href: '/guides/mexico-medical-tourism-planner', label: 'Mexico medical tourism trip planner', blurb: 'Timeline, packing, budget and crossing logistics.' },
        { href: '/guides/does-us-insurance-cover-dental-work-in-mexico', label: 'Does US dental insurance cover work in Mexico?', blurb: 'What out-of-network reimbursement actually pays.' },
        { href: '/guides/medical-travel-insurance-guide', label: 'Medical travel insurance', blurb: 'What complication cover exists and what it excludes.' },
        { href: '/guides/paying-for-medical-tourism', label: 'Paying for medical tourism', blurb: 'Deposits, cards, currency and financing.' },
        { href: '/guides/can-you-use-hsa-fsa-for-medical-care-abroad', label: 'HSA/FSA for care abroad', blurb: 'What the IRS rules allow for treatment outside the US.' },
      ],
    },
    {
      id: 'book',
      label: 'How to book',
      question: 'How do I actually get a consultation, a quote and a date, safely?',
      links: [
        { href: '/destinations/mexico#book', label: 'How to book, step by step', blurb: 'From first message to confirmed date, with what to get in writing.' },
      ],
    },
  ],
};

export const JOURNEYS: Record<string, DestinationJourney> = {
  mexico: MEXICO_JOURNEY,
  turkey: TURKEY_JOURNEY,
  'south-korea': SOUTH_KOREA_JOURNEY,
};

function normalize(path: string): string {
  const p = path.split('#')[0].split('?')[0];
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

/** Which destination journeys include this path, and at which stage. Hub anchors are ignored. */
export function journeysForPath(path: string): { journey: DestinationJourney; stage: JourneyStage }[] {
  const p = normalize(path);
  const out: { journey: DestinationJourney; stage: JourneyStage }[] = [];
  for (const journey of Object.values(JOURNEYS)) {
    if (p === normalize(journey.hubHref)) continue;
    for (const stage of journey.stages) {
      if (stage.links.some((l) => normalize(l.href) === p)) {
        out.push({ journey, stage });
        break;
      }
    }
  }
  return out;
}
