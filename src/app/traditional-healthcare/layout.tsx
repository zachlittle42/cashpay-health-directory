import type { Metadata } from 'next';
import { NOINDEX_FOLLOW } from '@/lib/indexability';

// The traditional-healthcare family (this hub, the /[state] pages, and the
// California regional + health-system pages under it) is deindexed. GSC shows
// near-zero demand — /traditional-healthcare/* drew 13 impressions / 0 clicks in
// 100 days — and the family dilutes crawl budget away from the cash-pay money
// pages. noindex,follow keeps every page live and its internal links flowing.
//
// The robots directive lives here at the subtree root because the hub page is a
// client component and cannot export metadata itself. Child routes inherit
// `robots` from this layout while keeping their own title/description/canonical
// from their generateMetadata (metadata is shallow-merged per field down the
// segment tree, so an unset field is never cleared by a child).
export const metadata: Metadata = {
  robots: NOINDEX_FOLLOW,
};

export default function TraditionalHealthcareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
