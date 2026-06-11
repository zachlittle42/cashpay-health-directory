// Weight Loss Clinics Index - Central hub for all weight loss clinic data
// Last Updated: February 2026

import { WeightLossClinic, WEIGHTLOSS_STATES } from '@/lib/weightloss-clinic-types';
import { texasWeightLossClinics, getTexasWeightLossClinicsByCity, getTexasWeightLossCitiesWithClinics } from './weightloss-clinics-texas';
import { floridaWeightLossClinics, getFloridaWeightLossClinicsByCity, getFloridaWeightLossCitiesWithClinics } from './weightloss-clinics-florida';
import { arizonaWeightLossClinics, getArizonaWeightLossClinicsByCity, getArizonaWeightLossCitiesWithClinics } from './weightloss-clinics-arizona';
import { californiaWeightLossClinics, getCaliforniaWeightLossClinicsByCity, getCaliforniaWeightLossCitiesWithClinics } from './weightloss-clinics-california';
import { newYorkWeightLossClinics, getNewYorkWeightLossClinicsByCity, getNewYorkWeightLossCitiesWithClinics } from './weightloss-clinics-new-york';
import { washingtonDcWeightLossClinics, getWashingtonDcWeightLossClinicsByCity, getWashingtonDcWeightLossCitiesWithClinics } from './weightloss-clinics-washington-dc';
import { georgiaWeightLossClinics, getGeorgiaWeightLossClinicsByCity, getGeorgiaWeightLossCitiesWithClinics } from './weightloss-clinics-georgia';
import { illinoisWeightLossClinics, getIllinoisWeightLossClinicsByCity, getIllinoisWeightLossCitiesWithClinics } from './weightloss-clinics-illinois';
import { massachusettsWeightLossClinics, getMassachusettsWeightLossClinicsByCity, getMassachusettsWeightLossCitiesWithClinics } from './weightloss-clinics-massachusetts';
import { washingtonWeightLossClinics, getWashingtonWeightLossClinicsByCity, getWashingtonWeightLossCitiesWithClinics } from './weightloss-clinics-washington';
import { coloradoWeightLossClinics, getColoradoWeightLossClinicsByCity, getColoradoWeightLossCitiesWithClinics } from './weightloss-clinics-colorado';
import { tennesseeWeightLossClinics, getTennesseeWeightLossClinicsByCity, getTennesseeWeightLossCitiesWithClinics } from './weightloss-clinics-tennessee';
import { nevadaWeightLossClinics, getNevadaWeightLossClinicsByCity, getNevadaWeightLossCitiesWithClinics } from './weightloss-clinics-nevada';
import { northCarolinaWeightLossClinics, getNorthCarolinaWeightLossClinicsByCity, getNorthCarolinaWeightLossCitiesWithClinics } from './weightloss-clinics-north-carolina';

// All weight loss clinics combined
export const allWeightLossClinics: WeightLossClinic[] = [
  ...texasWeightLossClinics,
  ...floridaWeightLossClinics,
  ...arizonaWeightLossClinics,
  ...californiaWeightLossClinics,
  ...newYorkWeightLossClinics,
  ...washingtonDcWeightLossClinics,
  ...georgiaWeightLossClinics,
  ...illinoisWeightLossClinics,
  ...massachusettsWeightLossClinics,
  ...washingtonWeightLossClinics,
  ...coloradoWeightLossClinics,
  ...tennesseeWeightLossClinics,
  ...nevadaWeightLossClinics,
  ...northCarolinaWeightLossClinics,
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
    case 'california':
      return californiaWeightLossClinics;
    case 'new-york':
      return newYorkWeightLossClinics;
    case 'washington-dc':
      return washingtonDcWeightLossClinics;
    case 'georgia':
      return georgiaWeightLossClinics;
    case 'illinois':
      return illinoisWeightLossClinics;
    case 'massachusetts':
      return massachusettsWeightLossClinics;
    case 'washington':
      return washingtonWeightLossClinics;
    case 'colorado':
      return coloradoWeightLossClinics;
    case 'tennessee':
      return tennesseeWeightLossClinics;
    case 'nevada':
      return nevadaWeightLossClinics;
    case 'north-carolina':
      return northCarolinaWeightLossClinics;
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
    case 'california':
      return getCaliforniaWeightLossClinicsByCity(citySlug);
    case 'new-york':
      return getNewYorkWeightLossClinicsByCity(citySlug);
    case 'washington-dc':
      return getWashingtonDcWeightLossClinicsByCity(citySlug);
    case 'georgia':
      return getGeorgiaWeightLossClinicsByCity(citySlug);
    case 'illinois':
      return getIllinoisWeightLossClinicsByCity(citySlug);
    case 'massachusetts':
      return getMassachusettsWeightLossClinicsByCity(citySlug);
    case 'washington':
      return getWashingtonWeightLossClinicsByCity(citySlug);
    case 'colorado':
      return getColoradoWeightLossClinicsByCity(citySlug);
    case 'tennessee':
      return getTennesseeWeightLossClinicsByCity(citySlug);
    case 'nevada':
      return getNevadaWeightLossClinicsByCity(citySlug);
    case 'north-carolina':
      return getNorthCarolinaWeightLossClinicsByCity(citySlug);
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
    case 'california':
      return getCaliforniaWeightLossCitiesWithClinics();
    case 'new-york':
      return getNewYorkWeightLossCitiesWithClinics();
    case 'washington-dc':
      return getWashingtonDcWeightLossCitiesWithClinics();
    case 'georgia':
      return getGeorgiaWeightLossCitiesWithClinics();
    case 'illinois':
      return getIllinoisWeightLossCitiesWithClinics();
    case 'massachusetts':
      return getMassachusettsWeightLossCitiesWithClinics();
    case 'washington':
      return getWashingtonWeightLossCitiesWithClinics();
    case 'colorado':
      return getColoradoWeightLossCitiesWithClinics();
    case 'tennessee':
      return getTennesseeWeightLossCitiesWithClinics();
    case 'nevada':
      return getNevadaWeightLossCitiesWithClinics();
    case 'north-carolina':
      return getNorthCarolinaWeightLossCitiesWithClinics();
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
