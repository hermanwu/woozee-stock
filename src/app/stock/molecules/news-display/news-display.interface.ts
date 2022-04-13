import { Risk } from 'src/app/risks/models/risk.model';
import { News } from '../../models/news.model';

export interface NewsDisplay extends News {
  risks: Risk[];
}
