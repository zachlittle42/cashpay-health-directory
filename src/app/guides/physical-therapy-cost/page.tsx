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

const PAGE_URL = 'https://vitalityscout.com/guides/physical-therapy-cost';
const PAGE_TITLE = 'Physical Therapy Cost Without Insurance (2026 Price Guide)';
const PAGE_DESCRIPTION =
  'Physical therapy without insurance: clinics that publish cash rates charge $150-$250 for an evaluation and $75-$200 per follow-up. 2026 prices and packages.';
const PRICES_CHECKED = 'October 18, 2026';

// Every price below comes from the provider's own published page, checked on
// the date above. Where a provider shows different prices on different pages,
// the card says so. Each card tells the reader to confirm before booking.
const PT_BRANDS: BrandCta[] = [
  {
    name: 'Luna (in-home PT)',
    providerId: 'luna-physical-therapy',
    category: 'physical-therapy',
    price: '$135/visit',
    blurb:
      'A licensed PT comes to your home in the metro areas Luna serves. Self-pay is listed at $135 per visit on most Luna pages (a few older pages show $125); Luna says it also accepts most major commercial plans and Medicare. Confirm the rate and your coverage when you book.',
    siteUrl: 'https://www.getluna.com/rates-and-insurance',
  },
  {
    name: 'Agile Virtual PT',
    providerId: 'agile-virtual-pt',
    category: 'physical-therapy',
    price: '$110 first / $90 after',
    blurb:
      'Video visits with a PT. Its insurance and pricing page lists $110 for the first visit and $90 per follow-up, but other Agile pages, including an FAQ, show lower follow-up rates of $70 to $80, so confirm the current price. It also bills insurance.',
    siteUrl: 'https://agilevirtualpt.com/insurance-and-pricing/',
  },
  {
    name: 'Virtual Physical Therapists',
    providerId: 'virtual-physical-therapists',
    category: 'physical-therapy',
    price: '$89/session',
    blurb:
      'Flat self-pay video sessions listed at $89, with no insurance or referral needed. It also works with employers and health plans. Ask about session length, HSA/FSA payment and whether it serves your state.',
    siteUrl: 'https://www.virtualphysicaltherapists.com/',
  },
  {
    name: 'Virtual Mechanical PT',
    providerId: 'virtual-mechanical-pt',
    category: 'physical-therapy',
    price: '$100/visit',
    blurb:
      'Self-pay video visits, no insurance or referral needed. The practice says it currently accepts only patients located in New York State.',
    siteUrl: 'https://www.virtualmechanicalpt.com/',
  },
  {
    name: 'Hinge Health',
    providerId: 'hinge-health',
    category: 'physical-therapy',
    price: '$0 if covered',
    blurb:
      'Digital exercise therapy with PT support, offered through employers and health plans. Its help center says the program is not available for individual purchase. Check your benefits portal.',
    siteUrl: 'https://www.hingehealth.com/',
  },
  {
    name: 'Sword Health',
    providerId: 'sword-health',
    category: 'physical-therapy',
    price: '$0 if covered',
    blurb:
      'Digital physical care sold through employers and health plans. Sword says it may be offered at no cost through your plan and has an eligibility check on its site.',
    siteUrl: 'https://swordhealth.com/individuals',
  },
];

// Published cash/self-pay rate sheets from independent and university clinics.
const CLINIC_RATES = [
  { clinic: 'Optimal Therapy', city: 'Las Vegas, NV', evaluation: '$150', followUp: '$75 (30 min) / $120 (60 min)', notes: 'Telehealth evaluation $125; prepaid bundles of 6-12 visits' },
  { clinic: 'UCSF PhysFit Health & Wellness Center', city: 'San Francisco, CA', evaluation: '$180 (60 min)', followUp: '$85 (30 min) / $155 (60 min)', notes: 'Self-pay only, does not bill insurance; superbill on request' },
  { clinic: 'HIDEF Physical Therapy', city: 'Seattle area, WA', evaluation: '$195', followUp: '$155', notes: '$145/visit in a 5-pack, $135/visit in a 10-pack' },
  { clinic: 'Chicago Physical Therapists', city: 'Chicago, IL', evaluation: '$195 (60 min)', followUp: '$175 (60 min)', notes: '90-minute extended evaluation $295; 4-, 8- and 10-packs' },
  { clinic: 'Core Physical Therapy', city: 'Seattle, WA', evaluation: '$240 (40 min)', followUp: '$180 (40 min)', notes: 'Self-pay rate for uninsured or non-covered visits' },
  { clinic: 'Ascent Physical Therapy', city: 'New York, NY', evaluation: '$250 (45 min)', followUp: '$200 (45 min)', notes: 'Out-of-network only; $150 no-show / late-cancel fee' },
];

