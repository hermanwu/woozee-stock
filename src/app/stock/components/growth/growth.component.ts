import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UnicodeCharacters } from 'src/app/shared/data/enum/unicode-characters.enum';
import { Industry } from '../../models/industry.model';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-growth',
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss'],
})
export class GrowthComponent implements OnInit, OnChanges {
  @Input() stock: StockData;
  @Input() industry?: Industry;
  @Input() hideLabel: boolean;
  @Input() compareDisplay: boolean;
  @Input() hideData?: boolean;

  unicode = UnicodeCharacters;
  quarterlyRevenue: number;
  activeUserCount: number;
  userCountGrowth: number;
  forecastRevenue: number;
  revenueRetention: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
