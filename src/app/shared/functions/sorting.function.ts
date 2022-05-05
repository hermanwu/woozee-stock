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
