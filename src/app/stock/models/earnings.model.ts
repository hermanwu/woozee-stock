import { Note } from 'src/app/shared/data/note.interface';

export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;

  revenue?: number;
  revenueDetails?: any;

  operatingIncome?: number;
  netIncome?: number;

  // Calculated results:
  operatingMargin?: number;

  revenueGrowth?: number;
  operatingIncomeGrowth?: number;

  // Additional Stats
  dailyActiveUser?: number;
  dailyActiveBusinesses?: number;

  notes?: Note[];
}
