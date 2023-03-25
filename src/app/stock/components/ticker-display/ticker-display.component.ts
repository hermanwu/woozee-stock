import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-ticker-display',
  templateUrl: './ticker-display.component.html',
  styleUrls: ['./ticker-display.component.scss'],
})
export class TickerDisplayComponent implements OnInit, OnChanges {
  @Input() stock?: StockAnalysis;
  @Input() ticker?: string;
  name: string;
  environment = environment;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.stock) {
      this.name = this.stock?.displayName || this.stock?.name;
      this.ticker = this.stock?.ticker;
    }
  }
}
