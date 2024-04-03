import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss'],
})
export class PriceDisplayComponent implements OnInit {
  @Input() prices: {
    closedPrice: any;
    currentPrice: any;
  };

  currentPrice;
  closedPrice;
  priceDiff;
  percentageDiff;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['prices'] && changes['prices'].currentValue) {
      this.currentPrice = changes['prices'].currentValue?.currentPrice?.c;
      this.closedPrice = changes['prices'].currentValue?.closedPrice?.c;

      if (this.currentPrice && this.closedPrice) {
        this.priceDiff = this.currentPrice - this.closedPrice;
        this.percentageDiff = this.priceDiff / this.closedPrice;
      }
    }
  }
}
