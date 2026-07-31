import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Birth Control Cost Without Insurance (2026): Cash Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/birth-control-cost-without-insurance' },
  description: 'Birth control cost without insurance in 2026 — pills from ~$7/month via telehealth, OTC Opill at $19.99, IUD and implant cash prices, and $0 Title X clinics.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does birth control cost without insurance?',
    answer: 'It ranges from nearly free to four figures depending on the method. Generic pills run about $7-$50 a month cash (telehealth services list pills from $7-$18/month, and pharmacy discount coupons bring common generics under $10), the OTC pill Opill retails at $19.99/month, the shot costs roughly $40-$150 per injection plus any visit fee, and long-acting methods are big upfront: IUDs about $500-$1,800 all-in and the Nexplanon implant about $800-$1,300. Title X clinics offer contraception free or sliding-scale based on income. Prices vary by pharmacy and provider — verify before you pay.',
  },
  {
    question: 'What is the cheapest birth control without insurance?',
    answer: 'Among published cash prices: generic pills through telehealth services (Pandia Health lists pills from about $7-$15/month, Hers from $12, Nurx from $15) or through a pharmacy discount coupon (Sprintec has been listed as low as ~$7-$9 with GoodRx/SingleCare codes). The OTC option, Opill, is $19.99/month with no prescription or visit needed. And if your income qualifies, a Title X family planning clinic can be $0. Over multiple years, an IUD can also end up cheapest per year — see the long-acting math. Which method is right for you is a clinical decision to make with a provider.',
  },
  {
    question: 'How much does an IUD cost without insurance?',
    answer: 'Planned Parenthood puts the all-in cash cost — device, exam, insertion, and follow-up — at roughly $500-$1,800. Published device figures: hormonal IUDs like Mirena around $1,200 and Kyleena around $1,400 before procedure fees, and the copper Paragard around $1,167-$1,300, with insertion typically adding $150-$250 at private practices. Sliding-scale programs matter most here: Title X clinics and Planned Parenthood discount long-acting methods based on income, sometimes dramatically. Get the all-in quote — device plus insertion plus visit — before scheduling.',
  },
  {
    question: 'Can I get birth control without seeing a doctor?',
    answer: 'Two ways. Opill — a progestin-only pill — is FDA-approved for over-the-counter sale with no prescription, at a suggested retail of $19.99/month ($49.99 for three months). For prescription methods, telehealth services handle the consult online: Nurx charges a $28 consultation, Twentyeight Health $26, Pandia Health $35, and services like Wisp and Hers bundle the consult into the medication price. Emergency contraception (Plan B and generics) is also OTC. A periodic clinical check-in is still wise, and some situations require in-person care — the online questionnaires screen for exactly that.',
  },
  {
    question: 'Is an IUD cheaper than the pill long-term?',
    answer: 'Often, yes — it depends on which pill price you compare. Using published figures: a ~$1,000 IUD amortizes to about $200/year over five years, versus about $420/year for a $35/month cash-price generic pill — roughly $1,100 cheaper over five years, breaking even around two and a half years. But against a heavily discounted generic (~$7-$9/month with coupons, under $100/year), monthly pills stay cheaper. The honest summary: long-acting methods win against typical pill prices, and lose against the absolute cheapest ones. Choose the method clinically first, then optimize the price.',
  },
  {
    question: 'Is birth control HSA or FSA eligible?',
    answer: 'Yes, broadly. Prescription contraceptives — pills, patch, ring, shot, IUDs, implants — are qualified medical expenses payable with HSA/FSA funds, and so are OTC options: Opill is HSA/FSA eligible, as are Plan B and generic emergency contraception, plus condoms and spermicide. Paying with pre-tax dollars effectively discounts the cost by your tax rate. Keep receipts and confirm details with your plan administrator.',
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

export default function BirthControlCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Birth Control Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What birth control costs without insurance in 2026 — cash prices by method, OTC Opill, telehealth services with published prices, Title X sliding-scale clinics, and the long-acting cost math.',
    url: 'https://vitalityscout.com/guides/birth-control-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/birth-control-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Contraception' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'GoodRx — annual cost of birth control; per-method cash prices', url: 'https://www.goodrx.com/conditions/birth-control/annual-cost-of-birth-control' },
      { '@type': 'CreativeWork', name: 'Planned Parenthood — how much do IUDs and other methods cost', url: 'https://www.plannedparenthood.org/blog/how-much-do-iuds-cost-without-insurance' },
      { '@type': 'CreativeWork', name: 'KFF — cost and coverage of Opill, the first OTC daily oral contraceptive', url: 'https://www.kff.org/womens-health-policy/three-charts-the-cost-and-coverage-of-opill-the-first-fda-approved-over-the-counter-daily-oral-contraceptive-pill-in-the-united-states/' },
      { '@type': 'CreativeWork', name: 'HHS Office of Population Affairs — Title X family planning program', url: 'https://opa.hhs.gov/' },
      { '@type': 'CreativeWork', name: 'Nurx — how much does birth control cost', url: 'https://www.nurx.com/faq/how-much-does-birth-control-cost/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/birth-control-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/birth-control-cost-without-insurance' };

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
              <span className="text-gray-900">Birth Control Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/womens-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Women&apos;s Health Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Women&apos;s Health
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Birth Control Cost Without Insurance: Every Method, Every Route
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Between a $19.99 over-the-counter pill, $7/month telehealth generics, and $0
              sliding-scale clinics, paying cash for contraception has never had more workable
              routes. Here are the real published prices for every method.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, generic birth control pills run about{' '}
                <strong>$7-$50/month</strong> (telehealth services list pills from{' '}
                <strong>$7-$18/month</strong>), the OTC pill <strong>Opill is $19.99/month</strong>,
                the shot costs ~<strong>$40-$150 per injection</strong>, IUDs about{' '}
                <strong>$500-$1,800 all-in</strong>, and the implant{' '}
                <strong>$800-$1,300</strong>. Title X clinics offer contraception{' '}
                <strong>free or sliding-scale</strong> by income. Estimates to verify with the
                pharmacy or provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-method" className="text-blue-600 hover:underline">1. Cash price by method</a></li>
              <li><a href="#opill" className="text-blue-600 hover:underline">2. Opill: the no-prescription option</a></li>
              <li><a href="#telehealth" className="text-blue-600 hover:underline">3. Telehealth services with published prices</a></li>
              <li><a href="#free" className="text-blue-600 hover:underline">4. Free and sliding-scale clinics (Title X)</a></li>
              <li><a href="#long-acting" className="text-blue-600 hover:underline">5. The long-acting math: IUD vs pills</a></li>
              <li><a href="#ec" className="text-blue-600 hover:underline">6. Emergency contraception prices</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to pay the least</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Contraception pricing without insurance is a story of extremes: the same protection
              can cost $84 a year or $400+ a month depending on method, brand, and where the
              prescription gets filled. The good news is that this is one of the few areas of
              healthcare with genuinely abundant cheap routes — over-the-counter, telehealth,
              discount coupons, and a federal program built specifically to make it affordable.
            </p>

            <h2 id="by-method" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash Price by Method</h2>

            <p className="text-gray-700 mb-4">
              All figures are <strong>published estimates as of mid-2026</strong> — pharmacy cash
              prices and clinic fees vary widely. Which method fits you is a clinical decision to
              make with a provider; this table is the price layer, not the recommendation.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Method</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pills (generic)</td>
                    <td className="border border-gray-300 px-4 py-3">~$7 - $50/month</td>
                    <td className="border border-gray-300 px-4 py-3">Coupon codes bring common generics under $10/pack</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Opill (OTC)</td>
                    <td className="border border-gray-300 px-4 py-3">$19.99/month ($49.99 for 3 months)</td>
                    <td className="border border-gray-300 px-4 py-3">No prescription or visit needed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Patch (Xulane)</td>
                    <td className="border border-gray-300 px-4 py-3">~$37 with coupon - $151 retail/month</td>
                    <td className="border border-gray-300 px-4 py-3">Wide coupon-vs-retail gap</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ring (generic EluRyng)</td>
                    <td className="border border-gray-300 px-4 py-3">~$42 with coupon - $112 retail/ring</td>
                    <td className="border border-gray-300 px-4 py-3">Brand NuvaRing ~$200+/ring</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Shot (Depo-Provera / generic)</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 - $150 per injection (4x/year)</td>
                    <td className="border border-gray-300 px-4 py-3">Office visit can add $50-$250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hormonal IUD (Mirena, Kyleena)</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $1,800 all-in</td>
                    <td className="border border-gray-300 px-4 py-3">Device ~$1,200-$1,400 + insertion; lasts years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Copper IUD (Paragard)</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,167 - $1,300 device + $150-$250 insertion</td>
                    <td className="border border-gray-300 px-4 py-3">Hormone-free; lasts up to a decade</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Implant (Nexplanon)</td>
                    <td className="border border-gray-300 px-4 py-3">~$800 - $1,300 total</td>
                    <td className="border border-gray-300 px-4 py-3">Device + insertion; sliding scale can reach $0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="opill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Opill: The No-Prescription Option</h2>

            <p className="text-gray-700 mb-4">
              Opill — a progestin-only daily pill — is FDA-approved for over-the-counter sale, no
              prescription, no visit, no age restriction. The manufacturer&apos;s suggested retail
              is <strong>$19.99 for one month, $49.99 for three</strong>, with a six-month supply
              around $89.99 online, and it&apos;s HSA/FSA eligible. For someone paying cash, it
              removes the two costs that used to gate the pill: the appointment and the
              prescription. Progestin-only pills aren&apos;t the right fit for everyone — the
              package screening questions matter, and a clinician conversation is worth having if
              you&apos;re unsure.
            </p>

            <h2 id="telehealth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Telehealth Services With Published Prices</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Consult fee</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published Rx price (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pandia Health</td>
                    <td className="border border-gray-300 px-4 py-3">$35 (delivery) / $70 (pharmacy pickup)</td>
                    <td className="border border-gray-300 px-4 py-3">Pills from ~$7-$15/month</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hers</td>
                    <td className="border border-gray-300 px-4 py-3">Included</td>
                    <td className="border border-gray-300 px-4 py-3">Pills from $12/month</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nurx</td>
                    <td className="border border-gray-300 px-4 py-3">$28 (covers a year) + $3/month support fee</td>
                    <td className="border border-gray-300 px-4 py-3">Pills from $15/month</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Twentyeight Health</td>
                    <td className="border border-gray-300 px-4 py-3">$26 evaluation</td>
                    <td className="border border-gray-300 px-4 py-3">Pills from $18/pack; ring $210</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wisp</td>
                    <td className="border border-gray-300 px-4 py-3">Bundled into medication price</td>
                    <td className="border border-gray-300 px-4 py-3">~$15-$45/month by formulation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Planned Parenthood Direct (app)</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$20-$25/pack, free delivery (3-month min)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">GoodRx Care</td>
                    <td className="border border-gray-300 px-4 py-3">$59 ($19 with Gold)</td>
                    <td className="border border-gray-300 px-4 py-3">Rx filled at pharmacy with coupon pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The pattern: the consult is cheap or bundled, and the generics are commodity-priced.
              For other cash-pay women&apos;s health services — from menopause care to at-home
              hormone testing — see the{' '}
              <Link href="/womens-health" className="text-blue-600 hover:underline">women&apos;s health hub</Link>{' '}
              and the <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link>.
            </p>

            <h2 id="free" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Free and Sliding-Scale Clinics (Title X)</h2>

            <p className="text-gray-700 mb-4">
              Title X is the federal grant program dedicated to family planning, funding{' '}
              <strong>4,000+ clinics</strong> nationwide. The fee rules are concrete: services are{' '}
              <strong>free at or below 100% of the federal poverty level</strong>, with graduated
              sliding-scale discounts up to 250%. Planned Parenthood health centers also use
              income-based sliding scales — which matters most for the expensive long-acting
              methods, where the published $0-$2,300 implant range collapses toward the bottom for
              qualifying incomes. If the cash prices above are out of reach, a Title X clinic
              (findable via the HHS Office of Population Affairs clinic locator) is the designed
              answer, not a workaround.
            </p>

            <h2 id="long-acting" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Long-Acting Math: IUD vs Pills</h2>

            <p className="text-gray-700 mb-4">
              Using published inputs: a ~$1,000 IUD amortizes to about{' '}
              <strong>$200/year over five years</strong>, versus about{' '}
              <strong>$420/year</strong> for a typical $35/month cash-price generic pill — roughly
              $1,100 cheaper over five years, with break-even around two and a half years. But run
              the same math against a coupon-priced generic at ~$7-$9/pack (
              <strong>under $100/year</strong>) and monthly pills stay cheaper indefinitely. The
              honest conclusion: long-acting methods beat <em>typical</em> pill prices and lose to
              the <em>cheapest</em> ones — so pick the method that fits you clinically, then
              optimize the price of that method. (This math is our calculation from the cited
              figures, not a quoted statistic.)
            </p>

            <h2 id="ec" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Emergency Contraception Prices</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Generic levonorgestrel:</strong> ~$11-$40 over the counter, often under $15 at online and discount pharmacies.</li>
              <li><strong>Brand Plan B One-Step:</strong> ~$40-$50 at major chains.</li>
              <li><strong>ella (ulipristal, prescription-only):</strong> published telehealth pricing around $45 plus a ~$15 consult via Wisp.</li>
              <li><strong>Timing matters clinically</strong> — effectiveness windows differ by product; read the labeling and involve a clinician or pharmacist with questions. All of these are HSA/FSA eligible.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for Birth Control</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Price the generic with a coupon first.</strong> Discount codes routinely cut cash pill prices to $7-$25/pack — check before assuming telehealth is cheaper.</li>
              <li><strong>Compare the telehealth bundles.</strong> A $26-$35 consult plus $7-$18/month generics, delivered, is the low-effort benchmark.</li>
              <li><strong>Consider Opill</strong> if a progestin-only pill fits — no visit fee at all.</li>
              <li><strong>Use a Title X clinic if income-eligible</strong> — especially for IUDs and implants, where sliding scale saves the most.</li>
              <li><strong>Get the all-in quote for long-acting methods:</strong> device + insertion + visit, and ask about manufacturer patient-assistance programs.</li>
              <li><strong>Pay with HSA/FSA funds</strong> — prescription and OTC contraception both qualify.</li>
            </ol>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Women&apos;s Health Services</h3>
            <p className="mb-6 text-blue-100">
              Birth control, menopause care, and hormone testing with transparent pricing — compared in one place.
            </p>
            <Link
              href="/womens-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Women&apos;s Health
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

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We
              are not affiliated with the pharmacies, telehealth services, or clinics named above.
              Pricing is based on publicly available data and provider websites and is presented as
              estimates that vary by pharmacy, provider, location, and current promotions — always
              verify the current price before purchasing. Choosing a contraceptive method involves
              individual medical factors; consult a licensed clinician or pharmacist about which
              method is appropriate for you, and read OTC product labeling carefully. VitalityScout
              may earn a commission from some links, at no additional cost to you, and this never
              affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• GoodRx — goodrx.com (per-method cash prices, coupon pricing, annual cost analysis)</li>
              <li>• Planned Parenthood — plannedparenthood.org (method cost ranges, sliding scale, PP Direct)</li>
              <li>• KFF — kff.org (Opill cost and coverage analysis)</li>
              <li>• Perrigo / Opill — opill.com (OTC retail pricing, HSA/FSA eligibility)</li>
              <li>• HHS Office of Population Affairs / Guttmacher — Title X program and fee structure</li>
              <li>• Nurx / Pandia Health / Twentyeight Health / Wisp / Hers — published consult and Rx pricing</li>
              <li>• SingleCare / Drugs.com — device and pharmacy price guides (IUDs, ring, patch)</li>
              <li>• Bedsider — bedsider.org (method cost ranges)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Women's Health Guide"
            description="Method-by-method price benchmarks and the coupon-vs-telehealth-vs-clinic decision tree."
            source="guide_birth_control_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
