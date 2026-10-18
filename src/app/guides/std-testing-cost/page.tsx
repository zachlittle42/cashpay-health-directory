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

const PAGE_URL = 'https://vitalityscout.com/guides/std-testing-cost';
const PAGE_TITLE = 'STD Testing Cost Without Insurance (2026): Real Prices';
const PAGE_DESCRIPTION =
  'STD testing without insurance in 2026: often free at health departments, $139-$489 for self-order lab panels, $69-$409 for mail-in kits. See what each covers.';
const PRICES_CHECKED = 'October 18, 2026';

const STD_BRANDS = [
  {
    name: 'STDcheck',
    providerId: 'stdcheck',
    category: 'labs',
    price: '$139 + $6 fee',
    blurb:
      'Order online, then give blood and urine at a partner lab center. The 10 Test Panel is listed at $139, and an STDcheck order page we checked added a $6 physician fee. It includes herpes antibody tests, which CDC does not recommend for most people without symptoms.',
    siteUrl: 'https://www.stdcheck.com/std-test-panel.php',
  },
  {
    name: 'Quest Health',
    providerId: 'quest-health',
    category: 'labs',
    price: '$149 + $6 fee',
    blurb:
      'The Basic STD panel covers chlamydia, gonorrhea, syphilis and HIV at a Quest patient service center. The Expanded panel ($282 + $6) adds hepatitis B, hepatitis C and trichomoniasis, with confirmatory HIV and syphilis testing included.',
    siteUrl: 'https://www.questhealth.com/product/std-screening-panel-basic/37327M.html',
    profileHref: '/providers/quest-health',
    profileLabel: 'Quest Health profile',
  },
  {
    name: 'Labcorp OnDemand',
    providerId: 'labcorp-ondemand',
    category: 'labs',
    price: '$489 complete',
    blurb:
      'The Complete STI Test covers seven infections from blood and urine at a Labcorp location. Single tests are also listed, such as HIV ($99) and syphilis ($59), if you only need one or two.',
    siteUrl: 'https://www.ondemand.labcorp.com/lab-tests/complete-sti-test',
    profileHref: '/providers/labcorp-ondemand',
    profileLabel: 'Labcorp OnDemand profile',
  },
  {
    name: 'LetsGetChecked',
    providerId: 'letsgetchecked',
    category: 'labs',
    price: '$99-$249',
    blurb:
      'Mail-in kits from a two-infection test to an eight-infection panel. Its Simple 2 was the first FDA-authorized chlamydia and gonorrhea test with at-home sample collection. Consultations after a positive start at $39; medication costs extra.',
    siteUrl: 'https://www.letsgetchecked.com/home-std-test/',
    profileHref: '/providers/letsgetchecked',
    profileLabel: 'LetsGetChecked profile',
  },
  {
    name: 'Everlywell',
    providerId: 'everlywell',
    category: 'labs',
    price: '$169 panel',
    blurb:
      'Its female STD Test page lists six infections: chlamydia, gonorrhea, hepatitis C, HIV, syphilis and trichomoniasis. Another Everlywell listing at the same price shows five, without HIV, so confirm HIV is included before you buy. Everlywell says a physician contacts you about positive results at no additional cost; medication is a separate cost.',
    siteUrl: 'https://www.everlywell.com/products/std-test-female/',
    profileHref: '/providers/everlywell',
    profileLabel: 'Everlywell profile',
  },
  {
    name: 'myLAB Box',
    providerId: 'mylab-box',
    category: 'labs',
    price: '$209-$409',
    blurb:
      'Mail-in kits including the 8-panel Uber Box ($209), which lists a free physician consultation for positive results, and the 14-panel Total Box ($379-$409). A 5-panel Safe Box is also sold, but its price differs across myLAB Box pages, so confirm at checkout.',
    siteUrl: 'https://www.mylabbox.com/product/uber-box-8-panel-at-home-std-test-kit/',
  },
  {
    name: 'Planned Parenthood',
    providerId: 'planned-parenthood',
    category: 'labs',
    price: '$0-$250',
    blurb:
      'In-person testing with a clinician who can examine you and treat on site. Planned Parenthood says testing costs $0 to $250 depending on the tests and whether you need an exam; many centers use income-based sliding fees.',
    siteUrl: 'https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/get-tested/where-can-i-get-tested-stds',
  },
];

