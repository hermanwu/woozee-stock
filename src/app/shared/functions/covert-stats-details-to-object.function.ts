import { Composition } from 'src/app/stock/models/composition.model';

export function convertStatsDetailsToObject(detailsList: Composition[]) {
  // console.log(detailsList);
  if (detailsList && detailsList.length > 0) {
    const result = {};

    for (let composition of detailsList) {
      const nameConcat = composition.name.split(' ').join('');
      result[nameConcat] = {
        name: composition.name,
        value: composition.value,
        growth: composition.growth,
        details: convertStatsDetailsToObject(composition.details),
      };
    }

    return result;
  }
}
