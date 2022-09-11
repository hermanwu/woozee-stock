import { Injectable } from '@angular/core';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { stocksMap } from '../mocks/stock-list.const';
import { EarningsReport } from '../models/earnings.model';
import { StockAnalysis } from '../models/stock-analysis.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  getStockByTicker(ticker: string): StockAnalysis {
    return stocksMap[ticker.toLowerCase()];
  }

  getEarningsReportInDescendingOrder(earningsReports: EarningsReport[]) {
    return cloneDeep(earningsReports)
      .filter((report) => !report.isForecast)
      .sort((a, b) => b.year - a.year || b.quarter - a.quarter);
  }
}
