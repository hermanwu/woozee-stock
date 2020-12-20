import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.scss'],
})
export class StockDisplayComponent implements OnInit {
  @Input() stock;

  @Input() showStock: boolean;

  constructor() {}

  ngOnInit(): void {}

  onShowStock() {
    this.showStock = true;
  }
}
