import type { EcoWatt } from 'types/api.types';

export const getDays = (res: EcoWatt): { day: string; dvalue: number }[] =>
  res.signals.map(e => ({ day: e.jour, dvalue: e.dvalue }));
