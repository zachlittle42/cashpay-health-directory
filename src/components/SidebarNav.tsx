'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_GROUPS } from '@/lib/nav-tree';
import {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, BookOpen, Circle,
  ChevronDown, Menu, X,
} from 'lucide-react';

const ICONS: Record<string, any> = {
  Microscope, Scale, Dna, Zap, Sparkles, Stethoscope, Globe, Building2, BookOpen, Circle,
};

// Top-level section page per nav group — the group label links here; the chevron toggles.
const GROUP_HREF: Record<string, string> = {
  'test-diagnose': '/test-diagnose',
  'lose-weight': '/lose-weight',
  'balance-hormones': '/balance-hormones',
  'live-longer': '/live-longer',
  'look-better': '/look-better',
  'treat-see-doctor': '/treat-see-doctor',
  'medical-tourism': '/medical-tourism',
  'care-by-state': '/traditional-healthcare',
  'resources': '/guides',
};

function groupForPath(pathname: string): string | null {
  // Find the group whose any item matches the current path (exact, then prefix).
  for (const g of NAV_GROUPS) {
    for (const s of g.subsections) {
      for (const it of s.items) {
        if (it.url === pathname) return g.id;
      }
    }
  }
  for (const g of NAV_GROUPS) {
    for (const s of g.subsections) {
      for (const it of s.items) {
        if (it.url !== '/' && pathname.startsWith(it.url + '/')) return g.id;
      }
    }
  }
  return null;
}

function NavTree({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  const active = groupForPath(pathname);
  const [open, setOpen] = useState<Record<string, boolean>>(() => (active ? { [active]: true } : {}));
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  return (
    <nav className="space-y-1 py-4" aria-label="Site sections">
      {NAV_GROUPS.map((g) => {
        const Icon = ICONS[g.icon] || Circle;
        const isOpen = open[g.id] ?? false;
        const isActiveGroup = active === g.id;
        return (
          <div key={g.id}>
            <div
              className={`flex items-center rounded-lg transition-colors hover:bg-gray-100 ${
                isActiveGroup ? 'text-blue-700' : 'text-gray-800'
              }`}
            >
              <Link
                href={GROUP_HREF[g.id] || '#'}
                onClick={onNavigate}
                className="flex flex-1 items-center gap-2.5 px-3 py-2 text-left text-sm font-semibold"
              >
                <Icon className="h-4 w-4 shrink-0 text-blue-600" strokeWidth={2} />
                <span className="flex-1">{g.label}</span>
              </Link>
              <button
                onClick={() => toggle(g.id)}
                aria-expanded={isOpen}
                aria-label={`Toggle ${g.label}`}
                className="shrink-0 rounded-md px-2 py-2 text-gray-400 hover:text-gray-600"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {isOpen && (
              <div className="mb-1 ml-4 mt-0.5 space-y-3 border-l border-gray-200 pl-3 pb-1">
                {g.subsections.map((s) => (
                  <div key={s.label}>
                    <div className="mb-1.5 border-b border-gray-200 px-2 pb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">{s.label}</div>
                    <div className="space-y-px">
                      {s.items.map((it) => {
                        const isActive = it.url === pathname;
                        return (
                          <Link
                            key={it.url + it.label}
                            href={it.url}
                            onClick={onNavigate}
                            aria-current={isActive ? 'page' : undefined}
                            className={`block border-l-2 px-2 py-1.5 text-[13px] leading-snug transition-colors ${
                              isActive
                                ? 'rounded-r-md border-blue-600 bg-blue-50 font-semibold text-gray-900'
                                : 'rounded-md border-transparent font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                          >
                            {it.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function SidebarNav() {
  const pathname = usePathname() || '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: full-height left rail; nav content sticks below the top nav */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-3">
          <NavTree pathname={pathname} />
        </div>
      </aside>

      {/* Mobile: toggle + drawer */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg"
        aria-label="Open navigation"
      >
        <Menu className="h-4 w-4" /> Browse
      </button>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="font-semibold text-gray-900">Browse</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X className="h-5 w-5 text-gray-500" /></button>
            </div>
            <div className="px-3">
              <NavTree pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
