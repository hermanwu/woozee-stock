import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { FundamentalCalculationService } from '../../services/fundemental-calculation.service';

@Component({
  selector: 'app-stock-stats',
  templateUrl: './stock-stats.component.html',
  styleUrls: ['./stock-stats.component.scss'],
})
export class StockStatsComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;

  earningsResult: EarningsReport;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.earningsResult =
      FundamentalCalculationService.generateLatestEarningReport(this.stock);
  }
}
