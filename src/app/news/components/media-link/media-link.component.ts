import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Source } from 'src/app/stock/models/news-source.enum';

@Component({
  selector: 'app-media-link',
  templateUrl: './media-link.component.html',
  styleUrls: ['./media-link.component.scss'],
})
export class MediaLinkComponent implements OnInit, OnChanges {
  @Input() link: string;
  @Input() source: Source | string;

  readonly sourceEnum = Source;
  domain: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.link) {
      this.domain = this.getDomainFromUrl(this.link);
    }
  }

  private getDomainFromUrl(url: string): string {
    const domain = url.split('/')[2].split('.')[1];
    return domain;
  }
}
