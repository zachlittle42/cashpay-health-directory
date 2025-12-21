import { Provider, CategorySlug } from './types';
import { telehealthProviders } from './providers-telehealth';
import { medicalTourismProviders } from './providers-medical-tourism';

export const allProviders: Provider[] = [
  ...telehealthProviders,
  ...medicalTourismProviders,
];

export function getProvidersByCategory(category: CategorySlug): Provider[] {
  return allProviders.filter(p => p.category === category);
}

export function getFeaturedProvidersByCategory(category: CategorySlug): Provider[] {
  return allProviders.filter(p => p.category === category && p.featured);
}

export function getProviderBySlug(slug: string): Provider | undefined {
  return allProviders.find(p => p.slug === slug);
}

export function getAllFeaturedProviders(): Provider[] {
  return allProviders.filter(p => p.featured);
}
