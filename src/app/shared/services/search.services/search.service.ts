import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { tradable } from 'src/app/mock-data/mocks/tradables.mock';
import { organizations } from 'src/app/mock-data/organization.mock';
import { mockProducts } from 'src/app/mock-data/product.mock';

export interface StateGroup {
  label: string;
  items?: any[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  stateGroups: StateGroup[];
  stocksMap = {};

  constructor(private firestore: AngularFirestore) {
    for (let stock of tradable) {
      this.stocksMap[stock.ticker.toUpperCase()] = stock;
    }

    this.stateGroups = [
      {
        label: 'Organization',
        items: organizations,
      },
      {
        label: 'Product',
        items: mockProducts,
      },
      {
        label: 'People',
        items: [],
      },
    ];

    this.getSearchPairsOfStock().subscribe(
      (data: any) => {
        // iterate attributes and values of the data object
        for (let [key, value] of Object.entries(data)) {
          // add the stock to the stocksMap
          if (!this.stocksMap[key]) {
            this.stocksMap[key] = { ticker: key, displayName: value };
          }
        }

        const sortedEntries = Object.entries(this.stocksMap).sort(
          ([keyA], [keyB]) => keyA.localeCompare(keyB)
        );
        this.stocksMap = Object.fromEntries(sortedEntries);

        this.stateGroups.unshift({
          label: 'Stocks and ETFs',
          items: Object.values(this.stocksMap),
        });
      },
      (err) => {
        console.error('Error fetching search/stocks:', err);
      }
    );
  }

  getSearchOptions(): StateGroup[] {
    return this.stateGroups;
  }

  // Recursive function to fetch the previous business day data until a valid result is found
  getSearchPairsOfStock() {
    return this.firestore
      .collection('search')
      .doc('stocks')
      .valueChanges()
      .pipe(
        first(),
        catchError((err) => {
          console.error('Error fetching search/stocks:', err);
          // Depending on your error handling, you might want to stop the recursion here
          // and return an empty observable or rethrow the error
          return throwError(err);
        })
      );
  }
}
