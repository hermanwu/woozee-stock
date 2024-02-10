import { Component, Input, OnInit } from '@angular/core';
import { EntityServices } from '../shared/services/entity.services';
import { NavigationServices } from '../shared/services/navgiation.services';

@Component({
  selector: 'app-entity-display',
  templateUrl: './entity-display.component.html',
  styleUrls: ['./entity-display.component.scss'],
})
export class EntityDisplayComponent implements OnInit {
  @Input() entityUuid: any;

  entity: any;

  constructor(
    private entityServices: EntityServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.entityUuid) {
      this.entity = this.entityServices.getEntityByUuid(this.entityUuid);
    }
  }

  navigate() {
    // if (environment.production) {
    //   return;
    // }

    this.navigationServices.navigate(this.entity.type, this.entity.uuid);
  }
}
