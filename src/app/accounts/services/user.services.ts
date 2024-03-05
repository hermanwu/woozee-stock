import { Injectable } from '@angular/core';
import { userInteractions } from 'src/app/mock-data/interactions.mock';
import { users } from 'src/app/mock-data/mock-users.data';
import { getTradableItemByOrganizationUuid } from 'src/app/mock-data/mocks/tradables.mock';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { currentUserMock } from '../data/user.mock';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  currentUser = currentUserMock;
  users = users;
  entityUuidToInteraction = new Map<string, any>();
  userTradableItemsSet = new Set<string>();
  userOrganizationSet = new Set<string>();
  userProductsSet = new Set<string>();
  userPeopleSet = new Set<string>();

  constructor() {
    const interactions = userInteractions.filter(
      (interaction) => interaction.userUuid === this.currentUser.userUuid
    );

    for (let interaction of interactions) {
      this.entityUuidToInteraction.set(interaction.targetUuid, interaction);

      if (interaction.type === 'tradableItem') {
        this.userTradableItemsSet.add(interaction.targetUuid);
      } else if (interaction.type === 'stock') {
        this.userOrganizationSet.add(interaction.targetUuid);

        const tradable = getTradableItemByOrganizationUuid(
          interaction.targetUuid
        );
        if (tradable) {
          this.userTradableItemsSet.add(tradable.uuid);
        }
      } else if (interaction.type === 'product') {
        this.userProductsSet.add(interaction.targetUuid);
      } else if (interaction.type === 'person') {
        this.userPeopleSet.add(interaction.targetUuid);
      }
    }
  }

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
