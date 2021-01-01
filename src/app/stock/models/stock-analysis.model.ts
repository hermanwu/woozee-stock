import { MyScore } from './herman-score.model';
import { StockStats } from './stock-stats.model';

export interface StockAnalysis {
  logo: string;
  name: any;
  description: string[];
  vision?: string[];
  painPoint: string[]; // for market.
  products?: any[];
  customers?: string[];
  market?: string[];
  ticker?: string;

  businessModel: string[]; // how to earn money.
  advantage: string[]; // over competitor
  risk: string[];

  competitor?: string[];

  predication?: {
    marketCap: [string, string];
  };
  thoughts?: {
    hermanScore: number;
  };

  trend?: string[];
  stats?: StockStats;
  earningReports?: {
    '2020-2': {};
  };
  score: MyScore;
  lastUpdated?: Date;
}
