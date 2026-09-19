import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EdProviderComparison from '@/components/EdProviderComparison';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';
import { BLUECHEW_PLANS, BLUECHEW_STANDARD_SHIPPING_CENTS, COST_PLUS_EXAMPLES, ED_SOURCES, ED_VERIFIED_AT, ED_VERIFIED_LABEL, edFillTotal, edMoney } from '@/lib/ed-offers';

const PAGE_URL = 'https://vitalityscout.com/guides/online-ed-treatment';
const pharmacy = COST_PLUS_EXAMPLES.sildenafil;
const bluechew = BLUECHEW_PLANS[0].packs[0];
const FAQS = [
  { question: 'How much does online ED treatment cost?', answer: 'The bill depends on the prescription and service. Hims advertises sildenafil from $22/month without specifying the starter quantity on its landing page. The published BlueChew six-tablet SIL 45 mg plan costs ' + edMoney(bluechew.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS) + ' per monthly shipment including standard shipping, before tax. A Cost Plus 30-tablet sildenafil 50 mg fill is ' + edMoney(edFillTotal(pharmacy)) + ' with standard shipping, before tax and any separate clinician visit. These are different products and quantities, not equivalent treatment plans.' },
  { question: 'Can I get ED medication online without a prescription?', answer: 'Sildenafil and tadalafil require a prescription. A clinician can assess whether treatment is appropriate online, but approval is not guaranteed. FDA advises using a state-licensed pharmacy that requires a prescription and provides access to a licensed pharmacist.' },
  { question: 'Are ED chews and gummies FDA-approved generics?', answer: 'A compounded chew, gummy or combination is not an FDA-approved generic simply because it contains sildenafil or tadalafil. FDA-approved generics and compounded medicines have different regulatory status. Check the exact product with your clinician and pharmacy.' },
  { question: 'Do I have to buy an ED subscription?', answer: 'You can ask a clinician to send an appropriate prescription to a separate pharmacy and pay for the fill. The visit and any tests may cost extra. For delivery subscriptions, check the initial charge, quantity, refill schedule and cancellation cutoff before enrolling.' },
];

export const metadata: Metadata = {
  title: { absolute: 'Online ED Treatment (2026): Providers, Prices & Prescription Options' },
  description: 'Compare Hims, Ro, BlueChew, Lemonaid and a separate pharmacy fill. See verified ED prices, quantities, shipping, renewal terms and compounded-drug distinctions.',
  alternates: { canonical: PAGE_URL },
  openGraph: { title: 'Online ED Treatment: Compare Providers and Real Costs', description: 'Published prices, what the bill includes, and the prescription checks that matter.', url: PAGE_URL, type: 'article' },
};

