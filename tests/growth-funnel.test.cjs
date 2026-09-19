// No network: all analytics, delivery and request-context transports are mocked.
// TypeScript is compiled in memory using the project's existing dev dependency.
const { test, beforeEach, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const sourceRoot = path.join(root, 'src') + path.sep;
const originalLoad = Module._load;
const originalTs = require.extensions['.ts'];
const originalEnvironment = { ...process.env };
const originalGlobals = Object.fromEntries(['window', 'document', 'navigator', 'localStorage'].map(key => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
const id = '11111111-1111-4111-8111-111111111111';
const nextId = '22222222-2222-4222-8222-222222222222';
let captures, initCalls, initOptions, storageWrites, sendCalls, deliveryResult, requestConsent, requestHeaders, customMocks;

const posthog = {
  init(_key, options) { initCalls++; initOptions = options; },
  has_opted_out_capturing: () => false,
  opt_in_capturing() {}, opt_out_capturing() {}, reset() {},
  capture(event, properties) {
    const envelope = { event, properties: { ...properties, token: process.env.NEXT_PUBLIC_POSTHOG_KEY, distinct_id: properties.distinct_id || id, $session_id: nextId, $current_url: 'https://vitalityscout.com/?private=redacted', $referrer: 'https://search.example/?private=redacted' } };
    const cleaned = initOptions.before_send(envelope);
    if (cleaned) captures.push(cleaned);
  },
};
Module._load = function (request, parent, isMain) {
  if (customMocks && Object.hasOwn(customMocks, request)) return customMocks[request];
  if (request === 'posthog-js') return posthog;
  if (request === 'resend') return { Resend: class { emails = { send: async (message, options) => {
    sendCalls.push({ message, options });
    if (deliveryResult instanceof Error) throw deliveryResult;
    return deliveryResult;
  } }; } };
  if (request === 'next/headers') return {
    cookies: () => ({ get: () => requestConsent ? { value: requestConsent } : undefined }),
    headers: () => ({ get: key => requestHeaders[key] || null }),
  };
  return originalLoad.call(this, request.startsWith('@/') ? path.join(sourceRoot, request.slice(2)) : request, parent, isMain);
};
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  fileName: filename,
}).outputText, filename);
const load = relative => require(path.join(sourceRoot, relative));

function browser(consent = 'granted', preferences = {}) {
  const values = new Map();
  const cookies = new Map(consent ? [['vs_consent', consent]] : []);
  const doc = { referrer: 'https://www.google.com/search?q=private' };
  Object.defineProperty(doc, 'cookie', {
    get: () => [...cookies].map(([key, value]) => key + '=' + value).join('; '),
    set: value => { const pair = value.split(';')[0]; const split = pair.indexOf('='); cookies.set(pair.slice(0, split), pair.slice(split + 1)); },
  });
  for (const [key, value] of Object.entries({
    window: { location: new URL('https://vitalityscout.com/guides/online-ed-treatment?private=redacted#private'), dataLayer: [] },
    document: doc,
    navigator: { doNotTrack: '0', globalPrivacyControl: false, ...preferences },
    localStorage: { getItem: key => values.get(key) ?? null, setItem: (key, value) => { storageWrites++; values.set(key, value); }, removeItem: key => values.delete(key) },
  })) Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  return values;
}

beforeEach(() => {
  for (const filename of Object.keys(require.cache)) if (filename.startsWith(sourceRoot)) delete require.cache[filename];
  captures = []; initCalls = 0; initOptions = undefined; storageWrites = 0; sendCalls = [];
  customMocks = {};
  requestConsent = 'granted'; requestHeaders = {};
  deliveryResult = { data: { id: 'accepted-test-message' }, error: null };
  for (const key of ['RESEND_API_KEY', 'LEAD_NOTIFICATION_EMAIL', 'NEXT_PUBLIC_GA4_ID', 'NEXT_PUBLIC_GTM_ID', 'NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS', 'ED_HIMS_REFERRAL_URL', 'ED_RO_REFERRAL_URL', 'ED_LEMONAID_REFERRAL_URL', 'ED_BLUECHEW_REFERRAL_URL']) delete process.env[key];
  process.env.NEXT_PUBLIC_POSTHOG_KEY = 'synthetic-test-key';
  browser();
});
after(() => {
  Module._load = originalLoad;
  if (originalTs) require.extensions['.ts'] = originalTs; else delete require.extensions['.ts'];
  for (const key of Object.keys(process.env)) if (!(key in originalEnvironment)) delete process.env[key];
  Object.assign(process.env, originalEnvironment);
  for (const [key, descriptor] of Object.entries(originalGlobals)) {
    if (descriptor) Object.defineProperty(globalThis, key, descriptor); else delete globalThis[key];
  }
});

