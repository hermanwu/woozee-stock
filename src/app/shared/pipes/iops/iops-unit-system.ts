import { IopsUnit } from './iops-unit.enum';

/**
 * A map represents all the iops units.
 * Ordered by unit size.
 */
export const IopsUnitSystem: Record<
  IopsUnit,
  { valueInBaseUnit: number; displayUnit: string }
> = {
  [IopsUnit.base]: {
    valueInBaseUnit: 1,
    displayUnit: '',
  },
  [IopsUnit.thousand]: {
    valueInBaseUnit: 1000,
    displayUnit: 'K',
  },
  [IopsUnit.million]: {
    valueInBaseUnit: 1000000,
    displayUnit: 'M',
  },
  [IopsUnit.billion]: {
    valueInBaseUnit: 1000000000,
    displayUnit: 'B',
  },
  [IopsUnit.trillion]: {
    valueInBaseUnit: 1000000000000,
    displayUnit: 'T',
  },
};
