// Hormone Clinics Index - Central hub for all hormone clinic data
// Last Updated: February 2026

import { HormoneClinic, HORMONE_STATES } from '@/lib/hormone-clinic-types';
import { texasHormoneClinics, getTexasClinicsByCity, getTexasCitiesWithClinics } from './hormone-clinics-texas';
import { floridaHormoneClinics, getFloridaClinicsByCity, getFloridaCitiesWithClinics } from './hormone-clinics-florida';
import { arizonaHormoneClinics, getArizonaClinicsByCity, getArizonaCitiesWithClinics } from './hormone-clinics-arizona';
import { californiaHormoneClinics, getCaliforniaHormoneClinicsByCity, getCaliforniaHormoneCitiesWithClinics } from './hormone-clinics-california';
import { newYorkHormoneClinics, getNewYorkHormoneClinicsByCity, getNewYorkHormoneCitiesWithClinics } from './hormone-clinics-new-york';
import { washingtonDcHormoneClinics, getWashingtonDcHormoneClinicsByCity, getWashingtonDcHormoneCitiesWithClinics } from './hormone-clinics-washington-dc';
import { georgiaHormoneClinics, getGeorgiaHormoneClinicsByCity, getGeorgiaHormoneCitiesWithClinics } from './hormone-clinics-georgia';
import { illinoisHormoneClinics, getIllinoisHormoneClinicsByCity, getIllinoisHormoneCitiesWithClinics } from './hormone-clinics-illinois';
import { massachusettsHormoneClinics, getMassachusettsHormoneClinicsByCity, getMassachusettsHormoneCitiesWithClinics } from './hormone-clinics-massachusetts';
import { washingtonHormoneClinics, getWashingtonHormoneClinicsByCity, getWashingtonHormoneCitiesWithClinics } from './hormone-clinics-washington';
import { coloradoHormoneClinics, getColoradoHormoneClinicsByCity, getColoradoHormoneCitiesWithClinics } from './hormone-clinics-colorado';
import { tennesseeHormoneClinics, getTennesseeHormoneClinicsByCity, getTennesseeHormoneCitiesWithClinics } from './hormone-clinics-tennessee';
import { nevadaHormoneClinics, getNevadaHormoneClinicsByCity, getNevadaHormoneCitiesWithClinics } from './hormone-clinics-nevada';
import { northCarolinaHormoneClinics, getNorthCarolinaHormoneClinicsByCity, getNorthCarolinaHormoneCitiesWithClinics } from './hormone-clinics-north-carolina';

// All hormone clinics combined
export const allHormoneClinics: HormoneClinic[] = [
  ...texasHormoneClinics,
  ...floridaHormoneClinics,
  ...arizonaHormoneClinics,
  ...californiaHormoneClinics,
  ...newYorkHormoneClinics,
  ...washingtonDcHormoneClinics,
  ...georgiaHormoneClinics,
  ...illinoisHormoneClinics,
  ...massachusettsHormoneClinics,
  ...washingtonHormoneClinics,
  ...coloradoHormoneClinics,
  ...tennesseeHormoneClinics,
  ...nevadaHormoneClinics,
  ...northCarolinaHormoneClinics,
];

// Get clinics by state
export function getHormoneClinicsByState(stateSlug: string): HormoneClinic[] {
  switch (stateSlug) {
    case 'texas':
      return texasHormoneClinics;
    case 'florida':
      return floridaHormoneClinics;
    case 'arizona':
      return arizonaHormoneClinics;
    case 'california':
      return californiaHormoneClinics;
    case 'new-york':
      return newYorkHormoneClinics;
    case 'washington-dc':
      return washingtonDcHormoneClinics;
    case 'georgia':
      return georgiaHormoneClinics;
    case 'illinois':
      return illinoisHormoneClinics;
    case 'massachusetts':
      return massachusettsHormoneClinics;
    case 'washington':
      return washingtonHormoneClinics;
    case 'colorado':
      return coloradoHormoneClinics;
    case 'tennessee':
      return tennesseeHormoneClinics;
    case 'nevada':
      return nevadaHormoneClinics;
    case 'north-carolina':
      return northCarolinaHormoneClinics;
    default:
      return [];
  }
}

