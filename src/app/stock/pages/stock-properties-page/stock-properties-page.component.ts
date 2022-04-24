import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { companyRisks } from 'src/app/risks/data/risks/component-risks-defination';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { SubjectiveDataService } from 'src/app/risks/services/subjective-data.service';
import { NoteDialogComponent } from 'src/app/shared/components/note-dialog/note-dialog.component';
import { DisplayMode } from 'src/app/shared/data/display-mode.enum';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { ObjectiveDataService } from '../../services/objective-data.service';

@Component({
  selector: 'app-stock-properties-page',
  templateUrl: './stock-properties-page.component.html',
  styleUrls: ['./stock-properties-page.component.scss'],
})
export class StockPropertiesPageComponent implements OnInit, OnDestroy {
  readonly displayModeEnum = DisplayMode;

  private stockId = 'stockId';

  factType = FactType;
  carousalDisplayItemIndex: number;
  displayMode = DisplayMode.list;
  expanded: boolean;
  isAllCardOpen = false;
  panelOpenState = true;
  // Determine what state to be displayed;
  routeSub: Subscription;
  stockAnalysis: StockAnalysis;
  stockTicker: string;

  risks = [];
  catalysts = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private titleService: Title,
    private objectiveDataService: ObjectiveDataService,
    private subjectiveDataService: SubjectiveDataService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.stockTicker = params[this.stockId].toLowerCase();
      this.stockAnalysis = this.objectiveDataService
        .getDataMap()
        .get(this.stockTicker);

      this.risks.push(
        ...this.subjectiveDataService.getRisksByTicker(this.stockTicker)
      );

      this.risks.push(
        ...this.subjectiveDataService.getProfitabilityRisks(this.stockAnalysis)
      );

      this.stockAnalysis.risks = this.risks;

      this.catalysts.push(
        ...this.subjectiveDataService.getCatalystsByTicker(this.stockTicker)
      );

      this.stockAnalysis.catalysts = this.catalysts;

      this.titleService.setTitle(this.stockAnalysis.name);
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
