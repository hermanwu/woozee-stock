import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { PricesServices } from 'src/app/shared/services/prices.services';
import { UserServices } from '../../../accounts/services/user.services';

@Component({
  selector: 'app-stock-list-page',
  templateUrl: './stock-list-page.component.html',
  styleUrls: ['./stock-list-page.component.scss'],
})
export class StockListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  stockInteractions = [];
  emojiUnicode = EmojiUnicode;
  stockDisplays: {
    ticker: string;
    vote: string;
  }[] = [];

  constructor(
    private dialog: MatDialog,
    private userServices: UserServices,
    private router: Router,
    private pricesServices: PricesServices
  ) {}

  ngOnInit(): void {
    this.userServices
      .getUserInteractions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((interactions) => {
        const stockInteractions = [];
        for (const [key, interaction] of Object.entries(interactions)) {
          const [uuid, type] = key.split(':');
          if (type === 'tradable') {
            stockInteractions.push({
              ...interaction,
              ticker: uuid.toUpperCase(),
              type: 'stock',
            });
          }
        }

        stockInteractions.sort((a, b) => (b?.vote || 0) - (a?.vote || 0));

        this.stockDisplays = stockInteractions;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
