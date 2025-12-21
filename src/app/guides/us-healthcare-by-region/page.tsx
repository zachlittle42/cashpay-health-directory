'use client';

import Link from 'next/link';
import { useState } from 'react';
import USAMap from '@/components/USAMap';

interface Region {
  name: string;
  cities: string;
  population?: string;
}

interface StateData {
  name: string;
  abbreviation: string;
  population: string;
  regions: Region[];
}

const statesData: StateData[] = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    population: '5.1M',
    regions: [
      { name: 'North Alabama', cities: 'Huntsville, Decatur, Florence' },
      { name: 'Central Alabama', cities: 'Birmingham, Montgomery, Tuscaloosa' },
      { name: 'South Alabama', cities: 'Mobile, Dothan' },
      { name: 'Gulf Coast', cities: 'Gulf Shores, Orange Beach' },
    ],
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    population: '733K',
    regions: [
      { name: 'Inside Passage/Southeast', cities: 'Juneau, Ketchikan, Sitka' },
      { name: 'Southcentral', cities: 'Anchorage' },
      { name: 'Interior', cities: 'Fairbanks, Denali' },
      { name: 'Arctic/Far North', cities: 'Utqiagvik, Nome' },
      { name: 'Southwest', cities: 'Aleutian Islands, Katmai' },
    ],
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    population: '7.4M',
    regions: [
      { name: 'Phoenix Metro/Valley of the Sun', cities: 'Phoenix, Scottsdale, Mesa, Tempe' },
      { name: 'Northern Arizona', cities: 'Flagstaff, Sedona, Grand Canyon' },
      { name: 'Southern Arizona', cities: 'Tucson, Green Valley' },
      { name: 'Central Arizona', cities: 'Prescott, Payson' },
    ],
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    population: '3.1M',
    regions: [
      { name: 'Northwest Arkansas', cities: 'Fayetteville, Springdale, Rogers, Bentonville' },
      { name: 'North Central Arkansas', cities: 'Mountain Home, Harrison' },
      { name: 'Northeast Arkansas', cities: 'Jonesboro' },
      { name: 'Central Arkansas', cities: 'Little Rock, Conway' },
      { name: 'Southwest Arkansas', cities: 'Hot Springs, Texarkana' },
      { name: 'Southeast Arkansas', cities: 'Pine Bluff' },
    ],
  },
  {
    name: 'California',
    abbreviation: 'CA',
    population: '39M',
    regions: [
      { name: 'San Francisco Bay Area', cities: 'San Francisco, San Jose, Oakland' },
      { name: 'Los Angeles Metro', cities: 'Los Angeles, Long Beach, Pasadena' },
      { name: 'San Diego County', cities: 'San Diego, Chula Vista' },
      { name: 'Orange County', cities: 'Anaheim, Irvine, Santa Ana' },
      { name: 'Inland Empire', cities: 'Riverside, San Bernardino, Ontario' },
      { name: 'Central Valley', cities: 'Sacramento, Fresno, Bakersfield, Modesto' },
      { name: 'Central Coast', cities: 'San Luis Obispo, Santa Barbara, Monterey' },
      { name: 'North Coast', cities: 'Eureka, Mendocino' },
      { name: 'High Sierra', cities: 'Lake Tahoe, Mammoth Lakes' },
      { name: 'Shasta Cascade', cities: 'Redding, Mount Shasta' },
    ],
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    population: '5.8M',
    regions: [
      { name: 'Front Range/Denver Metro', cities: 'Denver, Colorado Springs, Aurora, Boulder' },
      { name: 'Northern Colorado', cities: 'Fort Collins, Greeley, Loveland' },
      { name: 'Western Slope', cities: 'Grand Junction, Montrose' },
      { name: 'Mountain Resorts', cities: 'Aspen, Vail, Breckenridge' },
      { name: 'San Luis Valley', cities: 'Alamosa' },
      { name: 'Southeast Colorado', cities: 'Pueblo' },
    ],
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    population: '3.6M',
    regions: [
      { name: 'Greater Hartford', cities: 'Hartford, West Hartford' },
      { name: 'Greater New Haven', cities: 'New Haven, Hamden' },
      { name: 'Fairfield County/Gold Coast', cities: 'Stamford, Bridgeport, Norwalk' },
      { name: 'Litchfield Hills', cities: 'Litchfield, Kent' },
      { name: 'Mystic Country/Southeast', cities: 'Mystic, New London' },
      { name: 'Central Connecticut', cities: 'Waterbury, New Britain' },
    ],
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    population: '1M',
    regions: [
      { name: 'Northern Delaware', cities: 'Wilmington, Newark' },
      { name: 'Central Delaware', cities: 'Dover, Middletown' },
      { name: 'Southern Delaware/Beaches', cities: 'Rehoboth Beach, Lewes' },
    ],
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    population: '22.6M',
    regions: [
      { name: 'South Florida/Miami Metro', cities: 'Miami, Fort Lauderdale, West Palm Beach' },
      { name: 'Central Florida/Orlando', cities: 'Orlando, Kissimmee, Lakeland' },
      { name: 'Tampa Bay Area', cities: 'Tampa, St. Petersburg, Clearwater' },
      { name: 'Northeast Florida', cities: 'Jacksonville' },
      { name: 'Northwest Florida/Panhandle', cities: 'Tallahassee, Pensacola, Panama City' },
      { name: 'Southwest Florida', cities: 'Naples, Fort Myers, Sarasota' },
      { name: 'Florida Keys', cities: 'Key West, Key Largo' },
      { name: 'Treasure Coast', cities: 'Port St. Lucie, Vero Beach' },
      { name: 'Space Coast', cities: 'Cape Canaveral, Melbourne' },
    ],
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    population: '11.0M',
    regions: [
      { name: 'Atlanta Metro', cities: 'Atlanta, Sandy Springs, Roswell' },
      { name: 'Coastal Georgia', cities: 'Savannah, Brunswick' },
      { name: 'North Georgia Mountains', cities: 'Dahlonega, Helen, Blue Ridge' },
      { name: 'Central Georgia', cities: 'Macon, Warner Robins' },
      { name: 'South Georgia', cities: 'Albany, Valdosta' },
      { name: 'Augusta Area', cities: 'Augusta' },
      { name: 'Columbus Area', cities: 'Columbus' },
    ],
  },
  // Continue with all states...
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    population: '1.4M',
    regions: [
      { name: 'O\'ahu', cities: 'Honolulu, Pearl City' },
      { name: 'Maui', cities: 'Kahului, Lahaina' },
      { name: 'Big Island', cities: 'Hilo, Kailua-Kona' },
      { name: 'Kaua\'i', cities: 'Lihu\'e, Kapa\'a' },
      { name: 'Moloka\'i', cities: 'Kaunakakai' },
      { name: 'Lana\'i', cities: 'Lana\'i City' },
    ],
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    population: '1.9M',
    regions: [
      { name: 'Southwest Idaho/Treasure Valley', cities: 'Boise, Meridian, Nampa' },
      { name: 'Southeast Idaho', cities: 'Pocatello, Idaho Falls' },
      { name: 'Eastern Idaho', cities: 'Rexburg, Island Park' },
      { name: 'South Central Idaho', cities: 'Twin Falls, Burley' },
      { name: 'North Central Idaho', cities: 'Lewiston, Moscow' },
      { name: 'Northern Idaho/Panhandle', cities: 'Coeur d\'Alene, Sandpoint' },
    ],
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    population: '12.6M',
    regions: [
      { name: 'Chicagoland/Northeast', cities: 'Chicago, Aurora, Naperville, Rockford' },
      { name: 'Central Illinois', cities: 'Springfield, Peoria, Bloomington-Normal' },
      { name: 'Southern Illinois', cities: 'Carbondale, Marion' },
      { name: 'Western Illinois', cities: 'Galena, Quincy, Rock Island' },
    ],
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    population: '6.9M',
    regions: [
      { name: 'Central Indiana/Indianapolis', cities: 'Indianapolis, Carmel, Fishers' },
      { name: 'Northwest Indiana', cities: 'Gary, Hammond, Merrillville' },
      { name: 'Northeast Indiana', cities: 'Fort Wayne' },
      { name: 'North Central Indiana', cities: 'South Bend, Elkhart' },
      { name: 'West Central Indiana', cities: 'Lafayette, Terre Haute' },
      { name: 'Southwest Indiana', cities: 'Evansville' },
      { name: 'Southeast Indiana', cities: 'Bloomington' },
    ],
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    population: '3.2M',
    regions: [
      { name: 'Central Iowa', cities: 'Des Moines, Ames' },
      { name: 'Eastern Iowa', cities: 'Cedar Rapids, Iowa City, Davenport' },
      { name: 'Northwest Iowa', cities: 'Sioux City, Spencer' },
      { name: 'Southwest Iowa', cities: 'Council Bluffs' },
      { name: 'Northeast Iowa', cities: 'Dubuque, Waterloo' },
      { name: 'Southeast Iowa', cities: 'Burlington' },
    ],
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    population: '2.9M',
    regions: [
      { name: 'South Central Kansas', cities: 'Wichita' },
      { name: 'Northeast Kansas', cities: 'Kansas City, Topeka, Lawrence' },
      { name: 'Northwest Kansas', cities: 'Hays, Colby' },
      { name: 'Southeast Kansas', cities: 'Pittsburg' },
      { name: 'Southwest Kansas', cities: 'Dodge City, Garden City' },
    ],
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    population: '4.5M',
    regions: [
      { name: 'Louisville Metro', cities: 'Louisville' },
      { name: 'Lexington/Horse Country', cities: 'Lexington, Frankfort' },
      { name: 'Northern Kentucky', cities: 'Covington, Newport' },
      { name: 'Bowling Green/South Central', cities: 'Bowling Green' },
      { name: 'Western Kentucky', cities: 'Paducah, Owensboro' },
      { name: 'Eastern Kentucky', cities: 'Ashland, Pikeville' },
    ],
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    population: '4.6M',
    regions: [
      { name: 'Greater New Orleans', cities: 'New Orleans, Metairie' },
      { name: 'Baton Rouge/Capital', cities: 'Baton Rouge' },
      { name: 'Cajun Country/Acadiana', cities: 'Lafayette, New Iberia' },
      { name: 'Northshore', cities: 'Slidell, Mandeville' },
      { name: 'Northwest Louisiana', cities: 'Shreveport, Bossier City' },
      { name: 'Northeast Louisiana', cities: 'Monroe' },
      { name: 'Southwest Louisiana', cities: 'Lake Charles' },
    ],
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    population: '1.4M',
    regions: [
      { name: 'Greater Portland', cities: 'Portland, South Portland' },
      { name: 'Southern Coast', cities: 'Kittery, Ogunquit' },
      { name: 'Mid-Coast', cities: 'Brunswick, Bath, Camden' },
      { name: 'Downeast & Acadia', cities: 'Bar Harbor, Ellsworth' },
      { name: 'Kennebec Valley', cities: 'Augusta' },
      { name: 'Maine Highlands', cities: 'Bangor' },
      { name: 'Aroostook County', cities: 'Presque Isle' },
    ],
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    population: '6.2M',
    regions: [
      { name: 'Baltimore Metro', cities: 'Baltimore, Columbia' },
      { name: 'Capital Region/DC Suburbs', cities: 'Silver Spring, Rockville' },
      { name: 'Southern Maryland', cities: 'Waldorf, Annapolis' },
      { name: 'Eastern Shore', cities: 'Salisbury, Ocean City' },
      { name: 'Western Maryland', cities: 'Hagerstown, Frederick' },
    ],
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    population: '7.0M',
    regions: [
      { name: 'Greater Boston', cities: 'Boston, Cambridge, Quincy' },
      { name: 'North of Boston', cities: 'Salem, Gloucester, Lowell' },
      { name: 'Metro West', cities: 'Framingham, Marlborough' },
      { name: 'Central Massachusetts', cities: 'Worcester, Springfield' },
      { name: 'Cape & Islands', cities: 'Cape Cod, Martha\'s Vineyard' },
      { name: 'Western Massachusetts', cities: 'Pittsfield, Northampton' },
    ],
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    population: '10.0M',
    regions: [
      { name: 'Southeast Michigan/Detroit', cities: 'Detroit, Warren, Ann Arbor, Lansing' },
      { name: 'West Michigan', cities: 'Grand Rapids, Kalamazoo' },
      { name: 'Northern Lower Peninsula', cities: 'Traverse City, Petoskey' },
      { name: 'Upper Peninsula', cities: 'Marquette, Sault Ste. Marie' },
      { name: 'Thumb Region', cities: 'Bay City, Port Huron' },
    ],
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    population: '5.7M',
    regions: [
      { name: 'Twin Cities Metro', cities: 'Minneapolis, St. Paul, Bloomington' },
      { name: 'Southern Minnesota', cities: 'Rochester, Mankato' },
      { name: 'Northern Minnesota/Arrowhead', cities: 'Duluth' },
      { name: 'Northwest Minnesota', cities: 'Moorhead, Bemidji' },
      { name: 'Central Minnesota', cities: 'St. Cloud' },
    ],
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    population: '2.9M',
    regions: [
      { name: 'Central Mississippi/Jackson', cities: 'Jackson' },
      { name: 'The Delta/Northwest', cities: 'Greenville, Clarksdale' },
      { name: 'Gulf Coast', cities: 'Gulfport, Biloxi' },
      { name: 'North Mississippi', cities: 'Tupelo, Southaven' },
      { name: 'South Mississippi', cities: 'Hattiesburg, Meridian' },
    ],
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    population: '6.2M',
    regions: [
      { name: 'Kansas City Metro', cities: 'Kansas City, Independence' },
      { name: 'St. Louis Metro', cities: 'St. Louis, St. Charles' },
      { name: 'Central Missouri', cities: 'Jefferson City, Columbia' },
      { name: 'Southwest Missouri', cities: 'Springfield, Branson, Joplin' },
      { name: 'Southeast Missouri', cities: 'Cape Girardeau' },
    ],
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    population: '1.1M',
    regions: [
      { name: 'Glacier Country/Western', cities: 'Missoula, Kalispell' },
      { name: 'Yellowstone Country/Southwest', cities: 'Bozeman, Big Sky' },
      { name: 'Central Montana', cities: 'Great Falls, Helena, Butte' },
      { name: 'Southeast Montana', cities: 'Billings' },
      { name: 'Missouri River Country', cities: 'Havre' },
    ],
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    population: '2.0M',
    regions: [
      { name: 'Omaha Metro/Southeast', cities: 'Omaha, Bellevue' },
      { name: 'Lincoln/Capital', cities: 'Lincoln' },
      { name: 'Northeast Nebraska', cities: 'Norfolk' },
      { name: 'Central Nebraska', cities: 'Grand Island, Kearney' },
      { name: 'Panhandle/Northwest', cities: 'Scottsbluff' },
    ],
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    population: '3.2M',
    regions: [
      { name: 'Las Vegas Valley/Southern', cities: 'Las Vegas, Henderson' },
      { name: 'Reno-Tahoe/Northern', cities: 'Reno, Sparks, Carson City' },
      { name: 'Nevada Silver Trails', cities: 'Ely, Tonopah' },
      { name: 'Cowboy Country/Northeast', cities: 'Elko' },
    ],
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    population: '1.4M',
    regions: [
      { name: 'Merrimack Valley/Southern', cities: 'Manchester, Nashua, Concord' },
      { name: 'Seacoast', cities: 'Portsmouth, Dover' },
      { name: 'Lakes Region', cities: 'Laconia, Wolfeboro' },
      { name: 'White Mountains', cities: 'North Conway, Lincoln' },
      { name: 'Monadnock Region', cities: 'Keene' },
    ],
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    population: '9.3M',
    regions: [
      { name: 'North Jersey/Gateway', cities: 'Newark, Jersey City, Paterson' },
      { name: 'Central Jersey', cities: 'Trenton, New Brunswick' },
      { name: 'South Jersey', cities: 'Camden, Cherry Hill' },
      { name: 'Jersey Shore', cities: 'Atlantic City, Asbury Park' },
      { name: 'Northwest NJ/Skylands', cities: 'Morristown' },
    ],
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    population: '2.1M',
    regions: [
      { name: 'Central/Albuquerque Metro', cities: 'Albuquerque, Rio Rancho' },
      { name: 'North Central', cities: 'Santa Fe, Taos' },
      { name: 'Southwest', cities: 'Las Cruces, Silver City' },
      { name: 'Southeast', cities: 'Roswell, Carlsbad' },
      { name: 'Northwest', cities: 'Farmington, Gallup' },
    ],
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    population: '19.5M',
    regions: [
      { name: 'New York City/Metro NYC', cities: 'NYC, Long Island' },
      { name: 'Hudson Valley', cities: 'Poughkeepsie, White Plains, Yonkers' },
      { name: 'Capital District', cities: 'Albany, Schenectady, Saratoga Springs' },
      { name: 'Finger Lakes', cities: 'Rochester, Syracuse, Ithaca' },
      { name: 'Western New York', cities: 'Buffalo, Niagara Falls' },
      { name: 'Central New York', cities: 'Utica, Binghamton' },
      { name: 'North Country/Adirondacks', cities: 'Plattsburgh, Lake Placid' },
    ],
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    population: '10.8M',
    regions: [
      { name: 'Charlotte Metro', cities: 'Charlotte, Gastonia, Concord' },
      { name: 'Triangle', cities: 'Raleigh, Durham, Chapel Hill, Cary' },
      { name: 'Triad', cities: 'Greensboro, Winston-Salem, High Point' },
      { name: 'Mountains/Western NC', cities: 'Asheville, Boone' },
      { name: 'Coastal/Eastern NC', cities: 'Wilmington, Outer Banks' },
      { name: 'Sandhills', cities: 'Fayetteville, Pinehurst' },
    ],
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    population: '779K',
    regions: [
      { name: 'Southeast', cities: 'Fargo' },
      { name: 'South Central', cities: 'Bismarck, Mandan' },
      { name: 'Northeast', cities: 'Grand Forks' },
      { name: 'North Central', cities: 'Minot' },
      { name: 'Northwest', cities: 'Williston' },
    ],
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    population: '11.8M',
    regions: [
      { name: 'Central Ohio/Columbus', cities: 'Columbus' },
      { name: 'Northeast Ohio/Cleveland', cities: 'Cleveland, Akron' },
      { name: 'Southwest Ohio/Cincinnati', cities: 'Cincinnati, Dayton' },
      { name: 'Northwest Ohio/Toledo', cities: 'Toledo' },
      { name: 'Southeast Ohio', cities: 'Athens' },
      { name: 'Youngstown Area', cities: 'Youngstown, Canton' },
    ],
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    population: '4.1M',
    regions: [
      { name: 'Central Oklahoma', cities: 'Oklahoma City, Norman, Edmond' },
      { name: 'Green Country/Northeast', cities: 'Tulsa' },
      { name: 'Northwest Oklahoma', cities: 'Enid' },
      { name: 'Southwest Oklahoma', cities: 'Lawton' },
      { name: 'Southeast Oklahoma', cities: 'Durant' },
    ],
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    population: '4.2M',
    regions: [
      { name: 'Portland Metro/Willamette Valley', cities: 'Portland, Beaverton, Gresham' },
      { name: 'Central Valley', cities: 'Salem, Eugene, Corvallis' },
      { name: 'Oregon Coast', cities: 'Cannon Beach, Newport' },
      { name: 'Central Oregon', cities: 'Bend, Redmond' },
      { name: 'Southern Oregon', cities: 'Medford, Ashland' },
      { name: 'Eastern Oregon', cities: 'Pendleton, Baker City' },
    ],
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    population: '12.9M',
    regions: [
      { name: 'Philadelphia Metro/Southeast', cities: 'Philadelphia, Chester' },
      { name: 'Pittsburgh Metro/Southwest', cities: 'Pittsburgh' },
      { name: 'Lehigh Valley', cities: 'Allentown, Bethlehem' },
      { name: 'Central PA', cities: 'Harrisburg, Lancaster, York' },
      { name: 'Northeast PA/Poconos', cities: 'Scranton, Wilkes-Barre' },
      { name: 'Northwest PA/Erie', cities: 'Erie' },
      { name: 'North Central PA', cities: 'State College' },
    ],
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    population: '1.1M',
    regions: [
      { name: 'Providence Metro', cities: 'Providence, Warwick, Cranston' },
      { name: 'Newport County', cities: 'Newport, Middletown' },
      { name: 'South County', cities: 'Narragansett' },
      { name: 'Blackstone Valley', cities: 'Woonsocket' },
    ],
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    population: '5.4M',
    regions: [
      { name: 'Lowcountry/Charleston', cities: 'Charleston, Summerville' },
      { name: 'Grand Strand', cities: 'Myrtle Beach' },
      { name: 'Hilton Head/Coastal', cities: 'Hilton Head, Beaufort' },
      { name: 'Midlands/Columbia', cities: 'Columbia' },
      { name: 'Upstate/Greenville', cities: 'Greenville, Spartanburg' },
    ],
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    population: '909K',
    regions: [
      { name: 'Southeast', cities: 'Sioux Falls' },
      { name: 'Black Hills/West River', cities: 'Rapid City, Deadwood' },
      { name: 'Glacial Lakes/Northeast', cities: 'Aberdeen, Watertown' },
      { name: 'Central', cities: 'Pierre' },
    ],
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    population: '7.1M',
    regions: [
      { name: 'Nashville/Middle Tennessee', cities: 'Nashville, Murfreesboro' },
      { name: 'Memphis/West Tennessee', cities: 'Memphis, Jackson' },
      { name: 'Knoxville/East Tennessee', cities: 'Knoxville' },
      { name: 'Chattanooga/Southeast', cities: 'Chattanooga' },
      { name: 'Tri-Cities/Northeast', cities: 'Johnson City, Kingsport' },
      { name: 'The Smokies', cities: 'Gatlinburg, Pigeon Forge' },
    ],
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    population: '30.5M',
    regions: [
      { name: 'DFW Metroplex', cities: 'Dallas, Fort Worth, Arlington, Plano' },
      { name: 'Houston Metro/Gulf Coast', cities: 'Houston, Galveston, Corpus Christi' },
      { name: 'Austin/Central Texas', cities: 'Austin, San Marcos' },
      { name: 'San Antonio/South Central', cities: 'San Antonio' },
      { name: 'Rio Grande Valley', cities: 'McAllen, Brownsville, Laredo' },
      { name: 'West Texas', cities: 'El Paso, Midland, Odessa' },
      { name: 'Texas Panhandle', cities: 'Amarillo, Lubbock' },
      { name: 'East Texas', cities: 'Tyler, Longview' },
    ],
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    population: '3.4M',
    regions: [
      { name: 'Wasatch Front/Salt Lake', cities: 'Salt Lake City, Provo, Ogden' },
      { name: 'Wasatch Back', cities: 'Park City, Heber City' },
      { name: 'Greater Zion/Southwest', cities: 'St. George, Cedar City' },
      { name: 'Moab/Southeast', cities: 'Moab' },
      { name: 'Dinosaurland/Northeast', cities: 'Vernal' },
    ],
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    population: '647K',
    regions: [
      { name: 'Greater Burlington', cities: 'Burlington, South Burlington' },
      { name: 'Northeast Kingdom', cities: 'St. Johnsbury' },
      { name: 'Central Vermont', cities: 'Montpelier, Barre' },
      { name: 'Southern Vermont', cities: 'Bennington, Brattleboro' },
      { name: 'Stowe/North Central', cities: 'Stowe' },
    ],
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    population: '8.7M',
    regions: [
      { name: 'Northern Virginia', cities: 'Arlington, Alexandria, Fairfax' },
      { name: 'Richmond/Central', cities: 'Richmond, Charlottesville' },
      { name: 'Hampton Roads/Tidewater', cities: 'Virginia Beach, Norfolk, Chesapeake' },
      { name: 'Shenandoah Valley', cities: 'Harrisonburg, Winchester' },
      { name: 'Southwest Virginia', cities: 'Roanoke, Blacksburg' },
    ],
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    population: '7.8M',
    regions: [
      { name: 'Metro Puget Sound/Seattle', cities: 'Seattle, Tacoma, Bellevue, Everett' },
      { name: 'Southwest Washington', cities: 'Olympia, Vancouver' },
      { name: 'Eastern Washington/Spokane', cities: 'Spokane, Tri-Cities' },
      { name: 'North Cascades', cities: 'Bellingham, Mount Vernon' },
      { name: 'Olympic Peninsula', cities: 'Port Angeles' },
      { name: 'Central Washington', cities: 'Yakima, Wenatchee' },
    ],
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    population: '1.8M',
    regions: [
      { name: 'Metro Valley/Charleston', cities: 'Charleston, Huntington' },
      { name: 'Northern Panhandle', cities: 'Wheeling, Weirton' },
      { name: 'Mountaineer Country', cities: 'Morgantown, Clarksburg' },
      { name: 'Eastern Panhandle', cities: 'Martinsburg' },
      { name: 'New River Valley', cities: 'Beckley, Lewisburg' },
    ],
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    population: '5.9M',
    regions: [
      { name: 'Milwaukee Metro/Southeast', cities: 'Milwaukee, Waukesha, Racine' },
      { name: 'Madison/South Central', cities: 'Madison, Janesville' },
      { name: 'Fox Cities/Northeast', cities: 'Green Bay, Appleton, Oshkosh' },
      { name: 'Door County', cities: 'Sturgeon Bay' },
      { name: 'Wisconsin Dells/Central', cities: 'Wisconsin Dells' },
      { name: 'Northwoods', cities: 'Rhinelander' },
      { name: 'Northwest Wisconsin', cities: 'Eau Claire' },
    ],
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    population: '581K',
    regions: [
      { name: 'Cheyenne/Southeast', cities: 'Cheyenne' },
      { name: 'Casper/Central', cities: 'Casper' },
      { name: 'Jackson Hole/Northwest', cities: 'Jackson, Cody' },
      { name: 'Yellowstone Region', cities: 'West Yellowstone area' },
      { name: 'Laramie/Southeast', cities: 'Laramie' },
    ],
  },
];

