export interface EarningsReport {
  year: number;
  quarter: number;
  isForecast?: boolean;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;

  revenue?: number;
  operatingIncome?: number;
  netIncome?: number;

  // Calculated results:
  operatingMargin?: number;

  revenueGrowth?: number;
  operatingIncomeGrowth?: number;

  // Additional Stats
  dailyActiveUser?: number;
  dailyActiveBusinesses?: number;
}
