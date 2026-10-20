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

const PAGE_URL = 'https://vitalityscout.com/guides/invisalign-cost';
const PAGE_TITLE = 'Invisalign Cost Without Insurance (2026): Real Prices';
const PAGE_DESCRIPTION =
  'Invisalign cost without insurance in 2026: about $1,800-$9,500 through a dentist vs $649-$1,499 for at-home aligners, plus braces, retainers and financing.';
const PRICES_CHECKED = 'October 18, 2026';

const ALIGNER_BRANDS = [
  {
    name: 'Invisalign (through a dentist or orthodontist)',
    providerId: 'invisalign',
    category: 'dental',
    price: '~$1,800-$9,500',
    blurb:
      'Prescribed and supervised by a dentist or orthodontist, who sets the fee. GoodRx estimates $1,800 to $9,500 depending on how complex your case is. Find a provider, then ask for an itemized quote that names the records, refinements and retainers included.',
    siteUrl: 'https://www.invisalign.com/invisalign-cost',
  },
  {
    name: 'Candid (CandidPro dentists)',
    providerId: 'candid',
    category: 'dental',
    price: 'Set by your dentist',
    blurb:
      'Candid closed its direct-to-consumer business in 2022 and now sells through CandidPro dentists, who set their own prices. An older Candid page still says "$2,400, all in," so ask the practice for its own all-in total.',
    siteUrl: 'https://www.candidco.com/products/candidpro-clear-aligners',
  },
  {
    name: 'ALIGNERCO',
    providerId: 'alignerco',
    category: 'dental',
    price: '$725-$925 sale',
    blurb:
      'Mail-order aligners made from an at-home impression kit. The All-Day plan is listed at $725 (regular $1,095) and the NightOnly plan at $925 (regular $1,295). These are sale prices, so confirm the checkout total and refund terms.',
    siteUrl: 'https://alignerco.com/products/smileadvantage',
  },
  {
    name: 'Smileie',
    providerId: 'smileie',
    category: 'dental',
    price: '$699-$1,499',
    blurb:
      'Its pricing page lists a day-time dual-arch plan at $699 (regular $849). SmileiePro, listed at $1,499 (regular $1,699), adds an in-person consultation and exam, professional scans and X-rays, with refinements included. These are sale prices, so confirm the checkout total.',
    siteUrl: 'https://smileie.com/pages/pricing',
  },
];

const SRC = {
  goodrxInvisalign: 'https://www.goodrx.com/conditions/dental-care/invisalign-cost-without-insurance',
  goodrxBraces: 'https://www.goodrx.com/conditions/dental-care/how-much-do-braces-cost',
  careCreditAligners: 'https://www.carecredit.com/well-u/health-wellness/invisalign-cost-invisalign-financing/',
  invisalignCost: 'https://www.invisalign.com/invisalign-cost',
  invisalignProvider: 'http://providersite.invisalign.com/invisalign-cost',
  invisalignInsurance: 'https://www.invisalign.com/resources/insurance/does-insurance-cover-invisalign',
  invisalignOrthoInsurance: 'https://www.invisalign.com/resources/insurance-and-cost/orthodontic-insurance',
  invisalignFinancing: 'https://www.invisalign.com/invisalign-cost/financing',
  invisalignRetainers: 'https://invisalign.com/resources/retainers/retainers-after-invisalign-treatment',
  newmouthExpress: 'https://www.newmouth.com/orthodontics/treatment/clear-aligners/invisalign-express/',
  newmouthInvisalignCost: 'https://www.newmouth.com/orthodontics/treatment/invisalign-cost/',
  newmouthRefinements: 'https://www.newmouth.com/orthodontics/treatment/clear-aligners/invisalign-refinements/',
  newmouthAlignerCost: 'https://www.newmouth.com/orthodontics/treatment/clear-aligners/cost/',
  newmouthCandid: 'https://www.newmouth.com/orthodontics/treatment/clear-aligners/candid/',
  newmouthByte: 'https://www.newmouth.com/byte-review/',
  candidLegacy: 'https://try.candidco.com/lp/candid-vs-invisalign',
  candidReferral: 'https://www.candidco.com/refer-friend',
  candidCloses: 'https://www.dentalproductsreport.com/view/candid-closes-direct-to-consumer-business',
  candidClosesDid: 'https://decisionsindentistry.com/2022/01/candid-closes-direct-to-consumer-aligner-business-and-goes-all-in-on-dentist-network-model-candidpro/',
  byteSuspension: 'https://www.beckersdental.com/dental-technology/dentsply-sirona-suspends-sales-marketing-of-byte-aligners-7-notes/',
  sdcQz: 'https://qz.com/smiledirectclub-is-shutting-down-where-does-that-leave-1851097131',
  sdcGlobe: 'https://www.bostonglobe.com/2023/12/13/business/smiledirectclub-shuts-down/',
  aaoSdc: 'https://aaoinfo.org/whats-trending/american-association-of-orthodontists-issues-guidance-to-smiledirectclub-patients-following-abrupt-closure/',
  alignercoAllDay: 'https://alignerco.com/products/smileadvantage',
  alignercoNight: 'https://alignerco.com/products/nightadvantage',
  alignercoNightPage: 'https://alignerco.com/pages/nightonly-clear-aligners',
  smileiePricing: 'https://smileie.com/pages/pricing',
  smileiePro: 'https://smileie.com/products/smileiepro',
  goodrxSelfPay: 'https://www.goodrx.com/conditions/dental-care/self-pay-dental-options',
  newmouthSmileSet: 'https://www.newmouth.com/orthodontics/treatment/clear-aligners/smileset/',
  byte8k: 'https://www.sec.gov/Archives/edgar/data/818479/000081847924000076/xray-20241024.htm',
  vivera: 'https://dentaly.org/us/adult-braces/teeth-retainers/vivera-retainers',
  aaoAlert: 'https://aaoinfo.org/wp-content/uploads/2021/04/AAO-Consumer-Alert-2021.pdf',
  aaoAligners: 'https://aaoinfo.org/treatments/aligners/',
  aaoPaymentPlans: 'https://aaoinfo.org/whats-trending/do-orthodontists-offer-payment-plans/',
  fdaAligners: 'https://www.fda.gov/medical-devices/dental-devices/clear-dental-aligners',
  fdaBraces: 'https://www.fda.gov/consumers/consumer-updates/braces-have-changed-what-know-about-traditional-braces-and-clear-aligner-options',
  deltaMax: 'https://www.deltadental.com/protect-my-smile/dental-insurance-101/what-is-dental-insurance-annual-maximum/',
  irs502: 'https://www.irs.gov/pub/irs-pdf/p502.pdf',
  careCreditDentalFaq: 'https://www.carecredit.com/providers/insights/carecredit-faqs-providers-dental/',
  careCreditDeferred: 'https://www.carecredit.com/well-u/financial-health/deferred-interest-vs-apr/',
  nidcr: 'https://www.nidcr.nih.gov/health-info/finding-dental-care',
};

