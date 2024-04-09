import { Injectable, OnDestroy } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { userInteractions } from 'src/app/mock-data/interactions.mock';
import { users } from 'src/app/mock-data/mock-users.data';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { AuthService } from 'src/app/shared/services/auth.services';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { UserInteractions } from 'src/interactions/interaction.services';

@Injectable({
  providedIn: 'root',
})
export class UserServices implements OnDestroy {
  users = users;
  user$: Observable<firebase.User | null>;
  username$: Observable<string | null>;
  private unsubscribe$ = new Subject<void>();
  interactions = [];
  userStockInteractions = [];

  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
    this.username$ = this.user$.pipe(
      map((user) => (user ? user.email : null)),
      startWith(undefined),
      takeUntil(this.unsubscribe$)
    );

    this.username$.pipe(takeUntil(this.unsubscribe$)).subscribe((username) => {
      if (username) {
        this.interactions = userInteractions.filter(
          (interaction) => interaction.userUuid === username
        );

        for (let interaction of this.interactions) {
          if (
            interaction.type === 'tradableItem' ||
            interaction.type === 'stock'
          ) {
            this.userStockInteractions.push(interaction);
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUsername() {
    return this.username$;
  }

  getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }

  getUserByUuid(uuid: string) {
    return this.users.find((user) => user.uuid === uuid);
  }

  getUserStockInteractions(): UserInteractions[] {
    return this.userStockInteractions;
  }

  getUserInteractionsByTypeAndTargetUuid(uuid, type): UserInteractions {
    return this.interactions.find(
      (interaction) =>
        interaction.targetUuid === uuid && interaction.type === type
    );
  }

  // getPortfolios() {
  //   return this.currentUser.portfolios;
  // }

  getSavedNotes(): string[] {
    return;
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

  // updateStockRanks(stock: Stock, lowerRanks: Stock) {}
}
