import { cloneDeep } from './clone-deep';

export enum SortingType {
  stringSorting = 'String',
  numberSorting = 'Number',
  booleanSorting = 'Boolean',
}

export interface SortingCriterion {
  isDescending?: boolean;
  propertyName?: string;
  sortingFunction?: any;
}

export function sort<T>(arr: T[]): T[] {
  return arr;
}

export function sortByCatalystRiskDifference(
  items: { riskUuids?: string[]; catalystUuids?: string[] }[]
): any[] {
  const itemCopy = cloneDeep(items);

  return itemCopy.sort((a, b) => {
    const aRiskCount = a?.riskUuids?.length > 0 ? a.riskUuids.length : 0;
    const aCatalystCount =
      a?.catalystUuids?.length > 0 ? a.catalystUuids.length : 0;
    const aDiff = aCatalystCount - aRiskCount;

    const bRiskCount = b?.riskUuids?.length > 0 ? b.riskUuids.length : 0;
    const bCatalystCount =
      b?.catalystUuids?.length > 0 ? b.catalystUuids.length : 0;
    const bDiff = bCatalystCount - bRiskCount;

    return bDiff - aDiff;
  });
}
