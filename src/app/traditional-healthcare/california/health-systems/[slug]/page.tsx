import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  CALIFORNIA_REGIONS,
  type CaliforniaHealthSystem,
  type CaliforniaRegion,
} from '@/lib/california-healthcare-data';

// Get all health system slugs that don't have a national page
function getAllCaliforniaHealthSystemSlugs(): { slug: string; region: CaliforniaRegion }[] {
  const systems: { slug: string; region: CaliforniaRegion }[] = [];
  for (const region of CALIFORNIA_REGIONS) {
    for (const system of region.healthSystems) {
      // Only include systems that don't have a national page
      if (!system.nationalSlug) {
        systems.push({ slug: system.slug, region });
      }
    }
  }
  return systems;
}

function getHealthSystemBySlug(slug: string): {
  system: CaliforniaHealthSystem;
  region: CaliforniaRegion;
} | null {
  for (const region of CALIFORNIA_REGIONS) {
    const system = region.healthSystems.find((s) => s.slug === slug);
    if (system) {
      return { system, region };
    }
  }
  return null;
}

export function generateStaticParams() {
  return getAllCaliforniaHealthSystemSlugs().map(({ slug }) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const result = getHealthSystemBySlug(params.slug);
  if (!result) return { title: 'Health System Not Found' };

  const { system, region } = result;
  return {
    title: `${system.name} - ${region.name}, California | VitalityScout`,
    description: `${system.name} is a ${system.type} health system in ${region.name}, California. ${system.highlights[0]}. Compare with other ${region.name} hospitals.`,
  };
}

export default function CaliforniaHealthSystemPage({
  params,
}: {
  params: { slug: string };
}) {
  const result = getHealthSystemBySlug(params.slug);

  if (!result) {
    notFound();
  }

  const { system, region } = result;

  // Get other systems in the same region for comparison
  const otherSystems = region.healthSystems.filter(
    (s) => s.slug !== system.slug
  );

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
            <Link
              href={`/traditional-healthcare/california/${region.slug}`}
              className="hover:text-blue-600"
            >
              {region.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{system.name}</span>
          </div>

          <div className="flex flex-wrap items-start gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {system.name}
            </h1>
            {system.stateRank && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                #{system.stateRank} in California
              </span>
            )}
          </div>

          <p className="text-lg text-gray-600 mb-4">
            {region.name}, California
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full capitalize">
              {system.type} Hospital
            </span>
            {system.beds && (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {system.beds.toLocaleString()} beds
              </span>
            )}
            {system.founded && (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                Est. {system.founded}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Specialties */}
            {system.specialties && system.specialties.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Specialties
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {system.specialties.map((specialty, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-blue-50 rounded-lg p-3"
                    >
                      <span className="text-blue-600">●</span>
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {system.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1 text-lg">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Best For */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Best For
              </h2>
              <div className="bg-green-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {system.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">+</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Considerations */}
            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Things to Consider
              </h2>
              <div className="bg-amber-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {system.considerations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-600 mt-1">!</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-gray-500">Type</dt>
                  <dd className="font-medium text-gray-900 capitalize">
                    {system.type} Hospital
                  </dd>
                </div>
                {system.beds && (
                  <div>
                    <dt className="text-sm text-gray-500">Beds</dt>
                    <dd className="font-medium text-gray-900">
                      {system.beds.toLocaleString()}
                    </dd>
                  </div>
                )}
                {system.founded && (
                  <div>
                    <dt className="text-sm text-gray-500">Founded</dt>
                    <dd className="font-medium text-gray-900">{system.founded}</dd>
                  </div>
                )}
                {system.stateRank && (
                  <div>
                    <dt className="text-sm text-gray-500">California Rank</dt>
                    <dd className="font-medium text-blue-600">
                      #{system.stateRank}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm text-gray-500">Region</dt>
                  <dd className="font-medium text-gray-900">{region.name}</dd>
                </div>
              </dl>
            </div>

            {/* Visit Website */}
            <a
              href={system.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Visit Website →
            </a>

            {/* Compare in Region */}
            <Link
              href={`/traditional-healthcare/california/${region.slug}`}
              className="block w-full bg-gray-100 text-gray-700 text-center py-4 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Compare {region.name} Hospitals
            </Link>

            {/* Other Systems in Region */}
            {otherSystems.length > 0 && (
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Also in {region.name}
                </h3>
                <ul className="space-y-3">
                  {otherSystems.slice(0, 4).map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={
                          other.nationalSlug
                            ? `/health-systems/${other.nationalSlug}`
                            : `/traditional-healthcare/california/health-systems/${other.slug}`
                        }
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {other.name}
                        {other.nationalRank && (
                          <span className="text-yellow-700 ml-1">★</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <section className="bg-gray-50 border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-gray-500">
            <strong>Disclaimer:</strong> Information is compiled from public
            sources including hospital websites, US News & World Report, and
            California OSHPD data. Rankings and statistics may change. Always
            verify current information directly with the health system. This is
            for informational purposes only and does not constitute medical
            advice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
