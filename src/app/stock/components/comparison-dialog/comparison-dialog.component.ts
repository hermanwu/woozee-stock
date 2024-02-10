import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServices } from 'src/app/accounts/services/user.services';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { environment } from 'src/environments/environment';
import { Industry } from '../../models/industry.model';
import { StockAnalysis } from '../../models/stock-analysis.model';
import { StockServices } from '../../services/stock.service';
import { ComparisonDialogInput } from './comparison-dialog-input.model';

@Component({
  selector: 'app-comparison-dialog',
  templateUrl: './comparison-dialog.component.html',
  styleUrls: ['./comparison-dialog.component.scss'],
})
export class ComparisonDialogComponent {
  readonly environment = environment;

  factType = FactType;
  selectedFact: FactType;
  industry?: Industry;
  industryTypes: IndustryType[];
  factTypeArray = Object.values(FactType);
  selectedComparisonGroup: string | IndustryType = 'Favorites';
  competitorTypeArray = [];
  newTickerForm: FormGroup;
  stock;
  toCompareList: StockAnalysis[] = [];
  selected;
  better = [];
  worse = [];

  private toCompareSet = new Set();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: ComparisonDialogInput,
    private stockServices: StockServices,
    private userServices: UserServices
  ) {
    this.newTickerForm = new FormGroup({
      ticker: new FormControl(),
    });

    this.selectedFact = dialogData.factType || FactType.growth;
    this.stock = dialogData.stock;
    this.toCompareSet.add(this.stock.ticker.toLowerCase());
  }

  addIndustry(industry: IndustryType) {
    this.addGroup(
      this.stockServices
        .getStocksByIndustryType(industry)
        .map((stock) => stock.ticker)
    );
  }

  addGroup(tickers: string[]) {
    for (let ticker of tickers) {
      this.addTicker(ticker);
    }
  }

  addTicker(value?: string) {
    let ticker = value ? value : this.newTickerForm.value.ticker.toLowerCase();

    if (this.toCompareSet.has(ticker.toLowerCase())) {
      return;
    }

    const stockToAdd = this.stockServices.getStockByTicker(ticker);

    if (stockToAdd) {
      this.toCompareSet.add(ticker);
      this.toCompareList.push(stockToAdd);
      this.newTickerForm.reset();
    }
  }

  selectFact(event: Event) {
    this.selectedFact = (event.target as HTMLSelectElement).value as FactType;
  }

  next() {
    if (this.selected?.ticker === this.stock?.ticker) {
      this.worse.push(this.toCompareList.shift());
    } else {
      this.better.push(this.toCompareList.shift());
    }
    this.selected = null;
  }

  select(rankedStock) {
    this.selected = rankedStock[0];
  }
}
