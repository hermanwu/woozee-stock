import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { companyRisks } from 'src/app/risks/data/risks/component-risks-defination';
import { NoteDialogComponent } from 'src/app/shared/components/note-dialog/note-dialog.component';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { ownedStockMap } from '../../mocks/stock-list.const';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  readonly displayModeEnum = DisplayMode;

  private stockId = 'stockId';
  private readonly earningsReportYear = 2021;
  private readonly earningsReportQuarter = 4;
  showDetails: boolean;
  carousalDisplayItemIndex: number;
  displayMode = DisplayMode.slide;
  earningsReport: EarningsReport;
  expanded: boolean;
  isAllCardOpen = false;
  panelOpenState = false;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockTicker: string;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockTicker = params[this.stockId].toLowerCase();
      this.stockAnalysis = ownedStockMap[this.stockTicker];
      this.earningsReport = this.stockAnalysis.earningsReports?.find(
        (report) =>
          report.year === this.earningsReportYear &&
          report.quarter === this.earningsReportQuarter
      );
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  openAll(): void {
    this.isAllCardOpen = true;
  }

  openRiskInfoDialog(): void {
    this.dialog.open<NoteDialogComponent>(NoteDialogComponent, {
      data: {
        title: 'Company Risk Definitions',
        notes: companyRisks,
        isExpanded: false,
        isActionButtonsHidden: false,
      },
      panelClass: 'medium-modal-panel',
    });
  }

  setDisplayMode(displayMode: DisplayMode) {
    this.displayMode = displayMode;
  }

  updateDisplayItem(index: number) {
    this.carousalDisplayItemIndex = index;
  }
}
