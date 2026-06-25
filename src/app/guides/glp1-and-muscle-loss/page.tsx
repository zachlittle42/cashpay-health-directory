import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'GLP-1 Muscle Loss: How Much & How to Protect Lean Mass' },
  alternates: { canonical: 'https://vitalityscout.com/guides/glp1-and-muscle-loss' },
  description: 'How much muscle you lose on a GLP-1 (semaglutide, tirzepatide), why it happens, and how protein, resistance training, and DEXA scans protect lean mass.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every answer keeps clinical claims sourced and
// defers candidacy/dosing to a clinician. The visible FAQ block below mirrors
// this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much muscle do you lose on a GLP-1?',
    answer:
      'It varies by trial and by what you do alongside the medication, but a large share of GLP-1 weight loss can come from lean (mostly muscle) mass. In the STEP 1 semaglutide analysis, lean body mass fell about 9.7% and made up roughly 40% of total weight lost. In the SURMOUNT-1 tirzepatide substudy, about 26% of weight lost was lean mass. Reviews put the range at roughly 15% to 40% of weight lost as lean mass, depending on diet, training, and how fast you lose. These are study averages, not a prediction for you — talk to your clinician.',
  },
  {
    question: 'Why does a GLP-1 cause muscle loss?',
    answer:
      'GLP-1 medications curb appetite, so people often eat far less — and that calorie deficit, plus frequently lower protein intake, is the main driver of lost lean mass. Some muscle loss is expected with any significant weight loss, including diet alone. The concern with GLP-1s is the pace and degree of weight loss without a deliberate plan to protect muscle. This is general information, not medical advice.',
  },
  {
    question: 'How do you prevent muscle loss while taking semaglutide or tirzepatide?',
    answer:
      'The two evidence-backed levers are protein and resistance training. Clinical guidance commonly suggests roughly 1.2 to 1.6 grams of protein per kilogram of body weight per day, spread across meals, plus structured resistance (strength) training about 2 to 3 times per week targeting all major muscle groups. Studies show pairing a GLP-1 with resistance training preserves more muscle than the medication alone. Discuss a specific protein target and exercise plan with your clinician.',
  },
  {
    question: 'Should I get a DEXA scan while on a GLP-1?',
    answer:
      'A DEXA (DXA) scan separately measures fat mass, lean (muscle) mass, and bone density, so it can show whether your weight loss is coming from fat or muscle in a way the bathroom scale cannot. Many people on a GLP-1 scan at baseline and then every 3 months to confirm they are losing fat and holding lean mass. A body-composition DEXA scan typically costs about $40 to $260 cash-pay and is usually paid out of pocket. Confirm pricing and whether it suits your goals with the provider.',
  },
  {
    question: 'Does the muscle come back after stopping a GLP-1?',
    answer:
      'Evidence here is still developing, and outcomes differ by person. What is clearer is that resistance training and adequate protein during treatment help you keep muscle in the first place, which is easier than rebuilding it later. Weight regain after stopping is common, and regained weight is not guaranteed to return as muscle. Plan muscle protection with a clinician before, during, and after treatment rather than counting on recovery afterward.',
  },
  {
    question: 'Is losing some muscle on a GLP-1 normal or dangerous?',
    answer:
      'Some lean-mass loss accompanies almost all weight loss, and because fat loss is usually larger, body composition (the ratio of lean to fat) often still improves on a GLP-1. The clinical concern is when muscle loss is large — particularly for older adults or anyone already low on muscle — because muscle supports strength, metabolism, and function. This is why protein, resistance training, and monitoring matter. Talk to your clinician about your individual risk.',
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

// Trial body-composition figures, each tied to a cited source (see jsonLd
// citation[] and the Sources block). Numbers are study averages, not a
// prediction for any individual.
const TRIAL_DATA = [
  {
    drug: 'Semaglutide 2.4 mg',
    trial: 'STEP 1 (body-composition analysis)',
    weight: '−15.0% body weight',
    lean: '−9.7% lean mass',
    leanShare: '~40% of weight lost',
    note: 'Fat mass fell ~19.3%; lean-to-fat ratio improved overall (DXA substudy, n=140).',
  },
  {
    drug: 'Tirzepatide',
    trial: 'SURMOUNT-1 (body-composition substudy)',
    weight: '72-week treatment',
    lean: '−10.9% lean mass (vs −2.6% placebo)',
    leanShare: '~26% of weight lost',
    note: 'About 74% of weight lost was fat, 26% lean mass (whole-body DXA, n=160).',
  },
];

export default function GLP1AndMuscleLoss() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'GLP-1 and Muscle Loss: Protecting Lean Mass',
    description:
      'How much muscle is lost on GLP-1 medications like semaglutide and tirzepatide, why it happens, and how protein, resistance training, and DEXA monitoring protect lean mass.',
    url: 'https://vitalityscout.com/guides/glp1-and-muscle-loss',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/glp1-and-muscle-loss#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalCondition',
      name: 'Lean mass (muscle) loss during GLP-1 receptor agonist weight loss',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Impact of Semaglutide on Body Composition — STEP 1 exploratory analysis (Journal of the Endocrine Society, 2021)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8089287/' },
      { '@type': 'CreativeWork', name: 'Body composition changes with tirzepatide — SURMOUNT-1 (Diabetes, Obesity & Metabolism, 2025)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11965027/' },
      { '@type': 'CreativeWork', name: 'Changes in lean body mass with GLP-1-based therapies and mitigation strategies — Neeland et al. (Diabetes, Obesity & Metabolism, 2024)', url: 'https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.15728' },
      { '@type': 'CreativeWork', name: 'Optimal protein intake and strength training for GLP-1 users — Endocrine Direct Care Physicians', url: 'https://www.endocrinedirectcarephysicians.com/post/optimal-daily-protein-intake-and-strength-training-tips-for-glp-1-medication-users-to-preserve-muscl' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI for body composition', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/glp1-and-muscle-loss#faq', url: 'https://vitalityscout.com/guides/glp1-and-muscle-loss' };

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
            GLP-1 and Muscle Loss
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            How much lean mass is really at risk on semaglutide and tirzepatide, why it
            happens, and the protein, training, and monitoring habits that protect it.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              GLP-1 medications cause real <strong>muscle (lean mass) loss</strong> because they
              sharply reduce appetite and calorie intake. Across trials, roughly{' '}
              <strong>15% to 40% of total weight lost</strong> can be lean mass — about 40% in the
              STEP 1 semaglutide analysis and ~26% in the SURMOUNT-1 tirzepatide substudy. You can
              protect muscle with <strong>1.2&ndash;1.6 g/kg/day of protein</strong>, resistance
              training 2&ndash;3x weekly, and DEXA scans to confirm you are losing fat, not muscle.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* How much muscle — trial table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Muscle Is Actually at Risk</h2>

        <p className="text-gray-600 mb-6">
          The honest answer is &ldquo;it depends&rdquo; — on the drug, the speed of loss, and what
          you do alongside it. Here is what two of the largest body-composition analyses (both using
          DEXA scans) found.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Medication</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Trial</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Lean Mass Change</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Share of Weight Lost</th>
              </tr>
            </thead>
            <tbody>
              {TRIAL_DATA.map((d, i) => (
                <tr key={d.drug} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{d.drug}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{d.trial}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{d.lean}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{d.leanShare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Figures are study averages from the STEP 1 (semaglutide) and SURMOUNT-1 (tirzepatide)
          body-composition analyses, not a prediction for any individual. A 2024 review in{' '}
          <em>Diabetes, Obesity &amp; Metabolism</em> notes the lean-mass share ranges from roughly
          15% to as much as 40&ndash;60% of weight lost across studies. Your own result depends
          heavily on protein, training, and how fast you lose.
        </p>
      </section>

      {/* Why it happens */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why GLP-1s Cause Muscle Loss</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The mechanism is mostly indirect, and it is not unique to these drugs — any large,
              rapid weight loss takes some muscle with it. What GLP-1 medications change is the
              <em> degree</em> and <em>speed</em>:
            </p>
            <ul>
              <li>
                <strong>Steep appetite suppression.</strong> Semaglutide and tirzepatide blunt
                hunger, so most people eat substantially less. A large, sustained calorie deficit is
                the primary driver of lost lean mass.
              </li>
              <li>
                <strong>Protein under-eating.</strong> When total food intake drops, protein often
                drops with it. Without enough protein, the body has less raw material to maintain
                muscle.
              </li>
              <li>
                <strong>Less of a stimulus to keep muscle.</strong> Muscle responds to demand. If
                weight is falling without resistance training, the body has little reason to hold on
                to tissue it is not using.
              </li>
            </ul>
            <p>
              Important context: because fat loss is usually larger than muscle loss, body
              <em> composition</em> — the ratio of lean to fat — often still improves on a GLP-1. In
              the STEP 1 analysis, lean mass as a proportion of total body weight actually rose even
              though absolute lean mass fell. The goal is not zero muscle loss; it is keeping muscle
              loss small relative to fat loss.
            </p>
          </div>
        </div>
      </section>

      {/* Who should watch most closely */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Watch Muscle Most Closely</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Some lean-mass loss is acceptable, even expected. It matters more for some people than
            others. Discuss your individual risk with your clinician, but the groups generally
            flagged in the literature include:
          </p>
          <ul>
            <li><strong>Older adults</strong>, who are already losing muscle with age and have less to spare.</li>
            <li><strong>Anyone already low on muscle</strong> or with low strength or frailty concerns.</li>
            <li><strong>Fast losers</strong> — the quicker the weight comes off, the more muscle tends to go with it.</li>
            <li><strong>People not strength training</strong>, who remove the single biggest signal to retain muscle.</li>
          </ul>
          <p>
            None of this is a reason to avoid effective treatment. It is a reason to pair the
            medication with a deliberate muscle-protection plan.
          </p>
        </div>
      </section>

      {/* How to protect it */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Protect Lean Mass on a GLP-1</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protein</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Clinical guidance commonly suggests <strong>1.2&ndash;1.6 g/kg/day</strong> of protein</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Spread it across meals rather than loading one meal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Reduced appetite makes hitting protein the hardest part — prioritize it first</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resistance training</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>2&ndash;3 sessions per week</strong> targeting all major muscle groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Strength training is the single strongest signal to retain muscle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Studies show GLP-1 + resistance training preserves more muscle than medication alone</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              The 2024 <em>Diabetes, Obesity &amp; Metabolism</em> review names exactly these two
              levers — adequate protein and resistance/physical activity — as the core mitigation
              strategies for lean-mass loss on GLP-1 therapy. Set specific targets with your
              clinician or a qualified coach; the numbers above are general guidance, not a
              prescription.
            </p>
          </div>
        </div>
      </section>

      {/* DEXA monitoring */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why a DEXA Scan Beats the Bathroom Scale</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The scale only shows total weight — it cannot tell you whether a pound lost was fat or
            muscle. A <strong>DEXA (DXA) scan</strong> separates the two, reporting fat mass, lean
            (muscle) mass, and bone density, broken down by region. That is precisely the
            measurement you need on a GLP-1, because the whole question is <em>what kind</em> of
            weight you are losing. UCSF Radiology notes DXA is highly accurate for body composition
            and tells a clearer story than BMI.
          </p>
          <p>A practical monitoring cadence many people use on a GLP-1:</p>
          <ul>
            <li><strong>Baseline scan</strong> before or early in treatment, so you have a starting point.</li>
            <li><strong>Every 3 months</strong> while actively losing, to confirm fat is dropping and lean mass is holding.</li>
            <li><strong>Same machine each time</strong> where possible — switching devices reduces tracking accuracy.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Cost note:</strong> A body-composition DEXA scan typically runs about{' '}
              <strong>$40&ndash;$260</strong> cash-pay depending on the provider and city, and a
              scan for body composition is generally elective and paid out of pocket (unlike a
              bone-density scan, which may be covered). Confirm pricing with the clinic.
            </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Body Composition with a DEXA Scan</h3>
          <p className="text-gray-600 mb-6">
            Find a body-composition DEXA provider near you to confirm your GLP-1 weight loss is fat,
            not muscle.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Find a DEXA Scan →
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

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to track progress</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hims-vs-ro-vs-calibrate" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">The leading telehealth GLP-1 programs compared</div>
              </div>
            </div>
          </Link>

          <Link href="/weight-loss" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">Weight Loss Hub</div>
                <div className="text-sm text-gray-600">Cash-pay GLP-1 and weight-loss options compared</div>
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
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8089287/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">STEP 1 body-composition analysis — Journal of the Endocrine Society (2021)</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965027/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">SURMOUNT-1 body-composition substudy — Diabetes, Obesity &amp; Metabolism (2025)</a></li>
            <li>• <a href="https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.15728" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Neeland et al. — Changes in lean body mass with GLP-1 therapies &amp; mitigation strategies (2024)</a></li>
            <li>• <a href="https://www.endocrinedirectcarephysicians.com/post/optimal-daily-protein-intake-and-strength-training-tips-for-glp-1-medication-users-to-preserve-muscl" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Endocrine Direct Care Physicians — protein &amp; strength training for GLP-1 users</a></li>
            <li>• <a href="https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCSF Radiology — Why DXA/DEXA beats BMI for body composition</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="On a GLP-1? Protect Your Muscle."
          description="Get our protein + resistance-training checklist and a DEXA price comparison to track fat loss vs muscle loss."
          source="guide_glp1_and_muscle_loss"
        />
      </div>

      <Footer />
    </main>
  );
}
