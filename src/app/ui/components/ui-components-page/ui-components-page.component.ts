import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { currentUserMock } from '../../../accounts/data/user.mock';
import { UserServices } from '../../../accounts/services/user.services';
import { Opinion } from '../../../notes/components/opinion-display/opinion.interface';
import { EmojiUnicode } from '../../../shared/data/enum/emoji.enum';
import {
  rankHigher,
  rankLower,
  sortPortoflioBasedOnRanking,
  updateGlobalRankBasedOnPortfolio,
} from '../../../shared/functions/ranking.function';
import { Rating } from '../../../stock/models/rating.model';
import { MockCompareDialogComponent } from '../mock-compare-dialog/mock-compare-dialog.component';
@Component({
  selector: 'app-ui-components-page',
  templateUrl: './ui-components-page.component.html',
  styleUrls: ['./ui-components-page.component.scss'],
})
export class UiComponentsPageComponent implements OnInit {
  readonly noteFormRoute = 'note-form';
  readonly addPersonRoute = 'add-person';
  readonly uiAtomsRoute = 'ui-atoms';
  readonly uiMoleculesRoute = 'ui-molecules';
  readonly uiOrganismsRoute = 'ui-organisms';
  readonly uiTemplatesRoute = 'ui-templates';

  activeRoute: string = this.noteFormRoute;

  newsUuid: string;

  mockRanks = ['tsla', 'aapl', 'meta', 'amzn'];
  mockItem = 'aapl';
  higherItem = 'meta';
  lowerItem = 'amzn';
  mockResult;

  mockOpinion: Opinion = {
    authorName: 'Justin Patterson',
    organizationName: 'KeyBanc',
    title: 'this is a mock title',
    rating: Rating.Bullish,
    targets: ['lyft'],
    content: 'this is a mock opinion',
  };

  tagsMock = ['tsla', 'tesla', 'elon musk'];
  selectedPortfolio;
  mockPortfolios = currentUserMock.portfolios;
  opinionMock: Opinion = {
    rating: Rating.Bearish,
    emojis: [EmojiUnicode.thumbDown],
  };
  mockPortfolio;
  rankedStocks;
  globalRanking = this.userServices.getGlobalRanking();

  mockStocks = [
    {
      name: 'Stock A',
      ticker: 'TSLA',
      revenue: 100,
      profit: 50,
    },

    {
      name: 'Stock B',
      ticker: 'AAPL',
      revenue: 50,
      profit: 25,
    },
  ];

  constructor(
    private router: Router,
    private userServices: UserServices,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.mockPortfolio = sortPortoflioBasedOnRanking(
      this.userServices.getPortfolioByName('Mock').stocks,
      this.globalRanking
    );

    setTimeout(() => {
      this.activeRoute = this.getLastSegmentOfUrl(this.router.url);
    }, 0);
  }

  changePortfolio(portfolio: string) {
    this.selectedPortfolio = portfolio;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.mockPortfolio,
      event.previousIndex,
      event.currentIndex
    );
  }

  saveRank() {
    this.globalRanking = updateGlobalRankBasedOnPortfolio(
      this.mockPortfolio,
      this.globalRanking
    );
  }

  selectPortfolio(event: Event) {
    this.selectedPortfolio = (event.target as HTMLSelectElement)
      .value as string;
  }

  compareStock(stock) {
    this.dialogService
      .open<MockCompareDialogComponent>(MockCompareDialogComponent, {
        data: {
          stock: stock,
          portfolio: this.mockPortfolio,
        },
        panelClass: 'medium-modal-panel',
      })
      .afterClosed()
      .subscribe((sorted) => {
        if (sorted?.length > 0) {
          this.mockPortfolio = sorted;
          this.globalRanking = updateGlobalRankBasedOnPortfolio(
            this.mockPortfolio,
            this.globalRanking
          );
        }
      });
  }

  mockRankHigher() {
    this.mockResult = rankHigher(
      this.higherItem,
      this.mockItem,
      this.mockRanks
    );
  }

  mockRankLower() {
    this.mockResult = rankLower(this.lowerItem, this.mockItem, this.mockRanks);
  }

  updateNewsUuid(newsUuid: string) {
    this.newsUuid = newsUuid;
  }

  /**
   * Get the target href of anchor link
   *  and set the activeRoute property accordingly.
   * @param target Anchor link's target.
   */
  onAnchorLinkClicked(target: HTMLAnchorElement): void {
    const href = target.href;

    this.activeRoute = this.getLastSegmentOfUrl(href);
  }

  /**
   * Get the url segment after last '/'.
   * @param url Url string.
   */
  private getLastSegmentOfUrl(url: string): string {
    return url.substr(url.lastIndexOf('/') + 1);
  }
}
