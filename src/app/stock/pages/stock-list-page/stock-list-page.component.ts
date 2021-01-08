import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-list-page',
  templateUrl: './stock-list-page.component.html',
  styleUrls: ['./stock-list-page.component.scss'],
})
export class StockListPageComponent implements OnInit {
  stockArray = [
    { ticker: 'BILI' },
    { ticker: 'PDD' },
    { ticker: 'SQ' },
    { ticker: 'TSLA' },
    { ticker: 'NIO' },
  ];
  columnsToDisplay = ['ticker'];
  dataSource = new MatTableDataSource<Stock>();

  constructor() {
    this.dataSource.data = this.stockArray;
  }

  ngOnInit(): void {}
}
