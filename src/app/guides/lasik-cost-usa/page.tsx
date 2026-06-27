import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'LASIK Cost Without Insurance in the US (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/lasik-cost-usa' },
  description:
    'LASIK cost without insurance in the US: per-eye prices, LASIK vs PRK vs SMILE vs ICL, financing & HSA/FSA, and how to vet a surgeon before you book.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does LASIK cost without insurance in the US?',
    answer:
      'The American Refractive Surgery Council puts the US national average at about $2,250 per eye, or roughly $4,492 for both eyes. Real-world pricing typically runs $1,500-$3,000 per eye, with advanced "custom" or bladeless platforms at the higher end and headline "$99-$299 per eye" ads usually reserved for the simplest prescriptions. LASIK is elective, so vision plans rarely cover it — cash-pay is the relevant number. These are estimates that vary by surgeon, technology, and prescription; get a written all-inclusive quote before you book.',
  },
  {
    question: 'Why is LASIK so expensive and what does the price include?',
    answer:
      'A surgeon-clinic flat fee usually bundles the pre-op exam and diagnostics, the laser procedure on an FDA-approved platform, post-op medications, and follow-up visits — and many practices add a "lifetime assurance" or enhancement program. The cost reflects per-eye laser-equipment licensing fees, the surgeon, and that care package, not just the few minutes of laser time. A low headline price can climb once you add advanced technology or a follow-up plan, so compare the all-in total, not the teaser rate. Always confirm exactly what each quote covers with the clinic.',
  },
  {
    question: 'What is the difference between LASIK, PRK, SMILE, and ICL?',
    answer:
      'LASIK creates a thin corneal flap, reshapes the cornea with a laser, then replaces the flap — fast recovery, usually back to work the next day. PRK skips the flap by removing the outer corneal layer (which regrows over about a month), so it is often preferred for thin corneas or contact-sport and military careers. SMILE is a flapless all-laser lenticule procedure (ZEISS VisuMax) for nearsightedness and astigmatism. ICL (EVO Visian) implants a removable lens inside the eye instead of reshaping it — an option for high prescriptions, thin corneas, or chronic dry eye. Candidacy is a clinical call for your eye surgeon.',
  },
  {
    question: 'Can I use HSA or FSA money or financing to pay for LASIK?',
    answer:
      'Yes. The Refractive Surgery Council notes laser vision correction is a qualified medical expense for FSAs and HSAs, so you can pay with pre-tax dollars — effectively discounting it by your tax rate. Most practices also offer financing, often with low- or 0%-interest monthly plans (LasikPlus and The LASIK Vision Institute both advertise guaranteed financing). Confirm HSA/FSA eligibility with your plan administrator and read the financing APR and term before signing.',
  },
  {
    question: 'How do I choose a good LASIK surgeon?',
    answer:
      'Use a board-certified ophthalmologist (American Board of Medical Specialties) — an uncertified surgeon is a red flag. Ask how many procedures they have performed on the specific FDA-approved laser they will use, and ask to see their outcome and enhancement-rate data. Confirm the platform is on the FDA list of approved lasers, that a thorough pre-op exam measures your corneal thickness and prescription stability, and that follow-up care and any enhancement policy are in writing. Get consultations at more than one practice before deciding.',
  },
  {
    question: 'Does insurance ever cover LASIK in the US?',
    answer:
      'LASIK is considered elective, so most US medical and vision plans do not cover it outright. Some vision plans (and employer benefits) offer a discount through a partner network or let you apply HSA/FSA funds, which lowers the effective cost. The Refractive Surgery Council advises checking with your insurance carrier or benefits manager for any laser-vision-correction benefit. Treat cash-pay pricing as the baseline and confirm any discount with both your insurer and the clinic.',
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

export default function LasikCostUsa() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'LASIK Cost Without Insurance in the US (2026): Per-Eye Prices & How to Choose',
    description:
      'A practical US cost guide to LASIK eye surgery without insurance — the national per-eye average, what a flat fee includes, how LASIK compares to PRK, SMILE, and ICL, financing and HSA/FSA options, and how to vet a refractive surgeon.',
    url: 'https://vitalityscout.com/guides/lasik-cost-usa',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/lasik-cost-usa#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'LASIK laser refractive eye surgery (laser-assisted in situ keratomileusis)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'How Much Does LASIK Cost? — US national average & financing (American Refractive Surgery Council)', url: 'https://americanrefractivesurgerycouncil.org/cost-of-lasik/' },
      { '@type': 'CreativeWork', name: 'LASIK Eye Surgery Cost in 2026 — averages by procedure (Vision Center)', url: 'https://www.visioncenter.org/lasik/cost/' },
      { '@type': 'CreativeWork', name: 'PRK vs. LASIK: Cost, Differences, Pros and Cons (All About Vision)', url: 'https://www.allaboutvision.com/treatments-and-surgery/vision-surgery/lasik/prk-vs-lasik/' },
      { '@type': 'CreativeWork', name: 'EVO ICL vs. LASIK: Facts, Costs & Benefits (NVISION Eye Centers)', url: 'https://www.nvisioncenters.com/laser-surgery/lasik-vs-icl/' },
      { '@type': 'CreativeWork', name: 'How Much Is LASIK Eye Surgery? LASIK Cost in 2026 (LasikPlus)', url: 'https://www.lasikplus.com/cost-of-lasik/' },
      { '@type': 'CreativeWork', name: 'Are You A LASIK Candidate? Candidate Guidelines (American Refractive Surgery Council)', url: 'https://americanrefractivesurgerycouncil.org/general-lasik-candidate-guidelines/' },
      { '@type': 'CreativeWork', name: 'List of FDA-Approved Lasers for LASIK (U.S. Food & Drug Administration)', url: 'https://www.fda.gov/medical-devices/lasik/list-fda-approved-lasers-lasik' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/lasik-cost-usa#faq', url: 'https://vitalityscout.com/guides/lasik-cost-usa' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
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
            <span className="text-gray-900">LASIK Cost USA</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/local-clinics" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Local Cash-Pay Clinics Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">👁️</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LASIK Cost Without Insurance in the US: The 2026 Price Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What LASIK actually costs when you pay cash in the US — the per-eye average, what a flat
            fee includes, how LASIK stacks up against PRK, SMILE, and ICL, the financing and HSA/FSA
            angles, and how to vet a refractive surgeon before you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              In the US, LASIK without insurance averages about <strong>$2,250 per eye</strong>
              {' '}(roughly <strong>$4,492 for both eyes</strong>) per the American Refractive Surgery
              Council, with real pricing usually <strong>$1,500-$3,000 per eye</strong>. PRK runs a
              few hundred less; SMILE often costs <strong>$500-$1,000 more</strong> per eye; ICL is
              higher still at roughly <strong>$3,500-$5,000 per eye</strong>. LASIK is elective, so
              insurance rarely covers it — but HSA/FSA funds and 0%-interest financing apply. Prices
              are estimates to verify with the clinic. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 12 min read</p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 py-12">
        {/* Quick Snapshot */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Snapshot: US Cash-Pay Pricing</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-cyan-700 mb-2">The averages</div>
              <ul className="space-y-1 text-gray-700">
                <li>• National average: ~$2,250 per eye (estimate)</li>
                <li>• Both eyes: ~$4,492 (estimate)</li>
                <li>• Typical real range: $1,500-$3,000 per eye</li>
                <li>• Custom / bladeless: high end of the range</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-blue-700 mb-2">The fine print</div>
              <ul className="space-y-1 text-gray-700">
                <li>• &quot;$99-$299/eye&quot; ads = simplest scripts only</li>
                <li>• Insurance rarely covers (it is elective)</li>
                <li>• HSA/FSA eligible (pre-tax dollars)</li>
                <li>• 0%-interest financing widely offered</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#average" className="text-blue-600 hover:underline">1. What LASIK costs per eye in the US</a></li>
            <li><a href="#included" className="text-blue-600 hover:underline">2. What the flat fee actually includes</a></li>
            <li><a href="#types" className="text-blue-600 hover:underline">3. LASIK vs PRK vs SMILE vs ICL</a></li>
            <li><a href="#providers" className="text-blue-600 hover:underline">4. What named US chains charge</a></li>
            <li><a href="#financing" className="text-blue-600 hover:underline">5. Financing, HSA/FSA &amp; insurance</a></li>
            <li><a href="#vet" className="text-blue-600 hover:underline">6. How to vet a LASIK surgeon</a></li>
            <li><a href="#candidacy" className="text-blue-600 hover:underline">7. Candidacy &amp; risks to know</a></li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-8">
            LASIK is one of the most-performed elective procedures in the US, and because almost
            nobody&apos;s insurance pays for it, the price you see is the price you pay. The trick is
            knowing what a fair all-in number looks like, what the teaser ads leave out, and which
            procedure fits your eyes — because LASIK is not your only option. Here is the honest,
            US-specific breakdown.
          </p>

          <h2 id="average" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What LASIK Costs Per Eye in the US</h2>

          <p className="text-gray-700 mb-4">
            The American Refractive Surgery Council (ARSC) puts the national average at{' '}
            <strong>$2,250 per eye</strong>, or about <strong>$4,492 for both eyes</strong>. In
            practice, real pricing usually lands between <strong>$1,500 and $3,000 per eye</strong>,
            depending on the laser platform, the surgeon&apos;s experience, your prescription, and
            your metro. Independent cost trackers report a similar 2026 average of roughly{' '}
            <strong>$2,200 per eye</strong>, with conventional LASIK quoted lower and custom or
            bladeless LASIK at the top of the range.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-2">The &quot;$99 per eye&quot; trap</h4>
            <p className="text-gray-700">
              ARSC notes that headline ads of <strong>$99, $199, or $299 per eye</strong> almost
              always come with caveats — they typically apply only to the simplest prescriptions
              using basic technology, with the advanced diagnostics and follow-up care priced
              separately. Treat a too-good-to-be-true number as a starting bid, then ask for the
              all-inclusive total for <em>your</em> prescription on <em>your</em> platform.
            </p>
          </div>

          <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Flat Fee Actually Includes</h2>

          <p className="text-gray-700 mb-4">
            Most reputable refractive practices quote an <strong>all-inclusive flat fee per eye</strong>.
            A complete quote should cover:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Pre-op exam and diagnostics</strong> — the screening that measures corneal thickness and confirms candidacy</li>
            <li><strong>The procedure itself</strong> on an FDA-approved laser platform</li>
            <li><strong>Post-op medications</strong> (drops) and the immediate aftercare</li>
            <li><strong>Follow-up visits</strong> over the first weeks and months</li>
            <li><strong>An enhancement / &quot;lifetime assurance&quot; program</strong> at some practices — a re-treatment if your vision regresses within a defined window</li>
          </ul>

          <p className="text-gray-700 mb-4">
            ARSC points out the price reflects more than the few minutes of laser time: there are
            per-eye <strong>laser-equipment licensing fees</strong>, the surgeon, advanced diagnostic
            tools, and the full care package. When you compare two quotes, the question is not which
            sticker is lower — it is which one bundles the diagnostics, follow-ups, and enhancement
            policy versus charging for them à la carte.
          </p>

          <h2 id="types" className="text-2xl font-bold text-gray-900 mt-12 mb-6">LASIK vs PRK vs SMILE vs ICL</h2>

          <p className="text-gray-700 mb-4">
            &quot;LASIK&quot; is shorthand most people use, but it is one of four common
            vision-correction options. Which one fits depends on your cornea, prescription, and
            lifestyle — a decision your surgeon makes during the pre-op exam, not one you pick off a
            price list. Here is how they compare on cost and trade-offs.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical US cost per eye (estimate)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">How it works</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Often best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">LASIK</td>
                  <td className="border border-gray-300 px-4 py-3">~$1,500 - $3,000</td>
                  <td className="border border-gray-300 px-4 py-3">Corneal flap + laser reshaping; flap replaced</td>
                  <td className="border border-gray-300 px-4 py-3">Fast recovery (back to work next day)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">PRK</td>
                  <td className="border border-gray-300 px-4 py-3">~$300 - $600 less than LASIK</td>
                  <td className="border border-gray-300 px-4 py-3">No flap; outer layer removed, regrows over ~1 month</td>
                  <td className="border border-gray-300 px-4 py-3">Thin corneas; military, law-enforcement, contact sports</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">SMILE</td>
                  <td className="border border-gray-300 px-4 py-3">~$500 - $1,000 more than LASIK</td>
                  <td className="border border-gray-300 px-4 py-3">Flapless all-laser lenticule (ZEISS VisuMax)</td>
                  <td className="border border-gray-300 px-4 py-3">Nearsightedness &amp; astigmatism; flapless preference</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">ICL (EVO Visian)</td>
                  <td className="border border-gray-300 px-4 py-3">~$3,500 - $5,000</td>
                  <td className="border border-gray-300 px-4 py-3">Removable lens implanted inside the eye; cornea untouched</td>
                  <td className="border border-gray-300 px-4 py-3">High prescriptions, thin corneas, chronic dry eye</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">LASIK — the default for fast recovery</h3>
          <p className="text-gray-700 mb-4">
            LASIK creates a thin corneal flap, reshapes the cornea underneath with a laser, then
            lays the flap back. The big draw is recovery: most patients are back to work the next
            day with little to no pain. It is the most familiar option and usually the price anchor
            everything else is compared against.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">PRK — the no-flap alternative</h3>
          <p className="text-gray-700 mb-4">
            PRK removes the outer corneal layer entirely instead of cutting a flap; that layer
            regrows over the following weeks. Recovery is slower — clear vision takes about a month,
            and about 10% of PRK patients report mild-to-moderate discomfort in the first 24-36 hours.
            The upside is there is no flap to dislodge, which is why PRK is often preferred for thin
            corneas and for military, law-enforcement, or contact-sport candidates. It typically
            costs a few hundred dollars less than LASIK.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">SMILE — flapless, laser-based</h3>
          <p className="text-gray-700 mb-4">
            SMILE (small-incision lenticule extraction) is an all-laser, flapless procedure performed
            on the ZEISS VisuMax femtosecond laser, FDA-approved for nearsightedness with or without
            astigmatism. Because it requires a specialized platform that fewer practices own, it
            commonly runs $500-$1,000 more per eye than LASIK.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">ICL — for eyes that can&apos;t do laser reshaping</h3>
          <p className="text-gray-700 mb-4">
            The EVO Visian ICL is not laser surgery at all — it implants a removable collamer lens
            inside the eye, leaving the cornea untouched. Because it is <strong>reversible</strong> and
            removes no corneal tissue, it is an option for higher prescriptions, thinner corneas, or
            chronic dry eye where LASIK may not be appropriate. It is the priciest of the four,
            commonly $3,500-$5,000 per eye, reflecting the implant and the intraocular procedure.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="text-gray-700">
              <strong>Why this matters for cost:</strong> if a clinic quotes you the cheapest LASIK
              number but your eyes are better suited to PRK or ICL, the &quot;cheapest&quot; option
              is the wrong one. Let the pre-op exam — not the price tag — pick the procedure, then
              compare quotes for <em>that</em> procedure.
            </p>
          </div>

          <h2 id="providers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Named US Chains Charge</h2>

          <p className="text-gray-700 mb-4">
            National refractive chains publish flat-fee pricing, which is useful for a baseline even
            though your final number depends on your exam. The figures below are{' '}
            <strong>each provider&apos;s own published estimates</strong>, not live quotes — confirm
            current pricing and what is bundled directly with the practice.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published price (estimate)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">LasikPlus</td>
                  <td className="border border-gray-300 px-4 py-3">~$2,495 - $2,895 per eye</td>
                  <td className="border border-gray-300 px-4 py-3">Advertises lower after insurance/vision discounts; guaranteed financing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">The LASIK Vision Institute</td>
                  <td className="border border-gray-300 px-4 py-3">~$2,495 - $2,895 per eye</td>
                  <td className="border border-gray-300 px-4 py-3">States most pay closer to ~$1,900/eye after discounts; financing offered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">TLC Laser Eye Centers</td>
                  <td className="border border-gray-300 px-4 py-3">Quote-based, all-inclusive flat fee</td>
                  <td className="border border-gray-300 px-4 py-3">Emphasizes transparent flat-fee pricing + financing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">University centers (e.g., UCLA Laser Refractive Center)</td>
                  <td className="border border-gray-300 px-4 py-3">PRK ~$2,500/eye; SMILE ~$2,500/eye (estimate)</td>
                  <td className="border border-gray-300 px-4 py-3">Academic option; pricing varies by procedure and program</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-2">Compare the all-in number, the same week</h4>
            <p className="text-gray-700">
              Chains and independent surgeons both advertise &quot;from&quot; prices that assume a
              simple prescription. Book a free consult at two or three practices, get each one&apos;s
              all-inclusive quote for your exact procedure and prescription — including the
              enhancement policy — and compare those, not the teaser rates.
            </p>
          </div>

          <h2 id="financing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Financing, HSA/FSA &amp; Insurance</h2>

          <p className="text-gray-700 mb-4">
            Because LASIK is elective, almost no US medical or vision plan covers it outright. Some
            vision plans offer a network discount or let you apply HSA/FSA funds; ARSC advises
            checking with your carrier or benefits manager. Three levers bring the real cost down:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>HSA/FSA:</strong> ARSC confirms laser vision correction is a qualified medical expense for FSAs and HSAs — paying with pre-tax dollars effectively discounts it by your marginal tax rate.</li>
            <li><strong>0%-interest financing:</strong> most practices offer monthly payment plans; LasikPlus and The LASIK Vision Institute both advertise guaranteed financing with low- or no-interest options. Read the APR and term.</li>
            <li><strong>Vision-plan discounts:</strong> some employer vision benefits include a LASIK discount through a partner network — worth confirming before you assume zero coverage.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-2">Watch the financing math</h4>
            <p className="text-gray-700">
              A &quot;$0 down, $X/month&quot; offer is only as good as its interest rate. A genuine
              0%-interest plan spreads the same total over time; a deferred-interest plan can charge
              back-dated interest if you miss the payoff window. Ask for the total amount you will pay
              over the full term before signing.
            </p>
          </div>

          <h2 id="vet" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Vet a LASIK Surgeon</h2>

          <p className="text-gray-700 mb-4">
            Price matters, but the surgeon and the platform matter more. A short checklist before you
            commit:
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Board certification.</strong> Confirm the surgeon is certified by a member of the American Board of Medical Specialties. An uncertified surgeon is a red flag.</li>
            <li><strong>Volume on your platform.</strong> Ask how many procedures they have performed on the specific FDA-approved laser they will use for you — experience on that exact system counts.</li>
            <li><strong>FDA-approved technology.</strong> Confirm the laser is on the FDA&apos;s published list of approved lasers for LASIK, and ask which platform and why.</li>
            <li><strong>A real pre-op exam.</strong> A thorough screening should measure corneal thickness and prescription stability and rule you in or out — not just hand you a price.</li>
            <li><strong>Outcomes and enhancement policy in writing.</strong> Ask for their outcome and enhancement-rate data, and get the follow-up and re-treatment policy documented.</li>
            <li><strong>Multiple consults.</strong> Get consultations at more than one practice; compare the surgeon, the plan, and the all-in price together.</li>
          </ol>

          <h2 id="candidacy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Candidacy &amp; Risks to Know</h2>

          <p className="text-gray-700 mb-4">
            LASIK is FDA-approved for adults 18 and older, but most surgeons want a{' '}
            <strong>stable prescription</strong> (often at least one to two years unchanged) and
            enough corneal tissue to reshape safely. General guidance to discuss with your surgeon:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Stable vision:</strong> a prescription that keeps changing means you may not be ready yet.</li>
            <li><strong>Corneal thickness:</strong> too thin or irregular a cornea may rule out LASIK — PRK or ICL may be alternatives.</li>
            <li><strong>Pregnancy / breastfeeding:</strong> hormone shifts can destabilize your prescription; surgery is typically deferred.</li>
            <li><strong>Autoimmune / healing conditions:</strong> conditions like lupus or rheumatoid arthritis, and some medications, can impair healing.</li>
            <li><strong>Dry eye and large pupils:</strong> LASIK can worsen dry eye, and large pupils are associated with glare, halos, and starbursts after surgery.</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Known risks include temporary or chronic <strong>dry eye</strong>, nighttime{' '}
            <strong>glare and halos</strong>, under- or over-correction, and the possibility of needing
            an <strong>enhancement</strong> later. None of these are reasons to avoid LASIK by
            default — they are reasons to be screened honestly and to choose a surgeon who will tell
            you if you are <em>not</em> a candidate. Candidacy is a clinical decision for a qualified
            eye surgeon, not something to self-diagnose from a guide.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Thinking about LASIK abroad?</h3>
          <p className="text-gray-700 mb-4">
            If the US cash price is the sticking point, some patients look overseas — but the same
            vetting (accreditation, FDA-grade platforms, surgeon experience, follow-up) applies, plus
            travel logistics. See our companion guide for the international picture.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Going abroad:</strong> our <Link href="/guides/lasik-cost-by-country" className="text-blue-600 hover:underline">LASIK cost by country comparison</Link> covers Mexico, Turkey, India &amp; Thailand vs the US</li>
            <li><strong>Medical-travel basics:</strong> the <Link href="/medical-tourism" className="text-blue-600 hover:underline">medical tourism hub</Link> covers accreditation and how to vet a clinic abroad</li>
            <li><strong>Other cash-pay procedures near you:</strong> browse the <Link href="/local-clinics" className="text-blue-600 hover:underline">local cash-pay clinics directory</Link></li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Health Services Near You</h3>
          <p className="mb-6 text-cyan-100">
            Find transparent self-pay pricing on the procedures and scans you actually need.
          </p>
          <Link
            href="/local-clinics"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-cyan-600 hover:bg-cyan-50 transition-colors"
          >
            Browse Local Cash-Pay Clinics
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
            <li>• American Refractive Surgery Council — How Much Does LASIK Cost? (national average, financing, HSA/FSA)</li>
            <li>• Vision Center — LASIK Eye Surgery Cost in 2026 (per-eye averages by procedure type)</li>
            <li>• All About Vision — PRK vs. LASIK (flap differences, recovery, who PRK suits)</li>
            <li>• NVISION Eye Centers — EVO ICL vs. LASIK (reversibility, candidacy, cost range)</li>
            <li>• LasikPlus / The LASIK Vision Institute / TLC — published flat-fee pricing &amp; financing</li>
            <li>• American Refractive Surgery Council — LASIK candidate guidelines (stability, corneal thickness, contraindications)</li>
            <li>• U.S. Food &amp; Drug Administration — List of FDA-Approved Lasers for LASIK</li>
          </ul>
        </div>
      </article>

      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Cash-Pay Vision-Surgery Cheat Sheet"
          description="LASIK, PRK, SMILE & ICL: what to ask, what a fair all-in price looks like, and how to time financing."
          source="guide_lasik_cost_usa"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
