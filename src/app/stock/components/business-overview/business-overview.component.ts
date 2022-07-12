import { Component, Input, OnChanges } from '@angular/core';
import { MarketType } from 'src/app/facts/data/area.enum';
import { Business } from './business.model';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.component.html',
  styleUrls: ['./business-overview.component.scss'],
})
export class BusinessOverviewComponent implements OnChanges {
  @Input() business: Business;
  markets: MarketType[];

  constructor() {}

  ngOnChanges(): void {
    if (this.business) {
      this.markets = this.business.markets;
    }
  }
}
