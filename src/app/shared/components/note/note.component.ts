import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from '../../data/note.interface';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnChanges {
  @Input() isRoot: boolean;
  @Input() note: Note;
  @Input() isExpanded: boolean;
  @Input() isActionButtonsHidden: boolean = false;

  expanded = false;

  constructor(private dialogService: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.isExpanded) {
      this.expanded = true;
    }
  }

  openDialog(note: Note) {
    this.dialogService.open<NoteDialogComponent>(NoteDialogComponent, {
      data: { title: note.content, notes: note.notes },
      panelClass: 'medium-modal-panel',
    });
  }
}
