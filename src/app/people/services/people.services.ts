import { Injectable } from '@angular/core';
import { people } from '../../mock-data/person.mock';
import { Person } from '../components/investor-display/investor-display.component';

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

  getPersonByUuid(uuid: string): Person {
    return this.peopleMap.get(uuid.toLowerCase());
  }
}
