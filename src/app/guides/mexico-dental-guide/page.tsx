import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexico Dental Guide: Tijuana, Los Algodones, Cancun Costs (2024)',
  description: 'Complete guide to dental work in Mexico. Implants from $750, All-on-4 from $7,500. Compare Tijuana vs Los Algodones, find safe clinics, plan your trip.',
};

export default function MexicoDentalGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mexico Dental Guide: Complete Guide for American Patients',
    description: 'Everything you need to know about dental tourism in Mexico including top clinics in Tijuana, Los Algodones, and Cancun, costs, safety, and travel planning.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/mexico-dental-guide',
    keywords: ['Mexico dental tourism', 'Tijuana dentist', 'Los Algodones dental', 'dental implants Mexico', 'All-on-4 Mexico', 'Molar City']
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

      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇲🇽</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Dental Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mexico Dental Tourism: The Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Save 50-70% on implants, crowns, and full-mouth restorations just across the border.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 16 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Mexico Dental Tourism At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>1+ million Americans</strong> get dental work in Mexico annually</li>
            <li>✓ <strong>50-70% savings</strong> vs. US prices</li>
            <li>✓ <strong>Drive across</strong> from California, Arizona, or Texas</li>
            <li>✓ <strong>Same-day dentistry</strong> available at Los Algodones</li>
            <li>✓ <strong>Quality implants</strong> - Straumann, Nobel Biocare available</li>
            <li>✓ <strong>No visa required</strong> for US citizens</li>
          </ul>
        </div>

        <h2>Why Americans Choose Mexico for Dental Work</h2>
        <p>
          Mexico is the #1 destination for American dental tourists, and it&apos;s not hard to see why. The combination of dramatic savings, proximity, and quality care makes it the obvious choice for millions every year.
        </p>
        <ul>
          <li><strong>Proximity</strong> - Drive across from San Diego, Tucson, or El Paso. No flights required.</li>
          <li><strong>Massive savings</strong> - Pay $750 for an implant that costs $3,000+ at home</li>
          <li><strong>Same-day options</strong> - Get crowns and fillings done in hours, not weeks</li>
          <li><strong>Experienced dentists</strong> - Many trained in the US, some practicing 20+ years</li>
          <li><strong>Modern facilities</strong> - Top clinics rival any US practice in equipment and cleanliness</li>
        </ul>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-4">Cost Comparison: US vs. Mexico</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-left py-2">US Price</th>
                  <th className="text-left py-2 text-green-700">Mexico Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Single Dental Implant</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                  <td className="py-2 text-green-600 font-semibold">$750-1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Implant + Abutment + Crown</td>
                  <td className="py-2 text-gray-500">$4,000-6,000</td>
                  <td className="py-2 text-green-600 font-semibold">$1,400-1,800</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-4 (full arch)</td>
                  <td className="py-2 text-gray-500">$20,000-30,000</td>
                  <td className="py-2 text-green-600 font-semibold">$7,500-10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-4 Zirconia</td>
                  <td className="py-2 text-gray-500">$25,000-40,000</td>
                  <td className="py-2 text-green-600 font-semibold">$12,000-15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Porcelain Crown</td>
                  <td className="py-2 text-gray-500">$1,000-1,500</td>
                  <td className="py-2 text-green-600 font-semibold">$180-350</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Porcelain Veneer</td>
                  <td className="py-2 text-gray-500">$1,000-2,500</td>
                  <td className="py-2 text-green-600 font-semibold">$350-450</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Root Canal</td>
                  <td className="py-2 text-gray-500">$800-1,500</td>
                  <td className="py-2 text-green-600 font-semibold">$250-350</td>
                </tr>
                <tr>
                  <td className="py-2">Extraction (simple)</td>
                  <td className="py-2 text-gray-500">$150-300</td>
                  <td className="py-2 text-green-600 font-semibold">$50-80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Prices are estimates based on 2024 data. Actual costs vary by clinic and complexity.
          </p>
        </div>

        <h2>The Three Major Destinations</h2>
        <p>
          Not all Mexico dental destinations are created equal. Each has its own character, pros, and cons:
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">🏜️ Los Algodones (&quot;Molar City&quot;)</h3>
            <p className="text-sm text-gray-600 mb-3">
              A tiny town of 5,000 people with <strong>350+ dental clinics</strong>. Walking distance from the Arizona border. The epicenter of dental tourism.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-green-700">Pros:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Walk across from Arizona (no car needed)</li>
                  <li>• Highest concentration of clinics = competition</li>
                  <li>• Often the lowest prices</li>
                  <li>• Most dentists speak English</li>
                  <li>• Great for same-day work</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-700">Cons:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Very touristy/commercialized</li>
                  <li>• Quality varies dramatically</li>
                  <li>• High-pressure sales tactics at some clinics</li>
                  <li>• Limited for complex procedures</li>
                  <li>• Hot in summer (desert climate)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 mb-0">
              <strong>Best for:</strong> Simple procedures, price shopping, retirees from Arizona
            </p>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">🌆 Tijuana</h3>
            <p className="text-sm text-gray-600 mb-3">
              Major city just south of San Diego with <strong>hundreds of dental clinics</strong> ranging from budget to high-end. More variety and sophistication than Los Algodones.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-green-700">Pros:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• 20 minutes from San Diego airport</li>
                  <li>• High-end clinics with latest technology</li>
                  <li>• Better for complex procedures</li>
                  <li>• Many US-trained dentists</li>
                  <li>• On-site labs for faster turnaround</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-700">Cons:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Border crossing can be slow</li>
                  <li>• More intimidating for first-timers</li>
                  <li>• Need to research clinics carefully</li>
                  <li>• Slightly higher prices than Los Algodones</li>
                  <li>• Safety concerns in some areas</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 mb-0">
              <strong>Best for:</strong> All-on-4, complex implant cases, those wanting premium clinics
            </p>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">🏝️ Cancun</h3>
            <p className="text-sm text-gray-600 mb-3">
              Combine dental work with a beach vacation. Modern clinics in a tourist-friendly environment.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-green-700">Pros:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Easy direct flights from anywhere in US</li>
                  <li>• Resort recovery environment</li>
                  <li>• Very safe tourist zone</li>
                  <li>• Modern facilities</li>
                  <li>• Great for combining with vacation</li>
                </ul>
              </div>
              <div>
                <strong className="text-red-700">Cons:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Highest prices of the three</li>
                  <li>• Fewer clinics = less competition</li>
                  <li>• Requires flight (can&apos;t drive)</li>
                  <li>• May be distracted by vacation</li>
                  <li>• Prices still 40-60% below US</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 mb-0">
              <strong>Best for:</strong> Those wanting a vacation, East Coast residents, anxiety-prone patients
            </p>
          </div>
        </div>

        <h2>Top Clinics by Location</h2>

        <h3>Tijuana</h3>
        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">SOTA Dental</h4>
            <p className="text-sm text-gray-600 mb-2">
              High-end chain with locations in Tijuana, Cancun, Los Algodones, and Playa del Carmen. Known for state-of-the-art facilities and transparent pricing.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• On-site 3D imaging and dental labs</li>
              <li>• All-on-4 specialty</li>
              <li>• Free airport shuttle from San Diego</li>
              <li>• Straumann implants available</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Sani Dental Group</h4>
            <p className="text-sm text-gray-600 mb-2">
              Largest dental clinic chain in Mexico with 30+ years of experience. Multiple Tijuana and Los Algodones locations.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• 150+ dental specialists</li>
              <li>• 30+ years in business</li>
              <li>• Comprehensive price list online</li>
              <li>• Full-service dental tourism packages</li>
            </ul>
          </div>
        </div>

        <h3>Los Algodones</h3>
        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Dental Solutions Los Algodones</h4>
            <p className="text-sm text-gray-600 mb-2">
              Family-owned clinic with English-speaking staff. Known for honest pricing and no-pressure consultations.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Single titanium implant from $750</li>
              <li>• Free consultations</li>
              <li>• 10+ years experience</li>
              <li>• Walking distance from border</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Supreme Dental Clinic</h4>
            <p className="text-sm text-gray-600 mb-2">
              High-volume clinic specializing in implants and full-mouth restorations.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Implants from $800-1,250</li>
              <li>• On-site lab</li>
              <li>• Digital X-rays and 3D imaging</li>
              <li>• Same-day crowns available</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">⚠️ Red Flags to Avoid</h4>
          <ul className="text-sm text-yellow-800 space-y-2 mb-0">
            <li><strong>Prices too low:</strong> If it&apos;s 50% cheaper than other Mexico clinics, something&apos;s wrong</li>
            <li><strong>Pressure tactics:</strong> Pushing you to decide immediately or expand treatment</li>
            <li><strong>No credentials visible:</strong> Legitimate clinics display their certifications</li>
            <li><strong>Cash only:</strong> Reputable clinics accept credit cards</li>
            <li><strong>No before/after photos:</strong> Experience should be visible</li>
            <li><strong>Generic implant brands:</strong> Ask specifically for brand names (Straumann, Nobel, Zimmer)</li>
          </ul>
        </div>

        <h2>Planning Your Trip</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">2-4 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Get X-rays from your US dentist (or clinics offer free imaging)</li>
              <li>• Send images to 2-3 Mexico clinics for quotes</li>
              <li>• Compare treatment plans and pricing</li>
              <li>• Book your clinic appointment</li>
              <li>• If driving: ensure car insurance covers Mexico</li>
              <li>• If flying to Cancun: book flights and hotel</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Confirm appointment</li>
              <li>• Bring passport (required for border crossing)</li>
              <li>• Bring medical records and current X-rays</li>
              <li>• Notify bank of Mexico travel</li>
              <li>• Get pesos for small purchases (clinics take USD/cards)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Treatment Day</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Cross border early to avoid lines (7-8 AM ideal)</li>
              <li>• Most clinics offer pickup from border/airport</li>
              <li>• Initial consultation and X-rays</li>
              <li>• Treatment (same-day for simple procedures)</li>
              <li>• Payment (credit card, cash, or wire transfer)</li>
              <li>• Aftercare instructions in English</li>
            </ul>
          </div>
        </div>

        <h2>Border Crossing Tips</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Los Algodones (from Yuma, AZ)</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Parking:</strong> $8-10/day on US side</li>
              <li><strong>Walk across:</strong> 5-minute walk to clinics</li>
              <li><strong>Best time:</strong> Early morning (opens 6 AM)</li>
              <li><strong>Return wait:</strong> 30 min - 2 hours</li>
              <li><strong>Season:</strong> Busiest Nov-March (snowbirds)</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Tijuana (from San Diego)</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>San Ysidro crossing:</strong> Largest land border crossing in world</li>
              <li><strong>CBX bridge:</strong> Walk across from Tijuana airport</li>
              <li><strong>Parking:</strong> Park in San Diego, clinic picks you up</li>
              <li><strong>Return wait:</strong> 1-4 hours (varies wildly)</li>
              <li><strong>SENTRI pass:</strong> Speeds up return dramatically</li>
            </ul>
          </div>
        </div>

        <h2>All-on-4 in Mexico: Deep Dive</h2>
        <p>
          Full-mouth restoration with All-on-4 is one of the most popular reasons to travel to Mexico. Here&apos;s what you need to know:
        </p>

        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">All-on-4 Pricing Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Option</th>
                  <th className="text-left py-2">Mexico Price (per arch)</th>
                  <th className="text-left py-2">US Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">All-on-4 Acrylic</td>
                  <td className="py-2 font-semibold">$7,500-9,000</td>
                  <td className="py-2 text-gray-500">$20,000-24,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-4 Zirconia</td>
                  <td className="py-2 font-semibold">$12,000-15,000</td>
                  <td className="py-2 text-gray-500">$30,000-40,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-6 Zirconia</td>
                  <td className="py-2 font-semibold">$14,000-17,000</td>
                  <td className="py-2 text-gray-500">$35,000-45,000</td>
                </tr>
                <tr>
                  <td className="py-2">Full mouth (both arches)</td>
                  <td className="py-2 font-semibold">$15,000-30,000</td>
                  <td className="py-2 text-gray-500">$40,000-80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Zirconia is more durable and natural-looking than acrylic but costs more.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">All-on-4 Timeline</h4>
          <ul className="text-sm text-blue-800 space-y-2 mb-0">
            <li><strong>Day 1:</strong> Consultation, imaging, treatment planning</li>
            <li><strong>Day 2:</strong> Extractions (if needed), implant placement, temporary teeth</li>
            <li><strong>Days 3-5:</strong> Recovery, follow-up checks</li>
            <li><strong>3-6 months later:</strong> Return for permanent zirconia/acrylic bridge</li>
          </ul>
          <p className="text-sm text-blue-800 mt-3 mb-0">
            You leave with temporary teeth on Day 2. The second trip is for the permanent prosthetic.
          </p>
        </div>

        <h2>Safety Considerations</h2>
        <p>
          Is dental work in Mexico safe? <strong>Yes, if you choose carefully.</strong> Here&apos;s the honest assessment:
        </p>
        <ul>
          <li><strong>Top clinics match US quality</strong> - Same equipment, materials, and sterilization protocols</li>
          <li><strong>Credentials matter</strong> - Look for ADA affiliations, AACD membership, US training</li>
          <li><strong>Quality varies widely</strong> - More than in the US. Research is essential.</li>
          <li><strong>Complications happen</strong> - Same as anywhere. Ensure aftercare plan is solid.</li>
        </ul>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h4 className="text-green-900 mt-0 mb-3">How to Vet a Clinic</h4>
          <ul className="text-sm text-green-800 space-y-2 mb-0">
            <li>✓ Check Google reviews (100+ reviews, 4.5+ stars)</li>
            <li>✓ Look for before/after photos of actual patients</li>
            <li>✓ Verify dentist credentials (dental school, specializations)</li>
            <li>✓ Ask what implant brands they use (avoid generics)</li>
            <li>✓ Get treatment plan in writing with itemized costs</li>
            <li>✓ Ask about their complication protocol</li>
            <li>✓ Confirm they have on-site imaging (X-rays, CT scanner)</li>
          </ul>
        </div>

        <h2>What About Aftercare?</h2>
        <p>
          This is the most common concern - and it&apos;s valid. Here&apos;s how it typically works:
        </p>
        <ul>
          <li><strong>Immediate issues:</strong> Most clinics provide 24/7 WhatsApp support. They can advise remotely or have you return.</li>
          <li><strong>Minor complications:</strong> Can often be handled by your US dentist. Bring all records home.</li>
          <li><strong>Major complications:</strong> You may need to return to Mexico. This is rare with good clinics but is the tradeoff for savings.</li>
          <li><strong>Warranty work:</strong> Reputable clinics offer warranties but you must return to Mexico to use them.</li>
        </ul>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Do I need a passport?&quot;</h4>
            <p className="text-sm text-gray-700">
              <strong>Yes.</strong> A valid US passport is required to re-enter the United States. A passport card works for land crossings but not for flying to Cancun.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Is it safe to walk around in Tijuana/Los Algodones?&quot;</h4>
            <p className="text-sm text-gray-700">
              Los Algodones is extremely safe - it&apos;s a tiny tourist town. Tijuana varies by neighborhood. Most dental clinics are in safe, tourist-friendly areas (Zona Rio, near the border). Use common sense: don&apos;t wander at night, don&apos;t flash valuables, stick to clinic-arranged transportation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Can I use my US dental insurance?&quot;</h4>
            <p className="text-sm text-gray-700">
              Most US dental insurance doesn&apos;t cover work done abroad. Some PPO plans reimburse out-of-network providers at a lower rate - check with your insurer. Many people use HSA/FSA funds for Mexico dental work.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;How do I pay?&quot;</h4>
            <p className="text-sm text-gray-700">
              Credit cards are accepted at reputable clinics (expect 3-4% fee). Cash (USD) is preferred and sometimes gets a discount. Some clinics accept wire transfers for large treatments. Avoid clinics that demand cash only.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Should I get travel insurance?&quot;</h4>
            <p className="text-sm text-gray-700">
              Travel medical insurance is wise for any international trip, but it won&apos;t cover your elective dental procedure. It would cover an unrelated medical emergency. Some clinics include basic complication coverage - ask about this.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Mexico Dental Options?</h3>
          <p className="text-gray-600 mb-6">
            Browse our directory of Mexico dental providers and compare pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/mexico" className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Mexico Destination Guide
            </Link>
            <Link href="/dental" className="inline-block rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 hover:bg-green-50">
              Browse Dental Providers
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Dental Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for informational purposes only. Always consult with qualified dental professionals before making decisions about dental treatment. Prices and clinic information may change. Verify all details directly with providers before booking treatment.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://dentaltourismassociation.com/blog/cost-of-dental-work-in-mexico/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Dental Tourism Association - Cost of Dental Work in Mexico 2025</a></li>
            <li>• <a href="https://sotadental.com/price-list/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">SOTA Dental - Mexico Dental Price List</a></li>
            <li>• <a href="https://sanidentalgroup.com/price-list" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Sani Dental Group - Price List</a></li>
            <li>• <a href="https://dentalsolutionsalgodones.com/price-list/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Dental Solutions Los Algodones - Prices</a></li>
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
