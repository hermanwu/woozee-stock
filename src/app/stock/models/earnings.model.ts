import { Note } from 'src/app/shared/data/note.interface';
import { Composition } from './composition.model';

export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;
  fullyYearForecastRevenue?: number;

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
  grossProfit?: number;
  operatingIncome?: number;
  netIncome?: number;
  salesAndMarketingCost?: number;
  sellingGeneralAdministrative?: number;
  // Additional Stats
  isAnnual?: boolean;
  notes?: Note[];

  // notes
  quarterHighlights?: string[];
  annualHighlights?: string[];
}
