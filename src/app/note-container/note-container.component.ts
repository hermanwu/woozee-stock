import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { UserServices } from '../accounts/services/user.services';
import { InstagramNewsDisplayDialogComponent } from '../news/components/news-display-dialog/news-display-dialog.component';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Note } from '../shared/data/note.interface';
import { TwitterDisplayDialogComponent } from '../ui/components/twitter-display-dialog/twitter-display-dialog.component';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.scss'],
})
export class NoteContainerComponent implements OnInit, OnChanges {
  @Input() note: Note;
  @Input() shortVersion: boolean;

  readonly Emoji = EmojiUnicode;
  chips = new Set();
  environment = environment;
  expanded;
  vote = Math.floor(Math.random() * 100);
  authors;

  constructor(
    private dialogService: MatDialog,
    private userServices: UserServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

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
        panelClass: '600px',
      }
    );
  }

  onSaveClick() {}
}
