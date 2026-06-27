import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Hair Transplant Turkey Cost (2026): FUE & DHI Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/hair-transplant-turkey-cost' },
  description:
    'What a hair transplant in Turkey costs in 2026 — FUE vs DHI per-graft and all-inclusive package prices, what packages include, and how to vet a clinic.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a hair transplant in Turkey cost in 2026?',
    answer:
      'Most all-inclusive hair transplant packages in Turkey run roughly $2,000-$6,500 in 2026, with the typical mid-market FUE package landing around $2,400-$3,500. On a per-graft basis that works out to about $1-$3 per graft, versus roughly $5-$10 per graft (often $8,000-$20,000 total) in the United States. These are advertised package prices that change with currency and graft count, so confirm a written, all-in quote directly with the clinic before booking.',
  },
  {
    question: 'Is DHI more expensive than FUE in Turkey?',
    answer:
      'Yes, usually. At Turkish clinics, standard or Sapphire FUE packages are commonly advertised around $2,400-$3,500, while DHI (Direct Hair Implantation, using the Choi implanter pen) typically runs higher — roughly $3,500-$5,300 at many clinics — because it is slower, more technician-intensive, and lets the surgeon control implant angle and depth more precisely. DHI is not automatically "better"; it suits smaller, denser, or unshaven cases. Confirm exactly which technique and graft count a quote covers.',
  },
  {
    question: 'What is included in an all-inclusive Turkey hair transplant package?',
    answer:
      'A typical all-inclusive Istanbul package bundles the procedure, 2-3 nights in a partner hotel, VIP airport and clinic transfers, a translator, post-op medications and a wash/aftercare kit, and often one PRP session plus remote follow-up. What is NOT always included: your international flights, extra hotel nights, and any second session if more grafts are needed later. Always get the inclusions in writing, since "all-inclusive" is defined differently from clinic to clinic.',
  },
  {
    question: 'Why is a hair transplant so much cheaper in Turkey?',
    answer:
      'Lower clinic operating and labor costs, a favorable currency exchange, and very high procedure volume in Istanbul let Turkish clinics price packages far below US clinics — frequently a third to a quarter of US pricing. Lower price does not mean lower quality at accredited clinics, but it also enables underground "black-market" operations. The savings are real; vetting the specific clinic and the operating surgeon is what separates a good outcome from a costly repair case.',
  },
  {
    question: 'How do I vet a hair transplant clinic in Turkey?',
    answer:
      'Confirm the clinic holds a Turkish Ministry of Health hair-transplant unit license and, for foreign patients, a health-tourism authorization (a TURSAB tourism license); under Turkey’s May 2023 Hair Transplant Units Regulation the incision step must be performed by a licensed physician, not a technician. Ask in writing who evaluates your hair loss, who performs the surgery and their credentials, whether unlicensed staff make incisions or harvest grafts, and whether everyone is covered by malpractice insurance. The ISHRS recommends these exact questions before traveling.',
  },
  {
    question: 'Are cheap hair transplants in Turkey safe?',
    answer:
      'Quality varies widely. The ISHRS reported that in 2024, 59% of its members saw black-market hair-transplant clinics in their cities (up from 51% in 2021), and that about 10% of their cases were repairs of prior black-market work (up from 6% in 2021). The risk is the "bait and switch," where a credentialed doctor is advertised but an unlicensed technician performs the surgery. A rock-bottom price with no named surgeon is the main red flag — vet credentials, not just cost.',
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

// Real, pre-verified Istanbul hair-transplant clinics (source: src/lib/
// providers-medical-tourism.ts hairTransplantProviders). Package prices are
// advertised estimates to confirm with the provider; ranges reconciled against
// each clinic's own 2026 cost page where available.
const TURKEY_CLINICS = [
  {
    name: 'Smile Hair Clinic',
    technique: 'Sapphire FUE / DHI',
    price: 'From ~$2,400 (Gold)',
    note:
      'High-volume Istanbul clinic with tiered Gold / Platinum / Diamond packages; budget-friendly entry point with strong public review counts.',
    website: 'https://smilehairclinic.com',
  },
  {
    name: 'Dr. Serkan Aygin Clinic',
    technique: 'FUE / DHI / Sapphire FUE',
    price: '~$2,500-$4,000',
    note:
      'Long-running named-surgeon clinic (25+ years) with a published cost calculator and a deep before/after portfolio.',
    website: 'https://drserkanaygin.com',
  },
  {
    name: 'Vera Clinic',
    technique: 'FUE / DHI / Sapphire FUE + OxyCure',
    price: '~$2,900-$5,900',
    note:
      'JCI-accredited prestige clinic in Istanbul; proprietary OxyCure follicle-oxygenation step bundled into all-inclusive packages.',
    website: 'https://veraclinic.net',
  },
  {
    name: 'ASMED',
    technique: 'FUE / Robotic FUE',
    price: '~$3,500',
    note:
      'Research-driven, lower-volume clinic led by a named surgeon; bespoke surgical plans and a precision-over-volume positioning.',
    website: 'https://asmed.com',
  },
];

export default function HairTransplantTurkeyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hair Transplant Turkey Cost (2026): FUE & DHI Prices',
    description:
      'A 2026 cost guide to hair transplants in Turkey — FUE vs DHI per-graft and all-inclusive package pricing, what packages include, how Turkey compares to the US, and how to vet a clinic safely.',
    url: 'https://vitalityscout.com/guides/hair-transplant-turkey-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/hair-transplant-turkey-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Hair transplantation (FUE / DHI follicular unit procedures)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Smile Hair Clinic — Hair Transplant Turkey Cost 2026', url: 'https://www.smilehairclinic.com/en/hair-transplant-turkey-cost/' },
      { '@type': 'CreativeWork', name: 'Dr. Serkan Aygin — Turkey Hair Transplant Cost 2026', url: 'https://www.drserkanaygin.com/hair-transplant/cost/turkey/' },
      { '@type': 'CreativeWork', name: 'Hair Cost Calculator — US Hair Transplant Prices 2026 (US-market basis)', url: 'https://www.haircostcalculator.com/prices/usa/' },
      { '@type': 'CreativeWork', name: 'Hair Transplant Clinics — Hair Transplant Cost in the USA 2026 (US-market basis)', url: 'https://www.hairtc.com/hair-transplant-cost-in-usa' },
      { '@type': 'CreativeWork', name: 'Medart Hair — Hair Transplant Laws & Regulations in Turkey', url: 'https://www.medarthair.com/hair-transplant-turkey/laws-regulations/' },
      { '@type': 'CreativeWork', name: 'ISHRS — Buyer Beware: Medical Tourism for Hair Transplants', url: 'https://ishrs.org/buyer-beware-medical-tourism-for-hair-transplants-can-have-costly-consequences/' },
      { '@type': 'CreativeWork', name: 'ISHRS 2025 Practice Census — black-market clinic statistics (PR Newswire)', url: 'https://www.prnewswire.com/news-releases/world-hair-transplant-repair-day-taking-place-on-1111-shines-light-on-proliferation-dangers-of-black-market-hair-transplant-clinics-worldwide-302592151.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/hair-transplant-turkey-cost#faq', url: 'https://vitalityscout.com/guides/hair-transplant-turkey-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Medical Tourism Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hair Transplant Turkey Cost (2026)
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What FUE and DHI hair transplants actually cost in Turkey, what an
            &quot;all-inclusive&quot; package does and does not cover, and how to vet a clinic
            before you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A hair transplant in Turkey typically costs{' '}
              <strong>$2,000 to $6,500</strong> for an all-inclusive package in 2026 — about{' '}
              <strong>$1-$3 per graft</strong>, versus roughly $5-$10 per graft ($8,000-$20,000
              total) in the US. Standard or Sapphire FUE runs around $2,400-$3,500; DHI usually
              costs more, near $3,500-$5,300. Packages bundle hotel, transfers, and aftercare.
              These are advertised estimates to confirm with the provider. This is information,
              not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* FUE vs DHI price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FUE vs DHI Cost in Turkey (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Technique</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Turkey Package</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What It Is</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">vs US</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">FUE (standard / Sapphire)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">~$2,400-$3,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Follicles extracted one by one; channels opened, then grafts placed. Sapphire uses sapphire-tipped blades for the channels.</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$7,000-$15,000+</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">DHI (Choi pen)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">~$3,500-$5,300</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Each follicle is loaded into a Choi implanter pen that opens the channel and places the graft in one motion — more angle/depth control.</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$10,000-$20,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Ranges are advertised all-inclusive package prices checked in June 2026 and change with
          currency and graft count. Per-graft math in Turkey runs roughly $1-$3 vs $5-$10 in the US.
          Confirm a written, all-in quote with each clinic before booking. Compare verified clinics on the{' '}
          <Link href="/hair_transplant" className="text-blue-600 hover:underline">
            hair transplant providers page
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Turkey Price</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Turkey&apos;s package prices sit far below US pricing for a few concrete reasons — and the
              same forces explain why a single &quot;Turkey&quot; quote can swing from $2,000 to $6,500:
            </p>
            <ul>
              <li>
                <strong>Graft count.</strong> Price scales with how many follicular grafts you need. A
                modest hairline touch-up costs far less than a 4,000-5,000-graft full-crown case. Many
                Istanbul clinics price by package band rather than a strict per-graft fee, so confirm the
                graft count the quote assumes.
              </li>
              <li>
                <strong>Technique.</strong> Standard and Sapphire FUE are the value tier; DHI (Choi pen)
                and manual or unshaven FUE add cost because they are slower and more technician-intensive.
              </li>
              <li>
                <strong>Who performs the steps.</strong> Packages where senior doctors perform extraction
                and implantation (not just supervise) cost more than high-volume packages where technicians
                do most of the placement under a physician.
              </li>
              <li>
                <strong>Operating cost and currency.</strong> Lower labor and facility costs plus a
                favorable exchange rate let Turkish clinics price at roughly a third to a quarter of US
                rates. That is the legitimate savings — not a quality discount at accredited clinics.
              </li>
              <li>
                <strong>What is bundled.</strong> Hotel tier (4- vs 5-star), number of nights, PRP sessions,
                and aftercare kits move the headline number. &quot;All-inclusive&quot; is defined differently
                at every clinic.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What all-inclusive includes */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Package Includes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usually included</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>The procedure (FUE or DHI) and local anesthesia</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>2-3 nights in a partner hotel</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>VIP airport and clinic transfers</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Translator / patient host</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Post-op medications and a wash / aftercare kit</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Often one PRP session and remote follow-up</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Usually NOT included</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>International flights to and from Istanbul</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Extra hotel nights beyond the package</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>A second session if more grafts are needed later</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Long-term medication (finasteride / minoxidil) at home</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Travel insurance and meals beyond what is stated</span></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Get every inclusion in writing before you pay a deposit. A package that looks cheaper on the
          headline can cost more once flights, extra nights, or a likely second session are added in.
        </p>
      </section>

      {/* Clinic cards */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Istanbul Clinics &amp; Price Bands</h2>
          <p className="text-gray-600 mb-6">
            Four established, publicly reviewed Istanbul clinics across the price range, from value to
            prestige. Listing is not an endorsement — verify credentials, the operating surgeon, and a
            written quote yourself. Prices are advertised package bands to confirm with the clinic.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {TURKEY_CLINICS.map((c) => (
              <div key={c.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{c.name}</h3>
                  <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{c.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{c.technique}</div>
                <p className="text-sm text-gray-600 mb-3">{c.note}</p>
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit clinic site →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Turkey compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Turkey Pricing Compares to the US</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The headline gap is large and consistent across sources. US clinics generally charge{' '}
              <strong>$5-$10 per graft</strong>, with a typical full procedure landing between{' '}
              <strong>$8,000 and $20,000</strong> — and the quoted US price often covers surgery only,
              with PRP, medications, and consultations billed separately. Turkey&apos;s all-inclusive
              packages run roughly <strong>$2,000-$6,500</strong>, frequently a third to a quarter of the
              US figure, with hotel, transfers, and aftercare bundled in.
            </p>
            <p>
              The practical takeaway: the savings are real, but the variance inside Turkey is also real.
              A $2,000 package and a $6,000 package are not the same procedure — they can differ in graft
              count, technique, hotel tier, and, crucially, whether a licensed physician or a technician
              does the surgical steps. Compare like for like, and treat the lowest number with caution.
            </p>
          </div>
        </div>
      </section>

      {/* Safety / vetting */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Clinic (and Avoid the Black Market)</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Turkey regulates hair transplantation directly. Under the{' '}
            <strong>May 2023 Hair Transplant Units Regulation</strong>, clinics must hold a Ministry of
            Health hair-transplant unit license, and the surgical incision step must be performed by a
            licensed physician holding a Ministry Hair Transplant Practitioner Certificate (which requires
            a 40-hour training program and an 80% exam score), per Medart Hair&apos;s summary of the law.
            Clinics treating foreign patients must also hold a <strong>health-tourism authorization
            (a TURSAB tourism license)</strong> on top of the unit operating license.
          </p>
          <p>
            The risk that pricing can hide is the &quot;bait and switch&quot; — a credentialed doctor is
            advertised, but an unlicensed technician performs the surgery. This is a measured, growing
            problem: per the ISHRS 2025 Practice Census, <strong>59% of ISHRS members</strong> reported
            black-market hair-transplant clinics in their cities in 2024 (up from 51% in 2021), and members
            reported that about <strong>10% of their cases</strong> were repairs of prior black-market work
            in 2024 (up from 6% in 2021).
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 not-prose my-6">
            <p className="text-sm font-semibold text-yellow-900 mb-3">Before you book, ask in writing (ISHRS guidance):</p>
            <ul className="text-sm text-yellow-900 space-y-2 mb-0">
              <li>• Who evaluates my hair loss, and what are their qualifications?</li>
              <li>• Who performs the surgery, and what are their credentials and experience?</li>
              <li>• Will any unlicensed individuals make incisions or harvest grafts?</li>
              <li>• Is everyone involved covered by malpractice insurance?</li>
            </ul>
          </div>

          <p>
            Add the practical checks: a named operating surgeon, the Ministry license and health-tourism
            certificate, before/after photos at 12+ months (not just immediately post-op), independent
            reviews, and a clear written contract in English. A rock-bottom price with no named surgeon is
            the single biggest red flag.
          </p>
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

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Hair Transplant Clinics</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted hair-transplant providers — techniques, price bands, and what each package includes.
          </p>
          <Link
            href="/hair_transplant"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Hair Transplant Providers →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/fue-vs-dhi" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">FUE vs DHI Hair Transplant</div>
                <div className="text-sm text-gray-600">The two techniques compared in depth</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-grafts-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">How Many Grafts Do I Need?</div>
                <div className="text-sm text-gray-600">Norwood scale and graft estimates</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-turkey-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant in Turkey: Full Guide</div>
                <div className="text-sm text-gray-600">Safety, clinics, and the full trip</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-recovery-timeline" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant Recovery Timeline</div>
                <div className="text-sm text-gray-600">Day-by-day, from shock loss to final results</div>
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
            <li>• <a href="https://www.smilehairclinic.com/en/hair-transplant-turkey-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Smile Hair Clinic — Hair Transplant Turkey Cost 2026 (packages, per-graft, FUE/DHI)</a></li>
            <li>• <a href="https://www.drserkanaygin.com/hair-transplant/cost/turkey/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dr. Serkan Aygin — Turkey Hair Transplant Cost 2026</a></li>
            <li>• <a href="https://www.haircostcalculator.com/prices/usa/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hair Cost Calculator — US Hair Transplant Prices 2026 (US-market per-graft &amp; total basis)</a></li>
            <li>• <a href="https://www.hairtc.com/hair-transplant-cost-in-usa" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hair Transplant Clinics — Hair Transplant Cost in the USA 2026 (US-market per-graft &amp; total basis)</a></li>
            <li>• <a href="https://www.medarthair.com/hair-transplant-turkey/laws-regulations/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medart Hair — Hair Transplant Laws &amp; Regulations in Turkey (May 2023 regulation)</a></li>
            <li>• <a href="https://ishrs.org/buyer-beware-medical-tourism-for-hair-transplants-can-have-costly-consequences/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISHRS — Buyer Beware: Medical Tourism for Hair Transplants</a></li>
            <li>• <a href="https://www.prnewswire.com/news-releases/world-hair-transplant-repair-day-taking-place-on-1111-shines-light-on-proliferation-dangers-of-black-market-hair-transplant-clinics-worldwide-302592151.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISHRS 2025 Practice Census — black-market clinic statistics (PR Newswire)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning a Hair Transplant Abroad?"
          description="Get our Turkey hair-transplant cost breakdown plus the clinic-vetting checklist before you book."
          source="guide_hair_transplant_turkey_cost"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
