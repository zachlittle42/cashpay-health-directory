import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Longevity Medicine: US Clinics, Stem Cells & Regenerative Treatments | VitalityScout',
  description: 'Compare longevity clinics, stem cell therapy, peptides, NAD+ treatments. US regional clinics (Fountain Life, Next Health) and international destinations (Mexico, Panama, Cayman).',
};

// US Longevity Clinic Chains
const usClinicChains = [
  {
    name: 'Fountain Life',
    locations: ['Dallas', 'NYC', 'Naples', 'Orlando'],
    priceRange: '$2,995 - $21,500/year',
    focus: 'AI-enhanced MRI, GRAIL cancer screening, comprehensive diagnostics',
    founders: 'Peter Diamandis, Tony Robbins',
    website: 'fountainlife.com',
    tier: 'premium',
  },
  {
    name: 'Next Health',
    locations: ['LA (multiple)', 'Houston', 'NYC'],
    priceRange: '$199/month base',
    focus: 'IV therapy, cryotherapy, hyperbaric, infrared',
    founders: 'Dr. Darshan Shah',
    website: 'next-health.com',
    tier: 'accessible',
  },
  {
    name: 'Humanaut Health',
    locations: ['Austin', 'Dallas (coming)', 'South Florida (coming)'],
    priceRange: '$355 - $3,295/month',
    focus: 'Health optimization, regenerative medicine',
    founders: 'Franchising model',
    website: 'humanauthealth.com',
    tier: 'mid',
  },
  {
    name: 'Human Longevity',
    locations: ['South San Francisco'],
    priceRange: '$8,000 - $19,000/year',
    focus: 'Executive health, comprehensive diagnostics',
    founders: 'Dr. J. Craig Venter',
    website: 'humanlongevity.com',
    tier: 'premium',
  },
];

// Treatment Categories
const treatmentCategories = [
  {
    name: 'Advanced Diagnostics',
    icon: '🔬',
    treatments: ['Full-body MRI', 'Coronary CT', 'GRAIL cancer screening', 'Biological age testing', 'Genome sequencing'],
    priceRange: '$2,500 - $20,000',
    description: 'Foundation of longevity medicine - find problems before they become serious.',
  },
  {
    name: 'Stem Cell Therapy',
    icon: '🧬',
    treatments: ['MSC injections', 'Exosomes', 'PRP', 'Platelet-rich fibrin'],
    priceRange: '$3,000 - $60,000',
    description: 'Regenerative treatments using your own or donor cells. Not FDA-approved in US for most uses.',
    hasInternational: true,
  },
  {
    name: 'Peptide Therapy',
    icon: '💉',
    treatments: ['BPC-157', 'Sermorelin', 'CJC-1295/Ipamorelin', 'Epithalon', 'MOTS-C', 'Thymosin'],
    priceRange: '$300 - $800/month',
    description: 'Short amino acid chains for recovery, anti-aging, and optimization.',
  },
  {
    name: 'IV Therapies',
    icon: '💧',
    treatments: ['NAD+ infusions', 'Myers Cocktail', 'Glutathione', 'High-dose Vitamin C'],
    priceRange: '$200 - $1,500/session',
    description: 'Direct nutrient delivery for energy, recovery, and cellular health.',
  },
  {
    name: 'Hormone Optimization',
    icon: '⚡',
    treatments: ['TRT', 'BHRT', 'Thyroid optimization', 'Growth hormone peptides'],
    priceRange: '$200 - $600/month',
    description: 'Restoring hormones to optimal levels for energy, body composition, and cognition.',
  },
  {
    name: 'Longevity Pharmaceuticals',
    icon: '💊',
    treatments: ['Rapamycin', 'Metformin', 'Senolytics', 'NAD+ precursors'],
    priceRange: '$50 - $300/month',
    description: 'Off-label medications being studied for life extension.',
  },
];

