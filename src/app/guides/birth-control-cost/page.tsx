import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/birth-control-cost';
const PAGE_TITLE = 'Birth Control Cost Without Insurance (2026): Real Prices';
const PAGE_DESCRIPTION =
  'Birth control without insurance in 2026: Opill is $19.99 a month over the counter, online prescribers list pills from $15 a pack, and IUDs can cost $500-$1,800.';
const PRICES_CHECKED = 'October 18, 2026';

const BIRTH_CONTROL_BRANDS = [
  {
    name: 'Opill',
    providerId: 'opill',
    category: 'pharmacy',
    price: '$19.99 / 1-month pack',
    blurb:
      'The FDA-approved over-the-counter progestin-only pill. No prescription or visit. Opill says its 3- and 6-month packs cost less per pack and that it is HSA and FSA eligible. Opill.com cannot process insurance.',
    siteUrl: 'https://opill.com/products/opill',
  },
  {
    name: 'Nurx',
    providerId: 'nurx-womens-health',
    category: 'womens-health',
    price: '$28 consult + from $15/mo',
    blurb:
      'Online prescription with pills from $15 a month without insurance. The $28 consultation includes a year of messaging with its medical team, and Nurx charges a $3 support fee in each month an order is processed. It usually ships a 3-month supply.',
    siteUrl: 'https://www.nurx.com/our-brands/',
  },
  {
    name: 'Twentyeight Health',
    providerId: 'twentyeight-health',
    category: 'womens-health',
    price: 'Pills from $16/pack',
    blurb:
      'Lists the pill from $16 a pack without insurance, with some generics at about $24 to $30. It also lists the shot from $126 for a 3-month supply. Its NuvaRing page shows a separate $26 doctor evaluation fee, so ask whether one applies to your method.',
    siteUrl: 'https://www.twentyeighthealth.com/birth-control',
  },
  {
    name: 'Pandia Health',
    providerId: 'pandia-health',
    category: 'womens-health',
    price: '$35 consult + from $15/pack',
    blurb:
      'Pandia says generic pills are usually $15 a pack without insurance with a 3-pack minimum, or $20 for a single pack, with free delivery. Its consultation is $35 if Pandia delivers your birth control, or $70 if you pick it up at a pharmacy, paid by cash or card only.',
    siteUrl: 'https://www.pandiahealth.com/birth-control-brands/pills/',
  },
  {
    name: 'Planned Parenthood Direct',
    providerId: 'planned-parenthood-direct',
    category: 'womens-health',
    price: 'From $20/pack',
    blurb:
      "Planned Parenthood's online service lists pills from $20 a pack, with prices that vary by state. Its state pages list visit fees of about $25 to $40, and some states, such as Wisconsin, waive the visit fee when you order 3 or more packs by mail.",
    siteUrl: 'https://www.plannedparenthood.org/get-care/ppdirect',
  },
  {
    name: 'Wisp',
    providerId: 'wisp-sexual-health',
    category: 'womens-health',
    price: 'Generics from $15',
    blurb:
      "Wisp lists most generic pills starting at $15 and says it charges no separate consultation fee for birth control. It lists Slynd, a progestin-only brand, at $25, and says a first-time subscriber's first month of medication is covered.",
    siteUrl: 'https://hellowisp.com/shop/reproductive-health/birth-control',
  },
  {
    name: 'GoodRx',
    providerId: 'goodrx',
    category: 'pharmacy',
    price: 'Sprintec from ~$9',
    blurb:
      'Free coupons for a prescription you already have. GoodRx says generic Sprintec averages about $11.89 a pack without insurance and can be as low as $9 with a coupon at certain pharmacies; its price page listed a 3-pack at $18.11. You still need a prescription.',
    siteUrl: 'https://www.goodrx.com/sprintec/how-much-is-sprintec-without-insurance',
  },
  {
    name: 'Cost Plus Drugs',
    providerId: 'cost-plus-drugs',
    category: 'pharmacy',
    price: '$8.07 (one generic)',
    blurb:
      'Mark Cuban Cost Plus Drugs lists a generic for Hailey Fe (norethindrone acetate and ethinyl estradiol 1.5 mg/30 mcg) at $8.07 a pack (vs a listed $36.21 retail comparison), plus $5.25 standard shipping per order. We could not confirm its progestin-only norethindrone price. A prescriber has to send the prescription.',
    siteUrl: 'https://www.costplusdrugs.com/medications/NorethindroneAcetateEthinylEstradiol-1_5mg30mcg-Tablet/',
  },
];

