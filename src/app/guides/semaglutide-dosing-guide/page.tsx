import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/semaglutide-dosing-guide';

export const metadata: Metadata = {
  title: { absolute: 'Semaglutide Dosing Chart (2026): Ozempic, Wegovy, Rybelsus' },
  alternates: { canonical: URL },
  description:
    'Semaglutide dosing by the FDA label: Ozempic starts at 0.25 mg weekly, Wegovy titrates to 2.4 mg, Rybelsus is a daily tablet. Three products, three charts.',
};

// Every answer below is reported from the current FDA-approved prescribing
// information for each product (DailyMed SPLs, retrieved 2026). Nothing here
// tells anyone what dose to take. The visible FAQ block mirrors this exactly.
const FAQ_ITEMS = [
  {
    question: 'What is the semaglutide dosing schedule?',
    answer:
      'There is no single semaglutide dosing schedule. Semaglutide is sold as several distinct FDA-approved products, and each has its own labeled titration. Ozempic injection (type 2 diabetes) starts at 0.25 mg once weekly for 4 weeks, then 0.5 mg once weekly, with optional increases to 1 mg and then 2 mg after at least 4 weeks at each step. Wegovy injection (chronic weight management and cardiovascular risk reduction) climbs 0.25 mg, 0.5 mg, 1 mg, 1.7 mg over 16 weeks to a 2.4 mg maintenance dose. Rybelsus is an oral tablet for type 2 diabetes dosed 3 mg daily for 30 days, then 7 mg, then optionally 14 mg. Your prescriber decides which product and which dose is appropriate for you.',
  },
  {
    question: 'What is the Ozempic dosing schedule?',
    answer:
      'The Ozempic label specifies initiation at 0.25 mg injected subcutaneously once weekly for 4 weeks. After 4 weeks the dosage increases to 0.5 mg once weekly. If additional glycemic control is needed, the label allows an increase to 1 mg once weekly after at least 4 weeks on 0.5 mg, and then to 2 mg once weekly after at least 4 weeks on 1 mg. The maximum recommended dosage is 2 mg once weekly. For adults with type 2 diabetes and chronic kidney disease, the label directs increasing to the 1 mg maintenance dosage after at least 4 weeks on 0.5 mg. Ozempic is approved for type 2 diabetes, not for weight loss. Only a licensed prescriber can set or change a dose.',
  },
  {
    question: 'What is the Wegovy dose schedule?',
    answer:
      'The Wegovy injection label specifies a 16-week escalation before maintenance: 0.25 mg once weekly for weeks 1 through 4, 0.5 mg for weeks 5 through 8, 1 mg for weeks 9 through 12, 1.7 mg for weeks 13 through 16, then maintenance from week 17 onward. The recommended maintenance dosage for weight reduction in adults is 2.4 mg once weekly, with 1.7 mg as the alternative. The label states that patients who tolerate 2.4 mg for at least 4 weeks and need additional weight reduction may be increased to a maximum of 7.2 mg once weekly. If a dose is not tolerated during escalation, the label says to consider delaying the next step by 4 weeks. The prescriber makes that call.',
  },
  {
    question: 'What is the Rybelsus dosage schedule?',
    answer:
      'Rybelsus is oral semaglutide approved for type 2 diabetes. The label specifies 3 mg orally once daily for days 1 through 30, and states plainly that this starting dosage is not effective for glycemic control, then 7 mg once daily for days 31 through 60. From day 61 onward the dosage stays at 7 mg, or increases to 14 mg once daily if additional glycemic control is needed. The tablet must be taken on an empty stomach in the morning with no more than 4 ounces of water, swallowed whole, with at least 30 minutes before food, other drinks, or other oral medications. Rybelsus is not approved for weight loss.',
  },
  {
    question: 'How long does it take to reach the full semaglutide dose?',
    answer:
      'It depends on the product. Wegovy injection has the longest labeled ramp: 16 weeks of escalation before the 2.4 mg maintenance dose begins at week 17. Ozempic reaches its 0.5 mg maintenance dose after 4 weeks, and reaching 2 mg takes at least 12 weeks of stepped increases. Rybelsus reaches 7 mg at day 31 and 14 mg no earlier than day 61. Wegovy tablets reach the 25 mg maintenance dose at day 91. Every label states the escalation exists to reduce the risk of gastrointestinal adverse reactions. The Wegovy label goes further and directs prescribers to consider delaying escalation by 4 weeks if a dose is not tolerated. Actual timing is a clinical decision, not a fixed calendar.',
  },
  {
    question: 'Is compounded semaglutide dosed the same as Ozempic or Wegovy?',
    answer:
      'No, and this is a real safety issue. Compounded semaglutide is not an FDA-approved product, so it carries no FDA-approved dosing schedule and has not been reviewed by FDA for safety, effectiveness, or quality. FDA has stated it received multiple reports of adverse events, some requiring hospitalization, that may be related to dosing errors with compounded injectable semaglutide, including patients measuring incorrect doses and clinicians miscalculating doses. FDA has also flagged reports of patients being prescribed compounded semaglutide at doses beyond the approved label, or titrated faster than the label allows. Compounded products are frequently dosed in units or milliliters rather than milligrams, which is where the arithmetic goes wrong.',
  },
  {
    question: 'Can Ozempic be prescribed for weight loss?',
    answer:
      'Ozempic is FDA-approved for type 2 diabetes, for cardiovascular risk reduction in adults with type 2 diabetes and established cardiovascular disease, and for kidney outcomes in adults with type 2 diabetes and chronic kidney disease. It is not approved for weight management. A clinician can legally prescribe an approved drug off-label, and prescribing Ozempic for weight loss is off-label prescribing. Wegovy is the semaglutide product FDA approved for chronic weight management. Off-label use is a decision between a patient and a licensed prescriber, and insurers often treat it differently for coverage.',
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

export default function SemaglutideDosingGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Semaglutide Dosing: Ozempic, Wegovy and Rybelsus Label Schedules',
    description:
      'The FDA label titration schedules for every semaglutide product: Ozempic injection, Wegovy injection and tablets, Rybelsus, and Ozempic tablets. What each label specifies, why the schedules differ, and what compounded semaglutide does not have.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Semaglutide',
      activeIngredient: 'semaglutide',
      drugClass: 'Glucagon-like peptide-1 (GLP-1) receptor agonist',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-03',
    dateModified: '2026-08-03',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'OZEMPIC (semaglutide) injection, solution - FDA prescribing information (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79',
      },
      {
        '@type': 'CreativeWork',
        name: 'WEGOVY (semaglutide) injection and tablets - FDA prescribing information (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b',
      },
      {
        '@type': 'CreativeWork',
        name: 'RYBELSUS and OZEMPIC (oral semaglutide) tablets - FDA prescribing information (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA - concerns with unapproved GLP-1 drugs used for weight loss, including dosing errors with compounded semaglutide',
        url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
      },
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk - Ozempic full prescribing information (PDF)',
        url: 'https://www.novo-pi.com/ozempic.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk - Wegovy full prescribing information (PDF)',
        url: 'https://www.novo-pi.com/wegovy.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk - Rybelsus full prescribing information (PDF)',
        url: 'https://www.novo-pi.com/rybelsus.pdf',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Semaglutide Dosing Guide', item: URL },
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
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Semaglutide Dosing Guide</span>
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
                Medication Reference
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Semaglutide Dosing: Ozempic, Wegovy and Rybelsus Label Schedules
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Same molecule, four approved products, four different dosing charts. Here is exactly
              what each FDA label specifies, side by side, with nothing invented and nothing blurred.
            </p>

            {/* Direct-answer lead: self-contained summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Semaglutide has no single dose schedule. Per the FDA labels:{' '}
                <strong>Ozempic</strong> injection starts at <strong>0.25 mg once weekly</strong> and
                steps to 0.5, 1, or 2 mg. <strong>Wegovy</strong> injection climbs 0.25 to 0.5 to 1 to
                1.7 mg over 16 weeks, then maintains at <strong>2.4 mg weekly</strong>.{' '}
                <strong>Rybelsus</strong> tablets run <strong>3 mg to 7 mg to 14 mg daily</strong>.
                Every step is at least 4 weeks apart and set by a licensed prescriber. This is
                educational reporting of label content, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 &bull; 13 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer: what each product is approved for</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Ozempic (injection)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Type 2 diabetes</li>
                  <li>&bull; Once weekly</li>
                  <li>&bull; 0.25 &rarr; 0.5 &rarr; 1 &rarr; 2 mg</li>
                  <li>&bull; Not approved for weight loss</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Wegovy (injection)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Chronic weight management</li>
                  <li>&bull; CV risk reduction</li>
                  <li>&bull; Once weekly</li>
                  <li>&bull; 0.25 &rarr; 2.4 mg over 16 weeks</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-2">Rybelsus (tablet)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Type 2 diabetes</li>
                  <li>&bull; Once daily, oral</li>
                  <li>&bull; 3 &rarr; 7 &rarr; 14 mg</li>
                  <li>&bull; Not approved for weight loss</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Semaglutide is also approved as Wegovy tablets (weight management and CV risk reduction)
              and as Ozempic tablets (type 2 diabetes). Both are covered below.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">What the labels agree on:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; Start low, step up on a schedule</li>
                  <li>&bull; At least 4 weeks (or 30 days) per step</li>
                  <li>&bull; Escalation exists to blunt GI adverse reactions</li>
                  <li>&bull; The same boxed thyroid C-cell tumor warning</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Where they differ:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; The indication each is approved for</li>
                  <li>&bull; The ceiling dose (2 mg vs 2.4 mg vs 7.2 mg)</li>
                  <li>&bull; Weekly injection vs daily tablet</li>
                  <li>&bull; Tablets require an empty stomach and a 30-minute wait</li>
                  <li>&bull; Only the Wegovy label directs delaying a step if a dose is not tolerated</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#chart" className="text-blue-600 hover:underline">1. The semaglutide dosage chart, all products</a></li>
              <li><a href="#ozempic" className="text-blue-600 hover:underline">2. Ozempic dosing (type 2 diabetes)</a></li>
              <li><a href="#wegovy" className="text-blue-600 hover:underline">3. Wegovy dose schedule (weight management)</a></li>
              <li><a href="#rybelsus" className="text-blue-600 hover:underline">4. Rybelsus dosing and the oral tablets</a></li>
              <li><a href="#why-titrate" className="text-blue-600 hover:underline">5. Why every label titrates instead of starting high</a></li>
              <li><a href="#missed" className="text-blue-600 hover:underline">6. What the labels say about missed doses</a></li>
              <li><a href="#off-label" className="text-blue-600 hover:underline">7. Off-label use: Ozempic and Rybelsus for weight loss</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">8. Compounded semaglutide has no approved dose</a></li>
              <li><a href="#prescriber" className="text-blue-600 hover:underline">9. What the prescriber decides, not the chart</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Most semaglutide dosing content on the internet quietly merges three different drugs into
              one chart. That is the mistake worth avoiding, because the products are not
              interchangeable and their labels are not the same document. Ozempic, Wegovy, and
              Rybelsus contain the same active ingredient, and that is where the similarity stops. They
              have different approved uses, different escalation schedules, different ceilings, and in
              two cases a different route of administration entirely. Below is what each FDA-approved
              label actually specifies, reported as-is.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>How to read this page.</strong> Everything below is a report of what the FDA
                prescribing information specifies. It is not a protocol, not a recommendation, and not
                a starting point for self-treatment. Semaglutide is a prescription medication.
                Selecting a product, a starting dose, an escalation pace, and a maintenance dose is a
                clinical decision made by a licensed prescriber who knows your history.
              </p>
            </div>

            <h2 id="chart" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Semaglutide Dosage Chart, All Products</h2>

            <p className="text-gray-700 mb-4">
              This is the whole semaglutide family in one view. Each row reflects that product&apos;s
              own FDA label. Note that two products in this table are approved only for type 2
              diabetes, and two are approved for chronic weight management.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Form &amp; frequency</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA-approved use</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labeled dose steps</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic injection</td>
                    <td className="border border-gray-300 px-4 py-3">Subcutaneous, once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">Type 2 diabetes; CV risk reduction and kidney outcomes in T2D</td>
                    <td className="border border-gray-300 px-4 py-3">0.25 &rarr; 0.5 &rarr; 1 &rarr; 2 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy injection</td>
                    <td className="border border-gray-300 px-4 py-3">Subcutaneous, once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">Chronic weight management; CV risk reduction; noncirrhotic MASH with F2-F3 fibrosis</td>
                    <td className="border border-gray-300 px-4 py-3">0.25 &rarr; 0.5 &rarr; 1 &rarr; 1.7 &rarr; 2.4 mg (max 7.2 mg for weight reduction in adults)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Oral, once daily</td>
                    <td className="border border-gray-300 px-4 py-3">Chronic weight management; CV risk reduction</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 &rarr; 4 &rarr; 9 &rarr; 25 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rybelsus tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Oral, once daily</td>
                    <td className="border border-gray-300 px-4 py-3">Type 2 diabetes; CV risk reduction in high-risk T2D</td>
                    <td className="border border-gray-300 px-4 py-3">3 &rarr; 7 &rarr; 14 mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Oral, once daily</td>
                    <td className="border border-gray-300 px-4 py-3">Type 2 diabetes; CV risk reduction in high-risk T2D</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 &rarr; 4 &rarr; 9 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The detail almost everyone gets wrong:</strong> Rybelsus and Ozempic tablets are
                both oral semaglutide, and their shared FDA label states in the first line of the
                dosing section that the two are <strong>not substitutable on a milligram-to-milligram
                basis</strong>. A 7 mg Rybelsus tablet and a 4 mg Ozempic tablet are not the same
                thing written two ways. That is exactly the kind of assumption that makes
                dose-conversion guesswork dangerous.
              </p>
            </div>

            <h2 id="ozempic" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ozempic Dosing (Type 2 Diabetes)</h2>

            <p className="text-gray-700 mb-4">
              Ozempic is semaglutide injection approved as an adjunct to diet and exercise to improve
              glycemic control in adults with type 2 diabetes, to reduce the risk of major adverse
              cardiovascular events in adults with type 2 diabetes and established cardiovascular
              disease, and to reduce the risk of sustained eGFR decline, end-stage kidney disease, and
              cardiovascular death in adults with type 2 diabetes and chronic kidney disease. It is not
              approved for weight management.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stage</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the label specifies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Weeks 1-4 (initiation)</td>
                    <td className="border border-gray-300 px-4 py-3">0.25 mg once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">Initiation dosage for 4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Week 5 onward</td>
                    <td className="border border-gray-300 px-4 py-3">0.5 mg once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">Increase after 4 weeks on 0.25 mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Optional step</td>
                    <td className="border border-gray-300 px-4 py-3">1 mg once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">If additional glycemic control is needed after at least 4 weeks on 0.5 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Optional step</td>
                    <td className="border border-gray-300 px-4 py-3">2 mg once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">If additional glycemic control is needed after at least 4 weeks on 1 mg. Maximum recommended dosage.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">T2D with chronic kidney disease</td>
                    <td className="border border-gray-300 px-4 py-3">1 mg once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">Label directs increasing to the 1 mg maintenance dosage after at least 4 weeks on 0.5 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Administration details from the label: inject once weekly on the same day each week, at
              any time of day, with or without meals, subcutaneously in the abdomen, thigh, or upper
              arm. The day of the week can be changed as long as at least 48 hours separate two doses.
              The label states no dose adjustment is recommended for renal impairment or for hepatic
              impairment.
            </p>

            <p className="text-gray-700 mb-4">
              If you are pricing a semaglutide program rather than reading its label, our{' '}
              <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">verified semaglutide cost guide</Link>{' '}
              collects real published monthly prices from clinics, and{' '}
              <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives</Link>{' '}
              covers what else is on the market.
            </p>

            <h2 id="wegovy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wegovy Dose Schedule (Chronic Weight Management)</h2>

            <p className="text-gray-700 mb-4">
              Wegovy injection is the semaglutide product approved for weight-related use. Its label
              covers reducing the risk of major adverse cardiovascular events in adults with
              established cardiovascular disease and either obesity or overweight; reducing excess body
              weight and maintaining weight reduction long term in adults and pediatric patients aged
              12 and older with obesity, and in adults with overweight plus at least one weight-related
              comorbid condition; and treatment of noncirrhotic MASH with moderate to advanced liver
              fibrosis in adults under accelerated approval. All uses are in combination with a reduced
              calorie diet and increased physical activity.
            </p>

            <p className="text-gray-700 mb-4">
              Wegovy has the longest labeled titration of any semaglutide product. The escalation is
              identical across all approved indications; only the maintenance dose differs.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Weeks</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Once-weekly subcutaneous dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Phase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 through 4</td>
                    <td className="border border-gray-300 px-4 py-3">0.25 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Starting dosage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">5 through 8</td>
                    <td className="border border-gray-300 px-4 py-3">0.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Escalation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">9 through 12</td>
                    <td className="border border-gray-300 px-4 py-3">1 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Escalation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">13 through 16</td>
                    <td className="border border-gray-300 px-4 py-3">1.7 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Escalation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">17 and onward</td>
                    <td className="border border-gray-300 px-4 py-3">Maintenance (see below)</td>
                    <td className="border border-gray-300 px-4 py-3">Maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The label sets maintenance by indication. For <strong>weight reduction in adults</strong>,
              maintenance is 1.7 mg or 2.4 mg once weekly, with 2.4 mg recommended; for patients who
              tolerate 2.4 mg for at least 4 weeks and for whom additional weight reduction is
              clinically indicated, the dosage may be increased to a maximum of 7.2 mg once weekly. For{' '}
              <strong>cardiovascular risk reduction in adults</strong>, maintenance is 2.4 mg
              (recommended) or 1.7 mg. For <strong>weight reduction in patients aged 12 and older</strong>,
              maintenance is 2.4 mg (recommended) or 1.7 mg. For <strong>noncirrhotic MASH</strong>,
              maintenance is 2.4 mg, and the label allows decreasing to 1.7 mg if 2.4 mg is not
              tolerated, with reescalation considered later.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The escalation is allowed to slow down</h4>
              <p className="text-gray-700">
                The Wegovy label states directly that if a patient does not tolerate a dose during
                escalation, the prescriber should consider delaying escalation for 4 weeks. The
                schedule is a maximum pace, not a mandatory one. Nothing in the label instructs a
                patient to push through a dose they cannot tolerate.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Wegovy tablets: the oral weight-management schedule</h3>

            <p className="text-gray-700 mb-4">
              Semaglutide is also approved as Wegovy tablets for cardiovascular risk reduction and
              weight reduction in adults. The tablet titration runs on 30-day steps rather than 4-week
              blocks.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Days</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Once-daily oral dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Phase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 through 30</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Starting dosage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">31 through 60</td>
                    <td className="border border-gray-300 px-4 py-3">4 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Escalation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">61 through 90</td>
                    <td className="border border-gray-300 px-4 py-3">9 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Escalation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">91 and onward</td>
                    <td className="border border-gray-300 px-4 py-3">25 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The tablet has strict administration rules that the injection does not. Take it orally
              once daily on an empty stomach in the morning with water, up to 4 ounces and no other
              liquid. Swallow whole; do not split, crush, chew, or dissolve. Wait at least 30 minutes
              before eating, drinking anything else, or taking other oral medications. Those rules are
              not fussiness. Oral semaglutide absorption depends on them.
            </p>

            <p className="text-gray-700 mb-4">
              The Wegovy label also contains explicit instructions for switching between the injection
              and the tablet, in both directions, at specified doses. That is a same-brand,
              same-molecule switch written into a single label. It is not a template for converting
              between different drugs, and it is a prescriber&apos;s decision. If you are weighing an
              oral option, our{' '}
              <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link>{' '}
              covers what oral GLP-1 medications exist and how they differ from injections.
            </p>

            <h2 id="rybelsus" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Rybelsus Dosing and the Oral Diabetes Tablets</h2>

            <p className="text-gray-700 mb-4">
              Rybelsus is oral semaglutide approved as an adjunct to diet and exercise to improve
              glycemic control in adults with type 2 diabetes, and to reduce the risk of major adverse
              cardiovascular events in adults with type 2 diabetes who are at high risk for those
              events. It is not approved for weight management.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Days</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rybelsus (once daily)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ozempic tablets (once daily)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 through 30 (initiation)</td>
                    <td className="border border-gray-300 px-4 py-3">3 mg</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">31 through 60</td>
                    <td className="border border-gray-300 px-4 py-3">7 mg</td>
                    <td className="border border-gray-300 px-4 py-3">4 mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">61 onward (maintenance)</td>
                    <td className="border border-gray-300 px-4 py-3">7 mg, or 14 mg if additional glycemic control is needed</td>
                    <td className="border border-gray-300 px-4 py-3">4 mg, or 9 mg if additional glycemic control is needed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              One line in this label deserves emphasis because it is unusual and it is easy to
              misunderstand. For both products, the label states that the 30-day initiation dose{' '}
              <strong>is not effective for glycemic control</strong>. It exists to let the
              gastrointestinal tract adapt. A patient a week into Rybelsus 3 mg whose glucose has not
              moved is seeing exactly what the label predicts.
            </p>

            <p className="text-gray-700 mb-4">
              Administration matches the Wegovy tablet rules: empty stomach, morning, water only, up to
              4 ounces, swallow whole, wait at least 30 minutes before food, other beverages, or other
              oral medications. The label also states the two oral products are not substitutable on a
              milligram-to-milligram basis and gives specific instructions for switching between them
              after the initiation phase.
            </p>

            <h2 id="why-titrate" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Every Label Titrates Instead of Starting High</h2>

            <p className="text-gray-700 mb-4">
              Every semaglutide label gives the same reason for the escalation schedule: to reduce the
              risk of gastrointestinal adverse reactions. That is stated explicitly in the dosing
              section of each product, cross-referenced to the warnings on severe gastrointestinal
              adverse reactions.
            </p>

            <p className="text-gray-700 mb-4">
              The most common adverse reactions reported in the labels reflect that. For Ozempic, the
              label lists nausea, vomiting, diarrhea, abdominal pain, and constipation as occurring in
              at least 5% of treated patients. For Rybelsus and Ozempic tablets, the label lists
              nausea, abdominal pain, diarrhea, decreased appetite, vomiting, and constipation at that
              same threshold. Wegovy&apos;s list at 5% or greater incidence is longer and includes
              nausea, diarrhea, vomiting, constipation, abdominal pain, headache, fatigue, dyspepsia,
              dizziness, abdominal distension, eructation, flatulence, gastroesophageal reflux disease,
              and hair loss.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Every semaglutide product carries a boxed warning</h4>
              <p className="text-gray-700 text-sm">
                All semaglutide products carry a boxed warning for risk of thyroid C-cell tumors. In
                rodents, semaglutide causes dose-dependent and treatment-duration-dependent thyroid
                C-cell tumors at clinically relevant exposures; whether it causes such tumors including
                medullary thyroid carcinoma in humans has not been determined. The labels contraindicate
                use in patients with a personal or family history of medullary thyroid carcinoma or with
                Multiple Endocrine Neoplasia syndrome type 2, and in patients with a serious
                hypersensitivity reaction to semaglutide. Read the full label with your prescriber.
              </p>
            </div>

            <h2 id="missed" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Labels Say About Missed Doses</h2>

            <p className="text-gray-700 mb-4">
              The missed-dose instructions are product-specific, and this is another place where
              merging the products into one rule goes wrong.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Ozempic injection.</strong> If a dose is missed, the label says to administer it as soon as possible within 5 days after the missed dose. If more than 5 days have passed, skip it and resume the regular weekly schedule.</li>
              <li><strong>Wegovy injection.</strong> If one dose is missed and the next scheduled dose is more than 2 days away, administer as soon as possible; if it is less than 2 days away, skip it and resume on schedule. If 2 or more consecutive doses are missed, the label directs reinitiating dosage escalation at a lower dosage.</li>
              <li><strong>Wegovy tablets, Rybelsus, Ozempic tablets.</strong> If a dose is missed, skip it and take the next dose the following day. The labels also state not to take more than one tablet per day.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Report a missed dose to your prescriber rather than improvising, especially the
              Wegovy case where the label contemplates restarting escalation.
            </p>

            <h2 id="off-label" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Off-Label Use: Ozempic and Rybelsus for Weight Loss</h2>

            <p className="text-gray-700 mb-4">
              This distinction is regularly blurred in marketing, so here it is plainly. Ozempic and
              Rybelsus are approved for type 2 diabetes. Wegovy is approved for chronic weight
              management. When a clinician prescribes Ozempic or Rybelsus for weight loss, that is{' '}
              <strong>off-label prescribing</strong>. Off-label prescribing is legal and common in US
              medicine, and it is a decision made by a licensed prescriber. It is not the same as FDA
              approval for that use, and a page that presents Ozempic as an approved weight-loss drug
              is telling you something false.
            </p>

            <p className="text-gray-700 mb-4">
              The same distinction runs through the tirzepatide products. Mounjaro is approved for type
              2 diabetes; Zepbound is approved for chronic weight management and for obstructive sleep
              apnea in adults with obesity. Our{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
              runs the same label-by-label breakdown for those, and{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide</Link>{' '}
              compares the two molecules directly. For the full field, see the{' '}
              <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>.
            </p>

            <p className="text-gray-700 mb-4">
              Coverage follows the indication more often than people expect. A plan that covers Ozempic
              for a diabetes diagnosis may decline it when the stated purpose is weight loss, which is
              one reason the cash-pay market for these drugs exists at all. Our{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance</Link>{' '}
              guide covers the price side of that gap.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Compounded Semaglutide Has No FDA-Approved Dose</h2>

            <p className="text-gray-700 mb-4">
              Compounded semaglutide is not an FDA-approved drug. FDA does not review compounded
              products for safety, effectiveness, or quality before they are marketed, and there is no
              FDA-approved dosing schedule for a compounded product. Every dosing chart on this page
              describes an approved product. None of it transfers to a compounded vial.
            </p>

            <p className="text-gray-700 mb-4">
              FDA has been specific about what goes wrong. The agency has stated it received multiple
              reports of adverse events, some requiring hospitalization, that may be related to dosing
              errors with compounded injectable semaglutide products, resulting from patients measuring
              and self-administering incorrect doses and from health care professionals miscalculating
              doses. FDA has also reported adverse events that may relate to patients being prescribed
              compounded semaglutide or tirzepatide at doses beyond the approved label, taking doses
              more frequently, or escalating faster than the approved titration schedule. Reported
              symptoms included nausea, vomiting, diarrhea, abdominal pain, and constipation, with some
              patients seeking medical attention.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Where the arithmetic breaks</h4>
              <p className="text-gray-700 text-sm">
                Approved semaglutide pens deliver a fixed dose per injection. Compounded semaglutide is
                often supplied as a multi-dose vial with a syringe, and instructions may be written in
                units or milliliters rather than milligrams. Converting between those requires knowing
                the concentration of that specific vial. FDA has also warned about semaglutide salt
                forms, such as semaglutide sodium and semaglutide acetate, which are different active
                ingredients than the one in the approved drugs and which FDA has said it is not aware of
                any lawful basis to use in compounding.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              If you are considering a compounded product for cost reasons, read our{' '}
              <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
              first, and compare against the brand pricing in the{' '}
              <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link>{' '}
              and{' '}
              <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link>.
            </p>

            <h2 id="prescriber" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Prescriber Decides, Not the Chart</h2>

            <p className="text-gray-700 mb-4">
              A label schedule is a framework. The clinical decisions inside it belong to a licensed
              prescriber who can see your history, your other medications, and how you actually
              respond. Those decisions include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Which product, if any.</strong> The indication drives this, and so does whether you can tolerate a daily empty-stomach tablet routine versus a weekly injection.</li>
              <li><strong>Whether to escalate on schedule.</strong> Both the Wegovy and Ozempic labels frame escalation as conditional, and Wegovy explicitly contemplates delaying a step by 4 weeks.</li>
              <li><strong>Which maintenance dose to hold at.</strong> Wegovy&apos;s label names both 1.7 mg and 2.4 mg as maintenance options for weight reduction in adults, with tolerability as a stated consideration.</li>
              <li><strong>Whether to stop or step down.</strong> The MASH section of the Wegovy label describes decreasing to 1.7 mg and considering reescalation later. Stepping down is a labeled clinical option, not a failure.</li>
              <li><strong>Interactions and monitoring.</strong> The labels flag monitoring blood glucose in patients with diabetes and warn about hypoglycemia with concomitant insulin or insulin secretagogues. The Wegovy label also states that using it with other semaglutide-containing products or any other GLP-1 receptor agonist is not recommended.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              That last point is worth repeating because stacking is a real pattern in the cash-pay
              market. The Wegovy label states directly that concomitant use with other
              semaglutide-containing products or with any other GLP-1 receptor agonist is not
              recommended.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related reading</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Side effects by product:</strong> <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic side effects</Link> and <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects</Link></li>
              <li><strong>Product comparison:</strong> <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic</Link>, the same molecule at different approved doses and indications</li>
              <li><strong>Programs:</strong> <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">best GLP-1 weight-loss programs</Link> compares the clinical wrap around the prescription</li>
              <li><strong>Find a clinic:</strong> browse <Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinics by state</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Programs and Prices</h3>
            <p className="mb-6 text-blue-100">
              Verified cash-pay pricing, program inclusions, and clinic options in one place.
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
            <h3 className="font-semibold text-gray-800 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for educational purposes only and is not medical advice. It reports dosing
              schedules published in FDA-approved prescribing information so that patients can read the
              same source their clinician does. It is not a treatment protocol, and it does not
              recommend starting, stopping, changing, combining, or converting any dose of any
              medication. Semaglutide is a prescription medication with a boxed warning and
              contraindications. Only a licensed clinician who knows your medical history can determine
              whether any semaglutide product is appropriate for you and at what dose. Labels are
              updated; confirm current prescribing information with your clinician or pharmacist.
              VitalityScout is not affiliated with Novo Nordisk. If you experience severe or persistent
              symptoms, contact a healthcare provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                &bull;{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  OZEMPIC (semaglutide) injection prescribing information
                </a>{' '}
                (DailyMed, Novo Nordisk) &mdash; indications, dosage and administration, missed dose, adverse reactions, boxed warning
              </li>
              <li>
                &bull;{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  WEGOVY (semaglutide) injection and tablets prescribing information
                </a>{' '}
                (DailyMed, Novo Nordisk) &mdash; escalation Table 1 and Table 2, maintenance by indication, switching, missed dose
              </li>
              <li>
                &bull;{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  RYBELSUS and OZEMPIC (oral semaglutide) tablets prescribing information
                </a>{' '}
                (DailyMed, Novo Nordisk) &mdash; oral titration, non-substitutability, administration instructions
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  FDA: concerns with unapproved GLP-1 drugs used for weight loss
                </a>{' '}
                &mdash; dosing errors with compounded semaglutide, salt forms, fraudulent products
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.novo-pi.com/ozempic.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ozempic full prescribing information (PDF)</a>,{' '}
                <a href="https://www.novo-pi.com/wegovy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wegovy (PDF)</a>,{' '}
                <a href="https://www.novo-pi.com/rybelsus.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Rybelsus (PDF)</a>{' '}
                &mdash; manufacturer-hosted full prescribing information
              </li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the GLP-1 Label Cheat Sheet"
            description="Every approved semaglutide and tirzepatide product, its indication, and its label titration on one page."
            source="guide_semaglutide_dosing_guide"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
