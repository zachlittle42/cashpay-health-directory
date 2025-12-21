import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, type Category, type Provider } from '@/lib/types';
import { getProvidersByCategory } from '@/lib/providers';

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
            {provider.featured && (
              <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                Featured
              </span>
            )}
          </div>

          {provider.destinationCity && (
            <p className="mt-1 text-sm text-purple-600">
              📍 {provider.destinationCity}, {provider.destinationCountry}
              {provider.typicalTripLength && ` · ${provider.typicalTripLength}`}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-600">{provider.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {provider.bestFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {provider.includesInPackage && provider.includesInPackage.length > 0 && (
            <p className="mt-3 text-xs text-gray-500">
              Includes: {provider.includesInPackage.slice(0, 3).join(', ')}
              {provider.includesInPackage.length > 3 && '...'}
            </p>
          )}
        </div>

        <div className="sm:text-right sm:min-w-[160px]">
          <div className="text-xl font-bold text-gray-900">{provider.pricingDisplay}</div>
          {provider.pricingComparison && (
            <p className="text-sm text-green-600">{provider.pricingComparison}</p>
          )}
          {provider.savingsPercent && (
            <p className="text-xs font-medium text-green-700 mt-1">
              Save ~{provider.savingsPercent}%
            </p>
          )}
          <Link
            href={`/providers/${provider.slug}`}
            className="mt-3 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category as Category;
  const category = CATEGORIES[categorySlug];

  if (!category) {
    notFound();
  }

  const providers = getProvidersByCategory(categorySlug);
  const hasMedicalTourism = category.hasMedicalTourism;
  const destinations = hasMedicalTourism ? category.topDestinations : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to all categories
          </Link>
        </div>
      </header>

      {/* Category Header */}
      <section className={`px-4 py-12 ${hasMedicalTourism ? 'bg-gradient-to-b from-purple-50 to-white' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-lg text-gray-600">{category.description}</p>

          {hasMedicalTourism && (
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                Save {category.typicalSavings} abroad
              </span>
              {destinations && destinations.length > 0 && (
                <span className="text-sm text-gray-500">
                  Top destinations: {destinations.join(', ')}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats for Medical Tourism Categories */}
      {hasMedicalTourism && (
        <section className="border-b border-gray-100 px-4 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {category.typicalSavings}
                </div>
                <div className="text-xs text-gray-500">Typical Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {destinations?.length || 0}+
                </div>
                <div className="text-xs text-gray-500">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {providers.length}
                </div>
                <div className="text-xs text-gray-500">Vetted Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5-10</div>
                <div className="text-xs text-gray-500">Days Typical Trip</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Providers List */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        {hasMedicalTourism && destinations && destinations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-500 mb-3">Filter by Destination</h2>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-gray-900 px-4 py-1.5 text-sm text-white">
                All
              </button>
              {destinations.map((dest) => (
                <button
                  key={dest}
                  className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400"
                >
                  {dest}
                </button>
              ))}
              {category.hasLocalUS && (
                <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400">
                  🇺🇸 US Clinics
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {providers.length > 0 ? `${providers.length} Providers` : 'Providers'}
          </h2>
          <div className="text-sm text-gray-500">Sort: Recommended</div>
        </div>

        {providers.length > 0 ? (
          <div className="space-y-4">
            {providers.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-12 text-center">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              We&apos;re currently researching and vetting {category.name.toLowerCase()} providers.
            </p>
          </div>
        )}

        {/* Editorial Section */}
        {hasMedicalTourism && (
          <div className="mt-12 rounded-lg bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Should You Travel for {category.name}?
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-green-700 mb-2">Why Travel</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Save {category.typicalSavings} vs US prices</li>
                  <li>• Access to high-volume specialists</li>
                  <li>• Often shorter wait times</li>
                  <li>• All-inclusive packages simplify planning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-red-700 mb-2">Considerations</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Travel time and recovery logistics</li>
                  <li>• Follow-up care after returning home</li>
                  <li>• Research and vet providers carefully</li>
                  <li>• Factor in all travel costs</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-500">
          <p>
            Prices shown are estimates based on our research. Always confirm directly with providers.
          </p>
        </div>
      </footer>
    </main>
  );
}
