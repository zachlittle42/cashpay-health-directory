import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Medical Tourism: Save 50-80% on Procedures Abroad | VitalityScout',
  description: 'Complete guide to medical tourism. Compare dental work in Mexico, hair transplants in Turkey, bariatric surgery, and more. Save 50-80% with quality care abroad.',
};

export default function MedicalTourismHub() {
  return (
    <main className="min-h-screen bg-white">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Destinations
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="text-sm text-gray-600">Hair Transplant</div>
            </div>
          </Link>

          <Link href="/destinations/south-korea" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-5 hover:border-purple-400 hover:shadow-md transition-all">
            <span className="text-3xl">🇰🇷</span>
            <div>
              <div className="font-bold text-gray-900">South Korea</div>
              <div className="text-sm text-gray-600">Plastic Surgery</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Planning Resources */}
      <section className="bg-purple-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Planning Your Trip
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/guides/mexico-medical-tourism-planner" className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🇲🇽</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Mexico Trip Planner</div>
                  <div className="text-sm text-gray-600">Border crossing, packing list, timeline</div>
                </div>
              </div>
            </Link>

            <Link href="/guides/turkey-hair-transplant-trip-planner" className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🇹🇷</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Turkey Trip Planner</div>
                  <div className="text-sm text-gray-600">7-day Istanbul itinerary</div>
                </div>
              </div>
            </Link>

            <Link href="/guides/medical-travel-insurance-guide" className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">Travel Insurance Guide</div>
                  <div className="text-sm text-gray-600">What you actually need</div>
                </div>
              </div>
            </Link>
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

      {/* Related Guides */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Essential Reading Before You Book
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/guides/hair-transplant-turkey-guide" className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl">💇</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1 text-lg">Hair Transplant in Turkey</div>
                  <div className="text-sm text-gray-600">Safety checklist, FUE vs DHI, choosing clinics</div>
                </div>
              </div>
            </Link>

            <Link href="/guides/gastric-sleeve-mexico-safety" className="bg-white rounded-lg border border-purple-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl">⚖️</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1 text-lg">Gastric Sleeve in Mexico</div>
                  <div className="text-sm text-gray-600">Safety data, complication rates, surgeon selection</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
