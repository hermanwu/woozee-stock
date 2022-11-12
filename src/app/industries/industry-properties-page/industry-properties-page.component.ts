import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IndustryType } from 'src/app/facts/data/area.enum';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { Risk } from 'src/app/risks/models/risk.model';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Industry } from 'src/app/stock/models/industry.model';
import { Stock } from 'src/app/stock/models/stock.model';
import { StockServices } from 'src/app/stock/services/objective-data.service';

@Component({
  selector: 'app-industry-properties-page',
  templateUrl: './industry-properties-page.component.html',
  styleUrls: ['./industry-properties-page.component.scss'],
})
export class IndustryPropertiesPageComponent implements OnInit {
  private readonly marketTypeParamName = 'marketType';
  routeSub: Subscription;

  marketType: IndustryType;
  market: Industry;
  risks: Risk[];
  catalysts: Catalyst[];
  stocks: Stock[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private marketService: IndustriesService,
    private stockServices: StockServices
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.marketType = params[this.marketTypeParamName];
      this.titleService.setTitle(this.marketType);

      this.market = this.marketService.getMarketsByTypes([this.marketType])[0];

      this.stocks = this.stockServices.getStocksByIndustryType(this.marketType);
    });
  }
}
