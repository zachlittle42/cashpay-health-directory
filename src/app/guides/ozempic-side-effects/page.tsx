import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/ozempic-side-effects';
const REVIEWED = '2026-08-03';

export const metadata: Metadata = {
  title: { absolute: 'Ozempic Side Effects: What the FDA Semaglutide Label Says' },
  alternates: { canonical: URL },
  description:
    'Ozempic side effects from the FDA label: nausea in 15.8-20.3% vs 6.1% on placebo, the boxed thyroid warning, plus how Wegovy and Rybelsus differ.',
};

// Every frequency below is quoted from the current FDA prescribing information
// on DailyMed (Ozempic injection, Wegovy injection/tablets, Rybelsus/Ozempic
// tablets). Nothing here is estimated, pooled across drugs, or inferred. The
// visible FAQ block renders this array verbatim, so schema and page match.
const FAQ_ITEMS = [
  {
    question: 'What are the side effects of Ozempic?',
    answer:
      'The FDA label for Ozempic (semaglutide injection) lists the most common adverse reactions, reported in at least 5% of patients, as nausea, vomiting, diarrhea, abdominal pain, and constipation. In the pooled placebo-controlled trials the label reports nausea in 15.8% of patients on 0.5 mg and 20.3% on 1 mg versus 6.1% on placebo; vomiting 5% and 9.2% versus 2.3%; and diarrhea 8.5% and 8.8% versus 1.9%. Gastrointestinal reactions overall occurred in 32.7% of the 0.5 mg group and 36.4% of the 1 mg group versus 15.3% on placebo, and the label notes most nausea, vomiting, and diarrhea occurred during dose escalation. Ozempic also carries a boxed warning about thyroid C-cell tumors. This is educational information, not medical advice; discuss side effects with the prescriber who manages your care.',
  },
  {
    question: 'What are the most common semaglutide side effects?',
    answer:
      'Semaglutide is the same molecule in Ozempic, Wegovy, and Rybelsus, but the reported frequencies differ by product because the doses and the trial populations differ. The Ozempic label reports nausea at 15.8-20.3%. The Wegovy 2.4 mg injection label reports nausea in 44% of patients versus 16% on placebo, diarrhea 30% versus 16%, vomiting 24% versus 6%, and constipation 24% versus 11%. The Rybelsus (oral semaglutide) label reports nausea in 11% of patients on 7 mg and 20% on 14 mg versus 6% on placebo. Higher maintenance doses track with more gastrointestinal reactions. These numbers come from separate trials and are not head-to-head comparisons.',
  },
  {
    question: 'How long do Ozempic side effects last?',
    answer:
      'The FDA label does not publish a duration, but it does state where the reactions cluster: the majority of reports of nausea, vomiting, and diarrhea occurred during dose escalation. That is why the label specifies a stepped titration schedule starting at 0.25 mg once weekly for four weeks before any increase, and why it instructs prescribers to reinitiate escalation at a lower dosage after missed doses. Persistent, severe, or worsening gastrointestinal symptoms are not something to wait out. The label warns about severe gastrointestinal reactions and about acute kidney injury from dehydration caused by vomiting or diarrhea. Contact your prescriber if symptoms do not settle.',
  },
  {
    question: 'What are the serious side effects of Ozempic and semaglutide?',
    answer:
      'The semaglutide labels list these serious adverse reactions: risk of thyroid C-cell tumors (a boxed warning based on rodent studies; human relevance has not been determined), acute pancreatitis, acute gallbladder disease, hypoglycemia when combined with insulin or an insulin secretagogue, acute kidney injury due to volume depletion, severe gastrointestinal adverse reactions, hypersensitivity reactions including anaphylaxis and angioedema, diabetic retinopathy complications, increases in resting heart rate, and pulmonary aspiration during general anesthesia or deep sedation. Semaglutide is contraindicated in patients with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. Seek urgent care for severe persistent abdominal pain, and tell any surgeon or anesthesiologist that you take a GLP-1 before a procedure.',
  },
  {
    question: 'What are the side effects of GLP-1 medications as a class?',
    answer:
      'GLP-1 receptor agonists share a recognizable safety profile because they share a mechanism. Across the class the labels describe gastrointestinal reactions (nausea, vomiting, diarrhea, constipation, abdominal pain) as the dominant complaint, concentrated during dose escalation. The class labels also warn about acute pancreatitis, gallbladder disease, hypoglycemia in combination with insulin or sulfonylureas, acute kidney injury from dehydration, hypersensitivity reactions, and pulmonary aspiration during anesthesia. The semaglutide, tirzepatide, liraglutide, and dulaglutide labels all carry the same boxed warning about rodent thyroid C-cell tumors and the same contraindication for a personal or family history of medullary thyroid carcinoma or MEN 2. Frequencies still differ drug by drug, so read the specific label rather than assuming the class number.',
  },
  {
    question: 'Does Ozempic cause hair loss or "Ozempic face"?',
    answer:
      'Hair loss is quantified only on the Wegovy label. The Ozempic and Rybelsus labels do list alopecia, under Postmarketing Experience (Skin and Subcutaneous Tissue), where no frequency is reported because those reports come from a population of uncertain size. In the Wegovy 2.4 mg injection weight-reduction trials, hair loss was reported by 3% of treated patients and 1% of placebo patients. "Ozempic face" is not a medical term and does not appear on any FDA label; it describes facial volume loss that people attribute to rapid weight reduction rather than to a direct drug effect. If you are concerned about losing lean tissue along with fat, that is worth raising with your prescriber and tracking objectively.',
  },
  {
    question: 'Is Ozempic approved for weight loss?',
    answer:
      'No. Ozempic injection is FDA-approved as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes, to reduce the risk of major adverse cardiovascular events in adults with type 2 diabetes and established cardiovascular disease, and to reduce the risk of sustained eGFR decline, end-stage kidney disease, and cardiovascular death in adults with type 2 diabetes and chronic kidney disease. It is not approved for weight management. Prescribing Ozempic for weight loss is off-label use. Wegovy is the semaglutide product FDA-approved for chronic weight management and for cardiovascular risk reduction, and its label reports different, generally higher, adverse-reaction frequencies at its higher maintenance dose.',
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

export default function OzempicSideEffectsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ozempic and Semaglutide Side Effects: FDA Label Data Explained',
    description:
      'Ozempic and semaglutide side effects reported exactly as the FDA prescribing information reports them, with the Wegovy and Rybelsus frequencies alongside, the boxed warning, the serious reactions list, and the shared GLP-1 class profile.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Semaglutide',
      alternateName: ['Ozempic', 'Wegovy', 'Rybelsus'],
      activeIngredient: 'semaglutide',
      drugClass: 'GLP-1 receptor agonist',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: REVIEWED,
    dateModified: REVIEWED,
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'OZEMPIC (semaglutide) injection, solution — FDA prescribing information, Novo Nordisk (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79',
      },
      {
        '@type': 'CreativeWork',
        name: 'WEGOVY (semaglutide) injection and tablets — FDA prescribing information, Novo Nordisk (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b',
      },
      {
        '@type': 'CreativeWork',
        name: 'RYBELSUS and OZEMPIC (oral semaglutide) tablets — FDA prescribing information, Novo Nordisk (DailyMed)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98',
      },
      {
        '@type': 'CreativeWork',
        name: 'OZEMPIC (semaglutide) injection — full prescribing information PDF, Novo Nordisk',
        url: 'https://www.novo-pi.com/ozempic.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'WEGOVY (semaglutide) — full prescribing information PDF, Novo Nordisk',
        url: 'https://www.novo-pi.com/wegovy.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA: Medications Containing Semaglutide Marketed for Type 2 Diabetes or Weight Loss',
        url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA alerts health care providers, compounders and patients of dosing errors associated with compounded injectable semaglutide products',
        url: 'https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded',
      },
      {
        '@type': 'CreativeWork',
        name: 'Wegovy.com — side effects information, Novo Nordisk',
        url: 'https://www.wegovy.com/taking-wegovy/side-effects.html',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

          {/* Breadcrumb */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="mx-auto max-w-4xl px-4 py-3">
              <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/guides" className="hover:text-blue-600">Guides</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">Ozempic Side Effects</span>
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
                  Medication Guide
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Ozempic and Semaglutide Side Effects: The Label Data, Explained
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Most side-effect articles paraphrase. This one quotes the FDA prescribing information
                directly, with the reported percentages, the placebo comparison, and the differences
                between Ozempic, Wegovy, and Rybelsus.
              </p>

              {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  The FDA label lists the most common Ozempic side effects as{' '}
                  <strong>nausea, vomiting, diarrhea, abdominal pain, and constipation</strong>. In
                  placebo-controlled trials, nausea was reported in <strong>15.8%</strong> of patients
                  on 0.5 mg and <strong>20.3%</strong> on 1 mg versus <strong>6.1%</strong> on placebo.
                  Gastrointestinal reactions overall hit <strong>32.7-36.4%</strong> versus{' '}
                  <strong>15.3%</strong>, mostly during dose escalation. Ozempic carries a boxed
                  warning for thyroid C-cell tumors. Educational information, not medical advice.
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Sources: FDA prescribing information via DailyMed • Last reviewed: August 2026 • 13 min read
              </p>
            </div>
          </section>

          {/* Content */}
          <article className="mx-auto max-w-4xl px-4 py-12">
            {/* Quick comparison box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Same drug, three labels</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-blue-600 mb-2">Ozempic (injection)</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Approved for type 2 diabetes</li>
                    <li>• Plus CV and kidney outcome uses</li>
                    <li>• Nausea 15.8-20.3% vs 6.1% placebo</li>
                    <li>• Not approved for weight loss</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-indigo-600 mb-2">Wegovy (injection + tablet)</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Chronic weight management</li>
                    <li>• Plus CV risk reduction</li>
                    <li>• Nausea 44% vs 16% placebo</li>
                    <li>• Higher maintenance dose</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-teal-600 mb-2">Rybelsus (oral tablet)</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Approved for type 2 diabetes</li>
                    <li>• Plus CV risk reduction in T2D</li>
                    <li>• Nausea 11-20% vs 6% placebo</li>
                    <li>• Daily, not weekly</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-600">
                These percentages come from separate trials in different populations. They are not
                head-to-head comparisons and should not be read as one drug being &quot;safer&quot; than
                another.
              </p>
            </div>

            {/* Table of contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#common" className="text-blue-600 hover:underline">1. What are the side effects of Ozempic</a></li>
                <li><a href="#by-product" className="text-blue-600 hover:underline">2. Semaglutide side effects by product: Ozempic vs Wegovy vs Rybelsus</a></li>
                <li><a href="#glp1-class" className="text-blue-600 hover:underline">3. GLP-1 side effects: what the whole class shares</a></li>
                <li><a href="#serious" className="text-blue-600 hover:underline">4. Serious warnings on the semaglutide label</a></li>
                <li><a href="#titration" className="text-blue-600 hover:underline">5. Why side effects cluster during dose escalation</a></li>
                <li><a href="#stopping" className="text-blue-600 hover:underline">6. How often people stop because of side effects</a></li>
                <li><a href="#compounded" className="text-blue-600 hover:underline">7. Compounded semaglutide adds a separate risk</a></li>
                <li><a href="#when-to-call" className="text-blue-600 hover:underline">8. When to call a clinician</a></li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                Semaglutide has one of the most heavily documented safety profiles in modern
                pharmacology, and almost none of that documentation makes it into the average search
                result. What follows is the FDA prescribing information, quoted with its own numbers,
                its own placebo columns, and its own qualifiers. Where the label declines to give a
                number, this page declines too.
              </p>

              <h2 id="common" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                What Are the Side Effects of Ozempic?
              </h2>

              <p className="text-gray-700 mb-4">
                The Ozempic prescribing information states that the most common adverse reactions
                reported in at least 5% of treated patients are{' '}
                <strong>nausea, vomiting, diarrhea, abdominal pain, and constipation</strong>. The
                numbers below come from the label&apos;s pooled placebo-controlled trials in adults
                with type 2 diabetes, reported as the percentage of patients in each arm.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Adverse reaction</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Placebo (N=262)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ozempic 0.5 mg (N=260)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ozempic 1 mg (N=261)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Nausea</td>
                      <td className="border border-gray-300 px-4 py-3">6.1%</td>
                      <td className="border border-gray-300 px-4 py-3">15.8%</td>
                      <td className="border border-gray-300 px-4 py-3">20.3%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Vomiting</td>
                      <td className="border border-gray-300 px-4 py-3">2.3%</td>
                      <td className="border border-gray-300 px-4 py-3">5%</td>
                      <td className="border border-gray-300 px-4 py-3">9.2%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Diarrhea</td>
                      <td className="border border-gray-300 px-4 py-3">1.9%</td>
                      <td className="border border-gray-300 px-4 py-3">8.5%</td>
                      <td className="border border-gray-300 px-4 py-3">8.8%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal pain</td>
                      <td className="border border-gray-300 px-4 py-3">4.6%</td>
                      <td className="border border-gray-300 px-4 py-3">7.3%</td>
                      <td className="border border-gray-300 px-4 py-3">5.7%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Constipation</td>
                      <td className="border border-gray-300 px-4 py-3">1.5%</td>
                      <td className="border border-gray-300 px-4 py-3">5%</td>
                      <td className="border border-gray-300 px-4 py-3">3.1%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500">
                  Source: OZEMPIC prescribing information, Table 1 (adverse reactions in
                  placebo-controlled trials reported in at least 5% of Ozempic-treated patients with
                  type 2 diabetes).
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Read the table as a whole rather than row by row. The label also reports the
                aggregate: gastrointestinal adverse reactions occurred in <strong>15.3%</strong> of
                placebo patients, <strong>32.7%</strong> of the 0.5 mg group, and{' '}
                <strong>36.4%</strong> of the 1 mg group. In the separate trial comparing 1 mg with 2
                mg, gastrointestinal reactions were reported in <strong>34%</strong> of the 2 mg group
                versus <strong>30.8%</strong> of the 1 mg group.
              </p>

              <p className="text-gray-700 mb-4">
                Beyond the at-least-5% list, the Ozempic label names lower-frequency gastrointestinal
                reactions including dyspepsia, eructation (belching), flatulence, and
                gastroesophageal reflux disease, each reported in under 5% of patients.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-gray-700">
                  <strong>The point most articles miss:</strong> the placebo column matters. Nausea in
                  6.1% of people who received no active drug is the baseline noise of being in a
                  diabetes trial. The drug-attributable signal is the difference, not the headline
                  percentage.
                </p>
              </div>

              <h2 id="by-product" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Semaglutide Side Effects by Product: Ozempic vs Wegovy vs Rybelsus
              </h2>

              <p className="text-gray-700 mb-4">
                Semaglutide is one molecule sold under three brand names with three different FDA
                indications. Confusing them is the single most common error in consumer coverage, and
                it matters here because the reported side-effect frequencies are not the same.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA-approved use</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nausea (drug vs placebo)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic (semaglutide injection)</td>
                      <td className="border border-gray-300 px-4 py-3">Glycemic control in adults with type 2 diabetes; reducing MACE risk in type 2 diabetes with established cardiovascular disease; reducing risk of sustained eGFR decline, end-stage kidney disease, and CV death in type 2 diabetes with chronic kidney disease</td>
                      <td className="border border-gray-300 px-4 py-3">15.8% (0.5 mg) / 20.3% (1 mg) vs 6.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy (semaglutide injection and tablet)</td>
                      <td className="border border-gray-300 px-4 py-3">Reducing MACE risk in adults with established CV disease and obesity or overweight; reducing excess body weight and maintaining weight reduction long term in adults and patients aged 12+ with obesity, and adults with overweight plus a weight-related condition; noncirrhotic MASH with stage F2-F3 fibrosis (accelerated approval)</td>
                      <td className="border border-gray-300 px-4 py-3">44% (2.4 mg injection) vs 16%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Rybelsus (oral semaglutide tablet)</td>
                      <td className="border border-gray-300 px-4 py-3">Glycemic control in adults with type 2 diabetes; reducing MACE risk in adults with type 2 diabetes at high risk for those events</td>
                      <td className="border border-gray-300 px-4 py-3">11% (7 mg) / 20% (14 mg) vs 6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Wegovy: the fullest side-effect list on any semaglutide label</h3>

              <p className="text-gray-700 mb-4">
                Because Wegovy is studied at a higher maintenance dose in a larger non-diabetic
                population, its label carries the longest adverse-reaction table. In the pooled
                weight-reduction trials of Wegovy 2.4 mg injection (2,116 treated patients versus
                1,261 on placebo), the label reports:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Adverse reaction</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Placebo (N=1,261)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Wegovy 2.4 mg (N=2,116)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Nausea</td><td className="border border-gray-300 px-4 py-3">16%</td><td className="border border-gray-300 px-4 py-3">44%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Diarrhea</td><td className="border border-gray-300 px-4 py-3">16%</td><td className="border border-gray-300 px-4 py-3">30%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Vomiting</td><td className="border border-gray-300 px-4 py-3">6%</td><td className="border border-gray-300 px-4 py-3">24%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Constipation</td><td className="border border-gray-300 px-4 py-3">11%</td><td className="border border-gray-300 px-4 py-3">24%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Abdominal pain</td><td className="border border-gray-300 px-4 py-3">10%</td><td className="border border-gray-300 px-4 py-3">20%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Headache</td><td className="border border-gray-300 px-4 py-3">10%</td><td className="border border-gray-300 px-4 py-3">14%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Fatigue</td><td className="border border-gray-300 px-4 py-3">5%</td><td className="border border-gray-300 px-4 py-3">11%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Dyspepsia</td><td className="border border-gray-300 px-4 py-3">3%</td><td className="border border-gray-300 px-4 py-3">9%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Dizziness</td><td className="border border-gray-300 px-4 py-3">4%</td><td className="border border-gray-300 px-4 py-3">8%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Abdominal distension</td><td className="border border-gray-300 px-4 py-3">5%</td><td className="border border-gray-300 px-4 py-3">7%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Eructation (belching)</td><td className="border border-gray-300 px-4 py-3">under 1%</td><td className="border border-gray-300 px-4 py-3">7%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Flatulence</td><td className="border border-gray-300 px-4 py-3">4%</td><td className="border border-gray-300 px-4 py-3">6%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Gastroesophageal reflux disease</td><td className="border border-gray-300 px-4 py-3">3%</td><td className="border border-gray-300 px-4 py-3">5%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Gastritis</td><td className="border border-gray-300 px-4 py-3">1%</td><td className="border border-gray-300 px-4 py-3">4%</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-3 font-medium">Hair loss</td><td className="border border-gray-300 px-4 py-3">1%</td><td className="border border-gray-300 px-4 py-3">3%</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Dysesthesia (altered sensation)</td><td className="border border-gray-300 px-4 py-3">1%</td><td className="border border-gray-300 px-4 py-3">2%</td></tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500">
                  Source: WEGOVY prescribing information, Table 3 (adverse reactions at least 2% and
                  greater than placebo in adults treated for weight reduction). Hypoglycemia in type 2
                  diabetes was reported at 6% versus 2%, measured in a separate diabetes sub-study.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                The two lines people never see quoted are the last three rows. <strong>Hair loss</strong>{' '}
                at 3% versus 1%, and <strong>dysesthesia</strong> (a grouped term covering paresthesia,
                burning sensation, and skin sensitivity) at 2% versus 1%, are on the label. So is{' '}
                <strong>fatigue</strong> at 11% versus 5%. Hair loss is quantified only here, on the
                Wegovy label. It is not absent from the other two: the Ozempic and Rybelsus labels
                list <strong>alopecia</strong> under Postmarketing Experience, in the skin and
                subcutaneous tissue category, where the label states frequency cannot be reliably
                estimated because the reports come from a population of uncertain size. Unquantified
                is not the same as unreported. If you want the same breakdown for the other
                major GLP-1, see our companion{' '}
                <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects guide</Link>, and for
                how the two molecules compare overall, our{' '}
                <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide comparison</Link>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Rybelsus and the oral semaglutide tablets</h3>

              <p className="text-gray-700 mb-4">
                Oral semaglutide is taken daily on an empty stomach with no more than four ounces of
                water, and the label instructs waiting at least 30 minutes before eating, drinking, or
                taking other oral medications. In the pooled placebo-controlled trials the label
                reports nausea in <strong>11%</strong> of patients on 7 mg and <strong>20%</strong> on
                14 mg versus <strong>6%</strong> on placebo, abdominal pain <strong>10%</strong> and{' '}
                <strong>11%</strong> versus <strong>4%</strong>, diarrhea <strong>9%</strong> and{' '}
                <strong>10%</strong> versus <strong>4%</strong>, decreased appetite{' '}
                <strong>6%</strong> and <strong>9%</strong> versus <strong>1%</strong>, and vomiting{' '}
                <strong>6%</strong> and <strong>8%</strong> versus <strong>3%</strong>. Overall
                gastrointestinal reactions were reported in <strong>41%</strong> of the 14 mg group,{' '}
                <strong>32%</strong> of the 7 mg group, and <strong>21%</strong> of placebo patients.
              </p>

              <p className="text-gray-700 mb-4">
                The label is explicit that oral and injectable semaglutide are{' '}
                <strong>not substitutable on a milligram-to-milligram basis</strong>. If you are
                weighing a pill against a weekly injection, our{' '}
                <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link>{' '}
                covers the practical differences, and the{' '}
                <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic comparison</Link>{' '}
                covers the two injectable semaglutide products side by side.
              </p>

              <h2 id="glp1-class" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                GLP-1 Side Effects: What the Whole Class Shares
              </h2>

              <p className="text-gray-700 mb-4">
                Searching &quot;GLP-1 side effects&quot; instead of a brand name is the smarter query,
                because these drugs share a mechanism and therefore share a safety architecture. Every
                GLP-1 receptor agonist slows gastric emptying and acts on central appetite signaling,
                which is why the same cluster of complaints shows up on every label in the class.
              </p>

              <p className="text-gray-700 mb-4">
                The following warnings appear across the semaglutide, tirzepatide, liraglutide, and
                dulaglutide prescribing information:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Gastrointestinal reactions.</strong> Nausea, vomiting, diarrhea, constipation, and abdominal pain dominate every label&apos;s common-reaction table, concentrated during dose escalation.</li>
                <li><strong>Acute pancreatitis.</strong> Observed in patients treated with GLP-1 receptor agonists. The labels instruct discontinuation if pancreatitis is suspected.</li>
                <li><strong>Acute gallbladder disease.</strong> Cholelithiasis and cholecystitis occur more often on drug than placebo.</li>
                <li><strong>Hypoglycemia with insulin or insulin secretagogues.</strong> The GLP-1 itself rarely causes low blood sugar alone; combined with insulin or a sulfonylurea, the risk rises.</li>
                <li><strong>Acute kidney injury from volume depletion.</strong> Postmarketing reports, some requiring hemodialysis, mostly in patients who became dehydrated from vomiting or diarrhea.</li>
                <li><strong>Severe gastrointestinal adverse reactions.</strong> Reported postmarketing across the class; the Wegovy label states it is not recommended in patients with severe gastroparesis.</li>
                <li><strong>Hypersensitivity reactions.</strong> Anaphylaxis and angioedema have been reported.</li>
                <li><strong>Pulmonary aspiration during general anesthesia or deep sedation.</strong> Reported in patients on GLP-1 receptor agonists undergoing elective procedures. The labels instruct patients to tell their care team about any planned surgery or procedure.</li>
                <li><strong>Boxed warning for thyroid C-cell tumors.</strong> Semaglutide, tirzepatide, liraglutide, and dulaglutide labels all carry it, and all are contraindicated with a personal or family history of medullary thyroid carcinoma or MEN 2.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Two warnings are semaglutide-specific rather than universal. The Ozempic and Rybelsus
                labels warn about <strong>diabetic retinopathy complications</strong> in patients with
                type 2 diabetes, and the Wegovy label carries the same warning for patients with type 2
                diabetes taking it for weight reduction. The Wegovy label also warns about{' '}
                <strong>heart rate increase</strong>, reporting mean increases in resting heart rate of
                1 to 4 beats per minute and noting that more treated than placebo patients had a maximum
                change of 20 bpm or more (<strong>26% versus 16%</strong>).
              </p>

              <p className="text-gray-700 mb-4">
                One more class-wide effect is not a &quot;side effect&quot; on any label but shows up in
                trial body-composition data: weight lost on a GLP-1 includes lean mass, not only fat.
                Our{' '}
                <Link href="/guides/glp1-and-muscle-loss" className="text-blue-600 hover:underline">GLP-1 and muscle loss guide</Link>{' '}
                covers what the trials measured and what protects lean tissue. For the full roster of
                approved agents and how they differ, see the{' '}
                <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">Indications are not interchangeable</h4>
                <p className="text-gray-700">
                  Ozempic, Mounjaro, Victoza, and Rybelsus are approved for type 2 diabetes. Wegovy,
                  Zepbound, and Saxenda are approved for chronic weight management, with Wegovy also
                  approved for cardiovascular risk reduction and Zepbound also approved for obstructive
                  sleep apnea in adults with obesity. Prescribing a diabetes-labeled product for weight
                  loss is off-label use. That is legal and common, but it is not the same thing as
                  FDA approval, and any source that blurs the two is not reading the label.
                </p>
              </div>

              <h2 id="serious" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Serious Warnings on the Semaglutide Label
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The boxed warning</h3>

              <p className="text-gray-700 mb-4">
                All three semaglutide labels open with the same boxed warning. In rodents, semaglutide
                causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at
                clinically relevant exposures. The label states plainly that{' '}
                <strong>it is unknown whether semaglutide causes thyroid C-cell tumors, including
                medullary thyroid carcinoma, in humans</strong>, because the human relevance of the
                rodent finding has not been determined. The label also notes that routine monitoring of
                serum calcitonin or thyroid ultrasound is of uncertain value for early detection.
              </p>

              <p className="text-gray-700 mb-4">
                The practical consequence is the contraindication: semaglutide is contraindicated in
                patients with a personal or family history of medullary thyroid carcinoma, in patients
                with Multiple Endocrine Neoplasia syndrome type 2, and in patients with a prior serious
                hypersensitivity reaction to semaglutide or any excipient.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Gallbladder disease</h3>

              <p className="text-gray-700 mb-4">
                The Wegovy label reports cholelithiasis (gallstones) in <strong>1.6%</strong> of
                injection-treated adults versus <strong>0.7%</strong> of placebo patients, and{' '}
                <strong>2.5%</strong> of tablet-treated versus <strong>1%</strong> of placebo patients.
                Cholecystitis was reported in <strong>0.6%</strong> versus <strong>0.2%</strong>. The
                label specifically notes that the incidence was higher in treated patients aged 12 and
                older than in treated adults, with cholelithiasis reported in <strong>3.8%</strong> of
                that pediatric group versus <strong>0%</strong> on placebo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Severe gastrointestinal reactions</h3>

              <p className="text-gray-700 mb-4">
                &quot;Severe&quot; is a defined category on the label, not a figure of speech. In the
                adult weight-reduction trials, severe gastrointestinal adverse reactions were reported
                in <strong>4.1%</strong> of Wegovy injection patients versus <strong>0.9%</strong> on
                placebo, and in <strong>2%</strong> of Wegovy tablet patients versus{' '}
                <strong>0%</strong> on placebo.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pregnancy</h3>

              <p className="text-gray-700 mb-4">
                The Wegovy label states that weight loss offers no benefit to a pregnant patient and may
                cause fetal harm, and instructs discontinuation in pregnant patients using it for weight
                reduction. Novo Nordisk maintains a pregnancy exposure registry for patients exposed
                during pregnancy. Anyone who is pregnant, trying to conceive, or breastfeeding needs
                this conversation with a prescriber before starting or continuing.
              </p>

              <h2 id="titration" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Why Side Effects Cluster During Dose Escalation
              </h2>

              <p className="text-gray-700 mb-4">
                The label answers this directly: the majority of reports of nausea, vomiting, and
                diarrhea occurred during dose escalation. That is the entire design logic behind the
                titration schedules. The following is what the FDA label specifies, reported here for
                education only. <strong>Your prescriber determines your dosing</strong>, and nothing on
                this page is a reason to start, change, skip, or combine doses.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Schedule as specified in the FDA label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic injection</td>
                      <td className="border border-gray-300 px-4 py-3">Initiate at 0.25 mg once weekly for 4 weeks. After 4 weeks on the 0.25 mg dosage, increase to 0.5 mg once weekly. The maintenance dosage is 0.5 mg, 1 mg, or 2 mg once weekly based on glycemic control: if additional glycemic control is needed after at least 4 weeks on the 0.5 mg dosage, the dosage may be increased to 1 mg once weekly; if additional glycemic control is needed after at least 4 weeks on the 1 mg dosage, the dosage may be increased to 2 mg once weekly. The maximum recommended dosage is 2 mg once weekly. In patients with type 2 diabetes and chronic kidney disease, the label specifies a 1 mg once-weekly maintenance dosage after at least 4 weeks on 0.5 mg.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy injection</td>
                      <td className="border border-gray-300 px-4 py-3">Weeks 1-4: 0.25 mg. Weeks 5-8: 0.5 mg. Weeks 9-12: 1 mg. Weeks 13-16: 1.7 mg. Week 17 onward: maintenance dosage per the indication. For weight reduction in adults, either 1.7 mg or 2.4 mg once weekly (2.4 mg recommended); the label adds that for patients who tolerate the 2.4 mg dosage for at least 4 weeks and additional weight reduction is clinically indicated, the dosage may be increased to a maximum dosage of 7.2 mg once weekly. For cardiovascular risk reduction in adults, either 2.4 mg (recommended) or 1.7 mg once weekly. The label also states that if a dose is not tolerated during escalation, prescribers should consider delaying escalation for 4 weeks.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                      <td className="border border-gray-300 px-4 py-3">Days 1-30: 1.5 mg once daily. Days 31-60: 4 mg. Days 61-90: 9 mg. Day 91 onward: 25 mg.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Rybelsus tablets</td>
                      <td className="border border-gray-300 px-4 py-3">Days 1-30: 3 mg once daily (the label notes this starting dosage is not effective for glycemic control). Days 31-60: 7 mg. Day 61 onward: maintain 7 mg, or increase to 14 mg if additional glycemic control is needed.</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm text-gray-500">
                  Reported from the FDA prescribing information for educational purposes. Oral and
                  injectable semaglutide are not substitutable on a milligram-to-milligram basis. Dose
                  selection, escalation, and any change belong to a licensed prescriber.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Two label details are worth knowing because they explain unexpected symptom flare-ups.
                First, the labels state that the escalation steps exist specifically to reduce the risk
                of gastrointestinal reactions. Second, the Wegovy label instructs that if two or more
                consecutive doses are missed, escalation should be reinitiated at a lower dosage for the
                same reason. A gap in supply is a clinical event, not just an inconvenience. Our{' '}
                <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">semaglutide dosing guide</Link>{' '}
                walks through the label schedules in more detail, and the{' '}
                <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
                does the same for Mounjaro and Zepbound.
              </p>

              <h2 id="stopping" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                How Often People Stop Because of Side Effects
              </h2>

              <p className="text-gray-700 mb-4">
                Discontinuation rate is the most honest single measure of tolerability, because it
                counts people who decided the trade was not worth it. The labels report:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Ozempic.</strong> In the pooled placebo-controlled trials, <strong>3.1%</strong> of the 0.5 mg group and <strong>3.8%</strong> of the 1 mg group discontinued because of gastrointestinal adverse reactions, versus <strong>0.4%</strong> on placebo.</li>
                <li><strong>Wegovy 2.4 mg injection.</strong> <strong>6.8%</strong> of treated patients and <strong>3.2%</strong> of placebo patients permanently discontinued because of adverse reactions. The most common causes were nausea (1.8% versus 0.2%), vomiting (1.2% versus 0%), and diarrhea (0.7% versus 0.1%).</li>
                <li><strong>Oral semaglutide.</strong> In a four-year cardiovascular outcomes trial, study drug was permanently discontinued because of an adverse event in <strong>15.5%</strong> of tablet-treated patients versus <strong>11.6%</strong> of placebo patients. Note the placebo rate: over four years, people stop trial drugs for many reasons.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                The takeaway is that the overwhelming majority of people in these trials continued
                treatment. Common does not mean intolerable, and severe does not mean typical. What
                determines your experience is less the molecule than the clinical wrap around it:
                whether someone titrates you deliberately, monitors you, and adjusts when symptoms
                surface. That is worth weighing when you compare programs. Our{' '}
                <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">guide to the best GLP-1 weight-loss programs</Link>{' '}
                compares what each program actually includes, and{' '}
                <Link href="/weight-loss" className="text-blue-600 hover:underline">our weight-loss clinic directory</Link>{' '}
                lists cash-pay clinics by state.
              </p>

              <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Compounded Semaglutide Adds a Separate Risk
              </h2>

              <p className="text-gray-700 mb-4">
                Everything above describes FDA-approved semaglutide products, whose safety data come
                from registration trials and whose manufacturing is FDA-inspected.{' '}
                <strong>Compounded semaglutide is not an FDA-approved product.</strong> The FDA does not
                review compounded drugs for safety, effectiveness, or quality before they reach
                patients.
              </p>

              <p className="text-gray-700 mb-4">
                The FDA has specifically alerted health care providers, compounders, and patients to{' '}
                <strong>dosing errors associated with compounded injectable semaglutide products</strong>,
                including reports of adverse events, some requiring hospitalization, that may be related
                to overdoses. The agency attributed errors to patients measuring and self-administering
                incorrect doses and to providers miscalculating doses, and pointed to two contributing
                factors: many patients receiving vials had no experience withdrawing medication from a
                vial into a syringe, and confusion between units of measurement (milliliters,
                milligrams, and &quot;units&quot;) compounded the problem. Compounders also supply the
                product in different containers and at different concentrations.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">If you are prescribed a compounded product</h4>
                <p className="text-gray-700">
                  Ask the prescriber and the pharmacy to state the concentration in milligrams per
                  milliliter, to show you exactly what volume equals your prescribed dose, and to
                  confirm the units marked on the syringe you were given. The FDA&apos;s own guidance is
                  to talk with your health care provider or compounder about how to measure and
                  administer the intended dose. Our{' '}
                  <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
                  covers the regulatory picture and what to ask before you buy.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                Cost is usually the reason people land on a compounded product, and that is a real
                consideration rather than a foolish one. If price is what is driving the decision,
                compare the actual cash numbers first: our{' '}
                <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link>,{' '}
                <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link>, and{' '}
                <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance comparison</Link>{' '}
                use prices published by clinics and manufacturers rather than estimates. If semaglutide
                is not tolerable for you, our{' '}
                <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives guide</Link>{' '}
                covers what else is approved and what it costs.
              </p>

              <h2 id="when-to-call" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                When to Call a Clinician
              </h2>

              <p className="text-gray-700 mb-4">
                The labels name specific scenarios where the instruction is to stop, seek care, or
                inform a provider. These are not judgment calls to make from a search result.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Severe, persistent abdominal pain,</strong> with or without vomiting. The labels instruct discontinuation if pancreatitis is suspected.</li>
                <li><strong>Vomiting or diarrhea you cannot keep ahead of.</strong> Dehydration is the documented path to acute kidney injury on these drugs.</li>
                <li><strong>Right-upper-abdominal pain, fever, jaundice, or clay-colored stools.</strong> Possible gallbladder disease, which the label lists as a warning.</li>
                <li><strong>Any planned surgery or procedure with anesthesia or deep sedation.</strong> Tell the surgeon and the anesthesiologist you take a GLP-1. Pulmonary aspiration has been reported.</li>
                <li><strong>A neck lump, trouble swallowing, shortness of breath, or persistent hoarseness.</strong> These are the symptoms the boxed warning tells patients to report.</li>
                <li><strong>Swelling of the face, lips, or tongue, rash, or trouble breathing.</strong> Serious hypersensitivity reactions including anaphylaxis and angioedema have been reported.</li>
                <li><strong>Vision changes,</strong> particularly if you have type 2 diabetes and a history of retinopathy.</li>
                <li><strong>Repeated low blood sugar,</strong> especially if you also take insulin or a sulfonylurea.</li>
                <li><strong>Pregnancy, or planning one.</strong> The label instructs discontinuation in pregnant patients using semaglutide for weight reduction.</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">What a good program does about side effects</h4>
                <p className="text-gray-700">
                  Titration on the label schedule rather than a rush to the maintenance dose. A named
                  prescriber you can actually reach when symptoms start. Baseline and follow-up labs. A
                  documented plan for what happens if you cannot tolerate a step. When you are
                  comparing cash-pay programs, those are the features that change your experience of
                  this drug, and they are frequently the difference between programs at the same price.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Programs on What They Include</h3>
              <p className="mb-6 text-blue-100">
                Prescriber access, titration support, labs, and monitoring vary more than price does.
                See cash-pay weight-loss clinics by state.
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

            {/* Related guides */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="mb-3 font-bold text-gray-900">Related GLP-1 guides</h3>
              <ul className="space-y-1 text-sm text-blue-700">
                <li><Link href="/guides/tirzepatide-side-effects" className="hover:underline">Tirzepatide side effects: Mounjaro and Zepbound label data</Link></li>
                <li><Link href="/guides/semaglutide-vs-tirzepatide" className="hover:underline">Semaglutide vs tirzepatide: how the two compare</Link></li>
                <li><Link href="/guides/semaglutide-dosing-guide" className="hover:underline">Semaglutide dosing: what the FDA label specifies</Link></li>
                <li><Link href="/guides/glp1-medications-list" className="hover:underline">GLP-1 medications list: every approved option</Link></li>
                <li><Link href="/guides/glp1-pill-guide" className="hover:underline">GLP-1 pills: oral semaglutide explained</Link></li>
                <li><Link href="/guides/wegovy-vs-ozempic" className="hover:underline">Wegovy vs Ozempic: cost, dosing, and results</Link></li>
                <li><Link href="/guides/semaglutide-cost" className="hover:underline">Semaglutide cost: verified monthly program prices</Link></li>
                <li><Link href="/guides/cheapest-glp1-without-insurance" className="hover:underline">Cheapest GLP-1 without insurance</Link></li>
                <li><Link href="/weight-loss" className="hover:underline">GLP-1 and weight-loss clinics by state</Link></li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 rounded-lg bg-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Medical Disclaimer</h3>
              <p className="text-sm text-gray-600">
                This guide is published for educational purposes only and is not medical advice. It
                reports what the FDA prescribing information for Ozempic, Wegovy, and Rybelsus states;
                it does not recommend, evaluate, or interpret any treatment for any individual.
                Semaglutide is a prescription medication that requires a licensed prescriber, and the
                dosing schedules described here are reported as label content only, never as guidance
                to start, stop, change, skip, or combine doses. Do not use this page to self-diagnose
                or self-treat. Consult a licensed clinician about your own situation, including any
                symptom, warning, or interaction described above. Individual responses to medication
                vary and no outcome is guaranteed. VitalityScout is not affiliated with Novo Nordisk or
                the FDA and may earn a commission from some links, at no additional cost to you, which
                never affects how a product or provider is described. If you are experiencing a medical
                emergency, call 911 or your local emergency number.
              </p>
            </div>

            {/* Sources */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  •{' '}
                  <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    OZEMPIC (semaglutide) injection — FDA prescribing information, Novo Nordisk (DailyMed)
                  </a>{' '}
                  — indications, boxed warning, contraindications, Table 1 adverse reactions, GI rates, discontinuation rates, titration
                </li>
                <li>
                  •{' '}
                  <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    WEGOVY (semaglutide) injection and tablets — FDA prescribing information, Novo Nordisk (DailyMed)
                  </a>{' '}
                  — indications, Table 3 adverse reactions, severe GI rates, gallbladder, heart rate, pregnancy, discontinuation, titration
                </li>
                <li>
                  •{' '}
                  <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RYBELSUS and OZEMPIC (oral semaglutide) tablets — FDA prescribing information, Novo Nordisk (DailyMed)
                  </a>{' '}
                  — indications, Table 2 adverse reactions, GI rates, CV outcomes trial discontinuation, administration and titration
                </li>
                <li>
                  •{' '}
                  <a href="https://www.novo-pi.com/ozempic.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    OZEMPIC full prescribing information PDF (Novo Nordisk)
                  </a>{' '}
                  — section 2.2 recommended dosage including the 2 mg maximum, section 6.2 postmarketing experience including alopecia
                </li>
                <li>
                  •{' '}
                  <a href="https://www.novo-pi.com/wegovy.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    WEGOVY full prescribing information PDF (Novo Nordisk)
                  </a>{' '}
                  — section 2.2 maintenance dosages including the 7.2 mg weight-reduction option
                </li>
                <li>
                  •{' '}
                  <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    FDA — Medications Containing Semaglutide Marketed for Type 2 Diabetes or Weight Loss
                  </a>
                </li>
                <li>
                  •{' '}
                  <a href="https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    FDA — dosing errors associated with compounded injectable semaglutide products
                  </a>
                </li>
                <li>
                  •{' '}
                  <a href="https://www.wegovy.com/taking-wegovy/side-effects.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Wegovy.com — side effects (Novo Nordisk)
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <div className="mx-auto max-w-4xl px-4 py-8">
            <EmailCaptureCard
              title="Get the GLP-1 Side-Effect Question List"
              description="The questions to ask a prescriber before your first dose, and the symptoms the FDA label says to report."
              source="guide_ozempic_side_effects"
            />
          </div>
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
