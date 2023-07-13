import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotesServices } from 'src/app/news/services/notes.services';
import { Note } from 'src/app/shared/data/note.interface';
import { StockServices } from 'src/app/stock/services/objective-data.service';
import { EmotionServices, Sentiment } from 'src/emotion/emotion.services';
import { UserServices } from '../../../accounts/services/user.services';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  showAddNotesSection = false;
  notes: Note[];
  neutralNotes = [];
  bullishNotes = [];
  bearishNotes = [];

  sentiments: [string, Sentiment][] = [];
  stockUuidToNotesMap = new Map<string, Note[]>();
  stockUuidToStockMap = new Map<string, any>();

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
    const emotions = this.emotionServices.getEmotionsByUserId(
      this.userServices.currentUser.userUuid
    );

    this.notes = this.notesServices.getNotesByUuids(
      emotions.map((e) => e.noteUuid)
    );

    for (let note of this.notes) {
      if (note.targets) {
        const stockUuid = note.targets[0];
        if (!this.stockUuidToStockMap.has(stockUuid)) {
          this.stockUuidToStockMap.set(
            stockUuid,
            this.stockServices.getStockByUuid(stockUuid)
          );
          this.stockUuidToNotesMap.set(stockUuid, []);
        }

        this.stockUuidToNotesMap.get(stockUuid).push(note);
      }
    }

    for (let stockUuid of this.stockUuidToNotesMap.keys()) {
      const notes = this.stockUuidToNotesMap.get(stockUuid);
      const sentiment = this.emotionServices.getSentimentFromNotes(notes);
      this.sentiments.push([stockUuid, sentiment]);
    }

    this.sentiments.sort((a, b) => b[1].score - a[1].score);
  }

  addNote() {
    this.dialogService.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: 'medium-modal-panel',
    });
  }
}
