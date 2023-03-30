import { convertDateToUTC } from 'src/app/shared/functions/getUtcDate.function';
import {
  BILLION,
  MILLION,
  TRILLION,
} from 'src/app/shared/numbers/number.model';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const aapl: StockAnalysis = {
  uuid: 'aapl',
  marketCap: 2.3 * TRILLION,
  name: 'Apple',
  displayName: 'Apple',
  description: [],
  logoLink: 'https://i.ibb.co/Jm8hW9K/Screenshot-2023-03-29-at-3-07-34-PM.png',
  trends: [],
  logo: '',
  ticker: 'aapl',
  ceoQuote: [],
  irAddress: 'https://investor.apple.com/investor-relations/default.aspx',
  revenues: [
    {
      name: 'iPhone',
      size: 50.57 * BILLION,
      markets: [IndustryType.hardware],
    },
    {
      name: 'Mac',
      size: 10.435 * BILLION,
      markets: [IndustryType.hardware],
    },
    {
      name: 'iPad',
      size: 7.646 * BILLION,
      markets: [IndustryType.hardware],
    },
    {
      name: 'Wearables, Home and Accessories',
      size: 8.806 * BILLION,
      markets: [IndustryType.hardware],
    },
    {
      name: 'Services',
      size: 19.821 * BILLION,
      markets: [IndustryType.cloudService],
    },
  ],

  products: [
    {
      name: 'AirPod Pro',
    },
    {
      name: 'Mac',
    },
    {
      name: 'Apple Watch',
    },
    {
      name: 'TV+',
    },
    {
      name: 'Fitness+',
    },
    {
      name: 'Apple Card',
    },
    {
      name: 'Apple Care',
    },
  ],
  industries: [IndustryType.us, IndustryType.consumerElectronics],

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 4,
      totalRevenue: 90.146 * BILLION,
      grossProfit: 38.095 * BILLION,
      operatingIncome: 24.894 * BILLION,
      netIncome: 20.721 * BILLION,
      date: convertDateToUTC(new Date('2022-10-27')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://www.apple.com/newsroom/2022/10/apple-reports-fourth-quarter-results/',
        },
        {
          name: 'Consolidated Financial Statements',
          value:
            'https://www.apple.com/newsroom/pdfs/FY22_Q4_Consolidated_Financial_Statements.pdf',
        },
      ],
    },
    {
      year: 2022,
      quarter: 3,
      totalRevenue: 82.959 * BILLION,
      costOfRevenue: 47.074 * BILLION,
      operatingIncome: 23.076 * BILLION,
      netIncome: 19.442 * BILLION,
      date: convertDateToUTC(new Date('2022-07-28')),
      links: [
        {
          name: 'Press Release',
          value:
            'https://www.apple.com/newsroom/2022/07/apple-reports-third-quarter-results/',
        },
      ],
    },
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 97278 * MILLION,
      costOfRevenue: 54719 * MILLION,
      operatingIncome: 29979 * MILLION,
      netIncome: 25010 * MILLION,
      pressReleaseLink:
        'https://www.apple.com/newsroom/2022/04/apple-reports-second-quarter-results/',
      reportLink:
        'https://d18rn0p25nwr6d.cloudfront.net/CIK-0000320193/485ae20a-4b5c-4477-8971-40f401afe35b.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 123945 * MILLION,
      costOfRevenue: 69702 * MILLION,
      grossProfit: 54243 * MILLION,
      sellingGeneralAndAdministrative: 6449 * MILLION,
      researchAndDevelopment: 6306 * MILLION,
      totalOperatingExpense: 82457 * MILLION,
      operatingIncome: 41488 * MILLION,
      interestIncomeNet: -44 * MILLION,
      otherIncomeNet: -203 * MILLION,
      netIncomeBeforeTaxes: 41241 * MILLION,
      provisionForIncomeTaxes: 6611 * MILLION,
      netIncome: 34630 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 83360 * MILLION,
      costOfRevenue: 48186 * MILLION,
      grossProfit: 35174 * MILLION,
      sellingGeneralAndAdministrative: 5616 * MILLION,
      researchAndDevelopment: 5772 * MILLION,
      totalOperatingExpense: 59574 * MILLION,
      operatingIncome: 23786 * MILLION,
      interestIncomeNet: -13 * MILLION,
      otherIncomeNet: -525 * MILLION,
      netIncomeBeforeTaxes: 23248 * MILLION,
      provisionForIncomeTaxes: 2697 * MILLION,
      netIncome: 20551 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 81434 * MILLION,
      costOfRevenue: 46179 * MILLION,
      grossProfit: 35255 * MILLION,
      sellingGeneralAndAdministrative: 5412 * MILLION,
      researchAndDevelopment: 5717 * MILLION,
      totalOperatingExpense: 57308 * MILLION,
      operatingIncome: 24126 * MILLION,
      interestIncomeNet: 54 * MILLION,
      otherIncomeNet: 189 * MILLION,
      netIncomeBeforeTaxes: 24369 * MILLION,
      provisionForIncomeTaxes: 2625 * MILLION,
      netIncome: 21744 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 89584 * MILLION,
      costOfRevenue: 51505 * MILLION,
      grossProfit: 38079 * MILLION,
      sellingGeneralAndAdministrative: 5314 * MILLION,
      researchAndDevelopment: 5262 * MILLION,
      totalOperatingExpense: 62081 * MILLION,
      operatingIncome: 27503 * MILLION,
      interestIncomeNet: 48 * MILLION,
      otherIncomeNet: 460 * MILLION,
      netIncomeBeforeTaxes: 28011 * MILLION,
      provisionForIncomeTaxes: 4381 * MILLION,
      netIncome: 23630 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 111439 * MILLION,
      costOfRevenue: 67111 * MILLION,
      grossProfit: 44328 * MILLION,
      sellingGeneralAndAdministrative: 5631 * MILLION,
      researchAndDevelopment: 5163 * MILLION,
      totalOperatingExpense: 77905 * MILLION,
      operatingIncome: 33534 * MILLION,
      interestIncomeNet: 109 * MILLION,
      otherIncomeNet: -64 * MILLION,
      netIncomeBeforeTaxes: 33579 * MILLION,
      provisionForIncomeTaxes: 4824 * MILLION,
      netIncome: 28755 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 64698 * MILLION,
      costOfRevenue: 40009 * MILLION,
      grossProfit: 24689 * MILLION,
      sellingGeneralAndAdministrative: 4936 * MILLION,
      researchAndDevelopment: 4978 * MILLION,
      totalOperatingExpense: 49923 * MILLION,
      operatingIncome: 14775 * MILLION,
      interestIncomeNet: 134 * MILLION,
      otherIncomeNet: -8 * MILLION,
      netIncomeBeforeTaxes: 14901 * MILLION,
      provisionForIncomeTaxes: 2228 * MILLION,
      netIncome: 12673 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 59685 * MILLION,
      costOfRevenue: 37005 * MILLION,
      grossProfit: 22680 * MILLION,
      sellingGeneralAndAdministrative: 4831 * MILLION,
      researchAndDevelopment: 4758 * MILLION,
      totalOperatingExpense: 46594 * MILLION,
      operatingIncome: 13091 * MILLION,
      interestIncomeNet: 204 * MILLION,
      otherIncomeNet: -158 * MILLION,
      netIncomeBeforeTaxes: 13137 * MILLION,
      provisionForIncomeTaxes: 1884 * MILLION,
      netIncome: 11253 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 58313 * MILLION,
      costOfRevenue: 35943 * MILLION,
      grossProfit: 22370 * MILLION,
      sellingGeneralAndAdministrative: 4952 * MILLION,
      researchAndDevelopment: 4565 * MILLION,
      totalOperatingExpense: 45460 * MILLION,
      operatingIncome: 12853 * MILLION,
      interestIncomeNet: 292 * MILLION,
      otherIncomeNet: -10 * MILLION,
      netIncomeBeforeTaxes: 13135 * MILLION,
      provisionForIncomeTaxes: 1886 * MILLION,
      netIncome: 11249 * MILLION,
    },
  ],
};
