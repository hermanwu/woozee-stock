import { IndustryType } from 'src/app/facts/data/area.enum';
import { Risk } from 'src/app/risks/models/risk.model';

export const foodDeliveryRisks: Risk[] = [
  {
    uuid: 'mrfd-1',
    content: 'Post pandemics decreases the demand for food delivery',
  },
];

export const foodDeliveryMarket = {
  type: IndustryType.foodDelivery,
  riskUuids: ['mrfd-1'],
};
