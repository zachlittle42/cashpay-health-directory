import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Egg Freezing Cost USA (2026): Cycle, Meds & Storage' },
  alternates: { canonical: 'https://vitalityscout.com/guides/egg-freezing-cost-usa' },
  description:
    'Egg freezing cost in the USA: ~$12,000-20,000 all-in per cycle. Procedure, meds & storage, plus clinic vs startup (Cofertility, Kindbody) pricing.',
};

// Real long-tail / PAA questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does egg freezing cost in the US in 2026?',
    answer:
      'A single egg-freezing cycle in the US typically costs about $12,000-$20,000 all-in. That breaks down roughly into an $8,000-$15,000 procedure fee (monitoring, retrieval, and the first freeze), $3,000-$6,000 in stimulation medications, and $500-$1,000 per year of storage after the included first period. Lower-cost clinics like CNY Fertility advertise a full cycle near $6,994 plus about $1,800 in meds. These are estimates that vary by clinic, your protocol, and how many eggs you target — confirm current pricing directly with the provider.',
  },
  {
    question: 'Why is egg freezing so expensive in the US?',
    answer:
      'The headline price bundles several separate services: the monitored stimulation cycle, the egg-retrieval surgery under sedation, the lab vitrification (flash-freeze), the fertility medications, and ongoing cryostorage. Medications alone average around $4,000 a cycle. Pricing also tracks local market rates — New York City cycles can approach $18,000 before medications, while clinics in Chicago, Dallas, Atlanta, and Denver more often fall in the $9,000-$13,000 procedure range. Always ask for an itemized written quote so you can compare like for like.',
  },
  {
    question: 'Can you freeze your eggs for free in the US?',
    answer:
      'Through Cofertility\'s Split program, eligible women (roughly ages 21-33, BMI under 30, non-smoker, both ovaries present) can freeze their eggs at no cost by donating half of the eggs retrieved to another family. Cofertility states this covers 100% of the cost plus 10 years of storage. The trade-off is that you keep only half your eggs and become an egg donor, so it is a values decision as much as a cost one. Those who do not qualify can use Cofertility\'s self-pay Keep program with partner discounts.',
  },
  {
    question: 'How much does egg storage cost per year in the US?',
    answer:
      'Annual egg storage at most US fertility clinics runs about $500-$1,000 per year, with a national average near $800; the first year is often included in the cycle price. Some clinics are lower — CNY Fertility lists $600 a year and Kindbody about $920 after an initial included period. Dedicated off-site cryostorage providers such as ReproTech are frequently estimated lower still (roughly $200-$500 per year), though you should request their current fee schedule directly. Storage is an ongoing cost, so factor in several years.',
  },
  {
    question: 'How many egg freezing cycles will I need?',
    answer:
      'It depends mostly on your age and egg goal. Reported clinic data suggests younger patients with good ovarian reserve often reach their target in one or two cycles, while patients in their late 30s commonly need two to three; research cited by clinics shows over 20% of patients complete three or more cycles. Because each added cycle repeats the procedure and medication cost, multi-cycle is a major driver of total spend. A fertility specialist can estimate your likely yield from baseline AMH and antral-follicle testing.',
  },
  {
    question: 'Is egg freezing covered by insurance or HSA/FSA in the US?',
    answer:
      'It varies widely. More than 20 states plus Washington, D.C. have some fertility-coverage requirement, and several (for example Illinois, Delaware, and New Jersey) are described as relatively comprehensive — but nearly half of US states have no mandate, leaving most patients paying out of pocket. Egg freezing is also a growing employer benefit. Where it is a qualified medical expense, HSA/FSA funds can typically be used. Check your specific state mandate, employer benefits, and plan administrator before assuming coverage.',
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

export default function EggFreezingCostUsa() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Egg Freezing Cost in the USA (2026): Cycle, Medications & Storage',
    description:
      'A grounded breakdown of egg-freezing (oocyte cryopreservation) cost in the United States — the per-cycle procedure fee, medications, and annual storage, plus how traditional clinics compare to startup models like Cofertility and Kindbody, and how US pricing compares to going abroad.',
    url: 'https://vitalityscout.com/guides/egg-freezing-cost-usa',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/egg-freezing-cost-usa#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Oocyte cryopreservation (egg freezing)',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'How Much Does It Cost to Freeze Your Eggs? 2026 Price Guide (CNY Fertility)',
        url: 'https://www.cnyfertility.com/egg-freezing-cost/',
      },
      {
        '@type': 'CreativeWork',
        name: 'Split Program — Freeze Your Eggs for Free (Cofertility)',
        url: 'https://www.cofertility.com/freeze/split',
      },
      {
        '@type': 'CreativeWork',
        name: 'Egg Freezing Costs by State: What You’ll Pay in the U.S. (Cofertility)',
        url: 'https://www.cofertility.com/freeze-learn/comparing-egg-freezing-costs-across-the-u-s-and-why-location-matters',
      },
      {
        '@type': 'CreativeWork',
        name: 'Fertility Pricing — Services & Pricing (Kindbody)',
        url: 'https://kindbody.com/services-pricing/',
      },
      {
        '@type': 'CreativeWork',
        name: 'Storage Fees — Long-Term Cryostorage (ReproTech)',
        url: 'https://reprotech.com/for-customers/storage-fees/',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/egg-freezing-cost-usa#faq', url: 'https://vitalityscout.com/guides/egg-freezing-cost-usa' };

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
              <Link href="/womens-health" className="hover:text-blue-600">Women&apos;s Health</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Egg Freezing Cost USA</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/womens-health" className="text-sm text-rose-600 hover:underline mb-4 inline-block">
              &larr; Women&apos;s Health Hub
            </Link>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">🥚</span>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Egg Freezing Cost in the USA (2026)
            </h1>
            <p className="text-xl text-gray-600">
              What oocyte cryopreservation actually costs at US clinics, line by line — the procedure,
              the medications, and the annual storage — plus how traditional clinics compare to newer
              startup models like Cofertility and Kindbody.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 12 min read</p>

            {/* Direct-answer lead (AEO): self-contained 40-80 word summary of the head query */}
            <div className="mt-6 rounded-lg border-l-4 border-rose-600 bg-rose-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Egg freezing in the US typically costs <strong>$12,000-$20,000 all-in per cycle</strong>:
                an <strong>$8,000-$15,000</strong> procedure fee, <strong>$3,000-$6,000</strong> in
                medications, and <strong>$500-$1,000</strong> a year of storage. Lower-cost clinics
                advertise a full cycle near <strong>$7,000</strong>; New York runs highest (~$18,000 before
                meds). Startups can change the math — Cofertility&apos;s Split program covers it free if you
                donate half your eggs. Every figure is an estimate to confirm with the clinic. This is
                information, not medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* Quick cost-stack cards */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Cost Stack at a Glance</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="font-bold text-rose-600 mb-2">One cycle, all-in (national)</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Procedure (monitoring + retrieval + freeze): ~$8,000-$15,000</li>
                <li>• Stimulation medications: ~$3,000-$6,000 (avg ~$4,000)</li>
                <li>• Storage, year 1: often included</li>
                <li>• Storage, each later year: ~$500-$1,000</li>
                <li>• <strong>Typical all-in: ~$12,000-$20,000</strong></li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="font-bold text-indigo-600 mb-2">Why the total climbs</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Many patients need 2+ cycles for enough eggs</li>
                <li>• NYC cycles can near $18,000 before meds</li>
                <li>• Anesthesia is sometimes billed separately</li>
                <li>• Storage is an annual cost for years</li>
                <li>• Future thaw + IVF + transfer is extra later</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            All figures are estimates that vary by clinic, location, protocol, and current promotions —
            confirm the current number directly with the provider.
          </p>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-4">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#breakdown" className="text-blue-600 hover:underline">1. The full cost breakdown: procedure, meds, storage</a></li>
              <li><a href="#by-region" className="text-blue-600 hover:underline">2. How much it costs by US city / region</a></li>
              <li><a href="#clinic-vs-startup" className="text-blue-600 hover:underline">3. Traditional clinic vs startup pricing models</a></li>
              <li><a href="#cofertility" className="text-blue-600 hover:underline">4. Cofertility: freeze for free by donating half</a></li>
              <li><a href="#insurance" className="text-blue-600 hover:underline">5. Insurance, employer benefits &amp; HSA/FSA</a></li>
              <li><a href="#us-vs-abroad" className="text-blue-600 hover:underline">6. US vs abroad: when traveling makes sense</a></li>
              <li><a href="#how-to-save" className="text-blue-600 hover:underline">7. How to lower the bill</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Egg freezing in the US is priced as a bundle of separate services, and the headline number
              you see in an ad is rarely the number you pay. The honest figure is a <strong>stack</strong>:
              the monitored stimulation cycle and retrieval, the fertility medications, and years of
              storage on top. Below is the line-by-line breakdown for 2026, what real US clinics actually
              charge, and how the newer startup models change the math.
            </p>

            <h2 id="breakdown" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Full Cost Breakdown</h2>

            <p className="text-gray-700 mb-4">
              A single egg-freezing cycle in the US is most often quoted at a national average of{' '}
              <strong>$12,000-$20,000 all-in</strong>. That total is built from three components, and
              comparing clinics means comparing each one — not just the procedure headline.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost component</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical US range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it covers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Procedure / cycle fee</td>
                    <td className="border border-gray-300 px-4 py-3">~$8,000 - $15,000</td>
                    <td className="border border-gray-300 px-4 py-3">Monitoring visits, ultrasounds, blood draws, egg retrieval, vitrification (freeze)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Stimulation medications</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,000 - $6,000 (avg ~$4,000)</td>
                    <td className="border border-gray-300 px-4 py-3">10-14 days of injectable hormones; dose-dependent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Anesthesia (if separate)</td>
                    <td className="border border-gray-300 px-4 py-3">Sometimes billed apart</td>
                    <td className="border border-gray-300 px-4 py-3">Sedation for retrieval; included at some clinics, extra at others</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Storage, year 1</td>
                    <td className="border border-gray-300 px-4 py-3">Often included</td>
                    <td className="border border-gray-300 px-4 py-3">First period of cryostorage usually bundled into the cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Storage, each later year</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $1,000/yr (avg ~$800)</td>
                    <td className="border border-gray-300 px-4 py-3">Ongoing annual fee; off-site providers can be lower</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Future use (later)</td>
                    <td className="border border-gray-300 px-4 py-3">Thaw + IVF + transfer extra</td>
                    <td className="border border-gray-300 px-4 py-3">Paid only if and when you use the eggs; a separate cost</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Two cycles is common — budget for it</h4>
              <p className="text-gray-700">
                Freezing eggs is about banking <em>enough</em> eggs, not completing one procedure.
                Clinic data suggests younger patients often hit their goal in one or two cycles, while
                patients in their late 30s commonly need two to three, and over 20% complete three or
                more. Because each cycle repeats the procedure and medication cost, the realistic total
                for many people is closer to two cycles than one.
              </p>
            </div>

            <h2 id="by-region" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Much It Costs by US City / Region</h2>

            <p className="text-gray-700 mb-4">
              Where you freeze matters. Egg-freezing prices track local fertility-market rates, so the
              same procedure can swing by thousands of dollars between metros. These are reported
              estimates, not live quotes — price your exact clinic before deciding.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Market</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Reported procedure range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">New York City</td>
                    <td className="border border-gray-300 px-4 py-3">~$18,000 before meds</td>
                    <td className="border border-gray-300 px-4 py-3">Reported as the costliest US market</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">San Francisco / Los Angeles</td>
                    <td className="border border-gray-300 px-4 py-3">~$10,000 - $15,000 (procedure)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher tier; meds add considerably more</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Chicago / Dallas / Atlanta / Denver</td>
                    <td className="border border-gray-300 px-4 py-3">~$9,000 - $13,000 (procedure)</td>
                    <td className="border border-gray-300 px-4 py-3">More moderate Midwest / South pricing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lower-cost national clinics</td>
                    <td className="border border-gray-300 px-4 py-3">~$7,000 full cycle (e.g. CNY Fertility)</td>
                    <td className="border border-gray-300 px-4 py-3">Some clinics list well below the metro averages</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="clinic-vs-startup" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Traditional Clinic vs Startup Pricing Models</h2>

            <p className="text-gray-700 mb-4">
              A wave of fertility startups has reshaped how egg freezing is priced and sold. Some publish
              flat, transparent prices; one removes the price tag entirely in exchange for donating half
              your eggs. Here is how a few real, named US options compare on their stated models.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stated pricing model (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Storage / financing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CNY Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,999 procedure-only; ~$6,994 full cycle (+ ~$1,800 meds)</td>
                    <td className="border border-gray-300 px-4 py-3">~$600/yr storage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Kindbody</td>
                    <td className="border border-gray-300 px-4 py-3">~$6,900-$9,660 per cycle by location (+ ~$4,000-$6,000 meds; anesthesia extra)</td>
                    <td className="border border-gray-300 px-4 py-3">3 months included, then ~$920/yr; PatientFi financing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cofertility (Split)</td>
                    <td className="border border-gray-300 px-4 py-3">$0 if you donate half your eggs (covers meds + retrieval)</td>
                    <td className="border border-gray-300 px-4 py-3">10 years of storage included</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cofertility (Keep)</td>
                    <td className="border border-gray-300 px-4 py-3">Self-pay; keep all eggs, partner discounts</td>
                    <td className="border border-gray-300 px-4 py-3">Storage per program terms</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">ReproTech (storage only)</td>
                    <td className="border border-gray-300 px-4 py-3">Off-site long-term cryostorage (often estimated ~$200-$500/yr)</td>
                    <td className="border border-gray-300 px-4 py-3">Request current fee schedule; not a retrieval clinic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What this means:</strong> the per-cycle price is not the whole story. A clinic with
                a higher cycle fee but included anesthesia and a year of storage can cost less all-in than
                a low headline price with separate medication, anesthesia, and storage charges. Compare the
                <em> itemized total</em>, including the years of storage you actually expect to pay.
              </p>
            </div>

            <h2 id="cofertility" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cofertility: Freeze for Free by Donating Half</h2>

            <p className="text-gray-700 mb-4">
              The most disruptive US pricing model is Cofertility&apos;s <strong>Split</strong> program.
              Instead of paying the five-figure bill, an eligible woman freezes her eggs at no cost and
              donates half of the eggs retrieved to another family who cannot otherwise conceive. Cofertility
              states this covers 100% of the cost plus 10 years of storage.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>What&apos;s covered:</strong> all stimulation medications, the retrieval under sedation, and 10 years of storage</li>
              <li><strong>The trade-off:</strong> you keep half the eggs and become an egg donor — a values decision, not just a financial one</li>
              <li><strong>Eligibility (stated):</strong> roughly ages 21-33, BMI under 30, both ovaries present, non-smoker, generally healthy</li>
              <li><strong>If you don&apos;t qualify:</strong> the self-pay <strong>Keep</strong> program lets you keep all your eggs with partner discounts</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Free has a real trade-off</h4>
              <p className="text-gray-700">
                Split removes the cost, but you walk away with about half the eggs you would have kept
                paying out of pocket, and you take on the medical, legal, and emotional considerations of
                being a donor. For some people that is a clear win; for others, paying to keep every egg is
                worth it. Talk it through with a fertility clinician and, where relevant, a counselor before
                deciding.
              </p>
            </div>

            <h2 id="insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance, Employer Benefits &amp; HSA/FSA</h2>

            <p className="text-gray-700 mb-4">
              Coverage is the single biggest variable that can change what you actually pay, and it is
              uneven across the country.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>State mandates:</strong> more than 20 states plus Washington, D.C. have some fertility-coverage requirement; states like Illinois, Delaware, and New Jersey are described as relatively comprehensive. Nearly half of US states have no mandate, so most patients pay out of pocket.</li>
              <li><strong>Employer benefits:</strong> egg freezing is an increasingly common workplace benefit — check whether your employer (or a partner&apos;s) offers a fertility benefit before paying retail.</li>
              <li><strong>HSA/FSA:</strong> where egg freezing qualifies as a medical expense, HSA/FSA funds can typically be applied, effectively discounting it by your tax rate. Confirm eligibility with your plan administrator.</li>
              <li><strong>Medication relief:</strong> the federal TrumpRx.gov program launched in February 2026 advertises steep discounts on specific fertility drugs (e.g. Gonal-f, Ovidrel, Cetrotide), which can reduce per-cycle medication cost. Verify current eligibility and pricing.</li>
            </ul>

            <h2 id="us-vs-abroad" className="text-2xl font-bold text-gray-900 mt-12 mb-6">US vs Abroad: When Traveling Makes Sense</h2>

            <p className="text-gray-700 mb-4">
              The same procedure costs dramatically less in parts of Europe — a cycle that runs
              $12,000-$20,000 all-in here is often a few thousand euros abroad. But traveling adds flights,
              lodging, time off, and the complication of using eggs stored overseas later, and eligibility
              laws differ by country. It is a real option for some, and a poor fit for others.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Decide US vs abroad on the all-in number</h4>
              <p className="text-gray-700">
                If you want to weigh traveling, do it on the full picture, not just the procedure price.
                Our companion guide,{' '}
                <Link href="/guides/egg-freezing-abroad-cost" className="text-blue-600 hover:underline">
                  egg freezing abroad cost
                </Link>
                , breaks down Spain, the Czech Republic, Greece, and North Cyprus pricing plus the
                eligibility laws that decide where you can later use your eggs. For the related treatment,
                see our{' '}
                <Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">
                  IVF cost by country
                </Link>{' '}
                comparison.
              </p>
            </div>

            <h2 id="how-to-save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Lower the Bill</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get an itemized written quote</strong> from every clinic — separate the procedure, meds, anesthesia, and storage so you compare like for like.</li>
              <li><strong>Check coverage first:</strong> your state mandate, employer fertility benefit, and HSA/FSA eligibility can each move the number more than any clinic discount.</li>
              <li><strong>Look beyond your metro:</strong> lower-cost national clinics can run thousands below a New York or Bay Area cycle.</li>
              <li><strong>Consider the startup models:</strong> a transparent-price platform, financing through partners like PatientFi, or Cofertility&apos;s Split program may fit your situation.</li>
              <li><strong>Price storage over years, not one:</strong> an off-site cryostorage provider can be cheaper long-term than a clinic&apos;s annual fee — but confirm transfer logistics.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Going abroad:</strong> <Link href="/guides/egg-freezing-abroad-cost" className="text-blue-600 hover:underline">egg freezing abroad cost vs the US</Link></li>
              <li><strong>The next step, IVF:</strong> <Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">IVF cost by country</Link></li>
              <li><strong>More guides:</strong> browse the full <Link href="/guides" className="text-blue-600 hover:underline">cash-pay health guides</Link> library</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Women&apos;s Health Care</h3>
            <p className="mb-6 text-rose-100">
              See transparent, self-pay options for fertility, hormones, and women&apos;s health side by side.
            </p>
            <Link
              href="/womens-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            >
              Browse Women&apos;s Health
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
              <li>• CNY Fertility — 2026 egg freezing price guide (procedure, full cycle, medication, storage, cycles needed)</li>
              <li>• Cofertility — Split program (free egg freezing via half-donation, eligibility, 10-year storage)</li>
              <li>• Cofertility — egg freezing costs by US state/region (NYC, CA, Midwest/South, insurance mandates)</li>
              <li>• Kindbody — services &amp; pricing (per-cycle cost by location, what is included, storage, PatientFi financing)</li>
              <li>• ReproTech — long-term cryostorage fees (off-site egg/embryo storage)</li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL medical + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Egg Freezing Cost Cheat Sheet"
            description="The line-by-line US egg-freezing budget, clinic vs startup pricing, and the questions to ask before you book."
            source="guide_egg_freezing_cost_usa"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
