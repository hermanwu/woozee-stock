import { Component, Input, OnChanges } from '@angular/core';
import { TagServices } from '../../services/tag.services';

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.scss'],
})
export class TagsDisplayComponent implements OnChanges {
  @Input() content: string;
  @Input() tags: string[];
  @Input() showDefaultTags: boolean;
  @Input() showLinks: boolean;

  readonly defaultTags = '#Stocks #StockMarket #Investing #Investment';
  investTrend = 'investTrends';

  constructor(private tagServices: TagServices) {}

  ngOnChanges() {
    if (this.showLinks) {
    }
  }
}
