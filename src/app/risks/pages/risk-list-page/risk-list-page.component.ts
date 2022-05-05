import { Component, OnInit } from '@angular/core';
import { allRisks } from '../../data/global-risk.const';
import { Risk } from '../../models/risk.model';

@Component({
  selector: 'app-risk-list-page',
  templateUrl: './risk-list-page.component.html',
  styleUrls: ['./risk-list-page.component.scss'],
})
export class RiskListPageComponent implements OnInit {
  risks = allRisks;

  tagRisksMap: Map<string, Risk[]>;

  constructor() {}

  ngOnInit(): void {}
}
