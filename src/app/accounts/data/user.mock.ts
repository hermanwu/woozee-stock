import { Opinion } from 'src/app/notes/components/opinion-display/opinion.interface';

export const currentUserMock: {
  defaultLanguage?: string;
  userUuid?: string;
  userName?: string;
  portfolios: any[];
  opinions?: Opinion[];
} = {
  userUuid: 'herman.wrt@gmail.com',
  userName: 'Herman',
  portfolios: [
    { name: 'Favorites', stocks: ['crwd', 'aapl', 'snow'] },
    {
      name: 'Mock',
      stocks: ['crwd', 'aapl', 'tsla', 'snow', 'meta'],
    },
  ],
};
