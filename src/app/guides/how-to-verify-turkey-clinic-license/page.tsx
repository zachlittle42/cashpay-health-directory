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

const PAGE_PATH = '/guides/how-to-verify-turkey-clinic-license';
const PAGE_URL = `https://vitalityscout.com${PAGE_PATH}`;
const PAGE_TITLE = 'How to Verify a Turkish Clinic’s Health Tourism License Before a Hair Transplant, Dental Work or Surgery (2026)';
const PAGE_DESCRIPTION =
  'Step-by-step: find a Turkish clinic and its agency on the Ministry of Health’s authorized lists, confirm the 2025 complication-insurance and hair-transplant-unit rules apply, name the surgeon, and know who does what in the operating room. Checked October 2026.';
const CHECKED = 'October 30, 2026';

const STEPS = [
  {
    title: 'Ask for the International Health Tourism Authorization Certificate number, then find it on the Ministry list',
    body: 'Since 2017 any facility that treats foreign patients, and any intermediary that sells them a package, must hold an authorization certificate: facilities from the Ministry of Health, agencies from USHAŞ, the state health-tourism company. The Ministry’s Health Tourism Department publishes the current lists of authorized facilities and authorized intermediaries; the facility list was last updated October 5, 2026. Ask for the certificate number and expiry and match the legal name, which is often different from the brand on Instagram: when we checked the October 2026 lists, Hermest’s address appeared under another company name and Smile Hair Clinic did not appear by brand at all. The lists are four PDFs (hospitals, medical centers, private practices, other facilities) with no search tool and no certificate numbers, so download the right one and search by address as well as name. Certificates are branch-specific and non-transferable, so the campus in the quote must be the one on the list.',
    link: { label: 'Ministry of Health Health Tourism Department lists', url: 'https://shgmturizmdb.saglik.gov.tr/' },
  },
  {
    title: 'Check the agency separately, and be wary of WhatsApp-only sellers',
    body: 'Most packages are sold by intermediaries, not clinics. Under the April 2025 regulation, USHAŞ re-evaluates intermediaries at least annually, can suspend them for three or six months, and requires a 24-hour call service in two languages and a foreign-language website. A seller that exists only as a WhatsApp number, cannot name its legal entity, or has no USHAŞ certificate is operating outside the system, and the clinic it books you into may be fine or may not; you cannot tell from the chat.',
    link: { label: 'HealthTürkiye portal (Ministry of Health and USHAŞ)', url: 'https://healthturkiye.gov.tr/' },
  },
  {
    title: 'For hair transplants, confirm the unit is inside a licensed hospital, medical center or polyclinic',
    body: 'The 2023 Regulation on Hair Transplant Units allows the procedure only in units inside licensed hospitals, medical centers and polyclinics, with Ministry-registered practitioner certificates and every case logged in the Ministry’s electronic system. A September 2025 amendment extended the compliance deadline to December 31, 2026, so some pre-2023 facilities are still transitioning. A transplant in a hotel room, an office or a "studio" is outside the regulation. Ask for the facility license and which hospital the unit sits in.',
  },
  {
    title: 'Ask, in writing, who performs each step',
    body: 'Turkish regulation reserves opening the channels (the incisions) to a physician, while certified non-physician health staff may harvest and implant grafts under supervision. The Ministry’s own director general said in 2018 that a physician typically performs the first two hours of an eight-hour procedure and hands the rest to technicians, and in October 2025 Turkish plastic surgeons and dermatologists publicly criticized the split as a safety risk. Neither model is illegal; the point is that a "surgeon-performed" transplant and a "surgeon-supervised" one are different products at different prices. Get the surgeon’s name, Ministry registration and exactly which steps they personally do.',
  },
  {
    title: 'Name the operating surgeon and require a pre-operative consultation with that person',
    body: 'Several UK coroners’ findings into deaths after surgery in Turkey involved patients who met the surgeon only on the day of surgery, were accepted on a self-declared health history, or whose surgeon left midway through the operation. Ask for the surgeon’s full name, specialty (for cosmetic surgery, membership of the Turkish Society of Plastic, Reconstructive and Aesthetic Surgeons or ISAPS is the relevant credential; for hair transplants, ISHRS membership), and a video consultation before you pay. Have the consent form name that surgeon for the whole operation.',
  },
  {
    title: 'Ask for the complication insurance policy, which is now mandatory',
    body: 'The April 26, 2025 regulation (Official Gazette 32882) made complication insurance mandatory for surgical and interventional procedures performed in an operating room, with a deadline at the end of 2025. It also requires a named responsible staff member per patient and at least one certified foreign-language speaker. Ask for the insurer, the policy number, what it covers, and how a foreign patient files a claim from home. No source we found documents a foreign patient’s claim under the new rule yet, so a clinic that cannot explain the process has not used it.',
  },
  {
    title: 'Treat accreditation claims as something to look up, not read',
    body: 'About 38 Turkish hospitals hold JCI accreditation as of August 2026; older marketing claims of 47 to 60 are out of date. Acıbadem reports seven JCI hospitals, Florence Nightingale reports JCI since 2004, Anadolu Medical Center is affiliated with Johns Hopkins Medicine, and Medipol Mega is a JCI Academic Medical Center. A standalone hair or dental clinic claiming "JCI" usually means it rents operating time at an accredited hospital; ask which campus and verify it in JCI’s directory. From the end of 2026, TÜSKA national accreditation becomes mandatory for hospitals and medical centers serving health tourists.',
    link: { label: 'TÜSKA: which institutions need mandatory accreditation', url: 'https://tuska.tuseb.gov.tr/en/news/which-healthcare-institutions-have-mandatory-accreditation-20250804' },
  },
  {
    title: 'For dental work, get the per-tooth plan before you fly',
    body: 'The "Turkey teeth" problem described by the British Dental Association is patients who booked "veneers" and received full crowns on filed-down healthy teeth. Ask for a written plan listing each tooth and whether it gets a veneer, a crown or an implant, the brand of implant and crown material, and the panoramic X-ray the plan is based on. A plan that proposes crowning twenty healthy teeth is the red flag the BDA’s 2022 survey of UK dentists was describing: crowns and implants were the treatments most often needing remedial work.',
  },
  {
    title: 'Get discharge criteria, minimum stay and your records in writing',
    body: 'The CDC advises waiting 10 to 14 days after major surgery before flying because of clot risk; the Aesthetic Society says about a month after significant cosmetic surgery; bariatric sources say four to six weeks. Turkish packages are built around three to seven nights, which is the structural risk UK surgeons keep flagging. Before paying, get the minimum stay the surgeon requires, the criteria for being cleared to fly, and confirmation you will leave with operative notes, implant brand and lot numbers, and medication lists in English.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I check if a clinic in Turkey is licensed for medical tourism?',
    answer:
      'Ask for its International Health Tourism Authorization Certificate number and look it up on the Ministry of Health Health Tourism Department’s list of authorized facilities, which the Ministry updated on October 5, 2026, or on the HealthTürkiye portal run with USHAŞ. The certificate has been required since the 2017 regulation and was tightened by the April 2025 regulation. Match the legal name and the specific branch, since certificates are branch-specific. The certificate confirms authorization to treat foreigners; it is not a quality rating.',
  },
  {
    question: 'Is my Turkish hair transplant done by a doctor or a technician?',
    answer:
      'Usually both. Under the 2023 hair transplant regulation a physician must open the channels, while certified health technicians may harvest and implant grafts under supervision. Turkey’s health services director general said in 2018 that a doctor typically does the first two hours of an eight-hour case. Clinics that advertise a named surgeon performing the whole procedure charge more. Ask in writing which steps the named doctor personally performs, and whether they are in the room throughout.',
  },
  {
    question: 'What is the 2025 Turkish health tourism regulation and does it protect me?',
    answer:
      'The Regulation on International Health Tourism and Tourist Health of April 26, 2025 replaced the 2017 rules. It makes complication insurance mandatory for operating-room procedures, requires facilities and agencies to register patients on the HealthTürkiye portal, assigns a named responsible staff member per patient, requires certified foreign-language staff and a two-language 24-hour line for agencies, and lets USHAŞ suspend or cancel agency certificates. It raises the floor, but how a foreign patient claims under the new insurance is not yet documented anywhere we found.',
  },
  {
    question: 'How many hospitals in Turkey are JCI-accredited?',
    answer:
      'Independent counts put it at about 38 hospitals under JCI’s hospital and academic programs, or about 42 organizations of all types, as of August 2026. Named holders include Anadolu Medical Center, Medipol Mega University Hospital, seven Acıbadem hospitals and Florence Nightingale. Marketing claims of 47 to 60 are out of date. Verify a specific campus in JCI’s online directory before giving it weight.',
  },
  {
    question: 'What are the warning signs of an unsafe clinic in Turkey?',
    answer:
      'No certificate on the Ministry list; a hair transplant outside a hospital, medical center or polyclinic; no named surgeon or no surgeon consultation before surgery day; graft counts above about 4,000 to 4,500 in one session, which ISHRS flags; several major procedures bundled into one trip with discharge within days; packages sold as a holiday or VIP deal, which the UK Advertising Standards Authority banned in 2023; WhatsApp-only intermediaries; guaranteed results with no written terms; prices far below the published ranges; and "veneers" quoted without a tooth-by-tooth plan.',
  },
  {
    question: 'What happened in the deaths of foreign patients in Turkey?',
    answer:
      'The UK Foreign Office states that seven British nationals died in Turkey in 2025 following medical procedures, and a minister told Parliament that 28 died after elective procedures between March 2019 and March 2024. Inquests have covered gastric sleeve deaths from pulmonary embolism, aortic injury and peritonitis; Brazilian butt lift deaths from fat embolism; two hair-transplant deaths in Istanbul in July and November 2025; and a Canadian patient’s death in Antalya in March 2026. A 2026 BMJ Open review found Turkey was the destination in 61 percent of NHS-treated complication cases.',
  },
  {
    question: 'Can I sue a Turkish clinic from the United States?',
    answer:
      'Foreign patients can file Ministry of Health complaints and civil claims in Turkish courts, usually through a Turkish lawyer acting under power of attorney, and are entitled to their records. In practice proceedings and records are in Turkish, claims arise after you have left, and several UK inquests were delayed because the surgeon could not be traced. The 2025 complication-insurance requirement is meant to create a payer, but its claims process for foreigners is untested in any source we found. The leverage you have is the paperwork collected before you pay.',
  },
  {
    question: 'Do Americans need a visa for medical treatment in Turkey?',
    answer:
      'No. Turkey’s Foreign Ministry lists US ordinary passport holders as visa-exempt for up to 90 days in any 180-day period, and the e-visa and its fee were dropped. The US State Department rates Türkiye Level 2, exercise increased caution, for security reasons, with no medical-tourism-specific warning. The UK Foreign Office, by contrast, carries a dedicated health-tourism warning, which is worth reading because British patients are the best-documented population.',
  },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'Ministry of Health, Health Tourism Department: authorized facilities and intermediaries (facility list updated 2026-10-05)', url: 'https://shgmturizmdb.saglik.gov.tr/' },
  { label: 'HealthTürkiye portal (Ministry of Health and USHAŞ)', url: 'https://healthturkiye.gov.tr/' },
  { label: 'USHAŞ: health tourism data', url: 'https://www.ushas.gov.tr/en/saglik-turizmi-verileri/' },
  { label: 'Regulation on International Health Tourism and Tourist Health, Official Gazette 30123 (2017-07-13)', url: 'https://www.alomaliye.com/2017/07/13/uluslararasi-saglik-turizmi/amp/' },
  { label: 'BirGün: new international health tourism regulation makes complication insurance mandatory (2025-04-26)', url: 'https://www.birgun.net/haber/uluslararasi-saglik-turizmi-ve-turistin-sagligi-hakkinda-yeni-yonetmelik-cerrahi-islemler-icin-komplikasyon-sigortasi-yaptirilmasi-zorunlu-olacak-618330' },
  { label: 'Plus Global: summary of the 2025 regulation and authorization certificate (Official Gazette 32882)', url: 'https://www.plusglobal.com.tr/en/health-tourism-turkey-regulation-2025-authorization' },
  { label: 'TÜSKA: which healthcare institutions have mandatory accreditation (2025-08-04)', url: 'https://tuska.tuseb.gov.tr/en/news/which-healthcare-institutions-have-mandatory-accreditation-20250804' },
  { label: 'Lexpera: Regulation on Hair Transplant Units, Official Gazette 32182 (2023-05-06)', url: 'https://www.lexpera.com.tr/resmi-gazete/metin/sac-ekimi-birimleri-hakkinda-yonetmelik-32182' },
  { label: 'Resmî Gazete: amendment to the hair transplant units regulation, Official Gazette 33015 (2025-09-12)', url: 'https://www.resmigazete.gov.tr/eskiler/2025/09/20250912-2.htm' },
  { label: 'Anadolu Agency: new standards for hair transplant centers (2023-05-06)', url: 'https://www.aa.com.tr/tr/saglik/sac-ekimi-merkezlerine-yeni-standart-getirildi/2891037' },
  { label: 'Habertürk: Ministry of Health warns citizens about hair transplants; physician does first two hours (2018-06-19)', url: 'https://www.haberturk.com/saglik/saglik-bakanligi-sac-ekimi-konusunda-vatandaslari-uyardi-2021110' },
  { label: 'Karar: debate over technicians performing most of hair transplant surgery (2025-10-07)', url: 'https://www.karar.com/guncel-haberler/sac-ekimi-ameliyatinin-buyuk-kismi-artik-doktorlar-tarafindan-1997379' },
  { label: 'ISHRS: 2025 Practice Census (2024 data)', url: 'https://ishrs.org/wp-content/uploads/2025/05/report-2025-ishrs-practice-census_05-12-25-final.pdf' },
  { label: 'ISHRS Fight the Fight: beware of the risks (graft-count red flag)', url: 'https://fightthefight.ishrs.org/risks/' },
  { label: 'UK FCDO: Turkey travel advice, health (seven British deaths in 2025)', url: 'https://www.gov.uk/foreign-travel-advice/turkey/health' },
  { label: 'Falkirk Herald: minister cites 28 British deaths after elective procedures in Turkey, 2019–2024', url: 'https://falkirkherald.co.uk/health/health-tourism-ad-ban-urged-after-horrific-death-of-denny-woman-in-turkey-4561742' },
  { label: 'Bangor University: BMJ Open review of NHS-treated complications after medical tourism (2026-02-10)', url: 'https://www.bangor.ac.uk/news/2026-02-10-research-finds-complications-of-medical-tourism-may-cost-nhs-up-to-ps20000-per' },
  { label: 'BAAPS: cosmetic tourism update (2023-11-13)', url: 'https://baaps.org.uk/about/news/1881/baaps_cosmetic_tourism_update/' },
  { label: 'British Dental Association: UK dentists picking up the pieces from dental tourism boom (2022)', url: 'https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom' },
  { label: 'LBC: UK woman died after butt lift surgery in Turkey after surgeon walked out (2024-11-13)', url: 'https://www.lbc.co.uk/article/uk-woman-died-after-butt-lift-surgery-in-turkey-after-surgeon-walked-out-5HjctYT_2/' },
  { label: 'Patient Safety Learning: prevention of future deaths notice after gastric sleeve surgery in Turkey (self-declared health history)', url: 'https://www.pslhub.org/blogs/entry/7664-woman-from-wales-died-after-gastric-sleeve-surgery-in-turkey-inquest-hears/' },
  { label: 'Medical Tourism Watch: top 20 countries with the most JCI-accredited hospitals (updated 2026-08-26)', url: 'https://medicaltourismwatch.com/countries-most-jci-accredited-hospitals/' },
  { label: 'Johns Hopkins Medicine International: Anadolu Medical Center', url: 'https://www.hopkinsmedicine.org/international/health-care-consulting/emea/anadolu-medical-center' },
  { label: 'UK ASA ruling: Ersoy Health Services Tourism Ltd (2023)', url: 'https://www.asa.org.uk/rulings/ersoy-health-services-tourism-ltd-a23-1199872-ersoy-health-services-tourism-ltd.html' },
  { label: 'Mondaq: how Turkish law protects foreign patients (law-firm guidance, 2025)', url: 'https://www.mondaq.com/turkey/healthcare/1707378/' },
  { label: 'US CDC Travelers’ Health: Medical Tourism', url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism' },
  { label: 'The Aesthetic Society: how long after procedures can I take a flight?', url: 'https://www.theaestheticsociety.org/ask-question/98406' },
  { label: 'Republic of Türkiye Ministry of Foreign Affairs: visa information for foreigners', url: 'https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa' },
  { label: 'US State Department: Türkiye travel advisory', url: 'https://travel.state.gov/en/international-travel/travel-advisories/turkey.html' },
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

export default function HowToVerifyTurkeyClinicGuide() {
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
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to verify a Turkish clinic before treatment',
    description: PAGE_DESCRIPTION,
    step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism', item: 'https://vitalityscout.com/medical-tourism' },
      { '@type': 'ListItem', position: 3, name: 'Turkey', item: 'https://vitalityscout.com/destinations/turkey' },
      { '@type': 'ListItem', position: 4, name: 'How to Verify a Turkish Clinic', item: PAGE_URL },
    ],
  };
  const faqSchema = buildFAQSchema(FAQ_ITEMS);
  const related = getRelatedGuides(PAGE_PATH, 4);

  return (
    <>
      <Navigation />
      <SidebarShell>
        <main className="min-h-screen bg-white">
          {[articleSchema, howToSchema, breadcrumbSchema, faqSchema].map((schema, i) => (
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
                <Link href="/destinations/turkey" className="hover:text-blue-600">Turkey</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">How to Verify a Clinic</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">Turkey · The clinics</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Verify a Turkish Clinic’s Health Tourism License Before a Hair Transplant, Dental Work or Surgery</h1>
              <p className="text-xl text-gray-600 mb-6">
                Turkey licenses medical-tourism facilities and agencies, logs every hair transplant, and since 2025 requires complication insurance. The lists are public. Here is how to use them, and the questions the lists cannot answer.
              </p>
              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> a Turkish clinic that is legally allowed to treat you holds an <strong>International Health Tourism Authorization Certificate</strong> you can find on the Ministry of Health’s published list, any agency selling the package holds a separate USHAŞ certificate, a hair transplant unit sits inside a licensed hospital, medical center or polyclinic, and since the April 2025 regulation the facility carries <strong>complication insurance</strong> for operating-room procedures. None of that tells you who will hold the scalpel: by regulation a physician opens the channels and certified technicians may do the rest, and UK inquests keep finding patients who met the surgeon on the day. The three things to get in writing are the certificate numbers, the named surgeon and which steps they personally perform, and the discharge and minimum-stay criteria.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Rules and lists checked {CHECKED} &mdash; confirm current status on the Ministry list</p>
              <p className="mt-1 text-sm text-gray-500">By VitalityScout research • 10 min read</p>
            </div>
          </section>

          <article className="mx-auto max-w-4xl px-4 py-12">
            <div className="bg-gray-50 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The nine checks</h3>
              <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                {STEPS.map((s, i) => (
                  <li key={s.title}><a href={`#step-${i + 1}`} className="text-blue-600 hover:underline">{s.title}</a></li>
                ))}
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-4">Why Turkey needs a checklist more than most destinations</h2>
            <p className="text-gray-700 mb-4">
              Turkey has about 38 JCI-accredited hospitals, a state health-tourism company, and a licensing regime that counted 654 hospitals, 189 medical centers and 2,525 clinics with health-tourism authorization in July 2024. It also has the best-documented complication record of any destination, because British patients go in large numbers and British institutions count. The Foreign Office says seven British nationals died in Turkey after medical procedures in 2025. The British Association of Aesthetic Plastic Surgeons found Turkey accounted for 76 to 78 percent of the complication cases its members treated, and a 2026 BMJ Open review put Turkey at 61 percent of NHS-treated medical-tourism complications. The two facts coexist because the market spans hospital groups with Johns Hopkins affiliations and clinics selling a gastric sleeve for £2,000 with a self-declared health history. The checklist is how you tell which one you are talking to.
            </p>

            <ol className="space-y-6 mt-8">
              {STEPS.map((s, i) => (
                <li key={s.title} id={`step-${i + 1}`} className="scroll-mt-28 rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-600 text-base font-bold text-white">{i + 1}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">{s.body}</p>
                      {s.link && (
                        <a href={s.link.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-purple-700 hover:underline">{s.link.label} ↗</a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The message to send before you pay</h2>
            <p className="text-gray-700 mb-4">One message, every question, keep the reply. A clinic that treats foreigners daily answers this within a day.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Your facility’s International Health Tourism Authorization Certificate number and expiry, and the agency’s USHAŞ certificate number.</li>
              <li>The hospital, medical center or polyclinic where my procedure takes place, and its emergency capacity.</li>
              <li>The operating surgeon’s full name, specialty, Ministry registration and society memberships, and confirmation they perform the whole operation (or, for a hair transplant, exactly which steps they perform personally).</li>
              <li>A video consultation with that surgeon before I pay a deposit.</li>
              <li>Your complication insurance: insurer, policy number, what it covers, and how I claim from the United States.</li>
              <li>Exact package inclusions, the deposit, the refund schedule, and the revision or guarantee terms in writing.</li>
              <li>For dental: a tooth-by-tooth plan with veneer, crown or implant per tooth, and the implant brand and crown material. For breast work: implant brand and lot numbers.</li>
              <li>Discharge criteria and the minimum stay before I am cleared to fly.</li>
              <li>Confirmation I will receive operative notes, imaging and medication lists in English before I leave.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Signals that are weaker than they look</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">"JCI accredited" on a clinic site</p>
                <p>Usually means the clinic operates at an accredited hospital. Accreditation covers the hospital’s processes, not the clinic’s surgeon. Verify the campus in JCI’s directory.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">Thousands of five-star reviews</p>
                <p>Review volume tracks sales volume. It says nothing about who performed your case or what happened to the patients who did not leave a review.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">"Lifetime guarantee" or "guaranteed results"</p>
                <p>A contractual promise by the clinic with no insurer behind it and no enforcement mechanism beyond Turkish courts. Ask for the written terms and read the exclusions.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">"VIP package," "holiday," "summer sale"</p>
                <p>The UK Advertising Standards Authority banned Turkish clinic ads in 2023 for trivializing surgery with exactly this framing.</p>
              </div>
            </div>

            <div className="my-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
              {FAQ_ITEMS.map((f) => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
            </div>

            <div className="my-10">
              <EmailCaptureCard
                title="Get the Turkey clinic verification message template"
                description="The nine-point message above as copy-and-paste text, plus a quote-comparison sheet for hair, dental and surgical packages."
                source="guide_how_to_verify_turkey_clinic_license"
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
