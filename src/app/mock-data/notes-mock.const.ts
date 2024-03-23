import { Opinion } from '../notes/components/opinion-display/opinion.interface';
import { Fact } from '../risks/models/fact.model';
import { NoteType } from '../shared/data/note.interface';
import {
  convertDateToUTC,
  getUtcDate,
} from '../shared/functions/getUtcDate.function';
import { OpinionEnum } from '../stock/models/opinion-type.model';

export const getOpinionsByCreatorUuid = (creatorUuid: string) => {
  return allNotes.filter((note) => note.creatorUuid === creatorUuid);
};

export const getNotesByTagUuid = (tagUuid: string) => {
  return allNotes.filter((note) => note.tagUuids?.includes(tagUuid));
};

export const allNotes: (Opinion | Fact)[] = [
  {
    uuid: 'c2ccfe52-d753-4b14-g87d-8939baf1d68d',
    targetUuids: ['mdb:nasdaq'],
    noteType: NoteType.Opinion,
    createdDate: getUtcDate(2024, 3, 8),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'Margin is not improving and growth is slowing down.',
  },
  {
    uuid: 'c2ccfe52-d753-4b14-g87d-8939baf1d68d',
    targetUuids: ['pltr:nyse'],
    noteType: NoteType.Fact,
    createdDate: getUtcDate(2024, 3, 6),
    creatorUuid: 'herman.wrt@gmail.com',
    links: [
      {
        link: 'https://investors.palantir.com/news-details/2024/Army-Selects-Palantir-to-Deliver-TITAN-Next-Generation-Deep-Sensing-Capability-in-Prototype-Maturation-Phase/',
      },
    ],
    content:
      'Palantir Technologies Inc. (NYSE: PLTR) today announced that the Army Contracting Command – Aberdeen Proving Ground (ACC-APG) has awarded Palantir USG, Inc. — a wholly-owned subsidiary of Palantir Technologies Inc. — a prime agreement for the development and delivery of the Tactical Intelligence Targeting Access Node (TITAN) ground station system, the Army’s next-generation deep-sensing capability enabled by artificial intelligence and machine learning (AI/ML). The agreement, valued at $178.4 million, covers the development of 10 TITAN prototypes, including five Advanced and five Basic variants, as well as the integration of new critical technologies and the transition to fielding.    ',
  },
  {
    uuid: 'c2ccfe52-d753-4b14-g87d-8939baf1d68d',
    targetUuids: ['aapl:nasdaq'],
    noteType: NoteType.Fact,
    createdDate: getUtcDate(2024, 3, 5),
    creatorUuid: 'herman.wrt@gmail.com',
    content:
      'Analyst firm Counterpoint Research said in a note Tuesday that iPhone sales in China dropped 24% in the period, as Apple faced stiff competition from local smartphone firms.',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['snow:nyse'],
    createdDate: getUtcDate(2024, 2, 28),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'CEO Slottman stepped down. ',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['smci:nasdaq'],
    createdDate: getUtcDate(2024, 2, 20),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'Gross Profit is too low.',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['amzn:nasdaq'],
    createdDate: getUtcDate(2024, 2, 20),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'Amazon is joining S&P Dow Jones Indices on Feb 26th',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['coin:nasdaq'],
    createdDate: getUtcDate(2023, 2, 15),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'Overvalued. 120 might be a good price',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['cdns:nasdaq'],
    createdDate: getUtcDate(2023, 2, 12),
    creatorUuid: 'herman.wrt@gmail.com',
    content: 'Next quarter revenue is shrinking.',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['anet:nyse'],
    createdDate: getUtcDate(2024, 2, 12),
    creatorUuid: 'herman.wrt@gmail.com',
    content:
      "Revenue growth is decelerating quickly compared to last quarter's 28.32% y/y growth.",
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,

    targetUuids: ['pins:nyse'],
    content: '2% US and Canada user growth is too slow',
    createdDate: getUtcDate(2023, 10, 1),
    creatorUuid: 'herman.wrt@gmail.com',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Opinion,
    targetUuids: ['AFRM:NASDAQ'],
    content:
      'Earnings show that Affirm is not able to cut costs and become profitable quickly.',
    createdDate: getUtcDate(2024, 2, 8),
    creatorUuid: 'herman.wrt@gmail.com',
  },
  {
    uuid: 'c2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Fact,
    targetUuids: ['li'],
    createdDate: getUtcDate(2023, 11, 9),
    links: [
      {
        name: 'Press Release',
        link: 'https://ir.lixiang.com/news-releases/news-release-details/li-auto-inc-announces-unaudited-third-quarter-2023-financial',
      },
    ],
    data: [
      {
        name: 'Total Vehicle Deliveries',
        value: 105108,
        changeRate: 2.96,
        timeFrame: 'yoy',
      },
      {
        name: 'Revenue',
        value: 4.75e9,
        changeRate: 2.712,
        unit: 'dollar',
        timeFrame: 'yoy',
      },
      {
        name: 'Vehicle Margin',
        value: 21.2,
        unit: 'percentage',
        timeFrame: 'Q3 2023',
      },
      {
        name: 'Operating Income',
        value: 320600000,
        changeRate: 0.439,
        timeFrame: 'qoq',
      },
      {
        name: 'Net Income',
        value: 385500000,
        changeRate: 0.218,
        timeFrame: 'qoq',
      },
    ],
  },

  {
    uuid: 'b2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: NoteType.Fact,
    tagUuids: ['time-trend'],
    content:
      'Institution Tax Loss Deadline is 10/31 every year. Sell off could happen before that.',
  },
  {
    uuid: 'e2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: 'product',
    targetUuids: ['openai'],
    content:
      'OpenAI announced new models and developer products at DevDay; GPT-4 Turbo with 128K context and lower prices, the new Assistants API, GPT-4 Turbo with Vision, DALL·E 3 API, and more.',
  },
  {
    uuid: 'd2ccfe52-d753-4b14-g87d-8939baf1d68d',
    noteType: 'quote',
    tagUuids: ['insider-trading'],
    userUuid: 'herman.wrt@gmail.com',
    authorUuids: ['peter-lynch'],
    content:
      'insiders might sell their shares for any number of reasons, but they buy them for only one: they think the price will rise.',
  },
  {
    uuid: 'd2ccfe52-8753-4b14-g87d-8939baf1d68d',
    noteType: 'quote',
    tagUuids: ['competitive-advantages'],
    userUuid: 'herman.wrt@gmail.com',
    authorUuids: ['michael-e-porter'],
    content:
      'The fundamental basis of above average performance in the long run is sustainable competitive advantage.' +
      'Though a firm can have a myriad of strengths and weaknesses vis-à-vis its competitors, there are only two basic types of competitive advantage: low cost and differentiation. ' +
      'The significance of any strength or weakness a firm possesses is ultimately a function of its impact on relative cost or differentiation. ',
  },
  {
    uuid: 'd2ccfe52-875d-4b14-g87d-8939baf1d68d',
    noteType: 'quote',
    tagUuids: ['rule'],
    userUuid: 'herman.wrt@gmail.com',
    content:
      '寻找下一个百年公司。日常生活离不开的产物。在可预见未来里，继续成长的行业。有科技基因。稳定现金流且盈利。',
  },
  {
    noteType: 'action',
    content:
      '💰 Financial Results on 10/17/23\n🔹 Revenue: $16.9B, +2% y/y\n🔹 Net Income: $1.68B, or 9.98% of total revenue\n🔹 Dividends and Share Repurchases: $2.5B\n🔹 Reaffirms 2023 financial outlook\n🔹 Aeronautics Segment Revenue: $6.7B, -5% y/y\n🔹 Missiles and Fire Control: $2.94B, +4% y/y\n🔹 Rotary and Mission Systems: $4.12B, +9% y/y\n🔹 Space Segment Revenue: $3.1B, +8% y/y\n🔹 CEO Jim Taiclet: "Our third quarter results were at or above our expectations across the board, generating $2.5 billion of free cash flow, with nearly 100% returned to shareholders through dividends and share repurchases."; "Our backlog remains robust at $156 billion as both domestic and international orders were strong."',
    tagUuids: [],
    uuid: 'd2ccfe52-8753-4b14-987d-8939baf1d68d',
    targetUuids: ['lmt'],
    createdDate: '2023-10-17T23:54:26.274Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '💰 Quarterly Financial Results on 9/28/23\n🔹 Revenue: $12.9B, +2% y/y\n🔹 Operating Expenses: $4.1B, +5% y/y\n🔹 Net Income: $1.45B, -1% y/y\n🔹 Demand Creation Expense: $1.1B, +13% y/y due to advertising and marketing\n🔹 Nike Direct Revenue: $5.4B, +6% y/y\n🔹 North America Revenue: $5.4B, -2% y/y\n🔹 Europe, Middle East & Africa Revenue: $3.61B, +8% y/y\n🔹 Greater China Revenue: 1.29B, +5% y/y\n🔹 Dividends: $524M, +9% y/y\n🔹 Share Repurchases: $1.1B',
    tagUuids: [],
    uuid: '8ae849e8-5a67-470c-a924-c4ecba64e7ba',
    targetUuids: ['NKE'],
    createdDate: '2023-09-29T23:47:56.444Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Financial Results on 9/27/23\n🌱 Revenue: $4.01B, -40% y/y, +7% q/q\n💸 Operating Expenses: $1.037B, -5.8% y/y\n💰 Net Loss: $1.43B, or 35.66% of total revenue\n🔮 Future Outlook: Next Quarter Revenue: $3.8B - $4.2B; Diluted Loss Per Share: $1.17 - $1.31\n🔸 Compute and Networking Unit Revenue: -14% q/q, -59% y/y\n🔸 Mobile Unit Revenue: +48% q/q, -20% y/y\n💡 CEO Sanjay Mehrotra: "Our 2023 performance positions us well as a market recovery takes shape in 2024, driven by increasing demand and disciplined supply. We look forward to record industry TAM revenue in 2025 as AI proliferates from the data center to the edge."',
    tagUuids: [],
    uuid: '131a1105-d1ee-4e9b-ae1b-ba866d3f05e1',
    targetUuids: ['mu'],
    createdDate: '2023-09-27T23:13:51.516Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Costco released earnings that topped Wall Street's Expectations.\n📢 Financial Results on 9/26/23\n🌱 Revenue: $78.9B, +9.5% y/y with one extra week sales this quarter\n💸 Operating Expenses: $76.16B, +9.4% y/y\n💰 Net Income: $2.16B, or 2.7% of total revenue\n🔸 Membership Revenue: $6.9B, +15% y/y\n🔸 E-commerce Sales: -0.8% y/y\n🔸 Comparable Total Sales: +1.1% y/y\n🔸 Comparable U.S Sales: +0.2% y/y\n🔸 Comparable Canada Sales: +1.8% y/y\n🔸 Comparable International Sales: 5.5% y/y\n💡 CFO: Shoppers made more trips to the retailer's stores, even as they spent less. Sales of pricier items were weaker.",
    tagUuids: [],
    uuid: 'e5af0172-a0af-4567-ab06-024876c25ab5',
    targetUuids: ['cost'],
    createdDate: '2023-09-26T22:47:45.158Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "📢 Financial Results on 9/21/23\n🌱 Revenue: $2.7B, +11.6% y/y (Including acquired 77 Ruth's Chris Steak House)\n💸 Operating Expenses: $2.48B, +12.5% y/y\n💰 Net Income: $194.5M, or 7.12% of total revenue\n🔮 Future Outlook: Reiterated Financial Outlook for FY2024\n🔸 Marketing Expenses: $38.6M, +27.4% y/y\n🔸 Same Store Sales: +5% y/y\n🔸 Olive Garden Same Store Sales: +6.1% y/y\n🔸 LongHorn Steakhouse Same Store Sales: +8.1% y/y\n🔸 Repurchased Stock: $143M\n🔸 Dividends Paid: $159M",
    tagUuids: [],
    uuid: '93bfef7c-b89e-4dff-8b0f-aa4f46d38622',
    targetUuids: ['dri'],
    createdDate: '2023-09-22T23:24:50.774Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Latest Financial Results on 9/20/23\n🌱 Revenue: $1.59B, -14% y/y\n💸 Expenses: $1.4B, -8% y/y\n💰 Net Income: $149M, or 9.3% of total revenue\n🔮 Outlook: FY2023 Revenue of $6.31B, up from previous estimates of $5.80B-$6.20B\n🔸 Homes Delivered: 3375, -7% y/y\n🔸 Average Selling Price: $466K, -8% y/y\n🔸 Backlog Homes: 7008, -35% y/y\n🔸 Repurchased Shares: $82.5M',
    tagUuids: [],
    uuid: 'de9ea415-655b-4cb7-a1d0-34b3d6e3b4d0',
    targetUuids: ['kbh'],
    createdDate: '2023-09-21T07:43:56.143Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Latest Financial Results on 9/20/23\n🌱 Revenue: $21.7B, -7% y/y\n💸 Operating Expenses: $20.2, -8% y/y\n💰 Net Income: $1.08B, or 5% of total revenue\n🔮 Future Outlook: Revenue Flat for FY2024\n🔸 FedEx Ground Operating Income: +59% y/y\n🔸 "First quarter results improved primarily due to the execution of the company\'s DRIVE program initiatives and continued focus on revenue quality. The improvement in operating results was partially offset by ongoing demand weakness."',
    tagUuids: [],
    uuid: 'bd4c9c7f-953b-42af-9d49-2bacc28b6cc3',
    targetUuids: ['fdx'],
    createdDate: '2023-09-21T07:41:25.421Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Latest Financial Results on 7/27/23\n🌱 Revenue: $45B, +12% y/y\n💰 Operating Income: $2.46B, or 5.5% of total revenue\n🔸 Model e Revenue: $1.8B, +39% y/y\nFord Blue Revenue: $25B, +5% y/y\nFord Pro: $15.6B, +22% y/y \n, 💡 CEO: "The shift to powerful digital experiences and breakthrough EVs is underway and going to be volatile, so being able to guide customers through and adapt to the pace of adoption are big advantages for us,"',
    tagUuids: [],
    uuid: 'c34ee8b2-0090-4272-b7a6-5ad4997cf109',
    targetUuids: ['f'],
    createdDate: '2023-09-19T14:34:50.950Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Latest Financial Results on 9/14/23\n🌱 Revenue: $8.7B, -2.7% y/y\n💰 Operating Income: $1.47B, or 16.9% of total revenue\n🔮 Next Quarter Revenue Outlook: ~$9.9B, -6.6% y/y\n🔸 Deliveries: 18,559 homes, +8% y/y\n🔸 Average Sales Prices：$448,000, -8.8% y/y\n🔸 New Orders: 19,666 homes, +37% y/y\n🔸 New Orders Value: $8.6B, +30% y/y\n🔸 Gross Margin: 24.4%, down from 29.2% y/y\n🔸 Stock Buyback: $366M\n💡 CEO: "Short housing supply, absorbed by strong primary and pent-up demand, continued to define a strong sales environment. Homebuilders continued to use incentives, including buy-downs, to offset rising interest rates and tighter capital"',
    tagUuids: [],
    uuid: 'da560489-edd8-4d05-97cc-021763846b82',
    targetUuids: ['len'],
    createdDate: '2023-09-16T04:29:12.112Z',
    creatorUuid: 'hwu106@gmail.com',
  },

  {
    noteType: 'action',
    content:
      'Quarterly Financial Results on 9/11/23\n🏦 Revenue: $12.5B, +9% y/y\n💸 Net Income: $2.42B, 19% of total revenue\n🔸 Next Quarter Outlook: +5%-7% y/y\n🔸 Cloud Revenue: $4.6B, +30% y/y\n🔸 Cloud Infrastructure Revenue: $1.5B, +66% y/y\n🔸 CEO: "Oracle Cloud Infrastructure revenue grew 66% in Q1, much faster than our hyperscale cloud infrastructure competitors,"\n🔸 Larry Ellison: "Self-driving cars, molecular drug design, voice user interfaces - billions of dollars are being invested in AI. ", "The largest AI technology companies and the leading AI startups continue to expand their business with Oracle for one simple reason - Oracle\'s RDMA interconnected NVIDIA Superclusters train AI models at twice the speed and less than half the cost of other clouds."',
    tagUuids: [],
    uuid: 'f7ef9336-986e-4a6b-ab6c-d8548318c357',
    targetUuids: ['orcl'],
    createdDate: '2023-09-12T18:59:24.994Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'UiPath Announced Financial Results on 9/6/23\n🏦 Revenue: $287M, +19% y/y\n💸 Net Loss: $60.3M, or 21% of total revenue\n🔸 Next Quarter Rev Outlook: $313M–318M, +20% y/y\n🔸 Remaining Performance Obligation: $905M, +28% y/y\n🔸 Subscription Revenue: $160M, +28% y/y\n🔸 Net Retention Rate: 121%\n🔸 ARR: $1.308B, +25% y/y\n🔸 Cloud ARR: $500M+, +125% y/y\n🔸 Customers with $1M ARR: 254, +33.7% y/y\n🔸 Announced $500 Stock Repurchase Program',
    tagUuids: [],
    uuid: '730c8ffd-274b-44a3-9798-07cb553736ae',
    targetUuids: ['path'],
    createdDate: '2023-09-07T16:55:12.940Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'C3.ai Announced Financial Results on Sep 6, 2023\n🏦 Revenue: $72.4M, +11% y/y\n💸 Net Loss: $64.4M, or 89% of total revenue\n🔸 Next Quarter Rev Outlook: $72–76.5M, +15–23% y/y\n🔸 Gross Profit: $40.5M, or 85% of total revenue\n🔸 Free Cash Flow: -$8.9M\n🔸 Remaining Performance Obligation: $334.6M\n🔸 New/Expanded Agreements: NEOM, Nucor, Roche, Riverside County, California; Pantaleon, Ball, Cargill, Con Edison, Shell, Tyson Foods, and the U.S. Department of Defense.',
    tagUuids: [],
    uuid: '96d56d6f-faf7-453d-9b25-072b3a20fbca',
    targetUuids: ['c3ai'],
    createdDate: '2023-09-06T22:35:53.399Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'fact',
    content:
      'GitLab Announced Financial Results on Sep 5, 2023\n🏦 Revenue: $139.6M, +38% y/y\n💸 Net Loss: $50.1M, or 35.8% of total revenue\n🔸 Next Quarter Rev Outlook: $140M–141M, +24% y/y\n🔸 Customer with $5K+ ARR: 7,815, +33% y/y\n🔸 Customer with $100K+ ARR: 810, +37% y/y\n🔸 Net Retention Rate: 124%',
    tagUuids: [],
    uuid: '9fed5a95-a544-4538-94ba-4da0cde97be6',
    targetUuids: ['gtlb'],
    createdDate: '2023-09-06T18:46:22.655Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Zscaler Announced Financial Results on Sep 5, 2023\n🏦 Revenue: $455M, +43% y/y\n💸 Net Loss: $30.7M, or 6.7% of total revenue\n🔸 Next Quarter Rev Outlook: $472M–474M, +33% y/y\n🔸 Billings: $719.3M, +43% y/y\n🔸 Deferred Revenue: $1.44B, +41% y/y\n🔸 CEO: "We concluded our fiscal year with strong top line growth and record operating profits. In less than two years, we doubled our annual recurring revenue, surpassing the $2 billion milestone. With cyber security as a high priority, IT executives are modernizing their legacy network security with our zero-trust architecture"',
    tagUuids: [],
    uuid: '687d18f2-523f-49fc-a78a-e991fb26f625',
    targetUuids: ['zs'],
    createdDate: '2023-09-05T22:51:51.141Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Asana, a leading work management platform founded by Facebook\'s co-founder Dustin Moskovitz.\n📢 Announced FY2024Q2 Financial Results\n🏦 Revenue: $162.5M, +20% y/y\n💸 Net Loss: $71.4M, or 44% of total revenue\n🔸 Next Quarter Rev Outlook: $164M, +16% y/y\n🔸 Free Cash Flow: $14.6, up from -$42.3M a year ago.\n🔸 Revenues from clients with $5K+ yearly : +24% y/y\n🔸 Clients with $5K+ annual spending: +15% y/y\n🔸 Net Retention Rate: 105%\n🔸 Net Retention Rate of clients with $5K+ yearly: 110%\n🔸 Net Retention Rate of clients with $100K+ yearly: 125%\n🔸 CEO: "Asana\'s Q2 results beat expectations on the top and bottom line. Revenue growth was better than our guidance, operating margin improved 37 percentage points, and we posted positive free cash flow"',
    tagUuids: [],
    uuid: '70863de1-8be1-4e0c-9f3c-01985e1e4642',
    targetUuids: ['asna'],
    createdDate: '2023-09-05T21:48:16.208Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Broadcom, a global technology leader that designs, develops and supplies semiconductor and infrastructure software solutions\n📢 Announced FY2023Q3 Financial Results\n🏦 Revenue: $8.876B, +5% y/y\n💸 Net Income: $3.303B, or 37.2% of total revenue\n🔸 Next Quarter Rev Outlook: $9.27B, +4% y/y\n🔸 Dividend: $4.60 per share\n🔸 Shares Repurchased: $2.167B\n🔸 CEO: \'Results were driven by demand for next generation networking technologies as hyperscale customers scale out and network their AI clusters within data centers"',
    tagUuids: [],
    uuid: '8e599a6c-5b5b-49d7-9512-8fee12e70a23',
    targetUuids: ['avgo'],
    createdDate: '2023-08-31T22:39:59.310Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'MongoDB \n📢 Announced FY2024Q2 Financial Results\n🏦 Revenue: $423.8M, +40% y/y\n💸 Net Loss: $37.6M, or 8.9% of total revenue\n🔸 Next Quarter Revenue Outlook: $400–404M, +20.5% y/y\n🔸 Subscription Revenue: $409.3M, +40% y/y\n🔸 Service Revenue: $14.5M, +20% y/y\n🔸 Gross Profit: $318.5M, or 75% of total revenue\n🔸 "We are at the early stages of AI powering the next wave of application development. We believe MongoDB provides developers a unified platform that supports both the foundational requirements necessary for any application and the exceptionally demanding needs of AI-specific applications, making our competitive advantage even stronger in the world of AI."',
    tagUuids: [],
    uuid: 'e88c6f13-8faf-47d5-8901-94bb0f605a1d',
    targetUuids: ['MDB'],
    createdDate: '2023-08-31T21:58:53.408Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Lululemon Athletica\n📢 Announced 2023Q2 Financial Results\n🏦 Revenue: $2.2B, +18% y/y\n💸 Net Income: $341.6M, or 15.5% of total revenue\n🔸 Next Quarter Rev Outlook: $2.165B-$2.19B, +17.5%\n🔸 Comparable Sales: +11% y/y\n🔸 North America Revenue: +11% y/y\n🔸 International Revenue: +52% y/y\n🔸 Gross Profit: $1.3B, +23% y/y, or 58.8% of total revenue',
    tagUuids: [],
    uuid: '318bf08e-2aef-435a-b473-058c53ffb9fe',
    targetUuids: ['Lulu'],
    createdDate: '2023-08-31T20:56:17.983Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Okta, the leading independent identity partner\n📢 Announced FY2024Q2 Financial Results\n🏦 Revenue: $556M, +23% y/y\n💸 Net Loss: $111M, or 20% of total revenue\n🔸 Subscription: $542M, +24% y/y\n🔸 Subscription Backlog: $3.03B, +8% y/y\n🔸 Next Quarter Rev Outlook: $558M-560M, +16% y/y\n🔸 Customer Count: 18,400, +12% y/y\n🔸 TTM Dollar Based Net Retention: 115%',
    tagUuids: [],
    uuid: '2267f775-c865-4587-ac4d-69831d11b32b',
    targetUuids: ['okta'],
    createdDate: '2023-08-30T23:29:08.011Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Crowdstrike Announced FY2024Q2 Financial Results\n🏦 Revenue: $731.6B, +37% y/y\n💸 Net Income: $8.5M, or 1% of total revenue\n🔸 Subscription: $690M, +36% y/y\n🔸 Annual Recurring Revenue: $2.93B, +37% y/y\n🔸 Next Quarter Rev Outlook: $775.4M-778M, +33.7% y/y\n🔸 Module adoption rates increased to 63%, 41%, and 24% for 5+, 6+ and 7+ modules, +1% q/q for each category.',
    tagUuids: [],
    uuid: '0d65f16d-eb00-4bf0-971d-e0648721ad4d',
    targetUuids: ['crwd'],
    createdDate: '2023-08-30T22:10:27.282Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Salesforce Announced FY2024Q2 Financial Results\n🏦 Revenue: $8.6B, +11% y/y\n💸 Net Income: $1.27B, or 14.7% of total revenue\n🔸 Remaining Performance Obligation: $24.1B, +12 % y/y\n🔸 Share Repurchases: $1.9B\n🔸 Next Quarter Rev Outlook: $34.7B-$34.8B, +11% y/y\n🔸 Raised FY24 Revenue, Margin, Cash Flow Guidance',
    tagUuids: [],
    uuid: '85239a32-19ec-4e50-b320-2cca5fd96df6',
    targetUuids: ['crm'],
    createdDate: '2023-08-30T21:07:51.689Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'NIO Announced 2023Q2 Financial Results:\n🏷️ Revenue: $1.21B, -14.8 y/y, -17.8% q/q\n💰 Net Loss: $835.1M, +119.6% y/y, +27.8% q/q\n🔸 Vehicle Sales: $991M, -24.9% y/y, -22.1% q/q\n🔸 Gross Profit: $12M, or 1% of total revenue\n🔸 Vehicle Margin: 6.2%, down from 16.7% a year ago\n🔸 Cash / Cash Equivalents: $4.3B\n🔸 NIO delivered 20,462 vehicles in July 2023, representing an increase of 103.6% year-over-year.',
    tagUuids: [],
    uuid: '4d936e44-e17f-483e-a2c5-f942547af5c3',
    targetUuids: ['nio'],
    createdDate: '2023-08-29T20:56:47.775Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Pinduoduo Announced 2023Q2 Financial Results:\n🔸 Revenue: $7.21B, +66% y/y\n🔸 Net Income: $1.81B, or 25% of total revenue\n🔸 Online Marketing Services Rev: $5.23B, +50% y/y\n🔸 Transaction Services Rev: $1.98B, +131% y/y\n🔸 Gross Profit: $4.62B, or 64.2% of total revenue\n🔸 Operating Profit: $1.75B, or 24.3% of total revenue\n🔸 CEO: "Over the recent quarter, we saw a positive shift in consumer sentiment, leading to a rise in demand across various product sectors"',
    tagUuids: [],
    uuid: 'b0d66350-a0cd-44f6-9b6b-236f13703b29',
    targetUuids: ['pdd'],
    createdDate: '2023-08-29T13:33:19.051Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '🔸 XPeng announced a strategic partnership with Didi today.\n\n🔸 XPeng will launch a new brand A-class smart EV, to expand in the mass market segment of the RMB150,000 price range.\n\n🔸 DiDi will provide support from its mobility ecosystem with access to its nationwide shared mobility market.\n\n🔸 XPeng will issue Class A ordinary shares, representing approximately 3.25% of the Company’s outstanding shares, to acquire assets related to DiDi’s Smart EV project. DiDi will thereby become a strategic shareholder of the Company, with a lock-up period of 24 months after the initial closing.',
    tagUuids: [],
    uuid: 'e550cd7a-8c3e-460d-bfc0-35c143a266e2',
    targetUuids: ['xpev'],
    createdDate: '2023-08-29T01:09:53.387Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'opinion',
    content:
      'Weak Moat.\n\n没有明显护城河，像苹果这样的大公司也可以通过Apple Pay轻松进入这个市场。\n\n',
    tagUuids: ['moat'],
    uuid: '79783991-d90b-44f2-8268-5af4efbbe264',
    targetUuids: ['afrm'],
    createdDate: '2023-08-26T08:26:26.237Z',
    creatorUuid: 'herman.wrt@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Affirm 2023FQ4 Earnings Highlights:\n\n🔸 Revenue: $446M, +22% y/y, 8.1% of GMV\n🔸 Operating Loss: $244M, or 55% of revenue\n🔸 Gross Merchandise Volume: $5.5B, +25% y/y\n🔸 Delinquency Rate: -30bp y/y\n🔸 Merchant Count: 254K, +8% y/y\n🔸 Consumer Count: 16.5M, +18% y/y\n🔸 Transaction Per Consumer: 3.9, +30% y/y',
    tagUuids: [],
    uuid: '62453519-4d6e-43b6-a929-3705f90bb2d4',
    targetUuids: ['afrm'],
    createdDate: '2023-08-25T15:29:16.670Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📢 Nvidia Announced FY2024Q2 Earnings:\n🔸 Revenue: $13.51B, +88% q/q, +101% y/y\n🔸 Data Center Revenue: $10.32B, +141% q/q, +171% y/y\n🔸 FY2024Q3 Revenue Outlook: $16B, +18.4% q/q\n🔸 Gaming Revenue: $2.49B, +11% q/q, +22% y/y\n🔸 Professional Visualization Revenue: $379M, -24% y/y\n🔸 Automotive Revenue: $253M, +15% y/y\n🔸 Net Income: $2.48B, or 18.4% of total revenue\n🔸 "Data Center compute revenue nearly tripled year-on-year"\n🔸 "Networking revenue almost doubled year-on-year"\n🔸 "China demand was within the historical range of 20% to 25% of our Data Center revenue."',
    tagUuids: [],
    uuid: 'a4a08ef6-1f00-42d8-9b82-44849b7551b5',
    targetUuids: ['nvda'],
    createdDate: '2023-08-24T13:05:18.907Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '📊 #Snowflake $SNOW \n📢 Announced Fiscal 2024Q2 Earnings\n\n🔸 Revenue: $674.0M, +36% y/y\n🔸 Product Revenue: $640.2M, +37% y/y\n🔸 TTM Revenue $1M+ Customers: 402, +62% y/y\n🔸 Forbes Global 2000 customers: 639, +17% y/y\n🔸 FY2024Q3 Revenue Outlook: $670M-$675M, +28.5%y/y\n🔸 Net revenue retention rate: +142%\n🔸 Remaining Performance Obligations: $3.5 billion, +30% y/y\n🔸 Operating Income: -$285.4M, or 42% of total revenue\n🔸 Net Income: -$227.3M, or 34% of total revenue\n',
    tagUuids: [],
    uuid: 'd5e9d221-d8b5-468d-bc9e-ba5a9defbcf4',
    targetUuids: ['snow'],
    createdDate: '2023-08-23T22:47:10.678Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '🛡️ Palo Alto Networks $PANW \n📢 Announced Fiscal 2023Q4 Earnings\n\n🔸 Revenue: $2.0B, +26% y/y\n🔸 Billings: $3.2B, +18% y/y\n🔸 Subscription: $1.45B, +26.5% y/y\n🔸 Remaining Performance Obligation: $10.6B, +30% y/y\n🔸 Next Quarter Revenue Outlook: $1.82B-$1.85B, +17% y/y\n🔸 Gross Profit: $1.45B, or 74% of total revenue\n🔸 Net Income: $227.7M, or 12% of total revenue',
    tagUuids: [],
    uuid: 'e2ef71d6-8652-4722-89f1-f7a3ebdeba10',
    targetUuids: ['panw'],
    createdDate: '2023-08-18T23:26:33.270Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Bilibili announced 2023Q2 earnings:\n\n🔸 Revenue: $731.5M, +8% y/y\n🔸 Value-added Service Rev: $317.4M, +9% y/y\n🔸 Advertising Rev: $216.9M, +36% y/y\n🔸 Mobile Games Rev: $122.9M, -15% y/y\n🔸 IP derivatives (E-commerce) Rev: $74.3M, -10% y/y\n🔸 DAU: 96.5M, +15% y/y\n🔸 View Time: +22% y/y\n🔸 Net Loss: $213.5M, down from $277M loss a year ago',
    tagUuids: [],
    uuid: '06339452-bb6d-4fce-96f0-7f4f534bc540',
    targetUuids: ['bili'],
    createdDate: '2023-08-18T05:21:13.522Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'BILL.com announced quarterly earnings\n\n🔸 Revenue: $296M, +48% y/y\n🔸 Subscription Revenue: $66.9M, +21% y/y\n🔸 Transaction Revenue: $192.6M, +38% y/y\n🔸 Revenue Outlook: $297M, +29% y/y\n🔸 Gross Profit: $243.4M, 82.2% of the total revenue\n🔸 Operating Loss: $41.4M, up from $83.4M a year ago\n🔸 Net Loss: $15.9M, up from $84.3M a year ago',
    tagUuids: [],
    uuid: 'eb80b1d3-955d-49f2-9944-fe1c5623d710',
    targetUuids: ['bill'],
    createdDate: '2023-08-17T23:41:15.437Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Lilly Reports Second-Quarter 2023 Financial Results\n\nRevenue: $8.3B, +28% y/y\nVolume: +29% y/y\nUS Rev: $5.53B, +41% y/y\nNew Products Rev: $1B\nGrowth Products Rev: $4.93B, +16% y/y\n\nGross Profit: $6.5B, +29% y/y\nEPS: $1.95, +86% y/y\nRaised 2023 EPS Guide\n\nCEO:\n"Lilly\'s financial results in Q2 were led by Mounjaro sales and a strong performance from Growth Products," \n"Exciting scientific breakthroughs, such as TRAILBLAZER-ALZ 2 in Alzheimer\'s disease and SURMOUNT-3 and -4 in obesity, encourage us to continue to make significant investments that support our new medicines including multiple launches expected by the end of 2023 to help more patients around the world."',
    tagUuids: [],
    uuid: '7e298728-3d6a-4dba-9832-490f0b659143',
    targetUuids: ['lly'],
    createdDate: '2023-08-08T21:50:30.152Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Rivian released Q2 2023 results:\n\nRevenue: $1.12B, +207% y/y\nProduction: +50% q/q\nDeliveries: +60% q/q\n\nGross Profit per unit: +$35,000\nNet Loss: $1.2B, down from $1.7B y/y\n',
    tagUuids: [],
    uuid: '6447a2a5-c531-4e9d-adb4-72320bb2fd27',
    targetUuids: ['rivn'],
    createdDate: '2023-08-08T20:50:22.055Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Supermicro released fiscal Q3 2023 results:\n\nRevenue: $1.28B, -5% y/y, -29% q/q\nQ4 FY23 Revenue Guidance: $1.7B to $1.9B, +4% to +16% y/y\n\nGross Margin: 17.6%, up from 15.5% a year ago.\nOperating Margin: 7.7%, up from 6.6% a year ago.\n\nRecord demand for AI related systems\nKey new component shortages for next generation products delayed shipments.\n\n',
    tagUuids: [],
    uuid: 'e03443f9-9b1d-48a0-b1b9-5c9dc687539c',
    targetUuids: ['smci'],
    createdDate: '2023-08-08T20:24:13.513Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Lucid Announces Second Quarter 2023 Financial Results\n\nRevenue: $150.9M, +55% y/y\nDeliveries: 1404 vehicles and on track for annual 10,000 vehicles production\n\nAston Martin selected Lucid to supply powertrain and battery system tech with a $450M+ contract.\nWill unveil Lucid Gravity SUV in November\n\n\n\n\n',
    tagUuids: [],
    uuid: '95bdd17a-8aae-44a2-989f-ceceb5895565',
    targetUuids: ['LCID'],
    createdDate: '2023-08-07T21:40:53.173Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Chegg Reports Second Quarter 2023 Earnings\n\nRevenue: $182.9M, -6% y/y\nSubscription Service: -5% y/y\nSubscriber: 4.8M, -9% y/y\n\nNet Income: $24.6M\n\nQ3 Revenue Outlook: $151M - $153M\n\n\nCEO: "Our recent survey shows, students see ChatGPT and Chegg as complementary with very different use cases. The latest YPulse survey states that while, \'GenZ students are using AI to improve their education…they are not comfortable with the exact information ChatGPT puts out.\' And it’s become clear to us that a simple, high quality, accurate, personal learning assistant, is needed and we feel we are uniquely positioned to deliver a world class personal learning assistant. "\n\n"The new Chegg will combine the best of generative AI with Chegg’s proprietary high-quality solutions and demonstrated ability to improve student outcomes. They can expect to see a much simpler conversational user interface, personalized learning pathways, more in-depth content, and the ability to transform it automatically into innovative study tools, such as practice tests, study guides, and flash cards"\n\n"Our LLMs will be trained with our unique data sets, and with the help of our 150,000 subject matter experts. We expect to deliver a significantly enhanced and differentiated learning experience for students compared to the generic models that are available today. "',
    tagUuids: [],
    uuid: '0134d114-1aa4-4ff6-b148-e713c1ab2de5',
    targetUuids: ['CHGG'],
    createdDate: '2023-08-07T21:10:33.767Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Palantir Technologies Inc announced financial results for the second quarter\n\nRevenue: $533M, 13% y/y\nCommercial: $232M, +10% y/y\nGovernment: $302M, +15% y/y\nCustomer Count: +38% y/y\n\n\nOperating Income: $2M, representing a 2% margin\nNet Income: $28M\n\nQ3 Outlook Revenue: $553M-$557M\n\nAuthorized $1B repurchase program\n\n \nCEO: Alexander Karp\n"We announced the release of our Artificial Intelligence Platform (AIP), which allows large language models to operate within the confines of the enterprise and on privately held data, less than three months ago...The platform already has users across more than one hundred organizations..."\n"The demand for AIP is unlike anything we have seen in the past twenty years. We are currently in discussions with more than three hundred additional enterprises to deploy AIP within their organizations."\n\n',
    tagUuids: [],
    uuid: 'aec3b7a0-646f-4051-b8a8-ec2de9696890',
    targetUuids: ['pltr'],
    createdDate: '2023-08-07T20:49:16.533Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Robinhood Reports Second Quarter 2023 Results\n\nRevenue: $486M, +10% q/q\nTransaction-based: $193M, -7% y/y\nOptions: $127M, -5% y/y\nEquities: $25M, -7% y/y\nAccounts: 23.2M, +70K q/q \nMonthly Active Users: 10.8M, +1M q/q\nAssets Under Custody: $89B, +13% q/q\nAverage Revenue Per User: $84, up from $77 y/y\n\n\nNet Income: $25 M, up from -$511 M a year ago.\n',
    tagUuids: [],
    uuid: 'bdbe7582-84f4-461b-a4b0-8b17dcf345fa',
    targetUuids: ['hood'],
    createdDate: '2023-08-07T14:49:37.340Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Amazon announced Q2 2023 financial results.\n\nSales: $134.4 billion, +11% y/y\nAWS sales: $22.1 billion, +12% y/y\n\nOperating Income: $7.7 billion, up from $3.3 billion a year ago.\nNet Income: $6.7 billion, up from -$2.0 billion a year ago.\n\nCEO: "Our AWS growth stabilized as customers started shifting from cost optimization to new workload deployment, and AWS has\ncontinued to add to its meaningful leadership position in the cloud with a slew of generative AI releases that make it much\neasier and more cost-effective for companies to train and run models"\n\n',
    tagUuids: [],
    uuid: '9a66a4d1-3ca3-406d-b948-677bfbf18f81',
    targetUuids: ['amzn'],
    createdDate: '2023-08-03T22:03:56.086Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Apple reports third quarter results.\n\nSales: $81.80 billion, -1% y/y\nServices Rev: $21.21 billion, +8% y/y\niPad Rev: $5.79 billion, -20% y/y\n\nOperating Expenses: $13.4 billion, +4.6% y/y\n\nQ3 Outlook:\nRevenue: expect -1% y/y\n\nTim Cook: “We are happy to report that we had an all-time revenue record in Services during the June quarter, driven by over 1 billion paid subscriptions, and we saw continued strength in emerging markets thanks to robust sales of iPhone,”',
    tagUuids: [],
    uuid: '4394c433-3a35-4e25-af8c-e9e88eaeee8f',
    targetUuids: ['aapl'],
    createdDate: '2023-08-03T21:54:57.370Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Coinbase released Q2 2023 financial results:\n\nRevenue: $663 million\nSubscription and Service Rev: $335 million, -7% q/q\nTransaction Rev: $327 million, -13% q/q\nInstitutional Transaction Rev: $17 million, -24% q/q \nBitcoin Transaction Rev: 39% of total, up from 31% a year ago.\nTrading Volume: -37% q/q\n\n\nOperating Expenses: $781 million, -13% q/q\nNet Loss: $97 million, down from $1094 million a year ago.\n\nHeadcount: -30% y/y\n\n',
    tagUuids: [],
    uuid: '43017e8c-1bd8-40b4-bc54-deffbc3f2c13',
    targetUuids: ['coin'],
    createdDate: '2023-08-03T21:15:42.538Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Airbnb Announces Second Quarter 2023 Results\n\nRevenue: $2.5 billion, +18% y/y\nGross Booking Value: $19.1 billion, +13% y/y\nNights and Experiences Booked: 115.1 million, +11% y/y\n\nNet Income: $650 million, up from $379 million a year ago, equaling to 26% margin\n\n',
    tagUuids: [],
    uuid: 'd88dc0da-8f3c-4b8e-adeb-90737952114a',
    targetUuids: ['abnb'],
    createdDate: '2023-08-03T20:40:36.945Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Block released Q2 2023 financial results:\n\nGross Profit: $1.87 billion, +27% y/y\nCash App Gross Profit: $968 million, +37% y/y\n\nRevenue: $5.53 billion, +26% y/y\nTransaction Rev: $1.64 billion, +11% y/y\nSubscription and Service Rev: $1.46 billion, +33% y/y\n\nOperating Loss: $132 million, down from $214 million a year ago.\n\n"Square had strong momentum with its banking products, which generated $167 million in gross profit, up 24% year over year, driven primarily by Square Loans, Instant Transfer, and Square Debit Card."\n\n',
    tagUuids: [],
    uuid: '6b87969f-c84c-4971-8b0b-08b9b9700ae5',
    targetUuids: ['sq'],
    createdDate: '2023-08-03T20:26:31.995Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Second Quarter 2023 Results\n\nTotal Payment Volume: $376.5 billion, +11% y/y\nRevenue: $7.3 billion, +7% y/y\nTransaction Per Account: 54.7, +12% ttm\nOperating Income: $1.1 billion\n\nQ3 Outlook:\nRevenue: ~8% expected\n',
    tagUuids: [],
    uuid: '5da0f46e-0177-4398-90e1-a9aa74983cf1',
    targetUuids: ['pypl'],
    createdDate: '2023-08-03T20:02:52.231Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Unity Releases Q2 Financial Results\n\nRevenue: $533 million, +11% y/y pro-forma, accelerating compared to the 2% growth last quarter.\nCreate Solutions Rev: $193 million, +17% y/y\nGrow Solutions Rev: $340 million, +7% y/y pro-forma. \n\nNet Loss: $193 million, up from $204 million a year ago\nFree Cash Flow: $33 million\n\nQ3 Outlook:\nRevenue: +7% ~ +9% pro-forma\n\n"This quarter, Create Solutions delivered significant innovation and business model enhancements across our product lines. We continue to reduce our reliance on Professional\nServices as we build a scalable and profitable business."',
    tagUuids: [],
    uuid: '435358f0-51f0-4af1-b938-9dd4ceb5ef0b',
    targetUuids: ['u'],
    createdDate: '2023-08-02T22:33:20.685Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Shopify Announces Second-Quarter 2023 Financial Results\n\nGross Merchandise Volume: $55 billion, +17% y/y\nRevenue: $1.7 billion, +31% y/y\nMerchant Solutions Rev: $1.3 billion, +35% y/y\nSubscription Solution Rev: $444 million, +21% y/y\nMonthly Recurring Rev: $139 million, +30% y/y\n\nOperating Loss: $1.6 billion, up from \n$190 million a year ago, mainly due to $1.34 billion impairment on logistics businesses sale. \n\nQ3 Outlook:\nRevenue: low-twenties percentage rate growth y/y\nOperating Expense: flat to up slightly\n',
    tagUuids: [],
    uuid: '8936aa19-e86b-4f46-9d9d-2a8c5c83e4a3',
    targetUuids: ['shop'],
    createdDate: '2023-08-02T21:48:05.115Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'DoorDash Releases Second Quarter 2023 Financial Results\n\nRevenue: $2.133 billion, +33% y/y\nTotal Orders: 532 million, +25% y/y\nNet Revenue Margin: 13.0%, up from 12.3% a year ago\nNet loss: $172 million, down from $263 million loss a year ago.',
    tagUuids: [],
    uuid: '02662aef-85a8-417e-a0f7-12146f3e82f6',
    targetUuids: ['dash'],
    createdDate: '2023-08-02T20:20:58.468Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'AMD Reports Second Quarter 2023 Financial Results\n\nRevenue was $5.359 billion, -18% y/y\nDatacenter Revenue: $1.3 billion, -11% y/y, +2% q/q\nClient Revenue: $998 million, -54% y/y, +35% q/q\nGaming Revenue: $1.6 billion, -4% y/y, -10% q/q\nEmbedded Revenue: $1.5 billion, +16% y/y, -7% q/q\n\nOperating Margin: 0%, down from 8% a year ago\n\nCEO Lisa Su:\n“Our AI engagements increased by more than seven times in the quarter as multiple customers initiated or expanded programs supporting future deployments of Instinct accelerators at scale. We made strong progress meeting key hardware and software milestones to address the growing customer pull for our data center AI solutions and are on-track to launch and ramp production of MI300 accelerators in the fourth quarter."',
    tagUuids: [],
    uuid: '25b197df-65c4-4ea5-b907-0d0dac404a53',
    targetUuids: ['amd'],
    createdDate: '2023-08-02T02:33:30.979Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Caterpillar Reports Second-Quarter 2023 Results\n\nRevenue: $17.3 billion, +22% y/y\nConstruction Industries: $7.2 billion, +19% y/y\nResource Industries: $3.6 billion, +20% y/y\nEnergy & Transportation Industries: $7.2 billion, +27% y/y\n\nOperating Profit: $3.7 billion, +88% y/y\nOperating Margin: 21.1% \nOperating Cash Flow: $3.8 billion\n\nReturned $2.0 billion to shareholders through share repurchases and dividends in the quarter\n\nCEO:\n"Our results reflect continued healthy demand as we achieved double-digit top-line growth and record adjusted profit per share while generating strong ME&T free cash flow"\n\nOutlook:\nExpect 3Q 2023 sales and revenues to be higher than 3Q 2022, but lower than 2Q 2023\nFull-year 2023 adjusted operating profit margin1 expected to be close to the top end of our target range.',
    tagUuids: [],
    uuid: '2b9c71ba-10e1-45f5-86b5-d7df4bd8354f',
    targetUuids: ['CAT'],
    createdDate: '2023-08-01T22:07:21.297Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Uber Announces Results for Second Quarter 2023\n\nGross Bookings: $33.6 billion, +16% y/y\nMobility Bookings: $16.7 billion, +25% y/y\nDelivery Bookings: $15.6 billion, +12% y/y \n\nRevenue: $9.2 billion +14% y/y\nNet income: $394 million\n\nCEO Dara Khosrowshahi: \n“Robust demand, new growth initiatives, and continued cost discipline resulted in an excellent quarter, with trips up 22% and a GAAP operating profit, for the first time in Uber’s history”\n\nOutlook:\n• Gross Bookings of $34.0 billion to $35.0 billion\n• Adjusted EBITDA of $975 million to $1.025 billion\n',
    tagUuids: [],
    uuid: '68e3dc22-fff1-40cf-909a-51adfdead815',
    targetUuids: ['uber'],
    createdDate: '2023-08-01T20:54:21.726Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '​Revenue $2.67 billion, -41.1% Y/Y, -5% q/q\n\nCloud revenue -18% q/q,\n\nCloud represented 37% of total revenue. Sequentially, the decline was primarily due to a decrease in capacity enterprise drive shipments. primarily due to declines in both hard drive and flash product shipments.\n\nClient revenue +6% q/q\n\nClient represented 39% of total revenue. Sequentially, the increase was driven by growth in bit shipments for gaming consoles. The year-over-year decrease was due to declines in flash pricing, and lower client SSD and hard drive unit shipments for PC applications.\nConsumer represented 24% of total revenue. Sequentially, the increase was primarily due to higher retail SSD shipments. The year-over-year decrease was driven by price declines in Flash and lower retail hard drive shipments.\nConsumer revenue +3% q/q. \n\nNet Loss $715 million, increased from $572 million a year ago.\n\n',
    tagUuids: [],
    uuid: '58497e35-8f70-40a8-a559-228641000ab0',
    targetUuids: ['wdc'],
    createdDate: '2023-07-31T23:45:55.816Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'onsemi released earnings\n\nRevenue of $2,094.4 million, flat year-over-year\nRecord Automotive revenue exceeded $1 billion, +35% y/y\n\nSilicon Carbide Revenue +4x y/y\n\nSilicon carbide chips are used to extend the range of EVs.\n\nIndustrial Revenue $609.3 million +5% y/y\nGross Margin: 47.4%\n\nOperating margin 32.2%\n',
    tagUuids: [],
    uuid: '1f5f3c4a-d198-42b9-b67a-6c11263ce225',
    targetUuids: ['on'],
    createdDate: '2023-07-31T23:36:16.994Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'SoFi released earnings\n\nTotal net revenue $498 million +37% , driven by strong growth in personal loan originations \nMember was 6.2 million, +44% y/y\nNew Product 9.4 million, +43% y/y\nTotal Deposit 12.7 Billion, +73% y/y\n\nNet loss was $47.5 million, -50% y/y, expected to report a profit for the first time in Q4.\n\nManagement Raises Full-Year 2023 Guidance\n\n\nCEO: “We’re taking business, but it’s not from the regional banks, it’s from the largest banks in the country,”, “That’s where we’re getting the bulk of our market share.”',
    tagUuids: [],
    uuid: 'c5dc8cce-d419-4ecd-b165-7663d35e11e9',
    targetUuids: ['sofi'],
    createdDate: '2023-07-31T23:17:18.052Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Net income was $7.88 billion\n\nExxon Mobil Corp joined its rivals reporting a 56% slump in second quarter profit from a year ago, hurt by a drop in energy prices\n\nProfits at Chevron Corp, Shell and TotalEnergies shrank by 48%, 56%, 49% in the quarter, respectively.\n\n',
    tagUuids: [],
    uuid: 'd1059102-0cea-4e18-b2fd-b53683a22015',
    targetUuids: ['xom'],
    createdDate: '2023-07-29T07:37:55.087Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Procter & Gamble Co.’s sales and earnings both surpassed analysts’ estimates because of 7% higher prices, and strength from its US business.\n\nOrganic sales jumped 8%. \n\nCFO “The consumer continues to be strong. We’re seeing a bifurcation of the consumer. Those consumers that are a little bit more cash-strapped are looking to shop a little bit more in the dollar channel.”\n\nThe company also sees a slow recovery in China, in part because of high unemployment among young people.\n',
    tagUuids: [],
    uuid: '73f7a1d4-3747-40de-95b5-a0297e0c903d',
    targetUuids: ['pg'],
    createdDate: '2023-07-29T07:27:18.484Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Roku closed at their highest level in over a year with a significant increase of 31.4% to $89.61 today, marking its biggest daily percentage gain since November 2017\n\nSimilar to Meta Platforms and Alphabet's forecast, Roku also forecast its digital ad sales will continue to recover.",
    tagUuids: [],
    uuid: '4728d5cb-a3e6-4c3b-8809-3c27e30aa5e9',
    targetUuids: ['ROKU'],
    createdDate: '2023-07-29T07:14:38.441Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '\nInflation in the U.S. showed further signs of cooling in June, according to the personal consumption expenditures (PCE) price index, which the Federal Reserve monitors closely. The core PCE rose just 0.2% from the previous month, and 4.1% year-on-year, marking the lowest annual rate since September 2021. The headline PCE, which includes food and energy costs, also rose 0.2% monthly, and 3% annually, the lowest yearly rate since March 2021. Goods prices fell by 0.1%, while services increased by 0.3% during the month. Personal income rose by 0.3%, slightly below expectations, while spending was up 0.5%, in line with forecasts.\n\nThese results led to positive market reactions, as the data aligns with the narrative that inflation is easing and economic growth is continuing. The Fed, which recently raised interest rates to a target range of 5.25%-5.5%, has indicated that future decisions will be data-dependent. Despite the recent positive trends, officials believe that inflation remains too high and will need to see multiple months of solid data before changing course.',
    tagUuids: [],
    uuid: '0b5622c1-eff3-44c8-93cc-f0b8e2438ac4',
    targetUuids: ['Inflation'],
    createdDate: '2023-07-29T00:20:56.289Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '\nFord is recalling over 870,000 F-150 pickup trucks from the 2021 to 2023 model years in the U.S due to a malfunction where the electric parking brakes can activate unexpectedly. ',
    tagUuids: [],
    uuid: 'e0fec8a8-dffe-4112-b9e9-99ffc479a524',
    targetUuids: ['f'],
    createdDate: '2023-07-29T00:18:30.928Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Chinese tech stocks surged on Friday with Alibaba, Baidu, Bilibili, and JD.com experiencing significant gains on the U.S. stock exchanges. This followed a report suggesting that Chinese regulators might allow these tech giants greater freedom in supporting startup investments. The report has been seen as a sign of improving relations between Beijing and the tech sector, after a period of intense scrutiny and regulatory crackdowns. China has reportedly requested its leading tech companies to supply case studies of their most successful startup investments. The China Securities Regulatory Commission is also said to be considering various measures to bolster share prices, including reducing stamp duty and slowing down the rate of initial public offerings to maintain liquidity. Investors are hopeful that these proposals reflect a genuine intention to spur growth and reinvigorate the private sector.',
    tagUuids: [],
    uuid: 'ecfc1054-d850-4abb-9ca7-81b82a7a100e',
    targetUuids: ['BABA'],
    createdDate: '2023-07-29T00:11:44.012Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Wedbush Securities initiated coverage of Palantir with an outperform rating.\n\n"As we begin the 4th Industrial Revolution, Palantir is engaging in the widespread trend of various industries leveraging recent generative AI innovations to streamline operations and improve expense profiles"\n\n"Given the company\'s extensive experience handling customer data, PLTR’s transition to a pure-play AI name will leverage its existing expertise to drive advancements and deliver AI solutions powered by high-quality data."',
    tagUuids: [],
    uuid: '2cb7cdf0-4f17-4d5a-82fe-887a0fe02a86',
    targetUuids: ['pltr'],
    createdDate: '2023-07-29T00:09:08.657Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Chipotle Mexican Grill Inc.'s shares fell by nearly 9% following an announcement that inflation has impacted some of its most popular menu items. Although the company's Q2 food, beverage, and packaging costs were lower than the previous year due to price increases and lower avocado prices, inflation increased costs for items such as beef, tortillas, dairy, salsa, beans, and rice. Chipotle's CEO, Brian Niccol, indicated that the company plans to focus on transaction growth and is considering adding a new menu item once its chicken al pastor special ends in late August. The company expects \"low-grade inflation\" to continue into Q3, without the offset from cheaper avocados and the al pastor item. Q2 revenue rose nearly 14% to $2.51 billion, with same-restaurant sales up 7.4%.",
    tagUuids: [],
    uuid: '65e02c78-3bb7-4fb7-8e5d-4fe5b0988206',
    targetUuids: ['cmg'],
    createdDate: '2023-07-28T00:07:29.196Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Airline turbulence: Southwest Airlines and peers fall after cost outlook rattles investors\n\nThe Dallas-based carrier reported a 10% drop in net income for the quarter due to credit issued during the pandemic.\n\n',
    tagUuids: [],
    uuid: 'fcae6551-cba9-4121-9f08-dd9a97928a2e',
    targetUuids: ['luv'],
    createdDate: '2023-07-28T00:05:50.663Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Solar inverter maker Enphase Energy has projected Q3 revenue below Wall Street expectations due to weak demand in the US, causing its shares to drop 13.4% in extended trading. Demand growth in the US has been slow as lower electricity prices in states like Texas and Arizona have reduced the appeal of residential solar power. Enphase expects Q3 revenue between $550 and $600 million, whereas analysts had estimated an average of $746.5 million',
    tagUuids: [],
    uuid: 'e387a6cc-bc01-4f18-b881-42bc30ce13df',
    targetUuids: ['enph'],
    createdDate: '2023-07-27T23:54:11.526Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Enphase Energy -12.7% post-market Thursday after posting better than expected Q2 adjusted earnings and revenues that rose by more than a third, but guiding Q3 revenues well below analyst expectations.\n\nQ2 net income rose to $157.2M, or $1.09/share, from $76.9M, or $0.54/share, in the year-earlier quarter, while revenues jumped 34% Y/Y to $711.1M from $530.2M last year.\n\nBut Enphase (ENPH) issued sharply downside revenue guidance for Q3, seeing sales of $555M-$600M, far below the $749M analyst consensus estimate,\n\nEnphase (ENPH) also said its board authorized a new stock buyback program of up to $1B.',
    tagUuids: [],
    uuid: 'e4823d12-20cf-4678-9d29-c4429436c0f8',
    targetUuids: ['enph'],
    createdDate: '2023-07-27T23:52:31.450Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Stock markets were down after hawkish news from Japan policy marker.\n\nNikkei reported that Bank of Japan will discuss adjusting its yield curve control policy on Friday to allow long-term interest rates to rise above its 0.5% cap.\n\nTreasury yields spiked, the yen jumped, and what had been another rousing rally in the S&P 500 quickly reversed.\n\nThe BOJ’s public relations department didn’t immediately respond to the report.\n\nPrior to the report, economist preditc BOJ will keep the key short-term rate at minus 0.1% at the end of their meeting Friday.',
    tagUuids: [],
    uuid: 'c5324ac3-7d96-4608-8b0b-0f8294c7a944',
    targetUuids: ['rate'],
    createdDate: '2023-07-27T23:49:33.294Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Intel returns to profitability after two quarters of losses.\n\nThe company issued a stronger-than-expected forecast.\n\nThe stock jumped in extended trading.\n\nIntel posted net income of $1.5 billion, or 35 cents per share, versus a net loss of $454 million, or a loss of 11 cents per share, in the same quarter last year.\n\n\nRevenue fell 15% to $12.9 billion from $15.3 billion a year ago, marking the sixth consecutive quarter of declining sales.\n\nIntel CEO Pat Gelsinger said on a call with analysts the company still sees “persistent weakness” in all segments of its business through year-end, and that server chip sales won’t recover until the fourth quarter. He also said that cloud companies were focusing more on securing graphics processors for artificial intelligence instead of Intel’s central processors.\n\n',
    tagUuids: [],
    sourceLink:
      'https://www.cnbc.com/2023/07/27/intel-intc-earnings-report-q2-2023.html',
    uuid: '14875c60-063d-44f3-8b1d-b28a9aaa9316',
    targetUuids: ['intc'],
    createdDate: '2023-07-27T23:39:14.951Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Roku Releases Second Quarter 2023 Financial Results\n\n• Total net revenue was $847 million, up 11% year over year \n\n• Active Accounts were 73.5 million, a net increase of 1.9 million Q/Q\n\n• Streaming Hours were 25.1 billion, up 4.4 billion hours YoY\n\n• Average Revenue Per User (ARPU) was $40.67 (trailing 12-month basis), down 7% YoY\n\n"We have begun to see some ad verticals improve, which resulted in modest YoY Platform revenue growth in Q2, and we are well positioned to re-accelerate growth as the ad market recovers."\n\nShareholder Letter: https://image.roku.com/c3VwcG9ydC1B/2Q23-Shareholder-Letter-Final.pdf',
    tagUuids: [],
    uuid: '5392cc96-5832-4fd8-acf0-03e6872a5afa',
    targetUuids: ['roku'],
    createdDate: '2023-07-27T22:07:55.390Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Intel Reports Second-Quarter 2023 Financial Results\n\n• Second-quarter revenue of $12.9 billion, down 15% year over year (YoY).\n\n• Second-quarter results on the top and bottom line exceeded the high end of guidance;\n\nCEO: “Our Q2 results exceeded the high end of our guidance as we continue to execute on our strategic priorities, including building momentum with our foundry business and delivering on our product and process roadmaps," \n\n"We are also well-positioned to capitalize on the significant growth across the AI continuum”\n\nCFO: " Strong execution, including progress towards our $3 billion in cost savings in 2023"',
    tagUuids: [],
    uuid: 'bbf7e6f9-ec13-4c05-be4d-443b5e779987',
    targetUuids: ['intc'],
    createdDate: '2023-07-27T21:56:28.214Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'opinion',
    content: 'Google PE is lower than Microsoft',
    tagUuids: [],
    uuid: '700e6257-0182-449f-a567-9ad44f4d7761',
    targetUuids: ['googl'],
    createdDate: '2023-07-26T23:23:44.400Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'ServiceNow released earnings\n\nRevenue was $2.15 billion, +23%\nRemaining performance obligation was $7.2 billion, +25%\n45 customers with more than $20 million in ACV, +55% \n\nUnveiled AI Lighthouse, a partnership with Nvidia fast track the development and adoption of generative AI capabilities.',
    tagUuids: [],
    uuid: '0b56b68d-1cb5-479e-abf8-3a2cd1111bba',
    targetUuids: ['now'],
    createdDate: '2023-07-26T21:17:15.853Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Chipotle released earnings\n\nRevenue was $2.5 billion, +13.6%\nOperating margin was 17.2%, an increase from 15.3%\nComparable store sales +7.4%, lower than the estimates of 7.7% \n',
    tagUuids: [],
    uuid: 'b88b7983-3b6b-45b6-a98a-1aef568ee92f',
    targetUuids: ['cmg'],
    createdDate: '2023-07-26T21:12:57.717Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Boeing released earnings.\n\nRevenue was $19.75 1 billion, +18%\nNet loss was $149 million\n\n$440 billion backlog includes more than 4,800 commercial planes.\n\nCEO: "With demand strong, we\'re steadily increasing our production rates across key programs and growing investments in our people, products and technologies."',
    tagUuids: [],
    uuid: '87b2fb39-29df-459a-9514-531b4839afae',
    targetUuids: ['ba'],
    createdDate: '2023-07-26T21:08:29.907Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Align Technology released earnings\n\nRevenue was $1.0 billion, +3.4%\nOperating Income was $171.9 million ->17.2% operating margin.\n\nClear Aligner volume for teens +9.7%\n\nAlign Technology stock is up 12% after hours.\n',
    tagUuids: [],
    uuid: '2a5570b4-3193-4fd9-93cd-8d693cf96d04',
    targetUuids: ['algn'],
    createdDate: '2023-07-26T21:03:59.631Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Meta released earnings\n\nRevenue was $32 billion, +11%\nFirst double-digit growth since Q4 2021\n\nOperating Income was $9.4 billion, +12%\nNet Income was $7.79 billion, +16%\n\nDAP (Dialy Active People) was 3.07 billion, +7%\n\nQ3 Revenue Growth estimate is at least +15%',
    tagUuids: [],
    uuid: '8d158068-f6b0-4bab-adb5-755a4838b453',
    targetUuids: ['meta'],
    createdDate: '2023-07-26T20:31:30.833Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Spotify released earnings\n\nRevenue was €3.17B, +11%\nMAU was 551 million, +27%\nPremium subscribers were 217 million\nNet loss increased to €302 million from €125 million. \nNext quarter's revenue guidance was €3.3B",
    tagUuids: [],
    uuid: '48920ee7-7781-41b7-9c28-aa5c126007f5',
    targetUuids: ['spot'],
    createdDate: '2023-07-26T11:23:29.316Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Snap released earnings.\n\nRevenue was $1,068 million, -3.6%.\nNet loss was $377 million, improved from $422 million in the prior year.\nDAUs were 397 million in Q2 2023, an increase of 50 million, +14%\nIt guided to $1.07B-$1.13B in revenues for the third quarter, a change of -5% to 0%\n\n"From a revenue perspective, our business remains in a period of rapid transition as we work to improve our advertising platform, while forward visibility of advertising demand remains limited,"',
    tagUuids: [],
    uuid: '92609df5-ce25-491c-8496-81bc7f66cba6',
    targetUuids: ['snap'],
    createdDate: '2023-07-26T11:14:33.125Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'PacWest Bancorp has agreed to combine with Banc of California in an all-stock merger transaction.\n\nPacWest (PACW) stockholders will receive 0.6569 of a share of Banc of California (BANC) common stock for each share of PacWest. \n\nNew company will operate under the Banc of California name.\n\n',
    tagUuids: [],
    uuid: 'be221cc9-15d6-4816-a5b6-94b25b4081f2',
    targetUuids: ['pacw', 'banc'],
    createdDate: '2023-07-26T11:10:14.451Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'GE released earnings, beating both the top and bottom lines and raising guidance.\n\nTotal orders of $22.0B, +59%; organic orders +58%\nTotal revenues (GAAP) of $16.7B, +18%; adjusted revenues* $15.9B, +19% organically\nTotal cost and expenses went up 15% YoY\n',
    tagUuids: [],
    uuid: '700a624b-54ce-4bd2-8b95-cb31e11d226e',
    targetUuids: ['ge'],
    createdDate: '2023-07-26T11:05:33.812Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Google released earnings\n\nRevenue was $74.6 billion, +7%\nOperating Income was $21.8 billion, +29%\nNet income was $18.4 billion\n\nYoutube ads grew from 7.34 billion to 7.66 billion.\nGoogle Cloud was 8 billion, +28%.\nGoogle Cloud's operating income grew from (590) million to 395 million.",
    tagUuids: [],
    uuid: '2f96f34a-185a-4d41-a4f0-d6dd11acfac5',
    targetUuids: ['googl'],
    createdDate: '2023-07-26T10:57:59.831Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Microsoft released earnings.\n\nRevenue was $56.2 billion, +8%\nOperating income was $24.3 billion, +18%\nNet income was $20.1 billion, +20%\n\nMicrosoft Cloud revenue was $30.3 billion, +21% (Azure revenue +26%)\nRevenue in Productivity and Business Processes was $18.3 billion, +10%\nAnticipated ~25% Azure cloud growth this quarter ',
    tagUuids: [],
    uuid: '8d881aac-67c9-48fd-a03b-4a885caad26e',
    targetUuids: ['msft'],
    createdDate: '2023-07-26T10:45:19.273Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Movie ‘Barbie’, based on Mattel's toy, set a record $155 Million post-pandemic box office.\n\nMovie theaters, including AMC, surged on the news.\n\nAMC also revised its stock conversion plan, which would dilute investors' shares after a U.S. court blocked it.",
    tagUuids: [],
    uuid: '2fa584c5-6d1f-456e-ae5b-1063c6827e62',
    targetUuids: ['amc', 'mat'],
    createdDate: '2023-07-25T00:02:53.658Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Chevron released second-quarter earnings.\n\nNet profit was $6 billion, which is almost half of the record profit in the same period last year.\n\nCFO: "The macro price environment has softened a little bit versus the first quarter."\n\nCEO Mike Wirth will remain after the company waived a mandatory retirement age of 65 \n\n',
    tagUuids: [],
    uuid: '62851d4f-b07c-43e2-a729-074ce969fe90',
    targetUuids: ['cvx'],
    createdDate: '2023-07-24T23:49:58.308Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      '\nElon Musk rebranded Twitter from the blue bird logo to the letter X.\n\nThe purpose is to make Twitter an all-in-one app.\n\nTwitter / X CEO: “(company will) continue delight our entire community with new experiences in audio, video, messaging, payments, banking – creating a global marketplace for ideas, goods, services, and opportunities.”\n\n',
    tagUuids: [],
    uuid: '5255fa03-24e2-45e2-9baf-93672e7d7667',
    targetUuids: ['tsla'],
    createdDate: '2023-07-24T23:07:41.115Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Spotify increases prices for its premium subscription plans\n\nIn US:\nPremium Individual change to $10.99, up from $9.99;\nPremium Duo plan changed to $14.99, up from $12.99;\nPremium Family plan changed to $16.99, up from $15.99;\n\nPrice increase also affect other countries, including Canada, France, the U.K., Mexico and Australia.',
    tagUuids: [],
    uuid: 'a994efd5-2df9-42f5-9442-8669b5297eff',
    targetUuids: ['spot'],
    createdDate: '2023-07-24T22:45:12.344Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'NXP Semiconductors released earnings\n\nRevenue of $3.3B, -0.4% y/y\nAutomotive revenue +9% y/y\nIndustrial & IoT revenue -19% y/y\nMobile revenue -27% y/y\n\nGAAP Operating Income was $937 million, -1% y/y\n\nNext quarter revenue is expected to decrease by 1% y/y as well.',
    tagUuids: [],
    uuid: '91c9c848-eede-4113-b819-dba6a372d9e8',
    targetUuids: ['nxpi'],
    createdDate: '2023-07-24T21:02:47.401Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'opinion',
    content:
      'Ark Invest’s Cathie Wood said her flagship innovation fund has reduced its China exposure to zero as the developing market faces an economic slowdown.\n\n',
    tagUuids: [],
    uuid: '46f66954-4e66-44e2-b862-6481cd1f54e1',
    authorUuid: 'cathiewood',
    targetUuids: ['china'],
    createdDate: '2023-07-21T16:30:19.367Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'American Express released earnings.\n\nRevenue was $15.1 billion, +12% y/y, with card member spending reaching a quarterly high. \n\nEarnings per share was $2.89, +12% y/y.\n\nThe company reaffirms full-year 2023 revenue and EPS guidance\n\n"Card Member spending hit another all-time high, growing 8 percent on an FX-adjusted basis, driven by double-digit growth in U.S. Consumer and International Card Member spending"',
    tagUuids: [],
    uuid: '40254458-f1f8-4832-8f67-68a0db7f64e9',
    targetUuids: ['axp'],
    createdDate: '2023-07-21T16:11:54.380Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'TSMC reported revenue slipped 10% from a year ago to NT$480.84 billion\n\nNet income fell 23.3% from a year ago to NT$181.8 billion.\n\nThe second quarter revenue and net income figures were better than market expectations.\n\n“Moving into third quarter 2023, we expect our business to be supported by the strong ramp of our 3-nanomenter technologies, partially offset by customers’ continued inventory adjustment,” Wendell Huang, CFO of TSMC said.',
    tagUuids: [],
    uuid: '4a9ec066-6f0b-470c-9d5c-36c5660f76f6',
    targetUuids: ['tsm'],
    createdDate: '2023-07-20T22:38:41.076Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Blackstone released earnings.\n\nProfit was $1.2 billion, -39% y/y\n\nIt became the first private equity firm to manage a $1 trillion.\n\nIt slowed the pace of doing new deals and cashing out of existing bets as more buyers and sellers struggled to agree on valuations for private assets.',
    tagUuids: [],
    uuid: '3e91f094-3be2-46ac-bb14-dbcf13ebf8fe',
    targetUuids: ['bx'],
    createdDate: '2023-07-20T22:34:56.964Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Discover Financial Services tumbled more than 13% after its quarterly earnings fell short of expectations.\n\nNet income was $901 million, -18% y/y\n\nIt will also pause share repurchases as it investigates incorrect classification of credit card accounts',
    tagUuids: [],
    uuid: 'ed125fa2-ff7c-4277-ac21-50f06ec3b0df',
    targetUuids: ['dfs'],
    createdDate: '2023-07-20T22:26:12.312Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Johnson & Johnson released earnings that topped Wall Street’s expectations.\n\nRevenue was $25.5 billion, +6.3% y/y\n\nOperating Income was $6.7 billion, +15.8% y/y\n\nOperating Margin 26.4%',
    tagUuids: [],
    uuid: '5213cf95-39cf-4fc1-a62c-a079cbf2b02f',
    targetUuids: ['jnj'],
    createdDate: '2023-07-20T22:09:31.447Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      "Netflix released earnings\n\nRevenue was $8.187 billion, up 2.7% y/y\n\nOperating Margin was 22.3%\n\nNext quarter's revenue growth was expected to be 7.5% \n\nPaid Memberships was 238.39 million, up 8.00% y/y",
    tagUuids: [],
    uuid: '31c52dc5-a3dd-4286-85e4-2cfa97917be3',
    targetUuids: ['nflx'],
    createdDate: '2023-07-20T21:58:15.326Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Tesla released earnings.\n\nRevenue rose 47% to $24.9 billion\n\nGross margin was 18.2% in the quarter, lower than the 25% margin from a year ago.\n\nThe company now has 16 days worth of inventory globally, up from four days a year ago.',
    tagUuids: [],
    uuid: 'f3314d82-b904-40a8-9fb3-c245d9edfbb5',
    authorUuid: '',
    targetUuids: ['tsla'],
    createdDate: '2023-07-19T23:55:56.505Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Microsoft charges $30 per user per month to use popular AI tool Copilot for Microsoft 365 E3, E5, Business Standard, and Business Premium customers.\n\n',
    tagUuids: [],
    uuid: '8b2286d0-d6d3-4707-981b-5566c73c9176',
    targetUuids: ['msft'],
    createdDate: '2023-07-18T23:48:52.026Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    noteType: 'action',
    content:
      'Roku shares jump as the company partners with Shopify, allowing customers to purchase products through Roku TVs.',
    tagUuids: [],
    uuid: '5976d522-64c7-4da9-8073-13d0142c79f0',
    targetUuids: ['roku', 'shop'],
    createdDate: '2023-07-12T01:17:36.412Z',
    creatorUuid: 'hwu106@gmail.com',
  },
  {
    content:
      'Exxon Mobil said lower natural gas prices and refining margins will reduce second-quarter earnings by about $4 billion compared with the previous three months.\n\n',
    tagUuids: [],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-07-05/exxon-sees-4-billion-earnings-hit-from-gas-prices-refining',
    uuid: 'd253ff8a-af58-4f96-814d-7fddc200580b',
    noteType: 'action',
    creatorUuid: 'jane.doe@example.com',
    targetUuids: ['xom'],
    createdDate: '2023-07-06T21:48:18.747Z',
  },
  {
    content:
      'Google has delayed the release of a fully custom chip for its Pixel smartphones until 2025.\n\nGoogle will also switch from Samsung to Taiwan Semiconductor Manufacturing Co for making the chips.',
    tagUuids: [],
    sourceLink:
      'https://www.reuters.com/technology/google-delays-release-fully-custom-phone-chip-until-2025-information-2023-07-06/',
    uuid: 'dafe59d4-d694-4981-affb-e777745940aa',
    noteType: 'action',
    creatorUuid: 'will.smith@example.com',
    targetUuids: ['googl'],
    createdDate: '2023-07-06T21:27:47.408Z',
  },
  {
    content:
      "More than 30 million users signed up for Meta's new app Threads, which will compete with Twitter.\n\nThe app will let users bring over their existing follower lists and account names from Instagram and have the same content rules with the same controls for muting and blocking harassing accounts.",
    tagUuids: [],
    uuid: 'b96a4053-a73b-47a8-be8a-9c559b577b92',
    noteType: 'action',
    creatorUuid: 'jimmy.lee@example.com',
    targetUuids: ['meta'],
    createdDate: '2023-07-06T21:16:47.808Z',
  },
  {
    content:
      "MosaicML, an AI startup that Databricks recently acquired, found AMD's chip could get 80% of the performance of Nvidia's chip\n\nMosaicML CTO Tang said they could use AMD software to train a large language model without having to make any changes to its code base. If developers can find AMD's chips at the right price, \"you can already switch to these today; they're essentially interchangeable\" with Nvidia chips.\n",
    tagUuids: [],
    uuid: '5a021968-5e37-4111-bb98-118b5955f501',
    noteType: 'opinion',
    creatorUuid: 'jane.doe@example.com',
    targetUuids: ['AMD'],
    createdDate: '2023-06-30T21:17:38.670Z',
  },
  {
    content:
      'The number of electric vehicle (EV) charging ports in the U.S. is estimated to increase four times from current levels to 18M by 2027',
    tagUuids: [],
    uuid: '13fd7a5e-231a-471d-b1e2-2bf6a58b70e7',
    noteType: 'opinion',
    authorUuid: 'Research Firm Wood Mackenzie',
    creatorUuid: 'john.smith@example.com',
    targetUuids: ['tsla'],
    createdDate: '2023-06-29T20:55:43.115Z',
  },
  {
    content:
      'Micron Technology released latest financial results\n“We have increased confidence that the industry has passed the bottom for quarterly revenue and year-on-year revenue growth.”\n“The impact of the May 21st decision by the Cyberspace Administration of China (CAC) on the business of Micron remains uncertain and fluid”.\n“We currently estimate that approximately half of that China-headquartered customer revenue, which equates to a low-double-digit percentage of Micron’s worldwide revenue, is at risk of being impacted.”',
    tagUuids: [],
    uuid: '1af7d92a-a535-4a8b-9682-e36af53dad54',
    noteType: 'action',
    creatorUuid: 'alice.williams@example.com',
    targetUuids: ['mu'],
    createdDate: '2023-06-29T20:47:07.568Z',
  },
  {
    content:
      'U.S.\'s central bank states that all 23 banks met minimum capital requirements under a hypothetical recession stress tests.\nTest included a global recession with a 40% decline in commercial real estate prices, a substantial increase in office vacancies, and a 38% drop in house prices. Under the scenario, the unemployment rate rose 6.4 percentage points to a peak of 10%.\nFed Vice Chair for Supervision Michael S. Barr. "Today\'s results confirm that the banking system remains strong and resilient," \n',
    targetUuids: ['Economy'],
    uuid: '3439c4e2-505f-4ca9-b557-de66a060ac0c',
    noteType: 'action',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-06-29T11:57:35.533Z',
  },
  {
    noteType: 'opinion',
    targetUuids: ['mortgage'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
    content:
      "Mortgage Bankers Association's deputy chief economist: 'New home sales have been driving purchase activity in recent months as buyers look for options beyond the existing-home market'",
    date: convertDateToUTC(new Date('2023-6-28')),
  },

  {
    noteType: 'action',
    targetUuids: ['u'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b43',
    title:
      'launched Unity Sentis and Unity Muse, two new AI platforms designed to make creators more productive and their RT3D experiences more engaging. Unity Sentis is a cross-platform runtime inference engine that helps deploy AI models in any Unity project, and Unity Muse consists of tools used to accelerate creation of RT3D content. Together, both Unity Muse and Unity Sentis leverage AI to enhance the interactivity of gameplay and RT3D powered experiences, while accelerating creative workflows. Unity today also launched a dedicated marketplace on the Unity Asset Store with a collection of Verified Solutions that accelerate AI-driven game development.',
  },
  {
    noteType: 'action',
    targetUuids: ['amzn'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
    title:
      'FTC Sues Amazon, Alleging Deceptive Practices Tied to Prime Subscriptions',
  },
  {
    noteType: 'action',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
    title: 'Rivian makes deal with Tesla to join EV supercharger network',
  },
  {
    noteType: 'opinion',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
    title:
      'Barclays analyst Dan Levy downgraded Tesla stock to equal weight, down from overweight',
    authorUuid: 'barclaysUuid',
  },

  {
    noteType: 'action',
    targetUuids: ['adbe'],
    title: ' repurchased approximately 2.7 million shares during the quarter',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
  },

  {
    noteType: 'action',
    targetUuids: ['coin'],
    title: 'serves as custodian for BlackRock’s first bitcoin ETF',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
  },
  {
    noteType: 'action',
    targetUuids: ['kr'],
    title: 'released quarterly result and missed revenue estimates.',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
  },
  {
    noteType: 'action',
    targetUuids: ['adbe'],
    title:
      'reported better-than-expected quarterly results and boosted its outlook for the year. ',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
  },
  {
    noteType: 'action',
    targetUuids: ['dis'],
    title: 'CFO Christine McCarthy steps down',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b93',
  },
  {
    noteType: 'action',
    targetUuids: ['msft'],
    title:
      'CTO Kevin Scott said the next generation AI business will be the fastest-growing $10 billion business in our history.',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b92',
  },
  {
    noteType: 'action',
    targetUuids: ['unh'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'said it saw increased demand from patients in Medicare health plans for those aged 65 and above, particularly related to knees and hips.',
    createdDate: convertDateToUTC(new Date('2023-6-14')),
  },
  {
    noteType: 'action',
    targetUuids: ['uber'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'launched a peer-to-peer car-sharing service.',
    createdDate: convertDateToUTC(new Date('2023-6-8')),
  },
  {
    noteType: 'action',
    targetUuids: ['uber'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'launched a peer-to-peer car-sharing service.',
    createdDate: convertDateToUTC(new Date('2023-6-8')),
  },
  {
    noteType: 'action',
    targetUuids: ['adbe'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'released generative AI service Sensei GenAI and Firefly for enterprise, a generative AI tool designed to be commercially safe. ',
    createdDate: convertDateToUTC(new Date('2023-6-8')),
  },
  {
    noteType: 'number',
    targetUuids: ['nasdaq'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0107,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['nasdaq'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0107,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['sp500'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0145,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['dow'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0212,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'action',
    targetUuids: ['crm'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'released Q1 results',
  },

  {
    noteType: 'opinion',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'CEO Summit Singh',
    content:
      '“2023 is off to a strong start for Chewy. Our first quarter results reflect accelerating double-digit topline growth and continued expansion of adjusted EBITDA margin. Net sales per active customer and Autoship customer sales also both reached new record highs for the company and continued to fuel customer loyalty and spend towards our platform,”',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },

  {
    noteType: 'action',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'released Q1 Earnings and Revenues Beat Estimates',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'action',
    targetUuids: ['meta'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: "unveils Quest 3 mixed reality headset ahead of Apple's VR debut",
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'opinion',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'Truist analyst William Stein',
    content:
      'maintained buy rating and expect NVDA is ramping revenue in a wide variety of products',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'action',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: ' Elon Musk Is the Richest Person Again',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'action',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'was added to an ESG Index',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },

  {
    noteType: 'opinion',
    targetUuids: ['s'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    authorUuid: 's',
    content:
      'Our Q1 topline growth did not meet our expectations...We now expect full year revenue to grow 41% at the midpoint.',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'action',
    targetUuids: ['s'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'released fiscal Q1 2024 result that missed revenue estimates',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },

  {
    noteType: 'opinion',
    targetUuids: ['lulu'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'CFO Meghan Frank',
    content:
      ' A meaningful acceleration in our China sales trend, coupled with lower air freight, contributed to our better than planned financial performance. We are pleased with our momentum heading into the second quarter and for the full year as reflected in our revised outlook for FY23.',
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['lulu'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'Net Margin',
    changeRate: 290405 / 2000792,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['lulu'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'Operating Margin',
    changeRate: 0.201,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['s'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: -0.36,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['avgo'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: 0.0001,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['mdb'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: 0.21,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['lulu'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: 0.13,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['okta'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.1783,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.2157,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['crm'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0469,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['meta'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0298,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['ai'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.1322,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0176,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['dg'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.1951,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0512,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['nasdaq'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0128,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['sp500'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0099,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['dow'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0047,
    createdDate: convertDateToUTC(new Date('2023-6-1')),
  },
  {
    noteType: 'number',
    targetUuids: ['nasdaq'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0063,
    createdDate: convertDateToUTC(new Date('2023-5-31')),
  },
  {
    noteType: 'number',
    targetUuids: ['sp500'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0061,
  },
  {
    noteType: 'number',
    targetUuids: ['dow'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0041,
  },
  {
    noteType: 'number',
    targetUuids: ['jwn'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: 0.0686,
  },
  {
    noteType: 'number',
    targetUuids: ['hpe'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0709,
  },
  {
    noteType: 'number',
    targetUuids: ['aap'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.3504,
  },
  {
    noteType: 'number',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0568,
  },
  {
    noteType: 'number',
    targetUuids: ['amd'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0564,
  },
  {
    noteType: 'action',
    targetUuids: ['twlo'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'surged on report that activist Legion Partners pushing for changes.',
  },
  {
    noteType: 'number',
    targetUuids: ['twlo'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.11,
  },
  {
    noteType: 'action',
    targetUuids: ['sofi'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'surged as debt ceiling bill would end student loan pause.',
  },
  {
    noteType: 'number',
    targetUuids: ['sofi'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.15,
  },
  {
    noteType: 'opinion',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'CEO Summit Singh',
    content:
      'Our first quarter results reflect accelerating double-digit topline growth and continued expansion of adjusted EBITDA margin. Net sales per active customer and Autoship customer sales also both reached new record highs for the company and continued to fuel customer loyalty and spend towards our platform.',
  },
  {
    noteType: 'number',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'Revenue',
    changeRate: 0.147,
  },
  {
    noteType: 'number',
    targetUuids: ['chwy'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: 0.13,
  },

  {
    noteType: 'action',
    targetUuids: ['crwd'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'Announced CrowdStrike and AWS are working together to develop powerful new Generative AI applications that help customers accelerate their cloud, security and AI journeys.',
  },
  {
    noteType: 'action',
    targetUuids: ['crwd'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'Introduced Charlotte AI, a new generative AI security analyst that uses the world’s highest-fidelity security data and is continuously improved through a tight human feedback loop from usage by CrowdStrike’s industry-leading threat hunters, managed detection and response operators, and incident response experts.',
  },

  {
    noteType: 'number',
    targetUuids: ['crwd'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'after hours',
    changeRate: -0.11,
  },

  {
    noteType: 'number',
    targetUuids: ['crm'],
    name: 'after hours',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0568,
  },

  {
    noteType: 'action',
    targetUuids: ['c3ai'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'released Q1 earnings.',
  },
  {
    noteType: 'number',
    targetUuids: ['c3ai'],
    name: 'Operating Margin',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -36517 / 46112,
  },
  {
    noteType: 'number',
    targetUuids: ['c3ai'],
    name: 'after hours',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.1897,
  },
  {
    noteType: 'number',
    targetUuids: ['c3ai'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0896,
  },
  {
    noteType: 'number',
    targetUuids: ['coin'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0747,
  },
  {
    noteType: 'number',
    targetUuids: ['box'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    name: 'Stock Price After Hours',
    changeRate: 0.0307,
  },
  {
    noteType: 'number',
    targetUuids: ['pltr'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0717,
  },
  {
    noteType: 'number',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0414,
  },
  {
    noteType: 'number',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.0299,
  },
  {
    noteType: 'number',
    targetUuids: ['nasdaq'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0.00312,
  },
  {
    noteType: 'number',
    targetUuids: ['sp500'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: 0,
  },
  {
    noteType: 'number',
    targetUuids: ['dow'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0015,
  },
  {
    noteType: 'action',
    targetUuids: ['hpe'],
    name: 'Stock Price After Hours',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'announced Q2 results that missed expectations and lowered revenuce guidance.',
  },
  {
    noteType: 'number',
    targetUuids: ['hpe'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    changeRate: -0.0812,
  },
  {
    noteType: 'action',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'introduced DGX GH200 AI supercomputer for developing generative AI language applications, recommender systems and data analytics workloads.',
  },
  {
    noteType: 'opinion',
    targetUuids: ['nflx'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    content: 'Growth is saturated while having too much competition.',
    authorUuid: 'herman.wrt@gmail.com',
  },
  {
    noteType: 'number',
    targetUuids: ['tsla'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title: 'Model Y became the world best selling car in Q1.',
  },
  {
    noteType: 'action',
    targetUuids: ['nvda'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'became the first chip company reached trillion dollar market value.',
  },
  {
    noteType: 'action',
    targetUuids: ['c3ai'],
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b91',
    title:
      'announced today that C3 Generative AI is now available on the AWS Marketplace.',
  },
  {
    noteType: 'number',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b9',
    targetUuids: ['c3ai'],
    changeRate: 0.3342,
  },
  {
    authorUuid: 'morningstarUuid',
    targetUuids: ['nvda'],
    noteType: 'opinion',
    uuid: '14f2b529-fdbd-4033-b92b-4aed55468b8',
    content:
      'We believe Nvidia possesses a wide economic moat stemming from its intangible assets related to the design of graphics processing units. The company is the originator of and leader in discrete graphics, having captured the lion’s share of the market from longtime rival AMD',
  },

  {
    noteType: 'action',
    targetUuids: ['jobs'],
    title:
      'US initial jobless claims, GDP data will be released on Thursday, May 27.',
    name: 'event',
    changeRate: -0.0266,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['home-sales'],
    title: 'US new home sales data will be released on Tuesday, May 25.',
    name: 'event',
    changeRate: -0.0266,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'number',
    targetUuids: ['ms'],
    title: 'Stock Price Today',
    name: 'Price',
    changeRate: -0.0266,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['ms'],
    title: 'CEO James gorman, will step down within 12 months.',
    name: 'CEO',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['bby', 'dltr', 'adsk', 'cost'],
    title: 'will release earnings on Thursday, May 25',
    name: 'earnings',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['kss', 'nvda', 'snow', 'aeo'],
    title: 'will release earnings on Wednesday, May 24',
    name: 'earnings',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['msft'],
    title: 'will hold its three-day developers conference on Tuesday, May 23.',
    name: 'products',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['zm'],
    title: 'will release earnings on Monday, May 22',
    name: 'earnings',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'number',
    targetUuids: ['fl'],
    title: 'Stock Price Today',
    name: 'Price',
    changeRate: -0.2724,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },

  {
    noteType: 'number',
    targetUuids: ['wmt'],
    name: 'Revenue',
    title: 'Global Advertising',
    changeRate: 0.3,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },

  {
    noteType: 'action',
    targetUuids: ['wmt'],
    title: ' raises FY24 outlook',
    changeRate: 0.26,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'number',
    targetUuids: ['wmt'],
    name: 'Revenue',
    title: 'eCommerce Globally',
    changeRate: 0.26,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'number',
    targetUuids: ['wmt'],
    name: 'Revenue',
    title: 'First Quarter Revenue',
    changeRate: 0.076,
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['wmt'],
    title: 'releases earnings',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'action',
    targetUuids: ['ttwo'],
    title: 'releases fiscal fourth-quarter earnings',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    noteType: 'numbers',
    targetUuids: ['ttwo'],
    changeRate: 10.6,
    title: 'Stock Price After Hours',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },

  {
    noteType: 'opinion',
    authorUuid: 'steve-cohen',
    title: '"I’m making a prognostication — we’re going up"',
    content:
      'Cohen, founder of hedge fund Point72, said the burgeoning field of AI will likely create new jobs.\n"I’m actually pretty bullish"\n ',
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b8',
  },
  {
    title: 'Sea Limited Released 2023 Q1 Earnings',
    content:
      'Price Change Today: -17.74%\nRevenue: $3 billion, +4.9% y/y \nGross Profit: $1.4 billion, +21.1% y/y\n\nE-commerce Revenue: $2.1 billion, +36.3% y/y\nDigital Entertainment Revenue: $539.7 million, -52.5% y/y\nDigital Financial Service Revenue: $412.8 million, +75% y/y\n\n',
    tagUuids: [],
    uuid: '14f2b529-fdbd-4033-b92b-4aebd55468b9',
    noteType: 'opinion',
    creatorUuid: 'hwu1106@gmail.com',
    targetUuids: ['se'],
    createdDate: '2023-05-16T21:00:37.878Z',
  },

  {
    title: 'Daily Market Highlights 5/15/23 ',
    content:
      '📉 Nasdaq +0.66%\n📉 S&P500 +0.30%\n💲 Bitcoin -0.5% to $27,225.77\n🧈 Gold -0.44%\n🛢️ Crude Oil WTI -0.45%\n\n🤖 C3.ai +21.13%\n📝 Stock surges on upbeat sales updates; CEO: "Demand Is Just Exploding for Enterprise AI"\n\n🏦 Nu Holdings +6.09%\n📝 Both Q1 revenue and earnings top estimates\n\n🚗 Tesla -0.97%\n📝 Elon Musk subpoenaed by US Virgin Islands in JPMorgan Chase-Jeffrey Epstein lawsuit\n',
    tagUuids: [],
    uuid: 'c687078e-c239-47bb-bbf6-116a3f193adc',
    noteType: 'opinion',
    creatorUuid: 'bob.johnson@example.com',
    targetUuids: ['tsla'],
    createdDate: '2023-05-16T10:32:57.490Z',
  },
  {
    title: 'Key Market Events To Watch on Thursday 5/11/23\n',
    content:
      'US PPI - Producer Price Index\nUS initial jobless claims\nUK BOE rate decision, industrial production, GDP\nEarnings Before Open: JD.com, Fiverr, YETI, 1-800-Flowers.com, Tapestry\nEarnings After Hours: IonQ',
    tagUuids: [],
    uuid: 'dde17093-9878-49c1-bbfc-950a3a41fcdc',
    noteType: 'opinion',
    creatorUuid: 'bob.johnson@example.com',
    targetUuids: ['jd', 'ionq', 'fiverr', '1800'],
    createdDate: '2023-05-11T07:19:18.326Z',
  },
  {
    title: 'Walt Disney Company reported Fiscal 2023 Q2 earnings results',
    content:
      'Revenues for the quarter grew 13% YoY.\nDisney Parks, Experiences and Products revenue was up 17% YoY.\nDisney+ Paid Subscribers Count was decreased by 4 million, down 2% YoY.\nOperating Income was $3.285 billion, down 11% YoY\n\n',
    tagUuids: [],
    uuid: '7a282f0f-e6a8-424f-ad59-f334b758fc10',
    noteType: 'opinion',
    authorUuid: 'dis',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-10T21:08:26.406Z',
  },
  {
    title:
      'Google showed off new products/features during the 2023 Google I/O Conference',
    content:
      "Announced ChatGPT like features that are integrated with Google existing products, such as Gmail, Workspace, and Search.\nAnnounced new large language model, PaLM 2, which understands over 100 languages, with improved math, logic, and reasoning capabilities.\nAlso announced Google's first foldable phone, Pixel Fold.",
    tagUuids: [],
    sourceLink: '',
    uuid: '811c900c-5bbd-4613-b684-4081de4c17df',
    noteType: 'opinion',
    authorUuid: 'googl',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-10T20:28:00.760Z',
    imageLinks: [
      'https://i.ibb.co/JnZ7rkL/Screenshot-2023-05-10-at-1-39-34-PM.png',
      'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/PixelFold_All_1080x2000.width-1000.format-webp.webp',
    ],
  },
  {
    title: 'Key Market Events To Watch 5/10/23\n',
    content:
      "US CPI\n\nEarnings Before Open: Roblox, Wendy's, Li Auto, Toyota\n\nEarnings After Hours: Disney, Unity, Robinhood, The Trade Desk, Beyond Meat\n",
    tagUuids: [],
    uuid: '1b99b4f3-8eb1-4d3b-b215-063ae226f47a',
    noteType: 'opinion',
    creatorUuid: 'bob.johnson@example.com',
    targetUuids: ['dis', 'u', 'rblx', 'hood'],
    createdDate: '2023-05-10T05:29:28.963Z',
  },
  {
    title: 'Daily Stock Market Movers 5/9/23 ',
    content:
      'S&P 500 +0.5%\nNasdaq -0.63%\nPaypal -12.73%\nPalantir +23.39%\nUnder Armour -5.66%\nAirbnb -11.93% after hours\nRivian +5.56% after hours\nAffirm -7.97% after hours\nUpstart Holdings +39.53% after hours\nElectronic Arts +2.46% after hours\nToast +4.83% after hours\nTwilio -14.62% after hours\nDuolingo +2.08% after hours\nBlink Charging -3.80% after hours\nWynn Resorts +0.49% after hours\nGoPro -5.68% after hours\n',
    tagUuids: [],
    uuid: '46cf5347-0ccf-49fa-a5ae-3bfb82739d5d',
    noteType: 'opinion',
    authorUuid: '',
    creatorUuid: 'jessica.jn.le@gmail.com',
    targetUuids: ['pypl', 'pltr', 'abnb', 'rivn'],
    createdDate: '2023-05-10T04:33:46.811Z',
  },
  {
    title: 'Twilio reported 2023 Q1 earnings',
    content:
      "Revenue was $1,007 million, up 15% YoY\nQ2'23 Total Revenue Guidance: $980 million to $990 million, up 4% to 5% year-over-year\nOperating Loss was $264 million, equal to -26% Operating Margin.\nStock was down 15% during after hour.",
    tagUuids: [],
    uuid: '31ad4aea-119d-47e8-afcb-2e57564a48e4',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'alice.williams@example.com',
    createdDate: '2023-05-09T22:35:29.135Z',
  },
  {
    title: 'Airbnb reported 2023 Q1 earnings',
    content:
      'Revenue of $1.8 billion increased 20% YoY\nFirst GAAP profitable Q1 with $117 million of net income\nGross Booking Value increased 19% YoY\nGenerate $1.6 billion of free cash flow, up 32% YoY.',
    tagUuids: [],
    uuid: '5869c4b3-fd70-4bd9-b938-fc60f2975942',
    noteType: 'opinion',
    authorUuid: 'abnb',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-09T21:26:43.158Z',
  },
  {
    title: 'Daily Summary and Tomorrow Watch',
    content:
      'S&P 500 rose 0.05%\nThe Nasdaq 100 rose 0.2%\nBitcoin fell 5.5% to $27,352.7\nGold fell 0.23%\nCrude Oil WTI fell 0.27%\n\nTomorrow After Bell Earnings: Airbnb, Rivian, Twilio, Affirm, Upstart\n',
    tagUuids: [],
    uuid: 'aac1b64f-e4b7-4c40-a2de-51ca1ab79748',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-09T00:11:29.697Z',
  },
  {
    title: 'Paypal released 2023 Q1 earnings',
    content:
      "Total Payment Volume (TPV) of $354.5 billion, growing 10% YoY\n\nNet revenues of $7.04 billion, growing 9% YoY\n\nGAAP operating income of $1.0B, growing 41% YoY\n\nQ2'23 net revenues expected to grow ~6.5%-7%\n\nQ2'23 GAAP EPS expected to be $0.81-$0.83;\n\nFY'23 share repurchases expected to reach ~$4 billion",
    tagUuids: [],
    uuid: '8a14f746-0519-4681-915a-0d530934678e',
    noteType: 'opinion',
    authorUuid: 'pypl',
    creatorUuid: 'emily.nguyen@example.com',
    createdDate: '2023-05-08T22:28:49.617Z',
  },
  {
    title: 'Lucid Announces First Quarter 2023 Financial Results\n',
    content:
      'Q1 revenue was $149 million, up 159% YoY, but below $198 million estimates.\n\nProduced 2,314 vehicles during Q1 and delivered 1,406 vehicles during the same period.\n\n"We will unveil our Gravity SUV later this year ahead of its launch in 2024"',
    tagUuids: [],
    uuid: 'fbfb977b-43e7-4f50-9557-ab861c331d6e',
    noteType: 'opinion',
    authorUuid: 'lcid',
    creatorUuid: 'zeesun.wu@gmail.com',
    createdDate: '2023-05-08T21:56:42.537Z',
  },
  {
    title:
      'Palantir 2023 Q1 earnings topped expectations and raised full-year outlook\n\n\n',
    content:
      'Net income of $17 million, the second consecutive quarter of positive GAAP net income\n\nOperating income was $4 million, the first quarter of positive GAAP operating income in history.\n\nTotal revenue grew 18% year-over-year to $525 million\n\nCommercial revenue grew 15% year-over-year to $236 million\n\nGovernment revenue grew 20% year-over-year to $289 million\n\nCustomer count grew 41% year-over-year and 7% quarter-over-quarter\n',
    tagUuids: [],
    sourceLink: '',
    uuid: '703d5814-cca2-4f1c-9c59-6643d462fb6a',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'john.smith@example.com',
    targetUuids: ['pltr'],
    createdDate: '2023-05-08T21:11:06.157Z',
  },
  {
    title: 'Block Announces First Quarter 2023 Results\n',
    content:
      'Gross profit of $1.71 billion, up 32% year over year\n\nCash App generated gross profit of $931 million, up 49% year over year\n\nSquare generated gross profit of $770 million, up 16% year over year. \n\n20 million monthly Cash App Card actives, up 34% year over year',
    tagUuids: [],
    uuid: 'cf0218d1-b68f-4d18-9ea6-b448459223ee',
    noteType: 'opinion',
    authorUuid: 'sq',
    creatorUuid: 'emily.nguyen@example.com',
    createdDate: '2023-05-04T21:24:59.961Z',
  },
  {
    title: 'DoorDash Releases First Quarter 2023 Financial Results\n',
    content:
      'Revenue increased 40% Y/Y to $2.0 billion.\n\nTotal Orders increased 27% YoY to 512 million.\n\nMarketplace GOV increased 29% Y/Y to $15.9 billion.\n\nNet Revenue Margin increased to 12.8% from 11.8% a year ago. \n\nNet Loss was $162 million, down from $167 million a year ago.',
    tagUuids: ['dash'],
    uuid: 'd6d6fc1c-361c-47f4-adca-2e67fca91398',
    noteType: 'opinion',
    authorUuid: 'dash',
    creatorUuid: 'jessica.jn.le@gmail.com',
    createdDate: '2023-05-04T20:09:24.923Z',
  },
  {
    title: 'AMD released financial results of Q1 2023',
    tagUuids: ['amd'],
    uuid: '1672bf7b-06f4-49c2-a039-d2176509d5e3',
    noteType: 'opinion',
    authorUuid: 'amd',
    targetUuids: [],
    creatorUuid: 'jane.doe@example.com',
    imageLinks: [
      'https://i.ibb.co/4VbfZHH/Screenshot-2023-05-03-at-2-27-07-PM.png',
    ],
    createdDate: '2023-05-03T22:31:48.053Z',
  },
  {
    title:
      'The Federal Reserve has not made a firm decision on whether it will stop raising interest rates',
    content: '“A decision on a pause was not made today” ',
    tagUuids: ['powell', 'FederalReserve'],
    uuid: 'ac0aec1b-89ef-4633-ab98-ecd74656e813',
    noteType: 'opinion',
    authorUuid: 'powell',
    creatorUuid: 'jessica.jn.le@gmail.com',
    createdDate: '2023-05-03T19:01:03.862Z',
  },
  {
    title:
      'Uber tops Q1 revenue estimates and projects strong bookings growth for the rest of the year.',
    content:
      'Revenue was $8.8B, up 29% YoY, beating expectations by $90M.\n\nOperating loss was $262M, smaller than the $482M loss a year ago.\n\nMobility Gross Bookings of $15.0 billion, up 40% YoY.\n\nDelivery Gross Bookings of $15.0 billion, up 8% YoY.\n\nCEO Dara Khosrowshahi: "We significantly accelerated Q1 trip growth to 24% from 19% last quarter, with Mobility trip growth of 32%, as a result of improved earner and consumer engagement... Looking ahead, we are focused on extending our product, scale and platform advantages to sustain market-leading top and bottom-line growth beyond 2023.”\n\nCEO Dara Khosrowshahi also said that Uber is off to a "strong start" for the year and highlighted the company\'s "significant data advantage" over its competitors that would enable the use of AI solutions on both the consumer and earner side of the business.',
    tagUuids: ['uber'],
    uuid: '9e1944f2-ce79-43e4-8f7d-7bc4fe0a9853',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-02T15:25:32.497Z',
  },
  {
    title: 'SoFi Technologies reported better-than-expected Q1 earnings',
    content:
      'Q1 GAAP EPS of -$0.05 beats by $0.03.\n\nRevenue of $460M (+43.0% Y/Y) beats by $23.22M.\n\nThe lending segment generated a revenue of $325M, up 33% from last year. Financial services revenue more than tripled on a yearly basis to $81M, while the technology division revenue grew 28% Y/Y to ~$78M. \n\nFor Q2, adjusted net revenue is expected to be in the range of $470M-$480M, and adjusted EBITDA is estimated to be between $50M and $60M. ',
    tagUuids: ['sofi'],
    uuid: '535a7253-c021-4d3b-9b5a-154fd9092605',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-02T04:18:32.346Z',
  },
  {
    title:
      'IBM CEO has announced that the company will pause hiring for roles that could be replaced by artificial intelligence (AI) in the coming years',
    content:
      'He said it is affecting back-office functions like human resources and he could easily see 30% of these roles being replaced by AI and automation over a five-year period. \n\nThe move marks one of the largest workforce strategies announced in response to the rapidly advancing technology. However, IBM will continue to hire for software development and customer-facing roles.',
    tagUuids: ['ibm'],
    uuid: '821c8aed-7cc1-4a8a-b279-2a747c95b9c7',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'jane.doe@example.com',
    createdDate: '2023-05-01T22:14:04.738Z',
  },
  {
    title:
      'The Nasdaq Composite closed -0.1%, the S&P 500 finished fractionally lower and the Dow ended -0.1% on Monday.',
    content:
      '\n\nSix of the 11 S&P sectors ended lower, led by Consumer Discretionary and Energy sectors.\n\nUber, Pfizer will report earnings before the bell, followed by Ford, Starbucks, Advanced Micro Devices after the market closes.\n\n\n',
    tagUuids: ['daily-news'],
    uuid: 'e9968535-a254-4343-b108-c1a2835e708d',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-01T22:08:21.997Z',
    imageLinks: [
      'https://i.ibb.co/zxQ2xW0/Screenshot-2023-05-01-at-3-47-50-PM.png',
      'https://i.ibb.co/yPQ6XqY/Screenshot-2023-05-01-at-3-15-07-PM.png',
    ],
  },
  {
    title:
      'Chegg (NYSE:CHGG) stock falls by 31% as ChatGPT usage increases among students.',
    content:
      'Chegg noted a significant spike in student interest in ChatGPT starting from March 2023, which is having a negative impact on new customer growth rate.\n\nChegg CEO Dan Rosensweig stated that the company is embracing artificial intelligence technology and prioritizing investments to meet this opportunity.\n\nQ1 2023 total revenue fell 7% YoY to $188M, and subscription services revenue declined by 3%.\n\nQ2 2023 revenue guidance is $175M to $178M, versus a $194M consensus.\n\nShares of Chegg (CHGG) fell 30.55% in post-market trading.',
    tagUuids: ['chegg'],
    uuid: 'd5246a01-f3a0-4315-8f72-928bcc9c429a',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-01T21:59:28.530Z',
  },
  {
    title: 'Key events this week\n',
    content:
      'Tuesday: US JOLTS job openings\n\nWednesday: ADP employment, S&P global US services PMI. Jerome Powell will hold news conference following rate decision\n\nThursday: US initial jobless claims\nFriday: US unemployment, nonfarm payrolls reports',
    tagUuids: ['us', ' jobs'],
    uuid: '7dda641e-9335-4905-9238-2a8a54fb6d79',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-01T21:18:20.084Z',
  },
  {
    title: 'Geoffrey Hinton left Google.',
    content:
      'Geoffrey Hinton, known as the "godfather of AI," has left Google to warn the world about the potential risks of AI. \n\nHinton told CNBC that he now thinks digital intelligence can “acquire hugely more knowledge than any individual biological agent.”\n\nHinton has some regrets over his life’s work, citing the near-term risks of AI taking jobs and the proliferation of fake photos, videos and text that appear real to the average person. Hinton referenced the power of GPT-4, the most-advanced large language model (LLM) from startup OpenAI, whose technology has gone viral since the chatbot ChatGPT was launched late last year.\n\n',
    tagUuids: ['Geoffrey', ' googl'],
    uuid: '4536958b-ace7-4bf3-b64b-258e091269aa',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-01T21:09:22.969Z',
  },
  {
    title: 'JPMorgan Chase has acquired First Republic Bank.',
    content:
      'JP Morgan Chase has acquired the deposits and a "substantial majority of assets" of First Republic after the bank failed on Monday. \n\nThe takeover will add about $173bn of loans, $30bn of securities, and $92bn in deposits to JPMorgan’s balance sheet, making it even more massive. The bank will also have a one-time gain of about $2.6bn and expects to spend around $2bn on integration costs. \n\nAs part of the transaction, it is making a payment of $10.6bn to the Federal Deposit Insurance Corporation. \n\nTrading in First Republic Bank common shares has been halted on the NYSE, and the stock has dropped 97% year-to-date. Stockholders are creditors now, behind depositors, general unsecured creditors, and subordinated debt holders. \n\n\n',
    tagUuids: ['frc'],
    uuid: 'eede4f8b-7bb0-42cf-8bf0-a5c7d9f31bda',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-05-01T17:59:46.280Z',
  },
  {
    title: 'Growth is slowing down, especially AWS\n',
    content:
      'AWS revenue only grew 16% YoY, while Google Cloud grew by 28% and Microsoft Azure grew 31% in constant currency. For next quarter, AWS growth will continue to slow.\nRetail business is too cyclical. Global economy is experiencing a recession.\nValuation is too high. Amazon’s P/E ratio is higher than its peers.\n',
    tagUuids: ['amzn'],
    uuid: 'e9cc438b-273d-4b72-95b8-9c7e4b2b0678',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'will.smith@example.com',
    targetUuids: ['amzn'],
    createdDate: '2023-04-28T23:15:25.498Z',
    emotions: ['Bearish'],
  },
  {
    title: 'Cloud and AI are trending now\n\n',
    content:
      'Morgan Stanley: AWS has the ability to drive and benefit from the +$2.5T public cloud opportunity.\nEvercore ISI: The AI Revolution probably won’t be televised. It certainly won’t be on-prem. It will be in the Cloud, where AWS is the market leader.\nMargin is improving: The North American shows its first positive operating margin in more than a year. Quarterly operating income increased by more than 1 billion YoY.\nAdvertising Business is growing nicely: Advertising revenue was up 23% YoY, which impled Amazon is taking market shares from competitors like Google and Meta.',
    tagUuids: ['amzn'],
    uuid: '4694c614-be8c-4b77-b15f-b8c98a94a06e',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'bob.johnson@example.com',
    targetUuids: ['amzn'],
    createdDate: '2023-04-28T23:14:23.223Z',
    emotions: ['Bullish'],
  },
  {
    title: 'Amazon.com Announces 2023 First Quarter Results',
    content:
      'Net sales was $127.4 billion, up 9% YoY\nAWS segment sales were $21.4 billion, up 16% YoY\nOperating income increased to $4.8 billion in the first quarter, compared with $3.7 billion during the same period last year.\nFor next quarter, net sales are expected to be between $127.0 billion and $133.0 billion, or to grow between 5% and 10% YoY.\nAmazon CFO: “Customers continue to evaluate ways to optimize their cloud spending in response to these tough economic conditions in the first quarter and we are seeing these optimizations continue into the second quarter with April revenue growth rates about 500 basis points lower than what we saw in Q1”',
    tagUuids: ['amzn'],
    uuid: 'deba8eb4-0f44-49ae-9902-89ee06837e91',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-28T23:10:44.803Z',
  },
  {
    title: 'Intel posted Q1 results that beat expectations',
    content:
      "First-quarter revenue of $11.7 billion, down 36% year over year (YoY).\nIntel's gross margins fell by 16.2 percentage points YoY to 34.2% \n\nIntel's nascent foundry business generated $118M, down 24% YoY. \n\nCompany predicts an improving profit margin in second half",
    tagUuids: ['intc'],
    uuid: '8e793171-c0f2-4684-b3bc-90c6794cad61',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-28T23:02:43.385Z',
  },
  {
    title:
      'Exxon Mobil (XOM) reported a record-breaking Q1 net income of $11.43 billion, more than double that of the previous year',
    content:
      'The result was driven by higher production volumes which partially offset the 16% drop in oil prices.\n\nRevenues fell 4% Y/Y due to lower crude oil and natural gas realizations. \n\nThe company also remains on track to deliver $9 billion of structural cost savings by year-end 2023. ',
    tagUuids: ['xom'],
    uuid: 'ad1d3986-be26-4c50-88fb-a145f88c8ae5',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-28T22:56:42.274Z',
  },
  {
    title: 'Shares of First Republic Bank (FRC) fell by over 50% ',
    content:
      "CNBC reported that Federal Deposit Insurance Corp. receivership was the most likely scenario for the struggling bank. \n\nFDIC was in talks with several banks for bids on First Republic in the event it goes into receivership. \n\nThe bank's stock ended the day down 43% at $3.51, with year-to-date stock plunging 96% after the failures of Silicon Valley Bank and Signature Bank led to customers withdrawing deposits from First Republic.",
    tagUuids: ['frc', ' bank'],
    uuid: '619fd947-19f9-47bb-96cc-fd3c97e99e35',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-28T22:42:48.076Z',
  },
  {
    title:
      'The Nasdaq Composite (COMP.IND) closed +0.7%, the S&P 500 (SP500) finished +0.8% and Dow (DJI) ended +0.8%.\n\n',
    content:
      'On April 28, 2023, the Nasdaq, S&P 500, and Dow all posted modest gains, with the Nasdaq securing its third consecutive day of gains due to strong tech earnings. \n\nNine of the 11 S&P sectors finished higher, with energy, financials, info tech, materials, and real estate each climbing more than 1%.\n\nIn economic news, the core personal consumption expenditure index climbed 0.3% in March compared to the previous month, while yields in the bond market slipped.',
    tagUuids: ['us-market'],
    uuid: '289a5300-8218-40db-b669-09283f9575d3',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-28T22:36:35.439Z',
  },
  {
    title: "Meta's PE ratio is Meta's PE is higher than Google now.",
    tagUuids: ['meta'],
    uuid: '32031558-ad9a-4088-9ab8-d660994e101d',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'jane.doe@example.com',
    targetUuids: ['Meta'],
    createdDate: '2023-04-26T22:56:39.437Z',
    emotions: ['Bearish'],
  },
  {
    title: 'Roku delivers 2023 first quarter results',
    content:
      'Revenue was $741 million, up 1% YoY\n\nGross profit was $338 million, down 7% YoY\n\nOperating loss was 212.5 million, much higher than the 23.5 million loss a year ago.\n\nStreaming Hours were 25.1 billion, up 4.2 billion hours YoY\n\nActive Accounts were 71.6 million, a net increase of 1.6 million Active Accounts from Q4 2022\n\n',
    tagUuids: ['roku'],
    uuid: '7197a99f-2097-4f40-b8a0-e0d1c1c8ff74',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-26T21:34:28.889Z',
  },
  {
    title: 'Teladoc Health Reports First Quarter 2023 Results',
    content:
      'First quarter 2023 revenue grows 11% year-over-year to $629.2 million\n\nInternational revenues was $87.6 million, up 18% YoY.\n\nNet loss was 0.42 per share, much lower than the 41.58 per share loss a year ago\n\nNext quarter guidance was in line\n\n',
    tagUuids: ['tdoc'],
    sourceLink:
      'https://s21.q4cdn.com/672268105/files/doc_financials/2023/q1/Teladoc-Q1-2023-EPR-Final.pdf',
    uuid: 'd7579c93-71ea-4d02-9b59-8e8d5004d739',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-26T21:06:02.391Z',
  },
  {
    title: 'Meta Reports First Quarter 2023 Results',
    content:
      'Daily and monthy active people was up 5% YoY\n\nRevenue was $28.65 billion, up 3% YoY\n\nOperating margin was 25%, down from 31% last year.\n\nNet income was down 24% YoY\n\nRepurchased $9.22 billion of common stock\n\nCEO, Mark Zuckerberg: "Our AI work is driving good results across our apps and business. We\'re also becoming more efficient so we can build better products faster and put ourselves in a stronger position to deliver our long term vision."',
    tagUuids: ['meta'],
    sourceLink:
      'https://investor.fb.com/investor-news/press-release-details/2023/Meta-Reports-First-Quarter-2023-Results/default.aspx',
    uuid: 'cefc2ba9-bfef-41f5-9af0-de713ba4c4b1',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-26T20:30:41.749Z',
    noteType: 'fact',
  },
  {
    title: 'Microsoft Cloud Strength Drives Third Quarter Results\n\n',
    content:
      'Revenue was $52.9 billion, up 7% YoY \n\nOperating income was $22.4 billion, up 10% YoY\n\nNet income was $18.3 billion, up 9% YoY\n\nServer products and cloud services revenue was up 17%, driven by Azure and other cloud services revenue growth of 27% YoY\n\nProductivity and Business Processes was $17.5 billion, was up 11% YoY\n\nCEO: “The world\'s most advanced AI models are coming together with the world\'s most universal user interface - natural language - to create a new era of computing"..."Across the Microsoft Cloud, we are the platform of choice to help customers get the most value out of their digital spend and innovate for this next generation of AI.”',
    tagUuids: ['msft'],
    sourceLink:
      'https://www.microsoft.com/en-us/investor/earnings/fy-2023-q3/press-release-webcast',
    uuid: 'f7f45df4-0eaf-4f40-b4f7-feafa6b4c7c2',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-26T00:15:42.308Z',
    noteType: 'fact',
  },
  {
    title: 'Alphabet Announces First Quarter 2023 Results',
    content:
      'Revenues +3% YoY\nOperating Margin was 25%, down from 30% last year\nGoogle Cloud revenue was up 28% YoY\nGoogle Services revenue was flat\n\n\nCEO: “We are pleased with our business performance in the first quarter, with Search performing well and momentum in Cloud. We introduced important product updates anchored in deep computer science and AI. Our North Star is providing the most helpful answers for our users, and we see huge opportunities ahead, continuing our long track record of innovation.”',
    tagUuids: ['googl'],
    sourceLink:
      'https://abc.xyz/investor/static/pdf/2023Q1_alphabet_earnings_release.pdf?cache=0924ccf',
    uuid: '05de05ee-10cf-400a-8cab-063f7d9bad11',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'jane.doe@example.com',
    createdDate: '2023-04-25T20:12:54.374Z',
  },
  {
    title:
      'First Republic Bank customer deposits plunged 41% to $104.5 billion in the first quarter, way below $137 billion estimates',
    content:
      "First-quarter revenue fell 13% to $1.21 billion, while net income fell 33% to $269 million. \n\nIt is reducing its workforce by as much as 25%, lowering outstanding loan balances, and cutting back on non-essential activities.\n\nFirst Republic's unrealized losses on Treasuries and other long-dated bonds on its balance sheet are reportedly far greater than its tangible common equity, leading some potential buyers to hesitate. \n\n\n\n",
    tagUuids: ['firstRepublicBank'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-04-24/first-republic-pursues-strategic-options-as-deposits-slump?srnd=premium',
    uuid: '4531d41e-278c-41dd-8b1d-f8026c3712c4',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'zeesun.wu@gmail.com',
    createdDate: '2023-04-25T00:25:55.208Z',
  },
  {
    title: 'Tech investor Chamath Palihapitiya: "Crypto is dead in America"',
    content:
      '“You had Gensler even blaming the banking crisis on crypto" Chamath commented on regulators\' increasing enforcement actions against crypto companies: "The United States authorities have firmly pointed their guns at crypto.”\n\nSecurities and Exchange Commission has ramped up its actions against crypto industry. Its chairman Gary Gensler said crypto trading platforms should abide by strict U.S. securities laws. \n',
    tagUuids: ['charmath', ' crypto'],
    sourceLink:
      'https://www.cnbc.com/2023/04/24/crypto-is-dead-in-america-says-tech-investor-chamath-palihapitiya.html',
    uuid: '9d2bb432-e00a-4600-affc-3314ddf6f894',
    noteType: 'opinion',
    targetUuids: ['crypto'],
    authorUuid: 'charmath',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-24T23:59:28.827Z',
    emotions: ['Bearish'],
  },
  {
    title:
      "Cathie Wood, CEO of Ark Invest, has updated her price target for Tesla to $2,000 by 2027, a 1,127% increase from Tesla's closing price of $162.99 on Thursday.",
    content:
      'Cathie believes that robotaxis business will help drive growth and generate $8 trillion to $10 trillion in revenue by 2030.\n\nTesla is the largest holding in her flagship Ark Innovation ETF (ARKK) fund, with a 9.4% weighting.',
    tagUuids: ['cathiewood'],
    uuid: 'f014a8fd-62b4-48d0-8a7a-7e72a4ed598d',
    noteType: 'opinion',
    authorUuid: 'cathiewood',
    creatorUuid: 'jane.doe@example.com',
    createdDate: '2023-04-21T05:42:52.535Z',
    targetUuids: ['tsla'],
    emotions: ['Bullish'],
  },
  {
    title: 'Alphabet reveals cost-cutting details ahead of Q1 earnings report',
    content:
      'Alphabet, the parent company of Google, has revealed in an SEC filing that it expects to take charges of $1.9 billion to $2.3 billion related to employee severance and related costs, with most of it recognized in the Q1 2023. \n\nThe company is also taking $0.5 billion in charges related to office-space reductions. \n\nNewly formed Google DeepMind will be reported in the unallocated corporate costs beginning in Q2.\n\nQ1 results will be announced on April 25.',
    tagUuids: ['googl'],
    sourceLink:
      'https://seekingalpha.com/news/3958458-alphabet-details-charges-its-taking-for-workforce-cuts-accounting-shifts',
    uuid: '346a379f-e832-48d5-9f9a-486a9e3cdb61',
    noteType: 'fact',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'bob.johnson@example.com',
    createdDate: '2023-04-20T23:29:15.411Z',
  },

  {
    title:
      'Tesla Operating System will be able to continue reducing costs and improving margins.',
    content:
      "Tesla's custom-built software replaces expensive 3rd party enterprise software solutions like CRM, ERP, HCM, MES, SCM, WMS & other platforms, which enables vertical integration, cost control and agility. \n\n",
    tagUuids: ['tsla'],
    uuid: 'afdf715a-f2c2-47c4-9e6f-f25d8589cf54',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'zeesun.wu@gmail.com',
    targetUuids: ['tsla'],
    createdDate: '2023-04-19T20:35:30.275Z',
    emotions: [OpinionEnum.Bullish],
    imageLinks: [
      'https://i.ibb.co/zVsynmq/Screenshot-2023-04-19-at-1-29-55-PM.png',
    ],
  },
  {
    title: 'Operating margin continue decreasing',
    content:
      'Operating Margin was 11.4%, which decreased from 19.2% a year ago.\n\nFree cash flow -80% YoY\n\nTotal Revenues +24% YoY\n\nTotal deliveries +36%\n\n\n',
    tagUuids: ['tsla'],
    sourceLink:
      'https://tesla-cdn.thron.com/static/ZXSBN8_TSLA_Q1_2023_Update_ABMJPG.pdf?xseo=&response-content-disposition=inline%3Bfilename%3D%22e826b065-cc14-467c-8c9c-e1feb7189ba8.pdf%22',
    uuid: '70ec27cc-5924-4da1-ae19-2c29aa7b7e7c',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    targetUuids: ['tsla'],
    createdDate: '2023-04-19T20:20:42.355Z',
    emotions: [OpinionEnum.Bearish],
  },
  {
    title: 'Apple launches its savings account with 4.15% interest rate.',
    content:
      'It requires no minimum deposit or balance, and can be set up from the Wallet app on their iPhones.\n\nGoldman Sachs is the bank behind the savings account.\n\n\n',
    tagUuids: ['aapl', ' gs'],
    sourceLink:
      'https://www.cnbc.com/2023/04/17/apple-savings-account-announced-with-4point15percent-interest.html',
    uuid: '0412f700-2c5e-4040-ba90-89cb463bafa2',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'alice.williams@example.com',
    targetUuids: ['aapl', 'gs'],
    createdDate: '2023-04-17T14:51:02.762Z',
    emotions: [OpinionEnum.Bullish],
  },
  {
    title:
      'Elon Musk launched a new artificial intelligence start-up to compete with ChatGPT-maker OpenAI',
    content:
      'According to Nevada business records, Musk incorporated a company named X.AI on March 9.\n\nFor the new project, Musk has secured thousands of high-powered GPU processors from Nvidia, said people with knowledge of the move. ',
    tagUuids: ['elon', ' nvda', ' tsla', ' ai'],
    sourceLink:
      'https://www.ft.com/content/2a96995b-c799-4281-8b60-b235e84aefe4',
    uuid: 'a6395ed0-f76f-4c58-b16b-d6da636a41dc',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'emily.nguyen@example.com',
    targetUuids: ['tsla', 'nvda'],
    createdDate: '2023-04-15T14:52:45.461Z',
    emotions: [OpinionEnum.Bullish],
  },
  {
    title:
      'Piper Sandler calls generative A.I. the next $100 billion tech revolution',
    content:
      'Piper Sandler top picks including Microsoft, Snowflake, Google, Nvidia, and Duolingo.\n\n\n“We see Generative AI as the next major revolution in technology that could have far reaching implications across both consumer and enterprise sectors,”\n\n“Rapid pace of innovation could occur at an unprecedented pace in 2023 and into 2024 with potential for [GPU] shortages emerging as one of the gating factors to broader adoption over the next 1-3 years”',
    sourceLink:
      'https://www.cnbc.com/2023/04/14/piper-sandler-calls-generative-ai-the-next-100-billion-tech-revolution.html',
    rating: 'Bullish',
    uuid: '6a9a0b70-a5fb-4834-84f7-5f57e60024bd',
    noteType: 'opinion',
    authorUuid: 'pipersandler',
    creatorUuid: 'herman.wrt@gmail.com',
    targetUuids: ['Msft', 'snow', 'googl', 'nvda', 'duol'],
    createdDate: '2023-04-15T00:46:54.456Z',
    emotions: [OpinionEnum.Bullish],
  },
  {
    title:
      'JPMorgan Chase earnings exceed expectations and raise income guidance.',
    content:
      'GAAP EPS of $4.10 beats by 64 cents. Revenue beats by $2.3 billion. \nQ1 total loans of $1.13T was roughly flat from the prior quarter; total deposits of $2.38T gained 1.6% Q/Q.\n\nCommercial Banking revenue of $3.51B climbed 3% Q/Q and 46% Y/Y;\n\nAsset & Wealth Management revenue of $4.78B rose 4% Q/Q and 11% Y/Y;\n\n\nCEO Jamie Dimon: “The U.S. economy continues to be on generally healthy footings — consumers are still spending and have strong balance sheets, and businesses are in good shape”\n\n“However, the storm clouds that we have been monitoring for the past year remain on the horizon, and the banking industry turmoil adds to these risks."',
    tagUuids: ['jpm', ' banks', ' jamie_dimon'],
    sourceLink:
      'https://seekingalpha.com/news/3956713-why-did-jpmorgan-chase-stock-pop-up-today-strong-year-guide-blowout-q1',
    rating: 'Bullish',
    uuid: '6dd93ee6-febb-440c-956e-807aca5cb9b3',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'emily.nguyen@example.com',
    targetUuids: ['jpm'],
    createdDate: '2023-04-14T21:06:26.568Z',
    emotions: [OpinionEnum.Bullish],
  },
  {
    title:
      'Amazon Web Services announced it would launch Bedrock, a generative AI service that’s geared toward developers',
    content:
      'CEO Andy Jassy also highlighted a promising growth trajectory for the cloud business in its annual letter.',
    tagUuids: [],
    sourceLink:
      'https://seekingalpha.com/news/3956404-why-did-amazon-stock-accelerate-on-thursday-optimism-on-aws-from-the-ceo',
    rating: 'Bullish',
    uuid: 'eb3792eb-9e7a-4475-b155-5e277c2fcfd9',
    noteType: 'opinion',
    authorUuid: 'hwu1106@gmail.com',
    creatorUuid: 'jessica.jn.le@gmail.com',
    targetUuids: ['amzn'],
    createdDate: '2023-04-14T06:16:08.142Z',
  },
  {
    title: 'Credit Suisse reiterated an outperform rating for the stock',
    content:
      'Credit Suisse raised its price target to $188 per share from $184, which represents roughly 13% upside for investors from Thursday’s close.\n\nIt anticipates demand for iPhones was “resilient” during the period and thinks the company will increase both dividends paid to shareholders and stock repurchases.',
    tagUuids: [],
    sourceLink:
      'https://www.cnbc.com/2023/04/13/-credit-suisse-is-getting-even-more-bullish-on-apple-into-earnings-.html',
    rating: 'Bullish',
    uuid: 'dfc4fc77-b1b4-4d84-a88e-46fca52c51b8',
    noteType: 'opinion',
    authorUuid: 'creditsuisse',
    creatorUuid: 'alice.williams@example.com',
    targetUuids: ['aapl'],
    createdDate: '2023-04-14T00:15:04.469Z',
  },
  {
    tagUuids: [],
    rating: 'Bearish',
    uuid: 'e16b4827-c884-4f4b-af8c-6434eb497cb7',
    noteType: 'opinion',
    creatorUuid: 'hwu1106@gmail.com',
    targetUuids: ['aapl'],
    createdDate: '2023-04-13T21:37:33.975Z',
    childrenUuids: ['f5da60af-ad9f-4f48-9276-d77f77c85be4'],
  },
  {
    title: 'Goldman Sachs says WeightWatchers stock will more than triple.',
    content:
      'Goldman Sachs upgraded the stock to buy from neutral Monday evening and raised its 12-month price target to $13. \n\nGoldman turned bullish after WW acquired Sequence, a telehealth platform that provides its subscribers with access to GLP-1 medications such as Wegovy and Ozempic.\n\n“We believe a catalyst for a turnaround has emerged with its new obesity drug on-ramp solution”\n\n“With this new service offering we expect a cohort of consumers to turn to it for help navigating what is poised to be an increasingly complex field of pharmaceutical solutions.”\n\n',
    tagUuids: ['gs', ' ww'],
    sourceLink:
      'https://www.cnbc.com/2023/04/11/weightwatchers-parent-rockets-higher-by-25percent-after-goldman-says-the-stock-will-more-than-triple.html',
    uuid: '0adeed09-46b8-4144-bdd8-d171f5b80d0c',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-11T17:14:13.905Z',
  },
  {
    title:
      "Apple's worldwide computer shipments fell 40.5% YoY in Q1 2023, with a 2.8 million drop in shipments.",
    content:
      "According to IDC data, Apple's PC market share dropped from 8.6% to 7.2% between Q1 2022 and Q1 2023.\n\nAll major computer manufacturers, including Apple, saw double-digit shipment drops due to weaker demand and inventory issues.\n\nIDC predicts PC manufacturers will suffer in the short term, but growth is expected to increase by the year's end.",
    tagUuids: ['aapl', ' semi'],
    sourceLink:
      'https://www.cnbc.com/2023/04/10/apples-mac-shipments-fall-more-than-40percent-worse-than-major-rivals-idc.html',
    uuid: 'f5da60af-ad9f-4f48-9276-d77f77c85be4',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-10T21:40:39.728Z',
  },
  {
    title:
      'Tesla has released Master Plan Part 3, outlining its vision for a sustainable future with a diversified fleet of electric vehicles.',
    content:
      'The company is developing a smaller and more affordable compact car with a 53 kWh LFP battery pack and a starting price of around $25,000.\n\nTesla also plans to develop commercial and passenger vans and a bus, all powered by sustainable battery technology.\n\nTesla emphasizes the importance of battery innovation will be required to replace the global fleet of ICE vehicles with electric alternatives.\n',
    tagUuids: ['tsla'],
    uuid: 'c8090c8e-80e4-44a6-8898-771e374624bc',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-10T18:57:51.997Z',
  },
  {
    title: 'Tesla plans to build a new battery factory in Shanghai, China',
    content:
      "Tesla will manufacture its Megapack large-scale energy-storage units, which are intended to help stabilize energy grids in Shanghai, China. \n\nThe factory will add to Tesla's existing factory for electric vehicles in Shanghai and is scheduled to begin construction in Q3 of this year, with production starting in Q2 2024. \n\nThe announcement further cements China's place at the top of the global energy storage supply chain. ",
    tagUuids: ['tsla', ' china'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-04-09/tesla-to-build-megapack-battery-factory-in-shanghai-xinhua',
    uuid: 'ce1c68b7-ea72-4936-9745-3c328145bb87',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-10T18:50:00.197Z',
  },
  {
    title: 'Bond yields decline in March suggested a recession.',
    content:
      "The bond market's dramatic decline in yields and volatility suggested an impending recession.\n\nHowever, it has not been matched in equities and credit markets, leading to questions about whether the bond market is overreacting. \n\nThe gap led to a debate over the future economy: Some believe the yield drop was a false alarm, while others warn it could be a signal for a recession.",
    tagUuids: ['bond', ' economy'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-04-09/bond-market-flashes-us-recession-warning-while-other-investors-call-false-alarm',
    uuid: 'bb2c2ddc-ecbc-433a-a13a-278358fc5e0f',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-10T16:53:54.770Z',
  },
  {
    title:
      'Tesla cuts US prices of All Models for the Second Time This Year.\n',
    content:
      'Higher-volume Model 3 and Y electric vehicles were discounted by at least $1,000\n\nModel S and Model X were lowered by $5,000 each, bringing the cost to $84,990 and $94,990, respectively.\n\nTesla also introduced a new base Model Y in April, starting at $49,990.\n',
    tagUuids: ['tsla'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-04-07/tesla-cuts-model-s-and-x-prices-for-third-time-this-year?re_source=boa_related',
    uuid: '62ddbb83-0586-4075-b66c-73916f5b2584',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-07T22:35:47.939Z',
  },
  {
    title:
      'Nonfarm payrolls rose at a moderate pace as unemployment rate fell, giving mixed signals to the Federal Reserve',
    content:
      'The US added 236,000 jobs in March, which is close to the Dow Jones estimate for 238,000 and lower than February’s upwardly revised 326,000, indicating a slowdown in hiring pace.\n\nThe unemployment rate dropped to 3.5% from 3.6%, with the decrease due to labor force participation rate increasing to its highest level since before the Covid pandemic.\n\nAverage hourly earnings increased by 0.3%, pushing the 12-month increase to 4.2%, the lowest level since June 2021.\n\nHourly earnings increased by 4.2% from a year ago, below estimates and at the slowest pace since June 2021. \n',
    tagUuids: ['job-market'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-04-07/us-payroll-growth-cools-wages-climb-in-mixed-signal-for-fed?srnd=premium',
    uuid: '8a384870-01d5-4d1d-8892-07fa4ea0c580',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-07T14:53:56.639Z',
    imageLinks: [
      'https://i.ibb.co/zm69Fvw/Screenshot-2023-04-07-at-9-12-54-AM.png',
    ],
  },
  {
    title: "Binance Australia's Derivatives License is Cancelled by Regulator",
    content:
      'The Australian Securities and Investments Commission (ASIC) stated that Binance misclassified retail and wholesale clients, giving retail clients the opportunity to purchase risky products that should only have been available to wholesale clients.\n\nAccording to Binance CEO, The platform had only 104 users and its spot crypto exchange will continue to operate in Australia ',
    tagUuids: ['crypto', ' binance'],
    sourceLink:
      'https://www.coindesk.com/business/2023/04/06/binance-australias-derivatives-license-cancelled-by-regulator/',
    uuid: 'a763556e-01fd-4ce0-835b-11dedc483ccb',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-06T21:32:16.332Z',
  },
  {
    title: 'Quotes from OpenAI founding investor, Reid Hoffman',
    question:
      'How can we address the challenges and uncertainties GPT-4 will catalyze?',
    content:
      'Our path forward won’t always be smooth and predictable.\n\nFacing such uncertainty, it’s only natural to have concerns.\n\nHuman progress has always required risk, planning, daring, resolve, and especially, hope. \n\nFacing uncertainty with hope and confidence is the first step toward progress, because it’s only when you have hope that you see opportunities, potential first steps, a new path forward.\n\n\n\n\n\n\n\n',
    tagUuids: ['ai-group', 'ReidHoffman', 'chatgpt'],
    sourceLink:
      'https://greylock.com/greymatter/amplifying-humanity-through-ai/',
    uuid: '4fc9548b-095c-4181-98eb-e0e88cd35867',
    noteType: 'quote',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-05T23:32:35.578Z',
  },
  {
    title:
      'ChatGPT\'s answer to "How should human beings view and interact with you, a powerful large language model?"',
    content:
      'Human beings should view a powerful large language model (LLM) as a tool, not as a source of truth, authority, or intelligence. A powerful LLM is a complex statistical system that can generate natural language texts based on its training data, parameters, and inputs, but it does not necessarily understand, reason, or reflect the meaning, context, or implications of what it produces or receives. It may produce texts that are coherent, informative, or persuasive, but also texts that are inaccurate, misleading, or harmful, depending on the quality and diversity of its data, the design and limitations of its architecture, and the goals and biases of its users and developers.',
    tagUuids: ['chatgpt', 'ReidHoffman', ' ai-group'],
    sourceLink:
      'https://greylock.com/greymatter/amplifying-humanity-through-ai/',
    uuid: 'bc1cde2c-b8cd-487a-8668-c18aafb9c0a0',
    noteType: 'quote',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-05T23:22:42.131Z',
  },
  {
    title:
      'Quotes about GPT-4 from podcast "Amplifying Our Humanity Through AI" by OpenAI\'s founding investor and LinkedIn founder, Reid Hoffman',
    content:
      'GPT-4’s often-remarkable simulations of cognitive proficiency are just that: simulations. GPT-4 is not a conscious, self-aware, sentient AI entity\n\nWhile GPT-4 (and other LLMs like it) aren’t conscious, they are reaching a point where their capacity to produce appropriate generations in so many different contexts is improving so fast that they can increasingly appear to possess human-like intelligence.\n\nGPT-4 does in fact operate in ways that are not entirely fixed, consistent, or predictable. In this way, it actually is like a human. It makes mistakes. It changes its “mind.” It can be fairly arbitrary.\n\nEssentially, GPT-4 arranges vast, unstructured arrays of human knowledge and expression into a more connected and interoperable network, thus amplifying humanity’s ability to compound its collective ideas and impact.',
    tagUuids: ['chatgpt', 'ReidHoffman'],
    sourceLink:
      'https://greylock.com/greymatter/amplifying-humanity-through-ai/',
    uuid: '2d29785c-a111-44d3-be84-872d713410f5',
    noteType: 'quote',
    authorUuid: 'REIDHOFFMAN',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-05T22:32:40.616Z',
  },
  {
    targetUuids: ['cost'],
    title:
      'Big decline in e-commerce sales shows that Costco has trouble finding a new growth engine.',
    content: '',
    tagUuids: ['cost'],
    rating: 'Bearish',
    uuid: 'dbee5461-1c8a-4ba2-b3ee-ea170cfe1ff9',
    noteType: 'opinion',
    creatorUuid: 'john.smith@example.com',
    childrenUuids: ['4c374e5e-76a4-4de0-a48a-4f09f1ba490f'],
    createdDate: '2023-04-05T20:51:53.307Z',
  },
  {
    title: 'Costco March U.S. comparable sales fell 1.5%',
    content:
      'March net sales of $21.71B, up 0.5% YoY. Comparable sales fell 1.1%. International comparable sales rose 2%. E-commerce comparable sales fell 12.7%.\n\nComparable sales excluding the impacts from changes in gasoline prices and foreign exchange rose 2.6%, consisting of U.S. +0.9%, International +7.6%. E-commerce comparable sales were -11.6%.',
    tagUuids: ['cost'],
    sourceLink:
      'https://seekingalpha.com/news/3954800-costco-march-comparable-sales-slips-marginally-net-sales-increases-slightly',
    uuid: '4c374e5e-76a4-4de0-a48a-4f09f1ba490f',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-05T20:45:39.324Z',
  },
  {
    title:
      "Google said its custom chip is faster than Nvidia's chip to train AI models",
    content:
      "According to Google research paper, fourth-generation Tensor Processing Units, or TPUs are faster and more power-efficient than Nvidia's A100 chips when training its artificial intelligence models\n\nThe custom chips are between 1.2 and 1.7 times faster than Nvidia's A100 chips, with up to 1.9 times more power efficient",
    tagUuids: ['googl', ' nvda'],
    sourceLink:
      'https://seekingalpha.com/news/3954671-nvidia-slips-google-touts-own-custom-chips',
    uuid: '5c83c00a-7add-4933-b0f9-ae95b7f627ce',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-05T15:06:00.412Z',
  },
  {
    title:
      'All banks will focus on minimizing the risks instead of bringing value to shareholders',
    tagUuids: ['banking'],
    targetUuids: ['banking'],
    rating: 'Bearish',
    uuid: '11d9b4c8-fb4b-406e-a7d3-e76b7faee78f',
    noteType: 'opinion',
    creatorUuid: 'emily.nguyen@example.com',
    parentUuid: '108edff8-df7b-4d40-bda1-c5fadbb1fc42',
    createdDate: '2023-04-04T22:06:37.134Z',
  },
  {
    title: 'Jamie Dimon says the banking crisis is not over',
    content:
      'As I write this letter, the current crisis is not yet over, and even when it is behind us, there will be repercussions from it for years to come\n\nBut importantly, recent events are nothing like what occurred during the 2008 global financial crisis',
    tagUuids: ['jamieDimon', 'jpm', 'banking'],
    sourceLink:
      'https://www.cnbc.com/2023/04/04/jpmorgans-jamie-dimon-says-banking-crisis-is-not-over-yet.html',
    uuid: '108edff8-df7b-4d40-bda1-c5fadbb1fc42',
    noteType: 'quote',
    authorUuid: 'Jamie Dimon, JPMorgan Chase CEO,',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-04T17:11:33.838Z',
  },
  {
    title:
      'JPMorgan’s chief global markets strategist, Marko Kolanovic says S&P 500 will retest lows',
    content:
      'For a rational investor, we think this makes little sense and that most of the inflows over the past 2 weeks were driven by systematic investors, short squeeze and a decline in VIX\n\nAny decline in yields is not a sign that the Fed is about to bring a punch bowl for tech stocks, in our view, but rather a sign that recession probability has increased\n\nWe expect a reversal in risk sentiment and the market re-testing last year’s low over the coming months.\n\nThe impact of the monetary tightening historically worked with a lag, and we never had a sustained rally before the Fed has even stopped hiking',
    tagUuids: ['jpm'],
    sourceLink:
      'https://www.cnbc.com/2023/04/04/jpmorgans-marko-kolanovic-stock-gains-make-little-sense-sp-500-to-retest-lows.html',
    uuid: 'c44eba44-3583-4f1f-afb9-5c877d0bebcf',
    noteType: 'quote',
    authorUuid: 'Kolanovic, JPMorgan’s chief global markets strategist',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-04T17:02:22.634Z',
  },
  {
    title:
      'Job openings dropped below 10 million for the first time since May 2021.\n',
    content:
      'Available positions was 9.93 million in Feb, a drop of 632,000 from Jan, according to the Labor Department’s JOLTS report\n\nProfessional and business services lost 278,000 job openings.\n\nTrade, transportation and utilities lost 210,000 openings.\n\nAccommodation and food services lost 125,000 openings.',
    tagUuids: ['job-market'],
    sourceLink: 'https://www.cnbc.com/2023/04/04/jolts-february-2023-.html',
    uuid: '013e8995-4225-44fb-b963-8abd2f68740f',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-04T16:50:52.365Z',
  },
  {
    title: 'My Tip',
    content:
      'Use large in money call to represent a position.\n\nBuy short term out of money call or put to hedge large jump.\n\nSell covered calls because you will never loss money.',
    tagUuids: [],
    uuid: 'ad5b7920-8376-4893-8ebb-26c0455026db',
    noteType: 'quote',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-03T20:28:41.578Z',
  },
  {
    title: 'My Mistakes',
    content:
      'Avoid bet too much on one stock. Tesla could drop 40% within a month.\n\nAvoid sell naked puts. Avoid selling more than one put option on the same stock.',
    tagUuids: [],
    uuid: '1a8c9118-b0b9-4622-b880-cb36577b9a1f',
    noteType: 'quote',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-03T20:27:42.180Z',
  },
  {
    targetUuids: ['LI'],
    title:
      "Numbers don't lie. Chinese prefer Li Auto's battery + fuel tank strategy.",
    tagUuids: ['LI'],
    rating: 'Bullish',
    uuid: 'e7d11b7c-901f-4543-95bc-c9f4321becfa',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-04-03T06:33:56.035Z',
  },
];
