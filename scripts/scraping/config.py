"""
Configuration for the Centurion sales lead scraping pipeline.

Discovers clinic leads nationwide via Clay Google Maps -> cleans -> verifies -> enriches.
State tiers based on GLP-1 prescription rates + total addressable market size.
Large metros broken into quadrants to stay under Clay's 200-result export cap.
"""

# =============================================================================
# US STATE & REGION DATA
# Tiers based on GLP-1 prescription rates (Purple Lab insurance claims data)
# + total addressable market size (population).
#
# GLP-1 rate sources:
#   - Real Chemistry: realchemistry.com/states-with-highest-rates-of-glp-1-use/
#   - Fox News / Purple Lab: foxnews.com/health/americas-fattest-states-revealed
#
# Clay limit: 200 results per search export.
# Large metros (>2M pop) are broken into quadrants so each zone < 200 results.
# =============================================================================

US_STATES = {
    # ══════════════════════════════════════════════════════════════
    # TIER 1 — HIGH GLP-1 ADOPTION + LARGE POPULATION
    # Start here. Highest ROI for outbound sales.
    # CA (9.5%, 39M — already started), TX (15%, 30.5M), FL (10%, 22.6M),
    # GA (15%, 11M), PA (17%, 13M), OH (14.5%, 11.8M), MI (16%, 10M),
    # TN (15%, 7.1M)
    # ══════════════════════════════════════════════════════════════
    "CA": {
        "name": "California", "tier": 1, "population": "39M", "glp1_rate": "9.5%",
        "regions": {
            # Bay Area SF metro (~4.7M) — 4 quadrants
            "bay-area-sf-north": {"name": "SF / Marin / North Bay", "cities": [
                "San Francisco, CA", "Marin County, CA", "San Rafael, CA",
            ]},
            "bay-area-east": {"name": "East Bay", "cities": [
                "Oakland, CA", "Berkeley, CA", "Walnut Creek, CA", "Fremont, CA",
            ]},
            "bay-area-peninsula": {"name": "Peninsula / South Bay", "cities": [
                "San Jose, CA", "Palo Alto, CA", "Mountain View, CA", "Redwood City, CA",
            ]},
            "bay-area-south-sj": {"name": "South San Jose / Santa Clara", "cities": [
                "Santa Clara, CA", "Sunnyvale, CA", "Cupertino, CA", "Campbell, CA",
            ]},
            # LA Metro (~10M) — 6 quadrants
            "la-westside": {"name": "LA Westside / Santa Monica", "cities": [
                "Santa Monica, CA", "Beverly Hills, CA", "West Hollywood, CA", "Culver City, CA",
            ]},
            "la-central": {"name": "LA Central / Downtown", "cities": [
                "Los Angeles, CA", "Glendale, CA", "Pasadena, CA",
            ]},
            "la-south": {"name": "LA South / Long Beach", "cities": [
                "Long Beach, CA", "Torrance, CA", "Manhattan Beach, CA", "Hermosa Beach, CA",
            ]},
            "la-valley": {"name": "San Fernando Valley", "cities": [
                "Burbank, CA", "Sherman Oaks, CA", "Encino, CA", "Woodland Hills, CA",
            ]},
            "la-east": {"name": "LA East / San Gabriel", "cities": [
                "Arcadia, CA", "West Covina, CA", "Pomona, CA",
            ]},
            # Orange County (~3.2M) — 2 quadrants
            "oc-north": {"name": "North Orange County", "cities": [
                "Anaheim, CA", "Fullerton, CA", "Brea, CA",
            ]},
            "oc-south": {"name": "South Orange County / Coast", "cities": [
                "Irvine, CA", "Newport Beach, CA", "Costa Mesa, CA", "Huntington Beach, CA",
            ]},
            # San Diego (~3.3M) — 2 quadrants
            "sd-central": {"name": "San Diego Central / Coast", "cities": [
                "San Diego, CA", "La Jolla, CA", "Del Mar, CA",
            ]},
            "sd-north": {"name": "North San Diego County", "cities": [
                "Carlsbad, CA", "Encinitas, CA", "Oceanside, CA", "Escondido, CA",
            ]},
            # Sacramento (~3.5M) — 2 quadrants
            "sacramento-central": {"name": "Sacramento Central", "cities": [
                "Sacramento, CA", "Elk Grove, CA", "Rancho Cordova, CA",
            ]},
            "sacramento-suburbs": {"name": "Sacramento Suburbs", "cities": [
                "Roseville, CA", "Folsom, CA", "Rocklin, CA",
            ]},
            # Inland Empire (~4.6M) — 2 quadrants
            "ie-west": {"name": "Inland Empire West", "cities": [
                "Rancho Cucamonga, CA", "Ontario, CA", "Upland, CA",
            ]},
            "ie-east": {"name": "Inland Empire East", "cities": [
                "Riverside, CA", "San Bernardino, CA", "Redlands, CA",
            ]},
            # Smaller metros (under 2M, no quadrants needed)
            "central-valley": {"name": "Central Valley / San Joaquin", "cities": [
                "Fresno, CA", "Bakersfield, CA", "Stockton, CA", "Modesto, CA",
            ]},
            "central-coast": {"name": "Central Coast", "cities": [
                "Santa Barbara, CA", "San Luis Obispo, CA", "Monterey, CA",
            ]},
            "far-north": {"name": "Far North / Superior California", "cities": [
                "Redding, CA", "Chico, CA", "Napa, CA",
            ]},
        },
    },
    "TX": {
        "name": "Texas", "tier": 1, "population": "30.5M", "glp1_rate": "15%",
        "regions": {
            # Houston (~7.5M) — 4 quadrants
            "houston-central": {"name": "Houston Central / Inner Loop", "cities": [
                "Houston, TX", "Bellaire, TX",
            ]},
            "houston-north": {"name": "Houston North / Woodlands", "cities": [
                "The Woodlands, TX", "Spring, TX", "Tomball, TX",
            ]},
            "houston-west": {"name": "Houston West / Katy", "cities": [
                "Katy, TX", "Sugar Land, TX", "Missouri City, TX",
            ]},
            "houston-south": {"name": "Houston South / Clear Lake", "cities": [
                "Pearland, TX", "League City, TX", "Clear Lake, TX", "Pasadena, TX",
            ]},
            # DFW Dallas (~4M) — 3 quadrants
            "dallas-central": {"name": "Dallas Central / Uptown", "cities": [
                "Dallas, TX", "Highland Park, TX",
            ]},
            "dallas-north": {"name": "Dallas North / Plano", "cities": [
                "Plano, TX", "Frisco, TX", "Richardson, TX", "McKinney, TX",
            ]},
            "dallas-east": {"name": "Dallas East / Mesquite", "cities": [
                "Mesquite, TX", "Garland, TX", "Rockwall, TX",
            ]},
            # DFW Fort Worth (~4M) — 2 quadrants
            "fort-worth": {"name": "Fort Worth / Arlington", "cities": [
                "Fort Worth, TX", "Arlington, TX", "Grapevine, TX",
            ]},
            "fort-worth-west": {"name": "Fort Worth West / Weatherford", "cities": [
                "Weatherford, TX", "Southlake, TX", "Keller, TX",
            ]},
            # Austin (~2.4M) — 2 quadrants
            "austin-central": {"name": "Austin Central", "cities": [
                "Austin, TX", "West Lake Hills, TX",
            ]},
            "austin-suburbs": {"name": "Austin Suburbs", "cities": [
                "Round Rock, TX", "Cedar Park, TX", "Georgetown, TX",
            ]},
            # San Antonio (~2.7M) — 2 quadrants
            "san-antonio-central": {"name": "San Antonio Central", "cities": [
                "San Antonio, TX", "Alamo Heights, TX",
            ]},
            "san-antonio-north": {"name": "San Antonio North", "cities": [
                "New Braunfels, TX", "Schertz, TX", "Boerne, TX",
            ]},
            # Smaller TX metros
            "heart-of-texas": {"name": "Heart of Texas", "cities": ["Temple, TX", "Waco, TX"]},
            "rio-grande": {"name": "Rio Grande Valley", "cities": ["McAllen, TX", "Brownsville, TX"]},
            "east-texas": {"name": "East Texas", "cities": ["Tyler, TX", "Longview, TX"]},
            "west-texas": {"name": "West Texas / Panhandle", "cities": ["El Paso, TX", "Lubbock, TX", "Amarillo, TX"]},
            "coastal-bend": {"name": "Coastal Bend", "cities": ["Corpus Christi, TX"]},
            "southeast-texas": {"name": "Southeast Texas", "cities": ["Galveston, TX", "Beaumont, TX"]},
        },
    },
    "FL": {
        "name": "Florida", "tier": 1, "population": "22.6M", "glp1_rate": "10%",
        "regions": {
            # South Florida / Miami (~6.1M) — 3 quadrants
            "miami": {"name": "Miami / Coral Gables", "cities": [
                "Miami, FL", "Coral Gables, FL", "Miami Beach, FL",
            ]},
            "fort-lauderdale": {"name": "Fort Lauderdale / Broward", "cities": [
                "Fort Lauderdale, FL", "Plantation, FL", "Weston, FL", "Hollywood, FL",
            ]},
            "west-palm": {"name": "West Palm Beach / Boca", "cities": [
                "West Palm Beach, FL", "Boca Raton, FL", "Delray Beach, FL",
            ]},
            # Tampa Bay (~3M) — 2 quadrants
            "tampa": {"name": "Tampa / Brandon", "cities": [
                "Tampa, FL", "Brandon, FL", "Wesley Chapel, FL",
            ]},
            "st-pete": {"name": "St. Petersburg / Clearwater", "cities": [
                "St. Petersburg, FL", "Clearwater, FL", "Largo, FL",
            ]},
            # Orlando (~2.4M) — 2 quadrants
            "orlando-central": {"name": "Orlando Central", "cities": [
                "Orlando, FL", "Winter Park, FL",
            ]},
            "orlando-suburbs": {"name": "Orlando Suburbs", "cities": [
                "Kissimmee, FL", "Sanford, FL", "Lake Mary, FL",
            ]},
            # Smaller FL metros
            "jacksonville": {"name": "Jacksonville / NE Florida", "cities": ["Jacksonville, FL", "St. Augustine, FL"]},
            "north-central-fl": {"name": "North Central Florida", "cities": ["Gainesville, FL", "Ocala, FL"]},
            "southwest-fl": {"name": "Southwest Florida", "cities": ["Sarasota, FL", "Fort Myers, FL", "Naples, FL"]},
            "space-coast": {"name": "Space Coast", "cities": ["Melbourne, FL", "Palm Bay, FL"]},
            "treasure-coast": {"name": "Treasure Coast", "cities": ["Port St. Lucie, FL", "Vero Beach, FL"]},
            "panhandle": {"name": "NW Florida / Panhandle", "cities": ["Pensacola, FL", "Tallahassee, FL"]},
        },
    },
    "GA": {
        "name": "Georgia", "tier": 1, "population": "11M", "glp1_rate": "15%",
        "regions": {
            # Atlanta metro (~6M) — 4 quadrants
            "atlanta-central": {"name": "Atlanta Central / Midtown", "cities": [
                "Atlanta, GA", "Decatur, GA", "Buckhead, GA",
            ]},
            "atlanta-north": {"name": "North Atlanta / Alpharetta", "cities": [
                "Alpharetta, GA", "Sandy Springs, GA", "Roswell, GA", "Johns Creek, GA",
            ]},
            "atlanta-northwest": {"name": "NW Atlanta / Marietta", "cities": [
                "Marietta, GA", "Kennesaw, GA", "Smyrna, GA",
            ]},
            "atlanta-south": {"name": "South Atlanta / Peachtree City", "cities": [
                "Peachtree City, GA", "Newnan, GA", "Fayetteville, GA",
            ]},
            # Smaller GA metros
            "northeast-ga": {"name": "Northeast Georgia", "cities": ["Athens, GA", "Gainesville, GA"]},
            "augusta": {"name": "Augusta Metro", "cities": ["Augusta, GA"]},
            "savannah": {"name": "Savannah / Coastal", "cities": ["Savannah, GA"]},
            "middle-ga": {"name": "Middle Georgia", "cities": ["Macon, GA"]},
            "columbus-ga": {"name": "Columbus / West Georgia", "cities": ["Columbus, GA"]},
            "south-ga": {"name": "South Georgia", "cities": ["Valdosta, GA"]},
        },
    },
    "PA": {
        "name": "Pennsylvania", "tier": 1, "population": "13M", "glp1_rate": "17%",
        "regions": {
            # Philadelphia (~6.2M) — 3 quadrants
            "philly-central": {"name": "Philadelphia Central", "cities": [
                "Philadelphia, PA", "Center City, PA",
            ]},
            "philly-mainline": {"name": "Philly Main Line / West", "cities": [
                "West Chester, PA", "King of Prussia, PA", "Wayne, PA",
            ]},
            "philly-north": {"name": "Philly North / Bucks County", "cities": [
                "Doylestown, PA", "Langhorne, PA", "Norristown, PA",
            ]},
            # Pittsburgh (~2.4M) — 2 quadrants
            "pittsburgh-central": {"name": "Pittsburgh Central", "cities": [
                "Pittsburgh, PA", "Shadyside, PA",
            ]},
            "pittsburgh-suburbs": {"name": "Pittsburgh Suburbs", "cities": [
                "Cranberry Township, PA", "Monroeville, PA", "Greensburg, PA",
            ]},
            # Smaller PA metros
            "lehigh-valley": {"name": "Lehigh Valley", "cities": ["Allentown, PA", "Bethlehem, PA"]},
            "harrisburg": {"name": "Harrisburg / Central PA", "cities": ["Harrisburg, PA", "Carlisle, PA"]},
            "lancaster-york": {"name": "Lancaster-York", "cities": ["Lancaster, PA", "York, PA"]},
            "scranton": {"name": "Scranton / Wilkes-Barre", "cities": ["Scranton, PA"]},
            "erie": {"name": "Erie Region", "cities": ["Erie, PA"]},
            "reading": {"name": "Reading / Berks County", "cities": ["Reading, PA"]},
        },
    },
    "OH": {
        "name": "Ohio", "tier": 1, "population": "11.8M", "glp1_rate": "14.5%",
        "regions": {
            # Cleveland (~2.2M) — 2 quadrants
            "cleveland-central": {"name": "Cleveland Central / West Side", "cities": [
                "Cleveland, OH", "Lakewood, OH", "Parma, OH",
            ]},
            "cleveland-east": {"name": "Cleveland East / Beachwood", "cities": [
                "Beachwood, OH", "Mentor, OH", "Chagrin Falls, OH",
            ]},
            # Columbus (~2.2M) — 2 quadrants
            "columbus-central": {"name": "Columbus Central", "cities": [
                "Columbus, OH", "Grandview Heights, OH",
            ]},
            "columbus-suburbs": {"name": "Columbus Suburbs", "cities": [
                "Dublin, OH", "Westerville, OH", "New Albany, OH",
            ]},
            # Cincinnati (~2.3M) — 2 quadrants
            "cincinnati-central": {"name": "Cincinnati Central", "cities": [
                "Cincinnati, OH", "Norwood, OH",
            ]},
            "cincinnati-suburbs": {"name": "Cincinnati North / Mason", "cities": [
                "Mason, OH", "West Chester, OH", "Liberty Township, OH",
            ]},
            # Smaller OH metros
            "akron-canton": {"name": "Akron-Canton", "cities": ["Akron, OH", "Canton, OH"]},
            "dayton": {"name": "Greater Dayton", "cities": ["Dayton, OH", "Kettering, OH"]},
            "toledo": {"name": "Toledo / NW Ohio", "cities": ["Toledo, OH"]},
            "youngstown": {"name": "Youngstown-Warren", "cities": ["Youngstown, OH"]},
        },
    },
    "MI": {
        "name": "Michigan", "tier": 1, "population": "10M", "glp1_rate": "16%",
        "regions": {
            # Detroit (~4.4M) — 3 quadrants
            "detroit-central": {"name": "Detroit Central / Dearborn", "cities": [
                "Detroit, MI", "Dearborn, MI",
            ]},
            "detroit-north": {"name": "Detroit North / Royal Oak", "cities": [
                "Royal Oak, MI", "Troy, MI", "Birmingham, MI",
            ]},
            "detroit-west": {"name": "Detroit West / Novi", "cities": [
                "Novi, MI", "Farmington Hills, MI", "Livonia, MI",
            ]},
            # Smaller MI metros
            "ann-arbor": {"name": "Ann Arbor", "cities": ["Ann Arbor, MI"]},
            "grand-rapids": {"name": "Grand Rapids / West MI", "cities": ["Grand Rapids, MI", "Holland, MI"]},
            "lansing": {"name": "Lansing / Mid-Michigan", "cities": ["Lansing, MI"]},
            "flint-saginaw": {"name": "Flint / Saginaw Bay", "cities": ["Flint, MI"]},
            "kalamazoo": {"name": "Kalamazoo / SW Michigan", "cities": ["Kalamazoo, MI"]},
            "traverse-city": {"name": "Traverse City / Northern MI", "cities": ["Traverse City, MI"]},
        },
    },
    "TN": {
        "name": "Tennessee", "tier": 1, "population": "7.1M", "glp1_rate": "15%",
        "regions": {
            # Nashville (~2M) — 2 quadrants
            "nashville-central": {"name": "Nashville Central", "cities": [
                "Nashville, TN", "Brentwood, TN",
            ]},
            "nashville-suburbs": {"name": "Nashville Suburbs", "cities": [
                "Franklin, TN", "Murfreesboro, TN", "Hendersonville, TN",
            ]},
            "memphis": {"name": "Memphis Metro", "cities": ["Memphis, TN", "Germantown, TN"]},
            "east-tn": {"name": "East Tennessee", "cities": ["Knoxville, TN", "Chattanooga, TN"]},
            "tri-cities-tn": {"name": "Tri-Cities", "cities": ["Johnson City, TN"]},
        },
    },

    # ══════════════════════════════════════════════════════════════
    # TIER 2 — VERY HIGH GLP-1 RATES (15%+) OR LARGE MARKETS
    # High per-capita GLP-1 adoption, worth prioritizing after Tier 1.
    # KY (22%), AL (19%), OK (20%), LA (20%), AR (17%), IA (16.5%),
    # KS (15%), NC (~13%, 10.8M), IL (~12%, 12.5M), NY (~12%, 19.5M)
    # ══════════════════════════════════════════════════════════════
    "KY": {
        "name": "Kentucky", "tier": 2, "population": "4.5M", "glp1_rate": "22%",
        "regions": {
            "louisville": {"name": "Louisville Metro", "cities": ["Louisville, KY", "Jeffersontown, KY"]},
            "lexington": {"name": "Lexington", "cities": ["Lexington, KY"]},
            "northern-ky": {"name": "Northern Kentucky", "cities": ["Covington, KY", "Florence, KY"]},
            "eastern-ky": {"name": "Eastern Kentucky", "cities": ["Ashland, KY"]},
        },
    },
    "AL": {
        "name": "Alabama", "tier": 2, "population": "5.1M", "glp1_rate": "19%",
        "regions": {
            "birmingham": {"name": "Birmingham", "cities": ["Birmingham, AL", "Hoover, AL", "Vestavia Hills, AL"]},
            "huntsville": {"name": "Huntsville", "cities": ["Huntsville, AL", "Decatur, AL"]},
            "mobile": {"name": "Mobile", "cities": ["Mobile, AL", "Daphne, AL"]},
            "montgomery": {"name": "Montgomery", "cities": ["Montgomery, AL"]},
        },
    },
    "OK": {
        "name": "Oklahoma", "tier": 2, "population": "4M", "glp1_rate": "20%",
        "regions": {
            "okc": {"name": "Oklahoma City Metro", "cities": ["Oklahoma City, OK", "Norman, OK", "Edmond, OK"]},
            "tulsa": {"name": "Tulsa Metro", "cities": ["Tulsa, OK", "Broken Arrow, OK"]},
            "sw-ok": {"name": "Southwest Oklahoma", "cities": ["Lawton, OK"]},
        },
    },
    "LA": {
        "name": "Louisiana", "tier": 2, "population": "4.6M", "glp1_rate": "20%",
        "regions": {
            "new-orleans": {"name": "New Orleans Metro", "cities": ["New Orleans, LA", "Metairie, LA"]},
            "baton-rouge": {"name": "Baton Rouge", "cities": ["Baton Rouge, LA"]},
            "north-la": {"name": "North Louisiana", "cities": ["Shreveport, LA", "Monroe, LA"]},
            "acadiana": {"name": "Acadiana", "cities": ["Lafayette, LA"]},
        },
    },
    "AR": {
        "name": "Arkansas", "tier": 2, "population": "3M", "glp1_rate": "17%",
        "regions": {
            "central-ar": {"name": "Central Arkansas", "cities": ["Little Rock, AR"]},
            "nw-ar": {"name": "Northwest Arkansas", "cities": ["Fayetteville, AR", "Bentonville, AR"]},
            "ne-ar": {"name": "Northeast Arkansas", "cities": ["Jonesboro, AR"]},
        },
    },
    "IA": {
        "name": "Iowa", "tier": 2, "population": "3.2M", "glp1_rate": "16.5%",
        "regions": {
            "des-moines": {"name": "Des Moines Metro", "cities": ["Des Moines, IA", "West Des Moines, IA"]},
            "eastern-ia": {"name": "Eastern Iowa", "cities": ["Cedar Rapids, IA", "Iowa City, IA"]},
            "western-ia": {"name": "Western Iowa", "cities": ["Sioux City, IA"]},
        },
    },
    "KS": {
        "name": "Kansas", "tier": 2, "population": "2.9M", "glp1_rate": "15%",
        "regions": {
            "kc-ks": {"name": "Kansas City Metro", "cities": ["Overland Park, KS", "Olathe, KS"]},
            "wichita": {"name": "Wichita", "cities": ["Wichita, KS"]},
            "central-ks": {"name": "Central Kansas", "cities": ["Topeka, KS"]},
        },
    },
    "NC": {
        "name": "North Carolina", "tier": 2, "population": "10.8M", "glp1_rate": "~13%",
        "regions": {
            # Charlotte (~2.8M) — 2 quadrants
            "charlotte-central": {"name": "Charlotte Central / SouthPark", "cities": [
                "Charlotte, NC", "Ballantyne, NC",
            ]},
            "charlotte-suburbs": {"name": "Charlotte Suburbs", "cities": [
                "Gastonia, NC", "Concord, NC", "Mooresville, NC",
            ]},
            "triangle": {"name": "Research Triangle", "cities": ["Raleigh, NC", "Durham, NC", "Chapel Hill, NC"]},
            "piedmont-triad": {"name": "Piedmont Triad", "cities": ["Greensboro, NC", "Winston-Salem, NC"]},
            "western-nc": {"name": "Western Mountains", "cities": ["Asheville, NC"]},
            "wilmington": {"name": "Wilmington / Cape Fear", "cities": ["Wilmington, NC"]},
            "fayetteville": {"name": "Fayetteville", "cities": ["Fayetteville, NC"]},
            "coastal-east": {"name": "Coastal Plain East", "cities": ["Greenville, NC"]},
        },
    },
    "IL": {
        "name": "Illinois", "tier": 2, "population": "12.5M", "glp1_rate": "~12%",
        "regions": {
            # Chicago (~9.5M total) — 5 quadrants
            "chicago-downtown": {"name": "Chicago Downtown / Lincoln Park", "cities": [
                "Chicago, IL", "Lincoln Park, IL",
            ]},
            "chicago-north": {"name": "Chicago North Shore", "cities": [
                "Evanston, IL", "Highland Park, IL", "Arlington Heights, IL",
            ]},
            "chicago-west": {"name": "Chicago Western Suburbs", "cities": [
                "Naperville, IL", "Oak Brook, IL", "Hinsdale, IL",
            ]},
            "chicago-south": {"name": "Chicago South Suburbs", "cities": [
                "Oak Lawn, IL", "Orland Park, IL",
            ]},
            "chicago-northwest": {"name": "Chicago NW Suburbs", "cities": [
                "Schaumburg, IL", "Palatine, IL", "Buffalo Grove, IL",
            ]},
            # Smaller IL metros
            "rockford": {"name": "Rockford", "cities": ["Rockford, IL"]},
            "peoria": {"name": "Peoria / Central IL", "cities": ["Peoria, IL", "Bloomington, IL"]},
            "springfield": {"name": "Springfield", "cities": ["Springfield, IL"]},
            "champaign": {"name": "Champaign-Urbana", "cities": ["Champaign, IL"]},
        },
    },
    "NY": {
        "name": "New York", "tier": 2, "population": "19.5M", "glp1_rate": "~12%",
        "regions": {
            # NYC (~8.3M) — 4 quadrants
            "nyc-manhattan": {"name": "Manhattan", "cities": [
                "Manhattan, NY", "New York, NY",
            ]},
            "nyc-brooklyn": {"name": "Brooklyn / Queens", "cities": [
                "Brooklyn, NY", "Queens, NY",
            ]},
            "nyc-bronx": {"name": "Bronx / Staten Island", "cities": [
                "Bronx, NY", "Staten Island, NY",
            ]},
            # Long Island (~2.9M) — 2 quadrants
            "long-island-nassau": {"name": "Nassau County", "cities": [
                "Garden City, NY", "Great Neck, NY", "Hempstead, NY",
            ]},
            "long-island-suffolk": {"name": "Suffolk County", "cities": [
                "Huntington, NY", "Smithtown, NY",
            ]},
            # Westchester / Hudson Valley
            "westchester": {"name": "Westchester / Hudson Valley", "cities": [
                "White Plains, NY", "Scarsdale, NY", "Poughkeepsie, NY",
            ]},
            # Upstate
            "capital-district": {"name": "Capital District", "cities": ["Albany, NY", "Saratoga Springs, NY"]},
            "central-ny": {"name": "Central New York", "cities": ["Syracuse, NY"]},
            "finger-lakes": {"name": "Finger Lakes", "cities": ["Rochester, NY"]},
            "western-ny": {"name": "Western New York", "cities": ["Buffalo, NY"]},
        },
    },

    # ══════════════════════════════════════════════════════════════
    # TIER 3 — MODERATE GLP-1 ACTIVITY / DECENT MARKETS
    # ══════════════════════════════════════════════════════════════
    "IN": {"name": "Indiana", "tier": 3, "population": "6.8M", "glp1_rate": "~14%", "regions": {
        "indianapolis": {"name": "Indianapolis Metro", "cities": ["Indianapolis, IN", "Carmel, IN", "Fishers, IN"]},
        "nw-indiana": {"name": "Northwest Indiana", "cities": ["South Bend, IN"]},
        "fort-wayne": {"name": "Fort Wayne", "cities": ["Fort Wayne, IN"]},
        "southern-in": {"name": "Southern Indiana", "cities": ["Evansville, IN"]},
    }},
    "MO": {"name": "Missouri", "tier": 3, "population": "6.2M", "glp1_rate": "~13%", "regions": {
        "stl": {"name": "St. Louis Metro", "cities": ["St. Louis, MO", "Clayton, MO", "Chesterfield, MO"]},
        "kc-mo": {"name": "Kansas City Metro", "cities": ["Kansas City, MO", "Lee's Summit, MO"]},
        "central-mo": {"name": "Central Missouri", "cities": ["Columbia, MO"]},
        "sw-mo": {"name": "Southwest Missouri", "cities": ["Springfield, MO"]},
    }},
    "SC": {"name": "South Carolina", "tier": 3, "population": "5.4M", "glp1_rate": "~14%", "regions": {
        "charleston": {"name": "Charleston", "cities": ["Charleston, SC", "Mount Pleasant, SC"]},
        "columbia-sc": {"name": "Columbia", "cities": ["Columbia, SC"]},
        "upstate-sc": {"name": "Upstate", "cities": ["Greenville, SC", "Spartanburg, SC"]},
        "myrtle-beach": {"name": "Myrtle Beach", "cities": ["Myrtle Beach, SC"]},
    }},
    "VA": {"name": "Virginia", "tier": 3, "population": "8.6M", "glp1_rate": "~11%", "regions": {
        "nova": {"name": "Northern Virginia", "cities": ["Arlington, VA", "Alexandria, VA", "Fairfax, VA"]},
        "hampton-roads": {"name": "Hampton Roads", "cities": ["Virginia Beach, VA", "Norfolk, VA"]},
        "richmond": {"name": "Richmond Metro", "cities": ["Richmond, VA"]},
        "shenandoah": {"name": "Shenandoah Valley", "cities": ["Charlottesville, VA"]},
        "southwest-va": {"name": "Southwest Virginia", "cities": ["Roanoke, VA"]},
    }},
    "MS": {"name": "Mississippi", "tier": 3, "population": "2.9M", "glp1_rate": "19%", "regions": {
        "jackson-ms": {"name": "Jackson Metro", "cities": ["Jackson, MS"]},
        "gulf-coast-ms": {"name": "Gulf Coast", "cities": ["Gulfport, MS", "Biloxi, MS"]},
        "north-ms": {"name": "North Mississippi", "cities": ["Tupelo, MS", "Oxford, MS"]},
    }},
    "WV": {"name": "West Virginia", "tier": 3, "population": "1.8M", "glp1_rate": "24%", "regions": {
        "charleston-wv": {"name": "Charleston / Huntington", "cities": ["Charleston, WV", "Huntington, WV"]},
        "northern-wv": {"name": "Northern WV", "cities": ["Morgantown, WV"]},
    }},
    "ND": {"name": "North Dakota", "tier": 3, "population": "780K", "glp1_rate": "18%", "regions": {
        "eastern-nd": {"name": "Eastern ND", "cities": ["Fargo, ND"]},
        "western-nd": {"name": "Western ND", "cities": ["Bismarck, ND"]},
    }},
    "SD": {"name": "South Dakota", "tier": 3, "population": "900K", "glp1_rate": "~15%", "regions": {
        "sioux-falls": {"name": "Sioux Falls", "cities": ["Sioux Falls, SD"]},
        "black-hills": {"name": "Black Hills", "cities": ["Rapid City, SD"]},
    }},
    "AK": {"name": "Alaska", "tier": 3, "population": "740K", "glp1_rate": "17%", "regions": {
        "anchorage": {"name": "Anchorage", "cities": ["Anchorage, AK"]},
        "fairbanks": {"name": "Fairbanks", "cities": ["Fairbanks, AK"]},
    }},
    "MN": {"name": "Minnesota", "tier": 3, "population": "5.7M", "glp1_rate": "~12%", "regions": {
        "twin-cities": {"name": "Twin Cities", "cities": ["Minneapolis, MN", "St. Paul, MN"]},
        "rochester-mn": {"name": "Rochester", "cities": ["Rochester, MN"]},
        "central-mn": {"name": "Central Minnesota", "cities": ["St. Cloud, MN"]},
    }},
    "WI": {"name": "Wisconsin", "tier": 3, "population": "5.9M", "glp1_rate": "10%", "regions": {
        "milwaukee": {"name": "Milwaukee Metro", "cities": ["Milwaukee, WI", "Waukesha, WI"]},
        "madison": {"name": "Madison", "cities": ["Madison, WI"]},
        "fox-valley": {"name": "Fox Valley", "cities": ["Green Bay, WI", "Appleton, WI"]},
    }},
    "MD": {"name": "Maryland", "tier": 3, "population": "6.2M", "glp1_rate": "10%", "regions": {
        "baltimore": {"name": "Baltimore Metro", "cities": ["Baltimore, MD", "Towson, MD"]},
        "dc-suburbs": {"name": "DC Suburbs", "cities": ["Bethesda, MD", "Rockville, MD"]},
        "eastern-shore-md": {"name": "Eastern Shore", "cities": ["Salisbury, MD"]},
    }},
    "NJ": {"name": "New Jersey", "tier": 3, "population": "9.2M", "glp1_rate": "~11%", "regions": {
        "north-nj": {"name": "North Jersey", "cities": ["Newark, NJ", "Jersey City, NJ", "Morristown, NJ"]},
        "central-nj": {"name": "Central Jersey", "cities": ["New Brunswick, NJ", "Princeton, NJ"]},
        "south-nj": {"name": "South Jersey", "cities": ["Cherry Hill, NJ"]},
    }},
    "CT": {"name": "Connecticut", "tier": 3, "population": "3.6M", "glp1_rate": "~10%", "regions": {
        "hartford": {"name": "Greater Hartford", "cities": ["Hartford, CT"]},
        "new-haven": {"name": "New Haven", "cities": ["New Haven, CT"]},
        "fairfield": {"name": "Fairfield County", "cities": ["Stamford, CT", "Greenwich, CT"]},
    }},
    "MA": {"name": "Massachusetts", "tier": 3, "population": "7M", "glp1_rate": "~8%", "regions": {
        "boston": {"name": "Greater Boston", "cities": ["Boston, MA", "Cambridge, MA", "Brookline, MA"]},
        "north-shore-ma": {"name": "North Shore", "cities": ["Salem, MA"]},
        "central-ma": {"name": "Central MA", "cities": ["Worcester, MA"]},
        "western-ma": {"name": "Western MA", "cities": ["Springfield, MA"]},
    }},

    # ══════════════════════════════════════════════════════════════
    # TIER 4 — LOW GLP-1 ADOPTION / SMALL MARKETS
    # Western states with low adoption, or very small populations.
    # ══════════════════════════════════════════════════════════════
    "AZ": {"name": "Arizona", "tier": 4, "population": "7.4M", "glp1_rate": "8%", "regions": {
        "phoenix-scottsdale": {"name": "Phoenix / Scottsdale", "cities": ["Phoenix, AZ", "Scottsdale, AZ", "Tempe, AZ"]},
        "west-valley-az": {"name": "West Valley", "cities": ["Glendale, AZ", "Peoria, AZ"]},
        "tucson": {"name": "Tucson", "cities": ["Tucson, AZ"]},
        "northern-az": {"name": "Northern Arizona", "cities": ["Flagstaff, AZ"]},
    }},
    "CO": {"name": "Colorado", "tier": 4, "population": "5.9M", "glp1_rate": "8%", "regions": {
        "denver": {"name": "Denver Metro", "cities": ["Denver, CO", "Aurora, CO", "Littleton, CO"]},
        "boulder": {"name": "Boulder / Longmont", "cities": ["Boulder, CO"]},
        "fort-collins": {"name": "Fort Collins / Northern CO", "cities": ["Fort Collins, CO"]},
        "colorado-springs": {"name": "Colorado Springs", "cities": ["Colorado Springs, CO"]},
    }},
    "OR": {"name": "Oregon", "tier": 4, "population": "4.2M", "glp1_rate": "8%", "regions": {
        "portland": {"name": "Portland Metro", "cities": ["Portland, OR", "Beaverton, OR"]},
        "willamette": {"name": "Willamette Valley", "cities": ["Salem, OR", "Eugene, OR"]},
        "central-or": {"name": "Central Oregon", "cities": ["Bend, OR"]},
    }},
    "WA": {"name": "Washington", "tier": 4, "population": "8M", "glp1_rate": "9%", "regions": {
        "seattle": {"name": "Seattle Metro", "cities": ["Seattle, WA", "Bellevue, WA", "Tacoma, WA"]},
        "spokane": {"name": "Spokane", "cities": ["Spokane, WA"]},
        "olympia": {"name": "Olympia", "cities": ["Olympia, WA"]},
    }},
    "UT": {"name": "Utah", "tier": 4, "population": "3.4M", "glp1_rate": "8%", "regions": {
        "slc": {"name": "Salt Lake City", "cities": ["Salt Lake City, UT"]},
        "utah-county": {"name": "Utah County", "cities": ["Provo, UT"]},
        "southern-ut": {"name": "Southern Utah", "cities": ["St. George, UT"]},
    }},
    "NV": {"name": "Nevada", "tier": 4, "population": "3.2M", "glp1_rate": "8%", "regions": {
        "las-vegas": {"name": "Las Vegas Metro", "cities": ["Las Vegas, NV", "Henderson, NV"]},
        "reno": {"name": "Reno", "cities": ["Reno, NV"]},
    }},
    "NM": {"name": "New Mexico", "tier": 4, "population": "2.1M", "glp1_rate": "~6%", "regions": {
        "albuquerque": {"name": "Albuquerque", "cities": ["Albuquerque, NM"]},
        "santa-fe": {"name": "Santa Fe", "cities": ["Santa Fe, NM"]},
    }},
    "NE": {"name": "Nebraska", "tier": 4, "population": "2M", "glp1_rate": "~12%", "regions": {
        "omaha": {"name": "Omaha", "cities": ["Omaha, NE"]},
        "lincoln": {"name": "Lincoln", "cities": ["Lincoln, NE"]},
    }},
    "ID": {"name": "Idaho", "tier": 4, "population": "2M", "glp1_rate": "~9%", "regions": {
        "boise": {"name": "Boise Metro", "cities": ["Boise, ID", "Meridian, ID"]},
        "northern-id": {"name": "Northern Idaho", "cities": ["Coeur d'Alene, ID"]},
    }},
    "HI": {"name": "Hawaii", "tier": 4, "population": "1.4M", "glp1_rate": "5%", "regions": {
        "oahu": {"name": "Oahu", "cities": ["Honolulu, HI"]},
    }},
    "NH": {"name": "New Hampshire", "tier": 4, "population": "1.4M", "glp1_rate": "~9%", "regions": {
        "southern-nh": {"name": "Southern NH", "cities": ["Manchester, NH", "Nashua, NH"]},
    }},
    "ME": {"name": "Maine", "tier": 4, "population": "1.4M", "glp1_rate": "~10%", "regions": {
        "southern-me": {"name": "Southern Maine", "cities": ["Portland, ME"]},
    }},
    "MT": {"name": "Montana", "tier": 4, "population": "1.1M", "glp1_rate": "~10%", "regions": {
        "western-mt": {"name": "Western Montana", "cities": ["Missoula, MT"]},
        "eastern-mt": {"name": "Eastern Montana", "cities": ["Billings, MT", "Bozeman, MT"]},
    }},
    "RI": {"name": "Rhode Island", "tier": 4, "population": "1.1M", "glp1_rate": "7.5%", "regions": {
        "providence": {"name": "Providence", "cities": ["Providence, RI"]},
    }},
    "DE": {"name": "Delaware", "tier": 4, "population": "1M", "glp1_rate": "~11%", "regions": {
        "northern-de": {"name": "Northern Delaware", "cities": ["Wilmington, DE"]},
    }},
    "VT": {"name": "Vermont", "tier": 4, "population": "650K", "glp1_rate": "~8%", "regions": {
        "burlington": {"name": "Burlington", "cities": ["Burlington, VT"]},
    }},
    "WY": {"name": "Wyoming", "tier": 4, "population": "580K", "glp1_rate": "~10%", "regions": {
        "cheyenne": {"name": "Cheyenne", "cities": ["Cheyenne, WY"]},
        "jackson": {"name": "Jackson Hole", "cities": ["Jackson, WY"]},
    }},
}

