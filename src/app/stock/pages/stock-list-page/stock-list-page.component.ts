import { Component, OnInit } from '@angular/core';
import { currentUser } from 'src/app/accounts/data/user.mock';
import { sortByShortName } from 'src/app/shared/functions/sorting.function';
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
  trends = Object.values(Trend);

  watchList: any[];
  stocks: StockData[];

  bearishStocks: StockData[];
  bullishStocks: StockData[];

  currentUser = currentUser;

  constructor(private objectiveDataService: ObjectiveDataService) {
    this.stocks = this.objectiveDataService
      .getAllStockData()
      .filter((item) => item?.latestReport?.date);

    this.stocks = sortByShortName(this.stocks);
  }

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.tickers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
}
