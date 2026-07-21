import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/bioidentical-vs-traditional-hrt';

export const metadata: Metadata = {
  title: { absolute: 'Bioidentical vs Traditional HRT: The Cash-Pay Cost Difference (2026)' },
  alternates: { canonical: URL },
  description:
    'The real line is FDA-approved vs compounded, not bioidentical vs traditional. FDA-approved bioidentical hormones exist and are often the lower cash-pay cost; compounded BHT and pellets are cash-pay and unregulated.',
  keywords: [
    'bioidentical vs traditional hrt',
    'bioidentical hormones vs traditional hormones',
    'bioidentical hrt cost',
    'compounded bioidentical hormone cost',
    'fda approved bioidentical hormones',
    'is bioidentical hrt covered by insurance',
    'bhrt vs hrt cost',
  ],
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price line ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the difference between bioidentical and traditional HRT?',
    answer:
      '"Bioidentical" means the hormone has the same molecular structure as the one your body makes (for example, estradiol and micronized progesterone). "Traditional" is often used for older formulations such as conjugated equine estrogens and some synthetic progestins. The more important distinction, per ACOG and The Menopause Society, is FDA-approved versus compounded: many FDA-approved products are already bioidentical, while custom compounded bioidentical hormone therapy is not FDA-regulated for quality or dosing. Treatment choice is a clinical decision — discuss it with a licensed clinician.',
  },
  {
    question: 'Are bioidentical hormones cheaper than traditional HRT?',
    answer:
      'It depends on FDA-approved versus compounded, not on the "bioidentical" label. FDA-approved bioidentical options like generic estradiol patches or micronized progesterone are often the lower cash-pay cost and may be covered by insurance, commonly running roughly $15 to $75 a month cash. Custom compounded bioidentical therapy and hormone pellets are typically cash-pay and can run higher — often $75 to $300+ a month or several hundred dollars per pellet insertion. These are typical ranges that vary by pharmacy, dose, and clinic — confirm current pricing with the provider.',
  },
  {
    question: 'Are compounded bioidentical hormones FDA-approved?',
    answer:
      'No. Custom compounded bioidentical hormone therapy is not FDA-approved and is not tested by the FDA for quality, dose consistency, or safety. ACOG and The Menopause Society advise that FDA-approved hormone therapies are recommended over compounded bioidentical therapy when an approved formulation exists, reserving compounding for narrow cases such as an allergy to an approved product or a dose not commercially made. Many bioidentical hormones are available in FDA-approved form. Discuss which is appropriate with a licensed clinician.',
  },
  {
    question: 'Is bioidentical HRT covered by insurance?',
    answer:
      'FDA-approved hormone therapy — including FDA-approved bioidentical products like estradiol and micronized progesterone — is often covered by insurance, which lowers the out-of-pocket cost. Custom compounded bioidentical hormones and pellet therapy are frequently not covered and are paid cash. That coverage gap is usually the biggest driver of the price difference people notice, not the hormone itself. Coverage varies by plan and pharmacy — verify with your insurer and provider before starting.',
  },
  {
    question: 'Are hormone pellets bioidentical, and what do they cost?',
    answer:
      'Pellets typically contain bioidentical estradiol or testosterone, but compounded pellet formulations are not FDA-approved, and professional societies note the dosing can be difficult to control and cannot be removed once inserted. Cost is usually cash-pay and varies widely — often several hundred dollars per insertion every few months. Because pellets are a clinical and cost commitment, discuss the risks, alternatives, and total annual cost with a licensed clinician before choosing them.',
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

export default function BioidenticalVsTraditionalHrt() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Bioidentical vs Traditional HRT: The Cash-Pay Cost Difference',
    description:
      'A practical comparison of bioidentical and traditional hormone therapy — what the terms mean, the FDA-approved vs compounded distinction, and how cash-pay cost and coverage differ.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Menopausal and hormone replacement therapy' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-21',
    dateModified: '2026-07-21',
    citation: [
      { '@type': 'CreativeWork', name: 'ACOG — Compounded Bioidentical Menopausal Hormone Therapy (Clinical Consensus, Nov 2023): FDA-approved recommended over compounded', url: 'https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/11/compounded-bioidentical-menopausal-hormone-therapy' },
      { '@type': 'CreativeWork', name: 'NASEM (NCBI Bookshelf) — The Clinical Utility of Compounded Bioidentical Hormone Therapy (FDA-approved bioidentical products include estradiol, micronized progesterone, DHEA)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562886/' },
      { '@type': 'CreativeWork', name: 'Cleveland Clinic — Bioidentical Hormones: Therapy, Uses, Safety & Side Effects', url: 'https://my.clevelandclinic.org/health/treatments/15660-bioidentical-hormones' },
      { '@type': 'CreativeWork', name: 'Cleveland Clinic — Hormone Replacement Therapy (HRT) for Menopause', url: 'https://my.clevelandclinic.org/health/treatments/15245-hormone-therapy-for-menopause-symptoms' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Bioidentical vs Traditional HRT', item: URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Bioidentical vs Traditional HRT</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/hormone-therapy" className="text-sm text-purple-600 hover:underline mb-4 inline-block">
              &larr; Hormone Therapy Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bioidentical vs Traditional HRT: The Cash-Pay Cost Difference (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The debate is usually framed as bioidentical vs traditional, but the distinction that
              drives both safety and price is FDA-approved vs compounded. Here is what the terms mean —
              and how the cash-pay cost actually breaks down.
            </p>

            {/* Direct-answer lead: self-contained ~75-word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>The real line is FDA-approved vs compounded, not bioidentical vs traditional.</strong>{' '}
                Many FDA-approved hormones are already bioidentical (estradiol, micronized progesterone)
                and are often the lower cash-pay cost, frequently insurance-covered. Custom compounded
                bioidentical therapy and pellets are not FDA-approved, usually cash-pay, and can cost
                more. ACOG and The Menopause Society recommend FDA-approved therapy over compounded when
                one exists. Prices are typical ranges — verify with the provider. This is information,
                not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-2">FDA-approved hormone therapy</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Includes bioidentical estradiol and micronized progesterone</li>
                  <li>• Tested by the FDA for quality and dose</li>
                  <li>• Often covered by insurance</li>
                  <li>• Usually the lower cash-pay cost</li>
                  <li>• Recommended first by ACOG and The Menopause Society</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Compounded bioidentical (cBHT) &amp; pellets</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Custom-mixed; not FDA-approved</li>
                  <li>• Not FDA-tested for dose consistency</li>
                  <li>• Usually cash-pay, rarely covered</li>
                  <li>• Often higher monthly or per-pellet cost</li>
                  <li>• Reserved for narrow cases per guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-purple-600 mb-1">Lean FDA-approved if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want tested quality and consistent dosing</li>
                  <li>• You want the lower cash cost or insurance coverage</li>
                  <li>• A standard formulation and dose fits your needs</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Compounded may fit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have an allergy to an FDA-approved product</li>
                  <li>• You need a dose or form not commercially made</li>
                  <li>• A clinician recommends it for a specific reason</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#terms" className="text-purple-600 hover:underline">1. What the terms actually mean</a></li>
              <li><a href="#realline" className="text-purple-600 hover:underline">2. The real line: FDA-approved vs compounded</a></li>
              <li><a href="#table" className="text-purple-600 hover:underline">3. Cash-pay cost compared</a></li>
              <li><a href="#coverage" className="text-purple-600 hover:underline">4. Why coverage drives the price gap</a></li>
              <li><a href="#guidance" className="text-purple-600 hover:underline">5. What the guidelines say</a></li>
              <li><a href="#save" className="text-purple-600 hover:underline">6. How to save safely</a></li>
              <li><a href="#verdict" className="text-purple-600 hover:underline">7. How to decide</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Clinics that market &quot;bioidentical hormones&quot; often imply they are more natural or
              safer than &quot;traditional&quot; HRT. Authorities like the Cleveland Clinic explain the
              science clearly: bioidentical simply means the hormone&apos;s molecular structure matches
              what your body makes. What that marketing usually leaves out is the distinction that
              actually matters for your safety and your wallet — whether the product is FDA-approved or
              custom compounded. This guide adds the cash-pay cost lens on top of that science.
            </p>

            <h2 id="terms" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Terms Actually Mean</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Bioidentical:</strong> the hormone has the same molecular structure as one your body produces. Estradiol and micronized progesterone are common examples, and many are plant-derived.</li>
              <li><strong>&quot;Traditional&quot;:</strong> a loose term often applied to older formulations such as conjugated equine estrogens and certain synthetic progestins, whose structures are not identical to the body&apos;s hormones.</li>
              <li><strong>Compounded bioidentical hormone therapy (cBHT):</strong> hormones custom-mixed by a compounding pharmacy, often marketed as tailored. These are not FDA-approved or FDA-tested.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The key thing the marketing blurs: <strong>bioidentical is not a synonym for
              compounded</strong>. Many bioidentical hormones are available in FDA-approved form. So
              &quot;bioidentical vs traditional&quot; is not really the choice — the choice is
              FDA-approved vs compounded.
            </p>

            <h2 id="realline" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Real Line: FDA-Approved vs Compounded</h2>

            <p className="text-gray-700 mb-4">
              FDA-approved hormone products — whether bioidentical (like estradiol and micronized
              progesterone) or older formulations — are tested for quality, purity, and consistent
              dosing. Custom compounded bioidentical therapy is mixed to order and is <strong>not FDA-approved
              and not FDA-tested</strong> for dose consistency or safety. That regulatory gap is why
              professional societies draw the line where they do — and it also shapes the price.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Where compounding has a legitimate role:</strong> ACOG and The Menopause Society
                agree there is a narrow role for compounded sex hormones — for example, an allergy to an
                ingredient in an FDA-approved product, or a dose or form that is not commercially made.
                Outside those cases, they recommend FDA-approved therapy first.
              </p>
            </div>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash-Pay Cost Compared</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>typical cash-pay ranges drawn from general market pricing</strong>,
              not live quotes, and they vary widely by pharmacy, dose, formulation, and clinic. Confirm
              current pricing with the provider and your insurer.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA-approved (incl. bioidentical)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Compounded bioidentical &amp; pellets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FDA status</td>
                    <td className="border border-gray-300 px-4 py-3">Approved and tested</td>
                    <td className="border border-gray-300 px-4 py-3">Not approved or tested</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Typical cash-pay cost (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$15-$75 / month (often lower generic)</td>
                    <td className="border border-gray-300 px-4 py-3">~$75-$300+ / month; pellets often several hundred $ per insertion</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Insurance coverage</td>
                    <td className="border border-gray-300 px-4 py-3">Often covered</td>
                    <td className="border border-gray-300 px-4 py-3">Frequently not covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dose consistency</td>
                    <td className="border border-gray-300 px-4 py-3">Standardized</td>
                    <td className="border border-gray-300 px-4 py-3">Harder to verify batch to batch</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Common forms</td>
                    <td className="border border-gray-300 px-4 py-3">Patch, gel, pill, vaginal, injection</td>
                    <td className="border border-gray-300 px-4 py-3">Custom creams, troches, pellets</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Guideline stance</td>
                    <td className="border border-gray-300 px-4 py-3">Recommended first</td>
                    <td className="border border-gray-300 px-4 py-3">Reserved for narrow cases</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="coverage" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Coverage Drives the Price Gap</h2>

            <p className="text-gray-700 mb-4">
              The biggest cost difference people notice is usually not the hormone itself — it is
              insurance coverage. FDA-approved products, including FDA-approved bioidentical estradiol
              and micronized progesterone, are frequently covered, so the out-of-pocket cost can be
              modest. Compounded formulations and pellet therapy are often cash-pay, which is why a
              &quot;bioidentical&quot; program at a cash-pay clinic can cost several times more per year
              than an FDA-approved bioidentical prescription filled through insurance.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask one question before you commit</h4>
              <p className="text-gray-700">
                &quot;Is there an FDA-approved bioidentical version of what you are recommending, and is
                it covered by my plan?&quot; In many cases the answer is yes — and it reframes a
                cash-pay compounded program as an optional upgrade, not a necessity. Confirm coverage
                with your insurer and the exact price with the pharmacy.
              </p>
            </div>

            <h2 id="guidance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Guidelines Say</h2>

            <p className="text-gray-700 mb-4">
              Major bodies are aligned. ACOG&apos;s 2023 Clinical Consensus and The Menopause Society
              advise that FDA-approved menopausal hormone therapies are recommended over compounded
              bioidentical therapy when an approved formulation exists, and that marketing claims of
              compounded products being safer or more natural are not supported by evidence. The
              Cleveland Clinic&apos;s patient guidance likewise notes the medical community recommends
              FDA-approved hormone therapy over compounded to ensure product quality. Compounding is
              reserved for specific clinical needs, not offered as a default upgrade.
            </p>

            <p className="text-gray-700 mb-4">
              None of this decides your treatment. Whether hormone therapy is right for you, and which
              formulation and dose, is a clinical decision that depends on your symptoms, history, and
              risk factors — including a personal or family history of blood clots, cardiovascular
              disease, or certain cancers. Make it with a licensed clinician.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save Safely</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Ask for the FDA-approved bioidentical option first.</strong> It often covers the same hormones at a lower cash cost with tested dosing.</li>
              <li><strong>Check your insurance formulary.</strong> Generic estradiol and micronized progesterone are frequently covered; that alone can be the biggest saving.</li>
              <li><strong>Price the full year, including labs and visits.</strong> Cash-pay hormone programs often bundle bloodwork and follow-ups — compare the annual total, not the monthly headline.</li>
              <li><strong>Be cautious with pellets.</strong> They are a cash-pay commitment that cannot be removed once inserted; weigh cost and control against alternatives with your clinician.</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Safety and quality beat the marketing</h4>
              <p className="text-gray-700">
                &quot;Natural&quot; and &quot;custom&quot; are marketing words, not safety guarantees.
                Tested, FDA-approved dosing is a real advantage. To compare licensed hormone clinics with
                transparent cash-pay pricing, browse the{' '}
                <Link href="/hormone-therapy" className="text-purple-600 hover:underline">hormone therapy directory</Link>{' '}
                or the <Link href="/trt" className="text-purple-600 hover:underline">TRT &amp; hormone optimization</Link> listings.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Decide</h2>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: FDA-approved hormone therapy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want tested quality and standardized dosing</li>
                <li>You want the lower cash cost or insurance coverage</li>
                <li>A standard formulation and dose fits your needs</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: most people starting hormone therapy, per current guidelines
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Compounded bioidentical</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have an allergy to an FDA-approved product</li>
                <li>You need a dose or form that is not commercially made</li>
                <li>A clinician recommends it for a specific reason</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: narrow clinical cases, not as a default upgrade
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Ask whether an FDA-approved bioidentical version exists for what is recommended</li>
              <li>Check whether your insurance covers it</li>
              <li>If compounding is proposed, ask what specific reason justifies it</li>
              <li>Compare the full annual cost, including labs and visits</li>
              <li>Decide with a licensed clinician who knows your history</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Testosterone specifics:</strong> our upcoming <Link href="/guides/trt-cost" className="text-purple-600 hover:underline">TRT cost index</Link> and the <Link href="/guides/best-online-trt-clinics" className="text-purple-600 hover:underline">best online TRT clinics</Link> guide.</li>
              <li><strong>Menopause care:</strong> see <Link href="/guides/online-menopause-treatment" className="text-purple-600 hover:underline">online menopause treatment</Link> options.</li>
              <li><strong>Pellet pricing:</strong> our <Link href="/guides/hormone-pellet-therapy-cost" className="text-purple-600 hover:underline">hormone pellet therapy cost guide</Link>.</li>
              <li><strong>Browse clinics:</strong> the <Link href="/hormone-therapy" className="text-purple-600 hover:underline">hormone therapy directory</Link>, <Link href="/trt" className="text-purple-600 hover:underline">TRT listings</Link>, or <Link href="/guides" className="text-purple-600 hover:underline">all health guides</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Hormone Clinic Near You</h3>
            <p className="mb-6 text-purple-100">
              Compare licensed hormone therapy and TRT clinics with transparent cash-pay pricing.
            </p>
            <Link
              href="/hormone-therapy"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Browse Hormone Clinics
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

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• ACOG — <em>Compounded Bioidentical Menopausal Hormone Therapy</em> (Clinical Consensus, Nov 2023): FDA-approved recommended over compounded; narrow role for compounding. <a href="https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/11/compounded-bioidentical-menopausal-hormone-therapy" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">acog.org</a></li>
              <li>• NASEM (NCBI Bookshelf) — <em>The Clinical Utility of Compounded Bioidentical Hormone Therapy</em> (FDA-approved bioidentical products include estradiol, micronized progesterone, DHEA). <a href="https://www.ncbi.nlm.nih.gov/books/NBK562886/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ncbi.nlm.nih.gov/books/NBK562886</a></li>
              <li>• Cleveland Clinic — <em>Bioidentical Hormones: Therapy, Uses, Safety &amp; Side Effects</em>. <a href="https://my.clevelandclinic.org/health/treatments/15660-bioidentical-hormones" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">my.clevelandclinic.org/health/treatments/15660</a></li>
              <li>• Cleveland Clinic — <em>Hormone Replacement Therapy (HRT) for Menopause</em>. <a href="https://my.clevelandclinic.org/health/treatments/15245-hormone-therapy-for-menopause-symptoms" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">my.clevelandclinic.org/health/treatments/15245</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Coverage, formulations, and prices vary by plan, pharmacy, and clinic. Figures are typical
              cash-pay ranges, not quotes — confirm current pricing and coverage with your provider and
              insurer. Hormone therapy is a clinical decision for a licensed clinician.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Hormone Therapy Cost Cheat Sheet"
            description="FDA-approved vs compounded bioidentical: how to find the covered option and compare the annual cash cost."
            source="guide_bioidentical_vs_traditional_hrt"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
