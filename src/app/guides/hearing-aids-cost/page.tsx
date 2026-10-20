import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid, { type BrandCta } from '@/components/BrandCtaGrid';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/hearing-aids-cost';
const PAGE_TITLE = 'Hearing Aids Cost Without Insurance (2026 Price Guide)';
const PAGE_DESCRIPTION =
  'Hearing aids cost $197-$2,699 a pair over the counter, from $1,599.99 at Costco, and $3,432 on average for a private-pay prescription pair. 2026 cash prices.';
const PRICES_CHECKED = 'October 18, 2026';

// Every price below was read from the provider's own page or a clearly
// attributed secondary source on the date above. Each card says to verify.
const HEARING_BRANDS: BrandCta[] = [
  {
    name: 'MDHearing',
    providerId: 'mdhearing',
    category: 'hearing-aids',
    price: '$197-$397/pair',
    blurb:
      'Lowest listed OTC pairs we found: NEO in-canal at $197 (60-day trial) and VOLT behind-the-ear at $397 (45-day trial). Other MDHearing pages have shown $297 (NEO) and $299.98 (VOLT), so confirm the live price.',
    siteUrl: 'https://www.mdhearingaid.com/hearing-aids/mdhearing-volt/v1/',
  },
  {
    name: 'Apple AirPods Pro 3',
    providerId: 'apple-airpods-pro',
    category: 'hearing-aids',
    price: '$249',
    blurb:
      'Earbuds that run FDA-authorized OTC hearing aid software for adults with perceived mild to moderate loss. Needs a compatible iPhone or iPad; check feature availability.',
    siteUrl: 'https://www.apple.com/airpods-pro/hearing-health/',
  },
  {
    name: 'Sennheiser All-Day Clear',
    providerId: 'sennheiser-all-day-clear',
    category: 'hearing-aids',
    price: '$799.95/pair (sale)',
    blurb:
      'Rechargeable self-fitting OTC pair. Sennheiser’s product page lists $799.95, marked down from $999.95, with a 1-year warranty and free shipping. Sale prices change; verify at checkout.',
    siteUrl: 'https://us.sennheiser-hearing.com/products/sennheiser-all-day-clear',
  },
  {
    name: 'Lexie B2 Plus',
    providerId: 'lexie-hearing',
    category: 'hearing-aids',
    price: '~$899/pair',
    blurb:
      'Self-fitting rechargeable OTC pair with app support, a 45-day return period and a 1-year warranty. Some Lexie pages show $999; verify before checkout.',
    siteUrl: 'https://lexiehearing.com/us/lexie-b2-plus-powered-by-bose-hearing-aids',
  },
  {
    name: 'Jabra Enhance',
    providerId: 'jabra-enhance',
    category: 'hearing-aids',
    price: '$1,195-$1,995/pair',
    blurb:
      'OTC pairs sold online with 3 years of remote audiology care, a 3-year warranty and loss-and-damage cover, and a 100-day return window.',
    siteUrl: 'https://www.jabraenhance.com/product',
  },
  {
    name: 'Costco Hearing Aid Center',
    providerId: 'costco-hearing-aid-center',
    category: 'hearing-aids',
    price: 'From $1,599.99/pair',
    blurb:
      'Prescription pairs fitted in the warehouse, with a free hearing test for members 18+. Membership required; Costco says prices vary by state.',
    siteUrl: 'https://www.costco.com/f/-/hearing-aid-center',
  },
  {
    name: 'Eargo',
    providerId: 'eargo',
    category: 'hearing-aids',
    price: 'Eargo 8 ~$2,699/pair',
    blurb:
      'In-canal OTC devices with a 45-day right to return from delivery. Eargo runs promotions, so compare the checkout price per pair.',
    siteUrl: 'https://www.eargo.com/products-hearing-aids/',
  },
];

