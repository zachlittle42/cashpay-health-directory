#!/usr/bin/env python3
"""
Step 2: Clean raw discovery data using rules (no API needed).

Removes:
- Entries with no business name or address
- Permanently closed businesses
- Obvious non-matches (big box retailers, insurance companies, etc.)
- Duplicates (by name + address)
- Entries with no website (can't verify in step 3)

Usage:
  python step2_clean.py data/raw/discovery_all_20260218.json
  python step2_clean.py data/raw/discovery_all_20260218.csv
"""

import argparse
import csv
import json
import re
import sys
from pathlib import Path

from config import NEGATIVE_KEYWORDS

DATA_DIR = Path(__file__).parent / "data" / "cleaned"
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Big box / chain stores to exclude
EXCLUDE_CHAINS = [
    "walmart", "target", "cvs", "walgreens", "rite aid",
    "costco", "sam's club", "kroger", "safeway", "albertsons",
    "amazon", "minute clinic", "minuteclinic",
]

# Status values that mean the business is closed
CLOSED_STATUSES = [
    "permanently_closed", "closed_permanently", "temporarily_closed",
    "CLOSED_PERMANENTLY", "CLOSED_TEMPORARILY",
]


def load_data(filepath: str) -> list[dict]:
    """Load data from JSON or CSV."""
    path = Path(filepath)
    if path.suffix == ".json":
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    elif path.suffix == ".csv":
        with open(path, "r", encoding="utf-8-sig") as f:
            return list(csv.DictReader(f))
    else:
        print(f"ERROR: Unsupported file format: {path.suffix}")
        sys.exit(1)


def clean_records(records: list[dict]) -> tuple[list[dict], dict]:
    """Apply cleaning rules. Returns (cleaned_records, removal_stats)."""
    stats = {
        "input": len(records),
        "no_name": 0,
        "no_address": 0,
        "no_website": 0,
        "closed": 0,
        "chain_store": 0,
        "negative_keyword": 0,
        "duplicate": 0,
        "output": 0,
    }

    cleaned = []
    seen = set()

    for record in records:
        name = record.get("name", "").strip()
        address = record.get("address", "").strip()
        website = record.get("website", "").strip()
        status = record.get("status", "").strip()
        category = record.get("category", "").strip().lower()

        # Rule 1: Must have a name
        if not name:
            stats["no_name"] += 1
            continue

        # Rule 2: Must have an address
        if not address:
            stats["no_address"] += 1
            continue

        # Rule 3: Must have a website (needed for step 3 verification)
        if not website or website in ("null", "None", ""):
            stats["no_website"] += 1
            continue

        # Rule 4: Not permanently/temporarily closed
        if status in CLOSED_STATUSES:
            stats["closed"] += 1
            continue

        # Rule 5: Not a chain store / big box retailer
        name_lower = name.lower()
        if any(chain in name_lower for chain in EXCLUDE_CHAINS):
            stats["chain_store"] += 1
            continue

        # Rule 6: No negative keyword matches in name or category
        combined = f"{name_lower} {category}"
        if any(neg in combined for neg in NEGATIVE_KEYWORDS):
            stats["negative_keyword"] += 1
            continue

        # Rule 7: Deduplicate by name + city
        city = record.get("city", "").strip().lower()
        dedup_key = (re.sub(r'[^a-z0-9]', '', name_lower), city)
        if dedup_key in seen:
            stats["duplicate"] += 1
            continue
        seen.add(dedup_key)

        # Normalize the website URL
        if website and not website.startswith("http"):
            website = f"https://{website}"
        record["website"] = website

        cleaned.append(record)

    stats["output"] = len(cleaned)
    return cleaned, stats


def save_results(records: list[dict], output_name: str):
    """Save cleaned results."""
    if not records:
        print("  No records to save.")
        return

    # CSV
    csv_path = DATA_DIR / f"{output_name}.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=records[0].keys())
        writer.writeheader()
        writer.writerows(records)

    # JSON
    json_path = DATA_DIR / f"{output_name}.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)

    print(f"  Saved to {csv_path}")
    print(f"  Saved to {json_path}")


def main():
    parser = argparse.ArgumentParser(description="Step 2: Clean raw data")
    parser.add_argument("input_file", help="Path to raw data file (JSON or CSV)")
    parser.add_argument("--output", default=None, help="Output filename (without extension)")
    args = parser.parse_args()

    print(f"\nLoading: {args.input_file}")
    records = load_data(args.input_file)
    print(f"  Loaded {len(records)} records")

    print("\nCleaning...")
    cleaned, stats = clean_records(records)

    print("\n--- Cleaning Results ---")
    print(f"  Input records:      {stats['input']}")
    print(f"  No name:            -{stats['no_name']}")
    print(f"  No address:         -{stats['no_address']}")
    print(f"  No website:         -{stats['no_website']}")
    print(f"  Closed:             -{stats['closed']}")
    print(f"  Chain/big box:      -{stats['chain_store']}")
    print(f"  Negative keyword:   -{stats['negative_keyword']}")
    print(f"  Duplicates:         -{stats['duplicate']}")
    print(f"  ─────────────────────────")
    print(f"  Output records:     {stats['output']}")
    removed = stats['input'] - stats['output']
    pct = (removed / stats['input'] * 100) if stats['input'] > 0 else 0
    print(f"  Removed:            {removed} ({pct:.0f}%)")

    output_name = args.output or Path(args.input_file).stem.replace("discovery", "cleaned")
    save_results(cleaned, output_name)


if __name__ == "__main__":
    main()
