import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesServices } from 'src/app/news/services/notes.services';
import { Note } from 'src/app/shared/data/note.interface';
import { UserServices } from '../../../accounts/services/user.services';
import { Opinion } from '../opinion-display/opinion.interface';

@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss'],
})
export class NotesListPageComponent implements OnInit {
  notes: Note[];
  opinions: Opinion[];
  showAddNotesSection = false;
  myOpinions: Opinion[];

  constructor(
    private userServices: UserServices,
    private notesServices: NotesServices,
    private router: Router
  ) {
    const userUuid = userServices.currentUser.userUuid;
    // this.myOpinions = notesServices
    //   .getNotesByCreatorUuid(userUuid)
    //   .filter((item) => item.noteType === NoteType.Opinion);

    // this.opinions = this.notesServices.getNotesByUuids(
    //   this.userServices.getSavedNoteUuids()
    // );
  }

  ngOnInit(): void {}

  openAddNewsDialog() {
    this.showAddNotesSection = true;
    // this.dialogService.open<AddNoteComponent>(AddNoteComponent, {
    //   maxHeight: '90vh', //you can adjust the value as per your view
    //   data: {},
    //   panelClass: 'medium-modal-panel',
    // });
  }
}