const SOURCES = [
  { label: 'FDA — Clear Dental Aligners (prescription, supervision and reported problems)', url: SRC.fdaAligners },
  { label: 'FDA — Braces Have Changed: What to Know about Traditional Braces and Clear Aligner Options', url: SRC.fdaBraces },
  { label: 'American Association of Orthodontists — Consumer Alert on direct-to-consumer orthodontics (2021, PDF)', url: SRC.aaoAlert },
  { label: 'American Association of Orthodontists — Clear Aligners', url: SRC.aaoAligners },
  { label: 'American Association of Orthodontists — Orthodontic payment plans and financing', url: SRC.aaoPaymentPlans },
  { label: 'American Association of Orthodontists — Guidance to SmileDirectClub patients after the closure', url: SRC.aaoSdc },
  { label: 'GoodRx — How Much Does Invisalign Cost Without Insurance?', url: SRC.goodrxInvisalign },
  { label: 'GoodRx — Self-pay dental options (Invisalign $1,800-$9,500 range)', url: SRC.goodrxSelfPay },
  { label: 'GoodRx — Cost of Braces: metal, ceramic and lingual', url: SRC.goodrxBraces },
  { label: 'CareCredit — Clear Aligners (Invisalign) Treatment Cost and Financing', url: SRC.careCreditAligners },
  { label: 'CareCredit — Dental patient financing FAQ (promotional and reduced-APR plans)', url: SRC.careCreditDentalFaq },
  { label: 'CareCredit — Deferred interest promotional financing vs. 0% APR offers', url: SRC.careCreditDeferred },
  { label: 'Invisalign — Average Cost of Invisalign Aligners', url: SRC.invisalignCost },
  { label: 'Invisalign — Provider cost page (older $3,000-$8,000 range)', url: SRC.invisalignProvider },
  { label: 'Invisalign — Does Insurance Cover Invisalign? (OrthoFi 2021 coverage data)', url: SRC.invisalignInsurance },
  { label: 'Invisalign — Orthodontic insurance and teeth straightening', url: SRC.invisalignOrthoInsurance },
  { label: 'Invisalign — Aligner financing', url: SRC.invisalignFinancing },
  { label: 'Invisalign — Retainers after Invisalign treatment (Vivera)', url: SRC.invisalignRetainers },
  { label: 'NewMouth — Invisalign Express: procedure and costs', url: SRC.newmouthExpress },
  { label: 'NewMouth — Invisalign cost: factors, insurance and payment plans', url: SRC.newmouthInvisalignCost },
  { label: 'NewMouth — Invisalign refinements', url: SRC.newmouthRefinements },
  { label: 'NewMouth — Clear aligners cost 2026: at-home vs in-office prices', url: SRC.newmouthAlignerCost },
  { label: 'NewMouth — SmileSet review 2026 (October 2026 price change)', url: SRC.newmouthSmileSet },
  { label: 'NewMouth — Candid review 2026', url: SRC.newmouthCandid },
  { label: 'NewMouth — Byte aligners in 2026', url: SRC.newmouthByte },
  { label: 'Candid — Candid vs. Invisalign (older landing page, $2,400 all-in)', url: SRC.candidLegacy },
  { label: 'Candid — Refer a friend (example CandidPro case totals)', url: SRC.candidReferral },
  { label: 'Candid — CandidPro clear aligners', url: 'https://www.candidco.com/products/candidpro-clear-aligners' },
  { label: 'Dental Products Report — Candid closes direct-to-consumer business', url: SRC.candidCloses },
  { label: 'Decisions in Dentistry — Candid closes direct-to-consumer aligner business (Jan. 2022)', url: SRC.candidClosesDid },
  { label: "Becker's Dental + DSO Review — Dentsply Sirona suspends sales, marketing of Byte aligners", url: SRC.byteSuspension },
  { label: 'Dentsply Sirona — SEC Form 8-K on the Byte suspension (Oct. 24, 2024)', url: SRC.byte8k },
  { label: 'Quartz — SmileDirectClub is shutting down. Where does that leave its customers?', url: SRC.sdcQz },
  { label: 'Boston Globe — SmileDirectClub shuts down (Dec. 2023)', url: SRC.sdcGlobe },
  { label: 'ALIGNERCO — All-Day aligner plan', url: SRC.alignercoAllDay },
  { label: 'ALIGNERCO — NightAdvantage plan', url: SRC.alignercoNight },
  { label: 'ALIGNERCO — NightOnly clear aligners (wear time and duration)', url: SRC.alignercoNightPage },
  { label: 'Smileie — Pricing', url: SRC.smileiePricing },
  { label: 'Smileie — SmileiePro product page (in-person exam, scans and X-rays)', url: SRC.smileiePro },
  { label: 'Dentaly — Vivera retainers (set-of-four cost range)', url: SRC.vivera },
  { label: 'Delta Dental — What is a dental insurance annual maximum? (orthodontic lifetime maximums)', url: SRC.deltaMax },
  { label: 'IRS — Publication 502, Medical and Dental Expenses', url: SRC.irs502 },
  { label: 'NIDCR — Finding dental care (dental school clinics)', url: SRC.nidcr },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does Invisalign cost without insurance?',
    answer:
      'Your dentist or orthodontist sets the fee based on how complex your case is, how many aligners you need and where you live. GoodRx estimates $1,800 to $9,500 for a course of Invisalign, with full adult treatment averaging about $5,700. CareCredit puts the national average for clear aligners without insurance at $5,108, based on 2023 research done for CareCredit. Shorter cases cost less: NewMouth estimates Invisalign Express at roughly $1,800 to $3,500 (GoodRx says $1,800 to $3,000) and Invisalign Lite at about $3,000 to $4,500. These are estimates, so get an itemized quote from the practice.',
  },
  {
    question: 'Is Invisalign cheaper than braces?',
    answer:
      'Usually not by much, and sometimes it costs more. GoodRx estimates metal braces at $3,000 to $7,000, ceramic braces at $4,000 to $8,000 and lingual braces at $5,000 to $13,000, and says metal braces typically cost less than clear aligners. CareCredit says clear aligners cost about the same as braces. Invisalign says 53.5% of the more than 300 US orthodontists and general dentists it surveyed reported Invisalign cases cost the same as braces or less. Compare written quotes for your own case.',
  },
  {
    question: 'What happened to SmileDirectClub, Byte and Candid?',
    answer:
      'SmileDirectClub shut down on December 8, 2023, after filing for Chapter 11 bankruptcy in September; unshipped orders were canceled and its Lifetime Smile Guarantee ended. Dentsply Sirona suspended sales and marketing of Byte aligners in October 2024 while it reviewed regulatory requirements in consultation with the FDA, and NewMouth reports Byte is no longer available to new patients. Candid closed its direct-to-consumer business in January 2022 and now sells only through CandidPro dentists, who set their own prices.',
  },
  {
    question: 'Are mail-order aligners safe?',
    answer:
      'The FDA says it has not authorized clear aligners that are sold directly to consumers without a prescription and supervision by a dentist or orthodontist, and that using aligners without proper professional supervision may increase the risk of complications. It has received reports of new or worsening dental pain, jaw pain, bite problems, worsening misalignment and new gaps between teeth involving direct-to-consumer aligners. The American Association of Orthodontists advises asking whether the fee covers X-rays, a clinical exam, photos and scans. Ask any brand how a licensed dentist or orthodontist examines you and supervises your treatment.',
  },
  {
    question: 'Does insurance or an HSA cover Invisalign?',
    answer:
      'Many dental plans cover Invisalign the same way they cover braces. Invisalign cites OrthoFi data from 2021 showing average orthodontic coverage of $1,772, and says plans often cover children under 18 while adult coverage is less common. Delta Dental notes that orthodontic benefits usually have a lifetime maximum. IRS Publication 502 lists braces among dental services that count as medical expenses, while cosmetic procedures generally do not, so confirm with your HSA or FSA administrator before you pay.',
  },
  {
    question: 'Are retainers and refinements included in the Invisalign price?',
    answer:
      'It depends on the practice. NewMouth says some Invisalign doctors include refinements in the starting fee, while others include one or two rounds and charge for more. Retainers are often a separate line item. Invisalign lists an approximate price of $87 to $150 for a Vivera retainer, while Dentaly says a set of four Vivera retainers typically costs $400 to $1,000. Ask whether a retainer quote is for one retainer, one arch or a set.',
  },
  {
    question: 'Who is not a good candidate for clear aligners?',
    answer:
      'Only an in-person exam can answer that for you. The American Association of Orthodontists says aligners may not work as predictably for severe bite problems, significant tooth rotations and large gaps, where braces may offer more precision. It also notes that aligners can trap liquids and food against the teeth, raising the risk of cavities and gum disease. Byte suspended sales in 2024 after saying its onboarding process "may not provide adequate assurance" that certain contraindicated patients would not start treatment.',
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

export default function InvisalignCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Invisalign Cost Without Insurance: Dentist Treatment vs Mail-Order Aligners vs Braces',
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
      { '@type': 'ListItem', position: 3, name: 'Invisalign Cost Without Insurance', item: PAGE_URL },
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
              <span className="text-gray-900">Invisalign Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/dental" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Dental Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Dental &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Invisalign Cost Without Insurance: Dentist Treatment vs Mail-Order Aligners vs Braces
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Clear aligners cost anywhere from under $1,000 to near $10,000. The range depends on
              how complex your case is, who supervises it, and what the quote leaves out. Two of
              the best-known mail-order brands have shut down or stopped taking new patients since
              2023, so the options have changed. Here is what each one costs now.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> without insurance, Invisalign through a dentist or
                orthodontist typically costs <strong>about $1,800 to $9,500</strong>, depending on
                complexity (GoodRx&apos;s estimate), and CareCredit puts the national average for
                clear aligners at <strong>$5,108</strong> (2023 research done for CareCredit). Shorter Express- and Lite-type cases are
                estimated lower. At-home aligner brands list <strong>$649 to $1,499</strong>{' '}
                (NewMouth&apos;s 2026 range), but the FDA says it has not authorized aligners sold
                directly to consumers without a prescription and supervision by a dentist or
                orthodontist. The lowest-priced option we found that includes an in-person exam and
                X-rays is SmileiePro, listed at $1,499 (NewMouth reports $999 to $1,499 depending on
                city). Dental school clinics and shorter Express- or
                Lite-type plans, if your dentist says your case qualifies, are other ways to cut the
                cost and still be seen in person.
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
                <div className="font-bold text-blue-600 mb-2">Invisalign at a practice</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; ~$1,800-$9,500 (GoodRx estimate)</li>
                  <li>&bull; Express/Lite estimated lower</li>
                  <li>&bull; In-person exam, X-rays, check-ins</li>
                  <li>&bull; Fee set by your doctor</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">At-home aligner brands</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; ~$649-$1,499 listed</li>
                  <li>&bull; Impression kit or scan, then mail</li>
                  <li>&bull; Little or no in-person care</li>
                  <li>&bull; Get a dental exam first</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">Traditional braces</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Metal ~$3,000-$7,000</li>
                  <li>&bull; Ceramic ~$4,000-$8,000</li>
                  <li>&bull; Lingual ~$5,000-$13,000</li>
                  <li>&bull; May be more precise for complex cases</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-700 mb-1">Choose in-office treatment if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; Your bite is off, or teeth are rotated or widely spaced</li>
                  <li>&bull; You have untreated cavities or gum problems</li>
                  <li>&bull; You want X-rays and in-person check-ins in the price</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-700 mb-1">Before choosing an at-home brand:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; Get a dental exam and X-rays first</li>
                  <li>&bull; Confirm who prescribes and supervises your treatment</li>
                  <li>&bull; Read the refund and refinement terms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#in-office" className={srcLink}>1. Invisalign cost through a dentist or orthodontist</a></li>
              <li><a href="#brands" className={srcLink}>2. At-home and dentist-network aligner prices</a></li>
              <li><a href="#closures" className={srcLink}>3. What happened to SmileDirectClub, Byte and Candid</a></li>
              <li><a href="#braces" className={srcLink}>4. Invisalign vs braces cost</a></li>
              <li><a href="#included" className={srcLink}>5. What the quote should include</a></li>
              <li><a href="#paying" className={srcLink}>6. Insurance, HSA/FSA and financing</a></li>
              <li><a href="#save" className={srcLink}>7. How to save</a></li>
              <li><a href="#safety" className={srcLink}>8. Safety cautions and who is not a candidate</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="in-office" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Invisalign Cost Through a Dentist or Orthodontist</h2>

            <p className="text-gray-700 mb-4">
              Invisalign does not set one national price. Invisalign says your doctor sets the fee
              based on how complex your case is, how many aligners you need, and where you live. So
              published ranges are wide, and two practices in the same city can quote different
              numbers for the same teeth. The figures below come from consumer cost
              guides and Invisalign&apos;s own pages. They are not quotes for your case.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Treatment</th>
                    <th className={th}>Estimated cash price</th>
                    <th className={th}>Typical use and source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Invisalign, all case types</td>
                    <td className={td}>~$1,800-$9,500</td>
                    <td className={td}>From minor Express cases to full treatment; price depends on how complex the problem is (<Src href={SRC.goodrxSelfPay}>GoodRx</Src>)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Full (comprehensive) adult Invisalign</td>
                    <td className={td}>~$3,500-$9,500 (average ~$5,700)</td>
                    <td className={td}>GoodRx&apos;s estimate for full adult treatment (<Src href={SRC.goodrxInvisalign}>GoodRx</Src>). An older Invisalign provider page cites $3,000-$8,000.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Clear aligners, national average</td>
                    <td className={td}>$5,108</td>
                    <td className={td}>US average without insurance, from 2023 research done for CareCredit; state averages run from about $3,668 (Utah) to $6,516 (Rhode Island) (<Src href={SRC.careCreditAligners}>CareCredit</Src>)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Invisalign Lite</td>
                    <td className={td}>~$3,000-$4,500</td>
                    <td className={td}>Mild-to-moderate cases; described as up to 14 aligners and up to about 8 months (<Src href={SRC.newmouthInvisalignCost}>NewMouth</Src>)</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Invisalign Express</td>
                    <td className={td}>~$1,800-$3,500</td>
                    <td className={td}>Minor corrections such as slight crowding or small gaps (<Src href={SRC.newmouthExpress}>NewMouth</Src>). GoodRx puts Express at about $1,800-$3,000, averaging $2,400.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Lite and Express are not menu choices.</strong> They are shorter treatment
              plans, and they only work if your teeth need limited movement. Your dentist or
              orthodontist decides whether you qualify after examining you. If you are quoted a
              comprehensive fee, it is fair to ask whether a shorter plan was considered and why it
              was ruled out.
            </p>

            <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-12 mb-6">At-Home and Dentist-Network Aligner Prices</h2>

            <p className="text-gray-700 mb-4">
              At-home brands cost much less. You take impressions at home (or get a scan), and much
              of the treatment is planned and checked remotely. NewMouth&apos;s 2026 price roundup puts
              at-home plans at about $649 to $1,499, compared with about $5,100 on average in an
              office. Prices below are as listed on {PRICES_CHECKED}. Many are sale prices that
              change often.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Brand</th>
                    <th className={th}>Listed price</th>
                    <th className={th}>How it works</th>
                    <th className={th}>Status and notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>ALIGNERCO</td>
                    <td className={td}>All-Day $725 (regular $1,095); NightOnly $925 (regular $1,295)</td>
                    <td className={td}>At-home impression kit. ALIGNERCO says All-Day aligners are worn about 22 hours a day for roughly 4-6 months; NightOnly about 10 hours a night for roughly 6-8 months.</td>
                    <td className={td}>Sold. NewMouth reports a $29.99 kit-first option. <Src href={SRC.alignercoAllDay}>Plan page</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Smileie</td>
                    <td className={td}>Day-time dual arch $699 (regular $849); SmileiePro $1,499 (regular $1,699)</td>
                    <td className={td}>Mail-order plans, plus SmileiePro, which adds an in-person consultation, professional scans and X-rays, with refinements included.</td>
                    <td className={td}>Sold. NewMouth reports SmileiePro at $999-$1,499 depending on city. <Src href={SRC.smileiePricing}>Pricing</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>NewSmile</td>
                    <td className={td}>Fast Track $1,095 (list $1,795); Night $1,195 (list $1,895)</td>
                    <td className={td}>At-home aligners</td>
                    <td className={td}>Prices as reported by <Src href={SRC.newmouthAlignerCost}>NewMouth</Src>; we could not confirm them on NewSmile&apos;s own site.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>SmileSet</td>
                    <td className={td}>$1,395 (list $1,895)</td>
                    <td className={td}>At-home aligners</td>
                    <td className={td}>NewMouth&apos;s <Src href={SRC.newmouthSmileSet}>SmileSet review</Src> says the price rose from $1,295 to $1,395 on October 1, 2026; its older cost roundup still shows $1,295. NewMouth earns affiliate revenue from SmileSet links. Check the live price.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Candid (CandidPro)</td>
                    <td className={td}>Set by your dentist</td>
                    <td className={td}>Treatment through a participating dentist&apos;s office</td>
                    <td className={td}>No direct sales since 2022. An older Candid page still says &quot;$2,400, all in&quot;; Candid&apos;s referral page shows example totals of $3,500, $4,800 and $7,100.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Byte</td>
                    <td className={td}>Not sold</td>
                    <td className={td}>Was mail-order</td>
                    <td className={td}>Sales suspended October 2024; no longer offered to new patients, per <Src href={SRC.newmouthByte}>NewMouth</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>SmileDirectClub</td>
                    <td className={td}>Not sold</td>
                    <td className={td}>Was mail-order with retail shops</td>
                    <td className={td}>Shut down December 8, 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-2">The cheapest kit is not the cheapest outcome</h3>
              <p className="text-gray-700">
                A $725 plan looks like a fraction of a $5,000 office fee. But the in-office route
                comes with an in-person exam and treatment supervised by a dentist or orthodontist;
                check the quote for which records and visits are covered. If an at-home
                plan doesn&apos;t work for your teeth, you may end up paying a dentist or
                orthodontist to examine and treat you anyway. SmileiePro sits in between: it adds
                an in-person exam and X-rays at a listed $1,499, still well below typical office pricing.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare aligner options before you commit"
            intro="Listed prices change often. Before you pay, confirm the checkout total, who examines you, and what happens if you need refinements or new retainers. No provider here has a VitalityScout profile, and listing one is not an endorsement."
            brands={ALIGNER_BRANDS}
            hubHref="/dental"
            hubLabel="Compare dental options →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="closures" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Happened to SmileDirectClub, Byte and Candid</h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>SmileDirectClub</strong> filed for Chapter 11 bankruptcy in September 2023
                and shut down its global operations on December 8, 2023. Unshipped orders were
                canceled, its Lifetime Smile Guarantee ended, and customers were told to see a local
                dentist or orthodontist to continue treatment (<Src href={SRC.sdcQz}>Quartz</Src>).
                The AAO published <Src href={SRC.aaoSdc}>guidance for affected patients</Src>.
              </li>
              <li>
                <strong>Byte</strong>, owned by Dentsply Sirona, voluntarily paused sales and
                marketing of its aligners and impression kits on October 24, 2024, while it reviewed
                regulatory requirements, in consultation with the FDA (<Src href={SRC.byte8k}>SEC filing</Src>). Byte&apos;s notice said its
                onboarding process &quot;may not provide adequate assurance that certain
                contraindicated patients do not enter treatment&quot; (<Src href={SRC.byteSuspension}>Becker&apos;s</Src>).
                NewMouth reports Byte is no longer available to new patients.
              </li>
              <li>
                <strong>Candid</strong> closed its direct-to-consumer business and all 45 Candid
                Studios in January 2022. It now sells only through its CandidPro dentist network,
                and dentists set their own price (<Src href={SRC.candidClosesDid}>Decisions in Dentistry</Src>).
                That is why the &quot;$2,400, all in&quot; figure on an older Candid page may not
                match what a CandidPro office quotes you.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>The lesson for buyers:</strong> if you prepay or finance a long treatment, you
              are counting on the company to stay in business. SmileDirectClub customers lost their
              guarantee overnight. Paying in stages, keeping copies of your records, and having a
              local dentist who knows your mouth all reduce that risk.
            </p>

            <h2 id="braces" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Invisalign vs Braces Cost</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Option</th>
                    <th className={th}>Estimated cash price</th>
                    <th className={th}>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Metal braces</td>
                    <td className={td}>~$3,000-$7,000</td>
                    <td className={td}><Src href={SRC.goodrxBraces}>GoodRx</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Ceramic (tooth-colored) braces</td>
                    <td className={td}>~$4,000-$8,000</td>
                    <td className={td}><Src href={SRC.goodrxBraces}>GoodRx</Src></td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Lingual braces (behind the teeth)</td>
                    <td className={td}>~$5,000-$13,000</td>
                    <td className={td}><Src href={SRC.goodrxBraces}>GoodRx</Src></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Invisalign (full adult treatment)</td>
                    <td className={td}>~$3,500-$9,500 (average ~$5,700)</td>
                    <td className={td}><Src href={SRC.goodrxInvisalign}>GoodRx</Src></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Sources disagree on which costs less. GoodRx says metal braces typically cost less than
              clear aligners. CareCredit says clear aligners cost about the same as braces.
              Invisalign says 53.5% of the more than 300 US orthodontists and general dentists it
              surveyed reported Invisalign cases cost the same as braces or less. Price is only part
              of the decision. The American Association of Orthodontists (AAO) says aligners may not
              work as predictably as braces for severe bite problems, significant rotations and large
              gaps. Because aligners are removable, results also depend on wearing them as
              prescribed.
            </p>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Quote Should Include</h2>

            <p className="text-gray-700 mb-4">
              Two quotes with the same total can cover very different things. The AAO&apos;s{' '}
              <Src href={SRC.aaoAlert}>consumer alert</Src> suggests asking whether the fee covers
              X-rays of the teeth and jaws, a clinical exam, photos and scans. Then ask about the
              items that most often add to the bill:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Diagnostic records.</strong> X-rays, scans and photos at the start. Some
                practices bill a separate records or consultation fee.
              </li>
              <li>
                <strong>Refinements.</strong> Extra aligners to fine-tune results near the end.
                NewMouth says some Invisalign doctors include refinements in the starting fee, while
                others include one or two rounds and charge for more (<Src href={SRC.newmouthRefinements}>NewMouth</Src>).
                Smileie says SmileiePro includes every refinement at no extra cost.
              </li>
              <li>
                <strong>Retainers.</strong> You will need a retainer after treatment to keep teeth
                from shifting. Invisalign lists an approximate price of $87 to $150 for a Vivera
                retainer (<Src href={SRC.invisalignRetainers}>Invisalign</Src>). Dentaly says Vivera
                retainers come in sets of four that typically cost $400 to $1,000 (<Src href={SRC.vivera}>Dentaly</Src>).
                Ask whether a retainer quote is for one retainer, one arch or a set.
              </li>
              <li>
                <strong>Check-ins and problems.</strong> Ask how many in-person visits are included,
                and what you pay if an aligner is lost or cracked or you need an extra visit.
              </li>
            </ul>

            <h2 id="paying" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance, HSA/FSA and Financing</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Orthodontic insurance</h3>
            <p className="text-gray-700 mb-4">
              Many dental plans cover Invisalign the same way they cover braces, as a percentage or a
              fixed dollar amount. Invisalign cites OrthoFi data from 2021, covering about 112,000
              insured US patients, showing average orthodontic coverage of $1,772 (<Src href={SRC.invisalignInsurance}>Invisalign</Src>).
              Invisalign also says plans often cover children under 18, while adult coverage is less
              common (<Src href={SRC.invisalignOrthoInsurance}>Invisalign</Src>). Delta Dental
              explains that orthodontic benefits usually have a lifetime maximum, not a yearly one.
              Once you reach it, the plan pays no more orthodontic benefits (<Src href={SRC.deltaMax}>Delta Dental</Src>).
              Before you sign, ask your plan whether adult orthodontics is covered, what the lifetime
              orthodontic maximum is, whether there is a waiting period, and ask the practice for a
              pre-treatment estimate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">HSA and FSA</h3>
            <p className="text-gray-700 mb-4">
              <Src href={SRC.irs502}>IRS Publication 502</Src> lists braces among the dental services
              that count as medical expenses. Purely cosmetic procedures generally don&apos;t count.
              The passage we checked does not name clear aligners, so ask your HSA or FSA
              administrator whether your treatment qualifies before you pay. Invisalign&apos;s cost
              pages say pre-tax HSA or FSA money can lower your net cost, and Candid says patients
              may be able to use orthodontic benefits and HSA or FSA funds. If
              they want documentation, our{' '}
              <Link href="/guides/hsa-letter-of-medical-necessity-rules" className={srcLink}>guide to HSA letters of medical necessity</Link>{' '}
              explains what one should include.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Financing</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>In-office payment plans.</strong> The AAO says orthodontists commonly take a
                down payment and spread the rest over 12 to 24 months, often interest-free (<Src href={SRC.aaoPaymentPlans}>AAO</Src>).
                Invisalign says many doctors offer monthly plans, sometimes with a low or no down
                payment (<Src href={SRC.invisalignFinancing}>Invisalign</Src>).
              </li>
              <li>
                <strong>CareCredit.</strong> CareCredit offers &quot;No Interest if Paid in
                Full&quot; promotions over 6, 12, 18 or 24 months on qualifying purchases of $200 or
                more. This is deferred interest: interest builds up from the purchase date and is
                added to your balance if you haven&apos;t paid in full by the end of the promotion (<Src href={SRC.careCreditDeferred}>CareCredit</Src>).
                Its dental FAQ also lists a 24-month plan at 17.90% APR for purchases of
                $1,000 or more (<Src href={SRC.careCreditDentalFaq}>CareCredit</Src>). Check the
                current terms before you apply.
              </li>
              <li>
                <strong>Brand financing.</strong> At-home brands advertise monthly payments on their
                plans. Compare the total you will pay over the whole plan with the one-time price.
              </li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Invisalign</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get two or three itemized quotes.</strong> The doctor sets the fee, so prices vary between practices. Compare what each quote includes, not just the total.</li>
              <li><strong>Ask about a shorter plan.</strong> If you have only mild crowding or small gaps, ask whether an Express- or Lite-type plan fits your case. Let the clinician decide.</li>
              <li><strong>Check dental schools.</strong> The National Institute of Dental and Craniofacial Research says dental school clinics often provide care at reduced cost, with students closely supervised by licensed dentists (<Src href={SRC.nidcr}>NIDCR</Src>). GoodRx notes that some dental schools offer lower Invisalign pricing.</li>
              <li><strong>Use benefits you already have.</strong> Use any orthodontic benefit first, then pay the rest with pre-tax HSA or FSA money.</li>
              <li><strong>Try the in-office plan before a credit card.</strong> An interest-free practice plan usually beats a deferred-interest card if you might not clear the balance in time.</li>
              <li><strong>Budget for retainers.</strong> You will need retainers after treatment ends. Dentaly puts a set of four Vivera retainers at $400 to $1,000, on top of the treatment price.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              For other big-ticket dental bills, see our guides to{' '}
              <Link href="/guides/dental-implant-cost-usa" className={srcLink}>dental implant cost in the USA</Link>,{' '}
              <Link href="/guides/root-canal-cost-without-insurance" className={srcLink}>root canal cost without insurance</Link>{' '}
              and <Link href="/guides/veneers-cost-by-country" className={srcLink}>veneers cost by country</Link>,
              or compare US and international options in the{' '}
              <Link href="/dental" className={srcLink}>dental hub</Link>.
            </p>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety Cautions and Who Is Not a Candidate</h2>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">What the FDA says about aligners sold directly to consumers</h3>
              <p className="text-sm text-red-800">
                Clear aligners are prescription devices. The FDA says it has not authorized clear
                aligners that are sold directly to consumers without a prescription and supervision
                by a dentist or orthodontist. It says using aligners without proper professional
                supervision may increase the risk of complications. It has received reports involving
                direct-to-consumer aligners of new or worsening dental pain, jaw pain, bite problems,
                worsening misalignment and new gaps between teeth. The FDA also says periodic
                in-person visits can help reduce the risk of an uneven bite, unintended tooth
                movement, pain and tooth loss (<Src href={SRC.fdaAligners}>FDA</Src>). You can ask
                your dentist which product you are getting and look it up in FDA&apos;s 510(k)
                database under product code NXC.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The AAO, which represents orthodontists, warns that some direct-to-consumer companies
              do not involve an in-person evaluation or in-person supervision by an orthodontist.
              Keep in mind that it is an advocacy group. Still, its main point, to get examined and
              X-rayed before moving teeth, matches the FDA&apos;s guidance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Who may not be a good candidate</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Complex bite or tooth movement.</strong> The AAO says aligners may not work as predictably for severe bite problems, significant tooth rotations and large gaps, where braces may offer more precision (<Src href={SRC.aaoAligners}>AAO</Src>).</li>
              <li><strong>Cavities or gum problems.</strong> The AAO notes aligners can trap liquids and food against the teeth, raising the risk of cavities and gum disease. Have your dentist check and treat these before you start.</li>
              <li><strong>Anyone whose eligibility hasn&apos;t been checked in person.</strong> Byte suspended sales after saying its onboarding process might not keep some contraindicated patients from starting treatment. An in-person exam with X-rays is how a clinician checks for those problems.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Red flags before you buy</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>No X-rays or clinical exam before your treatment plan is made</li>
              <li>You can&apos;t find out the name and license of the dentist or orthodontist prescribing your aligners</li>
              <li>No clear way to be seen in person if you have pain or your bite changes</li>
              <li>Pressure to prepay the full amount, or refund and refinement terms that aren&apos;t clear</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you get new or worsening tooth or jaw pain, or your bite feels different during
              treatment, contact a licensed dentist or orthodontist promptly. Talk to a licensed
              clinician about whether aligners, braces or no treatment is right for you.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Compare Cash-Pay Dental Options</h2>
            <p className="mb-6 text-blue-100">
              See US and international dental prices side by side before you book.
            </p>
            <Link
              href="/dental"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse the Dental Hub
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
              This guide is general information, not medical or dental advice, and no clinician
              reviewed it. Whether you need orthodontic treatment, and whether aligners or braces fit
              your teeth and bite, are decisions to make with a licensed dentist or orthodontist after
              an in-person exam. Clear aligners are prescription devices; the FDA says it has not
              authorized aligners sold directly to consumers without a prescription and professional
              supervision. Prices come from public provider pages and consumer cost guides as of{' '}
              {PRICES_CHECKED}. They are estimates, vary by location and case, include sale prices
              that change often, and may exclude records, refinements, retainers and extra visits.
              Always confirm the current price and what it includes before you pay. VitalityScout is
              not affiliated with Align Technology (Invisalign), Candid, ALIGNERCO, Smileie, NewSmile,
              SmileSet, Dentsply Sirona or CareCredit, and listing a provider is not an endorsement.
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

        <RelatedGuides items={getRelatedGuides('/guides/invisalign-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Dental Cost Cheat Sheet"
            description="How to compare itemized dental quotes, spot add-on fees, and use HSA/FSA dollars."
            source="guide_invisalign_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