// Answered only from facts stated on this page. The visible FAQ renders this
// same array, so the FAQPage schema and the page text cannot drift apart.
const FAQ_ITEMS = [
  {
    question: 'How much do hearing aids cost without insurance?',
    answer:
      'It depends on the route. The over-the-counter (OTC) pairs we checked are listed from $197 (MDHearing NEO) to $2,699 (Eargo 8), and Apple’s AirPods Pro 3, which can run FDA-authorized hearing aid software, list at $249. Costco Hearing Aid Centers list prescription pairs from $1,599.99. HearingTracker’s late-2025 survey of more than 1,100 buyers found that private-pay prescription pairs averaged $3,432 (Costco purchases included), and that buyers at traditional clinics without insurance paid about $4,727 a pair. Prices vary by location and change often, so confirm the current price with the seller.',
  },
  {
    question: 'Do I need a hearing test or a prescription to buy hearing aids?',
    answer:
      'Not for OTC hearing aids if you are 18 or older and believe you have mild to moderate hearing loss. The FDA rule that took effect on October 17, 2022 lets you buy them without a medical exam, prescription or professional fitting. Anyone under 18, or anyone with more severe loss, needs prescription hearing aids. A test is still useful: Costco offers a free hearing test to members 18 and older, and the FDA advises seeing a doctor first if you have warning signs such as ear pain, drainage, dizziness, or sudden or one-sided hearing loss.',
  },
  {
    question: 'Does Medicare cover hearing aids?',
    answer:
      'Original Medicare does not cover hearing aids or exams for fitting them, and Medigap plans generally don’t either. Part B does cover diagnostic hearing exams when your doctor orders them to find out whether you need medical treatment; you generally pay 20% of the Medicare-approved amount after the Part B deductible. Many Medicare Advantage plans add a hearing benefit (KFF reports that 98% of individual plans offered some hearing coverage in 2026), but the scope varies, so check your plan’s allowance and network.',
  },
  {
    question: 'How much does a hearing test cost without insurance?',
    answer:
      'It can be free or cost a few hundred dollars. Costco’s hearing test is free for members 18 and older and is meant to show whether hearing aids could help. Apple’s Hearing Test runs on a compatible iPhone or iPad with AirPods Pro 2 or AirPods Pro 3 and takes about five minutes. A full audiological evaluation is a separate clinical service. For example, the George Washington University Speech & Hearing Center lists a complete evaluation at $235-$280. Ask any clinic for its self-pay price before you book.',
  },
  {
    question: 'Are AirPods Pro a real hearing aid?',
    answer:
      'With the Hearing Aid feature turned on, they are, for a narrow group of users. On September 12, 2024 the FDA authorized Apple’s Hearing Aid Feature as the first over-the-counter hearing aid software, for adults 18 and older with perceived mild to moderate hearing loss. Apple says it works on AirPods Pro 2 and AirPods Pro 3, and AirPods Pro 3 list at $249 in the US. It is not intended for severe loss, and feature availability varies by country.',
  },
  {
    question: 'Can I use HSA or FSA money for hearing aids?',
    answer:
      'Generally, yes. IRS Publication 502 lists hearing aids, plus the batteries, repairs and maintenance needed to operate them, as medical expenses, and Publication 969 says HSA-qualified expenses are generally those that would qualify for that deduction. Plan administrators can treat dual-purpose items such as consumer earbuds differently, so confirm with yours before you buy and keep the itemized receipt.',
  },
  {
    question: 'What happened to Costco’s Kirkland Signature hearing aids?',
    answer:
      'According to HearingTracker, Sonova, which made the Kirkland Signature 10.0, stopped supplying that model to Costco in November 2022, and Costco has not released a replacement Kirkland model. Costco now sells named brands. Its site lists the Sennheiser Sonite Rise and the Philips HearLink 9050 from $1,599.99 a pair and the Jabra Enhance Pro 30 from $1,699.99, and Costco says prices vary by state.',
  },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'FDA: OTC Hearing Aids, What You Should Know', url: 'https://www.fda.gov/medical-devices/hearing-aids/otc-hearing-aids-what-you-should-know' },
  { label: 'FDA: Hearing Aid Benefits and Limitations (when to consult a doctor)', url: 'https://www.fda.gov/medical-devices/hearing-aids/hearing-aid-benefits-and-limitations' },
  { label: 'FDA: Hearing Aids and Personal Sound Amplification Products, What to Know', url: 'https://www.fda.gov/consumers/consumer-updates/hearing-aids-and-personal-sound-amplification-products-what-know' },
  { label: 'FDA: FDA Authorizes First Over-the-Counter Hearing Aid Software (Sept. 12, 2024)', url: 'https://www.fda.gov/news-events/press-announcements/fda-authorizes-first-over-counter-hearing-aid-software' },
  { label: 'NIDCD (NIH): Over-the-Counter Hearing Aids', url: 'https://www.nidcd.nih.gov/health/over-counter-hearing-aids' },
  { label: 'NIDCD (NIH): Sudden Sensorineural Hearing Loss', url: 'https://www.nidcd.nih.gov/health/sudden-deafness' },
  { label: 'Medicare.gov: Hearing aid coverage', url: 'https://www.medicare.gov/coverage/hearing-aids' },
  { label: 'Medicare.gov: Hearing & balance exams', url: 'https://www.medicare.gov/coverage/hearing-balance-exams' },
  { label: 'KFF: Medicare Advantage 2026 Spotlight, A First Look at Plan Premiums and Benefits', url: 'https://www.kff.org/medicare/medicare-advantage-2026-spotlight-a-first-look-at-plan-premiums-and-benefits/' },
  { label: 'VA Rehabilitation and Prosthetic Services: VA Hearing Aids fact sheet', url: 'https://www.rehab.va.gov/PROSTHETICS/audiology/docs/VA-Hearing-Aids-Fact-Sheet.pdf' },
  { label: 'VA: VHA Audiology Services', url: 'https://www.rehab.va.gov/audiology/' },
  { label: 'IRS Publication 502: Medical and Dental Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p502.pdf' },
  { label: 'IRS Publication 969: Health Savings Accounts and Other Tax-Favored Health Plans', url: 'https://www.irs.gov/publications/p969' },
  { label: 'American Academy of Audiology: Guide to Adult Hearing Care (bundled vs itemized fees)', url: 'https://www.audiology.org/consumers-and-patients/seniors-hearing-loss/guide-to-adult-hearing-care/' },
  { label: 'HearingTracker: How much do hearing aids cost in 2026? (buyer survey)', url: 'https://www.hearingtracker.com/how-much-do-hearing-aids-cost' },
  { label: 'HearingTracker: Costco hearing aids (current lineup, Kirkland Signature history)', url: 'https://www.hearingtracker.com/hearing-aids/costco' },
  { label: 'HearingTracker: Sony OTC hearing aids discontinued', url: 'https://www.hearingtracker.com/hearing-aids/sony' },
  { label: 'HearingTracker: Hearing aid insurance coverage by state', url: 'https://www.hearingtracker.com/hearing-aid-insurance-coverage' },
  { label: 'HearingTracker: A guide to paying for hearing aids', url: 'https://www.hearingtracker.com/paying-for-hearing-aids' },
  { label: 'Costco Hearing Aid Center (free hearing test, current models)', url: 'https://www.costco.com/f/-/hearing-aid-center' },
  { label: 'Costco: Sennheiser brand showcase (Sonite Rise)', url: 'https://www.costco.com/f/-/sennheiser-brand-showcase' },
  { label: 'Costco: Philips hearing aids (HearLink 9050)', url: 'https://www.costco.com/philips-hearing-aids.html' },
  { label: 'Costco: Jabra brand showcase (Enhance Pro 30)', url: 'https://www.costco.com/f/-/jabra-brand-showcase' },
  { label: 'Costco: Hearing care products (180-day return policy, follow-ups)', url: 'https://www.costco.com/hearing-care-products.html' },
  { label: 'Costco: Sennheiser Sonite Rise Charger Go', url: 'https://www.costco.com/p/-/sennheiser-sonite-rise-charger-go/4000430397' },
  { label: 'Jabra Enhance: Select hearing aids and prices', url: 'https://www.jabraenhance.com/product' },
  { label: 'Jabra Enhance: FAQ', url: 'https://www.jabraenhance.com/faq' },
  { label: 'Jabra Enhance: Return policy', url: 'https://help.jabraenhance.com/coverage-policies/returnpolicy' },
  { label: 'Lexie: B2 Plus self-fitting OTC hearing aids', url: 'https://lexiehearing.com/us/lexie-b2-plus-powered-by-bose-hearing-aids' },
  { label: 'Lexie: Refurbished B2 Plus (outlet)', url: 'https://lexiehearing.com/us/outlet-store/refurbished-lexie-b2-plus-powered-by-bose-hearing-aids' },
  { label: 'Sennheiser: All-Day Clear OTC hearing aids', url: 'https://us.sennheiser-hearing.com/products/sennheiser-all-day-clear' },
  { label: 'MDHearing: VOLT', url: 'https://www.mdhearingaid.com/hearing-aids/mdhearing-volt/v1/' },
  { label: 'MDHearing: NEO series', url: 'https://www.mdhearingaid.com/hearing-aids/mdhearing-neo-family/' },
  { label: 'MDHearing: Hearing aid comparison (AIR, NEO, VOLT, VOLT MAX)', url: 'https://www.mdhearingaid.com/hearing-aid-comparisons/air-neo-volt-vmax/' },
  { label: 'Eargo: Compare and shop hearing aids', url: 'https://www.eargo.com/products-hearing-aids/' },
  { label: 'Eargo: 45-day right to return', url: 'https://help.eargo.com/en/articles/4144617-45-day-right-to-return' },
  { label: 'Apple: Buy AirPods Pro 3', url: 'https://www.apple.com/shop/buy-airpods/airpods-pro-3' },
  { label: 'Apple Support: Use the Hearing Aid feature on AirPods Pro 2 or AirPods Pro 3', url: 'https://support.apple.com/en-us/120992' },
  { label: 'Apple Support: Take a Hearing Test with AirPods Pro 2 or AirPods Pro 3', url: 'https://support.apple.com/en-us/120991' },
  { label: 'George Washington University Speech & Hearing Center: Appointments & Fees', url: 'https://speechhearing.columbian.gwu.edu/appointments-fees' },
];

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article' },
  twitter: { card: 'summary', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

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

const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const td = 'border border-gray-300 px-4 py-3';
const tdName = 'border border-gray-300 px-4 py-3 font-medium';

export default function HearingAidsCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hearing Aids Cost Without Insurance: OTC, Costco and Audiologist Prices (2026)',
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
      { '@type': 'ListItem', position: 3, name: 'Hearing Aids Cost', item: PAGE_URL },
    ],
  };
  const faqSchema = buildFAQSchema(FAQ_ITEMS);

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
                <span className="text-gray-900">Hearing Aids Cost</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
                &larr; Local Clinics &amp; In-Person Cash-Pay Care Hub
              </Link>

              <div className="mb-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Hearing
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Hearing Aids Cost Without Insurance: OTC, Costco and Audiologist Prices (2026)
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                A pair of hearing aids can cost under $200 or well over $3,000. Here is what each
                buying route actually costs when you pay cash, what the price includes, and when to
                skip the cheap route and see a clinician.
              </p>

              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> without insurance, a pair of hearing aids runs
                  roughly <strong>$197 to $2,699 over the counter</strong>, from{' '}
                  <strong>$1,599.99 at a Costco Hearing Aid Center</strong>, and an average of{' '}
                  <strong>$3,432 for a private-pay prescription pair</strong> (Costco purchases
                  included) or about <strong>$4,727 at a traditional clinic without insurance</strong>{' '}
                  (HearingTracker&apos;s late-2025 buyer survey). For adults with perceived mild to
                  moderate loss, the cheapest legitimate route is an FDA-regulated OTC hearing aid or
                  the $249 AirPods Pro 3 with Apple&apos;s FDA-authorized Hearing Aid feature. For more
                  severe, one-sided or sudden loss, see a clinician first; Costco was the lowest-priced
                  in-person fitting option we found.
                </p>
              </div>

              <p className="mt-4 text-sm font-medium text-gray-700">
                Prices checked {PRICES_CHECKED} &mdash; confirm with the provider
              </p>
              <p className="mt-1 text-sm text-gray-500">By VitalityScout research • 12 min read</p>
            </div>
          </section>

          {/* Content */}
          <article className="mx-auto max-w-4xl px-4 py-12">
            {/* Quick Comparison Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-green-600 mb-2">OTC (self-fit)</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• $197-$2,699 per pair listed</li>
                    <li>• Adults 18+, perceived mild-moderate loss</li>
                    <li>• No exam or prescription required</li>
                    <li>• You fit it with an app or controls</li>
                    <li>• 45- to 100-day trials at most brands checked</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-blue-600 mb-2">Costco Hearing Aid Center</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• From $1,599.99 per pair listed</li>
                    <li>• Prescription aids, fitted in person</li>
                    <li>• Free hearing test for members 18+</li>
                    <li>• Free follow-ups; 180-day returns</li>
                    <li>• Membership required</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-indigo-600 mb-2">Clinic (audiologist)</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• $4,727 average pair without insurance (survey)</li>
                    <li>• Needed for severe loss or under 18</li>
                    <li>• Diagnostic testing and fitting</li>
                    <li>• Usually bundled with follow-up care</li>
                    <li>• Ask for an itemized quote</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-green-600 mb-1">An OTC pair may fit if:</div>
                  <ul className="text-gray-700 space-y-1">
                    <li>• You are 18+ and your loss feels mild to moderate</li>
                    <li>• Both ears seem similar and nothing changed suddenly</li>
                    <li>• You are comfortable adjusting settings in an app</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-blue-600 mb-1">Go prescription (Costco or clinic) if:</div>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Your loss may be severe, or one ear is worse</li>
                    <li>• You want in-person fitting and adjustments</li>
                    <li>• You have any warning sign listed below</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#cost-by-route" className="text-blue-600 hover:underline">1. Hearing aid cost by buying route</a></li>
                <li><a href="#otc-vs-prescription" className="text-blue-600 hover:underline">2. OTC vs prescription: what the FDA allows</a></li>
                <li><a href="#provider-prices" className="text-blue-600 hover:underline">3. Real prices you can check today</a></li>
                <li><a href="#bundled" className="text-blue-600 hover:underline">4. Bundled vs unbundled clinic pricing</a></li>
                <li><a href="#hearing-test" className="text-blue-600 hover:underline">5. What a hearing test costs</a></li>
                <li><a href="#coverage" className="text-blue-600 hover:underline">6. Medicare, VA, state mandates and HSA/FSA</a></li>
                <li><a href="#ongoing" className="text-blue-600 hover:underline">7. Batteries, chargers and ongoing costs</a></li>
                <li><a href="#save" className="text-blue-600 hover:underline">8. How to save on hearing aids</a></li>
                <li><a href="#red-flags" className="text-blue-600 hover:underline">9. When to see a clinician first</a></li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                Clinics have long sold hearing aids with the devices and follow-up appointments
                rolled into one bundled price. Since October 17, 2022, adults with perceived mild to
                moderate hearing loss have also been able to buy FDA-regulated hearing aids over the
                counter, and the price spread is now wide. The cheapest option is not automatically
                the right one, and the most expensive is not automatically the best. What matters is
                matching the route to your hearing and knowing exactly what each price covers.
              </p>

              <h2 id="cost-by-route" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hearing Aid Cost by Buying Route</h2>

              <p className="text-gray-700 mb-4">
                The table pairs the listed prices we checked with the averages buyers reported in
                HearingTracker&apos;s late-2025 survey of more than 1,100 hearing aid buyers. HearingTracker is
                an industry consumer site that earns affiliate commissions, and its respondents were
                self-selected, so treat the averages as a rough benchmark, not a quote. All prices
                are per pair.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Route</th>
                      <th className={th}>Cash price per pair</th>
                      <th className={th}>What you get</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdName}>OTC hearing aids (online and retail)</td>
                      <td className={td}>$197-$2,699 listed; $502 average paid (survey)</td>
                      <td className={td}>Self-fitting device; support by phone, chat or app; brand return window</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>AirPods Pro 3 with Hearing Aid feature</td>
                      <td className={td}>$249 (Apple list price)</td>
                      <td className={td}>Earbuds plus FDA-authorized OTC hearing aid software; set up with an iPhone or iPad</td>
                    </tr>
                    <tr>
                      <td className={tdName}>Costco Hearing Aid Center</td>
                      <td className={td}>From $1,599.99 listed; $1,674 average paid (survey)</td>
                      <td className={td}>Prescription aids, in-person testing and fitting, follow-up visits</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Prescription pair, private pay (all channels, Costco included)</td>
                      <td className={td}>$3,432 average paid (survey)</td>
                      <td className={td}>Prescription aids with in-person fitting; blends lower-cost Costco purchases with clinic purchases</td>
                    </tr>
                    <tr>
                      <td className={tdName}>Traditional clinic, no insurance</td>
                      <td className={td}>$4,727 average paid (survey)</td>
                      <td className={td}>Prescription aids, fitting and usually a bundle of follow-up care</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Hospital or university clinic (all payers)</td>
                      <td className={td}>$3,941 average paid (survey)</td>
                      <td className={td}>Highest-priced channel in the survey&apos;s by-channel breakdown</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                The same survey found a wide spread among clinics: local clinics and private
                practices averaged $3,601 per pair, national chains $3,403 and ENT offices $2,701.
                Insurance makes a large difference: buyers at traditional clinics reported paying
                about $4,727 per pair without insurance, versus $2,567 with insurance. HearingTracker&apos;s
                own pages are not fully consistent on some figures, and the averages do not
                separate basic from premium devices or short from long service bundles, so the useful
                takeaway is to get more than one quote and ask what each includes.
              </p>

              <h2 id="otc-vs-prescription" className="text-2xl font-bold text-gray-900 mt-12 mb-6">OTC vs Prescription Hearing Aids: What the FDA Allows</h2>

              <p className="text-gray-700 mb-4">
                The FDA&apos;s over-the-counter hearing aid rule was published on August 17, 2022 and
                took effect on October 17, 2022. It lets adults 18 and older with{' '}
                <strong>perceived mild to moderate hearing loss</strong> buy hearing aids directly
                from stores or online without a medical exam, a prescription or a fitting by an
                audiologist. The FDA also notes that OTC hearing aids are limited in maximum output and
                may not be adequate for more severe hearing loss. Buyers under 18, and adults with
                more severe loss, still need prescription hearing aids.
              </p>

              <p className="text-gray-700 mb-4">
                How do you know whether your loss is &quot;mild to moderate&quot;? The National
                Institute on Deafness and Other Communication Disorders (NIDCD) lists everyday signs:
                speech that sounds muffled; trouble following conversation in a group, in noise, on
                the phone or when you can&apos;t see the speaker; asking people to repeat themselves or
                slow down; and turning the TV up louder than others like. A hearing test is the
                reliable way to know where you fall.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p className="text-gray-700">
                  <strong>Do not confuse hearing aids with amplifiers.</strong> Personal sound
                  amplification products (PSAPs) are sold for people <em>without</em> hearing loss who
                  want louder sound in situations like birdwatching or a distant lecture. The FDA does
                  not regulate them as medical devices and warns that using one in place of a hearing
                  aid can delay diagnosis of a treatable condition. If a product is not labeled as an
                  OTC or prescription hearing aid, it is not one.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Where AirPods Pro fit in</h3>
              <p className="text-gray-700 mb-4">
                On September 12, 2024 the FDA authorized Apple&apos;s Hearing Aid Feature as the first
                over-the-counter hearing aid <em>software</em> device, for adults 18 and older with
                perceived mild to moderate hearing impairment. In the study the FDA described, 118
                participants reported similar perceived benefit whether the feature was self-fitted
                or professionally fitted, and no device-related adverse events were observed. Apple
                says the feature works on AirPods Pro 2 and AirPods Pro 3 with a compatible iPhone or
                iPad, and it can use either Apple&apos;s own Hearing Test or an audiogram from a hearing
                professional. Apple also notes it amplifies surrounding sound only in Transparency
                mode, the earbuds must stay charged, and availability varies by country.
              </p>

              <h2 id="provider-prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real Prices You Can Check Today</h2>

              <p className="text-gray-700 mb-4">
                These are listed prices from each seller&apos;s own site on {PRICES_CHECKED}. Hearing
                aid brands run frequent promotions, and several had inconsistent prices across their
                own pages, which we note below. Treat each figure as a starting point to confirm at
                checkout.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Seller and model</th>
                      <th className={th}>Listed price (verify)</th>
                      <th className={th}>Type and terms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdName}>MDHearing NEO / VOLT</td>
                      <td className={td}>$197 / $397 per pair (other MDHearing pages have shown $297 / $299.98)</td>
                      <td className={td}>OTC; 60-day trial (NEO), 45-day trial (VOLT); accessories not returnable</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Apple AirPods Pro 3</td>
                      <td className={td}>$249</td>
                      <td className={td}>Earbuds with FDA-authorized OTC hearing aid software</td>
                    </tr>
                    <tr>
                      <td className={tdName}>Sennheiser All-Day Clear</td>
                      <td className={td}>$799.95 sale (marked down from $999.95)</td>
                      <td className={td}>OTC, rechargeable; 1-year warranty; free shipping</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Lexie B2 Plus</td>
                      <td className={td}>$899 (some Lexie pages show $999)</td>
                      <td className={td}>OTC, rechargeable (up to 18 hours); 45-day returns; 1-year warranty</td>
                    </tr>
                    <tr>
                      <td className={tdName}>Jabra Enhance Select M1 / M2 / M3</td>
                      <td className={td}>$1,195 / $1,695 / $1,995 (M3 has been promoted at $1,695)</td>
                      <td className={td}>OTC with 3 years of remote audiology; 100-day returns; 3-year warranty and loss-and-damage cover</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Costco: Sennheiser Sonite Rise or Philips HearLink 9050</td>
                      <td className={td}>From $1,599.99 per pair</td>
                      <td className={td}>Prescription; two rechargeable aids plus charger; fitted in-warehouse</td>
                    </tr>
                    <tr>
                      <td className={tdName}>Costco: Jabra Enhance Pro 30</td>
                      <td className={td}>From $1,699.99 (another Costco page shows $1,799.99)</td>
                      <td className={td}>Prescription; two rechargeable aids plus charger</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className={tdName}>Eargo 8</td>
                      <td className={td}>$2,699 list (promotions often lower it)</td>
                      <td className={td}>OTC, in-canal; 45-day right to return from delivery</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <BrandCtaGrid
                title="Compare hearing aid sellers by price and support"
                intro="Seven options from the table above, cheapest first. None has a VitalityScout provider profile, and we have no affiliate relationship with these sellers. Confirm the live price, return window and support terms on each site."
                brands={HEARING_BRANDS}
                hubHref="/telehealth"
                hubLabel="Browse telehealth and cash-pay services →"
              />

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">Discontinued names you may still see</h4>
                <p className="text-gray-700">
                  <strong>Kirkland Signature:</strong> according to HearingTracker, Sonova, which made
                  the Kirkland Signature 10.0, stopped supplying that model to Costco in November
                  2022, and Costco has not released a replacement Kirkland model. Costco now sells named brands instead.{' '}
                  <strong>Sony:</strong> HearingTracker reported in April 2026 that Sony&apos;s OTC
                  hearing aids are no longer listed on Sony&apos;s US site; leftover stock may still
                  appear at retailers. Older articles quoting prices for either line are out of date.
                </p>
              </div>

              <h2 id="bundled" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Bundled vs Unbundled Clinic Pricing</h2>

              <p className="text-gray-700 mb-4">
                A clinic price usually pays for professional services as well as the devices.
                According to the American Academy of Audiology, a <strong>bundled</strong>{' '}
                price generally covers most or all of: the evaluation, the devices, earmolds, the
                fitting fee, programming verification, batteries, accessories, the manufacturer
                warranty, loss-and-damage coverage, and office return visits for a set period. The
                initial diagnostic hearing test is generally billed separately. HearingTracker
                reports that bundles typically include anywhere from one to five years of follow-up
                service, depending on the provider.
              </p>

              <p className="text-gray-700 mb-4">
                An <strong>unbundled</strong> (itemized) quote lists the devices separately from the
                professional services. The Academy favors itemizing for transparency. Unbundling helps
                if you need few adjustments, want to compare device prices between clinics, or bought
                devices elsewhere and only need services. Before you sign, ask:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>How many follow-up visits are included, and for how many years? Is that term written into the contract?</li>
                <li>What does each visit cost after the included period, in person and remotely?</li>
                <li>Are loss-and-damage coverage and the warranty included, and is there a deductible?</li>
                <li>How long is the trial period, and is any part of the price non-refundable?</li>
                <li>What is the device price on its own if you decline the service package?</li>
              </ul>

              <h2 id="hearing-test" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Hearing Test Costs</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Costco:</strong> free for members 18 and older. Costco says the test only determines whether hearing aids could help.</li>
                <li><strong>Apple Hearing Test:</strong> no separate fee if you own AirPods Pro 2 or AirPods Pro 3 and a compatible iPhone or iPad. Apple says it takes about five minutes and is intended for people 18 and older.</li>
                <li><strong>University teaching clinics:</strong> often publish fees. For example, the George Washington University Speech &amp; Hearing Center lists a complete audiological evaluation at $235-$280 and a hearing aid evaluation with demonstration at $250.</li>
                <li><strong>Private audiology and ENT offices:</strong> set their own cash fees. Ask for the self-pay price, and whether the test fee is credited if you buy hearing aids there.</li>
              </ul>

              <p className="text-gray-700 mb-4">
                If you have Medicare, Part B covers a diagnostic hearing exam when your doctor orders
                it to find out whether you need medical treatment; you generally pay 20% of the
                Medicare-approved amount after the Part B deductible. Exams done only to fit hearing
                aids are not covered.
              </p>

              <h2 id="coverage" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medicare, VA, State Mandates and HSA/FSA</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Medicare and Medicare Advantage</h3>
              <p className="text-gray-700 mb-4">
                Original Medicare does not cover hearing aids or exams for fitting them, and Medigap
                plans generally don&apos;t cover hearing aids either. That is different from some other
                age-related care. Medicare Part B covers cataract surgery as medically necessary, for
                example, as our <Link href="/guides/cataract-surgery-cost" className="text-blue-600 hover:underline">cataract surgery cost guide</Link>{' '}
                explains. Medicare Advantage plans can add hearing benefits: KFF reports that 98% of
                individual Medicare Advantage plans offered some hearing benefit in 2026. KFF notes a
                plan&apos;s hearing benefit may cover exams, hearing aids or both, and that some extra
                benefits require prior authorization, so read your plan&apos;s Evidence of Coverage
                before you shop.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Veterans</h3>
              <p className="text-gray-700 mb-4">
                According to the VA, all enrolled veterans are eligible for comprehensive hearing
                evaluations. If hearing aids are recommended and fitted, the VA says it provides the
                devices, repairs and future batteries at no charge as long as you stay eligible for
                VA care. Enrolled veterans can contact a VA audiology clinic directly without a
                primary care referral. Check with your VA medical center for current requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">State insurance mandates</h3>
              <p className="text-gray-700 mb-4">
                HearingTracker&apos;s 2026 tracker counts nine states that require some health plans to
                cover hearing aids for adults: Arkansas, Connecticut, Illinois, Maine, Minnesota, New
                Hampshire, Rhode Island, Vermont and Washington. Other states mandate coverage only for
                children, and the rules differ on age limits and dollar caps. Some plans, including
                self-funded employer plans, are exempt from state mandates. Other HearingTracker pages
                list fewer states, so confirm the current rule with your state insurance regulator
                and ask your insurer for the hearing aid benefit in writing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">HSA and FSA</h3>
              <p className="text-gray-700 mb-4">
                IRS Publication 502 lists hearing aids as a medical expense, along with the batteries,
                repairs and maintenance needed to operate them. Publication 969 says HSA-qualified
                expenses are generally those that would qualify for that deduction. OTC hearing aids
                and Costco or clinic pairs are typically straightforward. Consumer earbuds with a
                hearing aid feature are a dual-purpose item, and some administrators ask for
                documentation. Our <Link href="/guides/hsa-letter-of-medical-necessity-rules" className="text-blue-600 hover:underline">guide to HSA letters of medical necessity</Link>{' '}
                explains when that applies. Confirm with your plan before you buy.
              </p>

              <h2 id="ongoing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Batteries, Chargers and Ongoing Costs</h2>

              <p className="text-gray-700 mb-4">
                The sticker price is not the whole bill. Most current models in this guide are
                rechargeable. Costco&apos;s packages include a charger, and Lexie lists up to 18 hours
                per charge for the B2 Plus. Replacement and travel chargers are extra; Costco lists
                the Sennheiser Sonite Rise Charger Go at $99.99. Models that use disposable zinc-air
                cells still need regular battery purchases. Costco sells 48-count packs in common
                sizes (10, 312 and 13), and batteries count as an HSA/FSA medical expense.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Protection plans:</strong> Lexie sells an optional $180 plan covering accidental damage for 24 months. Jabra Enhance includes 3 years of loss-and-damage cover in the price.</li>
                <li><strong>Supplies:</strong> domes, wax guards and cleaning kits are consumables. Jabra Enhance and MDHearing both say accessories and supply kits are not returnable.</li>
                <li><strong>Custom earmolds:</strong> Costco lists them as sold separately.</li>
                <li><strong>Follow-up care after a bundle ends:</strong> ask the clinic its per-visit fee before you buy, not after.</li>
              </ul>

              <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Hearing Aids</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Get tested first, cheaply.</strong> A free Costco test (members) or Apple&apos;s Hearing Test can tell you whether OTC devices are even in range. If they aren&apos;t, you have avoided buying the wrong product.</li>
                <li><strong>Match the route to your loss.</strong> OTC devices are for perceived mild to moderate loss and may not amplify enough for severe loss. If your loss is mild, an OTC pair with a long trial is a lower-cost first step before a multi-year clinic bundle.</li>
                <li><strong>Use the full trial window.</strong> Brands we checked allow 45 to 100 days, and Costco advertises a 180-day return policy. Put the deadline on your calendar: Jabra Enhance requires you to start a return by midnight Eastern time on the last day, and Eargo&apos;s 45 days start at delivery.</li>
                <li><strong>Ask clinics for an itemized quote.</strong> If you need few adjustments, an unbundled device-plus-visits price can cost less than a multi-year bundle.</li>
                <li><strong>Check every payer before paying cash.</strong> Look at Medicare Advantage allowances, VA eligibility, your state&apos;s mandate and your employer plan.</li>
                <li><strong>Pay with pre-tax dollars.</strong> HSA/FSA funds effectively discount the purchase by your tax rate.</li>
                <li><strong>Consider refurbished or previous-generation models.</strong> Lexie&apos;s outlet has listed factory-refurbished B2 Plus pairs at $749. Confirm the warranty that comes with outlet units.</li>
                <li><strong>Compare per pair, after promotions.</strong> Several brands showed different prices on different pages of their own sites. Use the checkout total.</li>
              </ul>

              <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to See a Clinician First (Red Flags)</h2>

              <p className="text-gray-700 mb-4">
                Hearing loss can be a sign of something treatable, such as earwax buildup, or of a
                more serious problem, such as a benign tumor on the hearing nerve. The FDA says a
                medical evaluation isn&apos;t required for adults before buying hearing aids, but advises
                consulting a doctor, preferably an ear specialist, if you have:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Fluid, pus or blood coming from the ear in the past six months</li>
                <li>Ear pain or discomfort</li>
                <li>A lot of earwax, or a suspected object in the ear canal</li>
                <li>Vertigo or severe dizziness</li>
                <li>Sudden, quickly worsening or fluctuating hearing loss in the past six months</li>
                <li>Hearing loss or ringing in only one ear, or a clear difference between ears</li>
              </ul>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
                <h3 className="text-lg font-bold text-red-900 mb-3">Sudden hearing loss is urgent</h3>
                <p className="text-sm text-red-800">
                  The NIDCD advises treating sudden hearing loss as a medical emergency and seeing a
                  doctor immediately. It is often in one ear, and people frequently mistake it for
                  allergies, a sinus infection or earwax. NIDCD says delaying diagnosis and treatment
                  may make treatment less effective, so it should start as soon as possible. Do not
                  buy an OTC device and wait to see if
                  it helps. Contact your doctor or an ENT the same day. If you can&apos;t get seen
                  quickly, an <Link href="/guides/urgent-care-cost-without-insurance" className="underline">urgent care clinic</Link>{' '}
                  can start the evaluation, and for any emergency call 911.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                If you or your family suspect your hearing loss is severe or profound, the FDA
                recommends seeing a licensed hearing health care professional, because OTC devices
                may not amplify enough to help. Children and teens under 18 need a prescription
                hearing aid. Talk to a licensed clinician about any new or changing hearing symptoms,
                and if a device ever seems to make your hearing worse, stop using it and get checked.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cash-pay guides</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Paying with HSA funds for dual-use items:</strong> <Link href="/guides/hsa-letter-of-medical-necessity-rules" className="text-blue-600 hover:underline">HSA letter of medical necessity rules</Link></li>
                <li><strong>Same-day evaluation for an ear problem:</strong> <Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">urgent care cost without insurance</Link></li>
                <li><strong>Another age-related cost with different Medicare rules:</strong> <Link href="/guides/cataract-surgery-cost" className="text-blue-600 hover:underline">cataract surgery cost</Link></li>
                <li><strong>Other in-person cash-pay care:</strong> the <Link href="/local-clinics" className="text-blue-600 hover:underline">local clinics hub</Link></li>
                <li><strong>More cash-pay services:</strong> the <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth and cash-pay services hub</Link></li>
              </ul>
            </div>

            {/* FAQ: visible block renders FAQ_ITEMS, the same array as the FAQPage schema */}
            <section id="faq" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div>
                {FAQ_ITEMS.map((item) => (
                  <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section className="mt-12 rounded-lg bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">How we checked these prices</h2>
              <p className="text-sm text-gray-700">
                VitalityScout research read each seller&apos;s public product, pricing and return-policy
                pages on {PRICES_CHECKED}. Where a seller showed different prices on different pages,
                we report both. We did not buy, test or wear these devices, and no clinician reviewed
                this page; clinical statements come from FDA, NIDCD, Medicare, VA and IRS materials.
                Survey averages are from HearingTracker and are labeled as such. Inclusion is not an
                endorsement. Read our <Link href="/editorial-policy" className="text-blue-700 underline">editorial policy</Link>.
              </p>
            </section>

            {/* Disclaimer */}
            <div className="mt-8 rounded-lg bg-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
              <p className="text-sm text-gray-600">
                This guide is for general information only and is not medical advice. VitalityScout is
                not affiliated with Costco, Jabra, Lexie, Sennheiser, MDHearing, Eargo, Apple, Sonova or
                HearingTracker. Prices are listed prices or survey averages that vary by state,
                warehouse, clinic, model and promotion and change over time. Always confirm the
                current price, return terms and warranty with the seller before you pay. OTC hearing
                aids and the AirPods Pro Hearing Aid feature are intended only for adults 18 and older
                with perceived mild to moderate hearing loss. They are not a substitute for a medical
                evaluation when you have ear pain, drainage, dizziness, one-sided symptoms, or sudden
                or worsening hearing loss. Talk to a licensed clinician, audiologist or ENT about your
                hearing, and check coverage details with Medicare, the VA or your insurer directly.
              </p>
            </div>

            {/* Sources */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {SOURCES.map((source) => (
                  <li key={source.url}>
                    •{' '}
                    <a
                      href={source.url}
                      data-link-purpose="source"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <RelatedGuides items={getRelatedGuides('/guides/hearing-aids-cost')} />

          <MedicalDisclaimer />

          <div className="mx-auto max-w-4xl px-4 py-8">
            <EmailCaptureCard
              title="Get Our Cash-Pay Price Report"
              description="Current cash prices for common care, including hearing aids, tests and telehealth."
              source="guide_hearing_aids_cost"
            />
          </div>
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
