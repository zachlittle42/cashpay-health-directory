// Stem Cell Clinics Index
// Last Updated: February 2026

import { StemCellClinic, STEM_CELL_COUNTRIES } from '@/lib/stem-cell-clinic-types';
import { mexicoStemCellClinics, getMexicoClinicsByCity, getMexicoCitiesWithClinics } from './stem-cell-clinics-mexico';
import { panamaStemCellClinics, getPanamaClinicsByCity, getPanamaCitiesWithClinics } from './stem-cell-clinics-panama';

// All stem cell clinics
export const allStemCellClinics: StemCellClinic[] = [
  ...mexicoStemCellClinics,
  ...panamaStemCellClinics,
];

// Get clinics by country
export function getStemCellClinicsByCountry(countrySlug: string): StemCellClinic[] {
  switch (countrySlug) {
    case 'mexico':
      return mexicoStemCellClinics;
    case 'panama':
      return panamaStemCellClinics;
    default:
      return [];
  }
}

// Get clinics by city
export function getStemCellClinicsByCity(countrySlug: string, citySlug: string): StemCellClinic[] {
  switch (countrySlug) {
    case 'mexico':
      return getMexicoClinicsByCity(citySlug);
    case 'panama':
      return getPanamaClinicsByCity(citySlug);
    default:
      return [];
  }
}

// Get cities for a country
export function getStemCellCitiesWithClinics(countrySlug: string): { city: string; citySlug: string; count: number }[] {
  switch (countrySlug) {
    case 'mexico':
      return getMexicoCitiesWithClinics();
    case 'panama':
      return getPanamaCitiesWithClinics();
    default:
      return [];
  }
}

// Get all countries with counts
export function getCountriesWithClinics(): { country: string; countrySlug: string; flag: string; count: number; cities: string[] }[] {
  return STEM_CELL_COUNTRIES.map(country => {
    const clinics = getStemCellClinicsByCountry(country.slug);
    return {
      country: country.name,
      countrySlug: country.slug,
      flag: country.flag,
      count: clinics.length,
      cities: country.cities as unknown as string[],
    };
  }).filter(c => c.count > 0);
}

// Get a single clinic by slug
export function getStemCellClinicBySlug(slug: string): StemCellClinic | undefined {
  return allStemCellClinics.find(clinic => clinic.slug === slug);
}

// Country metadata
export const countryMetadata: Record<string, {
  flag: string;
  heroColor: string;
  description: string;
  flightTime: string;
  regulations: string;
  whyChoose: string[];
  considerations: string[];
}> = {
  mexico: {
    flag: '🇲🇽',
    heroColor: 'green',
    description: 'Mexico is the most accessible stem cell destination for Americans. Border cities like Tijuana offer same-day treatment, while resort destinations like Cancun and Puerto Vallarta combine treatment with recovery vacation.',
    flightTime: '2-4 hours from most US cities',
    regulations: 'COFEPRIS regulates stem cell clinics. Less restrictive than US FDA, allowing treatments not available domestically.',
    whyChoose: [
      'Closest destination - border cities allow day trips',
      'Most affordable option - $5,000-35,000 typical',
      'Many US-trained physicians',
      'Can combine with vacation (Cancun, Puerto Vallarta, Los Cabos)',
    ],
    considerations: [
      'Quality varies significantly between clinics',
      'Some clinics make exaggerated claims',
      'Border cities less appealing for recovery',
      'Less research published than Panama clinics',
    ],
  },
  panama: {
    flag: '🇵🇦',
    heroColor: 'blue',
    description: 'Panama is the premium destination for stem cell therapy, known for treating high-profile athletes and celebrities. Culture-expanded stem cells offer higher cell counts than other destinations.',
    flightTime: '4-5 hours from Miami',
    regulations: 'Panama Ministry of Health regulates clinics. Allows culture-expanded stem cells not available in most countries.',
    whyChoose: [
      'Highest cell counts through expansion technology',
      'Established clinics with published research',
      'Popular with NFL players and professional athletes',
      'English widely spoken, US dollar accepted',
    ],
    considerations: [
      'Most expensive option - $20,000-60,000 typical',
      'Longer travel required from most US cities',
      'Premium tier may be overkill for simpler conditions',
      'Wait times can be longer for popular clinics',
    ],
  },
};
