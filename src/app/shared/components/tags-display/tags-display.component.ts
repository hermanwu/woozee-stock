import { Component, Input, OnChanges } from '@angular/core';
import { StockServices } from 'src/app/stock/services/objective-data.service';
import { cloneDeep } from '../../functions/clone-deep';

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.scss'],
})
export class TagsDisplayComponent implements OnChanges {
  @Input() tags: string[];
  @Input() showDefaultTags: boolean;
  @Input() showLinks: boolean;

  readonly defaultTags = '#Stocks #StockMarket #Investing #Investment';
  investTrend = 'investTrends';
  allTagStrings = '';

  constructor(private stockServices: StockServices) {}

  ngOnChanges() {
    if (this.tags) {
      const tagsCopy = cloneDeep(this.tags);
      for (let tag of this.tags) {
        // Check if tag is a stock.
        const stock = this.stockServices.getStockByTicker(tag);
        if (stock?.shortName) {
          tagsCopy.push(stock.shortName);
        }
      }

      const set = new Set();

      for (let tag of tagsCopy) {
        set.add(
          tag.length > 4
            ? `#${this.capitalizeFirstCharacter(tag.trim())}`
            : `#${tag.trim().toUpperCase()}`
        );
      }

      this.allTagStrings = Array.from(set).join(' ');
    }

    if (this.showLinks) {
    }
  }

  capitalizeFirstCharacter(str) {
    if (str) {
      return str
        .split(' ')
        .map((word) => word.trim()?.[0]?.toUpperCase() + word.slice(1))
        .join('');
    }
  }
}
