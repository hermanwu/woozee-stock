import { Component, OnInit } from '@angular/core';
import { BOA } from 'src/app/accounts/ mock-data/herman-boa-account';
import { citi } from 'src/app/accounts/ mock-data/herman-citi-account';
import { hermanFutu } from 'src/app/accounts/ mock-data/herman-futu';
import { hermanIbAccount } from 'src/app/accounts/ mock-data/herman-ib-account';
import { schwab } from 'src/app/accounts/ mock-data/herman-schwab-account';
import { jessicaPaypal } from 'src/app/accounts/ mock-data/jessica-paypal-account';
import { webull } from 'src/app/accounts/ mock-data/jessica-wubu-account';
import { meilongIbAccount } from 'src/app/accounts/ mock-data/meilong-ib-account';
import { AAPL } from '../../mocks/AAPL.mock';
import { ABNB } from '../../mocks/ABNB';
import { ADBE } from '../../mocks/ADBE';
import { AFRM } from '../../mocks/AFRM';
import { AMD } from '../../mocks/AMD';
import { AMZN } from '../../mocks/AMZN.mock';
import { BABA } from '../../mocks/BABA';
import { bili } from '../../mocks/BILI.mock';
import { CLOV } from '../../mocks/CLOV';
import { COIN } from '../../mocks/COIN';
import { CRM } from '../../mocks/CRM';
import { DDOG } from '../../mocks/DDOG';
import { DIS } from '../../mocks/DIS.mock';
import { ETSY } from '../../mocks/ETSY';
import { FB } from '../../mocks/FB';
import { GOOGL } from '../../mocks/GOOGL.mock';
import { HD } from '../../mocks/HD';
import { HOOD } from '../../mocks/HOOD';
import { INTU } from '../../mocks/INTU';
import { JD } from '../../mocks/JD';
import { NFLX } from '../../mocks/NFLX';
import { NVDA } from '../../mocks/NVDA';
import { OKTA } from '../../mocks/OKTA';
import { OPEN } from '../../mocks/OPEN';
import { PYPL } from '../../mocks/PYPL';
import { RBLX } from '../../mocks/RBLX.mock';
import { SHOP } from '../../mocks/SHOP.mock';
import { SNAP } from '../../mocks/SNAP';
import { SNOW } from '../../mocks/SNOW';
import { SOFI } from '../../mocks/SOFI';
import { SPLK } from '../../mocks/SPLK';
import { SQ } from '../../mocks/SQ.mock';
import { tsla } from '../../mocks/TSLA.mock';
import { TWLO } from '../../mocks/TWLO';
import { U } from '../../mocks/U.mock';
import { Z } from '../../mocks/Z.mock';
import { ZS } from '../../mocks/ZS';

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
  // readonly stockInfo = myStockList;

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
  stocks = [];

  constructor() {}

  ngOnInit(): void {
    // const equitySummaryMap = this.generateEquitySummaryMap(this.equities);
    const stockMap = this.generateStockMap([
      tsla,
      AAPL,
      NVDA,
      AMD,

      HD,
      AMZN,
      BABA,
      JD,
      SHOP,
      ETSY,

      GOOGL,
      ADBE,
      CRM,
      DDOG,
      TWLO,
      SNOW,
      OKTA,
      SPLK,
      ZS,

      FB,
      SNAP,
      ABNB,
      RBLX,
      U,
      Z,
      OPEN,

      INTU,
      PYPL,
      AFRM,
      COIN,
      SQ,
      HOOD,
      SOFI,

      CLOV,

      DIS,
      bili,
      NFLX,
    ]);
    this.stocks = this.convertToTableData(stockMap);
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

    for (let key of Object.keys(stockMap)) {
      const latestYear = stockMap[key]?.earnings?.latestReportQuarter?.[0];
      const latestQuarter = stockMap[key]?.earnings?.latestReportQuarter?.[1];
      const previousYear = parseInt(latestYear, 10) - 1 + '';

      result.push({
        ticker: key,
        name: stockMap[key]?.name.English,
        chineseName: stockMap[key]?.name.Chinese,
        categories: stockMap[key]?.trends,

        currentQuarterRevenue:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.revenue,
        lastQuarterRevenue:
          stockMap[key]?.earnings?.[previousYear]?.[latestQuarter]?.revenue,
        currentQuarterOperatingIncome:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]
            ?.operatingIncome,
        lastQuarterOperatingIncome:
          stockMap[key]?.earnings?.[previousYear]?.[latestQuarter]
            ?.operatingIncome,

        investorWebsite: stockMap[key]?.earnings?.website,
        current10Q:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.['10q'],
        currentPressRelease:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.press,
        presentation:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.presentation,
        webcast:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.webcast,

        latestQuarterMarketCap:
          stockMap[key]?.earnings?.[latestYear]?.[latestQuarter]?.marketCap,
      });
    }

    return result;
  }
}
