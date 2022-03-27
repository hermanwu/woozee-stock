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
  quarterOiGrowth?: number;
  quarterOperatingCostOverGrossProfit?: number;
  ttmOI?: number;
  ttmGrossProfit?: number;
  ttmNetIncome?: number;
  previousTtmOI?: number;
  previousTtmGrossProfit?: number;

  // Value
  marketCapToOiRatio?: number;
}
