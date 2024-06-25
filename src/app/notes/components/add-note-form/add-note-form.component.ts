import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import {
  UserData,
  UserServices,
} from 'src/app/accounts/services/user.services';
import { Tag } from 'src/app/shared/data/tag.model';
import { Note, NoteType } from '../../../shared/data/note.interface';
import { OpinionEnum } from '../../../stock/models/opinion-type.model';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss'],
})
export class AddNoteFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  noteForm: UntypedFormGroup;
  note: Note;
  noteType = NoteType;
  ratingEnum = OpinionEnum;
  tags: Tag[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      stockTicker?: string;
      tagUuid?: string;
    },
    private formBuilder: UntypedFormBuilder,
    private userServices: UserServices,
    private dialogRef: MatDialogRef<AddNoteFormComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userServices
      .getTags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tagMap) => {
        if (this.data.tagUuid && tagMap[this.data.tagUuid]) {
          this.tags.push(tagMap[this.data.tagUuid]);
        }
      });

    this.createForm();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openAddTagDialog() {}

  createForm() {
    this.noteForm = this.formBuilder.group({
      for: [{ value: this.data.stockTicker || '', disabled: true }],
      content: [''], // Set the max length to 200 characters
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    const content = this.noteForm.get('content').value.trim();
    const stockValue = this.noteForm.get('for').value; // Access the value of the disabled control

    const attributeId = stockValue
      ? stockValue.toLowerCase() + ':' + 'stock' + ':' + Date.now()
      : Date.now();

    if (attributeId && content) {
      const mergeNote: Partial<UserData> = {
        notes: {
          [attributeId]: {
            content,
            tagUuids: this.data.tagUuid ? [this.data.tagUuid] : [],
          },
        },
      };

      this.userServices
        .setUserData(mergeNote)
        .then(() => {
          this.dialogRef.close(mergeNote.notes[attributeId]);
        })
        .catch((error) => console.error('Error saving note:', error));
    }
  }
}
