import { Source } from 'src/app/shared/data/source.enum';
import { FactType } from '../../models/fact-type.enum';
import { RiskLevel } from '../../models/risk-level.model';

export const inflation = {
  updatedTime: new Date('2022-04-07'),
  name: 'Inflation',
  level: RiskLevel.high,
  type: FactType.macro,
  notes: [
    // {
    //   content: 'Facts',
    //   notes: [
    //     {
    //       content:
    //         'Goods and services are cost more to make and become expensive.',
    //     },
    //     {
    //       content:
    //         'December CPI data shows inflation rose 0.47 percent monthly, but a seven percent year-over-year increase, the highest level since 1982.',
    //       source: Source['www.cnbc.com'],
    //     },
    //     {
    //       content:
    //         'The consumer price index jumped 6.8% in the 12 months ending in November—the highest since 1982. ... It’s not even clear that those higher inflation readings have peaked',
    //       source: Source.marketWatch,
    //     },
    //     {
    //       content: 'Wage increases 4.8% in November',
    //       link: 'https://www.bls.gov/news.release/eci.htm',
    //     },
    //   ],
    // },
    // {
    //   content: 'Reasons',
    //   notes: [
    //     {
    //       content: 'Quantitative easing since COVID.',
    //     },
    //     {
    //       content: 'Less goods are imported from countries like China.',
    //     },
    //     {
    //       content: 'Less goods and services are created due to labor shortage.',
    //     },
    //   ],
    // },
    // {
    //   content: 'Potential Impacts',
    //   notes: [
    //     {
    //       content: 'Causes more inflations',
    //       notes: [
    //         {
    //           content:
    //             'As people and businesses spend more quickly in an effort to reduce the time they hold their depreciating currency, the economy finds itself awash in cash no one particularly wants. In other words, the supply of money outstrips the demand, and the price of money—the purchasing power of currency—falls at an ever-faster rate.',
    //           source: Source.investopedia,
    //         },
    //         {
    //           content:
    //             'Inflation, when left unchecked, can also escalate quickly. As we mentioned before, inflation messes with the human brain. As workers grow concerned about rising prices, they push for higher wages, which in turn raises costs for businesses, which forces them to hike prices, and...lather, rinse, repeat. This is called the “wage–price spiral,” and it led to consumer prices rising more than 14% annually in 1980.',
    //           source: Source.Morningbrew,
    //         },
    //       ],
    //     },
    //     {
    //       content:
    //         'If price is inflated too much, people will stop spending, which would cause a recession.',
    //     },
    //   ],
    // },
    // {
    //   content: 'Optimistic Views',
    //   notes: [
    //     {
    //       content:
    //         'Global fund managers expect inflation -- not economic growth -- to decline this year, and are placing record bets on a boom in both commodities and stocks, a Bank of America Corp. survey showed.',
    //     },
    //     {
    //       content:
    //         'The surge in euro-area inflation that surprised policy makers in recent months is close to its peak, according to European Central Bank Governing Council member Francois Villeroy de Galhau. ',
    //       source: Source.bloomberg,
    //     },
    //     {
    //       content:
    //         'Energy prices fell last month for the first time since April, and food prices -- while still rising -- moderated somewhat as the cost of meat fell.',
    //       source: Source.bloomberg,
    //     },
    //     {
    //       content: 'Rent sector of CPI has not been increasing dramatically',
    //     },
    //   ],
    // },
    // {
    //   content: 'Pessimistic Views',
    //   notes: [
    //     {
    //       content:
    //         'The fastest inflation in four decades has reached an “excessive” level, in part because of stimulative monetary policy used to counter the economic consequences of the pandemic, said Howard Marks, co-founder of Oaktree Capital Management. ',
    //       source: Source.bloomberg,
    //     },
    //     {
    //       content:
    //         'Though many economists anticipate inflation to moderate to around 3% over the course of 2022, consumers are likely months away from a meaningful respite, especially as the omicron variant of the coronavirus worsens labor shortages and prevents goods from reaching store shelves.',
    //       source: Source.bloomberg,
    //     },
    //   ],
    // },
  ],

  endTime: new Date('2022-12-31'),
  solutions: [
    {
      content: 'Increase supplies.',
      notes: [
        {
          content: 'Resolve supply chain bottlenecks.',
        },
        {
          content: 'Increase work forces on the market.',
        },
      ],
    },
    {
      content: 'Reduce demands',
      notes: [
        {
          content:
            'Reduce asset value, i.e. stocks, so people have to come back to the labor market. ',
          source: Source.investopedia,
        },
        {
          content:
            'Governments can also employ a contractionary monetary policy to fight inflation by reducing the money supply within an economy via decreased bond prices and increased interest rates.',
          source: Source.investopedia,
        },
        {
          content:
            'Governments can use wage and price controls to fight inflation, but that can cause recession and job losses.',
          source: Source.investopedia,
        },
      ],
    },
  ],
  actions: [
    {
      content: 'Monitor CPI to make sure it is not keep increasing',
    },
    {
      content: 'Own companies that has pricing power to adapt price adjustment',
      notes: [],
    },
    {
      content: 'Own companies that can scale and face less competition',
      notes: [],
    },
    {
      content: 'Buy PUT options',
      notes: [
        {
          content:
            'i.e. buy puts that will expire in 2.5 months and roll it when its expiration is less than 2 months ',
        },
      ],
    },
    {
      content: 'Sell covered call options',
      notes: [
        {
          content: 'i.e. covered calls that will expire in 1.5 months',
        },
      ],
    },
  ],
};
