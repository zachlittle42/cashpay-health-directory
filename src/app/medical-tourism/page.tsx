import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Medical Tourism: Save 50-80% on Procedures Abroad | VitalityScout',
  description: 'Complete guide to medical tourism. Compare dental work in Mexico, hair transplants in Turkey, bariatric surgery, and more. Save 50-80% with quality care abroad.',
};

export default function MedicalTourismHub() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Medical Tourism: Save 50-80% on Procedures Abroad',
    description: 'Compare medical tourism options for dental, hair transplants, bariatric surgery, and more. JCI-accredited facilities, safety guides, and trip planning.',
    url: 'https://vitalityscout.com/medical-tourism',
    about: {
      '@type': 'MedicalBusiness',
      name: 'Medical Tourism Directory',
      geo: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressCountry: ['Mexico', 'Turkey', 'South Korea', 'Thailand', 'India', 'Costa Rica', 'Spain', 'Czech Republic']
        }
      }
    },
    mainEntity: [
      { '@type': 'MedicalProcedure', name: 'Dental Implants' },
      { '@type': 'MedicalProcedure', name: 'Hair Transplant' },
      { '@type': 'MedicalProcedure', name: 'Bariatric Surgery' },
      { '@type': 'MedicalProcedure', name: 'Plastic Surgery' },
      { '@type': 'MedicalProcedure', name: 'Fertility Treatment' }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-5xl mb-4">✈️</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Tourism: Quality Care Abroad
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Save 50-80% on major procedures by traveling to world-class facilities in Mexico, Turkey, South Korea, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">Save 50-80%</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">JCI-Accredited Facilities</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">All-Inclusive Packages</span>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1.4M+</div>
              <div className="text-gray-600">Americans travel abroad for medical care annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25-90%</div>
              <div className="text-gray-600">Typical savings vs US prices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$83B</div>
              <div className="text-gray-600">Global medical tourism market (2024)</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Medical Tourism */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>What Is Medical Tourism?</h2>
          <p>
            Medical tourism is traveling to another country to receive medical care—usually to save money, access procedures not available domestically, or skip long wait times. For Americans, popular destinations include Mexico (dental, bariatric), Turkey (hair transplants), South Korea (plastic surgery), and Europe (fertility treatments).
          </p>
          <p>
            The savings are real: a gastric sleeve costs <strong>$4,500 in Mexico vs $20,000 in the US</strong>. A hair transplant runs <strong>$2,500 in Turkey vs $15,000 in the US</strong>. Even accounting for flights and hotels, you're still saving 50-70%.
          </p>

          <h3>Is It Safe?</h3>
          <p>
            <strong>When done right, yes.</strong> The key is choosing JCI-accredited facilities (international quality standard) with experienced surgeons who regularly treat international patients. Top medical tourism centers in destinations like Turkey and Mexico often have <strong>better outcomes than average US facilities</strong> because of their volume and specialization.
          </p>
          <p>
            But quality varies dramatically. This is why research and vetting are essential. We only list providers with proper accreditations, verified reviews, and established track records.
          </p>
        </div>
      </section>

      {/* Browse by Procedure */}
      <section className="bg-purple-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Procedure
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/dental"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">🦷</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Dental
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Implants, crowns, veneers
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 50-70%</div>
            </Link>

            <Link
              href="/hair_transplant"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">💇</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Hair Transplant
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                FUE, DHI procedures
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 50-75%</div>
            </Link>

            <Link
              href="/bariatric"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Bariatric
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Gastric sleeve, bypass
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 60-80%</div>
            </Link>

            <Link
              href="/plastic_surgery"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Plastic Surgery
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Cosmetic procedures
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 40-60%</div>
            </Link>

            <Link
              href="/fertility"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">🍼</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Fertility/IVF
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                IVF, egg freezing
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 40-70%</div>
            </Link>

            <Link
              href="/orthopedic"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">🦴</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Orthopedic
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Knee, hip replacement
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 50-80%</div>
            </Link>

            <Link
              href="/cardiac"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Cardiac
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Heart surgery, bypass
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 70-90%</div>
            </Link>

            <Link
              href="/vision"
              className="group bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-2">
                Vision Surgery
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                LASIK, cataract surgery
              </p>
              <div className="text-xs text-green-600 font-semibold">Save 50-70%</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Popular Destinations
        </h2>
        <p className="text-gray-600 mb-6">
          Each destination has its specialties. Click through for detailed guides, costs, and what to expect.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/destinations/mexico" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇲🇽</span>
            <div>
              <div className="font-bold text-gray-900">Mexico</div>
              <div className="text-sm text-gray-600">Dental, Bariatric</div>
            </div>
          </Link>

          <Link href="/destinations/turkey" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇹🇷</span>
            <div>
              <div className="font-bold text-gray-900">Turkey</div>
              <div className="text-sm text-gray-600">Hair Transplant, Dental</div>
            </div>
          </Link>

          <Link href="/destinations/south-korea" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇰🇷</span>
            <div>
              <div className="font-bold text-gray-900">South Korea</div>
              <div className="text-sm text-gray-600">Plastic Surgery</div>
            </div>
          </Link>

          <Link href="/destinations/thailand" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇹🇭</span>
            <div>
              <div className="font-bold text-gray-900">Thailand</div>
              <div className="text-sm text-gray-600">Hospitals, Dental, Cosmetic</div>
            </div>
          </Link>

          <Link href="/destinations/india" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇮🇳</span>
            <div>
              <div className="font-bold text-gray-900">India</div>
              <div className="text-sm text-gray-600">Cardiac, Orthopedic</div>
            </div>
          </Link>

          <Link href="/destinations/costa-rica" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇨🇷</span>
            <div>
              <div className="font-bold text-gray-900">Costa Rica</div>
              <div className="text-sm text-gray-600">Dental, Cosmetic</div>
            </div>
          </Link>

          <Link href="/destinations/spain" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇪🇸</span>
            <div>
              <div className="font-bold text-gray-900">Spain</div>
              <div className="text-sm text-gray-600">Fertility, IVF</div>
            </div>
          </Link>

          <Link href="/destinations/czech-republic" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇨🇿</span>
            <div>
              <div className="font-bold text-gray-900">Czech Republic</div>
              <div className="text-sm text-gray-600">IVF, Dental</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Travel Guides Hub */}
      <section className="bg-purple-50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Medical Tourism Guides
          </h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Everything you need to plan your trip, choose the right procedure, and travel safely.
          </p>

          {/* Trip Planners */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🗺️</span> Trip Planners
              <span className="text-sm font-normal text-gray-500 ml-2">— Logistics, flights, packing, what to expect</span>
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/guides/mexico-medical-tourism-planner" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇲🇽</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Mexico Trip Planner</div>
                    <div className="text-sm text-gray-600">Border crossing, Tijuana vs Los Algodones, packing list</div>
                  </div>
                </div>
              </Link>

              <Link href="/guides/turkey-hair-transplant-trip-planner" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇹🇷</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Turkey Trip Planner</div>
                    <div className="text-sm text-gray-600">7-day Istanbul itinerary, hotels, recovery</div>
                  </div>
                </div>
              </Link>

              <Link href="/guides/thailand-medical-tourism-guide" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇹🇭</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Thailand Complete Guide</div>
                    <div className="text-sm text-gray-600">Bangkok hospitals, Bumrungrad, trip planning</div>
                  </div>
                </div>
              </Link>

              <Link href="/guides/costa-rica-dental-guide" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇨🇷</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Costa Rica Dental Guide</div>
                    <div className="text-sm text-gray-600">US-trained dentists, San Jose clinics, costs</div>
                  </div>
                </div>
              </Link>

              <Link href="/guides/spain-fertility-ivf-guide" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🇪🇸</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Spain IVF Guide</div>
                    <div className="text-sm text-gray-600">Fertility clinics, donor eggs, success rates</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Procedure Guides */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔬</span> Procedure Guides
              <span className="text-sm font-normal text-gray-500 ml-2">— Safety, choosing providers, what to expect</span>
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/hair-transplant-turkey-guide" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💇</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Hair Transplant in Turkey</div>
                    <div className="text-sm text-gray-600">FUE vs DHI, safety checklist, choosing clinics, red flags</div>
                  </div>
                </div>
              </Link>

              <Link href="/guides/gastric-sleeve-mexico-safety" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Gastric Sleeve in Mexico</div>
                    <div className="text-sm text-gray-600">Safety data, complication rates, surgeon selection</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Practical Resources */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">📋</span> Practical Resources
              <span className="text-sm font-normal text-gray-500 ml-2">— Insurance, costs, general planning</span>
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/medical-travel-insurance-guide" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Medical Travel Insurance</div>
                    <div className="text-sm text-gray-600">What&apos;s covered, what&apos;s not, what you actually need</div>
                  </div>
                </div>
              </Link>

              <Link href="/faq/medical-tourism" className="bg-white rounded-lg border border-purple-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❓</span>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Medical Tourism FAQ</div>
                    <div className="text-sm text-gray-600">Common questions, red flags, how to vet clinics</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Is Medical Tourism Safe?</h2>
          <p>
            <strong>The honest answer: It depends entirely on where you go.</strong> Medical tourism can be just as safe—or safer—than domestic care when you choose accredited facilities with experienced surgeons. But it can also be risky if you cut corners to save a few hundred dollars.
          </p>

          <h3>What Makes It Safe:</h3>
          <ul>
            <li><strong>JCI Accreditation:</strong> International quality standard (~1,200 facilities worldwide have this)</li>
            <li><strong>High-volume specialists:</strong> Surgeons doing 300+ procedures/year vs 50/year in US</li>
            <li><strong>Modern facilities:</strong> Many medical tourism centers have newer equipment than US hospitals</li>
            <li><strong>Transparent pricing:</strong> All-inclusive packages mean no surprise bills</li>
          </ul>

          <h3>How to Stay Safe:</h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6 not-prose">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Verify JCI accreditation or equivalent (check official databases)</li>
              <li>✓ Confirm surgeon credentials and procedure volume</li>
              <li>✓ Read recent verified reviews (Trustpilot, Google, patient forums)</li>
              <li>✓ Get detailed complication protocol in writing</li>
              <li>✓ Purchase medical tourism insurance for major procedures</li>
              <li>✓ Ensure aftercare support after returning home</li>
            </ul>
          </div>

          <p>
            Our <Link href="/faq/medical-tourism" className="text-blue-600 hover:underline">Medical Tourism FAQ</Link> covers safety in detail, including red flags to avoid and how to verify clinic credentials.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
