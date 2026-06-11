// New York DEXA Scan Clinics
// SCAFFOLD ONLY — gated behind the scrape. NYC has ZERO existing DEXA data in
// the repo and MUST be scraped from Composition ID + DexaFit Manhattan public
// location lists (verify each address/price) before any entry is added. Until
// then this array is empty, so getNewYorkDexaCitiesWithClinics() returns [] and
// no dead /dexa-scans/new-york/* URLs are emitted. NO FABRICATION.

import { DexaClinic } from '@/lib/dexa-clinic-types';

export const newYorkDexaClinics: DexaClinic[] = [];

export function getNewYorkDexaClinicsByCity(citySlug: string): DexaClinic[] {
  return newYorkDexaClinics.filter((c) => c.citySlug === citySlug);
}

export function getNewYorkDexaCitiesWithClinics(): { city: string; citySlug: string; count: number }[] {
  const map = new Map<string, { city: string; citySlug: string; count: number }>();
  for (const clinic of newYorkDexaClinics) {
    const existing = map.get(clinic.citySlug);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(clinic.citySlug, { city: clinic.city, citySlug: clinic.citySlug, count: 1 });
    }
  }
  return Array.from(map.values());
}
