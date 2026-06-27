import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: { absolute: 'Spain IVF Cost 2026: US vs Spain Price Comparison' },
  alternates: { canonical: 'https://vitalityscout.com/guides/spain-ivf-cost' },
  description:
    'What IVF and egg donation actually cost in Spain in 2026. US IVF runs $15,000-30,000; Spain runs roughly $5,000-9,000 (40-65% less). Cost by procedure, what is included, and how to choose a clinic safely. Estimates to verify with each clinic.',
};

export default function SpainIvfCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Spain IVF Cost (2026): US vs Spain Price Comparison',
    headline: 'How Much Does IVF & Egg Donation Cost in Spain?',
    description:
      'A grounded comparison of IVF and egg-donation costs in Spain versus the United States, broken down procedure by procedure, with what is included, why it is cheaper, and how to vet a clinic safely.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/spain-ivf-cost',
    keywords: [
      'spain ivf cost',
      'ivf spain cost',
      'egg donation spain cost',
      'how much does ivf cost in spain',
      'spain ivf price vs us',
      'donor egg ivf spain cost',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does IVF cost in Spain in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard IVF cycle using your own eggs typically costs roughly €4,000-7,000 (about $4,300-7,600) in Spain before medication, and donor-egg IVF typically runs roughly €6,000-9,500 (about $6,500-10,300). In the United States, a single IVF cycle commonly runs $15,000-30,000 all-in, and donor-egg cycles $25,000-45,000 or more. That puts Spain roughly 40-65% below US pricing for comparable treatment. All figures are estimates that vary by clinic, protocol, and add-ons, and should be confirmed directly with each clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do you save doing IVF in Spain instead of the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most patients the treatment-cost savings land around 40-65%. A US IVF cycle that runs $15,000-30,000 commonly costs the equivalent of $4,300-7,600 in Spain; a US donor-egg cycle of $25,000-45,000 commonly costs $6,500-10,300 in Spain. After adding flights, lodging, and medication, total savings are smaller but still typically meaningful for donor-egg cases. Savings are not a quality or success-rate claim; outcomes depend on age, diagnosis, and the clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Spain IVF price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Spanish clinics quote a cycle price that includes the consultation, ovarian-stimulation monitoring, egg retrieval, fertilisation (often with ICSI), embryo culture, and one fresh transfer. Medications are almost always billed separately (commonly €1,500-4,000), and add-ons such as PGT-A genetic testing, time-lapse embryo monitoring, frozen-embryo storage, and donor matching usually cost extra. Always ask for an itemised quote and confirm exactly what each line covers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is IVF in Spain safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spain has one of the most established and tightly regulated assisted-reproduction sectors in Europe, governed by national law (Ley 14/2006) and the Spanish Fertility Society (SEF) registry, with many clinics also holding ISO 9001 quality certification and ESHRE-accredited embryologists. A lower price does not by itself guarantee quality or a successful outcome, so vetting the specific clinic, its accreditations, and its audited results matters. This page compares prices, not outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does US insurance cover IVF done in Spain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally no. Most US plans that cover fertility treatment at all require in-network US providers, so treatment abroad is typically paid out of pocket. HSA/FSA eligibility for qualifying medical expenses is case-by-case; check with your plan administrator before assuming it applies. Many Spanish clinics offer payment plans or multi-cycle and shared-risk packages, which is a separate question from insurance reimbursement.',
        },
      },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
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
              <span className="text-gray-900">Spain IVF Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">💲</span>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Spain IVF Cost in 2026: What You&apos;ll Actually Pay
            </h1>
            <p className="text-xl text-gray-600">
              IVF and egg donation in Spain, procedure by procedure, compared with US pricing —
              what&apos;s included, why it costs less, and how to choose a clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-rose-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-rose-900 mb-3">
              In <strong>Spain</strong>, a standard <strong>IVF cycle with your own eggs</strong> typically costs
              roughly <strong>€4,000-7,000 (about $4,300-7,600)</strong> before medication, and
              <strong> donor-egg IVF</strong> typically runs <strong>€6,000-9,500 (about $6,500-10,300)</strong>.
              In the <strong>United States</strong>, a single IVF cycle commonly runs <strong>$15,000-30,000</strong> all-in,
              and donor-egg cycles <strong>$25,000-45,000+</strong> — so Spain lands roughly <strong>40-65% below US pricing</strong>.
            </p>
            <p className="text-sm text-rose-900 mb-0">
              Every figure here is an <strong>estimate that varies by clinic, protocol, and add-ons</strong> and should be
              confirmed directly with the clinic. Savings reflect price, not outcomes, which depend on age and diagnosis.
            </p>
          </div>

          <h2>Why &quot;the price of IVF&quot; is never one number</h2>
          <p>
            There is no single sticker price for IVF — in Spain, the US, or anywhere. A clinic&apos;s headline
            &quot;cycle&quot; figure is a starting point, and what you actually pay depends on a handful of variables:
          </p>
          <ul>
            <li><strong>Own eggs vs donor eggs</strong> — donor-egg cycles cost more because of donor screening, matching, and compensation, but are often recommended for older patients or low ovarian reserve.</li>
            <li><strong>Medication</strong> — stimulation drugs are almost always billed separately, commonly €1,500-4,000, and vary with your protocol and dose.</li>
            <li><strong>Add-ons</strong> — PGT-A genetic testing, time-lapse embryo monitoring (Embryoscope/Geri), ICSI, and embryo freezing/storage each add cost.</li>
            <li><strong>Number of attempts</strong> — most patients need more than one cycle for a live birth, so per-cycle price is not the all-in price.</li>
            <li><strong>The clinic and city</strong> — Barcelona and Madrid mega-clinics often price higher than equally accredited centres in Valencia, Alicante, or Seville.</li>
          </ul>
          <p>
            This guide is the cost companion to our broader{' '}
            <Link href="/guides/spain-fertility-ivf-guide" className="text-blue-600 hover:underline font-medium">
              Spain IVF &amp; fertility tourism guide
            </Link>, which covers clinics, the process, and legal requirements in depth. Here we focus on the money.
          </p>

          {/* Cost comparison table */}
          <h2>IVF cost: US vs Spain, procedure by procedure</h2>
          <p>
            The table below compares typical US prices with typical Spain prices for the most common fertility
            procedures. US figures reflect aggregated 2026 clinic pricing; Spain figures are euro ranges converted
            at roughly €1 ≈ $1.08, drawn from Spanish clinic price lists and European fertility-cost surveys.
          </p>

          <div className="bg-white border-2 border-rose-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-rose-900 mt-0 mb-4">Cost comparison (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US price</th>
                    <th className="text-left py-2 text-green-700">Typical Spain price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">IVF cycle (own eggs)</td>
                    <td className="py-2 text-gray-500">$15,000-30,000</td>
                    <td className="py-2 text-green-600 font-semibold">€4,000-7,000 (~$4,300-7,600)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">IVF with donor eggs</td>
                    <td className="py-2 text-gray-500">$25,000-45,000+</td>
                    <td className="py-2 text-green-600 font-semibold">€6,000-9,500 (~$6,500-10,300)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Egg freezing (1 cycle)</td>
                    <td className="py-2 text-gray-500">$10,000-15,000</td>
                    <td className="py-2 text-green-600 font-semibold">€2,500-4,500 (~$2,700-4,900)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">PGT-A genetic testing (per cycle)</td>
                    <td className="py-2 text-gray-500">$3,000-10,000</td>
                    <td className="py-2 text-green-600 font-semibold">€2,000-3,500 (~$2,200-3,800)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Frozen embryo transfer (FET)</td>
                    <td className="py-2 text-gray-500">$3,000-6,000</td>
                    <td className="py-2 text-green-600 font-semibold">€1,500-3,000 (~$1,600-3,200)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">IVF medications</td>
                    <td className="py-2 text-gray-500">$3,000-7,000</td>
                    <td className="py-2 text-green-600 font-semibold">€1,500-4,000 (~$1,600-4,300)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Time-lapse embryo monitoring (add-on)</td>
                    <td className="py-2 text-gray-500">$1,500-3,000</td>
                    <td className="py-2 text-green-600 font-semibold">€300-600 (~$320-650)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Estimates only, June 2026. Spain prices are typical clinic ranges before medication unless noted;
              euro-to-dollar conversion is approximate and fluctuates. Confirm current pricing with each clinic.
            </p>
          </div>

          <h2>What&apos;s included — and what&apos;s usually extra</h2>
          <p>
            Most Spanish clinics quote a &quot;cycle&quot; price that bundles the core medical steps. A typical
            own-egg IVF quote includes:
          </p>
          <ul>
            <li>Initial consultation and treatment planning (often a remote video consult first)</li>
            <li>Ovarian-stimulation monitoring (ultrasounds and bloodwork)</li>
            <li>Egg retrieval under sedation</li>
            <li>Fertilisation in the lab, frequently with ICSI</li>
            <li>Embryo culture</li>
            <li>One fresh embryo transfer</li>
          </ul>
          <p>What is <em>commonly billed separately</em> — and what makes two quotes hard to compare — is:</p>
          <ul>
            <li><strong>Medications</strong> (€1,500-4,000), which you may fill in Spain or at home</li>
            <li><strong>PGT-A genetic testing</strong> (€2,000-3,500 per cycle)</li>
            <li><strong>Time-lapse embryo monitoring</strong> (€300-600)</li>
            <li><strong>Embryo freezing and annual storage</strong></li>
            <li><strong>Donor matching</strong> for donor-egg or donor-sperm cycles</li>
            <li><strong>Frozen embryo transfers</strong> from any extra embryos (€1,500-3,000 each)</li>
          </ul>
          <p>
            The practical move is to ask every clinic for an <strong>itemised, written quote</strong> and normalise on
            exactly which line items are in the headline number. A €5,000 cycle that excludes meds, ICSI, and PGT-A is
            not cheaper than a €6,500 cycle that includes them.
          </p>

          <h2>Why IVF is cheaper in Spain than the US</h2>
          <p>
            Spain&apos;s lower prices are structural, not a sign of cut corners:
          </p>
          <ul>
            <li><strong>Lower operating costs</strong> — labor, facility, and malpractice/liability costs are far lower than in the US, and that flows straight into pricing.</li>
            <li><strong>No US-style insurance markup</strong> — Spanish clinics largely run on transparent cash-pay or domestic-public pricing rather than negotiating against US commercial insurers.</li>
            <li><strong>High volume and specialisation</strong> — Spain performs more assisted-reproduction cycles than almost any country in Europe, and that scale lowers per-cycle cost while sustaining deep expertise.</li>
            <li><strong>A regulated donor framework</strong> — egg donation is legal, anonymous, and well-supplied under Spanish law, so donor-egg cycles avoid the high agency and donor-compensation fees that inflate US donor pricing.</li>
          </ul>
          <p>
            Lower price is not a promise of better — or equal — outcomes. Success depends on your age, diagnosis, and
            the specific clinic&apos;s lab and protocols, so treat price as one input among several.
          </p>

          <h2>How to choose a clinic safely (accreditation)</h2>
          <p>
            Because cost varies so much and outcomes ride on the clinic, vetting matters more than chasing the lowest
            quote. Spain is heavily regulated, which makes verification easier than in many destinations. Look for:
          </p>
          <ul>
            <li><strong>Spanish Fertility Society (SEF) registration</strong> — clinics report results to the national SEF registry; reputable centres reference it.</li>
            <li><strong>ISO 9001 quality certification</strong> — a widely-held lab and process-quality standard among Spain&apos;s established clinics (often audited by bodies like Bureau Veritas or AENOR).</li>
            <li><strong>ESHRE-accredited embryologists / ART-centre certification</strong> — a European marker of laboratory competence.</li>
            <li><strong>Audited, age-stratified success rates</strong> — be cautious of a single headline percentage; ask for results broken down by age and treatment type.</li>
            <li><strong>An international patient department</strong> — English-speaking coordinators, remote monitoring, and clear written quotes.</li>
          </ul>
          <p>
            Established Spanish centres span Barcelona, Madrid, Valencia, Alicante, and Seville. For verified clinic
            profiles, accreditations, and what each is best for, see our{' '}
            <Link href="/fertility" className="text-blue-600 hover:underline font-medium">
              fertility clinic directory
            </Link>{' '}and the clinic section of the{' '}
            <Link href="/destinations/spain" className="text-blue-600 hover:underline font-medium">
              Spain destination guide
            </Link>.
          </p>

          <h2>Travel and recovery costs to budget</h2>
          <p>
            The quoted treatment price is not your all-in cost. For any Spain trip, also budget for:
          </p>
          <ul>
            <li><strong>Flights:</strong> commonly $500-1,200 round trip from the US East Coast to Barcelona or Madrid; more from the West Coast</li>
            <li><strong>Lodging:</strong> roughly $100-250/night; apartments often beat hotels for stays of several nights</li>
            <li><strong>Trip length:</strong> donor-egg or frozen-transfer cycles can be done in a short 3-5 day trip; own-egg cycles need a longer stay or a split-visit protocol</li>
            <li><strong>Meals, local transport, and a flexible booking</strong> in case treatment timing shifts by a day or two</li>
          </ul>
          <p>
            Egg retrieval and embryo transfer are outpatient procedures; most patients rest for 24-48 hours and fly
            home for the two-week wait. The all-in number still typically lands well under a comparable US cycle,
            especially for donor-egg treatment.
          </p>

          <h2>Financing and payment</h2>
          <p>
            US insurance generally won&apos;t reimburse treatment done abroad, so plan to pay out of pocket. That said,
            several options soften the cash hit:
          </p>
          <ul>
            <li><strong>Clinic payment plans</strong> — many Spanish clinics offer instalments on the cycle fee.</li>
            <li><strong>Multi-cycle and shared-risk packages</strong> — some clinics bundle several attempts, or offer pregnancy-guarantee/partial-refund plans, which can lower per-attempt cost if the first cycle fails.</li>
            <li><strong>HSA/FSA</strong> — fertility treatment is often a qualifying medical expense, but eligibility for care abroad is case-by-case; confirm with your plan administrator first.</li>
            <li><strong>Medication savings</strong> — stimulation drugs are frequently cheaper in Spain than the US; ask whether to fill locally or ship.</li>
          </ul>
          <p>
            If you&apos;re weighing Spain against the other big European destination, our{' '}
            <Link href="/guides/spain-vs-czech-ivf" className="text-blue-600 hover:underline font-medium">
              Spain vs Czech Republic for IVF
            </Link>{' '}comparison breaks down cost, donor availability, and the legal differences side by side.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does IVF cost in Spain in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Own-egg IVF typically runs roughly €4,000-7,000 (~$4,300-7,600) before medication; donor-egg IVF
                roughly €6,000-9,500 (~$6,500-10,300). US cycles commonly run $15,000-30,000 (own eggs) and
                $25,000-45,000+ (donor eggs) — so Spain lands roughly 40-65% lower. All estimates; confirm with each clinic.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much do I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Treatment-cost savings typically land around 40-65%. After flights, lodging, and medication the net
                savings are smaller but still usually meaningful, especially for donor-egg cycles. Savings reflect
                price, not outcomes.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in the price?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Usually the consultation, monitoring, egg retrieval, fertilisation (often ICSI), embryo culture, and
                one fresh transfer. Medications (€1,500-4,000), PGT-A, time-lapse monitoring, freezing/storage, and
                donor matching are typically extra. Always get an itemised quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is IVF in Spain safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Spain has one of Europe&apos;s most established and regulated assisted-reproduction sectors, governed by
                national law and the SEF registry, with many clinics ISO 9001 certified and ESHRE-accredited. A lower
                price doesn&apos;t guarantee outcomes, so vet the specific clinic. This page compares prices, not outcomes.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Does US insurance cover IVF in Spain?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Generally no — most plans require in-network US providers, so treatment abroad is paid out of pocket.
                HSA/FSA eligibility is case-by-case; check with your administrator. Many Spanish clinics offer payment
                plans and multi-cycle packages.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every price shown
              is an <strong>estimate that varies by clinic, protocol, and add-ons</strong> and must be confirmed directly
              with the provider. Fertility treatment success depends on individual factors including age and diagnosis.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the efficacy or safety of any treatment, clinic, or provider,
              and we make no claim about success rates. Always consult a qualified fertility specialist before making
              treatment decisions.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/fertility" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-rose-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Fertility &amp; IVF Clinics</div>
                <div className="text-sm text-gray-600">Compare verified Spain &amp; Europe clinics</div>
              </Link>
              <Link href="/destinations/spain" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-rose-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Spain Destination Guide</div>
                <div className="text-sm text-gray-600">Cities, logistics &amp; what to know</div>
              </Link>
              <Link href="/guides/spain-fertility-ivf-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-rose-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Spain IVF &amp; Fertility Guide</div>
                <div className="text-sm text-gray-600">Clinics, process &amp; legal requirements</div>
              </Link>
              <Link href="/guides/spain-vs-czech-ivf" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-rose-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Spain vs Czech Republic IVF</div>
                <div className="text-sm text-gray-600">Cost, donors &amp; legal differences</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.fertilityclinicsabroad.com/ivf-abroad/ivf-spain/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Fertility Clinics Abroad — IVF in Spain (costs 2026)</a></li>
              <li>• <a href="https://ovu.com/fertility-insights/ivf-in-spain-2026-costs-success-rates-top-clinics-legal-requirements" target="_blank" rel="noopener" className="text-blue-600 hover:underline">OVU — IVF in Spain 2026: Costs &amp; Legal Requirements</a></li>
              <li>• <a href="https://ovu.com/fertility-insights/ivf-costs-in-the-usa-2026-a-complete-guide-to-pricing-insurance-financing" target="_blank" rel="noopener" className="text-blue-600 hover:underline">OVU — IVF Costs in the USA 2026</a></li>
              <li>• <a href="https://www.eggdonationfriends.com/ivf-egg-donation-country-spain/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Egg Donation Friends — Egg Donation in Spain 2026</a></li>
              <li>• <a href="https://www.sefertilidad.net/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Spanish Fertility Society (SEF) — national registry</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Spain IVF Cost Comparison Worksheet"
            description="A normalized checklist for comparing quotes across Spanish clinics — what's in the cycle fee, meds, add-ons, and the total all-in cost vs the US."
            source="guide_spain_ivf_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
