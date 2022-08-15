import { Component, Input, OnChanges } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-profitability-details',
  templateUrl: './profitability-details.component.html',
  styleUrls: ['./profitability-details.component.scss'],
})
export class ProfitabilityDetailsComponent implements OnChanges {
  @Input() stock: StockData;
  emojiUnicode = EmojiUnicode;
  constructor() {}

  ngOnChanges(): void {}
}
