#!/usr/bin/env python3
"""
Step 1: Discover businesses from Google Maps via OutScraper API.

Usage:
  python step1_discover.py                    # Run all searches from config
  python step1_discover.py --query "DPC clinic" --region "California"  # Single search
  python step1_discover.py --from-csv data/raw/manual_export.csv       # Import existing CSV

Requires: OUTSCRAPER_API_KEY in .env file
Free tier: 500 records/month — plenty for a proof of concept.
Sign up at: https://outscraper.com/
"""

import argparse
import csv
import json
import os
import sys
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

DATA_DIR = Path(__file__).parent / "data" / "raw"
DATA_DIR.mkdir(parents=True, exist_ok=True)


def discover_outscraper(query: str, region: str, limit: int = 500) -> list[dict]:
    """Use OutScraper API to search Google Maps."""
    import aiohttp
    import asyncio

    api_key = os.getenv("OUTSCRAPER_API_KEY")
    if not api_key:
        print("ERROR: OUTSCRAPER_API_KEY not found in .env")
        print("Sign up at https://outscraper.com/ (500 free records/month)")
        print("")
        print("Alternative: Export manually from Google Maps and use --from-csv")
        sys.exit(1)

    async def _fetch():
        search = f"{query}, {region}"
        url = "https://api.app.outscraper.com/maps/search-v3"
        params = {
            "query": search,
            "limit": limit,
            "language": "en",
            "region": "us",
        }
        headers = {"X-API-KEY": api_key}

        async with aiohttp.ClientSession() as session:
            print(f"  Searching: '{search}' (limit {limit})...")
            async with session.get(url, params=params, headers=headers) as resp:
                if resp.status != 200:
                    text = await resp.text()
                    print(f"  ERROR {resp.status}: {text[:200]}")
                    return []
                data = await resp.json()

                # OutScraper returns results in a nested structure
                results = []
                for group in data.get("data", []):
                    if isinstance(group, list):
                        results.extend(group)
                    elif isinstance(group, dict):
                        results.append(group)
                return results

    return asyncio.run(_fetch())


def normalize_record(raw: dict) -> dict:
    """Normalize a raw record into our standard format."""
    return {
        "name": raw.get("name", "").strip(),
        "address": raw.get("full_address", raw.get("address", "")).strip(),
        "city": raw.get("city", "").strip(),
        "state": raw.get("state", "").strip(),
        "zip": raw.get("postal_code", raw.get("zip", "")).strip(),
        "phone": raw.get("phone", "").strip(),
        "website": raw.get("site", raw.get("website", "")).strip(),
        "google_rating": raw.get("rating", ""),
        "review_count": raw.get("reviews", raw.get("review_count", "")),
        "category": raw.get("category", raw.get("type", "")).strip(),
        "google_maps_url": raw.get("google_maps_url", raw.get("link", "")).strip(),
        "latitude": raw.get("latitude", ""),
        "longitude": raw.get("longitude", ""),
        "place_id": raw.get("place_id", ""),
        "status": raw.get("business_status", raw.get("status", "")).strip(),
        "search_query": raw.get("_search_query", ""),
        "scraped_at": datetime.now().isoformat(),
    }


def import_csv(csv_path: str) -> list[dict]:
    """Import records from an existing CSV file."""
    records = []
    with open(csv_path, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            records.append(normalize_record(row))
    return records


def save_results(records: list[dict], filename: str):
    """Save results as both CSV and JSON."""
    if not records:
        print("  No records to save.")
        return

    # Deduplicate by name + address
    seen = set()
    unique = []
    for r in records:
        key = (r["name"].lower(), r["address"].lower())
        if key not in seen:
            seen.add(key)
            unique.append(r)

    dupes = len(records) - len(unique)
    if dupes:
        print(f"  Removed {dupes} duplicates.")

    # Save CSV
    csv_path = DATA_DIR / f"{filename}.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=unique[0].keys())
        writer.writeheader()
        writer.writerows(unique)

    # Save JSON
    json_path = DATA_DIR / f"{filename}.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(unique, f, indent=2)

    print(f"  Saved {len(unique)} records to {csv_path}")
    print(f"  Saved {len(unique)} records to {json_path}")
    return unique


def main():
    parser = argparse.ArgumentParser(description="Step 1: Discover businesses")
    parser.add_argument("--query", help="Single search query")
    parser.add_argument("--region", help="Region/state to search")
    parser.add_argument("--from-csv", help="Import from existing CSV file")
    parser.add_argument("--limit", type=int, default=500, help="Max results per query")
    parser.add_argument("--output", default=None, help="Output filename (without extension)")
    args = parser.parse_args()

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    if args.from_csv:
        print(f"\nImporting from CSV: {args.from_csv}")
        records = import_csv(args.from_csv)
        filename = args.output or f"imported_{timestamp}"
        save_results(records, filename)
        return

    if args.query and args.region:
        # Single search
        print(f"\nRunning single search...")
        raw_results = discover_outscraper(args.query, args.region, args.limit)
        for r in raw_results:
            r["_search_query"] = args.query
        records = [normalize_record(r) for r in raw_results]
        filename = args.output or f"discovery_{timestamp}"
        save_results(records, filename)
        return

    # Run all searches from config
    from config import DISCOVERY_SEARCHES

    all_records = []
    print(f"\nRunning {len(DISCOVERY_SEARCHES)} discovery searches...")
    print("=" * 60)

    for query, region in DISCOVERY_SEARCHES:
        raw_results = discover_outscraper(query, region, args.limit)
        for r in raw_results:
            r["_search_query"] = query
        records = [normalize_record(r) for r in raw_results]
        all_records.extend(records)
        print(f"  Found {len(records)} results for '{query}' in {region}")

    print("=" * 60)
    filename = args.output or f"discovery_all_{timestamp}"
    save_results(all_records, filename)
    print(f"\nTotal raw records: {len(all_records)}")


if __name__ == "__main__":
    main()
