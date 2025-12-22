import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Colombia Stem Cell Therapy Guide: BioXcellerator, Medellin Clinics | VitalityScout',
  description: 'Complete guide to stem cell therapy in Colombia. BioXcellerator, Medellin clinics, all-inclusive packages. Costs $8,000-35,000 with 40-60% savings.',
};

export default function ColombiaStemCellGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Colombia Stem Cell Therapy Guide',
    description: 'Comprehensive guide to stem cell treatment in Medellin and Bogota, Colombia',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-yellow-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; All Guides
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇨🇴</span>
            <span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
              Longevity Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stem Cell Therapy in Colombia: Complete Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Medellin has emerged as a regenerative medicine hub with facilities like BioXcellerator
            offering all-inclusive stem cell packages. Combine world-class treatment with the
            &quot;City of Eternal Spring.&quot;
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">18 min read</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">Updated Dec 2024</span>
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full">40-60% savings</span>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Stem cell treatments in Colombia are NOT approved by the US FDA.</strong> Colombia
            regulates these treatments through INVIMA (drug surveillance agency), but efficacy and
            long-term safety have not been established in large-scale clinical trials.
          </p>
          <p className="text-sm text-red-800">
            This guide is for educational purposes only. Consult with your physician before pursuing
            any treatment abroad.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-bold text-gray-900 mb-4">In This Guide</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#why-colombia" className="text-blue-600 hover:underline">Why Colombia?</a>
            <a href="#bioxcellerator" className="text-blue-600 hover:underline">BioXcellerator Deep Dive</a>
            <a href="#clinics" className="text-blue-600 hover:underline">Other Colombia Clinics</a>
            <a href="#costs" className="text-blue-600 hover:underline">Costs & Packages</a>
            <a href="#medellin" className="text-blue-600 hover:underline">Medellin vs Bogota</a>
            <a href="#process" className="text-blue-600 hover:underline">Treatment Process</a>
            <a href="#safety" className="text-blue-600 hover:underline">Safety Considerations</a>
            <a href="#comparison" className="text-blue-600 hover:underline">Colombia vs Other Destinations</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 prose prose-lg">

        <h2 id="why-colombia">Why Colombia for Stem Cell Therapy?</h2>

        <p>
          Colombia has positioned itself as a <strong>value-focused regenerative medicine destination</strong>,
          offering significant cost savings compared to Panama or the Cayman Islands while still
          providing modern facilities and high cell counts. The country&apos;s appeal lies in its
          combination of quality, affordability, and beautiful recovery destinations.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 not-prose my-8">
          <h3 className="font-bold text-yellow-900 mb-4">Why Patients Choose Colombia</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>40-60% savings vs Panama/Cayman</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>BioXcellerator offers 300+ million cells</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>All-inclusive packages with on-site hotels</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Medellin: &quot;City of Eternal Spring&quot; - perfect climate</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>4-5 hour flights from Miami</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Same timezone as US East Coast</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>INVIMA regulatory oversight</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Growing medical tourism infrastructure</span>
            </div>
          </div>
        </div>

        <h2 id="bioxcellerator">BioXcellerator: Colombia&apos;s Flagship Facility</h2>

        <p>
          <strong>BioXcellerator</strong> in Medellin is Colombia&apos;s most prominent stem cell facility
          and the primary draw for international patients. Their all-in-one model includes
          treatment facilities, laboratory, and on-site hotel in a single campus.
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-gray-900 mb-4">BioXcellerator Medellin</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-500">Location:</span>
              <span className="ml-2 font-medium">Medellin, El Poblado</span>
            </div>
            <div>
              <span className="text-gray-500">Cell Type:</span>
              <span className="ml-2 font-medium">Umbilical Cord MSCs</span>
            </div>
            <div>
              <span className="text-gray-500">Cell Count:</span>
              <span className="ml-2 font-medium">Up to 300+ million</span>
            </div>
            <div>
              <span className="text-gray-500">Facility:</span>
              <span className="ml-2 font-medium">All-in-one with hotel</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Unique:</strong> On-site lab processes cells on campus. Patients stay at
              affiliated hotel steps from treatment rooms. All-inclusive packages available.
            </p>
          </div>
        </div>

        <h3>BioXcellerator Treatment Options</h3>

        <ul>
          <li>
            <strong>Performance Protocol:</strong> For athletes and active individuals
            seeking recovery and optimization
          </li>
          <li>
            <strong>Anti-Aging Protocol:</strong> High-dose cells targeting overall
            rejuvenation and longevity
          </li>
          <li>
            <strong>Orthopedic Protocol:</strong> Targeted joint injections for arthritis,
            injuries, and degenerative conditions
          </li>
          <li>
            <strong>Autoimmune Protocol:</strong> For conditions like MS, Crohn&apos;s, rheumatoid
            arthritis
          </li>
        </ul>

        <h2 id="clinics">Other Colombia Stem Cell Clinics</h2>

        <div className="not-prose my-8 space-y-4">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">Stemwell (Bogota)</h4>
            <p className="text-sm text-gray-600 mb-3">
              Specializes in high-concentration umbilical cord MSCs. Based in the capital
              with strong orthopedic focus.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-500">Price Range: <span className="text-green-600 font-medium">$10,000-25,000</span></span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">Alevy Stem Cell Clinic (Multiple)</h4>
            <p className="text-sm text-gray-600 mb-3">
              Locations in Bogota and Medellin. Offers both autologous and allogeneic
              stem cell options.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-500">Price Range: <span className="text-green-600 font-medium">$8,000-20,000</span></span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">MDE Care (Medellin)</h4>
            <p className="text-sm text-gray-600 mb-3">
              Medical tourism facilitator connecting patients with verified clinics.
              Coordination services for stem cell treatments.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-500">Coordination + Treatment</span>
            </div>
          </div>
        </div>

        <h2 id="costs">Costs & All-Inclusive Packages</h2>

        <p>
          Colombia offers <strong>significant savings</strong> compared to Panama or the Cayman Islands,
          while still providing high cell counts and modern facilities. Many clinics offer all-inclusive
          packages that simplify planning.
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Treatment</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Colombia Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Panama Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Standard Protocol (50M cells)</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$8,000-12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-500">$25,000-35,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Premium Protocol (300M+ cells)</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$25,000-35,000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-500">$45,000-60,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">PRP Therapy</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$500-1,000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-500">$1,500-3,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Exosome Therapy</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$8,000-15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-500">$12,000-20,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>What&apos;s Included (BioXcellerator Example)</h3>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-green-900 mb-3">Typical All-Inclusive Package</h4>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div className="flex gap-2"><span className="text-green-600">✓</span> Airport transfers</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> 5-7 nights accommodation</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> All meals during stay</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> Medical consultations</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> Lab work and diagnostics</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> Stem cell infusions</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> Post-treatment monitoring</div>
            <div className="flex gap-2"><span className="text-green-600">✓</span> Follow-up telemedicine</div>
          </div>
        </div>

        <h2 id="medellin">Medellin vs Bogota</h2>

        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-orange-50 rounded-lg p-5">
            <h4 className="font-bold text-orange-900 mb-3">Medellin</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Climate:</strong> Perfect year-round (72-82°F)</li>
              <li><strong>Altitude:</strong> 5,000 ft - moderate</li>
              <li><strong>Main Clinic:</strong> BioXcellerator</li>
              <li><strong>Vibe:</strong> Modern, tourist-friendly</li>
              <li><strong>Safety:</strong> El Poblado is safe for tourists</li>
              <li><strong>Recovery:</strong> Great restaurants, culture</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Bogota</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Climate:</strong> Cooler (45-66°F)</li>
              <li><strong>Altitude:</strong> 8,600 ft - high (acclimate!)</li>
              <li><strong>Main Clinic:</strong> Stemwell</li>
              <li><strong>Vibe:</strong> Business capital, larger city</li>
              <li><strong>Safety:</strong> More varied by neighborhood</li>
              <li><strong>Recovery:</strong> More options, larger city</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 not-prose my-8">
          <p className="text-sm text-amber-800">
            <strong>Altitude Warning:</strong> Bogota is at 8,600 feet - higher than Denver.
            Some patients experience altitude sickness. If you have heart or lung conditions,
            Medellin (5,000 ft) may be a better choice. Acclimate before treatment.
          </p>
        </div>

        <h2 id="process">Treatment Process</h2>

        <h3>Typical Timeline (5-7 Days)</h3>

        <div className="not-prose my-8 space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">
              1
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Day 1: Arrival</h4>
              <p className="text-sm text-gray-600">
                Airport pickup, facility check-in, initial consultation and medical history review.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Day 2: Evaluation</h4>
              <p className="text-sm text-gray-600">
                Blood work, diagnostics, treatment planning based on your specific condition.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">
              3-5
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Days 3-5: Treatment</h4>
              <p className="text-sm text-gray-600">
                Stem cell infusions over multiple sessions. IV administration and/or
                targeted injections depending on protocol.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold">
              6-7
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Days 6-7: Recovery & Departure</h4>
              <p className="text-sm text-gray-600">
                Post-treatment monitoring, recovery time, follow-up instructions, departure.
              </p>
            </div>
          </div>
        </div>

        <h2 id="safety">Safety Considerations</h2>

        <h3>Medical Considerations</h3>

        <ul>
          <li>
            <strong>Altitude:</strong> Bogota is very high (8,600 ft) - can cause issues
          </li>
          <li>
            <strong>Regulation:</strong> INVIMA provides oversight but standards may differ from US
          </li>
          <li>
            <strong>Quality varies:</strong> Stick to established clinics with verifiable track records
          </li>
          <li>
            <strong>Follow-up:</strong> Ensure you have a plan for care when you return to the US
          </li>
        </ul>

        <h3>Travel Safety</h3>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-amber-900 mb-3">Colombia Safety Tips</h4>
          <ul className="space-y-2 text-sm text-amber-800">
            <li>Stay in safe neighborhoods (El Poblado in Medellin, Zona Rosa in Bogota)</li>
            <li>Use clinic-arranged transportation, not random taxis</li>
            <li>Don&apos;t flash valuables or wander unfamiliar areas at night</li>
            <li>Colombia has transformed significantly but situational awareness is important</li>
            <li>Medical tourism areas are generally very safe and tourist-friendly</li>
          </ul>
        </div>

        <h2 id="comparison">Colombia vs Other Destinations</h2>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Colombia</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Mexico</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Panama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Cost</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">$8,000-35,000</td>
                <td className="border border-gray-200 px-4 py-3">$3,750-25,000</td>
                <td className="border border-gray-200 px-4 py-3">$25,000-60,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Focus</td>
                <td className="border border-gray-200 px-4 py-3">High cell count, all-inclusive</td>
                <td className="border border-gray-200 px-4 py-3">Volume, accessibility</td>
                <td className="border border-gray-200 px-4 py-3">Premium, celebrity</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Top Clinic</td>
                <td className="border border-gray-200 px-4 py-3">BioXcellerator</td>
                <td className="border border-gray-200 px-4 py-3">R3 Stem Cell</td>
                <td className="border border-gray-200 px-4 py-3">Stem Cell Institute</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Flight Time</td>
                <td className="border border-gray-200 px-4 py-3">4-5 hours</td>
                <td className="border border-gray-200 px-4 py-3">2-4 hours</td>
                <td className="border border-gray-200 px-4 py-3">4-5 hours</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Experience</td>
                <td className="border border-gray-200 px-4 py-3">All-inclusive resort</td>
                <td className="border border-gray-200 px-4 py-3">Clinic + separate hotel</td>
                <td className="border border-gray-200 px-4 py-3">Clinical + hotel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Bottom Line</h2>

        <p>
          Colombia offers a <strong>strong middle ground</strong> between budget Mexico options and
          premium Panama pricing. BioXcellerator&apos;s all-inclusive model and high cell counts
          make it attractive for patients who want a comprehensive experience without the
          Panama price tag.
        </p>

        <p>
          Medellin&apos;s perfect climate and modernized infrastructure make recovery pleasant,
          while the all-inclusive packages remove logistical stress. Just remember that
          <strong>stem cell therapy remains unproven</strong> for most conditions - go in with
          realistic expectations.
        </p>

      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/destinations/colombia" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇨🇴</span>
              <h3 className="font-bold text-gray-900 mb-1">Colombia Destination Guide</h3>
              <p className="text-sm text-gray-600">Travel info, cities, practical details</p>
            </Link>
            <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇵🇦</span>
              <h3 className="font-bold text-gray-900 mb-1">Panama Stem Cell Guide</h3>
              <p className="text-sm text-gray-600">Premium Golden Cells option</p>
            </Link>
            <Link href="/longevity" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">⏳</span>
              <h3 className="font-bold text-gray-900 mb-1">Longevity Hub</h3>
              <p className="text-sm text-gray-600">All longevity treatments & clinics</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-600">
          <p className="mb-3">
            <strong>Medical Disclaimer:</strong> This guide is for educational purposes only.
            Treatments described are legal in Colombia under INVIMA oversight but are NOT
            approved by the US FDA.
          </p>
          <p>
            Consult with your physician before pursuing any treatment abroad. VitalityScout does
            not endorse or guarantee the efficacy of any treatment or clinic mentioned.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
