import { Component, OnInit } from '@angular/core';
import { Risk } from 'src/app/risks/models/risk.model';
import { SubjectiveDataService } from 'src/app/risks/services/subjective-data.service';
import { cloneDeep } from 'src/app/shared/functions/clone-deep';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { portfolios } from '../../ mock-data/portfolios.const';
import { PortfolioDetails } from './portfolio-details.interface';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
})
export class PortfolioListComponent implements OnInit {
  portfolios: PortfolioDetails[] = [];

  constructor(subjectiveDataService: SubjectiveDataService) {
    for (let portfolio of portfolios) {
      this.portfolios.push({
        ...cloneDeep(portfolio),
        risks: subjectiveDataService.getOpinionsByUuids(
          portfolio.riskUuids
        ) as Risk[],
        catalysts: subjectiveDataService.getOpinionsByUuids(
          portfolio.catalystUuids
        ) as Catalyst[],
      });
    }
  }

  ngOnInit(): void {}
}
