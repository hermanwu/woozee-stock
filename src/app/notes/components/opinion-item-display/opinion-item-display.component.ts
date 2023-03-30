import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { NewsService } from 'src/app/news/services/news.services';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { PeopleServices } from 'src/app/people/services/people.services';
import { Note } from 'src/app/shared/data/note.interface';
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

  author: any;
  imageLinks = [];
  organization: any;
  parentExpanded = false;
  parentNote: Note;
  targets: Tag[] = [];

  constructor(
    private organizationServices: OrganizationServices,
    private tagServices: TagServices,
    private userService: UserServices,
    private peopleService: PeopleServices,
    private newsServices: NewsService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.opinion?.authorUuid) {
      this.author = this.peopleService.getPersonByUuid(this.opinion.authorUuid);

      this.imageLinks.push({
        link: this.author.imageLink,
        title: this.author.displayName,
      });
    } else if (this.opinion?.creatorUuid) {
      this.author = this.userService.getUserByUuid(this.opinion.creatorUuid);
    }

    if (this.opinion.organizationUuid) {
      this.organization = this.organizationServices.getOrganizationByUuid(
        this.opinion.organizationUuid
      );

      this.imageLinks.push({
        link: this.organization.logoLink,
        title: this.organization.displayName,
      });
    }

    if (this.opinion.tags) {
      for (let tag of this.opinion.tags) {
        const imageInfos = this.tagServices.getTagRelatedDataByUuid(tag);
        if (imageInfos) {
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
    this.parentNote = this.newsServices.getNewsByUuid(this.opinion.parentUuid);
  }
}