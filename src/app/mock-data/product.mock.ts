export class Product {
  id?: number;
  name: string;
  description?: string;
  images?: string[];
  parents?: string[];
  children?: Product[];
  siblings?: Product[];
  parentCompany?: string;
  rootCompanyId?: string;
}

export const mockProducts: Product[] = [
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
    parents: ['E-commerce'],
  },
  {
    name: 'Amazon Web Services (AWS)',
    rootCompanyId: 'amzn',
    parents: ['Cloud Computing'],
  },
  {
    name: 'YouTube',
    rootCompanyId: 'googl',
    parents: ['Video Streaming Service'],
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
