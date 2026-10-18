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
import { NOINDEX_FOLLOW } from '@/lib/indexability';

const PAGE_URL = 'https://vitalityscout.com/guides/mammogram-cost';
const PAGE_TITLE = 'Mammogram Cost Without Insurance (2026): Free & Cash Options';
const PAGE_DESCRIPTION =
  'Mammogram cost without insurance in 2026: published self-pay screening prices of $99-$559, what diagnostic and 3D exams add, and free CDC and Medicare routes.';
const UPDATED_LABEL = 'October 18, 2026';

// Self-pay prices below were checked on October 18, 2026 against provider,
// hospital and marketplace pages (Memorial Healthcare System, MDsave, Green
// Imaging, RadiologyAssist, RadNet, SimonMed). Each number is cited in SOURCES.
// If a future pass cannot re-confirm them, set this back to false (noindex).
const PRICES_VERIFIED = true;

const MAMMOGRAM_OPTIONS = [
  {
    name: 'CDC screening program (NBCCEDP)',
    providerId: 'cdc-nbccedp',
    category: 'imaging',
    price: 'Free or low cost if eligible',
    blurb: 'Federally funded screening and diagnostic follow-up for uninsured or underinsured women aged 40-64 with income at or below 250% of the federal poverty level. Start here before you pay cash.',
    siteUrl: 'https://www.cdc.gov/breast-cervical-cancer-screening/index.html',
    siteLabel: 'Check eligibility →',
  },
  {
    name: 'Green Imaging',
    providerId: 'green-imaging',
    category: 'imaging',
    price: 'From $125',
    blurb: 'Cash-pay imaging network. Its mammogram page lists self-pay mammograms from $125 and diagnostic exams at $175 for one breast or $200 for both, with no separate radiologist fee. The page may not be current, so confirm the price for a named partner center.',
    siteUrl: 'https://greenimaging.net/mammogram/',
    profileHref: '/providers/green-imaging',
    profileLabel: 'Green Imaging profile',
  },
  {
    name: 'RadiologyAssist',
    providerId: 'radiologyassist',
    category: 'imaging',
    price: 'From about $140',
    blurb: 'Cash-pay imaging booking network. A March 2026 RadiologyAssist page says self-pay mammograms in Phoenix start at around $140, depending on the center and exam type. Confirm which center and exam the rate covers, when payment is due, and whether you need a clinician\'s order to book.',
    siteUrl: 'https://radiologyassist.com',
    profileHref: '/providers/radiologyassist',
    profileLabel: 'RadiologyAssist profile',
  },
  {
    name: 'MDsave',
    providerId: 'mdsave',
    category: 'imaging',
    price: '3D screening $191-$559',
    blurb: 'Prepaid marketplace. Its national 3D screening mammogram listings run $191 to $559 as bundled prices, and MDsave says it refunds you if you do not receive the care. Check the named facility and whether a marketplace fee is added.',
    siteUrl: 'https://www.mdsave.com/procedures/3d-mammogram-screening/d784fbc5',
    siteLabel: 'See listings →',
  },
  {
    name: 'Solis Mammography',
    providerId: 'solis-mammography',
    category: 'imaging',
    price: 'Call for self-pay quote',
    blurb: 'Dedicated breast-imaging centers. Solis says every center offers self-pay and asks you to call or email for the cost; eligible people may qualify for its Value Screening Program. MDsave lists one Solis center, in Granbury, Texas, at $254 to $296 for a 3D screening.',
    siteUrl: 'https://www.solismammo.com/services/screening-mammogram',
    profileHref: '/providers/solis-mammography',
    profileLabel: 'Solis profile',
  },
  {
    name: 'RadNet',
    providerId: 'radnet',
    category: 'imaging',
    price: 'Self-pay quote',
    blurb: 'Large outpatient imaging operator. It does not post a base self-pay mammogram price; its regional FAQ pages list a $40 charge to add its optional AI-assisted Enhanced Breast Cancer Detection. Ask for a written Good Faith Estimate that names 2D or 3D and any add-on.',
    siteUrl: 'https://www.radnet.com/los-angeles/frequently-asked-radiology-questions',
    profileHref: '/providers/radnet',
    profileLabel: 'RadNet profile',
  },
  {
    name: 'SimonMed Imaging',
    providerId: 'simonmed-imaging',
    category: 'imaging',
    price: 'Self-pay quote',
    blurb: 'Outpatient radiology group offering 2D and 3D mammography. SimonMed says it provides a cash price for people without insurance but does not post it; it lists an optional Mammogram+ screening add-on at $50 self-pay. Request an estimate before the visit.',
    siteUrl: 'https://simonmed.com/patients/your-visit/faqs/',
    profileHref: '/providers/simonmed-imaging',
    profileLabel: 'SimonMed profile',
  },
  {
    name: 'HRSA-funded health centers',
    providerId: 'hrsa-health-centers',
    category: 'imaging',
    price: 'Sliding fee by income',
    blurb: 'Community health centers charge on a sliding scale based on income. A clinician there can examine you, order a diagnostic mammogram if you have symptoms, and connect you with local screening programs.',
    siteUrl: 'https://findahealthcenter.hrsa.gov/',
    siteLabel: 'Find a health center →',
  },
];

