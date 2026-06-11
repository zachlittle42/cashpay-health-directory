#!/usr/bin/env python3
"""
Step 4: Enrich verified listings with detailed data from their websites.

KEY LESSON FROM THE VIDEO: Do enrichment ONE PASS AT A TIME.
Don't ask for everything at once — it degrades quality.

This script runs a single enrichment pass. Run it multiple times with different
--fields to build up the data incrementally.

Passes:
  1. python step4_enrich.py data/verified/verified_matches.json --fields pricing
  2. python step4_enrich.py data/enriched/enriched_pricing.json --fields services
  3. python step4_enrich.py data/enriched/enriched_services.json --fields features
  4. python step4_enrich.py data/enriched/enriched_features.json --fields contact

Each pass crawls the website AND uses Claude Haiku to extract structured data.
Cost: ~$0.03-0.05 per listing per pass (Haiku is very cheap).
"""

import argparse
import asyncio
import json
import re
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
load_dotenv()

from config import (
    CONCURRENT_CRAWLS,
    BATCH_DELAY,
    PAGE_TIMEOUT,
    CLAUDE_MODEL,
    MAX_TOKENS,
)

DATA_DIR = Path(__file__).parent / "data" / "enriched"
DATA_DIR.mkdir(parents=True, exist_ok=True)

# =============================================================================
# ENRICHMENT PASS DEFINITIONS
# =============================================================================

ENRICHMENT_PASSES = {
    "pricing": {
        "description": "Extract pricing model and costs",
        "prompt": """From this clinic's website, extract pricing information.

Website content:
{content}

Return JSON:
{{
  "pricing_model": "membership|per-visit|bundled|sliding-scale|unknown",
  "monthly_membership_cost": "$XX/mo or null",
  "visit_cost": "$XX or null",
  "annual_cost": "$XX/yr or null",
  "lab_pricing": "included in membership, extra cost, or null",
  "pricing_notes": "any relevant pricing details",
  "accepts_hsa_fsa": true/false/null,
  "also_accepts_insurance": true/false/null,
  "insurance_networks": ["list of networks"] or []
}}""",
    },

    "services": {
        "description": "Extract services and specialties offered",
        "prompt": """From this clinic's website, extract all services and specialties.

Website content:
{content}

Return JSON:
{{
  "specialties": ["primary care", "pediatrics", etc.],
  "services": ["annual physical", "lab work", "chronic disease management", etc.],
  "procedures_on_site": ["list of procedures done in-office"],
  "lab_on_site": true/false/null,
  "imaging_on_site": true/false/null,
  "pharmacy_on_site": true/false/null,
  "offers_telehealth": true/false/null,
  "same_day_appointments": true/false/null
}}""",
    },

    "features": {
        "description": "Extract deal-breaker features and differentiators",
        "prompt": """From this clinic's website, extract features that help patients decide.

Website content:
{content}

Return JSON:
{{
  "provider_names": ["Dr. Name (specialty)", ...],
  "provider_count": number or null,
  "patient_cap": "number of patients accepted or null",
  "hours": "business hours or null",
  "weekend_hours": true/false/null,
  "evening_hours": true/false/null,
  "languages_spoken": ["English", "Spanish", etc.],
  "year_established": year or null,
  "accepting_new_patients": true/false/null,
  "unique_features": ["anything notable about this clinic"]
}}""",
    },

    "contact": {
        "description": "Extract contact and location details",
        "prompt": """From this clinic's website, extract contact and location information.

Website content:
{content}

Return JSON:
{{
  "phone": "phone number",
  "email": "email address or null",
  "address": "full street address",
  "city": "city",
  "state": "state",
  "zip": "zip code",
  "service_area": ["list of cities/regions served"],
  "multiple_locations": true/false,
  "location_count": number,
  "booking_url": "online booking URL or null"
}}""",
    },
}


def load_data(filepath: str) -> list[dict]:
    """Load data from JSON."""
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