// Single-visit follow-up price vs the clinic's own published package price.
const PACKAGES = [
  { clinic: 'Optimal Therapy (60 min)', single: '$120', pack: '6 visits for $620; 12 for $1,080', perVisit: '~$103; $90', saving: '$100; $360' },
  { clinic: 'UCSF PhysFit (60 min)', single: '$155', pack: '4 visits for $580', perVisit: '$145', saving: '$40' },
  { clinic: 'UCSF PhysFit (30 min)', single: '$85', pack: '4 visits for $300', perVisit: '$75', saving: '$40' },
  { clinic: 'HIDEF Physical Therapy', single: '$155', pack: '5-pack; 10-pack', perVisit: '$145; $135', saving: '$50; $200' },
  { clinic: 'Chicago Physical Therapists', single: '$175', pack: '4 for $640; 8 for $1,240; 10 for $1,500', perVisit: '$160; $155; $150', saving: '$60; $160; $250' },
];

const VIRTUAL_RATES = [
  { option: 'Optimal Therapy telehealth', price: '$125 evaluation; $65 per 30-min follow-up', notes: 'Nevada clinic; virtual 6- to 12-visit bundles from $370' },
  { option: 'Virtual Physical Therapists', price: '$89 per session', notes: 'No insurance or referral needed; ask about session length' },
  { option: 'Agile Virtual PT', price: '$110 first visit; $90 follow-up', notes: 'Pricing-page rates; other Agile pages list $70-$80 follow-ups; also bills insurance' },
  { option: 'Virtual Mechanical PT', price: '$100 per visit', notes: 'New York patients only; no referral or insurance needed' },
  { option: 'Luna (in-home, not virtual)', price: '$135 per visit', notes: 'PT visits your home; a few older Luna pages show $125' },
  { option: 'Hinge Health / Sword Health', price: '$0 through a sponsoring employer or plan', notes: 'Not sold to individuals (Hinge); eligibility check (Sword)' },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'APTA: State of Direct Access to Physical Therapist Services (2025 report)', url: 'https://www.apta.org/apta-and-you/news-publications/reports/2025/state-of-direct-access-to-physical-therapist-services' },
  { label: 'APTA: Direct Access by State', url: 'https://www.apta.org/advocacy/issues/direct-access-advocacy/direct-access-by-state' },
  { label: 'APTA: Cash-Based Practice and Medicare', url: 'https://www.apta.org/your-practice/payment/cash-practice/cash-based-practice-medicare' },
  { label: 'APTA: Becoming a Physical Therapist (DPT and licensure)', url: 'https://www.apta.org/your-career/careers-in-physical-therapy/becoming-a-pt' },
  { label: 'APTA: About PT and PTA Licensure', url: 'https://www.apta.org/your-practice/licensure/pt-and-pta-licensure' },
  { label: 'FSBPT: Telehealth in Physical Therapy (where the patient is located)', url: 'https://www.fsbpt.org/Portals/0/documents/free-resources/TelehealthInPhysicalTherapy2023.pdf' },
  { label: 'Medicare.gov: Physical therapy services coverage', url: 'https://www.medicare.gov/coverage/physical-therapy-services' },
  { label: 'CMS: 2026 Medicare Parts A & B Premiums and Deductibles', url: 'https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles' },
  { label: 'CMS: 2026 Annual Update of Per-Beneficiary Therapy Threshold Amounts (R13437CP)', url: 'https://www.cms.gov/files/document/r13437cp.pdf' },
  { label: 'CMS: Know your medical bill rights when not using insurance (good faith estimates)', url: 'https://www.cms.gov/medical-bill-rights/know-your-rights/no-insurance' },
  { label: 'IRS: Publication 502, Medical and Dental Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p502.pdf' },
  { label: 'IRS: Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans', url: 'https://www.irs.gov/publications/p969' },
  { label: 'MedlinePlus (NIH): Low back pain, acute (when to contact a provider)', url: 'https://medlineplus.gov/ency/article/007425.htm' },
  { label: 'MedlinePlus (NIH): When to use the emergency room, adult', url: 'https://medlineplus.gov/ency/patientinstructions/000593.htm' },
  { label: 'Dolot et al., Physical Therapy (2020): Factors Impacting PT Utilization for Nonspecific Low Back Pain', url: 'https://doi.org/10.1093/ptj/pzaa082' },
  { label: 'Optimal Therapy (Las Vegas): Cash Pay Rates', url: 'https://optimalptlv.com/cash-pay/' },
  { label: 'UCSF PhysFit Health & Wellness Center: Prices and Fees', url: 'https://ptrehab.ucsf.edu/content/prices-and-fees-0' },
  { label: 'HIDEF Physical Therapy: Pricing', url: 'https://www.hidefpt.com/pricing' },
  { label: 'HIDEF Physical Therapy: Free injury assessment', url: 'https://www.hidefpt.com/injuryassessment' },
  { label: 'Chicago Physical Therapists: Rates and Policies', url: 'https://www.chicagophysicaltherapists.com/rates-and-policies' },
  { label: 'Chicago Physical Therapists: Book an appointment (follow-up scheduling)', url: 'https://www.chicagophysicaltherapists.com/book-an-appointment' },
  { label: 'Core Physical Therapy (Seattle): Self-Pay Services', url: 'https://seattlephysicaltherapy.com/self-pay-services/' },
  { label: 'Ascent Physical Therapy (NYC): Pricing and Insurance', url: 'https://www.ascentptnyc.com/pricing' },
  { label: 'Ascent Physical Therapy (NYC): Scheduling and cancellation policy', url: 'https://www.ascentptnyc.com/schedule' },
  { label: 'Agile Virtual PT: Insurance and Pricing', url: 'https://agilevirtualpt.com/insurance-and-pricing/' },
  { label: 'Virtual Physical Therapists: Home (self-pay rate)', url: 'https://www.virtualphysicaltherapists.com/' },
  { label: 'Virtual Mechanical Physical Therapy: Home and pricing', url: 'https://www.virtualmechanicalpt.com/' },
  { label: 'Luna: Rates and Insurance', url: 'https://www.getluna.com/rates-and-insurance' },
  { label: 'Luna: FAQ (prescriptions and direct access)', url: 'https://www.getluna.com/faq' },
  { label: 'Hinge Health Help Center: How much does it cost?', url: 'https://help.hingehealth.com/en/support/solutions/articles/155000003410-how-much-does-it-cost-' },
  { label: 'Sword Health: For individuals', url: 'https://swordhealth.com/individuals' },
];

