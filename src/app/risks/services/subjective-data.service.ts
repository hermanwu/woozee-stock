import { Injectable } from '@angular/core';
import { catalysts } from 'src/app/catalyst/data/catalyst.mock';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { allMarkets } from 'src/app/markets/data/all-markets.const';
import { allNews } from 'src/app/media/news/news.const';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Market } from 'src/app/stock/models/market.models';
import { NewsWithDetails } from 'src/app/stock/models/news.model';
import { allRisks } from '../data/global-risk.const';
import { Risk } from '../models/risk.model';

@Injectable({
  providedIn: 'root',
})
export class riskService {
  risks: Risk[];
  catalysts: Catalyst[];
  newsWithDetails: NewsWithDetails[];
  markets: Market[];

  catalystMap: Map<string, Catalyst> = new Map();
  riskMap: Map<string, Risk> = new Map();
  marketMap: Map<IndustryType, Market> = new Map();

  constructor() {
    this.risks = cloneDeep(allRisks);
    this.newsWithDetails = cloneDeep(allNews) as NewsWithDetails[];
    this.catalysts = cloneDeep(catalysts);
    this.markets = cloneDeep(allMarkets);

    for (let catalyst of this.catalysts) {
      if (catalyst.uuid) {
        this.catalystMap.set(catalyst.uuid, catalyst);
      }
    }

    for (let risk of this.risks) {
      if (risk.uuid) {
        this.riskMap.set(risk.uuid, risk);
      }
    }

    for (let market of this.markets) {
      this.marketMap.set(market.type, market);
    }

    this.newsWithDetails = this.newsWithDetails.map((item) => ({
      ...item,
      catalysts: item?.catalystUuids?.map((uuid) => this.catalystMap.get(uuid)),
      risks: item?.riskUuids?.map((uuid) => this.riskMap.get(uuid)),
    }));

    // Sort all risks by their updated time.
    // this.risks.sort(
    //   (a, b) => b.updatedTime.getTime() - a.updatedTime.getTime()
    // );
  }

  getNewsDetails(): NewsWithDetails[] {
    return this.newsWithDetails;
  }

  getRisksByUuids(uuids: string[]): Risk[] {
    if (uuids && uuids.length > 0) {
      return this.risks.filter((risk) => uuids.indexOf(risk.uuid) >= 0);
    }
  }

  getRisksByTicker(ticker: string): Risk[] {
    return cloneDeep(
      this.risks.filter((risk) =>
        risk?.tickers?.find((t) => t.toLowerCase() === ticker.toLowerCase())
      )
    );
  }

  getRisksByMarkets(marketTypes: IndustryType[]): Risk[] {
    const set = new Set();

    if (marketTypes) {
      for (let marketType of marketTypes) {
        const risksWithMarketType = this.risks.filter(
          (risk) => risk?.markets?.indexOf(marketType) >= 0
        );

        for (let risk of risksWithMarketType) {
          set.add(risk);
        }
      }
    }
    return Array.from(set.values());
  }

  getCatalystsByTicker(ticker: string): Catalyst[] {
    return this.catalysts.filter((catalyst) =>
      catalyst?.tickers?.find((t) => t.toLowerCase() === ticker.toLowerCase())
    );
  }

  getCatalystsByMarkets(marketTypes: IndustryType[]): Catalyst[] {
    if (marketTypes) {
      const set = new Set<Catalyst>();

      for (let marketType of marketTypes) {
        const catalystsWithMarketType = this.catalysts.filter(
          (catalyst) => catalyst?.markets?.indexOf(marketType) >= 0
        );

        for (let catalyst of catalystsWithMarketType) {
          set.add(catalyst);
        }
      }

      return Array.from(set.values());
    }
  }

  /**
   * Get tickers from a list of risks or catalysts.
   * @param opinions
   */
  getTickersFromOpinions(opinions: (Catalyst | Risk)[]): string[] {
    const set = new Set<string>();

    for (let opinion of opinions) {
      if (opinion?.tickers?.length > 0) {
        for (let ticker of opinion.tickers) {
          set.add(ticker);
        }
      }
    }

    return Array.from(set.values());
  }

  getOpinionsByUuids(uuids: string[]): Risk[] | Catalyst[] {
    if (uuids?.length > 0) {
      const result = [];

      for (let uuid of uuids) {
        if (this.catalystMap.has(uuid)) {
          result.push(this.catalystMap.get(uuid));
        }

        if (this.riskMap.has(uuid)) {
          result.push(this.riskMap.get(uuid));
        }
      }

      return cloneDeep(result);
    }
  }

  /**
   * Get market types from a list of risks or catalysts.
   * @param opinions
   */
  getMarketsFromOpinions(opinions: (Catalyst | Risk)[]): IndustryType[] {
    const set = new Set<IndustryType>();

    for (let opinion of opinions) {
      if (opinion?.markets?.length) {
        for (let market of opinion.markets) {
          set.add(market);
        }
      }
    }

    return Array.from(set.values());
  }
}
