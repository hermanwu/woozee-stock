import { Injectable } from '@angular/core';
import { organizations } from '../../mock-data/mock-organizations.data';

@Injectable({
  providedIn: 'root',
})
export class OrganizationServices {
  organizationMap = new Map();

  constructor() {
    for (let i = 0; i < organizations.length; i++) {
      this.organizationMap.set(organizations[i].uuid, organizations[i]);
    }
  }

  getOrganizationByUuid(uuid: string) {
    return this.organizationMap.get(uuid);
  }
}
