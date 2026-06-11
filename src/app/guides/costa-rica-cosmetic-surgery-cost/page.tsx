import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'Costa Rica Cosmetic Surgery Cost (2026): Prices vs the US',
  description:
    'What plastic surgery actually costs in Costa Rica in 2026 — breast augmentation, tummy tuck, liposuction, mommy makeover, facelift, BBL — vs US prices, with 40-65% typical savings. Estimates to verify with each clinic.',
};

export default function CostaRicaCosmeticSurgeryCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Costa Rica Cosmetic Surgery Cost (2026): Full Price Comparison',
    headline: 'How Much Does Cosmetic Surgery Cost in Costa Rica?',
    description:
      'A grounded, procedure-by-procedure comparison of cosmetic and plastic surgery costs in Costa Rica versus the United States — what is included, why it is cheaper, how to vet a clinic, and what drives the price.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/costa-rica-cosmetic-surgery-cost',
    keywords: [
      'costa rica plastic surgery cost',
      'costa rica cosmetic surgery cost',
      'breast augmentation costa rica cost',
      'tummy tuck costa rica cost',
      'mommy makeover costa rica price',
      'plastic surgery costa rica vs us',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does cosmetic surgery cost in Costa Rica in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Costa Rica, common cosmetic procedures generally run: breast augmentation $3,500-$5,500; tummy tuck $4,000-$6,500; liposuction $2,500-$4,500 per area; mommy makeover $7,000-$11,000; facelift $4,500-$7,500; rhinoplasty $3,500-$5,500; and BBL $4,500-$7,500. That is roughly 40-65% below typical all-in US prices for the same procedures. All figures are estimates that vary by surgeon, scope, and facility and should be confirmed with a written quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is plastic surgery in Costa Rica safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costa Rica has a long-established surgical-tourism sector with several JCI- and AAAASF-accredited facilities and surgeons certified by the national board (ACCPRE), some of whom also hold ISAPS, ASPS, or ASAPS memberships. Safety depends heavily on choosing a board-certified surgeon operating in an accredited facility, not on the country alone. As with any surgery there are real risks, and lower price never implies a guaranteed or better outcome. Verify credentials and the operating facility before booking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save versus the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most patients save roughly 40-65% on the procedure versus a comparable all-in US price, and savings on some procedures can be higher. After flights, lodging, and recovery support (typically $1,500-$3,500 extra), a tummy tuck quoted at $5,000 in Costa Rica still compares favorably to $8,000-$15,000 in the US. Savings narrow for smaller procedures once travel is added, so run the full all-in math.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Costa Rica plastic surgery price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quotes commonly include the surgeon fee, anesthesiologist fee, pre-op labs and consultation, the facility/hospital fee, routine surgical supplies, compression garments, and post-op follow-up visits. Flights, lodging, ground transport, and recovery-house support are usually separate (budget roughly $1,500-$3,500). Always confirm exactly what the quote covers in writing before you commit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is cosmetic surgery cheaper in Costa Rica than the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lower labor, facility, and malpractice-insurance costs, plus the absence of US-style overhead, let Costa Rican surgeons charge less for comparable work. It is not a quality discount: many surgeons train internationally and operate in accredited hospitals. A lower price does not imply equal or better outcomes, so vetting the surgeon and facility still matters.',
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
              <span className="text-gray-900">Costa Rica Cosmetic Surgery Cost</span>
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
              Costa Rica Cosmetic Surgery Cost in 2026: What You&apos;ll Actually Pay
            </h1>
            <p className="text-xl text-gray-600">
              Procedure-by-procedure prices for plastic surgery in San José and Escazú versus the US —
              breast augmentation, tummy tuck, liposuction, mommy makeover, facelift and BBL — plus what&apos;s
              included, why it&apos;s cheaper, and how to vet a clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-emerald-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-emerald-900 mb-3">
              In <strong>Costa Rica</strong>, common cosmetic procedures generally run:
              <strong> breast augmentation $3,500-$5,500</strong>, <strong>tummy tuck $4,000-$6,500</strong>,
              <strong> liposuction $2,500-$4,500</strong> per area, <strong>mommy makeover $7,000-$11,000</strong>,
              <strong> facelift $4,500-$7,500</strong>, and <strong>BBL $4,500-$7,500</strong> — roughly
              <strong> 40-65% below</strong> typical all-in US prices for the same work.
            </p>
            <p className="text-sm text-emerald-900 mb-0">
              Every figure here is an <strong>estimate that varies by surgeon, scope, and facility</strong> and
              should be confirmed with a written quote. Insurance does not cover elective cosmetic surgery.
            </p>
          </div>

          <h2>Why Costa Rica became a cosmetic-surgery destination</h2>
          <p>
            Costa Rica has one of the longest track records in Latin American surgical tourism. San José and the
            upscale suburb of Escazú concentrate most of the country&apos;s cosmetic surgeons, several of whom
            operate out of <strong>JCI-accredited private hospitals</strong> such as Hospital CIMA, and many of
            whom hold international memberships (ISAPS, ASPS, ASAPS) on top of certification by the national board,
            the Costa Rican Association of Plastic, Reconstructive and Aesthetic Surgery (<strong>ACCPRE</strong>).
            Add a short flight from the US, English-speaking clinics geared to North American patients, and prices
            well below the US, and the appeal is straightforward.
          </p>
          <p>
            Dental work is the other big draw, but it&apos;s a different decision tree — we cover it separately in
            our{' '}
            <Link href="/guides/costa-rica-dental-guide" className="text-blue-600 hover:underline font-medium">
              Costa Rica dental guide
            </Link>. This page is about cosmetic and plastic surgery: breast, body, and facial procedures.
          </p>

          <h2>Costa Rica vs US cosmetic surgery cost (2026)</h2>
          <p>
            Here is how the most-requested procedures compare. The US column reflects typical <em>all-in</em> pricing
            (surgeon, anesthesia, and facility fees combined), which runs well above the bare surgeon fee that
            societies like ASPS publish. The Costa Rica column reflects clinic and facilitator quotes aggregated
            across multiple sources. Treat both as ranges to verify, not fixed prices.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">Procedure cost comparison (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US cost</th>
                    <th className="text-left py-2">Costa Rica cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast augmentation</td>
                    <td className="py-2">$8,000-$12,000+</td>
                    <td className="py-2">$3,500-$5,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast lift</td>
                    <td className="py-2">$9,000-$13,000</td>
                    <td className="py-2">$4,500-$6,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Tummy tuck (abdominoplasty)</td>
                    <td className="py-2">$8,000-$15,000</td>
                    <td className="py-2">$4,000-$6,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Liposuction (per area)</td>
                    <td className="py-2">$5,000-$9,000</td>
                    <td className="py-2">$2,500-$4,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Mommy makeover (combined)</td>
                    <td className="py-2">$15,000-$25,000</td>
                    <td className="py-2">$7,000-$11,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Facelift</td>
                    <td className="py-2">$12,000-$25,000+</td>
                    <td className="py-2">$4,500-$7,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Rhinoplasty</td>
                    <td className="py-2">$8,000-$15,000</td>
                    <td className="py-2">$3,500-$5,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Brazilian butt lift (BBL)</td>
                    <td className="py-2">$8,000-$15,000</td>
                    <td className="py-2">$4,500-$7,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Sources: aggregated Costa Rican clinic and medical-travel facilitator quotes (2026); US ranges reflect
              typical all-in pricing above published ASPS/Aesthetic Society surgeon fees. Estimates only — confirm
              each figure with a written quote from a specific surgeon.
            </p>
          </div>

          <h2>What&apos;s included in the price</h2>
          <p>
            One reason Costa Rica quotes look so much lower is that they are often <strong>bundled</strong>. A
            typical package quote includes:
          </p>
          <ul>
            <li><strong>Surgeon&apos;s fee</strong> and the <strong>anesthesiologist&apos;s fee</strong></li>
            <li><strong>Pre-op consultation and lab work</strong> (and, for some clinics, imaging)</li>
            <li><strong>Facility / hospital fee</strong> for the operating room and recovery</li>
            <li><strong>Routine surgical supplies and compression garments</strong></li>
            <li><strong>Post-op follow-up visits</strong> during your stay</li>
          </ul>
          <p>
            What is usually <em>not</em> included: flights, lodging, ground transport, and recovery-house support.
            Budget roughly <strong>$1,500-$3,500 extra</strong> for the trip on top of the procedure quote. Some
            clinics and facilitators offer all-inclusive packages that fold lodging and a private nurse or recovery
            retreat into one number — ask for an itemized breakdown so you can compare like with like.
          </p>

          <h2>Why it&apos;s cheaper than the US</h2>
          <p>
            The discount is structural, not a quality cut. Surgeons in Costa Rica carry far lower overhead than
            their US counterparts: lower labor and facility costs, dramatically lower malpractice-insurance premiums,
            and no US-style administrative and billing burden. Many of the same implant brands and equipment are
            used. A lower price <strong>does not imply an equal or better outcome</strong> — it reflects a different
            cost base. The quality question is answered by the surgeon and facility you choose, which is where your
            diligence should go.
          </p>

          <h2>How to choose a clinic safely</h2>
          <p>
            Cosmetic surgery is real surgery with real risk. The single most important thing you control is
            <strong> who operates on you and where</strong>. Before you book, verify:
          </p>
          <ol>
            <li>
              <strong>Surgeon board certification.</strong> Confirm the surgeon is certified by Costa Rica&apos;s
              national board (<strong>ACCPRE</strong>) and, ideally, holds international memberships such as
              <strong> ISAPS</strong>, <strong>ASPS</strong>, or <strong>ASAPS</strong>. Ask for their training and
              annual volume in your specific procedure.
            </li>
            <li>
              <strong>Accredited operating facility.</strong> The procedure should be performed in a
              <strong> JCI-accredited hospital</strong> (e.g., Hospital CIMA) or an
              <strong> AAAASF-accredited ambulatory surgical facility</strong> — not an unaccredited office. Get the
              facility named in writing.
            </li>
            <li>
              <strong>Anesthesia by a physician anesthesiologist</strong>, with clear emergency protocols and a plan
              for managing complications.
            </li>
            <li>
              <strong>Realistic expectations.</strong> Be wary of any clinic quoting a price <em>and</em> a guaranteed
              result, or pushing the cheapest option. The cheapest quote is rarely the right filter.
            </li>
            <li>
              <strong>A written, itemized quote</strong> showing exactly what is and isn&apos;t included before you
              pay a deposit.
            </li>
          </ol>
          <p>
            You can compare verified, accredited cosmetic surgeons in Costa Rica — including their credentials and
            what each is best for — on our{' '}
            <Link href="/plastic_surgery" className="text-blue-600 hover:underline font-medium">
              plastic surgery directory
            </Link>{' '}and on the{' '}
            <Link href="/destinations/costa-rica" className="text-blue-600 hover:underline font-medium">
              Costa Rica destination page
            </Link>.
          </p>

          <h2>Travel and recovery</h2>
          <p>
            Costa Rica is a 3-5 hour flight from most US hubs, and the international airport (SJO) is about 20 minutes
            from the Escazú clinics. Plan your stay around recovery, not the surgery date:
          </p>
          <ul>
            <li><strong>Smaller / facial procedures</strong> (eyelid surgery, smaller lipo): often <strong>5-7 days</strong> before clearance to fly</li>
            <li><strong>Breast and most body work:</strong> typically <strong>7-10 days</strong></li>
            <li><strong>Tummy tuck, mommy makeover, BBL and combination cases:</strong> the longer end, <strong>10-14 days</strong>, with post-op checks before travel</li>
          </ul>
          <p>
            Do not fly home earlier than your surgeon clears you — early travel raises the risk of blood clots and
            complications. Many clinics partner with recovery houses or hotels that handle nursing, meals, and
            transport, which is worth budgeting for body procedures.
          </p>

          <h2>Financing and payment</h2>
          <p>
            Elective cosmetic surgery is <strong>not covered by US health insurance</strong>, in Costa Rica or at
            home, so plan to pay out of pocket. Common approaches include:
          </p>
          <ul>
            <li><strong>Cash / card / wire</strong> directly to the clinic — confirm deposit and balance terms in writing</li>
            <li><strong>Medical financing</strong> (e.g., third-party patient-financing lenders) — compare the APR against simply saving, since interest can erase the travel savings</li>
            <li><strong>HSA/FSA</strong> — generally <em>not</em> eligible for purely cosmetic procedures; reconstructive or medically necessary cases are case-by-case, so ask your plan administrator</li>
          </ul>
          <p>
            Whatever you use, get the total in writing — procedure plus the $1,500-$3,500 trip budget — before you
            commit, and keep a contingency in case a revision or longer stay is needed.
          </p>

          <h2>What drives the price within Costa Rica</h2>
          <p>
            Two patients can get very different quotes for the &quot;same&quot; procedure. The biggest drivers:
          </p>
          <ul>
            <li><strong>Scope and combination</strong> — a single procedure vs a combined mommy makeover or 360 lipo</li>
            <li><strong>Surgeon experience and demand</strong> — a high-volume, internationally credentialed surgeon prices above a newer one</li>
            <li><strong>Facility</strong> — a JCI hospital costs more than a smaller accredited surgical suite</li>
            <li><strong>Implants and materials</strong> — implant brand and type move breast-procedure pricing</li>
            <li><strong>Revision vs primary</strong> — revision and reconstructive cases are more complex and cost more</li>
          </ul>

          <p>
            Considering other destinations too? Our{' '}
            <Link href="/guides/plastic-surgery-korea-guide" className="text-blue-600 hover:underline font-medium">
              South Korea plastic surgery guide
            </Link>{' '}covers the facial-surgery capital, and the{' '}
            <Link href="/medical-tourism" className="text-blue-600 hover:underline font-medium">
              medical tourism hub
            </Link>{' '}compares destinations side by side. For the dental side of Costa Rica, see the{' '}
            <Link href="/guides/costa-rica-dental-guide" className="text-blue-600 hover:underline font-medium">
              Costa Rica dental guide
            </Link>.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does cosmetic surgery cost in Costa Rica in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Breast augmentation $3,500-$5,500; tummy tuck $4,000-$6,500; liposuction $2,500-$4,500 per area;
                mommy makeover $7,000-$11,000; facelift $4,500-$7,500; rhinoplasty $3,500-$5,500; BBL $4,500-$7,500.
                That&apos;s roughly 40-65% below typical all-in US prices. All estimates — confirm with a written quote.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is plastic surgery in Costa Rica safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Costa Rica has JCI- and AAAASF-accredited facilities and ACCPRE-certified surgeons, many with ISAPS,
                ASPS, or ASAPS memberships. Safety depends on choosing a board-certified surgeon in an accredited
                facility, not on the country alone. Surgery carries real risk, and a lower price never implies a
                better outcome — verify credentials and the operating facility first.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much can I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Most patients save roughly 40-65% on the procedure. After flights, lodging, and recovery
                (typically $1,500-$3,500 more), a $5,000 Costa Rica tummy tuck still compares favorably to
                $8,000-$15,000 in the US. Savings narrow for smaller procedures once travel is added — run the
                full all-in math.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in a Costa Rica plastic surgery price?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Usually the surgeon and anesthesiologist fees, pre-op labs and consultation, facility/hospital fee,
                routine supplies and garments, and post-op follow-up. Flights, lodging, transport, and recovery
                support are typically separate. Confirm exactly what the quote covers in writing.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Why is it cheaper than the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Lower labor, facility, and malpractice-insurance costs and less administrative overhead — not a
                quality discount. Many surgeons train internationally and operate in accredited hospitals. A lower
                price does not imply an equal or better outcome, so vet the surgeon and facility.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every price
              shown is an <strong>estimate that varies by surgeon, scope, and facility</strong> and must be confirmed
              directly with the provider in a written quote. Cosmetic surgery is a medical procedure with real risks;
              discuss candidacy, alternatives, and complications with a qualified surgeon.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the efficacy or safety of any treatment, clinic, or surgeon.
              Always consult a licensed physician before pursuing any procedure.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/destinations/costa-rica" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Costa Rica Destination Guide</div>
                <div className="text-sm text-gray-600">Clinics, hospitals, travel &amp; safety overview</div>
              </Link>
              <Link href="/plastic_surgery" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery Directory</div>
                <div className="text-sm text-gray-600">Compare accredited cosmetic surgeons by procedure</div>
              </Link>
              <Link href="/guides/costa-rica-dental-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Costa Rica Dental Guide</div>
                <div className="text-sm text-gray-600">Implants, crowns &amp; full-mouth restoration costs</div>
              </Link>
              <Link href="/guides/plastic-surgery-korea-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">South Korea Plastic Surgery</div>
                <div className="text-sm text-gray-600">The facial-surgery capital, cost &amp; clinics</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.plasticsurgery.org/documents/news/statistics/2024/cosmetic-procedures-average-cost-2024.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ASPS 2024 Cosmetic Procedures Average Surgeon Fees</a></li>
              <li>• <a href="https://www.theaestheticsociety.org/patient-resources/cost/average-plastic-surgery-costs" target="_blank" rel="noopener" className="text-blue-600 hover:underline">The Aesthetic Society: Average Plastic Surgery Costs</a></li>
              <li>• <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International (JCI) Accreditation</a></li>
              <li>• <a href="https://www.aaaasf.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">AAAASF Surgical Facility Accreditation</a></li>
              <li>• <a href="https://www.isaps.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">International Society of Aesthetic Plastic Surgery (ISAPS)</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Costa Rica Cosmetic Surgery Quote Worksheet"
            description="A normalized checklist for comparing surgeon quotes — board certification, accredited facility, what's included, and total all-in cost."
            source="guide_costa_rica_cosmetic_surgery_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
