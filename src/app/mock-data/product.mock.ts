export class Product {
  id?: string;
  name: string;
  usage?: string;
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

export const getProductByProductId = (productId: string) => {
  return mockProducts.find((product) => product.id === productId);
};
