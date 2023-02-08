import { Risk } from 'src/app/risks/models/risk.model';
import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/industry.model';

export const travelMarketRisks: Risk[] = [
  {
    uuid: 'travel-market',
    content: '10% annual growth rate is relatively slow',
  },
];

export const travelMarket: Industry = {
  uuid: 'travel-market',
  type: IndustryType.travel,
  growthRate: 0.1,
  size: 638 * BILLION,
  riskUuids: travelMarketRisks.map((r) => r.uuid),
};
