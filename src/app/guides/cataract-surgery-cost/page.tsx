import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Cataract Surgery Cost Without Insurance (2026 Guide)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cataract-surgery-cost' },
  description:
    'Cataract surgery cost without insurance in 2026: standard vs premium lens prices per eye, surgery center vs hospital, plus what Medicare covers.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does cataract surgery cost without insurance per eye?',
    answer:
      'For self-pay, standard cataract surgery with a basic monofocal lens is commonly estimated in the range of roughly $3,000-$6,000 per eye, with some clinics quoting the basic procedure nearer $2,000-$3,000. Choosing a premium lens or laser-assisted surgery pushes the all-in price toward $6,000-$7,000+ per eye. Both eyes are usually done a week or two apart, so budget per eye and ask whether the quote is bundled or itemized. These are estimates that vary by surgeon, lens, facility, and region — get an itemized self-pay quote from the practice before you commit.',
  },
  {
    question: 'Does Medicare cover cataract surgery in 2026?',
    answer:
      'Yes. Original Medicare (Part B) treats cataract surgery as medically necessary and covers a standard monofocal lens plus the procedure. After you meet the annual Part B deductible, Medicare pays 80% and you pay the remaining 20% coinsurance. Out-of-pocket for standard surgery is often estimated around $384 per eye at an ambulatory surgery center and up to roughly $598 at a hospital outpatient department, and one source puts the patient share under $600 per eye. Premium lenses and laser-assisted surgery are not covered — you pay that upgrade yourself. Confirm your exact share with the practice and your plan.',
  },
  {
    question: 'What is the difference between a standard and a premium cataract lens cost?',
    answer:
      'A standard (monofocal) intraocular lens corrects vision at one distance and is the lens insurance and Medicare cover; many people still need glasses afterward. Premium lenses are an out-of-pocket upgrade: a toric (astigmatism-correcting) lens is commonly estimated at an extra $1,000-$2,500 per eye, and a presbyopia-correcting lens (multifocal, EDOF, or accommodating) at an extra $2,000-$3,500 per eye, on top of the base surgery. These upgrade ranges are estimates — ask the surgeon to itemize the lens fee separately from the surgical fee.',
  },
  {
    question: 'Is cataract surgery cheaper at a surgery center or a hospital?',
    answer:
      'Usually at an ambulatory surgery center (ASC). The surgeon fee is the same person either way, but the facility fee — the charge for the building and staff — tends to be lower at an ASC than at a hospital outpatient department, by an estimated 30%-50% for cataract surgery. For Medicare patients that often shows up as a lower per-eye out-of-pocket at an ASC. Ask your surgeon whether they operate at an ASC and request the facility fee in writing, because you typically get separate bills from the surgeon and the facility.',
  },
  {
    question: 'How can I lower the cost of cataract surgery if I pay cash?',
    answer:
      'Get an itemized self-pay quote and ask about a prompt-pay or cash discount, since the sticker price is often negotiable. Ask whether the surgery can be done at a lower-fee ambulatory surgery center, and whether a standard monofocal lens (covered, lower cost) meets your needs before paying for a premium upgrade. HSA and FSA funds typically cover medically necessary cataract surgery. Many practices offer financing, and academic teaching hospitals or community health centers may have lower self-pay rates. Confirm pricing and eligibility directly with the provider and your plan administrator.',
  },
  {
    question: 'Do both eyes get done at the same time, and how does that affect cost?',
    answer:
      'Cataract surgery is almost always done one eye at a time, typically one to several weeks apart, so a per-eye price effectively doubles for two eyes. A few surgeons offer immediate sequential bilateral surgery (both eyes same day), but it is less common. When comparing quotes, confirm whether the number you are given is per eye or for both eyes, and whether the pre-op exam and post-op visits are bundled. Prices are estimates to verify with the practice.',
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

export default function CataractSurgeryCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cataract Surgery Cost Without Insurance: 2026 Price Guide',
    description:
      'A practical, sourced breakdown of cataract surgery cost without insurance in 2026 — standard vs premium intraocular lenses, surgery center vs hospital facility fees, what Medicare covers, and how to lower the out-of-pocket bill.',
    url: 'https://vitalityscout.com/guides/cataract-surgery-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cataract-surgery-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Cataract surgery (phacoemulsification with intraocular lens implant)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'All About Vision — Cataract Surgery Cost in 2026', url: 'https://www.allaboutvision.com/treatments-and-surgery/vision-surgery/cataract/cataract-surgery-cost/' },
      { '@type': 'CreativeWork', name: 'Medicare.gov — Cataract surgery coverage', url: 'https://www.medicare.gov/coverage/cataract-surgery' },
      { '@type': 'CreativeWork', name: 'NVISION Eye Centers — Cataract Surgery Cost', url: 'https://www.nvisioncenters.com/cataract-surgery/cataract-surgery-cost/' },
      { '@type': 'CreativeWork', name: 'Surgery Cost Guide — Cataract Surgery Medicare Cost (2026)', url: 'https://surgerycostguide.com/cataract-surgery-medicare-cost/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cataract-surgery-cost#faq', url: 'https://vitalityscout.com/guides/cataract-surgery-cost' };

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
              <span className="text-gray-900">Cataract Surgery Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; All Health Guides
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Vision
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cataract Surgery Cost Without Insurance: The 2026 Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What you actually pay per eye when you self-pay — standard vs premium lenses,
              surgery center vs hospital, and where Medicare picks up the tab.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, <strong>cataract surgery is commonly estimated at $3,000-$6,000 per
                eye</strong> for standard surgery with a basic monofocal lens; a premium lens or
                laser-assisted surgery raises it toward <strong>$6,000-$7,000+ per eye</strong>.
                Medicare covers a standard lens and the procedure (you pay roughly{' '}
                <strong>$384-$598 per eye</strong> after the deductible), but not premium-lens
                upgrades. Doing it at a surgery center usually costs less than a hospital. These are
                estimates to verify — get an itemized quote. This is information, not medical advice.
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
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cost Snapshot (per eye, estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Self-pay (no insurance)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Standard monofocal lens: ~$3,000-$6,000</li>
                  <li>• Some clinics quote basic from ~$2,000-$3,000</li>
                  <li>• + Toric (astigmatism) lens: ~$1,000-$2,500</li>
                  <li>• + Presbyopia-correcting lens: ~$2,000-$3,500</li>
                  <li>• + Laser-assisted (LACS): ~$800-$1,500</li>
                  <li>• Premium all-in: often $6,000-$7,000+</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">With Medicare (standard lens)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Medicare pays 80% after Part B deductible</li>
                  <li>• You pay ~20% coinsurance</li>
                  <li>• Out-of-pocket ~$384 (surgery center)</li>
                  <li>• Out-of-pocket up to ~$598 (hospital)</li>
                  <li>• Premium lens upgrade: not covered</li>
                  <li>• Laser-assisted: not covered</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Figures are labeled estimates drawn from published 2026 cost guides and Medicare
              resources; they vary by surgeon, lens, facility, region, and your plan. Verify with the practice.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Self-pay smart moves:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Ask for an itemized quote (surgeon + facility + lens)</li>
                  <li>• Ask about a prompt-pay / cash discount</li>
                  <li>• Choose a surgery center for a lower facility fee</li>
                  <li>• Decide if a standard lens meets your needs</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">If you have Medicare:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• The standard lens + surgery are covered</li>
                  <li>• You pay 20% after the Part B deductible</li>
                  <li>• A premium lens is an out-of-pocket add-on</li>
                  <li>• A Medigap plan can cover the 20% coinsurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-drives" className="text-blue-600 hover:underline">1. What drives the price of cataract surgery</a></li>
              <li><a href="#standard-vs-premium" className="text-blue-600 hover:underline">2. Standard vs premium lens cost</a></li>
              <li><a href="#center-vs-hospital" className="text-blue-600 hover:underline">3. Surgery center vs hospital</a></li>
              <li><a href="#medicare" className="text-blue-600 hover:underline">4. What Medicare covers (and doesn&apos;t)</a></li>
              <li><a href="#providers" className="text-blue-600 hover:underline">5. Where people get cataract surgery</a></li>
              <li><a href="#lower-cost" className="text-blue-600 hover:underline">6. How to lower the cost</a></li>
              <li><a href="#abroad" className="text-blue-600 hover:underline">7. Cataract surgery abroad</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">8. Things to know before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Cataract surgery is one of the most common operations in the United States, and the
              price you see can swing by thousands of dollars per eye depending on three choices: the
              lens you pick, where the surgery is done, and how you pay. The procedure itself is
              fairly standardized; the cost is not. Here is the honest, sourced breakdown so you can
              read a quote and know which line items are negotiable.
            </p>

            <h2 id="what-drives" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Drives the Price of Cataract Surgery</h2>

            <p className="text-gray-700 mb-4">
              A cataract surgery bill is built from a few separate parts, and they are often billed
              separately:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The surgeon&apos;s fee</strong> — the professional charge for the operation itself.</li>
              <li><strong>The facility fee</strong> — the charge for the operating room, staff, and equipment. This is where a surgery center vs a hospital makes a big difference.</li>
              <li><strong>The intraocular lens (IOL)</strong> — a standard monofocal lens is the baseline; premium lenses are an upgrade.</li>
              <li><strong>Technology add-ons</strong> — laser-assisted cataract surgery (LACS) and advanced diagnostics are usually extra and usually not covered.</li>
              <li><strong>Anesthesia and pre/post-op care</strong> — the exam, anesthesia, and follow-up visits may or may not be bundled into the quote.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> when you compare two quotes, you are often comparing
                different bundles. One practice&apos;s &quot;$3,500 per eye&quot; might be surgeon + facility
                + standard lens, while another&apos;s is surgeon-only with the facility billed separately.
                Always ask for an itemized estimate before deciding which is actually cheaper.
              </p>
            </div>

            <h2 id="standard-vs-premium" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Standard vs Premium Lens Cost</h2>

            <p className="text-gray-700 mb-4">
              The single biggest controllable cost in cataract surgery is the lens. A{' '}
              <strong>standard (monofocal) IOL</strong> corrects vision at one focal distance and is
              what insurance and Medicare cover; many people still wear glasses afterward, especially
              for reading. <strong>Premium IOLs</strong> aim to reduce glasses dependence but are an
              out-of-pocket upgrade on top of the base surgery. The ranges below are estimates from
              published 2026 cost guides, not live quotes.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Lens / option</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical added/total cost per eye (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Standard monofocal (base surgery)</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,000 - $6,000 total</td>
                    <td className="border border-gray-300 px-4 py-3">One focal distance; covered by Medicare/insurance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Toric (astigmatism-correcting)</td>
                    <td className="border border-gray-300 px-4 py-3">+ ~$1,000 - $2,500</td>
                    <td className="border border-gray-300 px-4 py-3">Corrects astigmatism; upgrade you pay yourself</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Presbyopia-correcting (multifocal / EDOF / accommodating)</td>
                    <td className="border border-gray-300 px-4 py-3">+ ~$2,000 - $3,500</td>
                    <td className="border border-gray-300 px-4 py-3">Aims to reduce glasses across distances; upgrade</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Laser-assisted surgery (LACS)</td>
                    <td className="border border-gray-300 px-4 py-3">+ ~$800 - $1,500</td>
                    <td className="border border-gray-300 px-4 py-3">Femtosecond laser steps; usually not covered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Premium lens, self-pay, all-in</td>
                    <td className="border border-gray-300 px-4 py-3">often ~$6,000 - $7,000+</td>
                    <td className="border border-gray-300 px-4 py-3">Base surgery + premium lens (+ laser)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> the base surgery price is fairly similar across practices,
              and the premium lens is where the bill climbs. A premium lens is a vision-quality and
              convenience decision as much as a cost decision — it is not &quot;better&quot; for
              everyone, and a standard lens is a perfectly standard, covered choice. Discuss whether a
              premium lens fits your eyes and your goals with your surgeon, not just your budget.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Premium lenses are elective, not required</h4>
              <p className="text-gray-700">
                If you have Medicare or insurance, the standard monofocal lens and the surgery are
                covered; only the premium upgrade is out-of-pocket. Many people choose a standard lens
                and glasses and are very happy with the result. Do not assume a premium lens is the
                default — ask what each option costs you specifically.
              </p>
            </div>

            <h2 id="center-vs-hospital" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Surgery Center vs Hospital</h2>

            <p className="text-gray-700 mb-4">
              Where the operation happens changes the facility fee, and the facility fee is a real
              chunk of the bill. Cataract surgery is almost always outpatient, done in one of two
              settings.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ambulatory Surgery Center (ASC)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hospital Outpatient Department (HOPD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Facility fee</td>
                    <td className="border border-gray-300 px-4 py-3">Lower (estimated 30%-50% less)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Surgeon fee</td>
                    <td className="border border-gray-300 px-4 py-3">Same surgeon, same professional fee</td>
                    <td className="border border-gray-300 px-4 py-3">Same surgeon, same professional fee</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medicare out-of-pocket (standard lens, estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$384 per eye</td>
                    <td className="border border-gray-300 px-4 py-3">up to ~$598 per eye</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Billing</td>
                    <td className="border border-gray-300 px-4 py-3">Separate surgeon + facility bills</td>
                    <td className="border border-gray-300 px-4 py-3">Separate surgeon + facility bills</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The cheaper setting is usually the surgery center</h4>
              <p className="text-gray-700">
                For a routine cataract operation, an ASC typically carries a lower facility fee than a
                hospital outpatient department — and your surgeon may operate at both. Ask which
                setting they use and whether an ASC option is available, then request the facility fee
                in writing. The exact savings depend on the center and your coverage, so treat the 30%-50%
                figure as an estimate to confirm.
              </p>
            </div>

            <h2 id="medicare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Medicare Covers (and Doesn&apos;t)</h2>

            <p className="text-gray-700 mb-4">
              Cataract surgery is one of the procedures Original Medicare clearly covers, because
              cataracts are a medical condition rather than an elective vision correction like LASIK.
              Here is how the math works for a standard lens:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Medicare Part B</strong> covers the surgery and a standard monofocal IOL.</li>
              <li>You first pay the <strong>annual Part B deductible</strong>, then Medicare pays 80% and you pay the <strong>20% coinsurance</strong>.</li>
              <li>Estimated out-of-pocket for standard surgery is roughly <strong>$384 per eye at an ASC and up to ~$598 at a hospital</strong>; one cost guide frames the patient share as under $600 per eye.</li>
              <li>Medicare also covers <strong>one pair of standard eyeglasses or one set of contacts</strong> after surgery that implants an IOL.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What Medicare does not cover:</strong> premium lens upgrades (toric,
                multifocal, EDOF), laser-assisted surgery, and designer frames or lens coatings on the
                post-surgery glasses. If you choose a premium lens, you pay the difference between it
                and the standard lens out-of-pocket. A Medigap (supplement) plan can cover the 20%
                coinsurance; check your specific plan.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The exact Part B deductible changes year to year and is reported slightly differently
              across sources, so confirm the current figure and your plan&apos;s share before you
              schedule. If you have a Medicare Advantage plan, your cost-sharing structure may differ
              from Original Medicare — ask the plan directly.
            </p>

            <h2 id="providers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where People Get Cataract Surgery</h2>

            <p className="text-gray-700 mb-4">
              Cataract surgery is performed by ophthalmologists at hospital eye departments, academic
              medical centers, independent ophthalmology practices, and national eye-surgery groups.
              A few examples of established providers (named for orientation, not as endorsements —
              verify pricing and credentials with each directly):
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>NVISION Eye Centers</strong> — a national group that states 135+ locations and 2.5M+ procedures, offering cataract surgery alongside LASIK.</li>
              <li><strong>Kremer Eye Center</strong> — surgical centers across Pennsylvania, New Jersey, and Delaware offering cataract, LASIK, and other eye surgery.</li>
              <li><strong>Academic / teaching hospital eye departments</strong> — university ophthalmology programs often have self-pay rates worth comparing.</li>
              <li><strong>Independent ophthalmology practices and ASCs</strong> — local surgeons operating at ambulatory surgery centers, frequently the lower-facility-fee option.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Note that some of the best-known names in this space (for example LasikPlus) primarily
              market LASIK; cataract surgery is a separate, medically necessary procedure, so confirm
              that the provider you are considering performs cataract surgery and ask for a cataract-specific
              self-pay quote.
            </p>

            <h2 id="lower-cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Lower the Cost</h2>

            <p className="text-gray-700 mb-4">
              If you are paying out of pocket — uninsured, between plans, or choosing a premium
              upgrade Medicare won&apos;t cover — these levers tend to move the bill:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get an itemized self-pay quote</strong> (surgeon + facility + lens + anesthesia) so you can compare apples to apples.</li>
              <li><strong>Ask about a prompt-pay or cash discount.</strong> Self-pay sticker prices are frequently negotiable, especially paid up front.</li>
              <li><strong>Choose an ASC over a hospital</strong> when clinically appropriate, for the lower facility fee.</li>
              <li><strong>Decide whether a standard lens meets your needs</strong> before paying $2,000-$3,500 per eye for a premium upgrade.</li>
              <li><strong>Use HSA or FSA funds</strong> — medically necessary cataract surgery is typically an eligible expense, effectively discounting it by your tax rate.</li>
              <li><strong>Compare academic teaching hospitals and community health centers</strong>, which sometimes have lower self-pay rates.</li>
              <li><strong>Ask about financing</strong> (many practices offer payment plans or medical credit) if you need to spread the cost.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;low base price, pricey upgrades&quot; pattern</h4>
              <p className="text-gray-700">
                A low headline per-eye price can climb fast once a premium lens, laser-assisted
                surgery, and advanced diagnostics are added. Confirm exactly what is and is not
                included in any quote, and whether the price is per eye or for both eyes, before
                deciding which provider is actually cheaper for your situation.
              </p>
            </div>

            <h2 id="abroad" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cataract Surgery Abroad</h2>

            <p className="text-gray-700 mb-4">
              Some patients consider cataract surgery overseas, where published medical-tourism prices
              can be lower and a premium lens upgrade sometimes costs less than a standard lens does
              at home. Reported per-eye figures from medical-tourism sources are estimates and vary
              widely — for example, Turkey has been listed anywhere from roughly $700 to $8,000
              depending on the lens and clinic, with India and Thailand often cited in the low
              thousands. Quality, accreditation, and aftercare follow-up vary by clinic, so vetting
              matters more than the headline price.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                If you are weighing care abroad, read our{' '}
                <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism hub</Link>{' '}
                for how to check accreditation and vet a clinic, and our{' '}
                <Link href="/guides/lasik-cost-by-country" className="text-blue-600 hover:underline">LASIK cost by country guide</Link>{' '}
                for how eye-surgery pricing compares across destinations. Cataract surgery is medically
                necessary, not elective like LASIK, so factor in travel, follow-up, and what happens if
                you need post-op care once you are home.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Book</h2>

            <p className="text-gray-700 mb-4">
              A balanced view before you schedule:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cataract surgery is medical, not cosmetic.</strong> If a cataract is impairing your vision, this is a treatment, and most insurance and Medicare cover the standard procedure.</li>
              <li><strong>Per eye, not both.</strong> Surgery is usually done one eye at a time, so budget per eye and confirm whether a quote covers one eye or two.</li>
              <li><strong>The lens choice is yours to discuss.</strong> A standard lens is a complete, covered option; a premium lens is an elective upgrade with real cost.</li>
              <li><strong>Ask about every line item.</strong> Surgeon, facility, lens, anesthesia, and follow-up may be billed separately.</li>
              <li><strong>Prices change.</strong> The estimates here are from published 2026 cost guides and shift by region, facility, and year — always confirm the current number with the practice.</li>
              <li><strong>No outcome is guaranteed.</strong> Surgery decisions belong with a qualified ophthalmologist who has examined your eyes.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost guides</h3>
            <p className="text-gray-700 mb-4">
              Comparing eye and other cash-pay procedures? These guides cover adjacent pricing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Eye surgery abroad:</strong> our <Link href="/guides/lasik-cost-by-country" className="text-blue-600 hover:underline">LASIK cost by country guide</Link> breaks down per-eye pricing across destinations</li>
              <li><strong>Find a local provider:</strong> browse the <Link href="/local-clinics" className="text-blue-600 hover:underline">local clinics directory</Link> for cash-pay options near you</li>
              <li><strong>Care abroad, vetted:</strong> the <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism hub</Link> on accreditation and how to choose a clinic</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Health Options</h3>
            <p className="mb-6 text-blue-100">
              See transparent self-pay pricing across local clinics and procedures, all in one place.
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
              not affiliated with NVISION Eye Centers, Kremer Eye Center, or any provider named here.
              Pricing is based on publicly available data and third-party cost guides and is presented
              as estimates that vary by surgeon, lens, facility, region, and current Medicare and plan
              rules — always verify the current price and your coverage directly with the practice and
              your plan before scheduling. Cataract surgery decisions should be made with a licensed
              ophthalmologist who has examined your eyes. No outcome is guaranteed.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• All About Vision — Cataract Surgery Cost in 2026 (standard vs premium lens, toric/presbyopia upgrades, laser-assisted add-on, Medicare share)</li>
              <li>• Medicare.gov — Cataract surgery coverage (Part B coverage, standard lens, 80/20, post-op eyeglasses)</li>
              <li>• NVISION Eye Centers — Cataract Surgery Cost (standard vs premium IOL pricing, 135+ locations, laser-assisted as elective)</li>
              <li>• Surgery Cost Guide — Cataract Surgery Medicare Cost 2026 ($384-$598 per-eye out-of-pocket; ASC vs hospital split)</li>
              <li>• Medical-tourism price-comparison sources (per-eye cataract estimates for Turkey, India, Thailand vs the US)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Surgery Cost Cheat Sheet"
            description="How to read an itemized cataract quote, when a standard lens is enough, and where to save."
            source="guide_cataract_surgery_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
