import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  getCaliforniaRegionBySlug,
  getAllCaliforniaRegionSlugs,
  type CaliforniaHealthSystem,
} from '@/lib/california-healthcare-data';

export function generateStaticParams() {
  return getAllCaliforniaRegionSlugs().map((region) => ({
    region,
  }));
}

export function generateMetadata({ params }: { params: { region: string } }) {
  const region = getCaliforniaRegionBySlug(params.region);
  if (!region) return { title: 'Region Not Found' };

  return {
    title: `${region.name} Healthcare - Top Hospitals & Health Systems | VitalityScout`,
    description: `Compare ${region.healthSystems.length} top health systems in ${region.name}, California. ${region.overview.slice(0, 150)}...`,
  };
}

export default function CaliforniaRegionPage({
  params,
}: {
  params: { region: string };
}) {
  const region = getCaliforniaRegionBySlug(params.region);

  if (!region) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/traditional-healthcare" className="hover:text-blue-600">
              US Healthcare
            </Link>
            <span>/</span>
            <Link
              href="/traditional-healthcare/california"
              className="hover:text-blue-600"
            >
              California
            </Link>
            <span>/</span>
            <span className="text-gray-900">{region.name}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Healthcare in {region.name}
          </h1>

          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {region.cities}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Population: {region.population}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              {region.healthSystems.length} Health Systems
            </span>
          </div>

          <p className="text-lg text-gray-600">{region.overview}</p>
        </div>
      </section>

      {/* Healthcare Landscape */}
      <section className="mx-auto max-w-5xl px-4 py-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Healthcare Landscape
        </h2>
        <p className="text-gray-600 mb-6">{region.healthcareLandscape}</p>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Key Considerations</h3>
          <ul className="space-y-2">
            {region.keyConsiderations.map((consideration, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 mt-1">✓</span>
                {consideration}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Health Systems Comparison */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Compare Health Systems
        </h2>
        <p className="text-gray-600 mb-8">
          Click any health system for detailed information, or compare them
          side-by-side below.
        </p>

        <div className="space-y-6">
          {region.healthSystems.map((system, index) => (
            <HealthSystemCard
              key={system.slug}
              system={system}
              regionSlug={region.slug}
              rank={index + 1}
            />
          ))}
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="bg-gray-50 px-4 py-12 border-t border-gray-200">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Health System
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Beds
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Ranking
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {region.healthSystems.map((system) => (
                  <tr key={system.slug} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link
                        href={
                          system.nationalSlug
                            ? `/health-systems/${system.nationalSlug}`
                            : `/traditional-healthcare/california/health-systems/${system.slug}`
                        }
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {system.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 capitalize">
                      {system.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {system.beds?.toLocaleString() || 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {system.nationalRank ? (
                        <span className="text-yellow-700 font-medium">
                          {system.nationalRank}
                        </span>
                      ) : system.stateRank ? (
                        <span className="text-blue-600">
                          #{system.stateRank} in CA
                        </span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {system.bestFor[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cash-Pay CTA */}
      <section className="bg-blue-50 px-4 py-12 border-t border-blue-100">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Exploring Cash-Pay Options?
          </h3>
          <p className="text-gray-600 mb-6">
            Compare transparent pricing from telehealth providers and local
            clinics in California.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              At-Home Lab Testing
            </Link>
            <Link
              href="/dexa"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              DEXA Scans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HealthSystemCard({
  system,
  regionSlug,
  rank,
}: {
  system: CaliforniaHealthSystem;
  regionSlug: string;
  rank: number;
}) {
  const detailUrl = system.nationalSlug
    ? `/health-systems/${system.nationalSlug}`
    : `/traditional-healthcare/california/health-systems/${system.slug}`;

  return (
    <div className="rounded-lg border-2 border-gray-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded">
              #{rank} in Region
            </span>
            {system.nationalRank && (
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded">
                {system.nationalRank}
              </span>
            )}
          </div>
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded capitalize">
            {system.type}
          </span>
        </div>

        <Link href={detailUrl}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {system.name}
          </h3>
        </Link>

        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
          {system.beds && <span>{system.beds.toLocaleString()} beds</span>}
          {system.founded && <span>Est. {system.founded}</span>}
          {system.stateRank && !system.nationalRank && (
            <span>#{system.stateRank} in California</span>
          )}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Left Column */}
        <div>
          {/* Specialties */}
          {system.specialties && system.specialties.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Top Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {system.specialties.slice(0, 4).map((specialty) => (
                  <span
                    key={specialty}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Highlights
            </h4>
            <ul className="space-y-1">
              {system.highlights.slice(0, 3).map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-green-600 mt-0.5">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Best For */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-green-700 mb-2">
              Best For
            </h4>
            <ul className="space-y-1">
              {system.bestFor.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-green-600 mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Considerations */}
          <div>
            <h4 className="text-sm font-semibold text-amber-700 mb-2">
              Considerations
            </h4>
            <ul className="space-y-1">
              {system.considerations.slice(0, 2).map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="text-amber-600 mt-0.5">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <a
          href={system.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-600"
        >
          {system.website.replace('https://', '').replace('www.', '')}
        </a>
        <Link
          href={detailUrl}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Full Details →
        </Link>
      </div>
    </div>
  );
}
