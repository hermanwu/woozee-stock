import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss'],
})
export class ValuationComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;
  earningReports: EarningsReport[];
  trailing12MonthsSales: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.stock && this.stock.earningsReports) {
      this.earningReports = this.stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);

      this.trailing12MonthsSales = this.earningReports
        .slice(0, 4)
        .reduce((previous, current) => previous + current.revenue, 0);
    }
  }
}
