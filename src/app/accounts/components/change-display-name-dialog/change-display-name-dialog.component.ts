import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-change-display-name-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
  ],
  templateUrl: './change-display-name-dialog.component.html',
  styleUrl: './change-display-name-dialog.component.scss',
})
export class ChangeDisplayNameDialogComponent {
  displayNameForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ChangeDisplayNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { currentDisplayName: string },
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserServices
  ) {}

  ngOnInit() {
    this.displayNameForm = this.formBuilder.group({
      displayName: [
        this.data.currentDisplayName,
        [Validators.required, this.noSpacesValidator, Validators.maxLength(50)],
      ],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.displayNameForm.valid) {
      const newDisplayName = this.displayNameForm.get('displayName').value;
      this.userService
        .updateDisplayName(newDisplayName)
        .then(() => {
          this.snackBar.open('Display name updated successfully', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
          this.dialogRef.close(newDisplayName);
        })
        .catch((error) => {
          this.snackBar.open('Error updating display name', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar'],
          });
          console.error('Error updating display name:', error);
        });
    }
  }

  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    const displayName = control.value;
    if (displayName && displayName.includes(' ')) {
      return { spaces: true };
    }
    return null;
  }
}
