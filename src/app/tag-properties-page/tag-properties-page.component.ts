import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  InteractionServices,
  UserInteractions,
} from 'src/interactions/interaction.services';
import { UserServices } from '../accounts/services/user.services';
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
  stockInteractions;

  currentUser;

  displayItems: {
    tradableItem: any;
    userInteraction: UserInteractions;
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private interactionServices: InteractionServices,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.tagUuid = params['tagUuid'].toLowerCase();
      this.tag = getTagByUuid(this.tagUuid);

      // this.notes = getNotesByTagUuid(this.tagUuid);

      const userInteractions = this.interactionServices
        .getUserInteractionsByUserId('herman.wrt@gmail.com')
        .filter((interaction) => {
          return interaction.listUuids?.includes(this.tagUuid);
        });

      this.stockInteractions = userInteractions
        .filter((interaction) => {
          return interaction.type === 'tradable';
        })
        .map((interaction) => ({
          ticker: interaction.targetUuid.split(':')[0],
          interaction: interaction,
        }))
        .sort((a, b) => {
          return (b.interaction.vote || 0) - (a.interaction.vote || 0);
        });
    });
  }
}
