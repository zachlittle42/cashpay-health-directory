import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CALIFORNIA_REGIONS } from '@/lib/california-healthcare-data';

export const metadata = {
  title: 'California Healthcare - Top Hospitals by Region | VitalityScout',
  description:
    'Explore California\'s top hospitals and health systems across 10 regions. Compare UCSF, Stanford, UCLA, Cedars-Sinai, and more with detailed regional guides.',
};

export default function CaliforniaHealthcarePage() {
  // Count totals
  const totalSystems = CALIFORNIA_REGIONS.reduce(
    (acc, r) => acc + r.healthSystems.length,
    0
  );
  const honorRollCount = CALIFORNIA_REGIONS.reduce(
    (acc, r) =>
      acc + r.healthSystems.filter((s) => s.nationalSlug).length,
    0
  );

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/traditional-healthcare"
            className="text-blue-600 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to all states
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">California</h1>
            <span className="text-2xl font-bold text-gray-500">CA</span>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Population: 39M • 10 healthcare regions • {totalSystems} major
            health systems
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              {honorRollCount} Honor Roll Hospitals
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              5 Academic Medical Centers
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              3 NCI Cancer Centers
            </span>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="mx-auto max-w-5xl px-4 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Healthcare in California
        </h2>
        <p className="text-gray-600 mb-4">
          California is home to some of the nation&apos;s finest hospitals, including
          UCLA Medical Center (#6 nationally), UCSF Health (#7), and
          Cedars-Sinai Medical Center (#8). The state&apos;s diverse healthcare
          landscape ranges from world-class academic medical centers in major
          metros to community hospitals serving rural areas.
        </p>
        <p className="text-gray-600">
          Click any region below to explore detailed comparisons of health
          systems, or click directly on a health system for full details.
        </p>
      </section>

      {/* Regions */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Healthcare Regions
        </h2>

        <div className="space-y-6">
          {CALIFORNIA_REGIONS.map((region) => (
            <div
              key={region.slug}
              className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
            >
              {/* Region Header */}
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      href={`/traditional-healthcare/california/${region.slug}`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{region.cities}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">
                      {region.population}
                    </span>
                    <div className="text-sm text-blue-600 mt-1">
                      {region.healthSystems.length} health systems
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Systems Grid */}
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {region.healthSystems.map((system) => {
                    const detailUrl = system.nationalSlug
                      ? `/health-systems/${system.nationalSlug}`
                      : `/traditional-healthcare/california/health-systems/${system.slug}`;

                    return (
                      <Link
                        key={system.slug}
                        href={detailUrl}
                        className="block p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all bg-white"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              system.nationalSlug
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {system.nationalSlug ? 'Honor Roll' : system.type}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {system.name}
                        </h4>
                        {system.nationalRank ? (
                          <p className="text-xs text-yellow-700">
                            {system.nationalRank}
                          </p>
                        ) : system.stateRank ? (
                          <p className="text-xs text-blue-600">
                            #{system.stateRank} in CA
                          </p>
                        ) : (
                          <p className="text-xs text-gray-500">
                            {system.beds?.toLocaleString()} beds
                          </p>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Regional Overview Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/traditional-healthcare/california/${region.slug}`}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Compare all {region.name} health systems →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cash-Pay CTA */}
      <section className="bg-blue-50 px-4 py-12 border-t border-blue-100">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Tired of Insurance Hassles?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore cash-pay alternatives: telehealth, local clinics, and
            medical tourism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              At-Home Lab Testing
            </Link>
            <Link
              href="/glp1"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              GLP-1 Programs
            </Link>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Medical Tourism
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
