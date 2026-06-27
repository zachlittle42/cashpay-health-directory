import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Dental Implant Cost Without Insurance (USA, 2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dental-implant-cost-usa' },
  description:
    'US dental implant cost without insurance: single tooth $3,000-$5,000, All-on-4 $20,000-$38,000 per arch. What drives price, financing, and US vs abroad.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a single dental implant cost without insurance in the US?',
    answer:
      'A single tooth implant in the US is commonly estimated at roughly $3,000-$5,000 self-pay in 2026, with a national average often cited near $4,500. That figure covers the three pieces of a complete implant: the titanium post (estimated ~$1,000-$2,000), the abutment (~$300-$500), and the crown (~$700-$2,500). Add-ons like a tooth extraction (~$75-$650) or a bone graft (~$200-$3,000) are billed on top. These are estimates that vary by region, materials, and the specific case — get an itemized written quote from the practice before you commit.',
  },
  {
    question: 'How much do All-on-4 / full-arch dental implants cost in the US?',
    answer:
      'For a full arch (one upper or one lower jaw), US self-pay estimates commonly run about $20,000-$38,000 per arch in 2026, driven mostly by the prosthesis material — an acrylic/PMMA hybrid is typically estimated around $15,000-$25,000 per arch, while a zirconia bridge runs higher, roughly $25,000-$38,000. Both arches together commonly total $30,000-$70,000 or more. National networks publish their own averages: ClearChoice lists fixed full-arch from about $14,000-$36,000 per arch, and Aspen Dental cites an average near $19,979 per arch for fixed full-arch. Confirm the all-in number, including extractions and sedation, in writing.',
  },
  {
    question: 'Why are dental implants so expensive in the US?',
    answer:
      'The price reflects a surgical procedure plus custom lab work, not just a part. You are paying for 3D imaging and planning, the implant components, the surgeon or specialist time, sedation, a custom crown or bridge fabricated in a dental lab, and follow-up visits. Material (zirconia costs more than acrylic), implant brand, the number of teeth, and whether you need extractions, a bone graft, or a sinus lift all move the total. Geography matters too — the same procedure costs more in higher-cost metros. A low "starting at" headline price often excludes the abutment, crown, or scans, so compare itemized quotes.',
  },
  {
    question: 'How can I pay for dental implants without insurance?',
    answer:
      'Common cash-pay routes include health-care financing cards like CareCredit (which advertises no-interest plans over 6, 12, 18, or 24 months if you pay the balance before the promo ends, plus reduced-APR fixed plans on larger purchases — note deferred interest, recently around 32.99% APR, applies if a balance remains), in-house practice payment plans, and HSA/FSA funds, since implants for a medical/functional need are often eligible. Accredited dental-school clinics (for example NYU and Tufts) treat patients at supervised, reduced fees, frequently well below private practice. Confirm current terms and eligibility directly with the lender, practice, or plan administrator.',
  },
  {
    question: 'Is it cheaper to get dental implants abroad than in the US?',
    answer:
      'Often yes on sticker price — full-arch and All-on-4 packages in Mexico, Costa Rica, and similar destinations are frequently estimated at a large discount to US self-pay. But the honest comparison includes flights, lodging, time off, follow-up care if something needs adjusting, and the work of vetting an accredited clinic and surgeon. For a single implant the travel cost can erase the savings; for full-mouth work the gap is larger. We cover the cross-border math in our dental implants abroad and full-mouth-by-country guides — treat any quote as an estimate to verify with the specific clinic.',
  },
  {
    question: 'Does dental insurance cover implants, and what if I do not have it?',
    answer:
      'When people do have dental coverage, plans more often help with the crown and abutment than with the surgical placement of the implant post itself, and annual maximums are usually low relative to implant cost. Without insurance, you pay the full self-pay price, but you can still use HSA/FSA dollars, financing, dental-school clinics, and discount/savings plans (which are not insurance) to lower the out-of-pocket burden. Verify exactly what any plan or savings program covers before assuming a portion is paid.',
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

export default function DentalImplantCostUsa() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Dental Implant Cost Without Insurance in the US (2026)',
    description:
      'What dental implants cost without insurance in the US in 2026 — single tooth, All-on-4 and full-mouth per-arch estimates, what drives the price, financing options, and how US pricing compares to going abroad.',
    url: 'https://vitalityscout.com/guides/dental-implant-cost-usa',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dental-implant-cost-usa#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Dental implant placement' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'ClearChoice — Dental Implants Cost Guide (single, full-arch, implant denture pricing)', url: 'https://www.clearchoice.com/dental-implant-financing-and-costs/dental-implants-cost-guide/' },
      { '@type': 'CreativeWork', name: 'Aspen Dental — Full Mouth Dental Implants Cost (per-arch averages, financing)', url: 'https://www.aspendental.com/dental-implants/full-mouth-dental-implants/full-mouth-dental-implants-cost/' },
      { '@type': 'CreativeWork', name: 'CareCredit — Dentistry financing (promotional and reduced-APR plans)', url: 'https://www.carecredit.com/dentistry/' },
      { '@type': 'CreativeWork', name: 'GoodRx — How Much Do Dental Implants Cost?', url: 'https://www.goodrx.com/health-topic/procedures/dental-implant-cost' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dental-implant-cost-usa#faq', url: 'https://vitalityscout.com/guides/dental-implant-cost-usa' };

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
              <span className="text-gray-900">Dental Implant Cost (USA)</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical Tourism &amp; Dental Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dental Implant Cost Without Insurance in the US (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              From a single tooth to a full mouth, here is what implants actually cost when you pay
              cash in the United States — what each line item is, what drives the price, how to
              finance it, and how US pricing compares to going abroad.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a <strong>single dental implant in the US is commonly estimated at
                $3,000-$5,000</strong> (post, abutment, and crown), with a national average near
                $4,500. A full arch (<strong>All-on-4</strong>) typically runs{' '}
                <strong>$20,000-$38,000 per arch</strong> — acrylic on the low end, zirconia on the
                high end — and both arches can total $30,000-$70,000+. Extractions and bone grafts
                add cost. Prices are estimates that vary by region, material, and case — get an
                itemized written quote. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick cost box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cost Snapshot (US, self-pay)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Single tooth</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Complete implant: ~$3,000-$5,000 (estimate)</li>
                  <li>• Titanium post: ~$1,000-$2,000</li>
                  <li>• Abutment: ~$300-$500</li>
                  <li>• Crown: ~$700-$2,500</li>
                  <li>• Extraction add-on: ~$75-$650</li>
                  <li>• Bone graft add-on: ~$200-$3,000</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Full arch (All-on-4)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Per arch: ~$20,000-$38,000 (estimate)</li>
                  <li>• Acrylic/PMMA hybrid: ~$15,000-$25,000</li>
                  <li>• Zirconia bridge: ~$25,000-$38,000</li>
                  <li>• Both arches: ~$30,000-$70,000+</li>
                  <li>• Implant denture (snap-on): lower-cost option</li>
                  <li>• Excludes extras unless quoted all-in</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">A single missing tooth?</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Budget ~$3,000-$5,000 plus any extraction/graft</li>
                  <li>• Compare itemized quotes, not headline prices</li>
                  <li>• HSA/FSA + financing can spread the cost</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">A full mouth?</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Per-arch material choice drives most of the price</li>
                  <li>• Get the all-in number (extractions, sedation)</li>
                  <li>• The savings gap vs abroad is largest here</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#single" className="text-blue-600 hover:underline">1. Single implant cost, line by line</a></li>
              <li><a href="#full-arch" className="text-blue-600 hover:underline">2. All-on-4 &amp; full-mouth cost by type</a></li>
              <li><a href="#networks" className="text-blue-600 hover:underline">3. What national networks charge</a></li>
              <li><a href="#drivers" className="text-blue-600 hover:underline">4. What drives the price</a></li>
              <li><a href="#financing" className="text-blue-600 hover:underline">5. How to pay without insurance</a></li>
              <li><a href="#us-vs-abroad" className="text-blue-600 hover:underline">6. US vs abroad: the honest math</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to save in the US</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A dental implant is not a single product with a single price — it is a surgical
              procedure plus custom lab work, billed in pieces. That is why quotes vary so much, and
              why the &quot;starting at&quot; number you see in an ad rarely matches the bill. Below
              is what the components actually cost when you pay cash in the US, what makes one quote
              higher than another, and the realistic ways to bring the out-of-pocket cost down.
            </p>

            <h2 id="single" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Single Implant Cost, Line by Line</h2>

            <p className="text-gray-700 mb-4">
              A complete single-tooth implant in the US is commonly estimated at{' '}
              <strong>$3,000-$5,000</strong> self-pay, with a national average often cited around
              $4,500. That price replaces one tooth with three connected parts: the post that
              integrates with the bone, the connector on top, and the visible crown.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Component</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical self-pay estimate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it is</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Titanium implant post</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,000 - $2,000</td>
                    <td className="border border-gray-300 px-4 py-3">The screw placed in the jawbone</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abutment</td>
                    <td className="border border-gray-300 px-4 py-3">~$300 - $500</td>
                    <td className="border border-gray-300 px-4 py-3">Connector between post and crown</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Crown</td>
                    <td className="border border-gray-300 px-4 py-3">~$700 - $2,500</td>
                    <td className="border border-gray-300 px-4 py-3">The custom tooth (porcelain/zirconia)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tooth extraction (if needed)</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $650</td>
                    <td className="border border-gray-300 px-4 py-3">Removing the failing tooth first</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Bone graft (if needed)</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $3,000</td>
                    <td className="border border-gray-300 px-4 py-3">Rebuilding bone to anchor the post</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why headline prices mislead:</strong> some practices advertise only the post
                (the titanium screw) to make the number look small. A quote far below the typical
                range often excludes the abutment, crown, scans, or lab work — which return later as
                unexpected charges. Ask for an itemized estimate that lists every component.
              </p>
            </div>

            <h2 id="full-arch" className="text-2xl font-bold text-gray-900 mt-12 mb-6">All-on-4 &amp; Full-Mouth Cost by Type</h2>

            <p className="text-gray-700 mb-4">
              When most teeth in a jaw are missing or failing, the economical option is a full-arch
              restoration — four or more implants supporting one fixed bridge (commonly marketed as
              <strong> All-on-4</strong>), rather than one implant per tooth. The single biggest cost
              lever is the <strong>prosthesis material</strong>.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical US estimate (per arch)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-on-4, acrylic/PMMA hybrid</td>
                    <td className="border border-gray-300 px-4 py-3">~$15,000 - $25,000</td>
                    <td className="border border-gray-300 px-4 py-3">Most common full-arch choice</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-on-4, zirconia bridge</td>
                    <td className="border border-gray-300 px-4 py-3">~$25,000 - $38,000</td>
                    <td className="border border-gray-300 px-4 py-3">More durable, higher cost</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full arch (overall range)</td>
                    <td className="border border-gray-300 px-4 py-3">~$20,000 - $38,000</td>
                    <td className="border border-gray-300 px-4 py-3">Varies with implant count + material</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Both arches (full mouth)</td>
                    <td className="border border-gray-300 px-4 py-3">~$30,000 - $70,000+</td>
                    <td className="border border-gray-300 px-4 py-3">Two arches; extras can push higher</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Implant-supported denture (snap-on)</td>
                    <td className="border border-gray-300 px-4 py-3">lower than fixed full-arch</td>
                    <td className="border border-gray-300 px-4 py-3">Removable; fewer implants, cheaper</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Acrylic vs zirconia: the trade-off</h4>
              <p className="text-gray-700">
                An acrylic/PMMA hybrid bridge is the most commonly placed full-arch option and the
                more affordable one. Zirconia costs more but is harder and more stain-resistant.
                Neither choice is &quot;right&quot; for everyone — it is a durability-versus-budget
                decision to make with your surgeon, not a price to optimize in isolation.
              </p>
            </div>

            <h2 id="networks" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What National Networks Actually Charge</h2>

            <p className="text-gray-700 mb-4">
              Two of the largest US implant providers publish their own pricing, which is useful as a
              real-world reference point. These are <strong>estimates the companies state on their own
              sites</strong> and vary by location and case — confirm a written quote from your local
              center.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Single tooth</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fixed full arch (per arch)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Implant denture (per arch)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">ClearChoice</td>
                    <td className="border border-gray-300 px-4 py-3">~$5,000 - $7,500</td>
                    <td className="border border-gray-300 px-4 py-3">~$14,000 - $36,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$8,000 - $13,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Aspen Dental</td>
                    <td className="border border-gray-300 px-4 py-3">Single implants offered (varies)</td>
                    <td className="border border-gray-300 px-4 py-3">avg ~$19,979 (~$19,315-$30,878)</td>
                    <td className="border border-gray-300 px-4 py-3">avg ~$8,289 (~$7,628-$13,297)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Both offer free or low-cost consultations with 3D imaging and a written estimate before
              you commit, and both bundle the surgeon, prosthodontist, and lab into one quoted price.
              An independent oral surgeon or prosthodontist in your area may quote differently in
              either direction — get at least two itemized estimates.
            </p>

            <h2 id="drivers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Drives the Price</h2>

            <p className="text-gray-700 mb-4">
              Two patients can get the same procedure name and pay thousands apart. The main levers:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Number of teeth:</strong> one implant vs a full arch vs both arches is the biggest factor by far.</li>
              <li><strong>Prosthesis material:</strong> zirconia costs more than an acrylic/PMMA hybrid.</li>
              <li><strong>Pre-implant work:</strong> extractions, bone grafts, sinus lifts, or gum-disease treatment add cost.</li>
              <li><strong>Implant brand and technology:</strong> premium systems and guided surgery raise the price.</li>
              <li><strong>Surgeon and sedation:</strong> specialist time and IV sedation are billed.</li>
              <li><strong>Geography:</strong> the same procedure costs more in higher-cost metros.</li>
              <li><strong>What is bundled:</strong> an all-in quote vs an a-la-carte one changes the headline number.</li>
            </ul>

            <h2 id="financing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              You do not need dental insurance to make implants affordable, but you do need to plan
              the payment. The realistic cash-pay routes:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Health-care financing (e.g., CareCredit):</strong> advertises no-interest plans
                over 6, 12, 18, or 24 months if you pay the full balance before the promo window
                closes, plus reduced-APR fixed-payment plans on larger purchases. The catch is{' '}
                <strong>deferred interest</strong> — if a balance remains when the promo ends, interest
                (recently cited around 32.99% APR) is added back to the original amount. Pay it off
                inside the window or treat it as a real loan.
              </li>
              <li><strong>In-house payment plans:</strong> many practices and networks split the cost into monthly payments directly.</li>
              <li><strong>HSA/FSA funds:</strong> implants for a medical/functional need are often eligible, effectively discounting them by your tax rate — confirm with your plan administrator.</li>
              <li><strong>Dental-school clinics:</strong> accredited programs (for example NYU and Tufts) treat patients under faculty supervision at substantially reduced fees.</li>
              <li><strong>Discount/savings plans:</strong> dental savings plans (which are not insurance) can reduce member pricing at participating practices.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>A worked example:</strong> a quoted full-arch case financed on a 12-month
                no-interest plan turns a $19,000 number into roughly $1,580/month — manageable for
                some, not for others. Run the monthly figure before you sign, and confirm the promo
                terms in writing.
              </p>
            </div>

            <h2 id="us-vs-abroad" className="text-2xl font-bold text-gray-900 mt-12 mb-6">US vs Abroad: The Honest Math</h2>

            <p className="text-gray-700 mb-4">
              Cross-border dental care is real and popular, and on sticker price, full-arch packages
              in destinations like Mexico and Costa Rica are frequently estimated at a large discount
              to US self-pay. But the comparison is not just the quote — it is the all-in cost and the
              risk.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>For a single implant,</strong> flights, lodging, and time off can erase much of the savings.</li>
              <li><strong>For full-mouth work,</strong> the dollar gap is larger, so the math more often favors traveling — for some patients.</li>
              <li><strong>Follow-up matters:</strong> adjustments or complications are harder to manage from another country.</li>
              <li><strong>Vetting is the real work:</strong> verify the clinic&apos;s accreditation and the surgeon&apos;s credentials before booking.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you are weighing it, start with the cross-border numbers and the clinic-vetting
              checklist in these companion guides — and treat every quote as an estimate to confirm
              with the specific clinic:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>By country:</strong> our <Link href="/guides/dental-implants-abroad-cost-comparison" className="text-blue-600 hover:underline">dental implants abroad cost comparison</Link> covers per-implant and full-arch prices across Mexico, Costa Rica, Colombia, Turkey, Hungary and Poland.</li>
              <li><strong>Full mouth abroad:</strong> the <Link href="/guides/full-mouth-dental-implants-cost-by-country" className="text-blue-600 hover:underline">full-mouth dental implants by country</Link> guide breaks down All-on-4 vs All-on-6 per-arch quotes.</li>
              <li><strong>The popular wedge:</strong> <Link href="/guides/all-on-4-dental-implants-mexico" className="text-blue-600 hover:underline">All-on-4 dental implants in Mexico</Link> details Tijuana and Cancun clinics and trip planning.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save in the US</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get itemized quotes from two or three providers,</strong> including at least one independent surgeon — not just a national network.</li>
              <li><strong>Ask what the headline price excludes</strong> (abutment, crown, scans, extractions, sedation) so you compare like for like.</li>
              <li><strong>Consider a dental-school clinic</strong> for substantially reduced, faculty-supervised fees if you can accept a longer timeline.</li>
              <li><strong>Choose material by need,</strong> not prestige — an acrylic hybrid is often the value choice for full-arch.</li>
              <li><strong>Use HSA/FSA dollars and structure financing</strong> so you can clear a no-interest promo before deferred interest hits.</li>
              <li><strong>Run the cross-border math</strong> for full-mouth cases, where the savings gap is widest — using the guides above.</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The single most useful move</h4>
              <p className="text-gray-700">
                Get a written, itemized estimate before you commit anywhere. It is the only way to
                compare a $4,500 single implant or a $19,000 arch across providers — and it is the
                fastest way to catch a low headline price that quietly drops the crown or the scans.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Dental Options</h3>
            <p className="mb-6 text-blue-100">
              Weighing US implants against going abroad? See transparent cost comparisons and
              clinic-vetting guides before you book.
            </p>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Dental Cost Guides
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
              This guide is for general informational purposes only and is not medical or dental
              advice. We are not affiliated with ClearChoice, Aspen Dental, CareCredit, or any
              provider named here. Pricing is based on publicly available data and providers&apos; own
              published figures and is presented as estimates that vary by region, materials, provider,
              and individual case — always confirm a current, itemized quote directly with a licensed
              provider before committing. Dental implant treatment is a surgical procedure; candidacy,
              risks, and outcomes should be discussed with a licensed dentist or oral surgeon.
              Affiliate disclosure: VitalityScout may earn a commission from some links, at no
              additional cost to you, which never affects how we describe providers.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• ClearChoice — Dental Implants Cost Guide (single, full-arch, and implant-denture pricing; cost drivers; free consultation)</li>
              <li>• Aspen Dental — Full Mouth Dental Implants Cost (per-arch average and range for fixed full-arch and implant dentures; financing)</li>
              <li>• CareCredit — Dentistry financing (promotional no-interest and reduced-APR plan terms)</li>
              <li>• GoodRx — How Much Do Dental Implants Cost? (single-implant and component cost ranges)</li>
              <li>• Published 2026 US dental-implant cost guides (component, All-on-4 acrylic vs zirconia, bone graft, and extraction estimate ranges; dental-school discount programs)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Dental Implant Cost Cheat Sheet"
            description="US vs abroad pricing, the line items to ask for, and how to compare an itemized implant quote."
            source="guide_dental_implant_cost_usa"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
