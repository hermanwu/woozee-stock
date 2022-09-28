import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { currentUserMock } from '../data/user.mock';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  currentUser = currentUserMock;
  rankings = new BehaviorSubject<string[]>(this.currentUser.rankings);
  rankings$ = this.rankings.asObservable();

  constructor() {}

  getCurrentUser() {
    return this.currentUser;
  }

  getPortfolios() {
    return this.currentUser.portfolios;
  }

  getPortfolioByName(name: string): {
    name: string;
    stocks: string[];
  } {
    const portfolio = this.currentUser.portfolios.filter(
      (portfolio) => portfolio.name === name
    )[0];

    return portfolio;
  }

  getGlobalRanking() {
    return this.currentUser.rankings;
  }

  setGlobalRanking(rankings: string[]) {
    this.rankings.next(rankings);
  }

  updateStockRanks(stocks: StockData[], rankings: string[]): StockData[] {
    const updatedStocks = cloneDeep(stocks);

    const stockRankMap = {};

    for (let i = 0; i < rankings.length; i++) {
      stockRankMap[rankings[i].toLowerCase()] = i;
    }

    for (let stock of updatedStocks) {
      stock.rank = stockRankMap[stock.ticker.toLowerCase()];
    }

    return updatedStocks;
  }
}
