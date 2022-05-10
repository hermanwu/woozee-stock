import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RiskCatalystDialogComponent } from 'src/app/risk-catalyst-dialog/risk-catalyst-dialog.component';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { ComparisonDialogComponent } from 'src/app/stock/components/comparison-dialog/comparison-dialog.component';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss'],
})
export class FactComponent implements OnInit {
  @Input() factType: FactType;
  @Input() stock: StockAnalysis;

  showDetails: boolean = true;

  constructor(private dialogService: MatDialog) {}

  ngOnInit(): void {}

  onCompareClick() {
    this.dialogService.open<ComparisonDialogComponent>(
      ComparisonDialogComponent,
      {
        data: {
          factType: this.factType,
          stock: this.stock,
        },
        panelClass: 'medium-modal-panel',
        autoFocus: false,
      }
    );
  }

  onRiskCatalystClick() {
    this.dialogService.open<RiskCatalystDialogComponent>(
      RiskCatalystDialogComponent,
      {
        data: {
          factType: this.factType,
          stock: this.stock,
        },
        panelClass: 'medium-modal-panel',
        autoFocus: false,
      }
    );
  }
}
