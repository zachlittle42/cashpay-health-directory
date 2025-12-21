import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, getCategoryBySlug, CategorySlug, MedicalTourismProvider } from '@/lib/types';
import { getProvidersByCategory } from '@/lib/providers';

export function generateStaticParams() {
  return CATEGORIES.map(category => ({
    category: category.slug,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return { title: 'Not Found' };

  return {
    title: `${category.name} - Cash-Pay Health Directory`,
    description: category.description,
  };
}

function isMedicalTourismProvider(provider: ReturnType<typeof getProvidersByCategory>[0]): provider is MedicalTourismProvider {
  return provider.type === 'medical-tourism';
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const providers = getProvidersByCategory(params.category as CategorySlug);
  const featuredProviders = providers.filter(p => p.featured);
  const otherProviders = providers.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Directory
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {category.name}
              </h1>
              <p className="mt-1 text-lg text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Providers */}
        {featuredProviders.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Providers
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProviders.map(provider => (
                <div
                  key={provider.slug}
                  className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {provider.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{provider.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Pricing</p>
                      <p className="text-sm text-gray-600">{provider.pricingDisplay}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Savings</p>
                      <p className="text-sm text-green-600">{provider.pricingComparison}</p>
                    </div>
                  </div>

                  {isMedicalTourismProvider(provider) && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Destination</p>
                      <p className="text-sm text-gray-600">
                        {provider.destinationCity}, {provider.destinationCountry} • {provider.typicalTripLength}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.bestFor.map((item, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-2">Pros</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {provider.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-green-500">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-700 mb-2">Cons</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {provider.cons.slice(0, 3).map((con, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-red-500">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Our Take</p>
                    <p className="text-sm text-blue-700">{provider.ourTake}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Providers */}
        {otherProviders.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {featuredProviders.length > 0 ? 'Other Providers' : 'All Providers'}
            </h2>
            <div className="space-y-6">
              {otherProviders.map(provider => (
                <div
                  key={provider.slug}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {provider.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{provider.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Pricing</p>
                      <p className="text-sm text-gray-600">{provider.pricingDisplay}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Savings</p>
                      <p className="text-sm text-green-600">{provider.pricingComparison}</p>
                    </div>
                    {isMedicalTourismProvider(provider) && (
                      <div>
                        <p className="text-sm font-semibold text-gray-700">Destination</p>
                        <p className="text-sm text-gray-600">
                          {provider.destinationCity}, {provider.destinationCountry}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.bestFor.map((item, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <details className="group">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Show details
                    </summary>
                    <div className="mt-4 pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-green-700 mb-2">Pros</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {provider.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-green-500">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-700 mb-2">Cons</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {provider.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-red-500">-</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-blue-800 mb-1">Our Take</p>
                        <p className="text-sm text-blue-700">{provider.ourTake}</p>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <section className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Important Disclaimer
          </h3>
          <p className="text-amber-700 text-sm">
            This directory is for informational purposes only and does not constitute medical advice.
            Always consult with qualified healthcare providers before making medical decisions.
            We are not affiliated with any providers listed and do not receive compensation for referrals.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Cash-Pay Health Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
