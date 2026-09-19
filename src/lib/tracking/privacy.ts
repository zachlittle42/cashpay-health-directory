/** Small, explicit analytics vocabulary. Never pass form values or whole URLs. */
export function safeToken(value: unknown, max = 100): string | undefined {
  return typeof value === 'string' && value.length <= max && /^[a-zA-Z0-9_-]+$/.test(value)
    ? value : undefined;
}

export function safePath(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  try {
    const path = new URL(value, 'https://vitalityscout.com').pathname;
    return path.length <= 240 && /^\/[a-zA-Z0-9/_-]*$/.test(path) ? path : undefined;
  } catch { return undefined; }
}

export function safeHost(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value) return undefined;
  try {
    const url = new URL(value.includes('://') ? value : `https://${value}`);
    return /^https?:$/.test(url.protocol) && !url.username && !url.password
      && /^[a-zA-Z0-9.-]+$/.test(url.hostname) ? url.hostname.toLowerCase() : undefined;
  } catch { return undefined; }
}

export function opaqueId(value: unknown): string | undefined {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
    ? value : undefined;
}

const TOKENS = new Set([
  'provider_id', 'category', 'placement', 'form_type', 'form_source', 'source',
  'first_channel', 'last_channel', 'utm_source', 'utm_medium', 'utm_campaign',
  'family', 'creative', 'formId', 'formType', 'ctaName', 'ctaLocation',
]);
const PATHS = new Set(['page_path', 'first_landing_page', 'last_landing_page', 'pageUrl']);
const HOSTS = new Set(['destination_host', 'first_referrer_host', 'last_referrer_host']);
const IDS = new Set(['lead_id', 'journey_id', 'event_id']);

export function analyticsProperties(input: Record<string, unknown> = {}): Record<string, string | number | boolean> {
  const output: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(input)) {
    const clean = TOKENS.has(key) ? safeToken(value)
      : PATHS.has(key) ? safePath(value)
      : HOSTS.has(key) ? safeHost(value)
      : IDS.has(key) ? opaqueId(value) : undefined;
    if (clean !== undefined) output[key] = clean;
    if (key === 'depth' && [25, 50, 75, 100].includes(Number(value))) output[key] = Number(value);
    if (['hasUtm', 'legacy_alias'].includes(key) && typeof value === 'boolean') output[key] = value;
  }
  return output;
}
