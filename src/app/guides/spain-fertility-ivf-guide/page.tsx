import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spain IVF & Fertility Tourism: Complete Guide for Americans (2024)',
  description: 'Plan your fertility treatment in Spain. IVF costs $5,000-8,000, donor egg success rates 55-60%. Barcelona, Madrid, Valencia clinic recommendations.',
};

export default function SpainFertilityGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spain IVF & Fertility Tourism: Complete Guide for Americans',
    description: 'Everything you need to know about fertility tourism in Spain including top clinics, IVF costs, success rates, and what to expect.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/spain-fertility-ivf-guide',
    keywords: ['Spain IVF', 'Spain egg donation', 'fertility tourism Spain', 'Barcelona IVF', 'Madrid fertility clinic']
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline">
            ← Back to all guides
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇪🇸</span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Fertility Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spain IVF & Fertility Tourism: Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Europe&apos;s #1 fertility destination with the highest donor-egg success rates (55-60%) and strict quality regulations.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 16 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-rose-900 mt-0 mb-2">Spain Fertility Tourism At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>60K+ fertility tourists annually</strong> - Europe&apos;s leader</li>
            <li>✓ <strong>30-50% savings</strong> vs. US IVF prices</li>
            <li>✓ <strong>55-60% success rate</strong> for donor-egg IVF (highest in Europe)</li>
            <li>✓ <strong>8-10 hour flight</strong> from US East Coast</li>
            <li>✓ <strong>No visa required</strong> for US citizens (Schengen zone)</li>
            <li>✓ <strong>Short waiting times</strong> vs. UK/US for donor eggs</li>
          </ul>
        </div>

        <h2>Why Spain for Fertility Treatment?</h2>
        <p>
          Spain has become Europe&apos;s fertility tourism capital for good reasons. The country combines strict quality regulations with competitive pricing and - crucially - some of the highest success rates for donor-egg IVF in the world.
        </p>
        <p>
          For Americans, Spain offers several advantages over staying in the US:
        </p>
        <ul>
          <li><strong>30-50% cost savings</strong> on IVF cycles</li>
          <li><strong>No waitlists for donor eggs</strong> (US waitlists can be 1-2 years)</li>
          <li><strong>Anonymous donation legal</strong> (donors are young, thoroughly screened)</li>
          <li><strong>Strict government regulations</strong> ensure consistent clinic quality</li>
          <li><strong>Beautiful destination</strong> for reducing stress during treatment</li>
        </ul>

        <div className="bg-white border-2 border-rose-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-rose-900 mt-0 mb-4">Cost Comparison: US vs. Spain</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Treatment</th>
                  <th className="text-left py-2">US Price</th>
                  <th className="text-left py-2 text-green-700">Spain Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">IVF Cycle (own eggs)</td>
                  <td className="py-2 text-gray-500">$15,000-25,000</td>
                  <td className="py-2 text-green-600 font-semibold">$5,000-8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">IVF + Donor Eggs</td>
                  <td className="py-2 text-gray-500">$25,000-40,000</td>
                  <td className="py-2 text-green-600 font-semibold">$8,000-12,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Egg Freezing</td>
                  <td className="py-2 text-gray-500">$10,000-15,000</td>
                  <td className="py-2 text-green-600 font-semibold">$3,500-5,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">PGT-A Testing (per cycle)</td>
                  <td className="py-2 text-gray-500">$3,000-6,000</td>
                  <td className="py-2 text-green-600 font-semibold">$2,000-3,500</td>
                </tr>
                <tr>
                  <td className="py-2">Frozen Embryo Transfer</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                  <td className="py-2 text-green-600 font-semibold">$1,500-2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Prices are estimates. Medications ($2,000-5,000) and travel costs are additional.
          </p>
        </div>

        <h2>Spain vs. Czech Republic: Which to Choose?</h2>
        <p>
          Both are popular European fertility destinations. Here&apos;s how to decide:
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
            <h4 className="font-bold text-rose-800 mt-0 mb-3">Choose Spain if:</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You want the highest donor-egg success rates (55-60%)</li>
              <li>✓ You&apos;re a single woman (legal in Spain)</li>
              <li>✓ You prefer strict regulations and oversight</li>
              <li>✓ You want a vacation-like destination</li>
              <li>✓ Budget is less of a concern than success rate</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-800 mt-0 mb-3">Choose Czech Republic if:</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• You want the lowest prices in Europe</li>
              <li>• You&apos;re a heterosexual couple (required by Czech law)</li>
              <li>• You&apos;re over 40 (Czech allows up to age 48 for donor eggs)</li>
              <li>• Budget is the primary factor</li>
              <li>• You prefer a smaller, quieter city (Prague)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">Important: Spanish Legal Requirements</h4>
          <ul className="text-sm text-yellow-800 space-y-2 mb-0">
            <li>• <strong>Single women:</strong> Yes, legally allowed</li>
            <li>• <strong>Same-sex female couples:</strong> Yes, legally allowed</li>
            <li>• <strong>Same-sex male couples:</strong> No - surrogacy is illegal in Spain</li>
            <li>• <strong>Donation:</strong> Anonymous only (you won&apos;t know the donor&apos;s identity)</li>
            <li>• <strong>Age limits:</strong> Vary by clinic, typically up to 50 for donor eggs</li>
          </ul>
        </div>

        <h2>Top Fertility Clinics in Spain</h2>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">IVI (Instituto Valenciano de Infertilidad)</h3>
              <span className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded">World&apos;s Largest</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              The world&apos;s largest fertility group, headquartered in Valencia. 65 clinics worldwide. IVI pioneered many IVF techniques.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Locations:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Valencia (headquarters)</li>
                  <li>• Madrid</li>
                  <li>• Barcelona</li>
                  <li>• Seville, Bilbao, others</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Pioneer of vitrification</li>
                  <li>• In-house research labs</li>
                  <li>• International patient coordinators</li>
                  <li>• 60%+ donor egg success rate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Institut Marques</h3>
              <span className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded">Barcelona</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Barcelona-based clinic known for innovation and personalized care. Famous for research on embryo development.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• IVF with own and donor eggs</li>
                  <li>• Embryo adoption</li>
                  <li>• Fertility preservation</li>
                  <li>• Complex cases</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Famous &quot;Babypod&quot; research</li>
                  <li>• Strong international patient focus</li>
                  <li>• Time-lapse embryo monitoring</li>
                  <li>• Beautiful clinic setting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Eugin Clinic</h3>
              <span className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded">Barcelona</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              One of Spain&apos;s largest and most experienced fertility clinics. Strong reputation for international patients.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• IVF with donor eggs</li>
                  <li>• Egg freezing</li>
                  <li>• Donor matching</li>
                  <li>• Remote monitoring</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• &quot;At Home&quot; program (remote prep)</li>
                  <li>• Large donor database</li>
                  <li>• Minimize travel days</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Ginefiv</h3>
              <span className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded">Madrid</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              One of Spain&apos;s pioneering fertility clinics (founded 1985). Madrid-based with strong track record.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• IVF all types</li>
                  <li>• Egg donation</li>
                  <li>• Genetic testing</li>
                  <li>• Male fertility</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• 35+ years experience</li>
                  <li>• Central Madrid location</li>
                  <li>• Comprehensive genetic lab</li>
                  <li>• Personalized protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Understanding the IVF Process in Spain</h2>
        <p>
          Treatment abroad requires different planning than local IVF. Here&apos;s what to expect:
        </p>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-rose-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Initial Consultation (Remote)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Video consultation with Spanish fertility specialist</li>
              <li>• Review your medical history and previous treatments</li>
              <li>• Develop a personalized treatment protocol</li>
              <li>• Receive cost estimate and timeline</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Preparation Phase (At Home)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Blood tests and ultrasounds with local doctor (clinic provides protocol)</li>
              <li>• Begin hormone medications if using own eggs</li>
              <li>• Regular check-ins with Spanish clinic via telemedicine</li>
              <li>• Clinic selects donor if applicable (matched to your characteristics)</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Trip 1: Egg Retrieval or Transfer Prep (5-10 days)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li><strong>If using own eggs:</strong> Final monitoring, trigger shot, egg retrieval</li>
              <li><strong>If using donor eggs:</strong> Uterine lining preparation, sync with donor</li>
              <li>• Fertilization and embryo culture in lab</li>
              <li>• Optional: PGT-A genetic testing (adds 1-2 weeks to results)</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Embryo Transfer (2-3 days)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Transfer of embryo(s) - quick, painless procedure</li>
              <li>• Rest period at hotel (24-48 hours recommended)</li>
              <li>• Receive aftercare instructions and medications</li>
              <li>• Fly home for the two-week wait</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">After Transfer (At Home)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Pregnancy test 10-14 days after transfer</li>
              <li>• If positive, begin prenatal care with local OB/GYN</li>
              <li>• Spanish clinic provides records and handoff to your doctor</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">How Many Trips Do I Need?</h4>
          <div className="text-sm text-blue-800 space-y-2">
            <p className="mb-3">
              <strong>Fresh transfer (own eggs):</strong> Usually 1 trip of 10-14 days
            </p>
            <p className="mb-3">
              <strong>Donor eggs (fresh transfer):</strong> Usually 1 trip of 4-6 days (timing synced to donor&apos;s cycle)
            </p>
            <p className="mb-0">
              <strong>Frozen embryo transfer:</strong> 1 trip of 3-5 days. Many clinics can do monitoring remotely, minimizing travel.
            </p>
          </div>
        </div>

        <h2>Practical Information</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Barcelona:</strong> 8-9 hrs from NYC, direct flights available</li>
              <li><strong>Madrid:</strong> 8-9 hrs from NYC, major hub</li>
              <li><strong>Valencia:</strong> Usually requires connection via Madrid/Barcelona</li>
              <li><strong>Airlines:</strong> Iberia, American, Delta, United have direct routes</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money & Payments</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Euro (EUR). ~1 EUR = $1.05-1.10 USD</li>
              <li><strong>Payment:</strong> Wire transfer for deposits, credit cards accepted</li>
              <li><strong>Insurance:</strong> Fertility treatment not covered by US insurance</li>
              <li><strong>Financing:</strong> Some clinics offer payment plans</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Where to Stay</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Barcelona:</strong> Eixample, Gracia - walkable, near clinics</li>
              <li><strong>Madrid:</strong> Salamanca, Chamberí - upscale, convenient</li>
              <li><strong>Book flexible:</strong> Treatment timing can shift a day or two</li>
              <li><strong>Apartments:</strong> Often better than hotels for longer stays</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Best Time to Go</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Avoid August:</strong> Many clinics have reduced schedules</li>
              <li><strong>Spring/Fall:</strong> Best weather, fewer tourists</li>
              <li><strong>Winter:</strong> Fine, but shorter days</li>
              <li><strong>Summer:</strong> Hot, but clinics fully operational</li>
            </ul>
          </div>
        </div>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Why are success rates so high in Spain?&quot;</h4>
            <p className="text-sm text-gray-700">
              Several factors: strict regulations on donor selection (donors are young, 18-35), advanced lab technology, high clinic volumes, and specialization. Spanish clinics also tend to be more aggressive with embryo selection and transfer protocols.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Can I choose my egg donor?&quot;</h4>
            <p className="text-sm text-gray-700">
              No - Spanish law requires anonymous donation. However, clinics carefully match donors to recipients based on physical characteristics (hair color, eye color, height, blood type) and sometimes personality/education. You&apos;ll receive non-identifying information about your donor.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;What if treatment doesn&apos;t work on the first try?&quot;</h4>
            <p className="text-sm text-gray-700">
              Many clinics offer package deals that include multiple attempts. Ask about their refund or &quot;shared risk&quot; programs. If you have frozen embryos from the first cycle, subsequent transfers are much less expensive ($1,500-2,500) and require shorter trips.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Do I need to bring a partner?&quot;</h4>
            <p className="text-sm text-gray-700">
              If you&apos;re doing IVF as a couple, your partner may need to provide a sperm sample in Spain (unless frozen sperm was shipped ahead). For the embryo transfer, having support is helpful emotionally but not required. Single women can do the entire process alone.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;How do I manage IVF medications?&quot;</h4>
            <p className="text-sm text-gray-700">
              Most clinics prescribe medications that you can get filled in Spain (often cheaper than US) or ship to your US address. Some medications require refrigeration. Your clinic will provide detailed instructions for injections, which you&apos;ll do at home.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 border border-rose-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Spain Fertility Options?</h3>
          <p className="text-gray-600 mb-6">
            Compare clinics and learn more about fertility treatment in Europe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/spain" className="inline-block rounded-lg bg-rose-600 px-6 py-3 font-medium text-white hover:bg-rose-700">
              Spain Destination Guide
            </Link>
            <Link href="/destinations/czech-republic" className="inline-block rounded-lg border-2 border-rose-600 px-6 py-3 font-medium text-rose-600 hover:bg-rose-50">
              Compare: Czech Republic
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for informational purposes only and does not constitute medical advice. Fertility treatment success depends on individual factors. Always consult with qualified fertility specialists before making treatment decisions.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.fertilityclinicsabroad.com/ivf-abroad/ivf-czech-republic/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Fertility Clinics Abroad - IVF in Europe</a></li>
            <li>• <a href="https://universalmedicaltravel.com/best-countries-for-ivf-in-the-world/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Universal Medical Travel - Best IVF Countries</a></li>
            <li>• <a href="https://ovu.com/guide-fertility-treatment-costs-eastern-europe2025" target="_blank" rel="noopener" className="text-blue-600 hover:underline">OVU - Eastern Europe IVF Guide 2025</a></li>
          </ul>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </main>
  );
}
