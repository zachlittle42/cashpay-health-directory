import Link from 'next/link';
import type { Metadata } from 'next';
import { CATEGORIES, type Category } from '@/lib/types';
import { ALL_PROVIDERS } from '@/lib/providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';

export const metadata: Metadata = {
  title: 'Search Results',
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = (searchParams.q || '').trim().toLowerCase();

  if (!query) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search VitalityScout</h1>
          <p className="text-gray-600 mb-8">Find providers, services, and destinations.</p>
          <SearchBar />
        </section>
        <Footer />
      </main>
    );
  }

  // Search categories
  const matchingCategories = (Object.entries(CATEGORIES) as [Category, (typeof CATEGORIES)[Category]][])
    .filter(([, cat]) => {
      const haystack = `${cat.name} ${cat.description}`.toLowerCase();
      return haystack.includes(query);
    });

  // Search providers
  const allProviders = Object.values(ALL_PROVIDERS).flat();
  const matchingProviders = allProviders.filter((p) => {
    const haystack = [
      p.name,
      p.description,
      ...p.services,
      ...p.bestFor,
      p.destinationCity || '',
      p.destinationCountry || '',
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(query);
  });

  const totalResults = matchingCategories.length + matchingProviders.length;

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results
          </h1>
          <p className="text-gray-600">
            {totalResults} result{totalResults !== 1 ? 's' : ''} for &ldquo;{searchParams.q}&rdquo;
          </p>
          <SearchBar />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        {matchingCategories.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {matchingCategories.map(([slug, cat]) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition-colors"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{cat.name}</div>
                    <p className="text-sm text-gray-600 line-clamp-2">{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {matchingProviders.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Providers</h2>
            <div className="space-y-3">
              {matchingProviders.map((provider) => (
                <Link
                  key={provider.slug}
                  href={`/providers/${provider.slug}`}
                  className="block rounded-lg border border-gray-200 p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-gray-900">{provider.name}</div>
                      <p className="text-sm text-gray-600 line-clamp-2 mt-1">{provider.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {provider.bestFor.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-gray-900">{provider.pricingDisplay}</div>
                      {provider.savingsPercent && (
                        <p className="text-xs text-green-600">Save ~{provider.savingsPercent}%</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {totalResults === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500 mb-4">No results found for &ldquo;{searchParams.q}&rdquo;</p>
            <p className="text-sm text-gray-400">Try searching for a category like &ldquo;dental&rdquo; or a service like &ldquo;GLP-1&rdquo;</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
