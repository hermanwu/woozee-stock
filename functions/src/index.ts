/* eslint-disable max-len */
import axios from 'axios';
import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const hello = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

export const scheduledFunction = functions.pubsub
  .schedule('every 120 minutes')
  .onRun((context) => {
    const api = '7yhlLmtHv8Q8FhP3RImzpPVdxktmD2Pb';
    const endpoint = `https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${api}`;

    axios.get<any>(endpoint).then((response) => {
      functions.logger.info(response.data);
    });

    return null;
  });
