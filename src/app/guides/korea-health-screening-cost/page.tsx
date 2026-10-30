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

const PAGE_PATH = '/guides/korea-health-screening-cost';
const PAGE_URL = `https://vitalityscout.com${PAGE_PATH}`;
const PAGE_TITLE = 'Korea Health Screening Cost (2026): Published Check-Up Package Prices at Seoul Hospitals';
const PAGE_DESCRIPTION =
  'What a comprehensive health check-up in Seoul costs in 2026, from published hospital price lists: Seoul National University Hospital from $980, Samsung Medical Center from ₩1.87M, Asan from ₩1.75M, Seoul St. Mary’s from ₩1.3M, KMI specialty packages from ₩800,000. What each tier includes and how to book.';
const PRICES_CHECKED = 'October 30, 2026';
const KRW = 1330; // won per US dollar used for conversions on this page, noted in the text

function usd(won: number): string {
  return `$${Math.round(won / KRW).toLocaleString('en-US')}`;
}

// Every price below was read on the provider's own published page or brochure on
// the date above. USD figures from SNUH are printed by SNUH; all other USD figures
// are our conversion at 1,330 won per dollar and are labelled as such.
const HOSPITALS = [
  {
    name: 'Seoul National University Hospital Healthcare System Gangnam Center',
    district: 'Gangnam-gu',
    url: 'https://healthcare.snuh.org/en',
    priceUrl: 'https://healthcare.snuh.org/pr/hsp_en.pdf',
    priced: 'USD, printed by SNUH; valid March 1, 2026 to February 28, 2027',
    tiers: [
      { tier: 'Standard (age 34 and under)', price: '$980 men / $1,060 women', includes: 'Consultation, body composition, ECG, lung function, chest X-ray, blood panel with tumor markers, hepatitis and HIV, H. pylori, urinalysis, sedated gastroscopy, abdominal ultrasound; women add gyn exam, ovarian marker and Pap.' },
      { tier: 'Standard (35 and over)', price: '$1,020 men / $1,140 women', includes: 'Above plus fundus exam; men add prostate marker; women add mammography.' },
      { tier: 'Intensive Digestive', price: '$1,920 men / $2,230 women', includes: 'Standard plus sedated colonoscopy, abdominal-pelvic CT, pepsinogen, FibroScan.' },
      { tier: 'Intensive Brain', price: '$2,400 men / $2,530 women', includes: 'Standard plus brain MRI and MRA including carotid.' },
      { tier: 'Intensive Cardiovascular', price: '$2,410 men / $2,540 women', includes: 'Standard plus coronary CT with calcium scoring, treadmill, echocardiogram, carotid ultrasound, arterial stiffness.' },
      { tier: 'Intensive Cancer', price: '$2,970 men / $2,920 women', includes: 'Standard plus sedated colonoscopy, abdominal-pelvic CT, low-dose chest CT, thyroid ultrasound; men add laryngoscopy, FibroScan and prostate MRI; women add breast and gyn ultrasound, HPV, 3D mammography and bone density.' },
      { tier: 'Premium (by age band)', price: '$5,210–5,970 men / $5,510–6,500 women', includes: 'Standard plus treadmill, echo, carotid ultrasound, low-dose chest CT, abdominal-pelvic CT, sedated colonoscopy, brain MRI/MRA, 108-item allergy panel; women 50–64 add breast MRI.' },
    ],
    addOns: 'Sedated colonoscopy $449; brain MRI/MRA $1,222; carotid ultrasound $313; pancreatic MRI $939 plus $283 contrast.',
    english: 'English medical reports and a CD of images are provided with package programs. Contact: en_healthcare@snuh.org.',
    booking: 'Email the International Healthcare Team with your preferred package and dates; they confirm fasting and medication instructions. Packages are priced in USD for international patients.',
  },
  {
    name: 'Samsung Medical Center Health Promotion Center',
    district: 'Gangnam-gu (Irwon)',
    url: 'https://www.samsunghospital.com/en/health-promotion-center/screening-packages.do',
    priceUrl: 'https://www.samsunghospital.com/en/health-promotion-center/screening-packages.do',
    priced: 'Korean won, published on the English site',
    tiers: [
      { tier: 'Primary (3 hours)', price: `₩1,874,000 men / ₩2,323,000 women (about ${usd(1874000)} / ${usd(2323000)})`, includes: 'Body measurement, eye exam, chest X-ray, ECG, sedated gastroscopy, abdominal ultrasound, blood, urine and stool; men add PSA; women add CA-125, mammography from 35, breast ultrasound, Pap, HPV and pelvic ultrasound.' },
      { tier: 'Executive on Cancer (5 hours)', price: `₩2,838,000 men / ₩3,550,000 women (about ${usd(2838000)} / ${usd(3550000)})`, includes: 'Primary plus thyroid ultrasound, low-dose chest CT, sedated colonoscopy, abdominal CT, tumor markers.' },
      { tier: 'Executive (4 hours)', price: `₩2,990,000 men / ₩3,439,000 women (about ${usd(2990000)} / ${usd(3439000)})`, includes: 'Primary plus echocardiogram, carotid Doppler, sedated colonoscopy, bone density and cardiac blood markers; no CT.' },
      { tier: 'Premium (7–8 hours)', price: `₩7,857,000 men / ₩8,216,000 women (about ${usd(7857000)} / ${usd(8216000)})`, includes: 'Brain MRI and MRA, carotid Doppler, echo, pulse-wave velocity, low-dose chest CT, dental, audiometry, bone density, PET-CT from age 40; men add coronary calcium CT.' },
    ],
    addOns: `Brain MRI and MRA ₩1,500,000 (${usd(1500000)}); colonoscopy ₩265,000; abdominal CT ₩290,000; echocardiogram ₩285,000; coronary calcium CT ₩185,000; low-dose chest CT ₩200,000.`,
    english: 'The page does not state whether an interpreter is included. International Healthcare Center: ihs.smc@samsung.com, +82-2-3410-0200. Site in English, Korean, Chinese and Russian.',
    booking: 'Contact the International Healthcare Center by email with your package choice; ask explicitly whether interpreter and English report are included in the published price.',
  },
  {
    name: 'Asan Medical Center Health Screening & Promotion Center',
    district: 'Songpa-gu',
    url: 'https://eng.amc.seoul.kr/',
    priceUrl: 'https://eng.amc.seoul.kr/gb/resources/lang/footer/health_screening_promotion_center_en.pdf',
    priced: 'Korean won, in the English brochure (no validity date printed)',
    tiers: [
      { tier: 'New Essential A (under 40, 3 hours)', price: `₩1,750,000 men / ₩1,960,000 women (about ${usd(1750000)} / ${usd(1960000)})`, includes: 'Lung function, chest X-ray, ECG, sedated gastroscopy, abdominal ultrasound, eye, hearing, dental, blood with tumor markers, hepatitis and HIV; men add carotid ultrasound and sedated colonoscopy; women add thyroid ultrasound, mammography, breast ultrasound, Pap, pelvic ultrasound and HPV.' },
      { tier: 'New Essential B (40 and over, 3 hours)', price: `₩2,010,000 men / ₩2,226,000 women (about ${usd(2010000)} / ${usd(2226000)})`, includes: 'Essential A plus colonoscopy, vitamin D, bone density, spine X-ray; men add pulmonary CT.' },
      { tier: 'Cancer Specialized (5 hours)', price: `₩2,630,000 men / ₩2,640,000 women (about ${usd(2630000)} / ${usd(2640000)})`, includes: 'Essential B plus abdominal-pelvic CT; men add thyroid and prostate ultrasound; women add chest CT.' },
      { tier: 'Heart Specialized (5 hours)', price: `₩2,850,000 men / ₩3,190,000 women (about ${usd(2850000)} / ${usd(3190000)})`, includes: 'Coronary CT, fat CT, carotid ultrasound, echo, treadmill, pulse-wave velocity, cardiac blood markers.' },
      { tier: 'Intensive (6 hours)', price: `₩3,440,000 men / ₩3,780,000 women (about ${usd(3440000)} / ${usd(3780000)})`, includes: 'Cancer and Heart Specialized combined, plus dental X-ray.' },
      { tier: 'Platinum (7 hours)', price: `₩5,810,000 men / ₩6,150,000 women (about ${usd(5810000)} / ${usd(6150000)})`, includes: 'Intensive plus brain MRI and MRA, atherosclerosis marker, allergy panel, thyroid autoantibodies, bone turnover markers, personal nurse.' },
      { tier: 'Premium overnight (2 days/1 night or 3 days/2 nights)', price: `₩6,650,000–8,700,000 (about ${usd(6650000)}–${usd(8700000)})`, includes: 'Premium guestroom, CT, MRI and a dedicated team.' },
    ],
    addOns: 'Not itemized in the brochure.',
    english: 'Brochure headlines an on-call system, private translator and fast-track service. Contact: hpc_admin@amc.seoul.kr.',
    booking: 'Email the center with your package and dates. The brochure is undated, so confirm the current price before paying.',
  },
  {
    name: 'Seoul St. Mary’s Hospital Health Promotion Center (Catholic University)',
    district: 'Seocho-gu',
    url: 'https://healthcare.cmcseoul.or.kr/en/index.do',
    priceUrl: 'https://healthcare.cmcseoul.or.kr/en/index.do',
    priced: 'Korean won, published on the English "International" program pages',
    tiers: [
      { tier: 'International Basic', price: `₩1,300,000 men / ₩1,450,000 women (about ${usd(1300000)} / ${usd(1450000)})`, includes: 'Gastroscopy, abdominal ultrasound, tumor markers for colon, liver, pancreas and prostate or ovary, ECG.' },
      { tier: 'International Digestive Intensive', price: `₩2,260,000 men / ₩2,410,000 women (about ${usd(2260000)} / ${usd(2410000)})`, includes: 'Abdominal-pelvic CT, gastroscopy and colonoscopy.' },
      { tier: 'International Heart Intensive', price: `₩2,690,000 men / ₩2,840,000 women (about ${usd(2690000)} / ${usd(2840000)})`, includes: 'Coronary 3D CT, echo, carotid ultrasound, pulse-wave velocity, gastroscopy.' },
      { tier: 'International Cancer Intensive', price: `₩2,940,000–3,040,000 men / ₩3,450,000–3,570,000 women (about ${usd(2940000)}–${usd(3040000)} / ${usd(3450000)}–${usd(3570000)})`, includes: 'Low-dose chest CT, abdominal-pelvic CT, sedated gastroscopy and colonoscopy, expanded tumor markers, thyroid ultrasound, bone density. The overview and detail pages print different figures; both are shown.' },
      { tier: 'International Marian S', price: `₩6,320,000 men / ₩6,940,000 women (about ${usd(6320000)} / ${usd(6940000)})`, includes: 'Brain MRI and MRA, three CTs, gastroscopy and colonoscopy, echo, carotid ultrasound, personally assigned nurse.' },
      { tier: 'International Marian P', price: `₩7,660,000–7,840,000 men / ₩8,260,000–8,460,000 women (about ${usd(7660000)}–${usd(7840000)} / ${usd(8260000)}–${usd(8460000)})`, includes: 'Marian S plus torso and brain PET-CT and spinal MRI.' },
      { tier: 'International Kids', price: `₩900,000 boys / ₩980,000 girls (about ${usd(900000)} / ${usd(980000)})`, includes: 'Basic labs and ECG.' },
    ],
    addOns: 'Not itemized on the international pages.',
    english: 'Marian S and P include a personally assigned nurse; interpreter inclusion is not stated for the lower tiers.',
    booking: 'Use the international health promotion contact on the center’s English site; ask which figure applies where the pages disagree.',
  },
  {
    name: 'KMI Korea Medical Institute (Global program)',
    district: 'Jongno-gu and branches in Gangnam, Yeouido, Suwon, Busan and others',
    url: 'https://global.kmi.or.kr/examination/foreigner_examination',
    priceUrl: 'https://global.kmi.or.kr/examination/foreigner_examination',
    priced: 'Korean won for specialty packages and add-ons on the foreigner page; the main Standard, Signature, Noble and Whole Body tiers are not priced on KMI’s own site',
    tiers: [
      { tier: 'Youth', price: `₩300,000 (about ${usd(300000)})`, includes: 'Entry-level panel for younger adults.' },
      { tier: 'Women’s Precision', price: `₩800,000 (about ${usd(800000)})`, includes: 'Women’s cancer and gynecologic screening set.' },
      { tier: 'Digestive', price: `₩900,000 (about ${usd(900000)})`, includes: 'Five-cancer genetic test, upper and lower endoscopy, 74 further items.' },
      { tier: 'Comprehensive / Cardio-cerebrovascular', price: `₩1,000,000 each (about ${usd(1000000)})`, includes: 'General panel; or heart and brain vascular screening set.' },
      { tier: 'Major Cancer', price: `₩1,200,000 (about ${usd(1200000)})`, includes: 'Cancer-focused imaging and markers.' },
      { tier: 'Standard / Signature / Noble (main tiers)', price: 'Not priced on KMI’s site; marketplace listings show roughly $340–380 / $650–760 / $1,330–1,520', includes: 'Standard: labs with tumor markers, chest X-ray, abdominal ultrasound, gastroscopy or alternative. Signature adds colonoscopy or M2-PK, pelvic or prostate ultrasound and two CT or ultrasound options. Noble adds thyroid, carotid and cardiac ultrasound, bone density, one MRI and a genetic panel.' },
    ],
    addOns: `Brain MRI ₩400,000 (${usd(400000)}); brain MRA ₩280,000; spine MRI ₩400,000; CTs ₩130,000 each; cardiac calcium CT ₩150,000; sedated colonoscopy ₩210,000; echo ₩150,000; 118-item allergy panel ₩136,000.`,
    english: 'Phone line has an English option; the Whole Body tier includes a dedicated one-to-one coordinator; an interpreter service guide is posted. KMI states that refusing some tests does not reduce the fee.',
    booking: 'Book through the KMI Global page or by phone; marketplaces such as Creatrip also sell KMI packages in USD with an English report promised in two to three weeks.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How much does a full health check-up cost in Korea for a foreigner?',
    answer:
      'From published 2026 price lists: Seoul National University Hospital’s Gangnam center charges $980 to $1,140 for its Standard program and $1,920 to $2,970 for Intensive programs, priced in dollars for international patients. Samsung Medical Center’s Primary package is ₩1,874,000 for men and ₩2,323,000 for women, about $1,400 to $1,750. Asan’s Essential A starts at ₩1,750,000, about $1,320. Seoul St. Mary’s International Basic is ₩1,300,000, about $980. KMI’s specialty packages run ₩300,000 to ₩1,200,000, about $225 to $900. Premium overnight programs with brain MRI and PET-CT reach ₩6 to 8.7 million, about $4,500 to $6,500.',
  },
  {
    question: 'How does that compare with an executive physical in the US?',
    answer:
      'US executive physicals are typically quoted at $2,500 to $15,000, and the best-known programs price on request. A Korean Intensive package at $2,000 to $3,000 generally includes sedated gastroscopy and colonoscopy, CT imaging and tumor markers, items that are often extra or excluded in US programs. The comparison is only meaningful line by line, so match the Korean package contents against the US quote you were given.',
  },
  {
    question: 'What is included in a Korean comprehensive check-up?',
    answer:
      'Even entry tiers include a sedated gastroscopy and abdominal ultrasound, which sets them apart from a US annual physical. Mid tiers add sedated colonoscopy, low-dose chest CT, abdominal-pelvic CT, thyroid and carotid ultrasound, echocardiogram and coronary calcium scoring. Top tiers add brain MRI and MRA, PET-CT and overnight stays. Every hospital publishes the item list; read it, because the differences between packages are almost entirely which imaging is included.',
  },
  {
    question: 'How long does the screening take and when do I get results?',
    answer:
      'Published durations are 3 hours for entry tiers, 4 to 6 hours for intensive tiers and 7 to 8 hours or an overnight stay for premium programs. Most results are available within days; Seoul National University Hospital provides English reports and a CD of images with its packages, and marketplace sellers of KMI packages promise a full English report in two to three weeks. Ask what is delivered on the day versus later.',
  },
  {
    question: 'Do I need to fast or prepare?',
    answer:
      'Yes. Every package with gastroscopy or colonoscopy requires fasting and, for colonoscopy, bowel preparation the day before, so the hospital will send instructions once you book. Plan the screening for early in your trip so that any follow-up imaging or a specialist consult can happen before you fly home.',
  },
  {
    question: 'Is an English interpreter included in the price?',
    answer:
      'Sometimes. Seoul National University Hospital states that English reports and images are provided. Asan’s brochure advertises a private translator and fast-track service. KMI includes a dedicated coordinator only in its Whole Body tier. Samsung Medical Center’s page is silent on it. Ask in writing whether interpretation and an English report are included in the published figure or billed separately.',
  },
  {
    question: 'Do foreigners pay more than Koreans for a check-up?',
    answer:
      'The big hospitals publish separate international menus, so direct parity cannot be confirmed from their pages. No provider we read states a foreign-patient surcharge, and KMI’s Korean-descent program advertises discounts. Prices for foreigners are not covered by Korean national insurance, which is why they look higher than what residents pay out of pocket for an insured screening.',
  },
  {
    question: 'Can I use HSA or FSA funds for a check-up in Korea?',
    answer:
      'Diagnostic screening is generally a qualified medical expense under IRS Publication 502 regardless of where it is performed, but you need an itemized receipt in English and your plan administrator may ask questions. Travel costs are not covered. Our guide on using HSA and FSA funds for care abroad covers the rules and documentation.',
  },
  {
    question: 'How do I book a health screening in Seoul from the US?',
    answer:
      'Email the hospital’s international healthcare center or health promotion center with the package name, your sex and age band, and two or three preferred dates. They reply with a confirmation, fasting instructions and payment terms; most accept foreign cards on the day. Book six to eight weeks ahead for the university hospitals. Marketplaces such as Creatrip sell KMI and some hospital packages in USD with booking support, at a markup you can compare against the published won price.',
  },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'Seoul National University Hospital Healthcare System Gangnam Center: international package price list (USD, valid 2026-03-01 to 2027-02-28)', url: 'https://healthcare.snuh.org/pr/hsp_en.pdf' },
  { label: 'Seoul National University Hospital Healthcare System Gangnam Center: English site', url: 'https://healthcare.snuh.org/en' },
  { label: 'Samsung Medical Center Health Promotion Center: screening packages', url: 'https://www.samsunghospital.com/en/health-promotion-center/screening-packages.do' },
  { label: 'Asan Medical Center Health Screening & Promotion Center: English brochure (PDF)', url: 'https://eng.amc.seoul.kr/gb/resources/lang/footer/health_screening_promotion_center_en.pdf' },
  { label: 'Seoul St. Mary’s Hospital Health Promotion Center: international programs', url: 'https://healthcare.cmcseoul.or.kr/en/index.do' },
  { label: 'KMI Korea Medical Institute: foreigner examination programs and prices', url: 'https://global.kmi.or.kr/examination/foreigner_examination' },
  { label: 'KMI Korea Medical Institute: personal examination tiers', url: 'https://global.kmi.or.kr/examination/personal_examination' },
  { label: 'Creatrip: health checkup in Korea (marketplace listings for KMI and others, updated 2026-07)', url: 'https://creatrip.com/en/blog/15168' },
  { label: 'OCBC: Korea Medical Institute health screening packages promotion (2025-11-01 to 2026-03-31)', url: 'https://www.ocbc.id/en/promo/2025/11/27/korea-medical-institute' },
  { label: 'Inha University Hospital Health Promotion Center: selective exam item fees', url: 'https://inha.com/en/site/inhealth/checkup/exam' },
  { label: 'Haute Living: executive physical cost guide (US ranges)', url: 'https://www.hauteliving.com/hautemd/costs/executive-physical-cost' },
  { label: 'Mayo Clinic Executive Health Program: costs and insurance', url: 'https://www.mayoclinic.org/departments-centers/mayo-clinic-executive-health-program/sections/costs-insurance/ptc-20253525' },
  { label: 'Black Enterprise: Black women traveling to South Korea for preventive health care (2026-07-21)', url: 'https://www.blackenterprise.com/black-women-traveling-south-korea-preventive-health-care/' },
  { label: 'Korea Biomedical Review: dermatology and plastic surgery share of foreign patient visits; health screening 3.1% (2026-10-08)', url: 'https://www.koreabiomed.com/news/articleView.html?idxno=33434' },
  { label: 'IRS Publication 502: Medical and Dental Expenses', url: 'https://www.irs.gov/pub/irs-pdf/p502.pdf' },
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