const SOURCES = [
  { label: 'FDA — FDA Approves First Nonprescription Daily Oral Contraceptive (Opill)', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-nonprescription-daily-oral-contraceptive' },
  { label: 'FDA — Opill (0.075 mg oral norgestrel tablet) information', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/opill-0075mg-oral-norgestrel-tablet-information' },
  { label: 'FDA — Prescription to Nonprescription Switch List', url: 'https://www.fda.gov/drugs/over-counter-otc-nonprescription-drugs/prescription-nonprescription-switch-list' },
  { label: 'FDA — Plan B One-Step (1.5 mg levonorgestrel) information', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/plan-b-one-step-15-mg-levonorgestrel-information' },
  { label: 'FDA — ella (ulipristal acetate) prescribing information', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/022474s007lbl.pdf' },
  { label: 'CDC — U.S. Medical Eligibility Criteria for Contraceptive Use, 2024 (MMWR)', url: 'https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm' },
  { label: 'CDC — U.S. MEC: How to Use This Document (category definitions)', url: 'https://www.cdc.gov/contraception/hcp/usmec/how-to-use.html' },
  { label: 'CDC — U.S. MEC Appendix D: Classifications for Combined Hormonal Contraceptives', url: 'https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html' },
  { label: 'HealthCare.gov — Birth control benefits', url: 'https://www.healthcare.gov/coverage/birth-control-benefits/' },
  { label: 'HealthCare.gov — Preventive care benefits for women', url: 'https://www.healthcare.gov/preventive-care-women/' },
  { label: 'HHS Office of Population Affairs — Title X Family Planning Program overview (2022)', url: 'https://opa.hhs.gov/sites/default/files/2022-12/title-x-family-planning-program-2022.pdf' },
  { label: 'HHS Office of Population Affairs — Program Requirements for Title X Funded Family Planning Projects', url: 'https://opa.hhs.gov/sites/default/files/2021-03/title-x-program-requirements-april-2014.pdf' },
  { label: 'HHS Office of Population Affairs — 2023 Title X Family Planning Annual Report', url: 'https://opa.hhs.gov/about/news/e-updates/2023-title-x-family-planning-annual-report-title-x-providers-continue-rebuild' },
  { label: 'Opill — Daily over-the-counter oral birth control pill (product page)', url: 'https://opill.com/products/opill' },
  { label: 'Opill — Buying Opill FAQs', url: 'https://opill.com/pages/faqs?topic=buying-opill' },
  { label: 'Opill — How to get birth control without a prescription', url: 'https://opill.com/blogs/blog/how-to-get-birth-control-without-a-prescription' },
  { label: 'Opill — Opill is HSA and FSA eligible', url: 'https://opill.com/pages/hsa-fsa-for-opill' },
  { label: 'Nurx — How much does Nurx cost?', url: 'https://www.nurx.com/faq/how-much-does-nurx-cost/' },
  { label: 'Nurx — How much does birth control cost?', url: 'https://www.nurx.com/faq/how-much-does-birth-control-cost/' },
  { label: 'Nurx — Our birth control brands', url: 'https://www.nurx.com/our-brands/' },
  { label: 'Nurx — Over-the-counter birth control (Opill)', url: 'https://www.nurx.com/birthcontrol-opill/' },
  { label: 'Twentyeight Health — Birth control options', url: 'https://www.twentyeighthealth.com/birth-control' },
  { label: 'Twentyeight Health — Isibloom', url: 'https://www.twentyeighthealth.com/isibloom' },
  { label: 'Twentyeight Health — Junel 1/20', url: 'https://www.twentyeighthealth.com/junel-1-20' },
  { label: 'Twentyeight Health — NuvaRing', url: 'https://www.twentyeighthealth.com/nuvaring' },
  { label: 'Pandia Health — Frequently asked questions (consultation fee, pack price)', url: 'https://www.pandiahealth.com/faq/' },
  { label: 'Pandia Health — Birth control pill brands', url: 'https://www.pandiahealth.com/birth-control-brands/pills/' },
  { label: 'Pandia Health — How to get birth control without insurance', url: 'https://www.pandiahealth.com/blog/how-to-get-birth-control-without-insurance/' },
  { label: 'Pandia Health — Is birth control expensive without insurance?', url: 'https://www.pandiahealth.com/blog/is-birth-control-expensive-without-insurance/' },
  { label: 'Planned Parenthood Direct', url: 'https://www.plannedparenthood.org/get-care/ppdirect' },
  { label: 'Planned Parenthood Direct — California', url: 'https://www.plannedparenthood.org/planned-parenthood-direct/california' },
  { label: 'Planned Parenthood of Wisconsin — Planned Parenthood Direct', url: 'https://www.plannedparenthood.org/planned-parenthood-wisconsin/patients/ppdirect' },
  { label: 'Wisp — Order birth control pills online', url: 'https://hellowisp.com/shop/reproductive-health/birth-control' },
  { label: 'Wisp — Slynd birth control', url: 'https://hellowisp.com/products/slynd-birth-control' },
  { label: 'Wisp — Trivora-28 (first-month FAQ)', url: 'https://hellowisp.com/products/trivora-28-birth-control' },
  { label: 'Hers — Birth control online', url: 'https://www.forhers.com/birth-control' },
  { label: 'Mark Cuban Cost Plus Drugs — Norethindrone acetate and ethinyl estradiol 1.5 mg/30 mcg', url: 'https://www.costplusdrugs.com/medications/NorethindroneAcetateEthinylEstradiol-1_5mg30mcg-Tablet/' },
  { label: 'Mark Cuban Cost Plus Drugs — Norethindrone 0.35 mg', url: 'https://www.costplusdrugs.com/medications/Norethindrone-0_35mg-Tablet/' },
  { label: 'GoodRx — How much is Sprintec without insurance?', url: 'https://www.goodrx.com/sprintec/how-much-is-sprintec-without-insurance' },
  { label: 'GoodRx — Sprintec prices and coupons', url: 'https://www.goodrx.com/sprintec' },
  { label: 'GoodRx — Norethindrone prices and coupons', url: 'https://www.goodrx.com/norethindrone' },
  { label: 'GoodRx — How much is Yaz without insurance?', url: 'https://www.goodrx.com/yaz/how-much-is-yaz-without-insurance' },
  { label: 'GoodRx — How much does Lo Loestrin Fe cost without insurance?', url: 'https://www.goodrx.com/lo-loestrin-fe/lo-loestrin-fe-cost-without-insurance' },
  { label: 'GoodRx — Xulane prices and coupons', url: 'https://www.goodrx.com/xulane' },
  { label: 'GoodRx — EluRyng prices and coupons', url: 'https://www.goodrx.com/eluryng' },
  { label: 'GoodRx — Cost of the Depo-Provera shot without insurance', url: 'https://www.goodrx.com/depo-provera/cost-of-depo-provera-shot-without-insurance' },
  { label: 'Planned Parenthood — Where can I buy birth control pills and how much do they cost?', url: 'https://www.plannedparenthood.org/learn/birth-control/birth-control-pill/how-do-i-get-birth-control-pills' },
  { label: 'Planned Parenthood — Where can I buy the birth control patch?', url: 'https://www.plannedparenthood.org/learn/birth-control/birth-control-patch/how-do-i-get-birth-control-patch' },
  { label: 'Planned Parenthood — Where can I buy the birth control ring and how much does it cost?', url: 'https://www.plannedparenthood.org/learn/birth-control/birth-control-vaginal-ring-nuvaring/how-do-i-get-nuvaring' },
  { label: 'Planned Parenthood — How much do IUDs cost without insurance?', url: 'https://www.plannedparenthood.org/blog/how-much-do-iuds-cost-without-insurance' },
  { label: 'Planned Parenthood — How can I get the birth control implant and what does it cost?', url: 'https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-nexplanon/how-can-i-get-the-birth-control-implant' },
  { label: 'Planned Parenthood of Florida — Cost of medical services', url: 'https://www.plannedparenthood.org/planned-parenthood-florida/patient-resources/cost-of-services' },
  { label: 'Planned Parenthood of Florida — Discounted pricing programs', url: 'https://www.plannedparenthood.org/planned-parenthood-florida/patient-resources/discounted-pricing-programs' },
  { label: 'Planned Parenthood of Southwest and Central Florida — IUDs and the implant', url: 'https://www.plannedparenthood.org/planned-parenthood-southwest-central-florida/medical-services/birth-control/larc' },
  { label: 'Planned Parenthood Pasadena and San Gabriel Valley — Cost of common services', url: 'https://www.plannedparenthood.org/planned-parenthood-pasadena-san-gabriel-valley/visit-payment/insurance-payment-options/cost-of-common-services' },
  { label: 'Planned Parenthood Keystone — 2026 Good Faith Estimate service fee estimates (PDF)', url: 'https://www.plannedparenthood.org/uploads/filer_public/64/75/647504e0-8817-420a-b65a-7e2301167c54/gfe_servicefeeestimates_202602.pdf' },
  { label: 'Planned Parenthood — How much does the morning-after pill cost?', url: 'https://www.plannedparenthood.org/blog/how-much-does-the-morning-after-pill-cost' },
  { label: 'Planned Parenthood — What is the ella morning-after pill?', url: 'https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/whats-ella-morning-after-pill' },
  { label: 'Planned Parenthood — What kind of emergency contraception is best for me?', url: 'https://www.plannedparenthood.org/learn/morning-after-pill-emergency-contraception/which-kind-emergency-contraception-should-i-use' },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does birth control cost without insurance?',
    answer:
      'It depends on the method. For the pill, the single-pack prices we found run from $8.07 a pack (one generic at Mark Cuban Cost Plus Drugs) and about $9 with a GoodRx coupon for generic Sprintec, to $15-$20 a pack at online prescribers such as Nurx, Wisp, Pandia Health and Planned Parenthood Direct, plus any consultation fee. Filling three packs at once can cost less per pack: GoodRx listed a 3-pack of Sprintec at $18.11 with its coupon. Opill, the over-the-counter pill, is listed at $19.99 for a one-month pack. GoodRx lists about $41 for a 3-patch box of Xulane and about $45 for one EluRyng ring with its coupons. Planned Parenthood puts an IUD at $500-$1,800 without insurance, and its Florida affiliate lists the implant at $1,300. Prices change and vary by pharmacy and state, so confirm before you pay.',
  },
  {
    question: 'What is the cheapest way to get birth control without insurance?',
    answer:
      'If your income is low, a Title X family planning clinic: HHS says these clinics charge nothing to people below 100% of the federal poverty level, use a sliding scale from 101% to 250%, and cannot turn anyone away for inability to pay. Otherwise, a generic pill with a coupon or from Cost Plus Drugs is the lowest posted price we found: roughly $8-$12 for a single pack, or $18.11 for a 3-pack of Sprintec with a GoodRx coupon, about $6 a pack. You need a prescription first. Wisp says it charges no separate consultation fee for birth control, and its generic pills start at $15; confirm at checkout whether any membership or visit fee applies.',
  },
  {
    question: 'How much is Opill, and do I need a prescription?',
    answer:
      'No prescription is needed. The FDA approved Opill on July 13, 2023 as the first daily oral contraceptive sold in the US without a prescription. Opill.com lists the one-month pack at $19.99 and says its 3- and 6-month packs cost less per pack. It lists Opill as HSA and FSA eligible. Opill.com cannot process insurance, but Opill says some plans, such as CVS Caremark, have added it to their preventive medication lists, so members may be able to get it for $0 without a prescription.',
  },
  {
    question: 'How much does an IUD or implant cost without insurance?',
    answer:
      'Planned Parenthood says an IUD costs between $500 and $1,800 without insurance. Affiliate price lists vary: Planned Parenthood of Florida lists the Liletta IUD at $850 and the Paragard IUD and Nexplanon implant at $1,300 each for patients paying without insurance, before insertion and office visit fees, while Pasadena and San Gabriel Valley lists IUDs and implants at $0-$1,200 with insertion included. A 2026 Planned Parenthood Keystone estimate sheet lists Nexplanon insertion at $1,144, $1,714 or $2,286 depending on the fee tier. Ask any clinic for a written all-in price and whether it offers a sliding scale.',
  },
  {
    question: 'How much does emergency contraception cost?',
    answer:
      'Planned Parenthood says Plan B One-Step usually costs about $40-$50 and generic levonorgestrel pills about $11-$45, and that they all work just as well. They are sold over the counter, and the FDA says to take a levonorgestrel pill as soon as possible within 72 hours. ella needs a prescription, usually costs about $50 or more at a pharmacy according to Planned Parenthood, and can be taken up to 120 hours (5 days) afterward. Planned Parenthood says ella is more effective than levonorgestrel pills, especially if you weigh more than 165 pounds.',
  },
  {
    question: 'Does insurance have to cover birth control?',
    answer:
      'For most people with insurance, yes. HealthCare.gov says Marketplace plans and many other plans must cover FDA-approved contraceptive methods prescribed by a health care provider, including hormonal methods, IUDs, implants and emergency contraception, without a copayment, coinsurance or deductible when you use an in-network provider. Plans sponsored by certain exempt religious employers, such as churches, do not have to cover contraception. If you have coverage, check it before paying cash.',
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

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article' },
  twitter: { card: 'summary', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

const td = 'border border-gray-300 px-4 py-3';
const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const srcLink = 'text-blue-600 hover:underline';

export default function BirthControlCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Birth Control Cost Without Insurance: Pills, Opill, Patch, Ring, IUD and Implant Prices in 2026',
    description: PAGE_DESCRIPTION,
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-10-18',
    dateModified: '2026-10-18',
    mainEntityOfPage: PAGE_URL,
    citation: SOURCES.map((source) => source.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Birth Control Cost Without Insurance', item: PAGE_URL },
    ],
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        {[articleSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
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
                Telehealth &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Birth Control Cost Without Insurance: Pill, Opill, Patch, Ring, IUD and Implant Prices in 2026
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A generic pill pack can cost about $8 at one pharmacy and $20 or more through another
              route, and long-acting methods can cost over $1,000 up front. Here are posted cash prices
              for each method, what an online prescription adds, and the free and low-cost options
              many people miss.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> without insurance, the pill is the cheapest method to
                pay for month to month. <strong>Generic pills run about $8-$12 a pack</strong> with a
                GoodRx coupon or from Cost Plus Drugs once you have a prescription, and less per pack on a
                3-pack fill. <strong>Online
                prescribers list pills from $15-$20 a pack</strong> plus a $0-$70 consultation, and{' '}
                <strong>Opill costs $19.99 for a one-month pack</strong> with no prescription. The patch
                and ring run about $41-$45 a month with a coupon. An <strong>IUD can cost
                $500-$1,800</strong> up front, according to Planned Parenthood, and one Florida
                affiliate lists the implant at $1,300; sliding scales can lower both. The
                cheapest legitimate route is a Title X family planning clinic, which charges nothing
                to people below the federal poverty level.
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-700">
              Prices checked {PRICES_CHECKED} &mdash; confirm with the provider
            </p>
            <p className="mt-1 text-sm text-gray-500">By VitalityScout research &bull; 13 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">Over the counter</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Opill: $19.99 for one month</li>
                  <li>&bull; No prescription or visit</li>
                  <li>&bull; Progestin-only, no estrogen</li>
                  <li>&bull; Emergency pills: about $11-$50 (Planned Parenthood)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Prescription pill, patch, ring</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Generic pills: about $8-$20 a pack</li>
                  <li>&bull; Patch or ring: about $41-$45 with coupon</li>
                  <li>&bull; Online visit: $0-$70</li>
                  <li>&bull; More methods and brands to choose from</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">IUD or implant</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; $500-$1,800 IUD (Planned Parenthood)</li>
                  <li>&bull; Implant: $1,300 cash in Florida</li>
                  <li>&bull; Inserted by a clinician</li>
                  <li>&bull; Sliding scale can bring it to $0</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">Start with a clinic if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; Your income is low (Title X and sliding fees)</li>
                  <li>&bull; You want an IUD or implant</li>
                  <li>&bull; You want an exam and counseling on methods</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-1">Buy online or over the counter if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You want the pill, patch or ring delivered</li>
                  <li>&bull; You want Opill with no prescription</li>
                  <li>&bull; You have discussed your health history with a clinician</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-method" className="text-blue-600 hover:underline">1. Birth control cost by method</a></li>
              <li><a href="#opill" className="text-blue-600 hover:underline">2. Opill: the over-the-counter pill</a></li>
              <li><a href="#online" className="text-blue-600 hover:underline">3. Online prescribers compared</a></li>
              <li><a href="#year" className="text-blue-600 hover:underline">4. What a year of the pill costs</a></li>
              <li><a href="#pharmacy" className="text-blue-600 hover:underline">5. Generic pills, patch, ring and shot at the pharmacy</a></li>
              <li><a href="#larc" className="text-blue-600 hover:underline">6. IUD and implant costs</a></li>
              <li><a href="#emergency" className="text-blue-600 hover:underline">7. Emergency contraception</a></li>
              <li><a href="#free" className="text-blue-600 hover:underline">8. Insurance, Title X and free options</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">9. How to save</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">10. Choosing a method safely</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="by-method" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Birth Control Cost by Method</h2>

            <p className="text-gray-700 mb-4">
              These are posted cash prices from provider, pharmacy and price-comparison pages checked
              on {PRICES_CHECKED}. Coupon prices vary by pharmacy and location, and several figures
              are &quot;starting at&quot; prices for the lowest-cost generic. Brand-name products cost
              more.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Method</th>
                    <th className={th}>Posted cash price</th>
                    <th className={th}>What else you pay for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Opill (over-the-counter progestin-only pill)</td>
                    <td className={td}>$19.99 for a one-month pack on opill.com; 3- and 6-month packs cost less per pack</td>
                    <td className={td}>Nothing else required: no prescription or visit</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Generic prescription pill</td>
                    <td className={td}>$8.07 a pack for one generic at Cost Plus Drugs; Sprintec averages $11.89 and can be about $9 with a GoodRx coupon, or $18.11 for a 3-pack; generic norethindrone (progestin-only) from about $19 with GoodRx versus a $65.75 average retail price</td>
                    <td className={td}>A prescription, and shipping if you order by mail</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Brand-name pill</td>
                    <td className={td}>Yaz about $58.50 with a GoodRx coupon; Lo Loestrin Fe averages $235.07 retail, with a $99 GoodRx cash price</td>
                    <td className={td}>A prescription; ask whether a generic version exists</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Patch (3 patches = 1 month)</td>
                    <td className={td}>Planned Parenthood: $0-$150; Xulane about $41.40 with a GoodRx coupon versus $83.31 retail</td>
                    <td className={td}>A prescription</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Vaginal ring</td>
                    <td className={td}>Planned Parenthood: $0-$200; EluRyng about $44.73 with a GoodRx coupon, which GoodRx says is 61% off a $114.37 average retail price</td>
                    <td className={td}>A prescription; Planned Parenthood says one NuvaRing lasts up to 5 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Shot (every 3 months)</td>
                    <td className={td}>Generic medroxyprogesterone from about $33.30 with GoodRx ($55.77 average); Twentyeight Health from $126 for a 3-month supply</td>
                    <td className={td}>A prescription and, unless you self-inject, an injection visit</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>IUD</td>
                    <td className={td}>Planned Parenthood: $500-$1,800 without insurance</td>
                    <td className={td}>Insertion and office visit, if not bundled</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Implant (Nexplanon)</td>
                    <td className={td}>$1,300 cash at Planned Parenthood of Florida; $1,144-$2,286 across fee tiers in a 2026 Planned Parenthood Keystone estimate</td>
                    <td className={td}>Insertion, and removal later</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Emergency contraception</td>
                    <td className={td}>Plan B One-Step about $40-$50; generic levonorgestrel about $11-$45; ella about $50 or more</td>
                    <td className={td}>ella needs a prescription; levonorgestrel pills do not</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> with the pill, patch and ring you pay a small amount every
              month plus an occasional prescription visit. With an IUD or implant you pay most of the
              cost at once, at insertion. That is why the up-front price of a long-acting method looks
              high next to a $15 pill pack, even though you are not buying refills afterward.
            </p>

            <h2 id="opill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Opill: The Over-the-Counter Pill</h2>

            <p className="text-gray-700 mb-4">
              The FDA approved Opill (norgestrel 0.075 mg) on July 13, 2023 as the first daily oral
              contraceptive sold in the US without a prescription. It is a progestin-only pill and
              contains no estrogen. Opill.com lists the one-month pack of 28 tablets at $19.99 and
              sells 3- and 6-month packs, which it says cost less per pack, with further discounts
              for auto-ship and subscription orders. Opill is also sold at retailers such as
              Walmart, Target, CVS and Walgreens, where shelf prices may differ, and Nurx lists a
              3-month supply of Opill at $49.99 without insurance, with no medical consultation.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>How you take it:</strong> the FDA says Opill must be taken at the same time every day. It is not emergency contraception.</li>
              <li><strong>Who should not use it:</strong> the FDA says people who have or have had breast cancer should not use Opill, and people with any other cancer should ask a doctor first.</li>
              <li><strong>Interactions:</strong> the FDA notes that some drug interactions can make Opill less effective, so tell a pharmacist about other medicines you take.</li>
              <li><strong>Side effects:</strong> the FDA lists irregular bleeding, headaches, dizziness and nausea among the common side effects.</li>
              <li><strong>Paying for it:</strong> Opill&apos;s site says it is HSA and FSA eligible. Opill.com cannot process insurance, but Opill says some plans, such as CVS Caremark, have added it to their preventive medication lists, so members may pay $0 without a prescription at a pharmacy.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Is Opill the cheapest pill?</strong> Not always. At $19.99 a month, it costs
                more than a generic prescription pill with a coupon (about $9 for Sprintec at some
                pharmacies). What you save is the prescription visit. If you would pay for an online
                consultation anyway, compare the full year below.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="online" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Online Prescribers Compared</h2>

            <p className="text-gray-700 mb-4">
              Online birth control services have a clinician review a health questionnaire, then ship
              the pill, patch or ring or send a prescription to a pharmacy. Their self-pay prices have
              two parts, the consultation and the medication, and both differ by company and state:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Service</th>
                    <th className={th}>Consultation fee</th>
                    <th className={th}>Pill price without insurance</th>
                    <th className={th}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Nurx</td>
                    <td className={td}>$28, includes a year of messaging; $3 support fee in each month an order is processed</td>
                    <td className={td}>From $15 a month</td>
                    <td className={td}>Usually ships a 3-month supply. Some brands cost more, such as a drospirenone pill with levomefolate (Drospirenone EE LEV 3/.02/.45) at $115 a pack. Nurx does not bill insurance for the consultation fee.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Twentyeight Health</td>
                    <td className={td}>$26 doctor evaluation fee shown on its NuvaRing page; confirm for other methods</td>
                    <td className={td}>From $16 a pack; Isibloom about $24 and Junel 1/20 about $30</td>
                    <td className={td}>Brand-name prices are much higher, such as Lo Loestrin Fe at $195 a month and NuvaRing at $210.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Pandia Health</td>
                    <td className={td}>$35 if Pandia delivers, $70 if you pick up at a pharmacy; cash or card only</td>
                    <td className={td}>$15 a pack for generics with a 3-pack minimum; $20 for a single pack</td>
                    <td className={td}>Free delivery. Brand pages vary, such as Elinest at $26 and Aurovela Fe 1/20 at $27. Some Pandia pricing pages are several years old, so confirm at checkout.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Planned Parenthood Direct</td>
                    <td className={td}>About $25-$40 depending on state; some states, such as Wisconsin, waive it when you order 3 or more packs by mail</td>
                    <td className={td}>From $20 a pack; some state pages list higher prices</td>
                    <td className={td}>Prices vary by state. With pharmacy pickup, you pay the pharmacy separately.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Wisp</td>
                    <td className={td}>No separate consultation fee for birth control, per Wisp</td>
                    <td className={td}>Most generics start at $15</td>
                    <td className={td}>Lists Slynd (progestin-only) at $25. Says a first-time subscriber&apos;s first month of medication is covered.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Hers</td>
                    <td className={td}>Not stated on the page we found</td>
                    <td className={td}>Not confirmed; check the current price</td>
                    <td className={td}>We could not confirm that its birth control page is current, so we do not list a price.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              If you have insurance, ask whether the service can bill your plan for the medication;
              Pandia Health, for example, says your medication price can change with insurance.
              Consultation fees are often cash only: Nurx says it does not bill insurance for its
              consultation fee, and Pandia accepts only cash or card for consultations. For how online visits
              are priced across other conditions, see our{' '}
              <Link href="/guides/cash-pay-telehealth-visits" className={srcLink}>cash-pay telehealth visits guide</Link>,
              and browse more options on the{' '}
              <Link href="/womens-health" className={srcLink}>women&apos;s health hub</Link>.
            </p>
          </div>

          <BrandCtaGrid
            title="Compare birth control options before you order"
            intro="Prices are the lowest listed figures we found for generic or starter options. Confirm the consultation fee, the price of your specific brand and the refill schedule at checkout. Hers appears in the table above but is not shown here because we could not confirm that its page is current."
            brands={BIRTH_CONTROL_BRANDS}
            hubHref="/womens-health"
            hubLabel="Compare women's health providers →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="year" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Year of the Pill Costs</h2>

            <p className="text-gray-700 mb-4">
              Monthly prices hide fees that show up once a year or once per order. The table below is
              simple arithmetic on the lowest listed prices above for 12 packs. It is an illustration,
              not a quote: your brand may cost more, and promotions change.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Route</th>
                    <th className={th}>How we added it up</th>
                    <th className={th}>Year one</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>GoodRx coupon, Sprintec 3-packs</td>
                    <td className={td}>4 &times; $18.11, plus a prescription visit</td>
                    <td className={td}>$72.44 + visit</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Cost Plus Drugs generic</td>
                    <td className={td}>12 &times; $8.07, plus shipping and a prescription visit</td>
                    <td className={td}>$96.84 + shipping + visit</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>GoodRx coupon, generic Sprintec</td>
                    <td className={td}>12 &times; about $9, plus a prescription visit</td>
                    <td className={td}>About $108 + visit</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Wisp generic</td>
                    <td className={td}>11 &times; $15 (first month covered for new subscribers); Wisp says there is no consultation fee for birth control</td>
                    <td className={td}>$165; confirm any membership fee</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Twentyeight Health generic</td>
                    <td className={td}>12 &times; $16, plus any evaluation fee</td>
                    <td className={td}>$192 + any fee</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Opill through Nurx, 3-month supplies</td>
                    <td className={td}>4 &times; $49.99; no consultation</td>
                    <td className={td}>$199.96</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Pandia Health, delivered</td>
                    <td className={td}>$35 consultation + 12 &times; $15 (3-pack orders)</td>
                    <td className={td}>$215</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Nurx generic</td>
                    <td className={td}>$28 consultation + 12 &times; $15 + four $3 support fees (four 3-month shipments)</td>
                    <td className={td}>$220</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Opill, one-month packs</td>
                    <td className={td}>12 &times; $19.99; multi-month packs cost less per pack</td>
                    <td className={td}>$239.88 or less</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Planned Parenthood Direct, mail order</td>
                    <td className={td}>12 &times; $20, plus a visit fee of about $25-$40 that some states waive for multi-pack mail orders</td>
                    <td className={td}>$240 + any fee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The spread between the cheapest and most expensive route here is more than $100 a year
              for what can be the same kind of generic pill. The cheapest pharmacy prices assume you
              already have a prescription; if you need a visit to get one, add that cost.
            </p>

            <h2 id="pharmacy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Generic Pills, Patch, Ring and Shot at the Pharmacy</h2>

            <p className="text-gray-700 mb-4">
              Any prescriber, including an online service or a clinic, can usually send your
              prescription to the pharmacy you choose. That lets you shop the medication separately:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mark Cuban Cost Plus Drugs</strong> lists a generic for Hailey Fe (norethindrone acetate and ethinyl estradiol 1.5 mg/30 mcg) at $8.07 a pack, against a $36.21 retail comparison on the same page. It also lists progestin-only norethindrone 0.35 mg, but we could not confirm that price, so check its site. Shipping is extra.</li>
              <li><strong>GoodRx</strong> says Sprintec averages $11.89 a pack without insurance and can be as little as $9 with its coupon at certain pharmacies. Its Sprintec price page listed a 3-pack at $18.11 with its coupon, against a $76.90 retail price, in prices last updated in September 2026. It lists generic norethindrone from about $19 with a coupon. GoodRx also suggests asking for a 3-month supply and comparing pharmacies.</li>
              <li><strong>Patch:</strong> Planned Parenthood says the patch can cost $0 to $150, and a pack of three patches lasts one month. GoodRx lists a 3-patch box of Xulane at about $41.40 with its coupon.</li>
              <li><strong>Ring:</strong> Planned Parenthood says the ring can cost $0 to $200. GoodRx lists one EluRyng ring at about $44.73 with its coupon, which it says is 61% off an average retail price of $114.37. GoodRx coupon prices shown on different pages and dates do not always match, so check the price for your pharmacy.</li>
              <li><strong>Shot:</strong> GoodRx says a generic medroxyprogesterone injection costs as little as $33.30 with its coupon. That is the drug only; ask what an injection visit costs if you are not self-injecting.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-2">Coupons replace insurance, they don&apos;t add to it</h3>
              <p className="text-gray-700">
                A GoodRx coupon is a cash price, used when you pay without insurance rather than in
                addition to it. If you have coverage, check your plan&apos;s price first, because many
                plans must cover contraception at no cost (see below).
              </p>
            </div>

            <h2 id="larc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">IUD and Implant Costs</h2>

            <p className="text-gray-700 mb-4">
              An IUD or implant is placed by a clinician, so the price includes the device, the
              insertion and usually an office visit. Planned Parenthood says an IUD costs between $500
              and $1,800 without insurance. Affiliate price lists show how much the total depends on
              what is bundled and on your income:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Planned Parenthood of Florida</strong> lists the Liletta IUD at $850 and the Paragard IUD and Nexplanon implant at $1,300 each for patients paying without insurance at the time of service, not counting insertion fees and office visits. It also runs discounted pricing programs for eligible patients at some centers.</li>
              <li><strong>Planned Parenthood of Southwest and Central Florida</strong> says an IUD costs anywhere from $0 to $1,300 without insurance.</li>
              <li><strong>Planned Parenthood Pasadena and San Gabriel Valley</strong> lists IUDs and implants at $0 to $1,200, with insertion included.</li>
              <li><strong>Planned Parenthood Keystone</strong> (Pennsylvania) lists Nexplanon insertion at $1,144, $1,714 or $2,286 in its 2026 estimate sheet, depending on the fee tier.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Many affiliates use income-based sliding scales, so the same device can cost $0 for one
              patient and full price for another. Before you book, ask for a written price that lists
              the device, insertion, visit and any follow-up, and ask what removal costs later. A
              clinician can tell you how long the specific device you choose is approved to last,
              which is what spreads the up-front cost over time.
            </p>

            <h2 id="emergency" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Emergency Contraception</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Option</th>
                    <th className={th}>Price</th>
                    <th className={th}>Access and timing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Plan B One-Step (levonorgestrel 1.5 mg)</td>
                    <td className={td}>About $40-$50</td>
                    <td className={td}>Over the counter. The FDA says to take it as soon as possible within 72 hours.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Generic levonorgestrel (Take Action, My Way, Option 2, Aftera and others)</td>
                    <td className={td}>About $11-$45; AfterPill online for $20 plus $5 shipping</td>
                    <td className={td}>Over the counter. Planned Parenthood says all brand-name and generic versions work just as well.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>ella (ulipristal acetate 30 mg)</td>
                    <td className={td}>About $50 or more at a pharmacy</td>
                    <td className={td}>Prescription required. The label allows use within 120 hours (5 days).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Prices above are from Planned Parenthood&apos;s guidance and vary by store. Planned
              Parenthood says ella is more effective than levonorgestrel pills, especially if you weigh
              more than 165 pounds. Because ella needs a prescription, buying the generic
              levonorgestrel pill ahead of time is the low-cost way to have emergency contraception
              on hand; ask a clinician or pharmacist which option fits your situation.
            </p>

            <h2 id="free" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance, Title X and Free Options</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">If you have insurance</h3>
            <p className="text-gray-700 mb-4">
              HealthCare.gov says Marketplace plans and many other plans must cover FDA-approved
              contraceptive methods prescribed by a health care provider, including barrier and
              hormonal methods, IUDs, implants, emergency contraception, sterilization procedures,
              and patient education and counseling, without a copayment, coinsurance or deductible
              when you use an in-network provider. Plans sponsored by certain exempt religious
              employers, such as churches, do not have to cover contraception; for nonprofit religious
              organizations, an insurer or plan administrator pays separately for contraceptive
              services. Plans are not required to cover vasectomy, which our{' '}
              <Link href="/guides/vasectomy-cost" className={srcLink}>vasectomy cost guide</Link> covers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">If you are uninsured or on a tight budget</h3>
            <p className="text-gray-700 mb-4">
              The federal Title X family planning program funds clinics that, according to HHS, charge
              nothing to people with incomes below 100% of the federal poverty level and offer
              sliding-scale discounts from 101% to 250%. Title X program rules say a clinic cannot
              turn someone away because they cannot pay. HHS reported that Title X providers served
              about 2.8 million clients in 2023, and that 60% had incomes under 101% of the poverty
              level and received care at no charge. Which clinics take part can change, so ask your
              state or local health department where to find a current Title X site, and ask any
              clinic directly whether it offers sliding fees.
            </p>
            <p className="text-gray-700 mb-4">
              Many Planned Parenthood health centers also use income-based sliding scales, and
              Planned Parenthood notes that depending on your income and documentation status, you may
              qualify for government programs that help pay for birth control.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on Birth Control</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Check your plan first.</strong> If you have coverage, an in-network prescription may cost $0, which beats any cash price.</li>
              <li><strong>Ask about Title X and sliding fees.</strong> If your income is at or below 250% of the poverty level, a Title X clinic should offer free or discounted care.</li>
              <li><strong>Ask for a generic.</strong> Brand-name pills like Lo Loestrin Fe or Yaz can cost several times more than a generic.</li>
              <li><strong>Split the prescription from the pharmacy.</strong> Get the prescription from the service you like, then compare Cost Plus Drugs and GoodRx coupon prices for the fill.</li>
              <li><strong>Buy several months at once.</strong> Opill&apos;s 3- and 6-month packs cost less per pack, and Nurx lists a 3-month supply of Opill at $49.99. GoodRx suggests asking for a 3-month supply; its listed 3-pack price for Sprintec ($18.11) works out to about $6 a pack. Pandia&apos;s $15 pack price requires a 3-pack minimum.</li>
              <li><strong>Count every fee.</strong> Add consultation fees, per-order support fees, shipping and annual renewals before comparing services.</li>
              <li><strong>Use HSA or FSA funds.</strong> Opill&apos;s site says it is HSA and FSA eligible. Confirm eligibility for other products with your plan administrator.</li>
            </ul>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Choosing a Method Safely</h2>

            <p className="text-gray-700 mb-4">
              Price matters, but the right method depends on your health history. Talk to a licensed
              clinician, in person or through a telehealth service, about which methods are safe for
              you. A few points from FDA and CDC guidance:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Smoking and age 35.</strong> CDC&apos;s 2024 U.S. Medical Eligibility Criteria say people 35 and older who smoke 15 or more cigarettes a day should not use combined estrogen-and-progestin pills because of unacceptable health risks, mainly heart attack and stroke. For people 35 and older who smoke fewer than 15 a day, combined pills usually are not recommended unless other methods are not available or acceptable. Ask a clinician whether the same caution applies to other combined methods, such as the patch.</li>
              <li><strong>Progestin-only options</strong> such as Opill, norethindrone and Slynd contain no estrogen. A clinician can tell you whether one suits you better than a combined method.</li>
              <li><strong>Opill limits.</strong> People who have or have had breast cancer should not use Opill, according to the FDA. Opill is not emergency contraception.</li>
              <li><strong>ella and hormonal birth control.</strong> ella&apos;s label says to wait at least 5 days after taking it before starting or resuming hormonal birth control, and to use a barrier method until your next period.</li>
              <li><strong>Medicines and supplements.</strong> Some drug interactions can make hormonal birth control less effective. Give the prescriber or pharmacist your full medication list.</li>
              <li><strong>STI protection.</strong> Hormonal methods and IUDs do not protect against sexually transmitted infections. For testing costs, see our{' '}
                <Link href="/guides/std-testing-cost" className={srcLink}>STD testing cost guide</Link>.</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">Red flags when buying birth control online</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-red-800">
                <li>A site that sells prescription-only pills, patches or rings without asking about your health history or having a clinician review it. Opill and levonorgestrel emergency pills are the over-the-counter exceptions.</li>
                <li>No clear way to reach the prescribing clinician with questions or side effects.</li>
                <li>A low monthly price that hides a recurring consultation, support or shipping fee, or an unclear cancellation process.</li>
                <li>Prices far below the generic ranges on this page for an unnamed or unbranded product.</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              If you are in perimenopause or considering hormone therapy instead of contraception, our{' '}
              <Link href="/guides/online-menopause-treatment" className={srcLink}>online menopause treatment guide</Link>{' '}
              compares those services and costs.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Compare Women&apos;s Health Telehealth Options</h2>
            <p className="mb-6 text-blue-100">
              See online birth control, menopause and sexual health services side by side.
            </p>
            <Link
              href="/womens-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Women&apos;s Health Providers
            </Link>
          </div>

          {/* FAQ: visible block renders FAQ_ITEMS, the same array used for the FAQPage schema */}
          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h2 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h2>
            <p className="text-sm text-gray-600">
              This guide is general information, not medical advice, and no clinician reviewed it.
              Which birth control method is safe and effective for you depends on your health history,
              medications and preferences; choose a method with a licensed clinician. Over-the-counter
              availability of Opill and levonorgestrel emergency pills does not make them right for
              everyone, so read the label and ask a pharmacist or clinician if you have questions.
              Prices come from public provider, pharmacy and price-comparison pages as of{' '}
              {PRICES_CHECKED}. They vary by pharmacy, state, brand and promotion, some pages may be
              out of date, and totals may exclude consultation, support, shipping, insertion and visit
              fees. Always confirm the current price before you pay. VitalityScout is not affiliated
              with Opill, Nurx, Twentyeight Health, Pandia Health, Planned Parenthood, Wisp, Hers,
              Mark Cuban Cost Plus Drugs or GoodRx, and listing a provider is not an endorsement.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {SOURCES.map((source) => (
                <li key={source.url}>
                  &bull;{' '}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-link-purpose="source"
                    className={srcLink}
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Read our <Link href="/editorial-policy" className={srcLink}>editorial policy</Link> for
              how we research and update cost guides.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <RelatedGuides items={getRelatedGuides('/guides/birth-control-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Women's Health Cheat Sheet"
            description="How to compare birth control prices, spot hidden fees, and find sliding-scale clinics."
            source="guide_birth_control_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
