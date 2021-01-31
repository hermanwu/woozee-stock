import { News } from '../mocks/news.model';
import { MyScore } from './herman-score.model';
import { Note } from './note.model';
import { StockStats } from './stock-stats.model';

export interface StockAnalysis {
  logo: string;
  name?: any;
  description?: string[];
  ticker?: string;
  ceoQuote?: string[];

  // Facts.
  products?: any[];
  customers?: string[];
  competitor?: string[];
  market?: string[]; // China, US, ETC

  valueAndVision?: string[];

  businessModel?: string[]; // how to earn money.

  moat?: string[]; // As company grows, what moat
  differentiator?: string[];

  risk?: string[];

  // TO REMOVE

  vision?: string[];
  painPoint?: string[]; // for market.
  advantage?: string[]; // over competitor

  predication?: {
    marketCap: [string, string];
  };
  thoughts?: {
    hermanScore: number;
  };

  trend?: string[];
  stats?: StockStats;
  earningReports?: any;
  score?: MyScore;
  lastUpdated?: Date;
  source?: any;

  companyOfficialDocs?: Note[];
  usefulVideos?: Note[];
  news?: News[];
}
