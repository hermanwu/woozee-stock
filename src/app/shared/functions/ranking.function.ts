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
