import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/best-online-trt-clinics';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Best Online TRT Clinics (2026): Fountain $199 vs Henry Meds $129' },
  alternates: { canonical: PAGE_URL },
  description:
    'Best online TRT clinics in 2026: Fountain ~$199 all-in, Henry Meds $129, TRT Nation $99.99 plus $129 labs. All-in monthly math, Hone and Maximus compared.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does online TRT cost per month in 2026?',
    answer:
      `It depends on whether the advertised number is all-in or membership-only. As of ${AS_OF}, Fountain markets an all-inclusive membership around $199/month (the site also says “less than $7 a day”). Henry Meds publishes compounded TRT at $129/month including visits, labs, medication, supplies, and shipping (Kyzatrex oral is $179/month). TRT Nation’s 2026 FAQ lists $99.99/month for a 2.5-month testosterone supply with Arimidex, syringes, and unlimited consults — labs are extra at $129. Hone splits the bill: Plus membership $135/month plus medication from about $28/month for injections. These are published estimates — verify the current figure and what it includes with the clinic before you enroll.`,
  },
  {
    question: 'Which online TRT clinics include medication in the monthly price?',
    answer:
      'Fountain and Henry Meds publish all-in memberships that include the medication (and, at Henry Meds, labs). TRT Nation’s $99.99 plan also includes testosterone and an aromatase inhibitor; labs are billed separately. Hone and Marek do not bundle medication into a single advertised monthly number — Hone charges membership plus meds, and Marek is pay-per-service with an intake fee, a required lab panel, and medication billed separately (Marek does not publish a flat TRT medication price). Always add every line before you compare clinics.',
  },
  {
    question: 'Is Fountain TRT still $199 a month in 2026?',
    answer:
      `Third-party 2026 reviews and Fountain’s own “one flat monthly fee / less than $7 a day” language still point to about $199/month all-inclusive for medication, video visits, and ongoing support. Fountain’s homepage does not print a dollar figure in the hero, and an initial blood test or assessment can sit outside that monthly fee. Confirm the live membership, what labs are included, and any onboarding charge on fountaintrt.com before you start.`,
  },
  {
    question: 'Does Hone Health take insurance for TRT?',
    answer:
      'Hone’s own cost page states that it currently does not accept insurance. The cash path is a membership (Plus $135/month for hormone-only care, Premium $155/month if you add metabolic/weight care) plus separately billed medication (injections advertised from about $28/month). Initial lab panels are extra (about $45–$65, with a confirmatory panel if you are prescribed testosterone). If using insurance is the goal, ask a local endocrinology or urology clinic — do not assume an online TRT brand will bill your plan.',
  },
  {
    question: 'What is the cheapest legitimate online TRT clinic?',
    answer:
      'On published 2026 numbers, TRT Nation’s $99.99/month testosterone plan is the lowest recurring medication line, but labs are $129 extra and testosterone has a 2.5-month minimum. Henry Meds at $129/month is often cheaper all-in once you add TRT Nation’s lab fee. Maximus advertises about $99.99/month only on a committed annual enclomiphene plan — that is not classic injectable TRT, and required labs in months 1 and 2 are extra. “Cheapest” is the all-in number (membership + meds + labs + minimum term), not the headline.',
  },
  {
    question: 'Is Maximus TRT or something else?',
    answer:
      'Maximus’s flagship King / Testosterone Protocol uses enclomiphene, an oral SERM that tries to raise the body’s own testosterone instead of replacing it. Official pricing as of this review is $199.99/month month-to-month (consult + medication if you qualify), with cheaper quarterly and annual commitments, plus $99.99 lab kits required in months 1 and 2. It is a fertility-sparing alternative, not a substitute for exogenous testosterone in every patient, and it only works if your HPG axis still responds. A clinician has to decide whether it fits you.',
  },
];

