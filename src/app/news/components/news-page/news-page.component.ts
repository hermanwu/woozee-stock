import { Component, OnInit } from '@angular/core';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { formatDateToString } from 'src/app/shared/functions/date.function';
import { SearchService } from 'src/app/shared/services/search.services/search.service';
import { Industry } from 'src/app/stock/models/industry.model';
import { EventType } from 'src/app/stock/models/news.model';
import { StockServices } from 'src/app/stock/services/stock.service';
import { environment } from 'src/environments/environment';
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
  earnings = [];
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  dailyEvents = [];
  tickers = [];
  earningsDate = new Date();
  beforeMarketOpen = [];
  afterMarketClose = [];
  metaDataObject;

  constructor(
    private newsService: NotesServices,
    private stockServices: StockServices,
    private searchServices: SearchService
  ) {}

  ngOnInit(): void {
    // this.notes = this.newsService.getAllNews().slice(0, 10);
    this.tags = this.searchServices
      .getTopTags()
      .sort((a, b) => b.votes - a.votes);
    this.tickers = this.searchServices
      .getTopStocks()
      .sort((a, b) => b.votes - a.votes)
      .map((stock) => stock.ticker.toUpperCase());

    this.populateEarnings(this.earningsDate);
    this.metaDataObject = this.searchServices.getMetaDataObject();
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

        this.sortEarningsEventByMarketCap();
      });
  }

  sortEarningsEventByMarketCap() {
    this.beforeMarketOpen = this.beforeMarketOpen.sort(
      (a: { ticker: string }, b: { ticker: string }) => {
        return (
          (this.metaDataObject[b.ticker]?.market_cap || 0) -
          (this.metaDataObject[a.ticker]?.market_cap || 0)
        );
      }
    );
    this.afterMarketClose = this.afterMarketClose.sort(
      (a: { ticker: string }, b: { ticker: string }) => {
        return (
          (this.metaDataObject[b.ticker]?.market_cap || 0) -
          (this.metaDataObject[a.ticker]?.market_cap || 0)
        );
      }
    );
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
