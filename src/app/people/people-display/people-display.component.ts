import { Component, Input, OnInit } from '@angular/core';
import { getPeopleByPersonUuids } from '../../mock-data/person.mock';
import { NavigationServices } from '../../shared/services/navgiation.services';

@Component({
  selector: 'app-people-display',
  templateUrl: './people-display.component.html',
  styleUrls: ['./people-display.component.scss'],
})
export class PeopleDisplayComponent implements OnInit {
  @Input() peopleUuids: string[];
  people;

  constructor(private navigationServices: NavigationServices) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.people = getPeopleByPersonUuids(this.peopleUuids);
  }

  navigateToPersonPage(uuid: string) {
    this.navigationServices.navigate('person', uuid);
  }
}
