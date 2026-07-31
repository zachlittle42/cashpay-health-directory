import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'STD Testing Cost Without Insurance (2026): Cash Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/std-testing-cost-without-insurance' },
  description: 'STD testing cost without insurance in 2026 — 10-test panels from $139, individual test prices, free CDC and health department options, and the privacy upside of paying cash.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does STD testing cost without insurance?',
    answer: 'Single tests typically run $30-$185 cash and comprehensive panels $125-$400 at clinics — but direct-to-consumer services price lower: STDcheck\'s 10-test panel is $139, Priority STD\'s 10-panel is $198, LetsGetChecked\'s 5-infection kit is $149, and individual DTC tests run roughly $24-$89. Free options also exist: local health department clinics commonly test for HIV, chlamydia, gonorrhea, and syphilis at no charge, and Planned Parenthood uses an income-based sliding scale ($0-$250). Prices change — verify at checkout, and use the CDC\'s GetTested locator for free sites near you.',
  },
  {
    question: 'Where can I get tested for STDs for free?',
    answer: 'Three verified routes. The CDC\'s GetTested locator (gettested.cdc.gov) searches by ZIP code for free and low-cost confidential testing sites. Local and county health department STD clinics commonly offer free HIV, chlamydia, gonorrhea, and syphilis testing regardless of insurance status. And the CDC-funded Together TakeMeHome program mails up to two free HIV self-tests every 90 days to anyone 17+ in the US, in discreet packaging. Planned Parenthood\'s sliding scale can also reach $0 at the lowest incomes.',
  },
  {
    question: 'Are at-home STD tests accurate and worth it?',
    answer: 'Reputable at-home services use the same CLIA-certified laboratories as clinics — the difference is who collects the sample and where. Published prices: LetsGetChecked Standard 5 ($149) covers chlamydia, gonorrhea, trichomoniasis, syphilis, and HIV; Everlywell\'s panels run $49-$149; myLAB Box singles start at $79 with a free physician consult on positive results. Two caveats: collection errors are more likely at home than at a draw site, and any positive or unclear result needs clinical follow-up and treatment — a kit is a screen, not care.',
  },
  {
    question: 'Does STD testing show up on insurance records?',
    answer: 'Cash-pay testing doesn\'t generate insurance paperwork — that\'s a real reason many people choose it even when insured. When you pay a DTC lab directly, no claim is filed and no explanation of benefits (EOB) arrives in the mail, which matters for people on a partner\'s or parent\'s plan; results go to a private portal. Services like STDcheck don\'t accept insurance at all by design. One balance note: read the privacy policy of any DTC service, since data practices vary — and results you share with a clinician for treatment do enter your medical record, as they should.',
  },
  {
    question: 'How often should I get tested for STDs?',
    answer: 'CDC recommendations: everyone 13-64 should test for HIV at least once, and all adults should test for hepatitis B and C at least once. Sexually active women under 25 should test annually for chlamydia and gonorrhea (older women with risk factors too). Sexually active gay and bisexual men should test for syphilis, chlamydia, gonorrhea, and HIV at least annually — every 3-6 months with multiple or anonymous partners. Pregnant people should be screened early in each pregnancy. Your situation may differ — a clinician can tailor the panel and cadence.',
  },
  {
    question: 'Is STD testing HSA or FSA eligible?',
    answer: 'Yes. STD and HIV tests — including at-home kits — are qualified medical expenses on the standard FSA/HSA eligibility lists, and major DTC services accept HSA/FSA cards directly (myLAB Box explicitly does, and LetsGetChecked kits are sold through FSA Store). The OraQuick at-home HIV self-test (about $45 retail) also qualifies. Keep the receipt, and confirm specifics with your plan administrator.',
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

export default function StdTestingCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'STD Testing Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What STD testing costs without insurance in 2026 — individual test and panel cash prices, direct-to-consumer services compared, free CDC and health department routes, and privacy considerations.',
    url: 'https://vitalityscout.com/guides/std-testing-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/std-testing-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Sexually transmitted infection (STI) testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'CDC — getting tested for STIs (recommendations and GetTested locator)', url: 'https://www.cdc.gov/sti/testing/index.html' },
      { '@type': 'CreativeWork', name: 'STDcheck — published test panel pricing', url: 'https://www.stdcheck.com/std-test-pricing.php' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — Standard 5 at-home STD test', url: 'https://www.letsgetchecked.com/standard-std-test/' },
      { '@type': 'CreativeWork', name: 'Planned Parenthood — does getting tested for STDs cost money', url: 'https://www.plannedparenthood.org/blog/does-getting-tested-for-stds-cost-money' },
      { '@type': 'CreativeWork', name: 'Together TakeMeHome — free at-home HIV self-testing program', url: 'https://together.takemehome.org/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/std-testing-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/std-testing-cost-without-insurance' };

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
              <span className="text-gray-900">STD Testing Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; At-Home Lab Testing Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Lab Testing
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              STD Testing Cost Without Insurance: Panels, Privacy &amp; Free Routes
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A full 10-test panel costs $139 online. Your county health department may test you
              for free. And paying cash keeps the whole thing off insurance paperwork. Here is the
              complete cash-pay map for getting tested.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, single STD tests run about <strong>$30-$185</strong> at clinics
                and <strong>$24-$89</strong> direct-to-consumer, while full panels cost{' '}
                <strong>$139-$400</strong> — STDcheck&apos;s 10-test panel is{' '}
                <strong>$139</strong>, LetsGetChecked&apos;s 5-infection kit{' '}
                <strong>$149</strong>. Free options are real: health department clinics, the
                CDC&apos;s <strong>GetTested</strong> locator, and free mailed HIV self-tests via{' '}
                <strong>Together TakeMeHome</strong>. Estimates to verify at checkout. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-test" className="text-blue-600 hover:underline">1. Cash price by test</a></li>
              <li><a href="#dtc" className="text-blue-600 hover:underline">2. Direct-to-consumer panels compared</a></li>
              <li><a href="#free" className="text-blue-600 hover:underline">3. Free and sliding-scale testing</a></li>
              <li><a href="#privacy" className="text-blue-600 hover:underline">4. The privacy case for paying cash</a></li>
              <li><a href="#how-often" className="text-blue-600 hover:underline">5. Who should test, and how often (CDC)</a></li>
              <li><a href="#positive" className="text-blue-600 hover:underline">6. If a result comes back positive</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to pay the least</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              STD testing is the lab category where cash-pay isn&apos;t a fallback — it&apos;s
              often the preferred route even for the insured, because paying directly keeps
              results off insurance paperwork entirely. It&apos;s also the category with the most
              genuinely free capacity in the system, from county clinics to CDC-mailed HIV tests.
              The result: nobody should skip testing over cost.
            </p>

            <h2 id="by-test" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash Price by Test</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Clinic cash range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DTC published examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Chlamydia + gonorrhea</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $150 (two-test panel at urgent care)</td>
                    <td className="border border-gray-300 px-4 py-3">$89 each at Priority STD</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">HIV (antibody)</td>
                    <td className="border border-gray-300 px-4 py-3">~$30 - $100</td>
                    <td className="border border-gray-300 px-4 py-3">Labcorp OnDemand ~$59; Priority STD $79</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">HIV RNA (early detection)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $400+</td>
                    <td className="border border-gray-300 px-4 py-3">STDcheck panel w/ early detection $349</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Syphilis</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $100</td>
                    <td className="border border-gray-300 px-4 py-3">Priority STD $79; Labcorp OnDemand ~$89</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Herpes (HSV-1/2)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $200</td>
                    <td className="border border-gray-300 px-4 py-3">$65 per type at Priority STD</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hepatitis B / C</td>
                    <td className="border border-gray-300 px-4 py-3">Varies; often panel-bundled</td>
                    <td className="border border-gray-300 px-4 py-3">$59 each at Priority STD</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full panel (7-10 infections)</td>
                    <td className="border border-gray-300 px-4 py-3">~$125 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">STDcheck $139; Priority STD $198; LetsGetChecked $149-$249</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="dtc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Direct-to-Consumer Panels Compared</h2>

            <p className="text-gray-700 mb-4">
              Two DTC models exist: <strong>lab-visit services</strong> (order online, get drawn at
              a Labcorp/Quest-affiliated site — same-day, no appointment) and{' '}
              <strong>at-home kits</strong> (self-collect, mail in). Both use CLIA-certified labs.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>STDcheck:</strong> 10-test panel <strong>$139</strong> (with HIV RNA early detection, $349); individual tests $24-$119; lab-visit model; doesn&apos;t accept insurance by design but provides itemized receipts.</li>
              <li><strong>Priority STD:</strong> 10-panel <strong>$198</strong>; individual tests $59-$89; lab-visit model.</li>
              <li><strong>Labcorp OnDemand:</strong> individual tests (HIV ~$59, syphilis ~$89) plus a custom STI panel builder; drawn at Labcorp centers.</li>
              <li><strong>LetsGetChecked:</strong> at-home Standard 5 <strong>$149</strong> (chlamydia, gonorrhea, trich, syphilis, HIV); Complete 8 $249.</li>
              <li><strong>Everlywell:</strong> at-home singles ~$49-$69; comprehensive panels $149.</li>
              <li><strong>myLAB Box:</strong> at-home singles from $79; 14-infection panel $369; free physician consult on positive results.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The same accuracy logic applies here as in our{' '}
              <Link href="/guides/are-at-home-blood-tests-accurate" className="text-blue-600 hover:underline">at-home test accuracy guide</Link>:
              the labs are the same; home collection adds a small error risk that a draw-site visit
              avoids. Browse more options on the{' '}
              <Link href="/labs" className="text-blue-600 hover:underline">lab testing directory</Link>.
            </p>

            <h2 id="free" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Free and Sliding-Scale Testing</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CDC GetTested locator</strong> (gettested.cdc.gov): searches by ZIP for free and low-cost confidential testing sites, including self-collection options.</li>
              <li><strong>County/city health department clinics:</strong> commonly free HIV, chlamydia, gonorrhea, and syphilis testing, walk-in or by appointment, regardless of insurance.</li>
              <li><strong>Together TakeMeHome</strong> (CDC-funded, active in 2026): mails up to <strong>two free HIV self-tests every 90 days</strong> to anyone 17+ in the US, in discreet packaging.</li>
              <li><strong>Planned Parenthood:</strong> testing runs $0-$250 on an income-based sliding scale, and centers state they won&apos;t turn people away for inability to pay.</li>
              <li><strong>Retail HIV self-test:</strong> the OraQuick in-home HIV test runs about <strong>$45</strong> at major pharmacies if you want same-day results without a program.</li>
            </ul>

            <h2 id="privacy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Privacy Case for Paying Cash</h2>

            <p className="text-gray-700 mb-4">
              When you pay a lab directly, <strong>no insurance claim is filed and no explanation
              of benefits arrives in the mail</strong> — which matters for anyone on a
              partner&apos;s or parent&apos;s plan. Results go to a private portal, and several DTC
              services are cash-only by design. Two balance points worth knowing: DTC companies&apos;
              own privacy policies vary (read them — some permit data sharing with affiliates), and
              results you bring to a clinician for treatment become part of your medical record,
              which is exactly what should happen when treatment is needed. Privacy is a reason to
              choose cash-pay testing; it&apos;s never a reason to skip follow-up care.
            </p>

            <h2 id="how-often" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Should Test, and How Often (CDC)</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Everyone 13-64:</strong> HIV test at least once; annually with ongoing risk factors. All adults: hepatitis B and C at least once.</li>
              <li><strong>Sexually active women under 25:</strong> chlamydia and gonorrhea annually (25+ with new/multiple partners too).</li>
              <li><strong>Sexually active gay and bisexual men:</strong> syphilis, chlamydia, gonorrhea, and HIV at least annually — every 3-6 months with multiple or anonymous partners.</li>
              <li><strong>Pregnancy:</strong> HIV, hepatitis B and C, and syphilis screening early in each pregnancy.</li>
              <li>These are the CDC&apos;s population-level baselines — a clinician can tailor the panel and cadence to your actual situation, including window periods after an exposure.</li>
            </ul>

            <h2 id="positive" className="text-2xl font-bold text-gray-900 mt-12 mb-6">If a Result Comes Back Positive</h2>

            <p className="text-gray-700 mb-4">
              A positive screen needs two things: confirmation where applicable, and treatment.
              Most bacterial STIs are curable with inexpensive generic antibiotics, and effective
              treatment exists for the rest — the cash-pay route continues to work here via
              telehealth and health department clinics, and some DTC services (like myLAB Box)
              include a physician consult with positive results. What a kit can&apos;t do is treat
              you: build the follow-up step into the plan from the start. A low-cost{' '}
              <Link href="/guides/doctor-visit-cost-without-insurance" className="text-blue-600 hover:underline">telehealth visit</Link>{' '}
              is usually the fastest bridge from result to prescription.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for STD Testing</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Check the free routes first</strong> — GetTested locator, health department clinic, Together TakeMeHome for HIV.</li>
              <li><strong>Match the panel to CDC guidance</strong> rather than buying the biggest box; a targeted panel is often half the price.</li>
              <li><strong>Compare lab-visit vs at-home DTC pricing</strong> — the $139-$198 ten-test panels are the full-coverage benchmark.</li>
              <li><strong>Use the sliding scale</strong> at Planned Parenthood or a community clinic if cost is the barrier.</li>
              <li><strong>Pay with HSA/FSA funds</strong> — tests and at-home kits qualify.</li>
              <li><strong>Budget for the follow-up</strong>, not just the test — a result you can&apos;t act on isn&apos;t protection.</li>
            </ol>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Lab Testing</h3>
            <p className="mb-6 text-blue-100">
              STD panels, blood work, and at-home kits with transparent pricing — compared in one directory.
            </p>
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Lab Testing Options
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
              are not affiliated with the testing services named above. Pricing is based on publicly
              available data and provider websites and is presented as estimates that vary by
              provider, location, and current promotions — verify prices at checkout. Screening
              choices, testing windows after an exposure, and treatment decisions should be made
              with a licensed clinician; a positive or unclear result always warrants clinical
              follow-up. If you may have been exposed to HIV within the last 72 hours, contact a
              clinician, urgent care, or emergency department immediately to ask about
              post-exposure prophylaxis (PEP) — it is time-sensitive. VitalityScout may earn a
              commission from some links, at no additional cost to you, and this never affects how
              we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• CDC — cdc.gov (STI testing recommendations; GetTested locator; TakeMeHome program)</li>
              <li>• STDcheck / Priority STD — published panel and individual test pricing</li>
              <li>• LetsGetChecked / Everlywell / myLAB Box — published at-home kit pricing</li>
              <li>• Labcorp OnDemand — direct-order STI test pricing (via 2026 review of the official store)</li>
              <li>• Planned Parenthood — plannedparenthood.org (sliding-scale testing costs)</li>
              <li>• K Health / published cost guides (clinic cash ranges by test)</li>
              <li>• USPSTF — chlamydia and gonorrhea screening recommendation</li>
              <li>• Walgreens — OraQuick HIV self-test retail pricing</li>
              <li>• FSA Store / myLAB Box — HSA/FSA eligibility of STD test kits</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Lab Testing Cheat Sheet"
            description="Panel benchmarks, the free-testing routes, and when at-home beats the draw site."
            source="guide_std_testing_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
