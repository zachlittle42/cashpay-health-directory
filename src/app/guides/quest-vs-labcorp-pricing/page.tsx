import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Quest vs Labcorp Prices (2026): Self-Pay From $29' },
  alternates: { canonical: PAGE_URL },
  description:
    'Quest vs Labcorp self-pay prices (Sept 2026): CBC $29 at both, Quest CMP $49 / lipid $59, Labcorp Standard panel $99. Compare sites and verify in each cart.',
};

const FAQ_ITEMS = [
  {
    question: 'Is Quest Diagnostics cheaper than Labcorp for self-pay lab tests?',
    answer:
      `Neither is universally cheaper. As of ${AS_OF}, both questhealth.com and Labcorp OnDemand list a CBC at $29. Quest lists a CMP at $49 plus a $6 Physician Service Fee, and a lipid panel at $59. Labcorp OnDemand lists a CMP at $49 and a Standard Health Test (CBC + CMP + urinalysis) at $99. Head-to-head line items usually land within a few dollars; the bigger lever is buying the exact test online the same week and checking which draw site is closest. These are published storefront prices that change — confirm the live cart on each provider's site before you buy.`,
  },
  {
    question: 'Can I order lab tests from Quest or Labcorp without a doctor?',
    answer:
      'Yes. Both questhealth.com and Labcorp OnDemand let you purchase many tests online without a doctor visit; an independent physician reviews and authorizes the order as part of the purchase. You then go to a collection site or use an at-home kit. This is a convenience pathway, not a substitute for clinical care — abnormal results should be reviewed with your own clinician.',
  },
  {
    question: 'How much does a basic blood panel cost without insurance at Quest or Labcorp?',
    answer:
      `As of ${AS_OF}, Labcorp OnDemand lists its Standard Health Test at $99 and its Comprehensive Health Test at $169 on wellness pages. Quest Health lists a Men's or Women's Basic Health Profile at $199, Comprehensive profiles at $329, and the Elite Health Profile at $399 plus a $6 Physician Service Fee. Buying CBC, CMP, and lipids as separate line items can be cheaper or more expensive than a bundle depending on sales. Confirm the exact price in the provider's cart.`,
  },
  {
    question: 'Do Quest Health and Labcorp OnDemand accept HSA or FSA?',
    answer:
      'Both generally let you pay with HSA or FSA funds, and lab testing is typically an eligible expense. Labcorp OnDemand states most of its health tests are HSA/FSA eligible; Quest notes you may be able to use FSA/HSA but advises checking your plan. Confirm eligibility with your plan administrator before assuming a test qualifies.',
  },
  {
    question: 'How fast do Quest and Labcorp self-pay results come back?',
    answer:
      'Labcorp OnDemand states most results are available within 1-2 days of your sample arriving at the lab, and its Standard Health Test listing shows a 1-day turnaround. Quest Health states results are available online as soon as they are ready; Health Profile pages note most results in about 5 business days. Specialized tests can take longer. Check the listing for the test you are buying.',
  },
  {
    question: 'Quest vs Labcorp: which has more locations near me?',
    answer:
      'Coverage is comparable. Quest advertises 2,000+ patient locations nationwide, and Labcorp advertises over 2,000 Patient Service Centers plus 400+ Labcorp at Walgreens sites. The practical answer is local: check both provider locators for your ZIP code. Quest Health first-purchase promo terms have listed exclusions in states such as Arizona, Hawaii, and Pennsylvania — availability and offers vary, so confirm on questhealth.com for your address.',
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

export default function QuestVsLabcorpPricing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Quest Diagnostics vs Labcorp: Self-Pay Lab Pricing Comparison',
    description:
      'A practical comparison of published self-pay lab test prices at Quest Diagnostics (questhealth.com) versus Labcorp OnDemand — starting costs, panel pricing, locations, turnaround, and how to decide.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Self-pay clinical laboratory testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Quest Health — shop tests and product pages', url: 'https://www.questhealth.com/shop-tests' },
      { '@type': 'CreativeWork', name: 'Quest Health — Comprehensive Metabolic Panel', url: 'https://www.questhealth.com/product/comprehensive-metabolic-panel-cmp/10231M.html' },
      { '@type': 'CreativeWork', name: 'Quest Health — Elite Health Profile', url: 'https://www.questhealth.com/product/elite-health-profile/18386M.html' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — purchase your own health tests', url: 'https://www.ondemand.labcorp.com/' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Standard Health Test', url: 'https://www.ondemand.labcorp.com/lab-tests/basic-wellness' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Quest vs Labcorp Pricing', item: PAGE_URL },
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
              <span className="text-gray-900">Quest vs Labcorp Pricing</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-Pay Labs Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quest vs Labcorp Prices (2026): Self-Pay From $29
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The two largest US labs both sell tests directly. Here is what questhealth.com and
              Labcorp OnDemand published on {AS_OF} — line-item prices, panel bundles, locations,
              and how to decide.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Quest Health and Labcorp OnDemand both list a CBC at $29</strong>.
                Quest lists a CMP at <strong>$49 + $6 Physician Service Fee</strong> and a lipid panel
                at <strong>$59</strong>. Labcorp lists a CMP at <strong>$49</strong> and a Standard
                Health Test at <strong>$99</strong>. Neither is reliably cheaper on every test; price
                the exact order the same week and pick the closer draw site. These are published
                storefront prices, not a guaranteed quote. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices read from questhealth.com and ondemand.labcorp.com on {AS_OF} • 10 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published prices as of {AS_OF}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Quest (questhealth.com)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• CBC $29; CMP $49; lipid panel $59</li>
                  <li>• + $6 Physician Service Fee on many tests</li>
                  <li>• Basic Health Profile $199; Comprehensive $329; Elite $399</li>
                  <li>• In-home collection listed at $79 extra</li>
                  <li>• 150+ tests; 2,000+ Quest locations</li>
                </ul>
                <a
                  href="https://www.questhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-3 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Quest Health →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Labcorp (OnDemand)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• CBC $29; CMP $49</li>
                  <li>• Standard Health Test $99; Comprehensive $169</li>
                  <li>• Vitamin D $99 ($74.25 on a 25% sale); ferritin $59</li>
                  <li>• HSA/FSA accepted on most tests; does not bill insurance</li>
                  <li>• 2,000+ centers + 400+ Labcorp at Walgreens</li>
                </ul>
                <a
                  href="https://www.ondemand.labcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-3 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Labcorp OnDemand →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean Quest if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• A Quest draw site is closest to you</li>
                  <li>• You want the published $79 in-home collection option</li>
                  <li>• You want a named Basic / Comprehensive / Elite profile</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean Labcorp if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• A Labcorp or Walgreens site is closest</li>
                  <li>• You want the $99 Standard or $169 Comprehensive bundle</li>
                  <li>• You want straightforward HSA/FSA checkout on most tests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#overview" className="text-blue-600 hover:underline">1. The two labs and their self-pay arms</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">2. Published prices by common test</a></li>
              <li><a href="#how-cheaper" className="text-blue-600 hover:underline">3. Why self-pay can beat insurance</a></li>
              <li><a href="#locations" className="text-blue-600 hover:underline">4. Locations &amp; collection options</a></li>
              <li><a href="#process" className="text-blue-600 hover:underline">5. How ordering works</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">6. Things to know before you buy</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              If you want bloodwork without a primary-care appointment and without surprise insurance
              billing, Quest Diagnostics and Labcorp both sell tests straight to you. Quest does it
              through questhealth.com; Labcorp does it through Labcorp OnDemand. On {AS_OF} the
              published line items were closer than most people expect — so the decision usually
              comes down to location, the exact bundle, and who is running a sale.
            </p>

            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Two Labs and Their Self-Pay Arms</h2>

            <p className="text-gray-700 mb-4">
              Quest Diagnostics and Labcorp are two of the largest independent clinical laboratories in
              the United States. For decades you could only reach them through a doctor&apos;s order.
              Both now run consumer storefronts that let you buy a test, get it authorized by an
              independent physician, and walk into a draw site — no office visit, no insurance claim.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quest — questhealth.com</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>150+ lab tests purchasable online; no doctor visit required for purchase</li>
              <li>Collection at any of 2,000+ Quest patient locations</li>
              <li>Optional Quest Mobile in-home collection listed at an additional $79</li>
              <li>Results posted online when ready; Health Profiles note about 5 business days</li>
              <li>Independent healthcare provider oversight, with a Physician Service Fee (often $6) added at checkout on many tests</li>
              <li>First-purchase promo terms have listed state exclusions (including Arizona, Hawaii, and Pennsylvania) — confirm availability for your address</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Labcorp — Labcorp OnDemand</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Buy many of the same tests doctors order, with no doctor visit</li>
              <li>An independent physician reviews and approves each order before collection</li>
              <li>Collection at over 2,000 Patient Service Centers plus 400+ Labcorp at Walgreens sites</li>
              <li>Most results within 1-2 days of the sample reaching the lab</li>
              <li>Does not bill your insurance — you pay directly; HSA/FSA accepted on most tests</li>
              <li>Homepage was advertising up to 25% off select tests and 10% off a first purchase as of {AS_OF}</li>
            </ul>

            <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Shop Quest Health</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Published CBC, CMP, lipid, and Health Profile prices — confirm the cart total including the Physician Service Fee.
                </p>
                <a
                  href="https://www.questhealth.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Quest Health →
                </a>
              </div>
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Shop Labcorp OnDemand</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Published Standard ($99) and Comprehensive ($169) panels plus a-la-carte tests. HSA/FSA accepted on most.
                </p>
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

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> both run on the same national lab infrastructure
                hospitals and clinics use. The test you buy self-pay is the same assay a physician
                would order. The difference is the purchasing pathway and the price you see up front.
              </p>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Prices by Common Test</h2>

            <p className="text-gray-700 mb-4">
              The figures below were read from each lab&apos;s own product or shop pages on{' '}
              <strong>{AS_OF}</strong>. Sales move weekly. Quest often adds a Physician Service Fee
              (listed at $6 on the CMP and Elite pages). Treat the table as a same-day snapshot, then
              confirm the live cart.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quest Health</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labcorp OnDemand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Complete blood count (CBC)</td>
                    <td className="border border-gray-300 px-4 py-3">$29</td>
                    <td className="border border-gray-300 px-4 py-3">$29</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Comprehensive metabolic panel (CMP)</td>
                    <td className="border border-gray-300 px-4 py-3">$49 + $6 Physician Service Fee</td>
                    <td className="border border-gray-300 px-4 py-3">$49</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lipid / cholesterol panel</td>
                    <td className="border border-gray-300 px-4 py-3">$59</td>
                    <td className="border border-gray-300 px-4 py-3">Included in $99 Standard / $169 Comprehensive; not listed as a standalone on the homepage that day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hemoglobin A1c</td>
                    <td className="border border-gray-300 px-4 py-3">$39 ($35.10 on a listed sale)</td>
                    <td className="border border-gray-300 px-4 py-3">Included in the $169 Comprehensive Health Test</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin D</td>
                    <td className="border border-gray-300 px-4 py-3">Included in Comprehensive / Elite profiles</td>
                    <td className="border border-gray-300 px-4 py-3">$99 ($74.25 at 25% off)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid</td>
                    <td className="border border-gray-300 px-4 py-3">Comprehensive Thyroid Test Panel $149</td>
                    <td className="border border-gray-300 px-4 py-3">Custom Thyroid Test $247</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Testosterone</td>
                    <td className="border border-gray-300 px-4 py-3">Included in men&apos;s profiles / Elite</td>
                    <td className="border border-gray-300 px-4 py-3">Comprehensive Testosterone Test $159</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Basic wellness bundle</td>
                    <td className="border border-gray-300 px-4 py-3">Basic Health Profile $199 (men&apos;s or women&apos;s)</td>
                    <td className="border border-gray-300 px-4 py-3">Standard Health Test $99</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Broader wellness bundle</td>
                    <td className="border border-gray-300 px-4 py-3">Comprehensive $329; Elite $399 + $6 fee</td>
                    <td className="border border-gray-300 px-4 py-3">Comprehensive Health Test $169; Advanced Health Panel $399</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> on the same common line items, Quest and Labcorp often
              land within a few dollars. Where one looks dramatically cheaper, it is usually a
              bundle (Labcorp&apos;s $99 Standard vs buying CBC + CMP + UA separately) or a temporary
              sale. Price the exact test at both the same week.
            </p>

            <p className="text-gray-700 mb-4">
              For a wider a-la-carte vs membership comparison — including Ulta Lab Tests, Superpower,
              and Function Health — see{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                cheapest blood test panels (2026)
              </Link>
              . If you have never ordered labs without a visit, start with{' '}
              <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">
                how to get a blood test without a doctor
              </Link>
              .
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Bundled panels lower the per-test price</h4>
              <p className="text-gray-700">
                Both labs sell wellness panels that cost more in total but far less per marker than
                buying each test individually. If you want a full snapshot, compare the bundle
                price — Labcorp&apos;s $99 Standard or Quest&apos;s $199 Basic — not just the line items.
              </p>
            </div>

            <h2 id="how-cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Self-Pay Can Beat Going Through Insurance</h2>

            <p className="text-gray-700 mb-4">
              Paying cash can cost less than using insurance. If you have a high deductible you
              have not met, the &quot;insured&quot; price is often the full negotiated rate billed to
              you — sometimes higher than the transparent self-pay price on questhealth.com or
              Labcorp OnDemand.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>One transparent price:</strong> you see the cost before you commit</li>
              <li><strong>HSA/FSA eligible:</strong> lab testing typically qualifies; confirm with your plan</li>
              <li><strong>No claim, no referral:</strong> nothing routes through a payer</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The trade-off: self-pay results do not automatically land in your insurer&apos;s or
              primary-care record, and the cost does not count toward your deductible. If you have
              already met your deductible, running it through insurance may be cheaper.
            </p>

            <h2 id="locations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Locations &amp; Collection Options</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quest</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labcorp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Draw sites</td>
                    <td className="border border-gray-300 px-4 py-3">2,000+ Quest locations</td>
                    <td className="border border-gray-300 px-4 py-3">2,000+ Patient Service Centers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Retail-pharmacy sites</td>
                    <td className="border border-gray-300 px-4 py-3">Select retail partnerships</td>
                    <td className="border border-gray-300 px-4 py-3">400+ Labcorp at Walgreens</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">At-home collection</td>
                    <td className="border border-gray-300 px-4 py-3">Quest Mobile listed at +$79</td>
                    <td className="border border-gray-300 px-4 py-3">At-home kits for select tests</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">State / offer notes</td>
                    <td className="border border-gray-300 px-4 py-3">Promo terms have listed AZ, HI, PA exclusions — confirm for your ZIP</td>
                    <td className="border border-gray-300 px-4 py-3">Broad US coverage; first-test 10% welcome code advertised</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The location winner is local</h4>
              <p className="text-gray-700">
                There is no national winner. Pull up both provider locators with your ZIP code.
                For a one-off blood draw, ten minutes of convenience usually beats a few dollars
                of price difference.
              </p>
            </div>

            <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Ordering Works (Both Labs)</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Pick your test online</strong> and pay (credit card or, in most cases, HSA/FSA)</li>
              <li><strong>An independent physician reviews and authorizes</strong> the order</li>
              <li><strong>Book a collection:</strong> walk into a draw site, use a retail-pharmacy location, or order an at-home kit where offered</li>
              <li><strong>Get the sample taken</strong> by a phlebotomist (or self-collect for kit tests)</li>
              <li><strong>Receive results online</strong></li>
            </ol>

            <p className="text-gray-700 mb-4">
              Both also offer the option to discuss results with an independent provider for certain
              tests. That is helpful, but it is not the same as ongoing care from a clinician who
              knows your history.
            </p>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Buy</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>It is screening, not diagnosis.</strong> A self-ordered result is a data point.</li>
              <li><strong>Abnormal results need follow-up</strong> with your own clinician.</li>
              <li><strong>Results may not reach your records.</strong> Self-pay tests do not automatically sync to your primary-care chart.</li>
              <li><strong>Prices and availability change.</strong> The number on {AS_OF} may differ next week.</li>
              <li><strong>Watch add-ons.</strong> Quest&apos;s $6 Physician Service Fee and $79 in-home collection change the all-in total.</li>
            </ul>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Quest (questhealth.com)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your nearest convenient draw site is a Quest location</li>
                <li>You specifically want the published in-home collection option</li>
                <li>You want a named Basic / Comprehensive / Elite health profile</li>
              </ul>
              <a
                href="https://www.questhealth.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Visit Quest Health →
              </a>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Labcorp (OnDemand)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>A Labcorp center or Labcorp at Walgreens is closest</li>
                <li>You want the $99 Standard or $169 Comprehensive fixed panel</li>
                <li>You want straightforward HSA/FSA checkout on most tests</li>
              </ul>
              <a
                href="https://www.ondemand.labcorp.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Visit Labcorp OnDemand →
              </a>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Find the exact test on both questhealth.com and Labcorp OnDemand</li>
              <li>Compare the all-in cart price, including Quest&apos;s Physician Service Fee or any collection fee</li>
              <li>Check which has a more convenient draw site near you</li>
              <li>If prices and convenience tie, pick whichever is running a sale</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cash-pay lab options</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                  Cheapest blood test panels
                </Link>{' '}
                — Ulta, Quest, Labcorp, Superpower, and Function side by side
              </li>
              <li>
                <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">
                  Blood test without a doctor
                </Link>{' '}
                — how direct-access ordering works and which states restrict it
              </li>
              <li>
                <Link href="/labs" className="text-blue-600 hover:underline">
                  Cash-pay labs directory
                </Link>{' '}
                — membership and at-home platforms
              </li>
              <li>
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">
                  Cash-pay healthcare map
                </Link>{' '}
                — where labs sit next to telehealth, GLP-1, and imaging
              </li>
              <li>
                Hormone follow-up after a testosterone result:{' '}
                <Link href="/mens-health" className="text-blue-600 hover:underline">men&apos;s health options</Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Lab Testing Options</h3>
            <p className="mb-6 text-blue-100">
              See membership and at-home lab platforms side by side, then open Quest or Labcorp to confirm today&apos;s cart price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/labs"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Browse Cash-Pay Labs
              </Link>
              <a
                href="https://www.questhealth.com/"
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

          <section className="mt-12" id="faq">
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
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with Quest Diagnostics or Labcorp. Prices above were read from
              questhealth.com and ondemand.labcorp.com on {AS_OF} and are reported as published
              storefront figures — not a quote or a guarantee of what you will pay. Sales, Physician
              Service Fees, collection fees, and state availability change. Always verify the current
              price in the provider&apos;s cart before purchasing. Self-ordered lab tests are for
              wellness and screening; they are not a substitute for clinical care. Abnormal results
              should be reviewed with a licensed healthcare provider.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.questhealth.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health homepage (150+ tests, 2,000+ locations, $79 in-home collection)</a></li>
              <li>• <a href="https://www.questhealth.com/shop-tests" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — Shop All Lab Tests (CBC $29, CMP $49, lipid $59, A1c $39)</a></li>
              <li>• <a href="https://www.questhealth.com/product/comprehensive-metabolic-panel-cmp/10231M.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — CMP product page ($49 + $6 Physician Service Fee)</a></li>
              <li>• <a href="https://www.questhealth.com/product/elite-health-profile/18386M.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — Elite Health Profile ($399 + $6 fee; Comprehensive $329)</a></li>
              <li>• <a href="https://www.questhealth.com/health-profiles.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — Basic / Comprehensive / Elite health profiles</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand homepage (featured tests, HSA/FSA, 2,000+ / 400+ Walgreens)</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/basic-wellness" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — Standard Health Test ($99)</a></li>
              <li>• <a href="https://www.ondemand.labcorp.com/products/annual-wellness" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — annual wellness (CBC $29, CMP $49, Comprehensive $169)</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/quest-vs-labcorp-pricing')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Self-Pay Lab Pricing Cheat Sheet"
            description="Quest vs Labcorp: how to price the same test at both labs and time a sale."
            source="guide_quest_vs_labcorp_pricing"
          />
        </div>
        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
