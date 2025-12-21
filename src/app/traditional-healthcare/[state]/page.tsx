import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getStateBySlug, getAllStateSlugs, type StateData } from '@/lib/us-healthcare-data';

export function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({
    state: slug,
  }));
}

export default function StatePage({ params }: { params: { state: string } }) {
  const stateData = getStateBySlug(params.state);

  if (!stateData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* State Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Link href="/traditional-healthcare" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to all states
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{stateData.name}</h1>
            <span className="text-2xl font-bold text-gray-500">{stateData.abbreviation}</span>
          </div>
          <p className="text-lg text-gray-600">
            Population: {stateData.population}  •  {stateData.regions.length} healthcare regions
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Healthcare Regions in {stateData.name}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stateData.regions.map((region) => {
            const healthSystems = stateData.healthSystems?.[region.name];

            return (
              <div
                key={region.name}
                className="rounded-lg border-2 border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{region.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Cities:</span> {region.cities}
                </p>
                {region.population && (
                  <p className="text-sm text-gray-500 mb-4">Population: {region.population}</p>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200">
                  {healthSystems && healthSystems.length > 0 ? (
                    <>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Top Health Systems:</h4>
                      <ul className="space-y-2">
                        {healthSystems.map((system, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            <div className="flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">•</span>
                              <div>
                                <div className="font-medium">{system.name}</div>
                                {system.rank && (
                                  <div className="text-xs text-blue-600">{system.rank}</div>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500 italic">
                      Health system data coming soon for this region
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cash-Pay CTA */}
      <section className="bg-blue-50 px-4 py-12 border-t border-blue-100">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Tired of Insurance Hassles?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore cash-pay alternatives: telehealth, local clinics, and medical tourism.
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
              href="#medical-tourism"
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
