import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Quote } from 'src/app/mock-data/quote.model';
import { NotesServices } from 'src/app/news/services/notes.services';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import {
  Organization,
  Person,
} from 'src/app/people/components/investor-display/investor-display.component';
import { PeopleServices } from 'src/app/people/services/people.services';
import { Fact } from 'src/app/risks/models/fact.model';
import { Tag } from 'src/app/shared/data/tag.model';
import { TagServices } from 'src/app/shared/services/tag.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-item-display',
  templateUrl: './opinion-item-display.component.html',
  styleUrls: ['./opinion-item-display.component.scss'],
})
export class OpinionItemDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() expanded: boolean;

  author: Person;
  organization: Organization;
  imageLinks = [];
  parentExpanded = false;
  childrenNotes: (Quote | Fact | Opinion)[];
  targets: Tag[] = [];

  constructor(
    private organizationServices: OrganizationServices,
    private tagServices: TagServices,
    private peopleService: PeopleServices,
    private notesServices: NotesServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.opinion?.authorUuid) {
      this.author = this.peopleService.getPersonByUuid(this.opinion.authorUuid);

      this.organization = this.organizationServices.getOrganizationByUuid(
        this.opinion.authorUuid
      );
    }

    if (this.opinion.targets) {
      for (let tag of this.opinion.targets) {
        const imageInfos = this.tagServices.getTagRelatedDataByUuid(tag);
        if (imageInfos?.imageLink) {
          this.imageLinks.push(imageInfos);
        }
      }
    }

    if (this.opinion.targets) {
      for (let targetUuid of this.opinion.targets) {
        const target = this.tagServices.getTagRelatedDataByUuid(targetUuid);
        this.targets.push(target);
      }
    }
  }

  showParent() {
    this.parentExpanded = !this.parentExpanded;
    this.childrenNotes = this.notesServices.getNotesByUuids(
      this.opinion.childrenUuids
    );
  }
}
