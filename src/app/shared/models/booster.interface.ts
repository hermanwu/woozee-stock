import { IndustryType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from 'src/app/risks/models/risk-level.model';
import { Note } from '../data/note.interface';

export interface Catalyst extends Note {
  uuid?: string;
  name?: string;
  level?: Term;
  type?: FactType;
  tickers?: string[];
  markets?: IndustryType[];
  date?: Date;
}
