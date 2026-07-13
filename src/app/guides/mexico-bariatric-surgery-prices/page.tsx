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

const URL = 'https://vitalityscout.com/guides/mexico-bariatric-surgery-prices';
const CLUSTER = 'mexico-bariatric';

export const metadata: Metadata = {
  title: { absolute: 'Mexico Bariatric Surgery Prices (2026): Verified Gastric Sleeve & Bypass Costs' },
  alternates: { canonical: URL },
  description:
    'Verified gastric-sleeve packages in Mexico run a median of $4,900 (n=12 all-inclusive); gastric bypass a median of $5,900. Per-clinic Tijuana prices quoted verbatim from clinic sites, dated, inclusions caveated.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does a gastric sleeve cost in Mexico?',
    answer:
      'Across 12 all-inclusive packages we verified, gastric sleeve in Mexico runs a median of $4,900, with a range of $4,100 to $8,900. Inclusions vary by clinic — several bundle hospital and hotel nights, but airfare is excluded, and what counts as “all-inclusive” differs. These are the clinics’ own published package prices, quoted verbatim and dated; confirm the current price and exactly what it includes with the clinic before committing.',
  },
  {
    question: 'How much does gastric bypass cost in Mexico?',
    answer:
      'The verified gastric bypass median is $5,900 (range $5,295 to $6,600, n=12) across the Tijuana-area clinics we track. As with the sleeve, package inclusions vary and airfare is not included. Prices are extracted from each clinic’s own website with the source quote and date recorded. Reconfirm directly with the clinic — prices change and this is information, not medical advice.',
  },
  {
    question: 'What do the "all-inclusive" bariatric packages include?',
    answer:
      'It varies by clinic. Several packages bundle the surgeon and anesthesia fees, hospital nights, and hotel nights; some add airport transfers and pre-op labs. Airfare is excluded in the pricing we verified. A package that omits anesthesia, hospital nights, or follow-up is not a complete price. Ask for a written, itemized quote and confirm what is and is not included before sending any deposit.',
  },
  {
    question: 'Is there a non-surgical option worth comparing first?',
    answer:
      'For many shoppers, yes. A GLP-1 medication program is a recurring cost with different eligibility, risks, and outcomes than surgery, and the honest comparison is verified on both sides. We lay out that math — the verified $4,900 sleeve median versus a verified $262.50/month GLP-1 median — in a dedicated decision guide. Decide with a licensed clinician who knows your history.',
  },
];

