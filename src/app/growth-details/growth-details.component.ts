import { Component, Input, OnInit } from '@angular/core';
import { StockData } from '../stock/services/stock-data.model';

@Component({
  selector: 'app-growth-details',
  templateUrl: './growth-details.component.html',
  styleUrls: ['./growth-details.component.scss'],
})
export class GrowthDetailsComponent implements OnInit {
  @Input() stock: StockData;

  constructor() {}

  ngOnInit(): void {}
}
