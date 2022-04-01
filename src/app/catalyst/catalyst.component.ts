import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../shared/components/note-dialog/note-dialog.component';
import { Booster } from '../shared/models/booster.interface';

@Component({
  selector: 'app-catalyst',
  templateUrl: './catalyst.component.html',
  styleUrls: ['./catalyst.component.scss'],
})
export class CatalystComponent implements OnInit {
  expanded = false;
  @Input() catalyst: Booster;

  constructor(private dialogService: MatDialog) {}

  ngOnChanges() {}

  ngOnInit(): void {}

  openDialog() {
    this.dialogService.open<NoteDialogComponent>(NoteDialogComponent, {
      data: {
        title: 'Catalyst Details',
      },
      panelClass: 'medium-modal-panel',
    });
  }
}
