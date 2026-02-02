import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { mexicoStemCellClinics, getMexicoCitiesWithClinics } from '@/data/stem-cell-clinics-mexico';
import { countryMetadata } from '@/data/stem-cell-clinics-index';

export const metadata: Metadata = {
  title: 'Mexico Stem Cell Clinics: Tijuana, Cancun, Puerto Vallarta | VitalityScout',
  description: 'Compare stem cell clinics in Mexico. Tijuana, Cancun, Puerto Vallarta, Los Cabos, Mexico City. Prices from $5,000-35,000. Reviews and clinic comparisons.',
};

export default function MexicoStemCells() {
  const cities = getMexicoCitiesWithClinics();
  const meta = countryMetadata.mexico;
  const totalClinics = mexicoStemCellClinics.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Mexico Stem Cell Clinics',
    description: 'Directory of stem cell clinics in Mexico',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/stem-cells" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Stem Cell Hub
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{meta.flag}</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Stem Cell Clinics in Mexico
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-6">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {cities.map((city) => (
              <a
                key={city.citySlug}
                href={`#${city.citySlug}`}
                className="px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800 hover:bg-green-200"
              >
                {city.city} ({city.count})
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
              {totalClinics} Clinics
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              {meta.flightTime}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              $5,000-35,000
            </span>
          </div>
        </div>
      </section>

      {/* Why Mexico / Considerations */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-4">Why Choose Mexico</h3>
            <ul className="space-y-2 text-sm text-green-800">
              {meta.whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="font-bold text-amber-900 mb-4">Considerations</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {meta.considerations.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600">!</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clinics by City */}
      {cities.map((city) => {
        const cityClinics = mexicoStemCellClinics.filter(c => c.city === city.city);
        return (
          <section key={city.citySlug} id={city.citySlug} className="mx-auto max-w-6xl px-4 py-10 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              {city.city}
            </h2>

            <div className="space-y-6">
              {cityClinics.map((clinic) => (
                <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.name}</h3>
                      <p className="text-gray-600 mb-4">{clinic.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {clinic.conditionsTreated.map((condition) => (
                          <span key={condition} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded capitalize">
                            {condition.replace('_', ' ')}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {clinic.treatments.map((treatment) => (
                          <span key={treatment} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded uppercase">
                            {treatment}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        {clinic.highlights.map((h) => (
                          <span key={h} className="flex items-center gap-1">
                            <span className="text-green-500">✓</span> {h}
                          </span>
                        ))}
                      </div>

                      {clinic.includesInPackage && (
                        <div className="mt-4 text-xs text-gray-500">
                          <strong>Package includes:</strong> {clinic.includesInPackage.join(', ')}
                        </div>
                      )}
                    </div>

                    <div className="md:text-right md:min-w-[200px]">
                      <div className="text-2xl font-bold text-green-600 mb-1">{clinic.priceRange}</div>
                      {clinic.rating && (
                        <div className="text-sm text-gray-600 mb-2">
                          <span className="text-yellow-500">★</span> {clinic.rating} ({clinic.reviewCount} reviews)
                        </div>
                      )}
                      <div className="text-sm text-gray-500 mb-2">
                        Stay: {clinic.typicalStay}
                      </div>
                      {clinic.patientVolume && (
                        <div className="text-xs text-gray-500 mb-3">
                          {clinic.patientVolume}
                        </div>
                      )}
                      <a
                        href={clinic.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Guide CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-green-50 rounded-lg p-8 text-center border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Read the Complete Mexico Stem Cell Guide</h2>
          <p className="text-gray-600 mb-6">
            Everything you need to know: clinic selection, what to expect, safety tips, travel logistics, and patient experiences.
          </p>
          <Link
            href="/guides/mexico-stem-cell-guide"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
          >
            Read the Guide →
          </Link>
        </div>
      </section>

      {/* Compare with Panama */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consider Panama?</h2>
          <p className="text-gray-600 mb-6">
            For complex conditions or those wanting the highest cell counts, Panama offers culture-expanded stem cells
            and is the choice of NFL players. It costs more but may be worth it for certain conditions.
          </p>
          <Link
            href="/stem-cells/panama"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Explore Panama Clinics →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
