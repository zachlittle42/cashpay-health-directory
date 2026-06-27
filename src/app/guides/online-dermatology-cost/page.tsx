import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Online Dermatology Cost (2026): Brand-by-Brand Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/online-dermatology-cost' },
  description: 'Online dermatology cost in 2026 — Curology, Nurx, Hers & DermatologistOnCall compared on visit fees, subscriptions, and what is included vs in-person.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does online dermatology cost without insurance?',
    answer: 'It depends on the model. Subscription skincare services like Curology and Hers fold the clinician review into the plan and run roughly $25-$60 a month for a custom prescription cream. Nurx charges a one-time consultation fee (about $40 for acne or rosacea, $30 for anti-aging) that covers a year of care, then bills medication separately from around $25-$30 a month. A pay-per-visit teledermatology service like DermatologistOnCall is a flat fee of about $95 for a single visit, with medication filled at your pharmacy on top. These are estimates that change often — confirm current pricing on each provider’s own site.',
  },
  {
    question: 'Is online dermatology cheaper than seeing a dermatologist in person?',
    answer: 'Usually, yes, for the visit itself. A cash-pay in-person dermatologist visit commonly runs $150-$400 for a new patient and $100-$250 for a follow-up, before any procedure or medication. An online visit or subscription is typically $25-$95, which is why teledermatology is often 30-50% cheaper than an office visit for routine concerns. The trade-off: online care cannot do a hands-on skin exam, a biopsy, or in-office procedures. Prices vary by location and provider — verify before booking.',
  },
  {
    question: 'What conditions can online dermatology actually treat?',
    answer: 'Online dermatology is well-suited to common, visible, photo-diagnosable conditions: acne, rosacea, eczema, psoriasis, hyperpigmentation and melasma, mild rashes, hair loss, and cosmetic anti-aging. It is not appropriate for suspicious or changing moles, possible skin cancer, anything that needs a biopsy, or surgical and in-office procedures — those require an in-person dermatologist. When in doubt, an online provider should refer you in.',
  },
  {
    question: 'What does an online dermatology subscription include — and what is extra?',
    answer: 'A subscription like Curology or Hers typically bundles the clinician review, the prescription, and a custom-compounded formula shipped to you, usually monthly or every two months. Watch for extras: monthly support fees (Nurx adds about $3 in any month an order ships), add-on cleansers and moisturizers, and the fact that a pay-per-visit service does NOT include the medication — that is filled at a pharmacy separately. Read the cart total, not just the headline price.',
  },
  {
    question: 'Can I use HSA or FSA money for online dermatology?',
    answer: 'Generally yes. Online dermatology visits and prescription treatments are typically HSA/FSA-eligible because they are medical care. DermatologistOnCall and Nurx both note that patients commonly pay with HSA, FSA, or HRA funds, and some online visits may be reimbursable through an insurer as an out-of-network benefit. Confirm eligibility with your plan administrator before assuming a charge qualifies.',
  },
  {
    question: 'Is Apostrophe still available for online dermatology?',
    answer: 'No. Apostrophe was acquired by Hims & Hers and then discontinued in March 2025; it no longer takes new patients, consultations, or prescriptions. Former Apostrophe-style custom formulas are now offered through Hims and Hers skincare, and other board-certified online options include Curology, Nurx, and DermatologistOnCall. If you held an Apostrophe prescription, you would need to start a new consultation with another service.',
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

export default function OnlineDermatologyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Online Dermatology Cost: Brand-by-Brand Price Comparison',
    description:
      'A practical comparison of online dermatology cost in 2026 — visit fees and monthly subscription pricing at Curology, Nurx, Hers/Hims, and DermatologistOnCall for acne, anti-aging, and rosacea, plus what is included versus an in-person visit.',
    url: 'https://vitalityscout.com/guides/online-dermatology-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/online-dermatology-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalSpecialty', name: 'Dermatology' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Curology — pricing and products', url: 'https://support.curology.com/en_us/pricing-and-products-BJOLQnd2O' },
      { '@type': 'CreativeWork', name: 'Nurx — how much does acne treatment cost', url: 'https://www.nurx.com/faq/how-much-does-acne-treatment-cost-through-nurx/' },
      { '@type': 'CreativeWork', name: 'Nurx — how much does rosacea treatment cost', url: 'https://www.nurx.com/faq/how-much-does-rosacea-treatment-through-nurx-cost/' },
      { '@type': 'CreativeWork', name: 'Nurx — how much does anti-aging treatment cost', url: 'https://www.nurx.com/faq/how-much-does-anti-aging-treatment-through-nurx-cost/' },
      { '@type': 'CreativeWork', name: 'DermatologistOnCall — FAQs and pricing', url: 'https://dermatologistoncall.com/faqs' },
      { '@type': 'CreativeWork', name: 'Hers — custom anti-aging cream', url: 'https://www.forhers.com/skin-care/anti-aging' },
      { '@type': 'CreativeWork', name: 'Miiskin — online vs in-person dermatology costs', url: 'https://miiskin.com/dermatology-virtual-vs-in-person/' },
      { '@type': 'CreativeWork', name: 'Cosmetics Business — Hims & Hers shutters Apostrophe', url: 'https://cosmeticsbusiness.com/hims-hers-shutters-dermatology-business-apostrophe' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/online-dermatology-cost#faq', url: 'https://vitalityscout.com/guides/online-dermatology-cost' };

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
              <span className="text-gray-900">Online Dermatology Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Online Dermatology Cost: What You Actually Pay in 2026
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Three different pricing models hide behind &quot;online dermatology.&quot; Here is how
              Curology, Nurx, Hers/Hims, and DermatologistOnCall compare on the fee you pay, the
              medication you pay for, and what you give up versus an in-person visit.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Online dermatology typically costs $25-$95</strong>, depending on the model.
                Subscriptions (<strong>Curology, Hers</strong>) run <strong>~$25-$60/month</strong> with
                the clinician review and custom cream included. <strong>Nurx</strong> charges a one-time
                <strong> ~$30-$40 consultation</strong> covering a year of care, then medication from
                <strong> ~$25-$30/month</strong>. A pay-per-visit service like <strong>DermatologistOnCall</strong>
                is a flat <strong>~$95</strong>, medication separate. All are well below a
                <strong> $150-$400</strong> in-person visit. Prices are estimates that change often — verify
                with each provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Three Pricing Models, Fast</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Subscription</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Curology, Hers, Hims</li>
                  <li>• ~$25-$60/mo (estimate)</li>
                  <li>• Review + custom cream included</li>
                  <li>• Auto-renews monthly</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Visit fee + meds</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Nurx</li>
                  <li>• ~$30-$40 consult, 1 yr care</li>
                  <li>• Meds billed separately ~$25-$30/mo</li>
                  <li>• Insurance for acne/rosacea</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-2">Pay-per-visit</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• DermatologistOnCall</li>
                  <li>• Flat ~$95/visit (estimate)</li>
                  <li>• 30-day follow-up included</li>
                  <li>• Meds filled at your pharmacy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Pick a subscription if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want one custom cream, set and forget</li>
                  <li>• Your concern is ongoing acne or anti-aging</li>
                  <li>• You value bundled price over insurance billing</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-purple-600 mb-1">Pick a one-off visit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want a diagnosis, not a subscription</li>
                  <li>• You have a single rash or flare to resolve</li>
                  <li>• You want to fill the script at your own pharmacy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#models" className="text-blue-600 hover:underline">1. The three online-derm pricing models</a></li>
              <li><a href="#brands" className="text-blue-600 hover:underline">2. Brand-by-brand cost comparison</a></li>
              <li><a href="#by-condition" className="text-blue-600 hover:underline">3. Cost by condition: acne, anti-aging, rosacea</a></li>
              <li><a href="#vs-in-person" className="text-blue-600 hover:underline">4. Online vs in-person: what is included</a></li>
              <li><a href="#apostrophe" className="text-blue-600 hover:underline">5. A note on Apostrophe (it shut down)</a></li>
              <li><a href="#hidden" className="text-blue-600 hover:underline">6. Hidden costs to watch for</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">7. How to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Online dermatology cost&quot; is a confusing search because the answer depends
              entirely on the business model behind the brand. One service charges you a monthly
              subscription that quietly bakes in the clinician. Another charges a single consultation
              fee, then bills medication on top. A third works like a one-off virtual visit. Compare
              the headline numbers without understanding the model and you will pick wrong. Here is the
              honest, model-by-model breakdown.
            </p>

            <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Three Online-Derm Pricing Models</h2>

            <p className="text-gray-700 mb-4">
              Almost every online dermatology brand falls into one of three structures. Knowing which
              one you are buying is the whole game.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Subscription (clinician included)</h3>
            <p className="text-gray-700 mb-4">
              Services like <strong>Curology</strong> and <strong>Hers/Hims</strong> sell a monthly
              plan. A licensed provider reviews your intake and photos, prescribes a custom-compounded
              cream, and ships it to you on a recurring basis. There is no separate &quot;visit
              fee&quot; — the review is folded into the subscription. This is the simplest model for
              ongoing concerns, and usually the cheapest per month, but it auto-renews and the
              medication is tied to the plan.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Consultation fee + medication</h3>
            <p className="text-gray-700 mb-4">
              <strong>Nurx</strong> charges a one-time consultation fee that covers a year of care from
              its medical team, then prices medication separately. For acne and rosacea it can also
              bill insurance for the medication. This unbundles the clinician from the drug, so the
              true cost is the consult plus whatever your prescription runs each month.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Pay-per-visit teledermatology</h3>
            <p className="text-gray-700 mb-4">
              <strong>DermatologistOnCall</strong> works like a virtual office visit: a flat fee for a
              single consultation with a board-certified dermatologist, who sends a diagnosis and a
              prescription to your pharmacy. There is no subscription and no compounding — you fill the
              script yourself and pay the pharmacy separately. Best when you want a diagnosis, not a
              standing plan.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> a $30 subscription and a $95 visit are not really
                comparable numbers. The subscription includes the medication; the visit does not. Always
                compare the all-in cost — clinician fee <em>plus</em> medication — for the way you will
                actually use it.
              </p>
            </div>

            <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Brand-by-Brand Cost Comparison</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from each provider&apos;s published
              pricing</strong> as of mid-2026, not live quotes. Pricing and promotions change
              frequently, so confirm the current number on the provider&apos;s own page before you sign
              up.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Clinician fee (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ongoing cost (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Curology</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription</td>
                    <td className="border border-gray-300 px-4 py-3">Included; trial box ~$5.45 S&amp;H</td>
                    <td className="border border-gray-300 px-4 py-3">~$29.95/mo after trial</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hers / Hims</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription</td>
                    <td className="border border-gray-300 px-4 py-3">Included</td>
                    <td className="border border-gray-300 px-4 py-3">~$29-$40/mo custom cream</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nurx</td>
                    <td className="border border-gray-300 px-4 py-3">Consult + meds</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 acne/rosacea, ~$30 anti-aging (1 yr care)</td>
                    <td className="border border-gray-300 px-4 py-3">Meds from ~$25-$30/mo + ~$3/mo support fee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">DermatologistOnCall</td>
                    <td className="border border-gray-300 px-4 py-3">Pay-per-visit</td>
                    <td className="border border-gray-300 px-4 py-3">~$95/visit (30-day follow-up)</td>
                    <td className="border border-gray-300 px-4 py-3">Medication filled at pharmacy (separate)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">In-person dermatologist</td>
                    <td className="border border-gray-300 px-4 py-3">Office visit (cash)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150-$400 new patient</td>
                    <td className="border border-gray-300 px-4 py-3">~$100-$250 follow-up + meds/procedures</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> for a routine, photo-diagnosable concern, every online
              option lands well below an in-person visit. The cheapest monthly path is a subscription;
              the cheapest one-time path is Nurx&apos;s consult-plus-medication; and the closest thing
              to a traditional &quot;see a dermatologist once&quot; is DermatologistOnCall&apos;s flat
              visit fee.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Curology&apos;s custom formula, bought outright</h4>
              <p className="text-gray-700">
                If you prefer not to subscribe, Curology also sells its Custom Formula as a standalone
                bottle — roughly <strong>$59.90 for a 60-day supply</strong> with free shipping
                (estimate). That can work out cheaper per month than the recurring plan for some users,
                but you still complete a clinician review to qualify. Compare the per-month math both
                ways.
              </p>
            </div>

            <h2 id="by-condition" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost by Condition: Acne, Anti-Aging, Rosacea</h2>

            <p className="text-gray-700 mb-4">
              Pricing also shifts by what you are treating — partly because some conditions can be
              billed to insurance and some cannot.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Acne</h3>
            <p className="text-gray-700 mb-4">
              The most competitive category. Curology and Hers both sell custom acne creams in the
              ~$25-$40/month range. Nurx charges its ~$40 acne consultation (covering a year of care)
              and then prices prescription topical medication from about $25/month self-pay, or bills
              insurance where it applies. Acne is the textbook online-derm use case: clear photos,
              well-established treatments, no hands-on exam required.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Anti-aging</h3>
            <p className="text-gray-700 mb-4">
              Anti-aging formulas usually pair a retinoid like tretinoin with ingredients such as
              azelaic acid and niacinamide. Curology&apos;s anti-aging Custom Formula and Hers&apos;
              custom anti-aging cream both sit in the ~$29-$40/month range (estimate). Nurx prices
              anti-aging as a ~$30 consultation plus roughly $90 for a three-month medication supply
              (about $30/month). Note: insurers generally treat anti-aging as cosmetic, so it is almost
              always out of pocket. For the drug-specific detail, see our{' '}
              <Link href="/guides/tretinoin-online" className="text-blue-600 hover:underline">how to get tretinoin online</Link> guide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Rosacea</h3>
            <p className="text-gray-700 mb-4">
              Rosacea is treatable online and, importantly, is often considered medical rather than
              cosmetic — so it can sometimes run through insurance. Nurx lists rosacea treatment as a
              ~$40 consultation, then medication from about $30/month self-pay (potentially $0 with
              insurance). Curology can also formulate for rosacea within its subscription. Because
              rosacea has several subtypes, the right medication varies, which is exactly what the
              clinician review is for.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Condition</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical online cost (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Insurance?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Acne</td>
                    <td className="border border-gray-300 px-4 py-3">~$25-$40/mo (sub) or ~$40 consult + $25/mo meds</td>
                    <td className="border border-gray-300 px-4 py-3">Sometimes (medical)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Anti-aging</td>
                    <td className="border border-gray-300 px-4 py-3">~$29-$40/mo (sub) or ~$30 consult + ~$30/mo meds</td>
                    <td className="border border-gray-300 px-4 py-3">Rarely (cosmetic)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rosacea</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 consult + ~$30/mo meds (or sub)</td>
                    <td className="border border-gray-300 px-4 py-3">Often (medical)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="vs-in-person" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Online vs In-Person: What Is Included</h2>

            <p className="text-gray-700 mb-4">
              Price is only half the comparison. The other half is what each format can and cannot do.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Online dermatology</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">In-person dermatologist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Typical cash cost</td>
                    <td className="border border-gray-300 px-4 py-3">~$25-$95 (visit or month)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150-$400 new patient</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">How it&apos;s assessed</td>
                    <td className="border border-gray-300 px-4 py-3">Intake + photos, reviewed remotely</td>
                    <td className="border border-gray-300 px-4 py-3">Hands-on skin exam</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Prescriptions</td>
                    <td className="border border-gray-300 px-4 py-3">Yes — shipped or sent to pharmacy</td>
                    <td className="border border-gray-300 px-4 py-3">Yes — same-day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Biopsies / procedures</td>
                    <td className="border border-gray-300 px-4 py-3">No</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (extra cost)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Best for</td>
                    <td className="border border-gray-300 px-4 py-3">Acne, rosacea, anti-aging, rashes</td>
                    <td className="border border-gray-300 px-4 py-3">Moles, skin cancer, surgery</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The hard line on what online cannot do</h4>
              <p className="text-gray-700">
                Online dermatology is genuinely good for common, visible conditions — acne, rosacea,
                eczema, psoriasis, hyperpigmentation, hair loss, and cosmetic anti-aging. It is{' '}
                <strong>not</strong> a substitute for in-person care when something is changing,
                bleeding, or growing. A suspicious or evolving mole, a possible skin cancer, or anything
                that may need a biopsy belongs in an office where a dermatologist can examine and sample
                it. A good online provider will tell you to come in.
              </p>
            </div>

            <h2 id="apostrophe" className="text-2xl font-bold text-gray-900 mt-12 mb-6">A Note on Apostrophe (It Shut Down)</h2>

            <p className="text-gray-700 mb-4">
              You will still see <strong>Apostrophe</strong> recommended in older comparisons, so it is
              worth being clear: Apostrophe was acquired by Hims &amp; Hers and then{' '}
              <strong>discontinued in March 2025</strong>. It no longer accepts new patients,
              consultations, or prescriptions. If a guide still lists it as a live option, that guide is
              out of date.
            </p>

            <p className="text-gray-700 mb-4">
              The practical replacement is Hims &amp; Hers&apos; own skincare line — the same
              custom-compounded, dermatologist-designed formula approach Apostrophe used, now offered
              under <strong>Hims</strong> and <strong>Hers</strong>. If you held an Apostrophe
              prescription, you cannot transfer the subscription; you would start a fresh consultation
              with Hers/Hims, Curology, Nurx, or another board-certified service.
            </p>

            <h2 id="hidden" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hidden Costs to Watch For</h2>

            <p className="text-gray-700 mb-4">
              The headline price is rarely the whole price. Before you commit, check for these:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Monthly support or processing fees.</strong> Nurx adds about $3 in any month an order ships, on top of the medication.</li>
              <li><strong>Add-on products.</strong> Subscriptions love to upsell a cleanser and moisturizer, which can double the box price.</li>
              <li><strong>Medication is separate on pay-per-visit.</strong> A ~$95 DermatologistOnCall visit does not include the drug — you pay the pharmacy too.</li>
              <li><strong>Cosmetic = out of pocket.</strong> Anti-aging and melasma are usually not billable to insurance; budget the full cash price.</li>
              <li><strong>Auto-renewal.</strong> Subscriptions keep charging until you cancel; the discounted first month is not the steady-state price.</li>
              <li><strong>Trial-to-full jump.</strong> A $5 first box can become ~$30+ the next month — read the renewal terms.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">HSA/FSA can quietly cut the cost</h4>
              <p className="text-gray-700">
                Online dermatology visits and prescription treatments are generally HSA/FSA-eligible
                because they are medical care. DermatologistOnCall and Nurx both note that patients
                commonly pay with HSA, FSA, or HRA funds, and some visits may be reimbursable as an
                out-of-network insurance benefit. Confirm eligibility with your plan administrator
                first.
              </p>
            </div>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: a simple monthly plan</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want one custom cream handled for you, no separate pharmacy trip</li>
                <li>Your concern is ongoing acne or anti-aging maintenance</li>
                <li>Curology or Hers/Hims fit this: ~$25-$40/month, review included</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest all-in cost on a treatable condition</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have acne or rosacea and want the option to use insurance</li>
                <li>You want a one-time consult that covers a year of follow-up</li>
                <li>Nurx fits this: ~$40 consult, then medication from ~$25-$30/month</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: a real diagnosis without a subscription</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want a board-certified dermatologist to assess a specific issue once</li>
                <li>You prefer to fill the prescription at your own pharmacy</li>
                <li>DermatologistOnCall fits this: flat ~$95 visit with a 30-day follow-up</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>If anything is changing, growing, or bleeding, see an in-person dermatologist first</li>
              <li>For ongoing acne or anti-aging, price a subscription (Curology, Hers)</li>
              <li>For acne or rosacea where insurance might help, price Nurx&apos;s consult + meds</li>
              <li>For a one-off diagnosis, price a pay-per-visit service like DermatologistOnCall</li>
              <li>Add up the all-in cost — clinician fee plus medication — before deciding</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cash-pay guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>One medication, in depth:</strong> our <Link href="/guides/tretinoin-online" className="text-blue-600 hover:underline">tretinoin online guide</Link> covers the retinoid most of these creams are built around</li>
              <li><strong>Other telehealth costs:</strong> compare <Link href="/guides/online-ed-treatment" className="text-blue-600 hover:underline">online ED treatment</Link> for how visit-vs-subscription pricing works elsewhere</li>
              <li><strong>In-office aesthetics:</strong> see the <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link> and <Link href="/guides/botox-cost-guide" className="text-blue-600 hover:underline">Botox cost guide</Link> for procedures online derm cannot do</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Telehealth Options</h3>
            <p className="mb-6 text-blue-100">
              See online dermatology and other virtual-care services side by side, with transparent
              self-pay pricing.
            </p>
            <Link
              href="/telehealth"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Telehealth Services
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
              not affiliated with Curology, Nurx, Hims &amp; Hers, or DermatologistOnCall. Pricing is
              based on publicly available data from each provider and third-party reporting, and is
              presented as estimates that vary by service, formula, condition, location, and current
              promotions — always verify the current price directly with the provider before
              purchasing. Online dermatology is appropriate for many common skin concerns but is not a
              substitute for in-person care; a suspicious or changing mole, possible skin cancer, or any
              concern that may need a biopsy should be evaluated by a dermatologist in person. Discuss
              any new treatment with a licensed clinician.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Curology — support.curology.com / curology.com (subscription, trial, and Custom Formula pricing; conditions treated)</li>
              <li>• Nurx — nurx.com FAQs (acne, rosacea, and anti-aging consultation fees and medication pricing; support fee)</li>
              <li>• DermatologistOnCall — dermatologistoncall.com (per-visit fee, 30-day follow-up, HSA/FSA payment)</li>
              <li>• Hers / Hims — forhers.com / hims.com (custom anti-aging and acne cream pricing and ingredients)</li>
              <li>• Miiskin — online vs in-person dermatology cost and scope comparison</li>
              <li>• Cosmetics Business — reporting on Hims &amp; Hers discontinuing Apostrophe (March 2025)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Online Dermatology Price Cheat Sheet"
            description="Curology vs Nurx vs Hers vs DermatologistOnCall: the all-in cost for acne, anti-aging, and rosacea."
            source="guide_online_dermatology_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
