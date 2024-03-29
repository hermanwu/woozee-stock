import { BILLION, TRILLION } from '../shared/numbers/number.model';

export const prices = {
  'sq:nyse': {
    price: 190.6,
    marketCap: 87.21 * BILLION,
  },
  'now:nyse': {
    price: 779.49,
    marketCap: 152.5 * BILLION,
  },
  'lly:nyse': {
    price: 760.73,
    marketCap: 716.59 * BILLION,
  },
  'duol:nasdaq': {
    price: 228.24,
    marketCap: 9.27 * BILLION,
  },
  'smci:nasdaq': {
    price: 1130.11,
    marketCap: 59.78 * BILLION,
  },
  'meta:nasdaq': {
    price: 491.83,
    marketCap: 1.23 * TRILLION,
  },
  'avav:nasdaq': {
    price: 158.1,
    marketCap: 4.19 * BILLION,
  },
  'estc:nyse': {
    price: 103.02,
    marketCap: 10.17 * BILLION,
  },

  'zs:nasdaq': {
    price: 198.83,
    marketCap: 29.16 * BILLION,
  },
  's:nyse': {
    price: 23.29,
    marketCap: 6.96 * BILLION,
  },
  'gtlb:nasdaq': {
    price: 54.77,
    marketCap: 8.47 * BILLION,
  },
  'app:nasdaq': {
    price: 63.19,
    marketCap: 21.76 * BILLION,
  },
  'tsla:nasdaq': {
    price: 162.5,
    marketCap: 513.34 * BILLION,
  },
  'nvda:nasdaq': {
    price: 919.13,
    marketCap: 2.3 * TRILLION,
  },
  'adbe:nasdaq': {
    price: 573.55,
    marketCap: 258.15 * BILLION,
  },
  'dks:nyse': {
    price: 187.76,
    marketCap: 17.72 * BILLION,
  },
  'msft:nasdaq': {
    price: 415.1,
    marketCap: 3.16 * TRILLION,
  },
  'amzn:nasdaq': {
    price: 176.56,
    marketCap: 1.86 * TRILLION,
  },
  'smar:nyse': {
    price: 40.3,
    marketCap: 5.49 * BILLION,
  },
  'crwd:nasdaq': {
    price: 328.59,
    marketCap: 79.48 * BILLION,
  },
  'coin:nasdaq': {
    price: 233.67,
    marketCap: 56.81 * BILLION,
  },
  'hood:nasdaq': {
    price: 18.5,
    marketCap: 15.69 * BILLION,
  },

  'googl:nasdaq': {
    price: 143.1,
    marketCap: 1.76 * TRILLION,
  },
  'aapl:nasdaq': {
    price: 147.1,
    marketCap: 2.46 * TRILLION,
  },
  'shop:nyse': {
    price: 78.42,
    marketCap: 98.38 * BILLION,
  },
  'axon:nasdaq': {
    price: 306.43,
    marketCap: 23.17 * BILLION,
  },
  'tsm:nyse': {
    price: 136.43,
    marketCap: 634.24 * BILLION,
  },
  'pltr:nyse': {
    price: 23.49,
    marketCap: 51.95 * BILLION,
  },
  'net:nyse': {
    price: 91.6,
    marketCap: 30.93 * BILLION,
  },
  'nflx:nasdaq': {
    price: 605.88,
    marketCap: 262.08 * BILLION,
  },
  'anf:nyse': {
    price: 125.89,
    marketCap: 6.35 * BILLION,
  },
  'amd:nasdaq': {
    price: 191.06,
    marketCap: 308.1 * BILLION,
  },
  'cost:nasdaq': {
    price: 725.63,
    marketCap: 321.62 * BILLION,
  },
  'crm:nyse': {
    price: 294.33,
    marketCap: 284.91 * BILLION,
  },
  'twlo:nyse': {
    price: 59.65,
    marketCap: 10.86 * BILLION,
  },
  'anet:nyse': {
    price: 277.71,
    marketCap: 86.83 * BILLION,
  },
  'uber:nyse': {
    price: 76.05,
    marketCap: 157.27 * BILLION,
  },
  'wsm:nyse': {
    price: 283.77,
    marketCap: 18.39 * BILLION,
  },
  'tme:nyse': {
    price: 10.33,
    marketCap: 17.81 * BILLION,
  },
  'xpev:nyse': {
    price: 9.64,
    marketCap: 9.26 * BILLION,
  },
  'pdd:nasdaq': {
    price: 123.74,
    marketCap: 171.0 * BILLION,
  },
  'mdb:nasdaq': {
    price: 355.44,
    marketCap: 25.92 * BILLION,
  },
  'intu:nasdaq': {
    price: 625.52,
    marketCap: 176.5 * BILLION,
  },
};

export const getPricesByUuid = (uuid: string) => {
  return prices[uuid];
};
