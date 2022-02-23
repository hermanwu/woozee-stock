import { BusinessArea } from '../facts/data/area.enum';
import { RevenueModel } from '../facts/data/revenue-model.enum';
import { Strategy } from '../facts/data/stratgies.enum';

export interface Business {
  notes?: any[];
  overview?: string[];
  areas?: BusinessArea[];
  revenues?: RevenueModel[];
  strategies?: Strategy[];
  marketSize?: number;
  users?: string[];
  competitions?: string[];
}
