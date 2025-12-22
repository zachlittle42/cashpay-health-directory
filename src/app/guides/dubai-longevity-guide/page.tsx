import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dubai Longevity & Stem Cell Guide: AEON Clinic, Victor Longevity | VitalityScout',
  description: 'Complete guide to luxury longevity medicine in Dubai. AEON Clinic at Atlantis, stem cells, anti-aging. Costs $15,000-50,000 with world-class hospitality.',
};

export default function DubaiLongevityGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Dubai Longevity & Stem Cell Guide',
    description: 'Comprehensive guide to luxury longevity medicine in Dubai, UAE',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; All Guides
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇦🇪</span>
            <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              Longevity Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dubai Longevity & Stem Cell Guide: Luxury Wellness in the Desert
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Dubai has emerged as a <strong>luxury longevity destination</strong>, combining
            world-class hospitality with cutting-edge regenerative medicine. The AEON Clinic
            at Atlantis The Royal represents the pinnacle of medical luxury.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">15 min read</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">Updated Dec 2024</span>
            <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">Premium tier</span>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Stem cell treatments in Dubai are NOT approved by the US FDA.</strong> The UAE
            regulates these treatments through DHA/MOHAP licensing, but efficacy and long-term safety
            have not been established in large-scale clinical trials.
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
            <a href="#why-dubai" className="text-blue-600 hover:underline">Why Dubai for Longevity?</a>
            <a href="#clinics" className="text-blue-600 hover:underline">Top Dubai Longevity Clinics</a>
            <a href="#aeon" className="text-blue-600 hover:underline">AEON Clinic Deep Dive</a>
            <a href="#treatments" className="text-blue-600 hover:underline">Treatments Available</a>
            <a href="#costs" className="text-blue-600 hover:underline">Costs & Packages</a>
            <a href="#experience" className="text-blue-600 hover:underline">The Luxury Experience</a>
            <a href="#practical" className="text-blue-600 hover:underline">Practical Information</a>
            <a href="#comparison" className="text-blue-600 hover:underline">Dubai vs Other Destinations</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 prose prose-lg">

        <h2 id="why-dubai">Why Dubai for Longevity Medicine?</h2>

        <p>
          Dubai has positioned itself as the <strong>ultimate luxury wellness destination</strong>,
          where five-star hospitality meets cutting-edge medicine. The appeal isn&apos;t cost savings -
          it&apos;s the <strong>experience</strong> of receiving treatment in world-class facilities
          with unmatched service.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 not-prose my-8">
          <h3 className="font-bold text-amber-900 mb-4">Why Patients Choose Dubai</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>First licensed autologous stem cell clinic in Middle East</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>DHA/MOHAP licensing with GMP standards</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Clinics in 5-star hotels (Atlantis The Royal)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Tax-free - no additional costs on treatments</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>World-class hospitality during recovery</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Combine treatment with luxury vacation</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>English spoken everywhere</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Visa on arrival for US citizens</span>
            </div>
          </div>
        </div>

        <h2 id="clinics">Top Dubai Longevity Clinics</h2>

        <h3 id="aeon">AEON Clinic (Atlantis The Royal)</h3>

        <div className="bg-white border-2 border-amber-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-gray-900 mb-4">AEON Clinic</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-500">Location:</span>
              <span className="ml-2 font-medium">Atlantis The Royal, Palm Jumeirah</span>
            </div>
            <div>
              <span className="text-gray-500">Setting:</span>
              <span className="ml-2 font-medium">Ultra-luxury 5-star hotel</span>
            </div>
            <div>
              <span className="text-gray-500">Focus:</span>
              <span className="ml-2 font-medium">Longevity, anti-aging, regenerative</span>
            </div>
            <div>
              <span className="text-gray-500">Price Range:</span>
              <span className="ml-2 font-medium text-green-600">$35,000-50,000+</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>The Experience:</strong> Receive treatment in one of the world&apos;s most
              exclusive hotels. Private suites, dedicated concierge, gourmet nutrition programs,
              and spa recovery integrated into medical protocols.
            </p>
          </div>
        </div>

        <h3>Victor Longevity</h3>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-gray-900 mb-4">Victor Longevity</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-500">Location:</span>
              <span className="ml-2 font-medium">Dubai Healthcare City</span>
            </div>
            <div>
              <span className="text-gray-500">Distinction:</span>
              <span className="ml-2 font-medium">First licensed autologous stem cell clinic in Dubai</span>
            </div>
            <div>
              <span className="text-gray-500">Focus:</span>
              <span className="ml-2 font-medium">Stem cells, regenerative medicine</span>
            </div>
            <div>
              <span className="text-gray-500">Price Range:</span>
              <span className="ml-2 font-medium text-green-600">$25,000-45,000</span>
            </div>
          </div>
        </div>

        <h3>Other Notable Clinics</h3>

        <div className="not-prose my-8 space-y-4">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">Vervé Wellness</h4>
            <p className="text-sm text-gray-600 mb-2">
              Founded by Dr. Ebenezer Abel Paul. Focus on integrative longevity protocols
              combining traditional and regenerative medicine.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2">DNA Health Clinics</h4>
            <p className="text-sm text-gray-600 mb-2">
              Personalized medicine based on genetic testing. Longevity programs tailored
              to individual genetic profiles.
            </p>
          </div>
        </div>

        <h2 id="treatments">Treatments Available</h2>

        <p>
          Dubai longevity clinics offer a comprehensive range of treatments, from advanced
          diagnostics to regenerative therapies. The emphasis is on <strong>personalized protocols</strong>
          combining multiple modalities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">Regenerative</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Autologous stem cell therapy</li>
              <li>Exosome treatments</li>
              <li>PRP/PRF therapies</li>
              <li>NAD+ IV infusions</li>
              <li>Peptide protocols</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">Wellness Modalities</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Hyperbaric oxygen therapy (HBOT)</li>
              <li>Ozone therapy</li>
              <li>IV vitamin infusions</li>
              <li>Cryotherapy</li>
              <li>Red light therapy</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">Diagnostics</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Comprehensive biomarker panels</li>
              <li>Genetic/epigenetic testing</li>
              <li>Full-body MRI screening</li>
              <li>Biological age testing</li>
              <li>Microbiome analysis</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">Lifestyle Integration</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Personalized nutrition programs</li>
              <li>Fitness optimization</li>
              <li>Sleep optimization</li>
              <li>Stress management</li>
              <li>Ongoing health coaching</li>
            </ul>
          </div>
        </div>

        <h2 id="costs">Costs & Packages</h2>

        <p>
          Dubai is firmly in the <strong>premium tier</strong> - you&apos;re paying for luxury experience,
          not cost savings. Expect prices comparable to or higher than Panama or Cayman.
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Treatment/Package</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Stem Cell Treatment</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$25,000-45,000</td>
                <td className="border border-gray-200 px-4 py-3">3-5 days</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">AEON Longevity Protocol</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$35,000-50,000</td>
                <td className="border border-gray-200 px-4 py-3">5-7 days</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Executive Wellness Assessment</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$8,000-20,000</td>
                <td className="border border-gray-200 px-4 py-3">2-3 days</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">IV NAD+ Therapy (course)</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$800-1,500/session</td>
                <td className="border border-gray-200 px-4 py-3">4-6 sessions</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">HBOT (course)</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$300-500/session</td>
                <td className="border border-gray-200 px-4 py-3">10-20 sessions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Additional Costs</h3>

        <ul>
          <li><strong>Flights:</strong> $800-2,000 from US (14-16 hours)</li>
          <li><strong>Hotels:</strong> $300-1,500+/night (luxury expectations)</li>
          <li><strong>If at Atlantis:</strong> $800-3,000+/night</li>
        </ul>

        <h2 id="experience">The Luxury Experience</h2>

        <p>
          What sets Dubai apart is the <strong>integration of luxury hospitality with medical care</strong>.
          At AEON Clinic, for example, you&apos;re receiving treatment in one of the world&apos;s most
          exclusive hotels with access to world-class amenities during recovery.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-amber-900 mb-4">The AEON Experience</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Private suite at Atlantis The Royal</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Dedicated concierge for entire stay</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Gourmet nutrition tailored to treatment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Spa and wellness integration</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Private beach and pool access during recovery</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600">★</span>
              <span>Celebrity-chef restaurants on property</span>
            </li>
          </ul>
        </div>

        <h2 id="practical">Practical Information</h2>

        <h3>Getting There</h3>

        <ul>
          <li><strong>Flight time:</strong> 14-16 hours from US (direct from NYC, LAX, IAD, DFW)</li>
          <li><strong>Visa:</strong> Visa on arrival for US citizens (30 days)</li>
          <li><strong>Airport:</strong> Dubai International (DXB) or Al Maktoum (DWC)</li>
        </ul>

        <h3>Best Time to Visit</h3>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-blue-900 mb-3">Climate Considerations</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-green-700">Best: October-April</span>
              <p className="text-gray-600">Pleasant temperatures (68-86°F), ideal for recovery and tourism</p>
            </div>
            <div>
              <span className="font-semibold text-red-700">Avoid: May-September</span>
              <p className="text-gray-600">Extreme heat (100-115°F), outdoor activities limited</p>
            </div>
          </div>
        </div>

        <h3>Cultural Notes</h3>

        <ul>
          <li><strong>Dress:</strong> Modest dress outside resorts (cover shoulders and knees)</li>
          <li><strong>Alcohol:</strong> Available in hotels and licensed venues only</li>
          <li><strong>Ramadan:</strong> If visiting during Ramadan, be respectful of fasting hours</li>
          <li><strong>Friday:</strong> Weekend day (Friday-Saturday), some reduced hours</li>
        </ul>

        <h2 id="comparison">Dubai vs Other Destinations</h2>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Dubai</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Panama</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Cayman</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Focus</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-amber-600">Luxury experience</td>
                <td className="border border-gray-200 px-4 py-3">Pioneer clinic (NFL)</td>
                <td className="border border-gray-200 px-4 py-3">Strict regulation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Cost</td>
                <td className="border border-gray-200 px-4 py-3">$25,000-50,000</td>
                <td className="border border-gray-200 px-4 py-3">$25,000-60,000</td>
                <td className="border border-gray-200 px-4 py-3">$30,000-60,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Flight Time</td>
                <td className="border border-gray-200 px-4 py-3 text-amber-600">14-16 hours</td>
                <td className="border border-gray-200 px-4 py-3">4-5 hours</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600">1 hour (Miami)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Experience</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-amber-600">Ultra-luxury</td>
                <td className="border border-gray-200 px-4 py-3">Clinical + hotel</td>
                <td className="border border-gray-200 px-4 py-3">Caribbean resort</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Best For</td>
                <td className="border border-gray-200 px-4 py-3">Luxury seekers, vacation combo</td>
                <td className="border border-gray-200 px-4 py-3">NFL/celebrity cachet</td>
                <td className="border border-gray-200 px-4 py-3">Regulation-focused</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Bottom Line</h2>

        <p>
          Dubai is for patients who want the <strong>ultimate luxury experience</strong> combined
          with regenerative medicine. It&apos;s not the closest or cheapest option, but for those
          who can afford it and want to combine treatment with a world-class vacation, Dubai
          delivers an unmatched experience.
        </p>

        <p>
          The long flight from the US is a significant consideration, but direct flights make
          it manageable. And once you arrive, the level of hospitality and service is simply
          unparalleled. If you&apos;re going to invest $30,000-50,000 in longevity treatment,
          Dubai ensures the experience matches the investment.
        </p>

      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/destinations/dubai" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇦🇪</span>
              <h3 className="font-bold text-gray-900 mb-1">Dubai Destination Guide</h3>
              <p className="text-sm text-gray-600">Travel info, costs, practical details</p>
            </Link>
            <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇵🇦</span>
              <h3 className="font-bold text-gray-900 mb-1">Panama Stem Cell Guide</h3>
              <p className="text-sm text-gray-600">Closer alternative with NFL cachet</p>
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
            Stem cell and regenerative treatments in Dubai are NOT approved by the US FDA,
            though they are licensed by UAE regulatory authorities (DHA/MOHAP).
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
