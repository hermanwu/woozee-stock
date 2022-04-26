import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Portfolio } from './portfolio.interface';

export interface PortfolioDetails extends Portfolio {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
