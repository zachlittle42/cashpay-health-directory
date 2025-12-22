import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Panama Stem Cell Therapy Guide: Golden Cells, Costs & Clinics | VitalityScout',
  description: 'Complete guide to stem cell therapy in Panama. Stem Cell Institute, Golden Cells (umbilical cord MSCs), NFL athlete testimonials. Costs $25,000-60,000.',
};

export default function PanamaStemCellGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Panama Stem Cell Therapy Guide',
    description: 'Comprehensive guide to stem cell treatment in Panama City',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; All Guides
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🇵🇦</span>
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Longevity Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stem Cell Therapy in Panama: Complete Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Panama City is home to the Stem Cell Institute, pioneers of &quot;Golden Cells&quot; therapy.
            NFL players and celebrities travel here for regenerative treatments not available in the US.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">20 min read</span>
            <span className="bg-gray-100 px-3 py-1.5 rounded-full">Updated Dec 2024</span>
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full">4-5 hour flight</span>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Stem cell treatments in Panama are NOT approved by the US FDA.</strong> The FDA has issued
            warnings about unproven stem cell therapies. While Panama permits these treatments under its
            own regulatory framework, efficacy and long-term safety have not been established in
            controlled clinical trials.
          </p>
          <p className="text-sm text-red-800">
            This guide is for educational purposes only. Consult with your physician before pursuing
            any treatment abroad. We do not endorse or guarantee the efficacy of any treatment or clinic.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-bold text-gray-900 mb-4">In This Guide</h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#why-panama" className="text-blue-600 hover:underline">Why Panama for Stem Cells?</a>
            <a href="#golden-cells" className="text-blue-600 hover:underline">What Are Golden Cells?</a>
            <a href="#clinics" className="text-blue-600 hover:underline">Panama Stem Cell Clinics</a>
            <a href="#costs" className="text-blue-600 hover:underline">Costs & What&apos;s Included</a>
            <a href="#conditions" className="text-blue-600 hover:underline">Conditions Treated</a>
            <a href="#process" className="text-blue-600 hover:underline">Treatment Process</a>
            <a href="#celebrity" className="text-blue-600 hover:underline">NFL & Celebrity Patients</a>
            <a href="#risks" className="text-blue-600 hover:underline">Risks & Considerations</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-8 prose prose-lg">

        <h2 id="why-panama">Why Panama for Stem Cell Therapy?</h2>

        <p>
          Panama has positioned itself as a <strong>premium destination for regenerative medicine</strong>,
          attracting patients who want advanced stem cell protocols not available in the United States.
          Unlike Mexico (which competes on price) or the Cayman Islands (which emphasizes regulation),
          Panama&apos;s appeal is its <strong>pioneering role in umbilical cord stem cell therapy</strong>.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <h3 className="font-bold text-blue-900 mb-4">Why Patients Choose Panama</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Pioneer of &quot;Golden Cells&quot; (umbilical cord MSCs)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>NFL players and celebrities treated here</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>More advanced protocols than US</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Uses USD - no currency exchange needed</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Same timezone as US East Coast</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>4-5 hour direct flights from most US cities</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Excellent English in medical settings</span>
            </div>
            <div className="flex gap-2">
              <span className="text-green-600">✓</span>
              <span>Modern, first-world infrastructure</span>
            </div>
          </div>
        </div>

        <h2 id="golden-cells">What Are &quot;Golden Cells&quot;?</h2>

        <p>
          The term &quot;Golden Cells&quot; was coined by the Stem Cell Institute in Panama to describe their
          proprietary <strong>umbilical cord-derived mesenchymal stem cells (UC-MSCs)</strong>. These cells
          are harvested from donated umbilical cords after healthy births and processed in their
          on-site laboratory.
        </p>

        <h3>Why Umbilical Cord Stem Cells?</h3>

        <ul>
          <li>
            <strong>Young and potent:</strong> Umbilical cord cells are &quot;young&quot; with high proliferative
            capacity, unlike autologous (your own) cells which age with you
          </li>
          <li>
            <strong>No surgery required:</strong> Unlike bone marrow or adipose-derived cells, there&apos;s
            no extraction procedure on the patient
          </li>
          <li>
            <strong>Immunologically privileged:</strong> UC-MSCs have low immunogenicity, reducing
            rejection risk
          </li>
          <li>
            <strong>Ethical sourcing:</strong> Obtained from donated tissue that would otherwise
            be discarded
          </li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-amber-900 mb-2">Important Caveat</h4>
          <p className="text-sm text-amber-800">
            While UC-MSCs show promise in research, their efficacy for specific conditions has
            not been proven in large-scale randomized controlled trials. Most evidence comes
            from case studies, small trials, and anecdotal reports. Results vary widely.
          </p>
        </div>

        <h2 id="clinics">Panama Stem Cell Clinics</h2>

        <h3>Stem Cell Institute (Primary Clinic)</h3>

        <p>
          Founded by <strong>Neil Riordan, PhD</strong>, the Stem Cell Institute is Panama&apos;s
          flagship regenerative medicine facility and the origin of &quot;Golden Cells&quot; therapy.
          Dr. Riordan has published extensively on stem cell therapy and wrote &quot;Stem Cell Therapy:
          A Rising Tide&quot; about his work.
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-gray-900 mb-4">Stem Cell Institute Panama</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-500">Founded:</span>
              <span className="ml-2 font-medium">2007</span>
            </div>
            <div>
              <span className="text-gray-500">Location:</span>
              <span className="ml-2 font-medium">Panama City</span>
            </div>
            <div>
              <span className="text-gray-500">Patients Treated:</span>
              <span className="ml-2 font-medium">10,000+</span>
            </div>
            <div>
              <span className="text-gray-500">Cell Type:</span>
              <span className="ml-2 font-medium">Umbilical Cord MSCs</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Notable:</strong> Treated NFL players including George Kittle, Kyle Juszczyk,
              and reportedly Peyton Manning. Featured in documentaries and media coverage.
            </p>
          </div>
        </div>

        <h2 id="costs">Costs & What&apos;s Included</h2>

        <p>
          Panama is a <strong>premium destination</strong> - expect to pay significantly more than
          Mexico but for what clinics claim is a more advanced protocol with higher cell counts
          and better quality control.
        </p>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Treatment</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Price Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Cell Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Standard Protocol</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$25,000-35,000</td>
                <td className="border border-gray-200 px-4 py-3">50-100 million cells</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Golden Cells (Comprehensive)</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$45,000-60,000</td>
                <td className="border border-gray-200 px-4 py-3">200+ million cells</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3">Exosome Therapy</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$12,000-20,000</td>
                <td className="border border-gray-200 px-4 py-3">N/A (exosome-based)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3">Follow-up Treatment</td>
                <td className="border border-gray-200 px-4 py-3 font-semibold text-green-600">$15,000-25,000</td>
                <td className="border border-gray-200 px-4 py-3">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>What&apos;s Typically Included</h3>

        <ul>
          <li>Initial consultation and medical evaluation</li>
          <li>Pre-treatment labs and diagnostics</li>
          <li>Stem cell infusions (IV and/or targeted injection)</li>
          <li>Post-treatment monitoring</li>
          <li>Airport transfers (many clinics)</li>
          <li>Coordination with local hotels</li>
          <li>Follow-up telemedicine consultations</li>
        </ul>

        <h3>Not Included (Budget Separately)</h3>

        <ul>
          <li>Flights ($300-800 from most US cities)</li>
          <li>Hotel accommodation ($100-250/night)</li>
          <li>Meals and incidentals</li>
          <li>Travel medical insurance</li>
          <li>Additional treatments or repeat visits</li>
        </ul>

        <h2 id="conditions">Conditions Treated</h2>

        <p>
          Clinics in Panama treat a wide range of conditions with stem cell therapy. It&apos;s important
          to note that <strong>evidence varies significantly by condition</strong> - some have more
          research support than others.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">More Research Support</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Orthopedic conditions (joint pain, arthritis)</li>
              <li>Autoimmune conditions (MS, Crohn&apos;s, rheumatoid arthritis)</li>
              <li>COPD and lung conditions</li>
              <li>Post-stroke recovery</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mb-3">Less/Emerging Evidence</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Anti-aging/longevity</li>
              <li>Autism spectrum disorders</li>
              <li>Chronic fatigue syndrome</li>
              <li>Athletic performance enhancement</li>
            </ul>
          </div>
        </div>

        <h2 id="process">Treatment Process</h2>

        <h3>Typical Timeline (5-7 Days)</h3>

        <div className="not-prose my-8 space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              1
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Day 1: Arrival & Consultation</h4>
              <p className="text-sm text-gray-600">
                Airport pickup, hotel check-in, initial medical consultation, review of medical
                history, treatment planning.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              2
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Day 2: Pre-Treatment</h4>
              <p className="text-sm text-gray-600">
                Blood work, any additional diagnostics, preparation for treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              3-4
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Days 3-4: Treatment</h4>
              <p className="text-sm text-gray-600">
                Stem cell infusions - typically IV administration over several sessions.
                Some protocols include targeted injections for specific conditions.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
              5-7
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Days 5-7: Recovery & Departure</h4>
              <p className="text-sm text-gray-600">
                Monitoring, post-treatment instructions, follow-up plan discussion, departure.
              </p>
            </div>
          </div>
        </div>

        <h2 id="celebrity">NFL & Celebrity Patients</h2>

        <p>
          Panama&apos;s Stem Cell Institute has gained visibility through <strong>high-profile patients</strong>,
          particularly NFL players seeking recovery from injuries or performance optimization.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-blue-900 mb-4">Notable Reported Patients</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <strong>George Kittle</strong> (San Francisco 49ers TE) - Openly discussed his
              Panama treatment for recovery and longevity
            </li>
            <li>
              <strong>Kyle Juszczyk</strong> (San Francisco 49ers FB) - Traveled with Kittle
              for stem cell treatment
            </li>
            <li>
              <strong>Peyton Manning</strong> (retired QB) - Reportedly treated in Panama
              during career for neck injury
            </li>
            <li>
              <strong>Mel Gibson</strong> - Publicly discussed stem cell treatment for his father
            </li>
          </ul>
          <p className="text-xs text-blue-700 mt-4">
            Note: Celebrity endorsement does not constitute medical evidence. Individual results vary.
          </p>
        </div>

        <h2 id="risks">Risks & Considerations</h2>

        <h3>Medical Risks</h3>

        <ul>
          <li>
            <strong>Infection risk:</strong> Any injection carries infection risk, though
            reputable clinics maintain sterile protocols
          </li>
          <li>
            <strong>Immune reaction:</strong> Though rare with UC-MSCs, allergic reactions
            are possible
          </li>
          <li>
            <strong>Tumor risk:</strong> Theoretical concern with any cell therapy, though
            not documented with properly screened UC-MSCs
          </li>
          <li>
            <strong>Treatment failure:</strong> Stem cells may not produce desired results -
            this is perhaps the most common &quot;adverse event&quot;
          </li>
        </ul>

        <h3>Practical Considerations</h3>

        <ul>
          <li>
            <strong>Cost:</strong> $25,000-60,000+ is significant - ensure you can afford it
            without financial hardship
          </li>
          <li>
            <strong>No guarantees:</strong> Results vary widely and are not guaranteed
          </li>
          <li>
            <strong>Follow-up care:</strong> Your US doctor may not be familiar with or
            supportive of international stem cell treatment
          </li>
          <li>
            <strong>Insurance:</strong> Not covered by any US health insurance
          </li>
          <li>
            <strong>Return visits:</strong> Some conditions require multiple treatments over time
          </li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 not-prose my-8">
          <h4 className="font-bold text-red-900 mb-3">Red Flags to Avoid</h4>
          <ul className="space-y-2 text-sm text-red-800">
            <li>Clinics that guarantee specific results or &quot;cures&quot;</li>
            <li>Pressure to decide quickly or pay deposits before consultation</li>
            <li>Lack of transparency about cell sourcing and processing</li>
            <li>Unwillingness to discuss risks or alternative treatments</li>
            <li>No credentials or verifiable track record</li>
          </ul>
        </div>

        <h2>Panama vs. Other Stem Cell Destinations</h2>

        <div className="overflow-x-auto not-prose my-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Panama</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Mexico</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Cayman</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Cost</td>
                <td className="border border-gray-200 px-4 py-3">$25,000-60,000</td>
                <td className="border border-gray-200 px-4 py-3">$3,750-25,000</td>
                <td className="border border-gray-200 px-4 py-3">$30,000-60,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Focus</td>
                <td className="border border-gray-200 px-4 py-3">UC-MSCs &quot;Golden Cells&quot;</td>
                <td className="border border-gray-200 px-4 py-3">Various (volume)</td>
                <td className="border border-gray-200 px-4 py-3">Expanded cells</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Regulation</td>
                <td className="border border-gray-200 px-4 py-3">Moderate</td>
                <td className="border border-gray-200 px-4 py-3">Varies</td>
                <td className="border border-gray-200 px-4 py-3">Strictest</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 font-medium">Flight Time</td>
                <td className="border border-gray-200 px-4 py-3">4-5 hours</td>
                <td className="border border-gray-200 px-4 py-3">2-4 hours</td>
                <td className="border border-gray-200 px-4 py-3">1 hour (Miami)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium">Celebrity Draw</td>
                <td className="border border-gray-200 px-4 py-3">High (NFL)</td>
                <td className="border border-gray-200 px-4 py-3">Moderate</td>
                <td className="border border-gray-200 px-4 py-3">Lower</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Bottom Line</h2>

        <p>
          Panama is the <strong>premium choice for Americans seeking stem cell therapy</strong>,
          particularly those drawn by the Stem Cell Institute&apos;s track record, celebrity patients,
          and pioneering work with umbilical cord cells. It&apos;s not the cheapest option, but it&apos;s
          positioned as a quality leader with significant experience.
        </p>

        <p>
          That said, stem cell therapy remains an <strong>unproven treatment</strong> for most
          conditions. Go in with realistic expectations, do thorough research, consult with
          your own physicians, and only proceed if you can afford the financial and health risks.
        </p>

      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/destinations/panama" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇵🇦</span>
              <h3 className="font-bold text-gray-900 mb-1">Panama Destination Guide</h3>
              <p className="text-sm text-gray-600">Travel info, costs, practical details</p>
            </Link>
            <Link href="/guides/mexico-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <span className="text-2xl mb-2 block">🇲🇽</span>
              <h3 className="font-bold text-gray-900 mb-1">Mexico Stem Cell Guide</h3>
              <p className="text-sm text-gray-600">More affordable stem cell options</p>
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
            <strong>Medical Disclaimer:</strong> This guide is for educational and informational
            purposes only. The treatments described are legal in Panama but are NOT approved by
            the US FDA for the conditions discussed.
          </p>
          <p className="mb-3">
            The FDA has issued warnings about unproven stem cell and regenerative treatments.
            Consult with your physician before pursuing any treatment abroad.
          </p>
          <p>
            VitalityScout does not endorse or guarantee the efficacy of any treatment or clinic
            mentioned. Information is based on publicly available sources and clinic-provided
            materials as of December 2024.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
