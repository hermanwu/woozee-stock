import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Term } from '../../../risks/models/risk-level.model';
import { EmojiUnicode } from '../../../shared/data/enum/emoji.enum';
import { Rating } from '../../../stock/models/rating.model';

export interface Opinion {
  userUuid?: string;
  name?: string;
  rating?: Rating | string;
  term?: Term | string;
  emojis?: EmojiUnicode[];
  title?: string;
  content?: string;
  targets?: string[];
  links?: { name: string; value: string }[];
  date?: Date | string;
  factType?: FactType;
  actions?: string[];
  tags?: string[];
  parentUuid?: string;
  uuid?: string;

  details?: string[]; // to retire
}
