import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserServices } from 'src/app/accounts/services/user.services';
import { getEarningsByTargetUuid } from 'src/app/mock-data/earnings.mock';
import { getInteractionsByOrganizationUuid } from 'src/app/mock-data/interactions.mock';
import { getTradableItemByOrganizationUuid } from 'src/app/mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from 'src/app/mock-data/organization.mock';
import { getPeopleByPersonUuids } from 'src/app/mock-data/person.mock';
import {
  getAllParents,
  getProductsByProductUuids,
  getProductsByRootCompanyId,
} from 'src/app/mock-data/product.mock';
import { getRelationshipsByStartNodeUuid } from 'src/app/mock-data/relationship.mock';
import { NotesServices } from 'src/app/news/services/notes.services';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { Note } from 'src/app/shared/data/note.interface';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { environment } from 'src/environments/environment';
import { InteractionServices } from 'src/interactions/interaction.services';
import { getIndustriesByUuids } from '../../models/industry.model';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/stock.service';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  readonly displayModeEnum = DisplayMode;
  readonly emojiUnicode = EmojiUnicode;
  readonly environment = environment;

  private stockId = 'stockId';

  factType = FactType;
  expanded: boolean;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockUuid: string;
  rank$: Observable<number>;
  imageLinks = [];
  notes = [];
  myNotes: Note[] = [];
  mySentiment;
  noteUuidToEmotionMap = {};
  earnings = [];
  stockInteractions;

  tradableItem;

  brandedProducts = [];
  products = [];
  relatedProducts = [];
  people = [];
  partners = [];
  industries = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private userServices: UserServices,
    private notesServices: NotesServices,
    private stockServices: StockServices,
    private emotionServices: InteractionServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockUuid = params[this.stockId].toLowerCase();

      this.brandedProducts = getProductsByRootCompanyId(this.stockUuid);

      // Reset everything.
      this.imageLinks = [];
      this.mySentiment = null;
      this.myNotes = [];
      this.notes = [];

      this.stockAnalysis = this.stockServices.getOrganizationByUuid(
        this.stockUuid
      );
      if (this.stockAnalysis) {
        this.titleService.setTitle(this.stockAnalysis.name);
        this.imageLinks.push(
          this.stockAnalysis.largeLogoLink || this.stockAnalysis.logoLink || ''
        );
      } else {
        this.stockAnalysis = null;
      }

      this.notes = this.notesServices
        .getNotesByTargets([this.stockUuid])
        .slice(0, 5);

      const emotions = this.emotionServices.getUserInteractionsByUserId(
        this.userServices.currentUser.userUuid
      );

      this.tradableItem = getTradableItemByOrganizationUuid(this.stockUuid);

      const relationships = getRelationshipsByStartNodeUuid(this.stockUuid);
      this.stockInteractions = getInteractionsByOrganizationUuid(
        this.stockUuid
      );

      console.log(relationships);
      this.products = getProductsByProductUuids(
        relationships
          .filter((r) => r.endNodeType === 'product')
          .map((r) => r.endNodeUuid)
      );

      this.industries = getIndustriesByUuids(
        relationships
          .filter((r) => r.endNodeType === 'industry')
          .map((r) => r.endNodeUuid)
      );

      console.log(this.industries);

      this.people = getPeopleByPersonUuids(
        relationships
          .filter((r) => r.endNodeType === 'person')
          .map((r) => r.endNodeUuid)
      );

      this.partners = getOrganizationsByUuids(
        relationships
          .filter((r) => r.endNodeType === 'organization')
          .map((r) => r.endNodeUuid)
      );

      // get all parents ids from product list
      this.relatedProducts = getAllParents(this.products);
      this.earnings = getEarningsByTargetUuid(this.stockUuid);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  navigateToProductPage(uuid: string) {
    this.navigationServices.navigate('product', uuid);
  }

  navigateToPersonPage(uuid: string) {
    this.navigationServices.navigate('person', uuid);
  }
}
