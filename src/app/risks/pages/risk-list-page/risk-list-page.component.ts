import { Component, OnInit } from '@angular/core';
import { catalysts } from 'src/app/catalyst/data/catalyst.mock';
import { NewsWithDetails } from 'src/app/stock/models/news.model';
import { risks } from '../../data/global-risk.const';
import { Risk } from '../../models/risk.model';
import { SubjectiveDataService } from '../../services/risks-data.service';

@Component({
  selector: 'app-risk-list-page',
  templateUrl: './risk-list-page.component.html',
  styleUrls: ['./risk-list-page.component.scss'],
})
export class RiskListPageComponent implements OnInit {
  news: NewsWithDetails[];
  catalysts = catalysts;
  risks = risks;

  tagRisksMap: Map<string, Risk[]>;

  constructor(private risksDataService: SubjectiveDataService) {
    this.news = risksDataService.getNewsDetails();
  }

  ngOnInit(): void {}
}
