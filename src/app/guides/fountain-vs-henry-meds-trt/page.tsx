import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/fountain-vs-henry-meds-trt';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Fountain vs Henry Meds TRT (2026): $199 vs $129' },
  alternates: { canonical: PAGE_URL },
  description:
    'Fountain vs Henry Meds TRT cash plans (Sept 2026): Fountain ~$199/mo all-in (“less than $7/day”), Henry Meds $129/mo compounded ($179 Kyzatrex). Verify live.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does Fountain TRT vs Henry Meds cost per month in 2026?',
    answer:
      `As of ${AS_OF}, Henry Meds publishes compounded TRT starting at $129/month and Kyzatrex oral at $179/month. That price includes provider visits, labs, medication, supplies, shipping, and ongoing support. Fountain markets an all-inclusive membership — medication, video visits, and ongoing support — as “one flat monthly fee” and “less than $7 a day” (about $199–$210/month). Fountain’s homepage does not print a dollar figure in the hero. Confirm the live membership, any onboarding lab charge, and what is included before you enroll.`,
  },
  {
    question: 'Does Fountain or Henry Meds include labs and medication in the monthly price?',
    answer:
      'Henry Meds states the monthly price includes healthcare provider visits, lab work, medication and supplies, shipping, and ongoing support, with no hidden fees. Fountain describes a flat all-inclusive membership that includes medication, video visits, and ongoing medical support; an initial blood test can sit outside that monthly fee. Always add every first-month line (assessment, labs, shipping) before you compare clinics.',
  },
  {
    question: 'Is Fountain TRT still $199 a month?',
    answer:
      `Fountain’s homepage as of ${AS_OF} does not print “$199.” It says “less than $7 a day” and “one flat monthly fee.” $7 × 30 days is $210; our 2026 TRT directory and third-party reviews still treat the membership as about $199/month all-inclusive. That is an implied range, not a printed checkout number. Verify the live fee on fountaintrt.com.`,
  },
  {
    question: 'Fountain vs Henry Meds — which is cheaper for TRT?',
    answer:
      'On published 2026 numbers, Henry Meds at $129/month compounded (or $179 for Kyzatrex) is the lower all-in monthly line. Fountain’s implied ~$199–$210 membership is higher but markets cream-first care with specialist urology visits. “Cheapest” is the all-in number after labs and the first shipment — not the headline. A licensed clinician decides whether TRT is appropriate.',
  },
  {
    question: 'What form of testosterone does each clinic use?',
    answer:
      'Fountain’s site leads with a topical testosterone cream applied to the shoulder each morning and mentions no needles. Henry Meds states TRT may be administered through body cream, pill, or injection; compounded treatments start at $129/month and Kyzatrex oral is $179/month (not available in California). Compounded prescriptions are not FDA-approved in the same way as brand products. Confirm the form you would actually be prescribed.',
  },
  {
    question: 'Do Fountain or Henry Meds take insurance?',
    answer:
      'Both are cash-pay telehealth paths on the pages we checked. Henry Meds says no insurance is required and there are no surprise bills — one monthly payment. Fountain contrasts its flat fee with “insurance nightmares” on traditional TRT. Do not assume either clinic will bill your plan. Confirm HSA/FSA eligibility with your administrator.',
  },
];

