import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { getPersonByUuid } from '../mock-data/person.mock';

@Component({
  selector: 'app-person-property-page',
  templateUrl: './person-property-page.component.html',
  styleUrls: ['./person-property-page.component.scss'],
})
export class PersonPropertyPageComponent implements OnInit {
  private personUuid = 'personUuid';
  routeSub: Subscription;
  interactions;
  person;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const personUuid = params[this.personUuid].toLowerCase();

      console.log(personUuid);
      this.person = getPersonByUuid(personUuid);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
