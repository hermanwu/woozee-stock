import { Component, Input, OnInit } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-earnings-report',
  templateUrl: './earnings-report.component.html',
  styleUrls: ['./earnings-report.component.scss'],
})
export class EarningsReportComponent implements OnInit {
  @Input() stock: StockAnalysis;

  readonly emojiLink = EmojiUnicode.link;

  earningReport: EarningsReport;
  annualReportLink: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.stock && this.stock.earningsReports) {
      const earningsReports = this.stock.earningsReports
        .filter((report) => !report.isForecast)
        .sort((a, b) => b.year - a.year || b.quarter - a.quarter);
      this.earningReport = earningsReports[0];
      this.annualReportLink = earningsReports.filter(
        (a) => a.isAnnual
      )[0]?.reportLink;
    }
  }
}
