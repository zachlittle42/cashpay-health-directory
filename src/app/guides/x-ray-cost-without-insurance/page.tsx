import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'X-Ray Cost Without Insurance (2026): Cash-Pay Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/x-ray-cost-without-insurance' },
  description: 'X-ray cost without insurance in 2026 — cash prices by body part, imaging center vs urgent care vs ER, networks with published rates from ~$24, and how to save.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an X-ray cost without insurance?',
    answer: 'Without insurance, a single X-ray is commonly estimated between about $100 and $1,000 depending on where you go, with GoodRx citing a national average around $279 for one body part. But the cash floor is far lower: freestanding imaging centers often charge roughly $40-$100 per study, and self-pay networks like RadiologyAssist advertise all-inclusive X-rays starting around $24-$63 depending on the city, while Green Imaging lists standard X-rays from about $50. These are estimates that vary by body part, views, and facility — confirm the all-in cash price before booking.',
  },
  {
    question: 'How much does a chest X-ray cost without insurance?',
    answer: 'A standard two-view chest X-ray is one of the cheapest studies. Published estimates put it around $50-$100 at low-cost settings and roughly $75-$200 at a freestanding imaging center, with urgent care typically in the $100-$250 range. State-level cash averages compiled by Sidecar Health from claims data cluster around $135-$179. At a hospital emergency department the same image can exceed $500. Treat all of these as estimates and confirm with the facility.',
  },
  {
    question: 'How much is an X-ray at urgent care without insurance?',
    answer: 'Urgent care X-rays generally add about $50-$250 on top of a self-pay visit fee of roughly $100-$175. A July 2026 comparison of urgent-care cash totals (visit plus one X-ray region) found an average around $257 and a median of $235, with a range of about $155-$449. Some chains publish flat fees — MedExpress in Indiana, for example, lists a foot X-ray (minimum 3 views) at $113 self-pay. Ask for the total including the X-ray before you check in.',
  },
  {
    question: 'Can I get an X-ray without a doctor’s order?',
    answer: 'A diagnostic X-ray must be ordered by a treating clinician, but that does not mean you need a referral in advance. At urgent care, the on-site provider examines you and orders the X-ray in the same walk-in visit — no appointment or outside referral needed, and nearly all urgent care centers have digital X-ray on site. Standalone imaging centers vary: many require an order from your own clinician, while some self-pay networks help arrange one. Confirm the policy when you book.',
  },
  {
    question: 'Is an ER X-ray more expensive than urgent care?',
    answer: 'Substantially. Published estimates put emergency department X-rays around $400-$1,000 or more once facility fees are added, versus roughly $75-$500 all-in at urgent care — about 2-4x cheaper for the same image. For a non-emergency injury that needs imaging, urgent care or a freestanding imaging center is almost always the cheaper self-pay route. If symptoms are severe or potentially life-threatening, go to the ER regardless of cost.',
  },
  {
    question: 'Can I pay for an X-ray with HSA or FSA funds?',
    answer: 'Yes. X-rays taken for medical reasons are qualified medical expenses, so they are generally reimbursable with HSA, FSA, and HRA funds; dental and vision X-rays are also eligible under a limited-purpose FSA. Paying with pre-tax dollars effectively discounts the study by your tax rate. Keep the itemized receipt, and confirm specifics with your plan administrator.',
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

export default function XrayCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'X-Ray Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What an X-ray costs without insurance in 2026 — cash-pay prices by body part, why the same image varies 5-10x by setting, self-pay imaging networks with published rates, and how to pay the least.',
    url: 'https://vitalityscout.com/guides/x-ray-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/x-ray-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Radiography (X-ray)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'GoodRx — how much do X-rays cost (national average, self-pay imaging)', url: 'https://www.goodrx.com/health-topic/diagnostics/how-much-do-x-rays-cost' },
      { '@type': 'CreativeWork', name: 'RadiologyAssist — self-pay X-ray rates by city (all-inclusive)', url: 'https://radiologyassist.com/' },
      { '@type': 'CreativeWork', name: 'Green Imaging — cash-pay X-ray pricing, radiologist read included', url: 'https://greenimaging.net/x-ray/' },
      { '@type': 'CreativeWork', name: 'Sidecar Health — chest X-ray cash price averages by state', url: 'https://cost.sidecarhealth.com/c/chest-x-ray-cost' },
      { '@type': 'CreativeWork', name: 'Solv — X-rays at urgent care: availability, walk-in process, cost', url: 'https://www.solvhealth.com/health/x-rays-at-urgent-care-what-you-need-to-know' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/x-ray-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/x-ray-cost-without-insurance' };

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
              <span className="text-gray-900">X-Ray Cost Without Insurance</span>
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
                Imaging
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              X-Ray Cost Without Insurance: What You&apos;ll Actually Pay
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              An X-ray is the cheapest image in medicine — unless you get it in the wrong building.
              Here is what a cash-pay X-ray costs by body part and setting, and how people pay $50
              instead of $500 for the same picture.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, an X-ray is commonly estimated at <strong>$100-$1,000</strong>{' '}
                depending on setting, with a national average near <strong>$279</strong> per body
                part. Cash-pay routes are far cheaper: freestanding imaging centers often run{' '}
                <strong>$40-$100</strong>, <strong>RadiologyAssist</strong> advertises all-inclusive
                X-rays from about <strong>$24-$63</strong> by city, and <strong>Green Imaging</strong>{' '}
                from about <strong>$50</strong>. These are estimates to verify with the facility.
                This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Cheapest self-pay routes</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Self-pay networks: from ~$24-$63 (estimate)</li>
                  <li>• Freestanding centers: ~$40-$100</li>
                  <li>• All-inclusive: read + report included</li>
                  <li>• Best when you already have an order</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Walk-in &amp; hospital routes</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Urgent care: ~$155-$449 visit + X-ray total</li>
                  <li>• Hospital outpatient: ~$200-$600 (facility fee)</li>
                  <li>• ER: ~$400-$1,000+</li>
                  <li>• Urgent care wins for same-day injuries</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#average" className="text-blue-600 hover:underline">1. What an X-ray costs without insurance</a></li>
              <li><a href="#by-body-part" className="text-blue-600 hover:underline">2. X-ray cost by body part</a></li>
              <li><a href="#by-setting" className="text-blue-600 hover:underline">3. The setting decides the price</a></li>
              <li><a href="#cash-networks" className="text-blue-600 hover:underline">4. Cash-pay networks with published prices</a></li>
              <li><a href="#order" className="text-blue-600 hover:underline">5. Do you need a doctor&apos;s order?</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to pay the least</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Here is the absurdity of X-ray pricing in one number: Medicare pays roughly{' '}
              <strong>$33</strong> for a standard two-view chest X-ray. The uninsured patient next
              to you in the ER might be billed <strong>$500 or more</strong> for the same image. The
              technology is a century old, the marginal cost is tiny, and the cash-pay market knows
              it — which is why self-pay networks sell X-rays for less than a tank of gas. If you
              are paying out of pocket, an X-ray is one of the easiest bills in healthcare to shrink.
            </p>

            <h2 id="average" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What an X-Ray Costs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Cost guides generally put a single cash-pay X-ray anywhere from about{' '}
              <strong>$100 to $1,000</strong>, and GoodRx cites a national average around{' '}
              <strong>$279</strong> for any one body part. That spread has almost nothing to do with
              the image and almost everything to do with the building it is taken in.
            </p>

            <p className="text-gray-700 mb-4">
              At the low end, freestanding imaging centers commonly charge roughly{' '}
              <strong>$40-$100</strong> per study for cash patients, and dedicated self-pay networks
              publish flat rates even lower — <strong>RadiologyAssist</strong> lists starting X-ray
              rates by city of about <strong>$24</strong> (Houston) to <strong>$63</strong> (San
              Francisco), all-inclusive. At the high end, a hospital emergency department can bill
              several hundred dollars for the identical image once facility fees stack on.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Two rights worth knowing:</strong> if you are uninsured or self-pay, you are
                entitled to a <strong>Good Faith Estimate</strong> of the cost before the service,
                and published guidance notes self-pay discounts of <strong>40-60% off list</strong>{' '}
                are common at hospitals and imaging centers when you ask up front.
              </p>
            </div>

            <h2 id="by-body-part" className="text-2xl font-bold text-gray-900 mt-12 mb-6">X-Ray Cost by Body Part</h2>

            <p className="text-gray-700 mb-4">
              Price scales with the number of views, not the body part&apos;s size. The figures
              below are <strong>estimates compiled from published cost guides</strong> — use them to
              set expectations, then get the all-in quote for your specific study.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">X-ray type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash-pay range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Chest (2 views)</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">State cash averages cluster ~$135-$179; ER can exceed $500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hand / foot / extremity</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $200 at urgent care</td>
                    <td className="border border-gray-300 px-4 py-3">MedExpress (Indiana) publishes a $113 foot X-ray flat fee</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Spine (cervical / lumbar)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">More views than an extremity; ER multi-view can run higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental bitewings</td>
                    <td className="border border-gray-300 px-4 py-3">~$25 - $100</td>
                    <td className="border border-gray-300 px-4 py-3">Often bundled into exam specials</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental panoramic / full-mouth series</td>
                    <td className="border border-gray-300 px-4 py-3">~$85 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">Panoramic ~$100-$200; savings plans cut 30-60%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> no routine X-ray should cost four figures. If a quote
              lands there, it is the setting — not the study — and a freestanding center will do the
              same image for a fraction of the price.
            </p>

            <h2 id="by-setting" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Setting Decides the Price</h2>

            <p className="text-gray-700 mb-4">
              For self-pay X-rays there is a reliable price ladder. Published comparisons estimate
              hospitals charge <strong>3-5x more</strong> than imaging centers for the same X-ray,
              and freestanding facilities run roughly <strong>50-75% less</strong> than hospital
              outpatient departments:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Freestanding imaging center (~$40-$100):</strong> the cheapest route when you already have an order and the injury is not urgent. No facility fee.</li>
              <li><strong>Urgent care (~$155-$449 all-in):</strong> the walk-in route. You pay a visit fee (~$100-$175) plus the X-ray (~$50-$250), but you get the exam, the order, and the image in one stop. A July 2026 sample of urgent-care visit-plus-X-ray cash totals averaged about $257.</li>
              <li><strong>Hospital outpatient (~$200-$600):</strong> same image, plus a facility fee that exists because the hospital is attached.</li>
              <li><strong>Emergency room (~$400-$1,000+):</strong> the most expensive possible place to get an X-ray. Reserve it for actual emergencies — where cost should not be the deciding factor.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Sliding-scale option</h4>
              <p className="text-gray-700">
                Federally qualified health centers (FQHCs) offer imaging on income-based sliding
                scales — published estimates put sliding-scale X-rays as low as{' '}
                <strong>$20-$40</strong>. If cash is genuinely tight, a community health center is a
                legitimate route, not a last resort.
              </p>
            </div>

            <h2 id="cash-networks" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash-Pay Networks With Published Prices</h2>

            <p className="text-gray-700 mb-4">
              The same self-pay imaging networks that undercut hospital MRI pricing also sell
              X-rays, and the flat rates are startlingly low.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published X-ray price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What&apos;s included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">RadiologyAssist</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$24-$63 by city (Houston $24, Chicago $25, NYC $38, SF $63)</td>
                    <td className="border border-gray-300 px-4 py-3">All-inclusive: facility fee, radiologist read, images, report</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Green Imaging</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$50</td>
                    <td className="border border-gray-300 px-4 py-3">Final price; no separate radiologist charge</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">MedExpress (urgent care)</td>
                    <td className="border border-gray-300 px-4 py-3">e.g. foot X-ray $113 flat (Indiana price list)</td>
                    <td className="border border-gray-300 px-4 py-3">X-ray billed separately from the base visit fee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">CityMD (urgent care)</td>
                    <td className="border border-gray-300 px-4 py-3">~$169+ visit fee; X-ray adds ~$100-$250</td>
                    <td className="border border-gray-300 px-4 py-3">Visit fee excludes testing; ask for the all-in total</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              As with MRI, the feature that matters is <strong>all-inclusive pricing</strong>:
              RadiologyAssist states its flat rate covers the facility fee, the radiologist&apos;s
              read, a copy of the images, and the report, and Green Imaging states its cash price is
              the final price. A cheap scan with a separately billed radiologist read is how a $60
              X-ray becomes a $200 surprise. The full playbook is in our{' '}
              <Link href="/guides/mri-cost-without-insurance" className="text-blue-600 hover:underline">MRI cost without insurance guide</Link> —
              the same networks, the same trap.
            </p>

            <h2 id="order" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Do You Need a Doctor&apos;s Order?</h2>

            <p className="text-gray-700 mb-4">
              Yes — a diagnostic X-ray must be ordered by a treating clinician. But in practice this
              is not a barrier:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>At urgent care, the order happens in-visit.</strong> You walk in without an appointment or referral, the on-site provider examines you, orders the X-ray, and nearly all centers shoot it on site with digital results reviewed in minutes.</li>
              <li><strong>At standalone imaging centers, policies vary.</strong> Many require an order from your own clinician; some self-pay networks help arrange one. Ask when booking.</li>
              <li><strong>A cheap telehealth visit can generate the order.</strong> If you have no primary care doctor, a low-cost virtual visit through the options on our <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link> can evaluate whether imaging is appropriate and write the order.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for an X-Ray</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Match the setting to the situation.</strong> Have an order and no urgency? Freestanding center or self-pay network. Injured and need same-day answers? Urgent care. True emergency? ER, and don&apos;t price-shop it.</li>
              <li><strong>Quote a self-pay network first.</strong> RadiologyAssist and Green Imaging publish flat, all-inclusive rates that set the floor for your market.</li>
              <li><strong>Ask for the all-in total.</strong> Visit fee, X-ray, radiologist read, report — one number, in writing, before service.</li>
              <li><strong>Request the self-pay discount.</strong> 40-60% reductions off list price are commonly reported when patients ask up front.</li>
              <li><strong>Get your Good Faith Estimate.</strong> Uninsured and self-pay patients are entitled to one before the service.</li>
              <li><strong>Pay with HSA/FSA.</strong> Medically necessary X-rays are qualified expenses, so pre-tax dollars effectively discount the price by your tax rate.</li>
            </ol>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Before You Book</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Views drive price.</strong> A &quot;minimum 3 views&quot; study costs more than a single view — the quote should specify the study, not just the body part.</li>
              <li><strong>The read should be included.</strong> Confirm the radiologist interpretation and report are in the quoted price, not billed separately.</li>
              <li><strong>An X-ray may not be the final answer.</strong> Some findings need follow-up imaging (CT or MRI). Our <Link href="/guides/ct-scan-cost-without-insurance" className="text-blue-600 hover:underline">CT scan</Link> and <Link href="/guides/ultrasound-cost-without-insurance" className="text-blue-600 hover:underline">ultrasound</Link> cost guides cover the cash-pay math for those.</li>
              <li><strong>Results need a clinician.</strong> An X-ray is a diagnostic test; findings should be reviewed by a healthcare provider who can see the full picture.</li>
              <li><strong>Prices move.</strong> Every figure here is an estimate that varies by facility, city, and time — confirm the current cash price before you pay.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Health Services</h3>
            <p className="mb-6 text-blue-100">
              From imaging to labs to walk-in clinics — see transparent self-pay pricing in one place.
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
              not affiliated with RadiologyAssist, Green Imaging, MedExpress, or CityMD. Pricing is
              based on publicly available data and provider websites and is presented as estimates
              that vary by study, views, facility, location, and current promotions — always verify
              the current price directly with the provider before booking. An X-ray is a diagnostic
              test that requires a clinician&apos;s order; results should be reviewed with a licensed
              healthcare provider. VitalityScout may earn a commission from some links, at no
              additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• GoodRx — goodrx.com (national average X-ray cost, self-pay imaging discounts)</li>
              <li>• RadiologyAssist — radiologyassist.com (all-inclusive self-pay X-ray rates by city)</li>
              <li>• Green Imaging — greenimaging.net (cash-pay X-ray from ~$50, radiologist read included)</li>
              <li>• Sidecar Health cost data — cost.sidecarhealth.com (chest X-ray cash averages by state)</li>
              <li>• Solv — solvhealth.com (urgent care X-ray availability, walk-in process, visit costs)</li>
              <li>• MedExpress Indiana self-pay price list — medexpress.com (published flat X-ray fees)</li>
              <li>• Published X-ray cost guides (typical cash-pay ranges by body part and setting)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Imaging Price Cheat Sheet"
            description="How to price X-rays, CTs, and MRIs at freestanding centers and skip the facility fee."
            source="guide_xray_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
