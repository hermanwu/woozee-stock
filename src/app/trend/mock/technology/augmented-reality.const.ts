import { Risk } from 'src/app/risks/models/risk.model';
import { TechnologyTrend } from './technology-trend.model';

export const augmentedRealityRisks: Risk = {
  name: 'Augmented Reality Risks',
  notes: [
    {
      content:
        'Limited to business related usage. (Medical Training, Retail, Education)',
    },
    {
      content: 'Growth rate is also limited (2020 => 26.35%)',
    },
  ],
};

export const augmentedRealityTechnology: TechnologyTrend = {
  useCases: [
    {
      content: 'Medical Training',
    },
    {
      content: 'Education',
    },
  ],
};
