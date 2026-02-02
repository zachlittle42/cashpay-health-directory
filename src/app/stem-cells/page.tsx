import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getCountriesWithClinics, allStemCellClinics, countryMetadata } from '@/data/stem-cell-clinics-index';

export const metadata: Metadata = {
  title: 'Stem Cell Therapy Clinics: Mexico, Panama & US Options | VitalityScout',
  description: 'Compare stem cell clinics in Mexico, Panama, and the US. Find treatments for autoimmune, orthopedic, and neurological conditions. Prices, reviews, and clinic comparisons.',
};

// Treatment types explained
const treatmentTypes = [
  {
    name: 'Mesenchymal Stem Cells (MSCs)',
    icon: '🧬',
    description: 'The most common type used in regenerative medicine. Derived from umbilical cord, bone marrow, or fat tissue.',
    uses: ['Orthopedic injuries', 'Autoimmune conditions', 'Anti-aging'],
    priceRange: '$5,000-30,000',
  },
  {
    name: 'Culture-Expanded Cells',
    icon: '🔬',
    description: 'Cells multiplied in lab to achieve higher counts. Available in Panama and some international clinics.',
    uses: ['Complex conditions', 'Higher dose protocols', 'Neurological conditions'],
    priceRange: '$20,000-60,000',
  },
  {
    name: 'Exosomes',
    icon: '💧',
    description: 'Cell-derived vesicles that carry regenerative signals. Often used alongside stem cells.',
    uses: ['Anti-aging', 'Skin rejuvenation', 'Hair restoration', 'Joint health'],
    priceRange: '$2,000-10,000',
  },
  {
    name: 'PRP (Platelet-Rich Plasma)',
    icon: '🩸',
    description: 'Your own concentrated platelets. Often combined with stem cells for enhanced results.',
    uses: ['Sports injuries', 'Hair loss', 'Joint pain', 'Facial rejuvenation'],
    priceRange: '$500-3,000',
  },
];

// Conditions commonly treated
const conditions = [
  { name: 'Autoimmune', examples: 'MS, Lupus, RA, Crohn\'s', icon: '🛡️' },
  { name: 'Orthopedic', examples: 'Knee, Hip, Shoulder, Spine', icon: '🦴' },
  { name: 'Neurological', examples: 'Parkinson\'s, Autism, Stroke', icon: '🧠' },
  { name: 'Anti-Aging', examples: 'Longevity, Wellness, Performance', icon: '⏳' },
  { name: 'Cardiac', examples: 'Heart failure, Cardiomyopathy', icon: '❤️' },
  { name: 'Pulmonary', examples: 'COPD, Pulmonary fibrosis', icon: '🫁' },
];

