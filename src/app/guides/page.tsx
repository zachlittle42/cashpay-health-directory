import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Health Guides: Lab Testing, GLP-1, Hair Transplants & More | VitalityScout',
  description: 'Expert guides on cash-pay health services. Learn about GLP-1 weight loss, at-home lab testing, medical tourism, and more.',
};

const guides = [
  // Longevity & Stem Cell Guides
  {
    slug: 'mexico-stem-cell-guide',
    title: 'Stem Cell Therapy in Mexico: Complete Guide',
    description: 'Clinics in Tijuana, Los Cabos, Puerto Vallarta & Cancun. Costs from $3,750, what to expect, safety considerations, and regulatory disclaimers.',
    category: 'Longevity',
    readTime: '20 min',
    icon: '🇲🇽',
  },
  {
    slug: 'panama-stem-cell-guide',
    title: 'Panama Stem Cell Therapy: Golden Cells Guide',
    description: 'Stem Cell Institute, Golden Cells (umbilical cord MSCs), NFL athlete testimonials. Premium destination at $25,000-60,000.',
    category: 'Longevity',
    readTime: '20 min',
    icon: '🇵🇦',
  },
  {
    slug: 'colombia-stem-cell-guide',
    title: 'Colombia Stem Cell Therapy: BioXcellerator Guide',
    description: 'Medellin\'s all-inclusive stem cell packages. BioXcellerator, 300M+ cells, 40-60% savings vs Panama.',
    category: 'Longevity',
    readTime: '18 min',
    icon: '🇨🇴',
  },
  {
    slug: 'cayman-islands-stem-cell-guide',
    title: 'Cayman Islands Stem Cells: Expanded Cells Guide',
    description: 'DVC Stem, Regenexx-C. Only destination with expanded stem cells AND strict US/UK-level regulation.',
    category: 'Longevity',
    readTime: '16 min',
    icon: '🇰🇾',
  },
  {
    slug: 'dubai-longevity-guide',
    title: 'Dubai Longevity & Stem Cell Guide',
    description: 'AEON Clinic at Atlantis The Royal, Victor Longevity. Luxury regenerative medicine in the desert.',
    category: 'Longevity',
    readTime: '15 min',
    icon: '🇦🇪',
  },
  // Procedure-Specific Guides (High-intent)
  {
    slug: 'mexico-dental-guide',
    title: 'Mexico Dental Guide: Tijuana, Los Algodones, Cancun',
    description: 'Complete guide to dental work in Mexico. Implants from $750, All-on-4 from $7,500. Compare destinations, find safe clinics.',
    category: 'Procedure Guide',
    readTime: '16 min',
    icon: '🦷',
  },
  {
    slug: 'plastic-surgery-korea-guide',
    title: 'Plastic Surgery in Korea: Gangnam Clinics Guide',
    description: 'Why Seoul is the world capital of cosmetic surgery. Rhinoplasty, double eyelid, V-line. Top clinics, costs, recovery.',
    category: 'Procedure Guide',
    readTime: '18 min',
    icon: '✨',
  },
  {
    slug: 'hair-transplant-turkey-guide',
    title: 'Hair Transplant in Turkey: Complete Guide',
    description: 'FUE vs DHI techniques, choosing a safe clinic, costs, and what to expect from Istanbul.',
    category: 'Procedure Guide',
    readTime: '15 min',
    icon: '💇',
  },
  {
    slug: 'gastric-sleeve-mexico-safety',
    title: 'Gastric Sleeve in Mexico: Safety Guide',
    description: 'Is bariatric surgery in Tijuana safe? Safety data, choosing a surgeon, and what to expect.',
    category: 'Procedure Guide',
    readTime: '12 min',
    icon: '⚖️',
  },
  {
    slug: 'glp1-weight-loss-complete-guide',
    title: 'GLP-1 for Weight Loss: Complete Guide',
    description: 'Everything about semaglutide and tirzepatide—how they work, results, side effects, and costs.',
    category: 'Telehealth',
    readTime: '12 min',
    icon: '💊',
  },
  // Comparison Guides
  {
    slug: 'mexico-vs-costa-rica-dental',
    title: 'Mexico vs Costa Rica for Dental Work',
    description: 'Which country is better for your dental work? Price comparison, quality, convenience, and recommendations.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '⚖️',
  },
  {
    slug: 'spain-vs-czech-ivf',
    title: 'Spain vs Czech Republic for IVF',
    description: 'Europe\'s top IVF destinations compared. Success rates, donor availability, costs, and which to choose.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⚖️',
  },
  {
    slug: 'turkey-vs-mexico-medical-tourism',
    title: 'Turkey vs Mexico: Medical Tourism Compared',
    description: 'The world\'s two biggest medical tourism destinations. Which is better for your procedure?',
    category: 'Comparison',
    readTime: '10 min',
    icon: '⚖️',
  },
  // Destination Trip Planners
  {
    slug: 'mexico-medical-tourism-planner',
    title: 'Mexico Medical Tourism: Trip Planner',
    description: 'Complete planning guide: border crossing, Tijuana vs Los Algodones, packing list, and trip timeline.',
    category: 'Trip Planning',
    readTime: '15 min',
    icon: '🇲🇽',
  },
  {
    slug: 'turkey-hair-transplant-trip-planner',
    title: 'Turkey Hair Transplant: Trip Planner',
    description: 'Your 7-day Istanbul itinerary: flights, hotels, what to pack, and recovery timeline.',
    category: 'Trip Planning',
    readTime: '14 min',
    icon: '🇹🇷',
  },
  {
    slug: 'thailand-medical-tourism-guide',
    title: 'Thailand Medical Tourism: Complete Guide',
    description: 'Bangkok\'s JCI-accredited hospitals, costs, trip planning. Bumrungrad, Samitivej, BNH reviews.',
    category: 'Trip Planning',
    readTime: '18 min',
    icon: '🇹🇭',
  },
  {
    slug: 'costa-rica-dental-guide',
    title: 'Costa Rica Dental Tourism Guide',
    description: 'US-trained dentists, premium implants, 50-70% savings. San Jose clinics and trip planning.',
    category: 'Trip Planning',
    readTime: '14 min',
    icon: '🇨🇷',
  },
  {
    slug: 'spain-fertility-ivf-guide',
    title: 'Spain IVF & Fertility Tourism Guide',
    description: 'Europe\'s #1 fertility destination. Donor egg success rates 55-60%, clinic comparisons, costs.',
    category: 'Trip Planning',
    readTime: '16 min',
    icon: '🇪🇸',
  },
  // Practical & Reference
  {
    slug: 'at-home-lab-testing-guide',
    title: 'At-Home Lab Testing Guide',
    description: 'How at-home blood tests work, accuracy vs doctor labs, and what biomarkers to track.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'dexa-scan-guide',
    title: 'DEXA Scan: Complete Guide',
    description: 'What DEXA measures, why it beats BMI, costs, and how to use it to track real fitness progress.',
    category: 'Local Services',
    readTime: '8 min',
    icon: '📊',
  },
  {
    slug: 'medical-travel-insurance-guide',
    title: 'Medical Travel Insurance Guide',
    description: 'What standard travel insurance covers vs doesn\'t, medical tourism-specific insurance, and what you actually need.',
    category: 'Trip Planning',
    readTime: '10 min',
    icon: '🛡️',
  },
  {
    slug: 'us-healthcare-by-region',
    title: 'US Healthcare by Region',
    description: 'Comprehensive guide to top hospitals and health systems across California, Texas, Florida, New York, Arizona, and Colorado.',
    category: 'Research',
    readTime: '20 min',
    icon: '🏥',
  },
];

