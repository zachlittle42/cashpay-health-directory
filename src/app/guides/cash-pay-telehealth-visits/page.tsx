import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/cash-pay-telehealth-visits';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Cash-Pay Telehealth Visits (2026): $29–$129 vs Urgent Care' },
  alternates: { canonical: PAGE_URL },
  description:
    'Cash-pay telehealth visits in 2026: Sesame from ~$29–$37, Amazon from $29, Teladoc $89, PlushCare $129 cash — vs $120–$350 urgent care and $1,000+ ER.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does a cash-pay telehealth visit cost in 2026?',
    answer:
      `Published self-pay prices span about $19 to $129 depending on the brand and whether you buy a membership. As of ${AS_OF}, Sesame’s marketplace lists acute/virtual visits from the high $20s to high $30s (Sesame Plus advertises visits as low as $37; Costco partnership copy has advertised $29 virtual primary care). Amazon One Medical On-Demand publishes message care from $29 and video from $49. Teladoc lists self-pay general medical / urgent care at $89. PlushCare charges $129 per cash visit plus an optional $19.99/month membership. Lemonaid advertises one-off consults around $25 plus medication. These are published estimates — confirm the live checkout price before you book.`,
  },
  {
    question: 'Is a virtual doctor cheaper than urgent care without insurance?',
    answer:
      'Usually, for problems that do not need hands, an x-ray, or stitches. Cash telehealth published in this guide runs about $29–$129 per visit. The VitalityScout urgent-care cost guide cites chain self-pay visits of $120–$350 (GoHealth $120–$160 in New York for an exam plus one instant lab, $275–$350 with a procedure; AFC Roxborough $140 simple visit). Add an x-ray or laceration repair and urgent care can land $250–$500. Telehealth cannot replace that visit. If you need imaging or a procedure, budget the in-person number.',
  },
  {
    question: 'When should I use cash telehealth instead of urgent care or the ER?',
    answer:
      'Use cash telehealth for straightforward, non-emergency problems a video or message visit can handle: a UTI, sinus infection, pink eye, medication refill, rash photos, or a primary-care question. Use in-person urgent care when you need an exam you cannot do on camera, an x-ray, stitches, a splint, or a rapid in-house test. Use the ER for chest pain, trouble breathing, stroke signs, severe bleeding, a suspected fracture with deformity, or any symptom that feels like an emergency. Cost is never a reason to skip the ER. UnitedHealth Group’s older analysis put common primary-care-treatable conditions at about $2,032 in an ER vs $193 at urgent care; Solv estimates uninsured ER visits for common conditions at $1,000–$2,500.',
  },
  {
    question: 'What is included in a Sesame or PlushCare cash visit?',
    answer:
      'A typical cash telehealth visit includes the clinician encounter (video, phone, or message) and, if appropriate, a prescription sent to a pharmacy. Labs, imaging, and the medication itself are almost always extra. Sesame is a marketplace: each provider sets a posted cash price and Sesame does not bill insurance. PlushCare bills $129 cash per visit (or an insured copay) and sells an optional $19.99/month membership for messaging and discounts — the membership is not the visit. Confirm what your specific booking includes before you pay.',
  },
  {
    question: 'Do I need a membership to see a cash-pay online doctor?',
    answer:
      'No. Sesame, Amazon On-Demand, Teladoc, Doctor On Demand, and GoodRx Care all sell pay-per-visit care. Memberships (Sesame Plus $10.99/month or $99/year; PlushCare $19.99/month; Lemonaid $99/month primary care) only make sense if you will visit more than once or want messaging and discounted labs. Price the first visit as a one-off, then do the membership math.',
  },
  {
    question: 'Can a cash telehealth doctor prescribe antibiotics or refill my meds?',
    answer:
      'Often yes for common, guideline-supported cases — if the clinician decides it is appropriate after reviewing your history. Controlled substances, some psychiatric meds, and anything that needs an in-person exam are commonly excluded. Prescription cost is separate from the visit fee. This is information, not medical advice; a licensed clinician has to decide whether a prescription is safe for you.',
  },
];

