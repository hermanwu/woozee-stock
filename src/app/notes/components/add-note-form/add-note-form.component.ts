import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  UserData,
  UserServices,
} from 'src/app/accounts/services/user.services';
import { Note, NoteType } from '../../../shared/data/note.interface';
import { OpinionEnum } from '../../../stock/models/opinion-type.model';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss'],
})
export class AddNoteFormComponent implements OnInit, OnChanges {
  noteForm: UntypedFormGroup;
  note: Note;
  noteType = NoteType;
  ratingEnum = OpinionEnum;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: UntypedFormBuilder,
    private userServices: UserServices,
    private dialogRef: MatDialogRef<AddNoteFormComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  createForm() {
    this.noteForm = this.formBuilder.group({
      for: [{ value: this.data.stock || '', disabled: true }],
      content: [''], // Set the max length to 200 characters
    });
  }

  /**
   * Submit the form
   */
  onSubmit(): void {
    const content = this.noteForm.get('content').value.trim();
    const stockValue = this.noteForm.get('for').value; // Access the value of the disabled control

    if (stockValue && content) {
      const createdTimestamp = Date.now();
      const attributeId =
        stockValue.toLowerCase() + ':' + 'stock' + ':' + createdTimestamp;

      const mergeNote: Partial<UserData> = {
        notes: {
          [attributeId]: {
            content,
          },
        },
      };

      this.userServices
        .setUserData(mergeNote)
        .then(() => {
          return this.dialogRef.close({
            attributeId,
            createdTimestamp,
            content,
          });
        })
        .catch((error) => console.error('Error saving note:', error));
    }
  }
}
