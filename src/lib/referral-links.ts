/** Server-side configuration only. Add URLs issued by an approved partner program.
 * We never invent affiliate IDs or append patient/source data to partner URLs.
 */
const providerAliases: Record<string, string> = {
  'hims-mens-health': 'hims',
  'roman-mens-health': 'ro',
  'ro-roman': 'ro',
  'lemonaid-mens-health': 'lemonaid',
  'lemonaid-health': 'lemonaid',
};

export function canonicalProviderId(providerId: string): string {
  return providerAliases[providerId] || providerId;
}

export function approvedReferralUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password ||
        url.hostname === 'localhost' || !url.hostname.includes('.') ||
        /^[\d.]+$/.test(url.hostname) || url.hostname.startsWith('[')) return undefined;
    return url.href;
  } catch {
    return undefined;
  }
}

// Provider identity alone cannot select a service-specific destination: the same
// brand may appear in ED, primary care, hair loss, and weight-loss comparisons.
// Callers must opt into an ED comparison; unknown/missing categories stay direct.
export function getReferralLink(providerId: string, directUrl: string, category?: string) {
  const id = canonicalProviderId(providerId);
  if (category !== 'ed' && category !== 'mens-health') {
    return { providerId: id, href: directUrl, commercial: false };
  }
  const configured: Record<string, string | undefined> = {
    hims: process.env.ED_HIMS_REFERRAL_URL,
    ro: process.env.ED_RO_REFERRAL_URL,
    bluechew: process.env.ED_BLUECHEW_REFERRAL_URL,
    lemonaid: process.env.ED_LEMONAID_REFERRAL_URL,
  };
  const partnerUrl = approvedReferralUrl(configured[id]);
  return { providerId: id, href: partnerUrl || directUrl, commercial: Boolean(partnerUrl) };
}
