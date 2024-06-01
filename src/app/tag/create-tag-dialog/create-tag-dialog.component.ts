import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject, takeUntil } from 'rxjs';
import { UserData, UserServices } from '../../accounts/services/user.services';
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

      const mergeTag: Partial<UserData> = {
        tags: {
          [uuid]: {
            uuid: uuid,
            name: tagName,
            votes: 0,
          },
        },
      };

      this.userServices
        .setUserData(mergeTag)
        .then(() => {
          console.log('Tag saved:', tagName);
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
    const uuid = lowercaseName.replace(/\s+/g, '%20');
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
}
