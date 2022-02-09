export interface EarningsReport {
  year: number;
  quarter: number;

  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;

  revenue?: number;
  operatingIncome?: number;
  dailyActiveUser?: number;

  // Calculated results:
  operatingMargin?: number;

  revenueGrowth?: number;
  operatingIncomeGrowth?: number;
  dailyActiveUserGrowth?: number;
}