const SOURCES = [
  { label: 'CDC — STI Screening Recommendations', url: 'https://www.cdc.gov/std/treatment-guidelines/screening-recommendations.htm' },
  { label: 'CDC — Getting Tested for STIs', url: 'https://www.cdc.gov/sti/testing/index.html' },
  { label: 'CDC — GetTested: find free, fast and confidential testing near you', url: 'https://gettested.cdc.gov/' },
  { label: 'CDC — Getting Tested for HIV (window periods; free or reduced-cost testing)', url: 'https://www.cdc.gov/hiv/testing/index.html' },
  { label: 'CDC — HIV Self-Testing', url: 'https://www.cdc.gov/stophivtogether/hiv-testing/self-testing.html' },
  { label: 'CDC — Clinical Testing Guidance for HIV (test everyone 13-64 at least once)', url: 'https://www.cdc.gov/hivnexus/hcp/diagnosis-testing/index.html' },
  { label: 'CDC — Preventing HIV with PEP (start within 72 hours)', url: 'https://www.cdc.gov/hiv/prevention/pep.html' },
  { label: 'CDC — Screening for Genital Herpes', url: 'https://www.cdc.gov/herpes/testing/index.html' },
  { label: 'CDC — Recommendations for Hepatitis C Screening Among Adults, 2020 (MMWR)', url: 'https://www.cdc.gov/mmwr/volumes/69/rr/rr6902a1.htm' },
  { label: 'CDC — Clinical Testing and Diagnosis for Hepatitis B (universal adult screening, triple panel)', url: 'https://www.cdc.gov/hepatitis-b/hcp/diagnosis-testing/index.html' },
  { label: 'CDC — Laboratory Recommendations for Syphilis Testing, United States, 2024 (MMWR)', url: 'https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm' },
  { label: 'CDC — Sexually Transmitted Infections Treatment Guidelines, 2021', url: 'https://www.cdc.gov/std/treatment-guidelines/STI-Guidelines-2021.pdf' },
  { label: 'CDC — Chlamydial Infections: STI Treatment Guidelines (retesting, abstinence after treatment)', url: 'https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm' },
  { label: 'CDC — About Chlamydia (symptoms and complications)', url: 'https://www.cdc.gov/chlamydia/about/index.html' },
  { label: 'CDC — STI Reporting and Confidentiality', url: 'https://www.cdc.gov/std/treatment-guidelines/clinical-reporting.htm' },
  { label: 'CDC — Legal Status of Expedited Partner Therapy (EPT)', url: 'https://www.cdc.gov/sti/php/ept-legal-status/index.html' },
  { label: 'FDA — First test for chlamydia and gonorrhea with at-home sample collection (Nov. 2023)', url: 'https://www.fda.gov/news-events/press-announcements/fda-grants-marketing-authorization-first-test-chlamydia-and-gonorrhea-home-sample-collection' },
  { label: 'FDA — First home test for chlamydia, gonorrhea and trichomoniasis (Mar. 2025)', url: 'https://www.fda.gov/news-events/press-announcements/fda-grants-marketing-authorization-first-home-test-chlamydia-gonorrhea-and-trichomoniasis' },
  { label: 'FDA — Marketing authorization for the First To Know Syphilis Test (Aug. 2024)', url: 'https://www.fda.gov/news-events/press-announcements/fda-marketing-authorization-enables-increased-access-first-step-syphilis-diagnosis' },
  { label: 'CMS — CLIA Laboratory Lookup (QCOR)', url: 'https://qcor.cms.gov/advanced_find_provider.jsp?which=4&backReport=active_CLIA.jsp' },
  { label: 'HealthCare.gov — Preventive care benefits for adults', url: 'https://www.healthcare.gov/preventive-care-adults/' },
  { label: 'HealthCare.gov — Preventive care benefits for women', url: 'https://www.healthcare.gov/preventive-care-women/' },
  { label: 'Planned Parenthood — Where can I go to get tested for STDs? (cost range)', url: 'https://www.plannedparenthood.org/learn/stds-hiv-safer-sex/get-tested/where-can-i-get-tested-stds' },
  { label: 'Planned Parenthood of Florida — Cost of medical services', url: 'https://www.plannedparenthood.org/planned-parenthood-florida/patient-resources/cost-of-services' },
  { label: 'Planned Parenthood Pasadena and San Gabriel Valley — Cost of common services', url: 'https://www.plannedparenthood.org/planned-parenthood-pasadena-san-gabriel-valley/visit-payment/insurance-payment-options/cost-of-common-services' },
  { label: 'Planned Parenthood Detroit Health Center — STD testing and treatment', url: 'https://www.plannedparenthood.org/health-center/michigan/detroit/48201/detroit-health-center-2890-90630/std-testing-treatment' },
  { label: 'STDcheck — STD test pricing (panels and individual tests)', url: 'https://www.stdcheck.com/std-test-pricing.php' },
  { label: 'STDcheck — 10 Test Panel', url: 'https://www.stdcheck.com/std-test-panel.php' },
  { label: 'STDcheck — Terms of Service (confirmatory tests billed separately)', url: 'https://www.stdcheck.com/terms-of-service.php' },
  { label: 'Priority STD Testing — How it works', url: 'https://www.prioritystdtesting.com/how-it-works/' },
  { label: 'Priority STD Testing — Carmel, Indiana location page (10-panel price and contents)', url: 'https://www.prioritystdtesting.com/std-testing/indiana/carmel/' },
  { label: 'Quest — STD Screening Test Panel, Basic (questhealth.com)', url: 'https://www.questhealth.com/product/std-screening-panel-basic/37327M.html' },
  { label: 'Quest — STD Screening Test Panel, Expanded (questhealth.com)', url: 'https://www.questhealth.com/product/std-screening-panel-expanded/37328M.html' },
  { label: 'Labcorp OnDemand — Complete STI Test', url: 'https://www.ondemand.labcorp.com/lab-tests/complete-sti-test' },
  { label: 'Labcorp OnDemand — Chlamydia, Gonorrhea and Trichomoniasis Test', url: 'https://www.ondemand.labcorp.com/lab-tests/sti-test-chlamydia-gonorrhea-trichomoniasis' },
  { label: 'Labcorp OnDemand — HIV Blood Test', url: 'https://www.ondemand.labcorp.com/lab-tests/hiv-test' },
  { label: 'Labcorp OnDemand — Syphilis RPR Test', url: 'https://www.ondemand.labcorp.com/lab-tests/syphilis-rpr-test' },
  { label: 'Labcorp OnDemand — First To Know Syphilis Test (at-home)', url: 'https://www.ondemand.labcorp.com/at-home-test-kits/first-to-know-syphilis-test' },
  { label: 'Everlywell — STD Test, Female', url: 'https://www.everlywell.com/products/std-test-female/' },
  { label: 'Everlywell — STD Test, Male', url: 'https://www.everlywell.com/products/std-test-male/' },
  { label: 'Everlywell — Chlamydia & Gonorrhea Test', url: 'https://www.everlywell.com/products/chlamydia-gonorrhea-test/' },
  { label: 'Everlywell — Visby Rapid PCR At-Home Female STD Test', url: 'https://www.everlywell.com/products/visby-sexual-health-test/' },
  { label: 'LetsGetChecked — Home STD tests (Simple 2, Standard 5, Complete 8)', url: 'https://www.letsgetchecked.com/home-std-test/' },
  { label: 'LetsGetChecked — Standard 5 STD Test', url: 'https://www.letsgetchecked.com/standard-std-test/' },
  { label: 'myLAB Box — Safe Box 5-Panel STD Test', url: 'https://www.mylabbox.com/product/safe-box-5-panel-std-home-test/' },
  { label: 'myLAB Box — Uber Box 8-Panel STD Test', url: 'https://www.mylabbox.com/product/uber-box-8-panel-at-home-std-test-kit/' },
  { label: 'myLAB Box — Total Box 14-Panel STD Test', url: 'https://www.mylabbox.com/product/total-box-14-panel-at-home-std-test-kit/' },
  { label: 'OraQuick — In-Home HIV Test', url: 'https://oraquick.com/oraquick-in-home-hiv-test/' },
];

