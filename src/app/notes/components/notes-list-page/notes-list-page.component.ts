import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotesServices } from 'src/app/news/services/notes.services';
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

  stockUuidToStockMap = new Map<string, any>();
  stockUuidToOpinionMap = new Map<string, any>();
  stockUuids = [];

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private dialogService: MatDialog,
    private router: Router,
    private emotionServices: EmotionServices,
    private stockServices: StockServices
  ) {
    const userUuid = userServices.currentUser.userUuid;
    // this.myOpinions = notesServices
    //   .getNotesByCreatorUuid(userUuid)
    //   .filter((item) => item.noteType === NoteType.Opinion);

    // this.opinions = this.notesServices.getNotesByUuids(
    //   this.userServices.getSavedNoteUuids()
    // );
  }

  ngOnInit(): void {
    const interactions = this.emotionServices.getUserInteractionsByUserId(
      this.userServices.currentUser.userUuid
    );

    const stockInteractions = interactions.filter(
      (item) => item.type === 'stock'
    );

    const opinionInteractions = interactions.filter(
      (item) => item.type === 'opinion'
    );

    const opinions = this.notesServices.getNotesByUuids(
      opinionInteractions.map((item) => item.targetUuid)
    );

    console.log(opinions);

    for (let opinion of opinions) {
      const stock = this.stockServices.getStockByUuid(opinion.targets[0]);
      if (stock) {
        this.stockUuidToStockMap.set(stock.uuid, stock);
        this.stockUuids.push(stock.uuid);
        if (!this.stockUuidToOpinionMap.has(stock.uuid)) {
          this.stockUuidToOpinionMap.set(stock.uuid, []);
        }
        this.stockUuidToOpinionMap.get(stock.uuid).push(opinion);
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
}