// Questions answered only from facts stated on this page. The visible FAQ
// block below renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does physical therapy cost without insurance?',
    answer:
      'At the clinics we found that publish cash rates, the first evaluation costs about $150 to $250 and each follow-up visit about $75 to $200, depending on the city and how long the session is. Optimal Therapy in Las Vegas lists $150 for an evaluation and $75 to $120 for a follow-up, Chicago Physical Therapists lists $195 and $175, and Ascent Physical Therapy in New York lists $250 and $200. Prices vary by location and change over time, so confirm the current rate with the clinic before you book.',
  },
  {
    question: 'How many physical therapy visits will I need, and what does a full course cost?',
    answer:
      'It depends on your condition and the plan of care your therapist sets. A 2020 study in the journal Physical Therapy of 7,244 US adults with nonspecific low back pain, treated at 80 clinics of one provider organization, found an average of 7.73 visits per episode of care. At the single-visit cash rates on this page, an evaluation plus seven follow-ups works out to roughly $675 to $1,650 before any package discount.',
  },
  {
    question: 'Why do cash-only physical therapy clinics charge more per visit?',
    answer:
      'They usually sell a longer, one-on-one session with the licensed therapist. Ascent Physical Therapy, which is out-of-network with every plan, says its model allows one-on-one care and that you will never be treated by an aide or assistant. Some cash clinics also help you claim out-of-network benefits: UCSF PhysFit provides a superbill on request, and Chicago Physical Therapists submits claims and passes on any amount your plan pays. A higher price per visit does not by itself prove you will need fewer visits.',
  },
  {
    question: 'Can I see a physical therapist without a doctor referral?',
    answer:
      'Usually, yes, for at least an evaluation. APTA reports that as of July 1, 2025, all 50 states, the District of Columbia and the US Virgin Islands allow either provisional or unrestricted direct access. APTA counts about 20 states as unrestricted; the rest have provisions such as time or visit limits, or a referral requirement for certain procedures. Some health systems and clinics still require a referral by their own policy, and Medicare requires a doctor or other qualified provider to certify that you need therapy.',
  },
  {
    question: 'Is virtual physical therapy cheaper than going to a clinic?',
    answer:
      'Per visit, usually. Self-pay video visits we found cost $89 a session at Virtual Physical Therapists, $100 at Virtual Mechanical PT (New York patients only), and $110 for a first visit then $90 per follow-up on the Agile Virtual PT pricing page. Hinge Health and Sword Health can cost $0, but only if your employer or health plan sponsors them; Hinge says its program is not available for individual purchase. Whatever service you use, the therapist must be authorized to practice in the state where you are physically located.',
  },
  {
    question: 'Can I use an HSA or FSA to pay for physical therapy?',
    answer:
      'Generally yes, when the therapy is medical treatment. IRS Publication 502 counts amounts paid for therapy received as medical treatment as medical expenses, and IRS Publication 969 ties HSA-qualified expenses to that same definition. Care aimed at general fitness rather than a condition does not qualify. UCSF PhysFit and Ascent Physical Therapy say they accept HSA and FSA payment, and Optimal Therapy lists FSA. Confirm with your plan administrator and keep an itemized receipt.',
  },
  {
    question: 'Does Medicare cover physical therapy, and can I pay cash instead?',
    answer:
      'Medicare Part B covers medically necessary outpatient physical therapy. In 2026 you pay 20% of the Medicare-approved amount after the $283 Part B deductible, and there is no annual dollar cap; above $2,480 in combined physical and speech therapy for the year, your therapist must confirm the care is medically necessary. Physical therapists cannot opt out of Medicare, so a therapist giving you a Medicare-covered service generally must be enrolled and bill Medicare rather than charge you cash privately. Ask any clinic whether it is a Medicare provider before you book.',
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

const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const td = 'border border-gray-300 px-4 py-3';
const tdName = 'border border-gray-300 px-4 py-3 font-medium';
const inlineLink = 'text-blue-600 hover:underline';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article' },
  twitter: { card: 'summary', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

export default function PhysicalTherapyCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Physical Therapy Cost Without Insurance: Cash Prices per Visit and per Course (2026)',
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
      { '@type': 'ListItem', position: 3, name: 'Physical Therapy Cost', item: PAGE_URL },
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
                <span className="text-gray-900">Physical Therapy Cost</span>
              </nav>
            </div>
          </div>

          {/* Hero */}
          <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
                &larr; Local Cash-Pay Clinics Hub
              </Link>

              <div className="mb-4">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Cost Guide
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Physical Therapy Cost Without Insurance: Cash Prices per Visit and per Course (2026)
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                The price that matters is not one visit. It is the evaluation plus every follow-up in
                your plan of care. Here is what clinics that publish cash rates actually charge, what a
                full course adds up to, and the cheaper routes most people overlook.
              </p>

              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> without insurance, clinics that publish cash rates
                  charge about <strong>$150 to $250 for the first evaluation</strong> and{' '}
                  <strong>$75 to $200 per follow-up</strong>, depending on city and session length. An
                  evaluation plus seven follow-ups, close to the average episode in one large study,
                  comes to roughly <strong>$675 to $1,650</strong> at those rates. The cheapest
                  legitimate routes are $0 through Hinge Health or Sword if your employer or plan
                  already sponsors them, a prepaid package at an independent clinic, or self-pay video
                  visits with a licensed PT, listed at <strong>$65 to $125</strong>.
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
                  <div className="font-bold text-blue-600 mb-2">In-clinic cash PT</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Evaluation ~$150-$250 listed</li>
                    <li>• Follow-ups ~$75-$200 listed</li>
                    <li>• Hands-on care and equipment</li>
                    <li>• Packages cut $10-$30 per visit</li>
                    <li>• No referral needed in most cases</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-indigo-600 mb-2">Self-pay virtual PT</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• ~$65-$125 per video visit listed</li>
                    <li>• Exercise coaching, no hands-on</li>
                    <li>• PT must be licensed for your state</li>
                    <li>• Good for follow-ups and home programs</li>
                    <li>• Ask about HSA/FSA card payment</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="font-bold text-green-600 mb-2">Employer digital PT</div>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Hinge Health, Sword Health</li>
                    <li>• $0 when your employer or plan pays</li>
                    <li>• Not sold to individuals (Hinge)</li>
                    <li>• Check your benefits portal first</li>
                    <li>• App-guided exercise with PT support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-blue-600 mb-1">Book an in-person cash PT clinic if:</div>
                  <ul className="text-gray-700 space-y-1">
                    <li>• You need a hands-on exam, manual therapy or equipment</li>
                    <li>• You are recovering from surgery or a recent injury</li>
                    <li>• You want a published evaluation and package price up front</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-green-600 mb-1">Try virtual or employer PT first if:</div>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Your employer or plan already offers Hinge or Sword</li>
                    <li>• You mainly need a guided home exercise program</li>
                    <li>• You have none of the red flags listed below</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#clinic-prices" className={inlineLink}>1. Published cash prices at PT clinics</a></li>
                <li><a href="#eval-vs-followup" className={inlineLink}>2. Evaluation vs follow-up visits</a></li>
                <li><a href="#full-course" className={inlineLink}>3. What a full course of PT costs</a></li>
                <li><a href="#cash-clinics" className={inlineLink}>4. Why cash-only clinics charge more per visit</a></li>
                <li><a href="#packages" className={inlineLink}>5. Packages and prepaid bundles</a></li>
                <li><a href="#virtual" className={inlineLink}>6. Virtual, in-home and employer-sponsored PT</a></li>
                <li><a href="#direct-access" className={inlineLink}>7. Do you need a referral? Direct access by state</a></li>
                <li><a href="#medicare" className={inlineLink}>8. Medicare and physical therapy</a></li>
                <li><a href="#hsa-fsa" className={inlineLink}>9. Paying with an HSA or FSA</a></li>
                <li><a href="#compare" className={inlineLink}>10. How to compare PT providers</a></li>
                <li><a href="#save" className={inlineLink}>11. How to save on physical therapy</a></li>
                <li><a href="#red-flags" className={inlineLink}>12. When to see a clinician first</a></li>
              </ul>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                Physical therapy is sold by the visit but used by the course. One evaluation and a
                handful of follow-ups is typical, so a $175 visit becomes a four-figure bill fast. The
                good news is that many independent clinics now publish self-pay rates, and the spread
                between them is wide enough that a few phone calls can save you hundreds of dollars.
                Every price below comes from the provider&apos;s own published page. Use them as
                anchors, not quotes, because rates differ by location and change over time.
              </p>

              <h2 id="clinic-prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Cash Prices at PT Clinics</h2>

              <p className="text-gray-700 mb-4">
                These six clinics post their self-pay rates online. They are a sample from big and
                mid-sized metros, not a national survey, but together they show the usual shape: an
                evaluation that costs more than any single follow-up, and follow-up prices that rise
                with session length and local cost of living.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Clinic</th>
                      <th className={th}>City</th>
                      <th className={th}>Evaluation</th>
                      <th className={th}>Follow-up visit</th>
                      <th className={th}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CLINIC_RATES.map((row, index) => (
                      <tr key={row.clinic} className={index % 2 === 1 ? 'bg-gray-50' : undefined}>
                        <td className={tdName}>{row.clinic}</td>
                        <td className={td}>{row.city}</td>
                        <td className={td}>{row.evaluation}</td>
                        <td className={td}>{row.followUp}</td>
                        <td className={td}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>The pattern:</strong> evaluations ran from $150 to $250 and follow-ups from $75
                to $200 across these lists. The lowest follow-up prices are for 30-minute sessions; the
                highest are for 40- to 45-minute sessions in Seattle and New York. A
                hospital-owned outpatient clinic may price differently from an independent practice, so
                if you are quoted by a hospital system, ask whether any separate facility charge is
                added to the therapist&apos;s fee.
              </p>

              <h2 id="eval-vs-followup" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Evaluation vs Follow-Up Visits</h2>

              <p className="text-gray-700 mb-4">
                The first visit is an evaluation: the therapist takes your history, examines how you
                move, tests strength and range of motion, and sets a plan of care with goals and a
                visit schedule. Because it is longer and does more, it is the most expensive single
                visit. Optimal Therapy charges $150 for it, UCSF PhysFit $180 for 60 minutes, and
                Chicago Physical Therapists $195 for an hour, with a 90-minute extended evaluation at $295.
              </p>
              <p className="text-gray-700 mb-4">
                Follow-ups are where the plan happens: exercise progressions, hands-on work and
                re-testing. Compare them by the minute, not just the sticker. UCSF lists $85 for 30
                minutes and $155 for 60; Optimal lists $75 for 30 and $120 for 60; Chicago Physical
                Therapists charges $175 for a one-hour follow-up. Core Physical Therapy
                in Seattle prices a 40-minute follow-up at $180, and Ascent in New York a 45-minute
                follow-up at $200. If your therapist agrees a shorter session is enough for where you are
                in recovery, it can cut the bill by a third or more.
              </p>

              <h2 id="full-course" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Full Course of PT Costs</h2>

              <p className="text-gray-700 mb-4">
                How many visits you need depends on your condition, your goals and how you respond, and
                your therapist should tell you the expected number at the evaluation. For a data point:
                a 2020 study in <em>Physical Therapy</em>, the journal of the American Physical Therapy
                Association, followed 7,244 US adults with nonspecific low back pain treated at 80
                clinics of one provider organization and found an average of <strong>7.73 visits per
                episode of care</strong>. The same study found that patients paying more out of pocket
                per visit tended to have fewer visits, which is an association, not proof that they got
                better faster. Chicago Physical Therapists asks new patients to book four to six weekly
                follow-ups after the evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                Using eight visits (one evaluation plus seven follow-ups) as a round example, here is
                what the single-visit published rates add up to before any package discount:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Clinic</th>
                      <th className={th}>Math (evaluation + 7 follow-ups)</th>
                      <th className={th}>8-visit total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className={tdName}>Optimal Therapy (30-min follow-ups)</td><td className={td}>$150 + 7 × $75</td><td className={td}>$675</td></tr>
                    <tr className="bg-gray-50"><td className={tdName}>UCSF PhysFit (30-min follow-ups)</td><td className={td}>$180 + 7 × $85</td><td className={td}>$775</td></tr>
                    <tr><td className={tdName}>Optimal Therapy (60-min follow-ups)</td><td className={td}>$150 + 7 × $120</td><td className={td}>$990</td></tr>
                    <tr className="bg-gray-50"><td className={tdName}>UCSF PhysFit (60-min follow-ups)</td><td className={td}>$180 + 7 × $155</td><td className={td}>$1,265</td></tr>
                    <tr><td className={tdName}>HIDEF Physical Therapy</td><td className={td}>$195 + 7 × $155</td><td className={td}>$1,280</td></tr>
                    <tr className="bg-gray-50"><td className={tdName}>Chicago Physical Therapists</td><td className={td}>$195 + 7 × $175</td><td className={td}>$1,420</td></tr>
                    <tr><td className={tdName}>Core Physical Therapy</td><td className={td}>$240 + 7 × $180</td><td className={td}>$1,500</td></tr>
                    <tr className="bg-gray-50"><td className={tdName}>Ascent Physical Therapy</td><td className={td}>$250 + 7 × $200</td><td className={td}>$1,650</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                If PT follows surgery, the course is often longer, and the cost question changes: some
                surgical bundles fold therapy in. Our{' '}
                <Link href="/guides/knee-replacement-cost-usa" className={inlineLink}>knee replacement cost guide</Link>{' '}
                covers what cash surgical bundles typically include, so ask before you buy therapy
                separately.
              </p>

              <h2 id="cash-clinics" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Cash-Only Clinics Charge More per Visit</h2>

              <p className="text-gray-700 mb-4">
                Clinics that stay out of insurance networks set their own prices and usually sell a
                different product: a longer session with the licensed therapist the whole time. Ascent
                Physical Therapy, which is not in-network with any plan, says its model allows
                one-on-one care and states that you will never be treated by an aide or assistant. That is the
                clinic&apos;s own description, but it is the right question to ask anywhere: who will
                treat me, and for how many minutes?
              </p>
              <p className="text-gray-700 mb-4">
                Paying cash does not always mean giving up your insurance. UCSF PhysFit does not bill
                insurance but provides a superbill on request so you can file an out-of-network claim
                yourself. Chicago Physical Therapists, which is in network only with certain Blue Cross
                Blue Shield PPO and Choice plans, says that for other plans it collects its out-of-pocket
                rate up front, submits the claim for you, and passes along
                whatever your plan pays. Whether a cash clinic gets you
                better in fewer visits is not something published prices can show, so judge it by the
                plan of care: ask how many visits the therapist expects and what progress would end
                treatment.
              </p>

              <h2 id="packages" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Packages and Prepaid Bundles</h2>

              <p className="text-gray-700 mb-4">
                Most cash clinics discount follow-ups when you prepay. The savings are real but modest,
                and they only pay off if you use every visit:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Clinic</th>
                      <th className={th}>Single follow-up</th>
                      <th className={th}>Package</th>
                      <th className={th}>Per visit</th>
                      <th className={th}>Saving vs single</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PACKAGES.map((row, index) => (
                      <tr key={row.clinic} className={index % 2 === 1 ? 'bg-gray-50' : undefined}>
                        <td className={tdName}>{row.clinic}</td>
                        <td className={td}>{row.single}</td>
                        <td className={td}>{row.pack}</td>
                        <td className={td}>{row.perVisit}</td>
                        <td className={td}>{row.saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                Optimal Therapy&apos;s bundle prices come from its cash-pay page, where the savings it
                lists match its 60-minute follow-up rate; it also lists separate, lower-priced 30-minute
                in-person bundles. Confirm which session length a bundle covers before you buy.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-2">Before you prepay</h4>
                <p className="text-gray-700">
                  Ask three things: whether unused visits are refundable if you recover early or stop,
                  whether the package expires, and what a missed visit costs. Ascent, for example,
                  charges $150 for a no-show or a cancellation within 24 hours. Optimal Therapy requires
                  an evaluation before any follow-up visit, so budget for the evaluation on top of a
                  bundle.
                  A large package is only cheaper than paying per visit if your plan of care is likely to
                  use it.
                </p>
              </div>

              <h2 id="virtual" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Virtual, In-Home and Employer-Sponsored PT</h2>

              <p className="text-gray-700 mb-4">
                Video visits cannot deliver hands-on treatment, but for exercise-based care and
                follow-ups they are cheaper per visit. In-home PT costs about the same as a clinic but
                saves travel. And two of the biggest names in digital PT are not sold to consumers at
                all.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className={th}>Option</th>
                      <th className={th}>Published price</th>
                      <th className={th}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VIRTUAL_RATES.map((row, index) => (
                      <tr key={row.option} className={index % 2 === 1 ? 'bg-gray-50' : undefined}>
                        <td className={tdName}>{row.option}</td>
                        <td className={td}>{row.price}</td>
                        <td className={td}>{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>Hinge Health and Sword Health are mostly employer-only.</strong> Hinge&apos;s help
                center says its programs are not available for individual purchase; access comes
                through a sponsoring employer or health plan, which pays for it. Sword says it may be
                offered at no cost through your employer or health plan and runs an eligibility check
                on its site. If either is in your benefits, it is the cheapest route in this guide, so
                check your benefits portal or ask HR before paying cash anywhere.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Licensing still applies online.</strong> The Federation of State Boards of
                Physical Therapy says a provider must be legally authorized to practice in the state
                where the patient is physically located, so confirm that a virtual service covers your
                state before you book. Check Agile Virtual PT&apos;s site for the states it currently
                serves; Virtual Mechanical PT says it currently accepts only New York patients.
              </p>

              <BrandCtaGrid
                title="Cash-accessible and employer-sponsored PT options"
                intro="Prices are the self-pay rates each provider lists on its own site, checked on the date at the top of this page. Hinge Health and Sword Health are $0 only when an employer or health plan sponsors them. Confirm price, state availability and therapist licensure before you book."
                brands={PT_BRANDS}
                hubHref="/local-clinics"
                hubLabel="Browse local cash-pay clinics →"
              />

              <h2 id="direct-access" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Do You Need a Referral? Direct Access by State</h2>

              <p className="text-gray-700 mb-4">
                Skipping a physician visit just to get a referral can save you a separate bill. The
                American Physical Therapy Association reports that as of July 1, 2025, patients in all
                50 states, the District of Columbia and the US Virgin Islands have either provisional or
                unrestricted direct access to physical therapists for evaluation and treatment. APTA
                counts about 20 states with fully unrestricted access (its 2025 report and its
                state-by-state page differ by one state). The remaining states, plus DC and the Virgin
                Islands, attach provisions, such as a time or visit limit before a referral is needed,
                or a referral for specific procedures.
              </p>
              <p className="text-gray-700 mb-4">
                Two catches. APTA notes that some health systems and clinics still require a physician
                referral as internal policy, even where state law does not. And if you plan to use
                insurance, your plan may have its own referral or authorization rules. Luna, for
                example, says no prescription is needed to start but that how long you can be seen
                without one depends on your state. Check APTA&apos;s state-by-state page for your rules.
              </p>

              <h2 id="medicare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medicare and Physical Therapy</h2>

              <p className="text-gray-700 mb-4">
                If you have Medicare, cash pricing mostly does not apply. Part B covers medically
                necessary outpatient physical therapy, and after the 2026 Part B deductible of $283 you
                pay 20% of the Medicare-approved amount. Medicare.gov says there is no limit on how much
                Medicare pays for medically necessary outpatient therapy in a calendar year. In 2026, once
                your combined physical therapy and speech-language pathology charges pass $2,480, your
                therapist must add a modifier to claims confirming the care is medically necessary. Your
                doctor or another qualified provider must certify that you need therapy.
              </p>
              <p className="text-gray-700 mb-4">
                Federal law does not let physical therapists opt out of Medicare. APTA explains that a
                PT providing a Medicare-covered service to a beneficiary must be enrolled in Medicare
                and submit the claim, so a cash-only clinic generally cannot just charge you privately
                for covered therapy. If a clinic expects Medicare to deny a service as not medically
                necessary, it must give you a written notice, called an Advance Beneficiary Notice,
                before you agree to pay for it yourself. Ask any clinic whether it is a Medicare provider
                before you book.
              </p>

              <h2 id="hsa-fsa" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Paying With an HSA or FSA</h2>

              <p className="text-gray-700 mb-4">
                IRS Publication 502 says amounts you pay for therapy received as medical treatment can
                be included in medical expenses. Publication 969 defines HSA-qualified expenses by the
                same standard. The line is purpose: care to alleviate or prevent a physical condition
                qualifies, while spending that is merely beneficial to general health does not. UCSF
                PhysFit and Ascent say they accept HSA and FSA payment, and Optimal Therapy lists FSA
                cards among its payment methods. If you plan to use a video-visit service, ask whether
                it takes HSA or FSA cards before you book. When a service sits between therapy and fitness, your plan may
                ask for documentation; our{' '}
                <Link href="/guides/hsa-letter-of-medical-necessity-rules" className={inlineLink}>guide to HSA letters of medical necessity</Link>{' '}
                explains when you need one.
              </p>

              <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Compare PT Providers</h2>

              <p className="text-gray-700 mb-4">
                Start with the credential. APTA says new physical therapists must earn a Doctor of
                Physical Therapy degree from an accredited program and pass the national licensure
                exam, and every state requires PTs to be licensed. Chiropractors, massage therapists,
                athletic trainers and personal trainers can be useful, but they are different
                professions with different training, and their visits are not physical therapy. You can
                verify a PT&apos;s license with your state&apos;s licensing board.
              </p>
              <p className="text-gray-700 mb-2">Then ask every clinic the same questions:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
                <li>What is the cash price for the evaluation and for each follow-up, and how long is each session?</li>
                <li>Will a licensed PT treat me for the full session, or will part of it be with an assistant or aide?</li>
                <li>How many visits do you expect, and what result would end treatment?</li>
                <li>Do you offer packages, and are unused visits refundable?</li>
                <li>What do no-shows and late cancellations cost?</li>
                <li>Can you give me a superbill for out-of-network reimbursement, and are you a Medicare provider?</li>
              </ol>

              <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Physical Therapy</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Check employer benefits first.</strong> If Hinge Health or Sword Health is offered through your job or plan, it can cost you $0.</li>
                <li><strong>Ask for a good faith estimate.</strong> If you are uninsured or not using insurance and schedule at least three business days ahead, or ask, providers must give you a written estimate. If the bill comes in at least $400 above it, you can start a federal dispute within 120 days of the bill. If you have Medicare, Medicaid or another federal program, check the CMS page in our sources for how these rules apply to you.</li>
                <li><strong>Choose shorter follow-ups when appropriate.</strong> A 30-minute follow-up at Optimal ($75) or UCSF ($85) costs roughly 40% less than the same clinic&apos;s 60-minute rate.</li>
                <li><strong>Prepay only what you will use.</strong> Packages save about $10 to $30 per visit at the clinics above; skip them if your plan of care is short or uncertain.</li>
                <li><strong>Mix in video visits.</strong> Once your exercise program is set, virtual follow-ups at $65 to $100 can replace some in-clinic visits, if your therapist agrees.</li>
                <li><strong>Look for a free screen.</strong> HIDEF Physical Therapy advertises a free injury assessment with a Doctor of Physical Therapy at some Seattle-area locations. Other clinics may offer something similar; ask what it includes and whether it is a sales consultation.</li>
                <li><strong>Pay with pre-tax dollars.</strong> HSA or FSA funds effectively discount treatment by your tax rate.</li>
                <li><strong>Do the home program.</strong> The exercises between visits are part of the plan of care, and visits are the expensive part.</li>
              </ul>

              <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to See a Clinician First: Red Flags</h2>

              <p className="text-gray-700 mb-4">
                Direct access lets you start with a physical therapist, but some symptoms need a
                physician first. For back pain, MedlinePlus (from the National Institutes of Health)
                says to contact a provider right away if you have:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Back pain after a hard hit or fall</li>
                <li>Loss of control over urine or stool</li>
                <li>Unexplained fever with back pain</li>
                <li>Weakness or numbness in the buttocks, thigh, leg or pelvis</li>
                <li>Leg pain that extends below the knee</li>
                <li>Pain that keeps you awake or gets worse when you lie down</li>
                <li>Redness or swelling over the spine</li>
                <li>Blood in the urine or painful urination</li>
                <li>A history of cancer</li>
              </ul>
              <p className="text-gray-700 mb-4">
                MedlinePlus also advises calling a provider about unintentional weight loss, steroid or
                injected drug use, or pain that has lasted more than four weeks. For a condition that
                could cause death or permanent disability, call 911.
              </p>
              <p className="text-gray-700 mb-4">
                Outside back pain, get a medical evaluation before booking therapy if you cannot put
                weight on an injured limb, a joint looks deformed, or swelling is severe after a fall or
                impact, since a fracture or torn ligament may need imaging first. After surgery, follow
                your surgeon&apos;s instructions on when therapy should start and what to avoid, and
                report new calf pain or swelling, a wound that looks infected, or a fever to the
                surgical team rather than waiting for your next PT visit. If a fresh injury may need an x-ray,
                our{' '}
                <Link href="/guides/urgent-care-cost-without-insurance" className={inlineLink}>urgent care cost guide</Link>{' '}
                covers self-pay imaging, and if a clinician orders advanced imaging, see our{' '}
                <Link href="/guides/mri-cost-without-insurance" className={inlineLink}>MRI cost guide</Link>{' '}
                before you book. Talk to a licensed clinician if you are unsure whether therapy is the
                right first step.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Compare Local Cash-Pay Clinics</h3>
              <p className="mb-6 text-blue-100">
                Browse independent clinics that publish self-pay prices for in-person services.
              </p>
              <Link
                href="/local-clinics"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Browse Local Clinics
              </Link>
            </div>

            {/* FAQ — visible block renders FAQ_ITEMS, the same array as the FAQPage schema */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div>
                {FAQ_ITEMS.map((item) => (
                  <FAQItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section className="mt-12 rounded-xl bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-gray-900">How we checked these prices</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                VitalityScout research checked the self-pay prices each clinic and service publishes on
                its own site, most recently on {PRICES_CHECKED}. Some of those pages may not have been
                updated recently. Where a provider showed different prices on different pages, we used
                its pricing page and noted the difference. The clinic list is a sample of
                practices that publish rates, not a national survey, and the eight-visit totals are our
                arithmetic from those rates. We did not book visits, and no clinician reviewed this
                page; coverage and regulatory statements come from APTA, FSBPT, Medicare, CMS, IRS and
                MedlinePlus materials. Inclusion is not an endorsement. Read our{' '}
                <Link href="/editorial-policy" className="text-blue-700 underline">editorial policy</Link>.
              </p>
            </section>

            {/* Disclaimer */}
            <div className="mt-8 rounded-lg bg-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
              <p className="text-sm text-gray-600">
                This guide is for general information only and is not medical advice. VitalityScout is
                not affiliated with any clinic or service named here, including Luna, Agile Virtual PT,
                Virtual Physical Therapists, Virtual Mechanical PT, Hinge Health, Sword Health, UCSF,
                Optimal Therapy, HIDEF Physical Therapy, Chicago Physical Therapists, Core Physical
                Therapy or Ascent Physical Therapy. Prices are published self-pay rates that vary by
                location, session length and package terms and change over time; always confirm the
                current price, refund and cancellation terms with the provider before you pay. The
                number of visits you need depends on your condition and your therapist&apos;s plan of
                care, and no price on this page predicts your results. Direct access, telehealth and
                Medicare rules differ by state and plan; check them for your situation. If you have any
                of the red-flag symptoms above, a recent serious injury, or symptoms that are getting
                worse, talk to a licensed physician or other qualified clinician before starting
                therapy.
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

          <RelatedGuides items={getRelatedGuides('/guides/physical-therapy-cost')} />

          <MedicalDisclaimer />

          <div className="mx-auto max-w-4xl px-4 py-8">
            <EmailCaptureCard
              title="Get Our Cash-Pay Price Report"
              description="Current cash prices for common care, including physical therapy, imaging and telehealth."
              source="guide_physical_therapy_cost"
            />
          </div>
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
