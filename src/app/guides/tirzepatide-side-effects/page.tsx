import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/tirzepatide-side-effects';
const REVIEWED = '2026-08-03';

export const metadata: Metadata = {
  title: { absolute: 'Tirzepatide Side Effects (2026): What the FDA Label Says' },
  alternates: { canonical: URL },
  description:
    'Tirzepatide side effects from the FDA label: nausea in 25-29% of Zepbound patients, the thyroid C-cell boxed warning, and when the label says to seek care.',
};

// Questions phrased the way the Bing queries phrase them. Every answer is
// sourced from the FDA-approved prescribing information for MOUNJARO
// (tirzepatide) and ZEPBOUND (tirzepatide), both effective 2026-04-22.
// The visible FAQ block below mirrors this array exactly.
const FAQ_ITEMS = [
  {
    question: 'What are the side effects of tirzepatide?',
    answer:
      'Per the FDA-approved labels, the side effects of tirzepatide are dominated by the gastrointestinal tract. The ZEPBOUND label lists the reactions reported in at least 5% of treated patients as nausea, diarrhea, vomiting, constipation, abdominal pain, dyspepsia, injection site reactions, fatigue, hypersensitivity reactions, eructation (burping), hair loss, and gastroesophageal reflux disease. The MOUNJARO label lists nausea, diarrhea, decreased appetite, vomiting, constipation, dyspepsia, and abdominal pain. Both labels also carry a boxed warning for thyroid C-cell tumors seen in rats, and warnings for pancreatitis, gallbladder disease, kidney injury from dehydration, hypoglycemia, hypersensitivity, and pulmonary aspiration under anesthesia. This is educational information, not medical advice.',
  },
  {
    question: 'What are the most common tirzepatide side effects?',
    answer:
      'Nausea is the most common. In the pooled ZEPBOUND weight-reduction trials, nausea was reported by 25% of patients on 5 mg, 29% on 10 mg, and 28% on 15 mg, versus 8% on placebo. Diarrhea followed at 19-23% versus 8% on placebo, then constipation at 11-17%, vomiting at 8-13%, and abdominal pain and dyspepsia around 9-10% each. In the MOUNJARO placebo-controlled diabetes trials the same reactions appear at lower rates: nausea 12-18%, diarrhea 12-17%, decreased appetite 5-11%, and vomiting 5-9%. Any gastrointestinal reaction was reported by 56% of ZEPBOUND patients versus 30% on placebo.',
  },
  {
    question: 'How long do tirzepatide side effects last?',
    answer:
      'The FDA label does not promise a duration, but it does describe a pattern. Both the MOUNJARO and ZEPBOUND labels state that the majority of nausea, vomiting, and diarrhea events occurred during dose escalation and decreased over time. The labels also state that most patients who stopped the drug because of adverse reactions did so during the first few months of treatment, again driven by gastrointestinal symptoms. That is the reason the label builds in a four-week step at every dose level. How long any individual person has symptoms is a question for the prescriber who is managing the titration.',
  },
  {
    question: 'Does tirzepatide cause thyroid cancer?',
    answer:
      'The boxed warning states that in rats, tirzepatide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures, and that it is unknown whether tirzepatide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans, because the human relevance of the rodent finding has not been determined. The label does not claim the drug causes thyroid cancer in people, and it does not claim it is safe. It draws one firm line: tirzepatide is contraindicated in patients with a personal or family history of MTC and in patients with Multiple Endocrine Neoplasia syndrome type 2. The label also says routine calcitonin monitoring or thyroid ultrasound is of uncertain value for early detection.',
  },
  {
    question: 'What are the serious side effects of tirzepatide and when should I seek care?',
    answer:
      'The labels tell patients to contact a clinician for severe or persistent gastrointestinal symptoms; for severe abdominal pain that may radiate to the back, with or without vomiting, which can signal acute pancreatitis; for signs of gallbladder disease; for persistent nausea, vomiting, or diarrhea that could lead to dehydration and acute kidney injury; for symptoms of a hypersensitivity reaction such as swelling or trouble breathing, which the label says warrants prompt medical attention; and for symptoms of a thyroid tumor such as a lump in the neck, persistent hoarseness, trouble swallowing, or shortness of breath. The label also instructs patients to tell every provider they are taking tirzepatide before any surgery or procedure using general anesthesia or deep sedation.',
  },
  {
    question: 'Do tirzepatide side effects get worse at higher doses?',
    answer:
      'Partly. In the ZEPBOUND label, the rate of any gastrointestinal reaction was the same 56% at 5 mg, 10 mg, and 15 mg, but severe gastrointestinal reactions rose with dose (1.7% at 5 mg, 2.5% at 10 mg, 3.1% at 15 mg, versus 1% on placebo), as did discontinuation for gastrointestinal reasons (1.9%, 3.3%, 4.3%, versus 0.5% on placebo). MOUNJARO shows the same shape: any gastrointestinal reaction rose from 37.1% at 5 mg to 43.6% at 15 mg. The label instructs prescribers to consider a lower maintenance dosage if a patient does not tolerate the current one. Dose decisions belong to the prescriber, not to a web page.',
  },
  {
    question: 'Are compounded tirzepatide side effects the same as Mounjaro or Zepbound?',
    answer:
      'Compounded tirzepatide is not FDA-approved, so it has no FDA-approved label and no FDA safety, effectiveness, or quality review behind it. The FDA has said it received adverse event reports that may be related to patients prescribed compounded semaglutide or tirzepatide in doses beyond what is in the FDA-approved label, including using more product in a single dose, dosing more often, or escalating faster, with some serious events and some patients seeking medical care for nausea, vomiting, diarrhea, abdominal pain, and constipation. The FDA has also warned about fraudulent compounded semaglutide and tirzepatide carrying false label information. Treat the branded label as the reference document and ask the prescriber directly about what a compounded product contains and how to measure the dose.',
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

export default function TirzepatideSideEffects() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tirzepatide Side Effects: FDA Label Data Explained',
    description:
      'The side effects of tirzepatide (Mounjaro and Zepbound) as reported in the FDA-approved prescribing information: the common gastrointestinal reactions with per-dose rates, the thyroid C-cell boxed warning, the labeled warnings and precautions, why the titration schedule exists, and when the label tells patients to seek care.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Tirzepatide',
      alternateName: ['Mounjaro', 'Zepbound'],
      description:
        'A glucose-dependent insulinotropic polypeptide (GIP) receptor and glucagon-like peptide-1 (GLP-1) receptor agonist administered subcutaneously once weekly.',
      activeIngredient: 'tirzepatide',
      administrationRoute: 'Subcutaneous',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: REVIEWED,
    dateModified: REVIEWED,
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'ZEPBOUND (tirzepatide) injection — FDA-approved prescribing information, DailyMed (label effective 2026-04-22)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b',
      },
      {
        '@type': 'CreativeWork',
        name: 'MOUNJARO (tirzepatide) injection — FDA-approved prescribing information, DailyMed (label effective 2026-04-22)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0',
      },
      {
        '@type': 'CreativeWork',
        name: 'ZEPBOUND (tirzepatide) injection — original FDA approval label, accessdata.fda.gov',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'MOUNJARO (tirzepatide) injection — original FDA approval label, accessdata.fda.gov',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — Concerns with Unapproved GLP-1 Drugs Used for Weight Loss',
        url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — Alerts about dosing errors associated with compounded injectable semaglutide products',
        url: 'https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-patients-dosing-errors-associated-compounded',
      },
      {
        '@type': 'CreativeWork',
        name: 'Zepbound (tirzepatide) official product site — Eli Lilly and Company',
        url: 'https://www.zepbound.lilly.com/side-effects',
      },
      {
        '@type': 'CreativeWork',
        name: 'Mounjaro (tirzepatide) official product site — Eli Lilly and Company',
        url: 'https://www.mounjaro.com/',
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
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Tirzepatide Side Effects</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Weight Loss &amp; GLP-1 Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Medication Safety
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tirzepatide Side Effects: The FDA Label Data, Explained
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Most of what you read about tirzepatide side effects is a forum post. This page is the
              FDA-approved prescribing information for Mounjaro and Zepbound, read line by line, with
              the actual per-dose numbers the label reports.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Tirzepatide side effects are mostly gastrointestinal. In the pooled Zepbound trials
                the FDA label reports <strong>nausea in 25-29%</strong>, <strong>diarrhea in 19-23%</strong>,{' '}
                <strong>constipation in 11-17%</strong>, and <strong>vomiting in 8-13%</strong> of
                patients, versus 8%, 8%, 5%, and 2% on placebo. Tirzepatide also carries a{' '}
                <strong>boxed warning</strong> for thyroid C-cell tumors seen in rats. This is
                educational information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 • 13 min read • Sourced from the FDA labels effective 2026-04-22
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Common (label: &ge;5% of patients)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Nausea, diarrhea, vomiting, constipation</li>
                  <li>• Abdominal pain, dyspepsia, burping, reflux</li>
                  <li>• Injection site reactions, fatigue</li>
                  <li>• Hypersensitivity reactions, hair loss</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Serious (label warnings)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Thyroid C-cell tumors (boxed warning, rats)</li>
                  <li>• Acute pancreatitis, acute gallbladder disease</li>
                  <li>• Kidney injury from dehydration</li>
                  <li>• Hypoglycemia with insulin or a sulfonylurea</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">What the label says is expected:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• GI symptoms, concentrated during dose escalation</li>
                  <li>• Symptoms that decrease over time per the label</li>
                  <li>• A four-week step built into every dose increase</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">What the label says to escalate:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Severe abdominal pain radiating to the back</li>
                  <li>• Persistent vomiting or diarrhea (dehydration)</li>
                  <li>• A neck lump, hoarseness, trouble swallowing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-are" className="text-blue-600 hover:underline">1. What are the side effects of tirzepatide?</a></li>
              <li><a href="#common" className="text-blue-600 hover:underline">2. The most common tirzepatide side effects, by dose</a></li>
              <li><a href="#mounjaro-table" className="text-blue-600 hover:underline">3. Mounjaro side effects in the diabetes trials</a></li>
              <li><a href="#boxed" className="text-blue-600 hover:underline">4. The boxed warning: thyroid C-cell tumors</a></li>
              <li><a href="#warnings" className="text-blue-600 hover:underline">5. Serious tirzepatide side effects the label warns about</a></li>
              <li><a href="#titration" className="text-blue-600 hover:underline">6. Why titration reduces GI side effects</a></li>
              <li><a href="#seek-care" className="text-blue-600 hover:underline">7. When the label says to seek medical care</a></li>
              <li><a href="#mounjaro-vs-zepbound" className="text-blue-600 hover:underline">8. Mounjaro vs Zepbound: same molecule, different label</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">9. Compounded tirzepatide has no FDA label</a></li>
              <li><a href="#discuss" className="text-blue-600 hover:underline">10. How to bring side effects to your prescriber</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Tirzepatide is the active ingredient in two FDA-approved medicines from Eli Lilly:{' '}
              <strong>Mounjaro</strong>, approved to improve glycemic control in adults and pediatric
              patients 10 years and older with type 2 diabetes, and <strong>Zepbound</strong>,
              approved for chronic weight management in adults with obesity or overweight with a
              weight-related condition, and for moderate to severe obstructive sleep apnea in adults
              with obesity. Both carry the same molecule and, unsurprisingly, the same safety
              architecture. Everything below is what those two labels actually report, with the
              numbers copied rather than rounded into vibes.
            </p>

            <h2 id="what-are" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Are the Side Effects of Tirzepatide?</h2>

            <p className="text-gray-700 mb-4">
              The FDA label organizes side effects into three tiers, and it is worth understanding the
              difference before reading a single percentage.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The boxed warning</strong> sits at the top of the label. It is the strongest warning the FDA applies, and for tirzepatide it concerns thyroid C-cell tumors observed in rats.</li>
              <li><strong>Warnings and precautions</strong> are the serious but less-common risks a prescriber monitors for: pancreatitis, gallbladder disease, kidney injury, hypoglycemia, hypersensitivity, diabetic retinopathy complications, and pulmonary aspiration during anesthesia.</li>
              <li><strong>Adverse reactions</strong> are the common, mostly tolerable symptoms measured in the clinical trials, reported with per-dose percentages against placebo.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The ZEPBOUND label summarizes the common tier this way: the most common adverse
              reactions reported in <strong>&ge;5% of patients</strong> are nausea, diarrhea, vomiting,
              constipation, abdominal pain, dyspepsia, injection site reactions, fatigue,
              hypersensitivity reactions, eructation, hair loss, and gastroesophageal reflux disease.
              The MOUNJARO label lists a shorter set for its diabetes population: nausea, diarrhea,
              decreased appetite, vomiting, constipation, dyspepsia, and abdominal pain.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The one-sentence version:</strong> tirzepatide side effects are
                gastrointestinal first, dose-escalation-weighted, and mostly reported as decreasing
                over time, sitting on top of a small set of serious risks that the label tells
                prescribers to actively watch for.
              </p>
            </div>

            <h2 id="common" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Most Common Tirzepatide Side Effects, by Dose</h2>

            <p className="text-gray-700 mb-4">
              The table below is <strong>Table 1 from the ZEPBOUND prescribing information</strong>:
              adverse reactions occurring in at least 2% of patients and more often than placebo, in
              the pooled weight-reduction trials (Study 1 and Study 2) that treated 2,519 adults for
              up to 72 weeks. These are trial rates, not predictions about any individual person.
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
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dyspepsia (indigestion)</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">10%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Injection site reactions</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">6%</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Fatigue</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">6%</td>
                    <td className="border border-gray-300 px-4 py-3">7%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hypersensitivity reactions</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Eructation (burping)</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hair loss</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Gastroesophageal reflux disease</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dizziness</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Flatulence</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal distension</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hypotension (low blood pressure)</td>
                    <td className="border border-gray-300 px-4 py-3">0%</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Four things stand out when you read the column headers instead of the headline.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Placebo is not zero.</strong> 8% of placebo patients reported nausea and 8% reported diarrhea. Part of what people attribute to the drug happens in trials without the drug.</li>
              <li><strong>Constipation runs the other way.</strong> It is the one common reaction that was <em>higher</em> at 5 mg (17%) than at 15 mg (11%) in this pool.</li>
              <li><strong>Any GI reaction was 56%</strong> at every maintenance dose (5 mg, 10 mg, 15 mg) versus 30% on placebo. The overall rate did not climb with dose.</li>
              <li><strong>Severity did climb with dose.</strong> Severe GI reactions were 1.7% at 5 mg, 2.5% at 10 mg, and 3.1% at 15 mg, versus 1% on placebo.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The label also records how many people left the trials. Across Studies 1 and 2,{' '}
              <strong>4.8%, 6.3%, and 6.7%</strong> of patients on 5 mg, 10 mg, and 15 mg permanently
              discontinued because of adverse reactions, versus <strong>3.4%</strong> on placebo, and
              the label notes the majority did so during the first few months, driven by GI symptoms.
              Discontinuation specifically for GI reasons was 1.9%, 3.3%, and 4.3% versus 0.5% on placebo.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Hair loss is in the label, and it is asymmetric</h4>
              <p className="text-gray-700">
                The ZEPBOUND label reports hair loss in <strong>7.1% of female</strong> and{' '}
                <strong>0.5% of male</strong> treated patients (placebo: 1.3% female, 0% male), and
                states these events were associated with weight reduction. No treated patient
                discontinued because of it. If you are tracking body composition alongside a GLP-1,
                our guide on{' '}
                <Link href="/guides/glp1-and-muscle-loss" className="text-blue-600 hover:underline">GLP-1 and muscle loss</Link>{' '}
                covers the lean-mass side of rapid weight reduction.
              </p>
            </div>

            <h2 id="mounjaro-table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mounjaro Side Effects in the Diabetes Trials</h2>

            <p className="text-gray-700 mb-4">
              Same molecule, different population, different numbers. The table below is{' '}
              <strong>Table 1 from the MOUNJARO prescribing information</strong>, drawn from two
              placebo-controlled type 2 diabetes trials (SURPASS-1 monotherapy and SURPASS-5 with
              basal insulin), covering 718 patients with a mean exposure of 36.6 weeks. Only
              reactions reported in at least 5% of Mounjaro-treated patients appear.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Adverse reaction</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Placebo (N=235)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">5 mg (N=237)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">10 mg (N=240)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">15 mg (N=241)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nausea</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">12%</td>
                    <td className="border border-gray-300 px-4 py-3">15%</td>
                    <td className="border border-gray-300 px-4 py-3">18%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diarrhea</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                    <td className="border border-gray-300 px-4 py-3">12%</td>
                    <td className="border border-gray-300 px-4 py-3">13%</td>
                    <td className="border border-gray-300 px-4 py-3">17%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Decreased appetite</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">10%</td>
                    <td className="border border-gray-300 px-4 py-3">11%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vomiting</td>
                    <td className="border border-gray-300 px-4 py-3">2%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">9%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Constipation</td>
                    <td className="border border-gray-300 px-4 py-3">1%</td>
                    <td className="border border-gray-300 px-4 py-3">6%</td>
                    <td className="border border-gray-300 px-4 py-3">6%</td>
                    <td className="border border-gray-300 px-4 py-3">7%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dyspepsia</td>
                    <td className="border border-gray-300 px-4 py-3">3%</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">8%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal pain</td>
                    <td className="border border-gray-300 px-4 py-3">4%</td>
                    <td className="border border-gray-300 px-4 py-3">6%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                    <td className="border border-gray-300 px-4 py-3">5%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The Mounjaro rates are consistently lower than the Zepbound rates. Do not read that as
              Mounjaro being a gentler drug. The label itself says adverse reaction rates from
              different trials cannot be directly compared, and these are different populations,
              different trial designs, and different durations. In the Mounjaro pool, any GI reaction
              rose from <strong>37.1% at 5 mg to 39.6% at 10 mg to 43.6% at 15 mg</strong>, versus
              20.4% on placebo, and discontinuation for GI reasons was 3.0%, 5.4%, and 6.6% versus 0.4%.
            </p>

            <p className="text-gray-700 mb-4">
              If you are weighing tirzepatide against semaglutide rather than against nothing, the
              side-effect profiles rhyme but are not identical. See our companion pages on{' '}
              <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic side effects</Link>{' '}
              and{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide</Link>.
            </p>

            <h2 id="boxed" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Boxed Warning: Thyroid C-Cell Tumors</h2>

            <p className="text-gray-700 mb-4">
              Both tirzepatide labels open with the same boxed warning. Quoting the ZEPBOUND label
              directly: &quot;In rats, tirzepatide causes dose-dependent and treatment-duration-dependent
              thyroid C-cell tumors at clinically relevant exposures. It is unknown whether ZEPBOUND
              causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans as
              human relevance of tirzepatide-induced rodent thyroid C-cell tumors has not been
              determined.&quot;
            </p>

            <p className="text-gray-700 mb-4">
              Read that carefully, because both halves matter. The rodent finding is real, dose-related,
              and duration-related. The human relevance is <em>undetermined</em>. The label does not
              say tirzepatide causes thyroid cancer in people, and it does not say it is safe. It
              leaves the question open and then acts conservatively.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The contraindication the boxed warning creates</h4>
              <p className="text-gray-700">
                Tirzepatide is <strong>contraindicated</strong> in patients with a personal or family
                history of medullary thyroid carcinoma and in patients with Multiple Endocrine
                Neoplasia syndrome type 2 (MEN 2). It is also contraindicated in patients with known
                serious hypersensitivity to tirzepatide or any excipient. These are not cautions.
                They are the label saying do not use this drug in these people.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The label also instructs prescribers to counsel patients on the symptoms of thyroid
              tumors: <strong>a mass in the neck, difficulty swallowing (dysphagia), shortness of
              breath (dyspnea), and persistent hoarseness</strong>. And it makes a point that gets
              lost in consumer coverage: routine monitoring of serum calcitonin or thyroid ultrasound
              is <strong>of uncertain value</strong> for early detection here, because calcitonin has
              low test specificity and thyroid disease has a high background incidence. Routine
              screening can generate unnecessary procedures. That is a label instruction, not an
              opinion, and it is worth raising if a clinic sells you a monitoring add-on.
            </p>

            <h2 id="warnings" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Serious Tirzepatide Side Effects the Label Warns About</h2>

            <p className="text-gray-700 mb-4">
              Below the boxed warning sits Section 5, Warnings and Precautions. These are the events
              a prescriber is supposed to actively monitor for. Where the label reports a rate from
              the pooled Zepbound weight-reduction trials, it is included.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labeled warning</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the label reports</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the label instructs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Severe GI adverse reactions</td>
                    <td className="border border-gray-300 px-4 py-3">Severe events in 1.7% / 2.5% / 3.1% (5 / 10 / 15 mg) vs 1% placebo</td>
                    <td className="border border-gray-300 px-4 py-3">Not recommended in patients with severe gastroparesis</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Acute pancreatitis</td>
                    <td className="border border-gray-300 px-4 py-3">Adjudication-confirmed in 0.2% on Zepbound vs 0.2% placebo (Studies 1 and 2)</td>
                    <td className="border border-gray-300 px-4 py-3">Discontinue if pancreatitis is suspected; watch for severe abdominal pain radiating to the back</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Acute gallbladder disease</td>
                    <td className="border border-gray-300 px-4 py-3">Cholelithiasis 1.1% vs 1%; cholecystitis 0.7% vs 0.2%; cholecystectomy 0.2% vs 0%</td>
                    <td className="border border-gray-300 px-4 py-3">Gallbladder studies and clinical follow-up if cholecystitis is suspected</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Acute kidney injury from volume depletion</td>
                    <td className="border border-gray-300 px-4 py-3">Reported in 0.5% on Zepbound vs 0.2% placebo; postmarketing cases have required hemodialysis</td>
                    <td className="border border-gray-300 px-4 py-3">Monitor renal function in patients reporting reactions that could cause dehydration, especially during initiation and escalation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hypoglycemia with insulin or a secretagogue</td>
                    <td className="border border-gray-300 px-4 py-3">Plasma glucose &lt;54 mg/dL in 4.2% vs 1.3% placebo in the type 2 diabetes trial; 10.3% when combined with a sulfonylurea vs 2.1% without</td>
                    <td className="border border-gray-300 px-4 py-3">Reducing the insulin or sulfonylurea dose may be necessary; educate all patients on hypoglycemia signs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hypersensitivity reactions</td>
                    <td className="border border-gray-300 px-4 py-3">Immediate reactions in 2.1% vs 0.4% placebo; severe reactions in 0.1% vs 0%; anaphylaxis and angioedema reported postmarketing</td>
                    <td className="border border-gray-300 px-4 py-3">Discontinue and seek medical attention promptly if suspected</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diabetic retinopathy complications</td>
                    <td className="border border-gray-300 px-4 py-3">Rapid glucose improvement has been associated with temporary worsening; tirzepatide has not been studied in several advanced retinopathy states</td>
                    <td className="border border-gray-300 px-4 py-3">Monitor patients with a history of diabetic retinopathy for progression</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pulmonary aspiration under anesthesia</td>
                    <td className="border border-gray-300 px-4 py-3">Rare postmarketing reports of residual gastric contents despite reported fasting adherence</td>
                    <td className="border border-gray-300 px-4 py-3">Instruct patients to tell providers before any planned surgery or procedure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Two of these deserve a second look. The <strong>retinopathy line is a caveat, not a
              measured risk</strong>: the label says tirzepatide has not been studied in patients
              with non-proliferative diabetic retinopathy requiring acute therapy, proliferative
              diabetic retinopathy, or diabetic macular edema. The absence of data is the warning.
              And the <strong>pancreatitis numbers are equal to placebo</strong> in the pooled weight
              trials (0.2% vs 0.2%), which is why the label frames pancreatitis as something to
              recognize and act on rather than something the trials showed the drug clearly causes.
            </p>

            <p className="text-gray-700 mb-4">
              The label also carries a postmarketing section, where events are reported voluntarily
              and frequency cannot be reliably estimated. For tirzepatide it lists acute pancreatitis
              including hemorrhagic and necrotizing pancreatitis sometimes resulting in death; ileus,
              intestinal obstruction, and severe constipation including fecal impaction; anaphylaxis
              and angioedema; pulmonary aspiration; and acute renal failure or worsening chronic renal
              failure sometimes requiring hemodialysis.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Two smaller findings worth knowing:</strong> the label reports a mean heart
                rate increase of <strong>1 to 3 beats per minute</strong> versus no increase on
                placebo, and mean increases from baseline in pancreatic amylase of 20-25% and lipase
                of 28-35%. The label states the clinical significance of those enzyme elevations is
                unknown in the absence of other signs of pancreatitis, which is a useful thing to
                know before an out-of-range lab result sends you into a spiral.
              </p>
            </div>

            <h2 id="titration" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Titration Reduces GI Side Effects</h2>

            <p className="text-gray-700 mb-4">
              The dose-escalation schedule is not a marketing artifact. The FDA label states its
              purpose explicitly: follow the dosage escalation <strong>&quot;to reduce the risk of
              gastrointestinal adverse reactions.&quot;</strong> That sentence appears in both the
              Mounjaro and Zepbound labels, cross-referenced to the severe-GI warning.
            </p>

            <p className="text-gray-700 mb-4">
              The evidence sitting under it is the timing pattern in the adverse-reactions section:
              the majority of nausea, vomiting, and diarrhea events occurred <strong>during dose
              escalation and decreased over time</strong>, and most discontinuations happened in the
              first few months. The schedule spends four weeks at every rung so the gut adapts before
              the exposure rises again.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the FDA label specifies</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mounjaro (type 2 diabetes)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Zepbound (weight management / OSA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Starting dosage</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg subcutaneously once weekly</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg subcutaneously once weekly for 4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Is the starting dose a treatment dose?</td>
                    <td className="border border-gray-300 px-4 py-3">No. The label says 2.5 mg is for initiation and is not intended for glycemic control</td>
                    <td className="border border-gray-300 px-4 py-3">No. The label says 2.5 mg is for initiation and is not approved as a maintenance dosage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">First increase</td>
                    <td className="border border-gray-300 px-4 py-3">To 5 mg once weekly after 4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">To 5 mg once weekly after 4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Subsequent increases</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg increments after at least 4 weeks on the current dose</td>
                    <td className="border border-gray-300 px-4 py-3">2.5 mg increments after at least 4 weeks on the current dose</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maintenance dosages</td>
                    <td className="border border-gray-300 px-4 py-3">Determined by the prescriber based on glycemic control</td>
                    <td className="border border-gray-300 px-4 py-3">5, 10, or 15 mg (weight); 10 or 15 mg (OSA)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum dosage</td>
                    <td className="border border-gray-300 px-4 py-3">15 mg weekly in adults; 10 mg weekly in patients 10 years and older</td>
                    <td className="border border-gray-300 px-4 py-3">15 mg weekly</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">If a dose is not tolerated</td>
                    <td className="border border-gray-300 px-4 py-3">Prescriber decision; the label ties escalation to tolerability</td>
                    <td className="border border-gray-300 px-4 py-3">The label says consider a lower maintenance dosage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              This table is <strong>educational reporting of what the FDA label specifies</strong>. It
              is not a plan. Your prescriber determines your dose, your escalation timing, and whether
              you hold or step down, based on your clinical picture. Do not start, change, stack, or
              convert doses on your own, and do not translate a dose from one GLP-1 medicine to
              another. For the full schedule read in detail, see our{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
              and, for the semaglutide equivalent, the{' '}
              <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">semaglutide dosing guide</Link>.
            </p>

            <h2 id="seek-care" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When the Label Says to Seek Medical Care</h2>

            <p className="text-gray-700 mb-4">
              Section 17 of the label is patient counseling information: the specific things a
              prescriber is instructed to tell you to report. This is the most practically useful part
              of the entire document, and almost nobody reads it. Condensed:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Severe or persistent gastrointestinal symptoms.</strong> Contact your provider. This is the line that separates expected nausea from a problem.</li>
              <li><strong>Severe abdominal pain that may radiate to the back,</strong> with or without nausea or vomiting. The label instructs patients to discontinue promptly and contact their provider because this can indicate acute pancreatitis.</li>
              <li><strong>Persistent or extended nausea, vomiting, or diarrhea.</strong> Report promptly; the label ties dehydration from these symptoms to acute kidney injury and tells patients to take precautions to avoid fluid depletion.</li>
              <li><strong>Suspected gallbladder disease.</strong> Contact your provider for clinical follow-up.</li>
              <li><strong>Symptoms of a hypersensitivity reaction.</strong> Stop the medicine and seek medical advice promptly.</li>
              <li><strong>Symptoms of a thyroid tumor:</strong> a lump in the neck, persistent hoarseness, trouble swallowing, or shortness of breath. Report to your provider.</li>
              <li><strong>Signs of low blood sugar,</strong> especially if you also take insulin or a sulfonylurea. The label tells prescribers to educate every patient on these signs.</li>
              <li><strong>Any planned surgery or procedure.</strong> Tell the provider you are taking tirzepatide, because of the pulmonary aspiration reports under general anesthesia or deep sedation.</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">This list is a reading of the label, not triage advice</h4>
              <p className="text-gray-700">
                Nothing on this page can tell you whether your symptom is the expected kind or the
                serious kind. If something feels wrong, contact your prescriber or seek care. For a
                possible emergency, call 911 or go to an emergency department.
              </p>
            </div>

            <h2 id="mounjaro-vs-zepbound" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mounjaro vs Zepbound: Same Molecule, Different Label</h2>

            <p className="text-gray-700 mb-4">
              This confuses people constantly, so state it plainly. Mounjaro and Zepbound both contain
              tirzepatide. They are approved for different things.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mounjaro is approved for type 2 diabetes</strong> — as an adjunct to diet and exercise to improve glycemic control in adults and pediatric patients 10 years and older. It is <strong>not</strong> approved for weight loss. Prescribing Mounjaro for weight loss is <strong>off-label prescribing</strong>, a legal practice of medicine decision that a licensed clinician makes, but it is not an FDA-approved use.</li>
              <li><strong>Zepbound is approved for chronic weight management</strong> in adults with obesity, or overweight with at least one weight-related condition, in combination with a reduced-calorie diet and increased physical activity, and for <strong>moderate to severe obstructive sleep apnea</strong> in adults with obesity.</li>
              <li>Both labels state that <strong>coadministration with other tirzepatide-containing products or with any GLP-1 receptor agonist is not recommended</strong>. Stacking is a labeled negative, not a strategy.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The same drug/indication distinction applies across the class. Ozempic (semaglutide
              injection) and Rybelsus (oral semaglutide) are approved for type 2 diabetes; Wegovy
              (semaglutide injection) is approved for chronic weight management and cardiovascular
              risk reduction; Victoza (liraglutide) is approved for type 2 diabetes while Saxenda
              (liraglutide) is approved for weight management. Our{' '}
              <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>{' '}
              maps every approved product to its actual indication, and the{' '}
              <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link>{' '}
              covers the oral options. For the semaglutide brand-versus-brand version of this
              question, see{' '}
              <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic</Link>.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Compounded Tirzepatide Has No FDA Label</h2>

            <p className="text-gray-700 mb-4">
              Every number on this page comes from an FDA-approved label. Compounded tirzepatide does
              not have one. <strong>Compounded versions of tirzepatide and semaglutide are not
              FDA-approved</strong>, which means they have not gone through FDA review for safety,
              effectiveness, or quality before being marketed. The safety data above describes the
              branded products that were studied. It does not transfer to an unapproved copy.
            </p>

            <p className="text-gray-700 mb-4">
              The FDA has been specific about what goes wrong. The agency has stated it received{' '}
              <strong>multiple reports of adverse events, some requiring hospitalization, that may be
              related to dosing errors with compounded injectable semaglutide products</strong>, where
              patients measured and self-administered incorrect doses or health care professionals
              miscalculated doses. The FDA has also said it received adverse event reports that may
              relate to patients prescribed compounded semaglutide or tirzepatide{' '}
              <strong>in doses beyond what is in the FDA-approved label</strong> — more product in a
              single dose, more frequent dosing, or faster titration — with some serious events, and
              patients seeking medical attention for nausea, vomiting, diarrhea, abdominal pain, and
              constipation. Separately, the FDA has warned about <strong>fraudulent compounded
              semaglutide and tirzepatide</strong> carrying false label information, including
              pharmacy names that do not exist.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The practical read</h4>
              <p className="text-gray-700">
                If you are prescribed a compounded product, the FDA advises talking to your provider
                or the compounder about how to measure and administer the intended dose, and treats
                deep discounts, no prescriber screening, and packaging that looks different from what
                you received before as red flags. Our guide to{' '}
                <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide</Link>{' '}
                covers the legal status of compounding in more depth.
              </p>
            </div>

            <h2 id="discuss" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Bring Side Effects to Your Prescriber</h2>

            <p className="text-gray-700 mb-4">
              Side effects are a clinical conversation, and the quality of that conversation depends
              on what you bring to it. A few things that make it more useful:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Log the timing against the dose.</strong> The label&apos;s whole model is that symptoms cluster around escalation. Noting which week of which dose a symptom started tells your prescriber something a general complaint does not.</li>
              <li><strong>Separate severity from presence.</strong> The label distinguishes common GI reactions from <em>severe</em> GI reactions, and only the second category drove most discontinuations. Describe intensity and whether you can eat and drink normally.</li>
              <li><strong>List every other medication.</strong> Hypoglycemia risk changes materially if you take insulin or a sulfonylurea; the label reports 10.3% versus 2.1% on that split.</li>
              <li><strong>Flag any planned procedure.</strong> The label tells you to disclose tirzepatide before general anesthesia or deep sedation.</li>
              <li><strong>Ask what a dose hold looks like.</strong> The Zepbound label tells prescribers to consider a lower maintenance dosage if the current one is not tolerated. Whether that applies to you is their call.</li>
              <li><strong>Ask about program monitoring.</strong> A cash-pay program that includes provider access and follow-up is structurally different from one that ships a vial. Our comparison of the{' '}
                <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">best GLP-1 weight loss programs</Link>{' '}
                looks at what each actually includes.
              </li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related GLP-1 guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cost:</strong> verified cash-pay program pricing in our <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link> and <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link></li>
              <li><strong>Lowest price:</strong> <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">the cheapest GLP-1 without insurance</Link>, across both molecules</li>
              <li><strong>Other options:</strong> <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives</Link> covers the non-tirzepatide routes</li>
              <li><strong>Directory:</strong> browse cash-pay clinics on the <Link href="/weight-loss" className="text-blue-600 hover:underline">weight loss and GLP-1 directory</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay GLP-1 Programs</h3>
            <p className="mb-6 text-blue-100">
              Verified monthly prices, what each program includes, and which ones wrap real clinical
              monitoring around the prescription.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Weight Loss Clinics
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
              This guide is for educational purposes only. It is not medical advice, and it is not a
              substitute for a consultation with a licensed clinician. Every side-effect rate,
              warning, contraindication, and dosing statement above is reported from the FDA-approved
              prescribing information for MOUNJARO (tirzepatide) and ZEPBOUND (tirzepatide) and is
              presented as educational reporting of what those labels specify. Clinical trial rates
              cannot be directly compared across drugs and may not reflect rates seen in practice.
              Only a licensed prescriber can determine whether tirzepatide is appropriate for you,
              what dose to use, and when to change or stop it. Do not start, stop, change, stack, or
              convert a dose based on this page. Mounjaro is approved for type 2 diabetes and is not
              approved for weight loss; Zepbound is approved for chronic weight management and
              obstructive sleep apnea. Compounded tirzepatide and semaglutide are not FDA-approved.
              VitalityScout is not affiliated with Eli Lilly and Company. If you experience a serious
              symptom, contact your clinician; in an emergency, call 911.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• ZEPBOUND (tirzepatide) injection, FDA-approved prescribing information — DailyMed, label effective 2026-04-22 (boxed warning, contraindications, warnings and precautions, Table 1 adverse reactions, dose escalation)</li>
              <li>• MOUNJARO (tirzepatide) injection, FDA-approved prescribing information — DailyMed, label effective 2026-04-22 (indications, Table 1 adverse reactions, GI discontinuation rates, dose escalation)</li>
              <li>• ZEPBOUND original approval label — accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf</li>
              <li>• MOUNJARO original approval label — accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf</li>
              <li>• FDA — FDA&apos;s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss (compounded dosing concerns, fraudulent compounded products, telehealth red flags)</li>
              <li>• FDA — alerts on dosing errors associated with compounded injectable semaglutide products</li>
              <li>• Eli Lilly and Company — zepbound.lilly.com and mounjaro.com (official product information)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Side Effect and Cost Cheat Sheet"
            description="The label-sourced side effect table, the questions to ask a prescriber, and verified cash-pay program prices."
            source="guide_tirzepatide_side_effects"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
