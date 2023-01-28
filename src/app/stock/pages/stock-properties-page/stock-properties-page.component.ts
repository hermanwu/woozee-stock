import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServices } from 'src/app/accounts/services/user.services';
import { NewsService } from 'src/app/news/services/news.services';
import { Opinion } from 'src/app/opinions/components/opinion-display/opinion.interface';
import { OpinionServices } from 'src/app/opinions/services/opinion.services';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
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
  isAllCardOpen = false;
  panelOpenState = true;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockTicker: string;
  catalysts = [];
  news = [];
  rank$: Observable<number>;
  opinions: Opinion[] = [];
  shortTermScore = 0;
  longTermScore = 0;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private objectiveDataService: StockServices,
    private opinionServices: OpinionServices,
    private userServices: UserServices,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockTicker = params[this.stockId].toLowerCase();

      this.stockAnalysis = this.objectiveDataService
        .getDataMap()
        .get(this.stockTicker);

      if (this.stockAnalysis) {
        this.opinions = this.opinionServices.getOpinionsByStock(
          this.stockAnalysis
        );

        [this.shortTermScore, this.longTermScore] =
          this.opinionServices.getOpinionScore(this.opinions);

        this.titleService.setTitle(this.stockAnalysis.name);
      } else {
        this.stockAnalysis = null;
      }

      this.rank$ = this.userServices.rankings$.pipe(
        map((ranks: string[]): number => {
          return ranks.indexOf(this.stockTicker) >= 0
            ? ranks.indexOf(this.stockTicker) + 1
            : null;
        })
      );

      this.news = this.newsService.getNewsByTags([this.stockTicker]);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  openAll(): void {
    this.isAllCardOpen = true;
  }

  setDisplayMode(displayMode: DisplayMode) {
    this.displayMode = displayMode;
  }

  updateDisplayItem(index: number) {
    this.carousalDisplayItemIndex = index;
  }
}
