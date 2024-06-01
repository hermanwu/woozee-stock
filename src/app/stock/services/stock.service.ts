import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { organizations } from 'src/app/mock-data/organization.mock';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { StockData } from './stock-data.model';

@Injectable({
  providedIn: 'root',
})
export class StockServices {
  dataMap: Map<string, StockData> = new Map();
  currentQuarterEr: EarningsReport;
  fourPreviousQuarterEr: EarningsReport;
  nextQuarterEr: EarningsReport;
  threePreviousQuarterEr: EarningsReport;
  stock: StockAnalysis;

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  /**
   *
   * @param ticker
   * @param mergeObject Object to merge with the existing stock data.
   */
  setStockData(ticker, mergeObject) {
    this.firestore
      .collection('stocks')
      .doc(ticker.toUpperCase())
      .set(mergeObject, { merge: true });
  }

  setProductData(productUuid, mergeObject) {
    this.firestore
      .collection('products')
      .doc(productUuid)
      .set(mergeObject, { merge: true });
  }

  getEarningsReleaseTime(date: string) {
    const url =
      `https://www.dolthub.com/api/v1alpha1/post-no-preference/earnings/master?q=SELECT+*%0AFROM+%60earnings_calendar%60%0AWHERE++%60date%60+%3D+%27` +
      date +
      `%27%0AORDER+BY+%60act_symbol%60+ASC%2C+%60date%60+ASC%0ALIMIT+1000%3B%0A`;

    return this.http.get(url).pipe(
      catchError((error) => {
        // Handle or log the error
        console.error('Caught in catchError:', error);
        // You can return an observable of a default item in case of an error
        // return of(defaultValue);
        // Or rethrow the error if you want to handle it in the error callback of subscribe()
        return throwError(() => new Error('Error after catchError'));
      })
    );
  }

  getStockByUuid(ticker: string): Observable<any> {
    ticker = ticker.toUpperCase();
    const url = `https://getstockbyticker-igvhya62rq-uc.a.run.app?ticker=${ticker}`;
    // const url = `http://127.0.0.1:5001/woozee-stock/us-central1/logEndPoint?ticker=${ticker}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        // Handle or log the error
        console.error('Caught in catchError:', error);
        // You can return an observable of a default item in case of an error
        // return of(defaultValue);
        // Or rethrow the error if you want to handle it in the error callback of subscribe()
        return throwError(() => new Error('Error after catchError'));
      })
    );
  }

  getDataMap() {
    return this.dataMap;
  }

  getAllStockData(): StockData[] {
    const stocks = Array.from(this.dataMap.values());
    return stocks;
  }

  getStocksByIndustryType(
    type: IndustryType,
    stocks: StockData[] = Array.from(this.dataMap.values())
  ): StockData[] {
    return (
      stocks
        // filter out the stock that is in this market.
        .filter((stock) => {
          if (stock?.industries || stock?.business?.markets) {
            const markets = stock?.industries || stock?.business?.markets;

            if (markets.filter((market) => market === type).length > 0) {
              return true;
            }
          }
          return false;
        })
    );
  }

  getOrganizationByUuid(id: string): any {
    return organizations.find(
      (org) =>
        org?.uuid?.toLowerCase() === id.toLowerCase() ||
        org?.id?.toLowerCase() === id.toLowerCase()
    );
  }

  getEarningsReportInDescendingOrder(earningsReports: EarningsReport[]) {
    return cloneDeep(earningsReports)
      .filter((report) => !report.isForecast)
      .sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }

  calculateRevenues(stock: StockData): StockData {
    if (stock && stock.earningsReports) {
      const futureReport =
        stock.earningsReports[0]?.isForecast ||
        stock.earningsReports[0]?.forecastRevenueBottom
          ? stock.earningsReports[0]
          : null;

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
        // If report does not have gross profit data, generat it from cost of revenue.
        if (!report.grossProfit) {
          report.grossProfit = report.totalRevenue - report.costOfRevenue;
        }

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
      stock.futureReport = futureReport;

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

        stock.quarterNetMargin =
          currentReport.netIncome / currentReport.totalRevenue;

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