export default function KoreaHealthScreeningCostGuide() {
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
      { '@type': 'ListItem', position: 4, name: 'Health Screening Cost', item: PAGE_URL },
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
                <span className="text-gray-900">Health Screening Cost</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">South Korea · Prices</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Korea Health Screening Cost (2026): Published Check-Up Package Prices at Seoul Hospitals</h1>
              <p className="text-xl text-gray-600 mb-6">
                Korea’s university hospitals publish their check-up menus with prices, which almost no US hospital does. Here are the lists, what each tier includes, and how to book from the US.
              </p>
              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> a comprehensive health check-up in Seoul costs about <strong>$1,000 to $1,500 for an entry package</strong> that already includes a sedated gastroscopy and abdominal ultrasound, <strong>$2,000 to $3,000 for an intensive package</strong> adding colonoscopy, CT and heart or cancer imaging, and <strong>$4,500 to $6,500 for premium programs</strong> with brain MRI, PET-CT and an overnight stay. Seoul National University Hospital prices in dollars for foreigners from $980; Samsung, Asan and Seoul St. Mary’s publish won prices from about ₩1.3 to 1.9 million; KMI’s specialty packages start at ₩300,000. A US executive physical is typically quoted at $2,500 to $15,000 with less imaging included.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Prices read from each provider’s published list on {PRICES_CHECKED} &mdash; confirm before booking. Won converted at 1,330 per dollar.</p>
              <p className="mt-1 text-sm text-gray-500">By VitalityScout research • 11 min read</p>
            </div>
          </section>

          <article className="mx-auto max-w-4xl px-4 py-12">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick comparison: entry package, men</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-700">
                      <th className="py-2 pr-4 font-semibold">Provider</th>
                      <th className="py-2 pr-4 font-semibold">Entry package</th>
                      <th className="py-2 pr-4 font-semibold">Price</th>
                      <th className="py-2 pr-4 font-semibold">Includes gastroscopy?</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="border-t border-purple-100"><td className="py-2 pr-4">Seoul St. Mary’s</td><td className="py-2 pr-4">International Basic</td><td className="py-2 pr-4 font-semibold">₩1,300,000 (~{usd(1300000)})</td><td className="py-2 pr-4">Yes</td></tr>
                    <tr className="border-t border-purple-100"><td className="py-2 pr-4">SNUH Gangnam Center</td><td className="py-2 pr-4">Standard, age 34 and under</td><td className="py-2 pr-4 font-semibold">$980</td><td className="py-2 pr-4">Yes, sedated</td></tr>
                    <tr className="border-t border-purple-100"><td className="py-2 pr-4">Asan Medical Center</td><td className="py-2 pr-4">New Essential A, under 40</td><td className="py-2 pr-4 font-semibold">₩1,750,000 (~{usd(1750000)})</td><td className="py-2 pr-4">Yes, sedated, plus colonoscopy for men</td></tr>
                    <tr className="border-t border-purple-100"><td className="py-2 pr-4">Samsung Medical Center</td><td className="py-2 pr-4">Primary</td><td className="py-2 pr-4 font-semibold">₩1,874,000 (~{usd(1874000)})</td><td className="py-2 pr-4">Yes, sedated</td></tr>
                    <tr className="border-t border-purple-100"><td className="py-2 pr-4">KMI</td><td className="py-2 pr-4">Comprehensive (specialty package)</td><td className="py-2 pr-4 font-semibold">₩1,000,000 (~{usd(1000000)})</td><td className="py-2 pr-4">Depends on tier</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What we’ll cover</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#why" className="text-blue-600 hover:underline">1. Why Americans fly to Seoul for a check-up</a></li>
                <li><a href="#tiers" className="text-blue-600 hover:underline">2. How the tiers work</a></li>
                <li><a href="#prices" className="text-blue-600 hover:underline">3. Published prices, hospital by hospital</a></li>
                <li><a href="#us" className="text-blue-600 hover:underline">4. Versus a US executive physical</a></li>
                <li><a href="#book" className="text-blue-600 hover:underline">5. How to book from the US</a></li>
                <li><a href="#caveats" className="text-blue-600 hover:underline">6. Caveats: overdiagnosis, follow-up and radiation</a></li>
              </ul>
            </div>

            <h2 id="why" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Americans fly to Seoul for a check-up</h2>
            <p className="text-gray-700 mb-4">
              Health screening centers saw 65,000 foreign patients in 2025, 3.1 percent of Korea’s department-level foreign visits, and Americans skew more toward check-ups, internal medicine and dental than Asian visitors do. The appeal is structural: Korea’s national screening culture means every big hospital runs a dedicated check-up floor that processes a full day of imaging and endoscopy in three to seven hours, and publishes the menu. One American patient profiled in July 2026 reported a preventive evaluation in Seoul for under $600 that caught findings missed at home. The price lists below are the ones she and others are reading.
            </p>

            <h2 id="tiers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the tiers work</h2>
            <p className="text-gray-700 mb-4">Every hospital uses the same ladder, under different names. The price differences are almost entirely about imaging.</p>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Tier</th>
                    <th className={th}>Typical price</th>
                    <th className={th}>What is added</th>
                    <th className={th}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className={td}>Entry (Basic, Standard, Primary, Essential)</td><td className={td}>$980–1,750</td><td className={td}>Blood panel with tumor markers, ECG, chest X-ray, sedated gastroscopy, abdominal ultrasound; women add mammography, Pap, pelvic ultrasound</td><td className={td}>3 hours</td></tr>
                  <tr className="bg-gray-50"><td className={td}>Intensive (Digestive, Heart, Cancer, Executive)</td><td className={td}>$1,900–3,000</td><td className={td}>Sedated colonoscopy, low-dose chest CT, abdominal-pelvic CT, thyroid and carotid ultrasound, echo, coronary calcium CT</td><td className={td}>4–6 hours</td></tr>
                  <tr><td className={td}>Platinum / Premium</td><td className={td}>$4,400–6,500</td><td className={td}>Brain MRI and MRA, PET-CT, allergy panels, personal nurse, sometimes an overnight guestroom</td><td className={td}>7–8 hours or overnight</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Published prices, hospital by hospital</h2>
            <p className="text-gray-700 mb-6">Read on each provider’s own page or brochure on {PRICES_CHECKED}. Seoul National University Hospital prints dollar prices; the others print won, converted here at 1,330 per dollar.</p>
            <div className="space-y-8">
              {HOSPITALS.map((h) => (
                <div key={h.name} className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    <a href={h.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 hover:underline">{h.name}</a>
                  </h3>
                  <p className="text-sm text-gray-500">{h.district} · Priced in {h.priced}</p>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-100">
                        <tr><th className={th}>Package</th><th className={th}>Published price</th><th className={th}>Includes</th></tr>
                      </thead>
                      <tbody>
                        {h.tiers.map((t, i) => (
                          <tr key={t.tier} className={i % 2 ? 'bg-gray-50' : ''}>
                            <td className={`${td} font-medium`}>{t.tier}</td>
                            <td className={`${td} whitespace-nowrap font-semibold text-green-700`}>{t.price}</td>
                            <td className={td}>{t.includes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                    <div><dt className="font-semibold text-gray-900">Add-ons</dt><dd className="text-gray-700">{h.addOns}</dd></div>
                    <div><dt className="font-semibold text-gray-900">English and interpreter</dt><dd className="text-gray-700">{h.english}</dd></div>
                    <div><dt className="font-semibold text-gray-900">How to book</dt><dd className="text-gray-700">{h.booking} <a href={h.priceUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Price source ↗</a></dd></div>
                  </dl>
                </div>
              ))}
            </div>

            <h2 id="us" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Versus a US executive physical</h2>
            <p className="text-gray-700 mb-4">
              US executive physical programs are typically quoted at $2,500 to $15,000, and the most prominent ones publish no price at all; Mayo Clinic’s program gives costs on request. More important than the headline is what is inside. A Korean intensive package at $2,000 to $3,000 bundles sedated gastroscopy and colonoscopy, abdominal and chest CT, thyroid and carotid ultrasound and tumor markers; in the US each of those is a separate order, a separate facility fee and often a separate pre-authorization fight. Compare line by line: write down what your US quote includes, then find the Korean tier that matches it. The flight and a few hotel nights, roughly $1,500 to $2,000 from the West Coast, are the real adjustment, which is why a check-up usually makes sense as part of a trip rather than the reason for one.
            </p>

            <h2 id="book" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to book from the US</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-8">
              <li><strong>Pick the tier by content, not name.</strong> Decide whether you want colonoscopy, CT, cardiac imaging or brain MRI, then find the package that includes them. Add-ons are priced separately at SNUH, Samsung and KMI if a lower tier plus one scan is cheaper.</li>
              <li><strong>Email the international center.</strong> SNUH: en_healthcare@snuh.org. Samsung: ihs.smc@samsung.com. Asan: hpc_admin@amc.seoul.kr. Seoul St. Mary’s and KMI take requests through their English sites. State the package, your sex and age band, and two or three dates. University hospitals book out six to eight weeks.</li>
              <li><strong>Ask four questions in the same email.</strong> Is the published price current? Are an interpreter and an English report included? What is the payment method and cancellation policy? Will the results consultation happen the same day or later?</li>
              <li><strong>Schedule it early in the trip.</strong> If a scan shows something, you want time for a specialist visit or repeat imaging before you fly.</li>
              <li><strong>Follow the prep instructions exactly.</strong> Fasting from the night before, and bowel preparation if colonoscopy is included. Arrive at the printed start time; most centers run from 7:30 a.m.</li>
              <li><strong>Leave with everything.</strong> The English report, the image CD or download, and the raw lab values. A US physician cannot act on a summary.</li>
            </ol>

            <h2 id="caveats" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Caveats: overdiagnosis, follow-up and radiation</h2>
            <p className="text-gray-700 mb-4">
              Broad screening finds things, and not all of them matter. Korea’s own experience with thyroid ultrasound screening is the textbook example: a large rise in thyroid cancer diagnoses with no change in deaths, which is why thyroid ultrasound now sits in optional tiers. Whole-body CT and PET-CT carry radiation doses that US preventive guidelines do not recommend for asymptomatic adults. Before you book a premium tier, ask yourself who will manage an incidental finding when you are home, and whether a US guideline-based screening would have ordered the scan at all. A check-up abroad is a reasonable way to get thorough baseline imaging at a published price; it is not a substitute for a primary care relationship that follows the results. Talk to your own physician before and after.
            </p>

            <div className="my-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
              {FAQ_ITEMS.map((f) => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
            </div>

            <div className="my-10">
              <EmailCaptureCard
                title="Get the Seoul check-up package comparison sheet"
                description="All five published price lists side by side by tier and included imaging, plus the booking email template."
                source="guide_korea_health_screening_cost"
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
