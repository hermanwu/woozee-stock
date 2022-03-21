import { Injectable } from '@angular/core';
import { stocksMap } from '../mocks/stock-list.const';
import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { StockData } from './stock-data.model';

@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  dataMap: Map<string, StockData> = new Map();
  currentQuarterEr: EarningsReport;
  fourPreviousQuarterEr: EarningsReport;
  nextQuarterEr: EarningsReport;
  threePreviousQuarterEr: EarningsReport;
  stock: StockAnalysis;

  constructor() {
    for (const property in stocksMap) {
      const stock = stocksMap[property] as StockData;

      this.calculateRevenues(stock);

      this.dataMap.set(property, stock);
    }
  }

  getDataMap() {
    return this.dataMap;
  }

  getAllStockData(): StockData[] {
    const stocks = Array.from(this.dataMap.values());
    return stocks;
  }

  calculateRevenues(stock: StockData): StockData {
    if (stock && stock.earningsReports) {
      const reports = stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);
      stock.ttmRevenue = reports
        .slice(0, 4)
        .reduce((previous, current) => previous + current.revenue, 0);
      stock.previousTtmRevenue = reports
        .slice(4, 8)
        .reduce((previous, current) => previous + current.revenue, 0);
      stock.ttmOI = reports
        .slice(0, 4)
        .reduce((previous, current) => previous + current.operatingIncome, 0);
      stock.ttmOperatingMargin = stock.ttmOI / stock.ttmRevenue;

      stock.psRatio = stock.marketCap / stock.ttmRevenue;
      stock.revenueToMarketCapRatio = stock.ttmRevenue / stock.marketCap;
      stock.oiToMarketCapRatio = stock.ttmOI / stock.marketCap;
      stock.yearOverYearRevenueGrowth =
        (stock.ttmRevenue - stock.previousTtmRevenue) /
        stock.previousTtmRevenue;

      const currentReport = reports[0];
      const previousReport = reports.filter(
        (report) =>
          report.year === currentReport.year - 1 &&
          report.quarter === currentReport.quarter
      )[0];

      stock.latestReport = currentReport;
      stock.previousYearReport = previousReport;

      if (currentReport && previousReport) {
        stock.quarterOperatingIncome = currentReport.operatingIncome;
        stock.quarterGrossProfit = currentReport.grossProfit;

        stock.quarterOperatingCostOverGrossProfit =
          (currentReport.grossProfit - currentReport.operatingIncome) /
          currentReport.grossProfit;

        stock.quarterOperatingMargin =
          currentReport.operatingIncome / currentReport.revenue;

        stock.previousQuarterRevenue = previousReport.revenue;
        stock.quarterRevenue = currentReport.revenue;
        stock.quarterRevenueGrowth =
          (currentReport.revenue - previousReport.revenue) /
          previousReport.revenue;

        stock.quarterOiGrowth =
          (currentReport.operatingIncome - previousReport.operatingIncome) /
          Math.abs(previousReport.operatingIncome);
      }

      return stock;
    }

    return stock as StockData;
  }

  calculatePercentage(part: number, whole: number): number {
    if (part && whole) {
      return part / whole;
    }
  }

  calculateGrowth(previous: number, current: number): number {
    if (current && previous) {
      return (current - previous) / Math.abs(previous);
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
    if (
      earningReport &&
      earningReport.operatingIncome &&
      earningReport.revenue
    ) {
      return earningReport.operatingIncome / earningReport.revenue;
    }
  }
}
