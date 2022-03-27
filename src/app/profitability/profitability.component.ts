import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from '../shared/data/enum/unicode-characters.enum';
import { StockData } from '../stock/services/stock-data.model';

@Component({
  selector: 'app-profitability',
  templateUrl: './profitability.component.html',
  styleUrls: ['./profitability.component.scss'],
})
export class ProfitabilityComponent implements OnInit, OnChanges {
  @Input() stock: StockData;
  @Input() hideLabel: boolean;
  @Input() compareDisplay: boolean;

  readonly unicode = UnicodeCharacters;

  constructor() {}

  ngOnChanges() {}

  ngOnInit(): void {}
}
