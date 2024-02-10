import { Component, Input, OnInit } from '@angular/core';
import { getTradableItemsByUuids } from '../mock-data/mocks/tradables.mock';
import { NavigationServices } from '../shared/services/navgiation.services';

@Component({
  selector: 'app-tradable-display',
  templateUrl: './tradable-display.component.html',
  styleUrls: ['./tradable-display.component.scss'],
})
export class TradableDisplayComponent implements OnInit {
  @Input() tradableUuid: string;
  tradable;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.tradableUuid) {
      this.tradable = getTradableItemsByUuids([this.tradableUuid])?.[0];
    }
  }

  navigate() {
    this.navigationServices.navigate('tradable', this.tradableUuid);
  }
}
