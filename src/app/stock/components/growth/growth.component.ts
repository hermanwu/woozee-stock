import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss'],
})
export class GrowthComponent implements OnInit, OnChanges {
  @Input() stock: StockData;
  @Input() hideLabel: boolean;
  @Input() compareDisplay: boolean;

  unicode = UnicodeCharacters;
  quarterlyRevenue: number;
  activeUserCount: number;
  userCountGrowth: number;
  forecastRevenue: number;
  nextQuarterForecastGrowth: number;
  revenueRetention: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
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

      this.quarterlyRevenue = currentReport.totalRevenue;
      this.activeUserCount = currentReport.activeUserCount;

      if (currentReport && previousReport) {
        this.userCountGrowth =
          (currentReport.activeUserCount - previousReport.activeUserCount) /
          previousReport.activeUserCount;
      }

      const forecastReport = this.stock.earningsReports.filter(
        (report) => report.isForecast
      )[0];

      if (forecastReport) {
        this.forecastRevenue = forecastReport.totalRevenue;

        const previous = reports.filter(
          (a) =>
            a.year === forecastReport.year - 1 &&
            a.quarter === forecastReport.quarter
        )[0];

        if (previous) {
          this.nextQuarterForecastGrowth =
            (this.forecastRevenue - previous.totalRevenue) /
            previous.totalRevenue;
        }
      }
    }
  }
}
