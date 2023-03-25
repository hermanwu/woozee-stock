import { Component, OnInit } from '@angular/core';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { EmojiUnicode } from 'src/app/shared/data/enum/emoji.enum';
import {
  rankHigher,
  rankLower,
} from 'src/app/shared/functions/ranking.function';
import { Rating } from 'src/app/stock/models/rating.model';

@Component({
  selector: 'app-ui-molecules',
  templateUrl: './ui-molecules.component.html',
  styleUrls: ['./ui-molecules.component.scss'],
})
export class UiMoleculesComponent implements OnInit {
  sourceLink = 'https://www.bloomberg.com';

  opinionMock: Opinion = {
    rating: Rating.Bearish,
    emojis: [EmojiUnicode.thumbDown],
  };

  mockRanks = ['tsla', 'aapl', 'meta', 'amzn'];
  mockItem = 'aapl';
  higherItem = 'meta';
  lowerItem = 'amzn';
  mockResult;

  mockImages = [
    {
      link: 'https://i.ibb.co/zhWrySv/Screenshot-2023-02-23-at-8-38-05-PM.png',
      title: 'Nvidia',
    },
    {
      link: 'https://i.ibb.co/zhWrySv/Screenshot-2023-02-23-at-8-38-05-PM.png',
      title: 'Nvidia',
    },
    {
      link: 'https://i.ibb.co/SXprQts/Goldman-Sachs-svg.png',
      title: 'Goldman Sachs',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  mockRankHigher() {
    this.mockResult = rankHigher(
      this.higherItem,
      this.mockItem,
      this.mockRanks
    );
  }

  mockRankLower() {
    this.mockResult = rankLower(this.lowerItem, this.mockItem, this.mockRanks);
  }
}