// Get clinics by city
export function getHormoneClinicsByCity(stateSlug: string, citySlug: string): HormoneClinic[] {
  switch (stateSlug) {
    case 'texas':
      return getTexasClinicsByCity(citySlug);
    case 'florida':
      return getFloridaClinicsByCity(citySlug);
    case 'arizona':
      return getArizonaClinicsByCity(citySlug);
    case 'california':
      return getCaliforniaHormoneClinicsByCity(citySlug);
    case 'new-york':
      return getNewYorkHormoneClinicsByCity(citySlug);
    case 'washington-dc':
      return getWashingtonDcHormoneClinicsByCity(citySlug);
    case 'georgia':
      return getGeorgiaHormoneClinicsByCity(citySlug);
    case 'illinois':
      return getIllinoisHormoneClinicsByCity(citySlug);
    case 'massachusetts':
      return getMassachusettsHormoneClinicsByCity(citySlug);
    case 'washington':
      return getWashingtonHormoneClinicsByCity(citySlug);
    case 'colorado':
      return getColoradoHormoneClinicsByCity(citySlug);
    case 'tennessee':
      return getTennesseeHormoneClinicsByCity(citySlug);
    case 'nevada':
      return getNevadaHormoneClinicsByCity(citySlug);
    case 'north-carolina':
      return getNorthCarolinaHormoneClinicsByCity(citySlug);
    default:
      return [];
  }
}

// Get cities with clinics for a state
export function getCitiesWithClinics(stateSlug: string): { city: string; citySlug: string; count: number }[] {
  switch (stateSlug) {
    case 'texas':
      return getTexasCitiesWithClinics();
    case 'florida':
      return getFloridaCitiesWithClinics();
    case 'arizona':
      return getArizonaCitiesWithClinics();
    case 'california':
      return getCaliforniaHormoneCitiesWithClinics();
    case 'new-york':
      return getNewYorkHormoneCitiesWithClinics();
    case 'washington-dc':
      return getWashingtonDcHormoneCitiesWithClinics();
    case 'georgia':
      return getGeorgiaHormoneCitiesWithClinics();
    case 'illinois':
      return getIllinoisHormoneCitiesWithClinics();
    case 'massachusetts':
      return getMassachusettsHormoneCitiesWithClinics();
    case 'washington':
      return getWashingtonHormoneCitiesWithClinics();
    case 'colorado':
      return getColoradoHormoneCitiesWithClinics();
    case 'tennessee':
      return getTennesseeHormoneCitiesWithClinics();
    case 'nevada':
      return getNevadaHormoneCitiesWithClinics();
    case 'north-carolina':
      return getNorthCarolinaHormoneCitiesWithClinics();
    default:
      return [];
  }
}

// Get all states with clinic counts
export function getStatesWithClinics(): { state: string; stateSlug: string; count: number; cities: string[] }[] {
  return HORMONE_STATES.map(state => {
    const clinics = getHormoneClinicsByState(state.slug);
    return {
      state: state.name,
      stateSlug: state.slug,
      count: clinics.length,
      cities: state.cities as unknown as string[],
    };
  }).filter(s => s.count > 0);
}

// Get a single clinic by slug
export function getHormoneClinicBySlug(slug: string): HormoneClinic | undefined {
  return allHormoneClinics.find(clinic => clinic.slug === slug);
}

// State metadata for hub pages
export const stateMetadata: Record<string, { heroColor: string; description: string }> = {
  texas: {
    heroColor: 'red',
    description: 'Find TRT and HRT clinics across Texas. Houston, Dallas, Austin, and San Antonio have robust hormone optimization options for men and women.',
  },
  florida: {
    heroColor: 'blue',
    description: 'Florida\'s warm climate attracts health-conscious residents. Find hormone therapy clinics in Miami, Tampa, Orlando, and Fort Lauderdale.',
  },
  arizona: {
    heroColor: 'orange',
    description: 'Arizona\'s wellness hub centers on Phoenix and Scottsdale. Premium hormone optimization clinics serve the health-focused community.',
  },
};
