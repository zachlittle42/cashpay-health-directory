import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/does-insurance-cover-bariatric-surgery-abroad';

export const metadata: Metadata = {
  title: { absolute: 'Does US Insurance Cover Bariatric Surgery Abroad?' },
  alternates: { canonical: URL },
  description:
    'US insurance almost never covers bariatric surgery abroad; plans require an in-network accredited US facility, so elective foreign surgery is self-pay.',
};

const FAQ_ITEMS = [
  {
    question: 'Does US insurance cover bariatric surgery performed abroad?',
    answer:
      'Almost never. US plans that cover bariatric surgery generally require an in-network, accredited US facility and a documented pre-surgical program, so elective surgery at a foreign clinic is typically paid entirely out of pocket. The clinical eligibility may be met, but the process — prior authorization, network, accreditation — is not. Confirm benefits with your insurer in writing before making any decision.',
  },
  {
    question: 'Will my plan pay for complications after weight-loss surgery abroad?',
    answer:
      'Complications treated after you return home are generally covered like any other medical care, though some plans scrutinize complications from non-covered elective foreign procedures. Emergency care while abroad is often covered, but a planned operation is not an emergency, and typically nothing is paid toward the elective surgery itself. Confirm benefits with your insurer in writing before making any decision.',
  },
  {
    question: 'Can I use an HSA, FSA, or tax deduction for bariatric surgery abroad?',
    answer:
      'Yes, often. Weight-loss treatment for physician-diagnosed obesity is a qualified medical expense, and a letter of medical necessity strengthens the file; unreimbursed bariatric surgery abroad can also count toward itemized medical expenses above 7.5% of AGI. For many patients these levers, not insurance, are what lower the net cost. Confirm benefits with your insurer in writing before making any decision.',
  },
];

