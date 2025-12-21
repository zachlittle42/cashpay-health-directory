import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Temporary: Import from the old guide page until we fully migrate data
// TODO: Move this to shared lib/us-healthcare-data.ts
interface Region {
  name: string;
  cities: string;
  population?: string;
}

interface HealthSystem {
  name: string;
  rank?: string;
}

interface StateData {
  name: string;
  abbreviation: string;
  slug: string;
  population: string;
  regions: Region[];
  healthSystems?: { [regionName: string]: HealthSystem[] };
}

// For now, just California has full data - others will show regions only
const statesDataMap: Record<string, StateData> = {
  'california': {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    population: '39M',
    regions: [
      { name: 'Bay Area - San Francisco', cities: 'San Francisco, Oakland, Berkeley', population: '~4.7M' },
      { name: 'Bay Area - South Bay/Peninsula', cities: 'San Jose, Palo Alto, Mountain View', population: '~3M' },
      { name: 'Sacramento Valley', cities: 'Sacramento, Stockton, Modesto', population: '~3.5M' },
      { name: 'Los Angeles Metro', cities: 'Los Angeles, Pasadena, Long Beach', population: '~10M' },
      { name: 'Orange County', cities: 'Irvine, Anaheim, Newport Beach', population: '~3.2M' },
      { name: 'San Diego', cities: 'San Diego, Chula Vista', population: '~3.3M' },
      { name: 'Inland Empire', cities: 'Riverside, San Bernardino, Ontario', population: '~4.6M' },
      { name: 'Central Valley / San Joaquin', cities: 'Fresno, Bakersfield, Visalia', population: '~4M' },
      { name: 'Central Coast', cities: 'Santa Barbara, San Luis Obispo, Monterey', population: '~1.5M' },
      { name: 'Far North / Superior California', cities: 'Redding, Chico, Eureka', population: '~600K' },
    ],
    healthSystems: {
      'Bay Area - San Francisco': [
        { name: 'UCSF Health', rank: '#10 nationally' },
        { name: 'Sutter CPMC' },
        { name: 'Kaiser San Francisco' },
        { name: 'Zuckerberg SF General' },
      ],
      'Bay Area - South Bay/Peninsula': [
        { name: 'Stanford Health Care', rank: '#12 nationally' },
        { name: 'El Camino Health' },
        { name: 'Kaiser Santa Clara' },
        { name: 'Good Samaritan' },
      ],
      'Sacramento Valley': [
        { name: 'UC Davis Medical Center', rank: 'Top academic center' },
        { name: 'Sutter Medical Center Sacramento' },
        { name: 'Kaiser Sacramento' },
        { name: 'Dignity Health Mercy General' },
      ],
      'Los Angeles Metro': [
        { name: 'Cedars-Sinai', rank: '#7 nationally' },
        { name: 'UCLA Medical Center', rank: '#4 nationally' },
        { name: 'Keck Medical Center of USC' },
        { name: "Providence Saint John's" },
      ],
      'Orange County': [
        { name: 'Hoag Hospital' },
        { name: 'UCI Medical Center' },
        { name: 'MemorialCare Orange Coast' },
        { name: 'Providence Mission' },
      ],
      'San Diego': [
        { name: 'UC San Diego Health', rank: '#15 nationally' },
        { name: 'Scripps La Jolla' },
        { name: 'Sharp Memorial' },
        { name: 'Kaiser San Diego' },
      ],
      'Inland Empire': [
        { name: 'Loma Linda University Medical Center', rank: 'Top academic center' },
        { name: 'Riverside Community Hospital' },
        { name: 'Kaiser Riverside' },
        { name: 'Arrowhead Regional' },
      ],
      'Central Valley / San Joaquin': [
        { name: 'St. Agnes Medical Center (Fresno)' },
        { name: 'Community Medical Center (Fresno)' },
        { name: 'Adventist Health Bakersfield' },
        { name: 'Kaweah Health (Visalia)' },
      ],
      'Central Coast': [
        { name: 'Santa Barbara Cottage Hospital' },
        { name: 'Community Hospital of Monterey Peninsula' },
        { name: 'Sierra Vista Regional (SLO)' },
        { name: 'Marian Regional (Santa Maria)' },
      ],
      'Far North / Superior California': [
        { name: 'Mercy Medical Center (Redding)', rank: '#1 in region' },
        { name: 'Shasta Regional Medical Center' },
        { name: 'Enloe Medical Center (Chico)' },
        { name: 'Providence St. Joseph (Eureka)' },
      ],
    },
  },
  // Add other states as we research them
};

export function generateStaticParams() {
  return Object.keys(statesDataMap).map((slug) => ({
    state: slug,
  }));
}

export default function StatePage({ params }: { params: { state: string } }) {
  const stateData = statesDataMap[params.state];

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
            Medical Tourism
          </h3>
          <p className="text-gray-600 mb-6">
            Explore cash-pay alternatives: telehealth, local clinics, and medical tourism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              At-Home Labs
            </Link>
            <Link
              href="/glp1"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              GLP-1 Programs
            </Link>
            <Link
              href="/dental"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Dental Abroad
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
