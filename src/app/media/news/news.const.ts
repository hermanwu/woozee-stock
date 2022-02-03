import { Note } from 'src/app/shared/data/note.interface';
import { Source } from 'src/app/shared/data/source.enum';

type News = {
  [key: string]: Note;
};

export const news: News = {
  '1': {
    content:
      'Facebook shares tumbled more than 20%. Earnings came in below expectations for the fourth quarter, and the company said numerous challenges are ahead in the first quarter. Revenue in the first quarter will be between $27 billion and $29 billion, while analysts were looking for that number to top $30 billion.',
    link: 'https://www.cnbc.com/2022/02/02/facebook-parent-meta-fb-q4-2021-earnings.html',
    source: Source.cnbc,
  },

  '2': {
    content:
      'Facebook’s user growth faltered in the latest quarter, the first stagnation in the social network’s history.',
    link: 'https://www.bloomberg.com/news/articles/2022-02-02/facebook-shares-plunge-as-users-stall-forecast-falls-short?srnd=premium',
    date: new Date('2022-02-03'),
    source: Source.bloomberg,
  },
  '3': {
    content:
      'Now young users -- the future consumers of its advertising -- are choosing platforms like TikTok and Google’s YouTube for entertainment and community instead.',
    link: 'https://www.bloomberg.com/news/articles/2022-02-02/facebook-shares-plunge-as-users-stall-forecast-falls-short?srnd=premium',
    date: new Date('2022-02-03'),
    source: Source.bloomberg,
  },
};
