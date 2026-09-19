import { safeToken } from './privacy';

/** An editorial citation is not a provider referral. Only annotated links count. */
export function providerClickProperties(href: string | null, origin: string, data: Record<string, unknown>) {
  const provider_id = safeToken(data.provider_id);
  if (!href || !provider_id || data.link_purpose === 'source') return null;
  try {
    const url = new URL(href, origin);
    if (!/^https?:$/.test(url.protocol) || url.hostname === new URL(origin).hostname || url.username || url.password) return null;
    return { provider_id, category: safeToken(data.category), placement: safeToken(data.placement), destination_host: url.hostname };
  } catch { return null; }
}
