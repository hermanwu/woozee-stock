import { Component, Input, OnChanges } from '@angular/core';
import { StockService } from 'src/app/stock/services/stock.service';

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.scss'],
})
export class TagsDisplayComponent implements OnChanges {
  @Input() tags: string[];

  investTrend = 'investTrends';
  allTagStrings = '';

  constructor(private stockServices: StockService) {}

  ngOnChanges() {
    if (this.tags) {
      for (let tag of this.tags) {
        // Check if tag is a stock.
        const stock = this.stockServices.getStockByTicker(tag);
        if (stock) {
          this.allTagStrings += `#${stock.shortName?.toLowerCase()} `;
        }

        const tagWord = tag
          .toLowerCase()
          .split(' ')
          .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join('');
        this.allTagStrings += `#${tagWord} `;
      }
    }
  }
}
