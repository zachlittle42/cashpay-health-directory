import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: { absolute: 'Brazil Plastic Surgery Cost 2026: BBL, Lipo & Tummy Tuck' },
  alternates: { canonical: 'https://vitalityscout.com/guides/brazil-plastic-surgery-cost' },
  description:
    'What plastic surgery costs in Brazil vs the US in 2026. BBL ($3,500-6,000), liposuction, tummy tuck, breast augmentation & mommy makeover prices, with 40-60% typical savings. Estimates to verify with each clinic.',
};

export default function BrazilPlasticSurgeryCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Brazil Plastic Surgery Cost (2026): BBL, Lipo, Tummy Tuck & More',
    headline: 'How Much Does Plastic Surgery Cost in Brazil in 2026?',
    description:
      'A grounded comparison of plastic surgery costs in Brazil versus the US — procedure by procedure — covering the Brazilian Butt Lift, liposuction, tummy tuck, breast augmentation, and mommy makeover, with what is included, what drives price, and how to choose a clinic safely.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/brazil-plastic-surgery-cost',
    keywords: [
      'brazil plastic surgery cost',
      'bbl brazil cost',
      'brazilian butt lift cost brazil',
      'liposuction brazil cost',
      'tummy tuck brazil cost',
      'plastic surgery brazil price',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does plastic surgery cost in Brazil in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Brazil, common cosmetic procedures typically run about 40-60% below US prices. As 2026 estimates: a Brazilian Butt Lift (BBL) commonly runs $3,500-$6,000 (vs roughly $8,000-$15,000 in the US), liposuction $2,000-$6,000, a tummy tuck $4,000-$6,500, breast augmentation around $4,500, and a mommy makeover $6,000-$12,000. All figures are estimates that vary by surgeon, hospital, and the number of areas treated, and should be confirmed in a written quote with each clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a BBL cost in Brazil compared to the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Brazilian Butt Lift in Brazil commonly costs $3,500-$6,000 as a 2026 estimate, versus roughly $8,000-$15,000 in the United States — a difference of several thousand dollars before travel and lodging. The BBL is also the highest-risk cosmetic procedure, so the surgeon\'s board certification and the use of ultrasound-guided, subcutaneous-only fat injection matter more than the price.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is plastic surgery in Brazil safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Brazil has a deep, well-regulated plastic surgery tradition, and choosing a surgeon who is board-certified by the Sociedade Brasileira de Cirurgia Plástica (SBCP) and operating in an accredited hospital substantially lowers risk. As with any country, outcomes depend on the specific surgeon and facility, not the destination. Verify SBCP membership and the surgeon\'s CRM registration before booking, and be especially cautious with the BBL, which carries the highest complication rate in cosmetic surgery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Brazil plastic surgery price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It varies. Some Brazilian clinics quote an all-inclusive package covering the surgeon\'s fee, anesthesia, hospital or surgical-center facility, implants where applicable, and a set number of post-op follow-ups; the leading private hospitals more often itemize surgeon, facility, and anesthesia separately. Flights, lodging during recovery, lab work, compression garments, and any revision are frequently extra. Always ask for a written, itemized quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does insurance cover plastic surgery in Brazil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Elective cosmetic surgery is not covered by US insurance whether it is performed in the US or abroad, so these procedures are cash-pay. Reconstructive surgery may be covered domestically in specific medical circumstances, but cosmetic procedures sought through medical tourism are paid out of pocket. Some patients use financing or HSA/FSA funds only where a procedure qualifies medically — confirm with your plan administrator.',
        },
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Brazil Plastic Surgery Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">💲</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Brazil Plastic Surgery Cost in 2026: What You&apos;ll Actually Pay
            </h1>
            <p className="text-xl text-gray-600">
              BBL, liposuction, tummy tuck, breast augmentation, and the mommy makeover — Brazil vs the
              US, procedure by procedure, with what&apos;s included and how to choose a clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-emerald-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-emerald-900 mb-3">
              In <strong>Brazil</strong>, common cosmetic procedures typically cost <strong>40-60% less than
              in the US</strong>. As 2026 estimates: a <strong>Brazilian Butt Lift runs $3,500-$6,000</strong> (vs
              roughly $8,000-$15,000 in the US), <strong>liposuction $2,000-$6,000</strong>,
              a <strong>tummy tuck $4,000-$6,500</strong>, <strong>breast augmentation around $4,500</strong>,
              and a <strong>mommy makeover $6,000-$12,000</strong>.
            </p>
            <p className="text-sm text-emerald-900 mb-0">
              Every figure here is an <strong>estimate that varies by surgeon, hospital, and the number of areas
              treated</strong>, and should be confirmed in a written quote. Cosmetic surgery is cash-pay; insurance
              does not cover it.
            </p>
          </div>

          {/* BBL safety notice */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8 not-prose">
            <h3 className="text-lg font-bold text-red-900 mt-0 mb-3">A note on the BBL specifically</h3>
            <p className="text-sm text-red-800 mb-3">
              The <strong>Brazilian Butt Lift (gluteal fat grafting) carries the highest complication and
              mortality rate of any cosmetic procedure</strong>, driven by the risk of pulmonary fat embolism.
              Leading plastic surgery societies (ASPS and the multi-society Task Force for Safety in Gluteal Fat
              Grafting) have issued safety advisories urging extreme caution.
            </p>
            <p className="text-sm text-red-800 mb-0">
              Risk is meaningfully lower with a <strong>board-certified surgeon</strong> who injects fat only into
              the subcutaneous layer (never into muscle), uses <strong>ultrasound guidance</strong>, and limits case
              volume. Choose for safety, not price. This guide compares <em>costs</em>, not outcomes, and does not
              endorse or guarantee any clinic or result.
            </p>
          </div>

          <h2>Why Brazil is a plastic surgery destination</h2>
          <p>
            Brazil has one of the deepest cosmetic surgery cultures in the world. The country runs among the highest
            volumes of aesthetic procedures globally, the Brazilian Butt Lift is named for the technique Brazilian
            surgeons helped pioneer, and the profession is organized under a long-established board — the{' '}
            <strong>Sociedade Brasileira de Cirurgia Plástica (SBCP)</strong>, founded in 1948. São Paulo is the
            country&apos;s hospital and academic hub; Rio de Janeiro is associated with body-sculpting and the
            Ivo Pitanguy school that trained generations of surgeons.
          </p>
          <p>
            For Americans, the appeal is the combination of that surgical depth with prices that run roughly
            40-60% below US figures. The trade-off is distance: Brazil is a long-haul flight, not a border crossing,
            so the math only works when the savings outweigh travel and a two-to-three-week recovery window before
            flying home.
          </p>

          <h2>Brazil vs US plastic surgery cost (2026 estimates)</h2>
          <p>
            Here is how the most-searched procedures compare. US figures are typical all-in ranges (surgeon,
            anesthesia, and facility); Brazil figures are common surgeon/clinic ranges. Both are estimates to verify
            with each provider — not quotes.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">Cost comparison by procedure (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US cost</th>
                    <th className="text-left py-2">Typical Brazil cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Brazilian Butt Lift (BBL)</td>
                    <td className="py-2">$8,000-$15,000</td>
                    <td className="py-2">$3,500-$6,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Liposuction (per area / multi-area)</td>
                    <td className="py-2">$6,000-$12,000</td>
                    <td className="py-2">$2,000-$6,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Tummy tuck (abdominoplasty)</td>
                    <td className="py-2">$10,000-$15,000</td>
                    <td className="py-2">$4,000-$6,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast augmentation</td>
                    <td className="py-2">$7,000-$12,000</td>
                    <td className="py-2">~$4,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Mommy makeover (combined)</td>
                    <td className="py-2">$15,000-$25,000</td>
                    <td className="py-2">$6,000-$12,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Rhinoplasty</td>
                    <td className="py-2">$9,000-$16,000</td>
                    <td className="py-2">$3,000-$6,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Facelift</td>
                    <td className="py-2">$12,000-$20,000</td>
                    <td className="py-2">$5,000-$9,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Sources: aggregated medical-tourism and US plastic-surgery pricing, 2026. Ranges depend on the surgeon,
              hospital, implant choice, and number of areas treated. Estimates only — confirm a written quote with
              each clinic.
            </p>
          </div>

          <h2>What&apos;s included — and what usually isn&apos;t</h2>
          <p>
            The biggest source of confusion is what a quoted number actually buys. Two patterns dominate in Brazil:
          </p>
          <ul>
            <li>
              <strong>All-inclusive packages</strong> — common at clinics that market to international patients.
              These typically bundle the surgeon&apos;s fee, anesthesia, the surgical-center or hospital facility,
              implants where applicable, and a set number of post-op follow-ups; some add airport pickup, a few
              nights&apos; lodging, and lymphatic massages.
            </li>
            <li>
              <strong>Itemized hospital billing</strong> — common at the premier private hospitals (such as the
              JCI-accredited Albert Einstein and Sírio-Libanês in São Paulo), where the surgeon, the facility, and
              anesthesia are billed separately. This is the institutional-safety route, and it usually prices higher.
            </li>
          </ul>
          <p>Almost always extra, in either model:</p>
          <ul>
            <li><strong>Flights and lodging</strong> during the recovery stay</li>
            <li><strong>Pre-op labs and imaging</strong> (some packages include these)</li>
            <li><strong>Compression garments</strong> and post-op supplies</li>
            <li><strong>Any revision surgery</strong> — clarify the revision policy in writing before you book</li>
            <li><strong>Extended recovery</strong> if your stay runs longer than planned</li>
          </ul>

          <h2>Why plastic surgery is cheaper in Brazil</h2>
          <p>
            Lower price is mostly structural, not a quality cut. The main drivers:
          </p>
          <ul>
            <li><strong>Lower labor and facility costs</strong> — surgeon, nursing, anesthesia, and operating-room overhead cost far less than in the US.</li>
            <li><strong>Lower malpractice and administrative load</strong> — a different liability and billing environment removes cost the US system bakes in.</li>
            <li><strong>A favorable exchange rate</strong> — procedures priced in Brazilian reais convert to fewer US dollars.</li>
            <li><strong>High volume and competition</strong> — a deep market of trained surgeons keeps cosmetic pricing competitive.</li>
          </ul>
          <p>
            A lower price does <em>not</em> imply equal or better quality or outcomes. It also does not change the
            inherent risk of a procedure — a BBL is the highest-risk cosmetic surgery whether it is performed in Miami
            or São Paulo. Treat price as one input, not a quality signal.
          </p>

          <h2>How to choose a clinic safely</h2>
          <p>
            In a market this large, the single most important step is verifying the surgeon. Do this before you
            compare prices:
          </p>
          <ol>
            <li>
              <strong>Confirm SBCP board certification.</strong> The Sociedade Brasileira de Cirurgia Plástica
              maintains a public &quot;find a surgeon&quot; tool. A genuine specialist completes general-surgery
              residency plus plastic-surgery training and passes written and oral exams. Insist on this.
            </li>
            <li>
              <strong>Check CRM registration.</strong> Every practicing doctor in Brazil has a state Regional Council
              of Medicine (CRM) number and an RQE specialist registry number — both are verifiable.
            </li>
            <li>
              <strong>Ask where surgery is performed.</strong> An accredited hospital or licensed surgical center with
              a full anesthesia and ICU pathway is a meaningful safety margin, especially for combined or higher-risk
              cases. Brazil has dozens of JCI-accredited hospitals, concentrated in São Paulo and Rio.
            </li>
            <li>
              <strong>For a BBL, ask about technique.</strong> Subcutaneous-only fat injection and ultrasound guidance
              are the safety standards endorsed by international plastic-surgery societies.
            </li>
            <li>
              <strong>Be wary of guarantees.</strong> No reputable surgeon guarantees an outcome. A quote paired with a
              promised result is a red flag.
            </li>
          </ol>
          <p>
            We maintain a vetted list of SBCP-certified Brazilian surgeons and hospitals on our{' '}
            <Link href="/plastic_surgery" className="text-blue-600 hover:underline font-medium">
              plastic surgery providers
            </Link>{' '}page, with city, accreditations, and what each clinic is best for.
          </p>

          <h2>Travel and recovery</h2>
          <p>
            Brazil is a long flight from the US — typically 9-12 hours to São Paulo or Rio from the East Coast, more
            with connections — so build the trip around recovery, not sightseeing:
          </p>
          <ul>
            <li><strong>Plan to stay 2-3 weeks.</strong> Body procedures (BBL, tummy tuck, liposuction, mommy makeover) generally require this window before it is safe to fly home, to reduce clot risk and allow the first follow-up.</li>
            <li><strong>BBL recovery is specific:</strong> avoid sitting directly on the buttocks for several weeks; many patients use a special cushion.</li>
            <li><strong>Lodging near the clinic</strong> simplifies follow-ups and lymphatic massages. Budget $80-$250/night.</li>
            <li><strong>Consider medical-travel insurance</strong> for the trip and complications. See our{' '}
              <Link href="/guides/medical-travel-insurance-guide" className="text-blue-600 hover:underline">medical travel insurance guide</Link>.</li>
            <li><strong>Confirm follow-up after you fly home</strong> — many international-focused clinics offer remote check-ins, but a local surgeon for in-person follow-up is worth lining up in advance.</li>
          </ul>

          <h2>Financing and paying for it</h2>
          <p>
            Because cosmetic surgery is elective, US insurance does not cover it — in Brazil or at home. Plan to pay
            cash. Common approaches:
          </p>
          <ul>
            <li><strong>Clinic deposit + balance:</strong> most Brazilian clinics take a deposit to schedule and the balance before or on the day of surgery; many accept international cards or wire transfer.</li>
            <li><strong>Medical-financing companies and personal loans:</strong> some US patients finance through a third-party medical lender or a personal loan rather than the clinic.</li>
            <li><strong>HSA/FSA:</strong> generally only applies when a procedure qualifies as medically necessary (e.g., certain reconstructive or functional cases), not for purely cosmetic surgery. Confirm with your plan administrator.</li>
            <li><strong>Budget the all-in number:</strong> procedure + flights + lodging + garments + a contingency for an extended stay or revision — not just the quoted surgical fee.</li>
          </ul>

          <p>
            If you&apos;re weighing destinations, our{' '}
            <Link href="/destinations/brazil" className="text-blue-600 hover:underline font-medium">
              Brazil medical tourism destination guide
            </Link>{' '}covers logistics, top cities, and considerations, and our{' '}
            <Link href="/guides/plastic-surgery-korea-guide" className="text-blue-600 hover:underline font-medium">
              South Korea plastic surgery guide
            </Link>{' '}and{' '}
            <Link href="/guides/bbl-surgery-mexico" className="text-blue-600 hover:underline font-medium">
              BBL in Mexico guide
            </Link>{' '}give you alternatives to compare on price and travel time.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does plastic surgery cost in Brazil in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Typically 40-60% below US prices. As estimates: BBL $3,500-$6,000, liposuction $2,000-$6,000,
                tummy tuck $4,000-$6,500, breast augmentation around $4,500, mommy makeover $6,000-$12,000. All vary
                by surgeon and hospital — confirm a written quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does a BBL cost in Brazil vs the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Roughly $3,500-$6,000 in Brazil vs $8,000-$15,000 in the US (2026 estimates). The BBL is the
                highest-risk cosmetic procedure, so prioritize a board-certified surgeon using ultrasound-guided,
                subcutaneous-only fat injection over the lowest price.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is plastic surgery in Brazil safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Brazil has a deep, well-regulated plastic surgery tradition. Choosing an SBCP board-certified surgeon
                operating in an accredited hospital lowers risk substantially. Outcomes depend on the specific surgeon
                and facility, not the destination — verify credentials before booking.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in the price?</h3>
              <p className="text-sm text-gray-700 mb-0">
                It varies. International-focused clinics often quote all-inclusive packages (surgeon, anesthesia,
                facility, follow-ups); premier hospitals more often itemize. Flights, lodging, garments, and revisions
                are usually extra. Always get a written, itemized quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Does insurance cover it?</h3>
              <p className="text-sm text-gray-700 mb-0">
                No. Elective cosmetic surgery is cash-pay whether performed in the US or abroad. Reconstructive surgery
                may be covered domestically in specific medical circumstances; cosmetic medical tourism is paid out of
                pocket.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every price shown
              is an <strong>estimate that varies by surgeon, hospital, implant choice, and the number of areas
              treated</strong> and must be confirmed directly with the provider in a written quote.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the efficacy or safety of any procedure, clinic, or surgeon.
              All surgery carries risk; the Brazilian Butt Lift carries the highest complication rate in cosmetic
              surgery. Always consult a board-certified surgeon and your physician before pursuing any treatment.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/destinations/brazil" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Brazil Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Logistics, top cities &amp; what to consider</div>
              </Link>
              <Link href="/plastic_surgery" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery Providers</div>
                <div className="text-sm text-gray-600">SBCP-certified surgeons &amp; accredited clinics</div>
              </Link>
              <Link href="/guides/bbl-surgery-mexico" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">BBL Surgery in Mexico</div>
                <div className="text-sm text-gray-600">Cost, safety &amp; how it compares</div>
              </Link>
              <Link href="/guides/plastic-surgery-korea-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">South Korea Plastic Surgery</div>
                <div className="text-sm text-gray-600">An alternative destination, side by side</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.cirurgiaplastica.org.br/en/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Sociedade Brasileira de Cirurgia Plástica (SBCP) — find &amp; verify a surgeon</a></li>
              <li>• <a href="https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ASPS: Urgent warning on Brazilian Butt Lift risks</a></li>
              <li>• <a href="https://www.plasticsurgery.org/for-medical-professionals/publications/psn-extra/news/gluteal-fat-grafting-a-joint-safety-statement" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ASPS: Gluteal Fat Grafting joint safety statement</a></li>
              <li>• <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International (JCI) — accredited hospitals</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Brazil Plastic Surgery Cost &amp; Clinic Checklist"
            description="A normalized worksheet for comparing Brazil quotes — what's included, SBCP credentials to verify, and the total all-in cost beyond the surgical fee."
            source="guide_brazil_plastic_surgery_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
