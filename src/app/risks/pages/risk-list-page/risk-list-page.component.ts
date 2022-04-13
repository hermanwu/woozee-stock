import { Component, OnInit } from '@angular/core';
import { catalysts } from 'src/app/catalyst/data/catalyst.mock';
import { news } from 'src/app/media/news/news.const';
import { risks } from '../../data/global-risk.const';
import { Risk } from '../../models/risk.model';
import { RisksDataService } from '../../services/risks-data.service';

@Component({
  selector: 'app-risk-list-page',
  templateUrl: './risk-list-page.component.html',
  styleUrls: ['./risk-list-page.component.scss'],
})
export class RiskListPageComponent implements OnInit {
  news = news;
  catalysts = catalysts;
  risks = risks;

  tagRisksMap: Map<string, Risk[]>;

  constructor(private risksDataService: RisksDataService) {
    this.tagRisksMap = risksDataService.tagRisksMap;
  }

  ngOnInit(): void {}
}
