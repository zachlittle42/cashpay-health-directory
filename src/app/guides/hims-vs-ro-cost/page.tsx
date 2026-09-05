import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/hims-vs-ro-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Hims vs Ro Cost (2026): ED Plans + GLP-1 Membership' },
  alternates: { canonical: PAGE_URL },
  description:
    'Hims vs Ro (Roman) cash costs in 2026: ED generics from $22/mo vs $4/dose, weight-loss membership $39 then $149 vs $39 then $74–$149. Meds extra — verify live.',
};

const FAQ_ITEMS = [
  {
    question: 'Is Hims or Ro cheaper for ED treatment in 2026?',
    answer:
      `It depends on the drug and plan length. As of ${AS_OF}, Hims lists generic sildenafil (Viagra) from $22/month and generic tadalafil (Cialis) from $24/month, with treatments advertised from $2/dose. Ro lists generic sildenafil from $4/dose (8-dose monthly minimum, billed $32/month at 25 mg) and generic tadalafil from $8/dose. Brand Viagra on Ro is $90/dose; brand Cialis is $20/dose. Compounded options (Hims chews from $30/month; Ro Sparks $12/dose / $48–$168/month) are not FDA-approved. Confirm the live checkout price — dose, quantity, and subscription length change the bill.`,
  },
  {
    question: 'Does the Hims or Ro weight-loss membership include GLP-1 medication?',
    answer:
      `No. Both brands bill membership and medication as separate lines. As of ${AS_OF}, Hims Weight Loss Membership is $39 the first month, then $149/month; Hims states the membership fee does not include or guarantee a prescription. Ro Body is $39 the first month, then $74–$149/month depending on plan length ($74/month prepaid annually). GLP-1 cash prices are extra and match manufacturer-direct ladders on Ro (Wegovy pill from $149/month; Wegovy pen from $199 intro then $349; Zepbound KwikPen from $299). Confirm both lines before you enroll.`,
  },
  {
    question: 'How much is Hims vs Ro for weight-loss medication in 2026?',
    answer:
      `Medication is not in the membership. Hims lists the Wegovy pill from $149/month, other GLP-1 options from $199 and $299/month, and some brand injectables at $1,899/month — medication only, membership extra. Ro publishes cash prices that match LillyDirect, NovoCare, and TrumpRx: Wegovy pill $149–$299 by dose, Foundayo pill from $149, Wegovy pen $199 intro (0.25/0.5 mg) then $349–$399, Zepbound KwikPen $299–$449. Add the membership on top. These are published cash estimates — verify on hims.com/weight-loss and ro.co/weight-loss/pricing.`,
  },
  {
    question: 'What is included in a Hims or Ro subscription?',
    answer:
      'For ED, both typically bundle the online clinician review, the medication if prescribed, free discreet shipping, and in-app messaging. There is no separate consult fee on the pages we checked. For weight loss, membership covers clinician access, messaging, titration/side-effect support, and (on Ro) insurance concierge and coaching — not the drug. Compounded ED products (Hard Mints, chews, Ro Sparks, Daily Rise Gummies) are not FDA-approved. A licensed clinician decides whether any prescription is appropriate.',
  },
  {
    question: 'Do Hims and Ro accept insurance or HSA/FSA?',
    answer:
      'Neither is insurance-first for these cash products. Hims states insurance is not required for ED or weight loss. The Hims medication fee is described as FSA/HSA eligible; the Weight Loss Membership fee is not. Ro Body cash GLP-1s are manufacturer cash-pay; Ro will also run an insurance check for covered pens. Confirm eligibility with your plan administrator before you assume a charge qualifies.',
  },
  {
    question: 'Hims vs Ro — which should I pick?',
    answer:
      'Pick on the product, not the logo. For generic ED tablets, published starting prices are close — compare your exact dose and quantity at checkout. For a compounded chew or 2-in-1, read the FDA-status line and price the plan length. For GLP-1s, add membership plus the drug: Ro’s prepaid membership ($74/month) undercuts Hims’ $149 ongoing fee if you will stay a year; medication ladders are similar cash-pay manufacturer prices. Eligibility and treatment belong with a licensed clinician. This is information, not medical advice.',
  },
];

