#!/usr/bin/env python3
"""
Step 5: Export enriched data to formats the Next.js app can consume.

Generates:
  - TypeScript provider data file (matching existing Provider type)
  - JSON for database import (Prisma-compatible)
  - CSV for manual review/editing

Usage:
  python step5_export.py data/enriched/enriched_features.json
  python step5_export.py data/enriched/enriched_features.json --format all
"""

import argparse
import csv
import json
import re
from datetime import datetime
from pathlib import Path

DATA_DIR = Path(__file__).parent / "data" / "exported"
DATA_DIR.mkdir(parents=True, exist_ok=True)

# Path to the web app's lib directory
WEB_LIB_DIR = Path(__file__).parent.parent.parent / "src" / "lib"


def load_data(filepath: str) -> list[dict]:
    """Load enriched data from JSON."""
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')


def determine_category(record: dict) -> str:
    """Determine the best category for a record based on enrichment data."""
    enrichment = record.get("enrichment", {})
    services = enrichment.get("services", {})
    pricing = enrichment.get("pricing", {})

    specialties = [s.lower() for s in services.get("specialties", [])]
    pricing_model = pricing.get("pricing_model", "unknown")

    # If it has a membership model, it's likely DPC/longevity
    if pricing_model == "membership":
        if any(s in str(specialties) for s in ["longevity", "anti-aging", "optimization"]):
            return "longevity"

    # Default to a general cash-pay category — you can expand this
    return "dpc"  # Direct Primary Care


def to_provider(record: dict) -> dict:
    """Convert enriched record to the Provider format used by the web app."""
    enrichment = record.get("enrichment", {})
    pricing = enrichment.get("pricing", {})
    services_data = enrichment.get("services", {})
    features = enrichment.get("features", {})
    contact = enrichment.get("contact", {})
    verification = record.get("verification", {})

    name = record.get("name", "").strip()
    city = contact.get("city") or record.get("city", "")
    state = contact.get("state") or record.get("state", "")

    # Build pricing display
    pricing_model = pricing.get("pricing_model", "unknown")
    membership = pricing.get("monthly_membership_cost")
    visit_cost = pricing.get("visit_cost")

    if membership:
        pricing_display = f"{membership}"
    elif visit_cost:
        pricing_display = f"{visit_cost}/visit"
    else:
        pricing_display = "Contact for pricing"

    # Build services list
    all_services = services_data.get("services", []) + services_data.get("specialties", [])
    if not all_services:
        all_services = ["Primary Care"]

    # Build pros/cons from enrichment data
    pros = []
    cons = []

    if pricing_model == "membership":
        pros.append("Predictable monthly cost")
    if services_data.get("offers_telehealth"):
        pros.append("Telehealth available")
    if services_data.get("same_day_appointments"):
        pros.append("Same-day appointments")
    if services_data.get("lab_on_site"):
        pros.append("On-site lab")
    if pricing.get("accepts_hsa_fsa"):
        pros.append("Accepts HSA/FSA")
    if not pricing.get("also_accepts_insurance"):
        cons.append("Does not accept insurance")
    if features.get("patient_cap"):
        pros.append(f"Patient cap: {features['patient_cap']}")

    # Build bestFor
    best_for = []
    if pricing_model == "membership":
        best_for.append("Those wanting predictable costs")
    if services_data.get("offers_telehealth"):
        best_for.append("Remote consultations")
    if "pediatrics" in str(all_services).lower():
        best_for.append("Families with children")

    # Build description
    description = f"{name} is a {'cash-pay' if pricing_model != 'unknown' else ''} healthcare provider in {city}, {state}."
    if features.get("unique_features"):
        description += f" {features['unique_features'][0]}" if features["unique_features"] else ""

    return {
        "slug": slugify(name),
        "name": name,
        "description": description,
        "category": determine_category(record),
        "services": all_services[:10],  # Cap at 10
        "pricingDisplay": pricing_display,
        "pricingNotes": pricing.get("pricing_notes", ""),
        "pricingComparison": "",
        "deliveryModel": "hybrid" if services_data.get("offers_telehealth") else "in_person_local",
        "geographicCoverage": contact.get("service_area", [city, state]) if contact.get("service_area") else [city, state],
        "url": record.get("website", ""),
        "referralType": "direct_link",
        "ourTake": "",  # To be filled in editorially
        "bestFor": best_for if best_for else ["Cash-pay patients"],
        "pros": pros if pros else ["Cash-pay pricing available"],
        "cons": cons if cons else [],
        "featured": False,
        "lastVerified": datetime.now().strftime("%Y-%m-%d"),
        # Extra enrichment data (not in current Provider type but useful)
        "_enrichment": {
            "pricing_model": pricing_model,
            "monthly_cost": membership,
            "visit_cost": visit_cost,
            "accepts_hsa_fsa": pricing.get("accepts_hsa_fsa"),
            "accepts_insurance": pricing.get("also_accepts_insurance"),
            "insurance_networks": pricing.get("insurance_networks", []),
            "offers_telehealth": services_data.get("offers_telehealth"),
            "same_day_appointments": services_data.get("same_day_appointments"),
            "lab_on_site": services_data.get("lab_on_site"),
            "providers": features.get("provider_names", []),
            "languages": features.get("languages_spoken", []),
            "hours": features.get("hours"),
            "year_established": features.get("year_established"),
            "accepting_new_patients": features.get("accepting_new_patients"),
            "google_rating": record.get("google_rating"),
            "review_count": record.get("review_count"),
            "latitude": record.get("latitude"),
            "longitude": record.get("longitude"),
            "verification_confidence": verification.get("confidence"),
        },
    }


