import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Full Body MRI Scan Cost (2026): Prenuvo, Ezra, SimonMed' },
  alternates: { canonical: 'https://vitalityscout.com/guides/full-body-mri-scan-cost' },
  description:
    'Full body MRI scan cost in 2026 — Prenuvo, Ezra and SimonMed cash prices compared, what each scans, the evidence and controversy, and is it worth it.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a full body MRI scan cost without insurance?',
    answer:
      'A whole-body screening MRI is a cash-pay (self-pay) service that runs roughly $499 to $2,499 in 2026 depending on the brand and how much of the body is imaged. Ezra (now part of Function Health) lists a head-to-pelvis scan at $999 ($799 for Function members); SimonMed Longevity lists a Core scan at $899 promotional; and Prenuvo lists its whole-body scan at $2,499. None of the major providers bill insurance because elective screening of healthy people is not covered. These are estimates that change with promotions — confirm the current price on each provider’s own site.',
  },
  {
    question: 'Is a full body MRI scan worth it for a healthy person?',
    answer:
      'The evidence does not support routine whole-body MRI screening for healthy, asymptomatic adults. A systematic review of the literature concluded that providers “should not offer whole-body MRI for preventive health screening to asymptomatic subjects outside of a research setting,” citing high rates of incidental findings (a combined ~32% prevalence of critical or indeterminate findings, ~16% false positives) and no demonstrated survival benefit, with malignancy found in under ~2% of screened people. It may be a different conversation for people with a known high-risk genetic syndrome. Discuss it with your own clinician before booking.',
  },
  {
    question: 'What does a full body MRI scan actually screen for?',
    answer:
      'A screening whole-body MRI uses no radiation and images major regions — commonly the head/neck, chest, abdomen and pelvis — looking for structural abnormalities such as tumors, aneurysms, cysts and organ changes. Providers advertise the ability to flag many potential conditions, including some cancers in the imaged areas. It is a screening tool, not a diagnosis: any flagged finding needs a clinician and usually further targeted testing to interpret. It also does not reliably catch everything (for example, hollow-organ and some lung or skin cancers).',
  },
  {
    question: 'Does Prenuvo or Ezra or SimonMed take insurance?',
    answer:
      'No. Prenuvo, Ezra (Function) and SimonMed Longevity all position whole-body screening as an elective, out-of-pocket service and do not bill standard insurance. The trade-off is a single transparent cash price up front instead of a claim. Many of them accept HSA/FSA dollars and offer financing (Affirm, Klarna or CareCredit). HSA/FSA eligibility can depend on your plan and whether the scan is considered qualified medical care — confirm with your plan administrator before assuming it qualifies.',
  },
  {
    question: 'Why is Prenuvo so much more expensive than Ezra or SimonMed?',
    answer:
      'Prenuvo lists its whole-body scan at $2,499, while Ezra’s head-to-pelvis MRI starts at $999 and SimonMed’s Core scan is $899 promotional. The price gap reflects scan length, marketing position and what is bundled (longer protocols, more sequences, concierge experience and follow-up). A higher price does not by itself mean a more accurate read — image quality depends on the magnet, the protocol and the radiologist. Compare what each scan actually covers, not just the headline number, and verify current pricing with each provider.',
  },
  {
    question: 'What happens if a full body MRI finds something?',
    answer:
      'A flagged finding triggers follow-up, which is the main hidden cost. Studies of healthy people screened this way report that a large share have at least one incidental finding, and many go on to additional ultrasounds, CT scans, biopsies and specialist visits — most of which turn out to be benign. That cascade carries its own cost, radiation (from follow-up CT) and anxiety. Review any result with your own clinician, who can weigh it against your history rather than treating an image in isolation.',
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

export default function FullBodyMriScanCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Full Body MRI Scan Cost: Prenuvo vs Ezra vs SimonMed (2026)',
    description:
      'A practical comparison of cash-pay whole-body MRI screening cost in 2026 — Prenuvo, Ezra (Function Health) and SimonMed Longevity — what each scans, the evidence and controversy, and whether it is worth it.',
    url: 'https://vitalityscout.com/guides/full-body-mri-scan-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/full-body-mri-scan-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Whole-body magnetic resonance imaging (MRI) screening' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Prenuvo — whole-body MRI pricing and memberships', url: 'https://www.prenuvo.com/pricing' },
      { '@type': 'CreativeWork', name: 'Ezra (Function Health) — MRI screening pricing', url: 'https://www.ezra.com/pricing' },
      { '@type': 'CreativeWork', name: 'SimonMed Longevity — whole-body MRI', url: 'https://simonmed.com/longevity/whole-body-mri/' },
      { '@type': 'CreativeWork', name: 'Whole-body MRI for preventive health screening: a systematic review of the literature (PMC6850647)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6850647/' },
      { '@type': 'CreativeWork', name: 'Fred Hutch — Whole-body MRI and cancer screening (Dontchos & Dighe, 2025)', url: 'https://www.fredhutch.org/en/news/blog/2025/08/whole-body-mri-and-cancer-screening.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/full-body-mri-scan-cost#faq', url: 'https://vitalityscout.com/guides/full-body-mri-scan-cost' };

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
              <span className="text-gray-900">Full Body MRI Scan Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Longevity &amp; Screening Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Imaging
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Full Body MRI Scan Cost: Prenuvo vs Ezra vs SimonMed (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Whole-body MRI screening has gone mainstream, and the cash prices vary widely.
              Here is what Prenuvo, Ezra and SimonMed actually charge, what each scan covers,
              and the honest evidence on whether it is worth it.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                A full body MRI scan costs roughly <strong>$499 to $2,499 cash</strong> in 2026,
                depending on brand and coverage. <strong>Ezra</strong> (now Function Health) lists a
                head-to-pelvis scan at <strong>$999</strong> ($799 for members), <strong>SimonMed</strong>{' '}
                Longevity at <strong>$899</strong> promotional, and <strong>Prenuvo</strong> at{' '}
                <strong>$2,499</strong>. None bill insurance. Evidence does not support routine
                screening of healthy people — incidental findings are common and survival benefit is
                unproven. Prices are estimates; verify with each provider. This is information, not
                medical advice.
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
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison (cash price, estimate)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Prenuvo</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Whole body ~$2,499 (estimate)</li>
                  <li>• Focused scan ~$1,199</li>
                  <li>• Memberships $1,199-$3,999/yr</li>
                  <li>• Under an hour, no radiation</li>
                  <li>• No insurance; Affirm financing</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Ezra (Function)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• MRI ~$999 ($799 member)</li>
                  <li>• MRI + spine ~$1,699</li>
                  <li>• Full skeletal/neuro ~$3,999</li>
                  <li>• Head-to-pelvis, ~22 min</li>
                  <li>• No insurance; HSA/FSA</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-2">SimonMed Longevity</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Core ~$899 promo (~$999)</li>
                  <li>• Core + head/neck ~$1,599</li>
                  <li>• + head/neck/spine ~$2,199</li>
                  <li>• Chest-abdomen-pelvis up</li>
                  <li>• No insurance; HSA/FSA</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">If you are set on a scan:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lowest entry price is Ezra/SimonMed (~$899-$999)</li>
                  <li>• Match coverage to your concern, not the headline price</li>
                  <li>• Use HSA/FSA where eligible to lower the net cost</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-amber-700 mb-1">Before you book, know:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Evidence does not back routine screening of healthy adults</li>
                  <li>• Incidental findings are common and mostly benign</li>
                  <li>• Budget for possible follow-up tests, not just the scan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what" className="text-blue-600 hover:underline">1. What a full body MRI scan is</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">2. Cost by brand: Prenuvo, Ezra, SimonMed</a></li>
              <li><a href="#what-scans" className="text-blue-600 hover:underline">3. What each scan actually covers</a></li>
              <li><a href="#evidence" className="text-blue-600 hover:underline">4. The evidence and the controversy</a></li>
              <li><a href="#hidden-cost" className="text-blue-600 hover:underline">5. The hidden cost: follow-up</a></li>
              <li><a href="#who" className="text-blue-600 hover:underline">6. Who might actually benefit</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Is it worth it?</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A few years ago, getting an MRI meant a doctor&apos;s order and a specific complaint.
              Now you can book a whole-body MRI online and pay cash to scan from head to pelvis,
              radiation-free, in under an hour. Prenuvo, Ezra and SimonMed have built consumer
              brands around it. The pricing ranges from about $899 to $2,499, and the science behind
              screening healthy people is far more contested than the marketing suggests. Here is the
              honest breakdown.
            </p>

            <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Full Body MRI Scan Is</h2>

            <p className="text-gray-700 mb-4">
              A screening whole-body MRI is an elective, self-pay scan marketed to asymptomatic
              people who want a proactive look inside the body. Unlike a CT scan, MRI uses magnetic
              fields rather than ionizing radiation, so a screening scan does not expose you to
              radiation. A radiologist reads the images looking for structural abnormalities —
              tumors, aneurysms, cysts, fatty liver, organ changes — across the regions imaged.
            </p>

            <p className="text-gray-700 mb-4">
              The key word is <strong>screening</strong>. This is not a diagnostic MRI ordered to
              investigate a known symptom. It is a broad survey, and that broadness is both its
              appeal and its central problem: scanning a large area of a healthy body turns up a lot
              of things, most of which are harmless.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> a whole-body MRI is sold as peace of mind, but the
                output is a list of findings that still need a clinician to interpret. The scan is the
                cheap, easy part. What you do with an ambiguous finding is where the real cost —
                financial and emotional — lives.
              </p>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost by Brand: Prenuvo, Ezra, SimonMed</h2>

            <p className="text-gray-700 mb-4">
              The three best-known consumer brands span a roughly <strong>$899-$2,499</strong> range
              for a whole-body or near-whole-body scan in 2026. The figures below are{' '}
              <strong>drawn from each provider&apos;s own published pricing</strong> and are best
              treated as estimates — promotions and tiers change often, and prices can vary by
              location. Confirm the current number on the provider&apos;s site before booking.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider &amp; scan</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Coverage / notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Prenuvo Whole Body</td>
                    <td className="border border-gray-300 px-4 py-3">~$2,499</td>
                    <td className="border border-gray-300 px-4 py-3">Head, torso, pelvis; under an hour; no radiation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Prenuvo Focused / memberships</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,199 / $1,199-$3,999 yr</td>
                    <td className="border border-gray-300 px-4 py-3">Core, Comprehensive, Executive tiers (annual)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ezra MRI (Function)</td>
                    <td className="border border-gray-300 px-4 py-3">~$999 ($799 member)</td>
                    <td className="border border-gray-300 px-4 py-3">Head, neck, abdomen, pelvis; ~22 min; HSA/FSA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ezra MRI + spine / full</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,699 / ~$3,999</td>
                    <td className="border border-gray-300 px-4 py-3">Adds spine; top tier adds skeletal + neuro</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">SimonMed Core MRI</td>
                    <td className="border border-gray-300 px-4 py-3">~$899 promo (~$999)</td>
                    <td className="border border-gray-300 px-4 py-3">Chest, abdomen, pelvis; HSA/FSA, financing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">SimonMed + head/neck (+ spine)</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,599 / ~$2,199</td>
                    <td className="border border-gray-300 px-4 py-3">Adds brain, neck, then spine imaging</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> Ezra and SimonMed have pushed the entry price for a
              broad scan toward $899-$999, while Prenuvo holds a premium position at $2,499 for its
              whole-body scan. A higher price does not automatically buy a more accurate read —
              image quality depends on the magnet strength, the imaging protocol and the radiologist,
              not the brand. Compare what is actually imaged and how long the scan takes, not just
              the headline number.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Memberships and bundles change the math</h4>
              <p className="text-gray-700">
                Several providers now bundle imaging with lab testing (Ezra sits inside a Function
                Health membership; Prenuvo offers Core/Comprehensive/Executive tiers). A bundle can
                lower the per-service price but also nudges you toward an annual cadence. Price the
                one-time scan and the membership separately, and decide whether you actually want a
                recurring scan before paying for the subscription.
              </p>
            </div>

            <h2 id="what-scans" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Each Scan Actually Covers</h2>

            <p className="text-gray-700 mb-4">
              &quot;Full body&quot; is a marketing phrase more than a literal one. Each brand images a
              defined set of regions, and the cheaper tiers cover less:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Prenuvo</strong> markets a whole-body scan covering head, torso and pelvis, radiation-free, completed in under an hour, with a focused option for less coverage.</li>
              <li><strong>Ezra</strong> images head, neck, abdomen and pelvis in about 22 minutes for its base scan, with paid add-ons for spine and a full skeletal/neurological assessment.</li>
              <li><strong>SimonMed</strong> Core covers chest, abdomen and pelvis; you step up to add head and neck, then spine, at higher tiers.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Note what is <em>not</em> well covered by a standard screening MRI: it does not replace
              a colonoscopy, a mammogram, a low-dose lung CT for smokers, or a skin check. Hollow
              organs and certain cancers are not reliably caught. Treat the scan as one input, not a
              replacement for the screenings your clinician already recommends for your age and risk.
            </p>

            <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Evidence and the Controversy</h2>

            <p className="text-gray-700 mb-4">
              This is where the marketing and the medical literature diverge sharply. A{' '}
              <strong>systematic review of whole-body MRI for preventive health screening</strong>{' '}
              concluded plainly that, &quot;Based on current evidence, healthcare providers should not
              offer whole-body MRI for preventive health screening to asymptomatic subjects outside of
              a research setting.&quot;
            </p>

            <p className="text-gray-700 mb-4">The numbers behind that conclusion:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>~32% combined prevalence</strong> of critical or indeterminate incidental findings across the pooled studies (critical ~13.4%, indeterminate ~13.9%).</li>
              <li><strong>~16% pooled false-positive rate</strong> across the studies that reported it (with a very wide confidence interval).</li>
              <li><strong>Only ~12.6%</strong> of critical/indeterminate findings were actually verified through further testing, resection or follow-up.</li>
              <li><strong>Under ~2% malignancy</strong> detected in screened, asymptomatic people — a low yield against a high volume of findings.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              A 2025 Fred Hutch piece by radiologists Brian Dontchos and Manjiri Dighe reached the
              same place: &quot;The effectiveness of whole-body screening MRI scans is not yet
              established,&quot; and &quot;the hierarchical level of available evidence for whole-body
              MRI is low&quot; with &quot;long-term patient outcomes and cost-effectiveness... not
              fully evaluated.&quot; They cite a review in which 95% of patients had abnormal findings
              but only ~1.8% had an actual malignancy — and at the lesion level, ~91% of findings
              were benign and not relevant.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The overdiagnosis problem, in plain terms</h4>
              <p className="text-gray-700">
                When you scan a healthy body, you find &quot;incidentalomas&quot; — spots that look
                abnormal but may never cause harm. The screening test cannot always tell a dangerous
                finding from a harmless one, so it triggers more testing. Most of those work-ups end in
                &quot;benign,&quot; but some carry real risk (a biopsy complication, radiation from a
                follow-up CT) and all carry cost and anxiety. That is the trade against the small
                chance of catching something important early.
              </p>
            </div>

            <h2 id="hidden-cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Hidden Cost: Follow-Up</h2>

            <p className="text-gray-700 mb-4">
              The scan price is the part you can see. The part you cannot is the work-up. In one small
              study of healthy adults, nearly all participants had at least one incidental finding,
              and most needed additional ultrasounds, CT examinations, mammograms, further MRIs and
              even a biopsy — routing them to multiple specialists. Each of those is a separate
              cash or insurance cost that the scan&apos;s sticker price never mentions.
            </p>

            <p className="text-gray-700 mb-4">
              So the honest budget for a full-body MRI is not $899-$2,499. It is the scan{' '}
              <em>plus</em> the expected value of the follow-up cascade for whatever the radiologist
              flags. For most healthy people, the most likely outcome is a finding that is benign but
              still costs you a round of follow-up tests to confirm.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Direct follow-up tests:</strong> ultrasound, CT, targeted MRI, mammogram — often several hundred to a few thousand dollars each.</li>
              <li><strong>Specialist visits:</strong> a single finding can send you to a urologist, rheumatologist, internist or surgeon.</li>
              <li><strong>Non-financial cost:</strong> weeks of uncertainty waiting on a work-up that usually ends in &quot;nothing to worry about.&quot;</li>
            </ul>

            <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Might Actually Benefit</h2>

            <p className="text-gray-700 mb-4">
              &quot;Not recommended for healthy adults&quot; is not the same as &quot;never useful.&quot;
              The conversation is different for people at materially elevated risk — for example,
              those with a known hereditary cancer-predisposition syndrome (such as Li-Fraumeni
              syndrome), where surveillance imaging is studied as part of managed care. Even there,
              the evidence base is still developing, and the decision belongs in a structured care
              plan with a clinician who knows your genetics and history, not in a self-checkout cart.
            </p>

            <p className="text-gray-700 mb-4">
              If you are an asymptomatic adult with no special risk factors, the literature is
              consistent: routine whole-body MRI screening is not supported by current evidence. That
              does not mean nobody chooses it — plenty of people pay for the reassurance — but
              you should go in understanding that you are buying a scan with a high false-positive rate
              and an unproven survival benefit.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Lower-cost screening that does have evidence</h4>
              <p className="text-gray-700">
                If the goal is proactive health data on a budget, evidence-backed options cost far
                less: a comprehensive blood panel, age-appropriate cancer screening (colonoscopy,
                mammogram, low-dose lung CT for eligible smokers), and a body-composition{' '}
                <Link href="/dexa-scans" className="text-blue-600 hover:underline">DEXA scan</Link>{' '}
                for bone density and fat/lean mass. See whether a{' '}
                <Link href="/guides/are-dexa-scans-worth-it" className="text-blue-600 hover:underline">DEXA scan is worth it</Link>{' '}
                before spending four figures on whole-body imaging.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is It Worth It?</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">A full-body MRI may make sense if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have a known high-risk genetic syndrome and a clinician is managing surveillance</li>
                <li>You understand and accept the high false-positive rate and the follow-up cascade</li>
                <li>You can comfortably afford the scan <em>and</em> the potential work-up costs</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: people in structured high-risk surveillance, or informed self-payers buying reassurance with eyes open
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">It is probably not worth it if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are an asymptomatic adult with no elevated risk factors</li>
                <li>You are skipping the evidence-backed screenings your age calls for</li>
                <li>An ambiguous finding would cause you outsized anxiety or unaffordable follow-up</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Better first step: talk to your clinician about the screenings the evidence already supports for your age and risk
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Ask your clinician whether your personal/family history puts you at elevated risk</li>
              <li>Confirm you are up to date on the age-appropriate screenings that have evidence</li>
              <li>If you still want a scan, compare coverage (not just price) across Ezra, SimonMed and Prenuvo</li>
              <li>Budget for the scan <em>plus</em> a realistic follow-up cascade, and verify current pricing and HSA/FSA eligibility</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost guides</h3>
            <p className="text-gray-700 mb-4">
              Whole-body MRI is one of several cash-pay screening tools. Often a cheaper, more
              targeted test answers the actual question:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Body composition:</strong> our <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">DEXA vs InBody vs Bod Pod guide</Link> compares fat/lean-mass tests at $45-$179</li>
              <li><strong>Longevity programs:</strong> see the <Link href="/guides/best-longevity-clinics" className="text-blue-600 hover:underline">best longevity clinics compared</Link> for memberships that bundle imaging and labs</li>
              <li><strong>Where it fits:</strong> browse the <Link href="/longevity" className="text-blue-600 hover:underline">longevity &amp; screening hub</Link> for cash-pay proactive-health options</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Longevity &amp; Screening Options</h3>
            <p className="mb-6 text-blue-100">
              See imaging, body-composition and lab-testing options side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/longevity"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Longevity &amp; Screening
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
              not affiliated with Prenuvo, Ezra, Function Health or SimonMed. Pricing is based on
              publicly available data from each provider and is presented as estimates that vary by
              location, scan tier, and current promotions — always verify the current price
              directly on prenuvo.com, ezra.com or simonmed.com before booking. Whole-body MRI
              screening of asymptomatic people is elective and not supported by current evidence for
              routine use; decisions about screening should be made with a licensed healthcare
              provider who knows your history. Any abnormal or incidental finding should be reviewed
              with a clinician.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Prenuvo — prenuvo.com/pricing (whole-body scan, focused scan, membership tiers)</li>
              <li>• Ezra (Function Health) — ezra.com/pricing (MRI scan tiers, member pricing, scan time, HSA/FSA)</li>
              <li>• SimonMed Longevity — simonmed.com/longevity/whole-body-mri/ (Core MRI tiers, coverage, promotion)</li>
              <li>• Whole-body MRI for preventive health screening: a systematic review of the literature (PMC6850647) — incidental-finding, false-positive, verification and malignancy rates; recommendation</li>
              <li>• Fred Hutch — &quot;Whole-body MRI and cancer screening,&quot; Dontchos &amp; Dighe (2025) — evidence level, benign-finding rate, expert quotes</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Screening Price Cheat Sheet"
            description="Full-body MRI, DEXA and lab pricing compared — plus the evidence-backed screenings worth your money."
            source="guide_full_body_mri_scan_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
