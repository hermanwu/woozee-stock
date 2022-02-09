import { SiUnit } from './si-unit.enum';

/**
 * A map represents unit letters support by International System of Units (SI system)
 * that can be displayed for long digit numbers with more human readable format
 * Ordered by unit size.
 */
export const SiUnitSystem: Record<
  SiUnit,
  { valueInBaseUnit: number; displayUnit: string }
> = {
  [SiUnit.base]: {
    valueInBaseUnit: 1,
    displayUnit: '',
  },
  [SiUnit.thousand]: {
    valueInBaseUnit: 1000,
    displayUnit: 'K',
  },
  [SiUnit.million]: {
    valueInBaseUnit: 1000000,
    displayUnit: 'M',
  },
  [SiUnit.billion]: {
    valueInBaseUnit: 1000000000,
    displayUnit: 'B',
  },
  [SiUnit.trillion]: {
    valueInBaseUnit: 1000000000000,
    displayUnit: 'T',
  },
};
