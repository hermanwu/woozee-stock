import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/industry.model';

export const dataAnalyticMarket: Industry = {
  size: 44 * BILLION,
  type: IndustryType.dataAnalytics,
};
