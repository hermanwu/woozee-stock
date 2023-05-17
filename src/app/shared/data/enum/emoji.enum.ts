import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

/**
 * Emojis enum.
 */
export enum EmojiUnicode {
  // emoji
  link = '🔗',
  tree = '🌲',
  chartUp = '📈',
  chartDown = '📉',
  arrowUp = '⬆️',
  arrowDown = '⬇️',
  thumbUp = '👍',
  thumbDown = '👎',
  warning = '⚠️',
  money = '💰',
  rocket = '🚀',
  bull = '',
  yellowDiamond = '🔸',
  blueDiamond = '🔹',
  speaker = '🎙️',
  lightening = '⚡',
  pencil = '✏️',
  memo = '📝',
  vs = '🆚',
  bear = '🐻',
  pin = '📌',
  chart = '📊',
}

export const BullishEmoji = ['🚀', '😆', '🙂', '👍', '🤑', '😲'];

export const BearishEmoji = ['😫', '🙁', '👎'];

export const industryEmojiMap = {
  [IndustryType.quantumComputing]: '⚛️',
  [IndustryType.ecommerce]: '🛒',
  [IndustryType.discountStores]: '🛒',
  [IndustryType.itSolution]: '🌐',
};
