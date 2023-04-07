import { Component, Input, OnInit } from '@angular/core';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';

export enum EmotionEnum {
  VeryBullish = 'Very Bullish',
  Bullish = 'Bullish',
  Neutral = 'Neutral',
  Bearish = 'Bearish',
  VeryBearish = 'Very Bearish',
}

@Component({
  selector: 'app-emoji-display',
  templateUrl: './emoji-display.component.html',
  styleUrls: ['./emoji-display.component.scss'],
})
export class EmojiDisplayComponent implements OnInit {
  @Input() emotion: EmotionEnum;

  emotionEnum = EmotionEnum;
  emojiUnicode = EmojiUnicode;

  constructor() {}

  ngOnInit(): void {}
}
