// Weight Loss Clinic Types
// For GLP-1, medical weight loss, and obesity medicine clinics

export type WeightLossService = 'glp1' | 'semaglutide' | 'tirzepatide' | 'phentermine' | 'medical_supervision' | 'nutrition' | 'body_composition';

export interface WeightLossClinic {
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  services: WeightLossService[];
  priceRange: string;
  website: string;
  phone?: string;
  description: string;
  highlights: string[];
  bestFor: string;
  rating?: number;
  reviewCount?: number;
  reviewSource?: string;
  telehealth?: boolean;
  inPerson: boolean;
  medications: string[];
  lastVerified: string;
}

export interface StateWeightLossClinics {
  state: string;
  stateSlug: string;
  cities: {
    city: string;
    citySlug: string;
    clinics: WeightLossClinic[];
  }[];
}

// US States with weight loss clinic coverage
export const WEIGHTLOSS_STATES = [
  { name: 'Texas', slug: 'texas', cities: ['Houston', 'Dallas', 'Austin', 'San Antonio'] },
  { name: 'Florida', slug: 'florida', cities: ['Miami', 'Tampa', 'Orlando', 'Fort Lauderdale'] },
  { name: 'Arizona', slug: 'arizona', cities: ['Phoenix', 'Scottsdale', 'Tucson'] },
  { name: 'California', slug: 'california', cities: ['Los Angeles', 'San Diego', 'San Francisco'] },
  { name: 'New York', slug: 'new-york', cities: ['New York City', 'Long Island'] },
] as const;

export type WeightLossState = typeof WEIGHTLOSS_STATES[number]['slug'];
