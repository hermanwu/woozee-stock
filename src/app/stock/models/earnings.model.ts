import { Note } from 'src/app/shared/data/note.interface';

export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;

  // Growth
  revenue?: number;
  revenueDetails?: any;
  userCount?: number;

  // Profitablity
  revenueRetention?: number;
  operatingIncome?: number;
  netIncome?: number;
  salesAndMarketingCost?: number;

  // Calculated results:
  operatingMargin?: number;

  revenueGrowth?: number;
  operatingIncomeGrowth?: number;

  // Additional Stats
  dailyActiveUser?: number;

  isAnnual?: boolean;

  notes?: Note[];
}
