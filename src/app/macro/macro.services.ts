import { Injectable } from '@angular/core';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { RegionCode } from '../shared/data/enum/region.enum';
import { Rating } from '../stock/models/rating.model';

export const opinions = [
  {
    title: 'US companies are laying off employees',
    tags: ['job market'],
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    regions: [RegionCode.us],
    content: [
      'Companies that has been announced layoff: Snap (20%), Carvana - 12%, Netflix, Robinhood (30%), Goldman Sach - 10%, Shopify - 10%, Twilio - 10%',
    ],
  },
  {
    title: 'US consumer spending decreases',
    tags: ['consumer spending'],
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    regions: [RegionCode.us],
  },
  {
    title: 'Labor Shortage',
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['labor shortage'],
    regions: [RegionCode.us],
  },
  {
    title: 'Fed rate increases could potentially cause recession.',
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['Fed Rate'],
    regions: [RegionCode.us],
  },
  {
    title: 'Russian-Ukraine war',
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['war'],
    regions: [RegionCode.ru, RegionCode.eu],
  },
  {
    title: 'COVID',
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['covid'],
    regions: [RegionCode.cn],
  },
  {
    title: 'Inflation is very high.',
    opinion: {
      rating: Rating.Sell,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['inflation', 'CPI'],
    regions: [RegionCode.global],
  },
];
@Injectable({
  providedIn: 'root',
})
export class MacroServices {
  getMacros() {
    return opinions;
  }
}
