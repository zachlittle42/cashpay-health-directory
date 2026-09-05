import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/ulta-vs-quest-vs-labcorp-ondemand';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Ulta vs Quest vs Labcorp OnDemand (2026): Self-Pay Labs' },
  alternates: { canonical: PAGE_URL },
  description:
    'À la carte self-pay labs (Sept 2026): Ulta CBC/CMP/lipid/A1c $22.95 each; Quest CBC $29, CMP $49, lipid $59, A1c $39; Labcorp CBC $29, CMP $49, lipid $59, A1c $39. Verify cart.',
};

const FAQ_ITEMS = [
  {
    question: 'Is Ulta Lab Tests cheaper than Quest Health or Labcorp OnDemand?',
    answer:
      `For the common à la carte line items as of ${AS_OF}, yes on published sticker. Ulta Lab Tests lists CBC, CMP, lipid panel, and A1c at $22.95 each on its quick-order page (lipid + CMP combo $45.95; CBC + CMP combo $39.95). Quest Health lists CBC $29, CMP $49, lipid $59, A1c $39 — plus a Physician Service Fee starting at $6 on many tests. Labcorp OnDemand lists CBC $29, CMP $49, lipid $59 ($44.25 on a 25% sale), and Diabetes Risk (HbA1c) $39. Bundles can flip the math: Labcorp’s Standard Health Test is $99 (CBC + CMP + urinalysis). Confirm the live cart — promotions move weekly.`,
  },
  {
    question: 'Can I order these lab tests without a doctor visit?',
    answer:
      'Yes. Ulta, Quest Health, and Labcorp OnDemand are direct-access storefronts: you buy online, an independent clinician authorizes the order, and you visit a draw site (or use a kit). This is a convenience pathway, not a substitute for clinical care. Abnormal results should be reviewed with your own clinician.',
  },
  {
    question: 'How much is a CBC, CMP, lipid panel, and A1c without insurance?',
    answer:
      `As of ${AS_OF}: Ulta $22.95 per test (about $91.80 if you buy all four separately; some Ulta panels bundle them cheaper). Quest about $29 + $49 + $59 + $39 = $176 before the $6 Physician Service Fee. Labcorp about $29 + $49 + $59 + $39 = $176, or $99 for the Standard panel if you only need CBC + CMP + UA. These are published storefront prices, not a guaranteed quote.`,
  },
  {
    question: 'Does Ulta use Quest or Labcorp for the actual draw?',
    answer:
      'Ulta Lab Tests partners with Quest Diagnostics for draws at Quest patient locations (Ulta also lists Labcorp collection on some products). Quest Health draws at Quest sites (optional Quest Mobile in-home collection listed at $79 extra). Labcorp OnDemand draws at Labcorp Patient Service Centers and Labcorp at Walgreens. The assay is a national-lab venous draw either way — you are paying for the purchasing pathway and the posted cash price.',
  },
  {
    question: 'Do these self-pay labs accept HSA or FSA?',
    answer:
      'Labcorp OnDemand states most of its health tests are HSA/FSA eligible. Quest notes you may be able to use FSA/HSA and advises checking your plan. Ulta accepts HSA/FSA on cash-pay orders. Confirm eligibility with your plan administrator before you assume a test qualifies.',
  },
  {
    question: 'Ulta vs Quest vs Labcorp — which should I pick?',
    answer:
      'Pick on the exact cart and the closest draw site. Ulta usually wins published à la carte sticker for CBC/CMP/lipid/A1c. Labcorp wins a simple $99 Standard bundle. Quest wins if a Quest site (or $79 in-home draw) is more convenient and you want named Health Profiles ($199 / $329 / $399). Price the same tests the same week. This is information, not medical advice.',
  },
];

