import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { InteractionServices } from 'src/app/interactions/interaction.services';
import { NotesServices } from 'src/app/news/services/notes.services';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { PricesServices } from 'src/app/shared/services/prices.services';
import { SearchService } from 'src/app/shared/services/search.services/search.service';
import { StockServices } from 'src/app/stock/services/stock.service';
import { environment } from 'src/environments/environment';
import { UserServices } from '../../../accounts/services/user.services';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  tags = [];
  stockInteractions = [];
  emojiUnicode = EmojiUnicode;
  stockDisplays: {
    ticker: string;
    vote: string;
  }[] = [];
  environment = environment;

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private dialogService: MatDialog,
    private router: Router,
    private interactionServices: InteractionServices,
    private stockServices: StockServices,
    private navigationServices: NavigationServices,
    private pricesServices: PricesServices,
    private searchServices: SearchService
  ) {}

  ngOnInit(): void {
    this.userServices
      .getTags()
      .pipe(
        filter((tags) => !!tags),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((tags) => {
        this.tags = Object.values(tags).sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        );
      });

    this.userServices
      .getUserInteractions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((interactions) => {
        const stockInteractions = [];
        for (const [key, interaction] of Object.entries(interactions)) {
          if (interaction.type === 'tradable' || interaction.type === 'stock') {
            if (interaction.vote > 0 || interaction.vote < 0) {
              stockInteractions.push(interaction);
            }
          }
        }
        stockInteractions.sort((a, b) => (b?.vote || 0) - (a?.vote || 0));

        this.stockDisplays = stockInteractions.map((interaction) => {
          return {
            ticker: interaction.targetUuid.split(':')[0].toUpperCase(),
            vote: interaction.vote,
            interaction,
          };
        });
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
