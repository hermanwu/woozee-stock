import { Component, OnInit } from '@angular/core';
import { earnings } from 'src/app/mock-data/earnings.mock';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { formatDateToString } from 'src/app/shared/functions/date.function';
import { TagServices } from 'src/app/shared/services/tag.services';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { StockServices } from 'src/app/stock/services/stock.service';
import { environment } from 'src/environments/environment';
import { InteractionServices } from 'src/interactions/interaction.services';
import { NotesServices } from '../../services/notes.services';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  readonly NoteType = NoteType;
  readonly eventType = EventType;
  chips = new Set();
  environment = environment;
  markets: Industry[];
  notes: Note[] = [];
  savedNoteUuids = new Set();
  showAddNotesSection = false;
  showTools: boolean = false;
  selectedNote: Note;
  tags = [];
  earningsDisplays = earnings
    .sort((a, b) => {
      // Convert date strings to Date objects
      const dateA = new Date(a.releasedDate);
      const dateB = new Date(b.releasedDate);

      // Compare the dates
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 10)
    .map((e) => {
      return {
        earnings: e,
        targetUuids: e.targetUuids,
      };
    });
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  dailyEvents = [];
  tickers = [];
  earningsDate = new Date();
  beforeMarketOpen = [];
  afterMarketClose = [];

  constructor(
    private newsService: NotesServices,
    private tagServices: TagServices,
    private interactionServices: InteractionServices,
    private stockServices: StockServices
  ) {}

  ngOnInit(): void {
    // this.notes = this.newsService.getAllNews().slice(0, 10);
    this.tags = this.tagServices.getTrendTags();
    const interactions = this.interactionServices.getTopTradableInteractions();

    this.tickers = interactions.map((interaction) => {
      return interaction.targetUuid.split(':')[0].toUpperCase();
    });

    this.populateEarnings(this.earningsDate);
  }

  populateEarnings(earningsDate) {
    const dateString = formatDateToString(earningsDate);

    this.stockServices
      .getEarningsReleaseTime(dateString)
      .subscribe((results: { rows: any }) => {
        const earningsEvents = results.rows;
        this.beforeMarketOpen = [];
        this.afterMarketClose = [];

        for (let event of earningsEvents) {
          if (event.when) {
            const time = event.when.toLowerCase();
            if (time.includes('before market open')) {
              this.beforeMarketOpen.push({
                ticker: event.act_symbol,
              });
            } else if (time.includes('after market close')) {
              this.afterMarketClose.push({
                ticker: event.act_symbol,
              });
            }
          }
        }
      });
  }

  openDailyReportDialog() {
    // this.dialogService.open<DailyMediumReportDisplayDialogComponent>(
    //   DailyMediumReportDisplayDialogComponent,
    //   {
    //     maxHeight: '90vh', //you can adjust the value as per your view
    //     data: {},
    //     panelClass: '600px',
    //   }
    // );
  }

  // dateDifference can be positive or negative;
  // i.e. 1 means the next day, -1 means the previous day；
  updateEarningsDate(currentDate: Date, dateDifference: number) {
    this.earningsDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + dateDifference
    );
    this.populateEarnings(this.earningsDate);
  }
}
