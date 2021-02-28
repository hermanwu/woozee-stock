import { Component, OnInit } from '@angular/core';
import { myStockList } from 'woozee-lib';

@Component({
  selector: 'app-stock-list-page',
  templateUrl: './stock-list-page.component.html',
  styleUrls: ['./stock-list-page.component.scss'],
})
export class StockListPageComponent implements OnInit {
  stocks = myStockList;

  constructor() {}

  ngOnInit(): void {}
}
