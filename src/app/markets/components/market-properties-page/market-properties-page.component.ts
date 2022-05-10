import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CatalystService } from 'src/app/catalyst/services/catalyst.service';
import { MarketType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';
import { riskService } from 'src/app/risks/services/subjective-data.service';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Market } from 'src/app/stock/models/market.models';
import { MarketsService } from '../../services/markets.service';

@Component({
  selector: 'app-market-properties-page',
  templateUrl: './market-properties-page.component.html',
  styleUrls: ['./market-properties-page.component.scss'],
})
export class MarketPropertiesPageComponent implements OnInit {
  private readonly marketTypeParamName = 'marketType';
  routeSub: Subscription;

  marketType: MarketType;
  market: Market;
  risks: Risk[];
  catalysts: Catalyst[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private riskService: riskService,
    private marketService: MarketsService,
    private catalystService: CatalystService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.marketType = params[this.marketTypeParamName];
      this.titleService.setTitle(this.marketType);

      this.market = this.marketService.getMarketsByTypes([this.marketType])[0];
      this.risks = this.riskService.getRisksByUuids(this.market.riskUuids);
      this.catalysts = this.catalystService.getCatalystByUuids(
        this.market.catalystUuids
      );
    });
  }
}
