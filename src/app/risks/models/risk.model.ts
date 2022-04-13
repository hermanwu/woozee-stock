import { Note } from 'src/app/shared/data/note.interface';
import { FactType } from './fact-type.enum';
import { RiskLevel } from './risk-level.model';

export const marketRisks = [];

export interface Risk extends Note {
  uuid?: string;
  newsUuid?: string;
  level?: RiskLevel;
  type?: FactType;

  // TO RETIRE:
  name?: string;
  notes?: Note[];
  createdTime?: Date;
  updatedTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];

  vote?: number;
  ticker?: string;
}
