import { IndustryType } from 'src/app/facts/data/area.enum';
import { MacroType } from 'src/app/macro/macro.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { StatsDisplay } from '../../shared/components/stats-display/stats-display.interface';
import { Source } from '../models/news-source.enum';

export interface News {
  uuid: string;
  catalystUuids?: string[];
  riskUuids?: string[];
  type: EventType;
  title?: string;
  content?: string[];
  imageLinks?: string[];

  source?: Source;
  date?: Date;
  author?: string;
  sourceLink?: string;
  notes?: Note[];

  markets?: IndustryType[];
  tickers?: string[];

  tags?: (IndustryType | MacroType)[];
  isBullish?: boolean;
  stats?: StatsDisplay[];

  quotes?: string[];
  people?: string[];
}

export enum EventType {
  macro = 'Macro',
  geopolitics = 'Geopolitics',
  industry = 'industry',
  stock = 'Stocks',
  investor = 'Investor',
  earnings = 'Earnings Results',
}

export interface NewsWithDetails extends News {
  risks?: Risk[];
  catalysts?: Catalyst[];
}
