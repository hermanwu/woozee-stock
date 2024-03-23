/* eslint-disable max-len */
import axios from 'axios';
import * as admin from 'firebase-admin';
import * as v2 from 'firebase-functions/v2';
admin.initializeApp();

export const getLatestStockData = v2.https.onRequest((request, response) => {
  const api = '7yhlLmtHv8Q8FhP3RImzpPVdxktmD2Pb';
  const today = getToday();
  const previousBusinessDay = getPreviousBusinessDay();
  console.log(today);
  console.log(previousBusinessDay);

  // const endpoint = `https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${api}`;
  const endpoint = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${previousBusinessDay}?adjusted=true&apiKey=${api}`;

  axios.get<any>(endpoint).then((response) => {
    const db = admin.firestore();
    const data = response.data;
    const collectionName = 'prices';
    const documentId = previousBusinessDay;
    const docRef = db.collection(collectionName).doc(documentId);
    // Set the data in your document
    console.log(data);
    docRef
      .set(data)
      .then(() => {
        console.log('Document successfully written with your ID!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  });

  response.send(`<h1>message: !</h1>`);
});

export const getToday = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  // getMonth() returns 0 for January, 11 for December, so we add 1 to get the correct month number
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Ensures two digits
  const day = ('0' + currentDate.getDate()).slice(-2); // Ensures two digits
  return `${year}-${month}-${day}`;
};

export const getPreviousBusinessDay = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6

  if (dayOfWeek === 0) {
    // If today is Sunday, go back to Friday
    today.setDate(today.getDate() - 2);
  } else if (dayOfWeek === 1) {
    // If today is Monday, go back to Friday
    today.setDate(today.getDate() - 3);
  } else {
    // Otherwise, just go back one day
    today.setDate(today.getDate() - 1);
  }

  // Convert the date to 'yyyy-mm-dd' format
  const dateAsString = today.toISOString().slice(0, 10);
  return dateAsString;
};

// export const hello = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true });
//   response.send('Hello from Firebase!');
// });

// export const scheduledFunction = functions.pubsub
//   .schedule('every 120 minutes')
//   .onRun((context) => {
//     const api = '7yhlLmtHv8Q8FhP3RImzpPVdxktmD2Pb';
//     const endpoint = `https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${api}`;
//     // const endpoint = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2024-03-19?adjusted=true&apiKey=${api}`;

//     axios.get<any>(endpoint).then((response) => {
//       functions.logger.info(response.data);
//     });

//     return null;
//   });