async def enrich_single(
    crawler,
    crawler_config,
    record: dict,
    pass_name: str,
    pass_config: dict,
) -> dict:
    """Crawl one website and extract structured data."""
    import anthropic

    name = record.get("name", "Unknown")
    url = record.get("website", "")

    if not url:
        return record

    try:
        # Crawl the website
        result = await crawler.arun(url=url, config=crawler_config)

        if not result.success or not result.markdown:
            print(f"    SKIP {name}: crawl failed")
            return record

        # Truncate content to save tokens (5000 chars ≈ 1500 tokens)
        content = result.markdown[:5000]

        # Call Claude Haiku for structured extraction
        client = anthropic.Anthropic()
        prompt = pass_config["prompt"].format(content=content)

        response = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=MAX_TOKENS,
            messages=[{"role": "user", "content": prompt}],
        )

        text = response.content[0].text.strip()

        # Extract JSON from response
        json_match = re.search(r'\{.*\}', text, re.DOTALL)
        if json_match:
            extracted = json.loads(json_match.group())
            # Merge into the record under the pass name
            if "enrichment" not in record:
                record["enrichment"] = {}
            record["enrichment"][pass_name] = extracted
            record["enrichment"][f"{pass_name}_at"] = datetime.now().isoformat()
            print(f"    OK {name}")
        else:
            print(f"    WARN {name}: couldn't parse LLM response")

    except json.JSONDecodeError:
        print(f"    WARN {name}: invalid JSON from LLM")
    except Exception as e:
        print(f"    ERROR {name}: {e}")

    return record


async def enrich_batch(records: list[dict], pass_name: str, pass_config: dict) -> list[dict]:
    """Enrich all records for a single pass."""
    from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig

    browser_config = BrowserConfig(headless=True, verbose=False)
    crawler_config = CrawlerRunConfig(
        page_timeout=PAGE_TIMEOUT * 1000,
        word_count_threshold=50,
        remove_overlay_elements=True,
    )

    results = []
    total = len(records)
    success = 0

    async with AsyncWebCrawler(config=browser_config) as crawler:
        for i in range(0, total, CONCURRENT_CRAWLS):
            batch = records[i:i + CONCURRENT_CRAWLS]
            batch_num = i // CONCURRENT_CRAWLS + 1
            total_batches = (total + CONCURRENT_CRAWLS - 1) // CONCURRENT_CRAWLS

            print(f"\n  Batch {batch_num}/{total_batches}...")

            tasks = []
            for record in batch:
                task = enrich_single(crawler, crawler_config, record, pass_name, pass_config)
                tasks.append(task)

            batch_results = await asyncio.gather(*tasks)
            for r in batch_results:
                results.append(r)
                if r.get("enrichment", {}).get(pass_name):
                    success += 1

            if i + CONCURRENT_CRAWLS < total:
                await asyncio.sleep(BATCH_DELAY)

    print(f"\n  --- Enrichment Summary ---")
    print(f"  Total processed: {total}")
    print(f"  Successfully enriched: {success}")
    print(f"  Failed/skipped: {total - success}")

    return results


def main():
    parser = argparse.ArgumentParser(description="Step 4: Enrich listings")
    parser.add_argument("input_file", help="Path to verified/enriched data (JSON)")
    parser.add_argument("--fields", required=True,
                        choices=list(ENRICHMENT_PASSES.keys()),
                        help="Which enrichment pass to run")
    parser.add_argument("--limit", type=int, default=None,
                        help="Only process first N records (for testing)")
    parser.add_argument("--output", default=None, help="Output filename")
    args = parser.parse_args()

    pass_config = ENRICHMENT_PASSES[args.fields]
    print(f"\nEnrichment pass: {args.fields}")
    print(f"  {pass_config['description']}")
    print(f"  Model: {CLAUDE_MODEL}")

    print(f"\nLoading: {args.input_file}")
    records = load_data(args.input_file)
    print(f"  Loaded {len(records)} records")

    if args.limit:
        records = records[:args.limit]
        print(f"  Limited to {len(records)} records (--limit)")

    # Skip records that already have this enrichment pass
    to_enrich = [r for r in records if args.fields not in r.get("enrichment", {})]
    already_done = len(records) - len(to_enrich)
    if already_done:
        print(f"  Skipping {already_done} already-enriched records")

    if not to_enrich:
        print("  Nothing to enrich!")
        return

    print(f"  Processing {len(to_enrich)} records...")
    enriched = asyncio.run(enrich_batch(to_enrich, args.fields, pass_config))

    # Merge back records that were already enriched
    already_enriched = [r for r in records if args.fields in r.get("enrichment", {})]
    all_results = already_enriched + enriched

    output_name = args.output or f"enriched_{args.fields}"
    output_path = DATA_DIR / f"{output_name}.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(all_results, f, indent=2)
    print(f"\n  Saved to {output_path}")

    # Estimate cost
    token_estimate = len(to_enrich) * 2000  # ~2K tokens per request
    cost_estimate = token_estimate * 0.25 / 1_000_000  # Haiku input pricing
    print(f"  Estimated cost: ~${cost_estimate:.2f}")


if __name__ == "__main__":
    main()
