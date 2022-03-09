import { MarketType } from 'src/app/facts/data/area.enum';
import { BILLION } from 'src/app/shared/numbers/number.model';

export const saas = {
  type: MarketType.saas,
  size: 130.69 * BILLION,
  growthRate: 0.275,
};

export const crmMarket = {
  type: MarketType.customerRelationManagement,
  size: 57.9 * BILLION,
};
