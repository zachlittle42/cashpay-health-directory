# scripts/ingest — pricing-verification data layer

This directory is the **tracked, no-secrets** ingestion layer for the
vitalityscout.com pricing-verification pipeline
(spec: `AgentKasten/wiki/centurion/gtm/vitalityscout-pricing-pipeline.md`).

Nothing here writes to the live site. `mint_ids.py` edits `src/data` / `src/lib`
row literals in place (backfilling a stable `id`) and maintains the registry;
the pricing crawler (`pricing/`) only reads the web and emits reviewable batches.

## Foundation #1 — stable entity IDs

Every clinic/provider row carries a deterministic `id` so re-scrapes and pricing
rows map back to the same entity idempotently. Pricing rows key to `id`, never to
a slug.

### The ID function (the contract)

```
id = "c_" + sha1( normalizeDomain(website) + "|" + normalizeName(name) )[:10]
```

- **normalizeDomain(website):** lowercase; strip scheme (`https://`), `www.`,
  path/query/fragment, port, and any trailing dot. Empty/missing website triggers
  the fallback.
- **normalizeName(name):** lowercase; NFKD strip diacritics; strip punctuation;
  collapse whitespace.
- **Fallback (no website):**
  ```
  id = "c_" + sha1( "noweb|" + normalizeName(name) + "|" + citySlug + "|" + stateSlug )[:10]
  ```
  and the entity is marked `fallback: true` in the registry.
- **Chain semantics (intentional):** the same chain across many cities
  (BodySpec, LaserAway, DexaFit, …) normalizes to **one** id — the chain IS the
  entity. The primary hash never includes the city; the registry records every
  occurrence. Med-spa chains mint the id at the `ChainTemplate` level and
  `buildCityClinic()` stamps that one id onto every city instance.

The function has exactly **two** implementations and they are byte-consistent:

1. `scripts/ingest/mint_ids.py` → `compute_entity_id()` (backfill + registry)
2. `AgentKasten/.claude/skills/seo-page-factory/convert.py` → `compute_entity_id()`
   (forward-minting for newly generated rows)

If you change one, change the other identically. Each file's block points at the
other in a comment.

## `mint_ids.py`

Python 3, stdlib only (`hashlib` / `json` / `re` / `unicodedata`). No network,
no API keys.

```bash
python3 scripts/ingest/mint_ids.py          # backfill rows + refresh id_map.json
python3 scripts/ingest/mint_ids.py --check  # read-only; nonzero exit if a change is needed
```

**Idempotent.** A missing id is minted (written as the first property of the row).
An existing id that already matches is verified silently. An existing id that does
**not** match the recomputed id is **drift** → the tool prints it and exits nonzero
(never silently rewrites — a rename/domain change is reconciled by hand). Running a
second time makes zero changes and exits 0.

**Scope (pricing verticals only):**

| Interface | Files |
|---|---|
| `WeightLossClinic` | `src/data/weightloss-clinics-*.ts` |
| `HormoneClinic` | `src/data/hormone-clinics-*.ts` |
| `DexaClinic` | `src/data/dexa-clinics-*.ts` |
| `StemCellClinic` | `src/data/stem-cell-clinics-*.ts` |
| `Provider` | `src/lib/providers-{telehealth,medical-tourism,pharma,insurance,drug-registry,services}.ts` (uses `url` as website) |
| `ChainTemplate` → `MedspaClinic` | `src/lib/medspa-chains.ts` (chain-level id) |

It does **not** touch `bayarea` / `socal` / `us-healthcare` / `national-health-systems`
(out of pricing scope; different types), page templates, sitemap, or renderers.

## `id_map.json` — the registry

Generated/refreshed by `mint_ids.py`. Keyed by id:

```json
{
  "c_xxxxxxxxxx": {
    "name": "BodySpec",
    "website": "https://www.bodyspec.com",
    "occurrences": [ { "file": "src/data/dexa-clinics-california.ts", "slug": "bodyspec-la", "city": "Los Angeles", "state": "California" } ],
    "firstSeen": "2026-07-11"
  }
}
```

`fallback: true` appears on entities minted without a website. `firstSeen` is
preserved across runs.

## `pricing/` — Phase 1+ crawler

`pricing/_crawl.py` is the shared Crawl4AI + Anthropic helper lifted from
`scripts/scraping/step3/step4`. See its module docstring for env vars. Later
phases (discovery / extraction / merge) build on it.
