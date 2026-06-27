import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Ultrasound Cost Without Insurance: Cash Prices by Type 2026' },
  alternates: { canonical: 'https://vitalityscout.com/guides/ultrasound-cost-without-insurance' },
  description: 'Ultrasound cost without insurance in 2026 by type: abdominal, pelvic, transvaginal, thyroid, OB. Where to get one affordably and self-pay vs insurance.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an ultrasound cost without insurance?',
    answer: 'For most single-area scans, cash-pay ultrasounds are commonly estimated at roughly $100-$600, with a national cash average reported around $200-$400 at independent imaging centers and higher at hospitals. The transparent self-pay marketplace MDsave lists an ultrasound nationally from about $116 to $495 (national average ~$219 versus ~$401 elsewhere). The big swing is hospital versus standalone imaging center and the specific body area scanned. These are estimates that vary by type, location, and facility — get a written self-pay quote before you book.',
  },
  {
    question: 'How much is an abdominal ultrasound without insurance?',
    answer: 'An abdominal ultrasound is commonly estimated in the $180-$600 cash range. Real published self-pay examples: Diagnostic Ultrasound Plus (Englewood, NJ) lists an abdominal ultrasound at $180, and Happy Heart Imaging Service (Gainesville, FL) lists abdominal complete at $270. A standalone imaging center is usually well below a hospital outpatient department for the same scan. Treat these as estimates and confirm the current price directly with the facility.',
  },
  {
    question: 'How much does a pelvic or transvaginal ultrasound cost out of pocket?',
    answer: 'A pelvic ultrasound is commonly estimated at $100-$700 cash, and a transvaginal ultrasound at roughly $145-$600. Sidecar Health\'s cash-price data puts average pelvic ultrasound costs between about $236 (Iowa) and $335 (Alaska) by state. Published examples include Diagnostic Ultrasound Plus at $250 pelvic / $145 transvaginal and Happy Heart Imaging at $245 for either. Prices vary by state and facility — verify the self-pay rate before booking.',
  },
  {
    question: 'Is it cheaper to pay cash for an ultrasound than to use insurance?',
    answer: 'Often, yes, if you have a high deductible you have not met. The transparent self-pay price at an independent imaging center can be lower than the negotiated rate billed to you before your deductible is satisfied, and there is no surprise bill weeks later. If you have already met your deductible, billing insurance may cost less. Ask for the all-in cash price (including the radiologist read) and compare it to your expected out-of-pocket before deciding.',
  },
  {
    question: 'Where can I get an affordable ultrasound near me?',
    answer: 'Standalone, independent imaging centers and direct-pay diagnostic clinics are typically the most affordable, because they carry lower overhead than hospital outpatient departments. Transparent marketplaces like MDsave let you buy a single upfront price online with no membership and no surprise bill. Shop at least two facilities, request written self-pay quotes, and confirm the quote includes the sonographer scan plus the radiologist interpretation.',
  },
  {
    question: 'Does the ultrasound price include the radiologist reading the images?',
    answer: 'Not always. Some facilities quote only the scan and bill the radiologist interpretation separately, often adding roughly $50-$100. When you ask for a self-pay quote, confirm whether it is all-in (scan plus the radiologist read and report) so two quotes are actually comparable. This is an estimate of the add-on; ask each facility for its exact figure.',
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

export default function UltrasoundCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ultrasound Cost Without Insurance: Cash Prices by Type (2026)',
    description:
      'A practical guide to self-pay ultrasound pricing — cash cost by scan type (abdominal, pelvic, transvaginal, thyroid, OB, vascular), where to get one affordably, and how cash compares to insurance.',
    url: 'https://vitalityscout.com/guides/ultrasound-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ultrasound-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Diagnostic ultrasound (sonography) imaging' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'MDsave — Ultrasound cost (transparent self-pay marketplace)', url: 'https://www.mdsave.com/procedures/ultrasound/d781f5ca' },
      { '@type': 'CreativeWork', name: 'Sidecar Health — Pelvic ultrasound cost by state', url: 'https://cost.sidecarhealth.com/c/pelvic-ultrasound-cost' },
      { '@type': 'CreativeWork', name: 'Diagnostic Ultrasound Plus, Inc. — cash-pay pricing (Englewood, NJ)', url: 'https://www.diagnosticup.com/for-patients/Cash%20Prices/' },
      { '@type': 'CreativeWork', name: 'Happy Heart Imaging Service — self-pay pricing (Gainesville, FL)', url: 'https://happyheartimagingsvc.net/self-pay-pricing' },
      { '@type': 'CreativeWork', name: 'NextGen Diagnostic Imaging — ultrasound cost without insurance (Houston, TX)', url: 'https://nextgenscans.com/ultrasound-cost-without-insurance/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ultrasound-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/ultrasound-cost-without-insurance' };

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
              <span className="text-gray-900">Ultrasound Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Local Clinics &amp; Imaging Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Imaging
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ultrasound Cost Without Insurance: Cash Prices by Type
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              An ultrasound does not have to mean a four-figure hospital bill. Here is what a
              self-pay ultrasound actually costs in 2026 by scan type, where to get one
              affordably, and when paying cash beats using insurance.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, most single-area ultrasounds are estimated at roughly{' '}
                <strong>$100-$600 cash</strong>, with a national average near{' '}
                <strong>$200-$400</strong> at independent imaging centers and more at hospitals.
                Transvaginal scans can start around <strong>$145</strong>; abdominal and pelvic
                often run <strong>$180-$300</strong> at standalone centers. The transparent
                marketplace MDsave lists ultrasounds from about <strong>$116-$495</strong>. Prices
                are estimates that vary by type and facility — get a written self-pay quote. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cash-Price Snapshot (estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Where the price comes from</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Standalone imaging center: ~$200-$400</li>
                  <li>• Hospital outpatient: ~$500-$1,200+</li>
                  <li>• Budget/limited clinics: ~$75-$150</li>
                  <li>• MDsave marketplace: ~$116-$495</li>
                  <li>• Radiologist read may add ~$50-$100</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">By common scan type</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Abdominal: ~$180-$600</li>
                  <li>• Pelvic: ~$100-$700</li>
                  <li>• Transvaginal: ~$145-$600</li>
                  <li>• Thyroid: ~$100-$400</li>
                  <li>• Pregnancy (OB): ~$152-$800</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Ranges are estimates compiled from published self-pay pricing pages and cash-price
              data; confirm the current number with the facility.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Pay cash if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have a high deductible you have not met</li>
                  <li>• You want one upfront price, no surprise bill</li>
                  <li>• An independent imaging center is nearby</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Use insurance if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have already met your deductible</li>
                  <li>• The scan is part of ongoing covered care</li>
                  <li>• Your in-network rate beats the cash quote</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-type" className="text-blue-600 hover:underline">1. Cash ultrasound cost by type</a></li>
              <li><a href="#why-range" className="text-blue-600 hover:underline">2. Why the price range is so wide</a></li>
              <li><a href="#real-clinics" className="text-blue-600 hover:underline">3. Real self-pay pricing examples</a></li>
              <li><a href="#where" className="text-blue-600 hover:underline">4. Where to get one affordably</a></li>
              <li><a href="#cash-vs-insurance" className="text-blue-600 hover:underline">5. Self-pay vs insurance</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to lower the bill</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Things to know before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              An ultrasound (sonography) is one of the cheaper imaging studies to get, but the price
              you pay swings enormously depending on where you go. The same single-area scan can be
              under $200 at an independent imaging center and over $1,000 at a hospital. If you are
              paying out of pocket, the cash market is where the savings live — and it is more
              transparent than most people expect. Here is the honest breakdown.
            </p>

            <h2 id="by-type" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash Ultrasound Cost by Type</h2>

            <p className="text-gray-700 mb-4">
              Ultrasound price tracks mostly with the body area scanned and how much time it takes.
              The figures below are <strong>estimates drawn from published self-pay pricing pages and
              cash-price data</strong>, not live quotes. Use them to set expectations, then confirm
              the current number with the facility.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ultrasound type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical self-pay range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal</td>
                    <td className="border border-gray-300 px-4 py-3">~$180 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">Liver, gallbladder, kidneys, aorta</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pelvic (transabdominal)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $700</td>
                    <td className="border border-gray-300 px-4 py-3">State avg ~$236-$335 (Sidecar data)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Transvaginal</td>
                    <td className="border border-gray-300 px-4 py-3">~$145 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">Often the lowest-cost single scan</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">Small-parts scan; usually quick</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Breast</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $500</td>
                    <td className="border border-gray-300 px-4 py-3">Often paired with a clinical exam</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Testicular / scrotal</td>
                    <td className="border border-gray-300 px-4 py-3">~$250 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">Small-parts scan</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pregnancy (OB)</td>
                    <td className="border border-gray-300 px-4 py-3">~$152 - $800</td>
                    <td className="border border-gray-300 px-4 py-3">Early scan cheaper; anatomy scan higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Carotid / vascular Doppler</td>
                    <td className="border border-gray-300 px-4 py-3">~$180 - $470</td>
                    <td className="border border-gray-300 px-4 py-3">Duplex scans; varies by vessels</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Echocardiogram (heart)</td>
                    <td className="border border-gray-300 px-4 py-3">~$250 - $375</td>
                    <td className="border border-gray-300 px-4 py-3">More involved; cardiac-specific</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Bundled or multi-area scans cost more</h4>
              <p className="text-gray-700">
                Adding a second body area or pairing scans (for example a complete pelvic plus a
                transvaginal study) raises the total but usually costs less than booking two separate
                visits. If your clinician ordered more than one area, ask for a combined self-pay
                price rather than pricing each scan alone.
              </p>
            </div>

            <h2 id="why-range" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why the Price Range Is So Wide</h2>

            <p className="text-gray-700 mb-4">
              A $180 abdominal scan and an $1,100 abdominal scan can be the same study. The
              difference is mostly the facility, not the imaging. Reported national tiers look like
              this:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Budget / limited clinics: ~$75-$150.</strong> Basic scans, sometimes without a full radiologist report.</li>
              <li><strong>Mid-range imaging centers: ~$200-$400.</strong> Includes the scan and a radiologist read; the sweet spot for most self-pay patients.</li>
              <li><strong>Hospital facilities: ~$500-$1,200+.</strong> Higher overhead and facility fees drive the same scan up sharply.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              On the transparent self-pay marketplace MDsave, a single-area ultrasound is listed
              nationally from about <strong>$116 to $495</strong>, with a quoted national average
              near <strong>$219</strong> versus roughly <strong>$401</strong> elsewhere. For pelvic
              ultrasound specifically, Sidecar Health&apos;s cash-price data shows state averages
              between about <strong>$236 (Iowa)</strong> and <strong>$335 (Alaska)</strong> — so
              location matters too.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the single biggest lever on your bill is choosing a
                standalone imaging center over a hospital outpatient department. For the same study,
                that one choice can cut the price by more than half.
              </p>
            </div>

            <h2 id="real-clinics" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real Self-Pay Pricing Examples</h2>

            <p className="text-gray-700 mb-4">
              These are real, currently published cash-pay menus from independent imaging providers.
              They show how transparent the standalone-center market can be — and how much lower it
              runs than a hospital. Prices are what each facility publishes; confirm current rates
              directly with the provider before booking.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Scan</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Diagnostic Ultrasound Plus (Englewood, NJ)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Happy Heart Imaging (Gainesville, FL)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdominal</td>
                    <td className="border border-gray-300 px-4 py-3">$180</td>
                    <td className="border border-gray-300 px-4 py-3">$270 (complete)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pelvic</td>
                    <td className="border border-gray-300 px-4 py-3">$250</td>
                    <td className="border border-gray-300 px-4 py-3">$245 (transabdominal complete)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Transvaginal</td>
                    <td className="border border-gray-300 px-4 py-3">$145</td>
                    <td className="border border-gray-300 px-4 py-3">$245</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid</td>
                    <td className="border border-gray-300 px-4 py-3">$150</td>
                    <td className="border border-gray-300 px-4 py-3">$275</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Carotid duplex</td>
                    <td className="border border-gray-300 px-4 py-3">$180</td>
                    <td className="border border-gray-300 px-4 py-3">$355</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Echocardiogram</td>
                    <td className="border border-gray-300 px-4 py-3">$250</td>
                    <td className="border border-gray-300 px-4 py-3">$375</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              A third example, <strong>NextGen Diagnostic Imaging in Houston, TX</strong>, lists
              ultrasounds typically running <strong>$200-$400</strong> with the scan, certified
              sonographer, and radiologist interpretation included — a useful reminder to always ask
              whether the read is bundled. These are individual facilities and not endorsements; use
              them as a sense of the market, then price the centers near you.
            </p>

            <h2 id="where" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where to Get One Affordably</h2>

            <p className="text-gray-700 mb-4">
              Three practical routes for self-pay ultrasound, cheapest-leaning first:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Independent / standalone imaging centers.</strong> Lower overhead than hospitals; many publish a cash menu and give written quotes up front.</li>
              <li><strong>Transparent self-pay marketplaces.</strong> Platforms like MDsave let you buy a single upfront price online — no membership, no surprise bill — and pick a nearby facility.</li>
              <li><strong>Direct-pay clinics and mobile imaging services.</strong> Many small diagnostic clinics advertise self-pay rates well below hospital pricing for the same study.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Hospital outpatient imaging is the most expensive route for the same scan, so use it
              when your care is already routed through the hospital and covered — not when you are
              paying cash for a one-off study.
            </p>

            <h2 id="cash-vs-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Self-Pay vs Insurance</h2>

            <p className="text-gray-700 mb-4">
              This surprises people: paying cash can cost less than using insurance. If you have a
              high deductible you have not met, the &quot;insured&quot; price is just the full
              negotiated rate billed to you — often higher than a transparent self-pay price at an
              independent imaging center.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>One transparent price:</strong> you see the cost before you commit — no surprise bill weeks later.</li>
              <li><strong>HSA/FSA eligible:</strong> diagnostic imaging ordered for medical care typically qualifies, effectively discounting it by your tax rate.</li>
              <li><strong>No claim, no prior auth:</strong> nothing routes through a payer, so there is no authorization step to wait on.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The trade-off: a self-pay scan may not automatically land in your insurer&apos;s record,
              and the cost does not count toward your deductible. If you have already met your
              deductible, running it through insurance can be cheaper. Get the all-in cash quote and
              compare it to your expected out-of-pocket before deciding.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Lower the Bill</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Choose a standalone imaging center over a hospital.</strong> The single biggest saver for the same study.</li>
              <li><strong>Get written self-pay quotes from two or more facilities.</strong> Prices vary widely block to block.</li>
              <li><strong>Confirm the radiologist read is included.</strong> A separate interpretation fee can add ~$50-$100.</li>
              <li><strong>Ask about a cash discount.</strong> Many facilities discount for paying up front.</li>
              <li><strong>Check a marketplace like MDsave</strong> for a fixed upfront price near you.</li>
              <li><strong>Use HSA/FSA dollars</strong> where the scan is eligible medical care.</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;cheap scan, separate read&quot; pattern</h4>
              <p className="text-gray-700">
                A low headline price can climb once the radiologist interpretation, a second body
                area, or a report fee is added. Ask for the all-in self-pay total before deciding
                which facility is actually cheaper for your specific order.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Book</h2>

            <p className="text-gray-700 mb-4">
              Self-pay ultrasound is convenient and often cheaper, but a balanced view matters:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>An ultrasound is a diagnostic study, not a diagnosis.</strong> The images and report inform a clinician&apos;s decision; they do not replace one.</li>
              <li><strong>Some scans need an order.</strong> Many diagnostic ultrasounds require a clinician&apos;s referral; ask the facility what it needs before you go.</li>
              <li><strong>Findings need follow-up.</strong> Any abnormal result should be reviewed with your healthcare provider, not acted on alone.</li>
              <li><strong>Results may not reach your records.</strong> A self-pay study does not automatically sync to your primary-care chart or insurer.</li>
              <li><strong>Prices and availability change.</strong> The number you see today may differ next week — re-confirm before booking.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost-transparency guides</h3>
            <p className="text-gray-700 mb-4">
              Ultrasound is one piece of the self-pay diagnostics picture. If you are comparison
              shopping cash-pay testing, these help:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Body-composition scanning:</strong> see <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">DEXA vs InBody vs Bod Pod</Link> for self-pay scan pricing.</li>
              <li><strong>Self-order bloodwork:</strong> our <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">blood test without a doctor</Link> guide covers direct-access labs.</li>
              <li><strong>Paying with tax-advantaged dollars:</strong> the same logic in <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="text-blue-600 hover:underline">is a DEXA scan HSA/FSA eligible?</Link> applies to imaging.</li>
              <li><strong>Cash-pay imaging clinics:</strong> browse providers on the <Link href="/dexa-scans" className="text-blue-600 hover:underline">imaging &amp; body-composition directory</Link> and the <Link href="/labs" className="text-blue-600 hover:underline">cash-pay labs directory</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Diagnostic Options</h3>
            <p className="mb-6 text-blue-100">
              See independent imaging and lab clinics side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/local-clinics"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Local Clinics
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
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with the imaging providers named here. Pricing is based on publicly
              available data and third-party cash-price sources and is presented as estimates that
              vary by scan type, location, facility, and current promotions — always verify the
              current price directly with the facility before booking. An ultrasound is a diagnostic
              study, not a substitute for clinical care; abnormal or concerning results should be
              reviewed with a licensed healthcare provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• MDsave — Ultrasound cost, transparent self-pay marketplace (national range and average, body areas covered)</li>
              <li>• Sidecar Health — Pelvic ultrasound cost by state (state-level cash averages)</li>
              <li>• Diagnostic Ultrasound Plus, Inc. — published cash-pay pricing (Englewood, NJ)</li>
              <li>• Happy Heart Imaging Service — published self-pay pricing (Gainesville, FL)</li>
              <li>• NextGen Diagnostic Imaging — ultrasound cost without insurance, national price tiers (Houston, TX)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Imaging Price Cheat Sheet"
            description="Ultrasound by type: how to price the same scan at two facilities and avoid hospital markups."
            source="guide_ultrasound_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
