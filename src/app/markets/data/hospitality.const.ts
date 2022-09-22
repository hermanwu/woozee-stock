import { IndustryType } from 'src/app/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/market.models';

export const hospitalityMarket: Industry = {
  type: IndustryType.hospitality,
  tickers: new Set(['MAR', 'ABNB']),
};
