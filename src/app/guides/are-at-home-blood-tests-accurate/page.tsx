import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Are At-Home Blood Tests Accurate? 2026 Evidence Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/are-at-home-blood-tests-accurate' },
  description:
    'How accurate at-home blood tests are vs a venous draw, what hurts finger-prick accuracy, which markers are reliable, and when to confirm at a lab.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every accuracy answer keeps the verify-with-
// clinician hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'Are at-home blood tests accurate?',
    answer:
      'It depends on how the sample is collected. At-home kits processed at CLIA-certified labs are graded under the same federal quality standard as hospital labs, so the lab analysis itself is held to the same accuracy bar. The bigger variable is the sample: a mailed-in finger-prick (capillary) drop is more prone to dilution and hemolysis than a venous draw, so it is reliable for well-validated markers like HbA1c, glucose, vitamin D, and CRP and less reliable for potassium, some hormones, and full blood counts. At-home services that send you to a Quest or Labcorp venous draw are as accurate as a doctor-ordered test. This is information, not medical advice — confirm any concerning result with a clinician.',
  },
  {
    question: 'Is a finger-prick blood test as accurate as a blood draw from the vein?',
    answer:
      'For many common chemistry markers it can be close. A 2025 peer-reviewed study in the Journal of Applied Laboratory Medicine found the BD MiniDraw fingertip device was clinically equivalent to a venous draw for several routine wellness-check analytes. But across the broader picture, a venous draw is still the more reliable method: squeezing or "milking" a finger dilutes the sample with tissue fluid and raises the hemolysis rate, which can skew certain results. Treat a single finger-prick value with caution and confirm anything clinically important with a venous test.',
  },
  {
    question: 'Which blood markers are unreliable on an at-home finger-prick test?',
    answer:
      'Markers most affected by finger-prick collection include potassium (hemolysis can falsely elevate it, with reviews citing roughly a 1-2 mmol/L overestimate from a hemolyzed sample), LDH, and full blood count parameters like the white-cell differential and platelets. Triglycerides and HDL can read lower when tissue fluid dilutes the drop. Sex hormones such as testosterone and estradiol are harder to measure accurately at very low concentrations. These markers are better measured from a venous draw. Discuss results with a clinician.',
  },
  {
    question: 'What makes an at-home blood test less accurate?',
    answer:
      'The lab analysis is rarely the weak point — collection and handling are. Common accuracy-killers are squeezing the finger (dilutes the sample), hemolysis (ruptured red cells that skew potassium and other markers), not fasting when the test requires it, testing hormones at the wrong time of day, and shipping or temperature delays before the sample reaches the lab. Studies report higher hemolysis and higher sample-rejection rates for capillary versus venous samples. Follow the kit instructions exactly and, for important decisions, use a professional draw.',
  },
  {
    question: 'When should I confirm an at-home result with a lab or doctor?',
    answer:
      'Confirm with a clinician or a venous lab draw whenever a result is far outside the reference range, when it would change a treatment or medication decision, when you have symptoms of a serious condition, or when the marker is one finger-prick collection handles poorly (potassium, hormones, full blood count). At-home testing is well suited to baseline checks and tracking trends over time; it is not a substitute for diagnostic care when you are actually unwell.',
  },
  {
    question: 'Do at-home blood tests use the same labs as my doctor?',
    answer:
      'Often, yes. Reputable at-home services process samples at CLIA-certified laboratories — the same federal accreditation Quest, Labcorp, and hospital labs operate under — and several are also CAP-accredited. Everlywell, for example, states that all the labs that process its tests are CLIA-certified and that its at-home collection has been validated against traditional in-clinic testing. The certification governs the analysis; the collection method (finger-prick vs venous) is what drives most of the accuracy difference you should weigh.',
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

// Accuracy by collection method. Figures are sourced ranges (studies vary), framed
// as evidence to weigh — never a single stated fact. Sources in the citation list.
const ACCURACY_ROWS = [
  {
    method: 'Venous draw (Quest / Labcorp)',
    how: 'Phlebotomist, vein, 5-15 mL tube',
    reliability: 'Gold standard',
    bestFor: 'Comprehensive panels, hormones, electrolytes, full blood count',
    color: 'text-green-700',
  },
  {
    method: 'At-home kit → venous draw',
    how: 'You order online, then visit a CLIA lab for the draw',
    reliability: 'Same as doctor-ordered',
    bestFor: 'Most panels — same sample type as a clinic, no referral needed',
    color: 'text-green-700',
  },
  {
    method: 'At-home finger-prick (capillary)',
    how: 'Lancet at home, ~0.3-0.6 mL drop, mailed in',
    reliability: 'Good for select markers',
    bestFor: 'HbA1c, glucose, vitamin D, CRP, lipid screening, trending',
    color: 'text-yellow-700',
  },
  {
    method: 'At-home saliva / urine',
    how: 'Swab or sample cup, mailed in',
    reliability: 'Narrow use',
    bestFor: 'Specific hormones or markers; not for broad panels',
    color: 'text-orange-700',
  },
];

export default function AreAtHomeBloodTestsAccurate() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Are At-Home Blood Tests Accurate? (2026)',
    description:
      'An evidence-based look at how accurate at-home blood tests are compared with a venous draw — what affects finger-prick accuracy, which markers are reliable, and when to confirm with a lab or clinician.',
    url: 'https://vitalityscout.com/guides/are-at-home-blood-tests-accurate',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/are-at-home-blood-tests-accurate#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'At-home blood testing (capillary finger-prick and venous direct-access lab testing)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'BD — Studies confirm fingertip blood collection has equivalent accuracy to venous draws (Journal of Applied Laboratory Medicine, 2025)', url: 'https://news.bd.com/2025-03-06-Studies-Confirm-New-Fingertip-Blood-Collection-Device-Has-Equivalent-Testing-Accuracy-of-Higher-Volume-Draws-from-Vein' },
      { '@type': 'CreativeWork', name: 'CMS — Clinical Laboratory Improvement Amendments (CLIA)', url: 'https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments' },
      { '@type': 'CreativeWork', name: 'Everlywell — Science / lab certification and validation', url: 'https://www.everlywell.com/science/' },
      { '@type': 'CreativeWork', name: 'Lola Health — Are at-home blood tests accurate? What the evidence says', url: 'https://lolahealth.com/blogs/longevity/at-home-blood-test-accuracy' },
      { '@type': 'CreativeWork', name: 'Lola Health — Finger prick vs venous blood test: which is more accurate? (marker-by-marker reliability, hemolysis and rejection rates)', url: 'https://lolahealth.com/blogs/longevity/finger-prick-vs-venous-blood-test' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/are-at-home-blood-tests-accurate#faq', url: 'https://vitalityscout.com/guides/are-at-home-blood-tests-accurate' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Telehealth &amp; Lab Testing
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Labs Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Are At-Home Blood Tests Accurate?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            How at-home blood tests compare with a venous draw, what actually moves
            accuracy, which markers are reliable, and when to confirm with a lab.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              At-home blood tests can be accurate, with one caveat. When samples are
              processed at <strong>CLIA-certified labs</strong>, the analysis meets the same
              federal standard as hospital labs. The variable is collection: an at-home kit
              that books a <strong>venous draw</strong> is as accurate as a doctor-ordered
              test, while a mailed-in <strong>finger-prick</strong> is reliable for markers like
              HbA1c, glucose, and vitamin D but less so for potassium, some hormones, and full
              blood counts. Confirm any concerning result with a clinician. This is information,
              not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Accuracy by method table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy by Collection Method</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">How it works</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Reliability</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Best for</th>
              </tr>
            </thead>
            <tbody>
              {ACCURACY_ROWS.map((r, i) => (
                <tr key={r.method} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.method}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.how}</td>
                  <td className={`border border-gray-200 px-4 py-3 text-sm font-semibold ${r.color}`}>{r.reliability}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          The pattern: the lab analysis is rarely the weak link — the collection method is.
          For a deeper how-it-works walkthrough, see the{' '}
          <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">
            at-home lab testing guide
          </Link>.
        </p>
      </section>

      {/* It is two questions */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">&quot;Accurate&quot; Is Really Two Questions</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              When people ask whether at-home blood tests are accurate, they are actually
              asking two separate things — and the answers are different:
            </p>
            <ul>
              <li>
                <strong>Is the lab any good?</strong> Usually yes. Reputable at-home services
                run samples through <strong>CLIA-certified</strong> laboratories. CLIA is the
                federal program, administered by CMS, that since 1988 has set standards to
                ensure the accuracy, reliability, and timeliness of test results regardless of
                where the test is performed. It covers roughly 320,000 lab entities and is the
                same accreditation Quest, Labcorp, and hospital labs hold. Many at-home labs are
                also CAP-accredited, a second voluntary quality layer.
              </li>
              <li>
                <strong>Is the sample any good?</strong> This is where accuracy actually varies.
                A venous draw fills a 5-15 mL tube under controlled conditions. A finger-prick
                yields a fraction of that — roughly 0.3-0.6 mL — and is more exposed to
                collection error before it ever reaches the certified lab.
              </li>
            </ul>
            <p>
              So a precise answer is: the analysis is held to the same standard; the sample is
              where at-home testing can lose ground. That distinction explains almost every
              accuracy story below.
            </p>
          </div>
        </div>
      </section>

      {/* Finger-prick vs venous */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Finger-Prick vs Venous Draw: What the Evidence Shows</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The gap between capillary (finger-prick) and venous blood is narrowing, but it has
            not closed. The encouraging side: a 2025 peer-reviewed study in the{' '}
            <em>Journal of Applied Laboratory Medicine</em> reported that a purpose-built
            fingertip collection device (BD MiniDraw) was{' '}
            <strong>clinically equivalent</strong> to a conventional venous draw for several
            routine chemistry analytes used in wellness checks. In other words, for many common
            markers, a well-collected finger-prick can match the vein.
          </p>
          <p>
            The cautious side: across the wider literature, a venous draw remains the more
            reliable method, and the reason is mechanical, not laboratory. Two things go wrong
            at the fingertip:
          </p>
          <ul>
            <li>
              <strong>Dilution.</strong> Squeezing or &quot;milking&quot; the finger to coax out
              more blood mixes in tissue fluid, diluting the sample. Reviews report this can
              push markers like triglycerides and HDL roughly 10-20% lower than the true value.
            </li>
            <li>
              <strong>Hemolysis.</strong> Capillary collection ruptures more red blood cells
              than a clean venous draw. Studies report higher hemolysis rates and higher
              sample-rejection rates for capillary versus venous samples (figures vary by study).
              Hemolysis is the single biggest reason a finger-prick value can read wrong.
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
          <p className="text-sm text-yellow-800">
            <strong>Why hemolysis matters:</strong> when red cells burst, they spill their
            contents into the sample. That falsely raises potassium — reviews cite roughly a
            1-2 mmol/L overestimate from a hemolyzed sample — and skews other intracellular
            markers. It is invisible to you at home but flagged or rejected at the lab.
          </p>
        </div>
      </section>

      {/* Which markers */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Markers Hold Up — and Which Don&apos;t</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable via finger-prick</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span><strong>HbA1c</strong> — a 3-month average; stable and well validated</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span><strong>Glucose</strong> — when collected per instructions</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span><strong>Vitamin D</strong> — robust on dried blood spot</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span><strong>CRP</strong> — inflammation screening</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span><strong>Lipid screening &amp; HbA1c trends</strong> — good for tracking over time</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-orange-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better from a venous draw</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">!</span><span><strong>Potassium</strong> — hemolysis falsely elevates it</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">!</span><span><strong>Full blood count</strong> — platelets and WBC differential skew</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">!</span><span><strong>Testosterone &amp; estradiol</strong> — hard to measure at low levels</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">!</span><span><strong>Triglycerides &amp; HDL</strong> — dilution lowers readings</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">!</span><span><strong>Coagulation / LDH</strong> — very hemolysis-sensitive</span></li>
              </ul>
            </div>
          </div>
          <p className="prose prose-lg max-w-none mt-8 text-gray-700">
            The takeaway is not &quot;avoid at-home testing&quot; — it is &quot;match the
            collection method to the marker.&quot; If a panel leans on potassium, hormones, or a
            full blood count, choose a service that books a venous draw rather than a mailed
            finger-prick.
          </p>
        </div>
      </section>

      {/* What you control */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Can Do to Keep It Accurate</h2>
        <div className="prose prose-lg max-w-none">
          <p>Most at-home accuracy loss is avoidable. Before and during collection:</p>
          <ul>
            <li><strong>Do not squeeze the finger.</strong> Warm the hand, let gravity help, and let drops fall — milking dilutes the sample.</li>
            <li><strong>Fast if the test requires it.</strong> Lipids and glucose usually need 8-12 hours; follow the kit instructions exactly.</li>
            <li><strong>Test hormones at the right time.</strong> Testosterone and cortisol swing through the day — collect at the same time each round for valid trends.</li>
            <li><strong>Mail it back fast.</strong> Shipping delays and heat degrade samples before they reach the lab.</li>
            <li><strong>Use a service that names its lab.</strong> Look for CLIA-certified (ideally CAP-accredited) processing; reputable providers state this openly.</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 not-prose my-6">
          <p className="text-sm text-gray-700">
            <strong>For tracking, trend beats single values.</strong> Because a lone finger-prick
            value can carry collection noise, at-home testing is strongest for watching a marker
            move over time under consistent conditions — not for hanging a diagnosis on one
            number.
          </p>
        </div>
      </section>

      {/* When to confirm */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Confirm With a Lab or Doctor</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">At-home is well suited to</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Baseline checks and annual wellness snapshots</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Tracking a marker over time (same conditions each round)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Pre-checking before a doctor visit</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Skipping insurance paperwork for routine monitoring</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-yellow-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm with a clinician when</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-yellow-600 mt-1">!</span><span>A result is far outside the reference range</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-600 mt-1">!</span><span>It would change a treatment or medication decision</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-600 mt-1">!</span><span>You have symptoms of a serious condition</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-600 mt-1">!</span><span>The marker is one finger-prick handles poorly</span></li>
              </ul>
            </div>
          </div>
          <p className="prose prose-lg max-w-none mt-8 text-gray-700">
            The fastest confirmation is usually a venous draw — either through your clinician or
            through an at-home service that books you into a Quest or Labcorp location, which
            gives you the same sample type a doctor would order.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Order Your Own Blood Test</h3>
          <p className="text-gray-600 mb-6">
            Compare direct-access lab services and what they cost — finger-prick kits and
            CLIA-lab venous draws, no doctor referral needed.
          </p>
          <Link
            href="/telehealth"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Compare Lab Testing Options →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">How it works, what to test, and which services to use</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
                <div className="text-sm text-gray-600">How self-order labs work, costs, and state rules</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/everlywell-vs-letsgetchecked" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Everlywell vs LetsGetChecked</div>
                <div className="text-sm text-gray-600">Two at-home test services compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/quest-vs-labcorp-pricing" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧬</span>
              <div>
                <div className="font-bold text-gray-900">Quest vs Labcorp Pricing</div>
                <div className="text-sm text-gray-600">Self-pay venous draw costs compared</div>
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
            <li>• <a href="https://news.bd.com/2025-03-06-Studies-Confirm-New-Fingertip-Blood-Collection-Device-Has-Equivalent-Testing-Accuracy-of-Higher-Volume-Draws-from-Vein" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BD — Fingertip collection equivalent to venous draw (Journal of Applied Laboratory Medicine, 2025)</a></li>
            <li>• <a href="https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CMS — Clinical Laboratory Improvement Amendments (CLIA)</a></li>
            <li>• <a href="https://www.everlywell.com/science/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Lab certification &amp; validation (Science)</a></li>
            <li>• <a href="https://lolahealth.com/blogs/longevity/at-home-blood-test-accuracy" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Lola Health — Are at-home blood tests accurate? What the evidence says</a></li>
            <li>• <a href="https://lolahealth.com/blogs/longevity/finger-prick-vs-venous-blood-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Lola Health — Finger prick vs venous blood test: which is more accurate? (marker reliability, hemolysis &amp; rejection rates)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Testing Your Own Bloodwork?"
          description="Get our at-home vs lab accuracy checklist plus tips for collecting a clean sample and reading your results."
          source="guide_are_at_home_blood_tests_accurate"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
