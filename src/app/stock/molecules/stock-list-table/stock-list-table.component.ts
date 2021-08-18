import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stock-list-table',
  templateUrl: './stock-list-table.component.html',
  styleUrls: ['./stock-list-table.component.scss'],
})
export class StockListTableComponent
  implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;

  @Input() stocks: any[];

  readonly columnsToDisplay = [
    'ticker',
    'name',
    'chinese-name',
    // 'shares',
    // 'categories',
    'lastYearQuarterRevenue',
    'currentQuarterRevenue',
    'revenue-increase',

    '2020SecondOperatingIncome',
    '2021SecondOperatingIncome',
    'operatingIncomeIncrease',

    'latestQuarterMarketCap',

    'salesPrice',
    'sales-score',
    'profit-score',

    'pressRelease',
    'form10Q',
  ];

  dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.stocks?.length > 0) {
      this.dataSource.data = this.stocks;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
