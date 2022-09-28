import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { foreverOwnStocks } from '../../forever-own-stocks-panel/forever-own-stocks.model';
import { stocksMap } from '../../mocks/stock-list.const';
import { Industry } from '../../models/market.models';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { ComparisonDialogInput } from './comparison-dialog-input.model';

@Component({
  selector: 'app-comparison-dialog',
  templateUrl: './comparison-dialog.component.html',
  styleUrls: ['./comparison-dialog.component.scss'],
})
export class ComparisonDialogComponent {
  stocks: StockAnalysis[] = [];
  favorites = foreverOwnStocks;
  factType = FactType;
  selectedFact: FactType;
  industry?: Industry;
  factTypeArray = Object.values(FactType);
  allStocks = Object.values(stocksMap);
  selectedComparisonGroup: string | IndustryType = 'Favorites';

  competitorTypeArray = [];
  newTickerForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private marketService: IndustriesService
  ) {
    this.newTickerForm = new FormGroup({
      ticker: new FormControl(),
    });

    this.selectedFact = dialogData.factType;
    this.stocks.push(...dialogData.stocks);
  }

  addTicker() {
    const ticker = this.newTickerForm.value.ticker;
    const stockToAdd = this.allStocks.filter(
      (stock) => stock.ticker === ticker
    )[0];

    if (stockToAdd) {
      this.stocks.push(stockToAdd);
      this.newTickerForm.reset();
    }
  }

  selectFact(event: Event) {
    this.selectedFact = (event.target as HTMLSelectElement).value as FactType;
  }
}
