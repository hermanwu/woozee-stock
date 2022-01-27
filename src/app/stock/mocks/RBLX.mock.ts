import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const RBLX: StockAnalysis = {
  name: {
    English: 'Roblox',
    Chinese: '',
  },
  description: [''],
  trends: [],
  logo: 'https://lh3.googleusercontent.com/p5WcRqRkMMwkieU0T0qkIN32w31RBVJzfdO5AvUZgdwQm2uU-VDe1Aud0Sql6Yf5bFo7hQ7-0SUhgQAWlr68gO7-Yg86ALtGzFEkaYyHCjsbIFPiHWJZXUfptC0nsWF4lnzMoQESZKlw_nQMeadgWbxAzlKtMUiD-sl4HU9lHXEtEfa0fptfTQ4Q_DCuxuyRplEfRrhwSWiYpLOVIymZIzwO9tgA9cI5LEsJbRDEwIqAkFY9p488fpv3q9Dbar8nSt6ESpVmuR2sr96rVZANqkcEkzxkBeXZKovjMoZ7Yj0cCXpnXNjgUB2gs7DxH5Ev0qXIhCKssP7QBEl_arwVq8AGFZQVKX-w_hlz6FLgpaSX7FFC_EP415mmGu8zlix6vGv4V9w6qUh9JPZgxOH5wTyjG45B_9r4NZN6E5Y1sE_-B_OMhLXhfhrHSaPf0ROleUdRDW3EhXknUr18mXDWQbEi2MK4KYHexmHcooTOF626POiJcYRZCGLHzD83GJQbfmpolfM-A8G7m5d7Pa5VTB3OlJo85LKC6XFeA8je6Pay2s4z-or8IqVi6qbl_O0cONCD-NhIrbeyTk-X3Q6ClvuzG9f5b_wDL46TpjJqI8_KkbUfxCxoPtZBeTpXy4zprWNKHvwvHz-rKI4xtImMIR9UbPO5KvfUC_DuejXstxZrKdorXzuShqJofo2mP4AKx-ruDgDBkkfI0P3xIT1WD18=s250-k-rw-no',
  ticker: 'RBLX',
  ceoQuote: [],
  advantage: [],
  myRating: Rating.Buy,
  propertiesPageEnabled: true,
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earnings: {
    website: 'https://ir.roblox.com/overview/default.aspx',
    latestReportQuarter: ['2021', '2'],
    2021: {
      3: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001315098/ad69fbb0-a7b7-465b-942f-53206ff42303.pdf',
        press: '',
        revenue: 0,
        operatingIncome: 0,
      },
      2: {
        '10q10k':
          'https://d18rn0p25nwr6d.cloudfront.net/CIK-0001315098/b80ee630-5ce5-4b4c-8b84-d0141f383f25.pdf',
        press:
          "https://s27.q4cdn.com/984876518/files/doc_financials/2021/q2/Q2-'21-Earnings-Release-FULL-FINAL.pdf",
        marketCap: 44.83 * 1e9,
        revenue: 454100e3,
        operatingIncome: 142946e3,
      },
    },
    2020: {
      2: {
        revenue: 200392e3,
        operatingIncome: 73046e3,
      },
    },
  },
};
