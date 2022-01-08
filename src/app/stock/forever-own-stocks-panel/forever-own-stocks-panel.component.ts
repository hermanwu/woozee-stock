import { Component, OnInit } from '@angular/core';
import { foreverOwnStocks } from './forever-own-stocks.content';

@Component({
  selector: 'app-forever-own-stocks-panel',
  templateUrl: './forever-own-stocks-panel.component.html',
  styleUrls: ['./forever-own-stocks-panel.component.scss'],
})
export class ForeverOwnStocksPanelComponent implements OnInit {
  stocks = foreverOwnStocks;

  constructor() {}

  ngOnInit(): void {}
}
