import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserServices } from 'src/app/accounts/services/user.services';
import { getEarningsByTicker } from 'src/app/mock-data/earnings.mock';
import {
  getProductsByIds,
  getProductsByRootCompanyId,
} from 'src/app/mock-data/product.mock';
import { NotesServices } from 'src/app/news/services/notes.services';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { EmotionServices } from 'src/emotion/emotion.services';
import { environment } from 'src/environments/environment';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/stock.service';

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
  expanded: boolean;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockUuid: string;
  rank$: Observable<number>;
  imageLinks = [];
  notes = [];
  myNotes: Note[] = [];
  mySentiment;
  noteUuidToEmotionMap = {};
  earnings = [];

  products = [];
  relatedProducts = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private userServices: UserServices,
    private notesServices: NotesServices,
    private stockServices: StockServices,
    private emotionServices: EmotionServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockUuid = params[this.stockId].toLowerCase();

      // Reset everything.
      this.imageLinks = [];
      this.mySentiment = null;
      this.myNotes = [];
      this.notes = [];

      this.stockAnalysis = this.stockServices.getStockByUuid(this.stockUuid);
      if (this.stockAnalysis) {
        this.titleService.setTitle(this.stockAnalysis.name);
        this.imageLinks.push(this.stockAnalysis.logoLink);
      } else {
        this.stockAnalysis = null;
      }

      const allNotes = this.notesServices
        .getNotesByTargets([this.stockUuid])
        .slice(0, 5);

      const emotions = this.emotionServices.getUserInteractionsByUserId(
        this.userServices.currentUser.userUuid
      );

      for (let note of allNotes) {
        const emotion = emotions.find((e) => e.targetUuid === note.uuid);
        if (emotion) {
          this.myNotes.push(note);
        } else {
          this.notes.push(note);
        }
      }

      this.products = getProductsByRootCompanyId(this.stockUuid);

      // get all parents ids from product list
      let parentIds = this.products
        .filter((obj) => obj.parentIds !== undefined) // Filter out undefined values
        .map((obj) => obj.parentIds)
        .reduce((acc, val) => acc.concat(val), []);
      console.log(parentIds);
      this.relatedProducts = getProductsByIds(parentIds);
      this.earnings = getEarningsByTicker(this.stockUuid);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  navigateToProductPage(uuid: string) {
    this.navigationServices.navigate('product', uuid);
  }
}
