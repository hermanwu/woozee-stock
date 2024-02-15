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
  Bullish = 'Bullish',
  Bearish = 'Bearish',
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
    uuid: 'proprietary-data',
    type: TagType.Industry,
    displayName: 'Proprietary Data',
  },
  {
    uuid: 'spatial-computing',
    type: TagType.Industry,
    displayName: 'Spatial Computing',
  },
  {
    uuid: 'bad-earnings',
    type: TagType.Bearish,
    displayName: '👎 Earnings',
    sentiment: -1,
  },
  {
    uuid: 'worse-earnings',
    type: TagType.Bearish,
    displayName: '👎👎 Earnings',
  },
  {
    uuid: 'worst-earnings',
    type: TagType.Bearish,
    displayName: '👎👎👎 Earnings',
  },
  {
    uuid: 'better-earnings',
    type: TagType.Bullish,
    displayName: '👍👍 Earnings',
    color: 'lime',
    votes: 100,
  },
  {
    uuid: 'good-earnings',
    type: TagType.Bullish,
    displayName: '👍 Earnings',
    votes: 5,
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
    displayName: 'Generative AI',
  },
];

export const getTagByUuid = (uuid: string): Tag => {
  return mockTags.find((tag) => tag.uuid === uuid);
};
