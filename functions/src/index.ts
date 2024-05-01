/* eslint-disable max-len */
import axios from 'axios';
import * as cors from 'cors';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as v2 from 'firebase-functions/v2';
import { getCompanyShortName } from './functions';

// const corsHandler = cors({ origin: ['https://invesdea.com'] });
const corsHandler = cors({
  origin: ['http://localhost:4200', 'https://invesdea.com'],
});
const api = '7yhlLmtHv8Q8FhP3RImzpPVdxktmD2Pb';

admin.initializeApp({
  storageBucket: 'invesdea',
});

const saveImage = async (url: string, fileName: string) => {
  const fileRef = admin.storage().bucket().file(fileName);

  try {
    const fileType = fileName.split('.').pop();

    if (fileType === 'png') {
      const axiosResponse = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      await fileRef.save(axiosResponse.data, {
        metadata: {
          contentType: 'image/png',
        },
      });
      console.log('File uploaded successfully.');
      return fileRef;
    } else if (fileType === 'svg') {
      const axiosResponse = await axios.get(url);
      await fileRef.save(axiosResponse.data, {
        metadata: {
          contentType: 'image/svg+xml',
        },
      });
      console.log('File uploaded successfully.');
      return fileRef;
    } else if (fileType === 'jpeg' || fileType === 'jpg') {
      const axiosResponse = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      await fileRef.save(axiosResponse.data, {
        metadata: {
          contentType: 'image/jpeg',
        },
      });
      console.log('File uploaded successfully.');
      return fileRef;
    } else {
      console.error('Unsupported file type.');
      return undefined;
    }
  } catch (error) {
    console.error('Error fetching or writing document: ', error);
    return undefined;
  }
};

export const downloadImage = async (
  downloadAddress: string,
  fileName: string
) => {
  const bucket = admin.storage().bucket();
  const fileRef = bucket.file(fileName);

  try {
    const [exists] = await fileRef.exists();
    if (exists) {
      // Assuming you have a method to construct the public URL
      const url = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
      console.log('File already exists:', url);
      return { message: 'File already exists', url };
    }

    const uploadedFileRef = await saveImage(downloadAddress, fileName);
    if (!uploadedFileRef) {
      console.log('Failed to fetch data');
      return { error: 'Failed to fetch data' };
    }
    await fileRef.makePublic();
    console.log('File uploaded successfully.');
    const url = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    return {
      message: 'Image uploaded successfully',
      url,
    };
  } catch (error) {
    console.error('Error: ', error);
    return { error: 'Failed to process request' };
  }
};
export const getStockByTicker = v2.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    const ticker =
      typeof request.query.ticker === 'string'
        ? request.query.ticker.trim()
        : '';
    if (!ticker) {
      response.status(400).send({ error: 'No valid ticker provided' });
      return;
    }

    const docRef = admin.firestore().collection('stocks').doc(ticker);
    const endpoint = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${api}`;

    try {
      const doc = await docRef.get();
      // If the document already exists and last_updated is a week ago, fetch the data again
      if (doc.exists && doc.data()?.last_updated > Date.now() - 604800000) {
        console.log(`Data for ${ticker} already exists. Skipping fetch.`);
        response.status(200).send(doc.data());
        return;
      }

      const axiosResponse = await axios.get(endpoint);
      const stockDetails = axiosResponse.data.results;
      stockDetails.last_updated = Date.now();
      stockDetails.display_name = getCompanyShortName(stockDetails.name);

      // Add to search document
      admin
        .firestore()
        .collection('search')
        .doc('searchData')
        .set(
          {
            [stockDetails.ticker]: {
              market_cap: stockDetails.market_cap,
              display_name: stockDetails.display_name,
              type: 'stock',
              ticker: stockDetails.ticker,
            },
          },
          { merge: true }
        );

      // Download the logo
      const logoUrl = stockDetails?.branding?.logo_url;
      if (logoUrl) {
        const fileName = `${ticker}-logo.` + logoUrl.split('.').pop();
        const downloadResult = await downloadImage(
          `${logoUrl}?apiKey=${api}`,
          fileName
        );

        if (downloadResult.url) {
          stockDetails.branding.logo_url = downloadResult.url;
        }
      }

      // Download the icon
      const iconUrl = stockDetails?.branding?.icon_url;
      if (iconUrl) {
        const fileName = `${ticker}-icon.` + iconUrl.split('.').pop();
        const downloadResult = await downloadImage(
          `${iconUrl}?apiKey=${api}`,
          fileName
        );

        if (downloadResult.url) {
          stockDetails.branding.icon_url = downloadResult.url;
        }
      }

      admin
        .firestore()
        .collection('stocks')
        .doc(ticker)
        .set(stockDetails, { merge: true });
      console.log('Document successfully written for ticker:', ticker);
      response.status(200).send(stockDetails); // Sending the data back as the response
    } catch (error) {
      console.error('Error fetching or writing document: ', error);
      response.status(500).send({ error: 'Failed to fetch data' }); // Send an appropriate error response
    }
  });
});

export const getLatestStockData = functions.pubsub
  .schedule('every 15 minutes')
  .onRun(async () => {
    const today = getToday();
    // const previousBusinessDay = getPreviousBusinessDay();

    // const endpoint = `https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=${api}`;
    const endpoint = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${today}?adjusted=true&apiKey=${api}`;

    try {
      const response = await axios.get(endpoint);
      const data = response.data;
      const collectionName = 'prices';
      const documentId = today;
      await admin
        .firestore()
        .collection(collectionName)
        .doc(documentId)
        .set(data);
      console.log('Document successfully written with your ID!');
    } catch (error) {
      console.error('Error fetching or writing document: ', error);
    }
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

// Testing endpoints
export const testDownloadImage = v2.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    const endpoint = `https://api.polygon.io/v1/reference/company-branding/YWJvdXQubWV0YS5jb20/images/2024-03-01_icon.png?apiKey=${api}`;
    const fileName = `META-icon.png`;

    const downloadResult = await downloadImage(endpoint, fileName);

    if (downloadResult.error) {
      response.status(500).send(downloadResult);
      return;
    }

    response.status(200).send(downloadResult);
  });
});

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
