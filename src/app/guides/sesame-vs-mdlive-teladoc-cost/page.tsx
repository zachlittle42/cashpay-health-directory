import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/sesame-vs-mdlive-teladoc-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Sesame vs MDLive vs Teladoc Cost (2026): Cash Visits' },
  alternates: { canonical: PAGE_URL },
  description:
    'Cash-pay telehealth visit costs (Sept 2026): Sesame from $34 (Plus visits from $37), MDLive urgent care up to $89, Teladoc self-pay $89. Official rates — verify.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does a cash-pay visit cost at Sesame vs MDLive vs Teladoc in 2026?',
    answer:
      `As of ${AS_OF}, Sesame’s homepage lists visits starting at $34; Sesame Plus advertises video visits as low as $37 with membership ($10.99/month or $99/year, $10 off visits). MDLive publishes urgent-care visits at $0–$89 (the cash/self-pay ceiling is $89; insured visits can be $0). Teladoc’s official no-insurance page lists 24/7 urgent care at $89/visit, dermatology $89/review, nutrition $89/visit, and mental health $119/visit. These are published cash/self-pay rates — confirm the live checkout price for your ZIP and visit type.`,
  },
  {
    question: 'Is Sesame cheaper than Teladoc or MDLive without insurance?',
    answer:
      `Usually, for a one-off acute or primary-care video visit. Sesame is a cash-pay marketplace: you pick a provider and pay the posted price, often in the mid-$30s on the pages we checked. Teladoc self-pay urgent care is a flat $89. MDLive cash urgent care is listed up to $89. If your employer or health plan already includes MDLive or Teladoc at $0, that insured visit beats any cash marketplace. This guide prices the self-pay / cash path only.`,
  },
  {
    question: 'Do I need a membership to use Sesame, MDLive, or Teladoc?',
    answer:
      'No. All three sell pay-per-visit care. Sesame Plus ($10.99/month or $99/year) is optional: $10 off telehealth and primary-care visits, $10 off in-person specialty/dental, and one free lab per year on the annual plan (not available in Washington State per Sesame). MDLive and Teladoc do not require a consumer membership for a cash urgent-care visit. Price the first visit as a one-off, then do the membership math.',
  },
  {
    question: 'What is included in a cash telehealth visit?',
    answer:
      'A typical cash visit includes the clinician encounter (video, phone, or on some platforms a message/e-visit) and, if appropriate, a prescription sent to a pharmacy. The medication, labs, and imaging are almost always extra. Sesame providers set their own posted cash prices and Sesame does not bill insurance. Teladoc primary care and condition-management programs are not available on the self-pay path. Confirm what your specific booking includes before you pay.',
  },
  {
    question: 'When should I use cash telehealth instead of urgent care?',
    answer:
      'Use cash telehealth for straightforward, non-emergency problems a video visit can handle: sinus infection, UTI, pink eye, a refill, or a primary-care question. Use in-person urgent care when you need hands, an x-ray, stitches, or a rapid in-house test. Use the ER for chest pain, trouble breathing, stroke signs, or any true emergency. Cost is never a reason to skip the ER. For the broader cash-visit ladder, see our cash-pay telehealth visits guide.',
  },
  {
    question: 'Can I use HSA or FSA for these visits?',
    answer:
      'Often yes for a clinician visit that is medical care. Sesame, MDLive, and Teladoc generally let you pay with a card; HSA/FSA eligibility depends on your plan. Confirm with your administrator before you assume a visit qualifies. Memberships and wellness add-ons are less consistently eligible than a one-off medical visit.',
  },
];

