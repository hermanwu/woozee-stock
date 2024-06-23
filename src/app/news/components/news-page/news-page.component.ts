import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import {
  UserData,
  UserServices,
} from 'src/app/accounts/services/user.services';
import { UserInteractions } from 'src/app/interactions/interaction.services';
import { Tradable } from 'src/app/mock-data/mocks/tradables.mock';
import { Note, NoteType } from 'src/app/shared/data/note.interface';
import { Tag } from 'src/app/shared/data/tag.model';
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
  tags: Tag[] = [];
  earnings: any[] = [];
  selectedNoteIndex = 0;
  selectedEarningsIndex = 0;
  dailyEvents: any[] = [];
  stocks: Tradable[] = [];
  earningsDate = new Date();
  beforeMarketOpen: { ticker: string }[] = [];
  afterMarketClose: { ticker: string }[] = [];
  metaDataObject: { [key: string]: any };
  earningsDataLoaded = false;
  showFullBMOList = false;
  showFullAMCList = false;
  interactionSet = new Set();
  tagUidSet = new Set();

  private unsubscribe$ = new Subject<void>();

  constructor(
    private newsService: NotesServices,
    private stockServices: StockServices,
    private searchServices: SearchService,
    private userServices: UserServices,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.populateEarnings(this.earningsDate);
    this.fetchTagsAndTickers();

    this.userServices
      .getUserInteractions()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((interactions) => {
        for (const [key, value] of Object.entries(interactions)) {
          this.interactionSet.add(key);
        }
      });

    this.userServices
      .getTags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tags) => {
        for (const [key, value] of Object.entries(tags)) {
          this.tagUidSet.add(key);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchTagsAndTickers(): void {
    this.tags = this.searchServices
      .getTopTags()
      .sort((a, b) => b.votes - a.votes);

    this.stocks = this.searchServices
      .getTopStocks()
      .sort((a, b) => b.votes - a.votes);
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

  saveStock(ticker) {
    const mergeObj: Partial<UserData> = {
      interactions: {
        [ticker.toLowerCase() + ':tradable']: { vote: 0 } as UserInteractions,
      },
    };
    this.userServices.setUserData(mergeObj).then(() => {
      this._snackBar.open('Stock saved', 'Dismiss', { duration: 2000 });
    });
  }

  saveTag(tag: Tag) {
    this.userServices
      .updateTag({
        uuid: tag.uuid,
        name: tag.name,
        votes: 0,
        sentiment: null,
      })
      .then(() => {
        this._snackBar.open('Tag saved', 'Dismiss', { duration: 2000 });
      });
  }
}
