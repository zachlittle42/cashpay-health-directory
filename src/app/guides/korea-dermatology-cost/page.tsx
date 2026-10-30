import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import RelatedGuides from '@/components/RelatedGuides';
import { JourneyRail, JourneyNext } from '@/components/destinations/JourneyRail';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_PATH = '/guides/korea-dermatology-cost';
const PAGE_URL = `https://vitalityscout.com${PAGE_PATH}`;
const PAGE_TITLE = 'Korea Dermatology & Skin Treatment Cost (2026): Published Seoul Clinic Prices for Rejuran, Ultherapy, Thermage, Botox and Lasers';
const PAGE_DESCRIPTION =
  'What skin treatments cost at Seoul dermatology clinics in 2026, from nine published price menus: Rejuran Healer 2cc ₩169,000–400,000, Ultherapy 300 shots from ₩990,000, Thermage FLX 600 shots ₩1.79–3.0M, Korean Botox from ₩9,900, pico toning from ₩9,900. VAT rules, the ended tourist refund, and how to book.';
const PRICES_CHECKED = 'October 30, 2026';
const KRW = 1330;
function usd(won: number): string {
  return `$${Math.round(won / KRW).toLocaleString('en-US')}`;
}

// Every figure below was read on the clinic's own published price page on the
// date above. Event prices are time-limited and labelled. Korean clinics quote
// before 10% VAT unless the menu says otherwise.
const MENU = [
  { treatment: 'Rejuran Healer, 2cc', range: '₩169,000–400,000', usdRange: `${usd(169000)}–${usd(400000)}`, detail: 'Ppeum ₩169,000 event (list ₩270,000); Ocean ₩179,000; RE:BERRY ₩180,000 promo; Liftique from ₩220,000; Repic and Egg ₩250,000; Delphic, YAAN and ELEV ₩350,000; Oganacell ₩400,000.' },
  { treatment: 'Ultherapy Prime, 300 shots', range: '₩990,000–1,500,000', usdRange: `${usd(990000)}–${usd(1500000)}`, detail: 'RE:BERRY ₩990,000 promo; YAAN ₩1,500,000; Ppeum sells per 100 shots (₩299,000 event, minimum 300); Oganacell 400 shots ₩1,400,000; Liftique and Ocean "from ₩390,000–500,000" without shot counts.' },
  { treatment: 'Thermage FLX, 600 shots', range: '₩1,790,000–3,000,000', usdRange: `${usd(1790000)}–${usd(3000000)}`, detail: 'Ppeum ₩1,790,000 event (list ₩3,000,000); Oganacell ₩1,800,000; RE:BERRY ₩1,990,000 promo; YAAN ₩2,190,000; Repic ₩2,300,000; Liftique from ₩2,390,000.' },
  { treatment: 'Shurink Universe (Korean HIFU), 300 shots', range: '₩99,000–390,000', usdRange: `${usd(99000)}–${usd(390000)}`, detail: 'Repic first-visit 300 shots plus AI skin analysis ₩99,000; YAAN ₩390,000; Ppeum ₩49,000 per 100 shots; Ocean from ₩79,000. This is the domestic alternative to Ultherapy and the reason the Korean lifting menu is so cheap.' },
  { treatment: 'Korean-brand wrinkle Botox, 1 area', range: '₩9,900–57,000', usdRange: `${usd(9900)}–${usd(57000)}`, detail: 'RE:BERRY ₩9,900 promo (one per patient); Repic ₩20,000; Oganacell Neuronox ₩50,000; Ppeum ₩57,000. Allergan at Ppeum ₩80,000 wrinkle, ₩190,000 full-face skin Botox.' },
  { treatment: 'Pico laser toning, 1 session', range: '₩9,900–290,000', usdRange: `${usd(9900)}–${usd(290000)}`, detail: 'Ppeum ₩9,900 event (list ₩19,500); Repic ₩150,000; YAAN ₩150,000; Oganacell ₩240,000; Liftique from ₩290,000. The low end is a loss-leader single session; packages of five or ten are the norm.' },
  { treatment: 'Juvelook skin booster, 4cc', range: '₩340,000–490,000', usdRange: `${usd(340000)}–${usd(490000)}`, detail: 'RE:BERRY ₩340,000; Repic ₩400,000; Ppeum ₩490,000; YAAN full-face ₩490,000. Sculptra 1 vial ₩600,000–1,000,000 (Repic, Ppeum, Liftique, YAAN).' },
  { treatment: 'Exosome (ASCE+), 5cc', range: '₩199,000–400,000', usdRange: `${usd(199000)}–${usd(400000)}`, detail: 'Ppeum ₩199,000 event (list ₩370,000); Repic ₩400,000; often bundled with Potenza microneedling at ₩490,000–637,000.' },
  { treatment: 'Potenza RF microneedling', range: '₩49,000–400,000', usdRange: `${usd(49000)}–${usd(400000)}`, detail: 'Ppeum ₩49,000 event; Repic ₩150,000; Delphic ₩159,000–338,000 by tip; YAAN pore tip ₩400,000. Tip changes are billed separately at some clinics.' },
  { treatment: 'Aqua peel / hydrafacial', range: '₩9,900–350,000', usdRange: `${usd(9900)}–${usd(350000)}`, detail: 'Ppeum ₩9,900 event; RE:BERRY ₩49,000; Repic ₩80,000; Liftique ₩90,000; YAAN HydraFacial ₩350,000.' },
  { treatment: 'Laser hair removal, small area', range: '₩12,000–40,000', usdRange: `${usd(12000)}–${usd(40000)}`, detail: 'Ppeum underarms ₩12,000 (women) to ₩40,000 (men), full body ₩308,000–340,000; Repic ₩25,000–40,000 per area; Liftique from ₩35,000 across 78 options.' },
];

