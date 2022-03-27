import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const sq: StockAnalysis = {
  marketCap: 70 * BILLION,

  logo: 'https://lh3.googleusercontent.com/pw/ACtC-3dVUwpnglNTwsN6ZkweBVX9VgZhM9aJL6oQ0Cn9Ofk62gCDq1R8DwwkrzUb-HBxX9B3FA_C5ZqbfYT9UIKdPFLqpxeBLj4Dis4Z1DZ6oakHj-YOZqNdUclAkdW9Q8XkXOoz-nkQfOYeEFRK0eatm9bc=w614-h548-no?authuser=3',
  name: 'Square, Inc.',
  ticker: 'sq',
  propertiesPageEnabled: true,
  irAddress: 'https://investors.block.xyz/overview/default.aspx',
  secFilings: 'https://investors.block.xyz/financials/sec-filings/default.aspx',
  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      isAnnual: true,
      totalRevenue: 4.078 * BILLION,
      operatingIncome: -54.614 * MILLION,
      pressReleaseLink:
        'https://s29.q4cdn.com/628966176/files/doc_financials/2021/q4/4Q21-Shareholder-Letter_Block.pdf',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001512673/13386837-50ba-466f-b8ff-81824f066c1e.pdf',
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 3844 * 1e6,
      operatingIncome: 23 * 1e6,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 4680 * 1e6,
      operatingIncome: 125 * 1e6,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 5057.27 * 1e6,
      operatingIncome: 67.74 * 1e6,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 3158.97 * 1e6,
      operatingIncome: 45.18 * 1e6,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 3033.87 * 1e6,
      operatingIncome: 49.34 * 1e6,
    },
  ],
  description: [
    {
      content:
        'Square, Inc. creates tools that empower businesses and individuals to participate in the economy.',
    },
    {
      content:
        'Enables business to accept card payments and provides reporting and analytics, next-day settlement',
    },
    {
      content:
        'Help business manage inventory, locations, and employees; access financing; engage buyers; build a website or online store; and grow sales. ',
    },
    { content: 'Provide an easy way to send, spend, and store money.' },
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

  competitors: [
    'Stripe',
    'Robinhood',
    'Paypal/Venmo',
    'Banks such as JP Morgan',
  ],

  trends: ['COVID', 'Cashless'],

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
