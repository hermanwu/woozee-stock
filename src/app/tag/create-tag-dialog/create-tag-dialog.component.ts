import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject, takeUntil } from 'rxjs';
import { UserServices } from '../../accounts/services/user.services';
import { Tag } from '../../shared/data/tag.model';

@Component({
  selector: 'app-create-tag-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-tag-dialog.component.html',
  styleUrl: './create-tag-dialog.component.scss',
})
export class CreateTagDialogComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();

  newTagForm;
  existingTags: { [key: string]: Tag };

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserServices,
    private dialogRef: MatDialogRef<CreateTagDialogComponent>
  ) {}

  ngOnInit() {
    this.newTagForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          this.tagNameValidator.bind(this),
          this.noUnderscoreValidator,
        ],
      ],
    });

    this.userServices
      .getTags()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((tags) => {
        this.existingTags = tags;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onConfirm() {
    if (this.newTagForm.valid) {
      const tagName = this.newTagForm.get('name').value;
      const uuid = this.generateTagUuid(tagName);

      this.userServices
        .updateTag({
          uuid: uuid,
          name: tagName,
          votes: 0,
          sentiment: null,
        })
        .then(() => {
          this.dialogRef.close({
            uuid: uuid,
            name: tagName,
            votes: 0,
          });
        })
        .catch((error) => console.error('Error saving note:', error));
    }
  }

  generateTagUuid(tagName: string): string {
    const trimmedName = tagName.trim();
    const lowercaseName = trimmedName.toLowerCase();
    const alphanumericWithSpaces = lowercaseName.replace(/[^a-z0-9\s]/g, ' ');
    const singleSpaced = alphanumericWithSpaces.replace(/\s+/g, ' ');
    const uuid = singleSpaced.replace(/ /g, '_');
    return uuid;
  }

  tagNameValidator(control) {
    const tagName = control.value;
    if (
      this.existingTags &&
      Object.values(this.existingTags).some((tag) => tag.name === tagName)
    ) {
      return { duplicateName: true };
    }
    return null;
  }
  // New validator to disallow underscores
  noUnderscoreValidator(control: AbstractControl): ValidationErrors | null {
    const hasUnderscore = /[_]/.test(control.value);
    return hasUnderscore ? { underscore: true } : null;
  }
}
