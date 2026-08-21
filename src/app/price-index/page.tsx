import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';
import { getProvidersByCategory } from '@/lib/providers';
import {
  getGlp1ProgramStats,
  getGlp1ProgramAsOf,
  getGlp1ServiceStats,
  getGlp1ServiceAsOf,
  getHormoneProgramStats,
  getHormoneProgramAsOf,
  getNationalDexaStats,
  getStandardDexaAsOf,
  getCityPricingStats,
  getLabsFlagshipPanel,
  getLabsMembership,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';
import {
  getDexaStatesWithClinics,
  getDexaCitiesWithClinics,
  getDexaClinicsByCity,
} from '@/data/dexa-clinics-index';

const URL = 'https://vitalityscout.com/price-index';

// Publication gates. A median only renders once enough distinct clinics publish
// a comparable price to make it a statistic rather than an anecdote. Mirrors the
// gates the hubs already apply (meds-included n >= 3, split line n >= 2).
const MIN_N = 3;
const MIN_SPLIT_N = 2;

// ---------------------------------------------------------------------------
// Every figure on this page is computed at build time from the generated
// pricing stores through @/lib/pricing. Nothing is hand-typed. If a helper
// yields fewer clinics than its gate, the row is dropped rather than softened.
// ---------------------------------------------------------------------------

const glp1 = getGlp1ProgramStats();
const glp1AsOf = getGlp1ProgramAsOf();
const sema = getGlp1ServiceStats('semaglutide-program');
const semaAsOf = getGlp1ServiceAsOf('semaglutide-program');
const tirz = getGlp1ServiceStats('tirzepatide-program');
const tirzAsOf = getGlp1ServiceAsOf('tirzepatide-program');
const hormone = getHormoneProgramStats();
const hormoneAsOf = getHormoneProgramAsOf();
const dexa = getNationalDexaStats();
const dexaAsOf = getStandardDexaAsOf();

// Labs aggregate. The store's per-provider helpers return one representative
// row per provider (flagship a-la-carte panel, cheapest membership); this page
// takes the median over those representatives, the same one-price-per-clinic
// discipline every other aggregate in @/lib/pricing uses.
interface Aggregate {
  n: number;
  median: number;
  low: number;
  high: number;
  asOf?: string;
}

function aggregateOf(rows: { low?: number; asOf: string }[]): Aggregate | null {
  const values = rows
    .map((r) => r.low)
    .filter((v): v is number => typeof v === 'number')
    .sort((a, b) => a - b);
  const n = values.length;
  if (n === 0) return null;
  const mid = Math.floor(n / 2);
  const median = n % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  let asOf: string | undefined;
  for (const r of rows) if (!asOf || r.asOf > asOf) asOf = r.asOf;
  return { n, median, low: values[0], high: values[n - 1], asOf };
}

const labsProviderIds = getProvidersByCategory('labs').map((p) => p.id);
const labsPanels = aggregateOf(
  labsProviderIds.map(getLabsFlagshipPanel).filter((p): p is NonNullable<typeof p> => p !== undefined),
);
const labsMemberships = aggregateOf(
  labsProviderIds.map(getLabsMembership).filter((p): p is NonNullable<typeof p> => p !== undefined),
);

// DEXA by city: every city pool the directory already ships, ranked by how many
// of its clinics publish a standard scan price. Cities below the gate drop out.
interface CityRow {
  city: string;
  state: string;
  stateSlug: string;
  citySlug: string;
  n: number;
  median: number;
  low: number;
  high: number;
}

function buildCityRows(): CityRow[] {
  const rows: CityRow[] = [];
  for (const state of getDexaStatesWithClinics()) {
    for (const city of getDexaCitiesWithClinics(state.stateSlug)) {
      const ids = getDexaClinicsByCity(state.stateSlug, city.citySlug).map((c) => c.id);
      const stats = getCityPricingStats(ids);
      if (!stats || stats.n < MIN_N) continue;
      rows.push({
        city: city.city,
        state: state.state,
        stateSlug: state.stateSlug,
        citySlug: city.citySlug,
        ...stats,
      });
    }
  }
  return rows.sort(
    (a, b) => b.n - a.n || a.median - b.median || a.city.localeCompare(b.city),
  );
}
const cityRows = buildCityRows();

// The index as-of stamp is the newest verification date across every store that
// contributes a published row.
const asOfDates = [glp1AsOf, semaAsOf, tirzAsOf, hormoneAsOf, dexaAsOf, labsPanels?.asOf, labsMemberships?.asOf]
  .filter((d): d is string => typeof d === 'string')
  .sort();
const indexAsOf = asOfDates.length ? asOfDates[asOfDates.length - 1] : undefined;
const indexAsOfLabel = indexAsOf ? formatAsOfMonth(indexAsOf, true) : '2026';

const glp1MedianLabel = glp1.medsIncluded.n > 0 ? formatPrice(glp1.medsIncluded.median) : '—';
const dexaMedianLabel = dexa ? formatPrice(dexa.median) : '—';

export const metadata: Metadata = {
  title: {
    // Absolute (layout appends "| VitalityScout" to non-absolute titles).
    absolute: 'Cash-Pay Health Price Index (2026): Verified Medians',
  },
  alternates: { canonical: URL },
  description:
    `Verified cash-pay medians, updated ${indexAsOfLabel}: GLP-1 programs ${glp1MedianLabel}/mo with medication included ` +
    `across ${glp1.medsIncluded.n} clinics, DEXA body scans ${dexaMedianLabel} across ${dexa?.n ?? 0} clinics.`,
};

// ---------------------------------------------------------------------------
// The index table. One row per published measure; a measure only appears once
// it clears its gate, so this array is the single source for both the visible
// table and the Dataset schema's variableMeasured.
// ---------------------------------------------------------------------------

interface IndexRow {
  measure: string;
  unit: string;
  n: number;
  median: number;
  low: number;
  high: number;
  asOf?: string;
}

function rowsFor(): IndexRow[] {
  const out: IndexRow[] = [];
  const push = (measure: string, unit: string, s: { n: number; median: number; low: number; high: number }, gate: number, asOf?: string) => {
    if (s.n >= gate) out.push({ measure, unit, asOf, ...s });
  };
  push('GLP-1 weight-loss program, medication included', 'per month', glp1.medsIncluded, MIN_N, glp1AsOf);
  push('GLP-1 weight-loss program, medication billed separately', 'per month', glp1.medsExtra, MIN_SPLIT_N, glp1AsOf);
  push('Semaglutide program, medication included', 'per month', sema.medsIncluded, MIN_N, semaAsOf);
  push('Semaglutide program, medication billed separately', 'per month', sema.medsExtra, MIN_SPLIT_N, semaAsOf);
  push('Tirzepatide program, medication included', 'per month', tirz.medsIncluded, MIN_N, tirzAsOf);
  push('Tirzepatide program, medication billed separately', 'per month', tirz.medsExtra, MIN_SPLIT_N, tirzAsOf);
  push('Hormone therapy program, medication included', 'per month', hormone.medsIncluded, MIN_N, hormoneAsOf);
  push('Hormone therapy program, medication billed separately', 'per month', hormone.medsExtra, MIN_SPLIT_N, hormoneAsOf);
  if (dexa) push('DEXA body-composition scan', 'per scan', dexa, MIN_N, dexaAsOf);
  if (labsPanels) push('At-home lab panel, starting price', 'per panel', labsPanels, MIN_N, labsPanels.asOf);
  if (labsMemberships) push('At-home lab membership', 'per plan', labsMemberships, MIN_SPLIT_N, labsMemberships.asOf);
  return out;
}
const INDEX_ROWS = rowsFor();

function unitSuffix(unit: string): string {
  return unit.replace('per month', '/mo').replace('per ', '/');
}

// The three headline cards read straight out of INDEX_ROWS, so a card can never
// drift from the table row it summarises, and it disappears with that row if the
// underlying pool ever falls below its gate.
const HEADLINE_CARDS = [
  'GLP-1 weight-loss program, medication included',
  'DEXA body-composition scan',
  'Hormone therapy program, medication included',
]
  .map((measure) => INDEX_ROWS.find((r) => r.measure === measure))
  .filter((r): r is IndexRow => r !== undefined);

const CITATION_LINE =`Source: VitalityScout Cash-Pay Price Index, ${indexAsOfLabel} — vitalityscout.com/price-index`;

const SECTION_LINKS = [
  { id: 'summary', label: 'Index table' },
  { id: 'glp1', label: 'GLP-1 programs' },
  { id: 'hormone', label: 'Hormone therapy' },
  { id: 'dexa', label: 'DEXA scans' },
  { id: 'labs', label: 'Lab testing' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'cite', label: 'Cite this index' },
];

// How the index is built. These rules are the ones @/lib/pricing actually
// enforces on the stores, stated in plain language for the reader.
const METHOD_NOTES = [
  {
    term: 'Collection: published prices only',
    detail:
      'A clinic enters the index only when it publishes a price on its own website. Nothing here comes from a survey, a phone quote, a press estimate, or a modeled figure. Each stored price carries the source URL, the verbatim quoted text, and the date it was read.',
  },
  {
    term: 'Median, not average',
    detail:
      'Cash-pay pricing is right-skewed. A handful of concierge programs sit far above the rest of the market, and an average would report those rather than what a typical buyer pays. The median is reported alongside the full low-to-high range so the skew stays visible instead of being hidden by a single number.',
  },
  {
    term: 'One price per clinic',
    detail:
      'A clinic listing several tiers contributes one representative price per measure, so a large menu never outweighs a small one.',
  },
  {
    term: 'What is excluded',
    detail:
      'Introductory and first-month offers, starting-at floors, and multi-month prepay packages are excluded from every median, because none of them is a steady-state price. Prices quoted in a non-monthly unit never enter a monthly measure. Medication-included and membership-only prices are reported as separate measures and never pooled.',
  },
  {
    term: 'Publication threshold',
    detail:
      `A measure is published only once at least ${MIN_N} distinct clinics publish a comparable price (${MIN_SPLIT_N} for a membership-only split line). Below that bar the row is dropped rather than reported with a caveat.`,
  },
  {
    term: 'Update cadence',
    detail:
      `Prices are re-verified against clinic sites and the index is recomputed from the underlying store, so every figure moves when the source pages move. The as-of month shown on each row is the most recent verification date behind that measure. Current data is as of ${indexAsOfLabel}.`,
  },
  {
    term: 'Treat every figure as an estimate',
    detail:
      'A published price can change without notice, and what a fee covers varies by clinic. Confirm the current price, and exactly what is included, directly with the provider before you pay. These figures describe what clinics advertise; they are not a quote and not a recommendation.',
  },
];

// Answers restate figures already computed above and the stated method. No
// claim here exists that is not on the page.
const FAQ_ITEMS = [
  {
    question: 'How much does a GLP-1 weight-loss program cost without insurance?',
    answer:
      `Across the ${glp1.medsIncluded.n} cash-pay clinics that publish a monthly price with the medication included, VitalityScout verified a median of ${glp1MedianLabel}/mo, ranging from ${formatPrice(glp1.medsIncluded.low)} to ${formatPrice(glp1.medsIncluded.high)}/mo (verified ${indexAsOfLabel}). ` +
      `Membership-only programs that bill the medication separately are counted separately: ${formatPrice(glp1.medsExtra.median)}/mo median across ${glp1.medsExtra.n} clinics. Those are not the same product, so the index never pools them.`,
  },
  {
    question: 'How much does a DEXA scan cost without insurance?',
    answer: dexa
      ? `Across the ${dexa.n} clinics that publish a standard cash price for a DEXA body-composition scan, the verified median is ${dexaMedianLabel} per scan, ranging from ${formatPrice(dexa.low)} to ${formatPrice(dexa.high)} (verified ${indexAsOfLabel}). ` +
        'City-level medians differ widely because the mix of mobile scanning services and full-service studios differs by market.'
      : 'The index publishes a DEXA median once enough clinics publish a standard cash scan price.',
  },
  {
    question: 'Does the Cash-Pay Price Index use medians or averages?',
    answer:
      'Medians. Published cash prices are heavily skewed by a small number of concierge programs, and an average lets one outlier move the headline figure. ' +
      'Each clinic contributes exactly one representative price per measure, so a clinic that lists several tiers is counted once rather than weighted more heavily. ' +
      'Introductory offers, "starting at" floors, and multi-month prepay packages are excluded, because a first-month hook is not a steady-state price.',
  },
  {
    question: 'How do I cite the Cash-Pay Price Index?',
    answer:
      `Cite it as: ${CITATION_LINE}. Every figure is recomputed when the underlying clinic prices are re-verified, so include the as-of month with any number you quote.`,
  },
];

export default function PriceIndexPage() {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${URL}#dataset`,
    name: 'VitalityScout Cash-Pay Price Index',
    description:
      'Median cash-pay prices for GLP-1 weight-loss programs, hormone therapy programs, DEXA body-composition scans, and at-home lab testing, computed from prices published on clinic and provider websites.',
    url: URL,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    creator: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    creditText: CITATION_LINE,
    ...(indexAsOf ? { temporalCoverage: indexAsOf, dateModified: indexAsOf } : {}),
    measurementTechnique:
      'Median of one representative published steady-state cash price per clinic. Introductory offers, starting-at floors, and multi-month packages are excluded, and medication-included prices are never pooled with membership-only prices.',
    variableMeasured: INDEX_ROWS.map((row) => ({
      '@type': 'PropertyValue',
      name: row.measure,
      value: row.median,
      minValue: row.low,
      maxValue: row.high,
      unitText: `USD ${row.unit}`,
      measurementMethod: `Median across ${row.n} clinics publishing a price`,
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cash-Pay Health Price Index',
    description:
      'Verified median cash-pay prices for GLP-1 programs, hormone therapy, DEXA scans, and at-home lab testing across US clinics that publish pricing.',
    url: URL,
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    ...(indexAsOf ? { lastReviewed: indexAsOf, dateModified: indexAsOf } : {}),
    mainEntity: { '@id': `${URL}#dataset` },
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Masthead */}
        <section className="border-b border-gray-200 bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              VitalityScout Data Report
            </p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">Cash-Pay Health Price Index</h1>
            <p className="mt-4 text-lg text-gray-700">
              What US clinics actually charge people who pay out of pocket. Every figure below is a{' '}
              <strong>median of prices published on clinic websites</strong>, one representative price
              per clinic, dated to the month it was verified. Medians, not averages, because a handful
              of concierge programs would otherwise move the headline number.
            </p>
            <dl className="mt-6 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Data as of</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{indexAsOfLabel}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Published measures</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{INDEX_ROWS.length}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">Update cadence</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">As clinics repost prices</dd>
              </div>
            </dl>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Section nav */}
          <nav className="mb-10 flex flex-wrap gap-3" aria-label="Sections">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-gray-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Headline figures */}
          <section id="summary" className="scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">The index at a glance</h2>
            <p className="mb-6 text-gray-600">
              Each row is a median across the clinics that publish a price for that exact service.
              <strong> n</strong> is the number of distinct clinics behind the figure. A price that
              appears in more than one form at a clinic is counted once.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {HEADLINE_CARDS.map((row) => (
                <div key={row.measure} className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{row.measure}</div>
                  <div className="mt-2 text-3xl font-bold text-gray-900">
                    {formatPrice(row.median)}
                    <span className="text-base font-medium text-gray-500">{unitSuffix(row.unit)}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {formatPrice(row.low)}&ndash;{formatPrice(row.high)} &middot; n={row.n}
                  </div>
                  <div className="mt-1 text-xs text-green-700">
                    Verified {row.asOf ? formatAsOfMonth(row.asOf) : indexAsOfLabel}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-300 text-xs font-medium uppercase tracking-wide text-gray-500">
                    <th className="py-2 pr-4">Measure</th>
                    <th className="py-2 pr-4 text-right">Median</th>
                    <th className="py-2 pr-4 text-right">Range</th>
                    <th className="py-2 pr-4 text-right">Clinics (n)</th>
                    <th className="py-2 text-right">Verified</th>
                  </tr>
                </thead>
                <tbody>
                  {INDEX_ROWS.map((row) => (
                    <tr key={row.measure} className="border-b border-gray-100 align-top">
                      <td className="py-3 pr-4 text-gray-900">{row.measure}</td>
                      <td className="py-3 pr-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                        {formatPrice(row.median)}
                      </td>
                      <td className="py-3 pr-4 text-right text-gray-600 whitespace-nowrap">
                        {formatPrice(row.low)}&ndash;{formatPrice(row.high)}
                      </td>
                      <td className="py-3 pr-4 text-right text-gray-600">{row.n}</td>
                      <td className="py-3 text-right text-xs text-green-700 whitespace-nowrap">
                        {row.asOf ? formatAsOfMonth(row.asOf) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <PriceEstimateDisclaimer />
            </div>
          </section>

          {/* GLP-1 */}
          <section id="glp1" className="mt-14 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">GLP-1 weight-loss programs</h2>
            <p className="mb-4 text-gray-700">
              Monthly cash-pay program prices, split by whether the medication is part of the fee. The
              split is the single most important thing in this dataset: a membership-only program and
              an all-in program can post the same headline number and cost very different amounts once
              the drug is added back in. Across {glp1.medsIncluded.n} clinics publishing an all-in
              monthly price, the median is {glp1MedianLabel}/mo. Across {glp1.medsExtra.n} clinics that
              bill medication separately, the median membership fee is{' '}
              {formatPrice(glp1.medsExtra.median)}/mo.
            </p>
            {glp1.unknown.n > 0 && (
              <p className="mb-4 text-sm text-gray-600">
                A further {glp1.unknown.n} clinic{glp1.unknown.n === 1 ? '' : 's'} published a monthly
                price without stating whether medication is included. Those are counted here but never
                priced into either median.
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Semaglutide programs', stats: sema, asOf: semaAsOf, href: '/guides/semaglutide-cost', cta: 'Semaglutide cost: per-clinic prices' },
                { title: 'Tirzepatide programs', stats: tirz, asOf: tirzAsOf, href: '/guides/tirzepatide-cost', cta: 'Tirzepatide cost: per-clinic prices' },
              ].map((card) => (
                <div key={card.title} className="rounded-lg border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900">{card.title}</h3>
                  {card.stats.medsIncluded.n >= MIN_N ? (
                    <>
                      <p className="mt-3 text-2xl font-bold text-gray-900">
                        {formatPrice(card.stats.medsIncluded.median)}
                        <span className="text-base font-medium text-gray-500">/mo</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        median with medication included &middot;{' '}
                        {formatPrice(card.stats.medsIncluded.low)}&ndash;
                        {formatPrice(card.stats.medsIncluded.high)}/mo &middot; n=
                        {card.stats.medsIncluded.n}
                      </p>
                    </>
                  ) : (
                    <p className="mt-3 text-sm text-gray-600">
                      Fewer than {MIN_N} clinics publish an all-in monthly price for this molecule, so
                      no median is published.
                    </p>
                  )}
                  {card.stats.medsExtra.n >= MIN_SPLIT_N && (
                    <p className="mt-2 text-sm text-gray-600">
                      Membership-only (medication billed separately):{' '}
                      {formatPrice(card.stats.medsExtra.median)}/mo median across{' '}
                      {card.stats.medsExtra.n} clinics.
                    </p>
                  )}
                  <p className="mt-3 text-xs text-green-700">
                    Verified {card.asOf ? formatAsOfMonth(card.asOf) : indexAsOfLabel}
                  </p>
                  <Link href={card.href} className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">
                    {card.cta} &rarr;
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Browse the clinics behind these figures in the{' '}
              <Link href="/weight-loss" className="text-blue-600 hover:underline">medical weight-loss directory</Link>, or
              see which programs sit at the bottom of the range in{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">
                cheapest GLP-1 without insurance
              </Link>.
            </p>
          </section>

          {/* Hormone therapy */}
          {hormone.medsIncluded.n >= MIN_N && (
            <section id="hormone" className="mt-14 scroll-mt-24">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">Hormone therapy programs</h2>
              <p className="mb-4 text-gray-700">
                Monthly testosterone and hormone-therapy program prices, split on the same
                medication-included rule as the GLP-1 measures. Across {hormone.medsIncluded.n} clinics
                publishing an all-in monthly price, the median is{' '}
                {formatPrice(hormone.medsIncluded.median)}/mo, ranging from{' '}
                {formatPrice(hormone.medsIncluded.low)} to {formatPrice(hormone.medsIncluded.high)}/mo.
                {hormone.medsExtra.n >= MIN_SPLIT_N && (
                  <>
                    {' '}Membership-only fees, where the medication is billed separately, run a{' '}
                    {formatPrice(hormone.medsExtra.median)}/mo median across {hormone.medsExtra.n}{' '}
                    clinics.
                  </>
                )}
              </p>
              <p className="mb-4 text-sm text-gray-600">
                This is the thinnest pool in the index. Most hormone clinics publish no price at all
                and quote only after a paid consult, which means the visible market skews toward
                value-positioned programs.
                {hormone.unknown.n > 0 && (
                  <>
                    {' '}Another {hormone.unknown.n} clinic{hormone.unknown.n === 1 ? '' : 's'} posted a
                    monthly price without stating medication inclusion; those are excluded from both
                    medians.
                  </>
                )}
              </p>
              <p className="text-sm text-gray-600">
                See the clinics behind these figures in the{' '}
                <Link href="/hormone-therapy" className="text-blue-600 hover:underline">
                  hormone therapy directory
                </Link>{' '}
                or the{' '}
                <Link href="/trt" className="text-blue-600 hover:underline">TRT hub</Link>.
              </p>
            </section>
          )}

          {/* DEXA */}
          {dexa && (
            <section id="dexa" className="mt-14 scroll-mt-24">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">DEXA body-composition scans</h2>
              <p className="mb-4 text-gray-700">
                One-time cash prices for a standard DEXA body-composition scan. Across {dexa.n} clinics
                that publish a scan price, the median is {dexaMedianLabel}, ranging from{' '}
                {formatPrice(dexa.low)} to {formatPrice(dexa.high)}. The spread is a market-structure
                fact, not noise: mobile scanning services price near the bottom of the range, while
                full-service studios bundle consults and additional metabolic testing at the top.
                Package deals and intro offers are excluded from the median.
              </p>

              {cityRows.length > 0 && (
                <>
                  <h3 className="mb-2 mt-8 text-lg font-bold text-gray-900">By metro area</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Metro areas where at least {MIN_N} clinics publish a scan price. Ranked by pool
                    size, then by median.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-300 text-xs font-medium uppercase tracking-wide text-gray-500">
                          <th className="py-2 pr-4">Metro</th>
                          <th className="py-2 pr-4 text-right">Median</th>
                          <th className="py-2 pr-4 text-right">Range</th>
                          <th className="py-2 text-right">Clinics (n)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cityRows.map((row) => (
                          <tr key={`${row.stateSlug}-${row.citySlug}`} className="border-b border-gray-100">
                            <td className="py-3 pr-4">
                              <Link
                                href={`/dexa-scans/${row.stateSlug}/${row.citySlug}`}
                                className="font-medium text-blue-600 hover:underline"
                              >
                                {row.city}, {row.state}
                              </Link>
                            </td>
                            <td className="py-3 pr-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                              {formatPrice(row.median)}
                            </td>
                            <td className="py-3 pr-4 text-right text-gray-600 whitespace-nowrap">
                              {formatPrice(row.low)}&ndash;{formatPrice(row.high)}
                            </td>
                            <td className="py-3 text-right text-gray-600">{row.n}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              <p className="mt-4 text-sm text-gray-600">
                Find a location in the{' '}
                <Link href="/dexa-scans" className="text-blue-600 hover:underline">DEXA scan directory</Link>, or see the
                lowest verified prices in{' '}
                <Link href="/guides/cheapest-dexa-scan" className="text-blue-600 hover:underline">
                  cheapest DEXA scan
                </Link>.
              </p>
            </section>
          )}

          {/* Labs */}
          {(labsPanels || labsMemberships) && (
            <section id="labs" className="mt-14 scroll-mt-24">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">At-home and direct-access lab testing</h2>
              {labsPanels && labsPanels.n >= MIN_N && (
                <p className="mb-4 text-gray-700">
                  Starting a-la-carte panel prices run a {formatPrice(labsPanels.median)} median across{' '}
                  {labsPanels.n} providers, from {formatPrice(labsPanels.low)} to{' '}
                  {formatPrice(labsPanels.high)}. The low end is a single marker ordered direct from a
                  reference lab; the high end is a broad multi-biomarker panel with clinician review.
                  Comparing them on price alone compares different products.
                </p>
              )}
              {labsMemberships && labsMemberships.n >= MIN_SPLIT_N && (
                <p className="mb-4 text-gray-700">
                  Membership and subscription plans run a {formatPrice(labsMemberships.median)} median
                  across {labsMemberships.n} providers ({formatPrice(labsMemberships.low)} to{' '}
                  {formatPrice(labsMemberships.high)}). Memberships bundle a set number of draws per
                  year, so they are never pooled with per-panel prices in this index.
                </p>
              )}
              <p className="text-sm text-gray-600">
                Compare providers and what each panel covers in the{' '}
                <Link href="/labs" className="text-blue-600 hover:underline">at-home lab testing directory</Link>.
              </p>
            </section>
          )}

          {/* Methodology */}
          <section id="methodology" className="mt-14 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Methodology</h2>
            <dl className="space-y-5 text-gray-700">
              {METHOD_NOTES.map((note) => (
                <div key={note.term}>
                  <dt className="font-semibold text-gray-900">{note.term}</dt>
                  <dd className="mt-1 text-sm">{note.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Cite */}
          <section id="cite" className="mt-14 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Cite this index</h2>
            <p className="mb-4 text-gray-700">
              Reuse of these figures is welcome in articles, forum answers, and research. Include the
              as-of month, because the medians are recomputed as clinics repost prices.
            </p>
            <div className="rounded-lg border-2 border-gray-900 bg-gray-900 p-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400">
                Citation
              </p>
              <pre className="overflow-x-auto text-sm leading-relaxed text-white">
                <code className="select-all">{CITATION_LINE}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Linking to <span className="font-mono text-gray-900">{URL}</span> keeps the citation
              pointed at the current numbers rather than a snapshot.
            </p>
          </section>

          {/* Email capture */}
          <div className="mt-14">
            <EmailCaptureCard
              title="Get the monthly Cash-Pay Price Report"
              description="Each month we recompute these medians from published clinic prices and send the updated figures, plus what moved and why."
              source="price_index"
            />
          </div>

          {/* FAQ */}
          <section id="faq" className="mt-14 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group border-b border-gray-200 py-5">
                  <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-blue-600">
                    <span className="pr-4">{item.question}</span>
                    <span className="text-blue-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">The pages behind these numbers</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/weight-loss" className="hover:underline">Medical weight-loss clinics by state</Link></li>
              <li><Link href="/guides/semaglutide-cost" className="hover:underline">Semaglutide cost: verified per-clinic prices</Link></li>
              <li><Link href="/guides/tirzepatide-cost" className="hover:underline">Tirzepatide cost: verified per-clinic prices</Link></li>
              <li><Link href="/guides/cheapest-glp1-without-insurance" className="hover:underline">Cheapest GLP-1 without insurance</Link></li>
              <li><Link href="/hormone-therapy" className="hover:underline">Hormone therapy clinics by state</Link></li>
              <li><Link href="/dexa-scans" className="hover:underline">DEXA scan locations by city</Link></li>
              <li><Link href="/guides/cheapest-dexa-scan" className="hover:underline">Cheapest DEXA scan: verified prices</Link></li>
              <li><Link href="/labs" className="hover:underline">At-home lab testing compared</Link></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />
      </SidebarShell>
      <Footer />
    </main>
  );
}
