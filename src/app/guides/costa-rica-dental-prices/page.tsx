import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import DestinationClinicTable from '@/components/DestinationClinicTable';
import { buildFAQSchema } from '@/lib/jsonLd';
import { formatAsOfMonth } from '@/lib/pricing';
import { getDestinationStat, getDestinationAsOf, clinicIdsInCluster, fmtUsd } from '@/lib/destination-pricing';

const URL = 'https://vitalityscout.com/guides/costa-rica-dental-prices';
const CLUSTER = 'costa-rica-dental';

export const metadata: Metadata = {
  title: { absolute: 'Costa Rica Dental Prices (2026): Verified Clinic Costs vs the US' },
  alternates: { canonical: URL },
  description:
    'Verified single dental implants in San Jose run a median of ~$1,150 (n=6 clinics) vs a $2,143 US implant-fixture benchmark. Per-clinic prices quoted verbatim from clinic sites, dated, with US anchors cited.',
};

// US-side anchors are the ONLY defensible comparison numbers in this SERP —
// facilitators publish invented "US averages." Each carries its source verbatim.
const US_ANCHORS = [
  { proc: 'Single implant (fixture only)', us: '$2,143', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'Single implant, all-in (fixture + abutment + crown)', us: '$4,259', src: 'Aspen Dental provider-published 2026', est: false },
  { proc: 'Ceramic/porcelain crown', us: '$697–$1,399', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'Veneer (per tooth)', us: '$1,765 avg', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'All-on-4 (full arch)', us: '~$24,000/arch', src: 'Aggregator-triangulated estimate — not a median', est: true },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a dental implant cost in Costa Rica?',
    answer:
      'Across six San Jose clinics we verified, single dental implants run a median of about $1,150, with a range of $800 to $1,600 depending on the implant brand and whether a crown is included. That compares to a US implant-fixture benchmark of $2,143 (CareCredit ASQ360° 2023–24). These figures are quoted verbatim from each clinic’s own website and dated; confirm the current price and what it includes directly with the clinic.',
  },
  {
    question: 'Is dental work in Costa Rica cheaper than the US?',
    answer:
      'For implants, the verified San Jose median of about $1,150 is roughly half the $2,143 US benchmark for the implant fixture, and well under the $4,259 US all-in implant figure (Aspen Dental provider-published 2026). Savings vary by procedure and by what each quote bundles. The prices on this page are the clinics’ own published cash prices — they are estimates until you confirm them, not guarantees.',
  },
  {
    question: 'How were these Costa Rica dental prices verified?',
    answer:
      'Each price was extracted from the clinic’s own public website, stored with the verbatim source quote and the date it was captured, and linked back to that source. We publish only what the clinic itself states. We do not accept facilitator or aggregator price claims, and we do not present a US comparison number without citing its source. Prices change — reconfirm directly with the clinic before you travel.',
  },
];

