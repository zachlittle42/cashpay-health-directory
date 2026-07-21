import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';
import {
  getTrtProgramRows,
  getTrtProgramStats,
  getHormoneProgramAsOf,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';
import { allHormoneClinics } from '@/data/hormone-clinics-index';

const URL = 'https://vitalityscout.com/guides/trt-cost';

const stats = getTrtProgramStats();
const asOf = getHormoneProgramAsOf();
const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
const medianLabel = stats ? formatPrice(stats.median) : '—';
const lowLabel = stats ? formatPrice(stats.low) : '—';
const highLabel = stats ? formatPrice(stats.high) : '—';
const nLabel = stats ? stats.n : 0;

export const metadata: Metadata = {
  title: {
    absolute: `TRT Cost (2026): Verified Testosterone Therapy Prices — ${medianLabel}/mo Median`,
  },
  alternates: { canonical: URL },
  description:
    `Verified monthly TRT programs run a median of ${medianLabel}/mo across the ${nLabel} clinics that publish a price. ` +
    'Most clinics gate the number behind a consult — here are the per-clinic prices that are actually posted, quoted from each clinic site and dated.',
};

// id -> directory clinic (name, city, and its city directory URL)
const CLINIC_BY_ID = new Map(allHormoneClinics.map((c) => [c.id, c]));

const FAQ_ITEMS = [
  {
    question: 'How much does TRT cost per month?',
    answer:
      `Across the ${nLabel} clinics we found that actually publish a monthly testosterone-therapy price, the median is ${medianLabel}/mo, ranging from ${lowLabel} to ${highLabel}/mo. ` +
      'The spread reflects what is bundled: a membership-only fee bills the medication separately, while an all-in program folds the testosterone, supplies, and visits into one number. ' +
      'Most clinics do not post a price at all and quote it only after a paid consult. Confirm the current price and exactly what it includes with the clinic before you commit.',
  },
  {
    question: 'Why do so few TRT clinics publish their prices?',
    answer:
      'Pricing is a lead-generation lever. Many hormone clinics keep the monthly number off the site so you have to book a consult, where an in-person quote and a longer commitment are easier to sell. ' +
      'The clinics that do publish tend to be the value-positioned ones competing on price. That means the posted market you can see skews lower than the consult-gated market you cannot — a reason to get more than one quote.',
  },
  {
    question: 'What is included in a TRT monthly price?',
    answer:
      'It varies. Some programs are membership-only (you pay for provider access and labs, and buy the medication separately at a pharmacy). Others are all-in and include the testosterone, injection supplies, and follow-up visits. ' +
      'Lab work — the initial hormone panel and periodic re-checks — is often an added cost either way. We tag each price below with whether the medication is included so a membership fee is never mistaken for an all-in price.',
  },
  {
    question: 'Is cheaper TRT worse?',
    answer:
      'Not necessarily, but price alone is a poor proxy for quality. A low membership fee that excludes medication and labs can cost more all-in than a mid-priced all-inclusive program. ' +
      'What matters is monitoring: baseline and follow-up bloodwork, a licensed provider adjusting your dose, and management of side effects like elevated hematocrit or estradiol. Judge a program on what the price includes and how it monitors you, not the headline number. This is information, not medical advice.',
  },
];

export default function TrtCostPage() {
  const rows = getTrtProgramRows();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TRT Cost: Verified Monthly Testosterone Therapy Prices',
    description:
      'Verified per-clinic monthly TRT program prices, quoted from clinic websites and dated.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    mainEntityOfPage: URL,
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'TRT Cost', item: URL },
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
            <span className="text-gray-700">TRT Cost</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">💪</span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Verified Prices
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              TRT Cost: What Testosterone Therapy Actually Runs Per Month
            </h1>
            {/* Direct-answer lead — leads with the computed median stat */}
            <p className="text-lg text-gray-700">
              Verified monthly{' '}
              <Link href="/trt" className="text-purple-700 hover:underline">testosterone-therapy programs</Link>{' '}
              run a <strong>median of {medianLabel}/mo</strong> across the {nLabel} clinics that actually
              publish a price (range {lowLabel}&ndash;{highLabel}/mo, verified {asOfLabel}). The gap is
              what&apos;s bundled: membership-only fees bill the medication separately; all-in programs
              fold it in. Most clinics post no price and quote it only after a paid consult. Every
              price below is quoted from the clinic&apos;s own site and dated.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block */}
          {stats && stats.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Verified TRT program cost: {medianLabel}/mo median{' '}
                <span className="font-normal text-gray-600">
                  (range {lowLabel}&ndash;{highLabel}/mo, n={nLabel} clinics that publish a monthly
                  price, verified {asOfLabel})
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Membership-only prices (medication billed separately) and all-in prices (medication
                included) are both shown below and tagged, so the two are never conflated.
              </p>
              <PriceEstimateDisclaimer />
            </div>
          )}

          {/* The consult-gated honesty note */}
          <div className="mb-10 rounded-lg border border-purple-200 bg-purple-50 p-6">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              The published minority prices what the majority hides
            </h2>
            <p className="text-sm text-gray-700">
              Most hormone clinics keep their monthly price off the website and reveal it only after a
              paid consult — pricing is a sales lever, not a disclosure. The handful of clinics that do
              post a number are usually the value-positioned ones competing on price, which means the
              market you can see here skews lower than the consult-gated market you can&apos;t. Treat
              this table as a floor for what to expect, and get more than one quote before you commit.
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified TRT prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            Clinics with a monthly testosterone-program price published on their own website. Each row
            links to its source. &quot;Meds included&quot; folds the medication into the price;
            &quot;plus medication&quot; is a membership fee billed separately from the drug.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left text-gray-600">
                  <th className="px-3 py-2 font-semibold">Clinic</th>
                  <th className="px-3 py-2 font-semibold">Location</th>
                  <th className="px-3 py-2 font-semibold">Monthly price</th>
                  <th className="px-3 py-2 font-semibold">Medication</th>
                  <th className="px-3 py-2 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => {
                  const clinic = CLINIC_BY_ID.get(p.clinicId);
                  const medsTag =
                    p.medsIncluded === true
                      ? 'meds included'
                      : p.medsIncluded === false
                        ? 'plus medication'
                        : 'not stated';
                  return (
                    <tr key={`${p.clinicId}-${p.display}`} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-900">
                        {clinic ? clinic.name : 'Clinic'}
                      </td>
                      <td className="px-3 py-2 text-gray-600">
                        {clinic ? (
                          <Link
                            href={`/hormone-therapy/${clinic.stateSlug}/${clinic.citySlug}`}
                            className="text-purple-700 hover:underline"
                          >
                            {clinic.city}, {clinic.state}
                          </Link>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="px-3 py-2 font-semibold text-green-700">{p.display}</td>
                      <td className="px-3 py-2 text-gray-600">{medsTag}</td>
                      <td className="px-3 py-2 text-gray-500">
                        <a
                          href={p.citation.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-blue-600 hover:underline"
                        >
                          clinic site &middot; {formatAsOfMonth(p.asOf)}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Methodology */}
          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Methodology</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-sm text-gray-700 space-y-2">
            <p>
              <strong>What we verified.</strong> Every price here was extracted from the clinic&apos;s
              own public website, stored with the verbatim source quote and the date captured, and
              linked back to that source. Verified {asOfLabel}.
            </p>
            <p>
              <strong>The median</strong> ({medianLabel}/mo, n={nLabel}) counts only steady-state
              monthly testosterone-program prices: one representative (cheapest) price per clinic,
              priced per month. First-month intro hooks, &quot;from&quot; floors, and multi-month
              prepay packages are excluded so a promotional number never distorts the typical cost.
            </p>
            <p>
              <strong>Membership vs all-in.</strong> A membership-only fee (medication billed
              separately) and an all-in program (medication included) are different products at the
              same headline number, so each row is tagged. A membership fee is never counted as if it
              were an all-in price.
            </p>
            <p>
              <strong>Coverage caveat.</strong> This reflects the clinics that publish a price, not the
              whole market. Most clinics quote only after a consult, and those prices are not captured
              here — see the note above.
            </p>
            <p className="text-gray-500">
              Prices change and this is not medical advice. TRT requires bloodwork, a licensed
              provider, and ongoing monitoring; reconfirm pricing and what it includes directly with
              any clinic, and decide with a licensed clinician.
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
            <h3 className="mb-3 font-bold text-gray-900">Find and compare hormone clinics</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/trt" className="hover:underline">TRT overview: online clinics, candidacy &amp; how it works</Link></li>
              <li><Link href="/hormone-therapy" className="hover:underline">Hormone therapy clinics by state</Link></li>
              <li><Link href="/guides/trt-testosterone-therapy" className="hover:underline">Complete TRT guide: symptoms, options, what to expect</Link></li>
              <li><Link href="/guides/best-online-trt-clinics" className="hover:underline">Best online TRT clinics compared</Link></li>
              <li><Link href="/labs" className="hover:underline">At-home hormone lab testing</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not medical or financial advice. Prices are gathered
              from clinic websites, are estimates, and change without notice. Testosterone therapy is a
              medical treatment that requires lab testing, a licensed prescriber, and ongoing
              monitoring. Verify all pricing and inclusions directly with the clinic, and consult a
              licensed clinician before starting or changing therapy.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
