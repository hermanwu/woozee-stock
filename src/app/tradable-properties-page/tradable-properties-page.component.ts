import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { UserInteractions } from 'src/app/interactions/interaction.services';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { environment } from 'src/environments/environment';
import { UserServices } from '../accounts/services/user.services';
import { convertEarningsDataToEarnings } from '../earnings/functions/convertEarningsDataToEarnings.function';
import { Earnings_Data } from '../earnings/types/earnings_data.type';
import { Earnings } from '../mock-data/earnings.mock';
import { StockModel, Tradable } from '../mock-data/mocks/tradables.mock';
import { NotesServices } from '../news/services/notes.services';
import { AddNoteFormComponent } from '../notes/components/add-note-form/add-note-form.component';
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
  earnings: Earnings[] = [];
  products = [];
  notes;
  marketCapRange: NumberRange;
  dashName: string;

  readonly environment = environment;

  priceData: any;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private notesServices: NotesServices,
    private priceServices: PricesServices,
    private tradableServices: StockServices,
    private userServices: UserServices,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.interactions = undefined;
      this.notes = [];
      this.earnings = [];

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

      this.userServices
        .getUserNotes()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((notes) => {
          console.log(notes);
          this.notes = notes
            ?.filter(
              (note) =>
                note.type === 'stock' &&
                note.ticker?.toLowerCase() === ticker.toLowerCase()
            )
            .sort((a, b) => b.createdTimestamp - a.createdTimestamp);
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
    });
  }

  populateEarnings(earnings: Record<string, Earnings_Data>) {
    const quarterlyEarnings = [];

    for (const [key, value] of Object.entries(earnings)) {
      if (key[key.length - 1] === 'Q' && value.end_date) {
        quarterlyEarnings.push(value);
      }
    }

    quarterlyEarnings.sort((a, b) => {
      return new Date(b.end_date).getTime() - new Date(a.end_date).getTime();
    });

    for (let earning_data of quarterlyEarnings) {
      const earningData = convertEarningsDataToEarnings(earning_data);
      this.earnings.push(earningData);
    }

    // populate the previous value based on i + 4th earnings
    for (let i = 0; i < this.earnings.length; i++) {
      if (i + 4 < this.earnings.length) {
        const currentEarnings = this.earnings[i];
        const previousEarnings = this.earnings[i + 4];

        if (
          currentEarnings.data &&
          previousEarnings.data?.revenues?.value !== undefined
        ) {
          currentEarnings.data.revenues = {
            ...currentEarnings.data.revenues,
            previousValue: previousEarnings.data.revenues.value,
          };
        }
        if (previousEarnings.data.grossProfit?.value !== undefined) {
          currentEarnings.data.grossProfit = {
            ...currentEarnings.data.grossProfit,
            previousValue: previousEarnings.data.grossProfit.value,
          };
        }
        if (previousEarnings.data.operatingIncome?.value !== undefined) {
          currentEarnings.data.operatingIncome = {
            ...currentEarnings.data.operatingIncome,
            previousValue: previousEarnings.data.operatingIncome.value,
          };
        }
        if (previousEarnings.data.netIncome?.value !== undefined) {
          currentEarnings.data.netIncome = {
            ...currentEarnings.data.netIncome,
            previousValue: previousEarnings.data.netIncome.value,
          };
        }
      }
    }
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

  // delete note and once successful remove from the notes array
  deleteNote(note: { attributeId: string; content: string }) {
    this.userServices.deleteUserNotes(note.attributeId);
  }

  addNote() {
    const url = this.router.url;
    const urlParts = url.split('/').filter((part) => part !== '');
    const lastTwoParts = urlParts.slice(-2);

    let dialogData: { stockTicker?: string; tagUuid?: string } = {};

    if (lastTwoParts.length === 2) {
      const [possibleType, possibleUuid] = lastTwoParts;

      if (possibleType === 'quotes') {
        dialogData.stockTicker = possibleUuid;
      } else if (possibleType === 'tags') {
        dialogData.tagUuid = possibleUuid;
      }
    }

    this.dialog.open<AddNoteFormComponent>(AddNoteFormComponent, {
      maxHeight: '90vh', //you can adjust the value as per your view
      data: dialogData,
      width: '600px',
      disableClose: true,
    });
  }
}
