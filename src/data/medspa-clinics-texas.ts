// Texas Med-Spa & Aesthetics — seeded from real national chains at the metro
// level (see medspa-chains.ts). No fabricated local NAP data.

import { MedspaClinic } from '@/lib/medspa-clinic-types';
import { buildCityClinics } from './medspa-chains';

const ST = { state: 'Texas', stateSlug: 'texas' };

export const texasMedspaClinics: MedspaClinic[] = [
  ...buildCityClinics(['milan-laser', 'laseraway', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'Houston', citySlug: 'houston', ...ST,
  }),
  ...buildCityClinics(['milan-laser', 'laseraway', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'Dallas', citySlug: 'dallas', ...ST,
  }),
  ...buildCityClinics(['milan-laser', 'ideal-image', 'sono-bello', 'restore'], {
    city: 'Austin', citySlug: 'austin', ...ST,
  }),
  ...buildCityClinics(['milan-laser', 'ideal-image', 'sono-bello'], {
    city: 'San Antonio', citySlug: 'san-antonio', ...ST,
  }),
];

export function getTexasMedspaClinicsByCity(citySlug: string): MedspaClinic[] {
  return texasMedspaClinics.filter((c) => c.citySlug === citySlug);
}

export function getTexasMedspaCitiesWithClinics(): { city: string; citySlug: string; count: number }[] {
  const map = new Map<string, { city: string; citySlug: string; count: number }>();
  for (const c of texasMedspaClinics) {
    const e = map.get(c.citySlug) || { city: c.city, citySlug: c.citySlug, count: 0 };
    e.count++; map.set(c.citySlug, e);
  }
  return Array.from(map.values());
}
