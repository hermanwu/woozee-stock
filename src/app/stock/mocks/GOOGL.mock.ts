import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { StockAnalysis } from '../models/stock-analysis.model';
import { capMock } from './market-cap.mock';

export const googl: StockAnalysis = {
  marketCap: capMock.googl,
  logo: '',
  name: 'Google',
  ticker: 'googl',
  ceoQuote: [],
  advantage: [],
  irAddress: 'https://abc.xyz/investor/',
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 75325 * MILLION,
      operatingIncome: 21885 * MILLION,
      netIncome: 20642 * MILLION,
      pressReleaseLink:
        'https://abc.xyz/investor/static/pdf/2021Q4_alphabet_earnings_release.pdf?cache=d72fc76',
      reportLink:
        'https://abc.xyz/investor/static/pdf/20220202_alphabet_10K.pdf?cache=fc81690',
      isAnnual: true,
      transcript:
        'https://abc.xyz/investor/static/pdf/2021_Q4_Earnings_Transcript.pdf?cache=0118641',
    },
    {
      year: 2021,
      quarter: 3,
      revenue: 65118 * MILLION,
      operatingIncome: 21031 * MILLION,
      netIncome: 18936 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 61880e6,
      operatingIncome: 18525 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 55314 * MILLION,
      operatingIncome: 17930 * MILLION,
    },
    {
      year: 2020,
      quarter: 4,
      revenue: 56898.0 * MILLION,
      operatingIncome: 15651.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 3,
      revenue: 46173.0 * MILLION,
      operatingIncome: 11213.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 2,
      revenue: 38297.0 * MILLION,
      operatingIncome: 6383.0 * MILLION,
    },
    {
      year: 2020,
      quarter: 1,
      revenue: 41.159 * BILLION,
      operatingIncome: 7977.0 * MILLION,
    },
  ],
};
