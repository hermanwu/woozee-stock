import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarketType } from 'src/app/facts/data/area.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { foreverOwnStocks } from '../../forever-own-stocks-panel/forever-own-stocks.model';
import { stocksMap } from '../../mocks/stock-list.const';
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
  selectedMarketType: string | MarketType = 'Favorites';
  factTypeArray = Object.values(FactType);
  allStocks = Object.values(stocksMap);

  competitorTypeArray = [];
  newTickerForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private dialogReference: MatDialogRef<ComparisonDialogComponent>
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
    this.selectedMarketType = (event.target as HTMLSelectElement).value as
      | MarketType
      | string;

    if (this.selectedMarketType === 'Favorites') {
      return this.setFavoriteStocks();
    }

    this.selectedMarketType = (event.target as HTMLSelectElement)
      .value as MarketType;

    const competitors = this.allStocks
      // filter out the stock that is in this market.
      .filter((stock) => {
        if (stock?.business?.markets) {
          const markets = stock.business.markets;

          if (
            stock.ticker !== this.dialogData.stock.ticker &&
            markets.filter((market) => market === this.selectedMarketType)
              .length > 0
          ) {
            return true;
          }
        }
        return false;
      });

    // Sort stocks by their size difference compare to the target.
    const targetMarketCap = this.dialogData.stock.marketCap;
    this.stocks = [this.dialogData.stock, ...competitors].sort(
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
