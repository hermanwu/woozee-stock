import { IndustryType } from 'src/app/facts/data/area.enum';
import { Index } from 'src/app/macro/macro.enum';
import { TimeFrame } from 'src/app/shared/components/stats-display/stats-display.interface';
import {
  convertDateToUTC,
  getUtcDate,
} from 'src/app/shared/functions/getUtcDate.function';
import { BILLION, MILLION } from 'src/app/shared/numbers/number.model';
import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    date: getUtcDate(2022, 9, 21),
    title:
      'Ford lost 12% as it is facing an extra $1B inflation-related supplier costs.',
    type: EventType.stock,
    tags: ['f', 'ev'],
    content: ['Up to 45k vehicles, mostly trucks and SUVs have been impacted'],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.macro,
    title:
      'Dollar index hit another 20-year high against other currencies since Russia started to invade Ukraine.',
    tags: ['Currency'],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.industry,
    title:
      'Nasdaq plans to launch a crypto custody service as company sees increasing digital currencies demand ',
    tags: [IndustryType.crypto],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.industry,
    title:
      'FTX is in talks with investors to raise up to $1B that would value company at $32B',
    tags: [IndustryType.crypto],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.macro,
    tags: ['Russia-Ukriain War'],
    title:
      "Russia president Putin announced 'partial military mobilization' and called up 300,000 reservists for the war.",
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.stock,
    tags: ['meta'],
    title:
      'Meta reportedly sets plans for 10% cost cuts and gave some workers a month to find a new role at the company.',
    content: [],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.macro,
    tags: ['bond, treasury yield'],
    title: '2-year Treasury surges above 4.1%, highest level since 2007.',
    content: [
      '2-year Treasury is now higher than 10-year Treasury (3.64%), which is a popluar indicator of a recession.',
    ],
  },
  {
    date: getUtcDate(2022, 9, 21),
    type: EventType.overview,
    tags: ['fed rate'],
    title:
      'As expected, Federal Reserve boosts another 75 basis points, brining it to 3% - 3.25%, the highest point since 2008',
    content: [
      'This is the third boost in a row',
      'Fed will also continue shrinking its balance sheet.',
      'The economy will begin to slow more as it is more costly for businesses to borrow money.',
      'Fed now expected to see rates going to nearly 4.5% by the end of the year.',
    ],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 21),
    type: EventType.stock,
    tags: ['crm'],
    title:
      'Salesforce announced a revenue target of $50B for 2026, which represents ~17% compound annual growth.',
    content: [
      'The forecast revenue for fiscal 2023 is $31B, presenting exactly ~17% growth from $26.5B in fiscal 2022.',
      'Company also aims for 25% opertaing margin in 2026.',
    ],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    type: EventType.macro,
    tags: ['inflation', 'cpi', 'canada'],
    title:
      'Canada inflation rate slowed to 7% in August, faster than expected.',
    content: ['The slowdown was largely driven by gasoline price fall'],
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    type: EventType.stock,
    tags: ['nvda'],
    title: 'Nvidia unveiled new products during annual GTC conference.',
    content: [
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
    type: EventType.stock,
    tags: ['ual'],
    title:
      'United Airlines paused 25 Boeing 777 airplanes operation after findig them failed to perform inspection on wing panels.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    type: EventType.stock,
    tags: ['bynd'],
    title:
      "Beyond Meat COO was suspended after arrest for allegedly biting man's nose.",
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 20),
    type: EventType.overview,
    title:
      'All 11 sectors of the S&P fell today as investors waiting for the Fed rate decision tomorrow.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    type: EventType.stock,
    tags: ['coin'],
    title:
      'Coinbase plan to increase fees for those trading less than $250m a month.',
  },
  {
    uuid: 'n31',
    date: getUtcDate(2022, 9, 20),
    type: EventType.stock,
    tags: ['meta'],
    title:
      'Meta said that it would integrate WhatsApp with Salesforce so business can chat with their customers through WhatsApp messaging service',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    type: EventType.industry,
    tags: ['bnpl', 'pypl', 'sq', 'afrm'],
    title:
      'The U.S. Consumer Financial Protection Bureau (CFPB) plans to start regulating "buy-now, pay-later" (BNPL) companies like Affirm due to worries that consumers are not protected enough.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    type: EventType.stock,
    tags: ['panw'],
    title:
      'Palo Alto Networks is in the process of acquiring cybersecurity startup Apiiro for $600M.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    type: EventType.stock,
    tags: ['open'],
    title:
      'Opendoor stock slides after a report saying it is losing money on 42% of all transactions in August',
    content: [
      'This data exposed the risks of the iBuying business, which could be hugely affected by macro environment',
      'Last year, Zillow pulled out of iBuying business after concluding that home prices was too unpredictable ',
    ],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    type: EventType.industry,
    tags: ['crypto'],
    title: 'Etherum sank near 25% last week after the Merge is completed.',
    content: [
      'After the Merge, over 40% of the blocks were added by two addresses: Coinbase and Lido',
      '50% of the nodes are hosted on Amazon Web Services',
      'The result raised concerns about the decentralization as these centralized institutions controlled majority of the network.',
    ],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    type: EventType.overview,
    title:
      'S&P moved higher around the 3900 support level after a volatile trading session as investors waiting for the Fed interest-rate decision this week.',
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'Ford expected inflation-related supplier costs during Q3 to be $1B higher than previous estimated',
    type: EventType.stock,
    tags: ['f', 'ev'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title: 'Cruise robotaxi service to expand to Austin, Phoenix in 2022',
    type: EventType.industry,
    tags: [IndustryType.selfDriving, IndustryType.ai],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'The benchmark 10-year Treasury yield gained 6 basis points to 3.518%, hitting its highest level since April 2011 as mortgage rates keep moving higher.',

    type: EventType.macro,
    tags: ['Treasury Yields'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      "Fed's two-day meeting will begin Tuesday, with the market expecting another 75 basis point hike.",

    type: EventType.macro,
    tags: ['Fed Rate'],
  },
  {
    uuid: 'n30',
    date: getUtcDate(2022, 9, 19),
    title:
      'CVOID-19 vaccine stocks fell as President Biden said the pandemic is over.',
    content: [
      'President Joe Biden said "We still have a problem with COVID. We are still doing a lot of work on it. But the pandemic is over.',
      'Both Moderna and Novavax dropped ~8%',
    ],
    type: EventType.industry,
    tags: ['covid', 'mrna', 'nvax', 'covid'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Major averages were on pace toward their fourth losing week in five after the surprisingly hot CPI report.',
    type: EventType.overview,
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Disney CEO said ESPN is looking for a partner to do the sports gambling business.',
    type: EventType.stock,
    tags: ['dis'],
    content: [
      'He emphasized that Walt Disney Company would never enter the sports betting business by itself.',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    tags: ['txn'],
    title:
      'Texas Instruments raised its dividend by 8% to $1.24 and authorized a $15B buyback',
    type: EventType.stock,
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Roblox (NYSE:RBLX) on Thursday reported a Y/Y rise for the month of Aug. ',
    type: EventType.stock,
    tags: ['rblx'],
    content: [
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
    type: EventType.industry,
    tags: [IndustryType.airline, IndustryType.travel, 'luv'],
    content: [
      'July and August 2022 managed business revenues were down approximately 26% and 32%, respectively, both compared with their respective 2019 levels',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "Bridgewater's Ray Dalio said that inflation rate will stay significantly above what Fed want it to be",
    type: EventType.macro,
    tags: ['inflation', 'recession', 'bridgewater', 'ray dalio'],
    content: [
      'His guesstimates is that inflation rate will stay from 4.5% to 6% for the next 10 years and  a economic contraction will be required',
      'He also estimates such a rate would have a twenty-percent negative impact on equity prices.',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Tesla plans on closing some high-cost showrooms and focusing on expanding its services in China.',
    type: EventType.stock,
    tags: ['tsla'],
    content: [
      "Tesla's job site has more than 300 service positions open right now.",
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "Roku's SEC filing propped some investors believe that a takeover offer may be coming.",
    type: EventType.stock,
    tags: ['roku'],
    content: [
      'Roku ammended its severance benefit plan, in the event of a change control, according to an 8-K filing',
    ],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      "30-year fixed-rate mortgage averaged 6.02% for the week ending Sep. 15, up from last week's 5.89% average and from 2.86% average a year ago",
    type: EventType.macro,
    tags: ['housing', 'mortgage'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title: 'General Motor plans to invest $491M to support EV production',
    type: EventType.stock,
    tags: ['gm', 'ev'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Bed Bath and Beyond  listed 56 locations slated for closure including locations in Stamford, Connecticut, Paramus, New Jersey, Tucson, Arizona and Sandusky, Ohio,   ',
    type: EventType.stock,
    tags: ['bbby'],
  },
  {
    uuid: 'n29',
    date: getUtcDate(2022, 9, 15),
    title:
      'Fedex dropped 15% after quarterly results that wildly missed estimates.',
    type: EventType.stock,
    tags: ['fdx'],

    content: [
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
    type: EventType.earnings,
    tags: ['adbe'],
    content: [
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
    type: EventType.investor,
    tags: ['cathie wood', 'arkk'],
    content: [
      'The ARK Innovation ETF purchased 1M shares of various stocks, led by Roku (ROKU) and Zoom (ZM).',
    ],
  },
  {
    uuid: 'n27',
    date: getUtcDate(2022, 9, 14),
    title: 'Twilio announced to layoff 11% of workforce',
    type: EventType.stock,
    tags: ['twlo', 'layoff'],
    content: ['It has also reaffirmed third quarter guidance.'],
  },
  {
    uuid: 'n26',
    date: getUtcDate(2022, 9, 14),
    title:
      'Biden announced the approval of $900M funding for EV charging infrastructure',
    type: EventType.industry,
    tags: [IndustryType.ev],
    content: [
      'The funding is part of the $1T infrastructure law approved in 2021',
    ],
  },
  {
    uuid: 'n25',
    date: getUtcDate(2022, 9, 14),
    title:
      'Stocks rebounded today after the worst day since 2020 due to hot CPI report.',
    type: EventType.overview,
    tags: ['sp500', 'nasdaq'],
  },
  {
    uuid: 'n25',
    date: getUtcDate(2022, 9, 14),
    title: 'Ethereum price outpaces Bitcoin with its merge process coming',
    type: EventType.stock,
    tags: ['eth', 'ethereum', 'crypto', 'bitcoin'],
    content: [
      'The merge process would reduce ethereum energy consumption by 99%',
    ],
  },
  {
    uuid: 'n24',
    date: getUtcDate(2022, 9, 14),
    title:
      'Netflix estimated that its ad-supported tier will reach 40M viewers by 2023Q3. Currently, Netflix has 220M subscribers',
    type: EventType.stock,
    tags: ['nflx'],
  },
  {
    uuid: 'n23',
    date: getUtcDate(2022, 9, 14),
    type: EventType.stock,
    tags: ['tsla'],
    title:
      'Tesla’s Gigafactory expansion in Germany has been delayed indefinitely',
    content: [
      'City committee has removed the voting plan from the committee agenda',
      'Expansion plan could be paused by Tesla itself due to falling demand',
    ],
  },
  {
    uuid: 'n23',
    date: getUtcDate(2022, 9, 13),
    type: EventType.stock,
    tags: ['aapl'],
    title: 'Apple plans to sell ads in new spots in the App Store - CNBC',
    content: [
      'Apple has been planning to double its digital advertising business workforce.',
    ],
  },
  {
    uuid: 'n22',
    date: getUtcDate(2022, 9, 13),
    type: EventType.stock,
    tags: ['hood', 'crypto', 'bitcoin'],
    title:
      'Bitcoin is the most popular recurring investment on Robinhood, according to its CEO',
    content: [
      'This indicates that retail investors view Bitcoin as a long-term investment',
    ],
  },
  {
    uuid: 'n21',
    date: getUtcDate(2022, 9, 13),
    type: EventType.macro,
    tags: ['inflation', 'CPI'],
    title:
      'CPI climbs 8.3% YoY in August, which is equivalvent to +0.1% compared to previous month.',
    content: [
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
    type: EventType.industry,
    tags: [IndustryType.semi, 'nvda', 'amd', 'mu', 'intc'],
    title: 'Chips stock plunged today after hot CPI report',
    content: [
      'Nvidia was down 9.47%, hit a new 52 week low',
      'AMD was down 8.99%',
      'Intel was down 7.19%',
      'Micron was down 7.46%',
    ],
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 13),
    type: EventType.stock,
    tags: ['twtr', 'elon musk'],
    title:
      "Twitter got 98.6% shareholder vote approval of Elon Musk's $44B acquisition deal.",
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    type: EventType.macro,
    tags: ['arkk', 'inflation', 'cathie wood'],
    title: 'Cathie Wood warns of deflation ahead of this week’s key price data',
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    type: EventType.stock,
    tags: ['aapl'],
    title:
      "iPhone 14 pre-order demand is 'robust,' tracking 'slightly ahead' of iPhone 13: Wedbush",
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    type: EventType.stock,
    tags: ['gs'],
    title:
      'Goldman Sachs gets ready to lay off workers as deal activity cools - NYT',
  },
  {
    uuid: 'n19',
    date: getUtcDate(2022, 9, 12),
    type: EventType.stock,
    tags: ['mu'],
    title:
      'Micron CEO says company breaking ground on $15B Idaho factory, more plants coming: report',
  },
  {
    uuid: 'n19',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tags: ['GM'],
    title:
      "GM's Cruise preps for rideshare service launch, eyes $1B in revenue",
  },
  {
    uuid: 'n19',
    type: EventType.industry,
    date: getUtcDate(2022, 9, 12),
    tags: ['crypto', 'bitcoin'],
    title:
      'Fidelity Investments is considering to allow individual investors to trade bitcoin on its brokerage platform',
  },
  {
    uuid: 'n18',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tickers: ['Googl'],
    sourceLink:
      'https://www.theverge.com/2022/9/12/23348999/google-pixelbook-canceled-team-shut-down',
    title:
      'Google canceled the next version of its Pixelbook computer and has closed down the team that was building it',
  },
  {
    uuid: 'n17',
    type: EventType.macro,
    date: getUtcDate(2022, 9, 12),
    tags: [Index.nasdaq, Index.sp500],
    title:
      'Stocks close higher for fourth straight session. S&P500 was up 0.71% and ',
  },
  {
    uuid: 'n16',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 12),
    tickers: ['PTON'],
    title:
      'Peloton Cofounders, John Foley and Hisao Kushi, are leaving the company',
  },
  {
    uuid: 'n15',
    type: EventType.macro,
    date: getUtcDate(2022, 9, 9),
    tags: [Index.sp500, Index.nasdaq],
    title:
      'Stock market rallied on Friday and snapped a three-week losing streak wtih a strong performance. Nasdaq was up 4.14% and S&P 500 gained 3.65% for the week.',
  },
  {
    uuid: 'n15',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['hood'],
    title:
      'Robinhood is working on enabling Cardano (ADA) cryptocurrency transfers on its platform.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: getUtcDate(2022, 9, 9),
    tickers: ['oxy'],
    title: 'Warren Buffet increased Occidental ownership to 26.8% from 20%.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['tsla'],
    title: 'Tesla triples deliveries of China-made cars in August.',
  },
  {
    uuid: 'n13',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['shop'],
    title: 'Shopify hires new finance chief.',
  },
  {
    uuid: 'n12',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['rivn'],
    title:
      'Rivian announced partnership with Mercedes Benz Vans to build new EV production together.',
  },
  {
    uuid: 'n11',
    type: EventType.stock,
    date: convertDateToUTC(new Date('2022-09-08')),
    tickers: ['twtr'],
    title: 'Twitter reached $7M settlement with whistleblower complaints',
  },
  {
    uuid: 'n11',
    type: EventType.macro,
    tags: ['currency'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Chinese currency continued devaluating, which could have significant impact on Asian-heavy companies',
  },
  {
    uuid: 'n10',
    type: EventType.macro,
    tags: ['stock'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'S&P 500 +0.66% and Nasdaq +0.60% today, as they are on pace to snap a 3-week losing streak.',
  },
  {
    uuid: 'n10',
    type: EventType.macro,
    tags: ['fed'],
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Federal Reserve Chair Jerome Powell gave a hawish speech that he is strongly committed to fight inflation.',
  },
  {
    uuid: 'n9',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title:
      'Zscaler reported quarterly earnings results and revenue growth continued to be strong.',
    tickers: ['zs'],
  },
  {
    uuid: 'n9',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-08')),
    title: 'DocuSign reported Q2 earnings results',
    tickers: ['docu'],
  },
  {
    uuid: 'n8',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title: 'NIO reported 2022 earnings results',
    tickers: ['nio'],
  },
  {
    uuid: 'n8',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-07')),
    title:
      'GameStop stock was up 11% during after hour after announces partnership with crypto exchange FTX',
    tickers: ['gme'],
  },
  {
    uuid: 'n7',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Lululemon released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 1.79B, ⬆️ Up 23.6% (from 1.45B)',
    tickers: ['lulu'],
  },
  {
    uuid: 'n6',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-09-01')),
    title:
      'Broadcom released earnings results that beat estimates. 📊 Next Quarter Revenue Forecast increased to 8.9B, ⬆️ Up 20.2% (from 7.41B)',
    tickers: ['avgo'],
  },
  {
    uuid: 'n5',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Okta released financial results that beat estimates. However next quarter revenue growth forecast slows down to 33% (vs 43.4% this quarter).',
    tickers: ['okta'],
  },
  {
    uuid: 'n6',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'C3.ai latest earnings results missed estimates. Next quarter revenue growth forecast is only 5.2% (vs 25.6% this quarter).',
    tickers: ['ai'],
  },
  {
    uuid: 'n5',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'MongoDB released Q2 financial results that beat estimates. However next quarter revenue growth guidance slows down to 33% (vs 53% this quarter).',
    tickers: ['mdb'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-31')),
    title:
      'Crowdstrike released Q2 financial results that beat revenue and earnings estimates.',

    tickers: ['crwd'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n3',
    type: EventType.earnings,
    date: convertDateToUTC(new Date('2022-08-30')),
    title:
      'Chewy released 2022 Q2 financial results that missed revenue estimates with weak forecasts.',

    tickers: ['chwy'],
  },
  {
    uuid: 'n2',
    title: 'JD.com earnings results beat both revenue and earnings estimates',
    content: [],

    tickers: ['JD'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,
    stats: [{ name: 'Revenue ($)', value: 40 * BILLION, changeRate: 0.054 }],

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n1',
    title: '',
    content: [
      'Revenue grew 27% year over year to $1.6 billion',
      'Billings grew 44% year over year to $2.7 billion',
      'Board of directors approved a three-for-one stock split.',
    ],

    tickers: ['PANW'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,

    source: null,
    tags: [],
    sourceLink:
      'https://investors.zoom.us/news-releases/news-release-details/zoom-video-communications-reports-financial-results-second',
  },
  {
    uuid: 'n10',
    title: '',
    content: [
      'Second quarter GAAP operating margin of 11.1%',
      'Zoom also lowered revenue guidance for next quarter.',
    ],

    tickers: ['ZM'],
    date: new Date('2022-08-22'),
    type: EventType.earnings,
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
    type: EventType.macro,
    source: null,
    tags: ['housing'],
    sourceLink: '',
  },
  {
    uuid: 'n8',
    title: 'Bill.com climbed 19% as earnings results beat estimates',
    tickers: ['BILL'],
    date: new Date('2022-08-17'),
    content: [],
    stats: [
      {
        name: 'Organic Core Revenue ($)',
        changeRate: 0.71,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink: '',
  },
  {
    uuid: 'n7',
    title:
      'Cisco rose 4% as earnings results beat both revenue and profit estimates.',
    tickers: ['CSCO'],
    date: new Date('2022-08-17'),
    content: [
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
    type: EventType.earnings,
    source: Source.OFFICIAL,
    sourceLink:
      'https://s2.q4cdn.com/951347115/files/doc_financials/2022/q4/Q4FY22-Press-Release_.pdf',
  },
  {
    uuid: 'n6',
    title: "Target's profit plunged 90% as it reduced excess inventory.",
    tickers: ['TGT'],
    date: new Date('2022-08-17'),
    content: [
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
    type: EventType.earnings,
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
    content: [
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
    type: EventType.earnings,
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
    content: [
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
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n33',
    title: 'LegalZoom.com share was up 18% on beating estimates',
    tickers: ['LZ'],
    date: new Date('2022-08-12'),
    content: [
      'Future subscription revenue is expected to grow 20% year-over-year',
    ],
    stats: [
      {
        name: 'Revenue ($)',
        value: 163.87 * MILLION,
        changeRate: 0.09,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Transaction Revenue ($)',
        value: 66.5 * MILLION,
        changeRate: -0.09,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Subscription Revenue ($)',
        value: 91.3 * MILLION,
        changeRate: 0.32,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n33',
    title: 'Toast share was up 8% as revenue grew 58%',
    tickers: ['TOST'],
    date: new Date('2022-08-12'),
    content: [],
    stats: [
      {
        name: 'Location served',
        value: 68000,
        changeRate: 0.4,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Revenue ($)',
        value: 675 * MILLION,
        changeRate: 0.58,
        timeFrame: TimeFrame.yoy,
      },
      {
        name: 'Net Loss ($)',
        value: 54 * MILLION,
        previousValue: 135 * MILLION,
        timeFrame: TimeFrame.yoy,
      },
    ],
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
  {
    uuid: 'n32',
    title:
      'Rivian lost $1.7 billion in the second quarter as production ramps up.',
    tickers: ['RIVN'],
    date: new Date('2022-08-11'),
    content: ['Revenue beat the expectations while earnings missed estimates.'],
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
    type: EventType.earnings,
    source: Source.OFFICIAL,
  },
];
