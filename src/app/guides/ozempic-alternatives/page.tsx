import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Ozempic Alternatives in 2026: Real Options & Costs',
  description: 'The real Ozempic alternatives in 2026 — Wegovy, Zepbound, the oral semaglutide pill, compounded GLP-1s, and non-GLP-1 pills — with current cash prices.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the best alternative to Ozempic in 2026?',
    answer:
      'There is no single "best" alternative — it depends on your goal, what a clinician prescribes, and your budget. For weight loss, the FDA-approved options are Wegovy (the higher-dose version of the same drug as Ozempic), Zepbound (tirzepatide), and the oral semaglutide pill. In the head-to-head SURMOUNT-5 trial, tirzepatide produced a 20.2% mean body-weight reduction at 72 weeks versus 13.7% for semaglutide. Tirzepatide-based Zepbound therefore tends to produce more weight loss, but tolerability and access differ by person. Discuss options with a licensed clinician; these are advertised estimates to verify, not medical advice.',
  },
  {
    question: 'Are there cheaper alternatives to Ozempic that work?',
    answer:
      'Lower-cost FDA-approved options exist. The oral semaglutide (Wegovy) pill launched in early 2026 at about $149 per month self-pay. Novo Nordisk\'s NovoCare self-pay price for Ozempic and Wegovy pens is roughly $349 per month for most doses. Non-GLP-1 pills are cheaper still: Qsymia runs about $98–$250 per month, Contrave roughly $240–$480 per month, and generic phentermine $30–$50 per month — though phentermine is approved only for short-term use and produces less weight loss. Confirm current pricing with each manufacturer or pharmacy.',
  },
  {
    question: 'Is compounded semaglutide still legal in 2026?',
    answer:
      'It is heavily restricted. The FDA declared the semaglutide and tirzepatide shortages resolved in 2025, which ended the broad exception that allowed mass compounding. On April 30, 2026, the FDA proposed permanently excluding semaglutide, tirzepatide, and liraglutide from the 503B outsourcing-facility bulks list, with a comment period that closed June 29, 2026. Patient-specific 503A compounding remains legal only in narrow cases such as a documented excipient allergy or an unavailable dose strength — routine copying of approved drugs is not allowed. Treat any "cheap compounded GLP-1" offer with caution and verify the pharmacy\'s licensing.',
  },
  {
    question: 'What is the difference between Ozempic, Wegovy, Mounjaro, and Zepbound?',
    answer:
      'Ozempic and Wegovy are both semaglutide from Novo Nordisk: Ozempic is FDA-approved for type 2 diabetes and Wegovy for chronic weight management at a higher dose. Mounjaro and Zepbound are both tirzepatide from Eli Lilly: Mounjaro is approved for diabetes and Zepbound for weight management. Tirzepatide acts on two gut-hormone receptors (GIP and GLP-1) while semaglutide acts on one (GLP-1). Using a diabetes drug purely for weight loss is off-label; the weight-management versions are the on-label choice.',
  },
  {
    question: 'Is there an Ozempic pill?',
    answer:
      'Yes. In December 2025 the FDA approved an oral semaglutide pill marketed as Wegovy (25 mg once daily) — the first oral GLP-1 approved for chronic weight management — which became available in early January 2026 at about $149 per month self-pay. Rybelsus is a separate, lower-dose oral semaglutide approved for type 2 diabetes, not weight loss. An oral form lets some people avoid injections, but it is still a prescription medication; talk to a clinician about whether it fits your situation.',
  },
  {
    question: 'What non-GLP-1 weight loss drugs are FDA-approved?',
    answer:
      'Several FDA-approved pills do not use the GLP-1 mechanism: Qsymia (phentermine plus topiramate), Contrave (bupropion plus naltrexone), Xenical/Alli (orlistat), and phentermine alone. They generally produce less weight loss than GLP-1 drugs — roughly 5–10% of body weight — but cost less and suit people who cannot or prefer not to use injectables. Each has its own risk profile and candidacy; a clinician decides what is appropriate. Pricing here is an estimate to confirm with the pharmacy.',
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

// Real, currently-marketed Ozempic alternatives. Prices are manufacturer self-pay
// or widely advertised cash figures checked in June 2026 (see Sources); they are
// estimates that change — confirm with the manufacturer or pharmacy. Efficacy
// figures are from cited trials, framed as study results, not promises.
const ALTERNATIVES = [
  {
    name: 'Wegovy (semaglutide injection)',
    klass: 'Branded GLP-1',
    maker: 'Novo Nordisk',
    use: 'Chronic weight management',
    price: '~$349/mo self-pay (NovoCare)',
    note: 'Same drug as Ozempic, dosed higher and FDA-approved for weight loss. List price ~$1,349/mo; NovoCare self-pay is far lower.',
  },
  {
    name: 'Zepbound (tirzepatide injection)',
    klass: 'Branded GLP-1/GIP',
    maker: 'Eli Lilly',
    use: 'Chronic weight management',
    price: '$299–$449/mo (LillyDirect vials)',
    note: 'Dual GIP/GLP-1 drug. In SURMOUNT-5 it produced more weight loss than semaglutide. Vial self-pay: 2.5mg $299, 5mg $399, higher doses $449.',
  },
  {
    name: 'Oral semaglutide (Wegovy pill)',
    klass: 'Branded oral GLP-1',
    maker: 'Novo Nordisk',
    use: 'Chronic weight management',
    price: '~$149/mo self-pay',
    note: 'First oral GLP-1 approved for weight management (FDA Dec 2025); available early Jan 2026. A no-injection option.',
  },
  {
    name: 'Mounjaro (tirzepatide injection)',
    klass: 'Branded GLP-1/GIP',
    maker: 'Eli Lilly',
    use: 'Type 2 diabetes (off-label for weight)',
    price: 'Varies; LillyDirect self-pay available',
    note: 'Same molecule as Zepbound but the diabetes-labeled version. Using it for weight loss alone is off-label.',
  },
  {
    name: 'Saxenda (liraglutide injection)',
    klass: 'Older GLP-1',
    maker: 'Novo Nordisk',
    use: 'Chronic weight management',
    price: 'Varies by pharmacy',
    note: 'A daily (not weekly) GLP-1 approved for weight loss. Generally less weight loss than semaglutide or tirzepatide.',
  },
  {
    name: 'Qsymia (phentermine + topiramate)',
    klass: 'Non-GLP-1 pill',
    maker: 'Vivus',
    use: 'Chronic weight management',
    price: '~$98–$250/mo',
    note: 'The most effective non-GLP-1 oral option (~8–10% weight loss in studies). No injection. A controlled substance.',
  },
  {
    name: 'Contrave (bupropion + naltrexone)',
    klass: 'Non-GLP-1 pill',
    maker: 'Currax',
    use: 'Chronic weight management',
    price: '~$240–$480/mo',
    note: 'Oral combination working on appetite and reward pathways. Typically ~5–8% weight loss in studies.',
  },
  {
    name: 'Phentermine (generic)',
    klass: 'Non-GLP-1 pill',
    maker: 'Generic',
    use: 'Short-term weight loss',
    price: '~$30–$50/mo',
    note: 'The cheapest FDA-approved option, but approved for short-term use only and with less total weight loss.',
  },
];

export default function OzempicAlternatives() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ozempic Alternatives in 2026',
    description:
      'A 2026 guide to the real Ozempic alternatives — branded GLP-1 injections, the oral semaglutide pill, compounded GLP-1s, and FDA-approved non-GLP-1 pills — with current cash prices and what the evidence shows.',
    url: 'https://vitalityscout.com/guides/ozempic-alternatives',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ozempic-alternatives#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'GLP-1 receptor agonists and weight-management medications',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'NovoCare — Wegovy cost & coverage', url: 'https://www.novocare.com/patient/medicines/wegovy.html' },
      { '@type': 'CreativeWork', name: 'Eli Lilly — Lilly lowers the price of Zepbound single-dose vials', url: 'https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials' },
      { '@type': 'CreativeWork', name: 'HCPLive — FDA approves semaglutide (Wegovy) pill as first oral GLP-1 for weight loss', url: 'https://www.hcplive.com/view/fda-approves-semaglutide-wegovy-pill-as-first-oral-glp-1-for-weight-loss' },
      { '@type': 'CreativeWork', name: 'American College of Cardiology — SURMOUNT-5 (tirzepatide vs semaglutide)', url: 'https://www.acc.org/latest-in-cardiology/journal-scans/2025/07/10/09/09/surmount-5' },
      { '@type': 'CreativeWork', name: 'Pharmacy Times — FDA moves to permanently close the door on compounded GLP-1s', url: 'https://www.pharmacytimes.com/view/fda-moves-to-permanently-close-the-door-on-compounded-glp-1s' },
      { '@type': 'CreativeWork', name: 'GoodRx — Comparing Ozempic, Wegovy and other GLP-1 drugs', url: 'https://www.goodrx.com/classes/glp-1-agonists/glp-1-drugs-comparison' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ozempic-alternatives#faq', url: 'https://vitalityscout.com/guides/ozempic-alternatives' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Weight Loss Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              GLP-1 Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ozempic Alternatives in 2026
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The real alternatives to Ozempic — branded GLP-1 injections, the new oral
            semaglutide pill, compounded options, and non-GLP-1 pills — and what each costs.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              The real Ozempic alternatives in 2026 are FDA-approved drugs: <strong>Wegovy</strong>{' '}
              (same drug as Ozempic, dosed for weight loss), <strong>Zepbound</strong> (tirzepatide),
              the new <strong>oral semaglutide pill</strong> (~$149/mo), and non-GLP-1 pills like{' '}
              <strong>Qsymia</strong> and <strong>Contrave</strong>. Manufacturer self-pay prices run
              roughly $149–$449/month. Compounded GLP-1s are now heavily restricted after the FDA&apos;s
              2026 actions. These are advertised estimates to verify; this is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ozempic Alternatives at a Glance (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">FDA Use</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Cash Price</th>
              </tr>
            </thead>
            <tbody>
              {ALTERNATIVES.map((a, i) => (
                <tr key={a.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{a.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{a.klass}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{a.use}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are manufacturer self-pay or widely advertised cash figures checked in June 2026 and
          change frequently. Confirm current pricing, eligibility, and availability with the manufacturer
          or pharmacy. A clinician decides which medication is appropriate for you. Compare cash-pay
          weight-loss programs on the{' '}
          <Link href="/weight-loss" className="text-blue-600 hover:underline">
            weight-loss directory
          </Link>.
        </p>
      </section>

      {/* Branded GLP-1 alternatives */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Branded GLP-1 Alternatives</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The closest alternatives to Ozempic are other branded GLP-1 medications. They are the
              best-studied and the only options FDA-approved specifically for chronic weight management.
            </p>
            <ul>
              <li>
                <strong>Wegovy (semaglutide).</strong> The same molecule as Ozempic, made by Novo
                Nordisk, dosed higher and approved for weight loss rather than diabetes. The list price
                is about <strong>$1,349/month</strong>, but Novo&apos;s NovoCare self-pay price is roughly{' '}
                <strong>$349/month</strong> for most pen doses. If you are already on Ozempic, Wegovy is
                often the most direct on-label switch — discuss it with your prescriber.
              </li>
              <li>
                <strong>Zepbound (tirzepatide).</strong> Eli Lilly&apos;s dual GIP/GLP-1 drug. In the
                head-to-head SURMOUNT-5 trial published in NEJM (2025), tirzepatide produced a{' '}
                <strong>20.2%</strong> mean body-weight reduction at 72 weeks versus <strong>13.7%</strong>{' '}
                for semaglutide. LillyDirect single-dose-vial self-pay pricing is{' '}
                <strong>$299/month (2.5mg)</strong>, <strong>$399/month (5mg)</strong>, and{' '}
                <strong>$449/month</strong> for higher doses on the Self Pay Journey program.
              </li>
              <li>
                <strong>Mounjaro (tirzepatide).</strong> The same molecule as Zepbound, but the
                diabetes-labeled version. Using it purely for weight loss is off-label; the weight-management
                version is Zepbound.
              </li>
              <li>
                <strong>Saxenda (liraglutide).</strong> An older, daily (not weekly) GLP-1 approved for
                weight loss. It generally produces less weight loss than semaglutide or tirzepatide, and
                the daily injection is less convenient for many people.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The oral option */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Oral Option: an Ozempic Pill</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            For people who want to avoid injections, 2026 brought a genuine alternative. In December 2025
            the FDA approved a once-daily <strong>oral semaglutide pill marketed as Wegovy (25 mg)</strong>{' '}
            — the first oral GLP-1 approved for chronic weight management — which became available in early
            January 2026 at about <strong>$149/month</strong> self-pay.
          </p>
          <p>
            In its pivotal OASIS-4 trial, oral semaglutide produced roughly 14–17% body-weight reduction
            over 64 weeks. One clarification matters: <strong>Rybelsus</strong> is a separate, lower-dose
            oral semaglutide approved for type 2 diabetes, not weight loss. The new 25 mg pill is the
            weight-management formulation. An oral form removes the needle, but it is still a prescription
            GLP-1 — a clinician determines whether it fits your situation.
          </p>
        </div>
      </section>

      {/* Compounded reality check */}
      <section className="bg-amber-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compounded GLP-1s: the 2026 Reality</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              During the 2022–2025 shortages, compounded semaglutide and tirzepatide were a common
              low-cost alternative ($150–$400/month). That window has largely closed:
            </p>
            <ul>
              <li>
                The FDA declared the semaglutide and tirzepatide <strong>shortages resolved in 2025</strong>,
                ending the broad exception that allowed mass compounding.
              </li>
              <li>
                On <strong>April 30, 2026</strong>, the FDA proposed permanently excluding semaglutide,
                tirzepatide, and liraglutide from the <strong>503B outsourcing-facility bulks list</strong>,
                with a comment period that closed <strong>June 29, 2026</strong>. The FDA&apos;s position:
                &ldquo;When FDA-approved drugs are available, outsourcing facilities cannot lawfully compound
                using bulk drug substances unless there is a clear clinical need.&rdquo;
              </li>
              <li>
                Patient-specific <strong>503A compounding</strong> remains legal only in narrow cases —
                for example a documented excipient allergy or a dose strength that is not commercially
                available. Routine copying of an approved drug is not permitted.
              </li>
            </ul>
            <p>
              The practical takeaway: treat any &ldquo;cheap compounded GLP-1&rdquo; offer with caution.
              Verify the pharmacy&apos;s licensing and that your prescription meets a legitimate clinical
              exception. With manufacturer self-pay prices now as low as ~$149/month, the cost gap that
              once justified compounding has narrowed.
            </p>
          </div>
        </div>
      </section>

      {/* Non-GLP-1 alternatives */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Non-GLP-1 Alternatives</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            If a GLP-1 is not right for you — by cost, tolerability, or clinician judgment — several
            FDA-approved pills use entirely different mechanisms. They generally produce less weight loss
            (roughly 5–10% of body weight in studies) but cost less and avoid injections.
          </p>
          <ul>
            <li>
              <strong>Qsymia (phentermine + topiramate).</strong> The most effective non-GLP-1 oral option,
              with about 8–10% weight loss in studies. Cash pricing runs roughly{' '}
              <strong>$98–$250/month</strong>. It is a controlled substance.
            </li>
            <li>
              <strong>Contrave (bupropion + naltrexone).</strong> An oral combination acting on appetite
              and reward pathways, typically ~5–8% weight loss. Estimated cash cost is about{' '}
              <strong>$240–$480/month</strong>.
            </li>
            <li>
              <strong>Phentermine (generic).</strong> The cheapest FDA-approved option at roughly{' '}
              <strong>$30–$50/month</strong>, but approved for <strong>short-term use only</strong> and with
              less total weight loss.
            </li>
            <li>
              <strong>Xenical / Alli (orlistat).</strong> A fat-absorption blocker available by prescription
              (Xenical) and over the counter (Alli), generally producing modest weight loss.
            </li>
          </ul>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose (with Your Clinician)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for most weight loss</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Zepbound (tirzepatide)</strong> — produced more weight loss than semaglutide in SURMOUNT-5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Wegovy (semaglutide)</strong> — the on-label weight-loss version of Ozempic</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost or no injections</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Oral semaglutide pill</strong> (~$149/mo) — a GLP-1 without the needle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Qsymia / Contrave / phentermine</strong> — lower-cost non-GLP-1 pills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you start any of these, confirm a few things with a licensed clinician:</p>
            <ul>
              <li>Which option is appropriate for your health history and goals.</li>
              <li>Whether you qualify for the on-label weight-management version versus a diabetes drug.</li>
              <li>The real out-of-pocket cost after any manufacturer self-pay or savings program.</li>
              <li>The side-effect and monitoring plan — these are prescription medications, not supplements.</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Cash-Pay Weight-Loss Options</h3>
          <p className="text-gray-600 mb-6">
            Browse telehealth GLP-1 programs and weight-loss providers — prices, medications, and what is included.
          </p>
          <Link
            href="/weight-loss"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Weight-Loss Providers →
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

          <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-gray-900">Compounded Semaglutide</div>
                <div className="text-sm text-gray-600">FDA status, legality, safety, and cost</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hims-vs-ro-vs-calibrate" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">GLP-1 telehealth programs compared</div>
              </div>
            </div>
          </Link>

          <Link href="/telehealth" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩺</span>
              <div>
                <div className="font-bold text-gray-900">Telehealth Hub</div>
                <div className="text-sm text-gray-600">Online clinics for prescriptions and care</div>
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
            <li>• <a href="https://www.novocare.com/patient/medicines/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NovoCare — Wegovy cost, coverage & self-pay pricing</a></li>
            <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — Lilly lowers the price of Zepbound single-dose vials</a></li>
            <li>• <a href="https://www.hcplive.com/view/fda-approves-semaglutide-wegovy-pill-as-first-oral-glp-1-for-weight-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">HCPLive — FDA approves the semaglutide (Wegovy) pill as first oral GLP-1 for weight loss</a></li>
            <li>• <a href="https://www.acc.org/latest-in-cardiology/journal-scans/2025/07/10/09/09/surmount-5" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">American College of Cardiology — SURMOUNT-5 (tirzepatide vs semaglutide)</a></li>
            <li>• <a href="https://www.pharmacytimes.com/view/fda-moves-to-permanently-close-the-door-on-compounded-glp-1s" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Pharmacy Times — FDA moves to permanently close the door on compounded GLP-1s</a></li>
            <li>• <a href="https://www.goodrx.com/classes/glp-1-agonists/glp-1-drugs-comparison" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GoodRx — Comparing Ozempic, Wegovy and other GLP-1 drugs</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing GLP-1 and Weight-Loss Options?"
          description="Get our 2026 cash-price comparison of Ozempic alternatives plus questions to ask before you start."
          source="guide_ozempic_alternatives"
        />
      </div>

      <Footer />
    </main>
  );
}
