import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All-on-4 Dental Implants in Mexico: Complete Guide (2025) | VitalityScout',
  description: 'Everything you need to know about All-on-4 dental implants in Mexico: costs ($8,000-12,000 vs $20,000+ in US), top clinics, what to expect, and how to plan your trip.',
  keywords: ['All-on-4 dental implants Mexico', 'full mouth dental implants Mexico', 'dental implants Tijuana', 'dental implants Cancun', 'dental tourism Mexico', 'All-on-4 cost'],
};

export default function AllOn4MexicoGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'All-on-4 Dental Implants in Mexico: Complete Guide',
    description: 'Comprehensive guide to getting All-on-4 dental implants in Mexico including costs, clinics, what to expect, and trip planning.',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vitalityscout.com/logo.png'
      }
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: 'https://vitalityscout.com/guides/all-on-4-dental-implants-mexico',
    articleSection: 'Dental Tourism Guides',
    keywords: ['All-on-4', 'dental implants', 'Mexico', 'dental tourism', 'Tijuana', 'Cancun']
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">All-on-4 Mexico</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Dental Tourism
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                🇲🇽 Mexico
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All-on-4 Dental Implants in Mexico: The Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              How to save 60-70% on full-arch dental implants while getting quality care. Costs, top clinics, what to expect, and how to plan your trip.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Cost Comparison Box */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Comparison: All-on-4 Per Arch</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">United States</div>
                <div className="text-3xl font-bold text-red-600">$20,000 - $30,000</div>
                <div className="text-xs text-gray-500 mt-1">Average major metro pricing</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Mexico</div>
                <div className="text-3xl font-bold text-green-600">$8,000 - $12,000</div>
                <div className="text-xs text-gray-500 mt-1">Top accredited clinics</div>
              </div>
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              <strong>Savings: 60-70%</strong> • Even with travel costs, you save $15,000+ per arch
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Quick Takeaway */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Takeaway</h3>
              <p className="text-gray-700 mb-0">
                All-on-4 in Mexico costs $8,000-12,000 per arch compared to $20,000-30,000 in the US—and top Mexican clinics use the same implant brands (Nobel Biocare, Straumann) with board-certified specialists.
                Plan for two trips: surgery + temporary teeth, then 4-6 months later for permanent prosthesis. Total stay: 5-7 days per visit.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is All-on-4?</h2>
            <p>
              All-on-4 is a dental implant technique that replaces an entire arch of teeth (upper or lower) using just four strategically placed implants.
              Instead of replacing each tooth individually—which would require 8-12 implants—the All-on-4 method uses two straight implants in the front and two angled implants in the back.
            </p>
            <p>
              This approach has several advantages:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fewer implants</strong> = lower cost and faster procedure</li>
              <li><strong>Angled back implants</strong> avoid the need for bone grafts in many patients</li>
              <li><strong>Immediate function</strong> — you leave with temporary teeth the same day</li>
              <li><strong>Proven track record</strong> — 20+ years of clinical data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Mexico for All-on-4?</h2>
            <p>
              The cost savings aren&apos;t because of inferior materials or undertrained dentists. Mexico&apos;s dental tourism industry has matured significantly over the past two decades.
              Here&apos;s why the prices are lower:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lower overhead</strong> — Real estate, staff salaries, malpractice insurance all cost less</li>
              <li><strong>No insurance bureaucracy</strong> — Cash-pay model eliminates administrative bloat</li>
              <li><strong>Competition</strong> — Border towns and tourist areas have dozens of dental clinics competing for international patients</li>
              <li><strong>Different healthcare economics</strong> — US dental pricing is inflated by insurance negotiations and hospital systems</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
              <h4 className="text-green-900 font-bold mb-2">Quality Reality Check</h4>
              <p className="text-sm text-green-800 mb-0">
                Top Mexican dental clinics use the same implant brands as US practices—Nobel Biocare, Straumann, Zimmer Biomet.
                Many dentists trained in the US or Europe. Clinics catering to Americans often exceed US standards in amenities and patient experience.
                The key is choosing the right clinic, not whether Mexico can provide quality care.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">All-on-4 Pricing in Mexico: What to Expect</h2>
            <p>
              Pricing varies by location, clinic, materials, and complexity. Here&apos;s a realistic breakdown:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Service</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Mexico Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">US Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">All-on-4 (per arch, acrylic)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$8,000 - $10,000</td>
                    <td className="px-4 py-3 text-gray-600">$20,000 - $25,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">All-on-4 (per arch, zirconia)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$12,000 - $15,000</td>
                    <td className="px-4 py-3 text-gray-600">$28,000 - $35,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">All-on-6 (per arch)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$10,000 - $13,000</td>
                    <td className="px-4 py-3 text-gray-600">$25,000 - $35,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Full mouth (both arches)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$18,000 - $25,000</td>
                    <td className="px-4 py-3 text-gray-600">$45,000 - $60,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Zygomatic All-on-4 (severe bone loss)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$22,000 - $34,000</td>
                    <td className="px-4 py-3 text-gray-600">$40,000 - $60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What&apos;s Typically Included</h3>
            <p>
              Most all-inclusive packages cover:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>3D CT scan and treatment planning</li>
              <li>Extractions (if needed)</li>
              <li>4-6 dental implants per arch</li>
              <li>Temporary acrylic prosthesis (placed same day)</li>
              <li>Final prosthesis (acrylic or zirconia)</li>
              <li>All follow-up appointments during your stay</li>
              <li>Local anesthesia (IV sedation usually extra)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Acrylic vs Zirconia: Which to Choose?</h3>

            <div className="grid md:grid-cols-2 gap-4 my-6 not-prose text-sm">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Acrylic/PMMA</h4>
                <div className="text-green-600 font-semibold mb-2">$8,000 - $10,000 per arch</div>
                <ul className="space-y-1 text-gray-600">
                  <li>✓ More affordable</li>
                  <li>✓ Easier to repair if damaged</li>
                  <li>✓ Lighter weight</li>
                  <li>✗ Less durable (5-10 year lifespan)</li>
                  <li>✗ Can stain over time</li>
                  <li>✗ Less natural appearance</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Zirconia</h4>
                <div className="text-green-600 font-semibold mb-2">$12,000 - $15,000 per arch</div>
                <ul className="space-y-1 text-gray-600">
                  <li>✓ Most natural appearance</li>
                  <li>✓ Extremely durable (15-20+ years)</li>
                  <li>✓ Stain resistant</li>
                  <li>✓ Biocompatible</li>
                  <li>✗ Higher cost</li>
                  <li>✗ More complex to repair</li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Our take:</strong> If budget allows, zirconia is worth the upgrade. The durability and aesthetics are significantly better.
              But acrylic is a perfectly functional choice if you&apos;re watching costs—especially as a starting point you can upgrade later.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Top Destinations for All-on-4 in Mexico</h2>

            <div className="space-y-6 my-8 not-prose">
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏜️</span>
                  <h4 className="font-bold text-gray-900">Tijuana</h4>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Most Popular</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Just across the border from San Diego, Tijuana is the most accessible destination for Americans. Walk across the border or use medical transport services.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-green-600 font-medium">Pros:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Easy border crossing from San Diego</li>
                      <li>• Highest concentration of dental clinics</li>
                      <li>• Many US-trained dentists</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-orange-600 font-medium">Considerations:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Border wait times can be long</li>
                      <li>• City isn&apos;t a vacation destination</li>
                      <li>• Quality varies widely—research carefully</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏖️</span>
                  <h4 className="font-bold text-gray-900">Cancun</h4>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Resort Experience</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Combine dental work with a beach vacation. Cancun&apos;s hotel zone offers excellent recovery environment with world-class resorts.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-green-600 font-medium">Pros:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Direct flights from most US cities</li>
                      <li>• Resort recovery environment</li>
                      <li>• Tourism infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-orange-600 font-medium">Considerations:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Slightly higher prices than border towns</li>
                      <li>• Fewer clinic options</li>
                      <li>• Requires flight vs. driving</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🦷</span>
                  <h4 className="font-bold text-gray-900">Los Algodones (&quot;Molar City&quot;)</h4>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Best Value</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  This tiny border town has 350+ dental clinics in just a few blocks. Walk across from Yuma, Arizona. Lowest prices in Mexico.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-green-600 font-medium">Pros:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Lowest prices anywhere</li>
                      <li>• Walking distance from US</li>
                      <li>• Massive competition = patient-friendly</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-orange-600 font-medium">Considerations:</span>
                    <ul className="mt-1 text-gray-600 space-y-0.5">
                      <li>• Small town—limited amenities</li>
                      <li>• Quality varies dramatically</li>
                      <li>• Mostly good for simpler procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The All-on-4 Process: What to Expect</h2>

            <div className="space-y-4 my-8 not-prose">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Step 1: Virtual Consultation (Before Travel)</h4>
                <p className="text-gray-700 text-sm">
                  Send X-rays or get a CT scan locally. The clinic reviews your case, confirms you&apos;re a candidate, and provides a treatment plan and quote.
                  Many clinics offer free virtual consultations.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Step 2: First Trip — Surgery + Temporary Teeth (5-7 days)</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Day 1:</strong> Arrive, check in, final consultation, CT scan if not already done
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Day 2:</strong> Surgery day. Extractions, implant placement, immediate temporary prosthesis placed.
                  Procedure takes 2-4 hours per arch under local anesthesia (IV sedation available).
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Days 3-5:</strong> Recovery. Soft foods only. Follow-up appointments as needed. Expect swelling and discomfort.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Days 6-7:</strong> Final check, care instructions, fly home with temporary teeth.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Healing Period (4-6 Months at Home)</h4>
                <p className="text-gray-700 text-sm">
                  Implants osseointegrate (fuse with bone) over the next 4-6 months. You&apos;ll eat normally with temporary teeth.
                  Your US dentist can handle any minor adjustments if needed.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Step 3: Second Trip — Permanent Prosthesis (3-5 days)</h4>
                <p className="text-gray-700 text-sm">
                  Return for final impressions and fitting of your permanent zirconia or acrylic prosthesis.
                  Some clinics can complete this in as little as 2-3 days. You leave with your final teeth.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Choose a Clinic</h2>
            <p>
              This is the most important decision you&apos;ll make. Here&apos;s what to look for:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Must-Haves</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Board-certified implantologist</strong> — Not just a general dentist. Look for specialists with implant-specific training.</li>
              <li><strong>Brand-name implants</strong> — Nobel Biocare, Straumann, Zimmer Biomet. Avoid generic/unknown brands.</li>
              <li><strong>In-house dental lab</strong> — Clinics with their own labs have better quality control and faster turnaround.</li>
              <li><strong>Written warranty</strong> — Minimum 5-year warranty on implants; 2+ years on prosthesis.</li>
              <li><strong>Before/after photos</strong> — Ask to see actual cases, not stock photos.</li>
              <li><strong>Verifiable reviews</strong> — Google reviews, Facebook, dental tourism review sites.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Red Flags</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices significantly lower than competitors (quality cut somewhere)</li>
              <li>Won&apos;t tell you which implant brand they use</li>
              <li>No written treatment plan before you arrive</li>
              <li>Pressure to book immediately</li>
              <li>Can&apos;t provide credentials or references</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Planning Your Trip</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What to Bring</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Passport (always, even for border crossings)</li>
              <li>Any existing dental records/X-rays</li>
              <li>List of current medications</li>
              <li>Comfortable recovery clothing</li>
              <li>Ice packs (or buy locally)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Recovery Essentials</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Soft foods:</strong> Soup, smoothies, mashed potatoes, scrambled eggs for the first week</li>
              <li><strong>Medications:</strong> Clinic provides antibiotics and pain medication</li>
              <li><strong>Ice:</strong> Apply 20 minutes on, 20 minutes off for swelling</li>
              <li><strong>Rest:</strong> No strenuous activity for 48-72 hours</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Total Cost Including Travel</h3>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose text-sm">
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span>All-on-4 (one arch, zirconia)</span>
                  <span className="font-semibold">$12,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Flights (2 round trips)</span>
                  <span className="font-semibold">$400 - $800</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotels (10 nights total)</span>
                  <span className="font-semibold">$500 - $1,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Food, transport, misc</span>
                  <span className="font-semibold">$300 - $500</span>
                </div>
                <div className="flex justify-between font-bold border-t border-gray-300 pt-2 mt-2">
                  <span>Total (one arch)</span>
                  <span className="text-green-600">$13,200 - $14,800</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>vs. US price</span>
                  <span>$28,000 - $35,000</span>
                </div>
                <div className="flex justify-between text-green-700 font-semibold">
                  <span>Your savings</span>
                  <span>$14,000 - $20,000</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Risks & Considerations</h2>
            <p>
              Let&apos;s be realistic about the downsides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Distance for complications</strong> — If something goes wrong months later, you can&apos;t just pop back. Most issues can be handled by a US dentist, but major revisions would require another trip.</li>
              <li><strong>No legal recourse</strong> — Malpractice suits in Mexico are effectively impossible for Americans. Your protection is choosing a reputable clinic upfront.</li>
              <li><strong>Two trips required</strong> — The healing period means you can&apos;t do everything in one visit.</li>
              <li><strong>Communication barriers</strong> — Top clinics have English-speaking staff, but verify before booking.</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h4 className="text-amber-900 font-bold mb-2">Risk Mitigation</h4>
              <p className="text-sm text-amber-800 mb-0">
                Most complications are minor and can be managed remotely or by a local dentist. Serious complications are rare with experienced surgeons.
                The best protection is thorough research: verify credentials, read reviews, get everything in writing, and don&apos;t choose solely based on price.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>
            <p>
              All-on-4 in Mexico is a legitimate option that can save you $15,000-40,000 while delivering comparable quality to US clinics.
              The key is treating it seriously: research your clinic, verify credentials, understand the process, and plan for two trips.
            </p>
            <p>
              <strong>Best candidates:</strong> People who need full-arch replacement, don&apos;t have dental insurance covering implants,
              are comfortable traveling for healthcare, and willing to do their homework on clinic selection.
            </p>
            <p>
              <strong>Not ideal for:</strong> Those who want local follow-up care, are anxious about international travel,
              or need complex cases that might require multiple adjustments.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Explore Mexico Dental Clinics</h3>
            <p className="text-gray-600 mb-6">
              Compare top-rated dental clinics in Tijuana, Cancun, and Los Algodones.
            </p>
            <Link
              href="/dental"
              className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700 transition-colors"
            >
              View Dental Clinics →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-0">
              This guide is for informational purposes only. Dental implant surgery carries risks including infection, nerve damage, and implant failure.
              Always consult with qualified dental professionals before undergoing treatment. Prices and clinic information may change.
              Verify all details directly with clinics before booking.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://dentalmexico.com/prices-for/dental-implants/all-on-4/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DentalMexico: All-on-4 Cost Guide 2025</a></li>
              <li>• <a href="https://allon4cancun.com/full-mouth-dental-implants-cost-mexico/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">All-on-4 Cancun: Full Mouth Implants Cost</a></li>
              <li>• <a href="https://www.dentavacation.com/all-on-4-implants-in-mexico/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DentaVacation: All-on-4 in Mexico Guide</a></li>
              <li>• <a href="https://heva.co/blog/all-on-4-dental-implants-mexico-vs-us-complete-cost-analysis" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Heva: Mexico vs US All-on-4 Cost Analysis</a></li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
