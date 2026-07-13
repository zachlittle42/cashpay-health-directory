import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/does-us-insurance-cover-dental-work-in-mexico';

export const metadata: Metadata = {
  title: { absolute: 'Does US Dental Insurance Cover Work Done in Mexico? (2026)' },
  alternates: { canonical: URL },
  description:
    'Sometimes, partially. A PPO with out-of-network benefits often reimburses a share of Mexico dental care; a DHMO usually pays nothing outside its network.',
};

// Real long-tail questions, answered only from facts stated on this page.
// Each answer ends with the page's own hedge. The visible FAQ block mirrors
// this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'Does US dental insurance cover work done in Mexico?',
    answer:
      'Sometimes, partially. A PPO dental plan with out-of-network benefits will often reimburse a share of care received in Mexico — you pay the clinic in full, then file a claim for reimbursement. A DHMO or managed-care plan usually pays nothing outside its network. This guide is general information, not insurance advice; coverage depends entirely on your specific plan document, so confirm benefits with your insurer in writing before you travel.',
  },
  {
    question: 'Will my insurer reimburse what I paid the Mexican clinic?',
    answer:
      'No — your insurer does not reimburse a percentage of the Mexican price. It reimburses a percentage of its own allowed amount for that procedure, then applies your deductible and coinsurance and stops at your annual maximum. Reimbursement can never exceed what you actually paid, and it draws down your annual maximum. These numbers are plan-specific and illustrative; verify against your plan document and your insurer.',
  },
  {
    question: 'What do I need to file a Mexico dental insurance claim?',
    answer:
      'Pay the Mexican clinic in full at the time of service, collect an itemized bill (a "superbill") listing each procedure with a standard ADA CDT procedure code, the date, the tooth number where relevant, the provider, and the amount paid, then file your insurer’s out-of-network claim form with the itemized bill and proof of payment. Most insurers accept the standard ADA Dental Claim Form. Confirm the claim-filing deadline and required form with your insurer in writing before you travel.',
  },
];

