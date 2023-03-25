import { getUtcDate } from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Rating } from '../../stock/models/rating.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const rblxRisks = [];

export const rblx: StockAnalysis = {
  marketCap: 28 * BILLION,
  name: 'Roblox',
  displayName: 'Roblox',
  description: [],
  trends: [],
  logo: 'https://lh3.googleusercontent.com/p5WcRqRkMMwkieU0T0qkIN32w31RBVJzfdO5AvUZgdwQm2uU-VDe1Aud0Sql6Yf5bFo7hQ7-0SUhgQAWlr68gO7-Yg86ALtGzFEkaYyHCjsbIFPiHWJZXUfptC0nsWF4lnzMoQESZKlw_nQMeadgWbxAzlKtMUiD-sl4HU9lHXEtEfa0fptfTQ4Q_DCuxuyRplEfRrhwSWiYpLOVIymZIzwO9tgA9cI5LEsJbRDEwIqAkFY9p488fpv3q9Dbar8nSt6ESpVmuR2sr96rVZANqkcEkzxkBeXZKovjMoZ7Yj0cCXpnXNjgUB2gs7DxH5Ev0qXIhCKssP7QBEl_arwVq8AGFZQVKX-w_hlz6FLgpaSX7FFC_EP415mmGu8zlix6vGv4V9w6qUh9JPZgxOH5wTyjG45B_9r4NZN6E5Y1sE_-B_OMhLXhfhrHSaPf0ROleUdRDW3EhXknUr18mXDWQbEi2MK4KYHexmHcooTOF626POiJcYRZCGLHzD83GJQbfmpolfM-A8G7m5d7Pa5VTB3OlJo85LKC6XFeA8je6Pay2s4z-or8IqVi6qbl_O0cONCD-NhIrbeyTk-X3Q6ClvuzG9f5b_wDL46TpjJqI8_KkbUfxCxoPtZBeTpXy4zprWNKHvwvHz-rKI4xtImMIR9UbPO5KvfUC_DuejXstxZrKdorXzuShqJofo2mP4AKx-ruDgDBkkfI0P3xIT1WD18=s250-k-rw-no',
  ticker: 'rblx',
  ceoQuote: [],
  advantage: [],
  myRating: Rating.Bullish,
  propertiesPageEnabled: true,
  irAddress: 'https://ir.roblox.com/overview/default.aspx',
  riskUuids: rblxRisks.map((r) => r.uuid),

  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2022,
      quarter: 2,
      totalRevenue: 591.2 * MILLION,
      costOfRevenue: 143.157 * MILLION,
      operatingIncome: -170.267 * MILLION,
      netIncome: -179.012 * MILLION,
      date: getUtcDate(2022, 9, 15),
      stats: [
        {
          name: 'Bookings',
          value: 639.9 * MILLION,
          changeRate: -0.04,
        },
        {
          name: 'DAU',
          value: 52.2 * MILLION,
          changeRate: 0.21,
        },
        {
          name: 'Hours Engaged',
          value: 11.3 * BILLION,
          changeRate: 0.16,
        },
        {
          name: 'Hours Engaged',
          value: 11.3 * BILLION,
          changeRate: 0.16,
        },
        {
          name: 'Average Bookings per DAU (ABPDAU)',
          value: 12.25,
          changeRate: -0.21,
        },
        // {
        //   name: 'July 2022 Key Metric Estimates',
        //   details: [
        //     {
        //       name: 'Revenue',
        //       text: 'Up 25% - 27% YoY',
        //     },
        //     {
        //       name: 'Revenue',
        //       text: 'Up 25% - 27% YoY',
        //     },
        //   ],
        // },
      ],
      pressReleaseLink:
        'https://s27.q4cdn.com/984876518/files/doc_financials/2022/q2/RBLX-2022.08.09-Earnings-release-FINAL.docx.pdf',
    },
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 537.13 * MILLION,
      costOfRevenue: 135.63 * MILLION,
      operatingIncome: -151.61 * MILLION,
      netIncome: -160.2 * MILLION,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 568 * MILLION,
      costOfRevenue: 151 * MILLION,
      grossProfit: 416 * MILLION,
      sellingGeneralAndAdministrative: 382 * MILLION,
      researchAndDevelopment: 173 * MILLION,
      totalOperatingExpense: 708 * MILLION,
      operatingIncome: -139 * MILLION,
      interestIncomeNet: -6 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -146 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -143 * MILLION,
    },
    {
      year: 2021,
      quarter: 3,
      totalRevenue: 509 * MILLION,
      costOfRevenue: 130 * MILLION,
      grossProfit: 379 * MILLION,
      sellingGeneralAndAdministrative: 318 * MILLION,
      researchAndDevelopment: 138 * MILLION,
      totalOperatingExpense: 586 * MILLION,
      operatingIncome: -77 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -78 * MILLION,
      provisionForIncomeTaxes: -1 * MILLION,
      netIncome: -74 * MILLION,
    },
    {
      year: 2021,
      quarter: 2,
      totalRevenue: 454 * MILLION,
      costOfRevenue: 116 * MILLION,
      grossProfit: 337 * MILLION,
      sellingGeneralAndAdministrative: 355 * MILLION,
      researchAndDevelopment: 124 * MILLION,
      totalOperatingExpense: 597 * MILLION,
      operatingIncome: -142 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -142 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -140 * MILLION,
    },
    {
      year: 2021,
      quarter: 1,
      totalRevenue: 386 * MILLION,
      costOfRevenue: 97 * MILLION,
      grossProfit: 289 * MILLION,
      sellingGeneralAndAdministrative: 327 * MILLION,
      researchAndDevelopment: 96 * MILLION,
      totalOperatingExpense: 522 * MILLION,
      operatingIncome: -135 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: -1 * MILLION,
      netIncomeBeforeTaxes: -136 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -134 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 310 * MILLION,
      costOfRevenue: 78 * MILLION,
      grossProfit: 231 * MILLION,
      sellingGeneralAndAdministrative: 239 * MILLION,
      researchAndDevelopment: 60 * MILLION,
      totalOperatingExpense: 378 * MILLION,
      operatingIncome: -68 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -67 * MILLION,
      provisionForIncomeTaxes: -6 * MILLION,
      netIncome: -58 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 251 * MILLION,
      costOfRevenue: 65 * MILLION,
      grossProfit: 186 * MILLION,
      sellingGeneralAndAdministrative: 185 * MILLION,
      researchAndDevelopment: 51 * MILLION,
      totalOperatingExpense: 303 * MILLION,
      operatingIncome: -51 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 1 * MILLION,
      netIncomeBeforeTaxes: -49 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -48 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 200 * MILLION,
      costOfRevenue: 53 * MILLION,
      grossProfit: 146 * MILLION,
      sellingGeneralAndAdministrative: 179 * MILLION,
      researchAndDevelopment: 40 * MILLION,
      totalOperatingExpense: 273 * MILLION,
      operatingIncome: -73 * MILLION,
      interestIncomeNet: 0 * MILLION,
      otherIncomeNet: 0 * MILLION,
      netIncomeBeforeTaxes: -72 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -71 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 161 * MILLION,
      costOfRevenue: 41 * MILLION,
      grossProfit: 119 * MILLION,
      sellingGeneralAndAdministrative: 143 * MILLION,
      researchAndDevelopment: 49 * MILLION,
      totalOperatingExpense: 234 * MILLION,
      operatingIncome: -72 * MILLION,
      interestIncomeNet: 1 * MILLION,
      otherIncomeNet: -3 * MILLION,
      netIncomeBeforeTaxes: -74 * MILLION,
      provisionForIncomeTaxes: 0 * MILLION,
      netIncome: -74 * MILLION,
    },
  ],
};
