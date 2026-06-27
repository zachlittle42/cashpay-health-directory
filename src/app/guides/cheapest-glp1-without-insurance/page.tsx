import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Cheapest GLP-1 Without Insurance (2026): Price Compare' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cheapest-glp1-without-insurance' },
  description:
    'The cheapest GLP-1 without insurance in 2026 — semaglutide via NovoCare, tirzepatide via LillyDirect, telehealth, compounding, and a provider price table.',
};

// Real People-Also-Ask / GSC long-tail questions (cheapest glp-1 without
// insurance + variants), answered only from facts already stated on this page.
// Every price is framed as an advertised estimate to confirm with the provider
// (consistent with MedicalDisclaimer). The visible FAQ block below mirrors this
// schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the cheapest GLP-1 without insurance in 2026?',
    answer:
      'Across both GLP-1 drug families, the lowest published cash price for an FDA-approved option is the oral Wegovy semaglutide pill at about $149 per month through NovoCare (the 4 mg dose rises to $199 after August 31, 2026). For an FDA-approved injection, Lilly’s LillyDirect lists Zepbound (tirzepatide) single-dose vials from about $299 per month for the 2.5 mg starting dose, and Novo Nordisk’s NovoCare lists Wegovy and Ozempic pens at a standard $349 per month. These are advertised prices that change often — confirm the current number with the manufacturer or pharmacy before relying on it.',
  },
  {
    question: 'What is the cheapest way to get a GLP-1 without insurance?',
    answer:
      'For most uninsured people the cheapest legitimate route is buying the FDA-approved drug directly from the manufacturer’s self-pay program rather than at a retail pharmacy. Novo Nordisk sells semaglutide through NovoCare (oral pill from ~$149/mo, pens at ~$349/mo standard) and Eli Lilly sells tirzepatide through LillyDirect (Zepbound vials from ~$299/mo). Both of these undercut the ~$1,000–$1,350 retail cash price. A telehealth visit can supply the prescription, but compare the all-in cost (visit fee plus drug), not just the headline. Prices are estimates to verify with the provider.',
  },
  {
    question: 'Which is the cheapest GLP-1 provider for cash pay?',
    answer:
      'There is no single cheapest provider for every dose. On the FDA-approved side, NovoCare (semaglutide) and LillyDirect (tirzepatide) are the manufacturer self-pay storefronts and are usually the price floor for the real brand drug — NovoCare’s oral pill from ~$149/mo is the lowest entry point, while LillyDirect Zepbound vials from ~$299/mo are the lowest FDA-approved injection. Telehealth platforms add a visit or membership fee on top. The right comparison is the same drug, the same dose, the same week, all-in. Confirm current pricing directly with each provider.',
  },
  {
    question: 'Is semaglutide or tirzepatide cheaper without insurance?',
    answer:
      'It depends on the form. The cheapest single option is the oral semaglutide pill (~$149/mo via NovoCare). For injections, tirzepatide via LillyDirect Zepbound vials (from ~$299/mo) can start lower than a semaglutide pen (~$349/mo via NovoCare), though semaglutide and tirzepatide are different medications with different dosing and tolerability, so the choice is clinical, not just price. At full retail both are roughly $1,000–$1,350 a month. Discuss which fits you with a licensed prescriber and verify the current price before starting.',
  },
  {
    question: 'Is compounded GLP-1 still the cheapest option online in 2026?',
    answer:
      'No longer broadly. The FDA declared both shortages resolved — tirzepatide on December 19, 2024 and semaglutide on February 21, 2025 — and the enforcement grace periods for mass compounding have ended (tirzepatide: February 18, 2025 for 503A pharmacies and March 19, 2025 for 503B facilities; semaglutide: April 22, 2025 and May 22, 2025). Routine large-scale compounding of a copy of either approved drug is no longer permitted; compounded versions may still be dispensed in limited, clinically justified cases. Treat an unusually cheap compounded GLP-1 online as a reason to slow down. This is information, not legal or medical advice.',
  },
  {
    question: 'How much does a GLP-1 cost at a pharmacy without insurance?',
    answer:
      'A lot more than the manufacturer self-pay programs. Without any program, GoodRx reports Wegovy around $1,349/month, Ozempic around $1,219/month, and Mounjaro around $1,347/month for the most common version; Lilly’s list (WAC) for Mounjaro is about $1,112 per 28-day supply as of January 1, 2026. Discount-card coupons cut some products, but the manufacturer’s direct self-pay price (NovoCare for semaglutide, LillyDirect for tirzepatide) is usually cheaper than the cash counter. Verify the current number at your specific pharmacy.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 py-6">
      <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-gray-900 hover:text-blue-600">
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <p className="mt-4 text-gray-700">{answer}</p>
    </details>
  );
}

