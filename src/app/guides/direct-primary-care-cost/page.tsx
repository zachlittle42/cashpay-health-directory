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
import type { RelatedGuideItem } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/direct-primary-care-cost';
const PAGE_TITLE = 'Direct Primary Care Cost (2026): DPC Membership Prices';
const PAGE_DESCRIPTION =
  'Direct primary care usually costs $50-$100 a month for adults, per the AAFP. Compare real DPC practice fees, MDVIP, One Medical and the 2026 HSA rules.';
const PRICES_CHECKED = 'October 18, 2026';

const MEMBERSHIP_BRANDS = [
  {
    name: 'DPC Frontier Mapper',
    providerId: 'dpc-frontier-mapper',
    category: 'primary_care',
    price: 'Free directory',
    blurb:
      'A searchable map of direct primary care practices. Listings show practice-reported fees and commitments, such as $200 a month (or $2,200 a year) with a 3-month minimum at one San Francisco practice. Confirm any listed fee with the practice.',
    siteUrl: 'https://mapper.dpcfrontier.com/',
    siteLabel: 'Search the map →',
  },
  {
    name: 'Amazon One Medical',
    providerId: 'amazon-one-medical',
    category: 'primary_care',
    price: '$99/yr Prime; $199/yr',
    blurb:
      'Membership is $9 a month or $99 a year with Prime and $199 a year without. It covers the app and on-demand virtual care; One Medical bills insurance for in-office and scheduled remote visits. This is not direct primary care.',
    siteUrl: 'https://health.amazon.com/prime',
    profileHref: '/providers/amazon-one-medical-on-demand',
    profileLabel: 'One Medical profile',
  },
  {
    name: 'Lemonaid Health',
    providerId: 'lemonaid-health',
    category: 'primary_care',
    price: '$99/mo',
    blurb:
      'Virtual primary care membership at $99 a month for one person or from $178 a month for a family plan. Lemonaid lists no additional fees or co-pays for visits; medications are billed separately.',
    siteUrl: 'https://www.lemonaidhealth.com/services/primary-care',
    profileHref: '/providers/lemonaid-health-primary-care',
    profileLabel: 'Lemonaid profile',
  },
  {
    name: 'PlushCare',
    providerId: 'plushcare-primary-care',
    category: 'primary_care',
    price: '$19.99/mo + visits',
    blurb:
      'Membership is $19.99 a month or $149 a year, and PlushCare advertises the first month free. It does not replace the visit fee: an appointment is a flat $129 if you have no insurance.',
    siteUrl: 'https://plushcare.com/membership',
    profileHref: '/providers/plushcare-primary-care',
    profileLabel: 'PlushCare profile',
  },
  {
    name: 'Sesame Plus',
    providerId: 'sesame-primary-care',
    category: 'primary_care',
    price: '$10.99/mo or $99/yr',
    blurb:
      'A discount membership on a cash-pay visit marketplace: $10 off virtual, primary care and in-person specialty visits, plus one free lab test a year under Sesame’s terms (the free lab is not offered in Washington State). You still pay each visit.',
    siteUrl: 'https://sesamecare.com/join/membership',
    profileHref: '/providers/sesame-primary-care',
    profileLabel: 'Sesame profile',
  },
  {
    name: 'MDVIP',
    providerId: 'mdvip',
    category: 'primary_care',
    price: '~$2,500-$5,000/yr',
    blurb:
      'Concierge medicine, not DPC. MDVIP says memberships generally run $2,500-$5,000 a year depending on location, and affiliated doctors still bill your insurance for routine care such as sick visits.',
    siteUrl: 'https://www.mdvip.com/patients/membership-overview',
  },
];

const RELATED: RelatedGuideItem[] = [
  { href: '/primary_care', label: 'Primary care hub', blurb: 'Cash-pay primary care, memberships and telehealth visits.' },
  { href: '/guides/cash-pay-telehealth-visits', label: 'Cash-pay telehealth visits', blurb: 'What a self-pay virtual visit costs across major services.' },
  { href: '/guides/urgent-care-cost-without-insurance', label: 'Urgent care cost', blurb: 'Self-pay urgent care visit prices and what drives the bill.' },
  { href: '/guides/sesame-vs-mdlive-teladoc-cost', label: 'Sesame vs MDLive vs Teladoc', blurb: 'Visit prices and memberships compared.' },
  { href: '/guides/blood-test-without-a-doctor', label: 'Blood test without a doctor', blurb: 'How self-ordered lab testing works and where it is restricted.' },
];