const SOURCES = [
  { label: 'Memorial Healthcare System — Mammogram (self-pay prices: 3D screening, diagnostic mammogram, breast ultrasound)', url: 'https://www.mhs.net/services/womens-services/womens-imaging/mammogram' },
  { label: 'MDsave — 3D mammogram screening (tomosynthesis), national listings', url: 'https://www.mdsave.com/procedures/3d-mammogram-screening/d784fbc5' },
  { label: 'MDsave — 2D mammogram screening, Florida listings', url: 'https://www.mdsave.com/procedures/2d-mammogram-screening/d786fcc5/florida' },
  { label: 'MDsave — 2D mammogram screening, Loganville, Georgia listings', url: 'https://www.mdsave.com/procedures/2d-mammogram-screening/d786fcc5/georgia/atlanta-ga/30052' },
  { label: 'MDsave — 2D diagnostic mammogram, both breasts, Silver Spring, Maryland', url: 'https://www.mdsave.com/procedures/2d-mammogram-diagnostic-bilateral-2-breasts/d784fdc8/maryland/washington-dc/20904?page=0' },
  { label: 'MDsave — 3D diagnostic mammogram, both breasts, New York', url: 'https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/new-york/new-york-ny' },
  { label: 'MDsave — 3D diagnostic mammogram, both breasts, Tucson', url: 'https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/arizona/tucson-az/85755' },
  { label: 'MDsave — 3D diagnostic mammogram, both breasts, Kansas City', url: 'https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/missouri/kansas-city-mo' },
  { label: 'MDsave — Breast ultrasound, one breast, national listings', url: 'https://www.mdsave.com/amp/procedures/ultrasound-breast-unilateral-1-breast/d785f9c9' },
  { label: 'MDsave — Breast ultrasound, both breasts, Dallas', url: 'https://www.mdsave.com/procedures/ultrasound-breast-bilateral-2-breasts/d584f5c8/texas/dallas-tx' },
  { label: 'MDsave — Breast ultrasound, both breasts, Houston', url: 'https://www.mdsave.com/procedures/ultrasound-breast-bilateral-2-breasts/d584f5c8/texas/houston-tx' },
  { label: 'MDsave — 3D screening listing that itemizes facility, radiologist and marketplace fees (Pikesville, Maryland)', url: 'https://www.mdsave.com/p/advanced-radiology-pomona-square-imaging-and-radiology/3d-mammogram-screening-tomosynthesis/d282f8c96ada' },
  { label: 'MDsave — Solis Mammography, Granbury, Texas (listed prices)', url: 'https://www.mdsave.com/p/solis-mammography-imaging-and-radiology-center' },
  { label: 'MDsave — Solis Mammography, Granbury: 3D diagnostic mammogram, one breast', url: 'https://www.mdsave.com/p/solis-mammography-imaging-and-radiology-center/3d-mammogram-diagnostic-unilateral/d78afdc865' },
  { label: 'MDsave — 3D mammogram screening, Mineral Wells, Texas listings', url: 'https://www.mdsave.com/procedures/3d-mammogram-screening-tomosynthesis/d784fbc5/texas/mineral-wells-tx' },
  { label: 'Green Imaging — Mammogram (self-pay screening and diagnostic prices)', url: 'https://greenimaging.net/mammogram/' },
  { label: 'Green Imaging — Home (final cash price with no separate radiologist fee; physician order required for most exams)', url: 'https://greenimaging.net/' },
  { label: 'RadiologyAssist — Mammogram cost in Phoenix for self-pay patients starting from $140 (March 2026)', url: 'https://radiologyassist.com/news/mammogram-cost-in-phoenix-az-for-self-pay-patients-starting-from-140/' },
  { label: 'RadNet — Frequently asked radiology questions (Enhanced Breast Cancer Detection add-on cost)', url: 'https://www.radnet.com/los-angeles/frequently-asked-radiology-questions' },
  { label: 'RadNet Community Radiology — FAQs (EBCD insurance coverage note)', url: 'https://graphics.radnet.com/community-radiology/frequently-asked-radiology-questions' },
  { label: 'SimonMed — Mammogram+ (self-pay screening add-on)', url: 'https://simonmed.com/patients/services/mammogram-plus/' },
  { label: 'SimonMed — 3D Mammogram (AI included at no added cost)', url: 'https://simonmed.com/patients/services/3d-mammogram/' },
  { label: 'SimonMed — Patient FAQs (cash price for uninsured patients, estimates)', url: 'https://simonmed.com/patients/your-visit/faqs/' },
  { label: 'Solis Mammography — screening mammogram (self-pay and doctor\'s order policy)', url: 'https://www.solismammo.com/services/screening-mammogram' },
  { label: 'Solis Mammography — diagnostic mammogram (physician order required)', url: 'https://www.solismammo.com/services/diagnostic-mammogram' },
  { label: 'Solis Mammography — regional center pages (self-pay at every center, Value Screening Program)', url: 'https://www.solismammo.com/regions/houston' },
  { label: 'USPSTF — Breast Cancer: Screening (final recommendation, April 2024)', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening' },
  { label: 'National Cancer Institute — Mammograms fact sheet (screening vs diagnostic, tomosynthesis)', url: 'https://www.cancer.gov/types/breast/mammograms-fact-sheet' },
  { label: 'FDA — Mammography Quality Standards Act and Program (facility certification, breast density notification)', url: 'https://www.fda.gov/radiation-emitting-products/mammography-quality-standards-act-and-program' },
  { label: 'HRSA — Women\'s Preventive Services Guidelines (breast cancer screening, additional imaging)', url: 'https://www.hrsa.gov/womens-guidelines' },
  { label: 'Medicare.gov — Mammograms (screening and diagnostic coverage)', url: 'https://www.medicare.gov/coverage/mammograms' },
  { label: 'HealthCare.gov — Preventive care benefits for women', url: 'https://www.healthcare.gov/preventive-care-women/' },
  { label: 'HealthCare.gov — Preventive health services (in-network, non-grandfathered plans)', url: 'https://www.healthcare.gov/coverage/preventive-care-benefits/' },
  { label: 'CDC — National Breast and Cervical Cancer Early Detection Program', url: 'https://www.cdc.gov/breast-cervical-cancer-screening/index.html' },
  { label: 'CMS — Your medical bill rights under the No Surprises Act (Good Faith Estimates for uninsured and self-pay patients)', url: 'https://www.cms.gov/medical-bill-rights' },
  { label: 'CMS — Hospital Price Transparency', url: 'https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency' },
  { label: 'CMS — Physician Fee Schedule Look-Up Tool (procedure codes)', url: 'https://www.cms.gov/medicare/physician-fee-schedule/search' },
  { label: 'IRS — Requirements for 501(c)(3) hospitals under section 501(r) (financial assistance policies)', url: 'https://www.irs.gov/charities-non-profits/charitable-organizations/requirements-for-501c3-hospitals-under-the-affordable-care-act-section-501r' },
  { label: 'IRS Publication 502 — Medical and Dental Expenses', url: 'https://www.irs.gov/publications/p502' },
  { label: 'HRSA — Find a Health Center', url: 'https://findahealthcenter.hrsa.gov/' },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does a mammogram cost without insurance?',
    answer:
      'The published self-pay screening prices we found on October 18, 2026 ran from $99 to $559. Memorial Healthcare System in South Florida lists a 3D screening mammogram at $99 self-pay, Green Imaging lists mammograms from $125, RadiologyAssist says Phoenix mammograms start at around $140, and MDsave\'s national 3D screening listings run $191 to $559. A diagnostic mammogram costs more, such as $235 at Memorial or $239 to $475 for a 3D exam of both breasts on MDsave in the metros we sampled. Prices vary by facility and change over time, so get a written Good Faith Estimate before you book. First check the free routes: the CDC\'s National Breast and Cervical Cancer Early Detection Program serves eligible women aged 40-64 with income at or below 250% of the federal poverty level, and Medicare covers a yearly screening mammogram from age 40 at no cost when the provider accepts assignment.',
  },
  {
    question: 'Can I get a free mammogram if I don\'t have insurance?',
    answer:
      'Often, if you qualify. The CDC\'s National Breast and Cervical Cancer Early Detection Program funds free or low-cost screening and diagnostic follow-up for uninsured or underinsured women aged 40-64 with income at or below 250% of the federal poverty level; your state program confirms eligibility. Solis Mammography says eligible people may qualify for its Value Screening Program. Nonprofit hospitals must have a written financial assistance policy, and HRSA-funded health centers charge on a sliding fee scale based on income.',
  },
  {
    question: 'What is the difference between a screening and a diagnostic mammogram?',
    answer:
      'A screening mammogram looks for breast cancer in people with no breast symptoms. A diagnostic mammogram is used after a lump or another sign is found, such as breast pain, thickened skin, nipple discharge, or a change in breast size or shape, or to follow up an abnormal screening result. Diagnostic exams take more images, generally need a clinician\'s order and are billed under different codes, so they are priced separately and are not free preventive care. Medicare, for example, charges 20% of the approved amount after the Part B deductible for a diagnostic mammogram. If you have a symptom, book a diagnostic exam rather than a screening slot.',
  },
  {
    question: 'Is a 3D mammogram worth paying extra for?',
    answer:
      'That is a decision to make with your clinician. The USPSTF\'s 2024 recommendation treats both standard digital mammography and digital breast tomosynthesis (3D) as effective screening options, so 3D is not required to follow it. 3D screening is billed with an add-on code (77063) on top of the standard screening code (77067), but in the prices we found 3D did not always cost more: Memorial Healthcare System lists its self-pay 3D screening at $99. Ask whether a quote includes 3D and what the price is without it.',
  },
  {
    question: 'Does Medicare cover mammograms?',
    answer:
      'Yes. Medicare Part B covers a screening mammogram once every 12 months for women 40 and older, plus one baseline mammogram between ages 35 and 39, and you pay nothing for the screening if the provider accepts assignment. Diagnostic mammograms are covered when medically necessary, but you pay 20% of the Medicare-approved amount and the Part B deductible applies.',
  },
  {
    question: 'I was told I have dense breasts. Do I need an ultrasound or MRI?',
    answer:
      'Ask your clinician. Since September 10, 2024, FDA rules require mammography facilities to tell you whether your breast tissue is dense, that dense tissue can make cancer harder to find on a mammogram and raises the risk of breast cancer, and to suggest you talk with your provider about whether other tests could help. The USPSTF found the evidence insufficient to recommend for or against routine supplemental ultrasound or MRI after a normal mammogram, and coverage varies by plan and state. If you pay cash, breast ultrasound was $160 self-pay at Memorial Healthcare System and $93 to $444 for one breast across MDsave\'s national listings; quote breast MRI (77049) separately.',
  },
  {
    question: 'Do I need a doctor\'s order for a mammogram?',
    answer:
      'It depends on the facility. Solis Mammography says you do not need a doctor\'s order to schedule a screening mammogram at most of its locations, but Memorial Healthcare System says scheduling a mammogram requires a prescription, and Green Imaging says most of its exams require a signed physician order. Diagnostic mammograms generally require a clinician\'s order. Federal rules require the facility to send you a plain-language summary of your results within 30 days, but you still need a clinician to act on an abnormal result, so line one up before you book.',
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
  ...(PRICES_VERIFIED ? {} : { robots: NOINDEX_FOLLOW }),
};

const td = 'border border-gray-300 px-4 py-3';
const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const srcLink = 'text-blue-600 hover:underline';

function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-link-purpose="source" className={srcLink}>
      {children}
    </a>
  );
}

