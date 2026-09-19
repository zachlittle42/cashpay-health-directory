import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { getReferralLink } from '@/lib/referral-links';
import { buildFAQSchema } from '@/lib/jsonLd';
import { COST_PLUS_EXAMPLES, ED_OFFERS, ED_SOURCES, ED_VERIFIED_AT, ED_VERIFIED_LABEL, edFillTotal, edMoney } from '@/lib/ed-offers';

const PAGE_URL = 'https://vitalityscout.com/guides/sildenafil-cost-without-insurance';
const example = COST_PLUS_EXAMPLES.sildenafil;
const total = edFillTotal(example);
const FAQS = [
  { question: 'How much is sildenafil without insurance?', answer: `One public cash example checked ${ED_VERIFIED_LABEL}: Cost Plus listed ${example.quantity} generic sildenafil ${example.strength} tablets for ${edMoney(example.medicationCents)}, including pharmacy labor. With ${edMoney(example.shippingCents)} standard shipping, the fill is ${edMoney(total)} before tax. A prescription and any separate clinician visit are required. This is not a universal pharmacy price or a monthly treatment plan.` },
  { question: 'Can I buy sildenafil without a subscription?', answer: 'You can ask your clinician to send an appropriate prescription to a separate pharmacy and pay for the medicine fill. Confirm any auto-refill settings. The pharmacy price alone does not include a medical evaluation or guarantee that sildenafil will be prescribed.' },
  { question: 'Is a 30-tablet fill the same as a month of treatment?', answer: 'Not necessarily. The quantity dispensed is different from the dosing schedule. Your prescriber determines how and when to use your medication. Compare total cost for the prescription you actually need.' },
  { question: 'Is a compounded sildenafil chew the same as a generic tablet?', answer: 'No. A compounded product does not have FDA approval simply because it contains sildenafil. Compare the exact formulation and prescribed strength, and ask your clinician before considering a change.' },
];

export const metadata: Metadata = {
  title: { absolute: 'Sildenafil Cost Without Insurance (2026): Pharmacy vs Telehealth' },
  description: `A verified ${example.quantity}-tablet sildenafil ${example.strength} pharmacy example costs ${edMoney(total)} with standard shipping, before tax and consultation. Compare cash fills and telehealth fees.`,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Sildenafil Cost Without Insurance: Pharmacy vs Telehealth', description: 'Separate the medicine, shipping and consultation before comparing prices.', type: 'article', url: PAGE_URL },
};