const BRANDS = [
  {
    name: 'Ulta Lab Tests',
    price: 'CBC/CMP/lipid/A1c $22.95',
    blurb: 'Marketplace cash prices drawn at Quest (and some Labcorp) sites. Doctor’s order included. Confirm the live quick-order or product page.',
    siteUrl: 'https://www.ultalabtests.com/testing/quick-order',
    profileHref: '/providers/ulta-lab-tests',
  },
  {
    name: 'Quest Health',
    price: 'CBC $29 · CMP $49 · A1c $39',
    blurb: 'questhealth.com storefront. Many tests add a Physician Service Fee starting at $6. 2,000+ Quest locations; optional $79 in-home draw.',
    siteUrl: 'https://www.questhealth.com/shop-tests',
    profileHref: '/providers/quest-health',
  },
  {
    name: 'Labcorp OnDemand',
    price: 'CBC $29 · CMP $49 · A1c $39',
    blurb: 'Standard Health Test $99 (CBC + CMP + UA). Lipid $59 ($44.25 on 25% sale). HSA/FSA on most tests. Does not bill insurance.',
    siteUrl: 'https://www.ondemand.labcorp.com/',
    profileHref: '/providers/labcorp-ondemand',
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

export default function UltaVsQuestVsLabcorpPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ulta vs Quest vs Labcorp OnDemand (2026): À La Carte Self-Pay Lab Prices',
    description:
      'Published September 2026 line-item cash prices for Ulta Lab Tests, Quest Health, and Labcorp OnDemand — CBC, CMP, lipid panel, A1c, and common wellness bundles.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Self-pay clinical laboratory testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Ulta Lab Tests — Quick Order (CBC, CMP, lipid, A1c)', url: 'https://www.ultalabtests.com/testing/quick-order' },
      { '@type': 'CreativeWork', name: 'Quest Health — shop tests', url: 'https://www.questhealth.com/shop-tests' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — health tests', url: 'https://www.ondemand.labcorp.com/' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Complete Blood Count', url: 'https://www.ondemand.labcorp.com/lab-tests/complete-blood-count' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Comprehensive Metabolic Panel', url: 'https://www.ondemand.labcorp.com/lab-tests/comprehensive-metabolic-panel' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Standard Health Test', url: 'https://www.ondemand.labcorp.com/lab-tests/basic-wellness' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Diabetes Risk (HbA1c)', url: 'https://www.ondemand.labcorp.com/lab-tests/diabetes-risk-hbA1c-test' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Ulta vs Quest vs Labcorp OnDemand', item: PAGE_URL },
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
              <span className="text-gray-900">Ulta vs Quest vs Labcorp OnDemand</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-pay labs hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ulta vs Quest vs Labcorp OnDemand (2026): Self-Pay Labs
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Three ways to buy a venous blood test without an office visit. Here are
              the published à la carte prices as of {AS_OF} — CBC, CMP, lipids, A1c,
              and the common bundles.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Ulta Lab Tests</strong> lists CBC, CMP, lipid,
                and A1c at <strong>$22.95 each</strong>. <strong>Quest Health</strong>{' '}
                lists CBC <strong>$29</strong>, CMP <strong>$49</strong>, lipid{' '}
                <strong>$59</strong>, A1c <strong>$39</strong> (plus a Physician
                Service Fee starting at <strong>$6</strong>). <strong>Labcorp
                OnDemand</strong> lists CBC <strong>$29</strong>, CMP{' '}
                <strong>$49</strong>, lipid <strong>$59</strong>, A1c{' '}
                <strong>$39</strong>, and a Standard panel at <strong>$99</strong>.
                Confirm the live cart. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from ultalabtests.com, questhealth.com, and ondemand.labcorp.com on {AS_OF} • 10 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published line items as of {AS_OF}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Ulta Lab Tests</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• CBC $22.95; CMP $22.95</li>
                  <li>• Lipid $22.95; A1c $22.95</li>
                  <li>• Lipid + CMP combo $45.95</li>
                  <li>• CBC + CMP combo $39.95</li>
                </ul>
                <a
                  href="https://www.ultalabtests.com/testing/quick-order"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Ulta →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Quest Health</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• CBC $29; CMP $49; lipid $59</li>
                  <li>• A1c $39</li>
                  <li>• + $6 Physician Service Fee (many tests)</li>
                  <li>• Basic $199; Comp $329; Elite $399</li>
                </ul>
                <a
                  href="https://www.questhealth.com/shop-tests"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Quest Health →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-700 mb-2">Labcorp OnDemand</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• CBC $29; CMP $49; lipid $59</li>
                  <li>• A1c $39</li>
                  <li>• Standard Health Test $99</li>
                  <li>• Comprehensive Health Test $169</li>
                </ul>
                <a
                  href="https://www.ondemand.labcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Labcorp OnDemand →
                </a>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Shop the official cash-pay carts"
            intro="Plain brand URLs and VitalityScout profiles. Sales move weekly — confirm the live line-item and any physician fee before you pay."
            brands={BRANDS}
            hubHref="/labs"
            hubLabel="Browse cash-pay labs →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">À la carte vs bundle</h3>
            <p className="text-sm text-amber-800">
              Ulta usually wins four separate stickers. Labcorp&apos;s $99 Standard can
              beat buying CBC + CMP + UA à la carte at Quest or Labcorp. Quest often
              adds a $6 Physician Service Fee. Price the exact order the same week
              and pick the closer draw site. Verify in each cart.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ulta" className="text-blue-600 hover:underline">1. What Ulta Lab Tests publishes</a></li>
              <li><a href="#quest" className="text-blue-600 hover:underline">2. What Quest Health publishes</a></li>
              <li><a href="#labcorp" className="text-blue-600 hover:underline">3. What Labcorp OnDemand publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">4. Line-item comparison table</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">5. Which to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">6. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Quest vs Labcorp is two national labs selling their own tests. Ulta is
              a cash marketplace that resells those same draws — usually cheaper on
              a single CMP or lipid. This page is the three-way line-item snapshot.
              For Quest vs Labcorp only, see{' '}
              <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">
                Quest vs Labcorp pricing
              </Link>
              .
            </p>

            <h2 id="ulta" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Ulta Lab Tests publishes
            </h2>
            <p className="text-gray-700 mb-4">
              ultalabtests.com/testing/quick-order and Ulta product pages as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CBC</strong> (with differential and platelets) — <strong>$22.95</strong>.</li>
              <li><strong>CMP</strong> — <strong>$22.95</strong>.</li>
              <li><strong>Lipid panel</strong> (and lipid with ratios) — <strong>$22.95</strong>.</li>
              <li><strong>A1c</strong> — <strong>$22.95</strong> (A1c with eAG $23.95).</li>
              <li><strong>Lipid + CMP combo</strong> — <strong>$45.95</strong>.</li>
              <li><strong>Chemistry panel + CBC</strong> — <strong>$39.95</strong>.</li>
              <li>Doctor&apos;s order included. Draws at Quest locations (some listings also offer Labcorp). Frequent promotional discounts; HSA/FSA accepted.</li>
            </ul>
            <a
              href="https://www.ultalabtests.com/testing/quick-order"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Ulta quick order →
            </a>

            <h2 id="quest" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Quest Health publishes
            </h2>
            <p className="text-gray-700 mb-4">
              questhealth.com/shop-tests as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CBC</strong> — <strong>$29</strong>.</li>
              <li><strong>CMP</strong> — <strong>$49</strong>.</li>
              <li><strong>Cholesterol (lipid) panel</strong> — <strong>$59</strong>.</li>
              <li><strong>Hemoglobin A1c</strong> — <strong>$39</strong>.</li>
              <li><strong>Physician Service Fee</strong> starting at <strong>$6</strong> collected for independent clinician oversight on many tests.</li>
              <li>Health Profiles: Basic $199, Comprehensive $329, Elite $399. Optional in-home collection listed at $79 extra. 2,000+ Quest locations.</li>
            </ul>
            <a
              href="https://www.questhealth.com/shop-tests"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Quest Health →
            </a>

            <h2 id="labcorp" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Labcorp OnDemand publishes
            </h2>
            <p className="text-gray-700 mb-4">
              ondemand.labcorp.com product pages as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CBC</strong> — <strong>$29</strong>.</li>
              <li><strong>CMP</strong> — <strong>$49</strong>.</li>
              <li><strong>Cholesterol and lipid panel</strong> — <strong>$59</strong> ($44.25 at 25% off on the day we checked).</li>
              <li><strong>Diabetes Risk (HbA1c)</strong> — <strong>$39</strong>.</li>
              <li><strong>Standard Health Test</strong> — <strong>$99</strong> (CBC + CMP + urinalysis).</li>
              <li><strong>Comprehensive Health Test</strong> — <strong>$169</strong>. Advanced Health Panel $399.</li>
              <li>HSA/FSA accepted on most tests. Does not bill insurance. 2,000+ centers plus 400+ Labcorp at Walgreens. Most results in 1–2 days after the sample arrives.</li>
            </ul>
            <a
              href="https://www.ondemand.labcorp.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Labcorp OnDemand →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Line-item comparison table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ulta</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quest Health</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labcorp OnDemand</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">CBC</td>
                  <td className="border border-gray-300 px-4 py-3">$22.95</td>
                  <td className="border border-gray-300 px-4 py-3">$29</td>
                  <td className="border border-gray-300 px-4 py-3">$29</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">CMP</td>
                  <td className="border border-gray-300 px-4 py-3">$22.95</td>
                  <td className="border border-gray-300 px-4 py-3">$49 + $6 fee on many orders</td>
                  <td className="border border-gray-300 px-4 py-3">$49</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Lipid / cholesterol</td>
                  <td className="border border-gray-300 px-4 py-3">$22.95</td>
                  <td className="border border-gray-300 px-4 py-3">$59</td>
                  <td className="border border-gray-300 px-4 py-3">$59 ($44.25 on 25% sale)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Hemoglobin A1c</td>
                  <td className="border border-gray-300 px-4 py-3">$22.95</td>
                  <td className="border border-gray-300 px-4 py-3">$39</td>
                  <td className="border border-gray-300 px-4 py-3">$39</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">CBC + CMP together</td>
                  <td className="border border-gray-300 px-4 py-3">$39.95 combo</td>
                  <td className="border border-gray-300 px-4 py-3">~$78 + fee if bought separate</td>
                  <td className="border border-gray-300 px-4 py-3">$78 separate; inside $99 Standard</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Basic wellness bundle</td>
                  <td className="border border-gray-300 px-4 py-3">Build à la carte / Ulta panels</td>
                  <td className="border border-gray-300 px-4 py-3">Basic Health Profile $199</td>
                  <td className="border border-gray-300 px-4 py-3">Standard Health Test $99</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Broader panel</td>
                  <td className="border border-gray-300 px-4 py-3">Named Ulta panels (varies)</td>
                  <td className="border border-gray-300 px-4 py-3">Comprehensive $329; Elite $399</td>
                  <td className="border border-gray-300 px-4 py-3">Comprehensive $169; Advanced $399</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Draw network</td>
                  <td className="border border-gray-300 px-4 py-3">Quest (some Labcorp)</td>
                  <td className="border border-gray-300 px-4 py-3">Quest; $79 in-home option</td>
                  <td className="border border-gray-300 px-4 py-3">Labcorp + Walgreens</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Profile</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/ulta-lab-tests" className="text-blue-600 hover:underline">Ulta</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/quest-health" className="text-blue-600 hover:underline">Quest Health</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/labcorp-ondemand" className="text-blue-600 hover:underline">Labcorp OnDemand</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Four à la carte tests (CBC + CMP + lipid + A1c) land near{' '}
              <strong>$91.80 at Ulta</strong> vs about <strong>$176</strong> at Quest
              or Labcorp before Quest&apos;s physician fee. If you only need a yearly
              snapshot, Labcorp&apos;s <strong>$99 Standard</strong> can beat three
              separate Quest/Labcorp stickers. Membership platforms that bundle 100+
              markers — Superpower $349/year, Function $365/year — are a different
              product; see{' '}
              <Link href="/guides/function-vs-superpower-cost" className="text-blue-600 hover:underline">
                Function vs Superpower cost
              </Link>
              {' '}and{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                cheapest blood test panels
              </Link>
              .
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest published à la carte sticker</h3>
              <p className="text-gray-700">
                <strong>Ulta Lab Tests</strong> at $22.95 for CBC, CMP, lipid, or A1c.
                Confirm the cart — Ulta runs frequent sales and the quick-order list moves.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: one named bundle at a national lab</h3>
              <p className="text-gray-700">
                <strong>Labcorp OnDemand $99 Standard</strong> (CBC + CMP + UA) or
                Quest Basic / Comprehensive / Elite if you want a branded profile and
                a Quest site (or $79 in-home draw).
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: the closer draw site</h3>
              <p className="text-gray-700">
                When Ulta and the lab storefronts are within a few dollars, pick the
                location. A $6 Quest fee plus a 40-minute drive is not cheaper than
                a $29 Labcorp CBC at the Walgreens next door.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare the three cash-pay lab carts"
            intro="Open the official shop for today’s line-item, or the VitalityScout profile for network and our take."
            brands={BRANDS}
            hubHref="/labs"
            hubLabel="Open the labs hub →"
          />

          <div id="related" className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp pricing</Link></li>
              <li><Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">Cheapest blood test panels</Link></li>
              <li><Link href="/guides/function-vs-superpower-cost" className="text-blue-600 hover:underline">Function vs Superpower cost</Link></li>
              <li><Link href="/labs" className="text-blue-600 hover:underline">Cash-pay labs hub</Link></li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s lab cart</h3>
            <p className="mb-6 text-blue-100">
              À la carte stickers and weekly sales move. Open the official page, then compare the rest of the directory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.ultalabtests.com/testing/quick-order"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Ulta →
              </a>
              <a
                href="https://www.questhealth.com/shop-tests"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Quest Health →
              </a>
              <a
                href="https://www.ondemand.labcorp.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Labcorp OnDemand →
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
              We are not affiliated with Ulta Lab Tests, Quest Diagnostics, or Labcorp.
              Prices were read from official storefronts on {AS_OF} and are not a quote
              or a guarantee. Sales, physician fees, and ZIP-level availability change
              the number you pay. Self-pay results do not replace clinical care. Verify
              current pricing in each cart before you order.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.ultalabtests.com/testing/quick-order" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ulta Lab Tests — Quick Order (CBC, CMP, lipid, A1c $22.95; combos $39.95 / $45.95)</a></li>
              <li>• <a href="https://www.questhealth.com/shop-tests" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — CBC $29, CMP $49, lipid $59, A1c $39; Physician Service Fee from $6</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/complete-blood-count" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — CBC $29</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/comprehensive-metabolic-panel" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — CMP $49</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/diabetes-risk-hbA1c-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — Diabetes Risk (HbA1c) $39</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/basic-wellness" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — Standard Health Test $99</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Self-Pay Lab Line-Item Cheat Sheet"
            description="Ulta vs Quest vs Labcorp — CBC, CMP, lipid, A1c, and when a $99 bundle wins."
            source="guide_ulta_vs_quest_vs_labcorp_ondemand"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
