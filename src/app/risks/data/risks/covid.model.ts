import { Source } from 'src/app/shared/data/source.enum';

export const covid = {
  name: 'COVID',
  notes: [
    {
      content: 'facts',
      notes: [],
    },
    {
      content: 'impacts',
      notes: [
        {
          content: 'labor shortage',
          notes: [
            {
              content: 'People retired early',
            },
            {
              content: 'Less immigrants',
              notes: [
                {
                  content:
                    'There are about 2 million fewer working-age immigrants in the U.S. because of Covid immigration restrictions, according to calculations of census data from two economists at University of California, Davis.',
                },
              ],
            },
            {
              content:
                'About 1.5 million fewer mothers of school-age kids are actively working compared with pre-pandemic times, according to Misty L. Heggeness, a principal economist at the Census Bureau.',
              source: Source.axios,
            },
          ],
        },
      ],
    },
  ],
  startTime: new Date('2022-01-01'),
  endTime: new Date('2022-12-31'),
};
