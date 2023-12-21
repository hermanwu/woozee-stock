export const findPeopleByOrganizationUuid = (uuid: string) => {
  return people.filter((person) => {
    return person.titles?.some((title) => {
      return title.organizationUuid === uuid;
    });
  });
};

export const getPersonByUuid = (uuid: string) => {
  return people.find((person) => person.uuid === uuid);
};

export const getPeopleByPersonUuids = (uuids: string[]) => {
  return people.filter((person) => uuids.includes(person.uuid));
};

export const people = [
  {
    displayName: 'Alex Karp',
    uuid: 'alex-karp',
    titles: [
      {
        organizationUuid: 'pltr',
        names: ['CEO', 'Co-founder'],
      },
    ],
  },
  {
    displayName: 'William Li',
    uuid: 'william-li',
    titles: [
      {
        organizationUuid: 'nio',
        names: ['CEO', 'Founder'],
      },
    ],
  },
  {
    uuid: 'charmath',
    displayName: 'Chamath Palihapitiya',
    imageLink: 'https://i.ibb.co/JpcJ6Sy/Chamath-Palihapitiya-Portrait.jpg',
  },
  {
    uuid: 'tony-xu',
    displayName: 'Tony Xu',
    titles: [
      {
        organizationUuid: 'dash',
        names: ['CEO', 'Founder'],
      },
    ],
    links: [
      {
        name: 'Wikipedia',
        value: 'https://en.Wikipediapedia.org/Wikipedia/Tony_Xu',
      },
    ],
  },
  {
    uuid: 'brian-armstrong',
    displayName: 'Brian Armstrong',
    titles: [
      {
        organizationUuid: 'coin',
        names: ['CEO', 'Founder'],
      },
    ],
    links: [
      {
        name: 'Wikipedia',
        value:
          'https://en.Wikipediapedia.org/Wikipedia/Brian_Armstrong_(businessman)',
      },
    ],
  },

  {
    uuid: 'lixiang',
    displayName: 'Li Xiang',
    descriptions: [
      'Li Xiang is an entrepreneur with a background in the automotive and technology sectors. Before founding Li Auto, he was involved in other entrepreneurial ventures, including an auto-focused internet company. His experience in both the internet and automotive industries has contributed to the philosophy behind Li Auto, which emphasizes smart vehicles and advanced technologies.',
    ],
    titles: [
      {
        organizationUuid: 'li',
        names: ['CEO', 'Founder'],
      },
    ],
  },
  {
    uuid: 'bobIger',
    displayName: 'Bob Iger',
    organizationUuidTitles: [['dis', 'CEO']],
    imageLink:
      'https://i.postimg.cc/rmczfYsj/Screenshot-2023-02-08-at-2-07-51-PM.png',
  },
  {
    uuid: 'tobby-lutke',
    displayName: 'Tobby Lutke',
    titles: [
      {
        organizationUuid: 'shop',
        names: ['CEO', 'co-founder'],
      },
    ],
    links: [
      {
        name: 'Wikipedia',
        value: 'https://en.Wikipediapedia.org/Wikipedia/Tobias_L%C3%BCtke',
      },
    ],
  },
  {
    uuid: 'elon-musk',
    displayName: 'Elon Musk',
    titles: [
      {
        organizationUuid: 'tsla',
        names: ['CEO', 'Founder'],
      },
      {
        organizationUuid: 'spacex',
        names: ['Founder'],
      },
      {
        organizationUuid: 'x',
        names: ['CEO'],
      },
    ],
  },
  {
    uuid: '123',
    displayName: 'Tim Cook',
    organizationUuidTitles: [['aapl', 'CEO']],
    imageLink:
      'https://i.ibb.co/CJzQF3G/Screenshot-2023-02-06-at-5-15-45-PM.png',
  },
  {
    uuid: '1234',
    displayName: 'Janet Yellen',
    organizationUuidTitles: [
      ['UnitedStatesSecretaryOfTheTreasury', 'Secretary'],
    ],
    imageLink:
      'https://i.ibb.co/t4QBv4H/Screenshot-2023-02-06-at-7-16-34-PM.png',
  },
  {
    uuid: 'powell',
    displayName: 'Jerome Powell',
    organizationUuidTitles: [['FederalReserve', 'Chairman']],
    imageLink:
      'https://i.ibb.co/vZkxTYp/Screenshot-2023-02-07-at-1-06-29-PM.png',
  },
  {
    uuid: 'DaraKhosrowshahi',
    displayName: 'Dara Khosrowshahi',
    organizationUuidTitles: [['uber', 'CEO']],
    imageLink:
      'https://i.postimg.cc/cLq4MZhY/Screenshot-2023-02-08-at-5-33-11-PM.png',
  },
  {
    uuid: 'JensenHuang',
    displayName: 'Jensen Huang',
    organizationUuidTitles: [['nvidia', 'CEO']],
    imageLink:
      'https://i.ibb.co/P4LXKRP/Screenshot-2023-02-23-at-8-11-07-PM.png',
  },

  {
    uuid: 'AndyJassy',
    displayName: 'Andy Jassy',
    organizationUuidTitles: [['amazon', 'CEO']],
    imageLink: 'https://i.ibb.co/7CC4LLQ/andy-mug-1.jpg',
  },

  {
    uuid: 'jamiedimon',
    displayName: 'Jamie Dimon',
    imageLink:
      'https://i.ibb.co/zNjf0gn/Screenshot-2023-04-04-at-2-44-02-PM.png',
  },

  {
    uuid: 'reidhoffman',
    displayName: 'Reid Hoffman',
    imageLink:
      'https://i.ibb.co/XV448gg/Screenshot-2023-04-05-at-3-39-29-PM.png',
  },

  {
    uuid: 'cathiewood',
    displayName: 'Cathie Wood',
    imageLink: 'https://i.ibb.co/bXvQfFF/dv-Ug-Qkt8-400x400.jpg',
  },
  {
    uuid: 'geoffrey',
    displayName: 'Geoffrey Hinton',
    imageLink: 'https://i.ibb.co/bPgXKNy/f-QGCUSt0-400x400.jpg',
  },
  {
    uuid: 'kevinscott',
    displayName: 'Kevin Scott',
    imageLink: 'https://i.ibb.co/TB3KDTr/Kevin-Scott-bio-final.png',
  },

  {
    uuid: 'jennifer-doudna',
    displayName: 'Jennifer Doudna',
    description:
      'Jennifer Doudna is an American biochemist known for her pioneering work in the field of molecular biology, particularly for co-discovering the CRISPR-Cas9 gene-editing technology with French microbiologist Emmanuelle Charpentier. ',
  },
];
