import { Component, Input, OnChanges } from '@angular/core';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { Business } from './business.model';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.scss'],
})
export class BusinessOverviewComponent implements OnChanges {
  @Input() business: Business;
  markets: IndustryType[];
  competitorMap: Map<IndustryType, StockAnalysis[]> = new Map();

  constructor(private marketsService: IndustriesService) {}

  ngOnChanges(): void {
    if (this.business) {
      this.markets = this.business.markets;

      for (let market of this.markets) {
        this.competitorMap.set(
          market,
          this.marketsService.getStocksByIndustryType(market)
        );
      }
    }
  }
}
