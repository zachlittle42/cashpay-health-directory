// DEXA Scan Clinics Index — central hub for all DEXA city-directory data.
// Mirrors weightloss-clinics-index.ts. Only wired states return clinics; the
// switch default returns [] so unwired states (texas/new-york/colorado/
// washington until scraped) never emit dead URLs.
// Last Updated: June 2026

import { DexaClinic, DEXA_STATES } from '@/lib/dexa-clinic-types';
import {
  californiaDexaClinics,
  getCaliforniaDexaClinicsByCity,
  getCaliforniaDexaCitiesWithClinics,
} from './dexa-clinics-california';
import {
  texasDexaClinics,
  getTexasDexaClinicsByCity,
  getTexasDexaCitiesWithClinics,
} from './dexa-clinics-texas';
import {
  newYorkDexaClinics,
  getNewYorkDexaClinicsByCity,
  getNewYorkDexaCitiesWithClinics,
} from './dexa-clinics-new-york';

// Minimum clinics for a city page to ship — thin-content guard (YMYL).
const MIN_CLINICS_PER_CITY = 3;

// All DEXA clinics combined.
export const allDexaClinics: DexaClinic[] = [
  ...californiaDexaClinics,
  ...texasDexaClinics,
  ...newYorkDexaClinics,
];

// Get clinics by state.
export function getDexaClinicsByState(stateSlug: string): DexaClinic[] {
  switch (stateSlug) {
    case 'california':
      return californiaDexaClinics;
    case 'texas':
      return texasDexaClinics;
    case 'new-york':
      return newYorkDexaClinics;
    default:
      return [];
  }
}

// Get clinics by city.
export function getDexaClinicsByCity(stateSlug: string, citySlug: string): DexaClinic[] {
  switch (stateSlug) {
    case 'california':
      return getCaliforniaDexaClinicsByCity(citySlug);
    case 'texas':
      return getTexasDexaClinicsByCity(citySlug);
    case 'new-york':
      return getNewYorkDexaClinicsByCity(citySlug);
    default:
      return [];
  }
}

// Get cities with clinics for a state. Applies the thin-content guard: a city
// only surfaces (as a page / link) once it has >= MIN_CLINICS_PER_CITY entries.
export function getDexaCitiesWithClinics(stateSlug: string): { city: string; citySlug: string; count: number }[] {
  let cities: { city: string; citySlug: string; count: number }[];
  switch (stateSlug) {
    case 'california':
      cities = getCaliforniaDexaCitiesWithClinics();
      break;
    case 'texas':
      cities = getTexasDexaCitiesWithClinics();
      break;
    case 'new-york':
      cities = getNewYorkDexaCitiesWithClinics();
      break;
    default:
      cities = [];
  }
  return cities.filter((c) => c.count >= MIN_CLINICS_PER_CITY);
}

// Get all states with clinic counts (for the hub grid). Only states with at
// least one shippable city appear.
export function getDexaStatesWithClinics(): { state: string; stateSlug: string; count: number; cities: string[] }[] {
  return DEXA_STATES.map((state) => {
    const cities = getDexaCitiesWithClinics(state.slug);
    const count = cities.reduce((sum, c) => sum + c.count, 0);
    return {
      state: state.name,
      stateSlug: state.slug,
      count,
      cities: cities.map((c) => c.city),
    };
  }).filter((s) => s.count > 0);
}

// Get a single clinic by slug.
export function getDexaClinicBySlug(slug: string): DexaClinic | undefined {
  return allDexaClinics.find((clinic) => clinic.slug === slug);
}

// State metadata for hub/state pages (heroColor + description per state).
export const dexaStateMetadata: Record<string, { heroColor: string; description: string }> = {
  california: {
    heroColor: 'blue',
    description: 'Find DEXA scan and body-composition studios across California. Los Angeles, San Francisco, San Diego, Orange County, and San Jose all have BodySpec mobile units, DexaFit studios, and research-grade options.',
  },
  texas: {
    heroColor: 'red',
    description: 'DEXA scan and body-composition testing across Texas. Austin, Dallas, and Houston have BodySpec and DexaFit locations for affordable, accurate body-fat and bone-density scans.',
  },
  'new-york': {
    heroColor: 'green',
    description: 'DEXA scan studios in New York City. Composition ID and DexaFit Manhattan offer fixed-studio body-composition testing for athletes and longevity-minded New Yorkers.',
  },
  colorado: {
    heroColor: 'orange',
    description: 'DEXA scan and body-composition testing in Denver. Strong body-comp and longevity audience with BodySpec and DexaFit options.',
  },
  washington: {
    heroColor: 'green',
    description: 'DEXA scan studios in Seattle. DexaFit and local body-composition labs for accurate body-fat and bone-density tracking.',
  },
};