test('first organic landing survives internal navigation; a later campaign changes only last touch', () => {
  const { nextAttribution } = load('lib/tracking/utm.ts');
  for (const referrer of ['https://www.google.com/search?q=private', 'https://www.bing.com/search?q=private']) {
    const first = nextAttribution(undefined, 'https://vitalityscout.com/guides/online-ed-treatment?private=x', referrer, 1000, id);
    const internal = nextAttribution(first, 'https://vitalityscout.com/mens-health', 'https://vitalityscout.com/guides/online-ed-treatment', 2000, nextId);
    assert.deepEqual(internal, first);
    const campaign = nextAttribution(internal, 'https://vitalityscout.com/labs?utm_source=newsletter&utm_medium=email&utm_campaign=fall', '', 3000, nextId);
    assert.equal(campaign.journey_id, id);
    assert.equal(campaign.first_landing_page, '/guides/online-ed-treatment');
    assert.equal(campaign.first_channel, 'organic');
    assert.equal(campaign.first_referrer_host, new URL(referrer).hostname);
    assert.equal(campaign.last_landing_page, '/labs');
    assert.equal(campaign.last_channel, 'email');
    assert.equal(campaign.utm_campaign, 'fall');
  }
  const claimedOrganic = nextAttribution(undefined, 'https://vitalityscout.com/labs?utm_medium=organic', '', 1000, id);
  assert.equal(claimedOrganic.first_channel, 'campaign');
});

test('stale or malformed attribution recovers and browser navigation ignores the original document referrer', () => {
  const values = browser();
  values.set('vs_attribution_v2', '{broken');
  const attribution = load('lib/tracking/utm.ts');
  attribution.captureUTMParams();
  const first = attribution.getAttributionData();
  assert.equal(first.first_channel, 'organic');
  window.location = new URL('https://vitalityscout.com/labs');
  attribution.captureUTMParams();
  assert.deepEqual(attribution.getAttributionData(), first);
  const stale = { ...first, captured_at: 1 };
  const recovered = attribution.nextAttribution(stale, 'https://vitalityscout.com/labs', '', 31 * 864e5, nextId);
  assert.equal(recovered.journey_id, nextId);
  assert.equal(recovered.first_channel, 'direct');
  assert.equal(recovered.first_landing_page, '/labs');
});

test('the property allowlist drops contact content and sanitizes allowed URL fields', () => {
  const { analyticsProperties } = load('lib/tracking/privacy.ts');
  const output = analyticsProperties({ email: 'synthetic@example.invalid', name: 'Synthetic', message: 'private', condition: 'private',
    raw_url: 'https://example.invalid/?email=private', destinationUrl: 'https://example.invalid/?email=private',
    page_path: '/guides/online-ed-treatment?private=x#private', first_referrer_host: 'https://www.bing.com/search?q=private',
    destination_host: 'https://provider.example/?private=x', provider_id: 'ro', lead_id: id,
    utm_campaign: 'private@example.invalid', utm_term: 'private', utm_content: 'private' });
  assert.deepEqual(output, { page_path: '/guides/online-ed-treatment', first_referrer_host: 'www.bing.com', destination_host: 'provider.example', provider_id: 'ro', lead_id: id });
});

test('only explicit external provider links count; citations, mail and internal links do not', () => {
  const { providerClickProperties } = load('lib/tracking/provider-click.ts');
  const origin = 'https://vitalityscout.com';
  const data = { provider_id: 'ro', category: 'ed', placement: 'comparison' };
  assert.equal(providerClickProperties('https://provider.example', origin, {}), null);
  assert.equal(providerClickProperties('https://provider.example', origin, { ...data, link_purpose: 'source' }), null);
  for (const href of ['/labs', 'https://vitalityscout.com/labs', 'mailto:synthetic@example.invalid', 'javascript:void(0)', 'https://user:pass@provider.example']) assert.equal(providerClickProperties(href, origin, data), null);
  assert.deepEqual(providerClickProperties('https://provider.example/visit?private=x', origin, data), { ...data, destination_host: 'provider.example' });
});