export default function StemCellsHub() {
  const countries = getCountriesWithClinics();
  const totalClinics = allStemCellClinics.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Stem Cell Therapy Clinics Directory',
    description: 'Compare stem cell clinics in Mexico, Panama, and internationally.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">🧬</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stem Cell Therapy Clinics
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore stem cell treatment options in Mexico, Panama, and beyond. Compare clinics, pricing, and protocols
            for regenerative treatments not available in the US.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Clinics Worldwide
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              {countries.length} Countries Covered
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              $5,000-60,000 Range
            </span>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900 mb-2">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800">
            Stem cell treatments available internationally are NOT approved by the US FDA for most conditions.
            The FDA has issued warnings about unproven stem cell therapies. This information is educational only.
            Always consult with your US physician before pursuing treatment abroad and research clinics thoroughly.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#destinations" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            Destinations
          </a>
          <a href="#treatments" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            Treatment Types
          </a>
          <a href="#conditions" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            Conditions Treated
          </a>
          <a href="#comparison" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-indigo-400 text-sm font-medium">
            Mexico vs Panama
          </a>
        </div>
      </section>

      {/* Destination Countries */}
      <section id="destinations" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stem Cell Destinations</h2>
          <p className="text-gray-600 mb-8">
            Choose your destination based on budget, condition complexity, and travel preferences.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {countries.map((country) => {
              const meta = countryMetadata[country.countrySlug];
              return (
                <Link
                  key={country.countrySlug}
                  href={`/stem-cells/${country.countrySlug}`}
                  className="block bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{country.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{country.country}</h3>
                      <p className="text-sm text-gray-500">{country.count} clinics • {meta?.flightTime}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{meta?.description.slice(0, 150)}...</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.cities.slice(0, 4).map((city) => (
                      <span key={city} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                        {city}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {country.countrySlug === 'mexico' ? '$5,000-35,000' : '$15,000-60,000'}
                    </span>
                    <span className="text-sm font-medium text-indigo-600">
                      View clinics →
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* US Option */}
            <Link
              href="/stem-cells/usa"
              className="block bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-indigo-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">🇺🇸</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">United States</h3>
                  <p className="text-sm text-gray-500">Limited options • Regulatory context</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                US options are limited due to FDA regulations. Learn what&apos;s available domestically and why many
                Americans travel abroad for treatment.
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">$10,000-50,000+</span>
                <span className="text-sm font-medium text-indigo-600">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mexico vs Panama Comparison */}
      <section id="comparison" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mexico vs Panama: Which to Choose?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>🇲🇽</span> Mexico
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Best for:</strong> Budget-conscious, orthopedic, anti-aging</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Price:</strong> $5,000-35,000 typical</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Travel:</strong> 2-4 hours, border cities allow day trips</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Vacation combo:</strong> Cancun, Puerto Vallarta, Los Cabos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600">!</span>
                <span><strong>Note:</strong> Quality varies - research carefully</span>
              </div>
            </div>
            <Link
              href="/stem-cells/mexico"
              className="mt-4 inline-block text-sm font-medium text-green-700 hover:text-green-800"
            >
              Explore Mexico Clinics →
            </Link>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span>🇵🇦</span> Panama
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Best for:</strong> Complex conditions, athletes, premium care</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Price:</strong> $20,000-60,000 typical</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Travel:</strong> 4-5 hours from Miami</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Advantage:</strong> Culture-expanded cells, highest doses</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">★</span>
                <span><strong>Notable:</strong> NFL players, published research</span>
              </div>
            </div>
            <Link
              href="/stem-cells/panama"
              className="mt-4 inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
            >
              Explore Panama Clinics →
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Types */}
      <section id="treatments" className="bg-indigo-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Treatment Types</h2>
          <p className="text-gray-600 mb-8">
            Understanding the different stem cell and regenerative treatments available.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {treatmentTypes.map((treatment) => (
              <div key={treatment.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{treatment.icon}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{treatment.name}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{treatment.description}</p>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-gray-500">Common uses:</span>
                    <p className="text-gray-700">{treatment.uses.join(', ')}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="font-semibold text-green-600">{treatment.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section id="conditions" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Conditions Commonly Treated</h2>
        <p className="text-gray-600 mb-8">
          While stem cells show promise for many conditions, evidence quality varies. Research your specific condition.
        </p>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {conditions.map((condition) => (
            <div key={condition.name} className="bg-gray-50 rounded-lg p-4 text-center">
              <span className="text-3xl block mb-2">{condition.icon}</span>
              <h3 className="font-bold text-gray-900 mb-1">{condition.name}</h3>
              <p className="text-xs text-gray-600">{condition.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Stem Cell Guides</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/guides/mexico-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇲🇽</span>
              <h3 className="font-bold text-gray-900 mb-2">Stem Cell Therapy in Mexico</h3>
              <p className="text-sm text-gray-600 mb-3">
                Complete guide to clinics, costs, what to expect, and safety considerations.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide →</span>
            </Link>

            <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🇵🇦</span>
              <h3 className="font-bold text-gray-900 mb-2">Panama Stem Cell Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Golden Cells, Stem Cell Institute, and why athletes choose Panama.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide →</span>
            </Link>

            <Link href="/guides/panama-vs-cayman-stem-cells" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🆚</span>
              <h3 className="font-bold text-gray-900 mb-2">Panama vs Cayman Comparison</h3>
              <p className="text-sm text-gray-600 mb-3">
                Comparing the two premium stem cell destinations for Americans.
              </p>
              <span className="text-sm font-medium text-indigo-600">Read guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Research Before You Travel
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Stem cell therapy can be life-changing for some conditions, but do your research.
            Read our guides, consult your US physician, and verify clinic credentials before committing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/mexico-stem-cell-guide"
              className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Mexico Stem Cell Guide
            </Link>
            <Link
              href="/stem-cells/panama"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Explore Panama Clinics
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