export default function MammogramCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mammogram Cost Without Insurance: Screening, 3D and Free Options in 2026',
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
      { '@type': 'ListItem', position: 3, name: 'Mammogram Cost Without Insurance', item: PAGE_URL },
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
              <span className="text-gray-900">Mammogram Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/imaging" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-Pay Imaging Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Imaging &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mammogram Cost Without Insurance: Screening, 3D and Free Options in 2026
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What you pay for a mammogram depends less on the X-ray itself than on how it is
              billed: screening or diagnostic, 2D or 3D, and whether you qualify for a program that
              pays for it. Here is how to find a $0 route first, what published cash prices look
              like, and how to get an honest written quote.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> many people without insurance can get a screening
                mammogram for <strong>$0</strong> through the CDC&apos;s National Breast and Cervical
                Cancer Early Detection Program (CDC criteria: uninsured or underinsured women aged
                40-64 with income at or below 250% of the federal poverty level; your state program
                confirms eligibility) or Medicare (a yearly screening from age 40 when
                the provider accepts assignment). Paying cash, the published self-pay screening
                prices we found ran <strong>$99 to $559</strong>: $99 for a 3D screening at South
                Florida&apos;s Memorial Healthcare System, from $125 at Green Imaging, from about $140
                through RadiologyAssist, and $191 to $559 across MDsave&apos;s national 3D listings. A{' '}
                <strong>diagnostic mammogram</strong> costs more ($235 at Memorial; $239 to $475 for a
                3D exam of both breasts on MDsave in the metros we sampled), and a{' '}
                <strong>breast ultrasound</strong> ran $160 at Memorial and $93 to $444 per breast on
                MDsave. The cheapest legitimate route is a free program if you qualify; if not,
                compare a published price with a written Good Faith Estimate from a local certified
                facility.
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-700">
              Prices checked {UPDATED_LABEL} &mdash; confirm with the provider
            </p>
            <p className="mt-1 text-sm text-gray-500">By VitalityScout research &bull; 12 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Route</th>
                    <th className={th}>Who it fits</th>
                    <th className={th}>What you pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>CDC screening program (NBCCEDP)</td>
                    <td className={td}>Uninsured or underinsured, ages 40-64, income at or below 250% of poverty</td>
                    <td className={td}>Free or low cost, including diagnostic follow-up</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Medicare Part B screening</td>
                    <td className={td}>Women 40 and older, once every 12 months</td>
                    <td className={td}>$0 if the provider accepts assignment</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>ACA-compliant plan, in network</td>
                    <td className={td}>Women over 40, every 1 to 2 years</td>
                    <td className={td}>No copay or coinsurance for the screening</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Hospital with a posted self-pay rate</td>
                    <td className={td}>No coverage; a nearby hospital publishes a flat cash price</td>
                    <td className={td}>$99 for a 3D screening at Memorial Healthcare System (South Florida); other hospitals vary</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Cash-pay network or marketplace</td>
                    <td className={td}>No coverage and not eligible for a program</td>
                    <td className={td}>From $125 (Green Imaging), from about $140 (RadiologyAssist), $191-$559 for 3D (MDsave)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Diagnostic mammogram</td>
                    <td className={td}>A lump, symptom, or callback after screening</td>
                    <td className={td}>$235 at Memorial; $239-$475 for 3D, both breasts (MDsave, sampled metros); Medicare 20% after the deductible</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Breast ultrasound</td>
                    <td className={td}>Dense tissue, a callback, or a clinician&apos;s order</td>
                    <td className={td}>$160 at Memorial; $93-$444 for one breast (MDsave, national)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">A screening slot fits if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You have no new lump, pain, discharge, or skin change</li>
                  <li>&bull; You are due for routine screening</li>
                  <li>&bull; You have checked the CDC program and Medicare first</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-red-700 mb-1">Ask for a diagnostic workup if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You feel a lump or notice any breast change</li>
                  <li>&bull; A screening mammogram called you back</li>
                  <li>&bull; A clinician has told you that you are at high risk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#screening-vs-diagnostic" className={srcLink}>1. Screening vs diagnostic: the split that sets your price</a></li>
              <li><a href="#cash-prices" className={srcLink}>2. Published cash prices, October 2026</a></li>
              <li><a href="#2d-vs-3d" className={srcLink}>3. 2D vs 3D mammograms</a></li>
              <li><a href="#what-gets-billed" className={srcLink}>4. What gets billed, and the codes to quote</a></li>
              <li><a href="#free-routes" className={srcLink}>5. Ways to pay $0 or less</a></li>
              <li><a href="#where-to-go" className={srcLink}>6. Where to get a self-pay mammogram</a></li>
              <li><a href="#dense-breasts" className={srcLink}>7. Dense breasts: ultrasound and MRI add-ons</a></li>
              <li><a href="#save" className={srcLink}>8. How to save</a></li>
              <li><a href="#red-flags" className={srcLink}>9. When to see a clinician, and red flags</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="screening-vs-diagnostic" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Screening vs Diagnostic: The Split That Sets Your Price</h2>

            <p className="text-gray-700 mb-4">
              A mammogram is an X-ray of the breast, but there are two kinds, and they are booked,
              billed and covered differently. The National Cancer Institute describes a
              <strong> screening mammogram</strong> as one used to look for breast cancer in people
              who have no signs or symptoms. A <strong>diagnostic mammogram</strong> is used after a
              lump or another sign has been found, such as breast pain, thickened skin, nipple
              discharge, or a change in breast size or shape, or to look more closely at something
              seen on a screening exam. Diagnostic exams take more images.
            </p>
            <p className="text-gray-700 mb-4">
              That distinction drives cost. Screening is the preventive service that federal rules
              make free under most private plans and Medicare. Diagnostic imaging is treated as
              medical care: it generally needs a clinician&apos;s order, it is billed under different
              procedure codes, and coverage rules that apply to screening do not automatically
              apply. Under Medicare, for example, a screening mammogram costs nothing when the
              provider accepts assignment, while a diagnostic mammogram costs 20% of the
              Medicare-approved amount after the Part B deductible. In cash prices, the gap shows up
              too: Memorial Healthcare System lists $99 for a self-pay 3D screening but $235 for a
              diagnostic mammogram.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Do not book a screening slot to save money if you have a symptom.</strong> A
                lump or other change needs a diagnostic workup, which may include extra views or an
                ultrasound. Booking a screening first can mean a callback, a second appointment and
                a second bill.
              </p>
            </div>

            <h2 id="cash-prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Cash Prices, October 2026</h2>

            <p className="text-gray-700 mb-4">
              Of the imaging chains we checked, Solis, RadNet and SimonMed do not post a base
              self-pay mammogram price, so the numbers below come from sources that do: one hospital
              system&apos;s self-pay list, two cash-pay imaging networks, and MDsave, a marketplace
              where you prepay a bundled price for a named facility. We checked each on{' '}
              {UPDATED_LABEL}. Some of these pages carry no date or may be older, and the MDsave
              figures are ranges across specific facilities in specific markets, so treat them as
              benchmarks, not a quote for your town.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Exam</th>
                    <th className={th}>Published self-pay prices we found</th>
                    <th className={th}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Screening, 2D (77067)</td>
                    <td className={td}>$172-$262 in Loganville, Georgia; $187-$358 across Florida listings</td>
                    <td className={td}><Src href="https://www.mdsave.com/procedures/2d-mammogram-screening/d786fcc5/georgia/atlanta-ga/30052">MDsave GA</Src>, <Src href="https://www.mdsave.com/procedures/2d-mammogram-screening/d786fcc5/florida">MDsave FL</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Screening, 3D (77067 + 77063)</td>
                    <td className={td}>$99 at Memorial Healthcare System; $191-$559 across MDsave national listings (MDsave average $320); $254 and $296 on two MDsave pages for a Solis center in Granbury, Texas</td>
                    <td className={td}><Src href="https://www.mhs.net/services/womens-services/womens-imaging/mammogram">Memorial</Src>, <Src href="https://www.mdsave.com/procedures/3d-mammogram-screening/d784fbc5">MDsave</Src>, <Src href="https://www.mdsave.com/p/solis-mammography-imaging-and-radiology-center">MDsave (Solis)</Src>, <Src href="https://www.mdsave.com/procedures/3d-mammogram-screening-tomosynthesis/d784fbc5/texas/mineral-wells-tx">MDsave TX</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Screening, 2D or 3D not stated</td>
                    <td className={td}>From $125 at Green Imaging; from about $140 through RadiologyAssist in Phoenix</td>
                    <td className={td}><Src href="https://greenimaging.net/mammogram/">Green Imaging</Src>, <Src href="https://radiologyassist.com/news/mammogram-cost-in-phoenix-az-for-self-pay-patients-starting-from-140/">RadiologyAssist</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Diagnostic, one breast</td>
                    <td className={td}>$175 at Green Imaging; $369 for a 3D exam at Solis in Granbury, Texas</td>
                    <td className={td}><Src href="https://greenimaging.net/mammogram/">Green Imaging</Src>, <Src href="https://www.mdsave.com/p/solis-mammography-imaging-and-radiology-center/3d-mammogram-diagnostic-unilateral/d78afdc865">MDsave (Solis)</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Diagnostic, both breasts</td>
                    <td className={td}>$200 at Green Imaging; $256-$385 for 2D in Silver Spring, Maryland; $239-$475 for 3D across New York, Tucson and Kansas City listings</td>
                    <td className={td}><Src href="https://greenimaging.net/mammogram/">Green Imaging</Src>, <Src href="https://www.mdsave.com/procedures/2d-mammogram-diagnostic-bilateral-2-breasts/d784fdc8/maryland/washington-dc/20904?page=0">MDsave MD</Src>, <Src href="https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/new-york/new-york-ny">MDsave NY</Src>, <Src href="https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/arizona/tucson-az/85755">MDsave AZ</Src>, <Src href="https://www.mdsave.com/procedures/3d-mammogram-diagnostic-bilateral/d785fdc4/missouri/kansas-city-mo">MDsave MO</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Diagnostic, type not stated</td>
                    <td className={td}>$235 at Memorial Healthcare System</td>
                    <td className={td}><Src href="https://www.mhs.net/services/womens-services/womens-imaging/mammogram">Memorial</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Breast ultrasound</td>
                    <td className={td}>$160 at Memorial; $93-$444 for one breast nationally on MDsave; $174-$316 (Dallas) and $298-$658 (Houston) for both breasts on MDsave</td>
                    <td className={td}><Src href="https://www.mhs.net/services/womens-services/womens-imaging/mammogram">Memorial</Src>, <Src href="https://www.mdsave.com/amp/procedures/ultrasound-breast-unilateral-1-breast/d785f9c9">MDsave</Src>, <Src href="https://www.mdsave.com/procedures/ultrasound-breast-bilateral-2-breasts/d584f5c8/texas/dallas-tx">MDsave Dallas</Src>, <Src href="https://www.mdsave.com/procedures/ultrasound-breast-bilateral-2-breasts/d584f5c8/texas/houston-tx">MDsave Houston</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Optional AI-assisted add-ons</td>
                    <td className={td}>$40 for RadNet&apos;s Enhanced Breast Cancer Detection, per several RadNet regional FAQ pages; $50 for SimonMed&apos;s Mammogram+</td>
                    <td className={td}><Src href="https://www.radnet.com/los-angeles/frequently-asked-radiology-questions">RadNet FAQ</Src>, <Src href="https://simonmed.com/patients/services/mammogram-plus/">SimonMed</Src></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>What the price includes matters as much as the number.</strong> MDsave says its
              listed prices are bundled to include the related fees, with no separate bills after
              the appointment, although{' '}
              <Src href="https://www.mdsave.com/p/advanced-radiology-pomona-square-imaging-and-radiology/3d-mammogram-screening-tomosynthesis/d282f8c96ada">at least one listing we saw</Src>{' '}
              itemizes a marketplace fee alongside the facility and radiologist fees. Green Imaging
              says its cash price is final, with no separate radiologist fee. For a hospital list
              price such as Memorial&apos;s, ask whether the radiologist&apos;s reading is billed
              separately. Whatever you are quoted, confirm it covers the radiologist&apos;s
              interpretation, and whether a same-day ultrasound or extra views would be billed
              separately.
            </p>

            <h2 id="2d-vs-3d" className="text-2xl font-bold text-gray-900 mt-12 mb-6">2D vs 3D Mammograms (Tomosynthesis)</h2>

            <p className="text-gray-700 mb-4">
              A standard digital mammogram takes flat images of each breast. Digital breast
              tomosynthesis, usually marketed as a 3D mammogram, takes multiple images from different
              angles that are assembled into thin slices. Some breast centers now offer 3D as their
              standard screening exam, so ask which one you are being booked for.
            </p>
            <p className="text-gray-700 mb-4">
              For billing, 3D screening is an add-on. The facility bills the standard screening code
              and adds a tomosynthesis code on top, so a self-pay quote for 3D may be higher than one
              for 2D at the same facility. In the published prices we found, though, 3D was not
              always the expensive option: Memorial Healthcare System lists its self-pay screening as
              a 3D exam at $99, while MDsave&apos;s 3D listings ran $191 to $559 nationally and its 2D
              listings ran $172 to $358 in the Georgia and Florida markets we sampled. Those ranges
              come from different facilities, so they do not tell you what 3D adds at any one
              center. Ask the facility for both numbers.
            </p>
            <p className="text-gray-700 mb-4">
              The U.S. Preventive Services Task Force&apos;s 2024 recommendation treats both standard
              digital mammography and tomosynthesis as effective screening options, so choosing 2D
              does not put you outside the recommendation. Whether 3D is worth any extra cost for you
              is a question for your clinician, particularly if you have dense breast tissue.
            </p>
            <p className="text-gray-700 mb-4">
              Watch for a separate kind of extra: optional AI-assisted reads. RadNet&apos;s regional FAQ
              pages list a $40 charge to add its Enhanced Breast Cancer Detection (EBCD) to a
              mammogram. What those pages say about coverage differs by region: some name the
              medical groups that cover EBCD, while another RadNet FAQ says insurance is currently
              not covering the cost. SimonMed says AI is already part of its 3D mammograms at no
              added cost, and lists its Mammogram+ as a $50 self-pay add-on to a screening
              mammogram that is not yet covered by insurance. Neither add-on is needed for a
              standard screening exam; if you are offered one, ask your clinician whether it would
              change anything for you before you pay.
            </p>

            <h2 id="what-gets-billed" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Gets Billed, and the Codes to Quote</h2>

            <p className="text-gray-700 mb-4">
              When you ask for a cash price, use the procedure code. It stops a front desk from
              quoting the wrong exam, and it is how prices appear in hospital price-transparency
              files. You can look up any of these codes in the{' '}
              <Src href="https://www.cms.gov/medicare/physician-fee-schedule/search">CMS Physician Fee Schedule tool</Src>.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Exam</th>
                    <th className={th}>Code</th>
                    <th className={th}>What to ask</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Screening mammogram, both breasts</td>
                    <td className={td}>77067</td>
                    <td className={td}>Is the radiologist&apos;s reading included in the quote?</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>3D (tomosynthesis) screening add-on</td>
                    <td className={td}>77063</td>
                    <td className={td}>Is 3D included, or charged on top? What is the 2D-only price?</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Diagnostic mammogram, one or both breasts</td>
                    <td className={td}>77065 / 77066</td>
                    <td className={td}>What if the radiologist adds views or an ultrasound the same day?</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Breast ultrasound, complete or limited</td>
                    <td className={td}>76641 / 76642</td>
                    <td className={td}>Is it one breast or both? Is it quoted separately?</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Breast MRI with and without contrast, both breasts</td>
                    <td className={td}>77049</td>
                    <td className={td}>Does the price include contrast and the radiologist&apos;s reading?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Hospitals are required by CMS to publish their standard charges, including discounted
              cash prices, in a machine-readable file, along with a consumer-friendly list or price
              estimator for shoppable services. Searching a hospital&apos;s file for 77067 gives you a
              benchmark to hold against a freestanding center&apos;s quote. Some hospitals also post
              a flat self-pay price on their website, as Memorial Healthcare System does.
            </p>

            <h2 id="free-routes" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ways to Pay $0 or Less</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. The CDC&apos;s National Breast and Cervical Cancer Early Detection Program</h3>
            <p className="text-gray-700 mb-4">
              The NBCCEDP funds free or low-cost breast and cervical cancer screening through
              programs in every state, Washington, DC, U.S. territories and some tribes and tribal
              organizations. The CDC&apos;s general eligibility for breast screening is: no insurance,
              or insurance that does not cover screening or leaves costs you cannot afford; income
              at or below 250% of the federal poverty level; and age 40-64. Programs also pay for
              diagnostic follow-up when a screening result is abnormal, and under the Breast and
              Cervical Cancer Prevention and Treatment Act of 2000, states can offer Medicaid
              coverage for treatment to women diagnosed through the program. Each state sets its own
              details, and funding and program rules can change, so contact your state program even
              if you are near a cutoff.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Medicare</h3>
            <p className="text-gray-700 mb-4">
              Medicare Part B covers a screening mammogram once every 12 months for women 40 and
              older, plus one baseline mammogram between 35 and 39. You pay nothing for the
              screening if the doctor or other provider accepts assignment. Diagnostic mammograms
              are covered when medically necessary, with 20% coinsurance after the Part B deductible.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. ACA-compliant private plans</h3>
            <p className="text-gray-700 mb-4">
              HealthCare.gov lists mammography screening every 1 to 2 years for women over 40 among
              the preventive services that all Marketplace plans and many other private plans must
              cover without a copay or coinsurance, even before you meet your deductible. That
              applies only when you use an in-network provider, and grandfathered plans are exempt.
              The USPSTF&apos;s 2024 recommendation is biennial screening for women aged 40 to 74 at
              average risk.
            </p>
            <p className="text-gray-700 mb-4">
              Follow-up imaging is where insured people still get bills. HRSA&apos;s Women&apos;s
              Preventive Services Guidelines, which set part of what ACA-compliant plans must cover
              for women, say that when additional imaging such as MRI, ultrasound or mammography,
              and pathology evaluation, are indicated to complete the screening process, those
              services are also recommended. When that applies depends on your plan and plan year,
              and imaging billed as diagnostic can still carry cost sharing, so ask your insurer
              before a callback appointment how the follow-up will be billed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Facility discounts, financial assistance and health centers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Solis Mammography</strong> says every center offers self-pay and that eligible people may qualify for its Value Screening Program. Ask about eligibility when you request a quote.</li>
              <li><strong>Nonprofit hospitals</strong> must have a written financial assistance policy under IRS section 501(r), and must limit what they charge eligible patients for emergency or other medically necessary care to no more than the amounts generally billed to insured patients. Ask for the application before you are billed.</li>
              <li><strong>HRSA-funded community health centers</strong> charge on a sliding fee scale based on income. A clinician there can examine you, order a diagnostic exam if you need one, and point you to local screening programs.</li>
              <li><strong>Mobile mammography.</strong> Some hospitals and state programs run mobile units at community events. Federal MQSA rules apply to mobile units as well, so ask whether the unit is certified and who will receive your results.</li>
            </ul>

            <h2 id="where-to-go" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where to Get a Self-Pay Mammogram</h2>

            <p className="text-gray-700 mb-4">
              If no program covers you, compare at least two kinds of facility: one that publishes a
              price (a hospital self-pay list, a cash-pay network or a marketplace listing) and a
              dedicated breast center or imaging chain near you that quotes on request. A published
              price gives you a benchmark; the local quote tells you what you will actually pay.
              Whichever you choose, make sure the facility is certified under the federal Mammography
              Quality Standards Act (MQSA), which the FDA requires of every mammography facility.
            </p>
            <p className="text-gray-700 mb-4">
              Order rules differ by facility. Solis says you do not need a doctor&apos;s order to
              schedule a screening mammogram at most of its locations, while diagnostic exams
              require one. Memorial Healthcare System says scheduling a mammogram requires a
              prescription, and Green Imaging says most of its exams require a signed physician
              order, so ask before you book. MQSA rules require the facility to send you a plain-language summary of
              your results within 30 days, but an abnormal result still needs a clinician to arrange
              follow-up, so know who that will be before you book.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Option</th>
                    <th className={th}>Type</th>
                    <th className={th}>Published self-pay price</th>
                    <th className={th}>How to confirm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Memorial Healthcare System</td>
                    <td className={td}>South Florida hospital system</td>
                    <td className={td}>3D screening $99; diagnostic $235; breast ultrasound $160</td>
                    <td className={td}>Use Memorial&apos;s price tool or call; a prescription is required to schedule; confirm the location and what the price includes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Green Imaging</td>
                    <td className={td}>Cash-pay imaging network</td>
                    <td className={td}>From $125; diagnostic $175 one breast, $200 both</td>
                    <td className={td}>Request a quote for a named partner center; the page may not be current</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>RadiologyAssist</td>
                    <td className={td}>Cash-pay booking network</td>
                    <td className={td}>From about $140 (Phoenix, March 2026)</td>
                    <td className={td}>Request a flat quote for a named center; ask when payment is due</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>MDsave</td>
                    <td className={td}>Prepaid marketplace</td>
                    <td className={td}>3D screening $191-$559 nationally; 2D $172-$358 in sampled markets</td>
                    <td className={td}>Check the named facility, any marketplace fee, and the refund terms</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Solis Mammography</td>
                    <td className={td}>Dedicated breast-imaging centers</td>
                    <td className={td}>No published list; MDsave shows its Granbury, Texas center at $254-$296 for 3D screening</td>
                    <td className={td}>Call or email Solis for the self-pay cost; ask about the Value Screening Program</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>RadNet</td>
                    <td className={td}>Outpatient imaging centers</td>
                    <td className={td}>No base price posted; optional EBCD add-on $40</td>
                    <td className={td}>Ask for a self-pay Good Faith Estimate when scheduling</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>SimonMed Imaging</td>
                    <td className={td}>Outpatient imaging centers</td>
                    <td className={td}>Cash price on request; optional Mammogram+ add-on $50</td>
                    <td className={td}>Request a pre-visit estimate by phone, chat or email</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Local hospital outpatient department</td>
                    <td className={td}>Hospital radiology</td>
                    <td className={td}>Varies widely by hospital</td>
                    <td className={td}>Search the hospital&apos;s price-transparency file for 77067; ask about financial assistance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              For how cash-pay imaging centers and booking networks price other scans, see our{' '}
              <Link href="/imaging" className={srcLink}>cash-pay imaging hub</Link> and the{' '}
              <Link href="/guides/mri-cost-without-insurance" className={srcLink}>MRI cost without insurance guide</Link>.
              If you are also due for colorectal screening, the{' '}
              <Link href="/guides/colonoscopy-cost-without-insurance" className={srcLink}>colonoscopy cost guide</Link>{' '}
              covers how that preventive test is priced and covered.
            </p>
          </div>

          <BrandCtaGrid
            title="Check a free program, then compare a published price with a written quote"
            intro="Start with the CDC program or a health center if your income may qualify. Otherwise compare a network or marketplace price with a written quote from a breast center or imaging chain that names 2D or 3D, the radiologist read and any add-on."
            brands={MAMMOGRAM_OPTIONS}
            hubHref="/imaging"
            hubLabel="Compare cash-pay imaging →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="dense-breasts" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dense Breasts: Ultrasound and MRI Add-Ons</h2>

            <p className="text-gray-700 mb-4">
              Since September 10, 2024, amended FDA mammography rules require every facility to tell
              you whether your breast tissue is dense or not dense. If it is dense, the notice must
              explain that dense tissue can make breast cancer harder to find on a mammogram and
              raises the risk of developing breast cancer, and suggest you talk with your provider
              about whether other imaging tests could help. If your notice says dense, the next
              question is usually what extra imaging would cost.
            </p>
            <p className="text-gray-700 mb-4">
              The evidence is unsettled. The USPSTF concluded in 2024 that current evidence is
              insufficient to weigh the benefits and harms of supplemental screening with breast
              ultrasound or MRI for people with dense breasts whose mammogram is normal. That is
              not a recommendation against it, but it means coverage for supplemental imaging varies
              by plan and by state. If you pay cash, breast ultrasound was $160 self-pay at Memorial
              Healthcare System and $93 to $444 for one breast across MDsave&apos;s national listings;
              both-breast listings ran $174 to $316 in Dallas and $298 to $658 in Houston. Quote breast
              MRI (77049) separately. Our{' '}
              <Link href="/guides/ultrasound-cost-without-insurance" className={srcLink}>ultrasound cost guide</Link>{' '}
              covers how cash ultrasound pricing works. Decide on supplemental imaging with a
              clinician who knows your history, because extra imaging can also lead to more
              follow-up tests and biopsies.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on a Mammogram</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Check eligibility before you pay.</strong> The CDC program, Medicare, and an in-network ACA plan can each bring a screening to $0.</li>
              <li><strong>Start from a published price.</strong> A posted rate such as Memorial&apos;s $99 3D screening, Green Imaging&apos;s $125 starting price or RadiologyAssist&apos;s roughly $140 gives you a number to hold a local quote against.</li>
              <li><strong>Get a Good Faith Estimate.</strong> If you are uninsured or not using insurance and schedule at least three business days ahead, the provider must give you a written estimate. If the final bill is at least $400 above it, you can dispute it through the CMS process.</li>
              <li><strong>Quote by code.</strong> Ask for 77067 alone and with the 77063 add-on so you can see what 3D adds at that facility.</li>
              <li><strong>Ask what is included.</strong> Confirm that the radiologist&apos;s reading is in the price, and what happens if you are asked for extra views or an ultrasound.</li>
              <li><strong>Skip add-ons you have not discussed.</strong> Optional AI-assisted reads, such as RadNet&apos;s $40 EBCD or SimonMed&apos;s $50 Mammogram+, are extra charges; SimonMed says Mammogram+ is not yet covered by insurance, and RadNet&apos;s coverage notes for EBCD vary by region.</li>
              <li><strong>Read marketplace terms.</strong> MDsave&apos;s prices are prepaid; check for a marketplace fee and confirm the refund terms if you end up not getting the exam.</li>
              <li><strong>Benchmark a hospital.</strong> Look up the hospital&apos;s posted cash price for 77067 and compare it with a freestanding center.</li>
              <li><strong>Send prior images.</strong> If you change facilities, ask to have earlier mammograms sent for comparison, which helps the radiologist read your new exam.</li>
              <li><strong>Use HSA or FSA funds.</strong> IRS Publication 502 counts X-rays for medical reasons as a medical expense. Confirm with your plan administrator and keep an itemized receipt.</li>
            </ul>

            <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to See a Clinician, and Red Flags</h2>

            <p className="text-gray-700 mb-4">
              Talk with a licensed clinician about when to start screening and how often, especially
              if you are under 40 or over 74. The USPSTF&apos;s average-risk recommendation does not
              apply to people with a known genetic mutation such as BRCA1 or BRCA2, a history of
              high-dose chest radiation at a young age, or a previous breast cancer or high-risk
              breast lesion. Those groups may need earlier or additional imaging, including MRI,
              which a clinician should plan.
            </p>
            <p className="text-gray-700 mb-4">
              See a clinician promptly, and ask for a diagnostic mammogram rather than a screening
              slot, if you notice any of the signs the National Cancer Institute lists as reasons
              for a diagnostic exam:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>A lump in the breast</li>
              <li>Breast pain</li>
              <li>Thickened skin on the breast</li>
              <li>Nipple discharge</li>
              <li>A change in breast size or shape</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Be wary of any facility that cannot tell you whether it is MQSA-certified, will not put
              a self-pay price in writing, or steers you to a cheaper screening slot when you have a
              symptom. A normal screening mammogram does not rule out a lump you can feel; get any
              change examined even after a recent normal result. Elective imaging is not a substitute
              either: as our{' '}
              <Link href="/guides/full-body-mri-scan-cost" className={srcLink}>full-body MRI cost guide</Link>{' '}
              explains, a whole-body screening MRI does not replace the screenings your clinician
              recommends, including mammography.
            </p>
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
              When to start screening, how often to screen, whether 3D, an AI-assisted add-on or
              supplemental ultrasound or MRI makes sense, and how to follow up an abnormal result are
              decisions to make with a licensed clinician who knows your history. A screening
              mammogram is not the right test for a lump or other breast change. Prices on this page
              were checked on {UPDATED_LABEL} from provider, hospital and marketplace pages, several
              of which are undated; self-pay prices vary by location, facility, exam type and over
              time, and a price listed for one center or market may not apply to another, so always
              get a current written quote. Coverage rules for Medicare, ACA plans and state screening
              programs can change and depend on your plan, state and eligibility. The links to
              Memorial Healthcare System, MDsave, Green Imaging, RadiologyAssist, Solis Mammography,
              RadNet, SimonMed Imaging and the other options on this page are direct links, not paid
              or affiliate links, and listing a provider is not an endorsement or a ranking.
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

        <RelatedGuides items={getRelatedGuides('/guides/mammogram-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Imaging Price Cheat Sheet"
            description="How to quote a scan by code, request a Good Faith Estimate, and find free screening programs."
            source="guide_mammogram_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
