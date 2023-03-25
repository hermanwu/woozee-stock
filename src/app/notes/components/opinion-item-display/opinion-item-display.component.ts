import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { GroupsServices } from 'src/app/industries/services/groups.services';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { NewsService } from 'src/app/news/services/news.services';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { PeopleServices } from 'src/app/people/services/people.services';
import { Note } from 'src/app/shared/data/note.interface';
import { StockServices } from 'src/app/stock/services/objective-data.service';
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
  targetNames: string[] = [];
  parentNote: Note;

  constructor(
    private organizationServices: OrganizationServices,
    private stockServices: StockServices,
    private industriesServices: IndustriesService,
    private groupsServices: GroupsServices,
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

    if (this.opinion.targets) {
      for (let target of this.opinion.targets) {
        const targetItem =
          this.stockServices.getStockByUuid(target) ||
          this.groupsServices.getGroupByUuid(target);

        if (targetItem) {
          this.targetNames.push(targetItem.displayName);

          if (targetItem.logoUrl) {
            this.imageLinks.push({
              link: targetItem.logoUrl,
              title: targetItem.displayName,
            });
          }
        }
      }
    }
  }

  showParent() {
    this.parentExpanded = !this.parentExpanded;
    this.parentNote = this.newsServices.getNewsByUuid(this.opinion.parentUuid);
  }
}
