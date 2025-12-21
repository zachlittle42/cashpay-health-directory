import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'US Healthcare by Region: Top Hospitals & Health Systems by State',
  description: 'Comprehensive guide to the best hospitals and health systems across major US states. Regional breakdowns for California, Texas, Florida, New York, Arizona, and Colorado with top-ranked facilities.',
};

interface Region {
  name: string;
  cities: string;
  population: string;
  notes?: string;
}

interface HealthSystem {
  name: string;
  rank?: string;
}

interface StateData {
  name: string;
  population: string;
  regions: Region[];
  healthSystems: { [region: string]: HealthSystem[] };
  sources: string[];
}

const statesData: StateData[] = [
  // CALIFORNIA
  {
    name: 'California',
    population: '39M',
    regions: [
      { name: 'Far North / Superior California', cities: 'Redding, Chico, Eureka', population: '~600K', notes: 'Rural, limited access' },
      { name: 'Sacramento Valley', cities: 'Sacramento, Stockton, Modesto', population: '~3.5M', notes: 'State capital' },
      { name: 'Bay Area - San Francisco', cities: 'San Francisco, Oakland, Berkeley', population: '~4.7M' },
      { name: 'Bay Area - South Bay/Peninsula', cities: 'San Jose, Palo Alto, Mountain View', population: '~3M', notes: 'Silicon Valley' },
      { name: 'Central Coast', cities: 'Santa Barbara, San Luis Obispo, Monterey', population: '~1.5M' },
      { name: 'Central Valley / San Joaquin', cities: 'Fresno, Bakersfield, Visalia', population: '~4M', notes: 'Agricultural' },
      { name: 'Inland Empire', cities: 'Riverside, San Bernardino, Ontario', population: '~4.6M' },
      { name: 'Los Angeles Metro', cities: 'Los Angeles, Pasadena, Long Beach', population: '~10M' },
      { name: 'Orange County', cities: 'Irvine, Anaheim, Newport Beach', population: '~3.2M' },
      { name: 'San Diego', cities: 'San Diego, Chula Vista', population: '~3.3M', notes: 'Border region' },
    ],
    healthSystems: {
      'Far North / Superior California': [
        { name: 'Mercy Medical Center (Redding)', rank: '#1 in region' },
        { name: 'Shasta Regional Medical Center' },
        { name: 'Enloe Medical Center (Chico)' },
        { name: 'Providence St. Joseph (Eureka)' },
      ],
      'Sacramento Valley': [
        { name: 'UC Davis Medical Center', rank: 'Top academic center' },
        { name: 'Sutter Medical Center Sacramento' },
        { name: 'Kaiser Sacramento' },
        { name: 'Dignity Health Mercy General' },
      ],
      'Bay Area - San Francisco': [
        { name: 'UCSF Health', rank: '#10 nationally' },
        { name: 'Sutter CPMC' },
        { name: 'Kaiser San Francisco' },
        { name: 'Zuckerberg SF General' },
      ],
      'Bay Area - South Bay/Peninsula': [
        { name: 'Stanford Health Care', rank: '#12 nationally' },
        { name: 'El Camino Health' },
        { name: 'Kaiser Santa Clara' },
        { name: 'Good Samaritan' },
      ],
      'Central Coast': [
        { name: 'Santa Barbara Cottage Hospital' },
        { name: 'Community Hospital of Monterey Peninsula' },
        { name: 'Sierra Vista Regional (SLO)' },
        { name: 'Marian Regional (Santa Maria)' },
      ],
      'Central Valley / San Joaquin': [
        { name: 'St. Agnes Medical Center (Fresno)' },
        { name: 'Community Medical Center (Fresno)' },
        { name: 'Adventist Health Bakersfield' },
        { name: 'Kaweah Health (Visalia)' },
      ],
      'Inland Empire': [
        { name: 'Loma Linda University Medical Center', rank: 'Top academic center' },
        { name: 'Riverside Community Hospital' },
        { name: 'Kaiser Riverside' },
        { name: 'Arrowhead Regional' },
      ],
      'Los Angeles Metro': [
        { name: 'Cedars-Sinai', rank: '#7 nationally' },
        { name: 'UCLA Medical Center', rank: '#4 nationally' },
        { name: 'Keck Medical Center of USC' },
        { name: "Providence Saint John's" },
      ],
      'Orange County': [
        { name: 'Hoag Hospital' },
        { name: 'UCI Medical Center' },
        { name: 'MemorialCare Orange Coast' },
        { name: 'Providence Mission' },
      ],
      'San Diego': [
        { name: 'UC San Diego Health', rank: '#15 nationally' },
        { name: 'Scripps La Jolla' },
        { name: 'Sharp Memorial' },
        { name: 'Kaiser San Diego' },
      ],
    },
    sources: ['US News California', 'Newsweek CA 2025', 'US News Central Coast', 'US News Riverside'],
  },

  // TEXAS
  {
    name: 'Texas',
    population: '30M',
    regions: [
      { name: 'Houston Metro', cities: 'Houston, The Woodlands, Sugar Land', population: '~7M' },
      { name: 'Dallas-Fort Worth', cities: 'Dallas, Fort Worth, Plano, Arlington', population: '~7.5M' },
      { name: 'San Antonio', cities: 'San Antonio', population: '~2.5M' },
      { name: 'Austin', cities: 'Austin, Round Rock', population: '~2.3M' },
      { name: 'Rio Grande Valley', cities: 'McAllen, Brownsville, Harlingen', population: '~1.4M', notes: 'Border region' },
      { name: 'Coastal Bend', cities: 'Corpus Christi, Victoria', population: '~500K' },
      { name: 'East Texas', cities: 'Tyler, Longview, Texarkana', population: '~1.2M' },
      { name: 'Panhandle', cities: 'Amarillo, Lubbock', population: '~600K' },
      { name: 'West Texas', cities: 'El Paso, Midland, Odessa', population: '~1M' },
    ],
    healthSystems: {
      'Houston Metro': [
        { name: 'Houston Methodist', rank: '#1 TX, Honor Roll' },
        { name: 'MD Anderson Cancer Center', rank: '#1 Cancer nationally' },
        { name: "Baylor St. Luke's" },
        { name: 'Memorial Hermann' },
        { name: "Texas Children's", rank: '#3 Pediatrics' },
      ],
      'Dallas-Fort Worth': [
        { name: 'UT Southwestern', rank: '#2 TX, 12 specialties' },
        { name: 'Baylor University Medical Center' },
        { name: 'Baylor Scott & White All Saints (Fort Worth)' },
        { name: 'Texas Health Presbyterian' },
        { name: 'Medical City Dallas' },
      ],
      'San Antonio': [
        { name: 'Methodist Hospital', rank: '#9 TX' },
        { name: 'Baptist Medical Center' },
        { name: 'Methodist Hospital-Stone Oak' },
        { name: 'University Hospital' },
      ],
      'Austin': [
        { name: "St. David's Medical Center" },
        { name: 'Ascension Seton Medical Center' },
        { name: "St. David's South Austin" },
        { name: 'Dell Seton Medical Center' },
      ],
      'Rio Grande Valley': [
        { name: 'South Texas Health System-Edinburg' },
        { name: 'Valley Baptist Medical Center' },
        { name: 'Doctors Hospital at Renaissance' },
      ],
      'Coastal Bend': [
        { name: 'Corpus Christi Medical Center' },
        { name: 'CHRISTUS Spohn' },
        { name: 'DeTar Healthcare System (Victoria)' },
      ],
      'East Texas': [
        { name: 'UT Health East Texas (Tyler)' },
        { name: 'CHRISTUS Good Shepherd (Longview)' },
        { name: 'CHRISTUS St. Michael (Texarkana)' },
      ],
      'Panhandle': [
        { name: 'BSA Health System (Amarillo)' },
        { name: 'Physicians Surgical Hospital (Amarillo)' },
        { name: 'Covenant Health (Lubbock)' },
        { name: 'UMC Health System (Lubbock)' },
      ],
      'West Texas': [
        { name: 'The Hospitals of Providence (El Paso)' },
        { name: 'University Medical Center of El Paso' },
        { name: 'Medical Center Hospital (Odessa)' },
      ],
    },
    sources: ['US News Texas', 'Newsweek TX 2024', 'KETK East Texas'],
  },

  // FLORIDA
  {
    name: 'Florida',
    population: '22M',
    regions: [
      { name: 'Panhandle', cities: 'Pensacola, Tallahassee, Panama City', population: '~1.5M' },
      { name: 'North Florida', cities: 'Jacksonville, Gainesville', population: '~2M' },
      { name: 'Central Florida', cities: 'Orlando, Daytona Beach', population: '~3.5M' },
      { name: 'Tampa Bay', cities: 'Tampa, St. Petersburg, Clearwater', population: '~3.2M' },
      { name: 'Southwest Florida', cities: 'Sarasota, Fort Myers, Naples', population: '~1.8M' },
      { name: 'Treasure Coast', cities: 'Vero Beach, Port St. Lucie', population: '~700K' },
      { name: 'South Florida', cities: 'West Palm Beach, Fort Lauderdale, Miami', population: '~6.1M' },
      { name: 'Florida Keys', cities: 'Key West', population: '~80K', notes: 'Limited services' },
    ],
    healthSystems: {
      'Panhandle': [
        { name: 'Tallahassee Memorial HealthCare', rank: '#13 FL' },
        { name: 'Ascension Sacred Heart Pensacola', rank: 'Newsweek Best-in-State' },
        { name: 'Baptist Hospital Pensacola', rank: 'Top 25 FL' },
        { name: 'Sacred Heart Emerald Coast', rank: '5-star CMS' },
      ],
      'North Florida': [
        { name: 'Mayo Clinic-Florida', rank: '#2 FL, Honor Roll' },
        { name: 'UF Health Shands', rank: '#3 FL' },
        { name: 'Baptist Medical Center Jacksonville' },
        { name: "Ascension St. Vincent's" },
      ],
      'Central Florida': [
        { name: 'AdventHealth Orlando', rank: '#1 FL, Honor Roll' },
        { name: 'Orlando Health-Orlando Regional' },
        { name: 'Halifax Health (Daytona)' },
        { name: 'AdventHealth Celebration' },
      ],
      'Tampa Bay': [
        { name: 'Tampa General Hospital', rank: '#4 FL' },
        { name: 'Morton Plant Hospital (Clearwater)' },
        { name: 'AdventHealth Tampa' },
        { name: "St. Joseph's Hospital-Tampa" },
        { name: 'Moffitt Cancer Center', rank: 'Specialty cancer' },
      ],
      'Southwest Florida': [
        { name: 'Sarasota Memorial Hospital', rank: '#8 FL' },
        { name: 'NCH Healthcare System (Naples)' },
        { name: 'Lee Health (Fort Myers)' },
        { name: 'Physicians Regional' },
      ],
      'Treasure Coast': [
        { name: 'Cleveland Clinic Indian River' },
        { name: 'Lawnwood Regional (HCA)' },
        { name: 'St. Lucie Medical Center' },
      ],
      'South Florida': [
        { name: 'Cleveland Clinic Florida-Weston', rank: '#6 FL' },
        { name: 'Baptist Health Baptist Hospital', rank: '#7 FL' },
        { name: 'Mount Sinai Medical Center', rank: '#10 FL' },
        { name: 'Bascom Palmer Eye Institute', rank: '#1 Ophthalmology nationally' },
        { name: 'Jackson Memorial' },
      ],
      'Florida Keys': [
        { name: 'Lower Keys Medical Center' },
      ],
    },
    sources: ['US News Florida', 'US News FL Panhandle', 'Ascension Sacred Heart', 'TMH'],
  },

  // NEW YORK
  {
    name: 'New York',
    population: '19M',
    regions: [
      { name: 'New York City', cities: 'Manhattan, Brooklyn, Queens, Bronx, Staten Island', population: '~8.3M' },
      { name: 'Long Island', cities: 'Nassau, Suffolk', population: '~2.8M' },
      { name: 'Hudson Valley', cities: 'Westchester, Poughkeepsie, Newburgh', population: '~2.3M' },
      { name: 'Capital Region', cities: 'Albany, Schenectady, Troy', population: '~1.2M' },
      { name: 'North Country / Adirondacks', cities: 'Plattsburgh, Watertown, Saranac Lake', population: '~400K' },
      { name: 'Central New York', cities: 'Syracuse, Utica', population: '~800K' },
      { name: 'Southern Tier', cities: 'Binghamton, Elmira, Ithaca', population: '~600K' },
      { name: 'Finger Lakes', cities: 'Rochester', population: '~1.1M' },
      { name: 'Western New York', cities: 'Buffalo, Niagara Falls', population: '~1.1M' },
    ],
    healthSystems: {
      'New York City': [
        { name: 'NYU Langone', rank: '#1 tie, #1 nationally in 5 specialties' },
        { name: 'NewYork-Presbyterian/Columbia & Cornell', rank: 'Honor Roll' },
        { name: 'Mount Sinai Hospital', rank: 'Honor Roll' },
        { name: 'Memorial Sloan Kettering', rank: '#1 Urology' },
        { name: 'Hospital for Special Surgery', rank: '#1 Orthopedics' },
      ],
      'Long Island': [
        { name: 'North Shore University Hospital (Northwell)' },
        { name: 'Long Island Jewish Medical Center' },
        { name: 'Lenox Hill Hospital' },
        { name: 'Huntington Hospital' },
        { name: 'South Shore University Hospital' },
      ],
      'Hudson Valley': [
        { name: 'Vassar Brothers Medical Center' },
        { name: 'Westchester Medical Center' },
        { name: 'Northern Westchester Hospital (Northwell)' },
        { name: 'Montefiore Nyack' },
      ],
      'Capital Region': [
        { name: 'Saratoga Hospital', rank: '#6 Newsweek NY' },
        { name: "St. Peter's Hospital", rank: '#16 Newsweek' },
        { name: 'Albany Medical Center' },
        { name: 'Ellis Hospital (Schenectady)' },
      ],
      'North Country / Adirondacks': [
        { name: 'CVPH Medical Center (Plattsburgh)', rank: 'Top 100 cardiac nationally' },
        { name: 'Samaritan Medical Center (Watertown)' },
        { name: 'Adirondack Medical Center (Saranac Lake)' },
        { name: 'Canton-Potsdam Hospital' },
      ],
      'Central New York': [
        { name: 'Upstate University Hospital (Syracuse)' },
        { name: 'Crouse Hospital' },
        { name: "St. Joseph's Health" },
        { name: 'Mohawk Valley Health System (Utica)' },
      ],
      'Southern Tier': [
        { name: 'United Health Services (Binghamton)' },
        { name: "Arnot Health / St. Joseph's (Elmira)" },
        { name: 'Cayuga Medical Center (Ithaca)' },
        { name: 'Lourdes Hospital' },
      ],
      'Finger Lakes': [
        { name: 'Strong Memorial Hospital (U of Rochester)' },
        { name: 'Rochester General Hospital' },
        { name: 'Highland Hospital' },
        { name: 'Unity Hospital' },
      ],
      'Western New York': [
        { name: 'Kaleida Health-Buffalo General' },
        { name: 'Roswell Park Cancer Center', rank: 'NCI-designated' },
        { name: 'ECMC Health Campus' },
        { name: 'Mercy Hospital of Buffalo' },
      ],
    },
    sources: ['US News New York', 'US News Northern NY', 'NY Health Foundation Regions', 'Northwell Health'],
  },

  // ARIZONA
  {
    name: 'Arizona',
    population: '7M',
    regions: [
      { name: 'Phoenix Metro', cities: 'Phoenix, Scottsdale, Mesa, Chandler', population: '~4.9M' },
      { name: 'Tucson / Southern Arizona', cities: 'Tucson, Sierra Vista', population: '~1M' },
      { name: 'Northern Arizona', cities: 'Flagstaff, Prescott, Sedona', population: '~350K' },
    ],
    healthSystems: {
      'Phoenix Metro': [
        { name: 'Mayo Clinic-Phoenix', rank: '#1 AZ, Honor Roll' },
        { name: 'Banner-University Medical Center Phoenix' },
        { name: "St. Joseph's Hospital (Dignity)" },
        { name: 'Banner Boswell' },
        { name: 'HonorHealth Scottsdale Shea' },
        { name: 'Chandler Regional' },
      ],
      'Tucson / Southern Arizona': [
        { name: 'Banner-University Medical Center Tucson', rank: '#3 AZ' },
        { name: 'TMC Healthcare-Tucson' },
        { name: 'Northwest Medical Center' },
      ],
      'Northern Arizona': [
        { name: 'Flagstaff Medical Center (NAH)' },
        { name: 'Yavapai Regional (Prescott)' },
        { name: 'Verde Valley Medical Center (Sedona)' },
      ],
    },
    sources: ['US News Arizona', 'Banner Health'],
  },

  // COLORADO
  {
    name: 'Colorado',
    population: '5.8M',
    regions: [
      { name: 'Denver Metro', cities: 'Denver, Aurora, Lakewood, Englewood', population: '~2.9M', notes: '84% of CO pop on Front Range' },
      { name: 'Northern Front Range', cities: 'Fort Collins, Greeley, Loveland', population: '~700K' },
      { name: 'Colorado Springs', cities: 'Colorado Springs, Pueblo', population: '~800K' },
      { name: 'Western Slope', cities: 'Grand Junction, Durango, Montrose', population: '~350K', notes: 'Rural, limited access' },
      { name: 'Mountain Corridor', cities: 'Vail, Aspen, Summit County', population: '~100K', notes: 'Ski resort areas' },
      { name: 'Eastern Plains', cities: 'Sterling, Burlington', population: '~100K', notes: 'Very rural' },
      { name: 'San Luis Valley', cities: 'Alamosa', population: '~50K', notes: 'Remote' },
    ],
    healthSystems: {
      'Denver Metro': [
        { name: 'UCHealth University of Colorado Hospital', rank: '#1 CO, 13 years running' },
        { name: 'Intermountain Health Saint Joseph Hospital', rank: '#2 CO / #1 Newsweek' },
        { name: 'Denver Health Medical Center' },
        { name: 'Swedish Medical Center (Englewood)' },
        { name: 'Sky Ridge Medical Center (Lone Tree)' },
        { name: "Presbyterian/St. Luke's" },
      ],
      'Northern Front Range': [
        { name: 'UCHealth Poudre Valley Hospital (Fort Collins)' },
        { name: 'UCHealth Medical Center of the Rockies (Loveland)' },
        { name: 'Banner Health North Colorado (Greeley)' },
        { name: 'Good Samaritan Medical Center (Lafayette/Boulder)' },
      ],
      'Colorado Springs': [
        { name: 'UCHealth Memorial Hospital', rank: '#3 CO tie' },
        { name: 'Penrose-St. Francis Health Services', rank: '#5 CO' },
        { name: 'CommonSpirit Penrose Hospital' },
        { name: 'Parkview Medical Center (Pueblo)' },
      ],
      'Western Slope': [
        { name: "St. Mary's Medical Center (Grand Junction)" },
        { name: 'Community Hospital (Grand Junction)' },
        { name: 'Montrose Memorial Hospital' },
        { name: 'Mercy Regional Medical Center (Durango)' },
      ],
      'Mountain Corridor': [
        { name: 'Vail Health' },
        { name: 'St. Anthony Summit Medical Center (Frisco)' },
        { name: 'Aspen Valley Hospital' },
      ],
      'Eastern Plains': [
        { name: 'Sterling Regional MedCenter' },
        { name: 'Kit Carson County Health Service District' },
      ],
      'San Luis Valley': [
        { name: 'San Luis Valley Health' },
      ],
    },
    sources: ['US News Colorado', 'Newsweek CO 2025', 'UCHealth System'],
  },
];

