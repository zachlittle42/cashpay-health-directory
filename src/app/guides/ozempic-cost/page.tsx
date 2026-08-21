import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/ozempic-cost';

// Every price and term on this page was read off Novo Nordisk's own published
// pages on 2026-08-21 (NovoCare list-price page, NovoCare + Ozempic.com savings
// pages, NovoCare Pharmacy). Indication language is quoted from the FDA labels
// on DailyMed. Nothing here is estimated or inferred — if Novo changes a number,
// this page is stale until re-verified.
export const metadata: Metadata = {
  title: { absolute: 'Ozempic Cost (2026): $25 With Card, $149-$499 Self-Pay' },
  alternates: { canonical: URL },
  description:
    'Ozempic cost in 2026: list price is $1,027.51 per package, the Ozempic Savings Card can bring commercially insured patients to as little as $25/month, and NovoCare self-pay runs $149-$499/month by dose and form. Verified from Novo Nordisk pages August 2026.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every savings answer restates the published eligibility limits, because the
// headline number ($25) is the one most likely to be quoted out of context.
// The visible FAQ block below mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does Ozempic cost without insurance?',
    answer:
      'Without insurance, the published route is Novo Nordisk\'s self-pay pricing through NovoCare Pharmacy rather than the list price. As published in August 2026, the Ozempic pill starts at $149 per month for the 1.5 mg dose, $199 per month for 4 mg, and $299 per month for 9 mg. The Ozempic pen is $199 per month for the first two months of 0.25 mg or 0.5 mg for patients new to the offer, then $349 per month for 0.25 mg, 0.5 mg, or 1 mg, and $499 per month for 2 mg. The list price for comparison is $1,027.51 per package. Novo Nordisk labels the self-pay pen offer a limited-time offer with pricing to be updated after December 31, 2026, so confirm the current number at NovoCare before you fill.',
  },
  {
    question: 'How much is Ozempic with the savings card?',
    answer:
      'Novo Nordisk advertises that eligible patients with commercial insurance may pay as little as $25 for any dose of Ozempic, for up to a 3-month prescription, for either the pen or the pill. That $25 is subject to a maximum savings of $100 per month, which is the part most summaries leave out: the card covers up to $100 of your monthly cost, so if your plan leaves you owing more than roughly $125, you pay the difference. One month is defined as one box containing one Ozempic pen, or one bottle of 30 tablets. Eligibility and restrictions apply and government beneficiaries are excluded. Full terms are at SavingsCardEligibility.com.',
  },
  {
    question: 'Who is eligible for the Ozempic Savings Card?',
    answer:
      'The $25 offer is for patients with commercial (private or employer) drug insurance and a valid prescription. Government beneficiaries are excluded, and Novo Nordisk states that individuals enrolled in both a commercial and a government-funded plan are treated as government-insured. Novo Nordisk specifically carves out three plan types as NOT government programs for this offer: the Federal Employees Health Benefits (FEHB) Program, Affordable Care Act health exchange plans, and insurance provided through state employee plans. Patients who are enrolled in government programs are directed to the self-pay price instead. The offer operates outside of any third-party insurance, so what you save does not count toward your deductible or out-of-pocket maximum and cannot be submitted to your insurer for reimbursement.',
  },
  {
    question: 'What is the list price of Ozempic?',
    answer:
      'NovoCare publishes a list price of $1,027.51 for each Ozempic package: the 0.25 or 0.5 mg pen (1 x 1.5-mL), the 1 mg pen (1 x 3-mL), the 2 mg pen (1 x 3-mL), and the 1.5 mg, 4 mg, and 9 mg tablets. Novo Nordisk defines list price as the original price set by the manufacturer before any discounts or rebates, and states that most people with health insurance do not pay it. The same NovoCare page also renders $997.58 for those identical packages in its mobile layout, so treat roughly $1,000 per month as the list-price ballpark and read the current figure on the page yourself.',
  },
  {
    question: 'Is Ozempic approved for weight loss?',
    answer:
      'No. Per the FDA label on DailyMed, Ozempic is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes, to reduce the risk of major adverse cardiovascular events in adults with type 2 diabetes and established cardiovascular disease, and to reduce the risk of sustained eGFR decline, end-stage kidney disease, and cardiovascular death in adults with type 2 diabetes and chronic kidney disease. Weight loss is not an approved indication for any Ozempic product, so prescribing it for weight management is off-label. Wegovy is the semaglutide brand FDA-approved for chronic weight management. This matters for cost because coverage, savings-card terms, and manufacturer self-pay programs are all built around the approved use.',
  },
  {
    question: 'Will my insurance cover Ozempic?',
    answer:
      'It depends on your plan and, in practice, on your diagnosis. Ozempic is approved for type 2 diabetes, so plans that cover it generally build their rules around that indication, and many require prior authorization. Novo Nordisk runs a coverage checker on NovoCare that tells you whether your plan covers Ozempic and gives an estimated cost. If you are seeking semaglutide for weight management rather than diabetes, the on-label product is Wegovy, and weight-management coverage is a separate question from diabetes coverage under most plans. Check your specific plan rather than relying on a general answer.',
  },
  {
    question: 'Is there a cheaper way to get semaglutide than Ozempic?',
    answer:
      'Possibly, depending on why you need it. If the goal is weight management, Wegovy is the on-label semaglutide product and has its own NovoCare self-pay pricing. If the goal is diabetes control, the Ozempic pill self-pay price of $149 per month for the 1.5 mg dose is currently the lowest published Ozempic number, well below the $349 to $499 per month steady-state pen price. Novo Nordisk also runs a Patient Assistance Program that provides free medicine to those who qualify, with no registration or monthly fees. Beyond that, cash-pay clinic programs and compounded semaglutide are separate markets with their own tradeoffs, covered in our semaglutide cost and compounded semaglutide guides.',
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

export default function OzempicCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ozempic Cost: List Price, Savings Card, and Self-Pay Pricing',
    description:
      'What Ozempic costs in 2026 — the published list price, the Ozempic Savings Card terms for commercially insured patients, NovoCare self-pay pricing by dose for the pen and the pill, and why the weight-loss version is a different product.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'Drug', name: 'Ozempic (semaglutide)', activeIngredient: 'semaglutide' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-21',
    dateModified: '2026-08-21',
    citation: [
      { '@type': 'CreativeWork', name: 'NovoCare — What is the list price for Ozempic and will it impact me?', url: 'https://www.novocare.com/diabetes/products/ozempic/explaining-list-price.html' },
      { '@type': 'CreativeWork', name: 'NovoCare — Ozempic savings offer: commercial-insurance and self-pay pricing', url: 'https://www.novocare.com/diabetes/products/ozempic/savings-offer.html' },
      { '@type': 'CreativeWork', name: 'Ozempic.com — Ozempic cost and insurance coverage (savings by dose and form)', url: 'https://www.ozempic.com/savings-and-resources/save-on-ozempic.html' },
      { '@type': 'CreativeWork', name: 'NovoCare Pharmacy — self-pay starting prices for Ozempic pen and pill', url: 'https://www.novocare.com/pharmacy.html' },
      { '@type': 'CreativeWork', name: 'DailyMed — OZEMPIC (semaglutide) injection, solution: FDA label indications', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79' },
      { '@type': 'CreativeWork', name: 'DailyMed — OZEMPIC / RYBELSUS (oral semaglutide) tablet: FDA label indications', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Ozempic pill, the only FDA-approved oral peptide GLP-1 for adults with type 2 diabetes', url: 'https://www.prnewswire.com/news-releases/novo-nordisks-ozempic-pill-the-only-fda-approved-oral-peptide-glp-1-medication-for-adults-with-type-2-diabetes-soon-to-be-available-in-the-us-302760106.html' },
      { '@type': 'CreativeWork', name: 'NovoCare — Novo Nordisk Patient Assistance Program', url: 'https://www.novocare.com/diabetes/help-with-costs/pap.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Ozempic Cost', item: URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Ozempic Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 &amp; Weight-Loss Clinics
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ozempic Cost: With Insurance, Without, and the Savings Card
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Almost nobody pays Ozempic&apos;s list price. What you actually pay comes down to three
              published numbers — the savings card, the self-pay price, and your plan&apos;s rules.
              Here is each one, straight from Novo Nordisk&apos;s own pages.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Ozempic&apos;s published list price is <strong>$1,027.51</strong> per package. Most
                people pay far less. With commercial insurance, the{' '}
                <strong>Ozempic Savings Card</strong> advertises{' '}
                <strong>as little as $25/month</strong> for any dose, capped at $100/month in savings.
                Without insurance, <strong>NovoCare self-pay</strong> runs{' '}
                <strong>$149-$299/month</strong> for the pill and <strong>$199-$499/month</strong> for
                the pen. Verified from Novo Nordisk pages in August 2026. Ozempic is approved for type
                2 diabetes, not weight loss.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices verified: August 21, 2026 • 12 min read
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
                <div className="font-bold text-blue-600 mb-2">With commercial insurance</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• As little as $25/month, any dose</li>
                  <li>• Covers up to a 3-month prescription</li>
                  <li>• Capped at $100/month in savings</li>
                  <li>• Government beneficiaries excluded</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Uninsured / self-pay</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Pill: $149 / $199 / $299 per month</li>
                  <li>• Pen: $199 intro, then $349-$499</li>
                  <li>• Through NovoCare Pharmacy</li>
                  <li>• Pen offer stated as limited-time</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Prices as published by Novo Nordisk on August 21, 2026. Eligibility and restrictions
              apply. Confirm the current price before you fill.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Use the savings card if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have commercial or employer drug coverage</li>
                  <li>• Your plan already covers Ozempic</li>
                  <li>• Your remaining cost is under ~$125/month</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Use self-pay pricing if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have no drug coverage at all</li>
                  <li>• You&apos;re on Medicare, Medicaid, VA, or TRICARE</li>
                  <li>• Your plan denied Ozempic or requires a step you can&apos;t clear</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#list-price" className="text-blue-600 hover:underline">1. Ozempic&apos;s list price</a></li>
              <li><a href="#savings-card" className="text-blue-600 hover:underline">2. The Ozempic Savings Card: the $25 number and its cap</a></li>
              <li><a href="#eligibility" className="text-blue-600 hover:underline">3. Who actually qualifies</a></li>
              <li><a href="#self-pay" className="text-blue-600 hover:underline">4. Self-pay pricing without insurance</a></li>
              <li><a href="#pill-vs-pen" className="text-blue-600 hover:underline">5. The pill is cheaper than the pen</a></li>
              <li><a href="#insurance" className="text-blue-600 hover:underline">6. Insurance reality for a diabetes drug</a></li>
              <li><a href="#weight-loss" className="text-blue-600 hover:underline">7. If you want it for weight loss, read this</a></li>
              <li><a href="#cheaper" className="text-blue-600 hover:underline">8. Cheaper routes to semaglutide</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Ozempic pricing confuses people because there are four different numbers in circulation
              and they describe four different situations. There is the list price, which almost
              nobody pays. There is the savings-card price, which requires commercial insurance. There
              is the manufacturer&apos;s self-pay price, which is for people without coverage. And
              there is whatever your specific plan decides your copay is. Below, each number, with the
              published fine print that changes what it means.
            </p>

            <h2 id="list-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ozempic&apos;s List Price</h2>

            <p className="text-gray-700 mb-4">
              NovoCare publishes a list price of <strong>$1,027.51</strong> per package, and it is the
              same figure across every form and strength:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Package</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">List price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pen, 0.25 or 0.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 x 1.5-mL pen</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pen, 1 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 x 3-mL pen</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pen, 2 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 x 3-mL pen</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pill, 1.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 bottle of 30 tablets</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pill, 4 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 bottle of 30 tablets</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic pill, 9 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1 bottle of 30 tablets</td>
                    <td className="border border-gray-300 px-4 py-3">$1,027.51</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Novo Nordisk defines list price as &quot;the original price set for a medication by a
              manufacturer before any discounts or rebates are applied,&quot; and states plainly that
              &quot;most people don&apos;t pay list price if they have health insurance.&quot; Treat it
              as the sticker on the windshield, not the transaction price.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">One honest wrinkle</h4>
              <p className="text-gray-700">
                NovoCare&apos;s list-price page renders <strong>$1,027.51</strong> in its desktop
                layout and <strong>$997.58</strong> for those same packages in its mobile layout — the
                two blocks were not updated together. We report the desktop figure and flag the
                discrepancy rather than quietly picking one. Either way, the practical takeaway is
                unchanged: Ozempic&apos;s list price is roughly $1,000 per month, and the savings-card
                or self-pay price is the number that actually applies to you.
              </p>
            </div>

            <h2 id="savings-card" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Ozempic Savings Card: the $25 Number and Its Cap</h2>

            <p className="text-gray-700 mb-4">
              Novo Nordisk advertises that eligible commercially insured patients{' '}
              <strong>&quot;pay as little as $25&quot;</strong> for any dose of Ozempic — pen or pill —
              for up to a 3-month prescription. That is the headline everyone quotes. The sentence
              immediately after it is the one that matters:{' '}
              <strong>savings are subject to a maximum of $100 per month</strong>.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What the $100 cap means in practice:</strong> the card absorbs up to $100 of
                your monthly cost. If your plan leaves you owing $120, the card takes you to about
                $25. If your plan leaves you owing $400 — because you are in a deductible phase, for
                instance — the card takes $100 off and you pay the rest. &quot;As little as $25&quot;
                is a floor, not a flat rate.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Novo Nordisk defines one month as <strong>one box containing one Ozempic pen</strong>, or{' '}
              <strong>one bottle of 30 tablets</strong> of the Ozempic pill. The company also reserves
              the right to modify or cancel the program at any time, and directs patients to the full
              terms at SavingsCardEligibility.com.
            </p>

            <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Actually Qualifies</h2>

            <p className="text-gray-700 mb-4">
              The published eligibility rules are more specific than most summaries suggest, and a few
              of the carve-outs cut in patients&apos; favor. Straight from Novo Nordisk&apos;s savings
              page:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Commercial insurance is required</strong> for the $25 offer, along with a valid prescription.</li>
              <li><strong>Government beneficiaries are excluded.</strong> Medicare, Medigap, VA, DoD, TRICARE, Medicaid, and other state or federal medical or pharmaceutical benefit programs all disqualify you from the card.</li>
              <li><strong>Dual enrollment counts as government.</strong> Novo Nordisk states that individuals with both commercial and government-funded plans &quot;ARE considered patients with government insurance.&quot;</li>
              <li><strong>Three plan types are explicitly NOT government programs</strong> for purposes of this offer: the Federal Employees Health Benefits (FEHB) Program, Affordable Care Act health exchange plans, and insurance provided through state employee plans. If you are on one of those, you are not excluded.</li>
              <li><strong>Excluded patients are not out of options.</strong> Novo Nordisk states that patients enrolled in government programs &quot;are able to pay the self-pay price for their prescription.&quot;</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The part that surprises people</h4>
              <p className="text-gray-700">
                The savings offer &quot;operates outside of any third-party insurance.&quot; Novo
                Nordisk states that the money spent and the discounts you receive{' '}
                <strong>will not count toward your deductible or out-of-pocket requirements</strong>{' '}
                and cannot be submitted to your insurer for reimbursement. If you were counting on a
                high-cost prescription to burn down your deductible, the card changes that math.
              </p>
            </div>

            <h2 id="self-pay" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Self-Pay Pricing Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              For uninsured and self-pay patients, Novo Nordisk sells directly through{' '}
              <strong>NovoCare Pharmacy</strong> at published per-dose prices. These are the numbers
              that answer &quot;what does Ozempic cost without insurance,&quot; and they are nowhere
              near the list price:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Form &amp; dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Self-pay price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Who it applies to</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pill, 1.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$149 / month</td>
                    <td className="border border-gray-300 px-4 py-3">New patients (starting dose)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pill, 4 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$199 / month</td>
                    <td className="border border-gray-300 px-4 py-3">Existing patients</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pill, 9 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$299 / month</td>
                    <td className="border border-gray-300 px-4 py-3">Existing patients</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pen, 0.25 mg or 0.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$199 / month</td>
                    <td className="border border-gray-300 px-4 py-3">First 2 fills, patients new to the offer</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pen, 0.25 / 0.5 / 1 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$349 / month</td>
                    <td className="border border-gray-300 px-4 py-3">After the intro period</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pen, 2 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$499 / month</td>
                    <td className="border border-gray-300 px-4 py-3">Existing patients, highest pen dose</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The pen&apos;s <strong>$199 introductory price</strong> covers two monthly fills of the
              0.25 mg and 0.5 mg starting doses for patients new to the Ozempic Savings Offer or
              NovoCare Pharmacy. Novo Nordisk labels it a <strong>limited-time offer</strong> good for
              two monthly fills through <strong>December 31, 2026</strong>, with pricing &quot;to be
              updated&quot; after that date. Plan on the steady-state numbers ($349 or $499), not the
              intro price, when you budget past the first two months.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">If you cannot afford any of these</h4>
              <p className="text-gray-700">
                Novo Nordisk runs a <strong>Patient Assistance Program</strong> that, per NovoCare,
                &quot;provides free medicine to those who qualify without any registration or monthly
                fees.&quot; It is income- and coverage-tested and requires an application, but it is a
                real published route and it is worth checking before you assume the drug is out of
                reach.
              </p>
            </div>

            <h2 id="pill-vs-pen" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Pill Is Cheaper Than the Pen</h2>

            <p className="text-gray-700 mb-4">
              This is new, and it is the single most useful cost fact on this page.{' '}
              <strong>Ozempic tablets (1.5 mg, 4 mg, 9 mg)</strong> became available in the US for
              adults with type 2 diabetes on May 4, 2026 — per Novo Nordisk, the only FDA-approved
              oral peptide GLP-1 medication for adults with type 2 diabetes. At self-pay, the pill
              starts at{' '}
              <strong>$149/month</strong> against the pen&apos;s <strong>$349/month</strong>{' '}
              steady-state price.
            </p>

            <p className="text-gray-700 mb-4">
              Two things to keep straight. First, the Ozempic pill and{' '}
              <strong>Rybelsus</strong> share an FDA label — both are oral semaglutide for type 2
              diabetes — but the label states they are{' '}
              <strong>&quot;not substitutable on a mg-to-mg basis.&quot;</strong> A 9 mg Ozempic tablet
              is not a 9 mg Rybelsus tablet. Second, the pill and the pen are different products with
              different dosing, and which one is appropriate is a clinical decision, not a budgeting
              one. Bring the price difference to your prescriber; do not act on it alone.
            </p>

            <h2 id="insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance Reality for a Diabetes Drug</h2>

            <p className="text-gray-700 mb-4">
              Ozempic is a type 2 diabetes medication, and that shapes everything about how plans treat
              it. Per its FDA label, Ozempic is indicated to improve glycemic control in adults with
              type 2 diabetes, to reduce the risk of major adverse cardiovascular events in adults with
              type 2 diabetes and established cardiovascular disease, and to reduce the risk of
              sustained eGFR decline, end-stage kidney disease, and cardiovascular death in adults with
              type 2 diabetes and chronic kidney disease.
            </p>

            <p className="text-gray-700 mb-4">
              Practically, that means coverage decisions tend to hinge on your diagnosis, and prior
              authorization is common. Novo Nordisk runs a{' '}
              <strong>coverage checker on NovoCare</strong> that reports whether your plan covers
              Ozempic and gives an estimated cost — a faster answer than a formulary PDF. Two rules of
              thumb before you shop:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Check coverage before you price-shop.</strong> If your plan covers Ozempic and the savings card applies, that path usually beats self-pay.</li>
              <li><strong>Run the deductible math.</strong> Early in a plan year, a covered drug can still cost you full freight until the deductible is met — and card savings do not count toward it. Compare that real number against the $149-$499 self-pay price rather than assuming coverage wins.</li>
            </ul>

            <h2 id="weight-loss" className="text-2xl font-bold text-gray-900 mt-12 mb-6">If You Want It for Weight Loss, Read This</h2>

            <p className="text-gray-700 mb-4">
              A large share of Ozempic price searches come from people who want it for weight loss. The
              honest answer changes the shopping list: <strong>no Ozempic product is FDA-approved for
              weight management</strong>. Not the pen, not the pill. Prescribing Ozempic for weight
              loss is off-label — legal for a clinician to do, but it means you are outside the
              indication that coverage, savings-card terms, and pharmacy programs are built around.
            </p>

            <p className="text-gray-700 mb-4">
              The on-label product is <strong>Wegovy</strong>, the same molecule (semaglutide) from the
              same manufacturer, dosed for weight management. Per its FDA label, Wegovy is indicated to
              reduce excess body weight and maintain weight reduction long term in adults and pediatric
              patients 12 and older with obesity, and in adults with overweight plus at least one
              weight-related comorbid condition. It also carries a cardiovascular indication and a
              noncirrhotic MASH indication.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for your wallet:</strong> Wegovy has its own NovoCare self-pay
                pricing and its own savings terms. If weight management is your goal, pricing Ozempic
                is pricing the wrong product. Start with our{' '}
                <Link href="/guides/wegovy-cost" className="text-blue-600 hover:underline">Wegovy cost guide</Link>{' '}
                instead, and bring the indication question to a licensed clinician.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              If you are still weighing whether semaglutide is right for you at all, our{' '}
              <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic and semaglutide side effects guide</Link>{' '}
              reads the adverse-reaction rates straight off the FDA label, and{' '}
              <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives</Link>{' '}
              covers the other approved options and what they cost.
            </p>

            <h2 id="cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheaper Routes to Semaglutide</h2>

            <p className="text-gray-700 mb-4">
              Brand Ozempic through NovoCare is one lane. There are others, each with a different
              tradeoff between price, convenience, and regulatory footing:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The Ozempic pill at $149/month</strong> is the lowest published brand-Ozempic price. If a tablet is clinically appropriate for you, it is the cheapest on-label route.</li>
              <li><strong>Cash-pay clinic programs</strong> bundle the medication, visits, and sometimes labs into one monthly fee. See our <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link> for verified per-clinic prices, and the <Link href="/guides/cheapest-way-to-get-semaglutide" className="text-blue-600 hover:underline">cheapest way to get semaglutide</Link> for the full route comparison.</li>
              <li><strong>Compounded semaglutide</strong> is a separate and now heavily restricted market. Read <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide</Link> before you consider it.</li>
              <li><strong>Other GLP-1s</strong> may price better for your situation — compare across the class in <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance</Link> and the full <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Compare prices and clinics</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Weight-loss clinics by state:</strong> browse the <Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinic directory</Link></li>
              <li><strong>Cross-service pricing:</strong> see the <Link href="/price-index" className="text-blue-600 hover:underline">cash-pay price index</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Prices in One Place</h3>
            <p className="mb-6 text-blue-100">
              Verified cash-pay prices across semaglutide and tirzepatide programs, quoted from the
              clinics&apos; own sites and dated.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Weight-Loss Clinics
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
              not affiliated with Novo Nordisk, NovoCare, or NovoCare Pharmacy. Ozempic is a
              prescription medication FDA-approved for adults with type 2 diabetes; it is not approved
              for weight loss. Nothing here is dosing guidance, and no outcome is promised. All prices
              and program terms were read from Novo Nordisk&apos;s published pages on August 21, 2026;
              savings and self-pay offers carry eligibility requirements and restrictions, Novo Nordisk
              reserves the right to modify or cancel them at any time, and the self-pay pen offer is
              stated as limited-time with pricing to be updated after December 31, 2026. Verify the
              current price and full terms directly with NovoCare and your pharmacy before you fill,
              and decide with a licensed clinician. VitalityScout may earn a commission from some
              links, at no additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• NovoCare — <a href="https://www.novocare.com/diabetes/products/ozempic/explaining-list-price.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ozempic list price explained</a> ($1,027.51 per package; $997.58 in the mobile layout; list-price definition)</li>
              <li>• NovoCare — <a href="https://www.novocare.com/diabetes/products/ozempic/savings-offer.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ozempic savings offer</a> ($25 with commercial insurance, $100/month savings cap, eligibility carve-outs, deductible language)</li>
              <li>• Ozempic.com — <a href="https://www.ozempic.com/savings-and-resources/save-on-ozempic.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ozempic cost and insurance coverage</a> (per-dose self-pay pricing for pen and pill)</li>
              <li>• NovoCare Pharmacy — <a href="https://www.novocare.com/pharmacy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">self-pay starting prices</a> (Ozempic pill from $149/month, pen from $199/month; December 31, 2026 offer window)</li>
              <li>• DailyMed — <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">OZEMPIC (semaglutide) injection label</a> (indications; Novo Nordisk Pharmaceutical Industries LP; revised 5/2026)</li>
              <li>• DailyMed — <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">OZEMPIC / RYBELSUS oral semaglutide tablet label</a> (tablet indications; not substitutable mg-to-mg)</li>
              <li>• DailyMed — <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">WEGOVY (semaglutide) label</a> (chronic weight-management indications; revised 6/2026)</li>
              <li>• Novo Nordisk — <a href="https://www.prnewswire.com/news-releases/novo-nordisks-ozempic-pill-the-only-fda-approved-oral-peptide-glp-1-medication-for-adults-with-type-2-diabetes-soon-to-be-available-in-the-us-302760106.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ozempic pill US availability announcement</a> (US availability May 4, 2026; self-pay $149 / $199 / $299 by dose; type 2 diabetes indication)</li>
              <li>• NovoCare — <a href="https://www.novocare.com/diabetes/help-with-costs/pap.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk Patient Assistance Program</a> (free medicine for those who qualify)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Cash-Price Cheat Sheet"
            description="Every published self-pay price for semaglutide and tirzepatide, with the fine print that changes what you actually pay."
            source="guide_ozempic_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
