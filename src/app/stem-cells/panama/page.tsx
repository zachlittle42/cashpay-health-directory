import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { panamaStemCellClinics } from '@/data/stem-cell-clinics-panama';
import { countryMetadata } from '@/data/stem-cell-clinics-index';

export const metadata: Metadata = {
  title: 'Panama Stem Cell Clinics: Golden Cells, Stem Cell Institute | VitalityScout',
  description: 'Compare premium stem cell clinics in Panama. Golden Cells, Stem Cell Institute, and more. Popular with NFL players. Prices $20,000-60,000. Culture-expanded cells.',
};

export default function PanamaStemCells() {
  const meta = countryMetadata.panama;
  const totalClinics = panamaStemCellClinics.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Panama Stem Cell Clinics',
    description: 'Directory of premium stem cell clinics in Panama',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/stem-cells" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Stem Cell Hub
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{meta.flag}</span>
            <h1 className="text-4xl font-bold text-gray-900">
              Stem Cell Clinics in Panama
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-6">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              {totalClinics} Premier Clinics
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
              {meta.flightTime}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              $20,000-60,000
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full font-medium">
              NFL Player Destination
            </span>
          </div>
        </div>
      </section>

      {/* Notable Patients Banner */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <p className="text-sm text-indigo-800">
            <strong>Notable Patients:</strong> Panama clinics, particularly Golden Cells, have treated numerous NFL players
            including George Kittle and Kyle Juszczyk. Professional athletes choose Panama for the highest available cell counts
            and sports-focused protocols.
          </p>
        </div>
      </section>

      {/* Why Panama / Considerations */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-4">Why Choose Panama</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              {meta.whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span> {item}
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

      {/* What Makes Panama Different */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Panama Different</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <span className="text-3xl block mb-3">🔬</span>
              <h3 className="font-bold text-gray-900 mb-2">Culture-Expanded Cells</h3>
              <p className="text-sm text-gray-600">
                Panama allows culture expansion - multiplying stem cells in a lab. This means 200-300 million cells
                vs 5-10 million from same-day processing. Higher doses may be more effective for some conditions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <span className="text-3xl block mb-3">🏈</span>
              <h3 className="font-bold text-gray-900 mb-2">Athlete Protocols</h3>
              <p className="text-sm text-gray-600">
                Clinics like Golden Cells have developed protocols specifically for professional athletes.
                Focus on sports injuries, recovery optimization, and performance enhancement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <span className="text-3xl block mb-3">📚</span>
              <h3 className="font-bold text-gray-900 mb-2">Published Research</h3>
              <p className="text-sm text-gray-600">
                Stem Cell Institute has published peer-reviewed research on their protocols.
                More scientific documentation than most international clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Clinics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Panama City Clinics</h2>

        <div className="space-y-6">
          {panamaStemCellClinics.map((clinic) => (
            <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.notablePatients && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Notable: {clinic.notablePatients.split(',')[0]}...
                      </span>
                    )}
                  </div>
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
                      <span key={treatment} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded uppercase">
                        {treatment}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {clinic.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1">
                        <span className="text-blue-500">✓</span> {h}
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
                  <div className="text-2xl font-bold text-blue-600 mb-1">{clinic.priceRange}</div>
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
                    className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Read the Panama Stem Cell Guide</h2>
          <p className="text-gray-600 mb-6">
            Everything you need to know about getting stem cells in Panama: clinic selection, what to expect,
            travel logistics, and patient experiences from NFL players and others.
          </p>
          <Link
            href="/guides/panama-stem-cell-guide"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Read the Guide →
          </Link>
        </div>
      </section>

      {/* Budget Alternative */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for a More Affordable Option?</h2>
          <p className="text-gray-600 mb-6">
            Mexico offers stem cell treatments at 50-75% of Panama&apos;s cost. For orthopedic conditions, anti-aging,
            and less complex cases, Mexico clinics may be sufficient at $5,000-35,000.
          </p>
          <Link
            href="/stem-cells/mexico"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
          >
            Explore Mexico Clinics →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
