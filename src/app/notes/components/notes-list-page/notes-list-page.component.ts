import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getOpinionsByCreatorUuid } from 'src/app/mock-data/notes-mock.const';
import { getPeopleByPersonUuids } from 'src/app/mock-data/person.mock';
import {
  getProductsByProductUuids,
  getRootCompanyIdByProductId,
  Product,
} from 'src/app/mock-data/product.mock';
import { NotesServices } from 'src/app/news/services/notes.services';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { StockServices } from 'src/app/stock/services/stock.service';
import { EmotionServices } from 'src/emotion/emotion.services';
import { UserServices } from '../../../accounts/services/user.services';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  showAddNotesSection = false;
  neutralNotes = [];
  bullishNotes = [];
  bearishNotes = [];

  interactions = [];
  stockUuidToStockMap = new Map<string, any>();
  stockUuidToProductMap = new Map<string, Product[]>();
  stockUuidToOpinionMap = new Map<string, any>();
  stockUuidToPersonMap = new Map<string, any[]>();
  uuidToInteractionMap = new Map<string, any>();
  stockUuidToCreatedOpinionMap = new Map<string, any>();

  stockUuids = [];
  products = [];
  userUuid;

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private dialogService: MatDialog,
    private router: Router,
    private emotionServices: EmotionServices,
    private stockServices: StockServices,
    private navigationServices: NavigationServices
  ) {
    this.userUuid = userServices.currentUser.userUuid;
    // this.myOpinions = notesServices
    //   .getNotesByCreatorUuid(userUuid)
    //   .filter((item) => item.noteType === NoteType.Opinion);

    // this.opinions = this.notesServices.getNotesByUuids(
    //   this.userServices.getSavedNoteUuids()
    // );
  }

  ngOnInit(): void {
    this.interactions = this.emotionServices.getUserInteractionsByUserId(
      this.userServices.currentUser.userUuid
    );

    this.processStockInteractions();

    this.processPersonInteractions();

    this.processProductInteractions();

    this.getCreatedOpinions();

    this.processOpinionInteractions();

    this.stockUuids = this.stockUuids.sort((keyA, keyB) => {
      let a = this.uuidToInteractionMap.get(keyA);
      let b = this.uuidToInteractionMap.get(keyB);
      if (a?.vote && b?.vote) {
        return b.vote - a.vote;
      }

      if (a?.vote) {
        return -a.vote;
      }

      if (b?.vote) {
        return b.vote;
      }

      return 0;
    });
  }

  processStockInteractions() {
    const stockInteractions = this.interactions.filter(
      (item) => item.type === 'stock'
    );

    for (let interactions of stockInteractions) {
      const stockUuid = interactions.targetUuid;

      this.addStock(stockUuid);

      this.uuidToInteractionMap.set(stockUuid, interactions);
    }
  }

  getCreatedOpinions() {
    const createdOpinions = getOpinionsByCreatorUuid(
      this.userServices.currentUser.userUuid
    );

    for (let opinion of createdOpinions) {
      for (let target of opinion.targets) {
        const stockUuid = target.toLowerCase();

        if (this.stockUuidToCreatedOpinionMap.has(stockUuid)) {
          continue;
        }

        this.addStock(stockUuid);

        if (!this.stockUuidToCreatedOpinionMap.has(stockUuid)) {
          this.stockUuidToCreatedOpinionMap.set(stockUuid, []);
        }
        this.stockUuidToCreatedOpinionMap.get(stockUuid).push(opinion);
      }
    }
  }

  processOpinionInteractions() {
    const opinionInteractions = this.interactions.filter(
      (item) => item.type === 'opinion'
    );

    const interactedOpinions = this.notesServices.getNotesByUuids(
      opinionInteractions.map((item) => item.targetUuid)
    );

    for (let opinion of interactedOpinions) {
      for (let target of opinion.targets) {
        const stockUuid = target.toLowerCase();

        if (this.stockUuidToCreatedOpinionMap.has(stockUuid)) {
          continue;
        }

        this.addStock(stockUuid);

        if (!this.stockUuidToCreatedOpinionMap.has(stockUuid)) {
          this.stockUuidToCreatedOpinionMap.set(stockUuid, []);
        }
        this.stockUuidToCreatedOpinionMap.get(stockUuid).push(opinion);
      }
    }
  }

  processPersonInteractions() {
    const personInteractions = this.interactions.filter(
      (item) => item.type === 'person'
    );

    for (let interaction of personInteractions) {
      this.uuidToInteractionMap.set(interaction.targetUuid, interaction);
    }

    const people = getPeopleByPersonUuids(
      personInteractions.map((item) => item.targetUuid)
    );

    for (let person of people) {
      let companyUuids = person.titles.map((item) => item.organizationUuid);

      for (let companyUuid of companyUuids) {
        this.addStock(companyUuid);

        if (!this.stockUuidToPersonMap.has(companyUuid)) {
          this.stockUuidToPersonMap.set(companyUuid, []);
        }
        this.stockUuidToPersonMap.get(companyUuid).push(person);
      }
    }
  }

  processProductInteractions() {
    const productInteractions = this.interactions.filter(
      (item) => item.type === 'product'
    );

    for (let interactions of productInteractions) {
      this.uuidToInteractionMap.set(interactions.targetUuid, interactions);
    }

    const products = getProductsByProductUuids(
      productInteractions.map((item) => item.targetUuid)
    );

    for (let product of products) {
      let companyUuid = getRootCompanyIdByProductId(product.uuid);

      this.addStock(companyUuid);

      if (!this.stockUuidToProductMap.has(companyUuid)) {
        this.stockUuidToProductMap.set(companyUuid, []);
      }
      this.stockUuidToProductMap.get(companyUuid).push(product);
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
      this.stockServices.getStockByUuid(organizationUuid)
    ) {
      this.stockUuids.push(organizationUuid);
      this.stockUuidToStockMap.set(
        organizationUuid,
        this.stockServices.getStockByUuid(organizationUuid)
      );
    }
  }
}
