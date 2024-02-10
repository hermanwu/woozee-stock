import { getUtcDate } from '../shared/functions/getUtcDate.function';

export const events = [
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 15),
    targetUuids: [
      'YETI:NYSE',
      'DKNG:NASDAQ',
      'COIN:NASDAQ',
      'ROKU:NASDAQ',
      'TTD:NASDAQ',
      'DASH:NYSE',
    ],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 14),
    targetUuids: ['TWLO:NYSE', 'APP:NASDAQ', 'FSLY:NYSE'],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 13),
    targetUuids: [
      'SHOP:NYSE',
      'DDOG:NASDAQ',
      'UPST:NASDAQ',
      'ABNB:NASDAQ',
      'HOOD:NASDAQ',
      'LYFT:NASDAQ',
      'ZG:NASDAQ',
      'CART:NASDAQ',
    ],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 12),
    targetUuids: ['ANET:NYSE', 'CDNS:NASDAQ'],
  },
];
