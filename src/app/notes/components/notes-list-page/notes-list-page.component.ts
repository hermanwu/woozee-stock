import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { NotesServices } from 'src/app/news/services/notes.services';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { getAllTags } from 'src/app/shared/data/tag.model';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { PricesServices } from 'src/app/shared/services/prices.services';
import { StockServices } from 'src/app/stock/services/stock.service';
import { environment } from 'src/environments/environment';
import { InteractionServices } from 'src/interactions/interaction.services';
import { UserServices } from '../../../accounts/services/user.services';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

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
    private pricesServices: PricesServices
  ) {}

  ngOnInit(): void {
    this.tags = getAllTags().sort((a, b) => {
      return (b.votes || 0) - (a.votes || 0);
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

  addNote() {
    this.dialogService.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: '600px',
      disableClose: true,
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
