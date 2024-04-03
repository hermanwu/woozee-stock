import { UserInteractions } from 'src/interactions/interaction.services';

export const getInteractionsByProductId = (
  productId: string
): UserInteractions => {
  return userInteractions.find(
    (interaction) => interaction.targetUuid === productId
  );
};

export const getInteractionsByOrganizationUuid = (uuid: string) => {
  return userInteractions.filter(
    (interaction) => interaction.targetUuid.toLowerCase() === uuid.toLowerCase()
  )?.[0];
};

export const getInteractionsByPersonUuid = (uuid: string) => {
  return userInteractions.filter(
    (interaction) => interaction.targetUuid === uuid
  )?.[0];
};

export const userInteractions: UserInteractions[] = [
  {
    uuid: '1e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'CART:NASDAQ',
    type: 'tradableItem',
    listUuids: ['ok-earnings'],
    vote: 1,
  },

  {
    uuid: '1e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'CDNS:NASDAQ',
    type: 'tradableItem',
    listUuids: ['bad-earnings'],
    vote: 3,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'EXPE:NASDAQ',
    type: 'tradableItem',
    listUuids: ['bad-earnings'],
    vote: -5,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'ETSY:NASDAQ',
    type: 'tradableItem',
    listUuids: ['bad-earnings'],
    vote: -5,
    targetPrice: 60,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'NET:NYSE',
    type: 'tradableItem',
    listUuids: ['gen-ai', 'cybersecurity'],
    vote: 40,
    targetPrice: 70,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'PINS:NYSE',
    type: 'tradableItem',
    listUuids: ['bad-earnings'],
    vote: -2,
  },
  {
    uuid: '0e9c8ca5-188d-4503-902b-fg46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'DIS:NYSE',
    type: 'tradableItem',
    listUuids: ['ok-earnings'],
  },
  {
    uuid: '0e9c8ca5-188d-4503-902b-fg46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'SPOT:NYSE',
    type: 'tradableItem',
    listUuids: ['good-earnings'],
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-fg46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'smci',
    type: 'stock',
    listUuids: [
      'Revenue 3.66B',
      '103% Growth',
      'Net Income - $296M',
      'Under 50B Market Cap',
    ],
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'TSM:NYSE',
    type: 'tradableItem',
    listUuids: ['gen-ai', 'semiconductor', 'undervalued', 'AI Hardware'],
    vote: 40,
    targetPrice: 120,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'NOW:NYSE',
    type: 'tradableItem',
    listUuids: ['jess-robinhood'],
    vote: 50,
    targetPrice: 750,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'HD:NYSE',
    type: 'tradableItem',
    listUuids: ['Retail'],
    vote: -1,
    targetPrice: 320,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'DASH:NASDAQ',
    type: 'tradableItem',
    listUuids: ['share-economy'],
    vote: 49,
    targetPrice: 100,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'ONON:NYSE',
    type: 'tradableItem',
    listUuids: ['bad-earnings', 'decelerating-growth', 'losing-money'],
    vote: -3,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'PANW:NASDAQ',
    type: 'tradableItem',
    listUuids: ['jess-robinhood', 'ai-hardware', 'cybersecurity'],
    vote: 3,
    targetPrice: 260,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'isrg',
    type: 'stock',
    listUuids: ['20-growth'],
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['etf-citi'],
    targetUuid: 'PDBC:NYSEARCA',
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['etf-citi'],
    targetUuid: 'EWJ:NYSEARCA',
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['etf-citi'],
    targetUuid: 'UNG:NYSEARCA',
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['etf-citi'],
    targetUuid: 'URA:NYSEARCA',
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['undervalued'],
    targetUuid: 'APP:NASDAQ',
    vote: 60,
    targetPrice: 80,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['gen-ai', 'semiconductor', 'datacenter'],
    targetUuid: 'SMCI:NASDAQ',
    vote: 40,
    targetPrice: 650,
  },
  {
    uuid: '0e8c8ca5-188d-4503-902b-ff46b9229a66',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['herman-robinhood'],
    targetUuid: 'SOFI:NASDAQ',
  },
  {
    uuid: 'e186ce29-d607-43b0-ad04-c993dc22dc0e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['herman-robinhood'],
    targetUuid: 'RIVN:NASDAQ',
    vote: -2,
    targetPrice: 10,
  },
  {
    uuid: '4d6e3182-435c-40e0-8ed6-58402657a7e7',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'OPEN:NASDAQ',
  },
  {
    uuid: '4fdaa943-023f-4ac2-b240-19337bc48716',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['crypto'],
    targetUuid: 'SQ:NYSE',
    vote: 50,
    targetPrice: 60,
  },

  {
    uuid: 'ay783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['crypto'],
    targetUuid: 'COIN:NASDAQ',
    vote: 60,
    targetPrice: 200,
  },
  {
    uuid: 'ay783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'AXON:NASDAQ',
    listUuids: ['body-camera'],
    vote: 50,
    targetPrice: 270,
  },
  {
    uuid: 'ay783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['travel'],
    targetUuid: 'DUOL:NASDAQ',
    vote: 10,
    targetPrice: 130,
  },
  {
    uuid: 'ax783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'aapl',
    listUuids: ['talented-employees'],
  },
  {
    uuid: 'aw783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'HOOD:NASDAQ',
    listUuids: ['crypto'],
    vote: 50,
  },

  {
    uuid: 'av783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'AAPL:NASDAQ',
    listUuids: ['spatial-computing', 'magnificent-7', 'undervalued'],
    vote: 60,
    targetPrice: 160,
  },
  {
    uuid: 'au783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'AMZN:NASDAQ',
    listUuids: ['gen-ai', 'magnificent-7', 'hyperscaler'],
    vote: 100,
    targetPrice: 160,
  },
  {
    uuid: 'at783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'TWLO:NYSE',
    listUuids: ['no-growth'],
    vote: -10,
  },
  {
    uuid: 'at783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'pvh:nyse',
    listUuids: ['cyclical', 'Europe'],
    vote: -10,
  },
  {
    uuid: 'at783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'TSLA:NASDAQ',
    listUuids: ['magnificent-7', 'gen-ai', 'ev'],
    vote: 49,
    targetPrice: 170,
  },
  {
    uuid: 'as783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'GOOGL:NASDAQ',
    listUuids: ['magnificent-7', 'gen-ai', 'undervalued', 'hyperscaler'],
    vote: 60,
    targetPrice: 130,
  },
  {
    uuid: 'ar783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'META:NASDAQ',
    listUuids: ['good-earnings', 'gen-ai', 'undervalued'],
    vote: 199,
    targetPrice: 470,
  },
  {
    uuid: 'ar783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'META',
    listUuids: ['proprietary-data', 'network-effects'],
    vote: 50,
  },
  {
    uuid: 'aq783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'NVDA:NASDAQ',
    listUuids: [
      'good-earnings',
      'gen-ai',
      'magnificent-7',
      'semiconductor',
      'datacenter',
    ],
    vote: 99,
    targetPrice: 650,
  },
  {
    uuid: 'ap783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'MSFT:NASDAQ',
    listUuids: ['good-earnings', 'gen-ai', 'magnificent-7', 'hyperscaler'],
    targetPrice: 320,
    vote: 199,
  },
  {
    uuid: 'an783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'MPW:NYSE',
    listUuids: ['trending', 'cheap'],
  },
  {
    uuid: 'an783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'WMT:NYSE',
    listUuids: ['Retail', 'undervalued'],
    vote: 5,
    targetPrice: 175,
  },
  {
    uuid: 'am783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'cvna',
    listUuids: ['no-differentiation'],
    vote: -1,
  },
  {
    uuid: 'al783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'crwd',
    listUuids: ['cybersecurity', 'network-effect'],
  },
  {
    uuid: 'ak783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'axp',
    listUuids: ['high-net-profit'],
  },
  {
    uuid: 'aj783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'arm',
    listUuids: ['trending'],
  },

  {
    uuid: 'ai783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'LULU:NASDAQ',
    listUuids: ['Clothing'],
    vote: 5,
  },
  {
    uuid: 'ai783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'ULTA:NASDAQ',
    listUuids: ['cosmetics'],
    vote: 5,
    targetPrice: 515,
  },
  {
    uuid: 'aj783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'lly',
    listUuids: ['high-growth', 'profitable-15%'],
  },
  {
    uuid: 'ai783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'nio',
    listUuids: ['founder-led', 'differentiation'],
  },
  {
    uuid: 'ai783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'zs',
    listUuids: ['high-growth', 'founder-led', 'experienced-ceo'],
  },
  {
    uuid: 'ah783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    targetUuid: 'nflx',
    listUuids: ['talented-employees', '10-margin', '10-growth'],
    vote: 5,
  },
  {
    uuid: 'ag783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',

    targetUuid: 'lmt',
    listUuids: ['defense-contractor'],
  },
  {
    uuid: 'af783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'coin',
    type: 'stock',
    listUuids: ['excellent-ceo', 'founder-led', 'crypto'],
  },
  {
    uuid: 'ae783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'meta',
    type: 'stock',
    listUuids: [
      'excellent-ceo',
      'founder-led',
      '25-growth',
      '35-net-margin',
      '40-operating-margin',
      'dividend',
      'share-buyback',
    ],
  },
  {
    uuid: 'ad783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'orcl',
    type: 'stock',
    listUuids: ['friend-recommended'],
  },
  {
    uuid: 'ad783991-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'cost:nasdaq',
    type: 'tradableItem',
    vote: 10,
    targetPrice: 550,
  },
  {
    uuid: 'ac783991-d90b-44f2-8268-5af4efbbe2bz',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'mdb:nasdaq',
    type: 'tradableItem',
    listUuids: ['no-differentiation'],
    targetPrice: 250,
    vote: 15,
  },
  {
    uuid: 'ab783991-d90b-44f2-8268-5af4efbbe2bz',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'lisa-su',
    type: 'person',
    listUuids: ['visionary'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe2bz',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'chatgpt',
    type: 'product',
    listUuids: ['using'],
  },

  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe2az',
    targetUuid: 'abnb',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    listUuids: ['talented-employees', 'founder-led', 'no-differentiation'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe2ay',
    targetUuid: 'DKNG:NASDAQ',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['high-growth', 'online-gambling'],
    vote: 15,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26y',
    targetUuid: 'pdd',
    type: 'stock',
    userUuid: 'herman.wrt@gmail.com',
    vote: 1,
    listUuids: ['growth'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26w',
    targetUuid: 'amd',
    type: 'stock',
    userUuid: 'herman.wrt@gmail.com',
    vote: 1,
    listUuids: [
      'friends-working-there',
      'great-ceo',
      'talented-employees',
      'AI',
    ],
  },

  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26v',
    targetUuid: 'amzn',
    type: 'stock',
    userUuid: 'herman.wrt@gmail.com',
    vote: 1,
    listUuids: ['talented-employees', 'gen-ai'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26u',
    targetUuid: 'amazon-prime',
    userUuid: 'herman.wrt@gmail.com',
    type: 'product',
    listUuids: ['using'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26t',
    targetUuid: 'docu',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    listUuids: ['no-differentiation'],
    vote: -1,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26s',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'alex-karp',
    type: 'person',
    listUuids: ['liked'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26r',
    using: 1,
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'robinhood-app',
    type: 'product',
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26q',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'pltr',
    type: 'stock',
    listUuids: ['talented-employees', 'founder-led', 'high-volatility'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26r',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'hood',
    type: 'stock',
    listUuids: ['talented-employees', 'founder-led', 'high-volatility', '10x'],
    vote: 5,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26p',
    targetUuid: 'afrm',
    userUuid: 'herman.wrt@gmail.com',
    type: 'stock',
    listUuids: ['short-queeze-potential', 'high-volatility'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26o',
    targetUuid: 'nio-power-swap-station',
    userUuid: 'herman.wrt@gmail.com',
    type: 'product',
    listUuids: ['differentiation'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26n',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'anet',
    type: 'stock',
    listUuids: ['friend-recommended', 'gen-ai'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26m',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'cuda',
    type: 'product',
    listUuids: ['differentiation'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26l',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'snow',
    type: 'stock',
    listUuids: ['talented-employees', 'experienced-ceo'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26l',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'intu',
    type: 'stock',
    listUuids: ['friends-working-there'],
    vote: 15,
    targetPrice: 450,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4efbbe26i',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'tobby-lutke',
    type: 'person',
    vote: 10,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26h',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'lululemon-clothing',
    type: 'product',
    using: 1,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26h',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'costco-membership',
    type: 'product',
    using: 1,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26g',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'googl',
    type: 'stock',
    listUuids: ['talented-employees', 'differentiation', 'proprietary-data'],
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26f',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'elon-musk',
    type: 'person',
    vote: 100,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26e',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'tsla',
    type: 'stock',
    listUuids: [
      '10-growth',
      '10-margin',
      'talented-employees',
      'founder-led',
      'excellent-ceo',
      'self-driving-leader',
    ],
    vote: 11,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26c',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'nvda',
    type: 'stock',
    listUuids: ['talented-employees', 'founder-led', 'differentiation'],
    vote: 3,
  },
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe26d',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'msft',
    type: 'stock',
    listUuids: [
      'talented-employees',
      'competitive-advantages',
      'friends-working-there',
      'excellent-ceo',
      'LLM',
      'AI',
      '20-growth',
      '62B Revenue',
      '35% Net Margin',
    ],
  },
  {
    uuid: '79783a92-d90b-44f2-8268-5af4efbce264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'tony-xu',
    vote: 10,
    type: 'person',
  },
  {
    uuid: '79783992-d90b-44f2-8268-5af4efbce264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'brian-armstrong',
    vote: 10,
    type: 'person',
  },
  {
    uuid: '1',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'dafe59d4-d694-4981-affb-e777745940aa',
    type: 'opinion',
    saved: true,
  },
  {
    uuid: '2',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'f3314d82-b904-40a8-9fb3-c245d9edfbb5',
    type: 'opinion',
    saved: true,
    bullish: 1,
  },
  {
    uuid: '4',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: '700e6257-0182-449f-a567-9ad44f4d7761',
    saved: true,
    type: 'opinion',
    bullish: 1,
  },
  {
    uuid: '5',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: '79783991-d90b-44f2-8268-5af4efbbe264',
    type: 'opinion',
  },
  {
    uuid: '79783992-d90b-44f2-8268-5af4efbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'processor-architectures',
    saved: true,
    type: 'product',
  },

  {
    uuid: '161a445a-750b-4d75-9fa1-64fd1b2da25d',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['gen-ai', 'semiconductor', 'datacenter'],
    targetUuid: 'AMD:NASDAQ',
    vote: 49,
    targetPrice: 120,
  },
  {
    uuid: '4e24d0bc-62ca-4914-98b6-a5ac49493482',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['cybersecurity'],
    targetUuid: 'CRWD:NASDAQ',
    vote: 50,
    targetPrice: 220,
  },
  {
    uuid: '9c8e7863-b2b2-4a4c-80cc-d8dfddfbd38e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['datacenter', 'gen-ai'],
    vote: 50,
    targetUuid: 'ANET:NYSE',
    targetPrice: 230,
  },
  {
    uuid: '43ac6967-2ec8-45ed-94ab-cdf5a5f286d6',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['ecommerce', 'china', 'undervalued'],
    targetUuid: 'PDD:NASDAQ',
    vote: 49,
  },
  {
    uuid: 'f0b61ed4-17c7-402e-a91f-de99ca82c732',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'AXP:NYSE',
  },
  {
    uuid: 'f095f0a9-ace0-4c23-8316-43e090192597',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'LI:NASDAQ',
  },
  {
    uuid: 'a515c481-5d22-465a-8a79-080488914780',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['regulatory-advantages', 'gen-ai'],
    targetUuid: 'PLTR:NYSE',
    targetPrice: 20,
    vote: 50,
  },
  {
    uuid: 'a515c481-5d22-465a-8a79-080488914781',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['undervalued', 'cyclical'],
    targetUuid: 'anf:nyse',
    targetPrice: 150,
    vote: 50,
  },

  {
    uuid: '7e78967a-db6a-4bb3-aa47-a26bae7dba9c',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['jess-robinhood'],
    targetUuid: 'NFLX:NASDAQ',
    vote: 20,
    targetPrice: 500,
  },
  {
    uuid: '6e0869a0-29c6-441f-86f4-b2efe245c0a2',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['live-sports'],
    targetUuid: 'FUBO:NYSE',
    vote: 1,
  },
  {
    uuid: '6e0869a0-29c6-441f-86f4-b2efe245c0a2',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['china', 'decreasing-revenue'],
    targetUuid: 'FUTU:NASDAQ',
    vote: 1,
    targetPrice: 55,
  },
  {
    uuid: '6e0869a0-29c6-441f-86f4-b2efe245c0a2',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['ecommerce'],
    targetUuid: 'SHOP:NYSE',
    vote: 50,
    targetPrice: 60,
  },
  {
    uuid: '86202f40-e3e9-42f6-a48e-0f3b66f2035e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'INTU:NASDAQ',
    vote: 6,
    targetPrice: 400,
  },
  {
    uuid: '86202f40-e3e9-42f6-a48e-0f3b66f2035h',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'BOX:NYSE',
    targetPrice: 25,
    vote: 1,
  },
  {
    uuid: '86202f40-e3e9-42f6-a48e-0f3b66f2035e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['semiconductor'],
    targetUuid: 'AVGO:NASDAQ',
    vote: 1,
    targetPrice: 900,
  },
  {
    uuid: '86202f40-e3e9-42f6-a48e-0f3b66f2035e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['weapons', 'raised-guidance'],
    targetUuid: 'AVAV:NASDAQ',
    vote: 50,
    targetPrice: 160,
  },
  {
    uuid: '86202f40-e3e9-42f6-a48e-0f3b66f2035e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['no-differentiation'],
    targetUuid: 'GTLB:NASDAQ',
    vote: -1,
  },
  {
    uuid: 'fe44ded2-2c8e-4f08-96ea-48e765e73b55',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['regulatory-advantages'],
    targetUuid: 'LMT:NYSE',
  },
  {
    uuid: 'dbf0c1cf-d628-455c-ac20-92e275ac029d',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['cybersecurity'],
    targetUuid: 'ZS:NASDAQ',
    vote: 20,
    targetPrice: 210,
  },
  {
    uuid: 'c476af82-e38f-4c92-8ee3-dbbd232ae518',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['weight-loss', 'regulatory-advantages'],
    targetUuid: 'LLY:NYSE',
    vote: 100,
    targetPrice: 600,
  },
  {
    uuid: 'cacd7366-ffcc-4bca-98d2-f733995c3434',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['ev'],
    targetUuid: 'NIO:NYSE',
    targetPrice: 4,
    vote: 1,
  },
  {
    uuid: 'c8cd7366-ffcc-4bca-98d2-f733995c3434',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['jess-robinhood', 'bad-earnings'],
    targetUuid: 'ABNB:NASDAQ',
    vote: 1,
  },
  {
    uuid: 'cbcd7366-ffcc-4bca-98d2-f733995c3434',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker', 'ok-earnings'],
    targetUuid: 'AFRM:NASDAQ',
    vote: 5,
  },
  {
    uuid: '46ac7624-8fe7-476b-a2d5-c8b11b472a8e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['retail', 'do-it-yourself'],
    targetUuid: 'DLTR:NASDAQ',
    targetPrice: 130,
  },
  {
    uuid: '46ac7624-8fe7-476b-a2d5-c8b11b472a8e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'WSM:NYSE',
    targetPrice: 240,
  },
  {
    uuid: '46ac7624-8fe7-476b-a2d5-c8b11b472a8e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [
      'good-earnings',
      'gen-ai',
      'hyperscaler',
      'accelerating-growth',
    ],
    targetUuid: 'ORCL:NYSE',
    vote: 20,
  },
  {
    uuid: 'b685a334-f1c8-44be-8792-179ea104ce82',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['jess-robinhood'],
    targetUuid: 'CRM:NYSE',
    vote: 10,
  },
  {
    uuid: 'b685a334-f1c8-44be-8792-179ea104ce82',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['gen-ai'],
    targetUuid: 'ADBE:NASDAQ',
    vote: 10,
    targetPrice: 450,
  },
  {
    uuid: 'aa83b2c0-3b97-4d3e-9e76-f887cfaed7b6',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['homebuilders'],
    targetUuid: 'LEN:NYSE',
    vote: 40,
  },
  {
    uuid: 'a8fcbe49-c6f4-48b9-a654-9c2f013ee82f',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'SPY:NYSE',
  },
  {
    uuid: 'a8fcbe49-c6f4-48b9-a654-9c2f013ee82f',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['bad-earnings'],
    targetUuid: 'PYPL:NASDAQ',
  },
  {
    uuid: '439d0827-496e-484c-a5c4-416b0985f8b7',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'AMC:NYSE',
  },
  {
    uuid: 'ab27827e-a3e2-4650-96ec-892961328637',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [
      'gen-ai',
      'semiconductor',
      'interactive-broker',
      'good-earnings',
    ],
    targetUuid: 'ARM:NASDAQ',
  },
  {
    uuid: 'a5357799-5804-48e8-8c75-c627666902e7',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'CASY:NASDAQ',
    targetPrice: 240,
    listUuids: ['retail'],
  },
  {
    uuid: 'a5357799-5804-48e8-8c75-c627666902e7',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['losing-money'],
    targetUuid: 'ASAN:NYSE',
    targetPrice: 15,
  },
  {
    uuid: '7b8b21b5-a002-47f8-aa73-9e9a14aa81d3',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['jess-robinhood', 'herman-robinhood', 'bad-earnings'],
    targetUuid: 'BABA:NYSE',
    vote: 7,
  },
  {
    uuid: '38eca63e-9c7a-4b2b-9c0b-9c091667addf',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'BBY:NYSE',
  },
  {
    uuid: '1fa1c4f1-e4aa-4764-a385-3ce95abe3d64',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['retail'],
    targetUuid: 'AEO:NYSE',
    vote: 1,
    targetPrice: 20,
  },
  {
    uuid: '1fa1c4f1-e4aa-4764-a385-3ce95abe3d64',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['retail'],
    targetUuid: 'KR:NYSE',
    vote: 1,
    targetPrice: 40,
  },
  {
    uuid: '1fa1c4f1-e4aa-4764-a385-3ce95abe3d64',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'BILI:NASDAQ',
    vote: 1,
    targetPrice: 8,
  },
  {
    uuid: 'b1fdfe69-9deb-47d8-a349-bc61a6505eac',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker', 'high-volatility'],
    targetUuid: 'CVNA:NYSE',
  },
  {
    uuid: '546f981f-b75f-481b-b872-f29a75d9e283',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker', 'jess-robinhood', 'founder-led'],
    targetUuid: 'DDOG:NASDAQ',
    vote: 4,
  },
  {
    uuid: '77d3536b-6a5b-4c72-994c-0c47b67d7e29',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['good-earnings'],
    targetUuid: 'DIS:NYSE',
  },
  {
    uuid: '3c936449-b17e-4c66-91d3-29f3c002a70d',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'DOCU:NASDAQ',
  },
  {
    uuid: '93433b94-001c-4d89-880b-1464a85c7ec8',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'ENPH:NASDAQ',
  },
  {
    uuid: '0e95432a-28d2-4a4f-8d45-1b1d1c8d80e3',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'GME:NYSE',
  },
  {
    uuid: '2dcafd8e-3a1b-4b97-a8d0-0fde17a1779a',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'IONQ:NYSE',
  },
  {
    uuid: '830b2e4b-3bce-4b6c-99b5-4e1d0d1f3e5b',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['ecommerce'],
    targetUuid: 'JD:NASDAQ',
    targetPrice: 21,
  },
  {
    uuid: 'e8d9f9c4-2e88-46d7-8e1d-9d8a3a0c6b33',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker', 'high-volatility'],
    targetUuid: 'LABU:NASDAQ',
  },
  {
    uuid: 'g8d9f9c4-2e88-46d7-8e1d-9d8a3a0c6b33',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['unpredictable'],
    targetUuid: 'LUV:NYSE',
  },
  {
    uuid: 'a80aa07e-6d6a-4c7d-8d31-65f5b6a6fb3a',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'LI:NASDAQ',
  },
  {
    uuid: 'f1a9f5d1-3b0f-4030-9d59-ee6c8b5a1d9b',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'LMND:NYSE',
  },
  {
    uuid: '9b4c5f15-ff1b-4b1a-84a8-9b9ad6a0f3b4',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'MTTR:NASDAQ',
  },
  {
    uuid: 'c3f5a5d3-ecb2-456c-ae42-9e8d9e845b27',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'NKE:NYSE',
  },
  {
    uuid: '3f67c22e-3f2f-49f6-aefa-7b4b7d5a0fde',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'RACE:NYSE',
  },
  {
    uuid: 'd6a3f8b3-8e9d-4f12-9d4eZS-4b7a2cfe5af3',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'ROKU:NASDAQ',
    vote: 1,
  },
  {
    uuid: 'd6a3f8b3-8e9d-4f12-9d4eZS-4b7a2cfe5af3',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'TTD:NASDAQ',
    vote: 10,
  },
  {
    uuid: '0d8a2b9b-9f60-4f29-8345-df4b0193d6ff',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'SCHW:NYSE',
  },
  {
    uuid: 'e52c0178-fa56-4bf8-9568-1c7a424d58d6',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'SE:NYSE',
  },
  {
    uuid: '40623b07-1d26-423e-bf18-d6867ab64029',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'SNOW:NYSE',
  },
  {
    uuid: 'a99138d4-ea4a-4151-a985-219e03771938',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'TDOC:NYSE',
  },
  {
    uuid: '389151f6-96a8-4ab0-bd7d-d9ab15cf0453',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker'],
    targetUuid: 'TEAM:NASDAQ',
  },

  {
    uuid: 'd9752acd-206b-47b2-9f2e-dce5edec2631',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    targetUuid: 'tgt:nyse',
    listUuids: ['retail'],
    targetPrice: 165,
    vote: 3,
  },
  {
    uuid: '598dbfcl3-841b-47ba-af36-fc44cd1f7b06',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [
      'bad-earnings',
      'interactive-broker',
      'losing-money',
      'slow-revenue-growth',
      'new-ceo',
      'lay-off',
      'differentiation',
      'industry-headwinds',
    ],
    targetUuid: 'U:NYSE',
  },
  {
    uuid: '88007eeb-e5b2-44b6-9b5a-874185dde17e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['interactive-broker', 'high-volatility', 'bad-earnings'],
    targetUuid: 'UPST:NASDAQ',
    vote: -5,
  },

  {
    uuid: 'fc715eed-be5a-447a-a134-12959ed1ebe0',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'W:NYSE',
  },
  {
    uuid: '5c0fe795-ec50-4bd4-80e6-ee91d91b866f',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'WAL:NYSE',
  },
  {
    uuid: '5c0fe795-ec50-4bd4-80e6-ee91d91b866f',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['cloud-computing'],
    targetUuid: 'FSLY:NYSE',
    vote: -5,
  },
  {
    uuid: '5c0fe795-ec50-4bd4-80e6-ee91d91b866f',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['transportation'],
    targetUuid: 'LYFT:NASDAQ',
    vote: 5,
  },
  {
    uuid: '6f63cb42-dfc5-4b56-a47a-65d41b48663e',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: [],
    targetUuid: 'ZM:NASDAQ',
  },
  {
    uuid: '42906212-f18c-4256-b90d-9ceb20c0a73c',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['ev'],
    targetUuid: 'XPEV:NYSE',
  },
  {
    uuid: '42906212-f18c-4256-b90d-9ceb20c0a73c',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['weight-loss'],
    targetUuid: 'VKTX:NASDAQ',
  },
  {
    uuid: '42906212-f18c-4256-b90d-9ceb20c0a73c',
    userUuid: 'herman.wrt@gmail.com',
    type: 'tradableItem',
    listUuids: ['weight-loss'],
    targetUuid: 'NVO:NYSE',
  },
];
