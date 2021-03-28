import { Component, OnInit } from '@angular/core';
import { BOA } from 'src/app/accounts/ mock-data/boa-account';
import { citi } from 'src/app/accounts/ mock-data/citi-account';
import { hermanIbAccount } from 'src/app/accounts/ mock-data/herman-ib-account';
import { jessicaPaypal } from 'src/app/accounts/ mock-data/jessica-paypal-account';
import { meilongIbAccount } from 'src/app/accounts/ mock-data/meilong-ib-account';
import { schwab } from 'src/app/accounts/ mock-data/schwab-account';
import { webull } from 'src/app/accounts/ mock-data/webull-jessica-account';
import { myStockList, Stock } from 'woozee-lib';

export interface Equity {
  ticker: string;
  shares?: number;
  callContracts?: number;
}
@Component({
  selector: 'app-stock-list-page',
  templateUrl: './stock-list-page.component.html',
  styleUrls: ['./stock-list-page.component.scss'],
})
export class StockListPageComponent implements OnInit {
  readonly stockInfo = myStockList;

  equities: Equity[] = [
    ...citi,
    ...BOA,
    ...schwab,
    ...hermanIbAccount,
    ...webull,
    ...jessicaPaypal,
    ...meilongIbAccount,
  ];
  equitySummaryMap = this.generateEquitySummaryMap(this.equities);
  stocks = [];

  constructor() {}

  ngOnInit(): void {
    const equitySummaryMap = this.generateEquitySummaryMap(this.equities);
    const stockMap = this.generateStockMap(this.stockInfo);
    this.stocks = this.convertToTableData(equitySummaryMap, stockMap);
  }

  private generateEquitySummaryMap(equities: Equity[]): any {
    const result = {};

    for (let equity of equities) {
      if (result[equity.ticker]) {
        result[equity.ticker] = result[equity.ticker] + equity.shares ?? 0;
      } else {
        result[equity.ticker] = equity.shares;
      }
    }

    return result;
  }

  private generateStockMap(stockInfo: Stock[]) {
    const result = {};

    for (let stock of stockInfo) {
      result[stock.ticker] = {
        ...stock,
      };
    }

    return result;
  }

  /**
   * Convert data to stock list table input.
   */
  private convertToTableData(equitySummaryMap: any, stockMap: any): any[] {
    console.log(stockMap);

    const result = [];

    for (let key of Object.keys(equitySummaryMap)) {
      result.push({
        ticker: key,
        shares: equitySummaryMap[key],
        name: stockMap[key]?.name,
        chineseName: stockMap[key]?.chineseName,
      });
    }

    return result;
  }
}
