import { UserInteractions } from 'src/emotion/emotion.services';

export const getInteractionsByProductId = (
  productId: string
): UserInteractions => {
  return userInteractions.find(
    (interaction) => interaction.targetUuid === productId
  );
};

export const userInteractions: UserInteractions[] = [
  {
    uuid: '79783991-d90b-44f2-8268-5af4edbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'li',
    hearted: 1,
    type: 'stock',
  },
  {
    uuid: '79783993-d90b-44f2-8268-5af46fbbe264',
    userUuid: 'herman.wrt@gmail.com',
    targetUuid: 'li-l9',
    vote: 10,
    type: 'product',
    hearted: 1,
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
];
