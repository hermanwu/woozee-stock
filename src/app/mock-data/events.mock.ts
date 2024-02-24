import { getUtcDate } from '../shared/functions/getUtcDate.function';

export const events = [
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 3, 14),
    targetUuids: ['ADBE:NASDAQ'],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 3, 7),
    targetUuids: ['AVGO:NASDAQ', 'COST:NASDAQ', 'MRVL:NASDAQ'],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 3, 5),
    targetUuids: ['CRWD:NASDAQ', 'TGT:NYSE'],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 3, 1),
    targetUuids: ['PLUG:NASDAQ', 'FUBO:NYSE'],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 29),
    targetUuids: [
      'estc:NYSE',
      'celh:NASDAQ',
      'bby:NYSE',
      'zs:NASDAQ',
      'adsk:NASDAQ',
      'hpe:NYSE',
      'dell:NYSE',
      'BUD:NYSE',
    ],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 28),
    targetUuids: [
      'snow:NYSE',
      'crm:NYSE',
      'mara:NASDAQ',
      'aap:NASDAQ',
      'AMC:NYSE',
      'ai:NYSE',
      'ionq:NYSE',
      'bidu:NASDAQ',
      'nvax:NASDAQ',
      'okta:NASDAQ',
      'duol:NASDAQ',
      'TJX:NYSE',
    ],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 27),
    targetUuids: [
      'LOW:NYSE',
      'LMND:NASDAQ',
      'AZO:NYSE',
      'FSLR:NASDAQ',
      'CAVA:NYSE',
      'AMT:NYSE',
    ],
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    type: 'earnings',
    date: getUtcDate(2024, 2, 26),
    targetUuids: [
      'li:NASDAQ',
      'dpz:NYSE',
      'u:NYSE',
      'zm:NASDAQ',
      'wday:NASDAQ',
    ],
  },
];
