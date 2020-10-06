import { StockStats } from './stock-stats.model';
import { Trend } from './trend.enum';

export interface StockAnalysis {
  images: any;
  name: any;
  description: string[];
  earningReports?: {
    '2020-2': {};
  };
  stats: StockStats;
  trend?: Trend[];
  strategy: {
    painPoint: object; // for market.
    advantage: object; // over competitor
    businessModel: any; // how to earn money.
  };
  risk: {};
  products?: {};
  market: {};
  customers?: string[];
  conclusion: {
    targetPrice: any;
  };
  competitor?: {};
  thoughts?: {
    hermanScore: number;
  };
}
