import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Egg Freezing Abroad Cost (2026): Prices vs the US' },
  alternates: { canonical: 'https://vitalityscout.com/guides/egg-freezing-abroad-cost' },
  description:
    'Egg freezing abroad: ~€2,000-4,700/cycle vs $12,000-20,000 in the US. Spain, Czech, Greece & N. Cyprus prices, eligibility laws, how to choose a clinic.',
};

// Real long-tail / PAA questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does egg freezing cost abroad in 2026?',
    answer:
      'A single egg-freezing cycle abroad typically costs about €2,000-4,700 for the procedure, versus roughly $12,000-20,000 in the US including medications and first-year storage. The Czech Republic and Greece are the lowest (about €2,000-3,000), Spain mid-range (€3,500-4,700), with medications adding around €800-1,200 and annual storage €300-600. These are estimates that vary by clinic, protocol, and how many eggs you target — confirm current pricing directly with the provider.',
  },
  {
    question: 'Is egg freezing cheaper in Europe than the US?',
    answer:
      'Generally yes. Reported European egg-freezing costs run roughly 30-50% below US pricing. A cycle that runs $12,000-20,000 all-in in the US often costs the equivalent of €2,000-4,700 for the procedure in Spain, the Czech Republic, or Greece, plus €800-1,200 in medications. Remember to budget separately for flights, lodging, and ongoing annual storage, which narrow the headline gap.',
  },
  {
    question: 'Which country is cheapest for egg freezing?',
    answer:
      'Among the established European destinations, the Czech Republic and Greece are typically the lowest, at roughly €2,000-3,000 for the procedure, with annual storage of about €300-600. North Cyprus is similar at around €2,500. Spain is somewhat higher (€3,500-4,700) but is the most-traveled-to destination with the deepest international-patient infrastructure. Confirm any quote in writing and ask exactly what it includes.',
  },
  {
    question: 'Can a single woman freeze her eggs abroad?',
    answer:
      'In Spain, Greece, and North Cyprus, single women can both freeze eggs and later use them for IVF — these countries have inclusive eligibility laws. In the Czech Republic a single woman can freeze her eggs, but current law requires a male partner to use them for IVF later, which is a key reason single women often choose Spain or Greece instead. Verify the current rules with the clinic before booking.',
  },
  {
    question: 'What is included in an egg-freezing price abroad?',
    answer:
      'A quoted egg-freezing procedure fee abroad usually covers consultations, monitoring during stimulation, egg retrieval under sedation, and the vitrification (freezing) of your eggs. Stimulation medications (about €800-1,200) and annual storage (about €300-600) are typically billed separately, and the future cost of thawing, fertilizing, and transferring the eggs is not included. Always ask each clinic for an itemized written quote before comparing.',
  },
  {
    question: 'How many cycles of egg freezing will I need?',
    answer:
      'It depends on age and how many eggs you want to bank. Reported US averages suggest patients under 35 often reach their goal in one or two cycles, while patients aged 38-40 frequently need two to three. Each additional cycle adds to the total, which is part of why the lower per-cycle cost abroad can matter. A fertility specialist can estimate your likely yield from baseline testing.',
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

export default function EggFreezingAbroadCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Egg Freezing Abroad Cost: Prices vs the US (2026)',
    description:
      'A grounded comparison of egg-freezing (oocyte cryopreservation) costs abroad versus the United States — per-cycle pricing across Spain, the Czech Republic, Greece, and North Cyprus, what is included, eligibility laws, and how to choose a clinic safely.',
    url: 'https://vitalityscout.com/guides/egg-freezing-abroad-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/egg-freezing-abroad-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Oocyte cryopreservation (egg freezing)',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'Egg Freezing Abroad 2026 — Costs and Popular Countries (Fertility Clinics Abroad)',
        url: 'https://www.fertilityclinicsabroad.com/egg-freezing/quick-guide-egg-freezing-abroad/',
      },
      {
        '@type': 'CreativeWork',
        name: 'How Much Does It Cost to Freeze Your Eggs? 2026 Price Guide (CNY Fertility)',
        url: 'https://www.cnyfertility.com/egg-freezing-cost/',
      },
      {
        '@type': 'CreativeWork',
        name: 'European Society of Human Reproduction and Embryology (ESHRE)',
        url: 'https://www.eshre.eu/',
      },
      {
        '@type': 'CreativeWork',
        name: 'Fact Sheet: President Donald J. Trump Launches TrumpRx.gov (The White House, Feb 2026)',
        url: 'https://www.whitehouse.gov/fact-sheets/2026/02/fact-sheet-president-donald-j-trump-launches-trumprx-gov-to-bring-lower-drug-prices-to-american-patients/',
      },
      {
        '@type': 'CreativeWork',
        name: 'TrumpRx and IVF Medications 2026 (IVF Pharmacy)',
        url: 'https://www.ivfpharmacy.com/blog/trumprx-ivf-medications-2026/',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/egg-freezing-abroad-cost#faq', url: 'https://vitalityscout.com/guides/egg-freezing-abroad-cost' };

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
              <Link href="/medical-tourism" className="hover:text-blue-600">Medical Tourism</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Egg Freezing Abroad Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-rose-600 hover:underline mb-4 inline-block">
              &larr; Medical Tourism Hub
            </Link>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">🥚</span>
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Cost Comparison
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Egg Freezing Abroad: Cost vs the US (2026)
            </h1>
            <p className="text-xl text-gray-600">
              What oocyte cryopreservation actually costs in Spain, the Czech Republic, Greece, and
              North Cyprus versus the United States — plus the eligibility laws that decide where you
              can later use your eggs.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>

            {/* Direct-answer lead (AEO): self-contained 40-80 word summary of the head query */}
            <div className="mt-6 rounded-lg border-l-4 border-rose-600 bg-rose-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Egg freezing abroad typically costs <strong>€2,000-4,700</strong> for the procedure —
                lowest in the <strong>Czech Republic and Greece (~€2,000-3,000)</strong>, mid-range in{' '}
                <strong>Spain (€3,500-4,700)</strong> — versus roughly <strong>$12,000-20,000</strong> all-in
                in the US. Medications add about €800-1,200 and annual storage €300-600. Every figure is an
                estimate to confirm with the clinic. This is information, not medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* Quick-answer cards */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Quick Answer</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-rose-800 mt-0 mb-3">🌍 Freeze abroad if:</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li>✓ You want to pay <strong>30-50% less</strong> per cycle</li>
                <li>✓ You may need <strong>multiple cycles</strong> to bank enough eggs</li>
                <li>✓ You&apos;re a single woman and want <strong>inclusive eligibility</strong> later (Spain, Greece, North Cyprus)</li>
                <li>✓ You can combine treatment with travel and remote monitoring</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-800 mt-0 mb-3">🇺🇸 Freeze in the US if:</h3>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li>✓ Your employer or insurance offers a <strong>fertility benefit</strong></li>
                <li>✓ You want <strong>local follow-up</strong> for retrieval and later IVF</li>
                <li>✓ You prefer US clinic oversight and easy monitoring</li>
                <li>✓ Travel logistics outweigh the price gap for you</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FDA / pricing notice */}
        <section className="mx-auto max-w-4xl px-4 py-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-3">Important Notice</h3>
            <p className="text-sm text-red-800 mb-3">
              Egg freezing does <strong>not guarantee a future pregnancy.</strong> The number of eggs
              retrieved, their quality, and your odds of a live birth depend heavily on your age at
              freezing and your individual circumstances. Egg freezing performed abroad is generally{' '}
              <strong>not covered by US insurance.</strong>
            </p>
            <p className="text-sm text-red-800 mb-0">
              This comparison is for informational purposes only. Always consult a qualified fertility
              specialist before pursuing any treatment, and verify clinic credentials and pricing
              directly with the provider.
            </p>
          </div>
        </section>

        {/* Cost comparison table */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Egg Freezing Cost by Country (Estimates)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure (per cycle)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Medications</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual storage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇨🇿 Czech Republic</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€2,000-3,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€800-1,200</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€300-400</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇬🇷 Greece</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€2,500-3,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€800-1,200</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€400-600</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇨🇾 North Cyprus</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~€2,500 (baseline)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Often quoted separately</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Varies by clinic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇪🇸 Spain</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€3,500-4,700</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€800-1,200</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">€400-500</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇺🇸 United States</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$9,000-15,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$4,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Sources: aggregated clinic-published pricing and 2026 fertility-cost reporting. US procedure
            figures exclude medications and storage; the US all-in cycle commonly totals $12,000-20,000,
            with a reported national average near $16,000. All figures are estimates that vary by clinic,
            protocol, and the number of eggs targeted — confirm with each provider.
          </p>
        </section>

        {/* Why cheaper */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg max-w-none">
            <h2>Why Egg Freezing Costs Less Abroad</h2>
            <p>
              For US patients, a single egg-freezing cycle commonly runs $12,000-20,000 once medications
              and first-year storage are counted, and many patients do more than one cycle. The same
              procedure in Spain, the Czech Republic, or Greece is reported at roughly 30-50% less. That gap
              is not a quality compromise — it reflects a different cost structure:
            </p>
            <ul>
              <li><strong>Lower labor, facility, and overhead costs</strong> than US metro fertility centers.</li>
              <li><strong>Transparent, packaged pricing.</strong> European clinics tend to publish a procedure fee that bundles consultations, monitoring, retrieval, and vitrification, reducing surprise add-ons.</li>
              <li><strong>A largely cash-pay, price-competitive market.</strong> Without insurance-driven list inflation, headline prices stay closer to true cost.</li>
              <li><strong>Cheaper stimulation medications</strong> in many European markets, though this varies by drug and protocol.</li>
            </ul>
            <p>
              One US-specific note for 2026: the federal{' '}
              <a
                href="https://www.whitehouse.gov/fact-sheets/2026/02/fact-sheet-president-donald-j-trump-launches-trumprx-gov-to-bring-lower-drug-prices-to-american-patients/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                TrumpRx.gov program
              </a>{' '}
              launched in February 2026 lists discounted cash prices on common stimulation drugs —
              including Gonal-F, Ovidrel, and Cetrotide — reportedly up to roughly 84% off prior US list
              prices. That can meaningfully reduce the medication portion of a US cycle. If you are
              weighing US versus abroad, price the medications both ways before deciding, and confirm
              current pricing and eligibility directly.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="mx-auto max-w-4xl px-4 py-12 prose prose-lg max-w-none">
          <h2>What the Price Does — and Doesn&apos;t — Include</h2>
          <p>
            The single most important question when comparing quotes is &quot;what does this number
            actually cover?&quot; A quoted egg-freezing <em>procedure</em> fee abroad typically bundles:
          </p>
          <ul>
            <li><strong>Initial consultation and diagnostic testing</strong> (often remote to start)</li>
            <li><strong>Ultrasound and bloodwork monitoring</strong> during ovarian stimulation</li>
            <li><strong>Egg retrieval</strong> under sedation</li>
            <li><strong>Vitrification (flash-freezing)</strong> of the mature eggs</li>
          </ul>
          <p>
            What usually sits <em>outside</em> the headline price: <strong>stimulation medications</strong>{' '}
            (roughly €800-1,200), <strong>annual storage</strong> (roughly €300-600), and — critically — the
            <strong> future cost of using the eggs</strong>. Thawing, fertilizing, and transferring frozen
            eggs is a separate IVF cycle later, which is its own expense. Treat egg freezing as the first
            step of a longer journey, not the whole bill. Always ask each clinic for an itemized written
            quote before you compare.
          </p>
          <p>
            For a sense of what that downstream IVF cycle costs in the same destinations, see our{' '}
            <Link href="/guides/spain-ivf-cost" className="text-blue-600 hover:underline font-medium">
              Spain IVF cost guide
            </Link>{' '}and{' '}
            <Link href="/guides/czech-ivf-cost" className="text-blue-600 hover:underline font-medium">
              Czech Republic IVF cost guide
            </Link>.
          </p>
        </section>

        {/* The legal eligibility difference — distinctive to egg freezing */}
        <section className="bg-rose-50 px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Detail That Matters More Than Price: Eligibility Law</h2>
            <p className="text-gray-700 mb-6">
              With egg freezing, where you freeze isn&apos;t the whole story — where you can later{' '}
              <em>use</em> the eggs is governed by national law, and the rules differ sharply. This is the
              one factor most likely to make the cheapest option the wrong one.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Single women can freeze?</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Single women can later use eggs (IVF)?</th>
                    <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Notable age note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇪🇸 Spain</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes (inclusive)</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Clinics often advise freezing before ~40 for best yield</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇬🇷 Greece</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes (inclusive)</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Statutory storage limit reported at up to 10 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇨🇾 North Cyprus</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes (single women and lesbian couples)</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Reported high upper age limit (up to 58 with ethics-committee approval)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">🇨🇿 Czech Republic</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-green-600">Yes</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-red-600">No — a male partner is currently required to use the eggs</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lowest price, but the most restrictive on later use</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>The trap to avoid:</strong> the Czech Republic is the cheapest place to freeze, but
                current law requires a male partner to later use those eggs for IVF. A single woman planning
                to use her eggs solo down the line generally chooses <strong>Spain, Greece, or North
                Cyprus</strong> despite the slightly higher price. Laws change — confirm the current
                position directly with the clinic before you book.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What the Process Looks Like Abroad</h2>
          <p className="text-gray-700 mb-6">
            An egg-freezing cycle runs about 10-15 days from the start of ovarian stimulation to retrieval
            and freezing. Done abroad, much of the early work can happen at home, with travel timed to the
            retrieval window.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">1. Consultation &amp; baseline testing (remote)</h4>
              <p className="text-sm text-gray-700 mb-0">
                Video consult and ovarian-reserve testing (often AMH and an antral follicle count) to
                estimate your likely egg yield and design a protocol.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">2. Ovarian stimulation (about 10-14 days)</h4>
              <p className="text-sm text-gray-700 mb-0">
                Daily injectable medications encourage the ovaries to mature multiple eggs at once, with
                monitoring scans and bloodwork — frequently coordinated with a local doctor before you
                travel.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">3. Egg retrieval (1 short trip)</h4>
              <p className="text-sm text-gray-700 mb-0">
                A brief outpatient procedure under sedation, ultrasound-guided, to collect the mature eggs.
                Most patients plan a short stay timed to this window.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">4. Vitrification &amp; storage</h4>
              <p className="text-sm text-gray-700 mb-0">
                The mature eggs are flash-frozen (vitrified) to prevent ice-crystal damage and stored in
                the clinic&apos;s lab, billed annually.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">5. Future use (separate cycle)</h4>
              <p className="text-sm text-gray-700 mb-0">
                When ready, the eggs are thawed, fertilized, and transferred in a later IVF cycle — a
                distinct cost and trip, and the point where eligibility law (above) applies.
              </p>
            </div>
          </div>
        </section>

        {/* How to choose a clinic */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg max-w-none">
            <h2>How to Choose a Clinic Safely</h2>
            <p>
              Price comparison only works once you&apos;ve confirmed quality. Look for these verifiable
              signals before you put down a deposit:
            </p>
            <ul>
              <li><strong>Lab and clinic certification</strong> — ISO-certified laboratories and, in Europe, ESHRE affiliation are meaningful marks of an accredited assisted-reproduction program.</li>
              <li><strong>Documented vitrification methodology</strong> — reputable labs use established protocols (for example, the Cryotop method) and time-lapse / traceability systems for sample security.</li>
              <li><strong>Transparent egg-yield and survival reporting</strong> — ask how the clinic reports expected eggs retrieved by age and post-thaw survival, and be skeptical of a single headline number with no context.</li>
              <li><strong>A real English-speaking international team</strong> — coordinators who handle scheduling, translation, and travel reduce risk on a cross-border cycle.</li>
              <li><strong>Itemized written quotes</strong> — a clinic that will put inclusions and exclusions in writing is easier to trust.</li>
            </ul>
            <p>
              As one example of a verifiable, long-established option: <strong>Eugin (Barcelona)</strong> is
              a long-running Spanish fertility clinic that offers oocyte vitrification and reports an
              ISO-certified, independently audited lab. It is one of several reputable Spanish clinics — vet
              any specific clinic&apos;s current credentials, pricing, and methodology directly before booking.
            </p>
          </div>
        </section>

        {/* Budgeting */}
        <section className="mx-auto max-w-4xl px-4 py-12 prose prose-lg max-w-none">
          <h2>Budgeting the Real, All-In Number</h2>
          <p>
            The quoted procedure fee is only part of your true cost. To compare a US cycle against an
            abroad cycle honestly, add up:
          </p>
          <ul>
            <li><strong>Procedure fee</strong> (the headline number)</li>
            <li><strong>Stimulation medications</strong> (~€800-1,200 abroad; ~$4,000 in the US, before any discount program)</li>
            <li><strong>Annual storage</strong> (~€300-600 abroad; ~$800/year in the US) — multiplied by the years you plan to store</li>
            <li><strong>Travel</strong> — flights and lodging for the retrieval trip</li>
            <li><strong>Likely number of cycles</strong> — reported US averages suggest one to two cycles under 35, and two to three at 38-40, so model more than one if you&apos;re older</li>
            <li><strong>Future IVF</strong> to actually use the eggs (a separate, later cost)</li>
          </ul>
          <p>
            Run those numbers both ways. For many US patients the per-cycle savings abroad survive even
            after travel — especially if multiple cycles are likely — but only an itemized, apples-to-apples
            comparison tells you that for your situation.
          </p>
        </section>

        {/* FAQ — visible block mirrors the FAQPage schema exactly */}
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/guides/spain-vs-czech-ivf" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <div className="font-bold text-gray-900">Spain vs Czech Republic for IVF</div>
                  <div className="text-sm text-gray-600">Costs, donor rules &amp; eligibility, side by side</div>
                </div>
              </div>
            </Link>
            <Link href="/guides/spain-fertility-ivf-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇪🇸</span>
                <div>
                  <div className="font-bold text-gray-900">Spain Fertility &amp; IVF Guide</div>
                  <div className="text-sm text-gray-600">Europe&apos;s leading inclusive-law destination</div>
                </div>
              </div>
            </Link>
            <Link href="/guides/spain-ivf-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💲</span>
                <div>
                  <div className="font-bold text-gray-900">Spain IVF Cost (2026)</div>
                  <div className="text-sm text-gray-600">The downstream cost of using your eggs</div>
                </div>
              </div>
            </Link>
            <Link href="/guides/czech-ivf-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💲</span>
                <div>
                  <div className="font-bold text-gray-900">IVF Czech Republic Cost (2026)</div>
                  <div className="text-sm text-gray-600">Europe&apos;s lowest-priced IVF, with the eligibility caveat</div>
                </div>
              </div>
            </Link>
            <Link href="/medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <div className="font-bold text-gray-900">Medical Tourism Hub</div>
                  <div className="text-sm text-gray-600">Compare procedures and destinations abroad</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Final Disclaimer */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every
              price shown is an <strong>estimate that varies by clinic, protocol, medication, and the
              number of eggs targeted</strong> and must be confirmed directly with the provider. Egg
              freezing does not guarantee a future pregnancy, and outcomes depend heavily on age and
              individual factors.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the efficacy or safety of any treatment, clinic, or
              provider. Eligibility laws change and vary by country — always confirm the current rules and
              consult a qualified fertility specialist before pursuing any treatment.
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="mx-auto max-w-4xl px-4 py-8">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.fertilityclinicsabroad.com/egg-freezing/quick-guide-egg-freezing-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Egg Freezing Abroad 2026 — Costs and Popular Countries (Fertility Clinics Abroad)</a></li>
              <li>• <a href="https://www.fertilityclinicsabroad.com/egg-freezing-in-europe/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Egg Freezing in the Czech Republic and Spain (Fertility Clinics Abroad)</a></li>
              <li>• <a href="https://www.cnyfertility.com/egg-freezing-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">How Much Does It Cost to Freeze Your Eggs? 2026 Price Guide (CNY Fertility)</a></li>
              <li>• <a href="https://www.eggdonationfriends.com/egg-donation-laws-by-country-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Egg Donation &amp; Fertility Laws by Country (Egg Donation Friends)</a></li>
              <li>• <a href="https://www.institutobernabeu.com/en/blog/what-is-the-egg-freezing-process-step-by-step/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">What Is the Egg Freezing Process Step by Step? (Instituto Bernabeu)</a></li>
              <li>• <a href="https://www.eshre.eu/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">European Society of Human Reproduction and Embryology (ESHRE)</a></li>
              <li>• <a href="https://www.whitehouse.gov/fact-sheets/2026/02/fact-sheet-president-donald-j-trump-launches-trumprx-gov-to-bring-lower-drug-prices-to-american-patients/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fact Sheet: President Donald J. Trump Launches TrumpRx.gov (The White House, Feb 2026)</a></li>
              <li>• <a href="https://www.ivfpharmacy.com/blog/trumprx-ivf-medications-2026/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">TrumpRx and IVF Medications 2026 (IVF Pharmacy)</a></li>
            </ul>
          </div>
        </section>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Egg Freezing Abroad Cost Checklist"
            description="A worksheet to compare clinics apples-to-apples — procedure fee, medications, storage, travel, likely cycles, and the eligibility law for later use."
            source="guide_egg_freezing_abroad_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
