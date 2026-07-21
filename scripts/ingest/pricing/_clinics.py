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
                "category": props.get("category", ""),   # providers carry this; clinics don't
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


# --- DESTINATION (medical-tourism) vertical -----------------------------------
# Unlike the other verticals, destination clinics are seeded from a checked-in
# JSON file (scripts/ingest/pricing/destination_clinics.json) rather than the
# src TS data files, so mint_ids.py (which only scans TS) does not carry them.
# They are self-minted: each row's `id` is verified against the recomputed
# compute_entity_id(website, name) (drift guard) AND cross-checked against the
# sidecar registry destination-id-map.json, which is produced with the identical
# hash function. Additive — existing verticals are untouched.
DESTINATION_SEED = "scripts/ingest/pricing/destination_clinics.json"
DESTINATION_REGISTRY = "scripts/ingest/pricing/destination-id-map.json"


def load_destination_clinics(repo: Path):
    """Load medical-tourism destination clinics from the JSON seed. Returns
    (clinics, quarantined). A row is QUARANTINED if its in-file id disagrees with
    the recomputed compute_entity_id(website, name), or is absent from the sidecar
    destination-id-map.json — never silently keyed to a guessed id."""
    repo = Path(repo).expanduser().resolve()
    seed_path = repo / DESTINATION_SEED
    if not seed_path.exists():
        return [], []
    doc = json.loads(seed_path.read_text(encoding="utf-8"))
    seed_rows = doc.get("clinics", doc) if isinstance(doc, dict) else doc

    reg_path = repo / DESTINATION_REGISTRY
    registry = {}
    if reg_path.exists():
        try:
            registry = json.loads(reg_path.read_text(encoding="utf-8"))
        except Exception:
            registry = {}

    clinics, quarantined = [], []
    for r in seed_rows:
        name = r.get("name") or ""
        website = r.get("website") or ""
        if not name:
            continue
        in_file_id = r.get("id")
        computed_id, _fb = mint_ids.compute_entity_id(website, name)
        row = {
            "id": in_file_id,
            "computedId": computed_id,
            "name": name,
            "website": website,
            "slug": r.get("slug", ""),
            "city": r.get("city", ""),
            "state": r.get("country", ""),          # country lands in `state` for manifest parity
            "citySlug": r.get("citySlug", ""),
            "stateSlug": "",
            "category": r.get("cluster", ""),        # cluster carried as category
            "cluster": r.get("cluster", ""),
            "country": r.get("country", ""),
            "sourceOfListing": r.get("sourceOfListing", ""),
            "file": DESTINATION_SEED,
        }
        if not in_file_id:
            row["quarantineReason"] = "missing-id-in-seed"
            quarantined.append(row)
        elif in_file_id != computed_id:
            row["quarantineReason"] = f"id-drift (file={in_file_id} computed={computed_id})"
            quarantined.append(row)
        elif registry and in_file_id not in registry:
            row["quarantineReason"] = "id-not-in-destination-registry"
            quarantined.append(row)
        else:
            clinics.append(row)
    return clinics, quarantined


def load_weightloss_clinics(repo: Path):
    return load_clinics(repo, "WeightLossClinic", "src/data/weightloss-clinics-*.ts")


def load_hormone_clinics(repo: Path):
    return load_clinics(repo, "HormoneClinic", "src/data/hormone-clinics-*.ts")


# --- MED-SPA vertical ---------------------------------------------------------
# The med-spa supply is two sources, both crawled by --vertical medspa:
#   1) INDEPENDENT per-location clinics — literal MedspaClinic[] rows in
#      src/data/medspa-clinics-*-independents.ts (ids minted per website+name).
#   2) The existing national CHAIN entities — a Record<string, ChainTemplate> in
#      src/data/medspa-chains.ts (one crawlable website per chain). The runtime
#      chain city-rows (medspa-clinics-texas.ts etc.) are function-generated, not
#      literal objects, so the chain WEBSITE lives only on the template.
# Both are cross-checked against id_map.json (drift/absent -> quarantine), exactly
# like load_clinics — never keyed to a guessed id.
MEDSPA_CHAINS_FILE = "src/data/medspa-chains.ts"


def _load_medspa_chains(repo: Path):
    repo = Path(repo).expanduser().resolve()
    registry = _load_registry(repo)
    path = repo / MEDSPA_CHAINS_FILE
    clinics, quarantined = [], []
    if not path.exists():
        return clinics, quarantined
    text = path.read_text(encoding="utf-8")
    for (start, end) in mint_ids._record_spans("ChainTemplate")(text):
        props = mint_ids._extract_string_props(text[start:end])
        name = props.get("name") or ""
        website = props.get("website") or ""
        if not name:
            continue
        in_file_id = props.get("id")
        computed_id, _fb, _w, _n = mint_ids._row_id(props)
        row = {
            "id": in_file_id,
            "computedId": computed_id,
            "name": name,
            "website": website,
            "slug": props.get("key", ""),
            "city": "",                 # national chain — no single city
            "state": "Texas",
            "citySlug": "",
            "stateSlug": "texas",
            "category": "chain",
            "file": MEDSPA_CHAINS_FILE,
        }
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


def load_medspa_clinics(repo: Path):
    """Med-spa vertical loader: independents + existing chain entities. Reads BOTH
    src/data/medspa-clinics-*-independents.ts AND src/data/medspa-chains.ts.
    Returns (clinics, quarantined)."""
    indep, indep_q = load_clinics(repo, "MedspaClinic", "src/data/medspa-clinics-*-independents.ts")
    chains, chains_q = _load_medspa_chains(repo)
    return indep + chains, indep_q + chains_q


def load_medspa_dfwsa_clinics(repo: Path):
    """SCOPED med-spa loader for the Dallas/Fort Worth/San Antonio independents batch
    ONLY. Globs solely src/data/medspa-clinics-dfwsa-independents.ts so a crawl over
    --vertical medspa-dfwsa never re-crawls the Houston/Austin (or chain) supply.
    Same registry drift/absent quarantine as load_clinics. Returns (clinics, quarantined)."""
    return load_clinics(repo, "MedspaClinic", "src/data/medspa-clinics-dfwsa-independents.ts")


# Provider categories treated as "labs / at-home testing" for the labs vertical.
LABS_CATEGORIES = {"labs"}


def load_labs_providers(repo: Path):
    """Provider rows across src/lib/providers-*.ts whose category is a labs /
    at-home-testing category. Providers key `website` off their `url` field
    (handled by load_clinics). Returns (providers, quarantined)."""
    clinics, quarantined = load_clinics(repo, "Provider", "src/lib/providers-*.ts")
    labs = [c for c in clinics if c.get("category") in LABS_CATEGORIES]
    labs_q = [q for q in quarantined if q.get("category") in LABS_CATEGORIES]
    return labs, labs_q


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
