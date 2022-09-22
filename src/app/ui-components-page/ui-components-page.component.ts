import { Component, OnInit } from '@angular/core';
import { Opinion } from '../opinion-display/opinion.interface';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { Rating } from '../stock/models/rating.model';

@Component({
  selector: 'app-ui-components-page',
  templateUrl: './ui-components-page.component.html',
  styleUrls: ['./ui-components-page.component.scss'],
})
export class UiComponentsPageComponent implements OnInit {
  constructor() {}

  tagsMock = ['tsla', 'tesla', 'elon musk'];
  opinionMock: Opinion = {
    rating: Rating.Sell,
    emojis: [EmojiUnicode.thumbDown],
  };

  ngOnInit(): void {}
}
