import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export class FundamentalCalculationService {
  static calculateGrowth(previous: number, current: number): number {
    return (current - previous) / previous;
  }

  static generateLatestEarningReport(stock: StockAnalysis): EarningsReport {
    const earningsReports = stock.earningsReports.sort(
      (a, b) => b.year - a.year
    );
    const earningsReport = earningsReports[0];
    const year = earningsReport.year;
    const quarter = earningsReport.quarter;
    earningsReport.operatingMargin =
      earningsReport.operatingIncome / earningsReport.revenue >= 0
        ? earningsReport.operatingIncome / earningsReport.revenue
        : undefined;

    const lastYearReport = earningsReports.find(
      (report) => report.year === year - 1 && report.quarter === quarter
    );
    if (lastYearReport) {
      earningsReport.revenueGrowth = this.calculateGrowth(
        lastYearReport.revenue,
        earningsReport.revenue
      );

      earningsReport.operatingIncomeGrowth = this.calculateGrowth(
        lastYearReport.operatingIncome,
        earningsReport.operatingIncome
      );

      earningsReport.dailyActiveUserGrowth = this.calculateGrowth(
        lastYearReport.dailyActiveUser,
        earningsReport.dailyActiveUser
      );
    }

    return earningsReport;
  }
}
