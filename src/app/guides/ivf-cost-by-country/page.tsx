import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'IVF Cost by Country (2026): US vs Mexico, Spain & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/ivf-cost-by-country' },
  description:
    'IVF cost by country in 2026: per-cycle prices in Mexico, Spain, Czech Republic, Greece & India vs the US, what each cycle includes, and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer is a sourced estimate that ends with
// the verify-with-clinic hedge, consistent with the medical disclaimer. The
// visible FAQ block below mirrors this schema exactly — schema clarifies the
// page, it never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does IVF (in vitro fertilization) cost abroad vs the US?',
    answer:
      'A standard own-egg IVF cycle is commonly quoted around $15,000-$30,000 all-in in the US versus roughly $4,000-$7,000 in Mexico, about €2,500-€4,500 in the Czech Republic, €3,000-€5,000 in Greece, €4,000-€7,000 in Spain, and $2,000-$4,000 in India — savings that frequently run 50-80% on published comparisons. These are estimates that vary by clinic, your protocol, medication, and whether you add ICSI, PGT-A, or donor eggs. Most cycles quote the procedure separately from medication, so always get a written, itemized quote before you travel.',
  },
  {
    question: 'Which is the cheapest country for IVF (in vitro fertilization)?',
    answer:
      'On the per-cycle comparisons we reviewed, India ($2,000-$4,000) and the Czech Republic (about €2,500-€4,500) tend to post the lowest base own-egg prices, followed by Greece (€3,000-€5,000) and Mexico ($4,000-$7,000), with Spain (€4,000-€7,000) higher but still far below the US. Cheapest is not automatically best: success rates, the embryology lab, donor-egg laws, travel cost, and how many cycles you may need all matter more than the headline base fee. Compare what each quote actually includes before deciding.',
  },
  {
    question: 'What does an IVF cycle abroad usually include — and exclude?',
    answer:
      'A base cycle abroad typically covers the consultation, ovarian-stimulation monitoring and ultrasounds, egg retrieval, lab fertilization (IVF or ICSI), embryo culture, and a single embryo transfer. It often does NOT include the stimulation medication (frequently €500-€2,500 or more), ICSI as an add-on, PGT-A genetic testing, embryo freezing and storage, donor eggs or donor sperm, a frozen embryo transfer, or your flights and lodging. Two quotes at the same headline price can differ by thousands once add-ons are counted, so ask for a fully itemized quote.',
  },
  {
    question: 'Is IVF (in vitro fertilization) abroad safe?',
    answer:
      'Quality varies clinic to clinic, not just country to country, so the standard advice is to use clinics that publish verifiable quality signals. Look for an embryology lab that follows ESHRE or ASRM guidance, recognized accreditation (such as JCI or ISO), membership in professional bodies, and published, independently benchmarked success data. Treat success-rate claims with caution — per-transfer, per-cycle, and per-patient numbers are not the same — and validate against bodies like ESHRE or the CDC ART report. This is information, not medical advice; discuss candidacy and risks with a qualified fertility clinician.',
  },
  {
    question: 'Why is IVF so much cheaper outside the US?',
    answer:
      'Lower clinic overhead, lower lab and staffing costs, and in many countries lower medication prices drive most of the gap, not a lower standard of care — many programs abroad use the same injectable medications and follow ASRM or ESHRE lab guidance. The bigger budget driver is often the law, not the price: donor anonymity and who is eligible for treatment differ by country, which can determine where you are even able to be treated. Factor travel, possible repeat cycles, and cross-border follow-up into the real total before comparing to a US quote.',
  },
  {
    question: 'How many trips and how long does IVF abroad take?',
    answer:
      'A fresh own-egg cycle generally needs you in-country for roughly the stimulation-to-retrieval-to-transfer window, often about 2-3 weeks, though many clinics let you do early monitoring at home and travel only for retrieval and transfer. Frozen embryo transfers and donor-egg cycles can be split across shorter visits. Bring or buy medication per the clinic protocol, and confirm the exact number of trips, the timeline, and how monitoring and follow-up are handled across borders before you book flights.',
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

export default function IvfCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'IVF Cost by Country (2026): US vs Mexico, Spain, Czech Republic, Greece & India',
    description:
      'A side-by-side cost comparison of IVF (in vitro fertilization) by country — per-cycle prices in Mexico, Spain, the Czech Republic, Greece, and India versus the US, what each cycle includes, the laws that decide where you can be treated, and how to choose a clinic.',
    url: 'https://vitalityscout.com/guides/ivf-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ivf-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'In vitro fertilization (IVF) treatment abroad and in the United States',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'IVF Cost USA 2026: $15,000–$30,000 by State (IVFPath)', url: 'https://ivfpath.com/blog/ivf-cost-usa-2026-state-comparison' },
      { '@type': 'CreativeWork', name: 'How Much Does IVF Cost Without Insurance? 2026 Breakdown (Mystoria)', url: 'https://www.mystoria.com/blog/how-much-does-ivf-cost-without-insurance-2026-breakdown' },
      { '@type': 'CreativeWork', name: 'IVF Cost in Mexico (2026): Affordable Fertility Treatment Explained (NextIVF)', url: 'https://nextivf.com/ivf-cost-in-mexico/' },
      { '@type': 'CreativeWork', name: 'Cheapest IVF in Europe — Updated 2026 country cost ranges (Fertility Clinics Abroad)', url: 'https://www.fertilityclinicsabroad.com/ivf-costs/surprising-cost-ivf-europe/' },
      { '@type': 'CreativeWork', name: 'IVF Prices in Prague 2026 — Czech Republic value (IVF Finder)', url: 'https://ivffinder.com/en/blog/ivf-prices-prague-2026' },
      { '@type': 'CreativeWork', name: 'IVF in Greece 2026: Costs, Legal Framework & Top Clinics (Ovu)', url: 'https://ovu.com/fertility-insights/ivf-in-greece-2026-costs-legal-framework-top-fertility-clinics' },
      { '@type': 'CreativeWork', name: 'IVF Cost in India 2026 — city-wise breakdown (Crysta IVF)', url: 'https://crystaivf.com/blogs/ivf-cost-in-india-city-wise/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ivf-cost-by-country#faq', url: 'https://vitalityscout.com/guides/ivf-cost-by-country' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IVF Cost by Country: US vs Mexico, Spain, Czech Republic, Greece &amp; India
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Five of the most-searched fertility-travel markets — Mexico, Spain, the Czech Republic,
            Greece, and India — side by side against US prices. Per-cycle costs, what each cycle
            includes, the laws that decide where you can be treated, and how to weigh price against
            quality and travel.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A standard IVF (in vitro fertilization) cycle runs about <strong>$15,000-$30,000</strong>{' '}
              all-in in the US versus roughly <strong>$4,000-$7,000</strong> in Mexico,{' '}
              <strong>€2,500-€4,500</strong> in the Czech Republic, <strong>€3,000-€5,000</strong> in
              Greece, <strong>€4,000-€7,000</strong> in Spain, and <strong>$2,000-$4,000</strong> in
              India — savings of 50-80% on published comparisons. Cheapest is not automatically best:
              weigh success rates, the lab, donor-egg law, and travel. Verify every quote with the
              clinic. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 13 min read</p>
        </div>
      </section>

      {/* Medical / Quality Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies clinic to clinic, not just country to country.</strong> A low headline
            price means little until you know the embryology lab, the protocol, the success data, and
            exactly what the quote covers. Look for a lab that follows{' '}
            <a href="https://www.eshre.eu" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              ESHRE
            </a>{' '}
            or{' '}
            <a href="https://www.asrm.org" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              ASRM
            </a>{' '}
            guidance, and confirm accreditation and published outcomes directly — claims can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. IVF outcomes depend
            on your individual case, age, and clinic, and no clinic can guarantee a pregnancy or live
            birth. Discuss candidacy, alternatives, risks, and realistic expectations with a qualified
            fertility clinician before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">IVF Cost by Country at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-80% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest base own-egg pricing:</strong> India and the Czech Republic</li>
            <li>✓ <strong>Strong value with EU standards:</strong> Greece and the Czech Republic</li>
            <li>✓ <strong>Highest donor-egg availability in Europe:</strong> commonly cited for Spain</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (no long-haul flight)</li>
            <li>✓ <strong>The law often decides the country:</strong> donor anonymity + who can be treated differ</li>
            <li>✓ <strong>Base fee ≠ total:</strong> medication, ICSI, PGT-A, and freezing are usually extra</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why IVF Drives So Much Fertility Travel</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              IVF is one of the most travel-driven procedures in healthcare because the US math is stark.
              A single own-egg cycle is commonly quoted at $15,000-$30,000 all-in once medication, genetic
              testing, and add-ons are counted, and most patients need more than one cycle — so realistic
              total spending often runs well into the tens of thousands. US insurance coverage for IVF is
              patchy and varies sharply by state, which means many patients are effectively paying cash
              either way.
            </p>
            <p>
              That makes the comparison simple on price: the same injectable medications, similar lab
              protocols, and ESHRE- or ASRM-aligned practice are available abroad at a fraction of the
              cost. But IVF differs from a procedure like dental work in one decisive way — the law, not
              just the price, often decides where you can be treated. Donor anonymity rules, age limits,
              and who is eligible for treatment vary by country, and they can rule a destination in or out
              before cost ever enters the picture. This guide compares the five markets US patients search
              for most, then gives you a way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">IVF Cost by Country: Per-Cycle Comparison (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are for a standard own-egg IVF cycle, compiled from public 2026 fertility cost
          sources. They are estimates, not quotes, and most exclude stimulation medication and add-ons
          like ICSI, PGT-A, and freezing. European prices are quoted in euros; conversions are
          approximate.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Own-Egg Cycle (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Quality / Regulatory Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$15,000 - $30,000 all-in</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Monitoring, retrieval, lab, transfer; meds &amp; testing often extra</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">SART / CDC ART success-rate reporting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,000 - $4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Consult, monitoring, retrieval, lab, transfer; meds extra</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Large JCI/NABH hospital networks; verify the IVF lab</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Czech Republic</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~€2,500 - €4,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Consult, monitoring, retrieval, lab, single transfer; meds extra</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU clinical standards; anonymous egg donation</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Greece</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~€3,000 - €5,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Clinic fees, tests, often meds and embryo vitrification</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU standards; broad legal framework, short donor waits</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,000 - $7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Consult, ultrasounds, retrieval, IVF/ICSI, transfer; meds extra</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">No long-haul flight; verify ASRM/ESHRE lab adherence</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Spain</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~€4,000 - €7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Procedure, consults, monitoring; meds often partly included</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU standards; deep anonymous donor-egg programs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by clinic, your age and protocol, and whether you add ICSI, PGT-A, freezing, or
          donor eggs. Donor-egg cycles run materially higher everywhere — commonly cited around
          $7,000-$12,000 in Mexico, €5,500+ in the Czech Republic, and €7,200+ in Spain. Always request a
          written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Five Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and — uniquely for IVF — the legal framework differently.
            Here is how they actually differ for a US patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — no long-haul flight, and
                clinics cluster in Mexico City, Cancún, Guadalajara, and the border cities. A standard
                own-egg cycle is commonly quoted around $4,000-$7,000 with medication billed separately,
                and donor-egg cycles run higher. Many programs follow ASRM or ESHRE lab guidance and use
                the same injectable medications, so the gap reflects lower overhead rather than lower
                standards. As everywhere, vet the specific clinic and its embryology lab, not the country.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Spain</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Donor depth</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Spain is Europe&apos;s best-known fertility-travel hub, built on a large, well-regulated
                anonymous egg-donation system and short donor waits. Own-egg cycles are commonly quoted
                around €4,000-€7,000, with donor-egg cycles higher (often €7,200+). Prices sit above the
                cheapest European options, but the depth of the donor program and EU clinical standards
                are why many patients pick Spain specifically. Confirm exactly what the quote includes —
                medication and donor fees can be partly bundled or fully separate.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Czech Republic</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">EU value</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                The Czech Republic — chiefly Prague and Brno — is consistently cited as Europe&apos;s best
                value, with standard own-egg cycles starting around €2,500-€4,500 under EU clinical
                standards. It runs anonymous egg donation with strong availability, and many clinics let
                you buy medication at lower local pharmacy prices. For patients who want the EU regulatory
                framework at a sharper price than Spain, this is the market most people compare against.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Greece</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Short donor waits</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Greece — chiefly Athens and Thessaloniki — pairs EU standards with a notably permissive
                legal framework and short donor-egg waiting times, which is a major reason it draws
                international patients. Standard own-egg cycles are commonly quoted around €3,000-€5,000,
                with many clinics bundling tests, medication, and embryo vitrification. It sits between the
                Czech Republic and Spain on price while offering broad treatment access.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest base price</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India posts the lowest base own-egg pricing in this comparison — commonly $2,000-$4,000 per
                cycle, with metro clinics in Mumbai and Delhi quoting higher than tier-2 cities. Large
                hospital networks operate JCI- or NABH-accredited facilities, but accreditation of a
                hospital is not the same as the quality of its embryology lab, so verify the specific IVF
                unit and its published outcomes. The long flight is the main trade-off, which makes India
                most compelling for multi-cycle plans where the per-cycle gap compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an IVF Cycle Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included in a base cycle</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ Initial consultation and treatment planning</li>
              <li>✓ Ovarian-stimulation monitoring and ultrasounds</li>
              <li>✓ Egg retrieval (often under light sedation)</li>
              <li>✓ Lab fertilization (IVF, and sometimes ICSI)</li>
              <li>✓ Embryo culture in the lab</li>
              <li>✓ A single fresh embryo transfer</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Stimulation medication (frequently €500-€2,500+)</li>
              <li>✗ ICSI as an add-on, where it is priced separately</li>
              <li>✗ PGT-A genetic testing (often €1,500-€5,000)</li>
              <li>✗ Embryo freezing and annual storage</li>
              <li>✗ Donor eggs or donor sperm and their screening</li>
              <li>✗ A separate frozen embryo transfer; flights and lodging</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that lists
            the base cycle, medication, ICSI, PGT-A, freezing and storage, and any donor fees as separate
            line items — then ask what is excluded. A &ldquo;€3,000 IVF cycle&rdquo; that excludes
            medication, ICSI, and freezing is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* The law section — the IVF-specific differentiator */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Law Often Decides the Country, Not the Price</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              IVF is unusual among medical-travel procedures: the destination is frequently chosen by what
              is legally permitted, not by which clinic is cheapest. Donor anonymity rules, who is eligible
              for treatment, age limits, and what testing or selection is allowed differ country to
              country — and they can rule a destination in or out before cost matters at all.
            </p>
            <p>
              In broad strokes, Spain, the Czech Republic, and Greece operate anonymous egg-donation
              systems with strong donor availability and short waits, which is a major reason patients
              needing donor eggs cluster there. Eligibility for single patients, same-sex couples, and
              patients above certain ages varies by country. Because these rules change and depend on your
              situation, confirm the current law and your own eligibility directly with the clinic and, for
              anything involving parentage or bringing embryos home, with a qualified professional —
              before you commit to a destination.
            </p>
          </div>
        </div>
      </section>

      {/* Quality signals */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Signals to Verify</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Lab standards &amp; accreditation</h3>
            <p className="text-sm text-gray-700 mb-0">
              Look for an embryology lab that follows{' '}
              <a href="https://www.eshre.eu" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ESHRE</a>{' '}
              or{' '}
              <a href="https://www.asrm.org" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ASRM</a>{' '}
              guidance, plus recognized facility accreditation such as JCI or ISO (and NABH in India).
              Accreditation must be renewed and a hospital&apos;s accreditation is not the same as the
              quality of its IVF unit, so confirm current status on the clinic&apos;s own site or the
              accrediting body — not a third-party listing.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Success data — read it carefully</h3>
            <p className="text-sm text-gray-700 mb-0">
              Treat success-rate claims with caution: per-transfer, per-cycle, and per-patient numbers are
              not the same, and a clinic can look better simply by reporting a different denominator or
              treating an easier patient mix. Ask which metric is quoted and for which age band, and
              validate against independent benchmarks such as ESHRE and the US CDC ART report. No
              legitimate clinic guarantees a pregnancy or live birth.
            </p>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose: A Simple Framework</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Check the law before the price</h4>
              <p className="text-sm text-gray-600 mb-0">
                Decide first whether you need donor eggs or sperm, and confirm your eligibility and the
                donor-anonymity rules in each country. The legal framework can rule a destination out
                before cost is even relevant — so screen on law first.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the base fee</h4>
              <p className="text-sm text-gray-600 mb-0">
                Medication, ICSI, PGT-A, freezing, donor fees, flights, lodging, and the real possibility
                of a second cycle can move the total well past the headline. India&apos;s low base fee can
                lose its edge for a single cycle once two long-haul flights are added; it shines across
                multiple cycles.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide how much proximity matters</h4>
              <p className="text-sm text-gray-600 mb-0">
                If short travel and easy follow-up matter most, Mexico wins. If EU clinical standards give
                you confidence, the Czech Republic, Greece, and Spain move up. If lowest base price drives
                the decision, India and the Czech Republic lead — paired with stricter lab vetting.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the clinic and its lab, not the country</h4>
              <p className="text-sm text-gray-600 mb-0">
                Country averages are a starting point, not a verdict. Confirm the embryology lab&apos;s
                standards, the age-banded success data and which metric it reports, the itemized quote, and
                how monitoring and follow-up are handled across borders.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any clinic that guarantees a pregnancy, quotes a cycle without
              naming what is and is not included, reports a success rate without a denominator or age band,
              or pressures a deposit before you have a written itemized quote. Legitimate clinics set
              realistic expectations and put the details in writing.
            </p>
          </div>
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

      {/* CTA / money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Fertility Destinations Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore full destination profiles with vetted providers for the markets in this guide, then
            dig into the ones you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/spain" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Spain Destination Guide
            </Link>
            <Link href="/destinations/czech-republic" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Czech Republic Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/cheapest-ivf-in-europe" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇪🇺</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest IVF in Europe</div>
                <div className="text-sm text-gray-600">Five European countries, own- and donor-egg cycle prices</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/spain-vs-czech-ivf" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Spain vs Czech Republic for IVF</div>
                <div className="text-sm text-gray-600">Europe&apos;s top two IVF destinations, head to head</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/egg-freezing-abroad-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🥚</span>
              <div>
                <div className="font-bold text-gray-900">Egg Freezing Abroad Cost</div>
                <div className="text-sm text-gray-600">Per-cycle pricing abroad vs the US, and the eligibility laws</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/spain-ivf-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇪🇸</span>
              <div>
                <div className="font-bold text-gray-900">Spain IVF Cost</div>
                <div className="text-sm text-gray-600">US vs Spain price comparison, procedure by procedure</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/czech-ivf-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇿</span>
              <div>
                <div className="font-bold text-gray-900">IVF Czech Republic Cost</div>
                <div className="text-sm text-gray-600">Own- and donor-egg cycles vs the US, Prague clinics</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/india" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Destination Guide</div>
                <div className="text-sm text-gray-600">JCI/NABH hospitals, vetted providers, and trip logistics</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Affiliate + Medical Disclaimer (shared component) */}
      <MedicalDisclaimer />

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://ivfpath.com/blog/ivf-cost-usa-2026-state-comparison" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IVF Cost USA 2026: $15,000–$30,000 by State (IVFPath) — US baseline</a></li>
            <li>• <a href="https://www.mystoria.com/blog/how-much-does-ivf-cost-without-insurance-2026-breakdown" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">How Much Does IVF Cost Without Insurance? 2026 Breakdown (Mystoria)</a></li>
            <li>• <a href="https://nextivf.com/ivf-cost-in-mexico/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IVF Cost in Mexico (2026): Affordable Fertility Treatment Explained (NextIVF)</a></li>
            <li>• <a href="https://www.fertilityclinicsabroad.com/ivf-costs/surprising-cost-ivf-europe/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cheapest IVF in Europe — Updated 2026 country cost ranges (Fertility Clinics Abroad)</a></li>
            <li>• <a href="https://ivffinder.com/en/blog/ivf-prices-prague-2026" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IVF Prices in Prague 2026 — Czech Republic value (IVF Finder)</a></li>
            <li>• <a href="https://ovu.com/fertility-insights/ivf-in-greece-2026-costs-legal-framework-top-fertility-clinics" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IVF in Greece 2026: Costs, Legal Framework &amp; Top Clinics (Ovu)</a></li>
            <li>• <a href="https://crystaivf.com/blogs/ivf-cost-in-india-city-wise/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IVF Cost in India 2026 — city-wise breakdown (Crysta IVF)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing IVF Abroad?"
          description="Get our fertility-travel checklist: how to read an itemized IVF quote, the lab-standards and success-rate questions to ask, and how the donor-egg laws differ by country."
          source="guide_ivf_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