// International Destinations
const internationalDestinations = [
  {
    country: 'Mexico',
    flag: '🇲🇽',
    cities: ['Tijuana', 'Los Cabos', 'Puerto Vallarta', 'Cancun'],
    specialty: 'Stem cells, NAD+, peptides, exosomes',
    priceRange: '$3,750 - $25,000',
    flightTime: '2-4 hours',
    savings: '50-70%',
    slug: 'mexico',
    hasGuide: true,
  },
  {
    country: 'Panama',
    flag: '🇵🇦',
    cities: ['Panama City'],
    specialty: 'Advanced stem cell protocols (Golden Cells)',
    priceRange: '$25,000 - $60,000',
    flightTime: '4-5 hours',
    savings: '20-40%',
    slug: 'panama',
    hasGuide: true,
    notable: 'NFL players (George Kittle, Kyle Juszczyk)',
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    cities: ['Medellin', 'Bogota'],
    specialty: 'Stem cells, PRP, all-inclusive facilities',
    priceRange: '$10,000 - $35,000',
    flightTime: '4-5 hours from Miami',
    savings: '40-60%',
    slug: 'colombia',
    hasGuide: true,
  },
  {
    country: 'Cayman Islands',
    flag: '🇰🇾',
    cities: ['Grand Cayman'],
    specialty: 'Expanded stem cells (clinical trials)',
    priceRange: '$30,000 - $60,000',
    flightTime: '1 hour from Miami',
    savings: 'Quality focus',
    slug: 'cayman-islands',
    hasGuide: true,
    notable: 'Strict regulation, expanded stem cells not available in US',
  },
  {
    country: 'Bahamas',
    flag: '🇧🇸',
    cities: ['Nassau'],
    specialty: 'Clinical trials, luxury setting',
    priceRange: '$25,000+',
    flightTime: '1 hour from Miami',
    savings: 'Premium tier',
    slug: 'bahamas',
    hasGuide: false,
    notable: 'Bryan Johnson received treatment here',
  },
  {
    country: 'Dubai/UAE',
    flag: '🇦🇪',
    cities: ['Dubai'],
    specialty: 'Luxury longevity, licensed stem cells',
    priceRange: '$15,000 - $50,000',
    flightTime: '14-16 hours',
    savings: 'Premium tier',
    slug: 'dubai',
    hasGuide: true,
    notable: 'First licensed autologous stem cell clinic in Dubai',
  },
];

// US Regions for longevity
const usRegions = [
  {
    name: 'California',
    cities: ['San Francisco', 'Los Angeles', 'San Diego'],
    clinics: ['Human Longevity', 'Next Health (LA)', 'Beverly Hills Concierge Doctor'],
    slug: 'california',
  },
  {
    name: 'Florida',
    cities: ['Miami', 'Naples', 'Orlando', 'Fort Lauderdale'],
    clinics: ['Fountain Life (Naples/Orlando)', 'Premium Longevity Clinic', 'PURE Executive Health'],
    slug: 'florida',
  },
  {
    name: 'Texas',
    cities: ['Austin', 'Dallas', 'Houston'],
    clinics: ['Fountain Life (Dallas)', 'Humanaut Health (Austin)', 'Ways2Well'],
    slug: 'texas',
  },
  {
    name: 'New York',
    cities: ['NYC', 'Princeton NJ'],
    clinics: ['Fountain Life (NYC)', 'Eleven Eleven Wellness', 'Princeton Longevity Center'],
    slug: 'new-york',
  },
];

