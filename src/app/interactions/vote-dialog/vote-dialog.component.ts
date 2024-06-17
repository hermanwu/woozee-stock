import { Component, Inject } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';

@Component({
  selector: 'app-vote-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './vote-dialog.component.html',
  styleUrl: './vote-dialog.component.scss',
})
export class VoteDialogComponent {
  voteForm: FormGroup;
  emojiUnicode = EmojiUnicode;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<VoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { voteCount: number }
  ) {}

  ngOnInit() {
    this.voteForm = this.formBuilder.group({
      voteCount: [
        this.data.voteCount,
        [Validators.required, Validators.pattern(/^[0-9]*$/)],
      ],
    });
  }

  onThumbUp() {
    const currentCount = this.voteForm.get('voteCount').value;
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    this.voteForm.get('voteCount').setValue(newCount);
  }

  onThumbDown() {
    const currentCount = this.voteForm.get('voteCount').value;
    const newCount = currentCount ? parseInt(currentCount) - 1 : -1;
    this.voteForm.get('voteCount').setValue(newCount);
  }

  onConfirm() {
    if (this.voteForm.valid) {
      const updatedVoteCount = this.voteForm.get('voteCount').value;
      this.dialogRef.close(updatedVoteCount);
      // Perform actions with the voteCount value
    }
  }
}