for (const [label, consent, preferences] of [['unset', null, {}], ['denied', 'denied', {}], ['DNT', 'granted', { doNotTrack: '1' }], ['GPC', 'granted', { globalPrivacyControl: true }]]) {
  test(label + ' prevents analytics initialization, capture and attribution storage', () => {
    browser(consent, preferences);
    load('lib/posthog-analytics.ts').initPostHog();
    load('lib/tracking/utm.ts').captureUTMParams();
    load('lib/tracking/events.ts').captureFunnelEvent('provider_click', { provider_id: 'ro', destination_host: 'provider.example' });
    assert.equal(initCalls, 0); assert.equal(captures.length, 0); assert.equal(storageWrites, 0);
    assert.deepEqual(window.dataLayer, []);
  });
}

test('the final event filter retains SDK ingestion authentication without retaining private properties', () => {
  load('lib/tracking/events.ts').captureFunnelEvent('provider_click', { provider_id: 'hims', destination_host: 'www.hims.com', email: 'synthetic@example.invalid' });
  assert.equal(captures.length, 1);
  assert.equal(captures[0].properties.token, 'synthetic-test-key');
  assert.equal(captures[0].properties.email, undefined);
  assert.equal(captures[0].properties.$referrer, undefined);
  assert.equal(captures[0].properties.$current_url.includes('?'), false);
  assert.equal(initOptions.disable_surveys, true);
});

for (const transport of ['ga4', 'gtm']) {
  test('the event bridge emits one canonical event per sink with ' + transport, () => {
    process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS = 'true';
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST';
    if (transport === 'ga4') process.env.NEXT_PUBLIC_GA4_ID = 'G-TEST';
    const { captureFunnelEvent } = load('lib/tracking/events.ts');
    captureFunnelEvent('provider_click', { provider_id: 'ro', destination_host: 'provider.example', email: 'synthetic@example.invalid' });
    captureFunnelEvent('contact_received', { form_type: 'email_capture', form_source: 'guide_ed', lead_id: id });
    assert.deepEqual(captures.map(item => item.event), ['provider_click', 'contact_received']);
    const googleEvents = window.dataLayer.filter(item => transport === 'ga4' ? item[0] === 'event' : Boolean(item.event));
    assert.deepEqual(googleEvents.map(item => transport === 'ga4' ? item[1] : item.event), ['provider_click', 'contact_received']);
    assert.equal(initCalls, 1);
    for (const captured of captures) {
      assert.equal(captured.properties.$site, 'vitality-web');
      assert.equal(captured.properties.schema_version, 2);
      assert.equal(captured.properties.email, undefined);
      assert.equal(captured.properties.$referrer, undefined);
      assert.equal(captured.properties.$current_url, 'https://vitalityscout.com/guides/online-ed-treatment');
    }
    assert.equal(initOptions.autocapture, false);
    assert.equal(initOptions.disable_session_recording, true);
    assert.equal(initOptions.persistence, 'memory');
    if (transport === 'ga4') {
      const configs = window.dataLayer.filter(item => item[0] === 'config');
      assert.equal(configs.length, 1);
      assert.equal(configs[0][2].send_page_view, false);
      assert.equal(googleEvents[0][2].page_referrer, 'https://www.google.com');
    }
  });
}

for (const flag of [undefined, 'false']) {
  test('Google release gate ' + (flag || 'unset') + ' prevents its initialization and queue while PostHog receives events', () => {
    if (flag) process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS = flag;
    process.env.NEXT_PUBLIC_GA4_ID = 'G-TEST';
    process.env.NEXT_PUBLIC_GTM_ID = 'GTM-TEST';
    delete window.dataLayer;
    const { googleAnalyticsEnabled, updateGoogleConsent, sendGoogleEvent } = load('lib/tracking/google.ts');
    assert.equal(googleAnalyticsEnabled(), false);
    updateGoogleConsent(true);
    sendGoogleEvent('provider_click', { provider_id: 'ro' });
    load('lib/tracking/events.ts').captureFunnelEvent('provider_click', { provider_id: 'ro', destination_host: 'provider.example' });
    assert.equal(window.gtag, undefined);
    assert.equal(window.dataLayer, undefined);
    assert.deepEqual(captures.map(item => item.event), ['provider_click']);
  });
}

