import { Injectable } from '@angular/core';
import { groups } from 'src/app/mock-data/mock-groups.data';

@Injectable({
  providedIn: 'root',
})
export class GroupsServices {
  groupMap = new Map();

  constructor() {
    for (let i = 0; i < groups.length; i++) {
      this.groupMap.set(groups[i].uuid, groups[i]);
    }
  }

  getGroupByUuid(uuid: string) {
    return this.groupMap.get(uuid.toLowerCase());
  }
}
