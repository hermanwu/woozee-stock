import { Component, Input, OnChanges } from '@angular/core';
import { Market } from '../stock/models/market.models';
import { StockData } from '../stock/services/stock-data.model';

@Component({
  selector: 'app-growth-details',
  templateUrl: './growth-details.component.html',
  styleUrls: ['./growth-details.component.scss'],
})
export class GrowthDetailsComponent implements OnChanges {
  @Input() stock: StockData;
  @Input() market?: Market;

  constructor() {}

  ngOnChanges(): void {}
}
