import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'RMR Test Cost (2026): Resting Metabolic Rate Prices',
  description:
    'What an RMR (resting metabolic rate) test costs in 2026 — typically $85-$179 cash-pay — how the breath test works, and how it sets your calorie target.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an RMR test cost?',
    answer:
      'A cash-pay resting metabolic rate (RMR) test typically costs about $85 to $179. University and lower-cost labs run roughly $85-$110 (UC Davis Health lists $85; Fitnescity starts at $110), while DEXA and metabolic studios charge $129-$179 (DexaScan $129; DexaFit about $179). Standalone tests at major-metro studios can run higher — Fitnescity lists single RMR tests from $165 to $245 across its New York sites. The test itself is the same indirect-calorimetry breath measurement; price reflects setting, equipment, and whether a results consult is included. These are advertised estimates that change — confirm current pricing directly with the provider.',
  },
  {
    question: 'What is a resting metabolic rate (RMR) test and how does it work?',
    answer:
      'An RMR test measures how many calories your body burns at complete rest to keep basic functions running — heartbeat, breathing, temperature, brain activity. It uses indirect calorimetry: you sit or recline quietly and breathe into a mask or mouthpiece for about 10-20 minutes while the device measures the oxygen you consume and carbon dioxide you produce. From that gas exchange it calculates your resting calorie burn. It is a measurement, not a prediction. This is information, not medical advice.',
  },
  {
    question: 'How does an RMR test help set my calorie target?',
    answer:
      'Your RMR is the baseline — DexaFit notes it accounts for roughly 70% of the calories most people burn daily. To get your total daily energy expenditure (TDEE), the resting number is multiplied by an activity factor for how much you move. Your calorie target is then set relative to TDEE: a deficit to lose fat, a surplus to gain, or maintenance. Measuring RMR instead of estimating it removes guesswork, but a clinician or dietitian should help translate it into a plan.',
  },
  {
    question: 'Is a measured RMR test more accurate than an online calculator?',
    answer:
      'For an individual, usually yes. The Academy of Nutrition and Dietetics advises that "if possible, RMR should be measured" via indirect calorimetry, and to use the Mifflin-St Jeor equation only when measurement is not feasible. Prediction equations land within 10% of measured RMR in about 71% of people (Mifflin-St Jeor), meaning roughly one in three is off by more. A measured test is most useful if you have stalled, have an atypical body composition, or want a precise starting point.',
  },
  {
    question: 'Is an RMR test covered by insurance?',
    answer:
      'Indirect calorimetry has its own CPT code (94690, "oxygen uptake, expired gas analysis; rest, indirect") and can be reimbursed by Medicare and some commercial plans when it is medically necessary and ordered by a clinician — for example as part of medical nutrition therapy. Coverage and the reimbursed amount vary by plan and locality, so there is no single guaranteed price. An RMR test bought directly at a fitness or wellness studio for weight-management goals is generally elective and paid out of pocket. Confirm coverage and any order requirement with your insurer and the provider.',
  },
  {
    question: 'How should I prepare for an RMR test?',
    answer:
      'Most labs ask you to arrive rested and fasted — commonly no food for about 4 hours and no caffeine, nicotine, or exercise that morning — so the reading reflects true resting metabolism rather than digestion or a workout. You then sit still and breathe normally during the measurement. Preparation rules vary by provider, so follow the specific instructions the clinic sends. Talk to your clinician about timing if you take medications that affect heart rate or metabolism.',
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

// Real, currently-listed RMR providers with advertised prices checked June 2026
// against each source. Prices are estimates to confirm with the provider.
const RMR_PROVIDERS = [
  {
    name: 'UC Davis Health (Sports Medicine)',
    setting: 'University sports-medicine lab',
    price: '$85',
    note: 'Academic metabolic-testing lab; estimates calories burned at rest and reports fat-vs-carbohydrate utilization.',
    website: 'https://health.ucdavis.edu/sports-medicine/sports-performance/metabolic-tests',
  },
  {
    name: 'Fitnescity (via Quest Health)',
    setting: 'Wellness-testing platform, partner sites',
    price: 'From $110',
    note: 'Books an RMR (resting energy expenditure + respiratory exchange ratio) test at partner sites and returns an online results dashboard.',
    website: 'https://www.questhealth.com/fitnescity-metabolic-resting-test.html',
  },
  {
    name: 'DexaScan',
    setting: 'DEXA + metabolic studio',
    price: '$129',
    note: 'Standalone RMR estimating resting calorie burn and fat/carbohydrate use; often bundled with a DEXA body-composition scan.',
    website: 'https://dexascan.com/products/resting-metabolic-rate-rmr',
  },
  {
    name: 'DexaFit',
    setting: 'National DEXA + metabolic chain',
    price: '~$179 (varies by location)',
    note: '15-20 minute mask-based test; markets RMR as the basis for a personalized calorie plan. Confirm the price at your local studio.',
    website: 'https://www.dexafit.com/services/rmr-metabolic-test',
  },
];

export default function RmrTestCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'RMR Test Cost (2026): Resting Metabolic Rate Pricing',
    description:
      'A 2026 cash-pay price guide to the resting metabolic rate (RMR) test — what it costs, how the indirect-calorimetry breath test works, and how the result sets your calorie target.',
    url: 'https://vitalityscout.com/guides/rmr-test-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/rmr-test-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Resting metabolic rate (RMR) test via indirect calorimetry',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'UC Davis Health — Metabolic Tests (RMR pricing)', url: 'https://health.ucdavis.edu/sports-medicine/sports-performance/metabolic-tests' },
      { '@type': 'CreativeWork', name: 'Fitnescity Resting Metabolic Rate Test (Quest Health)', url: 'https://www.questhealth.com/fitnescity-metabolic-resting-test.html' },
      { '@type': 'CreativeWork', name: 'DexaScan — Resting Metabolic Rate (RMR) pricing', url: 'https://dexascan.com/products/resting-metabolic-rate-rmr' },
      { '@type': 'CreativeWork', name: 'DexaFit — RMR Testing and Analysis', url: 'https://www.dexafit.com/services/rmr-metabolic-test' },
      { '@type': 'CreativeWork', name: 'Academy of Nutrition and Dietetics — Determination of Resting Metabolic Rate', url: 'https://www.andeal.org/template.cfm?template=guide_summary&key=621' },
      { '@type': 'CreativeWork', name: 'CPT 94690 — Oxygen uptake, expired gas analysis; rest, indirect (indirect calorimetry)', url: 'https://genhealth.ai/code/cpt4/94690-oxygen-uptake-expired-gas-analysis-rest-indirect-separate-procedure' },
      { '@type': 'CreativeWork', name: 'Fitnescity — Resting Metabolic Rate Test in New York (standalone RMR $165-$245)', url: 'https://www.fitnescity.com/resting-metabolic-rate-test-in-newyork-ny' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/rmr-test-cost#faq', url: 'https://vitalityscout.com/guides/rmr-test-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA &amp; Body Composition Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Metabolic Testing Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RMR Test Cost: What a Resting Metabolic Rate Test Costs
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a resting metabolic rate (RMR) test costs in 2026, how the breath
            test actually works, and how the number turns into a calorie target.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A cash-pay <strong>RMR (resting metabolic rate) test typically costs $85 to $179</strong>.
              University and lower-cost labs run about $85-$110 (UC Davis Health lists $85; Fitnescity
              starts at $110), while DEXA and metabolic studios charge $129-$179 (DexaScan $129; DexaFit
              about $179); standalone tests at major-metro studios can run higher. It is a 10-20 minute
              indirect-calorimetry breath test that measures the calories you burn at rest. Prices are
              advertised estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">RMR Test Price Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Setting</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Advertised Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What You Get</th>
              </tr>
            </thead>
            <tbody>
              {RMR_PROVIDERS.map((p, i) => (
                <tr key={p.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{p.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.setting}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{p.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing and whether a results consultation is included directly with each provider before
          booking. Find body-composition and metabolic studios near you on the{' '}
          <Link href="/dexa-scans" className="text-blue-600 hover:underline">
            DEXA &amp; body composition hub
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The hardware is the same category of device almost everywhere — a metabolic cart or
              handheld indirect calorimeter — so most of the price spread comes from setting and what
              is wrapped around the measurement:
            </p>
            <ul>
              <li>
                <strong>Standalone vs bundled.</strong> A bare RMR reading at a university lab can be
                near $85. Studios that pair RMR with a DEXA scan, VO2 max, or a dietitian consult price
                higher because you are buying more than the breath test.
              </li>
              <li>
                <strong>Consultation included or not.</strong> A number on a printout is cheaper than a
                sit-down that explains the number and turns it into a plan. Ask which one you are buying.
              </li>
              <li>
                <strong>Platform fees.</strong> Booking platforms like Fitnescity add a layer (online
                scheduling, a results dashboard) on top of the partner site&apos;s cost, which lifts the
                entry price toward $110 and higher at premium tiers.
              </li>
              <li>
                <strong>Medical vs wellness setting.</strong> Ordered through a clinic as medical
                nutrition therapy, indirect calorimetry can be a reimbursable CPT-coded test; bought at a
                gym for goal-setting it is elective and out of pocket.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How the test works */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How an RMR Test Works</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            An RMR test uses <strong>indirect calorimetry</strong>. You sit or recline quietly and
            breathe into a mask or mouthpiece for roughly <strong>10-20 minutes</strong> while the
            device measures the oxygen you consume and the carbon dioxide you produce. Because energy
            production at rest tracks oxygen use, that gas exchange converts directly into a
            calories-burned-at-rest number. Nothing is injected and no blood is drawn — you simply
            breathe normally while staying still.
          </p>
          <p>
            Most labs ask you to come <strong>rested and fasted</strong> (commonly no food for about 4
            hours, and no caffeine, nicotine, or exercise that morning) so the reading reflects true
            resting metabolism rather than digestion or a recent workout. The exact prep rules vary by
            provider, so follow the instructions the clinic sends.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>RMR vs BMR:</strong> The terms are often used interchangeably. Basal metabolic
              rate (BMR) is measured under stricter overnight-fasted, fully-rested lab conditions;
              resting metabolic rate (RMR) is the practical, slightly higher near-resting measure most
              clinics report. For everyday calorie planning the difference is small.
            </p>
          </div>
        </div>
      </section>

      {/* RMR to calorie target */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How RMR Sets Your Calorie Target</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Your RMR is the <strong>foundation</strong> of a calorie plan. DexaFit notes it accounts
              for roughly <strong>70% of the calories</strong> most people burn in a day — everything
              the body spends just keeping you alive. The rest comes from movement and digesting food.
            </p>
            <p>The number becomes a target in three steps:</p>
            <ol>
              <li>
                <strong>Measure RMR</strong> — your resting calorie burn, from the breath test.
              </li>
              <li>
                <strong>Multiply by an activity factor</strong> to get total daily energy expenditure
                (TDEE) — your real daily burn including movement.
              </li>
              <li>
                <strong>Set a target relative to TDEE</strong> — a deficit to lose fat, a surplus to
                gain, or maintenance to hold. A clinician or registered dietitian should size the
                deficit or surplus and adjust as your weight changes.
              </li>
            </ol>
            <p>
              The advantage of a measured RMR over a calculator is precision for <em>your</em>{' '}
              metabolism. Knowing whether you sit above or below the predicted number can explain a
              stall and set a more honest starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Measured vs estimated */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Measured Test vs Online Calculator</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            You can estimate RMR for free with a prediction equation — the Mifflin-St Jeor formula is
            the most widely validated. The trade-off is individual accuracy. Research finds Mifflin-St
            Jeor lands within 10% of measured RMR in about <strong>71% of people</strong>, which means
            roughly <strong>one in three</strong> is off by more than 10%. Accuracy is lower at the
            extremes of body composition.
          </p>
          <p>
            The Academy of Nutrition and Dietetics&apos; guidance is direct:{' '}
            <em>&ldquo;If possible, RMR should be measured&rdquo;</em> via indirect calorimetry, and the
            Mifflin-St Jeor equation should be used only when measurement is not feasible. In other
            words, a measured test is the reference standard; the calculator is the fallback.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">A measured test is worth it if&hellip;</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You have stalled and a calculator-based target is not working</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You have an atypical body composition (very lean or higher body fat)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want a precise baseline before a structured cut or bulk</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">A calculator may be enough if&hellip;</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You are at a typical body composition and just need a starting estimate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You will adjust based on real-world results over a few weeks anyway</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Cost is the deciding factor and a test is not in budget</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Provider cards */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get an RMR Test</h2>
          <p className="text-gray-600 mb-6">
            Four real, currently-listed RMR providers, with advertised prices checked against each
            source in June 2026. Many DEXA and body-composition studios also offer RMR — check your
            local clinic.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {RMR_PROVIDERS.map((p) => (
              <div key={p.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{p.name}</h3>
                  <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{p.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{p.setting}</div>
                <p className="text-sm text-gray-600 mb-3">{p.note}</p>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit provider site →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is an RMR Test Covered by Insurance?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Indirect calorimetry is a CPT-coded procedure — <strong>CPT 94690</strong>, &ldquo;oxygen
            uptake, expired gas analysis; rest, indirect&rdquo; — and <strong>can</strong> be reimbursed
            by Medicare and some commercial plans when it is medically necessary and ordered by a
            clinician, for example as part of medical nutrition therapy for a diagnosed condition. The
            reimbursed amount varies by plan and locality, so there is no single guaranteed price; check
            your specific coverage before assuming a number.
          </p>
          <p>
            An RMR test bought directly at a fitness or wellness studio for general weight-management
            goals is usually treated as elective and paid out of pocket — the cash prices in this guide
            are that elective, self-pay version. If you think the test is medically indicated, ask your
            clinician whether they can order it and confirm coverage with your insurer first.
          </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find Metabolic &amp; Body-Composition Testing</h3>
          <p className="text-gray-600 mb-6">
            Compare DEXA, RMR, and metabolic studios — prices, locations, and add-on testing.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse Testing Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Body-composition tests compared on cost and accuracy</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-new-york" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in NYC</div>
                <div className="text-sm text-gray-600">Real New York prices and how to book</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/glp1-weight-loss-complete-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">GLP-1 for Weight Loss</div>
                <div className="text-sm text-gray-600">How semaglutide and tirzepatide work, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/weight-loss" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Weight Loss Hub</div>
                <div className="text-sm text-gray-600">Cash-pay weight-management services and clinics</div>
              </div>
            </div>
          </Link>

          <Link href="/local-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-gray-900">Local Clinics</div>
                <div className="text-sm text-gray-600">Cash-pay health services near you</div>
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
            <li>• <a href="https://health.ucdavis.edu/sports-medicine/sports-performance/metabolic-tests" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UC Davis Health — Metabolic Tests (RMR $85)</a></li>
            <li>• <a href="https://www.questhealth.com/fitnescity-metabolic-resting-test.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity Resting Metabolic Rate Test via Quest Health (from $110)</a></li>
            <li>• <a href="https://dexascan.com/products/resting-metabolic-rate-rmr" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaScan — Resting Metabolic Rate (RMR) ($129)</a></li>
            <li>• <a href="https://www.dexafit.com/services/rmr-metabolic-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit — RMR Testing and Analysis (15-20 min, ~70% of daily burn)</a></li>
            <li>• <a href="https://www.andeal.org/template.cfm?template=guide_summary&key=621" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Academy of Nutrition and Dietetics — Determination of Resting Metabolic Rate</a></li>
            <li>• <a href="https://genhealth.ai/code/cpt4/94690-oxygen-uptake-expired-gas-analysis-rest-indirect-separate-procedure" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CPT 94690 — Oxygen uptake, expired gas analysis; rest, indirect (indirect calorimetry)</a></li>
            <li>• <a href="https://www.fitnescity.com/resting-metabolic-rate-test-in-newyork-ny" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — RMR Test in New York (standalone RMR $165-$245)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Dialing In Your Calorie Target?"
          description="Get our RMR and body-composition testing comparison plus tips for turning your numbers into a plan that holds."
          source="guide_rmr_test_cost"
        />
      </div>

      <Footer />
    </main>
  );
}
