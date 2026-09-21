import test from 'node:test';
import assert from 'node:assert/strict';
import { main, loadClient, parseArgs, scopeFor, PROPERTY, STREAM, SETTINGS, READ_SCOPE, EDIT_SCOPE } from '../scripts/growth/google-analytics.mjs';

const ADMIN = 'https://analyticsadmin.googleapis.com/v1beta/';
const ENHANCED = 'https://analyticsadmin.googleapis.com/v1alpha/' + SETTINGS;
const DATA = 'https://analyticsdata.googleapis.com/v1beta/';
const METRICS = ['totalUsers', 'screenPageViews', 'sessions', 'eventCount'];

async function run(argv, respond = () => { throw new Error('Unexpected API request'); }) {
  const calls = [];
  const scopes = [];
  const stdout = [];
  const stderr = [];
  const exitCode = await main(argv, {
    getClient: async scope => {
      scopes.push(scope);
      return { request: async options => {
        calls.push(options);
        return { status: 200, data: await respond(options, calls.length) };
      } };
    },
    output: text => stdout.push(text),
    errorOutput: text => stderr.push(text),
  });
  assert.equal(stdout.length + stderr.length, 1, 'one complete JSON result');
  return { exitCode, calls, scopes, stdout, stderr, result: JSON.parse(stdout[0] || stderr[0]) };
}

function statusResponse({ url }) {
  if (url === ADMIN + PROPERTY) return { name: PROPERTY, displayName: 'Synthetic property', timeZone: 'America/Los_Angeles', currencyCode: 'USD' };
  if (url === ADMIN + STREAM) return { name: STREAM, type: 'WEB_DATA_STREAM', webStreamData: { measurementId: 'G-EXAMPLE', defaultUri: 'https://example.invalid' } };
  if (url === ENHANCED) return { name: SETTINGS, scrollsEnabled: true };
  if (url === ADMIN + PROPERTY + '/customDimensions') return {};
  if (url === ADMIN + PROPERTY + '/keyEvents') return {};
  throw new Error('Unexpected target');
}

test('argument validation is strict, silent about arbitrary input, and precedes authentication', async () => {
  const bad = [
    [], ['delete'], ['status', '--apply'], ['status', '--property', 'SECRET_TARGET'],
    ['realtime', '--url', 'https://SECRET_TARGET.invalid'],
    ['disable-enhanced-measurement', '--apply=true'], ['disable-enhanced-measurement', '--apply', '--apply'],
    ['report'], ['report', '--start', '2026-09-01', '--end', '2026-09-30', '--apply'],
    ['report', '--start', '2026-09-01', '--start', '2026-09-02'],
    ['report', '--start', '2025-02-29', '--end', '2025-03-01'],
    ['report', '--start', '2026-04-31', '--end', '2026-05-01'],
    ['report', '--start', '2026-9-01', '--end', '2026-09-30'],
    ['report', '--start', '2026-09-30', '--end', '2026-09-01'],
    ['report', '--start', '2026-09-01T00:00:00Z', '--end', '2026-09-30'],
    ['report', '--start', 'SECRET_TARGET', '--end', '2026-09-30'],
  ];
  for (const argv of bad) {
    const outcome = await run(argv);
    assert.equal(outcome.exitCode, 2, JSON.stringify(argv));
    assert.deepEqual(outcome.scopes, []);
    assert.deepEqual(outcome.calls, []);
    assert.equal(outcome.result.error.code, 'INVALID_ARGUMENT');
    assert.doesNotMatch(outcome.stderr[0], /SECRET_TARGET/);
  }
  assert.throws(() => parseArgs([null]));
  assert.throws(() => parseArgs('status'));
  assert.deepEqual(parseArgs(['report', '--end', '2024-02-29', '--start', '2024-02-29']), { command: 'report', start: '2024-02-29', end: '2024-02-29' });
  assert.equal(scopeFor({ command: 'status', apply: true }), READ_SCOPE);
  assert.equal(scopeFor({ command: 'disable-enhanced-measurement', apply: 'true' }), READ_SCOPE);
});

