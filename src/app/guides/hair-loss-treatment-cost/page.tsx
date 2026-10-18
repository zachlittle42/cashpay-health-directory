import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/hair-loss-treatment-cost';
const PAGE_TITLE = 'Hair Loss Treatment Cost (2026): Finasteride & Minoxidil';
const PAGE_DESCRIPTION =
  'Hair loss treatment cost in 2026: generic finasteride $14.93 for 30 tablets with GoodRx, telehealth finasteride $16-$22/mo, store-brand minoxidil ~$3/mo.';
const PRICES_CHECKED = 'October 18, 2026';

// Category 'hair-loss' keeps these links direct: getReferralLink only swaps in
// partner URLs for ED comparisons ('ed' / 'mens-health').
const HAIR_BRANDS = [
  {
    name: 'GoodRx',
    providerId: 'goodrx',
    category: 'pharmacy',
    price: '$14.93 / 30 tabs',
    blurb:
      'GoodRx listed generic finasteride 1 mg at $14.93 for 30 tablets with its coupon, against a $45.69 retail price (prices updated September 2, 2026). The coupon covers the drug only. You still need a prescription from a clinician.',
    siteUrl: 'https://www.goodrx.com/finasteride',
  },
  {
    name: 'Cost Plus Drugs',
    providerId: 'cost-plus-drugs',
    category: 'pharmacy',
    price: 'Check calculator',
    blurb:
      'Mark Cuban Cost Plus Drugs lists generic finasteride 1 mg. We could not confirm its current price on October 18, 2026, so check the price calculator for 30 or 90 tablets plus shipping. You need a prescription sent to the pharmacy.',
    siteUrl: 'https://www.costplusdrugs.com/medications/finasteride-1mg-tablet/',
  },
  {
    name: 'Ro',
    providerId: 'ro',
    category: 'hair-loss',
    price: '$16-$20/mo',
    blurb:
      'Ro lists oral finasteride at $20 a month on a quarterly plan, $18 on a six-month plan and $16 on a 12-month plan. Ro says the online visit is free in most cases. Its compounded Ro Mane Spray is $43-$50 a month.',
    siteUrl: 'https://ro.co/pricing/',
  },
  {
    name: 'Hims',
    providerId: 'hims',
    category: 'hair-loss',
    price: 'From $22/mo',
    blurb:
      'Hims lists oral finasteride at $22 a month, based on a $264 one-time purchase of 12 months, or $78 for a 3-month subscription billed every 3 months. Hims says shipping and provider messaging are included. Its compounded topical finasteride and minoxidil spray starts at $35 a month and is not FDA-approved.',
    siteUrl: 'https://www.hims.com/blog/finasteride-costs-pricing-guide',
  },
  {
    name: 'Keeps',
    providerId: 'keeps',
    category: 'hair-loss',
    price: '$27/mo finasteride',
    blurb:
      'A hair-loss-only service. Keeps says plans start at $10 a month depending on the treatment, and a Keeps price comparison table lists generic finasteride at $27 a month. Keeps bills and ships every 3 months and lists $5 shipping per shipment. Several Keeps pages look dated, so confirm at checkout.',
    siteUrl: 'https://www.keeps.com/our-products/finasteride',
  },
  {
    name: 'Hers',
    providerId: 'hers',
    category: 'hair-loss',
    price: 'Oral minoxidil $29/mo',
    blurb:
      'The women’s brand of Hims & Hers. Hers lists oral minoxidil from $29 a month, prescribed off-label after an online assessment. It also sells over-the-counter minoxidil 2% drops and 5% foam for women.',
    siteUrl: 'https://www.forhers.com/hair-loss/oral-minoxidil',
  },
];