export default function DoesUsInsuranceCoverDentalWorkInMexicoPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Does US Dental Insurance Cover Work Done in Mexico?',
    description:
      'How US dental insurance treats care received in Mexico: PPO out-of-network reimbursement vs DHMO, how a claim is calculated, exclusions, and what to confirm before you travel.',
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
      { '@type': 'ListItem', position: 2, name: 'Does US Dental Insurance Cover Work in Mexico?', item: URL },
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
            <span className="text-gray-700">Does US Dental Insurance Cover Work in Mexico?</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Insurance &amp; Financing Guide
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Does US Dental Insurance Cover Work Done in Mexico?
            </h1>
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> Sometimes, partially. A PPO dental plan with
              out-of-network benefits will often reimburse a share of care received in Mexico — you
              pay the clinic in full, then file a claim for reimbursement. A DHMO or managed-care plan
              usually pays nothing outside its network. Reimbursement is limited by your plan&apos;s
              out-of-network allowance, coinsurance (frequently 50% on major work), your deductible,
              and an annual maximum that is commonly $1,000&ndash;$2,000.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Disclaimer callout — wording exact from draft */}
          <div className="mb-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              This guide is general information, not insurance advice. Coverage depends entirely on
              your specific plan document. Confirm benefits with your insurer in writing before you
              travel.
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            The one question that decides everything: PPO or DHMO?
          </h2>
          <div className="mb-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Plan type</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Out-of-network / out-of-country coverage</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">What to expect for Mexico dental</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Dental PPO</strong></td>
                  <td className="px-3 py-2 text-gray-700">Yes — reduced benefit for out-of-network providers</td>
                  <td className="px-3 py-2 text-gray-700">You typically pay upfront and file for reimbursement at the out-of-network rate. Most likely to yield a partial refund.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>DHMO / DMO</strong></td>
                  <td className="px-3 py-2 text-gray-700">No — care must come from an assigned in-network dentist</td>
                  <td className="px-3 py-2 text-gray-700">Care abroad is generally not reimbursed at all.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Dental indemnity</strong></td>
                  <td className="px-3 py-2 text-gray-700">Yes — pays a set schedule regardless of provider</td>
                  <td className="px-3 py-2 text-gray-700">Pays its scheduled amount; often the most portable, least common.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Discount dental &quot;plan&quot;</strong></td>
                  <td className="px-3 py-2 text-gray-700">Not insurance</td>
                  <td className="px-3 py-2 text-gray-700">No reimbursement; only in-network US discounts.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-8 text-gray-700">
            If you don&apos;t know which you have, the plan document&apos;s &quot;out-of-network
            benefits&quot; section is the answer. No out-of-network benefit means no Mexico
            reimbursement.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">How a PPO out-of-network claim actually works</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>
              <strong>Pay the Mexican clinic in full</strong> at the time of service. US insurers
              rarely pay a foreign provider directly.
            </li>
            <li>
              <strong>Collect an itemized bill (a &quot;superbill&quot;)</strong> listing each
              procedure with a standard{' '}
              <a href="https://www.ada.org/publications/cdt" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ADA CDT procedure code</a>,
              the date, the tooth number where relevant, the provider, and the amount paid. Request it
              in English or get it translated.
            </li>
            <li>
              <strong>File your insurer&apos;s out-of-network claim form</strong> with the itemized
              bill and proof of payment. Most insurers accept the standard ADA Dental Claim Form.
            </li>
            <li>
              <strong>Reimbursement is calculated against the plan&apos;s allowance</strong>, not
              against what you actually paid.
            </li>
          </ol>
          <p className="mb-8 text-gray-700">
            That last step is where expectations break. Your insurer does not reimburse a percentage
            of the Mexican price. It reimburses a percentage of <em>its own allowed amount</em> for
            that procedure — often built on a &quot;usual, customary, and reasonable&quot; (UCR)
            schedule — then applies your deductible and coinsurance, and stops at your annual maximum.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">A worked example (illustrative, not a quote)</h2>
          <p className="mb-4 text-gray-700">
            Assume a plan with a $50 deductible, 50% coinsurance on major services, a $1,500 annual
            maximum, and an out-of-network allowance of $1,200 for a crown. You pay a Mexican clinic
            $450 for that crown.
          </p>
          <div className="mb-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Line</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">You paid the clinic</td>
                  <td className="px-3 py-2 text-gray-700">$450</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Plan&apos;s allowed amount for the crown</td>
                  <td className="px-3 py-2 text-gray-700">$1,200</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lesser of the two (basis for reimbursement)</td>
                  <td className="px-3 py-2 text-gray-700">$450</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Less deductible</td>
                  <td className="px-3 py-2 text-gray-700">&minus;$50</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Reimbursable base</td>
                  <td className="px-3 py-2 text-gray-700">$400</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Plan pays 50% coinsurance</td>
                  <td className="px-3 py-2 text-gray-700"><strong>$200</strong></td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Your net cost</td>
                  <td className="px-3 py-2 text-gray-700"><strong>$250</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-8 text-gray-700">
            Reimbursement can never exceed what you actually paid, and it draws down your annual
            maximum. The math flips on high-cost work: if a US crown would run $1,300 and the
            plan&apos;s allowance is $1,200, the same $200 reimbursement offsets a much larger bill —
            which is exactly why the Mexico price, not the reimbursement, drives the savings.{' '}
            <em>These numbers are illustrative; your plan&apos;s figures will differ.</em>
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Common exclusions that void the claim</h2>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>&quot;Services outside the United States&quot; exclusions.</strong> Some plans explicitly exclude non-emergency foreign care. Read this clause first.</li>
            <li><strong>Missing-tooth / pre-existing clauses</strong> that limit implants and bridges.</li>
            <li><strong>Frequency limits</strong> (e.g., one crown per tooth per 5&ndash;7 years).</li>
            <li><strong>Cosmetic exclusions</strong> — whitening and veneers for appearance are rarely covered anywhere.</li>
            <li><strong>Filing deadlines</strong>, often 90&ndash;365 days from service. Late claims are denied.</li>
          </ul>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">What to confirm before you fly</h2>
          <p className="mb-4 text-gray-700">Call your insurer and ask, in writing where possible:</p>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>Does my plan pay out-of-network and out-of-country benefits for dental care?</li>
            <li>What is the allowed amount and coinsurance for the specific CDT codes I expect (e.g., D2740 crown, D6010 implant, D6058 abutment crown)?</li>
            <li>What is my remaining annual maximum and deductible this year?</li>
            <li>What is the claim-filing deadline and which form do you require?</li>
            <li>Do you need pre-treatment estimates or X-rays for major work?</li>
          </ol>
          <p className="mb-8 text-gray-700">
            Get the answers in an email or note the representative and reference number. A verbal
            &quot;yes&quot; is not a benefit.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">The realistic expectation</h2>
          <p className="mb-8 text-gray-700">
            For routine dental tourism, treat insurance as a partial rebate, not a payer. The
            structural savings come from the price difference between US and Mexican clinics; any
            reimbursement is a bonus that lowers your net further. Plan your budget on the full clinic
            price, then file the claim afterward.
          </p>

          {/* FAQ (mirrors FAQPage schema) */}
          <h2 className="mb-4 mt-4 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question}>
                <h3 className="mb-1 font-bold text-gray-900">{f.question}</h3>
                <p className="text-sm text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Related guides */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related VitalityScout guides</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">Paying safely for care abroad</Link></li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds abroad</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Deducting foreign dental costs</Link></li>
              <li><Link href="/guides/mexico-dental-implant-prices" className="hover:underline">Verified US-vs-Mexico dental price index</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                American Dental Association, <em>Code on Dental Procedures and Nomenclature (CDT)</em> — standard procedure codes required on claims.{' '}
                <a href="https://www.ada.org/publications/cdt" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.ada.org/publications/cdt</a>
              </li>
              <li>
                IRS, <em>Publication 502 (2025)</em> — for the tax treatment of unreimbursed foreign dental costs (see companion guide).{' '}
                <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.irs.gov/publications/p502</a>
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              Coverage mechanics (out-of-network allowance, UCR, coinsurance, annual maximum) are
              standard PPO features; exact figures are plan-specific. Verify against your plan
              document and your insurer.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not insurance, dental, or financial advice. Coverage
              depends entirely on your specific plan document, and figures used in examples are
              illustrative. Confirm benefits, allowances, and claim deadlines with your insurer in
              writing before you travel.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
