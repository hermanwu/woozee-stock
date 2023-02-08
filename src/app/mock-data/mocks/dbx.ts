import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const dbx: StockAnalysis = {
  marketCap: 14.329 * BILLION,
  name: ', INC.',
  description: [],
  ticker: 'dbx',
  irAddress: 'https://dropbox.gcs-web.com/',
  secFilings: 'https://dropbox.gcs-web.com/financial-information/sec-filings',
  shortName: 'Dropbox',

  earningsReports: [
    {
      year: 2022,
      quarter: 1,
      totalRevenue: 581 * MILLION,
      fullyYearForecastRevenue: 2476 * MILLION,
      isForecast: true,
    },
    {
      year: 2021,
      quarter: 4,
      totalRevenue: 580.8 * MILLION,
      operatingIncome: -25.178 * MILLION,
      salesAndMarketingCost: 299.417 * MILLION,
      reportLink:
        'https://dropbox.gcs-web.com/static-files/58450624-a3a9-4f41-a94a-8799456275d1',
      revenueRetention: 1.19,
    },

    {
      year: 2021,
      quarter: 3,
      totalRevenue: 545.46 * MILLION,
      operatingIncome: -3.36 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      totalRevenue: 511.84 * MILLION,
      operatingIncome: -22.61 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      totalRevenue: 469.08 * MILLION,
      operatingIncome: -10.74 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      totalRevenue: 430.9 * MILLION,
      operatingIncome: -24.897 * MILLION,
      salesAndMarketingCost: 221.896 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      totalRevenue: 382.92 * MILLION,
      operatingIncome: -48.47 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      totalRevenue: 342.21 * MILLION,
      operatingIncome: -58.63 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      totalRevenue: 297.02 * MILLION,
      operatingIncome: -41.85 * MILLION,
    },
  ],
  business: {},
};
