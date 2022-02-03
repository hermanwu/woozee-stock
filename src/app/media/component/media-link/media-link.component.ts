import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Source } from 'src/app/shared/data/source.enum';

@Component({
  selector: 'app-media-link',
  templateUrl: './media-link.component.html',
  styleUrls: ['./media-link.component.scss'],
})
export class MediaLinkComponent implements OnInit, OnChanges {
  @Input() link: string;
  @Input() source: Source | string;

  readonly sourceEnum = Source;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Update source based on link
   */
  ngOnChanges(): void {}
}
