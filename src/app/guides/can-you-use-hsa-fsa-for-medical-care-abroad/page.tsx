import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/can-you-use-hsa-fsa-for-medical-care-abroad';

export const metadata: Metadata = {
  title: { absolute: 'Can You Use an HSA or FSA for Medical Care Abroad?' },
  alternates: { canonical: URL },
  description:
    "Yes. An HSA or FSA can pay for qualified medical or dental care abroad if it's legal, medically necessary, and not cosmetic. Travel is rarely eligible.",
};

// FAQ answers use only facts stated on this page, each ending with the page's
// own verify hedge. The visible FAQ block mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'Can I use my HSA or FSA for surgery in another country?',
    answer:
      'Yes. HSAs and health FSAs reimburse "qualified medical expenses" — the same category of care that would be deductible under IRS Publication 502, which contains no geographic limit — as long as the care is legal where performed, medically necessary and not cosmetic, not also deducted or reimbursed elsewhere, and substantiated with an itemized, dated receipt. Confirm your situation with your plan administrator and a qualified tax professional before spending account funds.',
  },
  {
    question: 'Can I use HSA or FSA money for flights and hotels on a medical trip abroad?',
    answer:
      'Mostly no. Airfare to the treatment city and a taxi to the clinic can be eligible only if the trip is primarily for and essential to medical care, not a vacation with a procedure attached; lodging is capped at up to $50 per night, per person, and only when care is given by a doctor in a licensed hospital or equivalent facility; meals while traveling for care are not eligible. Confirm your situation with your plan administrator and a qualified tax professional before spending account funds.',
  },
  {
    question: 'Can I reimburse prescription drugs I bought abroad?',
    answer:
      'Only when the drug is legal in both that country and the United States and, except for insulin, only when it is prescribed. You generally cannot reimburse the cost of medicines you import (order shipped) from another country unless the Food and Drug Administration announces the specific drug can be legally imported by individuals. When in doubt, treat imported medication as ineligible and ask your administrator. Confirm your situation with your plan administrator and a qualified tax professional before spending account funds.',
  },
];

export default function HsaFsaMedicalCareAbroadPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can You Use an HSA or FSA for Medical Care Abroad?',
    description:
      'How HSA and FSA funds apply to qualified medical and dental care received outside the United States — the four tests, prescription-drug rules, and travel and lodging limits.',
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
      { '@type': 'ListItem', position: 2, name: 'HSA / FSA for Medical Care Abroad', item: URL },
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
            <span className="text-gray-700">HSA / FSA for Medical Care Abroad</span>
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
              Can You Use an HSA or FSA for Medical Care Abroad?
            </h1>
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> Yes. An HSA or health FSA can pay for qualified medical
              or dental care received outside the United States, because these accounts are governed by
              the same rule that defines a deductible medical expense at home: IRS definition of
              medical care under Publication 502. The care must be legal, medically necessary, and not
              cosmetic. Travel and lodging are only reimbursable in narrow cases, covered below.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Top disclaimer callout — wording preserved verbatim */}
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This guide is general information, not tax or benefits advice. Plan terms and IRS rules
            change and apply differently to each person. Confirm your situation with your plan
            administrator and a qualified tax professional before spending account funds.
          </div>

          <h2 className="mb-2 text-2xl font-bold text-gray-900">Why foreign care qualifies</h2>
          <p className="mb-4 text-gray-700">
            HSAs and health FSAs reimburse "qualified medical expenses" — the same category of care
            that would be deductible under{' '}
            <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502</a>.
            Publication 502 contains no geographic limit. It defines medical care by what the care{' '}
            <em>is</em> (diagnosis, cure, mitigation, treatment, or prevention of disease), not by
            where it happens. There is no exception in the publication that excludes qualified care
            performed in a foreign country, provided the care satisfies the same tests it would have to
            satisfy inside the United States.
          </p>
          <p className="mb-4 text-gray-700">
            That means a dental crown placed in Cancún, a knee procedure in Costa Rica, or a covered
            surgery in Tijuana can be paid from account funds on the same terms as the identical
            procedure in Ohio — if it meets the qualification tests below.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">The four tests your foreign expense must pass</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Test</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">What it means</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Legal</strong></td>
                  <td className="px-3 py-2 text-gray-800">The procedure must be legal in the country where it is performed and recognized as legitimate medical care.</td>
                  <td className="px-3 py-2 text-gray-800">IRS Pub 502, "What Are Medical Expenses"</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Medically necessary, not cosmetic</strong></td>
                  <td className="px-3 py-2 text-gray-800">Care that treats or prevents disease qualifies. Purely cosmetic procedures (e.g., elective veneers for appearance, cosmetic surgery) generally do not.</td>
                  <td className="px-3 py-2 text-gray-800">IRS Pub 502, "Cosmetic Surgery"</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Not double-dipped</strong></td>
                  <td className="px-3 py-2 text-gray-800">You cannot reimburse an expense from an HSA or FSA and also deduct it on Schedule A, or be reimbursed for it by insurance.</td>
                  <td className="px-3 py-2 text-gray-800">IRS Pub 502; IRS Pub 969</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Substantiated</strong></td>
                  <td className="px-3 py-2 text-gray-800">Keep an itemized, dated receipt describing the service, ideally translated, plus proof of payment. Administrators can request documentation.</td>
                  <td className="px-3 py-2 text-gray-800">IRS Pub 969 (HSAs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Prescription drugs bought abroad — the strict rule</h2>
          <p className="mb-4 text-gray-700">
            This is where foreign care most often disqualifies. Under Publication 502, a medicine you
            buy and consume in another country is a qualified expense only when the drug is legal in{' '}
            <strong>both</strong> that country <strong>and</strong> the United States, and, except for
            insulin, only when it is prescribed. You generally <strong>cannot</strong> reimburse the
            cost of medicines or drugs you import (order shipped) from another country unless the Food
            and Drug Administration announces the specific drug can be legally imported by individuals.
          </p>
          <p className="mb-4 text-gray-700">
            Practical read: paying a foreign clinic for a prescribed medication administered on site is
            treated like other care. Ordering drugs shipped to your US address to save money is a
            different transaction and is usually <strong>not</strong> account-eligible. When in doubt,
            treat imported medication as ineligible and ask your administrator.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Travel and lodging — usually not, sometimes partly</h2>
          <p className="mb-4 text-gray-700">
            Most travel costs for a medical trip abroad are <strong>not</strong> HSA/FSA-eligible. The
            flight to the procedure and the taxi to the clinic can be eligible as transportation
            "primarily for and essential to" medical care, but the rules are narrow and administrators
            vary in what they accept.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Cost</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Eligible?</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Rule / limit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Airfare to the treatment city</td>
                  <td className="px-3 py-2 text-gray-800">Sometimes</td>
                  <td className="px-3 py-2 text-gray-800">Only if the trip is primarily for and essential to medical care, not a vacation with a procedure attached.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Taxi / rideshare to the clinic</td>
                  <td className="px-3 py-2 text-gray-800">Sometimes</td>
                  <td className="px-3 py-2 text-gray-800">Same "primarily for and essential to" test.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lodging</td>
                  <td className="px-3 py-2 text-gray-800">Capped when eligible</td>
                  <td className="px-3 py-2 text-gray-800">Up to <strong>$50 per night, per person</strong>, and only when care is given by a doctor in a licensed hospital or equivalent facility, the lodging isn't lavish, and there's no significant vacation element.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Meals</td>
                  <td className="px-3 py-2 text-gray-800">No</td>
                  <td className="px-3 py-2 text-gray-800">Meals while traveling for care are not eligible.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">A companion's lodging</td>
                  <td className="px-3 py-2 text-gray-800">Sometimes</td>
                  <td className="px-3 py-2 text-gray-800">A necessary companion can add up to <strong>$50/night</strong>, i.e., up to $100/night combined.</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">A "trip for general health"</td>
                  <td className="px-3 py-2 text-gray-800">No</td>
                  <td className="px-3 py-2 text-gray-800">A trip taken for a change of environment or general improvement of health is excluded even on a doctor's advice.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            Source for all rows:{' '}
            <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502</a>,
            Transportation and Lodging sections.
          </p>
          <p className="mb-4 mt-4 text-gray-700">
            The $50/night lodging cap is real and low. It rarely covers a full hotel stay, and it is
            conditioned on hospital-grade care. For a lower-acuity dental or clinic procedure that
            doesn't involve a licensed hospital, lodging often will not qualify at all. Budget as if
            lodging and meals are out-of-pocket.
          </p>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">HSA vs FSA: the differences that matter abroad</h2>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li><strong>Documentation timing.</strong> FSAs are typically use-it-or-lose-it within a plan year; an overseas procedure has to fall inside the eligible period. HSA funds roll over indefinitely, so timing is more flexible.</li>
            <li><strong>Audit exposure.</strong> HSA reimbursements are self-reported. You keep the receipts; the IRS can ask for them years later. Weak foreign documentation is the most common failure point — get an itemized, dated, translated invoice.</li>
            <li><strong>Currency.</strong> Convert the foreign charge to US dollars using a defensible exchange rate on the date of service (a card statement showing the posted USD amount is the cleanest record).</li>
          </ul>

          <h2 className="mb-2 mt-12 text-2xl font-bold text-gray-900">Before you spend account funds abroad</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li>Confirm the specific procedure is medically necessary and non-cosmetic.</li>
            <li>Ask your HSA/FSA administrator, in writing, whether they reimburse foreign care and what documentation they require.</li>
            <li>Get an itemized invoice with the service, date, provider, and amount — and a translation if it isn't in English.</li>
            <li>Keep proof of payment showing the USD amount charged.</li>
            <li>Do not also claim the expense on Schedule A or through insurance.</li>
          </ol>

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
              <li><Link href="/guides/hsa-letter-of-medical-necessity-rules" className="hover:underline">Letter of medical necessity: what it is and when you need one</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Deducting foreign care on your taxes</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">Paying safely for care abroad</Link></li>
              <li><Link href="/guides/mexico-dental-implant-prices" className="hover:underline">Verified US-vs-abroad price index</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• IRS, <em>Publication 502 (2025), Medical and Dental Expenses</em> — definition of medical care, cosmetic surgery, medicines from other countries, transportation, lodging ($50/night). <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.irs.gov/publications/p502</a></li>
              <li>• IRS, <em>Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans</em> — qualified medical expenses and substantiation. <a href="https://www.irs.gov/publications/p969" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">https://www.irs.gov/publications/p969</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Figures dated 2025 tax year. Verify current rules at the linked IRS publications before
              acting.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This guide is general information, not tax or benefits advice. Plan terms and IRS rules
              change and apply differently to each person. Confirm your situation with your plan
              administrator and a qualified tax professional before spending account funds.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
