import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { PricesServices } from 'src/app/shared/services/prices.services';
import { UserServices } from '../../../accounts/services/user.services';
import { StockServices } from '../../services/stock.service';

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
  stockUuidToTagsMap = {};

  constructor(
    private dialog: MatDialog,
    private userServices: UserServices,
    private router: Router,
    private pricesServices: PricesServices,
    private stockServices: StockServices
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
              ticker: uuid,
              type: 'stock',
            });
          }
        }

        stockInteractions.sort((a, b) => (b?.vote || 0) - (a?.vote || 0));

        this.stockDisplays = stockInteractions;
      });

    this.userServices
      .getTags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tags) => {
        this.stockUuidToTagsMap = {};
        const sortedTags = Object.values(tags).sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        );

        for (let tag of sortedTags) {
          if (tag.stocks) {
            for (let stockUuid of Object.keys(tag.stocks)) {
              if (!this.stockUuidToTagsMap[stockUuid]) {
                this.stockUuidToTagsMap[stockUuid] = [];
              }
              this.stockUuidToTagsMap[stockUuid].push({
                uuid: tag.uuid,
                name: tag.name,
                votes: tag.votes,
                sentiment: tag.sentiment,
              });
            }
          }
        }

        console.log(this.stockUuidToTagsMap);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  editTag(stock) {
    this.stockServices.editStockTag(
      stock.ticker,
      this.stockUuidToTagsMap[stock.ticker]?.map((tag) => tag.uuid)
    );
  }
}
