import { Component, Input, OnChanges } from '@angular/core';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.scss'],
})
export class BusinessOverviewComponent implements OnChanges {
  @Input() stock: StockData;
  industryTypes = [];
  competitorMap: Map<IndustryType, StockAnalysis[]> = new Map();

  constructor(private marketsService: IndustriesService) {}

  ngOnChanges(): void {
    if (!this.stock?.industries && this.stock?.business) {
      this.industryTypes = this.stock.business.markets;
    }

    if (this.stock?.industries) {
      this.industryTypes = this.stock.industries;
      for (let industry of this.stock.industries) {
        this.competitorMap.set(
          industry,
          this.marketsService
            .getStocksByIndustryType(industry)
            .filter((stock) => stock.ticker !== this.stock.ticker)
        );
      }
    }
  }
}
