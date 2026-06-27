import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Cash Pay Surgery Cost: How Transparent Pricing Works' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cash-pay-surgery-guide' },
  description:
    'Cash pay surgery cost explained: how bundled all-inclusive prices (Surgery Center of Oklahoma model) work, why they beat insurance, and finding a center.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What does "cash pay surgery" actually cost?',
    answer:
      'It depends entirely on the procedure, but the defining feature is a single bundled price quoted up front. Transparent centers like the Surgery Center of Oklahoma post all-inclusive cash prices such as roughly $2,750 for a carpal tunnel release, ~$4,000 for cataract surgery, and ~$7,040 for an ACL repair — one number covering facility, surgeon, anesthesia, and routine follow-up. These are published estimates that change over time; always request a current written quote for your specific procedure before committing.',
  },
  {
    question: 'Why is cash pay surgery sometimes cheaper than using insurance?',
    answer:
      'Two reasons. First, a transparent center cuts the insurance billing overhead — which can run 15% or more of a hospital\'s costs — and passes much of that saving on. Second, hospital "list" (chargemaster) prices are inflated negotiating fences; a peer-reviewed comparison of 70 hospital services found cash prices were equal to or lower than the median insurer-negotiated price for about 47% of services. If you have a high deductible you have not met, the cash price can be lower than your insured out-of-pocket cost. Compare both for your own plan before deciding.',
  },
  {
    question: 'What is included in an all-inclusive bundled surgery price?',
    answer:
      'At transparent centers, the posted price typically bundles the facility fee, the surgeon\'s fee, the anesthesiologist\'s fee, and uncomplicated follow-up care into one quote — so you are not chasing three or four separate bills. What is usually NOT included: the initial consultation (the Surgery Center of Oklahoma lists this around $250), pre-op diagnostics or imaging, an unplanned overnight stay, and the treatment of rare complications. Ask the center for the written list of inclusions and exclusions before you book.',
  },
  {
    question: 'How do I find a cash-pay surgery center near me?',
    answer:
      'Start with two directories that list transparent, bundled-price providers: the Free Market Medical Association\'s ShopHealth tool (you can search by procedure, provider, or location without being a member), and the published price pages of named centers like the Surgery Center of Oklahoma (Oklahoma City) and Texas Free Market Surgery (Austin and Houston). Confirm the price is bundled, get it in writing, and verify the surgeon\'s credentials and the facility\'s accreditation before scheduling.',
  },
  {
    question: 'Does cash pay surgery count toward my insurance deductible?',
    answer:
      'Usually not. If you pay a cash center directly and bypass your insurer, that spending generally does not count toward your deductible or out-of-pocket maximum, and the result may not flow into your insurer\'s records automatically. That trade-off matters: if you have already met your deductible for the year, running the procedure through insurance may be cheaper. If you have not, the transparent cash price is often the better deal. Check both before assuming.',
  },
  {
    question: 'Is a cash-pay surgery center safe and legitimate?',
    answer:
      'A transparent price says nothing on its own about quality — you have to verify it separately. Legitimate cash-pay centers are licensed ambulatory surgery centers (ASCs) staffed by board-certified surgeons and anesthesiologists, often accredited and physician-owned. Before you book, confirm the surgeon is board-certified for your procedure, ask about the facility\'s accreditation and complication policy, and make sure the quote is genuinely all-inclusive. This is information, not medical advice — discuss whether surgery and the specific facility are right for you with a licensed clinician.',
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

export default function CashPaySurgeryGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cash Pay Surgery Cost: How Transparent Bundled Pricing Works',
    description:
      'A practical guide to cash-pay surgery — how all-inclusive bundled pricing (the Surgery Center of Oklahoma model) works, why it can beat insurance billing, real posted prices, and how to find a transparent surgery center.',
    url: 'https://vitalityscout.com/guides/cash-pay-surgery-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cash-pay-surgery-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Cash-pay (self-pay) outpatient surgery' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Surgery Center of Oklahoma — transparent all-inclusive surgery pricing', url: 'https://surgerycenterok.com/surgery-prices/' },
      { '@type': 'CreativeWork', name: 'Consumer Reports — How Paying Your Doctor in Cash Could Save You Money', url: 'https://www.consumerreports.org/healthcare-costs/how-paying-your-doctor-in-cash-could-save-you-money/' },
      { '@type': 'CreativeWork', name: 'Johns Hopkins Bloomberg School of Public Health — Hospitals\' cash prices for uninsured often lower than insurer-negotiated prices', url: 'https://publichealth.jhu.edu/2023/study-finds-hospitals-cash-prices-for-uninsured-often-lower-than-insurer-negotiated-prices' },
      { '@type': 'CreativeWork', name: 'JAMA Network Open — Comparison of US Hospital Cash Prices and Commercial Negotiated Prices for 70 Services', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8693213/' },
      { '@type': 'CreativeWork', name: 'Free Market Medical Association — ShopHealth provider/price finder', url: 'https://fmma.org/shophealth/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cash-pay-surgery-guide#faq', url: 'https://vitalityscout.com/guides/cash-pay-surgery-guide' };

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
              <span className="text-gray-900">Cash Pay Surgery Guide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical Tourism &amp; Surgery Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Surgery
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cash Pay Surgery Cost: How Transparent Bundled Pricing Works
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A growing set of US surgery centers post one all-inclusive cash price for a
              procedure — no claim, no surprise bills. Here is how the model works, why it can
              undercut insurance billing, and how to find a center near you.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Cash-pay surgery</strong> means paying a transparent center one
                <strong> bundled, all-inclusive price</strong> — facility, surgeon, anesthesia, and
                routine follow-up in a single quote, with no insurance claim. Pioneered by the
                Surgery Center of Oklahoma, posted prices run roughly{' '}
                <strong>$2,750 for carpal tunnel release</strong> to <strong>~$7,040 for an ACL
                repair</strong>, often well below hospital billing. These are published estimates
                that change — get a written quote for your procedure. This is information, not
                medical advice.
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
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Cash-Pay Surgery Model at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">What it is</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• One bundled, all-inclusive price</li>
                  <li>• Posted publicly, before you book</li>
                  <li>• No insurance claim, no chargemaster</li>
                  <li>• Facility + surgeon + anesthesia + follow-up</li>
                  <li>• Quote honored as written (barring complications)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">What to verify</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Is the quote genuinely all-inclusive?</li>
                  <li>• Consult fee separate? (often ~$250)</li>
                  <li>• Surgeon board-certified for the procedure</li>
                  <li>• Facility licensed/accredited ASC</li>
                  <li>• Written complication policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Cash-pay can win if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You are uninsured or have a high deductible</li>
                  <li>• You have not met your deductible this year</li>
                  <li>• The procedure is elective and shoppable</li>
                  <li>• You value a single, predictable price</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Insurance may win if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have already met your deductible</li>
                  <li>• The procedure is emergent, not elective</li>
                  <li>• Your plan covers it at a low copay</li>
                  <li>• You need the spend to count toward your OOP max</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What cash-pay surgery is (the Oklahoma model)</a></li>
              <li><a href="#prices" className="text-blue-600 hover:underline">2. Real posted cash prices</a></li>
              <li><a href="#vs-insurance" className="text-blue-600 hover:underline">3. Why cash can beat insurance billing</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">4. What the bundled price includes (and excludes)</a></li>
              <li><a href="#find" className="text-blue-600 hover:underline">5. How to find a cash-pay surgery center</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">6. Things to know before you book</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Is it right for you?</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              For most surgery, you do not learn the price until the bills arrive — and they arrive
              from the facility, the surgeon, and the anesthesiologist separately, weeks apart. A
              cash-pay surgery center flips that: it posts one all-inclusive price up front, you pay
              it directly, and no insurer is involved. For elective, shoppable procedures, that
              transparency can mean paying a fraction of what insurance billing would have generated.
              Here is the honest breakdown.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Cash-Pay Surgery Is (The Oklahoma Model)</h2>

            <p className="text-gray-700 mb-4">
              The template for transparent surgery pricing is the{' '}
              <strong>Surgery Center of Oklahoma</strong> in Oklahoma City. In 2009 it became the
              first US facility to post all-inclusive surgical prices online — a move that pushed
              other centers to publish or match. It is physician-owned, does not accept insurance of
              any kind, and bills itself as &quot;a free market-loving, price-displaying&quot; surgical
              facility. Its co-founder, anesthesiologist Dr. Keith Smith, also helped start the Free
              Market Medical Association, which now lists hundreds of providers that publish cash
              prices.
            </p>

            <p className="text-gray-700 mb-4">
              The core idea is the <strong>bundled price</strong>. Instead of separate facility,
              surgeon, and anesthesia bills routed through an insurer, the center quotes one number
              that covers the whole surgical episode. You see it before you commit. What is quoted is
              what you pay — unless something rare and unexpected happens, which the center explains in
              advance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the same procedure done at a hospital generates a
                bill against an inflated &quot;chargemaster&quot; list price, which insurers then
                negotiate down behind the scenes. A cash center skips that machinery entirely, so the
                price you see is the price — not an opening bid in a negotiation you never see.
              </p>
            </div>

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real Posted Cash Prices</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>all-inclusive cash prices published by the Surgery Center
              of Oklahoma</strong> and reported in third-party coverage. They are real posted numbers,
              but pricing changes over time and varies by center and by case — treat them as{' '}
              <strong>estimates to confirm with a written quote</strong>, not live quotes for your
              procedure.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Posted cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Carpal tunnel release</td>
                    <td className="border border-gray-300 px-4 py-3">~$2,750</td>
                    <td className="border border-gray-300 px-4 py-3">Outpatient; one hand</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tonsillectomy</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,875</td>
                    <td className="border border-gray-300 px-4 py-3">Includes an overnight stay</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cataract surgery</td>
                    <td className="border border-gray-300 px-4 py-3">~$4,000</td>
                    <td className="border border-gray-300 px-4 py-3">Per eye; lens type affects price</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Achilles tendon repair</td>
                    <td className="border border-gray-300 px-4 py-3">~$5,730</td>
                    <td className="border border-gray-300 px-4 py-3">Outpatient orthopedic</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rotator cuff repair (open)</td>
                    <td className="border border-gray-300 px-4 py-3">~$6,160</td>
                    <td className="border border-gray-300 px-4 py-3">Technique affects price</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">ACL repair</td>
                    <td className="border border-gray-300 px-4 py-3">~$7,040</td>
                    <td className="border border-gray-300 px-4 py-3">Excludes graft/hardware in some cases</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Laparoscopic inguinal hernia (one side)</td>
                    <td className="border border-gray-300 px-4 py-3">~$7,205</td>
                    <td className="border border-gray-300 px-4 py-3">Total, arrival to discharge</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> these are flat, bundled numbers — not a facility fee with
              a surgeon&apos;s bill and an anesthesia bill stacked on top later. A consultation is
              usually billed separately (the Surgery Center of Oklahoma lists this around{' '}
              <strong>$250</strong>), and items like pre-op diagnostics, an unplanned overnight stay,
              or the treatment of complications can be extra. Always get the inclusions and exclusions
              in writing.
            </p>

            <h2 id="vs-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Cash Can Beat Going Through Insurance</h2>

            <p className="text-gray-700 mb-4">
              It surprises people, but paying cash can cost less than using insurance — especially
              before you have met a high deductible. Two forces drive it:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>No billing overhead:</strong> insurance billing can consume 15% or more of a hospital&apos;s costs. A cash center cuts the insurer out and passes much of that saving to you.</li>
              <li><strong>No chargemaster:</strong> hospital list prices are inflated negotiating fences. A peer-reviewed comparison of 70 hospital services found cash prices were equal to or lower than the median insurer-negotiated price for roughly <strong>47% of services</strong>.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              How that plays out against typical US prices, for context — hospital/insured figures
              vary widely and are <strong>estimates from published cost reporting</strong>, not
              quotes:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Transparent cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical US cost context (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">ACL reconstruction</td>
                    <td className="border border-gray-300 px-4 py-3">~$7,040</td>
                    <td className="border border-gray-300 px-4 py-3">National avg ~$15,445; ~$20K-$50K uninsured</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Knee arthroscopy</td>
                    <td className="border border-gray-300 px-4 py-3">Bundled all-in (request quote)</td>
                    <td className="border border-gray-300 px-4 py-3">Outpatient avg ~$12,550; ~$4,500-$7,000 uninsured</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Carpal tunnel release</td>
                    <td className="border border-gray-300 px-4 py-3">~$2,750</td>
                    <td className="border border-gray-300 px-4 py-3">~$4,000-$9,000 uninsured (per hand)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cataract surgery</td>
                    <td className="border border-gray-300 px-4 py-3">~$4,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,500-$7,000 per eye uninsured</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The trade-off: a cash payment generally does <strong>not</strong> count toward your
              deductible or out-of-pocket maximum, and the records may not flow to your insurer
              automatically. If you have already met your deductible, running it through insurance can
              be cheaper. Price both for your own plan before deciding.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">HSA/FSA usually applies</h4>
              <p className="text-gray-700">
                A medically necessary surgery is typically an eligible HSA, FSA, or HRA expense, which
                effectively discounts a cash price by your tax rate. Some health-sharing arrangements
                also reimburse transparent cash surgery. Confirm eligibility with your plan
                administrator before assuming a procedure qualifies.
              </p>
            </div>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Bundled Price Includes (And Excludes)</h2>

            <p className="text-gray-700 mb-4">
              The whole point of bundled pricing is that you are not piecing together separate bills.
              At transparent centers, the posted price typically covers:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Facility fee</strong> — the operating room and recovery suite</li>
              <li><strong>Surgeon&apos;s fee</strong> — the operating physician</li>
              <li><strong>Anesthesiologist&apos;s fee</strong> — anesthesia care during the procedure</li>
              <li><strong>Uncomplicated follow-up care</strong> — routine post-op visits</li>
            </ul>

            <p className="text-gray-700 mb-4">
              And what is usually <strong>not</strong> in the headline number:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The initial consultation</strong> — often billed separately (~$250 at the Surgery Center of Oklahoma)</li>
              <li><strong>Pre-op diagnostics and imaging</strong> — labs, X-rays, MRI as needed</li>
              <li><strong>An unplanned overnight stay</strong> — unless the procedure already includes one</li>
              <li><strong>Treatment of rare complications</strong> — explained in advance, not hidden</li>
              <li><strong>Implants, grafts, or hardware</strong> in some procedures — confirm whether these are in the quote</li>
            </ul>

            <h2 id="find" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Find a Cash-Pay Surgery Center</h2>

            <p className="text-gray-700 mb-4">
              Transparent surgery centers are not yet on every corner, but a few directories and named
              centers make them findable:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Where to look</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it is</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">How to use it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FMMA ShopHealth</td>
                    <td className="border border-gray-300 px-4 py-3">Free Market Medical Association directory of cash-price providers</td>
                    <td className="border border-gray-300 px-4 py-3">Search by procedure, provider, or location; no membership needed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Surgery Center of Oklahoma</td>
                    <td className="border border-gray-300 px-4 py-3">The original price-posting ASC, Oklahoma City</td>
                    <td className="border border-gray-300 px-4 py-3">Browse posted prices; request a written quote</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Texas Free Market Surgery</td>
                    <td className="border border-gray-300 px-4 py-3">Bundled-price surgical platform, Austin &amp; Houston</td>
                    <td className="border border-gray-300 px-4 py-3">Many specialties; ask for the all-in bundled quote</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              When you contact a center, ask four questions: (1) Is the price a single all-inclusive
              bundle? (2) What exactly is excluded? (3) Is the surgeon board-certified for this
              procedure? (4) What happens — and what does it cost — if there is a complication? Get
              the answers in writing.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Cash-pay surgery vs. medical tourism</h4>
              <p className="text-gray-700">
                Domestic cash-pay centers are one way to lower a surgery bill; traveling abroad is
                another. For complex or higher-cost procedures, an accredited overseas hospital can be
                cheaper still — see our{' '}
                <Link href="/guides/medical-tourism-packages" className="text-blue-600 hover:underline">guide to all-inclusive medical tourism packages</Link>{' '}
                and the{' '}
                <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism hub</Link>{' '}
                to weigh the trade-offs.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Book</h2>

            <p className="text-gray-700 mb-4">
              Transparent pricing is a real advantage, but a low price is not the whole story. A
              balanced view:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Price says nothing about quality.</strong> Verify the surgeon&apos;s board certification and the facility&apos;s accreditation separately — a published number is not a credential.</li>
              <li><strong>Confirm what &quot;all-inclusive&quot; means here.</strong> Implants, grafts, hardware, and pre-op imaging may sit outside the headline price.</li>
              <li><strong>Cash spend usually does not count toward your deductible</strong> or out-of-pocket maximum.</li>
              <li><strong>Records may not reach your insurer or PCP automatically.</strong> Plan how your own clinician will get the operative notes.</li>
              <li><strong>Cash-pay fits elective, shoppable procedures.</strong> It is not the path for an emergency.</li>
              <li><strong>No surgery guarantees an outcome.</strong> Discuss whether the procedure is appropriate for you with a licensed clinician.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;quote that grows&quot; pattern</h4>
              <p className="text-gray-700">
                A low headline price can climb once a consult fee, pre-op imaging, an implant, or a
                facility add-on is layered in. Ask for the complete written quote — including the
                consultation and any device or graft — before you compare one center to another or to
                your insured cost.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is Cash-Pay Surgery Right for You?</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Lean cash-pay if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are uninsured, or have a high deductible you have not met</li>
                <li>The procedure is elective and you can plan it</li>
                <li>You want one predictable price and no surprise bills</li>
                <li>A transparent center near you posts a competitive bundled price</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: planned, shoppable outpatient surgery on a high-deductible or cash budget
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Lean insurance if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have already met your deductible for the year</li>
                <li>Your plan covers the procedure at a low copay</li>
                <li>You need the spending to count toward your out-of-pocket maximum</li>
                <li>The surgery is emergent rather than elective</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: anyone whose insured out-of-pocket cost is already lower than the cash quote
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Get a complete written cash quote — including consult, imaging, and any implant</li>
              <li>Ask your insurer for your real out-of-pocket cost given where you are on your deductible</li>
              <li>Verify the surgeon&apos;s board certification and the facility&apos;s accreditation either way</li>
              <li>Compare the two all-in numbers, then choose on total cost and convenience</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost guides</h3>
            <p className="text-gray-700 mb-4">
              Cash-pay surgery is one lever on a big bill. These guides cover the others — comparing
              specific procedures and weighing travel against a domestic center:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Weight-loss surgery:</strong> see our <Link href="/guides/gastric-sleeve-cost-by-country" className="text-blue-600 hover:underline">gastric sleeve cost by country guide</Link> for bundled bariatric pricing</li>
              <li><strong>Bundled bariatric abroad:</strong> our <Link href="/guides/all-inclusive-bariatric-surgery-abroad" className="text-blue-600 hover:underline">all-inclusive bariatric surgery abroad guide</Link> breaks down what a package covers</li>
              <li><strong>Browse every guide:</strong> the full <Link href="/guides" className="text-blue-600 hover:underline">VitalityScout guides index</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Transparent Surgery Options</h3>
            <p className="mb-6 text-blue-100">
              See bundled cash-pay surgery and accredited medical-travel options side by side, with
              estimated pricing to verify.
            </p>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Surgery &amp; Medical Tourism
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

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Surgery Center of Oklahoma — surgerycenterok.com (posted all-inclusive cash prices, consultation fee, what bundled pricing includes)</li>
              <li>• Consumer Reports — How Paying Your Doctor in Cash Could Save You Money (Achilles repair ~$5,730, cataract ~$4,000, Keith Smith / Free Market Medical Association, billing-overhead savings)</li>
              <li>• Johns Hopkins Bloomberg School of Public Health (2023) — Hospitals&apos; cash prices for uninsured often lower than insurer-negotiated prices</li>
              <li>• JAMA Network Open / PMC — Comparison of US Hospital Cash Prices and Commercial Negotiated Prices for 70 Services (47% of cash prices ≤ median insurer-negotiated price)</li>
              <li>• Free Market Medical Association — fmma.org / ShopHealth provider and price finder</li>
              <li>• Becker&apos;s ASC — Surgery Center of Oklahoma posts prices; transparent-pricing ASCs (carpal tunnel ~$2,750, ACL ~$7,040, rotator cuff ~$6,160, tonsillectomy ~$3,875, hernia ~$7,205)</li>
              <li>• Published US cost reporting (Healthgrades, Sidecar Health, GoodRx, CareCredit) — typical hospital/uninsured price ranges for ACL, knee arthroscopy, carpal tunnel, and cataract surgery</li>
            </ul>
          </div>
        </article>

        {/* Disclaimer + affiliate disclosure (shared component) */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Surgery Pricing Checklist"
            description="The four questions to ask a surgery center — and how to compare a cash quote against your insured cost."
            source="guide_cash_pay_surgery_guide"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
