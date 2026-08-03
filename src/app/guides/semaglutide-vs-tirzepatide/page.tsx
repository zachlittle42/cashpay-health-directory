import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/semaglutide-vs-tirzepatide';

export const metadata: Metadata = {
  title: { absolute: 'Semaglutide vs Tirzepatide: Mechanism, Labels & Cost' },
  alternates: { canonical: URL },
  description:
    'Semaglutide vs tirzepatide compared: GLP-1 vs dual GIP/GLP-1, brand-by-brand FDA labels, head-to-head SURMOUNT-5 results (20.2% vs 13.7%), and cost.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page and sourced to the FDA labels, the peer-reviewed
// head-to-head trials, or ClinicalTrials.gov. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, it never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the difference between semaglutide and tirzepatide?',
    answer:
      'Semaglutide is a GLP-1 receptor agonist: it mimics one gut incretin hormone. Tirzepatide is a dual GIP and GLP-1 receptor agonist: one molecule that activates two incretin pathways. Semaglutide is made by Novo Nordisk and sold as Ozempic, Wegovy and Rybelsus; tirzepatide is made by Eli Lilly and sold as Mounjaro and Zepbound. Both are once-weekly subcutaneous injections, and semaglutide is also available as a tablet. The FDA-approved use depends on the brand, not the molecule.',
  },
  {
    question: 'Is tirzepatide better than semaglutide for weight loss?',
    answer:
      'In SURMOUNT-5, the head-to-head trial published in the New England Journal of Medicine, 751 adults with obesity and without type 2 diabetes were randomized for 72 weeks. Mean weight change was -20.2% with tirzepatide (10 or 15 mg) versus -13.7% with semaglutide (1.7 or 2.4 mg). Those are group averages under trial conditions, not a promise of an individual result, and the trial used the weight-management brands Zepbound and Wegovy. Which drug is appropriate for you is a decision for a licensed prescriber.',
  },
  {
    question: 'Which brands are semaglutide and which are tirzepatide?',
    answer:
      'Semaglutide brands: Ozempic (injection, approved for type 2 diabetes), Wegovy (approved for chronic weight management and cardiovascular risk reduction), and Rybelsus (oral tablet, approved for type 2 diabetes). Tirzepatide brands: Mounjaro (approved for type 2 diabetes) and Zepbound (approved for chronic weight management and for moderate to severe obstructive sleep apnea in adults with obesity). Using a diabetes-labeled brand for weight loss is off-label prescribing.',
  },
  {
    question: 'Is semaglutide or tirzepatide cheaper without insurance?',
    answer:
      'Neither molecule is reliably cheaper than the other, because your cash price is set by the brand, the dose, and the purchase route rather than by the drug class. Novo Nordisk publishes a list price of $1,349.02 per package for Wegovy and $1,027.51 per package for Ozempic, and both manufacturers run direct self-pay programs that price well below list. Clinic and telehealth programs are priced separately again. Compare the verified per-clinic monthly medians in our semaglutide cost and tirzepatide cost guides, then confirm the current number with the pharmacy or clinic.',
  },
  {
    question: 'Can you switch from semaglutide to tirzepatide?',
    answer:
      'Switching is a prescriber decision, and there is no milligram-to-milligram conversion between the two. They are different molecules with different receptor targets and different label titration schedules: the semaglutide injection labels start at 0.25 mg weekly, while the tirzepatide labels start at 2.5 mg weekly. Do not convert, stack or self-adjust doses. Ask the prescribing clinician how a transition should be handled.',
  },
  {
    question: 'Do semaglutide and tirzepatide have different side effects?',
    answer:
      'The profiles overlap heavily. Both labels list gastrointestinal reactions as the most common: nausea, diarrhea, vomiting, constipation, decreased appetite and abdominal pain, mostly during dose escalation. The Mounjaro label reports nausea up to 18% and diarrhea up to 17%. Both molecules carry the FDA boxed warning for thyroid C-cell tumors seen in rodents, and both are contraindicated in people with a personal or family history of medullary thyroid carcinoma or MEN 2. Review your own risk with a clinician.',
  },
  {
    question: 'How does retatrutide compare to tirzepatide?',
    answer:
      'Retatrutide is investigational and not FDA-approved, so no honest comparison to tirzepatide as a treatment is possible yet. It is a triple agonist of the GIP, GLP-1 and glucagon receptors, one more target than tirzepatide. In a 338-person phase 2 trial published in the New England Journal of Medicine, mean weight change at 48 weeks was -24.2% at the 12 mg dose versus -2.1% with placebo. A phase 3 head-to-head trial of retatrutide against tirzepatide in adults with obesity is registered on ClinicalTrials.gov and listed as active, not recruiting. Any retatrutide sold today is not an FDA-approved product.',
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

// Molecule-level comparison. Mechanism, indications and dose ranges are read off
// the current FDA labeling on DailyMed; trial rows are from the peer-reviewed
// SURMOUNT-5 and SURPASS-2 publications indexed on PubMed.
const COMPARE_ROWS = [
  {
    attribute: 'Drug class',
    sema: 'GLP-1 receptor agonist (single incretin)',
    tirz: 'Dual GIP + GLP-1 receptor agonist (two incretins)',
  },
  {
    attribute: 'Manufacturer',
    sema: 'Novo Nordisk',
    tirz: 'Eli Lilly',
  },
  {
    attribute: 'Brands',
    sema: 'Ozempic, Wegovy, Rybelsus',
    tirz: 'Mounjaro, Zepbound',
  },
  {
    attribute: 'Type 2 diabetes brand',
    sema: 'Ozempic (injection), Rybelsus (tablet)',
    tirz: 'Mounjaro (injection)',
  },
  {
    attribute: 'Weight-management brand',
    sema: 'Wegovy',
    tirz: 'Zepbound',
  },
  {
    attribute: 'Oral form available',
    sema: 'Yes (semaglutide tablets)',
    tirz: 'No (injection only)',
  },
  {
    attribute: 'Label dose range (weekly injection)',
    sema: 'Ozempic 0.25 to 2 mg; Wegovy 0.25 to 2.4 mg, up to 7.2 mg',
    tirz: 'Mounjaro and Zepbound 2.5 to 15 mg',
  },
  {
    attribute: 'Head-to-head weight trial (SURMOUNT-5, 72 weeks)',
    sema: '-13.7% mean body-weight change',
    tirz: '-20.2% mean body-weight change',
  },
  {
    attribute: 'Head-to-head diabetes trial (SURPASS-2, 40 weeks)',
    sema: '-1.86 percentage points A1C (1 mg)',
    tirz: '-2.01 to -2.30 percentage points A1C (5 to 15 mg)',
  },
  {
    attribute: 'Boxed warning',
    sema: 'Thyroid C-cell tumors in rodents',
    tirz: 'Thyroid C-cell tumors in rodents',
  },
];

// Brand-to-indication map, quoted from the current FDA labeling. This table is
// the compliance spine of the page: indications are never blurred across brands.
const INDICATIONS = [
  {
    brand: 'Ozempic (injection)',
    molecule: 'Semaglutide',
    indication: 'Type 2 diabetes: adjunct to diet and exercise to improve glycemic control in adults, plus cardiovascular and kidney risk reduction in defined populations',
    weightLoss: 'Not approved for weight loss',
  },
  {
    brand: 'Wegovy (injection and tablet)',
    molecule: 'Semaglutide',
    indication: 'Chronic weight management in adults and, for the injection, patients 12 and older; reduction of major adverse cardiovascular events in adults with established CV disease and obesity or overweight; the injection also carries an accelerated approval in noncirrhotic MASH with F2-F3 fibrosis',
    weightLoss: 'Approved',
  },
  {
    brand: 'Rybelsus (tablet)',
    molecule: 'Oral semaglutide',
    indication: 'Type 2 diabetes: adjunct to diet and exercise to improve glycemic control in adults, plus cardiovascular risk reduction in adults with type 2 diabetes',
    weightLoss: 'Not approved for weight loss',
  },
  {
    brand: 'Mounjaro (injection)',
    molecule: 'Tirzepatide',
    indication: 'Type 2 diabetes: adjunct to diet and exercise to improve glycemic control in adults and pediatric patients 10 years and older',
    weightLoss: 'Not approved for weight loss',
  },
  {
    brand: 'Zepbound (injection)',
    molecule: 'Tirzepatide',
    indication: 'Chronic weight reduction and long-term maintenance in adults with obesity, or overweight with at least one weight-related comorbidity; also moderate to severe obstructive sleep apnea in adults with obesity',
    weightLoss: 'Approved',
  },
];

export default function SemaglutideVsTirzepatide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Semaglutide vs Tirzepatide: Mechanism, FDA Labels and Cost',
    description:
      'A sourced comparison of semaglutide and tirzepatide: GLP-1 versus dual GIP/GLP-1 mechanism, the brand-by-brand FDA-approved indications, head-to-head SURMOUNT-5 and SURPASS-2 trial results, label titration schedules, cost routes, and where investigational retatrutide fits.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: [
      {
        '@type': 'Drug',
        name: 'Semaglutide',
        activeIngredient: 'Semaglutide',
        manufacturer: { '@type': 'Organization', name: 'Novo Nordisk' },
      },
      {
        '@type': 'Drug',
        name: 'Tirzepatide',
        activeIngredient: 'Tirzepatide',
        manufacturer: { '@type': 'Organization', name: 'Eli Lilly and Company' },
      },
    ],
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-03',
    dateModified: '2026-08-03',
    citation: [
      { '@type': 'CreativeWork', name: 'DailyMed (FDA labeling) — Ozempic (semaglutide) injection prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79' },
      { '@type': 'CreativeWork', name: 'DailyMed (FDA labeling) — Wegovy (semaglutide) injection and tablet prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b' },
      { '@type': 'CreativeWork', name: 'DailyMed (FDA labeling) — Rybelsus and oral semaglutide tablets prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98' },
      { '@type': 'CreativeWork', name: 'DailyMed (FDA labeling) — Mounjaro (tirzepatide) injection prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0' },
      { '@type': 'CreativeWork', name: 'DailyMed (FDA labeling) — Zepbound (tirzepatide) injection prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b' },
      { '@type': 'CreativeWork', name: 'FDA — Mounjaro (tirzepatide) approved prescribing information (PDF)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf' },
      { '@type': 'CreativeWork', name: 'FDA — Zepbound (tirzepatide) approved prescribing information (PDF)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf' },
      { '@type': 'CreativeWork', name: 'FDA — first medication approved for obstructive sleep apnea', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea' },
      { '@type': 'CreativeWork', name: 'SURMOUNT-5: Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (N Engl J Med, 2025)', url: 'https://pubmed.ncbi.nlm.nih.gov/40353578/' },
      { '@type': 'CreativeWork', name: 'SURPASS-2: Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (N Engl J Med, 2021)', url: 'https://pubmed.ncbi.nlm.nih.gov/34170647/' },
      { '@type': 'CreativeWork', name: 'Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial (N Engl J Med, 2023)', url: 'https://pubmed.ncbi.nlm.nih.gov/37366315/' },
      { '@type': 'CreativeWork', name: 'ClinicalTrials.gov — retatrutide compared with tirzepatide in adults with obesity (NCT06662383)', url: 'https://clinicaltrials.gov/study/NCT06662383' },
      { '@type': 'CreativeWork', name: 'FDA — concerns with unapproved GLP-1 drugs used for weight loss', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — published list price (WAC) for Wegovy', url: 'https://www.novopricing.com/wegovy.html' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — published list price (WAC) for Ozempic', url: 'https://www.novopricing.com/ozempic.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Semaglutide vs Tirzepatide', item: URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Semaglutide vs Tirzepatide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 &amp; Weight Loss Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                GLP-1 Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Semaglutide vs Tirzepatide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Two molecules, five brands, and a set of FDA labels that do not say what most
              articles imply. Here is the mechanism, the label-by-label indication map, the
              head-to-head trial evidence, and what each one costs.
            </p>

            {/* Direct-answer lead: a self-contained 40-80 word summary of the head
                query, restating facts detailed below — the extractable answer box. */}
            <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Semaglutide</strong> is a GLP-1 receptor agonist (Ozempic, Wegovy,
                Rybelsus). <strong>Tirzepatide</strong> is a dual GIP and GLP-1 receptor agonist
                (Mounjaro, Zepbound). In SURMOUNT-5, the 72-week head-to-head trial, mean weight
                change was <strong>-20.2% with tirzepatide</strong> versus{' '}
                <strong>-13.7% with semaglutide</strong>. Only Wegovy and Zepbound are approved for
                weight management; Ozempic, Rybelsus and Mounjaro are approved for type 2 diabetes.
                This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Sourced to current FDA labeling and peer-reviewed trials &middot; 14 min read
            </p>
          </div>
        </section>

        {/* At-a-glance comparison */}
        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Semaglutide vs Tirzepatide at a Glance</h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Attribute</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Semaglutide</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r, i) => (
                  <tr key={r.attribute} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.attribute}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.sema}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Mechanism, indication and dose-range rows are read off the current FDA labeling for each
            brand. Trial rows are group averages from the published SURMOUNT-5 and SURPASS-2 studies,
            not individual outcomes. Doses are set by a prescriber. For the wider category, see the{' '}
            <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">
              full list of GLP-1 medications
            </Link>{' '}
            and the{' '}
            <Link href="/guides/glp1-weight-loss-complete-guide" className="text-blue-600 hover:underline">
              complete GLP-1 weight-loss guide
            </Link>.
          </p>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-700">
              <strong>On the spelling.</strong> The drug is <strong>tirzepatide</strong>. It is very
              commonly searched as &quot;tirzepitide,&quot; &quot;terzepatide&quot; or
              &quot;tirzepatide vs semaglutide&quot; in either order. All of those point at the same
              molecule described here. If a seller spells it differently on a label or invoice, treat
              that as a reason to check what you are actually being sold.
            </p>
          </div>
        </section>

        {/* Mechanism */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Mechanism: One Incretin Pathway vs Two
            </h2>

            <div className="prose prose-lg max-w-none">
              <p>
                The comparison starts with receptors, not brands. Your gut releases incretin
                hormones after you eat. Two of them matter here: <strong>GLP-1</strong>{' '}
                (glucagon-like peptide-1) and <strong>GIP</strong> (glucose-dependent insulinotropic
                polypeptide). Both amplify insulin release when glucose is high, and both influence
                appetite signaling and how quickly the stomach empties.
              </p>
              <p>
                <strong>Semaglutide is a GLP-1 receptor agonist.</strong> It is a single-target
                molecule: it binds the GLP-1 receptor and mimics that one hormone. That mechanism
                drives the effects the labels describe for both its diabetes and its weight
                indications, glycemic improvement and reduced energy intake.
              </p>
              <p>
                <strong>Tirzepatide is a dual GIP and GLP-1 receptor agonist.</strong> It is a single
                peptide engineered to activate both receptors. FDA labeling describes tirzepatide as
                a GIP and GLP-1 receptor agonist, which is the structural difference between the two
                drugs, and the reason no straight milligram-for-milligram equivalence exists between
                them.
              </p>
              <p>
                Two practical consequences follow from that, and they are the ones worth carrying
                into a clinician conversation:
              </p>
              <ul>
                <li>
                  <strong>The dose numbers are not comparable.</strong> Semaglutide injection labels
                  run 0.25 mg to 2.4 mg weekly (with a higher 7.2 mg option on the Wegovy label);
                  tirzepatide labels run 2.5 mg to 15 mg weekly. A larger number on a tirzepatide pen
                  does not mean a larger dose in any clinical sense.
                </li>
                <li>
                  <strong>Response and tolerability can differ per person.</strong> Adding GIP
                  activity changes the pharmacology. Group averages from trials say nothing certain
                  about how one individual will respond or what side effects they will have.
                </li>
              </ul>
              <p>
                Everything downstream, the brands, the trial results, the pricing, is a consequence
                of this one structural difference plus the commercial choices Novo Nordisk and Eli
                Lilly made about which indication to pursue under which brand name.
              </p>
            </div>
          </div>
        </section>

        {/* Brand + indication map */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Which Brand Is Which, and What Each Is Actually Approved For
          </h2>
          <p className="text-gray-600 mb-6 max-w-4xl">
            This is where most comparisons get sloppy. Two molecules carry five US brand names, and
            the FDA-approved indication belongs to the brand, not the molecule. Semaglutide is
            approved for weight management as Wegovy but not as Ozempic. Tirzepatide is approved for
            weight management as Zepbound but not as Mounjaro. The indications below are taken from
            the current prescribing information for each product.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Brand</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Molecule</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">FDA-approved indication</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Weight loss?</th>
                </tr>
              </thead>
              <tbody>
                {INDICATIONS.map((row, i) => (
                  <tr key={row.brand} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.brand}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.molecule}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.indication}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.weightLoss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Off-label prescribing, named plainly</h3>
            <p className="text-sm text-gray-800">
              Ozempic, Rybelsus and Mounjaro are approved to improve glycemic control in type 2
              diabetes. None of the three is approved for weight loss. Prescribing any of them for
              weight reduction is <strong>off-label prescribing</strong>, which is legal for a
              licensed clinician but is not the same as an FDA-approved use, and it frequently
              changes what insurance will cover. If weight management is the goal, the on-label
              options are Wegovy and Zepbound. See our{' '}
              <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">
                Wegovy vs Ozempic comparison
              </Link>{' '}
              for the same-molecule version of this problem on the semaglutide side, and{' '}
              <Link href="/guides/mounjaro-vs-ozempic" className="text-blue-600 hover:underline">
                Mounjaro vs Ozempic
              </Link>{' '}
              for the diabetes-brand comparison.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>
              Two label details deserve their own line, because they are unique to one side of this
              comparison:
            </p>
            <ul>
              <li>
                <strong>Zepbound carries an obstructive sleep apnea indication.</strong> Tirzepatide
                was the first medication FDA-approved to treat moderate to severe obstructive sleep
                apnea in adults with obesity. No semaglutide product carries that indication.
              </li>
              <li>
                <strong>Semaglutide is the only one of the two available as a tablet.</strong> Oral
                semaglutide tablets are marketed for type 2 diabetes under the Rybelsus name, and the
                Wegovy label now covers a tablet as well as the injection. Tirzepatide is injection
                only. If swallowing a pill instead of injecting is the deciding factor, that is a
                semaglutide-only path today. Our{' '}
                <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">
                  GLP-1 pill guide
                </Link>{' '}
                covers the oral options in detail.
              </li>
            </ul>
          </div>
        </section>

        {/* Head-to-head evidence */}
        <section className="bg-blue-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Head-to-Head Evidence: What the Trials Actually Compared
            </h2>

            <div className="prose prose-lg max-w-none">
              <p>
                Most drug comparisons are cross-trial guesswork, comparing a number from one study
                against a number from a different study with different patients. Semaglutide and
                tirzepatide are an unusual case: they have been compared directly, in two randomized
                trials, one for obesity and one for type 2 diabetes.
              </p>

              <h3>SURMOUNT-5: obesity, 72 weeks</h3>
              <p>
                Published in the <em>New England Journal of Medicine</em> in 2025, SURMOUNT-5
                randomized <strong>751 adults</strong> with obesity and without type 2 diabetes to
                tirzepatide (maximum tolerated dose of 10 or 15 mg weekly) or semaglutide (maximum
                tolerated dose of 1.7 or 2.4 mg weekly) for 72 weeks.
              </p>
              <ul>
                <li>
                  Mean percentage change in body weight: <strong>-20.2%</strong> with tirzepatide
                  (95% CI, -21.4 to -19.1) versus <strong>-13.7%</strong> with semaglutide (95% CI,
                  -14.9 to -12.6), P&lt;0.001.
                </li>
                <li>
                  The most common adverse events in both groups were gastrointestinal, mostly mild to
                  moderate, and occurred primarily during dose escalation.
                </li>
              </ul>

              <h3>SURPASS-2: type 2 diabetes, 40 weeks</h3>
              <p>
                Published in the <em>New England Journal of Medicine</em> in 2021, SURPASS-2 was an
                open-label 40-week trial that randomized <strong>1,879 adults</strong> with type 2
                diabetes to tirzepatide 5, 10 or 15 mg weekly or semaglutide 1 mg weekly.
              </p>
              <ul>
                <li>
                  A1C reduction: <strong>-2.01, -2.24 and -2.30 percentage points</strong> for
                  tirzepatide 5, 10 and 15 mg respectively, versus <strong>-1.86 percentage
                  points</strong> for semaglutide 1 mg.
                </li>
                <li>
                  Body-weight reduction was greater with tirzepatide, with least-squares mean
                  estimated treatment differences of <strong>-1.9 kg, -3.6 kg and -5.5 kg</strong>{' '}
                  versus semaglutide 1 mg.
                </li>
              </ul>

              <div className="bg-white border border-blue-200 rounded-lg p-5 not-prose my-6">
                <h4 className="font-bold text-gray-900 mb-2">Read these numbers correctly</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>
                    <strong>They are group averages.</strong> A trial mean is not a prediction for
                    any individual, and both trials paired the drug with diet and activity changes.
                    No result is guaranteed.
                  </li>
                  <li>
                    <strong>SURMOUNT-5 used the weight-management brands.</strong> The doses studied
                    correspond to Zepbound and Wegovy, not to Mounjaro and Ozempic.
                  </li>
                  <li>
                    <strong>SURPASS-2 compared semaglutide at 1 mg</strong>, the diabetes dose, not
                    the higher weight-management doses. That comparison is about glycemic control in
                    type 2 diabetes.
                  </li>
                  <li>
                    <strong>Bigger average is not automatically better for you.</strong> Tolerability,
                    coverage, comorbidities, the pill-versus-injection question and the sleep-apnea
                    indication all move the decision. That decision belongs to a prescriber.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dosing */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dosing: What the FDA Labels Specify
          </h2>
          <p className="text-gray-600 mb-6 max-w-4xl">
            The table below reports the titration schedules printed in the current FDA prescribing
            information for each brand. It is educational reporting of published labeling, nothing
            more. <strong>A prescriber determines your dose, your escalation pace, and whether you
            escalate at all.</strong> Do not start, change, combine or convert doses on your own.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Label starting dose</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Label escalation</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Label maximum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Ozempic (semaglutide)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">0.25 mg once weekly for 4 weeks</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">0.5 mg, then 1 mg, then 2 mg, each after at least 4 weeks at the prior dose</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">2 mg once weekly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Wegovy injection (semaglutide)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">0.25 mg once weekly, weeks 1 to 4</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">0.5 mg (weeks 5 to 8), 1 mg (weeks 9 to 12), 1.7 mg (weeks 13 to 16), then maintenance from week 17</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Maintenance 1.7 or 2.4 mg; label permits 7.2 mg once weekly for weight reduction in adults tolerating 2.4 mg for at least 4 weeks</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Rybelsus (oral semaglutide, type 2 diabetes)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">3 mg once daily, days 1 to 30</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">7 mg once daily from day 31; may increase to 14 mg from day 61 if more glycemic control is needed</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">14 mg once daily</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Mounjaro (tirzepatide)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">2.5 mg once weekly for 4 weeks</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Increase to 5 mg, then in 2.5 mg increments after at least 4 weeks at the current dose</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">15 mg once weekly in adults; 10 mg in patients 10 years and older</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Zepbound (tirzepatide)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">2.5 mg once weekly for 4 weeks</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Increase to 5 mg, then in 2.5 mg increments after at least 4 weeks at the current dose</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">15 mg once weekly (maintenance 5, 10 or 15 mg for weight; 10 or 15 mg for obstructive sleep apnea)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5 mt-6">
            <p className="text-sm text-gray-800">
              <strong>There is no conversion table between these two drugs.</strong> Semaglutide
              milligrams and tirzepatide milligrams are not interchangeable units, and this guide will
              not tell you how to switch between them. Switching, restarting after a gap, splitting a
              vial, or holding a dose are all clinical decisions. Bring the question to the
              prescriber. For deeper label detail, see our{' '}
              <Link href="/guides/semaglutide-dosing-guide" className="text-blue-600 hover:underline">
                semaglutide dosing guide
              </Link>{' '}
              and{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">
                tirzepatide dosing guide
              </Link>.
            </p>
          </div>
        </section>

        {/* Side effects */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Side Effects and Warnings: Mostly Shared</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Since both drugs act on the GLP-1 receptor, their most common adverse reactions
                overlap almost completely. The labels for both list gastrointestinal effects at the
                top: <strong>nausea, diarrhea, vomiting, constipation, decreased appetite, abdominal
                pain and dyspepsia</strong>, generally most noticeable during dose escalation. The
                Mounjaro label reports these as occurring in at least 5% of patients, with nausea up
                to 18% and diarrhea up to 17%.
              </p>
              <p>
                Both molecules carry the same FDA <strong>boxed warning</strong>: in rodents, they
                caused thyroid C-cell tumors at clinically relevant exposures, and it is unknown
                whether they cause thyroid C-cell tumors, including medullary thyroid carcinoma, in
                humans. Both are contraindicated in people with a personal or family history of
                medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2. Both
                labels also describe rarer serious risks including pancreatitis, gallbladder disease,
                and, when combined with insulin or a sulfonylurea, hypoglycemia.
              </p>
              <p>
                A shared consideration that neither label frames as a side effect: weight lost on
                either drug is not exclusively fat. Preserving lean mass through protein intake and
                resistance training is part of a serious plan on either molecule, which we cover in{' '}
                <Link href="/guides/glp1-and-muscle-loss" className="text-blue-600 hover:underline">
                  GLP-1 and muscle loss
                </Link>.
              </p>
              <p>
                Brand-specific detail lives in the dedicated guides:{' '}
                <Link href="/guides/tirzepatide-side-effects" className="text-blue-600 hover:underline">
                  tirzepatide side effects
                </Link>{' '}
                and{' '}
                <Link href="/guides/ozempic-side-effects" className="text-blue-600 hover:underline">
                  Ozempic side effects
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost: Semaglutide vs Tirzepatide</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Neither molecule is structurally cheaper than the other. Four things set what you
              actually pay, and the drug class is not one of them:
            </p>
            <ul>
              <li>
                <strong>The brand you are prescribed.</strong> List prices differ by product. Novo
                Nordisk publishes a list price (wholesale acquisition cost) of{' '}
                <strong>$1,349.02 per package</strong> for Wegovy and <strong>$1,027.51 per
                package</strong> for Ozempic. Almost nobody pays list. Eli Lilly publishes its own
                list and self-pay pricing for Mounjaro and Zepbound on its product and LillyDirect
                sites; check the current figures there rather than trusting a number in an article.
              </li>
              <li>
                <strong>The purchase route.</strong> A manufacturer self-pay program, a retail
                pharmacy with a savings card, a telehealth program, and a local weight-loss clinic
                are four different prices for the same prescription.
              </li>
              <li>
                <strong>What the monthly fee includes.</strong> A clinic program that bundles the
                medication, visits and labs is not comparable to a membership fee that bills the drug
                separately, even when the headline numbers look alike.
              </li>
              <li>
                <strong>Coverage.</strong> Plans routinely cover a GLP-1 for type 2 diabetes and deny
                the same molecule for weight management, or require prior authorization. Coverage,
                not chemistry, is usually the largest single swing in your out-of-pocket cost.
              </li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 not-prose my-8">
              <h3 className="font-bold text-gray-900 mb-3">Price both molecules before you decide</h3>
              <p className="text-sm text-gray-700 mb-3">
                We track cash-pay program prices quoted from clinics&apos; own websites and dated, so
                the comparison is like-for-like rather than anecdote-for-anecdote:
              </p>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>
                  <Link href="/guides/semaglutide-cost" className="hover:underline">
                    Semaglutide cost: verified monthly program prices
                  </Link>
                </li>
                <li>
                  <Link href="/guides/tirzepatide-cost" className="hover:underline">
                    Tirzepatide cost: verified monthly program prices
                  </Link>
                </li>
                <li>
                  <Link href="/guides/cheapest-glp1-without-insurance" className="hover:underline">
                    The cheapest GLP-1 without insurance, compared
                  </Link>
                </li>
                <li>
                  <Link href="/guides/best-glp1-weight-loss-programs" className="hover:underline">
                    Best GLP-1 weight-loss programs
                  </Link>
                </li>
                <li>
                  <Link href="/guides/ozempic-alternatives" className="hover:underline">
                    Ozempic alternatives and what they cost
                  </Link>
                </li>
              </ul>
            </div>

            <p>
              One honest framing on value. If SURMOUNT-5 is your reason for preferring tirzepatide,
              note that the trial compared the on-label weight-management products. Chasing that
              result through a cheaper off-label or non-FDA-approved supply is not the same
              intervention that produced the number.
            </p>
          </div>
        </section>

        {/* Compounded */}
        <section className="bg-yellow-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compounded Semaglutide and Tirzepatide Are Not FDA-Approved
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                A large share of the cheap semaglutide and tirzepatide advertised online is
                compounded, not brand product. This distinction is not a technicality:
              </p>
              <ul>
                <li>
                  <strong>Compounded drugs are not FDA-approved.</strong> FDA does not review
                  compounded versions of semaglutide or tirzepatide for safety, effectiveness or
                  quality before they are sold.
                </li>
                <li>
                  <strong>FDA has warned specifically about dosing errors with compounded GLP-1
                  products.</strong> The agency has received reports of adverse events tied to
                  patients measuring and self-administering doses from multi-dose vials and syringes,
                  including overdoses of many times the intended amount, and has flagged unapproved
                  GLP-1 drugs sold for weight loss as a safety concern.
                </li>
                <li>
                  <strong>Product identity is not guaranteed.</strong> Salt forms, research-use-only
                  peptides, and products bought from unregulated sellers are not the same as the
                  studied medicine, whatever the label says.
                </li>
              </ul>
              <p>
                None of this means every compounding pharmacy is illegitimate. It means a compounded
                product is a different risk category from the brand product a trial studied, and it
                should be discussed with the prescriber rather than assumed equivalent. Our{' '}
                <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">
                  compounded semaglutide guide
                </Link>{' '}
                covers the regulatory picture in full.
              </p>
            </div>
          </div>
        </section>

        {/* Retatrutide */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Retatrutide vs Tirzepatide: Investigational, Not Approved
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              &quot;Retatrutide vs tirzepatide&quot; is now a heavily searched comparison, so here is
              the honest version of it.
            </p>
            <p>
              <strong>Retatrutide is an investigational drug. It is not FDA-approved for any
              use.</strong> It cannot be legally prescribed or dispensed as an approved medicine in
              the United States, it has no FDA label, and it has no approved indication for weight
              loss, diabetes or anything else. Anything sold as retatrutide today, including
              &quot;research use only&quot; peptide vials, is outside the FDA-approval system
              entirely, with no assurance of identity, purity, sterility or dose.
            </p>
            <p>
              What is known comes from clinical research. Mechanistically, retatrutide goes one
              receptor further than tirzepatide: it is an agonist of the <strong>GIP, GLP-1 and
              glucagon receptors</strong>, a triple agonist, versus tirzepatide&apos;s dual GIP and
              GLP-1 action. In a phase 2 trial published in the{' '}
              <em>New England Journal of Medicine</em> in 2023, 338 adults with obesity were
              randomized for 48 weeks; mean body-weight change at 48 weeks was <strong>-24.2% at the
              12 mg dose</strong> versus <strong>-2.1% with placebo</strong>, with dose-dependent
              results across the lower dose groups.
            </p>
            <p>
              A phase 3 program is underway, including <strong>TRIUMPH-1</strong>, a completed
              placebo-controlled trial of about 2,335 participants without type 2 diabetes, and a
              registered phase 3 trial comparing <strong>retatrutide directly against
              tirzepatide</strong> in adults with obesity, listed on ClinicalTrials.gov as active and
              not recruiting.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5 not-prose my-6">
              <h3 className="font-bold text-gray-900 mb-2">What this means practically</h3>
              <ul className="text-sm text-gray-800 space-y-2">
                <li>
                  A phase 2 percentage cannot be compared to tirzepatide&apos;s phase 3 numbers as if
                  the two were equivalent evidence. Different trials, different populations,
                  different duration.
                </li>
                <li>
                  The direct comparison people are searching for is literally still being run. Until
                  that trial reports, &quot;retatrutide beats tirzepatide&quot; is a claim without
                  head-to-head data behind it.
                </li>
                <li>
                  The only tirzepatide products you can legally obtain as approved medicines are
                  Mounjaro and Zepbound, on their labeled indications. That is the practical
                  comparison available today.
                </li>
              </ul>
            </div>

            <p>
              If a seller offers you retatrutide, the correct response is not price-shopping. It is
              recognizing that you are being offered an unapproved drug. Bring it up with a licensed
              clinician before considering it.
            </p>
          </div>
        </section>

        {/* Which fits */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which One Fits Your Situation?</h2>
            <p className="text-gray-600 mb-6">
              There is no universal winner. These are the honest framings a prescriber conversation
              usually lands on.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg border-2 border-green-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tirzepatide may be discussed if</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>The head-to-head obesity trial average matters to you and you qualify for the on-label product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>You have moderate to severe obstructive sleep apnea with obesity, the one indication only tirzepatide carries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>Your coverage or self-pay route lands cheaper on the Lilly side</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Semaglutide may be discussed if</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>You want or need an oral option, which exists only on the semaglutide side</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>You need the cardiovascular or MASH indications carried on the Wegovy label</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">&#10003;</span>
                    <span>It is what your plan covers, or you are already established and tolerating it</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mt-8">
              <p>Bring these four questions to the appointment:</p>
              <ul>
                <li>Is my diagnosis type 2 diabetes or obesity, and which brand is on-label for it?</li>
                <li>What does my plan cover, and does it require prior authorization?</li>
                <li>What is the total cash price if coverage is denied, including labs and visits?</li>
                <li>What is the plan for tolerability during escalation, and for the long term?</li>
              </ul>
              <p>
                To see what cash-pay programs charge and who prescribes what near you, start at the{' '}
                <Link href="/weight-loss" className="text-blue-600 hover:underline">
                  GLP-1 and weight-loss clinic directory
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Cash-Pay GLP-1 Programs</h3>
            <p className="text-gray-600 mb-6">
              See what clinics and telehealth programs actually charge for semaglutide and
              tirzepatide, with every price quoted from the source and dated.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
            >
              Explore Weight-Loss Options
            </Link>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/guides/glp1-medications-list" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Every GLP-1 Medication, Listed</div>
              <div className="text-sm text-gray-600">Brand, molecule, and what each is approved to treat</div>
            </Link>

            <Link href="/guides/tirzepatide-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Tirzepatide Cost</div>
              <div className="text-sm text-gray-600">Verified monthly program prices across clinics</div>
            </Link>

            <Link href="/guides/semaglutide-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Semaglutide Cost</div>
              <div className="text-sm text-gray-600">Verified monthly program prices across clinics</div>
            </Link>

            <Link href="/guides/wegovy-vs-ozempic" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Wegovy vs Ozempic</div>
              <div className="text-sm text-gray-600">One molecule, two labels, two very different uses</div>
            </Link>

            <Link href="/guides/tirzepatide-dosing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Tirzepatide Dosing Guide</div>
              <div className="text-sm text-gray-600">What the FDA label specifies, step by step</div>
            </Link>

            <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Compounded Semaglutide</div>
              <div className="text-sm text-gray-600">Why not FDA-approved matters, and what FDA has warned about</div>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="mx-auto max-w-4xl px-4 pb-4">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; References</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>&bull; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA labeling) &mdash; Ozempic (semaglutide) injection: indications, titration, boxed warning</a></li>
              <li>&bull; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA labeling) &mdash; Wegovy (semaglutide) injection and tablet: indications, titration, boxed warning</a></li>
              <li>&bull; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA labeling) &mdash; Rybelsus and oral semaglutide tablets: type 2 diabetes indication</a></li>
              <li>&bull; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA labeling) &mdash; Mounjaro (tirzepatide): indication, titration, adverse reactions</a></li>
              <li>&bull; <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DailyMed (FDA labeling) &mdash; Zepbound (tirzepatide): weight and obstructive sleep apnea indications</a></li>
              <li>&bull; <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA &mdash; Mounjaro (tirzepatide) approved prescribing information (PDF)</a></li>
              <li>&bull; <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA &mdash; Zepbound (tirzepatide) approved prescribing information (PDF)</a></li>
              <li>&bull; <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-medication-obstructive-sleep-apnea" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA &mdash; first medication approved for obstructive sleep apnea</a></li>
              <li>&bull; <a href="https://pubmed.ncbi.nlm.nih.gov/40353578/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">SURMOUNT-5 &mdash; Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (N Engl J Med, 2025)</a></li>
              <li>&bull; <a href="https://pubmed.ncbi.nlm.nih.gov/34170647/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">SURPASS-2 &mdash; Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (N Engl J Med, 2021)</a></li>
              <li>&bull; <a href="https://pubmed.ncbi.nlm.nih.gov/37366315/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Triple-Hormone-Receptor Agonist Retatrutide for Obesity &mdash; A Phase 2 Trial (N Engl J Med, 2023)</a></li>
              <li>&bull; <a href="https://clinicaltrials.gov/study/NCT06662383" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ClinicalTrials.gov &mdash; phase 3 retatrutide compared with tirzepatide in adults with obesity (NCT06662383)</a></li>
              <li>&bull; <a href="https://clinicaltrials.gov/study/NCT05929066" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ClinicalTrials.gov &mdash; TRIUMPH-1 phase 3 retatrutide trial (NCT05929066)</a></li>
              <li>&bull; <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA &mdash; concerns with unapproved GLP-1 drugs used for weight loss (including compounded dosing errors)</a></li>
              <li>&bull; <a href="https://www.novopricing.com/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk &mdash; published list price (WAC) for Wegovy</a></li>
              <li>&bull; <a href="https://www.novopricing.com/ozempic.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk &mdash; published list price (WAC) for Ozempic</a></li>
              <li>&bull; <a href="https://zepbound.lilly.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zepbound (Eli Lilly) &mdash; official product site</a></li>
              <li>&bull; <a href="https://www.lillydirect.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LillyDirect &mdash; Eli Lilly direct self-pay pharmacy</a></li>
            </ul>
          </div>
        </section>

        {/* Educational disclaimer */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <div className="rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Educational Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This guide is published for educational purposes only. It is not medical advice, and it
              is not a substitute for diagnosis, treatment, or a prescription from a licensed
              clinician. Dosing information here is a report of what published FDA labeling specifies;
              your prescriber determines whether a medication is appropriate, at what dose, and on
              what schedule. Never start, stop, change, combine, or convert a prescription on your
              own. Trial results are group averages under study conditions and are not a prediction or
              guarantee of any individual result. Compounded semaglutide and compounded tirzepatide
              are not FDA-approved, and retatrutide is investigational and not FDA-approved for any
              use. Prices are gathered from published sources, change without notice, and must be
              confirmed with the pharmacy, manufacturer, or clinic. Consult a licensed clinician
              before making any decision about these medications.
            </p>
          </div>
        </section>

        {/* Medical + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Comparing Semaglutide and Tirzepatide?"
            description="Get our cash-pay GLP-1 price comparison and the label-by-label breakdown of which brand is approved for what."
            source="guide_semaglutide_vs_tirzepatide"
          />
        </div>
      </SidebarShell>
      <Footer />
    </main>
  );
}
