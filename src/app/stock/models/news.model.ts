import { IndustryType } from 'src/app/facts/data/area.enum';
import { Opinion } from 'src/app/opinions/components/opinion-display/opinion.interface';
import { Fact } from 'src/app/risks/models/fact.model';
import { Risk } from 'src/app/risks/models/risk.model';
import { StatsDisplay } from 'src/app/shared/components/stats-display/stats-display.interface';
import { Note } from 'src/app/shared/data/note.interface';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Source } from '../models/news-source.enum';

export interface News extends Fact, Opinion {
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
  stats?: StatsDisplay[];

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

export interface NewsWithDetails extends News {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
