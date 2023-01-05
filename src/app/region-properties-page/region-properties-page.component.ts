import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../news/services/news.services';
import { Opinion } from '../opinions/components/opinion-display/opinion.interface';
import { OpinionServices } from '../opinions/services/opinion.services';
import { RegionCode } from '../shared/data/enum/region.enum';
import { News } from '../stock/models/news.model';

@Component({
  selector: 'app-region-properties-page',
  templateUrl: './region-properties-page.component.html',
  styleUrls: ['./region-properties-page.component.scss'],
})
export class RegionPropertiesPageComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  regionCode: RegionCode;
  opinions: Opinion[];
  news: News[];
  marketType: string;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private opinionService: OpinionServices,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.regionCode = params['regionCode'];
      this.titleService.setTitle(this.regionCode);

      this.opinions = this.opinionService.getOpinionsByRegionCode(
        this.regionCode
      );

      this.news = this.newsService.getNewsByTags([this.regionCode]);
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
