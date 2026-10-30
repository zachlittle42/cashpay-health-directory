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

const PAGE_PATH = '/guides/how-to-verify-korea-clinic';
const PAGE_URL = `https://vitalityscout.com${PAGE_PATH}`;
const PAGE_TITLE = 'How to Verify a Korean Clinic Before Plastic Surgery or Treatment in Seoul (2026)';
const PAGE_DESCRIPTION =
  'Step-by-step: check a Seoul clinic and its agency on the Medical Korea registry, confirm the operating surgeon and anesthesia staffing, request operating-room recording under Korea’s CCTV law, and know who handles disputes. Checked October 2026.';
const CHECKED = 'October 30, 2026';

const FAQ_ITEMS = [
  {
    question: 'How do I check if a Korean clinic is registered to treat foreign patients?',
    answer:
      'Ask the clinic for its foreign-patient registration number, then search the Medical Korea portal’s registered-institution list, which is run by the Korea Health Industry Development Institute under the Ministry of Health and Welfare. Registration is a legal requirement under the international-patient law for any institution that recruits foreigners, and it brings a mandatory malpractice insurance policy. Do the same for any agency or coordinator on the separate registered-facilitator list. A clinic that cannot produce a number has not met the legal minimum.',
  },
  {
    question: 'Is a Korean medical tourism agency or "coordinator" legal?',
    answer:
      'Only if it is registered as a facilitator. Soliciting or referring foreign patients without registration carries up to three years in prison or a 30 million won fine, and informants can be paid for reports. Reporters joining online groups about Korean plastic surgery were approached by unregistered facilitators within minutes, and illegal-broker reports to the government rose from 13 in 2020 to 67 in 2024. Verify the agency on the Medical Korea facilitator list before paying it anything.',
  },
  {
    question: 'What is the difference between a plastic surgeon and a doctor who does plastic surgery in Korea?',
    answer:
      'Any licensed Korean physician may legally perform cosmetic surgery. Only a board-certified plastic surgeon (성형외과 전문의) may call the practice a "plastic surgery clinic." Many cosmetic procedures are done by doctors trained in other specialties. Ask for the operating surgeon’s name and specialty certificate, and have both written into the consent form so the person who consults you is the person who operates.',
  },
  {
    question: 'Does Korea record surgeries on camera?',
    answer:
      'Cameras are required, recording is not automatic. Since September 25, 2023, every operating room where patients are under general anesthesia or otherwise unconscious must have a closed-circuit camera with no outside network connection. The clinic must record when the patient or guardian requests it, except in emergencies. Footage is kept at least 30 days, and leaking or tampering is punishable by up to five years in prison. Put your recording request in writing before the day of surgery.',
  },
  {
    question: 'Do Korean cosmetic clinics have anesthesiologists?',
    answer:
      'Usually not. Health Insurance Review and Assessment Service data reported in October 2026 showed that 84 of 2,777 registered plastic surgery and dermatology clinics, about 3 percent, had an anesthesiologist on staff, and the law does not require one for sedation. The National Forensic Service found that 23 of 50 cosmetic-procedure deaths between 2016 and 2024 were anesthesia-related, 22 of them at clinics. For any procedure under sedation or general anesthesia, ask who administers it and who monitors you.',
  },
  {
    question: 'What is KAHF accreditation and do I need it?',
    answer:
      'KAHF is the Korea Accreditation Program for Hospitals Serving Foreign Patients, a voluntary program run since 2017 with roughly 130 to 150 standards covering patient safety, communication and international-patient services. The Medical Korea portal listed 26 accredited entries on October 30, 2026. It is a useful positive signal, especially for clinic-level providers, but most registered institutions do not hold it, so its absence is not a red flag on its own.',
  },
  {
    question: 'Who do I complain to if a Korean clinic harms me or keeps my deposit?',
    answer:
      'The Korea Medical Dispute Mediation and Arbitration Agency (K-MEDI) handles counseling, mediation, arbitration and medical-accident appraisal and publishes English application forms. KHIDI’s Medical Korea Support Center takes complaints and illegal-broker reports. For deposits, Korea’s Fair Trade Commission ruled in July 2026 that at most a 10 percent penalty may be charged on early termination of prepaid treatment and ordered 15 clinics to delete unfair refund clauses. Both channels are small, so written agreements made before you pay matter more than remedies afterward.',
  },
  {
    question: 'Can I trust Korean clinic reviews and before-and-after photos?',
    answer:
      'Treat them as advertising. The Fair Trade Commission has fined Gangnam clinics for exaggerated before-and-after photos, and in July 2026 issued corrective orders to View, DA and AB Plastic Surgery for giving discounted surgery in exchange for undisclosed positive reviews between 2018 and May 2026. Patients have also reported refunds conditioned on deleting reviews and signing non-disclosure agreements, and true negative reviews can draw defamation complaints in Korea.',
  },
];

