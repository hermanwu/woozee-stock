import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserServices } from 'src/app/accounts/services/user.services';
import { DragDropRankDialogComponent } from 'src/app/shared/components/drag-drop-rank-dialog/drag-drop-rank-dialog.component';
import { environment } from 'src/environments/environment';
import { ComparisonDialogComponent } from '../../components/comparison-dialog/comparison-dialog.component';
import { StockServices } from '../../services/objective-data.service';
import { StockData } from '../../services/stock-data.model';

export interface Equity {
  ticker: string;
  shares?: number;
  callContracts?: number;
}
@Component({
  selector: 'app-stock-list-page',
  templateUrl: './stock-list-page.component.html',
  styleUrls: ['./stock-list-page.component.scss'],
})
export class StockListPageComponent implements OnInit, OnDestroy {
  readonly environment = environment;

  allStocks: StockData[];
  stocks: StockData[] = [];

  portfolios = [];
  selectedPortfolio = null;
  globalRankingSub: Subscription;

  bearishStocks: StockData[];
  bullishStocks: StockData[];

  constructor(
    private objectiveDataService: StockServices,
    private userServices: UserServices,
    private stockServices: StockServices,
    private dialogService: MatDialog
  ) {
    this.allStocks = this.objectiveDataService
      .getAllStockData()
      .filter((item) => item?.latestReport?.date);
    this.portfolios = this.userServices.getPortfolios();

    this.globalRankingSub = this.userServices.rankings$.subscribe(
      (rankings) => {
        this.allStocks = this.userServices.updateStockRanks(
          this.allStocks,
          rankings
        );

        this.stocks = this.sortStockByRank(this.allStocks);
      }
    );
  }

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.tickers);
  }

  ngOnDestroy(): void {
    this.globalRankingSub.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  rankStocks() {
    this.dialogService.open<DragDropRankDialogComponent>(
      DragDropRankDialogComponent,
      {
        data: {
          stocks: this.stocks,
        },
        panelClass: 'medium-modal-panel',
      }
    );
  }

  updatePortfolio(portfolio: { name: string; stocks: string[] }) {
    this.selectedPortfolio = portfolio;

    if (!portfolio) {
      return (this.stocks = this.allStocks);
    }

    const stockTickers = portfolio.stocks;
    this.stocks = this.allStocks.filter(
      (stock) => stockTickers.indexOf(stock.ticker.toLowerCase()) >= 0
    );
  }

  sortStockByRank(stocks: StockData[]) {
    stocks.sort((a, b) => {
      if (a.rank === b.rank) {
        return 0;
      }

      if (a.rank === null || a.rank === undefined) {
        return 1;
      }

      if (b.rank === null || b.rank === undefined) {
        return -1;
      }

      return a.rank - b.rank;
    });

    return stocks;
  }

  stockListTableAction(tableOutput: { stock: StockData; action: string }) {
    console.log(tableOutput.stock);
    this.dialogService.open<ComparisonDialogComponent>(
      ComparisonDialogComponent,
      {
        data: {
          stock: tableOutput.stock,
        },
        panelClass: 'large-modal-panel',
        autoFocus: false,
      }
    );
  }
}
