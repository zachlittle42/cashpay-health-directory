#!/usr/bin/env python3
"""
_clinics.py — load clinic rows from the src/data TS files for the pricing pipeline.

Reuses the string-aware TS scanner from mint_ids.py (single source of truth for
how a `{Type}Clinic[]` literal is parsed) so this loader never drifts from the
minting logic. Each returned clinic carries its stable entity `id` cross-checked
against scripts/ingest/id_map.json — a row whose in-file id disagrees with the
registry, or which is missing from the registry entirely, is QUARANTINED (never
silently keyed to a guessed id).

Public:
  load_clinics(repo, type_name, glob_pattern) -> (clinics, quarantined)
  load_dexa_clinics(repo)                     -> (clinics, quarantined)

A clinic dict: {id, name, website, slug, city, state, citySlug, stateSlug, file}.
"""
import glob
import json
import sys
from pathlib import Path

# Reuse the exact TS-scanning + id functions from mint_ids (parent dir).
_INGEST = Path(__file__).resolve().parents[1]        # scripts/ingest
if str(_INGEST) not in sys.path:
    sys.path.insert(0, str(_INGEST))
import mint_ids  # noqa: E402


def _load_registry(repo: Path) -> dict:
    reg = repo / "scripts" / "ingest" / "id_map.json"
    if not reg.exists():
        return {}
    try:
        return json.loads(reg.read_text(encoding="utf-8"))
    except Exception:
        return {}


def load_clinics(repo: Path, type_name: str, glob_pattern: str):
    """Parse every `{type_name}[]` literal across files matching glob_pattern.
    Returns (clinics, quarantined). Each clinic is cross-checked against the
    registry: recomputed id must equal the in-file id AND be present in id_map.
    """
    repo = Path(repo).expanduser().resolve()
    registry = _load_registry(repo)
    clinics, quarantined = [], []

    span_fn = mint_ids._array_spans(type_name)
    for abs_path in sorted(glob.glob(str(repo / glob_pattern))):
        rel = str(Path(abs_path).relative_to(repo))
        text = Path(abs_path).read_text(encoding="utf-8")
        for (start, end) in span_fn(text):
            props = mint_ids._extract_string_props(text[start:end])
            name = props.get("name") or ""
            website = props.get("website") or props.get("url") or ""
            if not name:
                continue
            in_file_id = props.get("id")
            computed_id, _fb, _w, _n = mint_ids._row_id(props)
            row = {
                "id": in_file_id,
                "computedId": computed_id,
                "name": name,
                "website": website,
                "slug": props.get("slug", ""),
                "city": props.get("city", ""),
                "state": props.get("state", ""),
                "citySlug": props.get("citySlug", ""),
                "stateSlug": props.get("stateSlug", ""),
                "file": rel,
            }
            # Quarantine: no id, id disagrees with recomputed, or not in registry.
            if not in_file_id:
                row["quarantineReason"] = "missing-id-in-file"
                quarantined.append(row)
            elif in_file_id != computed_id:
                row["quarantineReason"] = f"id-drift (file={in_file_id} computed={computed_id})"
                quarantined.append(row)
            elif in_file_id not in registry:
                row["quarantineReason"] = "id-not-in-registry"
                quarantined.append(row)
            else:
                clinics.append(row)
    return clinics, quarantined


def load_dexa_clinics(repo: Path):
    return load_clinics(repo, "DexaClinic", "src/data/dexa-clinics-*.ts")


if __name__ == "__main__":
    repo = Path(sys.argv[1]) if len(sys.argv) > 1 else _INGEST.parents[1]
    clinics, quarantined = load_dexa_clinics(repo)
    print(f"loaded {len(clinics)} DEXA clinics, {len(quarantined)} quarantined")
    uniq = {c['id'] for c in clinics}
    print(f"unique entity ids: {len(uniq)}")
    for c in clinics[:3]:
        print(f"  {c['id']}  {c['name'][:30]:30}  {c['website']}")
    for q in quarantined:
        print(f"  QUARANTINE: {q['name']} -> {q.get('quarantineReason')}")