test('status uses only fixed Admin targets with readonly scope and normalizes omitted false flags', async () => {
  const outcome = await run(['status'], statusResponse);
  assert.equal(outcome.exitCode, 0);
  assert.deepEqual(outcome.scopes, [READ_SCOPE]);
  assert.equal(outcome.calls.length, 5);
  assert.deepEqual(new Set(outcome.calls.map(call => call.url)), new Set([ADMIN + PROPERTY, ADMIN + STREAM, ENHANCED, ADMIN + PROPERTY + '/customDimensions', ADMIN + PROPERTY + '/keyEvents']));
  for (const call of outcome.calls) {
    assert.equal(call.method, 'GET');
    assert.equal(call.data, undefined);
    assert.equal(call.timeout, 30000);
    assert.equal(call.retry, false);
    assert.equal(call.maxRedirects, 0);
  }
  assert.equal(outcome.result.enhancedMeasurement.streamEnabled, false);
  assert.equal(outcome.result.enhancedMeasurement.scrollsEnabled, true);
  assert.deepEqual(outcome.result.customDimensions, []);
  assert.deepEqual(outcome.result.keyEvents, []);
});

test('status follows pagination for both configuration lists and never changes targets', async () => {
  const outcome = await run(['status'], options => {
    for (const collection of ['customDimensions', 'keyEvents']) {
      if (options.url !== ADMIN + PROPERTY + '/' + collection) continue;
      assert.equal(options.params.pageSize, 200);
      const secondPage = options.params.pageToken === 'next-page';
      assert.ok(secondPage || options.params.pageToken === undefined);
      return { [collection]: [{ name: PROPERTY + '/' + collection + '/' + (secondPage ? '2' : '1'), displayName: 'Synthetic', eventName: 'provider_click', internalField: 'omit' }], ...(secondPage ? {} : { nextPageToken: 'next-page' }) };
    }
    return statusResponse(options);
  });
  assert.equal(outcome.exitCode, 0);
  assert.equal(outcome.calls.length, 7);
  assert.equal(outcome.result.customDimensions.length, 2);
  assert.equal(outcome.result.keyEvents.length, 2);
  assert.doesNotMatch(outcome.stdout[0], /internalField|next-page/);
});

test('status refuses repeated pagination and mismatched resources without partial success', async () => {
  for (const kind of ['pagination', 'resource', 'settings']) {
    const outcome = await run(['status'], options => {
      if (kind === 'pagination' && options.url.endsWith('/customDimensions')) return { nextPageToken: 'repeat' };
      if (kind === 'resource' && options.url === ADMIN + PROPERTY) return { name: 'properties/999' };
      if (kind === 'settings' && options.url === ENHANCED) return {};
      return statusResponse(options);
    });
    assert.equal(outcome.exitCode, 1);
    assert.equal(outcome.result.error.code, 'INVALID_RESPONSE');
    assert.equal(outcome.stdout.length, 0);
    assert.ok(outcome.calls.length <= 6);
  }
});

test('report requests one dimensionless aggregate, preserving count precision and quality metadata', async () => {
  const outcome = await run(['report', '--start', '2026-09-01', '--end', '2026-09-17'], options => {
    assert.equal(options.method, 'POST');
    assert.equal(options.url, DATA + PROPERTY + ':runReport');
    assert.deepEqual(options.data, { dateRanges: [{ startDate: '2026-09-01', endDate: '2026-09-17' }], metrics: METRICS.map(name => ({ name })), limit: '1' });
    return { metricHeaders: METRICS.map(name => ({ name })), rows: [{ metricValues: ['42', '9007199254740993', '51', '184'].map(value => ({ value })) }], rowCount: 1, metadata: { timeZone: 'America/Los_Angeles', subjectToThresholding: true, dataLossFromOtherRow: false, samplingMetadatas: [{ samplesReadCount: '10', samplingSpaceSize: '100' }], ignored: 'omit' } };
  });
  assert.equal(outcome.exitCode, 0);
  assert.deepEqual(outcome.scopes, [READ_SCOPE]);
  assert.equal(outcome.result.metrics.screenPageViews, '9007199254740993');
  assert.equal(outcome.result.metrics.totalUsers, '42');
  assert.equal(outcome.result.metadata.subjectToThresholding, true);
  assert.equal(outcome.result.metadata.timeZone, 'America/Los_Angeles');
  assert.equal(outcome.result.metadata.ignored, undefined);
  assert.equal(outcome.result.qaActivityExcluded, false);
});

