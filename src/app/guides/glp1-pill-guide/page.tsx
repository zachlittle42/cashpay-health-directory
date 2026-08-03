import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/glp1-pill-guide';
const REVIEWED = '2026-08-03';

export const metadata: Metadata = {
  title: { absolute: 'GLP-1 Pills (2026): Every FDA-Approved Oral Option' },
  alternates: { canonical: URL },
  description:
    'Four GLP-1 pills are FDA approved: Ozempic tablets and Rybelsus for type 2 diabetes, the Wegovy pill and Foundayo for weight. Label doses, rules, cash prices.',
};

// Questions phrased the way people actually search them (Bing head terms:
// "glp 1 pill", "semaglutide tablets", "rybelsus", "oral semaglutide",
// "ozempic pill"). Every answer is drawn only from facts stated on this page
// and sourced to an FDA label, a DailyMed label, or a manufacturer page.
const FAQ_ITEMS = [
  {
    question: 'Is there a GLP-1 pill?',
    answer:
      'Yes. As of August 2026 there are four FDA-approved GLP-1 pills in the United States. For type 2 diabetes: Ozempic (semaglutide) tablets in 1.5 mg, 4 mg and 9 mg, and Rybelsus (semaglutide) tablets in 3 mg, 7 mg and 14 mg — both share one FDA label. For chronic weight management: Wegovy (semaglutide) tablets, approved December 22, 2025, and Foundayo (orforglipron) tablets, approved April 2026. The diabetes tablets and the weight-management tablets are not interchangeable, and each is approved only for the indication on its own label. A licensed prescriber decides which, if any, is appropriate.',
  },
  {
    question: 'Is Ozempic available in pill form?',
    answer:
      'Yes, but only for type 2 diabetes. Novo Nordisk now markets Ozempic (semaglutide) tablets in 1.5 mg, 4 mg and 9 mg strengths, which became available in US pharmacies on May 4, 2026. The FDA label indicates Ozempic tablets as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes, and to reduce the risk of major adverse cardiovascular events in adults with type 2 diabetes at high risk. Ozempic tablets are not approved for weight loss. The FDA-approved semaglutide pill for weight management is the Wegovy tablet, which is a different product at a different dose.',
  },
  {
    question: 'What is Rybelsus and how is it different from the Ozempic pill?',
    answer:
      'Rybelsus is oral semaglutide in 3 mg, 7 mg and 14 mg tablets, approved for type 2 diabetes. Ozempic tablets are a reformulation of the same molecule at 1.5 mg, 4 mg and 9 mg, designed to reach comparable drug exposure at a lower milligram number. Both appear on the same FDA prescribing information, carry the same boxed warning for thyroid C-cell tumors, and have the same type 2 diabetes indication. Novo Nordisk has said Rybelsus patients should keep taking their medication as directed and discuss transitioning to the Ozempic pill with their clinician. Neither is approved for weight loss.',
  },
  {
    question: 'Are there semaglutide tablets for weight loss?',
    answer:
      'Yes. The FDA approved Wegovy (semaglutide) tablets on December 22, 2025, the first oral GLP-1 approved for weight management. Per the label, Wegovy tablets are indicated with a reduced-calorie diet and increased physical activity to reduce excess body weight and maintain weight reduction long term in adults with obesity, or in adults with overweight plus at least one weight-related comorbid condition, and to reduce the risk of major adverse cardiovascular events in adults with established cardiovascular disease and either obesity or overweight. In the 64-week pivotal trial in the label, the tablet group lost 13.6% of body weight versus 2.4% on placebo in the intention-to-treat analysis.',
  },
  {
    question: 'How do you take oral semaglutide?',
    answer:
      'The FDA label for both the Wegovy tablet and the Ozempic/Rybelsus tablets specifies the same rules, and they are strict because the tablet is absorbed in the stomach with the help of an absorption enhancer called SNAC. Take one tablet orally once daily on an empty stomach in the morning with water, up to 4 ounces, and no other liquid. Swallow it whole; do not split, crush, chew or dissolve it. Then wait at least 30 minutes before eating food, drinking any beverage, or taking other oral medications. Do not take more than one tablet per day. Foundayo (orforglipron) is different: its label says it can be taken with or without food at any time of day.',
  },
  {
    question: 'How much does a GLP-1 pill cost without insurance?',
    answer:
      'Manufacturer self-pay pricing is published. Novo Nordisk\'s NovoCare price guide lists the Ozempic pill at $149/month for 1.5 mg, $199/month for 4 mg and $299/month for 9 mg. The same source lists the Wegovy pill at $149/month for the 1.5 mg and 4 mg starting doses (the 4 mg offer runs through August 31, 2026, then $199/month) and $299/month for 9 mg and the 25 mg maintenance dose. Eli Lilly lists Foundayo self-pay from $149/month for the lowest dose through LillyDirect. These are manufacturer prices that change and carry eligibility conditions. Verify the current price before you commit.',
  },
  {
    question: 'Is compounded oral semaglutide safe or FDA approved?',
    answer:
      'Compounded semaglutide, including oral drops, troches and tablets sold by some telehealth sellers, is not FDA approved. FDA states plainly that compounded drugs do not undergo its review for safety, effectiveness or quality before marketing. FDA has reported adverse events that may relate to dosing errors with compounded semaglutide, some requiring hospitalization, and adverse events tied to doses beyond what the approved label allows. FDA has also said semaglutide salt forms such as semaglutide sodium and semaglutide acetate are different active ingredients from the approved drug and that it is not aware of any lawful basis for their use in compounding. As of May 31, 2026, FDA had received 990 adverse event reports associated with compounded semaglutide. Discuss any compounded product with a licensed clinician.',
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

export default function Glp1PillGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'GLP-1 Pills: Every FDA-Approved Oral Option Explained',
    description:
      'The FDA-approved GLP-1 pills in 2026 — Ozempic tablets and Rybelsus for type 2 diabetes, the Wegovy tablet and Foundayo (orforglipron) for chronic weight management — with label indications, the dosing schedules the label specifies, the empty-stomach rules for oral semaglutide, published self-pay prices, and what FDA says about compounded oral semaglutide.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: [
      { '@type': 'Drug', name: 'Semaglutide tablets (Ozempic tablets, Rybelsus)', activeIngredient: 'semaglutide' },
      { '@type': 'Drug', name: 'Wegovy (semaglutide) tablets', activeIngredient: 'semaglutide' },
      { '@type': 'Drug', name: 'Foundayo (orforglipron) tablets', activeIngredient: 'orforglipron' },
    ],
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: REVIEWED,
    dateModified: REVIEWED,
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'FDA Prescribing Information — WEGOVY (semaglutide) injection and WEGOVY (semaglutide) tablets',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/218316Orig1s000lbl.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'DailyMed — RYBELSUS and OZEMPIC (semaglutide) tablets, for oral use (Novo Nordisk)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98',
      },
      {
        '@type': 'CreativeWork',
        name: 'DailyMed — FOUNDAYO (orforglipron) tablets, for oral use (Eli Lilly and Company)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62',
      },
      {
        '@type': 'CreativeWork',
        name: 'FDA — FDA’s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss',
        url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
      },
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk — Wegovy pill FDA approval company announcement',
        url: 'https://www.novonordisk.com/content/nncorp/global/en/news-and-media/news-and-ir-materials/news-details.html?id=916472',
      },
      {
        '@type': 'CreativeWork',
        name: 'NovoCare — Wegovy price guide (self-pay pricing, pill and pen)',
        url: 'https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Wegovy_Price_Guide.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'NovoCare — Ozempic pill and pen price guide (self-pay pricing)',
        url: 'https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Ozempic_Price_Guide.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'Eli Lilly — FDA approves Lilly’s Foundayo (orforglipron)',
        url: 'https://www.prnewswire.com/news-releases/fda-approves-lillys-foundayo-orforglipron-the-only-glp-1-pill-for-weight-loss-that-can-be-taken-any-time-of-day-without-food-or-water-restrictions-302731485.html',
      },
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk — Ozempic pill available in the US (availability and self-pay pricing)',
        url: 'https://www.prnewswire.com/news-releases/novo-nordisks-ozempic-pill-the-only-fda-approved-oral-peptide-glp-1-medication-for-adults-with-type-2-diabetes-soon-to-be-available-in-the-us-302760106.html',
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
              <span className="text-gray-900">GLP-1 Pills</span>
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
              GLP-1 Pills: The Oral Options, Explained
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The GLP-1 pill is no longer a single product with a single label. Four oral GLP-1s are
              FDA approved, they are approved for two different things, and the rules for taking them
              are not the same. Here is the accurate map.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Four GLP-1 pills are FDA approved. For <strong>type 2 diabetes</strong>:{' '}
                <strong>Ozempic (semaglutide) tablets</strong> and <strong>Rybelsus</strong>, which
                share one label. For <strong>chronic weight management</strong>:{' '}
                <strong>Wegovy (semaglutide) tablets</strong>, approved December 2025, and{' '}
                <strong>Foundayo (orforglipron)</strong>, approved April 2026. The two groups are not
                interchangeable. Oral semaglutide must be taken on an empty stomach with up to 4 oz of
                water; Foundayo has no food or timing restriction. This is information, not medical
                advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 • 13 min read
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
                <div className="font-bold text-blue-600 mb-2">Approved for type 2 diabetes</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Ozempic (semaglutide) tablets 1.5 / 4 / 9 mg</li>
                  <li>• Rybelsus (semaglutide) 3 / 7 / 14 mg</li>
                  <li>• Same molecule, one shared FDA label</li>
                  <li>• Not approved for weight loss</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Approved for weight management</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wegovy (semaglutide) tablets, up to 25 mg</li>
                  <li>• Foundayo (orforglipron), up to 17.2 mg</li>
                  <li>• Both once daily, both prescription only</li>
                  <li>• Foundayo has no food or water rule</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">A pill can make sense if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Needles are the reason you haven&apos;t started</li>
                  <li>• You want a lower manufacturer self-pay entry price</li>
                  <li>• Cold-chain shipping is impractical for you</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">An injection may fit better if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• A daily empty-stomach window is unrealistic</li>
                  <li>• You prefer once weekly over once daily</li>
                  <li>• Your prescriber is targeting a different drug class</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#is-there-a-pill" className="text-blue-600 hover:underline">1. Is there a GLP-1 pill? All four, in one table</a></li>
              <li><a href="#ozempic-pill" className="text-blue-600 hover:underline">2. Is Ozempic available in pill form?</a></li>
              <li><a href="#rybelsus" className="text-blue-600 hover:underline">3. Rybelsus: the original semaglutide tablet</a></li>
              <li><a href="#semaglutide-tablets" className="text-blue-600 hover:underline">4. Semaglutide tablets for weight loss: the Wegovy pill</a></li>
              <li><a href="#foundayo" className="text-blue-600 hover:underline">5. Foundayo (orforglipron): the pill with no food rule</a></li>
              <li><a href="#how-to-take" className="text-blue-600 hover:underline">6. How oral semaglutide has to be taken</a></li>
              <li><a href="#pill-vs-shot" className="text-blue-600 hover:underline">7. GLP-1 pill vs injection</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">8. What GLP-1 pills cost without insurance</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">9. Compounded oral semaglutide: what FDA says</a></li>
              <li><a href="#side-effects" className="text-blue-600 hover:underline">10. Side effects and who should not take these</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              For years the honest answer to &quot;is there a GLP-1 in pill form?&quot; was one drug,
              one indication: Rybelsus, for type 2 diabetes. That answer is now out of date, and most
              of the pages ranking for this question still give it. Between December 2025 and April
              2026 the FDA approved the first oral GLP-1 for weight management and the first
              small-molecule GLP-1 pill, and Novo Nordisk brought oral semaglutide to market under the
              Ozempic name. Four pills, two different label indications, two very different sets of
              rules for how you swallow them.
            </p>

            <h2 id="is-there-a-pill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is There a GLP-1 Pill? All Four, in One Table</h2>

            <p className="text-gray-700 mb-4">
              Every product below is an oral tablet, prescription only, taken once daily. What
              separates them is the FDA-approved indication on the label. That distinction is not a
              technicality: it determines what the drug was studied for, what the manufacturer may
              promote it for, and whether a prescription for a different purpose is off-label.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pill</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Active ingredient</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA-approved for</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Strengths on label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Semaglutide (peptide)</td>
                    <td className="border border-gray-300 px-4 py-3">Type 2 diabetes; CV risk reduction in adults with T2D at high risk</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg, 4 mg, 9 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rybelsus</td>
                    <td className="border border-gray-300 px-4 py-3">Semaglutide (peptide)</td>
                    <td className="border border-gray-300 px-4 py-3">Type 2 diabetes; CV risk reduction in adults with T2D at high risk</td>
                    <td className="border border-gray-300 px-4 py-3">3 mg, 7 mg, 14 mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Semaglutide (peptide)</td>
                    <td className="border border-gray-300 px-4 py-3">Chronic weight management; CV risk reduction in adults with established CV disease and obesity or overweight</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg, 4 mg, 9 mg, 25 mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Foundayo</td>
                    <td className="border border-gray-300 px-4 py-3">Orforglipron (small molecule)</td>
                    <td className="border border-gray-300 px-4 py-3">Chronic weight management</td>
                    <td className="border border-gray-300 px-4 py-3">0.8, 2.5, 5.5, 9, 14.5, 17.2 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> a diabetes-labeled GLP-1 prescribed for weight loss
                is an off-label prescription. That is legal and clinicians do it, but it is a different
                thing from an approved use, and it changes how insurers, manufacturer savings programs
                and clinical monitoring treat the prescription. Ask your prescriber which one applies
                to you.
              </p>
            </div>

            <h2 id="ozempic-pill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is Ozempic Available in Pill Form?</h2>

            <p className="text-gray-700 mb-4">
              Yes. This is the part that has changed most recently and that most search results still
              get wrong. Novo Nordisk now markets <strong>Ozempic (semaglutide) tablets</strong> in
              1.5 mg, 4 mg and 9 mg, and the company announced US availability starting May 4, 2026.
              It is oral semaglutide, the same molecule as the Ozempic pen, in a tablet.
            </p>

            <p className="text-gray-700 mb-4">
              What has <em>not</em> changed is the indication. Per the FDA label shared by Rybelsus and
              Ozempic tablets, the tablets are indicated as an adjunct to diet and exercise to improve
              glycemic control in adults with type 2 diabetes, and to reduce the risk of major adverse
              cardiovascular events in adults with type 2 diabetes who are at high risk. Weight loss is
              not an approved indication for the Ozempic pill any more than it is for the Ozempic pen.
              If you are looking for the semaglutide pill that FDA approved for weight, that is the
              Wegovy tablet, covered below.
            </p>

            <p className="text-gray-700 mb-4">
              The old misconception was that &quot;Ozempic in pill form&quot; did not exist. The new
              misconception is more dangerous: that because the Ozempic pill now exists, it is the
              weight-loss pill. It is not. If you want the full picture of which brand covers which
              use, our{' '}
              <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic comparison</Link>{' '}
              and the{' '}
              <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">full GLP-1 medications list</Link>{' '}
              lay out every brand and its approved indication side by side.
            </p>

            <h2 id="rybelsus" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Rybelsus: The Original Semaglutide Tablet</h2>

            <p className="text-gray-700 mb-4">
              Rybelsus was the first oral GLP-1 in the US and remains on the market in 3 mg, 7 mg and
              14 mg tablets for type 2 diabetes. The Ozempic tablet strengths were designed to reach
              comparable drug exposure at a lower milligram number, which is why 1.5 mg, 4 mg and 9 mg
              map onto 3 mg, 7 mg and 14 mg rather than being lower doses in any meaningful sense.
              Novo Nordisk has stated that Rybelsus patients should continue their medication as
              directed and speak with their healthcare professional about transitioning to the Ozempic
              pill as appropriate.
            </p>

            <p className="text-gray-700 mb-4">
              The dosing schedule the FDA label specifies for Rybelsus is a fixed 30-day step-up. The
              label is explicit that the 3 mg starting dose is a tolerability step and is not effective
              for glycemic control on its own.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <caption className="caption-bottom pt-3 text-left text-sm text-gray-500">
                  What the FDA label specifies for semaglutide tablets in type 2 diabetes. Educational
                  reporting only. Your prescriber determines your dose.
                </caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Days</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rybelsus once daily</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ozempic tablets once daily</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 through 30</td>
                    <td className="border border-gray-300 px-4 py-3">3 mg (not effective for glycemic control)</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg (not effective for glycemic control)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">31 through 60</td>
                    <td className="border border-gray-300 px-4 py-3">7 mg</td>
                    <td className="border border-gray-300 px-4 py-3">4 mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">61 and onward</td>
                    <td className="border border-gray-300 px-4 py-3">Continue 7 mg, or increase to 14 mg if additional control is needed</td>
                    <td className="border border-gray-300 px-4 py-3">Continue 4 mg, or increase to 9 mg if additional control is needed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="semaglutide-tablets" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Semaglutide Tablets for Weight Loss: The Wegovy Pill</h2>

            <p className="text-gray-700 mb-4">
              On <strong>December 22, 2025</strong>, the FDA approved the Wegovy pill, once-daily oral
              semaglutide, the first oral GLP-1 approved for weight management. The label indicates
              Wegovy tablets in combination with a reduced-calorie diet and increased physical activity
              to reduce excess body weight and maintain weight reduction long term in adults with
              obesity, or adults with overweight in the presence of at least one weight-related
              comorbid condition, and to reduce the risk of major adverse cardiovascular events in
              adults with established cardiovascular disease and either obesity or overweight.
            </p>

            <p className="text-gray-700 mb-4">
              The dose ladder the label specifies runs four steps over 90 days to a 25 mg maintenance
              dose, which is far higher than the diabetes tablets. The label also notes that if a
              patient does not tolerate a step, the prescriber may delay escalation, and that if the
              25 mg maintenance dose is not tolerated, switching to the once-weekly injection is an
              option the prescriber can consider.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <caption className="caption-bottom pt-3 text-left text-sm text-gray-500">
                  What the FDA label specifies for Wegovy tablets. Educational reporting only. Do not
                  start, stop, or change a dose without your prescriber.
                </caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Days</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Once-daily tablet</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stage</th>
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
                    <td className="border border-gray-300 px-4 py-3">Maintenance dosage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>What the trial in the label showed.</strong> The 64-week randomized,
              double-blind, placebo-controlled trial reported in the label enrolled 307 adults with
              obesity or overweight plus at least one weight-related comorbidity; adults with type 2
              diabetes were excluded. In the intention-to-treat analysis, mean body weight change at
              week 64 was <strong>-13.6%</strong> with the tablet versus <strong>-2.4%</strong> with
              placebo. <strong>76.3%</strong> of tablet-treated patients lost at least 5% of body
              weight versus 31.3% on placebo, and <strong>27.9%</strong> lost at least 20% versus 3.1%
              on placebo. Those are trial averages under trial conditions, not a promise about any
              individual.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">A limitation stated in the label itself</h4>
              <p className="text-gray-700">
                Wegovy tablets have not been studied for weight reduction in adults who have type 2
                diabetes along with obesity or overweight. The label also says concomitant use of
                Wegovy tablets with other semaglutide-containing products or any other GLP-1 receptor
                agonist is not recommended. If you already take a GLP-1, that is a conversation to have
                with your prescriber before anything else.
              </p>
            </div>

            <h2 id="foundayo" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Foundayo (Orforglipron): The Pill With No Food Rule</h2>

            <p className="text-gray-700 mb-4">
              In April 2026 the FDA approved <strong>Foundayo (orforglipron)</strong> for chronic
              weight management: indicated with a reduced-calorie diet and increased physical activity
              to reduce excess body weight and maintain weight reduction long term in adults with
              obesity, or adults with overweight in the presence of at least one weight-related
              comorbid condition. It is not approved for type 2 diabetes.
            </p>

            <p className="text-gray-700 mb-4">
              Orforglipron is chemically different from every GLP-1 that came before it. Semaglutide,
              tirzepatide and liraglutide are peptides. Orforglipron is a non-peptide small molecule,
              which is why its label allows it to be taken with or without food, at any time of day,
              with no water restriction. For anyone who has looked at the oral semaglutide rules and
              concluded they could never keep to them, that difference is the entire point of the drug.
            </p>

            <p className="text-gray-700 mb-4">
              The label specifies a starting dosage of 0.8 mg once daily, increasing to 2.5 mg after at
              least 30 days, then to 5.5 mg after at least 30 days, with further increases to 9 mg,
              14.5 mg or 17.2 mg permitted after at least 30 days at the current dose, based on
              treatment response and tolerability. Maximum dosage is 17.2 mg once daily. Tablets are
              swallowed whole, never broken, crushed or chewed, and never more than one per day.
            </p>

            <p className="text-gray-700 mb-4">
              In the two 72-week placebo-controlled trials in the label, intention-to-treat mean weight
              change at week 72 in the trial that excluded type 2 diabetes was <strong>-7.4%</strong>{' '}
              at 5.5 mg, <strong>-8.3%</strong> at 9 mg and <strong>-11.1%</strong> at 17.2 mg, versus{' '}
              <strong>-2.1%</strong> on placebo. In the trial in adults with type 2 diabetes the
              corresponding figures were -5.1%, -7.0% and -9.6% versus -2.5% on placebo.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Two Foundayo-specific interactions worth knowing</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Oral contraceptives.</strong> The label advises females using oral
                  contraceptives to switch to a non-oral method or add a barrier method for 30 days
                  after starting Foundayo and for 30 days after each dose escalation. None of the
                  semaglutide labels carry that instruction.
                </li>
                <li>
                  <strong>CYP3A4 and simvastatin.</strong> The maximum Foundayo dosage drops to 9 mg
                  daily with a strong CYP3A4 inhibitor, strong CYP3A4 inducers should be avoided, and
                  simvastatin should not exceed 20 mg daily during concomitant use. Bring your full
                  medication list to the prescribing visit.
                </li>
              </ul>
            </div>

            <h2 id="how-to-take" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Oral Semaglutide Has to Be Taken</h2>

            <p className="text-gray-700 mb-4">
              Semaglutide is a peptide. Swallowed on its own it would be broken down before it was
              absorbed, so the tablets are co-formulated with an absorption enhancer called SNAC, and
              absorption happens predominantly in the stomach. That mechanism is the reason the
              administration rules are so specific, and why ignoring them undercuts the drug rather
              than just being inconvenient.
            </p>

            <p className="text-gray-700 mb-4">
              The FDA label states the same instructions for Wegovy tablets and for the Ozempic and
              Rybelsus tablets:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Once daily, on an empty stomach, in the morning.</strong> One tablet, no more than one tablet per day.</li>
              <li><strong>Water only, up to 4 ounces.</strong> The label says not to take the tablets with any other liquid besides water.</li>
              <li><strong>Swallow whole.</strong> Do not split, crush, chew or dissolve the tablet in any solution.</li>
              <li><strong>Wait at least 30 minutes</strong> before eating food, drinking beverages, or taking other oral medications.</li>
              <li><strong>Missed dose:</strong> for Wegovy tablets the label says to skip the missed dose and take the next dose the following day.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Read that list as a daily-life constraint before you read it as a clinical one. It means
              no coffee for half an hour after the tablet, and it means other morning prescriptions get
              pushed back. Foundayo has none of those requirements. That is a real difference between
              two drugs that otherwise look interchangeable on a comparison chart.
            </p>

            <h2 id="pill-vs-shot" className="text-2xl font-bold text-gray-900 mt-12 mb-6">GLP-1 Pill vs Injection</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">&nbsp;</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Oral semaglutide</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Foundayo</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">GLP-1 injections</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Frequency</td>
                    <td className="border border-gray-300 px-4 py-3">Once daily</td>
                    <td className="border border-gray-300 px-4 py-3">Once daily</td>
                    <td className="border border-gray-300 px-4 py-3">Once weekly (semaglutide, tirzepatide)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Timing rules</td>
                    <td className="border border-gray-300 px-4 py-3">Empty stomach, morning, ≤4 oz water, 30-min wait</td>
                    <td className="border border-gray-300 px-4 py-3">None; with or without food, any time</td>
                    <td className="border border-gray-300 px-4 py-3">Any time of day, with or without meals</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Storage</td>
                    <td className="border border-gray-300 px-4 py-3">Tablets, no refrigeration</td>
                    <td className="border border-gray-300 px-4 py-3">Tablets, no refrigeration</td>
                    <td className="border border-gray-300 px-4 py-3">Refrigeration per the package insert</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Missing a dose</td>
                    <td className="border border-gray-300 px-4 py-3">Skip it; next dose the following day</td>
                    <td className="border border-gray-300 px-4 py-3">Per label instructions</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly schedule gives more margin</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Adherence is the honest axis here. A weekly injection asks for one correct decision every
              seven days. A daily tablet with an empty-stomach window asks for one every morning. Which
              is easier is a personal question, not a clinical ranking. If you are weighing molecules
              rather than formats, our{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide comparison</Link>{' '}
              covers the injectable head-to-head, and the{' '}
              <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">semaglutide dosing guide</Link>{' '}
              and{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
              report the injection schedules the labels specify.
            </p>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What GLP-1 Pills Cost Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Every figure below is a manufacturer self-pay price published by the manufacturer itself.
              They carry eligibility conditions and expiry dates, and they are not what a pharmacy
              charges at list price.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <caption className="caption-bottom pt-3 text-left text-sm text-gray-500">
                  Manufacturer self-pay pricing as published by NovoCare and Eli Lilly. Verify current
                  pricing and eligibility with the manufacturer before you commit.
                </caption>
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pill</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published self-pay price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic tablets</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg / 4 mg / 9 mg</td>
                    <td className="border border-gray-300 px-4 py-3">$149 / $199 / $299 per month</td>
                    <td className="border border-gray-300 px-4 py-3">NovoCare price guide</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg and 4 mg</td>
                    <td className="border border-gray-300 px-4 py-3">$149 per month (4 mg offer through Aug 31, 2026, then $199)</td>
                    <td className="border border-gray-300 px-4 py-3">NovoCare price guide</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                    <td className="border border-gray-300 px-4 py-3">9 mg and 25 mg</td>
                    <td className="border border-gray-300 px-4 py-3">$299 per month</td>
                    <td className="border border-gray-300 px-4 py-3">NovoCare price guide</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Foundayo</td>
                    <td className="border border-gray-300 px-4 py-3">Lowest dose</td>
                    <td className="border border-gray-300 px-4 py-3">From $149 per month via LillyDirect</td>
                    <td className="border border-gray-300 px-4 py-3">Eli Lilly approval announcement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Read the maintenance row, not the starter row. The self-pay entry price for oral
              semaglutide is a starting-dose price, and the Wegovy tablet ladder reaches its 25 mg
              maintenance dose on day 91. Budget the maintenance number, because that is the one you
              live with. For a wider comparison across both pills and injections, see{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">the cheapest GLP-1 without insurance</Link>,{' '}
              <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">verified semaglutide program prices</Link>{' '}
              and{' '}
              <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">verified tirzepatide program prices</Link>.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Compounded Oral Semaglutide: What FDA Says</h2>

            <p className="text-gray-700 mb-4">
              Compounded &quot;oral semaglutide&quot; is sold online as drops, sublingual troches and
              tablets. It is not the same category of product as anything above.{' '}
              <strong>Compounded drugs are not FDA approved.</strong> FDA states that unapproved
              versions do not undergo its review for safety, effectiveness and quality before they are
              marketed, and that a compounded drug might be appropriate only when a patient&apos;s
              medical need cannot be met by an FDA-approved drug.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Dosing errors.</strong> FDA has received multiple reports of adverse events, some requiring hospitalization, that may relate to dosing errors with compounded semaglutide, including patients and health care professionals miscalculating doses, and prescriptions written beyond what the approved label allows.</li>
              <li><strong>Salt forms.</strong> FDA has said semaglutide sodium and semaglutide acetate are different active ingredients from the one in the approved drugs, and that it is not aware of any lawful basis for their use in compounding.</li>
              <li><strong>Volume of reports.</strong> As of May 31, 2026, FDA had received 990 adverse event reports associated with compounded semaglutide and more than 730 associated with compounded tirzepatide, and notes these are likely underreported.</li>
              <li><strong>Fraudulent product.</strong> FDA has identified compounded semaglutide and tirzepatide sold with false label information, in some cases naming pharmacies that do not exist.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              FDA also publishes telehealth red flags: claims that a compounded drug is the same as an
              FDA-approved drug, prices that seem too good to be true, no screening or prescription by
              a licensed doctor, no clinician available afterward, and label misspellings or wrong
              pharmacy addresses. Our{' '}
              <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
              goes deeper on the legal status and the pricing, and{' '}
              <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">our review of GLP-1 weight-loss programs</Link>{' '}
              covers which telehealth providers dispense FDA-approved product versus compounded.
            </p>

            <h2 id="side-effects" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side Effects and Who Should Not Take These</h2>

            <p className="text-gray-700 mb-4">
              All four pills carry a boxed warning about the risk of thyroid C-cell tumors and are
              contraindicated in people with a personal or family history of medullary thyroid
              carcinoma or Multiple Endocrine Neoplasia syndrome type 2. Warnings across the labels
              include acute pancreatitis, severe gastrointestinal reactions, acute kidney injury from
              volume depletion, hypoglycemia when combined with insulin or an insulin secretagogue,
              hypersensitivity reactions, gallbladder disease, diabetic retinopathy complications in
              patients with type 2 diabetes, and pulmonary aspiration during general anesthesia or deep
              sedation. Tell any surgeon or anesthesiologist that you take a GLP-1.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Semaglutide tablets.</strong> The label lists the most common adverse reactions
              at an incidence of 5% or more for the type 2 diabetes tablets as nausea, abdominal pain,
              diarrhea, decreased appetite, vomiting and constipation. For Wegovy, the most common
              reactions at 5% or more include nausea, diarrhea, vomiting, constipation, abdominal pain,
              headache, fatigue, dyspepsia, dizziness, abdominal distension and eructation. In the
              Wegovy tablet trial, 6.9% of tablet-treated patients discontinued because of adverse
              reactions versus 5.9% on placebo.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Foundayo.</strong> In the pooled placebo-controlled trials in the label, nausea
              was reported by 26% at 5.5 mg, 34% at 9 mg and 35% at 17.2 mg versus 10% on placebo;
              constipation by 20%, 27% and 24% versus 9%; diarrhea by 21%, 23% and 25% versus 11%; and
              vomiting by 13%, 21% and 24% versus 4%. The label notes that gastrointestinal reactions
              were highest during dose escalation and decreased over time, and that of patients
              reporting them, 60% were mild, 36% moderate and 4% severe.
            </p>

            <p className="text-gray-700 mb-4">
              Side-effect profiles by drug are covered in more depth in our{' '}
              <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic side effects guide</Link>{' '}
              and{' '}
              <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects guide</Link>.
              None of that replaces the conversation with the clinician who would be prescribing and
              monitoring you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Questions worth asking your prescriber</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Which indication am I being prescribed under, and is this on-label or off-label for my situation?</li>
              <li>Can I realistically hold a 30-minute empty-stomach window every morning, given my other medications?</li>
              <li>What is the maintenance dose we are aiming for, and what will it cost me at that dose?</li>
              <li>Is the product being dispensed FDA-approved, or compounded?</li>
              <li>What monitoring and follow-up is included, and who do I contact if side effects escalate?</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Keep comparing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Alternatives:</strong> our <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives guide</Link> covers every FDA-approved option and the non-GLP-1 pills</li>
              <li><strong>Every brand, one list:</strong> the <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link> maps brand to molecule to approved indication</li>
              <li><strong>Find a clinic:</strong> browse <Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinics by state</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Options and Prices</h3>
            <p className="mb-6 text-blue-100">
              Pills, pens, telehealth and clinic programs — see what each one actually costs.
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
              This guide is for educational purposes only. It is not medical advice, and it is not a
              substitute for diagnosis or treatment by a licensed clinician. Dosing information is
              reported from FDA-approved prescribing information to describe what the label specifies;
              it is not a recommendation, and only your prescriber can determine whether a medication
              is appropriate for you and at what dose. Do not start, stop, or change any medication
              based on this page. Semaglutide and orforglipron are prescription medications with a
              boxed warning and important contraindications. Compounded semaglutide and tirzepatide
              products are not FDA approved. Prices are manufacturer-published self-pay figures that
              carry eligibility conditions and change without notice; verify current pricing directly
              with the manufacturer or pharmacy. We are not affiliated with Novo Nordisk or Eli Lilly.
              VitalityScout may earn a commission from some links, at no additional cost to you, and
              this never affects how we describe a product.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                •{' '}
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/218316Orig1s000lbl.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  FDA prescribing information — WEGOVY (semaglutide) injection and tablets
                </a>{' '}
                (indications, tablet titration table, administration instructions, Study 7 results, adverse reactions)
              </li>
              <li>
                •{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  DailyMed — RYBELSUS and OZEMPIC (semaglutide) tablets prescribing information
                </a>{' '}
                (type 2 diabetes indication, 3/7/14 mg and 1.5/4/9 mg titration, boxed warning)
              </li>
              <li>
                •{' '}
                <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  DailyMed — FOUNDAYO (orforglipron) tablets prescribing information
                </a>{' '}
                (indication, dosage escalation, administration, adverse reaction table, drug interactions, Trials 1 and 2)
              </li>
              <li>
                •{' '}
                <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  FDA — FDA&apos;s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss
                </a>{' '}
                (compounded products not FDA approved, dosing errors, salt forms, adverse event counts as of May 31, 2026)
              </li>
              <li>
                •{' '}
                <a href="https://www.novonordisk.com/content/nncorp/global/en/news-and-media/news-and-ir-materials/news-details.html?id=916472" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Novo Nordisk — Wegovy pill FDA approval announcement
                </a>{' '}
                (December 22, 2025 approval date)
              </li>
              <li>
                •{' '}
                <a href="https://www.prnewswire.com/news-releases/novo-nordisks-ozempic-pill-the-only-fda-approved-oral-peptide-glp-1-medication-for-adults-with-type-2-diabetes-soon-to-be-available-in-the-us-302760106.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Novo Nordisk — Ozempic pill availability in the US
                </a>{' '}
                (May 4, 2026 availability, Rybelsus transition statement)
              </li>
              <li>
                •{' '}
                <a href="https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Wegovy_Price_Guide.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  NovoCare — Wegovy price guide (PDF)
                </a>{' '}
                and{' '}
                <a href="https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Ozempic_Price_Guide.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Ozempic price guide (PDF)
                </a>{' '}
                (published self-pay pricing by dose)
              </li>
              <li>
                •{' '}
                <a href="https://www.prnewswire.com/news-releases/fda-approves-lillys-foundayo-orforglipron-the-only-glp-1-pill-for-weight-loss-that-can-be-taken-any-time-of-day-without-food-or-water-restrictions-302731485.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Eli Lilly — FDA approves Foundayo (orforglipron)
                </a>{' '}
                (approval, LillyDirect self-pay pricing)
              </li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Pill Comparison Cheat Sheet"
            description="Every FDA-approved oral GLP-1, what it is approved for, the label dose ladder, and the published self-pay price."
            source="guide_glp1_pill_guide"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
