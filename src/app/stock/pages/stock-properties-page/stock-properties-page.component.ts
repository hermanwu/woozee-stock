import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { stockAnalysisMap } from '../../mocks/mock.data';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;

  isAllCardOpen = false;
  stockTicker: string;
  stockAnalysis: StockAnalysis;
  private stockId = 'stockId';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockTicker = params[this.stockId];
      this.stockAnalysis = stockAnalysisMap[this.stockTicker.toLowerCase()];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  openAll(): void {
    this.isAllCardOpen = true;
  }
}
