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
import { ADSK } from '../../mocks/ADSK';
import { AFRM } from '../../mocks/AFRM';
import { AMC } from '../../mocks/AMC';
import { AMD } from '../../mocks/AMD';
import { AMZN } from '../../mocks/AMZN.mock';
import { API } from '../../mocks/API';
import { asml } from '../../mocks/ASML';
import { ATVI } from '../../mocks/ATVI';
import { AVGO } from '../../mocks/AVGO';
import { AXP } from '../../mocks/AXP';
import { BABA } from '../../mocks/BABA';
import { bili } from '../../mocks/BILI.mock';
import { blde } from '../../mocks/blde';
import { BYND } from '../../mocks/BYND';
import { CHWY } from '../../mocks/CHWY';
import { CLOV } from '../../mocks/CLOV';
import { COIN } from '../../mocks/COIN';
import { CRM } from '../../mocks/CRM';
import { DASH } from '../../mocks/DASH';
import { DDOG } from '../../mocks/DDOG';
import { DIS } from '../../mocks/DIS.mock';
import { DKNG } from '../../mocks/DKNG';
import { DOCU } from '../../mocks/DOCU';
import { DUOL } from '../../mocks/DUOL';
import { EA } from '../../mocks/EA';
import { EDIT } from '../../mocks/EDIT';
import { ESTC } from '../../mocks/ESTC';
import { ETSY } from '../../mocks/ETSY';
import { FB } from '../../mocks/FB';
import { GME } from '../../mocks/GME';
import { GOOGL } from '../../mocks/GOOGL.mock';
import { GS } from '../../mocks/GS';
import { HD } from '../../mocks/HD';
import { HOOD } from '../../mocks/HOOD';
import { IAC } from '../../mocks/IAC';
import { INTU } from '../../mocks/INTU';
import { ISRG } from '../../mocks/ISRG';
import { JD } from '../../mocks/JD';
import { JMIA } from '../../mocks/JMIA';
import { JPM } from '../../mocks/JPM';
import { LZ } from '../../mocks/LZ';
import { MRNA } from '../../mocks/MRNA';
import { MSFT } from '../../mocks/MSFT';
import { NET } from '../../mocks/NET';
import { NFLX } from '../../mocks/NFLX';
import { NIO } from '../../mocks/NIO_mock';
import { NOW } from '../../mocks/NOW';
import { NVDA } from '../../mocks/NVDA';
import { OKTA } from '../../mocks/OKTA';
import { OPEN } from '../../mocks/OPEN';
import { orcl } from '../../mocks/orcl';
import { pdd } from '../../mocks/PDD.mock';
import { PENN } from '../../mocks/PENN';
import { PINS } from '../../mocks/PINs';
import { PTON } from '../../mocks/PTON';
import { PYPL } from '../../mocks/PYPL';
import { RBLX } from '../../mocks/RBLX.mock';
import { RDFN } from '../../mocks/RDFN';
import { RH } from '../../mocks/RH';
import { SE } from '../../mocks/SE';
import { SHOP } from '../../mocks/SHOP.mock';
import { SKLZ } from '../../mocks/SKLZ';
import { SNAP } from '../../mocks/SNAP';
import { SNOW } from '../../mocks/SNOW';
import { SOFI } from '../../mocks/SOFI';
import { SPLK } from '../../mocks/SPLK';
import { SPOT } from '../../mocks/SPOT';
import { SQ } from '../../mocks/SQ.mock';
import { STEM } from '../../mocks/STEM';
import { techy } from '../../mocks/TCEHY';
import { TDOC } from '../../mocks/TDOC';
import { TEAM } from '../../mocks/TEAM';
import { TRMB } from '../../mocks/TRMB';
import { tsla } from '../../mocks/TSLA.mock';
import { TSM } from '../../mocks/TSM';
import { TTD } from '../../mocks/TTD';
import { TWLO } from '../../mocks/TWLO';
import { TWTR } from '../../mocks/TWTR';
import { U } from '../../mocks/U.mock';
import { UBER } from '../../mocks/UBER';
import { ulta } from '../../mocks/ULTA';
import { up } from '../../mocks/UP';
import { VMEO } from '../../mocks/vmeo';
import { wish } from '../../mocks/wish';
import { Z } from '../../mocks/Z.mock';
import { ZM } from '../../mocks/ZM';
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
      TRMB,
      tsla,
      NIO,
      AAPL,
      NVDA,
      AMD,
      AVGO,
      TSM,
      asml,

      HD,
      ulta,
      RH,
      AMZN,
      BABA,
      JD,
      pdd,
      SHOP,
      ETSY,
      CHWY,
      JMIA,
      wish,

      MSFT,
      ADBE,
      ADSK,
      CRM,
      orcl,
      NOW,
      DDOG,
      TWLO,
      TEAM,
      SNOW,
      OKTA,
      SPLK,
      ZS,
      ZM,
      DOCU,
      ESTC,
      TTD,
      NET,
      API,

      LZ,
      STEM,

      ISRG,
      MRNA,
      CLOV,
      TDOC,
      EDIT,

      GOOGL,
      FB,
      techy,
      PINS,
      TWTR,
      SNAP,
      U,
      Z,
      OPEN,
      RDFN,
      RBLX,
      ATVI,
      EA,

      SE,
      ABNB,
      UBER,
      DASH,
      PTON,
      INTU,
      DUOL,
      IAC,
      SKLZ,
      SPOT,
      VMEO,

      GS,
      JPM,
      AXP,
      PYPL,
      AFRM,
      COIN,
      SQ,
      HOOD,
      SOFI,
      DIS,
      bili,
      NFLX,

      DKNG,
      PENN,

      AMC,
      GME,

      BYND,
      up,
      blde,
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
