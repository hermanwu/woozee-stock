import { Note } from 'src/app/shared/data/note.interface';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { FactType } from './fact-type.enum';
import { Term } from './risk-level.model';

export interface Risk {
  uuid?: string;
  stockId?: string;
  newsUuid?: string;
  level?: Term;
  type?: FactType;
  markets?: IndustryType[];

  // TO RETIRE:
  name?: string;
  notes?: any[];
  createdTime?: Date;
  updatedTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];

  vote?: number;
  tickers?: string[];
  content?: string;
}
