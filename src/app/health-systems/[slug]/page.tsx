import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  getHealthSystemBySlug,
  getAllHealthSystemSlugs,
  getSpecialtyLeaders,
  type NationalHealthSystem,
} from '@/lib/national-health-systems';

export function generateStaticParams() {
  return getAllHealthSystemSlugs().map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const system = getHealthSystemBySlug(params.slug);
  if (!system) return { title: 'Health System Not Found' };

  const specialtyText = system.specialties
    .filter(s => s.isTopTen)
    .slice(0, 3)
    .map(s => s.specialty)
    .join(', ');

  return {
    title: `${system.name} - ${system.location.city}, ${system.location.state} | VitalityScout`,
    description: `${system.name} is ${system.ranking.honorRoll ? 'a US News Honor Roll hospital' : 'a nationally recognized health system'}. ${specialtyText ? `Top-ranked for ${specialtyText}.` : ''} Learn about their specialties, rankings, and achievements.`,
  };
}

function getRankBadgeColor(rank: number): string {
  if (rank === 1) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
  if (rank <= 3) return 'bg-blue-100 text-blue-800 border-blue-300';
  if (rank <= 10) return 'bg-green-100 text-green-800 border-green-300';
  return 'bg-gray-100 text-gray-700 border-gray-300';
}

function getRankLabel(rank: number): string {
  if (rank === 1) return '#1 in Nation';
  if (rank === 2) return '#2 in Nation';
  if (rank === 3) return '#3 in Nation';
  return `#${rank} in Nation`;
}

export default function HealthSystemPage({ params }: { params: { slug: string } }) {
  const system = getHealthSystemBySlug(params.slug);

  if (!system) {
    notFound();
  }

  const topSpecialties = system.specialties.filter(s => s.isTopTen);
  const otherSpecialties = system.specialties.filter(s => !s.isTopTen);

  // Find which specialties this hospital leads
  const specialtyLeaders = getSpecialtyLeaders();
  const leadsSpecialties = specialtyLeaders.filter(
    sl => sl.leader.slug === system.slug
  );

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/traditional-healthcare"
            className="text-blue-600 hover:underline text-sm mb-4 inline-block"
          >
            &larr; Back to Traditional Healthcare
          </Link>

          <div className="flex flex-wrap items-start gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {system.name}
            </h1>
            {system.ranking.honorRoll && (
              <span className="bg-yellow-100 text-yellow-800 border border-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                US News Honor Roll
              </span>
            )}
          </div>

          <p className="text-lg text-gray-600 mb-4">
            {system.location.city}, {system.location.state}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            {system.ranking.overall && (
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                #{system.ranking.overall} Overall (US News)
              </span>
            )}
            {system.ranking.worldRank && (
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                #{system.ranking.worldRank} World (Newsweek)
              </span>
            )}
            {system.ranking.stateRank && (
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                #{system.ranking.stateRank} in {system.location.state}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Specialty Leadership Section */}
      {leadsSpecialties.length > 0 && (
        <section className="bg-yellow-50 border-y border-yellow-200 px-4 py-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              National Specialty Leader
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {leadsSpecialties.map((specialty) => (
                <div
                  key={specialty.slug}
                  className="bg-white rounded-lg border-2 border-yellow-300 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-lg font-bold text-yellow-800">
                      #1 for {specialty.specialty}
                    </span>
                  </div>
                  {specialty.leader.consecutiveYears && (
                    <p className="text-sm text-gray-600 mb-2">
                      {specialty.leader.consecutiveYears} consecutive years
                    </p>
                  )}
                  <p className="text-sm text-gray-700">
                    {specialty.leader.achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Rankings & Specialties */}
          <div className="lg:col-span-2 space-y-8">
            {/* Top 10 Specialties */}
            {topSpecialties.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Top 10 National Rankings
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {topSpecialties.map((specialty) => (
                    <div
                      key={specialty.specialty}
                      className={`rounded-lg border-2 p-4 ${getRankBadgeColor(specialty.rank)}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-lg">
                            {specialty.specialty}
                          </div>
                          {specialty.consecutiveYears && (
                            <div className="text-sm opacity-80">
                              {specialty.consecutiveYears} consecutive years
                            </div>
                          )}
                          {specialty.note && (
                            <div className="text-sm opacity-80 mt-1">
                              {specialty.note}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold">
                            {getRankLabel(specialty.rank)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Other Ranked Specialties */}
            {otherSpecialties.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Other Nationally Ranked Specialties
                </h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {otherSpecialties.map((specialty) => (
                    <div
                      key={specialty.specialty}
                      className="rounded-lg border border-gray-200 p-3 bg-gray-50"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">
                          {specialty.specialty}
                        </span>
                        <span className="text-gray-600">#{specialty.rank}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-3">
                {system.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Unique Achievements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Notable Achievements
              </h2>
              <ul className="space-y-3">
                {system.uniqueAchievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-yellow-600 mt-1">★</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column - Facts & CTA */}
          <div className="space-y-6">
            {/* Quick Facts Card */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-3">
                {system.facts.founded && (
                  <div>
                    <dt className="text-sm text-gray-500">Founded</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.founded}
                    </dd>
                  </div>
                )}
                {system.facts.beds && (
                  <div>
                    <dt className="text-sm text-gray-500">Beds</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.beds.toLocaleString()}
                    </dd>
                  </div>
                )}
                {system.facts.physicians && (
                  <div>
                    <dt className="text-sm text-gray-500">Physicians</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.physicians.toLocaleString()}+
                    </dd>
                  </div>
                )}
                {system.facts.employees && (
                  <div>
                    <dt className="text-sm text-gray-500">Employees</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.employees.toLocaleString()}+
                    </dd>
                  </div>
                )}
                {system.facts.annualPatients && (
                  <div>
                    <dt className="text-sm text-gray-500">Patient Volume</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.annualPatients}
                    </dd>
                  </div>
                )}
                {system.facts.researchBudget && (
                  <div>
                    <dt className="text-sm text-gray-500">Research Budget</dt>
                    <dd className="font-medium text-gray-900">
                      {system.facts.researchBudget}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Visit Website CTA */}
            <a
              href={system.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Visit {system.name} Website
              <span className="ml-2">&rarr;</span>
            </a>

            {/* Location Card */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-700">
                {system.location.city}, {system.location.state}
              </p>
              {system.location.address && (
                <p className="text-sm text-gray-600 mt-1">
                  {system.location.address}
                </p>
              )}
            </div>

            {/* Cash-Pay Alternative CTA */}
            <div className="bg-green-50 rounded-lg border border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Exploring Cash-Pay Options?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare transparent pricing from telehealth providers and medical tourism destinations.
              </p>
              <Link
                href="/"
                className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                Browse Cash-Pay Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <section className="bg-gray-50 border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm text-gray-500">
            <strong>Disclaimer:</strong> Rankings are based on US News & World Report
            2024-2025 Best Hospitals methodology. This information is for educational
            purposes only. Always verify current rankings and consult with healthcare
            providers directly for the most up-to-date information. VitalityScout is
            not affiliated with {system.name}.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
