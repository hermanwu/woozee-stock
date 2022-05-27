import { MarketType } from 'src/app/facts/data/area.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { Market } from 'src/app/stock/models/market.models';

export const beautyCatalysts: Catalyst[] = [
  {
    uuid: 'beauty-c-1',
    content: 'Post-COVID encourages more in-person activities and travel',
  },
  {
    uuid: 'beauty-c-2',
    content: 'People are valuing more experiential spending',
  },
];

export const beautyAndCosmeticsMarket: Market = {
  type: MarketType.beauty,
  catalystUuids: beautyCatalysts.map((c) => c.uuid),
};
