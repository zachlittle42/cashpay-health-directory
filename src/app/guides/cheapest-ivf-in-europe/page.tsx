import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Cheapest IVF in Europe (2026): Country Cost Compare',
  description:
    'The cheapest IVF in Europe in 2026: Czech Republic, Poland, North Cyprus, Greece and Spain own-egg vs donor-egg cycle prices compared, and how to choose.',
};

// Real GSC / PAA-style questions (cheapest ivf in europe, affordable ivf,
// clinica tambre prices, eterologa spagna costi), answered only from facts on
// this page. Every price answer ends with the verify-with-provider hedge. The
// visible FAQ block below mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'What is the cheapest IVF in Europe in 2026?',
    answer:
      'On published sticker price, the Czech Republic and Poland are usually the cheapest for an own-egg IVF cycle in Europe — commonly estimated around €2,500-4,000 before medication — with North Cyprus and Greece close behind. For donor-egg IVF, the Czech Republic again tends to be lowest (roughly €4,200-5,500), with North Cyprus, Poland and Greece in a similar band. Spain costs more but has the largest donor pool. The cheapest headline price is rarely the cheapest total, because medication, ICSI, freezing and extra transfers are often quoted separately. These are estimates that vary by clinic and protocol — confirm an itemised quote with each clinic.',
  },
  {
    question: 'Where can I find affordable IVF abroad without a huge quality drop?',
    answer:
      'Affordable IVF in Europe is concentrated in the Czech Republic, Poland, Greece and North Cyprus, where an own-egg cycle is commonly estimated at €2,500-5,000 versus $15,000-30,000 self-pay in the US. These markets have long-established, EU-regulated (or, for North Cyprus, locally regulated) clinics, English-speaking international teams, and audited labs. A lower price is not by itself a quality or success-rate signal, so the affordability decision should be paired with checking the specific clinic\'s accreditations, lab certifications and how it reports results. This page compares prices, not outcomes.',
  },
  {
    question: 'How much are Clinica Tambre prices for IVF and egg donation?',
    answer:
      'Public figures for Clinica Tambre in Madrid put IVF with own eggs from roughly €5,250 and egg donation (ovodonacion) from roughly €6,500, with premium donor packages — for example one that bundles PGT-A genetic testing — quoted into the €12,000-13,000 range. A medical consultation is listed from about €150 and a frozen embryo transfer from about €1,650. Tambre is one named Spanish clinic; it sits at the higher, larger-donor-pool end of the European market. Prices change and depend on the package, so confirm the current figure and what each line includes directly with the clinic.',
  },
  {
    question: 'How much does egg-donor IVF cost in Spain (eterologa)?',
    answer:
      'Donor-egg IVF in Spain (fecondazione eterologa, as Italian patients often search it) is commonly estimated at roughly €5,900-11,000 per cycle depending on the clinic and whether genetic testing and guarantees are bundled, versus roughly €4,200-6,000 in the Czech Republic, Poland, Greece or North Cyprus. Spain costs more largely because it has the most diverse and largest donor pool in Europe and high-volume clinics. All figures are estimates that vary by clinic and add-ons — ask for an itemised quote and confirm what is included.',
  },
  {
    question: 'Which European country should I choose for IVF?',
    answer:
      'It depends on your case, not just price. The Czech Republic and Poland win on lowest own-egg cost but restrict treatment to heterosexual couples. Spain costs more but has the largest, most diverse donor pool and treats single women and same-sex couples. Greece and North Cyprus are mid-priced, are open to single women, and tend to have the highest stated recipient age limits — North Cyprus in particular markets to older or harder-to-treat donor-egg cases. Eligibility law, donor availability and the clinic\'s audited results usually matter more than a few hundred euros. Verify the law for your situation and confirm pricing with the clinic.',
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

export default function CheapestIvfInEurope() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cheapest IVF in Europe (2026): Country-by-Country Cost Comparison',
    description:
      'A country-by-country comparison of the cheapest IVF in Europe in 2026 — Czech Republic, Spain, Greece, Poland and North Cyprus own-egg and donor-egg cycle prices, what is included, eligibility law, success-rate context, and how to choose a clinic.',
    url: 'https://vitalityscout.com/guides/cheapest-ivf-in-europe',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cheapest-ivf-in-europe#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'In vitro fertilization (IVF)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Fertility Clinics Abroad — Cheapest IVF in Europe (2026)', url: 'https://www.fertilityclinicsabroad.com/ivf-costs/surprising-cost-ivf-europe/' },
      { '@type': 'CreativeWork', name: 'Fertility Road — Cheapest IVF in the World: IVF Costs by Country in 2026', url: 'https://fertilityroad.com/treatment-options-abroad/ivf-cost-explained/' },
      { '@type': 'CreativeWork', name: 'Egg Donation Friends — Egg Donation Cost Worldwide Guide', url: 'https://www.eggdonationfriends.com/egg-donation-guide/egg-donation-costs-worldwide-map/' },
      { '@type': 'CreativeWork', name: 'Egg Donation Friends — Clinica Tambre (Madrid) prices and success rates', url: 'https://www.eggdonationfriends.com/clinics/clinica-tambre/' },
      { '@type': 'CreativeWork', name: 'OVU — IVF Costs in Eastern Europe 2026 Guide', url: 'https://ovu.com/fertility-insights/fertility-treatment-costs-in-eastern-europe-2026-guide' },
      { '@type': 'CreativeWork', name: 'Egg Donation Friends — Egg Donation in North Cyprus 2026', url: 'https://www.eggdonationfriends.com/ivf-egg-donation-country-north-cyprus/' },
      { '@type': 'CreativeWork', name: 'Egg Donation Friends — Egg Donation in Greece 2026', url: 'https://www.eggdonationfriends.com/ivf-egg-donation-country-greece/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cheapest-ivf-in-europe#faq', url: 'https://vitalityscout.com/guides/cheapest-ivf-in-europe' };

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
              <span className="text-gray-900">Cheapest IVF in Europe</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Medical Tourism Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Medical Tourism
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cheapest IVF in Europe (2026): A Country-by-Country Cost Comparison
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Five of Europe&apos;s most affordable IVF destinations &mdash; the Czech Republic,
              Spain, Greece, Poland and North Cyprus &mdash; ranked on own-egg and donor-egg cycle
              price, what each price actually includes, and the eligibility law that decides where
              you can be treated.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                The <strong>cheapest IVF in Europe</strong> in 2026 is generally in the{' '}
                <strong>Czech Republic and Poland</strong> &mdash; an own-egg cycle is commonly
                estimated around <strong>&euro;2,500-4,000</strong> before medication, with North
                Cyprus and Greece close behind and Spain higher (about{' '}
                <strong>&euro;4,100-7,100</strong>). For donor eggs the Czech Republic again tends to
                be lowest (roughly <strong>&euro;4,200-5,500</strong>). The lowest sticker price is
                rarely the lowest total &mdash; medication, ICSI and freezing are often billed
                separately. These are estimates to verify with each clinic. This is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick ranking box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cheapest-to-priciest at a glance (own-egg cycle, estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Lowest sticker price</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Czech Republic — from ~&euro;2,500-4,000</li>
                  <li>• Poland — from ~&euro;2,800-4,000</li>
                  <li>• North Cyprus — from ~&euro;2,700-4,500</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Mid-to-higher price</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Greece — ~&euro;3,000-5,000</li>
                  <li>• Spain — ~&euro;4,100-7,100 (largest donor pool)</li>
                  <li>• vs US self-pay — ~$15,000-30,000</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Optimise for lowest cost:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Czech Republic or Poland for own-egg cycles</li>
                  <li>• Czech Republic for the lowest donor-egg price</li>
                  <li>• But both restrict treatment to heterosexual couples</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Optimise for access &amp; pool:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Spain for the largest, most diverse donor pool</li>
                  <li>• Greece / North Cyprus for older recipients &amp; single women</li>
                  <li>• North Cyprus markets to harder-to-treat donor cases</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#why-europe" className="text-blue-600 hover:underline">1. Why Europe is the value capital of IVF</a></li>
              <li><a href="#cost-table" className="text-blue-600 hover:underline">2. The five-country cost comparison table</a></li>
              <li><a href="#whats-included" className="text-blue-600 hover:underline">3. What the price does and does not include</a></li>
              <li><a href="#eligibility" className="text-blue-600 hover:underline">4. Eligibility law: where you can actually be treated</a></li>
              <li><a href="#by-country" className="text-blue-600 hover:underline">5. Country by country</a></li>
              <li><a href="#success" className="text-blue-600 hover:underline">6. Success-rate context (read this before price)</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">7. How to choose a clinic</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              IVF in the United States commonly runs $15,000-30,000 self-pay for a single own-egg
              cycle, and a donor-egg cycle can run $25,000-45,000 or more. Across Europe, the same
              treatment is routinely a fraction of that. But &quot;cheapest&quot; is a slippery
              word in fertility: the lowest advertised cycle price often excludes medication, ICSI,
              genetic testing and extra transfers, and the country with the lowest price may not be
              one you are legally allowed to be treated in. This guide ranks five of Europe&apos;s
              most affordable IVF destinations on real, sourced price ranges, then layers in the
              eligibility law and success-rate context that usually matter more than a few hundred
              euros.
            </p>

            <h2 id="why-europe" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Europe Is the Value Capital of IVF</h2>

            <p className="text-gray-700 mb-4">
              Europe combines low treatment prices with mature, regulated fertility sectors. The
              Czech Republic, Poland, Greece and Spain operate inside the EU&apos;s tissue-and-cell
              regulatory framework; North Cyprus sits outside the EU but has built a high-volume
              international fertility industry of its own. Many of these clinics have run since the
              1990s, employ embryologists affiliated with ESHRE (the European Society of Human
              Reproduction and Embryology), and run English-speaking international patient teams.
              According to cross-country comparisons, European IVF often costs 50-70% less than UK or
              US pricing even after travel.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the price gap with the US is not a quality gap.
                It largely reflects lower labour and facility costs, regulated donor compensation,
                and the fact that you are paying a transparent cash price rather than a US
                insurance-negotiated rate. Lower cost is still not a guarantee of a good outcome &mdash;
                that depends on your age, diagnosis and the specific clinic.
              </p>
            </div>

            <h2 id="cost-table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Five-Country Cost Comparison Table</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates compiled from multiple 2026 fertility-tourism
              price comparisons</strong>, not live quotes from any single clinic. Ranges differ
              between sources because clinics bundle differently; we have shown a conservative
              cross-source band. Use them to set expectations, then get an itemised quote from each
              clinic you shortlist.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Country</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Own-egg IVF (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Donor-egg IVF (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best known for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Czech Republic</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;2,500 - &euro;4,000</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;4,200 - &euro;5,500</td>
                    <td className="border border-gray-300 px-4 py-3">Lowest overall price</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Poland</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;2,800 - &euro;4,000</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;4,900 - &euro;6,000</td>
                    <td className="border border-gray-300 px-4 py-3">Low own-egg cost, modern labs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">North Cyprus</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;2,700 - &euro;4,500</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;4,500 - &euro;6,000</td>
                    <td className="border border-gray-300 px-4 py-3">All-inclusive packages, higher age limits</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Greece</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;3,000 - &euro;5,000</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;5,000 - &euro;8,000</td>
                    <td className="border border-gray-300 px-4 py-3">Open law, short donor waits</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Spain</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;4,100 - &euro;7,100</td>
                    <td className="border border-gray-300 px-4 py-3">~&euro;5,900 - &euro;11,000</td>
                    <td className="border border-gray-300 px-4 py-3">Largest, most diverse donor pool</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">United States (reference)</td>
                    <td className="border border-gray-300 px-4 py-3">~$15,000 - $30,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$25,000 - $45,000+</td>
                    <td className="border border-gray-300 px-4 py-3">The price you are comparing against</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> the Czech Republic and Poland anchor the bottom of the
              range, North Cyprus and Greece sit in the middle, and Spain runs highest &mdash; but
              Spain&apos;s premium buys the largest donor pool in Europe, which is why many donor-egg
              patients still choose it. For a like-for-like read of the two cheapest single-country
              options, see our dedicated{' '}
              <Link href="/guides/czech-ivf-cost" className="text-blue-600 hover:underline">Czech IVF cost guide</Link>{' '}
              and{' '}
              <Link href="/guides/spain-ivf-cost" className="text-blue-600 hover:underline">Spain IVF cost guide</Link>.
            </p>

            <h2 id="whats-included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Price Does and Does Not Include</h2>

            <p className="text-gray-700 mb-4">
              This is where &quot;cheapest&quot; gets decided. A headline cycle price across these
              countries usually covers the consultation, stimulation monitoring, egg retrieval,
              fertilisation (often ICSI), embryo culture and one fresh transfer. Frequently
              <strong> excluded</strong> &mdash; and quoted separately &mdash; are:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Stimulation medication</strong> — commonly an extra €1,000-4,000, and a large swing factor</li>
              <li><strong>ICSI</strong> — sometimes bundled, sometimes an add-on</li>
              <li><strong>PGT-A genetic testing</strong> — a per-cycle or per-embryo add-on</li>
              <li><strong>Embryo freezing and first-year storage</strong></li>
              <li><strong>Additional frozen-embryo transfers (FET)</strong> if the first does not work</li>
              <li><strong>Donor matching / donor compensation</strong> for donor-egg cycles</li>
              <li><strong>Travel, lodging and any required local tests</strong></li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Compare the all-in total, not the sticker</h4>
              <p className="text-gray-700">
                A clinic advertising the lowest cycle price can end up more expensive once
                medication, ICSI and a second transfer are added, while a slightly pricier
                all-inclusive package can be cheaper in total. Ask every shortlisted clinic for one
                itemised quote that lists exactly what is and is not covered, then compare those
                totals side by side.
              </p>
            </div>

            <h2 id="eligibility" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Eligibility Law: Where You Can Actually Be Treated</h2>

            <p className="text-gray-700 mb-4">
              Price is irrelevant if the law in a country will not treat you. Eligibility rules
              differ sharply across these five destinations, especially for single women, same-sex
              couples and older recipients. The summary below is drawn from country fertility-law
              overviews and should be re-confirmed for your exact situation, because rules change.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Country</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Single women</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Stated upper age (recipient)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Donor anonymity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Czech Republic</td>
                    <td className="border border-gray-300 px-4 py-3">Not allowed</td>
                    <td className="border border-gray-300 px-4 py-3">~48</td>
                    <td className="border border-gray-300 px-4 py-3">Anonymous</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Poland</td>
                    <td className="border border-gray-300 px-4 py-3">Restricted</td>
                    <td className="border border-gray-300 px-4 py-3">Clinic-dependent</td>
                    <td className="border border-gray-300 px-4 py-3">Anonymous</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Greece</td>
                    <td className="border border-gray-300 px-4 py-3">Allowed</td>
                    <td className="border border-gray-300 px-4 py-3">~54 (some exceptions)</td>
                    <td className="border border-gray-300 px-4 py-3">Anonymous</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">North Cyprus</td>
                    <td className="border border-gray-300 px-4 py-3">Allowed</td>
                    <td className="border border-gray-300 px-4 py-3">~55+ (special approval over 45)</td>
                    <td className="border border-gray-300 px-4 py-3">Anonymous</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Spain</td>
                    <td className="border border-gray-300 px-4 py-3">Allowed</td>
                    <td className="border border-gray-300 px-4 py-3">~50 (some exceptions)</td>
                    <td className="border border-gray-300 px-4 py-3">Anonymous (mandatory)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Reading the table:</strong> if you are a single woman or in a same-sex
                couple, the cheapest options (Czech Republic, Poland) are typically off the table,
                and Spain, Greece or North Cyprus become the realistic choices. If you are an older
                recipient, Greece and North Cyprus tend to have the highest stated age limits. Always
                confirm the current rule with the clinic before booking travel.
              </p>
            </div>

            <h2 id="by-country" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Country by Country</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Czech Republic — the price floor</h3>
            <p className="text-gray-700 mb-4">
              Consistently ranked the cheapest in Europe, with own-egg cycles commonly estimated from
              around €2,500-4,000 and donor-egg cycles from roughly €4,200-5,500. Prague and Brno
              host most of the long-established clinics. The trade-off is the law: treatment is
              limited to heterosexual couples and donors are anonymous. For the full single-country
              breakdown, see our{' '}
              <Link href="/guides/czech-ivf-cost" className="text-blue-600 hover:underline">Czech Republic IVF cost guide</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Poland — low cost, modern labs</h3>
            <p className="text-gray-700 mb-4">
              Poland sits right alongside the Czech Republic on own-egg pricing (commonly estimated
              €2,800-4,000), with donor-egg cycles often from around €4,900-6,000. Donors are
              anonymous and access for single women is restricted. Polish clinics are known for
              modern laboratories and competitive package pricing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">North Cyprus — packages and high age limits</h3>
            <p className="text-gray-700 mb-4">
              North Cyprus built an international IVF industry around all-inclusive packages that
              often bundle accommodation and transfers, with donor-egg cycles commonly estimated
              €4,500-6,000. It markets heavily to older recipients and harder-to-treat donor-egg
              cases, with some of the highest stated age limits in the region. Because it is outside
              the EU framework, vetting the specific clinic&apos;s lab and credentials matters even
              more.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Greece — open law, short waits</h3>
            <p className="text-gray-700 mb-4">
              Greece is mid-priced (own-egg roughly €3,000-5,000, donor-egg roughly €5,000-8,000) but
              attractive for its open eligibility law, high stated age limit, and typically short
              donor waiting times. Single women are allowed and the sector is EU-regulated.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Spain — the premium pool</h3>
            <p className="text-gray-700 mb-4">
              Spain runs highest of the five (own-egg roughly €4,100-7,100; donor-egg roughly
              €5,900-11,000) but is Europe&apos;s largest and most diverse donor market, treats single
              women and same-sex couples, and hosts high-volume clinics. A named example: published
              figures for <strong>Clinica Tambre</strong> in Madrid put own-egg IVF from about €5,250
              and egg donation (ovodonacion) from about €6,500, with premium donor-plus-PGT-A packages
              quoted into the €12,000-13,000 range. Spain is also the country most often searched by
              Italian patients for donor-egg IVF (&quot;eterologa&quot;) because donation is restricted
              at home. Our{' '}
              <Link href="/guides/spain-ivf-cost" className="text-blue-600 hover:underline">Spain IVF cost guide</Link>{' '}
              covers it in depth, and our{' '}
              <Link href="/guides/spain-vs-czech-ivf" className="text-blue-600 hover:underline">Spain vs Czech Republic comparison</Link>{' '}
              weighs the two head to head.
            </p>

            <h2 id="success" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Success-Rate Context (Read This Before Price)</h2>

            <p className="text-gray-700 mb-4">
              Cost should never be read in isolation from likely outcome, and outcome depends far
              more on egg age than on country. Published European figures broadly indicate:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Own eggs, under ~35:</strong> commonly cited live-birth rates per transfer in the ~25-35% range</li>
              <li><strong>Own eggs, 38-40:</strong> typically lower, often cited around ~20-25%</li>
              <li><strong>Own eggs, 44+:</strong> sharply lower, often cited around ~2%</li>
              <li><strong>Donor eggs (any recipient age):</strong> commonly cited around ~45-55% per transfer, because the egg is young</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These are general European ranges, not promises, and individual clinics report results
              differently (per transfer vs per cycle vs cumulative). The practical takeaway: for
              older patients, a donor-egg cycle in a mid-priced country can carry a much higher
              success rate than a cheaper own-egg cycle, which can make the &quot;more expensive&quot;
              option the better value per baby. Compare how each clinic defines and audits its
              success rate before you compare prices.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Beware headline success-rate marketing</h4>
              <p className="text-gray-700">
                A clinic can inflate its advertised success rate by quoting per-transfer instead of
                per-cycle, by counting only younger or donor-egg patients, or by reporting pregnancy
                rather than live birth. Ask for the metric definition and, where available, the
                national-registry figure. No clinic can guarantee a live birth.
              </p>
            </div>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose a Clinic</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Start from eligibility, not price.</strong> Confirm the country&apos;s law treats your situation (single, same-sex, age) before shortlisting.</li>
              <li><strong>Get itemised, all-in quotes.</strong> Make every clinic list medication, ICSI, PGT-A, freezing and extra transfers so you compare totals, not stickers.</li>
              <li><strong>Verify accreditations and lab certification.</strong> Look for ESHRE-affiliated embryologists, ISO-certified labs and, in the EU, national-registry participation.</li>
              <li><strong>Ask how success rates are defined.</strong> Per live birth, per transfer, by age band — and whether figures are audited.</li>
              <li><strong>Check donor pool and waiting time</strong> if you need donor eggs — Spain leads on diversity; Greece often on speed.</li>
              <li><strong>Budget travel realistically.</strong> Most cycles involve more than one visit; factor flights, lodging and time off.</li>
            </ol>

            <p className="text-gray-700 mb-4">
              For the broader picture of vetting clinics, accreditation bodies and travel logistics
              across destinations, start at our{' '}
              <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism hub</Link>.
              If you are also weighing fertility preservation rather than a full cycle, our{' '}
              <Link href="/guides/egg-freezing-abroad-cost" className="text-blue-600 hover:underline">egg freezing abroad cost guide</Link>{' '}
              covers the same countries for oocyte cryopreservation.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Medical Tourism Destinations</h3>
            <p className="mb-6 text-blue-100">
              See how IVF, dental, and other cash-pay procedures compare across countries, with
              transparent cost estimates and clinic-vetting guidance.
            </p>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Medical Tourism
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
              <li>• Fertility Clinics Abroad — Cheapest IVF in Europe, updated 2026 (per-country own-egg and donor-egg estimates)</li>
              <li>• Fertility Road — Cheapest IVF in the World: IVF Costs by Country in 2026 (cost ranking)</li>
              <li>• Egg Donation Friends — Egg Donation Cost Worldwide Guide (donor-egg pricing and eligibility-law table)</li>
              <li>• Egg Donation Friends — Clinica Tambre, Madrid (named-clinic prices and success rates)</li>
              <li>• OVU — IVF Costs in Eastern Europe 2026 Guide (Czech, Poland, North Cyprus ranges)</li>
              <li>• Egg Donation Friends — Egg Donation in North Cyprus and in Greece, 2026 (country costs and law)</li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Europe IVF Cost Cheat Sheet"
            description="Five countries, own-egg vs donor-egg estimates, and the itemised-quote checklist to compare clinics."
            source="guide_cheapest_ivf_in_europe"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
