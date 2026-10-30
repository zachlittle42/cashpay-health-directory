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

export const JOURNEYS: Record<string, DestinationJourney> = {
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
