import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IndustriesService } from 'src/app/markets/services/industries.service';
import { NewsService } from 'src/app/news/services/news.services';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { OpinionServices } from 'src/app/notes/services/opinion.services';
import { Note } from 'src/app/shared/data/note.interface';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/industry.model';
import { Stock } from 'src/app/stock/models/stock.model';
import { StockServices } from 'src/app/stock/services/objective-data.service';

@Component({
  selector: 'app-industry-properties-page',
  templateUrl: './industry-properties-page.component.html',
  styleUrls: ['./industry-properties-page.component.scss'],
})
export class IndustryPropertiesPageComponent implements OnInit, OnDestroy {
  private readonly marketTypeParamName = 'marketType';
  routeSub: Subscription;

  marketType: IndustryType;
  market: Industry;

  stocks: Stock[];
  opinions: Opinion[];
  news: Note[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private marketService: IndustriesService,
    private stockServices: StockServices,
    private opinionService: OpinionServices,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.marketType = params[this.marketTypeParamName];
      this.titleService.setTitle(this.marketType);

      this.market = this.marketService.getMarketsByTypes([this.marketType])[0];

      this.stocks = this.stockServices.getStocksByIndustryType(this.marketType);

      this.opinions = this.opinionService.getOpinionsByIndustry(
        this.marketType
      );

      this.news = this.newsService.getNewsByTags([this.marketType]);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
