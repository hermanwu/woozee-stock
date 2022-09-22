export enum RegionCode {
  us = 'US',
  ru = 'RU',
  eu = 'EU',
  cn = 'CN',
  global = 'Global',
}

export const Region = {
  [RegionCode.us]: {
    flag: '🇺🇸',
    code: 'US',
    name: 'United Stats',
  },
  [RegionCode.ru]: {
    flag: '🇷🇺',
    code: 'RU',
    name: 'Russia',
  },
  [RegionCode.cn]: {
    flag: '🇨🇳',
    code: 'CN',
    name: 'China',
  },
  [RegionCode.eu]: {
    flag: '🇪🇺',
    code: 'EU',
    name: 'Europe',
  },
  [RegionCode.global]: {
    flag: '🌎',
    code: 'Global',
    name: 'Global',
  },
};
