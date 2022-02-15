import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { FundamentalCalculationService } from '../../services/fundemental-calculation.service';

@Component({
  selector: 'app-stock-stats',
  templateUrl: './stock-stats.component.html',
  styleUrls: ['./stock-stats.component.scss'],
})
export class StockStatsComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;

  earningsService;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.earningsService = new FundamentalCalculationService(this.stock);
  }
}
