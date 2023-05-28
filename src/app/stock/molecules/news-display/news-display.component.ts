import { Component, Input, OnChanges } from '@angular/core';
import { Fact } from 'src/app/risks/models/fact.model';
import { industryEmojiMap } from 'src/app/shared/data/enum/emoji.enum';
import { TagServices } from 'src/app/shared/services/tag.services';
import { environment } from 'src/environments/environment';
import { EventType } from '../../models/news.model';
import { StockAnalysis } from '../../models/stock-analysis.model';

@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.scss'],
})
export class NewsDisplayComponent implements OnChanges {
  @Input() shortVersion: boolean;
  @Input() news: Fact;
  @Input() expanded: boolean;

  readonly industryEmojiMap = industryEmojiMap;
  readonly eventType = EventType;
  environment = environment;

  imageLinks = [];
  stock: StockAnalysis;
  showDetails = false;

  constructor(private tagService: TagServices) {}

  ngOnChanges(): void {
    if (this.news?.tagUuids?.length) {
      for (let tag of this.news.tagUuids) {
        const tagData = this.tagService.getTagRelatedDataByUuid(tag);
        if (tagData?.imageLink) {
          this.imageLinks.push(tagData);
        }
      }
    }
  }
}
