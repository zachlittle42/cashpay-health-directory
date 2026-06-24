import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Is a DEXA Scan HSA/FSA Eligible? Rules & Costs (2026)',
  description: 'Yes, a DEXA scan can be HSA/FSA/HRA eligible — but it depends on medical necessity. How to use pre-tax funds, when you need a letter, and what it costs.',
  keywords: ['DEXA scan HSA eligible', 'DEXA scan FSA eligible', 'is a DEXA scan HSA FSA eligible', 'body composition scan HSA', 'DEXA letter of medical necessity', 'bone density scan FSA'],
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every cost answer carries the verify-with-your-
// plan hedge. The visible FAQ block below mirrors this schema exactly — schema
// clarifies the page, it never introduces a new claim.
const FAQ_ITEMS = [
  {
    question: 'Is a DEXA scan HSA or FSA eligible?',
    answer: 'A DEXA scan is generally eligible for reimbursement with an HSA, a standard health FSA, and an HRA when it is for a medical purpose, such as bone-density (osteoporosis) screening recommended by a doctor. It is typically not eligible with a limited-purpose FSA (LPFSA) or a dependent-care FSA. A purely elective body-composition scan for fitness tracking may require a Letter of Medical Necessity, or may not qualify at all. Confirm the rules with your specific plan administrator before you book.',
  },
  {
    question: 'Why does a DEXA scan need to be "medically necessary" to use HSA/FSA funds?',
    answer: 'IRS rules let you spend HSA and FSA dollars only on medical care — costs for the "diagnosis, cure, mitigation, treatment, or prevention of disease," per IRS Publication 502. Expenses that are "merely beneficial to general health" are excluded. A bone-density scan ordered to screen for osteoporosis fits the medical-care test cleanly; a scan booked only to track body fat for fitness sits closer to the general-wellness line, which is why some administrators ask for documentation.',
  },
  {
    question: 'Can I use HSA/FSA for a body-composition DEXA scan, not just bone density?',
    answer: 'Sometimes. Body-composition (body-fat and muscle) DEXA scans done at fitness or wellness centers are the gray area. Some plans reimburse them with just an itemized receipt; others classify them as general wellness and deny them; others approve them with a Letter of Medical Necessity tied to a condition like obesity, sarcopenia, or diabetes management. Because plans differ, check with your administrator first and ask whether an LMN is required.',
  },
  {
    question: 'What is a Letter of Medical Necessity (LMN) for a DEXA scan?',
    answer: 'An LMN is a short note from your clinician stating that the scan is needed to diagnose, treat, or monitor a specific medical condition. It typically names the condition and the reason the scan is recommended. Providers like BodySpec accept HSA/FSA cards and provide an itemized receipt, but they cannot issue an LMN — you have to request that from your own doctor. For a purely elective fitness scan, an LMN is often not available.',
  },
  {
    question: 'How much does a DEXA scan cost if I pay with HSA/FSA?',
    answer: 'Cash-pay body-composition DEXA scans commonly run about $40-$200 per scan in 2026 depending on the provider; mobile services such as BodySpec advertise scans starting around $40-$60, while studio chains and clinic body-comp scans often fall in the $75-$200 range. Bone-density DEXA at a medical facility is usually higher, roughly $150-$400. These are estimates that vary by location and package — confirm current pricing with the provider, then use HSA/FSA funds the same way you would for any qualified expense.',
  },
  {
    question: 'How do I actually pay for a DEXA scan with my HSA or FSA?',
    answer: 'Two paths. First, pay directly with your HSA/FSA debit card at checkout if the provider accepts it. Second, pay out of pocket and submit a reimbursement claim through your plan portal, attaching the itemized receipt (and an LMN if your plan requires one). Keep the itemized receipt — showing provider name, date, service, and amount — and the scan report in case your administrator requests substantiation.',
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

export default function DexaScanHsaFsaEligible() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Is a DEXA Scan HSA/FSA Eligible?',
    description:
      'How HSA, FSA, and HRA eligibility works for DEXA scans — the medical-necessity test, when a Letter of Medical Necessity is required, and what a scan costs.',
    url: 'https://vitalityscout.com/guides/is-dexa-scan-hsa-fsa-eligible',
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Dual-energy X-ray absorptiometry (DEXA)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'IRS Publication 502 — Medical and Dental Expenses', url: 'https://www.irs.gov/publications/p502' },
      { '@type': 'CreativeWork', name: 'HSA Store — DEXA Scan Eligibility', url: 'https://hsastore.com/hsa-eligibility-list/d/dexa-scan' },
      { '@type': 'CreativeWork', name: 'USPSTF — Osteoporosis Screening Recommendation', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening' },
    ],
  };

  const faqSchema = buildFAQSchema(FAQ_ITEMS);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
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
              <span className="text-gray-900">DEXA Scan HSA/FSA Eligibility</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/guides/dexa-scan-guide" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; DEXA Scan Guide
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Payment Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Is a DEXA Scan HSA/FSA Eligible?
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              The short answer is usually yes — but it hinges on whether the scan
              counts as medical care. Here is how the rules actually work, when you
              need a letter, and what to budget.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head
                query, restating facts detailed below — the extractable answer box. */}
            <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                A DEXA scan is generally <strong>HSA, FSA, and HRA eligible</strong> when it serves
                a medical purpose — most clearly bone-density (osteoporosis) screening recommended by
                a doctor. It is typically <strong>not</strong> eligible under a limited-purpose FSA or
                a dependent-care FSA. A purely elective body-composition scan for fitness may need a
                Letter of Medical Necessity or may not qualify. Confirm with your plan first. This is
                information, not tax or medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 9 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Takeaway */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Quick Takeaway</h3>
            <p className="text-gray-700 mb-0">
              HSA and FSA dollars can pay for a DEXA scan when it qualifies as medical care under
              IRS rules — costs for diagnosing, treating, or preventing disease. A bone-density scan
              for osteoporosis screening fits cleanly. A body-composition scan booked only to track
              body fat sits closer to the general-wellness line, so some plans ask for a Letter of
              Medical Necessity. Always verify with your plan administrator before you book.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Rule in One Sentence</h2>
            <p>
              You can spend HSA, FSA, and HRA funds on a DEXA scan when the scan is <strong>medical
              care</strong> — not when it is general wellness. Everything else on this page is just
              detail about which side of that line a given scan falls on, and how to document it.
            </p>
            <p>
              The IRS defines medical care, in <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Publication 502</a>, as
              expenses for the &quot;diagnosis, cure, mitigation, treatment, or prevention of
              disease.&quot; The same publication is explicit that expenses &quot;merely beneficial to
              general health&quot; — its examples are vitamins and a vacation — do not count. That single
              distinction drives every DEXA eligibility question below.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which Accounts Cover a DEXA Scan?</h2>
            <p>
              Not every pre-tax health account treats a DEXA scan the same way. Here is how the common
              account types line up, based on the published eligibility lists from HSA/FSA administrators:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Account Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">DEXA Scan?</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">HSA (Health Savings Account)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">Eligible</td>
                    <td className="px-4 py-3 text-gray-600">For medical-purpose scans; documentation may be requested</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Health FSA (standard)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">Eligible</td>
                    <td className="px-4 py-3 text-gray-600">Same medical-purpose test as the HSA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">HRA (Health Reimbursement Arrangement)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">Eligible</td>
                    <td className="px-4 py-3 text-gray-600">Subject to your employer&apos;s plan design</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Limited-Purpose FSA (LPFSA)</td>
                    <td className="px-4 py-3 text-red-600 font-medium">Not eligible</td>
                    <td className="px-4 py-3 text-gray-600">LPFSAs cover dental and vision only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Dependent-Care FSA</td>
                    <td className="px-4 py-3 text-red-600 font-medium">Not eligible</td>
                    <td className="px-4 py-3 text-gray-600">For childcare/eldercare, not medical services</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The takeaway: if you have a standard HSA, health FSA, or HRA, a DEXA scan is generally on
              the menu. If your only account is a limited-purpose FSA (the dental-and-vision-only kind
              that pairs with some HSAs) or a dependent-care FSA, it is not.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Real Question: Medical vs. Wellness</h2>
            <p>
              Eligibility is not about the machine — a DEXA scanner is the same device whether it is
              measuring your spine for fracture risk or your body fat for a cut. It is about <strong>why</strong> you
              are getting scanned. Plans sort DEXA scans into two buckets:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-3">Clearly Medical (usually eligible)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Bone-density screening</strong> for osteoporosis, recommended by a doctor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Monitoring bone loss</strong> from menopause, prior fractures, or long-term steroid use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Fracture-risk assessment</strong> in older or high-risk adults</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-amber-200 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-3">Gray Area (may need a letter)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span><strong>Body-composition scans</strong> for fitness, muscle, or weight tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Scans at <strong>fitness or wellness centers</strong> without a clinical referral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Baseline scans booked purely out of curiosity</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Why does bone density land so cleanly in the eligible column? Because it is a recognized
              screening test. The U.S. Preventive Services Task Force <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">recommends</a> DEXA
              bone-mineral-density screening for women 65 and older (and for younger postmenopausal
              women with risk factors) to prevent fractures. A scan ordered for that reason is
              obviously &quot;prevention of disease&quot; under the IRS test.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6 not-prose">
              <h4 className="text-amber-900 font-bold mb-2">Where people get tripped up</h4>
              <p className="text-sm text-amber-800 mb-0">
                The body-composition scan that fitness-focused people love — body fat %, lean mass,
                visceral fat — is exactly the kind of scan plans scrutinize. Some administrators
                reimburse it on the receipt alone. Others want a Letter of Medical Necessity. A few
                deny it as general wellness. There is no universal answer, which is why the next
                section matters.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When You Need a Letter of Medical Necessity</h2>
            <p>
              A Letter of Medical Necessity (LMN) is a short note from your clinician stating that a
              service is needed to diagnose, treat, or monitor a specific condition. For a DEXA scan,
              an LMN typically names the condition and the clinical reason for the scan — for example,
              that body-composition monitoring is being used to manage obesity, sarcopenia (muscle
              loss), or a metabolic condition.
            </p>
            <p>Two practical points worth knowing before you book:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>The scan provider usually cannot write the LMN.</strong> Body-composition
                services such as BodySpec accept HSA/FSA cards and supply an itemized receipt, but
                they state they cannot issue an LMN — you have to request that from your own
                prescribing clinician.
              </li>
              <li>
                <strong>For a purely elective fitness scan, an LMN is often unavailable.</strong> If
                there is no underlying condition a clinician is managing, there may be nothing to
                certify, and the expense may not qualify. That is the honest trade-off of the
                fitness-tracking use case.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What a DEXA Scan Costs (Cash-Pay)</h2>
            <p>
              Whether or not your plan reimburses it, a DEXA scan is an out-of-pocket purchase at most
              body-composition providers. Here are typical 2026 cash-pay ranges to budget against —
              treat them as estimates and confirm current pricing with the provider:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Where</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Typical Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">Mobile body-comp service (e.g., BodySpec)</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">~$40-$60/scan</td>
                    <td className="px-4 py-3 text-gray-600">Membership credits can lower the per-scan cost</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Studio / clinic body-comp scan (e.g., DexaFit)</td>
                    <td className="px-4 py-3 text-blue-600 font-semibold">~$75-$200/scan</td>
                    <td className="px-4 py-3 text-gray-600">Often bundled with VO2 max or RMR add-ons</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Bone-density DEXA at a medical facility</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">~$150-$400/scan</td>
                    <td className="px-4 py-3 text-gray-600">May be billed to insurance when medically indicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Ranges vary widely by city and package. For a deeper breakdown of what the scan measures
              and how to read your report, see our <Link href="/guides/dexa-scan-guide" className="text-blue-600 hover:underline">DEXA scan guide</Link>,
              and compare providers on the <Link href="/dexa-scans" className="text-blue-600 hover:underline">DEXA scan directory</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Pay With HSA or FSA, Step by Step</h2>
            <div className="space-y-4 my-8 not-prose">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">1. Confirm eligibility with your plan</h4>
                <p className="text-gray-700 text-sm">
                  Call your administrator or check the plan portal. Ask specifically whether a
                  body-composition DEXA scan is covered and whether an LMN is required.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">2. Get an LMN if your plan asks for one</h4>
                <p className="text-gray-700 text-sm">
                  Request it from your treating clinician — not the scan provider. Have it name the
                  condition being monitored.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">3. Pay by card or pay-and-reimburse</h4>
                <p className="text-gray-700 text-sm">
                  Use your HSA/FSA debit card at checkout if the provider accepts it, or pay out of
                  pocket and file a reimbursement claim through your plan portal.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">4. Keep your itemized receipt</h4>
                <p className="text-gray-700 text-sm">
                  Save the itemized receipt (provider, date, service, amount) and the scan report.
                  Administrators can request substantiation later.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Things to Keep in Mind</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plans differ.</strong> The eligibility lists above are general; your specific administrator&apos;s rules and substantiation requirements control.</li>
              <li><strong>Documentation protects you.</strong> If your account is ever audited, the burden is on you to show the expense was medical care.</li>
              <li><strong>Insurance is a separate question.</strong> A scan being HSA/FSA eligible does not mean insurance will cover it; those are different determinations.</li>
              <li><strong>This is not tax advice.</strong> For your situation, talk to your plan administrator or a tax professional.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan Provider</h3>
            <p className="text-gray-600 mb-6">
              Compare body-composition and bone-density DEXA providers by city, then check HSA/FSA
              acceptance directly with the clinic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/dexa-scans"
                className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700 transition-colors"
              >
                View DEXA Providers →
              </Link>
              <Link
                href="/guides/dexa-scan-guide"
                className="inline-block rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 hover:bg-green-50 transition-colors"
              >
                Read the DEXA Scan Guide →
              </Link>
            </div>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/dexa-scan-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What DEXA measures, accuracy, and how to read your report</div>
              </Link>
              <Link href="/guides/bodyspec-vs-dexafit" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-600">Pricing, locations, and reports compared</div>
              </Link>
              <Link href="/dexa-scans" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">DEXA Scan Directory</div>
                <div className="text-sm text-gray-600">Find body-composition and bone-density clinics by city</div>
              </Link>
              <Link href="/guides/trt-testosterone-therapy" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">TRT Guide</div>
                <div className="text-sm text-gray-600">Track muscle and bone density alongside hormone therapy</div>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-bold mb-2">Medical &amp; Financial Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-0">
              This guide is for general informational purposes only and is not medical, financial, or
              tax advice. HSA, FSA, and HRA eligibility and documentation requirements vary by plan
              and can change — confirm the rules with your plan administrator, and confirm current
              pricing and provider credentials directly with each clinic. Talk to a licensed clinician
              before pursuing any test or treatment, and to a tax professional about your specific
              situation. VitalityScout does not endorse any specific clinic or guarantee
              reimbursement.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener" className="text-blue-600 hover:underline">IRS Publication 502: Medical and Dental Expenses</a></li>
              <li>• <a href="https://hsastore.com/hsa-eligibility-list/d/dexa-scan" target="_blank" rel="noopener" className="text-blue-600 hover:underline">HSA Store: DEXA Scan Eligibility</a></li>
              <li>• <a href="https://livelyme.com/whats-eligible/dexa-scan" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Lively: DEXA Scan — Eligible Expenses for HSA, FSA, HRA</a></li>
              <li>• <a href="https://www.bodyspec.com/blog/post/hsafsa_dexa_scan_guide_at_bodyspec" target="_blank" rel="noopener" className="text-blue-600 hover:underline">BodySpec: HSA/FSA DEXA Scan Guide</a></li>
              <li>• <a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening" target="_blank" rel="noopener" className="text-blue-600 hover:underline">USPSTF: Osteoporosis to Prevent Fractures — Screening</a></li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
