import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { Term } from '../../../risks/models/risk-level.model';
import { Rating } from '../../../stock/models/rating.model';
import { Opinion } from './opinion.interface';

@Component({
  selector: 'app-opinion-display',
  templateUrl: './opinion-display.component.html',
  styleUrls: ['./opinion-display.component.scss'],
})
export class OpinionDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() shortVersion: boolean;

  readonly ratingEnum = Rating;
  readonly termEnum = Term;
  expanded: boolean;
  emojis: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.opinion?.emojis) {
      this.emojis = this.opinion.emojis.join('');
    } else if (
      this.opinion?.rating === Rating.Bearish ||
      this.opinion?.rating === Rating.VeryBearish
    ) {
      this.emojis = EmojiUnicode.thumbDown;
    } else if (
      this.opinion?.rating === Rating.Bullish ||
      this.opinion?.rating === Rating.VeryBullish
    ) {
      this.emojis = EmojiUnicode.thumbUp;
    }
  }
}
