// Centralized provider data exports

import { Provider, Category } from './types';
import telehealthProviders from './providers-telehealth';
import medicalTourismProviders from './providers-medical-tourism';

// Combine all providers into a single lookup
export const ALL_PROVIDERS: Record<Category, Provider[]> = {
  // Telehealth
  labs: telehealthProviders.labs,
  glp1: telehealthProviders.glp1,
  trt: telehealthProviders.trt,

  // Local
  dexa: telehealthProviders.dexa,
  vo2max: [], // Coming soon
  iv: [], // Coming soon
  longevity: [], // Coming soon

  // Medical Tourism
  dental: medicalTourismProviders.dental,
  hair_transplant: medicalTourismProviders.hair_transplant,
  bariatric: medicalTourismProviders.bariatric,
  plastic_surgery: medicalTourismProviders.plastic_surgery,
  fertility: medicalTourismProviders.fertility,

  // Coming soon
  orthopedic: [],
  cardiac: [],
  vision: [],
};

// Get providers by category
export function getProvidersByCategory(category: Category): Provider[] {
  return ALL_PROVIDERS[category] || [];
}

// Get featured providers by category
export function getFeaturedProviders(category: Category): Provider[] {
  return getProvidersByCategory(category).filter(p => p.featured);
}

// Get all providers for a destination country
export function getProvidersByDestination(country: string): Provider[] {
  const allProviders = Object.values(ALL_PROVIDERS).flat();
  return allProviders.filter(p => p.destinationCountry?.toLowerCase() === country.toLowerCase());
}

// Get provider by slug
export function getProviderBySlug(slug: string): Provider | undefined {
  const allProviders = Object.values(ALL_PROVIDERS).flat();
  return allProviders.find(p => p.slug === slug);
}

// Get total provider count
export function getTotalProviderCount(): number {
  return Object.values(ALL_PROVIDERS).flat().length;
}

// Get provider count by category
export function getProviderCountByCategory(): Record<Category, number> {
  const counts = {} as Record<Category, number>;
  for (const [category, providers] of Object.entries(ALL_PROVIDERS)) {
    counts[category as Category] = providers.length;
  }
  return counts;
}

// Re-export individual provider arrays for direct import
export { telehealthProviders, medicalTourismProviders };