export default function OnlineEDTreatmentGuide() {
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Online ED Treatment: Compare Providers, Prices and Prescription Options',
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-13', dateModified: ED_VERIFIED_AT, mainEntityOfPage: PAGE_URL,
    citation: Object.values(ED_SOURCES).map((source) => source.url),
  };
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'Online ED Treatment', item: PAGE_URL },
  ] };

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          {[articleSchema, breadcrumbs, buildFAQSchema(FAQS)].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
          <div className="border-b border-gray-200 bg-gray-50">
            <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3 text-sm text-gray-600">
              <Link href="/">Home</Link><span className="mx-2">→</span><Link href="/guides">Guides</Link><span className="mx-2">→</span><span className="text-gray-900">Online ED treatment</span>
            </nav>
          </div>
          <header className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
            <div className="mx-auto max-w-5xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">Men&apos;s health · Care and cost comparison</p>
              <h1 className="max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">How to Get ED Treatment Online: A 2026 Guide</h1>
              <p className="mt-5 max-w-3xl text-lg text-gray-700">Compare the medication, quantity and full bill before choosing a service. You can use a telehealth delivery plan or have a clinician send a prescription to a separate pharmacy.</p>
              <p className="mt-4 text-sm text-gray-500">By VitalityScout research · Prices checked {ED_VERIFIED_LABEL}</p>
              <div className="mt-6 max-w-3xl rounded-xl border border-blue-200 bg-white p-5">
                <p className="aeo-answer text-gray-800"><strong>What does it cost?</strong> Public offers range from a pharmacy fill plus a separate consultation to recurring telehealth plans. For example, BlueChew&apos;s {bluechew.quantity}-tablet SIL plan is {edMoney(bluechew.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS)} with standard shipping, while a {pharmacy.quantity}-tablet generic sildenafil pharmacy fill is {edMoney(edFillTotal(pharmacy))} before tax and consultation. The strength, formulation and quantity differ; a monthly headline alone cannot tell you which is better value.</p>
                <a href="#platforms" className="mt-4 inline-flex rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800">Compare the five options ↓</a>
              </div>
              <p className="mt-5 max-w-3xl text-sm text-gray-600">A licensed clinician decides whether a prescription is appropriate and which medication and dose to use. This guide provides research and price comparisons, not a diagnosis or a medical review of your care.</p>
            </div>
          </header>

          <article className="mx-auto max-w-5xl px-4 pb-10">
            <section id="platforms" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900">Compare online ED providers and a pharmacy alternative</h2>
              <p className="mt-3 text-gray-700">Start with the route you need: evaluation and delivery together, or a fill for a prescription you already have. Open each row&apos;s terms for the first charge, renewals, cancellation and original sources.</p>
              <EdProviderComparison placement="online_ed_treatment_comparison" />
              <p className="text-sm text-gray-600">Looking at particular brands? Read <Link href="/guides/hims-vs-ro-cost" className="text-blue-700 underline">Hims vs Ro cost</Link>, the <Link href="/guides/bluechew-cost" className="text-blue-700 underline">BlueChew plan and shipping breakdown</Link>, or <Link href="/guides/sildenafil-cost-without-insurance" className="text-blue-700 underline">sildenafil prices without insurance</Link>.</p>
            </section>

            <section id="cost" className="mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900">Compare what you pay now and at renewal</h2>
              <p className="mt-4 text-gray-700">A provider&apos;s “from” price may require a particular quantity or billing period. Separate an introductory discount from the ongoing price, and compare the same prescribed drug, strength and formulation. More tablets are not automatically a better fit.</p>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-700">
                <li><strong>Identify the product:</strong> medication, strength, tablet count and whether it is an FDA-approved generic or a compounded preparation.</li>
                <li><strong>Write down the first payment:</strong> consultation + medicine + shipping + any fees and taxes. If several months are prepaid, record the full amount due today.</li>
                <li><strong>Check the next shipment:</strong> refill quantity, interval, renewal price and whether promotional pricing ends.</li>
                <li><strong>Check how to leave:</strong> Hims and Lemonaid ask for cancellation at least 48 hours before the next order/refill processing. Canceling a subscription does not necessarily refund a prepared prescription. <a href={ED_SOURCES.himsCancel.url} className="text-blue-700 underline">Hims policy</a>; <a href={ED_SOURCES.lemonaidCancel.url} className="text-blue-700 underline">Lemonaid policy</a>.</li>
              </ol>
              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-gray-800">
                <h3 className="font-semibold">A pharmacy-fill example</h3>
                <p className="mt-2">Cost Plus lists {pharmacy.quantity} sildenafil {pharmacy.strength} tablets for {edMoney(pharmacy.medicationCents)}, including pharmacy labor. Add {edMoney(pharmacy.shippingCents)} standard shipping: <strong>{edMoney(edFillTotal(pharmacy))} before tax</strong>. Any clinician visit and tests cost extra. Thirty tablets describe the fill quantity, not how frequently you should take them. <a href={ED_SOURCES.costPlusSildenafil.url} className="text-blue-700 underline">Price calculator</a>.</p>
              </div>
            </section>

            <section id="medications" className="mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900">Generic tablets and compounded products are different</h2>
              <p className="mt-4 text-gray-700">FDA-approved generic medicines and compounded preparations are not the same category. A chew, gummy, sublingual tablet or combination containing sildenafil or tadalafil is not automatically an approved generic. Compounded drugs do not undergo FDA approval for safety, effectiveness and quality. Ask your clinician what is being prescribed and why that formulation is appropriate. <a href={ED_SOURCES.fdaCompounding.url} className="text-blue-700 underline">FDA explanation</a>.</p>
              <p className="mt-4 text-gray-700">Hims and Ro offer generic tablets alongside compounded products; BlueChew&apos;s featured preparations are compounded. Different milligram strengths and combined ingredients should not be treated as equivalent doses for a price comparison. This guide does not provide dosing instructions.</p>
            </section>

            <section id="how-telehealth-works" className="mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900">How an online ED visit works</h2>
              <p className="mt-4 text-gray-700">You provide your medical history, medications and symptoms. The clinician may need a current blood-pressure reading, a video visit or further assessment. If treatment is appropriate, the prescription goes to a pharmacy. Confirm how to contact the clinician for follow-up and how refills work before you pay. <a href={ED_SOURCES.lemonaid.url} className="text-blue-700 underline">Lemonaid visit process</a>; <a href={ED_SOURCES.roSildenafil.url} className="text-blue-700 underline">Ro visit process</a>.</p>
              <p className="mt-4 text-gray-700">An online form does not guarantee a prescription. If an in-person assessment or testing is needed, include that in your care and cost planning.</p>
            </section>

            <section id="what-is-ed" className="mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900">Treat the cause as well as the symptoms</h2>
              <p className="mt-4 text-gray-700">ED involves difficulty getting or maintaining an erection. A clinician can assess possible health conditions, medication effects and psychological factors. NIDDK describes treatment of the underlying cause where possible, with options including lifestyle changes, counseling and medicines. Oral PDE5 inhibitors improve blood flow; they do not create automatic erections. <a href={ED_SOURCES.niddk.url} className="text-blue-700 underline">NIDDK treatment guide</a>; <a href={ED_SOURCES.niddkMedicines.url} className="text-blue-700 underline">patient guide (PDF)</a>.</p>
            </section>

            <section id="safety" className="mt-12 max-w-4xl scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900">Prescription and pharmacy checks</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-gray-700">
                <li><strong>Disclose all medicines and health conditions.</strong> Do not combine oral ED medicines with nitrates. Have your clinician assess other interactions and whether treatment is safe for you. <a href={ED_SOURCES.niddkMedicines.url} className="text-blue-700 underline">NIDDK medicine guidance</a>.</li>
                <li><strong>Check the dispensing pharmacy.</strong> FDA advises looking for a prescription requirement, state licensure, a US address and phone number, and a pharmacist available for questions. Verify the pharmacy&apos;s license with the state board. <a href={ED_SOURCES.fdaPharmacy.url} className="text-blue-700 underline">FDA pharmacy checklist</a>.</li>
                <li><strong>Get urgent help for serious symptoms.</strong> An erection lasting more than four hours or sudden vision or hearing loss needs prompt medical care. For chest pain or another medical emergency, call 911. <a href={ED_SOURCES.niddk.url} className="text-blue-700 underline">NIDDK warning signs</a>.</li>
              </ul>
            </section>

            <section id="faq" className="mt-12 max-w-4xl">
              <h2 className="text-2xl font-bold text-gray-900">Common questions</h2>
              {FAQS.map((faq) => <details key={faq.question} className="border-b border-gray-200 py-5"><summary className="cursor-pointer font-semibold text-gray-900">{faq.question}</summary><p className="mt-3 text-gray-700">{faq.answer}</p></details>)}
            </section>

            <section id="methodology" className="mt-12 max-w-4xl rounded-xl bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-gray-900">How we checked this comparison</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">VitalityScout research checked public provider pricing and policy pages on {ED_VERIFIED_LABEL}, including the live BlueChew plan selector and Cost Plus price calculators. We did not purchase treatments or complete a medical intake. Unknown checkout terms remain labeled; no promotion is assumed. These examples cover common purchasing routes and are not an exhaustive market survey or endorsements. Clinical statements cite FDA and NIDDK materials; no clinician review is claimed.</p>
              <p className="mt-3 text-sm text-gray-700">Each provider row links to its sources. Confirm your final quote, pharmacy, prescription and refill terms with the provider. Read our <Link href="/editorial-policy" className="text-blue-700 underline">editorial and comparison policy</Link> or <Link href="/mens-health" className="text-blue-700 underline">explore the men&apos;s health directory</Link>.</p>
            </section>
          </article>
          <RelatedGuides items={getRelatedGuides('/guides/online-ed-treatment')} />
          <MedicalDisclaimer />
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
