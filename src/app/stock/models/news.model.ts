import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { Catalyst } from 'src/app/shared/models/booster.interface';
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
  sourceLink?: string;
  notes?: Note[];
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'Sector',
  stock = 'Stocks',
  investor = 'Investor',
}

export interface NewsWithDetails extends News {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
