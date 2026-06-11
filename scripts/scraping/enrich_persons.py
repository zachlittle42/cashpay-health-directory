#!/usr/bin/env python3
"""
Person-level enrichment for sales lead CSVs.

Crawls clinic websites with Crawl4AI, then uses Claude Sonnet 4.6 to extract
decision-maker names, titles, credentials, and emails.

Two-pass approach per clinic:
  1. Homepage — extract person data + discover team/about page link
  2. Team page — if Pass 1 found a team page URL but no person email, crawl it

Usage:
    # Test on 10 clinics
    python enrich_persons.py clean/CA_clinics_master.csv --limit 10

    # Full run
    python enrich_persons.py clean/CA_clinics_master.csv --output clean/CA_clinics_enriched.csv
    python enrich_persons.py clean/TX_clinics_master.csv --output clean/TX_clinics_enriched.csv

Cost estimate (Sonnet 4.6: $3/M input, $15/M output):
    ~5,534 clinics × 2 passes × ~2K input + ~300 output tokens ≈ $116
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Optional

import pandas as pd
from dotenv import load_dotenv

load_dotenv()

# ---------------------------------------------------------------------------
# Config (mirrors config.py but uses Sonnet 4.6 for higher extraction quality)
# ---------------------------------------------------------------------------
CONCURRENT_CRAWLS = 5
BATCH_DELAY = 2.0
PAGE_TIMEOUT = 30
CLAUDE_MODEL = "claude-sonnet-4-6"
MAX_TOKENS = 1024
CONTENT_LIMIT = 5000  # chars of markdown to send to Claude
CHECKPOINT_EVERY = 50  # save progress every N records

# ---------------------------------------------------------------------------
# Extraction prompt
# ---------------------------------------------------------------------------
EXTRACTION_PROMPT = """From this clinic's website, extract the owner or lead decision-maker.
Look for: owner, founder, medical director, lead physician, practice manager.

Website content:
{content}

