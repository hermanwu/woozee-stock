import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInteractions } from 'src/app/interactions/interaction.services';
import { NavigationServices } from 'src/app/shared/services/navgiation.services';
import { environment } from 'src/environments/environment';
import { UserServices } from '../../accounts/services/user.services';
import { PredicationDialogComponent } from '../../prediction/predication-dialog/predication-dialog.component';
import { EmojiUnicode } from '../../shared/data/enum/emoji.enum';
import { VoteDialogComponent } from '../vote-dialog/vote-dialog.component';

@Component({
  selector: 'app-interaction-bar',
  templateUrl: './interaction-bar.component.html',
  styleUrls: ['./interaction-bar.component.scss'],
})
export class InteractionBarComponent implements OnInit, OnDestroy {
  @Input() interactionKey: string;
  @Input() interactions: UserInteractions;

  private unsubscribe$ = new Subject<void>();
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
    this.userServices
      .getPredications()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((predications) => {
        const predicationUuid =
          this.interactionKey.split(':')[0].toLowerCase() + ':stock';
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
    if (!this.userServices.checkUserLoggedIn()) {
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
      this.userServices.updateVote(this.interactionKey, result);
    });
  }

  openPredictionDialog() {
    if (!this.userServices.checkUserLoggedIn()) {
      return;
    }

    const stockTicker = this.interactionKey.split(':')[0];
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
}
