import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { UserInteractions } from 'src/app/interactions/interaction.services';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { RemoveStockDialogComponent } from 'src/app/stock/dialogs/remove-stock-dialog/remove-stock-dialog.component';
import { environment } from 'src/environments/environment';
import { UserServices } from '../../accounts/services/user.services';
import { PredicationDialogComponent } from '../../prediction/predication-dialog/predication-dialog.component';
import { EmojiUnicode } from '../../shared/data/enum/emoji.enum';
import { AddTagDialogComponent } from '../../tag/add-tag-dialog/add-tag-dialog.component';
import { VoteDialogComponent } from '../vote-dialog/vote-dialog.component';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit, OnDestroy {
  @Input() targetUuid: string;
  @Input() interactions: UserInteractions;
  @Input() displayTop3: boolean;

  private unsubscribe$ = new Subject<void>();
  tags: { name: string; type?: string; uuid: string; votes?: number }[] = [];
  displayOnly = true;
  environment = environment;
  emojiUnicode = EmojiUnicode;
  lastPrediction: {
    stockTicker: string;
    predication: string;
    timestamp: number;
    price: number;
  } | null = null;
  predictionString: string = '';

  constructor(
    public dialog: MatDialog,
    private userServices: UserServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.interactions && this.interactions.listUuids) {
      this.userServices
        .getTags()
        .pipe(
          filter((tags) => !!tags),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((tags) => {
          for (let tagUuid of this.interactions.listUuids) {
            if (tags[tagUuid]) {
              this.tags.push(tags[tagUuid]);
            }
          }
          this.tags.sort((a, b) => Math.abs(b.votes) - Math.abs(a.votes));
        });

      if (this.displayTop3 === true) {
        this.tags = this.tags.slice(0, 3);
      }
    } else {
      this.tags = [];
    }

    this.userServices
      .getPredications()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((predications) => {
        const predicationUuid =
          this.targetUuid.split(':')[0].toLowerCase() + ':stock';
        this.predictionString = predications[predicationUuid]
          ? predications[predicationUuid]
          : null;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openVoteDialog(currentVoteCount) {
    if (!this.userServices.getUsername()) {
      return this.navigationServices.navigateToLogin();
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

  openPredictionDialog() {
    if (!this.userServices.getUsername()) {
      return this.navigationServices.navigateToLogin();
    }
    const stockTicker = this.targetUuid.split(':')[0];
    const dialogRef = this.dialog.open(PredicationDialogComponent, {
      data: {
        stockTicker,
        predictionString: this.predictionString,
      },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result?.length > 0) {
        this.predictionString = result;
      }
    });
  }

  openAddTagDialog() {
    if (!this.userServices.getUsername()) {
      return this.navigationServices.navigateToLogin();
    }

    const dialogRef = this.dialog.open(AddTagDialogComponent, {
      data: {
        interactionUuid: this.targetUuid,
        tagUuids: this.interactions?.listUuids || [],
      },
      width: '800px',
    });
  }

  removeStock() {
    if (!this.userServices.getUsername()) {
      return this.navigationServices.navigateToLogin();
    }

    const dialogRef = this.dialog.open(RemoveStockDialogComponent, {
      data: {
        interactionKey: this.targetUuid,
      },
    });
  }
}
