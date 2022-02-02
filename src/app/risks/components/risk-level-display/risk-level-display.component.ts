import { Component, Input, OnInit } from '@angular/core';
import { RiskLevel } from '../../models/risk-level.model';

@Component({
  selector: 'app-risk-level-display',
  templateUrl: './risk-level-display.component.html',
  styleUrls: ['./risk-level-display.component.scss'],
})
export class RiskLevelDisplayComponent implements OnInit {
  @Input() riskLevel: RiskLevel;

  readonly riskLevelEnum = RiskLevel;

  constructor() {}

  ngOnInit(): void {}
}
