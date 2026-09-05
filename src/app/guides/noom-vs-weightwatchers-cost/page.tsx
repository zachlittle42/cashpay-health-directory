import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/noom-vs-weightwatchers-cost';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Noom vs WeightWatchers Cost (2026): What You’ll Actually Pay' },
  alternates: { canonical: PAGE_URL },
  description:
    'Noom vs WeightWatchers cost (2026): WW Core from $10/mo, Med+ $25 then $74 (meds extra); Noom Weight $70-$209; Noom Med from $79. Confirm live prices.',
};

const FAQ_ITEMS = [
  {
    question: 'Is Noom or WeightWatchers cheaper in 2026?',
    answer:
      `It depends which product you buy. As of ${AS_OF}, WeightWatchers lists a Core app membership from $10/month for the first 12 months on a 12-month plan (then $12/month). Noom Weight lists $70 for one month or $209 for 12 months. Those are app-only behavior programs — no medication. If you add a clinical GLP-1 program, the math flips: WW Med+ is $25/month for the first two months then $74/month on a 12-month plan, and medication is billed separately. Noom Med lists all-inclusive compounded GLP-1 plans from $79 to start, then $179-$299/month depending on the tier. Confirm live prices and what is included before you enroll.`,
  },
  {
    question: 'Does WeightWatchers Med+ include the GLP-1 medication?',
    answer:
      `No. WeightWatchers' plans page states that Med+ covers clinical care and program support and that the cost of GLP-1 medications is not included. As of ${AS_OF}, the intro offer is $25/month for the first two months on a 12-month plan, then $74/month; that offer was listed as ending 9/8/26. Brand-name medication is billed through insurance or cash-pay pharmacy. Verify current membership terms and medication cost with WeightWatchers Clinic before you join.`,
  },
  {
    question: 'Does Noom Med include the medication in the monthly price?',
    answer:
      `On the compounded Noom Med tiers, yes — Noom's pricing page describes those plans as all-inclusive (clinical care, medication if prescribed, and the digital program). As of ${AS_OF}, Microdose GLP-1Rx is $79 to start then $179/month; GLP-1Rx is $129 then $249/month; GLP-1Rx Plus is $149 then $299/month (billed quarterly after the first supply). The separate "Telehealth for Branded Med" tier is $39 to start then $129/month and states the cost of medication is not included. Compounded products are not FDA-approved. Confirm the current plan and what is in the price on noom.com/med/pricing.`,
  },
  {
    question: 'When should I pick a clinical GLP-1 program instead of WW or Noom?',
    answer:
      'Pick a clinical GLP-1 program when a licensed clinician has determined medication is appropriate and you want the prescription, labs, and follow-up handled in one place. App-only WW Core or Noom Weight is the cheaper published path if you want behavior change without a drug. WW Med+ is insurance-first for brand-name GLP-1s. Noom Med is cash-pay and bundles compounded medication on some tiers. Compare all-in monthly cost — membership plus medication — on our cheapest GLP-1 without insurance and best GLP-1 weight-loss programs guides. Eligibility and treatment decisions belong with a licensed clinician.',
  },
  {
    question: 'Can I use HSA or FSA for Noom or WeightWatchers?',
    answer:
      'Noom states many Med programs may be FSA/HSA eligible. App-only behavior programs are less consistently eligible because they may be treated as wellness rather than medical care. Confirm with your plan administrator before assuming a membership qualifies. GLP-1 medication prescribed for a medical condition is more often an eligible expense than a Points or food-logging app alone.',
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

export default function NoomVsWeightWatchersCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Noom vs WeightWatchers Cost: What You’ll Actually Pay in 2026',
    description:
      'Published 2026 subscription prices for Noom Weight, Noom Med, WeightWatchers Core/Core+, and WW Med+, plus when a clinical GLP-1 program is the relevant comparison.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Digital weight-management and telehealth GLP-1 programs' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'WeightWatchers — plans and Med+ membership terms', url: 'https://www.weightwatchers.com/us/plans' },
      { '@type': 'CreativeWork', name: 'Noom Weight plan pricing', url: 'https://www.noom.com/support/faqs/subscription-and-billing/2025/10/noom-plan-pricing-and-what-to-expect/' },
      { '@type': 'CreativeWork', name: 'Noom Med plans and pricing', url: 'https://www.noom.com/med/pricing/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Noom vs WeightWatchers Cost', item: PAGE_URL },
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

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Noom vs WeightWatchers Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/glp1" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 Hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Noom vs WeightWatchers Cost (2026): What You’ll Actually Pay
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              App-only memberships are cheap. Clinical GLP-1 programs are not. Here is what WW and
              Noom published as of {AS_OF} — and when a clinic program is the relevant comparison.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>WeightWatchers Core</strong> lists from <strong>$10/month</strong>{' '}
                on a 12-month intro plan; <strong>Med+</strong> is <strong>$25 then $74/month</strong>,
                medication extra. <strong>Noom Weight</strong> lists <strong>$70/month</strong> or{' '}
                <strong>$209/year</strong>. <strong>Noom Med</strong> compounded GLP-1 tiers start at{' '}
                <strong>$79 then $179-$299/month</strong> all-in. App vs clinic is not an apples-to-apples
                price. Confirm live terms. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from weightwatchers.com/us/plans and noom.com on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published prices as of {AS_OF}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">WeightWatchers</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Core: $10/mo first 12 months, then $12/mo</li>
                  <li>• Core+: $20/mo first 12 months, then $22/mo</li>
                  <li>• Med+: $25/mo first two months, then $74/mo</li>
                  <li>• GLP-1 medication is <em>not</em> included in Med+</li>
                </ul>
                <a
                  href="https://www.weightwatchers.com/us/plans"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit WeightWatchers →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Noom</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Weight app: $70 / 1 month; $209 / 12 months</li>
                  <li>• Med Microdose: $79 start, then $179/mo</li>
                  <li>• Med GLP-1Rx: $129 start, then $249/mo</li>
                  <li>• Med Plus: $149 start, then $299/mo (compounded; not FDA-approved)</li>
                </ul>
                <a
                  href="https://www.noom.com/med/pricing/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Noom Med →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">How to read these prices</h3>
            <p className="text-sm text-amber-800">
              WW Core / Core+ and Noom Weight are behavior-change apps. WW Med+ and Noom Med are
              clinical programs that may include a prescription. Comparing &quot;$10 WW vs $249 Noom
              Med&quot; mixes two different products. Add the drug cost whenever medication is billed
              separately. WW intro rates on {AS_OF} were listed as ending 9/8/26.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#app-vs-clinic" className="text-blue-600 hover:underline">1. App-only vs clinical GLP-1</a></li>
              <li><a href="#ww" className="text-blue-600 hover:underline">2. What WeightWatchers publishes</a></li>
              <li><a href="#noom" className="text-blue-600 hover:underline">3. What Noom publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">4. Side-by-side cost table</a></li>
              <li><a href="#glp1" className="text-blue-600 hover:underline">5. When a clinical GLP-1 program wins</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">6. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Both brands now sell a food-tracking app <em>and</em> a medical weight-loss arm. The
              app is what most people still picture. The medical arm is where the real money — and
              the GLP-1 decision — lives. This guide keeps those two stacks separate.
            </p>

            <h2 id="app-vs-clinic" className="text-2xl font-bold text-gray-900 mt-12 mb-6">App-Only vs Clinical GLP-1</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>App-only:</strong> WW Core / Core+ and Noom Weight. Food logging, lessons, coaching tools. No prescription. Lowest published monthly price.</li>
              <li><strong>Clinic + brand GLP-1:</strong> WW Med+ and Noom&apos;s branded-med telehealth tier. Membership covers clinician access; the drug is billed separately through insurance or cash-pay pharmacy.</li>
              <li><strong>Clinic + bundled compounded GLP-1:</strong> several Noom Med tiers. One monthly price that Noom describes as including medication if prescribed. Compounded GLP-1s are not FDA-approved products.</li>
            </ul>

            <h2 id="ww" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What WeightWatchers Publishes</h2>
            <p className="text-gray-700 mb-4">
              On weightwatchers.com/us/plans as of {AS_OF} (intro offers listed as ending 9/8/26):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Core</strong> — $10/month for the first 12 months on a 12-month plan, then $12/month. Points program, recipes, tracking. Auto-renews unless canceled.</li>
              <li><strong>Core+</strong> — $20/month for the first 12 months, then $22/month. Adds more support (coaching/workshops and condition programs, depending on the plan table).</li>
              <li><strong>Med+</strong> — $25/month for the first two months on a 12-month plan, then $74/month. Clinical care through the affiliated Weight Watchers Clinic medical group. <strong>GLP-1 medication cost is not included.</strong> Plan auto-renews for another 12 months at the same rate unless you cancel.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Med+ is insurance-first for brand-name GLP-1s (Wegovy, Zepbound, and related options
              the clinic prescribes). Without coverage, the drug is a separate cash-pay line that
              can dwarf the $74 membership. That all-in comparison lives on our{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">
                cheapest GLP-1 without insurance
              </Link>{' '}
              and{' '}
              <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">
                best GLP-1 weight-loss programs
              </Link>{' '}
              guides — we are not rewriting those prices here.
            </p>
            <a
              href="https://www.weightwatchers.com/us/plans"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit WeightWatchers plans →
            </a>

            <h2 id="noom" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Noom Publishes</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Noom Weight (app only)</h3>
            <p className="text-gray-700 mb-4">
              Noom&apos;s support page lists Weight plan prices before tax or discounts. Medication
              is not included. As of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>1 month: <strong>$70</strong></li>
              <li>3 months: <strong>$159</strong></li>
              <li>6 months: <strong>$179</strong></li>
              <li>12 months: <strong>$209</strong></li>
            </ul>
            <p className="text-gray-700 mb-4">
              Your quiz can recommend a different length. Plans auto-renew unless canceled.
              Promos and app-vs-web signup can change the number you see.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Noom Med (clinical)</h3>
            <p className="text-gray-700 mb-4">
              noom.com/med/pricing as of {AS_OF} lists these cash-pay tiers (FSA/HSA noted on several):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Microdose GLP-1Rx</strong> — $79 to start, then $179/month after the first 4-week supply (billed quarterly). Described as all-inclusive.</li>
              <li><strong>GLP-1Rx</strong> — $129 to start, then $249/month. All-inclusive.</li>
              <li><strong>GLP-1Rx Plus</strong> — $149 to start, then $299/month. Dual-agonist (GIP/GLP-1) compounded product; not FDA-approved.</li>
              <li><strong>Weight Loss Pill (metformin)</strong> — $69 to start, then $99/month. Metformin is not FDA-approved for weight loss.</li>
              <li><strong>Telehealth for branded med</strong> — $39 to start, then $129/month. <strong>Medication is not included.</strong></li>
            </ul>
            <p className="text-gray-700 mb-4">
              Compounded semaglutide or tirzepatide, if prescribed, is produced in an FDA-registered
              facility but has not been reviewed by the FDA for safety, efficacy, or quality. Noom
              states it is not affiliated with Novo Nordisk or Eli Lilly. Availability is not all
              50 states. Eligibility depends on BMI, history, and residence.
            </p>
            <a
              href="https://www.noom.com/med/pricing/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Noom Med pricing →
            </a>
            <a
              href="https://www.noom.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 ml-3 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Noom Weight →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side-by-Side Cost Table</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published price ({AS_OF})</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medication in the price?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">WW Core</td>
                    <td className="border border-gray-300 px-4 py-3">$10/mo intro (12-mo plan), then $12/mo</td>
                    <td className="border border-gray-300 px-4 py-3">No — app only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">WW Core+</td>
                    <td className="border border-gray-300 px-4 py-3">$20/mo intro, then $22/mo</td>
                    <td className="border border-gray-300 px-4 py-3">No — app + extra support</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">WW Med+</td>
                    <td className="border border-gray-300 px-4 py-3">$25/mo first two months, then $74/mo</td>
                    <td className="border border-gray-300 px-4 py-3">No — brand GLP-1 billed separately</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Noom Weight</td>
                    <td className="border border-gray-300 px-4 py-3">$70 / 1 month; $209 / 12 months</td>
                    <td className="border border-gray-300 px-4 py-3">No — app only</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Noom Med (compounded tiers)</td>
                    <td className="border border-gray-300 px-4 py-3">$79-$149 to start; then $179-$299/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, if prescribed (not FDA-approved)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Noom branded-med telehealth</td>
                    <td className="border border-gray-300 px-4 py-3">$39 start, then $129/mo</td>
                    <td className="border border-gray-300 px-4 py-3">No — drug billed separately</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="glp1" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When a Clinical GLP-1 Program Is the Comparison</h2>
            <p className="text-gray-700 mb-4">
              If the question is &quot;what will I pay for a GLP-1,&quot; WW Med+ and Noom Med sit
              next to Ro, Hims, Found, Henry Meds, LillyDirect, and NovoCare — not next to a $10
              Points app. We already publish those program prices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">
                  Cheapest GLP-1 without insurance
                </Link>{' '}
                — manufacturer-direct and cash-pay ladders
              </li>
              <li>
                <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">
                  Best GLP-1 weight-loss programs
                </Link>{' '}
                — Hims, Ro, Calibrate, Found, WW Clinic, Henry Meds
              </li>
              <li>
                <Link href="/glp1" className="text-blue-600 hover:underline">
                  GLP-1 provider directory
                </Link>
              </li>
              <li>
                <Link href="/providers/weightwatchers-clinic" className="text-blue-600 hover:underline">
                  WeightWatchers Clinic provider page
                </Link>
                {' '}and{' '}
                <Link href="/providers/noom-med" className="text-blue-600 hover:underline">
                  Noom Med provider page
                </Link>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Found, already listed in that programs guide, publishes a membership-plus-medication
              model (membership and compounded GLP-1 billed as separate lines in our last write-up).
              We are not inventing a new Found quote here — use the dated figures on that page and
              confirm on joinfound.com.
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest published app price</h3>
              <p className="text-gray-700">
                <strong>WeightWatchers Core</strong> at the current $10 intro (then $12) is the
                cheapest official behavior-change membership we checked. Noom Weight at $209/year
                (~$17/month) is close if you will stay a full year.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: insurance-covered brand GLP-1 + coaching</h3>
              <p className="text-gray-700">
                <strong>WW Med+</strong> if you have commercial coverage and want Points plus a
                clinic. Budget membership <em>plus</em> the pharmacy cost. Government and Kaiser
                plans are often a poor fit — confirm with the clinic.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: cash-pay bundled compounded GLP-1</h3>
              <p className="text-gray-700">
                <strong>Noom Med</strong> compounded tiers if a clinician prescribes and you accept
                that compounded products are not FDA-approved. Compare the all-in $179-$299/month
                against Henry Meds, Found, and manufacturer-direct brand prices on the GLP-1 guides
                linked above.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">
                  Cash-pay healthcare map
                </Link>
              </li>
              <li>
                <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">
                  Cheapest GLP-1 without insurance
                </Link>
              </li>
              <li>
                <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">
                  Best GLP-1 weight-loss programs
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Programs on Price</h3>
            <p className="mb-6 text-blue-100">
              App memberships are one line. Medication is usually another. See clinic programs side by side, then open WW or Noom to confirm today&apos;s terms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/glp1"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                All GLP-1 Providers
              </Link>
              <a
                href="https://www.weightwatchers.com/us/plans"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit WeightWatchers →
              </a>
              <a
                href="https://www.noom.com/med/pricing/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Noom Med →
              </a>
            </div>
          </div>

          <section className="mt-12" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with WW International, WeightWatchers Clinic, or Noom. Prices and promo
              terms were read from official pages on {AS_OF} and are not a quote or a guarantee.
              WeightWatchers intro offers were listed as ending 9/8/26. GLP-1 medications are
              prescription drugs; compounded versions are not FDA-approved. Eligibility and treatment
              decisions must be made with a licensed clinician. Verify current pricing and terms on
              each provider&apos;s site before you enroll.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.weightwatchers.com/us/plans" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">WeightWatchers plans — Core $10, Core+ $20, Med+ $25 then $74; meds not included</a></li>
              <li>• <a href="https://www.noom.com/support/faqs/subscription-and-billing/2025/10/noom-plan-pricing-and-what-to-expect/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Noom Weight plan pricing — $70/month to $209/year</a></li>
              <li>• <a href="https://www.noom.com/med/pricing/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Noom Med plans and pricing</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/noom-vs-weightwatchers-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our WW vs Noom Cost Cheat Sheet"
            description="App-only vs Med+ vs Noom Med: what is actually in the monthly price, and when a GLP-1 clinic is cheaper."
            source="guide_noom_vs_weightwatchers_cost"
          />
        </div>
        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
