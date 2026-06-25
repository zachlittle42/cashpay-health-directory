import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'How to Read Blood Test Results: CBC, CMP, A1c & More',
  description:
    'How to read blood test results: what CBC, CMP, lipid, A1c, and thyroid markers mean, normal reference ranges, what high/low flags suggest, and next steps.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every range is sourced and framed as a typical adult
// reference interval to confirm against the range on your own report. The
// visible FAQ block below mirrors this schema exactly — schema clarifies the
// page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How do I read my blood test results?',
    answer:
      'Read each line as four parts: the marker name (such as Glucose or Hemoglobin), your result, the unit (such as mg/dL), and the reference range printed beside it. An H or L flag means your value sits above or below that lab’s range. A single flagged value does not mean a diagnosis — ranges vary by lab, age, sex, and fasting state, and trends over time matter more than one reading. Always interpret results with the clinician who ordered them.',
  },
  {
    question: 'What is a normal A1c level?',
    answer:
      'Per the CDC, an A1c below 5.7% is normal, 5.7% to 6.4% indicates prediabetes, and 6.5% or above on two tests meets the criteria for diabetes. A1c reflects your average blood sugar over roughly the past 3 months, so it is less affected by a single meal than a fasting glucose. Confirm any abnormal A1c with the ordering clinician before drawing conclusions.',
  },
  {
    question: 'What do high and low values on a blood test mean?',
    answer:
      'A high (H) or low (L) flag means the result falls outside the lab’s reference range, which is set so most healthy people land inside it. Causes range from harmless (dehydration, a recent meal, normal individual variation) to clinically meaningful. One out-of-range value rarely confirms anything on its own. The pattern across related markers, your symptoms, your medications, and the trend over repeat tests is what a clinician uses to interpret it.',
  },
  {
    question: 'Do I need to fast before a blood test?',
    answer:
      'It depends on the test. A lipid (cholesterol) panel and a fasting glucose are often drawn after 9 to 12 hours without food or drink except water, because eating raises triglycerides and glucose. A CBC, an A1c, and a TSH generally do not require fasting. Follow the specific instructions your lab or clinician gives, since some panels now use non-fasting protocols. When in doubt, ask the lab before your draw.',
  },
  {
    question: 'Can I order my own blood test without a doctor?',
    answer:
      'In most US states you can buy direct-access (self-order) lab tests without a separate doctor visit; a physician affiliated with the lab signs off on the order. Common panels include a CBC, CMP, lipid panel, A1c, and thyroid testing. A few states restrict or limit direct-access testing. Self-ordered results still need professional interpretation, especially anything flagged. See our blood-test-without-a-doctor guide for how it works and which states restrict it.',
  },
  {
    question: 'What is the difference between a CBC and a CMP?',
    answer:
      'A CBC (complete blood count) measures the cells in your blood — red cells, white cells, hemoglobin, hematocrit, and platelets — and is used to screen for anemia, infection, and clotting issues. A CMP (comprehensive metabolic panel) measures 14 chemistries including glucose, electrolytes, kidney markers (BUN, creatinine), and liver enzymes (ALT, AST, ALP), giving a picture of metabolism, kidney, and liver function. Many checkups order both together.',
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

// Typical adult reference ranges, each from a cited authority. These are
// general ranges; the range printed on your own report is the one that
// applies. Sources: National Kidney Foundation (CMP chemistries), Cleveland
// Clinic (CBC), MedlinePlus / NHLBI (lipids), CDC (A1c), UCLA Health (TSH).
const CBC_ROWS = [
  { marker: 'White blood cells (WBC)', range: '4,000–10,000 cells/mcL', means: 'Infection-fighting cells; high can signal infection or inflammation, low can follow some meds or marrow issues' },
  { marker: 'Red blood cells (RBC)', range: '4.5–6.1M/mcL (M); 4.0–5.4M/mcL (F)', means: 'Oxygen-carrying cells; low is a hallmark of anemia, high can reflect dehydration or other conditions' },
  { marker: 'Hemoglobin (Hb)', range: '13–17 g/dL (M); 11.5–15.5 g/dL (F)', means: 'Oxygen-transport protein; low often points to anemia' },
  { marker: 'Hematocrit (Hct)', range: '40–55% (M); 36–48% (F)', means: 'Share of blood volume that is red cells; tracks with RBC and hemoglobin' },
  { marker: 'Platelets', range: '150,000–400,000 cells/mcL', means: 'Clotting cells; low raises bleeding risk, high can follow infection or inflammation' },
];

const CMP_ROWS = [
  { marker: 'Glucose (fasting)', range: '70–100 mg/dL', means: 'Blood sugar; 100–125 is prediabetes range, 126+ on repeat testing is the diabetes threshold' },
  { marker: 'BUN', range: '6–20 mg/dL', means: 'Kidney waste marker; interpreted alongside creatinine and hydration' },
  { marker: 'Creatinine', range: '0.6–1.3 mg/dL', means: 'Kidney filtration marker; used to estimate eGFR' },
  { marker: 'Sodium', range: '135–145 mEq/L', means: 'Key electrolyte for fluid balance' },
  { marker: 'Potassium', range: '3.7–5.2 mEq/L', means: 'Electrolyte critical for heart and muscle function' },
  { marker: 'Calcium', range: '8.5–10.2 mg/dL', means: 'Mineral for bones, nerves, and muscle' },
  { marker: 'Albumin', range: '3.4–5.4 g/dL', means: 'Main blood protein; low can reflect liver, kidney, or nutrition issues' },
  { marker: 'ALT', range: '4–36 U/L', means: 'Liver enzyme; elevations can flag liver stress' },
  { marker: 'AST', range: '8–33 U/L', means: 'Liver/muscle enzyme; read with ALT' },
  { marker: 'ALP', range: '20–130 U/L', means: 'Enzyme from liver and bone' },
  { marker: 'Total bilirubin', range: '0.1–1.2 mg/dL', means: 'Liver/red-cell breakdown product; high can cause jaundice' },
];

const LIPID_ROWS = [
  { marker: 'Total cholesterol', range: 'Desirable: under 200 mg/dL', means: 'A broad first look; read with LDL, HDL, and triglycerides' },
  { marker: 'LDL ("bad") cholesterol', range: 'Optimal: under 100 mg/dL', means: 'The main marker for cardiovascular risk; lower is generally better' },
  { marker: 'HDL ("good") cholesterol', range: '60+ best; under 40 (M) / under 50 (F) is low', means: 'Higher is generally protective' },
  { marker: 'Triglycerides', range: 'Normal: under 150; borderline 150–199; high 200+', means: 'Blood fats; sensitive to recent meals and alcohol' },
];

export default function HowToReadBloodTestResults() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'How to Read Blood Test Results (CBC, CMP, Lipids, A1c, Thyroid)',
    description:
      'A plain-English guide to reading common blood test results — what each CBC, CMP, lipid, A1c, and thyroid marker means, typical reference ranges, what high or low flags suggest, and the right next steps.',
    url: 'https://vitalityscout.com/guides/how-to-read-blood-test-results',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/how-to-read-blood-test-results#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Common blood tests (complete blood count, comprehensive metabolic panel, lipid panel, hemoglobin A1c, thyroid panel)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'National Kidney Foundation — How to Read a Comprehensive Metabolic Panel', url: 'https://www.kidney.org/news-stories/how-to-read-comprehensive-metabolic-panel' },
      { '@type': 'CreativeWork', name: 'Cleveland Clinic — Complete Blood Count (CBC)', url: 'https://my.clevelandclinic.org/health/diagnostics/4053-complete-blood-count' },
      { '@type': 'CreativeWork', name: 'MedlinePlus — Comprehensive Metabolic Panel (CMP)', url: 'https://medlineplus.gov/lab-tests/comprehensive-metabolic-panel-cmp/' },
      { '@type': 'CreativeWork', name: 'MedlinePlus — Cholesterol Levels: What You Need to Know', url: 'https://medlineplus.gov/cholesterollevelswhatyouneedtoknow.html' },
      { '@type': 'CreativeWork', name: 'CDC — All About Your A1C', url: 'https://www.cdc.gov/diabetes/diabetes-testing/prediabetes-a1c-test.html' },
      { '@type': 'CreativeWork', name: 'UCLA Health — TSH (Thyrotropin) Test', url: 'https://www.uclahealth.org/medical-services/surgery/endocrine-surgery/conditions-treated/thyroid/tsh-thyrotropin-test' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/how-to-read-blood-test-results#faq', url: 'https://vitalityscout.com/guides/how-to-read-blood-test-results' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Lab Testing Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Lab Results Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Read Blood Test Results
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What the markers on a CBC, CMP, lipid panel, A1c, and thyroid test
            mean, the typical ranges, and what to do when something is flagged.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              To read blood test results, check each line for four things: the{' '}
              <strong>marker name</strong>, your <strong>result</strong>, the{' '}
              <strong>unit</strong>, and the <strong>reference range</strong> beside it.
              An <strong>H or L flag</strong> means your value is above or below that
              lab&apos;s normal range. One flagged value is not a diagnosis &mdash; ranges
              vary by lab, age, and sex, and trends over time matter more. Always review
              results with your clinician. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* Anatomy of a result line */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Anatomy of a Result Line</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Every line on a lab report has the same four parts. Once you can spot them,
            any panel becomes readable:
          </p>
          <ul>
            <li><strong>Marker</strong> &mdash; the test name, such as <em>Glucose</em>, <em>Hemoglobin</em>, or <em>TSH</em>.</li>
            <li><strong>Result</strong> &mdash; your measured number.</li>
            <li><strong>Unit</strong> &mdash; how it is measured, such as mg/dL, g/dL, mEq/L, or mIU/L. The same marker can be reported in different units by different labs.</li>
            <li><strong>Reference range</strong> &mdash; the band most healthy people fall inside. A result outside it is usually tagged <strong>H</strong> (high) or <strong>L</strong> (low).</li>
          </ul>
          <p>
            A reference range is built so that roughly 95% of a healthy population lands
            inside it &mdash; which means a small share of perfectly healthy people will
            still flag high or low. Ranges also shift with the lab, your age, your sex,
            whether you fasted, and even altitude. <strong>Compare your result to the range
            printed on your own report, not a generic chart</strong>, and read the pattern
            across related markers rather than fixating on one number.
          </p>
        </div>
      </section>

      {/* CBC */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Blood Count (CBC)</h2>
          <p className="text-gray-600 mb-6">
            The CBC measures the cells circulating in your blood and is used to screen for
            anemia, infection, and clotting problems. Typical adult ranges (Cleveland Clinic):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Marker</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Range</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Reflects</th>
                </tr>
              </thead>
              <tbody>
                {CBC_ROWS.map((r, i) => (
                  <tr key={r.marker} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.marker}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.range}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.means}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Many CBCs come &ldquo;with differential,&rdquo; which breaks the white cells into types
            (neutrophils, lymphocytes, and others). Ranges are sex-specific because testosterone
            raises red-cell counts; confirm against your own report&apos;s range.
          </p>
        </div>
      </section>

      {/* CMP */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Comprehensive Metabolic Panel (CMP)</h2>
        <p className="text-gray-600 mb-6">
          The CMP measures 14 chemistries that describe your metabolism, kidney function, and
          liver function (MedlinePlus). Key components and typical ranges (National Kidney
          Foundation):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Marker</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Range</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Reflects</th>
              </tr>
            </thead>
            <tbody>
              {CMP_ROWS.map((r, i) => (
                <tr key={r.marker} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.marker}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.range}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.means}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          A CMP usually requires fasting because food raises glucose. The kidney markers (BUN,
          creatinine) and liver enzymes (ALT, AST, ALP) are read as groups, not one at a time
          &mdash; one mildly elevated liver enzyme means something different from three elevated
          together.
        </p>
      </section>

      {/* A1c */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Hemoglobin A1c (Average Blood Sugar)</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A1c reflects your average blood sugar over roughly the past 3 months, so a single
              meal cannot move it much. Per the CDC, the cutoffs are:
            </p>
            <ul>
              <li><strong>Below 5.7%</strong> &mdash; normal</li>
              <li><strong>5.7% to 6.4%</strong> &mdash; prediabetes</li>
              <li><strong>6.5% or above</strong> &mdash; meets the criteria for diabetes (confirmed on repeat testing)</li>
            </ul>
            <p>
              A fasting glucose tells a complementary story: <strong>70&ndash;100 mg/dL</strong> is
              typical, <strong>100&ndash;125 mg/dL</strong> is the prediabetes range, and{' '}
              <strong>126 mg/dL or higher</strong> on repeat testing is the diabetes threshold.
              If your A1c lands in the prediabetes window, that is a prompt to talk with a clinician
              about diet, activity, and follow-up testing &mdash; not a verdict.
            </p>
          </div>
        </div>
      </section>

      {/* Lipids */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Lipid Panel (Cholesterol)</h2>
        <p className="text-gray-600 mb-6">
          The lipid panel measures the fats in your blood and is a core cardiovascular-risk
          screen. General targets (MedlinePlus / NHLBI) &mdash; your personal targets depend on
          your overall risk, so confirm with your clinician:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Marker</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">General Target</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Reflects</th>
              </tr>
            </thead>
            <tbody>
              {LIPID_ROWS.map((r, i) => (
                <tr key={r.marker} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.marker}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.range}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.means}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Lipid panels are often drawn fasting (9&ndash;12 hours) because food raises triglycerides,
          though some clinicians now use non-fasting panels. Follow the instructions your lab gives.
        </p>
      </section>

      {/* Thyroid */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Thyroid (TSH)</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              TSH (thyroid-stimulating hormone) is the usual first thyroid test. Per UCLA Health,
              a typical range is <strong>0.5 to 5.0 mIU/L</strong>. The counterintuitive part is
              the direction:
            </p>
            <ul>
              <li><strong>High TSH</strong> generally suggests an <em>under</em>active thyroid (hypothyroidism) &mdash; the brain is pushing the gland harder because it is making too little hormone.</li>
              <li><strong>Low TSH</strong> generally suggests an <em>over</em>active thyroid (hyperthyroidism).</li>
            </ul>
            <p>
              A flagged TSH is usually followed by free T4 (and sometimes free T3) before any
              conclusion. Ranges vary by lab and life stage &mdash; pregnancy and age shift the
              target &mdash; so interpretation belongs with a clinician.
            </p>
          </div>
        </div>
      </section>

      {/* What to do with a flag */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do When Something Is Flagged</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Don&apos;t panic over one value</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A single H or L can come from dehydration, a recent meal, or normal variation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Borderline results are common and often resolve on a repeat test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>The trend across repeat tests usually says more than one snapshot</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Do bring it to a clinician</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Markedly out-of-range values, or several related markers off together</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A flag that lines up with symptoms you are having</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Self-ordered results &mdash; bring them to a clinician for interpretation</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>A few practical habits make results easier to read over time:</p>
          <ul>
            <li>Use the <strong>same lab</strong> when you can &mdash; ranges and methods differ between labs, which muddies trends.</li>
            <li>Keep a <strong>running record</strong> so you can see direction, not just a single point.</li>
            <li>Note your <strong>fasting state and timing</strong>, since both move glucose, triglycerides, and some other markers.</li>
          </ul>
        </div>
      </section>

      {/* Ordering your own */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ordering These Panels Yourself</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              In most US states you can buy a CBC, CMP, lipid panel, A1c, or thyroid test as a
              direct-access (self-order) lab without a separate doctor visit &mdash; a physician
              affiliated with the lab signs the order. A few states restrict it. Self-ordered
              results still need professional interpretation, especially anything flagged.
            </p>
            <p>
              For how self-order labs work, which states limit them, and what they cost, see our{' '}
              <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">
                blood test without a doctor
              </Link>{' '}
              guide and the{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                cheapest blood test panels
              </Link>{' '}
              price comparison. To pick a provider, compare the major labs on the{' '}
              <Link href="/labs" className="text-blue-600 hover:underline">
                lab testing hub
              </Link>.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Order a Blood Test?</h3>
          <p className="text-gray-600 mb-6">
            Compare self-pay lab options &mdash; CBC, CMP, lipid, A1c, and thyroid panels &mdash;
            and find one near you.
          </p>
          <Link
            href="/labs"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Compare Lab Tests →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
                <div className="text-sm text-gray-600">How self-order labs work and which states restrict them</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/cheapest-blood-test-panels" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Blood Test Panels</div>
                <div className="text-sm text-gray-600">Self-pay panel prices compared by test type</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing</div>
                <div className="text-sm text-gray-600">How at-home blood tests work and their accuracy</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/quest-vs-labcorp-pricing" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Quest vs Labcorp Pricing</div>
                <div className="text-sm text-gray-600">Self-pay lab pricing from the two big labs</div>
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
            <li>• <a href="https://www.kidney.org/news-stories/how-to-read-comprehensive-metabolic-panel" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">National Kidney Foundation — How to Read a Comprehensive Metabolic Panel</a></li>
            <li>• <a href="https://my.clevelandclinic.org/health/diagnostics/4053-complete-blood-count" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cleveland Clinic — Complete Blood Count (CBC)</a></li>
            <li>• <a href="https://medlineplus.gov/lab-tests/comprehensive-metabolic-panel-cmp/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MedlinePlus — Comprehensive Metabolic Panel (CMP)</a></li>
            <li>• <a href="https://medlineplus.gov/cholesterollevelswhatyouneedtoknow.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MedlinePlus — Cholesterol Levels: What You Need to Know</a></li>
            <li>• <a href="https://www.cdc.gov/diabetes/diabetes-testing/prediabetes-a1c-test.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CDC — All About Your A1C</a></li>
            <li>• <a href="https://www.uclahealth.org/medical-services/surgery/endocrine-surgery/conditions-treated/thyroid/tsh-thyrotropin-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCLA Health — TSH (Thyrotropin) Test</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Decoding Your Bloodwork?"
          description="Get our plain-English lab-marker cheat sheet plus tips on what to test and how to track results over time."
          source="guide_how_to_read_blood_test_results"
        />
      </div>

      <Footer />
    </main>
  );
}
