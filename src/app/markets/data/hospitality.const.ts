import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/industry.model';

export const hospitalityMarket: Industry = {
  type: IndustryType.hospitality,
  tickers: new Set(['MAR', 'ABNB']),
};
