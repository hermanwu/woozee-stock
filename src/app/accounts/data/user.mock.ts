import { Asset } from 'src/app/assets/asset-type.enum';
import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';
import { RegionCode } from 'src/app/shared/data/enum/region.enum';
import { IndustryType } from 'src/app/stock/components/facts/data/area.enum';

export const currentUserMock: {
  defaultLanguage?: string;
  userUuid?: string;
  userName?: string;
  portfolios: any[];
  rankings: any[];
  industriesRankings: any[];
  marketRankings: any[];
  assetRankings: Asset[];
  opinions?: Opinion[];
  savedNotes: string[];
} = {
  userUuid: 'herman.wrt@gmail.com',
  userName: 'Herman',
  savedNotes: ['af064bd8-c894-4189-91c6-ee4c6d9ccb22'],
  portfolios: [
    { name: 'Favorites', stocks: ['crwd', 'aapl', 'snow'] },
    {
      name: 'Mock',
      stocks: ['crwd', 'aapl', 'tsla', 'snow', 'meta'],
    },
  ],
  rankings: [
    'tsla',
    'spy',
    'abnb',
    'snow',
    'aapl',
    'team',
    'amd',
    'hood',
    'amzn',
    'meta',
    'avgo',
    'mdb',
    'adbe',
    'crwd',
  ],

  industriesRankings: [
    IndustryType.ai,
    IndustryType.semi,
    IndustryType.saas,
    IndustryType.autoRobotics,
    IndustryType.ev,
    IndustryType.travel,
  ],

  marketRankings: [RegionCode.us, RegionCode.eu, RegionCode.cn],
  assetRankings: [],
};
