import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'Panama Dental Cost 2026: Implants & Crowns vs US Prices',
  description:
    'Dental implants and crowns in Panama City cost 50-70% less than the US. Implants ~$1,500-2,100 (vs $3,000-6,000), crowns ~$400-750. Estimates, what is included, and how to vet a clinic safely.',
};

export default function PanamaDentalCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Panama Dental Cost (2026): Implants & Crowns vs the US',
    headline: 'How Much Do Dental Implants and Crowns Cost in Panama?',
    description:
      'A grounded, procedure-by-procedure comparison of dental implant and crown costs in Panama City versus the United States, what is included, why it is cheaper, and how to choose an accredited clinic safely.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-10',
    dateModified: '2026-06-10',
    mainEntityOfPage: 'https://vitalityscout.com/guides/panama-dental-cost',
    keywords: [
      'panama dental cost',
      'dental implants panama cost',
      'panama dental implants price',
      'crowns panama cost',
      'dental tourism panama',
      'all-on-4 panama cost',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much do dental implants cost in Panama?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A single dental implant with crown in Panama City typically runs about $1,500-$2,100, compared with roughly $3,000-$6,000 in the United States. A full-arch All-on-4 restoration commonly runs about $10,000-$15,000 per arch in Panama versus $20,000-$35,000 in the US. These are estimates that vary by clinic, implant system, and case complexity, and should be confirmed directly with the provider in a written quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is dental work in Panama safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Panama City has internationally recognized infrastructure, including Hospital Punta Pacifica (Pacifica Salud), a JCI-accredited, Johns Hopkins Medicine International-affiliated hospital that houses dental practices. Many established clinics use the same implant systems used in the US (Straumann, Nobel Biocare, Zimmer Biomet) and have English-speaking staff. Safety depends on the specific clinic and dentist, not the country, so vet credentials, materials, and reviews before booking. This guide compares prices, not outcomes, and does not endorse any clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save on dental work in Panama versus the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most dental procedures in Panama run roughly 50-70% below US prices. On a single implant the gap is often $1,500-$4,000; on a full smile of veneers or a full-arch All-on-4 it can be $10,000 or more. Even after two round-trip flights, hotel, and meals, many patients still save several thousand dollars on larger cases. Smaller, single-tooth cases save less once travel is added in.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Panama dental implant price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A complete single-implant quote in Panama should cover the titanium implant fixture, the abutment, and the final crown, plus the consultation and surgical placement. What is often quoted separately or excluded includes 3D imaging or CT scans, bone grafting or sinus lifts, the temporary versus final (zirconia) prosthesis on full-arch cases, and follow-up visits. Always request an itemized written quote that states exactly what is and is not included.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many trips to Panama does a dental implant take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most single implants require two trips because the implant must integrate with the bone for roughly 3-6 months before the final crown is placed. Crowns, veneers, fillings, and many cosmetic cases can usually be completed in a single visit of a few days. Some clinics offer immediate-load or All-on-4 protocols that place a temporary bridge the same day, with the permanent prosthesis fitted on a later trip. Confirm the trip plan with your clinic before booking flights.',
        },
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Panama Dental Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">🦷</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Panama Dental Cost in 2026: Implants &amp; Crowns vs the US
            </h1>
            <p className="text-xl text-gray-600">
              What you&apos;ll actually pay for implants, crowns, and veneers in Panama City &mdash;
              procedure by procedure, against US prices, with what&apos;s included and how to vet a clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 10 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-emerald-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-emerald-900 mb-3">
              In <strong>Panama City</strong>, a single dental implant with crown typically costs about{' '}
              <strong>$1,500-$2,100</strong>, versus roughly <strong>$3,000-$6,000</strong> in the United States.
              Crowns commonly run <strong>$400-$750</strong> and porcelain veneers <strong>$400-$700 per tooth</strong>.
              A full-arch <strong>All-on-4</strong> runs about <strong>$10,000-$15,000 per arch</strong> in Panama vs{' '}
              <strong>$20,000-$35,000</strong> in the US &mdash; savings of roughly <strong>50-70%</strong>.
            </p>
            <p className="text-sm text-emerald-900 mb-0">
              Every figure here is an <strong>estimate that varies by clinic, implant system, and case</strong> and
              should be confirmed in a written quote. Dental work abroad is not covered by US insurance.
            </p>
          </div>

          <h2>Panama dental cost at a glance: procedure by procedure</h2>
          <p>
            Panama has become one of the more popular dental-tourism destinations in the Americas, partly
            because of geography (it&apos;s a 3-4 hour flight from much of the southern and eastern US) and
            partly because <strong>Panama uses the US dollar</strong>, so there&apos;s no currency conversion to
            puzzle over. The table below compares typical estimates for the most-requested procedures. US
            figures are 2026 national ranges; Panama figures are aggregated from clinic and price-comparison
            sources for Panama City.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">US vs Panama dental cost (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US price</th>
                    <th className="text-left py-2">Typical Panama price</th>
                    <th className="text-left py-2">Approx. savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Single implant (fixture + abutment + crown)</td>
                    <td className="py-2">$3,000-$6,000</td>
                    <td className="py-2">$1,500-$2,100</td>
                    <td className="py-2">~50-65%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Porcelain / PFM crown</td>
                    <td className="py-2">$1,000-$2,500</td>
                    <td className="py-2">$400-$750</td>
                    <td className="py-2">~60-70%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Zirconia crown</td>
                    <td className="py-2">$1,500-$2,500</td>
                    <td className="py-2">$500-$750</td>
                    <td className="py-2">~60-70%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Porcelain veneer (per tooth)</td>
                    <td className="py-2">$1,200-$2,500</td>
                    <td className="py-2">$400-$700</td>
                    <td className="py-2">~60-75%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">All-on-4 (per arch)</td>
                    <td className="py-2">$20,000-$35,000</td>
                    <td className="py-2">$10,000-$15,000</td>
                    <td className="py-2">~40-60%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Root canal (per tooth)</td>
                    <td className="py-2">$1,000-$1,800</td>
                    <td className="py-2">$300-$600</td>
                    <td className="py-2">~55-70%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Full smile (8 porcelain veneers)</td>
                    <td className="py-2">$12,000-$20,000</td>
                    <td className="py-2">$3,200-$5,600</td>
                    <td className="py-2">~60-75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Sources: aggregated 2026 US dental pricing and Panama City clinic / price-comparison data.
              Ranges are estimates only and vary by implant system, materials, and case complexity &mdash;
              confirm an itemized quote with each clinic.
            </p>
          </div>

          <h2>What&apos;s included &mdash; and what&apos;s usually not</h2>
          <p>
            The single biggest source of &quot;surprise&quot; bills in dental tourism is a quote that covers less
            than you assumed. A complete single-implant price should include the <strong>implant fixture, the
            abutment, and the final crown</strong>, plus the consultation and surgical placement. Read every quote
            for what sits <em>outside</em> the headline number:
          </p>
          <ul>
            <li><strong>Imaging</strong> &mdash; panoramic X-rays or a 3D CT scan, often required before implant surgery.</li>
            <li><strong>Bone grafting / sinus lift</strong> &mdash; needed in many cases with bone loss; can add meaningfully to the total.</li>
            <li><strong>Temporary vs final prosthesis</strong> &mdash; on All-on-4 cases, the advertised price frequently covers the implants and a <em>temporary</em> bridge only; the permanent zirconia bridge is extra. Clarify this explicitly.</li>
            <li><strong>Extractions</strong> &mdash; if a failing tooth has to come out first.</li>
            <li><strong>Follow-up visits and the second trip</strong> &mdash; the crown-placement appointment after the implant integrates.</li>
          </ul>
          <p>
            Some clinics offer guarantees worth asking about &mdash; for example, certain Panama City practices
            advertise multi-year warranties on implant work. A warranty is only as good as your ability to return,
            so weigh it against travel cost.
          </p>

          <h2>Why dental work is cheaper in Panama</h2>
          <p>
            Lower price does not come from cutting the actual implant or crown &mdash; reputable Panama clinics use
            the same brand-name implant systems (Straumann, Nobel Biocare, Zimmer Biomet) and the same E.max or
            zirconia crown materials used in US practices. The savings come from <strong>structural cost
            differences</strong>:
          </p>
          <ul>
            <li><strong>Lower overhead</strong> &mdash; labor, facility, and lab costs are a fraction of US levels.</li>
            <li><strong>Lower malpractice and insurance burden</strong> than a typical US practice.</li>
            <li><strong>No insurance middle layer</strong> &mdash; cash-pay pricing avoids the billing markup baked into US insurer-negotiated rates.</li>
            <li><strong>In-house labs</strong> &mdash; many larger clinics fabricate crowns and prosthetics on-site, cutting both cost and turnaround.</li>
          </ul>
          <p>
            A lower price is not, by itself, a quality signal in either direction. Treat cost as one input and the
            clinic&apos;s credentials, materials, and track record as the more important ones.
          </p>

          <h2>How to choose a Panama dental clinic safely</h2>
          <p>
            Safety in dental tourism is a <em>clinic</em> question, not a <em>country</em> question. Panama City has
            genuinely high-end infrastructure &mdash; <strong>Hospital Punta Pacifica (Pacifica Salud)</strong> is a
            JCI-accredited, Johns Hopkins Medicine International-affiliated hospital, and several dental practices
            operate inside or near it. But standalone clinics vary widely. Use this checklist:
          </p>
          <ol>
            <li><strong>Credentials.</strong> Look for dentists with recognized university training (several Panama City implant specialists trained at US universities) and specialization in implantology or prosthodontics for complex work.</li>
            <li><strong>Accreditation / hospital affiliation.</strong> A clinic inside or affiliated with a JCI-accredited hospital adds an infrastructure and emergency-backup layer. Where a clinic claims an accreditation, verify it directly.</li>
            <li><strong>Implant system named in writing.</strong> Ask which implant brand and crown material they&apos;ll use, and get it in the quote. Reputable clinics will tell you.</li>
            <li><strong>Independent reviews.</strong> Cross-check WhatClinic, Google, and aggregator review counts &mdash; volume and recency matter more than a single perfect rating.</li>
            <li><strong>English-language support.</strong> Confirm the team can communicate clearly about consent, aftercare, and complications.</li>
            <li><strong>A clear, itemized written quote</strong> and a stated plan for what happens if something goes wrong after you fly home.</li>
          </ol>
          <p>
            For a deeper look at vetting clinics and red flags that apply across destinations, our{' '}
            <Link href="/guides/los-algodones-reviews" className="text-blue-600 hover:underline font-medium">
              dental-clinic trust guide
            </Link>{' '}walks through credential-checking and review sources in detail.
          </p>

          <h2>Travel, trips &amp; recovery</h2>
          <p>
            Most <strong>single implants require two trips</strong>: one to place the implant, then a return roughly
            3-6 months later (after the implant integrates with the bone) for the final crown. <strong>Crowns,
            veneers, fillings, and most cosmetic work</strong> can usually be done in a single visit of a few days.
            All-on-4 cases often place a temporary bridge the same day, with the permanent prosthesis on a later trip.
          </p>
          <p>
            Beyond the treatment quote, budget for the full trip:
          </p>
          <ul>
            <li><strong>Flights:</strong> roughly $250-$650 round trip from much of the US (3-4 hours from many southern/eastern cities).</li>
            <li><strong>Lodging:</strong> $80-$200/night for a typical 3-5 night stay in Panama City.</li>
            <li><strong>Meals &amp; local transport:</strong> $30-$70/day; many clinics arrange or include airport pickup.</li>
            <li><strong>Recovery time:</strong> plan a few low-key days after surgery; avoid strenuous activity and follow aftercare instructions before flying.</li>
          </ul>
          <p>
            For single-tooth cases, the two-trip airfare can erode the savings; the math is most compelling on
            larger cases (multiple implants, full-arch, or a full set of veneers).
          </p>

          <h2>Financing &amp; how to pay</h2>
          <p>
            US dental insurance generally does <strong>not</strong> reimburse care performed abroad, so plan to pay
            out of pocket. Common ways patients fund a Panama dental trip:
          </p>
          <ul>
            <li><strong>HSA / FSA</strong> &mdash; qualifying dental care can often be paid with pre-tax HSA or FSA dollars; confirm eligibility with your plan administrator first.</li>
            <li><strong>Clinic payment plans</strong> &mdash; some Panama clinics let you start with a partial deposit and pay the balance in installments; ask before you book.</li>
            <li><strong>Medical / personal loans and dental credit lines</strong> (e.g., a personal loan or a dental financing card) &mdash; these don&apos;t depend on insurance, so your ability to pay over time is the gating factor.</li>
            <li><strong>Cash / card</strong> &mdash; because Panama uses USD, there&apos;s no exchange-rate surprise, but confirm card fees in advance.</li>
          </ul>

          <p>
            Comparing Panama to other Latin American dental hubs? Our{' '}
            <Link href="/guides/costa-rica-dental-guide" className="text-blue-600 hover:underline font-medium">
              Costa Rica dental guide
            </Link>{' '}and{' '}
            <Link href="/guides/mexico-dental-guide" className="text-blue-600 hover:underline font-medium">
              Mexico dental guide
            </Link>{' '}break down cost, clinics, and logistics for the two other most-traveled destinations, and our{' '}
            <Link href="/guides/all-on-4-dental-implants-mexico" className="text-blue-600 hover:underline font-medium">
              All-on-4 cost guide
            </Link>{' '}goes deep on full-arch pricing.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much do dental implants cost in Panama?</h3>
              <p className="text-sm text-gray-700 mb-0">
                A single implant with crown typically runs about $1,500-$2,100 in Panama City versus $3,000-$6,000
                in the US. All-on-4 runs roughly $10,000-$15,000 per arch vs $20,000-$35,000 in the US. Estimates
                only &mdash; confirm an itemized written quote with the clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is dental work in Panama safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Panama City has JCI-accredited hospital infrastructure (Hospital Punta Pacifica, a Johns Hopkins
                affiliate) and clinics using the same implant systems as the US. Safety depends on the specific
                clinic and dentist, so vet credentials, materials, and reviews. This guide compares prices, not
                outcomes, and endorses no clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much can I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Roughly 50-70% on most procedures. The savings are largest on big cases (full-arch, multiple
                implants, a full set of veneers); on a single tooth, two round-trip flights can eat much of the gap.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in the implant price?</h3>
              <p className="text-sm text-gray-700 mb-0">
                A complete quote should cover the implant fixture, abutment, and final crown plus consultation and
                placement. Imaging, bone grafting, the permanent (vs temporary) full-arch prosthesis, and follow-up
                visits are often separate &mdash; get it itemized in writing.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How many trips does an implant take?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Usually two: one to place the implant, then a return ~3-6 months later for the crown after the
                implant integrates. Crowns and veneers are often one trip; some All-on-4 protocols place a temporary
                bridge same-day with the permanent piece on a later visit.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical or dental advice.
              Every price shown is an <strong>estimate that varies by clinic, implant system, materials, and
              case</strong> and must be confirmed directly with the provider in a written quote. US dental
              insurance generally does not cover treatment performed abroad.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the outcome, efficacy, or safety of any treatment, clinic,
              or provider. Always consult a licensed dentist about your specific case before pursuing treatment.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/destinations/panama" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Panama Destination Guide</div>
                <div className="text-sm text-gray-600">Why Americans travel to Panama City for care</div>
              </Link>
              <Link href="/dental" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Dental Directory</div>
                <div className="text-sm text-gray-600">Compare accredited clinics &amp; cash-pay pricing</div>
              </Link>
              <Link href="/guides/costa-rica-dental-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Costa Rica Dental Guide</div>
                <div className="text-sm text-gray-600">The neighboring dental hub, side by side</div>
              </Link>
              <Link href="/guides/all-on-4-dental-implants-mexico" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">All-on-4 Cost Guide</div>
                <div className="text-sm text-gray-600">Full-arch pricing and what drives it</div>
              </Link>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/destinations/panama" className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700 text-center">
                Explore Panama Clinics
              </Link>
              <Link href="/dental" className="inline-block rounded-lg border-2 border-emerald-600 px-6 py-3 font-medium text-emerald-600 hover:bg-emerald-50 text-center">
                Browse the Dental Directory
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International (JCI) accreditation</a></li>
              <li>• <a href="https://www.whatclinic.com/dentists/panama/panama-city/implants" target="_blank" rel="noopener" className="text-blue-600 hover:underline">WhatClinic: Dental implants in Panama City (prices &amp; reviews)</a></li>
              <li>• <a href="https://www.medicaltourismpackages.com/dental-implants-panama/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Tourism Packages: Dental Implants in Panama</a></li>
              <li>• <a href="https://surgerycostguide.com/dental-implant-cost/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">US dental implant cost reference (2026)</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Panama Dental Cost & Clinic-Vetting Worksheet"
            description="A printable checklist for comparing implant and crown quotes across Panama clinics — what's included, implant system, accreditation, and total all-in cost."
            source="guide_panama_dental_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
