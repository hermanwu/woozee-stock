import { Injectable } from '@angular/core';
import { Catalyst } from 'src/app/shared/models/booster.interface';
import { catalysts } from '../data/catalyst.mock';

@Injectable({
  providedIn: 'root',
})
export class CatalystService {
  catalysts: Catalyst[];

  constructor() {
    this.catalysts = catalysts;
  }

  getCatalystByUuids(uuids: string[]): Catalyst[] {
    if (uuids && uuids.length > 0) {
      return this.catalysts.filter(
        (catalyst) => uuids.indexOf(catalyst.uuid) >= 0
      );
    }
  }
}
