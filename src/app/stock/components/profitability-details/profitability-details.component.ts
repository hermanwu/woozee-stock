import { Component, Input, OnChanges } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { convertStatsDetailsToObject } from 'src/app/shared/functions/covert-stats-details-to-object.function';
import { StockData } from '../../services/stock-data.model';

@Component({
  selector: 'app-profitability-details',
  templateUrl: './profitability-details.component.html',
  styleUrls: ['./profitability-details.component.scss'],
})
export class ProfitabilityDetailsComponent implements OnChanges {
  @Input() stock: StockData;
  emojiUnicode = EmojiUnicode;
  statsDetails: any;
  previousStatsDetails: any;
  constructor() {}

  ngOnChanges(): void {
    if (this.stock && this.stock.latestReport) {
      this.statsDetails = convertStatsDetailsToObject(
        this.stock.latestReport.costDetails
      );

      if (this.stock.previousYearReport) {
        this.previousStatsDetails = convertStatsDetailsToObject(
          this.stock.previousYearReport.costDetails
        );
      }
    }
  }
}
