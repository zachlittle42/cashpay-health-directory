import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Raleigh: 2026 Prices & Local Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-raleigh' },
  description: 'What a body-composition scan costs in Raleigh in 2026: InBody from $30, mobile DEXA ~$40, true full-body DEXA $230 in nearby Cary. Real local clinics.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Raleigh?',
    answer:
      'In Raleigh proper, the cheapest body-composition test is an InBody scan — Triangle Wellness & Anti-Aging in North Raleigh runs $30 a scan, or $145 for a 6-pack (about $24 each). BodySpec mobile vans serving the Raleigh/Durham area advertise gold-standard DEXA from $39.95. A true full-body DEXA booked through Fitnescity is $230, but that scan is actually performed at a partner facility in Cary, about 15 minutes from downtown Raleigh. These are advertised prices that change; confirm current pricing directly with the provider.',
  },
  {
    question: 'Is there a true DEXA scan inside Raleigh, or do I have to drive to Cary?',
    answer:
      'This is the local quirk worth knowing. Several Raleigh studios market "body composition," but two of the most visible — Chain Effect on Blue Ridge Road and Gameday Men\'s Health on Glenwood — use 3D body scanning and InBody (bioelectrical impedance), not DEXA. The most accessible gold-standard full-body DEXA in the area is booked through Fitnescity, whose Capital Boulevard listing in Raleigh handles VO2 Max and RMR while the actual DEXA runs at a partner site in Cary. If you specifically want DEXA and not InBody, plan for that short Cary drive or a BodySpec mobile-van date.',
  },
  {
    question: 'What is the difference between the InBody scans in Raleigh and a DEXA scan?',
    answer:
      'InBody is bioelectrical impedance analysis (BIA) — it sends a small current through the body to estimate fat, lean mass, and water. It is fast, cheap, and good for tracking trends, which is why Raleigh clinics like Triangle Wellness ($30) use it. DEXA (dual-energy X-ray absorptiometry) uses low-dose X-rays and is generally considered more accurate for body fat and the only one of the two that also measures bone density. DEXA costs more and, in this market, often means a trip to Cary. Choose based on whether you want a cheap repeatable trend line or a single accurate baseline.',
  },
  {
    question: 'Is a body-composition DEXA scan covered by insurance in North Carolina?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA or InBody scan for body composition (body fat and lean mass) is generally treated as elective and paid out of pocket. The Raleigh cash prices on this page are body-composition tests. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'Where is the cheapest body-composition scan in Raleigh?',
    answer:
      'On a per-scan basis, Triangle Wellness & Anti-Aging in North Raleigh is the lowest fixed price at $30 for an InBody scan, dropping to about $24 each in a 6-pack. For an actual DEXA (X-ray) scan, BodySpec\'s mobile vans serving Raleigh/Durham advertise the lowest entry at $39.95. Cheapest is not always the right tool — an InBody is fine for tracking trends, but if you want a precise DEXA baseline you may prefer the $230 Fitnescity/Cary option. Verify current pricing with each provider before booking.',
  },
  {
    question: 'How often should I get a body-composition scan?',
    answer:
      'For active body recomposition, every 3 months is a common cadence so you can see whether you are losing fat and preserving muscle between scans. Raleigh\'s package pricing fits this well — Triangle Wellness sells a 6-pack of InBody scans for $145, which is roughly an 18-month tracking plan at one scan a quarter. If you are maintaining, twice a year is usually enough. Talk to your clinician about the right interval for your goals.',
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

// Real, pre-verified Raleigh body-composition clinics (source:
// src/data/dexa-clinics-north-carolina.ts, citySlug === 'raleigh',
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site in June 2026). Prices are advertised estimates to confirm with the
// provider. Note: only Fitnescity offers true DEXA (X-ray) in this set, and
// that scan runs at its Cary partner site — a genuine local quirk of this metro.
const RALEIGH_CLINICS = [
  {
    name: 'Triangle Wellness & Anti-Aging',
    neighborhood: 'North Raleigh — 9104 Falls of Neuse Rd, Ste 206',
    scan: 'InBody 770',
    price: '$30/scan',
    addOns: '6-scan package $145 (~$24/scan)',
    note: 'North Raleigh wellness clinic running research-grade InBody 770 bioelectrical-impedance scans on a cash-pay basis. The cheapest fixed body-composition test in the city, built around progress tracking over time.',
    website: 'https://trianglewellnessandantiaging.com/inbody/',
  },
  {
    name: 'Gameday Men’s Health Raleigh (Glenwood)',
    neighborhood: 'Glenwood — 2626 Glenwood Ave, Ste 170',
    scan: 'InBody',
    price: '$40-150/scan',
    addOns: 'Often bundled with weight-loss / TRT programs',
    note: 'Men’s health clinic on Glenwood Avenue offering clinician-guided InBody scans as part of weight-loss and testosterone-optimization care, with a licensed provider reviewing the results.',
    website: 'https://gamedaymenshealth.com/glenwood-nc',
  },
  {
    name: 'Chain Effect',
    neighborhood: 'West Raleigh — 2501 Blue Ridge Rd, Ste G130',
    scan: 'Fit3D 3D scan + VO2 Max',
    price: '$40-150/scan',
    addOns: 'VO2 Max testing; bundled with PT / coaching packages',
    note: 'Independent performance and wellness studio combining physical therapy, dietitians, and personal training with objective testing. Body composition uses Fit3D 3D body scanning (not DEXA) alongside VO2 Max and CGM.',
    website: 'https://chaineffect.com/',
  },
  {
    name: 'Fitnescity Raleigh',
    neighborhood: 'Raleigh booking on Capital Blvd; DEXA runs ~15 min away in Cary',
    scan: 'DEXA (in Cary) + RMR + VO2 Max',
    price: 'DEXA from $230',
    addOns: 'DEXA+RMR $350; DEXA+VO2 $490; DEXA+RMR+VO2 $620',
    note: 'National cash-pay testing network. Its Raleigh listing on Capital Boulevard handles VO2 Max and RMR; the full-body DEXA scan itself is performed at a partner facility about 15 minutes away in Cary. Online booking, no insurance, included results review.',
    website: 'https://www.fitnescity.com/dexa-scan-in-raleigh-nc',
  },
];

