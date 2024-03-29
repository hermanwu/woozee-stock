import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

export interface Catalyst {
  uuid?: string;
  name?: string;
  level?: Term;
  type?: FactType;
  tickers?: string[];
  markets?: IndustryType[];
  date?: Date;
  content?: any;
  notes?: any;
}
