import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

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
