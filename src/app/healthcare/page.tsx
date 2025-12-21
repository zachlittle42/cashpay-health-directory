import Link from 'next/link';
import { Metadata } from 'next';
import StateSearch from '@/components/StateSearch';
import { getStatesAlphabetical, getPriorityStates, type State } from '@/lib/states';

export const metadata: Metadata = {
  title: 'Traditional Healthcare by State | CashPay Health Directory',
  description:
    'Find top health systems, hospitals, and surgery centers in your state. Compare quality ratings, specialties, and make informed healthcare decisions.',
};

function StateCard({ state }: { state: State }) {
  return (
    <Link
      href={`/healthcare/${state.slug}`}
      className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 hover:border-teal-400 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">🏥</span>
        <div>
          <div className="font-medium text-gray-900 group-hover:text-teal-600">{state.name}</div>
          <div className="text-xs text-gray-500">{state.population} population</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {state.hasContent && (
          <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
            Guide Ready
          </span>
        )}
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
          {state.abbreviation}
        </span>
      </div>
    </Link>
  );
}

function PriorityStateCard({ state }: { state: State }) {
  return (
    <Link
      href={`/healthcare/${state.slug}`}
      className="group block rounded-xl border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-white p-5 hover:border-teal-400 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-2xl mb-2">🏥</div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600">
            {state.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{state.population} population</p>
        </div>
        <span className="rounded bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700">
          {state.abbreviation}
        </span>
      </div>
      {state.hasContent ? (
        <div className="mt-3 flex items-center gap-1 text-sm text-teal-600">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Full guide available
        </div>
      ) : (
        <div className="mt-3 text-sm text-gray-500">Coming soon</div>
      )}
    </Link>
  );
}

export default function HealthcarePage() {
  const priorityStates = getPriorityStates();
  const allStates = getStatesAlphabetical();

  // Group states by first letter for the full directory
  const statesByLetter = allStates.reduce(
    (acc, state) => {
      const letter = state.name[0];
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(state);
      return acc;
    },
    {} as Record<string, State[]>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
            <span>🏥</span>
            <span>Traditional Healthcare</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Find Top Health Systems by State
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compare the best hospitals, health systems, and surgery centers across the United
            States. Get state-specific healthcare insights and quality rankings.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-xl">
            <StateSearch placeholder="Search for your state..." />
          </div>
        </div>
      </section>

      {/* Priority States */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Featured States</h2>
          <p className="mt-1 text-sm text-gray-500">
            Our most comprehensive state healthcare guides
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {priorityStates.map((state) => (
            <PriorityStateCard key={state.slug} state={state} />
          ))}
        </div>
      </section>

      {/* All States Directory */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900">All States &amp; Territories</h2>
            <p className="mt-1 text-sm text-gray-500">
              Browse healthcare guides for all 50 states plus DC
            </p>
          </div>

          {/* Alphabet Quick Links */}
          <div className="mb-6 flex flex-wrap gap-2">
            {Object.keys(statesByLetter)
              .sort()
              .map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="flex h-8 w-8 items-center justify-center rounded bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-teal-50 hover:text-teal-600"
                >
                  {letter}
                </a>
              ))}
          </div>

          {/* States Grid by Letter */}
          <div className="space-y-8">
            {Object.keys(statesByLetter)
              .sort()
              .map((letter) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{letter}</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {statesByLetter[letter].map((state) => (
                      <StateCard key={state.slug} state={state} />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            What You&apos;ll Find in Each State Guide
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-xl">
                🏆
              </div>
              <h3 className="font-semibold">Top Health Systems</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ranked hospitals and medical centers with quality ratings
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                📊
              </div>
              <h3 className="font-semibold">State Overview</h3>
              <p className="mt-2 text-sm text-gray-600">
                Healthcare landscape, costs, and key statistics
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl">
                🎯
              </div>
              <h3 className="font-semibold">Specialties</h3>
              <p className="mt-2 text-sm text-gray-600">
                What each system is known for and excels at
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
                ✓
              </div>
              <h3 className="font-semibold">Awards &amp; Recognition</h3>
              <p className="mt-2 text-sm text-gray-600">
                US News rankings, accreditations, and honors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/"
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
            Back to Cash-Pay Directory
          </Link>
        </div>
      </section>
    </main>
  );
}