const SOURCES: { label: string; url: string }[] = [
  { label: 'Medical Korea (KHIDI): registered institutions serving foreign patients', url: 'https://www.medicalkorea.or.kr/en/registeredhospitals' },
  { label: 'Medical Korea (KHIDI): registered facilitators', url: 'https://www.medicalkorea.or.kr/en/registeredfacilitators' },
  { label: 'Medical Korea (KHIDI): the registration system and insurance requirement', url: 'https://www.medicalkorea.or.kr/en/registeredsystem' },
  { label: 'Medical Korea (KHIDI): KAHF accredited institutions', url: 'https://www.medicalkorea.or.kr/en/kahfAccreditedHospitals' },
  { label: 'Korea Legislation Research Institute: Act on Support for Overseas Expansion of Healthcare System and Attraction of International Patients', url: 'https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=38861' },
  { label: 'Korea JoongAng Daily: New act cracks down on illegal medical brokers (2016)', url: 'https://www.koreajoongangdaily.com/korea/new-act-cracks-down-on-illegal-medical-brokers/11849325' },
  { label: 'Al Jazeera: As South Korea draws visitors chasing beauty, dodgy practices pose risks (2024-12-23)', url: 'https://www.aljazeera.com/news/2024/12/23/as-south-korea-draws-visitors-chasing-beauty-dodgy-practices-pose-risks' },
  { label: 'The Korea Times: Operating room CCTV footage made mandatory (2023-09-24)', url: 'https://www.koreatimes.co.kr/amp/southkorea/health/20230924/patients-doctors-at-loggerheads-as-operating-room-cctv-footage-made-mandatory' },
  { label: 'The Korea Times: Passage of CCTV bill, retention and penalties (2021-09-03)', url: 'https://www.koreatimes.co.kr/www/nation/2021/09/119_314915.html' },
  { label: 'CNN via Yahoo News: Student died after ghost surgeon operated in Gangnam', url: 'https://news.yahoo.com/24-old-student-seoul-died-075351615.html' },
  { label: 'Korea JoongAng Daily: Anesthesiologists remain rare at beauty clinics (2026-10-01)', url: 'https://www.koreajoongangdaily.com/korea/anesthesiologists-remain-rare-at-beauty-clinics-offering-general-anesthesia/12900160' },
  { label: 'Korea JoongAng Daily: As Korea’s medical tourism industry grows, so do complaints and disputes (2025-10-10)', url: 'https://www.koreajoongangdaily.com/korea/as-koreas-medical-tourism-industry-grows-so-do-complaints-and-disputes/11953379' },
  { label: 'Korea Medical Dispute Mediation and Arbitration Agency (K-MEDI), English', url: 'https://www.k-medi.or.kr/eng/' },
  { label: 'Kyunghyang Shinmun: FTC corrects unfair prepaid cosmetic treatment terms (2026-07-19)', url: 'https://www.khan.co.kr/en/article/202607191352027' },
  { label: 'The Korea Times: Gangnam clinics penalized over incentivized positive reviews (2026-07-13)', url: 'https://www.koreatimes.co.kr/southkorea/society/20260713/gangnam-plastic-surgery-clinics-penalized-over-incentivized-positive-reviews' },
  { label: 'Herald Corp: Gangnam clinics fined for exaggerated before/after photos', url: 'https://biz.heraldcorp.com/article/10805896' },
  { label: 'The Korea Times: Korea legalizes telemedicine for foreign patients (2026-05-26)', url: 'https://www.koreatimes.co.kr/southkorea/health/20260526/korea-legalizes-telemedicine-for-foreign-patients-to-boost-medical-tourism' },
  { label: 'US CDC Travelers’ Health: Medical Tourism', url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism' },
  { label: 'American Society of Plastic Surgeons: Medical tourism patient safety', url: 'https://www.plasticsurgery.org/tourism' },
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

const STEPS = [
  {
    title: 'Get the registration numbers, then look them up yourself',
    body: 'Email the clinic and any agency and ask for their foreign-patient registration numbers. Search both on the Medical Korea portal: institutions on one list, facilitators on another. The portal entry shows the institution name, location and supported languages. If the clinic says it is registered but will not give you the number, or the name on the portal does not match the name on the quote, stop.',
    link: { label: 'Medical Korea registered institutions', url: 'https://www.medicalkorea.or.kr/en/registeredhospitals' },
  },
  {
    title: 'Confirm the malpractice insurer',
    body: 'Registration has required malpractice liability insurance since 2016: at least 100 million won a year for clinics and small hospitals and 200 million won for general hospitals. Medical Korea reports that all registered institutions are insured. Ask for the insurer’s name and coverage amount in writing. Unregistered clinics have no such obligation, which is one reason the price is lower.',
  },
  {
    title: 'Name the operating surgeon in the consent form',
    body: 'Because any licensed physician may perform cosmetic surgery in Korea, the consulting doctor and the operating doctor can differ. Ask for the operating surgeon’s full name and specialty board certificate, and have the clinic write both into the consent form with a statement that this surgeon will perform the entire procedure. The 2016 death that produced the camera law involved a general practitioner taking over a jaw-contouring operation.',
  },
  {
    title: 'Ask who gives the anesthesia and who watches you',
    body: 'Korean law does not require an anesthesiologist for sedation, and about 3 percent of cosmetic clinics have one on staff. Ask in writing: what anesthesia will be used, who administers it, who monitors you throughout, and whether a board-certified anesthesiologist is present for general anesthesia. For bone work, liposuction and any multi-hour operation, the answer should be yes.',
  },
  {
    title: 'Request operating-room recording in writing',
    body: 'Under the Medical Service Act amendment in force since September 25, 2023, operating rooms where patients are unconscious must have cameras, but the clinic records only when you ask. Send the request by email before surgery day and keep the acknowledgment. Footage is kept at least 30 days and can be viewed with a court or investigative request or with the consent of both patient and staff.',
  },
  {
    title: 'Check for KAHF accreditation, and treat JCI claims as unverified',
    body: 'The Korea Accreditation Program for Hospitals Serving Foreign Patients is voluntary and held by about 26 institutions, including a handful of plastic surgery clinics and screening centers. It is a positive signal, not a requirement. Several university hospitals are JCI-accredited, but clinic marketing sometimes borrows the badge; confirm any JCI claim on JCI’s own directory.',
    link: { label: 'KAHF accredited list', url: 'https://www.medicalkorea.or.kr/en/kahfAccreditedHospitals' },
  },
  {
    title: 'Get an itemized quote in won and the refund schedule',
    body: 'Ask for a line-item quote in Korean won covering surgeon, anesthesia, facility, implants, medication, garments, interpreter and follow-up visits. Dollar "packages" hide markups, and a Korean investigation found four of ten Gangnam clinics quoting foreigners nearly double local prices. Confirm the cancellation terms; the Fair Trade Commission has ruled that no more than a 10 percent penalty may be kept on early termination of prepaid treatment.',
  },
  {
    title: 'Know the complaint channels before you need them',
    body: 'K-MEDI publishes English forms for mediation and arbitration and an arbitration clause hospitals can insert in foreign-patient contracts; an award has the force of a court judgment. KHIDI’s support center takes complaints and broker reports. Caseloads are small and slow, so the leverage you have is the paperwork you collect before paying. Carry home your operative notes, implant cards and photos for any US physician who treats you later.',
    link: { label: 'K-MEDI English page', url: 'https://www.k-medi.or.kr/eng/' },
  },
];

export default function HowToVerifyKoreaClinicGuide() {
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
    name: 'How to verify a Korean clinic before treatment',
    description: PAGE_DESCRIPTION,
    step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.body })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Medical Tourism', item: 'https://vitalityscout.com/medical-tourism' },
      { '@type': 'ListItem', position: 3, name: 'South Korea', item: 'https://vitalityscout.com/destinations/south-korea' },
      { '@type': 'ListItem', position: 4, name: 'How to Verify a Korean Clinic', item: PAGE_URL },
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
                <Link href="/destinations/south-korea" className="hover:text-blue-600">South Korea</Link>
                <span className="mx-2">→</span>
                <span className="text-gray-900">How to Verify a Clinic</span>
              </nav>
            </div>
          </div>

          <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4">
                <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">South Korea · Safety &amp; registration</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Verify a Korean Clinic Before Plastic Surgery or Treatment in Seoul</h1>
              <p className="text-xl text-gray-600 mb-6">
                Korea has a registry, an insurance mandate, a camera law and a dispute agency built for foreign patients. None of them works unless you invoke them, in writing, before you pay a deposit. Here is the eight-step check.
              </p>
              <div className="rounded-lg border-l-4 border-purple-600 bg-purple-50 p-5">
                <p className="aeo-answer text-base text-gray-800">
                  <strong>Bottom line:</strong> a legitimate Korean clinic for foreign patients is <strong>registered on the Medical Korea portal</strong> (as is any agency that referred you), carries mandatory malpractice insurance, will <strong>name the operating surgeon and anesthesia provider in your consent form</strong>, and will <strong>record your operation on request</strong> under the 2023 CCTV law. Only about 3 percent of cosmetic clinics have an anesthesiologist on staff and any licensed doctor may perform cosmetic surgery, so those two written confirmations matter more than reviews or before-and-after photos, both of which Korean regulators have sanctioned clinics for manipulating.
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700">Rules and lists checked {CHECKED} &mdash; confirm current status with the portal</p>
              <p className="mt-1 text-sm text-gray-500">By VitalityScout research • 9 min read</p>
            </div>
          </section>

          <article className="mx-auto max-w-4xl px-4 py-12">
            <div className="bg-gray-50 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-gray-900 mb-3">The eight checks</h3>
              <ol className="space-y-2 text-gray-700 list-decimal pl-5">
                {STEPS.map((s, i) => (
                  <li key={s.title}><a href={`#step-${i + 1}`} className="text-blue-600 hover:underline">{s.title}</a></li>
                ))}
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-4">Why the checks exist</h2>
            <p className="text-gray-700 mb-4">
              South Korea treated 2,011,822 foreign patients in 2025 and 87.7 percent of them at clinic-level institutions rather than hospitals. The clinic market is where the safety problems documented by Korean courts, the Korea Consumer Agency and the National Forensic Service concentrate: a general practitioner finishing a jaw operation in place of the surgeon the patient met, sedation given without an anesthesiologist, and refund clauses that kept most of a deposit. The government’s answer was a set of patient-side tools. The registry tells you who is legally allowed to treat you. The insurance mandate means a registered clinic has a policy to claim against. The camera law lets you prove who was in the room. K-MEDI gives you a forum that does not require a Korean lawyer. Each tool is opt-in for the patient, which is why this guide is a checklist rather than a reassurance.
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

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The email to send before you pay</h2>
            <p className="text-gray-700 mb-4">Send one message to the clinic with every question in it, and keep the reply. A clinic that treats hundreds of foreign patients a month answers this in a day. Ask for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Your foreign-patient institution registration number, and the agency’s facilitator registration number if one is involved.</li>
              <li>The operating surgeon’s full name and specialty board certification, and confirmation this surgeon performs the whole procedure.</li>
              <li>The anesthesia plan: type, who administers it, who monitors, and whether an anesthesiologist is present.</li>
              <li>Confirmation that my operation will be recorded under the operating-room CCTV law at my request.</li>
              <li>An itemized quote in won: surgeon, anesthesia, facility, implants, medication, garments, interpreter, follow-up visits.</li>
              <li>The deposit amount and the full cancellation and refund schedule.</li>
              <li>The malpractice insurer’s name and coverage amount.</li>
              <li>The revision policy: what qualifies, who pays, where it happens, and within what period.</li>
              <li>Whether I will receive my operative notes, implant cards and photos to take home.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Signals that are weaker than they look</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">Reviews and photos</p>
                <p>Korea’s Fair Trade Commission has fined clinics for exaggerated before-and-after photos and, in July 2026, ordered three large Gangnam clinics to stop trading discounts for undisclosed positive reviews. Refunds conditioned on deleting a review have been reported.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">"Celebrity" or "famous" surgeons</p>
                <p>Volume marketing says nothing about who will be in your operating room. The name in the advertisement is not the name in the consent form unless you put it there.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">An English-speaking coordinator</p>
                <p>Coordinators are often agency staff paid by referral. Helpful, but not a credential. Check the agency’s facilitator registration separately.</p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                <p className="font-semibold mb-2">"Same price for foreigners" and "VAT refund"</p>
                <p>The first is a pledge, so still ask for a won quote. The second is out of date: the cosmetic-surgery VAT refund ended on December 31, 2025.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">After you get home</h2>
            <p className="text-gray-700 mb-4">
              The CDC advises arranging follow-up care before you travel and carrying your records home. The American Society of Plastic Surgeons notes that US surgeons treating complications from surgery abroad often do not know what technique or implant was used, and that revision costs fall on the patient. Korea legalized cross-border telemedicine for foreign patients in May 2026, which will allow sanctioned remote follow-up with your Korean surgeon once the twelve-month grace period ends in mid-2027. Until then, identify a US clinician willing to see you, and leave Korea with everything they would need to understand what was done.
            </p>

            <div className="my-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently asked questions</h2>
              {FAQ_ITEMS.map((f) => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
            </div>

            <div className="my-10">
              <EmailCaptureCard
                title="Get the Korea clinic verification email template"
                description="The one-page email above as a copy-and-paste template, plus a quote-comparison sheet for Seoul clinics."
                source="guide_how_to_verify_korea_clinic"
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
