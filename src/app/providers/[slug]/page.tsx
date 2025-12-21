import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProviderBySlug, getTotalProviderCount } from '@/lib/providers';
import { CATEGORIES } from '@/lib/types';

export function generateStaticParams() {
  // This would ideally get all provider slugs
  // For now, returning empty array means pages are generated on-demand
  return [];
}

export default function ProviderDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const provider = getProviderBySlug(params.slug);

  if (!provider) {
    notFound();
  }

  const category = CATEGORIES[provider.category];
  const isMedicalTourism = provider.destinationCountry !== undefined;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href={`/${provider.category}`} className="text-sm text-blue-600 hover:underline">
            ← Back to {category.name}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm text-gray-500">{category.name}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{provider.name}</h1>
              {isMedicalTourism && provider.destinationCity && (
                <p className="text-lg text-purple-600 mb-4">
                  📍 {provider.destinationCity}, {provider.destinationCountry}
                  {provider.typicalTripLength && ` • ${provider.typicalTripLength}`}
                </p>
              )}
              <p className="text-lg text-gray-600">{provider.description}</p>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6 min-w-[240px]">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {provider.pricingDisplay}
              </div>
              {provider.pricingComparison && (
                <p className="text-sm text-green-600 mb-1">{provider.pricingComparison}</p>
              )}
              {provider.savingsPercent && (
                <p className="text-sm font-medium text-green-700 mb-4">
                  Save ~{provider.savingsPercent}%
                </p>
              )}
              <a
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Visit {provider.name} →
              </a>
              <p className="mt-3 text-xs text-gray-500 text-center">
                External link • Always verify pricing
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {provider.featured && (
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                ⭐ Featured
              </span>
            )}
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              {provider.deliveryModel.replace(/_/g, ' ')}
            </span>
            {provider.yearsInBusiness && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                {provider.yearsInBusiness}+ years in business
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            {provider.services && provider.services.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-lg bg-blue-50 px-4 py-2 text-sm text-blue-700 border border-blue-200"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Our Take */}
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Our Take</h2>
              <p className="text-gray-700 leading-relaxed">{provider.ourTake}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="font-bold text-green-800 mb-4">Pros</h3>
                <ul className="space-y-2">
                  {provider.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h3 className="font-bold text-red-800 mb-4">Cons</h3>
                <ul className="space-y-2">
                  {provider.cons.map((con, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-red-600 font-bold">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medical Tourism Details */}
            {isMedicalTourism && provider.includesInPackage && provider.includesInPackage.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
                <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {provider.includesInPackage.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-purple-600">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {provider.recoveryNotes && (
                  <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4">
                    <h3 className="text-sm font-semibold text-amber-800 mb-1">Recovery Notes</h3>
                    <p className="text-sm text-amber-700">{provider.recoveryNotes}</p>
                  </div>
                )}
              </div>
            )}

            {/* Pricing Details */}
            {provider.pricingNotes && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing Details</h2>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <p className="text-gray-700">{provider.pricingNotes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Best For */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4">Best For</h3>
              <ul className="space-y-2">
                {provider.bestFor.map((item) => (
                  <li key={item} className="text-sm text-gray-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4">Coverage</h3>
              <ul className="space-y-2">
                {provider.geographicCoverage.map((area) => (
                  <li key={area} className="text-sm text-gray-700">
                    📍 {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accreditations */}
            {provider.accreditations && provider.accreditations.length > 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-4">Accreditations</h3>
                <ul className="space-y-2">
                  {provider.accreditations.map((acc) => (
                    <li key={acc} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">✓</span>
                      {acc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Trust Indicators */}
            {(provider.yearsInBusiness || provider.procedureVolume) && (
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-4">Trust Indicators</h3>
                <div className="space-y-3">
                  {provider.yearsInBusiness && (
                    <div>
                      <p className="text-xs text-gray-500">Years in Business</p>
                      <p className="font-semibold text-gray-900">{provider.yearsInBusiness}+</p>
                    </div>
                  )}
                  {provider.procedureVolume && (
                    <div>
                      <p className="text-xs text-gray-500">Volume</p>
                      <p className="font-semibold text-gray-900">{provider.procedureVolume}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Last Verified */}
            <div className="rounded-lg bg-gray-50 p-4">
              <p className="text-xs text-gray-500">
                Last verified: {new Date(provider.lastVerified).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mt-12 rounded-lg bg-amber-50 border-2 border-amber-300 p-6">
          <h3 className="font-bold text-amber-900 mb-3">⚠️ Important</h3>
          <div className="space-y-2 text-sm text-amber-800">
            <p>
              <strong>Always verify pricing and details directly with the provider.</strong> Prices shown are estimates based on our research as of {new Date(provider.lastVerified).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} and may have changed.
            </p>
            <p>
              This information is for educational purposes only and does not constitute medical advice. Consult with qualified healthcare professionals before making medical decisions.
            </p>
            <p>
              We may earn a commission if you use our links, but this does not affect our editorial opinions or the information presented.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href={provider.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Visit {provider.name} Website →
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Opens in new window • {provider.referralType.replace(/_/g, ' ')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8 mt-16">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-500">
          <p>
            Part of the Cash-Pay Health Directory • {getTotalProviderCount()} providers and counting
          </p>
        </div>
      </footer>
    </main>
  );
}
