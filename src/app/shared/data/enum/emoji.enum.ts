import { IndustryType } from 'src/app/facts/data/area.enum';

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
}

export const industryEmojiMap = {
  [IndustryType.quantumComputing]: '⚛️',
  [IndustryType.ecommerce]: '🛒',
  [IndustryType.discountStores]: '🛒',
  [IndustryType.itSolution]: '🌐',
};
