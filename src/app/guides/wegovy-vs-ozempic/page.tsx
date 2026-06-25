import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Wegovy vs Ozempic: Cost, Dosing & Results (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/wegovy-vs-ozempic' },
  description:
    'Wegovy vs Ozempic — same drug (semaglutide), different FDA uses. Compare cost ($349-$499 cash), doses, weight-loss results, and side effects in 2026.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'Are Wegovy and Ozempic the same drug?',
    answer:
      'Both contain the same active ingredient, semaglutide, and are made by Novo Nordisk. The difference is the FDA-approved use and the maximum dose. Ozempic is approved to treat type 2 diabetes (and to lower cardiovascular risk in people with type 2 diabetes and heart disease) at up to 2 mg weekly. Wegovy is approved for chronic weight management at up to 2.4 mg weekly, with a 7.2 mg Wegovy HD dose approved in March 2026. They are the same molecule used for different goals.',
  },
  {
    question: 'Is Wegovy or Ozempic cheaper without insurance?',
    answer:
      'They are priced almost identically through Novo Nordisk’s NovoCare self-pay program. As of 2026, standard doses run about $349 per month for either drug, and the highest standard doses run about $399 (Wegovy HD) to $499 (Ozempic 2 mg). List prices are far higher — Novo Nordisk lists Wegovy at about $1,349 and Ozempic at about $1,027 per month — but few cash patients pay full list, and Novo has announced a list-price cut for both starting January 2027. These are advertised prices that change; confirm the current cash price directly with the pharmacy or manufacturer.',
  },
  {
    question: 'Can I take Ozempic for weight loss?',
    answer:
      'Ozempic is FDA-approved to treat type 2 diabetes, not for weight loss. Some clinicians prescribe it off-label for weight reduction because it contains the same semaglutide as Wegovy, but Wegovy is the version FDA-approved specifically for chronic weight management. Whether a given prescription is appropriate — and whether insurance will cover it — depends on your diagnosis. Discuss the right option for you with a licensed clinician.',
  },
  {
    question: 'How much weight do you lose on Wegovy vs Ozempic?',
    answer:
      'In the STEP 1 trial, adults on Wegovy 2.4 mg lost about 14.9% of body weight over 68 weeks versus 2.4% on placebo, both with lifestyle changes. The newer Wegovy HD 7.2 mg dose showed 20.7% mean weight loss in the STEP UP trial. Ozempic’s diabetes trials (SUSTAIN) showed smaller weight loss — roughly 5-6 kg — because the dose tops out at 2 mg. Individual results vary; these are trial averages, not guarantees.',
  },
  {
    question: 'What are the side effects of Wegovy and Ozempic?',
    answer:
      'Because both are semaglutide, the side-effect profile is similar and mostly gastrointestinal: nausea, vomiting, diarrhea, constipation, and stomach pain or bloating. These are usually most noticeable when the dose is being increased and often ease over time. Both carry a boxed warning about thyroid C-cell tumors seen in rodents. This is general information, not medical advice — review your personal risks with a clinician.',
  },
  {
    question: 'Do you regain weight if you stop semaglutide?',
    answer:
      'Both Wegovy and Ozempic are intended as long-term treatments, and studies show people tend to regain weight after stopping. Semaglutide works while it is in your system; it is not a one-time cure. Plan with your clinician for what maintenance looks like — whether that means staying on a dose, tapering, or building durable nutrition and training habits. This is information, not a treatment plan.',
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

// Head-to-head comparison rows. Facts sourced to Novo Nordisk / NovoCare,
// the FDA-approved labeling summarized by GoodRx + Medical News Today, and the
// STEP / STEP UP / SUSTAIN trials (see Sources). Prices are advertised 2026
// cash estimates to confirm with the manufacturer or pharmacy.
const COMPARISON = [
  {
    attribute: 'Active ingredient',
    wegovy: 'Semaglutide',
    ozempic: 'Semaglutide',
  },
  {
    attribute: 'Maker',
    wegovy: 'Novo Nordisk',
    ozempic: 'Novo Nordisk',
  },
  {
    attribute: 'FDA-approved use',
    wegovy: 'Chronic weight management; cardiovascular-risk reduction; MASH',
    ozempic: 'Type 2 diabetes; cardiovascular-risk reduction in T2D + heart disease',
  },
  {
    attribute: 'Approved for weight loss?',
    wegovy: 'Yes — this is its primary indication',
    ozempic: 'No — used off-label by some clinicians',
  },
  {
    attribute: 'Dose range (weekly)',
    wegovy: '0.25 → 2.4 mg (plus 7.2 mg Wegovy HD)',
    ozempic: '0.25 → 2 mg',
  },
  {
    attribute: 'Trial weight loss',
    wegovy: '~14.9% at 2.4 mg (STEP 1); 20.7% at 7.2 mg (STEP UP)',
    ozempic: '~5-6 kg in diabetes trials (SUSTAIN)',
  },
  {
    attribute: 'Cash price (standard dose)',
    wegovy: '~$349/mo via NovoCare self-pay',
    ozempic: '~$349/mo via NovoCare self-pay',
  },
  {
    attribute: 'List price (no discount)',
    wegovy: '~$1,349/mo (Novo Nordisk WAC)',
    ozempic: '~$1,027/mo (Novo Nordisk WAC)',
  },
];

export default function WegovyVsOzempic() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Wegovy vs Ozempic: Cost, Dosing & Results (2026)',
    description:
      'A 2026 comparison of Wegovy and Ozempic — the same semaglutide molecule with different FDA-approved uses, doses, weight-loss results, side effects, and how to get each cheaper.',
    url: 'https://vitalityscout.com/guides/wegovy-vs-ozempic',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/wegovy-vs-ozempic#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Semaglutide (Wegovy, Ozempic)',
      activeIngredient: 'Semaglutide',
      manufacturer: { '@type': 'Organization', name: 'Novo Nordisk' },
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'NovoCare — Wegovy cost & coverage', url: 'https://www.novocare.com/patient/medicines/wegovy.html' },
      { '@type': 'CreativeWork', name: 'NovoCare — Ozempic self-pay price guide', url: 'https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Ozempic_Price_Guide.pdf' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Wegovy HD (7.2 mg) approved, 20.7% mean weight loss', url: 'https://www.globenewswire.com/news-release/2026/03/19/3259259/0/en/Novo-Nordisk-A-S-Wegovy-HD-semaglutide-7-2-mg-approved-in-the-US-providing-20-7-mean-weight-loss.html' },
      { '@type': 'CreativeWork', name: 'AJMC — Semaglutide 2.4 mg STEP 1: ~14.9% weight loss', url: 'https://www.ajmc.com/view/semaglutide-injection-novel-approach-for-chronic-weight-management' },
      { '@type': 'CreativeWork', name: 'Medical News Today — Ozempic vs Wegovy differences', url: 'https://www.medicalnewstoday.com/articles/drugs-ozempic-vs-wegovy' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Ozempic list price (WAC ~$1,027/mo)', url: 'https://www.novopricing.com/ozempic.html' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Wegovy list price (WAC ~$1,349/mo)', url: 'https://www.novopricing.com/wegovy.html' },
      { '@type': 'CreativeWork', name: 'DailyMed (FDA) — Wegovy prescribing information & boxed warning (thyroid C-cell tumors)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/wegovy-vs-ozempic#faq', url: 'https://vitalityscout.com/guides/wegovy-vs-ozempic' };

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
              GLP-1 Comparison
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wegovy vs Ozempic
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            They are the same drug — semaglutide — approved for different things. Here is how
            cost, dosing, weight-loss results, and side effects actually compare in 2026.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Wegovy and Ozempic are both <strong>semaglutide made by Novo Nordisk</strong>, but
              with different FDA-approved uses. <strong>Ozempic</strong> treats type 2 diabetes
              (up to 2 mg weekly); <strong>Wegovy</strong> is approved for weight loss (up to 2.4 mg,
              plus a 7.2 mg HD dose). Wegovy showed ~14.9% weight loss in trials; Ozempic less,
              because its dose is lower. Cash prices are similar — about{' '}
              <strong>$349/month</strong> each via NovoCare. Confirm pricing with the provider.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Head-to-head comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Wegovy vs Ozempic at a Glance (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Wegovy</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Ozempic</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.attribute} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.attribute}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.wegovy}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.ozempic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised 2026 cash rates and change frequently. Confirm current pricing,
          dose, and eligibility directly with the manufacturer or pharmacy. Trial figures are
          group averages from published studies, not individual guarantees. See{' '}
          <Link href="/guides/glp1-weight-loss-complete-guide" className="text-blue-600 hover:underline">
            the full GLP-1 weight-loss guide
          </Link>{' '}
          for the underlying science.
        </p>
      </section>

      {/* Same molecule, different label */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Same Molecule, Different Label</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The single most important thing to understand: <strong>Wegovy and Ozempic are the
              same active drug, semaglutide, from the same company, Novo Nordisk.</strong> They are
              not competitors in the chemistry — they are two labels on one molecule, separated by
              what the FDA approved each one to treat and how high the dose goes.
            </p>
            <ul>
              <li>
                <strong>Ozempic</strong> is approved to improve blood sugar in adults with type 2
                diabetes and to reduce the risk of major cardiovascular events in people with type 2
                diabetes and known heart disease. Its weekly dose tops out at 2 mg.
              </li>
              <li>
                <strong>Wegovy</strong> is approved for chronic weight management in adults with
                obesity (BMI ≥ 30) or overweight (BMI ≥ 27) with a weight-related condition, plus
                cardiovascular-risk reduction and, more recently, MASH (a liver condition). Its
                standard dose goes to 2.4 mg, and a higher 7.2 mg Wegovy HD dose was FDA-approved in
                March 2026.
              </li>
            </ul>
            <p>
              Because they share a molecule, people often ask whether they can take Ozempic for
              weight loss. Some clinicians do prescribe it off-label, but Wegovy is the version
              actually approved for that purpose — and the one studied at the higher doses that
              drive larger weight loss.
            </p>
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost: Wegovy vs Ozempic in 2026</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            On paper the two list prices differ — Wegovy is the more expensive sticker — but very
            few cash patients pay full list. The number that matters for someone paying out of
            pocket is the manufacturer&apos;s direct self-pay price, and there the two are nearly
            identical.
          </p>
          <ul>
            <li>
              <strong>List price.</strong> Per Novo Nordisk&apos;s published pricing, Wegovy&apos;s list
              price (wholesale acquisition cost) is about <strong>$1,349/month</strong> and Ozempic&apos;s
              is about <strong>$1,027/month</strong>. Novo Nordisk has announced a list-price reduction
              for both medicines beginning January 2027.
            </li>
            <li>
              <strong>NovoCare self-pay (cash).</strong> Through Novo Nordisk&apos;s direct program,
              standard doses of either drug run about <strong>$349/month</strong>. Wegovy HD (7.2 mg)
              is about $399; Ozempic 2 mg is about $499. New patients have seen introductory
              first-fills as low as ~$199 for the lowest doses.
            </li>
            <li>
              <strong>With commercial insurance.</strong> Eligible commercially insured patients may
              pay as little as <strong>$25/month</strong> via the manufacturer savings card, subject
              to a monthly cap. Government-insured patients (Medicare, Medicaid) are excluded from
              those savings cards.
            </li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Coverage is the biggest swing factor. Many plans cover Ozempic
              for diabetes but not Wegovy for weight loss, or require prior authorization. The cash
              prices above are advertised 2026 figures that change — confirm the current price and
              your coverage with the pharmacy, manufacturer, and your insurer before you commit.
            </p>
          </div>
          <p>
            If you are weighing the broader market — brand semaglutide, compounded versions, and the
            telehealth programs that bundle the prescription with coaching — start with our{' '}
            <Link href="/guides/hims-vs-ro-vs-calibrate" className="text-blue-600 hover:underline">
              Hims vs Ro vs Calibrate comparison
            </Link>{' '}
            and the{' '}
            <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">
              compounded semaglutide guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Dosing */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dosing: How They Differ</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Both drugs are once-weekly subcutaneous injections that start low and titrate up to
              let the body adjust and reduce side effects. The key difference is the ceiling.
            </p>
            <ul>
              <li>
                <strong>Ozempic</strong> starts at 0.25 mg weekly and increases to a maintenance dose
                of up to <strong>2 mg</strong>.
              </li>
              <li>
                <strong>Wegovy</strong> starts at 0.25 mg and steps up to <strong>2.4 mg</strong>,
                with a higher <strong>7.2 mg Wegovy HD</strong> option approved in March 2026 for
                people who need more weight reduction than the standard dose provides.
              </li>
            </ul>
            <p>
              That higher Wegovy ceiling is why Wegovy, not Ozempic, is the version associated with
              the largest weight-loss numbers. Titration schedules are set by a clinician — do not
              accelerate doses on your own.
            </p>
          </div>
        </div>
      </section>

      {/* Weight loss results */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Weight-Loss Results: What the Trials Show</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Direct trial numbers tell the story better than marketing claims. These are{' '}
            <strong>group averages</strong> from published studies, with lifestyle changes alongside
            the drug — individual results vary widely.
          </p>
          <ul>
            <li>
              <strong>Wegovy 2.4 mg (STEP 1 trial):</strong> adults lost about <strong>14.9%</strong>{' '}
              of body weight over 68 weeks, versus 2.4% on placebo.
            </li>
            <li>
              <strong>Wegovy HD 7.2 mg (STEP UP trial):</strong> mean weight loss of{' '}
              <strong>20.7%</strong>, with roughly one in three participants reaching 25% or more.
            </li>
            <li>
              <strong>Ozempic (SUSTAIN diabetes trials):</strong> weight loss was smaller —
              on the order of <strong>5-6 kg</strong> — because the dose is lower and the trials were
              in people with type 2 diabetes, who tend to lose less weight on GLP-1s.
            </li>
          </ul>
          <p>
            The practical read: if the primary goal is weight loss and you qualify, Wegovy is the
            on-label, higher-dose option with the larger published results. Ozempic&apos;s strength
            is glycemic control in type 2 diabetes. Neither is a guarantee, and both are intended as
            long-term treatments — studies show weight regain is common after stopping.
          </p>
        </div>
      </section>

      {/* Side effects */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Side Effects: Largely the Same</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Because they are the same molecule, Wegovy and Ozempic share a side-effect profile
              that is mostly gastrointestinal and usually most noticeable during dose increases:
            </p>
            <ul>
              <li>Nausea and occasional vomiting</li>
              <li>Diarrhea or constipation</li>
              <li>Stomach pain and bloating</li>
            </ul>
            <p>
              These often ease over time as the body adjusts. Both medications also carry an FDA{' '}
              <a
                href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                boxed warning
              </a>{' '}
              about thyroid C-cell tumors observed in rodent studies, and both should be avoided by
              people with a personal or family history of medullary thyroid carcinoma or MEN 2.
              Rarer but serious risks discussed in the labeling include pancreatitis and gallbladder
              problems.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-5 not-prose my-6">
              <p className="text-sm text-gray-700">
                Side effects and contraindications are individual. This guide summarizes published,
                general information — it is not a substitute for a clinician reviewing your full
                history before prescribing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to choose / Best for */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Which One Fits Your Goal?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best for weight loss</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Wegovy</strong> — FDA-approved for chronic weight management, higher dose ceiling, larger trial results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Wegovy HD (7.2 mg)</strong> for those who need more than the standard dose, under clinician guidance</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best for type 2 diabetes</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Ozempic</strong> — FDA-approved for blood-sugar control and cardiovascular-risk reduction in T2D</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Often the better-covered option when the diagnosis is diabetes rather than obesity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>Before you commit to either, confirm a few practical points:</p>
          <ul>
            <li>Which drug does my insurance actually cover, and is a prior authorization needed?</li>
            <li>What is the real out-of-pocket cost — savings card, NovoCare self-pay, or list?</li>
            <li>Do I have a diagnosis that makes one the on-label choice?</li>
            <li>What is the long-term plan, given that stopping often leads to weight regain?</li>
          </ul>
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
            See cash-pay weight-loss programs, telehealth providers, and what each actually charges.
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
                <div className="text-sm text-gray-600">How semaglutide and tirzepatide work, results, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-gray-900">Compounded Semaglutide</div>
                <div className="text-sm text-gray-600">FDA status, costs vs brand-name, and what changed</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hims-vs-ro-vs-calibrate" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">The three popular telehealth GLP-1 programs compared</div>
              </div>
            </div>
          </Link>

          <Link href="/weight-loss" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">Weight-Loss Hub</div>
                <div className="text-sm text-gray-600">Cash-pay GLP-1 and weight-management options</div>
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
            <li>• <a href="https://www.novocare.com/patient/medicines/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NovoCare — Wegovy cost, coverage & savings</a></li>
            <li>• <a href="https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Ozempic_Price_Guide.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NovoCare — Ozempic self-pay price guide</a></li>
            <li>• <a href="https://www.globenewswire.com/news-release/2026/03/19/3259259/0/en/Novo-Nordisk-A-S-Wegovy-HD-semaglutide-7-2-mg-approved-in-the-US-providing-20-7-mean-weight-loss.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk — Wegovy HD (7.2 mg) approved, 20.7% mean weight loss</a></li>
            <li>• <a href="https://www.ajmc.com/view/semaglutide-injection-novel-approach-for-chronic-weight-management" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">AJMC — Semaglutide 2.4 mg (STEP 1): ~14.9% weight loss</a></li>
            <li>• <a href="https://www.medicalnewstoday.com/articles/drugs-ozempic-vs-wegovy" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medical News Today — Ozempic vs Wegovy differences</a></li>
            <li>• <a href="https://www.novopricing.com/ozempic.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk — Ozempic list price (WAC ~$1,027/mo)</a></li>
            <li>• <a href="https://www.novopricing.com/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk — Wegovy list price (WAC ~$1,349/mo)</a></li>
            <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA) — Wegovy prescribing information & boxed warning (thyroid C-cell tumors)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing GLP-1 Options?"
          description="Get our cash-pay GLP-1 price comparison plus tips for choosing between Wegovy, Ozempic, and the telehealth programs."
          source="guide_wegovy_vs_ozempic"
        />
      </div>

      <Footer />
    </main>
  );
}
