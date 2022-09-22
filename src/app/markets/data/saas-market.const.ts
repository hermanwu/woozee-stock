import { IndustryType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { Industry } from 'src/app/stock/models/market.models';

export const saas: Industry = {
  type: IndustryType.saas,
  size: 130.69 * BILLION,
  growthRate: 0.275,
};
