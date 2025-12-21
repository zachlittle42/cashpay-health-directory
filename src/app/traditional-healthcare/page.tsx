'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  getHonorRollHospitals,
  getSpecialtyLeaders,
  type NationalHealthSystem,
  type SpecialtyLeader,
} from '@/lib/national-health-systems';

const states = [
  { name: 'Alabama', abbr: 'AL', slug: 'alabama' },
  { name: 'Alaska', abbr: 'AK', slug: 'alaska' },
  { name: 'Arizona', abbr: 'AZ', slug: 'arizona' },
  { name: 'Arkansas', abbr: 'AR', slug: 'arkansas' },
  { name: 'California', abbr: 'CA', slug: 'california' },
  { name: 'Colorado', abbr: 'CO', slug: 'colorado' },
  { name: 'Connecticut', abbr: 'CT', slug: 'connecticut' },
  { name: 'Delaware', abbr: 'DE', slug: 'delaware' },
  { name: 'Florida', abbr: 'FL', slug: 'florida' },
  { name: 'Georgia', abbr: 'GA', slug: 'georgia' },
  { name: 'Hawaii', abbr: 'HI', slug: 'hawaii' },
  { name: 'Idaho', abbr: 'ID', slug: 'idaho' },
  { name: 'Illinois', abbr: 'IL', slug: 'illinois' },
  { name: 'Indiana', abbr: 'IN', slug: 'indiana' },
  { name: 'Iowa', abbr: 'IA', slug: 'iowa' },
  { name: 'Kansas', abbr: 'KS', slug: 'kansas' },
  { name: 'Kentucky', abbr: 'KY', slug: 'kentucky' },
  { name: 'Louisiana', abbr: 'LA', slug: 'louisiana' },
  { name: 'Maine', abbr: 'ME', slug: 'maine' },
  { name: 'Maryland', abbr: 'MD', slug: 'maryland' },
  { name: 'Massachusetts', abbr: 'MA', slug: 'massachusetts' },
  { name: 'Michigan', abbr: 'MI', slug: 'michigan' },
  { name: 'Minnesota', abbr: 'MN', slug: 'minnesota' },
  { name: 'Mississippi', abbr: 'MS', slug: 'mississippi' },
  { name: 'Missouri', abbr: 'MO', slug: 'missouri' },
  { name: 'Montana', abbr: 'MT', slug: 'montana' },
  { name: 'Nebraska', abbr: 'NE', slug: 'nebraska' },
  { name: 'Nevada', abbr: 'NV', slug: 'nevada' },
  { name: 'New Hampshire', abbr: 'NH', slug: 'new-hampshire' },
  { name: 'New Jersey', abbr: 'NJ', slug: 'new-jersey' },
  { name: 'New Mexico', abbr: 'NM', slug: 'new-mexico' },
  { name: 'New York', abbr: 'NY', slug: 'new-york' },
  { name: 'North Carolina', abbr: 'NC', slug: 'north-carolina' },
  { name: 'North Dakota', abbr: 'ND', slug: 'north-dakota' },
  { name: 'Ohio', abbr: 'OH', slug: 'ohio' },
  { name: 'Oklahoma', abbr: 'OK', slug: 'oklahoma' },
  { name: 'Oregon', abbr: 'OR', slug: 'oregon' },
  { name: 'Pennsylvania', abbr: 'PA', slug: 'pennsylvania' },
  { name: 'Rhode Island', abbr: 'RI', slug: 'rhode-island' },
  { name: 'South Carolina', abbr: 'SC', slug: 'south-carolina' },
  { name: 'South Dakota', abbr: 'SD', slug: 'south-dakota' },
  { name: 'Tennessee', abbr: 'TN', slug: 'tennessee' },
  { name: 'Texas', abbr: 'TX', slug: 'texas' },
  { name: 'Utah', abbr: 'UT', slug: 'utah' },
  { name: 'Vermont', abbr: 'VT', slug: 'vermont' },
  { name: 'Virginia', abbr: 'VA', slug: 'virginia' },
  { name: 'Washington', abbr: 'WA', slug: 'washington' },
  { name: 'West Virginia', abbr: 'WV', slug: 'west-virginia' },
  { name: 'Wisconsin', abbr: 'WI', slug: 'wisconsin' },
  { name: 'Wyoming', abbr: 'WY', slug: 'wyoming' },
];

// Featured specialties to highlight initially
const featuredSpecialties = [
  'Cancer',
  'Cardiology & Heart Surgery',
  'Orthopedics',
  'Neurology & Neurosurgery',
  'Rehabilitation',
  'Ophthalmology',
];

