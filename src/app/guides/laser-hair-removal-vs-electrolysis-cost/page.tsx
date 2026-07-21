import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/laser-hair-removal-vs-electrolysis-cost';

export const metadata: Metadata = {
  title: { absolute: 'Laser Hair Removal vs Electrolysis Cost (2026): Which Is Cheaper?' },
  alternates: { canonical: URL },
  description:
    'Laser costs less per session but treats only dark hair; electrolysis is the only FDA-recognized permanent removal, works on any hair color, but is priced by time and needs more visits.',
  keywords: [
    'laser hair removal vs electrolysis cost',
    'electrolysis vs laser cost',
    'is electrolysis cheaper than laser',
    'electrolysis cost vs laser',
    'permanent hair removal cost',
    'electrolysis vs laser hair removal',
    'cheapest permanent hair removal',
  ],
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price line ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is laser hair removal or electrolysis cheaper?',
    answer:
      'It depends on the area and your goal. Laser is usually cheaper per session and treats large areas fast, but it is cleared only for permanent hair reduction and needs periodic maintenance. Electrolysis is priced by time (commonly billed in 15 to 60 minute blocks) and needs many more visits because each follicle is treated individually, so a large area can cost more overall — but it is the only method the FDA recognizes as permanent removal and it works on any hair color. Small areas can favor electrolysis; large areas often favor laser. These are typical ranges — confirm pricing with the provider.',
  },
  {
    question: 'What is the difference between laser and electrolysis?',
    answer:
      'Laser uses light absorbed by the pigment (melanin) in the hair to disable many follicles at once, so it needs dark hair against lighter skin and delivers permanent hair reduction. Electrolysis inserts a fine probe into each follicle and passes an electric current that destroys it one hair at a time; it does not rely on pigment, so it works on blonde, red, gray, and white hair, and the FDA recognizes it for permanent hair removal. The trade-off is speed: laser is fast and broad, electrolysis is slow and precise. A licensed provider can confirm which fits your hair and skin.',
  },
  {
    question: 'How is each one priced?',
    answer:
      'Laser is typically priced per session by body area or sold as a package of sessions. Electrolysis is typically priced by time — a per-appointment or per-15-minute rate — because the work scales with how many hairs are treated, not the size of the area. That is why a small, sparse area can be inexpensive with electrolysis while a large, dense area adds up. Ask each provider for the expected number of sessions and total cost, not just the headline rate; prices vary by clinic and city, so verify current pricing.',
  },
  {
    question: 'Which is truly permanent, laser or electrolysis?',
    answer:
      'Electrolysis is the method the FDA recognizes for permanent hair removal, because it destroys the follicle directly and does not depend on pigment. Laser devices are cleared for permanent hair reduction — a long-term, stable decrease in regrowing hairs measured at 6, 9, and 12 months — not a guarantee that every hair is gone. In practice both can produce lasting results, but only electrolysis carries the permanent-removal designation. No method achieves 100 percent removal for everyone; results vary by person and operator.',
  },
  {
    question: 'Does electrolysis work on blonde, red, or gray hair?',
    answer:
      'Yes. Because electrolysis destroys the follicle with an electric current rather than targeting pigment, it works on light-colored hair — blonde, red, gray, and white — that laser and IPL cannot reliably treat. That pigment-independence is the main reason people with light hair choose electrolysis despite the higher number of sessions. A licensed electrologist can confirm candidacy and estimate the number of visits your area is likely to need.',
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

export default function LaserVsElectrolysisCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Laser Hair Removal vs Electrolysis Cost: Which Is Cheaper?',
    description:
      'A practical cost comparison of laser hair removal and electrolysis — how each is priced, sessions needed, which is permanent, and how to choose for your hair and skin.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Laser hair removal and electrolysis' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-21',
    dateModified: '2026-07-21',
    citation: [
      { '@type': 'CreativeWork', name: 'FDA — Medical Lasers (laser cleared for permanent hair reduction; definition)', url: 'https://www.fda.gov/radiation-emitting-products/surgical-and-therapeutic-products/medical-lasers' },
      { '@type': 'CreativeWork', name: 'StatPearls (NCBI Bookshelf) — Laser Hair Removal (pigment dependence; treatment series)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507861/' },
      { '@type': 'CreativeWork', name: 'American Academy of Dermatology — 6 ways to remove unwanted hair (electrolysis vs laser overview)', url: 'https://www.aad.org/public/everyday-care/skin-care-basics/hair/remove-unwanted-hair' },
      { '@type': 'CreativeWork', name: 'PMC — The Permanent Removal of Hair by Electrolysis (FDA-approved permanent removal; per-follicle mechanism; efficacy variability)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10062849/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Laser Hair Removal vs Electrolysis Cost', item: URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Laser vs Electrolysis Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/med-spa" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Med Spa &amp; Aesthetics Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Hair Removal vs Electrolysis Cost (2026): Which Is Cheaper?
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Laser is cheaper per session and fast on large areas; electrolysis is the only
              FDA-recognized permanent removal and works on any hair color, but is priced by time and
              needs many more visits. Here is how the total cost actually compares.
            </p>

            {/* Direct-answer lead: self-contained ~75-word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Laser costs less per session; electrolysis can cost less on small areas.</strong>{' '}
                Laser is priced per area, treats dark hair fast, and delivers permanent hair reduction.
                Electrolysis is priced by time, works on any hair color, and is the only method the FDA
                recognizes for permanent hair removal — but large areas need many visits and cost more.
                Small areas favor electrolysis; large areas favor laser. Prices are typical ranges —
                verify with the provider.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 9 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Laser hair removal</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Priced per area or per package</li>
                  <li>• Lower cost per session</li>
                  <li>• Fast on large areas</li>
                  <li>• Needs dark hair, lighter skin contrast</li>
                  <li>• FDA: permanent hair reduction</li>
                  <li>• Fewer visits; periodic maintenance</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Electrolysis</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Priced by time (per 15-60 min)</li>
                  <li>• Higher total cost on large areas</li>
                  <li>• Slow; one follicle at a time</li>
                  <li>• Works on any hair color</li>
                  <li>• FDA: permanent hair removal</li>
                  <li>• Many more visits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean laser if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have dark hair and are treating a large area</li>
                  <li>• You want the lowest cost per session</li>
                  <li>• You are fine with occasional maintenance</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean electrolysis if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your hair is blonde, red, gray, or white</li>
                  <li>• You want FDA-recognized permanent removal</li>
                  <li>• You are treating a small, defined area (face, brows)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#models" className="text-blue-600 hover:underline">1. Two treatments, two pricing models</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. Cost compared side by side</a></li>
              <li><a href="#total" className="text-blue-600 hover:underline">3. Total cost, not per-session cost</a></li>
              <li><a href="#permanent" className="text-blue-600 hover:underline">4. Permanent removal vs permanent reduction</a></li>
              <li><a href="#which" className="text-blue-600 hover:underline">5. Which fits your hair and skin</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to save safely</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Which is cheaper&quot; has no single answer, because laser and electrolysis are
              priced on completely different logic. Laser charges for the <em>area</em> you treat;
              electrolysis charges for the <em>time</em> it takes to treat each hair. Once you see that,
              the cost comparison becomes a question about how big and how dense your target area is —
              and what hair color you have.
            </p>

            <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Two Treatments, Two Pricing Models</h2>

            <p className="text-gray-700 mb-4">
              <strong>Laser hair removal</strong> uses light absorbed by the melanin pigment in the hair
              to disable many follicles in a single pass, so it can clear a large area quickly. It is
              billed per body area or as a package of sessions. Because it relies on pigment, it works
              best on dark hair against lighter skin and is cleared by the FDA for permanent hair
              reduction.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Electrolysis</strong> inserts a fine probe into each follicle and delivers an
              electric current that destroys it, one hair at a time. It does not depend on pigment, so
              it works on any hair color — blonde, red, gray, and white included — and the FDA
              recognizes it for permanent hair removal. Because the work is per-follicle, it is billed
              by time (commonly a per-appointment or per-15-minute rate), and a dense area needs many
              sessions.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters at checkout:</strong> a &quot;$250 per area&quot; laser price and
                a &quot;$80 per session&quot; electrolysis price are not comparable line items. Laser&apos;s
                price is per treatment of the whole area; electrolysis&apos;s price is per block of time,
                and a full area can take many blocks. Always ask for the expected number of sessions and
                the all-in total.
              </p>
            </div>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Compared Side by Side</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>typical ranges drawn from published guidance and general
              market pricing</strong>, not live quotes. Cost varies widely by clinic, city, area size,
              and hair density — confirm current pricing with the provider.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Laser</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Electrolysis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">How it is priced</td>
                    <td className="border border-gray-300 px-4 py-3">Per area or package</td>
                    <td className="border border-gray-300 px-4 py-3">Per time (e.g., 15-60 min blocks)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cost per session (typical range)</td>
                    <td className="border border-gray-300 px-4 py-3">~$150-$500+ by area</td>
                    <td className="border border-gray-300 px-4 py-3">~$50-$150 per appointment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sessions typically needed</td>
                    <td className="border border-gray-300 px-4 py-3">~6-8, then maintenance</td>
                    <td className="border border-gray-300 px-4 py-3">Many more (area-dependent)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Speed</td>
                    <td className="border border-gray-300 px-4 py-3">Fast; large areas per pass</td>
                    <td className="border border-gray-300 px-4 py-3">Slow; one follicle at a time</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hair color it treats</td>
                    <td className="border border-gray-300 px-4 py-3">Dark hair (needs pigment)</td>
                    <td className="border border-gray-300 px-4 py-3">Any color (no pigment needed)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FDA designation</td>
                    <td className="border border-gray-300 px-4 py-3">Permanent hair reduction</td>
                    <td className="border border-gray-300 px-4 py-3">Permanent hair removal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Best-fit area</td>
                    <td className="border border-gray-300 px-4 py-3">Large (legs, back, chest)</td>
                    <td className="border border-gray-300 px-4 py-3">Small, defined (face, brows)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="total" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Total Cost, Not Per-Session Cost</h2>

            <p className="text-gray-700 mb-4">
              The honest number is the full course, not the first appointment. The two methods diverge
              because their session counts are so different:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Large areas usually favor laser.</strong> Clearing a back or full legs with electrolysis&apos;s per-follicle, per-time model can run into many hours across many months, so laser is typically the cheaper and faster route for dark hair on large areas.</li>
              <li><strong>Small areas can favor electrolysis.</strong> A few stray chin hairs or a brow shape is a small number of follicles, so a handful of short electrolysis appointments can be inexpensive — and permanent.</li>
              <li><strong>Light hair changes the math entirely.</strong> If laser cannot treat your hair color, electrolysis is the option that works, and the cost comparison is moot.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask for a session estimate before you pay</h4>
              <p className="text-gray-700">
                Electrolysis efficacy and total time vary widely by person and operator. Published
                reviews report hair reductions up to around 90 percent with electrolysis, but with
                notable regrowth variability depending on technique and the individual. Ask the
                electrologist to estimate the number and length of sessions your area is likely to need,
                so the &quot;per-session&quot; rate turns into a real total.
              </p>
            </div>

            <h2 id="permanent" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Permanent Removal vs Permanent Reduction</h2>

            <p className="text-gray-700 mb-4">
              This distinction is the whole reason both methods exist, and it is worth being precise
              about:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Electrolysis</strong> is the method the FDA recognizes for <strong>permanent hair removal</strong>, because it destroys the follicle directly. It has been in use since the 1870s and works independent of pigment.</li>
              <li><strong>Laser</strong> is cleared for <strong>permanent hair reduction</strong> — a long-term, stable decrease in regrowing hairs measured at 6, 9, and 12 months after treatment — not a promise that every hair is gone. Maintenance sessions are common.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              In everyday results, both can be long-lasting. But if your goal is total, pigment-independent,
              permanent removal — and you are willing to trade time and session count for it — electrolysis
              is the method with that designation. No technique removes 100 percent of hair for everyone;
              results vary by person and operator.
            </p>

            <h2 id="which" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Fits Your Hair and Skin</h2>

            <p className="text-gray-700 mb-4">
              The cleanest way to decide is to match the method to your hair color and area size:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Choose laser when</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Your hair is dark and your skin provides pigment contrast (or the clinic uses an Nd:YAG for darker skin — see our <Link href="/guides/ipl-vs-laser-hair-removal" className="text-blue-600 hover:underline">IPL vs laser guide</Link>)</li>
              <li>You are treating a large area and want speed and lower per-session cost</li>
              <li>You accept occasional maintenance for lasting reduction</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Choose electrolysis when</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Your hair is blonde, red, gray, or white, and laser cannot treat it</li>
              <li>You want FDA-recognized permanent removal on a small, defined area</li>
              <li>You are treating stray hairs, brows, or facial shaping where precision matters</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save Safely</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get a written session estimate.</strong> For electrolysis especially, the total depends on session count — get it in writing before you commit.</li>
              <li><strong>Compare packages.</strong> Both methods often discount pre-paid packages; weigh that against the risk of paying up front for a provider you have not tested.</li>
              <li><strong>Choose a licensed, trained operator.</strong> Technique drives both results and safety. Verify credentials and ask about experience with your hair type.</li>
              <li><strong>Do not mix goals.</strong> Some people use laser to thin a large dark area, then electrolysis to finish stray or light hairs. Ask whether a combined plan lowers total cost.</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Safety beats the lowest price</h4>
              <p className="text-gray-700">
                Both methods are safe in trained hands but can cause burns, scarring, or pigment changes
                when done poorly. The cheapest provider is not a saving if it risks a lasting mark. To
                compare vetted local options, browse the{' '}
                <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link>.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Laser</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dark hair on a large area, treated fast</li>
                <li>Lowest cost per session</li>
                <li>Comfortable with periodic maintenance</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: fast, lower-per-session reduction on large, dark-haired areas
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Electrolysis</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Any hair color, including light hair laser cannot treat</li>
                <li>FDA-recognized permanent removal</li>
                <li>Small, defined areas where precision matters</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: permanent, pigment-independent removal on small areas
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your hair color — light hair points to electrolysis by default</li>
              <li>Size the area — large and dark favors laser; small favors electrolysis</li>
              <li>Decide your goal — permanent reduction (laser) or permanent removal (electrolysis)</li>
              <li>Get a full-course total from each, not the per-session rate</li>
              <li>Pick a licensed operator experienced with your hair and skin type</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Laser device details:</strong> our <Link href="/guides/ipl-vs-laser-hair-removal" className="text-blue-600 hover:underline">IPL vs laser hair removal guide</Link> covers skin-type fit.</li>
              <li><strong>Laser pricing by area:</strong> see the <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link>.</li>
              <li><strong>Other med-spa cost lookups:</strong> our upcoming <Link href="/guides/botox-cost-per-unit" className="text-blue-600 hover:underline">Botox cost per unit</Link> index.</li>
              <li><strong>Browse providers:</strong> compare local options in the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link> or <Link href="/guides" className="text-blue-600 hover:underline">all health guides</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Med Spa Near You</h3>
            <p className="mb-6 text-blue-100">
              Compare local med spas and clinics for laser hair removal and electrolysis, with
              transparent cash-pay pricing.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Med Spas
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
              <li>• FDA — <em>Medical Lasers</em> (laser cleared for permanent hair reduction; the reduction definition). <a href="https://www.fda.gov/radiation-emitting-products/surgical-and-therapeutic-products/medical-lasers" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">fda.gov/radiation-emitting-products</a></li>
              <li>• StatPearls (NCBI Bookshelf) — <em>Laser Hair Removal</em> (pigment dependence; treatment series). <a href="https://www.ncbi.nlm.nih.gov/books/NBK507861/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ncbi.nlm.nih.gov/books/NBK507861</a></li>
              <li>• American Academy of Dermatology — <em>6 ways to remove unwanted hair</em> (electrolysis works on light hair; laser needs pigment). <a href="https://www.aad.org/public/everyday-care/skin-care-basics/hair/remove-unwanted-hair" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">aad.org</a></li>
              <li>• PMC — <em>The Permanent Removal of Hair by Electrolysis</em> (FDA-approved permanent removal; per-follicle mechanism; efficacy variability). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10062849/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ncbi.nlm.nih.gov/pmc/articles/PMC10062849</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Session counts, efficacy, and prices vary by hair color, area, operator, and city. Figures
              are typical ranges, not quotes — confirm current pricing and candidacy with a licensed
              provider.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Hair Removal Cost Cheat Sheet"
            description="Laser vs electrolysis: how to turn a per-session or per-area rate into a real full-course total."
            source="guide_laser_vs_electrolysis_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