const CLINICS = [
  { name: 'Ppeum Global Clinic', district: 'Seocho-gu (Gangnam Station area)', url: 'https://global.ppeum.com/', vat: 'Cart shows totals excluding tax; no VAT statement on menu', parity: 'Not stated; multilingual coordinators listed', note: 'Largest published menu and lowest event prices; event prices expire October 31, 2026. Book through the global reservation page.' },
  { name: 'Repic Clinic', district: 'Gangnam-gu (Yeoksam)', url: 'https://www.repicclinic.com/en/package', vat: '"10% VAT excluded" on most lines', parity: 'States Koreans and international patients pay the same prices', note: 'Publishes a dated price column (September 2026) and first-visit packages; notes the cosmetic tax refund is no longer available.' },
  { name: 'Delphic Clinic', district: 'Gangnam-gu', url: 'https://www.delphicclinic.com/en/prices', vat: '"Exclusive of VAT"', parity: '"No foreigner surcharge. The price Korean patients pay is the price you pay."', note: 'Prices dated September 2026; sells most lifting devices inside one-day packages (₩770,000–4,860,000) rather than standalone.' },
  { name: 'RE:BERRY Clinic Gangnam', district: 'Seocho-gu', url: 'https://gangnamskinclinicreberry.com/', vat: 'Every promo price "VAT excluded"', parity: 'Headline "same price as locals"', note: 'October to December 2026 promotion pricing; lifting packages ₩1.89–2.23 million; separate international packages quoted in dollars.' },
  { name: 'Liftique Dermatology Clinic', district: 'Seocho-gu (Sinsa)', url: 'https://www.gangnamdermatologists.com/clinic-price-list', vat: '"All prices in KRW and exclude 10% VAT"', parity: 'Not stated', note: 'Price list "last reviewed October 2026" but still claims a tourist VAT refund that ended December 31, 2025; ask them to confirm.' },
  { name: 'YAAN Skin Clinic', district: 'Gangnam-gu (Bongeunsa)', url: 'https://www.gangnamskincareclinic.com/seoul-skin-clinic-price-list', vat: 'Says to confirm total, VAT and area at consultation', parity: 'Links to a "same local prices" page', note: 'Full device menu with shot counts (Ultherapy, Thermage, Shurink) updated October 2026; brand-split Botox pricing (Xeomin vs Allergan).' },
  { name: 'Oganacell Dermatology, Magok', district: 'Gangseo-gu', url: 'https://www.oganamagokworld.com/en/blog/korea-skin-treatment-guide', vat: '"10% VAT is added separately"', parity: 'Not stated; notes refund discontinued January 2026', note: 'Outside Gangnam, near Gimpo Airport; publishes "actual prices at our clinic" dated March 2026.' },
  { name: 'Ocean Clinic Gangnam', district: 'Seocho-gu', url: 'https://en.gangnam.oceanclinic.co.kr/brandings/3771', vat: '"10% VAT will be added"', parity: 'Not stated', note: 'Korean-language price list with dozens of device options; English pages list "from" prices.' },
  { name: 'Egg Clinic (Sinsa) and ELEV Clinic (Cheongdam)', district: 'Seocho-gu / Gangnam-gu', url: 'https://eggclinicseoul.com/products/31228', vat: '"VAT excluded"', parity: 'Not stated', note: 'Rejuran-only published pricing: Egg ₩250,000 per 2cc syringe, ELEV ₩350,000 per 2cc and ₩650,000 full face 4cc.' },
];

