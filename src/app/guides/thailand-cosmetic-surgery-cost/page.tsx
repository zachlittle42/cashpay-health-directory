import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'Cosmetic Surgery Thailand Cost (2026): Prices vs the US',
  description:
    'What cosmetic surgery actually costs in Thailand in 2026 — rhinoplasty, breast augmentation, facelift, liposuction, and tummy tuck — vs US prices, with 50-70% savings, what is included, and how to vet an accredited clinic. Estimates to confirm with each provider.',
};

export default function ThailandCosmeticSurgeryCostGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cosmetic Surgery Thailand Cost (2026): Full Price Comparison',
    headline: 'How Much Does Cosmetic Surgery Cost in Thailand in 2026?',
    description:
      'A grounded, procedure-by-procedure comparison of cosmetic surgery costs in Thailand (Bangkok and Phuket) versus the United States, what an all-inclusive package covers, why it is cheaper, and how to choose a JCI- or ISAPS-accredited clinic safely.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    mainEntityOfPage: 'https://vitalityscout.com/guides/thailand-cosmetic-surgery-cost',
    keywords: [
      'cosmetic surgery thailand cost',
      'plastic surgery thailand cost',
      'rhinoplasty thailand cost',
      'breast augmentation thailand cost',
      'facelift thailand cost',
      'cosmetic surgery bangkok price',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does cosmetic surgery cost in Thailand in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most cosmetic procedures in Thailand cost roughly 50-70% less than in the United States. As estimates: rhinoplasty commonly runs about $2,000-$6,500, breast augmentation about $3,500-$9,000, facelift about $4,500-$14,000, liposuction about $1,800-$4,000 per area, and a tummy tuck about $3,500-$10,600. Final pricing varies by clinic, surgeon, technique, and complexity, and should be confirmed directly with the provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is cosmetic surgery in Thailand safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thailand has internationally accredited hospitals and clinics — including JCI-accredited hospitals such as Bumrungrad, Samitivej, and Vejthani, and clinics with ISAPS-member or AACI-accredited surgeons. Safety depends heavily on choosing the right facility and a board-certified surgeon for your specific procedure, having a realistic candidacy assessment, and allowing enough recovery time before flying. No surgery is risk-free, and outcomes are never guaranteed; discuss risks with a qualified clinician.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save on plastic surgery in Thailand versus the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical savings are about 50-70% off comparable US prices, even after factoring in flights and lodging, because the Thailand quote often bundles surgeon, anesthesia, facility, and aftercare into one package. A breast augmentation that totals $7,000-$12,000 in the US may be quoted around $3,500-$9,000 in Thailand. Savings are estimates and depend on the procedure and clinic.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a Thailand cosmetic surgery package?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Thai clinics and hospitals quote an all-inclusive package covering the surgeon fee, anesthesia, operating-room and facility fees, implants or grafts where applicable, a hospital or recovery stay, post-operative garments or medication, and international patient coordination. Flights and hotel nights beyond what the package includes are usually separate. Always get an itemized written quote and confirm exactly what is and is not covered.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is cosmetic surgery so much cheaper in Thailand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lower labor, facility, and malpractice-insurance costs, plus high procedure volume and government support for medical tourism, let Thai providers charge far less than US clinics for comparable work. A lower price does not imply equal or better quality or outcomes, so vetting the clinic, surgeon credentials, and accreditation is essential.',
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
              <span className="text-gray-900">Cosmetic Surgery Thailand Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">💲</span>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cosmetic Surgery in Thailand: Cost vs the US (2026)
            </h1>
            <p className="text-xl text-gray-600">
              Procedure-by-procedure prices for Bangkok and Phuket — rhinoplasty, breast augmentation,
              facelift, liposuction, and tummy tuck — what an all-inclusive package covers, and how to
              choose an accredited clinic safely.
            </p>
            <p className="mt-4 text-sm text-gray-500">Last updated: June 2026 • 11 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

          {/* Direct answer (AEO) */}
          <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 mb-8 not-prose">
            <h2 className="text-lg font-bold text-teal-900 mt-0 mb-3">The short answer</h2>
            <p className="text-sm text-teal-900 mb-3">
              Most cosmetic procedures in <strong>Thailand</strong> cost roughly <strong>50-70% less</strong> than
              in the United States. As estimates: <strong>rhinoplasty</strong> runs about <strong>$2,000-$6,500</strong>,
              <strong> breast augmentation</strong> about <strong>$3,500-$9,000</strong>, <strong>facelift</strong> about
              <strong> $4,500-$14,000</strong>, <strong>liposuction</strong> about <strong>$1,800-$4,000 per area</strong>,
              and a <strong>tummy tuck</strong> about <strong>$3,500-$10,600</strong> — often as an all-inclusive package
              covering surgeon, anesthesia, facility, and aftercare.
            </p>
            <p className="text-sm text-teal-900 mb-0">
              Every figure here is an <strong>estimate that varies by clinic, surgeon, and technique</strong> and
              should be confirmed directly with the provider. Insurance does not cover elective cosmetic surgery.
            </p>
          </div>

          {/* Safety notice */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-8 not-prose">
            <h3 className="text-lg font-bold text-amber-900 mt-0 mb-3">Read this before you compare on price alone</h3>
            <p className="text-sm text-amber-800 mb-3">
              <strong>Price is one input, not a quality signal.</strong> Cosmetic surgery carries real risks
              including bleeding, infection, anesthesia complications, scarring, and the need for revision —
              and outcomes are never guaranteed. The single biggest safety lever is choosing an{' '}
              <strong>accredited facility</strong> and a <strong>board-certified surgeon</strong> for your specific
              procedure, not the cheapest quote.
            </p>
            <p className="text-sm text-amber-800 mb-0">
              This guide compares <em>prices</em>, not outcomes, and does not endorse or guarantee any clinic or
              result. Discuss candidacy and risks with a qualified clinician before booking.
            </p>
          </div>

          <h2>Why &quot;cost&quot; isn&apos;t a single number</h2>
          <p>
            There is no flat price for cosmetic surgery in Thailand. Two clinics in Bangkok can quote very
            different numbers for the same-sounding procedure, because what you are buying is not standardized.
            What you actually pay is driven by a handful of variables:
          </p>
          <ul>
            <li><strong>The specific procedure and technique</strong> — an endoscopic or VASER approach, the implant type, or a deep-plane facelift all move the price.</li>
            <li><strong>Surgeon and facility tier</strong> — a JCI-accredited international hospital prices above a standalone boutique clinic, which prices above a budget clinic.</li>
            <li><strong>What&apos;s bundled</strong> — surgeon fee, anesthesia, operating room, implants, hospital stay, garments, and aftercare may all be in one package, or quoted separately.</li>
            <li><strong>Complexity and your anatomy</strong> — revision cases, higher BMI, or combined procedures cost more than a standard primary case.</li>
            <li><strong>City</strong> — Bangkok concentrates the highest-volume hospitals; Phuket pairs surgery with a beach recovery, sometimes at a small premium for the setting.</li>
          </ul>
          <p>
            That is why every number on this page is a <strong>range framed as an estimate</strong> — a starting
            point for the quote you will collect, not a fixed fee.
          </p>

          <h2>Thailand vs US cosmetic surgery cost (2026 estimates)</h2>
          <p>
            Here is how common procedures compare. The US column reflects typical <em>total</em> cost (surgeon,
            anesthesia, and facility — not surgeon fee alone), and the Thailand column reflects ranges drawn from
            published Bangkok hospital and clinic price lists, converted at roughly 33 THB to the US dollar.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">Cost comparison: US vs Thailand (estimates)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2">Procedure</th>
                    <th className="text-left py-2">Typical US cost</th>
                    <th className="text-left py-2">Thailand estimate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Rhinoplasty (nose)</td>
                    <td className="py-2">$8,500-$15,000</td>
                    <td className="py-2">$2,000-$6,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Breast augmentation</td>
                    <td className="py-2">$7,000-$12,000</td>
                    <td className="py-2">$3,500-$9,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Facelift</td>
                    <td className="py-2">$11,000-$20,000</td>
                    <td className="py-2">$4,500-$14,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Liposuction (per area)</td>
                    <td className="py-2">$4,500-$9,000</td>
                    <td className="py-2">$1,800-$4,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Tummy tuck (abdominoplasty)</td>
                    <td className="py-2">$8,500-$15,000</td>
                    <td className="py-2">$3,500-$10,600</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Eyelid surgery (blepharoplasty)</td>
                    <td className="py-2">$4,500-$7,500</td>
                    <td className="py-2">$1,000-$2,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Mommy makeover (combined)</td>
                    <td className="py-2">$15,000-$30,000</td>
                    <td className="py-2">$7,000-$16,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 mb-0">
              Sources: published Thai hospital/clinic price lists (Yanhee, Rattinan, CosMediTour) and aggregated
              US procedure-cost data derived from American Society of Plastic Surgeons surgeon-fee statistics
              (total cost ≈ surgeon fee plus anesthesia and facility). Estimates only — confirm with each clinic.
            </p>
          </div>

          <h2>What&apos;s included in a Thailand package</h2>
          <p>
            One reason the math works even after airfare is that many Thai hospitals and clinics quote an{' '}
            <strong>all-inclusive package</strong> rather than itemizing every line the way US providers do. A
            typical package commonly covers:
          </p>
          <ul>
            <li><strong>Surgeon fee</strong> and the surgical team</li>
            <li><strong>Anesthesia</strong> and the anesthesiologist</li>
            <li><strong>Operating-room and facility fees</strong></li>
            <li><strong>Implants, grafts, or devices</strong> where the procedure requires them</li>
            <li><strong>A hospital or recovery stay</strong> (often one or more nights for body procedures)</li>
            <li><strong>Post-operative garments, medication, and follow-up visits</strong></li>
            <li><strong>International patient coordination</strong> and interpreter support</li>
          </ul>
          <p>
            What is usually <em>not</em> included: international flights, hotel nights beyond the package, meals,
            and any revision surgery. Always insist on an <strong>itemized written quote</strong> and confirm,
            in writing, exactly what happens — and who pays — if a complication or revision arises.
          </p>

          <h2>Why it&apos;s cheaper than the US</h2>
          <p>
            The discount is structural, not a quality cut. Thailand&apos;s lower labor, real-estate, and
            malpractice-insurance costs, combined with very high procedure volume at established international
            hospitals and active government support for medical tourism, let providers charge a fraction of US
            prices for comparable work. Surgeons at the top hospitals are often board-certified and, in some
            cases, fellowship-trained abroad.
          </p>
          <p>
            That said, a lower price does <strong>not</strong> imply equal or better quality, and Thailand has a
            wide range of providers — from JCI-accredited tertiary hospitals to budget clinics. The savings are
            real, but they are only worth it if you spend the difference on diligence, not skip it.
          </p>

          <h2>How to choose a clinic safely</h2>
          <p>
            Accreditation is the most useful filter when you cannot evaluate a surgeon in person. Look for these
            signals, in roughly this order:
          </p>
          <ol>
            <li><strong>Facility accreditation</strong> — <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">JCI (Joint Commission International)</a> for hospitals; AACI (American Accreditation Commission International) for accredited ambulatory clinics; and Thailand&apos;s own HA (Healthcare Accreditation Institute) standard. JCI-accredited Thai hospitals include Bumrungrad, Samitivej, and Vejthani.</li>
            <li><strong>Surgeon credentials</strong> — board certification by the Medical Council of Thailand, and membership in the <a href="https://www.isaps.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">International Society of Aesthetic Plastic Surgery (ISAPS)</a>. ISAPS membership is a meaningful signal for cosmetic-specific training.</li>
            <li><strong>Procedure fit</strong> — confirm the surgeon performs <em>your</em> procedure routinely, not just the clinic&apos;s headline service.</li>
            <li><strong>Real reviews and before/after work</strong> — across independent platforms, not only the clinic&apos;s own site.</li>
            <li><strong>An honest consultation</strong> — a credible surgeon discusses risks and realistic outcomes, and is wary of guaranteeing a result. Be cautious of any clinic that quotes a price and a guaranteed outcome in the same breath.</li>
          </ol>
          <p>
            You can compare verified, accredited clinics on our{' '}
            <Link href="/plastic_surgery" className="text-blue-600 hover:underline font-medium">
              plastic surgery directory
            </Link>{' '}and see the full Thailand landscape, including dental and fertility, on our{' '}
            <Link href="/destinations/thailand" className="text-blue-600 hover:underline font-medium">
              Thailand destination guide
            </Link>.
          </p>

          <h2>Travel and recovery: budget for the whole trip</h2>
          <p>
            The quoted surgery price is not the total you will spend. For a realistic all-in budget, add:
          </p>
          <ul>
            <li><strong>Flights:</strong> round-trip from the US to Bangkok typically runs longer (17+ hours) and several hundred to over a thousand dollars depending on season and origin.</li>
            <li><strong>Lodging:</strong> plan for the recovery window, not just the surgery day — facial procedures generally need about 1-2 weeks before flying, body contouring 2-3 weeks.</li>
            <li><strong>Local transport and meals</strong> during recovery (many clinics include airport pickup).</li>
            <li><strong>A Phuket add-on:</strong> reaching Phuket usually means a domestic flight or longer transfer, traded for a calmer beach recovery.</li>
            <li><strong>A buffer for the unexpected</strong> — extra nights, follow-up labs, or a longer stay if your surgeon advises it.</li>
          </ul>
          <p>
            Do not book a flight home tighter than your surgeon&apos;s minimum recovery window. Flying too soon
            after surgery raises real risks, including blood clots after longer body procedures.
          </p>

          <h2>How to pay: financing and cash-pay options</h2>
          <p>
            Cosmetic surgery is elective, so <strong>health insurance does not cover it</strong> — in the US or
            in Thailand. You will pay out of pocket. Common approaches:
          </p>
          <ul>
            <li><strong>Direct payment</strong> to the clinic — most Thai hospitals and clinics accept major credit cards and bank transfers; confirm currency, card fees, and deposit terms in advance.</li>
            <li><strong>US-based medical financing</strong> — a personal loan or a health/cosmetic financing product taken before you travel; compare the total interest cost against the savings.</li>
            <li><strong>HSA/FSA</strong> — generally <em>not</em> eligible for purely cosmetic procedures; eligibility is narrow and case-by-case, so check with your plan administrator before assuming it applies.</li>
          </ul>
          <p>
            Whatever the method, get the full package price in writing first, and keep a documented buffer for a
            possible revision or extended stay rather than committing every dollar to the base quote.
          </p>

          <p>
            For a broader view of procedures, hospitals, and trip planning beyond cost, see our{' '}
            <Link href="/guides/thailand-medical-tourism-guide" className="text-blue-600 hover:underline font-medium">
              Thailand medical tourism guide
            </Link>. If you are weighing destinations, our{' '}
            <Link href="/guides/plastic-surgery-korea-guide" className="text-blue-600 hover:underline font-medium">
              plastic surgery in South Korea guide
            </Link>{' '}covers the other major Asian cosmetic hub.
          </p>

          {/* FAQ */}
          <h2>Frequently asked questions</h2>
          <div className="space-y-4 not-prose my-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much does cosmetic surgery cost in Thailand in 2026?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Roughly 50-70% less than the US. As estimates: rhinoplasty ~$2,000-$6,500, breast augmentation
                ~$3,500-$9,000, facelift ~$4,500-$14,000, liposuction ~$1,800-$4,000/area, tummy tuck
                ~$3,500-$10,600. Final pricing varies by clinic, surgeon, and technique — confirm with each provider.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Is cosmetic surgery in Thailand safe?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Thailand has JCI-accredited hospitals (e.g. Bumrungrad, Samitivej, Vejthani) and clinics with
                ISAPS-member or AACI-accredited surgeons. Safety depends on choosing the right accredited facility
                and a board-certified surgeon, a realistic candidacy assessment, and enough recovery time. No
                surgery is risk-free and outcomes are never guaranteed.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">How much can I save versus the US?</h3>
              <p className="text-sm text-gray-700 mb-0">
                About 50-70% off comparable US prices, even after flights and lodging, because the Thai quote
                often bundles surgeon, anesthesia, facility, and aftercare. A breast augmentation totaling
                $7,000-$12,000 in the US may be quoted ~$3,500-$9,000 in Thailand. Savings are estimates.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">What&apos;s included in a Thailand package?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Commonly the surgeon fee, anesthesia, operating room and facility, implants/grafts, a recovery
                stay, garments/medication, and international coordination. Flights and extra hotel nights are
                usually separate. Always get an itemized written quote and confirm what is — and is not — covered.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mt-0 mb-2">Why is it so much cheaper in Thailand?</h3>
              <p className="text-sm text-gray-700 mb-0">
                Lower labor, facility, and malpractice costs, plus high volume and government support for medical
                tourism. A lower price does not imply equal or better quality or outcomes, so vetting the clinic,
                surgeon credentials, and accreditation is essential.
              </p>
            </div>
          </div>

          {/* Final Disclaimer */}
          <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h4 className="text-gray-900 font-bold mb-3">Medical &amp; Pricing Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              This guide is for <strong>educational purposes only</strong> and is not medical advice. Every
              price shown is an <strong>estimate that varies by clinic, surgeon, and technique</strong> and must
              be confirmed directly with the provider. Cosmetic surgery is elective and is{' '}
              <strong>not covered by insurance</strong>.
            </p>
            <p className="text-sm text-gray-700 mb-0">
              We do not endorse, recommend, or guarantee the safety, efficacy, or outcome of any treatment,
              clinic, or surgeon. All surgery carries risk. Always consult a qualified physician before pursuing
              any procedure.
            </p>
          </div>

          {/* Related */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/plastic_surgery" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery Directory</div>
                <div className="text-sm text-gray-600">Compare verified, accredited cosmetic clinics</div>
              </Link>
              <Link href="/destinations/thailand" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Thailand Destination Guide</div>
                <div className="text-sm text-gray-600">Hospitals, procedures &amp; trip logistics</div>
              </Link>
              <Link href="/guides/thailand-medical-tourism-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">The full picture beyond cost</div>
              </Link>
              <Link href="/guides/plastic-surgery-korea-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-teal-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Plastic Surgery in South Korea</div>
                <div className="text-sm text-gray-600">The other major Asian cosmetic hub</div>
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.plasticsurgery.org/Documents/News/Statistics/2023/cosmetic-procedures-average-cost-2023.pdf" target="_blank" rel="noopener" className="text-blue-600 hover:underline">American Society of Plastic Surgeons — Average Surgeon Fees</a></li>
              <li>• <a href="https://www.jointcommissioninternational.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Joint Commission International (JCI) — accredited facilities</a></li>
              <li>• <a href="https://www.isaps.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">International Society of Aesthetic Plastic Surgery (ISAPS)</a></li>
              <li>• <a href="https://www.yanhee.net/pricing-packages/plastic-surgery-prices/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Yanhee Hospital — published plastic surgery price list</a></li>
              <li>• <a href="https://www.rattinan.com/en/plastic-surgery-thailand-pricelist/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Rattinan Medical Center — published price list</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Thailand Cosmetic Surgery Cost Worksheet"
            description="A normalized checklist for comparing quotes across Bangkok and Phuket clinics — what's included, accreditation, surgeon credentials, and total all-in cost."
            source="guide_thailand_cosmetic_surgery_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
