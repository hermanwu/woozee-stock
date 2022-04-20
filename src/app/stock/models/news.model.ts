import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
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
  relatedStocks?: string[];
  sourceLink?: string;
  notes?: Note[];
  tickers?: string[];
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'Sector',
  stock = 'Stock',
}

export interface NewsWithDetails extends News {
  risks: Risk[];
}
