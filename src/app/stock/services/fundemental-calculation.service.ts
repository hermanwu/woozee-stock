import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export class FundamentalCalculationService {
  currentQuarterEr: EarningsReport;
  fourPreviousQuarterEr: EarningsReport;
  nextQuarterEr: EarningsReport;
  threePreviousQuarterEr: EarningsReport;
  stock: StockAnalysis;

  constructor(stock: StockAnalysis) {
    this.stock = stock;
    const earningsReports = stock.earningsReports
      .filter((earnings) => !earnings.isForecast)
      .sort((a, b) => b.year - a.year);
    this.currentQuarterEr = earningsReports[0];
    this.fourPreviousQuarterEr = earningsReports.find(
      (report) =>
        report.year === this.currentQuarterEr.year - 1 &&
        report.quarter === this.currentQuarterEr.quarter
    );
    this.nextQuarterEr = stock.earningsReports.find(
      (earnings) => earnings.isForecast === true
    );

    if (this.nextQuarterEr) {
      this.threePreviousQuarterEr = earningsReports.find(
        (report) =>
          report.year === this.nextQuarterEr.year - 1 &&
          report.quarter === this.nextQuarterEr.quarter
      );
    }
  }

  calculatePercentage(part: number, whole: number): number {
    if (part && whole) {
      return part / whole;
    }
  }

  calculateGrowth(previous: number, current: number): number {
    if (current && previous) {
      if (current > previous) {
        return (current - previous) / previous;
      } else {
        return -(current - previous) / previous;
      }
    }
  }

  calculateRevenueGrowth(previous: EarningsReport, current: EarningsReport) {
    return this.calculateGrowth(previous?.revenue, current?.revenue);
  }

  calculateOperatingIncomeGrowth(
    previous: EarningsReport,
    current: EarningsReport
  ) {
    return this.calculateGrowth(
      previous?.operatingIncome,
      current?.operatingIncome
    );
  }

  calculateOperatingMargin(earningReport: EarningsReport) {
    return earningReport.operatingIncome / earningReport.revenue;
  }
}