// Questions answered only from facts stated on this page. The visible FAQ block
// renders this same array, so the FAQPage schema mirrors it exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does STD testing cost without insurance?',
    answer:
      'It depends on where you go and how many infections you test for. Many health department and community clinics listed on CDC\'s GetTested locator offer free or reduced-cost testing, and Planned Parenthood says testing costs anywhere from $0 to $250. Posted cash prices for self-ordered lab panels we checked run from $139 (STDcheck\'s 10 Test Panel, plus a $6 physician fee at checkout) and $149 plus a $6 physician fee (Quest\'s Basic panel) up to $489 (Labcorp OnDemand\'s Complete STI Test). Mail-in home kits run from $69 for Everlywell\'s chlamydia and gonorrhea test to $379-$409 for myLAB Box\'s 14-panel kit. Prices vary by location and change over time, so confirm before you pay.',
  },
  {
    question: 'What is the cheapest way to get tested for STDs?',
    answer:
      'Free testing, if you can find it. CDC\'s GetTested tool finds free and confidential testing sites for HIV, STDs and hepatitis, and many Planned Parenthood centers use sliding fees based on income. If you are paying cash, buy only the tests you need: a chlamydia and gonorrhea test alone is listed at $69 at Everlywell and $99 at LetsGetChecked, and STDcheck lists single HIV and syphilis tests at $49 each.',
  },
  {
    question: 'Are at-home STD tests accurate and legitimate?',
    answer:
      'The major brands send samples to regulated labs, and some kits have FDA marketing authorization. FDA authorized LetsGetChecked\'s Simple 2 in November 2023 as the first chlamydia and gonorrhea test with at-home sample collection, the First To Know Syphilis Test in August 2024, and Visby Medical\'s Women\'s Sexual Health Test in March 2025 as the first fully at-home test for chlamydia, gonorrhea and trichomoniasis. Accuracy still depends on collecting the sample correctly and testing after the window period, and a positive syphilis or HIV self-test needs follow-up testing through a clinician. You can check a lab\'s CLIA certificate in CMS\'s CLIA laboratory lookup.',
  },
  {
    question: 'Should a full STD panel include herpes?',
    answer:
      'Not for most people without symptoms. CDC does not recommend herpes testing for people without symptoms in most situations, because of the limits of herpes blood tests and the chance of a wrong result. CDC says testing can help if you have genital symptoms or a partner with genital herpes. Several low-priced "10-test" panels include herpes type 1 and type 2 antibody tests, so check whether a panel without herpes covers what you need.',
  },
  {
    question: 'How soon after sex should I get tested for STDs?',
    answer:
      'It depends on the infection and the test. CDC says an HIV nucleic acid test can usually detect infection 10 to 33 days after exposure, a lab antigen/antibody test 18 to 45 days after, and an antibody test, such as the oral HIV self-test, 23 to 90 days after. LetsGetChecked says syphilis can take up to 12 weeks to show up on a test and trichomoniasis up to 4 weeks. If you test early and the result is negative, CDC advises testing again after the window period. If a possible HIV exposure happened in the last 72 hours, contact a clinician, urgent care or an emergency room right away about PEP instead of waiting to test.',
  },
  {
    question: 'Will an STD test show up on my insurance or medical records?',
    answer:
      'If you pay cash, no insurance claim is filed, and services such as STDcheck and Priority STD Testing say they do not bill health insurance. Some positive results still leave the lab: CDC says syphilis, gonorrhea, chlamydia, chancroid and HIV are reportable in every state, and those reports are kept confidential.',
  },
  {
    question: 'What happens if my STD test is positive?',
    answer:
      'Expect a confirmation step for some infections and a treatment step for most. CDC says a reactive syphilis screening test should be confirmed with a second, different type of test, and a positive HIV self-test needs follow-up testing with a health care provider; Quest\'s Expanded panel runs confirmatory HIV and syphilis tests on your sample at no extra cost, while STDcheck\'s terms say confirmatory tests are billed separately. Treatment terms differ: LetsGetChecked consultations start at $39 with medication extra, Everlywell says a physician contacts you at no additional cost, and STDcheck charges an additional fee for a prescription. CDC recommends retesting about 3 months after treatment for chlamydia or gonorrhea, and recent partners need testing or treatment too.',
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

export default function StdTestingCostGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'STD Testing Cost Without Insurance: Kits, Lab Panels and Free Clinics in 2026',
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
      { '@type': 'ListItem', position: 3, name: 'STD Testing Cost Without Insurance', item: PAGE_URL },
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
              <span className="text-gray-900">STD Testing Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-Pay Labs Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Labs &middot; Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              STD Testing Cost Without Insurance: Kits, Lab Panels and Free Clinics in 2026
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The same handful of infections can cost nothing to test for, or several hundred
              dollars. The difference is where you test, how many infections the panel covers, and
              whether a clinician is part of the price. Here are posted cash prices, what each panel
              covers, and how to avoid paying for tests you don&apos;t need.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Bottom line:</strong> without insurance, STD testing ranges from{' '}
                <strong>free at many health departments and sliding-scale clinics</strong> (Planned
                Parenthood says $0 to $250) to <strong>$139-$489 for a self-ordered lab panel</strong>{' '}
                and <strong>$69-$409 for a mail-in home kit</strong>. The cheapest legitimate route is a
                free or low-cost clinic found through CDC&apos;s GetTested locator. If you would rather
                pay for speed and privacy, a lab-draw panel such as Quest&apos;s Basic ($149 plus a $6
                physician fee) covers chlamydia, gonorrhea, syphilis and HIV.
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-700">
              Prices checked {PRICES_CHECKED} &mdash; confirm with the provider
            </p>
            <p className="mt-1 text-sm text-gray-500">By VitalityScout research &bull; 14 min read</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">Free or sliding-scale clinic</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; Often $0 at health departments</li>
                  <li>&bull; Planned Parenthood: $0-$250</li>
                  <li>&bull; Exam and treatment in one place</li>
                  <li>&bull; Hours and wait times vary</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Self-order lab panel</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; $139-$489 per posted panel</li>
                  <li>&bull; Order online, visit a draw site</li>
                  <li>&bull; Blood and urine, no exam</li>
                  <li>&bull; Doctor follow-up terms vary</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">At-home kit</div>
                <ul className="space-y-1 text-gray-700">
                  <li>&bull; $69 single test to $409 panel</li>
                  <li>&bull; Finger-prick, swab or urine</li>
                  <li>&bull; Some FDA-authorized options</li>
                  <li>&bull; Some positives need confirming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">Go to a clinic if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You have symptoms such as a sore or discharge</li>
                  <li>&bull; Money is tight (free and sliding-scale options exist)</li>
                  <li>&bull; You want testing and treatment in one visit</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-700 mb-1">Buy a cash panel or kit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>&bull; You have no symptoms and want routine screening</li>
                  <li>&bull; Privacy and speed matter more than price</li>
                  <li>&bull; You will follow up with a clinician on any positive</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-route" className="text-blue-600 hover:underline">1. STD testing cost by route</a></li>
              <li><a href="#posted-prices" className="text-blue-600 hover:underline">2. Posted cash prices you can check</a></li>
              <li><a href="#what-panels-cover" className="text-blue-600 hover:underline">3. What a panel covers (and why herpes is different)</a></li>
              <li><a href="#which-tests" className="text-blue-600 hover:underline">4. Which tests CDC recommends</a></li>
              <li><a href="#timing" className="text-blue-600 hover:underline">5. Window periods: when to test</a></li>
              <li><a href="#positive" className="text-blue-600 hover:underline">6. If a result is positive</a></li>
              <li><a href="#privacy" className="text-blue-600 hover:underline">7. Privacy and reporting</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">8. How to save</a></li>
              <li><a href="#red-flags" className="text-blue-600 hover:underline">9. When to see a clinician in person</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="by-route" className="text-2xl font-bold text-gray-900 mt-12 mb-6">STD Testing Cost by Route</h2>

            <p className="text-gray-700 mb-4">
              Cash STD testing comes in three main forms, plus a few rapid self-tests. The figures
              below are posted prices from provider pages and public price lists checked on{' '}
              {PRICES_CHECKED}. They are not quotes for your town, and they move with promotions.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Route</th>
                    <th className={th}>Posted cash price</th>
                    <th className={th}>What you get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Health department or community clinic</td>
                    <td className={td}>Often free or reduced cost</td>
                    <td className={td}>CDC&apos;s GetTested locator lists free, confidential testing sites for HIV, STDs and hepatitis. Services and fees vary by site, so call ahead.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Planned Parenthood</td>
                    <td className={td}>$0-$250 (national guide)</td>
                    <td className={td}>Clinician visit, exam if needed, and treatment. Florida lists a $125-$155 STI visit plus about $15-$70 per lab test; the Detroit center lists a $0-$192 office visit fee on an income-based sliding scale. Some affiliates post wider ranges: Pasadena and San Gabriel Valley lists STI testing at $0-$400.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Self-order lab panel (Quest, Labcorp, STDcheck, Priority)</td>
                    <td className={td}>$139-$489 per panel; single tests sold separately</td>
                    <td className={td}>Buy online, then give blood and urine at a lab center. No exam; physician oversight and positive-result follow-up vary by company.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Mail-in home kit (Everlywell, LetsGetChecked, myLAB Box)</td>
                    <td className={td}>$69-$409</td>
                    <td className={td}>Collect a finger-prick, swab or urine sample at home and mail it to a lab. Consultation terms for positives differ by brand.</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Rapid home self-test</td>
                    <td className={td}>About $39-$149</td>
                    <td className={td}>OraQuick HIV ($39.99), First To Know syphilis ($39 at Labcorp OnDemand), Visby female PCR test for chlamydia, gonorrhea and trichomoniasis ($149 at Everlywell). Positive HIV and syphilis self-tests need lab confirmation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> at a clinic you mostly pay for the visit; with a lab panel
              you mostly pay for the number of infections; with a kit you add shipping and
              convenience. Only the clinic route includes a physical exam, which matters if you have
              a sore, rash or other symptom. For background on how the buy-online, draw-at-a-lab
              model works, see our{' '}
              <Link href="/guides/blood-test-without-a-doctor" className={srcLink}>guide to ordering a blood test without a doctor</Link>{' '}
              and the <Link href="/labs" className={srcLink}>cash-pay labs hub</Link>, which compares
              self-pay lab services side by side.
            </p>

            <h2 id="posted-prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Posted Cash Prices You Can Check</h2>

            <p className="text-gray-700 mb-4">
              These are list prices on each company&apos;s own pages. Several brands show different
              numbers on different pages, which we note. Check the checkout total, which can add a
              physician fee, before you pay.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Provider and panel</th>
                    <th className={th}>Listed price</th>
                    <th className={th}>Infections covered</th>
                    <th className={th}>Collection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>STDcheck &mdash; 10 Test Panel</td>
                    <td className={td}>$139 + $6 physician fee at checkout</td>
                    <td className={td}>HIV-1/2, herpes 1 and 2, hepatitis A, B and C, chlamydia, gonorrhea, syphilis</td>
                    <td className={td}>Partner lab center; results in 1-2 days, per STDcheck</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Quest &mdash; STD Screening Panel, Basic</td>
                    <td className={td}>$149 + $6 physician fee</td>
                    <td className={td}>Chlamydia, gonorrhea, syphilis, HIV-1/2</td>
                    <td className={td}>Quest patient service center</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Quest &mdash; STD Screening Panel, Expanded</td>
                    <td className={td}>$282 + $6 physician fee</td>
                    <td className={td}>Basic panel plus hepatitis B, hepatitis C, trichomoniasis; confirmatory HIV and syphilis tests at no extra cost</td>
                    <td className={td}>Quest patient service center</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Priority STD Testing &mdash; 10-panel</td>
                    <td className={td}>$198 on most location pages (some show $249)</td>
                    <td className={td}>Chlamydia, gonorrhea, hepatitis B and C, herpes I/II, HIV 1/2, syphilis, trichomoniasis</td>
                    <td className={td}>Partner testing center; twin chlamydia and gonorrhea panel listed at $119</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Labcorp OnDemand &mdash; Complete STI Test</td>
                    <td className={td}>$489</td>
                    <td className={td}>Chlamydia, gonorrhea, trichomoniasis, HIV, syphilis, hepatitis B, hepatitis C</td>
                    <td className={td}>Labcorp location (blood and urine)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Labcorp OnDemand &mdash; single tests</td>
                    <td className={td}>$189 / $99 / $59</td>
                    <td className={td}>Chlamydia, gonorrhea and trichomoniasis / HIV / syphilis (RPR)</td>
                    <td className={td}>Labcorp location</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Everlywell &mdash; STD Test (female or male)</td>
                    <td className={td}>$169</td>
                    <td className={td}>Female kit page: chlamydia, gonorrhea, hepatitis C, HIV, syphilis, trichomoniasis. Another $169 Everlywell listing shows five infections without HIV, so confirm before ordering.</td>
                    <td className={td}>Home kit; the female version uses a finger-prick and vaginal swab</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Everlywell &mdash; Chlamydia &amp; Gonorrhea Test</td>
                    <td className={td}>$69</td>
                    <td className={td}>Chlamydia, gonorrhea</td>
                    <td className={td}>Home kit</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>LetsGetChecked &mdash; Simple 2 / Standard 5 / Complete 8</td>
                    <td className={td}>$99 / $149 / $249</td>
                    <td className={td}>Simple 2: chlamydia, gonorrhea. Standard 5: five infections including chlamydia, gonorrhea, trichomoniasis and syphilis (its pages differ on whether the fifth is HIV or hepatitis B). Complete 8 adds gardnerella, mycoplasma and ureaplasma.</td>
                    <td className={td}>Home kit; consultation from $39 if positive, medication extra</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>myLAB Box &mdash; Uber Box / Total Box</td>
                    <td className={td}>$209 / $379-$409</td>
                    <td className={td}>8 and 14 panels; the 8-panel Uber Box covers chlamydia, gonorrhea, trichomoniasis, HIV-1/2, hepatitis C, herpes simplex 2 and syphilis. A 5-panel Safe Box is also sold; its price differs across myLAB Box pages, so check the product page.</td>
                    <td className={td}>Home kit; the $409 Total Box option adds HPV for women 30 and older</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>OraQuick &mdash; In-Home HIV Test</td>
                    <td className={td}>$39.99 on oraquick.com</td>
                    <td className={td}>HIV antibodies (oral swab)</td>
                    <td className={td}>Rapid self-test; CDC says HIV self-test results take about 20 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-2">Compare infections, not the number in the name</h3>
              <p className="text-gray-700">
                Panel names count tests differently. Some list HIV-1 and HIV-2 or herpes type 1 and
                type 2 as separate items, and some add tests such as hepatitis A. The cheapest
                &quot;10-test&quot; panels here (STDcheck and Priority) include herpes antibody tests,
                while Quest&apos;s, Labcorp&apos;s and Everlywell&apos;s main panels do not. Line up the
                infections you actually need, then compare the price for that list.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Are STDcheck and Priority STD Testing legitimate?</h3>
            <p className="text-gray-700 mb-4">
              Both are lab-ordering services rather than clinics: you buy a test online and give a
              sample at a partner collection site. STDcheck says it uses CLIA-certified labs such as
              Quest Diagnostics and Labcorp and returns most results in 1-2 days. Priority STD
              Testing says it has more than 4,000 testing centers and offers a free doctor
              consultation after a positive result; we did not find a lab-partner disclosure on the
              pages we checked. Before you order from any service, ask which lab will run your
              sample and confirm that lab&apos;s certificate in{' '}
              <a href="https://qcor.cms.gov/advanced_find_provider.jsp?which=4&backReport=active_CLIA.jsp" target="_blank" rel="noopener noreferrer" data-link-purpose="source" className={srcLink}>CMS&apos;s CLIA laboratory lookup</a>.
              For how Quest and Labcorp compare on self-pay line items generally, see our{' '}
              <Link href="/guides/quest-vs-labcorp-pricing" className={srcLink}>Quest vs Labcorp pricing guide</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Which home STD tests have FDA authorization?</h3>
            <p className="text-gray-700 mb-4">
              FDA has authorized specific at-home STI products, including the four below. Each
              authorization covers only that product, not the brand&apos;s whole menu or similar kits
              from other companies:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>LetsGetChecked Simple 2</strong> (November 2023): the first chlamydia and
                gonorrhea test with at-home sample collection. You collect the sample and mail it to
                a lab for testing.
              </li>
              <li>
                <strong>First To Know Syphilis Test</strong> (August 2024): a finger-prick antibody
                test you run at home. FDA says a positive result must be followed by lab testing
                through a health care provider, so it is a first step, not a diagnosis.
              </li>
              <li>
                <strong>Visby Medical Women&apos;s Sexual Health Test</strong> (March 2025): the first
                test for chlamydia, gonorrhea and trichomoniasis that can be bought without a
                prescription and run entirely at home, from a vaginal swab.
              </li>
              <li>
                <strong>OraQuick In-Home HIV Test:</strong> an FDA-approved oral-swab antibody
                self-test. Because it detects antibodies, it has the longest window period of the
                HIV tests described below, and a positive result needs follow-up testing.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              For any other kit, check the company&apos;s page for its FDA status rather than assuming
              it, and ask which CLIA-certified lab will run your sample.
            </p>
          </div>

          <BrandCtaGrid
            title="Compare STD testing options before you order"
            intro="Match the infections you need first, then confirm the live checkout price and what happens if a result is positive. Priority STD Testing is priced in the table above but is not shown here because we could not confirm its lab partners."
            brands={STD_BRANDS}
            hubHref="/labs"
            hubLabel="Compare cash-pay labs →"
          />

          <div className="prose prose-lg max-w-none">
            <h2 id="what-panels-cover" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Panel Covers (and Why Herpes Is Different)</h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Chlamydia and gonorrhea</strong> are usually tested from urine or a swab. CDC
                says chlamydia often causes no symptoms but can still cause serious problems; untreated,
                it can lead to pelvic inflammatory disease and make it difficult or impossible to get
                pregnant later.
              </li>
              <li>
                <strong>Syphilis</strong> is a blood test. CDC&apos;s lab guidance says a reactive
                screening result should be confirmed with a second, different type of syphilis test,
                and treponemal antibodies usually persist after treatment, so they cannot tell a past
                infection from a current one.
              </li>
              <li>
                <strong>HIV</strong> is tested from blood at a lab or from oral fluid or a finger-prick
                with a self-test. The test type changes how soon it can detect infection (see window
                periods below).
              </li>
              <li>
                <strong>Hepatitis B and C</strong> are blood tests. CDC recommends that adults be
                screened for each at least once, and its hepatitis B recommendation calls for a
                triple panel (HBsAg, anti-HBs and total anti-HBc), so check which hepatitis B markers
                a panel includes.
              </li>
              <li>
                <strong>Trichomoniasis</strong> is tested from urine or a swab and is included in
                Quest&apos;s Expanded, Labcorp&apos;s Complete and Everlywell&apos;s panels, but not
                Quest&apos;s Basic panel.
              </li>
              <li>
                <strong>Extras</strong> such as mycoplasma, gardnerella, ureaplasma (LetsGetChecked
                Complete 8) or HPV (one myLAB Box Total Box option) add cost. Ask a clinician whether
                you need them before paying for a bigger panel.
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Herpes:</strong> CDC does not recommend herpes testing for people without
                symptoms in most situations, citing the limits of herpes blood tests and the
                possibility of a wrong result. CDC says testing can help if you have genital symptoms
                or a partner with genital herpes. If you have a sore, a clinician can examine it,
                which a mail-in blood panel cannot do.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Body site matters.</strong> CDC recommends that sexually active men who have sex
              with men be screened at each site of contact: the urethra and rectum for chlamydia, and
              the throat as well for gonorrhea. A urine-only test can miss a rectal or throat
              infection. Clinics can swab the throat and rectum, and myLAB Box sells a 3-site
              chlamydia and gonorrhea kit.
            </p>

            <h2 id="which-tests" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Tests CDC Recommends</h2>

            <p className="text-gray-700 mb-4">
              Buying the right tests is the biggest cost lever. CDC&apos;s screening recommendations are
              a useful starting point to discuss with a clinician:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className={th}>Who</th>
                    <th className={th}>CDC screening recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${td} font-medium`}>Everyone ages 13 to 64</td>
                    <td className={td}>HIV test at least once as part of routine care; yearly with ongoing risk, and every 3 to 6 months may benefit some sexually active gay and bisexual men</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>All adults 18 and older</td>
                    <td className={td}>Hepatitis C at least once (2020); hepatitis B at least once with a triple panel (2023)</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>Sexually active women under 25</td>
                    <td className={td}>Chlamydia and gonorrhea every year; women 25 and older if at increased risk</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className={`${td} font-medium`}>Sexually active men who have sex with men</td>
                    <td className={td}>Chlamydia, gonorrhea and syphilis at least yearly, with swabs from each site of contact (urethra and rectum, plus throat for gonorrhea); every 3 to 6 months if at higher risk, such as on PrEP, living with HIV, or when they or their partners have multiple partners</td>
                  </tr>
                  <tr>
                    <td className={`${td} font-medium`}>People without symptoms</td>
                    <td className={td}>Routine herpes blood testing is not recommended in most situations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              If you are on a tight budget and have no symptoms, matching your purchase to this list
              can save a lot. A one-time HIV, hepatitis B and hepatitis C check does not need to be
              repeated on the same schedule as chlamydia and gonorrhea screening, for example. If you
              want help deciding which kit or lab fits, our{' '}
              <Link href="/guides/at-home-lab-testing-guide" className={srcLink}>at-home lab testing guide</Link>{' '}
              explains how the major services work.
            </p>

            <h2 id="timing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Window Periods: When to Test</h2>

            <p className="text-gray-700 mb-4">
              Testing too soon after an exposure can miss an infection, and an early negative can mean
              paying for a second test. CDC gives these HIV window periods:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Nucleic acid test (NAT):</strong> usually 10 to 33 days after exposure</li>
              <li><strong>Lab antigen/antibody test:</strong> usually 18 to 45 days after exposure</li>
              <li><strong>Antibody test, including the oral HIV self-test:</strong> usually 23 to 90 days after exposure</li>
            </ul>

            <p className="text-gray-700 mb-4">
              For other infections, ask the testing service or a clinician. LetsGetChecked, for
              example, says syphilis can take up to 12 weeks to show up on a test and trichomoniasis
              up to 4 weeks. If you test early and get a negative result, CDC advises testing again
              after the window period for the test you used.
            </p>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-bold text-red-900 mb-3">Possible HIV exposure in the last 72 hours?</h3>
              <p className="text-sm text-red-800">
                Don&apos;t wait for a test. CDC says post-exposure prophylaxis (PEP) must be started
                within 72 hours of a possible exposure and taken daily for 28 days. Contact a health
                care provider, an urgent care clinic or an emergency room right away.
              </p>
            </div>

            <h2 id="positive" className="text-2xl font-bold text-gray-900 mt-12 mb-6">If a Result Is Positive: Confirmation, Treatment and Partners</h2>

            <p className="text-gray-700 mb-4">
              A positive result usually means more steps, and some of them cost money. Know them
              before you choose a service:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Confirmation.</strong> A positive HIV self-test needs follow-up testing with a
                health care provider; in a lab, CDC says the follow-up is usually run on the same
                sample. The FDA says a positive First To Know syphilis result must be followed by lab
                testing through a provider. Quest&apos;s Expanded panel includes confirmatory HIV and
                syphilis tests at no extra cost; STDcheck&apos;s terms say confirmatory HIV or
                syphilis tests are billed separately.
              </li>
              <li>
                <strong>Treatment.</strong> Terms vary. LetsGetChecked consultations start at $39, with
                medication extra. Everlywell says a physician contacts you about a positive at no
                additional cost. myLAB Box&apos;s Uber Box and Priority STD Testing list free
                consultations for positives. STDcheck&apos;s pricing page says a physician can
                prescribe treatment for an additional fee.
              </li>
              <li>
                <strong>Partners.</strong> Recent partners need testing or treatment. CDC describes
                expedited partner therapy (EPT), in which a clinician gives you medication or a
                prescription for a partner with chlamydia or gonorrhea, and tracks where EPT is
                legally allowed state by state.
              </li>
              <li>
                <strong>After treatment.</strong> For chlamydia, CDC advises avoiding sex for 7 days
                after single-dose treatment or until a 7-day course is finished and symptoms resolve.
                CDC recommends retesting about 3 months after treatment for chlamydia or gonorrhea,
                and for women treated for trichomoniasis. Budget for that second test.
              </li>
            </ul>

            <h2 id="privacy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Privacy and Reporting</h2>

            <p className="text-gray-700 mb-4">
              Paying cash means no insurance claim, and services such as STDcheck and Priority STD
              Testing say they do not bill health insurance. That is not the same as complete
              anonymity. CDC says syphilis, gonorrhea, chlamydia, chancroid and HIV are reportable in
              every state, by labs, providers or both, and those reports are kept confidential.
              Reporting rules for other infections vary by state. If privacy at the draw site
              matters to you, an at-home kit avoids the in-person visit.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save on STD Testing</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Check free options first.</strong> Search CDC&apos;s GetTested locator, call your local health department, and ask a Planned Parenthood center about sliding fees.</li>
              <li><strong>Check any insurance you have.</strong> HealthCare.gov lists HIV, hepatitis B, hepatitis C and syphilis screening for eligible adults, and chlamydia and gonorrhea screening for eligible women, among preventive services that Marketplace plans and many other plans must cover without a copay or coinsurance when you use an in-network provider. Eligibility depends on age and risk, so ask before you pay cash.</li>
              <li><strong>Buy only what you need.</strong> If you have no symptoms, a panel without herpes may cover everything CDC recommends for you.</li>
              <li><strong>Compare single tests with the panel.</strong> STDcheck lists HIV and syphilis at $49 each, so those two cost $98 versus $139 for its full panel; for a broader list, the panel is usually cheaper.</li>
              <li><strong>Count the whole bill.</strong> Add physician fees (such as the $6 fees at Quest and STDcheck), any consultation fee, medication and a possible 3-month retest.</li>
              <li><strong>Use HSA or FSA funds.</strong> Quest lists its STD panels as HSA/FSA accepted, and myLAB Box accepts FSA/HSA cards. Confirm eligibility with your plan.</li>
              <li><strong>Wait out the window period.</strong> Testing too early can mean paying for a second test.</li>
            </ul>

            <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When to See a Clinician in Person</h2>

            <p className="text-gray-700 mb-4">
              A mail-in kit or lab panel is a screening tool for people without symptoms. See a
              licensed clinician instead of, or in addition to, a cash test if:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You may have been exposed to HIV in the last 72 hours (PEP is time-sensitive).</li>
              <li>You have symptoms CDC lists for chlamydia, such as abnormal vaginal or penile discharge, burning when you pee, testicular pain or swelling, or rectal pain, discharge or bleeding.</li>
              <li>You have a genital sore, blister or rash, which a clinician can examine directly.</li>
              <li>A partner has told you they have an STI or symptoms of one.</li>
              <li>You are pregnant; CDC recommends hepatitis C screening during every pregnancy, and prenatal care is the place to arrange STI testing.</li>
              <li>Any cash test comes back positive or unclear.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              If you need an in-person visit and are paying cash, compare prices in our{' '}
              <Link href="/guides/urgent-care-cost-without-insurance" className={srcLink}>urgent care cost without insurance guide</Link>.
              For an emergency, call 911.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Compare Cash-Pay Lab &amp; Testing Options</h2>
            <p className="mb-6 text-blue-100">
              See self-pay lab and at-home testing services side by side, with published prices.
            </p>
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Cash-Pay Labs
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
              Which STD tests you need, when to test after an exposure, and how to treat a positive
              result are decisions to make with a licensed clinician. Self-ordered tests and home kits
              are screening tools; they do not replace an exam if you have symptoms, and some positive
              results need confirmatory testing. FDA authorization of one kit does not mean every kit
              sold online has it. Prices come from public provider pages as of {PRICES_CHECKED}. They
              vary by location and over time, some provider pages list conflicting figures, and
              totals may exclude physician fees, consultations, medication and retesting. Always
              confirm the current price and panel contents before you pay. VitalityScout is not
              affiliated with STDcheck, Priority STD Testing, Quest Diagnostics, Labcorp, Everlywell,
              LetsGetChecked, myLAB Box, OraQuick or Planned Parenthood, and listing a provider is not
              an endorsement.
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

        <RelatedGuides items={getRelatedGuides('/guides/std-testing-cost')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Lab Testing Cheat Sheet"
            description="How to match tests to what you need, compare panel prices, and spot add-on fees."
            source="guide_std_testing_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
