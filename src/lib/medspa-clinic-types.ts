// Med-Spa & Aesthetics Clinic Types
//
// Powers the in-person wellness & aesthetics directory (/med-spa): Botox,
// dermal fillers, laser hair removal, microneedling, body contouring, and IV
// therapy studios by state and city.
//
// Seed data is built from REAL national aesthetic chains at the metro level
// (see medspa-chains.ts) — we do NOT fabricate local business addresses, phone
// numbers, or review counts. Verified independent listings can be added per
// city later via the same data index; the thin-content guard (>= MIN per city)
// keeps unverified/empty cities out of the index.

export type MedspaService =
  | 'Botox'
  | 'Dermal Fillers'
  | 'Laser Hair Removal'
  | 'Microneedling'
  | 'Body Contouring'
  | 'CoolSculpting'
  | 'Chemical Peels'
  | 'Skin Rejuvenation'
  | 'IV Therapy';

export interface MedspaClinic {
  id: string;                // Foundation #1 — stable entity id (chain-level; stamped from ChainTemplate.id)
  name: string;
  slug: string;
  address?: string;          // omitted for multi-location chains (use their finder)
  city: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  services: MedspaService[];
  priceRange: string;        // ESTIMATE / general — verify with provider
  chain: boolean;            // true = national/multi-location brand
  membership?: string;
  website: string;           // location finder for chains
  phone?: string;
  description: string;
  highlights: string[];
  bestFor: string;
  rating?: number;
  reviewCount?: number;
  reviewSource?: string;
  lastVerified: string;      // ISO date — drives "Updated {month}" + audit trail
}

export interface StateMedspaClinics {
  state: string;
  stateSlug: string;
  cities: {
    city: string;
    citySlug: string;
    clinics: MedspaClinic[];
  }[];
}

// States targeted for the med-spa directory. Only wired states (with clinics in
// the data index) render pages; the rest are roadmap placeholders.
export const MEDSPA_STATES = [
  { name: 'California', slug: 'california', cities: ['Los Angeles', 'San Diego', 'Orange County', 'San Francisco'] },
  { name: 'Texas',      slug: 'texas',      cities: ['Houston', 'Dallas', 'Austin', 'San Antonio'] },
  { name: 'Florida',    slug: 'florida',    cities: ['Miami', 'Orlando', 'Tampa'] },
  { name: 'New York',   slug: 'new-york',   cities: ['New York City'] },
  { name: 'Arizona',    slug: 'arizona',    cities: ['Phoenix', 'Scottsdale'] },
  { name: 'Illinois',   slug: 'illinois',   cities: ['Chicago'] },
  { name: 'Georgia',    slug: 'georgia',    cities: ['Atlanta'] },
  { name: 'Colorado',   slug: 'colorado',   cities: ['Denver'] },
] as const;

export type MedspaStateSlug = typeof MEDSPA_STATES[number]['slug'];

// Service-level metadata for the hub explainer grid. Cost ranges are typical US
// cash-pay estimates that vary widely by city, provider, and amount used.
export const MEDSPA_SERVICES: {
  name: MedspaService;
  icon: string;
  typicalCost: string;
  blurb: string;
}[] = [
  {
    name: 'Botox',
    icon: '💉',
    typicalCost: '~$10–$20 per unit (or $300–$700 per area)',
    blurb: 'Neuromodulator injections (Botox, Dysport, Xeomin) that soften frown lines, forehead lines, and crow’s feet for about 3–4 months.',
  },
  {
    name: 'Dermal Fillers',
    icon: '💋',
    typicalCost: '~$600–$1,200 per syringe',
    blurb: 'Hyaluronic-acid fillers (Juvederm, Restylane) that restore volume to lips, cheeks, and folds, typically lasting 6–18 months.',
  },
  {
    name: 'Laser Hair Removal',
    icon: '⚡',
    typicalCost: '~$50–$400 per session by area',
    blurb: 'Laser treatment that reduces unwanted hair over a series of sessions; many chains sell packages or unlimited plans.',
  },
  {
    name: 'Microneedling',
    icon: '🪡',
    typicalCost: '~$200–$700 per session',
    blurb: 'Collagen-induction therapy (often with radiofrequency or PRP) for texture, pores, and scars — usually a series.',
  },
  {
    name: 'Body Contouring',
    icon: '📐',
    typicalCost: '~$1,500–$8,000 per area',
    blurb: 'Non-surgical fat reduction (CoolSculpting) or in-office laser liposuction to slim targeted areas. Surgical options require a surgeon.',
  },
  {
    name: 'IV Therapy',
    icon: '💧',
    typicalCost: '~$100–$300 per drip',
    blurb: 'Vitamin and hydration infusions for recovery, energy, and wellness — increasingly offered at med-spas and dedicated drip studios.',
  },
];
