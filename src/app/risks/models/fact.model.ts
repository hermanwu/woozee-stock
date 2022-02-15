import { FactCategory } from './fact-category.enum';
import { FactType } from './fact-type.enum';

export interface Fact {
  content: string;
  type: FactType;
  category?: FactCategory;
}