# =============================================================================
# CLINIC TYPES — 5 verticals
# =============================================================================

CLINIC_TYPES = {
    "hormone-trt": {
        "name": "Hormone / TRT Clinics",
        "queries": [
            "TRT clinic",
            "testosterone replacement therapy",
            "hormone therapy clinic",
            "hormone optimization clinic",
            "HRT clinic",
            "bioidentical hormone therapy",
            "mens hormone clinic",
        ],
    },
    "medspa": {
        "name": "MedSpa / Aesthetics",
        "queries": [
            "medspa",
            "medical spa",
            "botox clinic",
            "IV therapy clinic",
            "aesthetic clinic",
            "regenerative medicine clinic",
            "PRP therapy",
        ],
    },
    "weight-glp1": {
        "name": "Weight Management / GLP-1",
        "queries": [
            "weight loss clinic",
            "GLP-1 clinic",
            "semaglutide clinic",
            "Wegovy clinic",
            "medical weight loss",
            "obesity clinic",
            "weight management doctor",
        ],
    },
    "dpc-cashpay": {
        "name": "DPC / Cash-Pay Primary Care",
        "queries": [
            "direct primary care",
            "cash pay clinic",
            "concierge medicine",
            "DPC clinic",
            "membership medicine",
            "cash pay doctor",
            "self pay clinic",
        ],
    },
    "longevity-specialty": {
        "name": "Longevity / Specialty",
        "queries": [
            "longevity clinic",
            "longevity medicine",
            "DEXA scan",
            "VO2 max testing",
            "peptide therapy clinic",
            "NAD therapy clinic",
            "functional medicine",
            "anti-aging clinic",
        ],
    },
}

