import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Risk } from '../../models/risk.model';

@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.component.html',
  styleUrls: ['./risk-list.component.scss'],
})
export class RiskListComponent implements OnInit, OnChanges {
  @Input() tagRisksMap: Map<string, Risk[]>;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