export default function SildenafilCostGuide() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: 'Sildenafil Cost Without Insurance: Pharmacy Fills vs Telehealth',
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' }, datePublished: ED_VERIFIED_AT, dateModified: ED_VERIFIED_AT, mainEntityOfPage: PAGE_URL,
    citation: [ED_SOURCES.costPlusSildenafil.url, ED_SOURCES.hims.url, ED_SOURCES.ro.url, ED_SOURCES.fdaCompounding.url, ED_SOURCES.fdaPharmacy.url],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
          <div className="border-b border-gray-200 bg-gray-50"><nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-4 py-3 text-sm text-gray-600"><Link href="/guides">Guides</Link><span className="mx-2">→</span><Link href="/guides/online-ed-treatment">Online ED treatment</Link><span className="mx-2">→</span>Sildenafil cost</nav></div>
          <header className="bg-gradient-to-b from-blue-50 to-white px-4 py-12"><div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Cash medication costs</p>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">Sildenafil cost without insurance: pharmacy fills vs telehealth</h1>
            <p className="mt-5 text-lg text-gray-700">Paying for a prescription fill and subscribing to a telehealth service are different purchases. Compare the same prescribed medicine and quantity, then add the cost of getting the prescription.</p>
            <p className="mt-4 text-sm text-gray-500">By VitalityScout research · Checked {ED_VERIFIED_LABEL}</p>
            <p className="aeo-answer mt-6 rounded-xl border border-blue-200 bg-white p-5 text-gray-800"><strong>One verified cash example:</strong> Cost Plus lists {example.quantity} sildenafil {example.strength} tablets for {edMoney(example.medicationCents)} plus {edMoney(example.shippingCents)} standard shipping: <strong>{edMoney(total)} per fill before tax</strong>. That does not include a clinician visit or any tests. It is a fill quantity, not a recommended monthly supply.</p>
          </div></header>

          <article className="mx-auto max-w-4xl px-4 pb-10">
            <section><h2 className="text-2xl font-bold text-gray-900">What the pharmacy example actually includes</h2>
              <dl className="mt-5 divide-y divide-gray-200 rounded-xl border border-gray-200 px-5 text-gray-700">
                <div className="flex justify-between gap-4 py-4"><dt>{example.quantity} × {example.strength} generic sildenafil tablets</dt><dd className="font-semibold">{edMoney(example.medicationCents)}</dd></div>
                <div className="flex justify-between gap-4 py-4"><dt>Standard shipping for one order</dt><dd className="font-semibold">{edMoney(example.shippingCents)}</dd></div>
                <div className="flex justify-between gap-4 py-4 text-gray-900"><dt className="font-semibold">Fill total before tax</dt><dd className="font-bold">{edMoney(total)}</dd></div>
                <div className="flex justify-between gap-4 py-4"><dt>Clinician visit, prescription and any tests</dt><dd className="text-right">Separate; varies</dd></div>
              </dl>
              <p className="mt-4 text-sm text-gray-600">The displayed medication price already includes pharmacy labor; adding it again would double-count the fee. Allocating shipping across this fill gives about {edMoney(Math.round(total / example.quantity))} per tablet before tax. <a href={ED_SOURCES.costPlusSildenafil.url} className="text-blue-700 underline" data-link-purpose="source">Cost Plus price calculator</a>.</p>
              <a href={ED_SOURCES.costPlusSildenafil.url} target="_blank" rel="noopener noreferrer" data-provider-id="cost-plus-drugs" data-provider-name="Cost Plus Drugs" data-category="ed" data-placement="sildenafil_cost_fill_example" className="mt-5 inline-flex rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">Check the current pharmacy price →</a>
            </section>

            <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">How that differs from Hims or Ro</h2><p className="mt-4 text-gray-700">Telehealth delivery plans can bundle assessment, medication and follow-up. Their public starting prices may use different quantities or billing periods. These offers describe different services; this table does not establish a cheapest provider.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">{ED_OFFERS.filter((offer) => ['hims', 'ro'].includes(offer.id)).map((offer) => {
                const referral = getReferralLink(offer.providerId, offer.url, 'ed');
                return <div key={offer.id} className="rounded-xl border border-gray-200 p-5"><h3 className="text-lg font-semibold text-gray-900">{offer.provider}</h3><p className="mt-2 font-semibold text-emerald-800">{offer.price}</p><p className="mt-3 text-sm text-gray-700">{offer.priceDetail}</p><p className="mt-3 text-sm text-gray-600"><strong>Confirm:</strong> {offer.unknowns}</p><a href={referral.href} target="_blank" rel={referral.commercial ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} data-provider-id={referral.providerId} data-provider-name={offer.provider} data-category="ed" data-placement="sildenafil_cost_telehealth_option" className="mt-4 inline-flex text-sm font-semibold text-blue-700 underline">Check {offer.provider} prices →</a>{referral.commercial && <p className="mt-2 text-xs text-gray-500">We may earn a referral payment. <Link href="/editorial-policy" className="underline">Disclosure</Link>.</p>}</div>;
              })}</div>
              <p className="mt-4 text-gray-700">Compare <Link href="/guides/hims-vs-ro-cost" className="text-blue-700 underline">Hims vs Ro pricing</Link> for the brand-specific details, or use the <Link href="/guides/online-ed-treatment#platforms" className="text-blue-700 underline">full ED comparison</Link> to include Lemonaid and BlueChew.</p>
            </section>

            <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">How to compare a fill without a medication subscription</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-700">
                <li><strong>Start with clinical assessment.</strong> Ask whether sildenafil is appropriate and whether the prescription can be sent to your chosen pharmacy. Confirm the visit price and any tests separately.</li>
                <li><strong>Match the prescription.</strong> Compare the same drug, strength, formulation and quantity. Do not change a prescribed strength to chase a lower price.</li>
                <li><strong>Add the full order costs.</strong> For this example, the first-fill budget is {edMoney(total)} + tax + your separate visit/test costs. A refill may have a different price or require another consultation.</li>
                <li><strong>Check refill settings.</strong> Paying for a pharmacy fill is different from buying a telehealth membership. Confirm whether auto-refills are optional and how to manage the order.</li>
              </ol>
              <p className="mt-4 text-gray-700">A larger fill spreads one shipping fee across more tablets, but it also increases the amount you buy upfront. Order only what your clinician prescribes. We have not checked every pharmacy, insurance benefit or discount program, so this is an example to price against your own quote.</p>
            </section>

            <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">What to check before buying online</h2><p className="mt-4 text-gray-700">Use a pharmacy that requires a prescription, is licensed with a state board and provides access to a pharmacist. FDA&apos;s <a href={ED_SOURCES.fdaPharmacy.url} className="text-blue-700 underline">online-pharmacy guidance</a> explains how to verify these details.</p><p className="mt-4 text-gray-700">A compounded sildenafil chew is not the same regulatory product as an approved generic tablet. The <Link href="/guides/bluechew-cost" className="text-blue-700 underline">BlueChew cost guide</Link> keeps those plans separate. FDA explains that compounded medicines are <a href={ED_SOURCES.fdaCompounding.url} className="text-blue-700 underline">not FDA-approved</a>.</p><p className="mt-4 text-gray-700">Discuss all medicines with your prescriber, including nitrates, which must not be combined with oral ED medicines. See <a href={ED_SOURCES.niddkMedicines.url} className="text-blue-700 underline">NIDDK&apos;s patient guidance</a> and our <Link href="/guides/online-ed-treatment#safety" className="text-blue-700 underline">ED safety section</Link>.</p></section>

            <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">Common cost questions</h2>{FAQS.map((faq) => <details key={faq.question} className="border-b border-gray-200 py-5"><summary className="cursor-pointer font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 text-gray-700">{faq.answer}</p></details>)}</section>
            <section className="mt-12 rounded-xl bg-gray-50 p-6"><h2 className="text-lg font-bold text-gray-900">Research and price-check method</h2><p className="mt-3 text-sm leading-relaxed text-gray-700">VitalityScout research checked the public Cost Plus calculator with 50 mg and 30 tablets selected on {ED_VERIFIED_LABEL}, plus the linked provider pricing pages. No prescription, medical intake or purchase was completed. The displayed fill excludes tax and consultation. Prices and stock may change; clinical suitability and patient-specific quotes are not verified. No clinician review is claimed. <Link href="/editorial-policy" className="text-blue-700 underline">Editorial and comparison policy</Link>.</p><ul className="mt-3 space-y-2 text-sm">{(['costPlusSildenafil', 'hims', 'ro', 'roSildenafil', 'fdaPharmacy', 'fdaCompounding', 'niddkMedicines'] as const).map((id) => <li key={id}><a href={ED_SOURCES[id].url} className="text-blue-700 underline" data-link-purpose="source">{ED_SOURCES[id].label}</a></li>)}</ul></section>
          </article>
          <RelatedGuides items={getRelatedGuides('/guides/sildenafil-cost-without-insurance')} />
          <MedicalDisclaimer />
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
