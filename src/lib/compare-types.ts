// Shared types for "compare & buy" money pages (Longevity & Performance and
// DTC Telehealth). One generic renderer (CompareCategoryPage) consumes these so
// each section only needs a data module + a thin route wrapper.

export interface CompareProduct {
  slug: string;
  name: string;
  brand: string;
  /** Owning category slug (also the route). */
  category: string;
  tagline: string;
  description: string;
  priceDisplay: string;
  priceNote?: string;
  fdaStatus?: string;
  prescriptionRequired: boolean;
  bestFor: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  url: string;
  referralType: 'affiliate_link' | 'direct_link';
  featured?: boolean;
  lastVerified: string;
}

export interface CompareCategory {
  /** Slug == route path segment. */
  slug: string;
  name: string;
  shortLabel: string;
  icon: string;
  description: string;
  intro: string;
  /** AEO direct-answer lead, grounded in the product data. */
  directAnswer: string;
  priceRange: string;
  faqs: { question: string; answer: string }[];
  requiresMedicalDisclaimer: boolean;
  /** Optional prominent safety callout (e.g. mental-health crisis line). */
  safetyNotice?: string;
  /** Optional category-specific cross-links (e.g. a supporting guide); shown
   *  before the section's shared links in "Keep Exploring". */
  relatedLinks?: CompareRelatedLink[];
}

export interface CompareRelatedLink {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

/** Per-section chrome: which hub a category belongs to + cross-links. */
export interface CompareSection {
  /** Hub route, e.g. '/longevity-performance' or '/telehealth'. */
  hubHref: string;
  /** Breadcrumb / "back to" label, e.g. 'Longevity & Performance'. */
  hubLabel: string;
  relatedLinks: CompareRelatedLink[];
}
