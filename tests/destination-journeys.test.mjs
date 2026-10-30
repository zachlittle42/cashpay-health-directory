// Link and source integrity for the destination journeys (Turkey, South Korea).
// Loads the TypeScript data modules by transpiling them in memory; no network.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const appDir = path.join(root, 'src', 'app');

function loadTs(file) {
  const src = fs.readFileSync(file, 'utf8');
  const out = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const mod = { exports: {} };
  const localRequire = (spec) => {
    if (spec.startsWith('./') || spec.startsWith('../')) {
      let p = path.resolve(path.dirname(file), spec);
      if (!p.endsWith('.ts')) p += '.ts';
      return loadTs(p);
    }
    if (spec.startsWith('@/')) return loadTs(path.join(root, 'src', spec.slice(2) + '.ts'));
    return require(spec);
  };
  new Function('require', 'module', 'exports', out)(localRequire, mod, mod.exports);
  return mod.exports;
}

function routeExists(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '/') return true;
  const parts = clean.split('/').filter(Boolean);
  // Static route
  if (fs.existsSync(path.join(appDir, ...parts, 'page.tsx'))) return true;
  // Dynamic category route: /[category] for slugs in CATEGORIES
  if (parts.length === 1) {
    const types = fs.readFileSync(path.join(root, 'src/lib/types.ts'), 'utf8');
    if (new RegExp(`^\\s{2}${parts[0].replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}: \\{`, 'm').test(types)) return true;
  }
  // /destinations/[destination]
  if (parts[0] === 'destinations' && parts.length === 2) {
    const data = fs.readFileSync(path.join(appDir, 'destinations/[destination]/page.tsx'), 'utf8');
    return data.includes(`slug: '${parts[1]}'`);
  }
  return false;
}

const { JOURNEYS } = loadTs(path.join(root, 'src/lib/destinations/journeys.ts'));
const dossierDir = path.join(root, 'src/lib/destinations/dossiers');
const dossierFiles = fs.existsSync(dossierDir) ? fs.readdirSync(dossierDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts') : [];

test('every journey link resolves to a live route', () => {
  const missing = [];
  for (const journey of Object.values(JOURNEYS)) {
    assert.ok(routeExists(journey.hubHref), `hub ${journey.hubHref}`);
    for (const stage of journey.stages) {
      for (const link of stage.links) if (!routeExists(link.href)) missing.push(`${journey.slug}/${stage.id}: ${link.href}`);
    }
  }
  assert.deepEqual(missing, []);
});

test('journeys cover all six stages exactly once, with no duplicate links', () => {
  for (const journey of Object.values(JOURNEYS)) {
    const ids = journey.stages.map((s) => s.id);
    assert.deepEqual([...ids].sort(), ['book', 'clinics', 'expect', 'prices', 'travel', 'treatments'], journey.slug);
    const hrefs = journey.stages.flatMap((s) => s.links.map((l) => l.href));
    assert.equal(new Set(hrefs).size, hrefs.length, `${journey.slug} has duplicate links`);
  }
});

test('dossier files exist for every journey', () => {
  const slugs = Object.keys(JOURNEYS).sort();
  const files = dossierFiles.map((f) => f.replace(/\.ts$/, '')).sort();
  assert.deepEqual(files, slugs);
});

for (const file of dossierFiles) {
  const mod = loadTs(path.join(dossierDir, file));
  const dossier = Object.values(mod).find((v) => v && typeof v === 'object' && 'sources' in v);
  const name = file.replace(/\.ts$/, '');

  test(`${name}: sources are https, dated, unique and all cited ids exist`, () => {
    assert.ok(dossier, 'dossier export found');
    const ids = new Set();
    for (const s of dossier.sources) {
      assert.match(s.url, /^https:\/\//, s.id);
      assert.match(s.date, /^\d{4}(-\d{2}(-\d{2})?)?$/, `${s.id} date`);
      assert.ok(['official', 'press', 'clinic', 'study', 'marketplace', 'forum'].includes(s.kind), `${s.id} kind`);
      assert.ok(!ids.has(s.id), `duplicate source id ${s.id}`);
      ids.add(s.id);
    }
    const cited = [];
    const collect = (arr) => arr?.forEach((id) => cited.push(id));
    dossier.keyFacts.forEach((f) => collect(f.sourceIds));
    dossier.treatments.forEach((t) => collect(t.sourceIds));
    dossier.clinics.forEach((c) => collect(c.sourceIds));
    dossier.procedures.forEach((p) => collect(p.sourceIds));
    dossier.howItWorks.forEach((s) => collect(s.sourceIds));
    dossier.process.forEach((s) => collect(s.sourceIds));
    dossier.results.forEach((p) => collect(p.sourceIds));
    dossier.safety.points.forEach((p) => collect(p.sourceIds));
    dossier.booking.forEach((s) => collect(s.sourceIds));
    Object.values(dossier.planning).forEach((s) => collect(s.sourceIds));
    const unknown = cited.filter((id) => !ids.has(id));
    assert.deepEqual(unknown, [], 'cited ids without a source');
  });

  test(`${name}: every number-bearing row cites at least one source`, () => {
    for (const f of dossier.keyFacts) assert.ok(f.sourceIds.length, `key fact ${f.label}`);
    for (const t of dossier.treatments) assert.ok(t.sourceIds.length, `treatment ${t.name}`);
    for (const c of dossier.clinics) assert.ok(c.sourceIds.length, `clinic ${c.name}`);
    for (const p of dossier.procedures) assert.ok(p.sourceIds.length, `procedure ${p.procedure}`);
    for (const p of dossier.results) assert.ok(p.sourceIds.length, `result ${p.title}`);
    for (const p of dossier.safety.points) assert.ok(p.sourceIds.length, `safety ${p.title}`);
  });

  test(`${name}: internal links resolve, dates are current, FAQ is substantial`, () => {
    for (const p of dossier.procedures) if (p.guideHref) assert.ok(routeExists(p.guideHref), p.guideHref);
    for (const t of dossier.treatments) if (t.guideHref) assert.ok(routeExists(t.guideHref), t.guideHref);
    assert.ok(dossier.clinics.length >= 8, 'at least 8 clinic profiles');
    assert.ok(dossier.treatments.length >= 4, 'at least 4 treatments');
    assert.ok(dossier.booking.length >= 5, 'booking has at least 5 steps');
    for (const c of dossier.clinics) assert.ok(c.booking.channels && c.booking.consult, `booking info for ${c.name}`);
    assert.match(dossier.verifiedAt, /^2026-\d{2}-\d{2}$/);
    assert.ok(dossier.faqs.length >= 8, 'at least 8 FAQs');
    const text = JSON.stringify({ ...dossier, sources: undefined });
    assert.ok(!/based on 20(23|24)|20(23|24) research|20(23|24) data(?![a-z])|Last updated:? [A-Za-z]* ?20(23|24|25)/.test(text), 'no stale year stamps in visible copy');
    for (const f of dossier.faqs) assert.ok(f.answer.length >= 120, `thin FAQ answer: ${f.question}`);
  });
}
