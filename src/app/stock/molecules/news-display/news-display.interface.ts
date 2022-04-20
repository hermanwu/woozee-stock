import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { News } from '../../models/news.model';

export interface NewsDisplay extends News {
  catalysts: Catalyst[];
  risks: Risk[];
}
