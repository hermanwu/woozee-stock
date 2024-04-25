import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { environment } from 'src/environments/environment';
import { UserInteractions } from 'src/interactions/interaction.services';
import { UserServices } from '../accounts/services/user.services';
import { EarningsKeyWord } from '../mock-data/earnings-key-word.enum';
import { Earnings, getEarningsByTargetUuid } from '../mock-data/earnings.mock';
import {
  StockModel,
  Tradable,
  getTradableItemByTicker,
  getTradableItemsByUuids,
} from '../mock-data/mocks/tradables.mock';
import { getPricesByUuid } from '../mock-data/price.mock';
import { getProductsByStockTicker } from '../mock-data/product.mock';
import { getCompetitorsByTradableUuid } from '../mock-data/relationship.mock';
import { NotesServices } from '../news/services/notes.services';
import {
  NumberRange,
  UnitType,
  currencyToDollarConversionMap,
} from '../shared/components/stats-display/stats-display.interface';
import { PricesServices } from '../shared/services/prices.services';
import { StockServices } from '../stock/services/stock.service';

@Component({
  selector: 'app-tradable-properties-page',
  templateUrl: './tradable-properties-page.component.html',
  styleUrls: ['./tradable-properties-page.component.scss'],
})
export class TradablePropertiesPageComponent implements OnInit, OnDestroy {
  private quoteUuid = 'quoteUuid';
  private unsubscribe$ = new Subject<void>();

  tradable: Tradable | any;
  routeSub: Subscription;
  interactions: UserInteractions;
  targetUuidToInteractionMap;
  earnings;
  products = [];
  notes;
  priceRange: NumberRange;
  marketCapRange: NumberRange;
  competitors;
  historicalPrice;
  historicalMarketCap;
  previousPrice;
  currentPrice;
  showRange;

  logoLink;
  largeLogoLink;
  name: string;

  readonly environment = environment;

  priceData: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private userServices: UserServices,
    private notesServices: NotesServices,
    private priceServices: PricesServices,
    private tradableServices: StockServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.interactions = undefined;

      const quoteUuid = params[this.quoteUuid].toLowerCase();
      const ticker = quoteUuid
        .slice(
          0,
          quoteUuid.indexOf(':') >= 0
            ? quoteUuid.indexOf(':')
            : quoteUuid.length
        )
        ?.toUpperCase();

      this.tradable = getTradableItemByTicker(ticker) || { ticker };
      this.products = getProductsByStockTicker(ticker);

      this.userServices
        .getUserInteractions()
        .pipe(
          filter((interactions) => !!interactions),
          takeUntil(this.unsubscribe$)
        )
        .subscribe((interactions) => {
          this.interactions = interactions[ticker.toLowerCase() + ':tradable'];
        });

      this.subscription.add(
        this.tradableServices.getStockByUuid(ticker).subscribe({
          next: (response) => {
            if (response) {
              this.tradable = this.updateTradableBasedStockModelData(
                this.tradable,
                response
              );
              this.name = this.getCompanyShortName(this.tradable.name);
            }
          },
          error: (error) => {
            this.tradable = null;
            console.error('Error calling the function:', error);
          },
        })
      );

      this.subscription.add(
        this.priceServices.getPriceByTicker(ticker).subscribe((data) => {
          if (data) {
            this.priceData = data;
          } else {
            console.log('Data is not available yet');
          }
        })
      );

