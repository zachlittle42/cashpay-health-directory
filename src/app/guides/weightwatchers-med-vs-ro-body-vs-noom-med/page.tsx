import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/weightwatchers-med-vs-ro-body-vs-noom-med';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'WW Med+ vs Ro Body vs Noom Med (2026): GLP-1 Costs' },
  alternates: { canonical: PAGE_URL },
  description:
    'Clinical GLP-1 costs (Sept 2026): WW Med+ $25 then $74 (meds extra), Ro Body $39 then $74–$149 (meds extra), Noom Med from $79 then $179–$299 all-in. Verify live.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does WeightWatchers Med+ vs Ro Body vs Noom Med cost in 2026?',
    answer:
      `As of ${AS_OF}, WeightWatchers Med+ lists $25/month for the first two months on a 12-month plan, then $74/month. That membership does not include GLP-1 medication. Ro Body lists $39 the first month, then $74–$149/month by plan length ($74/month prepaid annually); medication is a second charge. Noom Med compounded tiers are advertised as all-inclusive: Microdose GLP-1Rx $79 to start then $179/month; GLP-1Rx $129 then $249/month; GLP-1Rx Plus $149 then $299/month. Noom’s branded-med telehealth tier is $39 then $129/month with medication billed separately. Confirm the live checkout price and what is in it.`,
  },
  {
    question: 'Does WW Med+ or Ro Body include the GLP-1 medication in the monthly price?',
    answer:
      'No. Both brands bill membership and medication as separate lines. WeightWatchers’ plans page states the cost of GLP-1 medications is not included in Med+. Ro’s pricing page states the first month is $39 plus the cost of GLP-1s at cash-pay prices if you are eligible. Add both lines before you compare to a program that bundles the drug. Brand-name cash GLP-1s on Ro currently start around $149/month for the Wegovy pill; insured copays can be far lower. Verify both charges with the provider.',
  },
  {
    question: 'Does Noom Med include medication in the monthly price?',
    answer:
      `On the compounded Noom Med tiers, yes — Noom’s pricing page describes Microdose, GLP-1Rx, and GLP-1Rx Plus as all-inclusive (clinical care, medication if prescribed, and the digital program). As of ${AS_OF} those ongoing prices are $179, $249, and $299/month after an intro supply. The separate “Telehealth for Branded Med” tier is $39 then $129/month and states the cost of medication is not included. Compounded products are not FDA-approved. Confirm the current plan on noom.com/med/pricing.`,
  },
  {
    question: 'WW Med+ vs Ro Body vs Noom Med — which is cheapest?',
    answer:
      'It depends whether you need a brand-name GLP-1 or a compounded cash plan. Membership-only, WW Med+ at $74/month ongoing undercuts Ro’s $149 monthly plan and matches Ro’s $74 prepaid annual plan — but neither includes the drug. All-in cash, Noom’s compounded Microdose at $179/month after intro can beat membership plus a $149–$449 cash brand GLP-1. If insurance covers a brand pen at a low copay, WW Med+ or Ro plus that copay can be cheaper than any compounded bundle. Compare membership + medication, not the intro teaser. Eligibility belongs with a licensed clinician.',
  },
  {
    question: 'Are compounded GLP-1s from Noom FDA-approved?',
    answer:
      'No. Noom states compounded medications, if prescribed, have not been reviewed by the FDA for safety, efficacy, or quality. Brand-name Wegovy, Zepbound, and similar products are FDA-approved for labeled indications. WW Med+ and Ro Body are brand-name / manufacturer-cash pathways. This is information, not medical advice — consult a licensed clinician before pursuing any treatment.',
  },
  {
    question: 'Can I use HSA or FSA for these programs?',
    answer:
      'Noom states many Med programs may be FSA/HSA eligible. A clinician visit and a prescribed GLP-1 are more often eligible than an app-only membership. Confirm with your plan administrator before you assume a membership or medication charge qualifies. Eligibility and reimbursement rules vary by plan.',
  },
];

