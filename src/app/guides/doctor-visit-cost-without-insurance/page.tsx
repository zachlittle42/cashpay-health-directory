import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Doctor Visit Cost Without Insurance (2026): Cash Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/doctor-visit-cost-without-insurance' },
  description: 'Doctor visit cost without insurance in 2026 — office visit cash prices, $29-$89 telehealth options, direct primary care memberships, and sliding-scale clinics.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a doctor visit cost without insurance?',
    answer: 'A routine primary care office visit without insurance typically runs $130-$200, with published averages around $160-$171 — a Johns Hopkins study found the average cash price quoted to a new uninsured patient was about $160. New-patient visits price higher than follow-ups (one fixed-fee sample averaged $152 new vs $96 follow-up), and totals rise with labs, vaccines, or procedures. Telehealth is far cheaper at roughly $29-$89 a visit. These are estimates — ask the practice for its self-pay price before booking.',
  },
  {
    question: 'What is the cheapest way to see a doctor without insurance?',
    answer: 'For most non-urgent issues, telehealth: published cash prices include Amazon One Medical\'s on-demand visits at $29 (message) and $49 (video), Sesame visits from about $37, and Teladoc at $89. For ongoing care, direct primary care memberships (commonly $50-$100/month per AAFP) include unlimited or near-unlimited visits. If money is genuinely tight, HRSA-funded community health centers must offer sliding-scale fees based on income, dropping to a nominal fee at the lowest incomes. Verify current pricing with each provider.',
  },
  {
    question: 'How much is an annual physical without insurance?',
    answer: 'Published estimates put a cash-pay annual physical at roughly $150-$350 at a primary care office, with some averages reported near $200-$330 depending on the source and what is bundled. Bloodwork and other tests add roughly $20-$200 or more on top. If the physical mainly exists to get your annual labs, ordering panels directly through a cash-pay lab service and bringing results to a cheaper visit can cut the total substantially. Confirm what the quoted physical includes before booking.',
  },
  {
    question: 'Why does the same doctor visit cost more at some offices?',
    answer: 'Two big reasons. First, hospital-owned practices can add a facility fee on top of the doctor\'s fee — reporting has documented facility fees of several hundred dollars for ordinary appointments, and a 2024 Health Affairs study found hospital-owned offices charge about 26% more than independent practices for the same services. Second, new-patient visits are coded and priced higher than established-patient visits (roughly a 23% premium at Medicare rates). Ask whether a facility fee applies and whether you\'re booked as a new patient.',
  },
  {
    question: 'What is direct primary care and is it worth it without insurance?',
    answer: 'Direct primary care (DPC) is a membership model: a flat monthly fee — commonly $50-$100 for adults per the AAFP — covers your primary care visits directly, with no insurance billing, and typically includes longer appointments plus discounted labs and medications. For someone uninsured who sees a doctor more than once or twice a year, it can beat paying $130-$200 per visit. As of January 1, 2026, DPC memberships up to $150/month (individual) are also HSA-compatible under the new federal rules. It covers primary care only — it is not insurance and doesn\'t cover hospitalization.',
  },
  {
    question: 'Are doctor visits HSA and FSA eligible?',
    answer: 'Yes — payments to physicians are qualified medical expenses under IRS Publication 502, so office visits, telehealth visits, and associated diagnostics are generally payable with HSA or FSA funds. Under rules effective January 1, 2026, direct primary care membership fees are also HSA-qualified up to $150/month for an individual or $300/month for a family. Keep itemized receipts and confirm details with your plan administrator.',
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

export default function DoctorVisitCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Doctor Visit Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What a doctor visit costs without insurance in 2026 — office visit cash prices, telehealth from $29, direct primary care memberships, sliding-scale clinics, and the facility-fee trap.',
    url: 'https://vitalityscout.com/guides/doctor-visit-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/doctor-visit-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Primary care office visit' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'Solv — how much does a doctor visit cost without insurance', url: 'https://www.solvhealth.com/health/how-much-does-a-doctor-s-visit-cost-without-insurance' },
      { '@type': 'CreativeWork', name: 'AAFP — direct primary care model and typical membership fees', url: 'https://www.aafp.org/family-physician/practice-and-career/delivery-payment-models/direct-primary-care.html' },
      { '@type': 'CreativeWork', name: 'HRSA — health center sliding fee discount program requirements', url: 'https://bphc.hrsa.gov/compliance/compliance-manual/chapter9' },
      { '@type': 'CreativeWork', name: 'IRS — Treasury/IRS guidance on HSA changes including direct primary care', url: 'https://www.irs.gov/newsroom/treasury-irs-provide-guidance-on-new-tax-benefits-for-health-savings-account-participants-under-the-one-big-beautiful-bill' },
      { '@type': 'CreativeWork', name: 'GoodRx — how much does telehealth cost', url: 'https://www.goodrx.com/healthcare-access/telehealth/how-much-does-telehealth-cost' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/doctor-visit-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/doctor-visit-cost-without-insurance' };

  return (
    <>
      <Navigation />
      <SidebarShell>
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
              <span className="text-gray-900">Doctor Visit Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Telehealth &amp; Primary Care
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Doctor Visit Cost Without Insurance: Every Cash-Pay Route Compared
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The office quote is ~$160. The video visit is $49. The membership is $75 a month, all
              you can use. Here is what seeing a doctor actually costs cash in 2026 — and which
              route fits which situation.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a primary care office visit typically costs{' '}
                <strong>$130-$200</strong> (published averages ~<strong>$160-$171</strong>), with
                new-patient visits priced higher than follow-ups. Telehealth is far cheaper:{' '}
                <strong>Amazon One Medical from $29</strong>, <strong>Sesame from ~$37</strong>,{' '}
                <strong>Teladoc $89</strong>. Direct primary care memberships run about{' '}
                <strong>$50-$100/month</strong>, and community health centers offer income-based
                sliding-scale fees. These are estimates to verify with each provider. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">One-off issue:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Start with telehealth (~$29-$89)</li>
                  <li>• Needs hands-on? Cash-pay office visit (~$130-$200)</li>
                  <li>• Ask the self-pay price when booking</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Ongoing care:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Direct primary care (~$50-$100/mo)</li>
                  <li>• Low income? Sliding-scale health center</li>
                  <li>• Both now play well with HSAs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#office" className="text-blue-600 hover:underline">1. What an office visit costs cash</a></li>
              <li><a href="#telehealth" className="text-blue-600 hover:underline">2. Telehealth: the $29-$89 doctor visit</a></li>
              <li><a href="#dpc" className="text-blue-600 hover:underline">3. Direct primary care memberships</a></li>
              <li><a href="#sliding-scale" className="text-blue-600 hover:underline">4. Sliding-scale community health centers</a></li>
              <li><a href="#why-vary" className="text-blue-600 hover:underline">5. Why the same visit varies (the facility-fee trap)</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to pay the least</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Seeing a doctor&quot; is no longer one product with one price. The same
              20-minute conversation can cost $29 over video, $160 at an independent office, or
              $600+ at a hospital-owned practice once a facility fee lands on the bill. For the
              uninsured — and for anyone with a deductible they&apos;ll never meet — the route you
              choose matters more than any negotiation.
            </p>

            <h2 id="office" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What an Office Visit Costs Cash</h2>

            <p className="text-gray-700 mb-4">
              Published estimates converge tightly: Solv cites <strong>$130-$200</strong> for a
              routine primary care visit with a mean around <strong>$160</strong> — matching a
              Johns Hopkins study that found the average cash price quoted to a new uninsured
              patient was about <strong>$160</strong> (range $128-$188 by area). Mira puts a basic
              visit at <strong>$150-$300</strong> with an average of <strong>$171</strong> across
              major cities.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Visit type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Established-patient follow-up</td>
                    <td className="border border-gray-300 px-4 py-3">~$95 - $150</td>
                    <td className="border border-gray-300 px-4 py-3">One fixed-fee sample averaged $96</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">New-patient visit</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $300</td>
                    <td className="border border-gray-300 px-4 py-3">New-patient codes carry a ~23% premium; cash discounts common</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Annual physical</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $350</td>
                    <td className="border border-gray-300 px-4 py-3">Labs and tests add ~$20-$200+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Urgent care visit</td>
                    <td className="border border-gray-300 px-4 py-3">~$125 - $300</td>
                    <td className="border border-gray-300 px-4 py-3">See our <Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">urgent care cost guide</Link></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Telehealth visit</td>
                    <td className="border border-gray-300 px-4 py-3">~$29 - $89</td>
                    <td className="border border-gray-300 px-4 py-3">GoodRx cites $40-$90 uninsured; details below</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              For context: insured patients with employer coverage pay an average{' '}
              <strong>$27 copay</strong> for the same primary care visit (KFF 2025 survey). The
              cash-pay market exists to close that gap — and at the telehealth tier, it arguably
              has.
            </p>

            <h2 id="telehealth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Telehealth: The $29-$89 Doctor Visit</h2>

            <p className="text-gray-700 mb-4">
              For issues that don&apos;t need a physical exam — infections, rashes, prescriptions,
              mental health, chronic-condition check-ins — published telehealth cash prices have
              collapsed the cost of &quot;seeing a doctor&quot;:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Amazon One Medical (On-Demand)</td>
                    <td className="border border-gray-300 px-4 py-3">$29 message / $49 video</td>
                    <td className="border border-gray-300 px-4 py-3">Pay-per-visit; membership $9/mo for Prime adds in-person access</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sesame</td>
                    <td className="border border-gray-300 px-4 py-3">Visits from ~$34-$37</td>
                    <td className="border border-gray-300 px-4 py-3">Marketplace; doctors set prices, shown upfront</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">GoodRx Care</td>
                    <td className="border border-gray-300 px-4 py-3">~$39-$70 (most ~$49)</td>
                    <td className="border border-gray-300 px-4 py-3">Per-visit; cheaper with Gold membership</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Teladoc</td>
                    <td className="border border-gray-300 px-4 py-3">$89 general medical</td>
                    <td className="border border-gray-300 px-4 py-3">Per-visit, 24/7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Doctor On Demand</td>
                    <td className="border border-gray-300 px-4 py-3">From $99 medical</td>
                    <td className="border border-gray-300 px-4 py-3">Per-visit; mental health from $134</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">K Health</td>
                    <td className="border border-gray-300 px-4 py-3">Membership ~$29-$49/mo (sources vary)</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription primary/urgent care; verify current pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              We compare these and more on the{' '}
              <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link>.
              The pattern to exploit: start virtual, escalate to in-person only when the clinician
              says the issue needs hands or equipment.
            </p>

            <h2 id="dpc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Direct Primary Care Memberships</h2>

            <p className="text-gray-700 mb-4">
              Direct primary care (DPC) practices skip insurance entirely: a flat membership —
              typically <strong>$50-$100/month for adults</strong>, per the American Academy of
              Family Physicians — buys your primary care directly, usually with longer visits,
              same/next-day access, and discounted labs and medications. For an uninsured person
              who would otherwise pay $130-$200 per visit more than a few times a year, the math
              favors membership quickly.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>New for 2026:</strong> under federal rules effective January 1, 2026, a DPC
                membership no longer disqualifies you from contributing to an HSA, and membership
                fees up to <strong>$150/month (individual) or $300/month (family)</strong> are
                HSA-payable qualified expenses. This removed the biggest tax objection to DPC.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The honest caveat: DPC covers primary care only. It is not insurance and does nothing
              for hospitalization or specialists — most members pair it with catastrophic coverage
              or a health-share. But as the price of &quot;having a doctor,&quot; it is the
              strongest cash-pay product in this guide.
            </p>

            <h2 id="sliding-scale" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Sliding-Scale Community Health Centers</h2>

            <p className="text-gray-700 mb-4">
              HRSA-funded community health centers (FQHCs) are required to offer a sliding fee
              scale based only on income and family size: at or below 100% of the federal poverty
              line you pay at most a nominal fee, with graduated discounts up to 200% of the
              poverty line. Anyone can use them regardless of insurance status. If cost is the
              reason you have been skipping care — as 75% of uninsured adults report — this is the
              route designed for exactly that situation. Find one via HRSA&apos;s health center
              locator.
            </p>

            <h2 id="why-vary" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why the Same Visit Varies: The Facility-Fee Trap</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Hospital-owned practices can add a facility fee</strong> on top of the physician&apos;s fee — same doctor, same room, bigger bill. Reporting has documented facility fees of roughly $488-$503 for ordinary appointments, and a 2024 Health Affairs study found hospital-owned offices charge about 26% more than independent practices for the same services. Some states (including CT, CO, ME, NY, and IN) now limit certain facility fees.</li>
              <li><strong>New-patient coding costs more.</strong> If you haven&apos;t been seen by that practice (or its group) in three years, you&apos;re billed as new — roughly a 23% premium at Medicare rates, more in cash charges.</li>
              <li><strong>The fix is one question:</strong> &quot;Is this practice hospital-owned, and will a facility fee apply to my visit?&quot; If yes, an independent practice, DPC clinic, or telehealth visit avoids the surcharge entirely.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least to See a Doctor</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Match the route to the problem.</strong> Virtual-friendly issue → telehealth ($29-$89). Hands-on issue → independent practice or urgent care. Ongoing needs → DPC membership. Tight budget → sliding-scale health center.</li>
              <li><strong>Ask for the self-pay price when booking</strong> — and whether a facility fee applies. Practices quote cash rates every day; discounts of 20-40% off list charges are commonly reported.</li>
              <li><strong>Decouple the labs.</strong> Visit fees are only part of the bill. Order routine panels through a <Link href="/guides/blood-work-cost-without-insurance" className="text-blue-600 hover:underline">cash-pay lab service</Link> instead of paying clinic markup.</li>
              <li><strong>Use follow-up pricing.</strong> Established-patient visits cost meaningfully less than new-patient visits — staying with one practice pays.</li>
              <li><strong>Pay with HSA/FSA funds.</strong> Doctor visits are qualified expenses, and DPC fees now qualify within the 2026 limits.</li>
            </ol>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Before You Book</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Telehealth has limits.</strong> Some conditions require an exam, imaging, or labs — expect an honest virtual clinician to refer you in-person when needed.</li>
              <li><strong>Ask what the quote includes.</strong> A &quot;visit&quot; quote may exclude vaccines, tests, and procedures done in the room.</li>
              <li><strong>Cash visits may not reach your records or deductible.</strong> Keep your own copies of notes and results.</li>
              <li><strong>Membership prices and promos change.</strong> Every figure here is an estimate — verify current pricing directly with the provider.</li>
              <li><strong>Symptoms that feel severe belong in the ER</strong>, regardless of cost.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Doctor Visits</h3>
            <p className="mb-6 text-blue-100">
              Telehealth services with transparent per-visit pricing — compared side by side.
            </p>
            <Link
              href="/telehealth"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Telehealth Options
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We
              are not affiliated with the practices or telehealth services named above. Pricing is
              based on publicly available data and provider websites and is presented as estimates
              that vary by location, visit type, services provided, and current promotions — always
              verify the current self-pay price directly with the provider before booking. Direct
              primary care is not health insurance. Tax treatment of HSA/FSA expenses depends on
              your situation; confirm with your plan administrator or a tax professional. If you are
              experiencing severe symptoms, call 911 or go to the nearest emergency room.
              VitalityScout may earn a commission from some links, at no additional cost to you, and
              this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Solv — solvhealth.com (cash office-visit ranges; Johns Hopkins cash-price study; physical costs)</li>
              <li>• AAFP — aafp.org (direct primary care model and typical membership fees)</li>
              <li>• HRSA — bphc.hrsa.gov (sliding fee discount program requirements for health centers)</li>
              <li>• IRS — irs.gov (Publication 502; 2026 HSA guidance on direct primary care)</li>
              <li>• GoodRx — goodrx.com (telehealth and urgent care cash price ranges)</li>
              <li>• KFF — kff.org (2025 Employer Health Benefits Survey copay averages; uninsured cost-skipping data)</li>
              <li>• Amazon One Medical, Sesame, Teladoc, Doctor On Demand — published visit pricing</li>
              <li>• NBC News / PIRG / Health Affairs reporting on hospital facility fees</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Care Playbook"
            description="Which visit type to book for which problem — and the questions that cut the bill."
            source="guide_doctor_visit_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
