import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketType } from '../facts/data/area.enum';
import { FactType } from '../risks/models/fact-type.enum';
import { foreverOwnStocks } from '../stock/forever-own-stocks-panel/forever-own-stocks.model';
import { stocksMap } from '../stock/mocks/stock-list.const';
import { StockAnalysis } from '../stock/models/stock-analysis.model';
import { ComparisonDialogInput } from './comparison-dialog-input.model';

@Component({
  selector: 'app-comparison-dialog',
  templateUrl: './comparison-dialog.component.html',
  styleUrls: ['./comparison-dialog.component.scss'],
})
export class ComparisonDialogComponent implements OnInit {
  stocks: StockAnalysis[] = [];
  favorites = foreverOwnStocks;
  factType = FactType;
  selectedFact: FactType;
  selectedCompetitorType: string | MarketType = 'Default';
  factTypeArray = Object.values(FactType);

  competitorTypeArray = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private dialogReference: MatDialogRef<ComparisonDialogComponent>
  ) {
    this.selectedFact = dialogData.factType;
    this.stocks.push(dialogData.stock);
    this.setDefaultCompetitors(dialogData.stock);

    this.competitorTypeArray.push('Default');

    if (dialogData.stock?.business?.markets) {
      const markets = dialogData.stock.business.markets.map(
        (market) => market.type
      );
      this.competitorTypeArray.push(...markets);
    }
  }

  ngOnInit(): void {}

  selectFact(event: Event) {
    this.selectedFact = (event.target as HTMLSelectElement).value as FactType;
  }

  selectMarket(event: Event) {
    this.selectedCompetitorType = (event.target as HTMLSelectElement).value as
      | MarketType
      | string;

    if (this.selectedCompetitorType === 'Default') {
      return this.setDefaultCompetitors(this.dialogData.stock);
    }
  }

  setDefaultCompetitors(stock) {
    if (stock.competitors) {
      for (let ticker of stock.competitors) {
        this.stocks.push(stocksMap[ticker]);
      }
    }
  }
}
