import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Rating } from '../models/rating.model';
import { StockAnalysis } from '../models/stock-analysis.model';

export const rblx: StockAnalysis = {
  marketCap: 24.27 * BILLION,
  name: 'Roblox',
  description: [],
  trends: [],
  logo: 'https://lh3.googleusercontent.com/p5WcRqRkMMwkieU0T0qkIN32w31RBVJzfdO5AvUZgdwQm2uU-VDe1Aud0Sql6Yf5bFo7hQ7-0SUhgQAWlr68gO7-Yg86ALtGzFEkaYyHCjsbIFPiHWJZXUfptC0nsWF4lnzMoQESZKlw_nQMeadgWbxAzlKtMUiD-sl4HU9lHXEtEfa0fptfTQ4Q_DCuxuyRplEfRrhwSWiYpLOVIymZIzwO9tgA9cI5LEsJbRDEwIqAkFY9p488fpv3q9Dbar8nSt6ESpVmuR2sr96rVZANqkcEkzxkBeXZKovjMoZ7Yj0cCXpnXNjgUB2gs7DxH5Ev0qXIhCKssP7QBEl_arwVq8AGFZQVKX-w_hlz6FLgpaSX7FFC_EP415mmGu8zlix6vGv4V9w6qUh9JPZgxOH5wTyjG45B_9r4NZN6E5Y1sE_-B_OMhLXhfhrHSaPf0ROleUdRDW3EhXknUr18mXDWQbEi2MK4KYHexmHcooTOF626POiJcYRZCGLHzD83GJQbfmpolfM-A8G7m5d7Pa5VTB3OlJo85LKC6XFeA8je6Pay2s4z-or8IqVi6qbl_O0cONCD-NhIrbeyTk-X3Q6ClvuzG9f5b_wDL46TpjJqI8_KkbUfxCxoPtZBeTpXy4zprWNKHvwvHz-rKI4xtImMIR9UbPO5KvfUC_DuejXstxZrKdorXzuShqJofo2mP4AKx-ruDgDBkkfI0P3xIT1WD18=s250-k-rw-no',
  ticker: 'rblx',
  ceoQuote: [],
  advantage: [],
  myRating: Rating.Buy,
  propertiesPageEnabled: true,
  irAddress: 'https://ir.roblox.com/overview/default.aspx',
  // POTENTIALS:

  // Demand:

  // Earnings Report:
  earningsReports: [
    {
      year: 2021,
      quarter: 4,
      revenue: 568.77 * MILLION,
      operatingIncome: -139.65 * MILLION,
      isAnnual: true,
    },

    {
      year: 2021,
      quarter: 3,
      revenue: 509.34 * MILLION,
      operatingIncome: -77.45 * MILLION,
    },

    {
      year: 2021,
      quarter: 2,
      revenue: 454.1 * MILLION,
      operatingIncome: -142.95 * MILLION,
    },

    {
      year: 2021,
      quarter: 1,
      revenue: 386.98 * MILLION,
      operatingIncome: -135.06 * MILLION,
    },

    {
      year: 2020,
      quarter: 4,
      revenue: 310.01 * MILLION,
      operatingIncome: -68.61 * MILLION,
    },
  ],
};