export default function GuidesIndex() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health & Wellness Guides
          </h1>
          <p className="text-xl text-gray-600">
            Evidence-based guides to help you make informed decisions about cash-pay health services.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{guide.icon}</span>
                <span className="text-xs text-gray-500">{guide.readTime}</span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-medium text-blue-600">{guide.category}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                {guide.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3">
                {guide.description}
              </p>

              <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Read guide →
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-3">More Guides Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            We&apos;re researching and writing guides on:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              US Longevity Clinics by Region
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              Peptide Therapy Guide
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              India Cardiac Surgery
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              TRT & Hormone Optimization
            </span>
          </div>
        </div>
      </section>

      {/* Why Trust Our Guides */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Trust Our Guides?
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl mb-3">
                📚
              </div>
              <h3 className="font-semibold">Research-Backed</h3>
              <p className="mt-2 text-sm text-gray-600">
                Every guide cites peer-reviewed studies, clinical trials, and verified medical sources.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl mb-3">
                💬
              </div>
              <h3 className="font-semibold">Plain English</h3>
              <p className="mt-2 text-sm text-gray-600">
                No medical jargon walls. We explain complex topics in language anyone can understand.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl mb-3">
                ⚖️
              </div>
              <h3 className="font-semibold">Honest Tradeoffs</h3>
              <p className="mt-2 text-sm text-gray-600">
                We present pros AND cons. No hype, no hidden agendas—just honest information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
