import { Opinion } from '../components/opinion-display/opinion.interface';

export interface Quote {}

export interface Note {
  type?: string | Quote | Opinion;
  authorName?: string;
  editor?: string;
  content?: string;
}

export const opinions: Opinion[] = [
  {
    organization: 'KeyBanc',
    authorName: 'Justin Patterson',
    targets: ['lyft'],
    type: 'rating',
    rating: 'Bullish',
    content:
      'shares could see big gains as the ride-share company cuts costs and sees demand stabilize',
  },
  {
    organization: 'KeyBanc',
    authorName: 'Justin Patterson',
    targets: ['lyft'],
    type: 'rating',
    rating: 'Bullish',
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
  },
];
