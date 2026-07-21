import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';
import {
  getMedspaServiceRows,
  getMedspaServiceStats,
  getMedspaServiceAsOf,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';
import { allMedspaClinics } from '@/data/medspa-clinics-index';

const URL = 'https://vitalityscout.com/guides/botox-cost-per-unit';

const botox = getMedspaServiceStats('botox-per-unit');
const asOf = getMedspaServiceAsOf('botox-per-unit');
const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
const medianLabel = botox ? formatPrice(botox.median) : '—';
const lowLabel = botox ? formatPrice(botox.low) : '—';
const highLabel = botox ? formatPrice(botox.high) : '—';
const nLabel = botox ? botox.n : 0;
// Typical-session range derived from the verified per-unit median (20–40 units),
// computed — never hardcoded — so the total-cost answer tracks the real median.
const sessionLowLabel = botox ? formatPrice(Math.round(botox.median * 20)) : '—';
const sessionHighLabel = botox ? formatPrice(Math.round(botox.median * 40)) : '—';

export const metadata: Metadata = {
  title: {
    absolute: `Botox Cost Per Unit (2026): Verified Prices — ${medianLabel}/Unit Median`,
  },
  alternates: { canonical: URL },
  description:
    `Verified Botox prices run a median of ${medianLabel} per unit (range ${lowLabel}–${highLabel}) across ${nLabel} clinics that post a per-unit price. ` +
    'Per-clinic prices quoted from each clinic site and dated, with the per-unit vs per-area difference explained.',
};

const CLINIC_BY_ID = new Map(allMedspaClinics.map((c) => [c.id, c]));

const FAQ_ITEMS = [
  {
    question: 'How much does Botox cost?',
    answer:
      `Botox is usually priced per unit. At the verified median of ${medianLabel}/unit, a typical 20 to 40 unit treatment runs about ${sessionLowLabel} to ${sessionHighLabel} a session; a smaller area like a lip flip or crow’s feet costs less. ` +
      'Ask the clinic for your unit count and confirm the current price, since per-area flat fees and per-unit pricing are quoted differently.',
  },
  {
    question: 'How much does Botox cost per unit?',
    answer:
      `Across ${nLabel} clinics that publish a per-unit price, verified Botox runs a median of ${medianLabel} per unit, ranging from ${lowLabel} to ${highLabel}. ` +
      'A typical forehead-and-frown treatment uses roughly 20 to 40 units, so a session commonly lands in the low-to-mid hundreds of dollars. ' +
      'Ask whether a clinic prices per unit or per area, and how many units your treatment needs — the two quote styles are not comparable. Confirm the current price directly with the provider.',
  },
  {
    question: 'Is Botox priced per unit or per area?',
    answer:
      'Both models exist. Per-unit pricing (the prices on this page) charges for each unit of neurotoxin injected, so your total scales with the dose you actually receive. ' +
      'Per-area or per-treatment pricing charges a flat fee for a region like the forehead regardless of units. Per-unit is more transparent for comparison; per-area can be cheaper or more expensive depending on how many units the flat fee really covers. A $12 per-unit price and a $300 per-area price are not the same quote.',
  },
  {
    question: 'Why is Dysport cheaper per unit than Botox?',
    answer:
      'A Dysport unit is not equivalent to a Botox unit. Dysport is dosed in more units to achieve a comparable effect — roughly a 2.5-to-1 ratio — so its per-unit sticker price looks lower even when the treatment cost is similar. ' +
      'The same is true of other neurotoxins like Xeomin and Jeuveau, which are often quoted in the same per-unit bucket. Compare the all-in cost for your specific treatment, not the per-unit price.',
  },
  {
    question: 'How many units of Botox will I need?',
    answer:
      'It depends on the area and your muscle strength. Common ranges are roughly 10 to 30 units for frown lines, 10 to 30 for the forehead, and 5 to 15 per side for crow’s feet, but your injector determines the right dose. ' +
      'Multiply your unit count by the per-unit price for a rough estimate, then confirm with the clinic. This is general information, not medical advice.',
  },
];

export default function BotoxCostPerUnitPage() {
  const rows = getMedspaServiceRows('botox-per-unit');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Botox Cost Per Unit: Verified Prices',
    description: 'Verified per-clinic Botox per-unit prices, quoted from clinic websites and dated.',
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
      { '@type': 'ListItem', position: 2, name: 'Botox Cost Per Unit', item: URL },
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
            <span className="text-gray-700">Botox Cost Per Unit</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">💉</span>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Verified Prices
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Botox Cost Per Unit: What Injectables Actually Cost
            </h1>
            {/* Direct-answer lead — <= 80 words, leads with the computed median */}
            <p className="text-lg text-gray-700">
              Verified Botox runs a <strong>median of {medianLabel} per unit</strong> (range{' '}
              {lowLabel}&ndash;{highLabel}, n={nLabel} clinics, verified {asOfLabel}). A typical
              20&ndash;40 unit treatment therefore lands in the low-to-mid hundreds. Watch the quote
              style: per-unit pricing scales with your dose, while per-area pricing is a flat fee — the
              two are not comparable. Every price below is quoted from the clinic&apos;s own site and
              dated.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Verified stat block */}
          {botox && botox.n >= 3 && (
            <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
              <p className="text-lg font-semibold text-gray-900">
                Verified Botox: {medianLabel}/unit median{' '}
                <span className="font-normal text-gray-600">
                  (range {lowLabel}&ndash;{highLabel}, n={nLabel} clinics, verified {asOfLabel})
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Dysport, Xeomin, and Jeuveau are dosed in more units than Botox for a comparable
                effect, so their lower per-unit sticker price is not a cheaper treatment — compare the
                all-in cost, not the per-unit number.
              </p>
              <PriceEstimateDisclaimer />
            </div>
          )}

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Verified Botox prices by clinic</h2>
          <p className="mb-4 text-gray-600">
            Clinics with a per-unit Botox price published on their own website. Each row links to its
            source. Intro offers and &quot;from&quot; floors are excluded so a promotional number never
            distorts the typical price.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 text-left text-gray-600">
                  <th className="px-3 py-2 font-semibold">Clinic</th>
                  <th className="px-3 py-2 font-semibold">City</th>
                  <th className="px-3 py-2 font-semibold">Price per unit</th>
                  <th className="px-3 py-2 font-semibold">Source</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => {
                  const clinic = CLINIC_BY_ID.get(p.clinicId);
                  return (
                    <tr key={`${p.clinicId}-${p.display}`} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-900">
                        {clinic ? clinic.name : 'Clinic'}
                      </td>
                      <td className="px-3 py-2 text-gray-600">
                        {clinic ? (
                          <Link
                            href={`/med-spa/${clinic.stateSlug}/${clinic.citySlug}`}
                            className="text-rose-700 hover:underline"
                          >
                            {clinic.city}
                          </Link>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="px-3 py-2 font-semibold text-green-700">{p.display}</td>
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
              <strong>The median</strong> ({medianLabel}/unit, n={nLabel}) counts only steady-state
              per-unit Botox prices: one representative (cheapest) price per clinic. Limited-time intro
              offers, &quot;from&quot; floors, and multi-area package ranges are excluded.
            </p>
            <p>
              <strong>Per unit, not per area.</strong> Only per-unit prices are pooled here. A
              per-area or per-treatment flat fee measures a different thing and is never mixed into the
              per-unit median.
            </p>
            <p>
              <strong>Neurotoxin note.</strong> Dysport and similar neurotoxins are dosed in more units
              than Botox for a comparable effect, so their lower per-unit price does not mean a cheaper
              treatment. Compare the all-in cost for your specific treatment.
            </p>
            <p className="text-gray-500">
              Prices change and this is not medical advice. Neurotoxin injections are medical
              procedures; reconfirm pricing and unit counts directly with any provider, and consult a
              licensed injector.
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
            <h3 className="mb-3 font-bold text-gray-900">Find med spas near you</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/med-spa" className="hover:underline">Med spas & aesthetics providers by state</Link></li>
              <li><Link href="/med-spa/texas/houston" className="hover:underline">Houston med spas</Link></li>
              <li><Link href="/med-spa/texas/austin" className="hover:underline">Austin med spas</Link></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not medical or financial advice. Prices are gathered
              from clinic websites, are estimates, and change without notice. Neurotoxin injections are
              medical procedures with real risks. Verify all pricing and unit counts directly with the
              provider, and consult a licensed injector before treatment.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
