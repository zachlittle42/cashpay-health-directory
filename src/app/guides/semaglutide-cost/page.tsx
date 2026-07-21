import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import SubjectiveBanner from '@/components/SubjectiveBanner';
import { buildFAQSchema } from '@/lib/jsonLd';
import {
  getGlp1ServiceRows,
  getGlp1ServiceStats,
  getGlp1ServiceAsOf,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';
import { allWeightLossClinics } from '@/data/weightloss-clinics-index';

const URL = 'https://vitalityscout.com/guides/semaglutide-cost';
const SERVICE = 'semaglutide-program';

// Computed at build time from WEIGHTLOSS_PRICING — never hardcoded. Medians are
// split by meds-included status; the meds-included group is the headline.
const stats = getGlp1ServiceStats(SERVICE);
const asOf = getGlp1ServiceAsOf(SERVICE);
const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
const mi = stats.medsIncluded;
const me = stats.medsExtra;
const medianLabel = mi.n > 0 ? formatPrice(mi.median) : '—';
const lowLabel = mi.n > 0 ? formatPrice(mi.low) : '—';
const highLabel = mi.n > 0 ? formatPrice(mi.high) : '—';

export const metadata: Metadata = {
  title: {
    // Front-load the computed price so the CTR hook survives ~60-char SERP truncation.
    absolute:
      mi.n > 0
        ? `Semaglutide Cost: ${medianLabel}/mo Median (2026 Verified Prices)`
        : 'Semaglutide Cost (2026): Verified Monthly Program Prices',
  },
  alternates: { canonical: URL },
  description:
    `Verified semaglutide programs with the medication included run a median of ${medianLabel}/mo across the ${mi.n} clinics that publish a monthly price. ` +
    'Per-clinic prices quoted from each clinic site and dated, with membership-only prices tagged separately so the two are never confused.',
};

// id -> weight-loss clinic (name, city, and its city directory URL)
const CLINIC_BY_ID = new Map(allWeightLossClinics.map((c) => [c.id, c]));

const FAQ_ITEMS = [
  {
    question: 'How much does semaglutide cost per month?',
    answer:
      `Across the ${mi.n} clinics we found that publish a monthly semaglutide-program price with the medication included, the median is ${medianLabel}/mo, ranging from ${lowLabel} to ${highLabel}/mo. ` +
      'A membership-only program that bills the medication separately can post a lower headline number, so we tag every price with whether the medication is included. ' +
      'Most clinics quote only after a consult. Confirm the current price and exactly what it includes with the clinic before you commit.',
  },
  {
    question: 'How much does semaglutide cost without insurance?',
    answer:
      `Every price on this page is a cash-pay, self-pay number. These programs bill you directly, not insurance, so the median of ${medianLabel}/mo with the medication included is what semaglutide costs without insurance at the ${mi.n} clinics that publish a price. ` +
      'Coverage varies and most plans do not cover compounded semaglutide, so the cash price is often the real out-of-pocket cost either way. Confirm the current price and what it includes with the clinic.',
  },
  {
    question: 'Why do semaglutide prices vary so much?',
    answer:
      'The biggest driver is what is bundled. An all-in program folds the medication, the provider visits, and often the labs into one monthly number. ' +
      'A membership-only program charges for provider access and bills the medication separately at a pharmacy, so its headline price looks lower until you add the drug back in. ' +
      'Compounded and brand products are also priced differently. Compare programs on what the monthly price actually includes, not the sticker alone.',
  },
  {
    question: 'What is included in a monthly semaglutide price?',
    answer:
      'It varies by clinic. Some programs are all-in (medication, provider visits, and supplies in one monthly fee). Others are membership-only, where you pay for provider access and buy the medication separately. ' +
      'Lab work — the baseline panel and periodic re-checks — is often billed on top either way. Each price in the table below is tagged "meds included" or "plus medication" so a membership fee is never mistaken for an all-in price.',
  },
  {
    question: 'Is cheaper semaglutide worse?',
    answer:
      'Not necessarily, but price alone is a poor proxy for quality. A low membership fee that excludes the medication and labs can cost more all-in than a mid-priced all-inclusive program. ' +
      'What matters is the clinical wrap: a licensed prescriber, dose titration, and monitoring for side effects. Judge a program on what the price includes and how it monitors you, not the headline number. This is information, not medical advice.',
  },
];

export default function SemaglutideCostPage() {
  const rows = getGlp1ServiceRows(SERVICE);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Semaglutide Cost: Verified Monthly Program Prices',
    description:
      'Verified per-clinic monthly semaglutide program prices, quoted from clinic websites and dated.',
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
      { '@type': 'ListItem', position: 2, name: 'Semaglutide Cost', item: URL },
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
            <span className="text-gray-700">Semaglutide Cost</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">💉</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Verified Prices
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Semaglutide Cost: What Monthly Programs Actually Run
            </h1>
            {/* Direct-answer lead — <= 80 words, leads with the computed median */}
            <p className="text-lg text-gray-700">
              Verified semaglutide programs with the medication included run a{' '}
              <strong>median of {medianLabel}/mo</strong> across the {mi.n} clinics that publish a
              monthly price (range {lowLabel}&ndash;{highLabel}/mo, verified {asOfLabel}). The gap is
              what&apos;s bundled: membership-only programs bill the medication separately; all-in
              programs fold it in. Most clinics post no price and quote it only after a consult. Every
              price below is quoted from the clinic&apos;s own site and dated.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block — split by meds-included status */}
          {mi.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Verified semaglutide program cost: {medianLabel}/mo median{' '}
                <span className="font-normal text-gray-600">
                  with medication included (range {lowLabel}&ndash;{highLabel}/mo, n={mi.n} clinics,
                  verified {asOfLabel})
                </span>
              </p>
              {me.n >= 2 && (
                <p className="text-sm text-gray-600">
                  Programs where medication is billed separately: from {formatPrice(me.low)}/mo (n=
                  {me.n}). A membership-only price and an all-in price are different products at the
                  same headline number, so the two are never pooled.
                </p>
              )}
              <PriceEstimateDisclaimer />
            </div>
          )}

          {/* The consult-gated honesty note */}
          <div className="mb-10 rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="mb-2 text-xl font-bold text-gray-900">
              The published minority prices what the majority hides
            </h2>
            <p className="text-sm text-gray-700">
              Most weight-loss clinics keep their monthly price off the website and reveal it only
              after a consult — pricing is a sales lever, not a disclosure. The clinics that do post a
              number are often the value-positioned ones competing on price, so the market you can see
              here skews lower than the consult-gated market you can&apos;t. Treat this table as a
              floor for what to expect, and get more than one quote before you commit.
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified semaglutide prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            Clinics with a monthly semaglutide-program price published on their own website. Each row
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
                            href={`/weight-loss/${clinic.stateSlug}/${clinic.citySlug}`}
                            className="text-green-700 hover:underline"
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
              <strong>The median</strong> ({medianLabel}/mo, n={mi.n}) counts only steady-state monthly
              semaglutide-program prices with the medication included: one representative (cheapest)
              price per clinic, priced per month. First-month intro hooks, &quot;from&quot; floors, and
              multi-month prepay packages are excluded so a promotional number never distorts the
              typical cost.
            </p>
            <p>
              <strong>Membership vs all-in.</strong> A membership-only fee (medication billed
              separately) and an all-in program (medication included) are different products at the
              same headline number, so each row is tagged and the two medians are computed separately.
              A membership fee is never counted as if it were an all-in price.
            </p>
            <p>
              <strong>Coverage caveat.</strong> This reflects the clinics that publish a price, not the
              whole market. Most clinics quote only after a consult, and those prices are not captured
              here — see the note above.
            </p>
            <p className="text-gray-500">
              Prices change and this is not medical advice. Semaglutide requires a licensed prescriber,
              bloodwork, and ongoing monitoring; reconfirm pricing and what it includes directly with
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
            <h3 className="mb-3 font-bold text-gray-900">Find and compare weight-loss clinics</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/tirzepatide-cost" className="hover:underline">Tirzepatide cost: verified monthly program prices</Link></li>
              <li><Link href="/guides/cheapest-way-to-get-semaglutide" className="hover:underline">Cheapest way to get semaglutide without insurance</Link></li>
              <li><Link href="/guides/cheapest-glp1-without-insurance" className="hover:underline">Cheapest GLP-1 without insurance: price compare</Link></li>
              <li><Link href="/guides/compounded-semaglutide" className="hover:underline">Compounded semaglutide: what it costs</Link></li>
              <li><Link href="/weight-loss" className="hover:underline">GLP-1 &amp; weight-loss clinics by state</Link></li>
              <li><Link href="/glp1" className="hover:underline">Compare telehealth GLP-1 options</Link></li>
              <li><Link href="/guides/glp1-weight-loss-complete-guide" className="hover:underline">GLP-1 complete guide: how they work, results, side effects</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not medical or financial advice. Prices are gathered
              from clinic websites, are estimates, and change without notice. Semaglutide is a
              prescription medication that requires a licensed prescriber, lab testing, and ongoing
              monitoring. Verify all pricing and inclusions directly with the clinic, and consult a
              licensed clinician before starting or changing therapy.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
      {/* Subjective house banner — SHIPS OFF (NEXT_PUBLIC_SH_UNITS !== 'on'). */}
      <SubjectiveBanner family="semaglutide" />
    </main>
  );
}
