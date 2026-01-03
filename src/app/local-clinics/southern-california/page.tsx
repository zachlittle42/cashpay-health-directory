import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SOCAL_REGIONS, getClinicCount, getCategoryStats } from '@/lib/socal-clinics-data';

export const metadata: Metadata = {
  title: 'Southern California Cash-Pay Clinics: DEXA, IV Therapy, Longevity | VitalityScout',
  description: 'Find cash-pay health clinics in Los Angeles, Orange County, San Diego, Inland Empire. 60+ clinics offering DEXA scans, IV therapy, longevity services—no insurance needed.',
  keywords: ['DEXA scan Los Angeles', 'IV therapy Orange County', 'longevity clinic San Diego', 'VO2 max Southern California', 'cash pay health clinics', 'DEXA San Diego', 'IV therapy Laguna Beach', 'longevity clinic Carlsbad'],
};

export default function SouthernCaliforniaHub() {
  const totalClinics = getClinicCount();
  const categoryStats = getCategoryStats();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Southern California Cash-Pay Health Clinics',
    description: 'Directory of cash-pay health clinics across Southern California',
    url: 'https://vitalityscout.com/local-clinics/southern-california',
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
              <span className="text-gray-900">Southern California</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌴</span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                Regional Directory
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Southern California Cash-Pay Health Clinics
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {totalClinics}+ clinics across Los Angeles, Orange County, San Diego, and Inland Empire.
              DEXA scans, IV therapy, longevity clinics, performance testing—no insurance needed.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{totalClinics}+</div>
                <div className="text-sm text-gray-600">Clinics Listed</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{SOCAL_REGIONS.length}</div>
                <div className="text-sm text-gray-600">Regions Covered</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">$40</div>
                <div className="text-sm text-gray-600">Cheapest DEXA</div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">$99</div>
                <div className="text-sm text-gray-600">IV Therapy From</div>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Region</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOCAL_REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/local-clinics/southern-california/${region.slug}`}
                className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-orange-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600">
                    {region.name}
                  </h3>
                  <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full">
                    {region.clinics.length} clinics
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  {region.cities.slice(0, 4).join(', ')}{region.cities.length > 4 ? '...' : ''}
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
                  <span className="text-orange-600 font-medium text-sm group-hover:underline">
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
                  Gold standard body fat, muscle, and bone density measurement. BodySpec ($40-50) and DexaFit ($120-180) across all regions.
                </p>
                <div className="text-sm text-green-600 font-medium">From $40/scan</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🫀</span>
                  <h3 className="font-bold text-gray-900">VO2 Max Testing</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  True cardiovascular fitness measurement. Available at DexaFit, UCI, and specialty performance labs.
                </p>
                <div className="text-sm text-green-600 font-medium">From $150/test</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💧</span>
                  <h3 className="font-bold text-gray-900">IV Therapy</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Vitamin infusions, NAD+, hydration. Next Health (LA), Hydration Room (OC), VitaLounge (SD), Restore (all regions).
                </p>
                <div className="text-sm text-green-600 font-medium">From $99/treatment</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⏳</span>
                  <h3 className="font-bold text-gray-900">Longevity Clinics</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  From accessible Next Health memberships to premium Health Nucleus diagnostics. Peptides, NAD+, comprehensive testing.
                </p>
                <div className="text-sm text-green-600 font-medium">From $199/month</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏃</span>
                  <h3 className="font-bold text-gray-900">Sports Performance</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Elite performance testing. P3 (Santa Barbara), Exos (Carlsbad), UCI Sports Medicine, and specialty labs.
                </p>
                <div className="text-sm text-green-600 font-medium">From $150/assessment</div>
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
                      <div className="text-sm text-gray-500">All SoCal regions</div>
                    </div>
                    <div className="text-green-600 font-bold">$40-50</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Mobile units visit gyms weekly. Package deals bring cost to $40/scan.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">DexaFit</div>
                      <div className="text-sm text-gray-500">WeHo, Irvine, San Diego</div>
                    </div>
                    <div className="text-blue-600 font-bold">$119-179</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Premium experience. Add VO2 max and RMR for comprehensive testing.</p>
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
                      <div className="font-semibold text-gray-900">Next Health</div>
                      <div className="text-sm text-gray-500">Los Angeles (4 locations)</div>
                    </div>
                    <div className="text-purple-600 font-bold">$199/mo</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Full wellness lounge. Membership makes regular visits affordable.</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-900">The Hydration Room</div>
                      <div className="text-sm text-gray-500">Orange County (4 locations)</div>
                    </div>
                    <div className="text-purple-600 font-bold">$99-350</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">OC leader. Clinical quality with comfortable environment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="bg-orange-50 px-4 py-12">
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
                    <td className="px-4 py-3 text-green-600">BodySpec: $40-50</td>
                    <td className="px-4 py-3 text-blue-600">DexaFit: $119-179</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">VO2 Max Test</td>
                    <td className="px-4 py-3 text-green-600">PNOE Labs: $150</td>
                    <td className="px-4 py-3 text-blue-600">DexaFit: $175-250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">IV Therapy</td>
                    <td className="px-4 py-3 text-green-600">Restore: $99</td>
                    <td className="px-4 py-3 text-blue-600">NAD+ IV: $400-600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Executive Physical</td>
                    <td className="px-4 py-3 text-green-600">Scripps: $3,500</td>
                    <td className="px-4 py-3 text-blue-600">Health Nucleus: $15,000+</td>
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
