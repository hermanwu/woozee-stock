import { FactCategory } from './fact-category.enum';
import { FactType } from './fact-type.enum';

export interface Fact {
  title?: string;
  type?: FactType;
  category?: FactCategory;
  content?: string;
  targets?: string[];
  source?: string;
  author?: string;
}
