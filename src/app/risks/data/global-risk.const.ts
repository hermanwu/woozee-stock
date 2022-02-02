import { Risk } from '../models/risk.model';
import { covid } from './risks/covid.model';
import { fedRate } from './risks/fed-rate.model';
import { geopolitics } from './risks/geopolitics.model';
import { inflation } from './risks/inflation.model';
import { laborShortage } from './risks/labor-shortage.model';

export const risks: Risk[] = [
  inflation,
  fedRate,
  covid,
  laborShortage,
  geopolitics,
];