const SOURCES = [
  { label: 'IRS — Treasury, IRS provide guidance on new HSA tax benefits under the One, Big, Beautiful Bill', url: 'https://www.irs.gov/newsroom/treasury-irs-provide-guidance-on-new-tax-benefits-for-health-savings-account-participants-under-the-one-big-beautiful-bill' },
  { label: 'IRS — Notice 2026-5 (direct primary care service arrangements, $150/$300 monthly limits)', url: 'https://www.irs.gov/pub/irs-drop/n-26-05.pdf' },
  { label: 'IRS — Rev. Proc. 2026-24 (2027 DPC limits)', url: 'https://www.irs.gov/pub/irs-drop/rp-26-24.pdf' },
  { label: 'Congress.gov — H.R. 1, 119th Congress (became Public Law 119-21 on July 4, 2025)', url: 'https://www.congress.gov/bill/119th-congress/house-bill/1/all-info' },
  { label: 'WTW — IRS issues guidance on HSA provisions in the One Big Beautiful Bill Act', url: 'https://www.wtwco.com/en-us/insights/2025/12/irs-issues-guidance-on-hsa-provisions-in-the-one-big-beautiful-bill-act' },
  { label: 'Sequoia — IRS Notice 2026-5: key HSA updates for employers', url: 'https://www.sequoia.com/2026/01/irs-notice-2026-5-key-hsa-updates-for-employers/' },
  { label: 'HealthCare.gov — Health Savings Accounts work with many Marketplace plans', url: 'https://www.healthcare.gov/hsa-options/' },
  { label: 'HealthCare.gov — Health coverage exemptions, forms and how to apply', url: 'https://www.healthcare.gov/health-coverage-exemptions/forms-how-to-apply/' },
  { label: 'CMS — Guidance on hardship exemptions (catastrophic plan eligibility)', url: 'https://www.cms.gov/files/document/guidance-hardship-exemptions.pdf' },
  { label: 'AAFP — Direct Primary Care model for family physicians', url: 'https://www.aafp.org/practice-operations/practice-and-payment-models/direct-primary-care' },
  { label: 'AAFP — 2024 Direct Primary Care data brief (typical monthly fees for adults and children)', url: 'https://www.aafp.org/dam/AAFP/documents/practice_management/direct-primary-care-2024-data-brief.pdf' },
  { label: 'AAFP — Direct Primary Care policy (definition)', url: 'https://www.aafp.org/about/policies/all/direct-primary-care.html' },
  { label: 'AAFP — Direct Primary Care advocacy', url: 'https://www.aafp.org/advocacy/advocacy-topics/physician-payment/dpc.html' },
  { label: 'McDermott Will & Emery — Direct Primary Care Arrangements: 50-State Survey', url: 'https://www.mcdermottlaw.com/resource/direct-primary-care-arrangements-50-state-survey/' },
  { label: 'DPC Frontier — Direct primary care mapper', url: 'https://mapper.dpcfrontier.com/' },
  { label: 'DPC Frontier mapper — Florida Direct Primary Care, Saint Augustine, FL', url: 'https://mapper.dpcfrontier.com/practice/zyjorjxivtwu' },
  { label: 'DPC Frontier mapper — Direct Primary Care of Oklahoma, Oklahoma City', url: 'https://mapper.dpcfrontier.com/practice/mmcwfcusykyc' },
  { label: 'DPC Frontier mapper — Birmingham Direct Primary Care, Birmingham, AL', url: 'https://mapper.dpcfrontier.com/practice/onsuljstiwbu' },
  { label: 'DPC Frontier mapper — Promise Direct Primary Care, Nashville, TN', url: 'https://mapper.dpcfrontier.com/practice/mdgdlyimgnvb' },
  { label: 'DPC Frontier mapper — Direct Care of Texas, Austin, TX', url: 'https://mapper.dpcfrontier.com/practice/lyaktumghuma' },
  { label: 'DPC Frontier mapper — Castro Direct Primary Care, San Francisco, CA', url: 'https://mapper.dpcfrontier.com/practice/vwlyitxsrhsf' },
  { label: 'DPC Frontier mapper — Winter Pine Direct Primary Care, Brunswick, ME', url: 'https://mapper.dpcfrontier.com/practice/vilbzqcdfthr' },
  { label: 'Atlas MD Wichita — Monthly membership fees', url: 'https://atlas.md/wichita/our-fees/' },
  { label: 'Atlas MD Wichita — Membership benefits', url: 'https://atlas.md/wichita/benefits/' },
  { label: 'Atlas MD Wichita — FAQ (wholesale labs, imaging and medications)', url: 'https://atlas.md/wichita/faq/' },
  { label: 'Plum Health DPC — Pricing changes for 2022', url: 'https://www.plumhealthdpc.com/blog/2022/1/28/pricing-changes-for-2022' },
  { label: 'North Carolina General Assembly document — 2020 DPC member lab price sheet', url: 'https://webservices.ncleg.gov/ViewDocSiteFile/20045' },
  { label: 'UCHealth — Direct laboratory services price list', url: 'https://www.uchealth.org/services/laboratory/list-of-direct-laboratory-services/' },
  { label: 'MDVIP — Membership overview', url: 'https://www.mdvip.com/patients/membership-overview' },
  { label: 'MDVIP — Employers FAQ (individual annual fee generally $2,500-$5,000 by location)', url: 'https://www.mdvip.com/employers/faq' },
  { label: 'MDVIP — Dr. Jeffrey Herman, Milford, MI (practice page with listed annual fee)', url: 'https://www.mdvip.com/doctors/jeffreyhermando' },
  { label: 'MDVIP — How insurance works with concierge medicine practices', url: 'https://www.mdvip.com/about-mdvip/blog/how-insurance-works-concierge-medicine-practices' },
  { label: 'Amazon — One Medical membership for Prime members', url: 'https://health.amazon.com/prime' },
  { label: 'One Medical — Frequently asked questions (membership fee and insurance billing)', url: 'https://www.onemedical.com/faq/' },
  { label: 'Amazon One Medical — Help and FAQ', url: 'https://health.amazon.com/onemedical/help' },
  { label: 'Lemonaid Health — Online primary care membership', url: 'https://www.lemonaidhealth.com/services/primary-care' },
  { label: 'PlushCare — Membership', url: 'https://plushcare.com/membership' },
  { label: 'PlushCare support — How much does an appointment cost?', url: 'https://support.plushcare.com/hc/en-us/articles/360021674653-How-much-does-an-appointment-with-a-PlushCare-doctor-cost' },
  { label: 'Sesame — Sesame Plus membership', url: 'https://sesamecare.com/join/membership' },
  { label: 'Sesame — Terms of Service (membership benefits)', url: 'https://sesamecare.com/terms-of-service' },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does direct primary care cost per month?',
    answer:
      'The AAFP says monthly membership fees in direct primary care practices typically range from $50 to $100 for adults; its 2024 data brief applies that range to adults 65 or younger and puts typical child fees at $20 to $49. Published fees we checked run from $50 a month for adults 20 to 44 at Atlas MD in Wichita to $200 a month at a San Francisco practice listed on the DPC Frontier mapper. Many practices price by age: Atlas MD charges $75 for ages 45 to 64 and $100 for 65 and older, and children can cost as little as $10 a month when a parent is a member. Some practices also charge an enrollment fee. Confirm the current fee with the practice before you sign up.',
  },
  {
    question: 'Can I use my HSA to pay for direct primary care in 2026?',
    answer:
      'Yes, if the arrangement qualifies. Under the 2025 reconciliation law (H.R. 1, Public Law 119-21, signed July 4, 2025) and IRS Notice 2026-5, starting January 1, 2026, an otherwise HSA-eligible person can be enrolled in a direct primary care service arrangement, keep contributing to an HSA, and pay the periodic fees from the HSA tax-free. The fee must be fixed and no more than $150 a month for one person or $300 a month if the arrangement covers more than one person. Fees over the cap can still be reimbursed from an HSA, but they make you ineligible to contribute while you are enrolled. You still need HSA-eligible coverage, such as a high-deductible plan. Ask a tax adviser about your situation.',
  },
  {
    question: 'Do I still need health insurance if I join a DPC practice?',
    answer:
      'Yes. A DPC fee covers primary care only, so it does not pay for emergency room visits, hospital stays, specialists or surgery. The AAFP notes that DPC practices often suggest patients get a high-deductible, wrap-around policy to cover emergencies. Starting in 2026, bronze and catastrophic plans available through an Exchange are treated as HSA-compatible, and people under 30 can buy a catastrophic plan without an exemption.',
  },
  {
    question: 'What is the difference between direct primary care and concierge medicine?',
    answer:
      'A DPC practice charges a periodic fee and, under the AAFP definition, does not bill insurance companies or government programs on a fee-for-service basis. Concierge practices such as MDVIP charge an annual fee and still bill insurance. MDVIP says its memberships generally run $2,500 to $5,000 a year, the fee covers a wellness program and preventive services not typically reimbursed by insurance, and affiliated doctors bill your in-network insurance for routine care such as sick visits, including copays and deductibles.',
  },
  {
    question: 'Is Amazon One Medical direct primary care?',
    answer:
      'No. One Medical sells a membership ($9 a month or $99 a year for Prime members, $199 a year without Prime) that covers its app and on-demand virtual care, but in-office and scheduled remote visits are billed to your insurance or paid out of pocket. Without a membership, One Medical pay-per-visit care is $29 for a message visit or $49 for video. A DPC practice, by contrast, does not bill insurance for the primary care its fee covers.',
  },
  {
    question: 'Is direct primary care worth the cost?',
    answer:
      'It depends on how often you need care and what the fee includes. As a rough comparison, five PlushCare visits at its $129 cash price cost $645, about the same as a year at a $50-a-month DPC tier ($600). DPC tends to make more sense if you see a doctor several times a year, manage a chronic condition, or would use member pricing on labs and medications. If you rarely need care, paying per visit may cost less. Either way, keep separate coverage for emergencies and hospital care.',
  },
  {
    question: 'What should I ask before joining a direct primary care practice?',
    answer:
      'Ask for the monthly fee for each person in your household, any enrollment fee, the minimum commitment, how to cancel and whether unused prepaid fees are refunded. Ask which labs and medications are included or sold at member prices, how after-hours contact works, and how referrals to specialists and imaging are handled. If you plan to use an HSA, ask whether the fee stays within the IRS $150 or $300 monthly limit and whether the practice bills anything outside the fixed fee.',
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

function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-link-purpose="source" className={srcLink}>
      {children}
    </a>
  );
}

