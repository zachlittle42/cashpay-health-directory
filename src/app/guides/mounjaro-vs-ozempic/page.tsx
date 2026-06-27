import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Mounjaro vs Ozempic: Efficacy, Cost & Access (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/mounjaro-vs-ozempic' },
  description: 'Mounjaro (tirzepatide) vs Ozempic (semaglutide) in 2026 — head-to-head efficacy, ~$1,069 vs ~$998 list price, side effects, and how to access each.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is Mounjaro or Ozempic better for weight loss?',
    answer:
      'In the head-to-head SURMOUNT-5 trial, tirzepatide (the drug in Mounjaro) produced an average 20.2% body-weight reduction versus 13.7% for semaglutide (the drug in Ozempic) over 72 weeks — about 47% greater relative weight loss. Two caveats matter: that trial used the weight-loss formulations Zepbound and Wegovy, not Mounjaro and Ozempic, and neither Mounjaro nor Ozempic is FDA-approved for weight loss. Discuss which medication fits your situation with a licensed clinician.',
  },
  {
    question: 'What is the difference between Mounjaro and Ozempic?',
    answer:
      'Mounjaro is tirzepatide, a dual GIP and GLP-1 receptor agonist — it activates two incretin pathways. Ozempic is semaglutide, a GLP-1-only receptor agonist. Both are once-weekly subcutaneous injections FDA-approved for type 2 diabetes, made by Eli Lilly (Mounjaro) and Novo Nordisk (Ozempic). The extra GIP activity in tirzepatide is the main mechanistic difference and is why there is no exact mg-to-mg dose equivalence between them.',
  },
  {
    question: 'How much do Mounjaro and Ozempic cost without insurance in 2026?',
    answer:
      'As of early 2026, Mounjaro’s list (wholesale acquisition) price is about $1,069 per month and Ozempic’s is about $998 per month. Manufacturer savings cards can lower the cost to as little as $25 per fill for eligible commercially insured patients, and self-pay programs exist for the sister weight-loss brands. These are advertised list prices that change and vary by pharmacy, dose, and coverage — confirm the current cash price with the pharmacy and check savings-card eligibility.',
  },
  {
    question: 'Are Mounjaro and Ozempic approved for weight loss?',
    answer:
      'No. Mounjaro and Ozempic are both FDA-approved only to improve blood sugar in adults with type 2 diabetes. The same active ingredients are FDA-approved for chronic weight management under different brand names: Zepbound (tirzepatide) and Wegovy (semaglutide). Prescribing Mounjaro or Ozempic specifically for weight loss is off-label. Talk to a clinician about which approved option is appropriate for you.',
  },
  {
    question: 'Do Mounjaro and Ozempic have the same side effects?',
    answer:
      'They share a similar profile. The most common side effects of both are gastrointestinal — nausea, diarrhea, vomiting, constipation, and abdominal pain — typically during dose increases. Both carry the FDA’s boxed warning for a risk of thyroid C-cell tumors (based on rodent studies), and both list rarer serious risks such as pancreatitis and gallbladder problems. In the SURMOUNT-5 trial, GI side effects led to discontinuation more often with semaglutide (5.6%) than tirzepatide (2.7%). This is information, not medical advice.',
  },
  {
    question: 'Can you switch from Ozempic to Mounjaro?',
    answer:
      'Switching between the two is done only under a clinician’s direction, because there is no exact mg-to-mg equivalence — tirzepatide’s added GIP activity changes both response and tolerability. A typical approach restarts at a lower introductory tirzepatide dose (2.5 mg weekly) and titrates up rather than matching the prior semaglutide milligrams. Never change or switch a prescription on your own; ask the prescribing clinician how to transition safely.',
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

// At-a-glance comparison rows. Drug-class, indication, dosing, and trial data are
// from FDA prescribing info + the peer-reviewed SURPASS-2 and SURMOUNT-5 trials;
// list prices are advertised 2026 figures to confirm with the pharmacy.
const COMPARE_ROWS = [
  {
    attribute: 'Active ingredient',
    mounjaro: 'Tirzepatide',
    ozempic: 'Semaglutide',
  },
  {
    attribute: 'Drug class / mechanism',
    mounjaro: 'Dual GIP + GLP-1 receptor agonist',
    ozempic: 'GLP-1 receptor agonist (single)',
  },
  {
    attribute: 'Maker',
    mounjaro: 'Eli Lilly',
    ozempic: 'Novo Nordisk',
  },
  {
    attribute: 'FDA-approved use',
    mounjaro: 'Type 2 diabetes (glycemic control)',
    ozempic: 'Type 2 diabetes (glycemic control)',
  },
  {
    attribute: 'Weight-loss brand (same drug)',
    mounjaro: 'Zepbound',
    ozempic: 'Wegovy',
  },
  {
    attribute: 'Administration',
    mounjaro: 'Once-weekly injection',
    ozempic: 'Once-weekly injection',
  },
  {
    attribute: 'Dose range',
    mounjaro: '2.5 → 15 mg (2.5-mg steps)',
    ozempic: '0.25 → 2 mg',
  },
  {
    attribute: 'Approx. list price (2026)',
    mounjaro: '~$1,069 / month',
    ozempic: '~$998 / month',
  },
];

export default function MounjaroVsOzempic() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Mounjaro vs Ozempic: Efficacy, Cost, Side Effects & Access (2026)',
    description:
      'A 2026 head-to-head comparison of Mounjaro (tirzepatide) and Ozempic (semaglutide) — mechanism, head-to-head trial efficacy, list pricing, side effects, and how to access each.',
    url: 'https://vitalityscout.com/guides/mounjaro-vs-ozempic',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/mounjaro-vs-ozempic#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: [
      { '@type': 'Drug', name: 'Mounjaro (tirzepatide)' },
      { '@type': 'Drug', name: 'Ozempic (semaglutide)' },
    ],
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Eli Lilly — Zepbound (tirzepatide) superior to Wegovy (semaglutide) in SURMOUNT-5 head-to-head', url: 'https://investor.lilly.com/news-releases/news-release-details/lillys-zepboundr-tirzepatide-superior-wegovyr-semaglutide-head' },
      { '@type': 'CreativeWork', name: 'American College of Cardiology — SURMOUNT-5 journal scan', url: 'https://www.acc.org/latest-in-cardiology/journal-scans/2025/07/10/09/09/surmount-5' },
      { '@type': 'CreativeWork', name: 'Eli Lilly — SURPASS-2 results published in NEJM (tirzepatide vs semaglutide in type 2 diabetes)', url: 'https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine' },
      { '@type': 'CreativeWork', name: 'Eli Lilly — FDA approves Mounjaro (tirzepatide), first GIP and GLP-1 receptor agonist', url: 'https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-mounjarotm-tirzepatide-injection-first-and' },
      { '@type': 'CreativeWork', name: 'Mounjaro (tirzepatide) FDA Prescribing Information', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf' },
      { '@type': 'CreativeWork', name: 'Drugwatch — Ozempic side effects, FDA warnings', url: 'https://www.drugwatch.com/drugs/ozempic/side-effects/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/mounjaro-vs-ozempic#faq', url: 'https://vitalityscout.com/guides/mounjaro-vs-ozempic' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; GLP-1 &amp; Weight Loss Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              GLP-1 Comparison
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mounjaro vs Ozempic
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            How tirzepatide and semaglutide actually differ in 2026 — mechanism,
            head-to-head efficacy, list price, side effects, and how to access each.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Mounjaro (tirzepatide) is a dual GIP and GLP-1 receptor agonist; Ozempic
              (semaglutide) is GLP-1-only. Both are once-weekly injections FDA-approved for
              type 2 diabetes. In the head-to-head SURMOUNT-5 trial, tirzepatide drove{' '}
              <strong>20.2%</strong> average weight loss versus <strong>13.7%</strong> for
              semaglutide. List prices run about <strong>$1,069</strong> (Mounjaro) versus{' '}
              <strong>$998</strong> (Ozempic) per month. Prices are estimates to confirm with
              the pharmacy. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* At-a-glance comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mounjaro vs Ozempic at a Glance (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Attribute</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Mounjaro (tirzepatide)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Ozempic (semaglutide)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r, i) => (
                <tr key={r.attribute} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.attribute}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.mounjaro}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.ozempic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          List prices are advertised 2026 wholesale figures and change frequently; your actual
          cost depends on dose, pharmacy, and coverage. Confirm current pricing and savings-card
          eligibility before filling. For the full picture on how these drugs work for weight
          loss, see the{' '}
          <Link href="/guides/glp1-weight-loss-complete-guide" className="text-blue-600 hover:underline">
            complete GLP-1 weight-loss guide
          </Link>.
        </p>
      </section>

      {/* Mechanism */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Core Difference: One Hormone vs Two</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The two drugs are not the same molecule, and the difference is mechanistic. Ozempic
              is <strong>semaglutide</strong>, a GLP-1 receptor agonist — it mimics a single gut
              hormone (GLP-1) that slows stomach emptying, blunts appetite, and improves
              insulin response. Mounjaro is <strong>tirzepatide</strong>, which Lilly describes as
              the first and only FDA-approved <strong>dual GIP and GLP-1 receptor agonist</strong>:
              a single molecule that activates two incretin pathways instead of one.
            </p>
            <p>
              That extra GIP activity is the headline distinction. It is also why there is no clean
              milligram-to-milligram equivalence between the two — the doses are not interchangeable,
              and a switch is a clinical decision, not a conversion you do yourself. Both drugs are
              once-weekly subcutaneous injections: Ozempic titrates 0.25 → 0.5 → 1 → 2 mg, while
              Mounjaro starts at 2.5 mg and steps up by 2.5 mg toward a 15 mg maximum.
            </p>
          </div>
        </div>
      </section>

      {/* Efficacy */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Head-to-Head Efficacy: What the Trials Show</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Two head-to-head trials — one for diabetes, one for weight — give an unusually direct
            comparison.
          </p>
          <p>
            <strong>For type 2 diabetes (SURPASS-2).</strong> This NEJM-published trial randomized
            1,879 adults with type 2 diabetes to tirzepatide (5, 10, or 15 mg) or semaglutide 1 mg.
            All three tirzepatide doses were statistically superior to semaglutide for A1C reduction,
            and the 15 mg dose produced nearly double the weight loss of semaglutide 1 mg. Note this
            compared the 1 mg diabetes dose of semaglutide, not the higher weight-loss dose.
          </p>
          <p>
            <strong>For weight (SURMOUNT-5).</strong> This 72-week NEJM-published trial enrolled 751
            adults with obesity (without type 2 diabetes) and compared the two drugs head-to-head.
            Tirzepatide produced an average <strong>20.2%</strong> body-weight reduction versus{' '}
            <strong>13.7%</strong> for semaglutide — about 47% greater relative weight loss — and was
            superior on all five key secondary endpoints. One important framing: SURMOUNT-5 used the
            weight-loss-approved brands <strong>Zepbound</strong> (tirzepatide) and{' '}
            <strong>Wegovy</strong> (semaglutide), not Mounjaro and Ozempic.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-blue-900">
              <strong>The names matter.</strong> Mounjaro and Ozempic are the diabetes brands;
              Zepbound and Wegovy are the same active drugs branded for weight management. The
              trial efficacy figures above come from the weight-loss formulations. Using Mounjaro
              or Ozempic itself for weight loss is off-label — a clinician decision, not a default.
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost: What You Actually Pay</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              On paper the two are close. As of early 2026, Eli Lilly’s wholesale acquisition
              cost for Mounjaro is about <strong>$1,069 per 28-day supply</strong>, and Ozempic’s
              list price is about <strong>$998 per month</strong>. Almost no one pays the full list
              price, though — what you actually pay depends on three things:
            </p>
            <ul>
              <li>
                <strong>Insurance coverage.</strong> Both are commonly covered for type 2 diabetes;
                coverage for off-label weight use is far less reliable. Your formulary and prior-auth
                rules drive the real number.
              </li>
              <li>
                <strong>Manufacturer savings cards.</strong> For eligible commercially insured
                patients, the Mounjaro savings card can bring cost down to as little as $25 per fill
                (with a per-fill cap). Eligibility excludes government insurance.
              </li>
              <li>
                <strong>Self-pay routes for the weight-loss brands.</strong> Lilly’s direct
                self-pay program lists single-dose tirzepatide (Zepbound) vials starting around $349
                per month — relevant if your goal is weight management rather than diabetes.
              </li>
            </ul>
            <p>
              Bottom line: the list-price gap between Mounjaro and Ozempic is small relative to the
              swing your coverage and savings programs create. Get a real quote for your specific
              dose and plan rather than budgeting off the list price.
            </p>
          </div>
        </div>
      </section>

      {/* Side effects */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Side Effects: Largely Shared, With Nuance</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The two drugs share most of their safety profile. For both, the most common side effects
            are gastrointestinal — <strong>nausea, diarrhea, vomiting, constipation, and abdominal
            pain</strong> — and they typically show up during dose increases and ease as the body
            adjusts. For Ozempic, published trial figures put nausea around 15.8% at the 0.5 mg dose
            and 20.3% at 1 mg.
          </p>
          <p>
            Both also carry the FDA’s <strong>boxed warning</strong> — its highest-level warning
            — for a risk of thyroid C-cell tumors, based on rodent studies. Both list rarer but
            serious risks including pancreatitis and gallbladder problems. One head-to-head data
            point: in SURMOUNT-5, GI side effects led to stopping treatment more often with
            semaglutide (5.6%) than tirzepatide (2.7%).
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Who should not take these:</strong> the boxed warning means these drugs are
              contraindicated for people with a personal or family history of medullary thyroid
              carcinoma or Multiple Endocrine Neoplasia syndrome type 2. This is general information —
              your eligibility, risks, and the right drug are decisions for a licensed clinician.
            </p>
          </div>
        </div>
      </section>

      {/* Best for */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which One Is Right for You?</h2>
          <p className="text-gray-600 mb-6">
            There is no single &quot;winner&quot; — the right drug depends on your goal, your
            tolerance, and what your clinician and coverage support. A few honest framings:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mounjaro / tirzepatide may fit if</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Trial data showed larger average weight loss and A1C reduction head-to-head</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>You and your clinician want the dual GIP + GLP-1 mechanism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>You have access and tolerate the titration to higher doses</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ozempic / semaglutide may fit if</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>It is the option your insurance covers or your clinician prefers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>It has the longer real-world track record as a GLP-1 single agonist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>You are already established on it and tolerating it well</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you start or switch, work through these with your prescriber:</p>
            <ul>
              <li>Is the prescription for diabetes (on-label) or weight management (off-label here)?</li>
              <li>What does your plan actually cover, and are you savings-card eligible?</li>
              <li>How will the dose be titrated, and what GI side effects should you expect early?</li>
              <li>Do you have any thyroid or pancreatitis history that changes the risk calculus?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare GLP-1 Weight-Loss Options</h3>
          <p className="text-gray-600 mb-6">
            See cash-pay GLP-1 programs, telehealth providers, and what they cost — all in one place.
          </p>
          <Link
            href="/weight-loss"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Explore Weight-Loss Options →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/glp1-weight-loss-complete-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">GLP-1 for Weight Loss: Complete Guide</div>
                <div className="text-sm text-gray-600">How semaglutide and tirzepatide work, results, costs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hims-vs-ro-vs-calibrate" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">GLP-1 telehealth weight-loss programs compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-gray-900">Compounded Semaglutide</div>
                <div className="text-sm text-gray-600">FDA status, costs vs brand-name, and alternatives</div>
              </div>
            </div>
          </Link>

          <Link href="/telehealth" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩺</span>
              <div>
                <div className="font-bold text-gray-900">Telehealth Providers</div>
                <div className="text-sm text-gray-600">Find online clinics that prescribe GLP-1 medications</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/lillys-zepboundr-tirzepatide-superior-wegovyr-semaglutide-head" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — Zepbound superior to Wegovy in SURMOUNT-5 head-to-head (20.2% vs 13.7%)</a></li>
            <li>• <a href="https://www.acc.org/latest-in-cardiology/journal-scans/2025/07/10/09/09/surmount-5" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">American College of Cardiology — SURMOUNT-5 journal scan</a></li>
            <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/lillys-surpass-2-results-published-new-england-journal-medicine" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — SURPASS-2 results in NEJM (tirzepatide vs semaglutide, type 2 diabetes)</a></li>
            <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-mounjarotm-tirzepatide-injection-first-and" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — FDA approves Mounjaro (first GIP and GLP-1 receptor agonist)</a></li>
            <li>• <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Mounjaro (tirzepatide) FDA Prescribing Information</a></li>
            <li>• <a href="https://www.drugwatch.com/drugs/ozempic/side-effects/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Drugwatch — Ozempic side effects &amp; FDA warnings</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Weighing GLP-1 Options?"
          description="Get our plain-English breakdown of GLP-1 medications, costs, and how to access them — without the hype."
          source="guide_mounjaro_vs_ozempic"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
