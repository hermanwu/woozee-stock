import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { updateUuidToTags } from '../accounts/services/update-uuid-to-tags.function';
import { UserServices } from '../accounts/services/user.services';

@Component({
  selector: 'app-add-to-tag-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './add-to-tag-dialog.component.html',
  styleUrl: './add-to-tag-dialog.component.scss',
})
export class AddToTagDialogComponent implements OnInit {
  stockForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddToTagDialogComponent>,
    private userServices: UserServices,
    private snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      tagUuid: string;
    }
  ) {}

  ngOnInit() {
    this.stockForm = this.fb.group({
      ticker: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
    });

    this.stockForm.get('ticker')?.valueChanges.subscribe((value) => {
      if (value) {
        this.stockForm
          .get('ticker')
          ?.setValue(value.toUpperCase(), { emitEvent: false });
      }
    });
  }

  onConfirm() {
    if (this.stockForm.valid) {
      // If the tagUuid is not empty, then we are adding a stock to a tag
      if (!(this.data?.tagUuid?.length > 0)) {
        return;
      }

      let toMerge = updateUuidToTags(
        [],
        [this.data.tagUuid],
        this.stockForm.get('ticker')?.value?.toLowerCase(),
        'stock'
      );

      // If there are no changes to the tags, close the dialog.
      // Make sure nested objects are not empty.
      if (!toMerge || !Object.keys(toMerge).length) {
        this.dialogRef.close();
        return;
      }

      this.userServices
        .setUserData({ tags: toMerge } as any)
        .then(() => {
          this.dialogRef.close(updateUuidToTags);
          const snackBarRef = this.snackBar.open(
            'Added stock to tag',
            'Dismiss',
            {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            }
          );
        })
        .catch((error) => console.error('Error saving note:', error));
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
