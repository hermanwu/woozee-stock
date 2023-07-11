import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { users } from 'src/app/mock-data/mock-users.data';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { currentUserMock } from '../data/user.mock';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  currentUser = currentUserMock;
  users = users;
  rankings = new BehaviorSubject<string[]>(this.currentUser.rankings);
  marketRankings = new BehaviorSubject<string[]>(
    this.currentUser.marketRankings
  );

  industryRankings = new BehaviorSubject<IndustryType[]>(
    this.currentUser.industriesRankings
  );

  rankings$ = this.rankings.asObservable();
  industryRankings$ = this.industryRankings.asObservable();
  marketRankings$ = this.marketRankings.asObservable();

  constructor() {}

  getCurrentUser() {
    return this.currentUser;
  }

  getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  getUserByUuid(uuid: string) {
    return this.users.find((user) => user.uuid === uuid);
  }

  getPortfolios() {
    return this.currentUser.portfolios;
  }

  getSavedNoteUuids(): string[] {
    return this.currentUser.savedNotes;
  }

  getSavedNotes(): string[] {
    return;
  }

  // getMyNotes(): string[] {

  // }

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

  getLanguage() {
    return (
      this.currentUser.defaultLanguage ||
      localStorage.getItem('woozee-language') ||
      'en'
    );
  }

  setLanguage(language: string) {
    this.currentUser.defaultLanguage = language;
    localStorage.setItem('woozee-language', language);
  }

  // updateStockRanks(stock: Stock, lowerRanks: Stock) {}
}
