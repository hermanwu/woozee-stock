import { PriceRange } from 'src/app/shared/components/stats-display/stats-display.interface';
import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';

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
    tradableUuid: 'ADBE:NASDAQ',
    low: 465,
    high: 705,
    average: 648,
    updatedDate: getUtcDate(2024, 3, 14),
  },
  {
    tradableUuid: 'PD:NYSE',
    low: 20,
    average: 25,
    high: 31,
    updatedDate: getUtcDate(2024, 3, 14),
  },
  {
    tradableUuid: 'ULTA:NASDAQ',
    low: 500,
    average: 598,
    high: 690,
    updatedDate: getUtcDate(2024, 3, 14),
  },
  {
    tradableUuid: 'DLTR:NASDAQ',
    low: 149,
    average: 163,
    high: 180,
    updatedDate: getUtcDate(2023, 11, 29),
  },
  {
    tradableUuid: 'WSM:NYSE',
    low: 195,
    average: 243,
    high: 280,
    updatedDate: getUtcDate(2024, 3, 11),
  },
  {
    tradableUuid: 'CASY:NASDAQ',
    low: 263,
    average: 313,
    high: 345,
    updatedDate: getUtcDate(2024, 3, 11),
  },
  {
    tradableUuid: 'ASAN:NYSE',
    low: 18,
    average: 20.5,
    high: 25,
    updatedDate: getUtcDate(2024, 3, 11),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'WMT:NYSE',
    low: 59,
    average: 85,
    high: 228,
    updatedDate: getUtcDate(2024, 3, 8),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'TSLA:NASDAQ',
    low: 250,
    average: 350,
    high: 500,
    updatedDate: getUtcDate(2024, 3, 8),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'INTU:NASDAQ',
    low: 582,
    average: 705,
    high: 775,
    updatedDate: getUtcDate(2024, 3, 8),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'AMZN:NASDAQ',
    low: 175,
    average: 208,
    high: 230,
    updatedDate: getUtcDate(2024, 3, 8),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'AVGO:NASDAQ',
    low: 1000,
    average: 1310,
    high: 1550,
    updatedDate: getUtcDate(2024, 3, 1),
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'COST:NASDAQ',
    low: 601,
    average: 729,
    high: 825,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'MDB:NASDAQ',
    low: 272,
    average: 473,
    high: 555,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'LLY:NYSE',
    low: 610,
    average: 822,
    high: 1000,
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    tradableUuid: 'PLTR:NYSE',
    low: 5,
    average: 18,
    high: 30,
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
