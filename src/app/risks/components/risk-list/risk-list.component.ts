import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Risk } from '../../models/risk.model';

@Component({
  selector: 'app-risk-list',
  templateUrl: './risk-list.component.html',
  styleUrls: ['./risk-list.component.scss'],
})
export class RiskListComponent implements OnInit, OnChanges {
  @Input() showCategory: boolean;
  @Input() risks: Risk[];
  @Input() market?: IndustryType;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.market) {
    }
  }
}
