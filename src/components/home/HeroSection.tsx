import Link from 'next/link';

const categoryPills = [
  { label: 'Stem Cells', href: '/longevity', featured: true },
  { label: 'GLP-1', href: '/glp1', featured: false },
  { label: 'TRT', href: '/trt', featured: false },
  { label: 'Longevity', href: '/longevity', featured: false },
  { label: 'Functional Med', href: '/local-clinics', featured: false },
  { label: 'Cosmetic', href: '/plastic_surgery', featured: false },
  { label: 'Dental', href: '/dental', featured: false },
  { label: 'Hair', href: '/hair_transplant', featured: false },
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          190+ research pages updated for 2026
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Research, Compare, and Choose
          <br />
          <span className="text-blue-600">the Right Provider</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Independent research on stem cells, GLP-1 weight loss, TRT, longevity clinics, and 20+
          cash-pay healthcare categories. Real pricing. Honest comparisons.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/longevity"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Explore Stem Cell Options
            <svg className="h-4 w-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="#email-capture"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            Get a Free Research Guide
          </a>
        </div>

        {/* Category Pathway Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categoryPills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pill.featured
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {pill.label}
              {pill.featured && ' ★'}
            </Link>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-blue-500" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span><strong className="text-gray-700">190+</strong> research pages</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-gray-300" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong className="text-gray-700">40+</strong> vetted providers</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-gray-300" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-purple-500" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong className="text-gray-700">12</strong> countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
