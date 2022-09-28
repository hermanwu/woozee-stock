import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DisplayType } from 'src/app/shared/components/stats-display/stats-display.interface';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/objective-data.service';
import { StockMetric } from './stock-metric.enum';

@Component({
  selector: 'app-stock-metric-display',
  templateUrl: './stock-metric-display.component.html',
  styleUrls: ['./stock-metric-display.component.scss'],
})
export class StockMetricDisplayComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;
  @Input() displayMetrics: StockMetric[] = [];
  arrayToDisplay = [];

  constructor(private stockServices: StockServices) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.stock = this.stockServices.getStockByTicker(this.stock.ticker);

    this.arrayToDisplay = [];
    for (let metric of this.displayMetrics) {
      this.arrayToDisplay.push(this.calcualteMetric(metric));
    }
  }

  calcualteMetric(metric: StockMetric) {
    const pastTwoYearsEarningsReports = this.stock.earningsReports;
    const latestEarningsReport = pastTwoYearsEarningsReports[0];

    switch (metric) {
      case StockMetric.quarterlyRevenue:
        return {
          name: ' Quarterly Revenue',
          value: latestEarningsReport.totalRevenue,
          previousValue: pastTwoYearsEarningsReports[4]?.totalRevenue,
        };

      case StockMetric.forecastQuarterlyRevenue:
        const forecastRevenue = latestEarningsReport.forecastRevenueTop
          ? (latestEarningsReport.forecastRevenueTop +
              latestEarningsReport.forecastRevenueBottom) /
            2
          : pastTwoYearsEarningsReports[3]?.totalRevenue *
            (1 +
              (latestEarningsReport.forecastQuarterlyGrowthRateTop +
                latestEarningsReport.forecastQuarterlyGrowthRateBottom) /
                2);

        return {
          name: ' Next Quarter Revenue Forecast',
          value: forecastRevenue,
          previousValue: pastTwoYearsEarningsReports[3]?.totalRevenue,
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
            pastTwoYearsEarningsReports[4]?.grossProfit -
            pastTwoYearsEarningsReports[4]?.operatingIncome,
        };
    }
  }
}
