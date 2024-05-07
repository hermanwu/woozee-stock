import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { environment } from 'src/environments/environment';
import { UserInteractions } from 'src/interactions/interaction.services';
import { UserServices } from '../accounts/services/user.services';
import { StockModel, Tradable } from '../mock-data/mocks/tradables.mock';
import { NotesServices } from '../news/services/notes.services';
import { NumberRange } from '../shared/components/stats-display/stats-display.interface';
import {
  getCompanyShortDashName,
  getCompanyShortName,
} from '../shared/functions/data-transformation.function';
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
  dashName: string;

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

      this.tradable = { ticker };

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
              this.dashName = getCompanyShortDashName(this.tradable.name);
              this.populateEarnings(response.earnings);
              if (response.products) {
                this.products = Object.entries(response.products).map(
                  ([key, value]: [string, any]) => ({ uuid: key, ...value })
                );
              }
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

  populateEarnings(earnings) {
    if (!earnings || earnings.length === 0) {
      this.earnings = [];
      return;
    }
    this.earnings = this.sortValuesByDateKey(earnings);
  }

  sortValuesByDateKey(obj: { [key: string]: any }): any[] {
    // Get an array of entries from the object
    const entries = Object.entries(obj);

    // Sort the entries array based on the date string keys
    const sortedEntries = entries.sort(([dateKey1], [dateKey2]) => {
      // Compare the date strings using the built-in Date object
      return new Date(dateKey2).getTime() - new Date(dateKey1).getTime();
    });

    // Extract the sorted values from the sorted entries array
    const sortedValues = sortedEntries.map(([_, value]) => value);

    return sortedValues;
  }

  processStaticInformation(quoteUuid) {
    this.notes = this.notesServices.getNotesByTargets([quoteUuid]).slice(0, 5);
  }

  updateTradableBasedStockModelData(
    tradable: Tradable,
    stockModelData: StockModel
  ) {
    const result = cloneDeep(tradable);
    result.name = stockModelData.name;
    result.marketCap = stockModelData.market_cap;
    result.displayName = getCompanyShortName(stockModelData.name);
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

  testAction() {
    return;
  }
}
