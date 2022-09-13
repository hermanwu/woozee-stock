import { Component, OnInit } from '@angular/core';
import { StatsDisplay } from '../../../shared/components/stats-display/stats-display.interface';
import { getUtcDate } from '../../../shared/functions/getUtcDate.function';

@Component({
  selector: 'app-daily-medium-report-display-dialog',
  templateUrl: './daily-medium-report-display-dialog.component.html',
  styleUrls: ['./daily-medium-report-display-dialog.component.scss'],
})
export class DailyMediumReportDisplayDialogComponent implements OnInit {
  sp500 = [
    { date: getUtcDate(2022, 9, 12), price: 4110.41 },
    { date: getUtcDate(2022, 9, 9), price: 4067.36 },
  ];
  nasdaqPrices = [
    { date: getUtcDate(2022, 9, 12), price: 12266.41 },
    { date: getUtcDate(2022, 9, 9), price: 12112.31 },
  ];

  nasdaqStats: StatsDisplay = {
    name: 'Nasdaq',
    value: this.nasdaqPrices[0].price,
    previousValue: this.nasdaqPrices[1].price,
  };
  sp500Stats: StatsDisplay = {
    name: 'S&P 500',
    value: this.sp500[0].price,
    previousValue: this.sp500[1].price,
  };

  constructor() {}

  ngOnInit(): void {}
}
