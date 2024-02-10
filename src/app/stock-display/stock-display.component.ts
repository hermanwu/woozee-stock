import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/data/tag.model';
import { EntityServices } from '../shared/services/entity.services';
import { NavigationServices } from '../shared/services/navgiation.services';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.scss'],
})
export class StockDisplayComponent implements OnInit {
  @Input() tagUuid: string;

  item: Tag;

  constructor(
    private entityServices: EntityServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.tagUuid) {
      this.item = this.entityServices.getEntityByUuid(this.tagUuid);
    }
  }

  navigate(tag: Tag) {
    // if (environment.production) {
    //   return;
    // }

    this.navigationServices.navigate(tag.type, tag.uuid);
  }
}
