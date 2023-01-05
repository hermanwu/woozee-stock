import { IndustryType } from 'src/app/facts/data/area.enum';
import { Index } from 'src/app/macro/macro.enum';
import { TimeFrame } from 'src/app/shared/components/stats-display/stats-display.interface';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import {
  convertDateToUTC,
  getUtcDate,
} from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    title:
      '爆红人工智能软件ChatGPT的母公司，OpenAI考虑接受新一轮的投资。估值达到2021年的两倍',
    content:
      '投资者包括风投机构Thrive Capital 和 Founders Fund\n新估值将达到290亿美元，两倍于2021年140亿估值\n已有投资人包括微软。微软希望ChatGPT能够被用于Bing搜索引擎\n',
    tags: ['msft', 'googl'],
    sourceLink:
      'https://seekingalpha.com/news/3922500-chatgpt-creator-openai-in-talks-for-tender-offer-at-29b-valuation-report',
    uuid: '07673046-13d4-49a1-8415-11f50845116f',
    date: '2023-01-05T21:34:29.386Z',
  },
  {
    title: '零售商Bed Bath & Beyond考虑申请破产保护',
    content:
      '公司声称即将用完现金，预计第三季度损失3.85亿美元\nBed Bath & Beyond今天下跌30%',
    tags: ['bbby'],
    sourceLink: 'https://www.cnbc.com/quotes/BBBY',
    uuid: '5c61fcb6-fbaf-42dc-8e2e-22a55d78f762',
    date: '2023-01-05T21:20:33.129Z',
  },
  {
    title: '加密货币银行Silvergate宣布本季度用户资产较三个月前下跌60%',
    content:
      '很多用户已经不再相信机构能管理他们的资产，所以把资产都直接取出放入冷钱包\nSilvergate卖出50亿美元债务证券来填补资产流失。\n该消息导致加密货币关联股票大跌: Silvergate下跌42%，Coinbase下跌10.8%.\n',
    tags: ['crypto'],
    sourceLink:
      'https://www.cnbc.com/2023/01/05/silvergate-capital-tanks-40percent-after-crypto-bank-discloses-massive-q4-withdrawals.html',
    uuid: '68be3051-1f87-478b-8796-96a920bb55c3',
    date: '2023-01-05T21:08:36.765Z',
  },
  {
    title: '亚马逊将超预期裁员18000人\n\n',
    content:
      "主要裁员发生在Amazon Store和 Amazon's People Experience and Technology Solutions(PXT)",
    tags: ['amzn'],
    sourceLink:
      'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-role-eliminations',
    uuid: 'cd00fe45-9ddc-4ae6-87d8-0da05f9c0aef',
    date: '2023-01-05T20:58:47.875Z',
  },
  {
    title: '微软CEO：未来两年可能是科技行业最具挑战的两年\n',
    content: 'CEO Satya Nadella指出全球很多地方正在经历经济衰退',
    tags: ['msft'],
    uuid: '72cb28ec-61ae-4134-b924-7074dd05a58c',
    date: '2023-01-05T20:52:25.731Z',
  },

  {
    title: '​特斯拉12月总共交付55796辆电动汽车​\n',
    content:
      '这个数字是5个月来的最低水平，但有很大原因是因为疫情导致的\n上海工厂2022总交付年化增长50%\n上海工厂目前产能过剩，在12月24日到1月2日间进行了停产\n比亚迪在12月总共交付234598辆纯电或混电汽车',
    tags: ['tesla', 'EV'],
    uuid: 'bc4c6cf4-f51c-4ead-ad78-0d08b984b75a',
    date: '2023-01-05T15:50:34.363Z',
  },
  {
    title:
      'PayPal was up 4.72%, and Block was up 2.86% today after analysts upgrades',
    content:
      'Baird upgraded Block to Outperform, and Truist upgraded Paypal to Buy. Both predict 20%+ gain in 2023\nAnalysts believe both stocks have strong cash positions and were adequately penalized in 2022. ',
    tags: ['Block', 'Paypal', 'Fintech'],
    uuid: '1c931ced-86a0-40e1-b352-99ad2e74cac9',
    date: '2023-01-04T00:00:11.585Z',
  },
  {
    title: 'Wynn stock was up 3.81% today after an analyst upgrade.',
    content:
      'Analysts see an opportunity in the reopening of Macau, China, and its potential to improve earnings through exclusive customers.',
    tags: ['Wynn', 'Gambling', 'China'],
    uuid: '370eadb6-acc5-4f03-8d61-e1405ff9ada9',
    date: '2023-01-03T23:47:34.023Z',
  },
  {
    title: 'Google and Meta are losing digital advertising dominance',
    content:
      'Google and Meta combined US digital-ad spending market share was down to 48.4%, the first time under 50% since 2014\nAll marketers want more options, and people spent less time online in 2022\nAmazon further solidified its third place. \nTiktok and Netflix are emerging as strong competitors.',
    tags: ['meta', 'googl', 'amzn', 'nflx'],
    sourceLink: 'wall street journal',
    uuid: 'fb165f43-1d48-436f-a25b-edc859fa5e61',
    date: '2023-01-03T23:39:03.051Z',
  },
  {
    title:
      "UCLA invests $4 billion to buy Blackstone's Breit Real-Estate Fund. ",
    content: 'Blackstone guaranteed at least 11.25% annual return ',
    tags: ['bx'],
    uuid: '1103af33-8c20-49cb-8337-8452e930cc77',
    date: '2023-01-03T23:27:00.172Z',
  },
  {
    title:
      'Apple hit a new 52-week low and fell below the 2 Trillion market cap.',
    content:
      "\nApple experienced a production shortfall in Dec. Investors doubt those Dec demands can be fully carried forward in 2023.\nFoxconn's COVID-hit iPhone plant is almost back to full production, with its December shipments reaching about 90% of initial plans.\nApp store sales were up 1% YoY in Dec after five straight months of falling.",
    tags: ['aapl'],
    uuid: '52605b7c-1440-43f4-87d4-b60c696a4e2e',
    date: '2023-01-03T23:21:08.786Z',
  },
  {
    title:
      "China's currency yuan touches a 4-month high on optimism over economic recovery. ",
    content:
      'The recent COVID outbreak has peaked in most cities.\nA complete return to everyday life may take several months.',
    tags: ['china'],
    uuid: '4f17d9df-b555-41e2-862d-c7cb0c1ef779',
    date: '2023-01-03T22:25:49.736Z',
  },
  {
    title: "Tesla's CFO exercised options expiring in 2028 to buy 13.5k shares",
    content:
      '* This could mean CFO thinks Tesla stock is cheap and exercising early allows him to pay lower income tax.\n* He now owns 204K shares.\n',
    tags: ['tsla'],
    sourceLink: 'https://twitter.com/sspencer_smb/status/1608967613534855168',
    uuid: 'e9f50912-b024-4b9e-b812-1df7968d4a2a',
    date: '2022-12-31T10:24:29.312Z',
  },
  {
    title: 'Stocks slipped today to end a brutal 2022\n',
    content:
      'Dow Jones Industrial Average was down 8.8%\nS&P 500 was down 19.4%\nNasdaq was down 33.1%.\n\n',
    tags: ['US'],
    uuid: 'd179e694-ee48-4a95-8ba9-74f0eb4d850c',
  },
  {
    title: 'CFRA double upgrades Netflix',
    content:
      '* Analyst Kenneth Leon double-upgraded the stock to buy from sell while raising the price target by $85 to $310, reflecting the potential for a 12% upside.\n* Ad-supported tier will Netflix achieve profitability\n',
    tags: ['nflx'],
    uuid: 'e5cdfce2-fea6-4d86-a54f-40cf3b1a0527',
    date: '2022-12-29T22:27:45.967Z',
  },
  {
    title:
      'Elon Musk still believes Tesla will be the most valuable company on Earth.',
    content:
      'He said in a companywide email: “don’t be too bothered by stock market craziness. As we demonstrate continued excellent performance, the market will recognize that. Long-term, I believe very much that Tesla will be the most valuable company on Earth!\n\n”',
    tags: ['tsla'],
    uuid: '96f2c8c8-6d44-43e1-9130-d0197608dae5',
    date: '2022-12-29T02:58:43.667Z',
  },
  {
    title:
      'Marc Benioff tells Salesforce workers that new employees are ‘facing lower productivity’',
    content:
      'Marc Benioff, cofounder and co-CEO of Salesforce, said in a Slack message to employees on Friday that the company’s newest workers weren’t productive enough.\n\n“Are we not building tribal knowledge with new employees without an office culture?” Benioff asked in a message viewed by CNBC.',
    tags: ['crm', 'Marc Benioff'],
    sourceLink:
      'https://www.cnbc.com/2022/12/16/marc-benioff-says-newer-salesforce-employees-are-less-productive.html',
    uuid: '8420788c-76f1-4238-88b4-bb3bc24ef1c8',
    date: '2022-12-17T16:12:27.348Z',
  },
  {
    targets: ['orcl'],
    title:
      'Oracle released quarterly earnings that beat both top and bottom lines ',
    content:
      'Total revenue grew 18% YoY \nQ2 Cloud Revenue was (IaaS plus SaaS) $3.8 billion, up 43%',
    tags: ['orcl', ' cloud', ' oracle'],
    rating: 'Bullish',
    date: '2022-12-13T14:22:49.016Z',
  },
  {
    title: 'Amazon will lay off more workers in 2023',
    date: getUtcDate(2022, 11, 18),
    details: [
      'Amazon CEO Andy Jassy:"Our annual planning process extends into the new year, which means there will be more role reductions."',
      '"There will be reductions in our Stores and PXT organizations)"',
    ],
    tags: ['amzn'],
    source: Source.company,
  },
  {
    title: 'October CPI report was released',
    date: getUtcDate(2022, 11, 10),
    details: [
      'CPI was up 0.4% MoM, and 7.7% YoY as shelter, gasoline, and food increased.',
    ],
    tags: ['CPI', RegionCode.us],
  },
  {
    title:
      'Credit Suisse issued warning about economic outlook:‘The worst is yet to come’',
    takeAway: 'Economy will not be better until rates stop increasing.',
    date: getUtcDate(2022, 9, 28),
    tags: ['Credit Suisse', 'Fed Rates'],
    eventType: EventType.opinions,
    details: [
      'Crucially, the rising share of price categories above central bank inflation target levels shows inflation is broadening out from a limited group of supply shock related drivers to more general inflation',
      'Higher rates combine with ongoing shocks to lead us to cut GDP forecasts.',
      'The euro area and UK are in recession, China is in a growth recession, and the US is flirting with recession.',
    ],
  },
  {
    title:
      'Apple ditched the plan to increase iphone production after seeing flattened demand',
    takeAway:
      'Demand of consumer product is likely to decrease during a recession.',
    date: getUtcDate(2022, 9, 28),
    eventType: EventType.stock,
    tags: ['aapl'],
  },
  {
    title:
      'FTX won bid to buy bankrupt crypto lender Voyager’s assets for $1.4 billion',
    date: getUtcDate(2022, 9, 27),
    eventType: EventType.industry,
    tags: ['crypto', 'FTX', 'Yoyager'],
  },
  {
    date: getUtcDate(2022, 9, 27),
    title: 'Cathie Wood says she is bullish on Tesla, Roku, and bitcoin',
    eventType: EventType.opinions,
    tags: ['Cathie Wood', 'TSLA', 'ROKU', 'Bitcoin'],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'WTI crude prices climbed 3.2% as as Putin announced partial mobilization',

    eventType: EventType.macro,
    tags: ['Crude Oil', 'War'],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'Bank of England continued tightening and raised rates by 50 basis points',
    eventType: EventType.macro,
    tags: ['Fed Rate', 'England'],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'Japan government moved to boost yen for first time in more than 20 years',
    eventType: EventType.macro,
    tags: ['Fed Rate', 'Japan'],
    details: ['Japanese yen has fallen to a 24-year low against U.S dollar.'],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'Qualcomm CEO announed its automotive design-win pipeline has now climbed to $30B from $19B',
    eventType: EventType.stock,
    tags: ['qcom'],
    details: ['Starting in 2023, Qualcomm will be used in Mercedes-Benz cars.'],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'US stock market finished Thursday with more losses after Fed handed another 75bps rate hike yesterday.',
    eventType: EventType.overview,
    details: [
      '“The chances of a soft landing are likely to diminish” said the Fed Chair J-Pow.',
    ],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title: 'Costco released latest financial results that beat estimates',
    eventType: EventType.earnings,
    tags: ['cost'],
    details: [
      'For now, Costco will not raise membership price. “There are no specific plans regarding a fee increase at this time,” said Chief Financial Officer Richard Galanti on the earnings conference call. However, he continued, “it’s a question of when, not if.”',
    ],
  },
  {
    date: getUtcDate(2022, 9, 22),
    title:
      'DocuSign names former Google advertising executive Allan Thygesen as new CEO',
    eventType: EventType.stock,
    tags: ['docu'],
    details: [
      "Thygesen has spent past 12 years at Google and led Google's $100B+ advertising business in North and South America.",
    ],
  },
  {
    date: getUtcDate(2022, 9, 21),
    title:
      'Ford lost 12% as it is facing an extra $1B inflation-related supplier costs.',
    eventType: EventType.stock,
    tags: ['f', 'ev'],
    details: ['Up to 45k vehicles, mostly trucks and SUVs have been impacted'],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.macro,
    title:
      'Dollar index hit another 20-year high against other currencies since Russia started to invade Ukraine.',
    tags: ['Currency'],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.industry,
    title:
      'Nasdaq plans to launch a crypto custody service as company sees increasing digital currencies demand ',
    tags: [IndustryType.crypto],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.industry,
    title:
      'FTX is in talks with investors to raise up to $1B that would value company at $32B',
    tags: [IndustryType.crypto],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.macro,
    tags: ['Russia-Ukriain War'],
    title:
      "Russia president Putin announced 'partial military mobilization' and called up 300,000 reservists for the war.",
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.stock,
    tags: ['meta'],
    title:
      'Meta reportedly sets plans for 10% cost cuts and gave some workers a month to find a new role at the company.',
    details: [],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.macro,
    tags: ['bond, treasury yield'],
    title: '2-year Treasury surges above 4.1%, highest level since 2007.',
    details: [
      '2-year Treasury is now higher than 10-year Treasury (3.64%), which is a popluar indicator of a recession.',
    ],
  },
  {
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.overview,
    tags: ['fed rate'],
    title:
      'As expected, Federal Reserve boosts another 75 basis points, brining it to 3% - 3.25%, the highest point since 2008',
    details: [
      'This is the third boost in a row',
      'Fed will also continue shrinking its balance sheet.',
      'The economy will begin to slow more as it is more costly for businesses to borrow money.',
      'Fed now expected to see rates going to nearly 4.5% by the end of the year.',
    ],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 21),
    eventType: EventType.stock,
    tags: ['crm'],
    title:
      'Salesforce announced a revenue target of $50B for 2026, which represents ~17% compound annual growth.',
    details: [
      'The forecast revenue for fiscal 2023 is $31B, presenting exactly ~17% growth from $26.5B in fiscal 2022.',
      'Company also aims for 25% opertaing margin in 2026.',
    ],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.macro,
    tags: ['inflation', 'cpi', 'canada'],
    title:
      'Canada inflation rate slowed to 7% in August, faster than expected.',
    details: ['The slowdown was largely driven by gasoline price fall'],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.stock,
    tags: ['nvda'],
    title: 'Nvidia unveiled new products during annual GTC conference.',
    details: [
      'New cloud servicess to support AI workflows',
      'New generation of GeForce RTX GPUs',
      'First GPUs based on the new NVIDIA Ada Lovelace architecture for gamers and creators.',
      'Grace CPU and Grace Hopper Superchip for enterprises',
      'New Thor superchip for Autonomous Vehicles, Robotics, Medical Instruments and More',
    ],
    sourceLink:
      'https://blogs.nvidia.com/blog/2022/09/20/keynote-gtc-nvidia-ceo/',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.stock,
    tags: ['ual'],
    title:
      'United Airlines paused 25 Boeing 777 airplanes operation after findig them failed to perform inspection on wing panels.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.stock,
    tags: ['bynd'],
    title:
      "Beyond Meat COO was suspended after arrest for allegedly biting man's nose.",
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.overview,
    title:
      'All 11 sectors of the S&P fell today as investors waiting for the Fed rate decision tomorrow.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.stock,
    tags: ['coin'],
    title:
      'Coinbase plan to increase fees for those trading less than $250m a month.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    eventType: EventType.stock,
    tags: ['meta'],
    title:
      'Meta said that it would integrate WhatsApp with Salesforce so business can chat with their customers through WhatsApp messaging service',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    eventType: EventType.industry,
    tags: ['bnpl', 'pypl', 'sq', 'afrm'],
    title:
      'The U.S. Consumer Financial Protection Bureau (CFPB) plans to start regulating "buy-now, pay-later" (BNPL) companies like Affirm due to worries that consumers are not protected enough.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    eventType: EventType.stock,
    tags: ['panw'],
    title:
      'Palo Alto Networks is in the process of acquiring cybersecurity startup Apiiro for $600M.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    eventType: EventType.stock,
    tags: ['open'],
    title:
      'Opendoor stock slides after a report saying it is losing money on 42% of all transactions in August',
    details: [
      'This data exposed the risks of the iBuying business, which could be hugely affected by macro environment',
      'Last year, Zillow pulled out of iBuying business after concluding that home prices was too unpredictable ',
    ],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    eventType: EventType.industry,
    tags: ['crypto'],
    title: 'Etherum sank near 25% last week after the Merge is completed.',
    details: [
      'After the Merge, over 40% of the blocks were added by two addresses: Coinbase and Lido',
      '50% of the nodes are hosted on Amazon Web Services',
      'The result raised concerns about the decentralization as these centralized institutions controlled majority of the network.',
    ],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    eventType: EventType.overview,
    title:
      'S&P moved higher around the 3900 support level after a volatile trading session as investors waiting for the Fed interest-rate decision this week.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'Ford expected inflation-related supplier costs during Q3 to be $1B higher than previous estimated',
    eventType: EventType.stock,
    tags: ['f', 'ev'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title: 'Cruise robotaxi service to expand to Austin, Phoenix in 2022',
    eventType: EventType.industry,
    tags: [IndustryType.selfDriving, IndustryType.ai],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'The benchmark 10-year Treasury yield gained 6 basis points to 3.518%, hitting its highest level since April 2011 as mortgage rates keep moving higher.',

    eventType: EventType.macro,
    tags: ['Treasury Yields'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      "Fed's two-day meeting will begin Tuesday, with the market expecting another 75 basis point hike.",

    eventType: EventType.macro,
    tags: ['Fed Rate'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'CVOID-19 vaccine stocks fell as President Biden said the pandemic is over.',
    details: [
      'President Joe Biden said "We still have a problem with COVID. We are still doing a lot of work on it. But the pandemic is over.',
      'Both Moderna and Novavax dropped ~8%',
    ],
    eventType: EventType.industry,
    tags: ['covid', 'mrna', 'nvax', 'covid'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Major averages were on pace toward their fourth losing week in five after the surprisingly hot CPI report.',
    eventType: EventType.overview,
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Disney CEO said ESPN is looking for a partner to do the sports gambling business.',
    eventType: EventType.stock,
    tags: ['dis'],
    details: [
      'He emphasized that Walt Disney Company would never enter the sports betting business by itself.',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    tags: ['txn'],
    title:
      'Texas Instruments raised its dividend by 8% to $1.24 and authorized a $15B buyback',
    eventType: EventType.stock,
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Roblox (NYSE:RBLX) on Thursday reported a Y/Y rise for the month of Aug. ',
    eventType: EventType.stock,
    tags: ['rblx'],
    details: [
      'Estimated revenue was between $208M and $211M, up 22% to 24% Y/Y.',
      'Estimated average bookings per daily active user was down 14% to 16% Y/Y.',
      'Daily active users in Aug. were 59.9M (+24% Y/Y) and hours engaged were 4.7B, up 18% Y/Y.',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Southwest Airlines noted business travel remains well below the 2019 level and narrowed revenue guidance for the third quarter.',
    eventType: EventType.industry,
    tags: [IndustryType.airline, IndustryType.travel, 'luv'],
    details: [
      'July and August 2022 managed business revenues were down approximately 26% and 32%, respectively, both compared with their respective 2019 levels',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "Bridgewater's Ray Dalio said that inflation rate will stay significantly above what Fed want it to be",
    eventType: EventType.macro,
    tags: ['inflation', 'recession', 'bridgewater', 'ray dalio'],
    details: [
      'His guesstimates is that inflation rate will stay from 4.5% to 6% for the next 10 years and  a economic contraction will be required',
      'He also estimates such a rate would have a twenty-percent negative impact on equity prices.',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Tesla plans on closing some high-cost showrooms and focusing on expanding its services in China.',
    eventType: EventType.stock,
    tags: ['tsla'],
    details: [
      "Tesla's job site has more than 300 service positions open right now.",
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "Roku's SEC filing propped some investors believe that a takeover offer may be coming.",
    eventType: EventType.stock,
    tags: ['roku'],
    details: [
      'Roku ammended its severance benefit plan, in the event of a change control, according to an 8-K filing',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "30-year fixed-rate mortgage averaged 6.02% for the week ending Sep. 15, up from last week's 5.89% average and from 2.86% average a year ago",
    eventType: EventType.macro,
    tags: ['housing', 'mortgage'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title: 'General Motor plans to invest $491M to support EV production',
    eventType: EventType.stock,
    tags: ['gm', 'ev'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Bed Bath and Beyond  listed 56 locations slated for closure including locations in Stamford, Connecticut, Paramus, New Jersey, Tucson, Arizona and Sandusky, Ohio,   ',
    eventType: EventType.stock,
    tags: ['bbby'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Fedex dropped 15% after quarterly results that wildly missed estimates.',
    eventType: EventType.stock,
    tags: ['fdx'],

    details: [
      'Business is impacted by the softness and challenges in Asia and Europe.',
      'Fedex also withdrew its 2023 guidance and announced cost-cutting plan including 90 office closure.',
      'This warnings is dramatically from the optimitics tune two months ago.',
    ],
  },
  {
    uuid: 'n28',
    date: getUtcDate(2022, 9, 15),
    title:
      'Adobe released earnings result and announced acquisition of Figma for $20B dollars.',
    eventType: EventType.earnings,
    tags: ['adbe'],
    details: [
      'Quarterly Revenue increased to 4.43B, ⬆️ Up 12.7% YoY (from 3.94B)',
      'Next Quarter Revenue Forecast increased to 4.52B, ⬆️ Up 10% YoY',
      'Figma is a great company with ~90% gross margin and >150% net dollar retention rate.',
      "Figma is expected to add $200M to $400M ARR to Adobe, which is only 1% - 2% of Adobe's annual revenue.",
      'Adobe paid $20B for $200M - $400M annual revenue, equivalent to 50 - 100 P/S ratio, is too high under current market condition.',
      'However, the Adobe-Figma deal will eliminate competition and remove the possibility of other SaaS giants such as Microsoft or Salesforce, acquiring Figma.',
    ],
  },
  {
    uuid: 'n28',
    date: getUtcDate(2022, 9, 14),
    title:
      'Cathie Wood bought 18 different stocks after the huge selloff on Tuesday.',
    eventType: EventType.investor,
    tags: ['cathie wood', 'arkk'],
    details: [
      'The ARK Innovation ETF purchased 1M shares of various stocks, led by Roku (ROKU) and Zoom (ZM).',
    ],
  },
  {
    uuid: 'n27',
    date: getUtcDate(2022, 9, 14),
    title: 'Twilio announced to layoff 11% of workforce',
    eventType: EventType.stock,
    tags: ['twlo', 'layoff'],
    details: ['It has also reaffirmed third quarter guidance.'],
  },
  {
    uuid: 'n26',
    date: getUtcDate(2022, 9, 14),
    title:
      'Biden announced the approval of $900M funding for EV charging infrastructure',
    eventType: EventType.industry,
    tags: [IndustryType.ev],
    details: [
      'The funding is part of the $1T infrastructure law approved in 2021',
    ],
  },
  {
    uuid: 'n25',
    date: getUtcDate(2022, 9, 14),
    title:
      'Stocks rebounded today after the worst day since 2020 due to hot CPI report.',
    eventType: EventType.overview,
    tags: ['sp500', 'nasdaq'],
  },
  {
    uuid: 'n25',
    date: getUtcDate(2022, 9, 14),
    title: 'Ethereum price outpaces Bitcoin with its merge process coming',
    eventType: EventType.stock,
    tags: ['eth', 'ethereum', 'crypto', 'bitcoin'],
    details: [
      'The merge process would reduce ethereum energy consumption by 99%',
    ],
  },
  {
    uuid: 'n24',
    date: getUtcDate(2022, 9, 14),
    title:
      'Netflix estimated that its ad-supported tier will reach 40M viewers by 2023Q3. Currently, Netflix has 220M subscribers',
    eventType: EventType.stock,
    tags: ['nflx'],
  },
  {
    uuid: 'n23',
    date: getUtcDate(2022, 9, 14),
    eventType: EventType.stock,
    tags: ['tsla'],
    title:
      'Tesla’s Gigafactory expansion in Germany has been delayed indefinitely',
    details: [
      'City committee has removed the voting plan from the committee agenda',
      'Expansion plan could be paused by Tesla itself due to falling demand',
    ],
  },
  {
    uuid: 'n23',
    date: getUtcDate(2022, 9, 13),
    eventType: EventType.stock,
    tags: ['aapl'],
    title: 'Apple plans to sell ads in new spots in the App Store - CNBC',
    details: [
      'Apple has been planning to double its digital advertising business workforce.',
    ],
  },
  {
    uuid: 'n22',
    date: getUtcDate(2022, 9, 13),
    eventType: EventType.stock,
    tags: ['hood', 'crypto', 'bitcoin'],
    title:
      'Bitcoin is the most popular recurring investment on Robinhood, according to its CEO',
    details: [
      'This indicates that retail investors view Bitcoin as a long-term investment',
    ],
  },
  {
    uuid: 'n21',
    date: getUtcDate(2022, 9, 13),
    eventType: EventType.macro,
    tags: ['inflation', 'CPI'],
    title:
      'CPI climbs 8.3% YoY in August, which is equivalvent to +0.1% compared to previous month.',
    details: [
      'All indices increased except energy commodities and apparel compared to previous month',
    ],
    stats: [
      { name: 'Core Inflation', changeRate: 0.006, timeFrame: TimeFrame.mtm },
      { name: 'Food', changeRate: 0.008, timeFrame: TimeFrame.mtm },
      { name: 'Shelter', changeRate: 0.007, timeFrame: TimeFrame.mtm },
      {
        name: 'Medical care services',
        changeRate: 0.008,
        timeFrame: TimeFrame.mtm,
      },
    ],
    imageLinks: [
      'https://pbs.twimg.com/media/Fck1g5TakAIU9mR?format=png&name=large',
      'https://pbs.twimg.com/media/Fck1g5SaUAAJGu2?format=jpg&name=large',
    ],
  },
  {
    uuid: 'n20',
    date: getUtcDate(2022, 9, 13),
    eventType: EventType.industry,
    tags: [IndustryType.semi, 'nvda', 'amd', 'mu', 'intc'],
    title: 'Chips stock plunged today after hot CPI report',
    details: [
      'Nvidia was down 9.47%, hit a new 52 week low',
      'AMD was down 8.99%',
      'Intel was down 7.19%',
      'Micron was down 7.46%',
    ],
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 13),
    eventType: EventType.stock,
    tags: ['twtr', 'elon musk'],
    title:
      "Twitter got 98.6% shareholder vote approval of Elon Musk's $44B acquisition deal.",
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    eventType: EventType.macro,
    tags: ['arkk', 'inflation', 'cathie wood'],
    title: 'Cathie Wood warns of deflation ahead of this week’s key price data',
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    eventType: EventType.stock,
    tags: ['aapl'],
    title:
      "iPhone 14 pre-order demand is 'robust,' tracking 'slightly ahead' of iPhone 13: Wedbush",
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    eventType: EventType.stock,
    tags: ['gs'],
    title:
      'Goldman Sachs gets ready to lay off workers as deal activity cools - NYT',
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    eventType: EventType.stock,
    tags: ['mu'],
    title:
      'Micron CEO says company breaking ground on $15B Idaho factory, more plants coming: report',
  },
  {
    uuid: 'n19',
    eventType: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tags: ['GM'],
    title:
      "GM's Cruise preps for rideshare service launch, eyes $1B in revenue",
  },
  {
    uuid: 'n19',
    eventType: EventType.industry,
    date: getUtcDate(2022, 9, 12),
    tags: ['crypto', 'bitcoin'],
    title:
      'Fidelity Investments is considering to allow individual investors to trade bitcoin on its brokerage platform',
  },
  {
    uuid: 'n18',
    eventType: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tickers: ['Googl'],
    sourceLink:
      'https://www.theverge.com/2022/9/12/23348999/google-pixelbook-canceled-team-shut-down',
    title:
      'Google canceled the next version of its Pixelbook computer and has closed down the team that was building it',
  },
  {
    uuid: 'n17',
    eventType: EventType.macro,
    date: getUtcDate(2022, 9, 12),
    tags: [Index.nasdaq, Index.sp500],
    title:
      'Stocks close higher for fourth straight session. S&P500 was up 0.71% and ',
  },
  {
    uuid: 'n16',
    eventType: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tickers: ['PTON'],
    title:
      'Peloton Cofounders, John Foley and Hisao Kushi, are leaving the company',
  },
  {
    uuid: 'n15',
    eventType: EventType.macro,
    date: getUtcDate(2022, 9, 9),
    tags: [Index.sp500, Index.nasdaq],
    title:
      'Stock market rallied on Friday and snapped a three-week losing streak wtih a strong performance. Nasdaq was up 4.14% and S&P 500 gained 3.65% for the week.',
  },
  {
    uuid: 'n15',
    eventType: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['hood'],
    title:
      'Robinhood is working on enabling Cardano (ADA) cryptocurrency transfers on its platform.',
  },
  {
    uuid: 'n13',
    eventType: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['oxy'],
    title: 'Warren Buffet increased Occidental ownership to 26.8% from 20%.',
  },
  {
    uuid: 'n13',
    eventType: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['tsla'],
    title: 'Tesla triples deliveries of China-made cars in August.',
  },
  {
    uuid: 'n13',
    eventType: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['shop'],
    title: 'Shopify hires new finance chief.',
  },
  {
    uuid: 'n12',
    eventType: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['rivn'],
    title:
      'Rivian announced partnership with Mercedes Benz Vans to build new EV production together.',
  },
  {
    uuid: 'n11',
    eventType: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['twtr'],
    title: 'Twitter reached $7M settlement with whistleblower complaints',
  },
  {
    uuid: 'n11',
    eventType: EventType.macro,
    tags: ['currency'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Chinese currency continued devaluating, which could have significant impact on Asian-heavy companies',
  },
  {
    uuid: 'n10',
    eventType: EventType.macro,
    tags: ['stock'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'S&P 500 +0.66% and Nasdaq +0.60% today, as they are on pace to snap a 3-week losing streak.',
  },
  {
    uuid: 'n10',
    eventType: EventType.macro,
    tags: ['fed'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Federal Reserve Chair Jerome Powell gave a hawish speech that he is strongly committed to fight inflation.',
  },
  {
    uuid: 'n9',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Zscaler reported quarterly earnings results and revenue growth continued to be strong.',
    tickers: ['zs'],
  },
  {
    uuid: 'n9',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title: 'DocuSign reported Q2 earnings results',
    tickers: ['docu'],
  },
  {
    uuid: 'n8',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title: 'NIO reported 2022 earnings results',
    tickers: ['nio'],
  },
  {
    uuid: 'n8',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title:
      'GameStop stock was up 11% during after hour after announces partnership with crypto exchange FTX',
    tickers: ['gme'],
  },
  {
    uuid: 'n7',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Lululemon released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 1.79B, ⬆️ Up 23.6% (from 1.45B)',
    tickers: ['lulu'],
  },
  {
    uuid: 'n6',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Broadcom released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 8.9B, ⬆️ Up 20.2% (from 7.41B)',
    tickers: ['avgo'],
  },
  {
    uuid: 'n5',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Okta released financial results that beat estimates. However next quarter revenue growth forecast slows down to 33% (vs 43.4% this quarter).',
    tickers: ['okta'],
  },
  {
    uuid: 'n6',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'C3.ai latest earnings results missed estimates. Next quarter revenue growth forecast is only 5.2% (vs 25.6% this quarter).',
    tickers: ['ai'],
  },
  {
    uuid: 'n5',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'MongoDB released Q2 financial results that beat estimates. However next quarter revenue growth guidance slows down to 33% (vs 53% this quarter).',
    tickers: ['mdb'],
  },
  {
    uuid: 'n3',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Crowdstrike released Q2 financial results that beat revenue and earnings estimates.',

    tickers: ['crwd'],
  },
  {
    uuid: 'n3',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n3',
    eventType: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n2',
    title: 'JD.com earnings results beat both revenue and earnings estimates',
    details: [],

    tickers: ['JD'],
    date: new Date('2022-08-22'),
    eventType: EventType.earnings,
    stats: [{ name: 'Revenue ($)', value: 40 * BILLION, changeRate: 0.054 }],

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n1',
    title: '',
    details: [
      'Revenue grew 27% year over year to $1.6 billion',
      'Billings grew 44% year over year to $2.7 billion',
      'Board of directors approved a three-for-one stock split.',
    ],

    tickers: ['PANW'],
    date: new Date('2022-08-22'),
    eventType: EventType.earnings,

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n10',
    title: '',
    details: [
      'Second quarter GAAP operating margin of 11.1%',
      'Zoom also lowered revenue guidance for next quarter.',
    ],

    tickers: ['ZM'],
    date: new Date('2022-08-22'),
    eventType: EventType.earnings,
    stats: [
      {
        name: 'Revenue ($)',
        value: 1099.5 * MILLION,
        changeRate: 0.08,
        timeFrame: TimeFrame.yoy,
      },
    ],
    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n9',
    title:
      'Home sales dropped for a sixth straight month in July to the lowest since the pandemic',
    tickers: ['BILL'],
    date: new Date('2022-08-17'),
    eventType: EventType.macro,
    source: null,
    tags: ['housing'],
    sourceLink: '',
  },
  {
    uuid: 'n8',
    title: 'Bill.com climbed 19% as earnings results beat estimates',
    tickers: ['BILL'],
    date: new Date('2022-08-17'),
    details: [],
    stats: [
      {
        name: 'Organic Core Revenue ($)',
        changeRate: 0.71,
        timeFrame: TimeFrame.yoy,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink: '',
  },
  {
    uuid: 'n7',
    title:
      'Cisco rose 4% as earnings results beat both revenue and profit estimates.',
    tickers: ['CSCO'],
    date: new Date('2022-08-17'),
    details: [
      'Quarter revenue was $13.1 billion, flat year over year.',
      'Strong demand with record full year product orders and backlog.',
      'Next quarter forecast revenue growth is between 2% to 4%.',
    ],
    stats: [
      {
        name: 'Net Income ($)',
        value: 2.815 * BILLION,
        previousValue: 3.009 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://s2.q4cdn.com/951347115/files/doc_financials/2022/q4/Q4FY22-Press-Release_.pdf',
  },
  {
    uuid: 'n6',
    title: "Target's profit plunged 90% as it reduced excess inventory.",
    tickers: ['TGT'],
    date: new Date('2022-08-17'),
    details: [
      'Target reiterated its full-year forecast.',
      'Revenue growth is expected in the low to mid-single digits.',
      '95% of sales were fulfilled by its stores.',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 26.037 * BILLION,
        previousValue: 25.16 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Operating Income ($)',
        value: 0.321 * BILLION,
        previousValue: 2.467 * BILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://investors.target.com/static-files/b6d463d6-6af3-425f-a532-407493eb306f',
  },
  {
    uuid: 'n34',
    title:
      'IonQ shares surged almost 30%, as it continued to grow revenue rapidly.',
    tickers: ['IONQ'],
    date: new Date('2022-08-16'),
    details: [
      'IonQ Aria has increased its computational power by approximately 8x, now reaching 23 algorithmic qubits, up from 20.',
      'Aria will become available to all users of Microsoft Azure Quantum tomorrow.',
      'Announced paid contracts with Airbus and Dow.',
      'IonQ has identified a facility in Seattle, Washington to host its first assembly lines for manufacturing quantum computers.',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 2.6 * MILLION,
        previousValue: 93000,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Next Quarter Forecast Revenue ($)',
        value: 2.75 * MILLION,
        previousValue: 2.6 * MILLION,
        timeFrame: TimeFrame.qoq,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://investors.ionq.com/news/news-details/2022/IonQ-Announces-Second-Quarter-2022-Financial-Results/default.aspx',
  },
  {
    uuid: 'n33',
    title:
      'Tesla rival Li Auto (LI) falls short of estimates, delivering 28687 EVs on Q2',
    tickers: ['LI'],
    date: new Date('2022-08-15'),
    details: [
      'The miss was mainly due to COVID lockdown in Q2',
      'Q3 is expected to deliver between 27,000 - 29,000 vehicles, up 7.5% - 15.5% YoY, lower than the estimates.',
    ],
    stats: [
      {
        name: 'Vehicle Deliveries',
        value: 28687,
        previousValue: 17575,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Total Revenues ($)',
        value: 1.3 * BILLION,
        changeRate: 0.733,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Gross Profit',
        value: 280.4 * MILLION,
        changeRate: 0.971,
        timeFrame: TimeFrame.yoy,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n32',
    title:
      'Rivian lost $1.7 billion in the second quarter as production ramps up.',
    tickers: ['RIVN'],
    date: new Date('2022-08-11'),
    content: 'Revenue beat the expectations while earnings missed estimates.',
    stats: [
      {
        name: 'Cash and equivalents remaining',
        value: 15.5 * BILLION,
        previousValue: 17 * BILLION,
        timeFrame: TimeFrame.qoq,
      },
      {
        name: 'Preorders',
        value: 98000,
        previousValue: 90000,
        timeFrame: TimeFrame.qoq,
      },
      {
        name: 'Vehicle Produced',
        value: 4401,
        previousValue: 2553,
        timeFrame: TimeFrame.qoq,
      },
    ],
    eventType: EventType.earnings,
    source: Source.OFFICIAL,
  },
];
