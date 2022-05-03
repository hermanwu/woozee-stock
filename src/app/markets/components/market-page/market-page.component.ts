import { Component, OnInit } from '@angular/core';
import { MarketType } from 'src/app/facts/data/area.enum';
import { markets } from 'src/app/shared/data/mocks/markets/markets.const';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Market } from 'src/app/stock/models/market.models';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class MarketPageComponent implements OnInit {
  markets: Market[];

  constructor() {
    const marketMap = new Map<MarketType, Market>();

    for (let type of Object.values(MarketType)) {
      marketMap.set(type, {
        type: type,
      });
    }

    for (let market of cloneDeep(markets)) {
      marketMap.set(market.type, market);
    }

    this.markets = Array.from(marketMap.values());
  }

  ngOnInit(): void {}
}
