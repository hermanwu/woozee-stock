import { StockAnalysis } from '../models/stock-analysis.model';

export const SQ: StockAnalysis = {
  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dVUwpnglNTwsN6ZkweBVX9VgZhM9aJL6oQ0Cn9Ofk62gCDq1R8DwwkrzUb-HBxX9B3FA_C5ZqbfYT9UIKdPFLqpxeBLj4Dis4Z1DZ6oakHj-YOZqNdUclAkdW9Q8XkXOoz-nkQfOYeEFRK0eatm9bc=w614-h548-no?authuser=3',
  name: {
    English: 'Square',
    Chinese: undefined,
  },
  ticker: 'SQ',
  propertiesPageEnabled: true,
  // Earnings Report:
  earnings: {
    website: 'https://investors.squareup.com/overview/default.aspx',
    latestReportQuarter: ['2021', '3'],
    2021: {
      3: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001512673/99e3d3aa-cf5e-4b30-a351-52003798a67b.pdf',
        marketCap: 114.33 * 1e9,
        revenue: (3844727 - 1815662) * 1e3, // Minus Bitcoin Revenue.
        operatingIncome: 22996 * 1e3,
      },
      2: {
        '10q10k':
          'https://s27.q4cdn.com/311240100/files/doc_financials/2021/q2/Square-10Q-2Q21.pdf',
        press:
          'https://s27.q4cdn.com/311240100/files/doc_financials/2021/q2/Q2-2021-Shareholder-Letter.pdf',
        webcast: '',
        marketCap: 119.93 * 1e9,
        revenue: (4680672 - 2724296) * 1e3, // Minus Bitcoin Revenue.
        operatingIncome: 124994 * 1e3,
      },
    },
    2020: {
      3: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001512673/99e3d3aa-cf5e-4b30-a351-52003798a67b.pdf',
        marketCap: 119.93 * 1e9,
        revenue: (3033874 - 1633764) * 1e3, // Minus Bitcoin Revenue.
        operatingIncome: 49342 * 1e3,
      },
      2: {
        revenue: (1923625 - 875456) * 1e3, // Minus Bitcoin Revenue.
        operatingIncome: -23052 * 1e3,
      },
    },
  },
  marketCap: {},
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
      description: 'Seller Hardware',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3dFEaCbAtuTcfgj46vlVegVSIjkYFIkeUa_Jus5XYuvBkTHWT9t5g0WSAvsMWKQFdGCxfTCpCbUGs2pBZqn-cyIhfA1exNkqi4FUL88DoYpUB3f0DyRzOO0Li6AaoxWG1TfC5jpvxUiGmWIJ1GWMkzo=w1426-h886-no?authuser=3',
    },
    {
      description: 'Seller Software',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3c83es3kgcl6j8BtklhkCgpu_btX9DoBQkLKZRy9jS3OovKf8X4q3d9nKMLZmkYhzX4cielasUp3syJudVvB7F-g5ZGRWDHXQHPqqmHZ_gSgtUvrJ3uqGnKxvUhOz7Kn_6Wz7YdU1lXmB7EP-aJDz2i=w1564-h1466-no?authuser=3',
    },
    {
      description: 'Cash App',
      imageLink:
        'https://lh3.googleusercontent.com/pw/ACtC-3fVJX5-Zl1ifYAvvi2h738zhlGnorfNIh9Ji96wg01UQOKU3ZQe_KOsT46PNSOG4IzTA31FIzL6djsSHck6iaYNfk6AzmbjQhKJ4F1YkP6YxAqPFO48C4qdt2dB8nlR5J5AbsvlgqIM9v0qjmcblWFv=w1424-h1410-no?authuser=3',
    },
  ],
  customers: [
    'Logistic and customer relation management for small business owners.',
    'Banking and financial services for individuals that enjoy managing their wealth.',
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
  risks: [
    {
      name: 'Low engagement or weak network effect',
    },
    {
      name: 'competitive market',
    },
  ],

  competitor: [
    'Stripe',
    'Robinhood',
    'Paypal/Venmo',
    'Banks such as JP Morgan',
  ],

  trends: ['COVID', 'Cashless'],

  predication: {
    marketCap: ['97B', '(50B + 10B + 250B + 350B) = 660B+'],
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
