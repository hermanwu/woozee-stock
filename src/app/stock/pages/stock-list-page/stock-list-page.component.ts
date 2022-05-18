import { Component, OnInit } from '@angular/core';
import { BOA } from 'src/app/accounts/ mock-data/herman-boa-account';
import { citi } from 'src/app/accounts/ mock-data/herman-citi-account';
import { hermanFutu } from 'src/app/accounts/ mock-data/herman-futu';
import { hermanIbAccount } from 'src/app/accounts/ mock-data/herman-ib-account';
import { schwab } from 'src/app/accounts/ mock-data/herman-schwab-account';
import { jessicaPaypal } from 'src/app/accounts/ mock-data/jessica-paypal-account';
import { meilongIbAccount } from 'src/app/accounts/ mock-data/meilong-ib-account';
import { currentUser } from 'src/app/accounts/data/user.mock';
import { industry } from 'src/app/shared/industry.enum';
import { Trend } from 'src/app/shared/trend.enum';
import { ObjectiveDataService } from '../../services/objective-data.service';
import { StockData } from '../../services/stock-data.model';

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
  industries = Object.values(industry);
  trends = Object.values(Trend);

  tickers: Equity[] = [
    // My account
    ...citi,
    ...BOA,
    ...schwab,
    ...hermanIbAccount,
    ...hermanFutu,

    // Jessica Account.
    ...jessicaPaypal,

    // Mei long Account
    ...meilongIbAccount,
  ];
  equitySummaryMap = this.generateEquitySummaryMap(this.tickers);
  watchList: any[];
  stocks: StockData[];

  currentUser = currentUser;

  constructor(private objectiveDataService: ObjectiveDataService) {
    this.stocks = this.objectiveDataService
      .getAllStockData()
      .filter((stock) => currentUser?.watchList?.indexOf(stock.uuid) >= 0);
  }

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.tickers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  private generateEquitySummaryMap(tickers: Equity[]): any {
    const result = {};

    for (let equity of tickers) {
      if (result[equity.ticker]) {
        result[equity.ticker] = result[equity.ticker] + equity.shares ?? 0;
      } else {
        result[equity.ticker] = equity.shares;
      }
    }

    return result;
  }
}
