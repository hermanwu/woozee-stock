import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UserServices } from 'src/app/accounts/services/user.services';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { PeopleServices } from 'src/app/people/services/people.services';
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

  organization: any;
  author: any;
  targetNames: string[] = [];

  constructor(
    private organizationServices: OrganizationServices,
    private stockServices: StockServices,
    private industriesServices: IndustriesService,
    private userService: UserServices,
    private peopleService: PeopleServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.opinion?.authorUuid) {
      this.author = this.peopleService.getPersonByUuid(
        this.opinion.authorUuid
      ).displayName;
    } else if (this.opinion?.creatorUuid) {
      this.author = this.userService.getUserByUuid(this.opinion.creatorUuid);
    }

    if (this.opinion.organizationUuid) {
      this.organization = this.organizationServices.getOrganizationByUuid(
        this.opinion.organizationUuid
      );
    }

    if (this.opinion.targets) {
      for (let target of this.opinion.targets) {
        const targetItem =
          this.stockServices.getStockByUuid(target) ||
          this.industriesServices.getIndustryByUuid(target);
        if (targetItem) {
          this.targetNames.push(targetItem.displayName);
        }
      }
    }
  }
}
