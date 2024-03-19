export const getRelationshipsByStartNodeUuid = (uuid: string) => {
  return relationships.filter(
    (relationship) => relationship.startNodeUuid === uuid
  );
};

export const getCompetitorsByTradableUuid = (uuid: string) => {
  uuid = uuid.toLowerCase();
  const competitorRelationships = relationships.filter(
    (relationship) =>
      (relationship.startNodeUuid.toLowerCase() === uuid ||
        relationship.endNodeUuid.toLowerCase() === uuid) &&
      relationship.relationship === 'competitor'
  );
  const resultUuids = new Set();
  competitorRelationships.forEach((relationship) => {
    if (relationship.startNodeUuid === uuid) {
      resultUuids.add(relationship.endNodeUuid);
    } else {
      resultUuids.add(relationship.startNodeUuid);
    }
  });
  return Array.from(resultUuids);
};

export const getIndustriesByOrganizationUuid = (uuid: string) => {
  return relationships
    .filter(
      (relationship) =>
        relationship.startNodeUuid === uuid &&
        relationship.endNodeType === 'industry'
    )
    .map((relationship) => relationship.endNodeUuid);
};

export class Relationship {
  uuid?: string;
  startNodeUuid: string;
  startNodeType: string;
  endNodeUuid: string;
  endNodeType: string;
  relationship?: string;
  directionDescriptions?: string[];
}

export const relationships: Relationship[] = [
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'abnb',
    startNodeType: 'organization',
    endNodeUuid: 'accommodations-booking',
    endNodeType: 'product',
  },
  {
    uuid: 'e9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'cdns',
    startNodeType: 'organization',
    endNodeUuid: 'eda',
    endNodeType: 'product',
  },
  {
    startNodeUuid: 'orcl:nyse',
    startNodeType: 'tradable',
    endNodeUuid: 'msft:nasdaq',
    endNodeType: 'tradable',
    relationship: 'competitor',
  },
  {
    uuid: 'b9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'unity',
    startNodeType: 'organization',
    endNodeUuid: 'vr-ar',
    endNodeType: 'product',
  },
  {
    startNodeUuid: 'avav',
    startNodeType: 'organization',
    endNodeUuid: 'loitering-munition-systems',
    endNodeType: 'product',
  },
  {
    uuid: 'b9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'unity',
    startNodeType: 'organization',
    endNodeUuid: 'gaming',
    endNodeType: 'product',
  },
  {
    uuid: 'b9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'anet',
    startNodeType: 'organization',
    endNodeUuid: 'ai-networking',
    endNodeType: 'product',
  },
  {
    uuid: 'b9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'tme',
    startNodeType: 'organization',
    endNodeUuid: 'music-streaming',
    endNodeType: 'industry',
  },
  {
    uuid: 'c9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'anet',
    startNodeType: 'organization',
    endNodeUuid: 'network-switches',
    endNodeType: 'product',
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'meta',
    startNodeType: 'organization',
    endNodeUuid: 'ray-ban-meta-smart-glasses',
    endNodeType: 'product',
  },
  {
    uuid: 'a9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'nio',
    startNodeType: 'organization',
    endNodeUuid: 'nio-power-swap-station',
    endNodeType: 'product',
  },
  {
    uuid: 'a9c83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'nvda',
    startNodeType: 'organization',
    endNodeUuid: 'cuda',
    endNodeType: 'product',
  },
  {
    uuid: 'a9b83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'amzn',
    startNodeType: 'organization',
    endNodeUuid: 'amazon-prime',
    endNodeType: 'product',
  },
  {
    uuid: 'a9a83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'hood',
    startNodeType: 'organization',
    endNodeUuid: 'robinhood-app',
    endNodeType: 'product',
  },
  {
    uuid: 'a9783991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'msft',
    startNodeType: 'organization',
    endNodeUuid: 'github-copilot',
    endNodeType: 'product',
  },
  {
    uuid: 'b9783991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'msft',
    startNodeType: 'organization',
    endNodeUuid: 'openai',
    endNodeType: 'organization',
    relationship: 'partner',
  },
  {
    uuid: 'c9783991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'msft',
    startNodeType: 'organization',
    endNodeUuid: 'satya-nadella',
    endNodeType: 'person',
  },
  {
    uuid: 'd9783991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'amd',
    startNodeType: 'organization',
    endNodeUuid: 'lisa-su',
    endNodeType: 'person',
    directionDescriptions: ['CEO'],
  },

  // {
  //   id: 'relationship-2',
  //   productId: 'product-2',
  //   targetId: 'product-3',
  //   relationship: 'Suppliers',
  // },
  // {
  //   id: 'relationship-3',
  //   productId: 'product-2',
  //   targetId: 'product-3',
  //   relationship: 'Buyers',
  // },
  // {
  //   id: 'relationship-4',
  //   productId: 'product-2',
  //   targetId: 'product-3',
  //   relationship: 'Substitute',
  // },
  // {
  //   id: 'relationship-5',
  //   productId: 'product-2',
  //   targetId: 'product-3',
  //   relationship: 'Competitors',
  // },
];