const BRANDS = [
  {
    name: 'Hims — ED',
    price: 'Generic from $22/mo',
    blurb: 'Sildenafil from $22/mo, tadalafil from $24/mo, chews from $30/mo. Visit + meds + shipping bundled. Confirm dose and plan length at checkout.',
    siteUrl: 'https://www.hims.com/erectile-dysfunction',
  },
  {
    name: 'Ro — ED',
    price: 'Sildenafil from $4/dose',
    blurb: 'Generic sildenafil from $4/dose ($32/mo at 8×25 mg). Tadalafil from $8/dose. Brand Viagra $90/dose. Free visit and 2-day shipping.',
    siteUrl: 'https://ro.co/erectile-dysfunction',
  },
  {
    name: 'Hims — Weight Loss',
    price: '$39 then $149/mo + meds',
    blurb: 'Membership required. Medication billed separately (Wegovy pill from $149/mo; other GLP-1s from $199/$299; some brands $1,899/mo).',
    siteUrl: 'https://www.hims.com/weight-loss',
    profileHref: '/providers/hims-hers-glp1',
  },
  {
    name: 'Ro Body',
    price: '$39 then $74–$149/mo + meds',
    blurb: 'Membership does not include the GLP-1. Cash meds match manufacturer ladders. Prepaid annual membership lists $74/mo.',
    siteUrl: 'https://ro.co/weight-loss/pricing',
    profileHref: '/providers/ro-body',
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

export default function HimsVsRoCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hims vs Ro Cost (2026): ED Treatment and GLP-1 Membership Prices',
    description:
      'Published September 2026 cash prices for Hims and Ro (Roman) erectile-dysfunction plans and weight-loss memberships, including what medication is — and is not — included.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: [
      { '@type': 'MedicalTherapy', name: 'Telehealth erectile dysfunction treatment' },
      { '@type': 'MedicalTherapy', name: 'Telehealth GLP-1 weight-loss program' },
    ],
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Hims — erectile dysfunction treatments and starting prices', url: 'https://www.hims.com/erectile-dysfunction' },
      { '@type': 'CreativeWork', name: 'Hims — weight-loss membership and GLP-1 medication prices', url: 'https://www.hims.com/weight-loss' },
      { '@type': 'CreativeWork', name: 'Ro — erectile dysfunction treatments', url: 'https://ro.co/erectile-dysfunction' },
      { '@type': 'CreativeWork', name: 'Ro — generic Viagra / sildenafil pricing', url: 'https://ro.co/erectile-dysfunction/viagra/' },
      { '@type': 'CreativeWork', name: 'Ro — Cialis / tadalafil pricing', url: 'https://ro.co/erectile-dysfunction/cialis/' },
      { '@type': 'CreativeWork', name: 'Ro — Sparks compounded ED pricing', url: 'https://ro.co/erectile-dysfunction/sparks/' },
      { '@type': 'CreativeWork', name: 'Ro Body — membership and GLP-1 cash pricing', url: 'https://ro.co/weight-loss/pricing' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Hims vs Ro Cost', item: PAGE_URL },
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
              <span className="text-gray-900">Hims vs Ro Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/mens-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Men&apos;s health hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hims vs Ro Cost (2026): ED Plans and GLP-1 Membership
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Two cash-pay telehealth brands, two products. Here is what hims.com and ro.co
              published for erectile-dysfunction subscriptions and weight-loss memberships
              as of {AS_OF} — and what the monthly number actually includes.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Hims ED</strong> lists generic sildenafil from{' '}
                <strong>$22/month</strong> and tadalafil from <strong>$24/month</strong>{' '}
                (from $2/dose). <strong>Ro ED</strong> lists generic sildenafil from{' '}
                <strong>$4/dose</strong> ($32/month at eight 25 mg doses) and tadalafil from{' '}
                <strong>$8/dose</strong>. Weight-loss memberships are separate from the drug:
                both start at <strong>$39</strong>, then Hims is <strong>$149/month</strong> and
                Ro is <strong>$74–$149/month</strong>. GLP-1 medication is extra. Confirm live
                checkout. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from hims.com and ro.co on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published prices as of {AS_OF}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Hims</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• ED generic sildenafil from $22/mo; tadalafil from $24/mo</li>
                  <li>• Chews / 3-in-1 from $30–$39/mo (compounded; not FDA-approved)</li>
                  <li>• Weight-loss membership: $39 first month, then $149/mo</li>
                  <li>• GLP-1 meds extra (Wegovy pill from $149/mo)</li>
                </ul>
                <a
                  href="https://www.hims.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Hims →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Ro (Roman)</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• ED generic sildenafil from $4/dose ($32/mo at 8×25 mg)</li>
                  <li>• Generic tadalafil from $8/dose; brand Cialis from $20/dose</li>
                  <li>• Ro Body membership: $39 first month, then $74–$149/mo</li>
                  <li>• GLP-1 meds extra (Wegovy pill from $149/mo)</li>
                </ul>
                <a
                  href="https://ro.co"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Ro →
                </a>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Open the official price pages"
            intro="These are plain brand URLs. Confirm the live plan, dose, and whether medication is in the price before you pay."
            brands={BRANDS.slice(0, 2)}
            hubHref="/mens-health"
            hubLabel="Browse men’s health options →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">How to read these prices</h3>
            <p className="text-sm text-amber-800">
              ED subscriptions usually bundle the visit and the pills. Weight-loss memberships
              do not bundle the GLP-1. Comparing &quot;$22 Hims ED vs $149 Ro Body&quot; mixes two
              products. Add the drug whenever medication is billed separately. Compounded ED
              products are not FDA-approved. Verify with the provider before you enroll.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ed" className="text-blue-600 hover:underline">1. ED cash prices (Hims vs Ro)</a></li>
              <li><a href="#included-ed" className="text-blue-600 hover:underline">2. What an ED plan includes</a></li>
              <li><a href="#glp1" className="text-blue-600 hover:underline">3. Weight-loss membership + GLP-1</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">4. Side-by-side cost table</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">5. Which to choose</a></li>
              <li><a href="#related" className="text-blue-600 hover:underline">6. Related guides</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Hims and Ro (the company behind Roman) sell the same two cash-pay stacks:
              a men&apos;s-health subscription that ships ED generics, and a weight-loss
              membership that unlocks a GLP-1 if a clinician prescribes one. The ED number
              is usually all-in. The weight-loss number is not. Price them separately.
            </p>

            <h2 id="ed" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              ED cash prices (as of {AS_OF})
            </h2>
            <p className="text-gray-700 mb-4">
              Figures below are starting prices published on each brand&apos;s ED pages.
              Your checkout total depends on dose, quantity, and whether you pick a
              monthly, quarterly, or longer plan. Neither brand bills insurance for these
              products on the pages we checked.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Hims publishes</h3>
            <p className="text-gray-700 mb-4">
              On hims.com/erectile-dysfunction as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Generic for Viagra (sildenafil)</strong> — starting at <strong>$22/month</strong>.</li>
              <li><strong>Generic for Cialis (tadalafil)</strong> — starting at <strong>$24/month</strong>.</li>
              <li><strong>Sildenafil or tadalafil chews</strong> — starting at <strong>$30/month</strong>. Compounded; not FDA-approved.</li>
              <li><strong>3-in-1 / combo products</strong> — starting at <strong>$30–$39/month</strong>. Several are compounded.</li>
              <li>Hims FAQ copy: treatments start as low as <strong>$2/dose</strong>. The online assessment, shipping, and messaging are listed as included.</li>
            </ul>
            <a
              href="https://www.hims.com/erectile-dysfunction"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Hims ED →
            </a>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Ro publishes</h3>
            <p className="text-gray-700 mb-4">
              On ro.co/erectile-dysfunction and the Viagra, Cialis, tadalafil, and Sparks
              product pages as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Generic sildenafil</strong> — from <strong>$4/dose</strong> on a monthly recurring plan, 8-dose minimum at 25 mg (<strong>$32/month</strong>).</li>
              <li><strong>Brand Viagra</strong> — <strong>$90/dose</strong>, 4-dose minimum at 25 mg (<strong>$360/month</strong>).</li>
              <li><strong>Generic tadalafil</strong> — from <strong>$8/dose</strong>. A daily 2.5 mg plan at 30 doses is billed <strong>$240/month</strong> on that page.</li>
              <li><strong>Brand Cialis</strong> — from <strong>$20/dose</strong>, 4-dose minimum at 5 mg (<strong>$80/month</strong>).</li>
              <li><strong>Ro Sparks</strong> (sildenafil + tadalafil, compounded) — <strong>$12/dose</strong>; monthly plans <strong>$48–$168</strong> for 4–14 doses. Not FDA-approved.</li>
              <li>Ro also lists Daily Rise tadalafil gummies (compounded; not FDA-approved). Visit and shipping are described as included.</li>
            </ul>
            <a
              href="https://ro.co/erectile-dysfunction"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Ro ED →
            </a>

            <h2 id="included-ed" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What an ED plan includes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Usually included:</strong> online clinician review, the medication if prescribed, discreet shipping, and messaging.</li>
              <li><strong>Not a separate line</strong> on the pages we checked: consult fee. You still have to qualify; a prescription is not guaranteed.</li>
              <li><strong>Not included:</strong> in-person exam, workup for cardiac or endocrine causes of ED, or brand-name pricing if you picked a generic SKU.</li>
              <li><strong>Compounded SKUs</strong> (Hims chews / Hard Mints, Ro Sparks, Daily Rise Gummies) have not been reviewed by the FDA for safety, effectiveness, or quality.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For how online ED treatment works — intake, generics vs brand, and when ED
              can signal something else — use our{' '}
              <Link href="/guides/online-ed-treatment" className="text-blue-600 hover:underline">
                online ED treatment guide
              </Link>
              . This page is the cash-price comparison only.
            </p>

            <h2 id="glp1" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Weight-loss membership + GLP-1 (as of {AS_OF})
            </h2>
            <p className="text-gray-700 mb-4">
              Both brands now use the same split: a membership that unlocks clinicians,
              plus a separate medication charge if you are prescribed a GLP-1.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hims Weight Loss</h3>
            <p className="text-gray-700 mb-4">
              hims.com/weight-loss as of {AS_OF} states an active Weight Loss Membership
              is required and is billed separately:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Membership:</strong> <strong>$39</strong> the first month, auto-renews at <strong>$149/month</strong>. Hims states the fee does not include or guarantee a prescription.</li>
              <li><strong>Medication (if prescribed):</strong> Wegovy pill listed from <strong>$149/month</strong>; other GLP-1 options from <strong>$199</strong> and <strong>$299/month</strong>; some brand injectables listed at <strong>$1,899/month</strong>. Those figures are medication only.</li>
              <li>Membership copy includes 24/7 care-team access, nutrition/exercise guidance, and a smart scale (opt-in). Hims says the medication fee may be FSA/HSA eligible; the membership fee is not.</li>
              <li>Not available in all 50 states. A licensed provider decides eligibility.</li>
            </ul>
            <a
              href="https://www.hims.com/weight-loss"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Hims Weight Loss →
            </a>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ro Body</h3>
            <p className="text-gray-700 mb-4">
              ro.co/weight-loss/pricing as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Membership:</strong> <strong>$39</strong> to start (refunded if you are not eligible for GLP-1s), then <strong>$74–$149/month</strong> by plan. The 12-month prepaid plan lists <strong>$74/month</strong>.</li>
              <li><strong>Medication:</strong> cash prices described as matching LillyDirect, NovoCare, and TrumpRx. Wegovy pill <strong>$149 / $199 / $299</strong> by dose; Foundayo pill from <strong>$149</strong>; Wegovy pen <strong>$199</strong> intro on 0.25 and 0.5 mg (offer listed through Dec 31, 2026) then <strong>$349–$399</strong>; Zepbound KwikPen <strong>$299–$449</strong>.</li>
              <li>Membership includes provider messaging, side-effect/titration support, insurance concierge, and 1:1 coaching. The drug is a second charge.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the Ro-only membership walkthrough, see{' '}
              <Link href="/guides/ro-body-weight-loss-cost" className="text-blue-600 hover:underline">
                Ro Body weight-loss cost
              </Link>
              . Confirm today&apos;s ladder on Ro before you pay — intro offers move.
            </p>
            <a
              href="https://ro.co/weight-loss/pricing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Ro Body pricing →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Side-by-side cost table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hims ({AS_OF})</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ro ({AS_OF})</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Meds in the price?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Generic sildenafil</td>
                  <td className="border border-gray-300 px-4 py-3">From $22/mo (from $2/dose)</td>
                  <td className="border border-gray-300 px-4 py-3">From $4/dose; $32/mo at 8×25 mg</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, if prescribed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Generic tadalafil</td>
                  <td className="border border-gray-300 px-4 py-3">From $24/mo</td>
                  <td className="border border-gray-300 px-4 py-3">From $8/dose (daily 2.5 mg listed $240/mo)</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, if prescribed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Brand Viagra / Cialis</td>
                  <td className="border border-gray-300 px-4 py-3">Sold; confirm checkout</td>
                  <td className="border border-gray-300 px-4 py-3">Viagra $90/dose; Cialis from $20/dose</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, if prescribed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Compounded combo / chews</td>
                  <td className="border border-gray-300 px-4 py-3">Chews from $30/mo; 3-in-1 from $30–$39/mo</td>
                  <td className="border border-gray-300 px-4 py-3">Sparks $12/dose ($48–$168/mo)</td>
                  <td className="border border-gray-300 px-4 py-3">Yes — not FDA-approved</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Weight-loss membership</td>
                  <td className="border border-gray-300 px-4 py-3">$39 first month, then $149/mo</td>
                  <td className="border border-gray-300 px-4 py-3">$39 first month, then $74–$149/mo</td>
                  <td className="border border-gray-300 px-4 py-3">No — drug billed separately</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Cash GLP-1 (examples)</td>
                  <td className="border border-gray-300 px-4 py-3">Wegovy pill from $149/mo; others from $199/$299; some brands $1,899/mo</td>
                  <td className="border border-gray-300 px-4 py-3">Wegovy pill from $149; pen $199 then $349+; Zepbound $299–$449</td>
                  <td className="border border-gray-300 px-4 py-3">Medication only; add membership</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: generic ED tablets</h3>
              <p className="text-gray-700">
                Published starting prices are close. Price <em>your</em> dose and quantity
                on both checkouts the same day. Ro is more explicit per-dose; Hims leads
                with a monthly starting number. Neither consult fee showed as a separate line.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: cash GLP-1 + a year of membership</h3>
              <p className="text-gray-700">
                <strong>Ro Body</strong> at the prepaid <strong>$74/month</strong> undercuts
                Hims&apos; <strong>$149/month</strong> ongoing membership if you will stay.
                Medication ladders are similar manufacturer cash prices. Add both lines.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: one brand for ED and weight loss</h3>
              <p className="text-gray-700">
                Either works as a single login. You still pay two products. Do not assume
                an ED subscription discounts the GLP-1 membership.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
              <p className="text-sm text-red-800">
                Compounded ED products (including some Hims chews and Ro Sparks / Daily Rise
                Gummies) are not approved by the US FDA. Compounded GLP-1s, if offered, are
                also not FDA-approved. Brand GLP-1s are prescription drugs with labeled
                indications and boxed warnings. This information is educational only — consult
                a licensed clinician before pursuing any treatment.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare Hims and Ro on the official sites"
            intro="Open the live ED or weight-loss page for today’s dose-level price, or the VitalityScout profile for the GLP-1 programs."
            brands={BRANDS}
            hubHref="/glp1"
            hubLabel="Open the GLP-1 hub →"
          />

          <div id="related" className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/guides/online-ed-treatment" className="text-blue-600 hover:underline">How to get ED treatment online</Link></li>
              <li><Link href="/guides/ro-body-weight-loss-cost" className="text-blue-600 hover:underline">Ro Body weight-loss cost</Link></li>
              <li><Link href="/mens-health" className="text-blue-600 hover:underline">Men&apos;s health hub (ED &amp; hair)</Link></li>
              <li><Link href="/glp1" className="text-blue-600 hover:underline">GLP-1 programs</Link></li>
              <li><Link href="/guides/sesame-vs-mdlive-teladoc-cost" className="text-blue-600 hover:underline">Sesame vs MDLive vs Teladoc cash visits</Link></li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s Hims or Ro price</h3>
            <p className="mb-6 text-blue-100">
              ED plans bundle meds. Weight-loss memberships do not. Open the official page, then compare the rest of the directory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.hims.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Hims →
              </a>
              <a
                href="https://ro.co"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Ro →
              </a>
              <Link
                href="/mens-health"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Men&apos;s health hub
              </Link>
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
              We are not affiliated with Hims &amp; Hers or Ro. Prices were read from official
              pages on {AS_OF} and are not a quote or a guarantee. Subscription length, dose,
              and state availability change the number you pay. Compounded products are not
              FDA-approved. Eligibility and treatment decisions must be made with a licensed
              clinician. Verify current pricing and terms on each provider&apos;s site before you enroll.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.hims.com/erectile-dysfunction" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hims ED — generic sildenafil from $22/mo, tadalafil from $24/mo, chews from $30/mo</a></li>
              <li>• <a href="https://www.hims.com/weight-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hims Weight Loss — membership $39 then $149/mo; medication billed separately</a></li>
              <li>• <a href="https://ro.co/erectile-dysfunction" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro ED treatments</a></li>
              <li>• <a href="https://ro.co/erectile-dysfunction/viagra/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro sildenafil / Viagra — $4/dose generic, $90/dose brand</a></li>
              <li>• <a href="https://ro.co/erectile-dysfunction/cialis/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro tadalafil / Cialis — $8/dose generic, $20/dose brand</a></li>
              <li>• <a href="https://ro.co/erectile-dysfunction/sparks/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro Sparks — $12/dose, $48–$168/mo (compounded; not FDA-approved)</a></li>
              <li>• <a href="https://ro.co/weight-loss/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ro Body pricing — $39 then $74–$149/mo membership; GLP-1 cash ladder</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Hims vs Ro Cost Cheat Sheet"
            description="ED all-in vs weight-loss membership-plus-meds — what is actually in the monthly price."
            source="guide_hims_vs_ro_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
