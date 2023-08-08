import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DisplayType } from 'src/app/shared/components/stats-display/stats-display.interface';
import { EarningsReport } from '../../models/earnings.model';
import { StockServices } from '../../services/stock.service';
import { StockMetric } from './stock-metric.enum';

@Component({
  selector: 'app-stock-metric-display',
  templateUrl: './stock-metric-display.component.html',
  styleUrls: ['./stock-metric-display.component.scss'],
})
export class StockMetricDisplayComponent implements OnInit, OnChanges {
  @Input() displayMetrics: StockMetric[] = [];
  @Input() pastTwoYearsEarningsReports: EarningsReport[];
  arrayToDisplay = [];

  constructor(private stockServices: StockServices) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.arrayToDisplay = [];
    for (let metric of this.displayMetrics) {
      this.arrayToDisplay.push(this.calcualteMetric(metric));
    }
  }

  calcualteMetric(metric: StockMetric) {
    const latestEarningsReport = this.pastTwoYearsEarningsReports[0];

    switch (metric) {
      case StockMetric.quarterlyRevenue:
        return {
          name: ' Quarterly Revenue',
          value: latestEarningsReport.totalRevenue,
          previousValue: this.pastTwoYearsEarningsReports[4]?.totalRevenue,
        };

      case StockMetric.forecastQuarterlyRevenue:
        const forecastRevenue = latestEarningsReport.forecastRevenueTop
          ? (latestEarningsReport.forecastRevenueTop +
              latestEarningsReport.forecastRevenueBottom) /
            2
          : this.pastTwoYearsEarningsReports[3]?.totalRevenue *
            (1 +
              (latestEarningsReport.forecastQuarterlyGrowthRateTop +
                latestEarningsReport.forecastQuarterlyGrowthRateBottom) /
                2);

        return {
          name: ' Next Quarter Revenue Forecast',
          value: forecastRevenue,
          previousValue: this.pastTwoYearsEarningsReports[3]?.totalRevenue,
        };

      case StockMetric.operatingMargin:
        return {
          name: ' Operating Margin',
          value:
            latestEarningsReport.operatingIncome /
            latestEarningsReport.totalRevenue,
          displayType: DisplayType.percent,
        };

      case StockMetric.operatingExpense:
        return {
          name: ' Operating Expenses',
          value:
            latestEarningsReport.grossProfit -
            latestEarningsReport.operatingIncome,
          previousValue:
            this.pastTwoYearsEarningsReports[4]?.grossProfit -
            this.pastTwoYearsEarningsReports[4]?.operatingIncome,
        };
    }
  }
}
