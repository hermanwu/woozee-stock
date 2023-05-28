import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { InstagramNewsDisplayDialogComponent } from '../news/components/news-display-dialog/news-display-dialog.component';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Note } from '../shared/data/note.interface';
import { TwitterDisplayDialogComponent } from '../ui/components/twitter-display-dialog/twitter-display-dialog.component';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
})
export class NoteContainerComponent implements OnInit {
  @Input() note: Note;
  @Input() shortVersion: boolean;
  @Input() savedNoteUuids = new Set();

  readonly Emoji = EmojiUnicode;
  chips = new Set();
  environment = environment;
  expanded;

  constructor(private dialogService: MatDialog) {}

  ngOnInit(): void {}

  openInstagramDialog(note: Note) {
    this.dialogService.open<InstagramNewsDisplayDialogComponent>(
      InstagramNewsDisplayDialogComponent,
      {
        data: note,
        panelClass: 'medium -modal-panel',
      }
    );
  }

  openDialog() {
    this.dialogService.open<TwitterDisplayDialogComponent>(
      TwitterDisplayDialogComponent,
      {
        panelClass: 'medium-modal-panel',
      }
    );
  }

  toggleChip = (chip: any) => {
    const addChip = () => {
      this.chips.add(chip);
    };
    const removeChip = () => {
      this.chips.delete(chip);
    };

    this.chips.has(chip) ? removeChip() : addChip();
  };
}
