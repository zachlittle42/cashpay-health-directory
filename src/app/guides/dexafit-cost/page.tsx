import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DexaFit Cost: DEXA, VO2 Max & RMR Prices (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexafit-cost' },
  description: 'What DexaFit costs in 2026 — DEXA scans, VO2 max, RMR, and 2-/3-service bundles by location ($119-$575), plus how it compares to BodySpec.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DexaFit scan cost?',
    answer:
      'A single DexaFit DEXA body-composition scan runs roughly $119 to $199 depending on the location — lower-cost franchises like DexaFit Nashua charge $119, DexaFit Las Vegas $139, and DexaFit Cincinnati $199. VO2 max and RMR (metabolism) tests are priced similarly per location, from about $119 to $249 each. DexaFit is a franchise, so each studio sets its own prices; these are advertised rates that change, so confirm current pricing with your local DexaFit before booking.',
  },
  {
    question: 'How much does a DexaFit VO2 max test cost?',
    answer:
      'A DexaFit VO2 max cardio-fitness test costs roughly $119 to $249 depending on the location — for example $119 at DexaFit Nashua, $179 at DexaFit Las Vegas, and $249 at DexaFit Cincinnati. Bundling VO2 max with a DEXA scan usually lowers the combined price (Cincinnati prices DEXA + VO2 max at $399 versus $448 separately). These are advertised estimates; confirm the current price with your local DexaFit.',
  },
  {
    question: 'Is a DexaFit bundle cheaper than buying tests separately?',
    answer:
      'Usually yes. DexaFit franchises discount multi-test bundles — DexaFit Cincinnati advertises 10% off two-service bundles and 15% off the three-service DEXA + VO2 max + RMR bundle ($575 versus $677 a la carte). DexaFit Nashua sells all three together for $319, and DexaFit Las Vegas bundles DEXA + RMR + VO2 max plus a free Styku 3D scan for $419. The exact discount varies by location; confirm the current bundle price with your local studio.',
  },
  {
    question: 'Why does DexaFit pricing vary so much between locations?',
    answer:
      'DexaFit is a franchise — DexaFit says it operates across 41 states on four continents — so each independently owned studio sets its own prices based on local rent, equipment, and demand. That is why a single DEXA scan can be $119 at one location and $199 at another. Many studios also bundle add-ons (a free Styku 3D body scan, optional physician-guided result reviews) that move the price. Always check the pricing page for the specific DexaFit nearest you.',
  },
  {
    question: 'How does DexaFit compare to BodySpec on price?',
    answer:
      'For a standalone DEXA body-composition scan, BodySpec is generally cheaper — its mobile-van scans advertise around $40-$60 — while DexaFit DEXA scans run roughly $119-$199. DexaFit costs more partly because it is a fixed studio that also offers VO2 max, RMR, and bundle packages under one roof, whereas BodySpec focuses on low-cost DEXA. If you only want a DEXA scan, BodySpec is usually the budget pick; if you want metabolic and cardio testing bundled, DexaFit packages them. Verify current pricing with each provider.',
  },
  {
    question: 'Do DexaFit purchases or packages expire?',
    answer:
      'At locations that publish the term, unused prepaid DexaFit services expire 12 months from the purchase date, and some bundles exclude certain scans (DexaFit Nashua, for example, excludes its DexaStrong bone-density scan from package and gift-certificate offers). Expiration and exclusion terms are set per franchise, so read the fine print and confirm the policy with your local DexaFit before buying a multi-pack.',
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

// Real DexaFit franchise pricing pulled from three published location pricing
// pages in June 2026 (Nashua, Las Vegas, Cincinnati) to show the franchise's
// pricing spread. Prices are advertised estimates to confirm with each studio.
const LOCATION_PRICING = [
  {
    location: 'DexaFit Nashua (NH)',
    dexa: '$119',
    vo2: '$119',
    rmr: '$119',
    bundle3: '$319',
    note: 'Among the lowest published DexaFit pricing; flat $119 per single test.',
    website: 'https://www.nashua.dexafit.com/pricing',
  },
  {
    location: 'DexaFit Las Vegas (NV)',
    dexa: '$139',
    vo2: '$179',
    rmr: '$149',
    bundle3: '$419',
    note: 'Mid-tier; three-service ELITE bundle includes a free Styku 3D body scan.',
    website: 'https://www.dexafitlv.com/pricing',
  },
  {
    location: 'DexaFit Cincinnati (OH)',
    dexa: '$199',
    vo2: '$249',
    rmr: '$229',
    bundle3: '$575',
    note: 'Higher-tier; publishes multi-packs and optional physician-guided reviews.',
    website: 'https://www.cincinnati.dexafit.com/pricing',
  },
];

export default function DexaFitCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DexaFit Cost: DEXA, VO2 Max, RMR & Bundle Pricing (2026)',
    description:
      'A 2026 guide to what DexaFit costs — DEXA body-composition scans, VO2 max and RMR tests, and multi-service bundles by location, plus how DexaFit pricing compares to BodySpec.',
    url: 'https://vitalityscout.com/guides/dexafit-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexafit-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition scan, VO2 max test, and resting metabolic rate (RMR) test',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'DexaFit Nashua — Pricing', url: 'https://www.nashua.dexafit.com/pricing' },
      { '@type': 'CreativeWork', name: 'DexaFit Las Vegas — Pricing', url: 'https://www.dexafitlv.com/pricing' },
      { '@type': 'CreativeWork', name: 'DexaFit Cincinnati — Pricing', url: 'https://www.cincinnati.dexafit.com/pricing' },
      { '@type': 'CreativeWork', name: 'DexaFit — VO2 Max Fitness Test', url: 'https://www.dexafit.com/dexau/vo2-fitness-test' },
      { '@type': 'CreativeWork', name: 'DexaFit — Home (locations: 41 states, four continents)', url: 'https://www.dexafit.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexafit-cost#faq', url: 'https://vitalityscout.com/guides/dexafit-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
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
              Provider Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DexaFit Cost: DEXA, VO2 Max &amp; RMR Pricing
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What DexaFit actually charges in 2026 — single scans, VO2 max and RMR tests,
            multi-service bundles — and how the franchise compares to other DEXA options.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A single DexaFit DEXA body-composition scan costs roughly{' '}
              <strong>$119 to $199</strong>, and VO2 max or RMR tests run about{' '}
              <strong>$119 to $249</strong> each, depending on the location. Because DexaFit is a
              franchise, prices vary by studio: DexaFit Nashua charges $119 per test, Las Vegas
              $139-$179, and Cincinnati $199-$249. Three-service bundles range from{' '}
              <strong>$319 to $575</strong>. These are advertised estimates to confirm with the
              provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* What DexaFit is */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is DexaFit?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            DexaFit is a national franchise of body-composition and fitness-testing studios.
            DexaFit says it operates across <strong>41 states</strong> on four continents, with each
            studio independently owned. Most locations offer the same core menu under one roof:
          </p>
          <ul>
            <li>
              <strong>DEXA scan</strong> — a dual-energy X-ray absorptiometry scan that, per
              DexaFit, gives a &ldquo;precise measurement of your body composition, including bone
              density, lean muscle, visceral fat, and more.&rdquo;
            </li>
            <li>
              <strong>VO2 max test</strong> — a cardio-fitness test done on a treadmill or bike with
              a mask and heart-rate monitor over 10-20 minutes, returning your aerobic base,
              anaerobic threshold, and personalized training zones.
            </li>
            <li>
              <strong>RMR (resting metabolic rate)</strong> — a metabolism test that measures how
              many calories your body burns at rest, used to tailor a nutrition plan.
            </li>
            <li>
              <strong>Add-ons</strong> — many studios add a Styku 3D body scan, bone-density scans,
              or optional physician-guided result reviews.
            </li>
          </ul>
          <p>
            Because it is a franchise, the most reliable way to know what you will pay is the pricing
            page for the specific DexaFit nearest you. The numbers below show the real spread across
            three published location pricing pages.
          </p>
        </div>
      </section>

      {/* Quick price snapshot — single tests by location */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DexaFit Price Snapshot by Location (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">DEXA Scan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">VO2 Max</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">RMR</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">3-Service Bundle</th>
              </tr>
            </thead>
            <tbody>
              {LOCATION_PRICING.map((l, i) => (
                <tr key={l.location} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{l.location}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{l.dexa}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{l.vo2}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{l.rmr}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{l.bundle3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Advertised rates from each location&apos;s published pricing page, checked June 2026.
          DexaFit is a franchise and prices change; confirm current pricing directly with the studio
          nearest you. The three-service bundle is DEXA + VO2 max + RMR.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives DexaFit Pricing</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              A single DexaFit DEXA scan ranges from $119 to roughly $199 across locations — a real
              spread for the same test. A few concrete factors explain it:
            </p>
            <ul>
              <li>
                <strong>Franchise, not a chain.</strong> Each studio is independently owned and sets
                its own prices around local rent, equipment, and demand. DexaFit Nashua&apos;s flat
                $119 sits well below DexaFit Cincinnati&apos;s $199 for the same DEXA scan.
              </li>
              <li>
                <strong>Single test vs bundle.</strong> Buying DEXA, VO2 max, and RMR together is
                cheaper per test. DexaFit Cincinnati advertises 10% off two-service bundles and 15%
                off the three-service bundle ($575 versus $677 a la carte).
              </li>
              <li>
                <strong>Multi-packs and prepaid packs.</strong> Some studios sell repeat-visit packs
                — DexaFit Nashua lists a 6-service pack at $599 and a 12-service pack at $999, and
                DexaFit Cincinnati sells 2-packs and 4-packs of individual tests at a discount.
              </li>
              <li>
                <strong>Add-ons.</strong> A free Styku 3D body scan (Las Vegas) or an optional
                physician-guided result review (Cincinnati prices these at $100-$300) move the total.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bundle deep-dive table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DexaFit Bundle Pricing (Cincinnati Example)</h2>
        <p className="text-gray-600 mb-6">
          One location&apos;s published bundle menu, to show how DexaFit discounts multiple tests.
          DexaFit Cincinnati single tests are DEXA $199, RMR $229, VO2 max $249.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Bundle</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">DEXA + RMR</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">$385</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~10% off</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">DEXA + VO2 Max</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">$399</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~10% off</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">RMR + VO2 Max</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">$430</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~10% off</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">DEXA + VO2 Max + RMR</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">$575</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~15% off</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Source: DexaFit Cincinnati pricing page, June 2026. Bundle composition and discounts vary
          by location — DexaFit Nashua, for instance, sells all three together for $319. Confirm
          current bundle pricing with your studio.
        </p>
      </section>

      {/* Location cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DexaFit Pricing Examples Across Locations</h2>
        <p className="text-gray-600 mb-6">
          Three real DexaFit locations, lowest to highest published single-test pricing. Each was
          checked against the studio&apos;s own pricing page in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {LOCATION_PRICING.map((l) => (
            <div key={l.location} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{l.location}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{l.dexa} DEXA</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                VO2 max {l.vo2} • RMR {l.rmr} • 3-service bundle {l.bundle3}
              </div>
              <p className="text-sm text-gray-600 mb-3">{l.note}</p>
              <a
                href={l.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View location pricing →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DexaFit vs BodySpec comparison */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DexaFit vs BodySpec: How It Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">DexaFit</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">BodySpec</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Single DEXA scan</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$119-$199</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$40-$60</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">VO2 max / RMR offered</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Yes — both, plus bundles</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA-focused</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Format</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Fixed studios (41 states)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Mobile vans + locations</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Best for</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Bundled metabolic + cardio testing</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lowest-cost DEXA only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="prose prose-lg max-w-none mt-6">
            <p>
              The practical takeaway: if you only want a DEXA body-composition scan, BodySpec is
              usually the cheaper route. If you want VO2 max and RMR alongside your DEXA scan in one
              visit — and a bundle discount — DexaFit packages all three. For a full head-to-head, see
              the{' '}
              <Link href="/guides/bodyspec-vs-dexafit" className="text-blue-600 hover:underline">
                BodySpec vs DexaFit comparison
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What you actually get */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Each DexaFit Test Tells You</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Price aside, the three core tests answer different questions, which is why people bundle
            them:
          </p>
          <ul>
            <li>
              <strong>DEXA scan</strong> breaks down fat, lean (muscle) mass, and bone density by
              region, plus a visceral-fat estimate — the clearest picture of body composition.
            </li>
            <li>
              <strong>RMR test</strong> measures how many calories you burn at rest, which sets a
              realistic calorie target for fat loss or muscle gain.
            </li>
            <li>
              <strong>VO2 max test</strong> measures cardio fitness and personalized heart-rate
              training zones, so conditioning work is targeted rather than guessed.
            </li>
          </ul>
          <p>
            If your goal is body recomposition — losing fat while preserving muscle — a DEXA scan is
            the load-bearing test, and RMR helps set the nutrition target. VO2 max matters most if
            cardio performance is a goal. For more on how DEXA itself works, see the{' '}
            <Link href="/guides/dexa-scan-guide" className="text-blue-600 hover:underline">
              complete DEXA scan guide
            </Link>{' '}
            and how it stacks up against other methods in{' '}
            <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">
              DEXA vs InBody vs Bod Pod
            </Link>.
          </p>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get the Best DexaFit Price</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Check the lowest-priced nearby location — single tests range $119 to $199</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>If you only want DEXA, compare a budget DEXA-only provider like BodySpec</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Buy DEXA + VO2 max + RMR as a bundle for the per-test discount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>If you will re-test over time, a multi-pack lowers the per-scan cost</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the studio:</p>
            <ul>
              <li>What is the single-test price at <em>this</em> location? (It varies by franchise.)</li>
              <li>Does the bundle include a result consultation, or is that an add-on?</li>
              <li>Do prepaid packs expire? (Often 12 months from purchase.)</li>
              <li>Is a free add-on (like a Styku 3D scan) included with the package?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but DexaFit
            body-composition scans, VO2 max, and RMR tests are generally elective and paid out of
            pocket. Some are HSA/FSA-eligible when they qualify as medical care — confirm with the
            provider and your plan. The cash prices in this guide are self-pay rates.
          </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a Body-Composition Clinic Near You</h3>
          <p className="text-gray-600 mb-6">
            Compare DEXA scan and body-composition providers — prices, locations, and add-on testing.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse DEXA Scan Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-600">The two leading DEXA services compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Body-composition methods on accuracy and cost</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-new-york" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗽</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in NYC</div>
                <div className="text-sm text-gray-600">DexaFit NY and other New York options compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
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
            <li>• <a href="https://www.nashua.dexafit.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Nashua — Pricing</a></li>
            <li>• <a href="https://www.dexafitlv.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Las Vegas — Pricing</a></li>
            <li>• <a href="https://www.cincinnati.dexafit.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Cincinnati — Pricing</a></li>
            <li>• <a href="https://www.dexafit.com/dexau/vo2-fitness-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit — VO2 Max Fitness Test</a></li>
            <li>• <a href="https://www.dexafit.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit — Home (locations: 41 states, four continents)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our DEXA, VO2 max, and RMR price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexafit_cost"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
