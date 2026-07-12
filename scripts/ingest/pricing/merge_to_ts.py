#!/usr/bin/env python3
"""
merge_to_ts.py — Phase 3, step 4.

Converts a reviewed batch `extractions.json` (list of ClinicPrice rows, as
emitted by classify_confidence / run_batch) into a generated TypeScript store
at src/data/pricing/{service}-pricing.ts.

Deterministic: rows are sorted by (clinicId, serviceKey, low) and internal
fields (leading-underscore, e.g. `_penalties`) are stripped, so re-running on
the same batch yields a byte-identical file — clean reviewable diffs. The file
carries a header comment (batch id, asOf, row count) and is marked
"generated — do not hand-edit".

Usage:
  python3 scripts/ingest/pricing/merge_to_ts.py <extractions.json> \
      [--out src/data/pricing/dexa-pricing.ts] \
      [--export-name DEXA_PRICING] \
      [--batch-id pricing-batch-dexa-national]
"""
import argparse
import json
import os
import sys
from datetime import date

# Field order in the emitted object literal. Optional fields are skipped when
# absent so the diff stays minimal. `clinicId`/`serviceKey`/`display` first.
FIELD_ORDER = [
    "clinicId",
    "serviceKey",
    "serviceLabel",
    "display",
    "low",
    "high",
    "unit",
    "priceType",
    "medsIncluded",
    "source",
    "confidence",
    "asOf",
]

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))


def fmt_num(x):
    """75.0 -> '75', 39.95 -> '39.95', 182.5 -> '182.5'. Never scientific."""
    n = float(x)
    if n.is_integer():
        return str(int(n))
    return ("%g" % n)


def js_str(s):
    """A safe TS/JS double-quoted string literal (handles newlines, quotes)."""
    return json.dumps(s, ensure_ascii=False)


def render_citation(cit):
    url = js_str(cit.get("url", ""))
    quote = js_str(cit.get("quote", ""))
    return "{ url: %s, quote: %s }" % (url, quote)


def render_row(row):
    lines = ["  {"]
    for key in FIELD_ORDER:
        if key not in row or row[key] is None:
            continue
        val = row[key]
        if key in ("low", "high", "confidence"):
            lines.append(f"    {key}: {fmt_num(val)},")
        elif key == "medsIncluded":
            lines.append(f"    {key}: {'true' if val else 'false'},")
        else:  # all remaining fields are strings
            lines.append(f"    {key}: {js_str(val)},")
    # citation is a required nested object, emitted after the scalar fields
    if row.get("citation"):
        lines.append(f"    citation: {render_citation(row['citation'])},")
    lines.append("  },")
    return "\n".join(lines)


def sort_key(row):
    low = row.get("low")
    low_num = float(low) if isinstance(low, (int, float)) else float("inf")
    return (row.get("clinicId", ""), row.get("serviceKey", ""), low_num)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("extractions", help="path to a batch extractions.json")
    ap.add_argument("--out", default="src/data/pricing/dexa-pricing.ts",
                    help="output .ts path (relative to repo root or absolute)")
    ap.add_argument("--export-name", default="DEXA_PRICING")
    ap.add_argument("--batch-id", default=None,
                    help="defaults to the extractions.json parent directory name")
    args = ap.parse_args()

    with open(args.extractions, "r", encoding="utf-8") as f:
        rows = json.load(f)
    if not isinstance(rows, list):
        sys.exit("expected a JSON list of ClinicPrice rows")

    batch_id = args.batch_id or os.path.basename(os.path.dirname(os.path.abspath(args.extractions)))
    as_of = max((r.get("asOf", "") for r in rows), default="") or date.today().isoformat()

    rows_sorted = sorted(rows, key=sort_key)

    out_path = args.out if os.path.isabs(args.out) else os.path.join(REPO_ROOT, args.out)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    header = (
        "// GENERATED — DO NOT HAND-EDIT.\n"
        "// Regenerate with scripts/ingest/pricing/merge_to_ts.py from a reviewed batch.\n"
        f"// Batch: {batch_id}\n"
        f"// As of: {as_of}\n"
        f"// Rows: {len(rows_sorted)}\n"
        "//\n"
        "// Verified per-clinic prices keyed by stable entity id (never slug).\n"
        "// Schema: wiki/centurion/gtm/vitalityscout-pricing-pipeline.md §2.\n\n"
        "import { ClinicPrice } from '@/lib/pricing-types';\n\n"
        f"export const {args.export_name}: ClinicPrice[] = [\n"
    )
    body = "\n".join(render_row(r) for r in rows_sorted)
    content = header + body + "\n];\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    rel = os.path.relpath(out_path, REPO_ROOT)
    print(f"wrote {len(rows_sorted)} rows -> {rel}  (batch={batch_id}, asOf={as_of})")


if __name__ == "__main__":
    main()
