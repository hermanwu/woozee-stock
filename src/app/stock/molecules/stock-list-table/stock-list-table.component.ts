import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stock } from '../../models/stock.model';
import { StockData } from '../../services/stock-data.model';
import { StockListTableColumn } from './stock-list-table-column.enum';

@Component({
  selector: 'app-stock-list-table',
  templateUrl: './stock-list-table.component.html',
  styleUrls: ['./stock-list-table.component.scss'],
})
export class StockListTableComponent implements OnChanges {
  readonly environment = environment;
  readonly stockListTableColumn = StockListTableColumn;
  displayColumns = [
    StockListTableColumn.index,
    StockListTableColumn.ticker,
    StockListTableColumn.displayName,
    StockListTableColumn.quarterRevenueGrowth,
    StockListTableColumn.latestEarningsDate,
    StockListTableColumn.actionsButton,
  ];
  sortOrder = {
    column: StockListTableColumn.ticker,
    ascending: true,
  };

  @Input() stocks: StockData[];
  @Output() stockListTableAction = new EventEmitter<{
    stock: Stock;
    action: string;
  }>();

  constructor() {}

  sort(column: StockListTableColumn) {
    if (column) {
      this.sortOrder.column = column;
      this.sortOrder.ascending = !this.sortOrder.ascending;
    }

    this.stocks.sort((a, b) => {
      if (!a[this.sortOrder.column] && !b[this.sortOrder.column]) {
        return 0;
      }

      if (!a[this.sortOrder.column]) {
        return 1;
      }

      if (!b[this.sortOrder.column]) {
        return -1;
      }

      if (this.sortOrder.ascending === false) {
        [a, b] = [b, a];
      }
      switch (this.sortOrder.column) {
        case StockListTableColumn.ticker:
          return a[StockListTableColumn.ticker].localeCompare(
            b[StockListTableColumn.ticker]
          );
      }

      return a[this.sortOrder.column] - b[this.sortOrder.column];
    });
  }

  ngOnChanges() {
    // this.sort(undefined);
  }

  compareStocks(stock: StockData) {
    this.stockListTableAction.emit({ stock, action: 'compare' });
  }
}
