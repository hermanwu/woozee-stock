import { Note } from 'src/app/shared/data/note.interface';
import { Comment } from '../models/comment.model';
import { Source } from '../models/news-source.enum';

export interface News {
  uuid: string;
  catalystUuids?: string[];
  riskUuids?: string[];
  type: EventType;
  content?: string;

  source: Source;
  date: Date;
  title?: string;
  author?: string;
  keyPoints?: string[];
  relatedStocks?: string[];
  sourceLink?: string;
  comments?: Comment[];
  notes?: Note[];
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'Sector',
  stock = 'Stock',
}
