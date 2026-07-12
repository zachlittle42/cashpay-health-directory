#!/usr/bin/env python3
"""
_crawl.py — shared crawl + LLM-extract helper for the pricing pipeline.

Lifted and cleaned from scripts/scraping/step3_verify.py (the Crawl4AI
BrowserConfig / CrawlerRunConfig + batched, rate-limited concurrency loop) and
step4_enrich.py (the Anthropic client + JSON-blob extraction). Two reusable
functions; discovery/extraction/merge (Phases 2-3) build on top of these.

Key difference from the legacy step4 pricing pass: crawl_pages does NOT truncate
page text — it returns the full markdown, so /pricing and /membership subpages
survive intact (step4 clipped homepages to 5,000 chars and lost exactly them).

Configuration comes from os.environ ONLY (no hard-coded keys). A git-ignored
scripts/ingest/.env is auto-loaded if present (via python-dotenv). Env vars:
  ANTHROPIC_API_KEY   (required for llm_extract; read by the anthropic client)
  CLAUDE_MODEL        (optional; default "claude-haiku-4-5-20251001")
  CLAUDE_MAX_TOKENS   (optional; default 1024)
  CRAWL_PAGE_TIMEOUT  (optional; per-page timeout in seconds, default 30)
  CRAWL_BATCH_DELAY   (optional; seconds between batches, default 2.0)

Smoke test (proves the lift works — crawls one public URL):
  python3 scripts/ingest/pricing/_crawl.py
"""
import asyncio
import json
import os
import re
from pathlib import Path

# Auto-load a git-ignored scripts/ingest/.env if present. Never required; env
# vars set in the shell take precedence over anything not already set.
try:
    from dotenv import load_dotenv
    _env = Path(__file__).resolve().parents[1] / ".env"   # scripts/ingest/.env
    if _env.exists():
        load_dotenv(_env)
except Exception:
    pass


def _model() -> str:
    return os.environ.get("CLAUDE_MODEL", "claude-haiku-4-5-20251001")


def _max_tokens() -> int:
    try:
        return int(os.environ.get("CLAUDE_MAX_TOKENS", "1024"))
    except ValueError:
        return 1024


def _page_timeout_s() -> int:
    try:
        return int(os.environ.get("CRAWL_PAGE_TIMEOUT", "30"))
    except ValueError:
        return 30


def _batch_delay_s() -> float:
    try:
        return float(os.environ.get("CRAWL_BATCH_DELAY", "2.0"))
    except ValueError:
        return 2.0


async def crawl_pages_async(urls, concurrency: int = 5) -> dict:
    """Crawl each URL headless and return {url: markdown} (FULL page text, no
    truncation). Failed/empty crawls map to "" so callers see every attempted URL.
    Processes in rate-limited batches of `concurrency`."""
    from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig

    urls = list(dict.fromkeys(u for u in urls if u))  # de-dupe, drop falsy, keep order
    out = {}
    if not urls:
        return out

    browser_config = BrowserConfig(headless=True, verbose=False)
    crawler_config = CrawlerRunConfig(
        page_timeout=_page_timeout_s() * 1000,   # crawl4ai wants ms
        word_count_threshold=50,
        remove_overlay_elements=True,
    )
    batch_delay = _batch_delay_s()

    async def one(crawler, url):
        try:
            result = await crawler.arun(url=url, config=crawler_config)
            if result.success and result.markdown:
                return url, result.markdown            # full text, no slice
            return url, ""
        except Exception as e:                          # noqa: BLE001
            print(f"    crawl error {url}: {e}")
            return url, ""

    total = len(urls)
    async with AsyncWebCrawler(config=browser_config) as crawler:
        for i in range(0, total, concurrency):
            batch = urls[i:i + concurrency]
            results = await asyncio.gather(*(one(crawler, u) for u in batch))
            for url, md in results:
                out[url] = md
            if i + concurrency < total:
                await asyncio.sleep(batch_delay)
    return out


def crawl_pages(urls, concurrency: int = 5) -> dict:
    """Synchronous wrapper around crawl_pages_async -> {url: markdown} (full text)."""
    return asyncio.run(crawl_pages_async(urls, concurrency=concurrency))


def llm_extract(markdown: str, prompt: str, model: str = None) -> dict:
    """Send `markdown` + `prompt` to Claude and parse the first JSON object out of
    the reply. Returns a dict, or None on any failure (no crawl content, API error,
    or unparseable response).

    The prompt may contain a `{markdown}` or `{content}` placeholder; otherwise the
    page text is appended after the prompt.
    """
    if not markdown:
        return None

    if "{markdown}" in prompt:
        full = prompt.format(markdown=markdown)
    elif "{content}" in prompt:
        full = prompt.format(content=markdown)
    else:
        full = prompt.rstrip() + "\n\nWebsite content:\n" + markdown

    try:
        import anthropic
        client = anthropic.Anthropic()   # reads ANTHROPIC_API_KEY from env
        response = client.messages.create(
            model=model or _model(),
            max_tokens=_max_tokens(),
            messages=[{"role": "user", "content": full}],
        )
        text = response.content[0].text.strip()
        m = re.search(r'\{.*\}', text, re.DOTALL)
        if not m:
            return None
        return json.loads(m.group())
    except json.JSONDecodeError:
        return None
    except Exception as e:                              # noqa: BLE001
        print(f"    llm_extract error: {e}")
        return None


if __name__ == "__main__":
    # Runnable proof the crawl lift works: crawl one public URL, print a preview.
    URL = "https://www.bodyspec.com"
    print(f"Smoke test: crawling {URL} ...")
    pages = crawl_pages([URL])
    md = pages.get(URL, "")
    if md:
        print(f"OK — {len(md)} chars of markdown. First 500:\n")
        print(md[:500])
    else:
        print("FAILED — no markdown returned (network/bot-wall/timeout). "
              "See the crawl error above if any.")
