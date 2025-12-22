import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thailand Medical Tourism: Complete Guide to Bangkok Hospitals (2024)',
  description: 'Plan your medical trip to Thailand. Bumrungrad, Samitivej, BNH hospital reviews. Costs, what to expect, and step-by-step trip planning for Americans.',
};

export default function ThailandMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Thailand Medical Tourism: Complete Guide to Bangkok Hospitals',
    description: 'Comprehensive guide to medical tourism in Thailand including top hospitals, costs, travel planning, and what to expect.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/thailand-medical-tourism-guide',
    keywords: ['Thailand medical tourism', 'Bumrungrad hospital', 'Bangkok hospitals', 'Thailand cosmetic surgery', 'medical travel Thailand']
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline">
            ← Back to all guides
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇹🇭</span>
            <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
              Destination Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thailand Medical Tourism: Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about medical travel to Bangkok. JCI-accredited hospitals, what to expect, and how to plan your trip.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 18 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-teal-900 mt-0 mb-2">Thailand At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>3M+ medical tourists annually</strong> - Southeast Asia&apos;s leader</li>
            <li>✓ <strong>61 JCI-accredited facilities</strong> - highest in the region</li>
            <li>✓ <strong>50-80% savings</strong> vs. US prices</li>
            <li>✓ <strong>Flight time:</strong> 17-20 hours from US (with connections)</li>
            <li>✓ <strong>No visa needed</strong> for stays up to 30 days</li>
            <li>✓ <strong>Best for:</strong> Cosmetic surgery, cardiac, orthopedic, health checkups</li>
          </ul>
        </div>

        <h2>Why Thailand for Medical Tourism?</h2>
        <p>
          Thailand was the first Asian country to embrace medical tourism at scale, and it shows. Bumrungrad International Hospital received JCI accreditation in 2002 - the first in Asia. Today, Thailand has 61 JCI-accredited organizations, more than any other country in Southeast Asia.
        </p>
        <p>
          What sets Thailand apart isn&apos;t just the credentials - it&apos;s the experience. Thai hospitals are designed to feel like five-star hotels. You&apos;ll find marble lobbies, private suites, gourmet food, and service that reflects Thailand&apos;s famous hospitality culture. Many doctors trained at Harvard, Mayo Clinic, Johns Hopkins, and other top Western institutions.
        </p>

        <div className="bg-white border-2 border-teal-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-teal-900 mt-0 mb-4">Cost Comparison: US vs. Thailand</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-left py-2">US Price</th>
                  <th className="text-left py-2 text-green-700">Thailand Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Heart Bypass (CABG)</td>
                  <td className="py-2 text-gray-500">$70,000-150,000</td>
                  <td className="py-2 text-green-600 font-semibold">$12,000-25,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Knee Replacement</td>
                  <td className="py-2 text-gray-500">$35,000-60,000</td>
                  <td className="py-2 text-green-600 font-semibold">$10,000-15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Breast Augmentation</td>
                  <td className="py-2 text-gray-500">$8,000-15,000</td>
                  <td className="py-2 text-green-600 font-semibold">$3,500-5,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Rhinoplasty</td>
                  <td className="py-2 text-gray-500">$8,000-15,000</td>
                  <td className="py-2 text-green-600 font-semibold">$2,500-5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Executive Health Checkup</td>
                  <td className="py-2 text-gray-500">$2,000-5,000</td>
                  <td className="py-2 text-green-600 font-semibold">$500-1,500</td>
                </tr>
                <tr>
                  <td className="py-2">Dental Implant</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                  <td className="py-2 text-green-600 font-semibold">$1,000-1,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Prices are estimates. Actual costs vary by hospital, surgeon, and case complexity.
          </p>
        </div>

        <h2>Top JCI-Accredited Bangkok Hospitals</h2>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Bumrungrad International Hospital</h3>
              <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">JCI Accredited</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Southeast Asia&apos;s largest private hospital. Treats 1.1 million patients annually, 520,000+ from 190+ countries. First Asian hospital with JCI accreditation (2002).
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Best for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac surgery</li>
                  <li>• Orthopedics</li>
                  <li>• Cancer treatment</li>
                  <li>• Executive health checkups</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• 1,400+ physicians</li>
                  <li>• 580 beds</li>
                  <li>• International patient center</li>
                  <li>• Interpreters for 26 languages</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.bumrungrad.com" target="_blank" rel="noopener">bumrungrad.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Samitivej Sukhumvit Hospital</h3>
              <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">JCI Accredited</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              One of Thailand&apos;s most respected private hospitals. Located in the heart of Bangkok&apos;s Thonglor district. Strong reputation for personalized care.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Best for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Pediatrics</li>
                  <li>• Women&apos;s health</li>
                  <li>• Orthopedics</li>
                  <li>• Cardiology</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Japanese patient expertise</li>
                  <li>• Excellent nursing care</li>
                  <li>• Central BTS location</li>
                  <li>• Part of BDMS hospital group</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.samitivejhospitals.com" target="_blank" rel="noopener">samitivejhospitals.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">BNH Hospital</h3>
              <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">JCI Accredited</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              One of Thailand&apos;s oldest private hospitals (founded 1898). Originally served Bangkok&apos;s expatriate community. Boutique feel with personalized service.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Best for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Women&apos;s health</li>
                  <li>• Fertility (IVF)</li>
                  <li>• Orthopedics</li>
                  <li>• Executive checkups</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• 126 years of history</li>
                  <li>• Boutique hospital feel</li>
                  <li>• Strong expat community ties</li>
                  <li>• Silom area location</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.bnhhospital.com" target="_blank" rel="noopener">bnhhospital.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Yanhee Hospital</h3>
              <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">JCI Accredited</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Specializes in cosmetic and plastic surgery. Known for comprehensive packages and competitive pricing. 400+ beds with 150+ specialist doctors.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Best for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cosmetic surgery</li>
                  <li>• Gender confirmation</li>
                  <li>• Hair transplant</li>
                  <li>• Weight loss</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• All-inclusive packages</li>
                  <li>• Competitive pricing</li>
                  <li>• On-site recovery rooms</li>
                  <li>• Beauty brand products</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.yanhee.net" target="_blank" rel="noopener">yanhee.net</a>
            </p>
          </div>
        </div>

        <h2>Planning Your Trip: Step by Step</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">6-8 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Research hospitals and surgeons for your procedure</li>
              <li>• Request consultations (many hospitals offer free video consultations)</li>
              <li>• Get medical records, test results, and imaging ready to share</li>
              <li>• Compare pricing and package inclusions</li>
              <li>• Verify JCI accreditation on <a href="https://www.jointcommissioninternational.org" target="_blank" rel="noopener" className="text-blue-600">JCI&apos;s website</a></li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">4 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Confirm your treatment date and surgeon</li>
              <li>• Book flights (allow flexibility for recovery time)</li>
              <li>• Book hotel - ask hospital for partner hotel recommendations</li>
              <li>• Purchase travel medical insurance with coverage for complications</li>
              <li>• Check passport validity (6+ months required)</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">1 Week Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Final consultation with your home doctor</li>
              <li>• Follow any pre-op instructions (diet, medications, etc.)</li>
              <li>• Arrange airport pickup with hospital (often complimentary)</li>
              <li>• Download translation apps and hospital apps</li>
              <li>• Pack loose, comfortable clothing for recovery</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Arrival Day</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Hospital coordinator meets you at airport (if arranged)</li>
              <li>• Check into hotel or hospital accommodation</li>
              <li>• Pre-operative consultation and testing</li>
              <li>• Meet your surgeon and anesthesiologist</li>
              <li>• Sign consent forms and confirm costs</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">After Surgery</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Hospital stay varies by procedure (1 night to 1 week)</li>
              <li>• Transfer to hotel or recovery facility</li>
              <li>• Follow-up appointments as scheduled</li>
              <li>• Receive detailed aftercare instructions</li>
              <li>• Get surgeon&apos;s contact for questions after returning home</li>
            </ul>
          </div>
        </div>

        <h2>Practical Information</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Visa & Entry</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Visa-exempt:</strong> US citizens can stay up to 30 days without a visa</li>
              <li><strong>Medical visa:</strong> Available for longer stays - apply at Thai embassy</li>
              <li><strong>Passport:</strong> Must be valid for 6+ months beyond entry date</li>
              <li><strong>Return ticket:</strong> May be requested at immigration</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money & Payments</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Thai Baht (THB). ~35 THB = $1 USD</li>
              <li><strong>Payment:</strong> Credit cards accepted at hospitals. Wire transfer for deposits.</li>
              <li><strong>ATMs:</strong> Widely available but charge ~$6 foreign withdrawal fee</li>
              <li><strong>Tipping:</strong> Not expected but appreciated for exceptional service</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>BTS/MRT:</strong> Bangkok&apos;s modern metro system. Fast and air-conditioned.</li>
              <li><strong>Grab:</strong> Southeast Asian Uber. Reliable and affordable.</li>
              <li><strong>Taxis:</strong> Metered taxis cheap but traffic can be brutal.</li>
              <li><strong>Hospital transfers:</strong> Most include airport pickup in packages.</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Hospital:</strong> English excellent at international hospitals</li>
              <li><strong>Outside:</strong> Basic English in tourist areas, limited elsewhere</li>
              <li><strong>Interpreters:</strong> Available at major hospitals (26+ languages at Bumrungrad)</li>
              <li><strong>Apps:</strong> Google Translate works well for Thai</li>
            </ul>
          </div>
        </div>

        <h2>Where to Stay</h2>
        <p>
          Location matters in Bangkok - traffic is notorious. Stay near your hospital or along the BTS Skytrain line for easy access.
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Near Bumrungrad</h4>
            <p className="text-sm text-gray-600 mb-2">Sukhumvit Soi 3 area. Many international restaurants and easy BTS access.</p>
            <ul className="text-sm text-gray-700 mb-0">
              <li>• Grand Hyatt Erawan (luxury)</li>
              <li>• JW Marriott (luxury)</li>
              <li>• Jasmine City Hotel (mid-range, hospital partner)</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Silom/Sathorn Area</h4>
            <p className="text-sm text-gray-600 mb-2">Near BNH Hospital. Business district with excellent hotels.</p>
            <ul className="text-sm text-gray-700 mb-0">
              <li>• Banyan Tree Bangkok (luxury)</li>
              <li>• The Sukhothai (luxury)</li>
              <li>• Eastin Grand Sathorn (mid-range)</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">Recovery Hotels & Serviced Apartments</h4>
          <p className="text-sm text-blue-800 mb-3">
            For longer recovery stays, serviced apartments offer better value than hotels. Many have kitchens for post-surgery dietary needs.
          </p>
          <ul className="text-sm text-blue-800 space-y-1 mb-0">
            <li>• <strong>Bumrungrad Suite</strong> - Hospital-connected, ideal for outpatient follow-ups</li>
            <li>• <strong>Oakwood Studios</strong> - Serviced apartments with kitchens</li>
            <li>• <strong>Somerset Sukhumvit</strong> - Long-stay specialists</li>
          </ul>
        </div>

        <h2>Climate & Best Time to Visit</h2>
        <p>
          Bangkok is hot and humid year-round. For medical travel, the most comfortable months are November through February (cool season, 25-30°C/77-86°F). Avoid March-May (hottest, 35°C+) if possible.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <h4 className="text-yellow-900 mt-0 mb-3">Monsoon Season Warning</h4>
          <p className="text-sm text-yellow-800 mb-0">
            June through October is monsoon season. Heavy afternoon rains can cause flooding and traffic chaos. Flights can be delayed. Plan extra buffer time and avoid ground-floor accommodations.
          </p>
        </div>

        <h2>What to Pack</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mt-0 mb-3">Essentials</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li className="flex gap-2"><span>□</span> Passport (6+ months validity)</li>
                <li className="flex gap-2"><span>□</span> Medical records and test results</li>
                <li className="flex gap-2"><span>□</span> Insurance documents</li>
                <li className="flex gap-2"><span>□</span> Current medications (in original bottles)</li>
                <li className="flex gap-2"><span>□</span> Hospital confirmation/itinerary</li>
                <li className="flex gap-2"><span>□</span> Credit cards and some cash</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mt-0 mb-3">For Recovery</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li className="flex gap-2"><span>□</span> Loose, button-front clothing</li>
                <li className="flex gap-2"><span>□</span> Slip-on shoes</li>
                <li className="flex gap-2"><span>□</span> Small pillow for flights</li>
                <li className="flex gap-2"><span>□</span> Entertainment (tablet, books)</li>
                <li className="flex gap-2"><span>□</span> Compression garments (if required)</li>
                <li className="flex gap-2"><span>□</span> Gentle skincare products</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;How long should I plan to stay?&quot;</h4>
            <p className="text-sm text-gray-700">
              It depends on your procedure. For most cosmetic surgeries, plan 10-14 days: 1-2 days pre-op, 1-3 days in hospital, and 1 week recovery before flying. Cardiac or orthopedic surgeries may require 2-3 weeks. Always confirm with your surgeon before booking return flights.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Is it safe to have surgery in Thailand?&quot;</h4>
            <p className="text-sm text-gray-700">
              At JCI-accredited hospitals, yes. These facilities meet the same standards as top US hospitals. The key is choosing the right hospital and surgeon - avoid unaccredited clinics promising unusually low prices. Major Thai hospitals have lower infection rates than many US facilities.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;What if something goes wrong after I return home?&quot;</h4>
            <p className="text-sm text-gray-700">
              Reputable hospitals provide detailed aftercare instructions and direct contact with your surgeon. Many offer virtual follow-ups. For complications requiring treatment, you&apos;d need to see a local doctor or return to Thailand. This is why travel medical insurance with complications coverage is essential.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Should I bring a companion?&quot;</h4>
            <p className="text-sm text-gray-700">
              Highly recommended for any surgery. A companion provides emotional support, helps with logistics, and can advocate for you if needed. Most package deals include accommodation for one companion. At minimum, have someone at home who can fly out if needed.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Thailand Options?</h3>
          <p className="text-gray-600 mb-6">
            Browse our directory of Thai providers and read detailed facility profiles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/thailand" className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-medium text-white hover:bg-teal-700">
              Thailand Destination Guide
            </Link>
            <Link href="/guides/medical-travel-insurance-guide" className="inline-block rounded-lg border-2 border-teal-600 px-6 py-3 font-medium text-teal-600 hover:bg-teal-50">
              Medical Travel Insurance
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for informational purposes only and does not constitute medical advice. Always consult with qualified healthcare providers before making decisions about medical treatment. Verify all information directly with hospitals and providers.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.jointcommissioninternational.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International</a></li>
            <li>• <a href="https://www.bumrungrad.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Bumrungrad International Hospital</a></li>
            <li>• <a href="https://www.konkai.health" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Konkai Health - Thailand Medical Tourism</a></li>
            <li>• <a href="https://wmedtour.com/medical-tourism-thailand-treatments-hospitals-costs-2025/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">World Medical Tourism - Thailand Guide 2025</a></li>
          </ul>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </main>
  );
}
