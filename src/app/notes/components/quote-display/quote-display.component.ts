import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { PeopleServices } from 'src/app/people/services/people.services';
import { TagServices } from 'src/app/shared/services/tag.services';
import { Quote } from '../../../mock-data/quote.model';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss'],
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote: Quote;
  lines: string[];
  imageLinks = [];

  constructor(
    private peopleServices: PeopleServices,
    private organizationServices: OrganizationServices,
    private tagServices: TagServices
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quote) {
      this.lines = this.quote.content
        ?.split('\n')
        .filter((line) => line.length > 0);
    }

    if (this.quote?.tagUuids?.length) {
      for (let tagUuid of this.quote.tagUuids) {
        const tagData = this.tagServices.getTagRelatedDataByUuid(tagUuid);
        if (tagData && tagData.imageLink) {
          this.imageLinks.push(tagData);
        }
      }
    }

    // if (this.quote?.authorUuid) {
    //   const author = this.peopleServices.getPersonByUuid(this.quote.authorUuid);
    //   if (author) {
    //     this.imageLinks.push({
    //       title: author.displayName,
    //       link: author.imageLink,
    //     });
    //   }

    //   if (author?.organizationUuidTitles?.length > 0) {
    //     const [organizationId, title] = author.organizationUuidTitles[0];
    //     const organization =
    //       this.organizationServices.getOrganizationByUuid(organizationId);

    //     if (organization) {
    //       this.imageLinks.push({
    //         title: organization.displayName,
    //         link: organization.logoLink,
    //       });
    //     }
    //   }
    // }
  }

  ngOnInit(): void {}
}
