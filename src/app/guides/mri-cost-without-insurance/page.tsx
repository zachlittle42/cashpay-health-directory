import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'MRI Cost Without Insurance (2026): Cash-Pay Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/mri-cost-without-insurance' },
  description: 'MRI cost without insurance in 2026 — cash prices by body part, why prices vary 5-10x, imaging centers vs hospitals, and how to find the lowest rate.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an MRI cost without insurance?',
    answer: 'A cash-pay MRI without insurance is commonly estimated in the range of about $400 to $2,800, with a national average frequently cited near $1,300-$2,000. Self-pay networks like RadiologyAssist advertise all-inclusive MRI rates starting around $265, and Green Imaging lists scans from about $390 depending on region. Where you go matters more than almost anything else — the same scan can cost 5-10x more at a hospital than at a freestanding imaging center. These are estimates that change by body part, city, and whether contrast is needed; confirm the exact cash price with the facility before booking.',
  },
  {
    question: 'Why is an MRI cheaper at an imaging center than a hospital?',
    answer: 'The biggest driver is the facility fee. Hospitals carry the overhead of running emergency departments and inpatient services, and they add facility fees on top of the scan that freestanding (outpatient) imaging centers generally do not. Multiple cost sources estimate independent imaging centers run roughly 50-70% less than hospital-based departments for the same scan. The image quality is not the difference — both use comparable MRI scanners; the difference is overhead and pricing power. Always price a freestanding center before defaulting to a hospital.',
  },
  {
    question: 'How much does an MRI cost by body part?',
    answer: 'As rough cash-pay estimates: extremity/joint MRIs (knee, shoulder, ankle, wrist) are usually the cheapest at about $400-$1,800 because they scan quickly; spine MRIs run about $700-$2,800 per region; brain MRIs often land around $600-$2,500 without contrast and higher with contrast; and abdominal/pelvic MRIs tend toward $900-$3,500 because they often need contrast and longer scan time. A full-body MRI is a separate, premium product, commonly $2,500-$12,000. Contrast (gadolinium) adds cost. Treat all of these as estimates to confirm with the imaging center.',
  },
  {
    question: 'Can I get an MRI without insurance and without a doctor referral?',
    answer: 'In most cases an MRI still requires a physician order, even when you pay cash, because a clinician needs to specify the body part and protocol. Some cash-pay imaging networks and full-body MRI screening services arrange or facilitate the order for you. Self-pay does not mean self-diagnosis — an MRI is a diagnostic test whose results should be reviewed by a clinician. Ask the facility how to obtain an order if you do not already have one.',
  },
  {
    question: 'Does a cash-pay MRI include the radiologist reading the scan?',
    answer: 'At reputable self-pay imaging networks, yes — the quoted price is meant to be all-inclusive. RadiologyAssist states its flat rate covers the facility fee, the radiologist fee to read the study, a copy of the images, and the formal report. Green Imaging states the cash-pay price is the final price with no separate radiologist charge. The trap to avoid is a low headline scan price at a facility that bills the radiologist read separately. Confirm in writing that the read and report are included before you pay.',
  },
  {
    question: 'Can I use HSA or FSA funds to pay for an MRI?',
    answer: 'Generally yes. An MRI is a qualified medical expense, so HSA and FSA funds typically cover it, and SimonMed, for example, accepts HSA/FSA cards (with no processing fee). Paying with pre-tax HSA/FSA dollars effectively discounts the scan by your tax rate. Confirm eligibility with your plan administrator and keep the itemized receipt and the physician order in case documentation is requested.',
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

export default function MriCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'MRI Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What an MRI costs without insurance in 2026 — cash-pay prices by body part, why the same scan varies 5-10x, how freestanding imaging centers compare to hospitals, and how to find the lowest self-pay rate.',
    url: 'https://vitalityscout.com/guides/mri-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/mri-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Magnetic resonance imaging (MRI)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'RadiologyAssist — nationwide self-pay MRI pricing (all-inclusive flat rate)', url: 'https://radiologyassist.com/MRI.html' },
      { '@type': 'CreativeWork', name: 'Green Imaging — affordable cash-pay MRI, CT, and imaging network', url: 'https://greenimaging.net/' },
      { '@type': 'CreativeWork', name: 'SimonMed — cost estimates and self-pay imaging payment options', url: 'https://www.simonmed.com/cost-estimates/' },
      { '@type': 'CreativeWork', name: 'GoodRx — what the average cost of an MRI is', url: 'https://www.goodrx.com/health-topic/diagnostics/how-much-does-an-mri-cost' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/mri-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/mri-cost-without-insurance' };

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
              <span className="text-gray-900">MRI Cost Without Insurance</span>
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
              MRI Cost Without Insurance: The Cash-Pay Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The same MRI can cost $400 at one place and $4,000 at another. Here is what a scan
              actually costs when you pay cash, why prices swing 5-10x, and how to find the
              lowest self-pay rate.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, an MRI is commonly estimated at <strong>$400-$2,800</strong>, with
                a national average near <strong>$1,300-$2,000</strong>. But cash-pay imaging networks
                price far lower: <strong>RadiologyAssist</strong> advertises all-inclusive MRIs from
                about <strong>$265</strong>, and <strong>Green Imaging</strong> from about{' '}
                <strong>$390</strong>. Where you go matters most — a freestanding imaging center
                often runs <strong>50-70% less</strong> than a hospital for the identical scan. These
                are estimates to verify with the facility. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Cash-pay imaging centers</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• MRI from ~$265-$390 (estimate)</li>
                  <li>• All-inclusive: read + report included</li>
                  <li>• Lower facility overhead</li>
                  <li>• Best for price-shoppers</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Hospital-based MRI</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Often $1,200-$7,000+ (estimate)</li>
                  <li>• Adds a facility fee</li>
                  <li>• Same scanner technology</li>
                  <li>• Convenient if already admitted</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Pay cash at a center if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have a high deductible you haven&apos;t met</li>
                  <li>• You want a single all-in price up front</li>
                  <li>• Your scan is routine (joint, spine, brain)</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Check insurance first if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You&apos;ve already met your deductible</li>
                  <li>• The MRI is urgent or hospital-ordered</li>
                  <li>• You need it on your medical record</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#average" className="text-blue-600 hover:underline">1. What an MRI costs without insurance</a></li>
              <li><a href="#by-body-part" className="text-blue-600 hover:underline">2. MRI cost by body part</a></li>
              <li><a href="#why-vary" className="text-blue-600 hover:underline">3. Why prices vary 5-10x</a></li>
              <li><a href="#centers" className="text-blue-600 hover:underline">4. Cash-pay imaging networks vs hospitals</a></li>
              <li><a href="#full-body" className="text-blue-600 hover:underline">5. Full-body MRI is a different product</a></li>
              <li><a href="#find-lowest" className="text-blue-600 hover:underline">6. How to find the lowest price</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Things to know before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              An MRI is one of the worst examples of healthcare price chaos in the United States. The
              exact same scan, on a comparable machine, can be billed at $400 in one ZIP code and
              $4,000 a few miles away. If you are paying out of pocket, that variation is your
              opportunity: cash-pay imaging is one of the few corners of US healthcare where shopping
              the price genuinely works. Here is the honest breakdown of what you will pay and how to
              pay the least.
            </p>

            <h2 id="average" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What an MRI Costs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Cost-comparison sources generally put a single cash-pay MRI in a wide band of roughly{' '}
              <strong>$400 to $2,800</strong>, with a national average frequently cited around{' '}
              <strong>$1,300 to $2,000</strong>. That spread is so large because &quot;an MRI&quot; is
              not one thing — the body part, whether contrast is used, the facility type, and your
              city all move the number.
            </p>

            <p className="text-gray-700 mb-4">
              The headline figure most people fear comes from hospitals. But dedicated self-pay
              imaging networks publish dramatically lower flat rates. <strong>RadiologyAssist</strong>,
              a nationwide self-pay scheduling network that says it works with 1,000+ imaging centers
              across more than 44 states, advertises all-inclusive MRI rates starting around{' '}
              <strong>$265</strong> (without contrast). <strong>Green Imaging</strong>, a
              radiologist-led cash-pay network, lists MRIs from about <strong>$390</strong> depending
              on region and frames it directly: &quot;why pay $1,200 to $7,000 for a hospital MRI when
              ours cost as low as $390?&quot;
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the gap between the $265-$390 network rate and the
                $1,200-$7,000 hospital rate is not a difference in scan quality. It is a difference in
                overhead and pricing power. For a self-pay patient, the single highest-leverage
                decision is choosing where you get scanned.
              </p>
            </div>

            <h2 id="by-body-part" className="text-2xl font-bold text-gray-900 mt-12 mb-6">MRI Cost by Body Part</h2>

            <p className="text-gray-700 mb-4">
              Price tracks scan time and complexity. Joints scan fast and cost the least; abdominal
              and pelvic studies take longer, often need contrast, and cost more. The figures below
              are <strong>estimates compiled from published cost guides</strong>, not live quotes —
              use them to set expectations, then price your specific scan at a real facility.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">MRI type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash-pay range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Knee / shoulder / ankle / wrist (extremity)</td>
                    <td className="border border-gray-300 px-4 py-3">~$400 - $1,800</td>
                    <td className="border border-gray-300 px-4 py-3">Cheapest; fast scans, rarely contrast</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Spine (per region: cervical / thoracic / lumbar)</td>
                    <td className="border border-gray-300 px-4 py-3">~$700 - $2,800</td>
                    <td className="border border-gray-300 px-4 py-3">Priced per region; multiple regions add up</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brain / head</td>
                    <td className="border border-gray-300 px-4 py-3">~$600 - $2,500 (no contrast)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher with contrast</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abdomen / pelvis</td>
                    <td className="border border-gray-300 px-4 py-3">~$900 - $3,500</td>
                    <td className="border border-gray-300 px-4 py-3">Often needs contrast + longer scan time</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">With contrast (add-on)</td>
                    <td className="border border-gray-300 px-4 py-3">Adds ~$100 - $500+</td>
                    <td className="border border-gray-300 px-4 py-3">Gadolinium + extra time; varies by facility</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full-body MRI screening</td>
                    <td className="border border-gray-300 px-4 py-3">~$650 - $12,000</td>
                    <td className="border border-gray-300 px-4 py-3">Separate product (see below); wide spread</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> a knee MRI at a freestanding center can land near the
              bottom of these ranges, while the same knee MRI at a hospital can sit near the top — or
              higher. The body part sets the floor; the facility sets the ceiling.
            </p>

            <h2 id="why-vary" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why MRI Prices Vary 5-10x</h2>

            <p className="text-gray-700 mb-4">
              Three forces explain almost the entire spread:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Facility fees.</strong> Hospitals carry the overhead of emergency departments and inpatient care, and they add a facility fee on top of the scan. Cost sources estimate facility fees can add a meaningful share of a hospital bill. Freestanding outpatient imaging centers generally do not charge them.</li>
              <li><strong>Pricing power and no price ceiling.</strong> There is no federal cap on what a facility can charge for an MRI, so prices for the identical scan can differ enormously between two facilities in the same metro. Hospitals have historically been able to charge more simply because payers and self-pay patients paid it.</li>
              <li><strong>The scan itself.</strong> Contrast, scan length, and whether multiple body regions are imaged all add cost. A no-contrast extremity scan is the cheapest possible MRI; a multi-region contrast study is among the priciest.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              What does <em>not</em> usually explain the gap is image quality. Freestanding centers
              and hospitals both run comparable MRI scanners. The difference you are paying for at a
              hospital is overhead and billing structure, not a better picture.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The 50-70% rule of thumb</h4>
              <p className="text-gray-700">
                Multiple cost-transparency sources estimate that independent imaging centers run
                roughly <strong>50-70% less</strong> than hospital-based departments for the same
                scan. If your only quote is from a hospital, treat it as the ceiling and get at least
                one freestanding-center quote before you pay.
              </p>
            </div>

            <h2 id="centers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash-Pay Imaging Networks vs Hospitals</h2>

            <p className="text-gray-700 mb-4">
              For self-pay patients, the most useful development is the rise of cash-pay imaging
              networks that publish flat, all-inclusive rates. These are real, established providers —
              here is how the most-searched ones work.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Starting MRI (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What&apos;s included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">RadiologyAssist</td>
                    <td className="border border-gray-300 px-4 py-3">Nationwide self-pay scheduling, 1,000+ centers in 44+ states</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$265</td>
                    <td className="border border-gray-300 px-4 py-3">Facility fee, radiologist read, images, formal report</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Green Imaging</td>
                    <td className="border border-gray-300 px-4 py-3">Radiologist-led cash-pay network, partner centers in all 50 states</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$390 (by region)</td>
                    <td className="border border-gray-300 px-4 py-3">Final price; radiologist read included, no surprise bill</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">SimonMed</td>
                    <td className="border border-gray-300 px-4 py-3">Large outpatient imaging operator; cash price on request</td>
                    <td className="border border-gray-300 px-4 py-3">Call/chat for quote; whole-body ~$650</td>
                    <td className="border border-gray-300 px-4 py-3">Accepts HSA/FSA (no fee); 3% fee on credit cards</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The key feature to verify with any of them is <strong>all-inclusive pricing</strong>.
              RadiologyAssist states its flat rate covers the facility fee, the radiologist fee to
              read the study, a copy of the images, and the formal report. Green Imaging states the
              cash-pay price is the final price with no separate radiologist charge. That matters
              because a low headline scan price at a facility that bills the radiologist read
              separately can quietly become a two-line bill.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Get the all-in number in writing</h4>
              <p className="text-gray-700">
                Before you book, ask one question: &quot;Is this the total price, including the
                radiologist reading and the report?&quot; A real cash-pay imaging network will say
                yes. If a facility hedges, that is the warning sign that the read is billed
                separately.
              </p>
            </div>

            <h2 id="full-body" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Full-Body MRI Is a Different Product</h2>

            <p className="text-gray-700 mb-4">
              &quot;Full-body MRI&quot; usually means an elective screening scan, not a diagnostic
              study ordered for a specific symptom — and it is priced as a separate, premium product.
              Estimates run anywhere from about <strong>$650 to $12,000</strong> depending on the
              provider. <strong>SimonMed</strong>, for instance, has marketed a whole-body MRI
              (SimonOne) at roughly <strong>$650</strong>, covering a large set of body structures in
              a shorter scan, versus the higher prices some competitors charge for a 60-minute scan.
              Premium concierge full-body MRI services sit far higher.
            </p>

            <p className="text-gray-700 mb-4">
              A full-body MRI is a screening choice, not a diagnosis. It can surface findings that
              need follow-up — some meaningful, many incidental — so it is best approached with a
              clinician who can interpret the report in context. For comparison and tracking
              alongside imaging, many people pair it with body-composition testing; see our{' '}
              <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">DEXA vs InBody vs Bod Pod guide</Link>.
            </p>

            <h2 id="find-lowest" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Find the Lowest MRI Price</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get the physician order with the exact body part.</strong> The order specifies the scan and whether contrast is needed — that determines the price.</li>
              <li><strong>Quote a cash-pay imaging network.</strong> Price the scan through RadiologyAssist or Green Imaging, which exist specifically to surface low self-pay rates at freestanding centers.</li>
              <li><strong>Quote a freestanding center directly.</strong> Call an independent outpatient imaging center near you and ask for the all-in self-pay price for your specific scan.</li>
              <li><strong>Skip the hospital quote unless it&apos;s urgent.</strong> Hospital MRI is the most expensive route for routine, non-emergency scans.</li>
              <li><strong>Ask about a cash discount.</strong> Many facilities discount the self-pay price further when you pay up front rather than billing insurance.</li>
              <li><strong>Pay with HSA/FSA.</strong> An MRI is a qualified expense; pre-tax dollars effectively discount it by your tax rate.</li>
            </ol>

            <p className="text-gray-700 mb-4">
              The same logic applies across cash-pay diagnostics. If you are price-shopping
              bloodwork at the same time, our guides on{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">the cheapest blood test panels</Link>{' '}
              and{' '}
              <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">how to get a blood test without a doctor</Link>{' '}
              use the same self-pay playbook.
            </p>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Book</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>An MRI usually still needs an order.</strong> Even paying cash, most facilities require a physician order specifying the body part and protocol.</li>
              <li><strong>Confirm the read and report are included.</strong> The scan price should cover the radiologist interpretation, not just the machine time.</li>
              <li><strong>Contrast changes the price.</strong> A with-contrast study costs more than the same scan without contrast.</li>
              <li><strong>Self-pay may not reach your records.</strong> A cash scan does not automatically sync to your insurer or primary-care chart, and it may not count toward your deductible.</li>
              <li><strong>Results need a clinician.</strong> An MRI is a diagnostic test, not an answer. Findings should be reviewed by a healthcare provider who can see your full picture.</li>
              <li><strong>Prices and rates change.</strong> The estimates here move by facility, city, and over time — always confirm the current number before you pay.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;low scan, separate read&quot; trap</h4>
              <p className="text-gray-700">
                A facility can advertise a low MRI price and then bill the radiologist&apos;s reading
                as a separate line item. The all-inclusive networks above exist precisely to avoid
                this. Always get the total — scan plus read plus report — before you commit.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other cash-pay services to price-shop</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Body composition:</strong> our <Link href="/guides/dexa-scan-cost-los-angeles" className="text-blue-600 hover:underline">DEXA scan cost guide</Link> shows the same hospital-vs-center price spread for body scans</li>
              <li><strong>Cash-pay labs:</strong> compare self-pay bloodwork on the <Link href="/labs" className="text-blue-600 hover:underline">at-home lab testing directory</Link></li>
              <li><strong>Local clinics &amp; imaging:</strong> browse cash-pay options on the <Link href="/local-clinics" className="text-blue-600 hover:underline">local clinics directory</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Health Services</h3>
            <p className="mb-6 text-blue-100">
              From imaging to labs to body composition — see transparent self-pay pricing in one place.
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
              not affiliated with RadiologyAssist, Green Imaging, or SimonMed. Pricing is based on
              publicly available data and provider websites and is presented as estimates that vary by
              body part, facility, location, contrast use, and current promotions — always verify the
              current price directly with the imaging provider before booking. An MRI is a diagnostic
              test that typically requires a physician order; results should be reviewed with a
              licensed healthcare provider. VitalityScout may earn a commission from some links, at no
              additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• RadiologyAssist — radiologyassist.com (all-inclusive self-pay MRI flat rate, network size, what is included)</li>
              <li>• Green Imaging — greenimaging.net (cash-pay MRI from ~$390, radiologist read included, nationwide network)</li>
              <li>• SimonMed — simonmed.com/cost-estimates (self-pay cash price on request, HSA/FSA, whole-body MRI)</li>
              <li>• GoodRx — goodrx.com (average MRI cost, hospital vs imaging center, facility fees)</li>
              <li>• Published MRI cost guides (typical cash-pay ranges by body part)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Imaging Price Cheat Sheet"
            description="How to price an MRI at a freestanding center and avoid the hospital facility fee."
            source="guide_mri_cost_without_insurance"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
