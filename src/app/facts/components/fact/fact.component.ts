import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComparisonDialogComponent } from 'src/app/comparison-dialog/comparison-dialog.component';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { StockAnalysis } from 'src/app/stock/models/stock-analysis.model';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.scss'],
})
export class FactComponent implements OnInit {
  @Input() factType: FactType;
  @Input() stock: StockAnalysis;

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
      }
    );
  }
}
