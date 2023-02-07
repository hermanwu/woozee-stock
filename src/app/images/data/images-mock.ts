import { IndustryType } from 'src/app/facts/data/area.enum';

export const images = new Map<string, string[]>([
  ['atvi', ['https://i.ibb.co/yScSfZ5/header-0120-1920x1080.webp']],
  [
    'pins',
    ['https://i.ibb.co/vhZsrYx/Screenshot-2023-02-06-at-2-28-58-PM.png'],
  ],
  [
    'sbux',
    ['https://pbs.twimg.com/media/Fn_w1jtaIAA66bO?format=png&name=900x900'],
  ],
  ['gm', ['https://pbs.twimg.com/media/Fn1aE0PaYAARx9Z?format=jpg&name=small']],
  ['f', ['https://i.ibb.co/NNVPJv2/Screenshot-2023-01-30-at-3-00-35-PM.png']],
  ['nio', ['https://i.ibb.co/myr0HdZ/Screenshot-2023-01-29-at-6-15-49-PM.png']],
  [
    'amd',
    ['https://pbs.twimg.com/media/Fn1ieV6aEAA3XvI?format=jpg&name=4096x4096'],
  ],
  [
    'intc',
    ['https://i.ibb.co/RYGgQJW/Screenshot-2023-01-26-at-2-16-36-PM.png'],
  ],
  [
    'lvmh',
    ['https://i.ibb.co/ys8P3NL/Screenshot-2023-01-26-at-2-08-57-PM.png'],
  ],
  [
    'asml',
    ['https://i.ibb.co/VgXLqNQ/asml-wins-semi-americas-award-for-euv.jpg'],
  ],
  ['ba', ['https://i.ibb.co/RPpQjdM/Screenshot-2023-01-25-at-5-25-27-PM.png']],
  ['jnj', ['https://i.ibb.co/crCSrLq/Screenshot-2023-01-24-at-3-32-56-PM.png']],
  ['txn', ['https://i.ibb.co/VBRtd8w/Screenshot-2023-01-24-at-3-32-14-PM.png']],
  ['txn', ['https://i.ibb.co/VBRtd8w/Screenshot-2023-01-24-at-3-32-14-PM.png']],
  [
    'isrg',
    ['https://i.ibb.co/RcY6wrK/Screenshot-2023-01-24-at-3-35-05-PM.png'],
  ],
  [
    'lmt',
    [
      'https://i.ibb.co/dmhv70D/1ae0080f-0218-44df-91f2-fbc977b48746-LM-logo.webp',
    ],
  ],

  [
    'spot',
    ['https://i.ibb.co/NsnSRkw/Screenshot-2023-01-23-at-2-51-01-PM.png'],
  ],
  [
    'amzn',
    ['https://i.ibb.co/4jYF8wZ/Screenshot-2023-01-19-at-2-12-07-PM.png'],
  ],
  ['jwn', ['https://i.ibb.co/c1vmLWF/Screenshot-2023-01-19-at-2-13-19-PM.png']],

  [
    'mrna',
    ['https://i.ibb.co/9yvC2Qd/Screenshot-2023-01-17-at-2-10-28-PM.png'],
  ],
  [
    'meta',
    ['https://pbs.twimg.com/media/Fn6rEkuaMAAwhWQ?format=jpg&name=medium'],
  ],
  ['ual', ['https://i.ibb.co/FW0RjWM/Screenshot-2023-01-17-at-2-11-21-PM.png']],
  ['wen', ['https://i.ibb.co/t47Wg89/Screenshot-2023-01-14-at-7-09-59-AM.png']],
  ['tsm', ['https://i.ibb.co/qdmWf3J/Screenshot-2023-01-14-at-6-27-22-AM.png']],
  ['boa', ['https://i.ibb.co/tCvNSDq/Screenshot-2023-01-14-at-6-31-35-AM.png']],
  ['jpm', ['https://i.ibb.co/QJqsSYm/Screenshot-2023-01-14-at-6-28-53-AM.png']],
  ['ms', ['https://i.ibb.co/PrqD9Sy/Screenshot-2023-01-17-at-3-35-49-PM.png']],
  ['ai', ['']],
  ['m', ['https://i.ibb.co/6X3BxSW/Screen-Shot-2023-01-07-at-11-28-02-AM.png']],
  [
    'medicine',
    ['https://i.ibb.co/LYGWYhn/Screen-Shot-2023-01-06-at-5-46-12-PM.png'],
  ],
  [
    'jobs',
    ['https://i.ibb.co/nMVcG2D/Screen-Shot-2023-01-07-at-11-27-10-AM.png'],
  ],
  [
    'news',
    [
      'https://i.ibb.co/K2HHkDQ/Screenshot-2023-01-12-at-4-59-18-PM.png',
      'https://i.ibb.co/19gjWSk/Screenshot-2023-01-12-at-4-59-47-PM.png',
    ],
  ],
  [
    'retail',
    ['https://i.ibb.co/qxCr6N9/Screen-Shot-2023-01-07-at-11-22-25-AM.png'],
  ],
  [
    'crypto',
    ['https://i.ibb.co/ZL4rycf/Screen-Shot-2023-01-05-at-1-49-34-PM.png'],
  ],
  [
    'cost',
    ['https://pbs.twimg.com/media/Fn6onglagAA1raR?format=jpg&name=medium'],
  ],
  [
    'dis'.toLowerCase(),
    ['https://i.ibb.co/mHxTLx6/Screenshot-2023-01-12-at-3-51-25-PM.png'],
  ],
  [
    'WMT'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaUuVXzUYAENWgr?format=png&name=small'],
  ],
  [
    'TOST'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaACIrVUEAA6gg0?format=jpg&name=large'],
  ],
  [
    'RIVN'.toLowerCase(),
    ['https://pbs.twimg.com/media/FZ_wMy1UIAA71A2?format=jpg&name=large'],
  ],
  [
    'LZ'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaAIvfAVQAAkJN9?format=jpg&name=medium'],
  ],
  [
    'LI'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaPj1YxVEAAukuu?format=png&name=900x900'],
  ],
  [
    'IONQ'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaUSk3OVUAE2J--?format=jpg&name=medium'],
  ],
  [
    'TGT'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaZkSNyUcAAwrVx?format=jpg&name=large'],
  ],
  [
    'CSCO'.toLowerCase(),
    ['https://pbs.twimg.com/media/FaaTAiUUIAAuIWe?format=jpg&name=medium'],
  ],
  [
    'ZM'.toLowerCase(),
    ['https://pbs.twimg.com/media/Fa0rlkPVsAE2xo_?format=jpg&name=medium'],
  ],
  [
    'PANW'.toLowerCase(),
    ['https://pbs.twimg.com/media/Fa0z3XiUIAA02lS?format=jpg&name=large'],
  ],
  [
    'LULU'.toLowerCase(),
    ['https://pbs.twimg.com/media/FbmW7vBUEAEurwc?format=png&name=900x900'],
  ],
  [
    'DOCU'.toLowerCase(),
    ['https://pbs.twimg.com/media/FcKWHNJakAMH6KM?format=jpg&name=medium'],
  ],
  [
    'ZS'.toLowerCase(),
    ['https://pbs.twimg.com/media/FcKrgcPagAQcjdA?format=png&name=900x900'],
  ],
  [
    'oxy'.toLowerCase(),
    ['https://pbs.twimg.com/media/FcP7YRDakAA5NCd?format=jpg&name=large'],
  ],
  [
    'HOOD'.toLowerCase(),
    ['https://pbs.twimg.com/media/FcQQs2_aMAAQBPE?format=png&name=900x900'],
  ],
  ['PTON'.toLowerCase(), ['https://i.ibb.co/6Nc2BLy/Peloton-Logo.jpg']],
  [
    'GOOGL'.toLowerCase(),
    ['https://i.ibb.co/rbTcZs4/Screen-Shot-2022-09-12-at-5-16-30-PM.png'],
  ],
  [
    'bitcoin'.toLowerCase(),
    ['https://i.ibb.co/0j0Szy1/Screen-Shot-2022-09-12-at-5-34-43-PM.png'],
  ],
  [
    'TWTR'.toLowerCase(),
    ['https://i.ibb.co/Hn1grHN/Screen-Shot-2022-09-13-at-3-15-32-PM.png'],
  ],
  [
    IndustryType.semi.toLowerCase(),
    ['https://i.ibb.co/BBfz7Bg/Screen-Shot-2022-09-13-at-4-15-06-PM.png'],
  ],
  [
    'aapl',
    [
      'https://i.ibb.co/VD4X1qG/Screenshot-2023-01-12-at-4-03-09-AM.png',
      'https://i.ibb.co/QC9stf3/Screen-Shot-2023-01-10-at-6-58-30-PM.png',
      'https://i.ibb.co/fd7KjPp/Screen-Shot-2022-09-13-at-5-44-58-PM.png',
    ],
  ],
  [
    'nflx',
    ['https://i.ibb.co/kKNKyBS/Screen-Shot-2022-09-14-at-3-56-02-PM.png'],
  ],
  [
    'tsla',
    [
      'https://i.ibb.co/SmYJLpY/Screenshot-2023-01-16-at-4-13-34-PM.png',
      'https://i.ibb.co/RjCTwdY/Screenshot-2023-01-12-at-3-58-51-PM.png',
      'https://i.ibb.co/6Ynh4Yt/Screen-Shot-2022-09-14-at-2-19-09-PM.png',
    ],
  ],
  [
    'eth',
    ['https://i.ibb.co/566wK0w/Screen-Shot-2022-09-14-at-4-22-48-PM.png'],
  ],
  [
    'adbe',
    ['https://i.ibb.co/4SYMyDp/Screen-Shot-2022-09-15-at-7-23-14-AM.png'],
  ],
  [
    'baba',
    ['https://i.ibb.co/HgsK1Hj/Screen-Shot-2023-01-09-at-2-56-42-PM.png'],
  ],
  [
    'real estate',
    ['https://i.ibb.co/8YJYnfN/Screen-Shot-2023-01-09-at-2-58-02-PM.png'],
  ],
  [
    'pfe',
    ['https://i.ibb.co/1LSXMqb/Screen-Shot-2023-01-09-at-2-59-05-PM.png'],
  ],
  [
    'cpi',
    [
      'https://i.ibb.co/JrzWv0S/Screenshot-2023-01-12-at-3-56-07-PM.png',
      'https://i.ibb.co/w6TcmPh/Screenshot-2023-01-12-at-4-02-32-AM.png',
    ],
  ],
  [
    'bbby',
    ['https://i.ibb.co/1M0xdzK/Screen-Shot-2023-01-10-at-6-57-05-PM.png'],
  ],
  [
    'fed',
    ['https://i.ibb.co/mFbH51K/Screen-Shot-2023-01-10-at-6-55-29-PM.png'],
  ],
  [
    'coin',
    ['https://i.ibb.co/ZJZNntn/Screen-Shot-2023-01-10-at-7-09-36-PM.png'],
  ],
  [
    'housing',
    ['https://i.ibb.co/qgdpmLz/Screen-Shot-2023-01-10-at-7-04-30-PM.png'],
  ],
  [
    'ubi',
    ['https://i.ibb.co/YccDq36/Screenshot-2023-01-11-at-10-50-45-PM.png'],
  ],
  [
    'binance',
    ['https://i.ibb.co/pjQyM40/Screenshot-2023-01-11-at-10-09-24-PM.png'],
  ],
  [
    'spce',
    ['https://i.ibb.co/jkWjBgG/Screenshot-2023-01-12-at-3-57-21-PM.png'],
  ],
  [
    'lcid',
    ['https://i.ibb.co/JkGnxRM/Screenshot-2023-01-12-at-3-58-08-PM.png'],
  ],
  ['gs', ['https://i.ibb.co/1qmvLL2/Screenshot-2023-01-16-at-3-56-17-PM.png']],
  [
    'earnings',
    ['https://i.ibb.co/6g6qpXc/Screenshot-2023-01-16-at-11-45-56-AM.png'],
  ],
  [
    'schw',
    ['https://i.ibb.co/pdchgtc/Screenshot-2023-01-16-at-3-58-04-PM.png'],
  ],
  ['pg', ['https://i.ibb.co/P5Rwhqn/Screenshot-2023-01-16-at-4-01-31-PM.png']],
  [
    'msft',
    [
      'https://i.ibb.co/yNkjnXR/Screenshot-2023-01-25-at-3-42-24-AM.png',
      'https://i.ibb.co/tcWqmsY/Screenshot-2023-01-18-at-3-15-51-PM.png',
    ],
  ],
  ['dfs', ['https://i.ibb.co/s6XFk1T/Screenshot-2023-01-18-at-3-17-08-PM.png']],
]);
