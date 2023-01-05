import { Opinion } from '../opinions/components/opinion-display/opinion.interface';
import { EmojiUnicode } from '../shared/data/enum/emoji.enum';
import { RegionCode } from '../shared/data/enum/region.enum';
import { Rating } from '../stock/models/rating.model';

export const macroOpinions: Opinion[] = [
  {
    content: 'US companies are laying off employees',
    targets: ['job market', 'us'],
    rating: Rating.Bearish,
    emojis: [EmojiUnicode.thumbDown],
    details: [
      'Companies that has been announced layoff: Snap (20%), Carvana - 12%, Netflix, Robinhood (30%), Goldman Sach - 10%, Shopify - 10%, Twilio - 10%',
    ],
  },
  {
    title: 'US consumer spending decreases',
    tags: ['consumer spending'],
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    regions: [RegionCode.us],
  },
  {
    title: 'Labor Shortage',
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['labor shortage'],
    regions: [RegionCode.us],
  },
  {
    title: 'Fed rate increases could potentially cause recession.',
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['Fed Rate'],
    regions: [RegionCode.us],
  },
  {
    title: 'Russian-Ukraine war',
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['war'],
    regions: [RegionCode.ru, RegionCode.eu],
  },
  {
    title: 'COVID',
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['covid'],
    regions: [RegionCode.cn],
  },
  {
    title: 'Inflation is very high.',
    opinion: {
      rating: Rating.Bearish,
      emojis: [EmojiUnicode.thumbDown],
    },
    tags: ['inflation', 'CPI'],
    regions: [RegionCode.global],
  },
];
