import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';
import {
  getTrtProgramStats,
  getHormoneProgramAsOf,
  getClinicPricing,
  formatPrice,
  formatAsOfMonth,
} from '@/lib/pricing';
import { trtProviders } from '@/lib/providers-telehealth';
import { getStatesWithClinics } from '@/data/hormone-clinics-index';

const URL = 'https://vitalityscout.com/trt';

// Verified national TRT-program pricing, computed over the store (never
// hardcoded). Powers the direct-answer lead + the verified-cost block.
const stats = getTrtProgramStats();
const asOf = getHormoneProgramAsOf();
const asOfLabel = asOf ? formatAsOfMonth(asOf, true) : '2026';
const medianLabel = stats ? formatPrice(stats.median) : '—';
const lowLabel = stats ? formatPrice(stats.low) : '—';
const highLabel = stats ? formatPrice(stats.high) : '—';
const nLabel = stats ? stats.n : 0;

export const metadata: Metadata = {
  title: {
    absolute: `TRT (Testosterone Replacement Therapy): Cost, Online Clinics & How It Works`,
  },
  alternates: { canonical: URL },
  description:
    `Testosterone replacement therapy explained: who qualifies, how online TRT clinics work, and what it costs. ` +
    `VitalityScout verified a ${medianLabel}/mo median across TRT clinics that publish a price. Compare national telehealth providers or find an in-person clinic by state.`,
};

