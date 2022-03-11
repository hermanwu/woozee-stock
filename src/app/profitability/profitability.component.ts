import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from '../shared/data/enum/unicode-characters.enum';
import { StockAnalysis } from '../stock/models/stock-analysis.model';
import { FundamentalCalculationService } from '../stock/services/fundemental-calculation.service';

@Component({
  selector: 'app-profitability',
  templateUrl: './profitability.component.html',
  styleUrls: ['./profitability.component.scss'],
})
export class ProfitabilityComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;
  @Input() hideLabel: boolean;

  readonly unicode = UnicodeCharacters;
  operatingIncome: number;
  salesAndMarketing: number;
  previousSalesAndMarketingPercent: number;
  previousOperatingMarginPercent: number;

  sellingGa: number;
  previousSellingGaPercent: number;

  revenue: number;
  revenueRetention: number;

  earningsService: FundamentalCalculationService;

  constructor() {}

  ngOnChanges() {
    this.earningsService = new FundamentalCalculationService(this.stock);

    if (this.stock && this.stock.earningsReports) {
      const reports = this.stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);

      const currentReport = reports[0];
      const previousReport = reports.filter(
        (report) =>
          report.year === currentReport.year - 1 &&
          report.quarter === currentReport.quarter
      )[0];

      this.operatingIncome = currentReport?.operatingIncome;
      this.salesAndMarketing = currentReport?.salesAndMarketingCost;
      this.sellingGa = currentReport?.sellingGeneraAdministrative;

      this.revenue = currentReport?.revenue;

      if (previousReport && previousReport.revenue) {
        this.previousOperatingMarginPercent =
          previousReport.operatingIncome / previousReport.revenue;
      }

      if (previousReport && previousReport.salesAndMarketingCost) {
        this.previousSalesAndMarketingPercent =
          previousReport.salesAndMarketingCost / previousReport.revenue;
      }

      if (previousReport && previousReport.sellingGeneraAdministrative) {
        this.previousSellingGaPercent =
          previousReport.sellingGeneraAdministrative / previousReport.revenue;
      }
    }
  }

  ngOnInit(): void {}
}
