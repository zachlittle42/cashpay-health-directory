// Integrity checks for the official-registry directories (src/lib/registries,
// src/data/registries/*.json). Run: npm run test:destinations
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'src/data/registries');
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.json'));

test('registry data files exist for both dossier destinations', () => {
  assert.ok(files.includes('turkey.json'));
  assert.ok(files.includes('south-korea.json'));
});

for (const file of files) {
  const { meta, rows } = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
  test(`${file}: meta matches rows and every row is complete`, () => {
    assert.equal(meta.total, rows.length, 'meta.total');
    assert.match(meta.asOf, /^\d{4}-\d{2}-\d{2}$/, 'asOf');
    assert.match(meta.sourceUrl, /^https:\/\//, 'sourceUrl');
    const byCat = {};
    const ids = new Set();
    for (const r of rows) {
      for (const k of ['id', 'name', 'region', 'regionSlug', 'category', 'typeLabel', 'address']) {
        assert.ok(typeof r[k] === 'string' && r[k].length > 0, `${k} missing on ${r.id || JSON.stringify(r)}`);
      }
      assert.match(r.regionSlug, /^[a-z0-9-]+$/, `regionSlug ${r.regionSlug}`);
      assert.ok(!ids.has(r.id), `duplicate id ${r.id}`);
      ids.add(r.id);
      byCat[r.category] = (byCat[r.category] || 0) + 1;
    }
    assert.deepEqual(byCat, meta.byCategory, 'byCategory');
    assert.ok(rows.length > 1000, 'a real registry has more than 1,000 rows');
  });
}

test('registry config categories cover every category in the data', () => {
  const src = fs.readFileSync(path.join(root, 'src/lib/registries/index.ts'), 'utf8');
  for (const file of files) {
    const { meta } = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
    for (const cat of Object.keys(meta.byCategory)) {
      assert.ok(src.includes(`slug: '${cat}'`), `${file}: category '${cat}' has no label in registries config`);
    }
  }
});
