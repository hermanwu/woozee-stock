import { Risk } from 'src/app/risks/models/risk.model';
import { Note } from 'src/app/shared/data/note.interface';
import { News } from '../mocks/news.model';
import { MyScore } from './herman-score.model';
import { Rating } from './rating.model';
import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface StockAnalysis {
  logo?: string;
  name?: any;
  description?: string[];
  ticker?: string;
  ceoQuote?: string[];
  advantage?: string[];
  risks?: Risk[];
  marketCap?: any;
  // POTENTIALS:
  revenueGrowth?: number;
  PS?: any;
  predication?: {
    marketCap: [string, string];
  };
  stats?: StockStats;
  optionCrazy?: boolean;
  propertiesPageEnabled?: boolean;

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
  myRating?: Rating;
  note?: Note;
}
