import { Stats } from 'src/app/shared/components/stats-display/stats-display.interface';
import { Note } from 'src/app/shared/data/note.interface';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Source } from '../models/news-source.enum';

export interface News {
  uuid?: string;
  catalystUuids?: string[];
  riskUuids?: string[];
  eventType?: EventType;
  title?: string;
  imageLinks?: string[];
  content?: string;

  source?: Source;
  date?: Date | string;
  author?: string;
  sourceLink?: string;
  notes?: Note[];

  tickers?: string[];

  tags?: (IndustryType | string)[];
  stats?: Stats[];

  quotes?: string[];
  people?: string[];

  takeAway?: string;

  details?: string[]; // to retire
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'Industry',
  stock = 'Stock',
  earnings = 'Earnings',
  opinions = 'Investor',
  overview = 'Overview',
  investor = 'investor',
}
