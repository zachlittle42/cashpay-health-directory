import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { JOURNEYS, journeysForPath, type DestinationJourney } from '@/lib/destinations/journeys';
import type { JourneyStage } from '@/lib/destinations/types';

function resolve(currentPath: string, destinationSlug?: string): { journey: DestinationJourney; stage: JourneyStage | null } | null {
  if (destinationSlug) {
    const journey = JOURNEYS[destinationSlug];
    if (!journey) return null;
    const hit = journeysForPath(currentPath).find((j) => j.journey.slug === destinationSlug);
    return { journey, stage: hit ? hit.stage : null };
  }
  const hits = journeysForPath(currentPath);
  // A page that belongs to several destinations is general; it gets no rail unless told which one.
  if (hits.length !== 1) return null;
  return { journey: hits[0].journey, stage: hits[0].stage };
}

/**
 * Compact strip at the top of a destination spoke: names the journey, shows the
 * six stages with the current one highlighted, and links back to the hub.
 * Server component; pass the page's own path.
 */
export function JourneyRail({ currentPath, destinationSlug }: { currentPath: string; destinationSlug?: string }) {
  const r = resolve(currentPath, destinationSlug);
  if (!r) return null;
  const { journey, stage } = r;
  return (
    <nav aria-label={`${journey.displayName} medical tourism journey`} className="not-prose mx-auto max-w-4xl px-4 pt-6">
      <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href={journey.hubHref} className="flex items-center gap-2 text-sm font-semibold text-purple-900 hover:underline">
            <MapPin className="h-4 w-4 text-purple-600" aria-hidden />
            {journey.flag} {journey.displayName} medical tourism journey
          </Link>
          <Link href={journey.hubHref} className="text-xs font-medium text-purple-700 hover:underline">
            Full guide →
          </Link>
        </div>
        <ol className="mt-3 flex flex-wrap gap-1.5">
          {journey.stages.map((s, i) => {
            const isCurrent = stage?.id === s.id;
            const href = `${journey.hubHref}#${s.id}`;
            return (
              <li key={s.id}>
                <Link
                  href={href}
                  aria-current={isCurrent ? 'step' : undefined}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    isCurrent
                      ? 'border-purple-600 bg-purple-600 text-white'
                      : 'border-purple-200 bg-white text-purple-800 hover:border-purple-400'
                  }`}
                >
                  <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${isCurrent ? 'bg-white/20' : 'bg-purple-100 text-purple-700'}`}>{i + 1}</span>
                  {s.label}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

/**
 * "Continue your journey" block for the foot of a spoke: the rest of the
 * current stage, then the next stage. Internal links only.
 */
export function JourneyNext({ currentPath, destinationSlug, limit = 4 }: { currentPath: string; destinationSlug?: string; limit?: number }) {
  const r = resolve(currentPath, destinationSlug);
  if (!r) return null;
  const { journey, stage } = r;
  const norm = (p: string) => p.split('#')[0].replace(/\/$/, '') || '/';
  const here = norm(currentPath);
  const idx = stage ? journey.stages.findIndex((s) => s.id === stage.id) : -1;
  // Next stage first, then the rest in order, then the current stage's siblings last.
  const ordered: JourneyStage[] = idx >= 0 ? [...journey.stages.slice(idx + 1), ...journey.stages.slice(0, idx), journey.stages[idx]] : journey.stages;
  const picks: { href: string; label: string; blurb?: string; stageLabel: string }[] = [];
  for (const s of ordered) {
    for (const l of s.links) {
      if (norm(l.href) === here) continue;
      if (l.href.startsWith(journey.hubHref + '#')) continue; // hub anchors: the rail already links there
      if (picks.some((p) => norm(p.href) === norm(l.href))) continue;
      picks.push({ ...l, stageLabel: s.label });
      if (picks.length >= limit) break;
    }
    if (picks.length >= limit) break;
  }
  if (!picks.length) return null;
  const nextStage = idx >= 0 && idx + 1 < journey.stages.length ? journey.stages[idx + 1] : null;
  return (
    <section aria-labelledby="journey-next-heading" className="not-prose mx-auto my-10 max-w-4xl px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-purple-700">{journey.flag} {journey.displayName} journey</p>
            <h2 id="journey-next-heading" className="mt-1 text-lg font-bold text-gray-900">
              {nextStage ? `Next step: ${nextStage.label.toLowerCase()}` : 'Continue your research'}
            </h2>
            {nextStage && <p className="mt-1 text-sm text-gray-600">{nextStage.question}</p>}
          </div>
          <Link href={journey.hubHref} className="inline-flex items-center gap-1 text-sm font-medium text-purple-700 hover:underline">
            Full {journey.displayName} guide <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-2">
          {picks.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="block h-full rounded-lg border border-gray-200 p-4 transition-all hover:border-purple-400 hover:shadow-sm">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-500">{p.stageLabel}</span>
                <span className="mt-1 block font-semibold text-gray-900">{p.label}</span>
                {p.blurb && <span className="mt-1 block text-sm text-gray-600">{p.blurb}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
