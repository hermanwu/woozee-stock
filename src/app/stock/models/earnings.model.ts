import { Note } from 'src/app/shared/data/note.interface';
import { Composition } from './composition.model';

export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;
  transcript?: string;

  // Growth
  revenue?: number;
  revenueDetails?: Composition[];
  activeUserCount?: number;
  revenueRetention?: number;

  // Profitablity
  operatingIncome?: number;
  netIncome?: number;
  salesAndMarketingCost?: number;
  sellingGeneraAdministrative?: number;

  // Calculated results:
  operatingMargin?: number;

  revenueGrowth?: number;
  operatingIncomeGrowth?: number;

  // Additional Stats
  dailyActiveUser?: number;

  isAnnual?: boolean;

  notes?: Note[];
}
