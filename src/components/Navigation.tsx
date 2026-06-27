'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogoMark } from '@/components/Logo';
import { Search, Menu, X } from 'lucide-react';

const UTILITY_LINKS = [
  { href: '/guides', label: 'Guides' },
  { href: '/medical-tourism', label: 'Medical Tourism' },
  { href: '/traditional-healthcare', label: 'By State' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-stretch">
        {/* Logo — sits over the sidebar column on desktop (w-64, aligned border) */}
        <Link
          href="/"
          className="hidden w-64 shrink-0 items-center gap-2 border-r border-gray-200 px-4 lg:flex"
        >
          <LogoMark className="h-7 w-auto text-blue-600" />
          <span className="text-lg font-bold tracking-tight text-gray-900">VitalityScout</span>
        </Link>

        {/* Utility bar — spans the content column */}
        <div className="flex flex-1 items-center gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo for mobile (no sidebar logo block) */}
          <Link href="/" className="flex items-center gap-2 lg:hidden">
            <LogoMark className="h-6 w-auto text-blue-600" />
            <span className="text-lg font-bold tracking-tight text-gray-900">VitalityScout</span>
          </Link>

          {/* Search (desktop) */}
          <form action="/search" className="hidden w-full max-w-sm lg:flex">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                name="q"
                placeholder="Search treatments, clinics, destinations…"
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </form>

          {/* Utility links (desktop) */}
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            {UTILITY_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-gray-900">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile: search + menu */}
          <div className="ml-auto flex items-center gap-1 lg:hidden">
            <Link href="/search" aria-label="Search" className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Link>
            <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — utility links only (categories live in the sidebar drawer) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="font-bold text-gray-900">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <nav className="px-2 py-2">
              {[...UTILITY_LINKS, { href: '/search', label: 'Search' }].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  {l.label}
                </Link>
              ))}
              <p className="mt-2 px-3 py-2 text-xs text-gray-400">
                Browse all categories from the Browse button at the bottom-left.
              </p>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
