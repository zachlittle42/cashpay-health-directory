// California Med-Spa & Aesthetics — seeded from real national chains at the
// metro level (see medspa-chains.ts). No fabricated local NAP data.

import { MedspaClinic } from '@/lib/medspa-clinic-types';
import { buildCityClinics } from './medspa-chains';

const ST = { state: 'California', stateSlug: 'california' };

export const californiaMedspaClinics: MedspaClinic[] = [
  ...buildCityClinics(['laseraway', 'sev-laser', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'Los Angeles', citySlug: 'los-angeles', ...ST,
  }),
  ...buildCityClinics(['laseraway', 'sev-laser', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'San Diego', citySlug: 'san-diego', ...ST,
  }),
  ...buildCityClinics(['laseraway', 'sev-laser', 'ideal-image', 'sono-bello'], {
    city: 'Orange County', citySlug: 'orange-county', ...ST,
  }),
  ...buildCityClinics(['laseraway', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'San Francisco', citySlug: 'san-francisco', ...ST,
  }),
];

export function getCaliforniaMedspaClinicsByCity(citySlug: string): MedspaClinic[] {
  return californiaMedspaClinics.filter((c) => c.citySlug === citySlug);
}

export function getCaliforniaMedspaCitiesWithClinics(): { city: string; citySlug: string; count: number }[] {
  const map = new Map<string, { city: string; citySlug: string; count: number }>();
  for (const c of californiaMedspaClinics) {
    const e = map.get(c.citySlug) || { city: c.city, citySlug: c.citySlug, count: 0 };
    e.count++; map.set(c.citySlug, e);
  }
  return Array.from(map.values());
}
