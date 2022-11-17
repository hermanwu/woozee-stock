import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from '../../../risks/models/risk-level.model';
import { EmojiUnicode } from '../../../shared/data/enum/emoji.enum';
import { Rating } from '../../../stock/models/rating.model';

export interface Opinion {
  userUuid?: string;
  name?: string;
  rating?: Rating;
  term?: Term;
  emojis?: EmojiUnicode[];
  content?: string;
  details?: string[];
  targets?: string[];
  links?: { name: string; value: string }[];
  date?: Date;
  factType?: FactType;
  actions?: string[];
}
