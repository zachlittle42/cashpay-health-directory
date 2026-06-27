// VitalityScout mark: an hourglass formed by two DNA helix strands (base-pair
// rungs between them). Inspired by the Centurion DNA emblem; drawn mono so it
// inherits color via `currentColor` (brand blue by default).

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {/* two strands crossing at the waist → hourglass + double helix */}
      <path d="M6 3 C6 10 12 13 12 16 C12 19 18 22 18 29" />
      <path d="M18 3 C18 10 12 13 12 16 C12 19 6 22 6 29" />
      {/* base-pair rungs */}
      <g strokeWidth={1.6} opacity={0.5}>
        <path d="M8 8 H16" />
        <path d="M10 12 H14" />
        <path d="M10 20 H14" />
        <path d="M8 24 H16" />
      </g>
    </svg>
  );
}

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-auto text-blue-600" />
      <span className="text-xl font-bold tracking-tight text-gray-900">
        VitalityScout
      </span>
    </span>
  );
}
