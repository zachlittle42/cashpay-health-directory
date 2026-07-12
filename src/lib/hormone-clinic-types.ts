// Hormone Therapy Clinic Types
// For TRT (Testosterone Replacement) and HRT (Hormone Replacement Therapy) clinics

export type HormoneService = 'trt' | 'hrt' | 'peptides' | 'thyroid' | 'growth_hormone' | 'bioidentical';

export interface HormoneClinic {
  id: string;                // Foundation #1 — stable entity id, minted by scripts/ingest/mint_ids.py
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  services: HormoneService[];
  priceRange: string;
  website: string;
  phone?: string;
  description: string;
  highlights: string[];
  bestFor: string;
  rating?: number;
  reviewCount?: number;
  reviewSource?: string;
  telehealth?: boolean;
  inPerson: boolean;
  menOnly?: boolean;
  womenOnly?: boolean;
  lastVerified: string;
}

export interface StateHormoneClinics {
  state: string;
  stateSlug: string;
  cities: {
    city: string;
    citySlug: string;
    clinics: HormoneClinic[];
  }[];
}

// US States with hormone clinic coverage
export const HORMONE_STATES = [
  { name: 'Texas', slug: 'texas', cities: ['Houston', 'Dallas', 'Austin', 'San Antonio'] },
  { name: 'Florida', slug: 'florida', cities: ['Miami', 'Tampa', 'Orlando', 'Fort Lauderdale'] },
  { name: 'Arizona', slug: 'arizona', cities: ['Phoenix', 'Scottsdale', 'Tucson'] },
  { name: 'California', slug: 'california', cities: ['Los Angeles', 'San Diego', 'San Francisco'] },
  { name: 'New York', slug: 'new-york', cities: ['New York City', 'Long Island'] },
  { name: 'Washington DC', slug: 'washington-dc', cities: ['Washington'] },
  { name: 'Georgia', slug: 'georgia', cities: ['Atlanta'] },
  { name: 'Illinois', slug: 'illinois', cities: ['Chicago'] },
  { name: 'Massachusetts', slug: 'massachusetts', cities: ['Boston'] },
  { name: 'Washington', slug: 'washington', cities: ['Seattle', 'Bellevue'] },
  { name: 'Colorado', slug: 'colorado', cities: ['Denver'] },
  { name: 'Tennessee', slug: 'tennessee', cities: ['Nashville', 'Brentwood'] },
  { name: 'Nevada', slug: 'nevada', cities: ['Las Vegas'] },
  { name: 'North Carolina', slug: 'north-carolina', cities: ['Raleigh'] },
] as const;

export type HormoneState = typeof HORMONE_STATES[number]['slug'];