// Cross-brand provider price comparison spanning BOTH GLP-1 families.
// Sources: NovoCare Pharmacy + Novo Nordisk press release (semaglutide);
// pricinginfo.lilly.com + Lilly investor release + PharmExec (tirzepatide);
// GoodRx (retail). Prices are advertised estimates checked June 2026 — every
// dollar figure here traces to a cited source in the manifest.
const PROVIDERS = [
  {
    provider: 'NovoCare — oral Wegovy / Ozempic pill',
    drug: 'Semaglutide (oral)',
    form: 'Pill',
    price: 'From ~$149/mo',
    fdaApproved: 'FDA-approved',
    note: 'Lowest published cash price for any FDA-approved GLP-1. $149/mo for 1.5 mg and 4 mg oral doses; the 4 mg price rises to $199/mo after Aug 31, 2026. Requires a prescription.',
  },
  {
    provider: 'LillyDirect — Zepbound single-dose vials',
    drug: 'Tirzepatide',
    form: 'Vial injection',
    price: '~$299–$449/mo',
    fdaApproved: 'FDA-approved',
    note: '$299/mo for 2.5 mg, $399/mo for 5 mg, and $449/mo for 7.5–15 mg under the Zepbound Self Pay Journey Program (the $449 tier requires a refill within 45 days, or the price steps up). Lowest FDA-approved injectable GLP-1 for cash pay.',
  },
  {
    provider: 'NovoCare — Wegovy / Ozempic pens',
    drug: 'Semaglutide (injectable)',
    form: 'Pen injection',
    price: '~$349/mo',
    fdaApproved: 'FDA-approved',
    note: 'Standard self-pay price of ~$349/mo for most Wegovy and Ozempic pen doses; Wegovy HD 7.2 mg ~$399/mo and Ozempic 2 mg ~$499/mo. Periodic 2-fill intro offers have run lower. Requires a prescription.',
  },
  {
    provider: 'Telehealth subscription (brand or, where allowed, compounded)',
    drug: 'Semaglutide or tirzepatide',
    form: 'Varies',
    price: 'Visit/membership fee + drug',
    note: 'Telehealth platforms supply the prescription and delivery, then you pay either the manufacturer self-pay price or, in limited clinically justified cases, a compounded price. Many compounded GLP-1 programs are winding down after the shortages resolved. Compare the all-in monthly number, not the headline.',
  },
  {
    provider: 'Compounded GLP-1 (limited / clinically justified only)',
    drug: 'Semaglutide or tirzepatide',
    form: 'Vial injection',
    price: 'No longer broadly available',
    note: 'Once the cheapest route (~$99–$199/mo). Both shortages are resolved and routine mass compounding of a copy is no longer permitted; it may still be dispensed for documented clinical needs (e.g., an inactive-ingredient allergy).',
  },
  {
    provider: 'Retail pharmacy cash counter (no program)',
    drug: 'Any brand GLP-1',
    form: 'Pen / vial',
    price: '~$1,000–$1,350/mo',
    fdaApproved: 'FDA-approved',
    note: 'The most expensive route. GoodRx lists Wegovy ~$1,349, Ozempic ~$1,219, and Mounjaro ~$1,347/mo for the common version; Lilly’s Mounjaro list (WAC) is ~$1,112/28-day supply. Discount cards help on some products, but manufacturer self-pay usually wins.',
  },
];