const contact = () => ({ type: 'email_capture', leadId: id, email: 'synthetic@example.invalid', source: 'test', attribution: {} });
test('delivery requires explicit configuration and actual accepted message ID; retries preserve idempotency', async () => {
  const { contactDeliveryConfigured, deliverContact } = load('lib/forms/delivery.ts');
  assert.equal(contactDeliveryConfigured('test', undefined), false);
  assert.equal(contactDeliveryConfigured('test', 'invalid'), false);
  assert.equal(await deliverContact(contact(), {}), false);
  assert.equal(sendCalls.length, 0);
  const config = { apiKey: 'synthetic-test-key', recipient: 'inbox@example.invalid' };
  deliveryResult = { data: null, error: { message: 'test rejection' } };
  assert.equal(await deliverContact(contact(), config), false);
  deliveryResult = { data: null, error: null };
  assert.equal(await deliverContact(contact(), config), false);
  deliveryResult = new Error('synthetic transport failure');
  const errorLog = console.error;
  console.error = () => {};
  try { assert.equal(await deliverContact(contact(), config), false); } finally { console.error = errorLog; }
  deliveryResult = { data: { id: 'accepted-test-message' }, error: null };
  assert.equal(await deliverContact(contact(), config), true);
  assert.equal(await deliverContact(contact(), config), true);
  assert.equal(new Set(sendCalls.map(call => call.options.idempotencyKey)).size, 1);
  assert.equal(sendCalls[0].options.idempotencyKey, 'contact/' + id);
  assert.equal(captures.length, 0);
});

test('server actions never report analytics-only success and independently apply attribution consent', async () => {
  const { submitEmailCapture, getContactAvailability } = load('lib/forms/actions.ts');
  const data = new FormData();
  data.set('email', 'synthetic@example.invalid'); data.set('source', 'guide_ed'); data.set('submission_id', id);
  data.set('attribution_data', JSON.stringify({ first_channel: 'organic', first_landing_page: '/guides/online-ed-treatment?private=x', journey_id: nextId, email: 'synthetic@example.invalid' }));
  assert.equal(await getContactAvailability(), false);
  assert.equal((await submitEmailCapture({ success: false }, data)).success, false);
  assert.equal(sendCalls.length, 0);
  process.env.RESEND_API_KEY = 'synthetic-test-key'; process.env.LEAD_NOTIFICATION_EMAIL = 'inbox@example.invalid';
  deliveryResult = { data: null, error: { message: 'rejected' } };
  assert.equal((await submitEmailCapture({ success: false }, data)).success, false);
  deliveryResult = { data: { id: 'accepted-test-message' }, error: null };
  assert.deepEqual(await submitEmailCapture({ success: false }, data), { success: true, leadId: id });
  const attributionLine = sendCalls.at(-1).message.text.split('\n').find(line => line.startsWith('Consented attribution: '));
  assert.equal(attributionLine, 'Consented attribution: ' + JSON.stringify({ first_channel: 'organic', first_landing_page: '/guides/online-ed-treatment', journey_id: nextId }));
  for (const deniedHeaders of [{ dnt: '1' }, { 'sec-gpc': '1' }]) {
    requestHeaders = deniedHeaders;
    assert.equal((await submitEmailCapture({ success: false }, data)).success, true);
    assert.ok(sendCalls.at(-1).message.text.includes('Consented attribution: {}'));
  }
  requestHeaders = {}; requestConsent = 'denied';
  assert.equal((await submitEmailCapture({ success: false }, data)).success, true);
  assert.ok(sendCalls.at(-1).message.text.includes('Consented attribution: {}'));
  assert.equal(captures.length, 0);
});

