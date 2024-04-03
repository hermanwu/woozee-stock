import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';

export class Price {
  T: string; // Ticker
  c: number; // Close price
  h: number; // High price
  l: number; // Low price
  o: number; // Open price
}

@Injectable({
  providedIn: 'root',
})
export class PricesServices {
  private closedPriceMap: any = {};
  private currentPriceMap: any = {};
  private pricesLoaded = new BehaviorSubject<{
    closedPriceMap: any;
    currentPriceMap: any;
  } | null>(null);

  constructor(private firestore: AngularFirestore) {
    this.loadPrices();
  }

  // Fetch both closedPrice and currentPrice documents
  loadPrices(): void {
    // let previousBusinessDay = formatDateToString(getPreviousBusinessDay());
    // let dayBeforePreviousBusinessDay = formatDateToString(
    //   getPreviousBusinessDay(getPreviousBusinessDay())
    // );
    const today = formatDateToString(new Date());
    // console.log(dayBeforePreviousBusinessDay);
    // console.log(previousBusinessDay);
    // console.log(today);

    // const closedPrices$ = this.firestore
    //   .collection('prices')
    //   .doc(formatDateToString(getPreviousBusinessDay()))
    //   .valueChanges()
    //   .pipe(
    //     first(),
    //     catchError((err) => {
    //       console.error('closedPrices$ error:', err);
    //       throw err; // Rethrow error to be handled by forkJoin
    //     })
    //   );

    const closedPrices$ = this.fetchPreviousBusinessDayData(new Date()).pipe(
      catchError((err) => {
        console.error('closedPrices$ error:', err);
        throw err; // Rethrow error to be handled by forkJoin
      })
    );

    const currentPrices$ = this.firestore
      .collection('prices')
      .doc(today)
      .valueChanges()
      .pipe(
        first(),
        catchError((err) => {
          console.error('currentPrices$ error:', err);
          throw err;
        })
      );

    forkJoin([closedPrices$, currentPrices$]).subscribe(
      ([closedRes, currentRes]: any[]) => {
        // console.log('forkJoin received values:', closedRes, currentRes);

        this.processClosedPrices(closedRes);
        this.processCurrentPrices(currentRes);
        console.log(this.closedPriceMap);

        this.pricesLoaded.next({
          closedPriceMap: this.closedPriceMap,
          currentPriceMap: this.currentPriceMap,
        });
      }
    );
  }

  // Recursive function to fetch the previous business day data until a valid result is found
  fetchPreviousBusinessDayData(date = new Date()) {
    const previousBusinessDay = getPreviousBusinessDay(date);
    const formattedDate = formatDateToString(previousBusinessDay);
    console.log(formattedDate);

    return this.firestore
      .collection('prices')
      .doc(formattedDate)
      .valueChanges()
      .pipe(
        first(),
        switchMap((result: any) => {
          // Check if the result has a 'results' property and is not empty
          if (result && result.results) {
            return of(result); // Return the result as an observable
          } else {
            // If the result is invalid, fetch the data for the next previous business day
            return this.fetchPreviousBusinessDayData(previousBusinessDay);
          }
        }),
        catchError((err) => {
          console.error('Error fetching prices:', err);
          // Depending on your error handling, you might want to stop the recursion here
          // and return an empty observable or rethrow the error
          return throwError(err);
        })
      );
  }

  processClosedPrices(res: any): void {
    if (res?.results) {
      for (let result of res.results) {
        this.closedPriceMap[result.T] = result;
      }
    }
  }

  processCurrentPrices(res: any): void {
    if (res?.results) {
      for (let result of res.results) {
        this.currentPriceMap[result.T] = result;
      }
    }
  }

  // Example method to get data by ticker
  public getPriceByTicker(
    ticker: string
  ): Observable<{ closedPrice: Price; currentPrice: Price } | null> {
    return this.pricesLoaded.pipe(
      map((prices) => {
        if (!prices) {
          // console.warn('Prices not yet loaded');
          return null;
        }
        return {
          closedPrice: prices.closedPriceMap[ticker.toUpperCase()],
          currentPrice: prices.currentPriceMap[ticker.toUpperCase()],
        };
      }),
      catchError((err) => {
        console.error('Error in getPriceByTicker:', err);
        return of(null); // Return null;
      })
    );
  }
}

function getPreviousBusinessDay(inputDate = new Date()) {
  let date = new Date(inputDate); // Copy the input date
  date.setDate(date.getDate() - 1); // Start with yesterday

  while (date.getDay() === 0 || date.getDay() === 6) {
    // Check if it's a weekend
    date.setDate(date.getDate() - 1); // Go back one day
  }

  return date;
}

function formatDateToString(dateObj) {
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // +1 for zero-based months
  const day = dateObj.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