# =============================================================================
# SEARCH HELPERS
# =============================================================================


def get_states_by_tier(tier: int) -> dict:
    """Get all states in a given tier (1-4)."""
    return {k: v for k, v in US_STATES.items() if v["tier"] == tier}


def get_all_regions(state_abbrev: str = None) -> list[dict]:
    """Get all regions, optionally filtered by state abbreviation."""
    results = []
    states = {state_abbrev: US_STATES[state_abbrev]} if state_abbrev else US_STATES
    for abbrev, state in states.items():
        for reg_key, region in state["regions"].items():
            results.append({
                "state_abbrev": abbrev,
                "state_name": state["name"],
                "tier": state["tier"],
                "region_key": reg_key,
                "region_name": region["name"],
                "cities": region["cities"],
            })
    return results


def get_clay_searches(
    clinic_type_key: str = None,
    state_abbrev: str = None,
    region_key: str = None,
    tier: int = None,
    queries_per_type: int = 3,
    cities_per_region: int = 2,
) -> list[dict]:
    """Generate search queries for Clay Google Maps prospecting.

    Clay exports max 200 results per search. Large metros are pre-split into
    quadrants so each zone stays under the cap.

    Args:
        clinic_type_key: Filter to one clinic type (e.g. "hormone-trt")
        state_abbrev: Filter to one state (e.g. "CA", "TX")
        region_key: Filter to one region within a state
        tier: Filter to states in a tier (1-4)
        queries_per_type: How many search queries per clinic type (default 3)
        cities_per_region: How many cities per region (default 2)

    Returns list of dicts with 'query', 'location', 'clinic_type', 'state', 'region'.
    """
    searches = []
    types = {clinic_type_key: CLINIC_TYPES[clinic_type_key]} if clinic_type_key else CLINIC_TYPES

    if state_abbrev:
        states = {state_abbrev: US_STATES[state_abbrev]}
    elif tier:
        states = get_states_by_tier(tier)
    else:
        states = US_STATES

    for abbrev, state in states.items():
        regions = state["regions"]
        if region_key:
            regions = {region_key: regions[region_key]}

        for reg_key, region in regions.items():
            for type_key, clinic_type in types.items():
                for query in clinic_type["queries"][:queries_per_type]:
                    for city in region["cities"][:cities_per_region]:
                        searches.append({
                            "query": f"{query} near {city}",
                            "location": city,
                            "clinic_type": type_key,
                            "state": abbrev,
                            "region": reg_key,
                        })
    return searches