export default function LongevityHub() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Longevity Medicine Guide',
    description: 'Comprehensive guide to longevity clinics, stem cell therapy, and regenerative medicine in the US and abroad.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">⏳</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Longevity Medicine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Optimize your healthspan with cutting-edge diagnostics, regenerative treatments, and preventive care.
            Compare US longevity clinics and international stem cell destinations.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
              $19B market (2023)
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Projected $63B by 2035
            </span>
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">
            <strong>Important:</strong> Many treatments on this page (stem cells, exosomes, off-label pharmaceuticals)
            are NOT FDA-approved for anti-aging or longevity. This information is educational only.
            Consult with a physician before pursuing any treatment.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#us-clinics" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            US Clinic Chains
          </a>
          <a href="#treatments" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            Treatment Types
          </a>
          <a href="#international" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            International Destinations
          </a>
          <a href="#us-regions" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            US by Region
          </a>
        </div>
      </section>

      {/* US Longevity Clinic Chains */}
      <section id="us-clinics" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">US Longevity Clinic Chains</h2>
          <p className="text-gray-600 mb-8">
            National chains offering comprehensive longevity programs with advanced diagnostics and treatments.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {usClinicChains.map((clinic) => (
              <div key={clinic.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    clinic.tier === 'premium' ? 'bg-purple-100 text-purple-800' :
                    clinic.tier === 'accessible' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {clinic.tier === 'premium' ? 'Premium' : clinic.tier === 'accessible' ? 'Accessible' : 'Mid-tier'}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{clinic.focus}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Locations:</span>
                    <span className="text-gray-900 font-medium">{clinic.locations.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pricing:</span>
                    <span className="text-green-600 font-semibold">{clinic.priceRange}</span>
                  </div>
                  {clinic.founders && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Notable:</span>
                      <span className="text-gray-700">{clinic.founders}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section id="treatments" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Longevity Treatment Categories</h2>
        <p className="text-gray-600 mb-8">
          From advanced diagnostics to regenerative therapies - what longevity medicine offers.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentCategories.map((category) => (
            <div key={category.name} className="rounded-lg border border-gray-200 p-6 hover:border-indigo-300 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">{category.description}</p>

              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Includes:</div>
                <div className="flex flex-wrap gap-1">
                  {category.treatments.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                      {t}
                    </span>
                  ))}
                  {category.treatments.length > 4 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{category.treatments.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">Price range:</span>
                <span className="text-sm font-semibold text-gray-900">{category.priceRange}</span>
              </div>

              {category.hasInternational && (
                <div className="mt-3 text-xs text-indigo-600 bg-indigo-50 px-3 py-2 rounded">
                  International options available with more treatment options
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* International Destinations */}
      <section id="international" className="bg-indigo-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">International Longevity Destinations</h2>
          <p className="text-gray-600 mb-8">
            Access stem cell treatments and regenerative protocols not available in the US.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {internationalDestinations.map((dest) => (
              <div key={dest.country} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dest.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{dest.country}</h3>
                    <p className="text-xs text-gray-500">{dest.cities.join(', ')}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{dest.specialty}</p>

                <div className="space-y-1 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Flight:</span>
                    <span className="text-gray-900">{dest.flightTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="text-green-600 font-medium">{dest.priceRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Savings:</span>
                    <span className="text-gray-900">{dest.savings}</span>
                  </div>
                </div>

                {dest.notable && (
                  <p className="text-xs text-indigo-700 bg-indigo-50 px-3 py-2 rounded mb-3">
                    {dest.notable}
                  </p>
                )}

                <div className="flex gap-2">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="flex-1 text-center text-sm font-medium px-3 py-2 rounded border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50"
                  >
                    Destination Guide
                  </Link>
                  {dest.hasGuide && (
                    <Link
                      href={`/guides/${dest.slug}-stem-cell-guide`}
                      className="flex-1 text-center text-sm font-medium px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      Stem Cell Guide
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <strong>Regulatory Note:</strong> Stem cell treatments available internationally may not be FDA-approved
              in the United States. Each country has its own regulatory framework. Research carefully and consult
              with your US physician before pursuing treatment abroad.
            </p>
          </div>
        </div>
      </section>

      {/* US Regions */}
      <section id="us-regions" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Longevity Clinics by US Region</h2>
        <p className="text-gray-600 mb-8">
          Find longevity and optimization clinics near you.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {usRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/longevity/${region.slug}`}
              className="block rounded-lg border-2 border-gray-200 p-5 hover:border-indigo-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">{region.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{region.cities.join(', ')}</p>
              <div className="text-sm text-gray-600">
                {region.clinics.slice(0, 2).map((clinic, i) => (
                  <div key={i} className="truncate">{clinic}</div>
                ))}
                {region.clinics.length > 2 && (
                  <div className="text-indigo-600">+{region.clinics.length - 2} more</div>
                )}
              </div>
              <div className="mt-4 text-sm font-medium text-indigo-600">
                View clinics &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Guides</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/guides/mexico-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇲🇽</span>
              <h3 className="font-bold text-gray-900 mb-2">Stem Cell Therapy in Mexico</h3>
              <p className="text-sm text-gray-600 mb-3">
                Clinics in Tijuana, Los Cabos, Puerto Vallarta & Cancun. Costs, what to expect, safety.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide &rarr;</span>
            </Link>

            <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇵🇦</span>
              <h3 className="font-bold text-gray-900 mb-2">Panama Stem Cell Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Golden Cells, Stem Cell Institute, NFL athlete destination. $25K-60K.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide &rarr;</span>
            </Link>

            <Link href="/guides/colombia-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇨🇴</span>
              <h3 className="font-bold text-gray-900 mb-2">Colombia Stem Cell Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                BioXcellerator, Medellin clinics, all-inclusive packages. 40-60% savings.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide &rarr;</span>
            </Link>

            <Link href="/guides/cayman-islands-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇰🇾</span>
              <h3 className="font-bold text-gray-900 mb-2">Cayman Islands Stem Cell Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Expanded stem cells, DVC Stem, Regenexx-C. Strictest regulation.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide &rarr;</span>
            </Link>

            <Link href="/guides/dubai-longevity-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇦🇪</span>
              <h3 className="font-bold text-gray-900 mb-2">Dubai Longevity Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                AEON Clinic, Victor Longevity. Luxury regenerative medicine.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide &rarr;</span>
            </Link>

            <div className="block bg-white rounded-lg border border-gray-200 p-6 opacity-75">
              <span className="text-3xl mb-3 block">💊</span>
              <h3 className="font-bold text-gray-900 mb-2">Peptide Therapy Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                BPC-157, Sermorelin, and more. What works, what doesn&apos;t, where to get them.
              </p>
              <span className="text-sm font-medium text-gray-400">Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Health?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Whether you&apos;re looking for a local longevity clinic or considering stem cell therapy abroad,
            we&apos;ll help you find the right option.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/mexico-stem-cell-guide"
              className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Mexico Stem Cell Guide
            </Link>
            <Link
              href="#us-clinics"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Compare US Clinics
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
