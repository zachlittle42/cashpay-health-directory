import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStateBySlug, getAllStateSlugs, getPriorityStates } from '@/lib/states';
import {
  getHealthSystemsByState,
  getStateOverview,
  hasStateContent,
  type HealthSystem,
  type StateHealthcareOverview,
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
    <div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{system.name}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              {system.nationalRank && (
                <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                  #{system.nationalRank} Nationally
                </span>
              )}
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                {system.type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
              {system.beds && (
                <span className="text-gray-500">{system.beds} beds</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-600">{system.description}</p>

      {/* Specialties */}
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700">Top Specialties</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {system.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700">Highlights</h4>
        <ul className="mt-2 space-y-1">
          {system.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500"
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

      {/* Awards */}
      {system.awards && system.awards.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {system.awards.map((award) => (
            <span
              key={award}
              className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-800"
            >
              <span>🏆</span>
              {award}
            </span>
          ))}
        </div>
      )}

      {/* Website Link */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <a
          href={system.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
        >
          Visit Website
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function StateOverviewSection({ overview }: { overview: StateHealthcareOverview }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Overview</h2>
        <p className="text-gray-700 leading-relaxed">{overview.overview}</p>

        {/* Key Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{overview.population}</div>
            <div className="text-sm text-gray-600">Population</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{overview.uninsuredRate}</div>
            <div className="text-sm text-gray-600">Uninsured Rate</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{overview.avgHealthcareCost}</div>
            <div className="text-sm text-gray-600">Avg. Healthcare Costs</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-teal-600">{overview.majorMetros.length}</div>
            <div className="text-sm text-gray-600">Major Metro Areas</div>
          </div>
        </div>

        {/* Highlights & Challenges */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Healthcare Highlights</h3>
            <ul className="space-y-2">
              {overview.healthcareHighlights.map((highlight, i) => (
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
              {overview.challenges.map((challenge, i) => (
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

        {/* Major Metros */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Major Metro Areas</h3>
          <div className="flex flex-wrap gap-2">
            {overview.majorMetros.map((metro) => (
              <span
                key={metro}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm"
              >
                {metro}
              </span>
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
  const healthSystems = getHealthSystemsByState(stateSlug);
  const overview = getStateOverview(stateSlug);

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
                  ? `Top health systems, hospitals, and healthcare insights for ${state.name}`
                  : `Healthcare guide for ${state.name} - Coming soon`}
              </p>
            </div>
          </div>

          {/* Quick Stats Bar */}
          {hasContent && overview && (
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Population:</span>
                <span className="font-semibold text-gray-900">{overview.population}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Uninsured:</span>
                <span className="font-semibold text-gray-900">{overview.uninsuredRate}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Top Systems:</span>
                <span className="font-semibold text-gray-900">{healthSystems.length}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {hasContent && overview ? (
        <>
          {/* Overview Section */}
          <StateOverviewSection overview={overview} />

          {/* Health Systems */}
          <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Top Health Systems in {state.name}
              </h2>
              <p className="mt-2 text-gray-600">
                Ranked by US News &amp; World Report and quality metrics
              </p>
            </div>

            <div className="space-y-6">
              {healthSystems.map((system, index) => (
                <HealthSystemCard key={system.id} system={system} index={index} />
              ))}
            </div>
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
