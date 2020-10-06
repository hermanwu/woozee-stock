import { Component, OnInit, Input } from '@angular/core';
import { StockStats } from '../../models/stock-stats.model';

@Component({
  selector: 'app-fundamental-stats-display',
  templateUrl: './fundamental-stats-display.component.html',
  styleUrls: ['./fundamental-stats-display.component.scss'],
})
export class FundamentalStatsDisplayComponent implements OnInit {
  @Input() stockStats: StockStats;

  constructor() {}

  ngOnInit(): void {}
}
