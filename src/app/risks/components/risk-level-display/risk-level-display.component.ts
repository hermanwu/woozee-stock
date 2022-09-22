import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../../models/risk-level.model';

@Component({
  selector: 'app-risk-level-display',
  templateUrl: './risk-level-display.component.html',
  styleUrls: ['./risk-level-display.component.scss'],
})
export class TermDisplayComponent implements OnInit {
  @Input() riskLevel: Term;

  readonly impactLevelEnum = Term;

  constructor() {}

  ngOnInit(): void {}
}