const TELEHEALTH_BRANDS = [
  {
    name: 'Sesame',
    price: 'From ~$29–$37/visit',
    blurb: 'Cash-pay marketplace. Providers set posted rates; no insurance billed. Sesame Plus ($10.99/mo or $99/yr) takes $10 off visits. Verify the live listing for your ZIP.',
    siteUrl: 'https://sesamecare.com',
    profileHref: '/providers/sesame-primary-care',
  },
  {
    name: 'PlushCare',
    price: '$129 cash / visit',
    blurb: 'Board-certified physicians, same-day slots. Optional $19.99/mo membership. Insured patients often pay a copay instead. Meds and labs extra.',
    siteUrl: 'https://plushcare.com',
    profileHref: '/providers/plushcare-primary-care',
  },
  {
    name: 'Lemonaid Health',
    price: '~$25 consult or $99/mo',
    blurb: 'Cheap one-off consult plus meds, or a $99/month primary-care membership with no per-visit fee. Confirm current consult and membership prices.',
    siteUrl: 'https://www.lemonaidhealth.com',
    profileHref: '/providers/lemonaid-health-primary-care',
  },
  {
    name: 'Amazon One Medical',
    price: '$29 message / $49 video',
    blurb: 'On-Demand Care for 30+ common conditions. No membership required for pay-per-visit. One Medical membership is a separate primary-care product.',
    siteUrl: 'https://health.amazon.com/onemedical',
    profileHref: '/providers/amazon-one-medical-on-demand',
  },
  {
    name: 'Teladoc Health',
    price: '$89 urgent care',
    blurb: '24/7 self-pay general medical visits at a published $89. Longer-term primary care on Teladoc is typically insurance/employer, not cash.',
    siteUrl: 'https://www.teladochealth.com',
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

export default function CashPayTelehealthVisitsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cash-Pay Telehealth Visits (2026): What a Virtual Doctor Costs vs Urgent Care',
    description:
      'Published 2026 cash prices for virtual doctor visits — Sesame, PlushCare, Lemonaid, Amazon One Medical, Teladoc — compared with urgent-care and ER ranges.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Cash-pay telehealth / virtual primary and urgent care visit' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Sesame — cash-pay telehealth marketplace', url: 'https://sesamecare.com' },
      { '@type': 'CreativeWork', name: 'Sesame Plus membership ($10.99/mo or $99/yr, $10 off visits)', url: 'https://sesamecare.com/join/membership' },
      { '@type': 'CreativeWork', name: 'PlushCare — membership and $129 cash visit pricing', url: 'https://plushcare.com/membership' },
      { '@type': 'CreativeWork', name: 'Henry Meds / Amazon One Medical On-Demand — listed in VitalityScout provider data', url: 'https://health.amazon.com/onemedical' },
      { '@type': 'CreativeWork', name: 'Teladoc Health — self-pay urgent care', url: 'https://www.teladochealth.com' },
      { '@type': 'CreativeWork', name: 'VitalityScout — Urgent care cost without insurance', url: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Cash-Pay Telehealth Visits', item: PAGE_URL },
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
              <span className="text-gray-900">Cash-Pay Telehealth Visits</span>
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
              Cash-Pay Telehealth Visits (2026): What a Virtual Doctor Costs vs Urgent Care
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A posted virtual visit can undercut a walk-in clinic by a few hundred dollars —
              if the problem is one a camera can handle. Here are the published cash prices,
              what is actually included, and when you still need to drive.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, cash telehealth visits publish from about <strong>$29</strong>{' '}
                (Sesame marketplace / Amazon message care) to <strong>$129</strong> (PlushCare
                cash). Teladoc lists <strong>$89</strong> self-pay urgent care. That sits well
                below chain urgent-care self-pay of <strong>$120–$350</strong> and far below
                uninsured ER estimates of <strong>$1,000–$2,500</strong> for common conditions.
                Prescriptions and labs are extra. Prices are estimates — verify before you book.
                This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices verified from official provider pages and VitalityScout&apos;s urgent-care guide on {AS_OF} • 11 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick comparison (cash, estimate)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Cash telehealth</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Sesame from ~$29–$37</li>
                  <li>• Amazon from $29 / $49 video</li>
                  <li>• Teladoc $89</li>
                  <li>• PlushCare $129 cash</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Urgent care (no insurance)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Chains ~$120–$350 / visit</li>
                  <li>• + x-ray or stitches $250–$500</li>
                  <li>• GoHealth virtual $75–$200</li>
                  <li>• See the urgent-care guide</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-700 mb-2">ER (common conditions)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Solv: ~$1,000–$2,500 uninsured</li>
                  <li>• UHG analysis: ~$2,032 vs $193 UC</li>
                  <li>• Never skip for a true emergency</li>
                </ul>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Book a posted cash visit"
            intro="These are the brands already in the VitalityScout directory. Confirm the live price for your state — marketplace and membership rates move."
            brands={TELEHEALTH_BRANDS.slice(0, 3)}
            hubHref="/telehealth"
            hubLabel="Browse the telehealth hub →"
          />

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#when" className="text-blue-600 hover:underline">1. When cash telehealth vs in-person</a></li>
              <li><a href="#prices" className="text-blue-600 hover:underline">2. Published cash visit prices</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">3. What a visit includes — and does not</a></li>
              <li><a href="#limits" className="text-blue-600 hover:underline">4. Limitations</a></li>
              <li><a href="#vs-uc" className="text-blue-600 hover:underline">5. Vs urgent care and the ER</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">6. Which platform to pick</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              “See a doctor online” is not one product. It is a $29 message visit for pink eye,
              a $129 ongoing-primary-care slot, and a $89 24/7 urgent video — sitting next to a
              $140 walk-in that can actually stitch a cut. This guide prices the cash telehealth
              brands already in our directory and stacks them against the urgent-care ranges we
              already publish, so you do not buy the wrong door.
            </p>

            <h2 id="when" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              When to use cash telehealth vs in-person
            </h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-3">Telehealth is usually enough for</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sinus infection, UTI, pink eye, cold/flu questions</li>
                  <li>• Medication refills a clinician is willing to continue</li>
                  <li>• Rash or acne that can be assessed by photo or video</li>
                  <li>• A primary-care question that does not need a physical exam</li>
                  <li>• After-hours care when urgent care is closed and it is not an emergency</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-3">Drive in (or call 911) for</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cuts that may need stitches, suspected fracture, sprain you cannot walk on</li>
                  <li>• Anything that needs an x-ray, rapid strep/flu plus a hands-on exam</li>
                  <li>• Abdominal pain, high fever in an infant, dehydration you cannot keep down</li>
                  <li>• Chest pain, trouble breathing, stroke signs, severe bleeding — ER, not an app</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              If you are unsure, start with the more conservative door. A $29 video visit that
              sends you to urgent care anyway is still cheaper than guessing wrong at the ER.
              For the in-person price ladder, use our{' '}
              <Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">
                urgent care cost without insurance
              </Link>{' '}
              guide.
            </p>

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Published cash visit prices (as of {AS_OF})
            </h2>
            <p className="text-gray-700 mb-4">
              Figures below are drawn from each brand’s published pricing or from VitalityScout
              provider profiles last verified in 2026. Marketplace rates vary by clinician and
              ZIP. Confirm the number you will actually be charged.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published cash price</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Profile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Sesame virtual / acute care</td>
                  <td className="border border-gray-300 px-4 py-3">From ~$29–$37; Plus advertises as low as $37</td>
                  <td className="border border-gray-300 px-4 py-3">Pay-per-visit marketplace; no insurance</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/sesame-primary-care" className="text-blue-600 hover:underline">Sesame</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Amazon One Medical On-Demand</td>
                  <td className="border border-gray-300 px-4 py-3">$29 message / $49 video</td>
                  <td className="border border-gray-300 px-4 py-3">Pay-per-visit; 30+ common conditions</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/amazon-one-medical-on-demand" className="text-blue-600 hover:underline">Amazon</Link></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">GoodRx Care</td>
                  <td className="border border-gray-300 px-4 py-3">$19 with Gold / $49 standard</td>
                  <td className="border border-gray-300 px-4 py-3">Visit + coupon engine; Gold is extra</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/goodrx-care" className="text-blue-600 hover:underline">GoodRx</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Lemonaid one-off consult</td>
                  <td className="border border-gray-300 px-4 py-3">~$25 + medication</td>
                  <td className="border border-gray-300 px-4 py-3">A la carte; $99/mo primary care is separate</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/lemonaid-health-primary-care" className="text-blue-600 hover:underline">Lemonaid</Link></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Teladoc general medical</td>
                  <td className="border border-gray-300 px-4 py-3">$89 / visit</td>
                  <td className="border border-gray-300 px-4 py-3">24/7 self-pay urgent; primary care is insured/employer</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/teladoc-general-medical" className="text-blue-600 hover:underline">Teladoc</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Doctor On Demand</td>
                  <td className="border border-gray-300 px-4 py-3">From $99 / 15-min uninsured</td>
                  <td className="border border-gray-300 px-4 py-3">No membership; video with MD/NP</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/doctor-on-demand" className="text-blue-600 hover:underline">Doctor On Demand</Link></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">PlushCare cash visit</td>
                  <td className="border border-gray-300 px-4 py-3">$129 + optional $19.99/mo</td>
                  <td className="border border-gray-300 px-4 py-3">MD visits; bills insurance if you have it</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/plushcare-primary-care" className="text-blue-600 hover:underline">PlushCare</Link></td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">In-person urgent care</td>
                  <td className="border border-gray-300 px-4 py-3">$120–$350 visit; $250–$500 with add-ons</td>
                  <td className="border border-gray-300 px-4 py-3">Chain self-pay (GoHealth, AFC) — not a telehealth brand</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">UC guide</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> marketplace and message visits (Sesame, Amazon,
              GoodRx, Lemonaid) occupy the $19–$49 band. Brand-name 24/7 video (Teladoc, Doctor
              On Demand) sits near $89–$99. Relationship primary care (PlushCare cash, Lemonaid
              membership) is a different product — you are buying follow-up, not a one-off script.
            </p>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What a cash telehealth visit includes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Usually included:</strong> the clinician encounter (video, phone, or asynchronous message) and a decision to treat, refer, or send you in-person.</li>
              <li><strong>Often included:</strong> a prescription sent to a retail pharmacy if the clinician decides it is appropriate.</li>
              <li><strong>Almost never included:</strong> the medication itself, blood work, imaging, specialist follow-up, or a procedure.</li>
              <li><strong>Membership extras:</strong> Sesame Plus ($10.99/mo or $99/yr) takes $10 off visits and includes one free lab per year per their membership page. PlushCare’s $19.99/mo is messaging and discounts, not the $129 visit. Lemonaid’s $99/mo primary care is unlimited visits with no per-visit fee.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8 not-prose">
              <h4 className="font-bold text-gray-900 mb-2">Do the membership math on paper</h4>
              <p className="text-gray-700">
                One Sesame visit at $37 is cheaper than PlushCare’s $129. Three PlushCare cash
                visits in a year ($387) plus membership can still beat three uninsured urgent-care
                visits with labs. Price the next twelve months, not the first click.
              </p>
            </div>

            <h2 id="limits" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Limitations</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>No hands, no film.</strong> A virtual visit cannot x-ray, suture, drain an abscess, or reduce a joint.</li>
              <li><strong>State licensing.</strong> The clinician has to be licensed where you are sitting. Availability varies; some platforms exclude a handful of states.</li>
              <li><strong>Controlled substances and complex psych.</strong> Many cash platforms will not prescribe controlled meds or manage bipolar, ADHD, or schizophrenia online.</li>
              <li><strong>Quality varies on marketplaces.</strong> Sesame’s pitch is that you pick the provider and see the price. That also means credentials and bedside manner are not one brand standard.</li>
              <li><strong>It is not your chart.</strong> A one-off visit does not automatically update your primary-care record. Download the after-visit summary.</li>
            </ul>

            <h2 id="vs-uc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Vs urgent care and the ER
            </h2>
            <p className="text-gray-700 mb-4">
              The{' '}
              <Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">
                urgent-care cost guide
              </Link>{' '}
              is the in-person comparator this page is built against:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>GoHealth publishes <strong>$120–$160</strong> in New York and <strong>$200–$235</strong> in Virginia for an exam plus one instant lab, and <strong>$275–$350</strong> with a procedure. Some markets list a <strong>$75</strong> virtual visit; Virginia virtual is <strong>$200</strong> — not automatically cheaper.</li>
              <li>AFC Roxborough posts a <strong>$140</strong> simple visit; add-ons (x-ray $75, CBC $70, laceration $75–$190) are what blow the bill up.</li>
              <li>Solv’s typical self-pay urgent-care visit is <strong>$150–$280</strong>; visit plus x-ray <strong>$250–$500</strong>.</li>
              <li>Uninsured ER for common conditions: Solv <strong>$1,000–$2,500</strong>. UnitedHealth Group’s 2018 insured analysis: <strong>$2,032 ER vs $193 urgent care</strong> for ten primary-care-treatable conditions — the shape of the gap still holds.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              So the cash decision is usually: <strong>~$30–$90 telehealth</strong> if a camera
              is enough, <strong>~$120–$350 urgent care</strong> if you need hands or a machine,
              <strong> ER</strong> if it is an emergency. For the rest of the cash-pay map — labs,
              GLP-1s, TRT, surgery — see the{' '}
              <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">
                cash-pay healthcare map
              </Link>.
            </p>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which platform to pick</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Lowest posted one-off:</strong> Sesame or Amazon On-Demand (or GoodRx Care if you already have Gold).</li>
                <li><strong>24/7 brand-name video:</strong> Teladoc at $89, or Doctor On Demand from $99.</li>
                <li><strong>Ongoing primary care with an MD:</strong> PlushCare ($129 cash or an insured copay) or Lemonaid’s $99/month plan.</li>
                <li><strong>Need an x-ray or stitches today:</strong> skip the app and use the urgent-care guide.</li>
              </ul>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare the cash telehealth brands on this page"
            intro="Open the official site for the live ZIP-level price, or the VitalityScout profile for services and our take."
            brands={TELEHEALTH_BRANDS}
            hubHref="/telehealth"
            hubLabel="Open the telehealth hub →"
          />

          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare cash-pay telehealth and local care</h3>
            <p className="mb-6 text-blue-100">
              Virtual visits, GLP-1s, labs, and men’s health — or the urgent-care price guide if you need to drive.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/telehealth"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Telehealth hub →
              </Link>
              <Link
                href="/guides/urgent-care-cost-without-insurance"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Urgent care costs
              </Link>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/telehealth" className="text-blue-600 hover:underline">Telehealth hub</Link></li>
              <li><Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">Urgent care cost without insurance</Link></li>
              <li><Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">Cash-pay healthcare map</Link></li>
              <li><Link href="/mens-health" className="text-blue-600 hover:underline">Men&apos;s health (ED &amp; hair)</Link></li>
              <li><Link href="/glp1" className="text-blue-600 hover:underline">GLP-1 programs</Link></li>
              <li><Link href="/labs" className="text-blue-600 hover:underline">Cash-pay labs</Link></li>
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://sesamecare.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sesame — cash-pay marketplace</a></li>
              <li>• <a href="https://sesamecare.com/join/membership" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sesame Plus — $10.99/mo or $99/yr, $10 off visits</a></li>
              <li>• <a href="https://plushcare.com/membership" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">PlushCare membership — $129 cash visit, $19.99/mo</a></li>
              <li>• <a href="https://health.amazon.com/onemedical" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Amazon One Medical On-Demand</a></li>
              <li>• <a href="https://www.teladochealth.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Teladoc Health</a></li>
              <li>• <a href="https://www.lemonaidhealth.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Lemonaid Health</a></li>
              <li>• VitalityScout — <Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">Urgent care cost without insurance</Link> (GoHealth, AFC, Solv, UHG ER comparison)</li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Cash-Visit vs Urgent-Care Cheat Sheet"
            description="When a $29 video visit is enough — and when the $140 walk-in is the cheaper mistake to avoid."
            source="guide_cash_pay_telehealth_visits"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
