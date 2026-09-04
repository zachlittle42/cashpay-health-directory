import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Donor-Egg IVF Abroad (2026): Czech & Greece Costs vs the US' },
  alternates: { canonical: 'https://vitalityscout.com/guides/donor-egg-ivf-abroad' },
  description:
    'Donor-egg IVF abroad in 2026: Czech and Greece clinic price lists (~€5,525–€6,900 sticker; ~$10–14.5k all-in) vs US donor cycles often $35k+. What is excluded, anonymity rules, and how to read a quote.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does donor-egg IVF cost abroad compared with the US?',
    answer:
      'Published clinic stickers in the Czech Republic and Greece commonly land around €5,500–€6,900 for a donor-egg cycle — Reprofit Brno lists IVF with donated eggs at 123,000 CZK on its 1 January 2026 self-pay price list (about €5,525 at typical early-2026 conversion); Serum IVF in Athens lists a donor-egg cycle at €6,900 on its June 2026 pricelist. All-in with recipient meds, travel, and a likely second trip for a frozen transfer often totals about $10,000–$14,500. US donor-egg cycles are commonly cited at $35,000 or more once agency, donor compensation, clinic, and medication are stacked. These are estimates — confirm a written, itemized quote. This is information, not medical advice.',
  },
  {
    question: 'What does a Czech or Greek donor-egg sticker price actually include?',
    answer:
      'At Reprofit Brno, the 123,000 CZK DIVF/OD line covers consultation, treatment plan, donor selection plus standard stimulation and compensation, donor retrieval under anesthesia, partner STD testing, sperm prep, ICSI, extended culture, and one fresh embryo transfer. Cryopreservation, PICSI, EmbryoGlue, and TimeLapse are listed as extra. At Serum Athens, €6,900 covers the donor’s expenses, legally required donor labs and meds, donor monitoring and retrieval, IVF or ICSI, blastocyst culture, and the recipient transfer — recipient medications and blood tests are excluded, and extra embryo freezing is €500 per straw. PGT and most subsequent frozen transfers are usually extra everywhere. Always get the current list from the clinic.',
  },
  {
    question: 'Why do people compare the Czech Republic and Greece for donor eggs?',
    answer:
      'Both sit well below US donor-cycle pricing and publish real clinic lists instead of “from $X” facilitator ads. The Czech Republic is usually the price floor and is limited to heterosexual couples, with mandatory donor anonymity. Greece is mid-priced, EU-regulated, typically has short donor waits, and is open to single women; Greek law also allows identity-release options in some cases. Spain has the deepest donor pool but costs more — see our Spain vs Czech comparison. We do not have a Greece destination page; treat clinic sites and the fertility hub as the next clicks.',
  },
  {
    question: 'What should I watch for besides the sticker price?',
    answer:
      'Four recurring caveats: (1) donor anonymity is mandated in the Czech Republic and is the default in much of Europe, which can matter if your home country expects identifiable donors; (2) success rates are often self-reported and may mix per-transfer, per-cycle, and selected-patient numbers; (3) recipient medications, PGT, and extra frozen-embryo transfers are frequently excluded; (4) many protocols need a second trip if the first transfer is deferred or fails. Budget the second trip before you compare “all-in” to a US quote.',
  },
  {
    question: 'Are aggregator “IVF abroad” prices reliable?',
    answer:
      'Treat aggregator and facilitator ranges as estimates, not quotes. Third-party directories often list Reprofit donor-egg IVF “from €5,490” and round country bands (€4,200–€7,500 Czech, €5,000–€8,000 Greece). Those bands are useful for orientation; they are not a clinic’s invoice. Prefer a dated clinic PDF or HTML pricelist, then add meds, travel, storage, PGT, and a possible FET. Confirm every number with the clinic before you book flights.',
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

export default function DonorEggIvfAbroadGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Donor-Egg IVF Abroad (2026): Czech Republic & Greece vs the US',
    description:
      'A 2026 cost guide to donor-egg IVF abroad — published Czech and Greek clinic price lists, all-in travel math versus US donor cycles, and the legal and quote caveats.',
    url: 'https://vitalityscout.com/guides/donor-egg-ivf-abroad',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/donor-egg-ivf-abroad#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Donor-egg in vitro fertilization (IVF) abroad' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Reprofit Brno — 2026 self-pay IVF price list (effective 1 January 2026)', url: 'https://www.reprofit.cz/en/price-list/price-brno/' },
      { '@type': 'CreativeWork', name: 'Reprofit Brno — Ceník IVF samoplátce 2026 PDF (123,000 CZK DIVF/OD)', url: 'https://www.reprofit.cz/media/filer_public/4e/3c/4e3cc024-2a3f-4aaa-ae93-2eb45b5b7052/reprofit_cenik_2026_ivf_cze_samoplatce.pdf' },
      { '@type': 'CreativeWork', name: 'Serum IVF Athens — fertility treatments pricelist (donor-egg cycle €6,900, updated June 2026)', url: 'https://www.ivfserum.com/pricelist/' },
    ],
  };

  const faqSchema = {
    ...buildFAQSchema(FAQ_ITEMS),
    '@id': 'https://vitalityscout.com/guides/donor-egg-ivf-abroad#faq',
    url: 'https://vitalityscout.com/guides/donor-egg-ivf-abroad',
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Donor-Egg IVF Abroad</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/fertility" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Fertility &amp; IVF hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
                Fertility
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Donor-Egg IVF Abroad: Czech &amp; Greece Costs vs the US (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The donor-egg price gap is the one that actually moves a five-figure US bill.
              Here are published clinic lists — not facilitator averages — and the extras
              that turn a €6,000 sticker into a $12,000 trip.
            </p>

            <div className="rounded-lg border-l-4 border-cyan-600 bg-cyan-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Donor-egg IVF</strong> in the Czech Republic and Greece is commonly
                quoted around <strong>€5,500–€6,900</strong> on clinic price lists (Reprofit
                Brno <strong>123,000 CZK / ~€5,525</strong> from its January 2026 self-pay
                list; Serum Athens <strong>€6,900</strong> on its June 2026 pricelist).
                All-in with travel, recipient meds, and a likely second trip often lands
                about <strong>$10,000–$14,500</strong>, versus US donor cycles often{' '}
                <strong>$35,000+</strong>. Meds, PGT, and extra FETs are frequently
                excluded. Confirm the current list. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: September 2026 • 12 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#why" className="text-blue-600 hover:underline">1. Why donor-egg is the IVF-abroad arbitrage</a></li>
              <li><a href="#clinic-lists" className="text-blue-600 hover:underline">2. Published clinic price lists (Reprofit, Serum)</a></li>
              <li><a href="#all-in" className="text-blue-600 hover:underline">3. Sticker vs all-in ($10–14.5k)</a></li>
              <li><a href="#caveats" className="text-blue-600 hover:underline">4. Anonymity, success rates, extras, second trips</a></li>
              <li><a href="#aggregators" className="text-blue-600 hover:underline">5. How to read aggregator estimates</a></li>
              <li><a href="#next" className="text-blue-600 hover:underline">6. Where to go next on VitalityScout</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Own-egg IVF abroad saves money. Donor-egg IVF abroad changes the decision.
              In the US, donor compensation, agency fees, and clinic charges stack into
              the mid-five figures. In Brno or Athens, the clinic&apos;s own list is a
              four-figure euro line — if you know what is sitting outside it.
            </p>

            <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Why donor-egg is the IVF-abroad arbitrage
            </h2>
            <p className="text-gray-700 mb-4">
              A US own-egg cycle is commonly cited around $15,000–$30,000 all-in. A US
              donor-egg cycle is a different invoice: donor screening and compensation,
              agency or clinic donor-program fees, the recipient cycle, and medication.
              Published US ranges in our existing fertility guides run{' '}
              <strong>$25,000–$60,000</strong>, and <strong>$35,000+</strong> is a
              realistic planning number once extras land. That is the comparison that
              makes a European sticker price worth a flight — not a $4,000 own-egg
              headline in Mexico.
            </p>
            <p className="text-gray-700 mb-4">
              Czech and Greek clinics publish itemized lists in CZK or euros. Spain
              remains the deepest donor pool in Europe (see{' '}
              <Link href="/guides/spain-vs-czech-ivf" className="text-blue-600 hover:underline">Spain vs Czech Republic for IVF</Link>
              ) but usually costs more. We are not inventing a Greece destination URL —
              use the clinic pricelist and the{' '}
              <Link href="/fertility" className="text-blue-600 hover:underline">fertility hub</Link>{' '}
              until one exists.
            </p>

            <h2 id="clinic-lists" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Published clinic price lists
            </h2>
            <p className="text-gray-700 mb-4">
              Two named lists, quoted from the clinics&apos; own documents — not from a
              medical-tourism broker.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Clinic (source)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Donor-egg sticker</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the line includes</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Called out as extra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Reprofit Brno — self-pay list effective 1 Jan 2026 (PDF)</td>
                    <td className="border border-gray-300 px-4 py-3">123,000 CZK (~€5,525 at typical early-2026 conversion)</td>
                    <td className="border border-gray-300 px-4 py-3">DIVF/OD: consult, plan, donor selection + standard stimulation &amp; compensation, donor retrieval under anesthesia, partner STD, sperm prep, ICSI, extended culture, one fresh transfer</td>
                    <td className="border border-gray-300 px-4 py-3">Embryo cryopreservation, MFSS/MACS, PICSI, EmbryoGlue, TimeLapse</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Serum IVF, Athens — HTML pricelist updated June 2026</td>
                    <td className="border border-gray-300 px-4 py-3">€6,900 donor-egg cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Donor expenses, donor labs/meds/monitoring/retrieval, IVF or ICSI, blastocyst culture, recipient transfer; first straw of cryo + one later FET if embryos are frozen for future use</td>
                    <td className="border border-gray-300 px-4 py-3">Recipient meds and blood tests; €20 Greek IVF Committee fee per transfer; extra straw €500; subsequent FET €1,000; PGT billed separately</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Reprofit also publishes package ladders on the same 2026 list (for example
              a DIVF Lite line and a Premium / Baby Guarantee track). Those are different
              products from the 123,000 CZK base DIVF/OD cycle. Serum&apos;s own-egg cycle
              is a separate €3,600 line; importing frozen donor oocytes drops their
              donor-cycle fee to €3,600 plus the bank&apos;s oocyte invoice. Conversion
              from CZK to euros moves with the rate — treat ~€5,525 as an orientation
              figure, not a locked euro price.
            </p>

            <h2 id="all-in" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Sticker vs all-in: how you get to $10–14.5k
            </h2>
            <p className="text-gray-700 mb-4">
              Add the line items clinics usually leave off the donor-egg sticker:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Recipient medications and bloodwork</strong> — Serum explicitly excludes them; a donation-cycle med bill can be a few hundred euros, a stimulated add-on more.</li>
              <li><strong>PGT-A</strong> — Serum lists biopsy from €1,000 (up to 5 embryos) plus per-embryo lab fees (~€250–€400) paid to the genetics lab.</li>
              <li><strong>Extra storage and extra FETs</strong> — one transfer is in; a failed or deferred cycle is another ticket and another fee.</li>
              <li><strong>Flights and lodging</strong> — two short European trips (sperm drop / monitoring, then transfer) are the realistic plan for many US patients.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Stack a ~€5,500–€6,900 sticker, €300–€2,000 in extras, and two US–Europe
              trips, and a planning range of about <strong>$10,000–$14,500</strong> is
              the honest all-in band — still well under a $35,000+ US donor cycle, and
              still not a guarantee. Get the clinic to price <em>your</em> protocol.
            </p>

            <h2 id="caveats" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Caveats that change the decision
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Donor anonymity mandates.</strong> Czech law requires anonymous donation and limits treatment to heterosexual couples. Greek law is more open (single women are treated) and allows anonymity or identity-release options in some cases — confirm the current rule with the clinic and how that interacts with your home country&apos;s parentage or donor-identity expectations.</li>
              <li><strong>Self-reported success rates.</strong> Clinic websites often quote per-transfer pregnancy rates on selected donor-egg cohorts. Per-cycle, per-patient, and live-birth numbers are not the same. Prefer registries (ESHRE, national ART reports) over a homepage percentage.</li>
              <li><strong>Meds, PGT, and FET are often excluded.</strong> Two quotes at €6,900 can differ by thousands once genetics and a second transfer are added.</li>
              <li><strong>Second-trip risk.</strong> Lining, travel delays, or a freeze-all protocol can turn one planned visit into two. Budget the second trip before you call the sticker &quot;all-in.&quot;</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Eligibility is a legal question, not a price question</h4>
              <p className="text-gray-700 mb-0">
                If you are single or in a same-sex couple, the cheapest Czech list may
                be closed to you. Confirm current eligibility in writing before you
                pay a deposit or book flights. Discuss medical candidacy with a
                licensed fertility clinician.
              </p>
            </div>

            <h2 id="aggregators" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Aggregator estimates — useful, not invoiced
            </h2>
            <p className="text-gray-700 mb-4">
              Country-level bands in our{' '}
              <Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">IVF cost by country</Link>{' '}
              and{' '}
              <Link href="/guides/cheapest-ivf-in-europe" className="text-blue-600 hover:underline">cheapest IVF in Europe</Link>{' '}
              guides (Czech donor-egg roughly €4,200–€7,500; Greece roughly €5,000–€8,000)
              come from published comparisons and facilitator tables. Third-party
              directories have listed Reprofit donor-egg IVF &quot;from €5,490.&quot; Those
              figures are <strong>aggregator estimates</strong>. They sit near the
              official 123,000 CZK / €6,900 lists, which is why they are useful — and
              they are still not a substitute for the PDF or HTML pricelist dated by
              the clinic.
            </p>

            <h2 id="next" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Where to go next
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/fertility" className="text-blue-600 hover:underline">Fertility &amp; IVF hub</Link></li>
              <li><Link href="/guides/czech-ivf-cost" className="text-blue-600 hover:underline">IVF Czech Republic cost</Link></li>
              <li><Link href="/guides/spain-vs-czech-ivf" className="text-blue-600 hover:underline">Spain vs Czech Republic for IVF</Link></li>
              <li><Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">IVF cost by country</Link></li>
              <li><Link href="/destinations/czech-republic" className="text-blue-600 hover:underline">Czech Republic destination</Link></li>
              <li><Link href="/destinations/spain" className="text-blue-600 hover:underline">Spain destination</Link></li>
            </ul>
            <p className="text-gray-700 mb-4">
              There is no VitalityScout /destinations/greece page. Use Serum&apos;s
              pricelist and the fertility hub; do not follow a guessed Greece URL.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare fertility travel options</h3>
            <p className="mb-6 text-cyan-50">
              Country rules and itemized cycle prices — then confirm every figure with the clinic.
            </p>
            <Link
              href="/fertility"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors"
            >
              Open the fertility hub
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Reprofit Brno — Price of treatment Brno (clinic price-list landing page) and Ceník IVF samoplátce 2026 PDF, valid from 01.01.2026: IVF cyklus s darovanými vajíčky (DIVF, OD) 123,000 CZK</li>
              <li>• Serum IVF (Athens) — Fertility Treatments Pricelist, latest updated June 2026: Donor Egg IVF Cycle 6,900€; own-egg 3,600€; imported frozen oocytes 3,600€ plus bank fees</li>
              <li>• VitalityScout — IVF cost by country, cheapest IVF in Europe, Czech IVF cost, Spain IVF cost (US $25k–$60k donor-cycle context; country aggregator bands flagged as estimates)</li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Donor-Egg Quote Checklist"
            description="What to demand on a Czech or Greek itemized quote — inclusions, anonymity rules, and the second-trip line items."
            source="guide_donor_egg_ivf_abroad"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
