import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OrganizationServices } from '../organizations/services/organization.services';
import { PeopleServices } from '../people/services/people.services';

export interface Person {
  uuid: string;
  displayName: string;
  organizationUuidTitles: [string, string][];
  imageLink: string;
}

export interface Organization {
  uuid: string;
  displayName: string;
  logoLink: string;
}

@Component({
  selector: 'app-investor-display',
  templateUrl: './investor-display.component.html',
  styleUrls: ['./investor-display.component.scss'],
})
export class InvestorDisplayComponent implements OnInit, OnChanges {
  @Input() authorUuid: string;
  author: Person;
  organization: Organization;
  title: string;

  constructor(
    private peopleServices: PeopleServices,
    private organizationServices: OrganizationServices
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.authorUuid) {
      this.author = this.peopleServices.getPersonByUuid(this.authorUuid);

      if (this.author?.organizationUuidTitles?.length > 0) {
        const [organizationId, title] = this.author.organizationUuidTitles[0];
        this.organization =
          this.organizationServices.getOrganizationByUuid(organizationId);
        this.title = title;
      }
    }
  }

  ngOnInit(): void {}
}
