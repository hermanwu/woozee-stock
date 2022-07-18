import { IndustryType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { Market } from 'src/app/stock/models/market.models';

export const saas: Market = {
  type: IndustryType.saas,
  size: 130.69 * BILLION,
  growthRate: 0.275,
};
