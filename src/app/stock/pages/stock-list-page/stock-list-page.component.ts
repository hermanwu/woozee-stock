import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BOA } from 'src/app/accounts/ mock-data/herman-boa-account';
import { citi } from 'src/app/accounts/ mock-data/herman-citi-account';
import { hermanFutu } from 'src/app/accounts/ mock-data/herman-futu';
import { hermanIbAccount } from 'src/app/accounts/ mock-data/herman-ib-account';
import { schwab } from 'src/app/accounts/ mock-data/herman-schwab-account';
import { jessicaPaypal } from 'src/app/accounts/ mock-data/jessica-paypal-account';
import { webull } from 'src/app/accounts/ mock-data/jessica-wubu-account';
import { meilongIbAccount } from 'src/app/accounts/ mock-data/meilong-ib-account';
import { industry } from 'src/app/shared/industry.enum';
import { Trend } from 'src/app/shared/trend.enum';
import { stockListColumns } from './stock-list-columns.const';
import { stockList } from './stock-list.const';

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
export class StockListPageComponent implements OnInit {
  columnsToDisplay = new FormControl(stockListColumns);
  stockListColumns: string[] = stockListColumns;
  industries = Object.values(industry);
  trends = Object.values(Trend);

  equities: Equity[] = [
    // My account
    ...citi,
    ...BOA,
    ...schwab,
    ...hermanIbAccount,
    ...hermanFutu,

    // Jessica Account.
    ...webull,
    ...jessicaPaypal,

    // Mei long Account
    ...meilongIbAccount,
  ];
  equitySummaryMap = this.generateEquitySummaryMap(this.equities);
  dataSource = new MatTableDataSource<any>();

  constructor() {}

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.equities);
    const stockMap = this.generateStockMap(stockList);
    this.dataSource.data = this.convertToTableData(stockMap);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private generateEquitySummaryMap(equities: Equity[]): any {
    const result = {};

    for (let equity of equities) {
      if (result[equity.ticker]) {
        result[equity.ticker] = result[equity.ticker] + equity.shares ?? 0;
      } else {
        result[equity.ticker] = equity.shares;
      }
    }

    return result;
  }

  private generateStockMap(stockInfo: any[]) {
    const result = {};

    for (let stock of stockInfo) {
      result[stock.ticker] = {
        ...stock,
      };
    }

    return result;
  }

  /**
   * Convert data to stock list table input.
   */
  private convertToTableData(stockMap: any): any[] {
    const result = [];
    let revenueIncreaseRanks = [];
    let currentQuarterOperatingIncomeRanks = [];
    let profitOverMarketCapRanks = [];

    for (let key of Object.keys(stockMap)) {
      const latestYear = stockMap[key]?.earnings?.latestReportQuarter?.[0];
      const latestQuarter = stockMap[key]?.earnings?.latestReportQuarter?.[1];
      const previousYear = parseInt(latestYear, 10) - 1 + '';

      const marketCap =
        stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.marketCap;

      const currentQuarterRevenue =
        stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.revenue || 0;
      const lastQuarterRevenue =
        stockMap[key]?.earnings?.[previousYear]?.[latestQuarter]?.revenue || 0;

      const revenueIncrease =
        (currentQuarterRevenue - lastQuarterRevenue) / lastQuarterRevenue;
      revenueIncreaseRanks.push(revenueIncrease);

      const salesOverMarketCap = currentQuarterRevenue / marketCap;
      const salesIncreaseOverMarketCap =
        (currentQuarterRevenue - lastQuarterRevenue) / marketCap;

      const currentQuarterOperatingIncome =
        stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]
          ?.operatingIncome || 0;
      currentQuarterOperatingIncomeRanks.push(currentQuarterOperatingIncome);

      const lastQuarterOperatingIncome =
        stockMap[key]?.earnings?.[previousYear]?.[latestQuarter]
          ?.operatingIncome || 0;

      const operatingIncomeIncrease =
        currentQuarterOperatingIncome - lastQuarterOperatingIncome;
      const profitOverMarketCap = currentQuarterOperatingIncome / marketCap;
      profitOverMarketCapRanks.push(profitOverMarketCap);
      const profileIncreaseOverMarketCap = operatingIncomeIncrease / marketCap;

      result.push({
        myRating: stockMap[key]?.myRating,
        ticker: key,
        name: stockMap[key]?.name.English,
        chineseName: stockMap[key]?.name.Chinese,
        categories: stockMap[key]?.trends,
        optionCrazy: stockMap[key]?.optionCrazy,

        currentQuarterRevenue,
        lastQuarterRevenue,
        revenueIncrease,
        salesOverMarketCap,
        salesIncreaseOverMarketCap,

        currentQuarterOperatingIncome,
        lastQuarterOperatingIncome,
        operatingIncomeIncrease,
        profitOverMarketCap,
        profileIncreaseOverMarketCap,

        investorWebsite: stockMap[key]?.earnings?.website,
        current10Q:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.['10q10k'],
        currentPressRelease:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.press,
        presentation:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.presentation,
        webcast:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.webcast,

        latestQuarterMarketCap: marketCap,

        propertiesPageEnabled: stockMap[key]?.propertiesPageEnabled,
      });
    }

    // calculate the rank of revenue increase.
    revenueIncreaseRanks.sort((a, b) => b - a);
    currentQuarterOperatingIncomeRanks.sort((a, b) => b - a);
    profitOverMarketCapRanks.sort((a, b) => b - a);

    const myScoreRanks = [];
    for (let stockData of result) {
      const revenueIncreaseRank =
        revenueIncreaseRanks.indexOf(stockData.revenueIncrease) + 1;
      stockData.revenueIncreaseRank =
        revenueIncreaseRank + '/' + revenueIncreaseRanks.length;

      const currentQuarterOperatingIncomeRank =
        currentQuarterOperatingIncomeRanks.indexOf(
          stockData.currentQuarterOperatingIncome
        ) + 1;
      stockData.currentQuarterOperatingIncomeRank =
        currentQuarterOperatingIncomeRank +
        '/' +
        currentQuarterOperatingIncomeRanks.length;

      const profitOverMarketCapRank =
        profitOverMarketCapRanks.indexOf(stockData.profitOverMarketCap) + 1;
      stockData.profitOverMarketCapRank =
        profitOverMarketCapRank + '/' + profitOverMarketCapRanks.length;

      stockData.myScore =
        currentQuarterOperatingIncomeRanks.length * 2 -
        revenueIncreaseRank -
        profitOverMarketCapRank;

      myScoreRanks.push(stockData.myScore);
    }

    myScoreRanks.sort((a, b) => b - a);

    for (let stockData of result) {
      const myScoreRank = myScoreRanks.indexOf(stockData.myScore) + 1;
      stockData.myScoreRank = myScoreRank + '/' + myScoreRanks.length;
    }

    return result;
  }
}
