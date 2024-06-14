import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
export class NewsPageComponent implements OnInit, OnDestroy {
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
  tags: any[] = [];
  earnings: any[] = [];
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  dailyEvents: any[] = [];
  tickers: string[] = [];
  earningsDate = new Date();
  beforeMarketOpen: { ticker: string }[] = [];
  afterMarketClose: { ticker: string }[] = [];
  metaDataObject: { [key: string]: any };
  earningsDataLoaded = false;
  showFullBMOList = false;
  showFullAMCList = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private newsService: NotesServices,
    private stockServices: StockServices,
    private searchServices: SearchService
  ) {}

  ngOnInit(): void {
    this.populateEarnings(this.earningsDate);
    this.fetchTagsAndTickers();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchTagsAndTickers(): void {
    this.tags = this.searchServices
      .getTopTags()
      .sort((a, b) => b.votes - a.votes);

    this.tickers = this.searchServices
      .getTopStocks()
      .sort((a, b) => b.votes - a.votes)
      .map((stock) => stock.ticker.toUpperCase());
  }

  populateEarnings(earningsDate: Date): void {
    const dateString = formatDateToString(earningsDate);

    this.stockServices
      .getEarningsReleaseTime(dateString)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((results: { rows: any }) => {
        const earningsEvents = results.rows;

        this.beforeMarketOpen = earningsEvents
          .filter((event) =>
            event.when?.toLowerCase().includes('before market open')
          )
          .map((event) => ({ ticker: event.act_symbol }));

        this.afterMarketClose = earningsEvents
          .filter((event) =>
            event.when?.toLowerCase().includes('after market close')
          )
          .map((event) => ({ ticker: event.act_symbol }));

        this.metaDataObject = this.searchServices.getMetaDataObject();
        this.sortEarningsEventByMarketCap();
        this.earningsDataLoaded = true;
      });
  }

  sortEarningsEventByMarketCap(): void {
    const compareByMarketCap = (a: { ticker: string }, b: { ticker: string }) =>
      (this.metaDataObject[b.ticker]?.market_cap || 0) -
      (this.metaDataObject[a.ticker]?.market_cap || 0);

    this.beforeMarketOpen.sort(compareByMarketCap);
    this.afterMarketClose.sort(compareByMarketCap);
  }

  updateEarningsDate(currentDate: Date, dateDifference: number): void {
    this.earningsDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + dateDifference
    );
    this.populateEarnings(this.earningsDate);
  }
}
