import { Component, Input, OnChanges } from '@angular/core';
import { Industry } from '../../models/industry.model';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-growth-details',
  templateUrl: './growth-details.component.html',
  styleUrls: ['./growth-details.component.scss'],
})
export class GrowthDetailsComponent implements OnChanges {
  @Input() stock: StockData;
  @Input() market?: Industry;

  constructor() {}

  ngOnChanges(): void {}
}
