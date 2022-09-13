import { Component, Input, OnInit } from '@angular/core';
import { Source } from 'src/app/stock/models/news-source.enum';

@Component({
  selector: 'app-media-link',
  templateUrl: './media-link.component.html',
  styleUrls: ['./media-link.component.scss'],
})
export class MediaLinkComponent implements OnInit {
  @Input() link: string;
  @Input() source: Source | string;

  readonly sourceEnum = Source;

  constructor() {}

  ngOnInit(): void {}
}
