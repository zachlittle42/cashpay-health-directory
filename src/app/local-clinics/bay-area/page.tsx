import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BAYAREA_REGIONS, getClinicCount, getCategoryStats } from '@/lib/bayarea-clinics-data';

export const metadata: Metadata = {
  title: 'Bay Area Cash-Pay Clinics: DEXA, IV Therapy, Longevity | VitalityScout',
  description: 'Find cash-pay health clinics in San Francisco, Peninsula, South Bay, East Bay. 35+ clinics offering DEXA scans, IV therapy, longevity services—no insurance needed.',
  keywords: ['DEXA scan San Francisco', 'IV therapy Palo Alto', 'longevity clinic Silicon Valley', 'VO2 max Bay Area', 'cash pay health clinics SF', 'DEXA Oakland', 'IV therapy San Jose'],
};

export default function BayAreaHub() {
  const totalClinics = getClinicCount();
  const categoryStats = getCategoryStats();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'San Francisco Bay Area Cash-Pay Health Clinics',
    description: 'Directory of cash-pay health clinics across the San Francisco Bay Area',
    url: 'https://vitalityscout.com/local-clinics/bay-area',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-01-03',
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/local-clinics" className="hover:text-blue-600">Local Clinics</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Bay Area</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌉</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Regional Directory
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              San Francisco Bay Area Cash-Pay Health Clinics
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {totalClinics}+ clinics across San Francisco, Peninsula, South Bay, and East Bay.
              DEXA scans, IV therapy, longevity clinics, performance testing—no insurance needed.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{totalClinics}+</div>
                <div className="text-sm text-gray-600">Clinics Listed</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{BAYAREA_REGIONS.length}</div>
                <div className="text-sm text-gray-600">Regions Covered</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">$45</div>
                <div className="text-sm text-gray-600">Cheapest DEXA</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">$99</div>
                <div className="text-sm text-gray-600">IV Therapy From</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Region</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {BAYAREA_REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/local-clinics/bay-area/${region.slug}`}
                className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    {region.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    {region.clinics.length} clinics
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {region.cities.slice(0, 5).join(', ')}{region.cities.length > 5 ? '...' : ''}
                </p>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {region.description}
                </p>

                {/* Category pills */}
                <div className="flex flex-wrap gap-1">
                  {Array.from(new Set(region.clinics.map(c => c.category))).slice(0, 4).map((cat) => (
                    <span key={cat} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {cat === 'dexa' ? 'DEXA' :
                       cat === 'iv' ? 'IV Therapy' :
                       cat === 'vo2' ? 'VO2 Max' :
                       cat === 'longevity' ? 'Longevity' :
                       cat === 'performance' ? 'Performance' :
                       cat === 'labs' ? 'Labs' : 'Wellness'}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-blue-600 font-medium text-sm group-hover:underline">
                    View all clinics →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Services Available</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="font-bold text-gray-900">DEXA Body Composition</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Gold standard body fat and bone density. BodySpec ($45-50) and DexaFit ($119-179) across all regions.
                </p>
                <div className="text-sm text-green-600 font-medium">From $45/scan</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🫀</span>
                  <h3 className="font-bold text-gray-900">VO2 Max Testing</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  True cardiovascular fitness. Available at Stanford, UC Berkeley, UCSF, and DexaFit locations.
                </p>
                <div className="text-sm text-green-600 font-medium">From $150/test</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💧</span>
                  <h3 className="font-bold text-gray-900">IV Therapy</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Vitamin infusions and NAD+. The Hydration Room, Restore, and Drip Hydration across Bay Area.
                </p>
                <div className="text-sm text-green-600 font-medium">From $99/treatment</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⏳</span>
                  <h3 className="font-bold text-gray-900">Longevity Clinics</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  From Function Health to boutique Peninsula clinics. Peptides, NAD+, comprehensive biomarker testing.
                </p>
                <div className="text-sm text-green-600 font-medium">From $499/year</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏃</span>
                  <h3 className="font-bold text-gray-900">Sports Performance</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Stanford, UC Berkeley, and private labs. Same facilities serving elite college athletes.
                </p>
                <div className="text-sm text-green-600 font-medium">From $100/assessment</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧪</span>
                  <h3 className="font-bold text-gray-900">Labs & Testing</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Walk-in lab testing without doctor orders. Hormone panels, wellness bloodwork, STD testing.
                </p>
                <div className="text-sm text-green-600 font-medium">Varies by test</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Clinics */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Popular by Category</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Best Value DEXA */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🏆</span>
                <h3 className="font-bold text-gray-900">Best Value: DEXA Scans</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">BodySpec</div>
                      <div className="text-sm text-gray-500">All Bay Area regions</div>
                    </div>
                    <div className="text-green-600 font-bold">$45-50</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Mobile units visit gyms weekly. Package deals available.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">DexaFit</div>
                      <div className="text-sm text-gray-500">SF, Palo Alto, San Jose, Walnut Creek</div>
                    </div>
                    <div className="text-blue-600 font-bold">$119-179</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Premium studios with VO2 max and RMR testing.</p>
                </div>
              </div>
            </div>

            {/* IV Therapy Leaders */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">💧</span>
                <h3 className="font-bold text-gray-900">IV Therapy by Region</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">Restore Hyper Wellness</div>
                      <div className="text-sm text-gray-500">SF, San Mateo, Los Gatos, Walnut Creek</div>
                    </div>
                    <div className="text-purple-600 font-bold">$99-299</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Full wellness suite with cryotherapy, compression, more.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">The Hydration Room</div>
                      <div className="text-sm text-gray-500">SF, Burlingame, Campbell</div>
                    </div>
                    <div className="text-purple-600 font-bold">$99-350</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Clinical quality IV therapy with medical oversight.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="bg-blue-50 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Price Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">Service</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">Budget Option</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900">Premium Option</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">DEXA Scan</td>
                    <td className="px-4 py-3 text-green-600">BodySpec: $45-50</td>
                    <td className="px-4 py-3 text-blue-600">DexaFit: $119-179</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">VO2 Max Test</td>
                    <td className="px-4 py-3 text-green-600">University: $100-200</td>
                    <td className="px-4 py-3 text-blue-600">DexaFit: $175-250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">IV Therapy</td>
                    <td className="px-4 py-3 text-green-600">Restore: $99</td>
                    <td className="px-4 py-3 text-blue-600">NAD+ IV: $400-600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Longevity Testing</td>
                    <td className="px-4 py-3 text-green-600">Function Health: $499/yr</td>
                    <td className="px-4 py-3 text-blue-600">Boutique: $3,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/guides/bodyspec-vs-dexafit" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">⚖️</span>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">BodySpec vs DexaFit</h3>
              <p className="text-sm text-gray-600">Detailed comparison of the two major DEXA providers.</p>
            </Link>
            <Link href="/guides/dexa-scan-guide" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">📊</span>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">DEXA Scan Guide</h3>
              <p className="text-sm text-gray-600">What DEXA measures and how to interpret results.</p>
            </Link>
            <Link href="/longevity/california" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <span className="text-3xl mb-3 block">⏳</span>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">California Longevity Clinics</h3>
              <p className="text-sm text-gray-600">Full guide to longevity medicine across California.</p>
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This directory is for informational purposes only. Prices, availability, and services may change—always verify directly with providers before booking.
              We are not affiliated with any listed clinic. Some services (peptides, certain IV compounds) may not be FDA-approved for the marketed uses.
              Consult with qualified healthcare providers before pursuing any treatment.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
