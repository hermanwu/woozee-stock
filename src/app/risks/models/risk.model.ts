import { Note } from 'src/app/shared/data/note.interface';
import { RiskLevel } from './risk-level.model';
import { RiskType } from './risk-type.enum';

export interface Risk {
  name: string;
  notes?: Note[];
  startTime?: Date;
  endTime?: Date;
  solutions?: Note[];
  actions?: Note[];
  level?: RiskLevel;
  type?: RiskType;
}