const BRANDS = [
  {
    name: 'WeightWatchers Med+',
    price: '$25 then $74/mo + meds',
    blurb: 'Clinical care + WW program. GLP-1 medication is not included. Intro listed through 9/8/26 on a 12-month plan. Verify live terms.',
    siteUrl: 'https://www.weightwatchers.com/us/plans',
    profileHref: '/providers/weightwatchers-clinic',
  },
  {
    name: 'Ro Body',
    price: '$39 then $74–$149/mo + meds',
    blurb: 'Membership unlocks clinicians and insurance concierge. Cash GLP-1s match manufacturer ladders (Wegovy pill from $149/mo). Drug is a second bill.',
    siteUrl: 'https://ro.co/weight-loss/pricing',
    profileHref: '/providers/ro-body',
  },
  {
    name: 'Noom Med',
    price: 'From $79 then $179/mo all-in',
    blurb: 'Compounded tiers bundle clinical care + meds + the Noom app. Branded-med telehealth is $39 then $129/mo with the drug extra. Compounds are not FDA-approved.',
    siteUrl: 'https://www.noom.com/med/pricing/',
    profileHref: '/providers/noom-med',
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

export default function WwMedVsRoBodyVsNoomMedPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'WW Med+ vs Ro Body vs Noom Med (2026): Clinical GLP-1 Program Costs',
    description:
      'Published September 2026 cash prices for WeightWatchers Med+, Ro Body, and Noom Med — membership vs medication billed separately, plus compounded all-in tiers.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Telehealth GLP-1 weight-loss program' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'WeightWatchers — plans and Med+ membership terms', url: 'https://www.weightwatchers.com/us/plans' },
      { '@type': 'CreativeWork', name: 'Ro Body — membership and GLP-1 cash pricing', url: 'https://ro.co/weight-loss/pricing' },
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
      { '@type': 'ListItem', position: 3, name: 'WW Med+ vs Ro Body vs Noom Med', item: PAGE_URL },
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
              <span className="text-gray-900">WW Med+ vs Ro Body vs Noom Med</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/glp1" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              WW Med+ vs Ro Body vs Noom Med (2026): Clinical GLP-1 Costs
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Three clinical weight programs. Two bill membership and the drug separately.
              One bundles compounded medication on some tiers. Here are the published
              cash prices as of {AS_OF} — not a quote.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>WeightWatchers Med+</strong> lists{' '}
                <strong>$25 then $74/month</strong> (12-month plan; GLP-1 meds extra).{' '}
                <strong>Ro Body</strong> lists <strong>$39 then $74–$149/month</strong> plus
                cash GLP-1s from <strong>$149/month</strong>. <strong>Noom Med</strong>{' '}
                compounded tiers start at <strong>$79 then $179–$299/month</strong> all-in;
                branded-med telehealth is <strong>$39 then $129/month</strong> with the drug
                extra. Confirm live checkout. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from weightwatchers.com/us/plans, ro.co/weight-loss/pricing, and noom.com/med/pricing on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published prices as of {AS_OF}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">WW Med+</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• $25/mo first two months</li>
                  <li>• Then $74/mo (12-month plan)</li>
                  <li>• GLP-1 medication not included</li>
                  <li>• Intro listed through 9/8/26</li>
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
                <div className="font-bold text-indigo-600 mb-2">Ro Body</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• $39 first month (refunded if ineligible)</li>
                  <li>• Then $74–$149/mo by plan</li>
                  <li>• Cash GLP-1s from $149/mo</li>
                  <li>• Medication billed separately</li>
                </ul>
                <a
                  href="https://ro.co/weight-loss/pricing"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Ro Body →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-700 mb-2">Noom Med</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Microdose: $79 then $179/mo all-in</li>
                  <li>• GLP-1Rx: $129 then $249/mo</li>
                  <li>• Plus: $149 then $299/mo</li>
                  <li>• Branded: $39 then $129 + meds</li>
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

          <BrandCtaGrid
            title="Open the official price pages"
            intro="Plain brand URLs and VitalityScout profiles. Confirm whether the number you see is membership-only or includes medication."
            brands={BRANDS}
            hubHref="/glp1"
            hubLabel="Browse GLP-1 programs →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Membership vs medication</h3>
            <p className="text-sm text-amber-800">
              WW Med+ and Ro Body advertise a program fee. The GLP-1 is a second bill —
              insurance copay or manufacturer cash-pay. Noom Med compounded tiers advertise
              all-inclusive pricing; the branded-med telehealth tier does not. Comparing
              &quot;$25 WW vs $179 Noom&quot; mixes two products. Add the drug whenever it is
              billed separately. Verify with the provider before you enroll.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ww" className="text-blue-600 hover:underline">1. What WeightWatchers Med+ publishes</a></li>
              <li><a href="#ro" className="text-blue-600 hover:underline">2. What Ro Body publishes</a></li>
              <li><a href="#noom" className="text-blue-600 hover:underline">3. What Noom Med publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">4. Side-by-side cost table</a></li>
              <li><a href="#all-in" className="text-blue-600 hover:underline">5. All-in monthly math</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">6. Which to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              This page is the clinical stack — not the $10 WW Core app or the $70 Noom
              Weight subscription. If you want behavior-change only, use{' '}
              <Link href="/guides/noom-vs-weightwatchers-cost" className="text-blue-600 hover:underline">
                Noom vs WeightWatchers cost
              </Link>
              . If you want a clinician and a GLP-1, price membership and medication as
              two lines unless the brand says the drug is included.
            </p>

            <h2 id="ww" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What WeightWatchers Med+ publishes
            </h2>
            <p className="text-gray-700 mb-4">
              weightwatchers.com/us/plans as of {AS_OF} lists Med+ at{' '}
              <strong>$25/month for the first two months</strong> on a 12-month plan, then{' '}
              <strong>$74/month</strong>. The offer was listed as ending{' '}
              <strong>9/8/26 at 11:59 PM PDT</strong>. The same page states{' '}
              <strong>the cost of GLP-1 medications is not included</strong>. Care is
              delivered through the affiliated WeightWatchers Clinic medical group.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Membership covers clinician access and the WW program (Points, coaching tools, GLP-1 Success Program).</li>
              <li>Brand-name GLP-1s are routed through insurance or cash-pay pharmacy — a second bill.</li>
              <li>WW Core ($10 then $12/month) and Core+ ($20 then $22/month) are app-only. They are not this comparison.</li>
            </ul>
            <a
              href="https://www.weightwatchers.com/us/plans"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit WeightWatchers plans →
            </a>

            <h2 id="ro" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Ro Body publishes
            </h2>
            <p className="text-gray-700 mb-4">
              ro.co/weight-loss/pricing as of {AS_OF} splits the bill the same way:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Membership:</strong> <strong>$39</strong> to start (refunded if you are not eligible for GLP-1s), then <strong>$74–$149/month</strong> by plan. The 12-month prepaid plan lists <strong>$74/month</strong>.</li>
              <li><strong>Medication:</strong> cash prices described as matching LillyDirect, NovoCare, and TrumpRx. Wegovy pill <strong>$149 / $199 / $299</strong> by dose; Foundayo pill from <strong>$149</strong>; Wegovy pen <strong>$199</strong> intro on 0.25 and 0.5 mg (offer listed through Dec 31, 2026) then <strong>$349–$399</strong>; Zepbound KwikPen <strong>$299–$449</strong>.</li>
              <li>Membership includes provider messaging, side-effect/titration support, insurance concierge, and coaching. The drug is a second charge.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the Ro-only walkthrough, see{' '}
              <Link href="/guides/ro-body-weight-loss-cost" className="text-blue-600 hover:underline">
                Ro Body weight-loss cost
              </Link>
              . Confirm today&apos;s ladder — intro offers move.
            </p>
            <a
              href="https://ro.co/weight-loss/pricing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Ro Body pricing →
            </a>

            <h2 id="noom" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Noom Med publishes
            </h2>
            <p className="text-gray-700 mb-4">
              noom.com/med/pricing as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Microdose GLP-1Rx</strong> — <strong>$79</strong> to start, then <strong>$179/month</strong> after the first 4-week supply (billed quarterly). All-inclusive: clinical care, medication if prescribed, digital program.</li>
              <li><strong>GLP-1Rx</strong> — <strong>$129</strong> then <strong>$249/month</strong>. Same all-inclusive framing.</li>
              <li><strong>GLP-1Rx Plus</strong> — <strong>$149</strong> then <strong>$299/month</strong>. Dual GLP-1/GIP positioning. All-inclusive.</li>
              <li><strong>Proactive Health GLP-1Rx</strong> — <strong>$149</strong> every 4 weeks (15-week first term).</li>
              <li><strong>Metformin pill</strong> — <strong>$69</strong> then <strong>$99/month</strong> all-inclusive. Metformin is not FDA-approved for weight loss.</li>
              <li><strong>Telehealth for Branded Med</strong> — <strong>$39</strong> then <strong>$129/month</strong>. <strong>The cost of medication is not included.</strong></li>
            </ul>
            <p className="text-gray-700 mb-4">
              Noom states compounded medications are not reviewed by the FDA for safety,
              efficacy, or quality, and that it is not affiliated with Novo Nordisk or Eli Lilly.
            </p>
            <a
              href="https://www.noom.com/med/pricing/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Noom Med pricing →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Side-by-side cost table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Line item</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">WW Med+</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ro Body</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Noom Med</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Intro membership</td>
                  <td className="border border-gray-300 px-4 py-3">$25/mo × 2 months</td>
                  <td className="border border-gray-300 px-4 py-3">$39 first month</td>
                  <td className="border border-gray-300 px-4 py-3">$79 / $129 / $149 start (compounded)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Ongoing membership</td>
                  <td className="border border-gray-300 px-4 py-3">$74/mo (12-month plan)</td>
                  <td className="border border-gray-300 px-4 py-3">$74–$149/mo</td>
                  <td className="border border-gray-300 px-4 py-3">Bundled into $179–$299/mo compounded</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Medication in the fee?</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">Yes on compounded tiers; no on branded $129/mo</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Published cash GLP-1</td>
                  <td className="border border-gray-300 px-4 py-3">Insurance or cash pharmacy (not listed on plans page)</td>
                  <td className="border border-gray-300 px-4 py-3">Wegovy pill from $149; pen $199 then $349+; Zepbound $299–$449</td>
                  <td className="border border-gray-300 px-4 py-3">Included on compounded SKUs; branded extra</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">FDA status of typical cash path</td>
                  <td className="border border-gray-300 px-4 py-3">Brand GLP-1s</td>
                  <td className="border border-gray-300 px-4 py-3">Brand GLP-1s</td>
                  <td className="border border-gray-300 px-4 py-3">Compounded (not FDA-approved) or branded extra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Profile</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/weightwatchers-clinic" className="text-blue-600 hover:underline">WW Clinic</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/ro-body" className="text-blue-600 hover:underline">Ro Body</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/noom-med" className="text-blue-600 hover:underline">Noom Med</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              All-in monthly math
            </h2>
            <p className="text-gray-700 mb-4">
              Use these as planning ranges, then confirm checkout. None of them is a quote.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>WW Med+ + insured copay:</strong> $74 + your plan&apos;s GLP-1 copay. Lowest when coverage works.</li>
              <li><strong>Ro prepaid + Wegovy pill cash:</strong> $74 + $149 = <strong>~$223/month</strong> at the lowest published pill dose.</li>
              <li><strong>Ro monthly + Zepbound cash:</strong> $149 + $299–$449 = <strong>~$448–$598/month</strong>.</li>
              <li><strong>Noom compounded ongoing:</strong> <strong>$179 / $249 / $299</strong> all-in after intro.</li>
              <li><strong>Noom branded telehealth + cash pill:</strong> $129 + manufacturer cash (often $149+) — same split as Ro/WW.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the wider cash-GLP-1 ladder, see{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">
                cheapest GLP-1 without insurance
              </Link>
              {' '}and{' '}
              <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">
                best GLP-1 weight-loss programs
              </Link>
              .
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: brand GLP-1 + insurance help</h3>
              <p className="text-gray-700">
                <strong>WW Med+</strong> or <strong>Ro Body</strong>. Price the membership
                ($74 WW vs $74–$149 Ro) plus the drug. Ro publishes the cash ladder;
                WW is insurance-first on the plans page.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: one published all-in cash number</h3>
              <p className="text-gray-700">
                <strong>Noom Med compounded</strong> at $179–$299/month after intro.
                Read the FDA-status line. The branded $129 tier is not all-in.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: app-only, no medication</h3>
              <p className="text-gray-700">
                Leave this page. WW Core from $10/month or Noom Weight at $70 / $209
                is a different product — see the app-only comparison.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
              <p className="text-sm text-red-800">
                Compounded GLP-1s offered on some Noom Med tiers are NOT approved by the
                US FDA. Brand GLP-1s are prescription drugs with labeled indications and
                boxed warnings. This information is educational only — consult a licensed
                clinician before pursuing any treatment.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare the three clinical programs"
            intro="Open the official site for today’s membership and drug price, or the VitalityScout profile for services and our take."
            brands={BRANDS}
            hubHref="/glp1"
            hubLabel="Open the GLP-1 hub →"
          />

          <div id="related" className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/guides/noom-vs-weightwatchers-cost" className="text-blue-600 hover:underline">Noom vs WeightWatchers cost (app + clinic)</Link></li>
              <li><Link href="/guides/ro-body-weight-loss-cost" className="text-blue-600 hover:underline">Ro Body weight-loss cost</Link></li>
              <li><Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">Best GLP-1 weight-loss programs</Link></li>
              <li><Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">Cheapest GLP-1 without insurance</Link></li>
              <li><Link href="/glp1" className="text-blue-600 hover:underline">GLP-1 programs hub</Link></li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s membership and drug price</h3>
            <p className="mb-6 text-blue-100">
              Intro offers and cash GLP-1 ladders move. Open the official page, then add both lines.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.weightwatchers.com/us/plans"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit WeightWatchers →
              </a>
              <a
                href="https://ro.co/weight-loss/pricing"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Ro Body →
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

          <section id="faq" className="mt-12">
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
              This guide is for general informational purposes only and is not medical advice.
              We are not affiliated with WeightWatchers, Ro, or Noom. Prices were read from
              official pages on {AS_OF} and are not a quote or a guarantee. Intro offers,
              plan length, and state availability change the number you pay. Compounded
              products are not FDA-approved. Eligibility and treatment decisions must be
              made with a licensed clinician. Verify current pricing and terms before you enroll.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.weightwatchers.com/us/plans" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">WeightWatchers plans — Med+ $25 then $74/mo; GLP-1 meds not included (offer listed through 9/8/26)</a></li>
              <li>• <a href="https://ro.co/weight-loss/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro Body pricing — $39 then $74–$149/mo membership; GLP-1 cash ladder</a></li>
              <li>• <a href="https://www.noom.com/med/pricing/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Noom Med pricing — compounded $79/$129/$149 start then $179–$299/mo; branded $39 then $129 + meds</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the GLP-1 Membership vs Meds Cheat Sheet"
            description="WW Med+ vs Ro Body vs Noom Med — what is in the monthly number and what is a second bill."
            source="guide_ww_med_vs_ro_body_vs_noom_med"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
