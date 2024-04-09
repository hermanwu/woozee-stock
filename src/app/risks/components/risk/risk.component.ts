import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { NoteDialogComponent } from 'src/app/shared/components/note-dialog/note-dialog.component';
import { Note } from 'src/app/shared/data/note.interface';
import { Risk } from '../../models/risk.model';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss'],
})
export class RiskComponent implements OnInit, OnChanges {
  // Whether to display risk's category.
  @Input() showCategory = false;
  @Input() risk: Risk;

  expanded = false;
  note: Note;

  constructor(private dialogService: MatDialog) {}

  ngOnChanges() {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogService.open<NoteDialogComponent>(NoteDialogComponent, {
      data: {
        title: 'Risk Mitigation',
        notes: this.risk.actions,
      },
      panelClass: 'medium-modal-panel',
    });
  }
}
