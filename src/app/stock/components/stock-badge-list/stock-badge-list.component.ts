import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-badge-list',
  templateUrl: './stock-badge-list.component.html',
  styleUrls: ['./stock-badge-list.component.scss'],
})
export class StockBadgeListComponent implements OnInit {
  @Input() isLink: boolean;
  @Input() stocks: Stock[];

  constructor() {}

  ngOnInit(): void {}
}
