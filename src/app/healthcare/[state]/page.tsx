import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStateBySlug, getAllStateSlugs, getPriorityStates } from '@/lib/states';
import {
  getStateHealthcareData,
  getStateRegions,
  hasStateContent,
  type HealthSystem,
  type StateRegion,
  type StateHealthcareData,
} from '@/lib/health-systems';

interface PageProps {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return getAllStateSlugs().map((state) => ({ state }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return { title: 'State Not Found' };

  return {
    title: `${state.name} Healthcare Guide | Top Health Systems | CashPay Health Directory`,
    description: `Find the best hospitals and health systems in ${state.name}. Compare quality ratings, specialties, and rankings for ${state.name}'s top medical centers.`,
  };
}

function HealthSystemCard({ system, index }: { system: HealthSystem; index: number }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 flex-shrink-0">
          {index + 1}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-gray-900">{system.name}</h4>
            {system.nationalRank && (
              <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 whitespace-nowrap">
                {system.nationalRank}
              </span>
            )}
          </div>
          <div className="mt-1 text-xs text-gray-500">{system.type}</div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{system.description}</p>

          {/* Specialties */}
          <div className="mt-2 flex flex-wrap gap-1">
            {system.specialties.slice(0, 4).map((specialty) => (
              <span
                key={specialty}
                className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700"
              >
                {specialty}
              </span>
            ))}
            {system.specialties.length > 4 && (
              <span className="text-xs text-gray-500">+{system.specialties.length - 4} more</span>
            )}
          </div>

          {/* Highlights */}
          <ul className="mt-2 space-y-1">
            {system.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="flex items-start gap-1 text-xs text-gray-600">
                <svg
                  className="mt-0.5 h-3 w-3 flex-shrink-0 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RegionSection({ region }: { region: StateRegion }) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
          <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
            <span>{region.cities.join(', ')}</span>
            <span className="text-gray-300">|</span>
            <span>{region.population} population</span>
          </div>
        </div>
        <div className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
          {region.healthSystems.length} systems
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {region.healthSystems.map((system, index) => (
          <HealthSystemCard key={system.name} system={system} index={index} />
        ))}
      </div>
    </div>
  );
}

function StateOverviewSection({ data }: { data: StateHealthcareData }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Overview</h2>
        <p className="text-gray-700 leading-relaxed">{data.overview}</p>

        {/* Key Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{data.population}</div>
            <div className="text-sm text-gray-600">Population</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{data.uninsuredRate}</div>
            <div className="text-sm text-gray-600">Uninsured Rate</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{data.avgHealthcareCost}</div>
            <div className="text-sm text-gray-600">Avg. Healthcare Costs</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{data.regions.length}</div>
            <div className="text-sm text-gray-600">Healthcare Regions</div>
          </div>
        </div>

        {/* Highlights & Challenges */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Healthcare Highlights</h3>
            <ul className="space-y-2">
              {data.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Challenges to Consider</h3>
            <ul className="space-y-2">
              {data.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Region Quick Links */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Jump to Region</h3>
          <div className="flex flex-wrap gap-2">
            {data.regions.map((region) => (
              <a
                key={region.slug}
                href={`#${region.slug}`}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-teal-50 hover:text-teal-700 transition-colors"
              >
                {region.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoonPlaceholder({ stateName }: { stateName: string }) {
  const priorityStates = getPriorityStates();

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12">
        <div className="text-6xl mb-4">🚧</div>
        <h2 className="text-2xl font-bold text-gray-900">
          {stateName} Healthcare Guide Coming Soon
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg mx-auto">
          We&apos;re working on a comprehensive healthcare guide for {stateName}. In the meantime,
          check out our completed state guides below.
        </p>

        <div className="mt-8">
          <h3 className="font-semibold text-gray-700 mb-4">Explore Available Guides</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {priorityStates
              .filter((s) => s.hasContent)
              .map((state) => (
                <Link
                  key={state.slug}
                  href={`/healthcare/${state.slug}`}
                  className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-200 transition-colors"
                >
                  {state.name}
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/healthcare"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Browse All States
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function StatePage({ params }: PageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const hasContent = hasStateContent(stateSlug);
  const stateData = getStateHealthcareData(stateSlug);
  const regions = getStateRegions(stateSlug);

  // Count total health systems
  const totalSystems = regions.reduce((acc, r) => acc + r.healthSystems.length, 0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-teal-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/healthcare" className="hover:text-teal-600">
              Traditional Healthcare
            </Link>
            <span>/</span>
            <span className="text-gray-900">{state.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 text-3xl">
              🏥
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {state.name} Healthcare Guide
                </h1>
                <span className="rounded bg-gray-200 px-2 py-1 text-sm font-medium text-gray-700">
                  {state.abbreviation}
                </span>
              </div>
              <p className="mt-2 text-gray-600">
                {hasContent
                  ? `${regions.length} regions, ${totalSystems} health systems covered`
                  : `Healthcare guide for ${state.name} - Coming soon`}
              </p>
            </div>
          </div>

          {/* Quick Stats Bar */}
          {hasContent && stateData && (
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Population:</span>
                <span className="font-semibold text-gray-900">{stateData.population}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Uninsured:</span>
                <span className="font-semibold text-gray-900">{stateData.uninsuredRate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Regions:</span>
                <span className="font-semibold text-gray-900">{regions.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Health Systems:</span>
                <span className="font-semibold text-gray-900">{totalSystems}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {hasContent && stateData ? (
        <>
          {/* Overview Section */}
          <StateOverviewSection data={stateData} />

          {/* Regions with Health Systems */}
          <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Health Systems by Region
              </h2>
              <p className="mt-2 text-gray-600">
                Explore top hospitals and health systems across {state.name}&apos;s {regions.length} healthcare regions
              </p>
            </div>

            {regions.map((region) => (
              <div key={region.slug} id={region.slug}>
                <RegionSection region={region} />
              </div>
            ))}
          </section>

          {/* Related States */}
          <section className="bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Other States</h2>
              <div className="flex flex-wrap gap-3">
                {getPriorityStates()
                  .filter((s) => s.slug !== stateSlug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/healthcare/${s.slug}`}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-teal-400 hover:text-teal-600 transition-colors"
                    >
                      {s.name}
                      {s.hasContent && (
                        <span className="ml-2 text-xs text-teal-600">Guide Ready</span>
                      )}
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <ComingSoonPlaceholder stateName={state.name} />
      )}

      {/* Back Navigation */}
      <section className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-6xl flex justify-between items-center">
          <Link
            href="/healthcare"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            All States
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Back to Cash-Pay Directory
          </Link>
        </div>
      </section>
    </main>
  );
}
