import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Urgent Care Cost Without Insurance (2026): Real Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance' },
  description: 'Urgent care cost without insurance in 2026 — self-pay visit fees at CareNow, GoHealth, ZoomCare and more, what X-rays and tests add, and urgent care vs ER math.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does urgent care cost without insurance?',
    answer: 'A base self-pay urgent care visit is commonly estimated at $120-$300, with GoodRx citing an average around $180 and UnitedHealthcare data putting the median at $165. Chains that publish cash rates land in the same band: Carbon Health lists $145, GoHealth regional rates run about $120-$215 for an exam plus one rapid test, and CareNow uses tiered pricing from $180. Tests, X-rays, and procedures are usually extra, so ask for the all-in total. These are estimates — confirm the current self-pay price with the clinic.',
  },
  {
    question: 'How much is an urgent care visit with an X-ray without insurance?',
    answer: 'Plan for roughly $250-$450 all-in. An X-ray typically adds about $100-$250 to the base visit fee, and a July 2026 review of published urgent-care cash totals for a visit plus one X-ray region found an average around $257 and a range of about $155-$449. Some chains bundle it — GoHealth\'s Novant (North Carolina) clinics publish a $195 flat rate that covers the exam plus a lab test, X-ray, or procedure. Always ask whether imaging is included before check-in.',
  },
  {
    question: 'Is urgent care cheaper than the ER without insurance?',
    answer: 'Dramatically. Published figures put an uninsured emergency-room visit around $1,500-$3,000 (UnitedHealthcare cites a median of about $1,700 and an average near $2,600 without insurance), versus roughly $120-$300 for a base urgent care visit — commonly 5-10x cheaper for conditions urgent care can treat. For severe or potentially life-threatening symptoms, go to the ER regardless of cost. For everything else that can\'t wait for a regular appointment, urgent care is the self-pay default.',
  },
  {
    question: 'What do tests and stitches add to an urgent care bill?',
    answer: 'Common add-ons, as published estimates: rapid strep or flu swabs add about $30-$75; X-rays add about $100-$250; and laceration repair (stitches) runs roughly $150-$425 including the visit fee depending on complexity. A visit that includes tests, imaging, or procedures commonly totals $300-$500+. One caution: labs sent out to Quest or Labcorp are often billed separately from the clinic\'s fee — ask whether any test is processed in-house before agreeing to it.',
  },
  {
    question: 'Can I go to urgent care without insurance at all?',
    answer: 'Yes. Urgent care centers see self-pay patients every day — you simply pay at the time of service, and many chains publish dedicated self-pay rates (CareNow, GoHealth, ZoomCare, Carbon Health, and others). Many clinics also quietly offer 10-30% discounts for paying in full at the visit, and some run membership or discount programs, like NextCare\'s $39/month Advantage plan or FastMed\'s savings plan. It never hurts to ask the front desk what the self-pay price and discount are before you\'re seen.',
  },
  {
    question: 'Can I use HSA or FSA funds at urgent care?',
    answer: 'Generally yes. An urgent care visit — the exam plus diagnostic tests and procedures performed as part of your care — is a qualified medical expense, so HSA and FSA funds typically apply. Paying with pre-tax dollars effectively discounts the visit by your tax rate. Keep the itemized receipt, and note that some employer FSA/HRA plans reimburse only a subset of expenses, so confirm with your plan administrator.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 py-6">
      <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-gray-900 hover:text-blue-600">
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <p className="mt-4 text-gray-700">{answer}</p>
    </details>
  );
}

