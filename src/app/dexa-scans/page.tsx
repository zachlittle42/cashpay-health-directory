import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getDexaStatesWithClinics, allDexaClinics } from '@/data/dexa-clinics-index';

export const metadata: Metadata = {
  title: 'DEXA Scan Near You: Body Composition & Bone Density Clinics by City',
  description: 'Find DEXA scan clinics near you. Compare BodySpec mobile units, DexaFit studios, and research-grade labs by city — body composition, body fat %, visceral fat, and bone density.',
};

// National DEXA chains (real, multi-city operators). Used for the explainer
// grid; each links out to the chain's own location finder.
const chains = [
  {
    name: 'BodySpec',
    priceRange: '$45-50/scan',
    model: 'Mobile units + fixed studios',
    blurb: 'The most affordable DEXA option. Mobile trucks visit gyms and wellness centers across CA, TX, CO, and WA. Package deals drop the per-scan price further.',
    website: 'https://www.bodyspec.com',
  },
  {
    name: 'DexaFit',
    priceRange: '$119-179/scan',
    model: 'Fixed studios (national franchise)',
    blurb: 'Premium body-composition studios bundling DEXA with RMR and VO2 max. Detailed consultations and a fuller metabolic picture in one visit.',
    website: 'https://www.dexafit.com',
  },
  {
    name: 'Fitnescity',
    priceRange: '$99-149/scan',
    model: 'Partner-lab network',
    blurb: 'Books DEXA, RMR, and VO2 max through a partner-lab network, often bundled with blood panels for athletes and executives.',
    website: 'https://www.fitnescity.com',
  },
  {
    name: 'University labs',
    priceRange: '$75-200/scan',
    model: 'Research-grade (Hologic)',
    blurb: 'Exercise-physiology labs (UCLA, UCSF, and others) offer research-grade Hologic scans to the public at academic pricing.',
    website: 'https://www.dexafit.com',
  },
];

export default function DexaScansHub() {
  const states = getDexaStatesWithClinics();
  const totalClinics = allDexaClinics.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Clinics Directory',
    description: 'Find DEXA scan and body-composition clinics near you across the United States.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-10',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">🦴</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Near You
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find DEXA scan and body-composition studios in your city. Compare BodySpec mobile units,
            DexaFit studios, and research-grade labs for body fat %, visceral fat, and bone density.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Local Clinics
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              {states.length} {states.length === 1 ? 'State' : 'States'} Covered
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              Mobile & Studio Options
            </span>
          </div>
          <div className="mt-8">
            <Link
              href="/dexa"
              className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Or compare DEXA providers nationally on our /dexa page →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Clinics by State */}
      <section id="local-clinics" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">DEXA Clinics by State</h2>
        <p className="text-gray-600 mb-8">
          Find in-person DEXA scan clinics near you. Click a state to view all clinics and cities.
        </p>

        {states.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {states.map((state) => (
              <Link
                key={state.stateSlug}
                href={`/dexa-scans/${state.stateSlug}`}
                className="block rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {state.count} clinics
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {state.cities.slice(0, 3).join(', ')}{state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
                </p>
                <span className="text-sm font-medium text-blue-600">
                  View clinics →
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">City directories are being built. Check the national comparison on{' '}
            <Link href="/dexa" className="text-blue-600 hover:underline">/dexa</Link> in the meantime.
          </p>
        )}

        <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-2">More Cities Coming Soon</h3>
          <p className="text-sm text-amber-800">
            We&apos;re expanding city coverage to Austin, Dallas, New York City, Denver, and Seattle.
            Currently featuring California metros with {totalClinics}+ verified DEXA clinics.
          </p>
        </div>
      </section>

      {/* DEXA Chains Explainer */}
      <section id="chains" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">The Main DEXA Providers</h2>
          <p className="text-gray-600 mb-8">
            Most cities are served by a handful of national chains plus local studios and university labs.
            Prices below are estimates — confirm current pricing directly with each provider.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {chains.map((chain) => (
              <div key={chain.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                  <span className="text-sm font-semibold text-blue-600">{chain.priceRange}</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">{chain.model}</p>
                <p className="text-sm text-gray-600 mb-4">{chain.blurb}</p>
                <a
                  href={chain.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Find locations →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Learn More About DEXA Scans</h2>
        <p className="text-gray-600 mb-8">
          Understand what a DEXA scan measures and how the providers compare before you book.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/dexa" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <span className="text-3xl mb-3 block">📊</span>
            <h3 className="font-bold text-gray-900 mb-2">DEXA Provider Comparison</h3>
            <p className="text-sm text-gray-600 mb-3">
              National comparison of DEXA providers, pricing, and what each scan includes.
            </p>
            <span className="text-sm font-medium text-blue-600">Compare →</span>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <span className="text-3xl mb-3 block">📖</span>
            <h3 className="font-bold text-gray-900 mb-2">DEXA Scan Guide</h3>
            <p className="text-sm text-gray-600 mb-3">
              What a DEXA scan measures, how to prep, and how to read your body-composition results.
            </p>
            <span className="text-sm font-medium text-blue-600">Read guide →</span>
          </Link>

          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <span className="text-3xl mb-3 block">⚖️</span>
            <h3 className="font-bold text-gray-900 mb-2">BodySpec vs DexaFit</h3>
            <p className="text-sm text-gray-600 mb-3">
              Head-to-head on price, accuracy, add-on tests, and which fits your goals.
            </p>
            <span className="text-sm font-medium text-blue-600">Read comparison →</span>
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section id="related-guides" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">DEXA &amp; Body Composition Guides</h2>
          <p className="text-gray-600 mb-8">
            Deeper reads on cost, accuracy, eligibility, and how to use your results.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { slug: 'dexa-scan-guide', label: 'DEXA Scan Guide' },
              { slug: 'dexa-vs-inbody-vs-bodpod', label: 'DEXA vs InBody vs Bod Pod' },
              { slug: 'cheapest-dexa-scan', label: 'Cheapest DEXA Scan' },
              { slug: 'are-dexa-scans-worth-it', label: 'Are DEXA Scans Worth It?' },
              { slug: 'is-dexa-scan-hsa-fsa-eligible', label: 'Is a DEXA Scan HSA/FSA Eligible?' },
              { slug: 'how-to-read-dexa-results', label: 'How to Read Your DEXA Results' },
              { slug: 'how-often-should-you-get-a-dexa-scan', label: 'How Often Should You Get a DEXA Scan?' },
              { slug: 'vo2-max-test-cost', label: 'VO2 Max Test Cost' },
              { slug: 'rmr-test-cost', label: 'RMR Test Cost' },
              { slug: 'bodyspec-dexa-scan-cost', label: 'BodySpec DEXA Scan Cost' },
              { slug: 'dexafit-cost', label: 'DexaFit Cost' },
            ].map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <span className="text-sm font-medium text-blue-600">{guide.label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
      <Footer />
    </main>
  );
}
