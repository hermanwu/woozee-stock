import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export interface StockData extends StockAnalysis {
  // Earnings
  latestReport?: EarningsReport;
  previousYearReport?: EarningsReport;

  // Revenue
  previousQuarterRevenue?: number;
  quarterRevenue?: number;
  quarterRevenueGrowth?: number;
  ttmRevenue?: number;
  previousTtmRevenue?: number;
  yearOverYearRevenueGrowth?: number;

  // Profit
  quarterGrossProfit?: number;
  quarterOperatingIncome?: number;
  quarterOperatingMargin?: number;
  quarterOiGrowth?: number;
  quarterOperatingCostOverGrossProfit?: number;
  ttmOI?: number;
  ttmOperatingMargin?: number;

  // Value
  psRatio?: number;
  revenueToMarketCapRatio?: number;
  oiToMarketCapRatio?: number;
}
