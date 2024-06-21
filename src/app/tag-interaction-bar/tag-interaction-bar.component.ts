import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServices } from '../accounts/services/user.services';
import { VoteDialogComponent } from '../interactions/vote-dialog/vote-dialog.component';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Tag } from '../shared/data/tag.model';
import { NavigationServices } from '../shared/services/navgiation.services';
import { TagPredicationDialogComponent } from '../tag-predication-dialog/tag-predication-dialog.component';

@Component({
  selector: 'app-tag-interaction-bar',
  templateUrl: './tag-interaction-bar.component.html',
  styleUrl: './tag-interaction-bar.component.scss',
})
export class TagInteractionBarComponent {
  @Input() tag: Tag;

  emojiUnicode = EmojiUnicode;

  constructor(
    public dialog: MatDialog,
    private userServices: UserServices,
    private navigationServices: NavigationServices
  ) {}

  openVoteDialog(currentVoteCount) {
    if (!this.userServices.getUserUid()) {
      return this.navigationServices.navigateToLogin();
    }

    const dialogRef = this.dialog.open(VoteDialogComponent, {
      data: { voteCount: currentVoteCount },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === undefined || result === '') {
        return;
      }

      const updatedTag = { ...this.tag, votes: result };
      // Update the interactions object with the new vote count
      this.userServices.updateTag(updatedTag);
    });
  }

  openTagPredicationDialog() {
    const dialogRef = this.dialog.open(TagPredicationDialogComponent, {
      width: '400px', // Adjust as needed
      data: { tag: this.tag },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Dialog closed with result:', result);
        // Handle the result here (e.g., update local data, refresh view)
      }
    });
  }
}
