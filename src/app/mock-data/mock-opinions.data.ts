import { Opinion } from '../notes/components/opinion-display/opinion.interface';

export interface Quote {
  content?: string;
  title?: string;
  question?: string;
  authorUuid?: string;
}

export const opinions: Opinion[] = [
  {
    organizationName: '天风国际',
    authorName: '郭明錤',
    title: '苹果将在2024年推出折叠式iPad。',
    tags: ['aapl'],
    uuid: 'd3128088-bab6-4de4-add3-1d7e0b008b74',
    date: '2023-01-30T22:38:30.535Z',
  },

  {
    organization: 'KeyBanc',
    authorName: 'Justin Patterson',
    targets: ['lyft'],
    type: 'rating',
    rating: 'Bullish',
    date: '2023-01-30T22:38:30.535Z',
    content:
      'shares could see big gains as the ride-share company cuts costs and sees demand stabilize',
  },
  {
    organization: 'Deutsche Bank',
    authorName: 'Bhavin Shah',
    targets: ['SHOP'],
    rating: 'Bullish',
    content:
      'brands grow increasingly interested in, such as Mattel and Supreme; Many leading brands are now actively looking to migrate or are in the process of migrating over from legacy/competing solutions and we note this is in sharp contrast to our conversations over the last twelve months which consistently highlighted the pace of migrations slowing.',
    date: '2023-01-30T22:38:30.535Z',
  },
];
