import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OrganizationServices } from 'src/app/organizations/services/organization.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-opinion-item-display',
  templateUrl: './opinion-item-display.component.html',
  styleUrls: ['./opinion-item-display.component.scss'],
})
export class OpinionItemDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() expanded: boolean;

  authorNameImageLink: string;
  organizationImageLink: string;
  organizationName: string;
  targetNames: string[] = [];

  constructor(private organizationServices: OrganizationServices) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.opinion) {
      if (this.opinion.organizationUuid) {
        this.organizationName = this.organizationServices.getOrganizationByUuid(
          this.opinion.organizationUuid
        ).displayName;
      }

      if (this.opinion.targets) {
        for (let target of this.opinion.targets) {
          this.targetNames.push(
            this.organizationServices.getOrganizationByUuid(target).displayName
          );
        }
      }
    }
  }
}