const BRANDS = [
  {
    name: 'Fountain TRT',
    price: '~$199/mo all-in',
    blurb: 'Flat membership marketed as medication + visits + support; “less than $7 a day.” Homepage does not print a dollar figure. Confirm the live fee and onboarding labs.',
    siteUrl: 'https://fountaintrt.com',
    profileHref: '/providers/fountain-trt',
  },
  {
    name: 'Henry Meds',
    price: '$129/mo all-in',
    blurb: 'Published compounded TRT includes visits, labs, meds, supplies, and shipping. Kyzatrex oral is $179/mo (not available in California).',
    siteUrl: 'https://henrymeds.com/treatments/trt',
    profileHref: '/providers/henry-meds-trt',
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

export default function FountainVsHenryMedsTrtPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Fountain vs Henry Meds TRT (2026): Cash Plan Prices Compared',
    description:
      'Published September 2026 cash prices for Fountain TRT and Henry Meds testosterone replacement therapy — monthly/program fees and what labs and medication include.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Testosterone replacement therapy (telehealth)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Fountain TRT — official site (all-inclusive membership language)', url: 'https://fountaintrt.com' },
      { '@type': 'CreativeWork', name: 'Henry Meds — Testosterone Replacement Therapy pricing', url: 'https://henrymeds.com/treatments/trt' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Fountain vs Henry Meds TRT', item: PAGE_URL },
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
              <span className="text-gray-900">Fountain vs Henry Meds TRT</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/trt" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; TRT &amp; hormone hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fountain vs Henry Meds TRT (2026): Cash Plans Compared
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Two cash-pay online TRT clinics. One prints $129. The other says
              &quot;less than $7 a day.&quot; Here is what each published as of {AS_OF} —
              and what the monthly number actually includes.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Henry Meds</strong> publishes compounded TRT at{' '}
                <strong>$129/month</strong> (Kyzatrex oral <strong>$179/month</strong>)
                including visits, labs, meds, supplies, and shipping.{' '}
                <strong>Fountain</strong> markets an all-inclusive membership as{' '}
                <strong>&quot;less than $7 a day&quot;</strong> (~<strong>$199–$210/month</strong>);
                the homepage does not print a dollar figure. Confirm the live fee.
                This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from fountaintrt.com and henrymeds.com/treatments/trt on {AS_OF} • 10 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published prices as of {AS_OF}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Fountain TRT</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• “One flat monthly fee” / “less than $7 a day”</li>
                  <li>• Implied ~$199–$210/mo all-in</li>
                  <li>• Meds + video visits + ongoing support</li>
                  <li>• Initial blood test can be extra</li>
                </ul>
                <a
                  href="https://fountaintrt.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Fountain →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Henry Meds</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Compounded TRT from $129/mo</li>
                  <li>• Kyzatrex oral $179/mo (not in CA)</li>
                  <li>• Visits, labs, meds, supplies, shipping</li>
                  <li>• AI included at no extra cost if prescribed</li>
                </ul>
                <a
                  href="https://henrymeds.com/treatments/trt"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Henry Meds →
                </a>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Open the official TRT price pages"
            intro="Plain brand URLs and VitalityScout profiles. Confirm the live monthly fee and whether the first lab is inside it."
            brands={BRANDS}
            hubHref="/trt"
            hubLabel="Browse TRT providers →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">How to read these prices</h3>
            <p className="text-sm text-amber-800">
              Both clinics market an all-in membership. Henry Meds prints the dollar
              figure. Fountain does not — we translate &quot;less than $7 a day&quot; into a
              monthly range and hedge it. Add any onboarding blood test before you
              compare first-month cost. Verify with the provider before you enroll.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#fountain" className="text-blue-600 hover:underline">1. What Fountain publishes</a></li>
              <li><a href="#henry" className="text-blue-600 hover:underline">2. What Henry Meds publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">3. Side-by-side cash table</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">4. What the monthly fee includes</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">5. Which to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">6. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Online TRT ads collapse three bills — clinician, labs, testosterone —
              into one monthly number. Fountain and Henry Meds both do that. The
              difference is how explicit the number is, the form of testosterone they
              lead with, and whether the first blood test sits inside the fee.
            </p>

            <h2 id="fountain" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Fountain publishes
            </h2>
            <p className="text-gray-700 mb-4">
              fountaintrt.com as of {AS_OF} does <strong>not</strong> print a dollar
              amount in the hero. Official copy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Transparent pricing. One flat monthly fee. All-inclusive membership.</strong></li>
              <li><strong>For less than $7 a day</strong> — includes medication, video visits, and ongoing medical support.</li>
              <li>No hidden fees. Follow-up visits every 3–6 months. Cancel anytime.</li>
              <li>Process: online Low T assessment → blood test at a partner lab → video visit → cream shipped if prescribed.</li>
              <li>Leads with a topical cream applied to the shoulder each morning (&quot;no needles&quot;).</li>
              <li>Listed states include AL, AZ, CA, CO, CT, FL, GA, IL, IN, MI, NJ, NY, NC, OH, PA, TN, TX, VA, WA, WI.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>$7 × 30 = $210.</strong> Our{' '}
              <Link href="/guides/best-online-trt-clinics" className="text-blue-600 hover:underline">
                best online TRT clinics
              </Link>
              {' '}guide and Fountain&apos;s own &quot;less than $7 a day&quot; language still
              point to about <strong>$199/month</strong>. Treat that as an implied
              range, not a printed checkout price. An initial blood test or
              assessment can sit outside the monthly fee.
            </p>
            <a
              href="https://fountaintrt.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Fountain TRT →
            </a>

            <h2 id="henry" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Henry Meds publishes
            </h2>
            <p className="text-gray-700 mb-4">
              henrymeds.com/treatments/trt as of {AS_OF}:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Compounded treatments start at $129/month.</strong></li>
              <li><strong>Kyzatrex oral TRT is $179/month</strong> (not available in California).</li>
              <li>That price includes provider visits, lab work, medication and supplies, shipping, and ongoing support. Henry says there are no hidden fees or long-term contracts.</li>
              <li>If appropriate, an aromatase inhibitor may be prescribed at no extra cost.</li>
              <li>TRT may be cream, pill, or injection. Henry uses FDA-approved medications or compounded prescriptions from a 503(a) or 503(b) pharmacy.</li>
              <li>Eligibility copy: men 35–65 or women 35–60, plus clinical requirements based on labs.</li>
              <li>Shipments typically every 45 days for injectables or 90 days for oral tablets after the first fill (8–10 business days after the visit).</li>
            </ul>
            <a
              href="https://henrymeds.com/treatments/trt"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Henry Meds TRT →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Side-by-side cash table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Line item</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fountain</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Henry Meds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Published monthly</td>
                  <td className="border border-gray-300 px-4 py-3">“Less than $7/day” (~$199–$210); no printed $</td>
                  <td className="border border-gray-300 px-4 py-3">$129 compounded; $179 Kyzatrex</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Medication in the fee?</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, if prescribed</td>
                  <td className="border border-gray-300 px-4 py-3">Yes, if prescribed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Labs in the fee?</td>
                  <td className="border border-gray-300 px-4 py-3">Ongoing support listed; initial blood test can be extra</td>
                  <td className="border border-gray-300 px-4 py-3">Yes — lab work included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Visits</td>
                  <td className="border border-gray-300 px-4 py-3">Video visits; follow-ups every 3–6 months</td>
                  <td className="border border-gray-300 px-4 py-3">Provider visits included</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Typical form they advertise</td>
                  <td className="border border-gray-300 px-4 py-3">Topical cream (no needles)</td>
                  <td className="border border-gray-300 px-4 py-3">Cream, pill, or injection</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Insurance billed?</td>
                  <td className="border border-gray-300 px-4 py-3">Cash membership on the pages we checked</td>
                  <td className="border border-gray-300 px-4 py-3">No insurance required; one monthly payment</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Profile</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/fountain-trt" className="text-blue-600 hover:underline">Fountain TRT</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/henry-meds-trt" className="text-blue-600 hover:underline">Henry Meds</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What the monthly fee includes
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Usually included (both):</strong> clinician review, the medication if prescribed, and messaging / follow-up.</li>
              <li><strong>Henry Meds explicit:</strong> labs, supplies, shipping, and an aromatase inhibitor if the clinician adds one.</li>
              <li><strong>Fountain explicit:</strong> medication, video visits, ongoing support. The first partner-lab blood test is a separate step — confirm whether it is billed.</li>
              <li><strong>Not guaranteed:</strong> a prescription. Both require labs and a shared decision that TRT is appropriate.</li>
              <li><strong>Compounded SKUs</strong> (Henry&apos;s $129 path) are not FDA-approved in the same way as brand testosterone products such as Kyzatrex.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For Hone, TRT Nation, Maximus, and Marek in the same all-in frame, use{' '}
              <Link href="/guides/best-online-trt-clinics" className="text-blue-600 hover:underline">
                best online TRT clinics (2026)
              </Link>
              .
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest published all-in</h3>
              <p className="text-gray-700">
                <strong>Henry Meds at $129/month</strong> compounded, or $179 for
                brand oral Kyzatrex. Labs are inside the number.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: cream-first, specialist visit</h3>
              <p className="text-gray-700">
                <strong>Fountain</strong> if you want a urology-led evaluation and a
                topical cream. Budget ~$199–$210/month plus any first lab. Confirm
                the live fee — it is not printed on the homepage.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: you need a wider clinic set</h3>
              <p className="text-gray-700">
                Neither is the cheapest headline in the category (TRT Nation lists
                $99.99 + $129 labs). Open the TRT hub if you want membership-plus-meds
                or pay-per-service models.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
              <p className="text-sm text-red-800">
                Testosterone is a controlled prescription medication. Compounded
                formulations have not been reviewed by the US FDA for safety,
                effectiveness, or quality the way approved brand products have. TRT
                has risks (including cardiovascular, fertility, and hematocrit
                changes). This information is educational only — consult a licensed
                clinician before pursuing any treatment.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare Fountain and Henry Meds"
            intro="Open the official site for today’s membership, or the VitalityScout profile for services and our take."
            brands={BRANDS}
            hubHref="/trt"
            hubLabel="Open the TRT hub →"
          />

          <div id="related" className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/guides/best-online-trt-clinics" className="text-blue-600 hover:underline">Best online TRT clinics (2026)</Link></li>
              <li><Link href="/trt" className="text-blue-600 hover:underline">TRT &amp; hormone hub</Link></li>
              <li><Link href="/mens-health" className="text-blue-600 hover:underline">Men&apos;s health hub</Link></li>
              <li><Link href="/guides/trt-cost" className="text-blue-600 hover:underline">TRT cost guide</Link></li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s TRT membership</h3>
            <p className="mb-6 text-blue-100">
              Printed $129 vs implied ~$199. Open the official page, then compare the rest of the directory.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://fountaintrt.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Fountain →
              </a>
              <a
                href="https://henrymeds.com/treatments/trt"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Henry Meds →
              </a>
              <Link
                href="/trt"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                TRT hub
              </Link>
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
              We are not affiliated with Fountain or Henry Meds. Prices were read from official
              pages on {AS_OF} and are not a quote or a guarantee. Fountain does not print a
              dollar figure on its homepage; the ~$199–$210 range is implied from “less than
              $7 a day.” Compounded products are not FDA-approved. Eligibility and treatment
              decisions must be made with a licensed clinician. Verify current pricing before you enroll.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://fountaintrt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fountain TRT — all-inclusive membership; “less than $7 a day”</a></li>
              <li>• <a href="https://henrymeds.com/treatments/trt" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Henry Meds TRT — compounded from $129/mo; Kyzatrex $179/mo; labs included</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Online TRT All-In Cheat Sheet"
            description="Fountain vs Henry Meds — what is in the monthly number and what the first lab adds."
            source="guide_fountain_vs_henry_meds_trt"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
