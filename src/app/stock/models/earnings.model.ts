import { StatsDisplay } from 'src/app/shared/components/stats-display/stats-display.interface';
import { Note } from 'src/app/shared/data/note.interface';

export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;
  fullyYearForecastRevenue?: number;
  date?: Date;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;
  transcript?: string;
  webcast?: string;
  shareholderLetter?: string;
  links?: { name: string; value: string }[];

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

  forecastRevenueTop?: number;
  forecastRevenueBottom?: number;
  forecastQuarterlyGrowthRateTop?: number;
  forecastQuarterlyGrowthRateBottom?: number;

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

  stats?: StatsDisplay[];
}
