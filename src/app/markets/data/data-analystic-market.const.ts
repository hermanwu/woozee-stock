import { IndustryType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { Industry } from 'src/app/stock/models/market.models';

export const dataAnalyticMarket: Industry = {
  size: 44 * BILLION,
  type: IndustryType.dataAnalytics,
};
