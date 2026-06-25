import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'VO2 Max Test Cost (2026): Prices, Where & Is It Worth It',
  description: 'What a VO2 max test costs in 2026 — $99-$175 at fitness studios, $300-$600+ for a clinical CPET. Where to get one and whether it is worth it.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a VO2 max test cost?',
    answer:
      'A submaximal or fitness-grade VO2 max test at a body-composition studio typically costs about $99 to $175 — DexaFit Nashua advertises $119 and DexaFit Seattle $175, for example. A full clinical cardiopulmonary exercise test (CPET) with physician interpretation generally runs $300 to $600 or more. University and sports-science labs sit in between, often around $150. These are advertised cash prices that change frequently; confirm current pricing directly with the provider.',
  },
  {
    question: 'Is a VO2 max test worth the money?',
    answer:
      'For most people, a VO2 max test is most useful as a baseline plus a periodic re-test to see whether training is working — it measures cardiorespiratory fitness, which the American Heart Association recommended in 2016 be treated as a clinical vital sign. If you only want a rough trend, a smartwatch estimate is far cheaper but much less accurate (one Apple Watch Series 7 study found a mean absolute error of about 16%). A lab test gives you a real number. Whether the cost is worth it depends on your goals; this is information, not medical advice.',
  },
  {
    question: 'What is the difference between a VO2 max test and a clinical CPET?',
    answer:
      'A fitness VO2 max test measures how much oxygen you use at peak effort while you exercise in a mask, and returns a fitness number and training zones. A clinical cardiopulmonary exercise test (CPET) adds ECG, blood-pressure, and a fuller set of cardiopulmonary metrics interpreted by a physician, and is ordered to evaluate symptoms like unexplained shortness of breath. The clinical version costs more ($300-$600+) and may be covered by insurance when medically indicated; the fitness version is usually cash-pay. Confirm coverage with your insurer.',
  },
  {
    question: 'How accurate is the VO2 max on my Apple Watch or Garmin?',
    answer:
      'Wearable VO2 max is an estimate from heart-rate and pace data, not a direct measurement of oxygen consumption. In a validation study of the Apple Watch Series 7, the watch significantly underestimated lab-measured VO2 max with a mean absolute percentage error of about 15.8%, and accuracy got worse at higher fitness levels. A mask-based lab test is the way to get a real number; a wearable is fine for tracking your own trend over time.',
  },
  {
    question: 'How long does a VO2 max test take and what happens during it?',
    answer:
      'You exercise on a treadmill or stationary bike at gradually increasing intensity while wearing a sealed mask that measures the oxygen you breathe in and the carbon dioxide you breathe out, until you reach your limit. The hard effort itself usually lasts about 7 to 15 minutes; with setup, warm-up, and a results review, plan for roughly 30 to 60 minutes at the clinic. Wear workout clothes and avoid a heavy meal or hard workout right before.',
  },
  {
    question: 'Does insurance cover a VO2 max test?',
    answer:
      'Insurance coverage for fitness or performance VO2 max testing is rare — it is generally treated as elective and paid out of pocket. A clinical CPET ordered by a physician for a medical reason (such as evaluating heart failure or unexplained breathlessness) is more likely to be covered. The cash prices in this guide are for fitness-grade tests. Confirm coverage with your insurer and the clinic before booking.',
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

// Three real test settings with their typical cash price ranges. Prices are
// advertised estimates checked in June 2026; confirm with the provider.
const SETTING_ROWS = [
  {
    setting: 'Body-composition / fitness studio',
    example: 'DexaFit, Dexaslim, local performance labs',
    price: '$99-$175',
    includes: 'Mask-based VO2 max, fitness number, training zones, take-home report',
  },
  {
    setting: 'University / sports-science lab',
    example: 'College exercise-physiology labs',
    price: '~$150 (≈$200 with lactate)',
    includes: 'Standard VO2 max; optional blood-lactate threshold add-on',
  },
  {
    setting: 'Clinical CPET (physician-read)',
    example: 'Hospital or cardiology / pulmonology clinic',
    price: '$300-$600+',
    includes: 'VO2 plus ECG, blood pressure, full cardiopulmonary metrics, MD interpretation',
  },
  {
    setting: 'Wearable estimate',
    example: 'Apple Watch, Garmin',
    price: 'Device cost only',
    includes: 'Algorithmic estimate from HR + pace — a trend, not a measured value',
  },
];

export default function Vo2MaxTestCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'VO2 Max Test Cost (2026)',
    description:
      'A 2026 guide to what a VO2 max test costs — fitness-studio pricing vs clinical CPET, where to get one, what the test measures, and whether it is worth the money.',
    url: 'https://vitalityscout.com/guides/vo2-max-test-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/vo2-max-test-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'VO2 max test (maximal oxygen uptake / cardiopulmonary exercise test)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'DexaFit Nashua — Pricing (VO2 max, DEXA, RMR)', url: 'https://www.nashua.dexafit.com/pricing' },
      { '@type': 'CreativeWork', name: 'DexaFit Seattle — VO2 Max Test', url: 'https://www.seattle.dexafit.com/vo2-max' },
      { '@type': 'CreativeWork', name: 'PNOĒ — VO2 Max Lab Test: What to Expect & Cost', url: 'https://pnoe.com/blog/vo2-max/vo2-max-lab-test/' },
      { '@type': 'CreativeWork', name: 'AHA Scientific Statement — Cardiorespiratory Fitness as a Clinical Vital Sign (Circulation, 2016)', url: 'https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000000461' },
      { '@type': 'CreativeWork', name: 'Validation Study — Apple Watch Series 7 VO2 max accuracy (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11325102/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/vo2-max-test-cost#faq', url: 'https://vitalityscout.com/guides/vo2-max-test-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Health Guides
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Fitness &amp; Longevity Testing
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VO2 Max Test Cost
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a VO2 max test actually costs in 2026, where to get one, what it
            measures, and whether it is worth paying for over a smartwatch estimate.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A VO2 max test costs roughly <strong>$99 to $175</strong> at a fitness or
              body-composition studio (DexaFit advertises $119-$175), about{' '}
              <strong>$150</strong> at a university lab, and{' '}
              <strong>$300 to $600+</strong> for a clinical cardiopulmonary exercise test
              (CPET) with a physician&apos;s read. Fitness testing is almost always cash-pay;
              a medically ordered CPET may be covered by insurance. These are advertised
              estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Price snapshot by setting */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">VO2 Max Test Cost by Setting (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Where</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Example</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What You Get</th>
              </tr>
            </thead>
            <tbody>
              {SETTING_ROWS.map((r, i) => (
                <tr key={r.setting} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.setting}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.example}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing, what is included, and physician interpretation directly with each provider before
          booking. Many studios that run VO2 max also offer{' '}
          <Link href="/dexa-scans" className="text-blue-600 hover:underline">
            DEXA body-composition scans
          </Link>{' '}
          at the same location.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The spread between a $99 studio test and a $600+ hospital CPET is not about how hard you
              run — it is about who reads the data and how much equipment sits behind it:
            </p>
            <ul>
              <li>
                <strong>Fitness test vs clinical test.</strong> A fitness studio gives you a VO2 max
                number and training zones. A clinical CPET adds continuous ECG, blood-pressure
                monitoring, and a physician&apos;s interpretation of a fuller set of cardiopulmonary
                metrics — that medical oversight is most of the extra cost.
              </li>
              <li>
                <strong>Equipment.</strong> The metabolic carts used for accurate gas analysis are
                expensive lab instruments, which is part of why even fitness-grade testing is priced
                above a typical gym service.
              </li>
              <li>
                <strong>Add-ons.</strong> Blood-lactate threshold testing, RMR (resting metabolic
                rate), or a bundled DEXA scan each raise the total. At DexaFit Nashua, a single test
                is $119 but a three-service bundle (DEXA + RMR + VO2 max) is $319.
              </li>
              <li>
                <strong>Location and demand.</strong> Boutique studios in major metros price toward
                the top of the fitness range; university and sports-science labs are often the cheapest
                mask-based option at around $150.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What it measures */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What a VO2 Max Test Actually Measures</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            VO2 max is the maximum amount of oxygen your body can take in and use during intense
            exercise — a direct measure of cardiorespiratory fitness. During the test you exercise on
            a treadmill or stationary bike at steadily increasing intensity while wearing a sealed mask
            that measures the oxygen you breathe in and the carbon dioxide you breathe out, until you
            reach your limit. DexaFit describes the working part of the test as typically{' '}
            <strong>7 to 15 minutes</strong>, followed by a results review.
          </p>
          <p>
            A clinical CPET captures more than the headline number. Per PNOĒ&apos;s clinical overview,
            a full test can report VO2 peak, CO2 production, respiratory exchange ratio, ventilatory
            thresholds, heart-rate and blood-pressure response, and ECG findings — which is why it is
            used to investigate symptoms, not just fitness.
          </p>
          <p>
            Why people pay attention to the number: in 2016 the American Heart Association published a
            scientific statement recommending that cardiorespiratory fitness be measured and used as a
            clinical vital sign, citing its strong association with cardiovascular and all-cause
            outcomes. VO2 max is the standard way to quantify that fitness.
          </p>
        </div>
      </section>

      {/* Lab vs wearable */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lab Test vs Smartwatch Estimate</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The cheapest VO2 max &quot;number&quot; you can get is the one already on your wrist —
              but a wearable does not measure oxygen. It estimates VO2 max from heart-rate and pace
              data, and the accuracy is limited. In a validation study of the Apple Watch Series 7
              against a laboratory gas analyzer, the watch significantly underestimated VO2 max with a
              mean absolute percentage error of about <strong>15.8%</strong>, and the error grew at
              higher fitness levels.
            </p>
            <p>
              The practical read: a smartwatch is good enough to track <em>your own trend</em> over
              months, for free. If you want a real, comparable number — for a longevity baseline, a
              training plan, or to compare against population norms — a mask-based lab test is what
              delivers it. Many people do both: a one-time lab test to anchor the number, then the
              wearable to watch it move.
            </p>
          </div>
        </div>
      </section>

      {/* Is it worth it */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is a VO2 Max Test Worth It?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Likely worth it if</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want a real, comparable longevity-fitness baseline, not a wrist estimate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You train seriously and want accurate heart-rate / pace training zones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You will re-test in a few months to see whether training is actually working</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Probably skip it if</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You only want a rough trend — a wearable already gives you that for free</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You will not change anything based on the number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>You have heart or breathing symptoms — that calls for a clinician-ordered CPET, not a fitness studio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>Before you book a fitness-grade test, confirm a few practical points with the studio:</p>
          <ul>
            <li>Is it a true maximal mask-based test, or a submaximal estimate?</li>
            <li>Does the price include a results consultation, or just the raw report?</li>
            <li>Is there a bundle (with DEXA or RMR) that is better value if you want more data?</li>
            <li>For repeat testing, is there a multi-session package price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Fitness Alongside Body Composition</h3>
          <p className="text-gray-600 mb-6">
            Many studios that run VO2 max also offer DEXA body-composition scans — compare verified
            providers and prices by city.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Explore the DEXA Scan Hub →
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
                <div className="text-sm text-gray-600">Body-composition tests compared on accuracy and cost</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-new-york" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in NYC</div>
                <div className="text-sm text-gray-600">A real-clinic price guide — many also run VO2 max</div>
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
            <li>• <a href="https://www.nashua.dexafit.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Nashua — Pricing (VO2 max $119; bundles)</a></li>
            <li>• <a href="https://www.seattle.dexafit.com/vo2-max" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Seattle — VO2 Max Test ($175; 7-15 min protocol)</a></li>
            <li>• <a href="https://pnoe.com/blog/vo2-max/vo2-max-lab-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">PNOĒ — VO2 Max Lab Test: cost ($300-$600+ CPET) &amp; metrics</a></li>
            <li>• <a href="https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000000461" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">AHA Scientific Statement (Circulation, 2016) — fitness as a clinical vital sign</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11325102/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Validation Study — Apple Watch Series 7 VO2 max accuracy (MAPE ~15.8%)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Building a Longevity Testing Baseline?"
          description="Get our cash-pay testing price comparisons — VO2 max, DEXA, and metabolic testing — plus tips for reading your results."
          source="guide_vo2_max_test_cost"
        />
      </div>

      <Footer />
    </main>
  );
}