// Featured telehealth providers first, then the rest in source order.
const orderedProviders = [...trtProviders].sort(
  (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
);

const FAQ_ITEMS = [
  {
    question: 'How much does TRT cost per month?',
    answer:
      `Across the ${nLabel} clinics that actually publish a monthly testosterone-therapy price, VitalityScout verified a median of ${medianLabel}/mo (range ${lowLabel}–${highLabel}/mo, verified ${asOfLabel}). ` +
      'National telehealth programs commonly land near $99–$249/mo. The spread reflects what is bundled: a membership-only fee bills the medication separately, while an all-in program folds the testosterone, supplies, and visits into one number. ' +
      'Most clinics post no price and quote only after a paid consult, so confirm the current figure and what it includes before committing. See the full TRT cost breakdown for the per-clinic table.',
  },
  {
    question: 'Who is a candidate for testosterone replacement therapy?',
    answer:
      'Per the American Urological Association and Endocrine Society clinical guidelines, TRT is for men with diagnosed testosterone deficiency: symptoms of low testosterone plus consistently low levels confirmed on two separate morning blood tests. ' +
      'The AUA uses a total testosterone threshold of 300 ng/dL to support the diagnosis. Guidelines advise against starting testosterone for a low reading alone, without symptoms, or as a routine anti-aging measure. A licensed clinician makes the call after labs and a history.',
  },
  {
    question: 'Can you get TRT online through telehealth?',
    answer:
      'Yes. National telehealth TRT clinics run an intake, order at-home or local lab work, have a licensed provider review your results, and ship medication (injections, cream, or other formats) to your door with ongoing monitoring. ' +
      'Availability varies by state — some providers exclude certain states, and controlled-substance rules can require an in-person or synchronous visit. Confirm your state is served and what monitoring is included before you enroll.',
  },
  {
    question: 'What lab tests are required for TRT?',
    answer:
      'A baseline work-up typically includes total (and often free) testosterone drawn in the morning on two occasions, plus estradiol, hematocrit/CBC, and PSA for older men. ' +
      'Providers re-check testosterone, hematocrit, and estradiol periodically after starting, because therapy can raise red-blood-cell count and estradiol. Ongoing bloodwork is part of safe treatment, not optional — it is how a clinician adjusts your dose and watches for side effects.',
  },
  {
    question: 'Is telehealth TRT or a local clinic better?',
    answer:
      'Telehealth is usually the lower-friction, lower-cost path for standard testosterone replacement: home labs, video visits, and medication shipped to you. Local hormone clinics make sense when you want in-person exams, pellet insertion, or more complex optimization. ' +
      'Many men start with telehealth and move to a local clinic only if they need hands-on procedures. Compare national providers below or browse in-person clinics by state.',
  },
  {
    question: 'Why do so few TRT clinics publish their prices?',
    answer:
      'Pricing is a lead-generation lever. Many hormone clinics keep the monthly number off the site so you book a consult, where a longer commitment is easier to sell. ' +
      'The clinics that do publish tend to be the value-positioned ones competing on price, so the posted market you can see skews lower than the consult-gated market you cannot. Get more than one quote before committing.',
  },
];

export default function TrtHub() {
  const states = getStatesWithClinics();

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'TRT (Testosterone Replacement Therapy): Cost, Online Clinics & How It Works',
    description:
      'National guide to testosterone replacement therapy — candidacy, how online TRT clinics work, verified monthly cost, and how to find in-person clinics by state.',
    url: URL,
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTherapy',
      name: 'Testosterone Replacement Therapy',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-21',
    dateModified: '2026-07-21',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'AUA Guideline: Testosterone Deficiency (2018, amended)',
        url: 'https://www.auanet.org/guidelines-and-quality/guidelines/testosterone-deficiency-guideline',
      },
      {
        '@type': 'CreativeWork',
        name: 'Endocrine Society Clinical Practice Guideline: Testosterone Therapy in Men With Hypogonadism (2018)',
        url: 'https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy',
      },
    ],
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'TRT', item: URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <nav className="border-b border-gray-200 px-4 py-3 text-sm" aria-label="Breadcrumb">
          <div className="mx-auto max-w-4xl text-gray-500">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">TRT</span>
          </div>
        </nav>

        {/* Hero + direct-answer lead */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-3xl">💪</span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Testosterone Replacement Therapy
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              TRT: Testosterone Replacement Therapy Cost, Online Clinics &amp; How It Works
            </h1>
            {/* Direct-answer lead (<=80 words) — anchored on the verified median */}
            <p className="aeo-answer text-lg text-gray-700">
              Testosterone replacement therapy (TRT) restores testosterone in men with diagnosed
              hypogonadism — low levels confirmed on two morning blood tests plus symptoms. Online TRT
              clinics run labs and ship medication from home. Across clinics that publish a monthly
              price, VitalityScout verified a <strong>median of {medianLabel}/mo</strong> (range{' '}
              {lowLabel}&ndash;{highLabel}/mo), though most quote only after a consult. Compare national
              telehealth providers below, or see the{' '}
              <Link href="/guides/trt-cost" className="text-purple-700 hover:underline">
                full TRT cost breakdown
              </Link>.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          {/* Quick nav */}
          <div className="mb-10 flex flex-wrap gap-3">
            <a href="#cost" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">What it costs</a>
            <a href="#candidacy" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">Who qualifies</a>
            <a href="#how-it-works" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">How online TRT works</a>
            <a href="#providers" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">Telehealth providers</a>
            <a href="#local" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">Clinics by state</a>
            <a href="#faq" className="rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-medium hover:border-purple-400">FAQ</a>
          </div>

          {/* Verified cost */}
          <section id="cost" className="scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">What TRT costs per month</h2>
            {stats && stats.n >= 3 ? (
              <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-5 space-y-2">
                <p className="text-lg font-semibold text-gray-900">
                  Verified TRT program cost: {medianLabel}/mo median{' '}
                  <span className="font-normal text-gray-600">
                    (range {lowLabel}&ndash;{highLabel}/mo, n={nLabel} clinics that publish a monthly
                    price, verified {asOfLabel})
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  This is VitalityScout verified pricing — every figure extracted from a clinic&apos;s
                  own website, stored with the source quote and date. National telehealth programs
                  commonly run $99&ndash;$249/mo. A membership-only fee (medication billed separately)
                  and an all-in program (medication included) are different products at the same
                  headline number, so read what each price covers. See the{' '}
                  <Link href="/guides/trt-cost" className="text-purple-700 hover:underline">
                    per-clinic verified TRT cost table
                  </Link>.
                </p>
                <PriceEstimateDisclaimer />
              </div>
            ) : (
              <p className="mb-4 text-gray-700">
                National telehealth TRT programs commonly run $99&ndash;$249/mo depending on what is
                bundled. See the{' '}
                <Link href="/guides/trt-cost" className="text-purple-700 hover:underline">
                  verified TRT cost breakdown
                </Link>{' '}
                for the per-clinic table.
              </p>
            )}
          </section>

          {/* What TRT treats + candidacy */}
          <section id="candidacy" className="mt-12 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">What TRT treats and who qualifies</h2>
            <p className="mb-4 text-gray-700">
              Testosterone replacement therapy treats <strong>male hypogonadism</strong> (also called
              testosterone deficiency): clinically low testosterone paired with symptoms such as low
              libido, fatigue, reduced morning erections, loss of muscle mass, low mood, or difficulty
              concentrating. It replaces testosterone the body is no longer producing at adequate
              levels; it is not a fitness supplement and not an anti-aging shortcut.
            </p>
            <p className="mb-4 text-gray-700">
              Major guidelines set a deliberate diagnostic bar. The{' '}
              <a
                href="https://www.auanet.org/guidelines-and-quality/guidelines/testosterone-deficiency-guideline"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                American Urological Association (AUA) Testosterone Deficiency guideline
              </a>{' '}
              uses a total testosterone threshold of <strong>300 ng/dL</strong> and requires{' '}
              <strong>two separate morning blood tests</strong> alongside symptoms before diagnosis.
              The{' '}
              <a
                href="https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Endocrine Society Clinical Practice Guideline
              </a>{' '}
              similarly recommends diagnosing hypogonadism only with both consistent symptoms and
              unequivocally low morning testosterone, and advises against routine testosterone for a
              low reading alone or purely for aging.
            </p>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-5 text-sm text-gray-700">
              <p className="mb-2 font-semibold text-gray-900">Generally not appropriate without a clinician&apos;s review if you:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>are trying to conceive (testosterone can suppress fertility — SERMs like enclomiphene are an alternative some clinics use)</li>
                <li>have untreated prostate or breast cancer, elevated PSA, or a high red-blood-cell count</li>
                <li>have uncontrolled heart failure or a recent cardiovascular event</li>
              </ul>
              <p className="mt-3">Candidacy is a medical decision. A licensed provider confirms it with labs and a history — this page is information, not a diagnosis.</p>
            </div>
          </section>

          {/* How online TRT works */}
          <section id="how-it-works" className="mt-12 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">How online TRT works</h2>
            <p className="mb-4 text-gray-700">
              National telehealth TRT clinics compress the traditional clinic path into a mostly-remote
              flow. Availability and format rules vary by state, so confirm coverage before enrolling.
            </p>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Intake.</strong> You complete a medical history and symptom questionnaire online.</li>
              <li><strong>2. Baseline labs.</strong> Bloodwork is drawn at a local lab or with an at-home kit — typically total and free testosterone (morning), estradiol, hematocrit/CBC, and PSA for older men.</li>
              <li><strong>3. Provider review.</strong> A licensed clinician reviews your labs and symptoms against diagnostic criteria and, if appropriate, prescribes a protocol.</li>
              <li><strong>4. Medication shipped.</strong> Testosterone (injections, cream/gel, or other formats) ships to your door, often with supplies included.</li>
              <li><strong>5. Ongoing monitoring.</strong> Follow-up labs re-check testosterone, hematocrit, and estradiol so the provider can adjust your dose and watch for side effects.</li>
            </ol>
          </section>

          {/* National telehealth providers */}
          <section id="providers" className="mt-12 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">National telehealth TRT providers</h2>
            <p className="mb-6 text-gray-600">
              Cash-pay online TRT clinics that ship nationwide (state exclusions noted where they
              apply). Prices are each provider&apos;s advertised rate on the date shown; confirm
              current pricing and what it includes directly with the clinic.
            </p>
            <div className="space-y-4">
              {orderedProviders.map((provider) => {
                const verified = getClinicPricing(provider.id);
                return (
                  <div
                    key={provider.slug}
                    className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-purple-300"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                          {provider.featured && (
                            <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{provider.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {provider.bestFor.map((tag) => (
                            <span key={tag} className="rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                          Coverage: {provider.geographicCoverage.join(' · ')}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Updated {formatVerified(provider.lastVerified)}
                        </p>
                      </div>
                      <div className="sm:min-w-[170px] sm:text-right">
                        <div className="text-xl font-bold text-gray-900">{provider.pricingDisplay}</div>
                        {provider.pricingNotes && (
                          <p className="mt-1 text-xs text-gray-500">{provider.pricingNotes}</p>
                        )}
                        {/* Verified store rows, when a provider has them (else nothing) */}
                        {verified.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {verified.slice(0, 3).map((p, i) => (
                              <div key={`${p.serviceKey}-${i}`} className="text-xs">
                                <span className="font-semibold text-green-700">{p.display}</span>{' '}
                                <span className="text-gray-500">
                                  verified {formatAsOfMonth(p.asOf)}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                        <Link
                          href={`/providers/${provider.slug}`}
                          className="mt-3 inline-block rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Compare the online-only options in depth in our{' '}
              <Link href="/guides/best-online-trt-clinics" className="text-purple-700 hover:underline">
                best online TRT clinics guide
              </Link>.
            </p>
          </section>

          {/* In-person path — links to hormone-therapy states */}
          <section id="local" className="mt-12 scroll-mt-24">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">Prefer in-person? Find a TRT clinic by state</h2>
            <p className="mb-6 text-gray-600">
              Local hormone clinics offer in-person exams, pellet insertion, and hands-on optimization.
              Browse in-person providers in our{' '}
              <Link href="/hormone-therapy" className="text-purple-700 hover:underline">
                hormone therapy directory
              </Link>{' '}
              or jump straight to a state below.
            </p>
            {states.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {states.map((state) => (
                  <Link
                    key={state.stateSlug}
                    href={`/hormone-therapy/${state.stateSlug}`}
                    className="block rounded-lg border-2 border-gray-200 p-5 transition-all hover:border-purple-400 hover:shadow-md"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-bold text-gray-900">{state.state}</span>
                      <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-800">
                        {state.count} clinics
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {state.cities.slice(0, 3).join(', ')}
                      {state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
                    </p>
                  </Link>
                ))}
              </div>
            )}
            <p className="mt-4 text-sm text-gray-500">
              More states are being added. Nationwide access is available now through the telehealth
              providers above.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group border-b border-gray-200 py-5">
                  <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-purple-600">
                    <span className="pr-4">{item.question}</span>
                    <span className="text-purple-600 transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related TRT resources</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/trt-cost" className="hover:underline">TRT cost: verified per-clinic monthly prices</Link></li>
              <li><Link href="/guides/trt-testosterone-therapy" className="hover:underline">Complete TRT guide: symptoms, options, what to expect</Link></li>
              <li><Link href="/guides/best-online-trt-clinics" className="hover:underline">Best online TRT clinics compared</Link></li>
              <li><Link href="/guides/bioidentical-vs-traditional-hrt" className="hover:underline">Bioidentical vs traditional HRT: the cost difference</Link></li>
              <li><Link href="/hormone-therapy" className="hover:underline">Hormone therapy clinics by state</Link></li>
              <li><Link href="/labs" className="hover:underline">At-home hormone lab testing</Link></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />
      </SidebarShell>
      <Footer />
    </main>
  );
}

// Deterministic month-year formatting for a provider's lastVerified ISO date
// (SSR-stable, no locale/timezone drift).
function formatVerified(iso: string): string {
  const [year, month] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const idx = parseInt(month, 10) - 1;
  return `${months[idx] ?? month} ${year}`;
}
