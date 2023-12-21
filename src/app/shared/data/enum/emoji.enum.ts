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
  diagonalArrowUp = '↗️',
  diagonalArrowDown = '↘️',
  thumbUp = '👍',
  thumbDown = '👎',
  warning = '⚠️',
  money = '💰',
  rocket = '🚀',
  bull = '',
  yellowDiamond = '🔸',
  blueDiamond = '🔹',
  greenDot = '🟢',
  redDot = '🔴',
  speaker = '🎙️',
  lightening = '⚡',
  pencil = '✏️',
  memo = '📝',
  vs = '🆚',
  bear = '🐻',
  pin = '📌',
  chart = '📊',
  shit = '💩',
  smile = '😆',
  sad = '😫',
  calendar = '🗓',
  news = '📰',
  one = '1️⃣',
  two = '2️⃣',
  three = '3️⃣',
  four = '4️⃣',
  heart = '❤️',
  bookmark = '🔖',
  comment = '💬',
  hammer = '🛠️',
}

export const BullishEmoji = ['🚀', '😆', '🙂', '👍', '🤑', '😲'];

export const BearishEmoji = ['😫', '🙁', '👎'];

export const industryEmojiMap = {
  [IndustryType.quantumComputing]: '⚛️',
  [IndustryType.ecommerce]: '🛒',
  [IndustryType.discountStores]: '🛒',
  [IndustryType.itSolution]: '🌐',
};
