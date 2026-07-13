import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/paying-for-medical-tourism';

export const metadata: Metadata = {
  title: { absolute: 'How to Pay for Medical Tourism: Methods, Currency, and Red Flags' },
  alternates: { canonical: URL },
  description:
    'Pay a foreign clinic with a small deposit (10–30%) and put the balance on a credit card for dispute protection. Currency conversion adds 1–3%. Red flags inside.',
};

// FAQ answers use only facts stated on this page, each ending with the page's
// own verify hedge. The visible FAQ block mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'What is the safest way to pay a clinic abroad?',
    answer:
      'Pay the smallest deposit the clinic will accept to hold your date, then put the large balance on a US credit card, which carries the strongest dispute protection through Fair Credit Billing Act chargeback rights. That way the bulk of your money keeps its dispute rights. Confirm details with your bank and the clinic in writing before sending money.',
  },
  {
    question: 'How much does currency conversion cost when paying abroad?',
    answer:
      'Expect a 1–3% conversion cost whether you pay by card (a foreign transaction fee) or exchange cash (the FX spread); some travel cards charge 0%, worth checking before the trip. Decline "pay in US dollars" offers at foreign card terminals — paying in the local currency and letting your own bank convert is almost always cheaper. Confirm details with your bank and the clinic in writing before sending money.',
  },
  {
    question: 'Is a deposit request a red flag?',
    answer:
      'No, a deposit of 10–30% of the quoted total to reserve a surgeon and an operating date is standard, not a red flag by itself, though deposits are often partially or fully non-refundable inside a cutoff window such as 14–30 days before surgery. A deposit demand of 50%+ by wire, with no written refund terms, is a reason to slow down. Confirm details with your bank and the clinic in writing before sending money.',
  },
];

