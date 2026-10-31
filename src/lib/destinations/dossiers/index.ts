import type { DestinationDossier } from '../types';
import { TURKEY } from './turkey';
import { SOUTH_KOREA } from './south-korea';
import { MEXICO } from './mexico';

/** Destinations with a full, sourced dossier. Others fall back to the legacy template. */
export const DOSSIERS: Record<string, DestinationDossier> = {
  mexico: MEXICO,
  turkey: TURKEY,
  'south-korea': SOUTH_KOREA,
};
