# Clinic profile research brief (shared)

You are researching medical-tourism providers for VitalityScout, a consumer directory for Americans paying cash. Today is 2026-10-30. You write ONLY what is documented. No rankings, no "best", no outcome claims, no invented numbers. "Not published" / "Not named" / "Not stated" are good answers. Absence of a caution means you found none, not that none exists.

## Output
Write ONE file: a JSON object `{ "clinics": ClinicProfile[], "sources": Source[] }` to the exact path given in your task. Valid JSON (no comments, no trailing commas). Every `sourceIds` entry must match a `Source.id` in your file. Every Source needs an https URL you actually opened or saw in search results, a publisher, a date (YYYY-MM-DD or YYYY-MM or YYYY), and a kind. Source ids: lowercase kebab, prefixed with the clinic slug (e.g. `liv-site`, `liv-press-hurriyet`). Reuse these ids for shared registries instead of re-declaring them: Korea `medkorea-portal`, `kahf-list`; Turkey `moh-pdfs` (the four Ministry PDFs), `jci-directory`.

```ts
interface Source { id: string; label: string; url: string; publisher: string; date: string;
  kind: 'official'|'press'|'clinic'|'study'|'marketplace'|'forum'; }
interface ClinicProfile {
  name: string;                 // legal/brand name, include lead surgeon in parentheses if the brand is a person
  district: string;             // e.g. "Gangnam-gu (Sinsa)" or "Istanbul (Şişli)" or "Ankara"
  type: 'hospital'|'clinic'|'screening center'|'dental'|'eye';
  url?: string;                 // international-patient page
  specialties: string[];        // 2–6 short items
  namedDoctors: string;         // operating doctors by name + stated certification/society; anesthesiologists if named; or "Not named on international page"
  credentials: string;          // registry/licence status (state WHICH list you checked and the date), accreditations (KAHF / JCI / ISO / TÜRSAB) only if seen on the accreditor's own list or clearly on the clinic site (say which), stated safety set-up, year founded if stated
  cautions?: string;            // regulator actions, court cases, coroner/press-reported incidents, structural caveats (e.g. technicians perform grafts; franchise branches independently operated). Cite press by source id. Omit the field if nothing found.
  publishedPrices: string;      // prices on the clinic's OWN site with currency and date seen; else "Not published on its site." plus any marketplace range labelled "marketplace range (indicative)"
  booking: { channels: string;  // exact channels: form URL, WhatsApp number, email, KakaoTalk id, phone, hours/timezone
             consult: string;   // what the first consult needs (photos, history, video), fee, response time, deposit terms if stated; else say not published
             deposit?: string; languages?: string; includes?: string; bookingUrl?: string; };
  sourceIds: string[];          // ≥2, including the registry id
}
```

## Method per clinic (keep it to ~6–10 fetches each)
1. Registry check (details in the country task). Record the exact matched name.
2. Clinic's own international page: doctors page, safety/anesthesia page, prices page, contact/booking page.
3. One news search for `"<clinic name>" ` plus words like death, lawsuit, fine, sanction, complaint, warning (English and local language). Record only what reputable press or a regulator published.
4. Accreditor check if the clinic claims one.
If a site blocks fetching, say so in `credentials` ("site blocked automated reading; facts from search snippets") and keep going.

## Style
Plain English, full sentences, no marketing adjectives, no em-dashes. Convert local prices to USD in parentheses with the rate stated once in the price text (KRW 1,330 = $1; use the TRY/EUR rate you see). Dates in prose as "October 2026".

Work steadily, save the JSON file as soon as you have 4 profiles and re-save after every 2–3 more, so a cut-off loses nothing. When done, reply with: the file path, the count, and any clinic you could not verify on the registry.
