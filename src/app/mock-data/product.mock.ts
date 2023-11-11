export class Product {
  uuid?: string;
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

export const getProductsByProductUuids = (productUuids: string[]) => {
  return mockProducts.filter((product) => productUuids.includes(product.uuid));
};

export const getProductsByRootCompanyId = (rootCompanyId: string) => {
  return mockProducts.filter(
    (product) => product.rootCompanyId === rootCompanyId
  );
};

export const getProductByProductId = (productId: string) => {
  return mockProducts.find((product) => product.uuid === productId);
};

export const getRootCompanyIdByProductId = (productId: string) => {
  const product = getProductByProductId(productId);
  if (product?.rootCompanyId) {
    return product.rootCompanyId;
  }

  const productsWithThisParent = mockProducts.filter(
    (product) => product.parentIds && product.parentIds.includes(productId)
  );

  for (let product of productsWithThisParent) {
    if (product.rootCompanyId) {
      return product.rootCompanyId;
    }
  }
};

export const getAllParents = (products: Product[]) => {
  let parents = new Set();
  const queue = [...products];

  while (queue.length > 0) {
    const currentProduct = queue.shift();
    if (currentProduct.parentIds) {
      for (let parentId of currentProduct.parentIds) {
        const parent = getProductByProductId(parentId);
        parents.add(parent);
        queue.push(parent);
      }
    }
  }

  return Array.from(parents.values());
};

export const mockProducts: Product[] = [
  {
    uuid: 'li-l9',
    name: 'Li L9',
    description: 'Li Auto Flagship 6-Seat Family SUV',
    rootCompanyId: 'li',
    images: [
      'https://ir.lixiang.com/system/files-encrypted/nasdaq_kms/inline-images/New%20-%20First%20Picture%20%281%29_0.jpg',
    ],
  },
  {
    uuid: 'ip',
    name: 'Intellectual Property (IP)',
    description:
      'Intellectual property (IP) is a category of property that includes intangible creations of the human intellect. There are many types of intellectual property, and some countries recognize more than others. The most well-known types are copyrights',
  },
  {
    uuid: 'cortex-a',
    name: 'ARM Cortex-A Series',
    rootCompanyId: 'arm',
    parentIds: ['processor-architectures'],
    description:
      'High-performance processors for smartphones, tablets, digital TVs, and automotive entertainment, designed for complex operating systems such as Android, iOS, and Linux.',
  },
  {
    uuid: 'cortex-r',
    name: 'ARM Cortex-R Series',
    rootCompanyId: 'arm',
    description:
      'Real-time processors for applications requiring high reliability and low latency, such as automotive braking systems, mass storage, and networking.',
  },
  {
    uuid: 'cortex-m',
    name: 'ARM Cortex-M Series',
    rootCompanyId: 'arm',
    description:
      'Energy-efficient processors for microcontroller applications, IoT devices, and simple embedded systems, used in household appliances to industrial sensors.',
  },
  {
    uuid: 'processor-architectures',
    name: 'Processor Architectures',
    parentIds: ['ip'],
    description:
      'Intellectual property (IP), which other companies could license to create their own semiconductor products. ',
  },
  {
    uuid: 'bitcoin',
    name: 'Bitcoin',
  },
  {
    uuid: 'coinbase-consumer-platform',
    name: 'Coinbase (Consumer Platform)',
    description:
      'User-friendly platform for buying, selling, and managing cryptocurrency portfolios.',
    rootCompanyId: 'coin',
    parentIds: ['bitcoin'],
  },
  {
    uuid: 'coinbase-pro',
    name: 'Coinbase Pro',
    description:
      'Advanced trading platform with detailed charting, expanded order types, and deeper liquidity for experienced traders.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-wallet',
    name: 'Coinbase Wallet',
    description:
      'Self-custody cryptocurrency wallet for storing cryptocurrencies, exploring DApps, and managing private keys.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-card',
    name: 'Coinbase Card',
    description:
      'A Visa debit card allowing users to spend cryptocurrencies for purchases and ATM withdrawals.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-commerce',
    name: 'Coinbase Commerce',
    description:
      'Service for merchants to accept cryptocurrency payments in a decentralized way.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-earn',
    name: 'Coinbase Earn',
    description:
      'Platform for users to earn cryptocurrencies by learning about them through videos and quizzes.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-prime',
    name: 'Coinbase Prime',
    description:
      'Professional trading platform for institutional clients with advanced trading and analytics tools.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-custody',
    name: 'Coinbase Custody',
    description:
      'Institutional-grade service for secure cryptocurrency storage, offering offline storage, insurance, and audited controls.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'coinbase-ventures',
    name: 'Coinbase Ventures',
    description:
      'Investment arm funding early-stage cryptocurrency and blockchain startups.',
    rootCompanyId: 'coin',
  },
  {
    uuid: 'keytruda',
    name: 'KEYTRUDA (pembrolizumab)',
    rootCompanyId: 'mrk',
    description:
      'KEYTRUDA is an immunotherapy drug used to treat cancer. ' +
      "KEYTRUDA blocks the PD-1 pathway, enhancing the body's immune response against cancer cells. It helps the immune system recognize and attack tumor cells." +
      'KEYTRUDA is approved to treat several types of cancers, such as melanoma, non-small cell lung cancer, head and neck squamous cell cancer, and others, depending on factors like the disease stage and specific genetic markers.',
  },
  {
    uuid: 'gardasil',
    name: 'GARDASIL',
    description:
      'GARDASIL is a vaccine developed to prevent certain human papillomavirus (HPV) infections. HPV is a common sexually transmitted infection that can cause genital warts and is associated with various cancers, including cervical, vaginal, vulvar, and anal cancers.',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'lagevrio',
    name: 'Lagevrio',
    description:
      'Lagevrio is an oral antiviral used to help fight the coronavirus infection by stopping the coronavirus from replicating in the body.',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'januvia',
    name: 'JANUVIA',
    description:
      'JANUVIA is an oral antihyperglycemic medication used to control high blood sugar in individuals with type 2 diabetes.',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'janumet',
    name: 'JANUMET',
    description:
      'JANUMET is a combination medication with sitagliptin and metformin, used to control high blood sugar in individuals with type 2 diabetes.',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'proquad',
    name: 'PROQUAD',
    description:
      'PROQUAD is a combination vaccine that provides protection against measles, mumps, rubella, and varicella (chickenpox).',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'm-m-r_ii',
    name: 'M-M-R II',
    description:
      'M-M-R II is a vaccine that provides protection against measles, mumps, and rubella.',
    rootCompanyId: 'mrk',
  },
  {
    uuid: 'varivax',
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