test('report distinguishes no rows from zero totals and rejects malformed or nonaggregate counts', async () => {
  const headers = { metricHeaders: METRICS.map(name => ({ name })) };
  const empty = await run(['report', '--start', '2026-09-01', '--end', '2026-09-01'], () => headers);
  assert.equal(empty.exitCode, 0);
  assert.equal(empty.result.metrics, null);
  assert.equal(empty.result.rowCount, 0);
  for (const response of [
    { ...headers, rowCount: 2 },
    { ...headers, rows: [{ metricValues: ['1', '-1', '1', '1'].map(value => ({ value })) }] },
    { metricHeaders: [{ name: 'different' }] },
  ]) {
    const outcome = await run(['report', '--start', '2026-09-01', '--end', '2026-09-01'], () => response);
    assert.equal(outcome.exitCode, 1);
    assert.equal(outcome.result.error.code, 'INVALID_RESPONSE');
  }
});

test('realtime requests only aggregate event names and counts over 30 minutes and labels truncation', async () => {
  const outcome = await run(['realtime'], options => {
    assert.equal(options.url, DATA + PROPERTY + ':runRealtimeReport');
    assert.equal(options.method, 'POST');
    assert.deepEqual(options.data, { dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], minuteRanges: [{ startMinutesAgo: 29, endMinutesAgo: 0 }], limit: '10000' });
    return { dimensionHeaders: [{ name: 'eventName' }], metricHeaders: [{ name: 'eventCount' }], rows: [{ dimensionValues: [{ value: 'provider_click' }], metricValues: [{ value: '3' }] }], rowCount: 2 };
  });
  assert.equal(outcome.exitCode, 0);
  assert.deepEqual(outcome.scopes, [READ_SCOPE]);
  assert.deepEqual(outcome.result.events, [{ eventName: 'provider_click', eventCount: '3' }]);
  assert.equal(outcome.result.windowMinutes, 30);
  assert.equal(outcome.result.truncated, true);
  assert.equal(outcome.result.qaActivityExcluded, false);
});

test('disable without --apply is a readonly preview and makes no mutation', async () => {
  const outcome = await run(['disable-enhanced-measurement'], options => {
    assert.equal(options.url, ENHANCED);
    assert.equal(options.method, 'GET');
    return { name: SETTINGS, streamEnabled: true };
  });
  assert.equal(outcome.exitCode, 0);
  assert.deepEqual(outcome.scopes, [READ_SCOPE]);
  assert.equal(outcome.calls.length, 1);
  assert.equal(outcome.result.applied, false);
  assert.equal(outcome.result.applyRequired, true);
  assert.deepEqual(outcome.result.proposed, { streamEnabled: false });
});

test('explicit apply uses edit scope, patches only streamEnabled, then independently verifies readback', async () => {
  const outcome = await run(['disable-enhanced-measurement', '--apply'], (options, index) => {
    assert.equal(options.url, ENHANCED);
    if (index === 1) {
      assert.equal(options.method, 'PATCH');
      assert.deepEqual(options.data, { streamEnabled: false });
      assert.deepEqual(options.params, { updateMask: 'stream_enabled' });
      return { name: SETTINGS, streamEnabled: true }; // PATCH response is not the verification.
    }
    assert.equal(options.method, 'GET');
    assert.equal(options.data, undefined);
    assert.equal(options.params, undefined);
    return { name: SETTINGS, scrollsEnabled: true }; // Protobuf omits default false.
  });
  assert.equal(outcome.exitCode, 0);
  assert.deepEqual(outcome.scopes, [EDIT_SCOPE]);
  assert.equal(outcome.calls.length, 2);
  assert.equal(outcome.result.applied, true);
  assert.equal(outcome.result.verified, true);
  assert.equal(outcome.result.enhancedMeasurement.streamEnabled, false);
  assert.equal(outcome.result.enhancedMeasurement.scrollsEnabled, true);
});

