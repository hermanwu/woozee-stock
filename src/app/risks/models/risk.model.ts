import { MarketType } from 'src/app/facts/data/area.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { FactType } from './fact-type.enum';
import { RiskLevel } from './risk-level.model';

export interface Risk {
  name: string;
  notes?: Note[];
  createdTime?: Date;
  updatedTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];
  level?: RiskLevel;
  type?: FactType;
  market?: MarketType;
  vote?: number;
  ticker?: string;
}
