import { Note } from 'src/app/shared/data/note.interface';
import { FactCategory } from './fact-category.enum';
import { FactType } from './fact-type.enum';

export interface Fact extends Note {
  title?: string;
  type?: FactType | string;
  category?: FactCategory;
  content?: string;
  targetUuids?: string[];
  source?: string;
  author?: string;
  changeRate?: number;
  name?: string;
}
