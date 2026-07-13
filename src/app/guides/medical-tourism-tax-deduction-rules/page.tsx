import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/medical-tourism-tax-deduction-rules';

export const metadata: Metadata = {
  title: { absolute: 'Is Medical Tourism Tax Deductible? Schedule A Rules for Care Abroad (2026)' },
  alternates: { canonical: URL },
  description:
    'Sometimes. Unreimbursed care abroad can count toward the Schedule A medical deduction — only the portion above 7.5% of AGI, and only if you itemize.',
};

// Real long-tail questions, answered only from facts stated on this page.
// Each answer ends with the page's own hedge. The visible FAQ block mirrors
// this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'Is medical tourism tax deductible?',
    answer:
      'Sometimes. Unreimbursed medical care received abroad can count toward the itemized medical-expense deduction on Schedule A, on the same terms as US care — you deduct only the portion of total medical costs above 7.5% of your adjusted gross income, and only if you itemize. This guide is general information, not tax advice; the medical-expense deduction is fact-specific and changes with tax law, so confirm your situation with a qualified tax professional before filing.',
  },
  {
    question: 'Can I deduct travel and lodging for surgery abroad?',
    answer:
      'Transportation to another city if the trip is primarily for and essential to receiving medical services is deductible; driving your own car is deductible at the standard medical mileage rate of 21 cents/mile (2025), plus parking and tolls; and lodging is deductible up to $50/night per person under specific conditions. Meals while traveling for care are not deductible. Verify the current-year mileage rate before filing — the IRS resets it annually.',
  },
  {
    question: 'Can I deduct care I paid for with my HSA or FSA?',
    answer:
      'No. Anything reimbursed by insurance or paid from an HSA/FSA cannot be deducted — no double-dipping, because pre-tax dollars are already tax-advantaged. Keep a note of any insurance/HSA/FSA reimbursement to subtract from what you claim. The medical-expense deduction is fact-specific; confirm your situation with a qualified tax professional before filing.',
  },
];

export default function MedicalTourismTaxDeductionRulesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is Medical Tourism Tax Deductible? Schedule A Rules for Care Abroad',
    description:
      'How unreimbursed medical care abroad is treated under the Schedule A medical-expense deduction: the 7.5% AGI floor, qualifying foreign care, travel and lodging limits, and recordkeeping.',
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
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism Tax Deduction Rules', item: URL },
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
            <span className="text-gray-700">Medical Tourism Tax Deduction Rules</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Tax &amp; Financing Guide
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Is Medical Tourism Tax Deductible? Schedule A Rules for Care Abroad
            </h1>
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> Sometimes. Unreimbursed medical care received abroad can
              count toward the itemized medical-expense deduction on Schedule A, on the same terms as
              US care — you deduct only the portion of total medical costs above 7.5% of your adjusted
              gross income, and only if you itemize. The procedure, plus limited travel and lodging,
              can qualify. Vacation costs, meals, and expenses you paid pre-tax from an HSA/FSA do not.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Disclaimer callout — wording exact from draft */}
          <div className="mb-8 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              This guide is general information, not tax advice. The medical-expense deduction is
              fact-specific and changes with tax law. Confirm your situation with a qualified tax
              professional before filing.
            </p>
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">The two gates before anything is deductible</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>
              <strong>You must itemize.</strong> The medical deduction lives on{' '}
              <a href="https://www.irs.gov/forms-pubs/about-schedule-a-form-1040" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">Schedule A (Form 1040)</a>.
              If you take the standard deduction, medical expenses give you nothing.
            </li>
            <li>
              <strong>Only the amount above 7.5% of AGI counts.</strong> Per{' '}
              <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502</a>:
              &quot;Generally, you can deduct on Schedule A (Form 1040) only the amount of your medical
              and dental expenses that is more than 7.5% of your AGI.&quot;
            </li>
          </ol>
          <p className="mb-8 text-gray-700">
            Example: with $80,000 AGI, the first $6,000 of medical spending (7.5%) is not deductible.
            Only dollars above $6,000 count — and only if your <em>total</em> itemized deductions beat
            the standard deduction.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">What foreign care qualifies</h2>
          <p className="mb-8 text-gray-700">
            Publication 502 defines deductible medical care by what it is, not where it happens. Care
            abroad qualifies if it would qualify at home: legal, medically necessary, not cosmetic. A
            covered surgery, dental work, or a physician-diagnosed weight-loss treatment performed
            overseas is deductible on the same basis as the US equivalent.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            The travel and lodging rules (this is where people over-claim)
          </h2>
          <div className="mb-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Cost</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Deductible?</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Rule / limit (IRS Pub 502)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">The medical procedure itself</td>
                  <td className="px-3 py-2 text-gray-700">Yes</td>
                  <td className="px-3 py-2 text-gray-700">If legal, necessary, non-cosmetic</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Airfare / plane, bus, taxi, train fares to care</td>
                  <td className="px-3 py-2 text-gray-700">Yes</td>
                  <td className="px-3 py-2 text-gray-700">&quot;Amounts you pay for transportation to another city if the trip is primarily for and essential to receiving medical services&quot;</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Driving your own car</td>
                  <td className="px-3 py-2 text-gray-700">Yes, limited</td>
                  <td className="px-3 py-2 text-gray-700">Standard medical mileage rate of <strong>21 cents/mile (2025)</strong>, plus parking and tolls</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lodging</td>
                  <td className="px-3 py-2 text-gray-700">Yes, capped</td>
                  <td className="px-3 py-2 text-gray-700"><strong>Up to $50/night per person</strong>, only if care is by a doctor in a licensed hospital or equivalent, lodging isn&apos;t lavish, and there&apos;s no significant vacation element</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">A companion&apos;s lodging</td>
                  <td className="px-3 py-2 text-gray-700">Yes, capped</td>
                  <td className="px-3 py-2 text-gray-700">Up to another <strong>$50/night</strong> when the companion is necessary</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Meals</strong> while traveling for care</td>
                  <td className="px-3 py-2 text-gray-700"><strong>No</strong></td>
                  <td className="px-3 py-2 text-gray-700">Not deductible as a medical travel cost</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">A <strong>trip for general health</strong> / change of environment</td>
                  <td className="px-3 py-2 text-gray-700"><strong>No</strong></td>
                  <td className="px-3 py-2 text-gray-700">Excluded even on a doctor&apos;s advice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-8 text-gray-700">
            Source:{' '}
            <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502 (2025)</a>,
            Transportation and Lodging sections. Verify the current-year mileage rate before filing —
            the IRS resets it annually.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">What you cannot deduct</h2>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>Anything reimbursed</strong> by insurance or paid from an <strong>HSA/FSA</strong> — no double-dipping. Pre-tax dollars are already tax-advantaged.</li>
            <li><strong>Cosmetic procedures</strong> for appearance.</li>
            <li><strong>Meals, sightseeing, and the vacation portion</strong> of a medical trip.</li>
            <li><strong>Prescription drugs imported</strong> from abroad, unless legal in both countries and (except insulin) prescribed — the same rule that governs the deduction.</li>
          </ul>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Currency conversion</h2>
          <p className="mb-8 text-gray-700">
            Convert each foreign expense to US dollars at the exchange rate on the date you paid. A
            credit-card statement showing the posted USD amount is the cleanest record. Keep itemized,
            dated invoices (translated if needed) for every line you deduct.
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">A simple worked example (illustrative)</h2>
          <p className="mb-4 text-gray-700">Assume $90,000 AGI (7.5% floor = $6,750). Over the year:</p>
          <div className="mb-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Item</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Dental implants in Mexico (unreimbursed)</td>
                  <td className="px-3 py-2 text-gray-700">$6,000</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Airfare to the clinic city</td>
                  <td className="px-3 py-2 text-gray-700">$500</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lodging, 3 nights at $50 cap</td>
                  <td className="px-3 py-2 text-gray-700">$150</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">US medical/dental (unreimbursed)</td>
                  <td className="px-3 py-2 text-gray-700">$2,500</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Meals during the trip</td>
                  <td className="px-3 py-2 text-gray-700">not deductible</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Total qualifying medical</strong></td>
                  <td className="px-3 py-2 text-gray-700"><strong>$9,150</strong></td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Less 7.5% AGI floor</td>
                  <td className="px-3 py-2 text-gray-700">&minus;$6,750</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Potential Schedule A medical deduction</strong></td>
                  <td className="px-3 py-2 text-gray-700"><strong>$2,400</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-8 text-gray-700">
            This deduction only helps if total itemized deductions exceed your standard deduction.{' '}
            <em>Figures illustrative; your numbers and the current standard-deduction amount will differ.</em>
          </p>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Recordkeeping checklist</h2>
          <ol className="mb-8 list-decimal space-y-2 pl-6 text-gray-700">
            <li>Itemized, dated invoice for each procedure (translated if not in English).</li>
            <li>Proof of payment showing the USD amount.</li>
            <li>Travel receipts (airfare, transport) and lodging receipts, capped at $50/night.</li>
            <li>
              Documentation of medical necessity for borderline care (a{' '}
              <Link href="/guides/hsa-letter-of-medical-necessity-rules" className="text-blue-600 hover:underline">letter of medical necessity</Link>{' '}
              helps).
            </li>
            <li>A note of any insurance/HSA/FSA reimbursement to subtract.</li>
          </ol>

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
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds abroad</Link></li>
              <li><Link href="/guides/hsa-letter-of-medical-necessity-rules" className="hover:underline">Letter of medical necessity rules</Link></li>
              <li><Link href="/guides/does-insurance-cover-bariatric-surgery-abroad" className="hover:underline">Does insurance cover bariatric surgery abroad</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                IRS, <em>Publication 502 (2025), Medical and Dental Expenses</em> — 7.5% AGI threshold, foreign care, transportation (21&cent;/mile 2025), lodging ($50/night), trips, imported medicines.{' '}
                <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.irs.gov/publications/p502</a>
              </li>
              <li>
                IRS, <em>About Schedule A (Form 1040)</em> — where itemized medical expenses are reported.{' '}
                <a href="https://www.irs.gov/forms-pubs/about-schedule-a-form-1040" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.irs.gov/forms-pubs/about-schedule-a-form-1040</a>
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              The 21&cent;/mile medical mileage rate is the 2025 figure and the IRS resets it
              annually. The 7.5% AGI threshold and $50/night lodging cap are current as of the 2025
              publication. Confirm all figures with a tax professional before filing.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not tax, legal, or financial advice. The
              medical-expense deduction is fact-specific and changes with tax law, and figures used in
              examples are illustrative. Confirm your situation and all current-year figures with a
              qualified tax professional before filing.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