function StateSection({ state }: { state: StateData }) {
  return (
    <section className="mb-16" id={state.name.toLowerCase().replace(/\s+/g, '-')}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {state.name}
        </h2>
        <p className="text-gray-600 mt-1">Population: {state.population}</p>
      </div>

      {/* Regional Overview Table */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Overview</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Region</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Major Cities</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Pop. Est.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Notes</th>
              </tr>
            </thead>
            <tbody>
              {state.regions.map((region, idx) => (
                <tr key={region.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 border-b">{region.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b">{region.cities}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b">{region.population}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 border-b">{region.notes || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Health Systems by Region */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Health Systems by Region</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(state.healthSystems).map(([regionName, systems]) => (
            <div key={regionName} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">{regionName}</h4>
              <ol className="space-y-2">
                {systems.map((system, idx) => (
                  <li key={system.name} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-600 font-medium min-w-[20px]">{idx + 1}.</span>
                    <div>
                      <span className="text-gray-900">{system.name}</span>
                      {system.rank && (
                        <span className="ml-2 text-xs text-green-600 font-medium">({system.rank})</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="mt-6 text-xs text-gray-500">
        <span className="font-medium">Sources:</span> {state.sources.join(', ')}
      </div>
    </section>
  );
}

export default function USHealthcareByRegionGuide() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
            ← Back to Guides
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            US Healthcare by Region
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive guide to top hospitals and health systems across major US states,
            broken down by geographic region.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">6 States Covered</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">50+ Regions</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">200+ Health Systems</span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b border-gray-200 px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Jump to State</h2>
          <div className="flex flex-wrap gap-2">
            {statesData.map((state) => (
              <a
                key={state.name}
                href={`#${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {state.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            Understanding where top healthcare is located across the US can help you make informed
            decisions about care—whether you&apos;re considering relocation, planning travel for a
            specialist, or just want to know what&apos;s available in your region.
          </p>
          <p>
            This guide covers <strong>Tier 1 states</strong> (the largest by population and healthcare
            infrastructure): California, Texas, Florida, New York, Arizona, and Colorado. Each state
            is broken down by geographic region with population estimates and the top-ranked health
            systems serving each area.
          </p>
          <p>
            <strong>Rankings and data</strong> are sourced from US News &amp; World Report, Newsweek,
            and regional health publications. Rankings change annually, so verify current standings
            for specific care decisions.
          </p>
        </div>

        {/* State Sections */}
        {statesData.map((state) => (
          <StateSection key={state.name} state={state} />
        ))}

        {/* Key Takeaways */}
        <section className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">National Leaders</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>UCLA, Cedars-Sinai, UCSF</strong> - California powerhouses</li>
                <li>• <strong>Houston Methodist, MD Anderson</strong> - Texas national leaders</li>
                <li>• <strong>Mayo Clinic Jacksonville</strong> - Florida&apos;s Honor Roll hospital</li>
                <li>• <strong>NYU Langone, NY-Presbyterian</strong> - NYC dominates nationally</li>
                <li>• <strong>Mayo Clinic Phoenix</strong> - Arizona&apos;s only Honor Roll</li>
                <li>• <strong>UCHealth</strong> - Colorado&apos;s #1 for 13 consecutive years</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Rural Access Challenges</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Far North California</strong> - Limited tertiary care</li>
                <li>• <strong>Texas Panhandle/West Texas</strong> - Long distances to major centers</li>
                <li>• <strong>Florida Keys</strong> - Very limited services</li>
                <li>• <strong>NY North Country</strong> - Remote but has CVPH cardiac center</li>
                <li>• <strong>Colorado Western Slope</strong> - Rural access challenges</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Need Care Outside Your Region?</h2>
          <p className="text-gray-600 mb-6">
            For specialized procedures, medical tourism may offer significant savings with
            world-class care at top international facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Explore Our Guides
            </Link>
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50"
            >
              Browse Providers
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
