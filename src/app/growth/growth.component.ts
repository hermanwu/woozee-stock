import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from '../shared/data/enum/unicode-characters.enum';
import { StockAnalysis } from '../stock/models/stock-analysis.model';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss'],
})
export class GrowthComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;
  @Input() hideLabel: boolean;

  unicode = UnicodeCharacters;
  quarterlyRevenue: number;
  quarterlyRevenueGrowth: number;
  userCount: number;
  userCountGrowth: number;
  forecastRevenue: number;
  nextQuarterForecastGrowth: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.stock && this.stock.earningsReports) {
      const reports = this.stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);

      const currentReport = reports[0];
      const previousReport = reports[4];

      this.quarterlyRevenue = currentReport.revenue;
      this.userCount = currentReport.userCount;

      if (currentReport && previousReport) {
        this.quarterlyRevenueGrowth =
          (currentReport.revenue - previousReport.revenue) /
          previousReport.revenue;

        this.userCountGrowth =
          (currentReport.userCount - previousReport.userCount) /
          previousReport.userCount;
      }

      const forecastReport = this.stock.earningsReports.filter(
        (report) => report.isForecast
      )[0];

      if (forecastReport) {
        this.forecastRevenue = forecastReport.revenue;

        const previous = reports.filter(
          (a) =>
            a.year === forecastReport.year - 1 &&
            a.quarter === forecastReport.quarter
        )[0];

        if (previous) {
          this.nextQuarterForecastGrowth =
            (this.forecastRevenue - previous.revenue) / previous.revenue;
        }
      }
    }
  }
}
