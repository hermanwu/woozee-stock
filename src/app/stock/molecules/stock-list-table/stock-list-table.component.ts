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
    'chineseName',
    // 'shares',
    // 'categories',
    'latestQuarterMarketCap',

    'lastQuarterRevenue',
    'currentQuarterRevenue',
    'revenueIncrease',

    'salesOverMarketCap',
    'salesIncreaseOverMarketCap',

    'lastQuarterOperatingIncome',
    'currentQuarterOperatingIncome',
    'operatingIncomeIncrease',
    'profitOverMarketCap',
    'profileIncreaseOverMarketCap',

    'webcast',
    'presentation',
    'pressRelease',
    'form10Q',
    'website',
    'myRating',
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
