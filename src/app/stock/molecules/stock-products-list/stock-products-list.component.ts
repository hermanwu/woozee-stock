import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-products-list',
  templateUrl: './stock-products-list.component.html',
  styleUrls: ['./stock-products-list.component.scss'],
})
export class StockProductsListComponent implements OnInit {
  @Input() products;

  constructor() {}

  ngOnInit(): void {}
}
