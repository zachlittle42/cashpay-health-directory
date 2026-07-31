import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'EKG Cost Without Insurance (2026): EKG, Echo & Stress Tests' },
  alternates: { canonical: 'https://vitalityscout.com/guides/ekg-cost-without-insurance' },
  description: 'EKG cost without insurance in 2026 — cash prices from ~$40-$99, echocardiogram and stress test pricing, posted cardiology self-pay rates, and where hospitals overcharge.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an EKG cost without insurance?',
    answer: 'Cash prices are low when you avoid hospitals: state market averages run about $50-$58 (Sidecar Health claims data), MDsave lists bundled EKGs at $54-$197, and some cash-pay practices post rates as low as $40 (South Tampa Cardiology lists an EKG with interpretation at $40; a Tampa urgent care posts $99). Urgent care averages around $175-$300 including the visit, while a hospital setting can push the same 10-minute test into the hundreds via facility fees. For calibration, Medicare pays about $15 for the complete test. Confirm the all-in price — tracing plus interpretation — before booking.',
  },
  {
    question: 'How much does an echocardiogram cost without insurance?',
    answer: 'The spread is dramatic. Published cash-pay figures: independent imaging centers and cardiology offices commonly charge $200-$800 (two Tampa-area cardiology practices post $250 flat), MDsave bundles run $220-$1,859, while hospital outpatient departments typically charge $1,000-$2,500 — hospital price-transparency data shows an average cash price around $1,852. Medicare pays roughly $180-$240 for the same test. The echo is the clearest facility-fee arbitrage in cardiology: same ultrasound, several-fold price difference by building. Get quotes from an independent cardiology office first.',
  },
  {
    question: 'How much is a stress test without insurance?',
    answer: 'By type, published cash estimates: a treadmill stress test runs about $200-$2,000 (MDsave bundles $331-$774), a stress echocardiogram roughly $500-$4,000 (MDsave $394-$1,868), and a nuclear stress test about $600-$5,000, with self-pay rates around $1,050 at imaging centers versus $2,200+ hospital list prices. As with echoes, the setting drives the multiple. Which stress test you need — if any — is a cardiologist\'s call; the savings move is pricing it at an independent facility once it\'s ordered.',
  },
  {
    question: 'Can my Apple Watch or KardiaMobile replace an EKG?',
    answer: 'No — and the manufacturers say so themselves. Consumer devices like KardiaMobile ($79-$84, FDA-cleared, HSA/FSA eligible) and the Apple Watch ECG app record a single-lead ECG that can detect rhythm issues like AFib. A clinical EKG uses 12 leads, and Apple explicitly states its ECG app cannot detect a heart attack, blood clots, or most other heart conditions. These devices are useful for rhythm monitoring between visits — sometimes exactly what a cardiologist wants — but they don\'t substitute for a diagnostic 12-lead EKG, and chest pain means calling 911, not checking your watch.',
  },
  {
    question: 'How much does a cardiologist visit cost without insurance?',
    answer: 'Published cash figures: Sidecar Health\'s claims-based averages run about $93-$154 by state for a cardiologist visit, while unlisted rack rates at hospital-affiliated practices commonly reach $200-$500 for an initial consult — one analysis notes standalone cardiology practices often charge 30-50% less than hospital-affiliated ones. Posted examples exist: Tampa Heart lists a $200 self-pay office visit that includes EKG interpretation. Diagnostic tests bill on top of the visit, so ask for the visit-plus-testing total.',
  },
  {
    question: 'Are EKGs and heart tests HSA/FSA eligible?',
    answer: 'Yes. Provider-ordered diagnostic and screening tests — EKGs, echocardiograms, stress tests, Holter monitoring — are qualified medical expenses payable with HSA/FSA funds, and self-pay patients scheduling these tests are entitled to a Good Faith Estimate beforehand (with a federal dispute process if the final bill exceeds it by $400+). Consumer ECG devices marketed for medical monitoring, like KardiaMobile, are also HSA/FSA eligible; general fitness trackers are not. Keep itemized receipts.',
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

export default function EkgCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'EKG Cost Without Insurance: EKG, Echocardiogram & Stress Test Prices',
    description:
      'What heart tests cost without insurance in 2026 — EKG cash prices from ~$40, echocardiogram and stress test pricing by setting, posted cardiology self-pay rates, and consumer ECG device limits.',
    url: 'https://vitalityscout.com/guides/ekg-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ekg-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Electrocardiogram (EKG/ECG)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'Sidecar Health — routine ECG and cardiologist visit cash-price averages', url: 'https://cost.sidecarhealth.com/c/routine-ecg-with-interpretation-and-report-cost' },
      { '@type': 'CreativeWork', name: 'MDsave — EKG, echocardiogram, and stress test bundled prices', url: 'https://www.mdsave.com/t/heart-health/cardiac-testing' },
      { '@type': 'CreativeWork', name: 'Turquoise Health — transthoracic echocardiogram cash price data', url: 'https://turquoise.health/services/echo-transthoracic-w-doppler/' },
      { '@type': 'CreativeWork', name: 'Apple — ECG app limitations (single-lead vs clinical 12-lead)', url: 'https://support.apple.com/en-us/120278' },
      { '@type': 'CreativeWork', name: 'CMS — Good Faith Estimate rules for uninsured and self-pay patients', url: 'https://www.cms.gov/files/document/faqs-good-faith-estimate-uninsured-self-pay-part-5.pdf' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ekg-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/ekg-cost-without-insurance' };

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
              <span className="text-gray-900">EKG Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Local Clinics &amp; Services Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Heart Testing
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EKG Cost Without Insurance: Heart Tests From $40 to $5,000
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Medicare pays $15 for an EKG. Some cardiology offices post $40. Hospitals can charge
              hundreds for the identical ten-minute test — and thousands for an echo. Here is the
              full cash-pay map of heart testing, by test and by setting.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, an EKG typically costs <strong>$40-$200</strong> outside
                hospitals (state cash averages ~<strong>$50-$58</strong>; posted practice rates
                from <strong>$40-$99</strong>), an echocardiogram runs{' '}
                <strong>$200-$800 at independent offices</strong> vs{' '}
                <strong>$1,000-$2,500 at hospitals</strong>, and stress tests span{' '}
                <strong>~$330-$5,000</strong> by type and setting. Setting — not the test — drives
                the price. These are estimates to verify with the provider. This is information,
                not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ekg" className="text-blue-600 hover:underline">1. EKG: the $40-$200 test hospitals mark up</a></li>
              <li><a href="#echo" className="text-blue-600 hover:underline">2. Echocardiogram: the biggest facility-fee gap</a></li>
              <li><a href="#stress" className="text-blue-600 hover:underline">3. Stress tests and Holter monitors</a></li>
              <li><a href="#posted" className="text-blue-600 hover:underline">4. Posted cash-pay cardiology prices</a></li>
              <li><a href="#consult" className="text-blue-600 hover:underline">5. The cardiologist consult</a></li>
              <li><a href="#wearables" className="text-blue-600 hover:underline">6. Apple Watch and KardiaMobile: what they can&apos;t do</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to pay the least</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Cardiac testing is where the gap between what a test <em>costs</em> and what a
              hospital <em>charges</em> gets absurd: Medicare reimburses a complete EKG at about{' '}
              <strong>$15.36</strong>, while the same tracing inside a hospital can bill hundreds
              once facility fees attach. For a cash payer with a physician&apos;s order, nearly
              every test on this page has a legitimate sub-$1,000 route — you just have to know
              which building to walk into.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>First, the safety line:</strong> this page is about scheduled, ordered
              testing. Chest pain, pressure, shortness of breath, or fainting are 911 situations —
              not price-shopping situations. Our{' '}
              <Link href="/guides/er-visit-cost-without-insurance" className="text-blue-600 hover:underline">ER cost guide</Link>{' '}
              covers what happens on that path.
            </p>

            <h2 id="ekg" className="text-2xl font-bold text-gray-900 mt-12 mb-6">EKG: The $40-$200 Test Hospitals Mark Up</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Setting</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cash-pay cardiology practice</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$40-$150 (posted rates)</td>
                    <td className="border border-gray-300 px-4 py-3">Includes interpretation at posted-price practices</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Market average (claims data)</td>
                    <td className="border border-gray-300 px-4 py-3">~$50-$58 by state</td>
                    <td className="border border-gray-300 px-4 py-3">Sidecar Health cash averages</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">MDsave prepaid bundles</td>
                    <td className="border border-gray-300 px-4 py-3">$54 - $197</td>
                    <td className="border border-gray-300 px-4 py-3">Bought online, all-inclusive</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Urgent care</td>
                    <td className="border border-gray-300 px-4 py-3">~$175-$300 avg incl. visit</td>
                    <td className="border border-gray-300 px-4 py-3">Some bill visit fee + EKG separately</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hospital outpatient</td>
                    <td className="border border-gray-300 px-4 py-3">Into the hundreds ($500-$5,000 reported at the extreme)</td>
                    <td className="border border-gray-300 px-4 py-3">Facility fee of ~$50-$200 rides on top</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              For calibration: Medicare pays about <strong>$15.36</strong> for CPT 93000 (tracing
              plus interpretation), and the average provider charge is ~$68. Any quote in the
              hundreds is a setting problem, not a test problem.
            </p>

            <h2 id="echo" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Echocardiogram: The Biggest Facility-Fee Gap in Cardiology</h2>

            <p className="text-gray-700 mb-4">
              A transthoracic echo is an ultrasound of the heart — and its price depends almost
              entirely on the building. Published cash-pay figures: independent imaging centers
              and cardiology offices commonly run <strong>$200-$800</strong> (two Tampa practices
              post flat <strong>$250</strong> rates), MDsave bundles span{' '}
              <strong>$220-$1,859</strong>, and hospital outpatient departments typically charge{' '}
              <strong>$1,000-$2,500</strong> — hospital price-transparency data averages{' '}
              <strong>$1,852</strong> cash. Medicare pays roughly <strong>$180-$240</strong>. Same
              probe, same sonographer training, up to a 7x spread. If a clinician orders an echo,
              asking &quot;can this be done at an independent facility?&quot; is worth four
              figures.
            </p>

            <h2 id="stress" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Stress Tests and Holter Monitors</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published benchmarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Treadmill stress test</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $2,000</td>
                    <td className="border border-gray-300 px-4 py-3">MDsave bundles $331-$774</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Stress echocardiogram</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $4,000</td>
                    <td className="border border-gray-300 px-4 py-3">MDsave $394-$1,868</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nuclear stress test</td>
                    <td className="border border-gray-300 px-4 py-3">~$600 - $5,000</td>
                    <td className="border border-gray-300 px-4 py-3">Self-pay ~$1,050 imaging center vs ~$2,200 hospital list; MDsave from $1,043</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Holter monitor (24-48h)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">Wide provider spread ($120-$2,200 observed) — ask the self-pay price</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="posted" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Posted Cash-Pay Cardiology Prices</h2>

            <p className="text-gray-700 mb-4">
              A small but growing set of cardiology practices post self-pay fee schedules — useful
              both as options and as benchmarks for what any quote should look like:{' '}
              <strong>South Tampa Cardiology</strong> posts an EKG with interpretation at{' '}
              <strong>$40</strong> and an echo at <strong>$250</strong>; <strong>Tampa Heart</strong>{' '}
              posts a $200 office visit (EKG interpretation included) and a $250 echo. Nationally,{' '}
              <strong>MDsave&apos;s cardiac-testing marketplace</strong> sells prepaid, bundled
              EKGs, echoes, stress tests, and Holter monitoring with no surprise bills — the
              closest thing to the flat-rate imaging networks in our{' '}
              <Link href="/guides/mri-cost-without-insurance" className="text-blue-600 hover:underline">MRI guide</Link>.
              For the consult itself, cash marketplaces like Sesame list cardiology and telehealth
              visits with upfront prices.
            </p>

            <h2 id="consult" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Cardiologist Consult</h2>

            <p className="text-gray-700 mb-4">
              Claims-based cash averages for a cardiologist visit run about{' '}
              <strong>$93-$154 by state</strong> (Sidecar Health), while hospital-affiliated
              practices commonly quote <strong>$200-$500</strong> for an initial consult — one
              analysis notes standalone practices often charge <strong>30-50% less</strong> than
              hospital-affiliated ones, the same facility-fee dynamic covered in our{' '}
              <Link href="/guides/doctor-visit-cost-without-insurance" className="text-blue-600 hover:underline">doctor visit cost guide</Link>.
              Tests bill on top of the visit, so the number to request is the visit-plus-testing
              total.
            </p>

            <h2 id="wearables" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Apple Watch and KardiaMobile: What They Can&apos;t Do</h2>

            <p className="text-gray-700 mb-4">
              Consumer ECG devices are genuinely useful — and genuinely limited.{' '}
              <strong>KardiaMobile</strong> ($79-$84, FDA-cleared, HSA/FSA eligible) and the{' '}
              <strong>Apple Watch ECG app</strong> record a <em>single-lead</em> ECG that can flag
              rhythm issues like AFib between visits. A clinical EKG records{' '}
              <strong>12 leads</strong>, and Apple&apos;s own documentation states its app{' '}
              <strong>cannot detect a heart attack</strong>, blood clots, or most other cardiac
              conditions. The right mental model: these are rhythm journals a cardiologist may
              actually want you to keep — not diagnostics, and never a reason to delay care for
              chest pain.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for Heart Testing</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Keep ordered tests out of hospital outpatient departments.</strong> The facility fee is the price problem for EKGs, echoes, and stress tests alike.</li>
              <li><strong>Benchmark with posted prices.</strong> $40-$150 EKG, ~$250 echo at posted-rate practices; MDsave bundles for everything else.</li>
              <li><strong>Ask for the all-in number:</strong> tracing/imaging + interpretation + report, one figure, in writing.</li>
              <li><strong>Exercise your Good Faith Estimate right</strong> — scheduled self-pay tests qualify, and bills $400+ over the estimate can be disputed federally.</li>
              <li><strong>Use HSA/FSA funds</strong> for the tests and for medically-oriented monitoring devices.</li>
              <li><strong>If bloodwork is part of the workup</strong> (lipids, metabolic panels), our <Link href="/guides/blood-work-cost-without-insurance" className="text-blue-600 hover:underline">blood work cost guide</Link> covers the $21-$49 direct-order route.</li>
            </ol>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Diagnostics</h3>
            <p className="mb-6 text-blue-100">
              Heart tests, imaging, and labs with transparent self-pay pricing — in one directory.
            </p>
            <Link
              href="/local-clinics"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Local Services
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
              are not affiliated with the practices or platforms named above. Pricing is based on
              publicly available data and provider websites and is presented as estimates that vary
              by facility, market, and test protocol — always verify the current all-in price with
              the provider before booking. Whether you need cardiac testing, and which test, are
              clinical decisions for a licensed clinician. Chest pain, pressure, shortness of
              breath, fainting, or other acute symptoms warrant calling 911 or going to the nearest
              emergency room immediately — never delay emergency evaluation to compare prices or
              check a consumer device. VitalityScout may earn a commission from some links, at no
              additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sidecar Health — cost.sidecarhealth.com (ECG and cardiologist-visit cash averages by state)</li>
              <li>• MDsave — mdsave.com (bundled EKG, echo, stress test, and Holter prices)</li>
              <li>• Turquoise Health — hospital price-transparency echo cash-price data</li>
              <li>• Mira — talktomira.com (urgent care EKG averages)</li>
              <li>• Tampa Heart / South Tampa Cardiology — posted self-pay fee schedules</li>
              <li>• CareRoute / billing references — CPT 93000 and 93306 Medicare benchmarks</li>
              <li>• Apple — support.apple.com (ECG app single-lead limitations)</li>
              <li>• AliveCor / FSA Store — KardiaMobile pricing and HSA/FSA eligibility</li>
              <li>• CMS — Good Faith Estimate rules for self-pay patients</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Diagnostics Price Guide"
            description="EKG, echo, imaging, and lab benchmarks — and the facility-fee question that saves four figures."
            source="guide_ekg_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