Return JSON:
{{
  "persons": [
    {{"name": "Full Name", "title": "Role", "credentials": "MD/DO/NP or null", "email": "or null"}}
  ],
  "generic_email": "info@/hello@ email or null",
  "team_page_url": "URL to about/team page if found, or null"
}}"""


# ---------------------------------------------------------------------------
# Core enrichment logic
# ---------------------------------------------------------------------------
async def crawl_url(crawler, crawler_config, url: str) -> str | None:
    """Crawl a URL and return truncated markdown, or None on failure."""
    try:
        result = await crawler.arun(url=url, config=crawler_config)
        if result.success and result.markdown:
            return result.markdown[:CONTENT_LIMIT]
    except Exception:
        pass
    return None


def extract_json(text: str) -> dict | None:
    """Pull first JSON object from LLM response text."""
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            pass
    return None


async def call_claude(client, content: str) -> dict | None:
    """Send content to Sonnet 4.6 and parse the JSON response."""
    prompt = EXTRACTION_PROMPT.format(content=content)
    try:
        response = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=MAX_TOKENS,
            messages=[{"role": "user", "content": prompt}],
        )
        return extract_json(response.content[0].text.strip())
    except Exception:
        return None


def pick_decision_maker(persons: list[dict]) -> dict | None:
    """From a list of persons, pick the best decision-maker."""
    if not persons:
        return None
    # Preference order for titles
    priority_keywords = [
        "owner", "founder", "ceo", "president",
        "medical director", "director",
        "physician", "doctor", "md", "do",
        "nurse practitioner", "np", "pa",
        "manager",
    ]
    for keyword in priority_keywords:
        for p in persons:
            title = (p.get("title") or "").lower()
            creds = (p.get("credentials") or "").lower()
            if keyword in title or keyword in creds:
                return p
    # Fall back to first person
    return persons[0]


async def enrich_single(
    crawler, crawler_config, client, row: pd.Series
) -> dict:
    """Enrich a single clinic row. Returns dict of new column values."""
    name = row.get("Name", "Unknown")
    url = row.get("Website", "")
    result = {
        "dm_name": None,
        "dm_title": None,
        "dm_credentials": None,
        "dm_email": None,
        "generic_email": None,
        "enrichment_status": "none",
        "enriched_at": datetime.now().isoformat(),
    }

    if not url or pd.isna(url):
        print(f"    SKIP {name}: no website")
        return result

    # Normalize URL
    url = str(url).strip()
    if not url.startswith("http"):
        url = "https://" + url

    # --- Pass 1: Homepage ---
    content = await crawl_url(crawler, crawler_config, url)
    if not content:
        print(f"    SKIP {name}: crawl failed")
        return result

    extracted = await call_claude(client, content)
    if not extracted:
        print(f"    WARN {name}: LLM parse failed")
        return result

    # Capture generic email
    result["generic_email"] = extracted.get("generic_email")
    team_page_url = extracted.get("team_page_url")

    # Pick best person
    dm = pick_decision_maker(extracted.get("persons") or [])
    if dm:
        result["dm_name"] = dm.get("name")
        result["dm_title"] = dm.get("title")
        result["dm_credentials"] = dm.get("credentials")
        result["dm_email"] = dm.get("email")

    # --- Pass 2: Team page (if we have a URL but no person email) ---
    if team_page_url and not result["dm_email"]:
        team_page_url = str(team_page_url).strip()
        if not team_page_url.startswith("http"):
            # Resolve relative URL
            from urllib.parse import urljoin
            team_page_url = urljoin(url, team_page_url)

        team_content = await crawl_url(crawler, crawler_config, team_page_url)
        if team_content:
            team_extracted = await call_claude(client, team_content)
            if team_extracted:
                # Update generic email if we didn't have one
                if not result["generic_email"]:
                    result["generic_email"] = team_extracted.get("generic_email")
                # Try to get a better person match
                team_dm = pick_decision_maker(team_extracted.get("persons") or [])
                if team_dm:
                    # Prefer team page person if they have an email and homepage person didn't
                    if team_dm.get("email") and not result["dm_email"]:
                        result["dm_name"] = team_dm.get("name")
                        result["dm_title"] = team_dm.get("title")
                        result["dm_credentials"] = team_dm.get("credentials")
                        result["dm_email"] = team_dm.get("email")
                    # Or if homepage found no person at all
                    elif not result["dm_name"]:
                        result["dm_name"] = team_dm.get("name")
                        result["dm_title"] = team_dm.get("title")
                        result["dm_credentials"] = team_dm.get("credentials")
                        result["dm_email"] = team_dm.get("email")

    # Set enrichment status
    if result["dm_name"] and result["dm_email"]:
        result["enrichment_status"] = "complete"
    elif result["dm_name"] or result["generic_email"]:
        result["enrichment_status"] = "partial"
    else:
        result["enrichment_status"] = "none"

    status_icon = {"complete": "OK", "partial": "PARTIAL", "none": "NONE"}
    print(f"    {status_icon[result['enrichment_status']]} {name}")
    return result


async def enrich_batch(
    df: pd.DataFrame, start_idx: int = 0
) -> list[dict]:
    """Enrich all rows in the dataframe, returning list of enrichment dicts."""
    from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
    import anthropic

    browser_config = BrowserConfig(headless=True, verbose=False)
    crawler_config = CrawlerRunConfig(
        page_timeout=PAGE_TIMEOUT * 1000,
        word_count_threshold=50,
        remove_overlay_elements=True,
    )
    client = anthropic.Anthropic()

    results = []
    total = len(df)

    async with AsyncWebCrawler(config=browser_config) as crawler:
        for i in range(start_idx, total, CONCURRENT_CRAWLS):
            batch = df.iloc[i:i + CONCURRENT_CRAWLS]
            batch_num = (i // CONCURRENT_CRAWLS) + 1
            total_batches = (total + CONCURRENT_CRAWLS - 1) // CONCURRENT_CRAWLS

            print(f"\n  Batch {batch_num}/{total_batches} (rows {i+1}-{min(i+CONCURRENT_CRAWLS, total)})...")

            tasks = []
            for _, row in batch.iterrows():
                tasks.append(enrich_single(crawler, crawler_config, client, row))

            batch_results = await asyncio.gather(*tasks)
            results.extend(batch_results)

            if i + CONCURRENT_CRAWLS < total:
                await asyncio.sleep(BATCH_DELAY)

    return results


def save_checkpoint(df: pd.DataFrame, output_path: Path):
    """Save current state to disk."""
    df.to_csv(output_path, index=False)
    print(f"  [checkpoint] Saved {len(df)} rows to {output_path}")


def main():
    parser = argparse.ArgumentParser(
        description="Enrich clinic CSVs with decision-maker person data"
    )
    parser.add_argument(
        "input_file",
        help="Path to master CSV (e.g., clean/CA_clinics_master.csv)",
    )
    parser.add_argument(
        "--output", default=None,
        help="Output CSV path (default: input with _enriched suffix)",
    )
    parser.add_argument(
        "--limit", type=int, default=None,
        help="Only process first N records (for testing)",
    )
    args = parser.parse_args()

    input_path = Path(args.input_file)
    if not input_path.exists():
        print(f"ERROR: {input_path} not found")
        sys.exit(1)

    # Default output path
    if args.output:
        output_path = Path(args.output)
    else:
        output_path = input_path.with_name(
            input_path.stem + "_enriched" + input_path.suffix
        )

    print(f"\n{'='*60}")
    print(f"  Person Enrichment — Crawl4AI + Sonnet 4.6")
    print(f"  Model: {CLAUDE_MODEL}")
    print(f"  Input: {input_path}")
    print(f"  Output: {output_path}")
    print(f"{'='*60}\n")

    # Load data
    df = pd.read_csv(input_path)
    print(f"  Loaded {len(df)} records")

    # If output already exists, load it to resume
    if output_path.exists():
        existing = pd.read_csv(output_path)
        if "enrichment_status" in existing.columns:
            already_done = existing["enrichment_status"].notna().sum()
            print(f"  Resuming: {already_done} already enriched in {output_path}")
            df = existing  # Use the file with partial progress

    if args.limit:
        df = df.head(args.limit).copy()
        print(f"  Limited to {len(df)} records (--limit)")

    # Split into to-do vs already-done
    if "enrichment_status" in df.columns:
        todo_mask = df["enrichment_status"].isna()
    else:
        todo_mask = pd.Series(True, index=df.index)
        # Add empty enrichment columns
        for col in ["dm_name", "dm_title", "dm_credentials", "dm_email",
                     "generic_email", "enrichment_status", "enriched_at"]:
            df[col] = None

    todo_df = df[todo_mask].copy()
    already_done = (~todo_mask).sum()

    if already_done:
        print(f"  Skipping {already_done} already-enriched records")

    if todo_df.empty:
        print("  Nothing to enrich!")
        return

    total_to_process = len(todo_df)
    print(f"  Processing {total_to_process} records...")
    print(f"  Estimated cost: ~${total_to_process * 2 * 2000 * 3 / 1_000_000 + total_to_process * 2 * 300 * 15 / 1_000_000:.0f}")

    start_time = time.time()

    # Process in checkpoint-sized chunks
    all_enrichment_results = []
    for chunk_start in range(0, total_to_process, CHECKPOINT_EVERY):
        chunk_end = min(chunk_start + CHECKPOINT_EVERY, total_to_process)
        chunk_df = todo_df.iloc[chunk_start:chunk_end]

        print(f"\n  --- Chunk {chunk_start+1}-{chunk_end} of {total_to_process} ---")

        chunk_results = asyncio.run(enrich_batch(chunk_df))
        all_enrichment_results.extend(chunk_results)

        # Apply results to main dataframe
        todo_indices = todo_df.index[chunk_start:chunk_end]
        for idx, enrichment in zip(todo_indices, chunk_results):
            for col, val in enrichment.items():
                df.at[idx, col] = val

        # Checkpoint
        save_checkpoint(df, output_path)

    elapsed = time.time() - start_time

    # --- Summary ---
    print(f"\n{'='*60}")
    print(f"  Enrichment Complete")
    print(f"{'='*60}")
    print(f"  Total processed: {total_to_process}")
    print(f"  Time: {elapsed/60:.1f} min")

    status_counts = df["enrichment_status"].value_counts()
    for status, count in status_counts.items():
        pct = count / len(df) * 100
        print(f"  {status}: {count} ({pct:.1f}%)")

    dm_names = df["dm_name"].notna().sum()
    dm_emails = df["dm_email"].notna().sum()
    generic_emails = df["generic_email"].notna().sum()
    any_email = ((df["dm_email"].notna()) | (df["generic_email"].notna())).sum()

    print(f"\n  Decision-maker names: {dm_names} ({dm_names/len(df)*100:.1f}%)")
    print(f"  Person emails: {dm_emails} ({dm_emails/len(df)*100:.1f}%)")
    print(f"  Generic emails: {generic_emails} ({generic_emails/len(df)*100:.1f}%)")
    print(f"  Any email: {any_email} ({any_email/len(df)*100:.1f}%)")

    # Cost estimate
    input_tokens = total_to_process * 2 * 2000
    output_tokens = total_to_process * 2 * 300
    cost = input_tokens * 3 / 1_000_000 + output_tokens * 15 / 1_000_000
    print(f"\n  Estimated cost: ~${cost:.2f}")
    print(f"  Saved to: {output_path}")


if __name__ == "__main__":
    main()
