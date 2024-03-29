import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Industry } from 'src/app/stock/models/industry.model';

export interface MarketDisplay extends Industry {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
