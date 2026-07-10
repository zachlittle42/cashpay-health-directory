// Med-Spa & Aesthetics Index — central hub for the /med-spa city directory.
// Mirrors dexa-clinics-index.ts. Only wired states return clinics; the switch
// default returns [] so unwired states never emit dead URLs. The thin-content
// guard keeps cities with < MIN_CLINICS_FOR_INDEX out of the index.
// Last Updated: June 2026

import { MedspaClinic, MEDSPA_STATES } from '@/lib/medspa-clinic-types';
import { MIN_CLINICS_FOR_INDEX } from '@/lib/indexability';
import {
  californiaMedspaClinics,
  getCaliforniaMedspaClinicsByCity,
  getCaliforniaMedspaCitiesWithClinics,
} from './medspa-clinics-california';
import {
  texasMedspaClinics,
  getTexasMedspaClinicsByCity,
  getTexasMedspaCitiesWithClinics,
} from './medspa-clinics-texas';

export const allMedspaClinics: MedspaClinic[] = [
  ...californiaMedspaClinics,
  ...texasMedspaClinics,
];

export function getMedspaClinicsByState(stateSlug: string): MedspaClinic[] {
  switch (stateSlug) {
    case 'california':
      return californiaMedspaClinics;
    case 'texas':
      return texasMedspaClinics;
    default:
      return [];
  }
}

export function getMedspaClinicsByCity(stateSlug: string, citySlug: string): MedspaClinic[] {
  switch (stateSlug) {
    case 'california':
      return getCaliforniaMedspaClinicsByCity(citySlug);
    case 'texas':
      return getTexasMedspaClinicsByCity(citySlug);
    default:
      return [];
  }
}

export function getMedspaCitiesWithClinics(stateSlug: string): { city: string; citySlug: string; count: number }[] {
  let cities: { city: string; citySlug: string; count: number }[];
  switch (stateSlug) {
    case 'california':
      cities = getCaliforniaMedspaCitiesWithClinics();
      break;
    case 'texas':
      cities = getTexasMedspaCitiesWithClinics();
      break;
    default:
      cities = [];
  }
  return cities.filter((c) => c.count >= MIN_CLINICS_FOR_INDEX);
}

export function getMedspaStatesWithClinics(): { state: string; stateSlug: string; count: number; cities: string[] }[] {
  return MEDSPA_STATES.map((state) => {
    const cities = getMedspaCitiesWithClinics(state.slug);
    const count = cities.reduce((sum, c) => sum + c.count, 0);
    return {
      state: state.name,
      stateSlug: state.slug,
      count,
      cities: cities.map((c) => c.city),
    };
  }).filter((s) => s.count > 0);
}

export function getMedspaClinicBySlug(slug: string): MedspaClinic | undefined {
  return allMedspaClinics.find((clinic) => clinic.slug === slug);
}

// State metadata for hub/state pages.
export const medspaStateMetadata: Record<string, { heroColor: string; description: string }> = {
  california: {
    heroColor: 'blue',
    description:
      'Find med-spa and aesthetics providers across California. Los Angeles, San Diego, Orange County, and San Francisco are served by national chains like LaserAway, SEV Laser, Ideal Image, and Sono Bello for Botox, fillers, laser hair removal, and body contouring.',
  },
  texas: {
    heroColor: 'red',
    description:
      'Med-spa and aesthetics providers across Texas. Houston, Dallas, Austin, and San Antonio have national brands like Milan Laser, LaserAway, Ideal Image, and Restore Hyper Wellness for laser hair removal, injectables, body contouring, and IV therapy.',
  },
};