def get_search_stats() -> dict:
    """Get summary stats about the search scope."""
    total_states = len(US_STATES)
    total_regions = sum(len(s["regions"]) for s in US_STATES.values())
    total_types = len(CLINIC_TYPES)

    by_tier = {}
    for tier_num in [1, 2, 3, 4]:
        tier_states = get_states_by_tier(tier_num)
        tier_regions = sum(len(s["regions"]) for s in tier_states.values())
        by_tier[tier_num] = {
            "states": len(tier_states),
            "regions": tier_regions,
            "batches": tier_regions * total_types,
            "state_list": ", ".join(sorted(tier_states.keys())),
        }

    return {
        "total_states": total_states,
        "total_regions": total_regions,
        "total_clinic_types": total_types,
        "total_batches": total_regions * total_types,
        "by_tier": by_tier,
    }


# =============================================================================
# METRO SEARCH ZONES
# Pre-defined neighborhood/suburb breakdowns for major metros.
# These override the generic city lists when the agent runs Clay searches.
#
# Density tiers:
#   A (10M+): 10-15 zones — NYC, LA, Chicago
#   B (5-10M): 6-10 zones — Houston, DFW, South FL, Philly, Atlanta, Phoenix
#   C (2-5M): 4-6 zones — Detroit, Tampa, Denver, Austin, San Antonio, etc.
#   D (<2M): 1-2 zones — use the region city list as-is, no expansion needed
#
# Zone names are what you'd type into Clay/Google Maps: "TRT clinic near [zone]"
# =============================================================================

