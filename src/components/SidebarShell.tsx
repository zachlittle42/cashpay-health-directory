import type { ReactNode } from 'react';
import SidebarNav from './SidebarNav';

// Wraps page content with the persistent left sidebar nav.
// Top nav + footer stay full-width; only the content column sits beside the rail.
export default function SidebarShell({ children }: { children: ReactNode }) {
  return (
    <div className="lg:flex lg:items-start">
      <SidebarNav />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
