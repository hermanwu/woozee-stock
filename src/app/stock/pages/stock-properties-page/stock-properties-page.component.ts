import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { ownedStockMap } from '../../mocks/stock-list.const';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  readonly displayModeEnum = DisplayMode;

  showDetails: boolean;
  expanded: boolean;
  panelOpenState = false;
  displayMode = DisplayMode.slide;
  carousalDisplayItemIndex: number;
  // Determine what state to be displayed;
  routeSub: Subscription;

  isAllCardOpen = false;
  stockTicker: string;
  stockAnalysis: StockAnalysis;
  private stockId = 'stockId';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockTicker = params[this.stockId].toLowerCase();
      this.stockAnalysis = ownedStockMap[this.stockTicker];
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
