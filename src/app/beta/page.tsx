import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySpotlight from '@/components/home/CategorySpotlight';
import CategoryGrid from '@/components/home/CategoryGrid';
import SpotlightInquiryForm from '@/components/home/SpotlightInquiryForm';
import EmailCaptureSection from '@/components/home/EmailCaptureSection';
import StickyCtaBar from '@/components/forms/StickyCtaBar';

export const metadata: Metadata = {
  title: 'VitalityScout | Research & Compare Cash-Pay Healthcare Providers',
  description:
    'Independent research on stem cells, GLP-1 weight loss, TRT, longevity clinics, and 20+ cash-pay healthcare categories. Real pricing, honest comparisons, 40+ vetted providers across 12 countries.',
  keywords: [
    'stem cell therapy',
    'regenerative medicine',
    'GLP-1 weight loss',
    'cash pay healthcare',
    'medical tourism',
    'longevity clinics',
    'TRT',
    'DEXA scan',
  ],
};

export default function V2HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VitalityScout',
    description:
      'Research and compare cash-pay healthcare providers. Independent guides on stem cells, GLP-1, TRT, longevity clinics, and medical tourism.',
    url: 'https://vitalityscout.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vitalityscout.com/traditional-healthcare?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Stem Cell Spotlight */}
      <CategorySpotlight />

      {/* Spotlight Inquiry Form (client component injected into spotlight column 3) */}
      <SpotlightInquiryForm />

      {/* Section 3: Category Expansion Grid */}
      <CategoryGrid />

      {/* Section 4: Trust & Value Props */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Stats Bar */}
          <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: '190+', label: 'Research Pages' },
              { value: '40+', label: 'Vetted Providers' },
              { value: '12', label: 'Countries' },
              { value: '114K', label: 'Words of Analysis' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Value Props */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-7 w-7 text-blue-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Independent Research</h3>
              <p className="mt-2 text-sm text-gray-600">
                We do the homework. Every provider is researched, every claim verified, every price
                confirmed. No sponsored rankings.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <svg className="h-7 w-7 text-green-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Real Pricing</h3>
              <p className="mt-2 text-sm text-gray-600">
                Actual costs, not &quot;contact us.&quot; We publish price ranges, package details,
                and what&apos;s included so you can compare before you call.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                <svg className="h-7 w-7 text-purple-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Global Coverage</h3>
              <p className="mt-2 text-sm text-gray-600">
                US telehealth, local clinics, and international options across 12 countries. Find the
                right care wherever it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Guides */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Research Guides</h2>
            <p className="text-lg text-gray-600">
              Evidence-based analysis to help you make informed healthcare decisions
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/guides/mexico-stem-cell-guide"
              className="group rounded-xl border-2 border-gray-200 p-6 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🇲🇽</div>
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 mb-2">
                Stem Cells in Mexico
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Clinics, costs from $3,500, safety considerations, and how to choose.
              </p>
              <span className="text-sm font-medium text-emerald-600">Read guide →</span>
            </Link>

            <Link
              href="/guides/glp1-weight-loss-complete-guide"
              className="group rounded-xl border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">💊</div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                GLP-1 Weight Loss Guide
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                How semaglutide works, expected results, and real costs from $199/mo.
              </p>
              <span className="text-sm font-medium text-blue-600">Read guide →</span>
            </Link>

            <Link
              href="/guides/panama-stem-cell-guide"
              className="group rounded-xl border-2 border-gray-200 p-6 hover:border-teal-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🇵🇦</div>
              <h3 className="font-bold text-gray-900 group-hover:text-teal-600 mb-2">
                Panama Stem Cell Guide
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Stem Cell Institute protocols, pricing, and patient logistics.
              </p>
              <span className="text-sm font-medium text-teal-600">Read guide →</span>
            </Link>

            <Link
              href="/longevity"
              className="group rounded-xl border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Longevity Hub
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                US and international longevity clinics, NAD+, peptides, and protocols.
              </p>
              <span className="text-sm font-medium text-purple-600">Explore hub →</span>
            </Link>

            {/* 5th card: Email Capture */}
            <div id="email-capture" className="sm:col-span-2 lg:col-span-2">
              <EmailCaptureSection />
            </div>
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

      {/* Section 6: Popular Destinations */}
      <section className="bg-gradient-to-b from-white to-purple-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600">
              Save 50-80% on major procedures with vetted international providers
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Mexico', flag: '🇲🇽', specialties: 'Dental, Bariatric, Stem Cells', slug: 'mexico' },
              { name: 'Turkey', flag: '🇹🇷', specialties: 'Hair Transplant, Dental', slug: 'turkey' },
              { name: 'South Korea', flag: '🇰🇷', specialties: 'Plastic Surgery', slug: 'south-korea' },
              { name: 'Thailand', flag: '🇹🇭', specialties: 'Cosmetic, Orthopedic', slug: 'thailand' },
              { name: 'Spain', flag: '🇪🇸', specialties: 'Fertility / IVF', slug: 'spain' },
              { name: 'Panama', flag: '🇵🇦', specialties: 'Stem Cells', slug: 'panama' },
              { name: 'Cayman Islands', flag: '🇰🇾', specialties: 'Stem Cells', slug: 'cayman-islands' },
              { name: 'Colombia', flag: '🇨🇴', specialties: 'Stem Cells, Cosmetic', slug: 'colombia' },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 hover:border-purple-400 hover:bg-purple-50 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{dest.flag}</span>
                <div>
                  <div className="font-medium text-gray-900">{dest.name}</div>
                  <div className="text-xs text-gray-500">{dest.specialties}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Centurion Coach Banner */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/centurioncoach"
          className="group block rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 p-6 sm:p-8 text-white hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Free iOS App
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Track Your Health Journey with Centurion Coach
              </h3>
              <p className="text-cyan-100 text-sm sm:text-base">
                On a GLP-1 program? Planning medical tourism? Track nutrition, supplements, and progress with AI coaching.
              </p>
            </div>
            <div className="hidden sm:block text-5xl group-hover:scale-110 transition-transform">🏛️</div>
          </div>
        </Link>
      </section>

      <Footer />

      {/* Section 8: Sticky CTA Bar */}
      <StickyCtaBar />
    </main>
  );
}
