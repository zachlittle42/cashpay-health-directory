// Panama Stem Cell Clinics
// Last Updated: February 2026

import { StemCellClinic } from '@/lib/stem-cell-clinic-types';

export const panamaStemCellClinics: StemCellClinic[] = [
  {
    name: 'Stem Cell Institute Panama',
    slug: 'stem-cell-institute-panama',
    city: 'Panama City',
    country: 'Panama',
    countrySlug: 'panama',
    address: 'Punta Pacifica, Panama City',
    treatments: ['msc', 'expanded', 'umbilical', 'exosomes'],
    conditionsTreated: ['autoimmune', 'neurological', 'orthopedic', 'anti_aging', 'cardiac'],
    priceRange: '$22,000-45,000',
    website: 'https://cellmedicine.com',
    phone: '+1 (800) 980-7836',
    description: 'One of the world\'s most established stem cell clinics, founded by Neil Riordan, PhD. Known for treating neurological conditions, MS, and autoimmune diseases with culture-expanded umbilical cord stem cells.',
    highlights: ['Neil Riordan PhD founder', '15+ years experience', 'Published research', 'Expanded cell protocols'],
    bestFor: 'Complex neurological and autoimmune conditions',
    accreditations: ['Panama Ministry of Health', 'Published peer-reviewed research'],
    patientVolume: '10,000+ patients',
    notablePatients: 'Mel Gibson (father), various athletes',
    includesInPackage: ['All treatments', 'Lab work', 'Hotel recommendations', 'Airport coordination'],
    typicalStay: '4-5 days',
    rating: 4.8,
    reviewCount: 567,
    reviewSource: 'Google',
    lastVerified: '2026-01-15',
  },
  {
    name: 'Golden Cells Panama',
    slug: 'golden-cells-panama',
    city: 'Panama City',
    country: 'Panama',
    countrySlug: 'panama',
    address: 'San Francisco, Panama City',
    treatments: ['msc', 'expanded', 'umbilical', 'exosomes', 'prp'],
    conditionsTreated: ['orthopedic', 'anti_aging', 'autoimmune', 'neurological'],
    priceRange: '$25,000-60,000',
    website: 'https://goldencells.com',
    phone: '+507 6747-7777',
    description: 'Premium stem cell clinic popular with NFL players and professional athletes. Known for sports medicine protocols and anti-aging treatments.',
    highlights: ['NFL player destination', 'Sports medicine focus', 'Premium experience', 'Athlete protocols'],
    bestFor: 'Professional athletes and sports injuries',
    accreditations: ['Panama Ministry of Health'],
    patientVolume: '2,500+ athletes',
    notablePatients: 'George Kittle, Kyle Juszczyk, multiple NFL players',
    includesInPackage: ['Luxury hotel', 'All procedures', 'Private transportation', 'Chef meals', 'Concierge'],
    typicalStay: '5-7 days',
    rating: 4.9,
    reviewCount: 189,
    reviewSource: 'Google',
    lastVerified: '2026-01-15',
  },
  {
    name: 'MedStem Panama',
    slug: 'medstem-panama',
    city: 'Panama City',
    country: 'Panama',
    countrySlug: 'panama',
    address: 'Bella Vista, Panama City',
    treatments: ['msc', 'umbilical', 'exosomes', 'prp'],
    conditionsTreated: ['orthopedic', 'anti_aging', 'autoimmune'],
    priceRange: '$15,000-35,000',
    website: 'https://medstempanama.com',
    phone: '+507 263-0505',
    description: 'More accessible Panama option with solid protocols. Focus on orthopedic regeneration and anti-aging. Good value for Panama.',
    highlights: ['Value option', 'Orthopedic focus', 'Experienced team', 'Flexible protocols'],
    bestFor: 'Budget-conscious patients seeking Panama quality',
    accreditations: ['Panama Ministry of Health'],
    patientVolume: '1,500+ patients',
    includesInPackage: ['All procedures', 'Lab work', 'Transportation to clinic'],
    typicalStay: '3-5 days',
    rating: 4.6,
    reviewCount: 98,
    reviewSource: 'Google',
    lastVerified: '2026-01-15',
  },
  {
    name: 'Blue Horizon International',
    slug: 'blue-horizon-panama',
    city: 'Panama City',
    country: 'Panama',
    countrySlug: 'panama',
    address: 'Costa del Este, Panama City',
    treatments: ['msc', 'expanded', 'umbilical', 'adipose'],
    conditionsTreated: ['autoimmune', 'neurological', 'anti_aging', 'cardiac'],
    priceRange: '$20,000-50,000',
    website: 'https://bluehorizoninternational.com',
    phone: '+507 392-4000',
    description: 'Full-service regenerative medicine center with focus on complex autoimmune and neurological cases. Comprehensive diagnostic workup included.',
    highlights: ['Comprehensive diagnostics', 'Complex cases', 'Research-oriented', 'Long-term monitoring'],
    bestFor: 'Complex cases requiring thorough workup',
    accreditations: ['Panama Ministry of Health', 'International Society for Stem Cell Research'],
    patientVolume: '2,000+ patients',
    includesInPackage: ['Full diagnostic workup', 'All treatments', 'Follow-up protocol', '6-month monitoring'],
    typicalStay: '5-7 days',
    rating: 4.7,
    reviewCount: 123,
    reviewSource: 'Google',
    lastVerified: '2026-01-15',
  },
];

// Helper functions
export function getPanamaClinicsByCity(citySlug: string): StemCellClinic[] {
  // Panama only has Panama City clinics
  if (citySlug === 'panama-city') {
    return panamaStemCellClinics;
  }
  return [];
}

export function getPanamaCitiesWithClinics(): { city: string; citySlug: string; count: number }[] {
  return [{
    city: 'Panama City',
    citySlug: 'panama-city',
    count: panamaStemCellClinics.length,
  }];
}
