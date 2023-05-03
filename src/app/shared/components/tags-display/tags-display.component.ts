import { Component, Input, OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../../data/tag.model';
import { NavigationServices } from '../../services/navgiation.services';
import { TagServices } from '../../services/tag.services';

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.scss'],
})
export class TagsDisplayComponent implements OnChanges {
  @Input() content: string;
  @Input() tagUuids: string[];
  @Input() showLinks: boolean;
  tags: Tag[] = [];

  readonly defaultTags = '#Stocks #StockMarket #Investing #Investment';

  constructor(
    private tagServices: TagServices,
    private navigationServices: NavigationServices
  ) {}

  ngOnChanges() {
    if (this.tagUuids) {
      for (let tag of this.tagUuids) {
        const tagData = this.tagServices.getTagRelatedDataByUuid(tag);
        if (tagData) {
          this.tags.push(tagData);
        }
      }
    }
  }

  navigate(tag: Tag) {
    if (environment.production) {
      return;
    }

    this.navigationServices.navigate(tag.type, tag.uuid);
  }
}
