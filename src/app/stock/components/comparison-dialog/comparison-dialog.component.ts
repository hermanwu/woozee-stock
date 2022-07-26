import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { MarketsService } from 'src/app/markets/services/markets.service';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { foreverOwnStocks } from '../../forever-own-stocks-panel/forever-own-stocks.model';
import { stocksMap } from '../../mocks/stock-list.const';
import { Market } from '../../models/market.models';
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
  industry?: Market;
  factTypeArray = Object.values(FactType);
  allStocks = Object.values(stocksMap);
  selectedComparisonGroup: string | IndustryType = 'Favorites';

  competitorTypeArray = [];
  newTickerForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private marketService: MarketsService
  ) {
    this.newTickerForm = new FormGroup({
      ticker: new FormControl(),
    });

    this.selectedFact = dialogData.factType;
    this.stocks.push(dialogData.stock);

    this.setFavoriteStocks();

    this.competitorTypeArray.push('Favorites');

    if (dialogData.stock?.business?.markets) {
      const markets = dialogData.stock.business.markets;
      this.competitorTypeArray.push(...markets);
    }

    this.competitorTypeArray.push('Custom');
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

  /**
   * Function triggers when user selects a market.
   * @param event
   */
  selectMarket(event: Event) {
    this.selectedComparisonGroup = (event.target as HTMLSelectElement).value as
      | IndustryType
      | string;

    if (this.selectedComparisonGroup === 'Favorites') {
      this.industry = null;
      return this.setFavoriteStocks();
    }

    this.industry = this.marketService.getIndustryByType(
      this.selectedComparisonGroup as IndustryType
    );
    console.log(this.industry);
    const competitors = this.marketService.getStocksByIndustryType(
      this.selectedComparisonGroup as IndustryType
    );
    // Sort stocks by their size difference compare to the target.
    const targetMarketCap = this.dialogData.stock.marketCap;
    this.stocks = [...competitors].sort(
      (a, b) =>
        Math.abs(a.marketCap - targetMarketCap) -
        Math.abs(b.marketCap - targetMarketCap)
    );
  }

  /**
   * Populate competitors information to stocks array.
   * @param stock
   */
  setFavoriteStocks() {
    this.stocks = [this.dialogData.stock];
    this.stocks.push(
      ...this.favorites.filter(
        (stock) => this.dialogData.stock.ticker !== stock.ticker
      )
    );
  }
}
