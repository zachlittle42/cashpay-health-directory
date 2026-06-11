# VitalityScout Scraping Pipeline

5-step pipeline to discover, verify, and enrich healthcare provider data for the directory.

## Setup

```bash
cd scripts/scraping
source .venv/bin/activate
cp .env.example .env  # Add your API keys
```

## Pipeline Steps

### Step 1: Discover businesses (OutScraper or CSV import)
```bash
# From OutScraper API (needs API key, 500 free/month)
python step1_discover.py

# Or import an existing CSV
python step1_discover.py --from-csv data/raw/my_export.csv
```

### Step 2: Clean junk data (FREE, no API)
```bash
python step2_clean.py data/raw/discovery_all_TIMESTAMP.json
```

### Step 3: Verify via website crawl (FREE with keywords, cheap with LLM)
```bash
# Free mode — keyword matching on page content
python step3_verify.py data/cleaned/cleaned_all.json --mode keywords

# LLM mode — Claude Haiku analyzes each page (~$0.03/listing)
python step3_verify.py data/cleaned/cleaned_all.json --mode llm

# Test with 5 records first
python step3_verify.py data/cleaned/cleaned_all.json --limit 5
```

### Step 4: Enrich (one pass at a time!)
```bash
# Pass 1: Pricing
python step4_enrich.py data/verified/verified_matches.json --fields pricing

# Pass 2: Services
python step4_enrich.py data/enriched/enriched_pricing.json --fields services

# Pass 3: Features
python step4_enrich.py data/enriched/enriched_services.json --fields features

# Pass 4: Contact
python step4_enrich.py data/enriched/enriched_features.json --fields contact
```

### Step 5: Export for the web app
```bash
python step5_export.py data/enriched/enriched_contact.json --format all
```

## Quick Test (sample data included)

```bash
# Clean the sample data
python step2_clean.py data/raw/sample_california_dpc.json

# Verify (keyword mode, free)
python step3_verify.py data/cleaned/sample_california_dpc.json --mode keywords --limit 5
```

## Costs

| Step | Tool | Cost |
|------|------|------|
| Discovery | OutScraper | Free (500/mo) or ~$0.002/record |
| Cleaning | Rules only | Free |
| Verification (keywords) | Crawl4AI | Free |
| Verification (LLM) | Claude Haiku | ~$0.01/listing |
| Enrichment (per pass) | Crawl4AI + Haiku | ~$0.03/listing |
| **Total for 500 listings, 4 passes** | | **~$7-10** |

## Config

Edit `config.py` for:
- Search queries and regions
- Positive/negative keywords
- Enrichment fields
- Concurrency and rate limits
- Claude model selection
