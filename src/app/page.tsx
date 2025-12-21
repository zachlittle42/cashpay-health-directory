import Link from 'next/link';
import { CATEGORIES, type Category } from '@/lib/types';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Group categories for display
const telehealthCategories: Category[] = ['labs', 'glp1', 'trt'];
const localCategories: Category[] = ['dexa', 'vo2max', 'longevity'];
const medicalTourismCategories: Category[] = [
  'dental',
  'hair_transplant',
  'plastic_surgery',
  'bariatric',
  'fertility',
  'orthopedic',
];

function CategoryCard({ slug }: { slug: Category }) {
  const cat = CATEGORIES[slug];
  return (
    <Link
      href={`/${slug}`}
      className="group block rounded-lg border border-gray-200 p-5 hover:border-blue-500 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{cat.icon}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
            {cat.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{cat.description}</p>
          {cat.typicalSavings && (
            <p className="mt-2 text-xs font-medium text-green-600">
              Save {cat.typicalSavings} abroad
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Cash-Pay Health Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compare prices for labs, GLP-1 programs, dental work, hair transplants, and more.
            <br />
            <span className="font-medium">Transparent pricing. No insurance needed.</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-blue-700">
              US Telehealth
            </span>
            <span className="rounded-full bg-green-100 px-4 py-1.5 text-green-700">
              Local Clinics
            </span>
            <span className="rounded-full bg-purple-100 px-4 py-1.5 text-purple-700">
              Medical Tourism
            </span>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Telehealth
            </span>
            <h2 className="text-xl font-bold text-gray-900">Ship to Your Door</h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            No travel required. Order online, get results or medications shipped.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {telehealthCategories.map((slug) => (
            <CategoryCard key={slug} slug={slug} />
          ))}
        </div>
      </section>

      {/* Local Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 border-t border-gray-100">
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Local
            </span>
            <h2 className="text-xl font-bold text-gray-900">Find Near You</h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Services that require an in-person visit at a local facility.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localCategories.map((slug) => (
            <CategoryCard key={slug} slug={slug} />
          ))}
        </div>
      </section>

      {/* Medical Tourism Section */}
      <section className="bg-gradient-to-b from-white to-purple-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                Medical Tourism
              </span>
              <h2 className="text-xl font-bold text-gray-900">Save 50-80% Abroad</h2>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Major procedures at a fraction of US prices. We help you compare destinations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {medicalTourismCategories.map((slug) => (
              <CategoryCard key={slug} slug={slug} />
            ))}
          </div>

          {/* Destination Quick Links */}
          <div className="mt-10 rounded-lg border border-purple-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Popular Destinations</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Mexico', flag: '🇲🇽', specialties: 'Dental, Bariatric' },
                { name: 'Turkey', flag: '🇹🇷', specialties: 'Hair Transplant, Dental' },
                { name: 'South Korea', flag: '🇰🇷', specialties: 'Plastic Surgery' },
                { name: 'Thailand', flag: '🇹🇭', specialties: 'Cosmetic, Orthopedic' },
                { name: 'Spain', flag: '🇪🇸', specialties: 'Fertility/IVF' },
                { name: 'India', flag: '🇮🇳', specialties: 'Cardiac, Orthopedic' },
              ].map((dest) => (
                <Link
                  key={dest.name}
                  href={`/destinations/${dest.name.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:border-purple-400 hover:bg-purple-50 transition-colors"
                >
                  <span className="text-xl">{dest.flag}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{dest.name}</div>
                    <div className="text-xs text-gray-500">{dest.specialties}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Use This Directory?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl mb-3">
                $
              </div>
              <h3 className="font-semibold">Transparent Pricing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Real prices, not &quot;contact us&quot;. We do the research so you don&apos;t have to.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl mb-3">
                ✓
              </div>
              <h3 className="font-semibold">Curated Quality</h3>
              <p className="mt-2 text-sm text-gray-600">
                Not everyone gets listed. We vet for quality, accreditation, and reputation.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl mb-3">
                ⚖️
              </div>
              <h3 className="font-semibold">Honest Comparisons</h3>
              <p className="mt-2 text-sm text-gray-600">
                Pros AND cons. &quot;Best for X&quot; recommendations. Editorial opinions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learn Before You Book
            </h2>
            <p className="text-lg text-gray-600">
              Evidence-based guides to help you make informed decisions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/guides/glp1-weight-loss-complete-guide"
              className="group rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">💊</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                GLP-1 Weight Loss Guide
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                How semaglutide works, expected results, and real costs.
              </p>
              <span className="text-sm font-medium text-blue-600">Read guide →</span>
            </Link>

            <Link
              href="/guides/hair-transplant-turkey-guide"
              className="group rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">💇</div>
              <h3 className="font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Hair Transplant in Turkey
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Safety checklist, choosing clinics, and what to expect.
              </p>
              <span className="text-sm font-medium text-purple-600">Read guide →</span>
            </Link>

            <Link
              href="/guides/mexico-medical-tourism-planner"
              className="group rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🇲🇽</div>
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 mb-2">
                Mexico Trip Planner
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Border crossing tips, packing list, and trip timeline.
              </p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>

            <Link
              href="/guides/us-healthcare-by-region"
              className="group rounded-lg border-2 border-gray-200 p-6 hover:border-orange-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 mb-2">
                US Healthcare by Region
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Top hospitals and health systems across major US regions.
              </p>
              <span className="text-sm font-medium text-orange-600">Read guide →</span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/guides"
              className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              View All Guides →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