def export_typescript(providers: list[dict], output_path: Path):
    """Export as TypeScript file matching existing provider data pattern."""
    # Group by state for organization
    by_state = {}
    for p in providers:
        state = p.get("geographicCoverage", ["Unknown"])
        state_name = state[-1] if state else "Unknown"  # Last item is usually state
        by_state.setdefault(state_name, []).append(p)

    lines = [
        "// Auto-generated by scraping pipeline — do not edit manually",
        f"// Generated: {datetime.now().isoformat()}",
        f"// Total providers: {len(providers)}",
        "",
        "import { Provider } from './types';",
        "",
    ]

    for state, state_providers in sorted(by_state.items()):
        lines.append(f"// === {state} ({len(state_providers)} providers) ===")

    lines.append("")
    lines.append(f"const scrapedProviders: Provider[] = [")

    for p in providers:
        # Remove _enrichment for the TS export
        clean = {k: v for k, v in p.items() if not k.startswith("_")}
        lines.append(f"  {json.dumps(clean, indent=2).replace(chr(10), chr(10) + '  ')},")

    lines.append("];")
    lines.append("")
    lines.append("export default scrapedProviders;")

    with open(output_path, "w") as f:
        f.write("\n".join(lines))
    print(f"  TypeScript: {output_path}")


def export_json(providers: list[dict], output_path: Path):
    """Export as JSON for database import."""
    with open(output_path, "w") as f:
        json.dump(providers, f, indent=2)
    print(f"  JSON: {output_path}")


def export_csv(providers: list[dict], output_path: Path):
    """Export as CSV for manual review."""
    if not providers:
        return

    # Flatten the data for CSV
    flat = []
    for p in providers:
        row = {
            "name": p["name"],
            "slug": p["slug"],
            "category": p["category"],
            "city": ", ".join(p.get("geographicCoverage", [])[:2]),
            "pricing": p["pricingDisplay"],
            "pricing_model": p.get("_enrichment", {}).get("pricing_model", ""),
            "monthly_cost": p.get("_enrichment", {}).get("monthly_cost", ""),
            "services": "; ".join(p.get("services", [])[:5]),
            "telehealth": p.get("_enrichment", {}).get("offers_telehealth", ""),
            "hsa_fsa": p.get("_enrichment", {}).get("accepts_hsa_fsa", ""),
            "insurance": p.get("_enrichment", {}).get("accepts_insurance", ""),
            "google_rating": p.get("_enrichment", {}).get("google_rating", ""),
            "reviews": p.get("_enrichment", {}).get("review_count", ""),
            "website": p["url"],
            "confidence": p.get("_enrichment", {}).get("verification_confidence", ""),
        }
        flat.append(row)

    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=flat[0].keys())
        writer.writeheader()
        writer.writerows(flat)
    print(f"  CSV: {output_path}")


def main():
    parser = argparse.ArgumentParser(description="Step 5: Export enriched data")
    parser.add_argument("input_file", help="Path to enriched data (JSON)")
    parser.add_argument("--format", choices=["ts", "json", "csv", "all"], default="all",
                        help="Export format")
    parser.add_argument("--output", default=None, help="Output filename prefix")
    args = parser.parse_args()

    print(f"\nLoading: {args.input_file}")
    records = load_data(args.input_file)
    print(f"  Loaded {len(records)} records")

    # Convert to provider format
    providers = [to_provider(r) for r in records]
    print(f"  Converted {len(providers)} providers")

    prefix = args.output or f"providers_{datetime.now().strftime('%Y%m%d')}"

    if args.format in ("json", "all"):
        export_json(providers, DATA_DIR / f"{prefix}.json")

    if args.format in ("csv", "all"):
        export_csv(providers, DATA_DIR / f"{prefix}.csv")

    if args.format in ("ts", "all"):
        export_typescript(providers, DATA_DIR / f"{prefix}.ts")

    print(f"\n  Done! Review the CSV, then import the JSON/TS into the app.")


if __name__ == "__main__":
    main()