export default function CostaRicaDentalPricesPage() {
  const implantStat = getDestinationStat({
    serviceKey: 'dental-implant-single',
    clusters: [CLUSTER],
    priceTypes: ['standard', 'per-unit', 'package'],
  });
  const asOf = getDestinationAsOf(undefined, [CLUSTER]);
  const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
  const clinicCount = clinicIdsInCluster(CLUSTER).length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Costa Rica Dental Prices: Verified Clinic Costs vs the US',
    description:
      'Verified per-clinic dental prices in San Jose, Costa Rica, with cited US benchmark comparisons.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-07-13',
    dateModified: '2026-07-13',
    mainEntityOfPage: URL,
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Costa Rica Dental Prices', item: URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <nav className="border-b border-gray-200 px-4 py-3 text-sm" aria-label="Breadcrumb">
          <div className="mx-auto max-w-4xl text-gray-500">
            <Link href="/guides" className="text-blue-600 hover:underline">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Costa Rica Dental Prices</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">🇨🇷</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Verified Prices
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Costa Rica Dental Prices: What San Jose Clinics Actually Charge
            </h1>
            {/* Direct-answer lead — ≤80 words, leads with the median stat */}
            <p className="text-lg text-gray-700">
              Verified single dental implants at San Jose clinics run a{' '}
              <strong>median of about $1,150</strong> — range $800–$1,600 across six clinics — roughly
              half the US implant-fixture benchmark of <strong>$2,143</strong> (CareCredit ASQ360°
              2023–24 national research). Costa Rica pairs US-trained dentists and mainstream implant
              brands with substantially lower cash prices. Every figure below is quoted verbatim from
              the clinic&apos;s own website and dated; confirm current pricing and inclusions before
              you travel.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block */}
          {implantStat && implantStat.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Typical verified single dental implant in San Jose: {fmtUsd(implantStat.median)}{' '}
                <span className="font-normal text-gray-600">
                  (range {fmtUsd(implantStat.low)}–{fmtUsd(implantStat.high)},
                  n={implantStat.n} verified clinic prices, verified {asOfLabel})
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Single-implant quotes vary by what they include — some clinics price the implant
                fixture only, others the implant plus crown. Compare the per-clinic detail below.
              </p>
              <PriceEstimateDisclaimer />
            </div>
          )}

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            San Jose and Escazu dental clinics with prices published on their own websites. Click any
            price to see its source.
          </p>
          <DestinationClinicTable
            cluster={CLUSTER}
            columns={[
              { label: 'Single implant', serviceKey: 'dental-implant-single' },
              { label: 'Crown', serviceKey: 'crown' },
              { label: 'All-on-4 (arch)', serviceKey: 'all-on-4' },
              { label: 'Full mouth', serviceKey: 'full-mouth-package' },
            ]}
          />

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Costa Rica vs the US: cited benchmarks</h2>
          <p className="mb-4 text-gray-600">
            The one thing facilitator sites will not publish is an honest, sourced US price. Here are
            the US benchmarks with their sources named — compare them against the verified Costa Rica
            prices above.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Procedure</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">US benchmark</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Source</th>
                </tr>
              </thead>
              <tbody>
                {US_ANCHORS.map((a) => (
                  <tr key={a.proc} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 text-gray-800">{a.proc}</td>
                    <td className="px-3 py-2 font-semibold text-gray-900">
                      {a.us}
                      {a.est && <span className="ml-1 text-xs font-normal text-amber-700">(estimate)</span>}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-500">{a.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            The All-on-4 US figure is an aggregator-triangulated estimate, not a verified median, and
            is labeled as such. The CareCredit figures are national research averages; the all-in
            implant figure is a provider-published price. Your local US quote will vary.
          </p>

          {/* Methodology */}
          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Methodology</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-sm text-gray-700 space-y-2">
            <p>
              <strong>What we verified.</strong> Every Costa Rica price on this page was extracted
              from the clinic&apos;s own public website, stored with the verbatim source quote and the
              date captured, and linked back to that source. n={implantStat?.n ?? 0} verified
              single-implant prices across {clinicCount} San Jose clinics. Verified {asOfLabel}.
            </p>
            <p>
              <strong>How to read the prices.</strong> Each cell is the clinic&apos;s cheapest
              published figure for that service; &quot;from/starting&quot; qualifiers are preserved.
              Single-implant quotes may or may not include the crown, so we show the per-clinic detail
              rather than collapsing everything into one number.
            </p>
            <p>
              <strong>US comparison numbers</strong> are cited to their source (CareCredit ASQ360°
              national research; Aspen Dental provider-published pricing). The All-on-4 US figure is an
              explicitly-labeled estimate, not a median. We never present an uncited US number.
            </p>
            <p className="text-gray-500">
              Prices change and this is not dental advice. Reconfirm current pricing, materials, and
              credentials directly with any clinic before treatment.
            </p>
          </div>

          {/* FAQ (mirrors FAQPage schema) */}
          <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question}>
                <h3 className="mb-1 font-bold text-gray-900">{f.question}</h3>
                <p className="text-sm text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Plan and pay for care abroad</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/mexico-dental-implant-prices" className="hover:underline">Mexico dental &amp; implant prices (Cancun + Los Algodones)</Link></li>
              <li><Link href="/guides/does-us-insurance-cover-dental-work-in-mexico" className="hover:underline">Does US dental insurance cover work abroad?</Link></li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds for care abroad</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">How to pay for medical tourism safely</Link></li>
              <li><Link href="/guides/costa-rica-dental-guide" className="hover:underline">Costa Rica dental tourism: the full planning guide</Link></li>
              <li><Link href="/destinations/costa-rica" className="hover:underline">Costa Rica destination directory</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not dental, medical, or financial advice. Prices are
              gathered from clinic websites, are estimates, and change without notice. Verify all
              pricing, materials, and provider credentials directly with the clinic before making
              treatment decisions.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
