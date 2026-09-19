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
import { BLUECHEW_PLANS, BLUECHEW_SHIPPING_OPTIONS, BLUECHEW_STANDARD_SHIPPING_CENTS, ED_SOURCES, ED_VERIFIED_AT, ED_VERIFIED_LABEL, edMoney } from '@/lib/ed-offers';

const PAGE_URL = 'https://vitalityscout.com/guides/bluechew-cost';
const starter = BLUECHEW_PLANS[0].packs[0];
const starterTotal = starter.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS;
const FAQS = [
  { question: 'How much is BlueChew including shipping?', answer: `The live selector checked ${ED_VERIFIED_LABEL} showed SIL 45 mg at ${edMoney(starter.medicationCents)} for ${starter.quantity} tablets monthly. Add ${edMoney(BLUECHEW_STANDARD_SHIPPING_CENTS)} standard shipping: ${edMoney(starterTotal)} before tax. Higher quantities, other products and expedited shipping cost more. This is a public plan example, subject to eligibility and a prescription.` },
  { question: 'Does BlueChew charge separately for the consultation?', answer: 'BlueChew says the online medical consultation is included. Shipping is an additional cost unless a qualifying promotion specifically waives it. We have not included a promotional discount.' },
  { question: 'Is the first BlueChew order cheaper than renewal?', answer: 'Promotional offers may change. These tables use the standard published plan amounts without a first-order discount. Check both the amount due today and the recurring refill amount before entering a plan.' },
  { question: 'Is BlueChew the same as generic Viagra or Cialis?', answer: 'Its SIL and TAD products contain sildenafil and tadalafil, respectively, but they are compounded products, not FDA-approved generic tablets. Strength and formulation matter; ask the prescriber which product is appropriate.' },
];

export const metadata: Metadata = {
  title: { absolute: 'BlueChew Cost (2026): SIL & TAD Plans, Shipping and Renewal Checks' },
  description: 'BlueChew monthly SIL and TAD prices by tablet count, with $5 shipping added. Compare the full bill, compounded status and terms to confirm before renewal.',
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'BlueChew Cost: Plans, Shipping and Renewal Checks', description: 'An itemized look at the public SIL and TAD plan selector.', type: 'article', url: PAGE_URL },
};