METRO_ZONES = {
    # ── DENSITY A: 10M+ metros (10-15 zones each) ────────────────
    "los-angeles": {
        "metro_pop": "13M",
        "density": "A",
        "zones": [
            # Westside
            "Santa Monica, CA", "Beverly Hills, CA", "West Hollywood, CA",
            "Brentwood Los Angeles, CA", "Culver City, CA",
            # Central / Hollywood
            "Hollywood, CA", "Los Feliz, CA", "Downtown Los Angeles, CA",
            # Valley
            "Sherman Oaks, CA", "Encino, CA", "Woodland Hills, CA",
            "Burbank, CA", "Studio City, CA",
            # South Bay
            "Manhattan Beach, CA", "Torrance, CA", "Hermosa Beach, CA",
            # East / SGV
            "Pasadena, CA", "Glendale, CA", "Arcadia, CA",
            # Long Beach
            "Long Beach, CA",
            # OC North
            "Anaheim, CA", "Fullerton, CA",
            # OC South / Coast
            "Irvine, CA", "Newport Beach, CA", "Costa Mesa, CA",
            "Huntington Beach, CA", "Laguna Beach, CA",
        ],
    },
    "new-york-city": {
        "metro_pop": "20M",
        "density": "A",
        "zones": [
            # Manhattan
            "Upper East Side, New York, NY", "Upper West Side, New York, NY",
            "Midtown Manhattan, New York, NY", "SoHo, New York, NY",
            "Tribeca, New York, NY", "Financial District, New York, NY",
            # Brooklyn
            "Williamsburg, Brooklyn, NY", "Park Slope, Brooklyn, NY",
            "Brooklyn Heights, Brooklyn, NY", "DUMBO, Brooklyn, NY",
            # Queens
            "Astoria, Queens, NY", "Flushing, Queens, NY",
            # Other boroughs
            "Bronx, NY", "Staten Island, NY",
            # Long Island
            "Garden City, NY", "Great Neck, NY", "Huntington, NY", "Smithtown, NY",
            # Westchester
            "White Plains, NY", "Scarsdale, NY", "Greenwich, CT",
        ],
    },
    "chicago": {
        "metro_pop": "9.5M",
        "density": "A",
        "zones": [
            # Downtown / Near North
            "River North, Chicago, IL", "Gold Coast, Chicago, IL",
            "Lincoln Park, Chicago, IL", "Lakeview, Chicago, IL",
            # North Shore suburbs
            "Evanston, IL", "Highland Park, IL", "Northbrook, IL",
            "Arlington Heights, IL",
            # NW suburbs
            "Schaumburg, IL", "Palatine, IL", "Buffalo Grove, IL",
            # Western suburbs
            "Naperville, IL", "Oak Brook, IL", "Hinsdale, IL",
            # South suburbs
            "Oak Lawn, IL", "Orland Park, IL",
            # Hyde Park / South Side
            "Hyde Park, Chicago, IL",
        ],
    },

    # ── DENSITY B: 5-10M metros (6-10 zones each) ────────────────
    "houston": {
        "metro_pop": "7.5M",
        "density": "B",
        "zones": [
            # Inner Loop / Central
            "Houston Heights, TX", "Montrose Houston, TX", "Galleria Houston, TX",
            "River Oaks Houston, TX", "Bellaire, TX",
            # North
            "The Woodlands, TX", "Spring, TX", "Tomball, TX",
            # West
            "Katy, TX", "Sugar Land, TX", "Missouri City, TX",
            # South / Southeast
            "Pearland, TX", "League City, TX", "Clear Lake, TX",
            # Pasadena / East
            "Pasadena, TX",
        ],
    },
    "dfw-dallas": {
        "metro_pop": "8M",
        "density": "B",
        "zones": [
            # Dallas Central
            "Uptown Dallas, TX", "Highland Park, TX", "University Park, TX",
            # North Dallas
            "Plano, TX", "Frisco, TX", "McKinney, TX",
            # East / Richardson
            "Richardson, TX", "Garland, TX", "Rockwall, TX",
            # Fort Worth
            "Fort Worth, TX", "Arlington, TX", "Southlake, TX",
            "Grapevine, TX", "Keller, TX",
        ],
    },
    "south-florida": {
        "metro_pop": "6.1M",
        "density": "B",
        "zones": [
            # Miami
            "Brickell Miami, FL", "Coral Gables, FL", "Miami Beach, FL",
            "Aventura, FL", "Coconut Grove, FL", "Doral, FL",
            # Broward
            "Fort Lauderdale, FL", "Weston, FL", "Plantation, FL",
            "Hollywood, FL",
            # Palm Beach
            "West Palm Beach, FL", "Boca Raton, FL", "Delray Beach, FL",
            "Jupiter, FL",
        ],
    },
    "philadelphia": {
        "metro_pop": "6.2M",
        "density": "B",
        "zones": [
            # Center City
            "Center City Philadelphia, PA", "Rittenhouse Square, PA",
            # Main Line
            "Wayne, PA", "King of Prussia, PA", "Bryn Mawr, PA",
            # North / NE
            "Doylestown, PA", "Langhorne, PA",
            # West Chester
            "West Chester, PA",
            # South Jersey side
            "Cherry Hill, NJ", "Haddonfield, NJ",
        ],
    },
    "atlanta": {
        "metro_pop": "6M",
        "density": "B",
        "zones": [
            # Central
            "Buckhead Atlanta, GA", "Midtown Atlanta, GA", "Decatur, GA",
            # North
            "Alpharetta, GA", "Sandy Springs, GA", "Roswell, GA",
            "Johns Creek, GA", "Dunwoody, GA",
            # NW
            "Marietta, GA", "Kennesaw, GA", "Smyrna, GA",
            # South
            "Peachtree City, GA", "Newnan, GA",
        ],
    },
    "phoenix": {
        "metro_pop": "5M",
        "density": "B",
        "zones": [
            # Scottsdale (affluent, high clinic density)
            "Scottsdale, AZ", "Paradise Valley, AZ",
            # Central Phoenix
            "Phoenix, AZ", "Arcadia Phoenix, AZ",
            # East Valley
            "Tempe, AZ", "Mesa, AZ", "Chandler, AZ", "Gilbert, AZ",
            # West Valley
            "Glendale, AZ", "Peoria, AZ",
        ],
    },

    # ── DENSITY C: 2-5M metros (4-6 zones each) ──────────────────
    "detroit": {
        "metro_pop": "4.4M",
        "density": "C",
        "zones": [
            "Birmingham, MI", "Troy, MI", "Royal Oak, MI",
            "Grosse Pointe, MI", "Novi, MI", "Farmington Hills, MI",
            "Ann Arbor, MI",
        ],
    },
    "tampa-bay": {
        "metro_pop": "3M",
        "density": "C",
        "zones": [
            "Tampa, FL", "South Tampa, FL", "Wesley Chapel, FL",
            "St. Petersburg, FL", "Clearwater, FL",
        ],
    },
    "san-francisco-bay": {
        "metro_pop": "4.7M",
        "density": "C",
        "zones": [
            "San Francisco, CA", "Marin County, CA",
            "Oakland, CA", "Walnut Creek, CA",
            "Palo Alto, CA", "Mountain View, CA",
            "San Jose, CA", "Cupertino, CA",
        ],
    },
    "denver": {
        "metro_pop": "3M",
        "density": "C",
        "zones": [
            "Denver, CO", "Cherry Creek Denver, CO",
            "Highlands Ranch, CO", "Littleton, CO",
            "Aurora, CO", "Boulder, CO",
        ],
    },
    "austin": {
        "metro_pop": "2.4M",
        "density": "C",
        "zones": [
            "Austin, TX", "West Lake Hills, TX",
            "Round Rock, TX", "Cedar Park, TX", "Georgetown, TX",
        ],
    },
    "san-antonio": {
        "metro_pop": "2.7M",
        "density": "C",
        "zones": [
            "San Antonio, TX", "Alamo Heights, TX",
            "New Braunfels, TX", "Boerne, TX",
        ],
    },
    "charlotte": {
        "metro_pop": "2.8M",
        "density": "C",
        "zones": [
            "Charlotte, NC", "SouthPark Charlotte, NC",
            "Mooresville, NC", "Concord, NC", "Gastonia, NC",
        ],
    },
    "orlando": {
        "metro_pop": "2.4M",
        "density": "C",
        "zones": [
            "Orlando, FL", "Winter Park, FL",
            "Lake Mary, FL", "Kissimmee, FL",
        ],
    },
    "nashville": {
        "metro_pop": "2M",
        "density": "C",
        "zones": [
            "Nashville, TN", "Brentwood, TN",
            "Franklin, TN", "Murfreesboro, TN",
        ],
    },
    "columbus-oh": {
        "metro_pop": "2.2M",
        "density": "C",
        "zones": [
            "Columbus, OH", "Dublin, OH",
            "Westerville, OH", "New Albany, OH",
        ],
    },
    "cleveland": {
        "metro_pop": "2.2M",
        "density": "C",
        "zones": [
            "Cleveland, OH", "Beachwood, OH",
            "Lakewood, OH", "Chagrin Falls, OH",
        ],
    },
    "cincinnati": {
        "metro_pop": "2.3M",
        "density": "C",
        "zones": [
            "Cincinnati, OH", "Mason, OH",
            "West Chester, OH", "Hyde Park Cincinnati, OH",
        ],
    },
    "san-diego": {
        "metro_pop": "3.3M",
        "density": "C",
        "zones": [
            "San Diego, CA", "La Jolla, CA",
            "Carlsbad, CA", "Encinitas, CA",
            "Escondido, CA", "Del Mar, CA",
        ],
    },
    "sacramento": {
        "metro_pop": "2.4M",
        "density": "C",
        "zones": [
            "Sacramento, CA", "Elk Grove, CA",
            "Roseville, CA", "Folsom, CA",
        ],
    },
    "pittsburgh": {
        "metro_pop": "2.4M",
        "density": "C",
        "zones": [
            "Pittsburgh, PA", "Shadyside Pittsburgh, PA",
            "Cranberry Township, PA", "Monroeville, PA",
        ],
    },
    "raleigh-durham": {
        "metro_pop": "2M",
        "density": "C",
        "zones": [
            "Raleigh, NC", "Durham, NC", "Chapel Hill, NC", "Cary, NC",
        ],
    },
    "indianapolis": {
        "metro_pop": "2.1M",
        "density": "C",
        "zones": [
            "Indianapolis, IN", "Carmel, IN", "Fishers, IN", "Zionsville, IN",
        ],
    },
    "seattle": {
        "metro_pop": "4M",
        "density": "C",
        "zones": [
            "Seattle, WA", "Bellevue, WA", "Kirkland, WA",
            "Tacoma, WA", "Redmond, WA",
        ],
    },
    "minneapolis": {
        "metro_pop": "3.7M",
        "density": "C",
        "zones": [
            "Minneapolis, MN", "St. Paul, MN",
            "Edina, MN", "Wayzata, MN",
        ],
    },
    "st-louis": {
        "metro_pop": "2.8M",
        "density": "C",
        "zones": [
            "St. Louis, MO", "Clayton, MO",
            "Chesterfield, MO", "Creve Coeur, MO",
        ],
    },
    "kansas-city": {
        "metro_pop": "2.2M",
        "density": "C",
        "zones": [
            "Kansas City, MO", "Overland Park, KS",
            "Olathe, KS", "Lee's Summit, MO",
        ],
    },
    "baltimore": {
        "metro_pop": "2.8M",
        "density": "C",
        "zones": [
            "Baltimore, MD", "Towson, MD",
            "Columbia, MD", "Annapolis, MD",
        ],
    },
    "dc-suburbs": {
        "metro_pop": "3M+",
        "density": "C",
        "zones": [
            "Bethesda, MD", "Rockville, MD",
            "Arlington, VA", "Alexandria, VA",
            "Fairfax, VA", "Tysons, VA",
        ],
    },
    "boston": {
        "metro_pop": "4.9M",
        "density": "C",
        "zones": [
            "Boston, MA", "Cambridge, MA", "Brookline, MA",
            "Newton, MA", "Wellesley, MA",
        ],
    },
    "las-vegas": {
        "metro_pop": "2.3M",
        "density": "C",
        "zones": [
            "Las Vegas, NV", "Henderson, NV",
            "Summerlin Las Vegas, NV",
        ],
    },
}


