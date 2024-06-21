import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { UserServices } from '../accounts/services/user.services';
import { PredictionType } from '../prediction/predication-dialog/predication-dialog.component';
import { Tag } from '../shared/data/tag.model';
import { UndefinedPipeModule } from '../shared/pipes/undefined-pipe/undefined-pipe.module';

@Component({
  selector: 'app-tag-predication-dialog',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    CommonModule,
    UndefinedPipeModule,
  ],
  templateUrl: './tag-predication-dialog.component.html',
  styleUrl: './tag-predication-dialog.component.scss',
})
export class TagPredicationDialogComponent {
  PredictionType = PredictionType;
  predictionControl = new FormControl('', Validators.required);

  constructor(
    private userServices: UserServices,
    public dialogRef: MatDialogRef<TagPredicationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      tag: Tag;
    }
  ) {}

  async onConfirm() {
    const updatedTag: Tag = {
      ...this.data.tag,
      sentiment: this.predictionControl.value,
    };
    try {
      await this.userServices.updateTag(updatedTag);
      console.log('Tag updated successfully');
      this.dialogRef.close(updatedTag); // Close the dialog and optionally pass the updated tag back
    } catch (error) {
      console.error('Error updating tag:', error);
      // Handle the error (e.g., show an error message to the user)
      // You might want to keep the dialog open in case of an error
    }
  }
}
