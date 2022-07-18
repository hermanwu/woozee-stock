import { IndustryType } from 'src/app/facts/data/area.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { FactType } from './fact-type.enum';
import { RiskLevel } from './risk-level.model';

export interface Risk extends Note {
  uuid?: string;
  newsUuid?: string;
  level?: RiskLevel;
  type?: FactType;
  markets?: IndustryType[];

  // TO RETIRE:
  name?: string;
  notes?: Note[];
  createdTime?: Date;
  updatedTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];

  vote?: number;
  tickers?: string[];
}
