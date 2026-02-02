// Weight Loss Clinics Index - Central hub for all weight loss clinic data
// Last Updated: February 2026

import { WeightLossClinic, WEIGHTLOSS_STATES } from '@/lib/weightloss-clinic-types';
import { texasWeightLossClinics, getTexasWeightLossClinicsByCity, getTexasWeightLossCitiesWithClinics } from './weightloss-clinics-texas';
import { floridaWeightLossClinics, getFloridaWeightLossClinicsByCity, getFloridaWeightLossCitiesWithClinics } from './weightloss-clinics-florida';
import { arizonaWeightLossClinics, getArizonaWeightLossClinicsByCity, getArizonaWeightLossCitiesWithClinics } from './weightloss-clinics-arizona';

// All weight loss clinics combined
export const allWeightLossClinics: WeightLossClinic[] = [
  ...texasWeightLossClinics,
  ...floridaWeightLossClinics,
  ...arizonaWeightLossClinics,
];

// Get clinics by state
export function getWeightLossClinicsByState(stateSlug: string): WeightLossClinic[] {
  switch (stateSlug) {
    case 'texas':
      return texasWeightLossClinics;
    case 'florida':
      return floridaWeightLossClinics;
    case 'arizona':
      return arizonaWeightLossClinics;
    default:
      return [];
  }
}

// Get clinics by city
export function getWeightLossClinicsByCity(stateSlug: string, citySlug: string): WeightLossClinic[] {
  switch (stateSlug) {
    case 'texas':
      return getTexasWeightLossClinicsByCity(citySlug);
    case 'florida':
      return getFloridaWeightLossClinicsByCity(citySlug);
    case 'arizona':
      return getArizonaWeightLossClinicsByCity(citySlug);
    default:
      return [];
  }
}

// Get cities with clinics for a state
export function getWeightLossCitiesWithClinics(stateSlug: string): { city: string; citySlug: string; count: number }[] {
  switch (stateSlug) {
    case 'texas':
      return getTexasWeightLossCitiesWithClinics();
    case 'florida':
      return getFloridaWeightLossCitiesWithClinics();
    case 'arizona':
      return getArizonaWeightLossCitiesWithClinics();
    default:
      return [];
  }
}

// Get all states with clinic counts
export function getWeightLossStatesWithClinics(): { state: string; stateSlug: string; count: number; cities: string[] }[] {
  return WEIGHTLOSS_STATES.map(state => {
    const clinics = getWeightLossClinicsByState(state.slug);
    return {
      state: state.name,
      stateSlug: state.slug,
      count: clinics.length,
      cities: state.cities as unknown as string[],
    };
  }).filter(s => s.count > 0);
}

// Get a single clinic by slug
export function getWeightLossClinicBySlug(slug: string): WeightLossClinic | undefined {
  return allWeightLossClinics.find(clinic => clinic.slug === slug);
}

// State metadata for hub pages
export const weightLossStateMetadata: Record<string, { heroColor: string; description: string }> = {
  texas: {
    heroColor: 'red',
    description: 'Find GLP-1 and medical weight loss clinics across Texas. Houston, Dallas, Austin, and San Antonio have extensive options for semaglutide and tirzepatide.',
  },
  florida: {
    heroColor: 'blue',
    description: 'Florida\'s health-conscious population has driven growth in weight loss clinics. Find GLP-1 options in Miami, Tampa, Orlando, and Fort Lauderdale.',
  },
  arizona: {
    heroColor: 'orange',
    description: 'Arizona\'s wellness culture extends to weight loss. Phoenix and Scottsdale offer premium GLP-1 programs alongside affordable options in Tucson.',
  },
};
