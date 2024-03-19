import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  getTradableItemByOrganizationUuid,
  getTradableItemsByUuids,
} from 'src/app/mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from 'src/app/mock-data/organization.mock';
import { Product } from 'src/app/mock-data/product.mock';
import { NotesServices } from 'src/app/news/services/notes.services';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { getAllTags } from 'src/app/shared/data/tag.model';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { StockServices } from 'src/app/stock/services/stock.service';
import { InteractionServices } from 'src/interactions/interaction.services';
import { UserServices } from '../../../accounts/services/user.services';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  showAddNotesSection = false;

  interactions = [];
  stockUuidToStockMap = new Map<string, any>();
  stockUuidToProductMap = new Map<string, Product[]>();
  stockUuidToOpinionMap = new Map<string, any>();
  stockUuidToPersonMap = new Map<string, any[]>();
  targetUuidToInteractionMap = new Map<string, any>();
  stockUuidToCreatedOpinionMap = new Map<string, any>();

  stockUuids = [];
  userUuid;
  tags = [];

  /**
   * {
   *  tradableItem
   *  organizations
   *  people
   *  products
   * }
   */

  displayItemMap = new Map();
  displayItems = [];

  organizations = [];
  products = [];
  people = [];
  emojiUnicode = EmojiUnicode;

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private dialogService: MatDialog,
    private router: Router,
    private interactionServices: InteractionServices,
    private stockServices: StockServices,
    private navigationServices: NavigationServices
  ) {
    this.userUuid = userServices.currentUser.userUuid;
  }

  ngOnInit(): void {
    this.processAllInteractions();

    this.tags = getAllTags().sort((a, b) => {
      return (b.votes || 0) - (a.votes || 0);
    });

    this.displayItems = Array.from(this.displayItemMap.values())
      .map((item) => {
        const { tradableItem, organizations, people, products } = item;
        const tradableItemVotes =
          this.targetUuidToInteractionMap.get(tradableItem?.uuid.toLowerCase())
            ?.vote || 0;
        const organizationVotes = organizations.reduce((acc, organization) => {
          return (
            acc +
            (this.targetUuidToInteractionMap.get(organization?.uuid)?.vote || 0)
          );
        }, 0);
        const productVotes = products.reduce((acc, product) => {
          return (
            acc +
            (this.targetUuidToInteractionMap.get(product?.uuid)?.vote || 0)
          );
        }, 0);
        const personVotes = people.reduce((acc, person) => {
          return (
            acc + (this.targetUuidToInteractionMap.get(person?.uuid)?.vote || 0)
          );
        }, 0);

        return {
          tradableItem,
          organizations,
          people,
          products,
          tradableItemVotes,
          organizationVotes,
          productVotes,
          personVotes,
        };
      })
      .sort((a, b) => {
        return b?.tradableItemVotes - a?.tradableItemVotes;
      });
  }

  processAllInteractions() {
    this.targetUuidToInteractionMap = this.userServices.entityUuidToInteraction;

    for (let uuid of this.userServices.userTradableItemsSet) {
      const tradableItem = getTradableItemsByUuids([uuid])?.[0];

      if (tradableItem) {
        this.displayItemMap.set(uuid, {
          tradableItem,
          organizations: [],
          people: [],
          products: [],
          totalVotes: 0,
        });
      }
    }

    for (let uuid of this.userServices.userOrganizationSet) {
      const organization = getOrganizationsByUuids([uuid])?.[0];
      const tradableItem = getTradableItemByOrganizationUuid(
        organization?.uuid
      );

      if (tradableItem) {
        if (this.displayItemMap.has(tradableItem.uuid)) {
          this.displayItemMap
            .get(tradableItem.uuid)
            .organizations.push(organization);
        } else {
          this.displayItemMap.set(tradableItem.uuid, {
            tradableItem,
            organizations: [organization],
            people: [],
            products: [],
          });
        }
      } else if (organization.ticker) {
        this.displayItemMap.set(organization.ticker, {
          tradableItem,
          organizations: [organization],
          people: [],
          products: [],
        });
      }
    }
  }

  addNote() {
    this.dialogService.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: 'medium-modal-panel',
      disableClose: true,
    });
  }

  navigateToProductPage(uuid: string) {
    this.navigationServices.navigate('product', uuid);
  }

  navigateToPersonPage(uuid: string) {
    this.navigationServices.navigate('person', uuid);
  }

  addStock(organizationUuid) {
    if (
      !this.stockUuidToStockMap.has(organizationUuid) &&
      this.stockServices.getOrganizationByUuid(organizationUuid)
    ) {
      this.stockUuids.push(organizationUuid);
      this.stockUuidToStockMap.set(
        organizationUuid,
        this.stockServices.getOrganizationByUuid(organizationUuid)
      );
    }
  }
}