export default function TraditionalHealthcareLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllHospitals, setShowAllHospitals] = useState(false);
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [expandedSpecialty, setExpandedSpecialty] = useState<string | null>(null);

  const honorRollHospitals = getHonorRollHospitals();
  const specialtyLeaders = getSpecialtyLeaders();
  const displayedHospitals = showAllHospitals
    ? honorRollHospitals
    : honorRollHospitals.slice(0, 6);

  const displayedSpecialties = showAllSpecialties
    ? specialtyLeaders
    : specialtyLeaders.filter((s) => featuredSpecialties.includes(s.specialty));

  const filteredStates = states.filter(
    (state) =>
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.abbr.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSpecialty = (slug: string) => {
    setExpandedSpecialty(expandedSpecialty === slug ? null : slug);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Traditional Healthcare in the US
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover America&apos;s top-ranked hospitals and health systems
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              15+ Honor Roll Hospitals
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              50 States
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              200+ Healthcare Regions
            </span>
          </div>
        </div>
      </section>

      {/* National Champions - Honor Roll */}
      <section className="bg-white px-4 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              America&apos;s Best Hospitals
            </h2>
            <p className="text-gray-600">
              US News & World Report 2024-2025 Honor Roll
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedHospitals.map((hospital, index) => (
              <HospitalCard
                key={hospital.slug}
                hospital={hospital}
                rank={index + 1}
              />
            ))}
          </div>

          {honorRollHospitals.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllHospitals(!showAllHospitals)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {showAllHospitals
                  ? 'Show Less'
                  : `View All ${honorRollHospitals.length} Honor Roll Hospitals`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Specialty Leaders */}
      <section className="bg-gray-50 px-4 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              #1 Ranked by Specialty
            </h2>
            <p className="text-gray-600">
              Click any specialty to see the top hospitals
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {displayedSpecialties.map((specialty) => (
              <SpecialtyLeaderCard
                key={specialty.slug}
                specialty={specialty}
                isExpanded={expandedSpecialty === specialty.slug}
                onToggle={() => toggleSpecialty(specialty.slug)}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => {
                setShowAllSpecialties(!showAllSpecialties);
                setExpandedSpecialty(null);
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {showAllSpecialties
                ? 'Show Featured Specialties'
                : `View All ${specialtyLeaders.length} Specialty Rankings`}
            </button>
          </div>
        </div>
      </section>

      {/* Search & State List */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Browse by State
            </h2>
            <p className="text-gray-600">
              Find top hospitals and health systems in your area
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for your state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* State Grid */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredStates.map((state) => (
              <Link
                key={state.abbr}
                href={`/traditional-healthcare/${state.slug}`}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <span className="font-medium text-gray-900">{state.name}</span>
                <span className="text-sm text-gray-500">{state.abbr}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 px-4 py-16 border-t border-blue-100">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Cash-Pay Alternatives?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore telehealth, local clinics, and medical tourism with
            transparent pricing.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
          >
            Browse Cash-Pay Services &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function HospitalCard({
  hospital,
  rank,
}: {
  hospital: NationalHealthSystem;
  rank: number;
}) {
  const topSpecialties = hospital.specialties
    .filter((s) => s.isTopTen)
    .slice(0, 3);

  return (
    <Link
      href={`/health-systems/${hospital.slug}`}
      className="block rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-blue-400 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {rank <= 3 && (
            <span className="text-2xl">
              {rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉'}
            </span>
          )}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
            #{rank}
          </span>
        </div>
        {hospital.ranking.worldRank && hospital.ranking.worldRank <= 5 && (
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
            #{hospital.ranking.worldRank} World
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{hospital.name}</h3>
      <p className="text-sm text-gray-500 mb-3">
        {hospital.location.city}, {hospital.location.state}
      </p>

      {topSpecialties.length > 0 && (
        <div className="space-y-1">
          {topSpecialties.map((specialty) => (
            <div
              key={specialty.specialty}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-600 truncate">
                {specialty.specialty}
              </span>
              <span
                className={`font-medium ${
                  specialty.rank === 1
                    ? 'text-yellow-600'
                    : specialty.rank <= 3
                    ? 'text-blue-600'
                    : 'text-green-600'
                }`}
              >
                #{specialty.rank}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-100 text-sm text-blue-600">
        View Details &rarr;
      </div>
    </Link>
  );
}

function SpecialtyLeaderCard({
  specialty,
  isExpanded,
  onToggle,
}: {
  specialty: SpecialtyLeader;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-lg border-2 transition-all ${
        isExpanded
          ? 'border-yellow-400 bg-yellow-50 shadow-lg col-span-full'
          : 'border-yellow-200 bg-yellow-50 hover:border-yellow-400 hover:shadow-lg'
      }`}
    >
      {/* Header - Always visible, clickable to toggle */}
      <button
        onClick={onToggle}
        className="w-full text-left p-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <span className="text-sm font-bold text-yellow-800">
              #1 {specialty.specialty}
            </span>
          </div>
          <span className="text-yellow-600 text-lg">
            {isExpanded ? '−' : '+'}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">
          {specialty.leader.name}
        </h3>
        <p className="text-sm text-gray-600">{specialty.leader.location}</p>

        {specialty.leader.consecutiveYears && (
          <p className="text-xs text-gray-500 mt-1">
            {specialty.leader.consecutiveYears} consecutive years
          </p>
        )}

        {!isExpanded && (
          <div className="mt-3 pt-2 border-t border-yellow-200 text-sm text-yellow-700">
            Click to see top hospitals &rarr;
          </div>
        )}
      </button>

      {/* Expanded content - Top hospitals list */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-yellow-200">
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">
              Top Hospitals for {specialty.specialty}
            </h4>

            {/* Top 3 list */}
            {specialty.topThree && specialty.topThree.length > 0 && (
              <div className="space-y-3">
                {specialty.topThree.map((hospital, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 border border-yellow-200"
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? 'bg-yellow-400 text-yellow-900'
                          : index === 1
                          ? 'bg-gray-300 text-gray-700'
                          : 'bg-orange-300 text-orange-900'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {hospital.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {hospital.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-gray-600 mt-4">
              {specialty.description}
            </p>

            {/* Achievement highlight */}
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Why {specialty.leader.name}?</strong>{' '}
                {specialty.leader.achievement}
              </p>
            </div>

            {/* Link to leader detail page */}
            <Link
              href={`/health-systems/${specialty.leader.slug}`}
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Learn more about {specialty.leader.name} &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
