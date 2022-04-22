import { Component, OnInit } from '@angular/core';
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
    this.markets = cloneDeep(markets);
  }

  ngOnInit(): void {}
}