export default function CheapestGlp1WithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cheapest GLP-1 Without Insurance (2026): Semaglutide & Tirzepatide Price Comparison',
    description:
      'A 2026 guide to the cheapest ways to get a GLP-1 without insurance across both semaglutide and tirzepatide — NovoCare and LillyDirect manufacturer self-pay, telehealth subscriptions, compounded options and their legal status, and a provider price comparison.',
    url: 'https://vitalityscout.com/guides/cheapest-glp1-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cheapest-glp1-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'GLP-1 receptor agonists (semaglutide and tirzepatide)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'NovoCare Pharmacy — Wegovy & Ozempic self-pay pricing', url: 'https://www.novocare.com/pharmacy.html' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Introductory $199/mo self-pay offer for Wegovy and Ozempic (press release)', url: 'https://www.prnewswire.com/news-releases/novo-nordisk-launches-introductory-self-pay-offer-for-wegovy-and-ozempic-for-199-per-month-302617100.html' },
      { '@type': 'CreativeWork', name: 'LillyDirect — Zepbound (tirzepatide) self-pay pricing', url: 'https://www.lilly.com/lillydirect/medicines/zepbound' },
      { '@type': 'CreativeWork', name: 'Eli Lilly — Lilly lowers the price of Zepbound single-dose vials for self-pay patients (investor release)', url: 'https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials' },
      { '@type': 'CreativeWork', name: 'Pharmaceutical Executive — Lilly reduces price of Zepbound single-dose vials for self-pay patients', url: 'https://www.pharmexec.com/view/lilly-reduces-price-of-zepbound-single-dose-vials-for-self-pay-patients' },
      { '@type': 'CreativeWork', name: 'GoodRx — How much is Mounjaro without insurance', url: 'https://www.goodrx.com/mounjaro/how-much-is-mounjaro-without-insurance' },
      { '@type': 'CreativeWork', name: 'GoodRx — Wegovy cost without insurance', url: 'https://www.goodrx.com/wegovy/wegovy-for-weight-loss-cost-coverage' },
      { '@type': 'CreativeWork', name: 'FDA — Clarifies policies for compounders as national GLP-1 supply begins to stabilize', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize' },
      { '@type': 'CreativeWork', name: 'Pharmacy Times — FDA affirms tirzepatide shortage resolved, sets transition period for compounding', url: 'https://www.pharmacytimes.com/view/fda-affirms-tirzepatide-shortage-resolved-sets-transition-period-for-compounding' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cheapest-glp1-without-insurance#faq', url: 'https://vitalityscout.com/guides/cheapest-glp1-without-insurance' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">Cheapest GLP-1 Without Insurance</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Weight-Loss Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              GLP-1 Cost Comparison
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cheapest GLP-1 Without Insurance (2026)
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The lowest-cost ways to get a GLP-1 without insurance in 2026 — across both
            semaglutide and tirzepatide, with a side-by-side provider price comparison.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              The cheapest GLP-1 without insurance in 2026 is the manufacturer&apos;s own self-pay
              program. The oral semaglutide pill is listed from <strong>~$149/month</strong> via
              NovoCare; for injections, LillyDirect lists tirzepatide (Zepbound) vials from{' '}
              <strong>~$299/month</strong> and NovoCare lists semaglutide pens at{' '}
              <strong>~$349/month</strong>. All undercut the <strong>~$1,000–$1,350</strong>{' '}
              retail cash price. Broad cheap compounding ended when both shortages resolved. These are
              advertised estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* Provider price comparison table — the centerpiece, spanning BOTH GLP-1 families */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">GLP-1 Cost Comparison Without Insurance (2026)</h2>
        <p className="text-gray-600 mb-6">
          Every cash-pay route to a GLP-1 in 2026, across both semaglutide and tirzepatide, ordered
          roughly cheapest to priciest. Prices are advertised rates checked in June 2026.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider / Route</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Drug</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Form</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cash Price (estimate)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What to Know</th>
              </tr>
            </thead>
            <tbody>
              {PROVIDERS.map((p, i) => (
                <tr key={p.provider} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{p.provider}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.drug}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.form}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{p.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing, dose eligibility, and program terms directly with the manufacturer or pharmacy
          before relying on a number. Compare cash-pay programs on the{' '}
          <Link href="/weight-loss" className="text-blue-600 hover:underline">
            weight-loss provider directory
          </Link>.
        </p>
      </section>

      {/* Two drug families framing — the distinctive angle vs the semaglutide-only guide */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Two GLP-1 Drug Families, Two Manufacturer Storefronts</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              &quot;GLP-1&quot; is a category, not one drug. For weight management in 2026 the two
              that matter are <strong>semaglutide</strong> (sold as Wegovy and Ozempic, made by Novo
              Nordisk) and <strong>tirzepatide</strong> (sold as Zepbound and Mounjaro, made by Eli
              Lilly). Tirzepatide is technically a dual GIP/GLP-1 agonist, but it is grouped with the
              GLP-1 class for shopping purposes. The cheapest-without-insurance answer is different for
              each family, which is why a semaglutide-only guide only tells half the story.
            </p>
            <p>
              The single most useful 2026 development: <strong>both makers now sell their drug
              directly to cash payers</strong>, undercutting the retail pharmacy.
            </p>
            <ul>
              <li>
                <strong>Novo Nordisk → NovoCare</strong> for semaglutide. The oral pill is the
                budget entry point (~$149/mo); the injectable pens run a standard ~$349/mo.
              </li>
              <li>
                <strong>Eli Lilly → LillyDirect</strong> for tirzepatide. Zepbound single-dose
                vials are the cash-pay product, listed from ~$299/mo for the 2.5 mg starting dose.
              </li>
            </ul>
            <p>
              If you have no insurance and no strong clinical preference yet, the practical move is to
              price the lowest dose of each family at its manufacturer storefront and compare the
              all-in number with a prescriber.
            </p>
          </div>
        </div>
      </section>

      {/* Semaglutide cheapest route */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cheapest Semaglutide: NovoCare Self-Pay</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            For semaglutide, the price floor is Novo Nordisk&apos;s own NovoCare program, which the
            company cut sharply under public and government pressure in late 2025.
          </p>
          <ul>
            <li>
              <strong>Oral pill from ~$149/month.</strong> The oral Wegovy and Ozempic pill
              formulations are listed from about $149/month for the 1.5 mg and 4 mg doses — the
              lowest published cash price for any FDA-approved GLP-1. Note the 4 mg price is scheduled
              to rise to $199/month after August 31, 2026.
            </li>
            <li>
              <strong>Injectable pens at a standard ~$349/month.</strong> Most Wegovy and Ozempic pen
              doses are ~$349/month self-pay; Wegovy HD 7.2 mg is ~$399/month and Ozempic 2 mg is
              ~$499/month. Periodic 2-fill introductory offers have run as low as ~$199/month for new
              starters.
            </li>
            <li>
              <strong>You still need a prescription.</strong> Self-pay does not skip the clinical
              step — a licensed prescriber must determine semaglutide is appropriate and write the
              script.
            </li>
          </ul>
          <p>
            For the full deep-dive on just this family, see our{' '}
            <Link href="/guides/cheapest-way-to-get-semaglutide" className="text-blue-600 hover:underline">
              cheapest way to get semaglutide guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Tirzepatide cheapest route */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cheapest Tirzepatide: LillyDirect Zepbound Vials</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              For tirzepatide, the cash-pay floor is Eli Lilly&apos;s LillyDirect, which sells
              Zepbound as lower-priced single-dose vials (a self-injection drawn from a vial) rather
              than the pricier autoinjector pens. The vial program is the reason an FDA-approved
              tirzepatide can now start below a semaglutide pen.
            </p>
            <ul>
              <li>
                <strong>2.5 mg starting dose: ~$299/month.</strong> The lowest FDA-approved injectable
                GLP-1 cash price.
              </li>
              <li>
                <strong>5 mg: ~$399/month.</strong>
              </li>
              <li>
                <strong>7.5 mg, 10 mg, 12.5 mg, 15 mg: ~$449/month</strong> under the Zepbound Self
                Pay Journey Program — but this tier requires refilling within 45 days of your
                previous delivery; miss that window and the price steps up to the higher regular
                self-pay rate for that fill.
              </li>
              <li>
                <strong>You still need a prescription</strong>, just as with semaglutide.
              </li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Watch the 45-day refill rule on higher doses.</strong> The ~$449/month price
                on 7.5 mg and up is contingent on staying on schedule. Budget for the possibility of a
                higher fill if life interrupts your refill timing, and confirm the current terms on
                LillyDirect.
              </p>
            </div>
            <p>
              Mounjaro (the same tirzepatide, branded for type 2 diabetes) is generally not the
              cheapest cash route for weight management — the Zepbound vial program is what brings
              the price down. For how the two tirzepatide brands compare to semaglutide, see our{' '}
              <Link href="/guides/mounjaro-vs-ozempic" className="text-blue-600 hover:underline">
                Mounjaro vs Ozempic comparison
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Telehealth subscriptions */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where Telehealth Subscriptions Fit</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Telehealth platforms are the convenience layer, not usually the price floor. They handle
            the prescription, sometimes coaching, and delivery — then you pay either the
            manufacturer self-pay price for the brand drug or, in the narrow cases where it is still
            allowed, a compounded price.
          </p>
          <ul>
            <li>
              <strong>Brand-drug telehealth:</strong> the platform gets you the prescription, then you
              pay the NovoCare or LillyDirect self-pay price above (some platforms integrate directly
              with those programs). Your added cost is the visit or membership fee.
            </li>
            <li>
              <strong>Membership math matters.</strong> A program that quotes a low drug price but adds
              a separate monthly membership can cost more all-in than a manufacturer storefront.
              Always add the fees together before comparing.
            </li>
            <li>
              <strong>Compounded telehealth is shrinking.</strong> Several platforms are winding down
              compounded GLP-1 offerings now that both shortages are resolved (see the next section).
            </li>
          </ul>
          <p>
            The rule of thumb: a telehealth subscription is worth a premium if you value the coaching,
            the single bill, and the hand-holding. If you only want the lowest number, the
            manufacturer storefront usually wins. Compare cash-pay telehealth options on our{' '}
            <Link href="/telehealth" className="text-blue-600 hover:underline">
              telehealth services hub
            </Link>.
          </p>
        </div>
      </section>

      {/* Compounding legal status — covers BOTH families */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compounded GLP-1s and Their Legal Status in 2026</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Through 2023–2024 the cheapest GLP-1 was usually a compounded copy, advertised for
              roughly $99–$199/month, because drug shortages gave compounding pharmacies a legal
              lane. That lane has closed for both drugs.
            </p>
            <ul>
              <li>
                <strong>Tirzepatide:</strong> FDA declared the shortage resolved on December 19, 2024.
                Enforcement discretion for compounding ended February 18, 2025 for 503A state-licensed
                pharmacies and March 19, 2025 for 503B outsourcing facilities.
              </li>
              <li>
                <strong>Semaglutide:</strong> FDA declared the shortage resolved on February 21, 2025.
                Enforcement discretion ended April 22, 2025 for 503A pharmacies and May 22, 2025 for
                503B facilities.
              </li>
              <li>
                Routine, mass compounding of a copy of either approved drug is no longer permitted.
                Compounded versions may still be dispensed in <strong>limited, clinically justified
                cases</strong> — for example, a documented allergy to an inactive ingredient that
                a prescriber notes on the prescription.
              </li>
            </ul>
            <p>
              Legal challenges from compounder groups have not reversed the deadlines so far. If a
              website is still selling broad, no-questions compounded semaglutide or tirzepatide as a
              cheap copy, treat that as a reason to slow down rather than a deal. For the full picture
              of the rules and what they mean, see our{' '}
              <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">
                compounded semaglutide guide
              </Link>{' '}and our roundup of{' '}
              <Link href="/guides/ozempic-alternatives" className="text-blue-600 hover:underline">
                Ozempic alternatives
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Retail comparison */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Manufacturer Self-Pay Compares to the Retail Cash Counter</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The reason the manufacturer programs matter is the gap to retail. Without any program,
              GoodRx lists Wegovy around <strong>$1,349/month</strong>, Ozempic around{' '}
              <strong>$1,219/month</strong>, and Mounjaro around <strong>$1,347/month</strong> for the
              most common version; Lilly&apos;s published list price (WAC) for Mounjaro is about{' '}
              <strong>$1,112 per 28-day supply</strong> as of January 1, 2026.
            </p>
            <p>
              Against those numbers, NovoCare&apos;s ~$149–$349/month and LillyDirect&apos;s
              ~$299–$449/month are dramatic savings. Discount-card coupons can help on specific
              products and doses, but for the brand drugs the manufacturer&apos;s direct program is
              usually cheaper than walking up to the cash counter. The widely advertised &quot;$25&quot;
              savings cards generally apply only to commercially insured patients — not to the
              uninsured.
            </p>
          </div>
        </div>
      </section>

      {/* Avoiding scams */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping on Price Without Getting Scammed</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Chasing the lowest GLP-1 price is exactly where people get hurt. Since late 2025 the FDA
            has issued many warning letters to sellers marketing GLP-1 medications improperly. Use
            these red flags as a checklist for either drug family:
          </p>
          <ul>
            <li>Claims of <strong>&quot;FDA-approved compounded&quot;</strong> semaglutide or tirzepatide — compounded drugs are not FDA-approved.</li>
            <li><strong>No licensed prescriber</strong> involved, or a &quot;questionnaire only&quot; checkout with no real clinical review.</li>
            <li>The seller <strong>won&apos;t name the dispensing pharmacy</strong> or its state license.</li>
            <li><strong>Overseas shipping</strong> of injectable medication, or vials sold as &quot;research chemicals / not for human use.&quot;</li>
            <li>Prices that are <strong>far below</strong> even the manufacturer self-pay floor with no clinical explanation.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Buy through a licensed US pharmacy or a telehealth service with
              real prescriber oversight. A slightly higher price from a legitimate source is cheaper
              than a bad outcome from an unsafe one.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Pick the Cheapest GLP-1 Route for You</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for the lowest price</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Oral semaglutide pill</strong> from ~$149/mo via NovoCare — the cheapest FDA-approved GLP-1 entry of any kind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>LillyDirect Zepbound 2.5 mg vial</strong> at ~$299/mo — the cheapest FDA-approved injection</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for support + convenience</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Telehealth program</strong> for the prescription, delivery, and coaching bundled together</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Compare the <strong>all-in</strong> number (visit/membership fee + drug), not the headline</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>A simple decision framework for an uninsured shopper:</p>
            <ol>
              <li>Decide with a prescriber which drug family fits you — semaglutide or tirzepatide.</li>
              <li>Price the lowest available dose at the matching manufacturer storefront (NovoCare or LillyDirect).</li>
              <li>If you want bundled support, price a telehealth program all-in and compare.</li>
              <li>Treat the bare retail cash price as the number to avoid, and check HSA/FSA eligibility to lower the effective cost.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare GLP-1 Weight-Loss Programs</h3>
          <p className="text-gray-600 mb-6">
            See cash-pay semaglutide and tirzepatide programs side by side — pricing, what is included, and how to get started.
          </p>
          <Link
            href="/weight-loss"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Weight-Loss Programs →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/cheapest-way-to-get-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Way to Get Semaglutide</div>
                <div className="text-sm text-gray-600">The semaglutide-only deep dive: NovoCare, the pill, and compounding</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/ozempic-alternatives" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">Ozempic Alternatives in 2026</div>
                <div className="text-sm text-gray-600">Branded, oral, compounded, and non-GLP-1 options with costs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/mounjaro-vs-ozempic" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Mounjaro vs Ozempic</div>
                <div className="text-sm text-gray-600">Tirzepatide vs semaglutide on mechanism, efficacy, and price</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-gray-900">Compounded Semaglutide</div>
                <div className="text-sm text-gray-600">FDA status, legality, and what changed after the shortage</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.novocare.com/pharmacy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NovoCare Pharmacy — Wegovy &amp; Ozempic self-pay pricing</a></li>
            <li>• <a href="https://www.prnewswire.com/news-releases/novo-nordisk-launches-introductory-self-pay-offer-for-wegovy-and-ozempic-for-199-per-month-302617100.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk — Introductory $199/mo self-pay offer for Wegovy &amp; Ozempic (press release)</a></li>
            <li>• <a href="https://www.lilly.com/lillydirect/medicines/zepbound" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LillyDirect — Zepbound (tirzepatide) self-pay pricing</a></li>
            <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — Lilly lowers the price of Zepbound single-dose vials for self-pay patients (investor release)</a></li>
            <li>• <a href="https://www.pharmexec.com/view/lilly-reduces-price-of-zepbound-single-dose-vials-for-self-pay-patients" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Pharmaceutical Executive — Lilly reduces price of Zepbound single-dose vials for self-pay patients</a></li>
            <li>• <a href="https://www.goodrx.com/mounjaro/how-much-is-mounjaro-without-insurance" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GoodRx — How much is Mounjaro without insurance</a></li>
            <li>• <a href="https://www.goodrx.com/wegovy/wegovy-for-weight-loss-cost-coverage" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GoodRx — Wegovy cost without insurance</a></li>
            <li>• <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA — Clarifies policies for compounders as national GLP-1 supply begins to stabilize</a></li>
            <li>• <a href="https://www.pharmacytimes.com/view/fda-affirms-tirzepatide-shortage-resolved-sets-transition-period-for-compounding" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Pharmacy Times — FDA affirms tirzepatide shortage resolved, sets transition period for compounding</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing GLP-1 Prices?"
          description="Get our cash-pay GLP-1 price comparison across semaglutide and tirzepatide, plus what to ask before you commit to a program."
          source="guide_cheapest_glp1_without_insurance"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
