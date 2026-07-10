import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'vitalityscout.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  const { pathname, search } = request.nextUrl;

  // Development: use ?subdomain=beta query param
  const subdomainParam = url.searchParams.get('subdomain');

  const isBeta =
    hostname.startsWith('beta.') || subdomainParam === 'beta';

  // Subdomain routing: beta.vitalityscout.com → /beta (for future use)
  if (isBeta && url.pathname === '/') {
    url.searchParams.delete('subdomain');
    url.pathname = '/beta';
    return NextResponse.rewrite(url);
  }

  // Canonical-host enforcement. The .vercel.app production alias (and www) serve
  // the full site as an indexable duplicate; 308 them to the apex so Google only
  // ever elects vitalityscout.com as canonical. Only guarded on VERCEL_ENV ===
  // 'production' so preview deployments (VERCEL_ENV === 'preview') keep working on
  // their own *.vercel.app URLs. The beta subdomain is intentionally exempt.
  if (
    process.env.VERCEL_ENV === 'production' &&
    hostname !== CANONICAL_HOST &&
    !hostname.startsWith('beta.')
  ) {
    return NextResponse.redirect(`${CANONICAL_ORIGIN}${pathname}${search}`, 308);
  }

  // Advertise the canonical URL on every real page response, alongside the
  // per-page rel=canonical in the HTML head.
  const response = NextResponse.next();
  if (request.method === 'GET') {
    response.headers.set(
      'Link',
      `<${CANONICAL_ORIGIN}${pathname}>; rel="canonical"`,
    );
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next (Next internals: static, image, data)
     * - api (route handlers)
     * - any path containing a dot (static asset files)
     */
    '/((?!_next|api|.*\\.).*)',
  ],
};
