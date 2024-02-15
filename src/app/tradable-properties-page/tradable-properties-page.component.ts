import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServices } from '../accounts/services/user.services';
import { getEarningsByTargetUuid } from '../mock-data/earnings.mock';
import {
  getTradableItemsByUuids,
  Tradable,
} from '../mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from '../mock-data/organization.mock';
import { NotesServices } from '../news/services/notes.services';

@Component({
  selector: 'app-tradable-properties-page',
  templateUrl: './tradable-properties-page.component.html',
  styleUrls: ['./tradable-properties-page.component.scss'],
})
export class TradablePropertiesPageComponent implements OnInit {
  private quoteUuid = 'quoteUuid';
  tradable: Tradable;
  routeSub: Subscription;
  interactions;
  targetUuidToInteractionMap;
  earnings;
  organizations;
  notes;

  constructor(
    private route: ActivatedRoute,
    userServices: UserServices,
    private notesServices: NotesServices
  ) {
    this.targetUuidToInteractionMap = userServices.entityUuidToInteraction;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const quoteUuid = params[this.quoteUuid].toLowerCase();

      this.tradable = getTradableItemsByUuids([quoteUuid])?.[0];
      this.organizations = getOrganizationsByUuids([
        this.tradable.organizationUuid,
      ]);

      this.earnings = getEarningsByTargetUuid(quoteUuid);

      this.notes = this.notesServices
        .getNotesByTargets([quoteUuid])
        .slice(0, 5);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
