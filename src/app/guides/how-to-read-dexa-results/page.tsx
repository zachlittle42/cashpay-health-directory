import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'How to Read DEXA Scan Results: Body Comp & Bone Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/how-to-read-dexa-results' },
  description: 'How to read DEXA scan results — body-fat %, lean mass, visceral fat (VAT), and T-scores vs Z-scores explained, with the real reference ranges to look for.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every interpretive answer ends with the
// see-a-clinician hedge (consistent with MedicalDisclaimer). The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How do you read DEXA scan results?',
    answer:
      'A DEXA report has two halves. The body-composition page shows total and regional body-fat percentage, lean (muscle) mass per limb and trunk, a visceral-fat estimate, and an android/gynoid ratio. The bone page shows bone-mineral density with a T-score and a Z-score. Read the percentages and masses for your composition, then read the T-score (vs a healthy 30-year-old) or Z-score (vs your own age and sex) for bone. The single most useful habit is comparing the same machine over time, not chasing one absolute number. This is information, not a diagnosis — review your report with a clinician.',
  },
  {
    question: 'What is a good body fat percentage on a DEXA scan?',
    answer:
      'Using the widely cited ACE/ACSM ranges, the "fitness" band is roughly 14-17% for men and 21-24% for women, while the "athlete" band is about 6-13% for men and 14-20% for women. Essential fat is around 2-5% for men and 10-13% for women, and "obese" begins near 25%+ for men and 32%+ for women. DEXA tends to read a few points higher than calipers or BIA, so do not compare a DEXA number to a scale-fat number. There is no single ideal — use the band and your trend, and discuss targets with a clinician.',
  },
  {
    question: 'What is a dangerous visceral fat level on a DEXA scan?',
    answer:
      'DEXA reports visceral adipose tissue (VAT) as a mass, volume, or area. For the area measure, a peer-reviewed risk model groups 100-159 cm² as increased cardiometabolic risk and 160 cm² or more as high risk; under 100 cm² is generally considered lower risk. Visceral fat sits around the organs and is more strongly tied to diabetes and cardiovascular risk than subcutaneous fat. "Dangerous" is not a single line in the sand — VAT is one input among many. Have a clinician interpret your number alongside your blood pressure, glucose, and lipids.',
  },
  {
    question: 'What is the difference between a T-score and a Z-score on a DEXA scan?',
    answer:
      'A T-score compares your bone-mineral density to a healthy young adult (around age 30) and is the score used to diagnose osteopenia and osteoporosis in postmenopausal women and men 50 and older, per WHO criteria. A Z-score compares you to people of your own age and sex; per ISCD, it is the preferred score for premenopausal women, men under 50, and children. So the T-score answers "how does my bone compare to peak bone mass" and the Z-score answers "how does my bone compare to people like me." Your report usually shows both — which one matters depends on your age and sex.',
  },
  {
    question: 'What T-score means osteoporosis?',
    answer:
      'Under the WHO classification, a T-score of -1.0 or higher is normal, a T-score between -1.0 and -2.5 is osteopenia (low bone mass), and a T-score of -2.5 or lower is osteoporosis. These thresholds apply to postmenopausal women and men 50 and older. A T-score is not used to diagnose osteoporosis in younger adults or children — a Z-score is read instead, where -2.0 or lower is "below the expected range for age." A diagnosis and any treatment decision belong with your clinician, not a chart alone.',
  },
  {
    question: 'How accurate is a DEXA scan for body composition?',
    answer:
      'DEXA is considered highly accurate compared with most other accessible body-composition methods, and UCSF Radiology notes it tells a clearer story than BMI — in one UCSF figure, 18.5% of women with a normal BMI had excess fat visible on DXA. Its biggest edge is regional detail: it shows lean mass and fat per arm, per leg, and in the trunk, plus a visceral-fat estimate. For tracking, accuracy depends on consistency — same machine, similar time of day, and similar hydration scan to scan. Results are estimates, not a clinical verdict.',
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

// Body-fat reference bands (ACE/ACSM general-population chart). These are
// fitness reference ranges, NOT diagnostic cutoffs. Source: ACE Body
// Composition Percentage Chart; cross-checked vs ACSM categories.
const BODY_FAT_BANDS = [
  { category: 'Essential fat', men: '2-5%', women: '10-13%' },
  { category: 'Athletes', men: '6-13%', women: '14-20%' },
  { category: 'Fitness', men: '14-17%', women: '21-24%' },
  { category: 'Average', men: '18-24%', women: '25-31%' },
  { category: 'Obese', men: '25%+', women: '32%+' },
];

// WHO T-score categories (postmenopausal women, men 50+) and the ISCD Z-score
// cutoff (premenopausal women, men <50, children). Diagnostic categories are
// applied by a clinician — this table is for reading, not self-diagnosis.
const BONE_SCORES = [
  { score: 'T-score ≥ -1.0', meaning: 'Normal bone density', basis: 'WHO classification' },
  { score: 'T-score -1.0 to -2.5', meaning: 'Osteopenia (low bone mass)', basis: 'WHO classification' },
  { score: 'T-score ≤ -2.5', meaning: 'Osteoporosis', basis: 'WHO classification' },
  { score: 'Z-score > -2.0', meaning: 'Within expected range for age', basis: 'ISCD position' },
  { score: 'Z-score ≤ -2.0', meaning: 'Below expected range for age', basis: 'ISCD position' },
];

export default function HowToReadDexaResults() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'How to Read DEXA Scan Results (Body Composition & Bone Density)',
    description:
      'A plain-English guide to reading a DEXA report — body-fat percentage, lean mass, visceral fat (VAT), and the T-score vs Z-score on the bone-density page, with the real reference ranges.',
    url: 'https://vitalityscout.com/guides/how-to-read-dexa-results',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/how-to-read-dexa-results#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition and bone density scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'ISCD — 2023 Official Adult Positions (T-score vs Z-score)', url: 'https://iscd.org/official-positions-2023/' },
      { '@type': 'CreativeWork', name: 'Medical News Today — Z-scores for bone density (WHO T-score chart)', url: 'https://www.medicalnewstoday.com/articles/z-scores-for-bone-density-chart-meaning-and-more' },
      { '@type': 'CreativeWork', name: 'Frontiers in Rehabilitation Sciences — DXA VAT cardiometabolic risk thresholds', url: 'https://www.frontiersin.org/journals/rehabilitation-sciences/articles/10.3389/fresc.2021.712977/full' },
      { '@type': 'CreativeWork', name: 'ACE — Body Composition Percentage Chart', url: 'https://download.tomtom.com/open/manuals/band/html/en-us/ACEBodyCompositionPercentageChart-Ibiza.htm' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/how-to-read-dexa-results#faq', url: 'https://vitalityscout.com/guides/how-to-read-dexa-results' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              DEXA Results Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Read DEXA Scan Results
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Your report has two halves — body composition and bone density. Here is what
            each number means, the reference ranges to look for, and how to read your trend.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              To read a DEXA scan, split the report in two. The{' '}
              <strong>body-composition page</strong> shows body-fat percentage, lean (muscle)
              mass per limb and trunk, a <strong>visceral-fat (VAT)</strong> estimate, and an
              android/gynoid ratio. The <strong>bone-density page</strong> shows your{' '}
              <strong>T-score</strong> (vs a healthy 30-year-old) and{' '}
              <strong>Z-score</strong> (vs your own age and sex). Read the composition numbers
              for fat and muscle, the T- or Z-score for bone, and your trend across scans on the
              same machine. This is information, not a diagnosis — review it with a clinician.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* The two halves of the report */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Two Halves of a DEXA Report</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A DEXA (dual-energy X-ray absorptiometry) report answers two different questions,
            and they are easy to mix up:
          </p>
          <ul>
            <li>
              <strong>Body composition</strong> — how much of you is fat, how much is lean
              (muscle and organs), and where the fat sits. This is the page most people get a
              scan for. It reports fat and lean mass for the whole body and for each region
              (arms, legs, trunk), plus a visceral-fat estimate and an android/gynoid ratio.
            </li>
            <li>
              <strong>Bone mineral density (BMD)</strong> — how dense your bones are, reported
              with a T-score and a Z-score. This is the original clinical use of DEXA and the
              one insurers most often cover for osteoporosis screening.
            </li>
          </ul>
          <p>
            UCSF Radiology notes DXA is highly accurate compared with most other accessible
            body-composition methods and tells a clearer story than BMI — in one UCSF figure,{' '}
            <strong>18.5% of women with a normal BMI had excess fat</strong> visible on DXA. Its
            biggest advantage over a scale or a handheld device is that regional detail: it can
            show that your right leg carries more lean mass than your left, or that your trunk
            fat is the part that moved.
          </p>
        </div>
      </section>

      {/* Body composition: fat */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Body-Fat Percentage: What the Number Means</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Your report gives a <strong>total body-fat percentage</strong> and breaks it down
              by region. There is no single "ideal" number — it is a band that depends on sex,
              age, and goals. The widely cited ACE/ACSM general-population ranges below are{' '}
              <strong>fitness reference ranges, not diagnostic cutoffs</strong>:
            </p>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Men</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Women</th>
                </tr>
              </thead>
              <tbody>
                {BODY_FAT_BANDS.map((b, i) => (
                  <tr key={b.category} className={i % 2 === 1 ? 'bg-white' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{b.category}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{b.men}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{b.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Source: ACE Body Composition Percentage Chart, cross-checked against ACSM categories.
            Ranges are general guidance, not a medical assessment.
          </p>

          <div className="prose prose-lg max-w-none mt-6">
            <p>
              One trap worth naming: <strong>DEXA usually reads a few points higher than
              calipers, smart scales, or handheld BIA devices.</strong> That is expected — the
              methods measure differently. Do not compare a DEXA body-fat number to your bathroom
              scale&apos;s number, and do not panic if DEXA is higher. Compare DEXA to DEXA.
            </p>
          </div>
        </div>
      </section>

      {/* Lean mass */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Lean Mass: The Number to Protect</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            <strong>Lean mass</strong> (sometimes shown as lean soft tissue or fat-free mass) is
            everything that is not fat or bone — primarily muscle, plus water and organs. DEXA
            reports it for your whole body and for each region: left arm, right arm, left leg,
            right leg, and trunk. No other accessible body-composition test gives that much
            regional detail.
          </p>
          <p>
            Why it matters for reading your report: when you are losing weight — especially on a
            calorie deficit or a GLP-1 medication — the goal is usually to lose fat while
            <em> preserving</em> lean mass. A scan that shows weight down but lean mass also
            falling sharply is telling you something a bathroom scale cannot. Watching the
            fat-mass line and the lean-mass line move independently is the single most useful
            thing a DEXA tells most people. (For more on the GLP-1 and muscle question, see the
            DEXA complete guide below.)
          </p>
        </div>
      </section>

      {/* Visceral fat */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visceral Fat (VAT): The Health-Risk Number</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Visceral adipose tissue (VAT)</strong> is the fat packed around your
              internal organs, as opposed to the subcutaneous fat just under the skin. It is the
              metabolically active fat most strongly linked to type 2 diabetes and cardiovascular
              disease, which is why your report flags it separately. UCSF notes DXA estimates VAT
              and that this measure can help predict diabetes and cardiovascular risk.
            </p>
            <p>
              DEXA can report VAT as a <strong>mass</strong>, a <strong>volume</strong>, or an{' '}
              <strong>area</strong>. For the area measure, a peer-reviewed cardiometabolic-risk
              model in <em>Frontiers in Rehabilitation Sciences</em> groups VAT area like this:
            </p>
            <ul>
              <li><strong>Under 100 cm²</strong> — generally lower risk</li>
              <li><strong>100-159 cm²</strong> — increased cardiometabolic risk</li>
              <li><strong>160 cm² or more</strong> — high risk</li>
            </ul>
            <p>
              Read these as a flag, not a verdict. VAT is one input a clinician weighs alongside
              your blood pressure, fasting glucose, and lipid panel. A single number above a
              threshold does not diagnose anything — but a high or rising VAT is worth raising at
              your next appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Android/Gynoid */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Android/Gynoid Ratio: Where the Fat Sits</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The <strong>android/gynoid (A/G) ratio</strong> describes the pattern of fat storage.{' '}
            <strong>Android</strong> ("apple shape") is fat carried around the abdomen and
            midsection; <strong>gynoid</strong> ("pear shape") is fat carried around the hips and
            thighs. A higher A/G ratio means more abdominal storage, which tends to track with the
            visceral-fat risk picture above.
          </p>
          <p>
            As a general reference, lower A/G ratios are considered more favorable from a
            metabolic-risk standpoint. Treat the ratio as context for the VAT number rather than a
            standalone score, and discuss what it means for you with a clinician.
          </p>
        </div>
      </section>

      {/* Bone density: T vs Z scores */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bone Density: T-Score vs Z-Score</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The bone-density page reports your bone-mineral density at sites like the spine and
              hip, with two standardized scores. They answer different questions:
            </p>
            <ul>
              <li>
                <strong>T-score</strong> compares your bone to a healthy young adult (around age
                30, at peak bone mass). Per WHO criteria, it is the score used to diagnose
                osteopenia and osteoporosis in <strong>postmenopausal women and men 50 and
                older</strong>.
              </li>
              <li>
                <strong>Z-score</strong> compares your bone to people of your own age and sex.
                Per the International Society for Clinical Densitometry (ISCD), it is the preferred
                score for <strong>premenopausal women, men under 50, and children</strong> — where
                applying T-score osteoporosis criteria would overestimate risk.
              </li>
            </ul>
            <p>So the question "which score do I read?" is answered by your age and sex.</p>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Score</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Meaning</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Basis</th>
                </tr>
              </thead>
              <tbody>
                {BONE_SCORES.map((s, i) => (
                  <tr key={s.score} className={i % 2 === 1 ? 'bg-white' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{s.score}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{s.meaning}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{s.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            T-score categories: WHO classification. Z-score cutoff: ISCD Official Positions. These
            are interpretation guides; a diagnosis is made by a clinician.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> A body-composition DEXA scan and a clinical bone-density
              (DXA) scan are not always the same appointment. Some body-comp studios report bone
              data; some do not. If bone health is your reason for scanning, confirm the report
              includes a T-score and Z-score before you book.
            </p>
          </div>
        </div>
      </section>

      {/* How to read your trend */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Read Your Trend Across Scans</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A single DEXA is a snapshot. The real value is the slope between scans — but only if
            the scans are comparable. To make scan-to-scan comparisons meaningful:
          </p>
          <ul>
            <li><strong>Same machine.</strong> Different DEXA devices and software calibrate differently; switching machines adds noise that can swamp a real change.</li>
            <li><strong>Similar time of day and hydration.</strong> Lean mass includes water, so a dehydrated morning scan and a well-hydrated afternoon scan will not line up.</li>
            <li><strong>Sensible spacing.</strong> Body composition does not move quickly. Every 3-6 months while actively changing, or annually for maintenance, is a common cadence; monthly is usually too frequent to show signal over noise.</li>
            <li><strong>Read fat and lean separately.</strong> The headline you want is "fat down, lean held," not just "weight down."</li>
          </ul>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page / hub */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Get a DEXA Scan?</h3>
          <p className="text-gray-600 mb-6">
            Compare verified body-composition DEXA providers by city — prices, locations, and
            add-on testing.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Find a DEXA Scan Near You →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">How the three body-comp tests compare</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-gray-900">Is a DEXA Scan HSA/FSA Eligible?</div>
                <div className="text-sm text-gray-600">Coverage rules, costs, and how to pay</div>
              </div>
            </div>
          </Link>

          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Hub</div>
                <div className="text-sm text-gray-600">Find body-composition clinics by city</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCSF Radiology — Why DXA/DEXA beats BMI (accuracy, VAT, regional detail)</a></li>
            <li>• <a href="https://iscd.org/official-positions-2023/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISCD — 2023 Official Adult Positions (T-score vs Z-score use)</a></li>
            <li>• <a href="https://www.medicalnewstoday.com/articles/z-scores-for-bone-density-chart-meaning-and-more" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medical News Today — Z-scores for bone density (WHO T-score chart)</a></li>
            <li>• <a href="https://www.frontiersin.org/journals/rehabilitation-sciences/articles/10.3389/fresc.2021.712977/full" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Frontiers in Rehabilitation Sciences — DXA VAT cardiometabolic risk thresholds</a></li>
            <li>• <a href="https://download.tomtom.com/open/manuals/band/html/en-us/ACEBodyCompositionPercentageChart-Ibiza.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ACE — Body Composition Percentage Chart (body-fat reference bands)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our DEXA results cheat-sheet plus tips for reading your scan and tracking real progress over time."
          source="guide_how_to_read_dexa_results"
        />
      </div>

      <Footer />
    </main>
  );
}
