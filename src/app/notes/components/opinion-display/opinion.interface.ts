import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { Term } from '../../../risks/models/risk-level.model';
import { EmojiUnicode } from '../../../shared/data/enum/emoji.enum';
import { OpinionEnum } from '../../../stock/models/opinion-type.model';

export interface Opinion extends Note {
  authorUuid?: string;
  creatorUuid?: string;
  authorName?: string;
  organizationName?: string;
  organizationUuid?: string;
  rating?: OpinionEnum | string;
  term?: Term | string;
  emojis?: EmojiUnicode[];
  title?: string;
  content?: string;
  targets?: string[];
  betterThan?: string[];
  links?: { name: string; value: string }[];
  date?: Date | string;
  factType?: FactType;
  actions?: string[];
  tags?: string[];
  parentUuid?: string;
  organization?: string;
  type?: string;
  emotions?: OpinionEnum[];

  details?: string[]; // to retire
}
