import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { EarningsReport } from '../../models/earnings.model';
import { StockData } from '../../services/stock-data.model';
import { StockMetric } from '../stock-metric-display/stock-metric.enum';

@Component({
  selector: 'app-earnings-report',
  templateUrl: './earnings-report.component.html',
  styleUrls: ['./earnings-report.component.scss'],
})
export class EarningsReportComponent implements OnInit, OnChanges {
  @Input() stock: StockData;
  @Input() pastTwoYearsEarningsReports: EarningsReport[];

  readonly emojiLink = EmojiUnicode.link;
  readonly displayMetrics = [
    StockMetric.quarterlyRevenue,
    StockMetric.forecastQuarterlyRevenue,
    StockMetric.operatingExpense,
    StockMetric.operatingMargin,
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