export default function PayingForMedicalTourismPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Pay for Medical Tourism: Methods, Currency, and Red Flags',
    description:
      'How to pay a foreign clinic safely — payment methods ranked by dispute protection, deposit norms, currency conversion, financing traps, and red flags.',
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
      { '@type': 'ListItem', position: 2, name: 'How to Pay for Medical Tourism', item: URL },
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
            <span className="text-gray-700">How to Pay for Medical Tourism</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Financing Guide
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              How to Pay for Medical Tourism: Methods, Currency, and Red Flags
            </h1>
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> Most patients pay a foreign clinic by a mix of a
              refundable-ish deposit (often 10–30%) to hold a date and the balance on arrival, by
              credit card, bank wire, or cash. Credit cards carry the strongest dispute protection;
              wires and cash carry the least. Currency conversion adds 1–3%. Pay the deposit small,
              the balance protected, and treat any large-wire-only demand as a red flag.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Top disclaimer callout — wording preserved verbatim */}
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This guide is general information, not financial or legal advice. Payment terms, fees, and
            protections vary by provider and card issuer. Confirm details with your bank and the clinic
            in writing before sending money.
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Payment methods, ranked by protection</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Method</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Dispute protection</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Typical cost</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>US credit card</strong></td>
                  <td className="px-3 py-2 text-gray-800">
                    Strongest —{' '}
                    <a href="https://consumer.ftc.gov/articles/disputing-credit-card-charges" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">Fair Credit Billing Act</a>{' '}
                    chargeback rights
                  </td>
                  <td className="px-3 py-2 text-gray-800">~1–3% foreign transaction fee (varies; some cards 0%)</td>
                  <td className="px-3 py-2 text-gray-800">Best default for the balance. Some clinics add a 2–4% surcharge or cap card payments.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Bank wire (international)</strong></td>
                  <td className="px-3 py-2 text-gray-800">Weak — a completed wire is difficult to reverse</td>
                  <td className="px-3 py-2 text-gray-800">$15–$50 outgoing fee + FX spread</td>
                  <td className="px-3 py-2 text-gray-800">Common for deposits and large balances. Verify the recipient before sending; wires to the wrong party are rarely recovered.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Debit card</strong></td>
                  <td className="px-3 py-2 text-gray-800">Weaker than credit; limited chargeback</td>
                  <td className="px-3 py-2 text-gray-800">Similar FX fees</td>
                  <td className="px-3 py-2 text-gray-800">Avoid for large balances — no Fair Credit Billing Act protection.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Cash (local currency)</strong></td>
                  <td className="px-3 py-2 text-gray-800">None</td>
                  <td className="px-3 py-2 text-gray-800">ATM/FX fees</td>
                  <td className="px-3 py-2 text-gray-800">Only for small on-site balances. Never wire-and-carry large sums.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Third-party financing / medical loan</strong></td>
                  <td className="px-3 py-2 text-gray-800">Depends on lender</td>
                  <td className="px-3 py-2 text-gray-800">Interest; watch deferred-interest terms</td>
                  <td className="px-3 py-2 text-gray-800">See financing section below.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            The pattern that protects you: <strong>wire or pay the smallest deposit the clinic will
            accept, then put the large balance on a credit card</strong> so the bulk of your money
            keeps its dispute rights.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Deposit norms</h2>
          <p className="mb-4 text-gray-700">
            A deposit reserves a surgeon and an operating date; it is standard, not a red flag by
            itself. Typical practice:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>10–30% of the quoted total</strong> to hold a date.</li>
            <li>Deposits are often <strong>partially or fully non-refundable</strong> inside a cutoff window (e.g., 14–30 days before surgery).</li>
            <li>Get the deposit amount, the refund conditions, and the cancellation window <strong>in writing</strong> before paying.</li>
          </ul>
          <p className="mb-4 text-gray-700">
            A deposit demand of 50%+ by wire, with no written refund terms, is a reason to slow down.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Currency and conversion</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>Expect a 1–3% conversion cost</strong> whether you pay by card (foreign transaction fee) or exchange cash (FX spread). Some travel cards charge 0% — worth checking before the trip.</li>
            <li><strong>Decline "pay in US dollars"</strong> offers at foreign card terminals (dynamic currency conversion). Paying in the local currency and letting your own bank convert is almost always cheaper.</li>
            <li><strong>Lock the quote's currency.</strong> Clarify whether the price is quoted in USD or local currency; exchange-rate drift between quote and payment can move the total by a few percent.</li>
          </ul>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Financing — read the interest terms</h2>
          <p className="mb-4 text-gray-700">
            Medical credit cards and "0% for 12 months" clinic financing are common. The trap is{' '}
            <strong>deferred interest</strong>: if any balance remains after the promotional period,
            interest can be charged retroactively from the original purchase date. The Consumer
            Financial Protection Bureau has repeatedly flagged this structure on{' '}
            <a href="https://www.consumerfinance.gov/consumer-tools/medical-financing/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">medical financing products</a>.
          </p>
          <p className="mb-4 text-gray-700">Before financing:</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>Confirm whether the offer is true 0% APR or <strong>deferred-interest</strong> (retroactive).</li>
            <li>Confirm the full APR after the promo ends.</li>
            <li>Model paying the balance in full before the deadline. If you can't, the effective cost may erase the tourism savings.</li>
          </ul>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Red flags — slow down or walk away</h2>
          <p className="mb-4 text-gray-700">
            These are drawn from consumer-protection guidance on paying strangers and clinics remotely
            (<a href="https://consumer.ftc.gov/articles/how-avoid-scam" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">FTC</a>):
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>"Wire only, no cards."</strong> Removing your dispute protection is the single biggest warning sign.</li>
            <li><strong>Pressure to pay a large sum before any consultation or medical records review.</strong></li>
            <li><strong>No written itemized quote</strong> — a legitimate clinic itemizes surgeon, facility, anesthesia, implants/hardware, and follow-up.</li>
            <li><strong>No named, verifiable surgeon</strong> with a license you can check with the local medical board.</li>
            <li><strong>Prices far below the market range</strong> with a "today only" deadline.</li>
            <li><strong>A payee name that doesn't match the clinic</strong> (personal account, third country, crypto-only).</li>
            <li><strong>Refusal to put refund and complication policies in writing.</strong></li>
          </ul>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">A payment checklist</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>Get a written, itemized quote in a stated currency.</li>
            <li>Verify the surgeon's license with the local board.</li>
            <li>Pay the smallest deposit possible; get refund terms in writing.</li>
            <li>Put the balance on a credit card for Fair Credit Billing Act protection.</li>
            <li>Decline dynamic currency conversion; pay in local currency.</li>
            <li>If financing, confirm it is true 0% — not deferred interest.</li>
            <li>Keep every itemized receipt (needed for HSA/FSA and any tax deduction).</li>
          </ol>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">What to budget beyond the procedure</h2>
          <p className="mb-4 text-gray-700">
            The clinic price is not the landed cost. Add round-trip airfare, lodging (often multiple
            nights for surgical recovery), local transport, meals, a companion's costs, and a
            contingency for extended stay if recovery is slow. Build these in before comparing a
            foreign quote to a US price.
          </p>

          {/* FAQ (mirrors FAQPage schema) */}
          <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question}>
                <h3 className="mb-1 font-bold text-gray-900">{f.question}</h3>
                <p className="text-sm text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Related internal links */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related VitalityScout guides</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds abroad</Link></li>
              <li><Link href="/guides/does-us-insurance-cover-dental-work-in-mexico" className="hover:underline">Does US insurance cover dental in Mexico</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Deducting foreign care on your taxes</Link></li>
              <li><Link href="/guides/mexico-dental-implant-prices" className="hover:underline">Verified US-vs-abroad price index</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• FTC, <em>Disputing Credit Card Charges</em> — Fair Credit Billing Act chargeback rights. <a href="https://consumer.ftc.gov/articles/disputing-credit-card-charges" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://consumer.ftc.gov/articles/disputing-credit-card-charges</a></li>
              <li>• FTC, <em>How To Avoid a Scam</em> — remote-payment red flags, wire-transfer risk. <a href="https://consumer.ftc.gov/articles/how-avoid-scam" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://consumer.ftc.gov/articles/how-avoid-scam</a></li>
              <li>• CFPB, <em>Medical Financing</em> — deferred-interest and medical credit card cautions. <a href="https://www.consumerfinance.gov/consumer-tools/medical-financing/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.consumerfinance.gov/consumer-tools/medical-financing/</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Fees, deposit norms, and financing terms vary by provider and issuer. Verify all figures
              with your bank and clinic before paying.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This guide is general information, not financial or legal advice. Payment terms, fees,
              and protections vary by provider and card issuer. Confirm details with your bank and the
              clinic in writing before sending money, and confirm your situation with a qualified
              professional before acting.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
