export const getRelationshipsByStartNodeUuid = (uuid: string) => {
  return relationships.filter(
    (relationship) => relationship.startNodeUuid === uuid
  );
};

export const relationships = [
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
    uuid: 'b9d83991-d90b-44f2-8268-5af4efbbe26t',
    startNodeUuid: 'anet',
    startNodeType: 'organization',
    endNodeUuid: 'ai-networking',
    endNodeType: 'product',
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
