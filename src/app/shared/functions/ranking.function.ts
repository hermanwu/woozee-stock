import { cloneDeep } from './clone-deep';

export function sortPortoflioBasedOnRanking(
  portfolioStocks: string[],
  ranking: string[]
) {
  const map = new Set(portfolioStocks);
  const result = [];

  for (let stock of ranking) {
    if (map.has(stock)) {
      result.push(stock);
      map.delete(stock);
    }
  }

  result.push(...map.values());
  return result;
}

export function updateGlobalRankBasedOnPortfolio(
  sortedPortoflio: string[],
  globalRank: string[]
) {
  const map = new Set(sortedPortoflio);

  const indexToChange = [];
  for (let i = 0; i < globalRank.length; i++) {
    if (map.has(globalRank[i])) {
      indexToChange.push(i);
    }
  }

  const result = [...globalRank];

  for (let i = 0; i < indexToChange.length; i++) {
    result[indexToChange[i]] = sortedPortoflio[i];
  }

  // Add the remaining to global rank.
  result.push(...sortedPortoflio.slice(indexToChange.length));

  return result;
}

export function rankHigher(
  higher: string,
  item: string,
  inputRanks: string[]
): string[] {
  const ranks = cloneDeep(inputRanks);
  const itemIndex = ranks.indexOf(item);
  const higherIndex = ranks.indexOf(higher);

  if (itemIndex === -1 && higherIndex === -1) {
    ranks.push(higher, item);
    return ranks;
  }

  if (higherIndex === -1) {
    return ranks.splice(itemIndex, 0, higher);
  }

  if (itemIndex === -1) {
    ranks.push(item);
    return ranks;
  }

  if (higherIndex <= itemIndex) {
    return ranks;
  } else if (higherIndex > itemIndex) {
    ranks.splice(higherIndex, 1);
    ranks.splice(itemIndex, 0, higher);

    return ranks;
  }

  return ranks;
}

export function rankLower(
  lower: string,
  item: string,
  inputRanks: string[]
): string[] {
  const ranks = cloneDeep(inputRanks);
  const itemIndex = ranks.indexOf(item);
  const lowerIndex = ranks.indexOf(lower);

  if (itemIndex === -1 && lowerIndex === -1) {
    ranks.push(item, lower);
    return ranks;
  }

  if (itemIndex === -1) {
    return ranks.splice(lowerIndex, 0, item);
  }

  if (lowerIndex === -1) {
    ranks.push(lower);
    return ranks;
  }

  if (lowerIndex >= itemIndex) {
    return ranks;
  } else if (lowerIndex < itemIndex) {
    ranks.splice(lowerIndex, 1);
    ranks.splice(itemIndex, 0, lower);

    return ranks;
  }

  return ranks;
}
