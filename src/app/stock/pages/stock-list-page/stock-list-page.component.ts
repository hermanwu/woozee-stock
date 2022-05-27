import { Component, OnInit } from '@angular/core';
import { currentUser } from 'src/app/accounts/data/user.mock';
import { sortByCatalystRiskDifference } from 'src/app/shared/functions/sorting.function';
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

  watchList: any[];
  stocks: StockData[];

  bearishStocks: StockData[];
  bullishStocks: StockData[];

  currentUser = currentUser;

  constructor(private objectiveDataService: ObjectiveDataService) {
    this.stocks = this.objectiveDataService
      .getAllStockData()
      .filter((stock) => currentUser?.watchList?.indexOf(stock.uuid) >= 0);

    this.stocks = sortByCatalystRiskDifference(this.stocks);
    this.bullishStocks = this.stocks.slice(0, 5);
    this.bearishStocks = this.stocks.reverse().slice(0, 5);
  }

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.tickers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
}