def get_metro_zones(metro_key: str = None) -> dict:
    """Get metro search zones. If metro_key given, return just that metro."""
    if metro_key:
        return {metro_key: METRO_ZONES[metro_key]}
    return METRO_ZONES


def get_zones_for_density(density: str) -> dict:
    """Get all metros at a given density level (A, B, C)."""
    return {k: v for k, v in METRO_ZONES.items() if v["density"] == density}


def get_metro_clay_searches(
    metro_key: str,
    clinic_type_key: str = None,
    queries_per_type: int = 3,
) -> list[dict]:
    """Generate Clay searches using metro zone neighborhoods instead of broad cities.

    Use this for Density A/B/C metros where the broad city name would hit the 200 cap.
    Each zone is a specific neighborhood/suburb that Google Maps scopes tightly.
    """
    metro = METRO_ZONES[metro_key]
    types = {clinic_type_key: CLINIC_TYPES[clinic_type_key]} if clinic_type_key else CLINIC_TYPES
    searches = []

    for type_key, clinic_type in types.items():
        for query in clinic_type["queries"][:queries_per_type]:
            for zone in metro["zones"]:
                searches.append({
                    "query": f"{query} near {zone}",
                    "location": zone,
                    "clinic_type": type_key,
                    "metro": metro_key,
                    "density": metro["density"],
                })
    return searches


