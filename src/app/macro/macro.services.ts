import { Injectable } from '@angular/core';

export enum Rating {
  BULL = 'Bull',
  BEAR = 'Bear',
}

export enum Term {
  short = 'Short Term',
  long = 'Long term',
}

export enum Region {
  US = 'United States',
  Europe = 'Europe',
  China = 'China',
  Russia = 'Russia',
  Global = 'Global',
}

export const opinions = [
  {
    title: 'US companies are laying off employees',
    tags: ['job market'],
    type: Rating.BEAR,
    regions: [Region.US],
    content: [
      'Companies that has been announced layoff: Snap (20%), Carvana - 12%, Netflix, Robinhood (30%), Goldman Sach - 10%, Shopify - 10%, Twilio - 10%',
    ],
  },
  {
    title: 'US consumer spending decreases',
    tags: ['consumer spending'],
    type: Rating.BEAR,
    regions: [Region.US],
  },
  {
    title: 'Labor Shortage',
    type: Rating.BEAR,
    tags: ['labor shortage'],
    regions: [Region.US],
  },
  {
    title: 'Fed rate increases could potentially cause recession.',
    type: Rating.BEAR,
    tags: ['Fed Rate'],
    regions: [Region.US],
  },
  {
    title: 'Russian-Ukraine war',
    type: Rating.BEAR,
    tags: ['war'],
    regions: [Region.Russia, Region.Europe],
  },
  {
    title: 'COVID',
    type: Rating.BEAR,
    tags: ['covid'],
    regions: [Region.China],
  },
  {
    title: 'Inflation is very high.',
    type: Rating.BEAR,
    tags: ['inflation', 'CPI'],
    regions: [Region.Global],
  },
];
@Injectable({
  providedIn: 'root',
})
export class MacroServices {
  getMacros() {
    return opinions;
  }
}
