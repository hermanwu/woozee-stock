import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Market } from 'src/app/stock/models/market.models';
import { allMarkets } from '../../data/all-markets.const';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss'],
})
export class MarketPageComponent implements OnInit {
  markets: Market[] = cloneDeep(allMarkets);

  constructor() {}

  ngOnInit(): void {}
}
