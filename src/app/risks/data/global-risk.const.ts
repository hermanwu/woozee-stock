import { Risk } from '../models/risk.model';
import { fedRate } from './risks/fed-rate.model';
import { inflation } from './risks/inflation.model';

export const risks: Risk[] = [inflation, fedRate];
