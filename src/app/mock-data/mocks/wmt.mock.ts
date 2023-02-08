import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';
import { StockAnalysis } from '../../stock/models/stock-analysis.model';

export const wmt: StockAnalysis = {
  industries: [IndustryType.ecommerce],
  shortName: 'Walmart',
  ticker: 'WMT',
  irAddress:
    'https://stock.walmart.com/financials/quarterly-results/default.aspx',

  earningsReports: [
    {
      year: 2022,
      quarter: 3,
      pressReleaseLink:
        'https://s201.q4cdn.com/262069030/files/doc_financials/2023/q2/Earnings-Release-(FY23-Q2)_-final.pdf',
    },
  ],
};