export default function USHealthcareByRegionGuide() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Filter states based on search
  const filteredStates = statesData.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.regions.some(r =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cities.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to VitalityScout
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            US Healthcare by Region
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find top hospitals and health systems in your state and region.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">50 States</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">200+ Regions</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Major Health Systems</span>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="border-b border-gray-200 px-4 py-6 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by state, region, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-600">
              Found {filteredStates.length} state{filteredStates.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* Interactive Map */}
      <section className="border-b border-gray-200 px-4 py-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold text-gray-500 mb-6 text-center">Select Your State</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <USAMap
              onStateClick={(stateName) => {
                setSelectedState(stateName);
                const element = document.getElementById(stateName.toLowerCase().replace(/\s+/g, '-'));
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              selectedState={selectedState}
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Click any state to view its healthcare regions
          </p>
        </div>
      </section>

      {/* States List */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        {filteredStates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No states found matching &quot;{searchQuery}&quot;</p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredStates.map((state) => (
              <div
                key={state.name}
                id={state.name.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-20"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{state.name}</h2>
                      <p className="text-gray-600 mt-1">Population: {state.population}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {state.regions.length} region{state.regions.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {state.regions.map((region) => (
                    <div
                      key={region.name}
                      className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold text-gray-900 mb-2">{region.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        <span className="font-medium">Cities:</span> {region.cities}
                      </p>
                      {region.population && (
                        <p className="text-xs text-gray-500">Pop: {region.population}</p>
                      )}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 italic">
                          Health system data coming soon
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-4 py-12 border-t border-gray-200">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Cash-Pay Alternatives?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore telehealth, local clinics, and medical tourism options with transparent pricing.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
          >
            Browse All Categories →
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </div>
  );
}