export default function UrgentCareCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Urgent Care Cost Without Insurance: Self-Pay Price Guide',
    description:
      'What urgent care costs without insurance in 2026 — published self-pay rates at major chains, what X-rays, tests, and stitches add, urgent care vs ER vs telehealth math, and how to pay less.',
    url: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalClinic', name: 'Urgent care center' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'CareNow — self-pay pricing (tiered visit rates)', url: 'https://www.carenow.com/patient-resources/self-pay-pricing' },
      { '@type': 'CreativeWork', name: 'GoHealth Urgent Care — regional insurance and pricing pages', url: 'https://www.gohealthuc.com/' },
      { '@type': 'CreativeWork', name: 'ZoomCare — healthcare pricing (uninsured flat rates)', url: 'https://www.zoomcare.com/healthcare-pricing' },
      { '@type': 'CreativeWork', name: 'UnitedHealthcare — care options and costs (urgent care vs ER medians)', url: 'https://www.uhc.com/member-resources/where-to-go-for-medical-care/care-options-and-costs' },
      { '@type': 'CreativeWork', name: 'GoodRx — how much is urgent care without insurance', url: 'https://www.goodrx.com/health-topic/emergency-care/how-much-is-urgent-care-without-insurance' },
      { '@type': 'CreativeWork', name: 'Solv — how much does urgent care cost without insurance', url: 'https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance' };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Urgent Care Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Local Clinics &amp; Imaging Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Local Services
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Urgent Care Cost Without Insurance: What a Visit Really Runs
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The visit fee is only the start of the bill. Here is what major chains actually
              publish for self-pay visits, what X-rays and tests add, and when telehealth — or the
              ER — is the right call instead.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a base urgent care visit is commonly estimated at{' '}
                <strong>$120-$300</strong> (average ~<strong>$180</strong>, median ~
                <strong>$165</strong>). Published chain rates: <strong>Carbon Health $145</strong>,{' '}
                <strong>GoHealth ~$120-$215</strong> by region, <strong>CareNow from $180</strong>.
                X-rays add ~<strong>$100-$250</strong>; visits with tests or procedures commonly
                total <strong>$300-$500+</strong> — still far below an uninsured ER visit at{' '}
                <strong>$1,500-$3,000</strong>. Estimates to verify with the clinic. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Go to urgent care if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You need an exam, test, X-ray, or stitches today</li>
                  <li>• The problem is real but not life-threatening</li>
                  <li>• You want a published self-pay price up front</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Consider another route if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• It&apos;s a simple illness → telehealth from ~$34-$89</li>
                  <li>• Severe symptoms → ER, regardless of cost</li>
                  <li>• It can wait → a scheduled cash-pay clinic visit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#average" className="text-blue-600 hover:underline">1. What a self-pay visit costs</a></li>
              <li><a href="#add-ons" className="text-blue-600 hover:underline">2. What tests, X-rays, and stitches add</a></li>
              <li><a href="#chains" className="text-blue-600 hover:underline">3. Chains that publish self-pay prices</a></li>
              <li><a href="#vs-er" className="text-blue-600 hover:underline">4. Urgent care vs the ER</a></li>
              <li><a href="#vs-telehealth" className="text-blue-600 hover:underline">5. When telehealth is cheaper</a></li>
              <li><a href="#memberships" className="text-blue-600 hover:underline">6. Discounts and membership plans</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to keep the bill down</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Urgent care is one of the few corners of American healthcare where cash prices are
              increasingly published on the wall — or at least on the website. Several national
              chains now post flat self-pay rates, which means an uninsured patient can actually
              comparison-shop a sick visit. The catch: the advertised number is usually the{' '}
              <em>base</em> visit, and the bill grows with every swab, image, and procedure. Here is
              how to see the whole bill coming.
            </p>

            <h2 id="average" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Self-Pay Urgent Care Visit Costs</h2>

            <p className="text-gray-700 mb-4">
              Published estimates agree on the band: GoodRx puts an uninsured urgent care visit at{' '}
              <strong>$125-$300</strong> with an average around <strong>$180</strong>;
              UnitedHealthcare&apos;s claims data puts the median at <strong>$165</strong>; Solv
              estimates <strong>$150-$280</strong> for a standard evaluation; and Mira cites{' '}
              <strong>$120-$250</strong> for simple-to-moderate visits. Chains&apos; own published
              rates fall inside the same range, which is a good sanity check that the band is real.
            </p>

            <p className="text-gray-700 mb-4">
              The number to actually budget is higher, because most visits involve at least one
              add-on. Once tests, imaging, or procedures enter the picture, published estimates put
              the total at <strong>$300-$500+</strong>.
            </p>

            <h2 id="add-ons" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Tests, X-Rays, and Stitches Add</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Add-on</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical self-pay add (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rapid strep / flu swab</td>
                    <td className="border border-gray-300 px-4 py-3">~$30 - $75</td>
                    <td className="border border-gray-300 px-4 py-3">In-house point-of-care tests</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">X-ray (one body region)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">Visit + X-ray totals averaged ~$257 in a July 2026 sample</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Stitches (laceration repair)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $425 total</td>
                    <td className="border border-gray-300 px-4 py-3">Depends on size/complexity; includes visit fee at the higher end</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Send-out labs (Quest / Labcorp)</td>
                    <td className="border border-gray-300 px-4 py-3">Billed separately</td>
                    <td className="border border-gray-300 px-4 py-3">A common surprise-bill source — ask if the test is in-house</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The surprise-bill trap: send-out labs</h4>
              <p className="text-gray-700">
                The clinic&apos;s self-pay rate usually covers what happens in the building. A
                culture or blood panel sent to an outside lab bills separately, weeks later, at that
                lab&apos;s rates. Before agreeing to any test, ask: &quot;Is this processed in-house
                and included in my price?&quot; If you need bloodwork anyway, ordering it yourself
                through a <Link href="/labs" className="text-blue-600 hover:underline">cash-pay lab service</Link>{' '}
                is often far cheaper.
              </p>
            </div>

            <h2 id="chains" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Chains That Publish Self-Pay Prices</h2>

            <p className="text-gray-700 mb-4">
              These are real, published cash rates as of mid-2026 — treat them as estimates that
              vary by location and change over time.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Chain</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published self-pay rate (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What&apos;s included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Carbon Health</td>
                    <td className="border border-gray-300 px-4 py-3">$145 in-person / $69 virtual</td>
                    <td className="border border-gray-300 px-4 py-3">Visit fee only; testing, procedures, X-rays extra</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">GoHealth (regional)</td>
                    <td className="border border-gray-300 px-4 py-3">~$120-$215 exam + 1 rapid test; NC flat $195</td>
                    <td className="border border-gray-300 px-4 py-3">Varies by region; NC rate covers exam plus a lab, X-ray, or procedure</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CareNow (HCA)</td>
                    <td className="border border-gray-300 px-4 py-3">Tiered: $180 / $235 / $350</td>
                    <td className="border border-gray-300 px-4 py-3">By visit complexity; extra fees for follow-ups and added labs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">ZoomCare (OR/WA)</td>
                    <td className="border border-gray-300 px-4 py-3">$170-$530 by care provided</td>
                    <td className="border border-gray-300 px-4 py-3">Excludes labs, imaging, procedures, meds; $549 flat for emergency-level Super Clinic care</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Midwest Express Clinic</td>
                    <td className="border border-gray-300 px-4 py-3">From $125</td>
                    <td className="border border-gray-300 px-4 py-3">Additional services extra</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">MedExpress</td>
                    <td className="border border-gray-300 px-4 py-3">e.g. Indiana list: $239 new / $237 return visit</td>
                    <td className="border border-gray-300 px-4 py-3">Per-service flat fees; discount for paying in full</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CityMD</td>
                    <td className="border border-gray-300 px-4 py-3">No published rate (third-party estimates ~$150-$300)</td>
                    <td className="border border-gray-300 px-4 py-3">Advertises &quot;competitive&quot; uninsured rates; ask at check-in</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>What to notice:</strong> the cheapest published in-person rates cluster around
              $125-$180, and the &quot;exam plus one test&quot; bundles (GoHealth) are often better
              value than a bare visit fee that meters every add-on. When two clinics sit on the same
              corner, this table is the tiebreaker.
            </p>

            <h2 id="vs-er" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Urgent Care vs the ER</h2>

            <p className="text-gray-700 mb-4">
              For the uninsured, this is the single most expensive fork in the road. Published
              figures put an uninsured emergency-room visit around{' '}
              <strong>$1,500-$3,000</strong> — UnitedHealthcare cites a median of about{' '}
              <strong>$1,700</strong> and an average near <strong>$2,600</strong> without insurance —
              versus $120-$300 for a base urgent care visit. Analyses commonly describe the ER as{' '}
              <strong>5-10x</strong> the cost of urgent care for conditions both can treat.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>ER, regardless of cost:</strong> chest pain, difficulty breathing, stroke signs, severe bleeding, major trauma, or anything that feels life-threatening. Cost math has no place here.</li>
              <li><strong>Urgent care:</strong> sprains and simple fractures, cuts needing stitches, infections, flu/strep, minor burns, UTIs — the visits that make up most ER traffic but don&apos;t need an ER bill.</li>
              <li><strong>A middle option exists in some metros:</strong> ZoomCare&apos;s Super Clinics, for example, publish a flat $549 uninsured rate for emergency-level care that doesn&apos;t require a hospital.</li>
            </ul>

            <h2 id="vs-telehealth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When Telehealth Is the Cheaper Visit</h2>

            <p className="text-gray-700 mb-4">
              If the visit doesn&apos;t need hands, a swab, or an X-ray, a virtual visit undercuts
              every number above. Published cash prices: <strong>Sesame</strong> lists virtual
              urgent care from about <strong>$34</strong>, urgent care chains&apos; own virtual
              visits run <strong>$65-$75</strong> (NextCare, Carbon Health, MD Now), and{' '}
              <strong>Teladoc</strong> charges <strong>$89</strong> for a general medical visit
              without insurance. For rashes, sinus infections, UTIs, med questions, and
              &quot;should I even go in?&quot; triage, starting virtual can save $100+ — and the
              clinician will tell you if you genuinely need hands-on care. Compare options on our{' '}
              <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link>.
            </p>

            <h2 id="memberships" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Discounts and Membership Plans</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Pay-at-service discounts.</strong> Published guidance notes most clinics offer 10-30% off for paying in full at the visit — usually unadvertised. Ask the front desk before you&apos;re seen.</li>
              <li><strong>NextCare Advantage:</strong> a published discount plan at $39/month plus $39/visit covering most in-clinic and virtual services (90-day minimum enrollment; it is a discount plan, not insurance).</li>
              <li><strong>FastMed Savings Plan:</strong> a low-cost membership that discounts self-pay visits including in-house services (verify the current fee on FastMed&apos;s site).</li>
              <li><strong>Follow-up pricing:</strong> some chains discount return visits — MD Now, for example, publishes a $50 follow-up within 10 days for the same complaint.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Keep the Bill Down</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Triage the level of care first.</strong> Telehealth (~$34-$89) → urgent care (~$120-$300 base) → ER ($1,500+). Start at the lowest level that safely fits the problem.</li>
              <li><strong>Pick a clinic with published self-pay pricing.</strong> A posted rate is a rate you can hold them to — and bundles beat metered add-ons.</li>
              <li><strong>Ask for the all-in estimate up front.</strong> Visit fee plus every test, image, and procedure the clinician expects. Uninsured patients can also request a Good Faith Estimate.</li>
              <li><strong>Keep labs in-house or take the script.</strong> Decline send-out labs when possible, or ask to order them yourself through a <Link href="/labs" className="text-blue-600 hover:underline">cash-pay lab</Link> at a fraction of the price.</li>
              <li><strong>Ask for the pay-today discount.</strong> 10-30% for paying in full at the visit is common.</li>
              <li><strong>Pay with HSA/FSA.</strong> Urgent care visits are qualified medical expenses; pre-tax dollars discount the bill by your tax rate.</li>
            </ol>

            <p className="text-gray-700 mb-4">
              If the visit ends with an imaging referral, don&apos;t default to the hospital — our{' '}
              <Link href="/guides/x-ray-cost-without-insurance" className="text-blue-600 hover:underline">X-ray</Link>,{' '}
              <Link href="/guides/mri-cost-without-insurance" className="text-blue-600 hover:underline">MRI</Link>, and{' '}
              <Link href="/guides/ct-scan-cost-without-insurance" className="text-blue-600 hover:underline">CT scan</Link>{' '}
              cost guides show how cash-pay imaging networks price the same scans for a fraction of
              hospital rates.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find Cash-Pay Care Near You</h3>
            <p className="mb-6 text-blue-100">
              Walk-in clinics, imaging, and labs with transparent self-pay pricing — all in one directory.
            </p>
            <Link
              href="/local-clinics"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Local Clinics
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with the urgent care chains named above. Pricing is based on publicly
              available data and provider websites and is presented as estimates that vary by
              location, visit complexity, services provided, and current promotions — always verify
              the current self-pay price directly with the clinic before your visit. If you are
              experiencing severe or potentially life-threatening symptoms, call 911 or go to the
              nearest emergency room regardless of cost. VitalityScout may earn a commission from
              some links, at no additional cost to you, and this never affects how we describe a
              provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• CareNow — carenow.com (published tiered self-pay pricing)</li>
              <li>• GoHealth Urgent Care — gohealthuc.com (regional published self-pay rates)</li>
              <li>• ZoomCare — zoomcare.com (published uninsured rates, Super Clinic flat fee)</li>
              <li>• Carbon Health — carbonhealth.com (published in-person and virtual visit prices)</li>
              <li>• MedExpress — medexpress.com (state self-pay price lists, billing information)</li>
              <li>• UnitedHealthcare — uhc.com (urgent care vs ER median and average costs)</li>
              <li>• GoodRx — goodrx.com (uninsured urgent care visit averages)</li>
              <li>• Solv — solvhealth.com (visit and add-on cost estimates, self-pay discounts)</li>
              <li>• NextCare — nextcare.com (Advantage discount plan, virtual visit pricing)</li>
              <li>• Teladoc / Sesame — teladochealth.com, sesamecare.com (published telehealth visit prices)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Self-Pay Visit Playbook"
            description="The questions to ask at check-in that keep an urgent care bill under control."
            source="guide_urgent_care_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
