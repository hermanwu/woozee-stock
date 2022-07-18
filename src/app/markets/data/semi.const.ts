import { IndustryType } from 'src/app/facts/data/area.enum';
import { Catalyst } from 'src/app/shared/models/booster.interface';

export const semiconductorCatalysts: Catalyst[] = [
  {
    uuid: 'mrsemi-1',
    name: 'EV driven chip demands.',
  },
];

export const semiconductorMarket = {
  type: IndustryType.semi,
  catalystUuids: semiconductorCatalysts.map((c) => c.uuid),
};
