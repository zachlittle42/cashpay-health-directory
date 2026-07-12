// DEXA Scan Clinic Types
// For body-composition / DEXA scan studios and mobile units (BodySpec, DexaFit,
// Fitnescity, university exercise-physiology labs, etc.)

export type ScanType = 'DEXA' | 'InBody' | 'BodPod' | '3D-scan' | 'RMR' | 'VO2max';

export interface DexaClinic {
  id: string;                // Foundation #1 — stable entity id, minted by scripts/ingest/mint_ids.py
  name: string;
  slug: string;
  address?: string;          // optional: mobile/pop-up units (BodySpec) have no fixed address
  city: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  scanTypes: ScanType[];     // ['DEXA','RMR','VO2max'] etc — drives "also offers" chips
  priceRange: string;        // ESTIMATE, verify-with-provider (e.g. "$45-50/scan")
  membership?: string;       // e.g. "Per-scan, no membership" | "Package deals ($40/scan)"
  byAppointment: boolean;    // true = fixed studio; false-ish = mobile/pop-up scheduling
  mobile: boolean;           // BodySpec mobile-unit model
  equipment?: string;        // 'Hologic' | 'GE Lunar' — research-grade signal where verified
  website: string;
  phone?: string;
  description: string;
  highlights: string[];
  bestFor: string;
  rating?: number;
  reviewCount?: number;
  reviewSource?: string;
  lastVerified: string;      // ISO date — REQUIRED, drives "Updated {month}" + audit trail
}

export interface StateDexaClinics {
  state: string;
  stateSlug: string;
  cities: {
    city: string;
    citySlug: string;
    clinics: DexaClinic[];
  }[];
}

// US States with DEXA scan directory coverage. Cities listed here are the
// programmatic-SEO targets; a city only renders a page once it has clinics
// wired into the data index (>=3 clinics passes the thin-content guard).
export const DEXA_STATES = [
  { name: 'California', slug: 'california', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Orange County', 'San Jose'] },
  { name: 'Texas',      slug: 'texas',      cities: ['Austin', 'Dallas', 'Houston'] },
  { name: 'New York',   slug: 'new-york',   cities: ['New York City'] },
  { name: 'Colorado',   slug: 'colorado',   cities: ['Denver'] },
  { name: 'Washington', slug: 'washington', cities: ['Seattle'] },
  { name: 'Florida',       slug: 'florida',       cities: ['Miami'] },
  { name: 'Arizona',       slug: 'arizona',       cities: ['Phoenix', 'Scottsdale'] },
  { name: 'Washington DC', slug: 'washington-dc', cities: ['Washington'] },
  { name: 'Georgia',       slug: 'georgia',       cities: ['Atlanta'] },
  { name: 'Illinois',      slug: 'illinois',      cities: ['Chicago'] },
  { name: 'Massachusetts', slug: 'massachusetts', cities: ['Boston'] },
  { name: 'Nevada',        slug: 'nevada',        cities: ['Las Vegas'] },
  { name: 'Tennessee',      slug: 'tennessee',      cities: ['Nashville'] },
  { name: 'North Carolina', slug: 'north-carolina', cities: ['Raleigh'] },
] as const;

export type DexaState = typeof DEXA_STATES[number]['slug'];