test('apply cannot report verified success after enabled, malformed, or failed readback', async () => {
  for (const readback of [{ name: SETTINGS, streamEnabled: true }, {}, { name: SETTINGS, streamEnabled: 'false' }]) {
    const outcome = await run(['disable-enhanced-measurement', '--apply'], (_options, index) => index === 1 ? { name: SETTINGS } : readback);
    assert.equal(outcome.exitCode, 1);
    assert.equal(outcome.calls.length, 2);
    assert.equal(outcome.result.ok, false);
    assert.equal(outcome.result.verified, undefined);
  }
  const failed = await run(['disable-enhanced-measurement', '--apply'], (_options, index) => {
    if (index === 1) return { name: SETTINGS };
    throw { response: { status: 503, data: { error: { status: 'UNAVAILABLE' } } } };
  });
  assert.equal(failed.exitCode, 1);
  assert.equal(failed.result.error.method, 'GET');
  assert.equal(failed.result.error.code, 'UNAVAILABLE');
});

test('API and unexpected errors never serialize tokens, headers, request config, paths, or raw messages', async () => {
  const secret = 'SECRET_NEVER_PRINT';
  const outcome = await run(['disable-enhanced-measurement', '--apply'], () => {
    throw { message: secret, stack: secret, config: { url: secret, headers: { Authorization: secret } }, response: { status: 403, headers: { Authorization: secret }, data: { error: { status: 'PERMISSION_DENIED', message: secret, details: secret } } } };
  });
  assert.equal(outcome.exitCode, 1);
  assert.equal(outcome.calls.length, 1, 'failed PATCH must not claim readback');
  assert.deepEqual(Object.keys(outcome.result.error).sort(), ['code', 'context', 'method', 'status']);
  assert.equal(outcome.result.error.method, 'PATCH');
  assert.equal(outcome.result.error.status, 403);
  assert.equal(outcome.result.error.code, 'PERMISSION_DENIED');
  assert.match(outcome.result.error.context, /authorized Analytics editor/);
  assert.doesNotMatch(outcome.stderr[0], /SECRET_NEVER_PRINT|Authorization|config|stack/);
  const untrustedCode = await run(['realtime'], () => { throw { response: { status: '403 ' + secret, data: { error: { status: secret } } } }; });
  assert.equal(untrustedCode.result.error.status, null);
  assert.equal(untrustedCode.result.error.code, 'REQUEST_FAILED');
  assert.doesNotMatch(untrustedCode.stderr[0], /SECRET_NEVER_PRINT/);
  const messages = [];
  const code = await main(['status'], { getClient: () => { throw new Error(secret); }, errorOutput: text => messages.push(text) });
  assert.equal(code, 1);
  assert.equal(JSON.parse(messages[0]).error.code, 'UNEXPECTED_FAILURE');
  assert.doesNotMatch(messages[0], /SECRET_NEVER_PRINT/);
});

function authFixture({ configured = 'keys/analytics.json', environment = {}, keyFile = true, readable = true, authFailure = false } = {}) {
  const calls = { require: [], reads: [], stats: [], access: [], auth: [] };
  const client = { request: () => { throw new Error('No network in auth test'); } };
  const dependencies = {
    home: '/fixture-home', environment,
    createRequire: filename => {
      calls.require.push(filename);
      return name => {
        calls.require.push(name);
        if (name === 'dotenv') return { parse: content => { assert.equal(content, 'SYNTHETIC_ENV'); return configured == null ? {} : { GA_SA_KEY_FILE: configured }; } };
        if (name === 'google-auth-library') return { GoogleAuth: class {
          constructor(options) { calls.auth.push(options); }
          async getClient() { if (authFailure) throw new Error('SECRET_AUTH_DETAILS'); return client; }
        } };
        throw new Error('Unexpected dependency');
      };
    },
    readFileSync: (filename, encoding) => { calls.reads.push([filename, encoding]); return 'SYNTHETIC_ENV'; },
    statSync: filename => { calls.stats.push(filename); return { isFile: () => keyFile }; },
    accessSync: filename => { calls.access.push(filename); if (!readable) throw new Error('SECRET_FILE_DETAILS'); },
  };
  return { calls, client, dependencies };
}

