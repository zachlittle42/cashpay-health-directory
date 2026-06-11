#!/usr/bin/env python3
"""
Step 3: Verify cleaned listings by crawling their websites with Crawl4AI.

This is the key step from the video — visit every website and verify whether
the business actually offers cash-pay/DPC services.

Two modes:
  --mode keywords   (FREE, no API) Uses keyword matching on page content
  --mode llm        (CHEAP) Uses Claude Haiku to analyze page content

Usage:
  python step3_verify.py data/cleaned/cleaned_all.json
  python step3_verify.py data/cleaned/cleaned_all.json --mode llm
  python step3_verify.py data/cleaned/cleaned_all.json --limit 10  # test with 10
"""

import argparse
import asyncio
import json
import re
import sys
from datetime import datetime
from pathlib import Path

from config import (
    CONCURRENT_CRAWLS,
    BATCH_DELAY,
    PAGE_TIMEOUT,
    POSITIVE_KEYWORDS,
    NEGATIVE_KEYWORDS,
    VERIFICATION_THRESHOLD,
    CLAUDE_MODEL,
    MAX_TOKENS,
)

DATA_DIR = Path(__file__).parent / "data" / "verified"
DATA_DIR.mkdir(parents=True, exist_ok=True)


def load_data(filepath: str) -> list[dict]:
    """Load data from JSON or CSV."""
    path = Path(filepath)
    if path.suffix == ".json":
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    elif path.suffix == ".csv":
        import csv
        with open(path, "r", encoding="utf-8-sig") as f:
            return list(csv.DictReader(f))
    else:
        print(f"ERROR: Unsupported format: {path.suffix}")
        sys.exit(1)


def keyword_verify(markdown: str, name: str) -> dict:
    """Verify using keyword matching (free, no API needed)."""
    text = markdown.lower()

    # Count positive keyword hits
    positive_hits = []
    for kw in POSITIVE_KEYWORDS:
        if kw.lower() in text:
            positive_hits.append(kw)

    # Count negative keyword hits
    negative_hits = []
    for kw in NEGATIVE_KEYWORDS:
        if kw.lower() in text:
            negative_hits.append(kw)

    # Score: positive hits boost, negative hits reduce
    score = min(len(positive_hits) / 3, 1.0)  # 3+ hits = 1.0
    if negative_hits:
        score *= 0.3  # Heavy penalty for negative matches

    # Check for pricing indicators (strong signal)
    pricing_patterns = [
        r'\$\d+\s*/\s*(month|mo|visit|year|yr)',
        r'membership.*\$\d+',
        r'flat.?fee',
        r'no.?copay',
        r'transparent.?pric',
    ]
    pricing_hits = sum(1 for p in pricing_patterns if re.search(p, text))
    if pricing_hits:
        score = min(score + 0.2 * pricing_hits, 1.0)

    return {
        "is_match": score >= VERIFICATION_THRESHOLD,
        "confidence": round(score, 2),
        "positive_keywords": positive_hits,
        "negative_keywords": negative_hits,
        "pricing_signals": pricing_hits,
        "method": "keyword",
    }


async def llm_verify(markdown: str, name: str) -> dict:
    """Verify using Claude Haiku (cheap, more accurate)."""
    import anthropic
    from dotenv import load_dotenv
    load_dotenv()

    client = anthropic.Anthropic()

    # Truncate to save tokens — first 3000 chars is usually enough
    content = markdown[:3000]

    prompt = f"""Analyze this business website content and determine if this is a cash-pay, direct primary care (DPC), or concierge medicine clinic.

Business name: {name}

Website content:
{content}

Respond with JSON only:
{{
  "is_cashpay_dpc": true/false,
  "confidence": 0.0-1.0,
  "pricing_model": "membership|per-visit|bundled|sliding-scale|unknown",
  "evidence": "one sentence explaining your reasoning",
  "services_found": ["list", "of", "services"]
}}"""

    try:
        response = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=MAX_TOKENS,
            messages=[{"role": "user", "content": prompt}],
        )
        text = response.content[0].text.strip()

        # Extract JSON from response
        json_match = re.search(r'\{.*\}', text, re.DOTALL)
        if json_match:
            result = json.loads(json_match.group())
            return {
                "is_match": result.get("is_cashpay_dpc", False),
                "confidence": result.get("confidence", 0),
                "pricing_model": result.get("pricing_model", "unknown"),
                "evidence": result.get("evidence", ""),
                "services_found": result.get("services_found", []),
                "method": "llm",
            }
    except Exception as e:
        print(f"    LLM error: {e}")

    return {
        "is_match": False,
        "confidence": 0,
        "method": "llm",
        "error": "Failed to get LLM response",
    }


