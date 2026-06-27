'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_GROUPS } from '@/lib/nav-tree';
import {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, BookOpen, Circle,
  ChevronDown, Menu, X, Search,
} from 'lucide-react';

const ICONS: Record<string, any> = {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, BookOpen, Circle,
};

const PRIMARY = NAV_GROUPS.filter((g) => g.id !== 'resources');
const RESOURCES = NAV_GROUPS.find((g) => g.id === 'resources');

function GroupColumn({ group, onNavigate }: { group: typeof NAV_GROUPS[number]; onNavigate?: () => void }) {
  const Icon = ICONS[group.icon] || Circle;
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
        <Icon className="h-4 w-4 text-blue-600" strokeWidth={2} />
        {group.label}
      </div>
      {group.subsections.map((s) => (
        <div key={s.label} className="mb-2">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{s.label}</div>
          {s.items.map((it) => (
            <Link
              key={it.url + it.label}
              href={it.url}
              onClick={onNavigate}
              className="block truncate py-0.5 text-[13px] text-gray-600 hover:text-blue-600"
            >
              {it.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" fill="currentColor" />
            <span className="text-xl font-bold text-gray-900">VitalityScout</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">Home</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                Browse <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="fixed left-1/2 top-16 z-50 w-[1080px] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-y-auto rounded-lg border border-gray-200 bg-white p-6 opacity-0 invisible shadow-xl transition-all group-hover:visible group-hover:opacity-100 max-h-[80vh]">
                <div className="grid grid-cols-4 gap-x-6 gap-y-5">
                  {PRIMARY.map((g) => <GroupColumn key={g.id} group={g} />)}
                </div>
                {RESOURCES && (
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-gray-100 pt-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">{RESOURCES.label}</span>
                    {RESOURCES.subsections.flatMap((s) => s.items).map((it) => (
                      <Link key={it.url + it.label} href={it.url} className="text-[13px] text-gray-600 hover:text-blue-600">{it.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link href="/guides" className="text-sm font-medium text-gray-700 hover:text-gray-900">Guides</Link>
            <Link href="/medical-tourism" className="text-sm font-medium text-gray-700 hover:text-gray-900">Medical Tourism</Link>
            <Link href="/traditional-healthcare" className="text-sm font-medium text-gray-700 hover:text-gray-900">By State</Link>
            <Link href="/search" aria-label="Search" className="text-gray-500 hover:text-gray-900"><Search className="h-4 w-4" /></Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-gray-700" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[88vw] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="font-bold text-gray-900">Browse</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <div className="px-3 py-2">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50">Home</Link>
              {NAV_GROUPS.map((g) => {
                const Icon = ICONS[g.icon] || Circle;
                const isOpen = openGroup === g.id;
                return (
                  <div key={g.id}>
                    <button
                      onClick={() => setOpenGroup(isOpen ? null : g.id)}
                      className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      <Icon className="h-4 w-4 text-blue-600" strokeWidth={2} />
                      <span className="flex-1">{g.label}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="ml-3 border-l border-gray-200 pl-3 pb-2">
                        {g.subsections.map((s) => (
                          <div key={s.label} className="mt-2">
                            <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">{s.label}</div>
                            {s.items.map((it) => (
                              <Link key={it.url + it.label} href={it.url} onClick={() => setMobileOpen(false)} className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">{it.label}</Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
