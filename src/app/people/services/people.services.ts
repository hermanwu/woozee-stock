import { Injectable } from '@angular/core';
import { people } from '../../mock-data/mock-people.data';

@Injectable({
  providedIn: 'root',
})
export class PeopleServices {
  peopleMap = new Map();

  constructor() {
    for (let i = 0; i < people.length; i++) {
      this.peopleMap.set(people[i].uuid, people[i]);
    }
  }

  getPersonByUuid(uuid: string) {
    return this.peopleMap.get(uuid);
  }
}