async def crawl_and_verify(records: list[dict], mode: str = "keywords") -> list[dict]:
    """Crawl each website and verify using the specified mode."""
    from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig

    browser_config = BrowserConfig(
        headless=True,
        verbose=False,
    )

    crawler_config = CrawlerRunConfig(
        page_timeout=PAGE_TIMEOUT * 1000,  # ms
        word_count_threshold=50,
        remove_overlay_elements=True,
    )

    results = []
    total = len(records)
    verified = 0
    matched = 0
    failed = 0

    async with AsyncWebCrawler(config=browser_config) as crawler:
        # Process in batches for rate limiting
        for i in range(0, total, CONCURRENT_CRAWLS):
            batch = records[i:i + CONCURRENT_CRAWLS]
            batch_num = i // CONCURRENT_CRAWLS + 1
            total_batches = (total + CONCURRENT_CRAWLS - 1) // CONCURRENT_CRAWLS

            print(f"\n  Batch {batch_num}/{total_batches} ({len(batch)} sites)...")

            tasks = []
            for record in batch:
                url = record.get("website", "")
                if not url:
                    continue
                tasks.append((record, crawler.arun(url=url, config=crawler_config)))

            for record, task in tasks:
                name = record.get("name", "Unknown")
                url = record.get("website", "")
                try:
                    result = await task

                    if not result.success:
                        print(f"    SKIP {name}: crawl failed")
                        record["verification"] = {"is_match": False, "error": "crawl_failed", "method": mode}
                        failed += 1
                        results.append(record)
                        continue

                    markdown = result.markdown or ""

                    if len(markdown.strip()) < 100:
                        print(f"    SKIP {name}: too little content ({len(markdown)} chars)")
                        record["verification"] = {"is_match": False, "error": "no_content", "method": mode}
                        failed += 1
                        results.append(record)
                        continue

                    # Verify
                    if mode == "llm":
                        verification = await llm_verify(markdown, name)
                    else:
                        verification = keyword_verify(markdown, name)

                    record["verification"] = verification
                    record["page_title"] = result.metadata.get("title", "") if result.metadata else ""
                    verified += 1

                    if verification["is_match"]:
                        matched += 1
                        status = "MATCH"
                    else:
                        status = "no match"

                    print(f"    {status} ({verification['confidence']:.0%}) {name}")
                    results.append(record)

                except Exception as e:
                    print(f"    ERROR {name}: {e}")
                    record["verification"] = {"is_match": False, "error": str(e), "method": mode}
                    failed += 1
                    results.append(record)

            # Rate limiting between batches
            if i + CONCURRENT_CRAWLS < total:
                await asyncio.sleep(BATCH_DELAY)

    print(f"\n  --- Verification Summary ---")
    print(f"  Total processed: {len(results)}")
    print(f"  Verified:        {verified}")
    print(f"  Matched:         {matched}")
    print(f"  No match:        {verified - matched}")
    print(f"  Failed to crawl: {failed}")

    return results


def save_results(results: list[dict], output_name: str):
    """Save all results and a filtered matches-only file."""
    # All results
    all_path = DATA_DIR / f"{output_name}_all.json"
    with open(all_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    print(f"\n  All results: {all_path}")

    # Matches only
    matches = [r for r in results if r.get("verification", {}).get("is_match")]
    matches_path = DATA_DIR / f"{output_name}_matches.json"
    with open(matches_path, "w", encoding="utf-8") as f:
        json.dump(matches, f, indent=2)
    print(f"  Matches only ({len(matches)}): {matches_path}")

    # Rejected (for review)
    rejected = [r for r in results if not r.get("verification", {}).get("is_match")]
    rejected_path = DATA_DIR / f"{output_name}_rejected.json"
    with open(rejected_path, "w", encoding="utf-8") as f:
        json.dump(rejected, f, indent=2)
    print(f"  Rejected ({len(rejected)}): {rejected_path}")


def main():
    parser = argparse.ArgumentParser(description="Step 3: Verify listings via website crawl")
    parser.add_argument("input_file", help="Path to cleaned data file")
    parser.add_argument("--mode", choices=["keywords", "llm"], default="keywords",
                        help="Verification mode: keywords (free) or llm (uses Claude)")
    parser.add_argument("--limit", type=int, default=None,
                        help="Only process first N records (for testing)")
    parser.add_argument("--output", default=None, help="Output filename prefix")
    args = parser.parse_args()

    print(f"\nLoading: {args.input_file}")
    records = load_data(args.input_file)
    print(f"  Loaded {len(records)} records")

    if args.limit:
        records = records[:args.limit]
        print(f"  Limited to {len(records)} records (--limit)")

    websites = [r for r in records if r.get("website")]
    print(f"  Records with websites: {len(websites)}")
    print(f"  Mode: {args.mode}")
    print(f"  Concurrent crawls: {CONCURRENT_CRAWLS}")
    print(f"  Verification threshold: {VERIFICATION_THRESHOLD}")

    print(f"\nStarting verification...")
    results = asyncio.run(crawl_and_verify(websites, args.mode))

    output_name = args.output or f"verified_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    save_results(results, output_name)


if __name__ == "__main__":
    main()
