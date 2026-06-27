import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Botox vs Fillers Cost (2026): Per Unit vs Syringe' },
  alternates: { canonical: 'https://vitalityscout.com/guides/botox-vs-fillers-cost' },
  description:
    'Botox vs dermal fillers cost compared: per unit vs per syringe pricing, how long each lasts, what they treat, and how to save safely at a med spa.',
  keywords: [
    'botox vs fillers cost',
    'botox vs dermal fillers',
    'botox cost per unit',
    'dermal filler cost per syringe',
    'how long does botox last vs fillers',
    'difference between botox and fillers',
    'cheaper botox or fillers',
  ],
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is Botox or filler cheaper?',
    answer:
      'Per appointment, Botox is usually cheaper. Botox is priced per unit (commonly about $10-$20 a unit, so a typical 20-40 unit treatment runs roughly $200-$600), while dermal fillers are priced per syringe (commonly about $600-$1,200 for a hyaluronic-acid syringe, and many areas need more than one). But Botox is repeated every 3-6 months, while a syringe of filler can last a year or more, so the cheaper option per year depends on what you are treating and how often you maintain it. These are estimates that vary by provider and city — confirm current pricing at the practice.',
  },
  {
    question: 'How is Botox priced versus dermal fillers?',
    answer:
      'Botox is sold per unit; fillers are sold per syringe. With Botox you pay for the number of units injected (per-unit prices commonly run about $10-$20, sometimes higher in major cities), so the bill scales with how many muscles are treated. With filler you pay per syringe of product (a hyaluronic-acid syringe commonly runs about $600-$1,200), and the bill scales with how much volume you want restored. Always ask whether a quote is per unit, per syringe, or a flat per-area price before you book.',
  },
  {
    question: 'How long does Botox last compared to fillers?',
    answer:
      'Botox typically lasts about 3-6 months. Dermal fillers last longer and the range depends on the product and area: hyaluronic-acid lip filler often 6-12 months, cheek filler (such as Voluma) 12-24 months, Radiesse about 12-18 months, Sculptra roughly 2-5 years, and Bellafill 5+ years. High-movement areas like the lips break down filler faster. Longevity varies by person and provider — your injector can estimate what to expect for your treatment.',
  },
  {
    question: 'What does Botox treat versus what fillers treat?',
    answer:
      'Botox relaxes the muscles that create dynamic wrinkles — lines that appear when you move, such as forehead lines, frown lines between the brows, and crow\'s feet. Dermal fillers add volume to treat static lines and lost fullness — areas like the cheeks, lips, under-eye hollows, and nasolabial folds. They address different concerns, which is why many people combine them. Whether either is appropriate for you is a clinical decision to make with a licensed injector.',
  },
  {
    question: 'Can you get Botox and fillers at the same time?',
    answer:
      'Many med spas and dermatology practices offer both in one visit because they treat different things — Botox for movement-driven lines and filler for volume. A combined session can cost more up front (RealSelf reviewers report combination treatments running well over $1,000), but it can also reduce repeat appointment fees. Whether to combine them, and in what amounts, is a clinical judgment for your injector, not a fixed package. Confirm the full itemized cost before treatment.',
  },
  {
    question: 'How can I save on Botox or fillers safely?',
    answer:
      'Compare itemized quotes (per unit for Botox, per syringe for filler) at a few reputable, licensed providers; ask about the manufacturer loyalty program (Allē for Botox and Juvederm, ASPIRE for Dysport and Restylane) for points and seasonal offers; and weigh longevity, not just sticker price — a longer-lasting filler can cost less per year. Avoid the cheapest possible injector or unverified product, since safety and technique matter most with injectables. Prices and promotions change often, so verify the current cost with the provider.',
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

export default function BotoxVsFillersCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Botox vs Fillers Cost: Per Unit vs Per Syringe Compared',
    description:
      'A practical comparison of Botox and dermal filler cost — per-unit vs per-syringe pricing, how long each lasts, what each treats, and how to save safely at a med spa.',
    url: 'https://vitalityscout.com/guides/botox-vs-fillers-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/botox-vs-fillers-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Botox and dermal filler injectable treatments' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'American Society of Plastic Surgeons — What\'s behind the cost of Botox and injectable fillers', url: 'https://www.plasticsurgery.org/news/blog/whats-behind-the-cost-of-botox-and-injectable-fillers' },
      { '@type': 'CreativeWork', name: 'RealSelf — How much do dermal fillers cost now', url: 'https://www.realself.com/nonsurgical/dermal-fillers/cost' },
      { '@type': 'CreativeWork', name: 'RealSelf — How much does Botox cost now', url: 'https://www.realself.com/nonsurgical/botox/cost' },
      { '@type': 'CreativeWork', name: 'GoodRx — Botox vs. dermal fillers: uses, cost, side effects', url: 'https://www.goodrx.com/health-topic/dermatology/botox-vs-fillers-uses-side-effects-cost-differences' },
      { '@type': 'CreativeWork', name: 'SkinSpirit — Botox treatment and pricing', url: 'https://www.skinspirit.com/treatments/botox' },
      { '@type': 'CreativeWork', name: 'Ideal Image — medical spa treatment pricing', url: 'https://www.idealimage.com/treatments/pricing' },
      { '@type': 'CreativeWork', name: 'LaserAway — treatment pricing and packages', url: 'https://www.laseraway.com/pricing/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/botox-vs-fillers-cost#faq', url: 'https://vitalityscout.com/guides/botox-vs-fillers-cost' };

  return (
    <>
      <Navigation />
      <SidebarShell>
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
              <span className="text-gray-900">Botox vs Fillers Cost</span>
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
              Botox vs Fillers Cost: Per Unit vs Per Syringe (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              They are priced differently, last for different lengths of time, and treat different
              things. Here is how Botox and dermal fillers actually compare on cost, longevity, and
              what each one is for — so you can budget before you book.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Botox is priced per unit and dermal fillers per syringe.</strong> Botox runs
                roughly <strong>$10-$20 a unit</strong> (a typical treatment about $200-$600) and lasts
                <strong> 3-6 months</strong>. A hyaluronic-acid filler syringe commonly runs
                <strong> $600-$1,200</strong> and lasts <strong>6 months to 2+ years</strong> depending
                on the product. Botox relaxes movement wrinkles; fillers replace lost volume. Per visit
                Botox is cheaper; per year it depends. Prices are estimates — verify with the provider.
                This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
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
                <div className="font-bold text-blue-600 mb-2">Botox (neuromodulator)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Priced per unit (~$10-$20/unit estimate)</li>
                  <li>• Typical treatment ~$200-$600 (estimate)</li>
                  <li>• Relaxes muscles (dynamic wrinkles)</li>
                  <li>• Forehead, frown lines, crow&apos;s feet</li>
                  <li>• Lasts ~3-6 months</li>
                  <li>• Repeat every 3-4 months for upkeep</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Dermal fillers</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Priced per syringe (~$600-$1,200 estimate)</li>
                  <li>• Often need more than one syringe</li>
                  <li>• Adds volume (static lines, hollows)</li>
                  <li>• Cheeks, lips, under-eyes, folds</li>
                  <li>• Lasts ~6 months to 2+ years</li>
                  <li>• Fewer repeat visits than Botox</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean Botox if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your concern is movement lines (forehead, brows, eyes)</li>
                  <li>• You want the lower per-visit cost</li>
                  <li>• You are fine with touch-ups every few months</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean fillers if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your concern is lost volume (cheeks, lips, hollows)</li>
                  <li>• You want results that last a year or more</li>
                  <li>• You prefer fewer appointments per year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#different" className="text-blue-600 hover:underline">1. Two different treatments, two pricing models</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">2. Cost compared: per unit vs per syringe</a></li>
              <li><a href="#duration" className="text-blue-600 hover:underline">3. How long each one lasts</a></li>
              <li><a href="#treats" className="text-blue-600 hover:underline">4. What each one actually treats</a></li>
              <li><a href="#per-year" className="text-blue-600 hover:underline">5. Cost per year, not just per visit</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to save safely at a med spa</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Things to know before you book</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">8. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Botox or fillers&quot; sounds like one decision, but they are two different products
              that solve two different problems and are billed in two different ways. Confusing the two
              is how people end up surprised at checkout. This guide breaks down how each is priced, how
              long each lasts, what each treats, and how to compare honest quotes before you sit in the
              chair.
            </p>

            <h2 id="different" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Two Different Treatments, Two Pricing Models</h2>

            <p className="text-gray-700 mb-4">
              Botox is a <strong>neuromodulator</strong> — a purified botulinum toxin that temporarily
              relaxes the muscles that crease your skin when you move. Dermal fillers are
              <strong> volumizers</strong> — gels (most commonly hyaluronic acid) injected to restore or
              add fullness. Because they do different jobs, the industry prices them differently:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Botox is sold per unit.</strong> You pay for the number of units injected, so the bill scales with how many muscles are treated and how strong the effect needs to be.</li>
              <li><strong>Fillers are sold per syringe.</strong> You pay per syringe of product, so the bill scales with how much volume you want — and many areas need more than one syringe.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters at checkout:</strong> a &quot;$12 a unit&quot; Botox price and a
                &quot;$750 a syringe&quot; filler price are not comparable line items. Always ask whether
                a quote is per unit, per syringe, or a flat per-area price, and how many units or
                syringes your treatment is expected to need.
              </p>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Compared: Per Unit vs Per Syringe</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from published industry pricing and patient-
              reported data</strong> (American Society of Plastic Surgeons, RealSelf, and med-spa pricing
              guides), not live quotes. Use them to set expectations, then confirm the current number
              with the provider — prices move with city, injector credentials, and current promotions.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Botox</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dermal fillers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">How it is priced</td>
                    <td className="border border-gray-300 px-4 py-3">Per unit</td>
                    <td className="border border-gray-300 px-4 py-3">Per syringe</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Unit / syringe price (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$10 - $20 per unit</td>
                    <td className="border border-gray-300 px-4 py-3">~$600 - $1,200 per HA syringe</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Typical single treatment (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">~$600 - $1,500+ (often multiple syringes)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Patient-reported average</td>
                    <td className="border border-gray-300 px-4 py-3">Varies widely by area (RealSelf: ~$180 micro to $2,000 multi-area)</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,628 average per RealSelf reviewers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Big-city premium</td>
                    <td className="border border-gray-300 px-4 py-3">Higher per unit (e.g., NYC averages well above Salt Lake City)</td>
                    <td className="border border-gray-300 px-4 py-3">Coastal metros often 15-25% above national ranges</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> a single Botox appointment is almost always cheaper than a
              single filler appointment, because filler uses more product per session and is sold in
              larger price increments. The ASPS has reported hyaluronic-acid filler averaging around
              <strong> $682 per syringe</strong> in its data, while Botox runs about
              <strong> $10-$15 per unit</strong> with a 30-40 unit forehead-and-eye treatment landing
              roughly <strong>$300-$600</strong>. Patient-reported averages on RealSelf run higher
              (about <strong>$1,628</strong> for fillers) because many people treat several areas or
              combine injectables.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch the syringe count</h4>
              <p className="text-gray-700">
                A per-syringe filler price can look reasonable until you learn an area needs two or three
                syringes. Cheeks, jawline, and full-face volumizing commonly use multiple syringes.
                Always ask for the expected total syringe count — and the all-in price — before you
                commit, not the single-syringe headline number.
              </p>
            </div>

            <h2 id="duration" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Long Each One Lasts</h2>

            <p className="text-gray-700 mb-4">
              Longevity is where the value math flips. Botox is the shortest-lasting injectable; fillers
              last from several months to several years depending on the product and where it is placed.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical longevity (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Botox / Dysport / Xeomin</td>
                    <td className="border border-gray-300 px-4 py-3">Neuromodulator</td>
                    <td className="border border-gray-300 px-4 py-3">~3 - 6 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lip filler (HA)</td>
                    <td className="border border-gray-300 px-4 py-3">Hyaluronic acid</td>
                    <td className="border border-gray-300 px-4 py-3">~6 - 12 months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cheek filler (e.g., Voluma)</td>
                    <td className="border border-gray-300 px-4 py-3">Hyaluronic acid</td>
                    <td className="border border-gray-300 px-4 py-3">~12 - 24 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Radiesse</td>
                    <td className="border border-gray-300 px-4 py-3">Calcium hydroxylapatite</td>
                    <td className="border border-gray-300 px-4 py-3">~12 - 18 months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sculptra</td>
                    <td className="border border-gray-300 px-4 py-3">Poly-L-lactic acid (collagen stimulator)</td>
                    <td className="border border-gray-300 px-4 py-3">~2 - 5 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Bellafill</td>
                    <td className="border border-gray-300 px-4 py-3">PMMA (semi-permanent)</td>
                    <td className="border border-gray-300 px-4 py-3">~5+ years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              High-movement areas like the lips metabolize hyaluronic-acid filler faster, so lip filler
              sits at the short end of the filler range. Metabolism, lifestyle, and sun exposure all
              affect how long any injectable lasts, so treat these as typical ranges, not guarantees —
              your injector can give a realistic estimate for your treatment.
            </p>

            <h2 id="treats" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Each One Actually Treats</h2>

            <p className="text-gray-700 mb-4">
              The cleanest way to decide is to match the product to the type of wrinkle or concern:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Botox — dynamic (movement) wrinkles</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Forehead lines (horizontal lines when you raise your brows)</li>
              <li>Frown lines / &quot;11s&quot; between the eyebrows</li>
              <li>Crow&apos;s feet at the outer corners of the eyes</li>
              <li>Other movement-driven lines a clinician identifies as appropriate</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Fillers — static lines and lost volume</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Cheek volume loss that comes with age</li>
              <li>Lip volume and definition</li>
              <li>Under-eye hollows</li>
              <li>Nasolabial folds and marionette lines (static creases from volume loss)</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why people combine them:</strong> Botox handles the lines you make by moving your
                face; filler handles the lines and hollows that come from losing volume. Many treatment
                plans use both for a balanced result. Whether either or both is appropriate for you is a
                clinical decision to make with a licensed injector — not a self-diagnosis.
              </p>
            </div>

            <h2 id="per-year" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Per Year, Not Just Per Visit</h2>

            <p className="text-gray-700 mb-4">
              The per-visit price is misleading because the two treatments are repeated on very different
              schedules. Botox is cheaper each time but needs touch-ups roughly every 3-4 months; a
              filler syringe costs more up front but can last a year or longer. To compare honestly,
              estimate the annual cost:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Botox example (illustrative):</strong> a ~$400 treatment repeated 3 times a year is roughly $1,200/year — for movement lines only.</li>
              <li><strong>Filler example (illustrative):</strong> a ~$800 cheek syringe lasting 18-24 months averages roughly $400-$530/year — for volume only.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These are illustrative math, not quotes — your real numbers depend on units, syringes, and
              how your body holds each product. The takeaway: Botox usually wins on per-visit price,
              while a long-lasting filler can win on cost per year for the concern it treats. They are
              not interchangeable, so the &quot;cheaper&quot; one is whichever matches what you actually
              want to fix.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save Safely at a Med Spa</h2>

            <p className="text-gray-700 mb-4">
              Injectables are a market where the cheapest option is rarely the smartest one — technique
              and product authenticity matter for both safety and results. Within safe bounds, here is
              how to lower the bill:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get itemized quotes:</strong> per unit for Botox, per syringe for filler, and the expected count of each, from a few licensed providers.</li>
              <li><strong>Use the manufacturer loyalty programs:</strong> Allergan&apos;s Allē (Botox, Juvederm) and Galderma&apos;s ASPIRE (Dysport, Restylane) offer points and periodic offers that lower the effective price.</li>
              <li><strong>Weigh longevity:</strong> a longer-lasting filler can cost less per year than repeated short-acting treatment.</li>
              <li><strong>Compare transparent-pricing providers:</strong> national chains publish standardized pricing you can use as a benchmark.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Among providers that publish or standardize pricing for these treatments are
              <strong> SkinSpirit</strong> (a nationwide injectables-focused med-spa group with a
              standard per-unit Botox price and a membership that discounts services),
              <strong> Ideal Image</strong> (a national med-spa chain that publishes treatment pricing),
              and <strong> LaserAway</strong> (a national chain that lists transparent pricing for
              injectables and other treatments). Use their published rates as a benchmark — then confirm
              the exact cost for your treatment at the location near you, because pricing varies by site
              and changes over time.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Safety beats the lowest price</h4>
              <p className="text-gray-700">
                Choose a licensed, qualified injector and verify the product is genuine and FDA-approved.
                A bargain price from an unverified injector or unverified product is not a saving — the
                risk and the cost of correcting a bad result outweigh the discount. To compare nearby,
                vetted options, browse the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link>.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Book</h2>

            <p className="text-gray-700 mb-4">
              Both treatments are common and generally well tolerated, but they carry real
              considerations. A balanced view:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Both are temporary (except semi-permanent fillers).</strong> Budget for maintenance, not a one-time cost.</li>
              <li><strong>Side effects are possible.</strong> Common, usually temporary effects include bruising, swelling, and tenderness; less common effects differ by product. Discuss risks with your injector.</li>
              <li><strong>Results depend on the injector.</strong> Technique drives outcome and safety more than brand. Credentials matter.</li>
              <li><strong>No injectable guarantees a specific outcome.</strong> Longevity and effect vary by person.</li>
              <li><strong>Prices and promotions change.</strong> The number you see today may differ next month or in another city.</li>
            </ul>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Botox</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your concern is movement lines — forehead, frown lines, crow&apos;s feet</li>
                <li>You want the lower per-visit cost</li>
                <li>You are comfortable returning every few months for upkeep</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: smoothing expression lines on a smaller per-visit budget
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Dermal fillers</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your concern is lost volume — cheeks, lips, under-eyes, folds</li>
                <li>You want results that last a year or more</li>
                <li>You prefer fewer appointments per year</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: restoring volume with longer-lasting, less frequent treatments
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Name the concern: is it a line that appears when you move (Botox) or lost volume / a line at rest (filler)?</li>
              <li>Get itemized quotes — per unit and per syringe — from a few licensed providers the same week</li>
              <li>Estimate the cost per year, not just per visit, using each product&apos;s longevity</li>
              <li>Pick the qualified injector you trust, then apply a loyalty program or current offer</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Just want Botox numbers?</strong> See our <Link href="/guides/botox-cost-guide" className="text-blue-600 hover:underline">Botox cost guide</Link> for per-unit pricing and units by area.</li>
              <li><strong>Other med-spa treatments:</strong> our <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link> covers per-session vs package pricing.</li>
              <li><strong>Prescription skincare:</strong> see <Link href="/guides/tretinoin-online" className="text-blue-600 hover:underline">how to get tretinoin online</Link> for an at-home anti-aging option.</li>
              <li><strong>Browse providers:</strong> compare local options in the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link> or <Link href="/guides" className="text-blue-600 hover:underline">all health guides</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Med Spa Near You</h3>
            <p className="mb-6 text-blue-100">
              Compare local med spas for Botox and dermal fillers, with transparent cash-pay pricing.
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
              <li>• American Society of Plastic Surgeons — What&apos;s behind the cost of Botox and injectable fillers (per-unit Botox and per-syringe filler averages, duration)</li>
              <li>• RealSelf — How much do dermal fillers cost now (patient-reported average, Worth It Rating)</li>
              <li>• RealSelf — How much does Botox cost now (per-unit range, geographic variation)</li>
              <li>• GoodRx — Botox vs. dermal fillers: uses, cost, side effects (what each treats, pricing model)</li>
              <li>• SkinSpirit — Botox treatment and pricing (national injectables med-spa group, membership)</li>
              <li>• Ideal Image — medical spa treatment pricing (national chain published pricing)</li>
              <li>• LaserAway — treatment pricing and packages (national chain transparent pricing)</li>
              <li>• Published med-spa filler pricing guides and filler-longevity references (Sculptra, Bellafill, Radiesse, Voluma duration)</li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Injectables Pricing Cheat Sheet"
            description="Botox vs fillers: how to read a per-unit vs per-syringe quote and compare cost per year."
            source="guide_botox_vs_fillers_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
