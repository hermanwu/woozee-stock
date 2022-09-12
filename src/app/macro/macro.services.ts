import { Injectable } from '@angular/core';
import { MacroType, Region } from './macro.enum';

@Injectable({
  providedIn: 'root',
})
export class MacroServices {
  getMacros() {
    return [
      {
        type: MacroType.inflation,
      },
      {
        type: MacroType.fed,
      },
      {
        type: MacroType.housing,
      },
      {
        type: MacroType.gold,
      },
    ];
  }

  getRegions() {
    return [
      {
        type: Region.china,
      },
      {
        type: Region.russian,
      },
      {
        type: Region.us,
      },
    ];
  }
}