export default function DexaScanCostRaleigh() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Raleigh (2026)',
    description:
      'A 2026 price guide to body-composition scans in Raleigh, NC — InBody from $30, mobile DEXA from ~$40, and true full-body DEXA at $230 in nearby Cary — plus what drives the price and how to choose.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-raleigh',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-raleigh#faq' },
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
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in Raleigh, NC (pricing & Cary location)', url: 'https://www.fitnescity.com/dexa-scan-in-raleigh-nc' },
      { '@type': 'CreativeWork', name: 'Triangle Wellness & Anti-Aging — InBody pricing', url: 'https://trianglewellnessandantiaging.com/inbody/' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Raleigh/Durham (mobile pricing from $39.95)', url: 'https://www.bodyspec.com/dexa-scan-raleigh-durham' },
      { '@type': 'CreativeWork', name: 'MDsave — DEXA Scan Cost in Raleigh, NC', url: 'https://www.mdsave.com/procedures/dexa-scan-bone-density-scan/d48afd/north-carolina/raleigh-nc' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-raleigh#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-raleigh' };

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
              Raleigh, North Carolina Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Raleigh
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition scan actually costs in Raleigh in 2026 — and why the
            cheapest local options are InBody, not DEXA, with true full-body DEXA waiting
            a short drive away in Cary.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition scan in Raleigh costs as little as{' '}
              <strong>$30</strong> for an InBody scan at Triangle Wellness, or about{' '}
              <strong>$39.95</strong> for a gold-standard DEXA from BodySpec&apos;s mobile vans.
              A true full-body DEXA booked through Fitnescity is <strong>$230</strong>, but that
              scan runs at a partner site in nearby Cary. Most Raleigh studios offer InBody or 3D
              scanning, not DEXA. These are advertised estimates to confirm with the provider.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Raleigh Body-Composition Price Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Clinic</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Scan Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Where</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Single Scan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Add-ons / Packages</th>
              </tr>
            </thead>
            <tbody>
              {RALEIGH_CLINICS.map((c, i) => (
                <tr key={c.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.scan}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.neighborhood}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{c.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.addOns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing, scan type (DEXA vs InBody vs 3D), location, and equipment directly with each
          clinic before booking. See the full, regularly updated list on the{' '}
          <Link href="/dexa-scans/north-carolina/raleigh" className="text-blue-600 hover:underline">
            Raleigh DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* The Raleigh quirk */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Raleigh Catch: &ldquo;Body Composition&rdquo; Often Means InBody, Not DEXA</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Raleigh is a different market from a coastal metro like NYC or LA, where a dozen
              dedicated DEXA studios compete on price. Here, most of the visible
              &ldquo;body-composition&rdquo; options are not actually DEXA at all:
            </p>
            <ul>
              <li>
                <strong>Triangle Wellness &amp; Anti-Aging</strong> (North Raleigh) and{' '}
                <strong>Gameday Men&apos;s Health</strong> (Glenwood) use <strong>InBody</strong> —
                a bioelectrical-impedance scale, not an X-ray scan. Fast, cheap, good for trends.
              </li>
              <li>
                <strong>Chain Effect</strong> (Blue Ridge Road) uses <strong>Fit3D 3D body
                scanning</strong> plus VO2 Max — again, not DEXA.
              </li>
              <li>
                <strong>Fitnescity</strong> is the most accessible path to a true full-body{' '}
                <strong>DEXA (X-ray)</strong> scan — but its Raleigh listing on Capital Boulevard
                handles VO2 Max and RMR, and the DEXA itself runs at a partner facility about{' '}
                <strong>15 minutes away in Cary</strong>.
              </li>
            </ul>
            <p>
              The practical upshot: if you just want a repeatable number to track muscle and fat
              over a cut, an InBody at $30 is the cheapest tool in the city. If you specifically
              want DEXA-grade accuracy and a bone-density readout, plan for either a short drive to
              Cary or a BodySpec mobile-van date in the Raleigh/Durham area.
            </p>
          </div>
        </div>
      </section>

      {/* What drives the price */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

        <div className="prose prose-lg max-w-none">
          <p>
            Raleigh&apos;s spread runs from $30 to $230 for a single scan — roughly an 8x range —
            and the gap is mostly about <em>which technology</em> you book, not where in the city
            you are:
          </p>
          <ul>
            <li>
              <strong>InBody (BIA) vs DEXA (X-ray).</strong> An InBody scale costs a clinic far less
              to operate than a medical DEXA unit, so the $30 Triangle Wellness scan reflects the
              cheaper technology — not a worse clinic. DEXA&apos;s higher price buys X-ray precision
              and a bone-density readout.
            </li>
            <li>
              <strong>Mobile vs fixed.</strong> BodySpec brings DEXA to the Raleigh/Durham area on
              mobile vans rather than leasing space, which is how it advertises gold-standard DEXA
              from $39.95 — undercutting the fixed $230 booking.
            </li>
            <li>
              <strong>Bundled testing.</strong> Fitnescity&apos;s prices climb when you add RMR or
              VO2 Max ($350 to $620). A standalone DEXA costs less than a metabolic bundle.
            </li>
            <li>
              <strong>Packages.</strong> Per-scan cost drops with volume — Triangle Wellness&apos;
              6-pack lands near $24 a scan, which usually wins if you plan to track over a year.
            </li>
          </ul>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a Body-Composition Scan in Raleigh</h2>
          <p className="text-gray-600 mb-6">
            Four real, currently operating Raleigh providers, from cheapest to most premium. Each
            listing was verified against the clinic&apos;s own site in June 2026. Note the scan type —
            only Fitnescity offers true DEXA, and that runs in Cary.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {RALEIGH_CLINICS.map((c) => (
              <div key={c.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{c.name}</h3>
                  <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{c.price}</span>
                </div>
                <div className="text-xs font-medium text-blue-600 mb-1">{c.scan}</div>
                <div className="text-xs text-gray-500 mb-2">{c.neighborhood}</div>
                <p className="text-sm text-gray-600 mb-3">{c.note}</p>
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit clinic site →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Raleigh compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Raleigh Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Raleigh&apos;s headline number is friendly: the MDsave median for a DEXA scan in the
              Raleigh region is about <strong>$101</strong>, and you can find an InBody scan for
              $30 or mobile DEXA from $39.95. That floor is competitive with — even below — what a
              fixed studio scan costs in Los Angeles ($99-$179) or New York ($99-$255).
            </p>
            <p>
              The catch is depth, not price. A big metro has many dedicated DEXA studios; the
              Triangle has comparatively few, and the most convenient true DEXA sits in Cary rather
              than downtown Raleigh. Hospital-based bone-density DEXA in the area can run $150-$400
              before insurance, but that is a clinical osteoporosis scan, not the cash-pay
              body-composition scan most people on this page are after.
            </p>
          </div>
        </div>
      </section>

      {/* Is it safe / radiation */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is a DEXA Scan Safe? Radiation in Context</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A DEXA scan uses low-dose ionizing X-rays. A full-body composition scan delivers roughly{' '}
            <strong>4-5 microsieverts (&micro;Sv)</strong> per scan, per BodySpec&apos;s published
            figures. For perspective:
          </p>
          <ul>
            <li>Average U.S. background radiation: about <strong>8-10 &micro;Sv per day</strong></li>
            <li>A chest X-ray: roughly <strong>20 &micro;Sv</strong></li>
            <li>A cross-country flight: about <strong>35 &micro;Sv</strong></li>
          </ul>
          <p>
            So a single body-composition DEXA scan is in the neighborhood of half a day of ordinary
            background exposure. The InBody and Fit3D scans common in Raleigh use{' '}
            <strong>no radiation at all</strong> — they use a small electrical current or a camera —
            which is one reason they suit very frequent tracking. The DEXA dose is still low, but if
            you are pregnant or scanning very often, discuss the cadence with a clinician.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but a
              DEXA or InBody scan for body composition is generally elective and paid out of pocket.
              The cash prices in this guide are body-composition scans.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Raleigh Scan</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost &amp; trend tracking</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Triangle Wellness</strong> InBody at $30, or a 6-pack near $24/scan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile DEXA from $39.95 in the Raleigh/Durham area</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a precise DEXA baseline</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity</strong> full-body DEXA from $230 (scan runs in Cary)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity bundles</strong> for DEXA plus RMR or VO2 Max ($350-$620)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is this a <strong>DEXA (X-ray)</strong>, an <strong>InBody (BIA)</strong>, or a <strong>3D</strong> scan? They are not interchangeable for tracking.</li>
              <li>For Fitnescity, is the DEXA at the Cary partner site or somewhere in Raleigh? Confirm the address.</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>Does a package or membership beat the single-scan price if you plan to track over time?</li>
            </ul>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Raleigh</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Raleigh body-composition provider — prices, scan types, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/north-carolina/raleigh"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Raleigh DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Accuracy, cost, and radiation, side by side — key for Raleigh</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-los-angeles" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in Los Angeles</div>
                <div className="text-sm text-gray-600">How a big-metro DEXA market prices out</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
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

          <Link href="/local-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-gray-900">Local Clinics</div>
                <div className="text-sm text-gray-600">Cash-pay health services near you</div>
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
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-raleigh-nc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in Raleigh, NC (pricing &amp; Cary location)</a></li>
            <li>• <a href="https://trianglewellnessandantiaging.com/inbody/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Triangle Wellness &amp; Anti-Aging — InBody pricing</a></li>
            <li>• <a href="https://www.bodyspec.com/dexa-scan-raleigh-durham" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Raleigh/Durham (mobile from $39.95)</a></li>
            <li>• <a href="https://www.mdsave.com/procedures/dexa-scan-bone-density-scan/d48afd/north-carolina/raleigh-nc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MDsave — DEXA Scan Cost in Raleigh, NC (median ~$101)</a></li>
            <li>• <a href="https://www.medicare.gov/coverage/bone-mass-measurements" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medicare — Bone mass measurements coverage</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our Raleigh DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_raleigh"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
