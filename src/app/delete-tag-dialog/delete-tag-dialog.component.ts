import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserServices } from '../accounts/services/user.services';
import { Tag } from '../shared/data/tag.model';

@Component({
  selector: 'app-delete-tag-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCommonModule,
    NgIf,
  ],
  templateUrl: './delete-tag-dialog.component.html',
  styleUrl: './delete-tag-dialog.component.scss',
})
export class DeleteTagDialogComponent {
  isDeleting = false;
  errorMessage: string | null = null;

  constructor(
    private userServices: UserServices,
    public dialogRef: MatDialogRef<DeleteTagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tag: Tag }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  async onDeleteTag(): Promise<void> {
    try {
      this.isDeleting = true;
      this.errorMessage = null;
      await this.userServices.deleteTag(this.data.tag);
      this.dialogRef.close({
        success: true,
        message: 'Tag deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting tag:', error);
      this.errorMessage = 'Failed to delete tag. Please try again.';
    } finally {
      this.isDeleting = false;
    }
  }
}