export default function DoesInsuranceCoverBariatricSurgeryAbroadPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Does US Insurance Cover Bariatric Surgery Abroad?',
    description:
      'Why US health plans almost never cover elective bariatric surgery abroad, what they might still pay, and the HSA/FSA and tax levers that lower a cash procedure.',
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
      { '@type': 'ListItem', position: 2, name: 'Does US Insurance Cover Bariatric Surgery Abroad?', item: URL },
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
            <span className="text-gray-700">Does US Insurance Cover Bariatric Surgery Abroad?</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Insurance Guide
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Does US Insurance Cover Bariatric Surgery Abroad?
            </h1>
            {/* Direct-answer lead */}
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> Almost never. US health plans that cover bariatric surgery
              generally require it at an in-network US facility that meets accreditation standards, after a
              documented pre-surgical program. Elective surgery at a foreign clinic falls outside those
              requirements, so it is typically paid entirely out of pocket. Emergency care abroad may be
              covered; a planned weight-loss operation is not. This is the main reason patients travel for
              it — to convert a covered-but-gated procedure into a cheaper cash one.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Top disclaimer callout — wording exact from draft */}
          <div className="mb-8 rounded-lg border-l-4 border-amber-400 bg-amber-50 p-5">
            <p className="text-sm text-amber-900">
              This guide is general information, not insurance or medical advice. Coverage depends on your
              specific plan. Confirm benefits with your insurer in writing before making any decision.
            </p>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-900">Why domestic bariatric coverage rarely travels</h2>
          <p className="mb-4 text-gray-700">
            When a US plan covers bariatric surgery, it almost always attaches conditions that a foreign
            clinic cannot satisfy:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Typical plan requirement</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Why foreign surgery usually fails it</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>In-network, accredited facility</strong> (often a designated bariatric Center of Excellence)</td>
                  <td className="px-3 py-2 text-gray-800">Foreign clinics are out-of-network and not in the plan&apos;s accreditation program</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Documented supervised weight-loss program</strong> (commonly 3–6 months) before approval</td>
                  <td className="px-3 py-2 text-gray-800">Fast-scheduled tourism surgery skips the plan&apos;s pre-authorization pathway</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Prior authorization</strong> with BMI and comorbidity documentation</td>
                  <td className="px-3 py-2 text-gray-800">Care is completed abroad before the plan can authorize it</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>BMI thresholds</strong> — commonly BMI ≥ 40, or ≥ 35 with an obesity-related condition</td>
                  <td className="px-3 py-2 text-gray-800">The clinical bar may be met, but the process bar is not</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800"><strong>Post-op follow-up in network</strong></td>
                  <td className="px-3 py-2 text-gray-800">Follow-up happens abroad or is uncoordinated</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            The clinical eligibility (BMI, comorbidities) often <em>is</em> met by tourism patients. What
            breaks coverage is the <strong>process</strong>: prior authorization, network, and
            accreditation. Miss those and even a medically appropriate surgery is denied.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">What a US plan might still pay</h2>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              <strong>Complications treated after you return.</strong> If you develop a post-surgical
              complication back home, treatment of the complication is generally covered like any other
              medical care — though some plans scrutinize complications from non-covered elective foreign
              procedures. Do not assume; read the exclusions.
            </li>
            <li>
              <strong>Emergency care while abroad.</strong> Many plans cover emergencies anywhere; a
              planned operation is not an emergency.
            </li>
            <li>
              <strong>Nothing toward the elective surgery itself</strong>, in the typical case.
            </li>
          </ul>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The tax and account angle (often the real &quot;coverage&quot;)</h2>
          <p className="mb-4 text-gray-700">
            Even without insurance reimbursement, the surgery may be payable with pre-tax dollars or
            deductible — because obesity surgery treats a diagnosed disease.
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              <strong>HSA/FSA:</strong> Weight-loss treatment for physician-diagnosed obesity is a
              qualified medical expense (
              <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS Publication 502</a>
              ). A <Link href="/guides/hsa-letter-of-medical-necessity-rules" className="text-blue-600 hover:underline">letter of medical necessity</Link> strengthens the file.
            </li>
            <li>
              <strong>Schedule A deduction:</strong> Unreimbursed bariatric surgery — including abroad —
              can count toward itemized medical expenses above 7.5% of AGI. See{' '}
              <Link href="/guides/medical-tourism-tax-deduction-rules" className="text-blue-600 hover:underline">medical-tourism tax rules</Link>.
            </li>
          </ul>
          <p className="mb-6 text-gray-700">
            For many patients these two levers, not insurance, are what actually lowers the net cost of a
            cash procedure abroad.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">Self-pay abroad: what the cash path actually costs</h2>
          <p className="mb-4 text-gray-700">
            Because insurance rarely reimburses the elective surgery, most tourism patients pay cash. Build
            the full landed cost before comparing it to a US quote:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Cost component</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Surgeon + facility fee</td>
                  <td className="px-3 py-2 text-gray-800">The advertised &quot;package&quot; price; confirm what it includes</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Anesthesia and hospital nights</td>
                  <td className="px-3 py-2 text-gray-800">Sometimes bundled, sometimes not — ask explicitly</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Pre-op labs and imaging</td>
                  <td className="px-3 py-2 text-gray-800">May be required before the clinic will operate</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Round-trip airfare</td>
                  <td className="px-3 py-2 text-gray-800">Per traveler; add a companion if recovery needs one</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lodging during recovery</td>
                  <td className="px-3 py-2 text-gray-800">Surgical recovery often means several nights before flying</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Follow-up and complications</td>
                  <td className="px-3 py-2 text-gray-800">Budget a contingency — care abroad complicates follow-up</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-3 py-2 text-gray-800">Lifelong post-op costs</td>
                  <td className="px-3 py-2 text-gray-800">Vitamins, periodic labs, nutrition support</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            The advertised procedure price is the smallest part of the honest total. A &quot;package&quot;
            quote that omits anesthesia, hospital nights, or follow-up is not a complete price. Ask for a
            written, itemized quote and confirm exactly what is and isn&apos;t included before wiring a
            deposit — see{' '}
            <Link href="/guides/paying-for-medical-tourism" className="text-blue-600 hover:underline">how to pay for medical tourism</Link>.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">Before you assume you&apos;re covered — or not</h2>
          <p className="mb-4 text-gray-700">Call your insurer and confirm, in writing:</p>
          <ol className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">
            <li>Does my plan cover bariatric surgery at all? (Some employer plans exclude it entirely.)</li>
            <li>If covered, is coverage limited to in-network, accredited US facilities?</li>
            <li>What is the required pre-surgical program and prior-authorization process?</li>
            <li>Are complications from an elective foreign procedure covered on my return?</li>
            <li>What are the BMI and comorbidity thresholds for approval?</li>
          </ol>
          <p className="mb-6 text-gray-700">
            If your plan <strong>does</strong> cover bariatric surgery domestically, price the covered US
            pathway before choosing to travel. A gated but insured US surgery can be cheaper out-of-pocket
            than a cash surgery abroad, once you account for your deductible and out-of-pocket maximum. The
            travel case is strongest for patients whose plans <strong>exclude</strong> bariatric surgery
            outright or who don&apos;t meet the process requirements.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The decision this really sets up</h2>
          <p className="mb-4 text-gray-700">
            For weight management specifically, &quot;insurance won&apos;t cover surgery abroad&quot; pushes
            many patients toward a cash comparison — and the honest comparison is not only <em>surgery in
            country A vs country B</em>. It is <strong>surgery vs a medication program</strong>, which have
            very different costs, risks, and outcomes. We lay out that verified math in a dedicated guide.
          </p>
          <p className="mb-6 text-gray-700">
            →{' '}
            <Link href="/guides/gastric-sleeve-mexico-vs-glp1-program" className="text-blue-600 hover:underline">Gastric sleeve in Mexico vs a GLP-1 program: the verified math</Link>
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

          {/* Related guides */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related VitalityScout guides</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds abroad</Link></li>
              <li><Link href="/guides/hsa-letter-of-medical-necessity-rules" className="hover:underline">Letter of medical necessity rules</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="hover:underline">Deducting foreign surgery on your taxes</Link></li>
              <li><Link href="/guides/mexico-bariatric-surgery-prices" className="hover:underline">Verified US-vs-abroad price index</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-semibold text-gray-800">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.irs.gov/publications/p502" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS, <em>Publication 502 (2025)</em> — weight-loss treatment for diagnosed obesity as a qualified/deductible medical expense.</a></li>
              <li>• <a href="https://www.irs.gov/publications/p969" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">IRS, <em>Publication 969</em> — HSA qualified medical expenses.</a></li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              Bariatric coverage rules (Center-of-Excellence accreditation, supervised-program and
              prior-authorization requirements, BMI thresholds) are standard US plan features but vary by
              plan. Confirm your specific benefits and exclusions with your insurer.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This guide is general information, not insurance or medical advice. Coverage depends on your
              specific plan, and bariatric surgery is major surgery. Confirm benefits with your insurer in
              writing, and consult a qualified surgeon and a full medical evaluation, before making any
              decision.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
