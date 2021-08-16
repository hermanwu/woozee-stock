import { News } from '../mocks/news.model';
import { MyScore } from './herman-score.model';
import { Note } from './note.model';
import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface StockAnalysis {
  logo?: string;
  name?: any;
  description?: string[];
  ticker?: string;
  ceoQuote?: string[];
  advantage?: string[];
  risk?: string[];
  marketCap?: any;
  // POTENTIALS:
  revenueGrowth?: number;
  PS?: any;
  predication?: {
    marketCap: [string, string];
  };
  stats?: StockStats;

  // Demand:
  vision?: string[];
  value?: string[];
  products?: any[];
  painPoint?: string[]; // for market.
  customers?: string[];
  market?: string[]; // China, US, ETC
  trend?: string[] | Trend[];

  // Supply:
  competitor?: string[];
  moat?: string[]; // As company grows, what moat
  differentiator?: string[];
  businessModel?: string[]; // how to earn money.
  companyCulture?: {
    isCeoLed: boolean;
  };

  // Other Reports:

  thoughts?: {
    hermanScore: number;
  };
  earnings: {};
  score?: MyScore;
  lastUpdated?: Date;
  source?: any;
  companyOfficialDocs?: Note[];
  usefulVideos?: Note[];
  news?: News[];
}
