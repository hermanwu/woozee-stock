import { MarketType } from 'src/app/facts/data/area.enum';
import { RevenueType } from 'src/app/facts/data/revenue-model.enum';
import { StrategyType } from 'src/app/facts/data/stratgies.enum';
import { FactType } from 'src/app/risks/models/fact-type.enum';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const afrm: StockAnalysis = {
  marketCap: 9 * BILLION,

  logo: '',
  name: 'Affirm',
  description: [
    {
      content: 'Mission: Build honest financial products that improve lives.',
    },
    {
      content:
        'We believe that by using modern technology, strong engineering talent, and a mission-driven approach, we can reinvent payments and commerce.',
    },
    {
      content:
        'Our solutions, which are built on trust and transparency, are designed to make it easier for consumers to spend responsibly and with confidence, easier for merchants to convert sales and grow, and easier for commerce to thrive',
    },
    {
      content:
        'We believe that technology, underwriting, and risk management are collectively our key competitive advantage',
    },
    {
      content:
        'We believe our proprietary technology platform and data give us a unique advantage in understanding customers and merchants, as well as pricing risk — which we can almost always accomplish within seconds at checkout. Our approach to risk management is core to our business model, and has been proven to lead to low fraud rates, higher approval rates compared to traditional credit underwriting models, and low credit losses. Our models have been built on more than one billion data points, including data from over 30 million loans and over seven years of repayments.',
    },
    {
      content:
        'From merchants, we typically earn a fee when we help them convert a sale and power a payment.',
    },
    {
      content:
        'From consumers, we earn interest income on the simple interest loans that we purchase from our originating bank partners. Interest rates charged to our consumers vary depending on the transaction risk, creditworthiness of the consumer, the repayment term selected by the consumer, the amount of the loan, and the individual arrangement withamerchant. Because consumers are never charged deferred or compounding interest, late fees, or penalties on the loans, we are not incentivized to profit from our consumers’ mistakes or misfortunes.',
    },
  ],
  ticker: 'afrm',
  irAddress: 'https://investors.affirm.com/',
  business: {
    markets: [{ type: MarketType.fintech_lending }],
    revenues: [
      { type: RevenueType.loanInterest },
      { type: RevenueType.salesCommission },
    ],
    competitiveAdvantages: [
      { type: StrategyType.platform },
      { type: StrategyType.userData },
    ],
  },
  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      revenue: 330 * 1e6,
      operatingIncome: -60 * 1e6,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      reportLink:
        'https://s25.q4cdn.com/442043304/files/doc_financials/2021/q4/Snap-10K-(2021).pdf',
      pressReleaseLink:
        'https://investors.affirm.com/static-files/61176b0c-9cdf-481b-bfbc-5e844f33b9f6',
      slidesLink:
        'https://investors.affirm.com/static-files/887da555-3305-4b39-a53c-b3fb44ee0026',
      revenue: 361 * 1e6,
      operatingIncome: -196200 * 1e3,
      dailyActiveUser: 319 * 1e6,
      salesAndMarketingCost: 143.476 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 269385 * 1e3,
      operatingIncome: -166071 * 1e3,
    },
    {
      year: 2021,
      quarter: 2,
      revenue: 261780 * 1e3,
      operatingIncome: -124690 * 1e3,
    },
    {
      year: 2021,
      quarter: 1,
      revenue: 230665 * 1e3,
      operatingIncome: -194437 * 1e3,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 204041 * 1e3,
      operatingIncome: -26772 * 1e3,
      salesAndMarketingCost: 39.112 * MILLION,
    },
  ],

  risks: [
    {
      type: FactType.business,
      name: 'Interest Rate Increases',
    },
    {
      type: FactType.macro,
      name: 'Delinquency rate could be affected by high inflation',
    },
  ],
};
