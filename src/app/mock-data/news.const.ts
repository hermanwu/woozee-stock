import { Opinion } from '../notes/components/opinion-display/opinion.interface';
import { Fact } from '../risks/models/fact.model';
import { Rating } from '../stock/models/rating.model';
import { Quote } from './quote.model';

export const allNews: (Quote | Opinion | Fact)[] = [
  {
    title:
      'All banks will focus on minimizing the risks instead of bringing value to shareholders',
    tags: ['banking'],
    targets: ['banking'],
    rating: 'Bearish',
    uuid: '11d9b4c8-fb4b-406e-a7d3-e76b7faee78f',
    noteType: 'opinion',
    creatorUuid: 'emily.nguyen@example.com',
    parentUuid: '108edff8-df7b-4d40-bda1-c5fadbb1fc42',
    date: '2023-04-04T22:06:37.134Z',
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
      'Marko Kolanovic, JPMorgan’s chief global markets strategist says market gains make little sense, S&P 500 to retest lows',
    content:
      'For a rational investor, we think this makes little sense and that most of the inflows over the past 2 weeks were driven by systematic investors, short squeeze and a decline in VIX,”\n\n“Any decline in yields is not a sign that the Fed is about to bring a punch bowl for tech stocks, in our view, but rather a sign that recession probability has increased,”\n\n“We expect a reversal in risk sentiment and the market re-testing last year’s low over the coming months.”\n\n“The impact of the monetary tightening historically worked with a lag, and we never had a sustained rally before the Fed has even stopped hiking,”',
    tagUuids: ['gs', 'fed', 'fed'],
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
    targets: ['LI'],
    title:
      "Numbers don't lie. Chinese prefer Li Auto's battery + fuel tank strategy.",
    tagUuids: ['LI'],
    rating: 'Bullish',
    uuid: 'e7d11b7c-901f-4543-95bc-c9f4321becfa',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-04-03T06:33:56.035Z',
  },
  {
    title: 'Chinese EV startups released quarterly deliveries',
    content:
      'Li Auto delivered 52,584 vehicles, up 66% YoY\n\nNio delivered 31,041 vehicles, up 20.5% YoY\n\nXpeng delivered 18,230 vehicles, down 47% YoY\n\nIn comparison, BYD sold 264,647 vehicles, up 80% YoY',
    tagUuids: ['li', 'xpev', 'nio'],
    uuid: 'd5424ccc-051f-4fe0-a9a6-a62a63d52aa4',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-03T06:31:02.987Z',
  },
  {
    title: 'Tesla 2023 first quarter deliveries was 422,875, 36% growth YoY',
    content:
      'The number was inline with the estimates.\n\nTesla has slashed prices early this year to boost demand.\nElon Musk said Tesla aims to make 1.8 million to 2 million vehicles this year. \n',
    tagUuids: ['tsla'],
    uuid: 'aa65d334-8c3d-40ca-943c-06eaaa5f02c5',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-04-02T23:01:36.835Z',
  },
  {
    title: 'Roku to slash 200 jobs, or 6% of the workforce',
    content:
      'Company described the round of layoffs as a "restructuring plan" to "lower the Company\'s year-over-year operating expense growth and prioritize projects that the Company believes will have a higher return on investment"',
    tagUuids: ['Roku'],
    uuid: '1e7d78b5-30ec-4e0b-96ab-f82f4626b555',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-31T17:01:42.187Z',
  },
  {
    title: 'The Fed’s Preferred Inflation Metric is lower than expected\n',
    content:
      'The personal consumption expenditures price index excluding food and energy increased 0.3% for the month, according to the Commerce Department reported. \nIt is below the 0.4% estimate and lower than the 0.5% January increase.',
    tagUuids: ['spy'],
    uuid: '3854119c-585b-45e8-aa8e-c6ab94978ebc',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-31T16:55:50.867Z',
  },
  {
    targets: ['aapl'],
    title: "Haven't seen a new product from Apple for a long time!",
    tagUuids: ['aapl'],
    rating: 'Bullish',
    uuid: '8dc5e6e0-2a7e-4137-8795-c6cc2df2ca5d',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-29T22:12:51.867Z',
  },
  {
    title: 'Apple plans to unveil Mixed-Reality Headset on June 5 at WWDC 23',
    content:
      'WWDC is Apple’s biggest conference of the year. Free for all developers, WWDC23 will spotlight the latest iOS, iPadOS, macOS, watchOS, and tvOS advancements.\n\nVP of developer relations: “WWDC23 is going to be our biggest and most exciting yet, and we can’t wait to see many of you online and in person at this very special event!” ',
    tagUuids: ['aapl'],
    uuid: '9176222c-0ddc-4c59-bcc5-3edb82de7cb8',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-29T22:06:40.263Z',
  },
  {
    title: 'Electronic Arts is cutting about 800 jobs, or 6% of workforce',
    content:
      'CEO “As we drive greater focus across our portfolio, we are moving away from projects that do not contribute to our strategy, reviewing our real estate footprint, and restructuring some of our teams”',
    tagUuids: ['ea'],
    uuid: '5233885a-57f8-45b0-b542-00903768a42b',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-29T21:18:23.991Z',
  },
  {
    targets: ['baba'],
    title: 'Breaking into smaller companies should improve efficiency',
    tagUuids: ['baba'],
    rating: 'Bullish',
    uuid: '04362bad-1a1a-4220-8e2b-607c2a663d53',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-29T20:56:11.559Z',
    parentUuid: '83cbbee2-a404-42ed-9322-0c4c90beb25e',
  },
  {
    title: 'Lululemon posted strong earnings and upbeat guidance',
    content:
      "Total net revenue increased 30%\tto $2.8\tbillion.\n\nOperating income was $314.4 million, or 11.3% operating margin, which is lower than 27.7% margin of Q4 2021.\n\nNext quarter's revenue growth is expected to be around 19%.\nInventories at the end of 2022 increased 50% YoY to $1.4 billion. ",
    tagUuids: ['lulu'],
    uuid: '7460d0f3-3b94-4ec5-9049-2cec17f6c06c',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-29T15:34:14.935Z',
  },
  {
    title:
      'Alibaba said it will split its company into six units, each with the ability to go public.',
    content:
      'According to Alibaba, this move is “designed to unlock shareholder value and foster market competitiveness.” and “will empower all businesses to become more agile, enhance decision-making, and enable faster responses to market changes”\nSix units including: Taobao Tmall Commerce, Cloud Intelligence, Local Services, Cainiao Smart Logistics, Global Digital Commerce, Digital Media and Entertainment\nTaobao Tmall Commerce Group will remain wholly-owned by Alibaba.',
    tagUuids: ['baba', ' jackma'],
    sourceLink:
      'https://www.cnbc.com/2023/03/28/alibaba-says-it-will-split-into-6-units-that-can-raise-funds-and-ipo.html',
    uuid: '83cbbee2-a404-42ed-9322-0c4c90beb25e',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-28T15:00:55.223Z',
  },
  {
    title: 'Salesforce is considering more job cuts amid profit push',
    content:
      'Salesforce Inc. could see another round of job cuts and focus on improving profitability, said Chief Operating Officer.\n\n“The structure of the organization — if we feel like it needs to change and reshape — we’re going to make those moves to drive the efficiencies.”\n\nMeta Platforms Inc., Amazon Inc., and Twilio Inc. announced additional rounds of major cuts in recent weeks, amounting to more than 21,000 workers. ',
    tagUuids: ['amazon'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-03-24/salesforce-considers-more-job-cuts-amid-profit-push-coo-says?srnd=technology-vp',
    uuid: '4381a62f-e676-4281-a0cf-d9c71780996c',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-24T23:28:19.347Z',
  },
  {
    title:
      'Deposits at US lenders posted the biggest decline in nearly a year during the week',
    content:
      'Bank deposits fell by $98.4 billion to $17.5 trillion in the week ended March 15, according to data released Friday by the Federal Reserve.\n\nDeposits at small banks slumped $120 billion, while those for 25 largest firms rose almost $67 billion.\n\nMany depositors plowed into money-market funds. More than $117 billion poured into those accounts in the week ended March 22, according to data from the Investment Company Institute.',
    tagUuids: ['bank'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-03-24/us-bank-deposits-fell-98-4-billion-during-week-of-svb-collapse?srnd=premium',
    uuid: '3d2cf49e-ef4a-47ba-af19-7ce291ceaf78',
    noteType: 'fact',
    creatorUuid: 'hwu1106@gmail.com',
    createdDate: '2023-03-24T23:22:42.381Z',
  },
  {
    targets: ['sq'],
    title:
      "Hindenburg claims Block's Cash App facilities crime and lacks compliance controls.",
    tagUuids: [],
    rating: 'Bearish',
    uuid: 'd8c710cd-162f-4519-8dd4-aa57558f803c',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-23T22:55:06.715Z',
  },
  {
    targets: ['Meta'],
    title: 'TikTok is facing scrutiny in the US',
    tagUuids: [],
    rating: 'Bullish',
    uuid: '38e3e099-cb49-457e-b54e-977db6d6fa42',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-23T22:39:11.780Z',
  },
  {
    targets: ['msft', 'nvda', 'ai-group'],
    title: 'ChatGPT could improve productivity for businesses. ',
    content: 'It has a lot of users.',
    tagUuids: [],
    rating: 'Bullish',
    uuid: '69ebf096-c688-4e7f-8d37-c3966581a499',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-23T21:37:01.238Z',
  },
  {
    targets: ['coin', 'crypto'],
    content:
      'Jerome Powell mentioned that bank deposit withdrawal process has slowed down. ',
    tagUuids: [],
    rating: 'Bearish',
    uuid: '0277787d-317c-49cb-b493-900043513844',
    noteType: 'opinion',
    creatorUuid: 'jessica.jn.le@gmail.com',
    createdDate: '2023-03-22T22:29:05.195Z',
    parentUuid: 'd434cb20-d424-4778-bb42-63e54e4f8d49',
  },
  {
    title: 'Jerome Powell comments during news conference after FOMC meeting',
    content:
      'What I’m saying is you’ve seen that we have the tools to protect depositors when there is a threat of serious harm to the economy or to the financial system, and we’re prepared to use those tools. I think depositors should assume that their deposits are safe',
    tagUuids: [],
    uuid: 'd434cb20-d424-4778-bb42-63e54e4f8d49',
    noteType: 'quote',
    authorUuid: 'powell',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-22T21:43:02.926Z',
  },
  {
    targets: ['Banking'],
    title: 'Bank faces a trust issue as more banks are "bailed" out.',
    tagUuids: [],
    rating: 'Bearish',
    uuid: '943c1191-3c66-4a53-a1bf-cdbac8be581e',
    noteType: 'opinion',
    creatorUuid: 'herman.wrt@gmail.com',
    createdDate: '2023-03-20T21:57:26.508Z',
  },
  {
    title:
      'Update from CEO Andy Jassy on Amazon’s operating plan and additional role eliminations',
    content:
      'I’m writing to share that we intend to eliminate about 9,000 more positions in the next few weeks—mostly in AWS, PXT, Advertising, and Twitch.\n\n\nHowever, given the uncertain economy in which we reside, and the uncertainty that exists in the near future, we have chosen to be more streamlined in our costs and headcount.',
    tagUuids: [],
    sourceLink:
      'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-amazons-operating-plan-and-additional-role-eliminations',
    uuid: 'd21d2917-6911-432f-bf52-500e239da6a5',
    noteType: 'quote',
    authorUuid: 'AndyJassy',
    createdDate: '2023-03-20T19:03:20.044Z',
  },
  {
    targets: ['stocks', 'SPY'],
    title: 'SPY is showing a head shoulder pattern',
    tagUuids: [],
    rating: 'Bearish',
    uuid: 'ac8f3abc-8831-4647-a670-461d05f16d4f',
    noteType: 'opinion',
    createdDate: '2023-03-10T02:30:44.577Z',
    creatorUuid: 'herman.wrt@gmail.com',
  },
  {
    title: 'Goldman Sachs is bullish on Amazon',
    content:
      'Pessimistic talks about AWS growth have peaked. Cloud computing would still be a potential key tailwind in the coming quarters.\n\nE-commerce margins would improve in 2023',
    tagUuids: ['amazon'],
    uuid: '0c3d78c5-1b48-4a5f-8d53-099018a2e1b4',
    noteType: 'opinion',
    rating: Rating.Bullish,
    createdDate: '2023-03-08T06:37:15.657Z',
    authorUuid: '',
    organizationUuid: 'goldmansachs',
    targets: ['amzn'],
  },
  {
    title:
      'CrowdStrike reported better-than-expected Q4 earnings and an upbeat revenue growth forecast',
    content:
      '48% increase in total revenue to $637.4 million. 48% year-over-year growth in annual recurring revenue (ARR) to reach $2.56 billion. \n\nSubscription customer base grew by 41% year-over-year, reaching 23,019 subscription \n\nReported a GAAP loss from operations of $61.5 million but a record free cash flow of $209 million\n\nFor Q1 forecast, Non-GAAP income is between 50 cents and 51 cents per share, with revenue in the range of $674.9M to $678.2M',
    uuid: '553c96eb-feb9-463e-838a-da022cbeed1b',
    noteType: 'fact',
    createdDate: '2023-03-08T00:04:06.893Z',
    tagUuids: ['crowdstrike'],
  },
  {
    title: 'Rivian plans to raise $1.3 billion via selling bonds\n',
    content:
      'Rivian plans to raise $1.3 billion in cash via a sale of convertible notes to fund the development and launch of its upcoming R2 vehicles, now expected in 2026.\n\nThe company has been laying off 6% of its workforce earlier this year and reducing operating costs in the fourth quarter.\n\nRivian stock was down over 14% after the news.\n\n',
    tagUuids: ['rivian'],
    uuid: '8f536a8b-4d14-43b0-bb94-9894bdadefaf',
    noteType: 'fact',
    createdDate: '2023-03-07T23:27:38.086Z',
  },
  {
    title: 'Fed Chair Powell testifies before Congress',
    content:
      'The latest economic data have come in stronger than expected, which suggests that the ultimate level of interest rates is likely to be higher than previously anticipated\n\nIf the totality of the data were to indicate that faster tightening is warranted, we would be prepared to increase the pace of rate hikes\n\nAlthough inflation has been moderating in recent months, the process of getting inflation back down to 2% has a long way to go and is likely to be bumpy',
    uuid: 'b497afd5-6f3a-4cb6-ae04-5ed4c37337ab',
    noteType: 'quote',
    authorUuid: 'powell',
    createdDate: '2023-03-07T22:51:30.139Z',
    tagUuids: ['fed', 'rates'],
  },
  {
    title: '2023 Q1 Top Three Picks',
    content:
      'Name || Reasons \n Tesla || Visionary CEO, AI, High Margin, No Competitors\nMicrosoft || Top B2B Software, ChatGPT, Productivity Ecosystem\nPinduoduo || High Growth, No Red Flag, China \n ',
    tagUuids: ['pdd'],
    uuid: '7511f9b3-8bb1-4c54-a015-c35cea1f7288',
    noteType: 'list',
    createdDate: '2023-03-05T22:42:16.336Z',
  },
  {
    title: 'Snap stock was up 10%+ as US lawmakers plan to ban TikTok',
    content:
      'Mark Warner, US Senate Intelligence Committee Chairman, said he plans to introduce a bill to systematically ban Chinese technology, including TikTok.\n\nThis is a "broad bipartisan bill" co-sponsored by Republican John Thune of South Dakota.\n\nA TikTok ban could benefit digital ad companies such as Meta, Snap and Google.',
    tagUuids: ['snap', 'meta', 'googl'],
    sourceLink:
      'https://www.bloomberg.com/news/articles/2023-03-06/us-lawmakers-step-up-push-to-ban-tiktok-with-bill-this-week',
    uuid: '5d0ea3b5-b55d-486d-9821-ca02209701d7',
    noteType: 'fact',
    createdDate: '2023-03-06T20:16:58.462Z',
  },
  {
    title:
      '2/24/23: Stocks logged worst week in 2023 after hot inflation report',
    content:
      'Dow and S&P 500 dropped 1%; Nasdaq was down 1.7%.\n\nJanuary personal consumption expenditures price index, which is Federal Reserve’s preferred measure, showed inflation rose 5.4% YoY or 0.6 MoM, first increase since June last year.\n\nAdobe dropped 7% after the report that Department of Justice could block the Figma acquisition.\n\nBlock rose 4% today as earnings revenue exceeded expectations.',
    tagUuids: [],
    uuid: '42a0f1f2-1481-4974-9977-97424f9b6ef9',
    noteType: 'fact',
    createdDate: '2023-02-24T22:55:35.618Z',
    imageLinks: [
      'https://i.ibb.co/W5X9BSX/Screenshot-2023-02-24-at-2-39-56-PM.png',
    ],
  },
  {
    title: 'Nvidia 2023 Q4 earnings call',
    content:
      "The cumulation of technology breakthroughs has brought AI to an inflection point\n\nGenerative AI's versatility and capability has triggered a sense of urgency at enterprises around the world to develop and deploy AI strategies\n\n" +
      'NVIDIA AI is essentially the operating system of AI systems today.\n\n' +
      'By using NVIDIA AI, your entire machine learning operations is more efficient, and it is more cost effective. You save money by using accelerated software \n\n' +
      'The activity around the AI infrastructure that we build Hopper and the activity around inferencing using Hopper and Ampere to inference large language models, has just gone through the roof in the last 60 days.',
    tagUuids: ['nvda', 'technology'],
    uuid: '8f357063-4125-4a3c-ae5e-3831812f4fbe',
    noteType: 'quote',
    authorUuid: 'JensenHuang',
    createdDate: '2023-02-24T04:37:25.079Z',
  },
  {
    title: 'Beyond Meat reports quarterly earnings results',
    content:
      'Net revenues were $79.9 million, down 20.6% YoY.\nGross profit was a loss of $2.9 million.\n\nNet loss was $66.9 million, equivalent to -83.6% profit margin.\n\nCEO: "We are making solid progress in our transition to a sustainable growth model, one that emphasizes the achievement of cash flow positive operations within the second half of 2023"',
    tagUuids: ['bynd'],
    uuid: 'b74b0572-ccc2-454c-938d-d8dc4348e1ec',
    noteType: 'fact',
    createdDate: '2023-02-24T02:16:50.140Z',
  },
  {
    title: 'Wayfair posted a wider-than-expected loss',
    content:
      'Revenue was $3.1 billion, down 4.6% YoY.\n\nInternational net revenue was $415 million, down 19.7% YoY.\n\nActive customers were 22.1 million, down 19% YoY.\n\nNet loss was $351 million and Non-GAAP Adjusted EBITDA was ($71) million.\n\nCEO: “Although the short-term macroeconomic picture is unpredictable, we are confident in our ability to navigate its challenges."',
    tagUuids: ['w'],
    uuid: '21d715e1-0ac2-4d5e-8723-9ab2018111d2',
    noteType: 'fact',
    createdDate: '2023-02-24T00:30:25.272Z',
  },
  {
    title: 'Stock market stopped a four-day losing streak. \n',
    content:
      'S&P 500 was up 0.53%, Dow was up 0.33%, and Nasdaq was up 0.72%. 7 out of 11 S&P sectors was higher today.\n\n' +
      'Nvidia was up 14% after earnings beat estimates\n' +
      'Wayfair was down 23% after reporting wider than expected loss.',
    tagUuids: [],
    uuid: '35c0efa2-8125-46d9-a797-c68548d19fb8',
    noteType: 'fact',
    createdDate: '2023-02-24T00:23:55.900Z',
  },
  {
    title:
      'Nvidia shares rose sharply after earnings beat both top and bottom lines. \n',
    content:
      'Revenue was $6.05 billion, down 21% YoY .\n\n' +
      'Operating income was $2.97 billion, down 58% YoY.\n\n' +
      'Data center revenue including AI chips, was up 11% YoY.\n\n' +
      'CEO: "AI is at an inflection point, setting up for broad adoption reaching into every industry...From startups to major enterprises, we are seeing accelerated interest in the versatility and capabilities of generative AI."',
    tagUuids: ['nvda'],
    uuid: '12a7f5fb-3824-4d2d-83d8-43985129091f',
    noteType: 'fact',
    createdDate: '2023-02-23T23:29:03.019Z',
  },
  {
    title: 'BYD vs Tesla',
    content:
      '2022 Annual || Revenue || Revenue Growth || Net Profit || Net Profit Margin || PE\n\nTesla || 81.5B\t|| +51.4% || 12.56B || 15.41% || 55.79\n\nBYD (Estimated) || 63.0B || +94.4% || 2.45B || 3.8% || 60.21\n',
    tagUuids: ['tsla', ' byd'],
    uuid: '997ed6a3-3f67-46e8-80c2-26b750083ef7',
    noteType: 'vote',
    createdDate: '2023-02-17T04:20:55.519Z',
  },
  {
    title: 'YouTube CEO Susan Wojcicki says she’s stepping down\n',
    content:
      'In her blog: “Today, after nearly 25 years here, I’ve decided to step back (and) start a new chapter focused on my family, health, and personal projects I’m passionate about” \n\nNeal Mohan, chief product officer, will take the lead as the head of YouTube.\n\nWojcicki will take on an advisory role at Google/Alphabet.',
    tagUuids: ['googl'],
    uuid: 'af064bd8-c894-4189-91c6-ee4c6d9ccb22',
    noteType: 'fact',
    createdDate: '2023-02-16T23:23:43.466Z',
  },
  {
    title:
      'Tesla recalls 362,758 vehicles as its full self-driving software may cause crashes.',
    content:
      'According to nhtsa.gov (National Highway Traffic Safety Administration), FSD Beta may allow the vehicle to act unsafe around intersections such as:\n "Traveling straight through an intersection while in a turn-only lane"\n ' +
      '"Entering a stop sign-controlled intersection without coming to a complete stop"\n ' +
      '"Proceeding into an intersection during a steady yellow traffic signal without due caution"\n' +
      '"Respond insufficiently to changes in posted speed limits"\n Tesla will release an over-the-air (OTA) software update to address the issue.',
    tagUuids: ['tsla'],
    uuid: 'ee393bfb-df5c-46c1-9d2e-56e0f62b9a7c',
    noteType: 'fact',
    createdDate: '2023-02-16T22:47:04.599Z',
  },
  {
    title: 'DoorDash top line beats estimates but misses the bottom line ',
    content:
      'Revenue increased to 1.82B, up 39.8% YoY (from $1.3B)\n\nQ4 EPS of -$1.65 is worser than the estimates. DoorDash claimed the loss was related to the acquisition and stock-based compensation.\n' +
      'Operating expenses increased to $1.17B, up 43.3% YoY. Operating margin was -20.4%.\n\nDoorDash also authorized a stock buyback of up to $750M.\n\nPresident and COO Christopher Payne will retire.\n',
    tagUuids: ['dash'],
    uuid: 'deee44e4-03c9-49c1-8ff6-f6b9fa07998d',
    noteType: 'fact',
    createdDate: '2023-02-16T22:24:51.555Z',
  },

  {
    title: 'Airbnb earnings beat estimates',
    imageLinks: [
      'https://i.ibb.co/dGzLJs2/Screenshot-2023-02-14-at-4-11-18-PM.png',
    ],
    content:
      'Quarterly Revenue increased to 1.9B, ⬆️ Up 24.2% YoY (from 1.53B)\nNext Quarter Revenue Forecast increased to 1.79B, ⬆️ Up 18.3% YoY (from 1.51B)\nOperating Expenses increased to 1.32B, ⬆️ Up 41.2% YoY (from 936M)\nOperating Margin was 12.4%\n\nHead count is down 5% while revenue is up 75% compared with 2019.\n\nCFO: "Demand is remaining resilient so far this year, with travelers booking trips further in advance"',
    tagUuids: ['abnb'],
    uuid: 'fea7d5c7-6daa-4e9c-a234-8929f0bf8dd7',
    noteType: 'fact',
    createdDate: '2023-02-15T00:08:34.585Z',
  },
  {
    title: 'Meta’s chief business officer is leaving after 13 years.',
    content:
      "Chief Business Officer Marne Levine is stepping down and this role would be filled by Meta's existing executives.\n\nShe was the chief operating officer at Instagram.",
    tagUuids: ['meta'],
    uuid: '5c562ad9-9146-4de3-bd4d-9a72b32e7f30',
    noteType: 'fact',
    createdDate: '2023-02-14T04:40:08.607Z',
  },
  {
    imageLinks: [
      'https://i.ibb.co/ZN5RNZ0/Screenshot-2023-02-13-at-3-52-23-PM.png',
    ],
    title: 'Palantir reported its first profitable quarter',
    content:
      'CEO Alex Karp: "This is a significant moment for us and our supporters."\nFourth-quarter earnings beat both top and bottom lines.\n\nFirst ever positive GAAP income of $31 million and expects 2023 to be the first profitable year\n\n Revenue was up 18% YoY to $509 million; Government revenue was up 23% YoY to $293 million; Commercial revenue was up 11% YoY to $215 million\n\n\nCustomer count was up 55% YoY; US commercial customer count was up 79% YoY, growing from 80 customers to 143.\n\nHowever, 2023 revenue forecast was between $2.18 billion and $2.23 billion, below estimates.\n\n',
    tagUuids: ['pltr'],
    uuid: '9ce920fc-5757-47bd-a3eb-01d062124848',
    noteType: 'fact',
    createdDate: '2023-02-13T23:48:10.730Z',
  },
  {
    imageLinks: [
      'https://i.ibb.co/zS7L4cY/Screenshot-2023-02-10-at-3-25-59-PM.png',
    ],
    title: '周五美股涨跌不一，市场期待下周CPI',
    content:
      '纳斯达克连续第三天下跌 (-0.6%)，但道琼斯指数 (+0.5%) 和标普500 (+0.2%) 收盘上涨。\n费城美联储官员Patrick Harker表示赞成再多次加息25个基点：“我们可以慢慢来。看看接下去(通胀)如何发展”。\nLyft财报低于预期且远不如其竞争对手Uber (Uber盈利近6亿美元，而Lyft亏损近6亿)。\nExpedia财报不如预期。公司营收仅增长15%，但利润下降36%。\n下周前瞻：CPI报告；Palantir、Airbnb、Shopify、DoorDash财报。',
    tagUuids: ['news'],
    uuid: '1e3d0178-374f-4973-a807-368773de61cf',
    noteType: 'fact',
    createdDate: '2023-02-10T23:37:48.486Z',
  },
  {
    imageLinks: [
      'https://i.ibb.co/zS7L4cY/Screenshot-2023-02-10-at-3-25-59-PM.png',
    ],
    title: 'Stock market posted the worst week of 2023.',
    content:
      'Nasdaq ended with its third consecutive decline day (-0.6%) while Dow (+0.5%) and S&P 500 (+0.2%) closed positive.\n\nPhiladelphia Fed chief, Patrick Harker, said he favors “a couple more” quarter-point hikes: "We just can take our time. See how things work out again".\n\nLyft tanked more than 36% after earnings missed expectations and much worse than competitor Uber. \n\nExpedia fell more than 8% after earnings missed expectations. Company revenue grew only 15% while profit decreased 36%.\n\nFord and Chinese company CATL(宁德时代) plan to build a battery plant in Michigan.\n\nNext week catalysts: CPI report; Palantir, Airbnb, Shopify, DoorDash earnings.',
    tagUuids: ['news', 'fed'],
    uuid: 'ccbaf2f3-9f1c-4eef-b5bf-a66094cfda31',
    noteType: 'fact',
    createdDate: '2023-02-10T23:23:02.900Z',
  },
  {
    title: 'Expedia earnings missed expectations.',
    content:
      'Q4 Revenue was $2.618B, +15% YoY, missed by $80M.\nNon-GAAP EPS of $1.26, misses by $0.44.\nNet income was $177M, -36% YoY \nGross bookings +17% YoY\nBooked and stayed room nights +19% YoY\n\nCEO Peter Kern: "While our Q4 results were negatively impacted by severe weather, demand was otherwise strong and accelerating, and has been markedly stronger since the start of the year", "We continue to see that people are prioritizing travel over just about everything", "So far, demand continues to be quite robust and we’re really pleased with how ’23 is starting."',
    tagUuids: ['expe'],
    uuid: 'dcb3eb62-38c9-49d7-971b-28c3bd443b8f',
    noteType: 'fact',
    createdDate: '2023-02-10T18:57:18.877Z',
    imageLinks: [
      'https://i.ibb.co/9w2sySj/Screenshot-2023-02-10-at-10-59-30-AM.png',
    ],
  },
  {
    imageLinks: [
      'https://i.ibb.co/FgNFCp7/Screenshot-2023-02-09-at-2-48-08-PM.png',
    ],
    title: '周四美股高开低走；贝宝Lyft发布财报\n',
    content:
      '纳斯达克收盘-1.0%，标普500收盘-0.9%，道琼斯收盘-0.7%。标准普尔 11 个板块全部下跌。\n贝宝财报超预期。营收增长至74亿美元，同比增长 6.9%。CEO Dan Schulman宣布计划年底退休。\n Lyft财报收益低于预期。收入增长至12亿美元，同比增长 21%，但亏损近6亿美元。下季度营收预计9.75亿美元，同比增长仅为11%。盘后Lyft下跌近30%。\n 百事集团财报超预期。净销售额同比增长10.9%至280亿美元。但通胀也导致需求下降，食品类产品销量下降2%。\n 在Disney CEO昨天公布削减支出及重组计划后，投资人Nelson Peltz宣布放弃与迪士尼的代理权争夺战：“Now Disney plans to do everything we wanted them to do”。\n 马斯克的SpaceX今天成功进行了星舰Starship的助推器点火测试。\n 雅虎宣布将裁员超过20%，约1600人。',
    tagUuids: [],
    uuid: '05ed528d-1d9a-4145-a2d4-eac5c43db7e6',
    noteType: 'fact',
    createdDate: '2023-02-09T23:05:10.005Z',
  },

  {
    imageLinks: [
      'https://i.ibb.co/FgNFCp7/Screenshot-2023-02-09-at-2-48-08-PM.png',
    ],
    title: 'Thursday: stocks pushing lower for the second consecutive day',
    content:
      "Nasdaq closed -1.0%, S&P 500 ended -0.9% and the Dow finished -0.7%. all 11 S&P sectors ended in the red.\n\nPayPal earnings beat estimates. Revenue grew to $7.4B (+6.9% YoY). Total Payment Volume (TPV) of $357.4B (+5% YoY). Venmo processed $62.5B in TPV (+3% YoY). CEO Dan Schulman will retire at year end.\n\nLyft's earnings missed estimates. Revenue grew to $1.2 billion (+21% YoY). Next quarter's revenue is estimated to be $975 million, indicating an 11% growth YoY.\n\nPepsiCo Q4 earnings beat estimates. Net sales rose 10.9% to $28 billion. Volume falls 2% worldwide as higher prices hurt demands.\n\nActivist investor Nelson Peltz dropped his proxy fight against Disney after CEO Bob Iger unveiled cost-reduction plans. Peltz: “Now Disney plans to do everything we wanted them to do”.\n\nCrypto exchange Kraken settles with SEC for $30 million and will close U.S. staking operation. Coinbase CEO warns such move would hurt crypto businesses.\n\nTesla was over $200 today, which is doubled compared to the lowest price in 2023. Elon's SpaceX also successfully performed the Starship booster test today.\n\nYahoo will lay off more than 20% of staff, or around 1,600 workers,\n",
    tagUuids: [],
    uuid: 'd4124b77-b562-4504-8e5b-6ec944cd4a26',
    noteType: 'fact',
    createdDate: '2023-02-09T22:46:39.871Z',
  },
  {
    title: 'PayPal earnings beat estimates.',
    content:
      'CEO Dan Schulman will retire at year end.\n' +
      "Revenue of $7.4B (+6.9% YoY) beats by $10M.\n\nGAAP EPS of $0.81 compared to $0.68 in Q4'21\n\nTransactions grew 13% YoY, surpassing 6B transactions.\n\nTotal Payment Volume (TPV) of $357.4B (+5% YoY). \n\nVenmo processed $62.5B in TPV (+3% YoY)\n\nQ1'23 Guidance: Revenues expected to grow ~7.5% YoY",
    tagUuids: ['pypl'],
    uuid: 'dcb8739b-fa2d-4e96-9293-8a8530eafb2a',
    noteType: 'fact',
    createdDate: '2023-02-09T21:44:57.482Z',
  },
  {
    title: "Lyft's earnings missed estimates",
    content:
      'Revenue of $1.2 billion grew 21 percent from $969.9 million in Q4 2021.\n\nActive riders was 20,358K, up 8.7% Y/Y. \n\nRevenue per active rider was $57.72, up 11.5% Y/Y.\n\nNet loss of $588.1 million vs net loss of $283.2 million in Q4 2021.\n\nFor Q1 2023, estimated revenue of $975 million, indicating an 11% growth YoY.\n',
    tagUuids: ['lyft'],
    uuid: '8b69e3e9-4453-4c70-9784-dbafe5f1a935',
    noteType: 'fact',
    createdDate: '2023-02-09T21:27:30.624Z',
  },
  {
    title: 'PepsiCo releases Q4 earnings that beat estimates',
    content:
      'Net sales rose 10.9% to $28 billion. \nVolume falls 2% across food business worldwide as higher prices hurt demands. \nPepsi Zero Sugar volume climb 26%.\nPepsi estimates 6% organic revenue growth in 2023 during "mild" recession.\nAnnounces a 10 percent increase in our annualized dividend',
    tagUuids: ['pep'],
    uuid: '9a71e356-0021-4660-9e68-41c5c14ae0e3',
    noteType: 'fact',
    createdDate: '2023-02-09T20:12:00.761Z',
  },
  {
    title: "What is Uber's moat (competitive advantage )?",
    content:
      "for us in Delivery, we're benefiting from the power of the platform, very cheap audience, from our Rides business. Remember, we get more new eaters, from our rides app than we do from Google and Facebook and Instagram, combined at about a quarter of a cost. So that is a very significant structural advantage that is assisting our Delivery business.\n\nJohn is that I've never seen a permanent competitive advantage in my life, and we don't expect to.\n\nwe're using the power of our platform with membership to win category position the right way. \n\nSo right now, we are seeing kind of the positive feedback loop of more driver supply leading to more demand, leading to more data so that we can target that demand so that we can match the right driver to the right rider\n\nwe don't consider spending more money a strategy. \n\nAs we increase the number of members in our member base and the coverage of members who tend to buy more, who tend to buy more frequently\n\nthe power of the platform. We are constantly cross-promoting between Mobility and Delivery, and essentially sending free or cheaper traffic from one platform to the other in a personalized targeted way as well. And so you should expect more opportunities for us to upsell and cross-sell in an intelligent way driven by AI and machine learning.\n\nThe third is the breadth of the product that we offer.",
    tagUuids: ['uber', 'google'],
    uuid: 'a9aa0c11-058b-4552-b75c-c350c56cef33',
    noteType: 'quote',
    createdDate: '2023-02-09T04:20:32.400Z',
  },
  {
    authorUuid: 'DaraKhosrowshahi',
    title: "Uber CEO's quotes during earnings call",
    content:
      "Despite macroeconomic uncertainty, I'm more confident than ever in our prospects. We're entering the year with great momentum. Mobility trip growth is accelerating and Delivery remains resilient.\nWe delivered our strongest quarter ever in Q4, with gross bookings of 26% year-on-year on a constant currency basis. Adjusted EBITDA of $665 million exceeded the high-end of our guidance for the sixth quarter in a row and we delivered strong incremental adjusted EBITDA margin of 12%.\n",
    tagUuids: ['uber'],
    uuid: '946f6f22-1e23-4592-9cac-549cda9cac52',
    noteType: 'quote',
    createdDate: '2023-02-09T01:30:30.831Z',
  },
  {
    title: '周三美股全线回调，回吐了昨天的部分涨幅',
    imageLinks: [
      'https://i.postimg.cc/kX1DCn10/Screenshot-2023-02-08-at-3-58-09-PM.png',
    ],
    content:
      '纳斯达克收盘-1.7%，标普500收盘-1.1%，道指收盘-0.6%。标普11 个板块全部收低，其中通信服务板块下跌4%。\n' +
      '马斯克宣布特斯拉将于3月1日的Investor Day发布“Master计划”的第三部分: "Master Plan 3, the path to a fully sustainable energy future for Earth"。\n' +
      '谷歌在今天发布了几项令人失望的产品服务后下跌7%，市值跌去约1000亿美元。ChatGPT竞争者，Bard AI在现场展示中给出了一个明显错误的答案。\n' +
      '迪士尼财报盈利营收双双超预期。但Disney+订阅者第一次下降，减少近1%。CEO计划削减55亿美元支出，包括裁员7000人。\n' +
      'Affirm财报营收同比增长10.8%。下季度及全年营收前瞻均远低于预期，股价盘后下跌近20%。公司同时宣布裁员19%，约500人。\n',
    tagUuids: ['news'],
    uuid: '81b0f8f9-3e6e-4858-ab1b-3e3414459211',
    noteType: 'fact',
    createdDate: '2023-02-08T23:40:03.502Z',
  },
  {
    authorUuid: 'bobIger',
    title: 'Bob Iger speaks about company reforming at Disney earnings call ',
    content:
      "I've always believed that the best way to spur great creativity is to make sure the people who are managing the creative processes feel empowered ... Therefore, our new structure is aimed at returning greater authority to our creative leaders and making them accountable for how their content performs, financially. Our former structure severed that link and it must be restored.",
    tagUuids: ['dis'],
    uuid: '8ca2236c-b2ea-4ebf-a15c-e292a372032a',
    noteType: 'quote',
    createdDate: '2023-02-08T22:06:19.016Z',
  },
  {
    targets: ['tsla'],
    title: "Tesla's CFO might think Tesla stock is cheap enough",
    rating: 'Bullish',
    parentUuid: 'e9f50912-b024-4b9e-b812-1df7968d4a2a',
    uuid: '2c19200a-1f75-4086-acf0-7e6a4f957c83',
    createdDate: '2022-12-29T18:57:32.191Z',
    noteType: 'opinion',
  },
  {
    targets: ['US'],
    title: 'Consecutive down years are rare for U.S. stocks.',
    content:
      "* after this year's drop, there's only a low probability they will decline again in 2023\n* markets tend to bottom before a recession starts",
    tagUuids: null,
    rating: 'Bullish',
    parentUuid: 'd179e694-ee48-4a95-8ba9-74f0eb4d850c',
    uuid: '46581a5a-8ebc-44a5-aee9-f35a547ab18f',
    createdDate: '2022-12-29T18:57:32.191Z',
    noteType: 'opinion',
  },
  {
    targets: ['EV'],
    title: 'EV is a better product than combustion engine.',
    tagUuids: ['EV'],
    rating: 'Bullish',
    uuid: '06554f1e-7329-41b2-8ce8-5a7b16cebf9e',
    createdDate: '2022-12-29T18:57:32.191Z',
    noteType: 'opinion',
  },
  {
    targets: ['EV'],
    title: 'Most governments require all vehicles to become EVs in the future.',
    tagUuids: ['EV'],
    rating: 'Bullish',
    uuid: '06554f1e-7329-41b2-8ce8-5a7b16cebf9f',
    createdDate: '2022-12-29T18:57:32.191Z',
    noteType: 'opinion',
  },
  {
    targets: ['tsla'],
    title:
      'The demand for Tesla continues to decrease as the global recession worsens\n\n\n',
    content: "* Elon Musk's political behaviors are damaging the brand.",
    tagUuids: ['tsla'],
    rating: 'Bearish',
    uuid: '9cfb1487-d35a-43ff-84ff-e2347115248a',
    createdDate: '2022-12-27T20:13:24.360Z',
    noteType: 'opinion',
  },
  {
    targets: ['crm'],
    title:
      'Productivity is an issue for a company that allows work permanently from home',
    tagUuids: ['crm'],
    rating: 'Bearish',
    parentUuid: '8420788c-76f1-4238-88b4-bb3bc24ef1c8',
    uuid: '4aeed3d3-acf8-4f52-bcee-cc4d9ea677b1',
    createdDate: '2022-12-17T16:15:52.391Z',
    noteType: 'opinion',
  },

  {
    title: '迪士尼财报营收盈利均超预期',
    content:
      '第一季度营收为235.1亿美元，同比上涨7.7%。\n' +
      'Non-GAAP每股收益为0.99美元，高出预期0.20美元。\n' +
      '这次财报是CEO Bob Iger在去年11月重返Disney后，第一次发布财报。他计划重组业务，降低成本，提高效率。\n' +
      '公司将重组为三个部门：电视/电影娱乐部门，ESPN体育网络部门，及包括游轮和消费品在内的公园部门。\n' +
      '同时公司计划节省约55亿美元支出，其中包括裁员7000人，并试图在今年恢复股息。\n' +
      '迪士尼流媒体Disney+本季度失去1%订阅用户，亏损较上年同期翻倍，到达10.5亿美元，但好于预期。\n' +
      '乐园部门的营收增长21%至87亿美元，收益增长25%至30.5亿美元。\n' +
      '传统广播和有线电视/ESPN业务营收下降16%至12.6亿美元。',

    tagUuids: ['dis'],
    uuid: '901e651e-ecd0-4d64-a6fa-ad3a80374221',
    noteType: 'fact',
    createdDate: '2023-02-08T21:53:13.186Z',
  },
  {
    title:
      '周二美股收盘大幅上涨，但三大指数在美联储主席鲍威尔发表讲话时大幅波动。',
    tagUuids: [],
    uuid: '34f93229-eb27-45b0-8ee5-6dae95549637',
    content:
      '最终纳斯达克上涨1.9%，标普500上涨1.3%，道指上涨0.8%。市场认为鲍威尔的讲话没有明显的鹰派立场。\n' +
      '鲍威尔再次表示减缓通胀的进程已经开始。他同时声称如果通胀或劳动力市场数据继续过热，加息也会继续，但他的语气和上周没什么区别，并无“攻击性“。\n',
    imageLinks: [
      'https://i.ibb.co/5cFdQRt/Screenshot-2023-02-07-at-2-18-30-PM.png',
    ],
    noteType: 'fact',
    createdDate: '2023-02-07T22:10:03.904Z',
  },
  {
    title: '财报：Chipotle，杜邦，皇家加勒比，Hertz',
    imageLinks: [
      'https://i.ibb.co/x3csBrT/Screenshot-2023-02-07-at-3-32-58-PM.png',
    ],
    content:
      'Chipotle财报营收盈利自2017年来首次不及预期。可比销售额增长5.6%，餐厅利润率24%，双双不及预期。\n' +
      '杜邦财报营收盈利超预期，全球所有地区销售增长。但预计2023上半年消费电子产品和半导体销量将下降。\n' +
      '皇家加勒比游轮今天上涨7.12%，季度亏损低于预期。公司预测2023需求将超2019，并创新高。\n' +
      'Hertz今天也上涨7.47%，财报显示季度利润超预期，营收同比增长4.6%。公司表示旅游需求将持续增长。',
    tagUuids: ['cmg'],
    uuid: 'b7c1b7c0-26a3-4fd4-8b91-9c2b696f50ea',
    noteType: 'fact',
    createdDate: '2023-02-07T21:27:51.628Z',
  },
  {
    authorUuid: 'powell',
    title: 'Chairman Powell speaks at the Economic Club',
    content:
      'The disinflationary process, the process of getting inflation down, has begun and its begun in the goods sector ... But it has a long way to go. These are the very early stages of disinflation. \n' +
      'if we continue to get, for example, strong labor market reports or higher inflation reports, it may well be the case that we have do more and raise rates more than is priced in.',
    tagUuids: [],
    uuid: 'a72229ba-e173-4c75-865f-5f7e18b9dcf5',
    noteType: 'quote',
    createdDate: '2023-02-07T21:11:46.509Z',
  },
  {
    title: '新闻：微软，任天堂，Meta，Zoom Video',
    imageLinks: [
      'https://i.ibb.co/p0yQZhD/Screenshot-2023-02-07-at-3-13-29-PM.png',
    ],
    content:
      '微软宣布发布新一代Bing搜索引擎，将集成ChatGPT。微软与包括谷歌英伟达在内的AI相关公司今天大涨。此外，有消息称微软计划帮助企业使用ChatGPT推出自己的聊天机器人。\n' +
      '任天堂下调Switch销售预期及本财年利润预期。任天堂12月销售823万台Switch，同比下降22%，但新的宝可梦游戏创最快销售记录。\n' +
      '据知情人士透露，Meta正在公司内部推行“扁平化”，要求管理人员转变成个人贡献者。\n' +
      'Zoom将裁员15%，约1300人。Ebay将裁员4%，约500人。\n',

    tagUuids: ['news'],
    uuid: '5b5f5b31-54a9-4a63-b3e6-657ebbba6173',
    noteType: 'fact',
    createdDate: '2023-02-07T20:59:57.901Z',
  },
  {
    title: "ABC's Good Morning America program",
    authorUuid: '1234',
    content:
      "You don't have a recession when you have 500,000 jobs and the lowest unemployment rate in more than 50 years\nWhat I see is a path in which inflation is declining significantly and the economy is remaining strong.\nAmerica has paid all of its bills on time since 1789, and not to do so would produce an economic and financial catastrophe\n" +
      'Every responsible member of Congress must agree to raise the debt ceiling.',
    tagUuids: [],
    uuid: '6c79d034-cd9e-4396-8c96-d97b272c1279',
    noteType: 'quote',
    createdDate: '2023-02-07T03:25:03.924Z',
  },
  {
    title: '财报：动视暴雪，Take-Two Interactive',
    content:
      'Activation Blizzard财报营收盈利超预期。营收23.34亿美元，同比增加仅8%，但净预定量为35.7亿美元，同比增加43.4%。微软收购动视暴雪的计划仍在进行，双方将努力在微软2023财年结束前完成收购。\n' +
      'Take-Two Interactive财报不及预期。营收为14.1亿美元，同比增长56.1%。净预定量为13.8亿美元，同比增加60%。',
    tagUuids: ['atvi'],
    uuid: '74478cb2-44f2-4006-8cd9-3fe5385bf30d',
    noteType: 'fact',
    createdDate: '2023-02-06T21:32:23.836Z',
    sourceLink:
      'https://www.cnbc.com/2023/02/03/jobs-report-january-2023-.html',
  },
  {
    title: '财报：Pinterest，Chegg',
    content:
      'Pinterest财报录得1700万盈利，但营收同比增加4%，不及预期。其中欧洲营收下跌7%。公司宣布了5亿美元股票回购计划，同时CFO将辞职。\n' +
      'Chegg第四季度营收2.052亿美元，同比下降1.1%。订阅用户为500万，同比增加8%。但是公司下季度前瞻远不及预期导致盘后暴跌。\n',

    uuid: '74478cb2-44f2-4006-8cd9-3fe5385bf30d',
    noteType: 'fact',
    createdDate: '2023-02-06T21:32:23.836Z',
    tagUuids: ['pins'],
  },
  {
    title: '美股周一继续下调，美债继续上涨',
    imageLinks: [
      'https://i.ibb.co/TPwqZFL/Screenshot-2023-02-06-at-1-54-04-PM.png',
    ],
    content:
      '道指下跌0.1%，标普500下跌0.61%，纳斯达克下跌近1%。\n基准10年期国债收益率上涨11个基点至3.64%，2年期国债收益率上涨18个基点至4.48%。' +
      '\n财政部长耶伦发表讲话，表示经济强劲而有韧性，仍然有机会避免衰退。她认为上周五发布的强劲就业报告是一个很好的证据。',
    tagUuids: ['news'],
    uuid: '36a4bc3c-5877-4d5f-a3b1-459a50274b18',
    noteType: 'fact',
    createdDate: '2023-02-06T21:29:52.146Z',
  },
  {
    title:
      '谷歌将在周三美东早上8：30举办一场名为"Live from Paris"的直播活动，发布关于新的搜索产品的信息。',
    content:
      '活动描述中称“我们正重新构想搜索信息以及与信息互动的方式，使人们能更自然直观地找到所需要的”， “通过搜索，地图以及更多其他方式，得到更多信息”。\n在上周财报会议上，谷歌CEO声称将会在未来几周或几月里，向公众发布大型语言模型工具。这次直播被猜测可能透露更多关于谷歌如何应对ChatGPT的线索。',
    tagUuids: ['googl'],
    uuid: '4e903efd-768c-47f2-be4d-608da05fd940',
    noteType: 'fact',
    imageLinks: [
      'https://i.ibb.co/XLCPkMD/Screenshot-2023-02-05-at-2-48-00-PM.png',
    ],
    createdDate: '2023-02-05T22:19:02.769Z',
  },
  {
    title: '下周财报关注 2/6 - 2/10',
    content:
      '周一: 缤趣Pinterest，动视暴雪，Take-Two Interactive。 \n ' +
      '周二: BP石油，Chipotle，Fortinet，杜邦DuPont，皇家加勒比游轮， Hertz。 \n ' +
      '周三: 迪士尼Disney，优步Uber，百盛Yum! Brands，CVS，Under Armour，Affirm， 罗宾逊。\n ' +
      '周四: 百事，Paypal，Lyft，Cloudflare，Expedia，希尔顿，拉夫劳伦，丰田Toyota，Corsair Gaming。',
    tagUuids: ['news'],
    uuid: '958db851-55ba-4f8d-902c-80cab6bb252e',
    noteType: 'fact',
    createdDate: '2023-02-05T20:27:09.912Z',
    imageLinks: [
      'https://i.ibb.co/WvHTzxJ/Screenshot-2023-02-05-at-7-46-20-AM.png',
    ],
  },
  {
    title: 'Apple Earnings Call',
    question: 'How do you think about your supply chain',
    content:
      "We're now at a point where production is what we need it to be. And so the problem is behind us.\nWe have had a very resilient supply chain in the aggregate.\nWe're in decent supply on most products for the quarter currently.",
    tagUuids: ['apple'],
    uuid: 'e00df9b2-61e3-4b00-bced-cdca718eb146',
    noteType: 'quote',
    createdDate: '2023-02-04T04:55:45.680Z',
  },
  {
    title: 'Luka Quote',
    content:
      'Operating expenses of $14.3 billion were significantly below the guidance range we provided at the beginning of the quarter and grew at a slower pace than in the past as we took actions to respond to the current macro environment.\nWe returned over $25 billion to shareholders during the December quarter as our business continues to generate very strong cash flow.',
    tagUuids: [],
    uuid: 'efb50e65-3ce1-43d3-aaaa-ce55be2a2004',
    noteType: 'quote',
    createdDate: '2023-02-04T04:52:32.758Z',
  },
  {
    title: 'Apple Earnings Report',
    content:
      'Let me discuss the 3 factors that impacted our revenue performance during the quarter ... The first was foreign exchange headwinds, which had a nearly 800 basis point impact. ... The second factor ... was COVID-19-related challenges, which significantly impacted the supply of iPhone 14 Pro and iPhone 14 Pro Max. ... The third factor was a challenging macroeconomic environment\n' +
      "The installed base is now over 2 billion active devices. [It is] up over 150 million year-over-year. We also saw strong double-digit in several of the emerging markets, which is very important to us. For example, India and Brazil as just 2 examples. So very, very strong. And obviously, it bodes well for the future.'",
    tagUuids: [],
    uuid: 'e4d6dfc4-e0da-415d-a8f6-cd716c0234ad',
    noteType: 'quote',
    createdDate: '2023-02-04T01:15:00.250Z',
  },
  {
    title: '新闻：电动车，国债收益率',
    content:
      '财政部扩大SUV的定义，凯迪拉克Lyriq，野马Mach-E，特斯拉Model Y都将重新归类为SUV。只要是价格8万以下的SUV，都能享有7500美元的税收抵免。\n因担心美联储继续加息，周五国债收益率飙升。两年期国债收益率在本周早些时候触及年内低点后上涨了19个基点。美元指数周五录得去年9月底以来最大涨幅。\n服务指数US Service Gauge在1月创3年最大涨幅显示服务业迅速回暖，消费者需求复苏。\n',
    tagUuids: ['f'],
    uuid: '8b0a0f2c-9154-4a74-9421-57c5e282a60d',
    noteType: 'fact',
    createdDate: '2023-02-03T21:59:53.565Z',
  },
  {
    title: '周五美股回调终止三连涨，非农就业数据给减缓通胀带来压力',
    imageLinks: [
      'https://i.ibb.co/b2gVh5s/Screenshot-2023-02-03-at-1-29-41-PM.png',
    ],
    content:
      '纳斯达克下跌1.6%，标普500下跌1.0%，道指下跌0.4%。盘中指数试图延续昨天上涨趋势，但均告失败。\n非农就业数据出乎意料得好，创53年来新低。一方面投资者认为这是美国实现经济软着陆的信号；另一方面又担心过热的就业市场不利于降低通胀，促使美联储继续加息。',
    tagUuids: ['news'],
    uuid: '18bac6fd-984a-4499-9419-270692046921',
    noteType: 'fact',
    createdDate: '2023-02-03T21:29:17.262Z',
  },
  {
    title: '新闻：非农就业报告',
    imageLinks: [
      'https://i.ibb.co/YyHvTS8/Screenshot-2023-02-03-at-2-51-08-PM.png',
    ],
    content:
      '1月就业报告远高于所有预期：失业率降至3.4%，低于预期的3.6%，创53年新低。\n' +
      '非农就业人数增加51.7万，远高于市场预期的18.7万。\n' +
      '平均每小时工资同比增加4.4%，环比增加0.3%。平均每周工作时长增加0.3小时至34.7小时。\n',
    tagUuids: ['jobs', ' 工作'],
    uuid: 'c19724db-cace-4490-8731-276f0964bffd',
    noteType: 'fact',
    createdDate: '2023-02-03T21:07:27.246Z',
  },
  {
    title: 'January jobs report shows the unemployment rate hit 53-year low.\n',
    content:
      'nonfarm payrolls increased by 517,000, far higher than the 187,000 market estimate.\nUhe unemployment rate fell to 3.4%, lower than the estimate of 3.6%.\nLeisure and hospitality added 128,000 jobs while professional and business services lose 82,000 jobs.',
    tagUuids: ['jobs', ' us'],
    sourceLink:
      'https://www.cnbc.com/2023/02/03/jobs-report-january-2023-.html',
    uuid: '99fa19e3-a144-435c-8e84-366097a90759',
    noteType: 'fact',
    createdDate: '2023-02-03T15:59:51.444Z',
  },
  {
    title: 'Google release earnings',
    content:
      'Our Q4 consolidated revenues were $76 billion, up 1% year over year, \nGoogle ad revenue was down 3.6% YoY\nYoutube revenue was down 7.8% YoY',
    uuid: '41034db3-163b-4ff4-9656-c026edb89ab2',
    noteType: 'fact',
    createdDate: '2023-02-02T21:29:43.448Z',
  },
  {
    title: 'Amazon releases earnings',
    content:
      'Net sales increased 9% to $149.2 billion in the fourth quarter\nNorth America sales increased 13%\nOperating income decreased to $2.7 billion in the fourth quarter, compared with $3.5 billion in fourth quarter 2021.\nAWS segment sales increased 20% year-over-year to $21.4 billion.',
    uuid: '1ef36aba-5b0e-451e-8591-d23cb486a96e',
    noteType: 'fact',
    createdDate: '2023-02-02T21:12:07.638Z',
    sourceLink:
      'https://ir.aboutamazon.com/files/doc_financials/2022/q4/Q4-2022-Amazon-Earnings-Release.pdf',
  },
  {
    title: '财报：星巴克，高通，福特汽车',
    content:
      '星巴克财报不及预期。营收同比增加8.2%, 全球门店营收同比增加5%，美国门店营收同比增加10%，国内门店营收同比下滑29%。 会员人数增长15%，达到3040万。\n' +
      '高通Qualcomm财报喜忧参半。由于手机需求下降，营收同比下降11%，不及预期。\n' +
      '福特汽车盈利低于预期。营收同比增加16.7%，但福特汽车的营收盈利均不如两天前通用汽车的财报。',
    uuid: 'f9995d69-2291-483a-bd56-efd1504f2be6',
    noteType: 'fact',
    tagUuids: ['sbux'],
    createdDate: '2023-02-02T21:04:22.796Z',
  },
  {
    title: '财报：苹果，亚马逊，谷歌',
    content:
      '苹果7年来首次财报不及预期。营收同比下降5.5%，除了iPad以外，所有硬件产品收入均同比下降。服务收入同比上涨6.3%。管理层称下季度营收将继续下滑，但利润率会提升。\n' +
      '亚马逊营收超预期。收入同比增长9%，其中北美强劲增长13%。但AWS营收不及预期，仅为20%。CEO称AWS营收在未来几个季度会继续下滑。\n' +
      '谷歌财报不及预期，营收同比上涨1%。广告收入3年来首次下降3.6%，其中油管收入下降7.8%。谷歌云收入同比增长32%。管理层称未来会更注重效率。\n',
    uuid: '3e8d9f78-8aef-4925-9d14-f19cc2520f94',
    imageLinks: [
      'https://i.ibb.co/PrY8nxM/Screenshot-2023-02-02-at-3-18-22-PM.png',
    ],
    noteType: 'fact',
    createdDate: '2023-02-02T21:01:59.414Z',
  },
  {
    title: '新闻：房地产，利率，央行，Whole Foods',
    imageLinks: [
      'https://i.ibb.co/mGcQPTQ/Screenshot-2023-02-02-at-3-07-49-PM.png',
    ],
    content:
      '美国房地产抵押贷款利率自9月以来首次降至5%区间。30年期固定利率抵押贷款的平均利率为5.99%。自利率开始回落以来，房屋建筑相关股票一直在上涨。\n' +
      '英国央行周四将基准利率上调50个基点，符合市场预期。\n' +
      '因为通胀数据放缓，亚马逊的全食超市Whole Foods在最近开始要求供应商降低价格。',
    tagUuids: [''],
    uuid: 'ea1aec3b-97bd-485a-a6e6-09af27500b2f',
    createdDate: '2023-02-02T19:57:40.389Z',
    noteType: 'fact',
  },
  {
    title: '周四纳斯达克大涨3.1%，但盘后差强人意的财报可能给明天的美股降温',
    content:
      '今天在科技股的带领下，标普500上涨1.47%，达到5个月来最高点。其中Meta上涨23%，谷歌和亚马逊涨幅均超7%。\n' +
      '市场对昨天美联储的发言持乐观态度，认为美联储有能力控制通胀，实现经济软着陆。\n' +
      '三大科技股谷歌，苹果，亚马逊均在盘后财报后下跌。',
    imageLinks: [
      'https://pbs.twimg.com/media/Fn_nCCNaMAAIbx6?format=jpg&name=4096x4096',
    ],
    tagUuids: [''],
    uuid: 'ea1aec3b-97bd-485a-a6e6-09af27500b2f',
    createdDate: '2023-02-02T19:57:40.389Z',
    noteType: 'fact',
  },
  {
    title: '新闻：蔚来，理想，小鹏，能源，Costco等',
    imageLinks: [
      'https://ir.lixiang.com/system/files-encrypted/nasdaq_kms/inline-images/New%20-%20First%20Picture%20%281%29_0.jpg',
    ],
    content:
      '电车三剑客发布1月汽车交付量：蔚来交付8506辆，同比下降12%；理想交付15141辆，同比增加23%；小鹏交付5218辆，同比下降60%； \n' +
      '原油价格持续下跌至三周低点，能源板块今天成唯一下跌板块。 \n' +
      'Costco宣布1月份的销售额增长6.9%至168亿美元，但电商收入同比下降15.4%。\n' +
      '由于需求下降，联邦快递FedEx计划裁去10%管理人员。\n',
    uuid: '68e56d4f-2668-4bad-8963-9959a3fb9929',
    tagUuids: ['nio', 'xpev', 'li', 'costco', 'fedex', 'oil'],
    createdDate: '2023-02-01T21:57:18.140Z',
    noteType: 'fact',
  },
  {
    title: '财报：Meta， Peloton， elf Beauty',
    content:
      'Meta Platforms财报超预期并公布了400亿美元的股票回购计划，盘后一度大涨18%。第四季度营收321.7亿美元，同比下降4.5%。日活跃用户同比增加5%。CEO强调2023将着重提升公司效率，首要发展AI，短视频而不是Metaverse。\n' +
      'Peloton营收下降30%，但订阅收入增加22%。订阅收入连续三季度高于硬件收入。股价今天上涨26%。\n' +
      '美妆公司e.l.f. Beauty财报每股收益翻倍，营收同比增加49%，同时上调指引。盘后股价上涨11%。',
    tagUuids: ['meta', 'peloton', 'elf'],
    uuid: 'c682ac1a-ac7d-4ffc-8db4-2c699fafbabc',
    createdDate: '2023-02-01T21:51:19.217Z',
    noteType: 'fact',
  },
  {
    title: '周三美股由跌转涨，美联储加息25个基点并表示通缩已经开始',
    imageLinks: [
      'https://pbs.twimg.com/media/Fn6YeJOaEAEzlpr?format=jpg&name=4096x4096',
    ],
    content:
      '标普500收盘上涨 1.05%，日内扭转了近1%的跌幅。纳斯达克上涨2%，道指上涨0.02%。\n' +
      '美联储主席鲍威尔表示财政政策取得成效：“我们可以第一次说通货紧缩已经开始“。在多次被问到关于加息计划的问题时，鲍威尔没给出明确答复，但市场普遍认为其态度偏鸽派。',
    tagUuids: ['news', 'fed'],
    uuid: '0f19094a-4bfc-49c9-bdeb-16c3f15bc749',
    createdDate: '2023-02-01T21:37:26.415Z',
    noteType: 'fact',
  },
  {
    title: '鲍威尔召开美联储新闻发布会',
    content:
      '"我们现在可以第一次说通缩过程已经开始"\n”现在说我们战胜通胀还为时尚早“\n”我们看到工资在下降“\n“委员会目前不考虑暂时暂停加息”\n',
    tagUuids: ['fed'],
    uuid: '3118cf65-2097-406a-8041-c72d87d318b9',
    createdDate: '2023-02-01T20:02:28.144Z',
    noteType: 'fact',
  },
  {
    title: '盘后财报：AMD，SNAP',
    content:
      'AMD营收盈利均超预期，营收为56亿美元，同比增加16%。其中数据中心收入同比增长42%，游戏业务同比收入下降7%，个人电脑芯片销售同比下降51%，嵌入式系统收入同比增长1868%（得益于Xilinx收购）。AMD预计下季度营收同比下降10%。盘后股价+1.32%。' +
      '\nSnap营收同比持平，但不及预期。每日活跃用户同比增长17%至3.75亿，但下季度营收预计将继续下滑2%-10%。盘后股价一度下跌14%。',
    tagUuids: ['amd'],
    uuid: 'c57f93ca-9bc7-443b-a777-7002d0086ff2',
    createdDate: '2023-01-31T21:43:05.988Z',
    noteType: 'fact',
  },
  {
    title: '盘前财报：通用汽车，UPS，麦当劳',
    content:
      '通用汽车(GM)财报超预期。营收431亿美元，同比增加28%，Non-GAAP每股盈利2.12美元。CFO表示需求依旧强劲。股价今天上涨8.35%。GM还宣布投资6.5亿美元给锂矿公司Lithium Americas Corp。股价今天+8.35%' +
      '\nUPS盈利超预期，但营收同比下降2.7%至270亿美元，不及预期。国内收入同比增长3%，国际收入同比下降8%。2023营收前瞻继续低于预期。股价今天+4.67%' +
      '\n麦当劳营收盈利均超预期，但营收同比下降1.2%。',
    tagUuids: ['gm'],
    uuid: 'a8155e92-eb4d-4867-9875-ef162c1389de',
    createdDate: '2023-01-31T21:35:52.396Z',
    noteType: 'fact',
  },

  {
    title: '周二股市上涨，纳斯达克创下2001年以来的最佳1月表现',
    imageLinks: [
      'https://pbs.twimg.com/media/Fn1Rcf2akAAH9mD?format=jpg&name=4096x4096',
    ],
    content:
      '道指上涨1.09%，标普500上涨1.46%，纳斯达克上涨 1.67%。除了纳斯达克，标普500也创下4年来最佳1月表现。\nCathy Wood的方舟基金(ARKK)今天上涨 3.7%，1月份累涨27.8%，创下自成立以来最好单月表现。' +
      '\nPayPal CEO称宏观经济环境充满挑战，计划裁员2000人，约占员工总数的7%。',
    tagUuids: ['news'],
    uuid: '80a8e8b5-41b4-47cd-bcc6-98f48393e37e',
    createdDate: '2023-01-31T21:20:25.608Z',
    noteType: 'fact',
  },
  {
    title: '观点：苹果，Salesforce',
    content:
      '天风国际分析师郭明錤预计苹果将在2024年推出折叠式iPad。行业分析公司CCS Insight也表示目前苹果应该会先避开制造折叠iPhone，并先推出更有意义的可折叠iPad。\n多数分析师认为由于个人电脑和智能手机市场不景气，本周的苹果财报将出现营收下滑。\n摩根士丹利分析师Keith Weiss看涨Salesforce，认为在未来几年Salesforce会更注重盈利并以20%速度增长每股收益，风险收益比不错。\n',
    tagUuids: ['aapl', 'crm', ''],
    uuid: 'd3128088-bab6-4de4-add3-1d7e0b008b74',
    createdDate: '2023-01-30T22:38:30.535Z',
    noteType: 'opinion',
  },
  {
    title: '新闻：福特, SoFi, 百度',
    content:
      '在特斯拉一月宣布幅降价后，福特今天也宣布下调了其电动野马Mach-E的价格，平均降价4500美元。\n金融科技公司SoFi财报及2023指引均好于预期，用户数新增48万，同比增加51%。SoFi今天上涨12.46%。\n据路透社报道，百度计划推出类似于OpenAI的 ChatGPT人工智能聊天机器人服务，并整合进其搜索引擎。\n',
    tagUuids: ['f', 'bidu'],
    uuid: '3dfd17e0-6839-4a3b-a151-c15a979d2b20',
    createdDate: '2023-01-30T22:14:23.610Z',
    noteType: 'fact',
  },
  {
    title: '周一美股“获利回吐”，终止了上周的涨势',
    imageLinks: [
      'https://i.ibb.co/KXHqzqW/Screenshot-2023-01-30-at-3-01-07-PM.png',
    ],
    content:
      '道指下跌0.77%，标普500下跌1.3%，纳斯达克下跌1.96%。美联储在本周三预计宣布加息0.25%。\nCFRA加拿大金融研究协会首席策略师Sam Stovall认为1月份的股市上涨可能是个好兆头。如果市场在1月上涨，那么它在接下去11个月中有超过85%的时间继续上涨，平均涨幅可达到11.5%。',
    tagUuids: ['news'],
    uuid: '0c7d2673-4e11-4c45-b42e-d230625215ef',
    createdDate: '2023-01-30T21:43:32.082Z',
    noteType: 'fact',
  },
  {
    imageLinks: [
      'https://i.ibb.co/CQ56yqh/Screenshot-2023-01-29-at-4-48-55-PM.png',
    ],
    title: '明天美股将迎来2023年到目前为止最繁忙一周',
    content:
      '苹果，亚马逊，谷歌，Meta等科技巨头将发布财报，全方位展示经济现状和各领域发展趋势，包括消费电子产品，供应链，电商，人工智能，广告服务，虚拟现实等。\n美联储将公布新的联邦利率并召开新闻发布会，看看接下去加息步伐是否有可能减缓，停止甚至反转。\n新的1月劳动市场就业报告也将在周五发布。\n',
    tagUuids: ['aapl', 'amzn', 'goog'],
    uuid: 'f7d7735e-e7f3-41e2-8fd2-7aff166fe9f6',
    createdDate: '2023-01-30T02:07:36.723Z',
    noteType: 'fact',
  },
  {
    title: '周四关注',
    content:
      '盘前财报：索尼(SONY)，Merck(MRK)，Eli Lilly(LLY)\n盘后财报：苹果(AAPL)，亚马逊(AMZN)，谷歌(GOOG)，星巴克(SBUX)，高通Qualcomm(QCOM)，福特(F)',
    tagUuids: ['AAPL', 'AMZN', 'GOOG', 'SBUX'],
    uuid: '9730ee0f-292f-4e4f-b0dc-9c170f3d8687',
    createdDate: '2023-01-30T01:52:08.689Z',
    noteType: 'fact',
  },
  {
    title: '周三关注',
    content:
      '纽约时间下午2:00，联邦公开市场委员(FOMC)将发表利率声明。纽约时间下午2:30，美联储主席鲍威尔将召开新闻发布会。\n电车三剑客蔚来(NIO)，理想(LI)和小鹏(XPEV)将发布月度交付报告。\n盘前财报：Peloton(PTON)，T-Mobile(TMUS)\n盘后财报：Meta(META)，McKesson(MCK)',
    tagUuids: ['NIO', 'LI', 'XPEV', 'Meta', 'PTON'],
    uuid: '973b537f-bbe9-45de-bdf0-2839145dfac3',
    createdDate: '2023-01-30T01:36:02.670Z',
    noteType: 'fact',
  },
  {
    title: '周二关注',
    content:
      '盘前财报：ExxonMobil(XOM)，UPS(UPS)，通用汽车(GM)，辉瑞Pfizer(PFE)，Caterpillar(CAT)，麦当劳(MCD)\n盘后财报：AMD(AMD)，Snap(SNAP)，Amgen(AMGN)，Electronic Arts(EA)\n\n',
    tagUuids: ['AMD', 'PFE', 'SNAP', 'MCD', 'EA'],
    uuid: '5969ceed-2f30-45eb-9acb-00e1e48177ce',
    createdDate: '2023-01-30T00:58:30.458Z',
    noteType: 'fact',
  },

  {
    imageLinks: [
      'https://i.ibb.co/wLx48HR/Screenshot-2023-01-27-at-1-14-16-PM.png',
    ],
    title:
      '核心PCE（Personal Consumption Expenditures）同比增长4.4%，为2021年10月以来的最小年度增幅。\n',
    content:
      '根据商务部周五数据，核心PCE（不包括食品和能源的个人消费支出）同比增长 4.4%，低于 11 月份的 4.7%。环比增长0.3%，也符合预期。消费者支出下降了0.2%，连续第二个月下降。核心PCE是美联储的首选通胀指标之一。\n',
    tagUuids: ['inflation'],
    sourceLink:
      'https://www.investors.com/news/economy/fed-key-inflation-rate-may-trip-up-the-sp-500/',
    uuid: '46bcce70-688b-4819-bf43-cc09a982cc10',
    createdDate: '2023-01-27T21:18:48.565Z',
    noteType: 'fact',
  },
  {
    title:
      '美国第四季度GDP增长2.9%；申请失业救济人数降至22 年4月以来的最低水平\n',
    imageLinks: [
      'https://i.ibb.co/6yjkJLx/Screenshot-2023-01-26-at-1-45-36-PM.png',
    ],
    content:
      '商务部周四报告称，第四季度GDP增长率为2.9%，高于预期的2.7%，但略低于第三季度3.2%的增速。\n占GDP约68%的消费支出同期增长2.1%。私企库存，政府支出和非住宅固定投资的增加也帮助提升了GDP数据。\n住宅固定投资暴跌26.7%，反映了住房市场的急剧下滑，拖累了增长数字。房价下跌使总体 GDP数据减少了约1.3%',
    tagUuids: ['gdp'],
    uuid: 'b6e30780-323d-481d-a323-07aaf38b44b9',
    createdDate: '2023-01-26T21:49:59.186Z',
    noteType: 'fact',
  },
  {
    title: '酩悦·轩尼诗－路易·威登集团（LVMH）对中国充满信心',
    content:
      'CEO表示国内消费者强劲回归，LVMH门店很多都爆满。\nLVMH财报显示销售额和利润连续第二年创历史新高。\n2022年收入增长23%至79.2欧元，利润增长17%至140亿欧元。\nLVMH同时警告称，虽然1月份的反弹势头强劲，但还没有回到2019年的水平，公司还有很长的路要走。\n\n\n',
    tagUuids: ['lvmh'],
    uuid: '0e269b31-88fe-493a-85b3-2ea4c782b821',
    createdDate: '2023-01-26T21:44:16.138Z',
    noteType: 'fact',
  },
  {
    title: '周四美股三大指数集体收涨；特斯拉上涨近11%',
    imageLinks: [
      'https://i.ibb.co/2WY3J72/Screenshot-2023-01-26-at-2-12-05-PM.png',
    ],
    content:
      '道指上涨0.61%，标普500上涨1.10%，纳斯达克上涨2.7%，有望创下自去年7月以来的最佳月表现。美国GDP在第四季度增长2.9%，使市场认为美国不太会经历更糟的熊市。\n马斯克表示特斯拉在经历有史以来最强劲的订单量，订单几乎是生产率的两倍”\n\n',
    tagUuids: ['news'],
    uuid: '61fdf0e0-4497-4c55-9ca7-b8a81dc46ce5',
    createdDate: '2023-01-26T21:33:40.426Z',
    noteType: 'fact',
  },
  {
    title: '英特尔Intel，Visa，西南航空Southwest Airline发布财报。',
    content:
      'Visa每股收益为2.18美元，高出预期0.17美元。第一季度营收为79亿美元，同比增长11.9%。按固定美元汇率计算，跨境总交易量在本季度增长了22%。\n英特尔财报指引严重低于预期。客户端计算收入同比下降36%。数据中心和人工智能收入下降33%。\n西南航空第四季度每股亏损0.38 美元，大大高于华尔街预期的每股亏损0.11美元。12月的航班延误和取消导致了8亿美元损失。',
    tagUuids: ['intc'],
    uuid: 'd5ea6e72-4a49-4d66-9406-bb66fd21088b',
    createdDate: '2023-01-26T22:00:56.143Z',
    noteType: 'fact',
  },
  {
    title: '周三美股三大指数低开高走，“无视”微软疲软财报',
    imageLinks: [
      'https://i.ibb.co/grwYMc0/Screenshot-2023-01-25-at-5-23-29-PM.png',
    ],
    content:
      '纳斯达克收盘下跌0.2%，标普500下跌0.02%，道指上涨0.03%，市场等待今天盘后的特斯拉财报。\nShopify宣布上涨产品价格33%；这是公司在十多年来首次上涨价格。Shopify今天股价上涨10.87% 。\n马斯克在财报会议上强调特斯拉需求远远大于目前产能，财报会议后特斯拉股价上涨5%。',
    tagUuids: ['news'],
    uuid: 'b741f75c-c813-4f86-b1b7-d57213119ab6',
    createdDate: '2023-01-25T23:34:42.174Z',
    noteType: 'fact',
  },
  {
    title: 'AT&T财报显示订阅人数增长超预期，',

    content:
      'AT&T所有部门用户总数增加了2.17亿，超过2.15亿预期。\n每股收益0.61美元，超出预期0.04美元。\n新增电话订阅人数超过对手Verizon，但落后于T-Mobile。\nCEO对整个通信行业表示乐观。AT&T今天大涨6%至7月以来的最高点。',
    tagUuids: ['t'],
    uuid: '83f1e435-ef31-4f85-ab7c-b49e42ef29ec',
    createdDate: '2023-01-25T22:33:45.907Z',
    noteType: 'fact',
  },
  {
    title: '阿斯麦ASML第四季度营收盈利均超预期',
    content:
      '第四季度GAAP每股收益4.60欧元，高出预测0.27欧元。\n营收64亿欧元，同比增加28.5%。\nASML预计半导体行业将在2023年下半年有所改善，全年营收增长25%以上，与预期持平，毛利率将好于2022年。\nASML在制造销售极紫外光刻机领域仍旧处于垄断地位。',
    tagUuids: ['asml'],
    uuid: 'bba6d3b4-d425-4149-b470-1f4f930dc2b2',
    createdDate: '2023-01-25T22:03:09.862Z',
    noteType: 'fact',
  },
  {
    title: '波音第四季度财报营收盈利均不及预期。',

    content:
      '第四季度Non-GAAP每股损失1.75美元，远低于预期。\n营收接近200亿美元，同比增长35.1%，商用飞机部门销售额为92亿美元，同比增长94%。\n尽管飞机的销售和交付出现反弹，高劳动力成本和供应链问题导致亏损。\n预计今年将产生30亿至50亿美元自由现金流。\n',
    tagUuids: ['ba'],
    uuid: '686b9b93-e64b-40be-ab63-b5c9d57767b9',
    createdDate: '2023-01-25T21:50:16.356Z',
    noteType: 'fact',
  },
  {
    title: '特斯拉第四季度财报营收盈利均超过预期。',
    imageLinks: [
      'https://i.ibb.co/HG8DxLk/Screenshot-2023-01-25-at-4-02-27-PM.png',
      'https://i.ibb.co/mFH4Sm1/Screenshot-2023-01-25-at-4-28-49-PM.png',
    ],
    content:
      '第四季度汽车收入为213亿美元，同比增长33%。\n2022全年交付量约为131万辆。\n2023预计交付180万辆，同比增长约37%。\n汽车毛利率为 25.9%，为过去五个季度以来的最低水平。\n管理层表示未来多年将保持50%复合年增长率(CAGR)目标，尽管不一定是每年一次。\n1月份降价以来，订单数量几乎是生产能力的两倍； 尽管汽车市场整体疲软，特斯拉需求仍将良好。\n重申Cybertruck将于今年开始生产。\n将在2023年3月1日投资者日公布下一代汽车平台细节。',
    tagUuids: ['tsla'],
    uuid: 'e3b7bf5d-3702-4fa1-802f-a5edceb34757',
    createdDate: '2023-01-25T21:21:04.831Z',
    noteType: 'fact',
  },
  {
    title: '微软财报营收下滑超预期，周三盘前三大指数期货均下跌。',
    content:
      '微软在财报公布后由于盈利超预期最初股价上涨，但财报会议上提供的未来指引不及预期，营收增速继续放缓，股价目前下跌2.6%。\n道指期货-0.7%。 纳斯达克期货-1.2%，标普500期货-0.8%。\n今天盘前波音，AT&T，ASML等将发布财报，盘后Tesla，ServiceNow， IBM等将发布财报。\n',
    tagUuids: ['msft'],
    uuid: '27e4e53f-39c7-4fbc-82e5-25bf98096050',
    createdDate: '2023-01-25T11:39:26.529Z',
    noteType: 'fact',
  },
  {
    title: '德州仪器Texas Instruments财报营收盈利超预期',
    content:
      '第四季度GAAP美股收益2.13美元，超过预期0.15美元。\n营收为46.7亿美元，同比下降3.3%。\n”公司今年的87亿美元运营现金流和59亿美元自由现金流（占营收30%）体现了公司商业模式的优势“。\n公司下调了下季度营收盈利指引。',
    tagUuids: ['txn'],
    uuid: 'f074591a-f341-42d2-9813-4ad760e89ae6',
    createdDate: '2023-01-24T23:29:06.774Z',
    noteType: 'fact',
  },
  {
    title: '强生第四季度营收不及预期,但盈利超预期',
    content:
      '营收237亿美元，同比下降4.4％。\n公司表示，与上一年相比，不利外汇和新冠疫苗销售减少是营收下降的主要原因。 不包括新冠疫苗的营收同比增加4.6％。\n国际市场上，新冠疫苗销量下跌-57.4％。',
    tagUuids: ['jnj'],
    uuid: '923f9bb1-5d23-48b3-b640-03b55f97a643',
    createdDate: '2023-01-24T23:14:28.092Z',
    noteType: 'fact',
  },
  {
    title: '洛克希德马丁营收盈利超预期，股价周二上涨1.8%',
    content:
      '营收为190亿美元，同比增长7.1%。\nNon-GAAP每股收益7.79美元，比预期高0.42美元。\n2023前瞻符合预期。\n洛克希德马丁和另一家军工企业雷神指出，尽管他们收到创纪录武器订单，但由于供应链瓶颈，他们无法将产量提升。',
    tagUuids: ['lmt'],
    uuid: 'd2aeda6d-bfff-4498-828d-a20492e1f44b',
    createdDate: '2023-01-24T22:37:42.840Z',
    noteType: 'fact',
  },
  {
    title:
      '直觉手术公司Intuitive Surgical在第四季度盈利未达预期，盘后股价下跌近10%',
    content:
      '营收为16.6亿美元，同比增长7.1%，符合预期。\n第四季度净收入受运营费用影响下降12%。\n运营费用同比增长21%，其中研发费用增长了33%，达到 2.441亿美元。\n公司的达芬奇手术系统安装数增至7544套，同比增长12%。',
    tagUuids: ['isrg'],
    sourceLink:
      'https://seekingalpha.com/news/3927398-intuitive-surgical-non-gaap-eps-of-1_23-misses-0_02-revenue-of-1_66b-in-line',
    uuid: 'b4128203-1869-4bfa-8d04-e973be42deeb',
    createdDate: '2023-01-24T22:24:03.392Z',
    noteType: 'fact',
  },
  {
    title: '周二美股三大指数涨跌不一，公司财报表现参差不齐',
    imageLinks: [
      'https://i.ibb.co/g3y0VHn/Screenshot-2023-01-24-at-3-35-37-PM.png',
    ],
    content:
      '纳斯达克收跌0.3%。标普500收跌-0.1%，没有一个板块浮动超过1%。道指+0.3%。\n纽约证券交易所在开盘前出现系统问题导致众多股票交易暂停，包括3M，摩根士丹利，麦当劳。纽交所将在周二收盘后对一些异常价格进行清整。\n',
    tagUuids: ['news'],
    uuid: '4bfeade2-a00b-4850-9deb-0e2c6be8abf4',
    createdDate: '2023-01-24T22:16:52.246Z',
    noteType: 'fact',
  },
  {
    title: '微软财报盈利超预期，但营收增速持续下滑',
    content:
      '营收增长2%，是自2016年以来最慢增速。\n智能云部门营收增长18%，其中Azure云服务增长31%。\n生产力和商业流程部门（Microsoft 365，LinkedIn，Dynamics）实现了 170 亿美元的收入，同比增长 7%。\nWindows OEM部门营收下跌39%，显示出PC市场在疫情后快速萎缩，但CEO称Windows的用户使用率在提高。\n管理层同时表示12月业务增长不及预期，下季度营收增长将继续放缓。',
    tagUuids: ['msft'],
    uuid: 'd5777c60-7ccf-45ff-94c2-d209b4314648',
    createdDate: '2023-01-24T21:24:29.829Z',
    noteType: 'fact',
  },
  {
    title:
      '明天多家大型公司发布财报，将涵盖不同行业，给投资人提供更多经济信息。',
    imageLinks: [
      'https://i.ibb.co/D57YHw5/Screenshot-2023-01-23-at-2-31-51-PM.png',
    ],
    content:
      '微软 Microsoft 科技软件 \n 直觉手术公司 Intuitive Surgical 医疗器材 \n强生 Johnson & Johnson 药品制造\n 洛克希德马丁 Lockheed Martin 军工\n德州仪器 Texas Instrument 半导体\n第一资本 Capital One 银行\n\n',
    tagUuids: ['news'],
    uuid: 'ea4c6113-2559-4f5e-bfc5-75908c4d3efa',
    createdDate: '2023-01-23T22:38:22.854Z',
    noteType: 'fact',
  },
  {
    title: '微软宣布对OpenAI进行新的一轮价值数十亿美元的投资。',
    content:
      '此次投资是微软在2019年和2021年两次投资之后的第三次投资合作。微软方面拒绝提供具体金额，但有消息称投资额高达100亿美元。\nOpenAI开发了近期火爆的ChatGPT人工智能对话软件。微软表示，新的合作伙伴关系将加速人工智能发展及商业化。\n微软的Azure云服务将继续作为OpenAI的独家供应商。',
    tagUuids: ['msft'],
    sourceLink:
      'https://www.cnbc.com/2023/01/23/microsoft-announces-multibillion-dollar-investment-in-chatgpt-maker-openai.html',
    uuid: '08a27d63-dd98-407d-b9e2-9f20c0bcac6f',
    createdDate: '2023-01-23T22:18:58.793Z',
    noteType: 'fact',
  },
  {
    title: '音乐流媒体公司Spotify周一宣布将裁员6%,约600人',
    content:
      'Spotify周一向员工发送了一份内部备忘录，宣布裁员。CEO承认他对一些投资过于乐观，并表示对这次裁员负责。\nCEO: “过去几年我们在提高速度方面取得了很大进步，但我们并没有专注于提高效率...在充满挑战的经济环境中，效率变得更加重要。因此，为了提高效率，控制成本，加快决策速度，我们得进行重组”。',
    tagUuids: ['spot'],
    sourceLink:
      'https://www.cnbc.com/2023/01/23/spotify-to-cut-6percent-of-its-workforce-as-tech-layoffs-continue.html',
    uuid: '7b410542-adc6-4d9b-877c-e1f3a29f710e',
    createdDate: '2023-01-23T22:09:10.438Z',
    noteType: 'fact',
  },
  {
    title: '周一股市大幅走高，投资者期待本周财报',
    imageLinks: [
      'https://i.ibb.co/x6tK6YD/Screenshot-2023-01-23-at-1-16-10-PM.png',
    ],
    content:
      '纳斯达克上涨2.01%，标普500上涨1.19%，站上4000点整数关。道指上涨 0.76%。在所有已发布财报公司里，63%的公司财报击败预期。\n电动车板块在Tesla财报前大涨，Rivian +11.52%，Lucid +12.79%，法拉第未来+50.64%，蔚来NIO +8.94%，理想+6.84%，小鹏+7.45%. \n另一个大涨的板块是半导体: AMD+9.22%（被花旗上调评级），Nvidia+7.59%.。',
    tagUuids: ['news'],
    sourceLink:
      'https://www.cnbc.com/2023/01/22/stock-market-futures-open-to-close-news.html',
    uuid: '6263c2fe-84c4-40b6-9317-53ebac991afd',
    createdDate: '2023-01-23T21:33:21.207Z',
    noteType: 'fact',
  },
  {
    title: '下周微软，特斯拉， Visa等将发布财报',
    imageLinks: [
      'https://i.ibb.co/TvJ4q4D/Screenshot-2023-01-20-at-2-09-09-PM.png',
    ],
    content:
      '周二财报：微软，Johnson&Johnson，洛克希德马丁，德州仪器\n周三财报：特斯拉，波音，IBM\n周四财报：美国航空，英特尔，Visa，Mastercard',
    tagUuids: ['calendar event'],
    uuid: '0c5d4b4e-df9a-4892-96cd-aefca53e8d7b',
    createdDate: '2023-01-20T22:10:04.195Z',
    noteType: 'fact',
  },
  {
    title: '🏮新年到，周五美股强势上扬',
    imageLinks: [
      'https://i.ibb.co/c8RbWqQ/Screenshot-2023-01-20-at-2-12-37-PM.png',
    ],
    content:
      '道指数上涨1%。标普500上涨1.89%，标普11个板块全部上涨。纳指在奈飞Netflix和谷歌Alphabet的帮助下上涨 2.66%。\n纳指本周表现出色，上涨0.55%，连续第三周上涨。 道指本周下跌2.70%，标普500本周下跌0.66%。\n奈飞在发布超预期订阅数后上涨8.5%。Alphabet股价今天上涨超过5%。',
    tagUuids: ['news'],
    uuid: 'ff8017a9-10ea-41b7-8b6c-ee2fecf65aa2',
    createdDate: '2023-01-20T21:50:30.974Z',
    noteType: 'fact',
  },
  {
    title: '美联储理事Waller支持在下次FOMC会议上加息25个基点，符合市场预期。',
    content:
      'Waller认为根据目前已有数据，通胀趋于稳定，但他目前会继续支持紧缩货币政策。\n最近几位美联储发言人表态都相对鸽派，Wallers是明确表示支持加息25个基点的最高级别FOMC成员。\n但他也表示降低通胀将是一个缓慢艰难的过程，因此美联储必须在长时间内保持较高利率，而不是在年底前开始降息。\n',
    tagUuids: ['inflation'],
    imageLinks: [
      'https://i.ibb.co/z5Y6d5C/Screenshot-2023-01-20-at-2-40-55-PM.png',
    ],
    uuid: 'b298767c-3154-4c33-9906-341382196754',
    createdDate: '2023-01-20T21:41:30.388Z',
    noteType: 'fact',
  },
  {
    title: '谷歌宣布将立即开始裁员12000人',
    content:
      'CEO Sundar Pichai承认过去两年招聘过多。这次裁员决定是在对已有产品和岗位进行调研后的结果，以保证公司能继续专注于优先任务和目标。\n裁员将跨越发生在公司的不同领域、职能、层级和区域。\n另一家知名电商Wayfair也宣布裁员1750人。',
    tagUuids: ['googl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/20/google-to-lay-off-12000-people-memo-from-ceo-sundar-pichai-says.html',
    uuid: 'aecb7977-c4e3-42b7-8bef-f8716dc76c00',
    createdDate: '2023-01-20T21:18:04.955Z',
    noteType: 'fact',
  },
  {
    title: 'Nordstrom公布悲观假期销售数据并下调盈利预期。',
    content:
      '由于大幅降价，截至到2022年底的九周假期季，净销售额相较于去年同比下降3.5%。\nCEO: “假期促销力度很大，但销售额仍然低于疫情前水平...很明显，鉴于宏观环境，消费者变得更加挑剔。”\nNordstrom品牌净销售下降1.7%，Nordstrom Rack净销售下降7.6%。\nNordstrom盘后下跌近7%。',
    tagUuids: ['jwn'],
    uuid: '07795edc-d0c6-4bf3-9dcb-d318cf517213',
    createdDate: '2023-01-19T21:47:21.200Z',
    noteType: 'fact',
  },
  {
    title:
      "Netflix's profit fell short of expectations, but it added 7.66 million new subscribers.",
    content:
      'Revenue was US$7.85 billion, up 1.9% YoY, in line with expectations. Earnings per share were 12 cents, missing estimates of 45 cents.\nAdded 7.66 million new subscribers, much higher than the predicted 4.57 million subscribers.\nco-CEO and co-founder Reed Hastings stepped back as Executive Chairman.\nOutlook for the next quarter: revenue +3.9% YoY, operating margin was 19.9%, and moderate new user growth.',
    tagUuids: ['nflx'],
    uuid: 'c9b19e82-20df-464d-a52a-3622b799cc19',
    createdDate: '2023-01-19T21:29:04.105Z',
    noteType: 'fact',
  },
  {
    title: '奈飞Netflix盈利不及预期，但新增订阅用户766万。',
    content:
      '营收78.5亿美元，同比增长1.9%，符合预期。每股收益12美分，低于45美分预期。\n新增766万订阅用户，远高于预测的457万订阅用户。\nCEO和创始人Reed Hastings退居为执行董事长。\n下季度前瞻：营收同比增长3.9%，运营利润率19.9%，新用户增速缓和。',
    tagUuids: ['nflx'],
    sourceLink:
      'https://www.cnbc.com/2023/01/19/netflix-nflx-earnings-q4-2022.html',
    uuid: '2faa958b-c446-4b87-80ce-23b6a2cf3f0e',
    createdDate: '2023-01-19T21:23:15.744Z',
    noteType: 'fact',
  },
  {
    title: '宝洁财报营收超过预期，但销量下降令人担忧。',
    content:
      '营收208亿美元，同比下降0.7%，但超过预期。\n每股收益$1.59(Non-GAAP)，符合预期。\n有机销售额(organic sales)增长5%，得益于本季度10%的价格上涨。但是销量却同比下跌6%，远高于下跌2.6%的预期。\n',
    tagUuids: ['PG'],
    sourceLink:
      'https://seekingalpha.com/news/3925796-procter-gamble-non-gaap-eps-of-159-in-line-revenue-of-208b-beats-by-50m-raises-fy2023-sales-outlook',
    uuid: 'f215ebb4-31f5-429c-8654-49fac2f51d06',
    createdDate: '2023-01-19T21:04:48.679Z',
    noteType: 'fact',
  },
  {
    title:
      '周四三大指数收低，标普500及道琼斯连续第三个交易日下跌；奈飞宝洁发布财报；',
    content:
      '纳斯达克下跌-1.0%，标普500下跌-0.8%，道指下跌-0.8%。\n标普11个板块中有八个下跌，工业板块和非必需消费品板块领跌。能源、通讯服务和医疗保健板块上涨。',
    tagUuids: ['news'],
    imageLinks: [
      'https://i.ibb.co/vXKNyMP/Screenshot-2023-01-19-at-2-09-27-PM.png',
    ],
    uuid: 'a0c34c21-d311-493c-b7ce-24031d3144f9',
    createdDate: '2023-01-19T20:52:09.808Z',
    noteType: 'fact',
  },
  {
    title: '亚马逊将在2月砍掉其有着10年历史的AmazonSmile慈善捐赠项目',
    content:
      'AmazonSmile会捐出接近用户账单总值的0.5%给用户选择的慈善机构。\n亚马逊表示这个项目的作用太过分散，将在未来集中投资更有意义的项目。但投资者认为这是亚马逊“不惜一切“减少支出的一个佐证。\n',
    tagUuids: ['amzn'],
    sourceLink:
      'https://www.cnbc.com/2023/01/18/amazon-discontinues-amazonsmile-charity-donation-program-amid-cost-cuts.html',
    uuid: '4c6134d4-eaa1-4f86-b56d-eb2c89830dff',
    createdDate: '2023-01-19T20:17:35.513Z',
    noteType: 'fact',
  },
  {
    title: '周三美股三大指数高开低走，收盘全部下跌超1%，纳斯达克终止七天连涨。',
    content:
      '纳斯达克收盘-1.2%，标普500收盘-1.6%，道指收盘-1.8%。标普11个板块全部下跌。\n生产商价格指数PPI下跌0.5%，远高于预期的0.1%，显示通胀继续下降。\n和CPI类似，PPI下降的主要原因是能源价格下降。\n由于通胀数据下降，投资者认为美联储将在两周后会议上仅加息25个基点。\n零售价格下跌1.1%，高于预期的1%。\n12月份的批发通胀率放缓至 6.2%，低于预测的 6.8%。上个月这个数据为 7.3%。',
    tagUuids: ['news'],
    imageLinks: [
      'https://i.ibb.co/ZxpmMpg/Screenshot-2023-01-18-at-3-05-39-PM.png',
    ],
    uuid: '6ea0a2bd-c01f-4030-b08f-ecad43e5df34',
    createdDate: '2023-01-18T22:30:20.134Z',
    noteType: 'fact',
  },
  {
    title: 'Discover Financial财报营收盈利均超预期。',
    content:
      '第四季度每股收益为3.77美元，高出0.15美元预期。\n营收37.3亿美元，同比上涨26.9%\nDiscover也提高了信贷损失准备金，显示经济可能继续走弱。\n贷款总额同比增长 20%，环比增长 7%。\n信用卡贷款为同比增长 21%。',
    tagUuids: ['dfs'],
    uuid: '4dc980cf-cd73-4f04-9e66-2845e2522718',
    createdDate: '2023-01-18T22:05:29.970Z',
    noteType: 'fact',
  },
  {
    title: '美国假日季零售数据低于行业预期。',
    content:
      '11月和12月的销售额同比增长 5.3% 至 9363 亿美元，低于预期的6%-8%。但这个数据包含通胀所带来的影响。\n线上和非实体店销售额同比增幅最大，达到9.5%。\n电子和电器实体店的销售额同比下降5.7%。',
    tagUuids: ['retail'],
    uuid: 'bfbd4c56-d3bd-42d1-b78d-f804404cb571',
    createdDate: '2023-01-18T21:54:42.018Z',
    noteType: 'fact',
  },
  {
    title: '微软和亚马逊周三开始新一轮裁员计划',
    content:
      '微软将裁10000名员工，占总员工数4.5%。\nCEO表示:“微软将为此花费12亿美元包括高于市场的遣散费，优化公司硬件和办公室租赁的费用”。\nCEO:“我们现在看到客户在减少优化他们的支出，以更少的钱做更多的事情。”\n亚马逊也在周三向员工宣布开始裁员18000人。这是亚马逊28年历史上最大的一次裁员。',
    tagUuids: ['msft', 'amzn'],
    sourceLink:
      'https://www.cnbc.com/2023/01/18/amazon-set-to-begin-new-round-of-layoffs-affecting-over-18000-people.html',
    uuid: 'e7692cfa-c48d-4ab5-bae0-4f4d1acad08e',
    createdDate: '2023-01-18T21:42:41.811Z',
    noteType: 'fact',
  },
  {
    title:
      '三大指数涨跌不一，纳斯达克连续第七天上涨。市场对高盛和摩根史丹利财报反应截然相反。',
    content:
      '纳斯达克收盘上涨0.1%，特斯拉大涨7.43%。\n标普500下跌0.2%，11个板块中有6个板块收低。\n道指受高盛(GS)和旅行家集团(TRV)影响，下跌1.1%。\n高盛下跌6.44%, 摩根士丹利上涨5.91%。',
    tagUuids: ['news'],
    uuid: '08171464-fc95-4e6c-9cde-7b1687722ab9',
    createdDate: '2023-01-17T23:48:08.803Z',
    noteType: 'fact',
  },
  {
    title: '摩根士丹利Morgan Stanley第四季度收益好于华尔街预期。\n',
    content:
      '营收为127亿美元，同比下降12.5%。但财富管理收入从一年前的63亿美元增至66亿美元。\n净收入下降了近40%。本季度信贷损失准备金为8500万美元，而去年同期仅为500万美元。\n摩根士丹利今天大涨近6%。',
    tagUuids: ['ms'],
    uuid: '0d9e546b-70fd-4c5f-835d-c9ad15cf8461',
    createdDate: '2023-01-17T23:30:54.414Z',
    noteType: 'fact',
  },
  {
    title: '高盛Goldman Sachs交出近十年来最差的财报，收入和盈利均不及预期。',
    content:
      '营收同比下降16.2%。资产与财富管理收入较上年同期下降27%。\n盈利大幅低于华尔街预期。由于薪酬，福利，及交易费用增加，高盛营业支出猛增 11%。像大部分银行一样，高盛本季度信贷损失准备金从去年同期3.44亿美元飙升到9.72亿美元。\n高盛今天股价大跌6.44%。\n',
    tagUuids: ['gs'],
    sourceLink:
      'https://seekingalpha.com/news/3924604-goldman-sachs-q4-earnings-drop',
    uuid: 'e663c9b3-f8a3-407b-a0a8-45a2dfe8f11b',
    createdDate: '2023-01-17T23:17:06.068Z',
    noteType: 'fact',
  },
  {
    title:
      'Apple released new MacBook Pro and Mac mini, equipped with the latest M2 Pro and M2 Max chips.',
    content:
      "Mac mini will no longer be equipped with Intel chips, which means that Mac Pro is Apple's last computer with Intel processors.\nThe new Mac mini starts at $599. The new 14-inch MacBook Pro starts at $1,999. The new 16-inch MacBook Pro starts at $2,499.",
    tagUuids: ['aapl'],
    imageLinks: [
      'https://i.ibb.co/4TW3Y0p/Screenshot-2023-01-17-at-2-44-06-PM.png',
    ],
    uuid: 'f5cd5c06-c66d-4dc5-a5d3-19736387af95',
    createdDate: '2023-01-17T22:52:33.694Z',
    noteType: 'fact',
  },
  {
    title: 'Apple发布新款MacBook Pro和Mac mini, 配备最新M2 Pro和 M2 Max芯片。',
    content:
      'Mac mini将不再配备英特尔Intel芯片，这意味着 Mac Pro是苹果最后一款可以配置Intel处理器的电脑。\n新Mac mini售价599美元起。新14英寸MacBook Pro售价1999美元起。 新16英寸MacBook Pro售价2499美元起。',
    tagUuids: ['aapl'],
    imageLinks: [
      'https://i.ibb.co/4TW3Y0p/Screenshot-2023-01-17-at-2-44-06-PM.png',
    ],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/apple-announces-new-mac-mini-macbook-pro-with-m2-pro-and-m2-max.html',
    uuid: '6713765b-2e46-4130-9a10-b7214062f416',
    createdDate: '2023-01-17T22:39:28.701Z',
    noteType: 'fact',
  },
  {
    title:
      'Moderna said their RSV vaccine is 83.7% effective in preventing lower respiratory diseases in people aged 60+.',
    content:
      'The vaccine uses the same RNA technology as the Covid vaccine. No RSV vaccine is currently approved by the FDA.\n Application for FDA approval will be submitted first half of this year. \nMorgan Stanley predicts that the RSV vaccine market will be worth $7-$10 billion.',
    tagUuids: ['mrna'],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/moderna-says-rsv-vaccine-is-84percent-effective-at-preventing-disease-in-older-adults.html',
    uuid: '47358c25-768e-4a3c-9a08-d24a49c0007b',
    createdDate: '2023-01-17T22:23:06.760Z',
    noteType: 'fact',
  },
  {
    title: '莫德纳Moderna宣称新研发的RSV疫苗对老年人有显著作用。',
    content:
      '疫苗在预防60岁以上人群的下呼吸道疾病时的有效性为83.7%。该疫苗使用了与Covid新冠疫苗相同的RNA技术。\nModerna计划在今年上半年向美国食品和药物管理局FDA提交批准申请。目前FDA没有批准过任何RSV疫苗。\n大摩预测RSV疫苗市场规模在$70-$100亿间。',
    tagUuids: ['MRNA'],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/moderna-says-rsv-vaccine-is-84percent-effective-at-preventing-disease-in-older-adults.html',
    uuid: '3989157e-b61b-4c41-a3cb-e4d41e568d63',
    createdDate: '2023-01-17T22:08:32.599Z',
    noteType: 'fact',
  },
  {
    title: '高票价无法阻挡强劲的需求，美联航第四季度财报及2023年前瞻均超预期。',
    content:
      '消费者坐飞机的需求远大于航空公司的现有供给。\n第四季度营收为124亿美元(+51.4% Y/Y)。飞行时间和2019年同期相比减少了9%，但营收增加14%。\n第四季度利润为8.43亿美元。营业利润率为11.1%。\n2023第一季度和全年收益预测均远超预期。',
    tagUuids: ['ual'],
    sourceLink:
      'https://seekingalpha.com/news/3925187-united-airlines-stock-soars-after-big-bottom-line-beat-bullish-forecast',
    uuid: '9e938017-f09f-4906-b775-c89d285597aa',
    createdDate: '2023-01-17T21:37:34.417Z',
    noteType: 'fact',
  },
  {
    title: '周五关注',
    content:
      'Ally Bank发布财报。\n2023蒙特利尔国际车展开幕。大量品牌将发布2023车型。特斯拉Tesla也会参展',
    tagUuids: ['tsla'],
    uuid: 'fc3ba54a-d473-44f4-aa26-1ac4ad963342',
    createdDate: '2023-01-16T23:49:10.083Z',
    noteType: 'fact',
  },
  {
    title: '周四关注',
    content:
      '奈飞Netflix，宝洁P&G将发布财报。\n保洁财报将对其他化妆消费品公司财报起到指引作用（比如沃尔玛，联合利华, e.l.f. Beauty)。\nArk基金将召开第四季度webinar。',
    tagUuids: ['pg'],
    uuid: 'b5003bf4-a319-4076-816d-6206087010aa',
    createdDate: '2023-01-16T23:44:35.770Z',
    noteType: 'fact',
  },
  {
    title: '周三关注',
    content:
      '金融公司Charles Schwab，Discovery，PNC将发布财报。\n12月生产商价格指数producer price index。\n12月零售消费报告retail sales report。',
    tagUuids: ['schw'],
    uuid: '8d6f5ae4-3bdd-474f-9fb2-8df280ec27ab',
    createdDate: '2023-01-16T23:34:59.470Z',
    noteType: 'fact',
  },
  {
    title: '周二关注',
    content:
      '高盛，摩根士丹利，美联航将发布财报。\n游戏商Roblox发布每月预定数据。\nOPEC发布每月石油市场报告。\n达沃斯世界经济论坛将在瑞士召开。\n',
    tagUuids: ['gs'],
    uuid: '2fabc819-9f1a-4fb4-b991-813c82974ff1',
    createdDate: '2023-01-16T23:30:13.456Z',
    noteType: 'fact',
  },
  {
    title: '财报季正式开启：高盛，奈飞Netflix等将发布财报。',
    content:
      '高盛和摩根士丹利将在周二公布第四季度财报，重点关注投行们是否能在投资业务低迷的时期继续保持高盈利。\n奈飞Netflix将在周四发布财报，重点关注奈飞打击密码共享的成果。\n',
    tagUuids: ['earnings'],
    sourceLink:
      'https://www.cnbc.com/2023/01/16/earnings-playbook-netflix-and-goldman-sachs-headline-another-big-week-of-reports.html',
    uuid: '2080567a-28eb-4a64-af40-374a0b0a6e26',
    createdDate: '2023-01-16T19:44:30.733Z',
    imageLinks: [''],
    noteType: 'fact',
  },
  {
    title: '周五三大指数在开盘下跌后强力反弹。纳斯达克连续六天上涨。\n',
    content:
      '标普500上涨0.40%至3999点，离4000点整数关还有一步之遥。\n科技股为主的纳斯达克上涨0.71%，本周累计上涨 4.82%。\n标普500和纳斯达克都已连续第二周上涨，并创下去年11月以来的最佳单周表现。',
    tagUuids: ['news'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/stock-market-futures-open-to-close-news.html',
    uuid: 'dff84ac2-f241-42af-9c89-b3d9c62a8a65',
    createdDate: '2023-01-14T14:24:41.410Z',
    noteType: 'fact',
  },
  {
    title: '苹果首席执行官Tim Cook要求大幅削减他的薪酬\n',
    content:
      '为了回应股东的批评，苹果薪酬委员会和Tim Cook决定将他2023年的年度薪酬减少40%。\n他的300万美元基本工资和600万美元奖金将保持不变。\n股权奖励总额将从7500万美元减少到4000万美元。\n与业绩相关的股权奖励将占总股权奖励的75%，高于2022年的50%。这将使Tim Cook的收入与公司业绩更紧密得结合在一起。',
    tagUuids: ['aapl'],
    sourceLink:
      'https://seekingalpha.com/news/3924410-apple-ceo-tim-cook-asks-for-a-big-cut-in-compensation',
    uuid: 'beed23ba-8c25-4a42-840c-e48ede538d78',
    createdDate: '2023-01-14T14:15:54.324Z',
    noteType: 'fact',
  },
  {
    title: '台积电第四季度营收低于预期，但确认将削减2023年支出。',
    content:
      '营收为199.3亿美元，同比增长 26.6%，但低于209.2亿美元预期。\n每股盈利1.82美元，高于预期的1.77美元。\n由于需求下降,2023年的支出最多可以减少12.5%。\n上个月，台积电开始生产号称“需求非常强劲”的3纳米芯片，目前7纳米及以下高端产品收入占晶圆总收入的54%。\n',
    tagUuids: ['tsm'],
    sourceLink:
      'https://seekingalpha.com/news/3924192-taiwan-semiconductor-confirms-will-cut-2023-spending',
    uuid: '5f69d765-5c1f-4bcc-ad68-2325d449c35e',
    createdDate: '2023-01-14T14:10:30.813Z',
    noteType: 'fact',
  },
  {
    title: '美国银行Bank of America第四季度营收盈利均高于预期。',
    content:
      '第四季度每股收益为0.85美元，高于0.77美元预期。\n营收为240亿美元，同比增长11.2%，\n信贷损失准备金增减到11亿美元。与去年同期相比，增加了16亿美元\nCEO强调有机成长和高利率使存款业务成为本季度重点。',
    tagUuids: ['boa'],
    sourceLink:
      'https://seekingalpha.com/news/3924335-bank-of-america-q4-earnings',
    uuid: '161e390f-cf00-4720-8665-d0af1c8bfaa4',
    createdDate: '2023-01-14T13:59:17.708Z',
    noteType: 'fact',
  },
  {
    title: '摩根大通JPMorgan Chase第四季度财报营收利润均高于预期。',
    content:
      '每股收益为3.57美元，高于3.07 美元的预期。\n营收为340.5亿美元，同比上涨17.9%。平均客户贷款额增长6%。\n本季度公布了23亿美元的信贷损失准备金用来应对客户的信用卡贷款增长。这个数字比第三季度增加了49%。\nChase认为宏观经济将面临“温和衰退”',
    tagUuids: ['jpm'],
    uuid: '2279cf13-f0de-499e-9aa4-7276c1526ca0',
    createdDate: '2023-01-14T13:39:30.266Z',
    noteType: 'fact',
  },
  {
    title: '特斯拉宣布在美国和欧洲大幅降价，正式开始价格战。',
    content:
      '降价幅度从6%到20%不等，这将使Model Y在2023年获得美国政府7500美元的税收抵扣。预计降价将刺激需求增加12%-15%。\n这可能是朱晓彤开始负责北美生产销售后的第一个大动作。',
    tagUuids: ['tsla'],
    uuid: 'c39ac6b6-3198-4276-8f47-cf70c1cf1d84',
    createdDate: '2023-01-14T13:24:00.598Z',
    noteType: 'fact',
  },
  {
    title: '快餐连锁Wendy’s公布第四季度初步业绩,股价大涨近6%',
    content:
      '第四季度收入初步报告为5.365亿美元，高于预期的 5.1725亿美元，较上年同期增长13.4%。\nCEO: “全球同店销售额连续两年实现两位数增长，第四季度利润率比第一季度增长近300个基点，我们在全球新开设了超过275家店”',
    tagUuids: ['wen', 'restaurants'],
    sourceLink:
      'https://seekingalpha.com/news/3924455-wendys-pre-announces-above-consensus-sales-bolsters-buyback-program',
    uuid: '261f15cf-9126-47d6-82e8-c429d1a4de45',
    createdDate: '2023-01-14T05:55:53.530Z',
    noteType: 'fact',
  },
  {
    title:
      'Virgin Galatic is expected to start commercial services in the second quarter',
    content:
      'Shares of Virgin Galactic (SPCE) rose 7.46% on Thursday and are up more than 32% this year, but it is still below their 50-day, 100-day, and 200-day moving averages.',
    tagUuids: ['spce'],
    uuid: 'e5b52394-4aa7-4c67-930c-330493baf11d',
    createdDate: '2023-01-13T05:17:20.913Z',
    noteType: 'fact',
  },
  {
    title:
      'Luxury EV maker Lucid is producing more cars than expected in 2022.',
    content:
      'Nearly 3,500 Lucid Airs were produced in Q4, the highest quarterly production to createdDate.\nA total of 7180 cars were produced in 2022, exceeding the guideline released in August.\nLucid shares rose nearly 5% today.',
    tagUuids: ['lcid'],
    uuid: '293a50a0-e179-483f-816c-7cec86bd916b',
    createdDate: '2023-01-13T05:16:55.094Z',
    noteType: 'fact',
  },
  {
    title: 'Tesla is looking for the next Gigafactory in Indonesia',
    content:
      'According to Bloomberg, Tesla will finalize a deal to locate the next Gigafactory in Indonesia.\nA big reason is that Indonesia has nearly 25% of the world’s nickel reserves. Nickel is necessary to make batteries.\n',
    tagUuids: ['tsla'],
    uuid: '749cf606-3f21-4169-90de-390553e6d883',
    createdDate: '2023-01-13T05:16:27.514Z',
    noteType: 'fact',
  },
  {
    title: 'Disney board faces a proxy fight from activist investor Peltz.\n\n',
    content:
      'Peltz believes that Disney’s management is in disarray and spent too much money on the acquisition of Fox. All of this has caused Disney’s stock price to hover at an eight-year low.\nPeltz hopes to gain a seat on the board of directors through the proxy battle.\nDisney elected Mike Parker, the executive chairman of Nike, as the new chairman, and suggested that shareholders vote to reject Peltz from joining the board of directors.',
    tagUuids: ['dis'],
    uuid: '64e7828f-23c8-4a2e-a73c-fcfe7de624fe',
    createdDate: '2023-01-13T05:16:01.012Z',
    noteType: 'fact',
  },
  {
    title: 'Food inflation heats up again in CPI report: Egg prices up 60% YoY',
    content:
      'Food prices in December rose 10.4% year-on-year and 0.3% month-on-month.\nCereal +13.0% YoY, Flour +23.4% YoY, Poultry +12.2% YoY, Lettuce +24.9% YoY, Bakery products +16.3% YoY, Coffee +14.3% YoY',
    tagUuids: ['cpi'],
    uuid: '2a0a3a54-7d17-4a2d-b808-104c8d78a05a',
    createdDate: '2023-01-13T05:15:24.435Z',
    noteType: 'fact',
  },
  {
    title:
      'Stocks continued to move higher on Thursday. December CPI index fell 0.1% month-on-month, in line with economists’ expectations. Investors believed the data could prompt the Fed to slow rate hikes.',
    content:
      'Nasdaq closed up 0.64%, rising for five consecutive days. The S&P 500 rose 0.34%.\nThe core CPI excluding food and energy rose by 0.3% month-on-month, also in line with expectations. The biggest reason for the inflation slowdown was a sharp 16.6% month-on-month drop in oil prices.\nCompared with last year, CPI increased by 6.5% year-on-year, and core CPI increased by 5.7% year-on-year.',
    tagUuids: ['news'],
    uuid: '7e616c72-984e-4af2-b4bb-3aaf2b978dc0',
    createdDate: '2023-01-13T05:14:49.714Z',
    noteType: 'fact',
  },
  {
    title: '迪斯尼董事会面临主动投资人Peltz的委托书争夺战（proxy fight）。',
    content:
      'Peltz认为迪士尼管理层混乱，在对福克斯的并购上存在决策问题，这些都导致股价现在在8年来的最低点。\nPeltz希望通过委托书争夺战（proxy fight)为自己在董事会获得一个席位。\n迪士尼则推举耐克执行董事长Mike Parker成为新董事长，并建议股东投票拒绝Peltz加入董事会。',
    tagUuids: ['dis', 'nke'],
    sourceLink:
      'https://finance.yahoo.com/news/bob-igers-next-big-challenge-at-disney-is-activist-investor-nelson-peltz-230245478.html',
    uuid: '43c7c463-f694-4b29-b450-e22481cb26bc',
    createdDate: '2023-01-12T23:49:50.877Z',
    noteType: 'fact',
  },
  {
    title: '特斯拉正在印度尼西亚寻找下一个电动汽车工厂',
    content:
      '彭博社消息，特斯拉将敲定在印度尼西亚建设下一个超级工厂。 \n一大原因是印度尼西亚拥有全球近25%的镍储量。镍是用来制造电池的必需品',
    tagUuids: ['tsla'],
    sourceLink:
      'https://seekingalpha.com/news/3923667-tesla-eyes-indonesia-for-next-electric-vehicle-plant',
    uuid: 'd3158592-19a4-437d-852a-7ef8e75bf703',
    createdDate: '2023-01-12T23:34:31.822Z',
    noteType: 'fact',
  },
  {
    title: 'CPI报告中的食品通胀再次升温: 鸡蛋价格同比上涨60%',
    content:
      '12月食品价格较同比上涨 10.4%，环比上涨0.3%。 \n麦片同比+13.0%，面粉同比+23.4%，家禽同比+12.2%，生菜同比+24.9%，烘焙产品同比+16.3%，咖啡同比+14.3%',
    tagUuids: ['cpi', 'us'],
    sourceLink:
      'https://seekingalpha.com/news/3924135-food-inflation-runs-hot-again-in-cpi-report-including-egg-prices-up-60',
    uuid: 'f9e310fc-2049-43c7-9e2f-49a12a4550fc',
    createdDate: '2023-01-12T23:19:16.588Z',
    noteType: 'fact',
  },
  {
    title: '维珍银河Virgin Galatic预计第二季度开始开始商业化服务',
    content:
      '维珍银河(SPCE)的股价周四上涨7.46%，今年至今涨幅超过32%，但仍低于50天，100天和200天移动平均线。',
    tagUuids: ['spce'],
    sourceLink:
      'https://seekingalpha.com/news/3924309-virgin-galactic-expects-commercial-service-to-begin-in-q2',
    uuid: '927fbab3-edba-4989-bf08-d36059d98e69',
    createdDate: '2023-01-12T23:14:34.794Z',
    noteType: 'fact',
  },
  {
    title: '电动豪华汽车制造商Lucid2022年生产的汽车数量超过预期。',
    content:
      '第四季度生产了近3500辆Lucid Air，这是到目前为止最高的季度产量。\n2022年总共生产了7180辆汽车，超过8月发布的预期。\nLucid今天上涨近5%。',
    tagUuids: ['lcid', 'ev'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/lucid-lcid-2022-ev-production-exceeds-expectations.html',
    uuid: '2cc9fc76-db1e-465d-a2cf-95fecc412b6a',
    createdDate: '2023-01-12T22:35:56.529Z',
    noteType: 'fact',
  },
  {
    title:
      '周四股市继续收高。12月CPI指数环比下跌0.1%，符合经济学家预期。​投资人认为该数据可促使美联储放缓加息。',
    content:
      '剔除食品和能源的核心CPI环比上涨0.3%，也符合预期。通胀放缓的最大原因是油价环比大幅下跌16.6%。\n与去年相比，CPI同比上涨 6.5%，核心CPI同比上涨5.7%。\n纳斯达克收涨0.64%,连续五天上涨。标普500上涨0.34%\n',
    tagUuids: ['news', 'cpi', 'inflation', 'us', 'fed'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/consumer-prices-fell-0point1percent-in-december-in-line-with-economists-expectations.html',
    uuid: '77ba2453-c39e-48e9-a844-6d9d4ae2a0d5',
    createdDate: '2023-01-12T21:58:05.654Z',
    noteType: 'fact',
  },
  {
    title:
      'As the macro economy continues to deteriorate, Ubisoft cuts its net booking target and cancels three games',
    content:
      'The 2022 full-year net booking target has been reduced by 10%. The previous forecast was a 10% rise.\nCEO stated that “We are clearly disappointed by our recent performance,”, "We are facing contrasted market dynamics as the industry continues to shift towards mega-brands and everlasting live games, in the context of worsening economic conditions affecting consumer spending."',
    tagUuids: ['ubi', 'gaming'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/ubisoft-cancels-three-games-slashes-targets-on-worsening-conditions.html',
    uuid: '71f01d80-fba1-40bf-85cb-eaf5d97d9a09',
    createdDate: '2023-01-12T06:49:45.530Z',
    noteType: 'fact',
  },
  {
    title:
      '因宏观经济继续恶化，育碧游戏公司削减预定量目标并取消了三个游戏的开发，',
    content:
      '2022全年预定量目标（net bookings)下调10%。之前的预测是上涨10%\nCEO表示“在经济状况恶化并影响消费者支出的背景下，整个行业变得更加重视大品牌和现场游戏直播”，“我们对自己的变现感到失望”',
    tagUuids: ['ubi', 'gaming'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/ubisoft-cancels-three-games-slashes-targets-on-worsening-conditions.html',
    uuid: '0e86be91-273f-4cd1-97e9-2e3dc16a7295',
    createdDate: '2023-01-12T06:46:22.288Z',
    noteType: 'fact',
  },
  {
    title:
      'Binance will expand hiring by 15% to 30% in 2023, CEO Zhao said at the Crypto Finance Conference in Switzerland\n',
    content:
      "Binance's hiring plan is the exact opposite of the mass layoffs that most cryptocurrency companies are doing right now.\nAccording to CEO, Binance more than doubled its headcount last year, from 3,000 to nearly 8,000.",
    tagUuids: ['binance', 'crypto'],
    sourceLink:
      'https://finance.yahoo.com/news/binance-says-plans-expand-hiring-041426149.html',
    uuid: '4414c145-689d-4907-8132-bb14184eeccc',
    createdDate: '2023-01-12T06:04:43.736Z',
    noteType: 'fact',
  },
  {
    title: '币安将在2023年将招聘人数扩大15%到30%',
    content:
      '币安的招聘计划与绝大多数加密货币公司正在进行的大规模裁员截然相反。\n币安去年的员工人数增加了一倍多，从 3,000 人增加到近 8,000 人。',
    tagUuids: ['binance', 'crypto'],
    sourceLink:
      'https://finance.yahoo.com/news/binance-says-plans-expand-hiring-041426149.html',
    uuid: '0028e468-e235-47e4-88e5-5cb67cabf108',
    createdDate: '2023-01-12T05:57:50.219Z',
    noteType: 'fact',
  },
  {
    title:
      'According to Bloomberg News, Apple may release a MacBook Pro laptop with a touch screen as soon as 2025',
    content:
      'This is a reversal of Apple\'s comment in 2018 that "lifting your arm up to poke a screen (on a laptop) is a pretty fatiguing thing to do"\nApple\'s Mac product line sales have performed well after the release of self-developed chips. Since 2020, sales have increased by 40%.',
    tagUuids: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/apple-reportedly-considering-touchscreen-mac-laptop-for-2025.html',
    uuid: '4240717d-7d1a-41ed-b96d-6732948ee164',
    createdDate: '2023-01-12T05:45:02.168Z',
    noteType: 'fact',
  },
  {
    title:
      '据彭博社消息，苹果最快可能在2025年发布带触摸屏的MacBook Pro笔记本电脑',
    content:
      '苹果在2018年曾明确表示触摸屏笔记本电脑在人体工程学方面较差：“抬起你的手臂来戳屏幕是一件非常累人的事情”\n苹果Mac产品线销量在发布自研芯片后表现出色。自2020年以来，销量增长了40%。',
    tagUuids: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/apple-reportedly-considering-touchscreen-mac-laptop-for-2025.html',
    uuid: 'f9e34da3-72f2-4085-81c4-683d689c1e65',
    createdDate: '2023-01-12T05:37:56.898Z',
    noteType: 'fact',
  },
  {
    title:
      "The market is optimistic about Thursday's CPI report, and the three major indexes closed higher.",
    content:
      'The Nasdaq Composite closed up 1.8%, achieving a four-day winning strike, the S&P 500 closed up 1.3%, and the Dow closed up 0.8%.\nAll 11 S&P sectors rose. Real estate rose 3.6 percent, while consumer staples rose 2.7 percent.\nIf data shows that the CPI slows down, it may prompt the Fed to slow down the pace of raising interest rates.',
    tagUuids: ['cpi', 'us', 'fed'],
    sourceLink:
      'https://seekingalpha.com/news/3923887-wall-street-shows-optimism-ahead-of-cpi-data-dow-sp-500-nasdaq-rise',
    uuid: 'a0967096-5bfd-4b27-a78b-fe0b2d93dcff',
    createdDate: '2023-01-12T03:28:54.652Z',
    noteType: 'fact',
  },
  {
    title: '市场看好周四的CPI报告, 三大指数集体收高。',
    content:
      '纳斯达克综收盘上涨 1.8%，连续第4天上涨，标普500收盘上涨 1.3%，道指收盘上涨 0.8%。\n标普11个板块全部上涨。房地产板块上涨3.6%，消费品板块上涨 2.7%。\n如果数据显示CPI放缓，可能促使美联储放缓加息脚步。',
    tagUuids: ['cpi', 'us', 'fed'],
    sourceLink:
      'https://seekingalpha.com/news/3923887-wall-street-shows-optimism-ahead-of-cpi-data-dow-sp-500-nasdaq-rise',
    uuid: '1d423563-7830-4b81-a8a3-ea72c368d2ac',
    createdDate: '2023-01-12T01:16:29.560Z',
    noteType: 'fact',
  },
  {
    title:
      'The largest mortgage player in the United States, Wells Fargo, decided to scale down its mortgage business',
    content:
      "Moving forward, Wells Fargo plans to provide mortgage services only to bank clients, wealth management customers, and borrowers from minority communities.\nWells Fargo's third-party loan acquisition business will be closed and assets related to mortgage services will be sold.\nManagement said that regulatory pressure and high interest rates were the main reasons for this decision.\n",
    tagUuids: ['housing', 'wfe'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/wells-fargo-once-the-no-1-player-in-mortgages-is-stepping-back-from-the-housing-market.html',
    uuid: '6fdf0d67-4da8-4dd7-9e7f-039e89172387',
    createdDate: '2023-01-11T06:29:33.322Z',
    noteType: 'fact',
  },
  {
    title: 'Coinbase is laying off another 950 staff.\n\n',
    content:
      'CEO Armstrong: "As we examined our 2023 scenarios, it became clear that we would need to reduce expenses to increase our chances of doing well in every scenario. While it is always painful to part ways with our fellow colleagues, there was no way to reduce our expenses significantly enough, without considering changes to headcount,"\nThe layoff is about 20% of the total workforce, and it is expected to save 25% of operating expenses.\n',
    tagUuids: ['coin', 'crypto'],
    uuid: 'e9b1cf34-464b-4a73-8b8f-a034bbaba65d',
    createdDate: '2023-01-11T06:20:26.550Z',
    noteType: 'fact',
  },
  {
    title:
      'Bed Bath & Beyond released its earnings on Tuesday: Both revenue and profit fell short of expectations',
    content:
      'The quarterly loss was $393 million, 42% more than last year\'s.\nThe CEO admitted that the company did not achieve the original goals but made progress on reducing expenses, including closing 150 stores.\nBed Bath & Beyond "squeezed" up nearly 30% today and rose another 17% during the after-hour.',
    tagUuids: ['bbby', 'retail'],
    uuid: 'a591f751-6b5c-4ca5-a55d-bcf7cf63c92c',
    createdDate: '2023-01-11T06:16:59.265Z',
    noteType: 'fact',
  },
  {
    title:
      'The S&P 500 was up 0.7%, and the Nasdaq was up 1.01%, achieving a three-day winning streak.',
    content:
      'Federal Reserve Chairman Powell emphasized on Tuesday that “Price stability is the bedrock of a healthy economy and provides the public with immeasurable benefits over time."\nThe Fed\'s primary task is to control inflation and stabilize prices. It can "require measures that are not popular in the short term as we raise interest rates to slow the economy"\nBut Powell did not disclose any information about the future interest rate.\n\n',
    tagUuids: ['fed', ' interest rate'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/powell-stresses-need-for-feds-political-independence-while-tackling-inflation.html',
    uuid: '26e3800e-c229-4486-b9b1-00fabd8f34e9',
    createdDate: '2023-01-11T05:44:10.569Z',
    noteType: 'fact',
  },
  {
    title:
      '美股在周二午后开始上涨。标普500收盘上涨0.7%，纳斯达克实现三天连涨，收盘上涨1.01%。',
    content:
      '美联储主席鲍威尔周二强调，稳定的物价是经济健康的基石。美联储的首要任务是控制通胀和稳定物价，而不是被政治因素所左右。因此有些不够”政治正确”措施是无法避免的，比如提高利率。\n但鲍威尔没有对未来的加息计划透露任何信息。',
    tagUuids: ['fed'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/powell-stresses-need-for-feds-political-independence-while-tackling-inflation.html',
    uuid: '97c6db5c-f5b8-43c9-bfd0-109229abfa02',
    createdDate: '2023-01-11T02:50:02.249Z',
    noteType: 'fact',
  },
  {
    title: '实体连锁Bed Bath & Beyond周二发布财报，营收和利润均不及预期',
    content:
      '季度亏损达到3.93亿美元；同比亏损增加42%。\nCEO承认公司没有实现达成本来的季度目标，但做出了很多改进来减少支出，包括关闭150家门店。\nBed Bath & Beyond今天盘中暴涨近30%，盘后再涨17%。',
    tagUuids: ['bbby', 'retail'],
    sourceLink:
      'https://www.nbcnews.com/business/business-news/bed-bath-reports-wider-expected-loss-quarterly-earnings-rcna65080',
    uuid: '72d1ce6a-f57d-4fe4-9253-b3d9e7a1d82b',
    createdDate: '2023-01-11T02:06:04.644Z',
    noteType: 'fact',
  },
  {
    title: '苹果的应用商店增长可能正在放缓',
    content:
      '苹果在2022年支付了3200亿美元给开发者，同比增长23%。根据苹果的支付公式，估计应用商店的营收同比增长在0%-21%之间（700亿美元-850亿美元）。\n2022订阅服务到达9亿次，同比增长20%。\n2022服务营收为780亿美元，同比增长14%，但远低于去年的27%的增长率。',
    tagUuids: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/apple-app-store-revenue-update-shows-slowing-growth-.html',
    uuid: '4749ee7d-1502-48d5-8ce5-175e172e97f2',
    createdDate: '2023-01-11T01:05:07.792Z',
    noteType: 'fact',
  },
  {
    title: 'Coinbase再裁950人',
    content:
      'CEO在声明中写到“我们在审视2023年可能遇到的不同境况后，得出一个显而易见的结论，就是我们需要减少开支以保证在任何境况下都能运营下去”。\n被裁员工数占总员工数的20%，预计可以节省25%运营支出。\n',
    tagUuids: ['coin', 'crypto'],
    sourceLink:
      'https://www.npr.org/2023/01/10/1148163220/coinbase-layoffs-crypto-winter-bitcoin',
    uuid: '68c67378-ad2d-4293-b4b3-87e532826297',
    createdDate: '2023-01-11T00:35:37.725Z',
    noteType: 'fact',
  },
  {
    title: '美国最大房贷银行：富国银行，决定大规模缩减房贷业务',
    content:
      '富国银行准备只向银行，理财客户，和一些少数族裔社区提供住房贷款服务，而不是“所有人”。\n富国银行的第三方贷款收购业务将关闭，大部分贷款相关资产也将卖出。\n管理层表示监管压力和高利率是促使这个决定的主要原因。',
    tagUuids: ['housing', 'wfc'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/wells-fargo-once-the-no-1-player-in-mortgages-is-stepping-back-from-the-housing-market.html',
    uuid: 'ad6cee43-f83a-4bf1-b419-9924e96e81da',
    createdDate: '2023-01-11T00:21:15.854Z',
    noteType: 'fact',
  },
  {
    title: '消费者对住房市场的信心有所回升。',
    content:
      'Fannie Mae的月度住房情绪指数显示情绪从11月到 12 月有所改善。\n21%的受访者表示现在是购房好时机，高于11月的16%。\n大多数消费者认为房价将在未来12个月内会下跌，但房屋贷款利率将会下降。',
    tagUuids: ['real estate', ' housing', ''],
    sourceLink:
      'https://www.cnbc.com/2023/01/09/consumer-confidence-in-housing-rises-as-prices-fall.html',
    uuid: 'c436aea5-fb06-4ec7-847d-033344669c3a',
    createdDate: '2023-01-09T22:55:30.337Z',
    noteType: 'fact',
  },
  {
    title: '辉瑞CEO：2022 年是我们公司历史上最成功的年份之一',
    content: '目前正在把Paxlovid送往中国\n未来18个月将生产19个新产品',
    tagUuids: ['pfe'],
    sourceLink:
      'https://www.cnbc.com/video/2023/01/09/pfizer-ceo-2022-was-one-of-the-most-successful-years-in-our-corporate-history.html',
    uuid: '80b754e1-e5b3-4201-8c13-b4e2acce8764',
    createdDate: '2023-01-09T22:46:08.838Z',
    noteType: 'fact',
  },
  {
    title: '马云将放弃了对蚂蚁集团的控制权',
    content:
      '该消息显示出中国政府可能放松对科技行业的监管力度\n高盛将阿里巴巴列入坚定买入名单,认为阿里巴巴最差的日子已经过去，目前价格合理，接下来公司将享受广告业务，金融科技，和云业务带来的增长。\n阿里巴巴周一上涨3%',
    tagUuids: ['baba', 'fintech', 'china'],
    sourceLink:
      'https://www.barrons.com/articles/alibaba-hong-kong-stock-price-jack-ma-ant-51673253910',
    uuid: 'ad50e989-1814-4777-a042-9037c5c3b044',
    createdDate: '2023-01-09T22:15:41.199Z',
    noteType: 'fact',
  },
  {
    title: 'Lululemon下调第四季度利率指引,大跌近10%。',
    content:
      'Lululemon 表示，预计第四季度毛利率将下降 90-110 个基点，而此前预期为增长 10-20 个基点。\n不过，该公司将其第四季度净收入预期上调了0.5亿美元。\nLululemon库存继续增加显示经济衰退影响对富有消费者也开始产生影响。',
    tagUuids: ['lulu', 'retail'],
    sourceLink:
      'https://finance.yahoo.com/news/lululemon-athletica-raises-fourth-quarter-115148722.html',
    uuid: '3e599c50-a47e-4e45-8c05-a1d6a2ef4c3c',
    createdDate: '2023-01-09T22:07:55.821Z',
    noteType: 'fact',
  },
  {
    title: '美股高开低走。市场期待这周的CPI报告和银行股的财报。',
    content:
      '科技股领涨，纳斯达克上涨0.63%。\n卫生保健，消费必需品领跌，标普500下跌0.08%。\n周四12月CPI指数即将发布。\n周五银行股将率先发布财报开启财报季。',
    tagUuids: ['cpi'],
    sourceLink:
      'https://seekingalpha.com/news/3923039-sp500-dow-jones-nasdaq-stock-market-tech-stocks-rally-cpi-data',
    uuid: 'c4933c5e-c5df-4cad-961e-1bf154b8aa1e',
    createdDate: '2023-01-09T21:46:39.004Z',
    noteType: 'fact',
  },

  {
    title: 'Compass is cutting more labor',
    content:
      '* Compass CEO does not think the price will crash.\n* Excluding the luxury market, inventory is down year over year.',
    tagUuids: ['COMP'],
    uuid: '0dca3183-b644-4161-b7a8-5a3f4031be08',
    createdDate: '2023-01-09T15:36:33.710Z',
    noteType: 'fact',
  },
  {
    title: '火币网宣布裁员20%',
    content:
      '由FTX破产造成的币圈信任危机继续发酵\n火币网原生币下跌7%\n昨天Genesis宣布裁员30%, Silvergate宣布裁员40%',
    tagUuids: ['crypto', ' huobi', ' gensis'],
    sourceLink:
      'https://www.coindesk.com/business/2023/01/05/crypto-layoffs-heres-the-grim-count-since-april/',
    uuid: 'bea7b139-16e9-4a68-a93a-96638bbe5599',
    createdDate: '2023-01-06T23:30:39.475Z',
    noteType: 'fact',
  },
  {
    title:
      'FTX原CEO Sam Bankman-Fried由律师发表声明说他需要用他Robinhood的持股来支付律师费',
    content:
      '他拥有的Robinhood股票目前价值4亿5千万美元\n理论上来说，这些股票属于Sam和他的FTX共同创始人\n已破产的FTX和BlockFi债务人也同时希望得到这些股票来处理赔偿\n同时美国司法部也希望扣押这些股票',
    tagUuids: ['hood', 'ftx', 'crypto', 'blockfi'],
    sourceLink:
      'https://finance.yahoo.com/news/sam-bankman-fried-lawyers-just-151904468.html',
    uuid: '4f5b2339-5c84-4787-81e2-3781a9b0a8b0',
    createdDate: '2023-01-06T23:24:15.322Z',
    noteType: 'fact',
  },
  {
    title: '由于持续的通胀压力，Party City准备申请破产',
    content:
      '股价下跌58%,目前只有15美分\n昨天，另一家实体店零售商Bed Bath & Beyong也在考虑申请破产',
    tagUuids: ['retail'],
    sourceLink:
      'https://nypost.com/2023/01/06/party-city-plans-bankruptcy-filing-within-weeks-report/',
    uuid: '09f71da1-90f0-458d-b895-ee9daa1c209f',
    createdDate: '2023-01-06T22:55:35.571Z',
    noteType: 'fact',
  },
  {
    title: 'Costco在12月的营收同比上涨7%，远好于预期。',
    content:
      '2022年时间较晚的节日假期可能导致消费者有更多的时间进行消费。\nCostco的报告对其他大型超市，比如沃尔玛，Target,有积极意义。\nCostco股价今天大涨7.26%',
    tagUuids: ['cost', 'grocery'],
    sourceLink:
      'https://seekingalpha.com/news/3922705-costco-stock-surges-on-stronger-than-expected-sales-report',
    uuid: 'a3d5b6ba-7b98-4cff-8826-e8e544feb291',
    createdDate: '2023-01-06T22:43:44.497Z',
    noteType: 'fact',
  },
  {
    title: '美国劳动部发布12月就业报告显示就业市场继续火热。',
    content:
      '12月美国失业率下跌至3.5%，并且新增高于预期的223000个岗位（预期新增200000个岗位）\n但报告中的薪资增速放缓对降低通胀实现经济软着陆有积极意义。\n美股三大指数上涨2%+。纳斯达克上涨2.56%,标普500上涨2.28%。',
    tagUuids: ['jobs', 'us'],
    sourceLink:
      'https://seekingalpha.com/news/3922595-dow-sp-and-nasdaq-remain-muted-ahead-of-nonfarm-payrolls-report',
    uuid: '52a1b8d7-b9b1-4738-973d-c85af6cd396a',
    createdDate: '2023-01-06T22:35:10.655Z',
    noteType: 'fact',
  },
  {
    title: '梅西百货警告第四季度营收将低于预期',
    content:
      '梅西百货CEO指出消费者在节日假期的消费需求仍然强劲，但在平时的消费力继续下滑\n预计接下去一年对零售行业将更加具有挑战\n梅西百货股价盘后下跌4.2%',
    tagUuids: ['m', ' retail'],
    sourceLink:
      'https://www.cnbc.com/2023/01/06/macys-cuts-holiday-quarter-forecast-citing-squeeze-on-shoppers-wallets.html',
    uuid: '0538fb67-5bf2-4b9f-bba3-314a1954abc2',
    createdDate: '2023-01-06T22:21:23.234Z',
    noteType: 'fact',
  },
  {
    title: '美国食品药品监督管理局FDA批准了Biogen(BIIB)的阿尔茨海默氏症药物',
    content:
      'Biogen药物Lecanemab在对轻度阿尔茨海默氏症病人的临床试验中显示有减缓认知衰退的作用\n但同时该药物有导致脑部肿胀充血的风险\n该药物一年疗程在美国定价为一年$26,500美元\nBiogen今天上涨2.82%',
    tagUuids: ['medicine', 'BIIB'],
    sourceLink:
      'https://www.cnbc.com/2023/01/06/alzheimers-disease-fda-decision-on-biogen-eisai-treatment-lecanemab.html',
    uuid: '4dd5f2b6-fdff-42ee-bb21-2bc4dfad50d1',
    createdDate: '2023-01-06T22:02:41.000Z',
    noteType: 'fact',
  },
  {
    title:
      '爆红人工智能软件ChatGPT的母公司，OpenAI考虑接受新一轮的投资。估值达到2021年的两倍',
    content:
      '投资者包括风投机构Thrive Capital 和 Founders Fund\n新估值将达到290亿美元，两倍于2021年140亿估值\n已有投资人包括微软。微软希望ChatGPT能够被用于Bing搜索引擎\n',
    tagUuids: ['msft', 'googl'],
    sourceLink:
      'https://seekingalpha.com/news/3922500-chatgpt-creator-openai-in-talks-for-tender-offer-at-29b-valuation-report',
    uuid: '07673046-13d4-49a1-8415-11f50845116f',
    createdDate: '2023-01-05T21:34:29.386Z',
    noteType: 'fact',
  },
  {
    title: '零售商Bed Bath & Beyond考虑申请破产保护',
    content:
      '公司声称即将用完现金，预计第三季度损失3.85亿美元\nBed Bath & Beyond今天下跌30%',
    tagUuids: ['bbby'],
    sourceLink: 'https://www.cnbc.com/quotes/BBBY',
    uuid: '5c61fcb6-fbaf-42dc-8e2e-22a55d78f762',
    createdDate: '2023-01-05T21:20:33.129Z',
    noteType: 'fact',
  },
  {
    title: '加密货币银行Silvergate宣布本季度用户资产较三个月前下跌60%',
    content:
      '很多用户已经不再相信机构能管理他们的资产，所以把资产都直接取出放入冷钱包\nSilvergate卖出50亿美元债务证券来填补资产流失。\n该消息导致加密货币关联股票大跌: Silvergate下跌42%，Coinbase下跌10.8%.\n',
    tagUuids: ['crypto'],
    sourceLink:
      'https://www.cnbc.com/2023/01/05/silvergate-capital-tanks-40percent-after-crypto-bank-discloses-massive-q4-withdrawals.html',
    uuid: '68be3051-1f87-478b-8796-96a920bb55c3',
    createdDate: '2023-01-05T21:08:36.765Z',
    noteType: 'fact',
  },
  {
    title: '亚马逊将超预期裁员18000人\n\n',
    content:
      "主要裁员发生在Amazon Store和 Amazon's People Experience and Technology Solutions(PXT)",
    tagUuids: ['amzn'],
    sourceLink:
      'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-role-eliminations',
    uuid: 'cd00fe45-9ddc-4ae6-87d8-0da05f9c0aef',
    createdDate: '2023-01-05T20:58:47.875Z',
    noteType: 'fact',
  },
  {
    title: '微软CEO：未来两年可能是科技行业最具挑战的两年\n',
    content: 'CEO Satya Nadella指出全球很多地方正在经历经济衰退',
    tagUuids: ['msft'],
    uuid: '72cb28ec-61ae-4134-b924-7074dd05a58c',
    createdDate: '2023-01-05T20:52:25.731Z',
    noteType: 'fact',
  },

  {
    title: '​特斯拉12月总共交付55796辆电动汽车​\n',
    content:
      '这个数字是5个月来的最低水平，但有很大原因是因为疫情导致的\n上海工厂2022总交付年化增长50%\n上海工厂目前产能过剩，在12月24日到1月2日间进行了停产\n比亚迪在12月总共交付234598辆纯电或混电汽车',
    tagUuids: ['tesla', 'EV'],
    uuid: 'bc4c6cf4-f51c-4ead-ad78-0d08b984b75a',
    createdDate: '2023-01-05T15:50:34.363Z',
    noteType: 'fact',
  },
  {
    title:
      'PayPal was up 4.72%, and Block was up 2.86% today after analysts upgrades',
    content:
      'Baird upgraded Block to Outperform, and Truist upgraded Paypal to Buy. Both predict 20%+ gain in 2023\nAnalysts believe both stocks have strong cash positions and were adequately penalized in 2022. ',
    tagUuids: ['Block', 'Paypal', 'Fintech'],
    uuid: '1c931ced-86a0-40e1-b352-99ad2e74cac9',
    createdDate: '2023-01-04T00:00:11.585Z',
    noteType: 'fact',
  },
  {
    title: 'Wynn stock was up 3.81% today after an analyst upgrade.',
    content:
      'Analysts see an opportunity in the reopening of Macau, China, and its potential to improve earnings through exclusive customers.',
    tagUuids: ['Wynn', 'Gambling', 'China'],
    uuid: '370eadb6-acc5-4f03-8d61-e1405ff9ada9',
    createdDate: '2023-01-03T23:47:34.023Z',
    noteType: 'fact',
  },
  {
    title: 'Google and Meta are losing digital advertising dominance',
    content:
      'Google and Meta combined US digital-ad spending market share was down to 48.4%, the first time under 50% since 2014\nAll marketers want more options, and people spent less time online in 2022\nAmazon further solidified its third place. \nTiktok and Netflix are emerging as strong competitors.',
    tagUuids: ['meta', 'googl', 'amzn', 'nflx'],
    sourceLink: 'wall street journal',
    uuid: 'fb165f43-1d48-436f-a25b-edc859fa5e61',
    createdDate: '2023-01-03T23:39:03.051Z',
    noteType: 'fact',
  },
  {
    title:
      "UCLA invests $4 billion to buy Blackstone's Breit Real-Estate Fund. ",
    content: 'Blackstone guaranteed at least 11.25% annual return ',
    tagUuids: ['bx'],
    uuid: '1103af33-8c20-49cb-8337-8452e930cc77',
    createdDate: '2023-01-03T23:27:00.172Z',
    noteType: 'fact',
  },
  {
    title:
      'Apple hit a new 52-week low and fell below the 2 Trillion market cap.',
    content:
      "\nApple experienced a production shortfall in Dec. Investors doubt those Dec demands can be fully carried forward in 2023.\nFoxconn's COVID-hit iPhone plant is almost back to full production, with its December shipments reaching about 90% of initial plans.\nApp store sales were up 1% YoY in Dec after five straight months of falling.",
    tagUuids: ['aapl'],
    uuid: '52605b7c-1440-43f4-87d4-b60c696a4e2e',
    createdDate: '2023-01-03T23:21:08.786Z',
    noteType: 'fact',
  },
  {
    title:
      "China's currency yuan touches a 4-month high on optimism over economic recovery. ",
    content:
      'The recent COVID outbreak has peaked in most cities.\nA complete return to everyday life may take several months.',
    tagUuids: ['china'],
    uuid: '4f17d9df-b555-41e2-862d-c7cb0c1ef779',
    createdDate: '2023-01-03T22:25:49.736Z',
    noteType: 'fact',
  },
  {
    title: "Tesla's CFO exercised options expiring in 2028 to buy 13.5k shares",
    content:
      '* This could mean CFO thinks Tesla stock is cheap and exercising early allows him to pay lower income tax.\n* He now owns 204K shares.\n',
    tagUuids: ['tsla'],
    sourceLink: 'https://twitter.com/sspencer_smb/status/1608967613534855168',
    uuid: 'e9f50912-b024-4b9e-b812-1df7968d4a2a',
    createdDate: '2022-12-31T10:24:29.312Z',
    noteType: 'fact',
  },
  {
    title: 'Stocks slipped today to end a brutal 2022\n',
    content:
      'Dow Jones Industrial Average was down 8.8%\nS&P 500 was down 19.4%\nNasdaq was down 33.1%.\n\n',
    tagUuids: ['US'],
    uuid: 'd179e694-ee48-4a95-8ba9-74f0eb4d850c',
    noteType: 'fact',
  },
  {
    title: 'CFRA double upgrades Netflix',
    content:
      '* Analyst Kenneth Leon double-upgraded the stock to buy from sell while raising the price target by $85 to $310, reflecting the potential for a 12% upside.\n* Ad-supported tier will Netflix achieve profitability\n',
    tagUuids: ['nflx'],
    uuid: 'e5cdfce2-fea6-4d86-a54f-40cf3b1a0527',
    createdDate: '2022-12-29T22:27:45.967Z',
    noteType: 'fact',
  },
  {
    title:
      'Elon Musk still believes Tesla will be the most valuable company on Earth.',
    content:
      'He said in a companywide email: “don’t be too bothered by stock market craziness. As we demonstrate continued excellent performance, the market will recognize that. Long-term, I believe very much that Tesla will be the most valuable company on Earth!\n\n”',
    tagUuids: ['tsla'],
    uuid: '96f2c8c8-6d44-43e1-9130-d0197608dae5',
    createdDate: '2022-12-29T02:58:43.667Z',
    noteType: 'fact',
  },
  {
    title:
      'Marc Benioff tells Salesforce workers that new employees are ‘facing lower productivity’',
    content:
      'Marc Benioff, cofounder and co-CEO of Salesforce, said in a Slack message to employees on Friday that the company’s newest workers weren’t productive enough.\n\n“Are we not building tribal knowledge with new employees without an office culture?” Benioff asked in a message viewed by CNBC.',
    tagUuids: ['crm', 'Marc Benioff'],
    sourceLink:
      'https://www.cnbc.com/2022/12/16/marc-benioff-says-newer-salesforce-employees-are-less-productive.html',
    uuid: '8420788c-76f1-4238-88b4-bb3bc24ef1c8',
    createdDate: '2022-12-17T16:12:27.348Z',
    noteType: 'fact',
  },
];
