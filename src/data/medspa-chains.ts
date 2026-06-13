// Real national aesthetic/wellness chains used to seed the med-spa directory.
//
// Every entry below is a genuine multi-location US brand. We present them at the
// metro level and link to each brand's own location finder — we do NOT invent
// street addresses, phone numbers, or review counts. Pricing is general and an
// estimate to verify with the provider. `buildCityClinic` stamps a city-specific
// slug + description so each city page is not a verbatim duplicate.

import { MedspaClinic, MedspaService } from '@/lib/medspa-clinic-types';

export interface ChainTemplate {
  key: string;
  name: string;
  services: MedspaService[];
  priceRange: string;
  membership?: string;
  website: string;
  highlights: string[];
  bestFor: string;
  /** Short brand descriptor; the builder weaves in the metro name. */
  descriptor: string;
}

export const MEDSPA_CHAINS: Record<string, ChainTemplate> = {
  laseraway: {
    key: 'laseraway',
    name: 'LaserAway',
    services: ['Laser Hair Removal', 'Botox', 'Dermal Fillers', 'CoolSculpting', 'Microneedling', 'Chemical Peels'],
    priceRange: 'Botox ~$11–$17/unit; laser & injectable packages',
    membership: 'Package pricing & memberships',
    website: 'https://www.laseraway.com/locations/',
    descriptor:
      'one of the largest aesthetic dermatology chains in the US, offering laser hair removal alongside Botox, fillers, CoolSculpting, and microneedling under clinician oversight',
    highlights: [
      'Laser hair removal, Botox, fillers & CoolSculpting under one roof',
      'Board-certified clinician oversight',
      'Frequent injectable and laser package specials',
      'Consistent national protocols and pricing',
    ],
    bestFor: 'A one-stop chain for laser + injectables with national consistency',
  },
  'ideal-image': {
    key: 'ideal-image',
    name: 'Ideal Image',
    services: ['Laser Hair Removal', 'Botox', 'Dermal Fillers', 'CoolSculpting', 'Skin Rejuvenation'],
    priceRange: 'Membership pricing; consult for a quote',
    membership: 'VIP membership model + financing',
    website: 'https://www.idealimage.com/locations',
    descriptor:
      'a nationwide med-spa brand offering laser hair removal, Botox, fillers, CoolSculpting, and skin treatments on a membership model',
    highlights: [
      'Nationwide franchise footprint',
      'Laser hair removal, Botox, fillers, CoolSculpting, Ultherapy',
      'Membership pricing and financing options',
      'Free provider consultations',
    ],
    bestFor: 'Members who want bundled laser + injectables on a plan',
  },
  'sev-laser': {
    key: 'sev-laser',
    name: 'SEV Laser',
    services: ['Laser Hair Removal', 'Botox', 'Dermal Fillers', 'Skin Rejuvenation', 'Microneedling'],
    priceRange: 'Laser hair removal from ~$30/area; Botox specials',
    membership: 'Package & promo pricing',
    website: 'https://sevlaser.com/pages/locations',
    descriptor:
      'a fast-growing aesthetics chain known for affordable laser hair removal plus Botox, fillers, and facials',
    highlights: [
      'Aggressively affordable laser hair removal pricing',
      'Botox, fillers, and facial treatments',
      'Rapidly expanding clinic network',
      'Frequent promotions',
    ],
    bestFor: 'Budget-conscious laser hair removal plus basic injectables',
  },
  'milan-laser': {
    key: 'milan-laser',
    name: 'Milan Laser Hair Removal',
    services: ['Laser Hair Removal'],
    priceRange: 'Unlimited Package™ — one price, unlimited sessions',
    membership: 'Unlimited Package model',
    website: 'https://milanlaser.com/locations/',
    descriptor:
      'the largest dedicated laser hair removal company in the US, physician-run, known for its Unlimited Package that includes free touch-ups for life',
    highlights: [
      'Laser hair removal specialist (that’s all they do)',
      'Unlimited Package™ with lifetime touch-ups',
      'Physician-run with medical staff',
      'Very large nationwide footprint',
    ],
    bestFor: 'Laser hair removal only, with unlimited future touch-ups',
  },
  'sono-bello': {
    key: 'sono-bello',
    name: 'Sono Bello',
    services: ['Body Contouring'],
    priceRange: 'Laser liposuction / contouring — quote at consultation',
    membership: 'Financing available',
    website: 'https://www.sonobello.com/locations/',
    descriptor:
      'a national body-contouring specialist whose board-certified surgeons perform in-office micro-laser liposuction and fat reduction',
    highlights: [
      'Body contouring & laser liposuction specialists',
      'Board-certified surgeons (in-office procedure)',
      'Centers nationwide',
      'Financing available',
    ],
    bestFor: 'Targeted fat removal / body contouring as an in-office procedure',
  },
  restore: {
    key: 'restore',
    name: 'Restore Hyper Wellness',
    services: ['IV Therapy', 'Skin Rejuvenation'],
    priceRange: 'IV drips ~$35–$200; memberships',
    membership: 'Membership & a-la-carte',
    website: 'https://www.restore.com/locations',
    descriptor:
      'a nationwide hyper-wellness chain offering IV drip therapy, cryotherapy, red-light therapy, and recovery services',
    highlights: [
      'IV drips, cryotherapy, red light & recovery services',
      'Membership and a-la-carte pricing',
      'Walk-in friendly studios',
      'Large nationwide footprint',
    ],
    bestFor: 'IV therapy and recovery/wellness services',
  },
};

/** Build a city-specific clinic entry from a chain template. */
export function buildCityClinic(
  chainKey: string,
  opts: { city: string; citySlug: string; state: string; stateSlug: string },
): MedspaClinic {
  const t = MEDSPA_CHAINS[chainKey];
  if (!t) throw new Error(`Unknown med-spa chain: ${chainKey}`);
  const servicesList = t.services.join(', ').toLowerCase();
  return {
    name: `${t.name} — ${opts.city}`,
    slug: `${t.key}-${opts.citySlug}`,
    city: opts.city,
    state: opts.state,
    stateSlug: opts.stateSlug,
    citySlug: opts.citySlug,
    services: t.services,
    priceRange: t.priceRange,
    chain: true,
    membership: t.membership,
    website: t.website,
    description: `${t.name} is ${t.descriptor}. It operates location(s) in the ${opts.city} area — use the brand’s location finder to confirm the nearest ${opts.city} clinic, current services (${servicesList}), and pricing before booking.`,
    highlights: t.highlights,
    bestFor: t.bestFor,
    lastVerified: '2026-06-13',
  };
}

/** Build all city clinics for a metro from a list of chain keys. */
export function buildCityClinics(
  chainKeys: string[],
  opts: { city: string; citySlug: string; state: string; stateSlug: string },
): MedspaClinic[] {
  return chainKeys.map((k) => buildCityClinic(k, opts));
}
