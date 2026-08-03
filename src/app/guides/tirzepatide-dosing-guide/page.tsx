import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/tirzepatide-dosing-guide';

export const metadata: Metadata = {
  title: { absolute: 'Tirzepatide Dosing: FDA Label Schedule for Zepbound & Mounjaro' },
  alternates: { canonical: URL },
  description:
    'FDA labels start tirzepatide at 2.5 mg weekly, then 5 mg after 4 weeks and 2.5 mg steps. Zepbound and Mounjaro schedules, missed-dose rule, vials vs pens.',
};

// Every answer below is reporting of what the FDA-approved prescribing information
// states. Nothing here instructs a reader to start, stop, or change a dose. Each
// answer ends with the prescriber hedge. The visible FAQ block mirrors this exactly.
const FAQ_ITEMS = [
  {
    question: 'What is the tirzepatide dosing schedule?',
    answer:
      'Both FDA-approved tirzepatide products start at the same place, and each label words the start slightly differently. The Zepbound label specifies a starting dosage of 2.5 mg injected subcutaneously once weekly for 4 weeks, and states that the 2.5 mg dosage is for treatment initiation and is not approved as a maintenance dosage. The Mounjaro label specifies a starting dosage of 2.5 mg injected subcutaneously once weekly, states that the 2.5 mg dosage is for treatment initiation and is not intended for glycemic control, and directs an increase to 5 mg once weekly after 4 weeks. On both labels, further increases are described in 2.5 mg increments after at least 4 weeks on the current dose. That produces the label ladder of 2.5, 5, 7.5, 10, 12.5, and 15 mg once weekly. This is a description of the label, not a dosing instruction. Your prescriber determines whether tirzepatide is appropriate for you and what dose you take.',
  },
  {
    question: 'How does tirzepatide dose escalation work?',
    answer:
      'The Zepbound label states the dosage may be increased in 2.5 mg increments after at least 4 weeks on the current dose, and it gives the reason directly: the escalation schedule exists to reduce the risk of gastrointestinal adverse reactions. The label also says to consider treatment response and tolerability when selecting the maintenance dosage, and that if a patient does not tolerate a maintenance dosage, a lower maintenance dosage can be considered. The Mounjaro label uses the same 4-week minimum interval and the same 2.5 mg step size, with increases tied to whether additional glycemic control is needed. Escalation timing and any dose change are clinical decisions made by a licensed prescriber.',
  },
  {
    question: 'What is the maximum dose of tirzepatide?',
    answer:
      'For Zepbound, the label states the maximum dosage for all indications is 15 mg injected subcutaneously once weekly. For Mounjaro, the label states the maximum dosage is 15 mg once weekly in adults and 10 mg once weekly in pediatric patients 10 years of age and older. The Zepbound label additionally carries a Limitation of Use stating that coadministration with other tirzepatide-containing products or with any GLP-1 receptor agonist is not recommended. The Mounjaro label does not carry that limitation. Reaching a maximum dose is not a goal in itself; the label frames maintenance dosage as a response-and-tolerability decision for the prescriber.',
  },
  {
    question: 'What is the Zepbound dosage for weight loss?',
    answer:
      'Zepbound is the tirzepatide product FDA-approved for chronic weight management and for moderate to severe obstructive sleep apnea in adults with obesity, used with a reduced-calorie diet and increased physical activity. The label specifies a 2.5 mg once-weekly start for 4 weeks, then escalation in 2.5 mg steps at intervals of at least 4 weeks. For weight reduction and long-term maintenance, the label lists recommended maintenance dosages of 5 mg, 10 mg, or 15 mg once weekly. For obstructive sleep apnea, the label lists maintenance dosages of 10 mg or 15 mg once weekly. Note that 7.5 mg and 12.5 mg are titration steps on the label rather than listed maintenance dosages. Your prescriber decides which maintenance dose applies to you.',
  },
  {
    question: 'What is the Mounjaro dosage for weight loss?',
    answer:
      'Mounjaro is FDA-approved only as an adjunct to diet and exercise to improve glycemic control in adults and pediatric patients 10 years and older with type 2 diabetes. It is not FDA-approved for weight loss, and its label contains no weight-management dosing schedule. Prescribing Mounjaro for weight loss is off-label prescribing, which is legal for a licensed clinician but means the dosing is not label-directed for that use. The Mounjaro label schedule is 2.5 mg once weekly to start, 5 mg after 4 weeks, then 2.5 mg increments after at least 4 weeks if additional glycemic control is needed, to a maximum of 15 mg weekly in adults. Zepbound is the tirzepatide product carrying the FDA weight-management indication.',
  },
  {
    question: 'What happens if you miss a dose of tirzepatide?',
    answer:
      'The Zepbound and Mounjaro labels give the same missed-dose rule. If a dose is missed, the label instructs that it be administered as soon as possible within 4 days (96 hours) after the missed dose. If more than 4 days have passed, the label says to skip the missed dose and administer the next dose on the regularly scheduled day, then resume the regular once-weekly schedule. The labels also state the day of weekly administration can be changed if necessary, as long as at least 3 days (72 hours) separate two doses. The labels do not describe doubling up to make up a missed dose. Contact your prescriber or pharmacist about your own missed dose.',
  },
  {
    question: 'Is compounded tirzepatide dosed the same as Zepbound?',
    answer:
      'No, and the difference matters. Compounded tirzepatide is not an FDA-approved product. It has not been reviewed by the FDA for safety, effectiveness, or quality, and it does not carry the FDA-approved prescribing information that specifies the 2.5 mg start and the 2.5 mg escalation steps. The FDA has warned about dosing errors with compounded GLP-1 products, describing adverse-event reports, some requiring hospitalization, that may relate to patients measuring and self-administering incorrect doses and to health care professionals miscalculating doses. The agency has also reported adverse events that may relate to compounded products prescribed in doses beyond the FDA-approved label, including more product per dose, more frequent doses, or faster titration. As of May 31, 2026 the FDA states it had received more than 730 adverse-event reports associated with compounded tirzepatide. Discuss any compounded product with a licensed clinician and pharmacist.',
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

export default function TirzepatideDosingGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tirzepatide Dosing: The FDA Label Schedules Explained',
    description:
      'What the FDA-approved labels for Zepbound and Mounjaro specify about tirzepatide dosing: the 2.5 mg start, the 4-week 2.5 mg escalation steps, maintenance ranges, the missed-dose rule, and the vial, pen, and KwikPen presentations.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Tirzepatide',
      alternateName: ['Zepbound', 'Mounjaro'],
      activeIngredient: 'tirzepatide',
      administrationRoute: 'Subcutaneous',
      drugClass: 'GIP receptor and GLP-1 receptor agonist',
      prescriptionStatus: 'PrescriptionOnly',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-03',
    dateModified: '2026-08-03',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'ZEPBOUND (tirzepatide) injection — FDA-approved prescribing information, DailyMed (current label)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b',
      },
      {
        '@type': 'CreativeWork',
        name: 'MOUNJARO (tirzepatide) injection — FDA-approved prescribing information, DailyMed (current label)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — ZEPBOUND prescribing information at original approval (NDA 217806)',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — MOUNJARO prescribing information at original approval (NDA 215866)',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA: Concerns with Unapproved GLP-1 Drugs Used for Weight Loss',
        url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
      },
      { '@type': 'CreativeWork', name: 'Zepbound — official product site (Eli Lilly and Company)', url: 'https://zepbound.lilly.com/' },
      { '@type': 'CreativeWork', name: 'Mounjaro — official product site (Eli Lilly and Company)', url: 'https://www.mounjaro.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Tirzepatide Dosing Guide', item: URL },
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
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Tirzepatide Dosing</span>
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
                Medication Education
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tirzepatide Dosing: The FDA Label Schedules Explained
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Zepbound and Mounjaro are the same molecule with two different FDA indications and two
              different label schedules. Here is exactly what each prescribing information document
              specifies, reported as written.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                The FDA labels for <strong>Zepbound</strong> and <strong>Mounjaro</strong> both specify
                a starting dosage of <strong>2.5 mg injected subcutaneously once weekly</strong>, which
                each label describes as treatment initiation. Both then describe an increase to{' '}
                <strong>5 mg</strong> weekly after 4 weeks, and further increases in{' '}
                <strong>2.5 mg increments after at least 4 weeks</strong> on the current dose, to a
                maximum of <strong>15 mg</strong> weekly in adults. This page reports the label. It is
                not medical advice, and your prescriber determines your dose.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: August 2026 &bull; 13 min read &bull; Sources: FDA-approved prescribing information
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Two tirzepatide products, two labels</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Zepbound (tirzepatide)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; FDA-approved for chronic weight management</li>
                  <li>&bull; Also approved for moderate to severe obstructive sleep apnea in adults with obesity</li>
                  <li>&bull; Start 2.5 mg weekly &times; 4 weeks</li>
                  <li>&bull; Maintenance listed: 5, 10, or 15 mg weekly</li>
                  <li>&bull; Maximum: 15 mg weekly</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Mounjaro (tirzepatide)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; FDA-approved for type 2 diabetes only</li>
                  <li>&bull; Not FDA-approved for weight loss</li>
                  <li>&bull; Start 2.5 mg weekly; 5 mg after 4 weeks</li>
                  <li>&bull; Steps of 2.5 mg if more glycemic control is needed</li>
                  <li>&bull; Maximum: 15 mg weekly (adults), 10 mg (ages 10+)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standing compliance frame */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">How to read this page</h3>
            <p className="text-sm text-gray-700">
              Everything below is a report of what the FDA-approved prescribing information states. It
              is education, not a protocol. Tirzepatide is a prescription medication with
              contraindications, warnings, and drug interactions, and the dose, the escalation timing,
              and whether the drug is appropriate at all are decisions for a licensed prescriber who
              knows your history. Nothing here tells you to start, stop, raise, lower, split, or
              convert a dose.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What tirzepatide is, and why there are two labels</a></li>
              <li><a href="#zepbound-dosage" className="text-blue-600 hover:underline">2. Zepbound dosage: the FDA label titration schedule</a></li>
              <li><a href="#mounjaro-dosage" className="text-blue-600 hover:underline">3. Mounjaro dosage: the FDA label titration schedule</a></li>
              <li><a href="#why-titration" className="text-blue-600 hover:underline">4. Why tirzepatide dose escalation exists</a></li>
              <li><a href="#missed-dose" className="text-blue-600 hover:underline">5. The label&apos;s missed-dose rule</a></li>
              <li><a href="#presentations" className="text-blue-600 hover:underline">6. Vials, single-dose pens, and KwikPens</a></li>
              <li><a href="#prescribers-consider" className="text-blue-600 hover:underline">7. What prescribers consider when choosing a maintenance dose</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">8. Compounded tirzepatide and dosing errors</a></li>
              <li><a href="#cost-by-dose" className="text-blue-600 hover:underline">9. What dose has to do with cost</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Almost every question people type about tirzepatide dosing has a published answer, and it
              is published in the same place for both products: the FDA-approved prescribing
              information. The schedule is not a secret, it is not a clinic&apos;s proprietary protocol,
              and it does not vary by telehealth brand. What varies is which product you were
              prescribed, which indication it carries, and what your clinician decides about your
              response and tolerability. This guide reports the label, line by line.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Tirzepatide Is, and Why There Are Two Labels
            </h2>

            <p className="text-gray-700 mb-4">
              Tirzepatide is a once-weekly subcutaneous injection described on its label as a
              glucose-dependent insulinotropic polypeptide (GIP) receptor and glucagon-like peptide-1
              (GLP-1) receptor agonist. That dual-receptor description is the mechanistic difference
              between tirzepatide and the single-receptor GLP-1 agonists such as semaglutide. If you
              are comparing the two molecules rather than the dosing, our{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide comparison</Link>{' '}
              covers the differences, and the{' '}
              <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">full list of GLP-1 medications</Link>{' '}
              maps which brand carries which indication.
            </p>

            <p className="text-gray-700 mb-4">
              Eli Lilly markets tirzepatide under two brand names with two separate FDA approvals and
              two separate prescribing information documents:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Zepbound</strong> is indicated, in combination with a reduced-calorie diet and
                increased physical activity, to reduce excess body weight and maintain weight reduction
                long term in adults with obesity or adults with overweight in the presence of at least
                one weight-related comorbid condition, and to treat moderate to severe obstructive
                sleep apnea in adults with obesity.
              </li>
              <li>
                <strong>Mounjaro</strong> is indicated as an adjunct to diet and exercise to improve
                glycemic control in adults and pediatric patients 10 years of age and older with type 2
                diabetes mellitus. It is <strong>not</strong> FDA-approved for weight management.
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this distinction matters for dosing:</strong> a clinician who prescribes
                Mounjaro for weight loss is prescribing off-label. Off-label prescribing is legal and
                common, but it means the dose is not being directed by a label written for that use.
                The Mounjaro label ties escalation to glycemic control; the Zepbound label ties it to
                weight reduction and long-term maintenance, and separately to obstructive sleep apnea.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The stacking question is answered on one of the two labels, not both. The Zepbound label
              carries a <strong>Limitation of Use</strong> in section 1: Zepbound contains tirzepatide,
              and coadministration with other tirzepatide-containing products or with any GLP-1
              receptor agonist is not recommended. The Mounjaro label has no Limitations of Use section
              and states no such restriction. Reporting that difference accurately matters, because the
              two products are the same molecule and it is easy to assume the limitation is shared.
              Whether combining any two prescription medications is appropriate is a question for the
              prescriber, on either product.
            </p>

            <h2 id="zepbound-dosage" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Zepbound Dosage: The FDA Label Titration Schedule
            </h2>

            <p className="text-gray-700 mb-4">
              The Zepbound prescribing information states that the recommended starting dosage{' '}
              <strong>for all indications</strong> is 2.5 mg injected subcutaneously once weekly for 4
              weeks, and that the 2.5 mg dosage is for treatment initiation and is not approved as a
              maintenance dosage. After 4 weeks, the label describes increasing the dosage to 5 mg once
              weekly, with further increases in 2.5 mg increments after at least 4 weeks on the current
              dose.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Label step</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dosage (once weekly, subcutaneous)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Minimum time before the next step</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Label status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Initiation</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Initiation only; not approved as maintenance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Step 1</td>
                    <td className="border border-gray-300 px-4 py-3">5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">At least 4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Listed maintenance dosage (weight reduction and long-term maintenance)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Step 2</td>
                    <td className="border border-gray-300 px-4 py-3">7.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">At least 4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Titration step</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Step 3</td>
                    <td className="border border-gray-300 px-4 py-3">10 mg</td>
                    <td className="border border-gray-300 px-4 py-3">At least 4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Listed maintenance dosage (both indications)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Step 4</td>
                    <td className="border border-gray-300 px-4 py-3">12.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">At least 4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Titration step</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Step 5</td>
                    <td className="border border-gray-300 px-4 py-3">15 mg</td>
                    <td className="border border-gray-300 px-4 py-3">Maximum</td>
                    <td className="border border-gray-300 px-4 py-3">Listed maintenance dosage; maximum for all indications</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The maintenance ranges are indication-specific, and this is the detail most summaries
              drop. For <strong>weight reduction and long-term maintenance</strong>, the Zepbound label
              lists a recommended maintenance dosage of <strong>5 mg, 10 mg, or 15 mg</strong> once
              weekly. For <strong>obstructive sleep apnea</strong>, it lists <strong>10 mg or 15
              mg</strong> once weekly. The 7.5 mg and 12.5 mg strengths exist on the label as rungs on
              the ladder, not as listed maintenance dosages.
            </p>

            <p className="text-gray-700 mb-4">
              The label attaches two judgment clauses to the schedule. First: consider treatment
              response and tolerability when selecting the maintenance dosage. Second: if patients do
              not tolerate a maintenance dosage, consider a lower maintenance dosage. The written
              schedule is a ceiling and a floor, not a conveyor belt. Whether you move up, stay, or
              step down is a prescriber decision.
            </p>

            <h2 id="mounjaro-dosage" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Mounjaro Dosage: The FDA Label Titration Schedule
            </h2>

            <p className="text-gray-700 mb-4">
              The Mounjaro label specifies the same starting point and the same step size, with the
              escalation trigger written in diabetes terms. The recommended starting dosage is 2.5 mg
              injected subcutaneously once weekly, and the label states that the 2.5 mg dosage is for
              treatment initiation and is not intended for glycemic control. After 4 weeks, the label
              describes increasing to 5 mg once weekly. If additional glycemic control is needed, the
              label describes increasing in 2.5 mg increments after at least 4 weeks on the current
              dose.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Label element</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the Mounjaro label states</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Starting dosage</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg subcutaneously once weekly (initiation only; not intended for glycemic control)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">First increase</td>
                    <td className="border border-gray-300 px-4 py-3">After 4 weeks, increase to 5 mg once weekly</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Further increases</td>
                    <td className="border border-gray-300 px-4 py-3">In 2.5 mg increments after at least 4 weeks on the current dose, if additional glycemic control is needed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum dosage, adults</td>
                    <td className="border border-gray-300 px-4 py-3">15 mg subcutaneously once weekly</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum dosage, pediatric 10 years and older</td>
                    <td className="border border-gray-300 px-4 py-3">10 mg subcutaneously once weekly</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Timing</td>
                    <td className="border border-gray-300 px-4 py-3">Once weekly, any time of day, with or without meals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The Mounjaro label also carries an insulin-specific instruction absent from most consumer
              summaries: when used with insulin, administer as separate injections and never mix, and
              the label notes it is acceptable to inject in the same body region as long as the
              injections are not adjacent. The label further states that when initiating tirzepatide,
              consider reducing the dose of concomitantly administered insulin or insulin secretagogues
              such as sulfonylureas to reduce hypoglycemia risk. That is a prescriber instruction, and
              it is one reason dose changes on tirzepatide are not a solo decision when other
              glucose-lowering medications are involved.
            </p>

            <h2 id="why-titration" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Why Tirzepatide Dose Escalation Exists
            </h2>

            <p className="text-gray-700 mb-4">
              The label states the reason plainly. Both the Zepbound and Mounjaro labels instruct
              clinicians to follow the dosage escalation schedule{' '}
              <strong>to reduce the risk of gastrointestinal adverse reactions</strong>. The four-week
              minimum interval is not an arbitrary billing cycle; it is the label&apos;s tolerability
              buffer.
            </p>

            <p className="text-gray-700 mb-4">
              The magnitude of that GI burden is documented in the Zepbound label&apos;s clinical trial
              experience. In a pool of two randomized, double-blind, placebo-controlled weight
              reduction trials in adults with obesity or overweight, gastrointestinal adverse reactions
              occurred in <strong>56% of patients at each of the 5 mg, 10 mg, and 15 mg</strong> doses
              versus <strong>30% on placebo</strong>. The most common individual reactions reported at
              a rate of at least 2% and greater than placebo were:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Adverse reaction</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Placebo (N=958)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">5 mg (N=630)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">10 mg (N=948)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">15 mg (N=941)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nausea</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">25%</td>
                    <td className="border border-gray-300 px-4 py-3">29%</td>
                    <td className="border border-gray-300 px-4 py-3">28%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diarrhea</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">19%</td>
                    <td className="border border-gray-300 px-4 py-3">21%</td>
                    <td className="border border-gray-300 px-4 py-3">23%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Constipation</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">17%</td>
                    <td className="border border-gray-300 px-4 py-3">14%</td>
                    <td className="border border-gray-300 px-4 py-3">11%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vomiting</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">11%</td>
                    <td className="border border-gray-300 px-4 py-3">13%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal pain</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">10%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dyspepsia</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Source: ZEPBOUND prescribing information, Adverse Reactions (6.1), pooled Study 1 and
              Study 2. Rates observed in one drug&apos;s trials cannot be directly compared to another
              drug&apos;s trials.
            </p>

            <p className="text-gray-700 mb-4">
              Discontinuation follows the same pattern. Across those two trials, 4.8%, 6.3%, and 6.7%
              of patients on 5 mg, 10 mg, and 15 mg respectively permanently discontinued treatment due
              to adverse reactions, versus 3.4% on placebo, and the label notes the majority who
              discontinued did so during the first few months, driven by gastrointestinal reactions.
              That first-few-months window is exactly the window the titration schedule is designed to
              soften. For the full adverse-reaction picture beyond dosing, see our{' '}
              <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects guide</Link>.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">What the label does not say</h4>
              <p className="text-gray-700">
                The label does not describe a &quot;microdose,&quot; a half-step between rungs, a
                two-week escalation, or a conversion factor from any other GLP-1 medication. Those are
                clinic protocols or internet folklore, not label content. If a program tells you it
                titrates differently, that is a conversation to have with the prescriber who signed the
                order.
              </p>
            </div>

            <h2 id="missed-dose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What the Label Says About a Missed Dose of Tirzepatide
            </h2>

            <p className="text-gray-700 mb-4">
              This is one of the highest-volume tirzepatide questions and the label answers it
              identically for both products. The instruction, verbatim in substance:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 my-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  If a dose is missed, administer as soon as possible <strong>within 4 days (96
                  hours)</strong> after the missed dose.
                </li>
                <li>
                  If <strong>more than 4 days</strong> have passed, skip the missed dose and administer
                  the next dose on the regularly scheduled day.
                </li>
                <li>In each case, resume the regular once-weekly dosing schedule.</li>
                <li>
                  The day of weekly administration can be changed if necessary, as long as the time
                  between the two doses is <strong>at least 3 days (72 hours)</strong>.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              Two things are worth noticing. The label describes no catch-up dosing and no doubling,
              and the 72-hour minimum separation is what makes shifting your injection day possible
              without compressing two doses together. If you have missed a dose, the right move is to
              contact the prescriber or pharmacist who manages your therapy rather than to reason from
              a web page.
            </p>

            <h2 id="presentations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Vials, Single-Dose Pens, and KwikPens: The Presentations on the Label
            </h2>

            <p className="text-gray-700 mb-4">
              The same milligram dose can arrive in physically different devices, and the label treats
              that as a safety issue rather than a packaging detail. Both the Zepbound and Mounjaro
              labels list the drug as available in{' '}
              <strong>pre-filled single-dose pens, single-dose vials, multi-dose vials, and
              single-patient-use KwikPens</strong>, with the multi-dose vial and the KwikPen each
              containing four doses.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Presentation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Doses per unit</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Strengths listed on the label</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Label notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pre-filled single-dose pen</td>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">2.5, 5, 7.5, 10, 12.5, 15 mg per 0.5 mL</td>
                    <td className="border border-gray-300 px-4 py-3">Dose is fixed by the device</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Single-dose vial</td>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">2.5, 5, 7.5, 10, 12.5, 15 mg per 0.5 mL</td>
                    <td className="border border-gray-300 px-4 py-3">Requires a syringe; label references a 1 mL syringe able to measure the dose</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Multi-dose vial</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">e.g. 20 mg/2.4 mL delivers four 5 mg doses of 0.6 mL</td>
                    <td className="border border-gray-300 px-4 py-3">New syringe and needle for each injection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Single-patient-use KwikPen</td>
                    <td className="border border-gray-300 px-4 py-3">4</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 through 15 mg per injection, four injections per pen</td>
                    <td className="border border-gray-300 px-4 py-3">Not recommended for self-administration by those who are visually impaired</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The label&apos;s administration instructions are explicit that the presentation itself
              requires training. Clinicians are told to inform patients which presentation they will
              receive, to ensure training appropriate to that specific presentation, and, if the
              prescribed presentation changes, to re-train and direct patients to the Instructions for
              Use for the new presentation. A vial-and-syringe regimen is not the same user task as a
              single-dose pen, and the label treats a switch between them as a re-training event.
            </p>

            <p className="text-gray-700 mb-4">
              Presentation is also the main place dosing and price intersect. Vial-based supply through
              direct-pay channels is generally cheaper per month than pen-based supply, which is why so
              many self-pay patients end up on vials. We break down what each route actually costs in
              our{' '}
              <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link>{' '}
              and in the{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance comparison</Link>.
            </p>

            <h2 id="prescribers-consider" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Prescribers Consider When Choosing a Maintenance Dose
            </h2>

            <p className="text-gray-700 mb-4">
              The label supplies the inputs. It does not supply an algorithm, because the maintenance
              decision is clinical. From the prescribing information itself, these are the factors the
              label puts in front of a clinician:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Treatment response and tolerability.</strong> The Zepbound label instructs
                clinicians to consider both when selecting the maintenance dosage, and to consider a
                lower maintenance dosage if a patient does not tolerate the current one.
              </li>
              <li>
                <strong>Which indication is being treated.</strong> Weight reduction and long-term
                maintenance lists 5, 10, or 15 mg. Obstructive sleep apnea lists 10 or 15 mg only.
              </li>
              <li>
                <strong>Contraindications.</strong> The label contraindicates tirzepatide in patients
                with a personal or family history of medullary thyroid carcinoma or with Multiple
                Endocrine Neoplasia syndrome type 2, and in patients with known serious hypersensitivity
                to tirzepatide or its excipients.
              </li>
              <li>
                <strong>Other glucose-lowering medications.</strong> The label says to consider reducing
                the dose of concomitant insulin or insulin secretagogues when initiating tirzepatide, to
                reduce hypoglycemia risk.
              </li>
              <li>
                <strong>Oral medications.</strong> The label notes tirzepatide delays gastric emptying
                and can affect the absorption of concomitantly administered oral medications, and
                advises caution.
              </li>
              <li>
                <strong>Severe gastroparesis.</strong> The label states tirzepatide is not recommended
                in patients with severe gastroparesis.
              </li>
              <li>
                <strong>Renal and hepatic function.</strong> The label states no dosage adjustment is
                recommended for renal impairment (including end-stage renal disease) or for hepatic
                impairment, while advising that renal function be monitored in patients reporting
                adverse reactions that could lead to volume depletion.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              A program that never asks about any of this is worth a second look. When we compare
              telehealth GLP-1 programs in our{' '}
              <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">best GLP-1 weight loss programs review</Link>,
              the clinical wrap around the prescription, meaning who titrates you, how often they check
              in, and what labs they run, is the variable that separates the programs more than the
              sticker price does. You can also browse{' '}
              <Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinics by state</Link>{' '}
              to see who is prescribing near you.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Compounded Tirzepatide and the Dosing-Error Problem
            </h2>

            <p className="text-gray-700 mb-4">
              Compounded tirzepatide is <strong>not an FDA-approved product</strong>. It has not been
              evaluated by the FDA for safety, effectiveness, or quality, and it does not carry the
              FDA-approved prescribing information that defines the 2.5 mg start, the 2.5 mg steps, or
              the 15 mg maximum. Everything reported on this page describes the approved products.
            </p>

            <p className="text-gray-700 mb-4">
              The FDA has specifically warned about <strong>dosing errors</strong> with compounded
              GLP-1 products. The agency states it received multiple reports of adverse events, some
              requiring hospitalization, that may be related to dosing errors with compounded
              injectable semaglutide, resulting from patients measuring and self-administering
              incorrect doses and, in some cases, from health care professionals miscalculating doses.
              The agency also reports adverse events that may relate to patients prescribed compounded
              semaglutide or tirzepatide <strong>in doses beyond what is in the FDA-approved label</strong>,
              which it describes as using more product in a single dose, taking doses more frequently,
              or increasing the amount more quickly than the titration schedule.
            </p>

            <p className="text-gray-700 mb-4">
              The FDA notes that federal law does not require state-licensed pharmacies that are not
              outsourcing facilities to submit adverse events to the agency, so reports are likely
              undercounted. Even so, the FDA states that as of <strong>May 31, 2026</strong> it had
              received <strong>more than 730 reports</strong> of adverse events associated with
              compounded tirzepatide and <strong>990 reports</strong> associated with compounded
              semaglutide. The agency also says it is aware of fraudulent compounded semaglutide and
              tirzepatide carrying false label information, in some cases naming compounding pharmacies
              that do not exist.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask how the dose is measured</h4>
              <p className="text-gray-700">
                The FDA encourages patients to talk with their health care provider or compounder about
                how to measure and administer the intended dose of compounded semaglutide or
                tirzepatide, and tells prescribers to be vigilant when determining doses and titration
                schedules for compounded products. If you have been prescribed a compounded injectable,
                confirm the concentration, the exact volume, and the syringe type with the prescribing
                clinician and the dispensing pharmacist. Our{' '}
                <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
                covers the same regulatory ground for the other molecule.
              </p>
            </div>

            <h2 id="cost-by-dose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Dose Has to Do With Cost
            </h2>

            <p className="text-gray-700 mb-4">
              A practical note that the label does not address. For the branded products, price is
              generally tied to the presentation and the supply channel rather than climbing with each
              milligram step, which means the escalation schedule does not automatically make month six
              more expensive than month one. Compounded programs frequently do price by dose, so a
              titration step can move the monthly number. That difference is worth understanding before
              you commit to a program.
            </p>

            <p className="text-gray-700 mb-4">
              We track real published prices rather than estimates in the{' '}
              <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link>{' '}
              and the{' '}
              <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link>. If cost is the
              binding constraint, the{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance</Link>{' '}
              comparison covers direct-pay vial channels and telehealth options side by side, and the{' '}
              <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">oral GLP-1 pill guide</Link>{' '}
              covers the non-injectable route.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Keep reading</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The other molecule&apos;s schedule:</strong> <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">semaglutide dosing guide</Link></li>
              <li><strong>Head to head:</strong> <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide</Link></li>
              <li><strong>Every approved GLP-1 and its indication:</strong> <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link></li>
              <li><strong>Adverse reactions in detail:</strong> <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects</Link> and <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic side effects</Link></li>
              <li><strong>If a GLP-1 is not the right fit:</strong> <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Clinic That Titrates Properly</h3>
            <p className="mb-6 text-blue-100">
              Compare cash-pay GLP-1 clinics and telehealth programs on price, monitoring, and who
              actually manages your dose.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse GLP-1 Clinics
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
              This guide is for educational purposes only and is not medical advice. It reports what
              the FDA-approved prescribing information for Zepbound and Mounjaro states about dosing;
              it does not recommend a dose, a titration schedule, a dose change, or a conversion
              between medications. Tirzepatide is a prescription medication with contraindications,
              boxed-warning content, warnings, and drug interactions that are not fully reproduced
              here. Consult a licensed clinician about whether any medication is appropriate for you,
              and read the full prescribing information and Medication Guide provided with your
              prescription. Labels are revised; verify against the current prescribing information
              linked below. VitalityScout is not affiliated with Eli Lilly and Company.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                &bull;{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ZEPBOUND (tirzepatide) injection — full prescribing information, DailyMed
                </a>{' '}
                (dose escalation 2.1, maintenance and maximum 2.2, missed dose 2.3, administration 2.4, presentations 3, adverse reactions 6.1, renal/hepatic 8.6-8.7)
              </li>
              <li>
                &bull;{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  MOUNJARO (tirzepatide) injection — full prescribing information, DailyMed
                </a>{' '}
                (indication 1, recommended dosage 2.1, administration 2.2, presentations 3)
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  FDA — ZEPBOUND prescribing information at original approval (NDA 217806, PDF)
                </a>
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  FDA — MOUNJARO prescribing information at original approval (NDA 215866, PDF)
                </a>
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  FDA &mdash; FDA&apos;s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss
                </a>{' '}
                (compounded product risks, dosing concerns, adverse-event report counts as of May 31, 2026)
              </li>
              <li>
                &bull;{' '}
                <a href="https://zepbound.lilly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Zepbound official product site — Eli Lilly and Company
                </a>
              </li>
              <li>
                &bull;{' '}
                <a href="https://www.mounjaro.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Mounjaro official product site — Eli Lilly and Company
                </a>
              </li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Label Cheat Sheet"
            description="The FDA label schedules for tirzepatide and semaglutide, side by side, in one page."
            source="guide_tirzepatide_dosing_guide"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
