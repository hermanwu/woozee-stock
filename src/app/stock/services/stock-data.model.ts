import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export interface StockData extends StockAnalysis {
  // Earnings
  futureReport?: EarningsReport;
  latestReport?: EarningsReport;
  previousYearReport?: EarningsReport;

  // Growth
  previousQuarterRevenue?: number;
  previousQuarterRevenueForForecast?: number;
  quarterRevenue?: number;
  quarterRevenueGrowth?: number;
  quarterRevenueForcast?: number;
  ttmRevenue?: number;
  previousTtmRevenue?: number;
  yearOverYearRevenueGrowth?: number;

  // Profit
  quarterGrossProfit?: number;
  quarterGrossProfitMargin?: number;
  quarterGrossProfitGrowth?: number;
  quarterExpenses?: number;
  quarterExpensesGrowth?: number;
  quarterOperatingCostOverGrossProfit?: number;
  quarterOperatingMargin?: number;
  quarterNetMargin?: number;

  ttmOI?: number;
  ttmGrossProfit?: number;
  ttmNetIncome?: number;

  previousQuarterGrossProfit?: number;
  previousQuarterExpenses?: number;

  previousTtmOI?: number;
  previousTtmGrossProfit?: number;

  // Value
  marketCapToOiRatio?: number;
}
