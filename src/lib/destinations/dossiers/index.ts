import type { DestinationDossier } from '../types';
import { TURKEY } from './turkey';
import { SOUTH_KOREA } from './south-korea';
import { MEXICO } from './mexico';
import { THAILAND } from './thailand';
import { COLOMBIA } from './colombia';

/** Destinations with a full, sourced dossier. Others fall back to the legacy template. */
export const DOSSIERS: Record<string, DestinationDossier> = {
  mexico: MEXICO,
  thailand: THAILAND,
  colombia: COLOMBIA,
  turkey: TURKEY,
  'south-korea': SOUTH_KOREA,
};
