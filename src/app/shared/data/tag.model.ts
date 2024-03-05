export enum TagType {
  People = 'People',
  Organization = 'Organization',
  Industry = 'Industry',
  Group = 'Group',
  PriceTarget = 'Price Target',
  Portfolio = 'Portfolio',
  Growth = 'Growth',
  Valuation = 'Valuation',
  Profitability = 'Profitability',
  InvestorFriendliness = 'Investor Friendliness',
  Moat = 'Moat',
  Trend = 'Trend',
  Earnings = 'Earnings',
}

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
    type: TagType.Industry,
    displayName: 'Online Gambling',
    sentiment: 1,
  },
  {
    uuid: 'proprietary-data',
    type: TagType.Moat,
    displayName: 'Proprietary Data',
    sentiment: 1,
  },
  {
    uuid: 'spatial-computing',
    type: TagType.Industry,
    displayName: 'Spatial Computing',
  },
  {
    uuid: 'crypto',
    type: TagType.Trend,
    displayName: 'Crypto',
    sentiment: 10,
    votes: 5,
  },
  {
    uuid: 'bad-earnings',
    type: TagType.Earnings,
    displayName: 'Earnings 👎',
    sentiment: -1,
    votes: 100,
  },
  {
    uuid: 'weapons',
    type: TagType.Industry,
    displayName: 'Weapons',
    sentiment: 1,
    votes: 1,
  },
  {
    uuid: 'no-differentiation',
    type: TagType.Moat,
    sentiment: -1,
    votes: 10,
    displayName: 'No Differentiation',
  },
  {
    uuid: 'cybersecurity',
    type: TagType.Trend,
    displayName: 'Cybersecurity',
    sentiment: 1,
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
    uuid: 'good-earnings',
    type: TagType.Earnings,
    displayName: 'Earnings 👍 ',
    votes: 5,
    sentiment: 1,
  },
  {
    uuid: 'magnificent-7',
    type: TagType.Group,
    displayName: 'Magnificent 7',
    sentiment: 0,
  },
  {
    uuid: 'share-buyback',
    type: TagType.InvestorFriendliness,
    displayName: 'Share Buyback',
  },
  {
    uuid: 'dividend',
    type: TagType.InvestorFriendliness,
    displayName: 'Dividend',
  },
  {
    uuid: '40-operating-margin',
    type: TagType.Profitability,
    displayName: '40% Operating Margin',
  },
  {
    uuid: '35-net-margin',
    type: TagType.Profitability,
    displayName: '35% Net Margin',
  },
  {
    uuid: '20-growth',
    type: TagType.Growth,
    displayName: '20% Growth',
  },
  {
    uuid: '25-growth',
    type: TagType.Growth,
    displayName: '25% Growth',
  },
  {
    uuid: '10-growth',
    type: TagType.Growth,
    displayName: '10% Growth',
  },
  {
    uuid: '20-margin',
    type: TagType.Profitability,
    displayName: '20% Net Margin',
  },
  {
    uuid: '30-net-margin',
    type: TagType.Profitability,
    displayName: '30% Net Margin',
  },
  {
    uuid: '10-margin',
    type: TagType.Profitability,
    displayName: '10% Net Margin',
  },
  {
    uuid: 'semiconductor',
    type: TagType.Industry,
    displayName: '⚡ Semiconductor',
  },
  {
    uuid: 'boa-herman',
    type: TagType.Portfolio,
    displayName: 'Portfolio BOA',
    color: 'gray',
  },
  {
    uuid: 'citi-herman',
    type: TagType.Portfolio,
    displayName: 'High Potential ETFs',
  },
  {
    uuid: 'interactive-broker',
    type: TagType.Portfolio,
    displayName: 'Portfolio IBKR',
    color: 'gray',
  },
  {
    uuid: 'jess-robinhood',
    type: TagType.Portfolio,
    displayName: 'Portfolio Large',
    color: 'gray',
  },
  {
    uuid: 'herman-robinhood',
    type: TagType.Portfolio,
    displayName: 'Portfolio Small',
    color: 'gray',
  },
  {
    uuid: 'talented-employees',
    type: TagType.People,
    displayName: 'Talented Employees',
    color: 'purple',
  },
  {
    uuid: '10x',
    type: TagType.PriceTarget,
    displayName: '10x',
  },
  {
    uuid: 'competitive-advantages',
    type: TagType.Organization,
    displayName: 'Competitive Advantages',
  },
  {
    uuid: 'founder-led',
    type: TagType.Organization,
    displayName: 'Founder Led',
  },
  {
    uuid: 'excellent-ceo',
    type: TagType.Organization,
    displayName: 'Great CEO',
  },
  {
    uuid: 'gen-ai',
    type: TagType.Industry,
    sentiment: 1,
    votes: 10,
    displayName: '🤖 Generative AI',
  },
  {
    uuid: 'weight-loss',
    type: TagType.Trend,
    sentiment: 1,
    votes: 5,
    displayName: 'Weight Loss',
  },
];

export const getTagByUuid = (uuid: string): Tag => {
  return mockTags.find((tag) => tag.uuid === uuid);
};

export const getTagsByUuids = (uuids: string[]): Tag[] => {
  return mockTags.filter((tag) => uuids.includes(tag.uuid));
};
