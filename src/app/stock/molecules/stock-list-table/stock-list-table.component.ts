import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-list-table',
  templateUrl: './stock-list-table.component.html',
  styleUrls: ['./stock-list-table.component.scss'],
})
export class StockListTableComponent {
  @Input() stocks;

  constructor() {}
}
