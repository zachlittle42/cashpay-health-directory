import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/ipl-vs-laser-hair-removal';

export const metadata: Metadata = {
  title: { absolute: 'IPL vs Laser Hair Removal: Difference, Cost, and Which Works (2026)' },
  alternates: { canonical: URL },
  description:
    'IPL uses broadband light; laser uses one wavelength. Laser is generally more effective per session, especially on darker skin. How they differ on cost, skin type, and results.',
  keywords: [
    'ipl vs laser hair removal',
    'difference between ipl and laser hair removal',
    'is ipl or laser better for hair removal',
    'ipl vs laser cost',
    'intense pulsed light vs laser',
    'ipl hair removal dark skin',
    'laser hair removal vs ipl effectiveness',
  ],
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price line ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is IPL or laser better for hair removal?',
    answer:
      'For most people seeking durable hair reduction, single-wavelength lasers tend to be more efficient than IPL, often needing fewer sessions to reach the same result, and peer-reviewed dermatology reviews note IPL usually requires more sessions than lasers to hit the same target (PMC review). IPL uses broadband light and can be a lower-cost option for lighter skin with dark hair. Both are cleared by the FDA for permanent hair reduction, not permanent removal. Which suits you depends on your skin tone and hair color, so confirm candidacy with a licensed provider.',
  },
  {
    question: 'What is the difference between IPL and laser hair removal?',
    answer:
      'A laser emits a single, coherent wavelength of light; IPL (intense pulsed light) emits a broad spectrum of wavelengths, roughly 500 to 1200 nanometers. Both target melanin pigment in the follicle to disable regrowth, but the laser\'s focused beam delivers more selective energy to the follicle, while IPL\'s scattered spectrum spreads energy more broadly. That difference drives most of the effectiveness and safety gap, especially on darker skin. A licensed provider can assess which is appropriate for you.',
  },
  {
    question: 'Is IPL or laser cheaper?',
    answer:
      'Per session, IPL is often the lower-priced in-clinic option, and at-home IPL devices commonly run a few hundred dollars one time, while professional laser sessions are frequently higher per visit. But laser can need fewer sessions to reach the same reduction, so the cheaper option over a full course depends on your skin and hair. These are typical ranges that vary by clinic, city, and body area, not quotes — confirm current pricing with the provider.',
  },
  {
    question: 'Does IPL work on dark skin?',
    answer:
      'IPL carries a higher risk of pigment changes and burns on darker skin (Fitzpatrick types IV to VI) because its broad spectrum is absorbed by melanin in the skin, not only in the follicle. Peer-reviewed studies find long-pulsed Nd:YAG lasers (1064 nm) are generally the safest, most effective choice for darker skin because they bypass more surface pigment. If you have deeper skin, ask specifically which device the clinic uses before booking.',
  },
  {
    question: 'Does IPL or laser work on blonde, red, or gray hair?',
    answer:
      'Neither reliably removes light hair. Both IPL and laser work by targeting melanin, the dark pigment in the hair, so blonde, red, white, and gray hairs have too little pigment to respond well. For light-colored hair, electrolysis is the method that does not depend on pigment. A licensed provider can confirm whether your hair color is a good candidate before you pay for a package.',
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

export default function IplVsLaserHairRemoval() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'IPL vs Laser Hair Removal: Difference, Cost, and Which Works',
    description:
      'A practical comparison of intense pulsed light (IPL) and laser hair removal — how they differ, effectiveness by skin type, cost, and how to choose safely.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Light-based hair removal (IPL and laser)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-21',
    dateModified: '2026-07-21',
    citation: [
      { '@type': 'CreativeWork', name: 'StatPearls (NCBI Bookshelf) — Laser Hair Removal (selective photothermolysis, melanin target, treatment series)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507861/' },
      { '@type': 'CreativeWork', name: 'PMC — The role of lasers and intense pulsed light technology in dermatology (IPL is polychromatic/incoherent and needs more sessions than lasers)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4745852/' },
      { '@type': 'CreativeWork', name: 'PubMed — Nd:YAG laser vs intense pulsed light in Fitzpatrick V and VI skin (darker-skin safety and efficacy)', url: 'https://pubmed.ncbi.nlm.nih.gov/27911117/' },
      { '@type': 'CreativeWork', name: 'FDA — Medical Lasers (permanent hair reduction definition and clearance)', url: 'https://www.fda.gov/radiation-emitting-products/surgical-and-therapeutic-products/medical-lasers' },
      { '@type': 'CreativeWork', name: 'American Academy of Dermatology — 6 ways to remove unwanted hair', url: 'https://www.aad.org/public/everyday-care/skin-care-basics/hair/remove-unwanted-hair' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'IPL vs Laser Hair Removal', item: URL },
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
              <span className="text-gray-900">IPL vs Laser Hair Removal</span>
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
              IPL vs Laser Hair Removal: Difference, Cost, and Which Works (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              They both use light to disable hair follicles, but a laser uses one focused wavelength
              and IPL uses a broad spectrum. That difference changes effectiveness, safety by skin
              tone, and price. Here is how to choose.
            </p>

            {/* Direct-answer lead: self-contained ~70-word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Laser uses a single wavelength; IPL uses broadband light.</strong> Both target
                melanin in the follicle and are FDA-cleared for <strong>permanent hair reduction</strong>,
                not removal. Lasers are generally more efficient per session and safer on darker skin;
                IPL is often the lower-cost option for light skin with dark hair but usually needs more
                sessions. Neither works well on blonde, red, or gray hair. Prices are typical ranges —
                verify with the provider. This is information, not medical advice.
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
                <div className="font-bold text-blue-600 mb-2">IPL (intense pulsed light)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Broad spectrum of wavelengths (~500-1200 nm)</li>
                  <li>• Scattered, less selective energy</li>
                  <li>• Often lower cost per session</li>
                  <li>• At-home devices widely sold</li>
                  <li>• Usually needs more sessions</li>
                  <li>• Higher pigment-change risk on dark skin</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Laser</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Single, coherent wavelength</li>
                  <li>• Focused, follicle-selective energy</li>
                  <li>• Higher cost per session</li>
                  <li>• Device matched to skin type</li>
                  <li>• Often fewer sessions for the same result</li>
                  <li>• Nd:YAG is the safer choice on dark skin</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean IPL if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have light skin with dark hair</li>
                  <li>• You want the lower up-front cost or an at-home device</li>
                  <li>• You are treating a large, low-risk area (legs, arms)</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean laser if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have darker or tanned skin (ask for Nd:YAG)</li>
                  <li>• You want fewer sessions for the same reduction</li>
                  <li>• You are treating the face or a sensitive area</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#how" className="text-blue-600 hover:underline">1. How each technology works</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. Side-by-side comparison</a></li>
              <li><a href="#skin" className="text-blue-600 hover:underline">3. Skin tone and hair color decide most of it</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">4. Cost: per session vs full course</a></li>
              <li><a href="#permanent" className="text-blue-600 hover:underline">5. &quot;Permanent&quot; is a specific FDA term</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to choose safely</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;IPL vs laser&quot; is really one question about physics: how tightly focused is the
              light hitting your follicle? Both methods heat the pigment inside a hair to disable the
              follicle, a process dermatologists call selective photothermolysis. The difference in how
              precisely they deliver that heat is what separates results, safety, and price.
            </p>

            <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Each Technology Works</h2>

            <p className="text-gray-700 mb-4">
              A <strong>laser</strong> produces a single, coherent wavelength of light. Because the beam
              is one color and tightly focused, its energy is absorbed selectively by the melanin
              pigment inside the hair follicle, which converts to heat and damages the follicle&apos;s
              ability to regrow hair. Common medical devices include the alexandrite (755 nm), diode
              (around 800-810 nm), and Nd:YAG (1064 nm) lasers, each suited to different skin tones.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>IPL</strong>, or intense pulsed light, is not a laser. It emits a broad spectrum of
              wavelengths (roughly 500 to 1200 nanometers) that is polychromatic and incoherent, meaning
              the light scatters rather than staying focused. Peer-reviewed dermatology reviews note that
              because IPL spreads its energy across a wider band and area, it typically requires more
              sessions than a laser to reach the same target reduction. Both, importantly, still work by
              heating melanin, so both depend on a color contrast between dark hair and lighter
              surrounding skin.
            </p>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side-by-Side Comparison</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>typical ranges drawn from published clinical literature and
              general market pricing</strong>, not live quotes. Cost varies widely by clinic, city, body
              area, and device — confirm current pricing with the provider.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IPL</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Laser</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Light source</td>
                    <td className="border border-gray-300 px-4 py-3">Broadband, ~500-1200 nm (scattered)</td>
                    <td className="border border-gray-300 px-4 py-3">Single wavelength (focused, coherent)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Selectivity for the follicle</td>
                    <td className="border border-gray-300 px-4 py-3">Lower</td>
                    <td className="border border-gray-300 px-4 py-3">Higher</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sessions to reach target (typical)</td>
                    <td className="border border-gray-300 px-4 py-3">Often more</td>
                    <td className="border border-gray-300 px-4 py-3">Often fewer</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Best skin tone fit</td>
                    <td className="border border-gray-300 px-4 py-3">Lighter skin (I-III) with dark hair</td>
                    <td className="border border-gray-300 px-4 py-3">All tones; Nd:YAG for darker skin (IV-VI)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">In-clinic cost per session (typical range)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100-$350 by area</td>
                    <td className="border border-gray-300 px-4 py-3">~$150-$500+ by area</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">At-home device option</td>
                    <td className="border border-gray-300 px-4 py-3">Common (~$200-$500 one time)</td>
                    <td className="border border-gray-300 px-4 py-3">Fewer; lower-powered than clinic</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FDA claim</td>
                    <td className="border border-gray-300 px-4 py-3">Permanent hair reduction</td>
                    <td className="border border-gray-300 px-4 py-3">Permanent hair reduction</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="skin" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Skin Tone and Hair Color Decide Most of It</h2>

            <p className="text-gray-700 mb-4">
              Because both methods target pigment, your skin tone and hair color matter more than the
              brand name on the machine.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Light skin, dark hair:</strong> the easiest case. IPL and laser both work; IPL can be a cost-effective choice here.</li>
              <li><strong>Darker or tanned skin (Fitzpatrick IV-VI):</strong> IPL carries a higher risk of pigment changes and burns, because its broad spectrum is also absorbed by melanin in the skin. Peer-reviewed studies find the long-pulsed Nd:YAG laser (1064 nm) is generally the safest and most effective option here because it bypasses more surface pigment. If you have deeper skin, ask specifically which device the clinic uses.</li>
              <li><strong>Blonde, red, white, or gray hair:</strong> neither IPL nor laser reliably works, because there is too little pigment to absorb the light. Electrolysis is the pigment-independent alternative.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask about the device, not just the price</h4>
              <p className="text-gray-700">
                A clinic offering only IPL may not be the right fit for darker skin. Before you buy a
                package, ask which specific system they will use on your skin type, and whether they
                offer an Nd:YAG laser if you have deeper skin. Matching the device to your skin is the
                single biggest safety factor.
              </p>
            </div>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost: Per Session vs Full Course</h2>

            <p className="text-gray-700 mb-4">
              The sticker price per session is only half the math. Both methods need a series of
              treatments spaced weeks apart, because they only disable follicles that are in an active
              growth phase at the time of treatment. So the honest comparison is total cost across a
              full course:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>IPL:</strong> often lower per session, but frequently needs more sessions, which can narrow or erase the per-session savings over a full course.</li>
              <li><strong>Laser:</strong> higher per session, but often fewer sessions to reach the same reduction, so the total can be competitive.</li>
              <li><strong>At-home IPL:</strong> a one-time device cost (commonly a few hundred dollars) can be the cheapest route for maintenance on light skin, though results are typically slower and less complete than in-clinic treatment.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              For per-area pricing and how the session series works, see our{' '}
              <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link>.
              These are typical ranges, not quotes — verify current pricing with the provider.
            </p>

            <h2 id="permanent" className="text-2xl font-bold text-gray-900 mt-12 mb-6">&quot;Permanent&quot; Is a Specific FDA Term</h2>

            <p className="text-gray-700 mb-4">
              Marketing often blurs this, so it is worth being precise. The FDA clears laser and IPL
              devices for <strong>permanent hair reduction</strong> — defined as a long-term, stable
              reduction in the number of regrowing hairs measured at 6, 9, and 12 months after a
              treatment regime — not <strong>permanent hair removal</strong>. In other words, both
              methods durably thin and reduce hair, and results can last a long time, but they are not
              cleared to promise that every hair is gone forever. Maintenance sessions are common.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The one method the FDA recognizes for permanent hair removal is electrolysis</strong>,
                which destroys follicles individually and does not depend on pigment. If total, permanent
                removal is your goal, see our{' '}
                <Link href="/guides/laser-hair-removal-vs-electrolysis-cost" className="text-blue-600 hover:underline">laser vs electrolysis cost comparison</Link>.
              </p>
            </div>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose Safely</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Match the device to your skin.</strong> Deeper skin should ask for Nd:YAG; do not accept IPL by default on darker tones.</li>
              <li><strong>Choose a licensed, trained operator.</strong> Technique and settings drive both safety and results more than the machine brand.</li>
              <li><strong>Get a patch test.</strong> A small test spot checks how your skin reacts before you commit to a full area.</li>
              <li><strong>Avoid recent sun or tanning.</strong> Tanned skin raises the risk of burns and pigment changes with both methods.</li>
              <li><strong>Compare a full course, not one session.</strong> Ask how many sessions the provider expects for your area and skin.</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Safety beats the lowest price</h4>
              <p className="text-gray-700">
                Light-based hair removal is safe in trained hands but can cause burns, blistering, and
                lasting pigment changes when the device is mismatched to the skin. A bargain package from
                a clinic that only offers one device type is not a saving if it is wrong for your skin.
                To compare vetted local options, browse the{' '}
                <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link>.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: IPL</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Light skin (Fitzpatrick I-III) with dark hair</li>
                <li>Lower up-front cost, or an at-home maintenance device</li>
                <li>Larger, lower-risk areas like legs and arms</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: cost-conscious hair reduction on light skin with dark hair
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Laser</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Darker or tanned skin (ask for Nd:YAG)</li>
                <li>Fewer sessions to reach the same reduction</li>
                <li>Face or sensitive areas where precision matters</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: efficient, device-matched reduction across a wider range of skin tones
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Identify your skin tone and hair color — that rules most candidates in or out</li>
              <li>If your skin is darker, prioritize a clinic with an Nd:YAG laser</li>
              <li>Ask each provider how many sessions your area typically needs</li>
              <li>Compare the full-course cost, not the single-session headline</li>
              <li>Get a patch test with a licensed operator before committing</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Just want laser numbers?</strong> See our <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link>.</li>
              <li><strong>Want truly permanent removal?</strong> Compare <Link href="/guides/laser-hair-removal-vs-electrolysis-cost" className="text-blue-600 hover:underline">laser vs electrolysis on cost</Link>.</li>
              <li><strong>Other med-spa cost lookups:</strong> our upcoming <Link href="/guides/botox-cost-per-unit" className="text-blue-600 hover:underline">Botox cost per unit</Link> index.</li>
              <li><strong>Browse providers:</strong> compare local options in the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link> or <Link href="/guides" className="text-blue-600 hover:underline">all health guides</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Med Spa Near You</h3>
            <p className="mb-6 text-blue-100">
              Compare local med spas for IPL and laser hair removal, with transparent cash-pay pricing.
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
              <li>• StatPearls (NCBI Bookshelf) — <em>Laser Hair Removal</em> (selective photothermolysis, melanin target, treatment series). <a href="https://www.ncbi.nlm.nih.gov/books/NBK507861/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ncbi.nlm.nih.gov/books/NBK507861</a></li>
              <li>• PMC — <em>The role of lasers and intense pulsed light technology in dermatology</em> (IPL polychromatic/incoherent; more sessions than lasers). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4745852/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">pmc.ncbi.nlm.nih.gov/articles/PMC4745852</a></li>
              <li>• PubMed — <em>Nd:YAG laser vs intense pulsed light in Fitzpatrick V and VI skin</em> (darker-skin safety and efficacy). <a href="https://pubmed.ncbi.nlm.nih.gov/27911117/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">pubmed.ncbi.nlm.nih.gov/27911117</a></li>
              <li>• FDA — <em>Medical Lasers</em> (permanent hair reduction definition and clearance). <a href="https://www.fda.gov/radiation-emitting-products/surgical-and-therapeutic-products/medical-lasers" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">fda.gov/radiation-emitting-products</a></li>
              <li>• American Academy of Dermatology — <em>6 ways to remove unwanted hair</em>. <a href="https://www.aad.org/public/everyday-care/skin-care-basics/hair/remove-unwanted-hair" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">aad.org</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Effectiveness varies by skin tone, hair color, and provider technique. Prices are typical
              ranges, not quotes — confirm current pricing and candidacy with a licensed provider.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Hair Removal Pricing Cheat Sheet"
            description="IPL vs laser: how to match the device to your skin and compare a full course, not one session."
            source="guide_ipl_vs_laser_hair_removal"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
