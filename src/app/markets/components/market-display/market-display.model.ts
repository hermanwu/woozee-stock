import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Market } from 'src/app/stock/models/market.models';

export interface MarketDisplay extends Market {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
