// DEXA Scan Clinics Index — central hub for all DEXA city-directory data.
// Mirrors weightloss-clinics-index.ts. Only wired states return clinics; the
// switch default returns [] so unwired states (texas/new-york/colorado/
// washington until scraped) never emit dead URLs.
// Last Updated: June 2026

import { DexaClinic, DEXA_STATES } from '@/lib/dexa-clinic-types';
import { MIN_CLINICS_FOR_INDEX } from '@/lib/indexability';
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
import { floridaDexaClinics, getFloridaDexaClinicsByCity, getFloridaDexaCitiesWithClinics } from './dexa-clinics-florida';
import { arizonaDexaClinics, getArizonaDexaClinicsByCity, getArizonaDexaCitiesWithClinics } from './dexa-clinics-arizona';
import { washingtonDcDexaClinics, getWashingtonDcDexaClinicsByCity, getWashingtonDcDexaCitiesWithClinics } from './dexa-clinics-washington-dc';
import { georgiaDexaClinics, getGeorgiaDexaClinicsByCity, getGeorgiaDexaCitiesWithClinics } from './dexa-clinics-georgia';
import { illinoisDexaClinics, getIllinoisDexaClinicsByCity, getIllinoisDexaCitiesWithClinics } from './dexa-clinics-illinois';
import { massachusettsDexaClinics, getMassachusettsDexaClinicsByCity, getMassachusettsDexaCitiesWithClinics } from './dexa-clinics-massachusetts';
import { washingtonDexaClinics, getWashingtonDexaClinicsByCity, getWashingtonDexaCitiesWithClinics } from './dexa-clinics-washington';
import { coloradoDexaClinics, getColoradoDexaClinicsByCity, getColoradoDexaCitiesWithClinics } from './dexa-clinics-colorado';
import { nevadaDexaClinics, getNevadaDexaClinicsByCity, getNevadaDexaCitiesWithClinics } from './dexa-clinics-nevada';
import { tennesseeDexaClinics, getTennesseeDexaClinicsByCity, getTennesseeDexaCitiesWithClinics } from './dexa-clinics-tennessee';
import { northCarolinaDexaClinics, getNorthCarolinaDexaClinicsByCity, getNorthCarolinaDexaCitiesWithClinics } from './dexa-clinics-north-carolina';

// All DEXA clinics combined.
export const allDexaClinics: DexaClinic[] = [
  ...californiaDexaClinics,
  ...texasDexaClinics,
  ...newYorkDexaClinics,
  ...floridaDexaClinics,
  ...arizonaDexaClinics,
  ...washingtonDcDexaClinics,
  ...georgiaDexaClinics,
  ...illinoisDexaClinics,
  ...massachusettsDexaClinics,
  ...washingtonDexaClinics,
  ...coloradoDexaClinics,
  ...nevadaDexaClinics,
  ...tennesseeDexaClinics,
  ...northCarolinaDexaClinics,
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
    case 'florida':
      return floridaDexaClinics;
    case 'arizona':
      return arizonaDexaClinics;
    case 'washington-dc':
      return washingtonDcDexaClinics;
    case 'georgia':
      return georgiaDexaClinics;
    case 'illinois':
      return illinoisDexaClinics;
    case 'massachusetts':
      return massachusettsDexaClinics;
    case 'washington':
      return washingtonDexaClinics;
    case 'colorado':
      return coloradoDexaClinics;
    case 'nevada':
      return nevadaDexaClinics;
    case 'tennessee':
      return tennesseeDexaClinics;
    case 'north-carolina':
      return northCarolinaDexaClinics;
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
    case 'florida':
      return getFloridaDexaClinicsByCity(citySlug);
    case 'arizona':
      return getArizonaDexaClinicsByCity(citySlug);
    case 'washington-dc':
      return getWashingtonDcDexaClinicsByCity(citySlug);
    case 'georgia':
      return getGeorgiaDexaClinicsByCity(citySlug);
    case 'illinois':
      return getIllinoisDexaClinicsByCity(citySlug);
    case 'massachusetts':
      return getMassachusettsDexaClinicsByCity(citySlug);
    case 'washington':
      return getWashingtonDexaClinicsByCity(citySlug);
    case 'colorado':
      return getColoradoDexaClinicsByCity(citySlug);
    case 'nevada':
      return getNevadaDexaClinicsByCity(citySlug);
    case 'tennessee':
      return getTennesseeDexaClinicsByCity(citySlug);
    case 'north-carolina':
      return getNorthCarolinaDexaClinicsByCity(citySlug);
    default:
      return [];
  }
}

// Get cities with clinics for a state. Applies the thin-content guard: a city
// only surfaces (as a page / link) once it has >= MIN_CLINICS_FOR_INDEX entries.
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
    case 'florida':
      return getFloridaDexaCitiesWithClinics();
    case 'arizona':
      return getArizonaDexaCitiesWithClinics();
    case 'washington-dc':
      return getWashingtonDcDexaCitiesWithClinics();
    case 'georgia':
      return getGeorgiaDexaCitiesWithClinics();
    case 'illinois':
      return getIllinoisDexaCitiesWithClinics();
    case 'massachusetts':
      return getMassachusettsDexaCitiesWithClinics();
    case 'washington':
      return getWashingtonDexaCitiesWithClinics();
    case 'colorado':
      return getColoradoDexaCitiesWithClinics();
    case 'nevada':
      return getNevadaDexaCitiesWithClinics();
    case 'tennessee':
      return getTennesseeDexaCitiesWithClinics();
    case 'north-carolina':
      return getNorthCarolinaDexaCitiesWithClinics();
    default:
      cities = [];
  }
  return cities.filter((c) => c.count >= MIN_CLINICS_FOR_INDEX);
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
