import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InteractionServices } from 'src/interactions/interaction.services';
import { UserServices } from '../accounts/services/user.services';
import { getNotesByTagUuid } from '../mock-data/notes-mock.const';
import { Product } from '../mock-data/product.mock';
import {
  Organization,
  Person,
} from '../people/components/investor-display/investor-display.component';
import { Note } from '../shared/data/note.interface';
import { getTagByUuid, Tag } from '../shared/data/tag.model';

@Component({
  selector: 'app-tag-properties-page',
  templateUrl: './tag-properties-page.component.html',
  styleUrls: ['./tag-properties-page.component.scss'],
})
export class TagPropertiesPageComponent implements OnInit {
  routeSub: Subscription;
  tagUuid: string;
  tag: Tag;
  notes: Note[];
  tradableItems: any[];
  organizations: Organization[];
  products: Product[];
  people: Person[];
  uuidToInteractionMap;

  interactions: any[];

  constructor(
    private route: ActivatedRoute,
    private interactionServices: InteractionServices,
    private userServices: UserServices
  ) {
    this.uuidToInteractionMap = this.userServices.entityUuidToInteraction;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.tagUuid = params['tagUuid'].toLowerCase();
      this.tag = getTagByUuid(this.tagUuid);

      this.notes = getNotesByTagUuid(this.tagUuid);

      this.interactions = this.interactionServices
        .getUserInteractionsByUserId(this.userServices.currentUser.userUuid)
        .filter((interaction) => {
          return interaction.listUuids?.includes(this.tagUuid);
        });

      [this.tradableItems, this.organizations, this.products, this.people] =
        this.interactionServices.getInteractionTargets(this.interactions);

      this.tradableItems.sort((a, b) => {
        return (
          (this.uuidToInteractionMap.get(b.uuid)?.vote || 0) -
          (this.uuidToInteractionMap.get(a.uuid)?.vote || 0)
        );
      });
    });
  }
}
