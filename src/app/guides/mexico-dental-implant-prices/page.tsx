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

const URL = 'https://vitalityscout.com/guides/mexico-dental-implant-prices';
const CLUSTER = 'mexico-dental';

export const metadata: Metadata = {
  title: { absolute: 'Mexico Dental Implant Prices (2026): Verified Cancun & Los Algodones Costs' },
  alternates: { canonical: URL },
  description:
    'Verified All-on-4 arches across destination clinics run a median of $10,900 (n=22); single implants in Cancun and Los Algodones run ~$1,000 vs a $4,259 US all-in implant. Per-clinic prices quoted verbatim and dated.',
};

const US_ANCHORS = [
  { proc: 'Single implant (fixture only)', us: '$2,143', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'Single implant, all-in (fixture + abutment + crown)', us: '$4,259', src: 'Aspen Dental provider-published 2026', est: false },
  { proc: 'Ceramic/porcelain crown', us: '$697–$1,399', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'Veneer (per tooth)', us: '$1,765 avg', src: 'CareCredit ASQ360° 2023–24 national research', est: false },
  { proc: 'All-on-4 (full arch)', us: '~$24,000/arch', src: 'Aggregator-triangulated estimate — not a median', est: true },
];

const FAQ_ITEMS = [
  {
    question: 'How much do All-on-4 dental implants cost in Mexico?',
    answer:
      'Across the verified destination clinics we track, the median All-on-4 arch price is $10,900, with a range of $6,500 to $13,500 (n=22). The $6,500 low reflects first-stage-only pricing — implants placed, with the final fixed bridge quoted separately — so most full-arch quotes fall in the roughly $8,110–$13,500 band. Compare that to a US aggregator-triangulated estimate near $24,000 per arch. Confirm the current price and exactly what the package includes with the clinic.',
  },
  {
    question: 'How much is a single dental implant in Cancun or Los Algodones?',
    answer:
      'Single implants at the Cancun and Los Algodones clinics we verified run a median of about $1,000, versus a US implant-fixture benchmark of $2,143 (CareCredit ASQ360° 2023–24) and a US all-in implant figure of $4,259 (Aspen Dental provider-published 2026). What a single-implant quote includes varies by clinic, so check the per-clinic detail and confirm before booking.',
  },
  {
    question: 'Are these Mexico dental prices verified or advertised?',
    answer:
      'Every price on this page was extracted from the clinic’s own public website, stored with the verbatim source quote and the date it was captured, and linked back to that source. We do not use facilitator or aggregator price claims. Prices change — reconfirm directly with the clinic before you travel. This is information, not dental advice.',
  },
];

export default function MexicoDentalImplantPricesPage() {
  // The All-on-4 median is the audited destination-wide stat (Mexico + Costa
  // Rica): USD standard+package rows, floors/intro excluded. clusters omitted.
  const allOn4 = getDestinationStat({ serviceKey: 'all-on-4' });
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
    headline: 'Mexico Dental Implant Prices: Verified Cancun & Los Algodones Costs vs the US',
    description: 'Verified per-clinic dental implant prices in Cancun and Los Algodones with cited US benchmarks.',
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
      { '@type': 'ListItem', position: 2, name: 'Mexico Dental Implant Prices', item: URL },
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
            <span className="text-gray-700">Mexico Dental Implant Prices</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">🇲🇽</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Verified Prices
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Mexico Dental &amp; Implant Prices: Cancun and Los Algodones, Verified
            </h1>
            {/* Direct-answer lead — ≤80 words, leads with the median stat */}
            <p className="text-lg text-gray-700">
              Across our verified destination clinics, the median <strong>All-on-4 arch price is
              $10,900</strong> (range $6,500–$13,500, n=22); the $6,500 low reflects first-stage-only
              pricing. Single implants at Cancun and Los Algodones clinics run a{' '}
              <strong>median of $1,000</strong>, against a US all-in implant of $4,259 (Aspen Dental
              provider-published 2026). Every price below is quoted verbatim from the clinic&apos;s
              website and dated — confirm current pricing and inclusions with the clinic before
              booking.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block — All-on-4 (destination) with layered framing */}
          {allOn4 && allOn4.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Verified All-on-4 (full arch), destination clinics: {fmtUsd(allOn4.median)} median{' '}
                <span className="font-normal text-gray-600">
                  (range {fmtUsd(allOn4.low)}–{fmtUsd(allOn4.high)}, n={allOn4.n} verified prices,
                  verified {asOfLabel})
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Layered read: the {fmtUsd(allOn4.low)} low is a first-stage-only price (implants
                placed; the final fixed bridge is quoted separately). Typical full-arch quotes run
                about $8,110–{fmtUsd(allOn4.high)}. This median spans our verified destination clinics
                (Mexico and Costa Rica); most rows are Mexican clinics.
              </p>
              {implantStat && implantStat.n >= 3 && (
                <p className="text-sm text-gray-600">
                  Single implants (Cancun + Los Algodones): {fmtUsd(implantStat.median)} median
                  (range {fmtUsd(implantStat.low)}–{fmtUsd(implantStat.high)}, n={implantStat.n}).
                </p>
              )}
              <PriceEstimateDisclaimer />
            </div>
          )}

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            Cancun, Los Algodones, and Playa del Carmen dental clinics with prices published on their
            own websites. Click any price to see its source.
          </p>
          <DestinationClinicTable
            cluster={CLUSTER}
            columns={[
              { label: 'Single implant', serviceKey: 'dental-implant-single' },
              { label: 'Crown', serviceKey: 'crown' },
              { label: 'Veneer', serviceKey: 'veneer-per-tooth' },
              { label: 'All-on-4 (arch)', serviceKey: 'all-on-4' },
              { label: 'All-on-6 (arch)', serviceKey: 'all-on-6' },
            ]}
          />

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Mexico vs the US: cited benchmarks</h2>
          <p className="mb-4 text-gray-600">
            The number facilitator sites will not publish is an honest, sourced US price. Here are the
            US benchmarks with their sources named — compare them against the verified Mexico prices
            above.
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
            is labeled as such. CareCredit figures are national research averages; the all-in implant
            figure is a provider-published price. Your local US quote will vary.
          </p>

          {/* Methodology */}
          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Methodology</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-sm text-gray-700 space-y-2">
            <p>
              <strong>What we verified.</strong> Every Mexico price on this page was extracted from the
              clinic&apos;s own public website, stored with the verbatim source quote and the date
              captured, and linked back to that source across {clinicCount} Cancun, Los Algodones, and
              Playa del Carmen clinics. Verified {asOfLabel}.
            </p>
            <p>
              <strong>The All-on-4 median</strong> ({allOn4?.median ? fmtUsd(allOn4.median) : '—'},
              n={allOn4?.n ?? 0}) follows the audited publication rule: USD standard and package
              prices only, first-stage &quot;starting at&quot; floors excluded from the median but
              noted. The band spans verified destination clinics; the $6,500 low is a partial
              first-stage price, stated as such.
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

          {/* FAQ */}
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
              <li><Link href="/guides/costa-rica-dental-prices" className="hover:underline">Costa Rica dental prices (San Jose)</Link></li>
              <li><Link href="/guides/does-us-insurance-cover-dental-work-in-mexico" className="hover:underline">Does US dental insurance cover work in Mexico?</Link></li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds for care abroad</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Is medical tourism tax deductible?</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">How to pay for medical tourism safely</Link></li>
              <li><Link href="/destinations/mexico" className="hover:underline">Mexico destination directory</Link></li>
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
