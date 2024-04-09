import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { StockData } from 'src/app/stock/services/stock-data.model';
import { environment } from 'src/environments/environment';
import { UserServices } from '../../../accounts/services/user.services';
import { cloneDeep } from '../../functions/clone-deep';

@Component({
  selector: 'app-drag-drop-rank-dialog',
  templateUrl: './drag-drop-rank-dialog.component.html',
  styleUrls: ['./drag-drop-rank-dialog.component.scss'],
})
export class DragDropRankDialogComponent implements OnInit {
  readonly envirnoment = environment;
  stocks;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: { stocks: StockData[] },
    private userServices: UserServices,
    private dialogRef: MatDialogRef<DragDropRankDialogComponent>
  ) {
    this.stocks = cloneDeep(dialogData.stocks);
    // this.portfolio = sortPortoflioBasedOnRanking(
    //   cloneDeep(dialogData.stocks),
    //   this.globalRanking
    // );
  }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.stocks, event.previousIndex, event.currentIndex);
  }

  saveRank() {}
}
