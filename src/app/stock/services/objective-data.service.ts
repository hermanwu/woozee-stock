import { Injectable } from '@angular/core';
import { stocksMap } from '../mocks/stock-list.const';
import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { StockData } from './stock-data.model';

@Injectable({
  providedIn: 'root',
})
export class ObjectiveDataService {
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

      // Calculate current year stats.
      const currentYearReports = reports.slice(0, 4);

      let ttmRevenue = 0;
      let ttmOI = 0;
      let ttmGrossProfit = 0;
      let ttmNetIncome = 0;

      for (let report of currentYearReports) {
        report.grossProfit = report.totalRevenue - report.costOfRevenue;

        if (ttmRevenue !== undefined) {
          ttmRevenue = report.totalRevenue
            ? ttmRevenue + report.totalRevenue
            : undefined;
        }

        if (ttmOI !== undefined) {
          ttmOI = report.operatingIncome
            ? ttmOI + report.operatingIncome
            : undefined;
        }

        if (ttmGrossProfit !== undefined) {
          ttmGrossProfit = report.grossProfit
            ? ttmGrossProfit + report.grossProfit
            : undefined;
        }

        if (ttmNetIncome !== undefined) {
          ttmNetIncome = report.netIncome
            ? ttmNetIncome + report.netIncome
            : undefined;
        }
      }

      stock.ttmRevenue = ttmRevenue;
      stock.ttmOI = ttmOI;
      stock.ttmGrossProfit = ttmGrossProfit;
      stock.ttmNetIncome = ttmNetIncome;

      // Calculate previous year stats.
      const previousYearReport = reports.slice(4, 8);
      let previousTtmRevenue = 0;
      let previousTtmOI = 0;
      let previousTtmGrossProfit = 0;

      for (let report of previousYearReport) {
        if (previousTtmRevenue !== undefined) {
          previousTtmRevenue = report.totalRevenue
            ? previousTtmRevenue + report.totalRevenue
            : undefined;
        }

        if (previousTtmOI !== undefined) {
          previousTtmOI = report.operatingIncome
            ? previousTtmOI + report.operatingIncome
            : undefined;
        }

        if (previousTtmGrossProfit !== undefined) {
          previousTtmGrossProfit = report.grossProfit
            ? previousTtmGrossProfit + report.grossProfit
            : undefined;
        }
      }

      stock.previousTtmRevenue = previousTtmRevenue;
      stock.previousTtmOI = previousTtmOI;
      stock.previousTtmGrossProfit = previousTtmGrossProfit;

      //
      stock.marketCapToOiRatio =
        stock.ttmOI > 0 ? stock.marketCap / stock.ttmOI : undefined;
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
        // Calculate quarterly gross profit.
        stock.quarterGrossProfit = currentReport.grossProfit;
        stock.quarterGrossProfitMargin =
          currentReport.grossProfit / currentReport.totalRevenue;
        stock.previousQuarterGrossProfit = previousReport.grossProfit;
        stock.quarterGrossProfitGrowth =
          (stock?.quarterGrossProfit - stock?.previousQuarterGrossProfit) /
          stock?.previousQuarterGrossProfit;

        // Calculate quarterly operating expenses.
        stock.quarterExpenses =
          currentReport.grossProfit - currentReport.operatingIncome;
        stock.previousQuarterExpenses =
          previousReport.grossProfit - previousReport.operatingIncome;
        stock.quarterExpensesGrowth =
          (stock?.quarterExpenses - stock?.previousQuarterExpenses) /
          stock?.previousQuarterExpenses;

        // Calculate Operating Cost over
        stock.quarterOperatingCostOverGrossProfit =
          stock?.quarterExpenses / stock?.quarterGrossProfit;
        stock.quarterOperatingMargin =
          currentReport.operatingIncome / currentReport.totalRevenue;

        stock.previousQuarterRevenue = previousReport.totalRevenue;
        stock.quarterRevenue = currentReport.totalRevenue;
        stock.quarterRevenueGrowth =
          (currentReport.totalRevenue - previousReport.totalRevenue) /
          previousReport.totalRevenue;
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
    return this.calculateGrowth(previous?.totalRevenue, current?.totalRevenue);
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
      earningReport.totalRevenue
    ) {
      return earningReport.operatingIncome / earningReport.totalRevenue;
    }
  }
}
