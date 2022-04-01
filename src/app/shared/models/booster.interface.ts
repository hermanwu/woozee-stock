import { CatalystLevel } from 'src/app/catalyst/catalyst-level-display/catalyst-level.enum';
import { Note } from '../data/note.interface';
import { Opinion } from './fact.interface';

export interface Booster extends Opinion {
  name: string;
  notes?: Note[];
  level?: CatalystLevel;
}
