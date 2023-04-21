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
      this.domain = this.getDomainAndSuffix(this.link);
    }
  }

  getDomainAndSuffix(url: string): string {
    if (url) {
      const parsedUrl = new URL(url);
      const domainParts = parsedUrl.hostname.split('.');
      const suffix = domainParts.pop()!;
      const domain = domainParts.pop()!;
      return domain + '.' + suffix;
    }
  }
}
