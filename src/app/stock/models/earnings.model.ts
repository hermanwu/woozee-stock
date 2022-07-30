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
  webcast?: string;

  // Growth
  totalRevenue?: number;
  costOfRevenue?: number;
  researchAndDevelopment?: number;
  unusualExpenseIncome?: number;
  totalOperatingExpense?: number;
  operatingIncome?: number;
  interestIncomeNet?: number;
  otherIncomeNet?: number;
  netIncomeBeforeTaxes?: number;
  provisionForIncomeTaxes?: number;
  netIncome?: number;
  statsDetails?: Composition[];
  activeUserCount?: number;
  revenueRetention?: number;

  // Profitablity
  grossProfit?: number;
  salesAndMarketingCost?: number;
  sellingGeneralAndAdministrative?: number;
  // Additional Stats
  isAnnual?: boolean;
  notes?: Note[];

  // notes
  quarterHighlights?: Note[] | string[];
  annualHighlights?: string[];
}