# Legacy compat — flat search list
DISCOVERY_SEARCHES = []
for _clinic_type in CLINIC_TYPES.values():
    for _query in _clinic_type["queries"]:
        DISCOVERY_SEARCHES.append((_query, "California"))

# =============================================================================
# VERIFICATION KEYWORDS
# =============================================================================

POSITIVE_KEYWORDS = [
    # DPC / cash-pay
    "direct primary care", "dpc", "cash pay", "cash-pay", "self pay", "self-pay",
    "no insurance", "without insurance", "membership medicine", "concierge medicine",
    "concierge practice", "monthly membership", "membership model",
    "transparent pricing", "flat fee", "affordable care", "price transparency",
    "cash price", "self-pay pricing", "no insurance needed", "no copay",
    "membership-based", "retainer medicine", "subscription medicine",
    "direct care", "direct pay", "cash friendly", "uninsured",
    # Hormone / TRT
    "testosterone", "trt", "hormone replacement", "hrt", "bioidentical",
    "hormone optimization", "low t", "testosterone therapy",
    # MedSpa / aesthetics
    "medspa", "medical spa", "botox", "filler", "iv therapy", "iv drip",
    "aesthetic", "rejuvenation", "prp", "microneedling",
    # Weight / GLP-1
    "glp-1", "semaglutide", "wegovy", "ozempic", "mounjaro", "tirzepatide",
    "medical weight loss", "weight management", "obesity medicine",
    # Longevity / specialty
    "longevity", "dexa", "vo2 max", "peptide therapy", "nad+", "nad therapy",
    "functional medicine", "anti-aging", "biohacking", "health optimization",
    "preventive medicine", "executive physical",
]

