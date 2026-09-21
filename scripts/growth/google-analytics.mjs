#!/usr/bin/env node
/** Fixed-property GA4 CLI. Importing this module never loads credentials or calls Google. */
import { createRequire } from 'node:module';
import { readFileSync, statSync, accessSync, constants } from 'node:fs';
import { homedir } from 'node:os';
import { isAbsolute, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const PROPERTY = 'properties/525308720';
export const STREAM = PROPERTY + '/dataStreams/13643622976';
export const SETTINGS = STREAM + '/enhancedMeasurementSettings';
export const READ_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly';
export const EDIT_SCOPE = 'https://www.googleapis.com/auth/analytics.edit';
const ADMIN = 'https://analyticsadmin.googleapis.com/v1beta/';
const ENHANCED_URL = 'https://analyticsadmin.googleapis.com/v1alpha/' + SETTINGS;
const DATA = 'https://analyticsdata.googleapis.com/v1beta/';
const METRICS = ['totalUsers', 'screenPageViews', 'sessions', 'eventCount'];
const SETTINGS_FLAGS = ['streamEnabled', 'scrollsEnabled', 'outboundClicksEnabled', 'siteSearchEnabled', 'videoEngagementEnabled', 'fileDownloadsEnabled', 'pageChangesEnabled', 'formInteractionsEnabled'];
const API_CODES = new Set(['CANCELLED', 'UNKNOWN', 'INVALID_ARGUMENT', 'DEADLINE_EXCEEDED', 'NOT_FOUND', 'ALREADY_EXISTS', 'PERMISSION_DENIED', 'RESOURCE_EXHAUSTED', 'FAILED_PRECONDITION', 'ABORTED', 'OUT_OF_RANGE', 'UNIMPLEMENTED', 'INTERNAL', 'UNAVAILABLE', 'DATA_LOSS', 'UNAUTHENTICATED']);
const USAGE = 'Use status, realtime, report --start YYYY-MM-DD --end YYYY-MM-DD, or disable-enhanced-measurement [--apply]. Property and stream are fixed.';

class SafeError extends Error {
  constructor(code, context, method = 'CLI', status = null) {
    super(context);
    this.publicError = { method, status, code, context };
  }
}

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T00:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function parseArgs(argv) {
  if (!Array.isArray(argv) || argv.some(value => typeof value !== 'string')) throw new SafeError('INVALID_ARGUMENT', USAGE);
  const [command, ...args] = argv;
  if (command === 'status' || command === 'realtime') {
    if (args.length) throw new SafeError('INVALID_ARGUMENT', USAGE);
    return { command };
  }
  if (command === 'disable-enhanced-measurement') {
    if (args.length > 1 || (args.length === 1 && args[0] !== '--apply')) throw new SafeError('INVALID_ARGUMENT', USAGE);
    return { command, apply: args[0] === '--apply' };
  }
  if (command === 'report') {
    if (args.length !== 4) throw new SafeError('INVALID_ARGUMENT', USAGE);
    const dates = {};
    for (let index = 0; index < args.length; index += 2) {
      const option = args[index];
      if (!['--start', '--end'].includes(option) || option in dates || !validDate(args[index + 1])) throw new SafeError('INVALID_ARGUMENT', 'Report dates must be real calendar dates in YYYY-MM-DD format, supplied once each.');
      dates[option] = args[index + 1];
    }
    if (!dates['--start'] || !dates['--end'] || dates['--start'] > dates['--end']) throw new SafeError('INVALID_ARGUMENT', 'Report requires a start date on or before its end date.');
    return { command, start: dates['--start'], end: dates['--end'] };
  }
  throw new SafeError('INVALID_ARGUMENT', USAGE);
}

export function scopeFor(options) {
  return options.command === 'disable-enhanced-measurement' && options.apply === true ? EDIT_SCOPE : READ_SCOPE;
}

/** Reuse the configured workflow dependency runtime; no credential discovery or temp-file fallback. */
export async function loadClient(scope, dependencies = {}) {
  const home = dependencies.home || homedir();
  const workflow = join(home, 'Documents/agent-os/workflows');
  const environment = dependencies.environment || process.env;
  const read = dependencies.readFileSync || readFileSync;
  const stat = dependencies.statSync || statSync;
  const access = dependencies.accessSync || accessSync;
  const requireFrom = dependencies.createRequire || createRequire;
  let GoogleAuth;
  let dotenv;
  let parsed;
  try {
    const require = requireFrom(join(workflow, 'package.json'));
    ({ GoogleAuth } = require('google-auth-library'));
    dotenv = require('dotenv');
  } catch {
    throw new SafeError('WORKFLOW_RUNTIME_UNAVAILABLE', 'The existing agent-os workflow dependencies are required. No packages or credentials were installed.', 'AUTH');
  }
  try {
    // parse() is silent and does not mutate process.env or log .env contents.
    parsed = dotenv.parse(read(join(workflow, '.env'), 'utf8'));
  } catch {
    throw new SafeError('WORKFLOW_ENV_UNAVAILABLE', 'The existing agent-os workflow environment could not be loaded.', 'AUTH');
  }
  const configured = environment.GA_SA_KEY_FILE ?? parsed.GA_SA_KEY_FILE;
  if (typeof configured !== 'string' || !configured.trim()) throw new SafeError('KEY_FILE_REQUIRED', 'Configure GA_SA_KEY_FILE in the existing workflow environment. No fallback credential file is used.', 'AUTH');
  const filename = configured.startsWith('~/') ? join(home, configured.slice(2)) : configured;
  const keyFile = isAbsolute(filename) ? filename : resolve(workflow, filename);
  try {
    if (!stat(keyFile).isFile()) throw new Error();
    access(keyFile, constants.R_OK);
  } catch {
    throw new SafeError('KEY_FILE_UNAVAILABLE', 'The configured service-account key must be an existing readable file.', 'AUTH');
  }
  try {
    return await new GoogleAuth({ keyFile, scopes: [scope] }).getClient();
  } catch {
    throw new SafeError('AUTHENTICATION_FAILED', 'The existing Google service-account configuration could not authenticate.', 'AUTH');
  }
}

function apiFailure(error, method, context) {
  const candidate = error?.response?.status;
  const status = Number.isInteger(candidate) && candidate >= 400 && candidate <= 599 ? candidate : null;
  const candidateCode = error?.response?.data?.error?.status;
  const code = API_CODES.has(candidateCode) ? candidateCode : 'REQUEST_FAILED';
  return new SafeError(code, context, method, status);
}

async function request(client, method, url, context, body, params) {
  try {
    const response = await client.request({ method, url, ...(body ? { data: body } : {}), ...(params ? { params } : {}), timeout: 30000, retry: false, maxRedirects: 0 });
    if (response.status && (response.status < 200 || response.status >= 300)) throw { response };
    if (!response.data || typeof response.data !== 'object' || Array.isArray(response.data)) throw new SafeError('INVALID_RESPONSE', context + ' The response was not a JSON object.', method);
    return response.data;
  } catch (error) {
    if (error instanceof SafeError) throw error;
    throw apiFailure(error, method, context);
  }
}

function fields(source, keys) {
  return Object.fromEntries(keys.filter(key => source[key] !== undefined).map(key => [key, source[key]]));
}

function named(data, expected, context) {
  if (data.name !== expected) throw new SafeError('INVALID_RESPONSE', context + ' The returned resource did not match the fixed target.', 'GET');
  return data;
}

function enhanced(data) {
  named(data, SETTINGS, 'Enhanced Measurement readback failed.');
  for (const key of SETTINGS_FLAGS) {
    if (data[key] !== undefined && typeof data[key] !== 'boolean') throw new SafeError('INVALID_RESPONSE', 'Enhanced Measurement readback contained an invalid flag.', 'GET');
  }
  // The Admin API omits default-false protobuf fields on a successful named resource.
  return { name: SETTINGS, ...Object.fromEntries(SETTINGS_FLAGS.map(key => [key, data[key] ?? false])) };
}

async function settings(client) {
  return enhanced(await request(client, 'GET', ENHANCED_URL, 'Could not read Enhanced Measurement for the fixed web stream.'));
}

async function listAll(client, collection, keys) {
  const all = [];
  const seen = new Set();
  let pageToken;
  for (let page = 0; page < 100; page++) {
    const data = await request(client, 'GET', ADMIN + PROPERTY + '/' + collection, 'Could not read the fixed property reporting configuration.', undefined, { pageSize: 200, ...(pageToken ? { pageToken } : {}) });
    if (data[collection] !== undefined && !Array.isArray(data[collection])) throw new SafeError('INVALID_RESPONSE', 'The reporting configuration list was malformed.', 'GET');
    for (const item of data[collection] || []) {
      if (!item || typeof item.name !== 'string' || !item.name.startsWith(PROPERTY + '/' + collection + '/')) throw new SafeError('INVALID_RESPONSE', 'A reporting configuration item did not match the fixed property.', 'GET');
      all.push(fields(item, keys));
    }
    if (!data.nextPageToken) return all;
    if (typeof data.nextPageToken !== 'string' || seen.has(data.nextPageToken)) throw new SafeError('INVALID_RESPONSE', 'Reporting configuration pagination did not advance.', 'GET');
    pageToken = data.nextPageToken;
    seen.add(pageToken);
  }
  throw new SafeError('PAGINATION_LIMIT', 'Reporting configuration exceeded the bounded pagination limit; no partial list is reported.', 'GET');
}

function counts(data, names) {
  if (!Array.isArray(data.metricHeaders) || data.metricHeaders.length !== names.length || data.metricHeaders.some((header, index) => header.name !== names[index])) throw new SafeError('INVALID_RESPONSE', 'The aggregate metric headers were unexpected.', 'POST');
  if (data.rows !== undefined && !Array.isArray(data.rows)) throw new SafeError('INVALID_RESPONSE', 'The aggregate rows were malformed.', 'POST');
  return (data.rows || []).map(row => {
    if (!Array.isArray(row.metricValues) || row.metricValues.length !== names.length || row.metricValues.some(metric => typeof metric.value !== 'string' || !/^\d+$/.test(metric.value))) throw new SafeError('INVALID_RESPONSE', 'The aggregate metric values were malformed.', 'POST');
    return Object.fromEntries(names.map((name, index) => [name, row.metricValues[index].value]));
  });
}

async function execute(options, client) {
  const common = { ok: true, command: options.command, property: PROPERTY, stream: STREAM };
  if (options.command === 'status') {
    const results = await Promise.allSettled([
      request(client, 'GET', ADMIN + PROPERTY, 'Could not read the fixed Analytics property.'),
      request(client, 'GET', ADMIN + STREAM, 'Could not read the fixed Analytics web stream.'),
      settings(client),
      listAll(client, 'customDimensions', ['name', 'parameterName', 'displayName', 'scope', 'disallowAdsPersonalization']),
      listAll(client, 'keyEvents', ['name', 'eventName', 'countingMethod', 'defaultValue', 'deletable', 'custom']),
    ]);
    const failure = results.find(result => result.status === 'rejected');
    if (failure) throw failure.reason;
    const [property, stream, measurement, customDimensions, keyEvents] = results.map(result => result.value);
    return { ...common, propertyDetails: fields(named(property, PROPERTY, 'Property read failed.'), ['name', 'displayName', 'timeZone', 'currencyCode', 'serviceLevel']), streamDetails: fields(named(stream, STREAM, 'Web stream read failed.'), ['name', 'displayName', 'type', 'webStreamData']), enhancedMeasurement: measurement, customDimensions, keyEvents };
  }
  if (options.command === 'report') {
    const data = await request(client, 'POST', DATA + PROPERTY + ':runReport', 'Could not read aggregate Analytics metrics for the requested dates.', {
      dateRanges: [{ startDate: options.start, endDate: options.end }], metrics: METRICS.map(name => ({ name })), limit: '1',
    });
    const rows = counts(data, METRICS);
    if (rows.length > 1 || (data.rowCount !== undefined && data.rowCount > 1)) throw new SafeError('INVALID_RESPONSE', 'The dimensionless report returned more than one aggregate row.', 'POST');
    return { ...common, startDate: options.start, endDate: options.end, metrics: rows[0] || null, rowCount: data.rowCount ?? rows.length, metadata: fields(data.metadata || {}, ['timeZone', 'currencyCode', 'subjectToThresholding', 'dataLossFromOtherRow', 'samplingMetadatas']), qaActivityExcluded: false };
  }
  if (options.command === 'realtime') {
    const data = await request(client, 'POST', DATA + PROPERTY + ':runRealtimeReport', 'Could not read aggregate realtime Analytics events.', {
      dimensions: [{ name: 'eventName' }], metrics: [{ name: 'eventCount' }], minuteRanges: [{ startMinutesAgo: 29, endMinutesAgo: 0 }], limit: '10000',
    });
    const metricRows = counts(data, ['eventCount']);
    if (!Array.isArray(data.dimensionHeaders) || data.dimensionHeaders.length !== 1 || data.dimensionHeaders[0].name !== 'eventName') throw new SafeError('INVALID_RESPONSE', 'The realtime report had unexpected dimensions.', 'POST');
    const events = metricRows.map((metrics, index) => {
      const dimensions = data.rows[index].dimensionValues;
      if (!Array.isArray(dimensions) || dimensions.length !== 1 || typeof dimensions[0].value !== 'string') throw new SafeError('INVALID_RESPONSE', 'A realtime event dimension was malformed.', 'POST');
      return { eventName: dimensions[0].value, eventCount: metrics.eventCount };
    });
    return { ...common, windowMinutes: 30, events, rowCount: data.rowCount ?? events.length, truncated: typeof data.rowCount === 'number' && data.rowCount > events.length, qaActivityExcluded: false };
  }
  if (!options.apply) return { ...common, applied: false, applyRequired: true, current: await settings(client), proposed: { streamEnabled: false } };
  await request(client, 'PATCH', ENHANCED_URL, 'Could not disable Enhanced Measurement. This operation requires an authorized Analytics editor.', { streamEnabled: false }, { updateMask: 'stream_enabled' });
  const readback = await settings(client);
  if (readback.streamEnabled !== false) throw new SafeError('READBACK_NOT_DISABLED', 'The setting update was sent, but the independent readback did not confirm Enhanced Measurement is disabled.', 'GET');
  return { ...common, applied: true, verified: true, enhancedMeasurement: readback };
}

/** Testable entry point. Inject an authenticated mock client; no module-load side effects. */
export async function main(argv, dependencies = {}) {
  const output = dependencies.output || (text => process.stdout.write(text + '\n'));
  const errorOutput = dependencies.errorOutput || (text => process.stderr.write(text + '\n'));
  try {
    const options = parseArgs(argv);
    const getClient = dependencies.getClient || loadClient;
    const client = await getClient(scopeFor(options));
    output(JSON.stringify(await execute(options, client), null, 2));
    return 0;
  } catch (error) {
    const safe = error instanceof SafeError ? error.publicError : { method: 'CLI', status: null, code: 'UNEXPECTED_FAILURE', context: 'The Analytics command could not complete; no raw error or credential details are displayed.' };
    errorOutput(JSON.stringify({ ok: false, error: safe }, null, 2));
    return safe.method === 'CLI' && safe.code === 'INVALID_ARGUMENT' ? 2 : 1;
  }
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  process.exitCode = await main(process.argv.slice(2));
}