const TRT_BRANDS = [
  {
    name: 'Fountain TRT',
    price: '~$199/mo all-in',
    blurb: 'Flat membership marketed as medication + visits + support. Confirm the live fee and what labs cost on Fountain.',
    siteUrl: 'https://fountaintrt.com',
    profileHref: '/providers/fountain-trt',
  },
  {
    name: 'Henry Meds',
    price: '$129/mo all-in',
    blurb: 'Published compounded TRT includes visits, labs, meds, supplies, and shipping. Kyzatrex oral is $179/mo.',
    siteUrl: 'https://henrymeds.com/treatments/trt',
    profileHref: '/providers/henry-meds-trt',
  },
  {
    name: 'TRT Nation',
    price: '$99.99/mo + $129 labs',
    blurb: '2026 FAQ: testosterone supply, Arimidex, syringes, unlimited consults. Labs are not included. 2.5-month minimum on testosterone.',
    siteUrl: 'https://trtnation.com',
    profileHref: '/providers/trt-nation',
  },
  {
    name: 'Hone Health',
    price: '$135/mo + meds',
    blurb: 'Plus membership is separate from medication (injections from ~$28/mo). Hone states it does not accept insurance.',
    siteUrl: 'https://honehealth.com/mens/testosterone-replacement-therapy/',
    profileHref: '/providers/hone-health-trt',
  },
  {
    name: 'Maximus',
    price: '$199.99/mo + labs',
    blurb: 'King Protocol enclomiphene (not classic TRT). Annual plans are cheaper. Required labs in months 1–2 are $99.99 each.',
    siteUrl: 'https://www.maximustribe.com/testosterone-enclomiphene/',
    profileHref: '/providers/maximus',
  },
  {
    name: 'Marek Health',
    price: 'Pay-per-service',
    blurb: 'No monthly membership. Intake about $299 plus a minimum $450 lab panel; medication is billed separately and not published as a flat monthly number.',
    siteUrl: 'https://marekhealth.com/testosterone',
    profileHref: '/providers/marek-health-trt',
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

export default function BestOnlineTRTClinicsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Best Online TRT Clinics Compared (2026)',
    description:
      '2026 comparison of online TRT clinics — Fountain, Marek, TRT Nation, Henry Meds, Hone, and Maximus — with published prices, all-in monthly math, and what membership vs medication-separate actually means.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Testosterone replacement therapy (telehealth)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Fountain TRT — official site (all-inclusive membership language)', url: 'https://fountaintrt.com' },
      { '@type': 'CreativeWork', name: 'Henry Meds — Testosterone Replacement Therapy pricing', url: 'https://henrymeds.com/treatments/trt' },
      { '@type': 'CreativeWork', name: 'TRT Nation — FAQs 2026 (plan inclusions and lab fee)', url: 'https://trtnation.com/faqs-2026/' },
      { '@type': 'CreativeWork', name: 'Hone Health — Online testosterone replacement therapy', url: 'https://honehealth.com/mens/testosterone-replacement-therapy/' },
      { '@type': 'CreativeWork', name: 'Hone Health — TRT cost per month', url: 'https://honehealth.com/edge/testosterone-replacement-therapy-cost/' },
      { '@type': 'CreativeWork', name: 'Maximus — Testosterone / King Protocol pricing', url: 'https://www.maximustribe.com/testosterone-enclomiphene/' },
      { '@type': 'CreativeWork', name: 'Marek Health — testosterone program and intake', url: 'https://marekhealth.com/testosterone' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Best Online TRT Clinics', item: PAGE_URL },
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
              <span className="text-gray-900">Best Online TRT Clinics</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/trt" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; TRT &amp; hormone hub
            </Link>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                2026 Updated
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best Online TRT Clinics Compared (2026)
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              The advertised monthly number is not always the bill. Here is what Fountain, Marek,
              TRT Nation, Henry Meds, Hone, and Maximus actually publish — and the all-in math
              once membership, medication, and labs are stacked.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Fountain</strong> still markets an all-inclusive membership
                around <strong>$199/month</strong>. <strong>Henry Meds</strong> publishes compounded
                TRT at <strong>$129/month</strong> with visits, labs, and meds included.{' '}
                <strong>TRT Nation</strong> lists <strong>$99.99/month</strong> for testosterone plus
                Arimidex, with labs extra at <strong>$129</strong>. <strong>Hone</strong> is{' '}
                <strong>$135/month + meds</strong> (injections from ~$28). <strong>Marek</strong> is
                pay-per-service (about <strong>$299 intake + $450+ labs</strong>, meds separate).
                Prices are published estimates — verify with each clinic. This is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices checked against official pages and each clinic’s published 2026 FAQ on {AS_OF} • 12 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick recommendations (all-in, not headline)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-1">Simplest all-in</div>
                <div className="text-gray-900 font-semibold">Fountain TRT</div>
                <div className="text-gray-600">~$199/mo membership; meds included</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Lowest published all-in</div>
                <div className="text-gray-900 font-semibold">Henry Meds</div>
                <div className="text-gray-600">$129/mo visits + labs + meds</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-1">Lowest medication line</div>
                <div className="text-gray-900 font-semibold">TRT Nation</div>
                <div className="text-gray-600">$99.99/mo + $129 labs</div>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Open a clinic profile, then verify the live price"
            intro="Every figure on this page is a published estimate. Confirm what is included — especially labs and the first-month minimum — before you enroll."
            brands={TRT_BRANDS.slice(0, 3)}
            hubHref="/trt"
            hubLabel="Compare TRT providers →"
          />

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#all-in" className="text-blue-600 hover:underline">1. All-in monthly math (membership vs meds-separate)</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. 2026 comparison table</a></li>
              <li><a href="#fountain" className="text-blue-600 hover:underline">3. Fountain TRT</a></li>
              <li><a href="#henry" className="text-blue-600 hover:underline">4. Henry Meds</a></li>
              <li><a href="#nation" className="text-blue-600 hover:underline">5. TRT Nation</a></li>
              <li><a href="#hone" className="text-blue-600 hover:underline">6. Hone Health</a></li>
              <li><a href="#maximus" className="text-blue-600 hover:underline">7. Maximus</a></li>
              <li><a href="#marek" className="text-blue-600 hover:underline">8. Marek Health</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">9. How to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">10. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              All-in monthly math: membership vs medication-separate
            </h2>
            <p className="text-gray-700 mb-4">
              Online TRT clinics use three billing models. Comparing the headline number across
              models is how people under-budget:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>All-in membership:</strong> one monthly fee is supposed to cover the visit, the medication, and usually labs or supplies (Fountain, Henry Meds).</li>
              <li><strong>Medication plan + extra labs:</strong> the monthly drug price looks cheap until you add the lab panel and any minimum term (TRT Nation).</li>
              <li><strong>Membership + meds (two bills):</strong> Hone’s $135 Plus fee does not include testosterone. Marek charges intake and labs, then medications à la carte — and does not publish a flat TRT med price.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For a verified monthly-price index across clinics that actually post a number, see
              our <Link href="/guides/trt-cost" className="text-blue-600 hover:underline">TRT cost guide</Link>.
              For where TRT sits next to GLP-1s, labs, and cash-pay visits, use the{' '}
              <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">cash-pay healthcare map</Link>.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6 not-prose">
              <h4 className="text-amber-900 font-bold mb-2">Reality check</h4>
              <p className="text-sm text-amber-800 mb-0">
                A reputable clinic will not guarantee a prescription before labs. Testosterone is a
                controlled medication. If your levels are normal, you should be turned away — not
                sold a subscription. This guide is informational only; talk to a licensed clinician.
              </p>
            </div>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Head-to-head (published prices as of {AS_OF})
            </h2>
          </div>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">Clinic</th>
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">Published monthly</th>
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">What that number includes</th>
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">Honest all-in</th>
                  <th className="px-3 py-3 text-left font-semibold text-gray-700">Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="bg-blue-50/30">
                  <td className="px-3 py-3 font-semibold text-blue-700">Fountain TRT</td>
                  <td className="px-3 py-3 font-semibold text-green-700">~$199</td>
                  <td className="px-3 py-3 text-gray-600">Meds + visits + support (flat membership)</td>
                  <td className="px-3 py-3 text-gray-600">~$199/mo after onboarding labs</td>
                  <td className="px-3 py-3"><Link href="/providers/fountain-trt" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900">Henry Meds</td>
                  <td className="px-3 py-3 font-semibold text-green-700">$129</td>
                  <td className="px-3 py-3 text-gray-600">Visits, labs, meds, supplies, shipping</td>
                  <td className="px-3 py-3 text-gray-600">~$129/mo ($179 Kyzatrex)</td>
                  <td className="px-3 py-3"><Link href="/providers/henry-meds-trt" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900">TRT Nation</td>
                  <td className="px-3 py-3 font-semibold text-green-700">$99.99</td>
                  <td className="px-3 py-3 text-gray-600">Test C + Arimidex + syringes + consults; labs extra</td>
                  <td className="px-3 py-3 text-gray-600">~$99.99 + $129 labs; 2.5-mo min</td>
                  <td className="px-3 py-3"><Link href="/providers/trt-nation" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900">Hone Health</td>
                  <td className="px-3 py-3">$135 + meds</td>
                  <td className="px-3 py-3 text-gray-600">Plus membership; injections from ~$28/mo</td>
                  <td className="px-3 py-3 text-gray-600">~$163–$195/mo + startup labs</td>
                  <td className="px-3 py-3"><Link href="/providers/hone-health-trt" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
                <tr>
                  <td className="px-3 py-3 font-semibold text-gray-900">Maximus</td>
                  <td className="px-3 py-3">$199.99</td>
                  <td className="px-3 py-3 text-gray-600">Enclomiphene protocol + consult; labs extra</td>
                  <td className="px-3 py-3 text-gray-600">~$200/mo + $99.99×2 labs; annual cheaper</td>
                  <td className="px-3 py-3"><Link href="/providers/maximus" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
                <tr className="bg-purple-50/30">
                  <td className="px-3 py-3 font-semibold text-purple-700">Marek Health</td>
                  <td className="px-3 py-3">No monthly membership</td>
                  <td className="px-3 py-3 text-gray-600">~$299 intake + min $450 labs; meds à la carte</td>
                  <td className="px-3 py-3 text-gray-600">Year-one floor ~$749 before medication</td>
                  <td className="px-3 py-3"><Link href="/providers/marek-health-trt" className="text-blue-600 hover:underline">Profile</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-8">
            Sources: Fountain homepage membership language; Henry Meds TRT page (checked {AS_OF});
            TRT Nation FAQs 2026; Hone TRT and cost pages; Maximus Testosterone Protocol page;
            Marek Health testosterone intake page. Confirm every figure with the provider.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 id="fountain" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Fountain TRT</h2>
            <p className="text-gray-700 mb-4">
              Fountain is still the “one bill” cream-first clinic. The site does not print $199 in
              the hero; it says a <strong>transparent, all-inclusive monthly fee</strong> and
              “less than $7 a day,” which is the same ~$199 neighborhood 2026 reviews still cite.
              That fee is described as covering medication, video visits, and ongoing medical
              support. An initial blood test or Low T assessment can sit outside the monthly
              membership — treat ~$199 as the ongoing line, not cash due today.
            </p>
            <p className="text-gray-700 mb-4">
              Fountain lists a limited set of states on its site. Confirm yours before you take
              the assessment. Best for men who want a predictable cash number and prefer cream
              over syringes. See the{' '}
              <Link href="/providers/fountain-trt" className="text-blue-600 hover:underline">Fountain TRT profile</Link>.
            </p>

            <h2 id="henry" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Henry Meds</h2>
            <p className="text-gray-700 mb-4">
              Henry Meds is the cleanest published all-in number we can cite from an official
              page as of {AS_OF}. The{' '}
              <a href="https://henrymeds.com/treatments/trt" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">TRT treatment page</a>{' '}
              states compounded treatments start at <strong>$129 per month</strong> and that the
              price includes healthcare provider visits, labwork, medication and supplies,
              shipping, and ongoing support. Oral Kyzatrex is listed at <strong>$179/month</strong>{' '}
              and is not available in California. Anastrozole, if prescribed, is described as
              included.
            </p>
            <p className="text-gray-700 mb-4">
              That makes Henry Meds the usual winner on all-in math versus TRT Nation once you
              add Nation’s $129 lab fee. Eligibility on Henry’s page is age-gated (men 35–65 /
              women 35–60) and lab-dependent. See the{' '}
              <Link href="/providers/henry-meds-trt" className="text-blue-600 hover:underline">Henry Meds TRT profile</Link>.
            </p>

            <h2 id="nation" className="text-2xl font-bold text-gray-900 mt-10 mb-4">TRT Nation</h2>
            <p className="text-gray-700 mb-4">
              The 2025 version of this guide treated Nation as “$99 + $75–$150 medication.” That
              is stale. TRT Nation’s own{' '}
              <a href="https://trtnation.com/faqs-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">2026 FAQ</a>{' '}
              says the <strong>$99.99/month</strong> plan includes a 2.5-month supply of
              testosterone cypionate (listed at 200 mg/week), Arimidex, syringes, and unlimited
              consultation and follow-ups. <strong>Labs are not included</strong> — the published
              lab fee is <strong>$129</strong>, or you can send qualifying outside labs.
            </p>
            <p className="text-gray-700 mb-4">
              All-in for the first order is therefore closer to <strong>$99.99 + $129</strong>,
              with a 2.5-month testosterone minimum. After that, $99.99/month is a real
              medication-inclusive line — as long as you do not need extra ancillaries. California
              pricing may vary. See the{' '}
              <Link href="/providers/trt-nation" className="text-blue-600 hover:underline">TRT Nation profile</Link>.
            </p>

            <h2 id="hone" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hone Health</h2>
            <p className="text-gray-700 mb-4">
              Hone is the two-bill model. The official TRT page lists{' '}
              <strong>Plus at $135/month</strong> (hormone-only) and{' '}
              <strong>Premium at $155/month</strong> (adds weight/metabolic care). Medication is
              extra: injections advertised <strong>from $28/month</strong>, cream or troche from
              about $60/month. Initial labs are a separate $45-range panel, plus a confirmatory
              panel if you are prescribed testosterone.
            </p>
            <p className="text-gray-700 mb-4">
              Honest all-in on Plus + injections is roughly <strong>$163–$195/month</strong> after
              startup labs. Hone’s own cost article states it <strong>currently does not accept
              insurance</strong> — the older “Hone bills insurance” line on this page was wrong
              and is removed. What you are paying for is recurring 40+ biomarker monitoring and
              physician follow-up, not a single cheap vial. See the{' '}
              <Link href="/providers/hone-health-trt" className="text-blue-600 hover:underline">Hone Health TRT profile</Link>.
            </p>

            <h2 id="maximus" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Maximus</h2>
            <p className="text-gray-700 mb-4">
              Maximus belongs in a 2026 TRT comparison because men searching “online TRT”
              land on its King / Testosterone Protocol — but it is <strong>enclomiphene</strong>,
              not replacement testosterone. The official page prices month-to-month at{' '}
              <strong>$199.99</strong> (consult + medication if qualified), with cheaper quarterly
              and annual commitments (annual advertised in the ~$99.99–$119.99 range). Required
              at-home labs in months 1 and 2 are <strong>$99.99 each</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              That protocol tries to raise your own production and is marketed as fertility-
              sparing. It only works if the HPG axis still responds. If you already know you need
              exogenous testosterone, compare Fountain or Henry Meds instead. See the{' '}
              <Link href="/providers/maximus" className="text-blue-600 hover:underline">Maximus profile</Link>.
            </p>

            <h2 id="marek" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Marek Health</h2>
            <p className="text-gray-700 mb-4">
              Marek is still the comprehensive hormone-optimization clinic, not a $99 TRT club.
              The testosterone page lists a <strong>$299 intake assessment</strong> (credited
              toward the first provider visit) and requires a <strong>minimum $450 lab panel</strong>.
              Marek does <strong>not publish a flat monthly medication price</strong> — catalog
              copy says medication cost is separate and varies by dose. We will not invent one.
            </p>
            <p className="text-gray-700 mb-4">
              The honest floor before any drug is about <strong>$749</strong> (intake + minimum
              labs), then medication, then follow-up labs and visits every six months. Worth it
              if you want a wide panel, peptides, and coaching. Overkill if you just want
              monitored testosterone. Marek notes it is not available in every state. See the{' '}
              <Link href="/providers/marek-health-trt" className="text-blue-600 hover:underline">Marek Health TRT profile</Link>.
            </p>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to choose</h2>
            <div className="space-y-6 my-8 not-prose">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">If you want one predictable bill…</h4>
                <p className="text-gray-700 text-sm">
                  Start with <strong>Henry Meds ($129)</strong> or <strong>Fountain (~$199)</strong>.
                  Henry publishes the inclusions on the TRT page; Fountain’s dollar figure is
                  implied by the “less than $7 a day” language — confirm it at checkout.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">If the headline has to be under $100…</h4>
                <p className="text-gray-700 text-sm">
                  <strong>TRT Nation $99.99</strong> is the published medication line. Add $129
                  labs and the 2.5-month minimum before you call it cheaper than Henry Meds.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">If you want labs and a dashboard…</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Hone Plus ($135 + meds)</strong> is built around recurring biomarkers.
                  Budget the drug on top. It does not bill insurance.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">If fertility matters more than replacement…</h4>
                <p className="text-gray-700 text-sm">
                  Look at <strong>Maximus enclomiphene</strong> first, then ask a clinician whether
                  your axis can respond. Do not treat $99.99/year-plan marketing as injectable TRT.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">If you want the full workup…</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Marek</strong> — pay for the labs and the consult, not a bundled vial.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Also compare local in-person options on the{' '}
              <Link href="/mens-health" className="text-blue-600 hover:underline">men&apos;s health hub</Link>{' '}
              and the <Link href="/trt" className="text-blue-600 hover:underline">TRT directory</Link>.
              For a one-page view of cash-pay meds versus visits and imaging, use the{' '}
              <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">cash-pay healthcare map</Link>.
            </p>
          </div>

          <BrandCtaGrid
            title="Ready to compare the six clinics on this page?"
            intro="Visit the official site for the live price, or open the VitalityScout profile for services, coverage, and our take."
            brands={TRT_BRANDS}
            hubHref="/trt"
            hubLabel="Browse telehealth TRT providers →"
          />

          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find TRT treatment</h3>
            <p className="text-gray-600 mb-6">
              Telehealth convenience, or local hormone clinics if you want an in-person exam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/trt"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Telehealth TRT providers →
              </Link>
              <Link
                href="/guides/trt-cost"
                className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50 transition-colors"
              >
                TRT cost guide
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-4">Related resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/trt-cost" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">TRT cost (verified monthly prices)</div>
                <div className="text-sm text-gray-600">Membership-only vs all-in quotes across clinics that publish a number</div>
              </Link>
              <Link href="/guides/trt-testosterone-therapy" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Complete TRT guide</div>
                <div className="text-sm text-gray-600">What testosterone replacement is, who it is for, and the safety picture</div>
              </Link>
              <Link href="/mens-health" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Men&apos;s health hub</div>
                <div className="text-sm text-gray-600">ED, hair loss, and the same telehealth brands in one compare grid</div>
              </Link>
              <Link href="/guides/cash-pay-healthcare-map" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Cash-pay healthcare map</div>
                <div className="text-sm text-gray-600">Where monthly TRT sits next to labs, imaging, and surgery</div>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://fountaintrt.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fountain TRT — official site (all-inclusive membership / “less than $7 a day”)</a></li>
              <li>• <a href="https://henrymeds.com/treatments/trt" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Henry Meds — TRT pricing ($129 compounded / $179 Kyzatrex, inclusions)</a></li>
              <li>• <a href="https://trtnation.com/faqs-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">TRT Nation — FAQs 2026 ($99.99 plan inclusions, $129 labs)</a></li>
              <li>• <a href="https://honehealth.com/mens/testosterone-replacement-therapy/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hone — TRT page (Plus $135 / Premium $155, meds from $28)</a></li>
              <li>• <a href="https://honehealth.com/edge/testosterone-replacement-therapy-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hone — TRT cost article (no insurance; membership + meds)</a></li>
              <li>• <a href="https://www.maximustribe.com/testosterone-enclomiphene/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Maximus — Testosterone Protocol ($199.99/mo, $99.99 labs)</a></li>
              <li>• <a href="https://marekhealth.com/testosterone" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Marek Health — testosterone intake ($299) and $450 lab minimum</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the TRT All-In Cost Cheat Sheet"
            description="How to add membership + medication + labs so the cheap clinic is actually cheap."
            source="guide_best_online_trt_clinics"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
