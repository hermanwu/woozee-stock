import { cloneDeep } from './clone-deep';

export const millSecondsInADay = 24 * 60 * 60 * 1000;

export enum InputType {
  time = 'time',
}

/**
 *
 * @param items
 * @param propertyName
 * @param type
 * @param filterValue Filtered value.
 * @returns
 */
export function filter(
  items: any,
  propertyName: string,
  type: InputType,
  filterValue: string
) {
  const copy = cloneDeep(items);
  switch (type) {
    case InputType.time:
      switch (filterValue) {
        case 'today':
          items = items.filter(
            (item) =>
              new Date().getTime() - item[propertyName].getTime() <
              millSecondsInADay
          );
      }
  }

  return items;
}
