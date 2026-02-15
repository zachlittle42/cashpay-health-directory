import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Development: use ?subdomain=beta query param
  const subdomainParam = url.searchParams.get('subdomain');

  const isBeta =
    hostname.startsWith('beta.') || subdomainParam === 'beta';

  if (isBeta && url.pathname === '/') {
    // Strip the subdomain param so it doesn't appear in the rewritten URL
    url.searchParams.delete('subdomain');
    url.pathname = '/v2';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
