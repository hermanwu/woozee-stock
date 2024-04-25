import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { UserInteractions } from 'src/interactions/interaction.services';
import { UserServices } from '../accounts/services/user.services';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Tag, getTagsByUuids } from '../shared/data/tag.model';
import { VoteDialogComponent } from '../vote-dialog/vote-dialog.component';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit {
  @Input() targetUuid: string;
  @Input() interactions: UserInteractions;
  @Input() displayTop3: boolean;
  @Output() interactionsUpdated = new EventEmitter<UserInteractions>();

  tags: Tag[];
  displayOnly = true;
  editing = false;
  environment = environment;
  emojiUnicode = EmojiUnicode;

  constructor(public dialog: MatDialog, private userServices: UserServices) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.interactions && this.interactions.listUuids) {
      this.tags = getTagsByUuids(this.interactions.listUuids).sort(
        (a, b) => Math.abs(b.votes) - Math.abs(a.votes)
      );

      if (this.displayTop3 === true) {
        this.tags = this.tags.slice(0, 3);
      }
    } else {
      this.tags = [];
    }
  }

  openVoteDialog(currentVoteCount) {
    if (environment.production) {
      return;
    }

    const dialogRef = this.dialog.open(VoteDialogComponent, {
      data: { voteCount: currentVoteCount },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === undefined || result === '') {
        return;
      }
      // Update the interactions object with the new vote count
      this.userServices.updateVote(this.targetUuid, result);
    });
  }
}
