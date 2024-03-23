import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

export interface Industry {
  uuid?: string;
  name?: string;
  displayName?: string;
  type: IndustryType;
  size?: number;
  growthRate?: number;
  children?: Industry[];
  tickers?: Set<string>;
  riskUuids?: string[];
  catalystUuids?: string[];
  rank?: number;
  logoLink?: string;
}

export const getIndustriesByUuids = (uuids: string[]): any[] => {
  return industries.filter((industry) => uuids.includes(industry.uuid));
};

export const industries = [
  {
    name: 'Transaction Processing',
    uuid: 'transaction-processing',
    type: 'industry',
  },
  {
    name: 'Snack',
    uuid: 'snack',
    type: 'industry',
  },
  {
    name: 'Athletic Apparel',
    uuid: 'athletic-apparel',
    type: 'industry',
  },
  {
    name: 'Consulting',
    uuid: 'consulting',
    type: 'industry',
  },
  {
    name: 'Pets Supplies',
    uuid: 'pets-supplies',
    type: 'industry',
  },
  {
    name: 'Online Marketing',
    uuid: 'online-marketing',
    type: 'industry',
  },
  {
    name: 'Agriculture',
    uuid: 'agriculture',
    type: 'industry',
  },
  {
    name: 'e-commerce',
    uuid: 'e-commerce',
    type: 'industry',
  },
  {
    name: 'music streaming',
    uuid: 'music-streaming',
    type: 'industry',
  },
];
