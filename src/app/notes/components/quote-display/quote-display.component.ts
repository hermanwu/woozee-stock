import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Note } from 'src/app/shared/data/note.interface';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss'],
})
export class QuoteDisplayComponent implements OnInit {
  @Input() quote: Note;
  lines: string[];
  imageLinks = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.quote) {
      this.lines = this.quote.content
        ?.split('\n')
        .filter((line) => line.length > 0);
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