      this.processStaticInformation(quoteUuid);
    });
  }

  getCompanyShortName(longName: string) {
    // remove , and . from longName
    longName = longName.replace(/,/g, '').replace(/\./g, '');
    const arr = longName.toLowerCase().split(' ');
    console.log(arr);
    let endIndex = arr.length;
    if (arr.indexOf('inc') >= 0) {
      endIndex = Math.min(endIndex, arr.indexOf('inc'));
    } else if (arr.indexOf('corp') >= 0) {
      endIndex = Math.min(endIndex, arr.indexOf('corp'));
    } else if (arr.indexOf('plc') >= 0) {
      endIndex = Math.min(endIndex, arr.indexOf('plc'));
    } else if (arr.indexOf('corporation') >= 0) {
      endIndex = Math.min(endIndex, arr.indexOf('corporation'));
    }

    return arr.slice(0, endIndex).join('-');
  }

  processStaticInformation(quoteUuid) {
    const stats = getPricesByUuid(quoteUuid);
    this.historicalPrice = stats?.price;
    this.historicalMarketCap = stats?.marketCap;

    this.earnings = getEarningsByTargetUuid(quoteUuid).sort((a, b) => {
      return (
        new Date(b.releasedDate).getTime() - new Date(a.releasedDate).getTime()
      );
    });

    if (this.earnings.length > 0) {
      const marketCapRange = this.calculateTargetMarketCapByEarnings(
        this.earnings[0]
      );
      this.marketCapRange = {
        low: marketCapRange[0],
        high: marketCapRange[1],
        average: (marketCapRange[0] + marketCapRange[1]) / 2,
      };
    }

    this.notes = this.notesServices.getNotesByTargets([quoteUuid]).slice(0, 5);

    this.competitors = getTradableItemsByUuids(
      getCompetitorsByTradableUuid(quoteUuid)
    );
  }

  calculateTargetMarketCapByEarnings(earnings: Earnings): [number, number] {
    let revenue = 0;
    let grossProfit = 0;
    let operatingIncome = 0;
    let netIncome = 0;
    let revenueGrowthRatio = 1;
    let currencyUnit: string = UnitType.dollar;

    if (earnings && earnings.data) {
      for (let item of earnings?.data || []) {
        // remove trailing spaces and to lower case
        if (item?.name === EarningsKeyWord.revenue) {
          revenue = item.value;
          if (item.value && item.previousValue) {
            revenueGrowthRatio = item.value / item.previousValue;
          }
        } else if (item?.name === EarningsKeyWord.grossProfit) {
          grossProfit = item.value;
        } else if (item?.name === EarningsKeyWord.operatingIncome) {
          operatingIncome = item.value;
        } else if (item?.name === EarningsKeyWord.netIncome) {
          netIncome = item.value;
          currencyUnit = item.unit;
        }
      }
    }

    const basePeRatio = 20;
    let highPossibleProfit =
      ((grossProfit > 0 ? grossProfit : revenue / 2) +
        (operatingIncome > 0 ? operatingIncome : revenue / 8)) /
      2;
    let lowPossibleProfit =
      operatingIncome > 0
        ? operatingIncome
        : netIncome > 0
        ? netIncome
        : grossProfit > 0
        ? grossProfit / 8
        : revenue / 16;
    let highMultiple =
      revenueGrowthRatio < 1
        ? 1
        : 1 + (revenueGrowthRatio - 1) * 3 > 3
        ? 3
        : 1 + (revenueGrowthRatio - 1) * 3;

    let lowMarketCap =
      lowPossibleProfit * basePeRatio * 4 * Math.min(1, revenueGrowthRatio);
    let highMarketCap = highPossibleProfit * basePeRatio * 4 * highMultiple;

    return [
      lowMarketCap * currencyToDollarConversionMap[currencyUnit],
      highMarketCap * currencyToDollarConversionMap[currencyUnit],
    ];
  }

  calculateTargetPriceByTargetMarketCap(
    marketCap,
    price,
    targetMarketCap: [number, number]
  ): [number, number] {
    if (marketCap && price && targetMarketCap) {
      return [
        (targetMarketCap[0] / marketCap) * price,
        (targetMarketCap[1] / marketCap) * price,
      ];
    }
  }

  updateTradableBasedStockModelData(
    tradable: Tradable,
    stockModelData: StockModel
  ) {
    const result = cloneDeep(tradable);
    result.name = stockModelData.name;
    result.marketCap = stockModelData.market_cap;
    result.description = stockModelData.description;
    result.homePageUrl = stockModelData.homepage_url;
    result.market = stockModelData.market;
    result.sicDescription = stockModelData.sic_description;
    result.weightedSharesOutstanding =
      stockModelData.weighted_shares_outstanding;
    result.primaryExchange =
      stockModelData.primary_exchange === 'XNAS'
        ? 'NASDAQ'
        : stockModelData.primary_exchange === 'XNYS'
        ? 'NYSE'
        : stockModelData.primary_exchange;
    if (stockModelData.irAddress) {
      result.irAddress = stockModelData.irAddress;
    }
    if (!result.logoLink) {
      result.logoLink = stockModelData.branding?.icon_url;
    }
    if (!result.largeLogoLink) {
      result.largeLogoLink = stockModelData.branding?.logo_url;
    }
    return result;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.subscription.unsubscribe(); // Prevent memory leaks
    this.routeSub.unsubscribe();
  }
}
