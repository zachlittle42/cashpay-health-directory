import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'How Often Should You Get a DEXA Scan? (2026 Guide)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/how-often-should-you-get-a-dexa-scan' },
  description:
    'How often to get a DEXA scan: every 8-12 weeks for active body recomposition, twice a year for maintenance — plus the radiation math behind the cadence.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every cadence answer defers the final interval
// to a clinician, and the radiation answers use the same published BodySpec/EPA
// figures the site uses elsewhere. The visible FAQ block below mirrors this
// schema exactly — schema clarifies the page, it never invents.
const FAQ_ITEMS = [
  {
    question: 'How often should you get a DEXA scan for body recomposition?',
    answer:
      'For active body recomposition — losing fat while preserving or building muscle — a scan every 8 to 12 weeks is the common cadence. Body composition does not change quickly: it takes roughly four weeks for a new training and nutrition plan to produce a measurable shift in lean mass and fat. A 12-week window gives you a clear before-and-after on whether the plan is working without scanning faster than your body can change. Talk to your clinician about the right interval for your goals.',
  },
  {
    question: 'How often should you get a DEXA scan if you are maintaining?',
    answer:
      'If you have reached a body composition you are happy with and are maintaining, twice a year (every 6 months) is usually enough to catch drift early. Some people on a stable routine drop to one annual scan as a yearly check-in. Maintenance does not need the 8-to-12-week cadence used during active recomposition, because there is no fast-moving change to track. Discuss the right frequency with your clinician.',
  },
  {
    question: 'Is it safe to get a DEXA scan every 3 months?',
    answer:
      'From a radiation standpoint, yes. A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) per scan, per BodySpec’s published figures, while average U.S. background radiation is about 8-10 µSv per day. Four scans a year add up to less than a single day of ordinary background exposure. The dose is very low, but it is still ionizing radiation — if you are pregnant or scan very frequently, discuss the cadence with a clinician. This is information, not medical advice.',
  },
  {
    question: 'Can you get a DEXA scan too often?',
    answer:
      'You can scan more often than is useful. Because body composition needs about four weeks to show a measurable change, scanning every week or two mostly captures normal day-to-day noise — hydration, food, and timing — rather than real fat or muscle change. The limit is practical, not a radiation one: monthly scans would still be a small fraction of annual background exposure. For most goals, every 8 to 12 weeks during change and every 6 months in maintenance is plenty.',
  },
  {
    question: 'How much radiation do you get from repeat DEXA scans?',
    answer:
      'A body-composition DEXA scan is about 4-5 µSv each, per BodySpec’s published figures. For context, a chest X-ray is roughly 20 µSv and a cross-country flight is about 35 µSv. So four scans a year (about 16-20 µSv) is roughly one chest X-ray’s worth of dose spread across twelve months. The exposure is low enough that frequency is usually limited by how fast your body actually changes, not by radiation. Discuss your situation with a clinician.',
  },
  {
    question: 'How long does it take to see a change on a DEXA scan?',
    answer:
      'Plan on about four weeks at minimum before a new training or nutrition change shows up clearly, and a full 8-to-12-week block to read a real trend in fat and lean mass. Single scans taken close together are easy to over-read because hydration and food shift the numbers. For tracking, scan on the same machine, around the same time of day, in a similar fasted and hydrated state, so you are comparing like with like.',
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

// Cadence-by-goal reference. Intervals reflect common body-composition practice
// (BodySpec; Composition ID) framed as guidance, with the final call deferred to
// a clinician. Not diagnostic or eligibility advice.
const CADENCE_BY_GOAL = [
  {
    goal: 'Active body recomposition',
    detail: 'Cutting fat while holding or building muscle',
    cadence: 'Every 8-12 weeks',
    why: 'It takes ~4 weeks to show a measurable shift; a 12-week block reads a real trend.',
  },
  {
    goal: 'Aggressive short-term cut',
    detail: 'A defined goal on a tight timeline',
    cadence: 'Every 4-8 weeks',
    why: 'Faster check-ins to confirm you are losing fat, not muscle. Still no faster than ~4 weeks.',
  },
  {
    goal: 'Maintenance',
    detail: 'Holding a composition you are happy with',
    cadence: 'Every 6 months',
    why: 'No fast-moving change to track; twice a year catches drift early.',
  },
  {
    goal: 'General yearly check-in',
    detail: 'Stable routine, no active goal',
    cadence: 'Once a year',
    why: 'A baseline-vs-now snapshot for trend awareness.',
  },
];

// Radiation context for repeat scanning. Figures match the site’s existing
// DEXA pages (BodySpec published dose; EPA/NRC context).
const RADIATION_CONTEXT = [
  { source: 'One body-composition DEXA scan', dose: '~4-5 µSv', note: 'BodySpec published figure' },
  { source: 'Average U.S. background, per day', dose: '~8-10 µSv', note: 'Roughly half a day per scan' },
  { source: 'A chest X-ray', dose: '~20 µSv', note: 'About four DEXA scans' },
  { source: 'A cross-country flight', dose: '~35 µSv', note: 'About seven DEXA scans' },
];

export default function HowOftenDexaScan() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'How Often Should You Get a DEXA Scan? (2026)',
    description:
      'How often to get a body-composition DEXA scan — every 8-12 weeks for active recomposition, twice a year for maintenance — and the radiation math behind a safe scanning cadence.',
    url: 'https://vitalityscout.com/guides/how-often-should-you-get-a-dexa-scan',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/how-often-should-you-get-a-dexa-scan#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — When To Get a DEXA Scan and How Often', url: 'https://www.bodyspec.com/blog/post/when_to_get_a_dexa_scan_and_how_often' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'Composition ID — How Often Should I Get a DEXA Scan', url: 'https://www.compositionid.com/blog/dexa/how-often-should-i-get-a-dexa-scan/' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/how-often-should-you-get-a-dexa-scan#faq', url: 'https://vitalityscout.com/guides/how-often-should-you-get-a-dexa-scan' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              DEXA Frequency Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Often Should You Get a DEXA Scan?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The right cadence depends on whether you are actively changing your body or
            maintaining it — and the radiation budget is rarely the limiting factor.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              For active body recomposition, get a DEXA scan every{' '}
              <strong>8 to 12 weeks</strong> — it takes about four weeks for a new plan to
              produce a measurable change in fat and lean mass. If you are maintaining, twice
              a year is usually enough. Monthly is rarely useful because body composition does
              not move that fast. At roughly <strong>4-5 µSv</strong> per scan, radiation is
              not the limiting factor. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Cadence-by-goal table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DEXA Scan Frequency by Goal</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Your goal</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What that means</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Common cadence</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Why</th>
              </tr>
            </thead>
            <tbody>
              {CADENCE_BY_GOAL.map((row, i) => (
                <tr key={row.goal} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.goal}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.detail}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{row.cadence}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Intervals reflect common body-composition practice, not a medical prescription. Your
          baseline, risk factors, and goals decide the right cadence — confirm it with your
          clinician. To find a provider, see the{' '}
          <Link href="/dexa-scans" className="text-blue-600 hover:underline">
            DEXA scan hub
          </Link>.
        </p>
      </section>

      {/* Recomposition vs maintenance */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recomposition vs Maintenance: Two Different Cadences</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The single biggest driver of how often you should scan is whether your body is
              actively changing. Those are two different jobs for a DEXA scan, and they call for
              two different rhythms.
            </p>
            <h3>When you are actively recomposing</h3>
            <p>
              Recomposition means moving the dial — losing fat while holding or building lean
              mass. Here the scan is a feedback loop: you want to know whether the weight you are
              losing is fat (good) or muscle (not the goal). A new training and nutrition plan
              needs roughly four weeks before it produces a measurable change in body composition,
              so scanning every <strong>8 to 12 weeks</strong> reads a clean trend without
              outrunning your own biology. For an aggressive short-term cut on a defined deadline,
              some people tighten to every 4-8 weeks — but rarely faster, because there is nothing
              real to see inside a four-week window.
            </p>
            <h3>When you are maintaining</h3>
            <p>
              Once you have reached a composition you are happy with, the scan changes jobs: it
              becomes an early-warning check rather than a feedback loop. There is no fast-moving
              change to track, so <strong>twice a year</strong> is usually enough to catch drift
              before it compounds. People on a very stable routine often drop to a single{' '}
              <strong>annual</strong> check-in. The 8-to-12-week cadence is overkill in
              maintenance — you would mostly be measuring noise.
            </p>
          </div>
        </div>
      </section>

      {/* Why not monthly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Monthly (or Weekly) Is Usually Too Often</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            It is tempting to scan more often to feel like you are making progress faster. The
            problem is signal versus noise. Body composition moves slowly, but the things that
            shift the number day to day — hydration, recent meals, time of day, glycogen — move
            quickly. Scan two weeks apart and a lot of what you see is that noise, not real fat or
            muscle change.
          </p>
          <p>
            The constraint here is biological, not radiological. Even monthly scanning would be a
            small fraction of annual background radiation (see below), so the reason to wait is
            simply that you need enough time for a real change to appear. For most people, every 8
            to 12 weeks during active change is the sweet spot: long enough to see a trend, short
            enough to course-correct.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-blue-900">
              <strong>Tip for accurate tracking:</strong> scan on the same machine, around the
              same time of day, in a similar fasted and hydrated state each time. Switching
              devices or scanning randomly fed-vs-fasted reduces how comparable your results are.
            </p>
          </div>
        </div>
      </section>

      {/* Radiation budget */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Is Frequent Scanning Safe? The Radiation Budget</h2>
          <p className="text-gray-700 mb-6">
            A full-body composition DEXA scan delivers roughly{' '}
            <strong>4-5 microsieverts (&micro;Sv)</strong> per scan, per BodySpec&apos;s published
            figures. That is a very small dose. Here is how repeat scanning compares to everyday
            exposure:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Source</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Approx. dose</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">In DEXA terms</th>
                </tr>
              </thead>
              <tbody>
                {RADIATION_CONTEXT.map((row, i) => (
                  <tr key={row.source} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.source}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{row.dose}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none mt-6">
            <p>
              The practical read: four scans a year totals roughly 16-20 µSv — about one chest
              X-ray&apos;s worth of dose, spread across twelve months, and less than a single
              cross-country flight. The dose is low enough that, for most people, how fast their
              body actually changes is the real limit on scanning frequency, not the radiation.
            </p>
            <p>
              That said, it is still ionizing radiation. If you are pregnant, may be pregnant, or
              are scanning unusually often, raise it with a clinician. A DEXA scan for bone density
              may be covered by insurance; a DEXA for body composition is generally elective and
              paid out of pocket.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose your cadence */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Picking Your Own Cadence</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">If you are changing</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Scan every <strong>8-12 weeks</strong> to read fat-vs-muscle trend</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Tighten to <strong>4-8 weeks</strong> only for a short, defined goal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A 3-pack or membership usually beats single-scan pricing for tracking</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">If you are maintaining</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Twice a year</strong> to catch drift early</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Drop to <strong>once a year</strong> on a very stable routine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Keep the same machine and conditions for comparable numbers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>Before you lock in a schedule, sanity-check a few things:</p>
          <ul>
            <li>Will you scan on the same machine each time? (Switching devices reduces tracking accuracy.)</li>
            <li>Can you keep conditions consistent — time of day, fasted vs fed, hydration?</li>
            <li>Does a package or membership beat the single-scan price for your planned frequency?</li>
            <li>Have you confirmed the cadence with a clinician, especially if you scan often?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Schedule Your Next DEXA Scan?</h3>
          <p className="text-gray-600 mb-6">
            Compare verified DEXA body-composition providers by city — prices, locations, and
            add-on testing.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Find a DEXA Scan Near You →
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
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">The three body-composition tests compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-new-york" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost: New York City</div>
                <div className="text-sm text-gray-600">What a scan costs in NYC and where to book</div>
              </div>
            </div>
          </Link>

          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Hub</div>
                <div className="text-sm text-gray-600">Find body-composition clinics by city</div>
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
            <li>• <a href="https://www.bodyspec.com/blog/post/when_to_get_a_dexa_scan_and_how_often" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — When To Get a DEXA Scan and How Often</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Radiation: How Much Is It and Is It Safe</a></li>
            <li>• <a href="https://www.compositionid.com/blog/dexa/how-often-should-i-get-a-dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Composition ID — How Often Should I Get a DEXA Scan</a></li>
            <li>• <a href="https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCSF Radiology — Why DXA/DEXA beats BMI</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our DEXA cadence cheat-sheet plus tips for reading your scan and tracking real progress over time."
          source="guide_how_often_should_you_get_a_dexa_scan"
        />
      </div>

      <Footer />
    </main>
  );
}