test('the form hook blocks simultaneous submits, preserves retry identity and emits one canonical success', async () => {
  const slots = [];
  let cursor = 0;
  customMocks.react = {
    useState(initial) { const index = cursor++; if (!(index in slots)) slots[index] = initial; return [slots[index], value => { slots[index] = value; }]; },
    useRef(initial) { const index = cursor++; if (!(index in slots)) slots[index] = { current: initial }; return slots[index]; },
    useCallback: callback => callback,
    useEffect(callback) { const index = cursor++; if (!(index in slots)) { slots[index] = true; callback(); } },
  };
  customMocks['@/lib/forms/actions'] = { getContactAvailability: async () => true };
  const events = [];
  customMocks['@/lib/tracking/events'] = { pushEvent: (event, properties) => events.push({ event, properties }) };
  const originalFormData = globalThis.FormData;
  globalThis.FormData = class extends originalFormData {
    constructor(form) { super(); if (form) for (const [key, value] of Object.entries(form)) this.set(key, value); }
  };
  try {
    const { useContactForm } = load('components/forms/useContactForm.ts');
    const submissions = [];
    let settle;
    const submit = async (_state, data) => {
      submissions.push(Object.fromEntries(data.entries()));
      return new Promise(resolve => { settle = resolve; });
    };
    const render = () => { cursor = 0; return useContactForm('guide_ed', 'email_capture', submit); };
    render();
    await Promise.resolve();
    let hook = render();
    assert.equal(hook.available, true);
    const event = { preventDefault() {}, currentTarget: { email: 'synthetic@example.invalid' } };
    hook.handleFocus(); hook.handleFocus();
    const first = hook.handleSubmit(event);
    await hook.handleSubmit(event);
    assert.equal(submissions.length, 1);
    settle({ success: false, error: 'synthetic failure' });
    await first;
    // A new campaign in the same journey must not rewrite the contact's
    // original operational/analytics snapshot when the request is retried.
    const attribution = load('lib/tracking/utm.ts');
    window.location = new URL('https://vitalityscout.com/labs?utm_source=newsletter&utm_medium=email');
    attribution.captureUTMParams();
    assert.equal(attribution.getAttributionData().last_channel, 'email');
    hook = render();
    const retry = hook.handleSubmit(event);
    assert.equal(submissions.length, 2);
    assert.equal(submissions[1].submission_id, submissions[0].submission_id);
    assert.equal(submissions[1].attribution_data, submissions[0].attribution_data);
    const leadId = submissions[1].submission_id;
    settle({ success: true, leadId });
    await retry;
    hook = render();
    const duplicate = hook.handleSubmit(event);
    settle({ success: true, leadId });
    await duplicate;
    assert.equal(events.filter(item => item.event === 'form_start').length, 1);
    assert.equal(events.filter(item => item.event === 'contact_received').length, 1);
    assert.equal(events.filter(item => item.event === 'lead_email_capture').length, 1);
    assert.equal(events.find(item => item.event === 'lead_email_capture').properties.legacy_alias, true);
    assert.ok(events.filter(item => item.event !== 'form_start').every(item => item.properties.lead_id === leadId));
    const received = events.find(item => item.event === 'contact_received').properties;
    const originalAttribution = JSON.parse(submissions[0].attribution_data);
    for (const [key, value] of Object.entries(originalAttribution)) assert.equal(received[key], value);
    assert.equal(received.last_channel, 'organic');
    assert.equal(received.page_path, '/guides/online-ed-treatment');

    // A newly mounted form whose journey changes across a consent boundary
    // can still succeed operationally, but cannot join the old contact to it.
    slots.length = 0; events.length = 0;
    render(); await Promise.resolve(); hook = render();
    const oldJourney = attribution.getAttributionData().journey_id;
    const crossingBoundary = hook.handleSubmit(event);
    document.cookie = 'vs_consent=denied';
    attribution.clearAttribution();
    document.cookie = 'vs_consent=granted';
    attribution.captureUTMParams();
    assert.notEqual(attribution.getAttributionData().journey_id, oldJourney);
    settle({ success: true, leadId: submissions.at(-1).submission_id });
    await crossingBoundary;
    assert.equal(render().state.success, true);
    assert.equal(events.length, 0);
  } finally { globalThis.FormData = originalFormData; }
});

