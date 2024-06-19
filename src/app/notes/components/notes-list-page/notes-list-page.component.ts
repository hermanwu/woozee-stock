import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { PricesServices } from 'src/app/shared/services/prices.services';
import { CreateTagDialogComponent } from 'src/app/tag/create-tag-dialog/create-tag-dialog.component';
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
    private dialog: MatDialog,
    private userServices: UserServices,
    private router: Router,
    private pricesServices: PricesServices
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
          const [uuid, type] = key.split(':');
          if (type === 'tradable') {
            stockInteractions.push({
              ...interaction,
              ticker: uuid.toUpperCase(),
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

  openCreateNewTagDialog() {
    const createTagDialogRef = this.dialog.open<CreateTagDialogComponent>(
      CreateTagDialogComponent,
      {
        maxHeight: '90vh', //you can adjust the value as per your view
        data: {},
        panelClass: '600px',
        disableClose: true,
      }
    );
  }
}
