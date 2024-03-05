import { Organization } from '../people/components/investor-display/investor-display.component';

export const getOrganizationsByUuids = (uuids: string[]) => {
  return organizations.filter((org) => uuids.includes(org.uuid));
};

export const organizations: Organization[] = [
  {
    uuid: 'upst',
    displayName: 'Upstart',
    ticker: 'upst',
    largeLogoLink: 'https://i.ibb.co/28BD51c/UPST-BIG.png',
  },
  {
    uuid: 'cdns',
    displayName: 'Cadence',
    ticker: 'cdns',
    logoLink: 'https://i.ibb.co/1q2P4kC/CDNS.png',
    largeLogoLink: 'https://i.ibb.co/Z6Yrpcm/CDNS-BIG.png',
  },
  {
    uuid: 'anet',
    displayName: 'Arista Networks',
    ticker: 'ANET',
    logoLink: 'https://i.ibb.co/3v3zHJk/ANET.png',
  },
  {
    uuid: 'unity',
    displayName: 'Unity',
    ticker: 'u',
  },
  {
    uuid: 'wday',
    displayName: 'Workday',
    ticker: 'wday',
    largeLogoLink:
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Workday_Logo.png',
  },
  {
    displayName: 'Robinhood',
    uuid: 'hood',
    logoLink:
      'https://pbs.twimg.com/profile_images/1267616128022351873/dZJpsWTD_400x400.jpg',
  },
  {
    uuid: 'crwd',
    logoLink: 'https://i.ibb.co/VTQgVXD/download.jpg',
    name: 'Crowdstrike',
    displayName: 'Crowdstrike',
    largeLogoLink: 'https://i.ibb.co/D7dS9sS/Dzws42r-X0-AAWJgd.jpg',
  },
  {
    uuid: 'zs',
    logoLink: 'https://i.ibb.co/4Z7wr0f/ZS.png',
    largeLogoLink: 'https://i.ibb.co/vVSzkFr/ZS-BIG.png',
    displayName: 'Zscaler',
  },
  {
    uuid: 'lmt',
    largeLogoLink: 'https://i.ibb.co/M6qDjzB/LMT-BIG.png',
    logoLink: 'https://i.ibb.co/Cm27FWs/LMT.png',
    displayName: 'Lockheed Martin',
    ticker: 'LMT',
  },

  {
    uuid: 'orcl',
    ticker: 'ORCL',
    displayName: 'Oracle',
    logoLink: 'https://i.ibb.co/YDHyyPw/z11b-Dhy-400x400.jpg',
    largeLogoLink: 'https://i.ibb.co/xm4zSz9/ORCL-BIG.png',
  },

  {
    displayName: 'MongoDB',
    uuid: 'mdb',
    ticker: 'mdb',
    logoLink: 'https://i.ibb.co/wNXPXtV/MDB.png',
    largeLogoLink: 'https://i.ibb.co/C74QS0y/MDB-BIG.png',
  },
  {
    displayName: 'Airbnb',
    uuid: 'abnb',
    ticker: 'abnb',
    logoLink:
      'https://pbs.twimg.com/profile_images/1604935435007901696/BpgKDmvE_400x400.jpg',
  },
  {
    uuid: 'pdd',
    displayName: 'Pinduoduo',
    ticker: 'pdd',
  },
  {
    uuid: 'data',
    displayName: 'Datadog',
    ticker: 'data',
  },
  {
    displayName: 'OpenAI',
    uuid: 'openai',
  },
  {
    uuid: 'u',
    displayName: 'Unity',
    ticker: 'u',
  },
  {
    uuid: 'docu',
    displayName: 'DocuSign',
    ticker: 'docu',
  },
  {
    uuid: 'now',
    displayName: 'ServiceNow',
    ticker: 'now',
  },
  {
    uuid: 'nvda',
    displayName: 'Nvidia',
    ticker: 'nvda',
  },
  {
    uuid: 'avav',
    displayName: 'AeroVironment',
    ticker: 'avav',
  },
  {
    uuid: 'lulu',
    name: 'Lululemon',
    ticker: 'lulu',
    displayName: 'Lululemon',
    logoLink: 'https://i.ibb.co/hgdjS2g/download-4.png',
    irAddress: 'https://corporate.lululemon.com/investors',
    largeLogoLink: 'https://i.ibb.co/6yZ4bR5/LULU-BIG.png',
  },
  {
    uuid: 'li',
    logoLink: 'https://i.ibb.co/YD47KMh/li-600.png',
    displayName: 'Li Auto',
    ticker: 'li',
    irAddress: 'https://ir.lixiang.com/',
  },
  {
    uuid: 'arm',
    displayName: 'arm',
    ticker: 'arm',
    irAddress: 'https://investors.arm.com/',
    logoLink: 'https://i.ibb.co/vmMPWGF/9jd-Jld-Y9-400x400.jpg',
    backgroundImage: 'https://i.ibb.co/SV4xGvB/1500x500.jpg',
    headquarters: 'Cambridge, UK',
    descriptions: [
      'ARM Holdings is a semiconductor and software design company, widely known for its ARM processors and architectures. ARM is a subsidiary of the SoftBank Group, a Japanese multinational conglomerate, though there were plans for it to be sold to NVIDIA, a deal which was ultimately canceled due to regulatory challenges.',
    ],
  },
  {
    uuid: 'shop',
    name: 'SHOPIFY INC.',
    displayName: 'Shopify',
    ticker: 'shop',
    irAddress: 'https://investors.shopify.com/home/default.aspx',
    logoLink: 'https://i.ibb.co/X2786r1/vn6-Edh-Rg-400x400.jpg',
  },
  {
    uuid: 'amd',
    displayName: 'AMD',
    ticker: 'amd',
    irAddress: 'https://ir.amd.com/',
    logoLink: 'https://i.ibb.co/HFk1hgT/In8-IVKDB-400x400.png',
  },
  {
    uuid: 'coin',
    displayName: 'Coinbase',
    ticker: 'coin',
    logoLink: 'https://i.ibb.co/J2Hd0Sf/A9y-Yenz3-400x400.png',
    irAddress: 'https://investor.coinbase.com/home/default.aspx',
  },
  {
    uuid: 'afrm',
    logoLink: 'https://i.ibb.co/FV2Rww2/AFRM.png',
    largeLogoLink: 'https://i.ibb.co/6XjkHf6/AFRM-BIG.png',
    displayName: 'Affirm',
    name: 'Affirm',
    ticker: 'afrm',
    irAddress: 'https://investors.affirm.com/',
    // Earnings Report:
  },
  {
    uuid: 'pfe',
    displayName: 'Pfizer',
    logoLink: '',
  },
  {
    uuid: 'cat',
    displayName: 'Caterpillar',
    logoLink: 'https://i.ibb.co/JyqMNDQ/CAT.png',
    largeLogoLink: 'https://i.ibb.co/XjRsPWJ/CAT-BIG.png',
    irAddress: 'https://investors.caterpillar.com/overview/default.aspx',
  },
  {
    uuid: 'schw',
    displayName: 'Charles Schwab',
    logoLink: 'https://i.ibb.co/hgb2bmt/SCHW.png',
  },
  {
    uuid: 'sofi',
    displayName: 'SoFi',
    logoLink: 'https://i.ibb.co/Xsfmtz7/Lq-QG6o-Zd-400x400.jpg',
  },
  {
    uuid: 'dis',
    displayName: 'Disney',
    logoLink:
      'https://i.postimg.cc/8z276CVq/Screenshot-2023-02-08-at-2-08-39-PM.png',
  },
  {
    uuid: 'aapl',
    displayName: 'Apple',
    logoLink:
      'https://i.ibb.co/42vzsdT/Screenshot-2023-02-06-at-12-09-11-PM.png',
    irAddress: 'https://investor.apple.com/investor-relations/default.aspx',
    ticker: 'aapl',
  },
  {
    uuid: 'UnitedStatesSecretaryOfTheTreasury',
    displayName: 'Department of the Treasury',
    logoLink:
      'https://i.ibb.co/R680YXf/Seal-of-the-United-States-Department-of-the-Treasury-svg.png',
  },
  {
    uuid: 'FederalReserve',
    displayName: 'Federal Reserve',
    logoLink:
      'https://i.ibb.co/1dmKDZ2/Screenshot-2023-02-07-at-1-08-29-PM.png',
  },
  {
    uuid: 'uber',
    displayName: 'Uber',
    logoLink:
      'https://i.postimg.cc/TY53DhVf/Screenshot-2023-02-08-at-5-32-43-PM.png',
  },
  {
    uuid: 'nvidia',
    displayName: 'Nvidia',
    logoLink:
      'https://i.ibb.co/zhWrySv/Screenshot-2023-02-23-at-8-38-05-PM.png',
  },
  {
    uuid: 'goldmansachs',
    displayName: 'Goldman Sachs',
    logoLink: 'https://i.ibb.co/SXprQts/Goldman-Sachs-svg.png',
  },
  {
    uuid: 'zm',
    displayName: 'Zoom',
    ticker: 'zm',
    largeLogoLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/1920px-Zoom_Logo_2022.svg.png',
  },

  {
    uuid: 'amzn',
    displayName: 'Amazon',
    ticker: 'amzn',
    logoLink: 'https://i.ibb.co/qsZzrS2/download-3.png',
    irAddress: 'https://ir.aboutamazon.com/overview/default.aspx',
  },
  {
    uuid: 'mrk',
    ticker: 'mrk',
    displayName: 'Merck',
    logoLink: 'https://i.ibb.co/sFvQccx/MRK.png',
    largeLogoLink: 'https://i.ibb.co/jGsMtCB/MRK-BIG.png',
    irAddress: 'https://www.merck.com/investor-relations/',
  },
  {
    uuid: 'dash',
    displayName: 'DoorDash',
    logoLink: 'https://i.ibb.co/XVGJwF6/Oav-Did-Hn-400x400.jpg',
    irAddress: 'https://ir.doordash.com/overview/default.aspx',
  },
  {
    uuid: 'cost',
    displayName: 'Costco',
    irAddress: 'https://investor.costco.com/',
  },
  {
    uuid: 'pipersandler',
    displayName: 'Piper Sandler',
    logoLink: 'https://i.ibb.co/P9j9ts8/5l-CBn4v-U-400x400.jpg',
  },
  {
    uuid: 'isrg',
    displayName: 'Intuitive Surgical',
    irAddress: 'https://isrg.intuitive.com/',
  },
  {
    uuid: 'frc',
    displayName: 'First Republic',
    logoLink: 'https://i.ibb.co/zSY73c0/cwm-3-OQE-400x400.png',
  },
  {
    uuid: 'xom',
    displayName: 'Exxon Mobile',
    logoLink: 'https://i.ibb.co/5sV9Fvp/YTOCYYnn-400x400.jpg',
  },
  {
    uuid: 'chegg',
    displayName: 'Chegg',
    logoLink: 'https://i.ibb.co/NKXLJf6/k-QY2-Vrgf-400x400.jpg',
  },
  {
    uuid: 'ibm',
    displayName: 'IBM',
    logoLink: 'https://i.ibb.co/G9Gn6c4/e-JTciq-MK-400x400.jpg',
  },
  {
    uuid: 'lcid',
    displayName: 'LCUID',
    logoLink: 'https://i.ibb.co/9hZsd7y/5h-To8-Mio-400x400.png',
  },
  {
    uuid: 'rivn',
    displayName: 'Rivian',
    ticker: 'rivn',
    irAddress: 'https://rivian.com/investors',
    logoLink:
      'https://pbs.twimg.com/profile_images/1199724774613606402/ZTAmKeoe_400x400.jpg',
  },
  {
    uuid: 'roku',
    displayName: 'Roku',
    ticker: 'roku',
  },
  {
    uuid: 'dis',
    displayName: 'Disney',
    logoLink:
      'https://pbs.twimg.com/profile_images/1624815535505522695/mhZM0n62_400x400.png',
  },
  {
    uuid: 'u',
    displayName: 'Unity',
    logoLink:
      'https://pbs.twimg.com/profile_images/1649093986852937728/TcHloZbL_400x400.jpg',
  },
  {
    uuid: 'fiverr',
    displayName: 'Fiverr',
    logoLink:
      'https://pbs.twimg.com/profile_images/1453339438029869059/Mpk9QXje_400x400.jpg',
  },
  {
    uuid: '1800',
    displayName: '',
    logoLink:
      'https://pbs.twimg.com/profile_images/1543263915911438336/S_LhLnRz_400x400.jpg',
  },
  {
    uuid: 'fslr',
    displayName: 'First Solar',
    logoLink:
      'https://pbs.twimg.com/profile_images/1564338345714630673/FFdm-e9z_400x400.jpg',
  },
  {
    uuid: 'ttwo',
    displayName: 'Take Two Interactive',
    logoLink:
      'https://pbs.twimg.com/profile_images/1564338345714630673/FFdm-e9z_400x400.jpg',
  },
  {
    uuid: 'fl',
    displayName: 'Foot Locker',
    logoLink:
      'https://pbs.twimg.com/profile_images/1564338345714630673/FFdm-e9z_400x400.jpg',
  },
  {
    uuid: 'ms',
    displayName: 'Morgan Stanley',
    logoLink:
      'https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg',
  },
  {
    uuid: 'hd',
    displayName: 'Home Depot',
    logoLink:
      'https://pbs.twimg.com/profile_images/1631347869687898142/ATwo7QZZ_400x400.jpg',
  },
  {
    uuid: 'dltr',
    displayName: 'Dollar Tree',
    logoLink: '',
  },
  {
    uuid: 'bby',
    displayName: 'Best Buy',
    logoLink: '',
  },
  {
    uuid: 'adsk',
    displayName: 'AutoDesk',
    logoLink: '',
  },
  {
    uuid: 'kss',
    displayName: "Kohl's",
    logoLink: '',
  },
  {
    uuid: 'aeo',
    displayName: 'American Eagle',
    logoLink: '',
  },
  {
    uuid: 'low',
    displayName: "Lowe's",
    logoLink: '',
  },
  {
    uuid: 'azo',
    displayName: 'AutoZone',
    logoLink: '',
  },
  {
    uuid: 'wsm',
    displayName: 'Williams Sonoma',
    logoLink: '',
  },
  {
    uuid: 'dks',
    displayName: 'Dick’s Sporting Goods',
    logoLink: '',
  },
  {
    uuid: 'spot',
    displayName: 'Spotify',
    logoLink: 'https://i.ibb.co/2v074vR/vr-PUCDn2-400x400.jpg',
  },
  {
    uuid: 'msft',
    displayName: 'Microsoft',
    logoLink: '',
    ticker: 'msft',
  },
  {
    uuid: 'pypl',
    displayName: 'PayPal',
    logoLink: '',
    ticker: 'pypl',
  },
  {
    uuid: 'morningstaruuid',
    displayName: 'Morningstar',
    logoLink: '',
  },
  {
    uuid: 'c3ai',
    displayName: 'C3.ai',
    largeLogoLink: 'https://i.ibb.co/kXkhTBr/AI-BIG.png',
    logoLink: 'https://i.ibb.co/DpYtVyr/AI.png',
  },
  {
    uuid: 'nflx',
    displayName: 'Netflix',
  },
  {
    uuid: 'hpe',
    displayName: 'HP Enterprise',
    logoLink: '',
  },
  {
    uuid: 'nasdaq',
    displayName: 'Nasdaq',
    logoLink: '',
  },
  {
    uuid: 'sp500',
    displayName: 'S&P 500',
    logoLink: '',
  },
  {
    uuid: 'dow',
    displayName: 'Dow',
    logoLink: '',
  },
  {
    uuid: 'pltr',
    displayName: 'Palantir',
    logoLink: '',
  },
  {
    uuid: 'oil',
    displayName: 'Crude Oil',
    logoLink: '',
  },
  {
    uuid: 'jwn',
    displayName: 'Nordstrom',
    logoLink: '',
  },
  {
    uuid: 'aap',
    displayName: 'Advance Auto Parts',
    logoLink: '',
  },
  {
    uuid: 'dg',
    displayName: 'Dollar General',
    logoLink: '',
  },
  {
    uuid: 'kr',
    displayName: 'Kroger',
    logoLink: '',
  },
  {
    uuid: 'barclaysUuid',
    displayName: 'Barclays',
    logoLink: '',
  },
  {
    uuid: 'nke',
    displayName: 'Nike',
    largeLogoLink: 'https://i.ibb.co/NNbW2D5/NKE.png',
    logoLink: 'https://i.ibb.co/8BVTndT/Oo1-e1-N2-400x400.jpg',
  },
  {
    uuid: 'dfs',
    displayName: 'Discover',
    logoLink: '',
  },
  {
    uuid: 'bx',
    displayName: 'Blackstone',
    logoLink: '',
  },
  {
    uuid: 'cat',
    displayName: 'Caterpillar',
    logoLink: 'https://i.ibb.co/1QGmPWL/nhptx-XQp-400x400.png',
    irAddress: 'https://investors.caterpillar.com/overview/default.aspx',
  },
  {
    uuid: 'meta',
    displayName: 'Meta',
    logoLink: 'https://i.ibb.co/mJdDP5t/Hqrr-Ecr-I-400x400.png',
    irAddress: 'https://investor.fb.com/home/default.aspx',
    ticker: 'meta',
  },
  {
    uuid: 'chgg',
    displayName: 'Chegg',
    logoLink: 'https://i.ibb.co/WgQNfBK/t-UR4-Dt-Gz-400x400.jpg',
  },
  {
    uuid: 'smci',
    displayName: 'Supermicro',
    logoLink: 'https://i.ibb.co/CPNfMb3/i-VFx-Tc5-400x400.jpg',
    headquarters: 'San Jose, CA',
    ticker: 'smci',
    descriptions: [
      'a Total IT Solution Manufacturer for AI, Cloud, Storage and 5G/Edge',
    ],
  },
  {
    uuid: 'lly',
    displayName: 'Eli Lilly',
    logoLink: 'https://i.ibb.co/z8xRgVX/q2-Bx-TXTj-400x400.png',
    website: 'https://www.lilly.com/',
  },
  {
    uuid: 'ttd',
    displayName: 'The Trade Desk',
    logoLink: 'https://i.ibb.co/N2HZGG9/i-Z5-He-FNX-400x400.jpg',
  },
  {
    uuid: 'asna',
    displayName: 'Asana',
    logoLink: 'https://i.ibb.co/qNZ3qvH/ASAN.png',
    largeLogoLink: 'https://i.ibb.co/0G4HbbP/ASAN-BIG.png',
  },
  {
    uuid: 'gtlb',
    displayName: 'GitLab',
    logoLink: 'https://i.ibb.co/ZLYjVFY/GTLB.png',
    largeLogoLink: 'https://i.ibb.co/8sQrshH/GTLB-BIG.png',
  },
  {
    uuid: 'panw',
    displayName: 'Palo Alto Networks',
    logoLink: 'https://i.postimg.cc/1RfTL6gS/ox-Bhl9i9-400x400.jpg',
  },
  {
    uuid: 'path',
    displayName: 'UiPath',
    largeLogoLink: 'https://i.ibb.co/JsHkFsJ/PATH-BIG.png',
    logoLink: 'https://i.ibb.co/8dbhv4r/PATH.png',
  },
  {
    uuid: 'len',
    displayName: 'Lennar',
    logoLink: 'https://i.ibb.co/42xLnxX/LEN.png',
    largeLogoLink: 'https://i.ibb.co/QYY5Zmq/LEN-BIG.png',
  },
  {
    uuid: 'f',
    displayName: 'Ford',
    logoLink: 'https://i.ibb.co/kJyBRKb/Dt5-ZJBL6-400x400.png',
    largeLogoLink: 'https://i.ibb.co/WxGJNBQ/F.png',
  },
  {
    uuid: 'pins',
    displayName: 'Pinterest',
    logoLink: 'https://i.ibb.co/MM85BZX/PINS.png',
    largeLogoLink: 'https://i.ibb.co/DW2VKb5/PINS-BIG.png',
  },
  {
    uuid: 'mrna',
    displayName: 'Moderna',
    logoLink: 'https://companieslogo.com/img/orig/MRNA-723e7c1a.png',
    largeLogoLink: 'https://companieslogo.com/img/orig/MRNA_BIG-e94ccd42.png',
  },
  {
    uuid: 'intu',
    displayName: 'Intuit',
    largeLogoLink: 'https://companieslogo.com/img/orig/INTU_BIG-14a0e657.png',
    logoLink: 'https://companieslogo.com/img/orig/INTU-fb19ded3.png',
  },
  {
    uuid: 'meli',
    displayName: 'MercadoLibre',
    largeLogoLink: 'https://companieslogo.com/img/orig/MELI_BIG-d1f8e207.png',
    logoLink: 'https://companieslogo.com/img/orig/MELI-ec0c0e4f.png',
  },
  {
    uuid: 'kbh',
    displayName: 'KB Home',
    logoLink: 'https://i.ibb.co/n6HcLnf/9-Zx2pmys-400x400.jpg',
  },
  {
    uuid: 'fdx',
    displayName: 'FedEx',
    logoLink: 'https://i.ibb.co/RgwbWB5/T76j415n-400x400.jpg',
  },
  {
    uuid: 'tsm',
    displayName: 'Taiwan Semiconductor',
    logoLink: 'https://i.ibb.co/F8mrjzZ/TSM.png',
  },
  {
    uuid: 'dri',
    displayName: 'Darden Restaurants',
    logoLink: 'https://i.imgur.com/57h8buf.png',
    largeLogoLink: 'https://i.imgur.com/MruHbxv.png',
  },
  {
    uuid: 'axp',
    displayName: 'American Express',
    ticker: 'AXP',
    irAddress: 'https://ir.americanexpress.com/investor-relations/default.aspx',
    descriptions: [
      'American Express (NYSE: AXP) is a globally integrated payments company that provides customers with access to products, insights and experiences that enrich lives and build business success. Our integrated payments platform includes card-issuing, merchant-acquiring and card network businesses. We are a leader in providing payment products and services to a broad range of customers, including consumers, small businesses, mid-sized companies and large corporations around the world.',
      'Founded in 1850 and headquartered in New York, American Express has a heritage built on service and sustained by innovation. American Express® cards issued by American Express as well as by third-party banks and other institutions on the American Express network are accepted at millions of merchants around the world.',
    ],
  },
  {
    displayName: 'Carvana',
    uuid: 'cvna',
    ticker: 'cvna',
  },
  {
    displayName: 'Tesla',
    uuid: 'tsla',
    ticker: 'tsla',
    logoLink: 'https://i.ibb.co/P6jhPKW/6-Ggc4-S5n-400x400.png',
  },
  {
    displayName: 'Google',
    uuid: 'googl',
    logoLink: 'https://i.ibb.co/hM9z9R6/tp-QNbg-Mz-400x400.jpg',
  },
];
