import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotesServices } from 'src/app/news/services/notes.services';
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
  notes;
  neutralNotes = [];
  bullishNotes = [];
  bearishNotes = [];

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private dialogService: MatDialog,
    private router: Router,
    private emotionServices: EmotionServices
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
  }

  addNote() {
    this.dialogService.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: {},
      panelClass: 'medium-modal-panel',
    });
  }
}