export default function MexicoBariatricSurgeryPricesPage() {
  const sleeve = getDestinationStat({ serviceKey: 'gastric-sleeve', clusters: [CLUSTER] });
  const bypass = getDestinationStat({ serviceKey: 'gastric-bypass', clusters: [CLUSTER] });
  const asOf = getDestinationAsOf(undefined, [CLUSTER]);
  const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
  const clinicCount = clinicIdsInCluster(CLUSTER).length;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mexico Bariatric Surgery Prices: Verified Gastric Sleeve & Bypass Costs',
    description: 'Verified per-clinic bariatric surgery package prices in Tijuana and northern Mexico.',
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
      { '@type': 'ListItem', position: 2, name: 'Mexico Bariatric Surgery Prices', item: URL },
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
            <span className="text-gray-700">Mexico Bariatric Surgery Prices</span>
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
              Mexico Bariatric Surgery Prices: Gastric Sleeve and Bypass, Verified
            </h1>
            {/* Direct-answer lead — ≤80 words, leads with the median stat */}
            <p className="text-lg text-gray-700">
              Verified gastric-sleeve packages at Mexican bariatric centers run a{' '}
              <strong>median of $4,900</strong> (range $4,100–$8,900, n=12 all-inclusive packages);
              gastric bypass runs a <strong>median of $5,900</strong> (n=12). Inclusions vary by
              clinic — several bundle hospital and hotel nights; airfare is excluded. Every price below
              is quoted verbatim from the clinic&apos;s own website and dated. Confirm the current
              price, what the package includes, and surgeon credentials directly with the clinic before
              you commit.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block */}
          {sleeve && sleeve.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Verified gastric sleeve (Mexico): {fmtUsd(sleeve.median)} median{' '}
                <span className="font-normal text-gray-600">
                  (range {fmtUsd(sleeve.low)}–{fmtUsd(sleeve.high)}, n={sleeve.n} all-inclusive
                  packages, verified {asOfLabel})
                </span>
              </p>
              {bypass && bypass.n >= 3 && (
                <p className="text-lg font-semibold text-gray-900">
                  Verified gastric bypass (Mexico): {fmtUsd(bypass.median)} median{' '}
                  <span className="font-normal text-gray-600">
                    (range {fmtUsd(bypass.low)}–{fmtUsd(bypass.high)}, n={bypass.n})
                  </span>
                </p>
              )}
              <p className="text-sm text-gray-600">
                Inclusions vary by clinic — several include hospital and hotel nights; airfare is
                excluded. Treat any package as an estimate until you have a written, itemized quote.
              </p>
              <PriceEstimateDisclaimer />
            </div>
          )}

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            Tijuana-area and northern-Mexico bariatric centers with package prices published on their
            own websites. Click any price to see its source.
          </p>
          <DestinationClinicTable
            cluster={CLUSTER}
            columns={[
              { label: 'Gastric sleeve', serviceKey: 'gastric-sleeve' },
              { label: 'Gastric bypass', serviceKey: 'gastric-bypass' },
            ]}
          />

          {/* The honest comparison lives on the decision page (verified both sides). */}
          <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Before you price surgery: the medication comparison</h3>
            <p className="text-sm text-gray-700">
              Insurance rarely reimburses elective bariatric surgery abroad, which pushes most shoppers
              to a cash comparison. But the honest comparison is not only surgery in one country versus
              another — it is surgery versus a GLP-1 medication program, which has very different costs,
              risks, and eligibility. We lay out that verified math (the $4,900 sleeve median versus a
              $262.50/month GLP-1 median) on a dedicated page.
            </p>
            <p className="mt-3 text-sm font-medium">
              <Link href="/guides/gastric-sleeve-mexico-vs-glp1-program" className="text-blue-700 hover:underline">
                Gastric sleeve in Mexico vs a GLP-1 program: the verified math →
              </Link>
            </p>
          </div>

          {/* Methodology */}
          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Methodology</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-sm text-gray-700 space-y-2">
            <p>
              <strong>What we verified.</strong> Every price on this page was extracted from the
              clinic&apos;s own public website, stored with the verbatim source quote and the date
              captured, and linked back to that source, across {clinicCount} bariatric centers.
              Verified {asOfLabel}.
            </p>
            <p>
              <strong>The medians</strong> ({sleeve?.median ? fmtUsd(sleeve.median) : '—'} sleeve,
              n={sleeve?.n ?? 0}; {bypass?.median ? fmtUsd(bypass.median) : '—'} bypass,
              n={bypass?.n ?? 0}) follow the audited publication rule: USD standard and package prices
              only, first-stage &quot;from/starting&quot; floors and limited-time intro offers excluded.
              Each figure is the clinic&apos;s own published package price.
            </p>
            <p>
              <strong>Inclusions caveat.</strong> &quot;All-inclusive&quot; means different things at
              different clinics. Several packages include hospital and hotel nights; airfare is
              excluded throughout. A price that omits anesthesia, hospital nights, or follow-up is not a
              complete price.
            </p>
            <p className="text-gray-500">
              Prices change and this is not medical advice. Bariatric surgery carries real surgical and
              anesthesia risk; reconfirm pricing, inclusions, and surgeon credentials directly with any
              clinic, and decide with a licensed clinician.
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
              <li><Link href="/guides/gastric-sleeve-mexico-vs-glp1-program" className="hover:underline">Gastric sleeve in Mexico vs a GLP-1 program: the verified math</Link></li>
              <li><Link href="/guides/does-insurance-cover-bariatric-surgery-abroad" className="hover:underline">Does US insurance cover bariatric surgery abroad?</Link></li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds for care abroad</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Is bariatric surgery abroad tax deductible?</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">How to pay for medical tourism safely</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not medical, surgical, or financial advice. Prices are
              gathered from clinic websites, are estimates, and change without notice. Bariatric surgery
              is a major medical decision with real risks. Verify all pricing, inclusions, and surgeon
              credentials directly with the clinic, and consult a licensed clinician before proceeding.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