NEGATIVE_KEYWORDS = [
    "insurance company", "insurance broker", "insurance agent",
    "medical billing", "billing service", "staffing agency",
    "medical equipment", "equipment supplier", "pharmaceutical",
    "veterinary", "vet clinic", "animal hospital",
    "dental lab", "dental laboratory",
    "nursing home", "assisted living",
    "mental health only", "psychiatry only",
]

# =============================================================================
# ENRICHMENT FIELDS
# =============================================================================

ENRICHMENT_FIELDS = {
    "pricing_model": "membership, per-visit, bundled, sliding scale, or unknown",
    "monthly_membership_cost": "dollar amount if membership model, e.g. $99/mo",
    "visit_cost": "cost per visit if per-visit model",
    "specialties": "list of medical specialties offered",
    "services": "list of specific services (labs, imaging, procedures, etc.)",
    "accepts_hsa_fsa": "yes, no, or unknown",
    "offers_telehealth": "yes, no, or unknown",
    "same_day_appointments": "yes, no, or unknown",
    "lab_on_site": "yes, no, or unknown",
    "imaging_on_site": "yes, no, or unknown",
    "also_accepts_insurance": "yes, no, or unknown",
    "insurance_networks": "list of accepted insurance networks if applicable",
    "hours": "business hours if available",
    "languages_spoken": "languages other than English",
    "provider_names": "names of doctors/providers",
    "year_established": "year the practice was established",
}

# =============================================================================
# PIPELINE SETTINGS
# =============================================================================

CONCURRENT_CRAWLS = 5
BATCH_DELAY = 2.0
PAGE_TIMEOUT = 30
VERIFICATION_THRESHOLD = 0.6
CLAUDE_MODEL = "claude-haiku-4-5-20251001"
MAX_TOKENS = 1024
