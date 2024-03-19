import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserServices } from '../accounts/services/user.services';
import { EarningsKeyWord } from '../mock-data/earnings-key-word.enum';
import { Earnings, getEarningsByTargetUuid } from '../mock-data/earnings.mock';
import {
  getTradableItemsByUuids,
  Tradable,
} from '../mock-data/mocks/tradables.mock';
import { getOrganizationsByUuids } from '../mock-data/organization.mock';
import { getPricesByUuid } from '../mock-data/price.mock';
import { getCompetitorsByTradableUuid } from '../mock-data/relationship.mock';
import { NotesServices } from '../news/services/notes.services';
import {
  currencyToDollarConversionMap,
  PriceRange,
  UnitType,
} from '../shared/components/stats-display/stats-display.interface';

@Component({
  selector: 'app-tradable-properties-page',
  templateUrl: './tradable-properties-page.component.html',
  styleUrls: ['./tradable-properties-page.component.scss'],
})
export class TradablePropertiesPageComponent implements OnInit {
  private quoteUuid = 'quoteUuid';
  tradable: Tradable;
  routeSub: Subscription;
  interactions;
  targetUuidToInteractionMap;
  earnings;
  organizations;
  notes;
  priceRange: PriceRange;
  competitors;

  currentPrice;
  currentMarketCap;

  readonly environment = environment;

  constructor(
    private route: ActivatedRoute,
    private userServices: UserServices,
    private notesServices: NotesServices
  ) {
    this.targetUuidToInteractionMap = userServices.entityUuidToInteraction;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const quoteUuid = params[this.quoteUuid].toLowerCase();

      this.tradable = getTradableItemsByUuids([quoteUuid])?.[0];

      const stats = getPricesByUuid(quoteUuid);
      this.currentPrice = stats?.price;
      this.currentMarketCap = stats?.marketCap;

      this.organizations = getOrganizationsByUuids([
        this.tradable.organizationUuid,
      ]);

      this.earnings = getEarningsByTargetUuid(quoteUuid).sort((a, b) => {
        return (
          new Date(b.releasedDate).getTime() -
          new Date(a.releasedDate).getTime()
        );
      });

      if (
        this.earnings.length > 0 &&
        this.currentMarketCap &&
        this.currentPrice
      ) {
        const targetMarketCap = this.calculateTargetMarketCapByEarnings(
          this.earnings[0]
        );

        let targetPriceRange = this.calculateTargetPriceByTargetMarketCap(
          this.currentMarketCap,
          this.currentPrice,
          targetMarketCap
        );

        this.priceRange = {
          low: targetPriceRange[0],
          high: targetPriceRange[1],
          average: (targetPriceRange[0] + targetPriceRange[1]) / 2,
        };
      }

      // const analystPriceRange = getPriceRangeByTradableUuid(quoteUuid);
      // if (analystPriceRange) {
      //   this.priceRange = { ...analystPriceRange };
      //   this.priceRange.low = Math.min(
      //     this.priceRange.low,
      //     analystPriceRange.low
      //   );
      //   this.priceRange.high = Math.min(
      //     this.priceRange.high,
      //     analystPriceRange.high
      //   );
      // }

      this.notes = this.notesServices
        .getNotesByTargets([quoteUuid])
        .slice(0, 5);

      this.competitors = getTradableItemsByUuids(
        getCompetitorsByTradableUuid(quoteUuid)
      );

      this.interactions = this.targetUuidToInteractionMap.get(quoteUuid);
    });
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
      ((grossProfit || operatingIncome) + operatingIncome) / 2;
    let lowPossibleProfit =
      operatingIncome > 0
        ? operatingIncome
        : netIncome > 0
        ? netIncome
        : grossProfit / 4;
    let highMultiple =
      revenueGrowthRatio > 1 ? (revenueGrowthRatio - 1) * 2 + 1 : 1;

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

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
