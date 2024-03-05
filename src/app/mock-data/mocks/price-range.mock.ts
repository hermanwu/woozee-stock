import { PriceRange } from 'src/app/shared/components/stats-display/stats-display.interface';

export const getPriceRangeByTradableUuid = (uuid): PriceRange => {
  const mock = priceRangeMock.find(
    (priceRange) => priceRange.tradableUuid.toLowerCase() === uuid.toLowerCase()
  );

  if (!mock) {
    return null;
  }

  return {
    low: mock?.low,
    average: mock?.average,
    high: mock?.high,
  };
};

export const priceRangeMock = [
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'PLTR:NYSE',
    low: 5,
    average: 18,
    high: 30,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'CRWD:NASDAQ',
    low: 270,
    average: 330,
    high: 385,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'AXON:NASDAQ',
    low: 285,
    average: 312,
    high: 330,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'ZS:NASDAQ',
    low: 214,
    average: 261,
    high: 310,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'NOW:NYSE',
    low: 750,
    average: 851,
    high: 910,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'SQ:NYSE',
    low: 62,
    average: 91,
    high: 100,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'SHOP:NYSE',
    low: 63,
    average: 82,
    high: 100,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'DUOL:NASDAQ',
    low: 190,
    average: 245,
    high: 282,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'CRM:NYSE',
    low: 212,
    average: 330,
    high: 380,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'DASH:NASDAQ',
    low: 96,
    average: 127.6,
    high: 152,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'SNOW:NYSE',
    low: 160,
    average: 224,
    high: 265,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'COIN:NASDAQ',
    low: 75,
    average: 168,
    high: 250,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'NVDA:NASDAQ',
    low: 575,
    average: 870,
    high: 1200,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'SMCI:NASDAQ',
    low: 160,
    average: 810,
    high: 1300,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'TSM:NYSE',
    low: 125,
    average: 140,
    high: 185,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'AMD:NASDAQ',
    low: 140,
    average: 197,
    high: 270,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'ARM:NASDAQ',
    low: 72,
    average: 100,
    high: 130,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'APP:NASDAQ',
    low: 38,
    average: 64,
    high: 88,
  },
];
