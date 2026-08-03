import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import Glp1ProgramAggregate from '@/components/Glp1ProgramAggregate';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';
import { getWeightLossStatesWithClinics, allWeightLossClinics } from '@/data/weightloss-clinics-index';
import {
  getGlp1ProgramStats,
  getGlp1ProgramAsOf,
  getGlp1ServiceStats,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';

const URL = 'https://vitalityscout.com/weight-loss';

// Verified national GLP-1 program pricing, computed over WEIGHTLOSS_PRICING at
// build time (never hardcoded). Powers the metadata, the intro lead, the
// medication cards, and the FAQ answers so every number on this page traces to
// a dated, per-clinic quote in the store.
const programStats = getGlp1ProgramStats();
const programAsOf = getGlp1ProgramAsOf();
const asOfLabel = programAsOf ? formatAsOfMonth(programAsOf, true) : '2026';
const mi = programStats.medsIncluded;
const me = programStats.medsExtra;
const medianLabel = mi.n > 0 ? formatPrice(mi.median) : '—';
const lowLabel = mi.n > 0 ? formatPrice(mi.low) : '—';
const highLabel = mi.n > 0 ? formatPrice(mi.high) : '—';
const membershipLowLabel = me.n > 0 ? formatPrice(me.low) : '—';

// Per-molecule verified program medians (meds-included bucket only).
const semaStats = getGlp1ServiceStats('semaglutide-program').medsIncluded;
const tirzStats = getGlp1ServiceStats('tirzepatide-program').medsIncluded;
const semaPriceLine =
  semaStats.n > 0
    ? `${formatPrice(semaStats.median)}/mo median across ${semaStats.n} verified cash-pay programs with medication included (${formatPrice(semaStats.low)}–${formatPrice(semaStats.high)}/mo, verified ${asOfLabel})`
    : 'See the verified per-clinic table in our semaglutide cost guide.';
const tirzPriceLine =
  tirzStats.n > 0
    ? `${formatPrice(tirzStats.median)}/mo median across ${tirzStats.n} verified cash-pay programs with medication included (${formatPrice(tirzStats.low)}–${formatPrice(tirzStats.high)}/mo, verified ${asOfLabel})`
    : 'See the verified per-clinic table in our tirzepatide cost guide.';

export const metadata: Metadata = {
  title: {
    // Absolute (layout appends "| VitalityScout" to non-absolute titles).
    // Head query "medical weight loss" front-loaded; 60 chars.
    absolute: 'Medical Weight Loss Clinics: GLP-1 Cost & Providers by State',
  },
  alternates: { canonical: URL },
  // 156 chars at current verified values (target band 140-160).
  description:
    `Compare medical weight-loss clinics by state. Verified GLP-1 programs run a ${medianLabel}/mo median with medication included across ${mi.n} clinics that publish a price.`,
};

// GLP-1 medications explained. Every card states the FDA-approved indication by
// brand and never blurs them: a diabetes-labeled product used for weight loss is
// off-label prescribing, and it is named as such. Prices are this site's own
// verified cash-pay program medians, not list-price estimates.
const medications = [
  {
    name: 'Semaglutide (Wegovy, Ozempic, Rybelsus)',
    icon: '💉',
    description:
      'Once-weekly injection (Wegovy, Ozempic) or daily tablet (Rybelsus). Wegovy is FDA-approved for chronic weight management and to reduce major adverse cardiovascular event risk. Ozempic and Rybelsus are FDA-approved for type 2 diabetes; prescribing either for weight loss is off-label prescribing.',
    approvedUse: 'Wegovy: chronic weight management + CV risk reduction. Ozempic and Rybelsus: type 2 diabetes.',
    priceRange: semaPriceLine,
    considerations: 'Gastrointestinal reactions such as nausea are among the most common adverse reactions listed in the FDA label. The label specifies a stepwise titration; the prescriber determines your dose.',
  },
  {
    name: 'Tirzepatide (Zepbound, Mounjaro)',
    icon: '💊',
    description:
      'Once-weekly dual GIP and GLP-1 receptor agonist. Zepbound is FDA-approved for chronic weight management and for moderate-to-severe obstructive sleep apnea in adults with obesity. Mounjaro is FDA-approved for type 2 diabetes; prescribing it for weight loss is off-label prescribing.',
    approvedUse: 'Zepbound: chronic weight management + obstructive sleep apnea. Mounjaro: type 2 diabetes.',
    priceRange: tirzPriceLine,
    considerations: 'Gastrointestinal reactions are among the most common adverse reactions listed in the FDA label. The label specifies a stepwise titration; the prescriber determines your dose.',
  },
  {
    name: 'Compounded semaglutide and tirzepatide',
    icon: '🏥',
    description:
      'Pharmacy-compounded versions are not FDA-approved. FDA does not review compounded drugs for safety, effectiveness, or quality before they are marketed, and has reported adverse events, some requiring hospitalization, that may be related to dosing errors with compounded injectable semaglutide.',
    approvedUse: 'Not FDA-approved. FDA advises compounded drugs only when an FDA-approved drug cannot meet the medical need.',
    priceRange: 'Set by the clinic or compounder, not a manufacturer. Compare the dated per-clinic prices in our cost guides.',
    considerations: 'Availability and state rules vary. Fill any prescription at a state-licensed pharmacy and ask your clinician whether an FDA-approved product fits your case.',
  },
];

// Answers use only figures already verified on this site or stated in an FDA
// label / FDA safety communication linked in SOURCES below. No trial percentages,
// no outcome promises.
const FAQ_ITEMS = [
  {
    question: 'How much does a medical weight loss program cost per month?',
    answer:
      `Across the ${mi.n} cash-pay clinics that publish a monthly price with the medication included, VitalityScout verified a median of ${medianLabel}/mo (range ${lowLabel}–${highLabel}/mo, verified ${asOfLabel}). ` +
      `Membership-only programs that bill the medication separately post lower headline numbers, from ${membershipLowLabel}/mo across ${me.n} clinics, and are not the same product. ` +
      'Most clinics publish no price at all and quote only after a paid consult. Confirm the current number and exactly what it includes before you enroll.',
  },
  {
    question: 'Which GLP-1 is best for weight loss?',
    answer:
      'No clinic or site can name a best GLP-1 for you, and none can promise a result. What you can check is what each product is actually approved to treat. ' +
      'Wegovy (semaglutide injection) is FDA-approved for chronic weight management and to reduce the risk of major adverse cardiovascular events. Zepbound (tirzepatide) is FDA-approved for chronic weight management and for moderate-to-severe obstructive sleep apnea in adults with obesity. Saxenda (liraglutide) is FDA-approved for weight management. ' +
      'Ozempic and Rybelsus (semaglutide), Mounjaro (tirzepatide), and Victoza (liraglutide) are FDA-approved for type 2 diabetes; prescribing them for weight loss is off-label prescribing, not an approved use. A licensed prescriber decides what is appropriate after reviewing your history.',
  },
  {
    question: 'What weight loss injections are FDA-approved?',
    answer:
      'The injectable medicines carrying an FDA-approved weight-management indication include Wegovy (semaglutide), Zepbound (tirzepatide), and Saxenda (liraglutide). ' +
      'Ozempic (semaglutide) and Mounjaro (tirzepatide) contain the same molecules but are labeled for type 2 diabetes, so using them for weight loss is off-label prescribing. ' +
      'Compounded semaglutide and tirzepatide injections are not FDA-approved at all. Read each product label before you compare programs.',
  },
  {
    question: 'Is compounded semaglutide or tirzepatide FDA-approved?',
    answer:
      'No. Compounded semaglutide and tirzepatide are not FDA-approved, and FDA states that unapproved versions do not undergo its review for safety, effectiveness, and quality before they are marketed. ' +
      'FDA has received adverse event reports, some requiring hospitalization, that may be related to dosing errors with compounded injectable semaglutide, including patients and health care professionals miscalculating doses. ' +
      'FDA recommends compounded drugs only for patients whose medical needs cannot be met by an FDA-approved drug, with a prescription filled at a state-licensed pharmacy.',
  },
  {
    question: 'Do I need a weight loss clinic, or can I get GLP-1 treatment online?',
    answer:
      'Both routes exist and both require a prescription from a licensed clinician. Telehealth programs run an intake, review your history and labs, and ship medication to your door. In-person clinics add physical exams, in-office labs, and body-composition tracking. ' +
      'Availability, included labs, and what the monthly fee covers vary by state and by program, which is why the verified prices on this page span a wide range. ' +
      'Browse in-person clinics by state below, or compare national GLP-1 telehealth providers on our GLP-1 page.',
  },
  {
    question: 'How does GLP-1 dosing work?',
    answer:
      'The FDA labels specify a stepwise titration: treatment starts at a low weekly dose and steps up on a fixed schedule toward a maintenance dose, so the medicine is introduced gradually. ' +
      'That schedule is what the manufacturer submitted and FDA approved. It is not a personal plan. Your prescriber determines your starting dose, whether and when to step up, and whether to stay lower. ' +
      'Do not start, change, split, or combine doses on your own, and do not convert a dose from one GLP-1 to another. Our dosing guides report the label schedules for semaglutide and tirzepatide for educational reference only.',
  },
];

// Every citation below was resolved (HTTP 200) before publication.
const SOURCES = [
  {
    label: 'FDA: Concerns with unapproved GLP-1 drugs used for weight loss',
    url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss',
  },
  {
    label: 'Wegovy (semaglutide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b',
  },
  {
    label: 'Ozempic (semaglutide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adec4fd2-6858-4c99-91d4-531f5f2a2d79',
  },
  {
    label: 'Rybelsus (oral semaglutide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98',
  },
  {
    label: 'Zepbound (tirzepatide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b',
  },
  {
    label: 'Mounjaro (tirzepatide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0',
  },
  {
    label: 'Saxenda (liraglutide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3946d389-0926-4f77-a708-0acb8153b143',
  },
  {
    label: 'Victoza (liraglutide) prescribing information — DailyMed',
    url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5a9ef4ea-c76a-4d34-a604-27c5b505f5a4',
  },
];

// In-context guide cluster. Medication/education guides first (the GLP-1
// cluster this hub gateways), then the cash-price guides.
const MEDICATION_GUIDES = [
  {
    slug: 'glp1-medications-list',
    title: 'GLP-1 Medications List',
    blurb: 'Every GLP-1 and dual agonist on the US market and the exact indication each one is FDA-approved for.',
  },
  {
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs Tirzepatide',
    blurb: 'How the two molecules differ, which brands carry a weight-management label, and what the labels say.',
  },
  {
    slug: 'glp1-pill-guide',
    title: 'GLP-1 Pills vs Injections',
    blurb: 'Oral GLP-1 options, what they are approved to treat, and how they compare with weekly injections.',
  },
  {
    slug: 'semaglutide-dosing-guide',
    title: 'Semaglutide Dosing Guide',
    blurb: 'What the FDA label specifies for titration and maintenance. Educational reporting; your prescriber sets the dose.',
  },
  {
    slug: 'tirzepatide-dosing-guide',
    title: 'Tirzepatide Dosing Guide',
    blurb: 'What the FDA label specifies for titration and maintenance. Educational reporting; your prescriber sets the dose.',
  },
  {
    slug: 'ozempic-side-effects',
    title: 'Ozempic Side Effects',
    blurb: 'Adverse reactions and warnings as they appear in the semaglutide prescribing information.',
  },
  {
    slug: 'tirzepatide-side-effects',
    title: 'Tirzepatide Side Effects',
    blurb: 'Adverse reactions and warnings as they appear in the tirzepatide prescribing information.',
  },
  {
    slug: 'compounded-semaglutide',
    title: 'Compounded Semaglutide',
    blurb: 'Why compounded versions are not FDA-approved, what FDA has warned about, and what the legal status is now.',
  },
];

const COST_GUIDES = [
  { slug: 'semaglutide-cost', title: 'Semaglutide Cost', blurb: 'Verified per-clinic monthly prices, tagged by whether medication is included.' },
  { slug: 'tirzepatide-cost', title: 'Tirzepatide Cost', blurb: 'Verified per-clinic monthly prices for tirzepatide programs.' },
  { slug: 'cheapest-glp1-without-insurance', title: 'Cheapest GLP-1 Without Insurance', blurb: 'The lowest verified cash-pay programs and what each one leaves out.' },
  { slug: 'cheapest-way-to-get-semaglutide', title: 'Cheapest Way to Get Semaglutide', blurb: 'Every self-pay route ranked by verified price, with the trade-offs named.' },
];

export default function WeightLossHub() {
  const states = getWeightLossStatesWithClinics();
  const totalClinics = allWeightLossClinics.length;

  // National verified GLP-1 program aggregate (standard monthly prices only),
  // computed over the whole store and split by meds-included status.
  const nationalStats = getGlp1ProgramStats();
  const nationalAsOf = getGlp1ProgramAsOf();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Medical Weight Loss Clinics Directory',
    description: 'Find GLP-1 and medical weight loss clinics across the United States.',
    url: URL,
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    author: { '@type': 'Organization', name: 'VitalityScout' },
    lastReviewed: '2026-08-03',
    dateModified: '2026-08-03',
    citation: SOURCES.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })),
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">💊</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Weight Loss Clinics: GLP-1 Providers and Costs by State
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Medical weight loss means a licensed clinician prescribes and monitors treatment, usually a
            GLP-1 medication. Across the {mi.n} cash-pay clinics that publish a monthly price with the
            medication included, we verified a {medianLabel}/mo median ({lowLabel}–{highLabel}/mo,
            verified {asOfLabel}).
          </p>
          <p className="text-base text-gray-600 mb-6">
            Wegovy (semaglutide) and Zepbound (tirzepatide) are the injections FDA-approved for chronic
            weight management. Ozempic and Mounjaro carry a type 2 diabetes label, so weight-loss use of
            those is off-label prescribing. Compare in-person clinics by state below, read what each drug
            is approved for, then confirm pricing directly with the clinic.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Local Clinics
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {states.length} States Covered
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              Telehealth Available
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#local-clinics" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            Local Clinics by State
          </a>
          <a href="#medications" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            GLP-1 Medications
          </a>
          <a href="#comparison" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            Telehealth vs Local
          </a>
          <a href="#glp1-guides" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            GLP-1 Guides
          </a>
          <a href="#faq" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            FAQ
          </a>
        </div>
      </section>

      {/* Telehealth vs Local Comparison */}
      <section id="comparison" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Telehealth vs Local Clinic</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span>📱</span> Telehealth GLP-1
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Convenience:</strong> Consults from home, meds shipped to door</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Published pricing:</strong> national programs post a monthly number more often than local clinics do</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Quick start:</strong> Often same-week prescription if qualified</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Limitations:</strong> Less personalized, no physical exams</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>May not include:</strong> In-person labs, nutritionist, accountability</span>
              </div>
            </div>
            <Link href="#telehealth" className="mt-4 inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
              View Telehealth Options →
            </Link>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>🏥</span> Local In-Person Clinic
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Comprehensive:</strong> Physical exams, in-office labs, body composition</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Accountability:</strong> Regular check-ins, face-to-face support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Full range:</strong> Brand medications, multiple options</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Cost varies widely:</strong> verified cash-pay programs run {lowLabel}&ndash;{highLabel}/mo depending on what is bundled</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Requires:</strong> Office visits, travel time</span>
              </div>
            </div>
            <Link href="#local-clinics" className="mt-4 inline-block text-sm font-medium text-green-700 hover:text-green-800">
              Find Local Clinics →
            </Link>
          </div>
        </div>
      </section>

      {/* Prefer online? Cross-link to the national GLP-1 telehealth hub.
          The provider comparison lives on /glp1 — this geo directory stays
          focused on in-person clinics by state. */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-lg bg-blue-50 border border-blue-200 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-900 mb-1">Prefer online treatment?</h2>
            <p className="text-sm text-blue-800">
              Compare national GLP-1 telehealth providers — consult from home, medications shipped to your door.
            </p>
          </div>
          <Link
            href="/glp1"
            className="inline-block whitespace-nowrap px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700"
          >
            Compare national GLP-1 telehealth providers →
          </Link>
        </div>
      </section>

      {/* National verified-price line */}
      {nationalStats.medsIncluded.n >= 3 && (
        <section className="mx-auto max-w-6xl px-4 pt-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
            <Glp1ProgramAggregate stats={nationalStats} asOf={nationalAsOf} placeLabel="the US" />
            <PriceEstimateDisclaimer />
          </div>
        </section>
      )}

      {/* Local Clinics by State */}
      <section id="local-clinics" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Local Clinics by State</h2>
        <p className="text-gray-600 mb-8">
          Find in-person GLP-1 weight loss clinics near you. Click a state to view all clinics and cities.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/weight-loss/${state.stateSlug}`}
              className="block rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                <span className="text-sm font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
                  {state.count} clinics
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {state.cities.slice(0, 3).join(', ')}{state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
              </p>
              <span className="text-sm font-medium text-green-600">
                View clinics →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-2">More States Coming Soon</h3>
          <p className="text-sm text-amber-800">
            We&apos;re expanding coverage to California, New York, and more. Currently featuring Texas, Florida, and Arizona
            with {totalClinics}+ verified weight loss clinics. Use telehealth for nationwide access in the meantime.
          </p>
        </div>
      </section>

      {/* Medications Explained */}
      <section id="medications" className="bg-green-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">GLP-1 Medications Explained</h2>
          <p className="text-gray-600 mb-8">
            Understanding the different GLP-1 medications for weight loss.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {medications.map((med) => (
              <div key={med.name} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{med.icon}</span>
                  <h3 className="font-bold text-gray-900">{med.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{med.description}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">FDA-approved use:</span>
                    <p className="font-semibold text-green-600">{med.approvedUse}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Cash-pay program cost:</span>
                    <p className="text-gray-700">{med.priceRange}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-gray-500">Considerations:</span>
                    <p className="text-gray-700 text-xs mt-1">{med.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Indications above are taken from each product&apos;s FDA prescribing information, linked in
            Sources. Using a diabetes-labeled product for weight loss is off-label prescribing and is a
            decision only a licensed clinician can make.
          </p>
        </div>
      </section>

      {/* GLP-1 guide cluster — this hub is the gateway to the medication and
          cost guides. Education guides first, then the verified-price guides. */}
      <section id="glp1-guides" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">GLP-1 Medication Guides</h2>
        <p className="text-gray-600 mb-8">
          What each medication is approved for, what the FDA label specifies for dosing, and what the
          label lists as adverse reactions. Educational reporting, not a treatment plan.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEDICATION_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-lg border border-gray-200 p-5 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-1">{guide.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{guide.blurb}</p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-10 mb-2">What It Costs, Verified</h3>
        <p className="text-gray-600 mb-6">
          Per-clinic cash prices quoted from each clinic&apos;s own site and dated, with membership-only
          prices tagged separately so the two are never confused.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COST_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-lg border border-gray-200 p-5 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-1">{guide.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{guide.blurb}</p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="font-bold text-gray-900 mb-3">Sources</h3>
          <ul className="space-y-1 text-sm text-blue-700">
            {SOURCES.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Take */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Take: Choosing a Weight Loss Clinic</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>Start with the price you can actually verify.</strong> Across the {mi.n} clinics that
            publish a monthly cash price with the medication included, the median is {medianLabel}/mo and
            the range is {lowLabel} to {highLabel}/mo (verified {asOfLabel}). Membership-only programs post
            lower headline numbers because the medication is billed separately. Compare like for like.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Ask what the fee includes.</strong> Labs, follow-up visits, dose changes, and the
            medication itself are bundled differently at every clinic, which is why the verified range is
            this wide. Get the answer in writing before you pay for a consult.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Ask which product you would be prescribed.</strong> Wegovy and Zepbound carry FDA
            weight-management indications. Ozempic and Mounjaro are labeled for type 2 diabetes, so
            weight-loss use is off-label prescribing. Compounded semaglutide and tirzepatide are not
            FDA-approved, and FDA has reported adverse events that may relate to dosing errors with
            compounded injectable semaglutide. Those are different products with different oversight.
          </p>
          <p className="text-gray-700">
            <strong>Telehealth or in person is a fit question, not a ranking.</strong> Telehealth is the
            lower-friction route and publishes prices more often. Local clinics add physical exams,
            in-office labs, and body-composition tracking. Whichever you choose, a licensed clinician
            decides whether treatment is appropriate and sets the dose.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-12 scroll-mt-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group border-b border-gray-200 py-5">
              <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-green-600">
                <span className="pr-4">{item.question}</span>
                <span className="text-green-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Learn More Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Learn More About GLP-1 Weight Loss</h2>
          <p className="text-gray-600 mb-8">
            Explore our guides to understand your options and make an informed decision.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/guides/glp1-weight-loss-complete-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">📖</span>
              <h3 className="font-bold text-gray-900 mb-2">Complete GLP-1 Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Everything about semaglutide and tirzepatide - how they work, results, side effects, and costs.
              </p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>

            <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">💊</span>
              <h3 className="font-bold text-gray-900 mb-2">Compounded Semaglutide</h3>
              <p className="text-sm text-gray-600 mb-3">
                FDA updates, legal status in 2025, and what alternatives exist after the shortage ended.
              </p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>

            <Link href="/faq/glp1" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">❓</span>
              <h3 className="font-bold text-gray-900 mb-2">GLP-1 FAQ</h3>
              <p className="text-sm text-gray-600 mb-3">
                Common questions about insurance, stopping medication, side effects, and results timeline.
              </p>
              <span className="text-sm font-medium text-green-600">Read FAQ →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">GLP-1 Weight-Loss Guides &amp; Comparisons</h2>
        <p className="text-gray-600 mb-8">
          Compare medications, providers, and costs before you choose a clinic.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { slug: 'semaglutide-cost', title: 'Semaglutide Cost: Verified Prices' },
            { slug: 'tirzepatide-cost', title: 'Tirzepatide Cost: Verified Prices' },
            { slug: 'glp1-weight-loss-complete-guide', title: 'Complete GLP-1 Weight Loss Guide' },
            { slug: 'wegovy-vs-ozempic', title: 'Wegovy vs Ozempic' },
            { slug: 'mounjaro-vs-ozempic', title: 'Mounjaro vs Ozempic' },
            { slug: 'ozempic-alternatives', title: 'Ozempic Alternatives' },
            { slug: 'cheapest-way-to-get-semaglutide', title: 'Cheapest Way to Get Semaglutide' },
            { slug: 'cheapest-glp1-without-insurance', title: 'Cheapest GLP-1 Without Insurance' },
            { slug: 'best-glp1-weight-loss-programs', title: 'Best GLP-1 Weight Loss Programs' },
            { slug: 'glp1-and-muscle-loss', title: 'GLP-1 and Muscle Loss' },
          ].map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-lg border border-gray-200 p-5 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-1">{guide.title}</h3>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Compare Medical Weight Loss Clinics
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Verified cash prices, the FDA-approved use for every medication, and clinics by state.
            Treatment decisions stay with your clinician.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/glp1"
              className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-green-600 hover:bg-green-50"
            >
              Compare Telehealth GLP-1
            </Link>
            <Link
              href="/guides/glp1-weight-loss-complete-guide"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Read GLP-1 Guide
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
      </SidebarShell>
      <Footer />
    </main>
  );
}
