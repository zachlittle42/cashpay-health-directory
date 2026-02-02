// Hormone Clinics Index - Central hub for all hormone clinic data
// Last Updated: February 2026

import { HormoneClinic, HORMONE_STATES } from '@/lib/hormone-clinic-types';
import { texasHormoneClinics, getTexasClinicsByCity, getTexasCitiesWithClinics } from './hormone-clinics-texas';
import { floridaHormoneClinics, getFloridaClinicsByCity, getFloridaCitiesWithClinics } from './hormone-clinics-florida';
import { arizonaHormoneClinics, getArizonaClinicsByCity, getArizonaCitiesWithClinics } from './hormone-clinics-arizona';

// All hormone clinics combined
export const allHormoneClinics: HormoneClinic[] = [
  ...texasHormoneClinics,
  ...floridaHormoneClinics,
  ...arizonaHormoneClinics,
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
