import { IndustryType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Source } from '../models/news-source.enum';
import { StatsDisplay } from '../molecules/news-display/stats-display.interface';

export interface News {
  uuid: string;
  catalystUuids?: string[];
  riskUuids?: string[];
  type: EventType;
  title?: string;
  content?: string[];
  imageLinks?: string[];

  source: Source;
  date: Date;
  author?: string;
  sourceLink?: string;
  notes?: Note[];

  markets?: IndustryType[];
  tickers?: string[];

  tags?: string[];
  isBullish?: boolean;
  stats?: StatsDisplay[];
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'Sector',
  stock = 'Stocks',
  investor = 'Investor',
  earnings = 'Earnings',
}

export interface NewsWithDetails extends News {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
