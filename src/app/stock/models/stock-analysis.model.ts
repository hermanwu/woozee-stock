import { News } from '../mocks/news.model';
import { MyScore } from './herman-score.model';
import { Note } from './note.model';
import { StockStats } from './stock-stats.model';

export interface StockAnalysis {
  logo: string;
  name?: any;
  description?: string[];
  vision?: string[];
  painPoint?: string[]; // for market.
  products?: any[];
  customers?: string[];
  market?: string[];
  ticker?: string;

  businessModel?: string[]; // how to earn money.
  advantage?: string[]; // over competitor
  risk?: string[];

  competitor?: string[];

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
