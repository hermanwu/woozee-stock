export interface EarningsReport {
  year: number;
  quarter: number;
  reportLink?: string;
  pressReleaseLink?: string;
  slidesLink?: string;

  revenue?: number;
  operatingIncome?: number;
}
