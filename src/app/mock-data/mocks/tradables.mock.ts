export const getTradableItemsByUuids = (uuids): any[] => {
  const lowerCases = uuids.map((uuid) => uuid.toLowerCase());
  return tradable.filter((tradable) =>
    lowerCases.includes(tradable.uuid.toLowerCase())
  );
};

export const getTradableItemByOrganizationUuid = (
  organizationUuid: string
): any => {
  return tradable.find(
    (tradable) => tradable.organizationUuid === organizationUuid
  );
};

export class Tradable {
  ticker: string;
  uuid: string;
  displayName: string;
  organizationUuid: string;
  irAddress?: string;
  logoLink?: string;
  largeLogoLink?: string;
}

export const tradable = [
  {
    uuid: 'EXPE:NASDAQ',
    displayName: 'Expedia Group Inc',
    ticker: 'EXPE',
    organizationUuid: 'expe',
    vote: -1,
  },
  {
    uuid: 'CDNS:NASDAQ',
    displayName: 'Cadence Design Systems Inc',
    ticker: 'CDNS',
    organizationUuid: 'cdns',
  },
  {
    ticker: 'PINS',
    uuid: 'PINS:NYSE',
    displayName: 'Pinterest Inc',
    organizationUuid: 'pins',
    irAddress:
      'https://investor.pinterestinc.com/investor-overview/default.aspx',
    logoLink: 'https://i.ibb.co/MM85BZX/PINS.png',
    largeLogoLink: 'https://i.ibb.co/DW2VKb5/PINS-BIG.png',
  },
  {
    ticker: 'TSM',
    uuid: 'TSM:NYSE',
    displayName: 'Taiwan Semiconductor Manufacturing Company Ltd',
    organizationUuid: 'tsm',
    irAddress: 'https://investor.tsmc.com/english',
  },
  {
    ticker: 'NOW',
    uuid: 'NOW:NYSE',
    displayName: 'ServiceNow Inc',
    organizationUuid: 'now',
  },
  {
    ticker: 'PANW',
    uuid: 'PANW:NYSE',
    displayName: 'Palo Alto Networks Inc',
    organizationUuid: 'panw',
  },
  {
    ticker: 'ISRG',
    uuid: 'ISRG:NASDAQ',
    displayName: 'Intuitive Surgical Inc',
    organizationUuid: 'isrg',
  },
  {
    uuid: 'COIN:NASDAQ',
    displayName: 'Coinbase Global Inc',
    ticker: 'COIN',
    organizationUuid: 'coin',
    logoLink: 'https://i.ibb.co/J2Hd0Sf/A9y-Yenz3-400x400.png',
    irAddress: 'https://investor.coinbase.com/home/default.aspx',
  },
  {
    uuid: 'ABNB:NASDAQ',
    displayName: 'Airbnb Inc',
    ticker: 'ABNB',
    organizationUuid: 'abnb',
  },
  {
    uuid: 'SPOT:NYSE',
    displayName: 'Spotify Technology SA',
    ticker: 'SPOT',
    organizationUuid: 'spot',
    irAddress: 'https://investors.spotify.com/home/default.aspx',
  },
  {
    ticker: 'TSM',
    uuid: 'TSM:NYSE',
    displayName: 'Taiwan Semiconductor Manufacturing Company Ltd',
    organizationUuid: 'tsm',
  },
  {
    uuid: 'HOOD:NASDAQ',
    displayName: 'Robinhood Markets Inc',
    ticker: 'HOOD',
    organizationUuid: 'hood',
    irAddress: 'https://investors.robinhood.com/overview/default.aspx',
    logoLink:
      'https://pbs.twimg.com/profile_images/1267616128022351873/dZJpsWTD_400x400.jpg',
  },
  {
    uuid: 'LABU:NYSEARCA',
    displayName: 'Direxion Daily S&P Biotech Bull 3X Shares ETF',
    type: 'etf',
    ticker: 'LABU',
  },
  {
    uuid: 'TSLA:NASDAQ',
    displayName: 'Tesla Inc',
    ticker: 'TSLA',
    organizationUuid: 'tsla',
  },
  {
    uuid: 'MPW:NYSE',
    displayName: 'Medical Properties Trust Inc',
    ticker: 'MPW',
    type: 'reit',
  },
  {
    uuid: 'URA:NYSEARCA',
    displayName: 'Global X Uranium ETF',
    ticker: 'URA',
    type: 'etf',
  },
  {
    uuid: 'GOOGL:GOOG:NASDAQ',
    displayName: 'Alphabet Inc',
    ticker: 'GOOGL/GOOG',
    organizationUuid: 'googl',
  },
  {
    uuid: 'META:NASDAQ',
    displayName: 'Meta Platforms Inc',
    ticker: 'META',
    organizationUuid: 'meta',
  },
  {
    uuid: 'MSFT:NASDAQ',
    displayName: 'Microsoft Corp',
    ticker: 'MSFT',
    organizationUuid: 'msft',
  },
  {
    uuid: 'AMZN:NASDAQ',
    displayName: 'Amazon.com Inc',
    ticker: 'AMZN',
    organizationUuid: 'amzn',
  },
  {
    uuid: 'NVDA:NASDAQ',
    displayName: 'Nvidia Corp',
    ticker: 'NVDA',
    organizationUuid: 'nvda',
  },
  {
    uuid: 'AAPL:NASDAQ',
    displayName: 'Apple Inc',
    ticker: 'AAPL',
    organizationUuid: 'aapl',
  },

  {
    uuid: 'AMD:NASDAQ',
    displayName: 'Advanced Micro Devices Inc',
    ticker: 'AMD',
    organizationUuid: 'amd',
  },
  {
    uuid: 'CRWD:NASDAQ',
    displayName: 'CrowdStrike Holdings Inc',
    ticker: 'CRWD',
    organizationUuid: 'crwd',
  },
  {
    uuid: 'ANET:NYSE',
    displayName: 'Arista Networks Inc',
    ticker: 'ANET',
    organizationUuid: 'anet',
  },
  {
    uuid: 'LYFT:NASDAQ',
    displayName: 'Lyft Inc',
    ticker: 'LYFT',
    organizationUuid: 'lyft',
  },
  {
    uuid: 'ZG:NASDAQ',
    displayName: 'Zillow Group Inc',
    ticker: 'ZG',
    organizationUuid: 'zg',
  },
  {
    uuid: 'CART:NASDAQ',
    displayName: 'Instacart',
    ticker: 'CART',
    organizationUuid: 'cart',
  },
  {
    uuid: 'PDD:NASDAQ',
    displayName: 'Pinduoduo Inc',
    ticker: 'PDD',
    organizationUuid: 'pdd',
    logoLink: 'https://i.ibb.co/df7fxCk/PDD.png',
    irAddress: 'https://investor.pinduoduo.com/',
  },
  {
    uuid: 'AXP:NYSE',
    displayName: 'American Express Company',
    ticker: 'AXP',
    organizationUuid: 'axp',
  },
  {
    uuid: 'PLTR:NYSE',
    displayName: 'Palantir Technologies Inc',
    ticker: 'PLTR',
    organizationUuid: 'pltr',
    irAddress: 'https://investors.palantir.com/',
  },
  {
    uuid: 'COST:NASDAQ',
    displayName: 'Costco Wholesale Corporation',
    ticker: 'COST',
    organizationUuid: 'cost',
  },
  {
    uuid: 'FSLY:NYSE',
    displayName: 'Fastly Inc',
    ticker: 'FSLY',
    organizationUuid: 'fsly',
  },
  {
    uuid: 'TWLO:NYSE',
    displayName: 'Twilio Inc',
    ticker: 'TWLO',
    organizationUuid: 'twlo',
  },
  {
    uuid: '',
  },
  {
    uuid: 'NFLX:NASDAQ',
    displayName: 'Netflix Inc',
    ticker: 'NFLX',
    organizationUuid: 'nflx',
  },
  {
    uuid: 'SHOP:NYSE',
    displayName: 'Shopify Inc',
    ticker: 'SHOP',
    organizationUuid: 'shop',
  },
  {
    uuid: 'INTU:NASDAQ',
    displayName: 'Intuit Inc',
    ticker: 'INTU',
    organizationUuid: 'intu',
  },
  {
    uuid: 'LMT:NYSE',
    displayName: 'Lockheed Martin Corporation',
    ticker: 'LMT',
    organizationUuid: 'lmt',
  },
  {
    uuid: 'ZS:NASDAQ',
    displayName: 'Zscaler Inc',
    ticker: 'ZS',
    organizationUuid: 'zs',
  },
  {
    uuid: 'LLY:NYSE',
    displayName: 'Eli Lilly and Company',
    ticker: 'LLY',
    organizationUuid: 'lly',
    irAddress: 'https://www.lilly.com/investor-relations',
  },
  {
    uuid: 'ORCL:NYSE',
    displayName: 'Oracle Corporation',
    ticker: 'ORCL',
    organizationUuid: 'orcl',
  },
  {
    uuid: 'MDB:NASDAQ',
    displayName: 'MongoDB Inc',
    ticker: 'MDB',
    organizationUuid: 'mdb',
  },
  {
    uuid: 'CRM:NYSE',
    displayName: 'Salesforce Inc',
    ticker: 'CRM',
    organizationUuid: 'crm',
  },
  {
    uuid: 'LEN:NYSE',
    displayName: 'Lennar Corporation',
    ticker: 'LEN',
    organizationUuid: 'len',
  },
  {
    uuid: 'SPY:NYSE',
    displayName: 'SPDR S&P 500 ETF Trust',
    ticker: 'SPY',
    organizationUuid: 'spy',
  },
  {
    uuid: 'PYPL:NASDAQ',
    displayName: 'PayPal Holdings Inc',
    ticker: 'PYPL',
    organizationUuid: 'pypl',
  },
  {
    uuid: 'AFRM:NASDAQ',
    displayName: 'Affirm Holdings Inc',
    ticker: 'AFRM',
    organizationUuid: 'afrm',
    irAddress: 'https://investors.affirm.com/',
  },
  {
    uuid: 'SOFI:NASDAQ',
    displayName: 'SoFi Technologies Inc',
    ticker: 'SOFI',
    organizationUuid: 'sofi',
  },
  {
    uuid: 'MARA:NASDAQ',
    displayName: 'Marathon Digital Holdings Inc',
    ticker: 'MARA',
    organizationUuid: 'mara',
  },
  {
    uuid: 'DASH:NASDAQ',
    displayName: 'DoorDash Inc',
    ticker: 'DASH',
    organizationUuid: 'dash',
    irAddress: 'https://ir.doordash.com/overview/default.aspx',
    logoLink: 'https://i.ibb.co/XVGJwF6/Oav-Did-Hn-400x400.jpg',
  },
  {
    uuid: 'RIVN:NASDAQ',
    displayName: 'Rivian Automotive Inc',
    ticker: 'RIVN',
    organizationUuid: 'rivn',
  },
  {
    uuid: 'OPEN:NASDAQ',
    displayName: 'Opendoor Technologies Inc',
    ticker: 'OPEN',
    organizationUuid: 'open',
  },
  {
    uuid: 'NIO:NYSE',
    displayName: 'NIO Inc',
    ticker: 'NIO',
    organizationUuid: 'nio',
  },
  {
    uuid: 'NET:NYSE',
    displayName: 'Cloudflare Inc',
    ticker: 'NET',
    organizationUuid: 'net',
    irAddress: 'https://www.cloudflare.net/home/default.aspx',
  },
  {
    uuid: 'PATH:NYSE',
    displayName: 'UiPath Inc',
    ticker: 'PATH',
    organizationUuid: 'path',
  },
  {
    uuid: 'BILI:NASDAQ',
    displayName: 'Bilibili Inc',
    ticker: 'BILI',
    organizationUuid: 'bili',
  },
  {
    uuid: 'LUV:NYSE',
    displayName: 'Southwest Airlines Co',
    ticker: 'LUV',
    organizationUuid: 'luv',
  },
  {
    uuid: 'UBER:NYSE',
    displayName: 'Uber Technologies Inc',
    ticker: 'UBER',
    organizationUuid: 'uber',
    logoLink: 'https://i.ibb.co/h1PC0XC/TPLLaq-YR-400x400.jpg',
    irAddress: 'https://investor.uber.com/home/default.aspx',
  },
  {
    uuid: 'CSIQ:NASDAQ',
    displayName: 'Canadian Solar Inc',
    ticker: 'CSIQ',
    organizationUuid: 'csiq',
  },
  {
    uuid: 'F:NYSE',
    displayName: 'Ford Motor Company',
    ticker: 'F',
    organizationUuid: 'ford',
  },
  {
    uuid: 'SQ:NYSE',
    displayName: 'Block Inc',
    ticker: 'SQ',
    organizationUuid: 'block',
  },
  {
    uuid: 'AMC:NYSE',
    displayName: 'AMC Entertainment Holdings Inc',
    ticker: 'AMC',
    organizationUuid: 'amc',
  },
  {
    uuid: 'ARM:NASDAQ',
    displayName: 'Arm Holdings',
    ticker: 'ARM',
    organizationUuid: 'arm',
    irAddress: 'https://investors.arm.com/',
  },
  {
    uuid: 'ASAN:NYSE',
    displayName: 'Asana Inc',
    ticker: 'ASAN',
    organizationUuid: 'asan',
  },
  {
    uuid: 'BABA:NYSE',
    displayName: 'Alibaba Group Holding Limited',
    ticker: 'BABA',
    organizationUuid: 'baba',
  },
  {
    uuid: 'BBY:NYSE',
    displayName: 'Best Buy Co Inc',
    ticker: 'BBY',
    organizationUuid: 'bby',
  },
  {
    uuid: 'CVNA:NYSE',
    displayName: 'Carvana Co',
    ticker: 'CVNA',
    organizationUuid: 'cvna',
  },
  {
    uuid: 'DDOG:NASDAQ',
    displayName: 'Datadog Inc',
    ticker: 'DDOG',
    organizationUuid: 'ddog',
  },
  {
    uuid: 'DIS:NYSE',
    displayName: 'The Walt Disney Company',
    ticker: 'DIS',
    organizationUuid: 'dis',
    irAddress: 'https://thewaltdisneycompany.com/investor-relations/',
    logoLink:
      'https://pbs.twimg.com/profile_images/1624815535505522695/mhZM0n62_400x400.png',
  },
  {
    uuid: 'DOCU:NASDAQ',
    displayName: 'DocuSign Inc',
    ticker: 'DOCU',
    organizationUuid: 'docu',
  },
  {
    uuid: 'ENPH:NASDAQ',
    displayName: 'Enphase Energy Inc',
    ticker: 'ENPH',
    organizationUuid: 'enph',
  },
  {
    uuid: 'GME:NYSE',
    displayName: 'GameStop Corp',
    ticker: 'GME',
    organizationUuid: 'gme',
  },
  {
    uuid: 'IONQ:NYSE',
    displayName: 'IonQ Inc',
    ticker: 'IONQ',
    organizationUuid: 'ionq',
  },
  {
    uuid: 'JD:NASDAQ',
    displayName: 'JD.com Inc',
    ticker: 'JD',
    organizationUuid: 'jd',
  },
  {
    uuid: 'LABU:NASDAQ',
    displayName: 'Direxion Daily S&P Biotech Bull 3X Shares',
    ticker: 'LABU',
    organizationUuid: 'labu',
  },
  {
    uuid: 'LI:NASDAQ',
    displayName: 'Li Auto Inc',
    ticker: 'LI',
    organizationUuid: 'li',
  },
  {
    uuid: 'LMND:NYSE',
    displayName: 'Lemonade Inc',
    ticker: 'LMND',
    organizationUuid: 'lmnd',
  },
  {
    uuid: 'MTTR:NASDAQ',
    displayName: 'Matterport Inc',
    ticker: 'MTTR',
    organizationUuid: 'mttr',
  },
  {
    uuid: 'NKE:NYSE',
    displayName: 'Nike Inc',
    ticker: 'NKE',
    organizationUuid: 'nke',
  },
  {
    uuid: 'RACE:NYSE',
    displayName: 'Ferrari N.V.',
    ticker: 'RACE',
    organizationUuid: 'race',
  },
  {
    uuid: 'ROKU:NASDAQ',
    displayName: 'Roku Inc',
    ticker: 'ROKU',
    organizationUuid: 'roku',
    irAddress: 'https://www.roku.com/investor',
    logoLink: 'https://i.ibb.co/qND1H1w/u7-ZA1-AOh-400x400.jpg',
  },
  {
    uuid: 'TTD:NASDAQ',
    displayName: 'The Trade Desk Inc',
    ticker: 'TTD',
    organizationUuid: 'ttd',
    logoLink: 'https://i.ibb.co/N2HZGG9/i-Z5-He-FNX-400x400.jpg',
    irAddress: 'https://investors.thetradedesk.com/overview/default.aspx',
  },
  { uuid: 'YETI:NYSE', displayName: 'YETI Holdings Inc', ticker: 'YETI' },
  {
    uuid: 'DKNG:NASDAQ',
    displayName: 'DraftKings Inc',
    ticker: 'DKNG',
    irAddress: 'https://investors.draftkings.com/',
    largeLogoLink: 'https://i.ibb.co/s5YZ99g/DKNG-BIG.png',
    logoLink: 'https://i.ibb.co/5jHSC9g/DKNG.png',
  },
  {
    uuid: 'SCHW:NYSE',
    displayName: 'Charles Schwab Corporation',
    ticker: 'SCHW',
    organizationUuid: 'schw',
  },
  {
    uuid: 'SE:NYSE',
    displayName: 'Sea Limited',
    ticker: 'SE',
    organizationUuid: 'sea',
  },
  {
    uuid: 'SNOW:NYSE',
    displayName: 'Snowflake Inc',
    ticker: 'SNOW',
    organizationUuid: 'snow',
  },
  {
    uuid: 'TDOC:NYSE',
    displayName: 'Teladoc Health Inc',
    ticker: 'TDOC',
    organizationUuid: 'tdoc',
  },
  {
    uuid: 'TEAM:NASDAQ',
    displayName: 'Atlassian Corporation Plc',
    ticker: 'TEAM',
    organizationUuid: 'team',
  },
  {
    uuid: 'TGT:NYSE',
    displayName: 'Target Corporation',
    ticker: 'TGT',
    organizationUuid: 'tgt',
  },
  {
    uuid: 'U:NYSE',
    displayName: 'Unity Software Inc',
    ticker: 'U',
    organizationUuid: 'unity',
  },
  {
    uuid: 'UPST:NASDAQ',
    displayName: 'Upstart Holdings Inc',
    ticker: 'UPST',
    organizationUuid: 'upst',
  },
  {
    uuid: 'W:NYSE',
    displayName: 'Wayfair Inc',
    ticker: 'W',
    organizationUuid: 'wayfair',
  },
  {
    uuid: 'WAL:NYSE',
    displayName: 'Western Alliance Bancorporation',
    ticker: 'WAL',
    organizationUuid: 'wal',
  },
  {
    uuid: 'ZM:NASDAQ',
    displayName: 'Zoom Video Communications Inc',
    ticker: 'ZM',
    organizationUuid: 'zoom',
  },
  {
    uuid: 'XPEV:NYSE',
    displayName: 'XPeng Inc',
    ticker: 'XPEV',
    organizationUuid: 'xpeng',
  },
  { ticker: 'APP', uuid: 'APP:NASDAQ', displayName: 'AppLovin Corp' },

  {
    ticker: 'SMCI',
    uuid: 'SMCI:NASDAQ',
    displayName: 'Super Micro Computer Inc',
    organizationUuid: 'smci',
  },
  {
    ticker: 'EWJ',
    uuid: 'EWJ:NYSEARCA',
    displayName: 'iShares MSCI Japan ETF',
  },
  {
    ticker: 'PDBC',
    uuid: 'PDBC:NYSEARCA',
    displayName:
      'Invesco Optimum Yield Diversified Commodity Strategy No K-1 ETF',
  },
  {
    ticker: 'UNG',
    uuid: 'UNG:NYSEARCA',
    displayName: 'United States Natural Gas Fund LP',
  },
  {
    ticker: 'URA',
    uuid: 'UNG:NYSEARCA',
    displayName: 'Global X Uranium ETF',
  },
];