const SOURCES = [
  { label: 'FDA — PROPECIA (finasteride) prescribing information, 2022 label', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020788s030lbl.pdf' },
  { label: 'FDA — PROPECIA supplement approval package (depression added to labeling)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2011/020788Orig1s017.pdf' },
  { label: 'FDA — Alert on potential risks of compounded topical finasteride products (April 22, 2025)', url: 'https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-consumers-potential-risks-associated-compounded' },
  { label: 'FDA — Loniten (minoxidil tablets) label, boxed warning and indication', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/018154s026lbl.pdf' },
  { label: 'DailyMed — Minoxidil topical aerosol 5% (foam) Drug Facts, Costco Wholesale', url: 'https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0abfa2f8-38d0-4bfe-91ff-aa4abde66525' },
  { label: 'Safety of low-dose oral minoxidil for hair loss: a multicenter study of 1,404 patients (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/33639244/' },
  { label: 'Characterization and management of adverse events of low-dose oral minoxidil: a narrative review (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11942662/' },
  { label: 'Case report — pericardial and pleural effusion with low-dose oral minoxidil (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9478873/' },
  { label: 'American Academy of Dermatology — Hair loss: diagnosis and treatment', url: 'https://www.aad.org/public/diseases/hair-loss/treatment/diagnosis-treat' },
  { label: 'American Academy of Dermatology — Is platelet-rich plasma the secret to younger-looking skin? (general PRP cost estimate)', url: 'https://www.aad.org/public/cosmetic/younger-looking/platelet-rich-plasma-secret-to-younger-skin' },
  { label: 'American Academy of Dermatology — Research demonstrates potential of PRP therapy for hair loss', url: 'https://www.aad.org/news/prp-therapy-for-hair-loss' },
  { label: 'American Academy of Dermatology — Hair loss: who gets it and causes', url: 'https://www.aad.org/public/diseases/hair-loss/causes/18-causes' },
  { label: 'American Academy of Dermatology — Female pattern hair loss', url: 'https://www.aad.org/public/diseases/hair-loss/types/female-pattern' },
  { label: 'ISHRS — PRP for hair loss: procedure, benefits and costs', url: 'https://ishrs.org/patients/treatments-for-hair-loss/medications/platelet-rich-plasma/' },
  { label: 'Cleveland Clinic — Platelet-rich plasma for hair loss', url: 'https://health.clevelandclinic.org/hair-loss-got-you-down-platelet-rich-plasma-may-regrow-it' },
  { label: 'ISHRS — Should the cost of a hair transplant matter?', url: 'https://ishrs.org/cost-of-a-hair-transplant/' },
  { label: 'ISHRS — FUT hair transplant', url: 'https://ishrs.org/fut/' },
  { label: 'Cleveland Clinic — Hair replacement surgery / hair transplant', url: 'https://my.clevelandclinic.org/cosmetic-plastic-surgery/procedures/hair-loss' },
  { label: 'GoodRx — Finasteride prices and coupons', url: 'https://www.goodrx.com/finasteride' },
  { label: 'GoodRx — Minoxidil (oral) prices and coupons', url: 'https://www.goodrx.com/minoxidil' },
  { label: 'Mark Cuban Cost Plus Drugs — Finasteride 1 mg tablet', url: 'https://www.costplusdrugs.com/medications/finasteride-1mg-tablet/' },
  { label: 'Ro — Pricing', url: 'https://ro.co/pricing/' },
  { label: 'Ro — Ro Mane Spray', url: 'https://ro.co/medications/ro-mane-spray/' },
  { label: 'Ro — Hair loss FAQ', url: 'https://ro.co/faq/hair-loss/' },
  { label: 'Ro — Cost, pricing and services FAQ', url: 'https://ro.co/faq/cost-pricing-services/' },
  { label: 'Hims — Finasteride cost and pricing guide', url: 'https://www.hims.com/blog/finasteride-costs-pricing-guide' },
  { label: 'Hims — Hair Power Pack page (finasteride $264 for 12 months; $78 per 3-month subscription)', url: 'https://www.hims.com/hair-loss/hair-power-pack-shopping-mbg-v2' },
  { label: 'Hims — Topical finasteride and minoxidil spray', url: 'https://www.hims.com/hair-loss/topical-finasteride' },
  { label: 'Keeps — Homepage price comparison table', url: 'https://www.keeps.com/' },
  { label: 'Keeps — How much does Keeps cost? (FAQ)', url: 'https://www.keeps.com/faq/how-much-does-keeps-cost' },
  { label: 'Keeps — Finasteride (generic Propecia)', url: 'https://www.keeps.com/our-products/finasteride' },
  { label: 'Keeps — Finasteride and minoxidil plans', url: 'https://www.keeps.com/buy-keeps' },
  { label: 'Keeps — Low-dose oral minoxidil', url: 'https://buy.keeps.com/low-dose-oral-minoxidil' },
  { label: 'Hers — Oral minoxidil for hair loss', url: 'https://www.forhers.com/hair-loss/oral-minoxidil' },
  { label: 'Hers — Minoxidil 5% foam for women', url: 'https://www.forhers.com/hair-loss/minoxidil-women' },
  { label: 'Walmart — Men’s Rogaine 5% minoxidil foam, 3-month supply', url: 'https://www.walmart.com/ip/Men-s-Rogaine-5-Minoxidil-Foam-Treatment-3-Month-Supply/11081994' },
  { label: 'Costco — Kirkland Signature 5% minoxidil topical solution, 6-pack', url: 'https://www.costco.com/kirkland-signature-hair-regrowth-treatment-extra-strength-for-men,-5%25-minoxidil-topical-solution,-2-fl-oz,-6-pack.product.11501138.html' },
  { label: 'Costco — Kirkland Signature minoxidil foam for men, 6-count', url: 'https://www.costco.com/kirkland-signature-hair-regrowth-treatment-minoxidil-foam-for-men,-2.11-oz,-6-count.product.100038030.html' },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does hair loss treatment cost without insurance?',
    answer:
      'Medication routes run from about $3 to about $50 a month. Store-brand 5% minoxidil is the cheapest: Costco listed a six-month Kirkland solution pack at $17.99. Generic finasteride 1 mg was $14.93 for 30 tablets with a GoodRx coupon. Telehealth plans that include the visit list oral finasteride at $16 to $22 a month (Ro and Hims). Compounded topical sprays run $35 to $50 a month. In-office PRP costs about $400 to $1,500 or more per session, according to the ISHRS, and a hair transplant is priced per graft by most surgeons. Prices change, so confirm with the provider.',
  },
  {
    question: 'How much is finasteride without insurance?',
    answer:
      'GoodRx listed generic finasteride 1 mg at $14.93 for 30 tablets with its coupon, against a $45.69 retail price, with prices updated September 2, 2026. Through telehealth, Ro lists oral finasteride at $16 to $20 a month depending on plan length, and Hims lists $22 a month on a 12-month purchase or $78 for a 3-month subscription. Mark Cuban Cost Plus Drugs also sells finasteride 1 mg; check its price calculator for the current price. Pharmacy coupon prices do not include the clinician visit you need for a prescription.',
  },
  {
    question: 'Is topical finasteride FDA-approved?',
    answer:
      'No. FDA says there is no FDA-approved topical formulation of finasteride, and compounded topical finasteride products do not have FDA-approved labeling. In an April 22, 2025 alert, FDA said it had reviewed 32 adverse event reports from 2019 to 2024, with effects similar to those seen with oral finasteride, including erectile dysfunction, decreased libido, depression, anxiety and suicidal ideation. The alert covers telemedicine platforms selling topical finasteride alone or combined with ingredients such as minoxidil.',
  },
  {
    question: 'Is oral minoxidil FDA-approved for hair loss?',
    answer:
      'No. Minoxidil tablets are FDA-approved for high blood pressure that has not responded to other medicines, and their label carries a boxed warning about fluid around the heart (pericardial effusion, occasionally progressing to tamponade) and worsening angina. Clinicians prescribe low doses off-label for hair loss. In a multicenter study of 1,404 patients, the most common side effect was unwanted hair growth (15.1%), with lightheadedness in 1.7%, fluid retention in 1.3% and fast heart rate in 0.9%. A clinician should decide whether it is appropriate for you.',
  },
  {
    question: 'How long does it take for finasteride or minoxidil to work?',
    answer:
      'Months. The Propecia label says daily use for three months or more is necessary before benefit is observed, and that stopping treatment reverses the effect within 12 months. Topical 5% minoxidil labels say results may appear at 2 months with twice-daily use, some men need at least 4 months, and you should stop and ask a doctor if you see no regrowth after 4 months. Shedding can increase temporarily at the start, and stopping minoxidil means losing the regrown hair in 3 to 4 months.',
  },
  {
    question: 'Can women take finasteride for hair loss?',
    answer:
      'Finasteride is FDA-approved for male pattern hair loss in men only. The Propecia label lists pregnancy as a contraindication and says women who are or may become pregnant should not handle crushed or broken tablets. Women have other options, including over-the-counter minoxidil (Hers sells 2% drops and 5% foam) and off-label oral minoxidil, which Hers lists from $29 a month. Because thyroid disease, nutrient deficiencies and other conditions can cause hair loss, the AAD recommends a diagnosis from a board-certified dermatologist.',
  },
  {
    question: 'How much do PRP and hair transplants cost?',
    answer:
      'They cost far more than medication. The ISHRS estimates PRP at about $400 to $1,500 or more per session, a general AAD estimate for PRP is $250 to $1,500 per treatment, and treatment is repeated. Insurance generally does not cover PRP or hair transplants because they are considered cosmetic. The ISHRS says transplant costs are too variable to publish, and most surgeons charge per graft. One ISHRS physician says they usually start with minoxidil and finasteride and offer PRP to people who do not respond.',
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

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article' },
  twitter: { card: 'summary', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

const td = 'border border-gray-300 px-4 py-3';
const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const srcLink = 'text-blue-600 hover:underline';

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-link-purpose="source" className={srcLink}>
      {children}
    </a>
  );
}

export default function HairLossTreatmentCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hair Loss Treatment Cost Without Insurance: Finasteride, Minoxidil, Telehealth and More',
    description: PAGE_DESCRIPTION,
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-10-18',
    dateModified: '2026-10-18',
    mainEntityOfPage: PAGE_URL,
    citation: SOURCES.map((source) => source.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Hair Loss Treatment Cost', item: PAGE_URL },
    ],
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Hair Loss Treatment Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/mens-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Men&apos;s Health Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Telehealth &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hair Loss Treatment Cost Without Insurance: Finasteride, Minoxidil and Telehealth Plans in 2026
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The two main hair loss medicines are cheap generics, but the price changes a lot depending
              on where you buy them, whether a clinician visit is included, and whether the product is a
              plain generic or a compounded mix. Here are posted cash prices, what the FDA labels say, and
              how to avoid paying more than you need to.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> medication-based hair loss treatment costs about{' '}
                <strong>$3 to $50 a month</strong> without insurance. The cheapest legitimate route is{' '}
                <strong>store-brand 5% minoxidil</strong> (Costco listed a six-month Kirkland solution
                pack at $17.99, about $3 a month) plus, if a clinician prescribes it,{' '}
                <strong>generic finasteride 1 mg filled with a discount coupon</strong> (GoodRx listed
                $14.93 for 30 tablets). Telehealth plans that include the visit list oral finasteride at{' '}
                <strong>$16 to $22 a month</strong> at Ro and Hims. Compounded sprays cost $35 to $50 a
                month and are not FDA-approved. PRP runs about $400 to $1,500 or more per session, per the ISHRS.
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-700">
              Prices checked {PRICES_CHECKED} &mdash; confirm with the provider
            </p>
            <p className="mt-1 text-sm text-gray-500">By VitalityScout research &bull; 12 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">Over-the-counter minoxidil</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; About $3-$17/mo (store brand to Rogaine)</li>
                  <li>&bull; No prescription</li>
                  <li>&bull; FDA-approved topical</li>
                  <li>&bull; 2-4+ months to judge results</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Generic finasteride 1 mg</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; $14.93/30 tabs with GoodRx</li>
                  <li>&bull; $16-$22/mo via Ro or Hims</li>
                  <li>&bull; Prescription required; men only</li>
                  <li>&bull; 3+ months to see benefit</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Off-label and compounded</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Oral minoxidil: $13.84/30 tabs (GoodRx)</li>
                  <li>&bull; Compounded sprays: $35-$50/mo</li>
                  <li>&bull; Not FDA-approved for hair loss</li>
                  <li>&bull; Needs clinician oversight</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">Buy generics yourself if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You want the lowest price per month</li>
                  <li>&bull; You already have a clinician who can prescribe</li>
                  <li>&bull; You are fine starting with OTC minoxidil alone</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-1">Use a telehealth plan if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You need the prescription visit included</li>
                  <li>&bull; You want refills shipped automatically</li>
                  <li>&bull; You have compared the plan to a coupon fill first</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#at-a-glance" className="text-blue-600 hover:underline">1. Hair loss treatment cost at a glance</a></li>
              <li><a href="#finasteride" className="text-blue-600 hover:underline">2. Finasteride cost without insurance</a></li>
              <li><a href="#minoxidil" className="text-blue-600 hover:underline">3. Topical minoxidil: brand vs store brand</a></li>
              <li><a href="#oral-minoxidil" className="text-blue-600 hover:underline">4. Low-dose oral minoxidil (off-label)</a></li>
              <li><a href="#telehealth" className="text-blue-600 hover:underline">5. Telehealth plans: Ro, Hims, Keeps and Hers</a></li>
              <li><a href="#compounded" className="text-blue-600 hover:underline">6. Compounded topical finasteride</a></li>
              <li><a href="#procedures" className="text-blue-600 hover:underline">7. PRP and hair transplant costs</a></li>
              <li><a href="#women" className="text-blue-600 hover:underline">8. Hair loss in women</a></li>
              <li><a href="#timeline" className="text-blue-600 hover:underline">9. How long treatment takes</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">10. How to save</a></li>
              <li><a href="#red-flags" className="text-blue-600 hover:underline">11. Safety and when to see a clinician</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="at-a-glance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hair Loss Treatment Cost at a Glance</h2>

            <p className="text-gray-700 mb-4">
              These are posted cash prices from provider, pharmacy and retailer pages checked on{' '}
              {PRICES_CHECKED}. Retail and coupon prices change often, and several provider pages show
              different numbers for the same product, which we note. Use them to compare routes, then
              confirm the checkout total.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Option</th>
                    <th className={th}>Posted cash price</th>
                    <th className={th}>Prescription?</th>
                    <th className={th}>FDA status for hair loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Store-brand 5% minoxidil (Kirkland, Costco)</td>
                    <td className={td}>$17.99 for a 6-month solution pack; $48.99 for 6 months of foam</td>
                    <td className={td}>No</td>
                    <td className={td}>FDA-approved over-the-counter drug</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Men&apos;s Rogaine 5% foam</td>
                    <td className={td}>$49.97 for a 3-month, three-can pack (Walmart product page; other Walmart listings differ)</td>
                    <td className={td}>No</td>
                    <td className={td}>FDA-approved over-the-counter drug</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Generic finasteride 1 mg, pharmacy fill</td>
                    <td className={td}>$14.93 for 30 tablets with GoodRx ($45.69 retail); Cost Plus: check calculator</td>
                    <td className={td}>Yes</td>
                    <td className={td}>FDA-approved for male pattern hair loss, men only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Finasteride through telehealth</td>
                    <td className={td}>Ro $16-$20/mo; Hims $22/mo (12 months) or $78 for 3 months; Keeps $27/mo</td>
                    <td className={td}>Yes, online visit</td>
                    <td className={td}>FDA-approved generic</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Low-dose oral minoxidil</td>
                    <td className={td}>$13.84 for 30 tablets of 2.5 mg with GoodRx; Hers from $29/mo</td>
                    <td className={td}>Yes</td>
                    <td className={td}>Off-label; tablets are approved only for hard-to-treat high blood pressure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Compounded topical finasteride + minoxidil</td>
                    <td className={td}>Hims spray from $35/mo; Ro Mane Spray $43-$50/mo</td>
                    <td className={td}>Yes</td>
                    <td className={td}>Not FDA-approved; FDA risk alert in April 2025</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>PRP injections (in office)</td>
                    <td className={td}>$400-$1,500+ per session (ISHRS); $250-$1,500 per treatment in a general AAD PRP estimate</td>
                    <td className={td}>In-office procedure</td>
                    <td className={td}>Usually not covered by insurance (considered cosmetic)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Hair transplant (FUE or FUT)</td>
                    <td className={td}>Most surgeons charge per graft; see our transplant cost guides</td>
                    <td className={td}>Surgery</td>
                    <td className={td}>Rarely covered by insurance (elective)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> the medicine itself is inexpensive. Most of the price
              difference comes from the clinician visit, the subscription format, and whether you are
              buying a plain FDA-approved generic or a compounded product. Procedures cost far more.
              The <Link href="/mens-health" className={srcLink}>men&apos;s health hub</Link> compares
              the same telehealth brands side by side.
            </p>

            <h2 id="finasteride" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Finasteride Cost Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Finasteride 1 mg is the generic version of Propecia. It is a prescription tablet that the
              FDA label limits to male pattern hair loss in men. There are three ways to pay for it:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Retail pharmacy with a coupon.</strong> GoodRx listed 30 tablets at $14.93 with
                its coupon, compared with a $45.69 retail price, on a page with prices updated
                September 2, 2026. Coupon prices vary by pharmacy and ZIP code. You need a prescription
                from your own clinician, and that visit is a separate cost.
              </li>
              <li>
                <strong>Mark Cuban Cost Plus Drugs.</strong> Cost Plus sells finasteride 1 mg by mail.
                We could not confirm its current price on our check date, so use its{' '}
                <SourceLink href="https://www.costplusdrugs.com/medications/finasteride-1mg-tablet/">price calculator</SourceLink>{' '}
                and compare 30 and 90 tablets. Shipping is added per order; our{' '}
                <Link href="/guides/sildenafil-cost-without-insurance" className={srcLink}>sildenafil cost guide</Link>{' '}
                shows how a Cost Plus fill total adds up.
              </li>
              <li>
                <strong>Telehealth subscription.</strong> Ro lists oral finasteride at $20 a month on a
                quarterly plan, $18 on a six-month plan and $16 on a 12-month plan, and its cost FAQ says
                the online visit is free in most cases. Hims lists $22 a month, which matches its $264
                12-month price, or $78 for a 3-month subscription (about $26 a month). A Keeps price
                comparison table lists finasteride at $27 a month. These prices bundle the online visit and
                shipping, which a coupon price does not.
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What the FDA label says about side effects.</strong> The Propecia label lists
                decreased libido, erectile dysfunction and ejaculation disorder as the most common
                adverse reactions, and says reduced sex drive and erection problems that continued after
                stopping the drug have been reported. FDA approved a label change adding depression, and
                the current label also lists suicidal ideation and behavior among reports received after
                approval. The label also notes effects on PSA (prostate) blood tests, so tell any
                clinician who orders a PSA test that you take finasteride.{' '}
                <SourceLink href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020788s030lbl.pdf">FDA label (2022)</SourceLink>.
              </p>
            </div>

            <h2 id="minoxidil" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Topical Minoxidil: Brand vs Store Brand</h2>

            <p className="text-gray-700 mb-4">
              Topical minoxidil is sold over the counter as a liquid solution or a foam, in 2% and 5%
              strengths, including women&apos;s versions. The store-brand 5% foam Drug Facts labels we
              checked carry essentially the same directions and warnings as the name brand, so the price
              gap is not about the active ingredient:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Kirkland Signature 5% solution (Costco):</strong> $17.99 online for a six-bottle, six-month pack, about $3 a month. Costco labels the listing a price update and limits how many packs a membership can buy, so the price and stock can change.</li>
              <li><strong>Kirkland Signature 5% foam (Costco):</strong> $48.99 online for a six-month, six-can pack, about $8 a month. Costco&apos;s same-day delivery listing for the foam showed a higher $56.74.</li>
              <li><strong>Men&apos;s Rogaine 5% foam:</strong> $49.97 for a three-can, three-month pack on Walmart&apos;s product page, about $17 a month. Other Walmart listings for the same pack show different prices, so check the cart total.</li>
              <li><strong>Women&apos;s products:</strong> Hers sells 2% minoxidil drops and a 5% foam it describes as a generic of Women&apos;s Rogaine. We did not confirm current women&apos;s product prices, so compare at checkout.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Men&apos;s 5% minoxidil Drug Facts labels say the product is not intended for frontal
              baldness or a receding hairline, that using more than directed will not improve results,
              and that hair may shed more for up to 2 weeks at the start. If shedding continues beyond
              that, the label says to see a physician.
            </p>

            <h2 id="oral-minoxidil" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Low-Dose Oral Minoxidil (Off-Label)</h2>

            <p className="text-gray-700 mb-4">
              Some clinicians now prescribe minoxidil tablets at low doses for hair loss. The tablet
              itself is cheap: GoodRx listed 30 tablets of 2.5 mg at $13.84 with its coupon (prices
              updated October 17, 2026). Hers lists oral minoxidil from $29 a month through its
              telehealth service, and Keeps also sells it.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-2">Why oral minoxidil needs a clinician</h3>
              <p className="text-gray-700 mb-3">
                Minoxidil tablets are FDA-approved only for high blood pressure that has not responded to
                other medicines. Their label carries a boxed warning: the drug can cause fluid to build up
                around the heart (pericardial effusion), occasionally progressing to tamponade, and can
                worsen angina. Hair loss use is off-label, at low doses.
              </p>
              <p className="text-gray-700">
                In a multicenter study of 1,404 patients on low doses, the most common side effect was
                unwanted hair growth elsewhere (15.1%), which led only 0.5% to stop. Lightheadedness
                (1.7%), fluid retention (1.3%) and fast heart rate (0.9%) were less common, and no
                life-threatening events were reported. A review notes unwanted hair growth is more common
                in women and at higher doses, and case reports describe rare effusions even at low doses.
                Some of the evidence is retrospective, so let a licensed clinician weigh it for you.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare finasteride and minoxidil sources before you pay"
            intro="Pharmacy coupons and Cost Plus price the medicine only; you need your own prescription. Telehealth plans include the online visit. Confirm the product, quantity, plan length and renewal terms at checkout."
            brands={HAIR_BRANDS}
            hubHref="/mens-health"
            hubLabel="Compare men's health telehealth →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="telehealth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Telehealth Plans: Ro, Hims, Keeps and Hers</h2>

            <p className="text-gray-700 mb-4">
              A telehealth plan bundles an online questionnaire reviewed by a licensed clinician, the
              prescription, and shipped refills. That convenience is what you pay for over a coupon
              fill. Compare the same drug and the same plan length:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Service</th>
                    <th className={th}>Oral finasteride</th>
                    <th className={th}>Other hair products</th>
                    <th className={th}>Terms to check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Ro</td>
                    <td className={td}>$20/mo quarterly, $18/mo six-month, $16/mo 12-month</td>
                    <td className={td}>Ro Mane Spray (compounded finasteride, minoxidil and tretinoin): $50/mo quarterly, $43/mo six-month</td>
                    <td className={td}>Hair loss ships quarterly; visit free in most cases</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Hims</td>
                    <td className={td}>$22/mo ($264 for 12 months) or $78 for a 3-month subscription</td>
                    <td className={td}>Topical finasteride and minoxidil spray from $35/mo</td>
                    <td className={td}>Hims lists a three-month minimum subscription</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Keeps</td>
                    <td className={td}>$27/mo in a Keeps comparison table; plans &quot;from $10/mo&quot; by treatment</td>
                    <td className={td}>Minoxidil, compounded topical finasteride-minoxidil foam and drops, low-dose oral minoxidil</td>
                    <td className={td}>Bills and ships every 3 months; $5 shipping per shipment; some Keeps pages look dated</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Hers (women)</td>
                    <td className={td}>Finasteride is labeled for men only</td>
                    <td className={td}>Oral minoxidil from $29/mo; OTC minoxidil 2% drops and 5% foam</td>
                    <td className={td}>Oral minoxidil only if prescribed after an online assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The lowest monthly prices usually require the longest prepaid plan. Since finasteride needs
              three or more months to show benefit, a quarterly plan is a sensible minimum, but a 12-month
              prepay locks in money before you know whether the drug suits you. For how Hims and Ro
              compare on other services, see our{' '}
              <Link href="/guides/hims-vs-ro-cost" className={srcLink}>Hims vs Ro cost guide</Link>; for
              photo-based online dermatology more broadly, see the{' '}
              <Link href="/guides/online-dermatology-cost" className={srcLink}>online dermatology cost guide</Link>.
            </p>

            <h2 id="compounded" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Compounded Topical Finasteride: Not FDA-Approved</h2>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
              <p className="text-sm text-red-800">
                There is no FDA-approved topical finasteride. Sprays, foams and serums that contain it
                are compounded and do not have FDA-approved labeling. On April 22, 2025, FDA alerted
                clinicians, compounders, telemedicine platforms and consumers to potential risks after
                reviewing 32 adverse event reports from 2019 to 2024. The reported effects resembled those
                of oral finasteride, including erectile dysfunction, decreased libido, depression, anxiety,
                suicidal ideation, brain fog, insomnia and testicular pain. This information is
                educational only. Consult a qualified medical professional before using any compounded
                product.{' '}
                <SourceLink href="https://www.fda.gov/drugs/human-drug-compounding/fda-alerts-health-care-providers-compounders-and-consumers-potential-risks-associated-compounded">Read the FDA alert</SourceLink>.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Compounded topicals are also the priciest medication route on this page: $35 a month and up
              at Hims and $43 to $50 a month for Ro Mane Spray, against about $15 for a coupon fill of
              oral generic finasteride. If a clinician suggests a compounded product, ask why it suits you
              better than the FDA-approved options.
            </p>

            <h2 id="procedures" className="text-2xl font-bold text-gray-900 mt-12 mb-6">PRP and Hair Transplant Costs</h2>

            <p className="text-gray-700 mb-4">
              <strong>PRP (platelet-rich plasma)</strong> uses your own blood, processed and injected into
              the scalp in a clinic. Published estimates vary: the ISHRS puts a session at about $400 to
              $1,500 or more and says equipment and additives drive much of the difference; a general AAD
              article on PRP (written about skin rejuvenation) gives $250 to $1,500 per treatment; and a
              dermatologist quoted by Cleveland Clinic gave $500 to $1,000 per session. The AAD describes
              a hair loss protocol in which injections are repeated once a month for three months after
              the first treatment, then every three to six months, so a year costs several times the
              per-session price. The ISHRS also advises weighing a provider&apos;s experience and
              reputation above price. Insurance generally does
              not cover it because it is considered cosmetic. The AAD advises getting a diagnosis from a
              board-certified dermatologist first, and one ISHRS physician says they usually start with
              minoxidil and finasteride and offer PRP to people who do not respond.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Hair transplants</strong> move follicles from the back of the scalp to thinning
              areas. The ISHRS says costs are too variable to publish, depend on the surgeon and practice,
              and are usually charged per graft, with FUT generally cheaper than FUE because it takes less
              surgeon labor. Insurance rarely covers elective procedures. The ISHRS also warns that the
              rise of FUE has brought clinics, often run by non-doctors, that take shortcuts, so check who
              performs the surgery. For prices, see our{' '}
              <Link href="/guides/hair-transplant-cost-by-country" className={srcLink}>hair transplant cost by country guide</Link>{' '}
              and the{' '}
              <Link href="/guides/hair-transplant-grafts-guide" className={srcLink}>graft count guide</Link>, since
              graft count drives the quote.
            </p>

            <h2 id="women" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hair Loss in Women: Get the Cause Checked First</h2>

            <p className="text-gray-700 mb-4">
              The AAD says female pattern hair loss is the most common cause of hair loss in women, but it
              is not the only one. The AAD lists thyroid disease, for example, and says treating the
              thyroid disease can reverse the hair loss. It also advises taking biotin, iron or zinc only
              when a blood test shows a deficiency. Paying for a months-long treatment before ruling out
              a fixable cause can waste money and delay the right care.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Finasteride is not for women who are or may become pregnant.</strong> The Propecia label lists pregnancy as a contraindication, and women who are or may become pregnant should not handle crushed or broken tablets. It is FDA-approved for men only.</li>
              <li><strong>Over-the-counter minoxidil</strong> is sold in women&apos;s 2% and 5% products.</li>
              <li><strong>Oral minoxidil</strong> is off-label; Hers lists it from $29 a month. Unwanted hair growth is reported more often in women.</li>
              <li><strong>Evaluation:</strong> a board-certified dermatologist can tell pattern hair loss apart from thyroid-related, nutritional or other causes. Our <Link href="/womens-health" className={srcLink}>women&apos;s health hub</Link> lists telehealth options.</li>
            </ul>

            <h2 id="timeline" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Long Treatment Takes (and Why That Affects Cost)</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Finasteride:</strong> the label says daily use for three months or more is necessary before benefit is observed, continued use is needed to keep it, and stopping reverses the effect within 12 months.</li>
              <li><strong>Topical 5% minoxidil:</strong> labels say results may appear at 2 months with twice-daily use, some men need at least 4 months, and you should stop and ask a doctor if there is no regrowth after 4 months. Stopping means losing the regrown hair in 3 to 4 months.</li>
              <li><strong>Realistic expectations:</strong> minoxidil labels say not everyone responds and it is unlikely anyone will regrow all their hair.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Budget for at least four months before judging results, and for ongoing use if it
              works. At $16 to $22 a month, a year of telehealth finasteride costs roughly $192 to $264;
              at $14.93 per 30 tablets, a year of coupon fills is about $180 plus the cost of the visit.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Hair Loss Treatment</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Start with store-brand minoxidil.</strong> At about $3 a month for the Kirkland solution, it costs a fraction of name-brand foam with the same active ingredient.</li>
              <li><strong>Price the finasteride fill, not the subscription.</strong> If a clinician you already see will prescribe it, a coupon fill ($14.93 for 30 tablets at GoodRx) or a Cost Plus quote may beat a plan.</li>
              <li><strong>Count the visit.</strong> Coupon prices exclude the clinician visit. Ro says its online visit is free in most cases, and Hims bundles it in the monthly price.</li>
              <li><strong>Match plan length to the timeline.</strong> Ro drops from $20 to $16 a month on a 12-month plan, but prepaying a year before you know how you respond is a risk.</li>
              <li><strong>Skip compounded mixes unless there is a reason.</strong> They cost more and are not FDA-approved.</li>
              <li><strong>Get the diagnosis right first.</strong> Especially for women, ruling out thyroid or nutrient problems can prevent months of paying for the wrong treatment.</li>
              <li><strong>Ask about HSA or FSA rules.</strong> Eligibility for hair loss treatment depends on your plan, so confirm with your administrator before assuming it qualifies.</li>
            </ul>

            <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety and When to See a Clinician</h2>

            <p className="text-gray-700 mb-4">
              Talk to a licensed clinician before starting any prescription hair loss drug, and see a
              board-certified dermatologist in person if:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Your hair loss is sudden or patchy, or comes with scalp pain, redness or scaling. Those signs can point to causes other than pattern hair loss, and the AAD lists many.</li>
              <li>You are a woman with thinning hair, or you have symptoms that could point to thyroid disease or a deficiency.</li>
              <li>You notice depression, mood changes or thoughts of self-harm on finasteride. Contact your prescriber promptly; in a crisis, call or text 988.</li>
              <li>Sexual side effects continue on finasteride, or after you stop it.</li>
              <li>On oral minoxidil you notice swelling, rapid heartbeat, lightheadedness or shortness of breath. For chest pain, call 911.</li>
              <li>Any website offers prescription finasteride or oral minoxidil without a clinician review, or promises guaranteed regrowth.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Compare Men&apos;s Health Telehealth</h2>
            <p className="mb-6 text-blue-100">
              See hair loss and ED telehealth services side by side, with published prices and terms.
            </p>
            <Link
              href="/mens-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse the Men&apos;s Health Hub
            </Link>
          </div>

          {/* FAQ: visible block renders FAQ_ITEMS, the same array used for the FAQPage schema */}
          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h2>
            <p className="text-sm text-gray-600">
              This guide is general information, not medical advice, and no clinician reviewed it.
              Whether finasteride, minoxidil or any other treatment is right for you, and at what dose, is
              a decision for a licensed clinician. Finasteride is FDA-approved for male pattern hair loss
              in men only and must not be used by women who are or may become pregnant. Oral minoxidil
              is used off-label for hair loss, and compounded topical finasteride is not FDA-approved.
              This page gives no dosing instructions. Prices come from public provider, pharmacy and
              retailer pages as of {PRICES_CHECKED}. They vary by location and over time, some
              provider pages list conflicting figures, and pharmacy prices exclude the clinician visit.
              Always confirm the current price before you pay. VitalityScout is not affiliated with
              GoodRx, Mark Cuban Cost Plus Drugs, Ro, Hims &amp; Hers, Keeps, Costco, Walmart or
              Rogaine, and listing a provider is not an endorsement.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {SOURCES.map((source) => (
                <li key={source.url}>
                  &bull;{' '}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-link-purpose="source"
                    className={srcLink}
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Read our <Link href="/editorial-policy" className={srcLink}>editorial policy</Link> for
              how we research and update cost guides.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <RelatedGuides items={getRelatedGuides('/guides/hair-loss-treatment-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Prescription Savings Cheat Sheet"
            description="How to compare coupon fills, mail-order pharmacies and telehealth plans before you pay."
            source="guide_hair_loss_treatment_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
