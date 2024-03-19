export const getTradableItemsByUuids = (uuids): any[] => {
  const tradableMap = new Map();
  for (let item of tradable) {
    tradableMap.set(item.uuid.toLowerCase(), item);
  }

  return uuids
    .map((uuid) => tradableMap.get(uuid.toLowerCase()))
    .filter((item) => item !== undefined);
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
    uuid: 'SPGI:NYSE',
    displayName: 'S&P Global Inc',
    ticker: 'SPGI',
    organizationUuid: 'spgi',
    irAddress: 'https://investor.spglobal.com/',
  },
  {
    uuid: 'ROST:NASDAQ',
    displayName: 'Ross Stores Inc',
    ticker: 'ROST',
    organizationUuid: 'rost',
    irAddress: 'https://investors.rossstores.com/',
  },
  {
    uuid: 'CHPT:NASDAQ',
    displayName: 'ChargePoint Holdings Inc',
    ticker: 'CHPT',
    organizationUuid: 'chpt',
    irAddress: 'https://investors.chargepoint.com/overview/default.aspx',
    logoLink: 'https://companieslogo.com/img/orig/CHPT_BIG-9ee76522.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/CHPT_BIG-9ee76522.png',
  },
  {
    uuid: 'NIO:NYSE',
    displayName: 'NIO Inc',
    ticker: 'NIO',
    organizationUuid: 'nio',
    logoLink: 'https://i.ibb.co/j3ZmyNB/nio-600.png',
    irAddress: 'https://ir.nio.com/financials/quarterly-results',
    largeLogoLink: 'https://i.ibb.co/cwnXtjn/NIO-BIG.png',
  },
  {
    uuid: 'AVAV:NASDAQ',
    displayName: 'AeroVironment Inc',
    ticker: 'AVAV',
    organizationUuid: 'avav',
    irAddress: 'https://investor.avinc.com/',
    logoLink: 'https://companieslogo.com/img/orig/AVAV_BIG-17003aa3.png',
  },
  {
    uuid: 'GTLB:NASDAQ',
    displayName: 'GitLab Inc',
    ticker: 'GTLB',
    organizationUuid: 'gtlb',
    irAddress: 'https://ir.gitlab.com/',
  },
  {
    uuid: 'CNQ:NYSE',
    displayName: 'Canadian Natural Resources Ltd',
    ticker: 'CNQ',
    organizationUuid: 'cnq',
  },
  {
    uuid: 'CRON:NASDAQ',
    displayName: 'Cronos Group Inc',
    ticker: 'CRON',
    organizationUuid: 'cron',
  },
  {
    uuid: 'BBWI:NASDAQ',
    displayName: 'Bath & Body Works Inc',
    ticker: 'BBWI',
    organizationUuid: 'bbwi',
  },
  {
    uuid: 'MLCO:NASDAQ',
    displayName: 'Melco Resorts & Entertainment Ltd',
    ticker: 'MLCO',
    organizationUuid: 'mlco',
  },
  {
    uuid: 'FSR:NYSE',
    displayName: 'Fisker Inc',
    ticker: 'FSR',
    organizationUuid: 'fsr',
  },
  {
    uuid: 'AXON:NASDAQ',
    displayName: 'Axon Enterprise Inc',
    ticker: 'AXON',
    organizationUuid: 'axon',
    irAddress: 'https://investor.axon.com/',
  },
  {
    uuid: 'VEEV:NYSE',
    displayName: 'Veeva Systems Inc',
    ticker: 'VEEV',
    organizationUuid: 'veev',
  },
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
    uuid: 'HCP:NASDAQ',
    displayName: 'HashiCorp Inc',
    ticker: 'HCP',
    organizationUuid: 'hcp',
    irAddress: 'https://investor.hcpi.com/',
  },

  {
    uuid: 'JWN:NYSE',
    displayName: 'Nordstrom Inc',
    ticker: 'JWN',
    organizationUuid: 'jwn',
    irAddress: 'https://investor.nordstrom.com/',
    logoLink: 'https://companieslogo.com/img/orig/JWN_BIG-e410ec8a.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/JWN_BIG-e410ec8a.png',
  },
  {
    uuid: 'NVEI:NASDAQ',
    displayName: 'NVEI',
    ticker: 'NVEI',
    organizationUuid: 'nvei',
  },
  {
    uuid: 'IOT:NYSE',
    displayName: 'Samsara Inc',
    ticker: 'IOT',
    organizationUuid: 'iot',
  },
  {
    uuid: 'FL:NYSE',
    displayName: 'Foot Locker Inc',
    ticker: 'FL',
    organizationUuid: 'fl',
  },
  {
    uuid: 'GPS:NYSE',
    displayName: 'Gap Inc',
    ticker: 'GPS',
    organizationUuid: 'gps',
    irAddress: 'https://investors.gapinc.com/',
  },
  {
    ticker: 'TSM',
    uuid: 'TSM:NYSE',
    displayName: 'Taiwan Semiconductor Manufacturing Company Ltd',
    organizationUuid: 'tsm',
    irAddress: 'https://investor.tsmc.com/english',
  },
  {
    ticker: 'ACN',
    uuid: 'ACN:NYSE',
    displayName: 'Accenture PLC',
    organizationUuid: 'acn',
    irAddress: 'https://investor.accenture.com/',
  },
  {
    ticker: 'NOW',
    uuid: 'NOW:NYSE',
    displayName: 'ServiceNow Inc',
    organizationUuid: 'now',
    irAddress: 'https://www.servicenow.com/company/investor-relations.html',
  },
  {
    uuid: 'AEO:NYSE',
    displayName: 'American Eagle Outfitters Inc',
    ticker: 'AEO',
    organizationUuid: 'aeo',
    irAddress: 'https://investors.ae.com/investor-home/default.aspx',
  },
  {
    uuid: 'adp:nasdaq',
    displayName: 'Automatic Data Processing Inc',
    ticker: 'adp',
    organizationUuid: 'adp',
    irAddress: 'https://investors.adp.com/',
  },
  {
    ticker: 'PANW',
    uuid: 'PANW:NASDAQ',
    displayName: 'Palo Alto Networks Inc',
    organizationUuid: 'panw',
    logoLink: 'https://i.postimg.cc/1RfTL6gS/ox-Bhl9i9-400x400.jpg',
  },
  {
    ticker: 'JPM',
    uuid: 'JPM:NYSE',
    displayName: 'JPMorgan Chase & Co',
    organizationUuid: 'jpm',
    irAddress: 'https://www.jpmorganchase.com/',
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
    displayName: 'Taiwan Semiconductor Mfg. Co. Ltd.',
    organizationUuid: 'tsm',
    irAddress: 'https://investor.tsmc.com/english',
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
    uuid: 'tme:nyse',
    displayName: 'Tencent Music Entertainment Group',
    ticker: 'tme',
    organizationUuid: 'tme',
    irAddress: 'https://ir.tencentmusic.com/',
  },
  {
    uuid: 'TSLA:NASDAQ',
    displayName: 'Tesla Inc',
    ticker: 'TSLA',
    organizationUuid: 'tsla',
    irAddress: 'https://ir.tesla.com/',
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
    uuid: 'GOOGL:NASDAQ',
    displayName: 'Alphabet Inc Class A',
    ticker: 'GOOGL',
    organizationUuid: 'googl',
    irAddress: 'https://abc.xyz/investor/',
  },
  {
    uuid: 'GOOG:NASDAQ',
    displayName: 'Alphabet Inc Class C',
    ticker: 'GOOG',
    organizationUuid: 'googl',
  },
  {
    uuid: 'META:NASDAQ',
    displayName: 'Meta Platforms Inc',
    ticker: 'META',
    organizationUuid: 'meta',
  },
  {
    uuid: 'fsr:nyse',
    displayName: 'Fisker Inc',
    ticker: 'fsr',
    organizationUuid: 'fsr',
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
    irAddress: 'https://ir.aboutamazon.com/',
  },
  {
    uuid: 'NVDA:NASDAQ',
    displayName: 'Nvidia Corp',
    ticker: 'NVDA',
    organizationUuid: 'nvda',
    irAddress: 'https://investor.nvidia.com/home/default.aspx',
    logoLink:
      'https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.850.png/1703060329053/nvidia-logo-vert.png',
  },

  {
    uuid: 'BOX:NYSE',
    displayName: 'Box Inc',
    ticker: 'BOX',
    organizationUuid: 'box',
    irAddress: 'https://www.boxinvestorrelations.com/',
    logoLink: 'https://companieslogo.com/img/orig/BOX-f6f9d385.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/BOX-f6f9d385.png',
  },
  {
    uuid: 'AAPL:NASDAQ',
    displayName: 'Apple Inc',
    ticker: 'AAPL',
    organizationUuid: 'aapl',
    logoLink:
      'https://i.ibb.co/42vzsdT/Screenshot-2023-02-06-at-12-09-11-PM.png',
    irAddress: 'https://investor.apple.com/investor-relations/default.aspx',
  },

  {
    uuid: 'AMD:NASDAQ',
    displayName: 'Advanced Micro Devices Inc',
    ticker: 'AMD',
    organizationUuid: 'amd',
    irAddress: 'https://ir.amd.com/',
  },
  {
    uuid: 'CRWD:NASDAQ',
    displayName: 'CrowdStrike Holdings Inc',
    ticker: 'CRWD',
    organizationUuid: 'crwd',
    irAddress: 'https://ir.crowdstrike.com/',
    logoLink: 'https://i.ibb.co/VTQgVXD/download.jpg',
    largeLogoLink: 'https://i.ibb.co/D7dS9sS/Dzws42r-X0-AAWJgd.jpg',
  },
  {
    uuid: 'WSM:NYSE',
    displayName: 'Williams-Sonoma Inc',
    ticker: 'WSM',
    organizationUuid: 'wsm',
    irAddress: 'https://ir.williams-sonomainc.com/',
    logoLink: 'https://companieslogo.com/img/orig/WSM-cbca8e30.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/WSM_BIG-b5248dee.png',
  },
  {
    uuid: 'JBL:NYSE',
    displayName: 'Jabil Inc',
    ticker: 'JBL',
    organizationUuid: 'jbl',
    irAddress: 'https://investors.jabil.com/',
  },
  {
    uuid: 'BEKE:NYSE',
    displayName: 'KE Holdings Inc',
    ticker: 'BEKE',
    organizationUuid: 'beke',
    irAddress: 'https://ir.ke.com/',
  },
  {
    uuid: 'ANET:NYSE',
    displayName: 'Arista Networks Inc',
    ticker: 'ANET',
    organizationUuid: 'anet',
    irAddress: 'https://investors.arista.com/',
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
    uuid: 'gis:nyse',
    displayName: 'General Mills Inc',
    ticker: 'gis',
    organizationUuid: 'gis',
    irAddress: 'https://investors.generalmills.com/',
  },
  {
    uuid: 'tigr:nyse',
    displayName: 'UP Fintech Holding Ltd',
    ticker: 'tigr',
    organizationUuid: 'tigr',
    irAddress: 'https://ir.itiger.com/',
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
    irAddress: 'https://investor.costco.com/overview/default.aspx',
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
    uuid: 'NFLX:NASDAQ',
    displayName: 'Netflix Inc',
    ticker: 'NFLX',
    organizationUuid: 'nflx',
    irAddress: 'https://ir.netflix.net/',
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
    irAddress: 'https://investors.intuit.com/',
    largeLogoLink: 'https://companieslogo.com/img/orig/INTU_BIG-14a0e657.png',
    logoLink: 'https://companieslogo.com/img/orig/INTU-fb19ded3.png',
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
    irAddress: 'https://ir.zscaler.com/',
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
    irAddress: 'https://www.oracle.com/investor/',
  },
  {
    uuid: 'MDB:NASDAQ',
    displayName: 'MongoDB Inc',
    ticker: 'MDB',
    organizationUuid: 'mdb',
    irAddress: 'https://investors.mongodb.com/',
  },
  {
    uuid: 'CRM:NYSE',
    displayName: 'Salesforce Inc',
    ticker: 'CRM',
    organizationUuid: 'crm',
    logoLink: 'https://i.ibb.co/SvT0ptr/CRM.png',
    irAddress: 'https://investor.salesforce.com/overview/default.aspx',
  },
  {
    uuid: 'LEN:NYSE',
    displayName: 'Lennar Corporation',
    ticker: 'LEN',
    organizationUuid: 'len',
    irAddress: 'https://investors.lennar.com/',
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
    logoLink: 'https://i.ibb.co/Xsfmtz7/Lq-QG6o-Zd-400x400.jpg',
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
    uuid: 'AVGO:NASDAQ',
    displayName: 'Broadcom Inc',
    ticker: 'AVGO',
    organizationUuid: 'avgo',
    irAddress: 'https://investors.broadcom.com/',
    logoLink: 'https://i.ibb.co/8s1CB31/AVGO.png',
    largeLogoLink: 'https://i.ibb.co/qg5CjJt/AVGO-BIG.png',
  },

  {
    uuid: 'RIVN:NASDAQ',
    displayName: 'Rivian Automotive Inc',
    ticker: 'RIVN',
    organizationUuid: 'rivn',
    irAddress: 'https://investors.rivian.com/',
    logoLink:
      'https://pbs.twimg.com/profile_images/1199724774613606402/ZTAmKeoe_400x400.jpg',
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
    irAddress: 'https://ir.nio.com/financials/quarterly-results',
  },
  {
    uuid: 'BIRD:NASDAQ',
    displayName: 'Allbirds Inc',
    ticker: 'BIRD',
    organizationUuid: 'bird',
    irAddress: 'https://investor.bird.co/',
  },
  {
    uuid: 'DLTR:NASDAQ',
    displayName: 'Dollar Tree Inc',
    ticker: 'DLTR',
    organizationUuid: 'dltr',
    irAddress: 'https://www.dollartreeinfo.com/',
    largeLogoLink: 'https://companieslogo.com/img/orig/DLTR_BIG-205b5887.png',
    logoLink: 'https://companieslogo.com/img/orig/DLTR-14624b8c.png',
  },
  {
    uuid: 'WOOF:NASDAQ',
    displayName: 'Petco Health and Wellness Company Inc',
    ticker: 'WOOF',
    organizationUuid: 'woof',
    irAddress: 'https://ir.petco.com/',
    logoLink: 'https://companieslogo.com/img/orig/WOOF-a9a9975c.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/WOOF_BIG-194fe206.png',
  },
  {
    uuid: 'CLOV:NASDAQ',
    displayName: 'Clover Health Investments Corp',
    ticker: 'CLOV',
    organizationUuid: 'clov',
    irAddress: 'https://investors.cloverhealth.com/',
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
    irAddress: 'https://ir.uipath.com/',
    largeLogoLink: 'https://i.ibb.co/JsHkFsJ/PATH-BIG.png',
    logoLink: 'https://i.ibb.co/8dbhv4r/PATH.png',
  },
  {
    uuid: 'S:NYSE',
    displayName: 'SentinelOne Inc',
    ticker: 'S',
    organizationUuid: 's',
    irAddress: 'https://investors.sentinelone.com/',
    logoLink: 'https://companieslogo.com/img/orig/S-778d1d19.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/S_BIG-8883656a.png',
  },
  {
    uuid: 'BILI:NASDAQ',
    displayName: 'Bilibili Inc',
    ticker: 'BILI',
    organizationUuid: 'bili',
    irAddress: 'https://ir.bilibili.com/',
    logoLink: 'https://i.ibb.co/LSzQ20z/lh-B6z-WTX-400x400.jpg',
  },
  {
    uuid: 'LULU:NASDAQ',
    displayName: 'Lululemon Athletica Inc',
    ticker: 'LULU',
    organizationUuid: 'lulu',
  },
  {
    uuid: 'kbh:nyse',
    displayName: 'KB Home',
    ticker: 'kbh',
    organizationUuid: 'kbh',
    irAddress: 'https://investor.kbhome.com/',
  },
  {
    uuid: 'VRM:NYSE',
    displayName: 'Vroom Inc',
    ticker: 'VRM',
    organizationUuid: 'vrm',
    irAddress: 'https://ir.vroom.com/',
  },
  {
    uuid: 'FDX:NYSE',
    displayName: 'FedEx Corp',
    ticker: 'FDX',
    organizationUuid: 'fdx',
    irAddress: 'https://investors.fedex.com/',
  },
  {
    uuid: 'DKS:NYSE',
    displayName: 'Dick’s Sporting Goods Inc',
    ticker: 'DKS',
    organizationUuid: 'dks',
    irAddress: 'https://investors.dicks.com/investors/default.aspx',
  },
  {
    uuid: 'FUTU:NASDAQ',
    displayName: 'Futu Holdings Ltd',
    ticker: 'FUTU',
    organizationUuid: 'futu',
    irAddress: 'https://ir.futuholdings.com/',
  },
  {
    uuid: 'DG:NYSE',
    displayName: 'Dollar General Corporation',
    ticker: 'DG',
    organizationUuid: 'dg',
    irAddress: 'https://investor.dollargeneral.com/',
  },
  {
    uuid: 'LUV:NYSE',
    displayName: 'Southwest Airlines Co',
    ticker: 'LUV',
    organizationUuid: 'luv',
  },
  {
    uuid: 'SOUN:NASDAQ',
    displayName: 'Sonos Inc',
    ticker: 'SOUN',
    organizationUuid: 'soun',
    irAddress: 'https://investors.sonos.com/',
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
    uuid: 'ADBE:NASDAQ',
    displayName: 'Adobe Inc',
    ticker: 'ADBE',
    organizationUuid: 'adbe',
    irAddress: 'https://www.adobe.com/investor-relations.html',
    logoLink: 'https://i.ibb.co/8mgcJgn/tlf7-MWH-400x400.png',
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
    uuid: 'LOW:NYSE',
    displayName: "Lowe's Companies Inc",
    ticker: 'LOW',
    organizationUuid: 'low',
  },
  {
    uuid: 'AAP:NYSE',
    displayName: 'Advance Auto Parts Inc',
    ticker: 'AAP',
    organizationUuid: 'aap',
  },
  {
    uuid: 'AI:NYSE',
    displayName: 'C3.ai Inc',
    ticker: 'AI',
    organizationUuid: 'ai',
    irAddress: 'https://ir.c3.ai/',
  },
  {
    uuid: 'NVO:NYSE',
    displayName: 'Novo Nordisk A/S',
    ticker: 'NVO',
    organizationUuid: 'nvo',
  },
  {
    uuid: 'VKTX:NASDAQ',
    displayName: 'Viking Therapeutics Inc',
    ticker: 'VKTX',
    organizationUuid: 'vktx',
  },
  {
    uuid: 'ESTC:NYSE',
    displayName: 'Elastic NV',
    ticker: 'ESTC',
    organizationUuid: 'ESTC',
    irAddress: 'https://ir.elastic.co/',
    largeLogoLink: 'https://companieslogo.com/img/orig/ESTC_BIG-69f72e11.png',
    logoLink: 'https://companieslogo.com/img/orig/ESTC-4d81ee09.png',
  },
  {
    uuid: 'celh:NASDAQ',
    displayName: 'Celsius Holdings Inc',
    ticker: 'celh',
    organizationUuid: 'celh',
  },
  {
    uuid: 'ADSK:NASDAQ',
    displayName: 'Autodesk Inc',
    ticker: 'ADSK',
    organizationUuid: 'adsk',
    irAddress: 'https://investors.autodesk.com/',
  },
  {
    uuid: 'DELL:NYSE',
    displayName: 'Dell Technologies Inc',
    ticker: 'DELL',
    organizationUuid: 'dell',
    irAddress: 'https://investor.delltechnologies.com/',
  },
  {
    uuid: 'BUD:NYSE',
    displayName: 'Anheuser-Busch InBev SA',
    ticker: 'BUD',
    organizationUuid: 'bud',
  },
  {
    uuid: 'DELL:NYSE',
    displayName: 'Dell Technologies Inc',
    ticker: 'DELL',
    organizationUuid: 'dell',
  },
  {
    uuid: 'HPE:NYSE',
    displayName: 'Hewlett Packard Enterprise Co',
    ticker: 'HPE',
    organizationUuid: 'hpe',
  },
  {
    uuid: 'DUOL:NASDAQ',
    displayName: 'Duolingo Inc',
    ticker: 'DUOL',
    organizationUuid: 'duol',
    irAddress: 'https://investors.duolingo.com/',
    logoLink:
      'https://companieslogo.com/img/orig/DUOL-5baebe62.png?t=1660638203&download=true',
    largeLogoLink: 'https://companieslogo.com/img/orig/DUOL_BIG-d5832a76.png',
  },
  {
    uuid: 'PLUG:NASDAQ',
    displayName: 'Plug Power Inc',
    ticker: 'PLUG',
    organizationUuid: 'plug',
  },
  {
    uuid: 'FUBO:NYSE',
    displayName: 'fuboTV Inc',
    ticker: 'FUBO',
    organizationUuid: 'fubo',
    irAddress: 'https://ir.fubo.tv/',
    logoLink: 'https://i.ibb.co/QHRxtVX/Cs31g-GCh-400x400.png',
  },
  {
    uuid: 'TJX:NYSE',
    displayName: 'The TJX Companies Inc',
    ticker: 'TJX',
    organizationUuid: 'tjx',
  },
  {
    uuid: 'OKTA:NASDAQ',
    displayName: 'Okta Inc',
    ticker: 'OKTA',
    organizationUuid: 'okta',
    logoLink: 'https://i.ibb.co/hFPG1rG/OKTA.png',
    largeLogoLink: 'https://i.ibb.co/RTC7vFJ/OKTA-BIG.png',
    irAddress: 'https://investor.okta.com/',
  },
  {
    uuid: 'BIDU:NASDAQ',
    displayName: 'Baidu Inc',
    ticker: 'BIDU',
    organizationUuid: 'bidu',
  },
  {
    uuid: 'LMND:NASDAQ',
    displayName: 'Lemonade Inc',
    ticker: 'LMND',
    organizationUuid: 'lmnd',
  },
  {
    uuid: 'AZO:NYSE',
    displayName: 'AutoZone Inc',
    ticker: 'AZO',
    organizationUuid: 'azo',
  },
  {
    uuid: 'CAVA:NYSE',
    displayName: 'Cava Group Inc',
    ticker: 'CAVA',
    organizationUuid: 'cava',
  },
  {
    uuid: 'DPZ:NYSE',
    displayName: "Domino's Pizza Inc",
    ticker: 'DPZ',
    organizationUuid: 'dpz',
  },
  {
    uuid: 'WDAY:NASDAQ',
    displayName: 'Workday Inc',
    ticker: 'WDAY',
    organizationUuid: 'wday',
    irAddress: 'https://investor.workday.com/',
  },
  {
    uuid: 'AMT:NYSE',
    displayName: 'American Tower Corporation',
    ticker: 'AMT',
    organizationUuid: 'amt',
  },
  {
    uuid: 'FSLR:NASDAQ',
    displayName: 'First Solar Inc',
    ticker: 'FSLR',
    organizationUuid: 'fslr',
  },
  {
    uuid: 'BLNK:NASDAQ',
    displayName: 'Blink Charging Co',
    ticker: 'BLNK',
    organizationUuid: 'blnk',
    irAddress: 'https://ir.blinkcharging.com/',
  },
  {
    uuid: 'SQ:NYSE',
    displayName: 'Block Inc',
    ticker: 'SQ',
    organizationUuid: 'block',
    logoLink: 'https://i.ibb.co/QDj1JK4/OUXxd-W1-400x400.jpg',
    irAddress: 'https://investors.block.xyz/overview/default.aspx',
  },
  {
    uuid: 'AMC:NYSE',
    displayName: 'AMC Entertainment Holdings Inc',
    ticker: 'AMC',
    organizationUuid: 'amc',
    irAddress:
      'https://investor.amctheatres.com/corporate-overview/default.aspx',
    largeLogoLink: 'https://i.ibb.co/yPbRXj3/AMC-BIG.png',
    logoLink: 'https://i.ibb.co/Yk3g32c/AMC.png',
  },
  {
    uuid: 'ARM:NASDAQ',
    displayName: 'Arm Holdings',
    ticker: 'ARM',
    organizationUuid: 'arm',
    irAddress: 'https://investors.arm.com/',
  },
  {
    uuid: 'KSS:NYSE',
    displayName: "Kohl's Corporation",
    ticker: 'KSS',
    organizationUuid: 'kss',
    irAddress: 'https://investors.kohls.com/',
  },
  {
    uuid: 'ASAN:NYSE',
    displayName: 'Asana Inc',
    ticker: 'ASAN',
    organizationUuid: 'asan',
    irAddress: 'https://investors.asana.com/',
    largeLogoLink: 'https://companieslogo.com/img/orig/ASAN_BIG-b201c207.png',
    logoLink: 'https://companieslogo.com/img/orig/ASAN-1325de11.png',
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
    irAddress: 'https://investors.carvana.com/',
    logoLink: 'https://companieslogo.com/img/orig/CVNA-2524654d.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/CVNA_BIG-0e1228ee.png',
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
    irAddress: 'https://investor.docusign.com/',
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
    uuid: 'FL:NYSE',
    displayName: 'Foot Locker Inc',
    ticker: 'FL',
    organizationUuid: 'fl',
    irAddress: 'https://investors.footlocker-inc.com/',
  },
  {
    uuid: 'ANF:NYSE',
    displayName: 'Abercrombie & Fitch Co',
    ticker: 'ANF',
    organizationUuid: 'anf',
    irAddress: 'https://corporate.abercrombie.com/investors',
  },
  {
    uuid: 'JD:NASDAQ',
    displayName: 'JD.com Inc',
    ticker: 'JD',
    organizationUuid: 'jd',
    irAddress: 'https://ir.jd.com/',
    logoLink:
      'https://pbs.twimg.com/profile_images/1283623975201865728/vqGmQsoQ_400x400.jpg',
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
    irAddress: 'https://ir.lixiang.com/',
  },
  {
    uuid: 'EVgo:NASDAQ',
    displayName: 'EVgo Inc',
    ticker: 'EVgo',
    organizationUuid: 'evgo',
    irAddress: 'https://investors.evgo.com/',
  },
  {
    uuid: 'TPVG:NYSE',
    displayName: 'TriplePoint Venture Growth BDC Corp',
    ticker: 'TPVG',
    organizationUuid: 'tpvg',
    irAddress: 'https://ir.tpvg.com/',
  },
  {
    uuid: 'KR:NYSE',
    displayName: 'The Kroger Co',
    ticker: 'KR',
    organizationUuid: 'kr',
    irAddress: 'https://ir.kroger.com/',
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
  {
    uuid: 'CASY:NASDAQ',
    displayName: 'Casey’s General Stores Inc',
    ticker: 'CASY',
    organizationUuid: 'casy',
    irAddress: 'https://investor.caseys.com/',
    logoLink:
      'https://www.caseys.com/medias/sys_master/images/h87/h4a/8895000543262/schema-logo/schema-logo.png',
  },
  {
    uuid: 'onon:nyse',
    displayName: 'On Holding AG',
    ticker: 'ONON',
    organizationUuid: 'onon',
    irAddress: 'https://investors.on-running.com/',
  },
  {
    uuid: 'SMAR:NYSE',
    displayName: 'Smartsheet Inc',
    ticker: 'SMAR',
    organizationUuid: 'smar',
    irAddress: 'https://investors.smartsheet.com/',
  },
  {
    uuid: 'PD:NYSE',
    displayName: 'PagerDuty Inc',
    ticker: 'PD',
    organizationUuid: 'pd',
    irAddress: 'https://investor.pagerduty.com/',
  },
  {
    uuid: 'five:nyse',
    displayName: 'Five Below Inc',
    ticker: 'five',
    organizationUuid: 'five',
    irAddress: 'https://investor.fivebelow.com/',
  },
  {
    uuid: 'ges:nyse',
    displayName: 'Guess? Inc',
    ticker: 'ges',
    organizationUuid: 'ges',
    irAddress: 'https://investors.guess.com/',
  },
  {
    uuid: 'jks:nyse',
    displayName: 'JinkoSolar Holding Co Ltd',
    ticker: 'jks',
    organizationUuid: 'jks',
    irAddress: 'https://ir.jinkosolar.com/',
  },
  {
    uuid: 'ULTA:NASDAQ',
    displayName: 'Ulta Beauty Inc',
    ticker: 'ULTA',
    organizationUuid: 'ulta',
    irAddress: 'https://ir.ulta.com/',
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
    uuid: 'DRI:NYSE',
    displayName: 'Darden Restaurants Inc',
    ticker: 'DRI',
    organizationUuid: 'dri',
    irAddress: 'https://investor.darden.com/',
  },
  {
    uuid: 'chwy:nyse',
    displayName: 'Chewy Inc',
    ticker: 'chwy',
    organizationUuid: 'chwy',
    irAddress: 'https://investor.chewy.com/',
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
    logoLink: 'https://i.ibb.co/tmwKCM6/c61-TLz-Y-400x400.jpg',
  },
  {
    uuid: 'SNAP:NYSE',
    displayName: 'Snap Inc',
    ticker: 'SNAP',
    organizationUuid: 'snap',
    irAddress: 'https://investor.snap.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Snapchat--Logo.png/1024px-Snapchat--Logo.png',
  },
  {
    uuid: 'SNOW:NYSE',
    displayName: 'Snowflake Inc',
    ticker: 'SNOW',
    organizationUuid: 'snow',
    logoLink: 'https://i.ibb.co/jJ4wn7f/42ab-Mq-B6-400x400.jpg',
    largeLogoLink: 'https://i.ibb.co/y45BwVJ/SNOW-BIG.png',
    irAddress: 'https://investors.snowflake.com/',
  },
  {
    uuid: 'TDOC:NYSE',
    displayName: 'Teladoc Health Inc',
    ticker: 'TDOC',
    organizationUuid: 'tdoc',
    logoLink: 'https://i.ibb.co/nMmcN4V/pf-VOD1-Ab-400x400.jpg',
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
    logoLink: 'https://i.ibb.co/m86tHRX/5k32-D4t-400x400.jpg',
    irAddress: 'https://investors.target.com/',
  },
  {
    uuid: 'U:NYSE',
    displayName: 'Unity Software Inc',
    ticker: 'U',
    organizationUuid: 'unity',
    irAddress: 'https://investors.unity.com/overview/default.aspx',
    logoLink: 'https://i.ibb.co/MVzDdH3/Vv-SVu-Ym-I-400x400.jpg',
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
    uuid: 'MU:NASDAQ',
    displayName: 'Micron Technology Inc',
    ticker: 'MU',
    organizationUuid: 'mu',
    irAddress: 'https://investors.micron.com/',
  },
  {
    uuid: 'ZM:NASDAQ',
    displayName: 'Zoom Video Communications Inc',
    ticker: 'ZM',
    organizationUuid: 'zm',
    irAddress: 'https://investors.zoom.us/',
  },
  {
    uuid: 'XPEV:NYSE',
    displayName: 'XPeng Inc',
    ticker: 'XPEV',
    organizationUuid: 'xpeng',
    logoLink: 'https://i.ibb.co/mtkLgbD/download-5.png',
    largeLogoLink: 'https://i.ibb.co/SV7f7Yj/XPEV-BIG.png',
    irAddress: 'https://ir.xiaopeng.com/',
  },
  {
    ticker: 'APP',
    uuid: 'APP:NASDAQ',
    displayName: 'AppLovin Corp',
    irAddress: 'https://investors.applovin.com/',
  },

  {
    ticker: 'SMCI',
    uuid: 'SMCI:NASDAQ',
    displayName: 'Super Micro Computer Inc',
    organizationUuid: 'smci',
    irAddress: 'https://ir.supermicro.com/ir-overview/default.aspx',
    logoLink: 'https://i.ibb.co/CPNfMb3/i-VFx-Tc5-400x400.jpg',
  },
  {
    ticker: 'HD',
    uuid: 'HD:NYSE',
    displayName: 'The Home Depot Inc',
    organizationUuid: 'hd',
    irAddress: 'https://ir.homedepot.com/',
    logoLink:
      'https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg',
  },
  {
    uuid: 'ETSY:NASDAQ',
    displayName: 'Etsy Inc',
    ticker: 'ETSY',
    organizationUuid: 'etsy',
    irAddress: 'https://investors.etsy.com/',
  },
  {
    uuid: 'SNPS:NASDAQ',
    displayName: 'Synopsys Inc',
    ticker: 'SNPS',
    organizationUuid: 'snps',
    irAddress: 'https://investor.synopsys.com/',
  },
  {
    uuid: 'MRVL:NASDAQ',
    displayName: 'Marvell Technology Inc',
    ticker: 'MRVL',
    organizationUuid: 'mrvl',
    irAddress: 'https://investor.marvell.com/',
  },
  {
    uuid: 'MRNA:NASDAQ',
    displayName: 'Moderna Inc',
    ticker: 'MRNA',
    organizationUuid: 'mrna',
    irAddress: 'https://investors.modernatx.com/',
    logoLink: 'https://companieslogo.com/img/orig/MRNA-723e7c1a.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/MRNA_BIG-e94ccd42.png',
  },
  {
    uuid: 'MELI:NASDAQ',
    displayName: 'MercadoLibre Inc',
    ticker: 'MELI',
    organizationUuid: 'meli',
    irAddress: 'https://investor.mercadolibre.com/',
    logoLink: 'https://companieslogo.com/img/orig/MELI-ec0c0e4f.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/MELI_BIG-d1f8e207.png',
  },
  {
    uuid: 'WBD:NASDAQ',
    displayName: 'Warner Bros Discovery Inc',
    ticker: 'WBD',
    organizationUuid: 'wbd',
    irAddress: 'https://investors.wbd.com/',
  },

  {
    uuid: 'LCID:NASDAQ',
    displayName: 'Lucid Group Inc',
    ticker: 'LCID',
    organizationUuid: 'lucid',
    irAddress: 'https://investors.lucidmotors.com/',
  },
  {
    uuid: 'WMT:NYSE',
    displayName: 'Walmart Inc',
    ticker: 'WMT',
    organizationUuid: 'wmt',
    irAddress: 'https://stock.walmart.com/investors/default.aspx',
    logoLink: 'https://i.postimg.cc/k29Fvw9Y/WMT.png',
    largetLogoLink: 'https://i.postimg.cc/9ryY9s3q/WMT-BIG.png',
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
