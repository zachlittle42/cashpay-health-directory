import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Health Guides: Lab Testing, GLP-1, Hair Transplants & More | VitalityScout',
  description: 'Expert guides on cash-pay health services. Learn about GLP-1 weight loss, at-home lab testing, medical tourism, and more.',
};

const guides = [
  // NEW: High-Priority SEO Content (Tier 1)
  {
    slug: 'compounded-semaglutide',
    title: 'Compounded Semaglutide: What You Need to Know in 2025',
    description: 'FDA status, legal changes, safety concerns, costs vs brand-name, and what alternatives exist now that the shortage has ended.',
    category: 'Telehealth',
    readTime: '10 min',
    icon: '⚠️',
  },
  {
    slug: 'trt-testosterone-therapy',
    title: 'TRT Guide: Complete Testosterone Replacement Therapy Explained',
    description: 'Symptoms of low T, treatment options, costs ($150-250/mo), benefits, risks, and how to get started with online TRT clinics.',
    category: 'Telehealth',
    readTime: '15 min',
    icon: '💪',
  },
  {
    slug: 'hims-vs-ro-vs-calibrate',
    title: 'Hims vs Ro vs Calibrate: GLP-1 Weight Loss Comparison',
    description: 'Side-by-side comparison of the three most popular telehealth weight loss programs—pricing, medications, coaching, and which is best for you.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '⚖️',
  },
  {
    slug: 'all-on-4-dental-implants-mexico',
    title: 'All-on-4 Dental Implants in Mexico: Complete Guide',
    description: 'Save 60-70% on full-arch implants. Costs ($8K-12K vs $20K+ in US), top clinics in Tijuana & Cancun, and trip planning.',
    category: 'Dental Tourism',
    readTime: '12 min',
    icon: '🦷',
  },
  {
    slug: 'hair-transplant-grafts-guide',
    title: 'How Many Hair Grafts Do I Need?',
    description: 'Norwood scale explained, graft estimates by hair loss stage, density calculations, and cost per graft by country.',
    category: 'Hair Transplant',
    readTime: '10 min',
    icon: '📊',
  },
  {
    slug: 'best-online-trt-clinics',
    title: 'Best Online TRT Clinics Compared (2025)',
    description: 'Fountain TRT vs Marek Health vs TRT Nation: pricing, services, and which clinic is best for your needs.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🏆',
  },
  // NEW: Tier 2 SEO Content
  {
    slug: 'fue-vs-dhi',
    title: 'FUE vs DHI Hair Transplant: Complete Comparison',
    description: 'Detailed comparison of FUE and DHI hair transplant techniques—costs, recovery, results, and which method is best for your hair loss pattern.',
    category: 'Comparison',
    readTime: '12 min',
    icon: '💇',
  },
  {
    slug: 'hair-transplant-recovery-timeline',
    title: 'Hair Transplant Recovery Timeline: Day-by-Day Guide',
    description: 'Complete recovery timeline from day 1 to month 18—what to expect, healing stages, when to return to work, exercise, and see final results.',
    category: 'Recovery Guide',
    readTime: '15 min',
    icon: '📅',
  },
  {
    slug: 'bbl-surgery-mexico',
    title: 'BBL Surgery in Mexico: Safety & Cost Guide',
    description: 'Brazilian Butt Lift in Mexico: costs ($3,500-7,000), safety data, mortality rates, choosing surgeons, and critical safety information.',
    category: 'Procedure Guide',
    readTime: '15 min',
    icon: '🍑',
  },
  {
    slug: 'bodyspec-vs-dexafit',
    title: 'BodySpec vs DexaFit: DEXA Scan Comparison',
    description: 'Compare the two leading body composition scanning services—pricing ($40-60 vs $119-179), locations, reports, and which is best for you.',
    category: 'Comparison',
    readTime: '8 min',
    icon: '📊',
  },
  {
    slug: 'nad-therapy-guide',
    title: 'NAD+ Therapy: IV Infusions & Evidence Guide',
    description: 'Complete NAD+ therapy guide covering IV infusions, oral supplements, costs ($250-2,000), and what the science actually says.',
    category: 'Longevity',
    readTime: '15 min',
    icon: '🧬',
  },
  {
    slug: 'los-algodones-dental-guide',
    title: 'Los Algodones Dental Guide: Molar City',
    description: '350+ dental clinics, 50-70% savings. Complete guide to "Molar City"—choosing a dentist, border crossing, and trip planning.',
    category: 'Destination Guide',
    readTime: '18 min',
    icon: '🦷',
  },
  {
    slug: 'everlywell-vs-letsgetchecked',
    title: 'Everlywell vs LetsGetChecked Comparison',
    description: 'At-home lab test comparison—pricing, test selection, accuracy, turnaround time, and which service is best for different needs.',
    category: 'Comparison',
    readTime: '10 min',
    icon: '🧪',
  },
  {
    slug: 'peptide-therapy-guide',
    title: 'Peptide Therapy: BPC-157, TB-500 & More',
    description: 'Complete peptide guide covering BPC-157, TB-500, growth hormone secretagogues. FDA regulations, costs, and what science says.',
    category: 'Longevity',
    readTime: '18 min',
    icon: '💉',
  },
  {
    slug: 'mommy-makeover-mexico',
    title: 'Mommy Makeover in Mexico: Complete Guide',
    description: 'Mommy makeover surgery in Mexico: costs ($5,500-14,000 vs $20K+ in US), procedures, choosing a surgeon, and recovery planning.',
    category: 'Procedure Guide',
    readTime: '16 min',
    icon: '👶',
  },
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
    slug: 'us-vs-mexico-stem-cells',
    title: 'US vs Mexico Stem Cell Therapy',
    description: 'Cost, legality, and safety comparison. FDA regulations vs COFEPRIS, and which approach is right for you.',
    category: 'Comparison',
    readTime: '15 min',
    icon: '🆚',
  },
  {
    slug: 'panama-vs-cayman-stem-cells',
    title: 'Panama vs Cayman Islands Stem Cells',
    description: 'Premium destination comparison: Golden Cells vs expanded autologous, single trip vs two-trip process.',
    category: 'Comparison',
    readTime: '14 min',
    icon: '🔄',
  },
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
              India Cardiac Surgery
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              Rhinoplasty in Korea
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              HRT for Women Guide
            </span>
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-gray-700">
              Germany Cancer Treatment
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

      {/* Centurion Coach Promo */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-gradient-to-r from-cyan-500 to-sky-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Free iOS App
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Track Your Health Journey with Centurion Coach
              </h3>
              <p className="text-cyan-100 mb-6">
                Done researching? Put your plan into action. Track nutrition, supplements, labs, and progress all in one place with AI-powered coaching.
              </p>
              <Link
                href="/centurioncoach"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="text-6xl md:text-8xl">🏛️</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
