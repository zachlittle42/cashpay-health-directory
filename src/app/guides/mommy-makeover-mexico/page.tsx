import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mommy Makeover in Mexico: Complete Cost & Safety Guide (2025) | VitalityScout',
  description: 'Mommy makeover surgery in Mexico: costs ($5,500-14,000 vs $20,000+ in US), what\'s included, choosing a surgeon, recovery, and everything you need to know.',
  keywords: ['mommy makeover Mexico', 'mommy makeover Tijuana', 'tummy tuck Mexico', 'breast lift Mexico', 'plastic surgery Mexico', 'mommy makeover cost'],
};

export default function MommyMakeoverMexicoGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mommy Makeover in Mexico: Complete Cost & Safety Guide',
    description: 'Comprehensive guide to mommy makeover surgery in Mexico including costs, procedures, safety, and planning.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/mommy-makeover-mexico',
    articleSection: 'Procedure Guides',
    keywords: ['mommy makeover', 'Mexico', 'plastic surgery', 'tummy tuck', 'breast surgery']
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
              <span className="text-gray-900">Mommy Makeover Mexico</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Procedure Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mommy Makeover in Mexico: The Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting a mommy makeover in Mexico—realistic costs, what&apos;s included, choosing a safe surgeon, and planning your recovery.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 16 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Stats Box */}
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Mommy Makeover in Mexico: At a Glance</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-rose-600 mb-1">Cost Range</div>
                <div className="text-gray-900 font-semibold">$5,500 - $14,000</div>
                <div className="text-gray-600">vs $15,000-30,000 in US</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-pink-600 mb-1">Typical Procedures</div>
                <div className="text-gray-900 font-semibold">2-4 combined</div>
                <div className="text-gray-600">Tummy tuck + breast + lipo</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">Recovery Stay</div>
                <div className="text-gray-900 font-semibold">7-14 days in Mexico</div>
                <div className="text-gray-600">Full recovery: 6-8 weeks</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What Is a Mommy Makeover?</a></li>
              <li><a href="#costs" className="text-blue-600 hover:underline">2. Complete Cost Breakdown</a></li>
              <li><a href="#procedures" className="text-blue-600 hover:underline">3. Common Procedure Combinations</a></li>
              <li><a href="#choosing" className="text-blue-600 hover:underline">4. Choosing a Safe Surgeon</a></li>
              <li><a href="#locations" className="text-blue-600 hover:underline">5. Best Locations in Mexico</a></li>
              <li><a href="#planning" className="text-blue-600 hover:underline">6. Planning Your Trip</a></li>
              <li><a href="#recovery" className="text-blue-600 hover:underline">7. Recovery Timeline</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A mommy makeover combines multiple procedures to address the physical changes from pregnancy and breastfeeding—typically a tummy tuck, breast surgery, and liposuction performed together. Mexico has become a leading destination for these procedures, offering significant savings while maintaining high standards of care. Here&apos;s your complete guide.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is a Mommy Makeover?</h2>

            <p className="text-gray-700 mb-4">
              A &quot;mommy makeover&quot; isn&apos;t a single procedure—it&apos;s a customized combination of surgeries designed to restore your pre-pregnancy body. The specific procedures depend on your individual concerns.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Most Common Components</h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Tummy Tuck (Abdominoplasty):</strong> Removes excess skin and fat, repairs separated abdominal muscles (diastasis recti). The core of most mommy makeovers.
              </li>
              <li>
                <strong>Breast Lift (Mastopexy):</strong> Raises and reshapes sagging breasts that have lost volume from breastfeeding.
              </li>
              <li>
                <strong>Breast Augmentation:</strong> Adds volume with implants for those who want fuller breasts.
              </li>
              <li>
                <strong>Breast Reduction:</strong> Reduces overly large breasts that developed during pregnancy.
              </li>
              <li>
                <strong>Liposuction:</strong> Removes stubborn fat deposits from flanks, thighs, back, or arms.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Less Common Add-Ons</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Labiaplasty:</strong> Addresses changes to vaginal appearance</li>
              <li><strong>Arm lift (Brachioplasty):</strong> For excess upper arm skin</li>
              <li><strong>Thigh lift:</strong> For inner or outer thigh skin laxity</li>
              <li><strong>Fat transfer to buttocks (BBL):</strong> Sometimes combined, but adds significant risk</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Timing Matters</h4>
              <p className="text-gray-700">
                Surgeons recommend waiting at least 6 months after you stop breastfeeding and until your weight has stabilized. If you&apos;re planning more children, it&apos;s generally advised to wait—pregnancy after a tummy tuck can undo results.
              </p>
            </div>

            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Complete Cost Breakdown</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Procedure Costs: Mexico vs USA</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mexico</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">USA</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full Tummy Tuck</td>
                    <td className="border border-gray-300 px-4 py-3">$3,500 - $5,500</td>
                    <td className="border border-gray-300 px-4 py-3">$8,000 - $15,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">55-65%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Breast Lift</td>
                    <td className="border border-gray-300 px-4 py-3">$2,500 - $4,000</td>
                    <td className="border border-gray-300 px-4 py-3">$5,000 - $10,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">50-60%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Breast Augmentation</td>
                    <td className="border border-gray-300 px-4 py-3">$3,000 - $4,500</td>
                    <td className="border border-gray-300 px-4 py-3">$6,000 - $12,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">50-65%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Liposuction (3-4 areas)</td>
                    <td className="border border-gray-300 px-4 py-3">$2,000 - $4,000</td>
                    <td className="border border-gray-300 px-4 py-3">$5,000 - $10,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">50-60%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium bg-rose-50">Full Mommy Makeover</td>
                    <td className="border border-gray-300 px-4 py-3 bg-rose-50">$5,500 - $14,000</td>
                    <td className="border border-gray-300 px-4 py-3 bg-rose-50">$15,000 - $30,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600 bg-rose-50">50-65%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What&apos;s Typically Included</h3>

            <p className="text-gray-700 mb-4">
              Most Mexican plastic surgery packages are all-inclusive:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Surgeon&apos;s fee and anesthesiologist</li>
              <li>Hospital/surgical facility fees</li>
              <li>Pre-operative lab work and medical clearance</li>
              <li>1-3 nights in hospital/recovery facility</li>
              <li>Post-operative medications</li>
              <li>Compression garments</li>
              <li>Follow-up appointments during your stay</li>
              <li>Airport transfers (often included)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Additional Costs to Budget</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Flights:</strong> $200-500 round trip from most US cities</li>
              <li><strong>Recovery housing:</strong> $75-150/night for 7-10 additional nights</li>
              <li><strong>Companion travel:</strong> You&apos;ll need someone with you (budget their expenses too)</li>
              <li><strong>Lymphatic massage:</strong> $50-80/session, recommended 5-10 sessions</li>
              <li><strong>Medical supplies:</strong> Drains, extra garments, etc. (~$100-200)</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Realistic all-in budget:</strong> $8,000-18,000 including everything—still 40-50% less than US surgery alone.
            </p>

            <h2 id="procedures" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Procedure Combinations</h2>

            <div className="bg-rose-50 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-4">Most Popular Package: The Classic Mommy Makeover</h4>
              <p className="text-gray-700 mb-4">
                Tummy tuck + Breast lift (with or without implants) + Liposuction of flanks
              </p>
              <p className="text-gray-700">
                <strong>Mexico price:</strong> $7,000-12,000<br />
                <strong>US price:</strong> $18,000-30,000
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other Common Combinations</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Tummy Tuck + Lipo Only</h4>
                <p className="text-gray-700">For those happy with their breasts. Mexico: $5,000-8,000</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Breast Lift + Augmentation + Lipo</h4>
                <p className="text-gray-700">For minimal tummy concerns. Mexico: $6,000-10,000</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Full Makeover + Arm Lift</h4>
                <p className="text-gray-700">Comprehensive transformation. Mexico: $9,000-14,000</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Surgery length matters:</strong> Combining procedures keeps you under anesthesia longer (4-7 hours for a full mommy makeover). Quality surgeons limit total surgery time for safety. Very complex combinations may need to be staged across multiple surgeries.
              </p>
            </div>

            <h2 id="choosing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Choosing a Safe Surgeon</h2>

            <p className="text-gray-700 mb-4">
              This is the most critical decision. Here&apos;s how to vet a surgeon properly:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Essential Credentials</h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Board certification by CMCPER:</strong> Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva—Mexico&apos;s official board. Verify directly.
              </li>
              <li>
                <strong>Hospital privileges:</strong> Operates at an accredited hospital (not just an office surgery suite).
              </li>
              <li>
                <strong>Specialty training:</strong> Look for fellowship training, especially for complex body contouring.
              </li>
              <li>
                <strong>ISAPS or ASPS membership:</strong> International recognition of standards.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mommy Makeover-Specific Questions</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>How many mommy makeovers have you performed?</li>
              <li>Can I see before/after photos of patients with similar body types?</li>
              <li>What is your complication rate for combined procedures?</li>
              <li>How do you manage blood loss during longer surgeries?</li>
              <li>What is your maximum safe surgery time?</li>
              <li>Who will be monitoring me during surgery and recovery?</li>
              <li>What happens if I have a complication after returning home?</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-red-900 mb-3">Red Flags to Avoid</h4>
              <ul className="text-red-800 space-y-2">
                <li>• Prices significantly below $5,000 for a full mommy makeover</li>
                <li>• Surgery performed in an unaccredited office or clinic</li>
                <li>• Can&apos;t verify board certification</li>
                <li>• Willing to combine too many procedures at once</li>
                <li>• Pressure to book without proper consultation</li>
                <li>• No before/after photos of similar cases</li>
                <li>• Poor reviews or no verifiable patient testimonials</li>
              </ul>
            </div>

            <h2 id="locations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best Locations in Mexico</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tijuana</h3>
            <p className="text-gray-700 mb-4">
              <strong>Pros:</strong> Closest to US (15 min from San Diego), many experienced plastic surgeons, easy for follow-ups, competitive pricing.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cons:</strong> City can feel industrial; requires careful vetting to avoid &quot;surgery mills.&quot;
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Average mommy makeover:</strong> $6,000-11,000
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Guadalajara</h3>
            <p className="text-gray-700 mb-4">
              <strong>Pros:</strong> Mexico&apos;s medical hub, excellent hospitals, highly trained surgeons, beautiful recovery environment.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cons:</strong> Requires a flight, slightly higher prices than Tijuana.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Average mommy makeover:</strong> $7,000-13,000
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mexico City</h3>
            <p className="text-gray-700 mb-4">
              <strong>Pros:</strong> Largest selection of top surgeons, world-class hospitals, premium options available.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cons:</strong> Higher prices, altitude can affect recovery (7,300 ft elevation), large city to navigate.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Average mommy makeover:</strong> $8,000-14,000
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cancún / Puerto Vallarta</h3>
            <p className="text-gray-700 mb-4">
              <strong>Pros:</strong> Resort recovery experience, direct flights from many US cities.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cons:</strong> Fewer surgeon options, heat and humidity can affect comfort during recovery.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Average mommy makeover:</strong> $7,000-12,000
            </p>

            <h2 id="planning" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Planning Your Trip</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Timeline</h3>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-4">Typical 12-Day Trip Structure</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Day 1:</strong> Arrive, pre-op appointment, lab work</li>
                <li><strong>Day 2:</strong> Surgery day (4-6 hours)</li>
                <li><strong>Days 2-4:</strong> In hospital/recovery facility with nursing care</li>
                <li><strong>Days 5-10:</strong> Recovery at hotel/Airbnb, daily or every-other-day check-ins</li>
                <li><strong>Days 10-12:</strong> Final follow-up, drain removal if applicable</li>
                <li><strong>Day 12:</strong> Fly home (if surgeon clears you)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What to Bring</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Loose, comfortable clothing (front-opening tops are easiest)</li>
              <li>Slip-on shoes (bending is difficult)</li>
              <li>Entertainment (books, tablet, streaming downloads)</li>
              <li>Medications you currently take</li>
              <li>Passport and travel insurance documents</li>
              <li>Compression garments if surgeon asks you to bring specific ones</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">You NEED a Companion</h3>

            <p className="text-gray-700 mb-4">
              This is not optional. After a mommy makeover, you will need help for at least the first week with:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Getting in and out of bed</li>
              <li>Going to the bathroom</li>
              <li>Showering (when cleared)</li>
              <li>Emptying surgical drains</li>
              <li>Meal preparation</li>
              <li>Transportation to follow-ups</li>
            </ul>

            <h2 id="recovery" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Recovery Timeline</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">In Mexico (Days 1-12)</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Days 1-3:</strong> Most intense discomfort, significant swelling, limited mobility</li>
              <li><strong>Days 4-7:</strong> Moving around more, still hunched over if tummy tuck included</li>
              <li><strong>Days 8-12:</strong> Walking more upright, drains often removed, follow-up appointments</li>
              <li>Pain managed with prescribed medications</li>
              <li>Compression garments worn 24/7 except showering</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Flying Home</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Most surgeons clear patients for flight at 10-14 days post-op</li>
              <li>Wear compression garments during flight</li>
              <li>Get up and walk frequently (blood clot prevention)</li>
              <li>Bring pain medication for the flight</li>
              <li>Consider business class for more room to adjust position</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">At Home (Weeks 2-8)</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Week 2-3:</strong> Can do light activities, short walks, may return to desk work</li>
              <li><strong>Week 4:</strong> Most return to regular work (depending on job demands)</li>
              <li><strong>Week 6:</strong> Light exercise typically approved</li>
              <li><strong>Week 8:</strong> Full exercise usually approved</li>
              <li><strong>Months 3-6:</strong> Final results become visible as swelling resolves</li>
            </ul>

            <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Childcare Planning Is Critical</h4>
              <p className="text-gray-700">
                You cannot lift children for 4-6 weeks after a tummy tuck. If you have young children, you MUST arrange childcare help—someone to handle all lifting, bathing, and physical care of kids. This is non-negotiable and often underplanned.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Follow-Up Care at Home</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Arrange a local doctor for emergencies (your Mexico surgeon should provide notes)</li>
              <li>Continue lymphatic massage if possible (helps swelling)</li>
              <li>Virtual follow-ups with your Mexico surgeon via video call</li>
              <li>Wear compression garment as directed (usually 6-8 weeks)</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Exploring Plastic Surgery in Mexico?</h3>
            <p className="mb-6 text-rose-100">
              Learn more about medical tourism destinations and other procedures.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/destinations/mexico"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Mexico Medical Tourism
              </Link>
              <Link
                href="/guides/bbl-surgery-mexico"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                BBL Surgery Guide
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for informational purposes only and does not constitute medical advice. Mommy makeover surgery carries risks including but not limited to infection, blood clots, scarring, asymmetry, and complications from anesthesia. Results vary based on individual factors. Always consult with a board-certified plastic surgeon to determine if you are a good candidate for surgery. We do not endorse any specific surgeon or clinic.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• American Society of Plastic Surgeons: Procedure costs and statistics</li>
              <li>• CMCPER (Mexican Board of Plastic Surgery): Provider verification</li>
              <li>• Plastic and Reconstructive Surgery journal: Combined procedure safety studies</li>
              <li>• ISAPS Global Survey: International plastic surgery statistics</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
