import { Component, Input, OnChanges } from '@angular/core';
import { convertStatsDetailsToObject } from '../shared/functions/covert-stats-details-to-object.function';
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
  growthDetails: any;
  previousStatsDetails: any;

  constructor() {}

  ngOnChanges(): void {
    if (this.stock && this.stock.latestReport) {
      this.growthDetails = convertStatsDetailsToObject(
        this.stock.latestReport.growthDetails
      );

      if (this.stock.previousYearReport) {
        this.previousStatsDetails = convertStatsDetailsToObject(
          this.stock.previousYearReport.growthDetails
        );
      }
    }
  }
}
