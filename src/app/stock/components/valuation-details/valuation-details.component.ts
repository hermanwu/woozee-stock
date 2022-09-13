import { Component, Input, OnInit } from '@angular/core';
import { UnicodeCharacters } from '../../../shared/data/enum/unicode-characters.enum';
import { EarningsReport } from '../../models/earnings.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-valuation-details',
  templateUrl: './valuation-details.component.html',
  styleUrls: ['./valuation-details.component.scss'],
})
export class ValuationDetailsComponent implements OnInit {
  @Input() stock: StockAnalysis;
  @Input() hideLabel: boolean;

  readonly unicode = UnicodeCharacters;
  earningReports: EarningsReport[];
  trailing12MonthsSales: number;
  trailing12MonthsOI: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