test('configured ED referrals cannot redirect primary-care or weight-loss services', () => {
  const { getReferralLink } = load('lib/referral-links.ts');
  process.env.ED_HIMS_REFERRAL_URL = 'https://partner.example/hims-ed';
  process.env.ED_RO_REFERRAL_URL = 'https://partner.example/ro-ed';
  process.env.ED_LEMONAID_REFERRAL_URL = 'https://partner.example/lemonaid-ed';
  for (const [provider, canonical, category, direct] of [
    ['lemonaid-health', 'lemonaid', 'primary-care', 'https://www.lemonaidhealth.com/services/primary-care'],
    ['lemonaid-health', 'lemonaid', undefined, 'https://www.lemonaidhealth.com/services/primary-care'],
    ['hims', 'hims', 'weight-loss', 'https://www.hims.com/weight-loss'],
    ['ro-roman', 'ro', 'glp1', 'https://ro.co/weight-loss/'],
  ]) assert.deepEqual(getReferralLink(provider, direct, category), { providerId: canonical, href: direct, commercial: false });
  for (const [provider, canonical, category] of [['hims-mens-health', 'hims', 'ed'], ['roman-mens-health', 'ro', 'mens-health'], ['lemonaid-mens-health', 'lemonaid', 'ed']]) {
    assert.deepEqual(getReferralLink(provider, 'https://direct.example', category), { providerId: canonical, href: `https://partner.example/${canonical}-ed`, commercial: true });
  }
  process.env.ED_HIMS_REFERRAL_URL = 'javascript:invalid';
  assert.deepEqual(getReferralLink('hims', 'https://www.hims.com/erectile-dysfunction', 'ed'), { providerId: 'hims', href: 'https://www.hims.com/erectile-dysfunction', commercial: false });
});

test('the actual category getter returns one stable Hims/Ro listing and current ED offer summaries', () => {
  const { getDtcProductsByCategory } = load('lib/telehealth-dtc.ts');
  const { canonicalProviderId } = load('lib/referral-links.ts');
  const { ED_OFFERS, ED_VERIFIED_AT } = load('lib/ed-offers.ts');
  const products = getDtcProductsByCategory('mens-health');
  const ids = products.map(product => canonicalProviderId(product.slug));
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ['hims', 'ro']) {
    assert.equal(ids.filter(value => value === id).length, 1);
    assert.equal(products.find(product => canonicalProviderId(product.slug) === id).slug, id);
  }
  for (const id of ['hims', 'ro', 'bluechew', 'lemonaid']) {
    const product = products.find(product => canonicalProviderId(product.slug) === id);
    const offer = ED_OFFERS.find(offer => offer.id === id);
    assert.ok(product && offer);
    assert.equal(product.priceDisplay, offer.price);
    assert.equal(product.url, offer.url);
    assert.equal(product.lastVerified, ED_VERIFIED_AT);
    assert.equal(product.referralType, 'direct_link');
  }
  assert.ok(getDtcProductsByCategory('skincare').every(product => product.category === 'skincare'));
});

test('specified BlueChew and Cost Plus totals include shipping without changing quantities or billing units', () => {
  const { BLUECHEW_PLANS, BLUECHEW_STANDARD_SHIPPING_CENTS, BLUECHEW_SHIPPING_OPTIONS, COST_PLUS_EXAMPLES, ED_OFFERS, edFillTotal, edMoney } = load('lib/ed-offers.ts');
  const sil = BLUECHEW_PLANS.find(plan => plan.id === 'sil');
  const starter = sil.packs.find(pack => pack.quantity === 6);
  assert.equal(sil.strength, '45 mg');
  assert.equal(starter.medicationCents + BLUECHEW_STANDARD_SHIPPING_CENTS, 3500);
  assert.equal(ED_OFFERS.find(offer => offer.id === 'bluechew').price, '$35/monthly shipment');
  const tenPack = sil.packs.find(pack => pack.quantity === 10);
  const expedited = BLUECHEW_SHIPPING_OPTIONS.find(option => option.name === 'Expedited');
  assert.equal(edMoney(tenPack.medicationCents + expedited.cents), '$46.95');
  assert.equal(COST_PLUS_EXAMPLES.sildenafil.quantity, 30);
  assert.equal(COST_PLUS_EXAMPLES.sildenafil.strength, '50 mg');
  assert.equal(edFillTotal(COST_PLUS_EXAMPLES.sildenafil), 1161);
  assert.equal(edFillTotal(COST_PLUS_EXAMPLES.tadalafil), 1122);
  assert.equal(edMoney(edFillTotal(COST_PLUS_EXAMPLES.tadalafil)), '$11.22');
  const pharmacy = ED_OFFERS.find(offer => offer.id === 'cost-plus');
  assert.equal(pharmacy.price, '$11.61/fill before tax');
  assert.match(pharmacy.priceDetail, /not a monthly treatment plan/);
  assert.match(pharmacy.includes, /Clinician visit, prescription and any tests are separate/);
});
