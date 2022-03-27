import { Note } from '../data/note.interface';
import { Opinion } from './fact.interface';

export interface Booster extends Opinion {
  name: string;
  notes?: Note[];
}
