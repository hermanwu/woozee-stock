export interface Topic {
  uuid: string;
  displayName: string;
  imageLink: string;
}

export const topics: Topic[] = [
  {
    uuid: 'banking',
    displayName: 'Banks',
    imageLink:
      'https://i.ibb.co/K5sP2f5/Screenshot-2023-04-04-at-2-45-15-PM.png',
  },
  {
    uuid: 'crypto',
    displayName: 'Cryptocurrencies',
    imageLink: '',
  },
  {
    uuid: 'ai-group',
    displayName: 'Artificial Intelligence',
    imageLink: '',
  },
  {
    uuid: 'job-market',
    displayName: 'Job Market',
    imageLink:
      'https://i.ibb.co/HC6pC0v/Screenshot-2023-04-04-at-1-28-47-PM.png',
  },
];
