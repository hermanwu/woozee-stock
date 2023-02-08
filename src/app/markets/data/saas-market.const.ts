import { BILLION } from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { Industry } from 'src/app/stock/models/industry.model';

export const saas: Industry = {
  type: IndustryType.saas,
  size: 130.69 * BILLION,
  growthRate: 0.275,
};
