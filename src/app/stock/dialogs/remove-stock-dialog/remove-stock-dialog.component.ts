import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { deleteField } from 'firebase/firestore';
import { UserServices } from '../../../accounts/services/user.services';

@Component({
  selector: 'app-remove-stock-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './remove-stock-dialog.component.html',
  styleUrl: './remove-stock-dialog.component.scss',
})
export class RemoveStockDialogComponent {
  ticker;

  constructor(
    private userServices: UserServices,
    public dialogRef: MatDialogRef<RemoveStockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { interactionKey: string }
  ) {
    this.ticker = data.interactionKey.split(':')?.[0].toUpperCase();
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onRemove(): void {
    const mergeObj = {
      interactions: {
        [this.data.interactionKey]: deleteField(),
      },
    };
    this.userServices
      .setUserData(mergeObj as any)
      .then(() => {
        this.dialogRef.close();
      })
      .catch((error) => console.error('Error removing stock:', error));
  }
}