export default function BlueChewCostGuide() {
  const referral = getReferralLink('bluechew', ED_SOURCES.bluechew.url, 'ed');
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: 'BlueChew Cost: SIL and TAD Plans, Shipping and Renewals',
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: ED_VERIFIED_AT, dateModified: ED_VERIFIED_AT, mainEntityOfPage: PAGE_URL,
    citation: [ED_SOURCES.bluechew.url, ED_SOURCES.bluechewShipping.url, ED_SOURCES.bluechewSil.url, ED_SOURCES.fdaCompounding.url],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(FAQS)) }} />
          <div className="border-b border-gray-200 bg-gray-50"><nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-4 py-3 text-sm text-gray-600"><Link href="/guides">Guides</Link><span className="mx-2">→</span><Link href="/guides/online-ed-treatment">Online ED treatment</Link><span className="mx-2">→</span>BlueChew cost</nav></div>
          <header className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Plan and fee breakdown</p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">BlueChew cost: SIL and TAD plans, shipping and renewals</h1>
              <p className="mt-5 text-lg text-gray-700">The tablet count and shipping charge matter more than a “from” price. Here is what the public plan selector showed, with standard shipping added.</p>
              <p className="mt-4 text-sm text-gray-500">By VitalityScout research · Checked {ED_VERIFIED_LABEL}</p>
              <p className="aeo-answer mt-6 rounded-xl border border-blue-200 bg-white p-5 text-gray-800"><strong>Starter example:</strong> {starter.quantity} SIL tablets containing 45 mg sildenafil were listed at {edMoney(starter.medicationCents)}/month. With {edMoney(BLUECHEW_STANDARD_SHIPPING_CENTS)} standard shipping, that is <strong>{edMoney(starterTotal)} per monthly shipment before tax</strong>. No introductory coupon is included. A clinician must determine whether treatment is appropriate.</p>
            </div>
          </header>
          <article className="mx-auto max-w-4xl px-4 pb-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Monthly plan prices, including standard shipping</h2>
              <p className="mt-4 text-gray-700">These are the SIL and TAD options visible in the <a href={ED_SOURCES.bluechew.url} className="text-blue-700 underline" data-link-purpose="source">live selector</a>. Other BlueChew products, including combination preparations, have different pricing. Availability can depend on whether you are a new or existing patient, your location and clinical assessment.</p>
              {BLUECHEW_PLANS.map((plan) => (
                <div key={plan.id} className="mt-7">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">{plan.name}: {plan.strength} {plan.medication.toLowerCase()}</h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-200 focus:outline-blue-600" role="region" aria-label={`${plan.name} plan prices, scroll horizontally`} tabIndex={0}>
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <caption className="sr-only">{plan.name} monthly plan cost by quantity, including standard shipping before tax</caption>
                      <thead className="bg-gray-50 text-gray-700"><tr><th scope="col" className="px-4 py-3">Tablets / month</th><th scope="col" className="px-4 py-3">Plan</th><th scope="col" className="px-4 py-3">With shipping</th><th scope="col" className="px-4 py-3">Per tablet*</th></tr></thead>
                      <tbody className="divide-y divide-gray-200">{plan.packs.map((pack) => {
                        const total = pack.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS;
                        return <tr key={pack.quantity}><th scope="row" className="px-4 py-3 font-medium">{pack.quantity}</th><td className="px-4 py-3">{edMoney(pack.medicationCents)}</td><td className="px-4 py-3 font-semibold">{edMoney(total)}</td><td className="px-4 py-3">{edMoney(Math.round(total / pack.quantity))}</td></tr>;
                      })}</tbody>
                    </table>
                  </div>
                </div>
              ))}
              <p className="mt-3 text-xs leading-relaxed text-gray-500">*Total including one standard shipping charge divided by tablet count, rounded to the nearest cent; taxes excluded. This is cost allocation, not a dosing recommendation or an equivalence between SIL and TAD.</p>
              <a href={referral.href} target="_blank" rel={referral.commercial ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} data-provider-id={referral.providerId} data-provider-name="BlueChew" data-category="ed" data-placement="bluechew_cost_after_table" className="mt-5 inline-flex rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">Check your BlueChew plan →</a>
              {referral.commercial && <p className="mt-2 text-xs text-gray-600">We may earn a referral payment through this link. <Link href="/editorial-policy" className="underline">How we compare providers</Link>.</p>}
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">What is included, and what can change the bill?</h2>
              <p className="mt-4 text-gray-700">The consultation is included. BlueChew&apos;s account guide lists these shipping choices: {BLUECHEW_SHIPPING_OPTIONS.map((option) => `${option.name.toLowerCase()} ${edMoney(option.cents)}`).join(', ')}. Our totals use ground shipping once per monthly order. Faster shipping is not faster clinical approval. <a href={ED_SOURCES.bluechewShipping.url} className="text-blue-700 underline">Shipping and consultation source</a>.</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
                <li><strong>First payment:</strong> check the actual product and quantity, shipping, taxes and any first-order discount. An advertised coupon may apply to a different product.</li>
                <li><strong>Renewal:</strong> verify the amount and date of the next charge. The tables use standard public prices; they do not promise a permanent rate.</li>
                <li><strong>Commitment and cancellation:</strong> the monthly selector does not show a minimum term and says plans can be changed or canceled. Confirm the processing cutoff and refund policy before ordering; canceling future refills may not stop a prepared shipment.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">Compare the formulation as well as the price</h2>
              <p className="mt-4 text-gray-700">BlueChew identifies its products as compounded medicines. They are not FDA-approved generic Viagra or Cialis. The plan selector and product page use different chewable/sublingual wording, so confirm the form being prescribed instead of assuming how to take it. <a href={ED_SOURCES.bluechewSil.url} className="text-blue-700 underline">SIL product page</a>.</p>
              <p className="mt-4 text-gray-700">FDA does not approve compounded medicines or review their safety, effectiveness and quality before marketing. A prescriber should explain why a particular product fits your medical needs. Do not substitute a cheaper strength or formulation on your own. <a href={ED_SOURCES.fdaCompounding.url} className="text-blue-700 underline">FDA compounding guidance</a>.</p>
              <p className="mt-4 text-gray-700">If cost is the main concern, compare a clinician visit plus a separate generic pharmacy fill in our <Link href="/guides/sildenafil-cost-without-insurance" className="text-blue-700 underline">sildenafil cost guide</Link>. Its example uses a different strength and quantity. For assessment and pharmacy checks, see the <Link href="/guides/online-ed-treatment#safety" className="text-blue-700 underline">online ED treatment guide</Link>.</p>
            </section>

            <section className="mt-12"><h2 className="text-2xl font-bold text-gray-900">Common cost questions</h2>{FAQS.map((faq) => <details key={faq.question} className="border-b border-gray-200 py-5"><summary className="cursor-pointer font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 text-gray-700">{faq.answer}</p></details>)}</section>
            <section className="mt-12 rounded-xl bg-gray-50 p-6"><h2 className="text-lg font-bold text-gray-900">Research notes and sources</h2><p className="mt-3 text-sm leading-relaxed text-gray-700">We read the public plan selector and shipping page on {ED_VERIFIED_LABEL}. We did not complete intake, buy medication or assess clinical quality. Prices may change, and patient-specific checkout terms are not verified. No clinician review is claimed. <Link href="/editorial-policy" className="text-blue-700 underline">Editorial and comparison policy</Link>.</p><ul className="mt-3 space-y-2 text-sm">{(['bluechew', 'bluechewShipping', 'bluechewSil', 'fdaCompounding'] as const).map((id) => <li key={id}><a href={ED_SOURCES[id].url} className="text-blue-700 underline" data-link-purpose="source">{ED_SOURCES[id].label}</a></li>)}</ul></section>
          </article>
          <RelatedGuides items={getRelatedGuides('/guides/bluechew-cost')} />
          <MedicalDisclaimer />
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
