import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-valuation',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.scss'],
})
export class ValuationComponent implements OnInit, OnChanges {
  @Input() stock: StockAnalysis;
  @Input() hideLabel: boolean;
  @Input() hideData?: boolean;

  readonly unicode = UnicodeCharacters;
  earningReports: EarningsReport[];
  trailing12MonthsSales: number;
  trailing12MonthsOI: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
