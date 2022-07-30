import { Component, Input, OnChanges } from '@angular/core';
import { Composition } from '../stock/models/composition.model';
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
  statsDetails: any;
  previousStatsDetails: any;

  constructor() {}

  ngOnChanges(): void {
    if (this.stock && this.stock.latestReport) {
      this.statsDetails = this.convertStatsDetailsToObject(
        this.stock.latestReport.statsDetails
      );

      if (this.stock.previousYearReport) {
        this.previousStatsDetails = this.convertStatsDetailsToObject(
          this.stock.previousYearReport.statsDetails
        );
      }
    }
  }

  convertStatsDetailsToObject(detailsList: Composition[]) {
    if (detailsList && detailsList.length > 0) {
      const result = {};

      for (let composition of detailsList) {
        const nameConcat = composition.name.split(' ').join('');
        result[nameConcat] = {
          name: composition.name,
          value: composition.value,
          details: this.convertStatsDetailsToObject(composition.details),
        };
      }

      return result;
    }
  }
}
