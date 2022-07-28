import { Component, Input, OnInit } from '@angular/core';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-profitability-details',
  templateUrl: './profitability-details.component.html',
  styleUrls: ['./profitability-details.component.scss'],
})
export class ProfitabilityDetailsComponent implements OnInit {
  @Input() stock: StockData;

  constructor() {}

  ngOnInit(): void {}
}
