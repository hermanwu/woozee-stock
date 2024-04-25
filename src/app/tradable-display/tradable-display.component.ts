import { Component, Input, OnInit } from '@angular/core';
import { Tradable } from '../mock-data/mocks/tradables.mock';
import { NavigationServices } from '../shared/services/navgiation.services';
import { Price } from '../shared/services/prices.services';

@Component({
  selector: 'app-tradable-display',
  templateUrl: './tradable-display.component.html',
  styleUrls: ['./tradable-display.component.scss'],
})
export class TradableDisplayComponent implements OnInit {
  @Input() tradable: Tradable;
  @Input() ticker: string;
  @Input() prices: { closedPrice: Price; currentPrice: Price };
  @Input() showPercentage: boolean;

  dailyPercentageChange: number;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.prices && this.prices.currentPrice) {
      this.dailyPercentageChange =
        (this.prices.currentPrice.c - this.prices.closedPrice.c) /
        this.prices.closedPrice.c;
    }
  }

  navigate() {
    if (this.ticker) {
      this.navigationServices.navigate('tradable', this.ticker);
    } else {
      this.navigationServices.navigate('tradable', this.tradable.ticker);
    }
  }
}
