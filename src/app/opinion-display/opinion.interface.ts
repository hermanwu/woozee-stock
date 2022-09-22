import { Term } from '../risks/models/risk-level.model';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Rating } from '../stock/models/rating.model';

export interface Opinion {
  rating: Rating;
  term?: Term;
  emojis?: EmojiUnicode[];
  comments?: string[];
}