export default function DirectPrimaryCareCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Direct Primary Care Cost in 2026: DPC Membership Fees, Concierge Care and HSA Rules',
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
      { '@type': 'ListItem', position: 3, name: 'Direct Primary Care Cost', item: PAGE_URL },
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
              <span className="text-gray-900">Direct Primary Care Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/primary_care" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Primary Care Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Local Services &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Direct Primary Care Cost in 2026: DPC Membership Fees, Concierge Care and HSA Rules
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Direct primary care (DPC) swaps copays and insurance billing for one flat monthly fee
              paid straight to your doctor&apos;s practice. Here is what practices actually charge, how
              DPC differs from concierge medicine and app-based memberships, what the fee leaves out,
              and how the new 2026 HSA rules apply.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> most adult DPC memberships cost{' '}
                <strong>about $50 to $100 a month</strong>, the typical range the American Academy of
                Family Physicians gives. Fees we checked ran from <strong>$50 a month</strong> (adults
                20 to 44 at Atlas MD in Wichita) to <strong>$200 a month</strong> (a San Francisco
                practice), and children can cost as little as $10 a month with an enrolled parent. The
                cheapest legitimate route is an age-priced local DPC practice paired with catastrophic
                or high-deductible coverage for emergencies and hospital care. Since January 1, 2026, a
                qualifying DPC fee of up to $150 a month for one person ($300 for more than one) can be
                paid from an HSA.
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
                <div className="font-bold text-green-600 mb-2">Direct primary care</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Typically $50-$100/mo per adult</li>
                  <li>&bull; Practice does not bill insurance</li>
                  <li>&bull; Visits included in the fee</li>
                  <li>&bull; Often member-priced labs and meds</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Concierge (e.g., MDVIP)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; About $2,500-$5,000/yr</li>
                  <li>&bull; Doctor still bills insurance</li>
                  <li>&bull; Fee covers wellness program</li>
                  <li>&bull; Copays and deductibles still apply</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">App membership</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; $99-$199/yr (One Medical)</li>
                  <li>&bull; $99/mo virtual care (Lemonaid)</li>
                  <li>&bull; Some bill insurance for visits</li>
                  <li>&bull; Check what the fee includes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">DPC may fit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You see a doctor several times a year</li>
                  <li>&bull; You want same-doctor access without copays</li>
                  <li>&bull; You will keep separate coverage for emergencies</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-1">Pay per visit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You rarely need care</li>
                  <li>&bull; No DPC practice near you fits your needs</li>
                  <li>&bull; You mainly need a quick virtual visit now and then</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-dpc" className="text-blue-600 hover:underline">1. What direct primary care is</a></li>
              <li><a href="#fees-by-age" className="text-blue-600 hover:underline">2. DPC fees by age: published examples</a></li>
              <li><a href="#compare-models" className="text-blue-600 hover:underline">3. DPC vs concierge vs app memberships</a></li>
              <li><a href="#not-included" className="text-blue-600 hover:underline">4. What DPC does not cover</a></li>
              <li><a href="#hsa" className="text-blue-600 hover:underline">5. HSA rules for DPC in 2026</a></li>
              <li><a href="#employer" className="text-blue-600 hover:underline">6. Employer-sponsored DPC</a></li>
              <li><a href="#vet" className="text-blue-600 hover:underline">7. How to find and vet a practice</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">8. How to save</a></li>
              <li><a href="#red-flags" className="text-blue-600 hover:underline">9. Red flags and when to see a clinician</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="what-is-dpc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Direct Primary Care Is</h2>

            <p className="text-gray-700 mb-4">
              The AAFP&apos;s commonly accepted definition of a DPC practice has three parts. The
              practice charges patients or their employers a periodic fee, usually monthly, for a
              contracted set of services. It does not bill insurance companies or government programs
              on a fee-for-service basis. And if it charges anything per visit, that charge is less
              than the monthly equivalent of the periodic fee (
              <Src href="https://www.aafp.org/about/policies/all/direct-primary-care.html">AAFP policy</Src>).
              The AAFP says the fee covers all or most primary care services, including clinical and
              laboratory services, consultative services, care coordination and comprehensive care
              management (
              <Src href="https://www.aafp.org/practice-operations/practice-and-payment-models/direct-primary-care">AAFP practice model</Src>).
            </p>

            <p className="text-gray-700 mb-4">
              In practice, that usually means you can book visits, message or call your doctor and get
              an annual physical without a copay. Atlas MD in Wichita, for example, lists unlimited
              access to your doctor, annual physicals, wholesale prices on medication and after-hours
              support as membership benefits (
              <Src href="https://atlas.md/wichita/benefits/">Atlas MD benefits</Src>), and says its
              direct arrangement lets it offer wholesale prices on lab tests, imaging and medications (
              <Src href="https://atlas.md/wichita/faq/">Atlas MD FAQ</Src>). There is no single DPC
              model, so what is included varies by practice.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What member lab pricing can look like:</strong> a 2020 member price sheet from
                a North Carolina DPC practice, filed in a{' '}
                <Src href="https://webservices.ncleg.gov/ViewDocSiteFile/20045">North Carolina General Assembly document</Src>,
                listed a hemoglobin A1c at $4, a CBC with differential at $5 and a lipid panel at $4.
                For comparison, UCHealth&apos;s{' '}
                <Src href="https://www.uchealth.org/services/laboratory/list-of-direct-laboratory-services/">direct-access lab menu</Src>{' '}
                lists a lipid panel at $32, a CBC with differential at $21 and an A1c at $26. The 2020
                sheet is dated; ask any practice for its current member price list.
              </p>
            </div>

            <h2 id="fees-by-age" className="text-2xl font-bold text-gray-900 mt-12 mb-6">DPC Monthly Fees by Age: Published Examples</h2>

            <p className="text-gray-700 mb-4">
              DPC prices are set practice by practice, and many charge more for older adults. The
              table below uses each practice&apos;s own fee page or its listing on the DPC Frontier
              mapper, where practices report their own fees. These are examples, not a national
              survey, and listings can lag behind a practice&apos;s current prices.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Practice (location)</th>
                    <th className={th}>Listed monthly fee</th>
                    <th className={th}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Atlas MD (Wichita, KS)</td>
                    <td className={td}>Ages 0-19: $10 (with a member parent); 20-44: $50; 45-64: $75; 65+: $100</td>
                    <td className={td}>Child rate requires at least one parent membership. <Src href="https://atlas.md/wichita/our-fees/">Fee page</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Florida Direct Primary Care (Saint Augustine, FL)</td>
                    <td className={td}>Ages 18-44: $60; 45-64: $80; 65+: $100</td>
                    <td className={td}>$0 enrollment fee listed. <Src href="https://mapper.dpcfrontier.com/practice/zyjorjxivtwu">Mapper listing</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Direct Primary Care of Oklahoma (Oklahoma City)</td>
                    <td className={td}>Adults 20-64: $79</td>
                    <td className={td}><Src href="https://mapper.dpcfrontier.com/practice/mmcwfcusykyc">Mapper listing</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Birmingham Direct Primary Care (Birmingham, AL)</td>
                    <td className={td}>Adult: $75</td>
                    <td className={td}><Src href="https://mapper.dpcfrontier.com/practice/onsuljstiwbu">Mapper listing</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Promise Direct Primary Care (Nashville, TN)</td>
                    <td className={td}>Individual: $90</td>
                    <td className={td}><Src href="https://mapper.dpcfrontier.com/practice/mdgdlyimgnvb">Mapper listing</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Direct Care of Texas (Austin, TX)</td>
                    <td className={td}>Adults of all ages: $99</td>
                    <td className={td}><Src href="https://mapper.dpcfrontier.com/practice/lyaktumghuma">Mapper listing</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Castro Direct Primary Care (San Francisco, CA)</td>
                    <td className={td}>$200</td>
                    <td className={td}>Annual option of $2,200 and a minimum 3-month commitment listed. <Src href="https://mapper.dpcfrontier.com/practice/vwlyitxsrhsf">Mapper listing</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Plum Health DPC (Detroit, MI)</td>
                    <td className={td}>Ages 0-17: $15; 18-39: $55; 40-64: $75; 65+: $89</td>
                    <td className={td}>From a price change effective March 1, 2022, the latest we found; some older Plum pages show lower fees. <Src href="https://www.plumhealthdpc.com/blog/2022/1/28/pricing-changes-for-2022">Plum announcement</Src></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> most of these adult fees fall inside the AAFP&apos;s typical
              $50-$100 range, with higher fees in expensive metros. The AAFP&apos;s{' '}
              <Src href="https://www.aafp.org/dam/AAFP/documents/practice_management/direct-primary-care-2024-data-brief.pdf">2024 DPC data brief</Src>{' '}
              applies that range to adults 65 or younger, puts typical child fees at $20 to $49 a
              month and family memberships at $100 or more. Age is the main driver within a
              practice, and children are often cheap when a parent is enrolled. Check one-time costs
              as well: Florida Direct Primary Care lists a $0 enrollment fee, while{' '}
              <Src href="https://mapper.dpcfrontier.com/practice/vilbzqcdfthr">Winter Pine Direct Primary Care</Src>{' '}
              in Brunswick, Maine, lists $100.
            </p>
          </div>

          <BrandCtaGrid
            title="Find a DPC practice, or compare membership-style alternatives"
            intro="The DPC Frontier mapper is a directory, not a provider. The other cards are memberships that are often compared with DPC but work differently. Check what each fee includes and the current price before you join."
            brands={MEMBERSHIP_BRANDS}
            hubHref="/primary_care"
            hubLabel="Compare cash-pay primary care →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="compare-models" className="text-2xl font-bold text-gray-900 mt-12 mb-6">DPC vs Concierge Medicine vs App Memberships</h2>

            <p className="text-gray-700 mb-4">
              &quot;Membership primary care&quot; covers several different products. The key questions
              are whether the practice also bills your insurance, and whether visits are included in
              the fee or charged on top.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Option</th>
                    <th className={th}>Listed fee</th>
                    <th className={th}>Bills insurance?</th>
                    <th className={th}>What the fee covers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Direct primary care practice</td>
                    <td className={td}>Typically $50-$100/mo (AAFP); examples above</td>
                    <td className={td}>No fee-for-service billing to insurers or government programs</td>
                    <td className={td}>All or most primary care; labs and medications often at member prices</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>MDVIP (concierge)</td>
                    <td className={td}>Generally $2,500-$5,000/yr, by location</td>
                    <td className={td}>Yes, for routine care such as sick visits</td>
                    <td className={td}>Annual wellness program and preventive services not typically covered by insurance</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Amazon One Medical membership</td>
                    <td className={td}>$9/mo or $99/yr with Prime; $199/yr without; family add-ons $6/mo or $66/yr each (Prime, up to 5)</td>
                    <td className={td}>Yes, for in-office and scheduled remote visits</td>
                    <td className={td}>App access and on-demand virtual care; drop-in labs are not covered by the fee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Lemonaid primary care</td>
                    <td className={td}>$99/mo; family from $178/mo</td>
                    <td className={td}>Membership lists no extra visit fees or co-pays</td>
                    <td className={td}>Unlimited virtual care; medications billed separately</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>PlushCare membership</td>
                    <td className={td}>$19.99/mo or $149/yr, plus $129 per visit without insurance</td>
                    <td className={td}>Insurance accepted; $129 flat fee without it</td>
                    <td className={td}>Membership perks; it does not include the visit fee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Sesame Plus</td>
                    <td className={td}>$10.99/mo or $99/yr</td>
                    <td className={td}>Cash-pay visit prices; membership is not insurance</td>
                    <td className={td}>$10 off visits and one free lab test a year; visits still paid separately</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Concierge medicine: MDVIP</h3>
            <p className="text-gray-700 mb-4">
              MDVIP says individual memberships generally run $2,500 to $5,000 a year depending on
              location, payable quarterly, semi-annually or annually (
              <Src href="https://www.mdvip.com/patients/membership-overview">MDVIP membership overview</Src>;{' '}
              <Src href="https://www.mdvip.com/employers/faq">MDVIP employers FAQ</Src>). Individual
              doctor pages can differ: one{' '}
              <Src href="https://www.mdvip.com/doctors/jeffreyhermando">Milford, Michigan, practice page</Src>{' '}
              lists $1,980 a year, so check the fee for the specific doctor. The fee pays for a personalized annual wellness program and preventive services not
              typically reimbursed by insurance, and is not itself reimbursable by insurance. Your
              MDVIP-affiliated doctor continues to bill your in-network insurance for routine care,
              including copays, coinsurance and deductibles for services like sick visits (
              <Src href="https://www.mdvip.com/about-mdvip/blog/how-insurance-works-concierge-medicine-practices">MDVIP on insurance</Src>).
              At $2,500 a year, the low end works out to about $208 a month, above the $150 IRS limit
              for a qualifying DPC arrangement described below. MDVIP says its fee may be reimbursable
              through an HSA or FSA; check with your plan administrator or tax adviser.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Amazon One Medical membership</h3>
            <p className="text-gray-700 mb-4">
              Amazon lists One Medical at $9 a month or $99 a year for Prime members and $199 a year
              for everyone else, and Prime members can add up to five family members at $6 a month or
              $66 a year each (<Src href="https://health.amazon.com/prime">Amazon One Medical</Src>).
              The membership pays for the app, on-demand virtual care and services such as referral
              management. According to One Medical&apos;s FAQ, in-office appointments and scheduled
              remote visits are billed to your insurance, with your usual copay, deductible or
              coinsurance, and drop-in lab services are not covered by the fee (
              <Src href="https://www.onemedical.com/faq/">One Medical FAQ</Src>). Without a membership,
              pay-per-visit care is $29 for a message visit or $49 for video. That makes it a
              different product from DPC, where the fee is meant to be the practice&apos;s payment
              for the primary care it covers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Telehealth primary care memberships</h3>
            <p className="text-gray-700 mb-4">
              Lemonaid&apos;s online primary care is the closest app-based match to DPC pricing: $99 a
              month for one person or from $178 a month for a family plan, with unlimited virtual care,
              no additional fees or co-pays, and a first appointment of about an hour. Medications are
              billed separately (
              <Src href="https://www.lemonaidhealth.com/services/primary-care">Lemonaid</Src>). It is
              virtual only, so it cannot replace a hands-on exam. PlushCare and Sesame sell discount
              memberships instead: PlushCare&apos;s $19.99 a month or $149 a year sits on top of a
              flat $129 visit fee if you have no insurance (
              <Src href="https://support.plushcare.com/hc/en-us/articles/360021674653-How-much-does-an-appointment-with-a-PlushCare-doctor-cost">PlushCare</Src>),
              and Sesame Plus at $10.99 a month or $99 a year takes $10 off each visit (
              <Src href="https://sesamecare.com/terms-of-service">Sesame terms</Src>). For posted
              per-visit prices across services, see our{' '}
              <Link href="/guides/cash-pay-telehealth-visits" className={srcLink}>cash-pay telehealth visits guide</Link>{' '}
              and the{' '}
              <Link href="/guides/sesame-vs-mdlive-teladoc-cost" className={srcLink}>Sesame vs MDLive vs Teladoc comparison</Link>.
            </p>

            <h2 id="not-included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What DPC Does Not Cover, and Why You Still Need Insurance</h2>

            <p className="text-gray-700 mb-4">
              DPC is primary care only. The fee does not pay for emergency room visits, hospital stays,
              specialist care, surgery or anything else outside the practice. The AAFP notes that some
              services are not covered by a retainer and that DPC practices often suggest a
              high-deductible, wrap-around policy to cover emergencies (
              <Src href="https://www.aafp.org/advocacy/advocacy-topics/physician-payment/dpc.html">AAFP advocacy</Src>).
              Imaging and labs beyond what the practice includes are usually billed separately or
              through your insurance, so ask which tests the practice covers.
            </p>

            <p className="text-gray-700 mb-4">
              Two Marketplace options are worth knowing as the wrap-around layer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Catastrophic plans.</strong> If you are under 30, you do not need an exemption
                to enroll. People 30 and older need a hardship or affordability exemption; for plan
                year 2026, CMS guidance says the hardship route includes people who expect to be
                ineligible for premium tax credits or cost-sharing reductions based on projected
                household income (
                <Src href="https://www.cms.gov/files/document/guidance-hardship-exemptions.pdf">CMS guidance</Src>;{' '}
                <Src href="https://www.healthcare.gov/health-coverage-exemptions/forms-how-to-apply/">HealthCare.gov</Src>).
              </li>
              <li>
                <strong>Bronze and catastrophic plans are now HSA-compatible.</strong> As of January
                1, 2026, bronze and catastrophic plans available through an Exchange count as
                HSA-compatible even if they do not meet the usual high-deductible plan definition (
                <Src href="https://www.irs.gov/newsroom/treasury-irs-provide-guidance-on-new-tax-benefits-for-health-savings-account-participants-under-the-one-big-beautiful-bill">IRS</Src>;{' '}
                <Src href="https://www.healthcare.gov/hsa-options/">HealthCare.gov</Src>).
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you need urgent care that your DPC practice cannot provide, our{' '}
              <Link href="/guides/urgent-care-cost-without-insurance" className={srcLink}>urgent care cost without insurance guide</Link>{' '}
              covers self-pay visit prices. For an emergency, call 911.
            </p>

            <h2 id="hsa" className="text-2xl font-bold text-gray-900 mt-12 mb-6">HSA Rules for Direct Primary Care in 2026</h2>

            <p className="text-gray-700 mb-4">
              The 2025 budget reconciliation law, H.R. 1, became Public Law 119-21 on July 4, 2025 (
              <Src href="https://www.congress.gov/bill/119th-congress/house-bill/1/all-info">Congress.gov</Src>).
              It changed how DPC works with health savings accounts. According to the IRS, beginning
              January 1, 2026, an otherwise eligible person enrolled in certain DPC service
              arrangements may contribute to an HSA and use HSA funds tax-free to pay the periodic DPC
              fees (
              <Src href="https://www.irs.gov/newsroom/treasury-irs-provide-guidance-on-new-tax-benefits-for-health-savings-account-participants-under-the-one-big-beautiful-bill">IRS announcement</Src>).
              IRS Notice 2026-5 sets the conditions (
              <Src href="https://www.irs.gov/pub/irs-drop/n-26-05.pdf">Notice 2026-5</Src>):
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Monthly cap:</strong> fees can total no more than $150 a month for one person, or $300 a month if the arrangement covers more than one person.</li>
              <li><strong>Fixed fee only:</strong> the fixed periodic fee must be the only payment for care under the arrangement. Practices may still bill separately for services outside the arrangement that they offer to members and non-members alike.</li>
              <li><strong>Primary care only:</strong> for this rule, primary care excludes procedures that need general anesthesia, prescription drugs other than vaccines, and lab services not typically done in an ambulatory primary care setting.</li>
              <li><strong>Longer billing periods are allowed</strong> if they stay within the monthly limit on an annualized basis. The IRS example for one person in 2026 is $1,800 for a year, $900 for six months or $450 for three months.</li>
              <li><strong>Over the cap:</strong> fees above the limit can still be reimbursed from an HSA as medical expenses, but you cannot contribute to an HSA while you are enrolled.</li>
              <li><strong>2027:</strong> Rev. Proc. 2026-24 keeps the limits at $150 and $300 for 2027 (<Src href="https://www.irs.gov/pub/irs-drop/rp-26-24.pdf">Rev. Proc. 2026-24</Src>).</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-2">Two practical checks before paying DPC fees from an HSA</h3>
              <p className="text-gray-700">
                First, &quot;otherwise eligible&quot; still means you need HSA-qualifying coverage,
                such as a high-deductible plan or, from 2026, an Exchange bronze or catastrophic plan.
                DPC alone does not make you HSA-eligible. Second, add up every person on the
                membership: a practice at $100 a month for you plus children on the same arrangement
                must stay at or under $300 a month in total. Ask how the practice handles medications
                it dispenses, since prescription drugs other than vaccines are excluded from the
                primary care definition. Rules are new, so confirm your situation with a tax adviser.
                Our <Link href="/guides/hsa-letter-of-medical-necessity-rules" className={srcLink}>HSA letter of medical necessity guide</Link>{' '}
                covers other HSA documentation questions.
              </p>
            </div>

            <h2 id="employer" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Employer-Sponsored DPC</h2>

            <p className="text-gray-700 mb-4">
              The AAFP definition includes fees paid by employers, so a DPC membership can be offered
              as a workplace benefit; if you are an employer, ask practices whether they offer group
              rates. Benefits advisers summarizing Notice 2026-5 note that, starting in 2026,
              employees enrolled in qualifying DPC arrangements can stay eligible to contribute to an
              HSA, and that plan sponsors should confirm their plans follow the notice (
              <Src href="https://www.wtwco.com/en-us/insights/2025/12/irs-issues-guidance-on-hsa-provisions-in-the-one-big-beautiful-bill-act">WTW</Src>;{' '}
              <Src href="https://www.sequoia.com/2026/01/irs-notice-2026-5-key-hsa-updates-for-employers/">Sequoia</Src>).
              If your employer offers DPC, ask HR who pays the fee, whether the arrangement is designed
              to meet the IRS conditions if you also use an HSA, and what happens to your membership if
              you leave the job.
            </p>

            <h2 id="vet" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Find and Vet a DPC Practice</h2>

            <p className="text-gray-700 mb-4">
              Start with the{' '}
              <Src href="https://mapper.dpcfrontier.com/">DPC Frontier mapper</Src>, then read the
              practice&apos;s own fee page and membership agreement. State rules vary. A McDermott
              Will &amp; Emery 50-state survey says roughly half of states have laws that explicitly
              exempt DPC arrangements from insurance regulation, and that most of those laws include
              consumer protections, such as barring practices from charging an annual fee up front (
              <Src href="https://www.mcdermottlaw.com/resource/direct-primary-care-arrangements-50-state-survey/">McDermott survey</Src>).
              Before you sign, get written answers to these questions:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Fees:</strong> the monthly fee for each household member by age, any enrollment fee (listings we checked ranged from $0 to $100), and any family cap.</li>
              <li><strong>Commitment and cancellation:</strong> any minimum term (one listing requires 3 months), how much notice cancellation needs, and whether prepaid fees are refunded pro rata.</li>
              <li><strong>Labs:</strong> which tests are included, which are sold at member prices, and where samples are drawn.</li>
              <li><strong>Medications:</strong> whether the practice dispenses medications, at what prices, and whether it bills them separately from the membership.</li>
              <li><strong>Access:</strong> how quickly you can get an appointment, how after-hours calls and messages are handled, and who covers when your doctor is away.</li>
              <li><strong>Outside care:</strong> how referrals to specialists, imaging and hospitals work, and whether the practice can help you find cash prices.</li>
              <li><strong>HSA:</strong> whether the total fee stays within the $150 or $300 IRS limit and whether anything is billed outside the fixed fee.</li>
            </ol>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Direct Primary Care</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Price your household, not just yourself.</strong> Child fees such as $10 at Atlas MD or $15 at Plum Health (its 2022 pricing), with an enrolled parent, can make family memberships cheaper than they first look.</li>
              <li><strong>Compare the full year.</strong> A $50 tier is $600 a year; a $200 practice is $2,400. Five $129 cash telehealth visits cost $645, so count how often you actually see a doctor.</li>
              <li><strong>Ask about annual billing, carefully.</strong> The San Francisco practice above lists $2,200 a year against $200 a month ($2,400). Prepay only if the contract states how unused fees are refunded, and note that some state DPC laws bar charging an annual fee up front.</li>
              <li><strong>Use member pricing for labs and medications.</strong> If a practice sells labs near cost, routine tests can cost a fraction of retail direct-access prices. Ask for the list.</li>
              <li><strong>Pair DPC with cheaper wrap-around coverage.</strong> A catastrophic or bronze plan covers emergencies and hospital care; since 2026, Exchange bronze and catastrophic plans are HSA-compatible.</li>
              <li><strong>Pay with HSA dollars if you qualify.</strong> A qualifying DPC fee within the IRS limits can be paid from an HSA tax-free.</li>
              <li><strong>Ask your employer.</strong> Some employers pay for DPC as a benefit, and practices may offer group rates.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If your DPC practice does not include a lab test you want, our{' '}
              <Link href="/guides/blood-test-without-a-doctor" className={srcLink}>guide to ordering a blood test without a doctor</Link>{' '}
              explains self-pay lab options. The{' '}
              <Link href="/primary_care" className={srcLink}>primary care hub</Link> compares cash-pay
              primary and urgent care services.
            </p>

            <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Red Flags and When to See a Clinician</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>A practice or salesperson suggests a DPC membership replaces health insurance. It covers primary care only.</li>
              <li>The contract has no clear cancellation terms, auto-renews without notice, or requires a large prepayment with no refund policy.</li>
              <li>The practice cannot tell you which labs and medications are included or what they cost.</li>
              <li>You are told the fee is HSA-eligible, but it exceeds $150 a month per person or the practice also bills insurance for the same care.</li>
              <li>You cannot find the doctor&apos;s license; check it with your state medical board before joining.</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">DPC is not emergency care</h3>
              <p className="text-sm text-red-800">
                For chest pain, trouble breathing, signs of a stroke, severe injury or any other
                emergency, call 911 or go to the nearest emergency room. A membership does not change
                that. For ongoing symptoms or a chronic condition, talk to a licensed clinician about
                what kind of care and coverage you need before choosing a membership.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Compare Cash-Pay Primary Care Options</h2>
            <p className="mb-6 text-blue-100">
              See self-pay virtual and in-person primary care services side by side, with published prices.
            </p>
            <Link
              href="/primary_care"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Primary Care
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
            <h2 className="font-semibold text-gray-800 mb-2">Medical, Tax &amp; Pricing Disclaimer</h2>
            <p className="text-sm text-gray-600">
              This guide is general information, not medical, legal or tax advice, and no clinician
              reviewed it. A direct primary care membership is not health insurance and does not cover
              emergency, hospital or specialist care. Whether a membership fits your health needs is a
              decision to make with a licensed clinician, and whether a fee qualifies under the HSA
              rules for direct primary care is a question for a tax adviser. The 2026 IRS rules are new
              and may be clarified. Prices come from practice fee pages, the DPC Frontier mapper and
              company websites as of {PRICES_CHECKED}; they vary by location and age, change over time,
              and some pages we checked may be out of date. Always confirm the current fee, contract
              terms and what is included before you join. VitalityScout is not affiliated with Atlas
              MD, Plum Health, the practices listed from the DPC Frontier mapper, DPC Frontier, MDVIP,
              Amazon One Medical, Lemonaid, PlushCare or Sesame, and listing a practice or company is
              not an endorsement.
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

        <RelatedGuides items={RELATED} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Primary Care Cheat Sheet"
            description="How to compare DPC fees, memberships and per-visit prices, and what to ask before you sign."
            source="guide_direct_primary_care_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
