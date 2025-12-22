import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plastic Surgery in Korea: Gangnam Clinics, Costs, Complete Guide (2024)',
  description: 'Complete guide to plastic surgery in South Korea. Rhinoplasty $3,000-9,000, double eyelid $1,500-3,500. Top Gangnam clinics, what to expect, recovery tips.',
};

export default function PlasticSurgeryKoreaGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Plastic Surgery in Korea: Complete Guide for International Patients',
    description: 'Everything you need to know about plastic surgery in South Korea including top clinics, costs, procedures, and travel planning.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/plastic-surgery-korea-guide',
    keywords: ['Korea plastic surgery', 'Gangnam plastic surgery', 'rhinoplasty Korea', 'double eyelid surgery Korea', 'Korean beauty surgery', 'K-beauty surgery']
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

      <section className="bg-gradient-to-b from-pink-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇰🇷</span>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
              Plastic Surgery Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plastic Surgery in Korea: The World Capital of Cosmetic Surgery
          </h1>
          <p className="text-xl text-gray-600">
            Why 1.17 million foreign patients chose Seoul for cosmetic procedures in 2024.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 18 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-pink-900 mt-0 mb-2">Korea Plastic Surgery At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>1.17 million foreign medical tourists</strong> in 2024</li>
            <li>✓ <strong>$770+ million spent</strong> by foreigners on plastic surgery/dermatology (2024)</li>
            <li>✓ <strong>814 plastic surgery clinics</strong> in Gangnam district alone</li>
            <li>✓ <strong>37,700 foreign eyelid surgeries</strong> and 5,900 rhinoplasties in 2024</li>
            <li>✓ <strong>30-50% savings</strong> vs. comparable US procedures</li>
            <li>✓ <strong>K-visa (Medical Tourism Visa)</strong> available for extended stays</li>
          </ul>
        </div>

        <h2>Why Korea for Plastic Surgery?</h2>
        <p>
          South Korea isn&apos;t just a popular destination for plastic surgery - it&apos;s <strong>the</strong> destination. The country has the highest rate of cosmetic procedures per capita in the world, and Seoul&apos;s Gangnam district has more plastic surgery clinics per square kilometer than anywhere on Earth.
        </p>
        <ul>
          <li><strong>Unmatched expertise</strong> - Korean surgeons perform more procedures than anywhere else, leading to exceptional skill</li>
          <li><strong>K-Beauty standards</strong> - The aesthetic that launched a global beauty movement</li>
          <li><strong>Cutting-edge techniques</strong> - Korea often develops procedures that later spread worldwide</li>
          <li><strong>Competitive pricing</strong> - High clinic density drives competition</li>
          <li><strong>Recovery infrastructure</strong> - Recovery houses, post-op care, the whole system exists for medical tourists</li>
        </ul>

        <div className="bg-white border-2 border-pink-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-pink-900 mt-0 mb-4">Cost Comparison: US vs. Korea</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-left py-2">US Price</th>
                  <th className="text-left py-2 text-pink-700">Korea Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Double Eyelid Surgery</td>
                  <td className="py-2 text-gray-500">$3,000-6,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$1,500-3,500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Rhinoplasty (Nose Job)</td>
                  <td className="py-2 text-gray-500">$8,000-15,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$3,000-9,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Facial Contouring (V-Line)</td>
                  <td className="py-2 text-gray-500">$15,000-25,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$8,000-15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Fat Grafting (Face)</td>
                  <td className="py-2 text-gray-500">$5,000-10,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$2,500-5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Breast Augmentation</td>
                  <td className="py-2 text-gray-500">$8,000-15,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$5,000-10,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Liposuction (Abdomen)</td>
                  <td className="py-2 text-gray-500">$6,000-10,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$3,000-6,000</td>
                </tr>
                <tr>
                  <td className="py-2">Facelift</td>
                  <td className="py-2 text-gray-500">$15,000-30,000</td>
                  <td className="py-2 text-pink-600 font-semibold">$10,000-18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Prices are estimates. Gangnam clinics are 10-30% higher than clinics in other areas.
          </p>
        </div>

        <h2>Most Popular Procedures</h2>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">👁️ Double Eyelid Surgery (Blepharoplasty)</h3>
            <p className="text-sm text-gray-600 mb-3">
              The most common cosmetic procedure in Korea. Creates a crease in the eyelid for a more defined, &quot;open&quot; look. Korea&apos;s specialty.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Techniques:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Non-incisional:</strong> Suture method, less downtime</li>
                  <li>• <strong>Incisional:</strong> More permanent, better for excess skin</li>
                  <li>• <strong>Partial incision:</strong> Hybrid approach</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Details:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Cost:</strong> $1,500-3,500</li>
                  <li>• <strong>Duration:</strong> 30-60 minutes</li>
                  <li>• <strong>Recovery:</strong> 5-7 days initial, 2-4 weeks full</li>
                  <li>• <strong>Stay in Korea:</strong> 5-7 days minimum</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">👃 Rhinoplasty (Nose Job)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Korean rhinoplasty focuses on creating a higher, more defined nose bridge while maintaining natural proportions. Different philosophy than Western rhinoplasty.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Types:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Bridge augmentation:</strong> Silicone or Gore-Tex implant</li>
                  <li>• <strong>Tip plasty:</strong> Refine nose tip only</li>
                  <li>• <strong>Alar reduction:</strong> Narrow nostrils</li>
                  <li>• <strong>Revision rhinoplasty:</strong> Fix previous work</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Details:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Cost:</strong> $3,000-9,000</li>
                  <li>• <strong>Duration:</strong> 1-3 hours</li>
                  <li>• <strong>Recovery:</strong> 7-10 days initial, 3-6 months full</li>
                  <li>• <strong>Stay in Korea:</strong> 10-14 days minimum</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">💎 Facial Contouring (V-Line Surgery)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Reshaping the jaw and chin to create the coveted V-shaped face. A Korean specialty that&apos;s more advanced here than anywhere else.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Procedures:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Square jaw reduction:</strong> Shave down wide jaw</li>
                  <li>• <strong>Chin reduction/augmentation:</strong> Reshape chin</li>
                  <li>• <strong>Zygoma (cheekbone) reduction:</strong> Narrow cheekbones</li>
                  <li>• <strong>Genioplasty:</strong> Reposition chin bone</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Details:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• <strong>Cost:</strong> $8,000-15,000+</li>
                  <li>• <strong>Duration:</strong> 2-4 hours</li>
                  <li>• <strong>Recovery:</strong> 2-3 weeks initial, 3-6 months full</li>
                  <li>• <strong>Stay in Korea:</strong> 2-3 weeks minimum</li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
              <p className="text-xs text-yellow-800 mb-0">
                <strong>Note:</strong> This is major surgery involving bone. Recovery is significant. Not recommended as a first procedure or for medical tourists with limited time.
              </p>
            </div>
          </div>
        </div>

        <h2>Top Gangnam Clinics</h2>
        <p>
          Gangnam has 814+ plastic surgery clinics. Here are some reputable ones frequently recommended for international patients:
        </p>

        <div className="space-y-4 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">THE PLUS Plastic Surgery</h4>
            <p className="text-sm text-gray-600 mb-2">
              4-floor facility in Gangnam&apos;s Garosu-gil area. Known for facial contouring and rhinoplasty. Full-service for international patients.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• English-speaking coordinators</li>
              <li>• Specialized in V-line and two-jaw surgery</li>
              <li>• On-site recovery facilities</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">VG Plastic Surgery</h4>
            <p className="text-sm text-gray-600 mb-2">
              Led by Dr. Min, named one of Korea&apos;s &quot;100 Good Doctors&quot; in 2022. Specializes in facial contouring and rhinoplasty.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Board-certified specialists</li>
              <li>• Known for natural-looking results</li>
              <li>• Extensive before/after gallery</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">AB Plastic Surgery</h4>
            <p className="text-sm text-gray-600 mb-2">
              Near Gangnam Station. Popular with international patients for eye and nose surgery. Transparent pricing.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Convenient Gangnam Station location</li>
              <li>• Specializes in double eyelid and rhinoplasty</li>
              <li>• Multi-language support</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">ID Hospital</h4>
            <p className="text-sm text-gray-600 mb-2">
              One of the largest plastic surgery hospitals in Korea. Multi-floor facility with specialists for every procedure.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Hospital-scale facility</li>
              <li>• All specialties under one roof</li>
              <li>• Popular with Chinese and Japanese patients</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">⚠️ Red Flags to Avoid</h4>
          <ul className="text-sm text-yellow-800 space-y-2 mb-0">
            <li><strong>&quot;Ghost surgery&quot;:</strong> Make sure YOUR surgeon does YOUR surgery. Ask who will be in the operating room.</li>
            <li><strong>Unusually low prices:</strong> If it&apos;s 50% cheaper than competitors, ask why.</li>
            <li><strong>No before/after photos:</strong> Legitimate clinics proudly display their work.</li>
            <li><strong>Pressure to book immediately:</strong> Good clinics don&apos;t need high-pressure sales.</li>
            <li><strong>No consultation with actual surgeon:</strong> You should meet the surgeon before surgery.</li>
            <li><strong>Agency kickbacks:</strong> Be wary of &quot;medical tourism agencies&quot; - go direct when possible.</li>
          </ul>
        </div>

        <h2>Planning Your Trip</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">2-3 Months Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Research clinics and procedures thoroughly</li>
              <li>• Send photos for online consultation (most clinics offer this free)</li>
              <li>• Get quotes from 2-3 clinics</li>
              <li>• Book clinic and pay deposit (usually 10-30%)</li>
              <li>• Book flights to Seoul (ICN airport)</li>
              <li>• Apply for K-visa if staying 90+ days</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">1-2 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Confirm surgery date and time</li>
              <li>• Book accommodation near clinic (Gangnam area)</li>
              <li>• Arrange airport pickup (most clinics offer this)</li>
              <li>• Stop blood thinners, supplements per clinic instructions</li>
              <li>• Download Kakao (Korea&apos;s messaging app) and Naver Maps</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Typical 10-14 Day Trip (Rhinoplasty)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li><strong>Day 1:</strong> Arrive Seoul, clinic pickup, settle into hotel</li>
              <li><strong>Day 2:</strong> In-person consultation, blood tests, finalize plan</li>
              <li><strong>Day 3:</strong> Surgery day</li>
              <li><strong>Days 4-7:</strong> Recovery in hotel or recovery house, daily clinic check-ins</li>
              <li><strong>Day 7-8:</strong> Stitch removal, splint removal</li>
              <li><strong>Days 9-14:</strong> Recovery continues, light tourism possible, final check</li>
              <li><strong>Day 14:</strong> Fly home (still swollen but presentable)</li>
            </ul>
          </div>
        </div>

        <h2>Recovery in Seoul</h2>
        <p>
          Seoul has infrastructure specifically designed for plastic surgery recovery:
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Recovery Houses</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>What:</strong> Guesthouses specializing in post-op care</li>
              <li><strong>Cost:</strong> $50-150/night</li>
              <li><strong>Services:</strong> Wound care, meals, clinic transport</li>
              <li><strong>Location:</strong> Usually near Gangnam clinics</li>
              <li><strong>Vibe:</strong> Communal, meet other patients</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Hotel Recovery</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>What:</strong> Regular hotel or Airbnb in Gangnam</li>
              <li><strong>Cost:</strong> $80-200/night</li>
              <li><strong>Pros:</strong> Privacy, independence</li>
              <li><strong>Cons:</strong> No specialized care</li>
              <li><strong>Best for:</strong> Minor procedures, companions</li>
            </ul>
          </div>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 my-8">
          <h4 className="text-pink-900 mt-0 mb-3">Recovery Tips</h4>
          <ul className="text-sm text-pink-800 space-y-2 mb-0">
            <li>• <strong>Stock up on soft foods:</strong> Congee, soup, smoothies (convenience stores everywhere)</li>
            <li>• <strong>Bring a neck pillow:</strong> You&apos;ll sleep elevated for a week</li>
            <li>• <strong>Masks are normal:</strong> Korea is mask-friendly, perfect for hiding swelling</li>
            <li>• <strong>Don&apos;t plan tourism:</strong> You won&apos;t feel like it for the first week</li>
            <li>• <strong>Download Coupang:</strong> Korea&apos;s Amazon - delivers everything quickly</li>
            <li>• <strong>Ice packs:</strong> Clinic will provide, use religiously</li>
          </ul>
        </div>

        <h2>Combining Procedures</h2>
        <p>
          Many patients combine procedures to save on anesthesia, facility fees, and trip costs. Common combinations:
        </p>
        <ul>
          <li><strong>Eyes + Nose:</strong> Most popular combo. $4,500-10,000 total.</li>
          <li><strong>Nose + Fat grafting:</strong> Harmonize facial proportions. $5,500-12,000.</li>
          <li><strong>Full facial:</strong> Eyes + nose + fat + chin. $10,000-20,000+.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">Combination Savings</h4>
          <p className="text-sm text-blue-800 mb-0">
            Combining procedures can save 10-20% vs. doing them separately, primarily on anesthesia and facility fees. However, more procedures = longer recovery. Be realistic about how much you can handle in one trip.
          </p>
        </div>

        <h2>Practical Information</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Airport:</strong> Incheon (ICN), 1 hour from Seoul</li>
              <li><strong>Flights:</strong> 12-14 hrs from US (direct from LA, SF, NYC, etc.)</li>
              <li><strong>Visa:</strong> K-ETA required for US citizens (free, apply online)</li>
              <li><strong>Pickup:</strong> Most clinics arrange airport pickup</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Korean Won (KRW)</li>
              <li><strong>Exchange rate:</strong> ~1,300 KRW = $1 USD</li>
              <li><strong>Clinic payments:</strong> Wire transfer, credit card (3-4% fee)</li>
              <li><strong>ATMs:</strong> Widely available, look for Global ATMs</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Where to Stay</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Gangnam:</strong> Near clinics, expensive, less character</li>
              <li><strong>Sinsa/Garosugil:</strong> Trendy, walkable, near Gangnam</li>
              <li><strong>Myeongdong:</strong> Tourist area, farther from clinics</li>
              <li><strong>Budget:</strong> $60-100/night for decent hotel</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Kakao Talk:</strong> Korea&apos;s main messaging app (clinics use it)</li>
              <li><strong>Papago/Google Translate:</strong> Camera translation for menus</li>
              <li><strong>Clinic coordinators:</strong> Usually speak English well</li>
              <li><strong>General public:</strong> Limited English outside tourist areas</li>
            </ul>
          </div>
        </div>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Will I look Korean?&quot;</h4>
            <p className="text-sm text-gray-700">
              This is a common concern for Western patients. Good Korean surgeons understand different facial anatomies and aesthetic goals. Be clear about what you want: do you want the &quot;Korean ideal&quot; or a refined version of your natural features? Show photos of results you like.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Can I fly home with stitches/splints?&quot;</h4>
            <p className="text-sm text-gray-700">
              Generally yes, but not recommended. Most procedures require 7-10 days before flying is comfortable and safe. Flying too early increases swelling and complication risk. Plan for adequate recovery time in Korea.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;What if something goes wrong?&quot;</h4>
            <p className="text-sm text-gray-700">
              Reputable clinics include follow-up care and handle complications. For revisions, you&apos;d need to return to Korea. This is the main tradeoff of medical tourism. Choose an established clinic with a track record over the cheapest option.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;How do I avoid ghost surgery?&quot;</h4>
            <p className="text-sm text-gray-700">
              Ask directly: &quot;Will Dr. [Name] personally perform my surgery from start to finish?&quot; Request it in writing. Reputable clinics are transparent about this. &quot;Ghost surgery&quot; (where a different surgeon operates) is illegal in Korea but still happens at some clinics.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Is it safe?&quot;</h4>
            <p className="text-sm text-gray-700">
              Korea has excellent medical standards and strict regulations. Complications happen everywhere, but Korean surgeons&apos; high volume means they&apos;ve seen everything. The risk isn&apos;t higher than the US - if anything, it may be lower for procedures they specialize in. The main risk is choosing poorly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Korea Plastic Surgery?</h3>
          <p className="text-gray-600 mb-6">
            Browse our South Korea destination guide for more information on medical tourism.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/south-korea" className="inline-block rounded-lg bg-pink-600 px-6 py-3 font-medium text-white hover:bg-pink-700">
              South Korea Destination Guide
            </Link>
            <Link href="/plastic_surgery" className="inline-block rounded-lg border-2 border-pink-600 px-6 py-3 font-medium text-pink-600 hover:bg-pink-50">
              Browse Plastic Surgery Providers
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for informational purposes only and does not constitute medical advice. Cosmetic surgery carries risks including infection, scarring, asymmetry, and dissatisfaction with results. Consult with qualified medical professionals before making decisions about surgery. Verify all clinic credentials and pricing directly before booking.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.medicaltourismco.com/cosmetic-surgery-in-seoul-korea/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Tourism Co - Plastic Surgery in Seoul</a></li>
            <li>• <a href="https://www.koreaclinicguide.com/blog/double-eyelid-surgery-korea" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Korea Clinic Guide - Double Eyelid Surgery</a></li>
            <li>• <a href="https://koreanbeautysurgery.com/plastic-surgery-cost-korea/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Korean Beauty Surgery - Price Guide</a></li>
            <li>• <a href="https://www.ingbale.com/prices/korean-plastic-surgery-prices-2025-complete-guide" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Seoul Skin Guide - 2025 Price Guide</a></li>
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
