export const getListByUuids = (uuids: string[]) => {
  return mockLists.filter((list) => uuids.includes(list.uuid));
};

export const mockLists = [
  {
    uuid: 'experienced-ceo',
    name: 'Experienced CEO',
  },
  {
    uuid: 'growth-market',
    name: 'Growth Market',
  },
  {
    uuid: 'saturated-market',
    name: 'Saturated Market',
  },
  {
    uuid: 'founder-led',
    name: 'Founder Led',
  },
  {
    uuid: 'engineer-founder',
    name: 'Engineer Founder',
  },
  {
    uuid: 'talented-employees',
    name: 'Talented Employees',
  },
  {
    uuid: 'friends-working-there',
    name: 'Friends Working There',
  },
  {
    uuid: 'monopoly-product',
    name: 'Monopoly Product',
  },
];
