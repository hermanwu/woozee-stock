import { StockAnalysis } from '../models/stock-analysis.model';

export const sq: StockAnalysis = {
  logo:
    'https://lh3.googleusercontent.com/pw/ACtC-3dVUwpnglNTwsN6ZkweBVX9VgZhM9aJL6oQ0Cn9Ofk62gCDq1R8DwwkrzUb-HBxX9B3FA_C5ZqbfYT9UIKdPFLqpxeBLj4Dis4Z1DZ6oakHj-YOZqNdUclAkdW9Q8XkXOoz-nkQfOYeEFRK0eatm9bc=w614-h548-no?authuser=3',
  name: {
    English: 'Square',
    Chinese: undefined,
  },
  ticker: 'SQ',

  description: [
    'Square, Inc. creates tools that empower businesses and individuals to participate in the economy.',
    'Enables business to accept card payments and provides reporting and analytics, next-day settlement',
    'Help business manage inventory, locations, and employees; access financing; engage buyers; build a website or online store; and grow sales. ',
    'Provide an easy way to send, spend, and store money.',
  ],
  vision: [
    'Helping all kinds of people succeed and grow in the economy.',
    'Create a cohesive commerce ecosystem for business and individuals.',
  ],
  painPoint: [
    'High cost software/hardware to manage a business.',
    'Inconvenience of using different payments system or financial management services.',
  ],
  products: [
    {
      description: 'Cash App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3fVJX5-Zl1ifYAvvi2h738zhlGnorfNIh9Ji96wg01UQOKU3ZQe_KOsT46PNSOG4IzTA31FIzL6djsSHck6iaYNfk6AzmbjQhKJ4F1YkP6YxAqPFO48C4qdt2dB8nlR5J5AbsvlgqIM9v0qjmcblWFv=w1424-h1410-no?authuser=3',
    },
    {
      description: 'Seller Software',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3c83es3kgcl6j8BtklhkCgpu_btX9DoBQkLKZRy9jS3OovKf8X4q3d9nKMLZmkYhzX4cielasUp3syJudVvB7F-g5ZGRWDHXQHPqqmHZ_gSgtUvrJ3uqGnKxvUhOz7Kn_6Wz7YdU1lXmB7EP-aJDz2i=w1564-h1466-no?authuser=3',
    },
    {
      description: 'Seller Hardware',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3dFEaCbAtuTcfgj46vlVegVSIjkYFIkeUa_Jus5XYuvBkTHWT9t5g0WSAvsMWKQFdGCxfTCpCbUGs2pBZqn-cyIhfA1exNkqi4FUL88DoYpUB3f0DyRzOO0Li6AaoxWG1TfC5jpvxUiGmWIJ1GWMkzo=w1426-h886-no?authuser=3',
    },
  ],
  customers: [
    'Logistic and customer relation management for small business owners.',
    'Banking and financial services for individuals enjoy managing their wealth.',
  ],
  market: ['Banking and financial services'],
  businessModel: [
    'Help small business to bootstrap with a bundle of productivity software.',
    'Encourage individual to use cash app for all financial related activities.',
    'Keep money within one ecosystem to reduce cost and improve efficiency.',
  ],
  advantage: [
    'Startup / Tech DNA',
    'Visionary founder and CEO',
    'Growing network effect',
  ],
  risk: [
    'Less focus: a lot of products to manage and founder is managing 2 companies.',
    'Low engagement or weak network effect.',
    'Most product is in a competitive market.',
  ],

  competitor: [
    'Stripe',
    'Robinhood',
    'Paypal/Venmo',
    'Banks such as JP Morgan',
  ],

  trend: ['COVID', 'Cashless'],

  predication: {
    marketCap: ['97B', '(50B + 10B + 250B + 350B) = 660B+'],
  },

  conclusion: {
    targetPrice: 2000,
  },
  thoughts: {
    hermanScore: 1,
  },
  stats: {
    price: 1,
    revenueGrowth: 0.4,
    margin: 0.3,
  },
  score: {
    vision: 9,
    painPoint: 7,
    product: 9,
    customer: 10,
    businessModel: 8,
    advantage: 9,
    risk: 7,
    competitors: 6,
    marketPotential: 8,
    trend: 9,
    total: 82,
  },
};