const BRANDS = [
  {
    name: 'Sesame',
    price: 'From $34/visit',
    blurb: 'Cash-pay marketplace. Homepage lists visits from $34; Plus ($10.99/mo or $99/yr) takes $10 off and advertises visits from $37. No insurance billed. Verify the live listing.',
    siteUrl: 'https://sesamecare.com',
    profileHref: '/providers/sesame-primary-care',
  },
  {
    name: 'MDLIVE',
    price: 'Up to $89 urgent care',
    blurb: 'Official cash range $0–$89 for urgent care; $0 when a participating plan covers the visit. Price is shown before you book. Meds extra.',
    siteUrl: 'https://www.mdlive.com',
    profileHref: '/providers/mdlive',
  },
  {
    name: 'Teladoc Health',
    price: '$89 self-pay urgent care',
    blurb: 'Official no-insurance menu: urgent care $89, dermatology $89, nutrition $89, mental health $119. Primary care is not on the self-pay path.',
    siteUrl: 'https://www.teladochealth.com/start/no-insurance',
    profileHref: '/providers/teladoc-general-medical',
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

export default function SesameVsMdliveTeladocCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Sesame vs MDLive vs Teladoc Cost (2026): Cash-Pay Telehealth Visits',
    description:
      'Published September 2026 self-pay / cash visit prices for Sesame, MDLive, and Teladoc — urgent care, primary care, and what a membership changes.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Cash-pay telehealth / virtual urgent and primary care visit' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Sesame — cash-pay telehealth marketplace', url: 'https://sesamecare.com' },
      { '@type': 'CreativeWork', name: 'Sesame Plus membership ($10.99/mo or $99/yr)', url: 'https://sesamecare.com/join/membership' },
      { '@type': 'CreativeWork', name: 'MDLIVE — visit pricing', url: 'https://www.mdlive.com' },
      { '@type': 'CreativeWork', name: 'Teladoc Health — care without insurance', url: 'https://www.teladochealth.com/start/no-insurance' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Sesame vs MDLive vs Teladoc Cost', item: PAGE_URL },
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
              <span className="text-gray-900">Sesame vs MDLive vs Teladoc Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sesame vs MDLive vs Teladoc Cost (2026): Cash-Pay Visits
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Three ways to see a clinician on a screen. Here are the published self-pay
              / cash visit rates as of {AS_OF} — not employer copays, not a guaranteed quote.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Sesame</strong> lists visits from <strong>$34</strong>{' '}
                (Plus advertises video visits from <strong>$37</strong> with a{' '}
                <strong>$10.99/month or $99/year</strong> membership). <strong>MDLIVE</strong>{' '}
                publishes urgent care at <strong>$0–$89</strong> (cash ceiling $89).{' '}
                <strong>Teladoc</strong> lists self-pay urgent care at <strong>$89/visit</strong>.
                Prescriptions and labs are extra. Confirm the live price. This is information,
                not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from sesamecare.com, mdlive.com, and teladochealth.com on {AS_OF} • 10 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published cash / self-pay rates as of {AS_OF}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Sesame</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Visits from $34 (homepage)</li>
                  <li>• Plus visits from $37; $10 off</li>
                  <li>• Plus: $10.99/mo or $99/yr</li>
                  <li>• Cash marketplace; no insurance</li>
                </ul>
                <a
                  href="https://sesamecare.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Sesame →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">MDLIVE</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Urgent care $0–$89</li>
                  <li>• Dermatology $0–$95</li>
                  <li>• Therapy $0–$179; psych $0–$299</li>
                  <li>• Cash ceiling shown before booking</li>
                </ul>
                <a
                  href="https://www.mdlive.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit MDLIVE →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-700 mb-2">Teladoc</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Urgent care $89/visit</li>
                  <li>• Dermatology $89/review</li>
                  <li>• Nutrition $89; mental health $119</li>
                  <li>• Primary care not self-pay</li>
                </ul>
                <a
                  href="https://www.teladochealth.com/start/no-insurance"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Teladoc →
                </a>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Book a posted cash visit"
            intro="Plain brand URLs and VitalityScout profiles. Confirm the live ZIP-level or account price — marketplace and insured rates move."
            brands={BRANDS}
            hubHref="/telehealth"
            hubLabel="Browse the telehealth hub →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Cash rates only</h3>
            <p className="text-sm text-amber-800">
              MDLive and Teladoc are insurance-first for many members. If your plan already
              covers a $0 virtual visit, that beats any cash marketplace. This page prices
              the self-pay / uninsured path published on official pages. Verify with the
              provider before you book.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#sesame" className="text-blue-600 hover:underline">1. What Sesame publishes</a></li>
              <li><a href="#mdlive" className="text-blue-600 hover:underline">2. What MDLive publishes</a></li>
              <li><a href="#teladoc" className="text-blue-600 hover:underline">3. What Teladoc publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">4. Side-by-side cash table</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">5. What a visit includes</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">6. Which to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;See a doctor online&quot; is not one price. Sesame is a marketplace where
              each clinician posts a cash number. MDLive and Teladoc are national networks
              that publish a self-pay ceiling — and often a $0 insured copay. This guide
              keeps those paths separate.
            </p>

            <h2 id="sesame" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Sesame publishes
            </h2>
            <p className="text-gray-700 mb-4">
              sesamecare.com as of {AS_OF} lists <strong>visits starting at $34</strong>.
              It is a cash-pay marketplace: providers set posted rates, Sesame does not
              bill insurance, and you see the price before you book. Marketplace listings
              move by clinician and ZIP.
            </p>
            <p className="text-gray-700 mb-4">
              sesamecare.com/join/membership as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Sesame Plus</strong> — <strong>$10.99/month or $99/year</strong>.</li>
              <li><strong>$10 off</strong> telehealth and primary-care visits; <strong>$10 off</strong> in-person specialty and dental.</li>
              <li>Plus marketing copy: quality doctor visits <strong>as low as $37</strong>. Example: prescription-refill visit <strong>$47 → $37</strong>.</li>
              <li>Annual members get <strong>one free lab</strong> per year (Sesame values it at $65+). Free lab not available in Washington State.</li>
              <li>Membership is not insurance and cannot be combined with insurance or Medicare.</li>
            </ul>
            <a
              href="https://sesamecare.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 mr-3 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Sesame →
            </a>
            <a
              href="https://sesamecare.com/join/membership"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Sesame Plus →
            </a>

            <h2 id="mdlive" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What MDLive publishes
            </h2>
            <p className="text-gray-700 mb-4">
              mdlive.com as of {AS_OF} posts these ranges (insured visits can be $0;
              the top of the range is the cash/self-pay number you should budget):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Urgent care</strong> — <strong>$0–$89</strong>. 24/7 for 80+ non-emergency conditions.</li>
              <li><strong>Primary care</strong> — listed at <strong>$0</strong> for participating plans; MDLive says pricing is shown upfront if there is a charge. Treat primary care as insurance-first unless your account shows a cash number.</li>
              <li><strong>Mental health</strong> — talk therapy <strong>$0–$179</strong> initial (follow-up <strong>$140</strong> before insurance); psychiatry <strong>$0–$299</strong> initial (follow-up <strong>$159</strong> before insurance).</li>
              <li><strong>Dermatology</strong> — <strong>$0–$95</strong>.</li>
              <li>Account creation is free. You are charged after the appointment is confirmed. Cancellation fees can apply (wellness $25 within 24 hours; routine care $25 within 2 hours; mental health $50 within 24 hours).</li>
            </ul>
            <a
              href="https://www.mdlive.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit MDLIVE →
            </a>

            <h2 id="teladoc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Teladoc publishes
            </h2>
            <p className="text-gray-700 mb-4">
              teladochealth.com/start/no-insurance as of {AS_OF} is the official
              self-pay menu:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>24/7 urgent care</strong> — <strong>$89/visit</strong>.</li>
              <li><strong>Nutrition</strong> — <strong>$89/visit</strong>.</li>
              <li><strong>Dermatology</strong> — <strong>$89/review</strong>.</li>
              <li><strong>Mental health</strong> — <strong>$119/visit</strong>.</li>
              <li>Teladoc states primary care and condition-management programs are <strong>not available for self-pay</strong> (insured/employer only).</li>
              <li>Cost is shown before you confirm. Pricing is subject to change.</li>
            </ul>
            <a
              href="https://www.teladochealth.com/start/no-insurance"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Teladoc self-pay →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Side-by-side cash table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sesame</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">MDLIVE</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Teladoc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Acute / urgent video</td>
                  <td className="border border-gray-300 px-4 py-3">From $34; Plus from $37</td>
                  <td className="border border-gray-300 px-4 py-3">Up to $89 cash</td>
                  <td className="border border-gray-300 px-4 py-3">$89 self-pay</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Primary care</td>
                  <td className="border border-gray-300 px-4 py-3">Posted cash by provider</td>
                  <td className="border border-gray-300 px-4 py-3">Insurance-first; $0 on participating plans</td>
                  <td className="border border-gray-300 px-4 py-3">Not offered self-pay</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Dermatology</td>
                  <td className="border border-gray-300 px-4 py-3">Posted cash by provider</td>
                  <td className="border border-gray-300 px-4 py-3">$0–$95</td>
                  <td className="border border-gray-300 px-4 py-3">$89/review</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Mental health</td>
                  <td className="border border-gray-300 px-4 py-3">Example therapy $75 → $65 with Plus</td>
                  <td className="border border-gray-300 px-4 py-3">Therapy to $179; psych to $299</td>
                  <td className="border border-gray-300 px-4 py-3">$119/visit</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Membership</td>
                  <td className="border border-gray-300 px-4 py-3">Optional $10.99/mo or $99/yr</td>
                  <td className="border border-gray-300 px-4 py-3">None required for cash UC</td>
                  <td className="border border-gray-300 px-4 py-3">None required for self-pay UC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Insurance billed?</td>
                  <td className="border border-gray-300 px-4 py-3">No — cash only</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, when you have a participating plan</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, when covered; else self-pay menu</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Profile</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/sesame-primary-care" className="text-blue-600 hover:underline">Sesame</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/mdlive" className="text-blue-600 hover:underline">MDLIVE</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/teladoc-general-medical" className="text-blue-600 hover:underline">Teladoc</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What a cash visit includes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Usually included:</strong> the clinician encounter and a decision to treat, refer, or send you in-person.</li>
              <li><strong>Often included:</strong> a prescription sent to a retail pharmacy if the clinician decides it is appropriate. Controlled substances are commonly excluded.</li>
              <li><strong>Almost never included:</strong> the medication itself, blood work, imaging, or a procedure.</li>
              <li><strong>Sesame Plus extras:</strong> $10 off visits and one free lab on the annual plan — not the visit itself.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the wider cash-telehealth ladder (Amazon On-Demand, PlushCare, Lemonaid,
              GoodRx Care) and when to drive to urgent care, use{' '}
              <Link href="/guides/cash-pay-telehealth-visits" className="text-blue-600 hover:underline">
                cash-pay telehealth visits
              </Link>
              .
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest published cash visit</h3>
              <p className="text-gray-700">
                <strong>Sesame</strong> if you are paying your own money. Start with the
                $34+ marketplace listing; add Plus only if you will visit more than once
                or want the annual lab.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: 24/7 brand-name video at a flat cash rate</h3>
              <p className="text-gray-700">
                <strong>Teladoc at $89</strong> or <strong>MDLIVE up to $89</strong>. Same
                band. Teladoc is explicit that primary care is off the self-pay menu.
                MDLive will show the number before you book.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: you already have a plan that includes virtual care</h3>
              <p className="text-gray-700">
                Use the insured MDLive or Teladoc benefit first. A $0 copay beats a $34
                cash visit. Come back to Sesame when you are out of network or uninsured.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare the three cash visit brands"
            intro="Open the official site for the live price, or the VitalityScout profile for services and our take."
            brands={BRANDS}
            hubHref="/telehealth"
            hubLabel="Open the telehealth hub →"
          />

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s cash visit price</h3>
            <p className="mb-6 text-blue-100">
              Marketplace listings and insured copays move. Open the official page, then compare the rest of the telehealth directory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://sesamecare.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Sesame →
              </a>
              <a
                href="https://www.mdlive.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit MDLIVE →
              </a>
              <a
                href="https://www.teladochealth.com/start/no-insurance"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Teladoc →
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
              We are not affiliated with Sesame, MDLIVE, or Teladoc Health. Prices were read
              from official pages on {AS_OF} and are not a quote or a guarantee. Marketplace
              rates vary by clinician and ZIP; insured copays can be $0. Verify current
              pricing before you book. A licensed clinician decides whether treatment or a
              prescription is appropriate.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://sesamecare.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sesame — visits starting at $34</a></li>
              <li>• <a href="https://sesamecare.com/join/membership" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sesame Plus — $10.99/mo or $99/yr; visits from $37; $10 off</a></li>
              <li>• <a href="https://www.mdlive.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MDLIVE — urgent care $0–$89; therapy, psychiatry, dermatology ranges</a></li>
              <li>• <a href="https://www.teladochealth.com/start/no-insurance" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Teladoc — self-pay urgent care $89; derm $89; nutrition $89; mental health $119</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/sesame-vs-mdlive-teladoc-cost')} />

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Cash Telehealth Visit Cheat Sheet"
            description="Sesame vs MDLive vs Teladoc — when a $34 marketplace visit beats an $89 brand visit."
            source="guide_sesame_vs_mdlive_teladoc_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
