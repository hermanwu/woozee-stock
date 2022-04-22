import { Component, Input, OnInit } from '@angular/core';
import { Market } from 'src/app/stock/models/market.models';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
})
export class MarketListComponent implements OnInit {
  @Input() markets: Market[];

  constructor() {}

  ngOnInit(): void {}
}
