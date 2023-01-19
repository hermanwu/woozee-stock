import { IndustryType } from 'src/app/facts/data/area.enum';
import { Index } from 'src/app/macro/macro.enum';
import { TimeFrame } from 'src/app/shared/components/stats-display/stats-display.interface';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import {
  convertDateToUTC,
  getUtcDate,
} from 'src/app/shared/functions/getUtcDate.function';
import { Source } from 'src/app/stock/models/news-source.enum';
import { EventType, News } from 'src/app/stock/models/news.model';

export const allNews: News[] = [
  {
    title: 'Nordstrom公布悲观假期销售数据并下调盈利预期。',
    content:
      '由于大幅降价，截至到2022年底的九周假期季，净销售额相较于去年同比下降3.5%。\nCEO: “假期促销力度很大，但销售额仍然低于疫情前水平...很明显，鉴于宏观环境，消费者变得更加挑剔。”\nNordstrom品牌净销售下降1.7%，Nordstrom Rack净销售下降7.6%。\nNordstrom盘后下跌近7%。',
    tags: ['jwn'],
    uuid: '07795edc-d0c6-4bf3-9dcb-d318cf517213',
    date: '2023-01-19T21:47:21.200Z',
  },
  {
    title:
      "Netflix's profit fell short of expectations, but it added 7.66 million new subscribers.",
    content:
      'Revenue was US$7.85 billion, up 1.9% YoY, in line with expectations. Earnings per share were 12 cents, missing estimates of 45 cents.\nAdded 7.66 million new subscribers, much higher than the predicted 4.57 million subscribers.\nco-CEO and co-founder Reed Hastings stepped back as Executive Chairman.\nOutlook for the next quarter: revenue +3.9% YoY, operating margin was 19.9%, and moderate new user growth.',
    tags: ['nflx'],
    uuid: 'c9b19e82-20df-464d-a52a-3622b799cc19',
    date: '2023-01-19T21:29:04.105Z',
  },
  {
    title: '奈飞Netflix盈利不及预期，但新增订阅用户766万。',
    content:
      '营收78.5亿美元，同比增长1.9%，符合预期。每股收益12美分，低于45美分预期。\n新增766万订阅用户，远高于预测的457万订阅用户。\nCEO和创始人Reed Hastings退居为执行董事长。\n下季度前瞻：营收同比增长3.9%，运营利润率19.9%，新用户增速缓和。',
    tags: ['nflx'],
    sourceLink:
      'https://www.cnbc.com/2023/01/19/netflix-nflx-earnings-q4-2022.html',
    uuid: '2faa958b-c446-4b87-80ce-23b6a2cf3f0e',
    date: '2023-01-19T21:23:15.744Z',
  },
  {
    title: '宝洁财报营收超过预期，但销量下降令人担忧。',
    content:
      '营收208亿美元，同比下降0.7%，但超过预期。\n每股收益$1.59(Non-GAAP)，符合预期。\n有机销售额(organic sales)增长5%，得益于本季度10%的价格上涨。但是销量却同比下跌6%，远高于下跌2.6%的预期。\n',
    tags: ['PG'],
    sourceLink:
      'https://seekingalpha.com/news/3925796-procter-gamble-non-gaap-eps-of-159-in-line-revenue-of-208b-beats-by-50m-raises-fy2023-sales-outlook',
    uuid: 'f215ebb4-31f5-429c-8654-49fac2f51d06',
    date: '2023-01-19T21:04:48.679Z',
  },
  {
    title:
      '周四三大指数收低，标普500及道琼斯连续第三个交易日下跌；奈飞宝洁发布财报；',
    content:
      '纳斯达克下跌-1.0%，标普500下跌-0.8%，道指下跌-0.8%。\n标普11个板块中有八个下跌，工业板块和非必需消费品板块领跌。能源、通讯服务和医疗保健板块上涨。',
    tags: ['news'],
    imageLinks: [
      'https://i.ibb.co/vXKNyMP/Screenshot-2023-01-19-at-2-09-27-PM.png',
    ],
    uuid: 'a0c34c21-d311-493c-b7ce-24031d3144f9',
    date: '2023-01-19T20:52:09.808Z',
  },
  {
    title: '亚马逊将在2月砍掉其有着10年历史的AmazonSmile慈善捐赠项目',
    content:
      'AmazonSmile会捐出接近用户账单总值的0.5%给用户选择的慈善机构。\n亚马逊表示这个项目的作用太过分散，将在未来集中投资更有意义的项目。但投资者认为这是亚马逊“不惜一切“减少支出的一个佐证。\n',
    tags: ['amzn'],
    sourceLink:
      'https://www.cnbc.com/2023/01/18/amazon-discontinues-amazonsmile-charity-donation-program-amid-cost-cuts.html',
    uuid: '4c6134d4-eaa1-4f86-b56d-eb2c89830dff',
    date: '2023-01-19T20:17:35.513Z',
  },
  {
    title: '周三美股三大指数高开低走，收盘全部下跌超1%，纳斯达克终止七天连涨。',
    content:
      '纳斯达克收盘-1.2%，标普500收盘-1.6%，道指收盘-1.8%。标普11个板块全部下跌。\n生产商价格指数PPI下跌0.5%，远高于预期的0.1%，显示通胀继续下降。\n和CPI类似，PPI下降的主要原因是能源价格下降。\n由于通胀数据下降，投资者认为美联储将在两周后会议上仅加息25个基点。\n零售价格下跌1.1%，高于预期的1%。\n12月份的批发通胀率放缓至 6.2%，低于预测的 6.8%。上个月这个数据为 7.3%。',
    tags: ['news'],
    imageLinks: [
      'https://i.ibb.co/ZxpmMpg/Screenshot-2023-01-18-at-3-05-39-PM.png',
    ],
    uuid: '6ea0a2bd-c01f-4030-b08f-ecad43e5df34',
    date: '2023-01-18T22:30:20.134Z',
  },
  {
    title: 'Discover Financial财报营收盈利均超预期。',
    content:
      '第四季度每股收益为3.77美元，高出0.15美元预期。\n营收37.3亿美元，同比上涨26.9%\nDiscover也提高了信贷损失准备金，显示经济可能继续走弱。\n贷款总额同比增长 20%，环比增长 7%。\n信用卡贷款为同比增长 21%。',
    tags: ['dfs'],
    uuid: '4dc980cf-cd73-4f04-9e66-2845e2522718',
    date: '2023-01-18T22:05:29.970Z',
  },
  {
    title: '美国假日季零售数据低于行业预期。',
    content:
      '11月和12月的销售额同比增长 5.3% 至 9363 亿美元，低于预期的6%-8%。但这个数据包含通胀所带来的影响。\n线上和非实体店销售额同比增幅最大，达到9.5%。\n电子和电器实体店的销售额同比下降5.7%。',
    tags: ['retail'],
    uuid: 'bfbd4c56-d3bd-42d1-b78d-f804404cb571',
    date: '2023-01-18T21:54:42.018Z',
  },
  {
    title: '微软和亚马逊周三开始新一轮裁员计划',
    content:
      '微软将裁10000名员工，占总员工数4.5%。\nCEO表示:“微软将为此花费12亿美元包括高于市场的遣散费，优化公司硬件和办公室租赁的费用”。\nCEO:“我们现在看到客户在减少优化他们的支出，以更少的钱做更多的事情。”\n亚马逊也在周三向员工宣布开始裁员18000人。这是亚马逊28年历史上最大的一次裁员。',
    tags: ['msft', 'amzn'],
    sourceLink:
      'https://www.cnbc.com/2023/01/18/amazon-set-to-begin-new-round-of-layoffs-affecting-over-18000-people.html',
    uuid: 'e7692cfa-c48d-4ab5-bae0-4f4d1acad08e',
    date: '2023-01-18T21:42:41.811Z',
  },
  {
    title:
      '三大指数涨跌不一，纳斯达克连续第七天上涨。市场对高盛和摩根史丹利财报反应截然相反。',
    content:
      '纳斯达克收盘上涨0.1%，特斯拉大涨7.43%。\n标普500下跌0.2%，11个板块中有6个板块收低。\n道指受高盛(GS)和旅行家集团(TRV)影响，下跌1.1%。\n高盛下跌6.44%, 摩根士丹利上涨5.91%。',
    tags: ['news'],
    uuid: '08171464-fc95-4e6c-9cde-7b1687722ab9',
    date: '2023-01-17T23:48:08.803Z',
  },
  {
    title: '摩根士丹利Morgan Stanley第四季度收益好于华尔街预期。\n',
    content:
      '营收为127亿美元，同比下降12.5%。但财富管理收入从一年前的63亿美元增至66亿美元。\n净收入下降了近40%。本季度信贷损失准备金为8500万美元，而去年同期仅为500万美元。\n摩根士丹利今天大涨近6%。',
    tags: ['ms'],
    uuid: '0d9e546b-70fd-4c5f-835d-c9ad15cf8461',
    date: '2023-01-17T23:30:54.414Z',
  },
  {
    title: '高盛Goldman Sachs交出近十年来最差的财报，收入和盈利均不及预期。',
    content:
      '营收同比下降16.2%。资产与财富管理收入较上年同期下降27%。\n盈利大幅低于华尔街预期。由于薪酬，福利，及交易费用增加，高盛营业支出猛增 11%。像大部分银行一样，高盛本季度信贷损失准备金从去年同期3.44亿美元飙升到9.72亿美元。\n高盛今天股价大跌6.44%。\n',
    tags: ['gs'],
    sourceLink:
      'https://seekingalpha.com/news/3924604-goldman-sachs-q4-earnings-drop',
    uuid: 'e663c9b3-f8a3-407b-a0a8-45a2dfe8f11b',
    date: '2023-01-17T23:17:06.068Z',
  },
  {
    title:
      'Apple released new MacBook Pro and Mac mini, equipped with the latest M2 Pro and M2 Max chips.',
    content:
      "Mac mini will no longer be equipped with Intel chips, which means that Mac Pro is Apple's last computer with Intel processors.\nThe new Mac mini starts at $599. The new 14-inch MacBook Pro starts at $1,999. The new 16-inch MacBook Pro starts at $2,499.",
    tags: ['aapl'],
    imageLinks: [
      'https://i.ibb.co/4TW3Y0p/Screenshot-2023-01-17-at-2-44-06-PM.png',
    ],
    uuid: 'f5cd5c06-c66d-4dc5-a5d3-19736387af95',
    date: '2023-01-17T22:52:33.694Z',
  },
  {
    title: 'Apple发布新款MacBook Pro和Mac mini, 配备最新M2 Pro和 M2 Max芯片。',
    content:
      'Mac mini将不再配备英特尔Intel芯片，这意味着 Mac Pro是苹果最后一款可以配置Intel处理器的电脑。\n新Mac mini售价599美元起。新14英寸MacBook Pro售价1999美元起。 新16英寸MacBook Pro售价2499美元起。',
    tags: ['aapl'],
    imageLinks: [
      'https://i.ibb.co/4TW3Y0p/Screenshot-2023-01-17-at-2-44-06-PM.png',
    ],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/apple-announces-new-mac-mini-macbook-pro-with-m2-pro-and-m2-max.html',
    uuid: '6713765b-2e46-4130-9a10-b7214062f416',
    date: '2023-01-17T22:39:28.701Z',
  },
  {
    title:
      'Moderna said their RSV vaccine is 83.7% effective in preventing lower respiratory diseases in people aged 60+.',
    content:
      'The vaccine uses the same RNA technology as the Covid vaccine. No RSV vaccine is currently approved by the FDA.\n Application for FDA approval will be submitted first half of this year. \nMorgan Stanley predicts that the RSV vaccine market will be worth $7-$10 billion.',
    tags: ['mrna'],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/moderna-says-rsv-vaccine-is-84percent-effective-at-preventing-disease-in-older-adults.html',
    uuid: '47358c25-768e-4a3c-9a08-d24a49c0007b',
    date: '2023-01-17T22:23:06.760Z',
  },
  {
    title: '莫德纳Moderna宣称新研发的RSV疫苗对老年人有显著作用。',
    content:
      '疫苗在预防60岁以上人群的下呼吸道疾病时的有效性为83.7%。该疫苗使用了与Covid新冠疫苗相同的RNA技术。\nModerna计划在今年上半年向美国食品和药物管理局FDA提交批准申请。目前FDA没有批准过任何RSV疫苗。\n大摩预测RSV疫苗市场规模在$70-$100亿间。',
    tags: ['MRNA'],
    sourceLink:
      'https://www.cnbc.com/2023/01/17/moderna-says-rsv-vaccine-is-84percent-effective-at-preventing-disease-in-older-adults.html',
    uuid: '3989157e-b61b-4c41-a3cb-e4d41e568d63',
    date: '2023-01-17T22:08:32.599Z',
  },
  {
    title: '高票价无法阻挡强劲的需求，美联航第四季度财报及2023年前瞻均超预期。',
    content:
      '消费者坐飞机的需求远大于航空公司的现有供给。\n第四季度营收为124亿美元(+51.4% Y/Y)。飞行时间和2019年同期相比减少了9%，但营收增加14%。\n第四季度利润为8.43亿美元。营业利润率为11.1%。\n2023第一季度和全年收益预测均远超预期。',
    tags: ['ual'],
    sourceLink:
      'https://seekingalpha.com/news/3925187-united-airlines-stock-soars-after-big-bottom-line-beat-bullish-forecast',
    uuid: '9e938017-f09f-4906-b775-c89d285597aa',
    date: '2023-01-17T21:37:34.417Z',
  },
  {
    title: '周五关注',
    content:
      'Ally Bank发布财报。\n2023蒙特利尔国际车展开幕。大量品牌将发布2023车型。特斯拉Tesla也会参展',
    tags: ['tsla'],
    uuid: 'fc3ba54a-d473-44f4-aa26-1ac4ad963342',
    date: '2023-01-16T23:49:10.083Z',
  },
  {
    title: '周四关注',
    content:
      '奈飞Netflix，宝洁P&G将发布财报。\n保洁财报将对其他化妆消费品公司财报起到指引作用（比如沃尔玛，联合利华, e.l.f. Beauty)。\nArk基金将召开第四季度webinar。',
    tags: ['pg'],
    uuid: 'b5003bf4-a319-4076-816d-6206087010aa',
    date: '2023-01-16T23:44:35.770Z',
  },
  {
    title: '周三关注',
    content:
      '金融公司Charles Schwab，Discovery，PNC将发布财报。\n12月生产商价格指数producer price index。\n12月零售消费报告retail sales report。',
    tags: ['schw'],
    uuid: '8d6f5ae4-3bdd-474f-9fb2-8df280ec27ab',
    date: '2023-01-16T23:34:59.470Z',
  },
  {
    title: '周二关注',
    content:
      '高盛，摩根士丹利，美联航将发布财报。\n游戏商Roblox发布每月预定数据。\nOPEC发布每月石油市场报告。\n达沃斯世界经济论坛将在瑞士召开。\n',
    tags: ['gs'],
    uuid: '2fabc819-9f1a-4fb4-b991-813c82974ff1',
    date: '2023-01-16T23:30:13.456Z',
  },
  {
    title: '财报季正式开启：高盛，奈飞Netflix等将发布财报。',
    content:
      '高盛和摩根士丹利将在周二公布第四季度财报，重点关注投行们是否能在投资业务低迷的时期继续保持高盈利。\n奈飞Netflix将在周四发布财报，重点关注奈飞打击密码共享的成果。\n',
    tags: ['earnings'],
    sourceLink:
      'https://www.cnbc.com/2023/01/16/earnings-playbook-netflix-and-goldman-sachs-headline-another-big-week-of-reports.html',
    uuid: '2080567a-28eb-4a64-af40-374a0b0a6e26',
    date: '2023-01-16T19:44:30.733Z',
    imageLinks: [''],
  },
  {
    title: '周五三大指数在开盘下跌后强力反弹。纳斯达克连续六天上涨。\n',
    content:
      '标普500上涨0.40%至3999点，离4000点整数关还有一步之遥。\n科技股为主的纳斯达克上涨0.71%，本周累计上涨 4.82%。\n标普500和纳斯达克都已连续第二周上涨，并创下去年11月以来的最佳单周表现。',
    tags: ['news'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/stock-market-futures-open-to-close-news.html',
    uuid: 'dff84ac2-f241-42af-9c89-b3d9c62a8a65',
    date: '2023-01-14T14:24:41.410Z',
  },
  {
    title: '苹果首席执行官Tim Cook要求大幅削减他的薪酬\n',
    content:
      '为了回应股东的批评，苹果薪酬委员会和Tim Cook决定将他2023年的年度薪酬减少40%。\n他的300万美元基本工资和600万美元奖金将保持不变。\n股权奖励总额将从7500万美元减少到4000万美元。\n与业绩相关的股权奖励将占总股权奖励的75%，高于2022年的50%。这将使Tim Cook的收入与公司业绩更紧密得结合在一起。',
    tags: ['aapl'],
    sourceLink:
      'https://seekingalpha.com/news/3924410-apple-ceo-tim-cook-asks-for-a-big-cut-in-compensation',
    uuid: 'beed23ba-8c25-4a42-840c-e48ede538d78',
    date: '2023-01-14T14:15:54.324Z',
  },
  {
    title: '台积电第四季度营收低于预期，但确认将削减2023年支出。',
    content:
      '营收为199.3亿美元，同比增长 26.6%，但低于209.2亿美元预期。\n每股盈利1.82美元，高于预期的1.77美元。\n由于需求下降,2023年的支出最多可以减少12.5%。\n上个月，台积电开始生产号称“需求非常强劲”的3纳米芯片，目前7纳米及以下高端产品收入占晶圆总收入的54%。\n',
    tags: ['tsm'],
    sourceLink:
      'https://seekingalpha.com/news/3924192-taiwan-semiconductor-confirms-will-cut-2023-spending',
    uuid: '5f69d765-5c1f-4bcc-ad68-2325d449c35e',
    date: '2023-01-14T14:10:30.813Z',
  },
  {
    title: '美国银行Bank of America第四季度营收盈利均高于预期。',
    content:
      '第四季度每股收益为0.85美元，高于0.77美元预期。\n营收为240亿美元，同比增长11.2%，\n信贷损失准备金增减到11亿美元。与去年同期相比，增加了16亿美元\nCEO强调有机成长和高利率使存款业务成为本季度重点。',
    tags: ['boa'],
    sourceLink:
      'https://seekingalpha.com/news/3924335-bank-of-america-q4-earnings',
    uuid: '161e390f-cf00-4720-8665-d0af1c8bfaa4',
    date: '2023-01-14T13:59:17.708Z',
  },
  {
    title: '摩根大通JPMorgan Chase第四季度财报营收利润均高于预期。',
    content:
      '每股收益为3.57美元，高于3.07 美元的预期。\n营收为340.5亿美元，同比上涨17.9%。平均客户贷款额增长6%。\n本季度公布了23亿美元的信贷损失准备金用来应对客户的信用卡贷款增长。这个数字比第三季度增加了49%。\nChase认为宏观经济将面临“温和衰退”',
    tags: ['jpm'],
    uuid: '2279cf13-f0de-499e-9aa4-7276c1526ca0',
    date: '2023-01-14T13:39:30.266Z',
  },
  {
    title: '特斯拉宣布在美国和欧洲大幅降价，正式开始价格战。',
    content:
      '降价幅度从6%到20%不等，这将使Model Y在2023年获得美国政府7500美元的税收抵扣。预计降价将刺激需求增加12%-15%。\n这可能是朱晓彤开始负责北美生产销售后的第一个大动作。',
    tags: ['tsla'],
    uuid: 'c39ac6b6-3198-4276-8f47-cf70c1cf1d84',
    date: '2023-01-14T13:24:00.598Z',
  },
  {
    title: '快餐连锁Wendy’s公布第四季度初步业绩,股价大涨近6%',
    content:
      '第四季度收入初步报告为5.365亿美元，高于预期的 5.1725亿美元，较上年同期增长13.4%。\nCEO: “全球同店销售额连续两年实现两位数增长，第四季度利润率比第一季度增长近300个基点，我们在全球新开设了超过275家店”',
    tags: ['wen', 'restaurants'],
    sourceLink:
      'https://seekingalpha.com/news/3924455-wendys-pre-announces-above-consensus-sales-bolsters-buyback-program',
    uuid: '261f15cf-9126-47d6-82e8-c429d1a4de45',
    date: '2023-01-14T05:55:53.530Z',
  },
  {
    title:
      'Virgin Galatic is expected to start commercial services in the second quarter',
    content:
      'Shares of Virgin Galactic (SPCE) rose 7.46% on Thursday and are up more than 32% this year, but it is still below their 50-day, 100-day, and 200-day moving averages.',
    tags: ['spce'],
    uuid: 'e5b52394-4aa7-4c67-930c-330493baf11d',
    date: '2023-01-13T05:17:20.913Z',
  },
  {
    title:
      'Luxury EV maker Lucid is producing more cars than expected in 2022.',
    content:
      'Nearly 3,500 Lucid Airs were produced in Q4, the highest quarterly production to date.\nA total of 7180 cars were produced in 2022, exceeding the guideline released in August.\nLucid shares rose nearly 5% today.',
    tags: ['lcid'],
    uuid: '293a50a0-e179-483f-816c-7cec86bd916b',
    date: '2023-01-13T05:16:55.094Z',
  },
  {
    title: 'Tesla is looking for the next Gigafactory in Indonesia',
    content:
      'According to Bloomberg, Tesla will finalize a deal to locate the next Gigafactory in Indonesia.\nA big reason is that Indonesia has nearly 25% of the world’s nickel reserves. Nickel is necessary to make batteries.\n',
    tags: ['tsla'],
    uuid: '749cf606-3f21-4169-90de-390553e6d883',
    date: '2023-01-13T05:16:27.514Z',
  },
  {
    title: 'Disney board faces a proxy fight from activist investor Peltz.\n\n',
    content:
      'Peltz believes that Disney’s management is in disarray and spent too much money on the acquisition of Fox. All of this has caused Disney’s stock price to hover at an eight-year low.\nPeltz hopes to gain a seat on the board of directors through the proxy battle.\nDisney elected Mike Parker, the executive chairman of Nike, as the new chairman, and suggested that shareholders vote to reject Peltz from joining the board of directors.',
    tags: ['dis'],
    uuid: '64e7828f-23c8-4a2e-a73c-fcfe7de624fe',
    date: '2023-01-13T05:16:01.012Z',
  },
  {
    title: 'Food inflation heats up again in CPI report: Egg prices up 60% YoY',
    content:
      'Food prices in December rose 10.4% year-on-year and 0.3% month-on-month.\nCereal +13.0% YoY, Flour +23.4% YoY, Poultry +12.2% YoY, Lettuce +24.9% YoY, Bakery products +16.3% YoY, Coffee +14.3% YoY',
    tags: ['cpi'],
    uuid: '2a0a3a54-7d17-4a2d-b808-104c8d78a05a',
    date: '2023-01-13T05:15:24.435Z',
  },
  {
    title:
      'Stocks continued to move higher on Thursday. December CPI index fell 0.1% month-on-month, in line with economists’ expectations. Investors believed the data could prompt the Fed to slow rate hikes.',
    content:
      'Nasdaq closed up 0.64%, rising for five consecutive days. The S&P 500 rose 0.34%.\nThe core CPI excluding food and energy rose by 0.3% month-on-month, also in line with expectations. The biggest reason for the inflation slowdown was a sharp 16.6% month-on-month drop in oil prices.\nCompared with last year, CPI increased by 6.5% year-on-year, and core CPI increased by 5.7% year-on-year.',
    tags: ['news'],
    uuid: '7e616c72-984e-4af2-b4bb-3aaf2b978dc0',
    date: '2023-01-13T05:14:49.714Z',
  },
  {
    title: '迪斯尼董事会面临主动投资人Peltz的委托书争夺战（proxy fight）。',
    content:
      'Peltz认为迪士尼管理层混乱，在对福克斯的并购上存在决策问题，这些都导致股价现在在8年来的最低点。\nPeltz希望通过委托书争夺战（proxy fight)为自己在董事会获得一个席位。\n迪士尼则推举耐克执行董事长Mike Parker成为新董事长，并建议股东投票拒绝Peltz加入董事会。',
    tags: ['dis', 'nke'],
    sourceLink:
      'https://finance.yahoo.com/news/bob-igers-next-big-challenge-at-disney-is-activist-investor-nelson-peltz-230245478.html',
    uuid: '43c7c463-f694-4b29-b450-e22481cb26bc',
    date: '2023-01-12T23:49:50.877Z',
  },
  {
    title: '特斯拉正在印度尼西亚寻找下一个电动汽车工厂',
    content:
      '彭博社消息，特斯拉将敲定在印度尼西亚建设下一个超级工厂。 \n一大原因是印度尼西亚拥有全球近25%的镍储量。镍是用来制造电池的必需品',
    tags: ['tsla'],
    sourceLink:
      'https://seekingalpha.com/news/3923667-tesla-eyes-indonesia-for-next-electric-vehicle-plant',
    uuid: 'd3158592-19a4-437d-852a-7ef8e75bf703',
    date: '2023-01-12T23:34:31.822Z',
  },
  {
    title: 'CPI报告中的食品通胀再次升温: 鸡蛋价格同比上涨60%',
    content:
      '12月食品价格较同比上涨 10.4%，环比上涨0.3%。 \n麦片同比+13.0%，面粉同比+23.4%，家禽同比+12.2%，生菜同比+24.9%，烘焙产品同比+16.3%，咖啡同比+14.3%',
    tags: ['cpi', 'us'],
    sourceLink:
      'https://seekingalpha.com/news/3924135-food-inflation-runs-hot-again-in-cpi-report-including-egg-prices-up-60',
    uuid: 'f9e310fc-2049-43c7-9e2f-49a12a4550fc',
    date: '2023-01-12T23:19:16.588Z',
  },
  {
    title: '维珍银河Virgin Galatic预计第二季度开始开始商业化服务',
    content:
      '维珍银河(SPCE)的股价周四上涨7.46%，今年至今涨幅超过32%，但仍低于50天，100天和200天移动平均线。',
    tags: ['spce'],
    sourceLink:
      'https://seekingalpha.com/news/3924309-virgin-galactic-expects-commercial-service-to-begin-in-q2',
    uuid: '927fbab3-edba-4989-bf08-d36059d98e69',
    date: '2023-01-12T23:14:34.794Z',
  },
  {
    title: '电动豪华汽车制造商Lucid2022年生产的汽车数量超过预期。',
    content:
      '第四季度生产了近3500辆Lucid Air，这是到目前为止最高的季度产量。\n2022年总共生产了7180辆汽车，超过8月发布的预期。\nLucid今天上涨近5%。',
    tags: ['lcid', 'ev'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/lucid-lcid-2022-ev-production-exceeds-expectations.html',
    uuid: '2cc9fc76-db1e-465d-a2cf-95fecc412b6a',
    date: '2023-01-12T22:35:56.529Z',
  },
  {
    title:
      '周四股市继续收高。12月CPI指数环比下跌0.1%，符合经济学家预期。​投资人认为该数据可促使美联储放缓加息。',
    content:
      '剔除食品和能源的核心CPI环比上涨0.3%，也符合预期。通胀放缓的最大原因是油价环比大幅下跌16.6%。\n与去年相比，CPI同比上涨 6.5%，核心CPI同比上涨5.7%。\n纳斯达克收涨0.64%,连续五天上涨。标普500上涨0.34%\n',
    tags: ['news', 'cpi', 'inflation', 'us', 'fed'],
    sourceLink:
      'https://www.cnbc.com/2023/01/12/consumer-prices-fell-0point1percent-in-december-in-line-with-economists-expectations.html',
    uuid: '77ba2453-c39e-48e9-a844-6d9d4ae2a0d5',
    date: '2023-01-12T21:58:05.654Z',
  },
  {
    title:
      'As the macro economy continues to deteriorate, Ubisoft cuts its net booking target and cancels three games',
    content:
      'The 2022 full-year net booking target has been reduced by 10%. The previous forecast was a 10% rise.\nCEO stated that “We are clearly disappointed by our recent performance,”, "We are facing contrasted market dynamics as the industry continues to shift towards mega-brands and everlasting live games, in the context of worsening economic conditions affecting consumer spending."',
    tags: ['ubi', 'gaming'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/ubisoft-cancels-three-games-slashes-targets-on-worsening-conditions.html',
    uuid: '71f01d80-fba1-40bf-85cb-eaf5d97d9a09',
    date: '2023-01-12T06:49:45.530Z',
  },
  {
    title:
      '因宏观经济继续恶化，育碧游戏公司削减预定量目标并取消了三个游戏的开发，',
    content:
      '2022全年预定量目标（net bookings)下调10%。之前的预测是上涨10%\nCEO表示“在经济状况恶化并影响消费者支出的背景下，整个行业变得更加重视大品牌和现场游戏直播”，“我们对自己的变现感到失望”',
    tags: ['ubi', 'gaming'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/ubisoft-cancels-three-games-slashes-targets-on-worsening-conditions.html',
    uuid: '0e86be91-273f-4cd1-97e9-2e3dc16a7295',
    date: '2023-01-12T06:46:22.288Z',
  },
  {
    title:
      'Binance will expand hiring by 15% to 30% in 2023, CEO Zhao said at the Crypto Finance Conference in Switzerland\n',
    content:
      "Binance's hiring plan is the exact opposite of the mass layoffs that most cryptocurrency companies are doing right now.\nAccording to CEO, Binance more than doubled its headcount last year, from 3,000 to nearly 8,000.",
    tags: ['binance', 'crypto'],
    sourceLink:
      'https://finance.yahoo.com/news/binance-says-plans-expand-hiring-041426149.html',
    uuid: '4414c145-689d-4907-8132-bb14184eeccc',
    date: '2023-01-12T06:04:43.736Z',
  },
  {
    title: '币安将在2023年将招聘人数扩大15%到30%',
    content:
      '币安的招聘计划与绝大多数加密货币公司正在进行的大规模裁员截然相反。\n币安去年的员工人数增加了一倍多，从 3,000 人增加到近 8,000 人。',
    tags: ['binance', 'crypto'],
    sourceLink:
      'https://finance.yahoo.com/news/binance-says-plans-expand-hiring-041426149.html',
    uuid: '0028e468-e235-47e4-88e5-5cb67cabf108',
    date: '2023-01-12T05:57:50.219Z',
  },
  {
    title:
      'According to Bloomberg News, Apple may release a MacBook Pro laptop with a touch screen as soon as 2025',
    content:
      'This is a reversal of Apple\'s comment in 2018 that "lifting your arm up to poke a screen (on a laptop) is a pretty fatiguing thing to do"\nApple\'s Mac product line sales have performed well after the release of self-developed chips. Since 2020, sales have increased by 40%.',
    tags: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/apple-reportedly-considering-touchscreen-mac-laptop-for-2025.html',
    uuid: '4240717d-7d1a-41ed-b96d-6732948ee164',
    date: '2023-01-12T05:45:02.168Z',
  },
  {
    title:
      '据彭博社消息，苹果最快可能在2025年发布带触摸屏的MacBook Pro笔记本电脑',
    content:
      '苹果在2018年曾明确表示触摸屏笔记本电脑在人体工程学方面较差：“抬起你的手臂来戳屏幕是一件非常累人的事情”\n苹果Mac产品线销量在发布自研芯片后表现出色。自2020年以来，销量增长了40%。',
    tags: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/11/apple-reportedly-considering-touchscreen-mac-laptop-for-2025.html',
    uuid: 'f9e34da3-72f2-4085-81c4-683d689c1e65',
    date: '2023-01-12T05:37:56.898Z',
  },
  {
    title:
      "The market is optimistic about Thursday's CPI report, and the three major indexes closed higher.",
    content:
      'The Nasdaq Composite closed up 1.8%, achieving a four-day winning strike, the S&P 500 closed up 1.3%, and the Dow closed up 0.8%.\nAll 11 S&P sectors rose. Real estate rose 3.6 percent, while consumer staples rose 2.7 percent.\nIf data shows that the CPI slows down, it may prompt the Fed to slow down the pace of raising interest rates.',
    tags: ['cpi', 'us', 'fed'],
    sourceLink:
      'https://seekingalpha.com/news/3923887-wall-street-shows-optimism-ahead-of-cpi-data-dow-sp-500-nasdaq-rise',
    uuid: 'a0967096-5bfd-4b27-a78b-fe0b2d93dcff',
    date: '2023-01-12T03:28:54.652Z',
  },
  {
    title: '市场看好周四的CPI报告, 三大指数集体收高。',
    content:
      '纳斯达克综收盘上涨 1.8%，连续第4天上涨，标普500收盘上涨 1.3%，道指收盘上涨 0.8%。\n标普11个板块全部上涨。房地产板块上涨3.6%，消费品板块上涨 2.7%。\n如果数据显示CPI放缓，可能促使美联储放缓加息脚步。',
    tags: ['cpi', 'us', 'fed'],
    sourceLink:
      'https://seekingalpha.com/news/3923887-wall-street-shows-optimism-ahead-of-cpi-data-dow-sp-500-nasdaq-rise',
    uuid: '1d423563-7830-4b81-a8a3-ea72c368d2ac',
    date: '2023-01-12T01:16:29.560Z',
  },
  {
    title:
      'The largest mortgage player in the United States, Wells Fargo, decided to scale down its mortgage business',
    content:
      "Moving forward, Wells Fargo plans to provide mortgage services only to bank clients, wealth management customers, and borrowers from minority communities.\nWells Fargo's third-party loan acquisition business will be closed and assets related to mortgage services will be sold.\nManagement said that regulatory pressure and high interest rates were the main reasons for this decision.\n",
    tags: ['housing', 'wfe'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/wells-fargo-once-the-no-1-player-in-mortgages-is-stepping-back-from-the-housing-market.html',
    uuid: '6fdf0d67-4da8-4dd7-9e7f-039e89172387',
    date: '2023-01-11T06:29:33.322Z',
  },
  {
    title: 'Coinbase is laying off another 950 staff.\n\n',
    content:
      'CEO Armstrong: "As we examined our 2023 scenarios, it became clear that we would need to reduce expenses to increase our chances of doing well in every scenario. While it is always painful to part ways with our fellow colleagues, there was no way to reduce our expenses significantly enough, without considering changes to headcount,"\nThe layoff is about 20% of the total workforce, and it is expected to save 25% of operating expenses.\n',
    tags: ['coin', 'crypto'],
    uuid: 'e9b1cf34-464b-4a73-8b8f-a034bbaba65d',
    date: '2023-01-11T06:20:26.550Z',
  },
  {
    title:
      'Bed Bath & Beyond released its earnings on Tuesday: Both revenue and profit fell short of expectations',
    content:
      'The quarterly loss was $393 million, 42% more than last year\'s.\nThe CEO admitted that the company did not achieve the original goals but made progress on reducing expenses, including closing 150 stores.\nBed Bath & Beyond "squeezed" up nearly 30% today and rose another 17% during the after-hour.',
    tags: ['bbby', 'retail'],
    uuid: 'a591f751-6b5c-4ca5-a55d-bcf7cf63c92c',
    date: '2023-01-11T06:16:59.265Z',
  },
  {
    title:
      'The S&P 500 was up 0.7%, and the Nasdaq was up 1.01%, achieving a three-day winning streak.',
    content:
      'Federal Reserve Chairman Powell emphasized on Tuesday that “Price stability is the bedrock of a healthy economy and provides the public with immeasurable benefits over time."\nThe Fed\'s primary task is to control inflation and stabilize prices. It can "require measures that are not popular in the short term as we raise interest rates to slow the economy"\nBut Powell did not disclose any information about the future interest rate.\n\n',
    tags: ['fed', ' interest rate'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/powell-stresses-need-for-feds-political-independence-while-tackling-inflation.html',
    uuid: '26e3800e-c229-4486-b9b1-00fabd8f34e9',
    date: '2023-01-11T05:44:10.569Z',
  },
  {
    title:
      '美股在周二午后开始上涨。标普500收盘上涨0.7%，纳斯达克实现三天连涨，收盘上涨1.01%。',
    content:
      '美联储主席鲍威尔周二强调，稳定的物价是经济健康的基石。美联储的首要任务是控制通胀和稳定物价，而不是被政治因素所左右。因此有些不够”政治正确”措施是无法避免的，比如提高利率。\n但鲍威尔没有对未来的加息计划透露任何信息。',
    tags: ['fed'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/powell-stresses-need-for-feds-political-independence-while-tackling-inflation.html',
    uuid: '97c6db5c-f5b8-43c9-bfd0-109229abfa02',
    date: '2023-01-11T02:50:02.249Z',
  },
  {
    title: '实体连锁Bed Bath & Beyond周二发布财报，营收和利润均不及预期',
    content:
      '季度亏损达到3.93亿美元；同比亏损增加42%。\nCEO承认公司没有实现达成本来的季度目标，但做出了很多改进来减少支出，包括关闭150家门店。\nBed Bath & Beyond今天盘中暴涨近30%，盘后再涨17%。',
    tags: ['bbby', 'retail'],
    sourceLink:
      'https://www.nbcnews.com/business/business-news/bed-bath-reports-wider-expected-loss-quarterly-earnings-rcna65080',
    uuid: '72d1ce6a-f57d-4fe4-9253-b3d9e7a1d82b',
    date: '2023-01-11T02:06:04.644Z',
  },
  {
    title: '苹果的应用商店增长可能正在放缓',
    content:
      '苹果在2022年支付了3200亿美元给开发者，同比增长23%。根据苹果的支付公式，估计应用商店的营收同比增长在0%-21%之间（700亿美元-850亿美元）。\n2022订阅服务到达9亿次，同比增长20%。\n2022服务营收为780亿美元，同比增长14%，但远低于去年的27%的增长率。',
    tags: ['aapl'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/apple-app-store-revenue-update-shows-slowing-growth-.html',
    uuid: '4749ee7d-1502-48d5-8ce5-175e172e97f2',
    date: '2023-01-11T01:05:07.792Z',
  },
  {
    title: 'Coinbase再裁950人',
    content:
      'CEO在声明中写到“我们在审视2023年可能遇到的不同境况后，得出一个显而易见的结论，就是我们需要减少开支以保证在任何境况下都能运营下去”。\n被裁员工数占总员工数的20%，预计可以节省25%运营支出。\n',
    tags: ['coin', 'crypto'],
    sourceLink:
      'https://www.npr.org/2023/01/10/1148163220/coinbase-layoffs-crypto-winter-bitcoin',
    uuid: '68c67378-ad2d-4293-b4b3-87e532826297',
    date: '2023-01-11T00:35:37.725Z',
  },
  {
    title: '美国最大房贷银行：富国银行，决定大规模缩减房贷业务',
    content:
      '富国银行准备只向银行，理财客户，和一些少数族裔社区提供住房贷款服务，而不是“所有人”。\n富国银行的第三方贷款收购业务将关闭，大部分贷款相关资产也将卖出。\n管理层表示监管压力和高利率是促使这个决定的主要原因。',
    tags: ['housing', 'wfc'],
    sourceLink:
      'https://www.cnbc.com/2023/01/10/wells-fargo-once-the-no-1-player-in-mortgages-is-stepping-back-from-the-housing-market.html',
    uuid: 'ad6cee43-f83a-4bf1-b419-9924e96e81da',
    date: '2023-01-11T00:21:15.854Z',
  },
  {
    title: '消费者对住房市场的信心有所回升。',
    content:
      'Fannie Mae的月度住房情绪指数显示情绪从11月到 12 月有所改善。\n21%的受访者表示现在是购房好时机，高于11月的16%。\n大多数消费者认为房价将在未来12个月内会下跌，但房屋贷款利率将会下降。',
    tags: ['real estate', ' housing', ''],
    sourceLink:
      'https://www.cnbc.com/2023/01/09/consumer-confidence-in-housing-rises-as-prices-fall.html',
    uuid: 'c436aea5-fb06-4ec7-847d-033344669c3a',
    date: '2023-01-09T22:55:30.337Z',
  },
  {
    title: '辉瑞CEO：2022 年是我们公司历史上最成功的年份之一',
    content: '目前正在把Paxlovid送往中国\n未来18个月将生产19个新产品',
    tags: ['pfe'],
    sourceLink:
      'https://www.cnbc.com/video/2023/01/09/pfizer-ceo-2022-was-one-of-the-most-successful-years-in-our-corporate-history.html',
    uuid: '80b754e1-e5b3-4201-8c13-b4e2acce8764',
    date: '2023-01-09T22:46:08.838Z',
  },
  {
    title: '马云将放弃了对蚂蚁集团的控制权',
    content:
      '该消息显示出中国政府可能放松对科技行业的监管力度\n高盛将阿里巴巴列入坚定买入名单,认为阿里巴巴最差的日子已经过去，目前价格合理，接下来公司将享受广告业务，金融科技，和云业务带来的增长。\n阿里巴巴周一上涨3%',
    tags: ['baba', 'fintech', 'china'],
    sourceLink:
      'https://www.barrons.com/articles/alibaba-hong-kong-stock-price-jack-ma-ant-51673253910',
    uuid: 'ad50e989-1814-4777-a042-9037c5c3b044',
    date: '2023-01-09T22:15:41.199Z',
  },
  {
    title: 'Lululemon下调第四季度利率指引,大跌近10%。',
    content:
      'Lululemon 表示，预计第四季度毛利率将下降 90-110 个基点，而此前预期为增长 10-20 个基点。\n不过，该公司将其第四季度净收入预期上调了0.5亿美元。\nLululemon库存继续增加显示经济衰退影响对富有消费者也开始产生影响。',
    tags: ['lulu', 'retail'],
    sourceLink:
      'https://finance.yahoo.com/news/lululemon-athletica-raises-fourth-quarter-115148722.html',
    uuid: '3e599c50-a47e-4e45-8c05-a1d6a2ef4c3c',
    date: '2023-01-09T22:07:55.821Z',
  },
  {
    title: '美股高开低走。市场期待这周的CPI报告和银行股的财报。',
    content:
      '科技股领涨，纳斯达克上涨0.63%。\n卫生保健，消费必需品领跌，标普500下跌0.08%。\n周四12月CPI指数即将发布。\n周五银行股将率先发布财报开启财报季。',
    tags: ['cpi'],
    sourceLink:
      'https://seekingalpha.com/news/3923039-sp500-dow-jones-nasdaq-stock-market-tech-stocks-rally-cpi-data',
    uuid: 'c4933c5e-c5df-4cad-961e-1bf154b8aa1e',
    date: '2023-01-09T21:46:39.004Z',
  },

  {
    title: 'Compass is cutting more labor',
    content:
      '* Compass CEO does not think the price will crash.\n* Excluding the luxury market, inventory is down year over year.',
    tags: ['COMP'],
    uuid: '0dca3183-b644-4161-b7a8-5a3f4031be08',
    date: '2023-01-09T15:36:33.710Z',
  },
  {
    title: '火币网宣布裁员20%',
    content:
      '由FTX破产造成的币圈信任危机继续发酵\n火币网原生币下跌7%\n昨天Genesis宣布裁员30%, Silvergate宣布裁员40%',
    tags: ['crypto', ' huobi', ' gensis'],
    sourceLink:
      'https://www.coindesk.com/business/2023/01/05/crypto-layoffs-heres-the-grim-count-since-april/',
    uuid: 'bea7b139-16e9-4a68-a93a-96638bbe5599',
    date: '2023-01-06T23:30:39.475Z',
  },
  {
    title:
      'FTX原CEO Sam Bankman-Fried由律师发表声明说他需要用他Robinhood的持股来支付律师费',
    content:
      '他拥有的Robinhood股票目前价值4亿5千万美元\n理论上来说，这些股票属于Sam和他的FTX共同创始人\n已破产的FTX和BlockFi债务人也同时希望得到这些股票来处理赔偿\n同时美国司法部也希望扣押这些股票',
    tags: ['hood', 'ftx', 'crypto', 'blockfi'],
    sourceLink:
      'https://finance.yahoo.com/news/sam-bankman-fried-lawyers-just-151904468.html',
    uuid: '4f5b2339-5c84-4787-81e2-3781a9b0a8b0',
    date: '2023-01-06T23:24:15.322Z',
  },
  {
    title: '由于持续的通胀压力，Party City准备申请破产',
    content:
      '股价下跌58%,目前只有15美分\n昨天，另一家实体店零售商Bed Bath & Beyong也在考虑申请破产',
    tags: ['retail'],
    sourceLink:
      'https://nypost.com/2023/01/06/party-city-plans-bankruptcy-filing-within-weeks-report/',
    uuid: '09f71da1-90f0-458d-b895-ee9daa1c209f',
    date: '2023-01-06T22:55:35.571Z',
  },
  {
    title: 'Costco在12月的营收同比上涨7%，远好于预期。',
    content:
      '2022年时间较晚的节日假期可能导致消费者有更多的时间进行消费。\nCostco的报告对其他大型超市，比如沃尔玛，Target,有积极意义。\nCostco股价今天大涨7.26%',
    tags: ['cost', 'grocery'],
    sourceLink:
      'https://seekingalpha.com/news/3922705-costco-stock-surges-on-stronger-than-expected-sales-report',
    uuid: 'a3d5b6ba-7b98-4cff-8826-e8e544feb291',
    date: '2023-01-06T22:43:44.497Z',
  },
  {
    title: '美国劳动部发布12月就业报告显示就业市场继续火热。',
    content:
      '12月美国失业率下跌至3.5%，并且新增高于预期的223000个岗位（预期新增200000个岗位）\n但报告中的薪资增速放缓对降低通胀实现经济软着陆有积极意义。\n美股三大指数上涨2%+。纳斯达克上涨2.56%,标普500上涨2.28%。',
    tags: ['jobs', 'us'],
    sourceLink:
      'https://seekingalpha.com/news/3922595-dow-sp-and-nasdaq-remain-muted-ahead-of-nonfarm-payrolls-report',
    uuid: '52a1b8d7-b9b1-4738-973d-c85af6cd396a',
    date: '2023-01-06T22:35:10.655Z',
  },
  {
    title: '梅西百货警告第四季度营收将低于预期',
    content:
      '梅西百货CEO指出消费者在节日假期的消费需求仍然强劲，但在平时的消费力继续下滑\n预计接下去一年对零售行业将更加具有挑战\n梅西百货股价盘后下跌4.2%',
    tags: ['m', ' retail'],
    sourceLink:
      'https://www.cnbc.com/2023/01/06/macys-cuts-holiday-quarter-forecast-citing-squeeze-on-shoppers-wallets.html',
    uuid: '0538fb67-5bf2-4b9f-bba3-314a1954abc2',
    date: '2023-01-06T22:21:23.234Z',
  },
  {
    title: '美国食品药品监督管理局FDA批准了Biogen(BIIB)的阿尔茨海默氏症药物',
    content:
      'Biogen药物Lecanemab在对轻度阿尔茨海默氏症病人的临床试验中显示有减缓认知衰退的作用\n但同时该药物有导致脑部肿胀充血的风险\n该药物一年疗程在美国定价为一年$26,500美元\nBiogen今天上涨2.82%',
    tags: ['medicine', 'BIIB'],
    sourceLink:
      'https://www.cnbc.com/2023/01/06/alzheimers-disease-fda-decision-on-biogen-eisai-treatment-lecanemab.html',
    uuid: '4dd5f2b6-fdff-42ee-bb21-2bc4dfad50d1',
    date: '2023-01-06T22:02:41.000Z',
  },
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
];
