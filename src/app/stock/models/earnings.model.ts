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
  shareholderLetter?: string;

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
  revenueRetention?: number;
  revenueForecastTop?: number;
  revenueForecastBottom?: number;
  growthDetails?: Composition[];

  // Profitablity
  grossProfit?: number;
  salesAndMarketingCost?: number;
  sellingGeneralAndAdministrative?: number;
  // Additional Stats
  isAnnual?: boolean;
  notes?: Note[];
  costDetails?: Composition[];

  // notes
  quarterHighlights?: Note[] | string[];
  annualHighlights?: string[];
}
