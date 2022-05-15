import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Market } from 'src/app/stock/models/market.models';
import { allMarkets } from '../../data/all-markets.const';
import { MarketsService } from '../../services/markets.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class MarketPageComponent implements OnInit {
  markets: Market[] = cloneDeep(allMarkets);

  constructor(private marketService: MarketsService) {}

  ngOnInit(): void {
    this.markets = this.marketService.sortMarketsByRiskCount(this.markets);
  }

  sort() {}
}
