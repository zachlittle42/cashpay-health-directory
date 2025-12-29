import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Algodones Dental Guide: Complete 2025 Trip Planner | VitalityScout',
  description: 'Complete Los Algodones dental tourism guide. 350+ clinics, 50-70% savings, how to choose a dentist, border crossing, and trip planning for "Molar City."',
  keywords: ['Los Algodones dental', 'Molar City', 'Mexico dental tourism', 'Los Algodones dentist', 'cheap dental work Mexico', 'dental implants Mexico', 'dental crowns Mexico'],
};

export default function LosAlgodonesGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los Algodones Dental Guide: Complete Trip Planner',
    description: 'Comprehensive guide to dental tourism in Los Algodones, Mexico including clinic selection, costs, and trip planning.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/los-algodones-dental-guide',
    articleSection: 'Destination Guides',
    keywords: ['Los Algodones', 'dental tourism', 'Mexico', 'dental implants', 'dentist']
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
              <span className="text-gray-900">Los Algodones Dental Guide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                Destination Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Los Algodones Dental Guide: Everything You Need to Know
            </h1>
            <p className="text-xl text-gray-600">
              The complete guide to &quot;Molar City&quot;—350+ dental clinics, massive savings, and how to navigate the world&apos;s dental capital.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 18 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Stats Box */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Los Algodones At a Glance</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-cyan-600">350+</div>
                <div className="text-gray-600">Dental Clinics</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-cyan-600">600+</div>
                <div className="text-gray-600">Dentists</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-cyan-600">50-70%</div>
                <div className="text-gray-600">Savings vs US</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-cyan-600">7 min</div>
                <div className="text-gray-600">Walk from US Border</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#overview" className="text-blue-600 hover:underline">1. Why Los Algodones?</a></li>
              <li><a href="#prices" className="text-blue-600 hover:underline">2. Dental Prices Comparison</a></li>
              <li><a href="#choosing" className="text-blue-600 hover:underline">3. How to Choose a Dentist</a></li>
              <li><a href="#getting-there" className="text-blue-600 hover:underline">4. Getting There & Border Crossing</a></li>
              <li><a href="#logistics" className="text-blue-600 hover:underline">5. Trip Logistics</a></li>
              <li><a href="#what-to-expect" className="text-blue-600 hover:underline">6. What to Expect at the Clinic</a></li>
              <li><a href="#tips" className="text-blue-600 hover:underline">7. Insider Tips</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Los Algodones is a small Mexican border town with an outsized reputation—it&apos;s earned the nickname &quot;Molar City&quot; by packing more dentists per capita than anywhere else on Earth. Every year, over a million Americans and Canadians walk across the border for affordable dental care. Here&apos;s your complete guide.
            </p>

            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Los Algodones?</h2>

            <p className="text-gray-700 mb-4">
              Los Algodones has become the world&apos;s most concentrated dental tourism destination for several reasons:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Proximity:</strong> 7 miles south of Yuma, Arizona—you can walk across the border</li>
              <li><strong>Price:</strong> 50-70% cheaper than US dental prices, consistently</li>
              <li><strong>Volume:</strong> 350+ clinics means intense competition (good for patients)</li>
              <li><strong>Convenience:</strong> Day trips are possible for most procedures</li>
              <li><strong>Track record:</strong> Decades of serving American patients; dentists know what Americans expect</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The town exists almost entirely because of dental tourism. The main street (Avenida A) is lined wall-to-wall with dental clinics, pharmacies, and optical shops. It feels more like a medical mall than a traditional Mexican town.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Peak season:</strong> October through April, when &quot;snowbirds&quot; from the US and Canada flood the region. Clinics are busiest, but availability is still generally good. Summer is quieter and extremely hot (often 110°F+).
              </p>
            </div>

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dental Prices Comparison</h2>

            <p className="text-gray-700 mb-4">
              Here&apos;s what you can expect to pay in Los Algodones compared to US averages:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Los Algodones</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">US Average</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental Cleaning</td>
                    <td className="border border-gray-300 px-4 py-3">$25 - $50</td>
                    <td className="border border-gray-300 px-4 py-3">$100 - $200</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">60-75%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Filling (composite)</td>
                    <td className="border border-gray-300 px-4 py-3">$40 - $80</td>
                    <td className="border border-gray-300 px-4 py-3">$150 - $300</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">65-75%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Crown (porcelain)</td>
                    <td className="border border-gray-300 px-4 py-3">$180 - $350</td>
                    <td className="border border-gray-300 px-4 py-3">$800 - $1,500</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Root Canal</td>
                    <td className="border border-gray-300 px-4 py-3">$150 - $350</td>
                    <td className="border border-gray-300 px-4 py-3">$700 - $1,500</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Extraction (simple)</td>
                    <td className="border border-gray-300 px-4 py-3">$30 - $75</td>
                    <td className="border border-gray-300 px-4 py-3">$150 - $300</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental Implant (single)</td>
                    <td className="border border-gray-300 px-4 py-3">$750 - $1,200</td>
                    <td className="border border-gray-300 px-4 py-3">$3,000 - $5,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-on-4 (per arch)</td>
                    <td className="border border-gray-300 px-4 py-3">$5,500 - $9,000</td>
                    <td className="border border-gray-300 px-4 py-3">$20,000 - $30,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">65-75%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full Dentures</td>
                    <td className="border border-gray-300 px-4 py-3">$300 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">$1,000 - $3,000</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Veneer (porcelain)</td>
                    <td className="border border-gray-300 px-4 py-3">$250 - $450</td>
                    <td className="border border-gray-300 px-4 py-3">$900 - $2,500</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-600">70-80%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why So Cheap?</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Lower operating costs:</strong> Rent, staff wages, and overhead are a fraction of US levels</li>
              <li><strong>Competition:</strong> 350+ clinics fighting for patients keeps prices honest</li>
              <li><strong>Volume:</strong> Dentists see many more patients per day than typical US practices</li>
              <li><strong>No insurance middlemen:</strong> Cash-pay simplifies everything</li>
              <li><strong>Lower malpractice insurance:</strong> Mexico&apos;s legal environment is different</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Same Materials, Lower Price</h4>
              <p className="text-gray-700">
                Many Los Algodones clinics use the same brands of implants (Nobel Biocare, Straumann, Neodent), crowns (3M, Ivoclar), and materials as US dentists. The savings come from operating costs, not inferior materials. That said, always ask what brands/materials will be used.
              </p>
            </div>

            <h2 id="choosing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose a Dentist</h2>

            <p className="text-gray-700 mb-4">
              With 350+ clinics, choosing can be overwhelming. Here&apos;s a systematic approach:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Check Credentials</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Licensed by Mexican Dental Association (ADM)</li>
              <li>Degree from accredited Mexican or US dental school</li>
              <li>For specialists (implants, oral surgery): Look for additional specialty training</li>
              <li>Many top dentists have US training or certifications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Read Reviews Carefully</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Google Reviews:</strong> Look for patterns in 50+ reviews, not just the rating</li>
              <li><strong>Dental Departures / Dental Traveler:</strong> Medical tourism review platforms</li>
              <li><strong>Facebook groups:</strong> &quot;Los Algodones Dental&quot; groups have real patient feedback</li>
              <li>Watch for <strong>recent reviews</strong>—quality can change with staff turnover</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Request a Quote & Consultation</h3>

            <p className="text-gray-700 mb-4">
              Most clinics will provide free quotes if you send X-rays or describe your needs. Compare at least 3 clinics before deciding. A virtual consultation (WhatsApp video call) is increasingly common.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Verify the Clinic Environment</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Modern equipment (digital X-rays, CEREC/same-day crowns, CBCT scanning)</li>
              <li>Clean, organized facility</li>
              <li>Sterilization protocols visible</li>
              <li>Willing to show you around before committing</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-red-900 mb-3">Red Flags to Avoid</h4>
              <ul className="text-red-800 space-y-2">
                <li>• Street hustlers aggressively recruiting patients</li>
                <li>• Prices significantly lower than market rate (corners being cut)</li>
                <li>• Unable to verify dentist credentials</li>
                <li>• Pushing for treatment without proper diagnosis</li>
                <li>• No written treatment plan or cost breakdown</li>
                <li>• Won&apos;t provide before/after photos of similar cases</li>
              </ul>
            </div>

            <h2 id="getting-there" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Getting There & Border Crossing</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Closest US Cities</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Yuma, AZ:</strong> 7 miles—many patients stay here and drive to the border</li>
              <li><strong>San Diego, CA:</strong> 2.5 hours drive</li>
              <li><strong>Phoenix, AZ:</strong> 3 hours drive</li>
              <li><strong>Los Angeles, CA:</strong> 4.5 hours drive</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Border Crossing Options</h3>

            <p className="text-gray-700 mb-4">
              <strong>Walking (recommended):</strong> Park on the US side and walk across. It&apos;s only a 5-10 minute walk to the main dental district. This avoids the hassle of Mexican auto insurance and border traffic.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Driving:</strong> Possible but not recommended unless you&apos;re comfortable with Mexican driving and have proper insurance. Walking is easier.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What You Need</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Passport or Passport Card:</strong> Required for re-entry to the US</li>
              <li><strong>Enhanced Driver&apos;s License:</strong> Accepted from some states (WA, MI, NY, VT, MN)</li>
              <li><strong>No visa needed:</strong> For stays under 72 hours in the border zone</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Parking</h3>

            <p className="text-gray-700 mb-4">
              Several parking lots operate near the Andrade border crossing on the US side:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>$5-10 per day for most lots</li>
              <li>Some lots offer shuttle service to/from the crossing</li>
              <li>Keep valuables out of sight—thefts can happen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Border Wait Times</h3>

            <p className="text-gray-700 mb-4">
              <strong>Going into Mexico:</strong> Usually under 5 minutes (no line most days)
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Returning to US:</strong> 15-60+ minutes depending on time and season. Peak times are late afternoon (3-6pm) when everyone heads back. Weekends are busier during snowbird season.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Pro tip:</strong> Schedule appointments for early morning, finish by early afternoon, and cross back before the rush. Many clinics open at 7 or 8am.
              </p>
            </div>

            <h2 id="logistics" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Trip Logistics</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Where to Stay</h3>

            <p className="text-gray-700 mb-4">
              <strong>Option 1: Yuma, AZ (recommended)</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>More hotel options (chains, Airbnb)</li>
              <li>American amenities and restaurants</li>
              <li>15-minute drive to the border</li>
              <li>Good for nervous first-timers</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Option 2: Los Algodones (in town)</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Hacienda Los Algodones is the main hotel (~$50-80/night)</li>
              <li>Walking distance to clinics</li>
              <li>No daily border crossing</li>
              <li>More immersive experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How Long to Stay</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Stay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Cleaning, fillings, simple extraction</td>
                    <td className="border border-gray-300 px-4 py-3">Day trip</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Crown or bridge (if same-day lab)</td>
                    <td className="border border-gray-300 px-4 py-3">Day trip or 1 night</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Multiple crowns, root canal + crown</td>
                    <td className="border border-gray-300 px-4 py-3">2-3 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Implant placement (stage 1)</td>
                    <td className="border border-gray-300 px-4 py-3">2-3 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Implant + crown (requires healing)</td>
                    <td className="border border-gray-300 px-4 py-3">Two trips, 3-6 months apart</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">All-on-4 (same-day teeth)</td>
                    <td className="border border-gray-300 px-4 py-3">4-5 days + return for final</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Money & Payment</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cash (USD):</strong> Accepted everywhere, often preferred</li>
              <li><strong>Credit cards:</strong> Most clinics accept Visa/MC (sometimes 3-4% fee)</li>
              <li><strong>ATMs:</strong> Available but may have fees; bring cash from US</li>
              <li><strong>Payment plans:</strong> Some clinics offer financing for major work</li>
            </ul>

            <h2 id="what-to-expect" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What to Expect at the Clinic</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Typical Visit</h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Exam and X-rays:</strong> Full evaluation, usually free or low cost</li>
              <li><strong>Treatment plan:</strong> Written quote for all recommended work</li>
              <li><strong>Discussion:</strong> Time to ask questions, negotiate, or get second opinions</li>
              <li><strong>Treatment:</strong> Often same-day for many procedures</li>
              <li><strong>Post-op instructions:</strong> Aftercare guidance and emergency contacts</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Language</h3>

            <p className="text-gray-700 mb-4">
              English is widely spoken in Los Algodones dental clinics. Many dentists trained in the US or have staff who are bilingual. Communication is rarely an issue.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quality Expectations</h3>

            <p className="text-gray-700 mb-4">
              Quality varies by clinic, just like anywhere. Top Los Algodones clinics produce work comparable to good US dentists. However, the extreme concentration of clinics means some lower-quality operators exist too—hence the importance of vetting.
            </p>

            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insider Tips</h2>

            <div className="bg-cyan-50 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-4">15 Tips for Your Los Algodones Trip</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Book your appointment before arriving—especially for complex work</li>
                <li>Bring your recent X-rays (digital on phone or USB is fine)</li>
                <li>Get a written treatment plan with itemized costs before starting</li>
                <li>Start early—border lines grow in the afternoon</li>
                <li>Carry your passport on your person, not in your car</li>
                <li>Bring cash (USD) for best prices and avoid credit card fees</li>
                <li>Don&apos;t fall for street hustlers offering to &quot;find you a dentist&quot;</li>
                <li>Get a second opinion if a treatment plan seems excessive</li>
                <li>Ask about warranties—many clinics offer them on major work</li>
                <li>Take before/after photos of your own</li>
                <li>Plan for numbness—eating after dental work is awkward</li>
                <li>Bring sunscreen and water (it&apos;s desert climate)</li>
                <li>Check customs limits for medications/prescriptions</li>
                <li>Save receipts for HSA/FSA reimbursement</li>
                <li>Join Facebook groups for current recommendations</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Bonus: Other Services</h3>

            <p className="text-gray-700 mb-4">
              While you&apos;re there, Los Algodones is also known for:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Optical shops:</strong> Prescription glasses for $40-100</li>
              <li><strong>Pharmacies:</strong> Many medications cheaper (some require US prescription)</li>
              <li><strong>Restaurants:</strong> Surprisingly good food at Mexican prices</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Planning Dental Work in Mexico?</h3>
            <p className="mb-6 text-cyan-100">
              Compare Los Algodones with other Mexican dental destinations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/guides/mexico-dental-guide"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
              >
                Complete Mexico Dental Guide
              </Link>
              <Link
                href="/guides/all-on-4-dental-implants-mexico"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                All-on-4 Implants Mexico
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for informational purposes only. We do not endorse specific dental clinics. Dental tourism involves risks including complications that may need follow-up care in your home country. Always verify credentials, read current reviews, and consider getting a US dentist&apos;s opinion on major treatment plans. Prices quoted are estimates and may vary.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Patients Beyond Borders: Medical Tourism Statistics</li>
              <li>• ADA (American Dental Association): Average US Dental Costs</li>
              <li>• CBP (US Customs and Border Protection): Wait time data</li>
              <li>• Patient review aggregators: Google, Dental Departures, Yelp</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
