import { Component, Input, OnInit } from '@angular/core';
import { Tradable } from '../mock-data/mocks/tradables.mock';
import { NavigationServices } from '../shared/services/navgiation.services';

@Component({
  selector: 'app-tradable-display',
  templateUrl: './tradable-display.component.html',
  styleUrls: ['./tradable-display.component.scss'],
})
export class TradableDisplayComponent implements OnInit {
  @Input() tradable: Tradable;
  @Input() tickerOnly: boolean;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  ngOnChanges() {}

  navigate() {
    this.navigationServices.navigate('tradable', this.tradable.uuid);
  }
}
