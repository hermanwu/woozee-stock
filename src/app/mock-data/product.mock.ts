export class Product {
  id?: string;
  name: string;
  usage?: string;
  description?: string;
  images?: string[];
  parentIds?: string[];
  children?: Product[];
  siblings?: Product[];
  parentCompany?: string;
  rootCompanyId?: string;
}

export const mockProducts: Product[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
  },
  {
    id: 'coinbase-consumer-platform',
    name: 'Coinbase (Consumer Platform)',
    description:
      'User-friendly platform for buying, selling, and managing cryptocurrency portfolios.',
    rootCompanyId: 'coin',
    parentIds: ['bitcoin'],
  },
  {
    id: 'coinbase-pro',
    name: 'Coinbase Pro',
    description:
      'Advanced trading platform with detailed charting, expanded order types, and deeper liquidity for experienced traders.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-wallet',
    name: 'Coinbase Wallet',
    description:
      'Self-custody cryptocurrency wallet for storing cryptocurrencies, exploring DApps, and managing private keys.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-card',
    name: 'Coinbase Card',
    description:
      'A Visa debit card allowing users to spend cryptocurrencies for purchases and ATM withdrawals.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-commerce',
    name: 'Coinbase Commerce',
    description:
      'Service for merchants to accept cryptocurrency payments in a decentralized way.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-earn',
    name: 'Coinbase Earn',
    description:
      'Platform for users to earn cryptocurrencies by learning about them through videos and quizzes.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-prime',
    name: 'Coinbase Prime',
    description:
      'Professional trading platform for institutional clients with advanced trading and analytics tools.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-custody',
    name: 'Coinbase Custody',
    description:
      'Institutional-grade service for secure cryptocurrency storage, offering offline storage, insurance, and audited controls.',
    rootCompanyId: 'coin',
  },
  {
    id: 'coinbase-ventures',
    name: 'Coinbase Ventures',
    description:
      'Investment arm funding early-stage cryptocurrency and blockchain startups.',
    rootCompanyId: 'coin',
  },
  {
    id: 'keytruda',
    name: 'KEYTRUDA (pembrolizumab)',
    rootCompanyId: 'mrk',
    description:
      'KEYTRUDA is an immunotherapy drug used to treat cancer. ' +
      "KEYTRUDA blocks the PD-1 pathway, enhancing the body's immune response against cancer cells. It helps the immune system recognize and attack tumor cells." +
      'KEYTRUDA is approved to treat several types of cancers, such as melanoma, non-small cell lung cancer, head and neck squamous cell cancer, and others, depending on factors like the disease stage and specific genetic markers.',
  },
  {
    id: 'gardasil',
    name: 'GARDASIL',
    description:
      'GARDASIL is a vaccine developed to prevent certain human papillomavirus (HPV) infections. HPV is a common sexually transmitted infection that can cause genital warts and is associated with various cancers, including cervical, vaginal, vulvar, and anal cancers.',
    rootCompanyId: 'mrk',
  },
  {
    id: 'lagevrio',
    name: 'Lagevrio',
    description:
      'Lagevrio is an oral antiviral used to help fight the coronavirus infection by stopping the coronavirus from replicating in the body.',
    rootCompanyId: 'mrk',
  },
  {
    id: 'januvia',
    name: 'JANUVIA',
    description:
      'JANUVIA is an oral antihyperglycemic medication used to control high blood sugar in individuals with type 2 diabetes.',
    rootCompanyId: 'mrk',
  },
  {
    id: 'janumet',
    name: 'JANUMET',
    description:
      'JANUMET is a combination medication with sitagliptin and metformin, used to control high blood sugar in individuals with type 2 diabetes.',
    rootCompanyId: 'mrk',
  },
  {
    id: 'proquad',
    name: 'PROQUAD',
    description:
      'PROQUAD is a combination vaccine that provides protection against measles, mumps, rubella, and varicella (chickenpox).',
    rootCompanyId: 'mrk',
  },
  {
    id: 'm-m-r_ii',
    name: 'M-M-R II',
    description:
      'M-M-R II is a vaccine that provides protection against measles, mumps, and rubella.',
    rootCompanyId: 'mrk',
  },
  {
    id: 'varivax',
    name: 'VARIVAX',
    description:
      'VARIVAX is a vaccine developed to protect against varicella (chickenpox).',
    rootCompanyId: 'mrk',
  },
  {
    name: 'EV',
    rootCompanyId: 'tsla',
  },
  {
    name: 'Solar Panels',
    rootCompanyId: 'tsla',
  },
  {
    name: 'Pinduoduo App',
    rootCompanyId: 'pdd',
    parentIds: ['E-commerce'],
  },
  {
    name: 'Amazon Web Services (AWS)',
    rootCompanyId: 'amzn',
    parentIds: ['Cloud Computing'],
  },
  {
    name: 'YouTube',
    rootCompanyId: 'googl',
    parentIds: ['Video Streaming Service'],
  },
  {
    name: 'ChatGPT',
    rootCompanyId: 'msft',
    description: 'A chatbot that uses GPT-3 / GPT-4 to generate responses',
  },
  {
    name: 'GitHub Copilot',
    rootCompanyId: 'msft',
    parentCompany: 'GitHub',
  },
];

export const getProductsByRootCompanyId = (rootCompanyId: string) => {
  return mockProducts.filter(
    (product) => product.rootCompanyId === rootCompanyId
  );
};

export const getProductByProductId = (productId: string) => {
  return mockProducts.find((product) => product.id === productId);
};

export const getProductsByIds = (productIds: string[]) => {
  return mockProducts.filter((product) => productIds.includes(product.id));
};
