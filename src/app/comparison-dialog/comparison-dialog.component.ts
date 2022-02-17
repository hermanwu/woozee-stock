import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FactType } from '../risks/models/fact-type.enum';
import { ownedStockMap } from '../stock/mocks/stock-list.const';
import { StockAnalysis } from '../stock/models/stock-analysis.model';
import { ComparisonDialogInput } from './comparison-dialog-input.model';

@Component({
  selector: 'app-comparison-dialog',
  templateUrl: './comparison-dialog.component.html',
  styleUrls: ['./comparison-dialog.component.scss'],
})
export class ComparisonDialogComponent implements OnInit {
  stocks: StockAnalysis[] = [];
  factType = FactType;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private dialogReference: MatDialogRef<ComparisonDialogComponent>
  ) {
    this.stocks.push(dialogData.stock);
    for (let ticker of dialogData.stock.competitors) {
      this.stocks.push(ownedStockMap[ticker]);
    }
    console.log(this.stocks);
  }

  ngOnInit(): void {}
}
