import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import { Sentiment } from 'src/interactions/interaction.services';
import { Term } from '../../../risks/models/risk-level.model';
import { OpinionEnum } from '../../../stock/models/opinion-type.model';
import { Opinion } from './opinion.interface';

@Component({
  selector: 'app-opinion-display',
  templateUrl: './opinion-display.component.html',
  styleUrls: ['./opinion-display.component.scss'],
})
export class OpinionDisplayComponent implements OnInit, OnChanges {
  @Input() opinion: Opinion;
  @Input() opinionType: OpinionEnum;
  @Input() sentiment: Sentiment;

  readonly opinionTypeEnum = OpinionEnum;
  readonly termEnum = Term;
  readonly emojiUnicode = EmojiUnicode;
  expanded: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
