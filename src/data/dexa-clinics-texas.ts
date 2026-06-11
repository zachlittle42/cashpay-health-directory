// Texas DEXA Scan Clinics
// SCAFFOLD ONLY — gated behind the scrape. Austin/Dallas/Houston have ZERO
// existing DEXA data in the repo and MUST be scraped from BodySpec/DexaFit
// public location lists (verify each address/price) before any entry is added.
// Until then this array is empty, so getTexasDexaCitiesWithClinics() returns []
// and no dead /dexa-scans/texas/* URLs are emitted. NO FABRICATION.

import { DexaClinic } from '@/lib/dexa-clinic-types';

export const texasDexaClinics: DexaClinic[] = [];

export function getTexasDexaClinicsByCity(citySlug: string): DexaClinic[] {
  return texasDexaClinics.filter((c) => c.citySlug === citySlug);
}

export function getTexasDexaCitiesWithClinics(): { city: string; citySlug: string; count: number }[] {
  const map = new Map<string, { city: string; citySlug: string; count: number }>();
  for (const clinic of texasDexaClinics) {
    const existing = map.get(clinic.citySlug);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(clinic.citySlug, { city: clinic.city, citySlug: clinic.citySlug, count: 1 });
    }
  }
  return Array.from(map.values());
}