const FAQ_ITEMS = [
  {
    question: 'How much is Rejuran in Korea?',
    answer:
      'From nine Seoul clinic menus read on October 30, 2026, Rejuran Healer 2cc runs ₩169,000 to ₩400,000, about $127 to $300 before 10 percent VAT. The low end is an event price at Ppeum (list ₩270,000); Ocean and RE:BERRY list ₩179,000 to ₩180,000; Repic and Egg ₩250,000; Delphic, YAAN and ELEV ₩350,000; Oganacell ₩400,000. Rejuran I (eye) and HB variants are priced per 1cc, usually ₩200,000 to ₩300,000. A full course is typically three to four sessions.',
  },
  {
    question: 'How much is Ultherapy or Thermage in Korea compared with the US?',
    answer:
      'Thermage FLX 600 shots is published at ₩1.79 to 3.0 million, about $1,350 to $2,260, and Ultherapy Prime 300 shots at ₩990,000 to 1.5 million, about $745 to $1,130. US clinics commonly quote $2,500 to $5,000 for a full-face Thermage or Ultherapy session, though US pricing is rarely published, so compare against a written US quote with the same shot count. Korea’s domestic HIFU device, Shurink Universe, is priced at a fraction of Ultherapy (300 shots from ₩99,000 to ₩390,000) and is what most local patients buy.',
  },
  {
    question: 'How much is Botox in Korea?',
    answer:
      'Korean-brand wrinkle Botox for one area is published at ₩9,900 to ₩57,000, about $7 to $43, with promotional one-area prices under ₩20,000 common. Allergan is priced separately and higher, ₩80,000 to ₩160,000 per area at the clinics that list it, and jaw or masseter Botox runs ₩30,000 to ₩350,000 depending on brand and units. Ask which brand and how many units a quoted price covers; most menus price Korean toxins (Botulax, Neuronox, Coretox) by area, not by unit.',
  },
  {
    question: 'Do Korean clinic prices include VAT?',
    answer:
      'Usually not. Repic, Delphic, RE:BERRY, Liftique, Oganacell, Ocean, Egg and ELEV all state their menu prices exclude the 10 percent VAT, and Ppeum’s cart shows totals excluding tax. Add 10 percent to any Korean menu price to get what you will pay. The foreign-patient VAT refund on cosmetic procedures ended on December 31, 2025, so a clinic page still promising a refund is out of date.',
  },
  {
    question: 'Do foreigners pay more than Koreans at skin clinics?',
    answer:
      'Korean law does not require identical prices, and dual pricing has been documented at some cosmetic clinics. In response, Repic, Delphic, RE:BERRY and Aive state in writing that international patients pay the same prices as Koreans, and YAAN links to a same-price page. Clinics that do not say so are not necessarily charging more, but ask for the won menu price and compare it with what the published list shows.',
  },
  {
    question: 'How do I book a Seoul dermatology appointment from the US?',
    answer:
      'Most of the clinics above have an English reservation page or form; Ppeum, Repic, Delphic, RE:BERRY and YAAN also take messages through KakaoTalk, WhatsApp or LINE. Send the treatments you want, your dates and a face photo if asked; the clinic confirms a slot and, for device treatments, may ask you to arrive for a skin analysis first. Walk-ins are common in Gangnam for injectables, but device sessions like Thermage book out. No deposit is typical for dermatology; you pay after treatment by foreign card.',
  },
  {
    question: 'How long should I plan for skin treatments in Seoul?',
    answer:
      'Injectables, toning and Shurink are same-day with no downtime. Rejuran and other skin boosters leave visible bumps or redness for one to three days. Thermage and Ultherapy need no downtime but results build over two to three months. Potenza and fractional lasers can leave redness for several days. A one-week trip comfortably fits a lifting device session, one or two booster sessions and a laser session, spaced a day or two apart.',
  },
  {
    question: 'Are Korean skin treatment devices the same as in the US?',
    answer:
      'Thermage FLX and Ultherapy Prime are the same FDA-cleared devices used in US practices. Shurink, Oligio, Onda, Titanium, Density and Sofwave are domestic or regional devices; some, like Sofwave, are FDA-cleared, others are not marketed in the US. Rejuran (polynucleotide), Juvelook and exosome products are not FDA-approved in the United States; they are legal in Korea under Korea’s Ministry of Food and Drug Safety. Treatments you cannot get at home are also treatments your US dermatologist has not seen, which matters if something goes wrong.',
  },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'Ppeum Global Clinic: price menu and reservation page (event prices to 2026-10-31)', url: 'https://global.ppeum.com/front/reservation?branchMap=global_eng' },
  { label: 'Repic Clinic: packages and September 2026 price column', url: 'https://www.repicclinic.com/en/package' },
  { label: 'Repic Clinic: collagen boosters, Juvelook and Rejuran prices (2026-09-29)', url: 'https://www.repicclinic.com/en/column/collagen-boosters-juvelook-rejuran' },
  { label: 'Delphic Clinic: prices (September 2026)', url: 'https://www.delphicclinic.com/en/prices' },
  { label: 'RE:BERRY Clinic Gangnam: October to December 2026 promotion', url: 'https://gangnamskinclinicreberry.com/' },
  { label: 'Liftique Dermatology Clinic: price list (reviewed October 2026)', url: 'https://www.gangnamdermatologists.com/clinic-price-list' },
  { label: 'YAAN Skin Clinic: price list (updated October 2026)', url: 'https://www.gangnamskincareclinic.com/seoul-skin-clinic-price-list' },
  { label: 'Oganacell Dermatology Magok: Korea skin treatment guide with clinic prices (2026-03-31)', url: 'https://www.oganamagokworld.com/en/blog/korea-skin-treatment-guide' },
  { label: 'Ocean Clinic Gangnam: Rejuran page (English) and Korean price list', url: 'https://en.gangnam.oceanclinic.co.kr/brandings/3771' },
  { label: 'Egg Clinic Sinsa: Rejuran pricing', url: 'https://eggclinicseoul.com/products/31228' },
  { label: 'ELEV Clinic Cheongdam: Rejuran pricing', url: 'https://seoulskinclinic.co.kr/rejuran-seoul.html' },
  { label: 'Aive Clinic Seoul: 2026 Seoul skin clinic price ranges for foreigners (market ranges, 2026-10-08)', url: 'https://aiveclinicseoul.com/korean-skin-clinic-prices-for-foreigners-the-complete-2026-cost-sheet/' },
  { label: 'Creatrip: Seoul dermatology clinic prices for Lienjang, Abijou, Xenia and others (marketplace, September 2026)', url: 'https://creatrip.com/en/blog/14485' },
  { label: 'The Korea Herald: VAT refund on cosmetic procedures for foreigners to end (2025-12-10)', url: 'https://www.koreaherald.com/article/10633779' },
  { label: 'Plastic Surgery Practice: discriminatory pricing for plastic surgery in Korea (dual pricing investigation)', url: 'https://plasticsurgerypractice.com/client-objectives/aesthetics/breast-augmentation/foreigner-ripoff-discriminatory-pricing-for-plastic-surgery-in-korea/' },
  { label: 'Korea Biomedical Review: dermatology 62.9% of foreign patient department visits in 2025 (2026-10-08)', url: 'https://www.koreabiomed.com/news/articleView.html?idxno=33434' },
];

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article' },
  twitter: { card: 'summary', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

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

const th = 'border border-gray-300 px-4 py-3 text-left font-semibold';
const td = 'border border-gray-300 px-4 py-3 align-top';

export default function KoreaDermatologyCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: { '@type': 'Organization', name: 'VitalityScout research', url: 'https://vitalityscout.com' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-10-30',
    dateModified: '2026-10-30',
    mainEntityOfPage: PAGE_URL,
    citation: SOURCES.map((s) => s.url),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism', item: 'https://vitalityscout.com/medical-tourism' },
      { '@type': 'ListItem', position: 3, name: 'South Korea', item: 'https://vitalityscout.com/destinations/south-korea' },
      { '@type': 'ListItem', position: 4, name: 'Dermatology Cost', item: PAGE_URL },
    ],
  };
  const faqSchema = buildFAQSchema(FAQ_ITEMS);
  const related = getRelatedGuides(PAGE_PATH, 4);

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          {[articleSchema, breadcrumbSchema, faqSchema].map((schema, i) => (
            <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          ))}
          <JourneyRail currentPath={PAGE_PATH} />

          <div className="bg-gray-50 border-b border-gray-200 mt-6">
            <div className="mx-auto max-w-4xl px-4 py-3">
              <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span className="mx-2">→</span>
                <Link href="/medical-tourism" className="hover:text-blue-600">Medical Tourism</Link>
                <span className="mx-2">→</span>
                <Link href="/destinations/south-korea" className="hover:text-blue-600">South Korea</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">Dermatology Cost</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">South Korea · Prices</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Korea Dermatology and Skin Treatment Cost (2026): Published Seoul Clinic Prices</h1>
              <p className="text-xl text-gray-600 mb-6">
                Dermatology is the single biggest reason foreigners visit Korean clinics, and unlike US practices, Seoul skin clinics publish their menus. Here is what nine of them charge, treatment by treatment.
              </p>
              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> on published Seoul menus read {PRICES_CHECKED}, <strong>Rejuran Healer 2cc costs ₩169,000 to ₩400,000</strong> (about $127 to $300), <strong>Thermage FLX 600 shots ₩1.79 to 3.0 million</strong> (about $1,350 to $2,260), <strong>Ultherapy Prime 300 shots ₩990,000 to 1.5 million</strong> (about $745 to $1,130), <strong>Korean-brand Botox from ₩9,900 per area</strong>, and <strong>pico toning from ₩9,900 a session</strong> on promotion. Add 10 percent VAT to almost every menu price; the tourist VAT refund on cosmetic treatments ended on December 31, 2025. Several clinics now state in writing that foreigners pay the same as locals.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Prices read from each clinic’s published menu on {PRICES_CHECKED} &mdash; event prices expire; confirm before booking. Won converted at 1,330 per dollar.</p>
              <p className="mt-1 text-sm text-gray-500">By VitalityScout research • 10 min read</p>
            </div>
          </section>

          <article className="mx-auto max-w-4xl px-4 py-12">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What we’ll cover</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#why" className="text-blue-600 hover:underline">1. Why skin clinics are Korea’s biggest draw</a></li>
                <li><a href="#menu" className="text-blue-600 hover:underline">2. Published prices by treatment</a></li>
                <li><a href="#clinics" className="text-blue-600 hover:underline">3. The nine clinics and their pricing rules</a></li>
                <li><a href="#vat" className="text-blue-600 hover:underline">4. VAT, the ended refund, and dual pricing</a></li>
                <li><a href="#us" className="text-blue-600 hover:underline">5. Versus US prices</a></li>
                <li><a href="#book" className="text-blue-600 hover:underline">6. How to book and plan a skin trip</a></li>
                <li><a href="#caveats" className="text-blue-600 hover:underline">7. What is not FDA-approved, and why it matters</a></li>
              </ul>
            </div>

            <h2 id="why" className="text-2xl font-bold text-gray-900 mt-4 mb-4">Why skin clinics are Korea’s biggest draw</h2>
            <p className="text-gray-700 mb-4">
              Dermatology accounted for 62.9 percent of foreign patients’ department-level visits to Korea in 2025, 1.31 million visits, far ahead of plastic surgery at 11.2 percent. The reasons are structural. Korea manufactures or licenses most of the devices and injectables its clinics use, so a Shurink HIFU session or a Korean-brand toxin costs a fraction of the imported equivalent; clinics compete on volume in a few square kilometers of Gangnam and Seocho; and the menus are published online, often in English with shot counts and syringe sizes. The result is a market where a foreigner can price a treatment plan before leaving home, which is what this page is for.
            </p>

            <h2 id="menu" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Published prices by treatment</h2>
            <p className="text-gray-700 mb-4">Ranges span the nine clinics whose menus we read. Prices exclude 10 percent VAT unless noted; dollar figures are our conversion at 1,330 won per dollar.</p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr><th className={th}>Treatment</th><th className={th}>Published range (₩)</th><th className={th}>About (USD)</th><th className={th}>Who charges what</th></tr>
                </thead>
                <tbody>
                  {MENU.map((m, i) => (
                    <tr key={m.treatment} className={i % 2 ? 'bg-gray-50' : ''}>
                      <td className={`${td} font-medium`}>{m.treatment}</td>
                      <td className={`${td} whitespace-nowrap font-semibold text-green-700`}>{m.range}</td>
                      <td className={`${td} whitespace-nowrap`}>{m.usdRange}</td>
                      <td className={td}>{m.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="clinics" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The nine clinics and their pricing rules</h2>
            <p className="text-gray-700 mb-6">Listed, not ranked. Each row records what the clinic’s own site states about VAT and foreigner pricing. None of these is an endorsement; see the <Link href="/guides/how-to-verify-korea-clinic" className="text-purple-700 hover:underline">verification guide</Link> for the registration check that applies to every clinic.</p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr><th className={th}>Clinic</th><th className={th}>Where</th><th className={th}>VAT statement</th><th className={th}>Same price as locals?</th><th className={th}>Notes</th></tr>
                </thead>
                <tbody>
                  {CLINICS.map((c, i) => (
                    <tr key={c.name} className={i % 2 ? 'bg-gray-50' : ''}>
                      <td className={`${td} font-medium`}><a href={c.url} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">{c.name}</a></td>
                      <td className={td}>{c.district}</td>
                      <td className={td}>{c.vat}</td>
                      <td className={td}>{c.parity}</td>
                      <td className={td}>{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-8">Also widely booked but without a published won menu on their own sites: Lienjang, Toxnfill, Abijou, Xenia and Medicube, whose prices appear only on the Creatrip marketplace (for example Lienjang Shurink Universe 300 shots ₩105,000; Abijou Korean Botox one area ₩16,500). Treat marketplace prices as indicative.</p>

            <h2 id="vat" className="text-2xl font-bold text-gray-900 mt-12 mb-4">VAT, the ended refund, and dual pricing</h2>
            <p className="text-gray-700 mb-4">
              Three things change the number you actually pay. First, almost every menu is quoted before the 10 percent VAT; add it. Second, the refund that let foreign patients reclaim that VAT on cosmetic and dermatology procedures ended on December 31, 2025, after the government left it out of the 2025 tax revision; two clinic pages we read still advertise it, which is a sign the page is stale rather than a real discount. Third, Korean law does not require identical prices for foreigners and locals, and an investigation of Gangnam cosmetic clinics found some quoting foreigners nearly double. The clinics that have responded by publishing a same-price pledge are listed above; for any other clinic, ask for the won menu price and check it against the published list.
            </p>

            <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Versus US prices</h2>
            <p className="text-gray-700 mb-4">
              US dermatology practices rarely publish prices, so the honest comparison is against a written US quote. As a rule of thumb from US practice price lists, full-face Thermage or Ultherapy is commonly quoted at $2,500 to $5,000, name-brand Botox at $12 to $20 per unit (roughly $300 to $600 for a few areas), and a series of laser toning sessions at $200 to $500 each. Against that, Seoul publishes Thermage at $1,350 to $2,260, Ultherapy 300 shots at $745 to $1,130, and Korean toxin by the area for under $50. The gap is largest for domestic devices and injectables (Shurink, Korean toxins, Rejuran, Juvelook) and smallest for imported branded products (Allergan, Sculptra), where Korean prices are closer to US levels. A trip is rarely justified by injectables alone; it is justified by a lifting device session plus boosters, or by combining skin care with another procedure.
            </p>

            <h2 id="book" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to book and plan a skin trip</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
              <li><strong>Confirm registration.</strong> Any clinic treating foreign patients must be registered on the Medical Korea portal; dermatology clinics are no exception. The lookup takes a minute.</li>
              <li><strong>Pick treatments from the published menu</strong> and write them down with shot counts or syringe sizes. "Lifting" means nothing; "Thermage FLX 600 shots" means one thing.</li>
              <li><strong>Message the clinic</strong> through its English reservation page, KakaoTalk, WhatsApp or LINE with the list and your dates. Ask whether the menu price is current, whether VAT is included, and whether foreigners pay the same price.</li>
              <li><strong>Sequence the week.</strong> Devices first (Thermage, Ultherapy or Shurink), boosters a day or two later, lasers last. Leave two clear days before flying for any redness to settle.</li>
              <li><strong>Pay after treatment.</strong> Dermatology rarely requires a deposit; foreign cards are accepted. Keep the itemized receipt, which lists each product and lot number.</li>
              <li><strong>Carry home the product names.</strong> Your US dermatologist will want to know exactly which polynucleotide, filler or toxin was used if anything reacts.</li>
            </ol>

            <h2 id="caveats" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What is not FDA-approved, and why it matters</h2>
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6 mb-6">
              <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
              <p className="text-sm text-red-800">
                Rejuran, Juvelook, exosome products and several Korean devices and toxins on these menus are not approved or cleared by the US FDA. They are legal in Korea under Korea’s Ministry of Food and Drug Safety. The FDA has issued warnings about unapproved injectables and exosome products marketed in the United States. This information is educational only; consult a qualified clinician before any treatment, and tell your US physician exactly what was used.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              Thermage FLX, Ultherapy and Allergan’s Botox are the same FDA-cleared or approved products used in US practices, so a Korean session is a cheaper version of a known quantity. The domestic products are different: they may be excellent, they are not available at home, and a US clinician treating a complication will be working without experience of them. That is an argument for choosing a registered clinic, keeping lot numbers, and starting with products that have a track record rather than the newest booster on the menu.
            </p>

            <div className="my-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
              {FAQ_ITEMS.map((f) => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
            </div>

            <div className="my-10">
              <EmailCaptureCard
                title="Get the Seoul skin clinic price sheet"
                description="All nine published menus in one spreadsheet with shot counts, VAT rules and same-price statements, plus a booking message template."
                source="guide_korea_dermatology_cost"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
              <ol className="space-y-2 text-sm text-gray-700 list-decimal pl-5">
                {SOURCES.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.label}</a></li>
                ))}
              </ol>
            </div>
          </article>

          <JourneyNext currentPath={PAGE_PATH} />
          <RelatedGuides items={related} />
          <MedicalDisclaimer />
        </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
