import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Cheapest DEXA Scan: How to Pay Under $50 (2026)',
  description: 'The cheapest ways to get a DEXA scan in 2026 — mobile vans, memberships (~$40/scan), multi-scan packages, and university labs — plus what to watch for.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the cheapest way to get a DEXA scan?',
    answer:
      'The cheapest single body-composition DEXA scan is usually a mobile-van provider — BodySpec advertises single scans starting around $45 (its direct-to-consumer range is about $40-$60). If you plan to scan more than once, a membership or multi-scan package lowers the per-scan price further; BodySpec advertises a monthly membership at $39.95 (about $40 per scan) with credits that do not expire. University human-performance labs sometimes run cheaper than boutique studios too. These are advertised prices that change; confirm current pricing directly with the provider.',
  },
  {
    question: 'How much does the cheapest DEXA scan cost in 2026?',
    answer:
      'Out-of-pocket body-composition DEXA scans run roughly $40 to $300 in 2026. The low end is mobile vans (single scans about $45-$60) and monthly membership pricing (around $40 per scan). Boutique studios sit at $99-$250, university labs around $80-$150 (Colorado State University lists $210), and hospital bone-density scans without insurance can reach $150-$400 or more. The cash prices here are body-composition scans, not diagnostic bone-density studies. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Do DEXA scan packages or memberships actually save money?',
    answer:
      'Usually, if you scan more than once or twice a year. Multi-scan packages and memberships typically cut the per-scan cost by about 20% to 40% versus a single scan, and some membership credits roll over or do not expire. If you only want one baseline scan, a single mobile-van or studio scan is cheaper than committing to a package. Compare the math against how often you plan to scan, and confirm package terms with the provider.',
  },
  {
    question: 'Can I get a DEXA scan at a university or research lab?',
    answer:
      'Yes. Some university human-performance and exercise-science labs offer DEXA body-composition scans to the public — for example, Colorado State University’s Human Performance Clinical Research Lab lists a DEXA scan at $210. Pricing varies by school and some labs note their composition scan does not report clinical bone-mineral density. You may also find low-cost or free scans by enrolling in a recruiting research study on ClinicalTrials.gov that includes DEXA. Confirm availability and price with the lab directly.',
  },
  {
    question: 'Is a cheap DEXA scan less accurate?',
    answer:
      'A budget body-composition scan from a reputable provider is not inherently less accurate — DEXA whole-body precision is typically about 1% to 2% under controlled conditions (Shepherd et al., 2017). What matters most for tracking is consistent pre-scan prep each time; pre-scan factors like hydration and food can move results as much as machine error. As general best practice, returning to the same machine and scanning under the same conditions removes one more variable. So choose a provider you can return to, not just the lowest price. This is information, not medical advice.',
  },
  {
    question: 'Is a body-composition DEXA scan covered by insurance?',
    answer:
      'Generally no. A DEXA scan for body composition (body fat and lean mass) is considered elective and paid out of pocket, which is why the cash prices on this page apply. A DEXA scan ordered for bone-density screening can be covered — Medicare and many commercial plans cover osteoporosis screening for people who qualify. You can often pay for a body-composition scan with HSA or FSA funds. Confirm coverage and HSA/FSA eligibility with your insurer, administrator, and the clinic.',
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

// The cheapest routes to a body-composition DEXA, cheapest-first. Prices are
// advertised national estimates checked in June 2026 against the cited sources;
// they are estimates to confirm with the provider, never stated as fact.
const CHEAP_ROUTES = [
  {
    route: 'Mobile vans / pop-ups',
    example: 'BodySpec mobile vans',
    price: 'From ~$45/scan (one-time)',
    bestFor: 'Lowest single-scan price; quick baseline',
    note: 'Vans and pop-ups skip leased storefront overhead, so they advertise the cheapest entry price nationally — BodySpec single scans start around $45. Scan takes under 15 minutes; you book a slot at a host gym, office, or public site.',
  },
  {
    route: 'Membership',
    example: 'BodySpec monthly membership',
    price: '~$40/scan (membership)',
    bestFor: 'Frequent scanners tracking over time',
    note: 'BodySpec advertises a monthly membership at $39.95 — about $40 per scan — with credits that never expire; its quarterly plan runs $49.95. A membership only wins if you scan more than once or twice a year.',
  },
  {
    route: 'Multi-scan package',
    example: 'Studio 3-pack / bundle',
    price: '20-40% off single price',
    bestFor: 'Tracking a 3-6 month recomp block',
    note: 'Buying scans in a bundle typically cuts the per-scan cost by 20% to 40% versus a single scan. Confirm the package terms and expiry before buying.',
  },
  {
    route: 'University / performance lab',
    example: 'CSU Human Performance Lab',
    price: '~$80-$150 (CSU lists $210)',
    bestFor: 'Public-access scan with lab oversight',
    note: 'Some exercise-science and human-performance labs sell DEXA scans to the public. CSU’s lab lists $210 and notes its composition scan does not report bone-mineral density. Pricing varies widely by school.',
  },
  {
    route: 'Research study',
    example: 'ClinicalTrials.gov recruiting study',
    price: 'Often free (if eligible)',
    bestFor: 'Free scan if you qualify and enroll',
    note: 'Many body-composition and metabolic studies include DEXA at no cost to enrolled participants. Search ClinicalTrials.gov for recruiting studies near you; eligibility criteria apply and timelines are fixed by the study.',
  },
  {
    route: 'Boutique studio',
    example: 'Fitness / longevity studio',
    price: '~$99-$250/scan',
    bestFor: 'In-person consult + add-on testing',
    note: 'Storefront studios cost more because of rent, staffing, and bundled extras (VO2 max, RMR, bloodwork). Convenient and full-service, but rarely the cheapest standalone scan.',
  },
];

export default function CheapestDexaScan() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cheapest DEXA Scan: How to Get One for Less (2026)',
    description:
      'A 2026 guide to the cheapest ways to get a body-composition DEXA scan — mobile vans, multi-scan packages and memberships, university labs, and research studies — and what to watch for before booking the lowest price.',
    url: 'https://vitalityscout.com/guides/cheapest-dexa-scan',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cheapest-dexa-scan#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — Pricing & Packages', url: 'https://www.bodyspec.com/pricing-packages' },
      { '@type': 'CreativeWork', name: 'BodySpec — What’s the Real Cost of a DEXA Scan?', url: 'https://www.bodyspec.com/blog/post/whats_the_real_cost_of_a_dexa_scan' },
      { '@type': 'CreativeWork', name: 'BodySpec — What Is a DEXA Membership?', url: 'https://www.bodyspec.com/blog/post/what_is_a_dexa_membership' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Accuracy: Understanding the Gold Standard', url: 'https://www.bodyspec.com/blog/post/dexa_scan_accuracy_understanding_the_gold_standard' },
      { '@type': 'CreativeWork', name: 'Primary.MD — DEXA Scan Cost: 2026 Pricing With and Without Insurance', url: 'https://www.primary-md.com/blog/dexa-scan-cost' },
      { '@type': 'CreativeWork', name: 'Colorado State University — Human Performance Clinical Research Lab: DEXA Scan', url: 'https://www.chhs.colostate.edu/hes-hpcrl/performance-health-analysis/dexa-scan/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cheapest-dexa-scan#faq', url: 'https://vitalityscout.com/guides/cheapest-dexa-scan' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              DEXA Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Cheapest Way to Get a DEXA Scan
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            How to get a body-composition DEXA scan for the least money in 2026 — and
            the one thing to check before you book the lowest price you find.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              The cheapest DEXA scan is usually a <strong>mobile-van provider</strong>, with
              BodySpec advertising single scans from around <strong>$45</strong>. To pay even less
              per scan, use a <strong>membership</strong> (BodySpec&apos;s monthly plan is $39.95,
              about $40 per scan) or a <strong>multi-scan package</strong> (roughly 20-40% off).
              University performance labs and recruiting research studies are other low-cost routes.
              Body-composition scans run about $40-$300 out of pocket. These are advertised estimates
              to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Cheapest routes table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cheapest DEXA Scan Routes, Compared (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Route</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Example</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
              </tr>
            </thead>
            <tbody>
              {CHEAP_ROUTES.map((r, i) => (
                <tr key={r.route} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.route}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.example}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised national estimates checked in June 2026 and change frequently.
          Confirm current pricing, location, and equipment directly with each provider before booking.
          To find providers near you, browse the{' '}
          <Link href="/dexa-scans" className="text-blue-600 hover:underline">
            DEXA scan directory by state and city
          </Link>.
        </p>
      </section>

      {/* Route 1 — mobile vans */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Mobile Vans: The Cheapest Single Scan</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The lowest entry price nationally comes from mobile DEXA providers. A van skips the rent
              and front-desk staffing of a leased storefront, so the per-scan price drops. BodySpec, a
              national mobile chain, advertises single scans <strong>starting around $45</strong> (its
              direct-to-consumer range is about <strong>$40-$60</strong>), and drops the per-scan rate
              to roughly <strong>$40</strong> on its $39.95 monthly membership. For context, Primary.MD&apos;s
              2026 cost breakdown puts body-composition scans at wellness centers at <strong>$40 to $200</strong>
              and per-scan costs through mobile providers at <strong>$65 to $150</strong> — so a sub-$50
              mobile-van scan sits at the bottom of the national range.
            </p>
            <p>
              You book a slot when a van or pop-up is hosted at a gym, office, or public space near you.
              The scan itself takes under 15 minutes and returns a segmental body-fat, lean-mass, and
              visceral-fat breakdown. If you just want one accurate baseline at the lowest price, this is
              usually the route.
            </p>
          </div>
        </div>
      </section>

      {/* Route 2 — packages + memberships */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Packages and Memberships: Cheapest Per Scan Over Time</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            If you plan to scan more than once — to watch fat loss and muscle retention across a recomp
            block — the per-scan price, not the sticker price, is what matters. Two levers lower it:
          </p>
          <ul>
            <li>
              <strong>Multi-scan packages.</strong> Buying scans as a bundle typically cuts the per-scan
              cost by <strong>20% to 40%</strong> versus a single scan, per Primary.MD&apos;s 2026 cost breakdown.
            </li>
            <li>
              <strong>Memberships.</strong> Monthly or quarterly plans drop the per-scan rate. BodySpec, for
              example, advertises a <strong>$39.95 monthly membership</strong> (about $40 per scan) and a
              $49.95 quarterly plan, with credits that <strong>never expire</strong> — so an unused scan is
              not money lost.
            </li>
          </ul>
          <p>
            The trade-off: a package or membership only beats a single mobile-van scan if you actually use
            the extra scans. For a one-time baseline, the single scan is cheaper. Run the math against how
            often you realistically plan to scan, and confirm expiry terms before you commit.
          </p>
        </div>
      </section>

      {/* Route 3 — university labs + research */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. University Labs and Research Studies</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Two often-overlooked low-cost routes sit on college campuses:
            </p>
            <ul>
              <li>
                <strong>University performance labs.</strong> Some exercise-science and human-performance
                labs sell DEXA body-composition scans to the public. Colorado State University’s Human
                Performance Clinical Research Lab, for example, lists a DEXA scan at <strong>$210</strong> —
                and explicitly notes that its composition scan does <em>not</em> report clinical
                bone-mineral density. Pricing varies widely by school; some are cheaper than nearby
                boutique studios.
              </li>
              <li>
                <strong>Research studies.</strong> Many body-composition, nutrition, and metabolic-health
                studies include a DEXA scan at no cost to enrolled participants. Search ClinicalTrials.gov
                for recruiting studies near you that list DEXA or body composition. You will need to meet
                the study’s eligibility criteria, and the scan happens on the study’s timeline — but it can
                be free.
              </li>
            </ul>
            <p>
              Call or email the lab to confirm public availability, the current price, and exactly what the
              scan reports before you plan a visit.
            </p>
          </div>
        </div>
      </section>

      {/* What to watch for */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Watch For Before You Book the Cheapest Option</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Cheapest is not automatically a bad scan — DEXA whole-body precision is typically about
            <strong> 1% to 2%</strong> under controlled conditions, and a budget scan from a reputable
            provider is genuinely accurate. But the lowest price can cost you in other ways if you skip
            these checks:
          </p>
          <ul>
            <li>
              <strong>Standardize where you can — ideally the same machine.</strong> The biggest tracking
              variable is usually pre-scan prep, not the hardware; reputable mobile fleets use harmonized
              calibration and QA to keep their van and storefront scanners aligned. Even so, differences
              between devices <em>can</em> shift body-fat readings, so as best practice pick a provider you
              can return to — a van route that visits your city regularly, or a single studio — rather than
              chasing the cheapest scan each visit.
            </li>
            <li>
              <strong>Composition is not a diagnostic bone-density test.</strong> A cheap body-composition
              scan measures fat, lean mass, and bone mass, but it is <em>not</em> the same as a clinical
              bone-density (osteoporosis) DEXA. If you need bone-density screening, that is a different,
              insurance-relevant test.
            </li>
            <li>
              <strong>Check what the price includes.</strong> Is it scan-only, or does it include a results
              consultation? Are there interpretation or cancellation fees? The lowest sticker price can hide
              add-ons.
            </li>
            <li>
              <strong>Standardize your prep.</strong> Pre-scan factors — hydration, food, time of day,
              positioning — can move results as much as machine error. Scan under the same conditions each
              time for a clean comparison.
            </li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> The cash prices in this guide are body-composition scans, which are
              generally elective and paid out of pocket. A DEXA scan ordered for bone-density screening
              may be covered by insurance. You can often pay for a body-composition scan with HSA or FSA
              funds — see our{' '}
              <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="font-medium text-yellow-900 underline">
                HSA/FSA eligibility guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How the cheapest options compare to the rest */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How the Cheap Options Compare to Studios and Hospitals</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Body-composition DEXA scans run roughly <strong>$40 to $300</strong> out of pocket in 2026.
              The cheap end is mobile vans (single scans from ~$45) and membership pricing (about $40 per
              scan); boutique studios sit at <strong> $99-$250</strong>; university labs land around
              <strong> $80-$150</strong> (Colorado State University&apos;s lab lists $210); and hospital
              bone-density scans without insurance can reach <strong>$150-$400+</strong>. GoodRx data
              cited by BodySpec puts hospital-based bone-density exams above $300 on average.
            </p>
            <p>
              The takeaway: you do not need a hospital or a premium studio for a body-composition scan. A
              mobile van or membership gets you the same gold-standard measurement at a fraction of the
              price — as long as you stick with one machine for tracking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a Cheap DEXA Scan Near You</h3>
          <p className="text-gray-600 mb-6">
            Compare verified DEXA providers by state and city — prices, locations, and add-on testing.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Body-composition tests compared on cost and accuracy</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-gray-900">Is a DEXA Scan HSA/FSA Eligible?</div>
                <div className="text-sm text-gray-600">How to pay for a scan with pre-tax dollars</div>
              </div>
            </div>
          </Link>

          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Hub</div>
                <div className="text-sm text-gray-600">Find body-composition clinics by city</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.bodyspec.com/pricing-packages" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — Pricing &amp; Packages</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/whats_the_real_cost_of_a_dexa_scan" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — What&apos;s the Real Cost of a DEXA Scan?</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/what_is_a_dexa_membership" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — What Is a DEXA Membership?</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_accuracy_understanding_the_gold_standard" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Accuracy: Understanding the Gold Standard</a></li>
            <li>• <a href="https://www.primary-md.com/blog/dexa-scan-cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Primary.MD — DEXA Scan Cost: 2026 Pricing With and Without Insurance</a></li>
            <li>• <a href="https://www.chhs.colostate.edu/hes-hpcrl/performance-health-analysis/dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Colorado State University — Human Performance Clinical Research Lab: DEXA Scan</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_cheapest_dexa_scan"
        />
      </div>

      <Footer />
    </main>
  );
}
