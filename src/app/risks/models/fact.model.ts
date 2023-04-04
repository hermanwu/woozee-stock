import { Quote } from 'src/app/mock-data/quote.model';
import { FactCategory } from './fact-category.enum';
import { FactType } from './fact-type.enum';

export interface Fact extends Quote {
  title?: string;
  type?: FactType | string;
  category?: FactCategory;
  content?: string;
  targets?: string[];
  source?: string;
  author?: string;
}
