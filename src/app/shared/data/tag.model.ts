export enum TagType {
  People = 'People',
  Trend = 'Trend',
  Business = 'Business',
  Fundamental = 'Fundamental',
  Technical = 'Technical',
}

export const getAllTags = () => {
  return mockTags;
};

export interface Tag {
  uuid: string;
  type?: TagType;
  displayName: string;
  imageLink?: string;
  link?: string;
  ticker?: string;
  totalVotes?: number;
  entityUuids?: string[];
  color?: string;
  value?: number;
  votes?: number;
  sentiment?: number;
}

export const mockTags: Tag[] = [
  {
    uuid: 'online-gambling',
    type: TagType.Trend,
    displayName: 'Online Gambling',
    sentiment: 1,
  },
  {
    displayName: 'High Switching Costs',
    uuid: 'high-switching-costs',
    type: TagType.Business,
    votes: 1,
  },
  {
    displayName: 'Undervalued',
    uuid: 'undervalued',
    type: TagType.Fundamental,
    votes: 50,
  },
  {
    uuid: 'proprietary-data',
    type: TagType.Business,
    displayName: 'Proprietary Data',
    sentiment: 1,
  },
  {
    uuid: 'spatial-computing',
    type: TagType.Trend,
    displayName: 'Spatial Computing',
  },
  {
    uuid: 'crypto',
    type: TagType.Trend,
    displayName: 'Crypto',
    sentiment: 10,
    votes: 50,
  },
  {
    uuid: 'do-it-yourself',
    type: TagType.Trend,
    displayName: 'Do it Yourself',
    votes: 1,
  },
  {
    uuid: 'weapons',
    type: TagType.Business,
    displayName: 'Weapons',
    sentiment: 1,
    votes: 5,
  },
  {
    uuid: 'hyperscaler',
    type: TagType.Trend,
    displayName: 'Hyperscaler (Cloud Service Provider)',
    votes: 60,
  },
  {
    uuid: 'no-differentiation',
    type: TagType.Business,
    sentiment: -1,
    votes: -5,
    displayName: 'No Differentiation',
  },
  {
    uuid: 'cybersecurity',
    type: TagType.Trend,
    displayName: 'Cybersecurity',
    sentiment: 1,
  },
  {
    uuid: 'raised-guidance',
    type: TagType.Business,
    displayName: 'Raised Guidance',
    sentiment: 1,
  },
  {
    uuid: 'ev',
    type: TagType.Trend,
    displayName: 'EV',
    sentiment: -1,
    votes: -1,
  },
  {
    uuid: 'live-sports',
    type: TagType.Trend,
    displayName: 'Live Sports',
    sentiment: 1,
    votes: 3,
  },
  {
    uuid: 'travel',
    type: TagType.Trend,
    displayName: 'Travel',
    sentiment: 1,
    votes: 5,
  },
  {
    uuid: 'china',
    type: TagType.Trend,
    displayName: 'China',
    votes: -1,
  },
  {
    uuid: 'discounting store',
    type: TagType.Trend,
    displayName: 'Discounting Store',
    votes: -1,
  },
  {
    uuid: 'retail',
    type: TagType.Trend,
    displayName: 'Retail',
    sentiment: 1,
    votes: 0,
  },
  {
    uuid: 'homebuilders',
    type: TagType.Trend,
    displayName: 'Homebuilders',
    votes: 0,
  },
  {
    uuid: 'ecommerce',
    type: TagType.Trend,
    displayName: 'Ecommerce',
    sentiment: 1,
    votes: 0,
  },
  {
    uuid: 'magnificent-7',
    type: TagType.Trend,
    displayName: 'Magnificent 7',
    sentiment: 0,
  },
  {
    uuid: 'share-buyback',
    type: TagType.Business,
    displayName: 'Share Buyback',
  },
  {
    uuid: 'dividend',
    type: TagType.Business,
    displayName: 'Dividend',
  },
  {
    uuid: 'semiconductor',
    type: TagType.Trend,
    displayName: '⚡ Semiconductor',
  },
  {
    uuid: 'talented-employees',
    type: TagType.People,
    displayName: 'Talented Employees',
    color: 'purple',
  },
  {
    uuid: 'competitive-advantages',
    type: TagType.Business,
    displayName: 'Competitive Advantages',
  },
  {
    uuid: 'founder-led',
    type: TagType.Business,
    displayName: 'Founder Led',
  },
  {
    uuid: 'excellent-ceo',
    type: TagType.Business,
    displayName: 'Great CEO',
  },

  {
    uuid: 'losing-money',
    type: TagType.Business,
    displayName: 'Losing Money',
    votes: -1,
  },
  {
    uuid: 'gen-ai',
    type: TagType.Trend,
    sentiment: 1,
    votes: 50,
    displayName: 'Generative AI 🤖 ',
  },
  {
    uuid: 'accelerating-growth',
    type: TagType.Business,
    votes: 5,
    displayName: 'Accelerating Growth',
  },
  {
    uuid: 'datacenter',
    type: TagType.Trend,
    displayName: 'Datacenter',
    votes: 70,
  },
  {
    uuid: 'unpredictable',
    type: TagType.Business,
    votes: -1,
    displayName: 'Unpredictable',
  },
  {
    displayName: 'Regulatory Advantages',
    uuid: 'regulatory-advantages',
    type: TagType.Business,
    votes: 1,
  },

  {
    displayName: 'Network Effects',
    uuid: 'network-effects',
    type: TagType.Business,
    votes: 1,
  },
  {
    uuid: 'decelerating-growth',
    type: TagType.Business,
    votes: -5,
    displayName: 'Decelerating Growth',
  },
  {
    uuid: 'decreasing-revenue',
    type: TagType.Business,
    votes: -5,
    displayName: 'Decreasing Revenue',
  },
  {
    uuid: 'weight-loss',
    type: TagType.Trend,
    sentiment: 1,
    votes: 50,
    displayName: 'Weight Loss',
  },
];

export const getTagByUuid = (uuid: string): Tag => {
  return mockTags.find((tag) => tag.uuid === uuid);
};

export const getTagsByUuids = (uuids: string[]): Tag[] => {
  return mockTags.filter((tag) => uuids.includes(tag.uuid));
};