test('auth reuses only existing workflow dependencies and silently parsed configured key file', async () => {
  const fixture = authFixture();
  assert.equal(await loadClient(READ_SCOPE, fixture.dependencies), fixture.client);
  assert.deepEqual(fixture.calls.require, ['/fixture-home/Documents/agent-os/workflows/package.json', 'google-auth-library', 'dotenv']);
  assert.deepEqual(fixture.calls.reads, [['/fixture-home/Documents/agent-os/workflows/.env', 'utf8']]);
  assert.deepEqual(fixture.calls.auth, [{ keyFile: '/fixture-home/Documents/agent-os/workflows/keys/analytics.json', scopes: [READ_SCOPE] }]);
  assert.deepEqual(fixture.dependencies.environment, {}, 'dotenv parsing must not modify process environment');
  assert.equal(fixture.calls.stats.length, 1);
  assert.equal(fixture.calls.access.length, 1);
  const override = authFixture({ environment: { GA_SA_KEY_FILE: '~/existing-key.json' } });
  await loadClient(EDIT_SCOPE, override.dependencies);
  assert.deepEqual(override.calls.auth, [{ keyFile: '/fixture-home/existing-key.json', scopes: [EDIT_SCOPE] }]);
});

test('auth rejects missing, blank, non-file, unreadable, and invalid keys without fallback or disclosure', async () => {
  const fixtures = [
    [authFixture({ configured: null }), 'KEY_FILE_REQUIRED'],
    [authFixture({ configured: '' }), 'KEY_FILE_REQUIRED'],
    [authFixture({ environment: { GA_SA_KEY_FILE: ' ' } }), 'KEY_FILE_REQUIRED'],
    [authFixture({ keyFile: false }), 'KEY_FILE_UNAVAILABLE'],
    [authFixture({ readable: false }), 'KEY_FILE_UNAVAILABLE'],
    [authFixture({ authFailure: true }), 'AUTHENTICATION_FAILED'],
  ];
  for (const [fixture, expected] of fixtures) {
    const stderr = [];
    const exit = await main(['status'], { getClient: scope => loadClient(scope, fixture.dependencies), errorOutput: text => stderr.push(text) });
    assert.equal(exit, 1);
    assert.equal(JSON.parse(stderr[0]).error.code, expected);
    assert.doesNotMatch(stderr[0], /SECRET_|fixture-home|analytics\.json|\/tmp\//);
    assert.ok(fixture.calls.stats.length <= 1, 'no credential discovery or alternate-file search');
    if (expected === 'KEY_FILE_REQUIRED') assert.equal(fixture.calls.stats.length, 0);
    if (expected !== 'AUTHENTICATION_FAILED') assert.equal(fixture.calls.auth.length, 0);
  }
});

test('missing workflow dependencies or environment produces sanitized setup errors', async () => {
  for (const [dependency, expected] of [['createRequire', 'WORKFLOW_RUNTIME_UNAVAILABLE'], ['readFileSync', 'WORKFLOW_ENV_UNAVAILABLE']]) {
    const fixture = authFixture();
    fixture.dependencies[dependency] = () => { throw new Error('SECRET_SETUP_PATH'); };
    const stderr = [];
    assert.equal(await main(['status'], { getClient: scope => loadClient(scope, fixture.dependencies), errorOutput: text => stderr.push(text) }), 1);
    assert.equal(JSON.parse(stderr[0]).error.code, expected);
    assert.doesNotMatch(stderr[0], /SECRET_SETUP_PATH/);
    assert.equal(fixture.calls.auth.length, 0);
  }
});

test('a fresh module import is side-effect free and does not require Google packages or credentials', async () => {
  const module = await import('../scripts/growth/google-analytics.mjs?import-safety-check');
  assert.equal(typeof module.main, 'function');
  assert.equal(module.PROPERTY, PROPERTY);
});
