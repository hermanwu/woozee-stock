import { Component, Input, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';

@Component({
  selector: 'app-risk-total-display',
  templateUrl: './risk-total-display.component.html',
  styleUrls: ['./risk-total-display.component.scss'],
})
export class RiskTotalDisplayComponent implements OnInit {
  @Input() riskUuids: string[];
  readonly multiplySign = UnicodeCharacters.Multiply;

  constructor() {}

  ngOnInit(): void {}
}
