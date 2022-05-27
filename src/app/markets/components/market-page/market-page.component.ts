import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { sortByCatalystRiskDifference } from 'src/app/shared/functions/sorting.function';
import { Market } from 'src/app/stock/models/market.models';
import { allMarkets } from '../../data/all-markets.const';
import { MarketsService } from '../../services/markets.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class MarketPageComponent implements OnInit {
  showTools = false;
  markets: Market[];
  bullishMarkets: Market[];
  bearishMarkets: Market[];

  constructor(private marketService: MarketsService) {}

  ngOnInit(): void {
    this.markets = sortByCatalystRiskDifference(cloneDeep(allMarkets));

    this.bullishMarkets = this.markets.slice(0, 3);
    this.bearishMarkets = this.markets.reverse().slice(0, 3);
  }

  sort() {}
}
