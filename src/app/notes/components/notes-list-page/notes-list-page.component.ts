import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  stockUuids = new Set();
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

    this.processProductInteractions();

    const stockInteractions = this.interactions.filter(
      (item) => item.type === 'stock'
    );

    const opinionInteractions = this.interactions.filter(
      (item) => item.type === 'opinion'
    );

    const opinions = this.notesServices.getNotesByUuids(
      opinionInteractions.map((item) => item.targetUuid)
    );

    for (let opinion of opinions) {
      const stock = this.stockServices.getStockByUuid(opinion.targets[0]);
      if (stock) {
        this.stockUuidToStockMap.set(stock.uuid, stock);
        this.stockUuids.add(stock.uuid);
        if (!this.stockUuidToOpinionMap.has(stock.uuid)) {
          this.stockUuidToOpinionMap.set(stock.uuid, []);
        }
        this.stockUuidToOpinionMap.get(stock.uuid).push(opinion);
      }
    }
  }

  processProductInteractions() {
    const productInteractions = this.interactions.filter(
      (item) => item.type === 'product'
    );

    const products = getProductsByProductUuids(
      productInteractions.map((item) => item.targetUuid)
    );

    for (let product of products) {
      let companyUuid = getRootCompanyIdByProductId(product.uuid);

      if (!this.stockUuids.has(companyUuid)) {
        this.stockUuids.add(companyUuid);
        this.stockUuidToStockMap.set(
          companyUuid,
          this.stockServices.getStockByUuid(companyUuid)
        );
      }

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
}
