import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  operatingIncome: number;
  salesAndMarketing: number;
  operatingIncomeImprovement: number;

  earningsService: FundamentalCalculationService;

  constructor() {}

  ngOnChanges() {
    this.earningsService = new FundamentalCalculationService(this.stock);

    if (this.stock && this.stock.earningsReports) {
      const reports = this.stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);

      const currentReport = reports[0];
      const previousReport = reports[4];
      this.operatingIncome = currentReport?.operatingIncome;
      this.salesAndMarketing = currentReport?.salesAndMarketingCost;

      if (currentReport && previousReport) {
        this.operatingIncomeImprovement =
          (currentReport.operatingIncome - previousReport.operatingIncome) /
          Math.abs(previousReport.operatingIncome);
      }
    }
  }

  ngOnInit(): void {}
}
