export const sellPut = {
  name: 'sell calls',
  risks: [
    {
      context: 'is RSI high enough',
    },
    {
      context: 'call needs to be stock covered or put covered',
    },
    {
      context:
        'Sell call only at the price points that you think is unable to reach within the time frame',
    },
    {
      context:
        'Can you portfolio handle the result after 10 percent increase in a week.',
    },
  ],
};
