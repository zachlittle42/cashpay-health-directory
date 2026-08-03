import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/glp1-medications-list';
const REVIEWED = '2026-08-03';

export const metadata: Metadata = {
  title: { absolute: 'GLP-1 Medications: The Complete 2026 List (Every Brand)' },
  alternates: { canonical: URL },
  description:
    'Every FDA-approved GLP-1 medication in 2026: generic name, brand names, approved use, and form. Tirzepatide is Mounjaro and Zepbound. Semaglutide is three.',
};

// Every FAQ answer is drawn only from facts stated on this page, and every fact
// on this page traces to an FDA-approved label on DailyMed, an FDA drug alert,
// or a named peer-reviewed trial. The visible FAQ block mirrors this exactly.
const FAQ_ITEMS = [
  {
    question: 'What are GLP-1 medications?',
    answer:
      'GLP-1 medications are drugs that activate the receptor for glucagon-like peptide-1, a hormone your gut releases after you eat. Activating that receptor increases insulin release when blood sugar is high, lowers glucagon, slows how fast the stomach empties, and reduces appetite signaling in the brain. As of 2026 the FDA-approved GLP-1 receptor agonists sold in the US are semaglutide (Ozempic, Wegovy, Rybelsus), tirzepatide (Mounjaro, Zepbound), liraglutide (Victoza, Saxenda, plus generics), dulaglutide (Trulicity), exenatide (Byetta), and orforglipron (Foundayo). Tirzepatide is a dual GIP and GLP-1 receptor agonist rather than a GLP-1-only drug. This is information, not medical advice.',
  },
  {
    question: 'What is the brand name for tirzepatide?',
    answer:
      'Tirzepatide is sold under two brand names in the US, both from Eli Lilly and both once-weekly injections. Mounjaro is approved as an adjunct to diet and exercise to improve glycemic control in adults and children 10 and older with type 2 diabetes. Zepbound is approved for long-term weight reduction and maintenance in adults with obesity, or with overweight plus at least one weight-related condition, and for moderate to severe obstructive sleep apnea in adults with obesity. Same molecule, different labels, different approved uses. There is no generic tirzepatide in the US.',
  },
  {
    question: 'What is the brand name for semaglutide?',
    answer:
      'Semaglutide is sold under three brand names in the US, all from Novo Nordisk. Ozempic is the once-weekly injection approved for type 2 diabetes glycemic control, cardiovascular risk reduction in type 2 diabetes with established cardiovascular disease, and kidney outcomes in type 2 diabetes with chronic kidney disease. The Wegovy injection is approved for chronic weight management in adults and patients 12 and older, cardiovascular risk reduction, and noncirrhotic MASH with F2 to F3 fibrosis under accelerated approval. Rybelsus is the once-daily oral tablet approved for type 2 diabetes. Oral tablets exist under the Ozempic and Wegovy names too, and their indications are narrower than the injections they share a name with. Ozempic tablets share the Rybelsus label: type 2 diabetes glycemic control and cardiovascular risk reduction in adults with type 2 diabetes at high risk for those events. They do not carry the Ozempic injection kidney indication. Wegovy tablets are approved for chronic weight management and cardiovascular risk reduction in adults only, not for patients 12 and older and not for noncirrhotic MASH. There is no generic semaglutide in the US.',
  },
  {
    question: 'Which GLP-1 medications are FDA-approved for weight loss?',
    answer:
      'Five products carry an FDA-approved chronic weight management indication in 2026: Wegovy (semaglutide injection), Wegovy tablets (oral semaglutide), Zepbound (tirzepatide injection), Saxenda (liraglutide injection), and Foundayo (orforglipron, an oral daily tablet). Ozempic, Rybelsus, Mounjaro, Victoza, Trulicity, and Byetta are approved for type 2 diabetes, not for weight loss. Prescribing a diabetes-labeled GLP-1 for weight loss is off-label prescribing, which is legal for a licensed clinician but is not an FDA-approved use. Decide with a licensed clinician.',
  },
  {
    question: 'What is the best GLP-1 for weight loss?',
    answer:
      'There is no single best GLP-1 for every person. SURMOUNT-5 is the only head-to-head trial of tirzepatide against semaglutide in adults with obesity and without type 2 diabetes. Published in the New England Journal of Medicine in 2025, it randomized 751 such adults to maximum tolerated tirzepatide or maximum tolerated semaglutide for 72 weeks. Mean weight change was minus 20.2 percent with tirzepatide and minus 13.7 percent with semaglutide. Other direct head-to-head trials of these drugs exist in different populations, including SURPASS-2, which compared tirzepatide with semaglutide in adults with type 2 diabetes. Any one trial answers one question in one population, and none of them account for tolerability, cost, coverage, supply, or your medical history. Your prescriber chooses the medication.',
  },
  {
    question: 'Is there a GLP-1 pill instead of an injection?',
    answer:
      'Yes. Rybelsus and Ozempic-branded tablets are once-daily oral semaglutide approved for type 2 diabetes. Wegovy tablets are once-daily oral semaglutide approved for chronic weight management and cardiovascular risk reduction in adults. Foundayo (orforglipron) is a once-daily oral tablet approved for chronic weight management, and unlike the semaglutide tablets it is a small molecule rather than a peptide, so it has no food and water timing rules in its administration instructions. Oral semaglutide must be taken on an empty stomach with up to four ounces of water, waiting at least 30 minutes before eating, drinking, or taking other oral medications.',
  },
  {
    question: 'Are compounded GLP-1 medications the same as the brand-name drugs?',
    answer:
      'No. Compounded semaglutide and tirzepatide are not FDA-approved. The FDA does not review compounded drugs for safety, effectiveness, or quality before they are marketed. The FDA has stated it received multiple adverse event reports, some requiring hospitalization, that may relate to dosing errors with compounded injectable semaglutide, including patients and clinicians miscalculating doses, and reports involving doses beyond what the approved label allows. The FDA has also flagged fraudulent compounded products whose labels name pharmacies that do not exist or did not make the product, and has stated that retatrutide and cagrilintide cannot legally be used in compounding.',
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

export default function Glp1MedicationsList() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'GLP-1 Medications: The Complete 2026 List',
    description:
      'Every FDA-approved GLP-1 and dual GIP/GLP-1 medication available in the US in 2026, mapped generic name to brand names to approved indication to form, with what GLP-1 receptor agonists actually do.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'GLP-1 receptor agonists',
      description:
        'A class of prescription medications that activate the glucagon-like peptide-1 receptor, used for type 2 diabetes and, for certain products, chronic weight management.',
      drugClass: 'Glucagon-like peptide-1 receptor agonist',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: REVIEWED,
    dateModified: REVIEWED,
    citation: [
      { '@type': 'CreativeWork', name: 'DailyMed — OZEMPIC (semaglutide) injection, prescribing information (Novo Nordisk)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79' },
      { '@type': 'CreativeWork', name: 'DailyMed — WEGOVY (semaglutide) injection and tablets, prescribing information (Novo Nordisk)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b' },
      { '@type': 'CreativeWork', name: 'DailyMed — RYBELSUS and OZEMPIC tablets (oral semaglutide), prescribing information (Novo Nordisk)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98' },
      { '@type': 'CreativeWork', name: 'DailyMed — MOUNJARO (tirzepatide) injection, prescribing information (Eli Lilly)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0' },
      { '@type': 'CreativeWork', name: 'DailyMed — ZEPBOUND (tirzepatide) injection, prescribing information (Eli Lilly)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b' },
      { '@type': 'CreativeWork', name: 'DailyMed — FOUNDAYO (orforglipron) tablets, prescribing information (Eli Lilly)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62' },
      { '@type': 'CreativeWork', name: 'DailyMed — SAXENDA (liraglutide) injection, prescribing information (Novo Nordisk)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3946d389-0926-4f77-a708-0acb8153b143' },
      { '@type': 'CreativeWork', name: 'DailyMed — VICTOZA (liraglutide) injection, prescribing information (Novo Nordisk)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a9ef4ea-c76a-4d34-a604-27c5b505f5a4' },
      { '@type': 'CreativeWork', name: 'DailyMed — TRULICITY (dulaglutide) injection, prescribing information (Eli Lilly)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=463050bd-2b1c-40f5-b3c3-0a04bb433309' },
      { '@type': 'CreativeWork', name: 'DailyMed — BYETTA (exenatide) injection, prescribing information (AstraZeneca)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=53d03c03-ebf7-418d-88a8-533eabd2ee4f' },
      { '@type': 'CreativeWork', name: 'FDA — FDA’s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss' },
      { '@type': 'CreativeWork', name: 'Aronne LJ, et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5). N Engl J Med. 2025;393(1):26-36', url: 'https://pubmed.ncbi.nlm.nih.gov/40353578/' },
      { '@type': 'CreativeWork', name: 'Frías JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2). N Engl J Med. 2021;385(6):503-515', url: 'https://pubmed.ncbi.nlm.nih.gov/34170647/' },
      { '@type': 'CreativeWork', name: 'FDA National Drug Code Directory', url: 'https://dps.fda.gov/ndc' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'GLP-1 Medications List', item: URL },
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
              <span className="text-gray-900">GLP-1 Medications List</span>
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
              GLP-1 Medications: The Complete 2026 List
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Every FDA-approved GLP-1 and dual GIP/GLP-1 medication sold in the US, mapped from
              generic name to brand names to the exact approved use to the form you take. Sourced
              line by line from the current FDA prescribing information.
            </p>

            {/* Direct-answer lead: self-contained summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>GLP-1 medications</strong> activate the glucagon-like peptide-1 receptor to
                raise glucose-dependent insulin release, slow gastric emptying, and reduce appetite
                signaling. In 2026 the FDA-approved US products are{' '}
                <strong>semaglutide</strong> (Ozempic, Wegovy, Rybelsus),{' '}
                <strong>tirzepatide</strong> (Mounjaro, Zepbound), <strong>liraglutide</strong>{' '}
                (Victoza, Saxenda), <strong>dulaglutide</strong> (Trulicity),{' '}
                <strong>exenatide</strong> (Byetta), and <strong>orforglipron</strong> (Foundayo).
                Some are approved for type 2 diabetes, some for weight management, and the two are
                never the same label. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: August 2026 • 14 min read • Sources: FDA labels on DailyMed
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick answer box: the two brand-name questions people actually search */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer: Brand Name Mapping</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Tirzepatide brand names</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Mounjaro</strong> = type 2 diabetes</li>
                  <li>• <strong>Zepbound</strong> = weight management + OSA</li>
                  <li>• Both weekly injections, both Eli Lilly</li>
                  <li>• No US generic</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Semaglutide brand names</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Ozempic</strong> = type 2 diabetes (weekly shot)</li>
                  <li>• <strong>Wegovy</strong> = weight management (shot or tablet)</li>
                  <li>• <strong>Rybelsus</strong> = type 2 diabetes (daily tablet)</li>
                  <li>• All Novo Nordisk. No US generic</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-glp1" className="text-blue-600 hover:underline">1. What is a GLP-1, physiologically</a></li>
              <li><a href="#full-list" className="text-blue-600 hover:underline">2. The complete GLP-1 medications list</a></li>
              <li><a href="#brand-names" className="text-blue-600 hover:underline">3. Generic to brand name mapping</a></li>
              <li><a href="#dual-agonist" className="text-blue-600 hover:underline">4. GLP-1 vs dual GIP/GLP-1 vs the new oral small molecule</a></li>
              <li><a href="#forms" className="text-blue-600 hover:underline">5. Weekly injection, daily injection, daily pill</a></li>
              <li><a href="#weight-loss" className="text-blue-600 hover:underline">6. GLP-1s for weight loss: what is approved and what is off-label</a></li>
              <li><a href="#head-to-head" className="text-blue-600 hover:underline">7. GLP-1 head-to-head: tirzepatide versus semaglutide</a></li>
              <li><a href="#dosing" className="text-blue-600 hover:underline">8. What the FDA labels specify for dosing</a></li>
              <li><a href="#side-effects" className="text-blue-600 hover:underline">9. Side effects across the class</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">10. Compounded GLP-1s are not on this list</a></li>
              <li><a href="#legacy" className="text-blue-600 hover:underline">11. Older agents and combination products</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">12. What these cost and how people access them</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              The confusing part of this drug class is not the science. It is the naming. One molecule
              can carry three brand names, each with a different FDA-approved use, a different dose
              ladder, and a different price. Ozempic and Wegovy are the same drug. Mounjaro and
              Zepbound are the same drug. Neither pair is interchangeable on a prescription, because
              the label is what defines the approved use. This page maps all of it from the current
              prescribing information, product by product.
            </p>

            <h2 id="what-is-glp1" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is a GLP-1, Physiologically</h2>

            <p className="text-gray-700 mb-4">
              GLP-1 stands for glucagon-like peptide-1. It is an incretin hormone released by
              L-cells in your small intestine and colon within minutes of food arriving. Native GLP-1
              is broken down almost immediately by the enzyme DPP-4, which is why the natural hormone
              has a half-life measured in minutes and why every drug in this class is engineered to
              resist that breakdown and last for hours or days.
            </p>

            <p className="text-gray-700 mb-4">
              A GLP-1 receptor agonist is a drug that binds and activates the same receptor the
              hormone does. Per the FDA prescribing information for these products, activating that
              receptor produces four effects that matter clinically:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Glucose-dependent insulin release.</strong> The pancreas releases more insulin when blood glucose is elevated, and the effect tapers as glucose falls. That glucose dependence is why GLP-1 monotherapy carries a low intrinsic hypoglycemia risk, and why the labels warn that combining one with insulin or a sulfonylurea does raise that risk.</li>
              <li><strong>Suppressed glucagon.</strong> Less glucagon means less glucose dumped out of the liver between meals.</li>
              <li><strong>Delayed gastric emptying.</strong> Food leaves the stomach more slowly, which blunts the post-meal glucose spike and increases the feeling of fullness. This is also the mechanism behind most of the nausea, and the reason the labels carry warnings about pulmonary aspiration during general anesthesia or deep sedation.</li>
              <li><strong>Reduced appetite signaling.</strong> GLP-1 receptors in the hypothalamus and brainstem influence satiety and food reward, which is the pathway behind the reduced calorie intake seen with these drugs.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for the list below:</strong> the mechanism is shared across
                the class, but the FDA approval is not. Two products with identical mechanisms can
                have completely different approved uses because they were studied in different
                populations at different doses. The label, not the molecule, defines what a drug is
                approved to treat.
              </p>
            </div>

            <h2 id="full-list" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Complete GLP-1 Medications List (2026)</h2>

            <p className="text-gray-700 mb-4">
              Every row below reflects the current FDA-approved prescribing information published on
              DailyMed. Indications are stated as the label states them. Where a product is approved
              for type 2 diabetes, it is not approved for weight loss, and vice versa.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Generic name</th>
                    <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Brand name</th>
                    <th className="border border-gray-300 px-3 py-3 text-left font-semibold">FDA-approved indication</th>
                    <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-medium" rowSpan={4}>Semaglutide<br /><span className="font-normal text-gray-500">GLP-1 agonist (Novo Nordisk)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Ozempic</td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control; reduce major adverse cardiovascular events in T2D with established CV disease; reduce risk of sustained eGFR decline, end-stage kidney disease and CV death in T2D with chronic kidney disease</td>
                    <td className="border border-gray-300 px-3 py-3">Weekly injection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Wegovy</td>
                    <td className="border border-gray-300 px-3 py-3">Chronic weight management (adults and children 12+ with obesity; adults with overweight plus a weight-related condition); reduce major adverse CV events in adults with established CV disease and obesity or overweight; noncirrhotic MASH with F2 to F3 fibrosis under accelerated approval</td>
                    <td className="border border-gray-300 px-3 py-3">Weekly injection <span className="text-gray-500">(and a daily tablet, see next row)</span></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Wegovy tablets</td>
                    <td className="border border-gray-300 px-3 py-3">Chronic weight management in adults; reduce major adverse CV events in adults with established CV disease and obesity or overweight</td>
                    <td className="border border-gray-300 px-3 py-3">Daily pill</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Rybelsus<br /><span className="font-normal text-gray-600">and Ozempic tablets</span></td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control; reduce major adverse CV events in adults with T2D at high risk for those events</td>
                    <td className="border border-gray-300 px-3 py-3">Daily pill</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-medium" rowSpan={2}>Tirzepatide<br /><span className="font-normal text-gray-500">dual GIP + GLP-1 agonist (Eli Lilly)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Mounjaro</td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control in adults and children 10 and older</td>
                    <td className="border border-gray-300 px-3 py-3">Weekly injection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Zepbound</td>
                    <td className="border border-gray-300 px-3 py-3">Chronic weight management in adults with obesity, or overweight plus a weight-related condition; moderate to severe obstructive sleep apnea in adults with obesity</td>
                    <td className="border border-gray-300 px-3 py-3">Weekly injection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-medium">Orforglipron<br /><span className="font-normal text-gray-500">oral small-molecule GLP-1 agonist (Eli Lilly)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Foundayo</td>
                    <td className="border border-gray-300 px-3 py-3">Chronic weight management in adults with obesity, or overweight plus at least one weight-related condition</td>
                    <td className="border border-gray-300 px-3 py-3">Daily pill</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 font-medium" rowSpan={2}>Liraglutide<br /><span className="font-normal text-gray-500">GLP-1 agonist (Novo Nordisk + generics)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Saxenda</td>
                    <td className="border border-gray-300 px-3 py-3">Chronic weight management in adults and children 12+ over 60 kg with obesity, and adults with overweight plus a weight-related condition</td>
                    <td className="border border-gray-300 px-3 py-3">Daily injection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Victoza</td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control in adults and children 10 and older; reduce major adverse CV events in adults with T2D and established CV disease</td>
                    <td className="border border-gray-300 px-3 py-3">Daily injection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 font-medium">Dulaglutide<br /><span className="font-normal text-gray-500">GLP-1 agonist (Eli Lilly)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Trulicity</td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control in adults and children 10 and older; reduce major adverse CV events in adults with T2D who have established CV disease or multiple CV risk factors</td>
                    <td className="border border-gray-300 px-3 py-3">Weekly injection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 font-medium">Exenatide<br /><span className="font-normal text-gray-500">GLP-1 agonist (AstraZeneca + generic)</span></td>
                    <td className="border border-gray-300 px-3 py-3 font-semibold text-blue-700">Byetta</td>
                    <td className="border border-gray-300 px-3 py-3">Type 2 diabetes glycemic control in adults</td>
                    <td className="border border-gray-300 px-3 py-3">Twice-daily injection before meals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Two combination products also contain a GLP-1 receptor agonist paired with a
              long-acting insulin, both indicated as an adjunct to diet and exercise to improve
              glycemic control in adults with type 2 diabetes: <strong>Soliqua 100/33</strong>{' '}
              (insulin glargine plus lixisenatide) and <strong>Xultophy 100/3.6</strong> (insulin
              degludec plus liraglutide). Both are daily injections. Neither is a weight-management
              product.
            </p>

            <h2 id="brand-names" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Generic to Brand Name Mapping (The Part That Confuses Everyone)</h2>

            <p className="text-gray-700 mb-4">
              Two molecules account for nearly every GLP-1 search, and both of them ship under
              multiple brand names. This is the single most useful thing to internalize about the
              class.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tirzepatide brand names: Mounjaro and Zepbound</h3>

            <p className="text-gray-700 mb-4">
              Tirzepatide is one molecule from Eli Lilly, sold as two brands. Both are once-weekly
              subcutaneous injections available in single-dose pens and single-dose vials in the same
              six strengths: 2.5, 5, 7.5, 10, 12.5, and 15 mg. What differs is the label.
              <strong> Mounjaro</strong> is approved as an adjunct to diet and exercise to improve
              glycemic control in adults and pediatric patients 10 years and older with type 2
              diabetes. <strong>Zepbound</strong> is approved for long-term weight reduction and
              maintenance in adults with obesity or overweight plus a weight-related comorbidity, and
              for moderate to severe obstructive sleep apnea in adults with obesity.
            </p>

            <p className="text-gray-700 mb-4">
              Practically, that means a Mounjaro prescription written for weight loss is off-label
              prescribing. It is legal for a licensed clinician, but it is not an FDA-approved use of
              that product, and insurers often treat the two brands very differently as a result. Our{' '}
              <Link href="/guides/mounjaro-vs-ozempic" className="text-blue-600 hover:underline">Mounjaro vs Ozempic comparison</Link>{' '}
              covers how that plays out across both molecules, and the{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
              reports the label titration schedule in full.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Semaglutide brand names: Ozempic, Wegovy, and Rybelsus</h3>

            <p className="text-gray-700 mb-4">
              Semaglutide is one molecule from Novo Nordisk, sold under three brand names and in both
              injectable and oral form:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Ozempic</strong> is the weekly injection with a diabetes label: glycemic control in type 2 diabetes, cardiovascular risk reduction in type 2 diabetes with established cardiovascular disease, and kidney outcomes in type 2 diabetes with chronic kidney disease. Injection strengths deliver 0.25, 0.5, 1, and 2 mg doses.</li>
              <li><strong>Wegovy</strong> is the weight-management and cardiovascular label, given as a weekly injection with a usual maintenance dosage of 2.4 mg once weekly. Wegovy also carries an accelerated approval for noncirrhotic MASH with moderate to advanced fibrosis. A higher-strength 7.2 mg presentation is listed on the label as Wegovy HD.</li>
              <li><strong>Rybelsus</strong> is the daily oral tablet with a diabetes label, in 3, 7, and 14 mg strengths.</li>
              <li><strong>Ozempic-branded tablets</strong> are a separate oral semaglutide presentation in 1.5, 4, and 9 mg strengths, sharing the Rybelsus label: glycemic control in type 2 diabetes plus cardiovascular risk reduction in adults with type 2 diabetes at high risk for those events. They do not carry the Ozempic injection kidney indication. The prescribing information states plainly that Rybelsus and Ozempic tablets are <em>not</em> substitutable on a milligram-to-milligram basis.</li>
              <li><strong>Wegovy tablets</strong> are oral semaglutide with the adult weight-management and cardiovascular indications, in 1.5, 4, 9, and 25 mg strengths. They do not carry the Wegovy injection indications for patients 12 and older or for noncirrhotic MASH.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you are trying to work out which one applies to you, the{' '}
              <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic guide</Link>{' '}
              takes the two head-on, and the{' '}
              <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">semaglutide dosing guide</Link>{' '}
              lays out what the labels specify for each form.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">There is no generic semaglutide or tirzepatide in the US</h4>
              <p className="text-gray-700">
                DailyMed lists no approved generic for either molecule. Liraglutide is the exception:
                multiple approved generic liraglutide injections are listed from manufacturers
                including Teva, Cipla, Hikma, Biocon, and Lupin, and a generic exenatide injection is
                listed as well. Anything sold as generic Ozempic, generic Wegovy, or generic
                Mounjaro is either compounded, imported, or counterfeit.
              </p>
            </div>

            <h2 id="dual-agonist" className="text-2xl font-bold text-gray-900 mt-12 mb-6">GLP-1 vs Dual GIP/GLP-1 vs the New Oral Small Molecule</h2>

            <p className="text-gray-700 mb-4">
              Not everything on this list works the same way at the receptor level. Three distinct
              designs are now on the US market:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Design</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Drugs</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What is different</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Peptide GLP-1 agonist</td>
                    <td className="border border-gray-300 px-4 py-3">Semaglutide, liraglutide, dulaglutide, exenatide</td>
                    <td className="border border-gray-300 px-4 py-3">Engineered peptides that resist DPP-4 breakdown. Injectable, except for oral semaglutide, which needs an absorption enhancer and strict empty-stomach dosing.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dual GIP and GLP-1 agonist</td>
                    <td className="border border-gray-300 px-4 py-3">Tirzepatide (Mounjaro, Zepbound)</td>
                    <td className="border border-gray-300 px-4 py-3">Activates the glucose-dependent insulinotropic polypeptide receptor in addition to the GLP-1 receptor. The labels describe it as a GIP receptor and GLP-1 receptor agonist, not a GLP-1-only drug.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Oral small-molecule GLP-1 agonist</td>
                    <td className="border border-gray-300 px-4 py-3">Orforglipron (Foundayo)</td>
                    <td className="border border-gray-300 px-4 py-3">Not a peptide at all. Taken orally once daily with or without food, with no water-volume or fasting-window instruction in the label, unlike oral semaglutide.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              That third row is the genuinely new category. Every oral GLP-1 before it was a peptide
              wrapped in an absorption enhancer, which is why Rybelsus has to be swallowed whole on
              an empty stomach with no more than four ounces of water and a 30-minute wait before
              anything else. A small molecule does not carry that constraint. The{' '}
              <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link>{' '}
              walks through every oral option and how they differ in practice.
            </p>

            <h2 id="forms" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Weekly Injection, Daily Injection, Daily Pill</h2>

            <p className="text-gray-700 mb-4">
              Form is the practical dividing line most people actually feel. Here is the class sorted
              by how often you take it:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Weekly injection</div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Ozempic (semaglutide)</li>
                  <li>• Wegovy (semaglutide)</li>
                  <li>• Mounjaro (tirzepatide)</li>
                  <li>• Zepbound (tirzepatide)</li>
                  <li>• Trulicity (dulaglutide)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Daily injection</div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Saxenda (liraglutide)</li>
                  <li>• Victoza (liraglutide)</li>
                  <li>• Soliqua 100/33 (combination)</li>
                  <li>• Xultophy 100/3.6 (combination)</li>
                  <li>• Byetta is twice daily, before meals</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="font-bold text-green-700 mb-2">Daily pill</div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rybelsus (oral semaglutide)</li>
                  <li>• Ozempic tablets (oral semaglutide)</li>
                  <li>• Wegovy tablets (oral semaglutide)</li>
                  <li>• Foundayo (orforglipron)</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              A weekly injection is 52 administrations a year. A daily pill is 365, each with its own
              adherence window. Neither is inherently better, and the labels do not rank them. The
              trade-off is real, though: the oral semaglutide products carry fasting and water-volume
              instructions that a weekly pen does not.
            </p>

            <h2 id="weight-loss" className="text-2xl font-bold text-gray-900 mt-12 mb-6">GLP-1s for Weight Loss: What Is Approved and What Is Off-Label</h2>

            <p className="text-gray-700 mb-4">
              This is where most of the misinformation lives, so it is worth stating flatly. Five
              products in this class carry an FDA-approved chronic weight management indication:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Wegovy</strong> injection (semaglutide), weekly</li>
              <li><strong>Wegovy tablets</strong> (oral semaglutide), daily</li>
              <li><strong>Zepbound</strong> (tirzepatide), weekly</li>
              <li><strong>Saxenda</strong> (liraglutide), daily</li>
              <li><strong>Foundayo</strong> (orforglipron), daily oral</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Every other product on this page is approved for type 2 diabetes. <strong>Ozempic,
              Rybelsus, Mounjaro, Victoza, Trulicity, and Byetta are not FDA-approved for weight
              loss.</strong> When a clinician prescribes one of them for weight management, that is
              off-label prescribing. Off-label prescribing is legal and common in US medicine, and it
              is a decision that belongs to a licensed prescriber who knows your history. It is not
              the same thing as an approved indication, and it is not a distinction marketing copy
              tends to make for you.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>One more label detail worth knowing:</strong> the weight-management
                indications are written as an adjunct to a reduced-calorie diet and increased
                physical activity, not as a standalone treatment. Every one of the five labels says
                so in the indication itself. Rapid weight loss also carries a lean-mass cost, which
                is why our{' '}
                <Link href="/guides/glp1-and-muscle-loss" className="text-blue-600 hover:underline">GLP-1 and muscle loss guide</Link>{' '}
                exists.
              </p>
            </div>

            <h2 id="head-to-head" className="text-2xl font-bold text-gray-900 mt-12 mb-6">GLP-1 Head-to-Head: Tirzepatide Versus Semaglutide</h2>

            <p className="text-gray-700 mb-4">
              Cross-trial comparisons between GLP-1s are a trap. Different populations, different
              baseline weights, different durations, different definitions of the endpoint. The
              comparison most people are asking about is tirzepatide versus semaglutide for weight,
              and one randomized trial answers it directly. SURMOUNT-5 is the only head-to-head trial
              of tirzepatide against semaglutide in adults with obesity and without type 2 diabetes.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>SURMOUNT-5</strong>, published in the <em>New England Journal of Medicine</em>{' '}
              in 2025, was a phase 3b open-label trial that randomized <strong>751 adults</strong>{' '}
              with obesity and without type 2 diabetes 1:1 to the maximum tolerated dose of
              tirzepatide (10 or 15 mg) or the maximum tolerated dose of semaglutide (1.7 or 2.4 mg),
              both once weekly, for <strong>72 weeks</strong>. The least-squares mean percent change
              in weight at week 72 was <strong>minus 20.2 percent</strong> with tirzepatide and{' '}
              <strong>minus 13.7 percent</strong> with semaglutide. Mean waist circumference change
              was minus 18.4 cm versus minus 13.0 cm.
            </p>

            <p className="text-gray-700 mb-4">
              Read that with the caveats attached. It is one trial, open-label, in adults with
              obesity and without diabetes, using the weight-management formulations at maximum
              tolerated dose. It says nothing about which drug you will tolerate, what your insurer
              covers, what either costs you, or what your medical history rules out. Direct
              comparisons in other populations exist and answer different questions. SURPASS-2
              (Frías JP, et al., <em>New England Journal of Medicine</em>, 2021) randomized adults
              with type 2 diabetes to tirzepatide or semaglutide, with glycemic control as the
              primary endpoint. Our{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide comparison</Link>{' '}
              digs into the full evidence base on both sides.
            </p>

            <h2 id="dosing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the FDA Labels Specify for Dosing</h2>

            <p className="text-gray-700 mb-4">
              What follows is educational reporting of what the FDA-approved labels specify. It is
              not a recommendation, and it is not a schedule for you. Your prescriber determines your
              dosing, your titration pace, and whether any of these are appropriate at all.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the label specifies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic</td>
                    <td className="border border-gray-300 px-4 py-3">Start 0.25 mg once weekly. After 4 weeks, increase to 0.5 mg. If additional glycemic control is needed, increase to 1 mg after at least 4 weeks, then to 2 mg after at least 4 more weeks.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy injection</td>
                    <td className="border border-gray-300 px-4 py-3">Initiate at 0.25 mg once weekly for 4 weeks, then follow the label escalation table, titrating every 4 weeks. Usual recommended maintenance dosage is 2.4 mg once weekly.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy tablets</td>
                    <td className="border border-gray-300 px-4 py-3">Initiate at 1.5 mg once daily for 30 days, then titrate every 30 days per the label schedule. Recommended maintenance dosage is 25 mg orally once daily.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rybelsus</td>
                    <td className="border border-gray-300 px-4 py-3">3 mg once daily for 30 days (the label notes this dosage is not effective for glycemic control), then 7 mg, then 14 mg if additional glycemic control is needed.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic tablets</td>
                    <td className="border border-gray-300 px-4 py-3">1.5 mg once daily for 30 days (not effective for glycemic control), then 4 mg, then 9 mg if needed. Not substitutable with Rybelsus on a mg-to-mg basis.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Mounjaro</td>
                    <td className="border border-gray-300 px-4 py-3">Start 2.5 mg once weekly. After 4 weeks, increase to 5 mg. Further increases in 2.5 mg increments after at least 4 weeks. Maximum 15 mg weekly in adults, 10 mg in pediatric patients 10 and older.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Zepbound</td>
                    <td className="border border-gray-300 px-4 py-3">Start 2.5 mg once weekly for 4 weeks, then increase in 2.5 mg increments after at least 4 weeks. Maintenance for weight reduction is 5, 10, or 15 mg weekly; for obstructive sleep apnea it is 10 or 15 mg weekly. Maximum 15 mg.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Foundayo</td>
                    <td className="border border-gray-300 px-4 py-3">Start 0.8 mg once daily. After at least 30 days, 2.5 mg. After at least 30 more days, 5.5 mg. Further steps to 9, 14.5, or 17.2 mg after at least 30 days each. Maximum 17.2 mg daily.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Saxenda</td>
                    <td className="border border-gray-300 px-4 py-3">Initiate at 0.6 mg daily for one week, then increase at weekly intervals to the recommended 3 mg daily dose.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Victoza</td>
                    <td className="border border-gray-300 px-4 py-3">Initiate at 0.6 mg daily for one week, then 1.2 mg. If additional glycemic control is required, 1.8 mg after at least one week on 1.2 mg.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Trulicity</td>
                    <td className="border border-gray-300 px-4 py-3">Start 0.75 mg once weekly. After 4 weeks, may increase to 1.5 mg, then in 1.5 mg increments after at least 4 weeks. Maximum 4.5 mg weekly.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Byetta</td>
                    <td className="border border-gray-300 px-4 py-3">5 mcg twice daily within 60 minutes before the two main meals, increased to 10 mcg twice daily after one month based on clinical response.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">A note on what this table is not</h4>
              <p className="text-gray-700">
                Nothing here is a starting point, a target, or a conversion between drugs. The labels
                do not provide dose equivalence between different GLP-1 molecules, and none of these
                products should be started, changed, stacked, or combined with another GLP-1 outside
                a prescriber&apos;s direction. Several labels explicitly state that coadministration
                with another GLP-1 receptor agonist is not recommended.
              </p>
            </div>

            <h2 id="side-effects" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side Effects Across the Class</h2>

            <p className="text-gray-700 mb-4">
              The most common adverse reactions listed on these labels are strikingly consistent,
              because they trace back to the shared mechanism. The Mounjaro label lists nausea,
              diarrhea, decreased appetite, vomiting, constipation, dyspepsia, and abdominal pain as
              most common. Ozempic lists nausea, vomiting, diarrhea, abdominal pain, and
              constipation. Zepbound adds injection-site reactions, fatigue, eructation, hair loss,
              and gastroesophageal reflux to that gastrointestinal core.
            </p>

            <p className="text-gray-700 mb-4">
              Beyond the common reactions, the labels share a set of warnings worth knowing before
              any conversation with a prescriber:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Boxed warning for thyroid C-cell tumors.</strong> Semaglutide, tirzepatide, liraglutide, dulaglutide, and orforglipron products all carry a boxed warning based on rodent studies, and are contraindicated in people with a personal or family history of medullary thyroid carcinoma or MEN 2. Byetta is the exception in this list and does not carry that boxed warning.</li>
              <li><strong>Acute pancreatitis.</strong> Observed with GLP-1 receptor agonists; the labels direct discontinuation if pancreatitis is suspected.</li>
              <li><strong>Severe gastrointestinal adverse reactions.</strong> A warning added or updated across several labels in 2025 and 2026.</li>
              <li><strong>Acute gallbladder disease</strong> and <strong>acute kidney injury from volume depletion</strong> (dehydration driven by vomiting or diarrhea).</li>
              <li><strong>Hypoglycemia</strong> when combined with insulin or an insulin secretagogue.</li>
              <li><strong>Pulmonary aspiration during general anesthesia or deep sedation</strong>, a consequence of delayed gastric emptying, which is why anesthesiologists now ask about these drugs before procedures.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Per-drug detail lives in our{' '}
              <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">Ozempic side effects guide</Link>{' '}
              and{' '}
              <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">tirzepatide side effects guide</Link>. Report
              anything unexpected to your prescriber, not to a forum.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Compounded GLP-1s Are Not on This List</h2>

            <p className="text-gray-700 mb-4">
              Compounded semaglutide and tirzepatide are <strong>not FDA-approved</strong>. The FDA
              does not review compounded drugs for safety, effectiveness, or quality before they are
              marketed. That is the FDA&apos;s own framing, not ours, and it is the reason none of
              these products appear in the table above.
            </p>

            <p className="text-gray-700 mb-4">
              The agency has been specific about the harm it has seen. FDA states it received
              multiple adverse event reports, some requiring hospitalization, that may relate to{' '}
              <strong>dosing errors with compounded injectable semaglutide</strong>, arising from
              patients measuring and self-administering incorrect doses and from health care
              professionals miscalculating doses. It has also received reports involving compounded
              semaglutide or tirzepatide prescribed at doses beyond what the approved label allows,
              including larger single doses, more frequent dosing, and faster titration.
            </p>

            <p className="text-gray-700 mb-4">
              Separately, FDA has warned about <strong>fraudulent compounded products</strong> whose
              labels carry false information, including cases where the compounding pharmacy named on
              the label does not exist, and cases naming a licensed pharmacy that did not make the
              product. The agency has also stated that <strong>retatrutide and cagrilintide cannot be
              used in compounding</strong> under federal law, are not components of any FDA-approved
              drug, and have not been found safe and effective for any condition.
            </p>

            <p className="text-gray-700 mb-4">
              If you are weighing a compounded program anyway, read our{' '}
              <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
              first, and go in knowing what you are and are not buying.
            </p>

            <h2 id="legacy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Older Agents and Combination Products</h2>

            <p className="text-gray-700 mb-4">
              A few GLP-1 brand names still circulate in older articles but no longer have active
              listings in the FDA National Drug Code Directory: <strong>Bydureon and Bydureon
              BCise</strong> (exenatide extended-release), <strong>Adlyxin</strong> (lixisenatide as
              a standalone), and <strong>Tanzeum</strong> (albiglutide). If a source is pitching you
              one of those, it is out of date.
            </p>

            <p className="text-gray-700 mb-4">
              Lixisenatide does remain available in the US, but only inside{' '}
              <strong>Soliqua 100/33</strong>, its fixed-ratio combination with insulin glargine.
              Liraglutide likewise appears inside <strong>Xultophy 100/3.6</strong> alongside insulin
              degludec. Both combinations are indicated as an adjunct to diet and exercise to improve
              glycemic control in adults with type 2 diabetes, and both are daily injections.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Byetta</strong> (exenatide, twice daily) is the oldest agent still on the list.
              It is the only product here without the thyroid C-cell boxed warning, and it is dosed
              before meals rather than on a fixed weekly schedule.
            </p>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What These Cost and How People Access Them</h2>

            <p className="text-gray-700 mb-4">
              Cash prices for this class move constantly, vary by brand and by pharmacy, and depend
              heavily on manufacturer self-pay channels and telehealth program structure. We track
              those numbers on dedicated pages rather than freezing a figure here that will be stale
              in a month:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">Semaglutide cost</Link>: verified monthly program prices from clinics that publish a number</li>
              <li><Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">Tirzepatide cost</Link>: the same methodology applied to Zepbound and Mounjaro programs</li>
              <li><Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">Cheapest GLP-1 without insurance</Link>: both molecules, price-compared across access routes</li>
              <li><Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">Best GLP-1 weight loss programs</Link>: which telehealth programs carry which medications, and what each includes</li>
              <li><Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">Ozempic alternatives</Link>: what to consider when Ozempic is not the right fit or not accessible</li>
              <li><Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinics by state</Link>: cash-pay clinics near you</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Whatever route you take, every product on this page is prescription-only, requires a
              licensed prescriber, and involves ongoing monitoring. The list above tells you what
              exists. It does not tell you what is right for you.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay GLP-1 Programs</h3>
            <p className="mb-6 text-blue-100">
              Verified monthly prices, what each program includes, and clinics by state.
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
              This guide is for educational purposes only and is not medical advice. It is a
              reference summary of FDA-approved prescribing information and does not replace the full
              label or a conversation with a clinician. Every medication listed here is
              prescription-only. Dosing information is reported as the FDA label states it and is not
              a recommendation. Only a licensed prescriber can determine whether any of these
              medications is appropriate for you, at what dose, and on what schedule. Do not start,
              stop, change, combine, or convert between these medications on your own. Consult a
              licensed clinician about your specific situation, and read the current prescribing
              information for any product you are prescribed. Labels change; the citations below link
              to the live sources.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — OZEMPIC (semaglutide) injection prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — WEGOVY (semaglutide) injection and tablets prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — RYBELSUS and OZEMPIC tablets (oral semaglutide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — MOUNJARO (tirzepatide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — ZEPBOUND (tirzepatide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — FOUNDAYO (orforglipron) tablets prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3946d389-0926-4f77-a708-0acb8153b143" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — SAXENDA (liraglutide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a9ef4ea-c76a-4d34-a604-27c5b505f5a4" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — VICTOZA (liraglutide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=463050bd-2b1c-40f5-b3c3-0a04bb433309" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — TRULICITY (dulaglutide) prescribing information</a></li>
              <li>• <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=53d03c03-ebf7-418d-88a8-533eabd2ee4f" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed — BYETTA (exenatide) prescribing information</a></li>
              <li>• <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA — FDA&apos;s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss</a></li>
              <li>• <a href="https://pubmed.ncbi.nlm.nih.gov/40353578/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Aronne LJ, et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5). N Engl J Med. 2025;393(1):26-36</a></li>
              <li>• <a href="https://pubmed.ncbi.nlm.nih.gov/34170647/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fr&iacute;as JP, et al. Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2). N Engl J Med. 2021;385(6):503-515</a></li>
              <li>• <a href="https://dps.fda.gov/ndc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA National Drug Code Directory (marketing status and generic listings)</a></li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the GLP-1 Brand Name Cheat Sheet"
            description="Every FDA-approved GLP-1, its brand names, approved use, and form on one page."
            source="guide_glp1_medications_list"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
