import type { EcoWatt } from 'types/api.types';

export const getDays = (res: EcoWatt): string[] => res.signals.map(e => e.jour);
