import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServices } from 'src/app/accounts/services/user.services';
import { NotesServices } from 'src/app/news/services/notes.services';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { Fact } from 'src/app/risks/models/fact.model';
import { Stats } from 'src/app/shared/components/stats-display/stats-display.interface';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { NoteType } from 'src/app/shared/data/note.interface';
import { environment } from 'src/environments/environment';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/objective-data.service';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  readonly displayModeEnum = DisplayMode;
  readonly emojiUnicode = EmojiUnicode;
  readonly environment = environment;

  private stockId = 'stockId';

  factType = FactType;
  carousalDisplayItemIndex: number;
  displayMode = DisplayMode.list;
  expanded: boolean;
  panelOpenState = true;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockUuid: string;
  rank$: Observable<number>;

  opinions: Opinion[] = [];
  actions: Fact[] = [];
  numbers: Stats[] = [];
  imageLinks = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private userServices: UserServices,
    private notesServices: NotesServices,
    private stockServices: StockServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockUuid = params[this.stockId].toLowerCase();

      this.stockAnalysis = this.stockServices.getStockByUuid(this.stockUuid);
      if (this.stockAnalysis) {
        this.titleService.setTitle(this.stockAnalysis.name);
        this.imageLinks.push(this.stockAnalysis.logoLink);
      } else {
        this.stockAnalysis = null;
      }

      this.rank$ = this.userServices.rankings$.pipe(
        map((ranks: string[]): number => {
          return ranks.indexOf(this.stockUuid) >= 0
            ? ranks.indexOf(this.stockUuid) + 1
            : null;
        })
      );

      const notes = this.notesServices.getNotesByTargets([this.stockUuid]);

      this.opinions = notes.filter(
        (item) => item.noteType === NoteType.Opinion
      ) as Opinion[];
      this.numbers = notes.filter(
        (item) => item.noteType === NoteType.Stats
      ) as Stats[];
      this.actions = notes.filter(
        (item) => item.noteType === NoteType.Fact
      ) as Fact[];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  setDisplayMode(displayMode: DisplayMode) {
    this.displayMode = displayMode;
  }

  updateDisplayItem(index: number) {
    this.carousalDisplayItemIndex = index;
  }
}
